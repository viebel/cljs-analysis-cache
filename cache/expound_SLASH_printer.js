// Compiled by ClojureScript 1.10.339
goog.provide("expound.printer");
expound.printer.indent_level = (2);
expound.printer.max_spec_str_width = (100);
expound.printer.anon_fn_str = "<anonymous function>";
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",(-2019438263)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"op","op",(-1882987955)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null))]),new cljs.core.Keyword(null,"specs","specs",(1426570741)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",(2101263265),null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"specs","specs",(1426570741))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"or","or",(1876275696),null),null,new cljs.core.Symbol(null,"and","and",(668631710),null),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"or","or",(1876275696),null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"and","and",(668631710),null))]),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",(2101263265),null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",(-831679639),null),new cljs.core.Keyword(null,"kw","kw",(1158308175)),new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",(-308091478),null),new cljs.core.Keyword(null,"conj","conj",(1527141827)),new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",(-2019438263))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kw","kw",(1158308175)),new cljs.core.Keyword(null,"conj","conj",(1527141827))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","qualified-keyword?","cljs.core/qualified-keyword?",(-308091478),null),new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",(-2019438263))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.qualified_keyword_QMARK_,new cljs.core.Keyword("expound.spec","spec-conjunction","expound.spec/spec-conjunction",(-2019438263))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","key-spec","expound.spec/key-spec",(169182720)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"keys","keys",(1068423698)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",(1109346032),null))]),new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",(-1238084288),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"qualifier","qualifier",(125841738)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",(1074571008)),null,new cljs.core.Keyword(null,"req","req",(-326448303)),null,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)),null,new cljs.core.Keyword(null,"opt","opt",(-794706369)),null], null), null),new cljs.core.Keyword(null,"specs","specs",(1426570741)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",(1019430407),null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keys","keys",(1068423698)),new cljs.core.Keyword(null,"clauses","clauses",(1454841241))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",(-90227326),null),null,new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",(1109346032),null),null], null), null),cljs.spec.alpha.rep_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"qualifier","qualifier",(125841738)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",(1074571008)),null,new cljs.core.Keyword(null,"req","req",(-326448303)),null,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)),null,new cljs.core.Keyword(null,"opt","opt",(-794706369)),null], null), null),new cljs.core.Keyword(null,"specs","specs",(1426570741)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",(1019430407),null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"qualifier","qualifier",(125841738)),new cljs.core.Keyword(null,"specs","specs",(1426570741))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",(1074571008)),null,new cljs.core.Keyword(null,"req","req",(-326448303)),null,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)),null,new cljs.core.Keyword(null,"opt","opt",(-794706369)),null], null), null),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",(-1047104697)),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",(-693471218)),(function (G__94){
return cljs.core.coll_QMARK_.call(null,G__94);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",(45201917)),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",(1883026911)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",(1019430407),null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))], null),null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",(1074571008)),null,new cljs.core.Keyword(null,"req","req",(-326448303)),null,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)),null,new cljs.core.Keyword(null,"opt","opt",(-794706369)),null], null), null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",(1019430407),null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))], null)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("clojure.spec.alpha","keys","clojure.spec.alpha/keys",(-90227326),null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",(1109346032),null))]),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","*","cljs.spec.alpha/*",(-1238084288),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"qualifier","qualifier",(125841738)),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"req-un","req-un",(1074571008)),null,new cljs.core.Keyword(null,"req","req",(-326448303)),null,new cljs.core.Keyword(null,"opt-un","opt-un",(883442496)),null,new cljs.core.Keyword(null,"opt","opt",(-794706369)),null], null), null),new cljs.core.Keyword(null,"specs","specs",(1426570741)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",(1019430407),null),new cljs.core.Keyword("expound.spec","kw-or-conjunction","expound.spec/kw-or-conjunction",(1714582226)))))], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",(-831679639),null),new cljs.core.Keyword(null,"simple","simple",(-581868663)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"contains","contains",(676899812)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null))]),new cljs.core.Keyword(null,"arg","arg",(-1747261837)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"%","%",(-950237169),null))]),new cljs.core.Keyword(null,"kw","kw",(1158308175)),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),new cljs.core.Keyword(null,"compound","compound",(1539396613)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"op","op",(-1882987955)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null))]),new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",(2101263265),null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236))))),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"simple","simple",(-581868663)),new cljs.core.Keyword(null,"compound","compound",(1539396613))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"contains","contains",(676899812)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null))]),new cljs.core.Keyword(null,"arg","arg",(-1747261837)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"%","%",(-950237169),null))]),new cljs.core.Keyword(null,"kw","kw",(1158308175)),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"op","op",(-1882987955)),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null))]),new cljs.core.Keyword(null,"clauses","clauses",(1454841241)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",(2101263265),null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contains","contains",(676899812)),new cljs.core.Keyword(null,"arg","arg",(-1747261837)),new cljs.core.Keyword(null,"kw","kw",(1158308175))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null),null,new cljs.core.Symbol(null,"contains?","contains?",(-1676812576),null),null], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"%","%",(-950237169),null),null], null), null),cljs.core.keyword_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",(-976526835),null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"contains?","contains?",(-1676812576),null))]),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol(null,"%","%",(-950237169),null))]),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",(713156450),null)], null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"op","op",(-1882987955)),new cljs.core.Keyword(null,"clauses","clauses",(1454841241))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null], null), null),cljs.spec.alpha.rep_PLUS_impl.call(null,new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236)),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236)))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",(1377916282),null),new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null))]),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","+","cljs.spec.alpha/+",(2101263265),null),new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236)))], null))], null),null));
expound.printer.keywords = (function expound$printer$keywords(form){
return cljs.core.filter.call(null,cljs.core.keyword_QMARK_,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,form));
});
expound.printer.singleton_QMARK_ = (function expound$printer$singleton_QMARK_(xs){
return cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,xs));
});
expound.printer.specs_from_form = (function expound$printer$specs_from_form(via){
var form = (function (){var G__95 = via;
var G__95__$1 = (((G__95 == null))?null:cljs.core.last.call(null,G__95));
if((G__95__$1 == null)){
return null;
} else {
return cljs.spec.alpha.form.call(null,G__95__$1);
}
})();
var conformed = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("expound.spec","key-spec","expound.spec/key-spec",(169182720)),form);
if(cljs.core.truth_((function (){var and__8052__auto__ = form;
if(cljs.core.truth_(and__8052__auto__)){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec.alpha","invalid","cljs.spec.alpha/invalid",(-1220295119)),conformed);
} else {
return and__8052__auto__;
}
})())){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.second,cljs.core.filter.call(null,((function (form,conformed){
return (function (x){
return ((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"kw","kw",(1158308175)),cljs.core.first.call(null,x))));
});})(form,conformed))
,cljs.core.tree_seq.call(null,cljs.core.coll_QMARK_,cljs.core.seq,cljs.core.map.call(null,new cljs.core.Keyword(null,"specs","specs",(1426570741)),new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(conformed))))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
expound.printer.key__GT_spec = (function expound$printer$key__GT_spec(keys,problems){
var seq__96_100 = cljs.core.seq.call(null,problems);
var chunk__97_101 = null;
var count__98_102 = (0);
var i__99_103 = (0);
while(true){
if((i__99_103 < count__98_102)){
var p_104 = cljs.core._nth.call(null,chunk__97_101,i__99_103);
if(!((new cljs.core.Keyword("expound","via","expound/via",(-595987777)).cljs$core$IFn$_invoke$arity$1(p_104) == null))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),"\n","(some? (:expound/via p))"].join('')));
}


var G__105 = seq__96_100;
var G__106 = chunk__97_101;
var G__107 = count__98_102;
var G__108 = (i__99_103 + (1));
seq__96_100 = G__105;
chunk__97_101 = G__106;
count__98_102 = G__107;
i__99_103 = G__108;
continue;
} else {
var temp__7879__auto___109 = cljs.core.seq.call(null,seq__96_100);
if(temp__7879__auto___109){
var seq__96_110__$1 = temp__7879__auto___109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__96_110__$1)){
var c__8838__auto___111 = cljs.core.chunk_first.call(null,seq__96_110__$1);
var G__112 = cljs.core.chunk_rest.call(null,seq__96_110__$1);
var G__113 = c__8838__auto___111;
var G__114 = cljs.core.count.call(null,c__8838__auto___111);
var G__115 = (0);
seq__96_100 = G__112;
chunk__97_101 = G__113;
count__98_102 = G__114;
i__99_103 = G__115;
continue;
} else {
var p_116 = cljs.core.first.call(null,seq__96_110__$1);
if(!((new cljs.core.Keyword("expound","via","expound/via",(-595987777)).cljs$core$IFn$_invoke$arity$1(p_116) == null))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.util.assert_message),"\n","(some? (:expound/via p))"].join('')));
}


var G__117 = cljs.core.next.call(null,seq__96_110__$1);
var G__118 = null;
var G__119 = (0);
var G__120 = (0);
seq__96_100 = G__117;
chunk__97_101 = G__118;
count__98_102 = G__119;
i__99_103 = G__120;
continue;
}
} else {
}
}
break;
}

var vias = cljs.core.map.call(null,new cljs.core.Keyword("expound","via","expound/via",(-595987777)),problems);
var specs = ((cljs.core.every_QMARK_.call(null,cljs.core.qualified_keyword_QMARK_,keys))?keys:(function (){var temp__7824__auto__ = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,expound.printer.specs_from_form,vias));
if(cljs.core.truth_(temp__7824__auto__)){
var specs = temp__7824__auto__;
return specs;
} else {
return keys;
}
})());
return cljs.core.reduce.call(null,((function (vias,specs){
return (function (m,k){
return cljs.core.assoc.call(null,m,k,((cljs.core.qualified_keyword_QMARK_.call(null,k))?k:cljs.core.first.call(null,cljs.core.filter.call(null,((function (vias,specs){
return (function (p1__2_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.name.call(null,k),cljs.core.name.call(null,p1__2_SHARP_));
});})(vias,specs))
,specs))));
});})(vias,specs))
,cljs.core.PersistentArrayMap.EMPTY,keys);
});
expound.printer.expand_spec = (function expound$printer$expand_spec(spec){
var _BANG_seen_specs = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return clojure.walk.prewalk.call(null,((function (_BANG_seen_specs){
return (function (x){
if(!(cljs.core.qualified_keyword_QMARK_.call(null,x))){
return x;
} else {
var temp__7824__auto__ = cljs.spec.alpha.get_spec.call(null,x);
if(cljs.core.truth_(temp__7824__auto__)){
var sp = temp__7824__auto__;
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,_BANG_seen_specs),x))){
cljs.core.swap_BANG_.call(null,_BANG_seen_specs,cljs.core.conj,x);

return cljs.spec.alpha.form.call(null,sp);
} else {
return x;
}
} else {
return x;
}
}
});})(_BANG_seen_specs))
,(cljs.core.truth_(cljs.spec.alpha.get_spec.call(null,spec))?cljs.spec.alpha.form.call(null,spec):spec));
});
expound.printer.summarize_key_clause = (function expound$printer$summarize_key_clause(p__121){
var vec__122 = p__121;
var branch = cljs.core.nth.call(null,vec__122,(0),null);
var match = cljs.core.nth.call(null,vec__122,(1),null);
var G__125 = branch;
var G__125__$1 = (((G__125 instanceof cljs.core.Keyword))?G__125.fqn:null);
switch (G__125__$1) {
case "simple":
return new cljs.core.Keyword(null,"kw","kw",(1158308175)).cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return cljs.core.apply.call(null,cljs.core.list,cljs.core.symbol.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"op","op",(-1882987955)).cljs$core$IFn$_invoke$arity$1(match))),cljs.core.map.call(null,expound.printer.summarize_key_clause,new cljs.core.Keyword(null,"clauses","clauses",(1454841241)).cljs$core$IFn$_invoke$arity$1(match)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__125__$1)].join('')));

}
});
expound.printer.missing_key = (function expound$printer$missing_key(form){
var vec__127 = cljs.spec.alpha.conform.call(null,new cljs.core.Keyword("expound.spec","contains-key-pred","expound.spec/contains-key-pred",(-989075236)),cljs.core.nth.call(null,form,(2)));
var branch = cljs.core.nth.call(null,vec__127,(0),null);
var match = cljs.core.nth.call(null,vec__127,(1),null);
var G__130 = branch;
var G__130__$1 = (((G__130 instanceof cljs.core.Keyword))?G__130.fqn:null);
switch (G__130__$1) {
case "simple":
return new cljs.core.Keyword(null,"kw","kw",(1158308175)).cljs$core$IFn$_invoke$arity$1(match);

break;
case "compound":
return expound.printer.summarize_key_clause.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [branch,match], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__130__$1)].join('')));

}
});
expound.printer.elide_core_ns = (function expound$printer$elide_core_ns(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,"cljs.core/",""),"cljs/core/","");
});
expound.printer.elide_spec_ns = (function expound$printer$elide_spec_ns(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,s,"cljs.spec.alpha/",""),"cljs/spec/alpha","");
});
expound.printer.pprint_fn = (function expound$printer$pprint_fn(f){
return clojure.string.replace.call(null,clojure.string.replace.call(null,expound.printer.elide_core_ns.call(null,(function (){var fn_parts = clojure.string.split.call(null,cljs.core.second.call(null,cljs.core.re_find.call(null,/object\[([^\( \]]+).*(\n|\])?/,cljs.core.pr_str.call(null,f))),/\$/);
var ns_n = clojure.string.join.call(null,".",cljs.core.butlast.call(null,fn_parts));
var fn_n = cljs.core.last.call(null,fn_parts);
if(cljs.core.empty_QMARK_.call(null,ns_n)){
return expound.printer.anon_fn_str;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge_str.call(null,ns_n)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.demunge_str.call(null,fn_n))].join('');
}
})()),/--\d+/,""),/@[a-zA-Z0-9]+/,"");
});
expound.printer.format = (function expound$printer$format(var_args){
var args__9144__auto__ = [];
var len__9141__auto___134 = arguments.length;
var i__9142__auto___135 = (0);
while(true){
if((i__9142__auto___135 < len__9141__auto___134)){
args__9144__auto__.push((arguments[i__9142__auto___135]));

var G__136 = (i__9142__auto___135 + (1));
i__9142__auto___135 = G__136;
continue;
} else {
}
break;
}

var argseq__9145__auto__ = ((((1) < args__9144__auto__.length))?(new cljs.core.IndexedSeq(args__9144__auto__.slice((1)),(0),null)):null);
return expound.printer.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9145__auto__);
});

expound.printer.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

expound.printer.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
expound.printer.format.cljs$lang$applyTo = (function (seq132){
var G__133 = cljs.core.first.call(null,seq132);
var seq132__$1 = cljs.core.next.call(null,seq132);
var self__9132__auto__ = this;
return self__9132__auto__.cljs$core$IFn$_invoke$arity$variadic(G__133,seq132__$1);
});

cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","pprint-str","expound.printer/pprint-str",(545590738),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null),new cljs.core.Keyword(null,"args","args",(1315556576)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",(2099068185))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"x","x",(2099068185)),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",(-2068111842),null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null),null,null,null));
/**
 * Returns the pretty-printed string
 */
expound.printer.pprint_str = (function expound$printer$pprint_str(x){
if(cljs.core.fn_QMARK_.call(null,x)){
return expound.printer.pprint_fn.call(null,x);
} else {
return cljs.pprint.write.call(null,x,new cljs.core.Keyword(null,"stream","stream",(1534941648)),null);
}
});
expound.printer.simple_spec_or_name = (function expound$printer$simple_spec_or_name(spec_name){
var spec_str = expound.printer.elide_spec_ns.call(null,expound.printer.elide_core_ns.call(null,cljs.core.pr_str.call(null,expound.printer.expand_spec.call(null,spec_name))));
if((((expound.printer.max_spec_str_width < cljs.core.count.call(null,spec_str))) || (clojure.string.includes_QMARK_.call(null,spec_str,"\n")))){
return spec_name;
} else {
return spec_str;
}
});
expound.printer.print_spec_keys = (function expound$printer$print_spec_keys(problems){
var keys = expound.printer.keywords.call(null,cljs.core.map.call(null,(function (p1__3_SHARP_){
return expound.printer.missing_key.call(null,new cljs.core.Keyword(null,"pred","pred",(1927423397)).cljs$core$IFn$_invoke$arity$1(p1__3_SHARP_));
}),problems));
if(cljs.core.truth_((function (){var and__8052__auto__ = cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword("expound","via","expound/via",(-595987777)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,problems)));
if(and__8052__auto__){
return cljs.core.some.call(null,cljs.core.simple_keyword_QMARK_,keys);
} else {
return and__8052__auto__;
}
})())){
return null;
} else {
return clojure.string.trim.call(null,(function (){var sb__9027__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_137_143 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_138_144 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_137_143,_STAR_print_fn_STAR_138_144,sb__9027__auto__,keys){
return (function (x__9028__auto__){
return sb__9027__auto__.append(x__9028__auto__);
});})(_STAR_print_newline_STAR_137_143,_STAR_print_fn_STAR_138_144,sb__9027__auto__,keys))
;

try{cljs.pprint.print_table.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key","spec"], null),cljs.core.sort_by.call(null,((function (_STAR_print_newline_STAR_137_143,_STAR_print_fn_STAR_138_144,sb__9027__auto__,keys){
return (function (p1__4_SHARP_){
return cljs.core.get.call(null,p1__4_SHARP_,"key");
});})(_STAR_print_newline_STAR_137_143,_STAR_print_fn_STAR_138_144,sb__9027__auto__,keys))
,cljs.core.map.call(null,((function (_STAR_print_newline_STAR_137_143,_STAR_print_fn_STAR_138_144,sb__9027__auto__,keys){
return (function (p__139){
var vec__140 = p__139;
var k = cljs.core.nth.call(null,vec__140,(0),null);
var v = cljs.core.nth.call(null,vec__140,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, ["key",k,"spec",expound.printer.simple_spec_or_name.call(null,v)], null);
});})(_STAR_print_newline_STAR_137_143,_STAR_print_fn_STAR_138_144,sb__9027__auto__,keys))
,expound.printer.key__GT_spec.call(null,keys,problems))));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_138_144;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_137_143;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__9027__auto__)].join('');
})());
}
});
expound.printer.print_missing_keys = (function expound$printer$print_missing_keys(problems){
var keys_clauses = cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,expound.printer.missing_key,new cljs.core.Keyword(null,"pred","pred",(1927423397))),problems));
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,keys_clauses)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,((function (keys_clauses){
return (function (p1__5_SHARP_){
return expound.ansi.color.call(null,p1__5_SHARP_,new cljs.core.Keyword(null,"correct-key","correct-key",(1087492967)));
});})(keys_clauses))
,cljs.core.sort.call(null,keys_clauses)));
} else {
return ["\n\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expound.ansi.color.call(null,expound.printer.pprint_str.call(null,(cljs.core.truth_(expound.printer.singleton_QMARK_.call(null,keys_clauses))?cljs.core.first.call(null,keys_clauses):cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol(null,"and","and",(668631710),null),keys_clauses))),new cljs.core.Keyword(null,"correct-key","correct-key",(1087492967))))].join('');
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","no-trailing-whitespace","expound.printer/no-trailing-whitespace",(12095135),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null),new cljs.core.Keyword(null,"args","args",(1315556576)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"s","s",(1705939918)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"s","s",(1705939918)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"s","s",(1705939918))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"s","s",(1705939918)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null),null,null,null));
/**
 * Given an potentially multi-line string, returns that string with all
 *   trailing whitespace removed.
 */
expound.printer.no_trailing_whitespace = (function expound$printer$no_trailing_whitespace(s){
var s_SINGLEQUOTE_ = clojure.string.join.call(null,"\n",cljs.core.map.call(null,clojure.string.trimr,clojure.string.split_lines.call(null,s)));
if(cljs.core._EQ_.call(null,"\n",cljs.core.last.call(null,s))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_),"\n"].join('');
} else {
return s_SINGLEQUOTE_;
}
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("expound.printer","indent","expound.printer/indent",(-1038636895),null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",(-1289128341),null),new cljs.core.Keyword(null,"args","args",(1315556576)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",(-142390557)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),new cljs.core.Keyword(null,"indent-level","indent-level",(-258835684)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),new cljs.core.Keyword(null,"s","s",(1705939918)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),new cljs.core.Keyword(null,"ret","ret",(-468222814)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",(-142390557)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),new cljs.core.Keyword(null,"indent-level","indent-level",(-258835684)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),new cljs.core.Keyword(null,"s","s",(1705939918)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",(-142390557)),new cljs.core.Keyword(null,"indent-level","indent-level",(-258835684)),new cljs.core.Keyword(null,"s","s",(1705939918))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.alpha.maybe_impl.call(null,cljs.core.nat_int_QMARK_,new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),cljs.spec.alpha.maybe_impl.call(null,cljs.core.nat_int_QMARK_,new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),cljs.core.string_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",(-1471398329),null),new cljs.core.Keyword(null,"first-line-indent-level","first-line-indent-level",(-142390557)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),new cljs.core.Keyword(null,"indent-level","indent-level",(-258835684)),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","?","cljs.spec.alpha/?",(1605136319),null),new cljs.core.Symbol("cljs.core","nat-int?","cljs.core/nat-int?",(-164364171),null)),new cljs.core.Keyword(null,"s","s",(1705939918)),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null),cljs.core.string_QMARK_,null,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",(-2072921719),null),null,null,null));
/**
 * Given an potentially multi-line string, returns that string indented by
 * 'indent-level' spaces. Optionally, can indent first line and other lines
 * different amounts.
 */
expound.printer.indent = (function expound$printer$indent(var_args){
var G__146 = arguments.length;
switch (G__146) {
case (1):
return expound.printer.indent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return expound.printer.indent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return expound.printer.indent.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

expound.printer.indent.cljs$core$IFn$_invoke$arity$1 = (function (s){
return expound.printer.indent.call(null,expound.printer.indent_level,s);
});

expound.printer.indent.cljs$core$IFn$_invoke$arity$2 = (function (indent_level,s){
return expound.printer.indent.call(null,indent_level,indent_level,s);
});

expound.printer.indent.cljs$core$IFn$_invoke$arity$3 = (function (first_line_indent,rest_lines_indent,s){
var vec__147 = clojure.string.split_lines.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''));
var seq__148 = cljs.core.seq.call(null,vec__147);
var first__149 = cljs.core.first.call(null,seq__148);
var seq__148__$1 = cljs.core.next.call(null,seq__148);
var line = first__149;
var lines = seq__148__$1;
return clojure.string.join.call(null,"\n",cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,first_line_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('')], null),cljs.core.map.call(null,((function (vec__147,seq__148,first__149,seq__148__$1,line,lines){
return (function (p1__6_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,rest_lines_indent," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6_SHARP_)].join('');
});})(vec__147,seq__148,first__149,seq__148__$1,line,lines))
,lines)));
});

expound.printer.indent.cljs$lang$maxFixedArity = (3);


//# sourceURL=expound/printer.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwb3VuZC9wcmludGVyLmpzIiwic291cmNlcyI6WyJwcmludGVyLmNsanMiXSwibGluZUNvdW50IjozODAsIm1hcHBpbmdzIjoiO0FBV0EsK0JBQUEsL0JBQUtBO0FBQ0wscUNBQUEsckNBQUtDO0FBQ0wsOEJBQUEsOUJBQUtDO0FBRUwsQUFBQUMsbUNBQUEsdUdBQUEsZUFBQSx1RkFBQSxvREFBQSwrQ0FBQSxlQUFBLDZEQUFBLHlFQUFBLGVBQUEsNkRBQUEsMkVBQUEseURBQUEsZUFBQSxrRkFBQSwwR0FDRSxBQUFBQyxtQ0FBQSxtRkFBQSxvREFBQSxpRUFBQSxtRkFBQSxpRkFBQSw0REFBQSw2VUFBQSxtRkFBQSwrQ0FBQSxlQUFBLDZEQUFBLHdEQUFBLGVBQUEsNkRBQUEsMkRBQUEsZUFBQSxrRkFBQSwvdUJBRVEsQUFBQUMsd0NBQUEsd0dBQUE7QUFDVixBQUFBRixtQ0FBQSx3R0FBQSxlQUFBLG9GQUFBLG1EQUFBLHdHQUFBLHVEQUFBLHdHQUNFLEFBQUFHLHVDQUFBLG1GQUFBLG1EQUFBLCtEQUFBLG1GQUFBLHdHQUFBLCtHQUFBLHNIQUFBLCtHQUFBLGxKQUNLQztBQUVQLEFBQUFKLG1DQUFBLHFGQUFBLGVBQUEsdUZBQUEsdURBQUEsK0NBQUEsZUFBQSw2REFBQSwyRkFBQSw2REFBQSxlQUFBLG1GQUFBLGVBQUEsdUZBQUEsZ0VBQUEsaUZBQUEsZ0VBQUEsMERBQUEsK0RBQUEseUVBQUEseURBQUEsZUFBQSw4RkFBQSw0R0FDRSxBQUFBQyxtQ0FBQSxtRkFBQSx1REFBQSxxRUFBQSxtRkFBQSxpRkFBQSxrR0FBQSw0R0FFZ0IsQUFBQUksbUNBQUEsZUFBQSx1RkFBQSxnRUFBQSxpRkFBQSxnRUFBQSwwREFBQSwrREFBQSx5RUFBQSx5REFBQSxlQUFBLDhGQUFBLDBHQUNDLEFBQUFKLG1DQUFBLG1GQUFBLGdFQUFBLGlFQUFBLG1GQUFBLGlGQUFBLGdFQUFBLDBEQUFBLCtEQUFBLHlFQUNjLEFBQUFLLHFDQUFBLHdHQUFBLHdHQUFBLDJDQUFBLCtG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QWtCQyxrQkFBa0IxRTtBQVJ4QyxBQVNHLElBQUEyRSxXQUFxQixBQUFDVCxxQ0FBbUIsNkNBQUtsRTtJQUE5QzRFLFdBQUEsQUFBQXZKLHdCQUFBc0o7SUFBQUUsYUFBQSxBQUFBdEksMEJBQUFxSTtJQUFBQSxlQUFBLEFBQUFySCx5QkFBQXFIO1dBQUFDLFBBQU9DO1lBQVBGLFJBQWNHO0FBQWQsbVdBRU8sd0JBQUEseEJBQUMzSSx6VEFDRCx5QkFBQSx6QkFBQytJLDRHQUFNLDZDQUFLLEFBQUNwSCwwQkFBTWtILGNBQUksNkNBQUEsN0NBQUNDLDJCQUFPVCxxRUFBd0JLLDNVQUN2RCxxQ0FBQSw5QkFBQ3BFO2tCQUZEc0U7QUFBQSxBQUFNLDRMQUFBQSx4SUFBSyxBQUFDakgsMEJBQU1rSCxjQUFJLDZDQUFBLDdDQUFDQywyQkFBT1I7O0NBRDlCSzs7O0FBVlYsQUFBQSxpREFBQSxqREFBTVI7O0FBQU4iLCJuYW1lcyI6WyJleHBvdW5kLnByaW50ZXIvaW5kZW50LWxldmVsIiwiZXhwb3VuZC5wcmludGVyL21heC1zcGVjLXN0ci13aWR0aCIsImV4cG91bmQucHJpbnRlci9hbm9uLWZuLXN0ciIsImNsanMuc3BlYy5hbHBoYS9kZWYtaW1wbCIsImNsanMuc3BlYy5hbHBoYS9jYXQtaW1wbCIsImNsanMuc3BlYy5hbHBoYS9yZXAraW1wbCIsImNsanMuc3BlYy5hbHBoYS9vci1zcGVjLWltcGwiLCJjbGpzLmNvcmUvcXVhbGlmaWVkLWtleXdvcmQ/IiwiY2xqcy5zcGVjLmFscGhhL3JlcC1pbXBsIiwiY2xqcy5zcGVjLmFscGhhL2V2ZXJ5LWltcGwiLCJHX185NCIsImNsanMuY29yZS9jb2xsPyIsImNsanMuY29yZS9rZXl3b3JkPyIsImV4cG91bmQucHJpbnRlci9rZXl3b3JkcyIsImZvcm0iLCJjbGpzLmNvcmUvdHJlZS1zZXEiLCJjbGpzLmNvcmUvc2VxIiwiY2xqcy5jb3JlL2ZpbHRlciIsImV4cG91bmQucHJpbnRlci9zaW5nbGV0b24/IiwieHMiLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9jb3VudCIsImV4cG91bmQucHJpbnRlci9zcGVjcy1mcm9tLWZvcm0iLCJ2aWEiLCJHX185NSIsImNsanMuY29yZS9sYXN0IiwiY2xqcy5zcGVjLmFscGhhL2Zvcm0iLCJjb25mb3JtZWQiLCJjbGpzLnNwZWMuYWxwaGEvY29uZm9ybSIsImFuZF9fODA1Ml9fYXV0b19fIiwiY2xqcy5jb3JlL25vdD0iLCJjbGpzLmNvcmUvbWFwIiwieCIsImNsanMuY29yZS92ZWN0b3I/IiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL3NlY29uZCIsImNsanMuY29yZS9zZXQiLCJleHBvdW5kLnByaW50ZXIva2V5LT5zcGVjIiwia2V5cyIsInByb2JsZW1zIiwic2VxX185NiIsImNodW5rX185NyIsImNvdW50X185OCIsImlfXzk5IiwiY2xqcy5jb3JlLy1udGgiLCJ0ZW1wX183ODc5X19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmtlZC1zZXE/IiwiY19fODgzOF9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rLWZpcnN0IiwiY2xqcy5jb3JlL2NodW5rLXJlc3QiLCJjbGpzLmNvcmUvbmV4dCIsInAiLCJqcy9FcnJvciIsImV4cG91bmQudXRpbC9hc3NlcnQtbWVzc2FnZSIsInZpYXMiLCJzcGVjcyIsImNsanMuY29yZS9ldmVyeT8iLCJ0ZW1wX183ODI0X19hdXRvX18iLCJjbGpzLmNvcmUvYXBwbHkiLCJjbG9qdXJlLnNldC91bmlvbiIsImNsanMuY29yZS9yZWR1Y2UiLCJtIiwiayIsImNsanMuY29yZS9hc3NvYyIsInAxX18yIyIsImNsanMuY29yZS9uYW1lIiwiZXhwb3VuZC5wcmludGVyL2V4cGFuZC1zcGVjIiwic3BlYyIsIiFzZWVuLXNwZWNzIiwiY2xqcy5jb3JlL2F0b20iLCJjbG9qdXJlLndhbGsvcHJld2FsayIsInNwIiwiY2xqcy5zcGVjLmFscGhhL2dldC1zcGVjIiwiY2xqcy5jb3JlL2RlcmVmIiwiY2xqcy5jb3JlL2NvbnRhaW5zPyIsImNsanMuY29yZS9zd2FwISIsImNsanMuY29yZS9jb25qIiwicF9fMTIxIiwidmVjX18xMjIiLCJjbGpzLmNvcmUvbnRoIiwiZXhwb3VuZC5wcmludGVyL3N1bW1hcml6ZS1rZXktY2xhdXNlIiwiYnJhbmNoIiwibWF0Y2giLCJHX18xMjUiLCJjbGpzLmNvcmUvS2V5d29yZCIsImNsanMuY29yZS9saXN0IiwiY2xqcy5jb3JlL3N5bWJvbCIsImV4cG91bmQucHJpbnRlci9taXNzaW5nLWtleSIsInZlY19fMTI3IiwiR19fMTMwIiwiZXhwb3VuZC5wcmludGVyL2VsaWRlLWNvcmUtbnMiLCJzIiwiY2xvanVyZS5zdHJpbmcvcmVwbGFjZSIsImV4cG91bmQucHJpbnRlci9lbGlkZS1zcGVjLW5zIiwiZXhwb3VuZC5wcmludGVyL3BwcmludC1mbiIsImYiLCJmbi1wYXJ0cyIsImNsb2p1cmUuc3RyaW5nL3NwbGl0IiwiY2xqcy5jb3JlL3JlLWZpbmQiLCJjbGpzLmNvcmUvcHItc3RyIiwibnMtbiIsImNsb2p1cmUuc3RyaW5nL2pvaW4iLCJjbGpzLmNvcmUvYnV0bGFzdCIsImZuLW4iLCJjbGpzLmNvcmUvZW1wdHk/IiwiY2xqcy5jb3JlL2RlbXVuZ2Utc3RyIiwidmFyX2FyZ3MiLCJhcmdzX185MTQ0X19hdXRvX18iLCJsZW5fXzkxNDFfX2F1dG9fXyIsImlfXzkxNDJfX2F1dG9fXyIsImFyZ3NlcV9fOTE0NV9fYXV0b19fIiwiZXhwb3VuZC5wcmludGVyL2Zvcm1hdCIsInNlcTEzMiIsIkdfXzEzMyIsInNlbGZfXzkxMzJfX2F1dG9fXyIsImZtdCIsImFyZ3MiLCJnb29nLnN0cmluZy9mb3JtYXQiLCJjbGpzLnNwZWMuYWxwaGEvZnNwZWMtaW1wbCIsImNsanMuc3BlYy5hbHBoYS9zcGVjLWltcGwiLCJjbGpzLmNvcmUvYW55PyIsImNsanMuY29yZS9zdHJpbmc/IiwiZXhwb3VuZC5wcmludGVyL3BwcmludC1zdHIiLCJjbGpzLmNvcmUvZm4/IiwiY2xqcy5wcHJpbnQvd3JpdGUiLCJleHBvdW5kLnByaW50ZXIvc2ltcGxlLXNwZWMtb3ItbmFtZSIsInNwZWMtbmFtZSIsInNwZWMtc3RyIiwiY2xvanVyZS5zdHJpbmcvaW5jbHVkZXM/IiwiZXhwb3VuZC5wcmludGVyL3ByaW50LXNwZWMta2V5cyIsInAxX18zIyIsImNsanMuY29yZS9zb21lIiwiY2xqcy5jb3JlL3NpbXBsZS1rZXl3b3JkPyIsInNiX185MDI3X19hdXRvX18iLCJnb29nLnN0cmluZy9TdHJpbmdCdWZmZXIiLCIqcHJpbnQtbmV3bGluZSoxMzciLCJjbGpzLmNvcmUvKnByaW50LW5ld2xpbmUqIiwiKnByaW50LWZuKjEzOCIsImNsanMuY29yZS8qcHJpbnQtZm4qIiwieF9fOTAyOF9fYXV0b19fIiwicF9fMTM5IiwidmVjX18xNDAiLCJ2IiwicDFfXzQjIiwiY2xqcy5jb3JlL3NvcnQtYnkiLCJjbGpzLmNvcmUvZ2V0IiwiY2xqcy5wcHJpbnQvcHJpbnQtdGFibGUiLCJjbG9qdXJlLnN0cmluZy90cmltIiwiZXhwb3VuZC5wcmludGVyL3ByaW50LW1pc3Npbmcta2V5cyIsImtleXMtY2xhdXNlcyIsImNsanMuY29yZS9kaXN0aW5jdCIsImNsanMuY29yZS9jb21wIiwicDFfXzUjIiwiZXhwb3VuZC5hbnNpL2NvbG9yIiwiY2xqcy5jb3JlL3NvcnQiLCJleHBvdW5kLnByaW50ZXIvbm8tdHJhaWxpbmctd2hpdGVzcGFjZSIsInMnIiwiY2xvanVyZS5zdHJpbmcvc3BsaXQtbGluZXMiLCJjbG9qdXJlLnN0cmluZy90cmltciIsImNsanMuc3BlYy5hbHBoYS9tYXliZS1pbXBsIiwiY2xqcy5jb3JlL25hdC1pbnQ/IiwiR19fMTQ2IiwiZXhwb3VuZC5wcmludGVyL2luZGVudCIsImluZGVudC1sZXZlbCIsImZpcnN0LWxpbmUtaW5kZW50IiwicmVzdC1saW5lcy1pbmRlbnQiLCJ2ZWNfXzE0NyIsInNlcV9fMTQ4IiwiZmlyc3RfXzE0OSIsImxpbmUiLCJsaW5lcyIsInAxX182IyIsImNsanMuY29yZS9zdHIiLCJjbGpzLmNvcmUvcmVwZWF0IiwiY2xqcy5jb3JlL2ludG8iLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgZXhwb3VuZC5wcmludGVyXG4gICg6cmVxdWlyZSBbY2xvanVyZS5zdHJpbmcgOmFzIHN0cmluZ11cbiAgICAgICAgICAgIFtjbG9qdXJlLnNwZWMuYWxwaGEgOmFzIHNdXG4gICAgICAgICAgICBbY2xvanVyZS5wcHJpbnQgOmFzIHBwcmludF1cbiAgICAgICAgICAgIFtjbG9qdXJlLndhbGsgOmFzIHdhbGtdXG4gICAgICAgICAgICBbY2xvanVyZS5zZXQgOmFzIHNldF1cbiAgICAgICAgICAgIFtleHBvdW5kLnV0aWwgOmFzIHV0aWxdXG4gICAgICAgICAgICBbZXhwb3VuZC5hbnNpIDphcyBhbnNpXVxuICAgICAgICAgICAgIz8oOmNsaiBbY2xvanVyZS5tYWluIDphcyBjbG9qdXJlLm1haW5dKSlcbiAgKDpyZWZlci1jbG9qdXJlIDpleGNsdWRlIFtmb3JtYXRdKSlcblxuKGRlZiBpbmRlbnQtbGV2ZWwgMilcbihkZWYgbWF4LXNwZWMtc3RyLXdpZHRoIDEwMClcbihkZWYgYW5vbi1mbi1zdHIgXCI8YW5vbnltb3VzIGZ1bmN0aW9uPlwiKVxuXG4ocy9kZWYgOmV4cG91bmQuc3BlYy9zcGVjLWNvbmp1bmN0aW9uXG4gIChzL2NhdFxuICAgOm9wICN7J29yICdhbmR9XG4gICA6c3BlY3MgKHMvKyA6ZXhwb3VuZC5zcGVjL2t3LW9yLWNvbmp1bmN0aW9uKSkpXG4ocy9kZWYgOmV4cG91bmQuc3BlYy9rdy1vci1jb25qdW5jdGlvblxuICAocy9vclxuICAgOmt3IHF1YWxpZmllZC1rZXl3b3JkP1xuICAgOmNvbmogOmV4cG91bmQuc3BlYy9zcGVjLWNvbmp1bmN0aW9uKSlcbihzL2RlZiA6ZXhwb3VuZC5zcGVjL2tleS1zcGVjXG4gIChzL2NhdCA6a2V5cyAjeydjbG9qdXJlLnNwZWMuYWxwaGEva2V5c1xuICAgICAgICAgICAgICAgICAnY2xqcy5zcGVjLmFscGhhL2tleXN9XG4gICAgICAgICA6Y2xhdXNlcyAocy8qXG4gICAgICAgICAgICAgICAgICAgKHMvY2F0IDpxdWFsaWZpZXIgI3s6cmVxLXVuIDpyZXEgOm9wdC11biA6b3B0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6c3BlY3MgKHMvY29sbC1vZiA6ZXhwb3VuZC5zcGVjL2t3LW9yLWNvbmp1bmN0aW9uKSkpKSlcbihzL2RlZiA6ZXhwb3VuZC5zcGVjL2NvbnRhaW5zLWtleS1wcmVkIChzL29yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNpbXBsZSAocy9jYXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29udGFpbnMgI3tgY29udGFpbnM/ICdjb250YWlucz99XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFyZyAjeyclfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprdyBrZXl3b3JkPylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y29tcG91bmQgKHMvY2F0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3AgI3tgb3IgYGFuZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGF1c2VzIChzLysgOmV4cG91bmQuc3BlYy9jb250YWlucy1rZXktcHJlZCkpKSlcblxuOzs7OyBwcml2YXRlXG5cbihkZWZuIGtleXdvcmRzIFtmb3JtXVxuICAoLT4+IGZvcm1cbiAgICAgICAodHJlZS1zZXEgY29sbD8gc2VxKVxuICAgICAgIChmaWx0ZXIga2V5d29yZD8pKSlcblxuKGRlZm4gc2luZ2xldG9uPyBbeHNdXG4gICg9IDEgKGNvdW50IHhzKSkpXG5cbihkZWZuIHNwZWNzLWZyb20tZm9ybSBbdmlhXVxuICAobGV0IFtmb3JtIChzb21lLT4gdmlhIGxhc3Qgcy9mb3JtKVxuICAgICAgICBjb25mb3JtZWQgKHMvY29uZm9ybSA6ZXhwb3VuZC5zcGVjL2tleS1zcGVjIGZvcm0pXVxuICAgIDs7IFRoZSBjb250YWluaW5nIHNwZWMgbWlnaHQgbm90IGJlXG4gICAgOzsgYSBzaW1wbGUgJ2tleXMnIGNhbGwsIGluIHdoaWNoIGNhc2Ugd2UgZ2l2ZSB1cFxuICAgIChpZiAoYW5kIGZvcm1cbiAgICAgICAgICAgICAobm90PSA6OnMvaW52YWxpZCBjb25mb3JtZWQpKVxuICAgICAgKC0+PiAoOmNsYXVzZXMgY29uZm9ybWVkKVxuICAgICAgICAgICAobWFwIDpzcGVjcylcbiAgICAgICAgICAgKHRyZWUtc2VxIGNvbGw/IHNlcSlcbiAgICAgICAgICAgKGZpbHRlclxuICAgICAgICAgICAgKGZuIFt4XVxuICAgICAgICAgICAgICAoYW5kICh2ZWN0b3I/IHgpICg9IDprdyAoZmlyc3QgeCkpKSkpXG4gICAgICAgICAgIChtYXAgc2Vjb25kKVxuICAgICAgICAgICBzZXQpXG4gICAgICBbXSkpKVxuXG4oZGVmbiBrZXktPnNwZWMgW2tleXMgcHJvYmxlbXNdXG4gIChkb3NlcSBbcCBwcm9ibGVtc11cbiAgICAoYXNzZXJ0IChzb21lPyAoOmV4cG91bmQvdmlhIHApKSB1dGlsL2Fzc2VydC1tZXNzYWdlKSlcbiAgKGxldCBbdmlhcyAobWFwIDpleHBvdW5kL3ZpYSBwcm9ibGVtcylcbiAgICAgICAgc3BlY3MgKGlmIChldmVyeT8gcXVhbGlmaWVkLWtleXdvcmQ/IGtleXMpXG4gICAgICAgICAgICAgICAga2V5c1xuICAgICAgICAgICAgICAgIChpZi1sZXQgW3NwZWNzIChhcHBseSBzZXQvdW5pb24gKG1hcCBzcGVjcy1mcm9tLWZvcm0gdmlhcykpXVxuICAgICAgICAgICAgICAgICAgc3BlY3NcbiAgICAgICAgICAgICAgICAgIGtleXMpKV1cbiAgICAocmVkdWNlXG4gICAgIChmbiBbbSBrXVxuICAgICAgIChhc3NvYyBtXG4gICAgICAgICAgICAgIGtcbiAgICAgICAgICAgICAgKGlmIChxdWFsaWZpZWQta2V5d29yZD8gaylcbiAgICAgICAgICAgICAgICBrXG4gICAgICAgICAgICAgICAgKC0+PiBzcGVjc1xuICAgICAgICAgICAgICAgICAgICAgKGZpbHRlciAjKD0gKG5hbWUgaykgKG5hbWUgJSkpKVxuICAgICAgICAgICAgICAgICAgICAgZmlyc3QpKSkpXG4gICAgIHt9XG4gICAgIGtleXMpKSlcblxuKGRlZm4gZXhwYW5kLXNwZWMgW3NwZWNdXG4gIChsZXQgWyFzZWVuLXNwZWNzIChhdG9tICN7fSldXG4gICAgKHdhbGsvcHJld2Fsa1xuICAgICAoZm4gW3hdXG4gICAgICAgKGlmLW5vdCAocXVhbGlmaWVkLWtleXdvcmQ/IHgpXG4gICAgICAgICB4XG4gICAgICAgICAoaWYtbGV0IFtzcCAocy9nZXQtc3BlYyB4KV1cbiAgICAgICAgICAgKGlmLW5vdCAoY29udGFpbnM/IEAhc2Vlbi1zcGVjcyB4KVxuICAgICAgICAgICAgIChkb1xuICAgICAgICAgICAgICAgKHN3YXAhICFzZWVuLXNwZWNzIGNvbmogeClcbiAgICAgICAgICAgICAgIChzL2Zvcm0gc3ApKVxuICAgICAgICAgICAgIHgpXG4gICAgICAgICAgIHgpKSlcbiAgICAgKGlmIChzL2dldC1zcGVjIHNwZWMpXG4gICAgICAgKHMvZm9ybSBzcGVjKVxuICAgICAgIHNwZWMpKSkpXG5cbihkZWZuIHN1bW1hcml6ZS1rZXktY2xhdXNlIFtbYnJhbmNoIG1hdGNoXV1cbiAgKGNhc2UgYnJhbmNoXG4gICAgOnNpbXBsZVxuICAgICg6a3cgbWF0Y2gpXG5cbiAgICA6Y29tcG91bmRcbiAgICAoYXBwbHkgbGlzdFxuICAgICAgICAgICAoc3ltYm9sIChuYW1lICg6b3AgbWF0Y2gpKSlcbiAgICAgICAgICAgKG1hcCBzdW1tYXJpemUta2V5LWNsYXVzZSAoOmNsYXVzZXMgbWF0Y2gpKSkpKVxuXG4oZGVmbiBtaXNzaW5nLWtleSBbZm9ybV1cbiAgKGxldCBbW2JyYW5jaCBtYXRjaF0gKHMvY29uZm9ybSA6ZXhwb3VuZC5zcGVjL2NvbnRhaW5zLWtleS1wcmVkIChudGggZm9ybSAyKSldXG4gICAgKGNhc2UgYnJhbmNoXG4gICAgICA6c2ltcGxlXG4gICAgICAoOmt3IG1hdGNoKVxuXG4gICAgICA6Y29tcG91bmRcbiAgICAgIChzdW1tYXJpemUta2V5LWNsYXVzZSBbYnJhbmNoIG1hdGNoXSkpKSlcblxuOzs7OyBwdWJsaWNcblxuKGRlZm4gZWxpZGUtY29yZS1ucyBbc11cbiAgIz8oOmNsanMgKC0+IHNcbiAgICAgICAgICAgICAgIChzdHJpbmcvcmVwbGFjZSBcImNsanMuY29yZS9cIiBcIlwiKVxuICAgICAgICAgICAgICAgKHN0cmluZy9yZXBsYWNlIFwiY2xqcy9jb3JlL1wiIFwiXCIpKVxuICAgICA6Y2xqIChzdHJpbmcvcmVwbGFjZSBzIFwiY2xvanVyZS5jb3JlL1wiIFwiXCIpKSlcblxuKGRlZm4gZWxpZGUtc3BlYy1ucyBbc11cbiAgIz8oOmNsanMgKC0+IHNcbiAgICAgICAgICAgICAgIChzdHJpbmcvcmVwbGFjZSBcImNsanMuc3BlYy5hbHBoYS9cIiBcIlwiKVxuICAgICAgICAgICAgICAgKHN0cmluZy9yZXBsYWNlIFwiY2xqcy9zcGVjL2FscGhhXCIgXCJcIikpXG4gICAgIDpjbGogKHN0cmluZy9yZXBsYWNlIHMgXCJjbG9qdXJlLnNwZWMuYWxwaGEvXCIgXCJcIikpKVxuXG4oZGVmbiBwcHJpbnQtZm4gW2ZdXG4gICgtPiAjPyg6Y2xqXG4gICAgICAgICAobGV0IFtbXyBucy1uIGYtbl0gKHJlLW1hdGNoZXMgI1wiKC4qKVxcJCguKj8pKF9fWzAtOV0rKT9cIiAoc3RyIGYpKV1cbiAgICAgICAgICAgKGlmIChyZS1tYXRjaGVzICNcIl5mbl9fXFxkK1xcQC4qJFwiIGYtbilcbiAgICAgICAgICAgICBhbm9uLWZuLXN0clxuICAgICAgICAgICAgIChzdHJcbiAgICAgICAgICAgICAgKGNsb2p1cmUubWFpbi9kZW11bmdlIG5zLW4pIFwiL1wiXG4gICAgICAgICAgICAgIChjbG9qdXJlLm1haW4vZGVtdW5nZSBmLW4pKSkpXG4gICAgICAgICA6Y2xqc1xuICAgICAgICAgKGxldCBbZm4tcGFydHMgKHN0cmluZy9zcGxpdCAoc2Vjb25kIChyZS1maW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNcIm9iamVjdFxcWyhbXlxcKCBcXF1dKykuKihcXG58XFxdKT9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocHItc3RyIGYpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI1wiXFwkXCIpXG4gICAgICAgICAgICAgICBucy1uIChzdHJpbmcvam9pbiBcIi5cIiAoYnV0bGFzdCBmbi1wYXJ0cykpXG4gICAgICAgICAgICAgICBmbi1uICAobGFzdCBmbi1wYXJ0cyldXG4gICAgICAgICAgIChpZiAoZW1wdHk/IG5zLW4pXG4gICAgICAgICAgICAgYW5vbi1mbi1zdHJcbiAgICAgICAgICAgICAoc3RyXG4gICAgICAgICAgICAgIChkZW11bmdlLXN0ciBucy1uKSBcIi9cIlxuICAgICAgICAgICAgICAoZGVtdW5nZS1zdHIgZm4tbikpKSkpXG4gICAgICAoZWxpZGUtY29yZS1ucylcbiAgICAgIChzdHJpbmcvcmVwbGFjZSAjXCItLVxcZCtcIiBcIlwiKVxuICAgICAgKHN0cmluZy9yZXBsYWNlICNcIkBbYS16QS1aMC05XStcIiBcIlwiKSkpXG5cbiM/KDpjbGpzXG4gICAoZGVmbiBmb3JtYXQgW2ZtdCAmIGFyZ3NdXG4gICAgIChhcHBseSBnb29nLnN0cmluZy9mb3JtYXQgZm10IGFyZ3MpKVxuICAgOmNsaiAoZGVmIGZvcm1hdCBjbG9qdXJlLmNvcmUvZm9ybWF0KSlcblxuKHMvZmRlZiBwcHJpbnQtc3RyXG4gICAgICAgIDphcmdzIChzL2NhdCA6eCBhbnk/KVxuICAgICAgICA6cmV0IHN0cmluZz8pXG4oZGVmbiBwcHJpbnQtc3RyXG4gIFwiUmV0dXJucyB0aGUgcHJldHR5LXByaW50ZWQgc3RyaW5nXCJcbiAgW3hdXG4gIChpZiAoZm4/IHgpXG4gICAgKHBwcmludC1mbiB4KVxuICAgIChwcHJpbnQvd3JpdGUgeCA6c3RyZWFtIG5pbCkpKVxuXG4oZGVmbiBzaW1wbGUtc3BlYy1vci1uYW1lIFtzcGVjLW5hbWVdXG4gIChsZXQgW3NwZWMtc3RyIChlbGlkZS1zcGVjLW5zIChlbGlkZS1jb3JlLW5zIChwci1zdHIgKGV4cGFuZC1zcGVjIHNwZWMtbmFtZSkpKSldXG4gICAgKGlmIChvclxuICAgICAgICAgKDwgbWF4LXNwZWMtc3RyLXdpZHRoIChjb3VudCBzcGVjLXN0cikpXG4gICAgICAgICAoc3RyaW5nL2luY2x1ZGVzPyBzcGVjLXN0ciBcIlxcblwiKSlcbiAgICAgIHNwZWMtbmFtZVxuICAgICAgc3BlYy1zdHIpKSlcblxuKGRlZm4gcHJpbnQtc3BlYy1rZXlzIFtwcm9ibGVtc11cbiAgKGxldCBba2V5cyAoa2V5d29yZHMgKG1hcCAjKG1pc3Npbmcta2V5ICg6cHJlZCAlKSkgcHJvYmxlbXMpKV1cbiAgICAoaWYgKGFuZCAoZW1wdHk/ICg6ZXhwb3VuZC92aWEgKGZpcnN0IHByb2JsZW1zKSkpXG4gICAgICAgICAgICAgKHNvbWUgc2ltcGxlLWtleXdvcmQ/IGtleXMpKVxuICAgICAgOzsgVGhlIGNvbnRhaW5pbmcgc3BlYyBpcyBub3QgcHJlc2VudCBpbiB0aGUgcHJvYmxlbXNcbiAgICAgIDs7IGFuZCBhdCBsZWFzdCBvbmUga2V5IGlzIG5vdCBuYW1lc3BhY2VkLCBzbyB3ZSBjYW4ndCBmaWd1cmUgb3V0XG4gICAgICA7OyB0aGUgc3BlYyB0aGV5IGludGVuZGVkLlxuICAgICAgbmlsXG5cbiAgICAgICgtPj4gKGtleS0+c3BlYyBrZXlzIHByb2JsZW1zKVxuICAgICAgICAgICAobWFwIChmbiBbW2sgdl1dIHtcImtleVwiIGsgXCJzcGVjXCIgKHNpbXBsZS1zcGVjLW9yLW5hbWUgdil9KSlcbiAgICAgICAgICAgKHNvcnQtYnkgIyhnZXQgJSBcImtleVwiKSlcbiAgICAgICAgICAgKHBwcmludC9wcmludC10YWJsZSBbXCJrZXlcIiBcInNwZWNcIl0pXG4gICAgICAgICAgIHdpdGgtb3V0LXN0clxuICAgICAgICAgICBzdHJpbmcvdHJpbSkpKSlcblxuKGRlZm4gcHJpbnQtbWlzc2luZy1rZXlzIFtwcm9ibGVtc11cbiAgKGxldCBba2V5cy1jbGF1c2VzIChkaXN0aW5jdCAobWFwIChjb21wIG1pc3Npbmcta2V5IDpwcmVkKSBwcm9ibGVtcykpXVxuICAgIChpZiAoZXZlcnk/IGtleXdvcmQ/IGtleXMtY2xhdXNlcylcbiAgICAgIChzdHJpbmcvam9pbiBcIiwgXCIgKG1hcCAjKGFuc2kvY29sb3IgJSA6Y29ycmVjdC1rZXkpIChzb3J0IGtleXMtY2xhdXNlcykpKVxuICAgICAgKHN0ciBcIlxcblxcblwiXG4gICAgICAgICAgIChhbnNpL2NvbG9yIChwcHJpbnQtc3RyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaWYgKHNpbmdsZXRvbj8ga2V5cy1jbGF1c2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoZmlyc3Qga2V5cy1jbGF1c2VzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYXBwbHkgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5cy1jbGF1c2VzKSkpIDpjb3JyZWN0LWtleSkpKSkpXG5cbihzL2ZkZWYgbm8tdHJhaWxpbmctd2hpdGVzcGFjZVxuICAgICAgICA6YXJncyAocy9jYXQgOnMgc3RyaW5nPylcbiAgICAgICAgOnJldCBzdHJpbmc/KVxuKGRlZm4gbm8tdHJhaWxpbmctd2hpdGVzcGFjZVxuICBcIkdpdmVuIGFuIHBvdGVudGlhbGx5IG11bHRpLWxpbmUgc3RyaW5nLCByZXR1cm5zIHRoYXQgc3RyaW5nIHdpdGggYWxsXG4gIHRyYWlsaW5nIHdoaXRlc3BhY2UgcmVtb3ZlZC5cIlxuICBbc11cbiAgKGxldCBbcycgKC0+PiBzXG4gICAgICAgICAgICAgICAgc3RyaW5nL3NwbGl0LWxpbmVzXG4gICAgICAgICAgICAgICAgKG1hcCBzdHJpbmcvdHJpbXIpXG4gICAgICAgICAgICAgICAgKHN0cmluZy9qb2luIFwiXFxuXCIpKV1cbiAgICAoaWYgKD0gXFxuZXdsaW5lIChsYXN0IHMpKVxuICAgICAgKHN0ciBzJyBcIlxcblwiKVxuICAgICAgcycpKSlcblxuKHMvZmRlZiBpbmRlbnRcbiAgICAgICAgOmFyZ3MgKHMvY2F0XG4gICAgICAgICAgICAgICA6Zmlyc3QtbGluZS1pbmRlbnQtbGV2ZWwgKHMvPyBuYXQtaW50PylcbiAgICAgICAgICAgICAgIDppbmRlbnQtbGV2ZWwgKHMvPyBuYXQtaW50PylcbiAgICAgICAgICAgICAgIDpzIHN0cmluZz8pXG4gICAgICAgIDpyZXQgc3RyaW5nPylcbihkZWZuIGluZGVudFxuICBcIkdpdmVuIGFuIHBvdGVudGlhbGx5IG11bHRpLWxpbmUgc3RyaW5nLCByZXR1cm5zIHRoYXQgc3RyaW5nIGluZGVudGVkIGJ5XG4gICAnaW5kZW50LWxldmVsJyBzcGFjZXMuIE9wdGlvbmFsbHksIGNhbiBpbmRlbnQgZmlyc3QgbGluZSBhbmQgb3RoZXIgbGluZXNcbiAgIGRpZmZlcmVudCBhbW91bnRzLlwiXG4gIChbc11cbiAgIChpbmRlbnQgaW5kZW50LWxldmVsIHMpKVxuICAoW2luZGVudC1sZXZlbCBzXVxuICAgKGluZGVudCBpbmRlbnQtbGV2ZWwgaW5kZW50LWxldmVsIHMpKVxuICAoW2ZpcnN0LWxpbmUtaW5kZW50IHJlc3QtbGluZXMtaW5kZW50IHNdXG4gICAobGV0IFtbbGluZSAmIGxpbmVzXSAoc3RyaW5nL3NwbGl0LWxpbmVzIChzdHIgcykpXVxuICAgICAoLT4+IGxpbmVzXG4gICAgICAgICAgKG1hcCAjKHN0ciAoYXBwbHkgc3RyIChyZXBlYXQgcmVzdC1saW5lcy1pbmRlbnQgXCIgXCIpKSAlKSlcbiAgICAgICAgICAoaW50byBbKHN0ciAoYXBwbHkgc3RyIChyZXBlYXQgZmlyc3QtbGluZS1pbmRlbnQgXCIgXCIpKSBsaW5lKV0pXG4gICAgICAgICAgKHN0cmluZy9qb2luIFwiXFxuXCIpKSkpKVxuIl19