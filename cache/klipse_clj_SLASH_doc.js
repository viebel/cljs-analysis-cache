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
}catch (e19085){var _ = e19085;
return cljs.analyzer.resolve_macro_var(env,sym);
}});
klipse_clj.doc.print_value = (function klipse_clj$doc$print_value(value,_opts){
return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0));
});
klipse_clj.doc.str_butlast = (function klipse_clj$doc$str_butlast(s){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(cljs.core.count(s) - (1)));
});
klipse_clj.doc.format_spec = (function klipse_clj$doc$format_spec(spec,left_margin,ns){
var raw_print = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19110_19334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19111_19335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19112_19336 = true;
var _STAR_print_fn_STAR__temp_val__19113_19337 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19112_19336);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19113_19337);

try{klipse_clj.doc.print_value(cljs.spec.alpha.describe(spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.doc","keyword-ns","klipse-clj.doc/keyword-ns",-1363593865),ns,new cljs.core.Keyword("klipse-clj.doc","spec?","klipse-clj.doc/spec?",-1700417919),true,new cljs.core.Keyword("klipse-clj.doc","as-code?","klipse-clj.doc/as-code?",419968940),true,new cljs.core.Keyword("klipse-clj.doc","term-width-adj","klipse-clj.doc/term-width-adj",464054763),(- left_margin)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19111_19335);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19110_19334);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
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
klipse_clj.doc.print_doc = (function klipse_clj$doc$print_doc(p__19134){
var map__19135 = p__19134;
var map__19135__$1 = (((((!((map__19135 == null))))?(((((map__19135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19135):map__19135);
var m = map__19135__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19135__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

var temp__5733__auto___19378 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto___19378)){
var spec_19379 = temp__5733__auto___19378;
klipse_clj.doc.print_value(spec_19379,cljs.core.PersistentArrayMap.EMPTY);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
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
var seq__19139_19385 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19140_19386 = null;
var count__19141_19387 = (0);
var i__19142_19388 = (0);
while(true){
if((i__19142_19388 < count__19141_19387)){
var f_19389 = chunk__19140_19386.cljs$core$IIndexed$_nth$arity$2(null,i__19142_19388);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19389], 0));


var G__19390 = seq__19139_19385;
var G__19391 = chunk__19140_19386;
var G__19392 = count__19141_19387;
var G__19393 = (i__19142_19388 + (1));
seq__19139_19385 = G__19390;
chunk__19140_19386 = G__19391;
count__19141_19387 = G__19392;
i__19142_19388 = G__19393;
continue;
} else {
var temp__5735__auto___19394 = cljs.core.seq(seq__19139_19385);
if(temp__5735__auto___19394){
var seq__19139_19395__$1 = temp__5735__auto___19394;
if(cljs.core.chunked_seq_QMARK_(seq__19139_19395__$1)){
var c__4556__auto___19396 = cljs.core.chunk_first(seq__19139_19395__$1);
var G__19397 = cljs.core.chunk_rest(seq__19139_19395__$1);
var G__19398 = c__4556__auto___19396;
var G__19399 = cljs.core.count(c__4556__auto___19396);
var G__19400 = (0);
seq__19139_19385 = G__19397;
chunk__19140_19386 = G__19398;
count__19141_19387 = G__19399;
i__19142_19388 = G__19400;
continue;
} else {
var f_19401 = cljs.core.first(seq__19139_19395__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19401], 0));


var G__19402 = cljs.core.next(seq__19139_19395__$1);
var G__19403 = null;
var G__19404 = (0);
var G__19405 = (0);
seq__19139_19385 = G__19402;
chunk__19140_19386 = G__19403;
count__19141_19387 = G__19404;
i__19142_19388 = G__19405;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19406 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19406], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19406)))?cljs.core.second(arglists_19406):arglists_19406)], 0));
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
var seq__19143_19407 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19144_19408 = null;
var count__19145_19409 = (0);
var i__19146_19410 = (0);
while(true){
if((i__19146_19410 < count__19145_19409)){
var vec__19165_19414 = chunk__19144_19408.cljs$core$IIndexed$_nth$arity$2(null,i__19146_19410);
var name_19415 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19165_19414,(0),null);
var map__19168_19416 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19165_19414,(1),null);
var map__19168_19417__$1 = (((((!((map__19168_19416 == null))))?(((((map__19168_19416.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19168_19416.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19168_19416):map__19168_19416);
var doc_19418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168_19417__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168_19417__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19415], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19419], 0));

if(cljs.core.truth_(doc_19418)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19418], 0));
} else {
}


var G__19421 = seq__19143_19407;
var G__19422 = chunk__19144_19408;
var G__19423 = count__19145_19409;
var G__19424 = (i__19146_19410 + (1));
seq__19143_19407 = G__19421;
chunk__19144_19408 = G__19422;
count__19145_19409 = G__19423;
i__19146_19410 = G__19424;
continue;
} else {
var temp__5735__auto___19425 = cljs.core.seq(seq__19143_19407);
if(temp__5735__auto___19425){
var seq__19143_19426__$1 = temp__5735__auto___19425;
if(cljs.core.chunked_seq_QMARK_(seq__19143_19426__$1)){
var c__4556__auto___19427 = cljs.core.chunk_first(seq__19143_19426__$1);
var G__19428 = cljs.core.chunk_rest(seq__19143_19426__$1);
var G__19429 = c__4556__auto___19427;
var G__19430 = cljs.core.count(c__4556__auto___19427);
var G__19431 = (0);
seq__19143_19407 = G__19428;
chunk__19144_19408 = G__19429;
count__19145_19409 = G__19430;
i__19146_19410 = G__19431;
continue;
} else {
var vec__19171_19432 = cljs.core.first(seq__19143_19426__$1);
var name_19433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19171_19432,(0),null);
var map__19174_19434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19171_19432,(1),null);
var map__19174_19435__$1 = (((((!((map__19174_19434 == null))))?(((((map__19174_19434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19174_19434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19174_19434):map__19174_19434);
var doc_19436 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19174_19435__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19174_19435__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19433], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19437], 0));

if(cljs.core.truth_(doc_19436)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19436], 0));
} else {
}


var G__19438 = cljs.core.next(seq__19143_19426__$1);
var G__19439 = null;
var G__19440 = (0);
var G__19441 = (0);
seq__19143_19407 = G__19438;
chunk__19144_19408 = G__19439;
count__19145_19409 = G__19440;
i__19146_19410 = G__19441;
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
var temp__5735__auto__ = (function (){var or__4126__auto__ = spec_lookup("");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return spec_lookup("$macros");
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19186_19442 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19187_19443 = null;
var count__19188_19444 = (0);
var i__19189_19445 = (0);
while(true){
if((i__19189_19445 < count__19188_19444)){
var role_19446 = chunk__19187_19443.cljs$core$IIndexed$_nth$arity$2(null,i__19189_19445);
var temp__5735__auto___19447__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_19446);
if(cljs.core.truth_(temp__5735__auto___19447__$1)){
var spec_19448 = temp__5735__auto___19447__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_19446),":"].join(''),klipse_clj.doc.format_spec(spec_19448,((3) + ((cljs.core.name(role_19446)).length)),n)], 0));
} else {
}


var G__19449 = seq__19186_19442;
var G__19450 = chunk__19187_19443;
var G__19451 = count__19188_19444;
var G__19452 = (i__19189_19445 + (1));
seq__19186_19442 = G__19449;
chunk__19187_19443 = G__19450;
count__19188_19444 = G__19451;
i__19189_19445 = G__19452;
continue;
} else {
var temp__5735__auto___19453__$1 = cljs.core.seq(seq__19186_19442);
if(temp__5735__auto___19453__$1){
var seq__19186_19454__$1 = temp__5735__auto___19453__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19186_19454__$1)){
var c__4556__auto___19455 = cljs.core.chunk_first(seq__19186_19454__$1);
var G__19456 = cljs.core.chunk_rest(seq__19186_19454__$1);
var G__19457 = c__4556__auto___19455;
var G__19458 = cljs.core.count(c__4556__auto___19455);
var G__19459 = (0);
seq__19186_19442 = G__19456;
chunk__19187_19443 = G__19457;
count__19188_19444 = G__19458;
i__19189_19445 = G__19459;
continue;
} else {
var role_19460 = cljs.core.first(seq__19186_19454__$1);
var temp__5735__auto___19461__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_19460);
if(cljs.core.truth_(temp__5735__auto___19461__$2)){
var spec_19462 = temp__5735__auto___19461__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_19460),":"].join(''),klipse_clj.doc.format_spec(spec_19462,((3) + ((cljs.core.name(role_19460)).length)),n)], 0));
} else {
}


var G__19463 = cljs.core.next(seq__19186_19454__$1);
var G__19464 = null;
var G__19465 = (0);
var G__19466 = (0);
seq__19186_19442 = G__19463;
chunk__19187_19443 = G__19464;
count__19188_19444 = G__19465;
i__19189_19445 = G__19466;
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
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1(name_symbol) : klipse_clj.repl_resources.special_doc_map.call(null,name_symbol)),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"special-form","special-form",-1326536374),true], 0));
});
klipse_clj.doc.repl_special_doc = (function klipse_clj$doc$repl_special_doc(name_symbol){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1(name_symbol) : klipse_clj.repl_resources.repl_special_doc_map.call(null,name_symbol)),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725),true], 0));
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

var temp__5735__auto__ = (function (){var env__9660__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__9660__auto____$1 = ((cljs.core.map_QMARK_(env__9660__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__9660__auto__):(((((env__9660__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__9660__auto__)))))?env__9660__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__9660__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__19236 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__19237 = env__9660__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__19237);

try{return klipse_clj.doc.resolve_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(macros_ns,cljs.core.name(sym)));
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__19236);
}})();
if(cljs.core.truth_(temp__5735__auto__)){
var macro_var = temp__5735__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(macro_var,new cljs.core.Keyword(null,"ns","ns",441598760),macros_ns);
} else {
return null;
}
});
klipse_clj.doc.get_aenv = (function klipse_clj$doc$get_aenv(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.empty_env(),new cljs.core.Keyword(null,"ns","ns",441598760),klipse_clj.doc.get_namespace(cljs.core.deref(klipse_clj.repl.current_ns_eval)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)], 0));
});
klipse_clj.doc.get_var = (function klipse_clj$doc$get_var(env,sym){
var _STAR_cljs_warning_handlers_STAR__orig_val__19260 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__19261 = null;
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__19261);

try{var var$ = (function (){var or__4126__auto__ = (function (){var env__9660__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__9660__auto____$1 = ((cljs.core.map_QMARK_(env__9660__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__9660__auto__):(((((env__9660__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__9660__auto__)))))?env__9660__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__9660__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__19282 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__19283 = env__9660__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__19283);

try{return klipse_clj.doc.resolve_var(env,sym);
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__19282);
}})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = (function (){var G__19288 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.deref(klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref(klipse_clj.repl.current_ns_eval),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__19288) : sym.call(null,G__19288));
})();
if(cljs.core.truth_(temp__5735__auto__)){
var macros_ns = temp__5735__auto__;
return klipse_clj.doc.get_macro_var(env,sym,macros_ns);
} else {
return null;
}
}
})();
if(cljs.core.truth_(var$)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__19294 = var$;
var G__19294__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19294,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__19294);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__19294__$1,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__19256_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__19256_SHARP_));
}));
} else {
return G__19294__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,klipse_clj.doc.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__19260);
}});
klipse_clj.doc.doc_STAR_ = (function klipse_clj$doc$doc_STAR_(name){
var temp__5733__auto__ = (function (){var fexpr__19295 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null);
return (fexpr__19295.cljs$core$IFn$_invoke$arity$1 ? fexpr__19295.cljs$core$IFn$_invoke$arity$1(name) : fexpr__19295.call(null,name));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var special_name = temp__5733__auto__;
return (klipse_clj.doc.doc_STAR_.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.doc.doc_STAR_.cljs$core$IFn$_invoke$arity$1(special_name) : klipse_clj.doc.doc_STAR_.call(null,special_name));
} else {
if(cljs.core.truth_((klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.special_doc_map.cljs$core$IFn$_invoke$arity$1(name) : klipse_clj.repl_resources.special_doc_map.call(null,name)))){
return klipse_clj.doc.print_doc(klipse_clj.doc.special_doc(name));
} else {
if(cljs.core.truth_((klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1 ? klipse_clj.repl_resources.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1(name) : klipse_clj.repl_resources.repl_special_doc_map.call(null,name)))){
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
var G__19304 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__19304,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__19307){
var vec__19309 = p__19307;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.doc.get_var(klipse_clj.doc.get_aenv(),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq(sigs)], null)], null);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null))))], 0));
} else {
return G__19304;
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
