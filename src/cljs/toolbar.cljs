(ns swino.toolbar
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [cljs-react-material-ui.icons :as ic]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]))

(defui Toolbar
  static om/IQuery
  (query [this]
    [:filter/focus])
  Object
  (render [this]
          (let [filter (om/props this)]
            (println filter)
            (dom/div
             #js {:className "toolbar"}
             ))))

(def ^:export toolbar (om/factory Toolbar {}))
