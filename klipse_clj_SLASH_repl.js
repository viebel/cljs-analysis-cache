goog.provide("klipse_clj.repl");
klipse_clj.repl.node$module$clojure_BSLASH_$string = require('clojure.string');
if(typeof window !== "undefined") {window.cljs.user = {}};
if(typeof klipse_clj.repl.current_ns_eval !== 'undefined'){
} else {
klipse_clj.repl.current_ns_eval = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",(877795071),null));
}
if(typeof klipse_clj.repl.current_ns_compile !== 'undefined'){
} else {
klipse_clj.repl.current_ns_compile = cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",(877795071),null));
}
klipse_clj.repl.reset_ns_eval_BANG_ = (function klipse_clj$repl$reset_ns_eval_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.current_ns_eval,new cljs.core.Symbol(null,"cljs.user","cljs.user",(877795071),null));
});
klipse_clj.repl.reset_ns_compile_BANG_ = (function klipse_clj$repl$reset_ns_compile_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.current_ns_compile,new cljs.core.Symbol(null,"cljs.user","cljs.user",(877795071),null));
});
klipse_clj.repl.st = cljs.core.atom.call(null,null);
klipse_clj.repl.create_state_eval = (function klipse_clj$repl$create_state_eval(){
if((klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,klipse_clj.repl.st) == null)){
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,cljs.js.empty_state.call(null));
} else {
}

return klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,klipse_clj.repl.st);
});
klipse_clj.repl.reset_state_eval_BANG_ = (function klipse_clj$repl$reset_state_eval_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.st,null);
});
klipse_clj.repl.st_compile = cljs.core.atom.call(null,null);
klipse_clj.repl.create_state_compile = (function klipse_clj$repl$create_state_compile(){
if((klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,klipse_clj.repl.st_compile) == null)){
cljs.core.reset_BANG_.call(null,klipse_clj.repl.st_compile,cljs.js.empty_state.call(null));
} else {
}

return klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,klipse_clj.repl.st_compile);
});
klipse_clj.repl.reset_state_compile_BANG_ = (function klipse_clj$repl$reset_state_compile_BANG_(){
return cljs.core.reset_BANG_.call(null,klipse_clj.repl.st_compile,null);
});
klipse_clj.repl.eval_form = (function klipse_clj$repl$eval_form(var_args){
var G__24 = arguments.length;
switch (G__24) {
case (1):
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$1 = (function (form){
return klipse_clj.repl.eval_form.call(null,cljs.core._STAR_ns_STAR_.name);
});

klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.call(null,null);
cljs.js.eval.call(null,klipse_clj.repl.create_state_eval.call(null),form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",(441598760)),ns,new cljs.core.Keyword(null,"context","context",(-830191113)),new cljs.core.Keyword(null,"expr","expr",(745722291)),new cljs.core.Keyword(null,"eval","eval",(-1103567905)),cljs.js.js_eval,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",(-1551927320)),true], null),((function (result){
return (function (p__25){
var map__26 = p__25;
var map__26__$1 = (((cljs.core.truth_(klipse_clj.repl.node$module$cljs_BSLASH_$core.not.call(null,(map__26 == null)))?(((false) || ((klipse_clj.repl.node$module$cljs_BSLASH_$core.PROTOCOL_SENTINEL === map__26.klipse_clj$repl$node$module$cljs_BSLASH_$core$ISeq$)))?true:false):false))?klipse_clj.repl.node$module$cljs_BSLASH_$core.apply.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.hash_map,map__26):map__26);
var value = klipse_clj.repl.node$module$cljs_BSLASH_$core.get.call(null,map__26__$1,new cljs.core.Keyword(null,"value","value",(305978217)));
var error = klipse_clj.repl.node$module$cljs_BSLASH_$core.get.call(null,map__26__$1,new cljs.core.Keyword(null,"error","error",(-978969032)));
if(cljs.core.truth_(error)){
return error;
} else {
return cljs.core.reset_BANG_.call(null,result,value);
}
});})(result))
);

return klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,result);
});

klipse_clj.repl.eval_form.cljs$lang$maxFixedArity = (2);

klipse_clj.repl.def_a_var = (function klipse_clj$repl$def_a_var(var_args){
var G__30 = arguments.length;
switch (G__30) {
case (2):
return klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$2 = (function (ns,name){
var temp__22039__auto__ = cljs.core.find_ns.call(null,(function (){var G__31 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__31);
} else {
return G__31;
}
})());
if(cljs.core.truth_(temp__22039__auto__)){
var the_ns = temp__22039__auto__;
return klipse_clj.repl.eval_form.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.sequence.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.concat.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core._conj.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),(function (){var x__23030__auto__ = name;
return klipse_clj.repl.node$module$cljs_BSLASH_$core._conj.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.List.EMPTY,x__23030__auto__);
})())),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$3 = (function (ns,name,val){
var temp__22039__auto__ = cljs.core.find_ns.call(null,(function (){var G__32 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name.call(null,G__32);
} else {
return G__32;
}
})());
if(cljs.core.truth_(temp__22039__auto__)){
var the_ns = temp__22039__auto__;
return klipse_clj.repl.eval_form.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.sequence.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.concat.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core._conj.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.List.EMPTY,new cljs.core.Symbol(null,"def","def",(597100991),null)),(function (){var x__23030__auto__ = name;
return klipse_clj.repl.node$module$cljs_BSLASH_$core._conj.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.List.EMPTY,x__23030__auto__);
})(),(function (){var x__23030__auto__ = val;
return klipse_clj.repl.node$module$cljs_BSLASH_$core._conj.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.List.EMPTY,x__23030__auto__);
})())),cljs.core.ns_name.call(null,the_ns));
} else {
return null;
}
});

klipse_clj.repl.def_a_var.cljs$lang$maxFixedArity = (3);

klipse_clj.repl.drop_macros_suffix = (function klipse_clj$repl$drop_macros_suffix(ns_name){
if(cljs.core.truth_(klipse_clj.repl.node$module$clojure_BSLASH_$string.ends_with_QMARK_.call(null,ns_name,"$macros"))){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop_last.call(null,(7),ns_name));
} else {
return ns_name;
}
});
/**
 * Returns a sequence of all namespaces.
 */
klipse_clj.repl.all_ns = (function klipse_clj$repl$all_ns(){
return cljs.core.keys.call(null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)).cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,klipse_clj.repl.st.call(null))));
});
klipse_clj.repl.all_macros_ns = (function klipse_clj$repl$all_macros_ns(){
return cljs.core.filter.call(null,(function (p1__1_SHARP_){
return klipse_clj.repl.node$module$clojure_BSLASH_$string.ends_with_QMARK_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__1_SHARP_)].join(''),"$macros");
}),klipse_clj.repl.all_ns.call(null));
});
/**
 * Gets the AST for a given namespace.
 */
klipse_clj.repl.get_namespace = (function klipse_clj$repl$get_namespace(ns){
if((ns instanceof klipse_clj.repl.node$module$cljs_BSLASH_$core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,klipse_clj.repl.st.call(null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",(-260788927)),ns], null));
});
/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
klipse_clj.repl.resolve_var = (function klipse_clj$repl$resolve_var(env,sym){
if(cljs.core.map_QMARK_.call(null,env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof klipse_clj.repl.node$module$cljs_BSLASH_$core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.call(null,env,sym,cljs.analyzer.confirm_var_exists_throw.call(null));
}catch (e34){var _ = e34;
return cljs.analyzer.resolve_macro_var.call(null,env,sym);
}});
klipse_clj.repl.get_macro_var = (function klipse_clj$repl$get_macro_var(env,sym,macros_ns){
if((macros_ns instanceof klipse_clj.repl.node$module$cljs_BSLASH_$core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? macros-ns)"));
}

var temp__22039__auto__ = (function (){var env__1__auto__ = klipse_clj.repl.st.call(null);
var env__1__auto____$1 = (cljs.core.truth_(klipse_clj.repl.node$module$cljs_BSLASH_$core.map_QMARK_.call(null,env__1__auto__))?klipse_clj.repl.node$module$cljs_BSLASH_$core.atom.call(null,env__1__auto__):(cljs.core.truth_((function (){var and__22202__auto__ = (env__1__auto__ instanceof klipse_clj.repl.node$module$cljs_BSLASH_$core.Atom);
if(and__22202__auto__){
return klipse_clj.repl.node$module$cljs_BSLASH_$core.map_QMARK_.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,env__1__auto__));
} else {
return and__22202__auto__;
}
})())?env__1__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.node$module$cljs_BSLASH_$core.type.call(null,env__1__auto__))].join('')))})()
));
var _STAR_compiler_STAR_35 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__1__auto____$1;

try{return klipse_clj.repl.resolve_var.call(null,env,cljs.core.symbol.call(null,macros_ns,cljs.core.name.call(null,sym)));
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_35;
}})();
if(cljs.core.truth_(temp__22039__auto__)){
var macro_var = temp__22039__auto__;
return cljs.core.assoc.call(null,macro_var,new cljs.core.Keyword(null,"ns","ns",(441598760)),macros_ns);
} else {
return null;
}
});
klipse_clj.repl.get_var = (function klipse_clj$repl$get_var(env,sym){
var _STAR_cljs_warning_handlers_STAR_36 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = null;

try{var var$ = (function (){var or__22217__auto__ = (function (){var env__1__auto__ = klipse_clj.repl.st.call(null);
var env__1__auto____$1 = (cljs.core.truth_(klipse_clj.repl.node$module$cljs_BSLASH_$core.map_QMARK_.call(null,env__1__auto__))?klipse_clj.repl.node$module$cljs_BSLASH_$core.atom.call(null,env__1__auto__):(cljs.core.truth_((function (){var and__22202__auto__ = (env__1__auto__ instanceof klipse_clj.repl.node$module$cljs_BSLASH_$core.Atom);
if(and__22202__auto__){
return klipse_clj.repl.node$module$cljs_BSLASH_$core.map_QMARK_.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,env__1__auto__));
} else {
return and__22202__auto__;
}
})())?env__1__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.node$module$cljs_BSLASH_$core.type.call(null,env__1__auto__))].join('')))})()
));
var _STAR_compiler_STAR_38 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__1__auto____$1;

try{return klipse_clj.repl.resolve_var.call(null,env,sym);
}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_38;
}})();
if(cljs.core.truth_(or__22217__auto__)){
return or__22217__auto__;
} else {
return cljs.core.some.call(null,((function (or__22217__auto__,_STAR_cljs_warning_handlers_STAR_36){
return (function (p1__2_SHARP_){
return klipse_clj.repl.get_macro_var.call(null,env,sym,p1__2_SHARP_);
});})(or__22217__auto__,_STAR_cljs_warning_handlers_STAR_36))
,klipse_clj.repl.all_macros_ns.call(null));
}
})();
if(cljs.core.truth_(var$)){
return cljs.core.update.call(null,(function (){var G__39 = var$;
var G__39__$1 = ((cljs.core.not.call(null,new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.call(null,G__39,new cljs.core.Keyword(null,"ns","ns",(441598760)),cljs.core.symbol.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(var$)))):G__39);
if(cljs.core._EQ_.call(null,cljs.core.namespace.call(null,new cljs.core.Keyword(null,"name","name",(1843675177)).cljs$core$IFn$_invoke$arity$1(var$)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(var$))].join(''))){
return cljs.core.update.call(null,G__39__$1,new cljs.core.Keyword(null,"name","name",(1843675177)),((function (G__39,G__39__$1,var$,_STAR_cljs_warning_handlers_STAR_36){
return (function (p1__3_SHARP_){
return cljs.core.symbol.call(null,cljs.core.name.call(null,p1__3_SHARP_));
});})(G__39,G__39__$1,var$,_STAR_cljs_warning_handlers_STAR_36))
);
} else {
return G__39__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",(441598760)),cljs.core.comp.call(null,cljs.core.symbol,klipse_clj.repl.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR_36;
}});
klipse_clj.repl.get_aenv = (function klipse_clj$repl$get_aenv(){
return cljs.core.assoc.call(null,cljs.analyzer.empty_env.call(null),new cljs.core.Keyword(null,"ns","ns",(441598760)),klipse_clj.repl.get_namespace.call(null,klipse_clj.repl.node$module$cljs_BSLASH_$core.deref.call(null,klipse_clj.repl.current_ns_eval)),new cljs.core.Keyword(null,"context","context",(-830191113)),new cljs.core.Keyword(null,"expr","expr",(745722291)));
});
/**
 * Undoes the effect that wrapping a reader conditional around
 *   a defn has on a docstring.
 */
klipse_clj.repl.undo_reader_conditional_spacing = (function klipse_clj$repl$undo_reader_conditional_spacing(s){
if((s == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/[^\n]*\n\n?\s{5,6}\S.*/,s))){
return klipse_clj.repl.node$module$clojure_BSLASH_$string.replace_all.call(null,s,/\n      ?/,"\n  ");
} else {
return s;
}
}
});
klipse_clj.repl.doc_STAR_ = (function klipse_clj$repl$doc_STAR_(name){
var temp__21984__auto__ = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",(-2144855648),null),new cljs.core.Symbol(null,"fn","fn",(465265323),null),new cljs.core.Symbol(null,"catch","catch",(-1616370245),null),new cljs.core.Symbol(null,"try","try",(-1273693247),null),new cljs.core.Symbol(null,"finally","finally",(-1065347064),null),new cljs.core.Symbol(null,"try","try",(-1273693247),null)], null).call(null,name);
if(cljs.core.truth_(temp__21984__auto__)){
var special_name = temp__21984__auto__;
return klipse_clj.repl.doc_STAR_.call(null,special_name);
} else {
if(cljs.core.truth_(klipse_clj.repl.get_var.call(null,klipse_clj.repl.get_aenv.call(null),name))){
return cljs.core.symbol.call(null,(function (){var sb__23199__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_40_47 = klipse_clj.repl.node$module$cljs_BSLASH_$core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_41_48 = klipse_clj.repl.node$module$cljs_BSLASH_$core._STAR_print_fn_STAR_;
klipse_clj.repl.node$module$cljs_BSLASH_$core._STAR_print_newline_STAR_ = true;

klipse_clj.repl.node$module$cljs_BSLASH_$core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_40_47,_STAR_print_fn_STAR_41_48,sb__23199__auto__,temp__21984__auto__){
return (function (x__23200__auto__){
return sb__23199__auto__.append(x__23200__auto__);
});})(_STAR_print_newline_STAR_40_47,_STAR_print_fn_STAR_41_48,sb__23199__auto__,temp__21984__auto__))
;

try{cljs.repl.print_doc.call(null,(function (){var aenv = klipse_clj.repl.get_aenv.call(null);
var var$ = klipse_clj.repl.get_var.call(null,aenv,name);
var m = cljs.core.merge.call(null,cljs.core.update_in.call(null,cljs.core.select_keys.call(null,var$,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",(441598760)),new cljs.core.Keyword(null,"name","name",(1843675177)),new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"forms","forms",(2045992350)),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),new cljs.core.Keyword(null,"macro","macro",(-867863404)),new cljs.core.Keyword(null,"url","url",(276297046))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"doc","doc",(1913296891))], null),klipse_clj.repl.undo_reader_conditional_spacing),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"forms","forms",(2045992350)),cljs.core.second.call(null,new cljs.core.Keyword(null,"forms","forms",(2045992350)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",(1499536964)).cljs$core$IFn$_invoke$arity$1(var$))),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",(1661989754)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",(1499536964)).cljs$core$IFn$_invoke$arity$1(var$)))], null));
var G__42 = cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",(1843675177))], null),klipse_clj.repl.node$module$cljs_BSLASH_$core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",(1279552198)).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.assoc.call(null,G__42,new cljs.core.Keyword(null,"protocol","protocol",(652470118)),true,new cljs.core.Keyword(null,"methods","methods",(453930866)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__42,aenv,var$,m,_STAR_print_newline_STAR_40_47,_STAR_print_fn_STAR_41_48,sb__23199__auto__,temp__21984__auto__){
return (function (p__43){
var vec__44 = p__43;
var fname = klipse_clj.repl.node$module$cljs_BSLASH_$core.nth.call(null,vec__44,(0),null);
var sigs = klipse_clj.repl.node$module$cljs_BSLASH_$core.nth.call(null,vec__44,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",(1913296891)),new cljs.core.Keyword(null,"doc","doc",(1913296891)).cljs$core$IFn$_invoke$arity$1(klipse_clj.repl.get_var.call(null,aenv,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",(441598760)).cljs$core$IFn$_invoke$arity$1(var$))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('')))),new cljs.core.Keyword(null,"arglists","arglists",(1661989754)),cljs.core.seq.call(null,sigs)], null)], null);
});})(G__42,aenv,var$,m,_STAR_print_newline_STAR_40_47,_STAR_print_fn_STAR_41_48,sb__23199__auto__,temp__21984__auto__))
,cljs.core.get_in.call(null,var$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",(1471745843)),new cljs.core.Keyword(null,"methods","methods",(453930866))], null)))));
} else {
return G__42;
}
})());
}finally {klipse_clj.repl.node$module$cljs_BSLASH_$core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41_48;

klipse_clj.repl.node$module$cljs_BSLASH_$core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_40_47;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__23199__auto__)].join('');
})());
} else {
return null;
}
}
});
