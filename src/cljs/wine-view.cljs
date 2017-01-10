(ns swino.wine-view
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :as ui]
            [cljs-react-material-ui.icons :as ic]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [swino.parser :as p]
            [swino.util :as u]
            [om.dom :as dom]
            [cljs.core.async :refer [<! >! timeout]])
  (:require-macros [cljs.core.async.macros :refer [go-loop]]))

(defn async-transition [component state-key
                        update-fn end-fn
                        final-transaction]
   (when (state-key (om/get-state component))
     (go-loop []
       (if (end-fn (state-key (om/get-state component)))
         (om/transact! component final-transaction)
         (do (om/update-state! component update state-key update-fn)
             (<! (timeout 10))
             (recur))))))
  
(defui WineView
  static om/Ident
  (ident [this {:keys [db/id]}]
    [:wine/by-id id])

  static om/IQuery
  (query [this]
    [:db/id :wine/name :wine/year {:wine/color [:color/name]}])

  Object
  
  (initLocalState [this]
                  {:top 84})
  
  (componentWillMount [this]
    (async-transition this :top #(- % 16) #(<= % 6) nil))
  
  (render [this]
          (let [{:keys [db/id wine/name wine/year wine/color]} (om/props this)
                topk (keyword (str (:top (om.next/get-state this)) "%"))]
            (ui/paper
             {:class-name "wine-view"
              :zDepth 3
              :style {:top topk}
              }
             (dom/h1 
              #js {:className "wine-header"}
              name)
             (ic/content-clear
              {:class-name "exit"
               :on-touch-tap #(async-transition
                               this :top (fn [x] (+ x 4)) (fn [x] (>= x 84))
                               `[(wine/focus {:id nil}) :wine/focus])})))))

(def ^:export view-wine (om/factory WineView {}))
