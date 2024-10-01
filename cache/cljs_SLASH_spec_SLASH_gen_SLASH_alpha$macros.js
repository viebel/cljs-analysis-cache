goog.provide('cljs.spec.gen.alpha$macros');
var ret__5781__auto___16565 = cljs.spec.gen.alpha$macros.dynaload = (function cljs$spec$gen$alpha$macros$dynaload(_AMPERSAND_form,_AMPERSAND_env,p__16506){
var vec__16507 = p__16506;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16507,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16507,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","LazyVar.","cljs.spec.gen.alpha/LazyVar.",-1422353692,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(s,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Var ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," does not exist, ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",1653264270,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null," never required",null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
});
(cljs.spec.gen.alpha$macros.dynaload.cljs$lang$macro = true);

var ret__5781__auto___16573 = (function (){
/**
 * given body that returns a generator, returns a
 *   generator that delegates to that, but delays
 *   creation until used.
 */
cljs.spec.gen.alpha$macros.delay = (function cljs$spec$gen$alpha$macros$delay(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16574 = arguments.length;
var i__5727__auto___16575 = (0);
while(true){
if((i__5727__auto___16575 < len__5726__auto___16574)){
args__5732__auto__.push((arguments[i__5727__auto___16575]));

var G__16576 = (i__5727__auto___16575 + (1));
i__5727__auto___16575 = G__16576;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.spec.gen.alpha$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","delay-impl","cljs.spec.gen.alpha/delay-impl",-1184837112,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",-406049125,null),null,(1),null)),body))),null,(1),null)))));
}));

(cljs.spec.gen.alpha$macros.delay.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.gen.alpha$macros.delay.cljs$lang$applyTo = (function (seq16518){
var G__16519 = cljs.core.first(seq16518);
var seq16518__$1 = cljs.core.next(seq16518);
var G__16520 = cljs.core.first(seq16518__$1);
var seq16518__$2 = cljs.core.next(seq16518__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16519,G__16520,seq16518__$2);
}));

return null;
})()
;
(cljs.spec.gen.alpha$macros.delay.cljs$lang$macro = true);

var ret__5781__auto___16578 = /**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_combinator = (function cljs$spec$gen$alpha$macros$lazy_combinator(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = ["Lazy loaded version of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"g__16528__auto__","g__16528__auto__",1130870152,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","dynaload","cljs.spec.gen.alpha/dynaload",-1253128860,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fqn,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"g__16528__auto__","g__16528__auto__",1130870152,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.gen.alpha$macros.lazy_combinator.cljs$lang$macro = true);

var ret__5781__auto___16587 = (function (){
/**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_combinators = (function cljs$spec$gen$alpha$macros$lazy_combinators(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16588 = arguments.length;
var i__5727__auto___16589 = (0);
while(true){
if((i__5727__auto___16589 < len__5726__auto___16588)){
args__5732__auto__.push((arguments[i__5727__auto___16589]));

var G__16590 = (i__5727__auto___16589 + (1));
i__5727__auto___16589 = G__16590;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.spec.gen.alpha$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","lazy-combinator","cljs.spec.gen.alpha/lazy-combinator",1305287268,null),(new cljs.core.List(null,s,null,(1),null)),(2),null));
}),syms))));
}));

(cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$applyTo = (function (seq16542){
var G__16543 = cljs.core.first(seq16542);
var seq16542__$1 = cljs.core.next(seq16542);
var G__16544 = cljs.core.first(seq16542__$1);
var seq16542__$2 = cljs.core.next(seq16542__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16543,G__16544,seq16542__$2);
}));

return null;
})()
;
(cljs.spec.gen.alpha$macros.lazy_combinators.cljs$lang$macro = true);

var ret__5781__auto___16601 = /**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_prim = (function cljs$spec$gen$alpha$macros$lazy_prim(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("clojure.test.check.generators",cljs.core.name(s));
var doc = ["Fn returning ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"g__16555__auto__","g__16555__auto__",2097919250,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","dynaload","cljs.spec.gen.alpha/dynaload",-1253128860,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fqn,null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"g__16555__auto__","g__16555__auto__",2097919250,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.gen.alpha$macros.lazy_prim.cljs$lang$macro = true);

var ret__5781__auto___16602 = (function (){
/**
 * Implementation macro, do not call directly.
 */
cljs.spec.gen.alpha$macros.lazy_prims = (function cljs$spec$gen$alpha$macros$lazy_prims(var_args){
var args__5732__auto__ = [];
var len__5726__auto___16607 = arguments.length;
var i__5727__auto___16608 = (0);
while(true){
if((i__5727__auto___16608 < len__5726__auto___16607)){
args__5732__auto__.push((arguments[i__5727__auto___16608]));

var G__16609 = (i__5727__auto___16608 + (1));
i__5727__auto___16608 = G__16609;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.spec.gen.alpha$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.gen.alpha","lazy-prim","cljs.spec.gen.alpha/lazy-prim",-1495559509,null),(new cljs.core.List(null,s,null,(1),null)),(2),null));
}),syms))));
}));

(cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$applyTo = (function (seq16561){
var G__16562 = cljs.core.first(seq16561);
var seq16561__$1 = cljs.core.next(seq16561);
var G__16563 = cljs.core.first(seq16561__$1);
var seq16561__$2 = cljs.core.next(seq16561__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16562,G__16563,seq16561__$2);
}));

return null;
})()
;
(cljs.spec.gen.alpha$macros.lazy_prims.cljs$lang$macro = true);


//# sourceMappingURL=cljs.spec.gen.alpha$macros.js.map
