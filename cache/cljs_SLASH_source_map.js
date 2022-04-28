goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__7948){
var vec__7949 = p__7948;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7949,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7949,(1),null);
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
var vec__7958 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7958,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7958,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7958,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7958,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7958,(4),null);
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
var vec__7978 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(4),null);
var vec__7981 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7981,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7981,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7981,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7981,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7981,(4),null);
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
var map__8014 = segmap;
var map__8014__$1 = (((((!((map__8014 == null))))?(((((map__8014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8014):map__8014);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8014__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8014__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8014__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8014__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8014__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__8044 = arguments.length;
switch (G__8044) {
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
var vec__8060 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9997 = cljs.core.next(segs__$1);
var G__9998 = nrelseg;
var G__9999 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9997;
relseg__$1 = G__9998;
result__$1 = G__9999;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8060,(1),null);
var G__10000 = (gline + (1));
var G__10001 = cljs.core.next(lines__$1);
var G__10002 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__10003 = result__$1;
gline = G__10000;
lines__$1 = G__10001;
relseg = G__10002;
result = G__10003;
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
var map__8074 = segmap;
var map__8074__$1 = (((((!((map__8074 == null))))?(((((map__8074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8074):map__8074);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8074__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__8071_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__8071_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__8093 = arguments.length;
switch (G__8093) {
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
var vec__8115 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__10012 = cljs.core.next(segs__$1);
var G__10013 = nrelseg;
var G__10014 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__10012;
relseg__$1 = G__10013;
result__$1 = G__10014;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8115,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8115,(1),null);
var G__10019 = (gline + (1));
var G__10020 = cljs.core.next(lines__$1);
var G__10021 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__10022 = result__$1;
gline = G__10019;
lines__$1 = G__10020;
relseg = G__10021;
result = G__10022;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8128){
var vec__8129 = p__8128;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8129,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__8133){
var vec__8134 = p__8133;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8134,(4),null);
var seg = vec__8134;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__8140){
var vec__8142 = p__8140;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8142,(4),null);
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
var seq__8176 = cljs.core.seq(infos);
var chunk__8177 = null;
var count__8178 = (0);
var i__8179 = (0);
while(true){
if((i__8179 < count__8178)){
var info = chunk__8177.cljs$core$IIndexed$_nth$arity$2(null,i__8179);
var segv_10041 = info__GT_segv(info,source_idx,line,col);
var gline_10042 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10043 = cljs.core.count(cljs.core.deref(lines));
if((gline_10042 > (lc_10043 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8176,chunk__8177,count__8178,i__8179,segv_10041,gline_10042,lc_10043,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_10042 - (lc_10043 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10041], null));
});})(seq__8176,chunk__8177,count__8178,i__8179,segv_10041,gline_10042,lc_10043,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8176,chunk__8177,count__8178,i__8179,segv_10041,gline_10042,lc_10043,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10042], null),cljs.core.conj,segv_10041);
});})(seq__8176,chunk__8177,count__8178,i__8179,segv_10041,gline_10042,lc_10043,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10048 = seq__8176;
var G__10049 = chunk__8177;
var G__10050 = count__8178;
var G__10051 = (i__8179 + (1));
seq__8176 = G__10048;
chunk__8177 = G__10049;
count__8178 = G__10050;
i__8179 = G__10051;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__8176);
if(temp__5735__auto__){
var seq__8176__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8176__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__8176__$1);
var G__10052 = cljs.core.chunk_rest(seq__8176__$1);
var G__10053 = c__4556__auto__;
var G__10054 = cljs.core.count(c__4556__auto__);
var G__10055 = (0);
seq__8176 = G__10052;
chunk__8177 = G__10053;
count__8178 = G__10054;
i__8179 = G__10055;
continue;
} else {
var info = cljs.core.first(seq__8176__$1);
var segv_10057 = info__GT_segv(info,source_idx,line,col);
var gline_10058 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_10059 = cljs.core.count(cljs.core.deref(lines));
if((gline_10058 > (lc_10059 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8176,chunk__8177,count__8178,i__8179,segv_10057,gline_10058,lc_10059,info,seq__8176__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_10058 - (lc_10059 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_10057], null));
});})(seq__8176,chunk__8177,count__8178,i__8179,segv_10057,gline_10058,lc_10059,info,seq__8176__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__8176,chunk__8177,count__8178,i__8179,segv_10057,gline_10058,lc_10059,info,seq__8176__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10058], null),cljs.core.conj,segv_10057);
});})(seq__8176,chunk__8177,count__8178,i__8179,segv_10057,gline_10058,lc_10059,info,seq__8176__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__10067 = cljs.core.next(seq__8176__$1);
var G__10068 = null;
var G__10069 = (0);
var G__10070 = (0);
seq__8176 = G__10067;
chunk__8177 = G__10068;
count__8178 = G__10069;
i__8179 = G__10070;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__8194_10071 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__8195_10072 = null;
var count__8196_10073 = (0);
var i__8197_10074 = (0);
while(true){
if((i__8197_10074 < count__8196_10073)){
var vec__8512_10078 = chunk__8195_10072.cljs$core$IIndexed$_nth$arity$2(null,i__8197_10074);
var source_idx_10079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8512_10078,(0),null);
var vec__8515_10080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8512_10078,(1),null);
var __10081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8515_10080,(0),null);
var lines_10082__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8515_10080,(1),null);
var seq__8518_10083 = cljs.core.seq(lines_10082__$1);
var chunk__8519_10084 = null;
var count__8520_10085 = (0);
var i__8521_10086 = (0);
while(true){
if((i__8521_10086 < count__8520_10085)){
var vec__8580_10087 = chunk__8519_10084.cljs$core$IIndexed$_nth$arity$2(null,i__8521_10086);
var line_10088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8580_10087,(0),null);
var cols_10089 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8580_10087,(1),null);
var seq__8583_10094 = cljs.core.seq(cols_10089);
var chunk__8584_10095 = null;
var count__8585_10096 = (0);
var i__8586_10097 = (0);
while(true){
if((i__8586_10097 < count__8585_10096)){
var vec__8602_10098 = chunk__8584_10095.cljs$core$IIndexed$_nth$arity$2(null,i__8586_10097);
var col_10099 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8602_10098,(0),null);
var infos_10100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8602_10098,(1),null);
encode_cols(infos_10100,source_idx_10079,line_10088,col_10099);


var G__10101 = seq__8583_10094;
var G__10102 = chunk__8584_10095;
var G__10103 = count__8585_10096;
var G__10104 = (i__8586_10097 + (1));
seq__8583_10094 = G__10101;
chunk__8584_10095 = G__10102;
count__8585_10096 = G__10103;
i__8586_10097 = G__10104;
continue;
} else {
var temp__5735__auto___10106 = cljs.core.seq(seq__8583_10094);
if(temp__5735__auto___10106){
var seq__8583_10113__$1 = temp__5735__auto___10106;
if(cljs.core.chunked_seq_QMARK_(seq__8583_10113__$1)){
var c__4556__auto___10114 = cljs.core.chunk_first(seq__8583_10113__$1);
var G__10115 = cljs.core.chunk_rest(seq__8583_10113__$1);
var G__10116 = c__4556__auto___10114;
var G__10117 = cljs.core.count(c__4556__auto___10114);
var G__10118 = (0);
seq__8583_10094 = G__10115;
chunk__8584_10095 = G__10116;
count__8585_10096 = G__10117;
i__8586_10097 = G__10118;
continue;
} else {
var vec__8610_10119 = cljs.core.first(seq__8583_10113__$1);
var col_10120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8610_10119,(0),null);
var infos_10121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8610_10119,(1),null);
encode_cols(infos_10121,source_idx_10079,line_10088,col_10120);


var G__10122 = cljs.core.next(seq__8583_10113__$1);
var G__10123 = null;
var G__10124 = (0);
var G__10125 = (0);
seq__8583_10094 = G__10122;
chunk__8584_10095 = G__10123;
count__8585_10096 = G__10124;
i__8586_10097 = G__10125;
continue;
}
} else {
}
}
break;
}


var G__10126 = seq__8518_10083;
var G__10127 = chunk__8519_10084;
var G__10128 = count__8520_10085;
var G__10129 = (i__8521_10086 + (1));
seq__8518_10083 = G__10126;
chunk__8519_10084 = G__10127;
count__8520_10085 = G__10128;
i__8521_10086 = G__10129;
continue;
} else {
var temp__5735__auto___10130 = cljs.core.seq(seq__8518_10083);
if(temp__5735__auto___10130){
var seq__8518_10131__$1 = temp__5735__auto___10130;
if(cljs.core.chunked_seq_QMARK_(seq__8518_10131__$1)){
var c__4556__auto___10133 = cljs.core.chunk_first(seq__8518_10131__$1);
var G__10135 = cljs.core.chunk_rest(seq__8518_10131__$1);
var G__10136 = c__4556__auto___10133;
var G__10137 = cljs.core.count(c__4556__auto___10133);
var G__10138 = (0);
seq__8518_10083 = G__10135;
chunk__8519_10084 = G__10136;
count__8520_10085 = G__10137;
i__8521_10086 = G__10138;
continue;
} else {
var vec__8617_10140 = cljs.core.first(seq__8518_10131__$1);
var line_10141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8617_10140,(0),null);
var cols_10142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8617_10140,(1),null);
var seq__8621_10143 = cljs.core.seq(cols_10142);
var chunk__8622_10144 = null;
var count__8623_10145 = (0);
var i__8624_10146 = (0);
while(true){
if((i__8624_10146 < count__8623_10145)){
var vec__8642_10147 = chunk__8622_10144.cljs$core$IIndexed$_nth$arity$2(null,i__8624_10146);
var col_10148 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8642_10147,(0),null);
var infos_10149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8642_10147,(1),null);
encode_cols(infos_10149,source_idx_10079,line_10141,col_10148);


var G__10155 = seq__8621_10143;
var G__10157 = chunk__8622_10144;
var G__10158 = count__8623_10145;
var G__10159 = (i__8624_10146 + (1));
seq__8621_10143 = G__10155;
chunk__8622_10144 = G__10157;
count__8623_10145 = G__10158;
i__8624_10146 = G__10159;
continue;
} else {
var temp__5735__auto___10161__$1 = cljs.core.seq(seq__8621_10143);
if(temp__5735__auto___10161__$1){
var seq__8621_10163__$1 = temp__5735__auto___10161__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8621_10163__$1)){
var c__4556__auto___10164 = cljs.core.chunk_first(seq__8621_10163__$1);
var G__10165 = cljs.core.chunk_rest(seq__8621_10163__$1);
var G__10166 = c__4556__auto___10164;
var G__10167 = cljs.core.count(c__4556__auto___10164);
var G__10168 = (0);
seq__8621_10143 = G__10165;
chunk__8622_10144 = G__10166;
count__8623_10145 = G__10167;
i__8624_10146 = G__10168;
continue;
} else {
var vec__8647_10169 = cljs.core.first(seq__8621_10163__$1);
var col_10170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8647_10169,(0),null);
var infos_10171 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8647_10169,(1),null);
encode_cols(infos_10171,source_idx_10079,line_10141,col_10170);


var G__10175 = cljs.core.next(seq__8621_10163__$1);
var G__10176 = null;
var G__10178 = (0);
var G__10179 = (0);
seq__8621_10143 = G__10175;
chunk__8622_10144 = G__10176;
count__8623_10145 = G__10178;
i__8624_10146 = G__10179;
continue;
}
} else {
}
}
break;
}


var G__10182 = cljs.core.next(seq__8518_10131__$1);
var G__10183 = null;
var G__10184 = (0);
var G__10185 = (0);
seq__8518_10083 = G__10182;
chunk__8519_10084 = G__10183;
count__8520_10085 = G__10184;
i__8521_10086 = G__10185;
continue;
}
} else {
}
}
break;
}


var G__10186 = seq__8194_10071;
var G__10187 = chunk__8195_10072;
var G__10188 = count__8196_10073;
var G__10189 = (i__8197_10074 + (1));
seq__8194_10071 = G__10186;
chunk__8195_10072 = G__10187;
count__8196_10073 = G__10188;
i__8197_10074 = G__10189;
continue;
} else {
var temp__5735__auto___10190 = cljs.core.seq(seq__8194_10071);
if(temp__5735__auto___10190){
var seq__8194_10191__$1 = temp__5735__auto___10190;
if(cljs.core.chunked_seq_QMARK_(seq__8194_10191__$1)){
var c__4556__auto___10193 = cljs.core.chunk_first(seq__8194_10191__$1);
var G__10194 = cljs.core.chunk_rest(seq__8194_10191__$1);
var G__10195 = c__4556__auto___10193;
var G__10196 = cljs.core.count(c__4556__auto___10193);
var G__10197 = (0);
seq__8194_10071 = G__10194;
chunk__8195_10072 = G__10195;
count__8196_10073 = G__10196;
i__8197_10074 = G__10197;
continue;
} else {
var vec__8660_10199 = cljs.core.first(seq__8194_10191__$1);
var source_idx_10200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8660_10199,(0),null);
var vec__8663_10201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8660_10199,(1),null);
var __10202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8663_10201,(0),null);
var lines_10203__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8663_10201,(1),null);
var seq__8668_10206 = cljs.core.seq(lines_10203__$1);
var chunk__8669_10207 = null;
var count__8670_10208 = (0);
var i__8671_10209 = (0);
while(true){
if((i__8671_10209 < count__8670_10208)){
var vec__8735_10213 = chunk__8669_10207.cljs$core$IIndexed$_nth$arity$2(null,i__8671_10209);
var line_10214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8735_10213,(0),null);
var cols_10215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8735_10213,(1),null);
var seq__8739_10220 = cljs.core.seq(cols_10215);
var chunk__8740_10221 = null;
var count__8741_10222 = (0);
var i__8742_10223 = (0);
while(true){
if((i__8742_10223 < count__8741_10222)){
var vec__8758_10224 = chunk__8740_10221.cljs$core$IIndexed$_nth$arity$2(null,i__8742_10223);
var col_10225 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8758_10224,(0),null);
var infos_10226 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8758_10224,(1),null);
encode_cols(infos_10226,source_idx_10200,line_10214,col_10225);


var G__10227 = seq__8739_10220;
var G__10228 = chunk__8740_10221;
var G__10229 = count__8741_10222;
var G__10230 = (i__8742_10223 + (1));
seq__8739_10220 = G__10227;
chunk__8740_10221 = G__10228;
count__8741_10222 = G__10229;
i__8742_10223 = G__10230;
continue;
} else {
var temp__5735__auto___10231__$1 = cljs.core.seq(seq__8739_10220);
if(temp__5735__auto___10231__$1){
var seq__8739_10233__$1 = temp__5735__auto___10231__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8739_10233__$1)){
var c__4556__auto___10235 = cljs.core.chunk_first(seq__8739_10233__$1);
var G__10237 = cljs.core.chunk_rest(seq__8739_10233__$1);
var G__10238 = c__4556__auto___10235;
var G__10239 = cljs.core.count(c__4556__auto___10235);
var G__10240 = (0);
seq__8739_10220 = G__10237;
chunk__8740_10221 = G__10238;
count__8741_10222 = G__10239;
i__8742_10223 = G__10240;
continue;
} else {
var vec__8762_10241 = cljs.core.first(seq__8739_10233__$1);
var col_10242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8762_10241,(0),null);
var infos_10243 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8762_10241,(1),null);
encode_cols(infos_10243,source_idx_10200,line_10214,col_10242);


var G__10245 = cljs.core.next(seq__8739_10233__$1);
var G__10246 = null;
var G__10247 = (0);
var G__10248 = (0);
seq__8739_10220 = G__10245;
chunk__8740_10221 = G__10246;
count__8741_10222 = G__10247;
i__8742_10223 = G__10248;
continue;
}
} else {
}
}
break;
}


var G__10251 = seq__8668_10206;
var G__10252 = chunk__8669_10207;
var G__10253 = count__8670_10208;
var G__10254 = (i__8671_10209 + (1));
seq__8668_10206 = G__10251;
chunk__8669_10207 = G__10252;
count__8670_10208 = G__10253;
i__8671_10209 = G__10254;
continue;
} else {
var temp__5735__auto___10256__$1 = cljs.core.seq(seq__8668_10206);
if(temp__5735__auto___10256__$1){
var seq__8668_10259__$1 = temp__5735__auto___10256__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8668_10259__$1)){
var c__4556__auto___10261 = cljs.core.chunk_first(seq__8668_10259__$1);
var G__10262 = cljs.core.chunk_rest(seq__8668_10259__$1);
var G__10263 = c__4556__auto___10261;
var G__10264 = cljs.core.count(c__4556__auto___10261);
var G__10265 = (0);
seq__8668_10206 = G__10262;
chunk__8669_10207 = G__10263;
count__8670_10208 = G__10264;
i__8671_10209 = G__10265;
continue;
} else {
var vec__8772_10266 = cljs.core.first(seq__8668_10259__$1);
var line_10267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8772_10266,(0),null);
var cols_10268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8772_10266,(1),null);
var seq__8775_10269 = cljs.core.seq(cols_10268);
var chunk__8776_10270 = null;
var count__8777_10271 = (0);
var i__8778_10272 = (0);
while(true){
if((i__8778_10272 < count__8777_10271)){
var vec__8793_10273 = chunk__8776_10270.cljs$core$IIndexed$_nth$arity$2(null,i__8778_10272);
var col_10274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8793_10273,(0),null);
var infos_10275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8793_10273,(1),null);
encode_cols(infos_10275,source_idx_10200,line_10267,col_10274);


var G__10278 = seq__8775_10269;
var G__10279 = chunk__8776_10270;
var G__10280 = count__8777_10271;
var G__10281 = (i__8778_10272 + (1));
seq__8775_10269 = G__10278;
chunk__8776_10270 = G__10279;
count__8777_10271 = G__10280;
i__8778_10272 = G__10281;
continue;
} else {
var temp__5735__auto___10284__$2 = cljs.core.seq(seq__8775_10269);
if(temp__5735__auto___10284__$2){
var seq__8775_10285__$1 = temp__5735__auto___10284__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8775_10285__$1)){
var c__4556__auto___10287 = cljs.core.chunk_first(seq__8775_10285__$1);
var G__10288 = cljs.core.chunk_rest(seq__8775_10285__$1);
var G__10289 = c__4556__auto___10287;
var G__10290 = cljs.core.count(c__4556__auto___10287);
var G__10291 = (0);
seq__8775_10269 = G__10288;
chunk__8776_10270 = G__10289;
count__8777_10271 = G__10290;
i__8778_10272 = G__10291;
continue;
} else {
var vec__8797_10292 = cljs.core.first(seq__8775_10285__$1);
var col_10293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8797_10292,(0),null);
var infos_10294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8797_10292,(1),null);
encode_cols(infos_10294,source_idx_10200,line_10267,col_10293);


var G__10296 = cljs.core.next(seq__8775_10285__$1);
var G__10297 = null;
var G__10298 = (0);
var G__10299 = (0);
seq__8775_10269 = G__10296;
chunk__8776_10270 = G__10297;
count__8777_10271 = G__10298;
i__8778_10272 = G__10299;
continue;
}
} else {
}
}
break;
}


var G__10301 = cljs.core.next(seq__8668_10259__$1);
var G__10302 = null;
var G__10303 = (0);
var G__10304 = (0);
seq__8668_10206 = G__10301;
chunk__8669_10207 = G__10302;
count__8670_10208 = G__10303;
i__8671_10209 = G__10304;
continue;
}
} else {
}
}
break;
}


var G__10307 = cljs.core.next(seq__8194_10191__$1);
var G__10308 = null;
var G__10309 = (0);
var G__10310 = (0);
seq__8194_10071 = G__10307;
chunk__8195_10072 = G__10308;
count__8196_10073 = G__10309;
i__8197_10074 = G__10310;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8802 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__8149_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__8149_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__8151_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__8151_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8158_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__8158_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__8819 = G__8802;
goog.object.set(G__8819,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__8819;
} else {
return G__8802;
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
var vec__8828 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8828,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8828,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__8831 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8831,(1),null);
var G__10316 = cljs.core.next(col_map_seq);
var G__10317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8831,col,infos,vec__8828,line,col_map){
return (function (v,p__8835){
var map__8836 = p__8835;
var map__8836__$1 = (((((!((map__8836 == null))))?(((((map__8836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8836):map__8836);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8836__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8831,col,infos,vec__8828,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__10316;
new_cols = G__10317;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10322 = cljs.core.next(line_map_seq);
var G__10323 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__10322;
new_lines = G__10323;
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
var seq__8843_10327 = cljs.core.seq(reverse_map);
var chunk__8844_10328 = null;
var count__8845_10329 = (0);
var i__8846_10330 = (0);
while(true){
if((i__8846_10330 < count__8845_10329)){
var vec__9396_10341 = chunk__8844_10328.cljs$core$IIndexed$_nth$arity$2(null,i__8846_10330);
var line_10342 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9396_10341,(0),null);
var columns_10343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9396_10341,(1),null);
var seq__9399_10361 = cljs.core.seq(columns_10343);
var chunk__9400_10362 = null;
var count__9401_10363 = (0);
var i__9402_10364 = (0);
while(true){
if((i__9402_10364 < count__9401_10363)){
var vec__9512_10370 = chunk__9400_10362.cljs$core$IIndexed$_nth$arity$2(null,i__9402_10364);
var column_10371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9512_10370,(0),null);
var column_info_10372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9512_10370,(1),null);
var seq__9515_10376 = cljs.core.seq(column_info_10372);
var chunk__9516_10377 = null;
var count__9517_10378 = (0);
var i__9518_10379 = (0);
while(true){
if((i__9518_10379 < count__9517_10378)){
var map__9552_10384 = chunk__9516_10377.cljs$core$IIndexed$_nth$arity$2(null,i__9518_10379);
var map__9552_10385__$1 = (((((!((map__9552_10384 == null))))?(((((map__9552_10384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9552_10384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9552_10384):map__9552_10384);
var gline_10386 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9552_10385__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10387 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9552_10385__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10388 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9552_10385__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10386], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9515_10376,chunk__9516_10377,count__9517_10378,i__9518_10379,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9552_10384,map__9552_10385__$1,gline_10386,gcol_10387,name_10388,vec__9512_10370,column_10371,column_info_10372,vec__9396_10341,line_10342,columns_10343,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10387], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10342,new cljs.core.Keyword(null,"col","col",-1959363084),column_10371,new cljs.core.Keyword(null,"name","name",1843675177),name_10388], null));
});})(seq__9515_10376,chunk__9516_10377,count__9517_10378,i__9518_10379,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9552_10384,map__9552_10385__$1,gline_10386,gcol_10387,name_10388,vec__9512_10370,column_10371,column_info_10372,vec__9396_10341,line_10342,columns_10343,inverted))
,cljs.core.sorted_map()));


var G__10396 = seq__9515_10376;
var G__10397 = chunk__9516_10377;
var G__10398 = count__9517_10378;
var G__10399 = (i__9518_10379 + (1));
seq__9515_10376 = G__10396;
chunk__9516_10377 = G__10397;
count__9517_10378 = G__10398;
i__9518_10379 = G__10399;
continue;
} else {
var temp__5735__auto___10404 = cljs.core.seq(seq__9515_10376);
if(temp__5735__auto___10404){
var seq__9515_10406__$1 = temp__5735__auto___10404;
if(cljs.core.chunked_seq_QMARK_(seq__9515_10406__$1)){
var c__4556__auto___10408 = cljs.core.chunk_first(seq__9515_10406__$1);
var G__10409 = cljs.core.chunk_rest(seq__9515_10406__$1);
var G__10410 = c__4556__auto___10408;
var G__10411 = cljs.core.count(c__4556__auto___10408);
var G__10412 = (0);
seq__9515_10376 = G__10409;
chunk__9516_10377 = G__10410;
count__9517_10378 = G__10411;
i__9518_10379 = G__10412;
continue;
} else {
var map__9599_10413 = cljs.core.first(seq__9515_10406__$1);
var map__9599_10414__$1 = (((((!((map__9599_10413 == null))))?(((((map__9599_10413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9599_10413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9599_10413):map__9599_10413);
var gline_10415 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9599_10414__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10416 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9599_10414__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10417 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9599_10414__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10415], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9515_10376,chunk__9516_10377,count__9517_10378,i__9518_10379,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9599_10413,map__9599_10414__$1,gline_10415,gcol_10416,name_10417,seq__9515_10406__$1,temp__5735__auto___10404,vec__9512_10370,column_10371,column_info_10372,vec__9396_10341,line_10342,columns_10343,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10416], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10342,new cljs.core.Keyword(null,"col","col",-1959363084),column_10371,new cljs.core.Keyword(null,"name","name",1843675177),name_10417], null));
});})(seq__9515_10376,chunk__9516_10377,count__9517_10378,i__9518_10379,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9599_10413,map__9599_10414__$1,gline_10415,gcol_10416,name_10417,seq__9515_10406__$1,temp__5735__auto___10404,vec__9512_10370,column_10371,column_info_10372,vec__9396_10341,line_10342,columns_10343,inverted))
,cljs.core.sorted_map()));


var G__10421 = cljs.core.next(seq__9515_10406__$1);
var G__10422 = null;
var G__10423 = (0);
var G__10424 = (0);
seq__9515_10376 = G__10421;
chunk__9516_10377 = G__10422;
count__9517_10378 = G__10423;
i__9518_10379 = G__10424;
continue;
}
} else {
}
}
break;
}


var G__10428 = seq__9399_10361;
var G__10429 = chunk__9400_10362;
var G__10430 = count__9401_10363;
var G__10431 = (i__9402_10364 + (1));
seq__9399_10361 = G__10428;
chunk__9400_10362 = G__10429;
count__9401_10363 = G__10430;
i__9402_10364 = G__10431;
continue;
} else {
var temp__5735__auto___10432 = cljs.core.seq(seq__9399_10361);
if(temp__5735__auto___10432){
var seq__9399_10433__$1 = temp__5735__auto___10432;
if(cljs.core.chunked_seq_QMARK_(seq__9399_10433__$1)){
var c__4556__auto___10434 = cljs.core.chunk_first(seq__9399_10433__$1);
var G__10437 = cljs.core.chunk_rest(seq__9399_10433__$1);
var G__10438 = c__4556__auto___10434;
var G__10439 = cljs.core.count(c__4556__auto___10434);
var G__10440 = (0);
seq__9399_10361 = G__10437;
chunk__9400_10362 = G__10438;
count__9401_10363 = G__10439;
i__9402_10364 = G__10440;
continue;
} else {
var vec__9619_10441 = cljs.core.first(seq__9399_10433__$1);
var column_10442 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619_10441,(0),null);
var column_info_10443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9619_10441,(1),null);
var seq__9625_10447 = cljs.core.seq(column_info_10443);
var chunk__9626_10448 = null;
var count__9627_10449 = (0);
var i__9628_10450 = (0);
while(true){
if((i__9628_10450 < count__9627_10449)){
var map__9654_10454 = chunk__9626_10448.cljs$core$IIndexed$_nth$arity$2(null,i__9628_10450);
var map__9654_10455__$1 = (((((!((map__9654_10454 == null))))?(((((map__9654_10454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9654_10454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9654_10454):map__9654_10454);
var gline_10456 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654_10455__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10457 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654_10455__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10458 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654_10455__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10456], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9625_10447,chunk__9626_10448,count__9627_10449,i__9628_10450,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9654_10454,map__9654_10455__$1,gline_10456,gcol_10457,name_10458,vec__9619_10441,column_10442,column_info_10443,seq__9399_10433__$1,temp__5735__auto___10432,vec__9396_10341,line_10342,columns_10343,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10457], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10342,new cljs.core.Keyword(null,"col","col",-1959363084),column_10442,new cljs.core.Keyword(null,"name","name",1843675177),name_10458], null));
});})(seq__9625_10447,chunk__9626_10448,count__9627_10449,i__9628_10450,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9654_10454,map__9654_10455__$1,gline_10456,gcol_10457,name_10458,vec__9619_10441,column_10442,column_info_10443,seq__9399_10433__$1,temp__5735__auto___10432,vec__9396_10341,line_10342,columns_10343,inverted))
,cljs.core.sorted_map()));


var G__10465 = seq__9625_10447;
var G__10466 = chunk__9626_10448;
var G__10467 = count__9627_10449;
var G__10468 = (i__9628_10450 + (1));
seq__9625_10447 = G__10465;
chunk__9626_10448 = G__10466;
count__9627_10449 = G__10467;
i__9628_10450 = G__10468;
continue;
} else {
var temp__5735__auto___10469__$1 = cljs.core.seq(seq__9625_10447);
if(temp__5735__auto___10469__$1){
var seq__9625_10470__$1 = temp__5735__auto___10469__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9625_10470__$1)){
var c__4556__auto___10471 = cljs.core.chunk_first(seq__9625_10470__$1);
var G__10473 = cljs.core.chunk_rest(seq__9625_10470__$1);
var G__10474 = c__4556__auto___10471;
var G__10475 = cljs.core.count(c__4556__auto___10471);
var G__10476 = (0);
seq__9625_10447 = G__10473;
chunk__9626_10448 = G__10474;
count__9627_10449 = G__10475;
i__9628_10450 = G__10476;
continue;
} else {
var map__9663_10483 = cljs.core.first(seq__9625_10470__$1);
var map__9663_10484__$1 = (((((!((map__9663_10483 == null))))?(((((map__9663_10483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9663_10483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9663_10483):map__9663_10483);
var gline_10485 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9663_10484__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10486 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9663_10484__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9663_10484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10485], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9625_10447,chunk__9626_10448,count__9627_10449,i__9628_10450,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9663_10483,map__9663_10484__$1,gline_10485,gcol_10486,name_10487,seq__9625_10470__$1,temp__5735__auto___10469__$1,vec__9619_10441,column_10442,column_info_10443,seq__9399_10433__$1,temp__5735__auto___10432,vec__9396_10341,line_10342,columns_10343,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10486], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10342,new cljs.core.Keyword(null,"col","col",-1959363084),column_10442,new cljs.core.Keyword(null,"name","name",1843675177),name_10487], null));
});})(seq__9625_10447,chunk__9626_10448,count__9627_10449,i__9628_10450,seq__9399_10361,chunk__9400_10362,count__9401_10363,i__9402_10364,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9663_10483,map__9663_10484__$1,gline_10485,gcol_10486,name_10487,seq__9625_10470__$1,temp__5735__auto___10469__$1,vec__9619_10441,column_10442,column_info_10443,seq__9399_10433__$1,temp__5735__auto___10432,vec__9396_10341,line_10342,columns_10343,inverted))
,cljs.core.sorted_map()));


var G__10495 = cljs.core.next(seq__9625_10470__$1);
var G__10496 = null;
var G__10497 = (0);
var G__10498 = (0);
seq__9625_10447 = G__10495;
chunk__9626_10448 = G__10496;
count__9627_10449 = G__10497;
i__9628_10450 = G__10498;
continue;
}
} else {
}
}
break;
}


var G__10499 = cljs.core.next(seq__9399_10433__$1);
var G__10500 = null;
var G__10501 = (0);
var G__10502 = (0);
seq__9399_10361 = G__10499;
chunk__9400_10362 = G__10500;
count__9401_10363 = G__10501;
i__9402_10364 = G__10502;
continue;
}
} else {
}
}
break;
}


var G__10504 = seq__8843_10327;
var G__10505 = chunk__8844_10328;
var G__10506 = count__8845_10329;
var G__10507 = (i__8846_10330 + (1));
seq__8843_10327 = G__10504;
chunk__8844_10328 = G__10505;
count__8845_10329 = G__10506;
i__8846_10330 = G__10507;
continue;
} else {
var temp__5735__auto___10508 = cljs.core.seq(seq__8843_10327);
if(temp__5735__auto___10508){
var seq__8843_10529__$1 = temp__5735__auto___10508;
if(cljs.core.chunked_seq_QMARK_(seq__8843_10529__$1)){
var c__4556__auto___10531 = cljs.core.chunk_first(seq__8843_10529__$1);
var G__10532 = cljs.core.chunk_rest(seq__8843_10529__$1);
var G__10533 = c__4556__auto___10531;
var G__10534 = cljs.core.count(c__4556__auto___10531);
var G__10535 = (0);
seq__8843_10327 = G__10532;
chunk__8844_10328 = G__10533;
count__8845_10329 = G__10534;
i__8846_10330 = G__10535;
continue;
} else {
var vec__9684_10537 = cljs.core.first(seq__8843_10529__$1);
var line_10538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684_10537,(0),null);
var columns_10539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9684_10537,(1),null);
var seq__9687_10540 = cljs.core.seq(columns_10539);
var chunk__9688_10541 = null;
var count__9689_10542 = (0);
var i__9690_10543 = (0);
while(true){
if((i__9690_10543 < count__9689_10542)){
var vec__9821_10544 = chunk__9688_10541.cljs$core$IIndexed$_nth$arity$2(null,i__9690_10543);
var column_10545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9821_10544,(0),null);
var column_info_10546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9821_10544,(1),null);
var seq__9826_10549 = cljs.core.seq(column_info_10546);
var chunk__9827_10550 = null;
var count__9828_10551 = (0);
var i__9829_10552 = (0);
while(true){
if((i__9829_10552 < count__9828_10551)){
var map__9847_10557 = chunk__9827_10550.cljs$core$IIndexed$_nth$arity$2(null,i__9829_10552);
var map__9847_10558__$1 = (((((!((map__9847_10557 == null))))?(((((map__9847_10557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9847_10557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9847_10557):map__9847_10557);
var gline_10559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9847_10558__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9847_10558__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9847_10558__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10559], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9826_10549,chunk__9827_10550,count__9828_10551,i__9829_10552,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9847_10557,map__9847_10558__$1,gline_10559,gcol_10560,name_10561,vec__9821_10544,column_10545,column_info_10546,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10560], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10538,new cljs.core.Keyword(null,"col","col",-1959363084),column_10545,new cljs.core.Keyword(null,"name","name",1843675177),name_10561], null));
});})(seq__9826_10549,chunk__9827_10550,count__9828_10551,i__9829_10552,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9847_10557,map__9847_10558__$1,gline_10559,gcol_10560,name_10561,vec__9821_10544,column_10545,column_info_10546,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted))
,cljs.core.sorted_map()));


var G__10573 = seq__9826_10549;
var G__10574 = chunk__9827_10550;
var G__10575 = count__9828_10551;
var G__10576 = (i__9829_10552 + (1));
seq__9826_10549 = G__10573;
chunk__9827_10550 = G__10574;
count__9828_10551 = G__10575;
i__9829_10552 = G__10576;
continue;
} else {
var temp__5735__auto___10577__$1 = cljs.core.seq(seq__9826_10549);
if(temp__5735__auto___10577__$1){
var seq__9826_10578__$1 = temp__5735__auto___10577__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9826_10578__$1)){
var c__4556__auto___10579 = cljs.core.chunk_first(seq__9826_10578__$1);
var G__10580 = cljs.core.chunk_rest(seq__9826_10578__$1);
var G__10581 = c__4556__auto___10579;
var G__10582 = cljs.core.count(c__4556__auto___10579);
var G__10583 = (0);
seq__9826_10549 = G__10580;
chunk__9827_10550 = G__10581;
count__9828_10551 = G__10582;
i__9829_10552 = G__10583;
continue;
} else {
var map__9862_10584 = cljs.core.first(seq__9826_10578__$1);
var map__9862_10585__$1 = (((((!((map__9862_10584 == null))))?(((((map__9862_10584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9862_10584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9862_10584):map__9862_10584);
var gline_10586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9862_10585__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9862_10585__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9862_10585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10586], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9826_10549,chunk__9827_10550,count__9828_10551,i__9829_10552,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9862_10584,map__9862_10585__$1,gline_10586,gcol_10587,name_10588,seq__9826_10578__$1,temp__5735__auto___10577__$1,vec__9821_10544,column_10545,column_info_10546,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10587], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10538,new cljs.core.Keyword(null,"col","col",-1959363084),column_10545,new cljs.core.Keyword(null,"name","name",1843675177),name_10588], null));
});})(seq__9826_10549,chunk__9827_10550,count__9828_10551,i__9829_10552,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9862_10584,map__9862_10585__$1,gline_10586,gcol_10587,name_10588,seq__9826_10578__$1,temp__5735__auto___10577__$1,vec__9821_10544,column_10545,column_info_10546,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted))
,cljs.core.sorted_map()));


var G__10601 = cljs.core.next(seq__9826_10578__$1);
var G__10602 = null;
var G__10603 = (0);
var G__10604 = (0);
seq__9826_10549 = G__10601;
chunk__9827_10550 = G__10602;
count__9828_10551 = G__10603;
i__9829_10552 = G__10604;
continue;
}
} else {
}
}
break;
}


var G__10605 = seq__9687_10540;
var G__10606 = chunk__9688_10541;
var G__10607 = count__9689_10542;
var G__10608 = (i__9690_10543 + (1));
seq__9687_10540 = G__10605;
chunk__9688_10541 = G__10606;
count__9689_10542 = G__10607;
i__9690_10543 = G__10608;
continue;
} else {
var temp__5735__auto___10609__$1 = cljs.core.seq(seq__9687_10540);
if(temp__5735__auto___10609__$1){
var seq__9687_10611__$1 = temp__5735__auto___10609__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9687_10611__$1)){
var c__4556__auto___10612 = cljs.core.chunk_first(seq__9687_10611__$1);
var G__10615 = cljs.core.chunk_rest(seq__9687_10611__$1);
var G__10616 = c__4556__auto___10612;
var G__10617 = cljs.core.count(c__4556__auto___10612);
var G__10618 = (0);
seq__9687_10540 = G__10615;
chunk__9688_10541 = G__10616;
count__9689_10542 = G__10617;
i__9690_10543 = G__10618;
continue;
} else {
var vec__9871_10619 = cljs.core.first(seq__9687_10611__$1);
var column_10620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9871_10619,(0),null);
var column_info_10621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9871_10619,(1),null);
var seq__9874_10624 = cljs.core.seq(column_info_10621);
var chunk__9875_10625 = null;
var count__9876_10626 = (0);
var i__9877_10627 = (0);
while(true){
if((i__9877_10627 < count__9876_10626)){
var map__9905_10634 = chunk__9875_10625.cljs$core$IIndexed$_nth$arity$2(null,i__9877_10627);
var map__9905_10635__$1 = (((((!((map__9905_10634 == null))))?(((((map__9905_10634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9905_10634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9905_10634):map__9905_10634);
var gline_10636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9905_10635__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9905_10635__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9905_10635__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10636], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9874_10624,chunk__9875_10625,count__9876_10626,i__9877_10627,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9905_10634,map__9905_10635__$1,gline_10636,gcol_10637,name_10638,vec__9871_10619,column_10620,column_info_10621,seq__9687_10611__$1,temp__5735__auto___10609__$1,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10637], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10538,new cljs.core.Keyword(null,"col","col",-1959363084),column_10620,new cljs.core.Keyword(null,"name","name",1843675177),name_10638], null));
});})(seq__9874_10624,chunk__9875_10625,count__9876_10626,i__9877_10627,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9905_10634,map__9905_10635__$1,gline_10636,gcol_10637,name_10638,vec__9871_10619,column_10620,column_info_10621,seq__9687_10611__$1,temp__5735__auto___10609__$1,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted))
,cljs.core.sorted_map()));


var G__10662 = seq__9874_10624;
var G__10663 = chunk__9875_10625;
var G__10664 = count__9876_10626;
var G__10665 = (i__9877_10627 + (1));
seq__9874_10624 = G__10662;
chunk__9875_10625 = G__10663;
count__9876_10626 = G__10664;
i__9877_10627 = G__10665;
continue;
} else {
var temp__5735__auto___10666__$2 = cljs.core.seq(seq__9874_10624);
if(temp__5735__auto___10666__$2){
var seq__9874_10667__$1 = temp__5735__auto___10666__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9874_10667__$1)){
var c__4556__auto___10668 = cljs.core.chunk_first(seq__9874_10667__$1);
var G__10669 = cljs.core.chunk_rest(seq__9874_10667__$1);
var G__10670 = c__4556__auto___10668;
var G__10671 = cljs.core.count(c__4556__auto___10668);
var G__10672 = (0);
seq__9874_10624 = G__10669;
chunk__9875_10625 = G__10670;
count__9876_10626 = G__10671;
i__9877_10627 = G__10672;
continue;
} else {
var map__9922_10674 = cljs.core.first(seq__9874_10667__$1);
var map__9922_10675__$1 = (((((!((map__9922_10674 == null))))?(((((map__9922_10674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9922_10674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9922_10674):map__9922_10674);
var gline_10676 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922_10675__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922_10675__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9922_10675__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10676], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9874_10624,chunk__9875_10625,count__9876_10626,i__9877_10627,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9922_10674,map__9922_10675__$1,gline_10676,gcol_10677,name_10678,seq__9874_10667__$1,temp__5735__auto___10666__$2,vec__9871_10619,column_10620,column_info_10621,seq__9687_10611__$1,temp__5735__auto___10609__$1,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10677], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10538,new cljs.core.Keyword(null,"col","col",-1959363084),column_10620,new cljs.core.Keyword(null,"name","name",1843675177),name_10678], null));
});})(seq__9874_10624,chunk__9875_10625,count__9876_10626,i__9877_10627,seq__9687_10540,chunk__9688_10541,count__9689_10542,i__9690_10543,seq__8843_10327,chunk__8844_10328,count__8845_10329,i__8846_10330,map__9922_10674,map__9922_10675__$1,gline_10676,gcol_10677,name_10678,seq__9874_10667__$1,temp__5735__auto___10666__$2,vec__9871_10619,column_10620,column_info_10621,seq__9687_10611__$1,temp__5735__auto___10609__$1,vec__9684_10537,line_10538,columns_10539,seq__8843_10529__$1,temp__5735__auto___10508,inverted))
,cljs.core.sorted_map()));


var G__10684 = cljs.core.next(seq__9874_10667__$1);
var G__10685 = null;
var G__10686 = (0);
var G__10687 = (0);
seq__9874_10624 = G__10684;
chunk__9875_10625 = G__10685;
count__9876_10626 = G__10686;
i__9877_10627 = G__10687;
continue;
}
} else {
}
}
break;
}


var G__10691 = cljs.core.next(seq__9687_10611__$1);
var G__10692 = null;
var G__10693 = (0);
var G__10694 = (0);
seq__9687_10540 = G__10691;
chunk__9688_10541 = G__10692;
count__9689_10542 = G__10693;
i__9690_10543 = G__10694;
continue;
}
} else {
}
}
break;
}


var G__10697 = cljs.core.next(seq__8843_10529__$1);
var G__10698 = null;
var G__10699 = (0);
var G__10700 = (0);
seq__8843_10327 = G__10697;
chunk__8844_10328 = G__10698;
count__8845_10329 = G__10699;
i__8846_10330 = G__10700;
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
