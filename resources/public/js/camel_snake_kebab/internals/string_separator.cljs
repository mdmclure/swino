(ns camel-snake-kebab.internals.string-separator
                                           )

     
                                

(defprotocol StringSeparator
  (split [this s] ": StringSeparator -> String -> NonEmptySeq[String]"))

     
                                                 
                             
                                                                                
                                               
                                                                    
                                                
                                                  
                                                              
                                                             
                                                            

      
(extend-protocol StringSeparator
  ;; Notes:
  ;; * Characters are just strings in ClojureScript.
  ;; * Using js/RegExp generates a warning, but what's the right way?

  js/RegExp
  (split [this s] (seq (.split s this)))

  string
  (split [this s] (seq (.split s this))))

(defn classify-char [c]
  (case c
    (\0 \1 \2 \3 \4 \5 \6 \7 \8 \9) :number
    (\- \_ \space \tab \newline \o013 \formfeed \return) :whitespace
    (\a \b \c \d \e \f \g \h \i \j \k \l \m \n \o \p \q \r \s \t \u \v \w \x \y \z) :lower
    (\A \B \C \D \E \F \G \H \I \J \K \L \M \N \O \P \Q \R \S \T \U \V \W \X \Y \Z) :upper
    :other))

(defn generic-split [ss]
  (let [cs (mapv classify-char ss)]
    (loop [result (transient []), start 0, current 0]
      (let [next (inc current)
            result+new (fn [end]
                         (if (> end start)
                           (conj! result (.substring ^String ss start end))
                           result))]
        (cond (>= current (count ss))
              (or (seq (persistent! (result+new current)))
                  ;; Return this instead of an empty seq:
                  [""])

              (= (nth cs current) :whitespace)
              (recur (result+new current) next next)

              (let [[a b c] (subvec cs current)]
                ;; This expression is not pretty,
                ;; but it compiles down to sane JavaScript.
                (or (and (not= a :upper)  (= b :upper))
                    (and (not= a :number) (= b :number))
                    (and (= a :upper) (= b :upper) (= c :lower))))
              (recur (result+new next) next next)

              :else
              (recur result start next))))))

(def generic-separator
  (reify StringSeparator
    (split [_ s] (generic-split s))))

;;;;;;;;;;;; This file autogenerated from src/camel_snake_kebab/internals/string_separator.cljx
