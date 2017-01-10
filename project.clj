(defproject swino "0.1.0-SNAPSHOT"
  :description "Because you're too classy for a cellar"
  :url "http://swino.club"
  :license {:name "Eclipse Public License"
            :url  "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.293"]
                 [org.clojure/core.async "0.2.374"]
                 [org.omcljs/om "1.0.0-alpha37" :exclusions [cljsjs/react]]
                 [com.stuartsierra/component "0.3.1"]
                 [com.cemerick/piggieback "0.2.1"]
                 [figwheel-sidecar "0.5.0-2" :scope "test"]
                 [com.cemerick/piggieback "0.2.1"]
                 [org.clojure/tools.nrepl "0.2.10"]
                 [aleph "0.4.1-beta5"]
                 [bidi "2.0.4"]
                 [yada "1.1.5"]
                 [juxt.modular/bidi "0.9.5"]
                 [juxt.modular/maker "0.5.0"]
                 [juxt.modular/wire-up "0.5.0"]
                 [juxt.modular/aleph "0.1.4"]
                 [com.andrewmcveigh/cljs-time "0.4.0"]
                 [cljs-react-material-ui "0.2.30"]
                 [prismatic/schema "1.1.1"]
                 [print-foo-cljs "2.0.0"]]
  
  :plugins [[lein-cljsbuild "1.1.3"]
            [lein-figwheel "0.5.0-2"]]
  :min-lein-version "2.0.0"
  :uberjar-name "swino.jar"
  :clean-targets ^{:protect false} ["resources/public/js"]
  :source-paths ["src/clj" "src/cljs"]
  :figwheel {:http-server-root "public"
             ;;:server-port 3449
             ;;:nrepl-port 7002 ;;start nREPL on port 7002
             :css-dirs ["resources/public/css"]
             ;;:ring-handler yourapp/handler
             }
  :cljsbuild {:builds {:app {:source-paths ["src/cljs"]
                             :figwheel     true
                             :compiler     {:main            swino.core
                                            :output-to       "resources/public/js/app.js"
                                            :output-dir      "resources/public/js"
                                            :asset-path      "/js"
                                            :optimizations   :none
                                            :pretty-print    true
                                            :externs         ["src/js/externs.js"]
                                            :closure-defines {goog.DEBUG false}
                                            :parallel-build  true
                                            :verbose         true}}}}

  :profiles {:dev     {:source-paths ["env/dev/clj"]
                       :main         swino.dev-server
                       :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                       :plugins      [[lein-figwheel "0.5.1"]]}
             :uberjar {:source-paths ["env/prod/clj"]
                       :main         swino.prod-server
                       :hooks        [leiningen.cljsbuild]
                       :aot          :all
                       :omit-source  true
                       :cljsbuild    {:builds {:app
                                               {:compiler {:optimizations   :advanced
                                                           :closure-defines {:goog.DEBUG false}
                                                           :pretty-print    false}}}}}})
