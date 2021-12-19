goog.provide('chivorcam.core$macros');
chivorcam.core$macros.eval_form = (function chivorcam$core$macros$eval_form(form,ns){
if(cljs.core.truth_(cljs.core.find_ns(ns))){
} else {
cljs.core.eval(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))));
}

var _STAR_ns_STAR__orig_val__16475 = cljs.core._STAR_ns_STAR_;
var _STAR_ns_STAR__temp_val__16476 = cljs.core.find_ns(ns);
(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__temp_val__16476);

try{try{return cljs.core.eval(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","refer-clojure","cljs.core/refer-clojure",-913605094,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))));
}catch (e16477){var e = e16477;
throw cljs.core.ex_cause(e);
}}finally {(cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR__orig_val__16475);
}});
chivorcam.core$macros.fake_var = (function chivorcam$core$macros$fake_var(ns,sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(["#'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym));
});
chivorcam.core$macros.macros_ns = (function chivorcam$core$macros$macros_ns(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"$macros"].join(''));
});
var ret__4785__auto___16568 = (function (){
chivorcam.core$macros.defmacfn = (function chivorcam$core$macros$defmacfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16569 = arguments.length;
var i__4737__auto___16570 = (0);
while(true){
if((i__4737__auto___16570 < len__4736__auto___16569)){
args__4742__auto__.push((arguments[i__4737__auto___16570]));

var G__16571 = (i__4737__auto___16570 + (1));
i__4737__auto___16570 = G__16571;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return chivorcam.core$macros.defmacfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
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
(chivorcam.core$macros.defmacfn.cljs$lang$applyTo = (function (seq16504){
var G__16505 = cljs.core.first(seq16504);
var seq16504__$1 = cljs.core.next(seq16504);
var G__16506 = cljs.core.first(seq16504__$1);
var seq16504__$2 = cljs.core.next(seq16504__$1);
var G__16508 = cljs.core.first(seq16504__$2);
var seq16504__$3 = cljs.core.next(seq16504__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16505,G__16506,G__16508,seq16504__$3);
}));

return null;
})()
;
(chivorcam.core$macros.defmacfn.cljs$lang$macro = true);

var ret__4785__auto___16581 = (function (){
chivorcam.core$macros.defmacro = (function chivorcam$core$macros$defmacro(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16582 = arguments.length;
var i__4737__auto___16583 = (0);
while(true){
if((i__4737__auto___16583 < len__4736__auto___16582)){
args__4742__auto__.push((arguments[i__4737__auto___16583]));

var G__16584 = (i__4737__auto___16583 + (1));
i__4737__auto___16583 = G__16584;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return chivorcam.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
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
(chivorcam.core$macros.defmacro.cljs$lang$applyTo = (function (seq16529){
var G__16531 = cljs.core.first(seq16529);
var seq16529__$1 = cljs.core.next(seq16529);
var G__16533 = cljs.core.first(seq16529__$1);
var seq16529__$2 = cljs.core.next(seq16529__$1);
var G__16534 = cljs.core.first(seq16529__$2);
var seq16529__$3 = cljs.core.next(seq16529__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16531,G__16533,G__16534,seq16529__$3);
}));

return null;
})()
;
(chivorcam.core$macros.defmacro.cljs$lang$macro = true);


//# sourceMappingURL=chivorcam.core$macros.js.map
