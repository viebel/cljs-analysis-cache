goog.provide('gadjett.macros$macros');
/**
 * returns a symbol with the concatenation of the str values of the args
 */
gadjett.macros$macros.symbol_several = (function gadjett$macros$macros$symbol_several(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19580 = arguments.length;
var i__5727__auto___19581 = (0);
while(true){
if((i__5727__auto___19581 < len__5726__auto___19580)){
args__5732__auto__.push((arguments[i__5727__auto___19581]));

var G__19582 = (i__5727__auto___19581 + (1));
i__5727__auto___19581 = G__19582;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return gadjett.macros$macros.symbol_several.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(gadjett.macros$macros.symbol_several.cljs$core$IFn$_invoke$arity$variadic = (function (x){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,x));
}));

(gadjett.macros$macros.symbol_several.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(gadjett.macros$macros.symbol_several.cljs$lang$applyTo = (function (seq19395){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19395));
}));

var ret__5781__auto___19583 = (function (){
gadjett.macros$macros.disp = (function gadjett$macros$macros$disp(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19584 = arguments.length;
var i__5727__auto___19586 = (0);
while(true){
if((i__5727__auto___19586 < len__5726__auto___19584)){
args__5732__auto__.push((arguments[i__5727__auto___19586]));

var G__19587 = (i__5727__auto___19586 + (1));
i__5727__auto___19586 = G__19587;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(gadjett.macros$macros.disp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.cons(new cljs.core.Symbol("","symbol-several","/symbol-several",-1886895634,null),(function (){var iter__5480__auto__ = (function gadjett$macros$macros$iter__19562(s__19563){
return (new cljs.core.LazySeq(null,(function (){
var s__19563__$1 = s__19563;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__19563__$1);
if(temp__5804__auto__){
var s__19563__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19563__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__19563__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__19565 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__19564 = (0);
while(true){
if((i__19564 < size__5479__auto__)){
var form = cljs.core._nth(c__5478__auto__,i__19564);
cljs.core.chunk_append(b__19565,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null))], 0)))));

var G__19589 = (i__19564 + (1));
i__19564 = G__19589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19565),gadjett$macros$macros$iter__19562(cljs.core.chunk_rest(s__19563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19565),null);
}
} else {
var form = cljs.core.first(s__19563__$2);
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null," => ",null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null))], 0)))),gadjett$macros$macros$iter__19562(cljs.core.rest(s__19563__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(forms);
})());
}));

(gadjett.macros$macros.disp.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(gadjett.macros$macros.disp.cljs$lang$applyTo = (function (seq19558){
var G__19559 = cljs.core.first(seq19558);
var seq19558__$1 = cljs.core.next(seq19558);
var G__19560 = cljs.core.first(seq19558__$1);
var seq19558__$2 = cljs.core.next(seq19558__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19559,G__19560,seq19558__$2);
}));

return null;
})()
;
(gadjett.macros$macros.disp.cljs$lang$macro = true);


//# sourceMappingURL=gadjett.macros$macros.js.map
