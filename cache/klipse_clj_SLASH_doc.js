goog.provide('klipse_clj.doc');
/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
klipse_clj.doc.resolve_var = (function klipse_clj$doc$resolve_var(env,sym){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error("Assert failed: (map? env)"));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
}catch (e19194){var _ = e19194;
return cljs.analyzer.resolve_macro_var(env,sym);
}});
klipse_clj.doc.print_value = (function klipse_clj$doc$print_value(value,_opts){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
});
klipse_clj.doc.str_butlast = (function klipse_clj$doc$str_butlast(s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - (1)));
});
klipse_clj.doc.format_spec = (function klipse_clj$doc$format_spec(spec,left_margin,ns){
var raw_print = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19202_19422 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19203_19423 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19204_19424 = true;
var _STAR_print_fn_STAR__temp_val__19205_19425 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19204_19424);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19205_19425);

try{klipse_clj.doc.print_value(cljs.spec.alpha.describe(spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.doc","keyword-ns","klipse-clj.doc/keyword-ns",-1363593865),ns,new cljs.core.Keyword("klipse-clj.doc","spec?","klipse-clj.doc/spec?",-1700417919),true,new cljs.core.Keyword("klipse-clj.doc","as-code?","klipse-clj.doc/as-code?",419968940),true,new cljs.core.Keyword("klipse-clj.doc","term-width-adj","klipse-clj.doc/term-width-adj",464054763),(- left_margin)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19203_19423);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19202_19422);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return clojure.string.replace(klipse_clj.doc.str_butlast(raw_print),/\n/,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"\n",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(left_margin," ")));
});
klipse_clj.doc.drop_macros_suffix = (function klipse_clj$doc$drop_macros_suffix(ns_name){
if(clojure.string.ends_with_QMARK_(ns_name,"$macros")){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((7),ns_name));
} else {
return ns_name;
}
});
/**
 * Undoes the effect that wrapping a reader conditional around a defn has on a
 *   docstring.
 */
klipse_clj.doc.undo_reader_conditional_whitespace_docstring = (function klipse_clj$doc$undo_reader_conditional_whitespace_docstring(s){
if((s == null)){
return null;
} else {
if(cljs.core.truth_(cljs.core.re_find(/[^\n]*\n\n?      ?\S.*/,s))){
return clojure.string.replace(s,/\n      ?/,"\n  ");
} else {
return s;
}
}
});
klipse_clj.doc.print_doc = (function klipse_clj$doc$print_doc(p__19208){
var map__19209 = p__19208;
var map__19209__$1 = cljs.core.__destructure_map(map__19209);
var m = map__19209__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19209__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

var temp__5802__auto___19434 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5802__auto___19434)){
var spec_19435 = temp__5802__auto___19434;
klipse_clj.doc.print_value(spec_19435,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19215_19440 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19216_19441 = null;
var count__19217_19442 = (0);
var i__19218_19443 = (0);
while(true){
if((i__19218_19443 < count__19217_19442)){
var f_19444 = chunk__19216_19441.cljs$core$IIndexed$_nth$arity$2(null, i__19218_19443);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19444], 0));


var G__19445 = seq__19215_19440;
var G__19446 = chunk__19216_19441;
var G__19447 = count__19217_19442;
var G__19448 = (i__19218_19443 + (1));
seq__19215_19440 = G__19445;
chunk__19216_19441 = G__19446;
count__19217_19442 = G__19447;
i__19218_19443 = G__19448;
continue;
} else {
var temp__5804__auto___19449 = cljs.core.seq(seq__19215_19440);
if(temp__5804__auto___19449){
var seq__19215_19450__$1 = temp__5804__auto___19449;
if(cljs.core.chunked_seq_QMARK_(seq__19215_19450__$1)){
var c__5525__auto___19451 = cljs.core.chunk_first(seq__19215_19450__$1);
var G__19452 = cljs.core.chunk_rest(seq__19215_19450__$1);
var G__19453 = c__5525__auto___19451;
var G__19454 = cljs.core.count(c__5525__auto___19451);
var G__19455 = (0);
seq__19215_19440 = G__19452;
chunk__19216_19441 = G__19453;
count__19217_19442 = G__19454;
i__19218_19443 = G__19455;
continue;
} else {
var f_19456 = cljs.core.first(seq__19215_19450__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19456], 0));


var G__19458 = cljs.core.next(seq__19215_19450__$1);
var G__19459 = null;
var G__19460 = (0);
var G__19461 = (0);
seq__19215_19440 = G__19458;
chunk__19216_19441 = G__19459;
count__19217_19442 = G__19460;
i__19218_19443 = G__19461;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19462 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19462], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19462)))?cljs.core.second(arglists_19462):arglists_19462)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19232_19463 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19233_19464 = null;
var count__19234_19465 = (0);
var i__19235_19466 = (0);
while(true){
if((i__19235_19466 < count__19234_19465)){
var vec__19319_19467 = chunk__19233_19464.cljs$core$IIndexed$_nth$arity$2(null, i__19235_19466);
var name_19468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19319_19467,(0),null);
var map__19322_19469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19319_19467,(1),null);
var map__19322_19470__$1 = cljs.core.__destructure_map(map__19322_19469);
var doc_19471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19322_19470__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19322_19470__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19468], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19472], 0));

if(cljs.core.truth_(doc_19471)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19471], 0));
} else {
}


var G__19481 = seq__19232_19463;
var G__19482 = chunk__19233_19464;
var G__19483 = count__19234_19465;
var G__19484 = (i__19235_19466 + (1));
seq__19232_19463 = G__19481;
chunk__19233_19464 = G__19482;
count__19234_19465 = G__19483;
i__19235_19466 = G__19484;
continue;
} else {
var temp__5804__auto___19485 = cljs.core.seq(seq__19232_19463);
if(temp__5804__auto___19485){
var seq__19232_19486__$1 = temp__5804__auto___19485;
if(cljs.core.chunked_seq_QMARK_(seq__19232_19486__$1)){
var c__5525__auto___19488 = cljs.core.chunk_first(seq__19232_19486__$1);
var G__19489 = cljs.core.chunk_rest(seq__19232_19486__$1);
var G__19490 = c__5525__auto___19488;
var G__19491 = cljs.core.count(c__5525__auto___19488);
var G__19492 = (0);
seq__19232_19463 = G__19489;
chunk__19233_19464 = G__19490;
count__19234_19465 = G__19491;
i__19235_19466 = G__19492;
continue;
} else {
var vec__19335_19493 = cljs.core.first(seq__19232_19486__$1);
var name_19494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19335_19493,(0),null);
var map__19338_19495 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19335_19493,(1),null);
var map__19338_19496__$1 = cljs.core.__destructure_map(map__19338_19495);
var doc_19497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19338_19496__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19338_19496__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19494], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19498], 0));

if(cljs.core.truth_(doc_19497)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19497], 0));
} else {
}


var G__19499 = cljs.core.next(seq__19232_19486__$1);
var G__19500 = null;
var G__19501 = (0);
var G__19502 = (0);
seq__19232_19463 = G__19499;
chunk__19233_19464 = G__19500;
count__19234_19465 = G__19501;
i__19235_19466 = G__19502;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var spec_lookup = (function (ns_suffix){
return cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_suffix)].join(''),cljs.core.name(nm)));
});
var temp__5804__auto__ = (function (){var or__5002__auto__ = spec_lookup("");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return spec_lookup("$macros");
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19343_19503 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19344_19504 = null;
var count__19345_19505 = (0);
var i__19346_19506 = (0);
while(true){
if((i__19346_19506 < count__19345_19505)){
var role_19507 = chunk__19344_19504.cljs$core$IIndexed$_nth$arity$2(null, i__19346_19506);
var temp__5804__auto___19508__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_19507);
if(cljs.core.truth_(temp__5804__auto___19508__$1)){
var spec_19509 = temp__5804__auto___19508__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_19507),":"].join(''),klipse_clj.doc.format_spec(spec_19509,((3) + ((cljs.core.name(role_19507)).length)),n)], 0));
} else {
}


var G__19510 = seq__19343_19503;
var G__19511 = chunk__19344_19504;
var G__19512 = count__19345_19505;
var G__19513 = (i__19346_19506 + (1));
seq__19343_19503 = G__19510;
chunk__19344_19504 = G__19511;
count__19345_19505 = G__19512;
i__19346_19506 = G__19513;
continue;
} else {
var temp__5804__auto___19514__$1 = cljs.core.seq(seq__19343_19503);
if(temp__5804__auto___19514__$1){
var seq__19343_19515__$1 = temp__5804__auto___19514__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19343_19515__$1)){
var c__5525__auto___19516 = cljs.core.chunk_first(seq__19343_19515__$1);
var G__19517 = cljs.core.chunk_rest(seq__19343_19515__$1);
var G__19518 = c__5525__auto___19516;
var G__19519 = cljs.core.count(c__5525__auto___19516);
var G__19520 = (0);
seq__19343_19503 = G__19517;
chunk__19344_19504 = G__19518;
count__19345_19505 = G__19519;
i__19346_19506 = G__19520;
continue;
} else {
var role_19522 = cljs.core.first(seq__19343_19515__$1);
var temp__5804__auto___19523__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_19522);
if(cljs.core.truth_(temp__5804__auto___19523__$2)){
var spec_19524 = temp__5804__auto___19523__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_19522),":"].join(''),klipse_clj.doc.format_spec(spec_19524,((3) + ((cljs.core.name(role_19522)).length)),n)], 0));
} else {
}


var G__19525 = cljs.core.next(seq__19343_19515__$1);
var G__19526 = null;
var G__19527 = (0);
var G__19528 = (0);
seq__19343_19503 = G__19525;
chunk__19344_19504 = G__19526;
count__19345_19505 = G__19527;
i__19346_19506 = G__19528;
continue;
}
} else {
}
}
break;
}

return cljs.core.println();
} else {
return null;
}
} else {
return null;
}
}
});
klipse_clj.doc.special_doc = (function klipse_clj$doc$special_doc(name_symbol){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1(name_symbol) : klipse_clj.repl_resources.special_doc_map.call(null, name_symbol)),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"special-form","special-form",-1326536374),true], 0));
});
klipse_clj.doc.repl_special_doc = (function klipse_clj$doc$repl_special_doc(name_symbol){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1(name_symbol) : klipse_clj.repl_resources.repl_special_doc_map.call(null, name_symbol)),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725),true], 0));
});
/**
 * Gets the AST for a given namespace.
 */
klipse_clj.doc.get_namespace = (function klipse_clj$doc$get_namespace(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.deref(klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
});
klipse_clj.doc.get_macro_var = (function klipse_clj$doc$get_macro_var(env,sym,macros_ns){
if((macros_ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? macros-ns)"));
}

var temp__5804__auto__ = (function (){var env__9379__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__9379__auto____$1 = ((cljs.core.map_QMARK_(env__9379__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__9379__auto__):(((((env__9379__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__9379__auto__)))))?env__9379__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__9379__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__19373 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__19374 = env__9379__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__19374);

try{return klipse_clj.doc.resolve_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(macros_ns,cljs.core.name(sym)));
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__19373);
}})();
if(cljs.core.truth_(temp__5804__auto__)){
var macro_var = temp__5804__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(macro_var,new cljs.core.Keyword(null,"ns","ns",441598760),macros_ns);
} else {
return null;
}
});
klipse_clj.doc.get_aenv = (function klipse_clj$doc$get_aenv(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.empty_env(),new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.doc.get_namespace(cljs.core.deref(klipse_clj.repl.current_ns_eval)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], 0));
});
klipse_clj.doc.get_var = (function klipse_clj$doc$get_var(env,sym){
var _STAR_cljs_warning_handlers_STAR__orig_val__19384 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__19385 = null;
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__19385);

try{var var$ = (function (){var or__5002__auto__ = (function (){var env__9379__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__9379__auto____$1 = ((cljs.core.map_QMARK_(env__9379__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__9379__auto__):(((((env__9379__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__9379__auto__)))))?env__9379__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__9379__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__19387 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__19388 = env__9379__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__19388);

try{return klipse_clj.doc.resolve_var(env,sym);
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__19387);
}})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var temp__5804__auto__ = (function (){var G__19389 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.deref(klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref(klipse_clj.repl.current_ns_eval),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__19389) : sym.call(null, G__19389));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var macros_ns = temp__5804__auto__;
return klipse_clj.doc.get_macro_var(env,sym,macros_ns);
} else {
return null;
}
}
})();
if(cljs.core.truth_(var$)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__19390 = var$;
var G__19390__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19390,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__19390);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19390__$1,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__19379_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__19379_SHARP_));
}));
} else {
return G__19390__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,klipse_clj.doc.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__19384);
}});
klipse_clj.doc.doc_STAR_ = (function klipse_clj$doc$doc_STAR_(name){
var temp__5802__auto__ = (function (){var fexpr__19393 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null);
return (fexpr__19393.cljs$core$IFn$_invoke$arity$1 ? fexpr__19393.cljs$core$IFn$_invoke$arity$1(name) : fexpr__19393.call(null, name));
})();
if(cljs.core.truth_(temp__5802__auto__)){
var special_name = temp__5802__auto__;
return (klipse_clj.doc.doc_STAR_.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.doc.doc_STAR_.cljs$core$IFn$_invoke$arity$1(special_name) : klipse_clj.doc.doc_STAR_.call(null, special_name));
} else {
if(cljs.core.truth_((klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1(name) : klipse_clj.repl_resources.special_doc_map.call(null, name)))){
return klipse_clj.doc.print_doc(klipse_clj.doc.special_doc(name));
} else {
if(cljs.core.truth_((klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1(name) : klipse_clj.repl_resources.repl_special_doc_map.call(null, name)))){
return klipse_clj.doc.print_doc(klipse_clj.doc.repl_special_doc(name));
} else {
if(cljs.core.qualified_keyword_QMARK_(name)){
return klipse_clj.doc.print_doc(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"spec","spec",347520401),name,new cljs.core.Keyword(null,"doc","doc",1913296891),klipse_clj.doc.format_spec(cljs.spec.alpha.get_spec(name),(3),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(name)))], null));
} else {
if(cljs.core.truth_(klipse_clj.doc.get_namespace(name))){
return klipse_clj.doc.print_doc(cljs.core.select_keys(klipse_clj.doc.get_namespace(name),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891)], null)));
} else {
if(cljs.core.truth_(klipse_clj.doc.get_var(klipse_clj.doc.get_aenv(),name))){
return klipse_clj.doc.print_doc((function (){var var$ = klipse_clj.doc.get_var(klipse_clj.doc.get_aenv(),name);
var var$__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(var$,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.second(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.second(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$)))], 0));
var m = cljs.core.select_keys(var$__$1,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"forms","forms",2045992350),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"url","url",276297046)], null));
var m__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),klipse_clj.doc.undo_reader_conditional_whitespace_docstring);
var G__19397 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__19397,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19400){
var vec__19406 = p__19400;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19406,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.doc.get_var(klipse_clj.doc.get_aenv(),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq(sigs)], null)], null);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null))))], 0));
} else {
return G__19397;
}
})());
} else {
return null;
}
}
}
}
}
}
});

//# sourceMappingURL=klipse_clj.doc.js.map
