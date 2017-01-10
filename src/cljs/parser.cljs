(ns swino.parser
  (:require [om.next :as om]
            [swino.state :refer [init-state]]))


(defmulti read om/dispatch)

(defmethod read :default
  [{:keys [state query]} k _]
  #_(println "Default read " k query)
  (let [st @state]
    
    {:remote false
     :value  (om/db->tree query (k st) st)}))

(defmethod read :wine/new
  [{:keys [state]} k _]
  {:value (k @state)})

(defmulti mutate om/dispatch)

(defmethod mutate :default
  [_ k _]
  #_(println "Default mutate " k)
  {:remote false})

(defmethod mutate 'wine/change
  [{:keys [state]} _ {:keys [value path]}]
  {:action (fn []
             (swap! state assoc-in (cons :wine/new path) value))})

(defmethod mutate 'wine/focus
  [{:keys [state]} _ {:keys [id]}]
  {:action (fn []
             (do (swap! state assoc :wine/focus
                        (when id [[:wine/by-id id]]))
                 (println "State: " state)))})

(defmethod mutate 'wine/add
  [{:keys [state]} _]
  {:action (fn []
             (let [id (rand-int 9999)
                   person-new (-> (:person/new @state)
                                  (assoc :db/id id))]
               (swap! state assoc-in [:person/by-id id] person-new)
               (swap! state update :person/list conj [:person/by-id id])
               (swap! state assoc :person/new (:person/new init-state))))})
