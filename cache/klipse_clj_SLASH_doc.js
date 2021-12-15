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
}catch (e19876){var _ = e19876;
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
var _STAR_print_newline_STAR__orig_val__19888_20176 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19889_20177 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19890_20178 = true;
var _STAR_print_fn_STAR__temp_val__19891_20179 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19890_20178);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19891_20179);

try{klipse_clj.doc.print_value(cljs.spec.alpha.describe(spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.doc","keyword-ns","klipse-clj.doc/keyword-ns",-1363593865),ns,new cljs.core.Keyword("klipse-clj.doc","spec?","klipse-clj.doc/spec?",-1700417919),true,new cljs.core.Keyword("klipse-clj.doc","as-code?","klipse-clj.doc/as-code?",419968940),true,new cljs.core.Keyword("klipse-clj.doc","term-width-adj","klipse-clj.doc/term-width-adj",464054763),(- left_margin)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19889_20177);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19888_20176);
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
klipse_clj.doc.print_doc = (function klipse_clj$doc$print_doc(p__19925){
var map__19926 = p__19925;
var map__19926__$1 = (((((!((map__19926 == null))))?(((((map__19926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19926):map__19926);
var m = map__19926__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19926__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19926__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

var temp__5733__auto___20188 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto___20188)){
var spec_20189 = temp__5733__auto___20188;
klipse_clj.doc.print_value(spec_20189,cljs.core.PersistentArrayMap.EMPTY);
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
var seq__19932_20190 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19933_20191 = null;
var count__19934_20192 = (0);
var i__19935_20193 = (0);
while(true){
if((i__19935_20193 < count__19934_20192)){
var f_20194 = chunk__19933_20191.cljs$core$IIndexed$_nth$arity$2(null,i__19935_20193);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20194], 0));


var G__20195 = seq__19932_20190;
var G__20196 = chunk__19933_20191;
var G__20197 = count__19934_20192;
var G__20198 = (i__19935_20193 + (1));
seq__19932_20190 = G__20195;
chunk__19933_20191 = G__20196;
count__19934_20192 = G__20197;
i__19935_20193 = G__20198;
continue;
} else {
var temp__5735__auto___20201 = cljs.core.seq(seq__19932_20190);
if(temp__5735__auto___20201){
var seq__19932_20202__$1 = temp__5735__auto___20201;
if(cljs.core.chunked_seq_QMARK_(seq__19932_20202__$1)){
var c__4556__auto___20203 = cljs.core.chunk_first(seq__19932_20202__$1);
var G__20204 = cljs.core.chunk_rest(seq__19932_20202__$1);
var G__20205 = c__4556__auto___20203;
var G__20206 = cljs.core.count(c__4556__auto___20203);
var G__20207 = (0);
seq__19932_20190 = G__20204;
chunk__19933_20191 = G__20205;
count__19934_20192 = G__20206;
i__19935_20193 = G__20207;
continue;
} else {
var f_20212 = cljs.core.first(seq__19932_20202__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20212], 0));


var G__20218 = cljs.core.next(seq__19932_20202__$1);
var G__20219 = null;
var G__20220 = (0);
var G__20221 = (0);
seq__19932_20190 = G__20218;
chunk__19933_20191 = G__20219;
count__19934_20192 = G__20220;
i__19935_20193 = G__20221;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20223 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20223], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20223)))?cljs.core.second(arglists_20223):arglists_20223)], 0));
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
var seq__19944_20227 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19945_20228 = null;
var count__19946_20229 = (0);
var i__19947_20230 = (0);
while(true){
if((i__19947_20230 < count__19946_20229)){
var vec__19978_20231 = chunk__19945_20228.cljs$core$IIndexed$_nth$arity$2(null,i__19947_20230);
var name_20232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19978_20231,(0),null);
var map__19981_20233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19978_20231,(1),null);
var map__19981_20234__$1 = (((((!((map__19981_20233 == null))))?(((((map__19981_20233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19981_20233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19981_20233):map__19981_20233);
var doc_20235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19981_20234__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20236 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19981_20234__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20232], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20236], 0));

if(cljs.core.truth_(doc_20235)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20235], 0));
} else {
}


var G__20244 = seq__19944_20227;
var G__20245 = chunk__19945_20228;
var G__20246 = count__19946_20229;
var G__20247 = (i__19947_20230 + (1));
seq__19944_20227 = G__20244;
chunk__19945_20228 = G__20245;
count__19946_20229 = G__20246;
i__19947_20230 = G__20247;
continue;
} else {
var temp__5735__auto___20248 = cljs.core.seq(seq__19944_20227);
if(temp__5735__auto___20248){
var seq__19944_20249__$1 = temp__5735__auto___20248;
if(cljs.core.chunked_seq_QMARK_(seq__19944_20249__$1)){
var c__4556__auto___20250 = cljs.core.chunk_first(seq__19944_20249__$1);
var G__20251 = cljs.core.chunk_rest(seq__19944_20249__$1);
var G__20252 = c__4556__auto___20250;
var G__20253 = cljs.core.count(c__4556__auto___20250);
var G__20254 = (0);
seq__19944_20227 = G__20251;
chunk__19945_20228 = G__20252;
count__19946_20229 = G__20253;
i__19947_20230 = G__20254;
continue;
} else {
var vec__19987_20255 = cljs.core.first(seq__19944_20249__$1);
var name_20256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987_20255,(0),null);
var map__19990_20257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19987_20255,(1),null);
var map__19990_20258__$1 = (((((!((map__19990_20257 == null))))?(((((map__19990_20257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19990_20257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19990_20257):map__19990_20257);
var doc_20259 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19990_20258__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20260 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19990_20258__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20256], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20260], 0));

if(cljs.core.truth_(doc_20259)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20259], 0));
} else {
}


var G__20261 = cljs.core.next(seq__19944_20249__$1);
var G__20262 = null;
var G__20263 = (0);
var G__20264 = (0);
seq__19944_20227 = G__20261;
chunk__19945_20228 = G__20262;
count__19946_20229 = G__20263;
i__19947_20230 = G__20264;
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

var seq__20011_20265 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20012_20266 = null;
var count__20013_20267 = (0);
var i__20014_20268 = (0);
while(true){
if((i__20014_20268 < count__20013_20267)){
var role_20269 = chunk__20012_20266.cljs$core$IIndexed$_nth$arity$2(null,i__20014_20268);
var temp__5735__auto___20274__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_20269);
if(cljs.core.truth_(temp__5735__auto___20274__$1)){
var spec_20275 = temp__5735__auto___20274__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_20269),":"].join(''),klipse_clj.doc.format_spec(spec_20275,((3) + ((cljs.core.name(role_20269)).length)),n)], 0));
} else {
}


var G__20276 = seq__20011_20265;
var G__20277 = chunk__20012_20266;
var G__20278 = count__20013_20267;
var G__20279 = (i__20014_20268 + (1));
seq__20011_20265 = G__20276;
chunk__20012_20266 = G__20277;
count__20013_20267 = G__20278;
i__20014_20268 = G__20279;
continue;
} else {
var temp__5735__auto___20280__$1 = cljs.core.seq(seq__20011_20265);
if(temp__5735__auto___20280__$1){
var seq__20011_20281__$1 = temp__5735__auto___20280__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20011_20281__$1)){
var c__4556__auto___20283 = cljs.core.chunk_first(seq__20011_20281__$1);
var G__20289 = cljs.core.chunk_rest(seq__20011_20281__$1);
var G__20290 = c__4556__auto___20283;
var G__20291 = cljs.core.count(c__4556__auto___20283);
var G__20292 = (0);
seq__20011_20265 = G__20289;
chunk__20012_20266 = G__20290;
count__20013_20267 = G__20291;
i__20014_20268 = G__20292;
continue;
} else {
var role_20294 = cljs.core.first(seq__20011_20281__$1);
var temp__5735__auto___20295__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_20294);
if(cljs.core.truth_(temp__5735__auto___20295__$2)){
var spec_20296 = temp__5735__auto___20295__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_20294),":"].join(''),klipse_clj.doc.format_spec(spec_20296,((3) + ((cljs.core.name(role_20294)).length)),n)], 0));
} else {
}


var G__20301 = cljs.core.next(seq__20011_20281__$1);
var G__20302 = null;
var G__20303 = (0);
var G__20304 = (0);
seq__20011_20265 = G__20301;
chunk__20012_20266 = G__20302;
count__20013_20267 = G__20303;
i__20014_20268 = G__20304;
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

var temp__5735__auto__ = (function (){var env__9526__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__9526__auto____$1 = ((cljs.core.map_QMARK_(env__9526__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__9526__auto__):(((((env__9526__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__9526__auto__)))))?env__9526__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__9526__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__20085 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__20086 = env__9526__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__20086);

try{return klipse_clj.doc.resolve_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(macros_ns,cljs.core.name(sym)));
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__20085);
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
var _STAR_cljs_warning_handlers_STAR__orig_val__20116 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__20117 = null;
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__20117);

try{var var$ = (function (){var or__4126__auto__ = (function (){var env__9526__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__9526__auto____$1 = ((cljs.core.map_QMARK_(env__9526__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__9526__auto__):(((((env__9526__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__9526__auto__)))))?env__9526__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__9526__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__20132 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__20133 = env__9526__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__20133);

try{return klipse_clj.doc.resolve_var(env,sym);
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__20132);
}})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = (function (){var G__20138 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.deref(klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref(klipse_clj.repl.current_ns_eval),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__20138) : sym.call(null,G__20138));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__20146 = var$;
var G__20146__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20146,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__20146);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__20146__$1,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__20104_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__20104_SHARP_));
}));
} else {
return G__20146__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,klipse_clj.doc.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__20116);
}});
klipse_clj.doc.doc_STAR_ = (function klipse_clj$doc$doc_STAR_(name){
var temp__5733__auto__ = (function (){var fexpr__20159 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null);
return (fexpr__20159.cljs$core$IFn$_invoke$arity$1 ? fexpr__20159.cljs$core$IFn$_invoke$arity$1(name) : fexpr__20159.call(null,name));
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
var G__20170 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__20170,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20172){
var vec__20173 = p__20172;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20173,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.doc.get_var(klipse_clj.doc.get_aenv(),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq(sigs)], null)], null);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null))))], 0));
} else {
return G__20170;
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
