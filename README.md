## Update clojurescript analysis cache

Analysis cache and macro precompiled files are stored under `docs/cache-cljs`.

The cache files are generated with `lumo` or `planck`.

There are two kind of namespaces:

1. namespaces bundled in lumo e.g `cljs.test`, `cljs.spec`
2. namepsaces not bundled in lumo e.g. `om.next`, `reagent`

For #1, you need to add the namespace in `generate-clojure-spec-cache.cljs` and run from the **root folder**

```bash
lumo generate-clojure-spec-cache.cljs

```

For #2, you need to:

1. `cd cache`

2. add the new dependency in `project.clj`

3. run `lein deps`

4. open lumo/planck with the appropriate cache folder and class path:

```bash
export cp=`lein classpath`
planck -k . -c $cp
```

5. inside lumo, you need to require your namespaces, and the cache will be stored under `docs/cache-cljs` e.g.:

```bash
cljs.user=> (require 'clojure.test.check)
```

6. commit `/cache` to master branch

7. push master branch
