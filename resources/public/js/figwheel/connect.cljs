(ns figwheel.connect (:require [swino.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "app", :websocket-url "ws://localhost:3449/figwheel-ws"})

