goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__7214 = libspec;
var seq__7215 = cljs.core.seq(vec__7214);
var first__7216 = cljs.core.first(seq__7215);
var seq__7215__$1 = cljs.core.next(seq__7215);
var lib = first__7216;
var spec = seq__7215__$1;
var libspec__$1 = vec__7214;
var vec__7217 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7217,(0),null);
var vec__7220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7217,(1),null);
var seq__7221 = cljs.core.seq(vec__7220);
var first__7222 = cljs.core.first(seq__7221);
var seq__7221__$1 = cljs.core.next(seq__7221);
var _ = first__7222;
var first__7222__$1 = cljs.core.first(seq__7221__$1);
var seq__7221__$2 = cljs.core.next(seq__7221__$1);
var alias = first__7222__$1;
var post_spec = seq__7221__$2;
var post = vec__7220;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__7225 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__7225,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__7225;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__7235 = cljs.core.seq(new_as_aliases);
var chunk__7236 = null;
var count__7237 = (0);
var i__7238 = (0);
while(true){
if((i__7238 < count__7237)){
var vec__7273 = chunk__7236.cljs$core$IIndexed$_nth$arity$2(null, i__7238);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7273,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7273,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__7313 = seq__7235;
var G__7314 = chunk__7236;
var G__7315 = count__7237;
var G__7316 = (i__7238 + (1));
seq__7235 = G__7313;
chunk__7236 = G__7314;
count__7237 = G__7315;
i__7238 = G__7316;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__7235);
if(temp__5804__auto__){
var seq__7235__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7235__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__7235__$1);
var G__7317 = cljs.core.chunk_rest(seq__7235__$1);
var G__7318 = c__5525__auto__;
var G__7319 = cljs.core.count(c__5525__auto__);
var G__7320 = (0);
seq__7235 = G__7317;
chunk__7236 = G__7318;
count__7237 = G__7319;
i__7238 = G__7320;
continue;
} else {
var vec__7282 = cljs.core.first(seq__7235__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7282,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7282,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__7323 = cljs.core.next(seq__7235__$1);
var G__7324 = null;
var G__7325 = (0);
var G__7326 = (0);
seq__7235 = G__7323;
chunk__7236 = G__7324;
count__7237 = G__7325;
i__7238 = G__7326;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__7287 = arguments.length;
switch (G__7287) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__7294 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__7294__$1 = cljs.core.__destructure_map(map__7294);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7294__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7294__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__7295 = ret__$1;
var G__7295__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7295,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__7295);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7295__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__7295__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7297,p__7298){
var map__7299 = p__7297;
var map__7299__$1 = cljs.core.__destructure_map(map__7299);
var ret__$1 = map__7299__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7299__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__7301 = p__7298;
var seq__7302 = cljs.core.seq(vec__7301);
var first__7303 = cljs.core.first(seq__7302);
var seq__7302__$1 = cljs.core.next(seq__7302);
var spec_key = first__7303;
var libspecs = seq__7302__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__7304 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__7304__$1 = cljs.core.__destructure_map(map__7304);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7304__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7304__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__7305 = ret__$1;
var G__7305__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7305,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__7305);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__7305__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__7305__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
