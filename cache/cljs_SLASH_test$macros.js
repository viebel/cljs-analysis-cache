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
var map__7469 = cljs.core.meta(form);
var map__7469__$1 = (((((!((map__7469 == null))))?(((((map__7469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7469):map__7469);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7469__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"values__7457__auto__","values__7457__auto__",2040973952,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),args))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"result__7459__auto__","result__7459__auto__",1619114068,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"values__7457__auto__","values__7457__auto__",2040973952,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__7459__auto__","result__7459__auto__",1619114068,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"values__7457__auto__","values__7457__auto__",2040973952,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,pred,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"values__7457__auto__","values__7457__auto__",2040973952,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__7459__auto__","result__7459__auto__",1619114068,null),null,(1),null))], 0))));
});
/**
 * Returns generic assertion code for any test, including macros, Java
 *   method calls, or isolated symbols.
 */
cljs.test$macros.assert_any = (function cljs$test$macros$assert_any(msg,form){
var map__7489 = cljs.core.meta(form);
var map__7489__$1 = (((((!((map__7489 == null))))?(((((map__7489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7489):map__7489);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7489__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7489__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7489__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7489__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7489__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"value__7488__auto__","value__7488__auto__",-308263751,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7488__auto__","value__7488__auto__",-308263751,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7488__auto__","value__7488__auto__",-308263751,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7488__auto__","value__7488__auto__",-308263751,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"value__7488__auto__","value__7488__auto__",-308263751,null),null,(1),null))], 0))));
});
var ret__4785__auto___7894 = cljs.test$macros.cljs_output_dir = (function cljs$test$macros$cljs_output_dir(_AMPERSAND_form,_AMPERSAND_env){
var map__7521 = cljs.analyzer.api.get_options.cljs$core$IFn$_invoke$arity$0();
var map__7521__$1 = (((((!((map__7521 == null))))?(((((map__7521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7521):map__7521);
var output_dir = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7521__$1,new cljs.core.Keyword(null,"output-dir","output-dir",-290956991));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7533 = cljs.core.get_global_hierarchy;
return (fexpr__7533.cljs$core$IFn$_invoke$arity$0 ? fexpr__7533.cljs$core$IFn$_invoke$arity$0() : fexpr__7533.call(null));
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
var map__7538 = cljs.core.meta(form);
var map__7538__$1 = (((((!((map__7538 == null))))?(((((map__7538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7538):map__7538);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7538__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null))], 0))))),null,(1),null)))));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (menv,msg,form){
if(cljs.core.truth_(((cljs.core.sequential_QMARK_(form))?cljs.test$macros.function_QMARK_(menv,cljs.core.first(form)):false))){
return cljs.test$macros.assert_predicate(msg,form);
} else {
return cljs.test$macros.assert_any(msg,form);
}
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"instance?","instance?",1075939923,null),(function (menv,msg,form){
var map__7561 = cljs.core.meta(form);
var map__7561__$1 = (((((!((map__7561 == null))))?(((((map__7561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7561):map__7561);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7561__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7561__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7561__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7561__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"klass__7558__auto__","klass__7558__auto__",-1426302598,null),null,(1),null)),(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"object__7559__auto__","object__7559__auto__",-2091342855,null),null,(1),null)),(new cljs.core.List(null,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"result__7560__auto__","result__7560__auto__",2020589787,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"klass__7558__auto__","klass__7558__auto__",-1426302598,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"object__7559__auto__","object__7559__auto__",-2091342855,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__7560__auto__","result__7560__auto__",2020589787,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"object__7559__auto__","object__7559__auto__",-2091342855,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","type","cljs.core/type",-821761154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"object__7559__auto__","object__7559__auto__",-2091342855,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"result__7560__auto__","result__7560__auto__",2020589787,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown?","thrown?",839971709,null),(function (menv,msg,form){
var map__7579 = cljs.core.meta(form);
var map__7579__$1 = (((((!((map__7579 == null))))?(((((map__7579.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7579.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7579):map__7579);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7579__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7579__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7579__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7579__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7579__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var klass = cljs.core.second(form);
var body = cljs.core.nthnext(form,(2));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,klass,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7578__auto__","e__7578__auto__",-756861012,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7578__auto__","e__7578__auto__",-756861012,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7578__auto__","e__7578__auto__",-756861012,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.test$macros.assert_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"thrown-with-msg?","thrown-with-msg?",1169763203,null),(function (menv,msg,form){
var map__7600 = cljs.core.meta(form);
var map__7600__$1 = (((((!((map__7600 == null))))?(((((map__7600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7600):map__7600);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7600__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7600__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7600__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7600__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
var klass = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(1));
var re = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(form,(2));
var body = cljs.core.nthnext(form,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,klass,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7595__auto__","e__7595__auto__",-117649045,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__7596__auto__","m__7596__auto__",-158858978,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-message",".-message",-1827250821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7595__auto__","e__7595__auto__",-117649045,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","re-find","cljs.core/re-find",745076500,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__7596__auto__","m__7596__auto__",-158858978,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7595__auto__","e__7595__auto__",-117649045,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7595__auto__","e__7595__auto__",-117649045,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7595__auto__","e__7595__auto__",-117649045,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));
var ret__4785__auto___7958 = /**
 * Used by the 'is' macro to catch unexpected exceptions.
 *   You don't call this.
 */
cljs.test$macros.try_expr = (function cljs$test$macros$try_expr(_AMPERSAND_form,_AMPERSAND_env,msg,form){
var map__7636 = cljs.core.meta(form);
var map__7636__$1 = (((((!((map__7636 == null))))?(((((map__7636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7636):map__7636);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7636__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7636__$1,new cljs.core.Keyword(null,"line","line",212345235));
var end_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7636__$1,new cljs.core.Keyword(null,"end-line","end-line",1837326455));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7636__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var end_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7636__$1,new cljs.core.Keyword(null,"end-column","end-column",1425389514));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.test$macros.assert_expr.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,msg,form),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"t__7635__auto__","t__7635__auto__",872060446,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,file,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,end_column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,column,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"expected","expected",1583670997),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,end_line,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"actual","actual",107306363),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"t__7635__auto__","t__7635__auto__",872060446,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"message","message",-406056002),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.test$macros.try_expr.cljs$lang$macro = true);

var ret__4785__auto___7968 = (function (){
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
var G__7658 = arguments.length;
switch (G__7658) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","try-expr","/try-expr",293516980,null),null,(1),null)),(new cljs.core.List(null,msg,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}));

(cljs.test$macros.is.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.test$macros.is.cljs$lang$macro = true);

var ret__4785__auto___7971 = (function (){
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
var len__4736__auto___7972 = arguments.length;
var i__4737__auto___7973 = (0);
while(true){
if((i__4737__auto___7973 < len__4736__auto___7972)){
args__4742__auto__.push((arguments[i__4737__auto___7973]));

var G__7974 = (i__4737__auto___7973 + (1));
i__4737__auto___7973 = G__7974;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("clojure.template","do-template","clojure.template/do-template",-1006634288,null),null,(1),null)),(new cljs.core.List(null,argv,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","is","/is",2009660525,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),args], 0))));
} else {
throw (new Error("The number of args doesn't match are's argv."));
}
}));

(cljs.test$macros.are.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.test$macros.are.cljs$lang$applyTo = (function (seq7663){
var G__7664 = cljs.core.first(seq7663);
var seq7663__$1 = cljs.core.next(seq7663);
var G__7665 = cljs.core.first(seq7663__$1);
var seq7663__$2 = cljs.core.next(seq7663__$1);
var G__7666 = cljs.core.first(seq7663__$2);
var seq7663__$3 = cljs.core.next(seq7663__$2);
var G__7667 = cljs.core.first(seq7663__$3);
var seq7663__$4 = cljs.core.next(seq7663__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7664,G__7665,G__7666,G__7667,seq7663__$4);
}));

return null;
})()
;
(cljs.test$macros.are.cljs$lang$macro = true);

var ret__4785__auto___7979 = (function (){
/**
 * Adds a new string to the list of testing contexts.  May be nested,
 *   but must occur inside a test function (deftest).
 */
cljs.test$macros.testing = (function cljs$test$macros$testing(var_args){
var args__4742__auto__ = [];
var len__4736__auto___7980 = arguments.length;
var i__4737__auto___7981 = (0);
while(true){
if((i__4737__auto___7981 < len__4736__auto___7980)){
args__4742__auto__.push((arguments[i__4737__auto___7981]));

var G__7986 = (i__4737__auto___7981 + (1));
i__4737__auto___7981 = G__7986;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.testing.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,string,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","update-current-env!","/update-current-env!",418667870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,string,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","update-current-env!","/update-current-env!",418667870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.test$macros.testing.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.testing.cljs$lang$applyTo = (function (seq7676){
var G__7677 = cljs.core.first(seq7676);
var seq7676__$1 = cljs.core.next(seq7676);
var G__7678 = cljs.core.first(seq7676__$1);
var seq7676__$2 = cljs.core.next(seq7676__$1);
var G__7679 = cljs.core.first(seq7676__$2);
var seq7676__$3 = cljs.core.next(seq7676__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7677,G__7678,G__7679,seq7676__$3);
}));

return null;
})()
;
(cljs.test$macros.testing.cljs$lang$macro = true);

var ret__4785__auto___7992 = (function (){
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
var len__4736__auto___7993 = arguments.length;
var i__4737__auto___7994 = (0);
while(true){
if((i__4737__auto___7994 < len__4736__auto___7993)){
args__4742__auto__.push((arguments[i__4737__auto___7994]));

var G__7995 = (i__4737__auto___7994 + (1));
i__4737__auto___7994 = G__7995;
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
(cljs.test$macros.deftest.cljs$lang$applyTo = (function (seq7690){
var G__7694 = cljs.core.first(seq7690);
var seq7690__$1 = cljs.core.next(seq7690);
var G__7695 = cljs.core.first(seq7690__$1);
var seq7690__$2 = cljs.core.next(seq7690__$1);
var G__7696 = cljs.core.first(seq7690__$2);
var seq7690__$3 = cljs.core.next(seq7690__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7694,G__7695,G__7696,seq7690__$3);
}));

return null;
})()
;
(cljs.test$macros.deftest.cljs$lang$macro = true);

var ret__4785__auto___8002 = (function (){
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
var len__4736__auto___8004 = arguments.length;
var i__4737__auto___8005 = (0);
while(true){
if((i__4737__auto___8005 < len__4736__auto___8004)){
args__4742__auto__.push((arguments[i__4737__auto___8005]));

var G__8006 = (i__4737__auto___8005 + (1));
i__4737__auto___8005 = G__8006;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.async.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,done,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reify","cljs.core/reify",463577556,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.test","IAsyncTest","cljs.test/IAsyncTest",-885937316,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-invoke","-invoke",1821963807,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___7706__auto__","___7706__auto__",1867767497,null),null,(1),null)),(new cljs.core.List(null,done,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.test$macros.async.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.async.cljs$lang$applyTo = (function (seq7707){
var G__7708 = cljs.core.first(seq7707);
var seq7707__$1 = cljs.core.next(seq7707);
var G__7709 = cljs.core.first(seq7707__$1);
var seq7707__$2 = cljs.core.next(seq7707__$1);
var G__7710 = cljs.core.first(seq7707__$2);
var seq7707__$3 = cljs.core.next(seq7707__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7708,G__7709,G__7710,seq7707__$3);
}));

return null;
})()
;
(cljs.test$macros.async.cljs$lang$macro = true);

cljs.test$macros.ns_QMARK_ = (function cljs$test$macros$ns_QMARK_(x){
return ((cljs.core.seq_QMARK_(x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x),new cljs.core.Symbol(null,"quote","quote",1377916282,null))));
});
var ret__4785__auto___8008 = (function (){
/**
 * Like test-vars, but returns a block for further composition and
 *   later execution.
 */
cljs.test$macros.run_tests_block = (function cljs$test$macros$run_tests_block(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8009 = arguments.length;
var i__4737__auto___8010 = (0);
while(true){
if((i__4737__auto___8010 < len__4736__auto___8009)){
args__4742__auto__.push((arguments[i__4737__auto___8010]));

var G__8011 = (i__4737__auto___8010 + (1));
i__4737__auto___8010 = G__8011;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.run_tests_block.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
if(cljs.core.every_QMARK_((function (p__7733){
var vec__7734 = p__7733;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7734,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7734,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)));
}),namespaces)){
} else {
throw (new Error(["Assert failed: ","All arguments to run-tests must be quoted symbols","\n","(every? (fn [[quote ns]] (and (= quote (quote quote)) (symbol? ns))) namespaces)"].join('')));
}

var is_ns = cljs.test$macros.ns_QMARK_(env_or_ns);
var env = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("env");
var summary = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("summary");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,env,null,(1),null)),(new cljs.core.List(null,((is_ns)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","empty-env","/empty-env",1793510582,null),null,(1),null))))):env_or_ns),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,summary,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","volatile!","cljs.core/volatile!",-829435536,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"test","test",577538877),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"pass","pass",1574159993),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"fail","fail",1706214930),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"error","error",-978969032),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"summary","summary",380847952),null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","test-ns-block","/test-ns-block",-644400493,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ns,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vswap!","cljs.core/vswap!",-2062892188,null),null,(1),null)),(new cljs.core.List(null,summary,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","partial","cljs.core/partial",1483172485,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","merge-with","cljs.core/merge-with",366771213,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","get-and-clear-env!","/get-and-clear-env!",-1002458285,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0))));
}),((is_ns)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [env_or_ns], null),namespaces):namespaces)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","set-env!","/set-env!",-1099160431,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","do-report","/do-report",581091811,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,summary,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,summary,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","clear-env!","/clear-env!",1985937008,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_tests_block.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.run_tests_block.cljs$lang$applyTo = (function (seq7720){
var G__7721 = cljs.core.first(seq7720);
var seq7720__$1 = cljs.core.next(seq7720);
var G__7722 = cljs.core.first(seq7720__$1);
var seq7720__$2 = cljs.core.next(seq7720__$1);
var G__7723 = cljs.core.first(seq7720__$2);
var seq7720__$3 = cljs.core.next(seq7720__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7721,G__7722,G__7723,seq7720__$3);
}));

return null;
})()
;
(cljs.test$macros.run_tests_block.cljs$lang$macro = true);

var ret__4785__auto___8033 = (function (){
/**
 * Runs all tests in the given namespaces; prints results.
 *   Defaults to current namespace if none given. Does not return a meaningful
 *   value due to the possiblity of asynchronous execution. To detect test
 *   completion add a :end-run-tests method case to the cljs.test/report
 *   multimethod.
 */
cljs.test$macros.run_tests = (function cljs$test$macros$run_tests(var_args){
var G__7755 = arguments.length;
switch (G__7755) {
case 2:
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___8035 = arguments.length;
var i__4737__auto___8036 = (0);
while(true){
if((i__4737__auto___8036 < len__4736__auto___8035)){
args_arr__4757__auto__.push((arguments[i__4737__auto___8036]));

var G__8037 = (i__4737__auto___8036 + (1));
i__4737__auto___8036 = G__8037;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","run-tests","/run-tests",-1546431749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","empty-env","/empty-env",1793510582,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer._STAR_cljs_ns_STAR_,null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns){
if(cljs.test$macros.ns_QMARK_(env_or_ns)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","run-tests","/run-tests",-1546431749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","empty-env","/empty-env",1793510582,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,env_or_ns,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","run-tests","/run-tests",-1546431749,null),null,(1),null)),(new cljs.core.List(null,env_or_ns,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer._STAR_cljs_ns_STAR_,null,(1),null))))),null,(1),null))], 0))));
}
}));

(cljs.test$macros.run_tests.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,env_or_ns,namespaces){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","run-block","/run-block",637995581,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","run-tests-block","/run-tests-block",1590583922,null),null,(1),null)),(new cljs.core.List(null,env_or_ns,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([namespaces], 0)))),null,(1),null)))));
}));

/** @this {Function} */
(cljs.test$macros.run_tests.cljs$lang$applyTo = (function (seq7751){
var G__7752 = cljs.core.first(seq7751);
var seq7751__$1 = cljs.core.next(seq7751);
var G__7753 = cljs.core.first(seq7751__$1);
var seq7751__$2 = cljs.core.next(seq7751__$1);
var G__7754 = cljs.core.first(seq7751__$2);
var seq7751__$3 = cljs.core.next(seq7751__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7752,G__7753,G__7754,seq7751__$3);
}));

(cljs.test$macros.run_tests.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.test$macros.run_tests.cljs$lang$macro = true);

var ret__4785__auto___8051 = (function (){
/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
cljs.test$macros.run_all_tests = (function cljs$test$macros$run_all_tests(var_args){
var G__7766 = arguments.length;
switch (G__7766) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","run-all-tests","/run-all-tests",-1055479740,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","empty-env","/empty-env",1793510582,null),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,re){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","run-all-tests","/run-all-tests",-1055479740,null),null,(1),null)),(new cljs.core.List(null,re,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","empty-env","/empty-env",1793510582,null),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.test$macros.run_all_tests.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,re,env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","run-tests","/run-tests",-1546431749,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (ns){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null)))));
}),(function (){var G__7801 = cljs.analyzer.api.all_ns.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(re)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7764_SHARP_){
return cljs.core.re_matches(re,cljs.core.name(p1__7764_SHARP_));
}),G__7801);
} else {
return G__7801;
}
})())], 0))));
}));

(cljs.test$macros.run_all_tests.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.test$macros.run_all_tests.cljs$lang$macro = true);

var ret__4785__auto___8053 = cljs.test$macros.test_all_vars_block = (function cljs$test$macros$test_all_vars_block(_AMPERSAND_form,_AMPERSAND_env,p__7809){
var vec__7810 = p__7809;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7810,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7810,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"env__7802__auto__","env__7802__auto__",1569666533,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","get-current-env","/get-current-env",1663721608,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__7802__auto__","env__7802__auto__",1569666533,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","set-env!","/set-env!",-1099160431,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","empty-env","/empty-env",1793510582,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",1554034706,null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","update-current-env!","/update-current-env!",418667870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-once-fixtures"),null,(1),null))], 0)))):null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",2061085390,null)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","update-current-env!","/update-current-env!",418667870,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,ns,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"cljs-test-each-fixtures"),null,(1),null))], 0)))):null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","test-vars-block","/test-vars-block",-1720743025,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7818){
var vec__7819 = p__7818;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7819,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7819,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(k)),null,(1),null)))));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__7822){
var vec__7823 = p__7822;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7823,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7823,(1),null);
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7826){
var vec__7827 = p__7826;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7827,(1),null);
return new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1(ns)))))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"env__7802__auto__","env__7802__auto__",1569666533,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","clear-env!","/clear-env!",1985937008,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.test$macros.test_all_vars_block.cljs$lang$macro = true);

var ret__4785__auto___8067 = /**
 * Calls test-vars on every var with :test metadata interned in the
 *   namespace, with fixtures.
 */
cljs.test$macros.test_all_vars = (function cljs$test$macros$test_all_vars(_AMPERSAND_form,_AMPERSAND_env,p__7833){
var vec__7834 = p__7833;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7834,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7834,(1),null);
var form = vec__7834;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","run-block","/run-block",637995581,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","test-all-vars-block","/test-all-vars-block",1723555995,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","report","/report",-1260380759,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-test-all-vars","end-test-all-vars",548827253),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))));
});
(cljs.test$macros.test_all_vars.cljs$lang$macro = true);

var ret__4785__auto___8077 = /**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
cljs.test$macros.test_ns_block = (function cljs$test$macros$test_ns_block(_AMPERSAND_form,_AMPERSAND_env,env,p__7839){
var vec__7840 = p__7839;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7840,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7840,(1),null);
var form = vec__7840;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to test-ns must be a quoted symbol","\n","(and (= quote (quote quote)) (symbol? ns))"].join('')));
}

if(cljs.core.truth_(cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1(ns))){
} else {
throw (new Error(["Assert failed: ",["Namespace ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," does not exist"].join(''),"\n","(ana-api/find-ns ns)"].join('')));
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","set-env!","/set-env!",-1099160431,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","do-report","/do-report",581091811,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(function (){var temp__5733__auto__ = cljs.analyzer.api.ns_resolve.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"test-ns-hook","test-ns-hook",6852467,null));
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),"test-ns-hook"),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","block","/block",-1989749559,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","test-all-vars-block","/test-all-vars-block",1723555995,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null)))));
}
})(),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","do-report","/do-report",581091811,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))], 0))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))));
});
(cljs.test$macros.test_ns_block.cljs$lang$macro = true);

var ret__4785__auto___8082 = (function (){
/**
 * If the namespace defines a function named test-ns-hook, calls that.
 *   Otherwise, calls test-all-vars on the namespace.  'ns' is a
 *   namespace object or a symbol.
 * 
 *   Internally binds *report-counters* to a ref initialized to
 *   *initial-report-counters*.  
 */
cljs.test$macros.test_ns = (function cljs$test$macros$test_ns(var_args){
var G__7845 = arguments.length;
switch (G__7845) {
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","test-ns","/test-ns",1973098840,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","empty-env","/empty-env",1793510582,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ns,null,(1),null))], 0))));
}));

(cljs.test$macros.test_ns.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,env,p__7855){
var vec__7856 = p__7855;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7856,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7856,(1),null);
var form = vec__7856;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("","run-block","/run-block",637995581,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("","test-ns-block","/test-ns-block",-644400493,null),null,(1),null)),(new cljs.core.List(null,env,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("","clear-env!","/clear-env!",1985937008,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)))));
}));

(cljs.test$macros.test_ns.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.test$macros.test_ns.cljs$lang$macro = true);

var ret__4785__auto___8093 = (function (){
cljs.test$macros.use_fixtures = (function cljs$test$macros$use_fixtures(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8094 = arguments.length;
var i__4737__auto___8095 = (0);
while(true){
if((i__4737__auto___8095 < len__4736__auto___8094)){
args__4742__auto__.push((arguments[i__4737__auto___8095]));

var G__8096 = (i__4737__auto___8095 + (1));
i__4737__auto___8095 = G__8096;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.test$macros.use_fixtures.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,fns){
var pred__7863 = cljs.core._EQ_;
var expr__7864 = type;
if(cljs.core.truth_((pred__7863.cljs$core$IFn$_invoke$arity$2 ? pred__7863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"once","once",-262568523),expr__7864) : pred__7863.call(null,new cljs.core.Keyword(null,"once","once",-262568523),expr__7864)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs-test-once-fixtures","cljs-test-once-fixtures",1554034706,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)))),null,(1),null))], 0))));
} else {
if(cljs.core.truth_((pred__7863.cljs$core$IFn$_invoke$arity$2 ? pred__7863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"each","each",940016129),expr__7864) : pred__7863.call(null,new cljs.core.Keyword(null,"each","each",940016129),expr__7864)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cljs-test-each-fixtures","cljs-test-each-fixtures",2061085390,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fns)))),null,(1),null))], 0))));
} else {
if(cljs.core.truth_((pred__7863.cljs$core$IFn$_invoke$arity$2 ? pred__7863.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),expr__7864) : pred__7863.call(null,new cljs.core.Keyword(null,"else","else",-1508377146),expr__7864)))){
throw (new Error("First argument to cljs.test/use-fixtures must be :once or :each"));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__7864)].join('')));
}
}
}
}));

(cljs.test$macros.use_fixtures.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.test$macros.use_fixtures.cljs$lang$applyTo = (function (seq7859){
var G__7860 = cljs.core.first(seq7859);
var seq7859__$1 = cljs.core.next(seq7859);
var G__7861 = cljs.core.first(seq7859__$1);
var seq7859__$2 = cljs.core.next(seq7859__$1);
var G__7862 = cljs.core.first(seq7859__$2);
var seq7859__$3 = cljs.core.next(seq7859__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7860,G__7861,G__7862,seq7859__$3);
}));

return null;
})()
;
(cljs.test$macros.use_fixtures.cljs$lang$macro = true);


//# sourceMappingURL=cljs.test$macros.js.map
