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
}catch (e8291){var _ = e8291;
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
var _STAR_print_newline_STAR__orig_val__8292_8374 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8293_8375 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8294_8376 = true;
var _STAR_print_fn_STAR__temp_val__8295_8377 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8294_8376);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8295_8377);

try{klipse_clj.doc.print_value(cljs.spec.alpha.describe(spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.doc","keyword-ns","klipse-clj.doc/keyword-ns",-1363593865),ns,new cljs.core.Keyword("klipse-clj.doc","spec?","klipse-clj.doc/spec?",-1700417919),true,new cljs.core.Keyword("klipse-clj.doc","as-code?","klipse-clj.doc/as-code?",419968940),true,new cljs.core.Keyword("klipse-clj.doc","term-width-adj","klipse-clj.doc/term-width-adj",464054763),(- left_margin)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8293_8375);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8292_8374);
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
klipse_clj.doc.print_doc = (function klipse_clj$doc$print_doc(p__8296){
var map__8297 = p__8296;
var map__8297__$1 = (((((!((map__8297 == null))))?(((((map__8297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8297):map__8297);
var m = map__8297__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8297__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

var temp__5733__auto___8378 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto___8378)){
var spec_8379 = temp__5733__auto___8378;
klipse_clj.doc.print_value(spec_8379,cljs.core.PersistentArrayMap.EMPTY);
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
var seq__8299_8380 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8300_8381 = null;
var count__8301_8382 = (0);
var i__8302_8383 = (0);
while(true){
if((i__8302_8383 < count__8301_8382)){
var f_8384 = chunk__8300_8381.cljs$core$IIndexed$_nth$arity$2(null,i__8302_8383);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_8384], 0));


var G__8385 = seq__8299_8380;
var G__8386 = chunk__8300_8381;
var G__8387 = count__8301_8382;
var G__8388 = (i__8302_8383 + (1));
seq__8299_8380 = G__8385;
chunk__8300_8381 = G__8386;
count__8301_8382 = G__8387;
i__8302_8383 = G__8388;
continue;
} else {
var temp__5735__auto___8389 = cljs.core.seq(seq__8299_8380);
if(temp__5735__auto___8389){
var seq__8299_8390__$1 = temp__5735__auto___8389;
if(cljs.core.chunked_seq_QMARK_(seq__8299_8390__$1)){
var c__4556__auto___8391 = cljs.core.chunk_first(seq__8299_8390__$1);
var G__8392 = cljs.core.chunk_rest(seq__8299_8390__$1);
var G__8393 = c__4556__auto___8391;
var G__8394 = cljs.core.count(c__4556__auto___8391);
var G__8395 = (0);
seq__8299_8380 = G__8392;
chunk__8300_8381 = G__8393;
count__8301_8382 = G__8394;
i__8302_8383 = G__8395;
continue;
} else {
var f_8396 = cljs.core.first(seq__8299_8390__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_8396], 0));


var G__8397 = cljs.core.next(seq__8299_8390__$1);
var G__8398 = null;
var G__8399 = (0);
var G__8400 = (0);
seq__8299_8380 = G__8397;
chunk__8300_8381 = G__8398;
count__8301_8382 = G__8399;
i__8302_8383 = G__8400;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8404 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_8404], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_8404)))?cljs.core.second(arglists_8404):arglists_8404)], 0));
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
var seq__8304_8405 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8305_8406 = null;
var count__8306_8407 = (0);
var i__8307_8408 = (0);
while(true){
if((i__8307_8408 < count__8306_8407)){
var vec__8319_8409 = chunk__8305_8406.cljs$core$IIndexed$_nth$arity$2(null,i__8307_8408);
var name_8410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8319_8409,(0),null);
var map__8322_8411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8319_8409,(1),null);
var map__8322_8412__$1 = (((((!((map__8322_8411 == null))))?(((((map__8322_8411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8322_8411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8322_8411):map__8322_8411);
var doc_8413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8322_8412__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8414 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8322_8412__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_8410], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_8414], 0));

if(cljs.core.truth_(doc_8413)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_8413], 0));
} else {
}


var G__8416 = seq__8304_8405;
var G__8417 = chunk__8305_8406;
var G__8418 = count__8306_8407;
var G__8419 = (i__8307_8408 + (1));
seq__8304_8405 = G__8416;
chunk__8305_8406 = G__8417;
count__8306_8407 = G__8418;
i__8307_8408 = G__8419;
continue;
} else {
var temp__5735__auto___8420 = cljs.core.seq(seq__8304_8405);
if(temp__5735__auto___8420){
var seq__8304_8421__$1 = temp__5735__auto___8420;
if(cljs.core.chunked_seq_QMARK_(seq__8304_8421__$1)){
var c__4556__auto___8422 = cljs.core.chunk_first(seq__8304_8421__$1);
var G__8423 = cljs.core.chunk_rest(seq__8304_8421__$1);
var G__8424 = c__4556__auto___8422;
var G__8425 = cljs.core.count(c__4556__auto___8422);
var G__8426 = (0);
seq__8304_8405 = G__8423;
chunk__8305_8406 = G__8424;
count__8306_8407 = G__8425;
i__8307_8408 = G__8426;
continue;
} else {
var vec__8324_8427 = cljs.core.first(seq__8304_8421__$1);
var name_8428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8324_8427,(0),null);
var map__8327_8429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8324_8427,(1),null);
var map__8327_8430__$1 = (((((!((map__8327_8429 == null))))?(((((map__8327_8429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8327_8429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8327_8429):map__8327_8429);
var doc_8431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8327_8430__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_8432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8327_8430__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_8428], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_8432], 0));

if(cljs.core.truth_(doc_8431)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_8431], 0));
} else {
}


var G__8434 = cljs.core.next(seq__8304_8421__$1);
var G__8435 = null;
var G__8436 = (0);
var G__8437 = (0);
seq__8304_8405 = G__8434;
chunk__8305_8406 = G__8435;
count__8306_8407 = G__8436;
i__8307_8408 = G__8437;
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

var seq__8329_8438 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__8330_8439 = null;
var count__8331_8440 = (0);
var i__8332_8441 = (0);
while(true){
if((i__8332_8441 < count__8331_8440)){
var role_8442 = chunk__8330_8439.cljs$core$IIndexed$_nth$arity$2(null,i__8332_8441);
var temp__5735__auto___8443__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_8442);
if(cljs.core.truth_(temp__5735__auto___8443__$1)){
var spec_8444 = temp__5735__auto___8443__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_8442),":"].join(''),klipse_clj.doc.format_spec(spec_8444,((3) + ((cljs.core.name(role_8442)).length)),n)], 0));
} else {
}


var G__8445 = seq__8329_8438;
var G__8446 = chunk__8330_8439;
var G__8447 = count__8331_8440;
var G__8448 = (i__8332_8441 + (1));
seq__8329_8438 = G__8445;
chunk__8330_8439 = G__8446;
count__8331_8440 = G__8447;
i__8332_8441 = G__8448;
continue;
} else {
var temp__5735__auto___8450__$1 = cljs.core.seq(seq__8329_8438);
if(temp__5735__auto___8450__$1){
var seq__8329_8452__$1 = temp__5735__auto___8450__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8329_8452__$1)){
var c__4556__auto___8453 = cljs.core.chunk_first(seq__8329_8452__$1);
var G__8454 = cljs.core.chunk_rest(seq__8329_8452__$1);
var G__8455 = c__4556__auto___8453;
var G__8456 = cljs.core.count(c__4556__auto___8453);
var G__8457 = (0);
seq__8329_8438 = G__8454;
chunk__8330_8439 = G__8455;
count__8331_8440 = G__8456;
i__8332_8441 = G__8457;
continue;
} else {
var role_8458 = cljs.core.first(seq__8329_8452__$1);
var temp__5735__auto___8459__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_8458);
if(cljs.core.truth_(temp__5735__auto___8459__$2)){
var spec_8460 = temp__5735__auto___8459__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_8458),":"].join(''),klipse_clj.doc.format_spec(spec_8460,((3) + ((cljs.core.name(role_8458)).length)),n)], 0));
} else {
}


var G__8461 = cljs.core.next(seq__8329_8452__$1);
var G__8462 = null;
var G__8463 = (0);
var G__8464 = (0);
seq__8329_8438 = G__8461;
chunk__8330_8439 = G__8462;
count__8331_8440 = G__8463;
i__8332_8441 = G__8464;
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

var temp__5735__auto__ = (function (){var env__7546__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__7546__auto____$1 = ((cljs.core.map_QMARK_(env__7546__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__7546__auto__):(((((env__7546__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__7546__auto__)))))?env__7546__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__7546__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__8341 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__8342 = env__7546__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__8342);

try{return klipse_clj.doc.resolve_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(macros_ns,cljs.core.name(sym)));
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__8341);
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
var _STAR_cljs_warning_handlers_STAR__orig_val__8346 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__8347 = null;
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__8347);

try{var var$ = (function (){var or__4126__auto__ = (function (){var env__7546__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__7546__auto____$1 = ((cljs.core.map_QMARK_(env__7546__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__7546__auto__):(((((env__7546__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__7546__auto__)))))?env__7546__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__7546__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__8352 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__8353 = env__7546__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__8353);

try{return klipse_clj.doc.resolve_var(env,sym);
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__8352);
}})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = (function (){var G__8355 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.deref(klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref(klipse_clj.repl.current_ns_eval),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__8355) : sym.call(null,G__8355));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__8356 = var$;
var G__8356__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8356,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__8356);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__8356__$1,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__8345_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__8345_SHARP_));
}));
} else {
return G__8356__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,klipse_clj.doc.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__8346);
}});
klipse_clj.doc.doc_STAR_ = (function klipse_clj$doc$doc_STAR_(name){
var temp__5733__auto__ = (function (){var fexpr__8358 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null);
return (fexpr__8358.cljs$core$IFn$_invoke$arity$1 ? fexpr__8358.cljs$core$IFn$_invoke$arity$1(name) : fexpr__8358.call(null,name));
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
var G__8364 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__8364,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8365){
var vec__8366 = p__8365;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8366,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8366,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.doc.get_var(klipse_clj.doc.get_aenv(),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq(sigs)], null)], null);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null))))], 0));
} else {
return G__8364;
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
