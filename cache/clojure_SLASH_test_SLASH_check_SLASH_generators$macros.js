goog.provide('clojure.test.check.generators$macros');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
clojure.test.check.generators$macros.Generator = (function (gen,__meta,__extmap,__hash){
this.gen = gen;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(clojure.test.check.generators$macros.Generator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7722,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7746 = k7722;
var G__7746__$1 = (((G__7746 instanceof cljs.core.Keyword))?G__7746.fqn:null);
switch (G__7746__$1) {
case "gen":
return self__.gen;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7722,else__4383__auto__);

}
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7775){
var vec__7782 = p__7775;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7782,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7782,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#clojure.test.check.generators$macros.Generator{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen],null))], null),self__.__extmap));
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7721){
var self__ = this;
var G__7721__$1 = this;
return (new cljs.core.RecordIter((0),G__7721__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen","gen",142575302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new clojure.test.check.generators$macros.Generator(self__.gen,self__.__meta,self__.__extmap,self__.__hash));
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (347047885 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7723,other7724){
var self__ = this;
var this7723__$1 = this;
return (((!((other7724 == null)))) && ((this7723__$1.constructor === other7724.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7723__$1.gen,other7724.gen)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7723__$1.__extmap,other7724.__extmap)));
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gen","gen",142575302),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new clojure.test.check.generators$macros.Generator(self__.gen,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7721){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7820 = cljs.core.keyword_identical_QMARK_;
var expr__7821 = k__4388__auto__;
if(cljs.core.truth_((pred__7820.cljs$core$IFn$_invoke$arity$2 ? pred__7820.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gen","gen",142575302),expr__7821) : pred__7820.call(null,new cljs.core.Keyword(null,"gen","gen",142575302),expr__7821)))){
return (new clojure.test.check.generators$macros.Generator(G__7721,self__.__meta,self__.__extmap,null));
} else {
return (new clojure.test.check.generators$macros.Generator(self__.gen,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7721),null));
}
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"gen","gen",142575302),self__.gen,null))], null),self__.__extmap));
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7721){
var self__ = this;
var this__4379__auto____$1 = this;
return (new clojure.test.check.generators$macros.Generator(self__.gen,G__7721,self__.__extmap,self__.__hash));
}));

(clojure.test.check.generators$macros.Generator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(clojure.test.check.generators$macros.Generator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"gen","gen",1783106829,null)], null);
}));

(clojure.test.check.generators$macros.Generator.cljs$lang$type = true);

(clojure.test.check.generators$macros.Generator.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"clojure.test.check.generators$macros/Generator",null,(1),null));
}));

(clojure.test.check.generators$macros.Generator.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"clojure.test.check.generators$macros/Generator");
}));

/**
 * Positional factory function for clojure.test.check.generators$macros/Generator.
 */
clojure.test.check.generators$macros.__GT_Generator = (function clojure$test$check$generators$macros$__GT_Generator(gen){
return (new clojure.test.check.generators$macros.Generator(gen,null,null,null));
});

/**
 * Factory function for clojure.test.check.generators$macros/Generator, taking a map of keywords to field values.
 */
clojure.test.check.generators$macros.map__GT_Generator = (function clojure$test$check$generators$macros$map__GT_Generator(G__7725){
var extmap__4419__auto__ = (function (){var G__7823 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__7725,new cljs.core.Keyword(null,"gen","gen",142575302));
if(cljs.core.record_QMARK_(G__7725)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7823);
} else {
return G__7823;
}
})();
return (new clojure.test.check.generators$macros.Generator(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(G__7725),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

/**
 * Test if `x` is a generator. Generators should be treated as opaque values.
 */
clojure.test.check.generators$macros.generator_QMARK_ = (function clojure$test$check$generators$macros$generator_QMARK_(x){
return (x instanceof clojure.test.check.generators$macros.Generator);
});
clojure.test.check.generators$macros.make_gen = (function clojure$test$check$generators$macros$make_gen(generator_fn){
return (new clojure.test.check.generators$macros.Generator(generator_fn,null,null,null));
});
/**
 * Internal function.
 */
clojure.test.check.generators$macros.call_gen = (function clojure$test$check$generators$macros$call_gen(p__7824,rnd,size){
var map__7825 = p__7824;
var map__7825__$1 = (((((!((map__7825 == null))))?(((((map__7825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7825.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7825):map__7825);
var generator_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7825__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return (generator_fn.cljs$core$IFn$_invoke$arity$2 ? generator_fn.cljs$core$IFn$_invoke$arity$2(rnd,size) : generator_fn.call(null,rnd,size));
});
/**
 * Internal function.
 */
clojure.test.check.generators$macros.gen_pure = (function clojure$test$check$generators$macros$gen_pure(value){
return clojure.test.check.generators$macros.make_gen((function (rnd,size){
return value;
}));
});
/**
 * Internal function.
 */
clojure.test.check.generators$macros.gen_fmap = (function clojure$test$check$generators$macros$gen_fmap(k,p__7827){
var map__7828 = p__7827;
var map__7828__$1 = (((((!((map__7828 == null))))?(((((map__7828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7828):map__7828);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7828__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators$macros.make_gen((function (rnd,size){
var G__7830 = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(rnd,size) : h.call(null,rnd,size));
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__7830) : k.call(null,G__7830));
}));
});
/**
 * Internal function.
 */
clojure.test.check.generators$macros.gen_bind = (function clojure$test$check$generators$macros$gen_bind(p__7831,k){
var map__7832 = p__7831;
var map__7832__$1 = (((((!((map__7832 == null))))?(((((map__7832.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7832.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7832):map__7832);
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7832__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators$macros.make_gen((function (rnd,size){
var vec__7834 = clojure.test.check.random.split(rnd);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7834,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7834,(1),null);
var inner = (h.cljs$core$IFn$_invoke$arity$2 ? h.cljs$core$IFn$_invoke$arity$2(r1,size) : h.call(null,r1,size));
var map__7837 = (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(inner) : k.call(null,inner));
var map__7837__$1 = (((((!((map__7837 == null))))?(((((map__7837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7837):map__7837);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7837__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return (result.cljs$core$IFn$_invoke$arity$2 ? result.cljs$core$IFn$_invoke$arity$2(r2,size) : result.call(null,r2,size));
}));
});
/**
 * Internal function.
 * 
 *   Given a random number generator, returns an infinite lazy sequence
 *   of random number generators.
 */
clojure.test.check.generators$macros.lazy_random_states = (function clojure$test$check$generators$macros$lazy_random_states(rr){
return (new cljs.core.LazySeq(null,(function (){
var vec__7839 = clojure.test.check.random.split(rr);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7839,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7839,(1),null);
return cljs.core.cons(r1,(clojure.test.check.generators$macros.lazy_random_states.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators$macros.lazy_random_states.cljs$core$IFn$_invoke$arity$1(r2) : clojure.test.check.generators$macros.lazy_random_states.call(null,r2)));
}),null,null));
});
/**
 * Takes a collection of generators and returns a generator of vectors.
 */
clojure.test.check.generators$macros.gen_tuple = (function clojure$test$check$generators$macros$gen_tuple(gens){
return clojure.test.check.generators$macros.make_gen((function (rnd,size){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__7842_SHARP_,p2__7843_SHARP_){
return clojure.test.check.generators$macros.call_gen(p1__7842_SHARP_,p2__7843_SHARP_,size);
}),gens,clojure.test.check.random.split_n(rnd,cljs.core.count(gens)));
}));
});
/**
 * Returns a generator like `gen` but with values transformed by `f`.
 *   E.g.:
 * 
 *    (gen/sample (gen/fmap str gen/nat))
 *    => ("0" "1" "0" "1" "4" "3" "6" "6" "4" "2")
 * 
 *   Also see gen/let for a macro with similar functionality.
 */
clojure.test.check.generators$macros.fmap = (function clojure$test$check$generators$macros$fmap(f,gen){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to fmap must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.gen_fmap((function (p1__7844_SHARP_){
return clojure.test.check.rose_tree.fmap(f,p1__7844_SHARP_);
}),gen);
});
/**
 * Creates a generator that always returns `value`,
 *   and never shrinks. You can think of this as
 *   the `constantly` of generators. E.g.:
 * 
 *    (gen/sample (gen/return 42))
 *    => (42 42 42 42 42 42 42 42 42 42)
 */
clojure.test.check.generators$macros.return$ = (function clojure$test$check$generators$macros$return(value){
return clojure.test.check.generators$macros.gen_pure(clojure.test.check.rose_tree.pure(value));
});
clojure.test.check.generators$macros.bind_helper = (function clojure$test$check$generators$macros$bind_helper(f){
return (function (rose){
return clojure.test.check.generators$macros.gen_fmap(clojure.test.check.rose_tree.join,clojure.test.check.generators$macros.make_gen((function (rnd,size){
return clojure.test.check.rose_tree.fmap((function (p1__7845_SHARP_){
return clojure.test.check.generators$macros.call_gen((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__7845_SHARP_) : f.call(null,p1__7845_SHARP_)),rnd,size);
}),rose);
})));
});
});
/**
 * Creates a new generator that passes the result of `gen` into function
 *   `f`. `f` should return a new generator. This allows you to create new
 *   generators that depend on the value of other generators. For example,
 *   to create a generator of permutations which first generates a
 *   `num-elements` and then generates a shuffling of `(range num-elements)`:
 * 
 *    (gen/bind gen/nat
 *              ;; this function takes a value generated by
 *              ;; the generator above and returns a new generator
 *              ;; which shuffles the collection returned by `range`
 *              (fn [num-elements]
 *                (gen/shuffle (range num-elements))))
 * 
 *   Also see gen/let for a macro with similar functionality.
 */
clojure.test.check.generators$macros.bind = (function clojure$test$check$generators$macros$bind(generator,f){
if(clojure.test.check.generators$macros.generator_QMARK_(generator)){
} else {
throw (new Error(["Assert failed: ","First arg to bind must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators$macros.gen_bind(generator,clojure.test.check.generators$macros.bind_helper(f));
});
/**
 * Internal function.
 */
clojure.test.check.generators$macros.make_size_range_seq = (function clojure$test$check$generators$macros$make_size_range_seq(max_size){
return cljs.core.cycle(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),max_size));
});
/**
 * Returns an infinite sequence of realized values from `generator`.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 */
clojure.test.check.generators$macros.sample_seq = (function clojure$test$check$generators$macros$sample_seq(var_args){
var G__7849 = arguments.length;
switch (G__7849) {
case 1:
return clojure.test.check.generators$macros.sample_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.sample_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.sample_seq.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators$macros.sample_seq.cljs$core$IFn$_invoke$arity$2(generator,(200));
}));

(clojure.test.check.generators$macros.sample_seq.cljs$core$IFn$_invoke$arity$2 = (function (generator,max_size){
var r = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
var size_seq = clojure.test.check.generators$macros.make_size_range_seq(max_size);
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__7846_SHARP_,p2__7847_SHARP_){
return clojure.test.check.rose_tree.root(clojure.test.check.generators$macros.call_gen(generator,p1__7846_SHARP_,p2__7847_SHARP_));
}),clojure.test.check.generators$macros.lazy_random_states(r),size_seq);
}));

(clojure.test.check.generators$macros.sample_seq.cljs$lang$maxFixedArity = 2);

/**
 * Return a sequence of `num-samples` (default 10)
 *   realized values from `generator`.
 * 
 *   The sequence starts with small values from the generator, which
 *   probably do not reflect the variety of values that will be generated
 *   during a longer test run.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 */
clojure.test.check.generators$macros.sample = (function clojure$test$check$generators$macros$sample(var_args){
var G__7851 = arguments.length;
switch (G__7851) {
case 1:
return clojure.test.check.generators$macros.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.sample.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators$macros.sample.cljs$core$IFn$_invoke$arity$2(generator,(10));
}));

(clojure.test.check.generators$macros.sample.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_samples){
if(clojure.test.check.generators$macros.generator_QMARK_(generator)){
} else {
throw (new Error(["Assert failed: ","First arg to sample must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.take.cljs$core$IFn$_invoke$arity$2(num_samples,clojure.test.check.generators$macros.sample_seq.cljs$core$IFn$_invoke$arity$1(generator));
}));

(clojure.test.check.generators$macros.sample.cljs$lang$maxFixedArity = 2);

/**
 * Returns a single sample value from the generator.
 * 
 *   Note that this function is a dev helper and is not meant to be used
 *   to build other generators.
 * 
 *   Optional args:
 * 
 *   - size: the abstract size parameter, defaults to 30
 *   - seed: the seed for the random number generator, an integer
 */
clojure.test.check.generators$macros.generate = (function clojure$test$check$generators$macros$generate(var_args){
var G__7853 = arguments.length;
switch (G__7853) {
case 1:
return clojure.test.check.generators$macros.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators$macros.generate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.generate.cljs$core$IFn$_invoke$arity$1 = (function (generator){
return clojure.test.check.generators$macros.generate.cljs$core$IFn$_invoke$arity$2(generator,(30));
}));

(clojure.test.check.generators$macros.generate.cljs$core$IFn$_invoke$arity$2 = (function (generator,size){
var rng = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$0();
return clojure.test.check.rose_tree.root(clojure.test.check.generators$macros.call_gen(generator,rng,size));
}));

(clojure.test.check.generators$macros.generate.cljs$core$IFn$_invoke$arity$3 = (function (generator,size,seed){
var rng = clojure.test.check.random.make_random.cljs$core$IFn$_invoke$arity$1(seed);
return clojure.test.check.rose_tree.root(clojure.test.check.generators$macros.call_gen(generator,rng,size));
}));

(clojure.test.check.generators$macros.generate.cljs$lang$maxFixedArity = 3);

clojure.test.check.generators$macros.halfs = (function clojure$test$check$generators$macros$halfs(n){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7854_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),p1__7854_SHARP_);
}),cljs.core.iterate((function (p1__7855_SHARP_){
return cljs.core.quot(p1__7855_SHARP_,(2));
}),n));
});
clojure.test.check.generators$macros.shrink_int = (function clojure$test$check$generators$macros$shrink_int(integer){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7856_SHARP_){
return (integer - p1__7856_SHARP_);
}),clojure.test.check.generators$macros.halfs(integer));
});
clojure.test.check.generators$macros.int_rose_tree = (function clojure$test$check$generators$macros$int_rose_tree(value){
return clojure.test.check.rose_tree.make_rose(value,cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.int_rose_tree,clojure.test.check.generators$macros.shrink_int(value)));
});
clojure.test.check.generators$macros.calc_long = (function clojure$test$check$generators$macros$calc_long(factor,lower,upper){
return cljs.core.long$(Math.floor((lower + ((factor * (1.0 + upper)) - (factor * lower)))));
});
clojure.test.check.generators$macros.rand_range = (function clojure$test$check$generators$macros$rand_range(rnd,lower,upper){
if((lower <= upper)){
} else {
throw (new Error("Assert failed: (<= lower upper)"));
}

return clojure.test.check.generators$macros.calc_long(clojure.test.check.random.rand_double(rnd),lower,upper);
});
/**
 * Creates a generator that depends on the size parameter.
 *   `sized-gen` is a function that takes an integer and returns
 *   a generator.
 * 
 *   Examples:
 * 
 *    ;; generates vectors of booleans where the length always exactly
 *    ;; matches the `size` parameter
 *    (gen/sample (gen/sized (fn [size] (gen/vector gen/boolean size))))
 *    => ([]
 *        [false]
 *        [true true]
 *        [false true false]
 *        [false true true true]
 *        [false false true true false]
 *        [false true false true true false]
 *        [true false true true true false false]
 *        [true true false false false true false false]
 *        [false false false true true false true false true])
 */
clojure.test.check.generators$macros.sized = (function clojure$test$check$generators$macros$sized(sized_gen){
return clojure.test.check.generators$macros.make_gen((function (rnd,size){
var sized_gen__$1 = (sized_gen.cljs$core$IFn$_invoke$arity$1 ? sized_gen.cljs$core$IFn$_invoke$arity$1(size) : sized_gen.call(null,size));
return clojure.test.check.generators$macros.call_gen(sized_gen__$1,rnd,size);
}));
});
/**
 * Creates a new generator with `size` always bound to `n`.
 * 
 *    (gen/sample (gen/set (gen/resize 200 gen/double)))
 *    => (#{}
 *        #{-4.994772362980037E147}
 *        #{-4.234418056487335E-146}
 *        #{}
 *        #{}
 *        #{}
 *        #{NaN}
 *        #{8.142414100982609E-63}
 *        #{-3.58429955903876E-159 2.8563794617604296E-154
 *          4.1021360195776005E-100 1.9084564045332549E-38}
 *        #{-2.1582818131881376E83 -5.8460065493236117E48 9.729260993803226E166})
 */
clojure.test.check.generators$macros.resize = (function clojure$test$check$generators$macros$resize(n,generator){
if(clojure.test.check.generators$macros.generator_QMARK_(generator)){
} else {
throw (new Error(["Assert failed: ","Second arg to resize must be a generator","\n","(generator? generator)"].join('')));
}

var map__7857 = generator;
var map__7857__$1 = (((((!((map__7857 == null))))?(((((map__7857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7857):map__7857);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7857__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
return clojure.test.check.generators$macros.make_gen((function (rnd,_size){
return (gen.cljs$core$IFn$_invoke$arity$2 ? gen.cljs$core$IFn$_invoke$arity$2(rnd,n) : gen.call(null,rnd,n));
}));
});
/**
 * Creates a new generator that modifies the size parameter by the
 *   given function. Intended to support generators with sizes that need
 *   to grow at different rates compared to the normal linear scaling.
 * 
 *    (gen/sample (gen/tuple (gen/scale #(/ % 10) gen/nat)
 *                           gen/nat
 *                           (gen/scale #(* % 10) gen/nat)))
 *    => ([0 0 0]  [0 1 2]  [0 2 13] [0 1 6]  [0 1 23]
 *        [0 2 42] [0 1 26] [0 1 12] [0 1 12] [0 0 3])
 */
clojure.test.check.generators$macros.scale = (function clojure$test$check$generators$macros$scale(f,generator){
return clojure.test.check.generators$macros.sized((function (n){
return clojure.test.check.generators$macros.resize((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(n) : f.call(null,n)),generator);
}));
});
/**
 * Creates a generator that generates integer numbers uniformly in
 *   the range `lower` to `upper`, inclusive.
 * 
 *       (gen/sample (gen/choose 200 800))
 *       => (331 241 593 339 643 718 688 473 247 694)
 */
clojure.test.check.generators$macros.choose = (function clojure$test$check$generators$macros$choose(lower,upper){
return clojure.test.check.generators$macros.make_gen((function (rnd,_size){
var value = clojure.test.check.generators$macros.rand_range(rnd,lower,upper);
return clojure.test.check.rose_tree.filter((function (p1__7859_SHARP_){
return (((p1__7859_SHARP_ >= lower)) && ((p1__7859_SHARP_ <= upper)));
}),clojure.test.check.generators$macros.int_rose_tree(value));
}));
});
/**
 * Creates a generator that randomly chooses a value from the list of
 *   provided generators. Shrinks toward choosing an earlier generator,
 *   as well as shrinking the value generated by the chosen generator.
 * 
 *    (gen/sample (gen/one-of [gen/small-integer gen/boolean (gen/vector gen/small-integer)]))
 *    => (true [] -1 [0] [1 -4 -4 1] true 4 [] 6 true)
 */
clojure.test.check.generators$macros.one_of = (function clojure$test$check$generators$macros$one_of(generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators$macros.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Arg to one-of must be a collection of generators","\n","(every? generator? generators)"].join('')));
}

if(cljs.core.seq(generators)){
} else {
throw (new Error(["Assert failed: ","one-of cannot be called with an empty collection","\n","(seq generators)"].join('')));
}

return clojure.test.check.generators$macros.bind(clojure.test.check.generators$macros.choose((0),(cljs.core.count(generators) - (1))),(function (p1__7860_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(generators,p1__7860_SHARP_);
}));
});
/**
 * Returns an index into the `likelihoods` sequence.
 */
clojure.test.check.generators$macros.pick = (function clojure$test$check$generators$macros$pick(likelihoods,n){
return cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__7861_SHARP_){
return (p1__7861_SHARP_ <= n);
}),cljs.core.rest(cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),likelihoods))));
});
/**
 * Creates a generator that chooses a generator from `pairs` based on the
 *   provided likelihoods. The likelihood of a given generator being chosen is
 *   its likelihood divided by the sum of all likelihoods. Shrinks toward
 *   choosing an earlier generator, as well as shrinking the value generated
 *   by the chosen generator.
 * 
 *   Examples:
 * 
 *    (gen/sample (gen/frequency [[5 gen/small-integer] [3 (gen/vector gen/small-integer)] [2 gen/boolean]]))
 *    => (true [] -1 [0] [1 -4 -4 1] true 4 [] 6 true)
 */
clojure.test.check.generators$macros.frequency = (function clojure$test$check$generators$macros$frequency(pairs){
if(cljs.core.every_QMARK_((function (p__7862){
var vec__7863 = p__7862;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7863,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7863,(1),null);
return ((typeof x === 'number') && (clojure.test.check.generators$macros.generator_QMARK_(g)));
}),pairs)){
} else {
throw (new Error(["Assert failed: ","Arg to frequency must be a list of [num generator] pairs","\n","(every? (fn [[x g]] (and (number? x) (generator? g))) pairs)"].join('')));
}

var pairs__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.pos_QMARK_,cljs.core.first),pairs);
var total = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs__$1));
if(cljs.core.seq(pairs__$1)){
} else {
throw (new Error(["Assert failed: ","frequency must be called with at least one non-zero weight","\n","(seq pairs)"].join('')));
}

return clojure.test.check.generators$macros.make_gen((function (rnd,size){
return clojure.test.check.generators$macros.call_gen(clojure.test.check.generators$macros.gen_bind(clojure.test.check.generators$macros.choose((0),(total - (1))),(function (x){
var idx = clojure.test.check.generators$macros.pick(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs__$1),clojure.test.check.rose_tree.root(x));
return clojure.test.check.generators$macros.gen_fmap((function (rose){
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),(new cljs.core.LazySeq(null,(function (){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((function (){var iter__4529__auto__ = (function clojure$test$check$generators$macros$frequency_$_iter__7866(s__7867){
return (new cljs.core.LazySeq(null,(function (){
var s__7867__$1 = s__7867;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7867__$1);
if(temp__5735__auto__){
var s__7867__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7867__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__7867__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__7869 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__7868 = (0);
while(true){
if((i__7868 < size__4528__auto__)){
var idx__$1 = cljs.core._nth(c__4527__auto__,i__7868);
cljs.core.chunk_append(b__7869,clojure.test.check.generators$macros.call_gen(cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pairs__$1,idx__$1)),rnd,size));

var G__8038 = (i__7868 + (1));
i__7868 = G__8038;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7869),clojure$test$check$generators$macros$frequency_$_iter__7866(cljs.core.chunk_rest(s__7867__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7869),null);
}
} else {
var idx__$1 = cljs.core.first(s__7867__$2);
return cljs.core.cons(clojure.test.check.generators$macros.call_gen(cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pairs__$1,idx__$1)),rnd,size),clojure$test$check$generators$macros$frequency_$_iter__7866(cljs.core.rest(s__7867__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(idx));
})(),clojure.test.check.rose_tree.children(rose));
}),null,null)));
}),cljs.core.second(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(pairs__$1,idx)));
})),rnd,size);
}));
});
/**
 * Creates a generator that randomly chooses an element from `coll`.
 * 
 *    (gen/sample (gen/elements [:foo :bar :baz]))
 *    => (:foo :baz :baz :bar :foo :foo :bar :bar :foo :bar)
 */
clojure.test.check.generators$macros.elements = (function clojure$test$check$generators$macros$elements(coll){
if(cljs.core.seq(coll)){
} else {
throw (new Error(["Assert failed: ","elements cannot be called with an empty collection","\n","(seq coll)"].join('')));
}

var v = cljs.core.vec(coll);
return clojure.test.check.generators$macros.gen_fmap((function (p1__7870_SHARP_){
return clojure.test.check.rose_tree.fmap(v,p1__7870_SHARP_);
}),clojure.test.check.generators$macros.choose((0),(cljs.core.count(v) - (1))));
});
clojure.test.check.generators$macros.such_that_helper = (function clojure$test$check$generators$macros$such_that_helper(pred,gen,p__7871,rng,size){
var map__7872 = p__7871;
var map__7872__$1 = (((((!((map__7872 == null))))?(((((map__7872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7872):map__7872);
var ex_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7872__$1,new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510));
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7872__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792));
var tries_left = max_tries;
var rng__$1 = rng;
var size__$1 = size;
while(true){
if((tries_left === (0))){
throw (function (){var G__7879 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"gen","gen",142575302),gen,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries], null);
return (ex_fn.cljs$core$IFn$_invoke$arity$1 ? ex_fn.cljs$core$IFn$_invoke$arity$1(G__7879) : ex_fn.call(null,G__7879));
})();
} else {
var vec__7880 = clojure.test.check.random.split(rng__$1);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7880,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7880,(1),null);
var value = clojure.test.check.generators$macros.call_gen(gen,r1,size__$1);
if(cljs.core.truth_((function (){var G__7883 = clojure.test.check.rose_tree.root(value);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__7883) : pred.call(null,G__7883));
})())){
return clojure.test.check.rose_tree.filter(pred,value);
} else {
var G__8039 = (tries_left - (1));
var G__8040 = r2;
var G__8041 = (size__$1 + (1));
tries_left = G__8039;
rng__$1 = G__8040;
size__$1 = G__8041;
continue;
}
}
break;
}
});
clojure.test.check.generators$macros.default_such_that_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),(function (p__7884){
var map__7885 = p__7884;
var map__7885__$1 = (((((!((map__7885 == null))))?(((((map__7885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7885):map__7885);
var arg = map__7885__$1;
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7885__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792));
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Couldn't satisfy such-that predicate after ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_tries)," tries."].join(''),arg);
}),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(10)], null);
/**
 * Creates a generator that generates values from `gen` that satisfy predicate
 *   `pred`. Care is needed to ensure there is a high chance `gen` will satisfy
 *   `pred`. By default, `such-that` will try 10 times to generate a value that
 *   satisfies the predicate. If no value passes this predicate after this number
 *   of iterations, a runtime exception will be thrown. Note also that each
 *   time such-that retries, it will increase the size parameter.
 * 
 *   Examples:
 * 
 *    ;; generate non-empty vectors of integers
 *    ;; (note, gen/not-empty does exactly this)
 *    (gen/such-that not-empty (gen/vector gen/small-integer))
 * 
 *   You can customize `such-that` by passing an optional third argument, which can
 *   either be an integer representing the maximum number of times test.check
 *   will try to generate a value matching the predicate, or a map:
 * 
 *    :max-tries  positive integer, the maximum number of tries (default 10)
 *    :ex-fn      a function of one arg that will be called if test.check cannot
 *                generate a matching value; it will be passed a map with `:gen`,
 *                `:pred`, and `:max-tries` and should return an exception
 */
clojure.test.check.generators$macros.such_that = (function clojure$test$check$generators$macros$such_that(var_args){
var G__7888 = arguments.length;
switch (G__7888) {
case 2:
return clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2 = (function (pred,gen){
return clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$3(pred,gen,(10));
}));

(clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$3 = (function (pred,gen,max_tries_or_opts){
var opts = ((cljs.core.integer_QMARK_(max_tries_or_opts))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries_or_opts], null):((cljs.core.map_QMARK_(max_tries_or_opts))?max_tries_or_opts:(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Bad argument to such-that!",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-tries-or-opts","max-tries-or-opts",-609860571),max_tries_or_opts], null))})()
));
var opts__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators$macros.default_such_that_opts,opts], 0));
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to such-that must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.make_gen((function (rand_seed,size){
return clojure.test.check.generators$macros.such_that_helper(pred,gen,opts__$1,rand_seed,size);
}));
}));

(clojure.test.check.generators$macros.such_that.cljs$lang$maxFixedArity = 3);

/**
 * Modifies a generator so that it doesn't generate empty collections.
 * 
 *   Examples:
 * 
 *    ;; generate a vector of booleans, but never the empty vector
 *    (gen/sample (gen/not-empty (gen/vector gen/boolean)))
 *    => ([false]
 *        [false false]
 *        [false false]
 *        [false false false]
 *        [false false false false]
 *        [false true true]
 *        [true false false false]
 *        [true]
 *        [true true true false false true false]
 *        [false true true true false true true true false])
 */
clojure.test.check.generators$macros.not_empty = (function clojure$test$check$generators$macros$not_empty(gen){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","Arg to not-empty must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,gen);
});
/**
 * Creates a new generator that is just like `gen`, except does not shrink
 *   at all. This can be useful when shrinking is taking a long time or is not
 *   applicable to the domain.
 */
clojure.test.check.generators$macros.no_shrink = (function clojure$test$check$generators$macros$no_shrink(gen){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","Arg to no-shrink must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.gen_fmap((function (rose){
return clojure.test.check.rose_tree.make_rose(clojure.test.check.rose_tree.root(rose),cljs.core.PersistentVector.EMPTY);
}),gen);
});
/**
 * Creates a new generator like `gen`, but will consider nodes for shrinking
 *   even if their parent passes the test (up to one additional level).
 */
clojure.test.check.generators$macros.shrink_2 = (function clojure$test$check$generators$macros$shrink_2(gen){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","Arg to shrink-2 must be a generator","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.gen_fmap(clojure.test.check.rose_tree.collapse,gen);
});
/**
 * Generates one of `true` or `false`. Shrinks to `false`.
 */
clojure.test.check.generators$macros.boolean$ = clojure.test.check.generators$macros.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null));
/**
 * Creates a generator that returns a vector, whose elements are chosen
 *   from the generators in the same position. The individual elements shrink
 *   according to their generator, but the vector will never shrink in count.
 * 
 *   Examples:
 * 
 *    (def t (gen/tuple gen/small-integer gen/boolean))
 *    (sample t)
 *    ;; => ([1 true] [2 true] [2 false] [1 false] [0 true] [-2 false] [-6 false]
 *    ;; =>  [3 true] [-4 false] [9 true]))
 */
clojure.test.check.generators$macros.tuple = (function clojure$test$check$generators$macros$tuple(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8043 = arguments.length;
var i__4737__auto___8044 = (0);
while(true){
if((i__4737__auto___8044 < len__4736__auto___8043)){
args__4742__auto__.push((arguments[i__4737__auto___8044]));

var G__8045 = (i__4737__auto___8044 + (1));
i__4737__auto___8044 = G__8045;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (generators){
if(cljs.core.every_QMARK_(clojure.test.check.generators$macros.generator_QMARK_,generators)){
} else {
throw (new Error(["Assert failed: ","Args to tuple must be generators","\n","(every? generator? generators)"].join('')));
}

return clojure.test.check.generators$macros.gen_fmap((function (roses){
return clojure.test.check.rose_tree.zip(cljs.core.vector,roses);
}),clojure.test.check.generators$macros.gen_tuple(generators));
}));

(clojure.test.check.generators$macros.tuple.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.test.check.generators$macros.tuple.cljs$lang$applyTo = (function (seq7889){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7889));
}));

/**
 * Generates non-negative integers bounded by the generator's `size`
 *   parameter. Shrinks to zero.
 */
clojure.test.check.generators$macros.nat = clojure.test.check.generators$macros.sized((function (size){
return clojure.test.check.generators$macros.choose((0),size);
}));
/**
 * Generates a positive or negative integer bounded by the generator's
 *   `size` parameter. Shrinks to zero.
 */
clojure.test.check.generators$macros.small_integer = clojure.test.check.generators$macros.sized((function (size){
return clojure.test.check.generators$macros.choose((- size),size);
}));
/**
 * Deprecated - use gen/small-integer instead.
 * 
 *   Generates a positive or negative integer bounded by the generator's
 *   `size` parameter.
 */
clojure.test.check.generators$macros.int$ = clojure.test.check.generators$macros.small_integer;
/**
 * Deprecated - use gen/nat instead (see also gen/large-integer).
 * 
 *   (this generator, despite its name, can generate 0)
 * 
 *   Generates nonnegative integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators$macros.pos_int = clojure.test.check.generators$macros.nat;
/**
 * Deprecated - use (gen/fmap - gen/nat) instead (see also gen/large-integer).
 * 
 *   (this generator, despite its name, can generate 0)
 * 
 *   Generates nonpositive integers bounded by the generator's `size` parameter.
 */
clojure.test.check.generators$macros.neg_int = clojure.test.check.generators$macros.fmap((function (p1__7891_SHARP_){
return ((-1) * p1__7891_SHARP_);
}),clojure.test.check.generators$macros.nat);
/**
 * Deprecated - use (gen/fmap inc gen/nat) instead (see also gen/large-integer).
 * 
 *   Generates positive integers bounded by the generator's `size` + 1
 */
clojure.test.check.generators$macros.s_pos_int = clojure.test.check.generators$macros.fmap(cljs.core.inc,clojure.test.check.generators$macros.nat);
/**
 * Deprecated - use (gen/fmap (comp dec -) gen/nat) instead (see also gen/large-integer).
 * 
 *   Generates negative integers bounded by the generator's `size` + 1
 */
clojure.test.check.generators$macros.s_neg_int = clojure.test.check.generators$macros.fmap(cljs.core.dec,clojure.test.check.generators$macros.neg_int);
/**
 * Creates a generator of vectors whose elements are chosen from
 *   `generator`. The count of the vector will be bounded by the `size`
 *   generator parameter.
 */
clojure.test.check.generators$macros.vector = (function clojure$test$check$generators$macros$vector(var_args){
var G__7894 = arguments.length;
switch (G__7894) {
case 1:
return clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$1 = (function (generator){
if(clojure.test.check.generators$macros.generator_QMARK_(generator)){
} else {
throw (new Error(["Assert failed: ","Arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators$macros.gen_bind(clojure.test.check.generators$macros.sized((function (p1__7892_SHARP_){
return clojure.test.check.generators$macros.choose((0),p1__7892_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators$macros.gen_fmap((function (roses){
return clojure.test.check.rose_tree.shrink_vector(cljs.core.vector,roses);
}),clojure.test.check.generators$macros.gen_tuple(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)));
}));
}));

(clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (generator,num_elements){
if(clojure.test.check.generators$macros.generator_QMARK_(generator)){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.tuple,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(num_elements,generator));
}));

(clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$3 = (function (generator,min_elements,max_elements){
if(clojure.test.check.generators$macros.generator_QMARK_(generator)){
} else {
throw (new Error(["Assert failed: ","First arg to vector must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators$macros.gen_bind(clojure.test.check.generators$macros.choose(min_elements,max_elements),(function (num_elements_rose){
return clojure.test.check.generators$macros.gen_fmap((function (roses){
return clojure.test.check.rose_tree.filter((function (v){
return (((cljs.core.count(v) >= min_elements)) && ((cljs.core.count(v) <= max_elements)));
}),clojure.test.check.rose_tree.shrink_vector(cljs.core.vector,roses));
}),clojure.test.check.generators$macros.gen_tuple(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)));
}));
}));

(clojure.test.check.generators$macros.vector.cljs$lang$maxFixedArity = 3);

/**
 * Like `vector`, but generates lists.
 */
clojure.test.check.generators$macros.list = (function clojure$test$check$generators$macros$list(generator){
if(clojure.test.check.generators$macros.generator_QMARK_(generator)){
} else {
throw (new Error(["Assert failed: ","First arg to list must be a generator","\n","(generator? generator)"].join('')));
}

return clojure.test.check.generators$macros.gen_bind(clojure.test.check.generators$macros.sized((function (p1__7895_SHARP_){
return clojure.test.check.generators$macros.choose((0),p1__7895_SHARP_);
})),(function (num_elements_rose){
return clojure.test.check.generators$macros.gen_fmap((function (roses){
return clojure.test.check.rose_tree.shrink_vector(cljs.core.list,roses);
}),clojure.test.check.generators$macros.gen_tuple(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(clojure.test.check.rose_tree.root(num_elements_rose),generator)));
}));
});
clojure.test.check.generators$macros.swap = (function clojure$test$check$generators$macros$swap(coll,p__7896){
var vec__7897 = p__7896;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7897,(0),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7897,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coll,i2,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i1) : coll.call(null,i1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([i1,(coll.cljs$core$IFn$_invoke$arity$1 ? coll.cljs$core$IFn$_invoke$arity$1(i2) : coll.call(null,i2))], 0));
});
/**
 * Creates a generator that generates random permutations of
 *   `coll`. Shrinks toward the original collection: `coll`. `coll` will
 *   be coerced to a vector.
 */
clojure.test.check.generators$macros.shuffle = (function clojure$test$check$generators$macros$shuffle(coll){
var coll__$1 = ((cljs.core.vector_QMARK_(coll))?coll:cljs.core.vec(coll));
var index_gen = clojure.test.check.generators$macros.choose((0),(cljs.core.count(coll__$1) - (1)));
return clojure.test.check.generators$macros.fmap((function (p1__7900_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators$macros.swap,coll__$1,p1__7900_SHARP_);
}),clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$3(clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index_gen,index_gen], 0)),(0),((2) * cljs.core.count(coll__$1))));
});
/**
 * Like clojure.core/hash-map, except the values are generators.
 * Returns a generator that makes maps with the supplied keys and
 * values generated using the supplied generators.
 * 
 *     (gen/sample (gen/hash-map :a gen/boolean :b gen/nat))
 *     => ({:a false, :b 0}
 *         {:a true,  :b 1}
 *         {:a false, :b 2}
 *         {:a true,  :b 2}
 *         {:a false, :b 4}
 *         {:a false, :b 2}
 *         {:a true,  :b 3}
 *         {:a true,  :b 4}
 *         {:a false, :b 1}
 *         {:a false, :b 0})
 */
clojure.test.check.generators$macros.hash_map = (function clojure$test$check$generators$macros$hash_map(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8047 = arguments.length;
var i__4737__auto___8048 = (0);
while(true){
if((i__4737__auto___8048 < len__4736__auto___8047)){
args__4742__auto__.push((arguments[i__4737__auto___8048]));

var G__8049 = (i__4737__auto___8048 + (1));
i__4737__auto___8048 = G__8049;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return clojure.test.check.generators$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(clojure.test.check.generators$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var ks = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),kvs);
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.rest(kvs));
if(cljs.core.every_QMARK_(clojure.test.check.generators$macros.generator_QMARK_,vs)){
} else {
throw (new Error(["Assert failed: ","Value args to hash-map must be generators","\n","(every? generator? vs)"].join('')));
}

return clojure.test.check.generators$macros.fmap((function (p1__7901_SHARP_){
return cljs.core.zipmap(ks,p1__7901_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.tuple,vs));
}));

(clojure.test.check.generators$macros.hash_map.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(clojure.test.check.generators$macros.hash_map.cljs$lang$applyTo = (function (seq7902){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7902));
}));

clojure.test.check.generators$macros.transient_set_contains_QMARK_ = (function clojure$test$check$generators$macros$transient_set_contains_QMARK_(s,k){
return (!((cljs.core._lookup(s,k) == null)));
});
/**
 * Returns a rose tree.
 */
clojure.test.check.generators$macros.coll_distinct_by_STAR_ = (function clojure$test$check$generators$macros$coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,size,num_elements,min_elements,max_tries,ex_fn){
if(cljs.core.truth_(gen)){
} else {
throw (new Error("Assert failed: gen"));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(gen))){
} else {
throw (new Error("Assert failed: (:gen gen)"));
}

var rose_trees = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var s = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var rng__$1 = rng;
var size__$1 = size;
var tries = (0);
while(true){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) && ((cljs.core.count(rose_trees) < min_elements)))){
throw (function (){var G__7910 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"gen","gen",142575302),gen,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),max_tries,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),num_elements], null);
return (ex_fn.cljs$core$IFn$_invoke$arity$1 ? ex_fn.cljs$core$IFn$_invoke$arity$1(G__7910) : ex_fn.call(null,G__7910));
})();
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max_tries,tries)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rose_trees),num_elements)))){
return clojure.test.check.rose_tree.shrink_vector(((function (rose_trees,s,rng__$1,size__$1,tries){
return (function() { 
var G__8050__delegate = function (rest__7903_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,rest__7903_SHARP_);
};
var G__8050 = function (var_args){
var rest__7903_SHARP_ = null;
if (arguments.length > 0) {
var G__8051__i = 0, G__8051__a = new Array(arguments.length -  0);
while (G__8051__i < G__8051__a.length) {G__8051__a[G__8051__i] = arguments[G__8051__i + 0]; ++G__8051__i;}
  rest__7903_SHARP_ = new cljs.core.IndexedSeq(G__8051__a,0,null);
} 
return G__8050__delegate.call(this,rest__7903_SHARP_);};
G__8050.cljs$lang$maxFixedArity = 0;
G__8050.cljs$lang$applyTo = (function (arglist__8052){
var rest__7903_SHARP_ = cljs.core.seq(arglist__8052);
return G__8050__delegate(rest__7903_SHARP_);
});
G__8050.cljs$core$IFn$_invoke$arity$variadic = G__8050__delegate;
return G__8050;
})()
;})(rose_trees,s,rng__$1,size__$1,tries))
,(function (){var G__7911 = rng__$1;
var G__7912 = cljs.core.persistent_BANG_(rose_trees);
return (shuffle_fn.cljs$core$IFn$_invoke$arity$2 ? shuffle_fn.cljs$core$IFn$_invoke$arity$2(G__7911,G__7912) : shuffle_fn.call(null,G__7911,G__7912));
})());
} else {
var vec__7913 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7913,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7913,(1),null);
var rose = clojure.test.check.generators$macros.call_gen(gen,rng1,size__$1);
var root = clojure.test.check.rose_tree.root(rose);
var k = (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(root) : key_fn.call(null,root));
if(clojure.test.check.generators$macros.transient_set_contains_QMARK_(s,k)){
var G__8053 = rose_trees;
var G__8054 = s;
var G__8055 = rng2;
var G__8056 = (size__$1 + (1));
var G__8057 = (tries + (1));
rose_trees = G__8053;
s = G__8054;
rng__$1 = G__8055;
size__$1 = G__8056;
tries = G__8057;
continue;
} else {
var G__8058 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(rose_trees,rose);
var G__8059 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(s,k);
var G__8060 = rng2;
var G__8061 = size__$1;
var G__8062 = (0);
rose_trees = G__8058;
s = G__8059;
rng__$1 = G__8060;
size__$1 = G__8061;
tries = G__8062;
continue;
}

}
}
break;
}
});
/**
 * Like clojure.core/distinct? but takes a collection instead of varargs,
 *   and returns true for empty collections.
 */
clojure.test.check.generators$macros.distinct_by_QMARK_ = (function clojure$test$check$generators$macros$distinct_by_QMARK_(f,coll){
var or__4126__auto__ = cljs.core.empty_QMARK_(coll);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,coll));
}
});
/**
 * Returns a shuffled version of coll according to the rng.
 * 
 *   Note that this is not a generator, it is just a utility function.
 */
clojure.test.check.generators$macros.the_shuffle_fn = (function clojure$test$check$generators$macros$the_shuffle_fn(rng,coll){
var empty_coll = cljs.core.empty(coll);
var v = cljs.core.vec(coll);
var card = cljs.core.count(coll);
var dec_card = (card - (1));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_coll,cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7916,idx){
var vec__7917 = p__7916;
var v__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7917,(0),null);
var rng__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7917,(1),null);
var vec__7920 = clojure.test.check.random.split(rng__$1);
var rng1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7920,(0),null);
var rng2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7920,(1),null);
var swap_idx = clojure.test.check.generators$macros.rand_range(rng1,idx,dec_card);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators$macros.swap(v__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [idx,swap_idx], null)),rng2], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,rng], null),cljs.core.range.cljs$core$IFn$_invoke$arity$1(card))));
});
clojure.test.check.generators$macros.coll_distinct_by = (function clojure$test$check$generators$macros$coll_distinct_by(empty_coll,key_fn,allows_dupes_QMARK_,ordered_QMARK_,gen,p__7930){
var map__7931 = p__7930;
var map__7931__$1 = (((((!((map__7931 == null))))?(((((map__7931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7931):map__7931);
var num_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7931__$1,new cljs.core.Keyword(null,"num-elements","num-elements",1960422107));
var min_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7931__$1,new cljs.core.Keyword(null,"min-elements","min-elements",949370780));
var max_elements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7931__$1,new cljs.core.Keyword(null,"max-elements","max-elements",433034073));
var max_tries = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7931__$1,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(10));
var ex_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7931__$1,new cljs.core.Keyword(null,"ex-fn","ex-fn",-284925510),(function (p1__7923_SHARP_){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Couldn't generate enough distinct elements!",p1__7923_SHARP_);
}));
var shuffle_fn = (cljs.core.truth_(ordered_QMARK_)?clojure.test.check.generators$macros.the_shuffle_fn:(function (_rng,coll){
return coll;
}));
var hard_min_elements = (function (){var or__4126__auto__ = num_elements;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = min_elements;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (1);
}
}
})();
if(cljs.core.truth_(num_elements)){
var size_pred = (function (p1__7924_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(num_elements,cljs.core.count(p1__7924_SHARP_));
});
if((((min_elements == null)) && ((max_elements == null)))){
} else {
throw (new Error("Assert failed: (and (nil? min-elements) (nil? max-elements))"));
}

return clojure.test.check.generators$macros.make_gen((function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,(function (p1__7925_SHARP_){
return clojure.test.check.generators$macros.distinct_by_QMARK_(key_fn,p1__7925_SHARP_);
})):size_pred),clojure.test.check.generators$macros.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements,hard_min_elements,max_tries,ex_fn));
}));
} else {
var min_elements__$1 = (function (){var or__4126__auto__ = min_elements;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var size_pred = (cljs.core.truth_(max_elements)?(function (p1__7926_SHARP_){
return (((min_elements__$1 <= cljs.core.count(p1__7926_SHARP_))) && ((cljs.core.count(p1__7926_SHARP_) <= max_elements)));
}):(function (p1__7927_SHARP_){
return (min_elements__$1 <= cljs.core.count(p1__7927_SHARP_));
}));
return clojure.test.check.generators$macros.gen_bind((cljs.core.truth_(max_elements)?clojure.test.check.generators$macros.choose(min_elements__$1,max_elements):clojure.test.check.generators$macros.sized((function (p1__7928_SHARP_){
return clojure.test.check.generators$macros.choose(min_elements__$1,(min_elements__$1 + p1__7928_SHARP_));
}))),(function (num_elements_rose){
var num_elements__$1 = clojure.test.check.rose_tree.root(num_elements_rose);
return clojure.test.check.generators$macros.make_gen((function (rng,gen_size){
return clojure.test.check.rose_tree.filter((cljs.core.truth_(allows_dupes_QMARK_)?cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(size_pred,(function (p1__7929_SHARP_){
return clojure.test.check.generators$macros.distinct_by_QMARK_(key_fn,p1__7929_SHARP_);
})):size_pred),clojure.test.check.generators$macros.coll_distinct_by_STAR_(empty_coll,key_fn,shuffle_fn,gen,rng,gen_size,num_elements__$1,hard_min_elements,max_tries,ex_fn));
}));
}));
}
});
/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators$macros.vector_distinct = (function clojure$test$check$generators$macros$vector_distinct(var_args){
var G__7934 = arguments.length;
switch (G__7934) {
case 1:
return clojure.test.check.generators$macros.vector_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.vector_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.vector_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators$macros.vector_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.test.check.generators$macros.vector_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","First arg to vector-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.coll_distinct_by(cljs.core.PersistentVector.EMPTY,cljs.core.identity,true,true,gen,opts);
}));

(clojure.test.check.generators$macros.vector_distinct.cljs$lang$maxFixedArity = 2);

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that the elements will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated list
 *  :min-elements  the min size of generated list
 *  :max-elements  the max size of generated list
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators$macros.list_distinct = (function clojure$test$check$generators$macros$list_distinct(var_args){
var G__7936 = arguments.length;
switch (G__7936) {
case 1:
return clojure.test.check.generators$macros.list_distinct.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.list_distinct.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.list_distinct.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators$macros.list_distinct.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.test.check.generators$macros.list_distinct.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","First arg to list-distinct must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.coll_distinct_by(cljs.core.List.EMPTY,cljs.core.identity,true,true,gen,opts);
}));

(clojure.test.check.generators$macros.list_distinct.cljs$lang$maxFixedArity = 2);

/**
 * Generates a vector of elements from the given generator, with the
 *   guarantee that (map key-fn the-vector) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated vectors
 *  :min-elements  the min size of generated vectors
 *  :max-elements  the max size of generated vectors
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators$macros.vector_distinct_by = (function clojure$test$check$generators$macros$vector_distinct_by(var_args){
var G__7938 = arguments.length;
switch (G__7938) {
case 2:
return clojure.test.check.generators$macros.vector_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators$macros.vector_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.vector_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators$macros.vector_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.test.check.generators$macros.vector_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to vector-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.coll_distinct_by(cljs.core.PersistentVector.EMPTY,key_fn,true,true,gen,opts);
}));

(clojure.test.check.generators$macros.vector_distinct_by.cljs$lang$maxFixedArity = 3);

/**
 * Generates a list of elements from the given generator, with the
 *   guarantee that (map key-fn the-list) will be distinct.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated list
 *  :min-elements  the min size of generated list
 *  :max-elements  the max size of generated list
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators$macros.list_distinct_by = (function clojure$test$check$generators$macros$list_distinct_by(var_args){
var G__7940 = arguments.length;
switch (G__7940) {
case 2:
return clojure.test.check.generators$macros.list_distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators$macros.list_distinct_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.list_distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (key_fn,gen){
return clojure.test.check.generators$macros.list_distinct_by.cljs$core$IFn$_invoke$arity$3(key_fn,gen,cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.test.check.generators$macros.list_distinct_by.cljs$core$IFn$_invoke$arity$3 = (function (key_fn,gen,opts){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to list-distinct-by must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.coll_distinct_by(cljs.core.List.EMPTY,key_fn,true,true,gen,opts);
}));

(clojure.test.check.generators$macros.list_distinct_by.cljs$lang$maxFixedArity = 3);

/**
 * Generates a set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated set
 *  :min-elements  the min size of generated set
 *  :max-elements  the max size of generated set
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators$macros.set = (function clojure$test$check$generators$macros$set(var_args){
var G__7942 = arguments.length;
switch (G__7942) {
case 1:
return clojure.test.check.generators$macros.set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators$macros.set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.test.check.generators$macros.set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","First arg to set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.coll_distinct_by(cljs.core.PersistentHashSet.EMPTY,cljs.core.identity,false,false,gen,opts);
}));

(clojure.test.check.generators$macros.set.cljs$lang$maxFixedArity = 2);

/**
 * Generates a sorted set of elements from the given generator.
 * 
 *   If the generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated set
 *  :min-elements  the min size of generated set
 *  :max-elements  the max size of generated set
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct values; it will be passed a map with
 *                 `:gen`, `:num-elements`, and `:max-tries` and should return an
 *                 exception
 */
clojure.test.check.generators$macros.sorted_set = (function clojure$test$check$generators$macros$sorted_set(var_args){
var G__7944 = arguments.length;
switch (G__7944) {
case 1:
return clojure.test.check.generators$macros.sorted_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.test.check.generators$macros.sorted_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.sorted_set.cljs$core$IFn$_invoke$arity$1 = (function (gen){
return clojure.test.check.generators$macros.sorted_set.cljs$core$IFn$_invoke$arity$2(gen,cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.test.check.generators$macros.sorted_set.cljs$core$IFn$_invoke$arity$2 = (function (gen,opts){
if(clojure.test.check.generators$macros.generator_QMARK_(gen)){
} else {
throw (new Error(["Assert failed: ","First arg to sorted-set must be a generator!","\n","(generator? gen)"].join('')));
}

return clojure.test.check.generators$macros.coll_distinct_by(cljs.core.sorted_set(),cljs.core.identity,false,false,gen,opts);
}));

(clojure.test.check.generators$macros.sorted_set.cljs$lang$maxFixedArity = 2);

/**
 * Creates a generator that generates maps, with keys chosen from
 *   `key-gen` and values chosen from `val-gen`.
 * 
 *   If the key generator cannot or is unlikely to produce enough distinct
 *   elements, this generator will fail in the same way as `such-that`.
 * 
 *   Available options:
 * 
 *  :num-elements  the fixed size of generated maps
 *  :min-elements  the min size of generated maps
 *  :max-elements  the max size of generated maps
 *  :max-tries     the number of times the generator will be tried before
 *                 failing when it does not produce distinct elements
 *                 (default 10)
 *  :ex-fn         a function of one arg that will be called if test.check cannot
 *                 generate enough distinct keys; it will be passed a map with
 *                 `:gen` (the key-gen), `:num-elements`, and `:max-tries` and
 *                 should return an exception
 */
clojure.test.check.generators$macros.map = (function clojure$test$check$generators$macros$map(var_args){
var G__7946 = arguments.length;
switch (G__7946) {
case 2:
return clojure.test.check.generators$macros.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.test.check.generators$macros.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(clojure.test.check.generators$macros.map.cljs$core$IFn$_invoke$arity$2 = (function (key_gen,val_gen){
return clojure.test.check.generators$macros.map.cljs$core$IFn$_invoke$arity$3(key_gen,val_gen,cljs.core.PersistentArrayMap.EMPTY);
}));

(clojure.test.check.generators$macros.map.cljs$core$IFn$_invoke$arity$3 = (function (key_gen,val_gen,opts){
return clojure.test.check.generators$macros.coll_distinct_by(cljs.core.PersistentArrayMap.EMPTY,cljs.core.first,false,false,clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key_gen,val_gen], 0)),opts);
}));

(clojure.test.check.generators$macros.map.cljs$lang$maxFixedArity = 3);

/**
 * Generates a single uniformly random long, does not shrink.
 */
clojure.test.check.generators$macros.gen_raw_long = clojure.test.check.generators$macros.make_gen((function (rnd,_size){
return clojure.test.check.rose_tree.pure(clojure.test.check.random.rand_long(rnd));
}));
clojure.test.check.generators$macros.MAX_INTEGER = (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((53),(2))) - (1));
clojure.test.check.generators$macros.MIN_INTEGER = (- clojure.test.check.generators$macros.MAX_INTEGER);
clojure.test.check.generators$macros.abs = (function clojure$test$check$generators$macros$abs(x){
return Math.abs(x);
});
clojure.test.check.generators$macros.long__GT_large_integer = (function clojure$test$check$generators$macros$long__GT_large_integer(bit_count,x,min,max){
var res = (function (){var G__7947 = x.shiftRight(((64) - bit_count)).toNumber();
if((min === (0))){
return clojure.test.check.generators$macros.abs(G__7947);
} else {
return G__7947;
}
})();
while(true){
if((((min <= res)) && ((res <= max)))){
return res;
} else {
var res_SINGLEQUOTE_ = (- res);
if((((min <= res_SINGLEQUOTE_)) && ((res_SINGLEQUOTE_ <= max)))){
return res_SINGLEQUOTE_;
} else {
var G__8070 = ((function (){var G__7948 = res;
if(cljs.core.odd_QMARK_(res)){
var fexpr__7949 = (((res < (0)))?cljs.core.inc:cljs.core.dec);
return (fexpr__7949.cljs$core$IFn$_invoke$arity$1 ? fexpr__7949.cljs$core$IFn$_invoke$arity$1(G__7948) : fexpr__7949.call(null,G__7948));
} else {
return G__7948;
}
})() / (2));
res = G__8070;
continue;
}
}
break;
}
});
/**
 * Like large-integer*, but assumes range includes zero.
 */
clojure.test.check.generators$macros.large_integer_STAR__STAR_ = (function clojure$test$check$generators$macros$large_integer_STAR__STAR_(min,max){
return clojure.test.check.generators$macros.sized((function (size){
var size__$1 = (function (){var x__4214__auto__ = size;
var y__4215__auto__ = (1);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var max_bit_count = (function (){var x__4217__auto__ = size__$1;
var y__4218__auto__ = (54);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
return clojure.test.check.generators$macros.gen_fmap((function (rose){
var vec__7950 = clojure.test.check.rose_tree.root(rose);
var bit_count = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7950,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7950,(1),null);
return clojure.test.check.generators$macros.int_rose_tree(clojure.test.check.generators$macros.long__GT_large_integer(bit_count,x,min,max));
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators$macros.choose((1),max_bit_count),clojure.test.check.generators$macros.gen_raw_long], 0)));
}));
});
/**
 * Like large-integer, but accepts options:
 * 
 *  :min  the minimum integer (inclusive)
 *  :max  the maximum integer (inclusive)
 * 
 *   Both :min and :max are optional.
 * 
 *    (gen/sample (gen/large-integer* {:min 9000 :max 10000}))
 *    => (9000 9001 9001 9002 9000 9003 9006 9030 9005 9044)
 */
clojure.test.check.generators$macros.large_integer_STAR_ = (function clojure$test$check$generators$macros$large_integer_STAR_(p__7956){
var map__7957 = p__7956;
var map__7957__$1 = (((((!((map__7957 == null))))?(((((map__7957.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7957.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7957):map__7957);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7957__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7957__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min__$1 = (function (){var or__4126__auto__ = min;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.test.check.generators$macros.MIN_INTEGER;
}
})();
var max__$1 = (function (){var or__4126__auto__ = max;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.test.check.generators$macros.MAX_INTEGER;
}
})();
if((min__$1 <= max__$1)){
} else {
throw (new Error("Assert failed: (<= min max)"));
}

return clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2((function (p1__7953_SHARP_){
return (((min__$1 <= p1__7953_SHARP_)) && ((p1__7953_SHARP_ <= max__$1)));
}),(((((min__$1 <= (0))) && (((0) <= max__$1))))?clojure.test.check.generators$macros.large_integer_STAR__STAR_(min__$1,max__$1):(((max__$1 < (0)))?clojure.test.check.generators$macros.fmap((function (p1__7954_SHARP_){
return (max__$1 + p1__7954_SHARP_);
}),clojure.test.check.generators$macros.large_integer_STAR__STAR_((min__$1 - max__$1),(0))):clojure.test.check.generators$macros.fmap((function (p1__7955_SHARP_){
return (min__$1 + p1__7955_SHARP_);
}),clojure.test.check.generators$macros.large_integer_STAR__STAR_((0),(max__$1 - min__$1))))));
});
/**
 * Generates a platform-native integer from the full available range
 *   (in clj, 64-bit Longs, and in cljs, numbers between -(2^53 - 1) and
 *   (2^53 - 1)).
 * 
 *   Use large-integer* for more control.
 */
clojure.test.check.generators$macros.large_integer = clojure.test.check.generators$macros.large_integer_STAR_(cljs.core.PersistentArrayMap.EMPTY);
clojure.test.check.generators$macros.POS_INFINITY = Number.POSITIVE_INFINITY;
clojure.test.check.generators$macros.NEG_INFINITY = Number.NEGATIVE_INFINITY;
clojure.test.check.generators$macros.MAX_POS_VALUE = Number.MAX_VALUE;
clojure.test.check.generators$macros.MIN_NEG_VALUE = (- clojure.test.check.generators$macros.MAX_POS_VALUE);
clojure.test.check.generators$macros.NAN = Number.NaN;
/**
 * Generates an integer uniformly in the range 0..(2^bit-count-1).
 */
clojure.test.check.generators$macros.uniform_integer = (function clojure$test$check$generators$macros$uniform_integer(bit_count){
if((bit_count <= (32))){
return clojure.test.check.generators$macros.choose((0),(function (){var G__7959 = cljs.core.long$(bit_count);
switch (G__7959) {
case (32):
return (4294967295);

break;
case (31):
return (2147483647);

break;
default:
return (((1) << bit_count) - (1));

}
})());
} else {
return clojure.test.check.generators$macros.fmap((function (p__7960){
var vec__7961 = p__7960;
var upper = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7961,(0),null);
var lower = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7961,(1),null);
return ((upper * (4294967296)) + lower);
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__7964 = (bit_count - (32));
return (clojure.test.check.generators$macros.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators$macros.uniform_integer.cljs$core$IFn$_invoke$arity$1(G__7964) : clojure.test.check.generators$macros.uniform_integer.call(null,G__7964));
})(),(clojure.test.check.generators$macros.uniform_integer.cljs$core$IFn$_invoke$arity$1 ? clojure.test.check.generators$macros.uniform_integer.cljs$core$IFn$_invoke$arity$1((32)) : clojure.test.check.generators$macros.uniform_integer.call(null,(32)))], 0)));
}
});
clojure.test.check.generators$macros.scalb = (function clojure$test$check$generators$macros$scalb(x,exp){
return (x * Math.pow((2),exp));
});
/**
 * Bit-reverses an integer in the range [0, 2^52).
 */
clojure.test.check.generators$macros.fifty_two_bit_reverse = (function clojure$test$check$generators$macros$fifty_two_bit_reverse(n){
var out = (0);
var n__$1 = n;
var out_shifter = Math.pow((2),(52));
while(true){
if((n__$1 < (1))){
return (out * out_shifter);
} else {
var G__8072 = ((out * (2)) + (n__$1 & (1)));
var G__8073 = (n__$1 / (2));
var G__8074 = (out_shifter / (2));
out = G__8072;
n__$1 = G__8073;
out_shifter = G__8074;
continue;
}
break;
}
});
/**
 * Generates a 52-bit non-negative integer that shrinks toward having
 *   fewer lower-order bits (and shrinks to 0 if possible).
 */
clojure.test.check.generators$macros.backwards_shrinking_significand = clojure.test.check.generators$macros.fmap(clojure.test.check.generators$macros.fifty_two_bit_reverse,clojure.test.check.generators$macros.sized((function (size){
return clojure.test.check.generators$macros.gen_bind(clojure.test.check.generators$macros.choose((0),(function (){var x__4217__auto__ = size;
var y__4218__auto__ = (52);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()),(function (rose){
return clojure.test.check.generators$macros.uniform_integer(clojure.test.check.rose_tree.root(rose));
}));
})));
clojure.test.check.generators$macros.get_exponent = (function clojure$test$check$generators$macros$get_exponent(x){
if((x === (0))){
return (-1023);
} else {
var x__$1 = Math.abs(x);
var res = Math.floor((Math.log(x__$1) * Math.LOG2E));
var t = clojure.test.check.generators$macros.scalb(x__$1,(- res));
if((t < (1))){
return (res - (1));
} else {
if(((2) <= t)){
return (res + (1));
} else {
return res;

}
}
}
});
/**
 * Generates [exp sign], where exp is in [-1023, 1023] and sign is 1
 *   or -1. Only generates values for exp and sign for which there are
 *   doubles within the given bounds.
 */
clojure.test.check.generators$macros.double_exp_and_sign = (function clojure$test$check$generators$macros$double_exp_and_sign(lower_bound,upper_bound){
var gen_exp = (function clojure$test$check$generators$macros$double_exp_and_sign_$_gen_exp(lb,ub){
return clojure.test.check.generators$macros.sized((function (size){
var qs8 = ((1) << cljs.core.quot((function (){var x__4217__auto__ = (200);
var y__4218__auto__ = size;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})(),(8)));
if((((lb <= (0))) && (((0) <= ub)))){
return clojure.test.check.generators$macros.choose((function (){var x__4214__auto__ = lb;
var y__4215__auto__ = (- qs8);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),(function (){var x__4217__auto__ = ub;
var y__4218__auto__ = qs8;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());
} else {
if((ub < (0))){
return clojure.test.check.generators$macros.choose((function (){var x__4214__auto__ = lb;
var y__4215__auto__ = (ub - qs8);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})(),ub);
} else {
return clojure.test.check.generators$macros.choose(lb,(function (){var x__4217__auto__ = ub;
var y__4218__auto__ = (lb + qs8);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})());

}
}
}));
});
if((((lower_bound == null)) && ((upper_bound == null)))){
return clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(1023)),clojure.test.check.generators$macros.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0));
} else {
var lower_bound__$1 = (function (){var or__4126__auto__ = lower_bound;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.test.check.generators$macros.MIN_NEG_VALUE;
}
})();
var upper_bound__$1 = (function (){var or__4126__auto__ = upper_bound;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.test.check.generators$macros.MAX_POS_VALUE;
}
})();
var lbexp = (function (){var x__4214__auto__ = (-1023);
var y__4215__auto__ = clojure.test.check.generators$macros.get_exponent(lower_bound__$1);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
var ubexp = (function (){var x__4214__auto__ = (-1023);
var y__4215__auto__ = clojure.test.check.generators$macros.get_exponent(upper_bound__$1);
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})();
if((0.0 <= lower_bound__$1)){
return clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(lbexp,ubexp),clojure.test.check.generators$macros.return$(1.0)], 0));
} else {
if((upper_bound__$1 <= 0.0)){
return clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp(ubexp,lbexp),clojure.test.check.generators$macros.return$(-1.0)], 0));
} else {
return clojure.test.check.generators$macros.fmap((function (p__7965){
var vec__7966 = p__7965;
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(1),null);
var pair = vec__7966;
if((((((sign < (0))) && ((lbexp < exp)))) || ((((sign > (0))) && ((ubexp < exp)))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exp,(- sign)], null);
} else {
return pair;
}
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gen_exp((-1023),(function (){var x__4214__auto__ = ubexp;
var y__4215__auto__ = lbexp;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
})()),clojure.test.check.generators$macros.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-1.0], null))], 0)));

}
}
}
});
/**
 * Returns [low high], the smallest and largest numbers in the given
 *   range.
 */
clojure.test.check.generators$macros.block_bounds = (function clojure$test$check$generators$macros$block_bounds(exp,sign){
if((sign < (0))){
var vec__7969 = (function (){var G__7972 = exp;
var G__7973 = (- sign);
return (clojure.test.check.generators$macros.block_bounds.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.generators$macros.block_bounds.cljs$core$IFn$_invoke$arity$2(G__7972,G__7973) : clojure.test.check.generators$macros.block_bounds.call(null,G__7972,G__7973));
})();
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7969,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7969,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- high),(- low)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1023),exp)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,clojure.test.check.generators$macros.scalb((clojure.test.check.generators$macros.scalb(1.0,(52)) - (1)),(-1074))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators$macros.scalb(1.0,exp),clojure.test.check.generators$macros.scalb((clojure.test.check.generators$macros.scalb(1.0,(52)) - (1)),(exp - (51)))], null);
}
}
});
clojure.test.check.generators$macros.double_finite = (function clojure$test$check$generators$macros$double_finite(lower_bound,upper_bound){
if((((lower_bound == null)) || ((upper_bound == null)) || ((lower_bound <= upper_bound)))){
} else {
throw (new Error("Assert failed: (or (nil? lower-bound) (nil? upper-bound) (<= lower-bound upper-bound))"));
}

var pred = (cljs.core.truth_(lower_bound)?(cljs.core.truth_(upper_bound)?(function (p1__7974_SHARP_){
return (((lower_bound <= p1__7974_SHARP_)) && ((p1__7974_SHARP_ <= upper_bound)));
}):(function (p1__7975_SHARP_){
return (lower_bound <= p1__7975_SHARP_);
})):(cljs.core.truth_(upper_bound)?(function (p1__7976_SHARP_){
return (p1__7976_SHARP_ <= upper_bound);
}):null));
var gen = clojure.test.check.generators$macros.fmap((function (p__7977){
var vec__7978 = p__7977;
var vec__7981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7981,(0),null);
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7981,(1),null);
var significand = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7978,(1),null);
var base = ((significand / Math.pow((2),(52))) + (1));
var x = (clojure.test.check.generators$macros.scalb(base,exp) * sign);
if(cljs.core.truth_((function (){var or__4126__auto__ = (pred == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(x) : pred.call(null,x));
}
})())){
return x;
} else {
var vec__7984 = clojure.test.check.generators$macros.block_bounds(exp,sign);
var low = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7984,(0),null);
var high = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7984,(1),null);
var block_lb = (function (){var G__7987 = low;
if(cljs.core.truth_(lower_bound)){
var x__4214__auto__ = G__7987;
var y__4215__auto__ = lower_bound;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
} else {
return G__7987;
}
})();
var block_ub = (function (){var G__7988 = high;
if(cljs.core.truth_(upper_bound)){
var x__4217__auto__ = G__7988;
var y__4218__auto__ = upper_bound;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
} else {
return G__7988;
}
})();
var x__$1 = (block_lb + ((block_ub - block_lb) * (base - (1))));
var x__4214__auto__ = (function (){var x__4217__auto__ = x__$1;
var y__4218__auto__ = block_ub;
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})();
var y__4215__auto__ = block_lb;
return ((x__4214__auto__ > y__4215__auto__) ? x__4214__auto__ : y__4215__auto__);
}
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators$macros.double_exp_and_sign(lower_bound,upper_bound),clojure.test.check.generators$macros.backwards_shrinking_significand], 0)));
var G__7989 = gen;
if(cljs.core.truth_(pred)){
return clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2(pred,G__7989);
} else {
return G__7989;
}
});
/**
 * Generates a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity can be generated (default true)
 *  :NaN?      - whether NaN can be generated (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 * 
 *   Note that the min/max options must be finite numbers. Supplying a
 *   min precludes -Infinity, and supplying a max precludes +Infinity.
 */
clojure.test.check.generators$macros.double_STAR_ = (function clojure$test$check$generators$macros$double_STAR_(p__7990){
var map__7991 = p__7990;
var map__7991__$1 = (((((!((map__7991 == null))))?(((((map__7991.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7991.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7991):map__7991);
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7991__$1,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7991__$1,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7991__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7991__$1,new cljs.core.Keyword(null,"max","max",61366548));
var frequency_arg = (function (){var G__7993 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(95),clojure.test.check.generators$macros.double_finite(min,max)], null)], null);
var G__7993__$1 = (((((min == null))?(((max == null)) || ((0.0 <= max))):(((max == null))?(min <= 0.0):(((min <= 0.0)) && ((0.0 <= max))))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__7993,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.return$(0.0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.return$(-0.0)], null)], 0)):G__7993);
var G__7993__$2 = (cljs.core.truth_((function (){var and__4115__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (max == null);
} else {
return and__4115__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7993__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.return$(clojure.test.check.generators$macros.POS_INFINITY)], null)):G__7993__$1);
var G__7993__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = infinite_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (min == null);
} else {
return and__4115__auto__;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7993__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.return$(clojure.test.check.generators$macros.NEG_INFINITY)], null)):G__7993__$2);
if(cljs.core.truth_(NaN_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__7993__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.return$(clojure.test.check.generators$macros.NAN)], null));
} else {
return G__7993__$3;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(frequency_arg))){
return cljs.core.second(cljs.core.first(frequency_arg));
} else {
return clojure.test.check.generators$macros.frequency(frequency_arg);
}
});
/**
 * Generates 64-bit floating point numbers from the entire range,
 *   including +/- infinity and NaN. Use double* for more control.
 */
clojure.test.check.generators$macros.double$ = clojure.test.check.generators$macros.double_STAR_(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Generates character from 0-255.
 */
clojure.test.check.generators$macros.char$ = clojure.test.check.generators$macros.fmap(cljs.core.char$,clojure.test.check.generators$macros.choose((0),(255)));
/**
 * Generates only ascii characters.
 */
clojure.test.check.generators$macros.char_ascii = clojure.test.check.generators$macros.fmap(cljs.core.char$,clojure.test.check.generators$macros.choose((32),(126)));
/**
 * Generates alphanumeric characters.
 */
clojure.test.check.generators$macros.char_alphanumeric = clojure.test.check.generators$macros.fmap(cljs.core.char$,clojure.test.check.generators$macros.one_of(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators$macros.choose((48),(57)),clojure.test.check.generators$macros.choose((65),(90)),clojure.test.check.generators$macros.choose((97),(122))], null)));
/**
 * Deprecated - use char-alphanumeric instead.
 * 
 *   Generates alphanumeric characters.
 */
clojure.test.check.generators$macros.char_alpha_numeric = clojure.test.check.generators$macros.char_alphanumeric;
/**
 * Generates alpha characters.
 */
clojure.test.check.generators$macros.char_alpha = clojure.test.check.generators$macros.fmap(cljs.core.char$,clojure.test.check.generators$macros.one_of(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators$macros.choose((65),(90)),clojure.test.check.generators$macros.choose((97),(122))], null)));
/**
 * Generates non-alphanumeric characters that can be in a symbol.
 */
clojure.test.check.generators$macros.char_symbol_special = clojure.test.check.generators$macros.elements(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["*","+","!","-","_","?","."], null));
/**
 * Generates characters that can be the char following first of a keyword or symbol.
 */
clojure.test.check.generators$macros.char_symbol_noninitial = clojure.test.check.generators$macros.frequency(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(14),clojure.test.check.generators$macros.char_alphanumeric], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(7),clojure.test.check.generators$macros.char_symbol_special], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.return$(":")], null)], null));
/**
 * Generates characters that can be the first char of a keyword or symbol.
 */
clojure.test.check.generators$macros.char_symbol_initial = clojure.test.check.generators$macros.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),clojure.test.check.generators$macros.char_alpha], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.char_symbol_special], null)], null));
/**
 * Generates strings. May generate unprintable characters.
 */
clojure.test.check.generators$macros.string = clojure.test.check.generators$macros.fmap(clojure.string.join,clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators$macros.char$));
/**
 * Generates ascii strings.
 */
clojure.test.check.generators$macros.string_ascii = clojure.test.check.generators$macros.fmap(clojure.string.join,clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators$macros.char_ascii));
/**
 * Generates alphanumeric strings.
 */
clojure.test.check.generators$macros.string_alphanumeric = clojure.test.check.generators$macros.fmap(clojure.string.join,clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators$macros.char_alphanumeric));
/**
 * Deprecated - use string-alphanumeric instead.
 * 
 *   Generates alphanumeric strings.
 */
clojure.test.check.generators$macros.string_alpha_numeric = clojure.test.check.generators$macros.string_alphanumeric;
clojure.test.check.generators$macros.digit_QMARK_ = (function clojure$test$check$generators$macros$digit_QMARK_(d){
return goog.string.isNumeric(d);
});
/**
 * Returns true if c is \+ or \- and d is non-nil and a digit.
 * 
 *   Symbols that start with +3 or -2 are not readable because they look
 *   like numbers.
 */
clojure.test.check.generators$macros._PLUS__or___digit_QMARK_ = (function clojure$test$check$generators$macros$_PLUS__or___digit_QMARK_(c,d){
return cljs.core.boolean$((function (){var and__4115__auto__ = d;
if(cljs.core.truth_(and__4115__auto__)){
if(((("+" === c)) || (("-" === c)))){
return clojure.test.check.generators$macros.digit_QMARK_(d);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})());
});
/**
 * Generates a namespace string for a symbol/keyword.
 */
clojure.test.check.generators$macros.symbol_name_or_namespace = clojure.test.check.generators$macros.fmap((function (p__7995){
var vec__7996 = p__7995;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7996,(0),null);
var cs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7996,(1),null);
var s = clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.cons(c,cs));
return clojure.string.replace(clojure.string.replace(s,/:{2,}/,":"),/:$/,"");
}),clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2((function (p__7999){
var vec__8000 = p__7999;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8000,(0),null);
var vec__8003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8000,(1),null);
var d = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8003,(0),null);
return (!(clojure.test.check.generators$macros._PLUS__or___digit_QMARK_(c,d)));
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators$macros.char_symbol_initial,clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators$macros.char_symbol_noninitial)], 0))));
/**
 * Scales the sizing down on a keyword or symbol generator so as to
 *   make it reasonable.
 */
clojure.test.check.generators$macros.resize_symbolish_generator = (function clojure$test$check$generators$macros$resize_symbolish_generator(g){
return clojure.test.check.generators$macros.scale((function (p1__8006_SHARP_){
return cljs.core.long$(Math.pow(p1__8006_SHARP_,0.6));
}),g);
});
/**
 * Generates keywords without namespaces.
 */
clojure.test.check.generators$macros.keyword = clojure.test.check.generators$macros.resize_symbolish_generator(clojure.test.check.generators$macros.fmap(cljs.core.keyword,clojure.test.check.generators$macros.symbol_name_or_namespace));
/**
 * Generates keywords with namespaces.
 */
clojure.test.check.generators$macros.keyword_ns = clojure.test.check.generators$macros.resize_symbolish_generator(clojure.test.check.generators$macros.fmap((function (p__8007){
var vec__8008 = p__8007;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8008,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8008,(1),null);
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,name);
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators$macros.symbol_name_or_namespace,clojure.test.check.generators$macros.symbol_name_or_namespace], 0))));
/**
 * Generates symbols without namespaces.
 */
clojure.test.check.generators$macros.symbol = clojure.test.check.generators$macros.frequency(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(100),clojure.test.check.generators$macros.resize_symbolish_generator(clojure.test.check.generators$macros.fmap(cljs.core.symbol,clojure.test.check.generators$macros.symbol_name_or_namespace))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),clojure.test.check.generators$macros.return$(new cljs.core.Symbol(null,"/","/",-1371932971,null))], null)], null));
/**
 * Generates symbols with namespaces.
 */
clojure.test.check.generators$macros.symbol_ns = clojure.test.check.generators$macros.resize_symbolish_generator(clojure.test.check.generators$macros.fmap((function (p__8011){
var vec__8012 = p__8011;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8012,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8012,(1),null);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name);
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators$macros.symbol_name_or_namespace,clojure.test.check.generators$macros.symbol_name_or_namespace], 0))));
/**
 * Generates a small ratio (or integer) using gen/small-integer. Shrinks
 *   toward simpler ratios, which may be larger or smaller.
 */
clojure.test.check.generators$macros.ratio = clojure.test.check.generators$macros.fmap((function (p__8015){
var vec__8016 = p__8015;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8016,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8016,(1),null);
return (a / b);
}),clojure.test.check.generators$macros.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([clojure.test.check.generators$macros.small_integer,clojure.test.check.generators$macros.fmap(cljs.core.inc,clojure.test.check.generators$macros.nat)], 0)));
/**
 * Generates a random type-4 UUID. Does not shrink.
 */
clojure.test.check.generators$macros.uuid = clojure.test.check.generators$macros.no_shrink(clojure.test.check.generators$macros.fmap((function (nibbles){
var hex = (function clojure$test$check$generators$macros$hex(idx){
return (nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1(idx) : nibbles.call(null,idx)).toString((16));
});
var rhex = (((nibbles.cljs$core$IFn$_invoke$arity$1 ? nibbles.cljs$core$IFn$_invoke$arity$1((15)) : nibbles.call(null,(15))) & (3)) + (8)).toString((16));
return cljs.core.uuid([cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((0))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((2))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((3))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((4))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((5))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((6))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((7))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((8))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((9))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((10))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((11))),"-","4",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((12))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((13))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((14))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rhex),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((16))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((17))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((18))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((19))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((20))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((21))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((22))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((23))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((24))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((25))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((26))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((27))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((28))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((29))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex((30)))].join(''));
}),clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.choose((0),(15)),(31))));
clojure.test.check.generators$macros.base_simple_type = (function clojure$test$check$generators$macros$base_simple_type(double_gen,char_gen,string_gen){
return clojure.test.check.generators$macros.one_of(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators$macros.int$,clojure.test.check.generators$macros.large_integer,double_gen,char_gen,string_gen,clojure.test.check.generators$macros.ratio,clojure.test.check.generators$macros.boolean$,clojure.test.check.generators$macros.keyword,clojure.test.check.generators$macros.keyword_ns,clojure.test.check.generators$macros.symbol,clojure.test.check.generators$macros.symbol_ns,clojure.test.check.generators$macros.uuid], null));
});
/**
 * Generates a variety of scalar types.
 */
clojure.test.check.generators$macros.simple_type = clojure.test.check.generators$macros.base_simple_type(clojure.test.check.generators$macros.double$,clojure.test.check.generators$macros.char$,clojure.test.check.generators$macros.string);
/**
 * Generates a variety of scalar types, with printable strings.
 */
clojure.test.check.generators$macros.simple_type_printable = clojure.test.check.generators$macros.base_simple_type(clojure.test.check.generators$macros.double$,clojure.test.check.generators$macros.char_ascii,clojure.test.check.generators$macros.string_ascii);
/**
 * Like gen/simple-type, but only generates objects that can be
 *   equal to other objects (e.g., not a NaN).
 */
clojure.test.check.generators$macros.simple_type_equatable = clojure.test.check.generators$macros.base_simple_type(clojure.test.check.generators$macros.double_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null)),clojure.test.check.generators$macros.char$,clojure.test.check.generators$macros.string);
/**
 * Like gen/simple-type-printable, but only generates objects that
 *   can be equal to other objects (e.g., not a NaN).
 */
clojure.test.check.generators$macros.simple_type_printable_equatable = clojure.test.check.generators$macros.base_simple_type(clojure.test.check.generators$macros.double_STAR_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null)),clojure.test.check.generators$macros.char_ascii,clojure.test.check.generators$macros.string_ascii);
clojure.test.check.generators$macros.hashable_QMARK_ = (function clojure$test$check$generators$macros$hashable_QMARK_(x){
if(typeof x === 'number'){
return cljs.core.not((function (){var or__4126__auto__ = isNaN(x);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.NEG_INFINITY,x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.POS_INFINITY,x)));
}
})());
} else {
return true;
}
});
clojure.test.check.generators$macros.container_type = (function clojure$test$check$generators$macros$container_type(inner_type){
return clojure.test.check.generators$macros.one_of(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.test.check.generators$macros.vector.cljs$core$IFn$_invoke$arity$1(inner_type),clojure.test.check.generators$macros.list(inner_type),clojure.test.check.generators$macros.set.cljs$core$IFn$_invoke$arity$1(clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.hashable_QMARK_,inner_type)),clojure.test.check.generators$macros.scale((function (p1__8019_SHARP_){
return cljs.core.quot(p1__8019_SHARP_,(2));
}),clojure.test.check.generators$macros.map.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.such_that.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators$macros.hashable_QMARK_,inner_type),inner_type))], null));
});
clojure.test.check.generators$macros.size__GT_max_leaf_count = (function clojure$test$check$generators$macros$size__GT_max_leaf_count(size){
return cljs.core.long$(Math.pow(size,1.1));
});
var log2_8075 = Math.log((2));
/**
 * Returns (not generates) a random collection of integers `xs`
 *   greater than 1 such that (<= (apply * xs) n).
 */
clojure.test.check.generators$macros.random_pseudofactoring = (function clojure$test$check$generators$macros$random_pseudofactoring(n,rng){
if((n <= (2))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
} else {
var log = Math.log(n);
var vec__8020 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8020,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8020,(1),null);
var n1 = cljs.core.long$(Math.exp(((clojure.test.check.random.rand_double(r1) * (log - log2_8075)) + log2_8075)));
var n2 = cljs.core.quot(n,n1);
if(((((1) < n1)) && (((1) < n2)))){
return cljs.core.cons(n1,(clojure.test.check.generators$macros.random_pseudofactoring.cljs$core$IFn$_invoke$arity$2 ? clojure.test.check.generators$macros.random_pseudofactoring.cljs$core$IFn$_invoke$arity$2(n2,r2) : clojure.test.check.generators$macros.random_pseudofactoring.call(null,n2,r2)));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null);
}
}
});
/**
 * Like sized, but passes an rng instead of a size.
 */
clojure.test.check.generators$macros.randomized = (function clojure$test$check$generators$macros$randomized(func){
return clojure.test.check.generators$macros.make_gen((function (rng,size){
var vec__8023 = clojure.test.check.random.split(rng);
var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8023,(0),null);
var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8023,(1),null);
return clojure.test.check.generators$macros.call_gen((func.cljs$core$IFn$_invoke$arity$1 ? func.cljs$core$IFn$_invoke$arity$1(r1) : func.call(null,r1)),r2,size);
}));
});
/**
 * This is a helper for writing recursive (tree-shaped) generators. The first
 *   argument should be a function that takes a generator as an argument, and
 *   produces another generator that 'contains' that generator. The vector function
 *   in this namespace is a simple example. The second argument is a scalar
 *   generator, like boolean. For example, to produce a tree of booleans:
 * 
 *  (gen/recursive-gen gen/vector gen/boolean)
 * 
 *   Vectors or maps either recurring or containing booleans or integers:
 * 
 *  (gen/recursive-gen (fn [inner] (gen/one-of [(gen/vector inner)
 *                                              (gen/map inner inner)]))
 *                     (gen/one-of [gen/boolean gen/small-integer]))
 * 
 *   Note that raw scalar values will be generated as well. To prevent this, you
 *   can wrap the returned generator with the function passed as the first arg,
 *   e.g.:
 * 
 *  (gen/vector (gen/recursive-gen gen/vector gen/boolean))
 */
clojure.test.check.generators$macros.recursive_gen = (function clojure$test$check$generators$macros$recursive_gen(container_gen_fn,scalar_gen){
if(clojure.test.check.generators$macros.generator_QMARK_(scalar_gen)){
} else {
throw (new Error(["Assert failed: ","Second arg to recursive-gen must be a generator","\n","(generator? scalar-gen)"].join('')));
}

return clojure.test.check.generators$macros.sized((function (size){
return clojure.test.check.generators$macros.bind(clojure.test.check.generators$macros.choose((0),clojure.test.check.generators$macros.size__GT_max_leaf_count(size)),(function (max_leaf_count){
return clojure.test.check.generators$macros.randomized((function (rng){
var sizes = clojure.test.check.generators$macros.random_pseudofactoring(max_leaf_count,rng);
var sized_scalar_gen = clojure.test.check.generators$macros.resize(size,scalar_gen);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (g,size__$1){
return clojure.test.check.generators$macros.bind(clojure.test.check.generators$macros.choose((0),(10)),(function (x){
if((x === (0))){
return sized_scalar_gen;
} else {
return clojure.test.check.generators$macros.resize(size__$1,(container_gen_fn.cljs$core$IFn$_invoke$arity$1 ? container_gen_fn.cljs$core$IFn$_invoke$arity$1(g) : container_gen_fn.call(null,g)));
}
}));
}),sized_scalar_gen,sizes);
}));
}));
}));
});
/**
 * A recursive generator that will generate many different, often nested, values
 */
clojure.test.check.generators$macros.any = clojure.test.check.generators$macros.recursive_gen(clojure.test.check.generators$macros.container_type,clojure.test.check.generators$macros.simple_type);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command)
 */
clojure.test.check.generators$macros.any_printable = clojure.test.check.generators$macros.recursive_gen(clojure.test.check.generators$macros.container_type,clojure.test.check.generators$macros.simple_type_printable);
/**
 * Like any, but only generates objects that can be equal to other objects (e.g., do
 *   not contain a NaN)
 */
clojure.test.check.generators$macros.any_equatable = clojure.test.check.generators$macros.recursive_gen(clojure.test.check.generators$macros.container_type,clojure.test.check.generators$macros.simple_type_equatable);
/**
 * Like any, but avoids characters that the shell will interpret as actions,
 *   like 7 and 14 (bell and alternate character set command), and only generates
 *   objects that can be equal to other objects (e.g., do not contain a NaN)
 */
clojure.test.check.generators$macros.any_printable_equatable = clojure.test.check.generators$macros.recursive_gen(clojure.test.check.generators$macros.container_type,clojure.test.check.generators$macros.simple_type_printable_equatable);
var ret__4785__auto___8076 = (function (){
/**
 * Macro for building generators using values from other generators.
 *   Uses a binding vector with the same syntax as clojure.core/let,
 *   where the right-hand side of the binding pairs are generators, and
 *   the left-hand side are names (or destructuring forms) for generated
 *   values.
 * 
 *   Subsequent generator expressions can refer to the previously bound
 *   values, in the same way as clojure.core/let.
 * 
 *   The body of the let can be either a value or a generator, and does
 *   the expected thing in either case. In this way let provides the
 *   functionality of both `bind` and `fmap`.
 * 
 *   Examples:
 * 
 *  (gen/let [strs (gen/not-empty (gen/list gen/string))
 *            s (gen/elements strs)]
 *    {:some-strings strs
 *     :one-of-those-strings s})
 * 
 *  ;; generates collections of "users" that have integer IDs
 *  ;; from 0...N-1, but are in a random order
 *  (gen/let [users (gen/list (gen/hash-map :name gen/string-ascii
 *                                          :age gen/nat))]
 *    (->> users
 *         (map #(assoc %2 :id %1) (range))
 *         (gen/shuffle)))
 */
clojure.test.check.generators$macros.let$ = (function clojure$test$check$generators$macros$let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8077 = arguments.length;
var i__4737__auto___8078 = (0);
while(true){
if((i__4737__auto___8078 < len__4736__auto___8077)){
args__4742__auto__.push((arguments[i__4737__auto___8078]));

var G__8079 = (i__4737__auto___8078 + (1));
i__4737__auto___8078 = G__8079;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return clojure.test.check.generators$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(clojure.test.check.generators$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw (new Error(["Assert failed: ","First arg to gen/let must be a vector of bindings.","\n","(vector? bindings)"].join('')));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw (new Error(["Assert failed: ","gen/let requires an even number of forms in binding vector","\n","(even? (count bindings))"].join('')));
}

if(cljs.core.empty_QMARK_(bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"val__8026__auto__","val__8026__auto__",-1195522220,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"val__8026__auto__","val__8026__auto__",-1195522220,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"val__8026__auto__","val__8026__auto__",-1195522220,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"val__8026__auto__","val__8026__auto__",-1195522220,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
var vec__8031 = bindings;
var seq__8032 = cljs.core.seq(vec__8031);
var first__8033 = cljs.core.first(seq__8032);
var seq__8032__$1 = cljs.core.next(seq__8032);
var binding = first__8033;
var first__8033__$1 = cljs.core.first(seq__8032__$1);
var seq__8032__$2 = cljs.core.next(seq__8032__$1);
var gen = first__8033__$1;
var more = seq__8032__$2;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.test.check.generators","let","clojure.test.check.generators/let",-2079390126,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(more)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

(clojure.test.check.generators$macros.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(clojure.test.check.generators$macros.let$.cljs$lang$applyTo = (function (seq8027){
var G__8028 = cljs.core.first(seq8027);
var seq8027__$1 = cljs.core.next(seq8027);
var G__8029 = cljs.core.first(seq8027__$1);
var seq8027__$2 = cljs.core.next(seq8027__$1);
var G__8030 = cljs.core.first(seq8027__$2);
var seq8027__$3 = cljs.core.next(seq8027__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8028,G__8029,G__8030,seq8027__$3);
}));

return null;
})()
;
(clojure.test.check.generators$macros.let$.cljs$lang$macro = true);


//# sourceMappingURL=clojure.test.check.generators$macros.js.map
