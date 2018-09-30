// Compiled by ClojureScript 1.10.339
goog.provide("cljs.spec.impl.gen$macros");
var ret__9167__auto___26 = cljs.spec.impl.gen$macros.dynaload = (function cljs$spec$impl$gen$macros$dynaload(_AMPERSAND_form,_AMPERSAND_env,p__22){
var vec__23 = p__22;
var quote = cljs.core.nth.call(null,vec__23,(0),null);
var s = cljs.core.nth.call(null,vec__23,(1),null);
var xs = clojure.string.split.call(null,cljs.core.namespace.call(null,s),/\./);
var cnt = cljs.core.count.call(null,xs);
var checks = cljs.core.map.call(null,((function (xs,cnt,vec__23,quote,s){
return (function (n,xs__$1){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.call(null,clojure.string.join.call(null,".",cljs.core.take.call(null,n,xs__$1))),null,(1),null))));
});})(xs,cnt,vec__23,quote,s))
,cljs.core.range.call(null,(2),cnt),cljs.core.repeat.call(null,xs));
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","LazyVar.","cljs.spec.impl.gen/LazyVar.",(2097500660),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),checks,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",(1852387968),null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.call(null,s,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",(-1872351017)),true),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),(new cljs.core.List(null,"Var ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)))),null,(1),null)),(new cljs.core.List(null," does not exist, ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","namespace","cljs.core/namespace",(1653264270),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null," never required",null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))));
});
cljs.spec.impl.gen$macros.dynaload.cljs$lang$macro = true;

var ret__9167__auto___30 = (function (){
/**
 * given body that returns a generator, returns a
 *   generator that delegates to that, but delays
 *   creation until used.
 */
cljs.spec.impl.gen$macros.delay = (function cljs$spec$impl$gen$macros$delay(var_args){
var args__9144__auto__ = [];
var len__9141__auto___31 = arguments.length;
var i__9142__auto___32 = (0);
while(true){
if((i__9142__auto___32 < len__9141__auto___31)){
args__9144__auto__.push((arguments[i__9142__auto___32]));

var G__33 = (i__9142__auto___32 + (1));
i__9142__auto___32 = G__33;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec.impl.gen$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec.impl.gen$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","delay-impl","cljs.spec.impl.gen/delay-impl",(1328847128),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","delay","cljs.core/delay",(-406049125),null),null,(1),null)),body)),null,(1),null))));
});

cljs.spec.impl.gen$macros.delay.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.impl.gen$macros.delay.cljs$lang$applyTo = (function (seq27){
var G__28 = cljs.core.first.call(null,seq27);
var seq27__$1 = cljs.core.next.call(null,seq27);
var G__29 = cljs.core.first.call(null,seq27__$1);
var seq27__$2 = cljs.core.next.call(null,seq27__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28,G__29,seq27__$2);
});

return null;
})()
;
cljs.spec.impl.gen$macros.delay.cljs$lang$macro = true;

var ret__9167__auto___34 = /**
 * Implementation macro, do not call directly.
 */
cljs.spec.impl.gen$macros.lazy_combinator = (function cljs$spec$impl$gen$macros$lazy_combinator(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.call(null,"clojure.test.check.generators",cljs.core.name.call(null,s));
var doc = ["Lazy loaded version of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"g__1__auto__","g__1__auto__",(-1645419228),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","dynaload","cljs.spec.impl.gen/dynaload",(-1019543436),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,fqn,null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",(-2144855648),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",(-1338879193),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",(1757277831),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"g__1__auto__","g__1__auto__",(-1645419228),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",(-1338879193),null),null,(1),null)))),null,(1),null)))),null,(1),null))));
});
cljs.spec.impl.gen$macros.lazy_combinator.cljs$lang$macro = true;

var ret__9167__auto___38 = (function (){
/**
 * Implementation macro, do not call directly.
 */
cljs.spec.impl.gen$macros.lazy_combinators = (function cljs$spec$impl$gen$macros$lazy_combinators(var_args){
var args__9144__auto__ = [];
var len__9141__auto___39 = arguments.length;
var i__9142__auto___40 = (0);
while(true){
if((i__9142__auto___40 < len__9141__auto___39)){
args__9144__auto__.push((arguments[i__9142__auto___40]));

var G__41 = (i__9142__auto___40 + (1));
i__9142__auto___40 = G__41;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec.impl.gen$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec.impl.gen$macros.lazy_combinators.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),cljs.core.map.call(null,(function (s){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","lazy-combinator","cljs.spec.impl.gen/lazy-combinator",(-1623668972),null),(new cljs.core.List(null,s,null,(1),null)),(2),null));
}),syms)));
});

cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$applyTo = (function (seq35){
var G__36 = cljs.core.first.call(null,seq35);
var seq35__$1 = cljs.core.next.call(null,seq35);
var G__37 = cljs.core.first.call(null,seq35__$1);
var seq35__$2 = cljs.core.next.call(null,seq35__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36,G__37,seq35__$2);
});

return null;
})()
;
cljs.spec.impl.gen$macros.lazy_combinators.cljs$lang$macro = true;

var ret__9167__auto___42 = /**
 * Implementation macro, do not call directly.
 */
cljs.spec.impl.gen$macros.lazy_prim = (function cljs$spec$impl$gen$macros$lazy_prim(_AMPERSAND_form,_AMPERSAND_env,s){
var fqn = cljs.core.symbol.call(null,"clojure.test.check.generators",cljs.core.name.call(null,s));
var doc = ["Fn returning ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fqn)].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"g__2__auto__","g__2__auto__",(2093461362),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","dynaload","cljs.spec.impl.gen/dynaload",(-1019543436),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,fqn,null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",(-1606493717),null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",(-2144855648),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",(-1338879193),null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",(1901963335),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"g__2__auto__","g__2__auto__",(2093461362),null),null,(1),null)))),null,(1),null)))),null,(1),null))));
});
cljs.spec.impl.gen$macros.lazy_prim.cljs$lang$macro = true;

var ret__9167__auto___46 = (function (){
/**
 * Implementation macro, do not call directly.
 */
cljs.spec.impl.gen$macros.lazy_prims = (function cljs$spec$impl$gen$macros$lazy_prims(var_args){
var args__9144__auto__ = [];
var len__9141__auto___47 = arguments.length;
var i__9142__auto___48 = (0);
while(true){
if((i__9142__auto___48 < len__9141__auto___47)){
args__9144__auto__.push((arguments[i__9142__auto___48]));

var G__49 = (i__9142__auto___48 + (1));
i__9142__auto___48 = G__49;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((2) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((2)),(0),null)):null);
return cljs.spec.impl.gen$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9145__auto__);
});

cljs.spec.impl.gen$macros.lazy_prims.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,syms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),cljs.core.map.call(null,(function (s){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.impl.gen","lazy-prim","cljs.spec.impl.gen/lazy-prim",(1461179835),null),(new cljs.core.List(null,s,null,(1),null)),(2),null));
}),syms)));
});

cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$applyTo = (function (seq43){
var G__44 = cljs.core.first.call(null,seq43);
var seq43__$1 = cljs.core.next.call(null,seq43);
var G__45 = cljs.core.first.call(null,seq43__$1);
var seq43__$2 = cljs.core.next.call(null,seq43__$1);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44,G__45,seq43__$2);
});

return null;
})()
;
cljs.spec.impl.gen$macros.lazy_prims.cljs$lang$macro = true;


//# sourceURL=cljs/spec/impl/gen$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9zcGVjL2ltcGwvZ2VuJG1hY3Jvcy5qcyIsInNvdXJjZXMiOlsiZ2VuJG1hY3Jvcy5jbGpzIl0sImxpbmVDb3VudCI6MTgwLCJtYXBwaW5ncyI6IjtBQWFBLElBQUFBLHVCQUFBLHFDQUFBLDZDQUFBQyxnQkFBQUMsZUFBQUMsakhBQVVHO0FBQVYsQUFBQSxJQUFBRixVQUFBRDtZQUFBLEFBQUFFLHdCQUFBRCxRQUFBLElBQUEsNUNBQXFCRztRQUFyQixBQUFBRix3QkFBQUQsUUFBQSxJQUFBLHhDQUEyQkk7QUFBM0IsQUFDRSxJQUFNSyxLQUFPLGdFQUFBLGhFQUFDQywrQkFBYSxBQUFDQyw4QkFBVVA7SUFDaENRLE1BQU8sQUFBQ0MsMEJBQU1KO0lBQ2RLLFNBQU8sQUFBQ0Msd0JBQ0M7a0JBQUtDLEVBQUVQO0FBQVAsQUFBQSxPQUFBSiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsa0ZBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSx1R0FBQSxLQUFBLElBQUEsM0dBQ2UsQUFBQ1UsMkJBQU8sOEJBQUEsOUJBQUNDLGtDQUFnQixBQUFDQyx5QkFBS0gsRUFBRVA7O0NBQ2hELDBCQUFBLDFCQUFDVyw4QkFBUVIsS0FDVCxBQUFDUywyQkFBT1o7QUFOdkIsQUFBQSxPQUFBSiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsc0dBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSx5RUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUMsd0JBQUEsQUFBQUgsNkJBQUEsQUFBQUMsOEJBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSx1REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLHdFQUFBLEtBQUEsSUFBQSxjQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsa0ZBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxPQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsd0pBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSw0REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLGlFQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsMkVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLE9BQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSw2REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLE9BQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLG9CQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsc0ZBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSw2REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLE9BQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLGtCQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxT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TUFBQWpCOzs7QUFBQSxBQUFBLEFBQUEsQUFBQWlCLDRFQUFBLFdBQUFoRCxnQkFBQUMsZUFFSzZDO0FBRkwsQUFBQSxPQUFBdEMsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLHVEQUFBLEtBQUEsSUFBQSxPQUlPLEFBQUNRLHdCQUNDLFdBQUtYO0FBQUwsQUFBUSxZQUFBRyxlQUFBLEtBQUEsd0dBQUEsS0FBQUEsZUFBQSxPQUFBLEtBQUEsSUFBQSxPQUFBLElBQUEsdEJBQWlCSDtHQUN6QnVDOzs7QUFOVCxBQUFBLEFBQUFFLCtEQUFBOztBQUFBO0FBQUEsQUFBQSxBQUFBQSx5REFBQSxXQUFBQztBQUFBLEFBQUEsSUFBQUMsUUFBQSwwQkFBQUQsMUJBKzRGZ0RHO0lBLzRGaERILFlBQUEseUJBQUFBLHpCQWc1RmtESTtJQWg1RmxERixRQUFBLDBCQUFBRiwxQkErNEZnREc7SUEvNEZoREgsWUFBQSx5QkFBQUEsekJBZzVGa0RJO0FBaDVGbEQsQUFBQSxJQUFBakIscUJBQUE7QUFBQSxBQUFBLE9BQUFBLHdEQUFBYyxNQUFBQyxNQUFBRjs7O0FBQUE7OztBQUFBLEFBQUEsQUFBQSx1REFBQSx2REFBc0JEOztBQUF0QmpEIiwibmFtZXMiOlsicmV0X185MTY3X19hdXRvX18iLCImZm9ybSIsIiZlbnYiLCJwX18yMiIsInZlY19fMjMiLCJjbGpzLmNvcmUvbnRoIiwiY2xqcy5zcGVjLmltcGwuZ2VuJG1hY3Jvcy9keW5hbG9hZCIsInF1b3RlIiwicyIsImNsanMuY29yZS9zZXF1ZW5jZSIsImNsanMuY29yZS9jb25jYXQiLCJjbGpzLmNvcmUvTGlzdCIsImNsanMuY29yZS92ZWMiLCJ4cyIsImNsb2p1cmUuc3RyaW5nL3NwbGl0IiwiY2xqcy5jb3JlL25hbWVzcGFjZSIsImNudCIsImNsanMuY29yZS9jb3VudCIsImNoZWNrcyIsImNsanMuY29yZS9tYXAiLCJuIiwiY2xqcy5jb3JlL3N5bWJvbCIsImNsb2p1cmUuc3RyaW5nL2pvaW4iLCJjbGpzLmNvcmUvdGFrZSIsImNsanMuY29yZS9yYW5nZSIsImNsanMuY29yZS9yZXBlYXQiLCJjbGpzLmNvcmUvdmFyeS1tZXRhIiwiY2xqcy5jb3JlL2Fzc29jIiwidmFyX2FyZ3MiLCJhcmdzX185MTQ0X19hdXRvX18iLCJsZW5fXzkxNDFfX2F1dG9fXyIsImlfXzkxNDJfX2F1dG9fXyIsImFyZ3NlcV9fOTE0NV9fYXV0b19fIiwiY2xqcy5zcGVjLmltcGwuZ2VuJG1hY3Jvcy9kZWxheSIsInNlcTI3IiwiR19fMjgiLCJHX18yOSIsInNlbGZfXzkxMzJfX2F1dG9fXyIsImJvZHkiLCJjbGpzLnNwZWMuaW1wbC5nZW4kbWFjcm9zL2xhenktY29tYmluYXRvciIsImZxbiIsImNsanMuY29yZS9uYW1lIiwiZG9jIiwiY2xqcy5zcGVjLmltcGwuZ2VuJG1hY3Jvcy9sYXp5LWNvbWJpbmF0b3JzIiwic2VxMzUiLCJHX18zNiIsIkdfXzM3Iiwic3ltcyIsImNsanMuc3BlYy5pbXBsLmdlbiRtYWNyb3MvbGF6eS1wcmltIiwiY2xqcy5zcGVjLmltcGwuZ2VuJG1hY3Jvcy9sYXp5LXByaW1zIiwic2VxNDMiLCJHX180NCIsIkdfXzQ1IiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyI7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuKG5zIGNsanMuc3BlYy5pbXBsLmdlblxuICAoOnJlZmVyLWNsb2p1cmUgOmV4Y2x1ZGUgW2RlbGF5XSlcbiAgKDpyZXF1aXJlIFtjbGpzLmNvcmUgOmFzIGNdXG4gICAgICAgICAgICBbY2xvanVyZS5zdHJpbmcgOmFzIHN0cmluZ10pKVxuXG4oZGVmbWFjcm8gZHluYWxvYWQgW1txdW90ZSBzXV1cbiAgKGxldCBbeHMgICAgIChzdHJpbmcvc3BsaXQgKG5hbWVzcGFjZSBzKSAjXCJcXC5cIilcbiAgICAgICAgY250ICAgIChjb3VudCB4cylcbiAgICAgICAgY2hlY2tzIChtYXBcbiAgICAgICAgICAgICAgICAgKGZuIFtuIHhzXVxuICAgICAgICAgICAgICAgICAgIGAoYy9leGlzdHM/IH4oc3ltYm9sIChzdHJpbmcvam9pbiBcIi5cIiAodGFrZSBuIHhzKSkpKSlcbiAgICAgICAgICAgICAgICAgKHJhbmdlIDIgY250KVxuICAgICAgICAgICAgICAgICAocmVwZWF0IHhzKSldXG4gICAgYChjbGpzLnNwZWMuaW1wbC5nZW4vTGF6eVZhci5cbiAgICAgICAoZm4gW11cbiAgICAgICAgIChpZiAoYW5kIH5AY2hlY2tzIChjL2V4aXN0cz8gfnMpKVxuICAgICAgICAgICB+KHZhcnktbWV0YSBzIGFzc29jIDpjbGpzLmFuYWx5emVyL25vLXJlc29sdmUgdHJ1ZSlcbiAgICAgICAgICAgKHRocm93XG4gICAgICAgICAgICAgKGpzL0Vycm9yLlxuICAgICAgICAgICAgICAgKHN0ciBcIlZhciBcIiAnfnMgXCIgZG9lcyBub3QgZXhpc3QsIFwiXG4gICAgICAgICAgICAgICAgICAgIChuYW1lc3BhY2UgJ35zKSBcIiBuZXZlciByZXF1aXJlZFwiKSkpKSlcbiAgICAgICBuaWwpKSlcblxuKGRlZm1hY3JvIGRlbGF5XG4gIFwiZ2l2ZW4gYm9keSB0aGF0IHJldHVybnMgYSBnZW5lcmF0b3IsIHJldHVybnMgYVxuICBnZW5lcmF0b3IgdGhhdCBkZWxlZ2F0ZXMgdG8gdGhhdCwgYnV0IGRlbGF5c1xuICBjcmVhdGlvbiB1bnRpbCB1c2VkLlwiXG4gIFsmIGJvZHldXG4gIGAoZGVsYXktaW1wbCAoYy9kZWxheSB+QGJvZHkpKSlcblxuKGRlZm1hY3JvIF46c2tpcC13aWtpIGxhenktY29tYmluYXRvclxuICBcIkltcGxlbWVudGF0aW9uIG1hY3JvLCBkbyBub3QgY2FsbCBkaXJlY3RseS5cIlxuICBbc11cbiAgKGxldCBbZnFuIChzeW1ib2wgXCJjbG9qdXJlLnRlc3QuY2hlY2suZ2VuZXJhdG9yc1wiIChuYW1lIHMpKVxuICAgICAgICBkb2MgKHN0ciBcIkxhenkgbG9hZGVkIHZlcnNpb24gb2YgXCIgZnFuKV1cbiAgICBgKGxldCBbZyMgKGR5bmFsb2FkICd+ZnFuKV1cbiAgICAgICAoZGVmbiB+c1xuICAgICAgICAgfmRvY1xuICAgICAgICAgWyYgfidhcmdzXVxuICAgICAgICAgKGFwcGx5IEBnIyB+J2FyZ3MpKSkpKVxuXG4oZGVmbWFjcm8gXjpza2lwLXdpa2kgbGF6eS1jb21iaW5hdG9yc1xuICBcIkltcGxlbWVudGF0aW9uIG1hY3JvLCBkbyBub3QgY2FsbCBkaXJlY3RseS5cIlxuICBbJiBzeW1zXVxuICBgKGRvXG4gICAgIH5AKG1hcFxuICAgICAgICAgKGZuIFtzXSAobGlzdCBgbGF6eS1jb21iaW5hdG9yIHMpKVxuICAgICAgICAgc3ltcykpKVxuXG4oZGVmbWFjcm8gXjpza2lwLXdpa2kgbGF6eS1wcmltXG4gIFwiSW1wbGVtZW50YXRpb24gbWFjcm8sIGRvIG5vdCBjYWxsIGRpcmVjdGx5LlwiXG4gIFtzXVxuICAobGV0IFtmcW4gKHN5bWJvbCBcImNsb2p1cmUudGVzdC5jaGVjay5nZW5lcmF0b3JzXCIgKG5hbWUgcykpXG4gICAgICAgIGRvYyAoc3RyIFwiRm4gcmV0dXJuaW5nIFwiIGZxbildXG4gICAgYChsZXQgW2cjIChkeW5hbG9hZCAnfmZxbildXG4gICAgICAgKGRlZm4gfnNcbiAgICAgICAgIH5kb2NcbiAgICAgICAgIFsmIH4nYXJnc11cbiAgICAgICAgIEBnIykpKSlcblxuKGRlZm1hY3JvIF46c2tpcC13aWtpIGxhenktcHJpbXNcbiAgXCJJbXBsZW1lbnRhdGlvbiBtYWNybywgZG8gbm90IGNhbGwgZGlyZWN0bHkuXCJcbiAgWyYgc3ltc11cbiAgYChkb1xuICAgICB+QChtYXBcbiAgICAgICAgIChmbiBbc10gKGxpc3QgYGxhenktcHJpbSBzKSlcbiAgICAgICAgIHN5bXMpKSkiXX0=