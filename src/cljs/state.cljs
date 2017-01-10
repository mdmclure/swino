(ns swino.state)

(defonce init-state
         {:wine/list     [[:wine/by-id 1]
                          [:wine/by-id 2]
                          [:wine/by-id 3]
                          [:wine/by-id 4]
                          [:wine/by-id 5]
                          [:wine/by-id 6]
                          [:wine/by-id 7]
                          [:wine/by-id 8]
                          [:wine/by-id 9]]
          :wine/by-id    {1 {:db/id            1
                             :wine/name      "Cocobon"
                             :wine/year      2014
                             :wine/color    [:color/by-id 1]}
                          2 {:db/id            2
                             :wine/name      "Beringer Founders' Estate"
                             :wine/year      2011
                             :wine/color    [:color/by-id 2]}
                          3 {:db/id            3
                             :wine/name      "Pomelo"
                             :wine/year      2012
                             :wine/color    [:color/by-id 1]}
                          4 {:db/id            4
                             :wine/name      "Cocobon"
                             :wine/year      2014
                             :wine/color    [:color/by-id 1]}
                          5 {:db/id            5
                             :wine/name      "Beringer Founders' Estate"
                             :wine/year      2011
                             :wine/color    [:color/by-id 2]}
                          6 {:db/id            6
                             :wine/name      "Pomelo"
                             :wine/year      2012
                             :wine/color    [:color/by-id 1]}
                          7 {:db/id            7
                             :wine/name      "Cocobon"
                             :wine/year      2014
                             :wine/color    [:color/by-id 1]}
                          8 {:db/id            8
                             :wine/name      "Beringer Founders' Estate"
                             :wine/year      2011
                             :wine/color    [:color/by-id 2]}
                          9 {:db/id            9
                             :wine/name      "Pomelo"
                             :wine/year      2012
                             :wine/color    [:color/by-id 1]}}
          :wine/new      {:wine/name      ""
                            :wine/year      2016
                            :wine/color    nil}
          :wine/focus     []
          :filter/focus         []
          :color/list     [[:color/by-id 1] [:color/by-id 2] [:color/by-id 3]]
          :color/by-id    {1 {:db/id 1 :color/name "Red"}
                            2 {:db/id 2 :color/name "White"}
                            3 {:db/id 3 :color/name "Pink"}}})
