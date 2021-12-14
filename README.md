## Update ClojureScript analysis cache

Analysis cache and macro precompiled files are stored under `/cache`.

The cache files are generated with `shadow-cljs`.

You need to add the dependencies and the namespaces in `cache-shadow/shadow-cljs.edn` (don't forget to update `:entries` or `:macros`) and run from the **cache-shadow**

1. `cd cache-shadow`
1. `yarn`
1. Run `./update-cache` to generate the files and copy them to `./cache` folder
1. Commit `./cache` to master branch
1. Push master branch github will make the files available through Github pages mechanism at https://viebel.github.io/cljs-analysis-cache/cache/

`shadow-cljs` is able to generate analysis cache as it is explained [here](https://code.thheller.com/blog/shadow-cljs/2017/10/14/bootstrap-support.html), and the code is [here](https://github.com/thheller/shadow-cljs/blob/master/src/main/shadow/build/targets/bootstrap.clj#L153-L170)




