goog.provide('cljs.source_map');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__13355){
var vec__13356 = p__13355;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13356,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13356,(1),null);
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
var vec__13378 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13378,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13378,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13378,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13378,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13378,(4),null);
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
var vec__13390 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13390,(4),null);
var vec__13393 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(4),null);
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
var map__13400 = segmap;
var map__13400__$1 = (((((!((map__13400 == null))))?(((((map__13400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13400):map__13400);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13400__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13400__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13400__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13400__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13400__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var G__13418 = arguments.length;
switch (G__13418) {
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
var vec__13440 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15333 = cljs.core.next(segs__$1);
var G__15334 = nrelseg;
var G__15335 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15333;
relseg__$1 = G__15334;
result__$1 = G__15335;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13440,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13440,(1),null);
var G__15338 = (gline + (1));
var G__15339 = cljs.core.next(lines__$1);
var G__15340 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15341 = result__$1;
gline = G__15338;
lines__$1 = G__15339;
relseg = G__15340;
result = G__15341;
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
var map__13460 = segmap;
var map__13460__$1 = (((((!((map__13460 == null))))?(((((map__13460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13460):map__13460);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (p1__13451_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__13451_SHARP_,d__$1);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 *   generated JavaScript source locations to the original
 *   ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(var_args){
var G__13482 = arguments.length;
switch (G__13482) {
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
var vec__13515 = ((clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__15352 = cljs.core.next(segs__$1);
var G__15353 = nrelseg;
var G__15354 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__15352;
relseg__$1 = G__15353;
result__$1 = G__15354;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13515,(1),null);
var G__15364 = (gline + (1));
var G__15365 = cljs.core.next(lines__$1);
var G__15366 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__15367 = result__$1;
gline = G__15364;
lines__$1 = G__15365;
relseg = G__15366;
result = G__15367;
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
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__13524){
var vec__13525 = p__13524;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,(4),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),source,line,col,name], null);
}));

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (cols__$1,p__13535){
var vec__13536 = p__13535;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(0),null);
var sidx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13536,(4),null);
var seg = vec__13536;
var offset = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._,seg,cljs.core.deref(relseg));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(relseg,(function (p__13542){
var vec__13543 = p__13542;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(3),null);
var lname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13543,(4),null);
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
var seq__13579 = cljs.core.seq(infos);
var chunk__13580 = null;
var count__13581 = (0);
var i__13582 = (0);
while(true){
if((i__13582 < count__13581)){
var info = chunk__13580.cljs$core$IIndexed$_nth$arity$2(null,i__13582);
var segv_15371 = info__GT_segv(info,source_idx,line,col);
var gline_15372 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15373 = cljs.core.count(cljs.core.deref(lines));
if((gline_15372 > (lc_15373 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13579,chunk__13580,count__13581,i__13582,segv_15371,gline_15372,lc_15373,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15372 - (lc_15373 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15371], null));
});})(seq__13579,chunk__13580,count__13581,i__13582,segv_15371,gline_15372,lc_15373,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13579,chunk__13580,count__13581,i__13582,segv_15371,gline_15372,lc_15373,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15372], null),cljs.core.conj,segv_15371);
});})(seq__13579,chunk__13580,count__13581,i__13582,segv_15371,gline_15372,lc_15373,info,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__15377 = seq__13579;
var G__15378 = chunk__13580;
var G__15379 = count__13581;
var G__15380 = (i__13582 + (1));
seq__13579 = G__15377;
chunk__13580 = G__15378;
count__13581 = G__15379;
i__13582 = G__15380;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13579);
if(temp__5735__auto__){
var seq__13579__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13579__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13579__$1);
var G__15381 = cljs.core.chunk_rest(seq__13579__$1);
var G__15382 = c__4556__auto__;
var G__15383 = cljs.core.count(c__4556__auto__);
var G__15384 = (0);
seq__13579 = G__15381;
chunk__13580 = G__15382;
count__13581 = G__15383;
i__13582 = G__15384;
continue;
} else {
var info = cljs.core.first(seq__13579__$1);
var segv_15385 = info__GT_segv(info,source_idx,line,col);
var gline_15386 = new cljs.core.Keyword(null,"gline","gline",-1086242431).cljs$core$IFn$_invoke$arity$1(info);
var lc_15387 = cljs.core.count(cljs.core.deref(lines));
if((gline_15386 > (lc_15387 - (1)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13579,chunk__13580,count__13581,i__13582,segv_15385,gline_15386,lc_15387,info,seq__13579__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.into.cljs$core$IFn$_invoke$arity$2(lines__$1,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((gline_15386 - (lc_15387 - (1))) - (1)),cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [segv_15385], null));
});})(seq__13579,chunk__13580,count__13581,i__13582,segv_15385,gline_15386,lc_15387,info,seq__13579__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(lines,((function (seq__13579,chunk__13580,count__13581,i__13582,segv_15385,gline_15386,lc_15387,info,seq__13579__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv){
return (function (lines__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(lines__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15386], null),cljs.core.conj,segv_15385);
});})(seq__13579,chunk__13580,count__13581,i__13582,segv_15385,gline_15386,lc_15387,info,seq__13579__$1,temp__5735__auto__,lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv))
);
}


var G__15394 = cljs.core.next(seq__13579__$1);
var G__15395 = null;
var G__15396 = (0);
var G__15397 = (0);
seq__13579 = G__15394;
chunk__13580 = G__15395;
count__13581 = G__15396;
i__13582 = G__15397;
continue;
}
} else {
return null;
}
}
break;
}
});
var seq__13632_15398 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols){
return (function (i,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,v], null);
});})(lines,names__GT_idx,name_idx,preamble_lines,info__GT_segv,encode_cols))
,m));
var chunk__13633_15399 = null;
var count__13634_15400 = (0);
var i__13635_15401 = (0);
while(true){
if((i__13635_15401 < count__13634_15400)){
var vec__14041_15402 = chunk__13633_15399.cljs$core$IIndexed$_nth$arity$2(null,i__13635_15401);
var source_idx_15403 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041_15402,(0),null);
var vec__14044_15404 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14041_15402,(1),null);
var __15405 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14044_15404,(0),null);
var lines_15406__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14044_15404,(1),null);
var seq__14049_15407 = cljs.core.seq(lines_15406__$1);
var chunk__14050_15408 = null;
var count__14051_15409 = (0);
var i__14052_15410 = (0);
while(true){
if((i__14052_15410 < count__14051_15409)){
var vec__14150_15412 = chunk__14050_15408.cljs$core$IIndexed$_nth$arity$2(null,i__14052_15410);
var line_15413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150_15412,(0),null);
var cols_15414 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14150_15412,(1),null);
var seq__14159_15418 = cljs.core.seq(cols_15414);
var chunk__14160_15419 = null;
var count__14161_15420 = (0);
var i__14162_15421 = (0);
while(true){
if((i__14162_15421 < count__14161_15420)){
var vec__14179_15422 = chunk__14160_15419.cljs$core$IIndexed$_nth$arity$2(null,i__14162_15421);
var col_15423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179_15422,(0),null);
var infos_15424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179_15422,(1),null);
encode_cols(infos_15424,source_idx_15403,line_15413,col_15423);


var G__15425 = seq__14159_15418;
var G__15426 = chunk__14160_15419;
var G__15427 = count__14161_15420;
var G__15428 = (i__14162_15421 + (1));
seq__14159_15418 = G__15425;
chunk__14160_15419 = G__15426;
count__14161_15420 = G__15427;
i__14162_15421 = G__15428;
continue;
} else {
var temp__5735__auto___15429 = cljs.core.seq(seq__14159_15418);
if(temp__5735__auto___15429){
var seq__14159_15430__$1 = temp__5735__auto___15429;
if(cljs.core.chunked_seq_QMARK_(seq__14159_15430__$1)){
var c__4556__auto___15431 = cljs.core.chunk_first(seq__14159_15430__$1);
var G__15432 = cljs.core.chunk_rest(seq__14159_15430__$1);
var G__15433 = c__4556__auto___15431;
var G__15434 = cljs.core.count(c__4556__auto___15431);
var G__15435 = (0);
seq__14159_15418 = G__15432;
chunk__14160_15419 = G__15433;
count__14161_15420 = G__15434;
i__14162_15421 = G__15435;
continue;
} else {
var vec__14185_15436 = cljs.core.first(seq__14159_15430__$1);
var col_15437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185_15436,(0),null);
var infos_15438 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14185_15436,(1),null);
encode_cols(infos_15438,source_idx_15403,line_15413,col_15437);


var G__15442 = cljs.core.next(seq__14159_15430__$1);
var G__15443 = null;
var G__15444 = (0);
var G__15445 = (0);
seq__14159_15418 = G__15442;
chunk__14160_15419 = G__15443;
count__14161_15420 = G__15444;
i__14162_15421 = G__15445;
continue;
}
} else {
}
}
break;
}


var G__15450 = seq__14049_15407;
var G__15451 = chunk__14050_15408;
var G__15452 = count__14051_15409;
var G__15453 = (i__14052_15410 + (1));
seq__14049_15407 = G__15450;
chunk__14050_15408 = G__15451;
count__14051_15409 = G__15452;
i__14052_15410 = G__15453;
continue;
} else {
var temp__5735__auto___15455 = cljs.core.seq(seq__14049_15407);
if(temp__5735__auto___15455){
var seq__14049_15457__$1 = temp__5735__auto___15455;
if(cljs.core.chunked_seq_QMARK_(seq__14049_15457__$1)){
var c__4556__auto___15458 = cljs.core.chunk_first(seq__14049_15457__$1);
var G__15459 = cljs.core.chunk_rest(seq__14049_15457__$1);
var G__15461 = c__4556__auto___15458;
var G__15462 = cljs.core.count(c__4556__auto___15458);
var G__15463 = (0);
seq__14049_15407 = G__15459;
chunk__14050_15408 = G__15461;
count__14051_15409 = G__15462;
i__14052_15410 = G__15463;
continue;
} else {
var vec__14191_15464 = cljs.core.first(seq__14049_15457__$1);
var line_15465 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14191_15464,(0),null);
var cols_15466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14191_15464,(1),null);
var seq__14197_15467 = cljs.core.seq(cols_15466);
var chunk__14200_15468 = null;
var count__14201_15469 = (0);
var i__14202_15470 = (0);
while(true){
if((i__14202_15470 < count__14201_15469)){
var vec__14219_15472 = chunk__14200_15468.cljs$core$IIndexed$_nth$arity$2(null,i__14202_15470);
var col_15473 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14219_15472,(0),null);
var infos_15474 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14219_15472,(1),null);
encode_cols(infos_15474,source_idx_15403,line_15465,col_15473);


var G__15477 = seq__14197_15467;
var G__15478 = chunk__14200_15468;
var G__15479 = count__14201_15469;
var G__15480 = (i__14202_15470 + (1));
seq__14197_15467 = G__15477;
chunk__14200_15468 = G__15478;
count__14201_15469 = G__15479;
i__14202_15470 = G__15480;
continue;
} else {
var temp__5735__auto___15481__$1 = cljs.core.seq(seq__14197_15467);
if(temp__5735__auto___15481__$1){
var seq__14197_15484__$1 = temp__5735__auto___15481__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14197_15484__$1)){
var c__4556__auto___15485 = cljs.core.chunk_first(seq__14197_15484__$1);
var G__15488 = cljs.core.chunk_rest(seq__14197_15484__$1);
var G__15489 = c__4556__auto___15485;
var G__15490 = cljs.core.count(c__4556__auto___15485);
var G__15491 = (0);
seq__14197_15467 = G__15488;
chunk__14200_15468 = G__15489;
count__14201_15469 = G__15490;
i__14202_15470 = G__15491;
continue;
} else {
var vec__14229_15492 = cljs.core.first(seq__14197_15484__$1);
var col_15493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229_15492,(0),null);
var infos_15494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14229_15492,(1),null);
encode_cols(infos_15494,source_idx_15403,line_15465,col_15493);


var G__15496 = cljs.core.next(seq__14197_15484__$1);
var G__15497 = null;
var G__15498 = (0);
var G__15499 = (0);
seq__14197_15467 = G__15496;
chunk__14200_15468 = G__15497;
count__14201_15469 = G__15498;
i__14202_15470 = G__15499;
continue;
}
} else {
}
}
break;
}


var G__15500 = cljs.core.next(seq__14049_15457__$1);
var G__15501 = null;
var G__15502 = (0);
var G__15503 = (0);
seq__14049_15407 = G__15500;
chunk__14050_15408 = G__15501;
count__14051_15409 = G__15502;
i__14052_15410 = G__15503;
continue;
}
} else {
}
}
break;
}


var G__15505 = seq__13632_15398;
var G__15506 = chunk__13633_15399;
var G__15507 = count__13634_15400;
var G__15508 = (i__13635_15401 + (1));
seq__13632_15398 = G__15505;
chunk__13633_15399 = G__15506;
count__13634_15400 = G__15507;
i__13635_15401 = G__15508;
continue;
} else {
var temp__5735__auto___15509 = cljs.core.seq(seq__13632_15398);
if(temp__5735__auto___15509){
var seq__13632_15511__$1 = temp__5735__auto___15509;
if(cljs.core.chunked_seq_QMARK_(seq__13632_15511__$1)){
var c__4556__auto___15512 = cljs.core.chunk_first(seq__13632_15511__$1);
var G__15513 = cljs.core.chunk_rest(seq__13632_15511__$1);
var G__15514 = c__4556__auto___15512;
var G__15515 = cljs.core.count(c__4556__auto___15512);
var G__15516 = (0);
seq__13632_15398 = G__15513;
chunk__13633_15399 = G__15514;
count__13634_15400 = G__15515;
i__13635_15401 = G__15516;
continue;
} else {
var vec__14238_15518 = cljs.core.first(seq__13632_15511__$1);
var source_idx_15519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14238_15518,(0),null);
var vec__14241_15520 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14238_15518,(1),null);
var __15521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14241_15520,(0),null);
var lines_15522__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14241_15520,(1),null);
var seq__14257_15523 = cljs.core.seq(lines_15522__$1);
var chunk__14258_15524 = null;
var count__14259_15525 = (0);
var i__14260_15526 = (0);
while(true){
if((i__14260_15526 < count__14259_15525)){
var vec__14341_15527 = chunk__14258_15524.cljs$core$IIndexed$_nth$arity$2(null,i__14260_15526);
var line_15528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341_15527,(0),null);
var cols_15529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14341_15527,(1),null);
var seq__14346_15530 = cljs.core.seq(cols_15529);
var chunk__14347_15531 = null;
var count__14348_15532 = (0);
var i__14349_15533 = (0);
while(true){
if((i__14349_15533 < count__14348_15532)){
var vec__14367_15536 = chunk__14347_15531.cljs$core$IIndexed$_nth$arity$2(null,i__14349_15533);
var col_15537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14367_15536,(0),null);
var infos_15538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14367_15536,(1),null);
encode_cols(infos_15538,source_idx_15519,line_15528,col_15537);


var G__15541 = seq__14346_15530;
var G__15542 = chunk__14347_15531;
var G__15543 = count__14348_15532;
var G__15544 = (i__14349_15533 + (1));
seq__14346_15530 = G__15541;
chunk__14347_15531 = G__15542;
count__14348_15532 = G__15543;
i__14349_15533 = G__15544;
continue;
} else {
var temp__5735__auto___15545__$1 = cljs.core.seq(seq__14346_15530);
if(temp__5735__auto___15545__$1){
var seq__14346_15546__$1 = temp__5735__auto___15545__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14346_15546__$1)){
var c__4556__auto___15547 = cljs.core.chunk_first(seq__14346_15546__$1);
var G__15548 = cljs.core.chunk_rest(seq__14346_15546__$1);
var G__15549 = c__4556__auto___15547;
var G__15550 = cljs.core.count(c__4556__auto___15547);
var G__15551 = (0);
seq__14346_15530 = G__15548;
chunk__14347_15531 = G__15549;
count__14348_15532 = G__15550;
i__14349_15533 = G__15551;
continue;
} else {
var vec__14373_15552 = cljs.core.first(seq__14346_15546__$1);
var col_15553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14373_15552,(0),null);
var infos_15554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14373_15552,(1),null);
encode_cols(infos_15554,source_idx_15519,line_15528,col_15553);


var G__15555 = cljs.core.next(seq__14346_15546__$1);
var G__15556 = null;
var G__15557 = (0);
var G__15558 = (0);
seq__14346_15530 = G__15555;
chunk__14347_15531 = G__15556;
count__14348_15532 = G__15557;
i__14349_15533 = G__15558;
continue;
}
} else {
}
}
break;
}


var G__15559 = seq__14257_15523;
var G__15560 = chunk__14258_15524;
var G__15561 = count__14259_15525;
var G__15562 = (i__14260_15526 + (1));
seq__14257_15523 = G__15559;
chunk__14258_15524 = G__15560;
count__14259_15525 = G__15561;
i__14260_15526 = G__15562;
continue;
} else {
var temp__5735__auto___15563__$1 = cljs.core.seq(seq__14257_15523);
if(temp__5735__auto___15563__$1){
var seq__14257_15564__$1 = temp__5735__auto___15563__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14257_15564__$1)){
var c__4556__auto___15565 = cljs.core.chunk_first(seq__14257_15564__$1);
var G__15566 = cljs.core.chunk_rest(seq__14257_15564__$1);
var G__15567 = c__4556__auto___15565;
var G__15568 = cljs.core.count(c__4556__auto___15565);
var G__15569 = (0);
seq__14257_15523 = G__15566;
chunk__14258_15524 = G__15567;
count__14259_15525 = G__15568;
i__14260_15526 = G__15569;
continue;
} else {
var vec__14380_15571 = cljs.core.first(seq__14257_15564__$1);
var line_15572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14380_15571,(0),null);
var cols_15573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14380_15571,(1),null);
var seq__14386_15577 = cljs.core.seq(cols_15573);
var chunk__14387_15578 = null;
var count__14388_15579 = (0);
var i__14389_15580 = (0);
while(true){
if((i__14389_15580 < count__14388_15579)){
var vec__14402_15582 = chunk__14387_15578.cljs$core$IIndexed$_nth$arity$2(null,i__14389_15580);
var col_15583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14402_15582,(0),null);
var infos_15584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14402_15582,(1),null);
encode_cols(infos_15584,source_idx_15519,line_15572,col_15583);


var G__15587 = seq__14386_15577;
var G__15588 = chunk__14387_15578;
var G__15589 = count__14388_15579;
var G__15590 = (i__14389_15580 + (1));
seq__14386_15577 = G__15587;
chunk__14387_15578 = G__15588;
count__14388_15579 = G__15589;
i__14389_15580 = G__15590;
continue;
} else {
var temp__5735__auto___15592__$2 = cljs.core.seq(seq__14386_15577);
if(temp__5735__auto___15592__$2){
var seq__14386_15593__$1 = temp__5735__auto___15592__$2;
if(cljs.core.chunked_seq_QMARK_(seq__14386_15593__$1)){
var c__4556__auto___15595 = cljs.core.chunk_first(seq__14386_15593__$1);
var G__15599 = cljs.core.chunk_rest(seq__14386_15593__$1);
var G__15600 = c__4556__auto___15595;
var G__15601 = cljs.core.count(c__4556__auto___15595);
var G__15602 = (0);
seq__14386_15577 = G__15599;
chunk__14387_15578 = G__15600;
count__14388_15579 = G__15601;
i__14389_15580 = G__15602;
continue;
} else {
var vec__14411_15604 = cljs.core.first(seq__14386_15593__$1);
var col_15605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14411_15604,(0),null);
var infos_15606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14411_15604,(1),null);
encode_cols(infos_15606,source_idx_15519,line_15572,col_15605);


var G__15607 = cljs.core.next(seq__14386_15593__$1);
var G__15608 = null;
var G__15609 = (0);
var G__15610 = (0);
seq__14386_15577 = G__15607;
chunk__14387_15578 = G__15608;
count__14388_15579 = G__15609;
i__14389_15580 = G__15610;
continue;
}
} else {
}
}
break;
}


var G__15611 = cljs.core.next(seq__14257_15564__$1);
var G__15612 = null;
var G__15613 = (0);
var G__15614 = (0);
seq__14257_15523 = G__15611;
chunk__14258_15524 = G__15612;
count__14259_15525 = G__15613;
i__14260_15526 = G__15614;
continue;
}
} else {
}
}
break;
}


var G__15617 = cljs.core.next(seq__13632_15511__$1);
var G__15618 = null;
var G__15619 = (0);
var G__15620 = (0);
seq__13632_15398 = G__15617;
chunk__13633_15399 = G__15618;
count__13634_15400 = G__15619;
i__13635_15401 = G__15620;
continue;
}
} else {
}
}
break;
}

var source_map_file_contents = (function (){var G__14419 = ({"version": (3), "file": new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(opts), "sources": (function (){var paths = cljs.core.keys(m);
var f = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"source-map-timestamp","source-map-timestamp",1973015633).cljs$core$IFn$_invoke$arity$1(opts) === true)?(function (p1__13552_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__13552_SHARP_),"?rel=",cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).valueOf())].join('');
}):cljs.core.identity),(function (p1__13553_SHARP_){
return cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__13553_SHARP_,/\//));
}));
return cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,paths));
})(), "lineCount": new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$1(opts), "mappings": clojure.string.join.cljs$core$IFn$_invoke$arity$2(";",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13564_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",p1__13564_SHARP_);
}),cljs.source_map.lines__GT_segs(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(preamble_lines,cljs.core.deref(lines))))), "names": cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.set.map_invert(cljs.core.deref(names__GT_idx)),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(names__GT_idx)))))});
if(cljs.core.truth_(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts))){
var G__14427 = G__14419;
goog.object.set(G__14427,"sourcesContent",cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sources-content","sources-content",1729970239).cljs$core$IFn$_invoke$arity$1(opts)));

return G__14427;
} else {
return G__14419;
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
var vec__14443 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14443,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__14448 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14448,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14448,(1),null);
var G__15652 = cljs.core.next(col_map_seq);
var G__15653 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__14448,col,infos,vec__14443,line,col_map){
return (function (v,p__14452){
var map__14453 = p__14452;
var map__14453__$1 = (((((!((map__14453 == null))))?(((((map__14453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14453):map__14453);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14453__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14453__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__14448,col,infos,vec__14443,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__15652;
new_cols = G__15653;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__15672 = cljs.core.next(line_map_seq);
var G__15673 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__15672;
new_lines = G__15673;
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
var seq__14467_15682 = cljs.core.seq(reverse_map);
var chunk__14468_15683 = null;
var count__14469_15684 = (0);
var i__14470_15685 = (0);
while(true){
if((i__14470_15685 < count__14469_15684)){
var vec__14836_15687 = chunk__14468_15683.cljs$core$IIndexed$_nth$arity$2(null,i__14470_15685);
var line_15688 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14836_15687,(0),null);
var columns_15689 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14836_15687,(1),null);
var seq__14839_15700 = cljs.core.seq(columns_15689);
var chunk__14840_15701 = null;
var count__14841_15702 = (0);
var i__14842_15703 = (0);
while(true){
if((i__14842_15703 < count__14841_15702)){
var vec__14947_15711 = chunk__14840_15701.cljs$core$IIndexed$_nth$arity$2(null,i__14842_15703);
var column_15712 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947_15711,(0),null);
var column_info_15713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14947_15711,(1),null);
var seq__14952_15718 = cljs.core.seq(column_info_15713);
var chunk__14953_15719 = null;
var count__14954_15720 = (0);
var i__14955_15721 = (0);
while(true){
if((i__14955_15721 < count__14954_15720)){
var map__14980_15728 = chunk__14953_15719.cljs$core$IIndexed$_nth$arity$2(null,i__14955_15721);
var map__14980_15729__$1 = (((((!((map__14980_15728 == null))))?(((((map__14980_15728.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14980_15728.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14980_15728):map__14980_15728);
var gline_15730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14980_15729__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15731 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14980_15729__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14980_15729__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15730], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14952_15718,chunk__14953_15719,count__14954_15720,i__14955_15721,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__14980_15728,map__14980_15729__$1,gline_15730,gcol_15731,name_15732,vec__14947_15711,column_15712,column_info_15713,vec__14836_15687,line_15688,columns_15689,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15731], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15688,new cljs.core.Keyword(null,"col","col",-1959363084),column_15712,new cljs.core.Keyword(null,"name","name",1843675177),name_15732], null));
});})(seq__14952_15718,chunk__14953_15719,count__14954_15720,i__14955_15721,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__14980_15728,map__14980_15729__$1,gline_15730,gcol_15731,name_15732,vec__14947_15711,column_15712,column_info_15713,vec__14836_15687,line_15688,columns_15689,inverted))
,cljs.core.sorted_map()));


var G__15747 = seq__14952_15718;
var G__15748 = chunk__14953_15719;
var G__15749 = count__14954_15720;
var G__15750 = (i__14955_15721 + (1));
seq__14952_15718 = G__15747;
chunk__14953_15719 = G__15748;
count__14954_15720 = G__15749;
i__14955_15721 = G__15750;
continue;
} else {
var temp__5735__auto___15754 = cljs.core.seq(seq__14952_15718);
if(temp__5735__auto___15754){
var seq__14952_15755__$1 = temp__5735__auto___15754;
if(cljs.core.chunked_seq_QMARK_(seq__14952_15755__$1)){
var c__4556__auto___15756 = cljs.core.chunk_first(seq__14952_15755__$1);
var G__15757 = cljs.core.chunk_rest(seq__14952_15755__$1);
var G__15758 = c__4556__auto___15756;
var G__15759 = cljs.core.count(c__4556__auto___15756);
var G__15760 = (0);
seq__14952_15718 = G__15757;
chunk__14953_15719 = G__15758;
count__14954_15720 = G__15759;
i__14955_15721 = G__15760;
continue;
} else {
var map__14992_15762 = cljs.core.first(seq__14952_15755__$1);
var map__14992_15763__$1 = (((((!((map__14992_15762 == null))))?(((((map__14992_15762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14992_15762.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14992_15762):map__14992_15762);
var gline_15764 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14992_15763__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15765 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14992_15763__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14992_15763__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15764], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__14952_15718,chunk__14953_15719,count__14954_15720,i__14955_15721,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__14992_15762,map__14992_15763__$1,gline_15764,gcol_15765,name_15766,seq__14952_15755__$1,temp__5735__auto___15754,vec__14947_15711,column_15712,column_info_15713,vec__14836_15687,line_15688,columns_15689,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15765], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15688,new cljs.core.Keyword(null,"col","col",-1959363084),column_15712,new cljs.core.Keyword(null,"name","name",1843675177),name_15766], null));
});})(seq__14952_15718,chunk__14953_15719,count__14954_15720,i__14955_15721,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__14992_15762,map__14992_15763__$1,gline_15764,gcol_15765,name_15766,seq__14952_15755__$1,temp__5735__auto___15754,vec__14947_15711,column_15712,column_info_15713,vec__14836_15687,line_15688,columns_15689,inverted))
,cljs.core.sorted_map()));


var G__15776 = cljs.core.next(seq__14952_15755__$1);
var G__15777 = null;
var G__15778 = (0);
var G__15779 = (0);
seq__14952_15718 = G__15776;
chunk__14953_15719 = G__15777;
count__14954_15720 = G__15778;
i__14955_15721 = G__15779;
continue;
}
} else {
}
}
break;
}


var G__15780 = seq__14839_15700;
var G__15781 = chunk__14840_15701;
var G__15782 = count__14841_15702;
var G__15783 = (i__14842_15703 + (1));
seq__14839_15700 = G__15780;
chunk__14840_15701 = G__15781;
count__14841_15702 = G__15782;
i__14842_15703 = G__15783;
continue;
} else {
var temp__5735__auto___15784 = cljs.core.seq(seq__14839_15700);
if(temp__5735__auto___15784){
var seq__14839_15785__$1 = temp__5735__auto___15784;
if(cljs.core.chunked_seq_QMARK_(seq__14839_15785__$1)){
var c__4556__auto___15786 = cljs.core.chunk_first(seq__14839_15785__$1);
var G__15787 = cljs.core.chunk_rest(seq__14839_15785__$1);
var G__15788 = c__4556__auto___15786;
var G__15789 = cljs.core.count(c__4556__auto___15786);
var G__15790 = (0);
seq__14839_15700 = G__15787;
chunk__14840_15701 = G__15788;
count__14841_15702 = G__15789;
i__14842_15703 = G__15790;
continue;
} else {
var vec__15010_15791 = cljs.core.first(seq__14839_15785__$1);
var column_15792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15010_15791,(0),null);
var column_info_15793 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15010_15791,(1),null);
var seq__15013_15794 = cljs.core.seq(column_info_15793);
var chunk__15014_15795 = null;
var count__15015_15796 = (0);
var i__15016_15797 = (0);
while(true){
if((i__15016_15797 < count__15015_15796)){
var map__15040_15798 = chunk__15014_15795.cljs$core$IIndexed$_nth$arity$2(null,i__15016_15797);
var map__15040_15799__$1 = (((((!((map__15040_15798 == null))))?(((((map__15040_15798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15040_15798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15040_15798):map__15040_15798);
var gline_15800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15040_15799__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15040_15799__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15040_15799__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15800], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15013_15794,chunk__15014_15795,count__15015_15796,i__15016_15797,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15040_15798,map__15040_15799__$1,gline_15800,gcol_15801,name_15802,vec__15010_15791,column_15792,column_info_15793,seq__14839_15785__$1,temp__5735__auto___15784,vec__14836_15687,line_15688,columns_15689,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15801], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15688,new cljs.core.Keyword(null,"col","col",-1959363084),column_15792,new cljs.core.Keyword(null,"name","name",1843675177),name_15802], null));
});})(seq__15013_15794,chunk__15014_15795,count__15015_15796,i__15016_15797,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15040_15798,map__15040_15799__$1,gline_15800,gcol_15801,name_15802,vec__15010_15791,column_15792,column_info_15793,seq__14839_15785__$1,temp__5735__auto___15784,vec__14836_15687,line_15688,columns_15689,inverted))
,cljs.core.sorted_map()));


var G__15806 = seq__15013_15794;
var G__15807 = chunk__15014_15795;
var G__15808 = count__15015_15796;
var G__15809 = (i__15016_15797 + (1));
seq__15013_15794 = G__15806;
chunk__15014_15795 = G__15807;
count__15015_15796 = G__15808;
i__15016_15797 = G__15809;
continue;
} else {
var temp__5735__auto___15810__$1 = cljs.core.seq(seq__15013_15794);
if(temp__5735__auto___15810__$1){
var seq__15013_15812__$1 = temp__5735__auto___15810__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15013_15812__$1)){
var c__4556__auto___15813 = cljs.core.chunk_first(seq__15013_15812__$1);
var G__15814 = cljs.core.chunk_rest(seq__15013_15812__$1);
var G__15815 = c__4556__auto___15813;
var G__15816 = cljs.core.count(c__4556__auto___15813);
var G__15817 = (0);
seq__15013_15794 = G__15814;
chunk__15014_15795 = G__15815;
count__15015_15796 = G__15816;
i__15016_15797 = G__15817;
continue;
} else {
var map__15058_15818 = cljs.core.first(seq__15013_15812__$1);
var map__15058_15819__$1 = (((((!((map__15058_15818 == null))))?(((((map__15058_15818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15058_15818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15058_15818):map__15058_15818);
var gline_15820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15058_15819__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15058_15819__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15822 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15058_15819__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15820], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15013_15794,chunk__15014_15795,count__15015_15796,i__15016_15797,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15058_15818,map__15058_15819__$1,gline_15820,gcol_15821,name_15822,seq__15013_15812__$1,temp__5735__auto___15810__$1,vec__15010_15791,column_15792,column_info_15793,seq__14839_15785__$1,temp__5735__auto___15784,vec__14836_15687,line_15688,columns_15689,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15821], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15688,new cljs.core.Keyword(null,"col","col",-1959363084),column_15792,new cljs.core.Keyword(null,"name","name",1843675177),name_15822], null));
});})(seq__15013_15794,chunk__15014_15795,count__15015_15796,i__15016_15797,seq__14839_15700,chunk__14840_15701,count__14841_15702,i__14842_15703,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15058_15818,map__15058_15819__$1,gline_15820,gcol_15821,name_15822,seq__15013_15812__$1,temp__5735__auto___15810__$1,vec__15010_15791,column_15792,column_info_15793,seq__14839_15785__$1,temp__5735__auto___15784,vec__14836_15687,line_15688,columns_15689,inverted))
,cljs.core.sorted_map()));


var G__15839 = cljs.core.next(seq__15013_15812__$1);
var G__15840 = null;
var G__15841 = (0);
var G__15842 = (0);
seq__15013_15794 = G__15839;
chunk__15014_15795 = G__15840;
count__15015_15796 = G__15841;
i__15016_15797 = G__15842;
continue;
}
} else {
}
}
break;
}


var G__15846 = cljs.core.next(seq__14839_15785__$1);
var G__15847 = null;
var G__15848 = (0);
var G__15849 = (0);
seq__14839_15700 = G__15846;
chunk__14840_15701 = G__15847;
count__14841_15702 = G__15848;
i__14842_15703 = G__15849;
continue;
}
} else {
}
}
break;
}


var G__15852 = seq__14467_15682;
var G__15853 = chunk__14468_15683;
var G__15854 = count__14469_15684;
var G__15855 = (i__14470_15685 + (1));
seq__14467_15682 = G__15852;
chunk__14468_15683 = G__15853;
count__14469_15684 = G__15854;
i__14470_15685 = G__15855;
continue;
} else {
var temp__5735__auto___15856 = cljs.core.seq(seq__14467_15682);
if(temp__5735__auto___15856){
var seq__14467_15858__$1 = temp__5735__auto___15856;
if(cljs.core.chunked_seq_QMARK_(seq__14467_15858__$1)){
var c__4556__auto___15859 = cljs.core.chunk_first(seq__14467_15858__$1);
var G__15860 = cljs.core.chunk_rest(seq__14467_15858__$1);
var G__15861 = c__4556__auto___15859;
var G__15862 = cljs.core.count(c__4556__auto___15859);
var G__15863 = (0);
seq__14467_15682 = G__15860;
chunk__14468_15683 = G__15861;
count__14469_15684 = G__15862;
i__14470_15685 = G__15863;
continue;
} else {
var vec__15072_15864 = cljs.core.first(seq__14467_15858__$1);
var line_15865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15072_15864,(0),null);
var columns_15866 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15072_15864,(1),null);
var seq__15077_15867 = cljs.core.seq(columns_15866);
var chunk__15078_15868 = null;
var count__15079_15869 = (0);
var i__15080_15870 = (0);
while(true){
if((i__15080_15870 < count__15079_15869)){
var vec__15218_15872 = chunk__15078_15868.cljs$core$IIndexed$_nth$arity$2(null,i__15080_15870);
var column_15873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15218_15872,(0),null);
var column_info_15874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15218_15872,(1),null);
var seq__15221_15881 = cljs.core.seq(column_info_15874);
var chunk__15222_15882 = null;
var count__15223_15883 = (0);
var i__15224_15884 = (0);
while(true){
if((i__15224_15884 < count__15223_15883)){
var map__15239_15885 = chunk__15222_15882.cljs$core$IIndexed$_nth$arity$2(null,i__15224_15884);
var map__15239_15886__$1 = (((((!((map__15239_15885 == null))))?(((((map__15239_15885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15239_15885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15239_15885):map__15239_15885);
var gline_15887 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15239_15886__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15239_15886__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15239_15886__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15887], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15221_15881,chunk__15222_15882,count__15223_15883,i__15224_15884,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15239_15885,map__15239_15886__$1,gline_15887,gcol_15888,name_15889,vec__15218_15872,column_15873,column_info_15874,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15888], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15865,new cljs.core.Keyword(null,"col","col",-1959363084),column_15873,new cljs.core.Keyword(null,"name","name",1843675177),name_15889], null));
});})(seq__15221_15881,chunk__15222_15882,count__15223_15883,i__15224_15884,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15239_15885,map__15239_15886__$1,gline_15887,gcol_15888,name_15889,vec__15218_15872,column_15873,column_info_15874,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted))
,cljs.core.sorted_map()));


var G__15895 = seq__15221_15881;
var G__15896 = chunk__15222_15882;
var G__15897 = count__15223_15883;
var G__15898 = (i__15224_15884 + (1));
seq__15221_15881 = G__15895;
chunk__15222_15882 = G__15896;
count__15223_15883 = G__15897;
i__15224_15884 = G__15898;
continue;
} else {
var temp__5735__auto___15900__$1 = cljs.core.seq(seq__15221_15881);
if(temp__5735__auto___15900__$1){
var seq__15221_15901__$1 = temp__5735__auto___15900__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15221_15901__$1)){
var c__4556__auto___15903 = cljs.core.chunk_first(seq__15221_15901__$1);
var G__15904 = cljs.core.chunk_rest(seq__15221_15901__$1);
var G__15905 = c__4556__auto___15903;
var G__15906 = cljs.core.count(c__4556__auto___15903);
var G__15907 = (0);
seq__15221_15881 = G__15904;
chunk__15222_15882 = G__15905;
count__15223_15883 = G__15906;
i__15224_15884 = G__15907;
continue;
} else {
var map__15242_15908 = cljs.core.first(seq__15221_15901__$1);
var map__15242_15909__$1 = (((((!((map__15242_15908 == null))))?(((((map__15242_15908.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15242_15908.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15242_15908):map__15242_15908);
var gline_15910 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15242_15909__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15911 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15242_15909__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15242_15909__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15910], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15221_15881,chunk__15222_15882,count__15223_15883,i__15224_15884,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15242_15908,map__15242_15909__$1,gline_15910,gcol_15911,name_15912,seq__15221_15901__$1,temp__5735__auto___15900__$1,vec__15218_15872,column_15873,column_info_15874,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15911], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15865,new cljs.core.Keyword(null,"col","col",-1959363084),column_15873,new cljs.core.Keyword(null,"name","name",1843675177),name_15912], null));
});})(seq__15221_15881,chunk__15222_15882,count__15223_15883,i__15224_15884,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15242_15908,map__15242_15909__$1,gline_15910,gcol_15911,name_15912,seq__15221_15901__$1,temp__5735__auto___15900__$1,vec__15218_15872,column_15873,column_info_15874,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted))
,cljs.core.sorted_map()));


var G__15917 = cljs.core.next(seq__15221_15901__$1);
var G__15918 = null;
var G__15919 = (0);
var G__15920 = (0);
seq__15221_15881 = G__15917;
chunk__15222_15882 = G__15918;
count__15223_15883 = G__15919;
i__15224_15884 = G__15920;
continue;
}
} else {
}
}
break;
}


var G__15922 = seq__15077_15867;
var G__15923 = chunk__15078_15868;
var G__15924 = count__15079_15869;
var G__15925 = (i__15080_15870 + (1));
seq__15077_15867 = G__15922;
chunk__15078_15868 = G__15923;
count__15079_15869 = G__15924;
i__15080_15870 = G__15925;
continue;
} else {
var temp__5735__auto___15926__$1 = cljs.core.seq(seq__15077_15867);
if(temp__5735__auto___15926__$1){
var seq__15077_15931__$1 = temp__5735__auto___15926__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15077_15931__$1)){
var c__4556__auto___15932 = cljs.core.chunk_first(seq__15077_15931__$1);
var G__15933 = cljs.core.chunk_rest(seq__15077_15931__$1);
var G__15934 = c__4556__auto___15932;
var G__15935 = cljs.core.count(c__4556__auto___15932);
var G__15936 = (0);
seq__15077_15867 = G__15933;
chunk__15078_15868 = G__15934;
count__15079_15869 = G__15935;
i__15080_15870 = G__15936;
continue;
} else {
var vec__15246_15938 = cljs.core.first(seq__15077_15931__$1);
var column_15939 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246_15938,(0),null);
var column_info_15940 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15246_15938,(1),null);
var seq__15249_15945 = cljs.core.seq(column_info_15940);
var chunk__15250_15946 = null;
var count__15251_15947 = (0);
var i__15252_15949 = (0);
while(true){
if((i__15252_15949 < count__15251_15947)){
var map__15276_15953 = chunk__15250_15946.cljs$core$IIndexed$_nth$arity$2(null,i__15252_15949);
var map__15276_15954__$1 = (((((!((map__15276_15953 == null))))?(((((map__15276_15953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15276_15953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15276_15953):map__15276_15953);
var gline_15955 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15276_15954__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15956 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15276_15954__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15957 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15276_15954__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15955], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15249_15945,chunk__15250_15946,count__15251_15947,i__15252_15949,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15276_15953,map__15276_15954__$1,gline_15955,gcol_15956,name_15957,vec__15246_15938,column_15939,column_info_15940,seq__15077_15931__$1,temp__5735__auto___15926__$1,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15956], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15865,new cljs.core.Keyword(null,"col","col",-1959363084),column_15939,new cljs.core.Keyword(null,"name","name",1843675177),name_15957], null));
});})(seq__15249_15945,chunk__15250_15946,count__15251_15947,i__15252_15949,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15276_15953,map__15276_15954__$1,gline_15955,gcol_15956,name_15957,vec__15246_15938,column_15939,column_info_15940,seq__15077_15931__$1,temp__5735__auto___15926__$1,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted))
,cljs.core.sorted_map()));


var G__15961 = seq__15249_15945;
var G__15962 = chunk__15250_15946;
var G__15963 = count__15251_15947;
var G__15964 = (i__15252_15949 + (1));
seq__15249_15945 = G__15961;
chunk__15250_15946 = G__15962;
count__15251_15947 = G__15963;
i__15252_15949 = G__15964;
continue;
} else {
var temp__5735__auto___15965__$2 = cljs.core.seq(seq__15249_15945);
if(temp__5735__auto___15965__$2){
var seq__15249_15966__$1 = temp__5735__auto___15965__$2;
if(cljs.core.chunked_seq_QMARK_(seq__15249_15966__$1)){
var c__4556__auto___15967 = cljs.core.chunk_first(seq__15249_15966__$1);
var G__15968 = cljs.core.chunk_rest(seq__15249_15966__$1);
var G__15969 = c__4556__auto___15967;
var G__15970 = cljs.core.count(c__4556__auto___15967);
var G__15971 = (0);
seq__15249_15945 = G__15968;
chunk__15250_15946 = G__15969;
count__15251_15947 = G__15970;
i__15252_15949 = G__15971;
continue;
} else {
var map__15304_15973 = cljs.core.first(seq__15249_15966__$1);
var map__15304_15974__$1 = (((((!((map__15304_15973 == null))))?(((((map__15304_15973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15304_15973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15304_15973):map__15304_15973);
var gline_15975 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304_15974__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol_15976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304_15974__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var name_15977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15304_15974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inverted,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline_15975], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (seq__15249_15945,chunk__15250_15946,count__15251_15947,i__15252_15949,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15304_15973,map__15304_15974__$1,gline_15975,gcol_15976,name_15977,seq__15249_15966__$1,temp__5735__auto___15965__$2,vec__15246_15938,column_15939,column_info_15940,seq__15077_15931__$1,temp__5735__auto___15926__$1,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted){
return (function (columns__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(columns__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol_15976], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line_15865,new cljs.core.Keyword(null,"col","col",-1959363084),column_15939,new cljs.core.Keyword(null,"name","name",1843675177),name_15977], null));
});})(seq__15249_15945,chunk__15250_15946,count__15251_15947,i__15252_15949,seq__15077_15867,chunk__15078_15868,count__15079_15869,i__15080_15870,seq__14467_15682,chunk__14468_15683,count__14469_15684,i__14470_15685,map__15304_15973,map__15304_15974__$1,gline_15975,gcol_15976,name_15977,seq__15249_15966__$1,temp__5735__auto___15965__$2,vec__15246_15938,column_15939,column_info_15940,seq__15077_15931__$1,temp__5735__auto___15926__$1,vec__15072_15864,line_15865,columns_15866,seq__14467_15858__$1,temp__5735__auto___15856,inverted))
,cljs.core.sorted_map()));


var G__15991 = cljs.core.next(seq__15249_15966__$1);
var G__15992 = null;
var G__15993 = (0);
var G__15994 = (0);
seq__15249_15945 = G__15991;
chunk__15250_15946 = G__15992;
count__15251_15947 = G__15993;
i__15252_15949 = G__15994;
continue;
}
} else {
}
}
break;
}


var G__15995 = cljs.core.next(seq__15077_15931__$1);
var G__15996 = null;
var G__15997 = (0);
var G__15998 = (0);
seq__15077_15867 = G__15995;
chunk__15078_15868 = G__15996;
count__15079_15869 = G__15997;
i__15080_15870 = G__15998;
continue;
}
} else {
}
}
break;
}


var G__16001 = cljs.core.next(seq__14467_15858__$1);
var G__16002 = null;
var G__16003 = (0);
var G__16004 = (0);
seq__14467_15682 = G__16001;
chunk__14468_15683 = G__16002;
count__14469_15684 = G__16003;
i__14470_15685 = G__16004;
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
