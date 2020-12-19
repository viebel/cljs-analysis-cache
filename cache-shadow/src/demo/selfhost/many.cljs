(ns demo.selfhost.many
  (:require [cljs.js :as cljs]
            [cljs.spec.alpha :as s]
            [cljs.env :as env]
            [shadow.cljs.bootstrap.browser :as boot]))

(s/def ::str-or-kw (s/alt :str string?
                          :kw  keyword?))

(defn print-result [{:keys [error value] :as result}]
  (js/console.log "result" result)
  (set! (.-innerHTML (js/document.getElementById "dump")) value))

(def code "(map inc [1 2 3])")


(defonce compile-state-ref (env/default-compiler-env))

(defn compile-it []
  (cljs/eval-str
    compile-state-ref
    code
    "[test]"
    {:eval cljs/js-eval
     :load (partial boot/load compile-state-ref)}
    print-result))

(defn start []
  (boot/init compile-state-ref
    {:path "/bootstrap"}
    compile-it))

(defn stop [])
