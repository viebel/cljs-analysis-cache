goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__7645){
var vec__7646 = p__7645;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7646,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7646,(1),null);
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
var vec__7652 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7652,(4),null);
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
var map__7676 = segmap;
var map__7676__$1 = (((((!((map__7676 == null))))?(((((map__7676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7676):map__7676);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7676__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7676__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7676__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7676__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7676__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__7685 = arguments.length;
switch (G__7685) {
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
var vec__7699 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9277 = cljs.core.next(segs__$1);
var G__9278 = nrelseg;
var G__9279 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9277;
relseg__$1 = G__9278;
result__$1 = G__9279;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7699,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7699,(1),null);
var G__9280 = (gline + (1));
var G__9281 = cljs.core.next(lines__$1);
var G__9282 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9283 = result__$1;
gline = G__9280;
lines__$1 = G__9281;
relseg = G__9282;
result = G__9283;
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
var map__7709 = segmap;
var map__7709__$1 = (((((!((map__7709 == null))))?(((((map__7709.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7709.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7709):map__7709);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7709__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7709__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7709__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7709__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7709__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__7705_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__7705_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__7725 = arguments.length;
switch (G__7725) {
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
var vec__7746 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9308 = cljs.core.next(segs__$1);
var G__9309 = nrelseg;
var G__9310 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9308;
relseg__$1 = G__9309;
result__$1 = G__9310;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7746,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7746,(1),null);
var G__9313 = (gline + (1));
var G__9314 = cljs.core.next(lines__$1);
var G__9315 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9316 = result__$1;
gline = G__9313;
lines__$1 = G__9314;
relseg = G__9315;
result = G__9316;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__7761){
var vec__7762 = p__7761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__7767){
var vec__7768 = p__7767;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7768,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7768,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7768,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7768,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7768,(4),null);
var seg = vec__7768;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__7772){
var vec__7773 = p__7772;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7773,(4),null);
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
var seq__7795 = cljs.core.seq(infos);
var chunk__7796 = null;
var count__7797 = (0);
var i__7798 = (0);
while(true){
if((i__7798 < count__7797)){
var info = chunk__7796.cljs$core$IIndexed$_nth$arity$2(null,i__7798);
var segv_9342 = info__GT_segv(info,source_idx,line,col);
var gline_9343 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9344 = cljs.core.count(cljs.core.deref(lines));
if((gline_9343 > (lc_9344 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7795,chunk__7796,count__7797,i__7798,segv_9342,gline_9343,lc_9344,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9343 - (lc_9344 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9342], null));
});})(seq__7795,chunk__7796,count__7797,i__7798,segv_9342,gline_9343,lc_9344,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7795,chunk__7796,count__7797,i__7798,segv_9342,gline_9343,lc_9344,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9343], null),cljs.core.conj,segv_9342);
});})(seq__7795,chunk__7796,count__7797,i__7798,segv_9342,gline_9343,lc_9344,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9356 = seq__7795;
var G__9357 = chunk__7796;
var G__9358 = count__7797;
var G__9359 = (i__7798 + (1));
seq__7795 = G__9356;
chunk__7796 = G__9357;
count__7797 = G__9358;
i__7798 = G__9359;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__7795);
if(temp__5735__auto__){
var seq__7795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__7795__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__7795__$1);
var G__9364 = cljs.core.chunk_rest(seq__7795__$1);
var G__9365 = c__4556__auto__;
var G__9366 = cljs.core.count(c__4556__auto__);
var G__9367 = (0);
seq__7795 = G__9364;
chunk__7796 = G__9365;
count__7797 = G__9366;
i__7798 = G__9367;
continue;
} else {
var info = cljs.core.first(seq__7795__$1);
var segv_9369 = info__GT_segv(info,source_idx,line,col);
var gline_9370 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_9371 = cljs.core.count(cljs.core.deref(lines));
if((gline_9370 > (lc_9371 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7795,chunk__7796,count__7797,i__7798,segv_9369,gline_9370,lc_9371,info,seq__7795__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_9370 - (lc_9371 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_9369], null));
});})(seq__7795,chunk__7796,count__7797,i__7798,segv_9369,gline_9370,lc_9371,info,seq__7795__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__7795,chunk__7796,count__7797,i__7798,segv_9369,gline_9370,lc_9371,info,seq__7795__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9370], null),cljs.core.conj,segv_9369);
});})(seq__7795,chunk__7796,count__7797,i__7798,segv_9369,gline_9370,lc_9371,info,seq__7795__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__9379 = cljs.core.next(seq__7795__$1);
var G__9380 = null;
var G__9381 = (0);
var G__9382 = (0);
seq__7795 = G__9379;
chunk__7796 = G__9380;
count__7797 = G__9381;
i__7798 = G__9382;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__7826_9383 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__7827_9384 = null;
var count__7828_9385 = (0);
var i__7829_9386 = (0);
while(true){
if((i__7829_9386 < count__7828_9385)){
var vec__8230_9392 = chunk__7827_9384.cljs$core$IIndexed$_nth$arity$2(null,i__7829_9386);
var source_idx_9393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8230_9392,(0),null);
var vec__8233_9394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8230_9392,(1),null);
var __9395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8233_9394,(0),null);
var lines_9396__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8233_9394,(1),null);
var seq__8237_9397 = cljs.core.seq(lines_9396__$1);
var chunk__8238_9398 = null;
var count__8239_9399 = (0);
var i__8240_9400 = (0);
while(true){
if((i__8240_9400 < count__8239_9399)){
var vec__8313_9402 = chunk__8238_9398.cljs$core$IIndexed$_nth$arity$2(null,i__8240_9400);
var line_9403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8313_9402,(0),null);
var cols_9404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8313_9402,(1),null);
var seq__8318_9405 = cljs.core.seq(cols_9404);
var chunk__8319_9406 = null;
var count__8320_9407 = (0);
var i__8321_9408 = (0);
while(true){
if((i__8321_9408 < count__8320_9407)){
var vec__8331_9410 = chunk__8319_9406.cljs$core$IIndexed$_nth$arity$2(null,i__8321_9408);
var col_9411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8331_9410,(0),null);
var infos_9412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8331_9410,(1),null);
encode_cols(infos_9412,source_idx_9393,line_9403,col_9411);


var G__9413 = seq__8318_9405;
var G__9414 = chunk__8319_9406;
var G__9415 = count__8320_9407;
var G__9416 = (i__8321_9408 + (1));
seq__8318_9405 = G__9413;
chunk__8319_9406 = G__9414;
count__8320_9407 = G__9415;
i__8321_9408 = G__9416;
continue;
} else {
var temp__5735__auto___9417 = cljs.core.seq(seq__8318_9405);
if(temp__5735__auto___9417){
var seq__8318_9418__$1 = temp__5735__auto___9417;
if(cljs.core.chunked_seq_QMARK_(seq__8318_9418__$1)){
var c__4556__auto___9419 = cljs.core.chunk_first(seq__8318_9418__$1);
var G__9420 = cljs.core.chunk_rest(seq__8318_9418__$1);
var G__9421 = c__4556__auto___9419;
var G__9422 = cljs.core.count(c__4556__auto___9419);
var G__9423 = (0);
seq__8318_9405 = G__9420;
chunk__8319_9406 = G__9421;
count__8320_9407 = G__9422;
i__8321_9408 = G__9423;
continue;
} else {
var vec__8343_9425 = cljs.core.first(seq__8318_9418__$1);
var col_9426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8343_9425,(0),null);
var infos_9427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8343_9425,(1),null);
encode_cols(infos_9427,source_idx_9393,line_9403,col_9426);


var G__9430 = cljs.core.next(seq__8318_9418__$1);
var G__9432 = null;
var G__9434 = (0);
var G__9435 = (0);
seq__8318_9405 = G__9430;
chunk__8319_9406 = G__9432;
count__8320_9407 = G__9434;
i__8321_9408 = G__9435;
continue;
}
} else {
}
}
break;
}


var G__9445 = seq__8237_9397;
var G__9446 = chunk__8238_9398;
var G__9447 = count__8239_9399;
var G__9448 = (i__8240_9400 + (1));
seq__8237_9397 = G__9445;
chunk__8238_9398 = G__9446;
count__8239_9399 = G__9447;
i__8240_9400 = G__9448;
continue;
} else {
var temp__5735__auto___9450 = cljs.core.seq(seq__8237_9397);
if(temp__5735__auto___9450){
var seq__8237_9452__$1 = temp__5735__auto___9450;
if(cljs.core.chunked_seq_QMARK_(seq__8237_9452__$1)){
var c__4556__auto___9453 = cljs.core.chunk_first(seq__8237_9452__$1);
var G__9454 = cljs.core.chunk_rest(seq__8237_9452__$1);
var G__9455 = c__4556__auto___9453;
var G__9456 = cljs.core.count(c__4556__auto___9453);
var G__9457 = (0);
seq__8237_9397 = G__9454;
chunk__8238_9398 = G__9455;
count__8239_9399 = G__9456;
i__8240_9400 = G__9457;
continue;
} else {
var vec__8348_9459 = cljs.core.first(seq__8237_9452__$1);
var line_9460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8348_9459,(0),null);
var cols_9461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8348_9459,(1),null);
var seq__8351_9464 = cljs.core.seq(cols_9461);
var chunk__8352_9465 = null;
var count__8353_9466 = (0);
var i__8354_9467 = (0);
while(true){
if((i__8354_9467 < count__8353_9466)){
var vec__8368_9469 = chunk__8352_9465.cljs$core$IIndexed$_nth$arity$2(null,i__8354_9467);
var col_9470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8368_9469,(0),null);
var infos_9471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8368_9469,(1),null);
encode_cols(infos_9471,source_idx_9393,line_9460,col_9470);


var G__9473 = seq__8351_9464;
var G__9474 = chunk__8352_9465;
var G__9475 = count__8353_9466;
var G__9476 = (i__8354_9467 + (1));
seq__8351_9464 = G__9473;
chunk__8352_9465 = G__9474;
count__8353_9466 = G__9475;
i__8354_9467 = G__9476;
continue;
} else {
var temp__5735__auto___9477__$1 = cljs.core.seq(seq__8351_9464);
if(temp__5735__auto___9477__$1){
var seq__8351_9478__$1 = temp__5735__auto___9477__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8351_9478__$1)){
var c__4556__auto___9479 = cljs.core.chunk_first(seq__8351_9478__$1);
var G__9480 = cljs.core.chunk_rest(seq__8351_9478__$1);
var G__9481 = c__4556__auto___9479;
var G__9482 = cljs.core.count(c__4556__auto___9479);
var G__9483 = (0);
seq__8351_9464 = G__9480;
chunk__8352_9465 = G__9481;
count__8353_9466 = G__9482;
i__8354_9467 = G__9483;
continue;
} else {
var vec__8371_9484 = cljs.core.first(seq__8351_9478__$1);
var col_9485 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8371_9484,(0),null);
var infos_9486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8371_9484,(1),null);
encode_cols(infos_9486,source_idx_9393,line_9460,col_9485);


var G__9488 = cljs.core.next(seq__8351_9478__$1);
var G__9489 = null;
var G__9490 = (0);
var G__9491 = (0);
seq__8351_9464 = G__9488;
chunk__8352_9465 = G__9489;
count__8353_9466 = G__9490;
i__8354_9467 = G__9491;
continue;
}
} else {
}
}
break;
}


var G__9493 = cljs.core.next(seq__8237_9452__$1);
var G__9494 = null;
var G__9495 = (0);
var G__9496 = (0);
seq__8237_9397 = G__9493;
chunk__8238_9398 = G__9494;
count__8239_9399 = G__9495;
i__8240_9400 = G__9496;
continue;
}
} else {
}
}
break;
}


var G__9497 = seq__7826_9383;
var G__9498 = chunk__7827_9384;
var G__9499 = count__7828_9385;
var G__9500 = (i__7829_9386 + (1));
seq__7826_9383 = G__9497;
chunk__7827_9384 = G__9498;
count__7828_9385 = G__9499;
i__7829_9386 = G__9500;
continue;
} else {
var temp__5735__auto___9501 = cljs.core.seq(seq__7826_9383);
if(temp__5735__auto___9501){
var seq__7826_9502__$1 = temp__5735__auto___9501;
if(cljs.core.chunked_seq_QMARK_(seq__7826_9502__$1)){
var c__4556__auto___9503 = cljs.core.chunk_first(seq__7826_9502__$1);
var G__9504 = cljs.core.chunk_rest(seq__7826_9502__$1);
var G__9505 = c__4556__auto___9503;
var G__9506 = cljs.core.count(c__4556__auto___9503);
var G__9507 = (0);
seq__7826_9383 = G__9504;
chunk__7827_9384 = G__9505;
count__7828_9385 = G__9506;
i__7829_9386 = G__9507;
continue;
} else {
var vec__8378_9508 = cljs.core.first(seq__7826_9502__$1);
var source_idx_9509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8378_9508,(0),null);
var vec__8381_9510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8378_9508,(1),null);
var __9511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8381_9510,(0),null);
var lines_9512__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8381_9510,(1),null);
var seq__8385_9516 = cljs.core.seq(lines_9512__$1);
var chunk__8386_9517 = null;
var count__8387_9518 = (0);
var i__8388_9519 = (0);
while(true){
if((i__8388_9519 < count__8387_9518)){
var vec__8465_9521 = chunk__8386_9517.cljs$core$IIndexed$_nth$arity$2(null,i__8388_9519);
var line_9522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8465_9521,(0),null);
var cols_9523 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8465_9521,(1),null);
var seq__8468_9524 = cljs.core.seq(cols_9523);
var chunk__8469_9525 = null;
var count__8470_9526 = (0);
var i__8471_9527 = (0);
while(true){
if((i__8471_9527 < count__8470_9526)){
var vec__8482_9528 = chunk__8469_9525.cljs$core$IIndexed$_nth$arity$2(null,i__8471_9527);
var col_9529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8482_9528,(0),null);
var infos_9530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8482_9528,(1),null);
encode_cols(infos_9530,source_idx_9509,line_9522,col_9529);


var G__9531 = seq__8468_9524;
var G__9532 = chunk__8469_9525;
var G__9533 = count__8470_9526;
var G__9534 = (i__8471_9527 + (1));
seq__8468_9524 = G__9531;
chunk__8469_9525 = G__9532;
count__8470_9526 = G__9533;
i__8471_9527 = G__9534;
continue;
} else {
var temp__5735__auto___9535__$1 = cljs.core.seq(seq__8468_9524);
if(temp__5735__auto___9535__$1){
var seq__8468_9536__$1 = temp__5735__auto___9535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8468_9536__$1)){
var c__4556__auto___9541 = cljs.core.chunk_first(seq__8468_9536__$1);
var G__9542 = cljs.core.chunk_rest(seq__8468_9536__$1);
var G__9543 = c__4556__auto___9541;
var G__9544 = cljs.core.count(c__4556__auto___9541);
var G__9545 = (0);
seq__8468_9524 = G__9542;
chunk__8469_9525 = G__9543;
count__8470_9526 = G__9544;
i__8471_9527 = G__9545;
continue;
} else {
var vec__8486_9546 = cljs.core.first(seq__8468_9536__$1);
var col_9547 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8486_9546,(0),null);
var infos_9548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8486_9546,(1),null);
encode_cols(infos_9548,source_idx_9509,line_9522,col_9547);


var G__9551 = cljs.core.next(seq__8468_9536__$1);
var G__9552 = null;
var G__9553 = (0);
var G__9554 = (0);
seq__8468_9524 = G__9551;
chunk__8469_9525 = G__9552;
count__8470_9526 = G__9553;
i__8471_9527 = G__9554;
continue;
}
} else {
}
}
break;
}


var G__9555 = seq__8385_9516;
var G__9556 = chunk__8386_9517;
var G__9557 = count__8387_9518;
var G__9558 = (i__8388_9519 + (1));
seq__8385_9516 = G__9555;
chunk__8386_9517 = G__9556;
count__8387_9518 = G__9557;
i__8388_9519 = G__9558;
continue;
} else {
var temp__5735__auto___9559__$1 = cljs.core.seq(seq__8385_9516);
if(temp__5735__auto___9559__$1){
var seq__8385_9562__$1 = temp__5735__auto___9559__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8385_9562__$1)){
var c__4556__auto___9563 = cljs.core.chunk_first(seq__8385_9562__$1);
var G__9565 = cljs.core.chunk_rest(seq__8385_9562__$1);
var G__9566 = c__4556__auto___9563;
var G__9567 = cljs.core.count(c__4556__auto___9563);
var G__9568 = (0);
seq__8385_9516 = G__9565;
chunk__8386_9517 = G__9566;
count__8387_9518 = G__9567;
i__8388_9519 = G__9568;
continue;
} else {
var vec__8494_9571 = cljs.core.first(seq__8385_9562__$1);
var line_9572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8494_9571,(0),null);
var cols_9573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8494_9571,(1),null);
var seq__8499_9576 = cljs.core.seq(cols_9573);
var chunk__8500_9577 = null;
var count__8501_9578 = (0);
var i__8502_9579 = (0);
while(true){
if((i__8502_9579 < count__8501_9578)){
var vec__8519_9583 = chunk__8500_9577.cljs$core$IIndexed$_nth$arity$2(null,i__8502_9579);
var col_9584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8519_9583,(0),null);
var infos_9585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8519_9583,(1),null);
encode_cols(infos_9585,source_idx_9509,line_9572,col_9584);


var G__9588 = seq__8499_9576;
var G__9589 = chunk__8500_9577;
var G__9590 = count__8501_9578;
var G__9591 = (i__8502_9579 + (1));
seq__8499_9576 = G__9588;
chunk__8500_9577 = G__9589;
count__8501_9578 = G__9590;
i__8502_9579 = G__9591;
continue;
} else {
var temp__5735__auto___9594__$2 = cljs.core.seq(seq__8499_9576);
if(temp__5735__auto___9594__$2){
var seq__8499_9595__$1 = temp__5735__auto___9594__$2;
if(cljs.core.chunked_seq_QMARK_(seq__8499_9595__$1)){
var c__4556__auto___9597 = cljs.core.chunk_first(seq__8499_9595__$1);
var G__9600 = cljs.core.chunk_rest(seq__8499_9595__$1);
var G__9601 = c__4556__auto___9597;
var G__9602 = cljs.core.count(c__4556__auto___9597);
var G__9603 = (0);
seq__8499_9576 = G__9600;
chunk__8500_9577 = G__9601;
count__8501_9578 = G__9602;
i__8502_9579 = G__9603;
continue;
} else {
var vec__8525_9609 = cljs.core.first(seq__8499_9595__$1);
var col_9610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8525_9609,(0),null);
var infos_9611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8525_9609,(1),null);
encode_cols(infos_9611,source_idx_9509,line_9572,col_9610);


var G__9614 = cljs.core.next(seq__8499_9595__$1);
var G__9615 = null;
var G__9616 = (0);
var G__9617 = (0);
seq__8499_9576 = G__9614;
chunk__8500_9577 = G__9615;
count__8501_9578 = G__9616;
i__8502_9579 = G__9617;
continue;
}
} else {
}
}
break;
}


var G__9618 = cljs.core.next(seq__8385_9562__$1);
var G__9619 = null;
var G__9620 = (0);
var G__9621 = (0);
seq__8385_9516 = G__9618;
chunk__8386_9517 = G__9619;
count__8387_9518 = G__9620;
i__8388_9519 = G__9621;
continue;
}
} else {
}
}
break;
}


var G__9622 = cljs.core.next(seq__7826_9502__$1);
var G__9623 = null;
var G__9624 = (0);
var G__9625 = (0);
seq__7826_9383 = G__9622;
chunk__7827_9384 = G__9623;
count__7828_9385 = G__9624;
i__7829_9386 = G__9625;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__8530 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__7779_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__7779_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__7781_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__7781_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7782_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__7782_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__8536 = G__8530;
goog.object.set(G__8536,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__8536;
} else {
return G__8530;
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
var vec__8540 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8540,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8540,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__8544 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8544,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8544,(1),null);
var G__9632 = cljs.core.next(col_map_seq);
var G__9633 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__8544,col,infos,vec__8540,line,col_map){
return (function (v,p__8547){
var map__8548 = p__8547;
var map__8548__$1 = (((((!((map__8548 == null))))?(((((map__8548.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8548.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8548):map__8548);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8548__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8548__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__8544,col,infos,vec__8540,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9632;
new_cols = G__9633;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9634 = cljs.core.next(line_map_seq);
var G__9635 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__9634;
new_lines = G__9635;
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
var seq__8562_9645 = cljs.core.seq(reverse_map);
var chunk__8563_9646 = null;
var count__8564_9647 = (0);
var i__8565_9648 = (0);
while(true){
if((i__8565_9648 < count__8564_9647)){
var vec__8890_9649 = chunk__8563_9646.cljs$core$IIndexed$_nth$arity$2(null,i__8565_9648);
var line_9650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8890_9649,(0),null);
var columns_9651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8890_9649,(1),null);
var seq__8893_9652 = cljs.core.seq(columns_9651);
var chunk__8894_9653 = null;
var count__8895_9654 = (0);
var i__8896_9655 = (0);
while(true){
if((i__8896_9655 < count__8895_9654)){
var vec__9004_9656 = chunk__8894_9653.cljs$core$IIndexed$_nth$arity$2(null,i__8896_9655);
var column_9657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9004_9656,(0),null);
var column_info_9658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9004_9656,(1),null);
var seq__9007_9659 = cljs.core.seq(column_info_9658);
var chunk__9008_9660 = null;
var count__9009_9661 = (0);
var i__9010_9662 = (0);
while(true){
if((i__9010_9662 < count__9009_9661)){
var map__9025_9664 = chunk__9008_9660.cljs$core$IIndexed$_nth$arity$2(null,i__9010_9662);
var map__9025_9665__$1 = (((((!((map__9025_9664 == null))))?(((((map__9025_9664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9025_9664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9025_9664):map__9025_9664);
var gline_9666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9025_9665__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9025_9665__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9025_9665__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9666], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9007_9659,chunk__9008_9660,count__9009_9661,i__9010_9662,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9025_9664,map__9025_9665__$1,gline_9666,gcol_9667,name_9668,vec__9004_9656,column_9657,column_info_9658,vec__8890_9649,line_9650,columns_9651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9667], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9650,new cljs.core.Keyword(null,"col","col",-1959363084),column_9657,new cljs.core.Keyword(null,"name","name",1843675177),name_9668], null));
});})(seq__9007_9659,chunk__9008_9660,count__9009_9661,i__9010_9662,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9025_9664,map__9025_9665__$1,gline_9666,gcol_9667,name_9668,vec__9004_9656,column_9657,column_info_9658,vec__8890_9649,line_9650,columns_9651,inverted))
,cljs.core.sorted_map()));


var G__9686 = seq__9007_9659;
var G__9687 = chunk__9008_9660;
var G__9688 = count__9009_9661;
var G__9689 = (i__9010_9662 + (1));
seq__9007_9659 = G__9686;
chunk__9008_9660 = G__9687;
count__9009_9661 = G__9688;
i__9010_9662 = G__9689;
continue;
} else {
var temp__5735__auto___9698 = cljs.core.seq(seq__9007_9659);
if(temp__5735__auto___9698){
var seq__9007_9704__$1 = temp__5735__auto___9698;
if(cljs.core.chunked_seq_QMARK_(seq__9007_9704__$1)){
var c__4556__auto___9706 = cljs.core.chunk_first(seq__9007_9704__$1);
var G__9708 = cljs.core.chunk_rest(seq__9007_9704__$1);
var G__9709 = c__4556__auto___9706;
var G__9710 = cljs.core.count(c__4556__auto___9706);
var G__9711 = (0);
seq__9007_9659 = G__9708;
chunk__9008_9660 = G__9709;
count__9009_9661 = G__9710;
i__9010_9662 = G__9711;
continue;
} else {
var map__9032_9717 = cljs.core.first(seq__9007_9704__$1);
var map__9032_9718__$1 = (((((!((map__9032_9717 == null))))?(((((map__9032_9717.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9032_9717.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9032_9717):map__9032_9717);
var gline_9719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9032_9718__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9032_9718__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9032_9718__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9719], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9007_9659,chunk__9008_9660,count__9009_9661,i__9010_9662,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9032_9717,map__9032_9718__$1,gline_9719,gcol_9720,name_9721,seq__9007_9704__$1,temp__5735__auto___9698,vec__9004_9656,column_9657,column_info_9658,vec__8890_9649,line_9650,columns_9651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9720], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9650,new cljs.core.Keyword(null,"col","col",-1959363084),column_9657,new cljs.core.Keyword(null,"name","name",1843675177),name_9721], null));
});})(seq__9007_9659,chunk__9008_9660,count__9009_9661,i__9010_9662,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9032_9717,map__9032_9718__$1,gline_9719,gcol_9720,name_9721,seq__9007_9704__$1,temp__5735__auto___9698,vec__9004_9656,column_9657,column_info_9658,vec__8890_9649,line_9650,columns_9651,inverted))
,cljs.core.sorted_map()));


var G__9754 = cljs.core.next(seq__9007_9704__$1);
var G__9755 = null;
var G__9756 = (0);
var G__9757 = (0);
seq__9007_9659 = G__9754;
chunk__9008_9660 = G__9755;
count__9009_9661 = G__9756;
i__9010_9662 = G__9757;
continue;
}
} else {
}
}
break;
}


var G__9764 = seq__8893_9652;
var G__9765 = chunk__8894_9653;
var G__9766 = count__8895_9654;
var G__9767 = (i__8896_9655 + (1));
seq__8893_9652 = G__9764;
chunk__8894_9653 = G__9765;
count__8895_9654 = G__9766;
i__8896_9655 = G__9767;
continue;
} else {
var temp__5735__auto___9768 = cljs.core.seq(seq__8893_9652);
if(temp__5735__auto___9768){
var seq__8893_9769__$1 = temp__5735__auto___9768;
if(cljs.core.chunked_seq_QMARK_(seq__8893_9769__$1)){
var c__4556__auto___9770 = cljs.core.chunk_first(seq__8893_9769__$1);
var G__9771 = cljs.core.chunk_rest(seq__8893_9769__$1);
var G__9772 = c__4556__auto___9770;
var G__9773 = cljs.core.count(c__4556__auto___9770);
var G__9774 = (0);
seq__8893_9652 = G__9771;
chunk__8894_9653 = G__9772;
count__8895_9654 = G__9773;
i__8896_9655 = G__9774;
continue;
} else {
var vec__9037_9775 = cljs.core.first(seq__8893_9769__$1);
var column_9776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9037_9775,(0),null);
var column_info_9777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9037_9775,(1),null);
var seq__9040_9778 = cljs.core.seq(column_info_9777);
var chunk__9041_9779 = null;
var count__9042_9780 = (0);
var i__9043_9781 = (0);
while(true){
if((i__9043_9781 < count__9042_9780)){
var map__9068_9783 = chunk__9041_9779.cljs$core$IIndexed$_nth$arity$2(null,i__9043_9781);
var map__9068_9784__$1 = (((((!((map__9068_9783 == null))))?(((((map__9068_9783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9068_9783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9068_9783):map__9068_9783);
var gline_9785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9068_9784__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9068_9784__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9068_9784__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9785], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9040_9778,chunk__9041_9779,count__9042_9780,i__9043_9781,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9068_9783,map__9068_9784__$1,gline_9785,gcol_9786,name_9787,vec__9037_9775,column_9776,column_info_9777,seq__8893_9769__$1,temp__5735__auto___9768,vec__8890_9649,line_9650,columns_9651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9786], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9650,new cljs.core.Keyword(null,"col","col",-1959363084),column_9776,new cljs.core.Keyword(null,"name","name",1843675177),name_9787], null));
});})(seq__9040_9778,chunk__9041_9779,count__9042_9780,i__9043_9781,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9068_9783,map__9068_9784__$1,gline_9785,gcol_9786,name_9787,vec__9037_9775,column_9776,column_info_9777,seq__8893_9769__$1,temp__5735__auto___9768,vec__8890_9649,line_9650,columns_9651,inverted))
,cljs.core.sorted_map()));


var G__9798 = seq__9040_9778;
var G__9799 = chunk__9041_9779;
var G__9800 = count__9042_9780;
var G__9801 = (i__9043_9781 + (1));
seq__9040_9778 = G__9798;
chunk__9041_9779 = G__9799;
count__9042_9780 = G__9800;
i__9043_9781 = G__9801;
continue;
} else {
var temp__5735__auto___9803__$1 = cljs.core.seq(seq__9040_9778);
if(temp__5735__auto___9803__$1){
var seq__9040_9806__$1 = temp__5735__auto___9803__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9040_9806__$1)){
var c__4556__auto___9807 = cljs.core.chunk_first(seq__9040_9806__$1);
var G__9808 = cljs.core.chunk_rest(seq__9040_9806__$1);
var G__9809 = c__4556__auto___9807;
var G__9810 = cljs.core.count(c__4556__auto___9807);
var G__9811 = (0);
seq__9040_9778 = G__9808;
chunk__9041_9779 = G__9809;
count__9042_9780 = G__9810;
i__9043_9781 = G__9811;
continue;
} else {
var map__9072_9812 = cljs.core.first(seq__9040_9806__$1);
var map__9072_9813__$1 = (((((!((map__9072_9812 == null))))?(((((map__9072_9812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9072_9812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9072_9812):map__9072_9812);
var gline_9814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9072_9813__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9072_9813__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9072_9813__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9814], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9040_9778,chunk__9041_9779,count__9042_9780,i__9043_9781,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9072_9812,map__9072_9813__$1,gline_9814,gcol_9815,name_9816,seq__9040_9806__$1,temp__5735__auto___9803__$1,vec__9037_9775,column_9776,column_info_9777,seq__8893_9769__$1,temp__5735__auto___9768,vec__8890_9649,line_9650,columns_9651,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9815], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9650,new cljs.core.Keyword(null,"col","col",-1959363084),column_9776,new cljs.core.Keyword(null,"name","name",1843675177),name_9816], null));
});})(seq__9040_9778,chunk__9041_9779,count__9042_9780,i__9043_9781,seq__8893_9652,chunk__8894_9653,count__8895_9654,i__8896_9655,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9072_9812,map__9072_9813__$1,gline_9814,gcol_9815,name_9816,seq__9040_9806__$1,temp__5735__auto___9803__$1,vec__9037_9775,column_9776,column_info_9777,seq__8893_9769__$1,temp__5735__auto___9768,vec__8890_9649,line_9650,columns_9651,inverted))
,cljs.core.sorted_map()));


var G__9831 = cljs.core.next(seq__9040_9806__$1);
var G__9832 = null;
var G__9833 = (0);
var G__9834 = (0);
seq__9040_9778 = G__9831;
chunk__9041_9779 = G__9832;
count__9042_9780 = G__9833;
i__9043_9781 = G__9834;
continue;
}
} else {
}
}
break;
}


var G__9835 = cljs.core.next(seq__8893_9769__$1);
var G__9836 = null;
var G__9837 = (0);
var G__9838 = (0);
seq__8893_9652 = G__9835;
chunk__8894_9653 = G__9836;
count__8895_9654 = G__9837;
i__8896_9655 = G__9838;
continue;
}
} else {
}
}
break;
}


var G__9839 = seq__8562_9645;
var G__9840 = chunk__8563_9646;
var G__9841 = count__8564_9647;
var G__9842 = (i__8565_9648 + (1));
seq__8562_9645 = G__9839;
chunk__8563_9646 = G__9840;
count__8564_9647 = G__9841;
i__8565_9648 = G__9842;
continue;
} else {
var temp__5735__auto___9844 = cljs.core.seq(seq__8562_9645);
if(temp__5735__auto___9844){
var seq__8562_9845__$1 = temp__5735__auto___9844;
if(cljs.core.chunked_seq_QMARK_(seq__8562_9845__$1)){
var c__4556__auto___9846 = cljs.core.chunk_first(seq__8562_9845__$1);
var G__9848 = cljs.core.chunk_rest(seq__8562_9845__$1);
var G__9849 = c__4556__auto___9846;
var G__9850 = cljs.core.count(c__4556__auto___9846);
var G__9851 = (0);
seq__8562_9645 = G__9848;
chunk__8563_9646 = G__9849;
count__8564_9647 = G__9850;
i__8565_9648 = G__9851;
continue;
} else {
var vec__9077_9852 = cljs.core.first(seq__8562_9845__$1);
var line_9853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077_9852,(0),null);
var columns_9854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9077_9852,(1),null);
var seq__9080_9856 = cljs.core.seq(columns_9854);
var chunk__9081_9857 = null;
var count__9082_9858 = (0);
var i__9083_9859 = (0);
while(true){
if((i__9083_9859 < count__9082_9858)){
var vec__9148_9862 = chunk__9081_9857.cljs$core$IIndexed$_nth$arity$2(null,i__9083_9859);
var column_9863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9148_9862,(0),null);
var column_info_9864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9148_9862,(1),null);
var seq__9151_9867 = cljs.core.seq(column_info_9864);
var chunk__9152_9868 = null;
var count__9153_9869 = (0);
var i__9154_9870 = (0);
while(true){
if((i__9154_9870 < count__9153_9869)){
var map__9171_9871 = chunk__9152_9868.cljs$core$IIndexed$_nth$arity$2(null,i__9154_9870);
var map__9171_9872__$1 = (((((!((map__9171_9871 == null))))?(((((map__9171_9871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9171_9871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9171_9871):map__9171_9871);
var gline_9873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9171_9872__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9171_9872__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9171_9872__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9873], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9151_9867,chunk__9152_9868,count__9153_9869,i__9154_9870,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9171_9871,map__9171_9872__$1,gline_9873,gcol_9874,name_9875,vec__9148_9862,column_9863,column_info_9864,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9874], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9853,new cljs.core.Keyword(null,"col","col",-1959363084),column_9863,new cljs.core.Keyword(null,"name","name",1843675177),name_9875], null));
});})(seq__9151_9867,chunk__9152_9868,count__9153_9869,i__9154_9870,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9171_9871,map__9171_9872__$1,gline_9873,gcol_9874,name_9875,vec__9148_9862,column_9863,column_info_9864,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted))
,cljs.core.sorted_map()));


var G__9885 = seq__9151_9867;
var G__9886 = chunk__9152_9868;
var G__9887 = count__9153_9869;
var G__9888 = (i__9154_9870 + (1));
seq__9151_9867 = G__9885;
chunk__9152_9868 = G__9886;
count__9153_9869 = G__9887;
i__9154_9870 = G__9888;
continue;
} else {
var temp__5735__auto___9891__$1 = cljs.core.seq(seq__9151_9867);
if(temp__5735__auto___9891__$1){
var seq__9151_9892__$1 = temp__5735__auto___9891__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9151_9892__$1)){
var c__4556__auto___9894 = cljs.core.chunk_first(seq__9151_9892__$1);
var G__9896 = cljs.core.chunk_rest(seq__9151_9892__$1);
var G__9897 = c__4556__auto___9894;
var G__9898 = cljs.core.count(c__4556__auto___9894);
var G__9899 = (0);
seq__9151_9867 = G__9896;
chunk__9152_9868 = G__9897;
count__9153_9869 = G__9898;
i__9154_9870 = G__9899;
continue;
} else {
var map__9175_9902 = cljs.core.first(seq__9151_9892__$1);
var map__9175_9903__$1 = (((((!((map__9175_9902 == null))))?(((((map__9175_9902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9175_9902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9175_9902):map__9175_9902);
var gline_9904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9175_9903__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9175_9903__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9175_9903__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9904], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9151_9867,chunk__9152_9868,count__9153_9869,i__9154_9870,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9175_9902,map__9175_9903__$1,gline_9904,gcol_9905,name_9906,seq__9151_9892__$1,temp__5735__auto___9891__$1,vec__9148_9862,column_9863,column_info_9864,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9905], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9853,new cljs.core.Keyword(null,"col","col",-1959363084),column_9863,new cljs.core.Keyword(null,"name","name",1843675177),name_9906], null));
});})(seq__9151_9867,chunk__9152_9868,count__9153_9869,i__9154_9870,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9175_9902,map__9175_9903__$1,gline_9904,gcol_9905,name_9906,seq__9151_9892__$1,temp__5735__auto___9891__$1,vec__9148_9862,column_9863,column_info_9864,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted))
,cljs.core.sorted_map()));


var G__9914 = cljs.core.next(seq__9151_9892__$1);
var G__9915 = null;
var G__9916 = (0);
var G__9917 = (0);
seq__9151_9867 = G__9914;
chunk__9152_9868 = G__9915;
count__9153_9869 = G__9916;
i__9154_9870 = G__9917;
continue;
}
} else {
}
}
break;
}


var G__9918 = seq__9080_9856;
var G__9919 = chunk__9081_9857;
var G__9920 = count__9082_9858;
var G__9921 = (i__9083_9859 + (1));
seq__9080_9856 = G__9918;
chunk__9081_9857 = G__9919;
count__9082_9858 = G__9920;
i__9083_9859 = G__9921;
continue;
} else {
var temp__5735__auto___9922__$1 = cljs.core.seq(seq__9080_9856);
if(temp__5735__auto___9922__$1){
var seq__9080_9923__$1 = temp__5735__auto___9922__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9080_9923__$1)){
var c__4556__auto___9924 = cljs.core.chunk_first(seq__9080_9923__$1);
var G__9926 = cljs.core.chunk_rest(seq__9080_9923__$1);
var G__9927 = c__4556__auto___9924;
var G__9928 = cljs.core.count(c__4556__auto___9924);
var G__9929 = (0);
seq__9080_9856 = G__9926;
chunk__9081_9857 = G__9927;
count__9082_9858 = G__9928;
i__9083_9859 = G__9929;
continue;
} else {
var vec__9192_9930 = cljs.core.first(seq__9080_9923__$1);
var column_9931 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9192_9930,(0),null);
var column_info_9932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9192_9930,(1),null);
var seq__9195_9937 = cljs.core.seq(column_info_9932);
var chunk__9196_9938 = null;
var count__9197_9939 = (0);
var i__9198_9940 = (0);
while(true){
if((i__9198_9940 < count__9197_9939)){
var map__9223_9941 = chunk__9196_9938.cljs$core$IIndexed$_nth$arity$2(null,i__9198_9940);
var map__9223_9942__$1 = (((((!((map__9223_9941 == null))))?(((((map__9223_9941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9223_9941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9223_9941):map__9223_9941);
var gline_9943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9223_9942__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9223_9942__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9223_9942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9943], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9195_9937,chunk__9196_9938,count__9197_9939,i__9198_9940,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9223_9941,map__9223_9942__$1,gline_9943,gcol_9944,name_9945,vec__9192_9930,column_9931,column_info_9932,seq__9080_9923__$1,temp__5735__auto___9922__$1,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9944], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9853,new cljs.core.Keyword(null,"col","col",-1959363084),column_9931,new cljs.core.Keyword(null,"name","name",1843675177),name_9945], null));
});})(seq__9195_9937,chunk__9196_9938,count__9197_9939,i__9198_9940,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9223_9941,map__9223_9942__$1,gline_9943,gcol_9944,name_9945,vec__9192_9930,column_9931,column_info_9932,seq__9080_9923__$1,temp__5735__auto___9922__$1,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted))
,cljs.core.sorted_map()));


var G__9961 = seq__9195_9937;
var G__9962 = chunk__9196_9938;
var G__9963 = count__9197_9939;
var G__9964 = (i__9198_9940 + (1));
seq__9195_9937 = G__9961;
chunk__9196_9938 = G__9962;
count__9197_9939 = G__9963;
i__9198_9940 = G__9964;
continue;
} else {
var temp__5735__auto___9965__$2 = cljs.core.seq(seq__9195_9937);
if(temp__5735__auto___9965__$2){
var seq__9195_9967__$1 = temp__5735__auto___9965__$2;
if(cljs.core.chunked_seq_QMARK_(seq__9195_9967__$1)){
var c__4556__auto___9969 = cljs.core.chunk_first(seq__9195_9967__$1);
var G__9970 = cljs.core.chunk_rest(seq__9195_9967__$1);
var G__9971 = c__4556__auto___9969;
var G__9972 = cljs.core.count(c__4556__auto___9969);
var G__9973 = (0);
seq__9195_9937 = G__9970;
chunk__9196_9938 = G__9971;
count__9197_9939 = G__9972;
i__9198_9940 = G__9973;
continue;
} else {
var map__9242_9975 = cljs.core.first(seq__9195_9967__$1);
var map__9242_9976__$1 = (((((!((map__9242_9975 == null))))?(((((map__9242_9975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9242_9975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9242_9975):map__9242_9975);
var gline_9977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9242_9976__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_9978 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9242_9976__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_9979 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9242_9976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_9977], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__9195_9937,chunk__9196_9938,count__9197_9939,i__9198_9940,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9242_9975,map__9242_9976__$1,gline_9977,gcol_9978,name_9979,seq__9195_9967__$1,temp__5735__auto___9965__$2,vec__9192_9930,column_9931,column_info_9932,seq__9080_9923__$1,temp__5735__auto___9922__$1,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_9978], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_9853,new cljs.core.Keyword(null,"col","col",-1959363084),column_9931,new cljs.core.Keyword(null,"name","name",1843675177),name_9979], null));
});})(seq__9195_9937,chunk__9196_9938,count__9197_9939,i__9198_9940,seq__9080_9856,chunk__9081_9857,count__9082_9858,i__9083_9859,seq__8562_9645,chunk__8563_9646,count__8564_9647,i__8565_9648,map__9242_9975,map__9242_9976__$1,gline_9977,gcol_9978,name_9979,seq__9195_9967__$1,temp__5735__auto___9965__$2,vec__9192_9930,column_9931,column_info_9932,seq__9080_9923__$1,temp__5735__auto___9922__$1,vec__9077_9852,line_9853,columns_9854,seq__8562_9845__$1,temp__5735__auto___9844,inverted))
,cljs.core.sorted_map()));


var G__10002 = cljs.core.next(seq__9195_9967__$1);
var G__10003 = null;
var G__10004 = (0);
var G__10005 = (0);
seq__9195_9937 = G__10002;
chunk__9196_9938 = G__10003;
count__9197_9939 = G__10004;
i__9198_9940 = G__10005;
continue;
}
} else {
}
}
break;
}


var G__10006 = cljs.core.next(seq__9080_9923__$1);
var G__10007 = null;
var G__10008 = (0);
var G__10009 = (0);
seq__9080_9856 = G__10006;
chunk__9081_9857 = G__10007;
count__9082_9858 = G__10008;
i__9083_9859 = G__10009;
continue;
}
} else {
}
}
break;
}


var G__10011 = cljs.core.next(seq__8562_9845__$1);
var G__10012 = null;
var G__10013 = (0);
var G__10014 = (0);
seq__8562_9645 = G__10011;
chunk__8563_9646 = G__10012;
count__8564_9647 = G__10013;
i__8565_9648 = G__10014;
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
