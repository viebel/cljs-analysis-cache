// Compiled by ClojureScript 1.10.520
goog.provide("gadjett.collections");
gadjett.collections.infinity = Infinity;
/**
 * Absolute value of a number
 * 
 * ~~~klipse
 *   (map abs (range -5 5))
 * ~~~
 */
gadjett.collections.abs = (function gadjett$collections$abs(x){
var x__10606__auto__ = x;
var y__10607__auto__ = (- x);
return ((x__10606__auto__ > y__10607__auto__) ? x__10606__auto__ : y__10607__auto__);
});
gadjett.collections.scale = (function gadjett$collections$scale(x,y){
if((((x === (0))) || ((y === (0))))){
return (1);
} else {
return gadjett.collections.abs.call(null,x);
}
});
gadjett.collections.almost_EQ_ = (function gadjett$collections$almost_EQ_(var_args){
var G__23 = arguments.length;
switch (G__23) {
case (2):
return gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return gadjett.collections.almost_EQ_.call(null,x,y,(0.00001));
});

gadjett.collections.almost_EQ_.cljs$core$IFn$_invoke$arity$3 = (function (x,y,epsilon){
return ((cljs.core._EQ_.call(null,x,y)) || ((gadjett.collections.abs.call(null,(x - y)) <= (gadjett.collections.scale.call(null,x,y) * epsilon))));
});

gadjett.collections.almost_EQ_.cljs$lang$maxFixedArity = (3);

gadjett.collections._EQ_set = (function gadjett$collections$_EQ_set(a,b){
return cljs.core._EQ_.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,a),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,b));
});
/**
 * Compare two maps exclusing some keys
 * 
 * ~~~klipse
 *   (=without-keys? {:a 1 :b 2 :c 3} {:a 1 :b 5} #{:b :c})
 * ~~~
 *   
 */
gadjett.collections._EQ_without_keys_QMARK_ = (function gadjett$collections$_EQ_without_keys_QMARK_(obj_a,obj_b,keys_list){
return cljs.core.apply.call(null,cljs.core._EQ_,cljs.core.map.call(null,(function (p1__1_SHARP_){
return cljs.core.apply.call(null,cljs.core.dissoc,p1__1_SHARP_,keys_list);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj_a,obj_b], null)));
});
/**
 * Converts a 2d vec to a hash-map.
 * 
 * ~~~klipse
 * (vec->map [[:a 1] [:b 2]])
 * ~~~
 * 
 */
gadjett.collections.vec__GT_map = (function gadjett$collections$vec__GT_map(vec){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,vec);
});
/**
 * Maps the values of a `2D` vector where each element of the vector is a key-value pair.
 * `f` is a `1-ary` function that receives the key.
 * 
 * ~~~klipse
 *   (map-2d-vec inc [[:a 1] [:b 2]])
 * ~~~
 */
gadjett.collections.map_2d_vec = (function gadjett$collections$map_2d_vec(f,m){
return cljs.core.map.call(null,(function (p__25){
var vec__26 = p__25;
var k = cljs.core.nth.call(null,vec__26,(0),null);
var id = cljs.core.nth.call(null,vec__26,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,id)], null);
}),m);
});
/**
 * Maps the values of a `2D` vector where each element of the vector is a key-value pair.
 * `fk` is a `1-ary` function that receives the key.
 * `fv` is a `1-ary` function that receives the value.
 * 
 * ~~~klipse
 *  (map-2d-vec-kv name inc [[:a 1] [:b 2]])
 * ~~~
 */
gadjett.collections.map_2d_vec_kv = (function gadjett$collections$map_2d_vec_kv(fk,fv,m){
return cljs.core.map.call(null,(function (p__29){
var vec__30 = p__29;
var k = cljs.core.nth.call(null,vec__30,(0),null);
var id = cljs.core.nth.call(null,vec__30,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fk.call(null,k),fv.call(null,id)], null);
}),m);
});
/**
 * Returns a map with the same keys as `m` and with the values transformed by `f`. `f` is a `1-ary` function that receives the key.
 * 
 * ~~~klipse
 *   (map-object inc {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
gadjett.collections.map_object = (function gadjett$collections$map_object(f,m){
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec.call(null,f,m));
});
/**
 * Returns a map with the same keys as `m` and with the values transformed by `f`. `f` must be a `2-ary` function that receives the key and the value as arguments.
 * 
 * ~~~klipse
 *   (map-object-with-key list {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
gadjett.collections.map_object_with_key = (function gadjett$collections$map_object_with_key(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__33){
var vec__34 = p__33;
var a = cljs.core.nth.call(null,vec__34,(0),null);
var b = cljs.core.nth.call(null,vec__34,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,f.call(null,a,b)], null);
}),m));
});
/**
 * Returns a map with the keys mapped by `fk` and the values mapped by `fv`.
 * 
 * ~~~klipse
 *  (map-object-kv name inc {:a 1 :b 2 :c 3})
 * ~~~
 */
gadjett.collections.map_object_kv = (function gadjett$collections$map_object_kv(fk,fv,m){
return gadjett.collections.vec__GT_map.call(null,gadjett.collections.map_2d_vec_kv.call(null,fk,fv,m));
});
/**
 * Turns a hash map inside out.
 *   See:  [here](http://stackoverflow.com/a/23653784/813665)
 * 
 * ~~~klipse
 *   (map-reverse-hierarchy {:monday {:banana 2 :apple 3} 
 *                        :tuesday {:banana 5 :orange 2}})
 * ~~~
 */
gadjett.collections.map_reverse_hierarchy = (function gadjett$collections$map_reverse_hierarchy(m){
var or__10138__auto__ = cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.conj,(function (){var iter__11746__auto__ = (function gadjett$collections$map_reverse_hierarchy_$_iter__52(s__53){
return (new cljs.core.LazySeq(null,(function (){
var s__53__$1 = s__53;
while(true){
var temp__9656__auto__ = cljs.core.seq.call(null,s__53__$1);
if(temp__9656__auto__){
var xs__9627__auto__ = temp__9656__auto__;
var vec__58 = cljs.core.first.call(null,xs__9627__auto__);
var k1 = cljs.core.nth.call(null,vec__58,(0),null);
var v1 = cljs.core.nth.call(null,vec__58,(1),null);
var iterys__11740__auto__ = ((function (s__53__$1,vec__58,k1,v1,xs__9627__auto__,temp__9656__auto__){
return (function gadjett$collections$map_reverse_hierarchy_$_iter__52_$_iter__54(s__55){
return (new cljs.core.LazySeq(null,((function (s__53__$1,vec__58,k1,v1,xs__9627__auto__,temp__9656__auto__){
return (function (){
var s__55__$1 = s__55;
while(true){
var temp__9656__auto____$1 = cljs.core.seq.call(null,s__55__$1);
if(temp__9656__auto____$1){
var s__55__$2 = temp__9656__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__55__$2)){
var c__11743__auto__ = cljs.core.chunk_first.call(null,s__55__$2);
var size__11745__auto__ = cljs.core.count.call(null,c__11743__auto__);
var b__57 = cljs.core.chunk_buffer.call(null,size__11745__auto__);
if((function (){var i__56 = (0);
while(true){
if((i__56 < size__11745__auto__)){
var vec__61 = cljs.core._nth.call(null,c__11743__auto__,i__56);
var k2 = cljs.core.nth.call(null,vec__61,(0),null);
var v2 = cljs.core.nth.call(null,vec__61,(1),null);
cljs.core.chunk_append.call(null,b__57,cljs.core.PersistentArrayMap.createAsIfByAssoc([k2,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v2])]));

var G__67 = (i__56 + (1));
i__56 = G__67;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57),gadjett$collections$map_reverse_hierarchy_$_iter__52_$_iter__54.call(null,cljs.core.chunk_rest.call(null,s__55__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__57),null);
}
} else {
var vec__64 = cljs.core.first.call(null,s__55__$2);
var k2 = cljs.core.nth.call(null,vec__64,(0),null);
var v2 = cljs.core.nth.call(null,vec__64,(1),null);
return cljs.core.cons.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([k2,cljs.core.PersistentArrayMap.createAsIfByAssoc([k1,v2])]),gadjett$collections$map_reverse_hierarchy_$_iter__52_$_iter__54.call(null,cljs.core.rest.call(null,s__55__$2)));
}
} else {
return null;
}
break;
}
});})(s__53__$1,vec__58,k1,v1,xs__9627__auto__,temp__9656__auto__))
,null,null));
});})(s__53__$1,vec__58,k1,v1,xs__9627__auto__,temp__9656__auto__))
;
var fs__11741__auto__ = cljs.core.seq.call(null,iterys__11740__auto__.call(null,v1));
if(fs__11741__auto__){
return cljs.core.concat.call(null,fs__11741__auto__,gadjett$collections$map_reverse_hierarchy_$_iter__52.call(null,cljs.core.rest.call(null,s__53__$1)));
} else {
var G__68 = cljs.core.rest.call(null,s__53__$1);
s__53__$1 = G__68;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11746__auto__.call(null,m);
})());
if(cljs.core.truth_(or__10138__auto__)){
return or__10138__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
/**
 * Calculates the mean (a.k.a average) of a sequence of numbers.
 * 
 * ~~~klipse
 *   (mean [1 2 10 -1 12.3])
 * ~~~
 *   
 */
gadjett.collections.mean = (function gadjett$collections$mean(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return (0);
} else {
return (cljs.core.apply.call(null,cljs.core._PLUS_,x) / cljs.core.count.call(null,x));
}
});
/**
 * Converts a sequence into a map where the keys are the indexes of the elements in the sequence.
 * 
 *   ~~~klipse
 *   (sequence->map [10 20 30])
 *   ~~~
 *   
 */
gadjett.collections.sequence__GT_map = (function gadjett$collections$sequence__GT_map(s){
return cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,s)),s);
});
/**
 * Converts a sequence of maps into a map where:
 * 
 *   - the keys are extracted from the maps using `key-fn`
 *   - the vals extracted from the maps using `val-fn`  
 *   
 *   ~~~klipse
 *   (sequence-of-maps->map [{:key :price :value 19}
 *                        {:key :quantity :value 100}]
 *                        :key :value)
 *   ~~~
 *   
 */
gadjett.collections.sequence_of_maps__GT_map = (function gadjett$collections$sequence_of_maps__GT_map(coll,key_fn,val_fn){
return cljs.core.reduce.call(null,(function (res,m){
return cljs.core.assoc.call(null,res,key_fn.call(null,m),val_fn.call(null,m));
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
gadjett.collections.range_with_end = (function gadjett$collections$range_with_end(var_args){
var G__70 = arguments.length;
switch (G__70) {
case (1):
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$1 = (function (end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$2 = (function (start,end){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end)], null);
});

gadjett.collections.range_with_end.cljs$core$IFn$_invoke$arity$3 = (function (start,end,steps){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [end,cljs.core.range.call(null,start,end,steps)], null);
});

gadjett.collections.range_with_end.cljs$lang$maxFixedArity = (3);

/**
 * Like `range` but including the `end`.
 * 
 * ~~~klipse
 *   (range-till-end 10)
 * ~~~
 * 
 * ~~~klipse
 * (range-till-end 10 18)
 * ~~~
 * 
 * ~~~klipse
 * (range-till-end 10 100 5)
 * ~~~
 * 
 *   
 */
gadjett.collections.range_till_end = (function gadjett$collections$range_till_end(var_args){
var args__12410__auto__ = [];
var len__12407__auto___76 = arguments.length;
var i__12408__auto___77 = (0);
while(true){
if((i__12408__auto___77 < len__12407__auto___76)){
args__12410__auto__.push((arguments[i__12408__auto___77]));

var G__78 = (i__12408__auto___77 + (1));
i__12408__auto___77 = G__78;
continue;
} else {
}
break;
}

var argseq__12411__auto__ = ((((0) < args__12410__auto__.length))?(new cljs.core.IndexedSeq(args__12410__auto__.slice((0)),(0),null)):null);
return gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic(argseq__12411__auto__);
});

gadjett.collections.range_till_end.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__73 = cljs.core.apply.call(null,gadjett.collections.range_with_end,args);
var end = cljs.core.nth.call(null,vec__73,(0),null);
var lis = cljs.core.nth.call(null,vec__73,(1),null);
return cljs.core.concat.call(null,lis,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [end], null));
});

gadjett.collections.range_till_end.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
gadjett.collections.range_till_end.cljs$lang$applyTo = (function (seq72){
var self__12400__auto__ = this;
return self__12400__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq72));
});

/**
 * Appends an element to a list popping out the first element.
 * 
 * ~~~klipse
 *   (-> (repeat 3 nil)
 *    (append-cyclic 1)
 *    (append-cyclic 2)
 *    (append-cyclic 3)
 *    (append-cyclic 4))
 * ~~~
 *   
 */
gadjett.collections.append_cyclic = (function gadjett$collections$append_cyclic(lst,a){
if(cljs.core.seq.call(null,lst)){
return cljs.core.concat.call(null,cljs.core.rest.call(null,lst),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null));
} else {
return lst;
}
});
/**
 * Assoc a key-value pair to a map popping out an element of the map.
 *   If the key already exists, no element is popped out.
 *   If `n` is supplied, no elmement is popped out if the map has less than `n` entries.
 * 
 * ~~~klipse
 *   (-> {:a 1 :b 2 :c 3}
 *    (assoc-cyclic :d 4)
 *    (assoc-cyclic :e 5)
 *    (assoc-cyclic :f 6)
 *    (assoc-cyclic :g 7))
 * ~~~
 *   
 */
gadjett.collections.assoc_cyclic = (function gadjett$collections$assoc_cyclic(var_args){
var G__80 = arguments.length;
switch (G__80) {
case (3):
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$3 = (function (coll,k,v){
if(cljs.core.contains_QMARK_.call(null,coll,k)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,gadjett.collections.append_cyclic.call(null,coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
}
});

gadjett.collections.assoc_cyclic.cljs$core$IFn$_invoke$arity$4 = (function (coll,k,v,n){
if((cljs.core.count.call(null,coll) < n)){
return cljs.core.assoc.call(null,coll,k,v);
} else {
return gadjett.collections.assoc_cyclic.call(null,coll,k,v);
}
});

gadjett.collections.assoc_cyclic.cljs$lang$maxFixedArity = (4);

/**
 * Returns a couple of the `max` and the `min` of a sequence.
 * 
 * ~~~klipse
 *   (max-and-min (range 5))
 * ~~~
 *   
 */
gadjett.collections.max_and_min = (function gadjett$collections$max_and_min(x){
if(cljs.core.empty_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
} else {
return cljs.core.juxt.call(null,(function (p1__2_SHARP_){
return cljs.core.apply.call(null,cljs.core.max,p1__2_SHARP_);
}),(function (p1__3_SHARP_){
return cljs.core.apply.call(null,cljs.core.min,p1__3_SHARP_);
})).call(null,x);
}
});
/**
 * Removes entries with `nil` values.
 * 
 * ~~~klipse
 *   (compactize-map {:a 1 :b nil :c 3})
 * ~~~
 *   
 */
gadjett.collections.compactize_map = (function gadjett$collections$compactize_map(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),m));
});
/**
 * Remove from a map the entries whose values are `nil`.
 *   If all the values of a nested map are `nil` the entrie is removed.
 * ~~~klipse
 * 
 * (compactize-map-recursive {:x 1 :z {:a nil} :a {:b nil :c 2 :d {:e nil :f 2}}})
 * ~~~
 *   
 */
gadjett.collections.compactize_map_recursive = (function gadjett$collections$compactize_map_recursive(m){
var f = (function (x){
if(cljs.core.map_QMARK_.call(null,x)){
var kvs = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_,cljs.core.second),x);
if(cljs.core.empty_QMARK_.call(null,kvs)){
return null;
} else {
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,kvs);
}
} else {
return x;
}
});
return clojure.walk.postwalk.call(null,f,m);
});
/**
 * Run a function on the values of a map and keep only the (key, value) pairs for which the function returns true
 *   
 * ~~~klipse
 *   (filter-map even? {:a 1 :b 2 :c 3})
 * ~~~
 *   
 */
gadjett.collections.filter_map = (function gadjett$collections$filter_map(f,m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,f,cljs.core.val),m));
});
/**
 * Returns the nearest number to `x` of a sorted set
 * 
 * ~~~klipse
 *   (nearest-of-ss (apply sorted-set (range 5)) 1.2)
 * ~~~
 *   
 */
gadjett.collections.nearest_of_ss = (function gadjett$collections$nearest_of_ss(ss,x){
var greater = cljs.core.first.call(null,cljs.core.subseq.call(null,ss,cljs.core._GT__EQ_,x));
var smaller = cljs.core.first.call(null,cljs.core.rsubseq.call(null,ss,cljs.core._LT__EQ_,x));
return cljs.core.apply.call(null,cljs.core.min_key,((function (greater,smaller){
return (function (p1__4_SHARP_){
return gadjett.collections.abs.call(null,(p1__4_SHARP_ - x));
});})(greater,smaller))
,cljs.core.remove.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [greater,smaller], null)));
});
/**
 * Maps each element of `b` to its nearest element in `a`.
 *   If `a` is empty, returns `b`.
 * 
 * ~~~klipse
 *   (nearest-of-seq (range 5) [1.2 3.4 4])
 * ~~~
 *   
 */
gadjett.collections.nearest_of_seq = (function gadjett$collections$nearest_of_seq(a,b){
if(cljs.core.empty_QMARK_.call(null,a)){
return b;
} else {
return cljs.core.map.call(null,cljs.core.partial.call(null,gadjett.collections.nearest_of_ss,cljs.core.apply.call(null,cljs.core.sorted_set,a)),b);
}
});
/**
 * Returns a map whose keys are the elements of `lst` and values are mapped by `f`.
 * 
 * ~~~klipse
 *   (map-to-object inc (range 5))
 * ~~~
 *   
 */
gadjett.collections.map_to_object = (function gadjett$collections$map_to_object(f,lst){
return cljs.core.zipmap.call(null,lst,cljs.core.map.call(null,f,lst));
});
/**
 * 
 *   Takes a seq, and returns a map where the keys are the result of applying f to the elements in the seq.
 *   The result of f should be unique for each element in the seq, otherwise you will loose some data.
 *   If it is not unique, consider using [group-by](https://clojuredocs.org/clojure.core/group-by).
 * 
 * ~~~klipse
 *   (mapify inc (range 5) )
 * ~~~
 *   
 */
gadjett.collections.mapify = (function gadjett$collections$mapify(f,s){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,f,s),s);
});
/**
 * Maps a sequence to a sequence of maps with index and value
 * 
 * ~~~klipse
 *    (map-with-index [10 20 30] :idx :val)
 * ~~~
 *   
 */
gadjett.collections.map_with_index = (function gadjett$collections$map_with_index(s,idx_key,val_key){
return cljs.core.map_indexed.call(null,(function (i,v){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([idx_key,i,val_key,v]);
}),s);
});
/**
 * Dissociates an entry from a nested associative structure returning a new nested structure. `keys` is a sequence of keys. Any empty maps that result will not be present in the new structure. See [assoc-in](https://clojuredocs.org/clojure.core/assoc-in)
 * 
 * ~~~klipse
 *   (dissoc-in {:a 1 :b 2} [:b])
 * ~~~
 * 
 * ~~~klipse
 *   (dissoc-in {:a {:b 2 :B 3} :c 3} [:a :b])
 * ~~~
 * 
 * ~~~klipse
 *   (dissoc-in {:a {:b 2} :c 3} [:a :b])
 * ~~~
 *   
 */
gadjett.collections.dissoc_in = (function gadjett$collections$dissoc_in(m,p__82){
var vec__83 = p__82;
var seq__84 = cljs.core.seq.call(null,vec__83);
var first__85 = cljs.core.first.call(null,seq__84);
var seq__84__$1 = cljs.core.next.call(null,seq__84);
var k = first__85;
var ks = seq__84__$1;
var keys = vec__83;
if(ks){
var temp__9517__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__9517__auto__)){
var nextmap = temp__9517__auto__;
var newmap = gadjett.collections.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
/**
 * Receives a collection of lengths and returns a list of start and end positions. Options:
 *   * `max-val`: (default `infinity`) - max value for `end`
 *   * `first-val`: (default 0) - first value of `start`
 * 
 * ~~~klipse
 *   (positions '(10 10 20) :first-val 100 :max-val 137)
 * ~~~
 * 
 *   
 */
gadjett.collections.positions = (function gadjett$collections$positions(var_args){
var args__12410__auto__ = [];
var len__12407__auto___91 = arguments.length;
var i__12408__auto___92 = (0);
while(true){
if((i__12408__auto___92 < len__12407__auto___91)){
args__12410__auto__.push((arguments[i__12408__auto___92]));

var G__93 = (i__12408__auto___92 + (1));
i__12408__auto___92 = G__93;
continue;
} else {
}
break;
}

var argseq__12411__auto__ = ((((1) < args__12410__auto__.length))?(new cljs.core.IndexedSeq(args__12410__auto__.slice((1)),(0),null)):null);
return gadjett.collections.positions.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12411__auto__);
});

gadjett.collections.positions.cljs$core$IFn$_invoke$arity$variadic = (function (coll_of_lengths,p__88){
var map__89 = p__88;
var map__89__$1 = (((((!((map__89 == null))))?(((((map__89.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__89.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__89):map__89);
var max_val = cljs.core.get.call(null,map__89__$1,new cljs.core.Keyword(null,"max-val","max-val",(-1492247884)),gadjett.collections.infinity);
var first_val = cljs.core.get.call(null,map__89__$1,new cljs.core.Keyword(null,"first-val","first-val",(1849924874)),(0));
var end_pos = cljs.core.rest.call(null,cljs.core.reductions.call(null,cljs.core._PLUS_,first_val,coll_of_lengths));
var start_pos = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_val], null),end_pos);
return cljs.core.map.call(null,((function (end_pos,start_pos,map__89,map__89__$1,max_val,first_val){
return (function (p1__5_SHARP_,p2__6_SHARP_){
return (new cljs.core.List(null,(function (){var x__10642__auto__ = max_val;
var y__10643__auto__ = p1__5_SHARP_;
return ((x__10642__auto__ < y__10643__auto__) ? x__10642__auto__ : y__10643__auto__);
})(),(new cljs.core.List(null,(function (){var x__10642__auto__ = max_val;
var y__10643__auto__ = p2__6_SHARP_;
return ((x__10642__auto__ < y__10643__auto__) ? x__10642__auto__ : y__10643__auto__);
})(),null,(1),null)),(2),null));
});})(end_pos,start_pos,map__89,map__89__$1,max_val,first_val))
,start_pos,end_pos);
});

gadjett.collections.positions.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.positions.cljs$lang$applyTo = (function (seq86){
var G__87 = cljs.core.first.call(null,seq86);
var seq86__$1 = cljs.core.next.call(null,seq86);
var self__12396__auto__ = this;
return self__12396__auto__.cljs$core$IFn$_invoke$arity$variadic(G__87,seq86__$1);
});

/**
 * Splits a collection to items where the separator is a repetition of at least n elements that satisfy `pred`.
 * 
 *   Inspired by: [this question](http://stackoverflow.com/a/23555616/813665).
 * 
 * ~~~klipse
 *   (split-by-predicate (shuffle (range 30)) even? 2)
 * ~~~
 *   
 */
gadjett.collections.split_by_predicate = (function gadjett$collections$split_by_predicate(coll,pred,n){
var part = cljs.core.partition_by.call(null,pred,coll);
var ppart = cljs.core.partition_by.call(null,((function (part){
return (function (x){
return (((cljs.core.count.call(null,x) >= n)) && (cljs.core.every_QMARK_.call(null,pred,x)));
});})(part))
,part);
return cljs.core.map.call(null,((function (part,ppart){
return (function (p1__7_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__7_SHARP_);
});})(part,ppart))
,ppart);
});
/**
 * 
 *   Optimized version of `split-by-predicate` where we assume that the data is from a signal that we can sample.
 * 
 *   Instead of checking each element, we check 1 over `n` elements.
 * 
 *  We return the positions where the data splits.
 * 
 * ~~~klipse
 *   (let [data (map Math/sin (range 0 6.28 0.001))]
 *  (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 10))
 * ~~~
 * 
 *   The following assertion holds:
 * 
 * ~~~clojure
 *   (= (split-by-predicate coll pred n)
 *   (map #(apply subsequence data %) (split-by-predicate-positions coll pred n 1)))
 * ~~~
 * 
 *   Here is an example:
 * 
 * ~~~klipse
 *   (let [data (map Math/sin (range 0 6.28 0.01))]
 *  (= (split-by-predicate data #(<= -0.01 % 0.01) 2)
 *     (map #(apply subsequence data %) (split-by-predicate-positions data #(<= -0.01 % 0.01) 2 1))))
 * ~~~
 *   
 */
gadjett.collections.split_by_predicate_positions = (function gadjett$collections$split_by_predicate_positions(coll,pred,n,d){
var lengths = cljs.core.map.call(null,(function (p1__8_SHARP_){
return (d * p1__8_SHARP_);
}),cljs.core.map.call(null,cljs.core.count,gadjett.collections.split_by_predicate.call(null,cljs.core.take_nth.call(null,d,coll),pred,(n / d))));
var pos = gadjett.collections.positions.call(null,lengths,new cljs.core.Keyword(null,"max-val","max-val",(-1492247884)),cljs.core.count.call(null,coll));
return pos;
});
/**
 * Checks if `m1` is a submap of `m2`.
 *   Map `m1` is a submap of `m2` if all key/value pairs in `m1` exist in `m2`.
 * 
 * ~~~klipse
 *   (submap? {:a 1} {:a 1 :b 2})
 * ~~~
 * 
 * ~~~klipse
 *   (submap? {:a 1} {:a 1 :b 2 :c nil})
 * ~~~
 *   
 */
gadjett.collections.submap_QMARK_ = (function gadjett$collections$submap_QMARK_(m1,m2){
return cljs.core._EQ_.call(null,m1,cljs.core.select_keys.call(null,m2,cljs.core.keys.call(null,m1)));
});
/**
 * 
 *   Returns a lazy subsequence of `coll`, starting at `start, ending at `end` (not included).
 * 
 * ~~~klipse
 *   (subsequence (range) 10 20)
 * ~~~
 *   
 */
gadjett.collections.subsequence = (function gadjett$collections$subsequence(coll,start,end){
return cljs.core.take.call(null,(end - start),cljs.core.drop.call(null,start,coll));
});
/**
 * Returns the index of an element in a sequence or `-1` if not present.
 * 
 *   ~~~klipse
 *   (index-of (range 100) 18)
 *   ~~~
 *   
 */
gadjett.collections.index_of = (function gadjett$collections$index_of(s,element){
var or__10138__auto__ = cljs.core.ffirst.call(null,cljs.core.filter.call(null,(function (p1__9_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__9_SHARP_),element);
}),cljs.core.map_indexed.call(null,(function (p1__10_SHARP_,p2__11_SHARP_){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__10_SHARP_,p2__11_SHARP_],null));
}),s)));
if(cljs.core.truth_(or__10138__auto__)){
return or__10138__auto__;
} else {
return (-1);
}
});
gadjett.collections.flatten_keys_STAR_ = (function gadjett$collections$flatten_keys_STAR_(a,ks,m){
if(cljs.core.map_QMARK_.call(null,m)){
if(cljs.core.seq.call(null,m)){
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.map.call(null,(function (p__94){
var vec__95 = p__94;
var k = cljs.core.nth.call(null,vec__95,(0),null);
var v = cljs.core.nth.call(null,vec__95,(1),null);
return gadjett.collections.flatten_keys_STAR_.call(null,a,cljs.core.conj.call(null,ks,k),v);
}),cljs.core.seq.call(null,m)));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
} else {
return cljs.core.assoc.call(null,a,ks,m);
}
});
/**
 * 
 * Flatten the keys of a nested map.
 * Thanks to [Jay Fields](http://blog.jayfields.com/2010/09/clojure-flatten-keys.html)
 * 
 * ~~~klipse
 * (flatten-keys {:a {:b 1} :c {:d 2 :e 4 :f {:g 8}}})
 * ~~~
 */
gadjett.collections.flatten_keys = (function gadjett$collections$flatten_keys(m){
return gadjett.collections.flatten_keys_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentVector.EMPTY,m);
});
/**
 * 
 *   Unflattend the keys of a map that has been `flatten-keys`ed.
 * 
 * ~~~klipse
 * (unflatten-keys {[:a :b] 1, [:c :d] 2, [:c :e] 4, [:c :f :g] 8})
 * ~~~
 */
gadjett.collections.unflatten_keys = (function gadjett$collections$unflatten_keys(m){
return cljs.core.reduce_kv.call(null,(function (a,b,c){
return cljs.core.assoc_in.call(null,a,b,c);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * Creates a map with n leaves which are nested values of m.
 *   The following assertion holds:
 * 
 * ~~~clojure
 *    (>= n (count (flatten-keys (take-from-map n m)))))))
 * ~~~
 * 
 * ~~~klipse
 *   (take-from-map 3 {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
 * ~~~
 *   
 */
gadjett.collections.take_from_map = (function gadjett$collections$take_from_map(n,m){
return gadjett.collections.unflatten_keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.take.call(null,n,gadjett.collections.flatten_keys.call(null,m))));
});
gadjett.collections.deep_merge_STAR_ = (function gadjett$collections$deep_merge_STAR_(var_args){
var args__12410__auto__ = [];
var len__12407__auto___99 = arguments.length;
var i__12408__auto___100 = (0);
while(true){
if((i__12408__auto___100 < len__12407__auto___99)){
args__12410__auto__.push((arguments[i__12408__auto___100]));

var G__101 = (i__12408__auto___100 + (1));
i__12408__auto___100 = G__101;
continue;
} else {
}
break;
}

var argseq__12411__auto__ = ((((0) < args__12410__auto__.length))?(new cljs.core.IndexedSeq(args__12410__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__12411__auto__);
});

gadjett.collections.deep_merge_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var f = (function (old,new$){
if(((cljs.core.map_QMARK_.call(null,old)) && (cljs.core.map_QMARK_.call(null,new$)))){
return cljs.core.merge_with.call(null,gadjett.collections.deep_merge_STAR_,old,new$);
} else {
return new$;
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,f,maps);
} else {
return cljs.core.last.call(null,maps);
}
});

gadjett.collections.deep_merge_STAR_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
gadjett.collections.deep_merge_STAR_.cljs$lang$applyTo = (function (seq98){
var self__12400__auto__ = this;
return self__12400__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq98));
});

/**
 *  Deep merges maps.
 * 
 * ~~~klipse
 * (deep-merge {} {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}} {:a {:b 1}, :c {:e 4, :d 2000, :f {:g 9000}}})
 * ~~~
 */
gadjett.collections.deep_merge = (function gadjett$collections$deep_merge(var_args){
var args__12410__auto__ = [];
var len__12407__auto___103 = arguments.length;
var i__12408__auto___104 = (0);
while(true){
if((i__12408__auto___104 < len__12407__auto___103)){
args__12410__auto__.push((arguments[i__12408__auto___104]));

var G__105 = (i__12408__auto___104 + (1));
i__12408__auto___104 = G__105;
continue;
} else {
}
break;
}

var argseq__12411__auto__ = ((((0) < args__12410__auto__.length))?(new cljs.core.IndexedSeq(args__12410__auto__.slice((0)),(0),null)):null);
return gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__12411__auto__);
});

gadjett.collections.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
var maps__$1 = cljs.core.filter.call(null,cljs.core.identity,maps);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error("Assert failed: (every? map? maps)"));
}

return cljs.core.apply.call(null,cljs.core.merge_with,gadjett.collections.deep_merge_STAR_,maps__$1);
});

gadjett.collections.deep_merge.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
gadjett.collections.deep_merge.cljs$lang$applyTo = (function (seq102){
var self__12400__auto__ = this;
return self__12400__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq102));
});

gadjett.collections.deep_merge_with_STAR_ = (function gadjett$collections$deep_merge_with_STAR_(var_args){
var args__12410__auto__ = [];
var len__12407__auto___108 = arguments.length;
var i__12408__auto___109 = (0);
while(true){
if((i__12408__auto___109 < len__12407__auto___108)){
args__12410__auto__.push((arguments[i__12408__auto___109]));

var G__110 = (i__12408__auto___109 + (1));
i__12408__auto___109 = G__110;
continue;
} else {
}
break;
}

var argseq__12411__auto__ = ((((1) < args__12410__auto__.length))?(new cljs.core.IndexedSeq(args__12410__auto__.slice((1)),(0),null)):null);
return gadjett.collections.deep_merge_with_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12411__auto__);
});

gadjett.collections.deep_merge_with_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (g,maps){
var f = (function (old,new$){
if(((cljs.core.map_QMARK_.call(null,old)) && (cljs.core.map_QMARK_.call(null,new$)))){
return cljs.core.merge_with.call(null,cljs.core.partial.call(null,gadjett.collections.deep_merge_with_STAR_,g),old,new$);
} else {
return g.call(null,old,new$);
}
});
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps)){
return cljs.core.apply.call(null,cljs.core.merge_with,f,maps);
} else {
return cljs.core.apply.call(null,g,maps);
}
});

gadjett.collections.deep_merge_with_STAR_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.deep_merge_with_STAR_.cljs$lang$applyTo = (function (seq106){
var G__107 = cljs.core.first.call(null,seq106);
var seq106__$1 = cljs.core.next.call(null,seq106);
var self__12396__auto__ = this;
return self__12396__auto__.cljs$core$IFn$_invoke$arity$variadic(G__107,seq106__$1);
});

/**
 * Like merge-with but deep.
 * ~~~klipse
 * (deep-merge-with concat
 *               {:x {:b [1]
 *                    :a [1]}}
 *               {:x {:a [3 4]}})
 * ~~~
 */
gadjett.collections.deep_merge_with = (function gadjett$collections$deep_merge_with(var_args){
var args__12410__auto__ = [];
var len__12407__auto___113 = arguments.length;
var i__12408__auto___114 = (0);
while(true){
if((i__12408__auto___114 < len__12407__auto___113)){
args__12410__auto__.push((arguments[i__12408__auto___114]));

var G__115 = (i__12408__auto___114 + (1));
i__12408__auto___114 = G__115;
continue;
} else {
}
break;
}

var argseq__12411__auto__ = ((((1) < args__12410__auto__.length))?(new cljs.core.IndexedSeq(args__12410__auto__.slice((1)),(0),null)):null);
return gadjett.collections.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12411__auto__);
});

gadjett.collections.deep_merge_with.cljs$core$IFn$_invoke$arity$variadic = (function (g,maps){
var maps__$1 = cljs.core.filter.call(null,cljs.core.identity,maps);
if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,maps__$1)){
} else {
throw (new Error("Assert failed: (every? map? maps)"));
}

return cljs.core.apply.call(null,cljs.core.merge_with,cljs.core.partial.call(null,gadjett.collections.deep_merge_with_STAR_,g),maps__$1);
});

gadjett.collections.deep_merge_with.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.deep_merge_with.cljs$lang$applyTo = (function (seq111){
var G__112 = cljs.core.first.call(null,seq111);
var seq111__$1 = cljs.core.next.call(null,seq111);
var self__12396__auto__ = this;
return self__12396__auto__.cljs$core$IFn$_invoke$arity$variadic(G__112,seq111__$1);
});

/**
 * Returns all branches and leaves off a nested map object.
 * 
 * ~~~klipse
 * (branches-and-leaves {:a {:b 1 :c {:d 2}} :e 3})
 * ~~~
 *   
 */
gadjett.collections.branches_and_leaves = (function gadjett$collections$branches_and_leaves(m){
var $ = cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,(function (p1__12_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__12_SHARP_)){
return cljs.core.vals.call(null,p1__12_SHARP_);
} else {
return p1__12_SHARP_;
}
}),m);
var $__$1 = cljs.core.group_by.call(null,cljs.core.coll_QMARK_,$);
var $__$2 = cljs.core.assoc.call(null,$__$1,true,(function (){var or__10138__auto__ = cljs.core.get.call(null,$__$1,true);
if(cljs.core.truth_(or__10138__auto__)){
return or__10138__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var $__$3 = cljs.core.assoc.call(null,$__$2,false,(function (){var or__10138__auto__ = cljs.core.get.call(null,$__$2,false);
if(cljs.core.truth_(or__10138__auto__)){
return or__10138__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
return clojure.set.rename_keys.call(null,$__$3,new cljs.core.PersistentArrayMap(null, 2, [true,new cljs.core.Keyword(null,"branches","branches",(-1240337268)),false,new cljs.core.Keyword(null,"leaves","leaves",(-2143630574))], null));
});
/**
 * Filters branches of a (nested) map `m` according to a predicate `m`.
 * 
 * ~~~klipse
 * (filter-branches {:x {:id 19 :b 1 :c {:id 2}} :e 3} :id)
 * ~~~
 *   
 */
gadjett.collections.filter_branches = (function gadjett$collections$filter_branches(m,p){
return cljs.core.filter.call(null,p,new cljs.core.Keyword(null,"branches","branches",(-1240337268)).cljs$core$IFn$_invoke$arity$1(gadjett.collections.branches_and_leaves.call(null,m)));
});
/**
 * Checks if index `idx` is in range of vector `v`. More efficient than `(get v idx)`
 * 
 * ~~~klipse
 *  (map #(out-of-bound? [1 2 3] %) [-1 0 1 2 3 4])
 * ~~~
 *   
 */
gadjett.collections.out_of_bound_QMARK_ = (function gadjett$collections$out_of_bound_QMARK_(v,idx){
return (((cljs.core.count.call(null,v) <= idx)) || (((0) > idx)));
});
/**
 * Splits a collection between two items according to predicate `pred` - which means split the sequence on breaking point.
 * 
 *   See: [here](http://stackoverflow.com/questions/23207490/partition-a-seq-by-a-windowing-predicate-in-clojure)
 * 
 *   For instance, split each time the series stop being ascending:
 * 
 * ~~~klipse
 * (partition-between > [1 2 4 9 8 7 6 5 1 2 4 5 11])
 * ~~~
 */
gadjett.collections.partition_between = (function gadjett$collections$partition_between(pred,coll){
var switch$ = cljs.core.reductions.call(null,cljs.core.not_EQ_,true,cljs.core.map.call(null,pred,coll,cljs.core.rest.call(null,coll)));
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.first),cljs.core.partition_by.call(null,cljs.core.second,cljs.core.map.call(null,cljs.core.list,coll,switch$)));
});
/**
 * Ensure `s` is a collection: if `s` is a collection returns it; otherwise returns (s)
 * 
 * ~~~klipse
 * (collify 1)
 * ~~~
 * 
 * ~~~klipse
 * (collify [1 2 3])
 * ~~~
 *   
 */
gadjett.collections.collify = (function gadjett$collections$collify(s){
if(cljs.core.coll_QMARK_.call(null,s)){
return s;
} else {
return (new cljs.core.List(null,s,null,(1),null));
}
});
/**
 * A zipper for `edn`.
 * 
 * ~~~klipse
 *   (edn-zip {:a {:b 1}, :c {:e 4, :d 2, :f {:g 8}}})
 * ~~~
 *   
 */
gadjett.collections.edn_zip = (function gadjett$collections$edn_zip(root){
return clojure.zip.zipper.call(null,(function (p1__13_SHARP_){
return ((cljs.core.vector_QMARK_.call(null,p1__13_SHARP_)) || (cljs.core.map_QMARK_.call(null,p1__13_SHARP_)) || (cljs.core.seq_QMARK_.call(null,p1__13_SHARP_)));
}),(function (node){
if(cljs.core.vector_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.map_QMARK_.call(null,node)){
return cljs.core.vec.call(null,node);
} else {
if(cljs.core.seq_QMARK_.call(null,node)){
return cljs.core.seq.call(null,node);
} else {
return null;
}
}
}
}),(function (node,children){
return cljs.core.with_meta.call(null,((cljs.core.vector_QMARK_.call(null,node))?cljs.core.vec.call(null,children):((cljs.core.map_QMARK_.call(null,node))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,children):((cljs.core.seq_QMARK_.call(null,node))?children:null))),cljs.core.meta.call(null,node));
}),root);
});
gadjett.collections.loc_my_replace = (function gadjett$collections$loc_my_replace(smap,loc){
var temp__9517__auto__ = cljs.core.find.call(null,smap,clojure.zip.node.call(null,loc));
if(cljs.core.truth_(temp__9517__auto__)){
var vec__116 = temp__9517__auto__;
var _ = cljs.core.nth.call(null,vec__116,(0),null);
var vec__119 = cljs.core.nth.call(null,vec__116,(1),null);
var seq__120 = cljs.core.seq.call(null,vec__119);
var first__121 = cljs.core.first.call(null,seq__120);
var seq__120__$1 = cljs.core.next.call(null,seq__120);
var replacement = first__121;
var values = seq__120__$1;
var $ = loc;
var $__$1 = clojure.zip.replace.call(null,$,replacement);
return cljs.core.reduce.call(null,((function ($,$__$1,vec__116,_,vec__119,seq__120,first__121,seq__120__$1,replacement,values,temp__9517__auto__){
return (function (agg,v){
return clojure.zip.insert_right.call(null,agg,v);
});})($,$__$1,vec__116,_,vec__119,seq__120,first__121,seq__120__$1,replacement,values,temp__9517__auto__))
,$__$1,cljs.core.reverse.call(null,values));
} else {
return loc;
}
});
/**
 * Recursively transforms `form` by replacing keys in `smap` with their
 *   values, spliced. The values in `smap` must be sequences. Like clojure.walk/prewalk-replace but supports list in values.
 * 
 * ~~~klipse
 * (my-replace '{go (go gadjett)} '(go (<! (timeout 100)) (go (<! timeout 0))))
 * ~~~
 *   
 */
gadjett.collections.my_replace = (function gadjett$collections$my_replace(smap,form){
if(cljs.core.every_QMARK_.call(null,cljs.core.seq_QMARK_,cljs.core.vals.call(null,smap))){
} else {
throw (new Error("Assert failed: (every? seq? (vals smap))"));
}

var loc = gadjett.collections.edn_zip.call(null,form);
while(true){
if(clojure.zip.end_QMARK_.call(null,loc)){
return clojure.zip.root.call(null,loc);
} else {
var G__122 = clojure.zip.next.call(null,gadjett.collections.loc_my_replace.call(null,smap,loc));
loc = G__122;
continue;
}
break;
}
});
gadjett.collections.comment_QMARK_ = (function gadjett$collections$comment_QMARK_(s){
return cljs.core.re_matches.call(null,/\s*;.*/,s);
});
/**
 * Removes comment lines from the end.
 * 
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["aa", "  ", "bb" "; this comment should not appear"])]
 *   (remove-ending-comments lines))
 * ~~~
 *   
 */
gadjett.collections.remove_ending_comments = (function gadjett$collections$remove_ending_comments(s){
return clojure.string.join.call(null,"\n",cljs.core.reverse.call(null,cljs.core.drop_while.call(null,gadjett.collections.comment_QMARK_,cljs.core.reverse.call(null,clojure.string.split_lines.call(null,s)))));
});
/**
 * Removes blank lines from the begining and from the end (not from the middle)
 * 
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["  ", "aa", "  ", "bb", " 	  "])]
 *   (fix-blank-lines lines))
 * ~~~
 *   
 */
gadjett.collections.fix_blank_lines = (function gadjett$collections$fix_blank_lines(s){
return clojure.string.join.call(null,"\n",cljs.core.reverse.call(null,cljs.core.drop_while.call(null,clojure.string.blank_QMARK_,cljs.core.reverse.call(null,cljs.core.drop_while.call(null,clojure.string.blank_QMARK_,clojure.string.split_lines.call(null,s))))));
});
/**
 * Removes blank lines.
 * ~~~klipse
 *   ; we use (char 10) for end-of-line due to technical issues with string manipulation with `codox`
 *   (let [lines (clojure.string/join (char 10) ["  ", "aa", "  ", "bb", " 	  "])]
 *   (remove-blank-lines lines))
 * ~~~
 *   
 */
gadjett.collections.remove_blank_lines = (function gadjett$collections$remove_blank_lines(s){
return clojure.string.join.call(null,"\n",cljs.core.remove.call(null,clojure.string.blank_QMARK_,clojure.string.split_lines.call(null,s)));
});
/**
 * 
 * (clojurescript only)
 * 
 * Compacts an expression by taking only the first `max-elements-in-coll` from collections and first `max-chars-in-str` from strings. Functions are displayed as "lambda()".
 * 
 * It works recursively. It is useful for logging and reporting.
 * 
 * Default settings:
 * 
 * - `max-elements-in-coll` 10
 * - `max-chars-in-str` 20
 * 
 * ~~~klipse
 * (compact {:infinite-list (range)
 *        :long-str "a very very very very long string - too long to be true"
 *                                                    :long-map (zipmap (range 100) (range 100))
 *                                                      :function #(+ 1 2)})
 * ~~~
 *                
 */
gadjett.collections.compact = (function gadjett$collections$compact(var_args){
var args__12410__auto__ = [];
var len__12407__auto___128 = arguments.length;
var i__12408__auto___129 = (0);
while(true){
if((i__12408__auto___129 < len__12407__auto___128)){
args__12410__auto__.push((arguments[i__12408__auto___129]));

var G__130 = (i__12408__auto___129 + (1));
i__12408__auto___129 = G__130;
continue;
} else {
}
break;
}

var argseq__12411__auto__ = ((((1) < args__12410__auto__.length))?(new cljs.core.IndexedSeq(args__12410__auto__.slice((1)),(0),null)):null);
return gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12411__auto__);
});

gadjett.collections.compact.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__125){
var map__126 = p__125;
var map__126__$1 = (((((!((map__126 == null))))?(((((map__126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__126):map__126);
var args = map__126__$1;
var max_elements_in_coll = cljs.core.get.call(null,map__126__$1,new cljs.core.Keyword(null,"max-elements-in-coll","max-elements-in-coll",(-2076494525)),(10));
var max_chars_in_str = cljs.core.get.call(null,map__126__$1,new cljs.core.Keyword(null,"max-chars-in-str","max-chars-in-str",(-182482200)),(20));
if(cljs.core._EQ_.call(null,x,true)){
return x;
} else {
if(cljs.core._EQ_.call(null,x,false)){
return x;
} else {
if((x == null)){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(typeof x === 'string'){
return cljs.core.subs.call(null,x,(0),max_chars_in_str);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return gadjett.collections.take_from_map.call(null,max_elements_in_coll,gadjett.collections.map_object.call(null,((function (map__126,map__126__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__14_SHARP_){
return gadjett.collections.compact.call(null,p1__14_SHARP_,args);
});})(map__126,map__126__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.seqable_QMARK_.call(null,x)){
return cljs.core.take.call(null,max_elements_in_coll,cljs.core.map.call(null,((function (map__126,map__126__$1,args,max_elements_in_coll,max_chars_in_str){
return (function (p1__15_SHARP_){
return gadjett.collections.compact.call(null,p1__15_SHARP_,args);
});})(map__126,map__126__$1,args,max_elements_in_coll,max_chars_in_str))
,x));
} else {
if(cljs.core.array_QMARK_.call(null,x)){
return ["***[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),"]***"].join('');
} else {
if(cljs.core._EQ_.call(null,Function,cljs.core.type.call(null,x))){
return "lambda()";
} else {
if((x instanceof Object)){
return ["***[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),(0),(15))),"]***"].join('');
} else {
return ["***[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x)),"]***"].join('');

}
}
}
}
}
}
}
}
}
}
}
});

gadjett.collections.compact.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
gadjett.collections.compact.cljs$lang$applyTo = (function (seq123){
var G__124 = cljs.core.first.call(null,seq123);
var seq123__$1 = cljs.core.next.call(null,seq123);
var self__12396__auto__ = this;
return self__12396__auto__.cljs$core$IFn$_invoke$arity$variadic(G__124,seq123__$1);
});

/**
 * Map the values of a nested map.
 * ~~~klipse
 *   (map-nested-vals first {:a [1 2 3]
 *                        :b {:c [4 5 6]}})
 * ~~~
 *   
 */
gadjett.collections.map_nested_vals = (function gadjett$collections$map_nested_vals(f,m){
return gadjett.collections.unflatten_keys.call(null,gadjett.collections.map_object.call(null,f,gadjett.collections.flatten_keys.call(null,m)));
});
/**
 * Join a sequence of collections `colls` according to function equality.
 * `fns` - a sequence of functions
 * `colls` - a sequence of collections
 * ~~~klipse
 * (let [a [{:id 1 :price 19} {:id 2 :price 3}]
 *      b [{:guid 1 :quantity 13}]]
 *   (join-them [:id :guid] [a b]))
 * ~~~
 */
gadjett.collections.join_them = (function gadjett$collections$join_them(fns,colls){
return cljs.core.vals.call(null,cljs.core.apply.call(null,gadjett.collections.deep_merge,cljs.core.map.call(null,gadjett.collections.mapify,fns,colls)));
});
/**
 * Like clojure.core/subs but prevents some exceptions when the `start` or `end` are out of bound.
 * ~~~klipse
 *   (subs "" -2)
 * ~~~
 * 
 *   
 */
gadjett.collections.substr = (function gadjett$collections$substr(var_args){
var G__132 = arguments.length;
switch (G__132) {
case (2):
return gadjett.collections.substr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return gadjett.collections.substr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

gadjett.collections.substr.cljs$core$IFn$_invoke$arity$2 = (function (s,start){
return cljs.core.subs.call(null,s,(function (){var x__10606__auto__ = (0);
var y__10607__auto__ = (function (){var x__10642__auto__ = start;
var y__10643__auto__ = cljs.core.count.call(null,s);
return ((x__10642__auto__ < y__10643__auto__) ? x__10642__auto__ : y__10643__auto__);
})();
return ((x__10606__auto__ > y__10607__auto__) ? x__10606__auto__ : y__10607__auto__);
})());
});

gadjett.collections.substr.cljs$core$IFn$_invoke$arity$3 = (function (s,start,end){
var start__$1 = (function (){var x__10606__auto__ = (0);
var y__10607__auto__ = (function (){var x__10642__auto__ = start;
var y__10643__auto__ = cljs.core.count.call(null,s);
return ((x__10642__auto__ < y__10643__auto__) ? x__10642__auto__ : y__10643__auto__);
})();
return ((x__10606__auto__ > y__10607__auto__) ? x__10606__auto__ : y__10607__auto__);
})();
var end__$1 = (function (){var x__10642__auto__ = cljs.core.count.call(null,s);
var y__10643__auto__ = end;
return ((x__10642__auto__ < y__10643__auto__) ? x__10642__auto__ : y__10643__auto__);
})();
return cljs.core.subs.call(null,s,start__$1,end__$1);
});

gadjett.collections.substr.cljs$lang$maxFixedArity = (3);

/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_keys_in_order = (function gadjett$collections$select_keys_in_order(m,keyseq){
return cljs.core.map.call(null,m,keyseq);
});
gadjett.collections.select_vals = (function gadjett$collections$select_vals(map,keyseq){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,map,keyseq));
});
/**
 * Thanks [Jay Fields](http://blog.jayfields.com/2011/01/clojure-select-keys-select-values-and.html)
 */
gadjett.collections.select_vals_in_order = (function gadjett$collections$select_vals_in_order(map,ks){
return cljs.core.reduce.call(null,(function (p1__16_SHARP_,p2__17_SHARP_){
return cljs.core.conj.call(null,p1__16_SHARP_,map.call(null,p2__17_SHARP_));
}),cljs.core.PersistentVector.EMPTY,ks);
});
/**
 * Call a function - that expects spliced key values - with a map (ignoring key/values where value is nil).
 * Useful when you need to remove some keys according to some conditions.
 */
gadjett.collections.apply_with_map = (function gadjett$collections$apply_with_map(f,args){
return cljs.core.apply.call(null,f,cljs.core.mapcat.call(null,cljs.core.identity,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,gadjett.collections.compactize_map.call(null,args))));
});
/**
 * 
 *   Receives [keyfn1 direction1 keyfn2 direction1 ...] coll
 *   Returns a sorted sequence of the items in coll, where the sort
 *   order is determined by comparing (keyfn1 item) with direction
 *   direction1, then by comparing (keyfn2 item) with direction
 *   direction2 ...
 * 
 *   ~~~klipse
 *   (order-by [first :desc second :asc] [[9 7] [9 4] [2 5] [9 2]])
 *   ~~~
 *   
 */
gadjett.collections.order_by = (function gadjett$collections$order_by(keyfn_direction_pairs,coll){
if(cljs.core.truth_(cljs.core.comp.call(null,cljs.core.even_QMARK_,cljs.core.count).call(null,keyfn_direction_pairs))){
} else {
throw (new Error("Assert failed: ((comp even? count) keyfn-direction-pairs)"));
}

if(cljs.core.every_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"asc","asc",(356854569)),null,new cljs.core.Keyword(null,"desc","desc",(2093485764)),null], null), null),cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,keyfn_direction_pairs)))){
} else {
throw (new Error("Assert failed: (->> keyfn-direction-pairs rest (take-nth 2) (every? #{:asc :desc}))"));
}

var keyfns = cljs.core.take_nth.call(null,(2),keyfn_direction_pairs);
var directions = cljs.core.take_nth.call(null,(2),cljs.core.rest.call(null,keyfn_direction_pairs));
return cljs.core.sort_by.call(null,cljs.core.apply.call(null,cljs.core.juxt,keyfns),((function (keyfns,directions){
return (function (x,y){
return cljs.core.apply.call(null,cljs.core.compare,cljs.core.reduce.call(null,((function (keyfns,directions){
return (function (p__134,p__135){
var vec__136 = p__134;
var x_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__136,(0),null);
var y_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__136,(1),null);
var vec__139 = p__135;
var order = cljs.core.nth.call(null,vec__139,(0),null);
var xi = cljs.core.nth.call(null,vec__139,(1),null);
var yi = cljs.core.nth.call(null,vec__139,(2),null);
var G__142 = order;
var G__142__$1 = (((G__142 instanceof cljs.core.Keyword))?G__142.fqn:null);
switch (G__142__$1) {
case "asc":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,x_SINGLEQUOTE_,xi),cljs.core.conj.call(null,y_SINGLEQUOTE_,yi)], null);

break;
case "desc":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,x_SINGLEQUOTE_,yi),cljs.core.conj.call(null,y_SINGLEQUOTE_,xi)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__142__$1)].join('')));

}
});})(keyfns,directions))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.call(null,(3),cljs.core.interleave.call(null,directions,x,y))));
});})(keyfns,directions))
,coll);
});

//# sourceURL=gadjett/collections.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FkamV0dC9jb2xsZWN0aW9ucy5qcyIsInNvdXJjZXMiOlsiY29sbGVjdGlvbnMuY2xqcyJdLCJsaW5lQ291bnQiOjE1MDEsIm1hcHBpbmdzIjoiO0FBTUEsQUFBS0EsK0JBQWtCQztBQUd2Qjs7Ozs7OzswQkFBQSwxQkFBTUMsNERBUUxDO0FBUkQsQUFTRSxJQUFBQyxtQkFBS0Q7SUFBTEUsbUJBQU8sR0FBR0Y7QUFBVixBQUFBLFNBQUFDLG1CQUFBQyxvQkFBQUQsbUJBQUFDOztBQUVGLDRCQUFBLDVCQUFPQyxnRUFBT0gsRUFBRUk7QUFBaEIsQUFDRSxHQUFJLEVBQUksT0FBQSxOQUFPSixnQkFBRyxPQUFBLE5BQU9JO0FBQXpCOztBQUVFLE9BQUNMLGtDQUFJQzs7O0FBRVQsQUFBQSxpQ0FBQSx5Q0FBQUssMUVBQU1FO0FBQU4sQUFBQSxJQUFBRCxRQUFBLEFBQUE7QUFBQSxBQUFBLFFBQUFBO0tBQUE7QUFBQSxPQUFBQyw2REFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsNkRBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsTUFBQSxLQUFBQyxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxBQUFBLCtEQUFBLC9EQUFNRCwwRUFDRlAsRUFBRUk7QUFETixBQUNTLG9EQUFBLDdDQUFDRyx5Q0FBUVAsRUFBRUk7OztBQURwQixBQUFBLCtEQUFBLC9EQUFNRywwRUFFRlAsRUFBRUksRUFBRUs7QUFGUixBQUVpQixTQUFJLEFBQUNDLHlCQUFFVixFQUFFSSxRQUNMLENBQUksQUFBQ0wsa0NBQUksQ0FBR0MsSUFBRUksT0FDVixDQUFHLEFBQUNELG9DQUFNSCxFQUFFSSxLQUFHSzs7O0FBSnhDLEFBQUEseURBQUEsekRBQU1GOztBQUFOLEFBT0EsOEJBQUEsOUJBQU9JLG9FQUFNQyxFQUFFQztBQUFmLEFBQ0UsT0FBQ0gseUJBQUUseUJBQUEsekJBQUNJLDJEQUFTRixHQUNWLHlCQUFBLHpCQUFDRSwyREFBU0Q7O0FBRWY7Ozs7Ozs7OzhDQUFBLDlDQUFNRSxvR0FPSEMsTUFBTUMsTUFBTUM7QUFQZixBQVFFLE9BQUNDLDBCQUFNVCxlQUFFLHdCQUFBLFdBQUFVLG5DQUFDQztBQUFELEFBQU0sa0RBQUFELDNDQUFDRCwwQkFBTUcsOEJBQVNKO0dBQXRCLG1GQUFrQ0YsTUFBTUM7O0FBRW5EOzs7Ozs7OztrQ0FBQSxsQ0FBTU0sNEVBT0hDO0FBUEgsQUFRRSxnQ0FBQSx6QkFBQ1YsNERBQVFVOztBQUVYOzs7Ozs7OztpQ0FBQSxqQ0FBTUMsMEVBUUhDLEVBQUVDO0FBUkwsQUFTRSxPQUFDTix3QkFBSSxXQUFBTztBQUFBLEFBQUEsSUFBQUMsVUFBQUQ7UUFBQSxBQUFBRSx3QkFBQUQsUUFBQSxJQUFBLHhDQUFLRTtTQUFMLEFBQUFELHdCQUFBRCxRQUFBLElBQUEsekNBQU9HO0FBQVAsQUFBQSwwRkFBYUQsRUFBRSxBQUFDTCxZQUFFTTtHQUFNTDs7QUFFL0I7Ozs7Ozs7OztvQ0FBQSxwQ0FBTU0sZ0ZBU0pDLEdBQUdDLEdBQUdSO0FBVFIsQUFVRSxPQUFDTix3QkFBSSxXQUFBZTtBQUFBLEFBQUEsSUFBQUMsVUFBQUQ7UUFBQSxBQUFBTix3QkFBQU8sUUFBQSxJQUFBLHhDQUFLTjtTQUFMLEFBQUFELHdCQUFBTyxRQUFBLElBQUEsekNBQU9MO0FBQVAsQUFBQSwwRkFBYSxBQUFDRSxhQUFHSCxHQUFHLEFBQUNJLGFBQUdIO0dBQU1MOztBQUVyQzs7Ozs7Ozs7aUNBQUEsakNBQU1XLDBFQU9IWixFQUFFQztBQVBMLEFBUUUsT0FBQ0osMENBQVMsQUFBQ0UseUNBQVdDLEVBQUVDOztBQUUxQjs7Ozs7Ozs7MENBQUEsMUNBQU1ZLDRGQU9IYixFQUFFQztBQVBMLEFBUUUsZ0NBQUEsekJBQUNiLDREQUFRLEFBQUNPLHdCQUFJLFdBQUFtQjtBQUFBLEFBQUEsSUFBQUMsVUFBQUQ7UUFBQSxBQUFBVix3QkFBQVcsUUFBQSxJQUFBLHhDQUFNN0I7UUFBTixBQUFBa0Isd0JBQUFXLFFBQUEsSUFBQSx4Q0FBUTVCO0FBQVIsQUFBQSwwRkFBYUQsRUFBRSxBQUFDYyxZQUFFZCxFQUFFQztHQUFLYzs7QUFFekM7Ozs7Ozs7b0NBQUEscENBQU1lLGdGQU9MUixHQUFHQyxHQUFHUjtBQVBQLEFBUUUsT0FBQ0osMENBQVMsQUFBQ1UsNENBQWNDLEdBQUdDLEdBQUdSOztBQUVqQzs7Ozs7Ozs7OzRDQUFBLDVDQUFNZ0IsZ0dBU0xoQjtBQVRELEFBVUUsSUFBQWlCLG9CQUFJLEFBQUN6QiwwQkFBTTBCLHFCQUFXQyxlQUNmLGlCQUFBQyxzQkFBQSwrREFBQUM7QUFBQSxBQUFBLFlBQUFDLGtCQUFBLEtBQUE7QUFBQSxBQUFBLElBQUFELFlBQUFBOztBQUFBLEFBQUEsSUFBQUUscUJBQUEsQUFBQUMsd0JBQUFIO0FBQUEsQUFBQSxHQUFBRTtBQUFBLEFBQUEsSUFBQUUsbUJBQUFGO0FBQUEsQUFBQSxJQUFBRyxVQUFBLEFBQUFDLDBCQUFBRjtTQUFBLEFBQUF0Qix3QkFBQXVCLFFBQUEsSUFBQSx6Q0FBT3dCO1NBQVAsQUFBQS9DLHdCQUFBdUIsUUFBQSxJQUFBLHpDQUFVeUI7QUFBVixBQUFBLElBQUF2Qix3QkFBQTtpRkFBQUM7QUFBQSxBQUFBLFlBQUFQLGtCQUFBLEtBQUE7O0FBQUEsQUFBQSxJQUFBTyxZQUFBQTs7QUFBQSxBQUFBLElBQUFOLHlCQUFBLEFBQUFDLHdCQUFBSztBQUFBLEFBQUEsR0FBQU47QUFBQSxBQUFBLElBQUFNLFlBQUFOO0FBQUEsQUFBQSxHQUFBLEFBQUFPLHVDQUFBRDtBQUFBLElBQUFFLG1CQTJ5RTBDLEFBQUFrUyxnQ0FBQXBTO0lBM3lFMUNHLHNCQUFBLEFBQUFDLDBCQUFBRjtJQUFBRyxRQUFBLEFBQUFDLGlDQUFBSDtBQUFBLEFBQUEsR0FBQSxBQUFBLGlCQUFBSSxRQUFBOztBQUFBLEFBQUEsR0FBQSxDQUFBQSxRQUFBSjtBQUFBLElBQUFLLFVBQUEsQUFBQUMseUJBQUFQLGlCQUFBSztTQUFBLEFBQUFqQyx3QkFBQWtDLFFBQUEsSUFBQSx6Q0FBaUJlO1NBQWpCLEFBQUFqRCx3QkFBQWtDLFFBQUEsSUFBQSx6Q0FBb0JnQjtBQUFwQixBQUFBLEFBQUEsQUFBQWQsaUNBQUFMLE1BQUEsbURBQUEsSEFBNkJrQixtREFBSUYsR0FBR0c7O0FBQXBDLFlBQUEsQ0FBQWpCLFFBQUE7Ozs7QUFBQTs7Ozs7QUFBQSxPQUFBSSwrQkFBQSxBQUFBQywwQkFBQVAsT0FBQSxBQUFBUSwwRUFBQSxBQUFBQywrQkFBQWQ7O0FBQUEsT0FBQVcsK0JBQUEsQUFBQUMsMEJBQUFQLE9BQUE7OztBQUFBLElBQUFVLFVBQUEsQUFBQWpCLDBCQUFBRTtTQUFBLEFBQUExQix3QkFBQXlDLFFBQUEsSUFBQSx6Q0FBaUJRO1NBQWpCLEFBQUFqRCx3QkFBQXlDLFFBQUEsSUFBQSx6Q0FBb0JTO0FBQXBCLEFBQUEsT0FBQVIseUJBQUEsbURBQUEsMERBQUEsQUFBQUgsMEVBQUEsQUFBQUkseUJBQUFqQixoS0FBNkJ1QixtREFBSUYsR0FBR0c7OztBQUFwQzs7Ozs7Q0FBQSxLQUFBOzs7SUFBQU4sb0JBQUEsQUFBQXZCLHdCQUFBLEFBQUFJLGdDQUF3QnVCO0FBQXhCLEFBQUEsR0FBQUo7QUFBQSxPQUFBQywyQkFBQUQsa0JBQUEsQUFBQUUsK0RBQUEsQUFBQUgseUJBQUF6Qjs7QUFBQSxZQUFBLEFBQUF5Qix5QkFBQXpCOzs7OztBQUFBOzs7O0dBQUEsS0FBQTs7QUFBQSxBQUFBLE9BQUFELDhCQUFjcEI7O0FBRHJCLEFBQUEsb0JBQUFpQjtBQUFBQTs7QUFBQTs7O0FBSUY7Ozs7Ozs7OzJCQUFBLDNCQUFNcUMsOERBT0pqRjtBQVBGLEFBUUUsR0FBSSxBQUFDa0YsaUNBQU9sRjtBQUFaOztBQUNFLFFBQUcsQUFBQ21CLDBCQUFNZ0UsaUJBQUVuRixLQUNULEFBQUM0RCwwQkFBTTVEOzs7QUFFZDs7Ozs7Ozs7dUNBQUEsdkNBQU1vRixzRkFPSEM7QUFQSCxBQVFFLE9BQUNDLDJCQUFPLEFBQUNDLDBCQUFNLEFBQUMzQiwwQkFBTXlCLElBQUlBOztBQUU1Qjs7Ozs7Ozs7Ozs7OzsrQ0FBQSwvQ0FBTUcsc0dBWUhDLEtBQUtDLE9BQU9DO0FBWmYsQUFhRSxPQUFDQywyQkFBTyxXQUFLQyxJQUFJbEU7QUFBVCxBQUNFLE9BQUNtRSwwQkFBTUQsSUFBSSxBQUFDSCxpQkFBTy9ELEdBQUcsQUFBQ2dFLGlCQUFPaEU7R0FEeEMsbUNBR1E4RDs7QUFFVixBQUFBLHFDQUFBLDZDQUFBcEYsbEZBQU8yRjtBQUFQLEFBQUEsSUFBQUQsUUFBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUMsaUVBQUEsQ0FBQSxVQUFBOzs7S0FBQTtBQUFBLE9BQUFBLGlFQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7O0tBQUE7QUFBQSxPQUFBQSxpRUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7Ozs7QUFBQSxNQUFBLEtBQUF4RixNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxBQUFBLG1FQUFBLG5FQUFPd0YsOEVBQ0hDO0FBREosQUFBQSwwRkFDVUEsSUFBSSxBQUFDViwwQkFBTVU7OztBQURyQixBQUFBLG1FQUFBLG5FQUFPRCw4RUFFSEUsTUFBTUQ7QUFGVixBQUFBLDBGQUVnQkEsSUFBSSxBQUFDViwwQkFBTVcsTUFBTUQ7OztBQUZqQyxBQUFBLG1FQUFBLG5FQUFPRCw4RUFHSEUsTUFBTUQsSUFBSUU7QUFIZCxBQUFBLDBGQUdzQkYsSUFBSSxBQUFDViwwQkFBTVcsTUFBTUQsSUFBSUU7OztBQUgzQyxBQUFBLDZEQUFBLDdEQUFPSDs7QUFBUCxBQUtBLEFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUFBLDZDQUFBM0YsbEZBQU1tRztBQUFOLEFBQUEsSUFBQUosc0JBQUE7QUFBQSxBQUFBLElBQUFDLHdCQUFBLEFBQUE7QUFBQSxBQUFBLElBQUFDLHNCQUFBOztBQUFBLEFBQUEsR0FBQSxDQUFBQSxzQkFBQUQ7QUFBQSxBQUFBLEFBQUFELHlCQUFBLENBQUEsVUFBQUU7O0FBQUEsWUFBQSxDQUFBQSxzQkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQUMsd0JBQUEsRUFBQSxDQUFBLE1BQUEsQUFBQUgsNkJBQUEsQUFBQSwwQkFBQSxBQUFBQSwwQkFBQSxLQUFBLElBQUEsT0FBQSwvREFzNkZzRHlQO0FBdDZGdEQsQUFBQSxPQUFBclAsd0VBQUFEOzs7QUFBQSxBQUFBLEFBQUEsMEVBQUEsMUVBQU1DLHFGQWdCREc7QUFoQkwsQUFpQkUsSUFBQUMsVUFBZ0IsQUFBQ3pGLDBCQUFNNkUsbUNBQWVXO1VBQXRDLEFBQUE3RSx3QkFBQThFLFFBQUEsSUFBQSwxQ0FBT1g7VUFBUCxBQUFBbkUsd0JBQUE4RSxRQUFBLElBQUEsMUNBQVdDO0FBQVgsQUFDRyxzQ0FBQSwvQkFBQ2xDLDJCQUFPa0MsdUZBQUtaOzs7QUFsQmxCLEFBQUEsNkRBQUEsN0RBQU1POztBQUFOO0FBQUEsQUFBQSx1REFBQSxXQUFBQyxsRUFBTUQ7QUFBTixBQUFBLElBQUFFLHNCQUFBO0FBQUEsQUFBQSxPQUFBQSx5REFBQSxBQUFBdkQsd0JBQUFzRDs7O0FBQUEsQUFvQkE7Ozs7Ozs7Ozs7OztvQ0FBQSxwQ0FBTUssZ0ZBV0hDLElBQUluRztBQVhQLEFBWUUsR0FBSSxBQUFDdUMsd0JBQUk0RDtBQUNQLGdFQUFBLHpEQUFDcEMsMkJBQU8sQUFBQ0YseUJBQUtzQyx3RkFBTW5HOztBQUNwQm1HOzs7QUFFSixBQUFBOzs7Ozs7Ozs7Ozs7OzttQ0FBQSwyQ0FBQTFHLDlFQUFNNEc7QUFBTixBQUFBLElBQUFELFFBQUEsQUFBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLE9BQUFDLCtEQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7O0tBQUE7QUFBQSxPQUFBQSwrREFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7Ozs7QUFBQSxNQUFBLEtBQUF6RyxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxBQUFBLGlFQUFBLGpFQUFNeUcsNEVBYUZ4QixLQUFLMUQsRUFBRW1GO0FBYlgsQUFjRyxHQUFJLEFBQUNDLG9DQUFVMUIsS0FBSzFEO0FBQ2xCLE9BQUMrRCwwQkFBTUwsS0FBSzFELEVBQUVtRjs7QUFDZCxnQ0FBQSx6QkFBQ3BHLDREQUFRLGlEQUFBLGpEQUFDZ0csNENBQWNyQix3RkFBTTFELEVBQUVtRjs7OztBQWhCckMsQUFBQSxpRUFBQSxqRUFBTUQsNEVBaUJGeEIsS0FBSzFELEVBQUVtRixFQUFFRTtBQWpCYixBQWtCRyxHQUFJLENBQUcsQUFBQ3hELDBCQUFNNkIsUUFBTTJCO0FBQ2xCLE9BQUN0QiwwQkFBTUwsS0FBSzFELEVBQUVtRjs7QUFDZCxPQUFDRCwyQ0FBYXhCLEtBQUsxRCxFQUFFbUY7Ozs7QUFwQjFCLEFBQUEsMkRBQUEsM0RBQU1EOztBQUFOLEFBc0JBOzs7Ozs7OztrQ0FBQSxsQ0FBTUksNEVBT0hySDtBQVBILEFBUUUsR0FBSSxBQUFDa0YsaUNBQU9sRjtBQUFaLDBGQUFBLElBQUE7O0FBRUUsT0FBQyx5QkFBQSxXQUFBc0gscENBQUNFO0FBQUQsQUFBTywrQ0FBQUYseENBQUNuRywwQkFBTXNHO0dBQWQsV0FBQUY7QUFBQSxBQUFzQiwrQ0FBQUEseENBQUNwRywwQkFBTXVHO2NBQVExSDs7O0FBRTFDOzs7Ozs7OztxQ0FBQSxyQ0FBTTJILGtGQU9IaEc7QUFQSCxBQVFFLGdDQUFBLHpCQUFDYiw0REFBUSxBQUFDOEcsMkJBQU8sQUFBQ0MseUJBQUtDLHFCQUFLQyxrQkFBUXBHOztBQUl0Qzs7Ozs7Ozs7OytDQUFBLC9DQUFNcUcsc0dBUURyRztBQVJMLEFBU0UsSUFBTUQsSUFBRSxXQUFLMUI7QUFBTCxBQUNFLEdBQUksQUFBQ2lJLCtCQUFLakk7QUFDUixJQUFNa0ksTUFBSSxBQUFDQywyQkFBTyxBQUFDTix5QkFBS08sY0FBSU4scUJBQUtDLGtCQUFRL0g7QUFBekMsQUFDRSxHQUFJLEFBQUNrRixpQ0FBT2dEO0FBQVo7O0FBQXFCLGdDQUFBLHpCQUFDcEgsNERBQVFvSDs7O0FBQ2hDbEk7OztBQUpaLEFBS0UsT0FBQ3FJLGdDQUFTM0csRUFBRUM7O0FBRWhCOzs7Ozs7OztpQ0FBQSxqQ0FBTTJHLDBFQU9INUcsRUFBRUM7QUFQTCxBQVFFLGdDQUFBLHpCQUFDYiw0REFBUSxBQUFDcUgsMkJBQU8sQUFBQ04seUJBQUtuRyxFQUFFNkcsZUFBSzVHOztBQU9oQzs7Ozs7Ozs7b0NBQUEscENBQU02RyxnRkFPSEMsR0FBR3pJO0FBUE4sQUFRRSxJQUFNMEksVUFBUSxBQUFDcEYsMEJBQU0sQUFBQ3FGLDJCQUFPRixHQUFHRyxtQkFBRzVJO0lBQzdCNkksVUFBUSxBQUFDdkYsMEJBQU0sQUFBQ3dGLDRCQUFRTCxHQUFHTSxtQkFBRy9JO0FBRHBDLEFBRUUsbURBQUEsNUNBQUNtQiwwQkFBTThIO2tCQUFQRDtBQUFBLEFBQWdCLE9BQUNqSixrQ0FBSSxDQUFBaUosZUFBS2hKOztDQUFJLGdEQUFBLGhEQUFDNEgsMkJBQU9FLHdHQUFNWSxRQUFRRzs7QUFFeEQ7Ozs7Ozs7OztxQ0FBQSxyQ0FBTUssa0ZBUUh0SSxFQUFFQztBQVJMLEFBU0UsR0FBSSxBQUFDcUUsaUNBQU90RTtBQUNWQzs7QUFDQSxPQUFDUSx3QkFBSSxBQUFDOEgsNEJBQVFYLGtDQUFjLEFBQUNySCwwQkFBTWlJLHFCQUFXeEksSUFBSUM7OztBQUV0RDs7Ozs7Ozs7b0NBQUEscENBQU13SSxnRkFPSDNILEVBQUVxRjtBQVBMLEFBUUUsT0FBQ3pCLDJCQUFPeUIsSUFBSSxBQUFDMUYsd0JBQUlLLEVBQUVxRjs7QUFFckI7Ozs7Ozs7Ozs7OzZCQUFBLDdCQUFNdUMsa0VBVUg1SCxFQUFFMkQ7QUFWTCxBQVdFLE9BQUNDLDJCQUFPLEFBQUNqRSx3QkFBSUssRUFBRTJELEdBQUdBOztBQUVwQjs7Ozs7Ozs7cUNBQUEsckNBQU1rRSxrRkFPSGxFLEVBQUVtRSxRQUFRQztBQVBiLEFBUUUsT0FBQ0MsZ0NBQVksV0FBS0MsRUFBRXpDO0FBQVAsQUFBQSx1REFBV3NDLFFBQVFHLEVBQUVGLFFBQVF2QztHQUFJN0I7O0FBRWhEOzs7Ozs7Ozs7Ozs7Ozs7O2dDQUFBLDBDQUFBdUUsMUVBQU1LLHdFQWVIdEk7QUFmSCxBQUFBLElBQUFrSSxVQUFBRDtJQUFBRSxVQUFBLEFBQUEzRyx3QkFBQTBHO0lBQUFFLFlBQUEsQUFBQXpHLDBCQUFBd0c7SUFBQUEsY0FBQSxBQUFBRSx5QkFBQUY7UUFBQUMsSkFlTWhJO1NBZk4rSCxMQWVVSTtXQWZWTCxQQWVpQk07QUFmakIsQUFnQkUsR0FBSUQ7QUFDRixJQUFBRSxxQkFBaUIsQUFBQ0Usd0JBQUkzSSxFQUFFSTtBQUF4QixBQUFBLG9CQUFBcUk7QUFBQSxjQUFBQSxWQUFTQztBQUFULEFBQ0UsSUFBTUUsU0FBTyxBQUFDTix3Q0FBVUksUUFBUUg7QUFBaEMsQUFDRSxHQUFJLEFBQUMvRyx3QkFBSW9IO0FBQ1AsT0FBQ3pFLDBCQUFNbkUsRUFBRUksRUFBRXdJOztBQUNYLE9BQUNqSiwyQkFBT0ssRUFBRUk7OztBQUNkSjs7O0FBQ0YsT0FBQ0wsMkJBQU9LLEVBQUVJOzs7QUFFZCxBQUFBOzs7Ozs7Ozs7OztnQ0FBQSx3Q0FBQTFCLHhFQUFNbUs7QUFBTixBQUFBLElBQUFwRSxzQkFBQTtBQUFBLEFBQUEsSUFBQUMsd0JBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsc0JBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHNCQUFBRDtBQUFBLEFBQUEsQUFBQUQseUJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxZQUFBLENBQUFBLHNCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSxFQUFBLENBQUEsTUFBQSxBQUFBSCw2QkFBQSxBQUFBLDBCQUFBLEFBQUFBLDBCQUFBLEtBQUEsSUFBQSxPQUFBLC9EQWt1RnNEeVA7QUFsdUZ0RCxBQUFBLE9BQUFyTCxtRUFBQSxDQUFBLFVBQUEsTUFBQWpFOzs7QUFBQSxBQUFBLEFBQUEscUVBQUEsMkJBQUFrRSxoR0FBTUQsZ0ZBVUxRO0FBVkQsQUFBQSxJQUFBTixVQUFBRDtJQUFBQyxjQUFBLEVBQUEsRUFBQSxHQUFBLENBQUFBLFdBQUEsU0FBQSxFQUFBLEVBQUEsQ0FBQSxBQUFBQSw4Q0FBQSxXQUFBLENBQUFDLGdDQUFBLEFBQUFELDRCQUFBLEtBQUEsT0FBQSxRQUFBLEFBQUF2SiwwQkFBQXlKLG1CQUFBRixTQUFBQTtjQUFBLEFBQUFKLHdCQUFBSSxZQUFBLDlDQVUyQk8sNEdBQWdDcEw7Z0JBVjNELEFBQUF5Syx3QkFBQUksWUFBQSxpRUFBQSxqSEFVbUNRO0FBVm5DLEFBV0UsSUFBTUMsVUFBUSxBQUFDMUcseUJBQUssQUFBQzJHLCtCQUFXakcsaUJBQUUrRixVQUFVRjtJQUN0Q0ssWUFBVSwyQkFBQSwzQkFBQzFHLDhHQUFRdUcsa0JBQVdDO0FBRHBDLEFBRUUsK0JBQUEseEJBQUM5SjtrQkFBRGlLLGFBQUFDO0FBQUEsQUFBTSxZQUFBQyxlQUFBLEtBQU0saUJBQUFDLG1CQUFLUjtJQUFMUyxtQkFBQUo7QUFBQSxBQUFBLFNBQUFHLG1CQUFBQyxvQkFBQUQsbUJBQUFDO0tBQU4sS0FBQUYsZUFBQSxLQUF1QixpQkFBQUMsbUJBQUtSO0lBQUxTLG1CQUFBSDtBQUFBLEFBQUEsU0FBQUUsbUJBQUFDLG9CQUFBRCxtQkFBQUM7S0FBdkIsS0FBQSxJQUFBLE9BQUEsSUFBQTs7Q0FBeUNMLFVBQVVGOzs7QUFiN0QsQUFBQSx3REFBQSx4REFBTVg7O0FBQU47QUFBQSxBQUFBLGtEQUFBLFdBQUFLLDdEQUFNTDtBQUFOLEFBQUEsSUFBQU0sUUFBQSwwQkFBQUQsMUJBbXFGZ0R2SDtJQW5xRmhEdUgsWUFBQSx5QkFBQUEsekJBb3FGa0RiO0FBcHFGbEQsQUFBQSxJQUFBZSxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUFELE1BQUFEOzs7QUFBQSxBQWVBOzs7Ozs7Ozs7O3lDQUFBLHpDQUFNYywwRkFTTGxHLEtBQUttRyxLQUFLeEU7QUFUWCxBQVVFLElBQU15RSxPQUFNLEFBQUNDLGlDQUFjRixLQUFLbkc7SUFDMUJzRyxRQUFNLEFBQUNELGlDQUFhO2tCQUFLOUw7QUFBTCxBQUFRLFNBQ0UsQ0FBSSxBQUFDNEQsMEJBQU01RCxNQUFHb0gsUUFDZCxBQUFDNEUsaUNBQU9KLEtBQUs1TDs7Q0FBSzZMO0FBSHRELEFBSU0sK0JBQUEseEJBQUN4SztrQkFBRDRLO0FBQUEsQUFBTSxrREFBQUEsM0NBQUM5SywwQkFBTXdEOztDQUFVb0g7O0FBRS9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttREFBQSxuREFBTUcsOEdBNEJIekcsS0FBS21HLEtBQUt4RSxFQUFFK0U7QUE1QmYsQUE2QkUsSUFBTUMsVUFBUSx3QkFBQSxXQUFBQyxuQ0FBQ2hMO0FBQUQsQUFBTSxZQUFBZ0wsSkFBR0Y7R0FBSyxBQUFDOUssd0JBQUl1QyxnQkFBTSxBQUFDK0gsaURBQW1CLEFBQUNXLDZCQUFTSCxFQUFFMUcsTUFBTW1HLEtBQUssQ0FBR3hFLElBQUUrRTtJQUNqRkksTUFBSSxnREFBQSxoREFBQy9CLHdDQUFVNEIsc0VBQWlCLEFBQUN4SSwwQkFBTTZCO0FBRDdDLEFBRUU4Rzs7QUFFSjs7Ozs7Ozs7Ozs7OztvQ0FBQSxwQ0FBTUMsZ0ZBWUhDLEdBQUdDO0FBWk4sQUFhRSxPQUFDaE0seUJBQUUrTCxHQUFHLEFBQUNFLGdDQUFZRCxHQUFHLEFBQUNFLHlCQUFLSDs7QUFFOUI7Ozs7Ozs7OztrQ0FBQSxsQ0FBTUksNEVBUUhwSCxLQUFLUyxNQUFNRDtBQVJkLDhDQVNPLEFBQUM2Ryx5QkFBSzVHLE1BQU1ULDdFQUNaLE9BQUNzSCx5QkFBSyxDQUFHOUcsTUFBSUM7O0FBRXBCOzs7Ozs7OzsrQkFBQSwvQkFBTThHLHNFQU9IM0gsRUFBRTRIO0FBUEwsQUFRRSxJQUFBckssb0JBQUksQUFBQ3NLLDJCQUFPLDJCQUFBLFdBQUFDLHRDQUFDaEY7QUFBRCxBQUFTLE9BQUN6SCx5QkFBRSwyQkFBQXlNLDNCQUFDcEYseUNBQVVrRjtHQUFTLGdDQUFBLFdBQUFHLGNBQUFDLHpEQUFDM0Q7QUFBRCxBQUFjLFlBQUE0RCwyQkFBQSxLQUFBLElBQUEsSUFBQSxBQUFBQSxzQ0FBQSxDQUFBRixjQUFBQyxlQUFBO0dBQWVoSTtBQUF6RSxBQUFBLG9CQUFBekM7QUFBQUE7O0FBQUE7OztBQUdGLHlDQUFBLHpDQUFPMkssMEZBQWUzTSxFQUFFc0osR0FBR3ZJO0FBQTNCLEFBQ0UsR0FBSSxBQUFDc0csK0JBQUt0RztBQUNSLEdBQUksQUFBQ3dCLHdCQUFJeEI7QUFDUCxPQUFDaUUsMkJBQU85RSxlQUFLLEFBQUNPLHdCQUFJLFdBQUFtTTtBQUFBLEFBQUEsSUFBQUMsVUFBQUQ7UUFBQSxBQUFBMUwsd0JBQUEyTCxRQUFBLElBQUEseENBQU0xTDtRQUFOLEFBQUFELHdCQUFBMkwsUUFBQSxJQUFBLHhDQUFRdkc7QUFBUixBQUFZLE9BQUNxRyxpREFBYzNNLEVBQUUsQUFBQ2tDLHlCQUFLb0gsR0FBR25JLEdBQUdtRjtHQUFJLEFBQUMvRCx3QkFBSXhCOztBQUR0RTs7O0FBR0EsT0FBQ21FLDBCQUFNbEYsRUFBRXNKLEdBQUd2STs7O0FBRWhCOzs7Ozs7Ozs7bUNBQUEsbkNBQU0rTCw4RUFTSC9MO0FBVEgsQUFTTSx3REFBQSxtQ0FBQSxwRkFBQzRMLHFIQUFvQjVMOztBQUUzQjs7Ozs7Ozs7cUNBQUEsckNBQU1nTSxrRkFRSGhNO0FBUkgsQUFTRSxPQUFDaU0sOEJBQVUsV0FBS2hOLEVBQUVDLEVBQUVnTjtBQUFULEFBQVksT0FBQ0MsNkJBQVNsTixFQUFFQyxFQUFFZ047R0FBckMsbUNBQTRDbE07O0FBRTlDOzs7Ozs7Ozs7Ozs7O29DQUFBLHBDQUFNb00sZ0ZBWUgzRyxFQUFFekY7QUFaTCxBQWFFLHNMQUFLQSwzQ0FDQStMLDNCQUNBLDJCQUFBLDNCQUFDWCx5QkFBSzNGLHJGQUNOLHlCQUFBLHpCQUFDdEcsN0NBQ0Q2TTs7QUFFUCxBQUFBLHVDQUFBLCtDQUFBdE4sdEZBQU8yTjtBQUFQLEFBQUEsSUFBQTVILHNCQUFBO0FBQUEsQUFBQSxJQUFBQyx3QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyx1QkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEsdUJBQUFEO0FBQUEsQUFBQSxBQUFBRCx5QkFBQSxDQUFBLFVBQUFFOztBQUFBLGFBQUEsQ0FBQUEsdUJBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUFDLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFILDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBNGtGc0R5UDtBQTVrRnRELEFBQUEsT0FBQTdILDBFQUFBekg7OztBQUFBLEFBQUEsQUFBQSw0RUFBQSw1RUFBT3lILHVGQUFlRTtBQUF0QixBQUNFLElBQU14TSxJQUFFLFdBQUt5TSxJQUFJQztBQUFULEFBQ0UsR0FBSSxFQUFLLEFBQUNuRywrQkFBS2tHLFVBQUssQUFBQ2xHLCtCQUFLbUc7QUFDeEIsT0FBQ3ZMLCtCQUFXbUwscUNBQVlHLElBQUlDOztBQUM1QkE7OztBQUhaLEFBSUUsR0FBSSxBQUFDcEMsaUNBQU8vRCxxQkFBS2lHO0FBQ2YsT0FBQy9NLDBCQUFNMEIscUJBQVduQixFQUFFd007O0FBQ3BCLE9BQUNHLHlCQUFLSDs7OztBQVBaLEFBQUEsK0RBQUEsL0RBQU9GOztBQUFQO0FBQUEsQUFBQSx5REFBQSxXQUFBQyxwRUFBT0Q7QUFBUCxBQUFBLElBQUF0SCxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUEsQUFBQXZELHdCQUFBOEs7OztBQUFBLEFBU0EsQUFBQTs7Ozs7OztpQ0FBQSx5Q0FBQTVOLDFFQUFNaU87QUFBTixBQUFBLElBQUFsSSxzQkFBQTtBQUFBLEFBQUEsSUFBQUMseUJBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsdUJBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHVCQUFBRDtBQUFBLEFBQUEsQUFBQUQseUJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxhQUFBLENBQUFBLHVCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSxFQUFBLENBQUEsTUFBQSxBQUFBSCw2QkFBQSxBQUFBLDBCQUFBLEFBQUFBLDBCQUFBLEtBQUEsSUFBQSxPQUFBLC9EQW1rRnNEeVA7QUFua0Z0RCxBQUFBLE9BQUF2SCxvRUFBQS9IOzs7QUFBQSxBQUFBLEFBQUEsc0VBQUEsdEVBQU0rSCxpRkFPREo7QUFQTCxBQVFFLElBQU1BLFdBQUssQUFBQy9GLDJCQUFPcUcsbUJBQVNOO0FBQTVCLEFBQ0UsR0FBUSxBQUFDbEMsaUNBQU8vRCxxQkFBS2lHO0FBQXJCO0FBQUEsQUFBQSxNQUFBLEtBQUExTixNQUFBOzs7QUFDQSxPQUFDVywwQkFBTTBCLHFCQUFXbUwscUNBQVlFOzs7QUFWbEMsQUFBQSx5REFBQSx6REFBTUk7O0FBQU47QUFBQSxBQUFBLG1EQUFBLFdBQUFDLDlEQUFNRDtBQUFOLEFBQUEsSUFBQTVILHNCQUFBO0FBQUEsQUFBQSxPQUFBQSx5REFBQSxBQUFBdkQsd0JBQUFvTDs7O0FBQUEsQUFZQSxBQUFBLDRDQUFBLG9EQUFBbE8saEdBQU9vTztBQUFQLEFBQUEsSUFBQXJJLHNCQUFBO0FBQUEsQUFBQSxJQUFBQyx5QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyx1QkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEsdUJBQUFEO0FBQUEsQUFBQSxBQUFBRCx5QkFBQSxDQUFBLFVBQUFFOztBQUFBLGFBQUEsQ0FBQUEsdUJBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUFDLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFILDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBdWpGc0R5UDtBQXZqRnRELEFBQUEsT0FBQXBILCtFQUFBLENBQUEsVUFBQSxNQUFBbEk7OztBQUFBLEFBQUEsQUFBQSxpRkFBQSxqRkFBT2tJLDRGQUFrQkcsRUFBSVY7QUFBN0IsQUFDRSxJQUFNeE0sSUFBRSxXQUFLeU0sSUFBSUM7QUFBVCxBQUNFLEdBQUksRUFBSyxBQUFDbkcsK0JBQUtrRyxVQUFLLEFBQUNsRywrQkFBS21HO0FBQ3hCLE9BQUN2TCwrQkFBVyxBQUFDc0csNEJBQVFzRiwwQ0FBaUJHLEdBQUdULElBQUlDOztBQUM3QyxPQUFDUSxZQUFFVCxJQUFJQzs7O0FBSG5CLEFBSUUsR0FBSSxBQUFDcEMsaUNBQU8vRCxxQkFBS2lHO0FBQ2YsT0FBQy9NLDBCQUFNMEIscUJBQVduQixFQUFFd007O0FBQ3BCLE9BQUMvTSwwQkFBTXlOLEVBQUVWOzs7O0FBUGYsQUFBQSxvRUFBQSxwRUFBT087O0FBQVA7QUFBQSxBQUFBLDhEQUFBLFdBQUFDLHpFQUFPRDtBQUFQLEFBQUEsSUFBQUUsU0FBQSwwQkFBQUQsMUJBdy9FZ0RwTDtJQXgvRWhEb0wsYUFBQSx5QkFBQUEsekJBeS9Fa0QxRTtBQXovRWxELEFBQUEsSUFBQWUsc0JBQUE7QUFBQSxBQUFBLE9BQUFBLHlEQUFBNEQsT0FBQUQ7OztBQUFBLEFBU0EsQUFBQTs7Ozs7Ozs7O3NDQUFBLDhDQUFBck8scEZBQU13TztBQUFOLEFBQUEsSUFBQXpJLHNCQUFBO0FBQUEsQUFBQSxJQUFBQyx5QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyx1QkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEsdUJBQUFEO0FBQUEsQUFBQSxBQUFBRCx5QkFBQSxDQUFBLFVBQUFFOztBQUFBLGFBQUEsQ0FBQUEsdUJBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUFDLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFILDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBOGlGc0R5UDtBQTlpRnRELEFBQUEsT0FBQWhILHlFQUFBLENBQUEsVUFBQSxNQUFBdEk7OztBQUFBLEFBQUEsQUFBQSwyRUFBQSwzRUFBTXNJLHNGQVNIRCxFQUFJVjtBQVRQLEFBVUUsSUFBTUEsV0FBSyxBQUFDL0YsMkJBQU9xRyxtQkFBU047QUFBNUIsQUFDRSxHQUFRLEFBQUNsQyxpQ0FBTy9ELHFCQUFLaUc7QUFBckI7QUFBQSxBQUFBLE1BQUEsS0FBQTFOLE1BQUE7OztBQUNBLE9BQUNXLDBCQUFNMEIscUJBQVcsQUFBQ3NHLDRCQUFRc0YsMENBQWlCRyxHQUFHVjs7O0FBWm5ELEFBQUEsOERBQUEsOURBQU1XOztBQUFOO0FBQUEsQUFBQSx3REFBQSxXQUFBQyxuRUFBTUQ7QUFBTixBQUFBLElBQUFFLFNBQUEsMEJBQUFELDFCQSsrRWdEeEw7SUEvK0VoRHdMLGFBQUEseUJBQUFBLHpCQWcvRWtEOUU7QUFoL0VsRCxBQUFBLElBQUFlLHNCQUFBO0FBQUEsQUFBQSxPQUFBQSx5REFBQWdFLE9BQUFEOzs7QUFBQSxBQWNBOzs7Ozs7OzswQ0FBQSwxQ0FBTUUsNEZBT0hyTjtBQVBILEFBUUUsUUFBTSxtREFBQSxXQUFBc04sOURBQUNDLDZCQUFTQyxqQ0FBbUNFO0FBQTdDLEFBQWlCLEdBQUksK0JBQUFKLC9CQUFDaEg7QUFBUSxnQ0FBQWdILHpCQUFDRzs7QUFBZEg7O0dBQXlCdE47SUFBRzBOLFFBQzdDLEFBQUNDLDZCQUFTSCxzQkFBTUU7SUFENkJBLFFBRTdDLGdDQUFBLGhDQUFDdkosMEJBQU11SixXQUFPLGlCQUFBek0sb0JBQUksOEJBQUEsOUJBQUMwSCx3QkFBSStFO0FBQVQsQUFBQSxvQkFBQXpNO0FBQUFBOztBQUFBOzs7SUFGK0J5TSxRQUc3QyxnQ0FBQSxoQ0FBQ3ZKLDBCQUFNdUosWUFBUSxpQkFBQXpNLG9CQUFJLDhCQUFBLDlCQUFDMEgsd0JBQUkrRTtBQUFULEFBQUEsb0JBQUF6TTtBQUFBQTs7QUFBQTs7O0FBSHJCLEFBSU0sK0NBQUEsMkNBQUEsS0FBQSxnRUFBQSxNQUFBLDlKQUFDMk0sa0NBQXdCRjs7QUFFakM7Ozs7Ozs7O3NDQUFBLHRDQUFNRyxvRkFPSDdOLEVBQUU4TjtBQVBMLGtJQVFPLEFBQUNULGtEQUFvQnJOLHBMQUV0QixvQ0FBQSxBQUFBLDdCQUFDd0csMkJBQU9zSDs7QUFFZDs7Ozs7Ozs7MENBQUEsMUNBQU1DLDRGQU9IeEksRUFBRXlJO0FBUEwsQUFRRyxTQUFJLENBQUksQUFBQy9MLDBCQUFNc0QsTUFBR3lJLFVBQUssQ0FBQSxNQUFLQTs7QUFFL0I7Ozs7Ozs7Ozs7O3dDQUFBLHhDQUFNQyx3RkFXSGhFLEtBQUtuRztBQVhSLEFBWUksSUFBTW9LLFVBQU8saURBQUEsakRBQUN6RSwrQkFBVzBFLHVCQUFVLEFBQUN6Tyx3QkFBSXVLLEtBQUtuRyxLQUFLLEFBQUNoQix5QkFBS2dCO0FBQXhELEFBQ0UsT0FBQ3BFLHdCQUFJLEFBQUM4SCw0QkFBUTlILGNBQUlpQyxpQkFBTyxBQUFDd0ksaUNBQWEvRCxpQkFBTyxBQUFDMUcsd0JBQUkwTyxlQUFLdEssS0FBS29LOztBQUduRTs7Ozs7Ozs7Ozs7OzhCQUFBLDlCQUFNRyxvRUFXSDNLO0FBWEgsQUFZRSxHQUFJLEFBQUM4SixnQ0FBTTlKO0FBQUdBOztBQUFFLFlBQUFtRyxlQUFBLE9BQUEsS0FBQSxJQUFBLFhBQU1uRzs7O0FBRXhCOzs7Ozs7Ozs4QkFBQSw5QkFBTTRLLG9FQU9IQztBQVBILEFBUUUsb0NBQUEsV0FBQUMseENBQUNDO0FBQUQsQUFDRyxTQUFJLGtDQUFBRCxsQ0FBQ0Usc0RBQVcsK0JBQUFGLC9CQUFDbEksbURBQVEsK0JBQUFrSSwvQkFBQ0c7R0FDM0IsV0FBS0M7QUFBTCxBQUNFLEdBQ0UsQUFBQ0Ysa0NBQVFFO0FBQU0sT0FBQ0Msd0JBQUlEOztBQUR0QixHQUVFLEFBQUN0SSwrQkFBS3NJO0FBQVMsT0FBQ0Msd0JBQUlEOztBQUZ0QixHQUdFLEFBQUNELCtCQUFLQztBQUFTLE9BQUNwTix3QkFBSW9OOztBQUh0Qjs7OztHQUtGLFdBQUtBLEtBQUtFO0FBQVYscUNBRUksNkVBQUEsOEdBQUEsaURBQUEsMU9BQ0UsQUFBQ0osa0NBQVFFLE9BQU0sQUFBQ0Msd0JBQUlDLFlBQ3BCLEFBQUN4SSwrQkFBS3NJLE9BQVMseUJBQUEsekJBQUN6UCw0REFBUTJQLFlBQ3hCLEFBQUNILCtCQUFLQyxPQUFTRSx4UUFDakIsT0FBQ0Msa1JBQVUsQUFBQ0MseUJBQUtKO0dBQ3JCTDs7QUFFSixxQ0FBQSxyQ0FBT1Usa0ZBQWdCQyxLQUFLQztBQUE1QixBQUNFLElBQUExRyxxQkFBb0MsQUFBQ2tILHlCQUFLVCxLQUFLLEFBQUNVLDJCQUFTVDtBQUF6RCxBQUFBLG9CQUFBMUc7QUFBQSxJQUFBMkcsV0FBQTNHO1FBQUEsQUFBQXRJLHdCQUFBaVAsU0FBQSxJQUFBLHpDQUFVSTtJQUFWSCxXQUFBLEFBQUFsUCx3QkFBQWlQLFNBQUEsSUFBQTtJQUFBRSxXQUFBLEFBQUE5Tix3QkFBQTZOO0lBQUFFLGFBQUEsQUFBQTVOLDBCQUFBMk47SUFBQUEsZUFBQSxBQUFBakgseUJBQUFpSDtrQkFBQUMsZEFBYUU7YUFBYkgsVEFBMkJJO0FBQTNCLEFBQ0UsUUFBTVAsSkFBSXpCO0lBQUFBLFFBQ1IsQUFBQ21DLDhCQUFZbkMsRUFBRStCO0FBRGpCLEFBRUUsT0FBQ3hMLDJCQUFPO2tCQUFLNkwsSUFBSXZLO0FBQVQsQUFBWSxPQUFDd0ssbUNBQWlCRCxJQUFJdks7O0NBQUltSSxNQUFFLEFBQUNzQyw0QkFBUU47O0FBQzNEUDs7O0FBRUo7Ozs7Ozs7OztpQ0FBQSxqQ0FBTWMsMEVBUUhmLEtBQUtnQjtBQVJSLEFBQUEsR0FTUyxBQUFDN0YsaUNBQU9zRSxxQkFBSyxBQUFDbEIseUJBQUt5QjtBQVQ1QjtBQUFBLEFBQUEsTUFBQSxLQUFBclEsTUFBQTs7O0FBVUUsSUFBT3NRLE1BQUksQUFBQ2Isc0NBQVE0Qjs7QUFBcEIsQUFDRSxHQUFJLEFBQUNDLGlDQUFTaEI7QUFDWixPQUFDaUIsMkJBQVNqQjs7QUFDVixhQUFPLEFBQUNrQiwyQkFBUyxBQUFDcEIsNkNBQWVDLEtBQUtDOzs7Ozs7O0FBRTVDLHFDQUFBLHJDQUFPbUIsa0ZBQVU1TTtBQUFqQixBQUNFLHNDQUFBLC9CQUFDNk0sd0NBQXFCN007O0FBRXhCOzs7Ozs7Ozs7OzZDQUFBLDdDQUFNOE0sa0dBU0g5TTtBQVRILHlNQVVPQSxyQ0FDSCtNLDVCQUNBVCxsRUFDQSxrRUFBQSw0QkFBQSw5RkFBQ1UsK0JBQVdKLDNEQUNaTiwxQ0FDQSxxQ0FBQSxLQUFBLG5DQUFDVzs7QUFDTDs7Ozs7Ozs7OztzQ0FBQSx0Q0FBTUMsb0ZBU0hsTjtBQVRILDZQQVVPQSxyQ0FDSCtNLDNEQUNBLDJEQUFBLDNEQUFDQywrQkFBV0csM0RBQ1piLDNEQUNBLDJEQUFBLDNEQUFDVSwrQkFBV0csM0RBQ1piLDFDQUNBLHFDQUFBLEtBQUEsbkNBQUNXOztBQUVMOzs7Ozs7Ozs7eUNBQUEsekNBQU1HLDBGQVFIcE47QUFSSCxzSUFTT0EsckNBQ0grTSx2REFDQSx1REFBQSx2REFBQ3hLLDJCQUFPNEssckVBQ1IscUNBQUEsOUJBQUNGOztBQUdELEFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFBQSxzQ0FBQWpTLHBFQUFNcVM7QUFBTixBQUFBLElBQUF0TSxzQkFBQTtBQUFBLEFBQUEsSUFBQUMseUJBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsdUJBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHVCQUFBRDtBQUFBLEFBQUEsQUFBQUQseUJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxhQUFBLENBQUFBLHVCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSxFQUFBLENBQUEsTUFBQSxBQUFBSCw2QkFBQSxBQUFBLDBCQUFBLEFBQUFBLDBCQUFBLEtBQUEsSUFBQSxPQUFBLC9EQTIzRWtEeVA7QUEzM0VsRCxBQUFBLE9BQUFuRCxpRUFBQSxDQUFBLFVBQUEsTUFBQW5NOzs7QUFBQSxBQUFBLEFBQUEsbUVBQUEsYUFBQW9NLGhGQUFNRCw4RUFvQkgxUztBQXBCSCxBQUFBLElBQUE0UyxXQUFBRDtJQUFBQyxlQUFBLEVBQUEsRUFBQSxHQUFBLENBQUFBLFlBQUEsU0FBQSxFQUFBLEVBQUEsQ0FBQSxBQUFBQSwrQ0FBQSxXQUFBLENBQUFqSSxnQ0FBQSxBQUFBaUksNkJBQUEsS0FBQSxPQUFBLFFBQUEsQUFBQXpSLDBCQUFBeUosbUJBQUFnSSxVQUFBQTtXQUFBQSxQQW9CNEdqTTsyQkFwQjVHLEFBQUEyRCx3QkFBQXNJLGFBQUEsd0ZBQUEscEpBb0JlRzt1QkFwQmYsQUFBQXpJLHdCQUFBc0ksYUFBQSwrRUFBQSx2SUFvQm9DSTtBQXBCcEMsQUFxQkUsR0FDRSwyQkFBQSwzQkFBQ3RTLHlCQUFFVjtBQUFRQTs7QUFEYixHQUVFLDJCQUFBLDNCQUFDVSx5QkFBRVY7QUFBU0E7O0FBRmQsR0FHRSxNQUFBLExBQU1BO0FBQUdBOztBQUhYLEdBSUUsY0FBQWlULGJBQVVqVDtBQUFHQTs7QUFKZixHQUtFLE9BQVNBO0FBQUdBOztBQUxkLEdBTUUsT0FBU0E7QUFBRyxrQ0FBQSwzQkFBQ2tULHlCQUFLbFQsTUFBSWdUOztBQU54QixHQU9FLEFBQUMvSywrQkFBS2pJO0FBQUcsT0FBQytOLDRDQUFjZ0YscUJBQXFCLHlDQUFBLHpDQUFDelE7a0JBQUQ2UTtBQUFBLEFBQWEsNkNBQUFBLHRDQUFDVCxvREFBVS9MOztDQUFNM0c7O0FBUDdFLEdBUUUsQUFBQ29ULG1DQUFTcFQ7QUFBRyxPQUFDK00seUJBQUtnRyxxQkFBcUIsd0JBQUEseEJBQUMxUjtrQkFBRGdTO0FBQUEsQUFBTSw2Q0FBQUEsdENBQUNYLG9EQUFVL0w7O0NBQU0zRzs7QUFSakUsR0FTRSxBQUFDc1QsaUNBQU90VDtBQUFHLFFBQUEsZ0ZBQUEsN0JBQVksQUFBQ3VULHlCQUFLdlQ7O0FBVC9CLEdBVUUsQUFBQ1UseUJBQUU4UyxTQUFZLEFBQUNELHlCQUFLdlQ7QUFWdkI7O0FBQUEsR0FXRSxjQUFXeVQsYkFBVXpUO0FBQUcsUUFBQSxnS0FBQSw3R0FBWSxrR0FBQSxJQUFBLHRHQUFDa1QseUJBQUssNENBQUssQUFBQ0sseUJBQUt2VDs7QUFYdkQsQUFZUSxRQUFBLGdGQUFBLDdCQUFZLEFBQUN1VCx5QkFBS3ZUOzs7Ozs7Ozs7Ozs7Ozs7QUFqQzVCLEFBQUEsc0RBQUEsdERBQU0wUzs7QUFBTjtBQUFBLEFBQUEsZ0RBQUEsV0FBQUcsM0RBQU1IO0FBQU4sQUFBQSxJQUFBSSxTQUFBLDBCQUFBRCwxQkE0ekU0Q3ZQO0lBNXpFNUN1UCxhQUFBLHlCQUFBQSx6QkE2ekU4QzdJO0FBN3pFOUMsQUFBQSxJQUFBZSxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUErSCxPQUFBRDs7O0FBQUEsQUFvQ0o7Ozs7Ozs7O3NDQUFBLHRDQUFNYSxvRkFPSGhTLEVBQUVDO0FBUEwsQUFRRSwwSUFBS0EsM0NBQ0ErTCwzQ0FDQSwyQ0FBQSwzQ0FBQ3BMLHlDQUFXWix0RkFDWmlNOztBQUVQOzs7Ozs7Ozs7O2dDQUFBLGhDQUFNZ0csd0VBVUhDLElBQUlDO0FBVlAsQUFXRSx5RkFBSyxBQUFDeFMsd0JBQUlpSSwyQkFBT3NLLElBQUlDLGhIQUNoQixBQUFDMVMsMEJBQU1tTixuREFDUGM7O0FBRVAsQUFFQSxBQUFBOzs7Ozs7Ozs2QkFBQSxxQ0FBQS9PLGxFQUFNMFQ7QUFBTixBQUFBLElBQUFELFNBQUEsQUFBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLE9BQUFDLHlEQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7O0tBQUE7QUFBQSxPQUFBQSx5REFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7Ozs7QUFBQSxNQUFBLEtBQUF2VCxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxBQUFBLDJEQUFBLDNEQUFNdVQsc0VBT0YxTyxFQUFFYTtBQVBOLEFBT2EsT0FBQ2dOLHlCQUFLN04sRUFBRSxpQkFBQXBGLG1CQUFBO0lBQUFDLG1CQUFPLGlCQUFBdUwsbUJBQUt2RjtJQUFMd0YsbUJBQVcsQUFBQzlILDBCQUFNeUI7QUFBbEIsQUFBQSxTQUFBb0csbUJBQUFDLG9CQUFBRCxtQkFBQUM7O0FBQVAsQUFBQSxTQUFBekwsbUJBQUFDLG9CQUFBRCxtQkFBQUM7Ozs7QUFQckIsQUFBQSwyREFBQSwzREFBTTZULHNFQVFGMU8sRUFBRWEsTUFBTUQ7QUFSWixBQVNHLElBQU1DLFlBQU0saUJBQUFqRyxtQkFBQTtJQUFBQyxtQkFBTyxpQkFBQXVMLG1CQUFLdkY7SUFBTHdGLG1CQUFXLEFBQUM5SCwwQkFBTXlCO0FBQWxCLEFBQUEsU0FBQW9HLG1CQUFBQyxvQkFBQUQsbUJBQUFDOztBQUFQLEFBQUEsU0FBQXpMLG1CQUFBQyxvQkFBQUQsbUJBQUFDOztJQUNOK0YsVUFBSSxpQkFBQXdGLG1CQUFLLEFBQUM3SCwwQkFBTXlCO0lBQVpxRyxtQkFBZXpGO0FBQWYsQUFBQSxTQUFBd0YsbUJBQUFDLG9CQUFBRCxtQkFBQUM7O0FBRFYsQUFFRSxPQUFDd0gseUJBQUs3TixFQUFFYSxVQUFNRDs7O0FBWG5CLEFBQUEscURBQUEsckRBQU04Tjs7QUFBTixBQWNBOzs7MkNBQUEsM0NBQU1DLDhGQUVIclMsRUFBRXNTO0FBRkwsQUFHRSxPQUFDNVMsd0JBQUlNLEVBQUVzUzs7QUFFVCxrQ0FBQSxsQ0FBTUMsNEVBQWFDLElBQUlGO0FBQXZCLEFBQ0UsT0FBQzdFLHlCQUFLLEFBQUN6QyxnQ0FBWXdILElBQUlGOztBQUV6Qjs7OzJDQUFBLDNDQUFNRyw4RkFFSEQsSUFBSWpLO0FBRlAsQUFHRSxrQ0FBQSxXQUFBbUssY0FBQUMscERBQUMxTztBQUFELEFBQVMsZ0NBQUF5Tyx6QkFBQ3ZSLHVDQUFRLGNBQUF3UixkQUFDSDtHQUFuQixpQ0FBK0JqSzs7QUFHakM7Ozs7cUNBQUEsckNBQU1xSyxrRkFHSDdTLEVBQUVpRjtBQUhMLEFBSUUsT0FBQ3hGLDBCQUFNTyx1SkFBT2lGLDdDQUNBZ0IsMURBQ0EseUJBQUEsaUNBQUEsMURBQUM3Ryw5Q0FDRCxBQUFDMFQsMkJBQU9oRzs7QUFFeEI7Ozs7Ozs7Ozs7Ozs7K0JBQUEsL0JBQU1pRyxzRUFZSEMsc0JBQXNCalA7QUFaekIsQUFBQSxvQkFhUyxBQUFDLEFBQUNvQyx5QkFBSzhNLHNCQUFNL1EsMkJBQU84UTtBQWI3QjtBQUFBLEFBQUEsTUFBQSxLQUFBbFUsTUFBQTs7O0FBQUEsbVRBY2NrVSx6QkFDQWpRLGpDQUNBLDZCQUFBLElBQUEsakNBQUM2SCx0UEFDRCxpQ0FBQSxpRkFBQSx5REFBQSwzS0FBQ047QUFqQmY7QUFBQSxBQUFBLE1BQUEsS0FBQXhMLE1BQUE7OztBQWtCRSxJQUFNb1UsU0FBTyw2QkFBQSw3QkFBQ3RJLGlDQUFXb0k7SUFDbkJHLGFBQVcsNkJBQUEsN0JBQUN2SSxpQ0FBVyxBQUFDN0gseUJBQUtpUTtBQURuQyxBQUVFLE9BQUNJLDRCQUNDLEFBQUMzVCwwQkFBTXFHLGVBQUtvTixRQUNaO2tCQUFLNVUsRUFBRUk7QUFBUCxtREFHTyxBQUFDd0YsMkJBQU8sOUVBSVIsT0FBQ3pFLDBCQUFNd1U7a0JBSkNWLE9BQUFDO0FBQUEsQUFBQSxJQUFBQyxXQUFBRjtxQkFBQSxBQUFBblQsd0JBQUFxVCxTQUFBLElBQUEsdERBQU1FO3FCQUFOLEFBQUF2VCx3QkFBQXFULFNBQUEsSUFBQSx0REFBU0c7SUFBVEYsV0FBQUY7WUFBQSxBQUFBcFQsd0JBQUFzVCxTQUFBLElBQUEsN0NBQWNHO1NBQWQsQUFBQXpULHdCQUFBc1QsU0FBQSxJQUFBLDFDQUFvQkk7U0FBcEIsQUFBQTFULHdCQUFBc1QsU0FBQSxJQUFBLDFDQUF1Qks7QUFBdkIsQUFDRSxJQUFBQyxTQUFNSDtJQUFORyxhQUFBLEVBQUEsQ0FBQUEsa0JBQUF6QyxvQkFBQSxBQUFBeUMsV0FBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLDBGQUNRLEFBQUM1Uyx5QkFBS3VTLGVBQUdHLElBQUksQUFBQzFTLHlCQUFLd1MsZUFBR0c7OztLQUQ5QjtBQUFBLDBGQUVTLEFBQUMzUyx5QkFBS3VTLGVBQUdJLElBQUksQUFBQzNTLHlCQUFLd1MsZUFBR0U7Ozs7QUFGL0IsTUFBQSxLQUFBaFYsTUFBQSxDQUFBLG1FQUFBa1Y7Ozs7Z01BSFYsQUFBQ1gsK0JBQVdGLFdBQVc3VSxFQUFFSSw5RUFDekIsOEJBQUEsOUJBQUM0VSw3SkFDRCxtRkFBQSxpQ0FBQTs7Q0FLUHZQIiwibmFtZXMiOlsiZ2FkamV0dC5jb2xsZWN0aW9ucy9pbmZpbml0eSIsImpzL0luZmluaXR5IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9hYnMiLCJ4IiwieF9fMTA2MDZfX2F1dG9fXyIsInlfXzEwNjA3X19hdXRvX18iLCJnYWRqZXR0LmNvbGxlY3Rpb25zL3NjYWxlIiwieSIsInZhcl9hcmdzIiwiR19fMjMiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2FsbW9zdD0iLCJqcy9FcnJvciIsImVwc2lsb24iLCJjbGpzLmNvcmUvPSIsImdhZGpldHQuY29sbGVjdGlvbnMvPXNldCIsImEiLCJiIiwiY2xqcy5jb3JlL2ludG8iLCJnYWRqZXR0LmNvbGxlY3Rpb25zLz13aXRob3V0LWtleXM/Iiwib2JqLWEiLCJvYmotYiIsImtleXMtbGlzdCIsImNsanMuY29yZS9hcHBseSIsInAxX18xIyIsImNsanMuY29yZS9tYXAiLCJjbGpzLmNvcmUvZGlzc29jIiwiZ2FkamV0dC5jb2xsZWN0aW9ucy92ZWMtPm1hcCIsInZlYyIsImdhZGpldHQuY29sbGVjdGlvbnMvbWFwLTJkLXZlYyIsImYiLCJtIiwicF9fMjUiLCJ2ZWNfXzI2IiwiY2xqcy5jb3JlL250aCIsImsiLCJpZCIsImdhZGpldHQuY29sbGVjdGlvbnMvbWFwLTJkLXZlYy1rdiIsImZrIiwiZnYiLCJwX18yOSIsInZlY19fMzAiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL21hcC1vYmplY3QiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL21hcC1vYmplY3Qtd2l0aC1rZXkiLCJwX18zMyIsInZlY19fMzQiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL21hcC1vYmplY3Qta3YiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL21hcC1yZXZlcnNlLWhpZXJhcmNoeSIsIm9yX18xMDEzOF9fYXV0b19fIiwiY2xqcy5jb3JlL21lcmdlLXdpdGgiLCJjbGpzLmNvcmUvY29uaiIsIml0ZXJfXzExNzQ2X19hdXRvX18iLCJzX181MyIsImNsanMuY29yZS9MYXp5U2VxIiwidGVtcF9fOTY1Nl9fYXV0b19fIiwiY2xqcy5jb3JlL3NlcSIsInhzX185NjI3X19hdXRvX18iLCJ2ZWNfXzU4IiwiY2xqcy5jb3JlL2ZpcnN0IiwiaXRlcnlzX18xMTc0MF9fYXV0b19fIiwic19fNTUiLCJjbGpzLmNvcmUvY2h1bmtlZC1zZXE/IiwiY19fMTE3NDNfX2F1dG9fXyIsInNpemVfXzExNzQ1X19hdXRvX18iLCJjbGpzLmNvcmUvY291bnQiLCJiX181NyIsImNsanMuY29yZS9jaHVuay1idWZmZXIiLCJpX181NiIsInZlY19fNjEiLCJjbGpzLmNvcmUvLW50aCIsImNsanMuY29yZS9jaHVuay1hcHBlbmQiLCJjbGpzLmNvcmUvY2h1bmstY29ucyIsImNsanMuY29yZS9jaHVuayIsIml0ZXJfXzU0IiwiY2xqcy5jb3JlL2NodW5rLXJlc3QiLCJ2ZWNfXzY0IiwiY2xqcy5jb3JlL2NvbnMiLCJjbGpzLmNvcmUvcmVzdCIsImZzX18xMTc0MV9fYXV0b19fIiwiY2xqcy5jb3JlL2NvbmNhdCIsIml0ZXJfXzUyIiwiazEiLCJ2MSIsImsyIiwidjIiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL21lYW4iLCJjbGpzLmNvcmUvZW1wdHk/IiwiY2xqcy5jb3JlLysiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL3NlcXVlbmNlLT5tYXAiLCJzIiwiY2xqcy5jb3JlL3ppcG1hcCIsImNsanMuY29yZS9yYW5nZSIsImdhZGpldHQuY29sbGVjdGlvbnMvc2VxdWVuY2Utb2YtbWFwcy0+bWFwIiwiY29sbCIsImtleS1mbiIsInZhbC1mbiIsImNsanMuY29yZS9yZWR1Y2UiLCJyZXMiLCJjbGpzLmNvcmUvYXNzb2MiLCJHX183MCIsImdhZGpldHQuY29sbGVjdGlvbnMvcmFuZ2Utd2l0aC1lbmQiLCJlbmQiLCJzdGFydCIsInN0ZXBzIiwiYXJnc19fMTI0MTBfX2F1dG9fXyIsImxlbl9fMTI0MDdfX2F1dG9fXyIsImlfXzEyNDA4X19hdXRvX18iLCJhcmdzZXFfXzEyNDExX19hdXRvX18iLCJnYWRqZXR0LmNvbGxlY3Rpb25zL3JhbmdlLXRpbGwtZW5kIiwic2VxNzIiLCJzZWxmX18xMjQwMF9fYXV0b19fIiwiYXJncyIsInZlY19fNzMiLCJsaXMiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2FwcGVuZC1jeWNsaWMiLCJsc3QiLCJHX184MCIsImdhZGpldHQuY29sbGVjdGlvbnMvYXNzb2MtY3ljbGljIiwidiIsImNsanMuY29yZS9jb250YWlucz8iLCJuIiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9tYXgtYW5kLW1pbiIsInAxX18yIyIsInAxX18zIyIsImNsanMuY29yZS9qdXh0IiwiY2xqcy5jb3JlL21heCIsImNsanMuY29yZS9taW4iLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2NvbXBhY3RpemUtbWFwIiwiY2xqcy5jb3JlL3JlbW92ZSIsImNsanMuY29yZS9jb21wIiwiY2xqcy5jb3JlL25pbD8iLCJjbGpzLmNvcmUvc2Vjb25kIiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9jb21wYWN0aXplLW1hcC1yZWN1cnNpdmUiLCJjbGpzLmNvcmUvbWFwPyIsImt2cyIsImNsanMuY29yZS9maWx0ZXIiLCJjbGpzLmNvcmUvbm90IiwiY2xvanVyZS53YWxrL3Bvc3R3YWxrIiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9maWx0ZXItbWFwIiwiY2xqcy5jb3JlL3ZhbCIsImdhZGpldHQuY29sbGVjdGlvbnMvbmVhcmVzdC1vZi1zcyIsInNzIiwiZ3JlYXRlciIsImNsanMuY29yZS9zdWJzZXEiLCJjbGpzLmNvcmUvPj0iLCJzbWFsbGVyIiwiY2xqcy5jb3JlL3JzdWJzZXEiLCJjbGpzLmNvcmUvPD0iLCJwMV9fNCMiLCJjbGpzLmNvcmUvbWluLWtleSIsImdhZGpldHQuY29sbGVjdGlvbnMvbmVhcmVzdC1vZi1zZXEiLCJjbGpzLmNvcmUvcGFydGlhbCIsImNsanMuY29yZS9zb3J0ZWQtc2V0IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9tYXAtdG8tb2JqZWN0IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9tYXBpZnkiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL21hcC13aXRoLWluZGV4IiwiaWR4LWtleSIsInZhbC1rZXkiLCJjbGpzLmNvcmUvbWFwLWluZGV4ZWQiLCJpIiwicF9fODIiLCJ2ZWNfXzgzIiwic2VxX184NCIsImZpcnN0X184NSIsImNsanMuY29yZS9uZXh0IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9kaXNzb2MtaW4iLCJrcyIsImtleXMiLCJ0ZW1wX185NTE3X19hdXRvX18iLCJuZXh0bWFwIiwiY2xqcy5jb3JlL2dldCIsIm5ld21hcCIsImdhZGpldHQuY29sbGVjdGlvbnMvcG9zaXRpb25zIiwicF9fODgiLCJtYXBfXzg5IiwiY2xqcy5jb3JlL1BST1RPQ09MX1NFTlRJTkVMIiwiY2xqcy5jb3JlL2hhc2gtbWFwIiwic2VxODYiLCJHX184NyIsInNlbGZfXzEyMzk2X19hdXRvX18iLCJjb2xsLW9mLWxlbmd0aHMiLCJtYXgtdmFsIiwiZmlyc3QtdmFsIiwiZW5kLXBvcyIsImNsanMuY29yZS9yZWR1Y3Rpb25zIiwic3RhcnQtcG9zIiwicDFfXzUjIiwicDJfXzYjIiwiY2xqcy5jb3JlL0xpc3QiLCJ4X18xMDY0Ml9fYXV0b19fIiwieV9fMTA2NDNfX2F1dG9fXyIsImdhZGpldHQuY29sbGVjdGlvbnMvc3BsaXQtYnktcHJlZGljYXRlIiwicHJlZCIsInBhcnQiLCJjbGpzLmNvcmUvcGFydGl0aW9uLWJ5IiwicHBhcnQiLCJjbGpzLmNvcmUvZXZlcnk/IiwicDFfXzcjIiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9zcGxpdC1ieS1wcmVkaWNhdGUtcG9zaXRpb25zIiwiZCIsImxlbmd0aHMiLCJwMV9fOCMiLCJjbGpzLmNvcmUvdGFrZS1udGgiLCJwb3MiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL3N1Ym1hcD8iLCJtMSIsIm0yIiwiY2xqcy5jb3JlL3NlbGVjdC1rZXlzIiwiY2xqcy5jb3JlL2tleXMiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL3N1YnNlcXVlbmNlIiwiY2xqcy5jb3JlL2Ryb3AiLCJjbGpzLmNvcmUvdGFrZSIsImdhZGpldHQuY29sbGVjdGlvbnMvaW5kZXgtb2YiLCJlbGVtZW50IiwiY2xqcy5jb3JlL2ZmaXJzdCIsInAxX185IyIsInAxX18xMCMiLCJwMl9fMTEjIiwiY2xqcy5jb3JlL1BlcnNpc3RlbnRWZWN0b3IiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2ZsYXR0ZW4ta2V5cyoiLCJwX185NCIsInZlY19fOTUiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2ZsYXR0ZW4ta2V5cyIsImdhZGpldHQuY29sbGVjdGlvbnMvdW5mbGF0dGVuLWtleXMiLCJjbGpzLmNvcmUvcmVkdWNlLWt2IiwiYyIsImNsanMuY29yZS9hc3NvYy1pbiIsImdhZGpldHQuY29sbGVjdGlvbnMvdGFrZS1mcm9tLW1hcCIsImdhZGpldHQuY29sbGVjdGlvbnMvZGVlcC1tZXJnZSoiLCJzZXE5OCIsIm1hcHMiLCJvbGQiLCJuZXciLCJjbGpzLmNvcmUvbGFzdCIsImdhZGpldHQuY29sbGVjdGlvbnMvZGVlcC1tZXJnZSIsInNlcTEwMiIsImNsanMuY29yZS9pZGVudGl0eSIsImdhZGpldHQuY29sbGVjdGlvbnMvZGVlcC1tZXJnZS13aXRoKiIsInNlcTEwNiIsIkdfXzEwNyIsImciLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2RlZXAtbWVyZ2Utd2l0aCIsInNlcTExMSIsIkdfXzExMiIsImdhZGpldHQuY29sbGVjdGlvbnMvYnJhbmNoZXMtYW5kLWxlYXZlcyIsInAxX18xMiMiLCJjbGpzLmNvcmUvdHJlZS1zZXEiLCJjbGpzLmNvcmUvY29sbD8iLCJjbGpzLmNvcmUvdmFscyIsIiQiLCJjbGpzLmNvcmUvZ3JvdXAtYnkiLCJjbG9qdXJlLnNldC9yZW5hbWUta2V5cyIsImdhZGpldHQuY29sbGVjdGlvbnMvZmlsdGVyLWJyYW5jaGVzIiwicCIsImdhZGpldHQuY29sbGVjdGlvbnMvb3V0LW9mLWJvdW5kPyIsImlkeCIsImdhZGpldHQuY29sbGVjdGlvbnMvcGFydGl0aW9uLWJldHdlZW4iLCJzd2l0Y2giLCJjbGpzLmNvcmUvbm90PSIsImNsanMuY29yZS9saXN0IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9jb2xsaWZ5IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9lZG4temlwIiwicm9vdCIsInAxX18xMyMiLCJjbG9qdXJlLnppcC96aXBwZXIiLCJjbGpzLmNvcmUvdmVjdG9yPyIsImNsanMuY29yZS9zZXE/Iiwibm9kZSIsImNsanMuY29yZS92ZWMiLCJjaGlsZHJlbiIsImNsanMuY29yZS93aXRoLW1ldGEiLCJjbGpzLmNvcmUvbWV0YSIsImdhZGpldHQuY29sbGVjdGlvbnMvbG9jLW15LXJlcGxhY2UiLCJzbWFwIiwibG9jIiwidmVjX18xMTYiLCJ2ZWNfXzExOSIsInNlcV9fMTIwIiwiZmlyc3RfXzEyMSIsIl8iLCJyZXBsYWNlbWVudCIsInZhbHVlcyIsImNsanMuY29yZS9maW5kIiwiY2xvanVyZS56aXAvbm9kZSIsImNsb2p1cmUuemlwL3JlcGxhY2UiLCJhZ2ciLCJjbG9qdXJlLnppcC9pbnNlcnQtcmlnaHQiLCJjbGpzLmNvcmUvcmV2ZXJzZSIsImdhZGpldHQuY29sbGVjdGlvbnMvbXktcmVwbGFjZSIsImZvcm0iLCJjbG9qdXJlLnppcC9lbmQ/IiwiY2xvanVyZS56aXAvcm9vdCIsImNsb2p1cmUuemlwL25leHQiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2NvbW1lbnQ/IiwiY2xqcy5jb3JlL3JlLW1hdGNoZXMiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL3JlbW92ZS1lbmRpbmctY29tbWVudHMiLCJjbG9qdXJlLnN0cmluZy9zcGxpdC1saW5lcyIsImNsanMuY29yZS9kcm9wLXdoaWxlIiwiY2xvanVyZS5zdHJpbmcvam9pbiIsImdhZGpldHQuY29sbGVjdGlvbnMvZml4LWJsYW5rLWxpbmVzIiwiY2xvanVyZS5zdHJpbmcvYmxhbms/IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9yZW1vdmUtYmxhbmstbGluZXMiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2NvbXBhY3QiLCJwX18xMjUiLCJtYXBfXzEyNiIsInNlcTEyMyIsIkdfXzEyNCIsIm1heC1lbGVtZW50cy1pbi1jb2xsIiwibWF4LWNoYXJzLWluLXN0ciIsImNsanMuY29yZS9LZXl3b3JkIiwiY2xqcy5jb3JlL3N1YnMiLCJwMV9fMTQjIiwiY2xqcy5jb3JlL3NlcWFibGU/IiwicDFfXzE1IyIsImNsanMuY29yZS9hcnJheT8iLCJjbGpzLmNvcmUvdHlwZSIsImpzL0Z1bmN0aW9uIiwianMvT2JqZWN0IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9tYXAtbmVzdGVkLXZhbHMiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL2pvaW4tdGhlbSIsImZucyIsImNvbGxzIiwiR19fMTMyIiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9zdWJzdHIiLCJnYWRqZXR0LmNvbGxlY3Rpb25zL3NlbGVjdC1rZXlzLWluLW9yZGVyIiwia2V5c2VxIiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9zZWxlY3QtdmFscyIsIm1hcCIsImdhZGpldHQuY29sbGVjdGlvbnMvc2VsZWN0LXZhbHMtaW4tb3JkZXIiLCJwMV9fMTYjIiwicDJfXzE3IyIsImdhZGpldHQuY29sbGVjdGlvbnMvYXBwbHktd2l0aC1tYXAiLCJjbGpzLmNvcmUvbWFwY2F0IiwiZ2FkamV0dC5jb2xsZWN0aW9ucy9vcmRlci1ieSIsImtleWZuLWRpcmVjdGlvbi1wYWlycyIsImNsanMuY29yZS9ldmVuPyIsImtleWZucyIsImRpcmVjdGlvbnMiLCJjbGpzLmNvcmUvc29ydC1ieSIsImNsanMuY29yZS9pbnRlcmxlYXZlIiwiY2xqcy5jb3JlL3BhcnRpdGlvbiIsInBfXzEzNCIsInBfXzEzNSIsInZlY19fMTM2IiwidmVjX18xMzkiLCJ4JyIsInknIiwib3JkZXIiLCJ4aSIsInlpIiwiR19fMTQyIiwiY2xqcy5jb3JlL2NvbXBhcmUiLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgZ2FkamV0dC5jb2xsZWN0aW9uc1xuICAoOnJlcXVpcmUgW2Nsb2p1cmUuc2V0IDpyZWZlciBbdW5pb25dXVxuICAgICAgICAgICAgW2Nsb2p1cmUud2FsayA6cmVmZXIgW3Bvc3R3YWxrXV1cbiAgICAgICAgICAgIFtjbG9qdXJlLnN0cmluZyA6cmVmZXIgW2JsYW5rPyBqb2luIHNwbGl0LWxpbmVzXV1cbiAgICAgICAgICAgIFtjbG9qdXJlLnppcCA6YXMgemlwXSkpXG5cbihkZWYgaW5maW5pdHkgIz8oOmNsanMganMvSW5maW5pdHlcbiAgICAgICAgICAgICAgICAgOmNsaiBEb3VibGUvUE9TSVRJVkVfSU5GSU5JVFkpKVxuXG4oZGVmbiBhYnNcbiAgXCJBYnNvbHV0ZSB2YWx1ZSBvZiBhIG51bWJlclxuXG5+fn5rbGlwc2VcbiAgKG1hcCBhYnMgKHJhbmdlIC01IDUpKVxufn5+XG5cblwiXG5beF1cbiAgKG1heCB4ICgtIHgpKSlcblxuKGRlZm4tIHNjYWxlIFt4IHldXG4gIChpZiAob3IgKHplcm8/IHgpICh6ZXJvPyB5KSlcbiAgICAxXG4gICAgKGFicyB4KSkpXG5cbihkZWZuIGFsbW9zdD1cbiAgKFt4IHldIChhbG1vc3Q9IHggeSAwLjAwMDAxKSlcbiAgKFt4IHkgZXBzaWxvbl0gKG9yICg9IHggeSlcbiAgICAgICAgICAgICAgICAgICAgICg8PSAoYWJzICgtIHggeSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKCogKHNjYWxlIHggeSkgZXBzaWxvbikpKSkpXG5cblxuKGRlZm4tID1zZXQgW2EgYl1cbiAgKD0gKGludG8gI3t9IGEpXG4gICAgIChpbnRvICN7fSBiKSkpXG5cbihkZWZuID13aXRob3V0LWtleXM/XG4gIFwiQ29tcGFyZSB0d28gbWFwcyBleGNsdXNpbmcgc29tZSBrZXlzXG5cbn5+fmtsaXBzZVxuICAoPXdpdGhvdXQta2V5cz8gezphIDEgOmIgMiA6YyAzfSB7OmEgMSA6YiA1fSAjezpiIDpjfSlcbn5+flxuICBcIlxuICBbb2JqLWEgb2JqLWIga2V5cy1saXN0XVxuICAoYXBwbHkgPSAobWFwICMoYXBwbHkgZGlzc29jICUga2V5cy1saXN0KSBbb2JqLWEgb2JqLWJdKSkpXG5cbihkZWZuIHZlYy0+bWFwXG4gIFwiQ29udmVydHMgYSAyZCB2ZWMgdG8gYSBoYXNoLW1hcC5cblxufn5+a2xpcHNlXG4gICAodmVjLT5tYXAgW1s6YSAxXSBbOmIgMl1dKVxufn5+XG4gICBcIlxuICBbdmVjXVxuICAoaW50byB7fSB2ZWMpKVxuXG4oZGVmbiBtYXAtMmQtdmVjXG4gIFwiTWFwcyB0aGUgdmFsdWVzIG9mIGEgYDJEYCB2ZWN0b3Igd2hlcmUgZWFjaCBlbGVtZW50IG9mIHRoZSB2ZWN0b3IgaXMgYSBrZXktdmFsdWUgcGFpci5cbmBmYCBpcyBhIGAxLWFyeWAgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUga2V5LlxuXG5+fn5rbGlwc2VcbiAgKG1hcC0yZC12ZWMgaW5jIFtbOmEgMV0gWzpiIDJdXSlcbn5+flxuXCJcbiAgW2YgbV1cbiAgKG1hcCAoZm5bW2sgaWRdXSBbayAoZiBpZCldKSBtKSlcblxuKGRlZm4gbWFwLTJkLXZlYy1rdiBcbiAgXCJNYXBzIHRoZSB2YWx1ZXMgb2YgYSBgMkRgIHZlY3RvciB3aGVyZSBlYWNoIGVsZW1lbnQgb2YgdGhlIHZlY3RvciBpcyBhIGtleS12YWx1ZSBwYWlyLlxuYGZrYCBpcyBhIGAxLWFyeWAgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUga2V5LlxuYGZ2YCBpcyBhIGAxLWFyeWAgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUgdmFsdWUuXG5cbn5+fmtsaXBzZVxuICAgIChtYXAtMmQtdmVjLWt2IG5hbWUgaW5jIFtbOmEgMV0gWzpiIDJdXSlcbn5+flxuXCJcbiBbZmsgZnYgbV1cbiAgKG1hcCAoZm5bW2sgaWRdXSBbKGZrIGspIChmdiBpZCldKSBtKSlcblxuKGRlZm4gbWFwLW9iamVjdFxuICBcIlJldHVybnMgYSBtYXAgd2l0aCB0aGUgc2FtZSBrZXlzIGFzIGBtYCBhbmQgd2l0aCB0aGUgdmFsdWVzIHRyYW5zZm9ybWVkIGJ5IGBmYC4gYGZgIGlzIGEgYDEtYXJ5YCBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBrZXkuXG5cbn5+fmtsaXBzZVxuICAobWFwLW9iamVjdCBpbmMgezphIDEgOmIgMiA6YyAzfSlcbn5+flxuICBcIlxuICBbZiBtXVxuICAodmVjLT5tYXAgKG1hcC0yZC12ZWMgZiBtKSkpXG5cbihkZWZuIG1hcC1vYmplY3Qtd2l0aC1rZXlcbiAgXCJSZXR1cm5zIGEgbWFwIHdpdGggdGhlIHNhbWUga2V5cyBhcyBgbWAgYW5kIHdpdGggdGhlIHZhbHVlcyB0cmFuc2Zvcm1lZCBieSBgZmAuIGBmYCBtdXN0IGJlIGEgYDItYXJ5YCBmdW5jdGlvbiB0aGF0IHJlY2VpdmVzIHRoZSBrZXkgYW5kIHRoZSB2YWx1ZSBhcyBhcmd1bWVudHMuXG5cbn5+fmtsaXBzZVxuICAobWFwLW9iamVjdC13aXRoLWtleSBsaXN0IHs6YSAxIDpiIDIgOmMgM30pXG5+fn5cbiAgXCJcbiAgW2YgbV1cbiAgKGludG8ge30gKG1hcCAoZm4gW1thIGJdXSBbYSAoZiBhIGIpXSkgbSkpKVxuXG4oZGVmbiBtYXAtb2JqZWN0LWt2XG4gIFwiUmV0dXJucyBhIG1hcCB3aXRoIHRoZSBrZXlzIG1hcHBlZCBieSBgZmtgIGFuZCB0aGUgdmFsdWVzIG1hcHBlZCBieSBgZnZgLlxuXG5+fn5rbGlwc2VcbiAgICAobWFwLW9iamVjdC1rdiBuYW1lIGluYyB7OmEgMSA6YiAyIDpjIDN9KVxufn5+XG5cIlxuW2ZrIGZ2IG1dXG4gICh2ZWMtPm1hcCAobWFwLTJkLXZlYy1rdiBmayBmdiBtKSkpXG5cbihkZWZuIG1hcC1yZXZlcnNlLWhpZXJhcmNoeVxuICBcIlR1cm5zIGEgaGFzaCBtYXAgaW5zaWRlIG91dC5cbiAgU2VlOiAgW2hlcmVdKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzIzNjUzNzg0LzgxMzY2NSlcblxufn5+a2xpcHNlXG4gIChtYXAtcmV2ZXJzZS1oaWVyYXJjaHkgezptb25kYXkgezpiYW5hbmEgMiA6YXBwbGUgM30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDp0dWVzZGF5IHs6YmFuYW5hIDUgOm9yYW5nZSAyfX0pXG5+fn5cblwiXG5bbV1cbiAgKG9yIChhcHBseSBtZXJnZS13aXRoIGNvbmpcbiAgICAgICAgIChmb3IgW1trMSB2MV0gbSBbazIgdjJdIHYxXSB7azIge2sxIHYyfX0pKVxuICAgICAge30pKVxuXG4oZGVmbiBtZWFuXG4gIFwiQ2FsY3VsYXRlcyB0aGUgbWVhbiAoYS5rLmEgYXZlcmFnZSkgb2YgYSBzZXF1ZW5jZSBvZiBudW1iZXJzLlxuXG5+fn5rbGlwc2VcbiAgKG1lYW4gWzEgMiAxMCAtMSAxMi4zXSlcbn5+flxuICBcIlxuIFt4XVxuICAoaWYgKGVtcHR5PyB4KSAwXG4gICAgKC8gKGFwcGx5ICsgeClcbiAgICAgICAoY291bnQgeCkpKSlcblxuKGRlZm4gc2VxdWVuY2UtPm1hcFxuICBcIkNvbnZlcnRzIGEgc2VxdWVuY2UgaW50byBhIG1hcCB3aGVyZSB0aGUga2V5cyBhcmUgdGhlIGluZGV4ZXMgb2YgdGhlIGVsZW1lbnRzIGluIHRoZSBzZXF1ZW5jZS5cblxuICB+fn5rbGlwc2VcbiAgKHNlcXVlbmNlLT5tYXAgWzEwIDIwIDMwXSlcbiAgfn5+XG4gIFwiXG4gIFtzXVxuICAoemlwbWFwIChyYW5nZSAoY291bnQgcykpIHMpKVxuXG4oZGVmbiBzZXF1ZW5jZS1vZi1tYXBzLT5tYXBcbiAgXCJDb252ZXJ0cyBhIHNlcXVlbmNlIG9mIG1hcHMgaW50byBhIG1hcCB3aGVyZTpcblxuICAtIHRoZSBrZXlzIGFyZSBleHRyYWN0ZWQgZnJvbSB0aGUgbWFwcyB1c2luZyBga2V5LWZuYFxuICAtIHRoZSB2YWxzIGV4dHJhY3RlZCBmcm9tIHRoZSBtYXBzIHVzaW5nIGB2YWwtZm5gICBcbiAgXG4gIH5+fmtsaXBzZVxuICAoc2VxdWVuY2Utb2YtbWFwcy0+bWFwIFt7OmtleSA6cHJpY2UgOnZhbHVlIDE5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICB7OmtleSA6cXVhbnRpdHkgOnZhbHVlIDEwMH1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDprZXkgOnZhbHVlKVxuICB+fn5cbiAgXCJcbiAgW2NvbGwga2V5LWZuIHZhbC1mbl1cbiAgKHJlZHVjZSAoZm4gW3JlcyBtXVxuICAgICAgICAgICAgKGFzc29jIHJlcyAoa2V5LWZuIG0pICh2YWwtZm4gbSkpKVxuICAgICAgICAgIHt9XG4gICAgICAgICAgY29sbCkpXG5cbihkZWZuLSByYW5nZS13aXRoLWVuZFxuICAoW2VuZF0gW2VuZCAocmFuZ2UgZW5kKV0pXG4gIChbc3RhcnQgZW5kXSBbZW5kIChyYW5nZSBzdGFydCBlbmQpXSlcbiAgKFtzdGFydCBlbmQgc3RlcHNdIFtlbmQgKHJhbmdlIHN0YXJ0IGVuZCBzdGVwcyldKSlcblxuKGRlZm4gcmFuZ2UtdGlsbC1lbmRcbiAgXCJMaWtlIGByYW5nZWAgYnV0IGluY2x1ZGluZyB0aGUgYGVuZGAuXG5cbn5+fmtsaXBzZVxuICAocmFuZ2UtdGlsbC1lbmQgMTApXG5+fn5cblxufn5+a2xpcHNlXG4ocmFuZ2UtdGlsbC1lbmQgMTAgMTgpXG5+fn5cblxufn5+a2xpcHNlXG4ocmFuZ2UtdGlsbC1lbmQgMTAgMTAwIDUpXG5+fn5cblxuICBcIlxuICBbJiBhcmdzXVxuICAobGV0IFtbZW5kIGxpc10gKGFwcGx5IHJhbmdlLXdpdGgtZW5kIGFyZ3MpXVxuICAgICAoY29uY2F0IGxpcyBbZW5kXSkpKVxuXG4oZGVmbiBhcHBlbmQtY3ljbGljXG4gIFwiQXBwZW5kcyBhbiBlbGVtZW50IHRvIGEgbGlzdCBwb3BwaW5nIG91dCB0aGUgZmlyc3QgZWxlbWVudC5cblxufn5+a2xpcHNlXG4gICgtPiAocmVwZWF0IDMgbmlsKVxuICAgICAgKGFwcGVuZC1jeWNsaWMgMSlcbiAgICAgIChhcHBlbmQtY3ljbGljIDIpXG4gICAgICAoYXBwZW5kLWN5Y2xpYyAzKVxuICAgICAgKGFwcGVuZC1jeWNsaWMgNCkpXG5+fn5cbiAgXCJcbiAgW2xzdCBhXVxuICAoaWYgKHNlcSBsc3QpXG4gICAgKGNvbmNhdCAocmVzdCBsc3QpIFthXSlcbiAgICBsc3QpKVxuXG4oZGVmbiBhc3NvYy1jeWNsaWNcbiAgXCJBc3NvYyBhIGtleS12YWx1ZSBwYWlyIHRvIGEgbWFwIHBvcHBpbmcgb3V0IGFuIGVsZW1lbnQgb2YgdGhlIG1hcC5cbiAgSWYgdGhlIGtleSBhbHJlYWR5IGV4aXN0cywgbm8gZWxlbWVudCBpcyBwb3BwZWQgb3V0LlxuICBJZiBgbmAgaXMgc3VwcGxpZWQsIG5vIGVsbWVtZW50IGlzIHBvcHBlZCBvdXQgaWYgdGhlIG1hcCBoYXMgbGVzcyB0aGFuIGBuYCBlbnRyaWVzLlxuXG5+fn5rbGlwc2VcbiAgKC0+IHs6YSAxIDpiIDIgOmMgM31cbiAgICAgIChhc3NvYy1jeWNsaWMgOmQgNClcbiAgICAgIChhc3NvYy1jeWNsaWMgOmUgNSlcbiAgICAgIChhc3NvYy1jeWNsaWMgOmYgNilcbiAgICAgIChhc3NvYy1jeWNsaWMgOmcgNykpXG5+fn5cbiAgXCJcbiAgKFtjb2xsIGsgdl1cbiAgIChpZiAoY29udGFpbnM/IGNvbGwgaylcbiAgICAgKGFzc29jIGNvbGwgayB2KVxuICAgICAoaW50byB7fSAoYXBwZW5kLWN5Y2xpYyBjb2xsIFtrIHZdKSkpKVxuICAoW2NvbGwgayB2IG5dXG4gICAoaWYgKDwgKGNvdW50IGNvbGwpIG4pXG4gICAgIChhc3NvYyBjb2xsIGsgdilcbiAgICAgKGFzc29jLWN5Y2xpYyBjb2xsIGsgdikpKSlcblxuKGRlZm4gbWF4LWFuZC1taW5cbiAgXCJSZXR1cm5zIGEgY291cGxlIG9mIHRoZSBgbWF4YCBhbmQgdGhlIGBtaW5gIG9mIGEgc2VxdWVuY2UuXG5cbn5+fmtsaXBzZVxuICAobWF4LWFuZC1taW4gKHJhbmdlIDUpKVxufn5+XG4gIFwiXG4gIFt4XVxuICAoaWYgKGVtcHR5PyB4KVxuICAgIFswIDBdXG4gICAgKChqdXh0ICMoYXBwbHkgbWF4ICUpICMoYXBwbHkgbWluICUpKSB4KSkpXG5cbihkZWZuIGNvbXBhY3RpemUtbWFwXG4gIFwiUmVtb3ZlcyBlbnRyaWVzIHdpdGggYG5pbGAgdmFsdWVzLlxuXG5+fn5rbGlwc2VcbiAgKGNvbXBhY3RpemUtbWFwIHs6YSAxIDpiIG5pbCA6YyAzfSlcbn5+flxuICBcIlxuICBbbV1cbiAgKGludG8ge30gKHJlbW92ZSAoY29tcCBuaWw/IHNlY29uZCkgbSkpKVxuXG5cbjs7IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM0MjIxODE2LzgxMzY2NVxuKGRlZm4gY29tcGFjdGl6ZS1tYXAtcmVjdXJzaXZlXG4gIFwiUmVtb3ZlIGZyb20gYSBtYXAgdGhlIGVudHJpZXMgd2hvc2UgdmFsdWVzIGFyZSBgbmlsYC5cbiAgSWYgYWxsIHRoZSB2YWx1ZXMgb2YgYSBuZXN0ZWQgbWFwIGFyZSBgbmlsYCB0aGUgZW50cmllIGlzIHJlbW92ZWQuXG5+fn5rbGlwc2VcblxuKGNvbXBhY3RpemUtbWFwLXJlY3Vyc2l2ZSB7OnggMSA6eiB7OmEgbmlsfSA6YSB7OmIgbmlsIDpjIDIgOmQgezplIG5pbCA6ZiAyfX19KVxufn5+XG4gIFwiXG4gICAgW21dXG4gIChsZXQgW2YgKGZuIFt4XVxuICAgICAgICAgICAgKGlmIChtYXA/IHgpXG4gICAgICAgICAgICAgIChsZXQgW2t2cyAoZmlsdGVyIChjb21wIG5vdCBuaWw/IHNlY29uZCkgeCldXG4gICAgICAgICAgICAgICAgKGlmIChlbXB0eT8ga3ZzKSBuaWwgKGludG8ge30ga3ZzKSkpXG4gICAgICAgICAgICAgIHgpKV1cbiAgICAocG9zdHdhbGsgZiBtKSkpXG5cbihkZWZuIGZpbHRlci1tYXBcbiAgXCJSdW4gYSBmdW5jdGlvbiBvbiB0aGUgdmFsdWVzIG9mIGEgbWFwIGFuZCBrZWVwIG9ubHkgdGhlIChrZXksIHZhbHVlKSBwYWlycyBmb3Igd2hpY2ggdGhlIGZ1bmN0aW9uIHJldHVybnMgdHJ1ZVxuICBcbn5+fmtsaXBzZVxuICAoZmlsdGVyLW1hcCBldmVuPyB7OmEgMSA6YiAyIDpjIDN9KVxufn5+XG4gIFwiXG4gIFtmIG1dXG4gIChpbnRvIHt9IChmaWx0ZXIgKGNvbXAgZiB2YWwpIG0pKSlcblxuXG5cblxuXG5cbihkZWZuIG5lYXJlc3Qtb2Ytc3NcbiAgXCJSZXR1cm5zIHRoZSBuZWFyZXN0IG51bWJlciB0byBgeGAgb2YgYSBzb3J0ZWQgc2V0XG5cbn5+fmtsaXBzZVxuICAobmVhcmVzdC1vZi1zcyAoYXBwbHkgc29ydGVkLXNldCAocmFuZ2UgNSkpIDEuMilcbn5+flxuICBcIlxuICBbc3MgeF1cbiAgKGxldCBbZ3JlYXRlciAoZmlyc3QgKHN1YnNlcSBzcyA+PSB4KSlcbiAgICAgICAgc21hbGxlciAoZmlyc3QgKHJzdWJzZXEgc3MgPD0geCkpXVxuICAgIChhcHBseSBtaW4ta2V5ICMoYWJzICgtICUgeCkpIChyZW1vdmUgbmlsPyBbZ3JlYXRlciBzbWFsbGVyXSkpKSlcblxuKGRlZm4gbmVhcmVzdC1vZi1zZXFcbiAgXCJNYXBzIGVhY2ggZWxlbWVudCBvZiBgYmAgdG8gaXRzIG5lYXJlc3QgZWxlbWVudCBpbiBgYWAuXG4gIElmIGBhYCBpcyBlbXB0eSwgcmV0dXJucyBgYmAuXG5cbn5+fmtsaXBzZVxuICAobmVhcmVzdC1vZi1zZXEgKHJhbmdlIDUpIFsxLjIgMy40IDRdKVxufn5+XG4gIFwiXG4gIFthIGJdXG4gIChpZiAoZW1wdHk/IGEpXG4gICAgYlxuICAgIChtYXAgKHBhcnRpYWwgbmVhcmVzdC1vZi1zcyAoYXBwbHkgc29ydGVkLXNldCBhKSkgYikpKVxuXG4oZGVmbiBtYXAtdG8tb2JqZWN0XG4gIFwiUmV0dXJucyBhIG1hcCB3aG9zZSBrZXlzIGFyZSB0aGUgZWxlbWVudHMgb2YgYGxzdGAgYW5kIHZhbHVlcyBhcmUgbWFwcGVkIGJ5IGBmYC5cblxufn5+a2xpcHNlXG4gIChtYXAtdG8tb2JqZWN0IGluYyAocmFuZ2UgNSkpXG5+fn5cbiAgXCJcbiAgW2YgbHN0XVxuICAoemlwbWFwIGxzdCAobWFwIGYgbHN0KSkpXG5cbihkZWZuIG1hcGlmeVxuICBcIlxuICBUYWtlcyBhIHNlcSwgYW5kIHJldHVybnMgYSBtYXAgd2hlcmUgdGhlIGtleXMgYXJlIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgZiB0byB0aGUgZWxlbWVudHMgaW4gdGhlIHNlcS5cbiAgVGhlIHJlc3VsdCBvZiBmIHNob3VsZCBiZSB1bmlxdWUgZm9yIGVhY2ggZWxlbWVudCBpbiB0aGUgc2VxLCBvdGhlcndpc2UgeW91IHdpbGwgbG9vc2Ugc29tZSBkYXRhLlxuICBJZiBpdCBpcyBub3QgdW5pcXVlLCBjb25zaWRlciB1c2luZyBbZ3JvdXAtYnldKGh0dHBzOi8vY2xvanVyZWRvY3Mub3JnL2Nsb2p1cmUuY29yZS9ncm91cC1ieSkuXG5cbn5+fmtsaXBzZVxuICAobWFwaWZ5IGluYyAocmFuZ2UgNSkgKVxufn5+XG4gIFwiXG4gIFtmIHNdXG4gICh6aXBtYXAgKG1hcCBmIHMpIHMpKVxuXG4oZGVmbiBtYXAtd2l0aC1pbmRleFxuICBcIk1hcHMgYSBzZXF1ZW5jZSB0byBhIHNlcXVlbmNlIG9mIG1hcHMgd2l0aCBpbmRleCBhbmQgdmFsdWVcblxufn5+a2xpcHNlXG4gICAgICAobWFwLXdpdGgtaW5kZXggWzEwIDIwIDMwXSA6aWR4IDp2YWwpXG5+fn5cbiAgXCJcbiAgW3MgaWR4LWtleSB2YWwta2V5XVxuICAobWFwLWluZGV4ZWQgKGZuIFtpIHZdIHtpZHgta2V5IGkgdmFsLWtleSB2fSkgcykpXG5cbihkZWZuIGRpc3NvYy1pblxuICBcIkRpc3NvY2lhdGVzIGFuIGVudHJ5IGZyb20gYSBuZXN0ZWQgYXNzb2NpYXRpdmUgc3RydWN0dXJlIHJldHVybmluZyBhIG5ldyBuZXN0ZWQgc3RydWN0dXJlLiBga2V5c2AgaXMgYSBzZXF1ZW5jZSBvZiBrZXlzLiBBbnkgZW1wdHkgbWFwcyB0aGF0IHJlc3VsdCB3aWxsIG5vdCBiZSBwcmVzZW50IGluIHRoZSBuZXcgc3RydWN0dXJlLiBTZWUgW2Fzc29jLWluXShodHRwczovL2Nsb2p1cmVkb2NzLm9yZy9jbG9qdXJlLmNvcmUvYXNzb2MtaW4pXG5cbn5+fmtsaXBzZVxuICAoZGlzc29jLWluIHs6YSAxIDpiIDJ9IFs6Yl0pXG5+fn5cblxufn5+a2xpcHNlXG4gIChkaXNzb2MtaW4gezphIHs6YiAyIDpCIDN9IDpjIDN9IFs6YSA6Yl0pXG5+fn5cblxufn5+a2xpcHNlXG4gIChkaXNzb2MtaW4gezphIHs6YiAyfSA6YyAzfSBbOmEgOmJdKVxufn5+XG4gIFwiXG4gIFttIFtrICYga3MgOmFzIGtleXNdXVxuICAoaWYga3NcbiAgICAoaWYtbGV0IFtuZXh0bWFwIChnZXQgbSBrKV1cbiAgICAgIChsZXQgW25ld21hcCAoZGlzc29jLWluIG5leHRtYXAga3MpXVxuICAgICAgICAoaWYgKHNlcSBuZXdtYXApXG4gICAgICAgICAgKGFzc29jIG0gayBuZXdtYXApXG4gICAgICAgICAgKGRpc3NvYyBtIGspKSlcbiAgICAgIG0pXG4gICAgKGRpc3NvYyBtIGspKSlcblxuKGRlZm4gcG9zaXRpb25zXG4gIFwiUmVjZWl2ZXMgYSBjb2xsZWN0aW9uIG9mIGxlbmd0aHMgYW5kIHJldHVybnMgYSBsaXN0IG9mIHN0YXJ0IGFuZCBlbmQgcG9zaXRpb25zLiBPcHRpb25zOlxuICAqIGBtYXgtdmFsYDogKGRlZmF1bHQgYGluZmluaXR5YCkgLSBtYXggdmFsdWUgZm9yIGBlbmRgXG4gICogYGZpcnN0LXZhbGA6IChkZWZhdWx0IDApIC0gZmlyc3QgdmFsdWUgb2YgYHN0YXJ0YFxuXG5+fn5rbGlwc2VcbiAgKHBvc2l0aW9ucyAnKDEwIDEwIDIwKSA6Zmlyc3QtdmFsIDEwMCA6bWF4LXZhbCAxMzcpXG5+fn5cblxuICBcIlxuW2NvbGwtb2YtbGVuZ3RocyAmIHs6a2V5cyBbbWF4LXZhbCBmaXJzdC12YWxdIDpvciB7bWF4LXZhbCBpbmZpbml0eSBmaXJzdC12YWwgMH19XVxuICAobGV0IFtlbmQtcG9zIChyZXN0IChyZWR1Y3Rpb25zICsgZmlyc3QtdmFsIGNvbGwtb2YtbGVuZ3RocykpXG4gICAgICAgIHN0YXJ0LXBvcyAoY29uY2F0IFtmaXJzdC12YWxdIGVuZC1wb3MpXVxuICAgIChtYXAgIyhsaXN0IChtaW4gbWF4LXZhbCAlMSkgKG1pbiBtYXgtdmFsICUyKSkgc3RhcnQtcG9zIGVuZC1wb3MpKSlcblxuKGRlZm4gc3BsaXQtYnktcHJlZGljYXRlXG4gIFwiU3BsaXRzIGEgY29sbGVjdGlvbiB0byBpdGVtcyB3aGVyZSB0aGUgc2VwYXJhdG9yIGlzIGEgcmVwZXRpdGlvbiBvZiBhdCBsZWFzdCBuIGVsZW1lbnRzIHRoYXQgc2F0aXNmeSBgcHJlZGAuXG5cbiAgSW5zcGlyZWQgYnk6IFt0aGlzIHF1ZXN0aW9uXShodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzU1NTYxNi84MTM2NjUpLlxuXG5+fn5rbGlwc2VcbiAgKHNwbGl0LWJ5LXByZWRpY2F0ZSAoc2h1ZmZsZSAocmFuZ2UgMzApKSBldmVuPyAyKVxufn5+XG4gIFwiXG5bY29sbCBwcmVkIG5dIFxuICAobGV0IFtwYXJ0ICAocGFydGl0aW9uLWJ5ICBwcmVkIGNvbGwpXG4gICAgICAgIHBwYXJ0IChwYXJ0aXRpb24tYnkgKGZuIFt4XSAoYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICg+PSAoY291bnQgeCkgbikgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChldmVyeT8gcHJlZCB4KSkpIHBhcnQpXVxuICAgICAgICAobWFwICMoYXBwbHkgY29uY2F0ICUpIHBwYXJ0KSkpXG5cbihkZWZuIHNwbGl0LWJ5LXByZWRpY2F0ZS1wb3NpdGlvbnNcbiAgXCJcbiAgT3B0aW1pemVkIHZlcnNpb24gb2YgYHNwbGl0LWJ5LXByZWRpY2F0ZWAgd2hlcmUgd2UgYXNzdW1lIHRoYXQgdGhlIGRhdGEgaXMgZnJvbSBhIHNpZ25hbCB0aGF0IHdlIGNhbiBzYW1wbGUuXG5cbiAgSW5zdGVhZCBvZiBjaGVja2luZyBlYWNoIGVsZW1lbnQsIHdlIGNoZWNrIDEgb3ZlciBgbmAgZWxlbWVudHMuXG5cbiBXZSByZXR1cm4gdGhlIHBvc2l0aW9ucyB3aGVyZSB0aGUgZGF0YSBzcGxpdHMuXG5cbn5+fmtsaXBzZVxuICAobGV0IFtkYXRhIChtYXAgTWF0aC9zaW4gKHJhbmdlIDAgNi4yOCAwLjAwMSkpXVxuICAgIChzcGxpdC1ieS1wcmVkaWNhdGUtcG9zaXRpb25zIGRhdGEgIyg8PSAtMC4wMSAlIDAuMDEpIDIgMTApKVxufn5+XG5cbiAgVGhlIGZvbGxvd2luZyBhc3NlcnRpb24gaG9sZHM6XG5cbn5+fmNsb2p1cmVcbiAgKD0gKHNwbGl0LWJ5LXByZWRpY2F0ZSBjb2xsIHByZWQgbilcbiAgICAgKG1hcCAjKGFwcGx5IHN1YnNlcXVlbmNlIGRhdGEgJSkgKHNwbGl0LWJ5LXByZWRpY2F0ZS1wb3NpdGlvbnMgY29sbCBwcmVkIG4gMSkpKVxufn5+XG5cbiAgSGVyZSBpcyBhbiBleGFtcGxlOlxuXG5+fn5rbGlwc2VcbiAgKGxldCBbZGF0YSAobWFwIE1hdGgvc2luIChyYW5nZSAwIDYuMjggMC4wMSkpXVxuICAgICg9IChzcGxpdC1ieS1wcmVkaWNhdGUgZGF0YSAjKDw9IC0wLjAxICUgMC4wMSkgMilcbiAgICAgICAobWFwICMoYXBwbHkgc3Vic2VxdWVuY2UgZGF0YSAlKSAoc3BsaXQtYnktcHJlZGljYXRlLXBvc2l0aW9ucyBkYXRhICMoPD0gLTAuMDEgJSAwLjAxKSAyIDEpKSkpXG5+fn5cbiAgXCJcbiAgW2NvbGwgcHJlZCBuIGRdXG4gIChsZXQgW2xlbmd0aHMgKG1hcCAjKCogZCAlKSAobWFwIGNvdW50IChzcGxpdC1ieS1wcmVkaWNhdGUgKHRha2UtbnRoIGQgY29sbCkgcHJlZCAoLyBuIGQpKSkpXG4gICAgICAgIHBvcyAocG9zaXRpb25zIGxlbmd0aHMgOm1heC12YWwgKGNvdW50IGNvbGwpKV1cbiAgICBwb3MpKVxuXG4oZGVmbiBzdWJtYXA/XG4gIFwiQ2hlY2tzIGlmIGBtMWAgaXMgYSBzdWJtYXAgb2YgYG0yYC5cbiAgTWFwIGBtMWAgaXMgYSBzdWJtYXAgb2YgYG0yYCBpZiBhbGwga2V5L3ZhbHVlIHBhaXJzIGluIGBtMWAgZXhpc3QgaW4gYG0yYC5cblxufn5+a2xpcHNlXG4gIChzdWJtYXA/IHs6YSAxfSB7OmEgMSA6YiAyfSlcbn5+flxuXG5+fn5rbGlwc2VcbiAgKHN1Ym1hcD8gezphIDF9IHs6YSAxIDpiIDIgOmMgbmlsfSlcbn5+flxuICBcIlxuICBbbTEgbTJdXG4gICg9IG0xIChzZWxlY3Qta2V5cyBtMiAoa2V5cyBtMSkpKSlcblxuKGRlZm4gc3Vic2VxdWVuY2VcbiAgXCJcbiAgUmV0dXJucyBhIGxhenkgc3Vic2VxdWVuY2Ugb2YgYGNvbGxgLCBzdGFydGluZyBhdCBgc3RhcnQsIGVuZGluZyBhdCBgZW5kYCAobm90IGluY2x1ZGVkKS5cblxufn5+a2xpcHNlXG4gIChzdWJzZXF1ZW5jZSAocmFuZ2UpIDEwIDIwKVxufn5+XG4gIFwiXG4gIFtjb2xsIHN0YXJ0IGVuZF1cbiAgKC0+PiAoZHJvcCBzdGFydCBjb2xsKVxuICAgICAgICh0YWtlICgtIGVuZCBzdGFydCkpKSlcblxuKGRlZm4gaW5kZXgtb2ZcbiAgXCJSZXR1cm5zIHRoZSBpbmRleCBvZiBhbiBlbGVtZW50IGluIGEgc2VxdWVuY2Ugb3IgYC0xYCBpZiBub3QgcHJlc2VudC5cblxuICB+fn5rbGlwc2VcbiAgKGluZGV4LW9mIChyYW5nZSAxMDApIDE4KVxuICB+fn5cbiAgXCJcbiAgW3MgZWxlbWVudF1cbiAgKG9yIChmZmlyc3QgKGZpbHRlciAjKD0gKHNlY29uZCAlKSBlbGVtZW50KSAobWFwLWluZGV4ZWQgIyh2ZWN0b3IgJTEgJTIpIHMpKSlcbiAgICAgIC0xKSlcblxuKGRlZm4tIGZsYXR0ZW4ta2V5cyogW2Ega3MgbV1cbiAgKGlmIChtYXA/IG0pXG4gICAgKGlmIChzZXEgbSlcbiAgICAgIChyZWR1Y2UgaW50byAobWFwIChmbiBbW2sgdl1dIChmbGF0dGVuLWtleXMqIGEgKGNvbmoga3MgaykgdikpIChzZXEgbSkpKVxuICAgICAge30pXG4gICAgKGFzc29jIGEga3MgbSkpKVxuXG4oZGVmbiBmbGF0dGVuLWtleXNcblwiXG5GbGF0dGVuIHRoZSBrZXlzIG9mIGEgbmVzdGVkIG1hcC5cblRoYW5rcyB0byBbSmF5IEZpZWxkc10oaHR0cDovL2Jsb2cuamF5ZmllbGRzLmNvbS8yMDEwLzA5L2Nsb2p1cmUtZmxhdHRlbi1rZXlzLmh0bWwpXG5cbn5+fmtsaXBzZVxuKGZsYXR0ZW4ta2V5cyB7OmEgezpiIDF9IDpjIHs6ZCAyIDplIDQgOmYgezpnIDh9fX0pXG5+fn5cblwiXG4gIFttXSAoZmxhdHRlbi1rZXlzKiB7fSBbXSBtKSlcblxuKGRlZm4gdW5mbGF0dGVuLWtleXNcblwiXG4gIFVuZmxhdHRlbmQgdGhlIGtleXMgb2YgYSBtYXAgdGhhdCBoYXMgYmVlbiBgZmxhdHRlbi1rZXlzYGVkLlxuXG5+fn5rbGlwc2Vcbih1bmZsYXR0ZW4ta2V5cyB7WzphIDpiXSAxLCBbOmMgOmRdIDIsIFs6YyA6ZV0gNCwgWzpjIDpmIDpnXSA4fSlcbn5+flxuXCJcbiAgW21dXG4gIChyZWR1Y2Uta3YgKGZuIFthIGIgY10gKGFzc29jLWluIGEgYiBjKSkge30gbSkpXG5cbihkZWZuIHRha2UtZnJvbS1tYXBcbiAgXCJDcmVhdGVzIGEgbWFwIHdpdGggbiBsZWF2ZXMgd2hpY2ggYXJlIG5lc3RlZCB2YWx1ZXMgb2YgbS5cbiAgVGhlIGZvbGxvd2luZyBhc3NlcnRpb24gaG9sZHM6XG5cbn5+fmNsb2p1cmVcbiAgICAgICg+PSBuIChjb3VudCAoZmxhdHRlbi1rZXlzICh0YWtlLWZyb20tbWFwIG4gbSkpKSkpKSlcbn5+flxuXG5+fn5rbGlwc2VcbiAgKHRha2UtZnJvbS1tYXAgMyB7OmEgezpiIDF9LCA6YyB7OmUgNCwgOmQgMiwgOmYgezpnIDh9fX0pXG5+fn5cbiAgXCJcbiAgW24gbV1cbiAgKC0+PiBtXG4gICAgICAgZmxhdHRlbi1rZXlzXG4gICAgICAgKHRha2UgbilcbiAgICAgICAoaW50byB7fSlcbiAgICAgICB1bmZsYXR0ZW4ta2V5cykpXG5cbihkZWZuLSBkZWVwLW1lcmdlKiBbJiBtYXBzXVxuICAobGV0IFtmIChmbiBbb2xkIG5ld11cbiAgICAgICAgICAgIChpZiAoYW5kIChtYXA/IG9sZCkgKG1hcD8gbmV3KSlcbiAgICAgICAgICAgICAgKG1lcmdlLXdpdGggZGVlcC1tZXJnZSogb2xkIG5ldylcbiAgICAgICAgICAgICAgbmV3KSldXG4gICAgKGlmIChldmVyeT8gbWFwPyBtYXBzKVxuICAgICAgKGFwcGx5IG1lcmdlLXdpdGggZiBtYXBzKVxuICAgICAgKGxhc3QgbWFwcykpKSlcblxuKGRlZm4gZGVlcC1tZXJnZVxuXCIgRGVlcCBtZXJnZXMgbWFwcy5cblxufn5+a2xpcHNlXG4oZGVlcC1tZXJnZSB7fSB7OmEgezpiIDF9LCA6YyB7OmUgNCwgOmQgMiwgOmYgezpnIDh9fX0gezphIHs6YiAxfSwgOmMgezplIDQsIDpkIDIwMDAsIDpmIHs6ZyA5MDAwfX19KVxufn5+XG5cIlxuICBbJiBtYXBzXVxuICAobGV0IFttYXBzIChmaWx0ZXIgaWRlbnRpdHkgbWFwcyldXG4gICAgKGFzc2VydCAoZXZlcnk/IG1hcD8gbWFwcykpXG4gICAgKGFwcGx5IG1lcmdlLXdpdGggZGVlcC1tZXJnZSogbWFwcykpKVxuXG4oZGVmbi0gZGVlcC1tZXJnZS13aXRoKiBbZyAmIG1hcHNdXG4gIChsZXQgW2YgKGZuIFtvbGQgbmV3XVxuICAgICAgICAgICAgKGlmIChhbmQgKG1hcD8gb2xkKSAobWFwPyBuZXcpKVxuICAgICAgICAgICAgICAobWVyZ2Utd2l0aCAocGFydGlhbCBkZWVwLW1lcmdlLXdpdGgqIGcpIG9sZCBuZXcpXG4gICAgICAgICAgICAgIChnIG9sZCBuZXcpKSldXG4gICAgKGlmIChldmVyeT8gbWFwPyBtYXBzKVxuICAgICAgKGFwcGx5IG1lcmdlLXdpdGggZiBtYXBzKVxuICAgICAgKGFwcGx5IGcgbWFwcykpKSlcblxuKGRlZm4gZGVlcC1tZXJnZS13aXRoXG5cIkxpa2UgbWVyZ2Utd2l0aCBidXQgZGVlcC5cbn5+fmtsaXBzZVxuKGRlZXAtbWVyZ2Utd2l0aCBjb25jYXRcbiAgICAgICAgICAgICAgICAgezp4IHs6YiBbMV1cbiAgICAgICAgICAgICAgICAgICAgICA6YSBbMV19fVxuICAgICAgICAgICAgICAgICB7OnggezphIFszIDRdfX0pXG5+fn5cblwiXG4gIFtnICYgbWFwc11cbiAgKGxldCBbbWFwcyAoZmlsdGVyIGlkZW50aXR5IG1hcHMpXVxuICAgIChhc3NlcnQgKGV2ZXJ5PyBtYXA/IG1hcHMpKVxuICAgIChhcHBseSBtZXJnZS13aXRoIChwYXJ0aWFsIGRlZXAtbWVyZ2Utd2l0aCogZykgbWFwcykpKVxuXG4oZGVmbiBicmFuY2hlcy1hbmQtbGVhdmVzXG4gIFwiUmV0dXJucyBhbGwgYnJhbmNoZXMgYW5kIGxlYXZlcyBvZmYgYSBuZXN0ZWQgbWFwIG9iamVjdC5cblxufn5+a2xpcHNlXG4oYnJhbmNoZXMtYW5kLWxlYXZlcyB7OmEgezpiIDEgOmMgezpkIDJ9fSA6ZSAzfSlcbn5+flxuICBcIlxuICBbbV1cbiAgKGFzLT4gKHRyZWUtc2VxIGNvbGw/ICMoaWYgKG1hcD8gJSkgKHZhbHMgJSkgJSkgbSkgJFxuICAgICAgICAoZ3JvdXAtYnkgY29sbD8gJClcbiAgICAgICAgKGFzc29jICQgdHJ1ZSAob3IgKGdldCAkIHRydWUpIFtdKSlcbiAgICAgICAgKGFzc29jICQgZmFsc2UgKG9yIChnZXQgJCBmYWxzZSkgW10pKVxuICAgICAgICAoY2xvanVyZS5zZXQvcmVuYW1lLWtleXMgJCB7dHJ1ZSA6YnJhbmNoZXMgZmFsc2UgOmxlYXZlc30pKSlcblxuKGRlZm4gZmlsdGVyLWJyYW5jaGVzXG4gIFwiRmlsdGVycyBicmFuY2hlcyBvZiBhIChuZXN0ZWQpIG1hcCBgbWAgYWNjb3JkaW5nIHRvIGEgcHJlZGljYXRlIGBtYC5cblxufn5+a2xpcHNlXG4oZmlsdGVyLWJyYW5jaGVzIHs6eCB7OmlkIDE5IDpiIDEgOmMgezppZCAyfX0gOmUgM30gOmlkKVxufn5+XG4gIFwiXG4gIFttIHBdXG4gICgtPj4gKGJyYW5jaGVzLWFuZC1sZWF2ZXMgbSlcbiAgICAgICA6YnJhbmNoZXNcbiAgICAgIChmaWx0ZXIgcCkpKVxuXG4oZGVmbiBvdXQtb2YtYm91bmQ/XG4gIFwiQ2hlY2tzIGlmIGluZGV4IGBpZHhgIGlzIGluIHJhbmdlIG9mIHZlY3RvciBgdmAuIE1vcmUgZWZmaWNpZW50IHRoYW4gYChnZXQgdiBpZHgpYFxuXG5+fn5rbGlwc2VcbiAgICAobWFwICMob3V0LW9mLWJvdW5kPyBbMSAyIDNdICUpIFstMSAwIDEgMiAzIDRdKVxufn5+XG4gIFwiXG4gIFt2IGlkeF1cbiAgIChvciAoPD0gKGNvdW50IHYpIGlkeCkgKD4gMCBpZHgpKSlcblxuKGRlZm4gcGFydGl0aW9uLWJldHdlZW5cbiAgXCJTcGxpdHMgYSBjb2xsZWN0aW9uIGJldHdlZW4gdHdvIGl0ZW1zIGFjY29yZGluZyB0byBwcmVkaWNhdGUgYHByZWRgIC0gd2hpY2ggbWVhbnMgc3BsaXQgdGhlIHNlcXVlbmNlIG9uIGJyZWFraW5nIHBvaW50LlxuXG4gIFNlZTogW2hlcmVdKGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMyMDc0OTAvcGFydGl0aW9uLWEtc2VxLWJ5LWEtd2luZG93aW5nLXByZWRpY2F0ZS1pbi1jbG9qdXJlKVxuXG4gIEZvciBpbnN0YW5jZSwgc3BsaXQgZWFjaCB0aW1lIHRoZSBzZXJpZXMgc3RvcCBiZWluZyBhc2NlbmRpbmc6XG5cbn5+fmtsaXBzZVxuKHBhcnRpdGlvbi1iZXR3ZWVuID4gWzEgMiA0IDkgOCA3IDYgNSAxIDIgNCA1IDExXSlcbn5+flxuXCJcbiAgW3ByZWQgY29sbF1cbiAgICAobGV0IFtzd2l0Y2ggKHJlZHVjdGlvbnMgbm90PSB0cnVlIChtYXAgcHJlZCBjb2xsIChyZXN0IGNvbGwpKSldXG4gICAgICAobWFwIChwYXJ0aWFsIG1hcCBmaXJzdCkgKHBhcnRpdGlvbi1ieSBzZWNvbmQgKG1hcCBsaXN0IGNvbGwgc3dpdGNoKSkpKSlcblxuXG4oZGVmbiBjb2xsaWZ5XG4gIFwiRW5zdXJlIGBzYCBpcyBhIGNvbGxlY3Rpb246IGlmIGBzYCBpcyBhIGNvbGxlY3Rpb24gcmV0dXJucyBpdDsgb3RoZXJ3aXNlIHJldHVybnMgKHMpXG5cbn5+fmtsaXBzZVxuKGNvbGxpZnkgMSlcbn5+flxuXG5+fn5rbGlwc2Vcbihjb2xsaWZ5IFsxIDIgM10pXG5+fn5cbiAgXCJcbiAgW3NdXG4gIChpZiAoY29sbD8gcykgcyAobGlzdCBzKSkpXG5cbihkZWZuIGVkbi16aXBcbiAgXCJBIHppcHBlciBmb3IgYGVkbmAuXG5cbn5+fmtsaXBzZVxuICAoZWRuLXppcCB7OmEgezpiIDF9LCA6YyB7OmUgNCwgOmQgMiwgOmYgezpnIDh9fX0pXG5+fn5cbiAgXCJcbiAgW3Jvb3RdXG4gICh6aXAvemlwcGVyXG4gICAgIyhvciAodmVjdG9yPyAlKSAobWFwPyAlKSAoc2VxPyAlKSlcbiAgICAoZm4gW25vZGVdXG4gICAgICAoY29uZFxuICAgICAgICAodmVjdG9yPyBub2RlKSAodmVjIG5vZGUpXG4gICAgICAgIChtYXA/IG5vZGUpICAgICh2ZWMgbm9kZSlcbiAgICAgICAgKHNlcT8gbm9kZSkgICAgKHNlcSBub2RlKSkpXG5cbiAgICAoZm4gW25vZGUgY2hpbGRyZW5dXG4gICAgICAoLT5cbiAgICAgICAgKGNvbmRcbiAgICAgICAgICAodmVjdG9yPyBub2RlKSAodmVjIGNoaWxkcmVuKVxuICAgICAgICAgIChtYXA/IG5vZGUpICAgIChpbnRvIHt9IGNoaWxkcmVuKVxuICAgICAgICAgIChzZXE/IG5vZGUpICAgIGNoaWxkcmVuKVxuICAgICAgICAod2l0aC1tZXRhIChtZXRhIG5vZGUpKSkpXG4gICAgcm9vdCkpXG5cbihkZWZuLSBsb2MtbXktcmVwbGFjZSBbc21hcCBsb2NdXG4gIChpZi1sZXQgW1tfIFtyZXBsYWNlbWVudCAmIHZhbHVlc11dIChmaW5kIHNtYXAgKHppcC9ub2RlIGxvYykpXVxuICAgIChhcy0+IGxvYyAkXG4gICAgICAoemlwL3JlcGxhY2UgJCByZXBsYWNlbWVudClcbiAgICAgIChyZWR1Y2UgKGZuIFthZ2cgdl0gKHppcC9pbnNlcnQtcmlnaHQgYWdnIHYpKSAkIChyZXZlcnNlIHZhbHVlcykpKVxuICAgIGxvYykpXG5cbihkZWZuIG15LXJlcGxhY2VcbiAgXCJSZWN1cnNpdmVseSB0cmFuc2Zvcm1zIGBmb3JtYCBieSByZXBsYWNpbmcga2V5cyBpbiBgc21hcGAgd2l0aCB0aGVpclxuICB2YWx1ZXMsIHNwbGljZWQuIFRoZSB2YWx1ZXMgaW4gYHNtYXBgIG11c3QgYmUgc2VxdWVuY2VzLiBMaWtlIGNsb2p1cmUud2Fsay9wcmV3YWxrLXJlcGxhY2UgYnV0IHN1cHBvcnRzIGxpc3QgaW4gdmFsdWVzLlxuXG5+fn5rbGlwc2VcbihteS1yZXBsYWNlICd7Z28gKGdvIGdhZGpldHQpfSAnKGdvICg8ISAodGltZW91dCAxMDApKSAoZ28gKDwhIHRpbWVvdXQgMCkpKSlcbn5+flxuICBcIlxuICBbc21hcCBmb3JtXVxuICB7OnByZSBbKGV2ZXJ5PyBzZXE/ICh2YWxzIHNtYXApKV19XG4gIChsb29wIFtsb2MgKGVkbi16aXAgZm9ybSldXG4gICAgKGlmICh6aXAvZW5kPyBsb2MpXG4gICAgICAoemlwL3Jvb3QgbG9jKVxuICAgICAgKHJlY3VyICh6aXAvbmV4dCAobG9jLW15LXJlcGxhY2Ugc21hcCBsb2MpKSkpKSlcblxuKGRlZm4tIGNvbW1lbnQ/IFtzXVxuICAocmUtbWF0Y2hlcyAjXCJcXHMqOy4qXCIgcykpXG5cbihkZWZuIHJlbW92ZS1lbmRpbmctY29tbWVudHNcbiAgXCJSZW1vdmVzIGNvbW1lbnQgbGluZXMgZnJvbSB0aGUgZW5kLlxuXG5+fn5rbGlwc2VcbiAgOyB3ZSB1c2UgKGNoYXIgMTApIGZvciBlbmQtb2YtbGluZSBkdWUgdG8gdGVjaG5pY2FsIGlzc3VlcyB3aXRoIHN0cmluZyBtYW5pcHVsYXRpb24gd2l0aCBgY29kb3hgXG4gIChsZXQgW2xpbmVzIChjbG9qdXJlLnN0cmluZy9qb2luIChjaGFyIDEwKSBbXFxcImFhXFxcIiwgXFxcIiAgXFxcIiwgXFxcImJiXFxcIiBcXFwiOyB0aGlzIGNvbW1lbnQgc2hvdWxkIG5vdCBhcHBlYXJcXFwiXSldXG4gIChyZW1vdmUtZW5kaW5nLWNvbW1lbnRzIGxpbmVzKSlcbn5+flxuICBcIlxuICBbc11cbiAgKC0+PiBzXG4gICAgc3BsaXQtbGluZXNcbiAgICByZXZlcnNlXG4gICAgKGRyb3Atd2hpbGUgY29tbWVudD8pXG4gICAgcmV2ZXJzZVxuICAgIChqb2luIFwiXFxuXCIpKSlcbihkZWZuIGZpeC1ibGFuay1saW5lc1xuICBcIlJlbW92ZXMgYmxhbmsgbGluZXMgZnJvbSB0aGUgYmVnaW5pbmcgYW5kIGZyb20gdGhlIGVuZCAobm90IGZyb20gdGhlIG1pZGRsZSlcblxufn5+a2xpcHNlXG4gIDsgd2UgdXNlIChjaGFyIDEwKSBmb3IgZW5kLW9mLWxpbmUgZHVlIHRvIHRlY2huaWNhbCBpc3N1ZXMgd2l0aCBzdHJpbmcgbWFuaXB1bGF0aW9uIHdpdGggYGNvZG94YFxuICAobGV0IFtsaW5lcyAoY2xvanVyZS5zdHJpbmcvam9pbiAoY2hhciAxMCkgW1xcXCIgIFxcXCIsIFxcXCJhYVxcXCIsIFxcXCIgIFxcXCIsIFxcXCJiYlxcXCIsIFxcXCIgXFx0ICBcXFwiXSldXG4gIChmaXgtYmxhbmstbGluZXMgbGluZXMpKVxufn5+XG4gIFwiXG4gIFtzXVxuICAoLT4+IHNcbiAgICBzcGxpdC1saW5lc1xuICAgIChkcm9wLXdoaWxlIGJsYW5rPylcbiAgICByZXZlcnNlXG4gICAgKGRyb3Atd2hpbGUgYmxhbms/KVxuICAgIHJldmVyc2VcbiAgICAoam9pbiBcIlxcblwiKSkpXG5cbihkZWZuIHJlbW92ZS1ibGFuay1saW5lc1xuXCJSZW1vdmVzIGJsYW5rIGxpbmVzLlxufn5+a2xpcHNlXG4gIDsgd2UgdXNlIChjaGFyIDEwKSBmb3IgZW5kLW9mLWxpbmUgZHVlIHRvIHRlY2huaWNhbCBpc3N1ZXMgd2l0aCBzdHJpbmcgbWFuaXB1bGF0aW9uIHdpdGggYGNvZG94YFxuICAobGV0IFtsaW5lcyAoY2xvanVyZS5zdHJpbmcvam9pbiAoY2hhciAxMCkgW1xcXCIgIFxcXCIsIFxcXCJhYVxcXCIsIFxcXCIgIFxcXCIsIFxcXCJiYlxcXCIsIFxcXCIgXFx0ICBcXFwiXSldXG4gIChyZW1vdmUtYmxhbmstbGluZXMgbGluZXMpKVxufn5+XG4gIFwiXG4gIFtzXVxuICAoLT4+IHNcbiAgICBzcGxpdC1saW5lc1xuICAgIChyZW1vdmUgYmxhbms/KVxuICAgIChqb2luIFwiXFxuXCIpKSlcblxuIz8oOmNsanNcbiAgICAoZGVmbiBjb21wYWN0XG5cIlxuKGNsb2p1cmVzY3JpcHQgb25seSlcblxuQ29tcGFjdHMgYW4gZXhwcmVzc2lvbiBieSB0YWtpbmcgb25seSB0aGUgZmlyc3QgYG1heC1lbGVtZW50cy1pbi1jb2xsYCBmcm9tIGNvbGxlY3Rpb25zIGFuZCBmaXJzdCBgbWF4LWNoYXJzLWluLXN0cmAgZnJvbSBzdHJpbmdzLiBGdW5jdGlvbnMgYXJlIGRpc3BsYXllZCBhcyBcXFwibGFtYmRhKClcXFwiLlxuXG5JdCB3b3JrcyByZWN1cnNpdmVseS4gSXQgaXMgdXNlZnVsIGZvciBsb2dnaW5nIGFuZCByZXBvcnRpbmcuXG5cbkRlZmF1bHQgc2V0dGluZ3M6XG5cbi0gYG1heC1lbGVtZW50cy1pbi1jb2xsYCAxMFxuLSBgbWF4LWNoYXJzLWluLXN0cmAgMjBcblxufn5+a2xpcHNlXG4oY29tcGFjdCB7OmluZmluaXRlLWxpc3QgKHJhbmdlKVxuICAgICAgICAgIDpsb25nLXN0ciBcXFwiYSB2ZXJ5IHZlcnkgdmVyeSB2ZXJ5IGxvbmcgc3RyaW5nIC0gdG9vIGxvbmcgdG8gYmUgdHJ1ZVxcXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsb25nLW1hcCAoemlwbWFwIChyYW5nZSAxMDApIChyYW5nZSAxMDApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZnVuY3Rpb24gIygrIDEgMil9KVxufn5+XG4gICAgICAgICAgICAgICAgICBcIlxuICAgICAgW3ggJiB7OmtleXMgW21heC1lbGVtZW50cy1pbi1jb2xsIG1heC1jaGFycy1pbi1zdHJdIDpvciB7bWF4LWVsZW1lbnRzLWluLWNvbGwgMTAgbWF4LWNoYXJzLWluLXN0ciAyMH0gOmFzIGFyZ3N9XVxuICAgICAgKGNvbmRcbiAgICAgICAgKD0geCB0cnVlKSB4XG4gICAgICAgICg9IHggZmFsc2UpIHhcbiAgICAgICAgKG5pbD8geCkgeFxuICAgICAgICAoa2V5d29yZD8geCkgeFxuICAgICAgICAobnVtYmVyPyB4KSB4XG4gICAgICAgIChzdHJpbmc/IHgpIChzdWJzIHggMCBtYXgtY2hhcnMtaW4tc3RyKVxuICAgICAgICAobWFwPyB4KSAodGFrZS1mcm9tLW1hcCBtYXgtZWxlbWVudHMtaW4tY29sbCAobWFwLW9iamVjdCAjKGNvbXBhY3QgJSBhcmdzKSB4KSlcbiAgICAgICAgKHNlcWFibGU/IHgpICh0YWtlIG1heC1lbGVtZW50cy1pbi1jb2xsIChtYXAgIyhjb21wYWN0ICUgYXJncykgeCkpXG4gICAgICAgIChhcnJheT8geCkgKHN0ciBcIioqKltcIiAodHlwZSB4KSBcIl0qKipcIilcbiAgICAgICAgKD0ganMvRnVuY3Rpb24gKHR5cGUgeCkpIFwibGFtYmRhKClcIlxuICAgICAgICAoaW5zdGFuY2U/IGpzL09iamVjdCB4KSAoc3RyIFwiKioqW1wiIChzdWJzIChzdHIgKHR5cGUgeCkpIDAgMTUpIFwiXSoqKlwiKVxuICAgICAgICA6ZWxzZSAoc3RyIFwiKioqW1wiICh0eXBlIHgpIFwiXSoqKlwiKSkpXG4gICAgKVxuXG4oZGVmbiBtYXAtbmVzdGVkLXZhbHNcbiAgXCJNYXAgdGhlIHZhbHVlcyBvZiBhIG5lc3RlZCBtYXAuXG5+fn5rbGlwc2VcbiAgKG1hcC1uZXN0ZWQtdmFscyBmaXJzdCB7OmEgWzEgMiAzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6YiB7OmMgWzQgNSA2XX19KVxufn5+XG4gIFwiXG4gIFtmIG1dXG4gICgtPj4gbVxuICAgICAgIGZsYXR0ZW4ta2V5c1xuICAgICAgIChtYXAtb2JqZWN0IGYpXG4gICAgICAgdW5mbGF0dGVuLWtleXMpKVxuXG4oZGVmbiBqb2luLXRoZW1cbiAgXCJKb2luIGEgc2VxdWVuY2Ugb2YgY29sbGVjdGlvbnMgYGNvbGxzYCBhY2NvcmRpbmcgdG8gZnVuY3Rpb24gZXF1YWxpdHkuXG4gICBgZm5zYCAtIGEgc2VxdWVuY2Ugb2YgZnVuY3Rpb25zXG4gICBgY29sbHNgIC0gYSBzZXF1ZW5jZSBvZiBjb2xsZWN0aW9uc1xufn5+a2xpcHNlXG4obGV0IFthIFt7OmlkIDEgOnByaWNlIDE5fSB7OmlkIDIgOnByaWNlIDN9XVxuICAgICAgICBiIFt7Omd1aWQgMSA6cXVhbnRpdHkgMTN9XV1cbiAgICAgKGpvaW4tdGhlbSBbOmlkIDpndWlkXSBbYSBiXSkpXG5+fn5cblwiXG4gIFtmbnMgY29sbHNdXG4gICgtPj4gKG1hcCBtYXBpZnkgZm5zIGNvbGxzKVxuICAgICAgIChhcHBseSBkZWVwLW1lcmdlKVxuICAgICAgIHZhbHMpKVxuXG4oY29tbWVudCAoc3VicyBcImFcIiAxKSlcblxuKGRlZm4gc3Vic3RyXG4gIFwiTGlrZSBjbG9qdXJlLmNvcmUvc3VicyBidXQgcHJldmVudHMgc29tZSBleGNlcHRpb25zIHdoZW4gdGhlIGBzdGFydGAgb3IgYGVuZGAgYXJlIG91dCBvZiBib3VuZC5cbn5+fmtsaXBzZVxuICAoc3VicyBcXFwiXFxcIiAtMilcbn5+flxuXG4gIFwiXG4gIChbcyBzdGFydF0gKHN1YnMgcyAobWF4IDAgKG1pbiBzdGFydCAoY291bnQgcykpKSkpXG4gIChbcyBzdGFydCBlbmRdXG4gICAobGV0IFtzdGFydCAobWF4IDAgKG1pbiBzdGFydCAoY291bnQgcykpKVxuICAgICAgICAgZW5kIChtaW4gKGNvdW50IHMpIGVuZCldXG4gICAgIChzdWJzIHMgc3RhcnQgZW5kKSkpKVxuXG5cbihkZWZuIHNlbGVjdC1rZXlzLWluLW9yZGVyXG4gIFwiVGhhbmtzIFtKYXkgRmllbGRzXShodHRwOi8vYmxvZy5qYXlmaWVsZHMuY29tLzIwMTEvMDEvY2xvanVyZS1zZWxlY3Qta2V5cy1zZWxlY3QtdmFsdWVzLWFuZC5odG1sKVwiXG4gIFttIGtleXNlcV1cbiAgKG1hcCBtIGtleXNlcSkpXG5cbihkZWZuIHNlbGVjdC12YWxzIFttYXAga2V5c2VxXVxuICAodmFscyAoc2VsZWN0LWtleXMgbWFwIGtleXNlcSkpKVxuXG4oZGVmbiBzZWxlY3QtdmFscy1pbi1vcmRlclxuICBcIlRoYW5rcyBbSmF5IEZpZWxkc10oaHR0cDovL2Jsb2cuamF5ZmllbGRzLmNvbS8yMDExLzAxL2Nsb2p1cmUtc2VsZWN0LWtleXMtc2VsZWN0LXZhbHVlcy1hbmQuaHRtbClcIlxuICBbbWFwIGtzXVxuICAocmVkdWNlICMoY29uaiAlMSAobWFwICUyKSkgW10ga3MpKVxuXG5cbihkZWZuIGFwcGx5LXdpdGgtbWFwXG4gIFwiQ2FsbCBhIGZ1bmN0aW9uIC0gdGhhdCBleHBlY3RzIHNwbGljZWQga2V5IHZhbHVlcyAtIHdpdGggYSBtYXAgKGlnbm9yaW5nIGtleS92YWx1ZXMgd2hlcmUgdmFsdWUgaXMgbmlsKS5cbiAgIFVzZWZ1bCB3aGVuIHlvdSBuZWVkIHRvIHJlbW92ZSBzb21lIGtleXMgYWNjb3JkaW5nIHRvIHNvbWUgY29uZGl0aW9ucy5cIlxuICBbZiBhcmdzXVxuICAoYXBwbHkgZiAoLT4+IGFyZ3NcbiAgICAgICAgICAgICAgICBjb21wYWN0aXplLW1hcFxuICAgICAgICAgICAgICAgIChpbnRvIFtdKVxuICAgICAgICAgICAgICAgIChtYXBjYXQgaWRlbnRpdHkpKSkpXG5cbihkZWZuIG9yZGVyLWJ5XG4gIFwiXG4gIFJlY2VpdmVzIFtrZXlmbjEgZGlyZWN0aW9uMSBrZXlmbjIgZGlyZWN0aW9uMSAuLi5dIGNvbGxcbiAgUmV0dXJucyBhIHNvcnRlZCBzZXF1ZW5jZSBvZiB0aGUgaXRlbXMgaW4gY29sbCwgd2hlcmUgdGhlIHNvcnRcbiAgb3JkZXIgaXMgZGV0ZXJtaW5lZCBieSBjb21wYXJpbmcgKGtleWZuMSBpdGVtKSB3aXRoIGRpcmVjdGlvblxuICBkaXJlY3Rpb24xLCB0aGVuIGJ5IGNvbXBhcmluZyAoa2V5Zm4yIGl0ZW0pIHdpdGggZGlyZWN0aW9uXG4gIGRpcmVjdGlvbjIgLi4uXG5cbiAgfn5+a2xpcHNlXG4gIChvcmRlci1ieSBbZmlyc3QgOmRlc2Mgc2Vjb25kIDphc2NdIFtbOSA3XSBbOSA0XSBbMiA1XSBbOSAyXV0pXG4gIH5+flxuICBcIlxuICBba2V5Zm4tZGlyZWN0aW9uLXBhaXJzIGNvbGxdXG4gIHs6cHJlIFsoKGNvbXAgZXZlbj8gY291bnQpIGtleWZuLWRpcmVjdGlvbi1wYWlycylcbiAgICAgICAgICgtPj4ga2V5Zm4tZGlyZWN0aW9uLXBhaXJzXG4gICAgICAgICAgICAgIHJlc3RcbiAgICAgICAgICAgICAgKHRha2UtbnRoIDIpXG4gICAgICAgICAgICAgIChldmVyeT8gI3s6YXNjIDpkZXNjfSkpXX1cbiAgKGxldCBba2V5Zm5zICh0YWtlLW50aCAyIGtleWZuLWRpcmVjdGlvbi1wYWlycylcbiAgICAgICAgZGlyZWN0aW9ucyAodGFrZS1udGggMiAocmVzdCBrZXlmbi1kaXJlY3Rpb24tcGFpcnMpKV1cbiAgICAoc29ydC1ieVxuICAgICAgKGFwcGx5IGp1eHQga2V5Zm5zKVxuICAgICAgKGZuIFt4IHldXG4gICAgICAgICgtPj4gKGludGVybGVhdmUgZGlyZWN0aW9ucyB4IHkpXG4gICAgICAgICAgICAgKHBhcnRpdGlvbiAzKVxuICAgICAgICAgICAgIChyZWR1Y2UgKGZuIFtbeCcgeSddIFtvcmRlciB4aSB5aV1dXG4gICAgICAgICAgICAgICAgICAgICAgIChjYXNlIG9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmFzYyBbKGNvbmogeCcgeGkpIChjb25qIHknIHlpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICA6ZGVzYyBbKGNvbmogeCcgeWkpIChjb25qIHknIHhpKV0pKSBbW10gW11dKVxuICAgICAgICAgICAgIChhcHBseSBjb21wYXJlKSkpXG4gICAgICBjb2xsKSkpXG4iXX0=