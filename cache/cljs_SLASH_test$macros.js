goog.provide('cljs.test$macros');
/**
 * Returns true if argument is a function or a symbol that resolves to
 *   a function (not a macro).
 */
cljs.test$macros.function_QMARK_ = (function cljs$test$macros$function_QMARK_(menv,x){
if((x instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.api.resolve(menv,x));
} else {
return false;
}
});
/**
 * Returns generic assertion code for any functional predicate.  The
 *   'expected' argument to 'report' will contains the original form, the
 *   'actual' argument will contain the form with all its sub-forms
 *   evaluated.  If the predicate returns false, the 'actual' form will
 *   be wrapped in (not...).
 */
cljs.test$macros.assert_predicate = (function cljs$test$macros$assert_predicate(msg,form){
var args = cljs.core.rest(form);
var pred = cljs.core.first(form);
var map__18465 = cljs.core.meta(form);
var map__18465__$1 = (((((!((map__18465 == null))))?(((((map__18465.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18465.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18465):map__18465);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"values__18447__auto__","values__18447__auto__",-512323409,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),args))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result__18448__auto__","result__18448__auto__",-1786917418,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"values__18447__auto__","values__18447__auto__",-512323409,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__18448__auto__","result__18448__auto__",-1786917418,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"values__18447__auto__","values__18447__auto__",-512323409,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"values__18447__auto__","values__18447__auto__",-512323409,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__18448__auto__","result__18448__auto__",-1786917418,null),null,(1),null))], 0))));
});
/**
 * Returns generic assertion code for any test, including macros, Java
 *   method calls, or isolated symbols.
 */
cljs.test$macros.assert_any = (function cljs$test$macros$assert_any(msg,form){
var map__18565 = cljs.core.meta(form);
var map__18565__$1 = (((((!((map__18565 == null))))?(((((map__18565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18565):map__18565);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18565__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18565__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18565__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18565__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18565__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"value__18542__auto__","value__18542__auto__",141223914,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__18542__auto__","value__18542__auto__",141223914,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__18542__auto__","value__18542__auto__",141223914,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__18542__auto__","value__18542__auto__",141223914,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__18542__auto__","value__18542__auto__",141223914,null),null,(1),null))], 0))));
});
var ret__4785__auto___19680 = cljs.test$macros.cljs_output_dir = (function cljs$test$macros$cljs_output_dir(_AMPERSAND_form,_AMPERSAND_env){
var map__18607 = cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();
var map__18607__$1 = (((((!((map__18607 == null))))?(((((map__18607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18607):map__18607);
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18607__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
var or__4126__auto__ = output_dir;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "out";
}
});
(cljs.test$macros.cljs_output_dir.cljs$lang$macro = true);

if((typeof cljs !== 'undefined') && (typeof cljs.test$macros !== 'undefined') && (typeof cljs.test$macros.assert_expr !== 'undefined')){
} else {
cljs.test$macros.assert_expr = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__18613 = cljs.core.get_global_hierarchy;
return (fexpr__18613.cljs$core$IFn$_invoke$arity$0 ? fexpr__18613.cljs$core$IFn$_invoke$arity$0() : fexpr__18613.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.test$macros","assert-expr"),(function (menv,msg,form){
if((form == null)){
return new cljs.core.Keyword(null,"always-fail","always-fail",-1303875085);
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.first(form);
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"always-fail","always-fail",-1303875085),(function (menv,msg,form){
var map__18638 = cljs.core.meta(form);
var map__18638__$1 = (((((!((map__18638 == null))))?(((((map__18638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18638):map__18638);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18638__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18638__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18638__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18638__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null))], 0))))),null,(1),null)))));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (menv,msg,form){
if(cljs.core.truth_(((cljs.core.sequential_QMARK_(form))?cljs.test$macros.function_QMARK_(menv,cljs.core.first(form)):false))){
return cljs.test$macros.assert_predicate(msg,form);
} else {
return cljs.test$macros.assert_any(msg,form);
}
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(function (menv,msg,form){
var map__18661 = cljs.core.meta(form);
var map__18661__$1 = (((((!((map__18661 == null))))?(((((map__18661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18661):map__18661);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18661__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18661__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18661__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"klass__18658__auto__","klass__18658__auto__",-1722201324,null),null,(1),null)),(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"object__18659__auto__","object__18659__auto__",775434602,null),null,(1),null)),(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"result__18660__auto__","result__18660__auto__",570293160,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"klass__18658__auto__","klass__18658__auto__",-1722201324,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"object__18659__auto__","object__18659__auto__",775434602,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__18660__auto__","result__18660__auto__",570293160,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"object__18659__auto__","object__18659__auto__",775434602,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"object__18659__auto__","object__18659__auto__",775434602,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__18660__auto__","result__18660__auto__",570293160,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),(function (menv,msg,form){
var map__18742 = cljs.core.meta(form);
var map__18742__$1 = (((((!((map__18742 == null))))?(((((map__18742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18742):map__18742);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18742__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18742__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18742__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18742__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18742__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var klass = cljs.core.second(form);
var body = cljs.core.nthnext(form,(2));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,klass,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18736__auto__","e__18736__auto__",-1239396750,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18736__auto__","e__18736__auto__",-1239396750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18736__auto__","e__18736__auto__",-1239396750,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown-with-msg?","thrown-with-msg?",1169763203,null),(function (menv,msg,form){
var map__18787 = cljs.core.meta(form);
var map__18787__$1 = (((((!((map__18787 == null))))?(((((map__18787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18787):map__18787);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var klass = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1));
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
var body = cljs.core.nthnext(form,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,klass,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18776__auto__","e__18776__auto__",2026503731,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__18777__auto__","m__18777__auto__",894978211,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18776__auto__","e__18776__auto__",2026503731,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__18777__auto__","m__18777__auto__",894978211,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18776__auto__","e__18776__auto__",2026503731,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18776__auto__","e__18776__auto__",2026503731,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__18776__auto__","e__18776__auto__",2026503731,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
var ret__4785__auto___19803 = /**
 * Used by the 'is' macro to catch unexpected exceptions.
 *   You don't call this.
 */
cljs.test$macros.try_expr = (function cljs$test$macros$try_expr(_AMPERSAND_form,_AMPERSAND_env,msg,form){
var map__18941 = cljs.core.meta(form);
var map__18941__$1 = (((((!((map__18941 == null))))?(((((map__18941.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18941.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18941):map__18941);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18941__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18941__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18941__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18941__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.test$macros.assert_expr.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,msg,form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"t__18928__auto__","t__18928__auto__",-1483365362,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"t__18928__auto__","t__18928__auto__",-1483365362,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.test$macros.try_expr.cljs$lang$macro = true);

var ret__4785__auto___19817 = (function (){
/**
 * Generic assertion macro.  'form' is any predicate test.
 *   'msg' is an optional message to attach to the assertion.
 *   
 *   Example: (is (= 4 (+ 2 2)) "Two plus two should be 4")
 * 
 *   Special forms:
 * 
 *   (is (thrown? c body)) checks that an instance of c is thrown from
 *   body, fails if not; then returns the thing thrown.
 * 
 *   (is (thrown-with-msg? c re body)) checks that an instance of c is
 *   thrown AND that the message on the exception matches (with
 *   re-find) the regular expression re.
 */
cljs.test$macros.is = (function cljs$test$macros$is(var_args){
var G__18973 = arguments.length;
switch (G__18973) {
case 3:
return cljs.test$macros.is.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.test$macros.is.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.test$macros.is.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","is","cljs.test/is",261278235,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.test$macros.is.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,form,msg){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","try-expr","cljs.test/try-expr",1224770602,null),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}));

(cljs.test$macros.is.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.test$macros.is.cljs$lang$macro = true);

var ret__4785__auto___19821 = (function (){
/**
 * Checks multiple assertions with a template expression.
 *   See clojure.template/do-template for an explanation of
 *   templates.
 * 
 *   Example: (are [x y] (= x y)  
 *              2 (+ 1 1)
 *              4 (* 2 2))
 *   Expands to: 
 *         (do (is (= 2 (+ 1 1)))
 *             (is (= 4 (* 2 2))))
 * 
 *   Note: This breaks some reporting features, such as line numbers.
 */
cljs.test$macros.are = (function cljs$test$macros$are(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19822 = arguments.length;
var i__4737__auto___19826 = (0);
while(true){
if((i__4737__auto___19826 < len__4736__auto___19822)){
args__4742__auto__.push((arguments[i__4737__auto___19826]));

var G__19827 = (i__4737__auto___19826 + (1));
i__4737__auto___19826 = G__19827;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.test$macros.are.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,argv,expr,args){
if(((((cljs.core.empty_QMARK_(argv)) && (cljs.core.empty_QMARK_(args)))) || ((((cljs.core.count(argv) > (0))) && ((cljs.core.count(args) > (0))) && ((cljs.core.mod(cljs.core.count(args),cljs.core.count(argv)) === (0))))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.template","do-template","clojure.template/do-template",-1006634288,null),null,(1),null)),(new cljs.core.List(null,argv,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","is","cljs.test/is",261278235,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),args], 0))));
} else {
throw (new Error("The number of args doesn't match are's argv."));
}
}));

(cljs.test$macros.are.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.test$macros.are.cljs$lang$applyTo = (function (seq18976){
var G__18977 = cljs.core.first(seq18976);
var seq18976__$1 = cljs.core.next(seq18976);
var G__18978 = cljs.core.first(seq18976__$1);
var seq18976__$2 = cljs.core.next(seq18976__$1);
var G__18979 = cljs.core.first(seq18976__$2);
var seq18976__$3 = cljs.core.next(seq18976__$2);
var G__18980 = cljs.core.first(seq18976__$3);
var seq18976__$4 = cljs.core.next(seq18976__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18977,G__18978,G__18979,G__18980,seq18976__$4);
}));

return null;
})()
;
(cljs.test$macros.are.cljs$lang$macro = true);

var ret__4785__auto___19842 = (function (){
/**
 * Adds a new string to the list of testing contexts.  May be nested,
 *   but must occur inside a test function (deftest).
 */
cljs.test$macros.testing = (function cljs$test$macros$testing(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19847 = arguments.length;
var i__4737__auto___19848 = (0);
while(true){
if((i__4737__auto___19848 < len__4736__auto___19847)){
args__4742__auto__.push((arguments[i__4737__auto___19848]));

var G__19849 = (i__4737__auto___19848 + (1));
i__4737__auto___19848 = G__19849;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,string,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",-250761520,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,string,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",-250761520,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.test$macros.testing.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.testing.cljs$lang$applyTo = (function (seq18995){
var G__18996 = cljs.core.first(seq18995);
var seq18995__$1 = cljs.core.next(seq18995);
var G__18997 = cljs.core.first(seq18995__$1);
var seq18995__$2 = cljs.core.next(seq18995__$1);
var G__18998 = cljs.core.first(seq18995__$2);
var seq18995__$3 = cljs.core.next(seq18995__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18996,G__18997,G__18998,seq18995__$3);
}));

return null;
})()
;
(cljs.test$macros.testing.cljs$lang$macro = true);

var ret__4785__auto___19866 = (function (){
/**
 * Defines a test function with no arguments.  Test functions may call
 *   other tests, so tests may be composed.  If you compose tests, you
 *   should also define a function named test-ns-hook; run-tests will
 *   call test-ns-hook instead of testing all vars.
 * 
 *   Note: Actually, the test body goes in the :test metadata on the var,
 *   and the real function (the value of the var) calls test-var on
 *   itself.
 * 
 *   When cljs.analyzer/*load-tests* is false, deftest is ignored.
 */
cljs.test$macros.deftest = (function cljs$test$macros$deftest(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19870 = arguments.length;
var i__4737__auto___19871 = (0);
while(true){
if((i__4737__auto___19871 < len__4736__auto___19870)){
args__4742__auto__.push((arguments[i__4737__auto___19871]));

var G__19873 = (i__4737__auto___19871 + (1));
i__4737__auto___19871 = G__19873;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.deftest.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
if(cljs.core.truth_(cljs.analyzer._STAR_load_tests_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","test-var","cljs.test/test-var",639352116,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$var",".-cljs$lang$var",416918061,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$var",".-cljs$lang$var",416918061,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return null;
}
}));

(cljs.test$macros.deftest.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.deftest.cljs$lang$applyTo = (function (seq19025){
var G__19026 = cljs.core.first(seq19025);
var seq19025__$1 = cljs.core.next(seq19025);
var G__19027 = cljs.core.first(seq19025__$1);
var seq19025__$2 = cljs.core.next(seq19025__$1);
var G__19028 = cljs.core.first(seq19025__$2);
var seq19025__$3 = cljs.core.next(seq19025__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19026,G__19027,G__19028,seq19025__$3);
}));

return null;
})()
;
(cljs.test$macros.deftest.cljs$lang$macro = true);

var ret__4785__auto___19888 = (function (){
/**
 * Wraps body as a CPS function that can be returned from a test to
 *   continue asynchronously.  Binds done to a function that must be
 *   invoked once and from an async context after any assertions.
 * 
 *   (deftest example-with-timeout
 *  (async done
 *    (js/setTimeout (fn []
 *                     ;; make assertions in async context...
 *                     (done) ;; ...then call done
 *                     )
 *                   0)))
 */
cljs.test$macros.async = (function cljs$test$macros$async(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19889 = arguments.length;
var i__4737__auto___19890 = (0);
while(true){
if((i__4737__auto___19890 < len__4736__auto___19889)){
args__4742__auto__.push((arguments[i__4737__auto___19890]));

var G__19891 = (i__4737__auto___19890 + (1));
i__4737__auto___19890 = G__19891;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,done,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.test","IAsyncTest","cljs.test/IAsyncTest",-885937316,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-invoke","-invoke",1821963807,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___19051__auto__","___19051__auto__",1794115378,null),null,(1),null)),(new cljs.core.List(null,done,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.test$macros.async.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.async.cljs$lang$applyTo = (function (seq19052){
var G__19053 = cljs.core.first(seq19052);
var seq19052__$1 = cljs.core.next(seq19052);
var G__19054 = cljs.core.first(seq19052__$1);
var seq19052__$2 = cljs.core.next(seq19052__$1);
var G__19055 = cljs.core.first(seq19052__$2);
var seq19052__$3 = cljs.core.next(seq19052__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19053,G__19054,G__19055,seq19052__$3);
}));

return null;
})()
;
(cljs.test$macros.async.cljs$lang$macro = true);

cljs.test$macros.ns_QMARK_ = (function cljs$test$macros$ns_QMARK_(x){
return ((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"quote","quote",1377916282,null))));
});
var ret__4785__auto___19907 = (function (){
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
cljs.test$macros.run_tests_block = (function cljs$test$macros$run_tests_block(var_args){
var args__4742__auto__ = [];
var len__4736__auto___19909 = arguments.length;
var i__4737__auto___19910 = (0);
while(true){
if((i__4737__auto___19910 < len__4736__auto___19909)){
args__4742__auto__.push((arguments[i__4737__auto___19910]));

var G__19911 = (i__4737__auto___19910 + (1));
i__4737__auto___19910 = G__19911;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
if(cljs.core.every_QMARK_((function (p__19128){
var vec__19129 = p__19128;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19129,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19129,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)));
}),namespaces)){
} else {
throw (new Error(["Assert failed: ","All arguments to run-tests must be quoted symbols","\n","(every? (fn [[quote ns]] (and (= quote (quote quote)) (symbol? ns))) namespaces)"].join('')));
}

var is_ns = cljs.test$macros.ns_QMARK_(env_or_ns);
var env = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("env");
var summary = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("summary");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,env,null,(1),null)),(new cljs.core.List(null,((is_ns)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",849387048,null),null,(1),null))))):env_or_ns),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,summary,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","volatile!","cljs.core/volatile!",-829435536,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"test","test",577538877),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"summary","summary",380847952),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",844162337,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ns,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vswap!","cljs.core/vswap!",-2062892188,null),null,(1),null)),(new cljs.core.List(null,summary,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge-with","cljs.core/merge-with",366771213,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","get-and-clear-env!","cljs.test/get-and-clear-env!",-1402633791,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0))));
}),((is_ns)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env_or_ns], null),namespaces):namespaces)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",-702147289,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",1258077813,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,summary,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,summary,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",241475586,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_tests_block.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.run_tests_block.cljs$lang$applyTo = (function (seq19072){
var G__19073 = cljs.core.first(seq19072);
var seq19072__$1 = cljs.core.next(seq19072);
var G__19074 = cljs.core.first(seq19072__$1);
var seq19072__$2 = cljs.core.next(seq19072__$1);
var G__19075 = cljs.core.first(seq19072__$2);
var seq19072__$3 = cljs.core.next(seq19072__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19073,G__19074,G__19075,seq19072__$3);
}));

return null;
})()
;
(cljs.test$macros.run_tests_block.cljs$lang$macro = true);

var ret__4785__auto___19942 = (function (){
/**
 * Runs all tests in the given namespaces; prints results.
 *   Defaults to current namespace if none given. Does not return a meaningful
 *   value due to the possiblity of asynchronous execution. To detect test
 *   completion add a :end-run-tests method case to the cljs.test/report
 *   multimethod.
 */
cljs.test$macros.run_tests = (function cljs$test$macros$run_tests(var_args){
var G__19195 = arguments.length;
switch (G__19195) {
case 2:
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___19944 = arguments.length;
var i__4737__auto___19945 = (0);
while(true){
if((i__4737__auto___19945 < len__4736__auto___19944)){
args_arr__4757__auto__.push((arguments[i__4737__auto___19945]));

var G__19946 = (i__4737__auto___19945 + (1));
i__4737__auto___19945 = G__19946;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",-878084023,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",849387048,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer._STAR_cljs_ns_STAR_,null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns){
if(cljs.test$macros.ns_QMARK_(env_or_ns)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",-878084023,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",849387048,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,env_or_ns,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",-878084023,null),null,(1),null)),(new cljs.core.List(null,env_or_ns,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer._STAR_cljs_ns_STAR_,null,(1),null))))),null,(1),null))], 0))));
}
}));

(cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",-834586193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-tests-block","cljs.test/run-tests-block",915419136,null),null,(1),null)),(new cljs.core.List(null,env_or_ns,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([namespaces], 0)))),null,(1),null)))));
}));

/** @this {Function} */
(cljs.test$macros.run_tests.cljs$lang$applyTo = (function (seq19191){
var G__19192 = cljs.core.first(seq19191);
var seq19191__$1 = cljs.core.next(seq19191);
var G__19193 = cljs.core.first(seq19191__$1);
var seq19191__$2 = cljs.core.next(seq19191__$1);
var G__19194 = cljs.core.first(seq19191__$2);
var seq19191__$3 = cljs.core.next(seq19191__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19192,G__19193,G__19194,seq19191__$3);
}));

(cljs.test$macros.run_tests.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.test$macros.run_tests.cljs$lang$macro = true);

var ret__4785__auto___19960 = (function (){
/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
cljs.test$macros.run_all_tests = (function cljs$test$macros$run_all_tests(var_args){
var G__19308 = arguments.length;
switch (G__19308) {
case 2:
return cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-all-tests","cljs.test/run-all-tests",-154085674,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",849387048,null),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,re){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-all-tests","cljs.test/run-all-tests",-154085674,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",849387048,null),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,re,env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-tests","cljs.test/run-tests",-878084023,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null)))));
}),(function (){var G__19345 = cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(re)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19298_SHARP_){
return cljs.core.re_matches(re,cljs.core.name(p1__19298_SHARP_));
}),G__19345);
} else {
return G__19345;
}
})())], 0))));
}));

(cljs.test$macros.run_all_tests.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.test$macros.run_all_tests.cljs$lang$macro = true);

var ret__4785__auto___19967 = cljs.test$macros.test_all_vars_block = (function cljs$test$macros$test_all_vars_block(_AMPERSAND_form,_AMPERSAND_env,p__19492){
var vec__19493 = p__19492;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19493,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19493,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"env__19362__auto__","env__19362__auto__",-1910562290,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","get-current-env","cljs.test/get-current-env",1274262302,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__19362__auto__","env__19362__auto__",-1910562290,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",-702147289,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",849387048,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",1554034706,null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",-250761520,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-once-fixtures"),null,(1),null))], 0)))):null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",2061085390,null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","update-current-env!","cljs.test/update-current-env!",-250761520,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-each-fixtures"),null,(1),null))], 0)))):null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","test-vars-block","cljs.test/test-vars-block",-257828355,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19504){
var vec__19505 = p__19504;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19505,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19505,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(k)),null,(1),null)))));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__19508){
var vec__19509 = p__19508;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19509,(1),null);
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__19512){
var vec__19513 = p__19512;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19513,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19513,(1),null);
return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1(ns)))))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__19362__auto__","env__19362__auto__",-1910562290,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",241475586,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.test$macros.test_all_vars_block.cljs$lang$macro = true);

var ret__4785__auto___20021 = /**
 * Calls test-vars on every var with :test metadata interned in the
 *   namespace, with fixtures.
 */
cljs.test$macros.test_all_vars = (function cljs$test$macros$test_all_vars(_AMPERSAND_form,_AMPERSAND_env,p__19519){
var vec__19520 = p__19519;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19520,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19520,(1),null);
var form = vec__19520;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",-834586193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","test-all-vars-block","cljs.test/test-all-vars-block",-1896786139,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","report","cljs.test/report",-1933655233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-test-all-vars","end-test-all-vars",548827253),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))));
});
(cljs.test$macros.test_all_vars.cljs$lang$macro = true);

var ret__4785__auto___20049 = /**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
cljs.test$macros.test_ns_block = (function cljs$test$macros$test_ns_block(_AMPERSAND_form,_AMPERSAND_env,env,p__19523){
var vec__19524 = p__19523;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19524,(1),null);
var form = vec__19524;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to test-ns must be a quoted symbol","\n","(and (= quote (quote quote)) (symbol? ns))"].join('')));
}

if(cljs.core.truth_(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1(ns))){
} else {
throw (new Error(["Assert failed: ",["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," does not exist"].join(''),"\n","(ana-api/find-ns ns)"].join('')));
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","set-env!","cljs.test/set-env!",-702147289,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",1258077813,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var temp__5733__auto__ = cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"test-ns-hook","test-ns-hook",6852467,null));
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"test-ns-hook"),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","block","cljs.test/block",-1587771553,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","test-all-vars-block","cljs.test/test-all-vars-block",-1896786139,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))));
}
})(),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","do-report","cljs.test/do-report",1258077813,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))));
});
(cljs.test$macros.test_ns_block.cljs$lang$macro = true);

var ret__4785__auto___20054 = (function (){
/**
 * If the namespace defines a function named test-ns-hook, calls that.
 *   Otherwise, calls test-all-vars on the namespace.  'ns' is a
 *   namespace object or a symbol.
 * 
 *   Internally binds *report-counters* to a ref initialized to
 *   *initial-report-counters*.  
 */
cljs.test$macros.test_ns = (function cljs$test$macros$test_ns(var_args){
var G__19545 = arguments.length;
switch (G__19545) {
case 3:
return cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","test-ns","cljs.test/test-ns",1574260710,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","empty-env","cljs.test/empty-env",849387048,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ns,null,(1),null))], 0))));
}));

(cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,env,p__19549){
var vec__19550 = p__19549;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19550,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19550,(1),null);
var form = vec__19550;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","run-block","cljs.test/run-block",-834586193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","test-ns-block","cljs.test/test-ns-block",844162337,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.test","clear-env!","cljs.test/clear-env!",241475586,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))));
}));

(cljs.test$macros.test_ns.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.test$macros.test_ns.cljs$lang$macro = true);

var ret__4785__auto___20063 = (function (){
cljs.test$macros.use_fixtures = (function cljs$test$macros$use_fixtures(var_args){
var args__4742__auto__ = [];
var len__4736__auto___20064 = arguments.length;
var i__4737__auto___20065 = (0);
while(true){
if((i__4737__auto___20065 < len__4736__auto___20064)){
args__4742__auto__.push((arguments[i__4737__auto___20065]));

var G__20067 = (i__4737__auto___20065 + (1));
i__4737__auto___20065 = G__20067;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,fns){
var pred__19560 = cljs.core._EQ_;
var expr__19561 = type;
if(cljs.core.truth_((pred__19560.cljs$core$IFn$_invoke$arity$2 ? pred__19560.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"once","once",-262568523),expr__19561) : pred__19560.call(null,new cljs.core.Keyword(null,"once","once",-262568523),expr__19561)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",1554034706,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)))),null,(1),null))], 0))));
} else {
if(cljs.core.truth_((pred__19560.cljs$core$IFn$_invoke$arity$2 ? pred__19560.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"each","each",940016129),expr__19561) : pred__19560.call(null,new cljs.core.Keyword(null,"each","each",940016129),expr__19561)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",2061085390,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)))),null,(1),null))], 0))));
} else {
if(cljs.core.truth_((pred__19560.cljs$core$IFn$_invoke$arity$2 ? pred__19560.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),expr__19561) : pred__19560.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__19561)))){
throw (new Error("First argument to cljs.test/use-fixtures must be :once or :each"));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__19561)].join('')));
}
}
}
}));

(cljs.test$macros.use_fixtures.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.use_fixtures.cljs$lang$applyTo = (function (seq19553){
var G__19554 = cljs.core.first(seq19553);
var seq19553__$1 = cljs.core.next(seq19553);
var G__19555 = cljs.core.first(seq19553__$1);
var seq19553__$2 = cljs.core.next(seq19553__$1);
var G__19556 = cljs.core.first(seq19553__$2);
var seq19553__$3 = cljs.core.next(seq19553__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19554,G__19555,G__19556,seq19553__$3);
}));

return null;
})()
;
(cljs.test$macros.use_fixtures.cljs$lang$macro = true);


//# sourceMappingURL=cljs.test$macros.js.map
