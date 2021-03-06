(defproject klipse-cache-ns "0.0.1"
  :description "cache ns for bootstrap cljs"
  :local-repo "local-m2"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.597"]
                 [org.clojure/core.specs.alpha "0.2.44"]
                 [cljs-bean "1.5.0"]
		             [cljsjs/react "16.13.1-0"]
		             [cljsjs/react-dom "16.13.1-0"]
                 [andare "1.1.587"] ;; A fork of core.async ported for use with self-hosted ClojureScript.
                 [viebel/hoquet "0.0.3"]
	               [viebel/hicada "0.1.8"]
                 [cljs-http "0.1.42" :exclusions [org.clojure/core.async]] ;; core.async is provided by andare
                 [viebel/gadjett "0.5.9" :exclusions [org.clojure/core.async org.clojure/core.match]] ;; core.async is provided by andare, core.match is provided by abbinare
                 [viebel/klipse-clj "10.1.3"]
                 [org.omcljs/om "1.0.0-alpha47"]
                 [com.cemerick/url "0.1.1"]
                 [rewrite-cljs "0.4.3"]
                 [viebel/re-frame "0.9.3-SNAPSHOT" :exclusions [reagent]]


[viebel/http-fx "0.1.4-SNAPSHOT" :exclusions [reagent]]
                 [com.andrewmcveigh/cljs-time "0.5.0"]
                 [org.clojure/test.check "0.10.0-alpha3"]
                 [viebel/abbinare "1.10.597"]
                 [viebel/reagent "1.0.0-alpha2"]
                 [viebel/poppea "0.2.1"]
                 [expound "0.7.1"] 
                 ;[org.clojure/math.combinatorics "0.1.3"]
                 ]
  :npm {:dependencies [["@pupeno/xmlhttprequest" "1.7.0"]]}
  :plugins [[lein-npm "0.6.2"]])
