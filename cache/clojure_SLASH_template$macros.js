goog.provide('clojure.template$macros');
/**
 * For use in macros.  argv is an argument list, as in defn.  expr is
 *   a quoted expression using the symbols in argv.  values is a sequence
 *   of values to be used for the arguments.
 * 
 *   apply-template will recursively replace argument symbols in expr
 *   with their corresponding values, returning a modified expr.
 * 
 *   Example: (apply-template '[x] '(+ x x) '[2])
 *         ;=> (+ 2 2)
 */
clojure.template$macros.apply_template = (function clojure$template$macros$apply_template(argv,expr,values){
if(cljs.core.vector_QMARK_(argv)){
} else {
throw (new Error("Assert failed: (vector? argv)"));
}

if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,argv)){
} else {
throw (new Error("Assert failed: (every? symbol? argv)"));
}

return clojure.walk.postwalk_replace(cljs.core.zipmap(argv,values),expr);
});
var ret__4785__auto___16256 = (function (){
/**
 * Repeatedly copies expr (in a do block) for each group of arguments
 *   in values.  values are automatically partitioned by the number of
 *   arguments in argv, an argument vector as in defn.
 * 
 *   Example: (macroexpand '(do-template [x y] (+ y x) 2 4 3 5))
 *         ;=> (do (+ 4 2) (+ 5 3))
 */
clojure.template$macros.do_template = (function clojure$template$macros$do_template(var_args){
var args__4742__auto__ = [];
var len__4736__auto___16257 = arguments.length;
var i__4737__auto___16258 = (0);
while(true){
if((i__4737__auto___16258 < len__4736__auto___16257)){
args__4742__auto__.push((arguments[i__4737__auto___16258]));

var G__16260 = (i__4737__auto___16258 + (1));
i__4737__auto___16258 = G__16260;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return clojure.template$macros.do_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(clojure.template$macros.do_template.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,argv,expr,values){
var c = cljs.core.count(argv);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (a){
return clojure.template$macros.apply_template(argv,expr,a);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2(c,values)))));
}));

(clojure.template$macros.do_template.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(clojure.template$macros.do_template.cljs$lang$applyTo = (function (seq16231){
var G__16232 = cljs.core.first(seq16231);
var seq16231__$1 = cljs.core.next(seq16231);
var G__16233 = cljs.core.first(seq16231__$1);
var seq16231__$2 = cljs.core.next(seq16231__$1);
var G__16234 = cljs.core.first(seq16231__$2);
var seq16231__$3 = cljs.core.next(seq16231__$2);
var G__16235 = cljs.core.first(seq16231__$3);
var seq16231__$4 = cljs.core.next(seq16231__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16232,G__16233,G__16234,G__16235,seq16231__$4);
}));

return null;
})()
;
(clojure.template$macros.do_template.cljs$lang$macro = true);


//# sourceMappingURL=clojure.template$macros.js.map
