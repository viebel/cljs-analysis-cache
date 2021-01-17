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
}catch (e18612){var _ = e18612;
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
var _STAR_print_newline_STAR__orig_val__18656_18807 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18657_18808 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18658_18809 = true;
var _STAR_print_fn_STAR__temp_val__18659_18810 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18658_18809);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18659_18810);

try{klipse_clj.doc.print_value(cljs.spec.alpha.describe(spec),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("klipse-clj.doc","keyword-ns","klipse-clj.doc/keyword-ns",-1363593865),ns,new cljs.core.Keyword("klipse-clj.doc","spec?","klipse-clj.doc/spec?",-1700417919),true,new cljs.core.Keyword("klipse-clj.doc","as-code?","klipse-clj.doc/as-code?",419968940),true,new cljs.core.Keyword("klipse-clj.doc","term-width-adj","klipse-clj.doc/term-width-adj",464054763),(- left_margin)], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18657_18808);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18656_18807);
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
klipse_clj.doc.print_doc = (function klipse_clj$doc$print_doc(p__18669){
var map__18670 = p__18669;
var map__18670__$1 = (((((!((map__18670 == null))))?(((((map__18670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18670):map__18670);
var m = map__18670__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18670__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18670__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

var temp__5733__auto___18813 = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5733__auto___18813)){
var spec_18814 = temp__5733__auto___18813;
klipse_clj.doc.print_value(spec_18814,cljs.core.PersistentArrayMap.EMPTY);
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
var seq__18672_18816 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18673_18817 = null;
var count__18674_18818 = (0);
var i__18675_18819 = (0);
while(true){
if((i__18675_18819 < count__18674_18818)){
var f_18824 = chunk__18673_18817.cljs$core$IIndexed$_nth$arity$2(null,i__18675_18819);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18824], 0));


var G__18825 = seq__18672_18816;
var G__18826 = chunk__18673_18817;
var G__18827 = count__18674_18818;
var G__18828 = (i__18675_18819 + (1));
seq__18672_18816 = G__18825;
chunk__18673_18817 = G__18826;
count__18674_18818 = G__18827;
i__18675_18819 = G__18828;
continue;
} else {
var temp__5735__auto___18829 = cljs.core.seq(seq__18672_18816);
if(temp__5735__auto___18829){
var seq__18672_18830__$1 = temp__5735__auto___18829;
if(cljs.core.chunked_seq_QMARK_(seq__18672_18830__$1)){
var c__4556__auto___18832 = cljs.core.chunk_first(seq__18672_18830__$1);
var G__18833 = cljs.core.chunk_rest(seq__18672_18830__$1);
var G__18834 = c__4556__auto___18832;
var G__18835 = cljs.core.count(c__4556__auto___18832);
var G__18836 = (0);
seq__18672_18816 = G__18833;
chunk__18673_18817 = G__18834;
count__18674_18818 = G__18835;
i__18675_18819 = G__18836;
continue;
} else {
var f_18838 = cljs.core.first(seq__18672_18830__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_18838], 0));


var G__18839 = cljs.core.next(seq__18672_18830__$1);
var G__18840 = null;
var G__18841 = (0);
var G__18842 = (0);
seq__18672_18816 = G__18839;
chunk__18673_18817 = G__18840;
count__18674_18818 = G__18841;
i__18675_18819 = G__18842;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18843 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_18843], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_18843)))?cljs.core.second(arglists_18843):arglists_18843)], 0));
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
var seq__18688_18848 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18689_18849 = null;
var count__18690_18850 = (0);
var i__18691_18851 = (0);
while(true){
if((i__18691_18851 < count__18690_18850)){
var vec__18721_18852 = chunk__18689_18849.cljs$core$IIndexed$_nth$arity$2(null,i__18691_18851);
var name_18853 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18721_18852,(0),null);
var map__18724_18854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18721_18852,(1),null);
var map__18724_18855__$1 = (((((!((map__18724_18854 == null))))?(((((map__18724_18854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18724_18854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18724_18854):map__18724_18854);
var doc_18856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18724_18855__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18724_18855__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18853], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18857], 0));

if(cljs.core.truth_(doc_18856)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18856], 0));
} else {
}


var G__18860 = seq__18688_18848;
var G__18861 = chunk__18689_18849;
var G__18862 = count__18690_18850;
var G__18863 = (i__18691_18851 + (1));
seq__18688_18848 = G__18860;
chunk__18689_18849 = G__18861;
count__18690_18850 = G__18862;
i__18691_18851 = G__18863;
continue;
} else {
var temp__5735__auto___18864 = cljs.core.seq(seq__18688_18848);
if(temp__5735__auto___18864){
var seq__18688_18865__$1 = temp__5735__auto___18864;
if(cljs.core.chunked_seq_QMARK_(seq__18688_18865__$1)){
var c__4556__auto___18866 = cljs.core.chunk_first(seq__18688_18865__$1);
var G__18867 = cljs.core.chunk_rest(seq__18688_18865__$1);
var G__18868 = c__4556__auto___18866;
var G__18869 = cljs.core.count(c__4556__auto___18866);
var G__18870 = (0);
seq__18688_18848 = G__18867;
chunk__18689_18849 = G__18868;
count__18690_18850 = G__18869;
i__18691_18851 = G__18870;
continue;
} else {
var vec__18737_18871 = cljs.core.first(seq__18688_18865__$1);
var name_18872 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18737_18871,(0),null);
var map__18740_18873 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18737_18871,(1),null);
var map__18740_18874__$1 = (((((!((map__18740_18873 == null))))?(((((map__18740_18873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18740_18873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18740_18873):map__18740_18873);
var doc_18875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18740_18874__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18740_18874__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_18872], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_18876], 0));

if(cljs.core.truth_(doc_18875)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_18875], 0));
} else {
}


var G__18878 = cljs.core.next(seq__18688_18865__$1);
var G__18879 = null;
var G__18880 = (0);
var G__18881 = (0);
seq__18688_18848 = G__18878;
chunk__18689_18849 = G__18879;
count__18690_18850 = G__18880;
i__18691_18851 = G__18881;
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

var seq__18743_18883 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18744_18884 = null;
var count__18745_18885 = (0);
var i__18746_18886 = (0);
while(true){
if((i__18746_18886 < count__18745_18885)){
var role_18890 = chunk__18744_18884.cljs$core$IIndexed$_nth$arity$2(null,i__18746_18886);
var temp__5735__auto___18891__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_18890);
if(cljs.core.truth_(temp__5735__auto___18891__$1)){
var spec_18892 = temp__5735__auto___18891__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_18890),":"].join(''),klipse_clj.doc.format_spec(spec_18892,((3) + ((cljs.core.name(role_18890)).length)),n)], 0));
} else {
}


var G__18893 = seq__18743_18883;
var G__18894 = chunk__18744_18884;
var G__18895 = count__18745_18885;
var G__18896 = (i__18746_18886 + (1));
seq__18743_18883 = G__18893;
chunk__18744_18884 = G__18894;
count__18745_18885 = G__18895;
i__18746_18886 = G__18896;
continue;
} else {
var temp__5735__auto___18898__$1 = cljs.core.seq(seq__18743_18883);
if(temp__5735__auto___18898__$1){
var seq__18743_18899__$1 = temp__5735__auto___18898__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18743_18899__$1)){
var c__4556__auto___18900 = cljs.core.chunk_first(seq__18743_18899__$1);
var G__18901 = cljs.core.chunk_rest(seq__18743_18899__$1);
var G__18902 = c__4556__auto___18900;
var G__18903 = cljs.core.count(c__4556__auto___18900);
var G__18904 = (0);
seq__18743_18883 = G__18901;
chunk__18744_18884 = G__18902;
count__18745_18885 = G__18903;
i__18746_18886 = G__18904;
continue;
} else {
var role_18905 = cljs.core.first(seq__18743_18899__$1);
var temp__5735__auto___18906__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role_18905);
if(cljs.core.truth_(temp__5735__auto___18906__$2)){
var spec_18907 = temp__5735__auto___18906__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role_18905),":"].join(''),klipse_clj.doc.format_spec(spec_18907,((3) + ((cljs.core.name(role_18905)).length)),n)], 0));
} else {
}


var G__18908 = cljs.core.next(seq__18743_18899__$1);
var G__18909 = null;
var G__18910 = (0);
var G__18911 = (0);
seq__18743_18883 = G__18908;
chunk__18744_18884 = G__18909;
count__18745_18885 = G__18910;
i__18746_18886 = G__18911;
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

var temp__5735__auto__ = (function (){var env__10022__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__10022__auto____$1 = ((cljs.core.map_QMARK_(env__10022__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__10022__auto__):(((((env__10022__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__10022__auto__)))))?env__10022__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__10022__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__18763 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__18764 = env__10022__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__18764);

try{return klipse_clj.doc.resolve_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(macros_ns,cljs.core.name(sym)));
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__18763);
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
var _STAR_cljs_warning_handlers_STAR__orig_val__18768 = cljs.analyzer._STAR_cljs_warning_handlers_STAR_;
var _STAR_cljs_warning_handlers_STAR__temp_val__18769 = null;
(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__temp_val__18769);

try{var var$ = (function (){var or__4126__auto__ = (function (){var env__10022__auto__ = cljs.core.deref(klipse_clj.repl.st);
var env__10022__auto____$1 = ((cljs.core.map_QMARK_(env__10022__auto__))?cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__10022__auto__):(((((env__10022__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_(cljs.core.deref(env__10022__auto__)))))?env__10022__auto__:(function(){throw (new Error(["Compiler environment must be a map or atom containing a map, not ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(env__10022__auto__))].join('')))})()
));
var _STAR_compiler_STAR__orig_val__18775 = cljs.env._STAR_compiler_STAR_;
var _STAR_compiler_STAR__temp_val__18776 = env__10022__auto____$1;
(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__temp_val__18776);

try{return klipse_clj.doc.resolve_var(env,sym);
}finally {(cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR__orig_val__18775);
}})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var temp__5735__auto__ = (function (){var G__18778 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.core.deref(klipse_clj.repl.st)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.core.deref(klipse_clj.repl.current_ns_eval),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null));
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__18778) : sym.call(null,G__18778));
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
return cljs.core.update.cljs$core$IFn$_invoke$arity$3((function (){var G__18790 = var$;
var G__18790__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18790,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))):G__18790);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__18790__$1,new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__18767_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p1__18767_SHARP_));
}));
} else {
return G__18790__$1;
}
})(),new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.symbol,klipse_clj.doc.drop_macros_suffix,cljs.core.str));
} else {
return null;
}
}finally {(cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = _STAR_cljs_warning_handlers_STAR__orig_val__18768);
}});
klipse_clj.doc.doc_STAR_ = (function klipse_clj$doc$doc_STAR_(name){
var temp__5733__auto__ = (function (){var fexpr__18794 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"try","try",-1273693247,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"try","try",-1273693247,null)], null);
return (fexpr__18794.cljs$core$IFn$_invoke$arity$1 ? fexpr__18794.cljs$core$IFn$_invoke$arity$1(name) : fexpr__18794.call(null,name));
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
var G__18795 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null),cljs.core.name);
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__18795,new cljs.core.Keyword(null,"protocol","protocol",652470118),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"methods","methods",453930866),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18799){
var vec__18800 = p__18799;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18800,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18800,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fname,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(klipse_clj.doc.get_var(klipse_clj.doc.get_aenv(),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.seq(sigs)], null)], null);
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(var$__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null))))], 0));
} else {
return G__18795;
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
