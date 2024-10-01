goog.provide('chivorcam.core$macros');
chivorcam.core$macros.eval_form = (function chivorcam$core$macros$eval_form(form,ns){
if(cljs.core.truth_(cljs.core.find_ns(ns))){
} else {
cljs.core.eval(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))));
}

var _STAR_ns_STAR__orig_val__18278 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__18279 = cljs.core.find_ns(ns);
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__18279);

try{try{return cljs.core.eval(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","refer-clojure","cljs.core/refer-clojure",-913605094,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))));
}catch (e18280){var e = e18280;
throw cljs.core.ex_cause(e);
}}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__18278);
}});
chivorcam.core$macros.fake_var = (function chivorcam$core$macros$fake_var(ns,sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym));
});
chivorcam.core$macros.macros_ns = (function chivorcam$core$macros$macros_ns(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"$macros"].join(''));
});
var ret__5781__auto___18351 = (function (){
chivorcam.core$macros.defmacfn = (function chivorcam$core$macros$defmacfn(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18352 = arguments.length;
var i__5727__auto___18353 = (0);
while(true){
if((i__5727__auto___18353 < len__5726__auto___18352)){
args__5732__auto__.push((arguments[i__5727__auto___18353]));

var G__18355 = (i__5727__auto___18353 + (1));
i__5727__auto___18353 = G__18355;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return chivorcam.core$macros.defmacfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(chivorcam.core$macros.defmacfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
if(cljs.core.truth_(_AMPERSAND_env)){
chivorcam.core$macros.eval_form(form,chivorcam.core$macros.macros_ns(cljs.analyzer._STAR_cljs_ns_STAR_));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,chivorcam.core$macros.fake_var(cljs.analyzer._STAR_cljs_ns_STAR_,name),null,(1),null)))));
} else {
return form;
}
}));

(chivorcam.core$macros.defmacfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chivorcam.core$macros.defmacfn.cljs$lang$applyTo = (function (seq18297){
var G__18298 = cljs.core.first(seq18297);
var seq18297__$1 = cljs.core.next(seq18297);
var G__18299 = cljs.core.first(seq18297__$1);
var seq18297__$2 = cljs.core.next(seq18297__$1);
var G__18300 = cljs.core.first(seq18297__$2);
var seq18297__$3 = cljs.core.next(seq18297__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18298,G__18299,G__18300,seq18297__$3);
}));

return null;
})()
;
(chivorcam.core$macros.defmacfn.cljs$lang$macro = true);

var ret__5781__auto___18363 = (function (){
chivorcam.core$macros.defmacro = (function chivorcam$core$macros$defmacro(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18364 = arguments.length;
var i__5727__auto___18365 = (0);
while(true){
if((i__5727__auto___18365 < len__5726__auto___18364)){
args__5732__auto__.push((arguments[i__5727__auto___18365]));

var G__18366 = (i__5727__auto___18365 + (1));
i__5727__auto___18365 = G__18366;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return chivorcam.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(chivorcam.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var form = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmacro","cljs.core/defmacro",-1834053857,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
if(cljs.core.truth_(_AMPERSAND_env)){
chivorcam.core$macros.eval_form(form,chivorcam.core$macros.macros_ns(cljs.analyzer._STAR_cljs_ns_STAR_));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer._STAR_cljs_ns_STAR_,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.analyzer._STAR_cljs_ns_STAR_,cljs.analyzer._STAR_cljs_ns_STAR_], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer._STAR_cljs_ns_STAR_,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name,cljs.analyzer._STAR_cljs_ns_STAR_], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,chivorcam.core$macros.fake_var(cljs.analyzer._STAR_cljs_ns_STAR_,name),null,(1),null)))));
} else {
return form;
}
}));

(chivorcam.core$macros.defmacro.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(chivorcam.core$macros.defmacro.cljs$lang$applyTo = (function (seq18315){
var G__18316 = cljs.core.first(seq18315);
var seq18315__$1 = cljs.core.next(seq18315);
var G__18317 = cljs.core.first(seq18315__$1);
var seq18315__$2 = cljs.core.next(seq18315__$1);
var G__18318 = cljs.core.first(seq18315__$2);
var seq18315__$3 = cljs.core.next(seq18315__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18316,G__18317,G__18318,seq18315__$3);
}));

return null;
})()
;
(chivorcam.core$macros.defmacro.cljs$lang$macro = true);


//# sourceMappingURL=chivorcam.core$macros.js.map
