goog.provide('cljs.spec.alpha$macros');
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha$macros !== 'undefined') && (typeof cljs.spec.alpha$macros.registry_ref !== 'undefined')){
} else {
cljs.spec.alpha$macros.registry_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.alpha$macros.__GT_sym = (function cljs$spec$alpha$macros$__GT_sym(x){
if(cljs.core.map_QMARK_(x)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
cljs.spec.alpha$macros.unfn = (function cljs$spec$alpha$macros$unfn(expr){
if(((cljs.core.seq_QMARK_(expr)) && ((cljs.core.first(expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("fn*",cljs.core.name(cljs.core.first(expr)))))){
var vec__9045 = cljs.core.rest(expr);
var seq__9046 = cljs.core.seq(vec__9045);
var first__9047 = cljs.core.first(seq__9046);
var seq__9046__$1 = cljs.core.next(seq__9046);
var vec__9048 = first__9047;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9048,(0),null);
var form = seq__9046__$1;
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(clojure.walk.postwalk_replace(cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",-950237169,null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null)], 0));
} else {
return expr;
}
});
cljs.spec.alpha$macros.res = (function cljs$spec$alpha$macros$res(env,form){
if((form instanceof cljs.core.Keyword)){
return form;
} else {
if((form instanceof cljs.core.Symbol)){
var resolved = (function (){var or__4126__auto__ = cljs.spec.alpha$macros.__GT_sym(cljs.analyzer.api.resolve(env,form));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return form;
}
})();
var ns_name = cljs.core.namespace(resolved);
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((function (){var and__4115__auto__ = ns_name;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.ends_with_QMARK_(ns_name,"$macros");
} else {
return and__4115__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns_name,(0),(cljs.core.count(ns_name) - (7))):ns_name),cljs.core.name(resolved));
} else {
if(cljs.core.sequential_QMARK_(form)){
return clojure.walk.postwalk((function (p1__9055_SHARP_){
if((p1__9055_SHARP_ instanceof cljs.core.Symbol)){
return (cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2 ? cljs.spec.alpha$macros.res.cljs$core$IFn$_invoke$arity$2(env,p1__9055_SHARP_) : cljs.spec.alpha$macros.res.call(null,env,p1__9055_SHARP_));
} else {
return p1__9055_SHARP_;
}
}),cljs.spec.alpha$macros.unfn(form));
} else {
return form;

}
}
}
});
var ret__4785__auto___9560 = /**
 * a compile time res, for use in cljs/spec/alpha.cljs
 */
cljs.spec.alpha$macros.mres = (function cljs$spec$alpha$macros$mres(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,form);
});
(cljs.spec.alpha$macros.mres.cljs$lang$macro = true);

/**
 * Qualify symbol s by resolving it or using the current *ns*.
 */
cljs.spec.alpha$macros.ns_qualify = (function cljs$spec$alpha$macros$ns_qualify(env,s){
if(cljs.core.truth_(cljs.core.namespace(s))){
return cljs.spec.alpha$macros.__GT_sym((function (){var _STAR_private_var_access_nowarn_STAR__orig_val__9065 = cljs.analyzer._STAR_private_var_access_nowarn_STAR_;
var _STAR_private_var_access_nowarn_STAR__temp_val__9066 = true;
(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__temp_val__9066);

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,s);
}finally {(cljs.analyzer._STAR_private_var_access_nowarn_STAR_ = _STAR_private_var_access_nowarn_STAR__orig_val__9065);
}})());
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.alpha$macros !== 'undefined') && (typeof cljs.spec.alpha$macros._speced_vars !== 'undefined')){
} else {
cljs.spec.alpha$macros._speced_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
cljs.spec.alpha$macros.speced_vars = (function cljs$spec$alpha$macros$speced_vars(){
return cljs.core.deref(cljs.spec.alpha$macros._speced_vars);
});
var ret__4785__auto___9561 = /**
 * Given a namespace-qualified keyword or resolveable symbol k, and a
 *   spec, spec-name, predicate or regex-op makes an entry in the
 *   registry mapping k to the spec. Use nil to remove an entry in
 *   the registry for k.
 */
cljs.spec.alpha$macros.def = (function cljs$spec$alpha$macros$def(_AMPERSAND_form,_AMPERSAND_env,k,spec_form){
var k__$1 = (((k instanceof cljs.core.Symbol))?(function (){var sym = cljs.spec.alpha$macros.ns_qualify(_AMPERSAND_env,k);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.alpha$macros._speced_vars,cljs.core.conj,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(sym,cljs.core.assoc,new cljs.core.Keyword(null,"fdef-ns","fdef-ns",-1602124254),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))));

return sym;
})():k);
var form = cljs.spec.alpha$macros.res(_AMPERSAND_env,spec_form);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.spec.alpha$macros.registry_ref,(function (r){
if((form == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(r,k__$1);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,k__$1,form);
}
}));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","def-impl","cljs.spec.alpha/def-impl",-940040760,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,k__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,spec_form,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.def.cljs$lang$macro = true);

var ret__4785__auto___9576 = (function (){
/**
 * Takes a single predicate form, e.g. can be the name of a predicate,
 *   like even?, or a fn literal like #(< % 42). Note that it is not
 *   generally necessary to wrap predicates in spec when using the rest
 *   of the spec macros, only to attach a unique generator
 * 
 *   Can also be passed the result of one of the regex ops -
 *   cat, alt, *, +, ?, in which case it will return a regex-conforming
 *   spec, useful when nesting an independent regex.
 *   ---
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 * 
 *   Returns a spec.
 */
cljs.spec.alpha$macros.spec = (function cljs$spec$alpha$macros$spec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9579 = arguments.length;
var i__4737__auto___9580 = (0);
while(true){
if((i__4737__auto___9580 < len__4736__auto___9579)){
args__4742__auto__.push((arguments[i__4737__auto___9580]));

var G__9581 = (i__4737__auto___9580 + (1));
i__4737__auto___9580 = G__9581;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.spec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,p__9088){
var map__9089 = p__9088;
var map__9089__$1 = (((((!((map__9089 == null))))?(((((map__9089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9089):map__9089);
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9089__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
if(cljs.core.truth_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return null;
}
}));

(cljs.spec.alpha$macros.spec.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.spec.cljs$lang$applyTo = (function (seq9076){
var G__9077 = cljs.core.first(seq9076);
var seq9076__$1 = cljs.core.next(seq9076);
var G__9078 = cljs.core.first(seq9076__$1);
var seq9076__$2 = cljs.core.next(seq9076__$1);
var G__9079 = cljs.core.first(seq9076__$2);
var seq9076__$3 = cljs.core.next(seq9076__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9077,G__9078,G__9079,seq9076__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.spec.cljs$lang$macro = true);

var ret__4785__auto___9583 = /**
 * Takes the name of a spec/predicate-returning multimethod and a
 *   tag-restoring keyword or fn (retag).  Returns a spec that when
 *   conforming or explaining data will pass it to the multimethod to get
 *   an appropriate spec. You can e.g. use multi-spec to dynamically and
 *   extensibly associate specs with 'tagged' data (i.e. data where one
 *   of the fields indicates the shape of the rest of the structure).
 * 
 *   (defmulti mspec :tag)
 * 
 *   The methods should ignore their argument and return a predicate/spec:
 *   (defmethod mspec :int [_] (s/keys :req-un [::tag ::i]))
 * 
 *   retag is used during generation to retag generated values with
 *   matching tags. retag can either be a keyword, at which key the
 *   dispatch-tag will be assoc'ed, or a fn of generated value and
 *   dispatch-tag that should return an appropriately retagged value.
 * 
 *   Note that because the tags themselves comprise an open set,
 *   the tag key spec cannot enumerate the values, but can e.g.
 *   test for keyword?.
 * 
 *   Note also that the dispatch values of the multimethod will be
 *   included in the path, i.e. in reporting and gen overrides, even
 *   though those values are not evident in the spec.
 */
cljs.spec.alpha$macros.multi_spec = (function cljs$spec$alpha$macros$multi_spec(_AMPERSAND_form,_AMPERSAND_env,mm,retag){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","multi-spec-impl","cljs.spec.alpha/multi-spec-impl",-1581100244,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,mm),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,mm,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,retag,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.multi_spec.cljs$lang$macro = true);

var ret__4785__auto___9584 = (function (){
/**
 * Creates and returns a map validating spec. :req and :opt are both
 *   vectors of namespaced-qualified keywords. The validator will ensure
 *   the :req keys are present. The :opt keys serve as documentation and
 *   may be used by the generator.
 * 
 *   The :req key vector supports 'and' and 'or' for key groups:
 * 
 *   (s/keys :req [::x ::y (or ::secret (and ::user ::pwd))] :opt [::z])
 * 
 *   There are also -un versions of :req and :opt. These allow
 *   you to connect unqualified keys to specs.  In each case, fully
 *   qualfied keywords are passed, which name the specs, but unqualified
 *   keys (with the same name component) are expected and checked at
 *   conform-time, and generated during gen:
 * 
 *   (s/keys :req-un [:my.ns/x :my.ns/y])
 * 
 *   The above says keys :x and :y are required, and will be validated
 *   and generated by specs (if they exist) named :my.ns/x :my.ns/y
 *   respectively.
 * 
 *   In addition, the values of *all* namespace-qualified keys will be validated
 *   (and possibly destructured) by any registered specs. Note: there is
 *   no support for inline value specification, by design.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator.
 */
cljs.spec.alpha$macros.keys = (function cljs$spec$alpha$macros$keys(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9585 = arguments.length;
var i__4737__auto___9586 = (0);
while(true){
if((i__4737__auto___9586 < len__4736__auto___9585)){
args__4742__auto__.push((arguments[i__4737__auto___9586]));

var G__9587 = (i__4737__auto___9586 + (1));
i__4737__auto___9586 = G__9587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.keys.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9114){
var map__9115 = p__9114;
var map__9115__$1 = (((((!((map__9115 == null))))?(((((map__9115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9115):map__9115);
var req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9115__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9115__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9115__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var opt_un = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9115__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9115__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var unk = (function (p1__9095_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__9095_SHARP_));
});
var req_keys = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req));
var req_un_specs = cljs.core.filterv(cljs.core.keyword_QMARK_,cljs.core.flatten(req_un));
var _ = ((cljs.core.every_QMARK_((function (p1__9096_SHARP_){
if((p1__9096_SHARP_ instanceof cljs.core.Keyword)){
return cljs.core.namespace(p1__9096_SHARP_);
} else {
return false;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(req_keys,req_un_specs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opt,opt_un], 0))))?null:(function(){throw (new Error(["Assert failed: ","all keys must be namespace-qualified keywords","\n","(every? (fn* [p1__9096#] (clojure.core/and (keyword? p1__9096#) (namespace p1__9096#))) (concat req-keys req-un-specs opt opt-un))"].join('')))})());
var req_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,req_un_specs);
var req_keys__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(req_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,req_un_specs));
var opt_keys = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),cljs.core.map.cljs$core$IFn$_invoke$arity$2(unk,opt_un));
var opt_specs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(opt),opt_un);
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var parse_req = (function (rk,f){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x)),null,(1),null))], 0))));
} else {
return clojure.walk.postwalk((function (y){
if((y instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(y) : f.call(null,y)),null,(1),null))], 0))));
} else {
return y;
}
}),x);
}
}),rk);
});
var pred_exprs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))))], null);
var pred_exprs__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs,parse_req(req,cljs.core.identity));
var pred_exprs__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(pred_exprs__$1,parse_req(req_un,unk));
var keys_pred = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),pred_exprs__$2))),null,(1),null))], 0))));
var pred_exprs__$3 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,e,null,(1),null))], 0))));
}),pred_exprs__$2);
var pred_forms = clojure.walk.postwalk((function (p1__9097_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9097_SHARP_);
}),pred_exprs__$3);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-spec-impl","cljs.spec.alpha/map-spec-impl",1965627085,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"req-un","req-un",1074571008),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_un,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_un,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"gfn","gfn",791517474),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),null,(1),null)),(new cljs.core.List(null,pred_exprs__$3,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),null,(1),null)),(new cljs.core.List(null,keys_pred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_keys,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-specs","req-specs",553962313),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_specs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req","req",-326448303),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-keys","req-keys",514319221),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,req_keys__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt_specs,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt","opt",-794706369),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,opt,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)))));
}));

(cljs.spec.alpha$macros.keys.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.keys.cljs$lang$applyTo = (function (seq9099){
var G__9103 = cljs.core.first(seq9099);
var seq9099__$1 = cljs.core.next(seq9099);
var G__9104 = cljs.core.first(seq9099__$1);
var seq9099__$2 = cljs.core.next(seq9099__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9103,G__9104,seq9099__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.keys.cljs$lang$macro = true);

var ret__4785__auto___9606 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/or :even even? :small #(< % 42))
 * 
 *   Returns a destructuring spec that returns a map entry containing the
 *   key of the first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.or = (function cljs$spec$alpha$macros$or(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9607 = arguments.length;
var i__4737__auto___9608 = (0);
while(true){
if((i__4737__auto___9608 < len__4736__auto___9607)){
args__4742__auto__.push((arguments[i__4737__auto___9608]));

var G__9609 = (i__4737__auto___9608 + (1));
i__4737__auto___9608 = G__9609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9132_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9132_SHARP_);
}),pred_forms);
if(((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","spec/or expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","or-spec-impl","cljs.spec.alpha/or-spec-impl",174083152,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.or.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.or.cljs$lang$applyTo = (function (seq9133){
var G__9134 = cljs.core.first(seq9133);
var seq9133__$1 = cljs.core.next(seq9133);
var G__9135 = cljs.core.first(seq9133__$1);
var seq9133__$2 = cljs.core.next(seq9133__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9134,G__9135,seq9133__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.or.cljs$lang$macro = true);

var ret__4785__auto___9617 = (function (){
/**
 * Takes predicate/spec-forms, e.g.
 * 
 *   (s/and even? #(< % 42))
 * 
 *   Returns a spec that returns the conformed value. Successive
 *   conformed values propagate through rest of predicates.
 */
cljs.spec.alpha$macros.and = (function cljs$spec$alpha$macros$and(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9618 = arguments.length;
var i__4737__auto___9619 = (0);
while(true){
if((i__4737__auto___9619 < len__4736__auto___9618)){
args__4742__auto__.push((arguments[i__4737__auto___9619]));

var G__9621 = (i__4737__auto___9619 + (1));
i__4737__auto___9619 = G__9621;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and-spec-impl","cljs.spec.alpha/and-spec-impl",-492178340,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9139_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9139_SHARP_);
}),pred_forms),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.and.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.and.cljs$lang$applyTo = (function (seq9143){
var G__9144 = cljs.core.first(seq9143);
var seq9143__$1 = cljs.core.next(seq9143);
var G__9146 = cljs.core.first(seq9143__$1);
var seq9143__$2 = cljs.core.next(seq9143__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9144,G__9146,seq9143__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.and.cljs$lang$macro = true);

cljs.spec.alpha$macros.res_kind = (function cljs$spec$alpha$macros$res_kind(env,opts){
var map__9164 = opts;
var map__9164__$1 = (((((!((map__9164 == null))))?(((((map__9164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9164):map__9164);
var mopts = map__9164__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9164__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(kind)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mopts,new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.spec.alpha$macros.res(env,kind)):mopts)], 0));
});
var ret__4785__auto___9626 = (function (){
/**
 * takes a pred and validates collection elements against that pred.
 * 
 *   Note that 'every' does not do exhaustive checking, rather it samples
 *   *coll-check-limit* elements. Nor (as a result) does it do any
 *   conforming of elements. 'explain' will report at most *coll-error-limit*
 *   problems.  Thus 'every' should be suitable for potentially large
 *   collections.
 * 
 *   Takes several kwargs options that further constrain the collection:
 * 
 *   :kind - a pred that the collection type must satisfy, e.g. vector?
 *        (default nil) Note that if :kind is specified and :into is
 *        not, this pred must generate in order for every to generate.
 *   :count - specifies coll has exactly this count (default nil)
 *   :min-count, :max-count - coll has count (<= min-count count max-count) (defaults nil)
 *   :distinct - all the elements are distinct (default nil)
 * 
 *   And additional args that control gen
 * 
 *   :gen-max - the maximum coll size to generate (default 20)
 *   :into - one of [], (), {}, #{} - the default collection to generate into
 *    (default same as :kind if supplied, else []
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args that
 *   returns a test.check generator
 * 
 *   See also - coll-of, every-kv
 */
cljs.spec.alpha$macros.every = (function cljs$spec$alpha$macros$every(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9627 = arguments.length;
var i__4737__auto___9628 = (0);
while(true){
if((i__4737__auto___9628 < len__4736__auto___9627)){
args__4742__auto__.push((arguments[i__4737__auto___9628]));

var G__9629 = (i__4737__auto___9628 + (1));
i__4737__auto___9628 = G__9629;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.every.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,p__9176){
var map__9177 = p__9176;
var map__9177__$1 = (((((!((map__9177 == null))))?(((((map__9177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9177):map__9177);
var opts = map__9177__$1;
var max_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var gen_max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445));
var into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"into","into",-150836029));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var distinct = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var gen_into = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"gen-into","gen-into",-1047890542));
var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9177__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var desc = new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911).cljs$core$IFn$_invoke$arity$1(opts);
var nopts = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(opts,new cljs.core.Keyword(null,"gen","gen",142575302),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911)], 0)),new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(opts)),null,(1),null))))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),(function (){var or__4126__auto__ = desc;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0)))),null,(1),null)))));
}
})()], 0));
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var cpreds = (function (){var G__9200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,(function (){var or__4126__auto__ = kind;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})(),(new cljs.core.List(null,gx,null,(1),null)),(2),null))], null);
var G__9200__$1 = (cljs.core.truth_(count)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__9200,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",355256728,null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null))], 0))))):G__9200);
var G__9200__$2 = (cljs.core.truth_((function (){var or__4126__auto__ = min_count;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return max_count;
}
})())?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__9200__$1,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",355256728,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","MAX_INT","cljs.spec.alpha/MAX_INT",1315428963,null),null,(1),null))], 0)))),null,(1),null))], 0))))):G__9200__$1);
if(cljs.core.truth_(distinct)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__9200__$2,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","distinct?","cljs.core/distinct?",-1285807788,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gx,null,(1),null))], 0)))),null,(1),null))], 0)))));
} else {
return G__9200__$2;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-impl","cljs.spec.alpha/every-impl",30419907,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nopts,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gx,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cpreds))),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.every.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.every.cljs$lang$applyTo = (function (seq9168){
var G__9169 = cljs.core.first(seq9168);
var seq9168__$1 = cljs.core.next(seq9168);
var G__9170 = cljs.core.first(seq9168__$1);
var seq9168__$2 = cljs.core.next(seq9168__$1);
var G__9171 = cljs.core.first(seq9168__$2);
var seq9168__$3 = cljs.core.next(seq9168__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9169,G__9170,G__9171,seq9168__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.every.cljs$lang$macro = true);

var ret__4785__auto___9649 = (function (){
/**
 * like 'every' but takes separate key and val preds and works on associative collections.
 * 
 *   Same options as 'every', :into defaults to {}
 * 
 *   See also - map-of
 */
cljs.spec.alpha$macros.every_kv = (function cljs$spec$alpha$macros$every_kv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9650 = arguments.length;
var i__4737__auto___9651 = (0);
while(true){
if((i__4737__auto___9651 < len__4736__auto___9650)){
args__4742__auto__.push((arguments[i__4737__auto___9651]));

var G__9652 = (i__4737__auto___9651 + (1));
i__4737__auto___9651 = G__9652;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",-133428374,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred),null,(1),null)),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,vpred,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"i__9222__auto__","i__9222__auto__",1658866894,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__9223__auto__","v__9223__auto__",2013368580,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__9223__auto__","v__9223__auto__",2013368580,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"into","into",-150836029),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
}));

(cljs.spec.alpha$macros.every_kv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.spec.alpha$macros.every_kv.cljs$lang$applyTo = (function (seq9224){
var G__9225 = cljs.core.first(seq9224);
var seq9224__$1 = cljs.core.next(seq9224);
var G__9226 = cljs.core.first(seq9224__$1);
var seq9224__$2 = cljs.core.next(seq9224__$1);
var G__9227 = cljs.core.first(seq9224__$2);
var seq9224__$3 = cljs.core.next(seq9224__$2);
var G__9228 = cljs.core.first(seq9224__$3);
var seq9224__$4 = cljs.core.next(seq9224__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9225,G__9226,G__9227,G__9228,seq9224__$4);
}));

return null;
})()
;
(cljs.spec.alpha$macros.every_kv.cljs$lang$macro = true);

var ret__4785__auto___9667 = (function (){
/**
 * Returns a spec for a collection of items satisfying pred. Unlike
 *   generator will fill an empty init-coll.
 * 
 *   Same options as 'every'. conform will produce a collection
 *   corresponding to :into if supplied, else will match the input collection,
 *   avoiding rebuilding when possible.
 * 
 *   Same options as 'every'.
 * 
 *   See also - every, map-of
 */
cljs.spec.alpha$macros.coll_of = (function cljs$spec$alpha$macros$coll_of(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9668 = arguments.length;
var i__4737__auto___9669 = (0);
while(true){
if((i__4737__auto___9669 < len__4736__auto___9668)){
args__4742__auto__.push((arguments[i__4737__auto___9669]));

var G__9670 = (i__4737__auto___9669 + (1));
i__4737__auto___9669 = G__9670;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every","cljs.spec.alpha/every",123912744,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
}));

(cljs.spec.alpha$macros.coll_of.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.coll_of.cljs$lang$applyTo = (function (seq9262){
var G__9263 = cljs.core.first(seq9262);
var seq9262__$1 = cljs.core.next(seq9262);
var G__9264 = cljs.core.first(seq9262__$1);
var seq9262__$2 = cljs.core.next(seq9262__$1);
var G__9265 = cljs.core.first(seq9262__$2);
var seq9262__$3 = cljs.core.next(seq9262__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9263,G__9264,G__9265,seq9262__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.coll_of.cljs$lang$macro = true);

var ret__4785__auto___9681 = (function (){
/**
 * Returns a spec for a map whose keys satisfy kpred and vals satisfy
 *   vpred. Unlike 'every-kv', map-of will exhaustively conform every
 *   value.
 * 
 *   Same options as 'every', :kind defaults to map?, with the addition of:
 * 
 *   :conform-keys - conform keys as well as values (default false)
 * 
 *   See also - every-kv
 */
cljs.spec.alpha$macros.map_of = (function cljs$spec$alpha$macros$map_of(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9685 = arguments.length;
var i__4737__auto___9686 = (0);
while(true){
if((i__4737__auto___9686 < len__4736__auto___9685)){
args__4742__auto__.push((arguments[i__4737__auto___9686]));

var G__9687 = (i__4737__auto___9686 + (1));
i__4737__auto___9686 = G__9687;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
var desc = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,kpred),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,vpred),null,(1),null)),cljs.spec.alpha$macros.res_kind(_AMPERSAND_env,opts)], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","every-kv","cljs.spec.alpha/every-kv",-133428374,null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,vpred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"kind","kind",-717265803),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,desc,null,(1),null))))),null,(1),null)),opts], 0))));
}));

(cljs.spec.alpha$macros.map_of.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.spec.alpha$macros.map_of.cljs$lang$applyTo = (function (seq9275){
var G__9276 = cljs.core.first(seq9275);
var seq9275__$1 = cljs.core.next(seq9275);
var G__9277 = cljs.core.first(seq9275__$1);
var seq9275__$2 = cljs.core.next(seq9275__$1);
var G__9278 = cljs.core.first(seq9275__$2);
var seq9275__$3 = cljs.core.next(seq9275__$2);
var G__9279 = cljs.core.first(seq9275__$3);
var seq9275__$4 = cljs.core.next(seq9275__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9276,G__9277,G__9278,G__9279,seq9275__$4);
}));

return null;
})()
;
(cljs.spec.alpha$macros.map_of.cljs$lang$macro = true);

var ret__4785__auto___9692 = /**
 * Returns a regex op that matches zero or more values matching
 *   pred. Produces a vector of matches iff there is at least one match
 */
cljs.spec.alpha$macros._STAR_ = (function cljs$spec$alpha$macros$_STAR_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","rep-impl","cljs.spec.alpha/rep-impl",272857093,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_form,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros._STAR_.cljs$lang$macro = true);

var ret__4785__auto___9693 = /**
 * Returns a regex op that matches one or more values matching
 *   pred. Produces a vector of matches
 */
cljs.spec.alpha$macros._PLUS_ = (function cljs$spec$alpha$macros$_PLUS_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","rep+impl","cljs.spec.alpha/rep+impl",1883292654,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_form,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros._PLUS_.cljs$lang$macro = true);

var ret__4785__auto___9694 = /**
 * Returns a regex op that matches zero or one value matching
 *   pred. Produces a single value (not a collection) if matched.
 */
cljs.spec.alpha$macros._QMARK_ = (function cljs$spec$alpha$macros$_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","maybe-impl","cljs.spec.alpha/maybe-impl",1618854020,null),null,(1),null)),(new cljs.core.List(null,pred_form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,pred_form),null,(1),null))))),null,(1),null))], 0))));
});
(cljs.spec.alpha$macros._QMARK_.cljs$lang$macro = true);

var ret__4785__auto___9695 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/alt :even even? :small #(< % 42))
 * 
 *   Returns a regex op that returns a map entry containing the key of the
 *   first matching pred and the corresponding value. Thus the
 *   'key' and 'val' functions can be used to refer generically to the
 *   components of the tagged return.
 */
cljs.spec.alpha$macros.alt = (function cljs$spec$alpha$macros$alt(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9700 = arguments.length;
var i__4737__auto___9701 = (0);
while(true){
if((i__4737__auto___9701 < len__4736__auto___9700)){
args__4742__auto__.push((arguments[i__4737__auto___9701]));

var G__9702 = (i__4737__auto___9701 + (1));
i__4737__auto___9701 = G__9702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.alt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9310_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9310_SHARP_);
}),pred_forms);
if(((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","alt expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","alt-impl","cljs.spec.alpha/alt-impl",1852741609,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.alt.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.alt.cljs$lang$applyTo = (function (seq9316){
var G__9317 = cljs.core.first(seq9316);
var seq9316__$1 = cljs.core.next(seq9316);
var G__9318 = cljs.core.first(seq9316__$1);
var seq9316__$2 = cljs.core.next(seq9316__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9317,G__9318,seq9316__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.alt.cljs$lang$macro = true);

var ret__4785__auto___9703 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/cat :e even? :o odd?)
 * 
 *   Returns a regex op that matches (all) values in sequence, returning a map
 *   containing the keys of each pred and the corresponding value.
 */
cljs.spec.alpha$macros.cat = (function cljs$spec$alpha$macros$cat(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9705 = arguments.length;
var i__4737__auto___9706 = (0);
while(true){
if((i__4737__auto___9706 < len__4736__auto___9705)){
args__4742__auto__.push((arguments[i__4737__auto___9706]));

var G__9708 = (i__4737__auto___9706 + (1));
i__4737__auto___9706 = G__9708;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),key_pred_forms);
var keys = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
var pf = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9325_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9325_SHARP_);
}),pred_forms);
if(((cljs.core.even_QMARK_(cljs.core.count(key_pred_forms))) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","cat expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","cat-impl","cljs.spec.alpha/cat-impl",1256350867,null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.cat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.cat.cljs$lang$applyTo = (function (seq9326){
var G__9327 = cljs.core.first(seq9326);
var seq9326__$1 = cljs.core.next(seq9326);
var G__9328 = cljs.core.first(seq9326__$1);
var seq9326__$2 = cljs.core.next(seq9326__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9327,G__9328,seq9326__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.cat.cljs$lang$macro = true);

var ret__4785__auto___9716 = (function (){
/**
 * takes a regex op re, and predicates. Returns a regex-op that consumes
 *   input as per re but subjects the resulting value to the
 *   conjunction of the predicates, and any conforming they might perform.
 */
cljs.spec.alpha$macros._AMPERSAND_ = (function cljs$spec$alpha$macros$_AMPERSAND_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9717 = arguments.length;
var i__4737__auto___9718 = (0);
while(true){
if((i__4737__auto___9718 < len__4736__auto___9717)){
args__4742__auto__.push((arguments[i__4737__auto___9718]));

var G__9719 = (i__4737__auto___9718 + (1));
i__4737__auto___9718 = G__9719;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,re,preds){
var pv = cljs.core.vec(preds);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","amp-impl","cljs.spec.alpha/amp-impl",1419577313,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,re),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,pv,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9329_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9329_SHARP_);
}),pv),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$applyTo = (function (seq9330){
var G__9331 = cljs.core.first(seq9330);
var seq9330__$1 = cljs.core.next(seq9330);
var G__9332 = cljs.core.first(seq9330__$1);
var seq9330__$2 = cljs.core.next(seq9330__$1);
var G__9333 = cljs.core.first(seq9330__$2);
var seq9330__$3 = cljs.core.next(seq9330__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9331,G__9332,G__9333,seq9330__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros._AMPERSAND_.cljs$lang$macro = true);

var ret__4785__auto___9721 = (function (){
/**
 * takes a predicate function with the semantics of conform i.e. it should return either a
 *   (possibly converted) value or :cljs.spec.alpha/invalid, and returns a
 *   spec that uses it as a predicate/conformer. Optionally takes a
 *   second fn that does unform of result of first
 */
cljs.spec.alpha$macros.conformer = (function cljs$spec$alpha$macros$conformer(var_args){
var G__9356 = arguments.length;
switch (G__9356) {
case 3:
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,f),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.conformer.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,unf){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec-impl","cljs.spec.alpha/spec-impl",69764672,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","conformer","cljs.spec.alpha/conformer",2140085535,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,f),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.spec.alpha$macros.res(_AMPERSAND_env,unf),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,unf,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.conformer.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.spec.alpha$macros.conformer.cljs$lang$macro = true);

var ret__4785__auto___9728 = (function (){
/**
 * takes :args :ret and (optional) :fn kwargs whose values are preds
 *   and returns a spec whose conform/explain take a fn and validates it
 *   using generative testing. The conformed value is always the fn itself.
 * 
 *   See 'fdef' for a single operation that creates an fspec and
 *   registers it, as well as a full description of :args, :ret and :fn
 * 
 *   fspecs can generate functions that validate the arguments and
 *   fabricate a return value compliant with the :ret spec, ignoring
 *   the :fn spec if present.
 * 
 *   Optionally takes :gen generator-fn, which must be a fn of no args
 *   that returns a test.check generator.
 */
cljs.spec.alpha$macros.fspec = (function cljs$spec$alpha$macros$fspec(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9729 = arguments.length;
var i__4737__auto___9730 = (0);
while(true){
if((i__4737__auto___9730 < len__4736__auto___9729)){
args__4742__auto__.push((arguments[i__4737__auto___9730]));

var G__9731 = (i__4737__auto___9730 + (1));
i__4737__auto___9730 = G__9731;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.fspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9369){
var map__9370 = p__9369;
var map__9370__$1 = (((((!((map__9370 == null))))?(((((map__9370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9370):map__9370);
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9370__$1,new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var gen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"gen","gen",142575302));
var env = _AMPERSAND_env;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec-impl","cljs.spec.alpha/fspec-impl",-1748020611,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,args),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,ret),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,fn,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.alpha$macros.res(env,fn),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.fspec.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.fspec.cljs$lang$applyTo = (function (seq9364){
var G__9365 = cljs.core.first(seq9364);
var seq9364__$1 = cljs.core.next(seq9364);
var G__9366 = cljs.core.first(seq9364__$1);
var seq9364__$2 = cljs.core.next(seq9364__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9365,G__9366,seq9364__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.fspec.cljs$lang$macro = true);

var ret__4785__auto___9735 = (function (){
/**
 * takes one or more preds and returns a spec for a tuple, a vector
 *   where each element conforms to the corresponding pred. Each element
 *   will be referred to in paths using its ordinal.
 */
cljs.spec.alpha$macros.tuple = (function cljs$spec$alpha$macros$tuple(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9740 = arguments.length;
var i__4737__auto___9741 = (0);
while(true){
if((i__4737__auto___9741 < len__4736__auto___9740)){
args__4742__auto__.push((arguments[i__4737__auto___9741]));

var G__9742 = (i__4737__auto___9741 + (1));
i__4737__auto___9741 = G__9742;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,preds){
if((!(cljs.core.empty_QMARK_(preds)))){
} else {
throw (new Error("Assert failed: (not (empty? preds))"));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","tuple-impl","cljs.spec.alpha/tuple-impl",113790282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9377_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9377_SHARP_);
}),preds),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(preds),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.tuple.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.tuple.cljs$lang$applyTo = (function (seq9389){
var G__9390 = cljs.core.first(seq9389);
var seq9389__$1 = cljs.core.next(seq9389);
var G__9391 = cljs.core.first(seq9389__$1);
var seq9389__$2 = cljs.core.next(seq9389__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9390,G__9391,seq9389__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.tuple.cljs$lang$macro = true);

var ret__4785__auto___9743 = (function (){
/**
 * Takes a symbol naming a function, and one or more of the following:
 * 
 *   :args A regex spec for the function arguments as they were a list to be
 *  passed to apply - in this way, a single spec can handle functions with
 *  multiple arities
 *   :ret A spec for the function's return value
 *   :fn A spec of the relationship between args and ret - the
 *  value passed is {:args conformed-args :ret conformed-ret} and is
 *  expected to contain predicates that relate those values
 * 
 *   Qualifies fn-sym with resolve, or using *ns* if no resolution found.
 *   Registers an fspec in the global registry, where it can be retrieved
 *   by calling get-spec with the var or fully-qualified symbol.
 * 
 *   Once registered, function specs are included in doc, checked by
 *   instrument, tested by the runner cljs.spec.test.alpha/check, and (if
 *   a macro) used to explain errors during macroexpansion.
 * 
 *   Note that :fn specs require the presence of :args and :ret specs to
 *   conform values, and so :fn specs will be ignored if :args or :ret
 *   are missing.
 * 
 *   Returns the qualified fn-sym.
 * 
 *   For example, to register function specs for the symbol function:
 * 
 *   (s/fdef cljs.core/symbol
 *  :args (s/alt :separate (s/cat :ns string? :n string?)
 *               :str string?
 *               :sym symbol?)
 *  :ret symbol?)
 */
cljs.spec.alpha$macros.fdef = (function cljs$spec$alpha$macros$fdef(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9745 = arguments.length;
var i__4737__auto___9746 = (0);
while(true){
if((i__4737__auto___9746 < len__4736__auto___9745)){
args__4742__auto__.push((arguments[i__4737__auto___9746]));

var G__9747 = (i__4737__auto___9746 + (1));
i__4737__auto___9746 = G__9747;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.fdef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fn_sym,specs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","def","cljs.spec.alpha/def",1122970404,null),null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),null,(1),null)),specs))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.fdef.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.spec.alpha$macros.fdef.cljs$lang$applyTo = (function (seq9392){
var G__9393 = cljs.core.first(seq9392);
var seq9392__$1 = cljs.core.next(seq9392);
var G__9394 = cljs.core.first(seq9392__$1);
var seq9392__$2 = cljs.core.next(seq9392__$1);
var G__9395 = cljs.core.first(seq9392__$2);
var seq9392__$3 = cljs.core.next(seq9392__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9393,G__9394,G__9395,seq9392__$3);
}));

return null;
})()
;
(cljs.spec.alpha$macros.fdef.cljs$lang$macro = true);

var ret__4785__auto___9748 = (function (){
/**
 * takes the same arguments as spec/keys and returns a regex op that matches sequences of key/values,
 *   converts them into a map, and conforms that map with a corresponding
 *   spec/keys call:
 * 
 *   user=> (s/conform (s/keys :req-un [::a ::c]) {:a 1 :c 2})
 *   {:a 1, :c 2}
 *   user=> (s/conform (s/keys* :req-un [::a ::c]) [:a 1 :c 2])
 *   {:a 1, :c 2}
 * 
 *   the resulting regex op can be composed into a larger regex:
 * 
 *   user=> (s/conform (s/cat :i1 integer? :m (s/keys* :req-un [::a ::c]) :i2 integer?) [42 :a 1 :c 2 :d 4 99])
 *   {:i1 42, :m {:a 1, :c 2, :d 4}, :i2 99}
 */
cljs.spec.alpha$macros.keys_STAR_ = (function cljs$spec$alpha$macros$keys_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9749 = arguments.length;
var i__4737__auto___9750 = (0);
while(true){
if((i__4737__auto___9750 < len__4736__auto___9749)){
args__4742__auto__.push((arguments[i__4737__auto___9750]));

var G__9752 = (i__4737__auto___9750 + (1));
i__4737__auto___9750 = G__9752;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kspecs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__9425__auto__","mspec__9425__auto__",1018108298,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),null,(1),null)),kspecs))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","with-gen","cljs.spec.alpha/with-gen",1999495028,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","&","cljs.spec.alpha/&",1635809823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",-1238084288,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","k","cljs.spec.alpha/k",-1602615178),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","v","cljs.spec.alpha/v",552625740),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","kvs->map","cljs.spec.alpha/kvs->map",579713455),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__9425__auto__","mspec__9425__auto__",1018108298,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",1863255061,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"m__9427__auto__","m__9427__auto__",-1982993047,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__9427__auto__","m__9427__auto__",-1982993047,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__9425__auto__","mspec__9425__auto__",1018108298,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.keys_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.keys_STAR_.cljs$lang$applyTo = (function (seq9429){
var G__9430 = cljs.core.first(seq9429);
var seq9429__$1 = cljs.core.next(seq9429);
var G__9431 = cljs.core.first(seq9429__$1);
var seq9429__$2 = cljs.core.next(seq9429__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9430,G__9431,seq9429__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.keys_STAR_.cljs$lang$macro = true);

var ret__4785__auto___9758 = /**
 * returns a spec that accepts nil and values satisfiying pred
 */
cljs.spec.alpha$macros.nilable = (function cljs$spec$alpha$macros$nilable(_AMPERSAND_form,_AMPERSAND_env,pred){
var pf = cljs.spec.alpha$macros.res(_AMPERSAND_env,pred);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","nilable-impl","cljs.spec.alpha/nilable-impl",1785777257,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.nilable.cljs$lang$macro = true);

var ret__4785__auto___9762 = /**
 * Returns a spec that validates insts in the range from start
 *   (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.inst_in = (function cljs$spec$alpha$macros$inst_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"st__9461__auto__","st__9461__auto__",1932781832,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",-515575156,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"et__9462__auto__","et__9462__auto__",-1132567896,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",-515575156,null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__9463__auto__","mkdate__9463__auto__",-2095859518,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"d__9464__auto__","d__9464__auto__",1951176069,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"d__9464__auto__","d__9464__auto__",1951176069,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",1216133710,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9460__9465__auto__","p1__9460__9465__auto__",542326707,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","inst-in-range?","cljs.spec.alpha/inst-in-range?",-1154968958,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9460__9465__auto__","p1__9460__9465__auto__",542326707,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","fmap","cljs.spec.gen.alpha/fmap",1863255061,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__9463__auto__","mkdate__9463__auto__",-2095859518,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",-227289663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__9461__auto__","st__9461__auto__",1932781832,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"et__9462__auto__","et__9462__auto__",-1132567896,null),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.inst_in.cljs$lang$macro = true);

var ret__4785__auto___9771 = /**
 * Returns a spec that validates fixed precision integers in the
 *   range from start (inclusive) to end (exclusive).
 */
cljs.spec.alpha$macros.int_in = (function cljs$spec$alpha$macros$int_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9474__9475__auto__","p1__9474__9475__auto__",-458278776,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","int-in-range?","cljs.spec.alpha/int-in-range?",92650900,null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9474__9475__auto__","p1__9474__9475__auto__",-458278776,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","large-integer*","cljs.spec.gen.alpha/large-integer*",-227289663,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",444991522),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",61366548),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null))))),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.int_in.cljs$lang$macro = true);

var ret__4785__auto___9785 = (function (){
/**
 * Specs a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity allowed (default true)
 *  :NaN?      - whether NaN allowed (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 */
cljs.spec.alpha$macros.double_in = (function cljs$spec$alpha$macros$double_in(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9786 = arguments.length;
var i__4737__auto___9787 = (0);
while(true){
if((i__4737__auto___9787 < len__4736__auto___9786)){
args__4742__auto__.push((arguments[i__4737__auto___9787]));

var G__9788 = (i__4737__auto___9787 + (1));
i__4737__auto___9787 = G__9788;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.double_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__9494){
var map__9495 = p__9494;
var map__9495__$1 = (((((!((map__9495 == null))))?(((((map__9495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9495):map__9495);
var m = map__9495__$1;
var infinite_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9495__$1,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),true);
var NaN_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__9495__$1,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),true);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9495__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9495__$1,new cljs.core.Keyword(null,"max","max",61366548));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","spec","cljs.spec.alpha/spec",-707298191,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",1757455529,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(infinite_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__9481#","p1__9481#",831337653,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"infinite?","infinite?",-377355081,null),new cljs.core.Symbol(null,"p1__9481#","p1__9481#",831337653,null))))], null)),(cljs.core.truth_(NaN_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__9482#","p1__9482#",1634917377,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol("js","isNaN","js/isNaN",74901299,null),new cljs.core.Symbol(null,"p1__9482#","p1__9482#",1634917377,null))))], null)),(cljs.core.truth_(max)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9483__9484__auto__","p1__9483__9484__auto__",-253882086,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9483__9484__auto__","p1__9483__9484__auto__",-253882086,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,max,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))):null),(cljs.core.truth_(min)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9485__9486__auto__","p1__9485__9486__auto__",822415397,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,min,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__9485__9486__auto__","p1__9485__9486__auto__",822415397,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))):null)], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",142575302),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","double*","cljs.spec.gen.alpha/double*",416548942,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.double_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.double_in.cljs$lang$applyTo = (function (seq9487){
var G__9488 = cljs.core.first(seq9487);
var seq9487__$1 = cljs.core.next(seq9487);
var G__9489 = cljs.core.first(seq9487__$1);
var seq9487__$2 = cljs.core.next(seq9487__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9488,G__9489,seq9487__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.double_in.cljs$lang$macro = true);

var ret__4785__auto___9802 = (function (){
/**
 * Takes map-validating specs (e.g. 'keys' specs) and
 *   returns a spec that returns a conformed map satisfying all of the
 *   specs.  Successive conformed values propagate through rest of
 *   predicates. Unlike 'and', merge can generate maps satisfying the
 *   union of the predicates.
 */
cljs.spec.alpha$macros.merge = (function cljs$spec$alpha$macros$merge(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9803 = arguments.length;
var i__4737__auto___9804 = (0);
while(true){
if((i__4737__auto___9804 < len__4736__auto___9803)){
args__4742__auto__.push((arguments[i__4737__auto___9804]));

var G__9805 = (i__4737__auto___9804 + (1));
i__4737__auto___9804 = G__9805;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.spec.alpha$macros.merge.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","merge-spec-impl","cljs.spec.alpha/merge-spec-impl",-1254890813,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__9517_SHARP_){
return cljs.spec.alpha$macros.res(_AMPERSAND_env,p1__9517_SHARP_);
}),pred_forms),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.merge.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.alpha$macros.merge.cljs$lang$applyTo = (function (seq9518){
var G__9519 = cljs.core.first(seq9518);
var seq9518__$1 = cljs.core.next(seq9518);
var G__9520 = cljs.core.first(seq9518__$1);
var seq9518__$2 = cljs.core.next(seq9518__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9519,G__9520,seq9518__$2);
}));

return null;
})()
;
(cljs.spec.alpha$macros.merge.cljs$lang$macro = true);

var ret__4785__auto___9809 = (function (){
/**
 * exercises the fn named by sym (a symbol) by applying it to
 *   n (default 10) generated samples of its args spec. When fspec is
 *   supplied its arg spec is used, and sym-or-f can be a fn.  Returns a
 *   sequence of tuples of [args ret]. 
 */
cljs.spec.alpha$macros.exercise_fn = (function cljs$spec$alpha$macros$exercise_fn(var_args){
var G__9539 = arguments.length;
switch (G__9539) {
case 3:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",295872941,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(10),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","exercise-fn","cljs.spec.alpha/exercise-fn",295872941,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n,fspec){
var sym__$1 = (function (){var G__9543 = sym;
if(((cljs.core.sequential_QMARK_(sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))))){
return cljs.core.second(G__9543);
} else {
return G__9543;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__9529__auto__","fspec__9529__auto__",-760350560,null),null,(1),null)),(new cljs.core.List(null,((cljs.core.not(fspec))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","get-spec","cljs.spec.alpha/get-spec",785931985,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(_AMPERSAND_env,sym__$1)),null,(1),null))))),null,(1),null))))):fspec),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9530__auto__","f__9530__auto__",-1996171483,null),null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"arg-spec__9531__auto__","arg-spec__9531__auto__",-389236980,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__9529__auto__","fspec__9529__auto__",-760350560,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__9529__auto__","fspec__9529__auto__",-760350560,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",-89947499,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__9532__auto__","args__9532__auto__",567410754,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","sample","cljs.spec.gen.alpha/sample",-2084840585,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","gen","cljs.spec.alpha/gen",147877780,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arg-spec__9531__auto__","arg-spec__9531__auto__",-389236980,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__9532__auto__","args__9532__auto__",567410754,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__9530__auto__","f__9530__auto__",-1996171483,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__9532__auto__","args__9532__auto__",567410754,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"No :args spec found, can't generate",null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.alpha$macros.exercise_fn.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(cljs.spec.alpha$macros.exercise_fn.cljs$lang$macro = true);

var ret__4785__auto___9830 = cljs.spec.alpha$macros.init_compile_asserts = (function cljs$spec$alpha$macros$init_compile_asserts(_AMPERSAND_form,_AMPERSAND_env){
var compile_asserts = cljs.core.not(new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))));
return compile_asserts;
});
(cljs.spec.alpha$macros.init_compile_asserts.cljs$lang$macro = true);

var ret__4785__auto___9831 = /**
 * spec-checking assert expression. Returns x if x is valid? according
 * to spec, else throws an error with explain-data plus ::failure of
 * :assertion-failed.
 * Can be disabled at either compile time or runtime:
 * If *compile-asserts* is false at compile time, compiles to x. Defaults
 * to the negation value of the ':elide-asserts' compiler option, or true if
 * not set.
 * If (check-asserts?) is false at runtime, always returns x. Defaults to
 * value of 'cljs.spec.alpha/*runtime-asserts*', or false if not set. You can
 * toggle check-asserts? with (check-asserts bool).
 */
cljs.spec.alpha$macros.assert = (function cljs$spec$alpha$macros$assert(_AMPERSAND_form,_AMPERSAND_env,spec,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*compile-asserts*","cljs.spec.alpha/*compile-asserts*",-1808061440,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","assert*","cljs.spec.alpha/assert*",464381070,null),null,(1),null)),(new cljs.core.List(null,spec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))));
});
(cljs.spec.alpha$macros.assert.cljs$lang$macro = true);


//# sourceMappingURL=cljs.spec.alpha$macros.js.map
