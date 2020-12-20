goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__10325){
var vec__10326 = p__10325;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10326,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10326,(1),null);
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
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__10329 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10329,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),(goog.object.get(source_map,"sources")[source]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__5735__auto__)){
var name__$1 = temp__5735__auto__;
return (goog.object.get(source_map,"names")[name__$1]);
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
var vec__10336 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10336,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10336,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10336,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10336,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10336,(4),null);
var vec__10339 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10339,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10339,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10339,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10339,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10339,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4126__auto__ = col;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var map__10345 = segmap;
var map__10345__$1 = (((((!((map__10345 == null))))?(((((map__10345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10345):map__10345);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10345__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10345__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10345__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10345__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10345__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__10348 = arguments.length;
switch (G__10348) {
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
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__10359 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__11739 = cljs.core.next(segs__$1);
var G__11740 = nrelseg;
var G__11741 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__11739;
relseg__$1 = G__11740;
result__$1 = G__11741;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10359,(1),null);
var G__11744 = (gline + (1));
var G__11745 = cljs.core.next(lines__$1);
var G__11746 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__11747 = result__$1;
gline = G__11744;
lines__$1 = G__11745;
relseg = G__11746;
result = G__11747;
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
var map__10366 = segmap;
var map__10366__$1 = (((((!((map__10366 == null))))?(((((map__10366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10366):map__10366);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10366__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10366__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10366__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10366__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10366__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__10364_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10364_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__10375 = arguments.length;
switch (G__10375) {
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
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2(goog.object.get(source_map,"mappings"),source_map);
}));

(cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = goog.object.get(source_map,"sources");
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__10386 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__11755 = cljs.core.next(segs__$1);
var G__11756 = nrelseg;
var G__11757 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__11755;
relseg__$1 = G__11756;
result__$1 = G__11757;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10386,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10386,(1),null);
var G__11758 = (gline + (1));
var G__11759 = cljs.core.next(lines__$1);
var G__11760 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__11761 = result__$1;
gline = G__11758;
lines__$1 = G__11759;
relseg = G__11760;
result = G__11761;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__10391){
var vec__10392 = p__10391;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10392,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10392,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10392,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10392,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10392,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__10395){
var vec__10396 = p__10395;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10396,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10396,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10396,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10396,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10396,(4),null);
var seg = vec__10396;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__10399){
var vec__10400 = p__10399;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10400,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10400,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10400,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10400,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10400,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol,sidx,line,col,(function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
var preamble_lines = cljs.core.take.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"preamble-line-count","preamble-line-count",-659949744).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})(),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY));
var info__GT_segv = (function (info,source_idx,line,col){
var segv = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gcol","gcol",309250807).cljs$core$IFn$_invoke$arity$1(info),source_idx,line,col], null);
var temp__5733__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(temp__5733__auto__)){
var name = temp__5733__auto__;
var idx = (function (){var temp__5733__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(names__GT_idx),name);
if(cljs.core.truth_(temp__5733__auto____$1)){
var idx = temp__5733__auto____$1;
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
var seq__10422 = cljs.core.seq(infos);
var chunk__10423 = null;
var count__10424 = (0);
var i__10425 = (0);
while(true){
if((i__10425 < count__10424)){
var info = chunk__10423.cljs$core$IIndexed$_nth$arity$2(null,i__10425);
var segv_11770 = info__GT_segv(info,source_idx,line,col);
var gline_11771 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11772 = cljs.core.count(cljs.core.deref(lines));
if((gline_11771 > (lc_11772 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__10422,chunk__10423,count__10424,i__10425,segv_11770,gline_11771,lc_11772,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_11771 - (lc_11772 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11770], null));
});})(seq__10422,chunk__10423,count__10424,i__10425,segv_11770,gline_11771,lc_11772,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__10422,chunk__10423,count__10424,i__10425,segv_11770,gline_11771,lc_11772,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11771], null),cljs.core.conj,segv_11770);
});})(seq__10422,chunk__10423,count__10424,i__10425,segv_11770,gline_11771,lc_11772,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11773 = seq__10422;
var G__11774 = chunk__10423;
var G__11775 = count__10424;
var G__11776 = (i__10425 + (1));
seq__10422 = G__11773;
chunk__10423 = G__11774;
count__10424 = G__11775;
i__10425 = G__11776;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__10422);
if(temp__5735__auto__){
var seq__10422__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10422__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__10422__$1);
var G__11777 = cljs.core.chunk_rest(seq__10422__$1);
var G__11778 = c__4556__auto__;
var G__11779 = cljs.core.count(c__4556__auto__);
var G__11780 = (0);
seq__10422 = G__11777;
chunk__10423 = G__11778;
count__10424 = G__11779;
i__10425 = G__11780;
continue;
} else {
var info = cljs.core.first(seq__10422__$1);
var segv_11781 = info__GT_segv(info,source_idx,line,col);
var gline_11782 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_11783 = cljs.core.count(cljs.core.deref(lines));
if((gline_11782 > (lc_11783 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__10422,chunk__10423,count__10424,i__10425,segv_11781,gline_11782,lc_11783,info,seq__10422__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_11782 - (lc_11783 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_11781], null));
});})(seq__10422,chunk__10423,count__10424,i__10425,segv_11781,gline_11782,lc_11783,info,seq__10422__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__10422,chunk__10423,count__10424,i__10425,segv_11781,gline_11782,lc_11783,info,seq__10422__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_11782], null),cljs.core.conj,segv_11781);
});})(seq__10422,chunk__10423,count__10424,i__10425,segv_11781,gline_11782,lc_11783,info,seq__10422__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__11784 = cljs.core.next(seq__10422__$1);
var G__11785 = null;
var G__11786 = (0);
var G__11787 = (0);
seq__10422 = G__11784;
chunk__10423 = G__11785;
count__10424 = G__11786;
i__10425 = G__11787;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__10441_11788 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__10442_11789 = null;
var count__10443_11790 = (0);
var i__10444_11791 = (0);
while(true){
if((i__10444_11791 < count__10443_11790)){
var vec__10776_11792 = chunk__10442_11789.cljs$core$IIndexed$_nth$arity$2(null,i__10444_11791);
var source_idx_11793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10776_11792,(0),null);
var vec__10779_11794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10776_11792,(1),null);
var __11795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10779_11794,(0),null);
var lines_11796__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10779_11794,(1),null);
var seq__10784_11797 = cljs.core.seq(lines_11796__$1);
var chunk__10785_11798 = null;
var count__10786_11799 = (0);
var i__10787_11800 = (0);
while(true){
if((i__10787_11800 < count__10786_11799)){
var vec__10857_11801 = chunk__10785_11798.cljs$core$IIndexed$_nth$arity$2(null,i__10787_11800);
var line_11802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10857_11801,(0),null);
var cols_11803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10857_11801,(1),null);
var seq__10860_11806 = cljs.core.seq(cols_11803);
var chunk__10861_11807 = null;
var count__10862_11808 = (0);
var i__10863_11809 = (0);
while(true){
if((i__10863_11809 < count__10862_11808)){
var vec__10878_11810 = chunk__10861_11807.cljs$core$IIndexed$_nth$arity$2(null,i__10863_11809);
var col_11811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10878_11810,(0),null);
var infos_11812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10878_11810,(1),null);
encode_cols(infos_11812,source_idx_11793,line_11802,col_11811);


var G__11818 = seq__10860_11806;
var G__11819 = chunk__10861_11807;
var G__11820 = count__10862_11808;
var G__11821 = (i__10863_11809 + (1));
seq__10860_11806 = G__11818;
chunk__10861_11807 = G__11819;
count__10862_11808 = G__11820;
i__10863_11809 = G__11821;
continue;
} else {
var temp__5735__auto___11822 = cljs.core.seq(seq__10860_11806);
if(temp__5735__auto___11822){
var seq__10860_11823__$1 = temp__5735__auto___11822;
if(cljs.core.chunked_seq_QMARK_(seq__10860_11823__$1)){
var c__4556__auto___11824 = cljs.core.chunk_first(seq__10860_11823__$1);
var G__11825 = cljs.core.chunk_rest(seq__10860_11823__$1);
var G__11826 = c__4556__auto___11824;
var G__11827 = cljs.core.count(c__4556__auto___11824);
var G__11828 = (0);
seq__10860_11806 = G__11825;
chunk__10861_11807 = G__11826;
count__10862_11808 = G__11827;
i__10863_11809 = G__11828;
continue;
} else {
var vec__10881_11829 = cljs.core.first(seq__10860_11823__$1);
var col_11830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10881_11829,(0),null);
var infos_11831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10881_11829,(1),null);
encode_cols(infos_11831,source_idx_11793,line_11802,col_11830);


var G__11832 = cljs.core.next(seq__10860_11823__$1);
var G__11833 = null;
var G__11834 = (0);
var G__11835 = (0);
seq__10860_11806 = G__11832;
chunk__10861_11807 = G__11833;
count__10862_11808 = G__11834;
i__10863_11809 = G__11835;
continue;
}
} else {
}
}
break;
}


var G__11836 = seq__10784_11797;
var G__11837 = chunk__10785_11798;
var G__11838 = count__10786_11799;
var G__11839 = (i__10787_11800 + (1));
seq__10784_11797 = G__11836;
chunk__10785_11798 = G__11837;
count__10786_11799 = G__11838;
i__10787_11800 = G__11839;
continue;
} else {
var temp__5735__auto___11841 = cljs.core.seq(seq__10784_11797);
if(temp__5735__auto___11841){
var seq__10784_11842__$1 = temp__5735__auto___11841;
if(cljs.core.chunked_seq_QMARK_(seq__10784_11842__$1)){
var c__4556__auto___11843 = cljs.core.chunk_first(seq__10784_11842__$1);
var G__11844 = cljs.core.chunk_rest(seq__10784_11842__$1);
var G__11845 = c__4556__auto___11843;
var G__11846 = cljs.core.count(c__4556__auto___11843);
var G__11847 = (0);
seq__10784_11797 = G__11844;
chunk__10785_11798 = G__11845;
count__10786_11799 = G__11846;
i__10787_11800 = G__11847;
continue;
} else {
var vec__10884_11848 = cljs.core.first(seq__10784_11842__$1);
var line_11849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10884_11848,(0),null);
var cols_11850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10884_11848,(1),null);
var seq__10887_11851 = cljs.core.seq(cols_11850);
var chunk__10888_11852 = null;
var count__10889_11853 = (0);
var i__10890_11854 = (0);
while(true){
if((i__10890_11854 < count__10889_11853)){
var vec__10905_11855 = chunk__10888_11852.cljs$core$IIndexed$_nth$arity$2(null,i__10890_11854);
var col_11856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10905_11855,(0),null);
var infos_11857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10905_11855,(1),null);
encode_cols(infos_11857,source_idx_11793,line_11849,col_11856);


var G__11858 = seq__10887_11851;
var G__11859 = chunk__10888_11852;
var G__11860 = count__10889_11853;
var G__11861 = (i__10890_11854 + (1));
seq__10887_11851 = G__11858;
chunk__10888_11852 = G__11859;
count__10889_11853 = G__11860;
i__10890_11854 = G__11861;
continue;
} else {
var temp__5735__auto___11862__$1 = cljs.core.seq(seq__10887_11851);
if(temp__5735__auto___11862__$1){
var seq__10887_11863__$1 = temp__5735__auto___11862__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10887_11863__$1)){
var c__4556__auto___11864 = cljs.core.chunk_first(seq__10887_11863__$1);
var G__11865 = cljs.core.chunk_rest(seq__10887_11863__$1);
var G__11866 = c__4556__auto___11864;
var G__11867 = cljs.core.count(c__4556__auto___11864);
var G__11868 = (0);
seq__10887_11851 = G__11865;
chunk__10888_11852 = G__11866;
count__10889_11853 = G__11867;
i__10890_11854 = G__11868;
continue;
} else {
var vec__10912_11870 = cljs.core.first(seq__10887_11863__$1);
var col_11871 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10912_11870,(0),null);
var infos_11872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10912_11870,(1),null);
encode_cols(infos_11872,source_idx_11793,line_11849,col_11871);


var G__11873 = cljs.core.next(seq__10887_11863__$1);
var G__11874 = null;
var G__11875 = (0);
var G__11876 = (0);
seq__10887_11851 = G__11873;
chunk__10888_11852 = G__11874;
count__10889_11853 = G__11875;
i__10890_11854 = G__11876;
continue;
}
} else {
}
}
break;
}


var G__11877 = cljs.core.next(seq__10784_11842__$1);
var G__11878 = null;
var G__11879 = (0);
var G__11880 = (0);
seq__10784_11797 = G__11877;
chunk__10785_11798 = G__11878;
count__10786_11799 = G__11879;
i__10787_11800 = G__11880;
continue;
}
} else {
}
}
break;
}


var G__11881 = seq__10441_11788;
var G__11882 = chunk__10442_11789;
var G__11883 = count__10443_11790;
var G__11884 = (i__10444_11791 + (1));
seq__10441_11788 = G__11881;
chunk__10442_11789 = G__11882;
count__10443_11790 = G__11883;
i__10444_11791 = G__11884;
continue;
} else {
var temp__5735__auto___11885 = cljs.core.seq(seq__10441_11788);
if(temp__5735__auto___11885){
var seq__10441_11886__$1 = temp__5735__auto___11885;
if(cljs.core.chunked_seq_QMARK_(seq__10441_11886__$1)){
var c__4556__auto___11889 = cljs.core.chunk_first(seq__10441_11886__$1);
var G__11890 = cljs.core.chunk_rest(seq__10441_11886__$1);
var G__11891 = c__4556__auto___11889;
var G__11892 = cljs.core.count(c__4556__auto___11889);
var G__11893 = (0);
seq__10441_11788 = G__11890;
chunk__10442_11789 = G__11891;
count__10443_11790 = G__11892;
i__10444_11791 = G__11893;
continue;
} else {
var vec__10915_11894 = cljs.core.first(seq__10441_11886__$1);
var source_idx_11895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10915_11894,(0),null);
var vec__10918_11896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10915_11894,(1),null);
var __11897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10918_11896,(0),null);
var lines_11898__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10918_11896,(1),null);
var seq__10921_11901 = cljs.core.seq(lines_11898__$1);
var chunk__10922_11902 = null;
var count__10923_11903 = (0);
var i__10924_11904 = (0);
while(true){
if((i__10924_11904 < count__10923_11903)){
var vec__11003_11905 = chunk__10922_11902.cljs$core$IIndexed$_nth$arity$2(null,i__10924_11904);
var line_11906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003_11905,(0),null);
var cols_11907 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11003_11905,(1),null);
var seq__11006_11909 = cljs.core.seq(cols_11907);
var chunk__11007_11910 = null;
var count__11008_11911 = (0);
var i__11009_11912 = (0);
while(true){
if((i__11009_11912 < count__11008_11911)){
var vec__11018_11913 = chunk__11007_11910.cljs$core$IIndexed$_nth$arity$2(null,i__11009_11912);
var col_11914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11018_11913,(0),null);
var infos_11915 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11018_11913,(1),null);
encode_cols(infos_11915,source_idx_11895,line_11906,col_11914);


var G__11917 = seq__11006_11909;
var G__11918 = chunk__11007_11910;
var G__11919 = count__11008_11911;
var G__11920 = (i__11009_11912 + (1));
seq__11006_11909 = G__11917;
chunk__11007_11910 = G__11918;
count__11008_11911 = G__11919;
i__11009_11912 = G__11920;
continue;
} else {
var temp__5735__auto___11921__$1 = cljs.core.seq(seq__11006_11909);
if(temp__5735__auto___11921__$1){
var seq__11006_11922__$1 = temp__5735__auto___11921__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11006_11922__$1)){
var c__4556__auto___11923 = cljs.core.chunk_first(seq__11006_11922__$1);
var G__11924 = cljs.core.chunk_rest(seq__11006_11922__$1);
var G__11925 = c__4556__auto___11923;
var G__11926 = cljs.core.count(c__4556__auto___11923);
var G__11927 = (0);
seq__11006_11909 = G__11924;
chunk__11007_11910 = G__11925;
count__11008_11911 = G__11926;
i__11009_11912 = G__11927;
continue;
} else {
var vec__11026_11928 = cljs.core.first(seq__11006_11922__$1);
var col_11929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11026_11928,(0),null);
var infos_11930 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11026_11928,(1),null);
encode_cols(infos_11930,source_idx_11895,line_11906,col_11929);


var G__11931 = cljs.core.next(seq__11006_11922__$1);
var G__11932 = null;
var G__11933 = (0);
var G__11934 = (0);
seq__11006_11909 = G__11931;
chunk__11007_11910 = G__11932;
count__11008_11911 = G__11933;
i__11009_11912 = G__11934;
continue;
}
} else {
}
}
break;
}


var G__11935 = seq__10921_11901;
var G__11936 = chunk__10922_11902;
var G__11937 = count__10923_11903;
var G__11938 = (i__10924_11904 + (1));
seq__10921_11901 = G__11935;
chunk__10922_11902 = G__11936;
count__10923_11903 = G__11937;
i__10924_11904 = G__11938;
continue;
} else {
var temp__5735__auto___11939__$1 = cljs.core.seq(seq__10921_11901);
if(temp__5735__auto___11939__$1){
var seq__10921_11940__$1 = temp__5735__auto___11939__$1;
if(cljs.core.chunked_seq_QMARK_(seq__10921_11940__$1)){
var c__4556__auto___11941 = cljs.core.chunk_first(seq__10921_11940__$1);
var G__11942 = cljs.core.chunk_rest(seq__10921_11940__$1);
var G__11943 = c__4556__auto___11941;
var G__11944 = cljs.core.count(c__4556__auto___11941);
var G__11945 = (0);
seq__10921_11901 = G__11942;
chunk__10922_11902 = G__11943;
count__10923_11903 = G__11944;
i__10924_11904 = G__11945;
continue;
} else {
var vec__11029_11948 = cljs.core.first(seq__10921_11940__$1);
var line_11949 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11029_11948,(0),null);
var cols_11950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11029_11948,(1),null);
var seq__11032_11951 = cljs.core.seq(cols_11950);
var chunk__11033_11952 = null;
var count__11034_11953 = (0);
var i__11035_11954 = (0);
while(true){
if((i__11035_11954 < count__11034_11953)){
var vec__11054_11955 = chunk__11033_11952.cljs$core$IIndexed$_nth$arity$2(null,i__11035_11954);
var col_11956 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054_11955,(0),null);
var infos_11957 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11054_11955,(1),null);
encode_cols(infos_11957,source_idx_11895,line_11949,col_11956);


var G__11963 = seq__11032_11951;
var G__11964 = chunk__11033_11952;
var G__11965 = count__11034_11953;
var G__11966 = (i__11035_11954 + (1));
seq__11032_11951 = G__11963;
chunk__11033_11952 = G__11964;
count__11034_11953 = G__11965;
i__11035_11954 = G__11966;
continue;
} else {
var temp__5735__auto___11967__$2 = cljs.core.seq(seq__11032_11951);
if(temp__5735__auto___11967__$2){
var seq__11032_11968__$1 = temp__5735__auto___11967__$2;
if(cljs.core.chunked_seq_QMARK_(seq__11032_11968__$1)){
var c__4556__auto___11969 = cljs.core.chunk_first(seq__11032_11968__$1);
var G__11970 = cljs.core.chunk_rest(seq__11032_11968__$1);
var G__11971 = c__4556__auto___11969;
var G__11972 = cljs.core.count(c__4556__auto___11969);
var G__11973 = (0);
seq__11032_11951 = G__11970;
chunk__11033_11952 = G__11971;
count__11034_11953 = G__11972;
i__11035_11954 = G__11973;
continue;
} else {
var vec__11071_11974 = cljs.core.first(seq__11032_11968__$1);
var col_11975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11071_11974,(0),null);
var infos_11976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11071_11974,(1),null);
encode_cols(infos_11976,source_idx_11895,line_11949,col_11975);


var G__11977 = cljs.core.next(seq__11032_11968__$1);
var G__11978 = null;
var G__11979 = (0);
var G__11980 = (0);
seq__11032_11951 = G__11977;
chunk__11033_11952 = G__11978;
count__11034_11953 = G__11979;
i__11035_11954 = G__11980;
continue;
}
} else {
}
}
break;
}


var G__11981 = cljs.core.next(seq__10921_11940__$1);
var G__11982 = null;
var G__11983 = (0);
var G__11984 = (0);
seq__10921_11901 = G__11981;
chunk__10922_11902 = G__11982;
count__10923_11903 = G__11983;
i__10924_11904 = G__11984;
continue;
}
} else {
}
}
break;
}


var G__11985 = cljs.core.next(seq__10441_11886__$1);
var G__11986 = null;
var G__11987 = (0);
var G__11988 = (0);
seq__10441_11788 = G__11985;
chunk__10442_11789 = G__11986;
count__10443_11790 = G__11987;
i__10444_11791 = G__11988;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__11074 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__10415_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__10415_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__10416_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__10416_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10417_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__10417_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__11075 = G__11074;
goog.object.set(G__11075,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__11075;
} else {
return G__11074;
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
var vec__11098 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11098,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11098,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__11106 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11106,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11106,(1),null);
var G__11999 = cljs.core.next(col_map_seq);
var G__12000 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__11106,col,infos,vec__11098,line,col_map){
return (function (v,p__11111){
var map__11112 = p__11111;
var map__11112__$1 = (((((!((map__11112 == null))))?(((((map__11112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11112):map__11112);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11112__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11112__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__11106,col,infos,vec__11098,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__11999;
new_cols = G__12000;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__12004 = cljs.core.next(line_map_seq);
var G__12005 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__12004;
new_lines = G__12005;
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
var seq__11132_12006 = cljs.core.seq(reverse_map);
var chunk__11133_12007 = null;
var count__11134_12008 = (0);
var i__11135_12009 = (0);
while(true){
if((i__11135_12009 < count__11134_12008)){
var vec__11403_12010 = chunk__11133_12007.cljs$core$IIndexed$_nth$arity$2(null,i__11135_12009);
var line_12011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11403_12010,(0),null);
var columns_12012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11403_12010,(1),null);
var seq__11407_12013 = cljs.core.seq(columns_12012);
var chunk__11408_12014 = null;
var count__11409_12015 = (0);
var i__11410_12016 = (0);
while(true){
if((i__11410_12016 < count__11409_12015)){
var vec__11488_12017 = chunk__11408_12014.cljs$core$IIndexed$_nth$arity$2(null,i__11410_12016);
var column_12018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11488_12017,(0),null);
var column_info_12019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11488_12017,(1),null);
var seq__11491_12020 = cljs.core.seq(column_info_12019);
var chunk__11492_12021 = null;
var count__11493_12022 = (0);
var i__11494_12023 = (0);
while(true){
if((i__11494_12023 < count__11493_12022)){
var map__11507_12024 = chunk__11492_12021.cljs$core$IIndexed$_nth$arity$2(null,i__11494_12023);
var map__11507_12025__$1 = (((((!((map__11507_12024 == null))))?(((((map__11507_12024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11507_12024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11507_12024):map__11507_12024);
var gline_12026 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11507_12025__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12027 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11507_12025__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11507_12025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12026], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11491_12020,chunk__11492_12021,count__11493_12022,i__11494_12023,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11507_12024,map__11507_12025__$1,gline_12026,gcol_12027,name_12028,vec__11488_12017,column_12018,column_info_12019,vec__11403_12010,line_12011,columns_12012,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12027], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12011,new cljs.core.Keyword(null,"col","col",-1959363084),column_12018,new cljs.core.Keyword(null,"name","name",1843675177),name_12028], null));
});})(seq__11491_12020,chunk__11492_12021,count__11493_12022,i__11494_12023,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11507_12024,map__11507_12025__$1,gline_12026,gcol_12027,name_12028,vec__11488_12017,column_12018,column_info_12019,vec__11403_12010,line_12011,columns_12012,inverted))
,cljs.core.sorted_map()));


var G__12030 = seq__11491_12020;
var G__12031 = chunk__11492_12021;
var G__12032 = count__11493_12022;
var G__12033 = (i__11494_12023 + (1));
seq__11491_12020 = G__12030;
chunk__11492_12021 = G__12031;
count__11493_12022 = G__12032;
i__11494_12023 = G__12033;
continue;
} else {
var temp__5735__auto___12034 = cljs.core.seq(seq__11491_12020);
if(temp__5735__auto___12034){
var seq__11491_12035__$1 = temp__5735__auto___12034;
if(cljs.core.chunked_seq_QMARK_(seq__11491_12035__$1)){
var c__4556__auto___12036 = cljs.core.chunk_first(seq__11491_12035__$1);
var G__12037 = cljs.core.chunk_rest(seq__11491_12035__$1);
var G__12038 = c__4556__auto___12036;
var G__12039 = cljs.core.count(c__4556__auto___12036);
var G__12040 = (0);
seq__11491_12020 = G__12037;
chunk__11492_12021 = G__12038;
count__11493_12022 = G__12039;
i__11494_12023 = G__12040;
continue;
} else {
var map__11514_12041 = cljs.core.first(seq__11491_12035__$1);
var map__11514_12042__$1 = (((((!((map__11514_12041 == null))))?(((((map__11514_12041.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11514_12041.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11514_12041):map__11514_12041);
var gline_12043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11514_12042__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11514_12042__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11514_12042__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12043], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11491_12020,chunk__11492_12021,count__11493_12022,i__11494_12023,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11514_12041,map__11514_12042__$1,gline_12043,gcol_12044,name_12045,seq__11491_12035__$1,temp__5735__auto___12034,vec__11488_12017,column_12018,column_info_12019,vec__11403_12010,line_12011,columns_12012,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12044], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12011,new cljs.core.Keyword(null,"col","col",-1959363084),column_12018,new cljs.core.Keyword(null,"name","name",1843675177),name_12045], null));
});})(seq__11491_12020,chunk__11492_12021,count__11493_12022,i__11494_12023,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11514_12041,map__11514_12042__$1,gline_12043,gcol_12044,name_12045,seq__11491_12035__$1,temp__5735__auto___12034,vec__11488_12017,column_12018,column_info_12019,vec__11403_12010,line_12011,columns_12012,inverted))
,cljs.core.sorted_map()));


var G__12047 = cljs.core.next(seq__11491_12035__$1);
var G__12048 = null;
var G__12049 = (0);
var G__12050 = (0);
seq__11491_12020 = G__12047;
chunk__11492_12021 = G__12048;
count__11493_12022 = G__12049;
i__11494_12023 = G__12050;
continue;
}
} else {
}
}
break;
}


var G__12051 = seq__11407_12013;
var G__12052 = chunk__11408_12014;
var G__12053 = count__11409_12015;
var G__12054 = (i__11410_12016 + (1));
seq__11407_12013 = G__12051;
chunk__11408_12014 = G__12052;
count__11409_12015 = G__12053;
i__11410_12016 = G__12054;
continue;
} else {
var temp__5735__auto___12055 = cljs.core.seq(seq__11407_12013);
if(temp__5735__auto___12055){
var seq__11407_12056__$1 = temp__5735__auto___12055;
if(cljs.core.chunked_seq_QMARK_(seq__11407_12056__$1)){
var c__4556__auto___12057 = cljs.core.chunk_first(seq__11407_12056__$1);
var G__12058 = cljs.core.chunk_rest(seq__11407_12056__$1);
var G__12059 = c__4556__auto___12057;
var G__12060 = cljs.core.count(c__4556__auto___12057);
var G__12061 = (0);
seq__11407_12013 = G__12058;
chunk__11408_12014 = G__12059;
count__11409_12015 = G__12060;
i__11410_12016 = G__12061;
continue;
} else {
var vec__11524_12062 = cljs.core.first(seq__11407_12056__$1);
var column_12063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11524_12062,(0),null);
var column_info_12064 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11524_12062,(1),null);
var seq__11527_12065 = cljs.core.seq(column_info_12064);
var chunk__11528_12066 = null;
var count__11529_12067 = (0);
var i__11530_12068 = (0);
while(true){
if((i__11530_12068 < count__11529_12067)){
var map__11541_12075 = chunk__11528_12066.cljs$core$IIndexed$_nth$arity$2(null,i__11530_12068);
var map__11541_12076__$1 = (((((!((map__11541_12075 == null))))?(((((map__11541_12075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11541_12075.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11541_12075):map__11541_12075);
var gline_12077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11541_12076__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11541_12076__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12079 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11541_12076__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12077], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11527_12065,chunk__11528_12066,count__11529_12067,i__11530_12068,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11541_12075,map__11541_12076__$1,gline_12077,gcol_12078,name_12079,vec__11524_12062,column_12063,column_info_12064,seq__11407_12056__$1,temp__5735__auto___12055,vec__11403_12010,line_12011,columns_12012,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12078], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12011,new cljs.core.Keyword(null,"col","col",-1959363084),column_12063,new cljs.core.Keyword(null,"name","name",1843675177),name_12079], null));
});})(seq__11527_12065,chunk__11528_12066,count__11529_12067,i__11530_12068,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11541_12075,map__11541_12076__$1,gline_12077,gcol_12078,name_12079,vec__11524_12062,column_12063,column_info_12064,seq__11407_12056__$1,temp__5735__auto___12055,vec__11403_12010,line_12011,columns_12012,inverted))
,cljs.core.sorted_map()));


var G__12088 = seq__11527_12065;
var G__12089 = chunk__11528_12066;
var G__12090 = count__11529_12067;
var G__12091 = (i__11530_12068 + (1));
seq__11527_12065 = G__12088;
chunk__11528_12066 = G__12089;
count__11529_12067 = G__12090;
i__11530_12068 = G__12091;
continue;
} else {
var temp__5735__auto___12092__$1 = cljs.core.seq(seq__11527_12065);
if(temp__5735__auto___12092__$1){
var seq__11527_12093__$1 = temp__5735__auto___12092__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11527_12093__$1)){
var c__4556__auto___12094 = cljs.core.chunk_first(seq__11527_12093__$1);
var G__12095 = cljs.core.chunk_rest(seq__11527_12093__$1);
var G__12096 = c__4556__auto___12094;
var G__12097 = cljs.core.count(c__4556__auto___12094);
var G__12098 = (0);
seq__11527_12065 = G__12095;
chunk__11528_12066 = G__12096;
count__11529_12067 = G__12097;
i__11530_12068 = G__12098;
continue;
} else {
var map__11545_12099 = cljs.core.first(seq__11527_12093__$1);
var map__11545_12100__$1 = (((((!((map__11545_12099 == null))))?(((((map__11545_12099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11545_12099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11545_12099):map__11545_12099);
var gline_12101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11545_12100__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11545_12100__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12103 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11545_12100__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12101], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11527_12065,chunk__11528_12066,count__11529_12067,i__11530_12068,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11545_12099,map__11545_12100__$1,gline_12101,gcol_12102,name_12103,seq__11527_12093__$1,temp__5735__auto___12092__$1,vec__11524_12062,column_12063,column_info_12064,seq__11407_12056__$1,temp__5735__auto___12055,vec__11403_12010,line_12011,columns_12012,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12102], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12011,new cljs.core.Keyword(null,"col","col",-1959363084),column_12063,new cljs.core.Keyword(null,"name","name",1843675177),name_12103], null));
});})(seq__11527_12065,chunk__11528_12066,count__11529_12067,i__11530_12068,seq__11407_12013,chunk__11408_12014,count__11409_12015,i__11410_12016,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11545_12099,map__11545_12100__$1,gline_12101,gcol_12102,name_12103,seq__11527_12093__$1,temp__5735__auto___12092__$1,vec__11524_12062,column_12063,column_info_12064,seq__11407_12056__$1,temp__5735__auto___12055,vec__11403_12010,line_12011,columns_12012,inverted))
,cljs.core.sorted_map()));


var G__12109 = cljs.core.next(seq__11527_12093__$1);
var G__12110 = null;
var G__12111 = (0);
var G__12112 = (0);
seq__11527_12065 = G__12109;
chunk__11528_12066 = G__12110;
count__11529_12067 = G__12111;
i__11530_12068 = G__12112;
continue;
}
} else {
}
}
break;
}


var G__12113 = cljs.core.next(seq__11407_12056__$1);
var G__12114 = null;
var G__12115 = (0);
var G__12116 = (0);
seq__11407_12013 = G__12113;
chunk__11408_12014 = G__12114;
count__11409_12015 = G__12115;
i__11410_12016 = G__12116;
continue;
}
} else {
}
}
break;
}


var G__12117 = seq__11132_12006;
var G__12118 = chunk__11133_12007;
var G__12119 = count__11134_12008;
var G__12120 = (i__11135_12009 + (1));
seq__11132_12006 = G__12117;
chunk__11133_12007 = G__12118;
count__11134_12008 = G__12119;
i__11135_12009 = G__12120;
continue;
} else {
var temp__5735__auto___12121 = cljs.core.seq(seq__11132_12006);
if(temp__5735__auto___12121){
var seq__11132_12122__$1 = temp__5735__auto___12121;
if(cljs.core.chunked_seq_QMARK_(seq__11132_12122__$1)){
var c__4556__auto___12123 = cljs.core.chunk_first(seq__11132_12122__$1);
var G__12124 = cljs.core.chunk_rest(seq__11132_12122__$1);
var G__12125 = c__4556__auto___12123;
var G__12126 = cljs.core.count(c__4556__auto___12123);
var G__12127 = (0);
seq__11132_12006 = G__12124;
chunk__11133_12007 = G__12125;
count__11134_12008 = G__12126;
i__11135_12009 = G__12127;
continue;
} else {
var vec__11559_12130 = cljs.core.first(seq__11132_12122__$1);
var line_12131 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11559_12130,(0),null);
var columns_12132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11559_12130,(1),null);
var seq__11563_12133 = cljs.core.seq(columns_12132);
var chunk__11564_12134 = null;
var count__11565_12135 = (0);
var i__11566_12136 = (0);
while(true){
if((i__11566_12136 < count__11565_12135)){
var vec__11634_12137 = chunk__11564_12134.cljs$core$IIndexed$_nth$arity$2(null,i__11566_12136);
var column_12138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11634_12137,(0),null);
var column_info_12139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11634_12137,(1),null);
var seq__11637_12140 = cljs.core.seq(column_info_12139);
var chunk__11638_12141 = null;
var count__11639_12142 = (0);
var i__11640_12143 = (0);
while(true){
if((i__11640_12143 < count__11639_12142)){
var map__11647_12144 = chunk__11638_12141.cljs$core$IIndexed$_nth$arity$2(null,i__11640_12143);
var map__11647_12145__$1 = (((((!((map__11647_12144 == null))))?(((((map__11647_12144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11647_12144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11647_12144):map__11647_12144);
var gline_12146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11647_12145__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11647_12145__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11647_12145__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12146], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11637_12140,chunk__11638_12141,count__11639_12142,i__11640_12143,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11647_12144,map__11647_12145__$1,gline_12146,gcol_12147,name_12148,vec__11634_12137,column_12138,column_info_12139,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12147], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12131,new cljs.core.Keyword(null,"col","col",-1959363084),column_12138,new cljs.core.Keyword(null,"name","name",1843675177),name_12148], null));
});})(seq__11637_12140,chunk__11638_12141,count__11639_12142,i__11640_12143,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11647_12144,map__11647_12145__$1,gline_12146,gcol_12147,name_12148,vec__11634_12137,column_12138,column_info_12139,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted))
,cljs.core.sorted_map()));


var G__12149 = seq__11637_12140;
var G__12150 = chunk__11638_12141;
var G__12151 = count__11639_12142;
var G__12152 = (i__11640_12143 + (1));
seq__11637_12140 = G__12149;
chunk__11638_12141 = G__12150;
count__11639_12142 = G__12151;
i__11640_12143 = G__12152;
continue;
} else {
var temp__5735__auto___12154__$1 = cljs.core.seq(seq__11637_12140);
if(temp__5735__auto___12154__$1){
var seq__11637_12158__$1 = temp__5735__auto___12154__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11637_12158__$1)){
var c__4556__auto___12159 = cljs.core.chunk_first(seq__11637_12158__$1);
var G__12160 = cljs.core.chunk_rest(seq__11637_12158__$1);
var G__12161 = c__4556__auto___12159;
var G__12162 = cljs.core.count(c__4556__auto___12159);
var G__12163 = (0);
seq__11637_12140 = G__12160;
chunk__11638_12141 = G__12161;
count__11639_12142 = G__12162;
i__11640_12143 = G__12163;
continue;
} else {
var map__11661_12164 = cljs.core.first(seq__11637_12158__$1);
var map__11661_12165__$1 = (((((!((map__11661_12164 == null))))?(((((map__11661_12164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11661_12164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11661_12164):map__11661_12164);
var gline_12166 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11661_12165__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11661_12165__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11661_12165__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12166], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11637_12140,chunk__11638_12141,count__11639_12142,i__11640_12143,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11661_12164,map__11661_12165__$1,gline_12166,gcol_12167,name_12168,seq__11637_12158__$1,temp__5735__auto___12154__$1,vec__11634_12137,column_12138,column_info_12139,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12167], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12131,new cljs.core.Keyword(null,"col","col",-1959363084),column_12138,new cljs.core.Keyword(null,"name","name",1843675177),name_12168], null));
});})(seq__11637_12140,chunk__11638_12141,count__11639_12142,i__11640_12143,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11661_12164,map__11661_12165__$1,gline_12166,gcol_12167,name_12168,seq__11637_12158__$1,temp__5735__auto___12154__$1,vec__11634_12137,column_12138,column_info_12139,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted))
,cljs.core.sorted_map()));


var G__12181 = cljs.core.next(seq__11637_12158__$1);
var G__12182 = null;
var G__12183 = (0);
var G__12184 = (0);
seq__11637_12140 = G__12181;
chunk__11638_12141 = G__12182;
count__11639_12142 = G__12183;
i__11640_12143 = G__12184;
continue;
}
} else {
}
}
break;
}


var G__12187 = seq__11563_12133;
var G__12188 = chunk__11564_12134;
var G__12189 = count__11565_12135;
var G__12190 = (i__11566_12136 + (1));
seq__11563_12133 = G__12187;
chunk__11564_12134 = G__12188;
count__11565_12135 = G__12189;
i__11566_12136 = G__12190;
continue;
} else {
var temp__5735__auto___12191__$1 = cljs.core.seq(seq__11563_12133);
if(temp__5735__auto___12191__$1){
var seq__11563_12194__$1 = temp__5735__auto___12191__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11563_12194__$1)){
var c__4556__auto___12196 = cljs.core.chunk_first(seq__11563_12194__$1);
var G__12197 = cljs.core.chunk_rest(seq__11563_12194__$1);
var G__12198 = c__4556__auto___12196;
var G__12199 = cljs.core.count(c__4556__auto___12196);
var G__12200 = (0);
seq__11563_12133 = G__12197;
chunk__11564_12134 = G__12198;
count__11565_12135 = G__12199;
i__11566_12136 = G__12200;
continue;
} else {
var vec__11671_12201 = cljs.core.first(seq__11563_12194__$1);
var column_12202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11671_12201,(0),null);
var column_info_12203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11671_12201,(1),null);
var seq__11674_12204 = cljs.core.seq(column_info_12203);
var chunk__11675_12205 = null;
var count__11676_12206 = (0);
var i__11677_12207 = (0);
while(true){
if((i__11677_12207 < count__11676_12206)){
var map__11692_12208 = chunk__11675_12205.cljs$core$IIndexed$_nth$arity$2(null,i__11677_12207);
var map__11692_12209__$1 = (((((!((map__11692_12208 == null))))?(((((map__11692_12208.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11692_12208.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11692_12208):map__11692_12208);
var gline_12210 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11692_12209__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12211 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11692_12209__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11692_12209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12210], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11674_12204,chunk__11675_12205,count__11676_12206,i__11677_12207,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11692_12208,map__11692_12209__$1,gline_12210,gcol_12211,name_12212,vec__11671_12201,column_12202,column_info_12203,seq__11563_12194__$1,temp__5735__auto___12191__$1,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12211], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12131,new cljs.core.Keyword(null,"col","col",-1959363084),column_12202,new cljs.core.Keyword(null,"name","name",1843675177),name_12212], null));
});})(seq__11674_12204,chunk__11675_12205,count__11676_12206,i__11677_12207,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11692_12208,map__11692_12209__$1,gline_12210,gcol_12211,name_12212,vec__11671_12201,column_12202,column_info_12203,seq__11563_12194__$1,temp__5735__auto___12191__$1,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted))
,cljs.core.sorted_map()));


var G__12226 = seq__11674_12204;
var G__12227 = chunk__11675_12205;
var G__12228 = count__11676_12206;
var G__12229 = (i__11677_12207 + (1));
seq__11674_12204 = G__12226;
chunk__11675_12205 = G__12227;
count__11676_12206 = G__12228;
i__11677_12207 = G__12229;
continue;
} else {
var temp__5735__auto___12230__$2 = cljs.core.seq(seq__11674_12204);
if(temp__5735__auto___12230__$2){
var seq__11674_12231__$1 = temp__5735__auto___12230__$2;
if(cljs.core.chunked_seq_QMARK_(seq__11674_12231__$1)){
var c__4556__auto___12234 = cljs.core.chunk_first(seq__11674_12231__$1);
var G__12235 = cljs.core.chunk_rest(seq__11674_12231__$1);
var G__12236 = c__4556__auto___12234;
var G__12237 = cljs.core.count(c__4556__auto___12234);
var G__12238 = (0);
seq__11674_12204 = G__12235;
chunk__11675_12205 = G__12236;
count__11676_12206 = G__12237;
i__11677_12207 = G__12238;
continue;
} else {
var map__11702_12239 = cljs.core.first(seq__11674_12231__$1);
var map__11702_12240__$1 = (((((!((map__11702_12239 == null))))?(((((map__11702_12239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11702_12239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11702_12239):map__11702_12239);
var gline_12241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11702_12240__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_12242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11702_12240__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_12243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11702_12240__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_12241], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__11674_12204,chunk__11675_12205,count__11676_12206,i__11677_12207,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11702_12239,map__11702_12240__$1,gline_12241,gcol_12242,name_12243,seq__11674_12231__$1,temp__5735__auto___12230__$2,vec__11671_12201,column_12202,column_info_12203,seq__11563_12194__$1,temp__5735__auto___12191__$1,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_12242], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_12131,new cljs.core.Keyword(null,"col","col",-1959363084),column_12202,new cljs.core.Keyword(null,"name","name",1843675177),name_12243], null));
});})(seq__11674_12204,chunk__11675_12205,count__11676_12206,i__11677_12207,seq__11563_12133,chunk__11564_12134,count__11565_12135,i__11566_12136,seq__11132_12006,chunk__11133_12007,count__11134_12008,i__11135_12009,map__11702_12239,map__11702_12240__$1,gline_12241,gcol_12242,name_12243,seq__11674_12231__$1,temp__5735__auto___12230__$2,vec__11671_12201,column_12202,column_info_12203,seq__11563_12194__$1,temp__5735__auto___12191__$1,vec__11559_12130,line_12131,columns_12132,seq__11132_12122__$1,temp__5735__auto___12121,inverted))
,cljs.core.sorted_map()));


var G__12252 = cljs.core.next(seq__11674_12231__$1);
var G__12253 = null;
var G__12254 = (0);
var G__12255 = (0);
seq__11674_12204 = G__12252;
chunk__11675_12205 = G__12253;
count__11676_12206 = G__12254;
i__11677_12207 = G__12255;
continue;
}
} else {
}
}
break;
}


var G__12258 = cljs.core.next(seq__11563_12194__$1);
var G__12259 = null;
var G__12260 = (0);
var G__12261 = (0);
seq__11563_12133 = G__12258;
chunk__11564_12134 = G__12259;
count__11565_12135 = G__12260;
i__11566_12136 = G__12261;
continue;
}
} else {
}
}
break;
}


var G__12262 = cljs.core.next(seq__11132_12122__$1);
var G__12263 = null;
var G__12264 = (0);
var G__12265 = (0);
seq__11132_12006 = G__12262;
chunk__11133_12007 = G__12263;
count__11134_12008 = G__12264;
i__11135_12009 = G__12265;
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
