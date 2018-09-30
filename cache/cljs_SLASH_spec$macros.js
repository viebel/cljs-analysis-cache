// Compiled by ClojureScript 1.10.339
goog.provide("cljs.spec$macros");
if((typeof cljs !== 'undefined') && (typeof cljs.spec$macros !== 'undefined') && (typeof cljs.spec$macros.registry_ref !== 'undefined')){
} else {
cljs.spec$macros.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec$macros.__GT_sym = (function cljs$spec$macros$__GT_sym(x){
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
cljs.spec$macros.unfn = (function cljs$spec$macros$unfn(expr){
if(((cljs.core.seq_QMARK_.call(null,expr)) && ((cljs.core.first.call(null,expr) instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"fn*",cljs.core.name.call(null,cljs.core.first.call(null,expr)))))){
var vec__265 = cljs.core.rest.call(null,expr);
var seq__266 = cljs.core.seq.call(null,vec__265);
var first__267 = cljs.core.first.call(null,seq__266);
var seq__266__$1 = cljs.core.next.call(null,seq__266);
var vec__268 = first__267;
var s = cljs.core.nth.call(null,vec__268,(0),null);
var form = seq__266__$1;
return cljs.core.conj.call(null,clojure.walk.postwalk_replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([s,new cljs.core.Symbol(null,"%","%",(-950237169),null)]),form),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",(-950237169),null)], null),new cljs.core.Symbol(null,"fn","fn",(465265323),null));
} else {
return expr;
}
});
cljs.spec$macros.res = (function cljs$spec$macros$res(env,form){
if((form instanceof cljs.core.Keyword)){
return form;
} else {
if((form instanceof cljs.core.Symbol)){
var or__8070__auto__ = cljs.spec$macros.__GT_sym.call(null,cljs.analyzer.api.resolve.call(null,env,form));
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return form;
}
} else {
if(cljs.core.sequential_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (p1__7_SHARP_){
if((p1__7_SHARP_ instanceof cljs.core.Symbol)){
return cljs.spec$macros.res.call(null,env,p1__7_SHARP_);
} else {
return p1__7_SHARP_;
}
}),cljs.spec$macros.unfn.call(null,form));
} else {
return form;

}
}
}
});
/**
 * Qualify symbol s by resolving it or using the current *ns*.
 */
cljs.spec$macros.ns_qualify = (function cljs$spec$macros$ns_qualify(env,s){
if(cljs.core.truth_(cljs.core.namespace.call(null,s))){
var v = cljs.analyzer.api.resolve.call(null,env,s);
if(cljs.core.truth_(v)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Unable to resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')),"\n","v"].join('')));
}

return cljs.spec$macros.__GT_sym.call(null,v);
} else {
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
}
});
var ret__9167__auto___271 = /**
 * Given a namespace-qualified keyword or resolveable symbol k, and a spec,
 * spec-name, predicate or regex-op makes an entry in the registry mapping k to
 * the spec
 */
cljs.spec$macros.def = (function cljs$spec$macros$def(_AMPERSAND_form,_AMPERSAND_env,k,spec_form){
var k__$1 = (((k instanceof cljs.core.Symbol))?cljs.spec$macros.ns_qualify.call(null,_AMPERSAND_env,k):k);
var form = cljs.spec$macros.res.call(null,_AMPERSAND_env,spec_form);
cljs.core.swap_BANG_.call(null,cljs.spec$macros.registry_ref,cljs.core.assoc,k__$1,form);

return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","def-impl","cljs.spec/def-impl",(2098881912),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,k__$1,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,spec_form,null,(1),null))));
});
cljs.spec$macros.def.cljs$lang$macro = true;

var ret__9167__auto___279 = (function (){
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
cljs.spec$macros.spec = (function cljs$spec$macros$spec(var_args){
var args__9144__auto__ = [];
var len__9141__auto___280 = arguments.length;
var i__9142__auto___281 = (0);
while(true){
if((i__9142__auto___281 < len__9141__auto___280)){
args__9144__auto__.push((arguments[i__9142__auto___281]));

var G__282 = (i__9142__auto___281 + (1));
i__9142__auto___281 = G__282;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((3) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.spec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9145__auto__);
});

cljs.spec$macros.spec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,p__276){
var map__277 = p__276;
var map__277__$1 = ((((!((map__277 == null)))?(((((map__277.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__277.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__277):map__277);
var gen = cljs.core.get.call(null,map__277__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
if(cljs.core.truth_(form)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec-impl","cljs.spec/spec-impl",(-1647407472),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,_AMPERSAND_env,form),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
} else {
return null;
}
});

cljs.spec$macros.spec.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec$macros.spec.cljs$lang$applyTo = (function (seq272){
var G__273 = cljs.core.first.call(null,seq272);
var seq272__$1 = cljs.core.next.call(null,seq272);
var G__274 = cljs.core.first.call(null,seq272__$1);
var seq272__$2 = cljs.core.next.call(null,seq272__$1);
var G__275 = cljs.core.first.call(null,seq272__$2);
var seq272__$3 = cljs.core.next.call(null,seq272__$2);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__273,G__274,G__275,seq272__$3);
});

return null;
})()
;
cljs.spec$macros.spec.cljs$lang$macro = true;

var ret__9167__auto___283 = /**
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
cljs.spec$macros.multi_spec = (function cljs$spec$macros$multi_spec(_AMPERSAND_form,_AMPERSAND_env,mm,retag){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","multi-spec-impl","cljs.spec/multi-spec-impl",(1001154684),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,_AMPERSAND_env,mm),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",(870848730),null),null,(1),null)),(new cljs.core.List(null,mm,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,retag,null,(1),null))));
});
cljs.spec$macros.multi_spec.cljs$lang$macro = true;

var ret__9167__auto___290 = (function (){
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
cljs.spec$macros.keys = (function cljs$spec$macros$keys(var_args){
var args__9144__auto__ = [];
var len__9141__auto___291 = arguments.length;
var i__9142__auto___292 = (0);
while(true){
if((i__9142__auto___292 < len__9141__auto___291)){
args__9144__auto__.push((arguments[i__9142__auto___292]));

var G__293 = (i__9142__auto___292 + (1));
i__9142__auto___292 = G__293;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.keys.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.keys.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__287){
var map__288 = p__287;
var map__288__$1 = ((((!((map__288 == null)))?(((((map__288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288):map__288);
var req = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"req","req",(-326448303)));
var req_un = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"req-un","req-un",(1074571008)));
var opt = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"opt","opt",(-794706369)));
var opt_un = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)));
var gen = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var unk = ((function (map__288,map__288__$1,req,req_un,opt,opt_un,gen){
return (function (p1__8_SHARP_){
return cljs.core.keyword.call(null,cljs.core.name.call(null,p1__8_SHARP_));
});})(map__288,map__288__$1,req,req_un,opt,opt_un,gen))
;
var req_keys = cljs.core.filterv.call(null,cljs.core.keyword_QMARK_,cljs.core.flatten.call(null,req));
var req_un_specs = cljs.core.filterv.call(null,cljs.core.keyword_QMARK_,cljs.core.flatten.call(null,req_un));
var _ = ((cljs.core.every_QMARK_.call(null,((function (unk,req_keys,req_un_specs,map__288,map__288__$1,req,req_un,opt,opt_un,gen){
return (function (p1__9_SHARP_){
var and__8052__auto__ = (p1__9_SHARP_ instanceof cljs.core.Keyword);
if(and__8052__auto__){
return cljs.core.namespace.call(null,p1__9_SHARP_);
} else {
return and__8052__auto__;
}
});})(unk,req_keys,req_un_specs,map__288,map__288__$1,req,req_un,opt,opt_un,gen))
,cljs.core.concat.call(null,req_keys,req_un_specs,opt,opt_un)))?null:(function(){throw (new Error(["Assert failed: ","all keys must be namespace-qualified keywords","\n","(every? (fn* [p1__9#] (clojure.core/and (keyword? p1__9#) (namespace p1__9#))) (concat req-keys req-un-specs opt opt-un))"].join('')))})());
var req_specs = cljs.core.into.call(null,req_keys,req_un_specs);
var req_keys__$1 = cljs.core.into.call(null,req_keys,cljs.core.map.call(null,unk,req_un_specs));
var opt_keys = cljs.core.into.call(null,cljs.core.vec.call(null,opt),cljs.core.map.call(null,unk,opt_un));
var opt_specs = cljs.core.into.call(null,cljs.core.vec.call(null,opt),opt_un);
var gx = cljs.core.gensym.call(null);
var parse_req = ((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__288,map__288__$1,req,req_un,opt,opt_un,gen){
return (function (rk,f){
return cljs.core.map.call(null,((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__288,map__288__$1,req,req_un,opt,opt_un,gen){
return (function (x){
if((x instanceof cljs.core.Keyword)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,f.call(null,x),null,(1),null))));
} else {
return clojure.walk.postwalk.call(null,((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__288,map__288__$1,req,req_un,opt,opt_un,gen){
return (function (y){
if((y instanceof cljs.core.Keyword)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,f.call(null,y),null,(1),null))));
} else {
return y;
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__288,map__288__$1,req,req_un,opt,opt_un,gen))
,x);
}
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__288,map__288__$1,req,req_un,opt,opt_un,gen))
,rk);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,map__288,map__288__$1,req,req_un,opt,opt_un,gen))
;
var pred_exprs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null))))], null);
var pred_exprs__$1 = cljs.core.into.call(null,pred_exprs,parse_req.call(null,req,cljs.core.identity));
var pred_exprs__$2 = cljs.core.into.call(null,pred_exprs__$1,parse_req.call(null,req_un,unk));
var keys_pred = cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gx,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),pred_exprs__$2)),null,(1),null))));
var pred_exprs__$3 = cljs.core.mapv.call(null,((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__288,map__288__$1,req,req_un,opt,opt_un,gen){
return (function (e){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gx,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,e,null,(1),null))));
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,map__288,map__288__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$2);
var pred_forms = clojure.walk.postwalk.call(null,((function (unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__288,map__288__$1,req,req_un,opt,opt_un,gen){
return (function (p1__10_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__10_SHARP_);
});})(unk,req_keys,req_un_specs,_,req_specs,req_keys__$1,opt_keys,opt_specs,gx,parse_req,pred_exprs,pred_exprs__$1,pred_exprs__$2,keys_pred,pred_exprs__$3,map__288,map__288__$1,req,req_un,opt,opt_un,gen))
,pred_exprs__$3);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","map-spec-impl","cljs.spec/map-spec-impl",(-1014292963),null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"req-un","req-un",(1074571008)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,req_un,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,opt_un,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"gfn","gfn",(791517474)),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",(1792271395)),null,(1),null)),(new cljs.core.List(null,pred_exprs__$3,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"keys-pred","keys-pred",(858984739)),null,(1),null)),(new cljs.core.List(null,keys_pred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-keys","opt-keys",(1262688261)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,opt_keys,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-specs","req-specs",(553962313)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,req_specs,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req","req",(-326448303)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,req,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"req-keys","req-keys",(514319221)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,req_keys__$1,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt-specs","opt-specs",(-384905450)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,opt_specs,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pred-forms","pred-forms",(172611832)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"opt","opt",(-794706369)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,opt,null,(1),null)))),null,(1),null))))),null,(1),null))));
});

cljs.spec$macros.keys.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.keys.cljs$lang$applyTo = (function (seq284){
var G__285 = cljs.core.first.call(null,seq284);
var seq284__$1 = cljs.core.next.call(null,seq284);
var G__286 = cljs.core.first.call(null,seq284__$1);
var seq284__$2 = cljs.core.next.call(null,seq284__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__285,G__286,seq284__$2);
});

return null;
})()
;
cljs.spec$macros.keys.cljs$lang$macro = true;

var ret__9167__auto___297 = (function (){
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
cljs.spec$macros.or = (function cljs$spec$macros$or(var_args){
var args__9144__auto__ = [];
var len__9141__auto___298 = arguments.length;
var i__9142__auto___299 = (0);
while(true){
if((i__9142__auto___299 < len__9141__auto___298)){
args__9144__auto__.push((arguments[i__9142__auto___299]));

var G__300 = (i__9142__auto___299 + (1));
i__9142__auto___299 = G__300;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.call(null,(2),key_pred_forms);
var keys = cljs.core.mapv.call(null,cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.call(null,cljs.core.second,pairs);
var pf = cljs.core.mapv.call(null,((function (pairs,keys,pred_forms){
return (function (p1__11_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__11_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if(((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,key_pred_forms))) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","spec/or expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","or-spec-impl","cljs.spec/or-spec-impl",(2080519296),null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
});

cljs.spec$macros.or.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.or.cljs$lang$applyTo = (function (seq294){
var G__295 = cljs.core.first.call(null,seq294);
var seq294__$1 = cljs.core.next.call(null,seq294);
var G__296 = cljs.core.first.call(null,seq294__$1);
var seq294__$2 = cljs.core.next.call(null,seq294__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__295,G__296,seq294__$2);
});

return null;
})()
;
cljs.spec$macros.or.cljs$lang$macro = true;

var ret__9167__auto___304 = (function (){
/**
 * Takes predicate/spec-forms, e.g.
 * 
 *   (s/and even? #(< % 42))
 * 
 *   Returns a spec that returns the conformed value. Successive
 *   conformed values propagate through rest of predicates.
 */
cljs.spec$macros.and = (function cljs$spec$macros$and(var_args){
var args__9144__auto__ = [];
var len__9141__auto___305 = arguments.length;
var i__9142__auto___306 = (0);
while(true){
if((i__9142__auto___306 < len__9141__auto___305)){
args__9144__auto__.push((arguments[i__9142__auto___306]));

var G__307 = (i__9142__auto___306 + (1));
i__9142__auto___306 = G__307;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","and-spec-impl","cljs.spec/and-spec-impl",(1959775372),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,(function (p1__12_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__12_SHARP_);
}),pred_forms),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
});

cljs.spec$macros.and.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.and.cljs$lang$applyTo = (function (seq301){
var G__302 = cljs.core.first.call(null,seq301);
var seq301__$1 = cljs.core.next.call(null,seq301);
var G__303 = cljs.core.first.call(null,seq301__$1);
var seq301__$2 = cljs.core.next.call(null,seq301__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__302,G__303,seq301__$2);
});

return null;
})()
;
cljs.spec$macros.and.cljs$lang$macro = true;

var ret__9167__auto___316 = (function (){
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
 *   :kind - a pred/spec that the collection type must satisfy, e.g. vector?
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
cljs.spec$macros.every = (function cljs$spec$macros$every(var_args){
var args__9144__auto__ = [];
var len__9141__auto___317 = arguments.length;
var i__9142__auto___318 = (0);
while(true){
if((i__9142__auto___318 < len__9141__auto___317)){
args__9144__auto__.push((arguments[i__9142__auto___318]));

var G__319 = (i__9142__auto___318 + (1));
i__9142__auto___318 = G__319;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((3) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.every.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9145__auto__);
});

cljs.spec$macros.every.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,p__312){
var map__313 = p__312;
var map__313__$1 = ((((!((map__313 == null)))?(((((map__313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__313):map__313);
var opts = map__313__$1;
var max_count = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"max-count","max-count",(1539185305)));
var gen_max = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"gen-max","gen-max",(-793680445)));
var into = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"into","into",(-150836029)));
var gen = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var distinct = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"distinct","distinct",(-1788879121)));
var gen_into = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"gen-into","gen-into",(-1047890542)));
var count = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"count","count",(2139924085)));
var min_count = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"min-count","min-count",(1594709013)));
var kind = cljs.core.get.call(null,map__313__$1,new cljs.core.Keyword(null,"kind","kind",(-717265803)));
var nopts = cljs.core.assoc.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"gen","gen",(142575302))),new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",(997489303)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"kind","kind",(-717265803)).cljs$core$IFn$_invoke$arity$1(opts)),null,(1),null)))));
var gx = cljs.core.gensym.call(null);
var cpreds = (function (){var G__315 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.List(null,(function (){var or__8070__auto__ = kind;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",(1208130522),null);
}
})(),(new cljs.core.List(null,gx,null,(1),null)),(2),null))], null);
var G__315__$1 = (cljs.core.truth_(count)?cljs.core.conj.call(null,G__315,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null),null,(1),null)),(new cljs.core.List(null,count,null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))),null,(1),null))))):G__315);
var G__315__$2 = (cljs.core.truth_((function (){var or__8070__auto__ = min_count;
if(cljs.core.truth_(or__8070__auto__)){
return or__8070__auto__;
} else {
return max_count;
}
})())?cljs.core.conj.call(null,G__315__$1,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bounded-count","cljs.core/bounded-count",(355256728),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",(-879172610),null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,min_count,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),(new cljs.core.List(null,max_count,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","MAX_INT","cljs.spec/MAX_INT",(-192863469),null),null,(1),null)))),null,(1),null))))):G__315__$1);
if(cljs.core.truth_(distinct)){
return cljs.core.conj.call(null,G__315__$2,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",(1866613644),null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","distinct?","cljs.core/distinct?",(-1285807788),null),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))),null,(1),null)))));
} else {
return G__315__$2;
}
})();
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","every-impl","cljs.spec/every-impl",(-1150144333),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,cljs.core.assoc.call(null,nopts,new cljs.core.Keyword("cljs.spec","cpred","cljs.spec/cpred",(1439199454)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,gx,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),cpreds)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))));
});

cljs.spec$macros.every.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec$macros.every.cljs$lang$applyTo = (function (seq308){
var G__309 = cljs.core.first.call(null,seq308);
var seq308__$1 = cljs.core.next.call(null,seq308);
var G__310 = cljs.core.first.call(null,seq308__$1);
var seq308__$2 = cljs.core.next.call(null,seq308__$1);
var G__311 = cljs.core.first.call(null,seq308__$2);
var seq308__$3 = cljs.core.next.call(null,seq308__$2);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__309,G__310,G__311,seq308__$3);
});

return null;
})()
;
cljs.spec$macros.every.cljs$lang$macro = true;

var ret__9167__auto___325 = (function (){
/**
 * like 'every' but takes separate key and val preds and works on associative collections.
 * 
 *   Same options as 'every', :into defaults to {}
 * 
 *   See also - map-of
 */
cljs.spec$macros.every_kv = (function cljs$spec$macros$every_kv(var_args){
var args__9144__auto__ = [];
var len__9141__auto___326 = arguments.length;
var i__9142__auto___327 = (0);
while(true){
if((i__9142__auto___327 < len__9141__auto___326)){
args__9144__auto__.push((arguments[i__9142__auto___327]));

var G__328 = (i__9142__auto___327 + (1));
i__9142__auto___327 = G__328;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((4) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((4)),(0),null)):null);
return cljs.spec$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9145__auto__);
});

cljs.spec$macros.every_kv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",(-1899705480),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",(500419708),null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),(new cljs.core.List(null,vpred,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",(293196937)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"i__13__auto__","i__13__auto__",(70303017),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__14__auto__","v__14__auto__",(-1535744321),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",(1961052085),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__14__auto__","v__14__auto__",(-1535744321),null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"into","into",(-150836029)),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),opts));
});

cljs.spec$macros.every_kv.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.spec$macros.every_kv.cljs$lang$applyTo = (function (seq320){
var G__321 = cljs.core.first.call(null,seq320);
var seq320__$1 = cljs.core.next.call(null,seq320);
var G__322 = cljs.core.first.call(null,seq320__$1);
var seq320__$2 = cljs.core.next.call(null,seq320__$1);
var G__323 = cljs.core.first.call(null,seq320__$2);
var seq320__$3 = cljs.core.next.call(null,seq320__$2);
var G__324 = cljs.core.first.call(null,seq320__$3);
var seq320__$4 = cljs.core.next.call(null,seq320__$3);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__321,G__322,G__323,G__324,seq320__$4);
});

return null;
})()
;
cljs.spec$macros.every_kv.cljs$lang$macro = true;

var ret__9167__auto___333 = (function (){
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
cljs.spec$macros.coll_of = (function cljs$spec$macros$coll_of(var_args){
var args__9144__auto__ = [];
var len__9141__auto___334 = arguments.length;
var i__9142__auto___335 = (0);
while(true){
if((i__9142__auto___335 < len__9141__auto___334)){
args__9144__auto__.push((arguments[i__9142__auto___335]));

var G__336 = (i__9142__auto___335 + (1));
i__9142__auto___335 = G__336;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((3) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9145__auto__);
});

cljs.spec$macros.coll_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,opts){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",(-1899705480),null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",(-1945029907)),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),opts));
});

cljs.spec$macros.coll_of.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec$macros.coll_of.cljs$lang$applyTo = (function (seq329){
var G__330 = cljs.core.first.call(null,seq329);
var seq329__$1 = cljs.core.next.call(null,seq329);
var G__331 = cljs.core.first.call(null,seq329__$1);
var seq329__$2 = cljs.core.next.call(null,seq329__$1);
var G__332 = cljs.core.first.call(null,seq329__$2);
var seq329__$3 = cljs.core.next.call(null,seq329__$2);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__330,G__331,G__332,seq329__$3);
});

return null;
})()
;
cljs.spec$macros.coll_of.cljs$lang$macro = true;

var ret__9167__auto___342 = (function (){
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
cljs.spec$macros.map_of = (function cljs$spec$macros$map_of(var_args){
var args__9144__auto__ = [];
var len__9141__auto___343 = arguments.length;
var i__9142__auto___344 = (0);
while(true){
if((i__9142__auto___344 < len__9141__auto___343)){
args__9144__auto__.push((arguments[i__9142__auto___344]));

var G__345 = (i__9142__auto___344 + (1));
i__9142__auto___344 = G__345;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((4) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((4)),(0),null)):null);
return cljs.spec$macros.map_of.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9145__auto__);
});

cljs.spec$macros.map_of.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kpred,vpred,opts){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","every-kv","cljs.spec/every-kv",(1657959642),null),null,(1),null)),(new cljs.core.List(null,kpred,null,(1),null)),(new cljs.core.List(null,vpred,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",(-1945029907)),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"kind","kind",(-717265803)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",(-1390345523),null),null,(1),null)),opts));
});

cljs.spec$macros.map_of.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
cljs.spec$macros.map_of.cljs$lang$applyTo = (function (seq337){
var G__338 = cljs.core.first.call(null,seq337);
var seq337__$1 = cljs.core.next.call(null,seq337);
var G__339 = cljs.core.first.call(null,seq337__$1);
var seq337__$2 = cljs.core.next.call(null,seq337__$1);
var G__340 = cljs.core.first.call(null,seq337__$2);
var seq337__$3 = cljs.core.next.call(null,seq337__$2);
var G__341 = cljs.core.first.call(null,seq337__$3);
var seq337__$4 = cljs.core.next.call(null,seq337__$3);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__338,G__339,G__340,G__341,seq337__$4);
});

return null;
})()
;
cljs.spec$macros.map_of.cljs$lang$macro = true;

var ret__9167__auto___346 = /**
 * Returns a regex op that matches zero or more values matching
 *   pred. Produces a vector of matches iff there is at least one match
 */
cljs.spec$macros._STAR_ = (function cljs$spec$macros$_STAR_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","rep-impl","cljs.spec/rep-impl",(-1679724299),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,_AMPERSAND_env,pred_form),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,pred_form,null,(1),null))));
});
cljs.spec$macros._STAR_.cljs$lang$macro = true;

var ret__9167__auto___347 = /**
 * Returns a regex op that matches one or more values matching
 *   pred. Produces a vector of matches
 */
cljs.spec$macros._PLUS_ = (function cljs$spec$macros$_PLUS_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","rep+impl","cljs.spec/rep+impl",(-903423170),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,_AMPERSAND_env,pred_form),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,pred_form,null,(1),null))));
});
cljs.spec$macros._PLUS_.cljs$lang$macro = true;

var ret__9167__auto___348 = /**
 * Returns a regex op that matches zero or one value matching
 *   pred. Produces a single value (not a collection) if matched.
 */
cljs.spec$macros._QMARK_ = (function cljs$spec$macros$_QMARK_(_AMPERSAND_form,_AMPERSAND_env,pred_form){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","maybe-impl","cljs.spec/maybe-impl",(-2372652),null),null,(1),null)),(new cljs.core.List(null,pred_form,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,pred_form,null,(1),null)))),null,(1),null))));
});
cljs.spec$macros._QMARK_.cljs$lang$macro = true;

var ret__9167__auto___352 = (function (){
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
cljs.spec$macros.alt = (function cljs$spec$macros$alt(var_args){
var args__9144__auto__ = [];
var len__9141__auto___353 = arguments.length;
var i__9142__auto___354 = (0);
while(true){
if((i__9142__auto___354 < len__9141__auto___353)){
args__9144__auto__.push((arguments[i__9142__auto___354]));

var G__355 = (i__9142__auto___354 + (1));
i__9142__auto___354 = G__355;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.alt.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.alt.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.call(null,(2),key_pred_forms);
var keys = cljs.core.mapv.call(null,cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.call(null,cljs.core.second,pairs);
var pf = cljs.core.mapv.call(null,((function (pairs,keys,pred_forms){
return (function (p1__15_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__15_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if(((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,key_pred_forms))) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","alt expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","alt-impl","cljs.spec/alt-impl",(-536047463),null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null)))),null,(1),null))));
});

cljs.spec$macros.alt.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.alt.cljs$lang$applyTo = (function (seq349){
var G__350 = cljs.core.first.call(null,seq349);
var seq349__$1 = cljs.core.next.call(null,seq349);
var G__351 = cljs.core.first.call(null,seq349__$1);
var seq349__$2 = cljs.core.next.call(null,seq349__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__350,G__351,seq349__$2);
});

return null;
})()
;
cljs.spec$macros.alt.cljs$lang$macro = true;

var ret__9167__auto___359 = (function (){
/**
 * Takes key+pred pairs, e.g.
 * 
 *   (s/cat :e even? :o odd?)
 * 
 *   Returns a regex op that matches (all) values in sequence, returning a map
 *   containing the keys of each pred and the corresponding value.
 */
cljs.spec$macros.cat = (function cljs$spec$macros$cat(var_args){
var args__9144__auto__ = [];
var len__9141__auto___360 = arguments.length;
var i__9142__auto___361 = (0);
while(true){
if((i__9142__auto___361 < len__9141__auto___360)){
args__9144__auto__.push((arguments[i__9142__auto___361]));

var G__362 = (i__9142__auto___361 + (1));
i__9142__auto___361 = G__362;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,key_pred_forms){
var pairs = cljs.core.partition.call(null,(2),key_pred_forms);
var keys = cljs.core.mapv.call(null,cljs.core.first,pairs);
var pred_forms = cljs.core.mapv.call(null,cljs.core.second,pairs);
var pf = cljs.core.mapv.call(null,((function (pairs,keys,pred_forms){
return (function (p1__16_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__16_SHARP_);
});})(pairs,keys,pred_forms))
,pred_forms);
if(((cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,key_pred_forms))) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,keys)))){
} else {
throw (new Error(["Assert failed: ","cat expects k1 p1 k2 p2..., where ks are keywords","\n","(clojure.core/and (even? (count key-pred-forms)) (every? keyword? keys))"].join('')));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","cat-impl","cljs.spec/cat-impl",(-595301341),null),null,(1),null)),(new cljs.core.List(null,keys,null,(1),null)),(new cljs.core.List(null,pred_forms,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null)))),null,(1),null))));
});

cljs.spec$macros.cat.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.cat.cljs$lang$applyTo = (function (seq356){
var G__357 = cljs.core.first.call(null,seq356);
var seq356__$1 = cljs.core.next.call(null,seq356);
var G__358 = cljs.core.first.call(null,seq356__$1);
var seq356__$2 = cljs.core.next.call(null,seq356__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__357,G__358,seq356__$2);
});

return null;
})()
;
cljs.spec$macros.cat.cljs$lang$macro = true;

var ret__9167__auto___367 = (function (){
/**
 * takes a regex op re, and predicates. Returns a regex-op that consumes
 *   input as per re but subjects the resulting value to the
 *   conjunction of the predicates, and any conforming they might perform.
 */
cljs.spec$macros._AMPERSAND_ = (function cljs$spec$macros$_AMPERSAND_(var_args){
var args__9144__auto__ = [];
var len__9141__auto___368 = arguments.length;
var i__9142__auto___369 = (0);
while(true){
if((i__9142__auto___369 < len__9141__auto___368)){
args__9144__auto__.push((arguments[i__9142__auto___369]));

var G__370 = (i__9142__auto___369 + (1));
i__9142__auto___369 = G__370;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((3) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9145__auto__);
});

cljs.spec$macros._AMPERSAND_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,re,preds){
var pv = cljs.core.vec.call(null,preds);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","amp-impl","cljs.spec/amp-impl",(796856145),null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),(new cljs.core.List(null,pv,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,((function (pv){
return (function (p1__17_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__17_SHARP_);
});})(pv))
,pv),null,(1),null)))),null,(1),null))));
});

cljs.spec$macros._AMPERSAND_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec$macros._AMPERSAND_.cljs$lang$applyTo = (function (seq363){
var G__364 = cljs.core.first.call(null,seq363);
var seq363__$1 = cljs.core.next.call(null,seq363);
var G__365 = cljs.core.first.call(null,seq363__$1);
var seq363__$2 = cljs.core.next.call(null,seq363__$1);
var G__366 = cljs.core.first.call(null,seq363__$2);
var seq363__$3 = cljs.core.next.call(null,seq363__$2);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__364,G__365,G__366,seq363__$3);
});

return null;
})()
;
cljs.spec$macros._AMPERSAND_.cljs$lang$macro = true;

var ret__9167__auto___373 = (function (){
/**
 * takes a predicate function with the semantics of conform i.e. it should return either a
 *   (possibly converted) value or :cljs.spec/invalid, and returns a
 *   spec that uses it as a predicate/conformer. Optionally takes a
 *   second fn that does unform of result of first
 */
cljs.spec$macros.conformer = (function cljs$spec$macros$conformer(var_args){
var G__372 = arguments.length;
switch (G__372) {
case (3):
return cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec-impl","cljs.spec/spec-impl",(-1647407472),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))));
});

cljs.spec$macros.conformer.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,unf){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec-impl","cljs.spec/spec-impl",(-1647407472),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,unf,null,(1),null))));
});

cljs.spec$macros.conformer.cljs$lang$maxFixedArity = (4);

return null;
})()
;
cljs.spec$macros.conformer.cljs$lang$macro = true;

var ret__9167__auto___381 = (function (){
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
cljs.spec$macros.fspec = (function cljs$spec$macros$fspec(var_args){
var args__9144__auto__ = [];
var len__9141__auto___382 = arguments.length;
var i__9142__auto___383 = (0);
while(true){
if((i__9142__auto___383 < len__9141__auto___382)){
args__9144__auto__.push((arguments[i__9142__auto___383]));

var G__384 = (i__9142__auto___383 + (1));
i__9142__auto___383 = G__384;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.fspec.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.fspec.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__378){
var map__379 = p__378;
var map__379__$1 = ((((!((map__379 == null)))?(((((map__379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__379):map__379);
var args = cljs.core.get.call(null,map__379__$1,new cljs.core.Keyword(null,"args","args",(1315556576)));
var ret = cljs.core.get.call(null,map__379__$1,new cljs.core.Keyword(null,"ret","ret",(-468222814)));
var fn = cljs.core.get.call(null,map__379__$1,new cljs.core.Keyword(null,"fn","fn",(-1175266204)));
var gen = cljs.core.get.call(null,map__379__$1,new cljs.core.Keyword(null,"gen","gen",(142575302)));
var env = _AMPERSAND_env;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","fspec-impl","cljs.spec/fspec-impl",(221076141),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,env,args),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,env,ret),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null),null,(1),null)),(new cljs.core.List(null,fn,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.spec$macros.res.call(null,env,fn),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,gen,null,(1),null))));
});

cljs.spec$macros.fspec.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.fspec.cljs$lang$applyTo = (function (seq375){
var G__376 = cljs.core.first.call(null,seq375);
var seq375__$1 = cljs.core.next.call(null,seq375);
var G__377 = cljs.core.first.call(null,seq375__$1);
var seq375__$2 = cljs.core.next.call(null,seq375__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__376,G__377,seq375__$2);
});

return null;
})()
;
cljs.spec$macros.fspec.cljs$lang$macro = true;

var ret__9167__auto___388 = (function (){
/**
 * takes one or more preds and returns a spec for a tuple, a vector
 *   where each element conforms to the corresponding pred. Each element
 *   will be referred to in paths using its ordinal.
 */
cljs.spec$macros.tuple = (function cljs$spec$macros$tuple(var_args){
var args__9144__auto__ = [];
var len__9141__auto___389 = arguments.length;
var i__9142__auto___390 = (0);
while(true){
if((i__9142__auto___390 < len__9141__auto___389)){
args__9144__auto__.push((arguments[i__9142__auto___390]));

var G__391 = (i__9142__auto___390 + (1));
i__9142__auto___390 = G__391;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.tuple.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,preds){
if(!(cljs.core.empty_QMARK_.call(null,preds))){
} else {
throw (new Error("Assert failed: (not (empty? preds))"));
}

return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","tuple-impl","cljs.spec/tuple-impl",(-1888860774),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,(function (p1__18_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__18_SHARP_);
}),preds),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,preds),null,(1),null))));
});

cljs.spec$macros.tuple.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.tuple.cljs$lang$applyTo = (function (seq385){
var G__386 = cljs.core.first.call(null,seq385);
var seq385__$1 = cljs.core.next.call(null,seq385);
var G__387 = cljs.core.first.call(null,seq385__$1);
var seq385__$2 = cljs.core.next.call(null,seq385__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__386,G__387,seq385__$2);
});

return null;
})()
;
cljs.spec$macros.tuple.cljs$lang$macro = true;

cljs.spec$macros._speced_vars = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
cljs.spec$macros.speced_vars = (function cljs$spec$macros$speced_vars(){
return cljs.core.deref.call(null,cljs.spec$macros._speced_vars);
});
var ret__9167__auto___396 = (function (){
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
 *   by calling get-spec with the var or full-qualified symbol.
 * 
 *   Once registered, function specs are included in doc, checked by
 *   instrument, tested by the runner clojure.spec.test/run-tests, and (if
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
 *   (s/fdef clojure.core/symbol
 *  :args (s/alt :separate (s/cat :ns string? :n string?)
 *               :str string?
 *               :sym symbol?)
 *  :ret symbol?)
 */
cljs.spec$macros.fdef = (function cljs$spec$macros$fdef(var_args){
var args__9144__auto__ = [];
var len__9141__auto___397 = arguments.length;
var i__9142__auto___398 = (0);
while(true){
if((i__9142__auto___398 < len__9141__auto___397)){
args__9144__auto__.push((arguments[i__9142__auto___398]));

var G__399 = (i__9142__auto___398 + (1));
i__9142__auto___398 = G__399;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((3) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((3)),(0),null)):null);
return cljs.spec$macros.fdef.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9145__auto__);
});

cljs.spec$macros.fdef.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fn_sym,specs){
cljs.core.swap_BANG_.call(null,cljs.spec$macros._speced_vars,cljs.core.conj,cljs.spec$macros.ns_qualify.call(null,_AMPERSAND_env,fn_sym));

return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","def","cljs.spec/def",(-666033036),null),null,(1),null)),(new cljs.core.List(null,fn_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",(982220571),null),null,(1),null)),specs)),null,(1),null))));
});

cljs.spec$macros.fdef.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.spec$macros.fdef.cljs$lang$applyTo = (function (seq392){
var G__393 = cljs.core.first.call(null,seq392);
var seq392__$1 = cljs.core.next.call(null,seq392);
var G__394 = cljs.core.first.call(null,seq392__$1);
var seq392__$2 = cljs.core.next.call(null,seq392__$1);
var G__395 = cljs.core.first.call(null,seq392__$2);
var seq392__$3 = cljs.core.next.call(null,seq392__$2);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__393,G__394,G__395,seq392__$3);
});

return null;
})()
;
cljs.spec$macros.fdef.cljs$lang$macro = true;

var ret__9167__auto___403 = (function (){
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
cljs.spec$macros.keys_STAR_ = (function cljs$spec$macros$keys_STAR_(var_args){
var args__9144__auto__ = [];
var len__9141__auto___404 = arguments.length;
var i__9142__auto___405 = (0);
while(true){
if((i__9142__auto___405 < len__9141__auto___404)){
args__9144__auto__.push((arguments[i__9142__auto___405]));

var G__406 = (i__9142__auto___405 + (1));
i__9142__auto___405 = G__406;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.keys_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kspecs){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__19__auto__","mspec__19__auto__",(-1554548141),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",(-927379584),null),null,(1),null)),kspecs)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","with-gen","cljs.spec/with-gen",(-53488124),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","&","cljs.spec/&",(-663850257),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",(-858366320),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",(850003863),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",(668466950)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",(-1491964132)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",(-1189105441)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__19__auto__","mspec__19__auto__",(-1554548141),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","fmap","cljs.spec.impl.gen/fmap",(-1115961083),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"m__20__auto__","m__20__auto__",(1624095826),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",(-1133584918),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__20__auto__","m__20__auto__",(1624095826),null),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","gen","cljs.spec/gen",(-2101972796),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mspec__19__auto__","mspec__19__auto__",(-1554548141),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))));
});

cljs.spec$macros.keys_STAR_.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.keys_STAR_.cljs$lang$applyTo = (function (seq400){
var G__401 = cljs.core.first.call(null,seq400);
var seq400__$1 = cljs.core.next.call(null,seq400);
var G__402 = cljs.core.first.call(null,seq400__$1);
var seq400__$2 = cljs.core.next.call(null,seq400__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__401,G__402,seq400__$2);
});

return null;
})()
;
cljs.spec$macros.keys_STAR_.cljs$lang$macro = true;

var ret__9167__auto___407 = /**
 * returns a spec that accepts nil and values satisfiying pred
 */
cljs.spec$macros.nilable = (function cljs$spec$macros$nilable(_AMPERSAND_form,_AMPERSAND_env,pred){
var pf = cljs.spec$macros.res.call(null,_AMPERSAND_env,pred);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","nilable-impl","cljs.spec/nilable-impl",(-523057991),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,pf,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
});
cljs.spec$macros.nilable.cljs$lang$macro = true;

var ret__9167__auto___408 = /**
 * Returns a spec that validates insts in the range from start
 *   (inclusive) to end (exclusive).
 */
cljs.spec$macros.inst_in = (function cljs$spec$macros$inst_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"st__22__auto__","st__22__auto__",(50847730),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"et__23__auto__","et__23__auto__",(-1193845708),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst-ms","cljs.core/inst-ms",(-515575156),null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__24__auto__","mkdate__24__auto__",(674992078),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"d__25__auto__","d__25__auto__",(-1108616564),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",(384205255),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"d__25__auto__","d__25__auto__",(-1108616564),null),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inst?","cljs.core/inst?",(1216133710),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21__26__auto__","p1__21__26__auto__",(1576199147),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","inst-in-range?","cljs.spec/inst-in-range?",(827763250),null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__21__26__auto__","p1__21__26__auto__",(1576199147),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",(142575302)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","fmap","cljs.spec.impl.gen/fmap",(-1115961083),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"mkdate__24__auto__","mkdate__24__auto__",(674992078),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","large-integer*","cljs.spec.impl.gen/large-integer*",(749084369),null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",(444991522)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"st__22__auto__","st__22__auto__",(50847730),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",(61366548)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"et__23__auto__","et__23__auto__",(-1193845708),null),null,(1),null))))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null))));
});
cljs.spec$macros.inst_in.cljs$lang$macro = true;

var ret__9167__auto___409 = /**
 * Returns a spec that validates longs in the range from start
 *   (inclusive) to end (exclusive).
 */
cljs.spec$macros.int_in = (function cljs$spec$macros$int_in(_AMPERSAND_form,_AMPERSAND_env,start,end){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",(50730120),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__27__28__auto__","p1__27__28__auto__",(-1189216374),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","int-in-range?","cljs.spec/int-in-range?",(-1880930716),null),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__27__28__auto__","p1__27__28__auto__",(-1189216374),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",(142575302)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","large-integer*","cljs.spec.impl.gen/large-integer*",(749084369),null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"min","min",(444991522)),null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"max","max",(61366548)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",(-443230268),null),null,(1),null)),(new cljs.core.List(null,end,null,(1),null)))),null,(1),null))))),null,(1),null)))),null,(1),null)))),null,(1),null))));
});
cljs.spec$macros.int_in.cljs$lang$macro = true;

var ret__9167__auto___416 = (function (){
/**
 * Specs a 64-bit floating point number. Options:
 * 
 *  :infinite? - whether +/- infinity allowed (default true)
 *  :NaN?      - whether NaN allowed (default true)
 *  :min       - minimum value (inclusive, default none)
 *  :max       - maximum value (inclusive, default none)
 */
cljs.spec$macros.double_in = (function cljs$spec$macros$double_in(var_args){
var args__9144__auto__ = [];
var len__9141__auto___417 = arguments.length;
var i__9142__auto___418 = (0);
while(true){
if((i__9142__auto___418 < len__9141__auto___417)){
args__9144__auto__.push((arguments[i__9142__auto___418]));

var G__419 = (i__9142__auto___418 + (1));
i__9142__auto___418 = G__419;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.double_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.double_in.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p__413){
var map__414 = p__413;
var map__414__$1 = ((((!((map__414 == null)))?(((((map__414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__414):map__414);
var m = map__414__$1;
var infinite_QMARK_ = cljs.core.get.call(null,map__414__$1,new cljs.core.Keyword(null,"infinite?","infinite?",(-2017886608)),true);
var NaN_QMARK_ = cljs.core.get.call(null,map__414__$1,new cljs.core.Keyword(null,"NaN?","NaN?",(-1917767651)),true);
var min = cljs.core.get.call(null,map__414__$1,new cljs.core.Keyword(null,"min","min",(444991522)));
var max = cljs.core.get.call(null,map__414__$1,new cljs.core.Keyword(null,"max","max",(61366548)));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","spec","cljs.spec/spec",(775251713),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",(-7296553),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","double?","cljs.core/double?",(1757455529),null),null,(1),null)),(cljs.core.truth_(infinite_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__29#","p1__29#",(855285472),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol(null,"infinite?","infinite?",(-377355081),null),new cljs.core.Symbol(null,"p1__29#","p1__29#",(855285472),null))))], null)),(cljs.core.truth_(NaN_QMARK_)?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__30#","p1__30#",(1019404019),null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",(1044554643),null),cljs.core.list(new cljs.core.Symbol("js","isNaN","js/isNaN",(74901299),null),new cljs.core.Symbol(null,"p1__30#","p1__30#",(1019404019),null))))], null)),(cljs.core.truth_(max)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__31__32__auto__","p1__31__32__auto__",(-1746188242),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__31__32__auto__","p1__31__32__auto__",(-1746188242),null),null,(1),null)),(new cljs.core.List(null,max,null,(1),null)))),null,(1),null)))),null,(1),null))))):null),(cljs.core.truth_(min)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__33__34__auto__","p1__33__34__auto__",(1761325171),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",(1677001748),null),null,(1),null)),(new cljs.core.List(null,min,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__33__34__auto__","p1__33__34__auto__",(1761325171),null),null,(1),null)))),null,(1),null)))),null,(1),null))))):null))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"gen","gen",(142575302)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",(-752876845),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","double*","cljs.spec.impl.gen/double*",(1793576798),null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)))),null,(1),null)))),null,(1),null))));
});

cljs.spec$macros.double_in.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.double_in.cljs$lang$applyTo = (function (seq410){
var G__411 = cljs.core.first.call(null,seq410);
var seq410__$1 = cljs.core.next.call(null,seq410);
var G__412 = cljs.core.first.call(null,seq410__$1);
var seq410__$2 = cljs.core.next.call(null,seq410__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__411,G__412,seq410__$2);
});

return null;
})()
;
cljs.spec$macros.double_in.cljs$lang$macro = true;

var ret__9167__auto___423 = (function (){
/**
 * Takes map-validating specs (e.g. 'keys' specs) and
 *   returns a spec that returns a conformed map satisfying all of the
 *   specs.  Successive conformed values propagate through rest of
 *   predicates. Unlike 'and', merge can generate maps satisfying the
 *   union of the predicates.
 */
cljs.spec$macros.merge = (function cljs$spec$macros$merge(var_args){
var args__9144__auto__ = [];
var len__9141__auto___424 = arguments.length;
var i__9142__auto___425 = (0);
while(true){
if((i__9142__auto___425 < len__9141__auto___424)){
args__9144__auto__.push((arguments[i__9142__auto___425]));

var G__426 = (i__9142__auto___425 + (1));
i__9142__auto___425 = G__426;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec$macros.merge.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec$macros.merge.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred_forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","merge-spec-impl","cljs.spec/merge-spec-impl",(1066531443),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,cljs.core.mapv.call(null,(function (p1__35_SHARP_){
return cljs.spec$macros.res.call(null,_AMPERSAND_env,p1__35_SHARP_);
}),pred_forms),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,pred_forms),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
});

cljs.spec$macros.merge.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec$macros.merge.cljs$lang$applyTo = (function (seq420){
var G__421 = cljs.core.first.call(null,seq420);
var seq420__$1 = cljs.core.next.call(null,seq420);
var G__422 = cljs.core.first.call(null,seq420__$1);
var seq420__$2 = cljs.core.next.call(null,seq420__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__421,G__422,seq420__$2);
});

return null;
})()
;
cljs.spec$macros.merge.cljs$lang$macro = true;

var ret__9167__auto___430 = (function (){
/**
 * exercises the fn named by sym (a symbol) by applying it to
 *   n (default 10) generated samples of its args spec. When fspec is
 *   supplied its arg spec is used, and sym-or-f can be a fn.  Returns a
 *   sequence of tuples of [args ret]. 
 */
cljs.spec$macros.exercise_fn = (function cljs$spec$macros$exercise_fn(var_args){
var G__428 = arguments.length;
switch (G__428) {
case (3):
return cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case (5):
return cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","exercise-fn","cljs.spec/exercise-fn",(-1958436611),null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,(10),null,(1),null))));
});

cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","exercise-fn","cljs.spec/exercise-fn",(-1958436611),null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),(new cljs.core.List(null,n,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
});

cljs.spec$macros.exercise_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,sym,n,fspec){
var sym__$1 = (function (){var G__429 = sym;
if(((cljs.core.sequential_QMARK_.call(null,sym)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,sym),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))))){
return cljs.core.second.call(null,G__429);
} else {
return G__429;
}
})();
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__36__auto__","fspec__36__auto__",(162095716),null),null,(1),null)),(new cljs.core.List(null,((cljs.core.not.call(null,fspec))?cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","get-spec","cljs.spec/get-spec",(-1254734335),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve.call(null,_AMPERSAND_env,sym__$1)),null,(1),null)))),null,(1),null)))):fspec),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__37__auto__","f__37__auto__",(125772583),null),null,(1),null)),(new cljs.core.List(null,sym__$1,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",(-89947499),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args__38__auto__","args__38__auto__",(2064559220),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","sample","cljs.spec.impl.gen/sample",(812621383),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","gen","cljs.spec/gen",(-2101972796),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",(1315556576)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fspec__36__auto__","fspec__36__auto__",(162095716),null),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"args__38__auto__","args__38__auto__",(2064559220),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__37__auto__","f__37__auto__",(125772583),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__38__auto__","args__38__auto__",(2064559220),null),null,(1),null)))),null,(1),null))))),null,(1),null)))),null,(1),null))));
});

cljs.spec$macros.exercise_fn.cljs$lang$maxFixedArity = (5);

return null;
})()
;
cljs.spec$macros.exercise_fn.cljs$lang$macro = true;

var ret__9167__auto___432 = cljs.spec$macros.init_compile_asserts = (function cljs$spec$macros$init_compile_asserts(_AMPERSAND_form,_AMPERSAND_env){
var compile_asserts = cljs.core.not.call(null,new cljs.core.Keyword(null,"elide-asserts","elide-asserts",(537063272)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",(99638489)).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_))));
return compile_asserts;
});
cljs.spec$macros.init_compile_asserts.cljs$lang$macro = true;

var ret__9167__auto___433 = /**
 * spec-checking assert expression. Returns x if x is valid? according
 * to spec, else throws an error with explain-data plus ::failure of
 * :assertion-failed.
 * Can be disabled at either compile time or runtime:
 * If *compile-asserts* is false at compile time, compiles to x. Defaults
 * to the negation value of the ':elide-asserts' compiler option, or true if
 * not set.
 * If (check-asserts?) is false at runtime, always returns x. Defaults to
 * value of 'cljs.spec/*runtime-asserts*', or false if not set. You can
 * toggle check-asserts? with (check-asserts bool).
 */
cljs.spec$macros.assert = (function cljs$spec$macros$assert(_AMPERSAND_form,_AMPERSAND_env,spec,x){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","*compile-asserts*","cljs.spec/*compile-asserts*",(244913392),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","*runtime-asserts*","cljs.spec/*runtime-asserts*",(1521021805),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec","assert*","cljs.spec/assert*",(-1844453922),null),null,(1),null)),(new cljs.core.List(null,spec,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))));
});
cljs.spec$macros.assert.cljs$lang$macro = true;


//# sourceURL=cljs/spec$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9zcGVjJG1hY3Jvcy5qcyIsInNvdXJjZXMiOlsic3BlYyRtYWNyb3MuY2xqcyJdLCJsaW5lQ291bnQiOjE0MzEsIm1hcHBpbmdzIjoiO0FBa0JBLEdBQUEsUUFBQUEsaUNBQUFDLDZDQUFBQztBQUFBO0FBQUEsQUFBQSxBQUFTQyxnQ0FBYSx5QkFBQSx6QkFBQ0M7O0FBRXZCOzs7NEJBQUEsNUJBQU9DLGdFQUVKQztBQUZILEFBR0UsR0FBSSxBQUFDQywrQkFBS0Q7QUFDUixPQUFBLHFGQUFPQTs7QUFDUEE7OztBQUVKLHdCQUFBLHhCQUFPRSx3REFBTUM7QUFBYixBQUNFLEdBQUksRUFBa0IsQUFBQ0MsK0JBQUtELFdBQ2pCLDRDQUFBRSwzQ0FBUyxBQUFDQywwQkFBTUgsd0NBQ2hCLHlCQUFBLHpCQUFDSSwrQkFBUSxBQUFDQyx5QkFBSyxBQUFDRiwwQkFBTUg7QUFDL0IsSUFBQU0sV0FBbUIsQUFBQ1MseUJBQUtmO0lBQXpCTyxXQUFBLEFBQUFDLHdCQUFBRjtJQUFBRyxhQUFBLEFBQUFOLDBCQUFBSTtJQUFBQSxlQUFBLEFBQUFHLHlCQUFBSDtJQUFBSSxXQUFBRjtRQUFBLEFBQUFHLHdCQUFBRCxTQUFBLElBQUEsekNBQVFFO1dBQVJOLFBBQWFPO0FBQWIsQUFDRSx1TEFBQSxtRkFBQSw2REFBQSxoVUFBQ0UseUJBQUssd0NBQUEsa0RBQUEsMUZBQUNDLHdGQUF1QkoseURBQU1DOztBQUN0Q2Q7OztBQUVKLHVCQUFBLHZCQUFPa0Isc0RBQUtDLElBQUlMO0FBQWhCLEFBQ0UsR0FDRSxpQkFBQU0saEJBQVVOO0FBQU1BOztBQURsQixHQUVFLGlCQUFBWixoQkFBU1k7QUFBTSxJQUFBTyxtQkFBaUIsNEVBQUtQLHhDQUFLLEFBQUNRLG9DQUFRSCx4RUFBS3ZCO0FBQXpDLEFBQUEsb0JBQUF5QjtBQUFBQTs7QUFBZ0RQOzs7QUFGakUsR0FHRSxBQUFDUyxzQ0FBWVQ7QUFBTSx1Q0FBQSxXQUFBVSwzQ0FBQ0M7QUFBRCxBQUFnQixHQUFJLENBQUFELHdC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QUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLGdFQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsNkRBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxlQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxxREFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLDZEQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsU0FBQSxLQUFBLElBQUEsU0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsOERBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSw2REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLGtCQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxpRUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLDZEQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsZUFBQSxLQUFBLElBQUEsU0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsa0VBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSw2REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLGdCQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxxREFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FB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OztBQWhCTCxBQUFBLEFBQUEsMENBQUEsMUNBQVU4UDs7QUFBVjNOIiwibmFtZXMiOlsianMvY2xqcyIsImpzL2NsanMuc3BlYyRtYWNyb3MiLCJqcy9jbGpzLnNwZWMkbWFjcm9zLnJlZ2lzdHJ5LXJlZiIsImNsanMuc3BlYyRtYWNyb3MvcmVnaXN0cnktcmVmIiwiY2xqcy5jb3JlL2F0b20iLCJjbGpzLnNwZWMkbWFjcm9zLy0+c3ltIiwieCIsImNsanMuY29yZS9tYXA/IiwiY2xqcy5zcGVjJG1hY3Jvcy91bmZuIiwiZXhwciIsImNsanMuY29yZS9zZXE/IiwiY2xqcy5jb3JlL1N5bWJvbCIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS89IiwiY2xqcy5jb3JlL25hbWUiLCJ2ZWNfXzI2NSIsInNlcV9fMjY2IiwiY2xqcy5jb3JlL3NlcSIsImZpcnN0X18yNjciLCJjbGpzLmNvcmUvbmV4dCIsInZlY19fMjY4IiwiY2xqcy5jb3JlL250aCIsInMiLCJmb3JtIiwiY2xqcy5jb3JlL3Jlc3QiLCJjbGpzLmNvcmUvY29uaiIsImNsb2p1cmUud2Fsay9wb3N0d2Fsay1yZXBsYWNlIiwiY2xqcy5zcGVjJG1hY3Jvcy9yZXMiLCJlbnYiLCJjbGpzLmNvcmUvS2V5d29yZCIsIm9yX184MDcwX19hdXRvX18iLCJjbGpzLmFuYWx5emVyLmFwaS9yZXNvbHZlIiwiY2xqcy5jb3JlL3NlcXVlbnRpYWw/IiwicDFfXzcjIiwiY2xvanVyZS53YWxrL3Bvc3R3YWxrIiwiY2xqcy5zcGVjJG1hY3Jvcy9ucy1xdWFsaWZ5IiwiY2xqcy5jb3JlL25hbWVzcGFjZSIsInYiLCJqcy9FcnJvciIsImNsanMuY29yZS9zeW1ib2wiLCJjbGpzLmFuYWx5emVyLypjbGpzLW5zKiIsInJldF9fOTE2N19fYXV0b19fIiwiJmZvcm0iLCImZW52IiwiY2xqcy5zcGVjJG1hY3Jvcy9kZWYiLCJrIiwic3BlYy1mb3JtIiwiY2xqcy5jb3JlL3NlcXVlbmNlIiwiY2xqcy5jb3JlL2NvbmNhdCIsImNsanMuY29yZS9MaXN0IiwiY2xqcy5jb3JlL3N3YXAhIiwiY2xqcy5jb3JlL2Fzc29jIiwidmFyX2FyZ3MiLCJhcmdzX185MTQ0X19hdXRvX18iLCJsZW5fXzkxNDFfX2F1dG9fXyIsImlfXzkxNDJfX2F1dG9fXyIsImFyZ3NlcV9fOTE0NV9fYXV0b19fIiwiY2xqcy5zcGVjJG1hY3Jvcy9zcGVjIiwicF9fMjc2IiwibWFwX18yNzciLCJjbGpzLmNvcmUvUFJPVE9DT0xfU0VOVElORUwiLCJjbGpzLmNvcmUvYXBwbHkiLCJjbGpzLmNvcmUvaGFzaC1tYXAiLCJjbGpzLmNvcmUvZ2V0Iiwic2VxMjcyIiwiR19fMjczIiwiR19fMjc0IiwiR19fMjc1Iiwic2VsZl9fOTEzMl9fYXV0b19fIiwiZ2VuIiwiY2xqcy5zcGVjJG1hY3Jvcy9tdWx0aS1zcGVjIiwibW0iLCJyZXRhZyIsImNsanMuc3BlYyRtYWNyb3Mva2V5cyIsInBfXzI4NyIsIm1hcF9fMjg4Iiwic2VxMjg0IiwiR19fMjg1IiwiR19fMjg2IiwicmVxIiwicmVxLXVuIiwib3B0Iiwib3B0LXVuIiwicDFfXzgjIiwiY2xqcy5jb3JlL3ZlYyIsImNsanMuY29yZS9hcnJheS1tYXAiLCJ1bmsiLCJjbGpzLmNvcmUva2V5d29yZCIsInJlcS1rZXlzIiwiY2xqcy5jb3JlL2ZpbHRlcnYiLCJjbGpzLmNvcmUva2V5d29yZD8iLCJjbGpzLmNvcmUvZmxhdHRlbiIsInJlcS11bi1zcGVjcyIsIl8iLCJwMV9fOSMiLCJjbGpzLmNvcmUvZXZlcnk/IiwiYW5kX184MDUyX19hdXRvX18iLCJyZXEtc3BlY3MiLCJjbGpzLmNvcmUvaW50byIsImNsanMuY29yZS9tYXAiLCJvcHQta2V5cyIsIm9wdC1zcGVjcyIsImd4IiwiY2xqcy5jb3JlL2dlbnN5bSIsInBhcnNlLXJlcSIsInJrIiwiZiIsInkiLCJwcmVkLWV4cHJzIiwiY2xqcy5jb3JlL2lkZW50aXR5Iiwia2V5cy1wcmVkIiwiY2xqcy5jb3JlL21hcHYiLCJlIiwicHJlZC1mb3JtcyIsInAxX18xMCMiLCJjbGpzLnNwZWMkbWFjcm9zL29yIiwic2VxMjk0IiwiR19fMjk1IiwiR19fMjk2Iiwia2V5LXByZWQtZm9ybXMiLCJwYWlycyIsImNsanMuY29yZS9wYXJ0aXRpb24iLCJrZXlzIiwiY2xqcy5jb3JlL3NlY29uZCIsInBmIiwicDFfXzExIyIsImNsanMuY29yZS9ldmVuPyIsImNsanMuY29yZS9jb3VudCIsImNsanMuc3BlYyRtYWNyb3MvYW5kIiwic2VxMzAxIiwiR19fMzAyIiwiR19fMzAzIiwicDFfXzEyIyIsImNsanMuc3BlYyRtYWNyb3MvZXZlcnkiLCJwX18zMTIiLCJtYXBfXzMxMyIsInNlcTMwOCIsIkdfXzMwOSIsIkdfXzMxMCIsIkdfXzMxMSIsInByZWQiLCJpbnRvIiwia2luZCIsImNvdW50IiwibWF4LWNvdW50IiwibWluLWNvdW50IiwiZGlzdGluY3QiLCJnZW4tbWF4IiwiZ2VuLWludG8iLCJvcHRzIiwibm9wdHMiLCJjbGpzLmNvcmUvZGlzc29jIiwiY3ByZWRzIiwiR19fMzE1IiwiY2xqcy5zcGVjJG1hY3Jvcy9ldmVyeS1rdiIsInNlcTMyMCIsIkdfXzMyMSIsIkdfXzMyMiIsIkdfXzMyMyIsIkdfXzMyNCIsImtwcmVkIiwidnByZWQiLCJjbGpzLnNwZWMkbWFjcm9zL2NvbGwtb2YiLCJzZXEzMjkiLCJHX18zMzAiLCJHX18zMzEiLCJHX18zMzIiLCJjbGpzLnNwZWMkbWFjcm9zL21hcC1vZiIsInNlcTMzNyIsIkdfXzMzOCIsIkdfXzMzOSIsIkdfXzM0MCIsIkdfXzM0MSIsImNsanMuc3BlYyRtYWNyb3MvKiIsInByZWQtZm9ybSIsImNsanMuc3BlYyRtYWNyb3MvKyIsImNsanMuc3BlYyRtYWNyb3MvPyIsImNsanMuc3BlYyRtYWNyb3MvYWx0Iiwic2VxMzQ5IiwiR19fMzUwIiwiR19fMzUxIiwicDFfXzE1IyIsImNsanMuc3BlYyRtYWNyb3MvY2F0Iiwic2VxMzU2IiwiR19fMzU3IiwiR19fMzU4IiwicDFfXzE2IyIsImNsanMuc3BlYyRtYWNyb3MvJiIsInNlcTM2MyIsIkdfXzM2NCIsIkdfXzM2NSIsIkdfXzM2NiIsInJlIiwicHJlZHMiLCJwdiIsInAxX18xNyMiLCJHX18zNzIiLCJjbGpzLnNwZWMkbWFjcm9zL2NvbmZvcm1lciIsInVuZiIsImNsanMuc3BlYyRtYWNyb3MvZnNwZWMiLCJwX18zNzgiLCJtYXBfXzM3OSIsInNlcTM3NSIsIkdfXzM3NiIsIkdfXzM3NyIsImFyZ3MiLCJyZXQiLCJmbiIsImNsanMuc3BlYyRtYWNyb3MvdHVwbGUiLCJzZXEzODUiLCJHX18zODYiLCJHX18zODciLCJjbGpzLmNvcmUvZW1wdHk/IiwicDFfXzE4IyIsImNsanMuc3BlYyRtYWNyb3MvX3NwZWNlZF92YXJzIiwiY2xqcy5jb3JlL2RlcmVmIiwiY2xqcy5zcGVjJG1hY3Jvcy9zcGVjZWQtdmFycyIsImNsanMuc3BlYyRtYWNyb3MvZmRlZiIsInNlcTM5MiIsIkdfXzM5MyIsIkdfXzM5NCIsIkdfXzM5NSIsImZuLXN5bSIsInNwZWNzIiwiY2xqcy5zcGVjJG1hY3Jvcy9rZXlzKiIsInNlcTQwMCIsIkdfXzQwMSIsIkdfXzQwMiIsImtzcGVjcyIsImNsanMuc3BlYyRtYWNyb3MvbmlsYWJsZSIsImNsanMuc3BlYyRtYWNyb3MvaW5zdC1pbiIsInN0YXJ0IiwiZW5kIiwiY2xqcy5zcGVjJG1hY3Jvcy9pbnQtaW4iLCJjbGpzLnNwZWMkbWFjcm9zL2RvdWJsZS1pbiIsInBfXzQxMyIsIm1hcF9fNDE0Iiwic2VxNDEwIiwiR19fNDExIiwiR19fNDEyIiwiaW5maW5pdGU/IiwiTmFOPyIsIm1pbiIsIm1heCIsIm0iLCJjbGpzLnNwZWMkbWFjcm9zL21lcmdlIiwic2VxNDIwIiwiR19fNDIxIiwiR19fNDIyIiwicDFfXzM1IyIsIkdfXzQyOCIsImNsanMuc3BlYyRtYWNyb3MvZXhlcmNpc2UtZm4iLCJzeW0iLCJuIiwiZnNwZWMiLCJHX180MjkiLCJjbGpzLmNvcmUvbm90IiwiY2xqcy5zcGVjJG1hY3Jvcy9pbml0LWNvbXBpbGUtYXNzZXJ0cyIsImNvbXBpbGUtYXNzZXJ0cyIsImNsanMuZW52Lypjb21waWxlcioiLCJjbGpzLnNwZWMkbWFjcm9zL2Fzc2VydCIsInNwZWMiLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyI7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuKG5zIGNsanMuc3BlY1xuICAoOnJlZmVyLWNsb2p1cmUgOmV4Y2x1ZGUgWysgKiBhbmQgb3IgY2F0IGRlZiBrZXlzIG1lcmdlIHJlc29sdmUgYXNzZXJ0XSlcbiAgKDpyZXF1aXJlIFtjbGpzLmNvcmUgOmFzIGNdXG4gICAgICAgICAgICBbY2xqcy5hbmFseXplciA6YXMgYW5hXVxuICAgICAgICAgICAgW2NsanMuZW52IDphcyBlbnZdXG4gICAgICAgICAgICBbY2xqcy5hbmFseXplci5hcGkgOnJlZmVyIFtyZXNvbHZlXV1cbiAgICAgICAgICAgIFtjbG9qdXJlLndhbGsgOmFzIHdhbGtdXG4gICAgICAgICAgICBbY2xqcy5zcGVjLmltcGwuZ2VuIDphcyBnZW5dXG4gICAgICAgICAgICBbY2xvanVyZS5zdHJpbmcgOmFzIHN0cl0pKVxuXG4oZGVmb25jZSByZWdpc3RyeS1yZWYgKGF0b20ge30pKVxuXG4oZGVmbi0gLT5zeW1cbiAgXCJSZXR1cm5zIGEgc3ltYm9sIGZyb20gYSBzeW1ib2wgb3IgdmFyXCJcbiAgW3hdXG4gIChpZiAobWFwPyB4KVxuICAgICg6bmFtZSB4KVxuICAgIHgpKVxuXG4oZGVmbi0gdW5mbiBbZXhwcl1cbiAgKGlmIChjbG9qdXJlLmNvcmUvYW5kIChzZXE/IGV4cHIpXG4gICAgICAgICAgICAgKHN5bWJvbD8gKGZpcnN0IGV4cHIpKVxuICAgICAgICAgICAgICg9IFwiZm4qXCIgKG5hbWUgKGZpcnN0IGV4cHIpKSkpXG4gICAgKGxldCBbW1tzXSAmIGZvcm1dIChyZXN0IGV4cHIpXVxuICAgICAgKGNvbmogKHdhbGsvcG9zdHdhbGstcmVwbGFjZSB7cyAnJX0gZm9ybSkgJ1slXSAnZm4pKVxuICAgIGV4cHIpKVxuXG4oZGVmbi0gcmVzIFtlbnYgZm9ybV1cbiAgKGNvbmRcbiAgICAoa2V5d29yZD8gZm9ybSkgZm9ybVxuICAgIChzeW1ib2w/IGZvcm0pIChjbG9qdXJlLmNvcmUvb3IgKC0+PiBmb3JtIChyZXNvbHZlIGVudikgLT5zeW0pIGZvcm0pXG4gICAgKHNlcXVlbnRpYWw/IGZvcm0pICh3YWxrL3Bvc3R3YWxrICMoaWYgKHN5bWJvbD8gJSkgKHJlcyBlbnYgJSkgJSkgKHVuZm4gZm9ybSkpXG4gICAgOmVsc2UgZm9ybSkpXG5cbihkZWZuLSBucy1xdWFsaWZ5XG4gIFwiUXVhbGlmeSBzeW1ib2wgcyBieSByZXNvbHZpbmcgaXQgb3IgdXNpbmcgdGhlIGN1cnJlbnQgKm5zKi5cIlxuICBbZW52IHNdXG4gIChpZiAobmFtZXNwYWNlIHMpXG4gICAgKGxldCBbdiAocmVzb2x2ZSBlbnYgcyldXG4gICAgICAoY2xvanVyZS5jb3JlL2Fzc2VydCB2IChzdHIgXCJVbmFibGUgdG8gcmVzb2x2ZTogXCIgcykpXG4gICAgICAoLT5zeW0gdikpXG4gICAgKHN5bWJvbCAoc3RyIGFuYS8qY2xqcy1ucyopIChzdHIgcykpKSlcblxuKGRlZm1hY3JvIGRlZlxuICBcIkdpdmVuIGEgbmFtZXNwYWNlLXF1YWxpZmllZCBrZXl3b3JkIG9yIHJlc29sdmVhYmxlIHN5bWJvbCBrLCBhbmQgYSBzcGVjLFxuICAgc3BlYy1uYW1lLCBwcmVkaWNhdGUgb3IgcmVnZXgtb3AgbWFrZXMgYW4gZW50cnkgaW4gdGhlIHJlZ2lzdHJ5IG1hcHBpbmcgayB0b1xuICAgdGhlIHNwZWNcIlxuICBbayBzcGVjLWZvcm1dXG4gIChsZXQgW2sgICAgKGlmIChzeW1ib2w/IGspIChucy1xdWFsaWZ5ICZlbnYgaykgaylcbiAgICAgICAgZm9ybSAocmVzICZlbnYgc3BlYy1mb3JtKV1cbiAgICAoc3dhcCEgcmVnaXN0cnktcmVmIGFzc29jIGsgZm9ybSlcbiAgICBgKGRlZi1pbXBsICd+ayAnfmZvcm0gfnNwZWMtZm9ybSkpKVxuXG4oZGVmbWFjcm8gc3BlY1xuICBcIlRha2VzIGEgc2luZ2xlIHByZWRpY2F0ZSBmb3JtLCBlLmcuIGNhbiBiZSB0aGUgbmFtZSBvZiBhIHByZWRpY2F0ZSxcbiAgbGlrZSBldmVuPywgb3IgYSBmbiBsaXRlcmFsIGxpa2UgIyg8ICUgNDIpLiBOb3RlIHRoYXQgaXQgaXMgbm90XG4gIGdlbmVyYWxseSBuZWNlc3NhcnkgdG8gd3JhcCBwcmVkaWNhdGVzIGluIHNwZWMgd2hlbiB1c2luZyB0aGUgcmVzdFxuICBvZiB0aGUgc3BlYyBtYWNyb3MsIG9ubHkgdG8gYXR0YWNoIGEgdW5pcXVlIGdlbmVyYXRvclxuXG4gIENhbiBhbHNvIGJlIHBhc3NlZCB0aGUgcmVzdWx0IG9mIG9uZSBvZiB0aGUgcmVnZXggb3BzIC1cbiAgY2F0LCBhbHQsICosICssID8sIGluIHdoaWNoIGNhc2UgaXQgd2lsbCByZXR1cm4gYSByZWdleC1jb25mb3JtaW5nXG4gIHNwZWMsIHVzZWZ1bCB3aGVuIG5lc3RpbmcgYW4gaW5kZXBlbmRlbnQgcmVnZXguXG4gIC0tLVxuXG4gIE9wdGlvbmFsbHkgdGFrZXMgOmdlbiBnZW5lcmF0b3ItZm4sIHdoaWNoIG11c3QgYmUgYSBmbiBvZiBubyBhcmdzIHRoYXRcbiAgcmV0dXJucyBhIHRlc3QuY2hlY2sgZ2VuZXJhdG9yLlxuXG4gIFJldHVybnMgYSBzcGVjLlwiXG4gIFtmb3JtICYgezprZXlzIFtnZW5dfV1cbiAgKHdoZW4gZm9ybVxuICAgIGAoc3BlYy1pbXBsICd+KHJlcyAmZW52IGZvcm0pIH5mb3JtIH5nZW4gbmlsKSkpXG5cbihkZWZtYWNybyBtdWx0aS1zcGVjXG4gIFwiVGFrZXMgdGhlIG5hbWUgb2YgYSBzcGVjL3ByZWRpY2F0ZS1yZXR1cm5pbmcgbXVsdGltZXRob2QgYW5kIGFcbiAgdGFnLXJlc3RvcmluZyBrZXl3b3JkIG9yIGZuIChyZXRhZykuICBSZXR1cm5zIGEgc3BlYyB0aGF0IHdoZW5cbiAgY29uZm9ybWluZyBvciBleHBsYWluaW5nIGRhdGEgd2lsbCBwYXNzIGl0IHRvIHRoZSBtdWx0aW1ldGhvZCB0byBnZXRcbiAgYW4gYXBwcm9wcmlhdGUgc3BlYy4gWW91IGNhbiBlLmcuIHVzZSBtdWx0aS1zcGVjIHRvIGR5bmFtaWNhbGx5IGFuZFxuICBleHRlbnNpYmx5IGFzc29jaWF0ZSBzcGVjcyB3aXRoICd0YWdnZWQnIGRhdGEgKGkuZS4gZGF0YSB3aGVyZSBvbmVcbiAgb2YgdGhlIGZpZWxkcyBpbmRpY2F0ZXMgdGhlIHNoYXBlIG9mIHRoZSByZXN0IG9mIHRoZSBzdHJ1Y3R1cmUpLlxuXG4gIChkZWZtdWx0aSBtc3BlYyA6dGFnKVxuXG4gIFRoZSBtZXRob2RzIHNob3VsZCBpZ25vcmUgdGhlaXIgYXJndW1lbnQgYW5kIHJldHVybiBhIHByZWRpY2F0ZS9zcGVjOlxuICAoZGVmbWV0aG9kIG1zcGVjIDppbnQgW19dIChzL2tleXMgOnJlcS11biBbOjp0YWcgOjppXSkpXG5cbiAgcmV0YWcgaXMgdXNlZCBkdXJpbmcgZ2VuZXJhdGlvbiB0byByZXRhZyBnZW5lcmF0ZWQgdmFsdWVzIHdpdGhcbiAgbWF0Y2hpbmcgdGFncy4gcmV0YWcgY2FuIGVpdGhlciBiZSBhIGtleXdvcmQsIGF0IHdoaWNoIGtleSB0aGVcbiAgZGlzcGF0Y2gtdGFnIHdpbGwgYmUgYXNzb2MnZWQsIG9yIGEgZm4gb2YgZ2VuZXJhdGVkIHZhbHVlIGFuZFxuICBkaXNwYXRjaC10YWcgdGhhdCBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlbHkgcmV0YWdnZWQgdmFsdWUuXG5cbiAgTm90ZSB0aGF0IGJlY2F1c2UgdGhlIHRhZ3MgdGhlbXNlbHZlcyBjb21wcmlzZSBhbiBvcGVuIHNldCxcbiAgdGhlIHRhZyBrZXkgc3BlYyBjYW5ub3QgZW51bWVyYXRlIHRoZSB2YWx1ZXMsIGJ1dCBjYW4gZS5nLlxuICB0ZXN0IGZvciBrZXl3b3JkPy5cblxuICBOb3RlIGFsc28gdGhhdCB0aGUgZGlzcGF0Y2ggdmFsdWVzIG9mIHRoZSBtdWx0aW1ldGhvZCB3aWxsIGJlXG4gIGluY2x1ZGVkIGluIHRoZSBwYXRoLCBpLmUuIGluIHJlcG9ydGluZyBhbmQgZ2VuIG92ZXJyaWRlcywgZXZlblxuICB0aG91Z2ggdGhvc2UgdmFsdWVzIGFyZSBub3QgZXZpZGVudCBpbiB0aGUgc3BlYy5cblwiXG4gIFttbSByZXRhZ11cbiAgYChtdWx0aS1zcGVjLWltcGwgJ34ocmVzICZlbnYgbW0pICh2YXIgfm1tKSB+cmV0YWcpKVxuXG4oZGVmbWFjcm8ga2V5c1xuICBcIkNyZWF0ZXMgYW5kIHJldHVybnMgYSBtYXAgdmFsaWRhdGluZyBzcGVjLiA6cmVxIGFuZCA6b3B0IGFyZSBib3RoXG4gIHZlY3RvcnMgb2YgbmFtZXNwYWNlZC1xdWFsaWZpZWQga2V5d29yZHMuIFRoZSB2YWxpZGF0b3Igd2lsbCBlbnN1cmVcbiAgdGhlIDpyZXEga2V5cyBhcmUgcHJlc2VudC4gVGhlIDpvcHQga2V5cyBzZXJ2ZSBhcyBkb2N1bWVudGF0aW9uIGFuZFxuICBtYXkgYmUgdXNlZCBieSB0aGUgZ2VuZXJhdG9yLlxuXG4gIFRoZSA6cmVxIGtleSB2ZWN0b3Igc3VwcG9ydHMgJ2FuZCcgYW5kICdvcicgZm9yIGtleSBncm91cHM6XG5cbiAgKHMva2V5cyA6cmVxIFs6OnggOjp5IChvciA6OnNlY3JldCAoYW5kIDo6dXNlciA6OnB3ZCkpXSA6b3B0IFs6OnpdKVxuXG4gIFRoZXJlIGFyZSBhbHNvIC11biB2ZXJzaW9ucyBvZiA6cmVxIGFuZCA6b3B0LiBUaGVzZSBhbGxvd1xuICB5b3UgdG8gY29ubmVjdCB1bnF1YWxpZmllZCBrZXlzIHRvIHNwZWNzLiAgSW4gZWFjaCBjYXNlLCBmdWxseVxuICBxdWFsZmllZCBrZXl3b3JkcyBhcmUgcGFzc2VkLCB3aGljaCBuYW1lIHRoZSBzcGVjcywgYnV0IHVucXVhbGlmaWVkXG4gIGtleXMgKHdpdGggdGhlIHNhbWUgbmFtZSBjb21wb25lbnQpIGFyZSBleHBlY3RlZCBhbmQgY2hlY2tlZCBhdFxuICBjb25mb3JtLXRpbWUsIGFuZCBnZW5lcmF0ZWQgZHVyaW5nIGdlbjpcblxuICAocy9rZXlzIDpyZXEtdW4gWzpteS5ucy94IDpteS5ucy95XSlcblxuICBUaGUgYWJvdmUgc2F5cyBrZXlzIDp4IGFuZCA6eSBhcmUgcmVxdWlyZWQsIGFuZCB3aWxsIGJlIHZhbGlkYXRlZFxuICBhbmQgZ2VuZXJhdGVkIGJ5IHNwZWNzIChpZiB0aGV5IGV4aXN0KSBuYW1lZCA6bXkubnMveCA6bXkubnMveVxuICByZXNwZWN0aXZlbHkuXG5cbiAgSW4gYWRkaXRpb24sIHRoZSB2YWx1ZXMgb2YgKmFsbCogbmFtZXNwYWNlLXF1YWxpZmllZCBrZXlzIHdpbGwgYmUgdmFsaWRhdGVkXG4gIChhbmQgcG9zc2libHkgZGVzdHJ1Y3R1cmVkKSBieSBhbnkgcmVnaXN0ZXJlZCBzcGVjcy4gTm90ZTogdGhlcmUgaXNcbiAgbm8gc3VwcG9ydCBmb3IgaW5saW5lIHZhbHVlIHNwZWNpZmljYXRpb24sIGJ5IGRlc2lnbi5cblxuICBPcHRpb25hbGx5IHRha2VzIDpnZW4gZ2VuZXJhdG9yLWZuLCB3aGljaCBtdXN0IGJlIGEgZm4gb2Ygbm8gYXJncyB0aGF0XG4gIHJldHVybnMgYSB0ZXN0LmNoZWNrIGdlbmVyYXRvci5cIlxuICBbJiB7OmtleXMgW3JlcSByZXEtdW4gb3B0IG9wdC11biBnZW5dfV1cbiAgKGxldCBbdW5rICMoLT4gJSBuYW1lIGtleXdvcmQpXG4gICAgICAgIHJlcS1rZXlzIChmaWx0ZXJ2IGtleXdvcmQ/IChmbGF0dGVuIHJlcSkpXG4gICAgICAgIHJlcS11bi1zcGVjcyAoZmlsdGVydiBrZXl3b3JkPyAoZmxhdHRlbiByZXEtdW4pKVxuICAgICAgICBfIChjbG9qdXJlLmNvcmUvYXNzZXJ0IChldmVyeT8gIyhjbG9qdXJlLmNvcmUvYW5kIChrZXl3b3JkPyAlKSAobmFtZXNwYWNlICUpKSAoY29uY2F0IHJlcS1rZXlzIHJlcS11bi1zcGVjcyBvcHQgb3B0LXVuKSlcbiAgICAgICAgICAgICAgICAgIFwiYWxsIGtleXMgbXVzdCBiZSBuYW1lc3BhY2UtcXVhbGlmaWVkIGtleXdvcmRzXCIpXG4gICAgICAgIHJlcS1zcGVjcyAoaW50byByZXEta2V5cyByZXEtdW4tc3BlY3MpXG4gICAgICAgIHJlcS1rZXlzIChpbnRvIHJlcS1rZXlzIChtYXAgdW5rIHJlcS11bi1zcGVjcykpXG4gICAgICAgIG9wdC1rZXlzIChpbnRvICh2ZWMgb3B0KSAobWFwIHVuayBvcHQtdW4pKVxuICAgICAgICBvcHQtc3BlY3MgKGludG8gKHZlYyBvcHQpIG9wdC11bilcbiAgICAgICAgZ3ggKGdlbnN5bSlcbiAgICAgICAgcGFyc2UtcmVxIChmbiBbcmsgZl1cbiAgICAgICAgICAgICAgICAgICAgKG1hcCAoZm4gW3hdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgKGtleXdvcmQ/IHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAoY29udGFpbnM/IH5neCB+KGYgeCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3YWxrL3Bvc3R3YWxrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZuIFt5XSAoaWYgKGtleXdvcmQ/IHkpIGAoY29udGFpbnM/IH5neCB+KGYgeSkpIHkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICByaykpXG4gICAgICAgIHByZWQtZXhwcnMgW2AobWFwPyB+Z3gpXVxuICAgICAgICBwcmVkLWV4cHJzIChpbnRvIHByZWQtZXhwcnMgKHBhcnNlLXJlcSByZXEgaWRlbnRpdHkpKVxuICAgICAgICBwcmVkLWV4cHJzIChpbnRvIHByZWQtZXhwcnMgKHBhcnNlLXJlcSByZXEtdW4gdW5rKSlcbiAgICAgICAga2V5cy1wcmVkIGAoZm4qIFt+Z3hdIChjL2FuZCB+QHByZWQtZXhwcnMpKVxuICAgICAgICBwcmVkLWV4cHJzIChtYXB2IChmbiBbZV0gYChmbiogW35neF0gfmUpKSBwcmVkLWV4cHJzKVxuICAgICAgICBwcmVkLWZvcm1zICh3YWxrL3Bvc3R3YWxrICMocmVzICZlbnYgJSkgcHJlZC1leHBycyldXG4gICAgOzsgYChtYXAtc3BlYy1pbXBsIH5yZXEta2V5cyAnfnJlcSB+b3B0ICd+cHJlZC1mb3JtcyB+cHJlZC1leHBycyB+Z2VuKVxuICAgIGAobWFwLXNwZWMtaW1wbCB7OnJlcSAnfnJlcSA6b3B0ICd+b3B0IDpyZXEtdW4gJ35yZXEtdW4gOm9wdC11biAnfm9wdC11blxuICAgICAgICAgICAgICAgICAgICAgOnJlcS1rZXlzICd+cmVxLWtleXMgOnJlcS1zcGVjcyAnfnJlcS1zcGVjc1xuICAgICAgICAgICAgICAgICAgICAgOm9wdC1rZXlzICd+b3B0LWtleXMgOm9wdC1zcGVjcyAnfm9wdC1zcGVjc1xuICAgICAgICAgICAgICAgICAgICAgOnByZWQtZm9ybXMgJ35wcmVkLWZvcm1zXG4gICAgICAgICAgICAgICAgICAgICA6cHJlZC1leHBycyB+cHJlZC1leHByc1xuICAgICAgICAgICAgICAgICAgICAgOmtleXMtcHJlZCB+a2V5cy1wcmVkXG4gICAgICAgICAgICAgICAgICAgICA6Z2ZuIH5nZW59KSkpXG5cbihkZWZtYWNybyBvclxuICBcIlRha2VzIGtleStwcmVkIHBhaXJzLCBlLmcuXG5cbiAgKHMvb3IgOmV2ZW4gZXZlbj8gOnNtYWxsICMoPCAlIDQyKSlcblxuICBSZXR1cm5zIGEgZGVzdHJ1Y3R1cmluZyBzcGVjIHRoYXQgcmV0dXJucyBhIG1hcCBlbnRyeSBjb250YWluaW5nIHRoZVxuICBrZXkgb2YgdGhlIGZpcnN0IG1hdGNoaW5nIHByZWQgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHZhbHVlLiBUaHVzIHRoZVxuICAna2V5JyBhbmQgJ3ZhbCcgZnVuY3Rpb25zIGNhbiBiZSB1c2VkIHRvIHJlZmVyIGdlbmVyaWNhbGx5IHRvIHRoZVxuICBjb21wb25lbnRzIG9mIHRoZSB0YWdnZWQgcmV0dXJuLlwiXG4gIFsmIGtleS1wcmVkLWZvcm1zXVxuICAobGV0IFtwYWlycyAocGFydGl0aW9uIDIga2V5LXByZWQtZm9ybXMpXG4gICAgICAgIGtleXMgKG1hcHYgZmlyc3QgcGFpcnMpXG4gICAgICAgIHByZWQtZm9ybXMgKG1hcHYgc2Vjb25kIHBhaXJzKVxuICAgICAgICBwZiAobWFwdiAjKHJlcyAmZW52ICUpIHByZWQtZm9ybXMpXVxuICAgIChjbG9qdXJlLmNvcmUvYXNzZXJ0IChjbG9qdXJlLmNvcmUvYW5kIChldmVuPyAoY291bnQga2V5LXByZWQtZm9ybXMpKSAoZXZlcnk/IGtleXdvcmQ/IGtleXMpKSBcInNwZWMvb3IgZXhwZWN0cyBrMSBwMSBrMiBwMi4uLiwgd2hlcmUga3MgYXJlIGtleXdvcmRzXCIpXG4gICAgYChvci1zcGVjLWltcGwgfmtleXMgJ35wZiB+cHJlZC1mb3JtcyBuaWwpKSlcblxuKGRlZm1hY3JvIGFuZFxuICBcIlRha2VzIHByZWRpY2F0ZS9zcGVjLWZvcm1zLCBlLmcuXG5cbiAgKHMvYW5kIGV2ZW4/ICMoPCAlIDQyKSlcblxuICBSZXR1cm5zIGEgc3BlYyB0aGF0IHJldHVybnMgdGhlIGNvbmZvcm1lZCB2YWx1ZS4gU3VjY2Vzc2l2ZVxuICBjb25mb3JtZWQgdmFsdWVzIHByb3BhZ2F0ZSB0aHJvdWdoIHJlc3Qgb2YgcHJlZGljYXRlcy5cIlxuICBbJiBwcmVkLWZvcm1zXVxuICBgKGFuZC1zcGVjLWltcGwgJ34obWFwdiAjKHJlcyAmZW52ICUpIHByZWQtZm9ybXMpIH4odmVjIHByZWQtZm9ybXMpIG5pbCkpXG5cbihkZWZtYWNybyBldmVyeVxuICBcInRha2VzIGEgcHJlZCBhbmQgdmFsaWRhdGVzIGNvbGxlY3Rpb24gZWxlbWVudHMgYWdhaW5zdCB0aGF0IHByZWQuXG5cbiAgTm90ZSB0aGF0ICdldmVyeScgZG9lcyBub3QgZG8gZXhoYXVzdGl2ZSBjaGVja2luZywgcmF0aGVyIGl0IHNhbXBsZXNcbiAgKmNvbGwtY2hlY2stbGltaXQqIGVsZW1lbnRzLiBOb3IgKGFzIGEgcmVzdWx0KSBkb2VzIGl0IGRvIGFueVxuICBjb25mb3JtaW5nIG9mIGVsZW1lbnRzLiAnZXhwbGFpbicgd2lsbCByZXBvcnQgYXQgbW9zdCAqY29sbC1lcnJvci1saW1pdCpcbiAgcHJvYmxlbXMuICBUaHVzICdldmVyeScgc2hvdWxkIGJlIHN1aXRhYmxlIGZvciBwb3RlbnRpYWxseSBsYXJnZVxuICBjb2xsZWN0aW9ucy5cblxuICBUYWtlcyBzZXZlcmFsIGt3YXJncyBvcHRpb25zIHRoYXQgZnVydGhlciBjb25zdHJhaW4gdGhlIGNvbGxlY3Rpb246XG5cbiAgOmtpbmQgLSBhIHByZWQvc3BlYyB0aGF0IHRoZSBjb2xsZWN0aW9uIHR5cGUgbXVzdCBzYXRpc2Z5LCBlLmcuIHZlY3Rvcj9cbiAgICAgICAgICAoZGVmYXVsdCBuaWwpIE5vdGUgdGhhdCBpZiA6a2luZCBpcyBzcGVjaWZpZWQgYW5kIDppbnRvIGlzXG4gICAgICAgICAgbm90LCB0aGlzIHByZWQgbXVzdCBnZW5lcmF0ZSBpbiBvcmRlciBmb3IgZXZlcnkgdG8gZ2VuZXJhdGUuXG4gIDpjb3VudCAtIHNwZWNpZmllcyBjb2xsIGhhcyBleGFjdGx5IHRoaXMgY291bnQgKGRlZmF1bHQgbmlsKVxuICA6bWluLWNvdW50LCA6bWF4LWNvdW50IC0gY29sbCBoYXMgY291bnQgKDw9IG1pbi1jb3VudCBjb3VudCBtYXgtY291bnQpIChkZWZhdWx0cyBuaWwpXG4gIDpkaXN0aW5jdCAtIGFsbCB0aGUgZWxlbWVudHMgYXJlIGRpc3RpbmN0IChkZWZhdWx0IG5pbClcblxuICBBbmQgYWRkaXRpb25hbCBhcmdzIHRoYXQgY29udHJvbCBnZW5cblxuICA6Z2VuLW1heCAtIHRoZSBtYXhpbXVtIGNvbGwgc2l6ZSB0byBnZW5lcmF0ZSAoZGVmYXVsdCAyMClcbiAgOmludG8gLSBvbmUgb2YgW10sICgpLCB7fSwgI3t9IC0gdGhlIGRlZmF1bHQgY29sbGVjdGlvbiB0byBnZW5lcmF0ZSBpbnRvXG4gICAgICAoZGVmYXVsdCBzYW1lIGFzIDpraW5kIGlmIHN1cHBsaWVkLCBlbHNlIFtdXG5cbiAgT3B0aW9uYWxseSB0YWtlcyA6Z2VuIGdlbmVyYXRvci1mbiwgd2hpY2ggbXVzdCBiZSBhIGZuIG9mIG5vIGFyZ3MgdGhhdFxuICByZXR1cm5zIGEgdGVzdC5jaGVjayBnZW5lcmF0b3JcblxuICBTZWUgYWxzbyAtIGNvbGwtb2YsIGV2ZXJ5LWt2XG5cIlxuICBbcHJlZCAmIHs6a2V5cyBbaW50byBraW5kIGNvdW50IG1heC1jb3VudCBtaW4tY291bnQgZGlzdGluY3QgZ2VuLW1heCBnZW4taW50byBnZW5dIDphcyBvcHRzfV1cbiAgKGxldCBbbm9wdHMgKC0+IG9wdHMgKGRpc3NvYyA6Z2VuKSAoYXNzb2MgOjpraW5kLWZvcm0gYCd+KHJlcyAmZW52ICg6a2luZCBvcHRzKSkpKVxuICAgICAgICBneCAoZ2Vuc3ltKVxuICAgICAgICBjcHJlZHMgKGNvbmQtPiBbKGxpc3QgKGNsb2p1cmUuY29yZS9vciBraW5kIGBjb2xsPykgZ3gpXVxuICAgICAgICAgICAgICAgICBjb3VudCAoY29uaiBgKD0gfmNvdW50IChjL2JvdW5kZWQtY291bnQgfmNvdW50IH5neCkpKVxuXG4gICAgICAgICAgICAgICAgIChjbG9qdXJlLmNvcmUvb3IgbWluLWNvdW50IG1heC1jb3VudClcbiAgICAgICAgICAgICAgICAgKGNvbmogYCg8PSAoYy9vciB+bWluLWNvdW50IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjL2JvdW5kZWQtY291bnQgKGlmIH5tYXgtY291bnQgKGluYyB+bWF4LWNvdW50KSB+bWluLWNvdW50KSB+Z3gpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjL29yIH5tYXgtY291bnQgTUFYX0lOVCkpKVxuXG4gICAgICAgICAgICAgICAgIGRpc3RpbmN0XG4gICAgICAgICAgICAgICAgIChjb25qIGAoYy9vciAoZW1wdHk/IH5neCkgKGFwcGx5IGRpc3RpbmN0PyB+Z3gpKSkpXVxuICAgIGAoZXZlcnktaW1wbCAnfnByZWQgfnByZWQgfihhc3NvYyBub3B0cyA6OmNwcmVkIGAoZm4qIFt+Z3hdIChjL2FuZCB+QGNwcmVkcykpKSB+Z2VuKSkpXG5cbihkZWZtYWNybyBldmVyeS1rdlxuICBcImxpa2UgJ2V2ZXJ5JyBidXQgdGFrZXMgc2VwYXJhdGUga2V5IGFuZCB2YWwgcHJlZHMgYW5kIHdvcmtzIG9uIGFzc29jaWF0aXZlIGNvbGxlY3Rpb25zLlxuXG4gIFNhbWUgb3B0aW9ucyBhcyAnZXZlcnknLCA6aW50byBkZWZhdWx0cyB0byB7fVxuXG4gIFNlZSBhbHNvIC0gbWFwLW9mXCJcblxuICBba3ByZWQgdnByZWQgJiBvcHRzXVxuICBgKGV2ZXJ5ICh0dXBsZSB+a3ByZWQgfnZwcmVkKSA6OmtmbiAoZm4gW2kjIHYjXSAobnRoIHYjIDApKSA6aW50byB7fSB+QG9wdHMpKVxuXG4oZGVmbWFjcm8gY29sbC1vZlxuICBcIlJldHVybnMgYSBzcGVjIGZvciBhIGNvbGxlY3Rpb24gb2YgaXRlbXMgc2F0aXNmeWluZyBwcmVkLiBVbmxpa2VcbiAgZ2VuZXJhdG9yIHdpbGwgZmlsbCBhbiBlbXB0eSBpbml0LWNvbGwuXG5cbiAgU2FtZSBvcHRpb25zIGFzICdldmVyeScuIGNvbmZvcm0gd2lsbCBwcm9kdWNlIGEgY29sbGVjdGlvblxuICBjb3JyZXNwb25kaW5nIHRvIDppbnRvIGlmIHN1cHBsaWVkLCBlbHNlIHdpbGwgbWF0Y2ggdGhlIGlucHV0IGNvbGxlY3Rpb24sXG4gIGF2b2lkaW5nIHJlYnVpbGRpbmcgd2hlbiBwb3NzaWJsZS5cblxuICBTYW1lIG9wdGlvbnMgYXMgJ2V2ZXJ5Jy5cblxuICBTZWUgYWxzbyAtIGV2ZXJ5LCBtYXAtb2ZcIlxuICBbcHJlZCAmIG9wdHNdXG4gIGAoZXZlcnkgfnByZWQgOjpjb25mb3JtLWFsbCB0cnVlIH5Ab3B0cykpXG5cbihkZWZtYWNybyBtYXAtb2ZcbiAgXCJSZXR1cm5zIGEgc3BlYyBmb3IgYSBtYXAgd2hvc2Uga2V5cyBzYXRpc2Z5IGtwcmVkIGFuZCB2YWxzIHNhdGlzZnlcbiAgdnByZWQuIFVubGlrZSAnZXZlcnkta3YnLCBtYXAtb2Ygd2lsbCBleGhhdXN0aXZlbHkgY29uZm9ybSBldmVyeVxuICB2YWx1ZS5cblxuICBTYW1lIG9wdGlvbnMgYXMgJ2V2ZXJ5JywgOmtpbmQgZGVmYXVsdHMgdG8gbWFwPywgd2l0aCB0aGUgYWRkaXRpb24gb2Y6XG5cbiAgOmNvbmZvcm0ta2V5cyAtIGNvbmZvcm0ga2V5cyBhcyB3ZWxsIGFzIHZhbHVlcyAoZGVmYXVsdCBmYWxzZSlcblxuICBTZWUgYWxzbyAtIGV2ZXJ5LWt2XCJcbiAgW2twcmVkIHZwcmVkICYgb3B0c11cbiAgYChldmVyeS1rdiB+a3ByZWQgfnZwcmVkIDo6Y29uZm9ybS1hbGwgdHJ1ZSA6a2luZCBtYXA/IH5Ab3B0cykpXG5cbihkZWZtYWNybyAqXG4gIFwiUmV0dXJucyBhIHJlZ2V4IG9wIHRoYXQgbWF0Y2hlcyB6ZXJvIG9yIG1vcmUgdmFsdWVzIG1hdGNoaW5nXG4gIHByZWQuIFByb2R1Y2VzIGEgdmVjdG9yIG9mIG1hdGNoZXMgaWZmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBtYXRjaFwiXG4gIFtwcmVkLWZvcm1dXG4gIGAocmVwLWltcGwgJ34ocmVzICZlbnYgcHJlZC1mb3JtKSB+cHJlZC1mb3JtKSlcblxuKGRlZm1hY3JvICtcbiAgXCJSZXR1cm5zIGEgcmVnZXggb3AgdGhhdCBtYXRjaGVzIG9uZSBvciBtb3JlIHZhbHVlcyBtYXRjaGluZ1xuICBwcmVkLiBQcm9kdWNlcyBhIHZlY3RvciBvZiBtYXRjaGVzXCJcbiAgW3ByZWQtZm9ybV1cbiAgYChyZXAraW1wbCAnfihyZXMgJmVudiBwcmVkLWZvcm0pIH5wcmVkLWZvcm0pKVxuXG4oZGVmbWFjcm8gP1xuICBcIlJldHVybnMgYSByZWdleCBvcCB0aGF0IG1hdGNoZXMgemVybyBvciBvbmUgdmFsdWUgbWF0Y2hpbmdcbiAgcHJlZC4gUHJvZHVjZXMgYSBzaW5nbGUgdmFsdWUgKG5vdCBhIGNvbGxlY3Rpb24pIGlmIG1hdGNoZWQuXCJcbiAgW3ByZWQtZm9ybV1cbiAgYChtYXliZS1pbXBsIH5wcmVkLWZvcm0gJ35wcmVkLWZvcm0pKVxuXG4oZGVmbWFjcm8gYWx0XG4gIFwiVGFrZXMga2V5K3ByZWQgcGFpcnMsIGUuZy5cblxuICAocy9hbHQgOmV2ZW4gZXZlbj8gOnNtYWxsICMoPCAlIDQyKSlcblxuICBSZXR1cm5zIGEgcmVnZXggb3AgdGhhdCByZXR1cm5zIGEgbWFwIGVudHJ5IGNvbnRhaW5pbmcgdGhlIGtleSBvZiB0aGVcbiAgZmlyc3QgbWF0Y2hpbmcgcHJlZCBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgdmFsdWUuIFRodXMgdGhlXG4gICdrZXknIGFuZCAndmFsJyBmdW5jdGlvbnMgY2FuIGJlIHVzZWQgdG8gcmVmZXIgZ2VuZXJpY2FsbHkgdG8gdGhlXG4gIGNvbXBvbmVudHMgb2YgdGhlIHRhZ2dlZCByZXR1cm4uXCJcbiAgWyYga2V5LXByZWQtZm9ybXNdXG4gIChsZXQgW3BhaXJzIChwYXJ0aXRpb24gMiBrZXktcHJlZC1mb3JtcylcbiAgICAgICAga2V5cyAobWFwdiBmaXJzdCBwYWlycylcbiAgICAgICAgcHJlZC1mb3JtcyAobWFwdiBzZWNvbmQgcGFpcnMpXG4gICAgICAgIHBmIChtYXB2ICMocmVzICZlbnYgJSkgcHJlZC1mb3JtcyldXG4gICAgKGNsb2p1cmUuY29yZS9hc3NlcnQgKGNsb2p1cmUuY29yZS9hbmQgKGV2ZW4/IChjb3VudCBrZXktcHJlZC1mb3JtcykpIChldmVyeT8ga2V5d29yZD8ga2V5cykpIFwiYWx0IGV4cGVjdHMgazEgcDEgazIgcDIuLi4sIHdoZXJlIGtzIGFyZSBrZXl3b3Jkc1wiKVxuICAgIGAoYWx0LWltcGwgfmtleXMgfnByZWQtZm9ybXMgJ35wZikpKVxuXG4oZGVmbWFjcm8gY2F0XG4gIFwiVGFrZXMga2V5K3ByZWQgcGFpcnMsIGUuZy5cblxuICAocy9jYXQgOmUgZXZlbj8gOm8gb2RkPylcblxuICBSZXR1cm5zIGEgcmVnZXggb3AgdGhhdCBtYXRjaGVzIChhbGwpIHZhbHVlcyBpbiBzZXF1ZW5jZSwgcmV0dXJuaW5nIGEgbWFwXG4gIGNvbnRhaW5pbmcgdGhlIGtleXMgb2YgZWFjaCBwcmVkIGFuZCB0aGUgY29ycmVzcG9uZGluZyB2YWx1ZS5cIlxuICBbJiBrZXktcHJlZC1mb3Jtc11cbiAgKGxldCBbcGFpcnMgKHBhcnRpdGlvbiAyIGtleS1wcmVkLWZvcm1zKVxuICAgICAgICBrZXlzIChtYXB2IGZpcnN0IHBhaXJzKVxuICAgICAgICBwcmVkLWZvcm1zIChtYXB2IHNlY29uZCBwYWlycylcbiAgICAgICAgcGYgKG1hcHYgIyhyZXMgJmVudiAlKSBwcmVkLWZvcm1zKV1cbiAgICA7Oyhwcm4ga2V5LXByZWQtZm9ybXMpXG4gICAgKGNsb2p1cmUuY29yZS9hc3NlcnQgKGNsb2p1cmUuY29yZS9hbmQgKGV2ZW4/IChjb3VudCBrZXktcHJlZC1mb3JtcykpIChldmVyeT8ga2V5d29yZD8ga2V5cykpIFwiY2F0IGV4cGVjdHMgazEgcDEgazIgcDIuLi4sIHdoZXJlIGtzIGFyZSBrZXl3b3Jkc1wiKVxuICAgIGAoY2F0LWltcGwgfmtleXMgfnByZWQtZm9ybXMgJ35wZikpKVxuXG4oZGVmbWFjcm8gJlxuICBcInRha2VzIGEgcmVnZXggb3AgcmUsIGFuZCBwcmVkaWNhdGVzLiBSZXR1cm5zIGEgcmVnZXgtb3AgdGhhdCBjb25zdW1lc1xuICBpbnB1dCBhcyBwZXIgcmUgYnV0IHN1YmplY3RzIHRoZSByZXN1bHRpbmcgdmFsdWUgdG8gdGhlXG4gIGNvbmp1bmN0aW9uIG9mIHRoZSBwcmVkaWNhdGVzLCBhbmQgYW55IGNvbmZvcm1pbmcgdGhleSBtaWdodCBwZXJmb3JtLlwiXG4gIFtyZSAmIHByZWRzXVxuICAobGV0IFtwdiAodmVjIHByZWRzKV1cbiAgICBgKGFtcC1pbXBsIH5yZSB+cHYgJ34obWFwdiAjKHJlcyAmZW52ICUpIHB2KSkpKVxuXG4oZGVmbWFjcm8gY29uZm9ybWVyXG4gIFwidGFrZXMgYSBwcmVkaWNhdGUgZnVuY3Rpb24gd2l0aCB0aGUgc2VtYW50aWNzIG9mIGNvbmZvcm0gaS5lLiBpdCBzaG91bGQgcmV0dXJuIGVpdGhlciBhXG4gIChwb3NzaWJseSBjb252ZXJ0ZWQpIHZhbHVlIG9yIDpjbGpzLnNwZWMvaW52YWxpZCwgYW5kIHJldHVybnMgYVxuICBzcGVjIHRoYXQgdXNlcyBpdCBhcyBhIHByZWRpY2F0ZS9jb25mb3JtZXIuIE9wdGlvbmFsbHkgdGFrZXMgYVxuICBzZWNvbmQgZm4gdGhhdCBkb2VzIHVuZm9ybSBvZiByZXN1bHQgb2YgZmlyc3RcIlxuICAoW2ZdIGAoc3BlYy1pbXBsICd+ZiB+ZiBuaWwgdHJ1ZSkpXG4gIChbZiB1bmZdIGAoc3BlYy1pbXBsICd+ZiB+ZiBuaWwgdHJ1ZSB+dW5mKSkpXG5cbihkZWZtYWNybyBmc3BlY1xuICBcInRha2VzIDphcmdzIDpyZXQgYW5kIChvcHRpb25hbCkgOmZuIGt3YXJncyB3aG9zZSB2YWx1ZXMgYXJlIHByZWRzXG4gIGFuZCByZXR1cm5zIGEgc3BlYyB3aG9zZSBjb25mb3JtL2V4cGxhaW4gdGFrZSBhIGZuIGFuZCB2YWxpZGF0ZXMgaXRcbiAgdXNpbmcgZ2VuZXJhdGl2ZSB0ZXN0aW5nLiBUaGUgY29uZm9ybWVkIHZhbHVlIGlzIGFsd2F5cyB0aGUgZm4gaXRzZWxmLlxuXG4gIFNlZSAnZmRlZicgZm9yIGEgc2luZ2xlIG9wZXJhdGlvbiB0aGF0IGNyZWF0ZXMgYW4gZnNwZWMgYW5kXG4gIHJlZ2lzdGVycyBpdCwgYXMgd2VsbCBhcyBhIGZ1bGwgZGVzY3JpcHRpb24gb2YgOmFyZ3MsIDpyZXQgYW5kIDpmblxuXG4gIGZzcGVjcyBjYW4gZ2VuZXJhdGUgZnVuY3Rpb25zIHRoYXQgdmFsaWRhdGUgdGhlIGFyZ3VtZW50cyBhbmRcbiAgZmFicmljYXRlIGEgcmV0dXJuIHZhbHVlIGNvbXBsaWFudCB3aXRoIHRoZSA6cmV0IHNwZWMsIGlnbm9yaW5nXG4gIHRoZSA6Zm4gc3BlYyBpZiBwcmVzZW50LlxuXG4gIE9wdGlvbmFsbHkgdGFrZXMgOmdlbiBnZW5lcmF0b3ItZm4sIHdoaWNoIG11c3QgYmUgYSBmbiBvZiBubyBhcmdzXG4gIHRoYXQgcmV0dXJucyBhIHRlc3QuY2hlY2sgZ2VuZXJhdG9yLlwiXG4gIFsmIHs6a2V5cyBbYXJncyByZXQgZm4gZ2VuXX1dXG4gIChsZXQgW2VudiAmZW52XVxuICAgIGAoZnNwZWMtaW1wbCAoc3BlYyB+YXJncykgJ34ocmVzIGVudiBhcmdzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNwZWMgfnJldCkgJ34ocmVzIGVudiByZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoc3BlYyB+Zm4pICd+KHJlcyBlbnYgZm4pIH5nZW4pKSlcblxuKGRlZm1hY3JvIHR1cGxlXG4gIFwidGFrZXMgb25lIG9yIG1vcmUgcHJlZHMgYW5kIHJldHVybnMgYSBzcGVjIGZvciBhIHR1cGxlLCBhIHZlY3RvclxuICB3aGVyZSBlYWNoIGVsZW1lbnQgY29uZm9ybXMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgcHJlZC4gRWFjaCBlbGVtZW50XG4gIHdpbGwgYmUgcmVmZXJyZWQgdG8gaW4gcGF0aHMgdXNpbmcgaXRzIG9yZGluYWwuXCJcbiAgWyYgcHJlZHNdXG4gIChjbG9qdXJlLmNvcmUvYXNzZXJ0IChub3QgKGVtcHR5PyBwcmVkcykpKVxuICBgKHR1cGxlLWltcGwgJ34obWFwdiAjKHJlcyAmZW52ICUpIHByZWRzKSB+KHZlYyBwcmVkcykpKVxuXG4oZGVmIF46cHJpdmF0ZSBfc3BlY2VkX3ZhcnMgKGF0b20gI3t9KSlcblxuKGRlZm4gc3BlY2VkLXZhcnMgW11cbiAgQF9zcGVjZWRfdmFycylcblxuKGRlZm1hY3JvIGZkZWZcbiAgXCJUYWtlcyBhIHN5bWJvbCBuYW1pbmcgYSBmdW5jdGlvbiwgYW5kIG9uZSBvciBtb3JlIG9mIHRoZSBmb2xsb3dpbmc6XG5cbiAgOmFyZ3MgQSByZWdleCBzcGVjIGZvciB0aGUgZnVuY3Rpb24gYXJndW1lbnRzIGFzIHRoZXkgd2VyZSBhIGxpc3QgdG8gYmVcbiAgICBwYXNzZWQgdG8gYXBwbHkgLSBpbiB0aGlzIHdheSwgYSBzaW5nbGUgc3BlYyBjYW4gaGFuZGxlIGZ1bmN0aW9ucyB3aXRoXG4gICAgbXVsdGlwbGUgYXJpdGllc1xuICA6cmV0IEEgc3BlYyBmb3IgdGhlIGZ1bmN0aW9uJ3MgcmV0dXJuIHZhbHVlXG4gIDpmbiBBIHNwZWMgb2YgdGhlIHJlbGF0aW9uc2hpcCBiZXR3ZWVuIGFyZ3MgYW5kIHJldCAtIHRoZVxuICAgIHZhbHVlIHBhc3NlZCBpcyB7OmFyZ3MgY29uZm9ybWVkLWFyZ3MgOnJldCBjb25mb3JtZWQtcmV0fSBhbmQgaXNcbiAgICBleHBlY3RlZCB0byBjb250YWluIHByZWRpY2F0ZXMgdGhhdCByZWxhdGUgdGhvc2UgdmFsdWVzXG5cbiAgUXVhbGlmaWVzIGZuLXN5bSB3aXRoIHJlc29sdmUsIG9yIHVzaW5nICpucyogaWYgbm8gcmVzb2x1dGlvbiBmb3VuZC5cbiAgUmVnaXN0ZXJzIGFuIGZzcGVjIGluIHRoZSBnbG9iYWwgcmVnaXN0cnksIHdoZXJlIGl0IGNhbiBiZSByZXRyaWV2ZWRcbiAgYnkgY2FsbGluZyBnZXQtc3BlYyB3aXRoIHRoZSB2YXIgb3IgZnVsbC1xdWFsaWZpZWQgc3ltYm9sLlxuXG4gIE9uY2UgcmVnaXN0ZXJlZCwgZnVuY3Rpb24gc3BlY3MgYXJlIGluY2x1ZGVkIGluIGRvYywgY2hlY2tlZCBieVxuICBpbnN0cnVtZW50LCB0ZXN0ZWQgYnkgdGhlIHJ1bm5lciBjbG9qdXJlLnNwZWMudGVzdC9ydW4tdGVzdHMsIGFuZCAoaWZcbiAgYSBtYWNybykgdXNlZCB0byBleHBsYWluIGVycm9ycyBkdXJpbmcgbWFjcm9leHBhbnNpb24uXG5cbiAgTm90ZSB0aGF0IDpmbiBzcGVjcyByZXF1aXJlIHRoZSBwcmVzZW5jZSBvZiA6YXJncyBhbmQgOnJldCBzcGVjcyB0b1xuICBjb25mb3JtIHZhbHVlcywgYW5kIHNvIDpmbiBzcGVjcyB3aWxsIGJlIGlnbm9yZWQgaWYgOmFyZ3Mgb3IgOnJldFxuICBhcmUgbWlzc2luZy5cblxuICBSZXR1cm5zIHRoZSBxdWFsaWZpZWQgZm4tc3ltLlxuXG4gIEZvciBleGFtcGxlLCB0byByZWdpc3RlciBmdW5jdGlvbiBzcGVjcyBmb3IgdGhlIHN5bWJvbCBmdW5jdGlvbjpcblxuICAocy9mZGVmIGNsb2p1cmUuY29yZS9zeW1ib2xcbiAgICA6YXJncyAocy9hbHQgOnNlcGFyYXRlIChzL2NhdCA6bnMgc3RyaW5nPyA6biBzdHJpbmc/KVxuICAgICAgICAgICAgICAgICA6c3RyIHN0cmluZz9cbiAgICAgICAgICAgICAgICAgOnN5bSBzeW1ib2w/KVxuICAgIDpyZXQgc3ltYm9sPylcIlxuICBbZm4tc3ltICYgc3BlY3NdXG4gIChzd2FwISBfc3BlY2VkX3ZhcnMgY29uaiAobnMtcXVhbGlmeSAmZW52IGZuLXN5bSkpXG4gIGAoY2xqcy5zcGVjL2RlZiB+Zm4tc3ltIChmc3BlYyB+QHNwZWNzKSkpXG5cbihkZWZtYWNybyBrZXlzKlxuICBcInRha2VzIHRoZSBzYW1lIGFyZ3VtZW50cyBhcyBzcGVjL2tleXMgYW5kIHJldHVybnMgYSByZWdleCBvcCB0aGF0IG1hdGNoZXMgc2VxdWVuY2VzIG9mIGtleS92YWx1ZXMsXG4gIGNvbnZlcnRzIHRoZW0gaW50byBhIG1hcCwgYW5kIGNvbmZvcm1zIHRoYXQgbWFwIHdpdGggYSBjb3JyZXNwb25kaW5nXG4gIHNwZWMva2V5cyBjYWxsOlxuXG4gIHVzZXI9PiAocy9jb25mb3JtIChzL2tleXMgOnJlcS11biBbOjphIDo6Y10pIHs6YSAxIDpjIDJ9KVxuICB7OmEgMSwgOmMgMn1cbiAgdXNlcj0+IChzL2NvbmZvcm0gKHMva2V5cyogOnJlcS11biBbOjphIDo6Y10pIFs6YSAxIDpjIDJdKVxuICB7OmEgMSwgOmMgMn1cblxuICB0aGUgcmVzdWx0aW5nIHJlZ2V4IG9wIGNhbiBiZSBjb21wb3NlZCBpbnRvIGEgbGFyZ2VyIHJlZ2V4OlxuXG4gIHVzZXI9PiAocy9jb25mb3JtIChzL2NhdCA6aTEgaW50ZWdlcj8gOm0gKHMva2V5cyogOnJlcS11biBbOjphIDo6Y10pIDppMiBpbnRlZ2VyPykgWzQyIDphIDEgOmMgMiA6ZCA0IDk5XSlcbiAgezppMSA0MiwgOm0gezphIDEsIDpjIDIsIDpkIDR9LCA6aTIgOTl9XCJcbiAgWyYga3NwZWNzXVxuICBgKGxldCBbbXNwZWMjIChrZXlzIH5Aa3NwZWNzKV1cbiAgICAgKHdpdGgtZ2VuIChjbGpzLnNwZWMvJiAoKiAoY2F0IDo6ayBrZXl3b3JkPyA6OnYgY2xqcy5jb3JlL2FueT8pKSA6Omt2cy0+bWFwIG1zcGVjIylcbiAgICAgICAoZm4gW10gKGdlbi9mbWFwIChmbiBbbSNdIChhcHBseSBjb25jYXQgbSMpKSAoZ2VuIG1zcGVjIykpKSkpKVxuXG4oZGVmbWFjcm8gbmlsYWJsZVxuICBcInJldHVybnMgYSBzcGVjIHRoYXQgYWNjZXB0cyBuaWwgYW5kIHZhbHVlcyBzYXRpc2ZpeWluZyBwcmVkXCJcbiAgW3ByZWRdXG4gIChsZXQgW3BmIChyZXMgJmVudiBwcmVkKV1cbiAgICBgKG5pbGFibGUtaW1wbCAnfnBmIH5wcmVkIG5pbCkpKVxuXG4oZGVmbWFjcm8gaW5zdC1pblxuICBcIlJldHVybnMgYSBzcGVjIHRoYXQgdmFsaWRhdGVzIGluc3RzIGluIHRoZSByYW5nZSBmcm9tIHN0YXJ0XG4gIChpbmNsdXNpdmUpIHRvIGVuZCAoZXhjbHVzaXZlKS5cIlxuICBbc3RhcnQgZW5kXVxuICBgKGxldCBbc3QjIChjbGpzLmNvcmUvaW5zdC1tcyB+c3RhcnQpXG4gICAgICAgICBldCMgKGNsanMuY29yZS9pbnN0LW1zIH5lbmQpXG4gICAgICAgICBta2RhdGUjIChmbiBbZCNdIChqcy9EYXRlLiBkIykpXVxuICAgICAoc3BlYyAoYW5kIGNsanMuY29yZS9pbnN0PyAjKGluc3QtaW4tcmFuZ2U/IH5zdGFydCB+ZW5kICUpKVxuICAgICAgIDpnZW4gKGZuIFtdXG4gICAgICAgICAgICAgIChnZW4vZm1hcCBta2RhdGUjXG4gICAgICAgICAgICAgICAgKGdlbi9sYXJnZS1pbnRlZ2VyKiB7Om1pbiBzdCMgOm1heCBldCN9KSkpKSkpXG5cbihkZWZtYWNybyBpbnQtaW5cbiAgXCJSZXR1cm5zIGEgc3BlYyB0aGF0IHZhbGlkYXRlcyBsb25ncyBpbiB0aGUgcmFuZ2UgZnJvbSBzdGFydFxuICAoaW5jbHVzaXZlKSB0byBlbmQgKGV4Y2x1c2l2ZSkuXCJcbiAgW3N0YXJ0IGVuZF1cbiAgYChzcGVjIChhbmQgYy9pbnQ/ICMoaW50LWluLXJhbmdlPyB+c3RhcnQgfmVuZCAlKSlcbiAgICAgOmdlbiAjKGdlbi9sYXJnZS1pbnRlZ2VyKiB7Om1pbiB+c3RhcnQgOm1heCAoZGVjIH5lbmQpfSkpKVxuXG4oZGVmbWFjcm8gZG91YmxlLWluXG4gIFwiU3BlY3MgYSA2NC1iaXQgZmxvYXRpbmcgcG9pbnQgbnVtYmVyLiBPcHRpb25zOlxuXG4gICAgOmluZmluaXRlPyAtIHdoZXRoZXIgKy8tIGluZmluaXR5IGFsbG93ZWQgKGRlZmF1bHQgdHJ1ZSlcbiAgICA6TmFOPyAgICAgIC0gd2hldGhlciBOYU4gYWxsb3dlZCAoZGVmYXVsdCB0cnVlKVxuICAgIDptaW4gICAgICAgLSBtaW5pbXVtIHZhbHVlIChpbmNsdXNpdmUsIGRlZmF1bHQgbm9uZSlcbiAgICA6bWF4ICAgICAgIC0gbWF4aW11bSB2YWx1ZSAoaW5jbHVzaXZlLCBkZWZhdWx0IG5vbmUpXCJcbiAgWyYgezprZXlzIFtpbmZpbml0ZT8gTmFOPyBtaW4gbWF4XVxuICAgICAgOm9yIHtpbmZpbml0ZT8gdHJ1ZSBOYU4/IHRydWV9XG4gICAgICA6YXMgbX1dXG4gIGAoc3BlYyAoYW5kIGMvZG91YmxlP1xuICAgICAgICAgICB+QCh3aGVuLW5vdCBpbmZpbml0ZT8gJ1sjKG5vdCAoaW5maW5pdGU/ICUpKV0pXG4gICAgICAgICAgIH5AKHdoZW4tbm90IE5hTj8gJ1sjKG5vdCAoanMvaXNOYU4gJSkpXSlcbiAgICAgICAgICAgfkAod2hlbiBtYXggYFsjKDw9ICUgfm1heCldKVxuICAgICAgICAgICB+QCh3aGVuIG1pbiBgWyMoPD0gfm1pbiAlKV0pKVxuICAgICA6Z2VuICMoZ2VuL2RvdWJsZSogfm0pKSlcblxuKGRlZm1hY3JvIG1lcmdlXG4gIFwiVGFrZXMgbWFwLXZhbGlkYXRpbmcgc3BlY3MgKGUuZy4gJ2tleXMnIHNwZWNzKSBhbmRcbiAgcmV0dXJucyBhIHNwZWMgdGhhdCByZXR1cm5zIGEgY29uZm9ybWVkIG1hcCBzYXRpc2Z5aW5nIGFsbCBvZiB0aGVcbiAgc3BlY3MuICBTdWNjZXNzaXZlIGNvbmZvcm1lZCB2YWx1ZXMgcHJvcGFnYXRlIHRocm91Z2ggcmVzdCBvZlxuICBwcmVkaWNhdGVzLiBVbmxpa2UgJ2FuZCcsIG1lcmdlIGNhbiBnZW5lcmF0ZSBtYXBzIHNhdGlzZnlpbmcgdGhlXG4gIHVuaW9uIG9mIHRoZSBwcmVkaWNhdGVzLlwiXG4gIFsmIHByZWQtZm9ybXNdXG4gIGAobWVyZ2Utc3BlYy1pbXBsICd+KG1hcHYgIyhyZXMgJmVudiAlKSBwcmVkLWZvcm1zKSB+KHZlYyBwcmVkLWZvcm1zKSBuaWwpKVxuXG4oZGVmbWFjcm8gZXhlcmNpc2UtZm5cbiAgXCJleGVyY2lzZXMgdGhlIGZuIG5hbWVkIGJ5IHN5bSAoYSBzeW1ib2wpIGJ5IGFwcGx5aW5nIGl0IHRvXG4gIG4gKGRlZmF1bHQgMTApIGdlbmVyYXRlZCBzYW1wbGVzIG9mIGl0cyBhcmdzIHNwZWMuIFdoZW4gZnNwZWMgaXNcbiAgc3VwcGxpZWQgaXRzIGFyZyBzcGVjIGlzIHVzZWQsIGFuZCBzeW0tb3ItZiBjYW4gYmUgYSBmbi4gIFJldHVybnMgYVxuICBzZXF1ZW5jZSBvZiB0dXBsZXMgb2YgW2FyZ3MgcmV0XS4gXCJcbiAgKFtzeW1dXG4gICBgKGV4ZXJjaXNlLWZuIH5zeW0gMTApKVxuICAoW3N5bSBuXVxuICAgYChleGVyY2lzZS1mbiB+c3ltIH5uIG5pbCkpXG4gIChbc3ltIG4gZnNwZWNdXG4gICAobGV0IFtzeW0gKGNvbmQtPiBzeW1cbiAgICAgICAgICAgICAgIChjbG9qdXJlLmNvcmUvYW5kIChzZXF1ZW50aWFsPyBzeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoPSAoZmlyc3Qgc3ltKSAncXVvdGUpKVxuICAgICAgICAgICAgICAgc2Vjb25kKV1cbiAgICAgYChsZXQgW2ZzcGVjIyB+KGlmLW5vdCBmc3BlY1xuICAgICAgICAgICAgICAgICAgICAgIGAoZ2V0LXNwZWMgJ34oOm5hbWUgKHJlc29sdmUgJmVudiBzeW0pKSlcbiAgICAgICAgICAgICAgICAgICAgICBmc3BlYylcbiAgICAgICAgICAgIGYjICAgICB+c3ltXVxuICAgICAgICAoZm9yIFthcmdzIyAoZ2VuL3NhbXBsZSAoZ2VuICg6YXJncyBmc3BlYyMpKSB+bildXG4gICAgICAgICAgW2FyZ3MjIChhcHBseSBmIyBhcmdzIyldKSkpKSlcblxuKGRlZm1hY3JvIF46cHJpdmF0ZSBpbml0LWNvbXBpbGUtYXNzZXJ0cyBbXVxuICAobGV0IFtjb21waWxlLWFzc2VydHMgKG5vdCAoLT4gZW52Lypjb21waWxlciogZGVyZWYgOm9wdGlvbnMgOmVsaWRlLWFzc2VydHMpKV1cbiAgICBjb21waWxlLWFzc2VydHMpKVxuXG4oZGVmbWFjcm8gYXNzZXJ0XG4gIFwic3BlYy1jaGVja2luZyBhc3NlcnQgZXhwcmVzc2lvbi4gUmV0dXJucyB4IGlmIHggaXMgdmFsaWQ/IGFjY29yZGluZ1xudG8gc3BlYywgZWxzZSB0aHJvd3MgYW4gZXJyb3Igd2l0aCBleHBsYWluLWRhdGEgcGx1cyA6OmZhaWx1cmUgb2Zcbjphc3NlcnRpb24tZmFpbGVkLlxuQ2FuIGJlIGRpc2FibGVkIGF0IGVpdGhlciBjb21waWxlIHRpbWUgb3IgcnVudGltZTpcbklmICpjb21waWxlLWFzc2VydHMqIGlzIGZhbHNlIGF0IGNvbXBpbGUgdGltZSwgY29tcGlsZXMgdG8geC4gRGVmYXVsdHNcbnRvIHRoZSBuZWdhdGlvbiB2YWx1ZSBvZiB0aGUgJzplbGlkZS1hc3NlcnRzJyBjb21waWxlciBvcHRpb24sIG9yIHRydWUgaWZcbm5vdCBzZXQuXG5JZiAoY2hlY2stYXNzZXJ0cz8pIGlzIGZhbHNlIGF0IHJ1bnRpbWUsIGFsd2F5cyByZXR1cm5zIHguIERlZmF1bHRzIHRvXG52YWx1ZSBvZiAnY2xqcy5zcGVjLypydW50aW1lLWFzc2VydHMqJywgb3IgZmFsc2UgaWYgbm90IHNldC4gWW91IGNhblxudG9nZ2xlIGNoZWNrLWFzc2VydHM/IHdpdGggKGNoZWNrLWFzc2VydHMgYm9vbCkuXCJcbiAgW3NwZWMgeF1cbiAgYChpZiAqY29tcGlsZS1hc3NlcnRzKlxuICAgICAoaWYgKnJ1bnRpbWUtYXNzZXJ0cypcbiAgICAgICAoYXNzZXJ0KiB+c3BlYyB+eClcbiAgICAgICB+eClcbiAgICB+eCkpXG4iXX0=