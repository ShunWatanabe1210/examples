(ns user
  (:require [clojure.java.io :as io] [integrant.core :as ig]
            [integrant.repl :refer [clear go halt prep init reset]]))

(integrant.repl/set-prep! (constantly (ig/read-string (slurp (io/resource "config.edn")))))
