goog.provide('cljs.source_map');
goog.scope(function(){
  cljs.source_map.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__8340){
var vec__8341 = p__8340;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8341,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8341,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null, a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null, b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__8345 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8345,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8345,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8345,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8345,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8345,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(cljs.source_map.goog$module$goog$object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5804__auto__)){
var name__$1 = temp__5804__auto__;
return (cljs.source_map.goog$module$goog$object.get(source_map,"names")[name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__8352 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8352,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8352,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8352,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8352,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8352,(4),null);
var vec__8355 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8355,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8355,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8355,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8355,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8355,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__5002__auto__ = col;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 *   update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__8369 = segmap;
var map__8369__$1 = cljs.core.__destructure_map(map__8369);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8369__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8369__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8369__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8369__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8369__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 *   mapping original ClojureScript source locations to the generated
 *   JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(var_args){
var G__8373 = arguments.length;
switch (G__8373) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__8382 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9420 = cljs.core.next(segs__$1);
var G__9421 = nrelseg;
var G__9422 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9420;
relseg__$1 = G__9421;
result__$1 = G__9422;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8382,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8382,(1),null);
var G__9424 = (gline + (1));
var G__9425 = cljs.core.next(lines__$1);
var G__9426 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9427 = result__$1;
gline = G__9424;
lines__$1 = G__9425;
relseg = G__9426;
result = G__9427;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2);

/**
 * Helper for decode. Take a source map and update it based on a
 *   segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__8386 = segmap;
var map__8386__$1 = cljs.core.__destructure_map(map__8386);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8386__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8386__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8386__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8386__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__8385_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__8385_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__8392 = arguments.length;
switch (G__8392) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(cljs.source_map.goog$module$goog$object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = cljs.source_map.goog$module$goog$object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__8411 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9449 = cljs.core.next(segs__$1);
var G__9450 = nrelseg;
var G__9451 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9449;
relseg__$1 = G__9450;
result__$1 = G__9451;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8411,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8411,(1),null);
var G__9453 = (gline + (1));
var G__9454 = cljs.core.next(lines__$1);
var G__9455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9456 = result__$1;
gline = G__9453;
lines__$1 = G__9454;
relseg = G__9455;
result = G__9456;
continue;
} else {
return result;
}
break;
}
}));

(cljs.source_map.decode.cljs$lang$maxFixedArity = 2);

/**
 * Take a nested sorted map encoding line and column information
 * for a file and return a vector of vectors of encoded segments.
 * Each vector represents a line, and the internal vectors are segments
 * representing the contents of the line.
 */
cljs.source_map.lines__GT_segs = (function cljs$source_map$lines__GT_segs(lines){
var relseg = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (segs,cols){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8414){
var vec__8415 = p__8414;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8415,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8415,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8415,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8415,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8415,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__8420){
var vec__8421 = p__8420;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8421,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8421,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8421,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8421,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8421,(4),null);
var seg = vec__8421;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8424){
var vec__8425 = p__8424;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8425,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8425,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8425,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8425,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8425,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return lname;
}
})()], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cols__$1,cljs.source_map.base64_vlq.encode(offset));
}),cljs.core.PersistentVector.EMPTY,cols));
}),cljs.core.PersistentVector.EMPTY,lines);
});
/**
 * Take an internal source map representation represented as nested
 * sorted maps of file, line, column and return a source map v3 JSON
 * string.
 */
cljs.source_map.encode = (function cljs$source_map$encode(m,opts){
var lines = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var names__GT_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var name_idx = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5802__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5802__auto__)){
var name = temp__5802__auto__;
var idx = (function (){var temp__5802__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5802__auto____$1)){
var idx = temp__5802__auto____$1;
return idx;
} else {
var cidx = cljs.core.deref(name_idx);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(names__GT_idx,cljs.core.assoc,name,cidx);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(name_idx,cljs.core.inc);

return cidx;
}
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segv,idx);
} else {
return segv;
}
});
var encode_cols = (function (infos,source_idx,line,col){
var seq__8440 = cljs.core.seq(infos);
var chunk__8441 = null;
var count__8442 = (0);
var i__8443 = (0);
while(true){
if((i__8443 < count__8442)){
var info = chunk__8441.cljs$core$IIndexed$_nth$arity$2(null, i__8443);
var segv_9466 = info__GT_segv(info,source_idx,line,col);
var gline_9467 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9468 = cljs.core.count(cljs.core.deref(lines));
if((gline_9467 > (lc_9468 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8440,chunk__8441,count__8442,i__8443,segv_9466,gline_9467,lc_9468,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9467 - (lc_9468 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9466], null));
});})(seq__8440,chunk__8441,count__8442,i__8443,segv_9466,gline_9467,lc_9468,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8440,chunk__8441,count__8442,i__8443,segv_9466,gline_9467,lc_9468,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9467], null),cljs.core.conj,segv_9466);
});})(seq__8440,chunk__8441,count__8442,i__8443,segv_9466,gline_9467,lc_9468,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9473 = seq__8440;
var G__9474 = chunk__8441;
var G__9475 = count__8442;
var G__9476 = (i__8443 + (1));
seq__8440 = G__9473;
chunk__8441 = G__9474;
count__8442 = G__9475;
i__8443 = G__9476;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__8440);
if(temp__5804__auto__){
var seq__8440__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8440__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__8440__$1);
var G__9478 = cljs.core.chunk_rest(seq__8440__$1);
var G__9480 = c__5525__auto__;
var G__9481 = cljs.core.count(c__5525__auto__);
var G__9482 = (0);
seq__8440 = G__9478;
chunk__8441 = G__9480;
count__8442 = G__9481;
i__8443 = G__9482;
continue;
} else {
var info = cljs.core.first(seq__8440__$1);
var segv_9483 = info__GT_segv(info,source_idx,line,col);
var gline_9484 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9485 = cljs.core.count(cljs.core.deref(lines));
if((gline_9484 > (lc_9485 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8440,chunk__8441,count__8442,i__8443,segv_9483,gline_9484,lc_9485,info,seq__8440__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9484 - (lc_9485 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9483], null));
});})(seq__8440,chunk__8441,count__8442,i__8443,segv_9483,gline_9484,lc_9485,info,seq__8440__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8440,chunk__8441,count__8442,i__8443,segv_9483,gline_9484,lc_9485,info,seq__8440__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9484], null),cljs.core.conj,segv_9483);
});})(seq__8440,chunk__8441,count__8442,i__8443,segv_9483,gline_9484,lc_9485,info,seq__8440__$1,temp__5804__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9490 = cljs.core.next(seq__8440__$1);
var G__9491 = null;
var G__9492 = (0);
var G__9493 = (0);
seq__8440 = G__9490;
chunk__8441 = G__9491;
count__8442 = G__9492;
i__8443 = G__9493;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__8444_9494 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__8445_9496 = null;
var count__8446_9497 = (0);
var i__8447_9498 = (0);
while(true){
if((i__8447_9498 < count__8446_9497)){
var vec__8620_9499 = chunk__8445_9496.cljs$core$IIndexed$_nth$arity$2(null, i__8447_9498);
var source_idx_9500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8620_9499,(0),null);
var vec__8623_9501 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8620_9499,(1),null);
var __9502 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8623_9501,(0),null);
var lines_9503__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8623_9501,(1),null);
var seq__8626_9506 = cljs.core.seq(lines_9503__$1);
var chunk__8627_9507 = null;
var count__8628_9508 = (0);
var i__8629_9509 = (0);
while(true){
if((i__8629_9509 < count__8628_9508)){
var vec__8668_9510 = chunk__8627_9507.cljs$core$IIndexed$_nth$arity$2(null, i__8629_9509);
var line_9511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8668_9510,(0),null);
var cols_9512 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8668_9510,(1),null);
var seq__8671_9516 = cljs.core.seq(cols_9512);
var chunk__8672_9517 = null;
var count__8673_9518 = (0);
var i__8674_9519 = (0);
while(true){
if((i__8674_9519 < count__8673_9518)){
var vec__8681_9520 = chunk__8672_9517.cljs$core$IIndexed$_nth$arity$2(null, i__8674_9519);
var col_9521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8681_9520,(0),null);
var infos_9522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8681_9520,(1),null);
encode_cols(infos_9522,source_idx_9500,line_9511,col_9521);


var G__9524 = seq__8671_9516;
var G__9525 = chunk__8672_9517;
var G__9526 = count__8673_9518;
var G__9527 = (i__8674_9519 + (1));
seq__8671_9516 = G__9524;
chunk__8672_9517 = G__9525;
count__8673_9518 = G__9526;
i__8674_9519 = G__9527;
continue;
} else {
var temp__5804__auto___9528 = cljs.core.seq(seq__8671_9516);
if(temp__5804__auto___9528){
var seq__8671_9530__$1 = temp__5804__auto___9528;
if(cljs.core.chunked_seq_QMARK_(seq__8671_9530__$1)){
var c__5525__auto___9531 = cljs.core.chunk_first(seq__8671_9530__$1);
var G__9532 = cljs.core.chunk_rest(seq__8671_9530__$1);
var G__9533 = c__5525__auto___9531;
var G__9534 = cljs.core.count(c__5525__auto___9531);
var G__9535 = (0);
seq__8671_9516 = G__9532;
chunk__8672_9517 = G__9533;
count__8673_9518 = G__9534;
i__8674_9519 = G__9535;
continue;
} else {
var vec__8684_9536 = cljs.core.first(seq__8671_9530__$1);
var col_9537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8684_9536,(0),null);
var infos_9538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8684_9536,(1),null);
encode_cols(infos_9538,source_idx_9500,line_9511,col_9537);


var G__9542 = cljs.core.next(seq__8671_9530__$1);
var G__9543 = null;
var G__9544 = (0);
var G__9545 = (0);
seq__8671_9516 = G__9542;
chunk__8672_9517 = G__9543;
count__8673_9518 = G__9544;
i__8674_9519 = G__9545;
continue;
}
} else {
}
}
break;
}


var G__9546 = seq__8626_9506;
var G__9547 = chunk__8627_9507;
var G__9548 = count__8628_9508;
var G__9549 = (i__8629_9509 + (1));
seq__8626_9506 = G__9546;
chunk__8627_9507 = G__9547;
count__8628_9508 = G__9548;
i__8629_9509 = G__9549;
continue;
} else {
var temp__5804__auto___9550 = cljs.core.seq(seq__8626_9506);
if(temp__5804__auto___9550){
var seq__8626_9551__$1 = temp__5804__auto___9550;
if(cljs.core.chunked_seq_QMARK_(seq__8626_9551__$1)){
var c__5525__auto___9552 = cljs.core.chunk_first(seq__8626_9551__$1);
var G__9553 = cljs.core.chunk_rest(seq__8626_9551__$1);
var G__9554 = c__5525__auto___9552;
var G__9555 = cljs.core.count(c__5525__auto___9552);
var G__9556 = (0);
seq__8626_9506 = G__9553;
chunk__8627_9507 = G__9554;
count__8628_9508 = G__9555;
i__8629_9509 = G__9556;
continue;
} else {
var vec__8687_9557 = cljs.core.first(seq__8626_9551__$1);
var line_9558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687_9557,(0),null);
var cols_9559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687_9557,(1),null);
var seq__8690_9560 = cljs.core.seq(cols_9559);
var chunk__8691_9561 = null;
var count__8692_9562 = (0);
var i__8693_9563 = (0);
while(true){
if((i__8693_9563 < count__8692_9562)){
var vec__8700_9564 = chunk__8691_9561.cljs$core$IIndexed$_nth$arity$2(null, i__8693_9563);
var col_9565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700_9564,(0),null);
var infos_9566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8700_9564,(1),null);
encode_cols(infos_9566,source_idx_9500,line_9558,col_9565);


var G__9567 = seq__8690_9560;
var G__9568 = chunk__8691_9561;
var G__9569 = count__8692_9562;
var G__9570 = (i__8693_9563 + (1));
seq__8690_9560 = G__9567;
chunk__8691_9561 = G__9568;
count__8692_9562 = G__9569;
i__8693_9563 = G__9570;
continue;
} else {
var temp__5804__auto___9588__$1 = cljs.core.seq(seq__8690_9560);
if(temp__5804__auto___9588__$1){
var seq__8690_9599__$1 = temp__5804__auto___9588__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8690_9599__$1)){
var c__5525__auto___9600 = cljs.core.chunk_first(seq__8690_9599__$1);
var G__9601 = cljs.core.chunk_rest(seq__8690_9599__$1);
var G__9602 = c__5525__auto___9600;
var G__9603 = cljs.core.count(c__5525__auto___9600);
var G__9604 = (0);
seq__8690_9560 = G__9601;
chunk__8691_9561 = G__9602;
count__8692_9562 = G__9603;
i__8693_9563 = G__9604;
continue;
} else {
var vec__8703_9605 = cljs.core.first(seq__8690_9599__$1);
var col_9606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8703_9605,(0),null);
var infos_9607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8703_9605,(1),null);
encode_cols(infos_9607,source_idx_9500,line_9558,col_9606);


var G__9608 = cljs.core.next(seq__8690_9599__$1);
var G__9609 = null;
var G__9610 = (0);
var G__9611 = (0);
seq__8690_9560 = G__9608;
chunk__8691_9561 = G__9609;
count__8692_9562 = G__9610;
i__8693_9563 = G__9611;
continue;
}
} else {
}
}
break;
}


var G__9612 = cljs.core.next(seq__8626_9551__$1);
var G__9613 = null;
var G__9614 = (0);
var G__9615 = (0);
seq__8626_9506 = G__9612;
chunk__8627_9507 = G__9613;
count__8628_9508 = G__9614;
i__8629_9509 = G__9615;
continue;
}
} else {
}
}
break;
}


var G__9616 = seq__8444_9494;
var G__9617 = chunk__8445_9496;
var G__9618 = count__8446_9497;
var G__9619 = (i__8447_9498 + (1));
seq__8444_9494 = G__9616;
chunk__8445_9496 = G__9617;
count__8446_9497 = G__9618;
i__8447_9498 = G__9619;
continue;
} else {
var temp__5804__auto___9622 = cljs.core.seq(seq__8444_9494);
if(temp__5804__auto___9622){
var seq__8444_9623__$1 = temp__5804__auto___9622;
if(cljs.core.chunked_seq_QMARK_(seq__8444_9623__$1)){
var c__5525__auto___9625 = cljs.core.chunk_first(seq__8444_9623__$1);
var G__9626 = cljs.core.chunk_rest(seq__8444_9623__$1);
var G__9627 = c__5525__auto___9625;
var G__9628 = cljs.core.count(c__5525__auto___9625);
var G__9629 = (0);
seq__8444_9494 = G__9626;
chunk__8445_9496 = G__9627;
count__8446_9497 = G__9628;
i__8447_9498 = G__9629;
continue;
} else {
var vec__8706_9630 = cljs.core.first(seq__8444_9623__$1);
var source_idx_9631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8706_9630,(0),null);
var vec__8709_9632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8706_9630,(1),null);
var __9633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8709_9632,(0),null);
var lines_9634__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8709_9632,(1),null);
var seq__8712_9639 = cljs.core.seq(lines_9634__$1);
var chunk__8713_9640 = null;
var count__8714_9641 = (0);
var i__8715_9642 = (0);
while(true){
if((i__8715_9642 < count__8714_9641)){
var vec__8756_9643 = chunk__8713_9640.cljs$core$IIndexed$_nth$arity$2(null, i__8715_9642);
var line_9644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8756_9643,(0),null);
var cols_9645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8756_9643,(1),null);
var seq__8772_9646 = cljs.core.seq(cols_9645);
var chunk__8773_9647 = null;
var count__8774_9648 = (0);
var i__8775_9649 = (0);
while(true){
if((i__8775_9649 < count__8774_9648)){
var vec__8789_9652 = chunk__8773_9647.cljs$core$IIndexed$_nth$arity$2(null, i__8775_9649);
var col_9653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8789_9652,(0),null);
var infos_9654 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8789_9652,(1),null);
encode_cols(infos_9654,source_idx_9631,line_9644,col_9653);


var G__9656 = seq__8772_9646;
var G__9657 = chunk__8773_9647;
var G__9658 = count__8774_9648;
var G__9659 = (i__8775_9649 + (1));
seq__8772_9646 = G__9656;
chunk__8773_9647 = G__9657;
count__8774_9648 = G__9658;
i__8775_9649 = G__9659;
continue;
} else {
var temp__5804__auto___9664__$1 = cljs.core.seq(seq__8772_9646);
if(temp__5804__auto___9664__$1){
var seq__8772_9668__$1 = temp__5804__auto___9664__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8772_9668__$1)){
var c__5525__auto___9670 = cljs.core.chunk_first(seq__8772_9668__$1);
var G__9673 = cljs.core.chunk_rest(seq__8772_9668__$1);
var G__9674 = c__5525__auto___9670;
var G__9675 = cljs.core.count(c__5525__auto___9670);
var G__9676 = (0);
seq__8772_9646 = G__9673;
chunk__8773_9647 = G__9674;
count__8774_9648 = G__9675;
i__8775_9649 = G__9676;
continue;
} else {
var vec__8801_9677 = cljs.core.first(seq__8772_9668__$1);
var col_9678 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8801_9677,(0),null);
var infos_9679 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8801_9677,(1),null);
encode_cols(infos_9679,source_idx_9631,line_9644,col_9678);


var G__9680 = cljs.core.next(seq__8772_9668__$1);
var G__9681 = null;
var G__9682 = (0);
var G__9683 = (0);
seq__8772_9646 = G__9680;
chunk__8773_9647 = G__9681;
count__8774_9648 = G__9682;
i__8775_9649 = G__9683;
continue;
}
} else {
}
}
break;
}


var G__9689 = seq__8712_9639;
var G__9690 = chunk__8713_9640;
var G__9691 = count__8714_9641;
var G__9692 = (i__8715_9642 + (1));
seq__8712_9639 = G__9689;
chunk__8713_9640 = G__9690;
count__8714_9641 = G__9691;
i__8715_9642 = G__9692;
continue;
} else {
var temp__5804__auto___9693__$1 = cljs.core.seq(seq__8712_9639);
if(temp__5804__auto___9693__$1){
var seq__8712_9697__$1 = temp__5804__auto___9693__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8712_9697__$1)){
var c__5525__auto___9698 = cljs.core.chunk_first(seq__8712_9697__$1);
var G__9703 = cljs.core.chunk_rest(seq__8712_9697__$1);
var G__9704 = c__5525__auto___9698;
var G__9705 = cljs.core.count(c__5525__auto___9698);
var G__9706 = (0);
seq__8712_9639 = G__9703;
chunk__8713_9640 = G__9704;
count__8714_9641 = G__9705;
i__8715_9642 = G__9706;
continue;
} else {
var vec__8811_9710 = cljs.core.first(seq__8712_9697__$1);
var line_9711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8811_9710,(0),null);
var cols_9712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8811_9710,(1),null);
var seq__8814_9723 = cljs.core.seq(cols_9712);
var chunk__8815_9724 = null;
var count__8816_9725 = (0);
var i__8817_9726 = (0);
while(true){
if((i__8817_9726 < count__8816_9725)){
var vec__8833_9731 = chunk__8815_9724.cljs$core$IIndexed$_nth$arity$2(null, i__8817_9726);
var col_9732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8833_9731,(0),null);
var infos_9733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8833_9731,(1),null);
encode_cols(infos_9733,source_idx_9631,line_9711,col_9732);


var G__9740 = seq__8814_9723;
var G__9741 = chunk__8815_9724;
var G__9742 = count__8816_9725;
var G__9743 = (i__8817_9726 + (1));
seq__8814_9723 = G__9740;
chunk__8815_9724 = G__9741;
count__8816_9725 = G__9742;
i__8817_9726 = G__9743;
continue;
} else {
var temp__5804__auto___9744__$2 = cljs.core.seq(seq__8814_9723);
if(temp__5804__auto___9744__$2){
var seq__8814_9749__$1 = temp__5804__auto___9744__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8814_9749__$1)){
var c__5525__auto___9753 = cljs.core.chunk_first(seq__8814_9749__$1);
var G__9754 = cljs.core.chunk_rest(seq__8814_9749__$1);
var G__9755 = c__5525__auto___9753;
var G__9756 = cljs.core.count(c__5525__auto___9753);
var G__9757 = (0);
seq__8814_9723 = G__9754;
chunk__8815_9724 = G__9755;
count__8816_9725 = G__9756;
i__8817_9726 = G__9757;
continue;
} else {
var vec__8837_9765 = cljs.core.first(seq__8814_9749__$1);
var col_9766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837_9765,(0),null);
var infos_9767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8837_9765,(1),null);
encode_cols(infos_9767,source_idx_9631,line_9711,col_9766);


var G__9780 = cljs.core.next(seq__8814_9749__$1);
var G__9781 = null;
var G__9782 = (0);
var G__9783 = (0);
seq__8814_9723 = G__9780;
chunk__8815_9724 = G__9781;
count__8816_9725 = G__9782;
i__8817_9726 = G__9783;
continue;
}
} else {
}
}
break;
}


var G__9784 = cljs.core.next(seq__8712_9697__$1);
var G__9785 = null;
var G__9786 = (0);
var G__9787 = (0);
seq__8712_9639 = G__9784;
chunk__8713_9640 = G__9785;
count__8714_9641 = G__9786;
i__8715_9642 = G__9787;
continue;
}
} else {
}
}
break;
}


var G__9791 = cljs.core.next(seq__8444_9623__$1);
var G__9792 = null;
var G__9793 = (0);
var G__9794 = (0);
seq__8444_9494 = G__9791;
chunk__8445_9496 = G__9792;
count__8446_9497 = G__9793;
i__8447_9498 = G__9794;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8843 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__8430_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8430_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__8431_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__8431_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8432_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__8432_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__8850 = G__8843;
cljs.source_map.goog$module$goog$object.set(G__8850,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__8850;
} else {
return G__8843;
}
})();
return JSON.stringify(source_map_file_contents);
});
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__8851 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8851,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8851,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__8855 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8855,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8855,(1),null);
var G__9807 = cljs.core.next(col_map_seq);
var G__9808 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8855,col,infos,vec__8851,line,col_map){
return (function (v,p__8860){
var map__8863 = p__8860;
var map__8863__$1 = cljs.core.__destructure_map(map__8863);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8863__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8863__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8855,col,infos,vec__8851,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9807;
new_cols = G__9808;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9814 = cljs.core.next(line_map_seq);
var G__9815 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__9814;
new_lines = G__9815;
continue;
} else {
return new_lines;
}
break;
}
});
/**
 * Given a ClojureScript to JavaScript source map, invert it. Useful when
 * mapping JavaScript stack traces when environment support is unavailable.
 */
cljs.source_map.invert_reverse_map = (function cljs$source_map$invert_reverse_map(reverse_map){
var inverted = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.sorted_map());
var seq__8875_9822 = cljs.core.seq(reverse_map);
var chunk__8876_9823 = null;
var count__8877_9824 = (0);
var i__8878_9825 = (0);
while(true){
if((i__8878_9825 < count__8877_9824)){
var vec__9146_9827 = chunk__8876_9823.cljs$core$IIndexed$_nth$arity$2(null, i__8878_9825);
var line_9828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9146_9827,(0),null);
var columns_9829 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9146_9827,(1),null);
var seq__9149_9830 = cljs.core.seq(columns_9829);
var chunk__9150_9831 = null;
var count__9151_9832 = (0);
var i__9152_9833 = (0);
while(true){
if((i__9152_9833 < count__9151_9832)){
var vec__9203_9834 = chunk__9150_9831.cljs$core$IIndexed$_nth$arity$2(null, i__9152_9833);
var column_9835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9203_9834,(0),null);
var column_info_9836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9203_9834,(1),null);
var seq__9207_9837 = cljs.core.seq(column_info_9836);
var chunk__9208_9838 = null;
var count__9209_9839 = (0);
var i__9210_9840 = (0);
while(true){
if((i__9210_9840 < count__9209_9839)){
var map__9218_9841 = chunk__9208_9838.cljs$core$IIndexed$_nth$arity$2(null, i__9210_9840);
var map__9218_9842__$1 = cljs.core.__destructure_map(map__9218_9841);
var gline_9843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9218_9842__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9218_9842__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9218_9842__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9843], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9207_9837,chunk__9208_9838,count__9209_9839,i__9210_9840,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9218_9841,map__9218_9842__$1,gline_9843,gcol_9844,name_9845,vec__9203_9834,column_9835,column_info_9836,vec__9146_9827,line_9828,columns_9829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9844], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9828,new cljs.core.Keyword(null,"col","col",-1959363084),column_9835,new cljs.core.Keyword(null,"name","name",1843675177),name_9845], null));
});})(seq__9207_9837,chunk__9208_9838,count__9209_9839,i__9210_9840,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9218_9841,map__9218_9842__$1,gline_9843,gcol_9844,name_9845,vec__9203_9834,column_9835,column_info_9836,vec__9146_9827,line_9828,columns_9829,inverted))
,cljs.core.sorted_map()));


var G__9846 = seq__9207_9837;
var G__9847 = chunk__9208_9838;
var G__9848 = count__9209_9839;
var G__9849 = (i__9210_9840 + (1));
seq__9207_9837 = G__9846;
chunk__9208_9838 = G__9847;
count__9209_9839 = G__9848;
i__9210_9840 = G__9849;
continue;
} else {
var temp__5804__auto___9850 = cljs.core.seq(seq__9207_9837);
if(temp__5804__auto___9850){
var seq__9207_9851__$1 = temp__5804__auto___9850;
if(cljs.core.chunked_seq_QMARK_(seq__9207_9851__$1)){
var c__5525__auto___9852 = cljs.core.chunk_first(seq__9207_9851__$1);
var G__9853 = cljs.core.chunk_rest(seq__9207_9851__$1);
var G__9854 = c__5525__auto___9852;
var G__9855 = cljs.core.count(c__5525__auto___9852);
var G__9856 = (0);
seq__9207_9837 = G__9853;
chunk__9208_9838 = G__9854;
count__9209_9839 = G__9855;
i__9210_9840 = G__9856;
continue;
} else {
var map__9219_9857 = cljs.core.first(seq__9207_9851__$1);
var map__9219_9858__$1 = cljs.core.__destructure_map(map__9219_9857);
var gline_9859 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9219_9858__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9860 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9219_9858__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9861 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9219_9858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9859], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9207_9837,chunk__9208_9838,count__9209_9839,i__9210_9840,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9219_9857,map__9219_9858__$1,gline_9859,gcol_9860,name_9861,seq__9207_9851__$1,temp__5804__auto___9850,vec__9203_9834,column_9835,column_info_9836,vec__9146_9827,line_9828,columns_9829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9860], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9828,new cljs.core.Keyword(null,"col","col",-1959363084),column_9835,new cljs.core.Keyword(null,"name","name",1843675177),name_9861], null));
});})(seq__9207_9837,chunk__9208_9838,count__9209_9839,i__9210_9840,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9219_9857,map__9219_9858__$1,gline_9859,gcol_9860,name_9861,seq__9207_9851__$1,temp__5804__auto___9850,vec__9203_9834,column_9835,column_info_9836,vec__9146_9827,line_9828,columns_9829,inverted))
,cljs.core.sorted_map()));


var G__9877 = cljs.core.next(seq__9207_9851__$1);
var G__9878 = null;
var G__9879 = (0);
var G__9880 = (0);
seq__9207_9837 = G__9877;
chunk__9208_9838 = G__9878;
count__9209_9839 = G__9879;
i__9210_9840 = G__9880;
continue;
}
} else {
}
}
break;
}


var G__9881 = seq__9149_9830;
var G__9882 = chunk__9150_9831;
var G__9883 = count__9151_9832;
var G__9884 = (i__9152_9833 + (1));
seq__9149_9830 = G__9881;
chunk__9150_9831 = G__9882;
count__9151_9832 = G__9883;
i__9152_9833 = G__9884;
continue;
} else {
var temp__5804__auto___9885 = cljs.core.seq(seq__9149_9830);
if(temp__5804__auto___9885){
var seq__9149_9886__$1 = temp__5804__auto___9885;
if(cljs.core.chunked_seq_QMARK_(seq__9149_9886__$1)){
var c__5525__auto___9887 = cljs.core.chunk_first(seq__9149_9886__$1);
var G__9888 = cljs.core.chunk_rest(seq__9149_9886__$1);
var G__9889 = c__5525__auto___9887;
var G__9890 = cljs.core.count(c__5525__auto___9887);
var G__9891 = (0);
seq__9149_9830 = G__9888;
chunk__9150_9831 = G__9889;
count__9151_9832 = G__9890;
i__9152_9833 = G__9891;
continue;
} else {
var vec__9220_9896 = cljs.core.first(seq__9149_9886__$1);
var column_9897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9220_9896,(0),null);
var column_info_9898 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9220_9896,(1),null);
var seq__9223_9904 = cljs.core.seq(column_info_9898);
var chunk__9224_9905 = null;
var count__9225_9906 = (0);
var i__9226_9907 = (0);
while(true){
if((i__9226_9907 < count__9225_9906)){
var map__9238_9908 = chunk__9224_9905.cljs$core$IIndexed$_nth$arity$2(null, i__9226_9907);
var map__9238_9909__$1 = cljs.core.__destructure_map(map__9238_9908);
var gline_9910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238_9909__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238_9909__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238_9909__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9910], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9223_9904,chunk__9224_9905,count__9225_9906,i__9226_9907,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9238_9908,map__9238_9909__$1,gline_9910,gcol_9911,name_9912,vec__9220_9896,column_9897,column_info_9898,seq__9149_9886__$1,temp__5804__auto___9885,vec__9146_9827,line_9828,columns_9829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9911], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9828,new cljs.core.Keyword(null,"col","col",-1959363084),column_9897,new cljs.core.Keyword(null,"name","name",1843675177),name_9912], null));
});})(seq__9223_9904,chunk__9224_9905,count__9225_9906,i__9226_9907,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9238_9908,map__9238_9909__$1,gline_9910,gcol_9911,name_9912,vec__9220_9896,column_9897,column_info_9898,seq__9149_9886__$1,temp__5804__auto___9885,vec__9146_9827,line_9828,columns_9829,inverted))
,cljs.core.sorted_map()));


var G__9918 = seq__9223_9904;
var G__9919 = chunk__9224_9905;
var G__9920 = count__9225_9906;
var G__9921 = (i__9226_9907 + (1));
seq__9223_9904 = G__9918;
chunk__9224_9905 = G__9919;
count__9225_9906 = G__9920;
i__9226_9907 = G__9921;
continue;
} else {
var temp__5804__auto___9922__$1 = cljs.core.seq(seq__9223_9904);
if(temp__5804__auto___9922__$1){
var seq__9223_9923__$1 = temp__5804__auto___9922__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9223_9923__$1)){
var c__5525__auto___9924 = cljs.core.chunk_first(seq__9223_9923__$1);
var G__9925 = cljs.core.chunk_rest(seq__9223_9923__$1);
var G__9926 = c__5525__auto___9924;
var G__9927 = cljs.core.count(c__5525__auto___9924);
var G__9928 = (0);
seq__9223_9904 = G__9925;
chunk__9224_9905 = G__9926;
count__9225_9906 = G__9927;
i__9226_9907 = G__9928;
continue;
} else {
var map__9255_9929 = cljs.core.first(seq__9223_9923__$1);
var map__9255_9930__$1 = cljs.core.__destructure_map(map__9255_9929);
var gline_9931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9255_9930__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9932 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9255_9930__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9933 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9255_9930__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9931], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9223_9904,chunk__9224_9905,count__9225_9906,i__9226_9907,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9255_9929,map__9255_9930__$1,gline_9931,gcol_9932,name_9933,seq__9223_9923__$1,temp__5804__auto___9922__$1,vec__9220_9896,column_9897,column_info_9898,seq__9149_9886__$1,temp__5804__auto___9885,vec__9146_9827,line_9828,columns_9829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9932], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9828,new cljs.core.Keyword(null,"col","col",-1959363084),column_9897,new cljs.core.Keyword(null,"name","name",1843675177),name_9933], null));
});})(seq__9223_9904,chunk__9224_9905,count__9225_9906,i__9226_9907,seq__9149_9830,chunk__9150_9831,count__9151_9832,i__9152_9833,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9255_9929,map__9255_9930__$1,gline_9931,gcol_9932,name_9933,seq__9223_9923__$1,temp__5804__auto___9922__$1,vec__9220_9896,column_9897,column_info_9898,seq__9149_9886__$1,temp__5804__auto___9885,vec__9146_9827,line_9828,columns_9829,inverted))
,cljs.core.sorted_map()));


var G__9935 = cljs.core.next(seq__9223_9923__$1);
var G__9936 = null;
var G__9937 = (0);
var G__9938 = (0);
seq__9223_9904 = G__9935;
chunk__9224_9905 = G__9936;
count__9225_9906 = G__9937;
i__9226_9907 = G__9938;
continue;
}
} else {
}
}
break;
}


var G__9939 = cljs.core.next(seq__9149_9886__$1);
var G__9940 = null;
var G__9941 = (0);
var G__9942 = (0);
seq__9149_9830 = G__9939;
chunk__9150_9831 = G__9940;
count__9151_9832 = G__9941;
i__9152_9833 = G__9942;
continue;
}
} else {
}
}
break;
}


var G__9943 = seq__8875_9822;
var G__9944 = chunk__8876_9823;
var G__9945 = count__8877_9824;
var G__9946 = (i__8878_9825 + (1));
seq__8875_9822 = G__9943;
chunk__8876_9823 = G__9944;
count__8877_9824 = G__9945;
i__8878_9825 = G__9946;
continue;
} else {
var temp__5804__auto___9947 = cljs.core.seq(seq__8875_9822);
if(temp__5804__auto___9947){
var seq__8875_9948__$1 = temp__5804__auto___9947;
if(cljs.core.chunked_seq_QMARK_(seq__8875_9948__$1)){
var c__5525__auto___9949 = cljs.core.chunk_first(seq__8875_9948__$1);
var G__9950 = cljs.core.chunk_rest(seq__8875_9948__$1);
var G__9951 = c__5525__auto___9949;
var G__9952 = cljs.core.count(c__5525__auto___9949);
var G__9953 = (0);
seq__8875_9822 = G__9950;
chunk__8876_9823 = G__9951;
count__8877_9824 = G__9952;
i__8878_9825 = G__9953;
continue;
} else {
var vec__9257_9954 = cljs.core.first(seq__8875_9948__$1);
var line_9955 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9257_9954,(0),null);
var columns_9956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9257_9954,(1),null);
var seq__9261_9958 = cljs.core.seq(columns_9956);
var chunk__9262_9959 = null;
var count__9263_9960 = (0);
var i__9264_9961 = (0);
while(true){
if((i__9264_9961 < count__9263_9960)){
var vec__9329_9962 = chunk__9262_9959.cljs$core$IIndexed$_nth$arity$2(null, i__9264_9961);
var column_9963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9329_9962,(0),null);
var column_info_9964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9329_9962,(1),null);
var seq__9334_9965 = cljs.core.seq(column_info_9964);
var chunk__9335_9966 = null;
var count__9336_9967 = (0);
var i__9337_9968 = (0);
while(true){
if((i__9337_9968 < count__9336_9967)){
var map__9349_9969 = chunk__9335_9966.cljs$core$IIndexed$_nth$arity$2(null, i__9337_9968);
var map__9349_9970__$1 = cljs.core.__destructure_map(map__9349_9969);
var gline_9971 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9349_9970__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9972 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9349_9970__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9973 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9349_9970__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9971], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9334_9965,chunk__9335_9966,count__9336_9967,i__9337_9968,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9349_9969,map__9349_9970__$1,gline_9971,gcol_9972,name_9973,vec__9329_9962,column_9963,column_info_9964,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9972], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9955,new cljs.core.Keyword(null,"col","col",-1959363084),column_9963,new cljs.core.Keyword(null,"name","name",1843675177),name_9973], null));
});})(seq__9334_9965,chunk__9335_9966,count__9336_9967,i__9337_9968,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9349_9969,map__9349_9970__$1,gline_9971,gcol_9972,name_9973,vec__9329_9962,column_9963,column_info_9964,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted))
,cljs.core.sorted_map()));


var G__9974 = seq__9334_9965;
var G__9975 = chunk__9335_9966;
var G__9976 = count__9336_9967;
var G__9977 = (i__9337_9968 + (1));
seq__9334_9965 = G__9974;
chunk__9335_9966 = G__9975;
count__9336_9967 = G__9976;
i__9337_9968 = G__9977;
continue;
} else {
var temp__5804__auto___9978__$1 = cljs.core.seq(seq__9334_9965);
if(temp__5804__auto___9978__$1){
var seq__9334_9979__$1 = temp__5804__auto___9978__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9334_9979__$1)){
var c__5525__auto___9980 = cljs.core.chunk_first(seq__9334_9979__$1);
var G__9981 = cljs.core.chunk_rest(seq__9334_9979__$1);
var G__9982 = c__5525__auto___9980;
var G__9983 = cljs.core.count(c__5525__auto___9980);
var G__9984 = (0);
seq__9334_9965 = G__9981;
chunk__9335_9966 = G__9982;
count__9336_9967 = G__9983;
i__9337_9968 = G__9984;
continue;
} else {
var map__9351_9986 = cljs.core.first(seq__9334_9979__$1);
var map__9351_9987__$1 = cljs.core.__destructure_map(map__9351_9986);
var gline_9988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9351_9987__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9351_9987__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9351_9987__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9988], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9334_9965,chunk__9335_9966,count__9336_9967,i__9337_9968,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9351_9986,map__9351_9987__$1,gline_9988,gcol_9989,name_9990,seq__9334_9979__$1,temp__5804__auto___9978__$1,vec__9329_9962,column_9963,column_info_9964,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9989], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9955,new cljs.core.Keyword(null,"col","col",-1959363084),column_9963,new cljs.core.Keyword(null,"name","name",1843675177),name_9990], null));
});})(seq__9334_9965,chunk__9335_9966,count__9336_9967,i__9337_9968,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9351_9986,map__9351_9987__$1,gline_9988,gcol_9989,name_9990,seq__9334_9979__$1,temp__5804__auto___9978__$1,vec__9329_9962,column_9963,column_info_9964,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted))
,cljs.core.sorted_map()));


var G__9995 = cljs.core.next(seq__9334_9979__$1);
var G__9996 = null;
var G__9997 = (0);
var G__9998 = (0);
seq__9334_9965 = G__9995;
chunk__9335_9966 = G__9996;
count__9336_9967 = G__9997;
i__9337_9968 = G__9998;
continue;
}
} else {
}
}
break;
}


var G__9999 = seq__9261_9958;
var G__10000 = chunk__9262_9959;
var G__10001 = count__9263_9960;
var G__10002 = (i__9264_9961 + (1));
seq__9261_9958 = G__9999;
chunk__9262_9959 = G__10000;
count__9263_9960 = G__10001;
i__9264_9961 = G__10002;
continue;
} else {
var temp__5804__auto___10003__$1 = cljs.core.seq(seq__9261_9958);
if(temp__5804__auto___10003__$1){
var seq__9261_10004__$1 = temp__5804__auto___10003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9261_10004__$1)){
var c__5525__auto___10006 = cljs.core.chunk_first(seq__9261_10004__$1);
var G__10007 = cljs.core.chunk_rest(seq__9261_10004__$1);
var G__10008 = c__5525__auto___10006;
var G__10009 = cljs.core.count(c__5525__auto___10006);
var G__10010 = (0);
seq__9261_9958 = G__10007;
chunk__9262_9959 = G__10008;
count__9263_9960 = G__10009;
i__9264_9961 = G__10010;
continue;
} else {
var vec__9357_10014 = cljs.core.first(seq__9261_10004__$1);
var column_10015 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9357_10014,(0),null);
var column_info_10016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9357_10014,(1),null);
var seq__9360_10019 = cljs.core.seq(column_info_10016);
var chunk__9361_10020 = null;
var count__9362_10021 = (0);
var i__9363_10022 = (0);
while(true){
if((i__9363_10022 < count__9362_10021)){
var map__9378_10024 = chunk__9361_10020.cljs$core$IIndexed$_nth$arity$2(null, i__9363_10022);
var map__9378_10025__$1 = cljs.core.__destructure_map(map__9378_10024);
var gline_10026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9378_10025__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9378_10025__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9378_10025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10026], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9360_10019,chunk__9361_10020,count__9362_10021,i__9363_10022,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9378_10024,map__9378_10025__$1,gline_10026,gcol_10027,name_10028,vec__9357_10014,column_10015,column_info_10016,seq__9261_10004__$1,temp__5804__auto___10003__$1,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10027], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9955,new cljs.core.Keyword(null,"col","col",-1959363084),column_10015,new cljs.core.Keyword(null,"name","name",1843675177),name_10028], null));
});})(seq__9360_10019,chunk__9361_10020,count__9362_10021,i__9363_10022,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9378_10024,map__9378_10025__$1,gline_10026,gcol_10027,name_10028,vec__9357_10014,column_10015,column_info_10016,seq__9261_10004__$1,temp__5804__auto___10003__$1,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted))
,cljs.core.sorted_map()));


var G__10030 = seq__9360_10019;
var G__10031 = chunk__9361_10020;
var G__10032 = count__9362_10021;
var G__10033 = (i__9363_10022 + (1));
seq__9360_10019 = G__10030;
chunk__9361_10020 = G__10031;
count__9362_10021 = G__10032;
i__9363_10022 = G__10033;
continue;
} else {
var temp__5804__auto___10035__$2 = cljs.core.seq(seq__9360_10019);
if(temp__5804__auto___10035__$2){
var seq__9360_10036__$1 = temp__5804__auto___10035__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9360_10036__$1)){
var c__5525__auto___10038 = cljs.core.chunk_first(seq__9360_10036__$1);
var G__10039 = cljs.core.chunk_rest(seq__9360_10036__$1);
var G__10040 = c__5525__auto___10038;
var G__10041 = cljs.core.count(c__5525__auto___10038);
var G__10042 = (0);
seq__9360_10019 = G__10039;
chunk__9361_10020 = G__10040;
count__9362_10021 = G__10041;
i__9363_10022 = G__10042;
continue;
} else {
var map__9386_10043 = cljs.core.first(seq__9360_10036__$1);
var map__9386_10044__$1 = cljs.core.__destructure_map(map__9386_10043);
var gline_10045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9386_10044__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9386_10044__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9386_10044__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10045], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9360_10019,chunk__9361_10020,count__9362_10021,i__9363_10022,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9386_10043,map__9386_10044__$1,gline_10045,gcol_10046,name_10047,seq__9360_10036__$1,temp__5804__auto___10035__$2,vec__9357_10014,column_10015,column_info_10016,seq__9261_10004__$1,temp__5804__auto___10003__$1,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10046], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9955,new cljs.core.Keyword(null,"col","col",-1959363084),column_10015,new cljs.core.Keyword(null,"name","name",1843675177),name_10047], null));
});})(seq__9360_10019,chunk__9361_10020,count__9362_10021,i__9363_10022,seq__9261_9958,chunk__9262_9959,count__9263_9960,i__9264_9961,seq__8875_9822,chunk__8876_9823,count__8877_9824,i__8878_9825,map__9386_10043,map__9386_10044__$1,gline_10045,gcol_10046,name_10047,seq__9360_10036__$1,temp__5804__auto___10035__$2,vec__9357_10014,column_10015,column_info_10016,seq__9261_10004__$1,temp__5804__auto___10003__$1,vec__9257_9954,line_9955,columns_9956,seq__8875_9948__$1,temp__5804__auto___9947,inverted))
,cljs.core.sorted_map()));


var G__10051 = cljs.core.next(seq__9360_10036__$1);
var G__10052 = null;
var G__10053 = (0);
var G__10054 = (0);
seq__9360_10019 = G__10051;
chunk__9361_10020 = G__10052;
count__9362_10021 = G__10053;
i__9363_10022 = G__10054;
continue;
}
} else {
}
}
break;
}


var G__10055 = cljs.core.next(seq__9261_10004__$1);
var G__10056 = null;
var G__10057 = (0);
var G__10058 = (0);
seq__9261_9958 = G__10055;
chunk__9262_9959 = G__10056;
count__9263_9960 = G__10057;
i__9264_9961 = G__10058;
continue;
}
} else {
}
}
break;
}


var G__10059 = cljs.core.next(seq__8875_9948__$1);
var G__10060 = null;
var G__10061 = (0);
var G__10062 = (0);
seq__8875_9822 = G__10059;
chunk__8876_9823 = G__10060;
count__8877_9824 = G__10061;
i__8878_9825 = G__10062;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(inverted);
});

//# sourceMappingURL=cljs.source_map.js.map
