goog.provide('cljs.tools.reader.reader_types$macros');
var ret__4785__auto___7410 = (function (){
/**
 * If reader is a SourceLoggingPushbackReader, execute body in a source
 *   logging context. Otherwise, execute body, returning the result.
 */
cljs.tools.reader.reader_types$macros.log_source = (function cljs$tools$reader$reader_types$macros$log_source(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7412 = arguments.length;
var i__4737__auto___7413 = (0);
while(true){
if((i__4737__auto___7413 < len__4736__auto___7412)){
args__4742__auto__.push((arguments[i__4737__auto___7413]));

var G__7415 = (i__4737__auto___7413 + (1));
i__4737__auto___7413 = G__7415;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.tools.reader.reader_types$macros.log_source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.tools.reader.reader_types$macros.log_source.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,reader,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.tools.reader.reader-types","source-logging-reader?","cljs.tools.reader.reader-types/source-logging-reader?",-1520527434,null),null,(1),null)),(new cljs.core.List(null,reader,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.tools.reader.impl.utils","whitespace?","cljs.tools.reader.impl.utils/whitespace?",-2091653184,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.tools.reader.reader-types","peek-char","cljs.tools.reader.reader-types/peek-char",692825686,null),null,(1),null)),(new cljs.core.List(null,reader,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.tools.reader.reader-types","log-source*","cljs.tools.reader.reader-types/log-source*",-827357451,null),null,(1),null)),(new cljs.core.List(null,reader,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.with_meta(cljs.core.with_meta(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"once","once",-262568523),true], null)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/tools/reader/reader_types$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,9,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,35,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,9,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,38,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null))], 0))));
}));

(cljs.tools.reader.reader_types$macros.log_source.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.tools.reader.reader_types$macros.log_source.cljs$lang$applyTo = (function (seq7401){
var G__7402 = cljs.core.first(seq7401);
var seq7401__$1 = cljs.core.next(seq7401);
var G__7403 = cljs.core.first(seq7401__$1);
var seq7401__$2 = cljs.core.next(seq7401__$1);
var G__7404 = cljs.core.first(seq7401__$2);
var seq7401__$3 = cljs.core.next(seq7401__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7402,G__7403,G__7404,seq7401__$3);
}));

return null;
})()
;
(cljs.tools.reader.reader_types$macros.log_source.cljs$lang$macro = true);


//# sourceMappingURL=cljs.tools.reader.reader-types$macros.js.map
