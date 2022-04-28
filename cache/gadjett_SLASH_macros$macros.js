goog.provide('gadjett.macros$macros');
/**
 * returns a symbol with the concatenation of the str values of the args
 */
gadjett.macros$macros.symbol_several = (function gadjett$macros$macros$symbol_several(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19745 = arguments.length;
var i__4737__auto___19746 = (0);
while(true){
if((i__4737__auto___19746 < len__4736__auto___19745)){
args__4742__auto__.push((arguments[i__4737__auto___19746]));

var G__19747 = (i__4737__auto___19746 + (1));
i__4737__auto___19746 = G__19747;
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
(gadjett.macros$macros.symbol_several.cljs$lang$applyTo = (function (seq19724){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19724));
}));

var ret__4785__auto___19752 = (function (){
gadjett.macros$macros.disp = (function gadjett$macros$macros$disp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19753 = arguments.length;
var i__4737__auto___19754 = (0);
while(true){
if((i__4737__auto___19754 < len__4736__auto___19753)){
args__4742__auto__.push((arguments[i__4737__auto___19754]));

var G__19755 = (i__4737__auto___19754 + (1));
i__4737__auto___19754 = G__19755;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.cons(new cljs.core.Symbol("","symbol-several","/symbol-several",-1886895634,null),(function (){var iter__4529__auto__ = (function gadjett$macros$macros$iter__19730(s__19731){
return (new cljs.core.LazySeq(null,(function (){
var s__19731__$1 = s__19731;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__19731__$1);
if(temp__5735__auto__){
var s__19731__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19731__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__19731__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__19733 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__19732 = (0);
while(true){
if((i__19732 < size__4528__auto__)){
var form = cljs.core._nth(c__4527__auto__,i__19732);
cljs.core.chunk_append(b__19733,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null))], 0)))));

var G__19758 = (i__19732 + (1));
i__19732 = G__19758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19733),gadjett$macros$macros$iter__19730(cljs.core.chunk_rest(s__19731__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19733),null);
}
} else {
var form = cljs.core.first(s__19731__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null))], 0)))),gadjett$macros$macros$iter__19730(cljs.core.rest(s__19731__$2)));
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
(gadjett.macros$macros.disp.cljs$lang$applyTo = (function (seq19727){
var G__19728 = cljs.core.first(seq19727);
var seq19727__$1 = cljs.core.next(seq19727);
var G__19729 = cljs.core.first(seq19727__$1);
var seq19727__$2 = cljs.core.next(seq19727__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19728,G__19729,seq19727__$2);
}));

return null;
})()
;
(gadjett.macros$macros.disp.cljs$lang$macro = true);


//# sourceMappingURL=gadjett.macros$macros.js.map
