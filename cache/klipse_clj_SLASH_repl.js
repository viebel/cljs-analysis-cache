goog.provide('klipse_clj.repl');
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.repl !== 'undefined') && (typeof klipse_clj.repl.current_ns_eval !== 'undefined')){
} else {
klipse_clj.repl.current_ns_eval = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.repl !== 'undefined') && (typeof klipse_clj.repl.current_ns_compile !== 'undefined')){
} else {
klipse_clj.repl.current_ns_compile = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
}
klipse_clj.repl.reset_ns_eval_BANG_ = (function klipse_clj$repl$reset_ns_eval_BANG_(){
return cljs.core.reset_BANG_(klipse_clj.repl.current_ns_eval,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
});
klipse_clj.repl.reset_ns_compile_BANG_ = (function klipse_clj$repl$reset_ns_compile_BANG_(){
return cljs.core.reset_BANG_(klipse_clj.repl.current_ns_compile,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null));
});
if((typeof klipse_clj !== 'undefined') && (typeof klipse_clj.repl !== 'undefined') && (typeof klipse_clj.repl.st !== 'undefined')){
} else {
klipse_clj.repl.st = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
klipse_clj.repl.reset_state_eval_BANG_ = (function klipse_clj$repl$reset_state_eval_BANG_(){
return cljs.core.reset_BANG_(klipse_clj.repl.st,null);
});
klipse_clj.repl.st_compile = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
klipse_clj.repl.create_state_compile = (function klipse_clj$repl$create_state_compile(){
if((cljs.core.deref(klipse_clj.repl.st_compile) == null)){
cljs.core.reset_BANG_(klipse_clj.repl.st_compile,cljs.js.empty_state.cljs$core$IFn$_invoke$arity$0());
} else {
}

return cljs.core.deref(klipse_clj.repl.st_compile);
});
klipse_clj.repl.reset_state_compile_BANG_ = (function klipse_clj$repl$reset_state_compile_BANG_(){
return cljs.core.reset_BANG_(klipse_clj.repl.st_compile,null);
});
klipse_clj.repl.eval_form = (function klipse_clj$repl$eval_form(var_args){
var G__19695 = arguments.length;
switch (G__19695) {
case 1:
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$1 = (function (form){
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2(form,cljs.core._STAR_ns_STAR_.name);
}));

(klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2 = (function (form,ns){
var result = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
cljs.js.eval.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(klipse_clj.repl.st),form,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"eval","eval",-1103567905),cljs.js.js_eval,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], null),(function (p__19717){
var map__19718 = p__19717;
var map__19718__$1 = (((((!((map__19718 == null))))?(((((map__19718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19718.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19718):map__19718);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19718__$1,new cljs.core.Keyword(null,"value","value",305978217));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19718__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return error;
} else {
return cljs.core.reset_BANG_(result,value);
}
}));

return cljs.core.deref(result);
}));

(klipse_clj.repl.eval_form.cljs$lang$maxFixedArity = 2);

klipse_clj.repl.def_a_var = (function klipse_clj$repl$def_a_var(var_args){
var G__19744 = arguments.length;
switch (G__19744) {
case 2:
return klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$2 = (function (ns,name){
var temp__5735__auto__ = cljs.core.find_ns((function (){var G__19745 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name(G__19745);
} else {
return G__19745;
}
})());
if(cljs.core.truth_(temp__5735__auto__)){
var the_ns = temp__5735__auto__;
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),cljs.core.ns_name(the_ns));
} else {
return null;
}
}));

(klipse_clj.repl.def_a_var.cljs$core$IFn$_invoke$arity$3 = (function (ns,name,val){
var temp__5735__auto__ = cljs.core.find_ns((function (){var G__19748 = ns;
if((ns instanceof cljs.core.Namespace)){
return cljs.core.ns_name(G__19748);
} else {
return G__19748;
}
})());
if(cljs.core.truth_(temp__5735__auto__)){
var the_ns = temp__5735__auto__;
return klipse_clj.repl.eval_form.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,val,null,(1),null))], 0)))),cljs.core.ns_name(the_ns));
} else {
return null;
}
}));

(klipse_clj.repl.def_a_var.cljs$lang$maxFixedArity = 3);

klipse_clj.repl.current_alias_map = (function klipse_clj$repl$current_alias_map(var_args){
var G__19750 = arguments.length;
switch (G__19750) {
case 0:
return klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$0 = (function (){
return klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(klipse_clj.repl.current_ns_eval),cljs.core.deref(klipse_clj.repl.st));
}));

(klipse_clj.repl.current_alias_map.cljs$core$IFn$_invoke$arity$2 = (function (ns,state){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__19753){
var vec__19758 = p__19753;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19758,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,v);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"requires","requires",-1201390927)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null))], 0))));
}));

(klipse_clj.repl.current_alias_map.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=klipse_clj.repl.js.map
