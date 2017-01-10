(ns swino.wine-tile
  (:require 
   [cljsjs.material-ui]
   [cljs-react-material-ui.core :as ui]
   [om.next :as om :refer-macros [defui]]
   [om.dom :as dom]))

(defui WineTile
  static om/Ident
  (ident [this {:keys [db/id]}]
    [:wine/by-id id])

  static om/IQuery
  (query [this]
    [:db/id :wine/name :wine/year {:wine/color [:color/name]}])

  Object
  (render [this]
          (let [{:keys [db/id wine/name wine/year wine/color]} (om/props this)]
            (ui/grid-tile
             {:title name
              :on-touch-tap #(om/transact! this `[(wine/focus {:id ~id}) :wine/focus])}
             ))))

(def ^:export tile-wine (om/factory WineTile {}))
