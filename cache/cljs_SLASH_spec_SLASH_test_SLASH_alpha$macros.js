goog.provide('cljs.spec.test.alpha$macros');
if((typeof cljs !== 'undefined') && (typeof cljs.spec !== 'undefined') && (typeof cljs.spec.test !== 'undefined') && (typeof cljs.spec.test.alpha$macros !== 'undefined') && (typeof cljs.spec.test.alpha$macros.instrumented_vars !== 'undefined')){
} else {
cljs.spec.test.alpha$macros.instrumented_vars = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
}
cljs.spec.test.alpha$macros.collectionize = (function cljs$spec$test$alpha$macros$collectionize(x){
if((x instanceof cljs.core.Symbol)){
return (new cljs.core.List(null,x,null,(1),null));
} else {
return x;
}
});
cljs.spec.test.alpha$macros.enumerate_namespace_STAR_ = (function cljs$spec$test$alpha$macros$enumerate_namespace_STAR_(sym_or_syms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (sym){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name_sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),cljs.core.name(name_sym));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1(sym))));
})),cljs.spec.test.alpha$macros.collectionize(sym_or_syms));
});
var ret__5781__auto___19610 = /**
 * Given a symbol naming an ns, or a collection of such symbols,
 * returns the set of all symbols naming vars in those nses.
 */
cljs.spec.test.alpha$macros.enumerate_namespace = (function cljs$spec$test$alpha$macros$enumerate_namespace(_AMPERSAND_form,_AMPERSAND_env,ns_sym_or_syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.test.alpha$macros.enumerate_namespace_STAR_(cljs.core.eval(ns_sym_or_syms)),null,(1),null)))));
});
(cljs.spec.test.alpha$macros.enumerate_namespace.cljs$lang$macro = true);

cljs.spec.test.alpha$macros.fn_spec_name_QMARK_ = (function cljs$spec$test$alpha$macros$fn_spec_name_QMARK_(s){
return (s instanceof cljs.core.Symbol);
});
var ret__5781__auto___19611 = (function (){
/**
 * Disables instrument's checking of calls, within a scope.
 */
cljs.spec.test.alpha$macros.with_instrument_disabled = (function cljs$spec$test$alpha$macros$with_instrument_disabled(var_args){
var args__5732__auto__ = [];
var len__5726__auto___19612 = arguments.length;
var i__5727__auto___19613 = (0);
while(true){
if((i__5727__auto___19613 < len__5726__auto___19612)){
args__5732__auto__.push((arguments[i__5727__auto___19613]));

var G__19614 = (i__5727__auto___19613 + (1));
i__5727__auto___19613 = G__19614;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"orig__19039__auto__","orig__19039__auto__",348752738,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-*instrument-enabled*",".-*instrument-enabled*",106869324,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","cljs.spec.test.alpha","js/cljs.spec.test.alpha",-1221661182,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","*instrument-enabled*","cljs.spec.test.alpha/*instrument-enabled*",-856303648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","*instrument-enabled*","cljs.spec.test.alpha/*instrument-enabled*",-856303648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"orig__19039__auto__","orig__19039__auto__",348752738,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$applyTo = (function (seq19042){
var G__19043 = cljs.core.first(seq19042);
var seq19042__$1 = cljs.core.next(seq19042);
var G__19044 = cljs.core.first(seq19042__$1);
var seq19042__$2 = cljs.core.next(seq19042__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19043,G__19044,seq19042__$2);
}));

return null;
})()
;
(cljs.spec.test.alpha$macros.with_instrument_disabled.cljs$lang$macro = true);

var ret__5781__auto___19622 = cljs.spec.test.alpha$macros.instrument_1 = (function cljs$spec$test$alpha$macros$instrument_1(_AMPERSAND_form,_AMPERSAND_env,p__19055,opts){
var vec__19057 = p__19055;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19057,(1),null);
var temp__5804__auto__ = cljs.analyzer.api.resolve(_AMPERSAND_env,s);
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v);
if((((new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(v) == null)) && ((((new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(v) == null)) && (cljs.core.contains_QMARK_(cljs.spec.alpha$macros.speced_vars(),var_name)))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.alpha$macros.instrumented_vars,cljs.core.conj,var_name);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"checked__19054__auto__","checked__19054__auto__",-1936008974,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1*","cljs.spec.test.alpha/instrument-1*",756550473,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"checked__19054__auto__","checked__19054__auto__",-1936008974,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"checked__19054__auto__","checked__19054__auto__",-1936008974,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,var_name,null,(1),null))))),null,(1),null))], 0))));
} else {
return null;
}
} else {
return null;
}
});
(cljs.spec.test.alpha$macros.instrument_1.cljs$lang$macro = true);

var ret__5781__auto___19623 = cljs.spec.test.alpha$macros.unstrument_1 = (function cljs$spec$test$alpha$macros$unstrument_1(_AMPERSAND_form,_AMPERSAND_env,p__19084){
var vec__19085 = p__19084;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19085,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19085,(1),null);
var temp__5804__auto__ = cljs.analyzer.api.resolve(_AMPERSAND_env,s);
if(cljs.core.truth_(temp__5804__auto__)){
var v = temp__5804__auto__;
if(cljs.core.truth_((function (){var G__19091 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v);
var fexpr__19090 = cljs.core.deref(cljs.spec.test.alpha$macros.instrumented_vars);
return (fexpr__19090.cljs$core$IFn$_invoke$arity$1 ? fexpr__19090.cljs$core$IFn$_invoke$arity$1(G__19091) : fexpr__19090.call(null, G__19091));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.spec.test.alpha$macros.instrumented_vars,cljs.core.disj,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"raw__19082__auto__","raw__19082__auto__",692219075,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument-1*","cljs.spec.test.alpha/unstrument-1*",1286793190,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"raw__19082__auto__","raw__19082__auto__",692219075,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,s,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"raw__19082__auto__","raw__19082__auto__",692219075,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(v),null,(1),null))))),null,(1),null))], 0))));
} else {
return null;
}
} else {
return null;
}
});
(cljs.spec.test.alpha$macros.unstrument_1.cljs$lang$macro = true);

cljs.spec.test.alpha$macros.sym_or_syms__GT_syms = (function cljs$spec$test$alpha$macros$sym_or_syms__GT_syms(sym_or_syms){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (sym){
if(cljs.core.truth_((function (){var and__5000__auto__ = clojure.string.includes_QMARK_(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),".");
if(and__5000__auto__){
return cljs.analyzer.api.find_ns.cljs$core$IFn$_invoke$arity$1(sym);
} else {
return and__5000__auto__;
}
})())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name_sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(sym),cljs.core.name(name_sym));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19129_SHARP_){
return cljs.core.not(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(p1__19129_SHARP_));
}),cljs.core.vals(cljs.analyzer.api.ns_interns.cljs$core$IFn$_invoke$arity$1(sym)))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null);
}
})),cljs.spec.test.alpha$macros.collectionize(sym_or_syms));
});
/**
 * Helper for extracting a symbol or symbols from a (potentially
 *   user-supplied) quoted form. In the case that the form has ::no-eval meta, we
 *   know it was generated by us and we directly extract the result, assuming the
 *   shape of the form. This avoids applying eval to extremely large forms in the
 *   latter case.
 */
cljs.spec.test.alpha$macros.form__GT_sym_or_syms = (function cljs$spec$test$alpha$macros$form__GT_sym_or_syms(sym_or_syms){
if(cljs.core.truth_(new cljs.core.Keyword("cljs.spec.test.alpha","no-eval","cljs.spec.test.alpha/no-eval",-644853770).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym_or_syms)))){
return cljs.core.second(sym_or_syms);
} else {
return cljs.core.eval(sym_or_syms);
}
});
var ret__5781__auto___19624 = (function (){
/**
 * Instruments the vars named by sym-or-syms, a symbol or collection
 * of symbols, or all instrumentable vars if sym-or-syms is not
 * specified. If a symbol identifies a namespace then all symbols in that
 * namespace will be enumerated.
 * 
 * If a var has an :args fn-spec, sets the var's root binding to a
 * fn that checks arg conformance (throwing an exception on failure)
 * before delegating to the original fn.
 * 
 * The opts map can be used to override registered specs, and/or to
 * replace fn implementations entirely. Opts for symbols not included
 * in sym-or-syms are ignored. This facilitates sharing a common
 * options map across many different calls to instrument.
 * 
 * The opts map may have the following keys:
 * 
 *   :spec     a map from var-name symbols to override specs
 *   :stub     a set of var-name symbols to be replaced by stubs
 *   :gen      a map from spec names to generator overrides
 *   :replace  a map from var-name symbols to replacement fns
 * 
 * :spec overrides registered fn-specs with specs your provide. Use
 * :spec overrides to provide specs for libraries that do not have
 * them, or to constrain your own use of a fn to a subset of its
 * spec'ed contract.
 * 
 * :stub replaces a fn with a stub that checks :args, then uses the
 * :ret spec to generate a return value.
 * 
 * :gen overrides are used only for :stub generation.
 * 
 * :replace replaces a fn with a fn that checks args conformance, then
 * invokes the fn you provide, enabling arbitrary stubbing and mocking.
 * 
 * :spec can be used in combination with :stub or :replace.
 * 
 * Returns a collection of syms naming the vars instrumented.
 */
cljs.spec.test.alpha$macros.instrument = (function cljs$spec$test$alpha$macros$instrument(var_args){
var G__19178 = arguments.length;
switch (G__19178) {
case 2:
return cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","instrument","cljs.spec.test.alpha/instrument",1447464690,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha$macros.speced_vars())))),null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,148,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,17,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.test.alpha","no-eval","cljs.spec.test.alpha/no-eval",-644853770),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)))));
}));

(cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","instrument","cljs.spec.test.alpha/instrument",1447464690,null),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.instrument.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms,opts){
var syms = cljs.spec.test.alpha$macros.sym_or_syms__GT_syms(cljs.spec.test.alpha$macros.form__GT_sym_or_syms(sym_or_syms));
var opts_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("opts");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,opts_sym,null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__19162__auto__","ret__19162__auto__",-1054982420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___19163__auto__","___19163__auto__",-1549552187,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__19164__auto__","f__19164__auto__",30533560,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sym__19165__auto__","sym__19165__auto__",-1966667749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f__19164__auto__","f__19164__auto__",30533560,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__19162__auto__","ret__19162__auto__",-1054982420,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"sym__19165__auto__","sym__19165__auto__",-1966667749,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sym__19165__auto__","sym__19165__auto__",-1966667749,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,syms,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","instrument-1","cljs.spec.test.alpha/instrument-1",-1984881348,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,opts_sym,null,(1),null))], 0)))),null,(1),null))], 0))));
}),syms))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","filter","cljs.core/filter",-251894204,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p1__19160__19168__auto__","p1__19160__19168__auto__",2103048311,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","instrumentable-syms","cljs.spec.test.alpha/instrumentable-syms",1088645904,null),null,(1),null)),(new cljs.core.List(null,opts_sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p1__19160__19168__auto__","p1__19160__19168__auto__",2103048311,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","distinct-by","cljs.spec.test.alpha/distinct-by",-1374292576,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.instrument.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.spec.test.alpha$macros.instrument.cljs$lang$macro = true);

var ret__5781__auto___19626 = (function (){
/**
 * Undoes instrument on the vars named by sym-or-syms, specified
 * as in instrument. With no args, unstruments all instrumented vars.
 * Returns a collection of syms naming the vars unstrumented.
 */
cljs.spec.test.alpha$macros.unstrument = (function cljs$spec$test$alpha$macros$unstrument(var_args){
var G__19330 = arguments.length;
switch (G__19330) {
case 2:
return cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument","cljs.spec.test.alpha/unstrument",-512915776,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.spec.test.alpha$macros.instrumented_vars))))),null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,174,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,17,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.test.alpha","no-eval","cljs.spec.test.alpha/no-eval",-644853770),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)))));
}));

(cljs.spec.test.alpha$macros.unstrument.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms){
var syms = cljs.spec.test.alpha$macros.sym_or_syms__GT_syms(cljs.spec.test.alpha$macros.form__GT_sym_or_syms(sym_or_syms));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__19323__auto__","ret__19323__auto__",-1920092683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__19324__auto__","f__19324__auto__",-1993554572,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sym__19325__auto__","sym__19325__auto__",-892928930,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f__19324__auto__","f__19324__auto__",-1993554572,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->","cljs.core/cond->",-113941356,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__19323__auto__","ret__19323__auto__",-1920092683,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"sym__19325__auto__","sym__19325__auto__",-892928930,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sym__19325__auto__","sym__19325__auto__",-892928930,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sym){
if((sym instanceof cljs.core.Symbol)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument-1","cljs.spec.test.alpha/unstrument-1",-1370180972,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
return null;
}
}),syms)))))),null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.unstrument.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(cljs.spec.test.alpha$macros.unstrument.cljs$lang$macro = true);

var ret__5781__auto___19638 = cljs.spec.test.alpha$macros.check_1 = (function cljs$spec$test$alpha$macros$check_1(_AMPERSAND_form,_AMPERSAND_env,p__19362,f,spec,opts){
var vec__19367 = p__19362;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19367,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19367,(1),null);
var qs = vec__19367;
var map__19370 = (cljs.core.truth_(qs)?cljs.analyzer.api.resolve(_AMPERSAND_env,s):null);
var map__19370__$1 = cljs.core.__destructure_map(map__19370);
var v = map__19370__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19370__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"s__19347__auto__","s__19347__auto__",-1786679677,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"v__19348__auto__","v__19348__auto__",-1712924404,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(v)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))):null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spec__19349__auto__","spec__19349__auto__",1996148198,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,spec,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(cljs.core.truth_(v)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.alpha","get-spec","cljs.spec.alpha/get-spec",785931985,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))):null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"re-inst?__19351__auto__","re-inst?__19351__auto__",1958808484,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__19348__auto__","v__19348__auto__",-1712924404,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","unstrument","cljs.spec.test.alpha/unstrument",-512915776,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__19355__auto__","f__19355__auto__",1062020976,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__19348__auto__","v__19348__auto__",-1712924404,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__19348__auto__","v__19348__auto__",-1712924404,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19356__auto__","opts__19356__auto__",509919712,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"old-tc-ns__19357__auto__","old-tc-ns__19357__auto__",1732386363,null),null,(1),null)),(new cljs.core.List(null,"clojure.test.check",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"old-tc-opts-key__19358__auto__","old-tc-opts-key__19358__auto__",1170017432,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword","cljs.core/keyword",-337316415,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"old-tc-ns__19357__auto__","old-tc-ns__19357__auto__",1732386363,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"opts",null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tc-ns__19359__auto__","tc-ns__19359__auto__",1825389292,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19356__auto__","opts__19356__auto__",509919712,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"old-tc-opts__19360__auto__","old-tc-opts__19360__auto__",1940845049,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19356__auto__","opts__19356__auto__",509919712,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"old-tc-opts-key__19358__auto__","old-tc-opts-key__19358__auto__",1170017432,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"old-tc-ns__19357__auto__","old-tc-ns__19357__auto__",1732386363,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19356__auto__","opts__19356__auto__",509919712,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("clojure.spec.test.check","opts","clojure.spec.test.check/opts",-481901908),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"old-tc-opts__19360__auto__","old-tc-opts__19360__auto__",1940845049,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,"clojure.spec.test.check",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19356__auto__","opts__19356__auto__",509919712,null),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__19355__auto__","f__19355__auto__",1062020976,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"failure","failure",720415879),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"No fn to spec",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"no-fn","no-fn",-353517111),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__19347__auto__","s__19347__auto__",-1786679677,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"spec","spec",347520401),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spec__19349__auto__","spec__19349__auto__",1996148198,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spec__19349__auto__","spec__19349__auto__",1996148198,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"tcret__19361__auto__","tcret__19361__auto__",1187667763,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","quick-check","cljs.spec.test.alpha/quick-check",101067110,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__19355__auto__","f__19355__auto__",1062020976,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"spec__19349__auto__","spec__19349__auto__",1996148198,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19356__auto__","opts__19356__auto__",509919712,null),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","make-check-result","cljs.spec.test.alpha/make-check-result",-410209472,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__19347__auto__","s__19347__auto__",-1786679677,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"spec__19349__auto__","spec__19349__auto__",1996148198,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tcret__19361__auto__","tcret__19361__auto__",1187667763,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword","cljs.core/keyword",-337316415,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"tc-ns__19359__auto__","tc-ns__19359__auto__",1825389292,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"ret",null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"failure","failure",720415879),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ex-info","cljs.core/ex-info",-409744395,null),null,(1),null)),(new cljs.core.List(null,"No :args spec",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.alpha","failure","cljs.spec.alpha/failure",188258592),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"no-args-spec","no-args-spec",-1769472786),null,(1),null)))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"sym","sym",-1444860305),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__19347__auto__","s__19347__auto__",-1786679677,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"spec","spec",347520401),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"spec__19349__auto__","spec__19349__auto__",1996148198,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"re-inst?__19351__auto__","re-inst?__19351__auto__",1958808484,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","instrument","cljs.spec.test.alpha/instrument",1447464690,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.test.alpha$macros.check_1.cljs$lang$macro = true);

var ret__5781__auto___19650 = (function (){
/**
 * Runs generative tests for fn f using spec and opts. See
 * 'check' for options and return.
 */
cljs.spec.test.alpha$macros.check_fn = (function cljs$spec$test$alpha$macros$check_fn(var_args){
var G__19394 = arguments.length;
switch (G__19394) {
case 4:
return cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,f,spec){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","check-fn","cljs.spec.test.alpha/check-fn",-1852617833,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,spec,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.check_fn.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,f,spec,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19391__auto__","opts__19391__auto__",1209230793,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","validate-check-opts","cljs.spec.test.alpha/validate-check-opts",524905204,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19391__auto__","opts__19391__auto__",1209230793,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","check-1","cljs.spec.test.alpha/check-1",-532434267,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,spec,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19391__auto__","opts__19391__auto__",1209230793,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.check_fn.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(cljs.spec.test.alpha$macros.check_fn.cljs$lang$macro = true);

cljs.spec.test.alpha$macros.registry_ref = (function cljs$spec$test$alpha$macros$registry_ref(){
return cljs.spec.alpha$macros.registry_ref;
});
cljs.spec.test.alpha$macros.checkable_syms_STAR_ = (function cljs$spec$test$alpha$macros$checkable_syms_STAR_(var_args){
var G__19557 = arguments.length;
switch (G__19557) {
case 0:
return cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha$macros.fn_spec_name_QMARK_,cljs.core.keys(cljs.core.deref(cljs.spec.test.alpha$macros.registry_ref()))),cljs.core.keys(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(opts))], null));
}));

(cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$lang$maxFixedArity = 1);

var ret__5781__auto___19653 = (function (){
/**
 * Given an opts map as per check, returns the set of syms that
 * can be checked.
 */
cljs.spec.test.alpha$macros.checkable_syms = (function cljs$spec$test$alpha$macros$checkable_syms(var_args){
var G__19569 = arguments.length;
switch (G__19569) {
case 2:
return cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","checkable-syms","cljs.spec.test.alpha/checkable-syms",-20825526,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
}));

(cljs.spec.test.alpha$macros.checkable_syms.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,opts){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19566__auto__","opts__19566__auto__",1599428565,null),null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","validate-check-opts","cljs.spec.test.alpha/validate-check-opts",524905204,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__19566__auto__","opts__19566__auto__",1599428565,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha$macros.fn_spec_name_QMARK_,cljs.core.keys(cljs.core.deref(cljs.spec.test.alpha$macros.registry_ref()))),cljs.core.keys(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(opts)))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.checkable_syms.cljs$lang$maxFixedArity = 3);

return null;
})()
;
(cljs.spec.test.alpha$macros.checkable_syms.cljs$lang$macro = true);

var ret__5781__auto___19659 = (function (){
/**
 * Run generative tests for spec conformance on vars named by
 * sym-or-syms, a symbol or collection of symbols. If sym-or-syms
 * is not specified, check all checkable vars. If a symbol identifies a
 * namespace then all symbols in that namespace will be enumerated.
 * 
 * The opts map includes the following optional keys, where stc
 * aliases clojure.spec.test.check:
 * 
 * ::stc/opts  opts to flow through test.check/quick-check
 * :gen        map from spec names to generator overrides
 * 
 * The ::stc/opts include :num-tests in addition to the keys
 * documented by test.check. Generator overrides are passed to
 * spec/gen when generating function args.
 * 
 * Returns a lazy sequence of check result maps with the following
 * keys
 * 
 * :spec       the spec tested
 * :sym        optional symbol naming the var tested
 * :failure    optional test failure
 * ::stc/ret   optional value returned by test.check/quick-check
 * 
 * The value for :failure can be any exception. Exceptions thrown by
 * spec itself will have an ::s/failure value in ex-data:
 * 
 * :check-failed   at least one checked return did not conform
 * :no-args-spec   no :args spec provided
 * :no-fn          no fn provided
 * :no-fspec       no fspec provided
 * :no-gen         unable to generate :args
 * :instrument     invalid args detected by instrument
 */
cljs.spec.test.alpha$macros.check = (function cljs$spec$test$alpha$macros$check(var_args){
var G__19588 = arguments.length;
switch (G__19588) {
case 2:
return cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","check","cljs.spec.test.alpha/check",1428644486,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$0(),null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,293,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,12,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.spec.test.alpha","no-eval","cljs.spec.test.alpha/no-eval",-644853770),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)))));
}));

(cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","check","cljs.spec.test.alpha/check",1428644486,null),null,(1),null)),(new cljs.core.List(null,sym_or_syms,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.check.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,sym_or_syms,opts){
var syms = cljs.spec.test.alpha$macros.sym_or_syms__GT_syms(cljs.spec.test.alpha$macros.form__GT_sym_or_syms(sym_or_syms));
var opts_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("opts");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"clojure.test.check","clojure.test.check",-2057571184,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"clojure.test.check.properties","clojure.test.check.properties",-1352974441,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,opts_sym,null,(1),null)),(new cljs.core.List(null,opts,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","check-1","cljs.spec.test.alpha/check-1",-532434267,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,opts_sym,null,(1),null))], 0))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.spec.test.alpha$macros.checkable_syms_STAR_.cljs$core$IFn$_invoke$arity$1(opts),syms)))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Require clojure.test.check and ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"clojure.test.check.properties before calling check.",null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.spec.test.alpha$macros.check.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.spec.test.alpha$macros.check.cljs$lang$macro = true);

var ret__5781__auto___19662 = cljs.spec.test.alpha$macros.maybe_setup_static_dispatch = (function cljs$spec$test$alpha$macros$maybe_setup_static_dispatch(_AMPERSAND_form,_AMPERSAND_env,f,ret,conform_BANG_,arity){
var arity_accessor = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''));
var argv = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19596_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["arg",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__19596_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(arity));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-some","cljs.core/when-some",1033431610,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ac__19597__auto__","ac__19597__auto__",-381618387,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,arity_accessor,null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,arity_accessor,null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,argv,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","*instrument-enabled*","cljs.spec.test.alpha/*instrument-enabled*",-856303648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","with-instrument-disabled","cljs.spec.test.alpha/with-instrument-disabled",1620047403,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,conform_BANG_,null,(1),null)),(new cljs.core.List(null,argv,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","*instrument-enabled*","cljs.spec.test.alpha/*instrument-enabled*",-856303648,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ac__19597__auto__","ac__19597__auto__",-381618387,null),null,(1),null)),argv))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ac__19597__auto__","ac__19597__auto__",-381618387,null),null,(1),null)),argv))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.spec.test.alpha$macros.maybe_setup_static_dispatch.cljs$lang$macro = true);

var ret__5781__auto___19666 = cljs.spec.test.alpha$macros.setup_static_dispatches = (function cljs$spec$test$alpha$macros$setup_static_dispatches(_AMPERSAND_form,_AMPERSAND_env,f,ret,conform_BANG_,max_arity){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arity){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.spec.test.alpha","maybe-setup-static-dispatch","cljs.spec.test.alpha/maybe-setup-static-dispatch",-1588520439,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,conform_BANG_,null,(1),null)),(new cljs.core.List(null,arity,null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((max_arity + (1)))))));
});
(cljs.spec.test.alpha$macros.setup_static_dispatches.cljs$lang$macro = true);


//# sourceMappingURL=cljs.spec.test.alpha$macros.js.map
