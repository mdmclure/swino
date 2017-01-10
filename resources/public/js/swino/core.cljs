(ns swino.core
  (:require [cljsjs.material-ui]
            [cljs-react-material-ui.core :as ui]
            [cljs-react-material-ui.icons :as ic]
            [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [swino.parser :as p]
            [swino.util :as u]
            [om.dom :as dom]
            [swino.state :refer [init-state]]
            [swino.toolbar :refer [toolbar]]
            [swino.wine-tile :refer [tile-wine]]
            [swino.wine-view :refer [view-wine]]))

(enable-console-print!)


(defui AppRoot
  static om/IQuery
  (query [this]
    [{:wine/list (om/get-query swino.wine-tile/WineTile)}
     {:color/list [:db/id :color/name]}
     {:wine/focus (om/get-query swino.wine-view/WineView)}])
  Object
  (render [this]
          (let [props (om/props this)
                state (om/get-state this)
                wine-list (:wine/list props)
                color-list (:color/list props)
                wine-focus (first (:wine/focus props))
          ]
      (ui/mui-theme-provider
        {:mui-theme (ui/get-mui-theme 
                     {:palette                   ; You can use either camelCase or kebab-case
            {:primary1-color (ui/color :deep-orange-a100)} 
         :raised-button 
            {:primary-text-color (ui/color :light-black) 
             :font-weight 200}}
                     )}
        (dom/div
          #js {:className "h-100"}

          ;;(println wine-focus)
          (ui/grid-list
           {:cell-height 50
            :cols 2}
           (map tile-wine wine-list))
          
          (if wine-focus
            (view-wine wine-focus)
            (toolbar))
          
          (dom/img
           #js {:src "./swino-button.svg"
                :height 56 :width 56
                :className "swino-button"})

          (ui/floating-action-button
           {:on-touch-tap   #(om/transact! this `[(wine/add)
                                                   :wine/new :wine/list])
            :style {:position :fixed :right :12% :bottom :10%
                    :margin-bottom -28 :margin-right -28}}
           (ic/content-add
            {:style {:width 56 :height 56}})))))))

(def reconciler
  (om/reconciler
   {:state     (atom init-state)
    :normalize true
    :parser    (om/parser {:read p/read :mutate p/mutate})}))

(om/add-root! reconciler AppRoot (gdom/getElement "app"))
