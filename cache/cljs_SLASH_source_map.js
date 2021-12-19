goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__7647){
var vec__7648 = p__7647;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7648,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7648,(1),null);
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
var vec__7653 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7653,(4),null);
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
var vec__7659 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7659,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7659,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7659,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7659,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7659,(4),null);
var vec__7662 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7662,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7662,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7662,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7662,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7662,(4),null);
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
var map__7669 = segmap;
var map__7669__$1 = (((((!((map__7669 == null))))?(((((map__7669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7669):map__7669);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7669__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7669__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7669__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7669__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7669__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__7683 = arguments.length;
switch (G__7683) {
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
var vec__7695 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9549 = cljs.core.next(segs__$1);
var G__9551 = nrelseg;
var G__9552 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9549;
relseg__$1 = G__9551;
result__$1 = G__9552;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7695,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7695,(1),null);
var G__9554 = (gline + (1));
var G__9555 = cljs.core.next(lines__$1);
var G__9556 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9557 = result__$1;
gline = G__9554;
lines__$1 = G__9555;
relseg = G__9556;
result = G__9557;
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
var map__7704 = segmap;
var map__7704__$1 = (((((!((map__7704 == null))))?(((((map__7704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7704.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7704):map__7704);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7704__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7704__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7704__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7704__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7704__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__7702_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__7702_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__7716 = arguments.length;
switch (G__7716) {
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
var vec__7729 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9588 = cljs.core.next(segs__$1);
var G__9589 = nrelseg;
var G__9590 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9588;
relseg__$1 = G__9589;
result__$1 = G__9590;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7729,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7729,(1),null);
var G__9593 = (gline + (1));
var G__9594 = cljs.core.next(lines__$1);
var G__9595 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9596 = result__$1;
gline = G__9593;
lines__$1 = G__9594;
relseg = G__9595;
result = G__9596;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__7751){
var vec__7752 = p__7751;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7752,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7752,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7752,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7752,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7752,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__7762){
var vec__7763 = p__7762;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7763,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7763,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7763,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7763,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7763,(4),null);
var seg = vec__7763;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__7766){
var vec__7771 = p__7766;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7771,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7771,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7771,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7771,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7771,(4),null);
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
var seq__7787 = cljs.core.seq(infos);
var chunk__7788 = null;
var count__7789 = (0);
var i__7790 = (0);
while(true){
if((i__7790 < count__7789)){
var info = chunk__7788.cljs$core$IIndexed$_nth$arity$2(null,i__7790);
var segv_9656 = info__GT_segv(info,source_idx,line,col);
var gline_9657 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9658 = cljs.core.count(cljs.core.deref(lines));
if((gline_9657 > (lc_9658 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7787,chunk__7788,count__7789,i__7790,segv_9656,gline_9657,lc_9658,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9657 - (lc_9658 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9656], null));
});})(seq__7787,chunk__7788,count__7789,i__7790,segv_9656,gline_9657,lc_9658,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7787,chunk__7788,count__7789,i__7790,segv_9656,gline_9657,lc_9658,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9657], null),cljs.core.conj,segv_9656);
});})(seq__7787,chunk__7788,count__7789,i__7790,segv_9656,gline_9657,lc_9658,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9670 = seq__7787;
var G__9671 = chunk__7788;
var G__9672 = count__7789;
var G__9673 = (i__7790 + (1));
seq__7787 = G__9670;
chunk__7788 = G__9671;
count__7789 = G__9672;
i__7790 = G__9673;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7787);
if(temp__5735__auto__){
var seq__7787__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7787__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__7787__$1);
var G__9674 = cljs.core.chunk_rest(seq__7787__$1);
var G__9675 = c__4556__auto__;
var G__9676 = cljs.core.count(c__4556__auto__);
var G__9677 = (0);
seq__7787 = G__9674;
chunk__7788 = G__9675;
count__7789 = G__9676;
i__7790 = G__9677;
continue;
} else {
var info = cljs.core.first(seq__7787__$1);
var segv_9686 = info__GT_segv(info,source_idx,line,col);
var gline_9687 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9688 = cljs.core.count(cljs.core.deref(lines));
if((gline_9687 > (lc_9688 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7787,chunk__7788,count__7789,i__7790,segv_9686,gline_9687,lc_9688,info,seq__7787__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9687 - (lc_9688 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9686], null));
});})(seq__7787,chunk__7788,count__7789,i__7790,segv_9686,gline_9687,lc_9688,info,seq__7787__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7787,chunk__7788,count__7789,i__7790,segv_9686,gline_9687,lc_9688,info,seq__7787__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9687], null),cljs.core.conj,segv_9686);
});})(seq__7787,chunk__7788,count__7789,i__7790,segv_9686,gline_9687,lc_9688,info,seq__7787__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9707 = cljs.core.next(seq__7787__$1);
var G__9708 = null;
var G__9709 = (0);
var G__9710 = (0);
seq__7787 = G__9707;
chunk__7788 = G__9708;
count__7789 = G__9709;
i__7790 = G__9710;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__7815_9711 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__7816_9712 = null;
var count__7817_9713 = (0);
var i__7818_9714 = (0);
while(true){
if((i__7818_9714 < count__7817_9713)){
var vec__8215_9722 = chunk__7816_9712.cljs$core$IIndexed$_nth$arity$2(null,i__7818_9714);
var source_idx_9723 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8215_9722,(0),null);
var vec__8218_9724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8215_9722,(1),null);
var __9725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8218_9724,(0),null);
var lines_9726__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8218_9724,(1),null);
var seq__8225_9728 = cljs.core.seq(lines_9726__$1);
var chunk__8226_9729 = null;
var count__8227_9730 = (0);
var i__8228_9731 = (0);
while(true){
if((i__8228_9731 < count__8227_9730)){
var vec__8301_9733 = chunk__8226_9729.cljs$core$IIndexed$_nth$arity$2(null,i__8228_9731);
var line_9734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8301_9733,(0),null);
var cols_9735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8301_9733,(1),null);
var seq__8305_9736 = cljs.core.seq(cols_9735);
var chunk__8306_9737 = null;
var count__8307_9738 = (0);
var i__8308_9739 = (0);
while(true){
if((i__8308_9739 < count__8307_9738)){
var vec__8328_9740 = chunk__8306_9737.cljs$core$IIndexed$_nth$arity$2(null,i__8308_9739);
var col_9741 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8328_9740,(0),null);
var infos_9742 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8328_9740,(1),null);
encode_cols(infos_9742,source_idx_9723,line_9734,col_9741);


var G__9747 = seq__8305_9736;
var G__9748 = chunk__8306_9737;
var G__9749 = count__8307_9738;
var G__9750 = (i__8308_9739 + (1));
seq__8305_9736 = G__9747;
chunk__8306_9737 = G__9748;
count__8307_9738 = G__9749;
i__8308_9739 = G__9750;
continue;
} else {
var temp__5735__auto___9751 = cljs.core.seq(seq__8305_9736);
if(temp__5735__auto___9751){
var seq__8305_9753__$1 = temp__5735__auto___9751;
if(cljs.core.chunked_seq_QMARK_(seq__8305_9753__$1)){
var c__4556__auto___9754 = cljs.core.chunk_first(seq__8305_9753__$1);
var G__9757 = cljs.core.chunk_rest(seq__8305_9753__$1);
var G__9758 = c__4556__auto___9754;
var G__9759 = cljs.core.count(c__4556__auto___9754);
var G__9760 = (0);
seq__8305_9736 = G__9757;
chunk__8306_9737 = G__9758;
count__8307_9738 = G__9759;
i__8308_9739 = G__9760;
continue;
} else {
var vec__8337_9762 = cljs.core.first(seq__8305_9753__$1);
var col_9763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8337_9762,(0),null);
var infos_9764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8337_9762,(1),null);
encode_cols(infos_9764,source_idx_9723,line_9734,col_9763);


var G__9777 = cljs.core.next(seq__8305_9753__$1);
var G__9778 = null;
var G__9779 = (0);
var G__9780 = (0);
seq__8305_9736 = G__9777;
chunk__8306_9737 = G__9778;
count__8307_9738 = G__9779;
i__8308_9739 = G__9780;
continue;
}
} else {
}
}
break;
}


var G__9782 = seq__8225_9728;
var G__9783 = chunk__8226_9729;
var G__9784 = count__8227_9730;
var G__9785 = (i__8228_9731 + (1));
seq__8225_9728 = G__9782;
chunk__8226_9729 = G__9783;
count__8227_9730 = G__9784;
i__8228_9731 = G__9785;
continue;
} else {
var temp__5735__auto___9786 = cljs.core.seq(seq__8225_9728);
if(temp__5735__auto___9786){
var seq__8225_9788__$1 = temp__5735__auto___9786;
if(cljs.core.chunked_seq_QMARK_(seq__8225_9788__$1)){
var c__4556__auto___9791 = cljs.core.chunk_first(seq__8225_9788__$1);
var G__9793 = cljs.core.chunk_rest(seq__8225_9788__$1);
var G__9794 = c__4556__auto___9791;
var G__9795 = cljs.core.count(c__4556__auto___9791);
var G__9796 = (0);
seq__8225_9728 = G__9793;
chunk__8226_9729 = G__9794;
count__8227_9730 = G__9795;
i__8228_9731 = G__9796;
continue;
} else {
var vec__8350_9797 = cljs.core.first(seq__8225_9788__$1);
var line_9798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8350_9797,(0),null);
var cols_9799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8350_9797,(1),null);
var seq__8353_9800 = cljs.core.seq(cols_9799);
var chunk__8354_9801 = null;
var count__8355_9802 = (0);
var i__8356_9803 = (0);
while(true){
if((i__8356_9803 < count__8355_9802)){
var vec__8379_9804 = chunk__8354_9801.cljs$core$IIndexed$_nth$arity$2(null,i__8356_9803);
var col_9805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8379_9804,(0),null);
var infos_9806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8379_9804,(1),null);
encode_cols(infos_9806,source_idx_9723,line_9798,col_9805);


var G__9809 = seq__8353_9800;
var G__9810 = chunk__8354_9801;
var G__9811 = count__8355_9802;
var G__9812 = (i__8356_9803 + (1));
seq__8353_9800 = G__9809;
chunk__8354_9801 = G__9810;
count__8355_9802 = G__9811;
i__8356_9803 = G__9812;
continue;
} else {
var temp__5735__auto___9817__$1 = cljs.core.seq(seq__8353_9800);
if(temp__5735__auto___9817__$1){
var seq__8353_9818__$1 = temp__5735__auto___9817__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8353_9818__$1)){
var c__4556__auto___9819 = cljs.core.chunk_first(seq__8353_9818__$1);
var G__9822 = cljs.core.chunk_rest(seq__8353_9818__$1);
var G__9823 = c__4556__auto___9819;
var G__9824 = cljs.core.count(c__4556__auto___9819);
var G__9825 = (0);
seq__8353_9800 = G__9822;
chunk__8354_9801 = G__9823;
count__8355_9802 = G__9824;
i__8356_9803 = G__9825;
continue;
} else {
var vec__8388_9829 = cljs.core.first(seq__8353_9818__$1);
var col_9830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8388_9829,(0),null);
var infos_9831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8388_9829,(1),null);
encode_cols(infos_9831,source_idx_9723,line_9798,col_9830);


var G__9833 = cljs.core.next(seq__8353_9818__$1);
var G__9834 = null;
var G__9835 = (0);
var G__9836 = (0);
seq__8353_9800 = G__9833;
chunk__8354_9801 = G__9834;
count__8355_9802 = G__9835;
i__8356_9803 = G__9836;
continue;
}
} else {
}
}
break;
}


var G__9837 = cljs.core.next(seq__8225_9788__$1);
var G__9838 = null;
var G__9839 = (0);
var G__9840 = (0);
seq__8225_9728 = G__9837;
chunk__8226_9729 = G__9838;
count__8227_9730 = G__9839;
i__8228_9731 = G__9840;
continue;
}
} else {
}
}
break;
}


var G__9841 = seq__7815_9711;
var G__9842 = chunk__7816_9712;
var G__9843 = count__7817_9713;
var G__9844 = (i__7818_9714 + (1));
seq__7815_9711 = G__9841;
chunk__7816_9712 = G__9842;
count__7817_9713 = G__9843;
i__7818_9714 = G__9844;
continue;
} else {
var temp__5735__auto___9845 = cljs.core.seq(seq__7815_9711);
if(temp__5735__auto___9845){
var seq__7815_9847__$1 = temp__5735__auto___9845;
if(cljs.core.chunked_seq_QMARK_(seq__7815_9847__$1)){
var c__4556__auto___9849 = cljs.core.chunk_first(seq__7815_9847__$1);
var G__9850 = cljs.core.chunk_rest(seq__7815_9847__$1);
var G__9851 = c__4556__auto___9849;
var G__9852 = cljs.core.count(c__4556__auto___9849);
var G__9853 = (0);
seq__7815_9711 = G__9850;
chunk__7816_9712 = G__9851;
count__7817_9713 = G__9852;
i__7818_9714 = G__9853;
continue;
} else {
var vec__8403_9854 = cljs.core.first(seq__7815_9847__$1);
var source_idx_9855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403_9854,(0),null);
var vec__8406_9856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403_9854,(1),null);
var __9857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8406_9856,(0),null);
var lines_9858__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8406_9856,(1),null);
var seq__8411_9861 = cljs.core.seq(lines_9858__$1);
var chunk__8412_9862 = null;
var count__8413_9863 = (0);
var i__8414_9864 = (0);
while(true){
if((i__8414_9864 < count__8413_9863)){
var vec__8481_9865 = chunk__8412_9862.cljs$core$IIndexed$_nth$arity$2(null,i__8414_9864);
var line_9866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481_9865,(0),null);
var cols_9867 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8481_9865,(1),null);
var seq__8484_9868 = cljs.core.seq(cols_9867);
var chunk__8485_9869 = null;
var count__8486_9870 = (0);
var i__8487_9871 = (0);
while(true){
if((i__8487_9871 < count__8486_9870)){
var vec__8502_9876 = chunk__8485_9869.cljs$core$IIndexed$_nth$arity$2(null,i__8487_9871);
var col_9877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8502_9876,(0),null);
var infos_9878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8502_9876,(1),null);
encode_cols(infos_9878,source_idx_9855,line_9866,col_9877);


var G__9881 = seq__8484_9868;
var G__9882 = chunk__8485_9869;
var G__9883 = count__8486_9870;
var G__9884 = (i__8487_9871 + (1));
seq__8484_9868 = G__9881;
chunk__8485_9869 = G__9882;
count__8486_9870 = G__9883;
i__8487_9871 = G__9884;
continue;
} else {
var temp__5735__auto___9887__$1 = cljs.core.seq(seq__8484_9868);
if(temp__5735__auto___9887__$1){
var seq__8484_9888__$1 = temp__5735__auto___9887__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8484_9888__$1)){
var c__4556__auto___9889 = cljs.core.chunk_first(seq__8484_9888__$1);
var G__9891 = cljs.core.chunk_rest(seq__8484_9888__$1);
var G__9892 = c__4556__auto___9889;
var G__9893 = cljs.core.count(c__4556__auto___9889);
var G__9894 = (0);
seq__8484_9868 = G__9891;
chunk__8485_9869 = G__9892;
count__8486_9870 = G__9893;
i__8487_9871 = G__9894;
continue;
} else {
var vec__8507_9895 = cljs.core.first(seq__8484_9888__$1);
var col_9896 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8507_9895,(0),null);
var infos_9897 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8507_9895,(1),null);
encode_cols(infos_9897,source_idx_9855,line_9866,col_9896);


var G__9898 = cljs.core.next(seq__8484_9888__$1);
var G__9899 = null;
var G__9900 = (0);
var G__9901 = (0);
seq__8484_9868 = G__9898;
chunk__8485_9869 = G__9899;
count__8486_9870 = G__9900;
i__8487_9871 = G__9901;
continue;
}
} else {
}
}
break;
}


var G__9906 = seq__8411_9861;
var G__9907 = chunk__8412_9862;
var G__9908 = count__8413_9863;
var G__9909 = (i__8414_9864 + (1));
seq__8411_9861 = G__9906;
chunk__8412_9862 = G__9907;
count__8413_9863 = G__9908;
i__8414_9864 = G__9909;
continue;
} else {
var temp__5735__auto___9912__$1 = cljs.core.seq(seq__8411_9861);
if(temp__5735__auto___9912__$1){
var seq__8411_9913__$1 = temp__5735__auto___9912__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8411_9913__$1)){
var c__4556__auto___9914 = cljs.core.chunk_first(seq__8411_9913__$1);
var G__9915 = cljs.core.chunk_rest(seq__8411_9913__$1);
var G__9916 = c__4556__auto___9914;
var G__9917 = cljs.core.count(c__4556__auto___9914);
var G__9918 = (0);
seq__8411_9861 = G__9915;
chunk__8412_9862 = G__9916;
count__8413_9863 = G__9917;
i__8414_9864 = G__9918;
continue;
} else {
var vec__8518_9919 = cljs.core.first(seq__8411_9913__$1);
var line_9920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8518_9919,(0),null);
var cols_9921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8518_9919,(1),null);
var seq__8522_9922 = cljs.core.seq(cols_9921);
var chunk__8523_9923 = null;
var count__8524_9924 = (0);
var i__8525_9925 = (0);
while(true){
if((i__8525_9925 < count__8524_9924)){
var vec__8542_9927 = chunk__8523_9923.cljs$core$IIndexed$_nth$arity$2(null,i__8525_9925);
var col_9928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8542_9927,(0),null);
var infos_9929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8542_9927,(1),null);
encode_cols(infos_9929,source_idx_9855,line_9920,col_9928);


var G__9931 = seq__8522_9922;
var G__9932 = chunk__8523_9923;
var G__9933 = count__8524_9924;
var G__9934 = (i__8525_9925 + (1));
seq__8522_9922 = G__9931;
chunk__8523_9923 = G__9932;
count__8524_9924 = G__9933;
i__8525_9925 = G__9934;
continue;
} else {
var temp__5735__auto___9935__$2 = cljs.core.seq(seq__8522_9922);
if(temp__5735__auto___9935__$2){
var seq__8522_9936__$1 = temp__5735__auto___9935__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8522_9936__$1)){
var c__4556__auto___9943 = cljs.core.chunk_first(seq__8522_9936__$1);
var G__9945 = cljs.core.chunk_rest(seq__8522_9936__$1);
var G__9946 = c__4556__auto___9943;
var G__9947 = cljs.core.count(c__4556__auto___9943);
var G__9948 = (0);
seq__8522_9922 = G__9945;
chunk__8523_9923 = G__9946;
count__8524_9924 = G__9947;
i__8525_9925 = G__9948;
continue;
} else {
var vec__8551_9950 = cljs.core.first(seq__8522_9936__$1);
var col_9951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8551_9950,(0),null);
var infos_9952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8551_9950,(1),null);
encode_cols(infos_9952,source_idx_9855,line_9920,col_9951);


var G__9958 = cljs.core.next(seq__8522_9936__$1);
var G__9959 = null;
var G__9960 = (0);
var G__9961 = (0);
seq__8522_9922 = G__9958;
chunk__8523_9923 = G__9959;
count__8524_9924 = G__9960;
i__8525_9925 = G__9961;
continue;
}
} else {
}
}
break;
}


var G__9963 = cljs.core.next(seq__8411_9913__$1);
var G__9964 = null;
var G__9965 = (0);
var G__9966 = (0);
seq__8411_9861 = G__9963;
chunk__8412_9862 = G__9964;
count__8413_9863 = G__9965;
i__8414_9864 = G__9966;
continue;
}
} else {
}
}
break;
}


var G__9967 = cljs.core.next(seq__7815_9847__$1);
var G__9968 = null;
var G__9969 = (0);
var G__9970 = (0);
seq__7815_9711 = G__9967;
chunk__7816_9712 = G__9968;
count__7817_9713 = G__9969;
i__7818_9714 = G__9970;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8559 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__7780_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7780_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__7781_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__7781_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7782_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__7782_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__8573 = G__8559;
goog.object.set(G__8573,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__8573;
} else {
return G__8559;
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
var vec__8584 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8584,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8584,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__8591 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8591,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8591,(1),null);
var G__9997 = cljs.core.next(col_map_seq);
var G__9998 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8591,col,infos,vec__8584,line,col_map){
return (function (v,p__8595){
var map__8596 = p__8595;
var map__8596__$1 = (((((!((map__8596 == null))))?(((((map__8596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8596):map__8596);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8596__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8596__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8591,col,infos,vec__8584,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9997;
new_cols = G__9998;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__10005 = cljs.core.next(line_map_seq);
var G__10006 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__10005;
new_lines = G__10006;
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
var seq__8624_10007 = cljs.core.seq(reverse_map);
var chunk__8625_10008 = null;
var count__8626_10009 = (0);
var i__8627_10010 = (0);
while(true){
if((i__8627_10010 < count__8626_10009)){
var vec__9063_10012 = chunk__8625_10008.cljs$core$IIndexed$_nth$arity$2(null,i__8627_10010);
var line_10013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9063_10012,(0),null);
var columns_10014 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9063_10012,(1),null);
var seq__9066_10015 = cljs.core.seq(columns_10014);
var chunk__9067_10016 = null;
var count__9068_10017 = (0);
var i__9069_10018 = (0);
while(true){
if((i__9069_10018 < count__9068_10017)){
var vec__9173_10019 = chunk__9067_10016.cljs$core$IIndexed$_nth$arity$2(null,i__9069_10018);
var column_10020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9173_10019,(0),null);
var column_info_10021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9173_10019,(1),null);
var seq__9176_10022 = cljs.core.seq(column_info_10021);
var chunk__9177_10023 = null;
var count__9178_10024 = (0);
var i__9179_10025 = (0);
while(true){
if((i__9179_10025 < count__9178_10024)){
var map__9193_10032 = chunk__9177_10023.cljs$core$IIndexed$_nth$arity$2(null,i__9179_10025);
var map__9193_10033__$1 = (((((!((map__9193_10032 == null))))?(((((map__9193_10032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9193_10032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9193_10032):map__9193_10032);
var gline_10034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9193_10033__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9193_10033__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9193_10033__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10034], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9176_10022,chunk__9177_10023,count__9178_10024,i__9179_10025,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9193_10032,map__9193_10033__$1,gline_10034,gcol_10035,name_10036,vec__9173_10019,column_10020,column_info_10021,vec__9063_10012,line_10013,columns_10014,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10035], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10013,new cljs.core.Keyword(null,"col","col",-1959363084),column_10020,new cljs.core.Keyword(null,"name","name",1843675177),name_10036], null));
});})(seq__9176_10022,chunk__9177_10023,count__9178_10024,i__9179_10025,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9193_10032,map__9193_10033__$1,gline_10034,gcol_10035,name_10036,vec__9173_10019,column_10020,column_info_10021,vec__9063_10012,line_10013,columns_10014,inverted))
,cljs.core.sorted_map()));


var G__10076 = seq__9176_10022;
var G__10077 = chunk__9177_10023;
var G__10078 = count__9178_10024;
var G__10079 = (i__9179_10025 + (1));
seq__9176_10022 = G__10076;
chunk__9177_10023 = G__10077;
count__9178_10024 = G__10078;
i__9179_10025 = G__10079;
continue;
} else {
var temp__5735__auto___10082 = cljs.core.seq(seq__9176_10022);
if(temp__5735__auto___10082){
var seq__9176_10087__$1 = temp__5735__auto___10082;
if(cljs.core.chunked_seq_QMARK_(seq__9176_10087__$1)){
var c__4556__auto___10089 = cljs.core.chunk_first(seq__9176_10087__$1);
var G__10091 = cljs.core.chunk_rest(seq__9176_10087__$1);
var G__10092 = c__4556__auto___10089;
var G__10093 = cljs.core.count(c__4556__auto___10089);
var G__10094 = (0);
seq__9176_10022 = G__10091;
chunk__9177_10023 = G__10092;
count__9178_10024 = G__10093;
i__9179_10025 = G__10094;
continue;
} else {
var map__9197_10098 = cljs.core.first(seq__9176_10087__$1);
var map__9197_10099__$1 = (((((!((map__9197_10098 == null))))?(((((map__9197_10098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9197_10098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9197_10098):map__9197_10098);
var gline_10100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9197_10099__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9197_10099__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9197_10099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10100], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9176_10022,chunk__9177_10023,count__9178_10024,i__9179_10025,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9197_10098,map__9197_10099__$1,gline_10100,gcol_10101,name_10102,seq__9176_10087__$1,temp__5735__auto___10082,vec__9173_10019,column_10020,column_info_10021,vec__9063_10012,line_10013,columns_10014,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10101], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10013,new cljs.core.Keyword(null,"col","col",-1959363084),column_10020,new cljs.core.Keyword(null,"name","name",1843675177),name_10102], null));
});})(seq__9176_10022,chunk__9177_10023,count__9178_10024,i__9179_10025,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9197_10098,map__9197_10099__$1,gline_10100,gcol_10101,name_10102,seq__9176_10087__$1,temp__5735__auto___10082,vec__9173_10019,column_10020,column_info_10021,vec__9063_10012,line_10013,columns_10014,inverted))
,cljs.core.sorted_map()));


var G__10119 = cljs.core.next(seq__9176_10087__$1);
var G__10120 = null;
var G__10121 = (0);
var G__10122 = (0);
seq__9176_10022 = G__10119;
chunk__9177_10023 = G__10120;
count__9178_10024 = G__10121;
i__9179_10025 = G__10122;
continue;
}
} else {
}
}
break;
}


var G__10123 = seq__9066_10015;
var G__10124 = chunk__9067_10016;
var G__10125 = count__9068_10017;
var G__10126 = (i__9069_10018 + (1));
seq__9066_10015 = G__10123;
chunk__9067_10016 = G__10124;
count__9068_10017 = G__10125;
i__9069_10018 = G__10126;
continue;
} else {
var temp__5735__auto___10132 = cljs.core.seq(seq__9066_10015);
if(temp__5735__auto___10132){
var seq__9066_10134__$1 = temp__5735__auto___10132;
if(cljs.core.chunked_seq_QMARK_(seq__9066_10134__$1)){
var c__4556__auto___10136 = cljs.core.chunk_first(seq__9066_10134__$1);
var G__10137 = cljs.core.chunk_rest(seq__9066_10134__$1);
var G__10138 = c__4556__auto___10136;
var G__10139 = cljs.core.count(c__4556__auto___10136);
var G__10140 = (0);
seq__9066_10015 = G__10137;
chunk__9067_10016 = G__10138;
count__9068_10017 = G__10139;
i__9069_10018 = G__10140;
continue;
} else {
var vec__9219_10141 = cljs.core.first(seq__9066_10134__$1);
var column_10142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9219_10141,(0),null);
var column_info_10143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9219_10141,(1),null);
var seq__9222_10146 = cljs.core.seq(column_info_10143);
var chunk__9223_10147 = null;
var count__9224_10148 = (0);
var i__9225_10149 = (0);
while(true){
if((i__9225_10149 < count__9224_10148)){
var map__9238_10150 = chunk__9223_10147.cljs$core$IIndexed$_nth$arity$2(null,i__9225_10149);
var map__9238_10151__$1 = (((((!((map__9238_10150 == null))))?(((((map__9238_10150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9238_10150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9238_10150):map__9238_10150);
var gline_10153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238_10151__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238_10151__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9238_10151__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10153], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9222_10146,chunk__9223_10147,count__9224_10148,i__9225_10149,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9238_10150,map__9238_10151__$1,gline_10153,gcol_10154,name_10155,vec__9219_10141,column_10142,column_info_10143,seq__9066_10134__$1,temp__5735__auto___10132,vec__9063_10012,line_10013,columns_10014,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10154], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10013,new cljs.core.Keyword(null,"col","col",-1959363084),column_10142,new cljs.core.Keyword(null,"name","name",1843675177),name_10155], null));
});})(seq__9222_10146,chunk__9223_10147,count__9224_10148,i__9225_10149,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9238_10150,map__9238_10151__$1,gline_10153,gcol_10154,name_10155,vec__9219_10141,column_10142,column_info_10143,seq__9066_10134__$1,temp__5735__auto___10132,vec__9063_10012,line_10013,columns_10014,inverted))
,cljs.core.sorted_map()));


var G__10181 = seq__9222_10146;
var G__10182 = chunk__9223_10147;
var G__10183 = count__9224_10148;
var G__10184 = (i__9225_10149 + (1));
seq__9222_10146 = G__10181;
chunk__9223_10147 = G__10182;
count__9224_10148 = G__10183;
i__9225_10149 = G__10184;
continue;
} else {
var temp__5735__auto___10188__$1 = cljs.core.seq(seq__9222_10146);
if(temp__5735__auto___10188__$1){
var seq__9222_10189__$1 = temp__5735__auto___10188__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9222_10189__$1)){
var c__4556__auto___10190 = cljs.core.chunk_first(seq__9222_10189__$1);
var G__10191 = cljs.core.chunk_rest(seq__9222_10189__$1);
var G__10192 = c__4556__auto___10190;
var G__10193 = cljs.core.count(c__4556__auto___10190);
var G__10194 = (0);
seq__9222_10146 = G__10191;
chunk__9223_10147 = G__10192;
count__9224_10148 = G__10193;
i__9225_10149 = G__10194;
continue;
} else {
var map__9240_10195 = cljs.core.first(seq__9222_10189__$1);
var map__9240_10196__$1 = (((((!((map__9240_10195 == null))))?(((((map__9240_10195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9240_10195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9240_10195):map__9240_10195);
var gline_10197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9240_10196__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9240_10196__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10199 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9240_10196__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10197], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9222_10146,chunk__9223_10147,count__9224_10148,i__9225_10149,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9240_10195,map__9240_10196__$1,gline_10197,gcol_10198,name_10199,seq__9222_10189__$1,temp__5735__auto___10188__$1,vec__9219_10141,column_10142,column_info_10143,seq__9066_10134__$1,temp__5735__auto___10132,vec__9063_10012,line_10013,columns_10014,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10198], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10013,new cljs.core.Keyword(null,"col","col",-1959363084),column_10142,new cljs.core.Keyword(null,"name","name",1843675177),name_10199], null));
});})(seq__9222_10146,chunk__9223_10147,count__9224_10148,i__9225_10149,seq__9066_10015,chunk__9067_10016,count__9068_10017,i__9069_10018,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9240_10195,map__9240_10196__$1,gline_10197,gcol_10198,name_10199,seq__9222_10189__$1,temp__5735__auto___10188__$1,vec__9219_10141,column_10142,column_info_10143,seq__9066_10134__$1,temp__5735__auto___10132,vec__9063_10012,line_10013,columns_10014,inverted))
,cljs.core.sorted_map()));


var G__10205 = cljs.core.next(seq__9222_10189__$1);
var G__10206 = null;
var G__10207 = (0);
var G__10208 = (0);
seq__9222_10146 = G__10205;
chunk__9223_10147 = G__10206;
count__9224_10148 = G__10207;
i__9225_10149 = G__10208;
continue;
}
} else {
}
}
break;
}


var G__10210 = cljs.core.next(seq__9066_10134__$1);
var G__10211 = null;
var G__10212 = (0);
var G__10213 = (0);
seq__9066_10015 = G__10210;
chunk__9067_10016 = G__10211;
count__9068_10017 = G__10212;
i__9069_10018 = G__10213;
continue;
}
} else {
}
}
break;
}


var G__10218 = seq__8624_10007;
var G__10219 = chunk__8625_10008;
var G__10220 = count__8626_10009;
var G__10221 = (i__8627_10010 + (1));
seq__8624_10007 = G__10218;
chunk__8625_10008 = G__10219;
count__8626_10009 = G__10220;
i__8627_10010 = G__10221;
continue;
} else {
var temp__5735__auto___10222 = cljs.core.seq(seq__8624_10007);
if(temp__5735__auto___10222){
var seq__8624_10223__$1 = temp__5735__auto___10222;
if(cljs.core.chunked_seq_QMARK_(seq__8624_10223__$1)){
var c__4556__auto___10224 = cljs.core.chunk_first(seq__8624_10223__$1);
var G__10225 = cljs.core.chunk_rest(seq__8624_10223__$1);
var G__10226 = c__4556__auto___10224;
var G__10227 = cljs.core.count(c__4556__auto___10224);
var G__10228 = (0);
seq__8624_10007 = G__10225;
chunk__8625_10008 = G__10226;
count__8626_10009 = G__10227;
i__8627_10010 = G__10228;
continue;
} else {
var vec__9244_10229 = cljs.core.first(seq__8624_10223__$1);
var line_10230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244_10229,(0),null);
var columns_10231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9244_10229,(1),null);
var seq__9247_10232 = cljs.core.seq(columns_10231);
var chunk__9248_10233 = null;
var count__9249_10234 = (0);
var i__9250_10235 = (0);
while(true){
if((i__9250_10235 < count__9249_10234)){
var vec__9375_10236 = chunk__9248_10233.cljs$core$IIndexed$_nth$arity$2(null,i__9250_10235);
var column_10237 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9375_10236,(0),null);
var column_info_10238 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9375_10236,(1),null);
var seq__9378_10239 = cljs.core.seq(column_info_10238);
var chunk__9379_10240 = null;
var count__9380_10241 = (0);
var i__9381_10242 = (0);
while(true){
if((i__9381_10242 < count__9380_10241)){
var map__9414_10243 = chunk__9379_10240.cljs$core$IIndexed$_nth$arity$2(null,i__9381_10242);
var map__9414_10244__$1 = (((((!((map__9414_10243 == null))))?(((((map__9414_10243.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9414_10243.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9414_10243):map__9414_10243);
var gline_10245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9414_10244__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9414_10244__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9414_10244__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10245], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9378_10239,chunk__9379_10240,count__9380_10241,i__9381_10242,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9414_10243,map__9414_10244__$1,gline_10245,gcol_10246,name_10247,vec__9375_10236,column_10237,column_info_10238,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10246], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10230,new cljs.core.Keyword(null,"col","col",-1959363084),column_10237,new cljs.core.Keyword(null,"name","name",1843675177),name_10247], null));
});})(seq__9378_10239,chunk__9379_10240,count__9380_10241,i__9381_10242,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9414_10243,map__9414_10244__$1,gline_10245,gcol_10246,name_10247,vec__9375_10236,column_10237,column_info_10238,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted))
,cljs.core.sorted_map()));


var G__10253 = seq__9378_10239;
var G__10254 = chunk__9379_10240;
var G__10255 = count__9380_10241;
var G__10256 = (i__9381_10242 + (1));
seq__9378_10239 = G__10253;
chunk__9379_10240 = G__10254;
count__9380_10241 = G__10255;
i__9381_10242 = G__10256;
continue;
} else {
var temp__5735__auto___10257__$1 = cljs.core.seq(seq__9378_10239);
if(temp__5735__auto___10257__$1){
var seq__9378_10258__$1 = temp__5735__auto___10257__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9378_10258__$1)){
var c__4556__auto___10259 = cljs.core.chunk_first(seq__9378_10258__$1);
var G__10261 = cljs.core.chunk_rest(seq__9378_10258__$1);
var G__10262 = c__4556__auto___10259;
var G__10263 = cljs.core.count(c__4556__auto___10259);
var G__10264 = (0);
seq__9378_10239 = G__10261;
chunk__9379_10240 = G__10262;
count__9380_10241 = G__10263;
i__9381_10242 = G__10264;
continue;
} else {
var map__9421_10268 = cljs.core.first(seq__9378_10258__$1);
var map__9421_10269__$1 = (((((!((map__9421_10268 == null))))?(((((map__9421_10268.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9421_10268.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9421_10268):map__9421_10268);
var gline_10270 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9421_10269__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9421_10269__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10272 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9421_10269__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10270], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9378_10239,chunk__9379_10240,count__9380_10241,i__9381_10242,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9421_10268,map__9421_10269__$1,gline_10270,gcol_10271,name_10272,seq__9378_10258__$1,temp__5735__auto___10257__$1,vec__9375_10236,column_10237,column_info_10238,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10271], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10230,new cljs.core.Keyword(null,"col","col",-1959363084),column_10237,new cljs.core.Keyword(null,"name","name",1843675177),name_10272], null));
});})(seq__9378_10239,chunk__9379_10240,count__9380_10241,i__9381_10242,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9421_10268,map__9421_10269__$1,gline_10270,gcol_10271,name_10272,seq__9378_10258__$1,temp__5735__auto___10257__$1,vec__9375_10236,column_10237,column_info_10238,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted))
,cljs.core.sorted_map()));


var G__10278 = cljs.core.next(seq__9378_10258__$1);
var G__10279 = null;
var G__10280 = (0);
var G__10281 = (0);
seq__9378_10239 = G__10278;
chunk__9379_10240 = G__10279;
count__9380_10241 = G__10280;
i__9381_10242 = G__10281;
continue;
}
} else {
}
}
break;
}


var G__10283 = seq__9247_10232;
var G__10284 = chunk__9248_10233;
var G__10285 = count__9249_10234;
var G__10286 = (i__9250_10235 + (1));
seq__9247_10232 = G__10283;
chunk__9248_10233 = G__10284;
count__9249_10234 = G__10285;
i__9250_10235 = G__10286;
continue;
} else {
var temp__5735__auto___10288__$1 = cljs.core.seq(seq__9247_10232);
if(temp__5735__auto___10288__$1){
var seq__9247_10290__$1 = temp__5735__auto___10288__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9247_10290__$1)){
var c__4556__auto___10292 = cljs.core.chunk_first(seq__9247_10290__$1);
var G__10294 = cljs.core.chunk_rest(seq__9247_10290__$1);
var G__10295 = c__4556__auto___10292;
var G__10296 = cljs.core.count(c__4556__auto___10292);
var G__10297 = (0);
seq__9247_10232 = G__10294;
chunk__9248_10233 = G__10295;
count__9249_10234 = G__10296;
i__9250_10235 = G__10297;
continue;
} else {
var vec__9432_10298 = cljs.core.first(seq__9247_10290__$1);
var column_10299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9432_10298,(0),null);
var column_info_10300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9432_10298,(1),null);
var seq__9435_10301 = cljs.core.seq(column_info_10300);
var chunk__9436_10302 = null;
var count__9437_10303 = (0);
var i__9438_10304 = (0);
while(true){
if((i__9438_10304 < count__9437_10303)){
var map__9447_10306 = chunk__9436_10302.cljs$core$IIndexed$_nth$arity$2(null,i__9438_10304);
var map__9447_10307__$1 = (((((!((map__9447_10306 == null))))?(((((map__9447_10306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9447_10306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9447_10306):map__9447_10306);
var gline_10308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9447_10307__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9447_10307__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9447_10307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10308], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9435_10301,chunk__9436_10302,count__9437_10303,i__9438_10304,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9447_10306,map__9447_10307__$1,gline_10308,gcol_10309,name_10310,vec__9432_10298,column_10299,column_info_10300,seq__9247_10290__$1,temp__5735__auto___10288__$1,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10309], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10230,new cljs.core.Keyword(null,"col","col",-1959363084),column_10299,new cljs.core.Keyword(null,"name","name",1843675177),name_10310], null));
});})(seq__9435_10301,chunk__9436_10302,count__9437_10303,i__9438_10304,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9447_10306,map__9447_10307__$1,gline_10308,gcol_10309,name_10310,vec__9432_10298,column_10299,column_info_10300,seq__9247_10290__$1,temp__5735__auto___10288__$1,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted))
,cljs.core.sorted_map()));


var G__10328 = seq__9435_10301;
var G__10329 = chunk__9436_10302;
var G__10330 = count__9437_10303;
var G__10331 = (i__9438_10304 + (1));
seq__9435_10301 = G__10328;
chunk__9436_10302 = G__10329;
count__9437_10303 = G__10330;
i__9438_10304 = G__10331;
continue;
} else {
var temp__5735__auto___10334__$2 = cljs.core.seq(seq__9435_10301);
if(temp__5735__auto___10334__$2){
var seq__9435_10336__$1 = temp__5735__auto___10334__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9435_10336__$1)){
var c__4556__auto___10337 = cljs.core.chunk_first(seq__9435_10336__$1);
var G__10338 = cljs.core.chunk_rest(seq__9435_10336__$1);
var G__10339 = c__4556__auto___10337;
var G__10340 = cljs.core.count(c__4556__auto___10337);
var G__10341 = (0);
seq__9435_10301 = G__10338;
chunk__9436_10302 = G__10339;
count__9437_10303 = G__10340;
i__9438_10304 = G__10341;
continue;
} else {
var map__9468_10345 = cljs.core.first(seq__9435_10336__$1);
var map__9468_10346__$1 = (((((!((map__9468_10345 == null))))?(((((map__9468_10345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9468_10345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9468_10345):map__9468_10345);
var gline_10347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468_10346__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_10348 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468_10346__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_10349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9468_10346__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_10347], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9435_10301,chunk__9436_10302,count__9437_10303,i__9438_10304,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9468_10345,map__9468_10346__$1,gline_10347,gcol_10348,name_10349,seq__9435_10336__$1,temp__5735__auto___10334__$2,vec__9432_10298,column_10299,column_info_10300,seq__9247_10290__$1,temp__5735__auto___10288__$1,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_10348], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_10230,new cljs.core.Keyword(null,"col","col",-1959363084),column_10299,new cljs.core.Keyword(null,"name","name",1843675177),name_10349], null));
});})(seq__9435_10301,chunk__9436_10302,count__9437_10303,i__9438_10304,seq__9247_10232,chunk__9248_10233,count__9249_10234,i__9250_10235,seq__8624_10007,chunk__8625_10008,count__8626_10009,i__8627_10010,map__9468_10345,map__9468_10346__$1,gline_10347,gcol_10348,name_10349,seq__9435_10336__$1,temp__5735__auto___10334__$2,vec__9432_10298,column_10299,column_info_10300,seq__9247_10290__$1,temp__5735__auto___10288__$1,vec__9244_10229,line_10230,columns_10231,seq__8624_10223__$1,temp__5735__auto___10222,inverted))
,cljs.core.sorted_map()));


var G__10358 = cljs.core.next(seq__9435_10336__$1);
var G__10359 = null;
var G__10360 = (0);
var G__10361 = (0);
seq__9435_10301 = G__10358;
chunk__9436_10302 = G__10359;
count__9437_10303 = G__10360;
i__9438_10304 = G__10361;
continue;
}
} else {
}
}
break;
}


var G__10364 = cljs.core.next(seq__9247_10290__$1);
var G__10365 = null;
var G__10366 = (0);
var G__10367 = (0);
seq__9247_10232 = G__10364;
chunk__9248_10233 = G__10365;
count__9249_10234 = G__10366;
i__9250_10235 = G__10367;
continue;
}
} else {
}
}
break;
}


var G__10368 = cljs.core.next(seq__8624_10223__$1);
var G__10369 = null;
var G__10370 = (0);
var G__10371 = (0);
seq__8624_10007 = G__10368;
chunk__8625_10008 = G__10369;
count__8626_10009 = G__10370;
i__8627_10010 = G__10371;
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
