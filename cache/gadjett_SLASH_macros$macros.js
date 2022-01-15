goog.provide('gadjett.macros$macros');
/**
 * returns a symbol with the concatenation of the str values of the args
 */
gadjett.macros$macros.symbol_several = (function gadjett$macros$macros$symbol_several(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7700 = arguments.length;
var i__4737__auto___7701 = (0);
while(true){
if((i__4737__auto___7701 < len__4736__auto___7700)){
args__4742__auto__.push((arguments[i__4737__auto___7701]));

var G__7702 = (i__4737__auto___7701 + (1));
i__4737__auto___7701 = G__7702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return gadjett.macros$macros.symbol_several.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(gadjett.macros$macros.symbol_several.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,x));
}));

(gadjett.macros$macros.symbol_several.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(gadjett.macros$macros.symbol_several.cljs$lang$applyTo = (function (seq7638){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7638));
}));

var ret__4785__auto___7704 = (function (){
gadjett.macros$macros.disp = (function gadjett$macros$macros$disp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7706 = arguments.length;
var i__4737__auto___7707 = (0);
while(true){
if((i__4737__auto___7707 < len__4736__auto___7706)){
args__4742__auto__.push((arguments[i__4737__auto___7707]));

var G__7708 = (i__4737__auto___7707 + (1));
i__4737__auto___7707 = G__7708;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.cons(new cljs.core.Symbol("","symbol-several","/symbol-several",-1886895634,null),(function (){var iter__4529__auto__ = (function gadjett$macros$macros$iter__7675(s__7676){
return (new cljs.core.LazySeq(null,(function (){
var s__7676__$1 = s__7676;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7676__$1);
if(temp__5735__auto__){
var s__7676__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7676__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__7676__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__7678 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__7677 = (0);
while(true){
if((i__7677 < size__4528__auto__)){
var form = cljs.core._nth(c__4527__auto__,i__7677);
cljs.core.chunk_append(b__7678,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null))], 0)))));

var G__7712 = (i__7677 + (1));
i__7677 = G__7712;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7678),gadjett$macros$macros$iter__7675(cljs.core.chunk_rest(s__7676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7678),null);
}
} else {
var form = cljs.core.first(s__7676__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null))], 0)))),gadjett$macros$macros$iter__7675(cljs.core.rest(s__7676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(forms);
})());
}));

(gadjett.macros$macros.disp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(gadjett.macros$macros.disp.cljs$lang$applyTo = (function (seq7666){
var G__7667 = cljs.core.first(seq7666);
var seq7666__$1 = cljs.core.next(seq7666);
var G__7668 = cljs.core.first(seq7666__$1);
var seq7666__$2 = cljs.core.next(seq7666__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7667,G__7668,seq7666__$2);
}));

return null;
})()
;
(gadjett.macros$macros.disp.cljs$lang$macro = true);


//# sourceMappingURL=gadjett.macros$macros.js.map
