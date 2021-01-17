goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13757){
var vec__13758 = p__13757;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13758,(1),null);
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
var vec__13766 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13766,(4),null);
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
var vec__13788 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13788,(4),null);
var vec__13791 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13791,(4),null);
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
var map__13817 = segmap;
var map__13817__$1 = (((((!((map__13817 == null))))?(((((map__13817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13817):map__13817);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13817__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13817__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13817__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13817__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13817__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__13835 = arguments.length;
switch (G__13835) {
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
var vec__13857 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15308 = cljs.core.next(segs__$1);
var G__15309 = nrelseg;
var G__15310 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15308;
relseg__$1 = G__15309;
result__$1 = G__15310;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857,(1),null);
var G__15315 = (gline + (1));
var G__15316 = cljs.core.next(lines__$1);
var G__15317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15318 = result__$1;
gline = G__15315;
lines__$1 = G__15316;
relseg = G__15317;
result = G__15318;
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
var map__13870 = segmap;
var map__13870__$1 = (((((!((map__13870 == null))))?(((((map__13870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13870):map__13870);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13870__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13870__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13870__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13870__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__13869_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13869_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__13899 = arguments.length;
switch (G__13899) {
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
var vec__13911 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15397 = cljs.core.next(segs__$1);
var G__15398 = nrelseg;
var G__15399 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15397;
relseg__$1 = G__15398;
result__$1 = G__15399;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13911,(1),null);
var G__15405 = (gline + (1));
var G__15406 = cljs.core.next(lines__$1);
var G__15407 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15408 = result__$1;
gline = G__15405;
lines__$1 = G__15406;
relseg = G__15407;
result = G__15408;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__13920){
var vec__13922 = p__13920;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13922,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__13927){
var vec__13940 = p__13927;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13940,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13940,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13940,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13940,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13940,(4),null);
var seg = vec__13940;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__13944){
var vec__13945 = p__13944;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13945,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13945,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13945,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13945,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13945,(4),null);
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
var seq__13954 = cljs.core.seq(infos);
var chunk__13955 = null;
var count__13956 = (0);
var i__13957 = (0);
while(true){
if((i__13957 < count__13956)){
var info = chunk__13955.cljs$core$IIndexed$_nth$arity$2(null,i__13957);
var segv_15458 = info__GT_segv(info,source_idx,line,col);
var gline_15459 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15460 = cljs.core.count(cljs.core.deref(lines));
if((gline_15459 > (lc_15460 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13954,chunk__13955,count__13956,i__13957,segv_15458,gline_15459,lc_15460,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15459 - (lc_15460 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15458], null));
});})(seq__13954,chunk__13955,count__13956,i__13957,segv_15458,gline_15459,lc_15460,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13954,chunk__13955,count__13956,i__13957,segv_15458,gline_15459,lc_15460,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15459], null),cljs.core.conj,segv_15458);
});})(seq__13954,chunk__13955,count__13956,i__13957,segv_15458,gline_15459,lc_15460,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__15482 = seq__13954;
var G__15483 = chunk__13955;
var G__15484 = count__13956;
var G__15485 = (i__13957 + (1));
seq__13954 = G__15482;
chunk__13955 = G__15483;
count__13956 = G__15484;
i__13957 = G__15485;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13954);
if(temp__5735__auto__){
var seq__13954__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13954__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13954__$1);
var G__15486 = cljs.core.chunk_rest(seq__13954__$1);
var G__15487 = c__4556__auto__;
var G__15488 = cljs.core.count(c__4556__auto__);
var G__15489 = (0);
seq__13954 = G__15486;
chunk__13955 = G__15487;
count__13956 = G__15488;
i__13957 = G__15489;
continue;
} else {
var info = cljs.core.first(seq__13954__$1);
var segv_15493 = info__GT_segv(info,source_idx,line,col);
var gline_15494 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15495 = cljs.core.count(cljs.core.deref(lines));
if((gline_15494 > (lc_15495 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13954,chunk__13955,count__13956,i__13957,segv_15493,gline_15494,lc_15495,info,seq__13954__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15494 - (lc_15495 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15493], null));
});})(seq__13954,chunk__13955,count__13956,i__13957,segv_15493,gline_15494,lc_15495,info,seq__13954__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13954,chunk__13955,count__13956,i__13957,segv_15493,gline_15494,lc_15495,info,seq__13954__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15494], null),cljs.core.conj,segv_15493);
});})(seq__13954,chunk__13955,count__13956,i__13957,segv_15493,gline_15494,lc_15495,info,seq__13954__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__15498 = cljs.core.next(seq__13954__$1);
var G__15499 = null;
var G__15500 = (0);
var G__15501 = (0);
seq__13954 = G__15498;
chunk__13955 = G__15499;
count__13956 = G__15500;
i__13957 = G__15501;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__13962_15503 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13963_15504 = null;
var count__13964_15505 = (0);
var i__13965_15506 = (0);
while(true){
if((i__13965_15506 < count__13964_15505)){
var vec__14278_15507 = chunk__13963_15504.cljs$core$IIndexed$_nth$arity$2(null,i__13965_15506);
var source_idx_15508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14278_15507,(0),null);
var vec__14281_15509 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14278_15507,(1),null);
var __15510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14281_15509,(0),null);
var lines_15511__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14281_15509,(1),null);
var seq__14284_15514 = cljs.core.seq(lines_15511__$1);
var chunk__14285_15515 = null;
var count__14286_15516 = (0);
var i__14287_15517 = (0);
while(true){
if((i__14287_15517 < count__14286_15516)){
var vec__14347_15518 = chunk__14285_15515.cljs$core$IIndexed$_nth$arity$2(null,i__14287_15517);
var line_15519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347_15518,(0),null);
var cols_15520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14347_15518,(1),null);
var seq__14350_15521 = cljs.core.seq(cols_15520);
var chunk__14352_15522 = null;
var count__14353_15523 = (0);
var i__14354_15524 = (0);
while(true){
if((i__14354_15524 < count__14353_15523)){
var vec__14362_15525 = chunk__14352_15522.cljs$core$IIndexed$_nth$arity$2(null,i__14354_15524);
var col_15526 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14362_15525,(0),null);
var infos_15527 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14362_15525,(1),null);
encode_cols(infos_15527,source_idx_15508,line_15519,col_15526);


var G__15528 = seq__14350_15521;
var G__15529 = chunk__14352_15522;
var G__15530 = count__14353_15523;
var G__15531 = (i__14354_15524 + (1));
seq__14350_15521 = G__15528;
chunk__14352_15522 = G__15529;
count__14353_15523 = G__15530;
i__14354_15524 = G__15531;
continue;
} else {
var temp__5735__auto___15532 = cljs.core.seq(seq__14350_15521);
if(temp__5735__auto___15532){
var seq__14350_15533__$1 = temp__5735__auto___15532;
if(cljs.core.chunked_seq_QMARK_(seq__14350_15533__$1)){
var c__4556__auto___15534 = cljs.core.chunk_first(seq__14350_15533__$1);
var G__15535 = cljs.core.chunk_rest(seq__14350_15533__$1);
var G__15536 = c__4556__auto___15534;
var G__15537 = cljs.core.count(c__4556__auto___15534);
var G__15538 = (0);
seq__14350_15521 = G__15535;
chunk__14352_15522 = G__15536;
count__14353_15523 = G__15537;
i__14354_15524 = G__15538;
continue;
} else {
var vec__14366_15539 = cljs.core.first(seq__14350_15533__$1);
var col_15540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366_15539,(0),null);
var infos_15541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14366_15539,(1),null);
encode_cols(infos_15541,source_idx_15508,line_15519,col_15540);


var G__15542 = cljs.core.next(seq__14350_15533__$1);
var G__15543 = null;
var G__15544 = (0);
var G__15545 = (0);
seq__14350_15521 = G__15542;
chunk__14352_15522 = G__15543;
count__14353_15523 = G__15544;
i__14354_15524 = G__15545;
continue;
}
} else {
}
}
break;
}


var G__15546 = seq__14284_15514;
var G__15547 = chunk__14285_15515;
var G__15548 = count__14286_15516;
var G__15549 = (i__14287_15517 + (1));
seq__14284_15514 = G__15546;
chunk__14285_15515 = G__15547;
count__14286_15516 = G__15548;
i__14287_15517 = G__15549;
continue;
} else {
var temp__5735__auto___15550 = cljs.core.seq(seq__14284_15514);
if(temp__5735__auto___15550){
var seq__14284_15551__$1 = temp__5735__auto___15550;
if(cljs.core.chunked_seq_QMARK_(seq__14284_15551__$1)){
var c__4556__auto___15552 = cljs.core.chunk_first(seq__14284_15551__$1);
var G__15553 = cljs.core.chunk_rest(seq__14284_15551__$1);
var G__15554 = c__4556__auto___15552;
var G__15555 = cljs.core.count(c__4556__auto___15552);
var G__15556 = (0);
seq__14284_15514 = G__15553;
chunk__14285_15515 = G__15554;
count__14286_15516 = G__15555;
i__14287_15517 = G__15556;
continue;
} else {
var vec__14370_15559 = cljs.core.first(seq__14284_15551__$1);
var line_15560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370_15559,(0),null);
var cols_15561 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14370_15559,(1),null);
var seq__14375_15568 = cljs.core.seq(cols_15561);
var chunk__14376_15569 = null;
var count__14377_15570 = (0);
var i__14378_15571 = (0);
while(true){
if((i__14378_15571 < count__14377_15570)){
var vec__14391_15572 = chunk__14376_15569.cljs$core$IIndexed$_nth$arity$2(null,i__14378_15571);
var col_15573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391_15572,(0),null);
var infos_15574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14391_15572,(1),null);
encode_cols(infos_15574,source_idx_15508,line_15560,col_15573);


var G__15575 = seq__14375_15568;
var G__15576 = chunk__14376_15569;
var G__15577 = count__14377_15570;
var G__15578 = (i__14378_15571 + (1));
seq__14375_15568 = G__15575;
chunk__14376_15569 = G__15576;
count__14377_15570 = G__15577;
i__14378_15571 = G__15578;
continue;
} else {
var temp__5735__auto___15582__$1 = cljs.core.seq(seq__14375_15568);
if(temp__5735__auto___15582__$1){
var seq__14375_15583__$1 = temp__5735__auto___15582__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14375_15583__$1)){
var c__4556__auto___15584 = cljs.core.chunk_first(seq__14375_15583__$1);
var G__15585 = cljs.core.chunk_rest(seq__14375_15583__$1);
var G__15586 = c__4556__auto___15584;
var G__15587 = cljs.core.count(c__4556__auto___15584);
var G__15588 = (0);
seq__14375_15568 = G__15585;
chunk__14376_15569 = G__15586;
count__14377_15570 = G__15587;
i__14378_15571 = G__15588;
continue;
} else {
var vec__14395_15590 = cljs.core.first(seq__14375_15583__$1);
var col_15591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395_15590,(0),null);
var infos_15592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14395_15590,(1),null);
encode_cols(infos_15592,source_idx_15508,line_15560,col_15591);


var G__15593 = cljs.core.next(seq__14375_15583__$1);
var G__15594 = null;
var G__15595 = (0);
var G__15596 = (0);
seq__14375_15568 = G__15593;
chunk__14376_15569 = G__15594;
count__14377_15570 = G__15595;
i__14378_15571 = G__15596;
continue;
}
} else {
}
}
break;
}


var G__15597 = cljs.core.next(seq__14284_15551__$1);
var G__15598 = null;
var G__15599 = (0);
var G__15600 = (0);
seq__14284_15514 = G__15597;
chunk__14285_15515 = G__15598;
count__14286_15516 = G__15599;
i__14287_15517 = G__15600;
continue;
}
} else {
}
}
break;
}


var G__15601 = seq__13962_15503;
var G__15602 = chunk__13963_15504;
var G__15603 = count__13964_15505;
var G__15604 = (i__13965_15506 + (1));
seq__13962_15503 = G__15601;
chunk__13963_15504 = G__15602;
count__13964_15505 = G__15603;
i__13965_15506 = G__15604;
continue;
} else {
var temp__5735__auto___15607 = cljs.core.seq(seq__13962_15503);
if(temp__5735__auto___15607){
var seq__13962_15608__$1 = temp__5735__auto___15607;
if(cljs.core.chunked_seq_QMARK_(seq__13962_15608__$1)){
var c__4556__auto___15609 = cljs.core.chunk_first(seq__13962_15608__$1);
var G__15611 = cljs.core.chunk_rest(seq__13962_15608__$1);
var G__15612 = c__4556__auto___15609;
var G__15613 = cljs.core.count(c__4556__auto___15609);
var G__15614 = (0);
seq__13962_15503 = G__15611;
chunk__13963_15504 = G__15612;
count__13964_15505 = G__15613;
i__13965_15506 = G__15614;
continue;
} else {
var vec__14399_15617 = cljs.core.first(seq__13962_15608__$1);
var source_idx_15618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399_15617,(0),null);
var vec__14402_15619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14399_15617,(1),null);
var __15620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14402_15619,(0),null);
var lines_15621__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14402_15619,(1),null);
var seq__14405_15623 = cljs.core.seq(lines_15621__$1);
var chunk__14406_15624 = null;
var count__14407_15625 = (0);
var i__14408_15626 = (0);
while(true){
if((i__14408_15626 < count__14407_15625)){
var vec__14469_15627 = chunk__14406_15624.cljs$core$IIndexed$_nth$arity$2(null,i__14408_15626);
var line_15628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14469_15627,(0),null);
var cols_15629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14469_15627,(1),null);
var seq__14472_15630 = cljs.core.seq(cols_15629);
var chunk__14473_15631 = null;
var count__14474_15632 = (0);
var i__14475_15633 = (0);
while(true){
if((i__14475_15633 < count__14474_15632)){
var vec__14486_15634 = chunk__14473_15631.cljs$core$IIndexed$_nth$arity$2(null,i__14475_15633);
var col_15635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14486_15634,(0),null);
var infos_15636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14486_15634,(1),null);
encode_cols(infos_15636,source_idx_15618,line_15628,col_15635);


var G__15637 = seq__14472_15630;
var G__15638 = chunk__14473_15631;
var G__15639 = count__14474_15632;
var G__15640 = (i__14475_15633 + (1));
seq__14472_15630 = G__15637;
chunk__14473_15631 = G__15638;
count__14474_15632 = G__15639;
i__14475_15633 = G__15640;
continue;
} else {
var temp__5735__auto___15644__$1 = cljs.core.seq(seq__14472_15630);
if(temp__5735__auto___15644__$1){
var seq__14472_15645__$1 = temp__5735__auto___15644__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14472_15645__$1)){
var c__4556__auto___15646 = cljs.core.chunk_first(seq__14472_15645__$1);
var G__15647 = cljs.core.chunk_rest(seq__14472_15645__$1);
var G__15648 = c__4556__auto___15646;
var G__15649 = cljs.core.count(c__4556__auto___15646);
var G__15650 = (0);
seq__14472_15630 = G__15647;
chunk__14473_15631 = G__15648;
count__14474_15632 = G__15649;
i__14475_15633 = G__15650;
continue;
} else {
var vec__14506_15651 = cljs.core.first(seq__14472_15645__$1);
var col_15652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14506_15651,(0),null);
var infos_15653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14506_15651,(1),null);
encode_cols(infos_15653,source_idx_15618,line_15628,col_15652);


var G__15658 = cljs.core.next(seq__14472_15645__$1);
var G__15659 = null;
var G__15660 = (0);
var G__15661 = (0);
seq__14472_15630 = G__15658;
chunk__14473_15631 = G__15659;
count__14474_15632 = G__15660;
i__14475_15633 = G__15661;
continue;
}
} else {
}
}
break;
}


var G__15664 = seq__14405_15623;
var G__15665 = chunk__14406_15624;
var G__15666 = count__14407_15625;
var G__15667 = (i__14408_15626 + (1));
seq__14405_15623 = G__15664;
chunk__14406_15624 = G__15665;
count__14407_15625 = G__15666;
i__14408_15626 = G__15667;
continue;
} else {
var temp__5735__auto___15668__$1 = cljs.core.seq(seq__14405_15623);
if(temp__5735__auto___15668__$1){
var seq__14405_15669__$1 = temp__5735__auto___15668__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14405_15669__$1)){
var c__4556__auto___15670 = cljs.core.chunk_first(seq__14405_15669__$1);
var G__15671 = cljs.core.chunk_rest(seq__14405_15669__$1);
var G__15672 = c__4556__auto___15670;
var G__15673 = cljs.core.count(c__4556__auto___15670);
var G__15674 = (0);
seq__14405_15623 = G__15671;
chunk__14406_15624 = G__15672;
count__14407_15625 = G__15673;
i__14408_15626 = G__15674;
continue;
} else {
var vec__14511_15675 = cljs.core.first(seq__14405_15669__$1);
var line_15676 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511_15675,(0),null);
var cols_15677 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14511_15675,(1),null);
var seq__14515_15680 = cljs.core.seq(cols_15677);
var chunk__14519_15681 = null;
var count__14520_15682 = (0);
var i__14521_15683 = (0);
while(true){
if((i__14521_15683 < count__14520_15682)){
var vec__14529_15684 = chunk__14519_15681.cljs$core$IIndexed$_nth$arity$2(null,i__14521_15683);
var col_15685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14529_15684,(0),null);
var infos_15686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14529_15684,(1),null);
encode_cols(infos_15686,source_idx_15618,line_15676,col_15685);


var G__15689 = seq__14515_15680;
var G__15690 = chunk__14519_15681;
var G__15691 = count__14520_15682;
var G__15692 = (i__14521_15683 + (1));
seq__14515_15680 = G__15689;
chunk__14519_15681 = G__15690;
count__14520_15682 = G__15691;
i__14521_15683 = G__15692;
continue;
} else {
var temp__5735__auto___15700__$2 = cljs.core.seq(seq__14515_15680);
if(temp__5735__auto___15700__$2){
var seq__14515_15701__$1 = temp__5735__auto___15700__$2;
if(cljs.core.chunked_seq_QMARK_(seq__14515_15701__$1)){
var c__4556__auto___15702 = cljs.core.chunk_first(seq__14515_15701__$1);
var G__15703 = cljs.core.chunk_rest(seq__14515_15701__$1);
var G__15704 = c__4556__auto___15702;
var G__15705 = cljs.core.count(c__4556__auto___15702);
var G__15706 = (0);
seq__14515_15680 = G__15703;
chunk__14519_15681 = G__15704;
count__14520_15682 = G__15705;
i__14521_15683 = G__15706;
continue;
} else {
var vec__14532_15709 = cljs.core.first(seq__14515_15701__$1);
var col_15710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14532_15709,(0),null);
var infos_15711 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14532_15709,(1),null);
encode_cols(infos_15711,source_idx_15618,line_15676,col_15710);


var G__15713 = cljs.core.next(seq__14515_15701__$1);
var G__15714 = null;
var G__15715 = (0);
var G__15716 = (0);
seq__14515_15680 = G__15713;
chunk__14519_15681 = G__15714;
count__14520_15682 = G__15715;
i__14521_15683 = G__15716;
continue;
}
} else {
}
}
break;
}


var G__15717 = cljs.core.next(seq__14405_15669__$1);
var G__15718 = null;
var G__15719 = (0);
var G__15720 = (0);
seq__14405_15623 = G__15717;
chunk__14406_15624 = G__15718;
count__14407_15625 = G__15719;
i__14408_15626 = G__15720;
continue;
}
} else {
}
}
break;
}


var G__15721 = cljs.core.next(seq__13962_15608__$1);
var G__15722 = null;
var G__15723 = (0);
var G__15724 = (0);
seq__13962_15503 = G__15721;
chunk__13963_15504 = G__15722;
count__13964_15505 = G__15723;
i__13965_15506 = G__15724;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14535 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__13951_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13951_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__13952_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__13952_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13953_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__13953_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__14542 = G__14535;
goog.object.set(G__14542,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14542;
} else {
return G__14535;
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
var vec__14547 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14547,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__14550 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14550,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14550,(1),null);
var G__15727 = cljs.core.next(col_map_seq);
var G__15728 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14550,col,infos,vec__14547,line,col_map){
return (function (v,p__14553){
var map__14554 = p__14553;
var map__14554__$1 = (((((!((map__14554 == null))))?(((((map__14554.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14554.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14554):map__14554);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14554__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14554__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14550,col,infos,vec__14547,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15727;
new_cols = G__15728;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__15731 = cljs.core.next(line_map_seq);
var G__15732 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__15731;
new_lines = G__15732;
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
var seq__14557_15734 = cljs.core.seq(reverse_map);
var chunk__14558_15735 = null;
var count__14559_15736 = (0);
var i__14560_15737 = (0);
while(true){
if((i__14560_15737 < count__14559_15736)){
var vec__14917_15738 = chunk__14558_15735.cljs$core$IIndexed$_nth$arity$2(null,i__14560_15737);
var line_15739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14917_15738,(0),null);
var columns_15740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14917_15738,(1),null);
var seq__14920_15741 = cljs.core.seq(columns_15740);
var chunk__14921_15742 = null;
var count__14922_15743 = (0);
var i__14923_15744 = (0);
while(true){
if((i__14923_15744 < count__14922_15743)){
var vec__15009_15745 = chunk__14921_15742.cljs$core$IIndexed$_nth$arity$2(null,i__14923_15744);
var column_15746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009_15745,(0),null);
var column_info_15747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15009_15745,(1),null);
var seq__15012_15748 = cljs.core.seq(column_info_15747);
var chunk__15013_15749 = null;
var count__15014_15750 = (0);
var i__15015_15751 = (0);
while(true){
if((i__15015_15751 < count__15014_15750)){
var map__15026_15752 = chunk__15013_15749.cljs$core$IIndexed$_nth$arity$2(null,i__15015_15751);
var map__15026_15753__$1 = (((((!((map__15026_15752 == null))))?(((((map__15026_15752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15026_15752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15026_15752):map__15026_15752);
var gline_15754 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026_15753__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15755 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026_15753__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15026_15753__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15754], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15012_15748,chunk__15013_15749,count__15014_15750,i__15015_15751,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15026_15752,map__15026_15753__$1,gline_15754,gcol_15755,name_15756,vec__15009_15745,column_15746,column_info_15747,vec__14917_15738,line_15739,columns_15740,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15755], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15739,new cljs.core.Keyword(null,"col","col",-1959363084),column_15746,new cljs.core.Keyword(null,"name","name",1843675177),name_15756], null));
});})(seq__15012_15748,chunk__15013_15749,count__15014_15750,i__15015_15751,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15026_15752,map__15026_15753__$1,gline_15754,gcol_15755,name_15756,vec__15009_15745,column_15746,column_info_15747,vec__14917_15738,line_15739,columns_15740,inverted))
,cljs.core.sorted_map()));


var G__15757 = seq__15012_15748;
var G__15758 = chunk__15013_15749;
var G__15759 = count__15014_15750;
var G__15760 = (i__15015_15751 + (1));
seq__15012_15748 = G__15757;
chunk__15013_15749 = G__15758;
count__15014_15750 = G__15759;
i__15015_15751 = G__15760;
continue;
} else {
var temp__5735__auto___15761 = cljs.core.seq(seq__15012_15748);
if(temp__5735__auto___15761){
var seq__15012_15762__$1 = temp__5735__auto___15761;
if(cljs.core.chunked_seq_QMARK_(seq__15012_15762__$1)){
var c__4556__auto___15763 = cljs.core.chunk_first(seq__15012_15762__$1);
var G__15764 = cljs.core.chunk_rest(seq__15012_15762__$1);
var G__15765 = c__4556__auto___15763;
var G__15766 = cljs.core.count(c__4556__auto___15763);
var G__15767 = (0);
seq__15012_15748 = G__15764;
chunk__15013_15749 = G__15765;
count__15014_15750 = G__15766;
i__15015_15751 = G__15767;
continue;
} else {
var map__15040_15768 = cljs.core.first(seq__15012_15762__$1);
var map__15040_15769__$1 = (((((!((map__15040_15768 == null))))?(((((map__15040_15768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15040_15768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15040_15768):map__15040_15768);
var gline_15770 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15040_15769__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15771 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15040_15769__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15772 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15040_15769__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15770], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15012_15748,chunk__15013_15749,count__15014_15750,i__15015_15751,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15040_15768,map__15040_15769__$1,gline_15770,gcol_15771,name_15772,seq__15012_15762__$1,temp__5735__auto___15761,vec__15009_15745,column_15746,column_info_15747,vec__14917_15738,line_15739,columns_15740,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15771], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15739,new cljs.core.Keyword(null,"col","col",-1959363084),column_15746,new cljs.core.Keyword(null,"name","name",1843675177),name_15772], null));
});})(seq__15012_15748,chunk__15013_15749,count__15014_15750,i__15015_15751,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15040_15768,map__15040_15769__$1,gline_15770,gcol_15771,name_15772,seq__15012_15762__$1,temp__5735__auto___15761,vec__15009_15745,column_15746,column_info_15747,vec__14917_15738,line_15739,columns_15740,inverted))
,cljs.core.sorted_map()));


var G__15773 = cljs.core.next(seq__15012_15762__$1);
var G__15774 = null;
var G__15775 = (0);
var G__15776 = (0);
seq__15012_15748 = G__15773;
chunk__15013_15749 = G__15774;
count__15014_15750 = G__15775;
i__15015_15751 = G__15776;
continue;
}
} else {
}
}
break;
}


var G__15777 = seq__14920_15741;
var G__15778 = chunk__14921_15742;
var G__15779 = count__14922_15743;
var G__15780 = (i__14923_15744 + (1));
seq__14920_15741 = G__15777;
chunk__14921_15742 = G__15778;
count__14922_15743 = G__15779;
i__14923_15744 = G__15780;
continue;
} else {
var temp__5735__auto___15781 = cljs.core.seq(seq__14920_15741);
if(temp__5735__auto___15781){
var seq__14920_15782__$1 = temp__5735__auto___15781;
if(cljs.core.chunked_seq_QMARK_(seq__14920_15782__$1)){
var c__4556__auto___15783 = cljs.core.chunk_first(seq__14920_15782__$1);
var G__15784 = cljs.core.chunk_rest(seq__14920_15782__$1);
var G__15785 = c__4556__auto___15783;
var G__15786 = cljs.core.count(c__4556__auto___15783);
var G__15787 = (0);
seq__14920_15741 = G__15784;
chunk__14921_15742 = G__15785;
count__14922_15743 = G__15786;
i__14923_15744 = G__15787;
continue;
} else {
var vec__15045_15788 = cljs.core.first(seq__14920_15782__$1);
var column_15789 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15045_15788,(0),null);
var column_info_15790 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15045_15788,(1),null);
var seq__15050_15791 = cljs.core.seq(column_info_15790);
var chunk__15051_15792 = null;
var count__15052_15793 = (0);
var i__15053_15794 = (0);
while(true){
if((i__15053_15794 < count__15052_15793)){
var map__15064_15795 = chunk__15051_15792.cljs$core$IIndexed$_nth$arity$2(null,i__15053_15794);
var map__15064_15796__$1 = (((((!((map__15064_15795 == null))))?(((((map__15064_15795.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15064_15795.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15064_15795):map__15064_15795);
var gline_15797 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15064_15796__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15798 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15064_15796__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15799 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15064_15796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15797], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15050_15791,chunk__15051_15792,count__15052_15793,i__15053_15794,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15064_15795,map__15064_15796__$1,gline_15797,gcol_15798,name_15799,vec__15045_15788,column_15789,column_info_15790,seq__14920_15782__$1,temp__5735__auto___15781,vec__14917_15738,line_15739,columns_15740,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15798], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15739,new cljs.core.Keyword(null,"col","col",-1959363084),column_15789,new cljs.core.Keyword(null,"name","name",1843675177),name_15799], null));
});})(seq__15050_15791,chunk__15051_15792,count__15052_15793,i__15053_15794,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15064_15795,map__15064_15796__$1,gline_15797,gcol_15798,name_15799,vec__15045_15788,column_15789,column_info_15790,seq__14920_15782__$1,temp__5735__auto___15781,vec__14917_15738,line_15739,columns_15740,inverted))
,cljs.core.sorted_map()));


var G__15800 = seq__15050_15791;
var G__15801 = chunk__15051_15792;
var G__15802 = count__15052_15793;
var G__15803 = (i__15053_15794 + (1));
seq__15050_15791 = G__15800;
chunk__15051_15792 = G__15801;
count__15052_15793 = G__15802;
i__15053_15794 = G__15803;
continue;
} else {
var temp__5735__auto___15804__$1 = cljs.core.seq(seq__15050_15791);
if(temp__5735__auto___15804__$1){
var seq__15050_15805__$1 = temp__5735__auto___15804__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15050_15805__$1)){
var c__4556__auto___15806 = cljs.core.chunk_first(seq__15050_15805__$1);
var G__15807 = cljs.core.chunk_rest(seq__15050_15805__$1);
var G__15808 = c__4556__auto___15806;
var G__15809 = cljs.core.count(c__4556__auto___15806);
var G__15810 = (0);
seq__15050_15791 = G__15807;
chunk__15051_15792 = G__15808;
count__15052_15793 = G__15809;
i__15053_15794 = G__15810;
continue;
} else {
var map__15066_15811 = cljs.core.first(seq__15050_15805__$1);
var map__15066_15812__$1 = (((((!((map__15066_15811 == null))))?(((((map__15066_15811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15066_15811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15066_15811):map__15066_15811);
var gline_15813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15066_15812__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15066_15812__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15066_15812__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15813], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15050_15791,chunk__15051_15792,count__15052_15793,i__15053_15794,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15066_15811,map__15066_15812__$1,gline_15813,gcol_15814,name_15815,seq__15050_15805__$1,temp__5735__auto___15804__$1,vec__15045_15788,column_15789,column_info_15790,seq__14920_15782__$1,temp__5735__auto___15781,vec__14917_15738,line_15739,columns_15740,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15814], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15739,new cljs.core.Keyword(null,"col","col",-1959363084),column_15789,new cljs.core.Keyword(null,"name","name",1843675177),name_15815], null));
});})(seq__15050_15791,chunk__15051_15792,count__15052_15793,i__15053_15794,seq__14920_15741,chunk__14921_15742,count__14922_15743,i__14923_15744,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15066_15811,map__15066_15812__$1,gline_15813,gcol_15814,name_15815,seq__15050_15805__$1,temp__5735__auto___15804__$1,vec__15045_15788,column_15789,column_info_15790,seq__14920_15782__$1,temp__5735__auto___15781,vec__14917_15738,line_15739,columns_15740,inverted))
,cljs.core.sorted_map()));


var G__15816 = cljs.core.next(seq__15050_15805__$1);
var G__15817 = null;
var G__15818 = (0);
var G__15819 = (0);
seq__15050_15791 = G__15816;
chunk__15051_15792 = G__15817;
count__15052_15793 = G__15818;
i__15053_15794 = G__15819;
continue;
}
} else {
}
}
break;
}


var G__15820 = cljs.core.next(seq__14920_15782__$1);
var G__15821 = null;
var G__15822 = (0);
var G__15823 = (0);
seq__14920_15741 = G__15820;
chunk__14921_15742 = G__15821;
count__14922_15743 = G__15822;
i__14923_15744 = G__15823;
continue;
}
} else {
}
}
break;
}


var G__15824 = seq__14557_15734;
var G__15825 = chunk__14558_15735;
var G__15826 = count__14559_15736;
var G__15827 = (i__14560_15737 + (1));
seq__14557_15734 = G__15824;
chunk__14558_15735 = G__15825;
count__14559_15736 = G__15826;
i__14560_15737 = G__15827;
continue;
} else {
var temp__5735__auto___15829 = cljs.core.seq(seq__14557_15734);
if(temp__5735__auto___15829){
var seq__14557_15830__$1 = temp__5735__auto___15829;
if(cljs.core.chunked_seq_QMARK_(seq__14557_15830__$1)){
var c__4556__auto___15831 = cljs.core.chunk_first(seq__14557_15830__$1);
var G__15832 = cljs.core.chunk_rest(seq__14557_15830__$1);
var G__15833 = c__4556__auto___15831;
var G__15834 = cljs.core.count(c__4556__auto___15831);
var G__15835 = (0);
seq__14557_15734 = G__15832;
chunk__14558_15735 = G__15833;
count__14559_15736 = G__15834;
i__14560_15737 = G__15835;
continue;
} else {
var vec__15070_15836 = cljs.core.first(seq__14557_15830__$1);
var line_15837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15070_15836,(0),null);
var columns_15838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15070_15836,(1),null);
var seq__15074_15839 = cljs.core.seq(columns_15838);
var chunk__15075_15840 = null;
var count__15076_15841 = (0);
var i__15077_15842 = (0);
while(true){
if((i__15077_15842 < count__15076_15841)){
var vec__15154_15843 = chunk__15075_15840.cljs$core$IIndexed$_nth$arity$2(null,i__15077_15842);
var column_15844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154_15843,(0),null);
var column_info_15845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15154_15843,(1),null);
var seq__15157_15846 = cljs.core.seq(column_info_15845);
var chunk__15158_15847 = null;
var count__15159_15848 = (0);
var i__15160_15849 = (0);
while(true){
if((i__15160_15849 < count__15159_15848)){
var map__15180_15850 = chunk__15158_15847.cljs$core$IIndexed$_nth$arity$2(null,i__15160_15849);
var map__15180_15851__$1 = (((((!((map__15180_15850 == null))))?(((((map__15180_15850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15180_15850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15180_15850):map__15180_15850);
var gline_15852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15180_15851__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15180_15851__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15180_15851__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15852], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15157_15846,chunk__15158_15847,count__15159_15848,i__15160_15849,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15180_15850,map__15180_15851__$1,gline_15852,gcol_15853,name_15854,vec__15154_15843,column_15844,column_info_15845,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15853], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15837,new cljs.core.Keyword(null,"col","col",-1959363084),column_15844,new cljs.core.Keyword(null,"name","name",1843675177),name_15854], null));
});})(seq__15157_15846,chunk__15158_15847,count__15159_15848,i__15160_15849,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15180_15850,map__15180_15851__$1,gline_15852,gcol_15853,name_15854,vec__15154_15843,column_15844,column_info_15845,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted))
,cljs.core.sorted_map()));


var G__15860 = seq__15157_15846;
var G__15861 = chunk__15158_15847;
var G__15862 = count__15159_15848;
var G__15863 = (i__15160_15849 + (1));
seq__15157_15846 = G__15860;
chunk__15158_15847 = G__15861;
count__15159_15848 = G__15862;
i__15160_15849 = G__15863;
continue;
} else {
var temp__5735__auto___15864__$1 = cljs.core.seq(seq__15157_15846);
if(temp__5735__auto___15864__$1){
var seq__15157_15865__$1 = temp__5735__auto___15864__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15157_15865__$1)){
var c__4556__auto___15866 = cljs.core.chunk_first(seq__15157_15865__$1);
var G__15867 = cljs.core.chunk_rest(seq__15157_15865__$1);
var G__15868 = c__4556__auto___15866;
var G__15869 = cljs.core.count(c__4556__auto___15866);
var G__15870 = (0);
seq__15157_15846 = G__15867;
chunk__15158_15847 = G__15868;
count__15159_15848 = G__15869;
i__15160_15849 = G__15870;
continue;
} else {
var map__15197_15871 = cljs.core.first(seq__15157_15865__$1);
var map__15197_15872__$1 = (((((!((map__15197_15871 == null))))?(((((map__15197_15871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15197_15871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15197_15871):map__15197_15871);
var gline_15873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15197_15872__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15197_15872__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15197_15872__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15873], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15157_15846,chunk__15158_15847,count__15159_15848,i__15160_15849,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15197_15871,map__15197_15872__$1,gline_15873,gcol_15874,name_15875,seq__15157_15865__$1,temp__5735__auto___15864__$1,vec__15154_15843,column_15844,column_info_15845,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15874], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15837,new cljs.core.Keyword(null,"col","col",-1959363084),column_15844,new cljs.core.Keyword(null,"name","name",1843675177),name_15875], null));
});})(seq__15157_15846,chunk__15158_15847,count__15159_15848,i__15160_15849,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15197_15871,map__15197_15872__$1,gline_15873,gcol_15874,name_15875,seq__15157_15865__$1,temp__5735__auto___15864__$1,vec__15154_15843,column_15844,column_info_15845,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted))
,cljs.core.sorted_map()));


var G__15876 = cljs.core.next(seq__15157_15865__$1);
var G__15877 = null;
var G__15878 = (0);
var G__15879 = (0);
seq__15157_15846 = G__15876;
chunk__15158_15847 = G__15877;
count__15159_15848 = G__15878;
i__15160_15849 = G__15879;
continue;
}
} else {
}
}
break;
}


var G__15880 = seq__15074_15839;
var G__15881 = chunk__15075_15840;
var G__15882 = count__15076_15841;
var G__15883 = (i__15077_15842 + (1));
seq__15074_15839 = G__15880;
chunk__15075_15840 = G__15881;
count__15076_15841 = G__15882;
i__15077_15842 = G__15883;
continue;
} else {
var temp__5735__auto___15884__$1 = cljs.core.seq(seq__15074_15839);
if(temp__5735__auto___15884__$1){
var seq__15074_15885__$1 = temp__5735__auto___15884__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15074_15885__$1)){
var c__4556__auto___15886 = cljs.core.chunk_first(seq__15074_15885__$1);
var G__15887 = cljs.core.chunk_rest(seq__15074_15885__$1);
var G__15888 = c__4556__auto___15886;
var G__15889 = cljs.core.count(c__4556__auto___15886);
var G__15890 = (0);
seq__15074_15839 = G__15887;
chunk__15075_15840 = G__15888;
count__15076_15841 = G__15889;
i__15077_15842 = G__15890;
continue;
} else {
var vec__15211_15891 = cljs.core.first(seq__15074_15885__$1);
var column_15892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15211_15891,(0),null);
var column_info_15893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15211_15891,(1),null);
var seq__15214_15895 = cljs.core.seq(column_info_15893);
var chunk__15215_15896 = null;
var count__15216_15897 = (0);
var i__15217_15898 = (0);
while(true){
if((i__15217_15898 < count__15216_15897)){
var map__15232_15899 = chunk__15215_15896.cljs$core$IIndexed$_nth$arity$2(null,i__15217_15898);
var map__15232_15900__$1 = (((((!((map__15232_15899 == null))))?(((((map__15232_15899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15232_15899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15232_15899):map__15232_15899);
var gline_15901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15232_15900__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15232_15900__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15232_15900__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15901], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15214_15895,chunk__15215_15896,count__15216_15897,i__15217_15898,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15232_15899,map__15232_15900__$1,gline_15901,gcol_15902,name_15903,vec__15211_15891,column_15892,column_info_15893,seq__15074_15885__$1,temp__5735__auto___15884__$1,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15902], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15837,new cljs.core.Keyword(null,"col","col",-1959363084),column_15892,new cljs.core.Keyword(null,"name","name",1843675177),name_15903], null));
});})(seq__15214_15895,chunk__15215_15896,count__15216_15897,i__15217_15898,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15232_15899,map__15232_15900__$1,gline_15901,gcol_15902,name_15903,vec__15211_15891,column_15892,column_info_15893,seq__15074_15885__$1,temp__5735__auto___15884__$1,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted))
,cljs.core.sorted_map()));


var G__15904 = seq__15214_15895;
var G__15905 = chunk__15215_15896;
var G__15906 = count__15216_15897;
var G__15907 = (i__15217_15898 + (1));
seq__15214_15895 = G__15904;
chunk__15215_15896 = G__15905;
count__15216_15897 = G__15906;
i__15217_15898 = G__15907;
continue;
} else {
var temp__5735__auto___15908__$2 = cljs.core.seq(seq__15214_15895);
if(temp__5735__auto___15908__$2){
var seq__15214_15909__$1 = temp__5735__auto___15908__$2;
if(cljs.core.chunked_seq_QMARK_(seq__15214_15909__$1)){
var c__4556__auto___15910 = cljs.core.chunk_first(seq__15214_15909__$1);
var G__15911 = cljs.core.chunk_rest(seq__15214_15909__$1);
var G__15912 = c__4556__auto___15910;
var G__15913 = cljs.core.count(c__4556__auto___15910);
var G__15914 = (0);
seq__15214_15895 = G__15911;
chunk__15215_15896 = G__15912;
count__15216_15897 = G__15913;
i__15217_15898 = G__15914;
continue;
} else {
var map__15236_15915 = cljs.core.first(seq__15214_15909__$1);
var map__15236_15916__$1 = (((((!((map__15236_15915 == null))))?(((((map__15236_15915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15236_15915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15236_15915):map__15236_15915);
var gline_15917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236_15916__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15918 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236_15916__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15919 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15236_15916__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15917], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15214_15895,chunk__15215_15896,count__15216_15897,i__15217_15898,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15236_15915,map__15236_15916__$1,gline_15917,gcol_15918,name_15919,seq__15214_15909__$1,temp__5735__auto___15908__$2,vec__15211_15891,column_15892,column_info_15893,seq__15074_15885__$1,temp__5735__auto___15884__$1,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15918], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15837,new cljs.core.Keyword(null,"col","col",-1959363084),column_15892,new cljs.core.Keyword(null,"name","name",1843675177),name_15919], null));
});})(seq__15214_15895,chunk__15215_15896,count__15216_15897,i__15217_15898,seq__15074_15839,chunk__15075_15840,count__15076_15841,i__15077_15842,seq__14557_15734,chunk__14558_15735,count__14559_15736,i__14560_15737,map__15236_15915,map__15236_15916__$1,gline_15917,gcol_15918,name_15919,seq__15214_15909__$1,temp__5735__auto___15908__$2,vec__15211_15891,column_15892,column_info_15893,seq__15074_15885__$1,temp__5735__auto___15884__$1,vec__15070_15836,line_15837,columns_15838,seq__14557_15830__$1,temp__5735__auto___15829,inverted))
,cljs.core.sorted_map()));


var G__15927 = cljs.core.next(seq__15214_15909__$1);
var G__15928 = null;
var G__15929 = (0);
var G__15930 = (0);
seq__15214_15895 = G__15927;
chunk__15215_15896 = G__15928;
count__15216_15897 = G__15929;
i__15217_15898 = G__15930;
continue;
}
} else {
}
}
break;
}


var G__15931 = cljs.core.next(seq__15074_15885__$1);
var G__15932 = null;
var G__15933 = (0);
var G__15934 = (0);
seq__15074_15839 = G__15931;
chunk__15075_15840 = G__15932;
count__15076_15841 = G__15933;
i__15077_15842 = G__15934;
continue;
}
} else {
}
}
break;
}


var G__15935 = cljs.core.next(seq__14557_15830__$1);
var G__15936 = null;
var G__15937 = (0);
var G__15938 = (0);
seq__14557_15734 = G__15935;
chunk__14558_15735 = G__15936;
count__14559_15736 = G__15937;
i__14560_15737 = G__15938;
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
