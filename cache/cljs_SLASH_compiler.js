goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
cljs.compiler._STAR_recompiled_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_source_map_data_gen_col_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
/**
 * Gets the part up to the first `.` of a namespace.
 * Returns the empty string for nil.
 * Returns the entire string if no `.` in namespace
 */
cljs.compiler.get_first_ns_segment = (function cljs$compiler$get_first_ns_segment(ns){
var ns__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
var idx = ns__$1.indexOf(".");
if(((-1) === idx)){
return ns__$1;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(ns__$1,(0),idx);
}
});
cljs.compiler.find_ns_starts_with = (function cljs$compiler$find_ns_starts_with(needle){
return cljs.core.reduce_kv((function (xs,ns,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(needle,cljs.compiler.get_first_ns_segment(ns))){
return cljs.core.reduced(needle);
} else {
return null;
}
}),null,new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__15341 = s;
var map__15341__$1 = (((((!((map__15341 == null))))?(((((map__15341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15341):map__15341);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15341__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15341__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15346 = info;
var map__15347 = G__15346;
var map__15347__$1 = (((((!((map__15347 == null))))?(((((map__15347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15347):map__15347);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15347__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15346__$1 = G__15346;
while(true){
var d__$2 = d__$1;
var map__15354 = G__15346__$1;
var map__15354__$1 = (((((!((map__15354 == null))))?(((((map__15354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15354):map__15354);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15354__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__17957 = (d__$2 + (1));
var G__17958 = shadow__$1;
d__$1 = G__17957;
G__15346__$1 = G__17958;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15367){
var map__15368 = p__15367;
var map__15368__$1 = (((((!((map__15368 == null))))?(((((map__15368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15368.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15368):map__15368);
var name_var = map__15368__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15368__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15368__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15371 = info;
var map__15371__$1 = (((((!((map__15371 == null))))?(((((map__15371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15371):map__15371);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15371__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15371__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__15385 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__15385) : cljs.compiler.munge.call(null,G__15385));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"$"].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(var_args){
var G__15425 = arguments.length;
switch (G__15425) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
}));

(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if((!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null)))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.compiler.hash_scope(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?["self__.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''):(((!((renamed == null))))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if(((field === true) || ((depth === (0))))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(munged_name),"__$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = (function (){var fexpr__15440 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__15440.cljs$core$IFn$_invoke$arity$1 ? fexpr__15440.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__15440.call(null,ss__$3));
})();
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
}));

(cljs.compiler.munge.cljs$lang$maxFixedArity = 2);

cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__15447 = cp;
switch (G__15447) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if(((((31) < cp)) && ((cp < (127))))){
return c;
} else {
var unpadded = cp.toString((16));
var pad = cljs.core.subs.cljs$core$IFn$_invoke$arity$2("0000",unpadded.length);
return ["\\u",pad,cljs.core.str.cljs$core$IFn$_invoke$arity$1(unpadded)].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__15458_17993 = cljs.core.seq(s);
var chunk__15459_17994 = null;
var count__15460_17995 = (0);
var i__15461_17996 = (0);
while(true){
if((i__15461_17996 < count__15460_17995)){
var c_17997 = chunk__15459_17994.cljs$core$IIndexed$_nth$arity$2(null,i__15461_17996);
sb.append(cljs.compiler.escape_char(c_17997));


var G__17998 = seq__15458_17993;
var G__17999 = chunk__15459_17994;
var G__18000 = count__15460_17995;
var G__18001 = (i__15461_17996 + (1));
seq__15458_17993 = G__17998;
chunk__15459_17994 = G__17999;
count__15460_17995 = G__18000;
i__15461_17996 = G__18001;
continue;
} else {
var temp__5735__auto___18002 = cljs.core.seq(seq__15458_17993);
if(temp__5735__auto___18002){
var seq__15458_18003__$1 = temp__5735__auto___18002;
if(cljs.core.chunked_seq_QMARK_(seq__15458_18003__$1)){
var c__4556__auto___18004 = cljs.core.chunk_first(seq__15458_18003__$1);
var G__18005 = cljs.core.chunk_rest(seq__15458_18003__$1);
var G__18006 = c__4556__auto___18004;
var G__18007 = cljs.core.count(c__4556__auto___18004);
var G__18008 = (0);
seq__15458_17993 = G__18005;
chunk__15459_17994 = G__18006;
count__15460_17995 = G__18007;
i__15461_17996 = G__18008;
continue;
} else {
var c_18009 = cljs.core.first(seq__15458_18003__$1);
sb.append(cljs.compiler.escape_char(c_18009));


var G__18010 = cljs.core.next(seq__15458_18003__$1);
var G__18011 = null;
var G__18012 = (0);
var G__18013 = (0);
seq__15458_17993 = G__18010;
chunk__15459_17994 = G__18011;
count__15460_17995 = G__18012;
i__15461_17996 = G__18013;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\""].join('');
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15474 = cljs.core.get_global_hierarchy;
return (fexpr__15474.cljs$core$IFn$_invoke$arity$0 ? fexpr__15474.cljs$core$IFn$_invoke$arity$0() : fexpr__15474.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15477_18039 = ast;
var map__15477_18040__$1 = (((((!((map__15477_18039 == null))))?(((((map__15477_18039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15477_18039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15477_18039):map__15477_18039);
var env_18041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15477_18040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_18041))){
var map__15481_18051 = env_18041;
var map__15481_18052__$1 = (((((!((map__15481_18051 == null))))?(((((map__15481_18051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15481_18051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15481_18051):map__15481_18051);
var line_18053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15481_18052__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18054 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15481_18052__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__15487 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__15492 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__15491 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__15491.cljs$core$IFn$_invoke$arity$1 ? fexpr__15491.cljs$core$IFn$_invoke$arity$1(G__15492) : fexpr__15491.call(null,G__15492));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15487,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15487;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_18053 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_18054)?(column_18054 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
}),cljs.core.PersistentVector.EMPTY));
}),cljs.core.sorted_map()));
}));
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast);
});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var G__15515 = arguments.length;
switch (G__15515) {
case 0:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___18074 = arguments.length;
var i__4737__auto___18075 = (0);
while(true){
if((i__4737__auto___18075 < len__4736__auto___18074)){
args_arr__4757__auto__.push((arguments[i__4737__auto___18075]));

var G__18077 = (i__4737__auto___18075 + (1));
i__4737__auto___18075 = G__18077;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(goog.isFunction(a)){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null));
} else {
var s_18086 = (function (){var G__15521 = a;
if((!(typeof a === 'string'))){
return G__15521.toString();
} else {
return G__15521;
}
})();
var temp__5739__auto___18087 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___18087 == null)){
} else {
var sm_data_18088 = temp__5739__auto___18087;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_18088,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__15501_SHARP_){
return (p1__15501_SHARP_ + s_18086.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18086], 0));

}
}
}
}

return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__15546 = cljs.core.seq(xs);
var chunk__15547 = null;
var count__15548 = (0);
var i__15549 = (0);
while(true){
if((i__15549 < count__15548)){
var x = chunk__15547.cljs$core$IIndexed$_nth$arity$2(null,i__15549);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__18092 = seq__15546;
var G__18093 = chunk__15547;
var G__18094 = count__15548;
var G__18095 = (i__15549 + (1));
seq__15546 = G__18092;
chunk__15547 = G__18093;
count__15548 = G__18094;
i__15549 = G__18095;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15546);
if(temp__5735__auto__){
var seq__15546__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15546__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15546__$1);
var G__18098 = cljs.core.chunk_rest(seq__15546__$1);
var G__18099 = c__4556__auto__;
var G__18100 = cljs.core.count(c__4556__auto__);
var G__18101 = (0);
seq__15546 = G__18098;
chunk__15547 = G__18099;
count__15548 = G__18100;
i__15549 = G__18101;
continue;
} else {
var x = cljs.core.first(seq__15546__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__18102 = cljs.core.next(seq__15546__$1);
var G__18103 = null;
var G__18104 = (0);
var G__18105 = (0);
seq__15546 = G__18102;
chunk__15547 = G__18103;
count__15548 = G__18104;
i__15549 = G__18105;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq15509){
var G__15510 = cljs.core.first(seq15509);
var seq15509__$1 = cljs.core.next(seq15509);
var G__15511 = cljs.core.first(seq15509__$1);
var seq15509__$2 = cljs.core.next(seq15509__$1);
var G__15512 = cljs.core.first(seq15509__$2);
var seq15509__$3 = cljs.core.next(seq15509__$2);
var G__15513 = cljs.core.first(seq15509__$3);
var seq15509__$4 = cljs.core.next(seq15509__$3);
var G__15514 = cljs.core.first(seq15509__$4);
var seq15509__$5 = cljs.core.next(seq15509__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15510,G__15511,G__15512,G__15513,G__15514,seq15509__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__15563){
var map__15564 = p__15563;
var map__15564__$1 = (((((!((map__15564 == null))))?(((((map__15564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15564):map__15564);
var m = map__15564__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15564__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15594 = arguments.length;
switch (G__15594) {
case 0:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___18115 = arguments.length;
var i__4737__auto___18116 = (0);
while(true){
if((i__4737__auto___18116 < len__4736__auto___18115)){
args_arr__4757__auto__.push((arguments[i__4737__auto___18116]));

var G__18117 = (i__4737__auto___18116 + (1));
i__4737__auto___18116 = G__18117;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1 = (function (a){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

return cljs.compiler._emitln();
}));

(cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,c,d,e,xs){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(a);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(b);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(c);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(d);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(e);

var seq__15619_18123 = cljs.core.seq(xs);
var chunk__15620_18124 = null;
var count__15621_18125 = (0);
var i__15622_18126 = (0);
while(true){
if((i__15622_18126 < count__15621_18125)){
var x_18128 = chunk__15620_18124.cljs$core$IIndexed$_nth$arity$2(null,i__15622_18126);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_18128);


var G__18129 = seq__15619_18123;
var G__18130 = chunk__15620_18124;
var G__18131 = count__15621_18125;
var G__18132 = (i__15622_18126 + (1));
seq__15619_18123 = G__18129;
chunk__15620_18124 = G__18130;
count__15621_18125 = G__18131;
i__15622_18126 = G__18132;
continue;
} else {
var temp__5735__auto___18133 = cljs.core.seq(seq__15619_18123);
if(temp__5735__auto___18133){
var seq__15619_18136__$1 = temp__5735__auto___18133;
if(cljs.core.chunked_seq_QMARK_(seq__15619_18136__$1)){
var c__4556__auto___18137 = cljs.core.chunk_first(seq__15619_18136__$1);
var G__18138 = cljs.core.chunk_rest(seq__15619_18136__$1);
var G__18139 = c__4556__auto___18137;
var G__18140 = cljs.core.count(c__4556__auto___18137);
var G__18141 = (0);
seq__15619_18123 = G__18138;
chunk__15620_18124 = G__18139;
count__15621_18125 = G__18140;
i__15622_18126 = G__18141;
continue;
} else {
var x_18142 = cljs.core.first(seq__15619_18136__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_18142);


var G__18143 = cljs.core.next(seq__15619_18136__$1);
var G__18144 = null;
var G__18145 = (0);
var G__18146 = (0);
seq__15619_18123 = G__18143;
chunk__15620_18124 = G__18144;
count__15621_18125 = G__18145;
i__15622_18126 = G__18146;
continue;
}
} else {
}
}
break;
}

return cljs.compiler._emitln();
}));

/** @this {Function} */
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15583){
var G__15585 = cljs.core.first(seq15583);
var seq15583__$1 = cljs.core.next(seq15583);
var G__15586 = cljs.core.first(seq15583__$1);
var seq15583__$2 = cljs.core.next(seq15583__$1);
var G__15587 = cljs.core.first(seq15583__$2);
var seq15583__$3 = cljs.core.next(seq15583__$2);
var G__15588 = cljs.core.first(seq15583__$3);
var seq15583__$4 = cljs.core.next(seq15583__$3);
var G__15590 = cljs.core.first(seq15583__$4);
var seq15583__$5 = cljs.core.next(seq15583__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15585,G__15586,G__15587,G__15588,G__15590,seq15583__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15659_18148 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15660_18149 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15661_18150 = true;
var _STAR_print_fn_STAR__temp_val__15662_18151 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15661_18150);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15662_18151);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15660_18149);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15659_18148);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15695 = cljs.core.get_global_hierarchy;
return (fexpr__15695.cljs$core$IFn$_invoke$arity$0 ? fexpr__15695.cljs$core$IFn$_invoke$arity$0() : fexpr__15695.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__15716 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15716,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15716,(1),null);
var G__15719 = ns;
var G__15720 = name;
var G__15721 = (function (){
var G__15722 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__15722) : cljs.compiler.emit_constant.call(null,G__15722));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__15719,G__15720,G__15721) : cljs.compiler.emit_record_value.call(null,G__15719,G__15720,G__15721));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__15724 = cljs.core.keys(x);
var G__15725 = cljs.core.vals(x);
var G__15726 = cljs.compiler.emit_constants_comma_sep;
var G__15727 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__15724,G__15725,G__15726,G__15727) : cljs.compiler.emit_map.call(null,G__15724,G__15725,G__15726,G__15727));
} else {
if(cljs.analyzer.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null,x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null,x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
} else {
return cljs.compiler.emit_constant_STAR_.cljs$core$IFn$_invoke$arity$1(x);

}
}
}
}
}
});
cljs.compiler.emit_constant = (function cljs$compiler$emit_constant(v){
var m = cljs.analyzer.elide_irrelevant_meta(cljs.core.meta(v));
if((!((cljs.core.seq(m) == null)))){
var G__15743 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__15744 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__15743,G__15744) : cljs.compiler.emit_with_meta.call(null,G__15743,G__15744));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__15774 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15774,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(pattern);
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Keyword(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant((cljs.core.truth_(ns)?[ns,"/",name].join(''):name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(kw));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emits_symbol = (function cljs$compiler$emits_symbol(sym){
var ns = cljs.core.namespace(sym);
var name = cljs.core.name(sym);
var symstr = (((!((ns == null))))?[ns,"/",name].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("new cljs.core.Symbol(");

cljs.compiler.emit_constant(ns);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(name);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(symstr);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(cljs.core.hash(sym));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");

cljs.compiler.emit_constant(null);

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__15801 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__15801) : x.call(null,G__15801));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var temp__5733__auto__ = (function (){var and__4115__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__4115__auto__)){
var G__15816 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__15816) : x.call(null,G__15816));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_symbol(x);
}
}));
cljs.compiler.emit_constants_comma_sep = (function cljs$compiler$emit_constants_comma_sep(cs){
return (function (){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,m){
if(cljs.core.even_QMARK_(i)){
return cljs.compiler.emit_constant(m);
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(m);
}
}),cljs.compiler.comma_sep(cs)));
});
});
cljs.compiler.array_map_threshold = (8);
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",date.getTime(),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__15839 = items;
var G__15840 = (function (p1__15834_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__15834_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__15839,G__15840) : cljs.compiler.emit_js_object.call(null,G__15839,G__15840));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15860){
var map__15862 = p__15860;
var map__15862__$1 = (((((!((map__15862 == null))))?(((((map__15862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15862):map__15862);
var ast = map__15862__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15862__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15862__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15862__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15870 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__15870__$1 = (((((!((map__15870 == null))))?(((((map__15870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15870):map__15870);
var cenv = map__15870__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15870__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__4126__auto__ = js_module_name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(ast))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ast));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var reserved = (function (){var G__15892 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__15902 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__15902) : cljs.compiler.es5_GT__EQ_.call(null,G__15902));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__15892,cljs.analyzer.es5_allowed);
} else {
return G__15892;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__15907 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__15907,reserved);
} else {
return G__15907;
}
})();
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__15917_18187 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15917_18188__$1 = (((G__15917_18187 instanceof cljs.core.Keyword))?G__15917_18187.fqn:null);
switch (G__15917_18188__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__4115__auto__;
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"]");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);
}

break;
default:
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(info__$2);

}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15958){
var map__15959 = p__15958;
var map__15959__$1 = (((((!((map__15959 == null))))?(((((map__15959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15959):map__15959);
var arg = map__15959__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15959__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15972 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15972__$1 = (((((!((map__15972 == null))))?(((((map__15972.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15972.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15972):map__15972);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15972__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15991){
var map__15992 = p__15991;
var map__15992__$1 = (((((!((map__15992 == null))))?(((((map__15992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15992):map__15992);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15992__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15992__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15992__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__16006_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16006_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__16029 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16029) : comma_sep.call(null,G__16029));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__16030 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16030) : comma_sep.call(null,G__16030));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__16040){
var map__16043 = p__16040;
var map__16043__$1 = (((((!((map__16043 == null))))?(((((map__16043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16043.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16043):map__16043);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16043__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16043__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16043__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__16088){
var map__16089 = p__16088;
var map__16089__$1 = (((((!((map__16089 == null))))?(((((map__16089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16089):map__16089);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16089__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16089__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__16100_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16100_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__16111 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16111) : comma_sep.call(null,G__16111));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__16117){
var map__16118 = p__16117;
var map__16118__$1 = (((((!((map__16118 == null))))?(((((map__16118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16118):map__16118);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16118__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___18227 = cljs.core.seq(items);
if(temp__5735__auto___18227){
var items_18228__$1 = temp__5735__auto___18227;
var vec__16128_18229 = items_18228__$1;
var seq__16129_18230 = cljs.core.seq(vec__16128_18229);
var first__16130_18231 = cljs.core.first(seq__16129_18230);
var seq__16129_18233__$1 = cljs.core.next(seq__16129_18230);
var vec__16131_18234 = first__16130_18231;
var k_18235 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16131_18234,(0),null);
var v_18236 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16131_18234,(1),null);
var r_18237 = seq__16129_18233__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_18235),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_18236) : emit_js_object_val.call(null,v_18236)));

var seq__16134_18241 = cljs.core.seq(r_18237);
var chunk__16135_18242 = null;
var count__16136_18243 = (0);
var i__16137_18244 = (0);
while(true){
if((i__16137_18244 < count__16136_18243)){
var vec__16155_18251 = chunk__16135_18242.cljs$core$IIndexed$_nth$arity$2(null,i__16137_18244);
var k_18252__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16155_18251,(0),null);
var v_18254__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16155_18251,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_18252__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_18254__$1) : emit_js_object_val.call(null,v_18254__$1)));


var G__18262 = seq__16134_18241;
var G__18263 = chunk__16135_18242;
var G__18264 = count__16136_18243;
var G__18265 = (i__16137_18244 + (1));
seq__16134_18241 = G__18262;
chunk__16135_18242 = G__18263;
count__16136_18243 = G__18264;
i__16137_18244 = G__18265;
continue;
} else {
var temp__5735__auto___18266__$1 = cljs.core.seq(seq__16134_18241);
if(temp__5735__auto___18266__$1){
var seq__16134_18267__$1 = temp__5735__auto___18266__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16134_18267__$1)){
var c__4556__auto___18269 = cljs.core.chunk_first(seq__16134_18267__$1);
var G__18270 = cljs.core.chunk_rest(seq__16134_18267__$1);
var G__18271 = c__4556__auto___18269;
var G__18272 = cljs.core.count(c__4556__auto___18269);
var G__18273 = (0);
seq__16134_18241 = G__18270;
chunk__16135_18242 = G__18271;
count__16136_18243 = G__18272;
i__16137_18244 = G__18273;
continue;
} else {
var vec__16162_18274 = cljs.core.first(seq__16134_18267__$1);
var k_18275__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162_18274,(0),null);
var v_18276__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162_18274,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_18275__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_18276__$1) : emit_js_object_val.call(null,v_18276__$1)));


var G__18277 = cljs.core.next(seq__16134_18267__$1);
var G__18278 = null;
var G__18279 = (0);
var G__18280 = (0);
seq__16134_18241 = G__18277;
chunk__16135_18242 = G__18278;
count__16136_18243 = G__18279;
i__16137_18244 = G__18280;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_js_array = (function cljs$compiler$emit_js_array(items,comma_sep){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__16165){
var map__16166 = p__16165;
var map__16166__$1 = (((((!((map__16166 == null))))?(((((map__16166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16166):map__16166);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16166__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16166__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__16176){
var map__16177 = p__16176;
var map__16177__$1 = (((((!((map__16177 == null))))?(((((map__16177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16177):map__16177);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__16209){
var map__16210 = p__16209;
var map__16210__$1 = (((((!((map__16210 == null))))?(((((map__16210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16210):map__16210);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16210__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__16223){
var map__16228 = p__16223;
var map__16228__$1 = (((((!((map__16228 == null))))?(((((map__16228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16228):map__16228);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16228__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16228__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__16245 = cljs.analyzer.unwrap_quote(expr);
var map__16245__$1 = (((((!((map__16245 == null))))?(((((map__16245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16245):map__16245);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16245__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16245__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16245__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842)))?(function (){var and__4115__auto__ = form;
if(cljs.core.truth_(and__4115__auto__)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__4115__auto__;
}
})():false);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__16261 = cljs.analyzer.unwrap_quote(expr);
var map__16261__$1 = (((((!((map__16261 == null))))?(((((map__16261.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16261.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16261):map__16261);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16261__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16261__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16261__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
if((!((const_expr == null)))){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null,const_expr));
} else {
return false;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4126__auto__ = (function (){var fexpr__16275 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__16275.cljs$core$IFn$_invoke$arity$1 ? fexpr__16275.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16275.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__16280){
var map__16281 = p__16280;
var map__16281__$1 = (((((!((map__16281 == null))))?(((((map__16281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16281.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16281):map__16281);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16281__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4126__auto__ = unchecked;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then);
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(else$);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",((checked)?"cljs.core.truth_":null),"(",test,")?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(cljs.core.truth_(",test,")){");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(",test,"){");
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(then,"} else {");

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(else$,"}");
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__16298){
var map__16299 = p__16298;
var map__16299__$1 = (((((!((map__16299 == null))))?(((((map__16299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16299):map__16299);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16299__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16299__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16299__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function(){");
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",gs,";");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("switch (",v,") {");

var seq__16310_18340 = cljs.core.seq(nodes);
var chunk__16311_18341 = null;
var count__16312_18342 = (0);
var i__16313_18343 = (0);
while(true){
if((i__16313_18343 < count__16312_18342)){
var map__16355_18344 = chunk__16311_18341.cljs$core$IIndexed$_nth$arity$2(null,i__16313_18343);
var map__16355_18345__$1 = (((((!((map__16355_18344 == null))))?(((((map__16355_18344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16355_18344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16355_18344):map__16355_18344);
var ts_18346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355_18345__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16356_18347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355_18345__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16356_18348__$1 = (((((!((map__16356_18347 == null))))?(((((map__16356_18347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16356_18347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16356_18347):map__16356_18347);
var then_18349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16356_18348__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16362_18363 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_18346));
var chunk__16363_18364 = null;
var count__16364_18365 = (0);
var i__16365_18366 = (0);
while(true){
if((i__16365_18366 < count__16364_18365)){
var test_18367 = chunk__16363_18364.cljs$core$IIndexed$_nth$arity$2(null,i__16365_18366);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18367,":");


var G__18369 = seq__16362_18363;
var G__18370 = chunk__16363_18364;
var G__18371 = count__16364_18365;
var G__18372 = (i__16365_18366 + (1));
seq__16362_18363 = G__18369;
chunk__16363_18364 = G__18370;
count__16364_18365 = G__18371;
i__16365_18366 = G__18372;
continue;
} else {
var temp__5735__auto___18377 = cljs.core.seq(seq__16362_18363);
if(temp__5735__auto___18377){
var seq__16362_18378__$1 = temp__5735__auto___18377;
if(cljs.core.chunked_seq_QMARK_(seq__16362_18378__$1)){
var c__4556__auto___18379 = cljs.core.chunk_first(seq__16362_18378__$1);
var G__18380 = cljs.core.chunk_rest(seq__16362_18378__$1);
var G__18381 = c__4556__auto___18379;
var G__18382 = cljs.core.count(c__4556__auto___18379);
var G__18383 = (0);
seq__16362_18363 = G__18380;
chunk__16363_18364 = G__18381;
count__16364_18365 = G__18382;
i__16365_18366 = G__18383;
continue;
} else {
var test_18384 = cljs.core.first(seq__16362_18378__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18384,":");


var G__18385 = cljs.core.next(seq__16362_18378__$1);
var G__18386 = null;
var G__18387 = (0);
var G__18388 = (0);
seq__16362_18363 = G__18385;
chunk__16363_18364 = G__18386;
count__16364_18365 = G__18387;
i__16365_18366 = G__18388;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_18349);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_18349);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__18389 = seq__16310_18340;
var G__18390 = chunk__16311_18341;
var G__18391 = count__16312_18342;
var G__18392 = (i__16313_18343 + (1));
seq__16310_18340 = G__18389;
chunk__16311_18341 = G__18390;
count__16312_18342 = G__18391;
i__16313_18343 = G__18392;
continue;
} else {
var temp__5735__auto___18394 = cljs.core.seq(seq__16310_18340);
if(temp__5735__auto___18394){
var seq__16310_18396__$1 = temp__5735__auto___18394;
if(cljs.core.chunked_seq_QMARK_(seq__16310_18396__$1)){
var c__4556__auto___18397 = cljs.core.chunk_first(seq__16310_18396__$1);
var G__18399 = cljs.core.chunk_rest(seq__16310_18396__$1);
var G__18400 = c__4556__auto___18397;
var G__18401 = cljs.core.count(c__4556__auto___18397);
var G__18402 = (0);
seq__16310_18340 = G__18399;
chunk__16311_18341 = G__18400;
count__16312_18342 = G__18401;
i__16313_18343 = G__18402;
continue;
} else {
var map__16378_18407 = cljs.core.first(seq__16310_18396__$1);
var map__16378_18408__$1 = (((((!((map__16378_18407 == null))))?(((((map__16378_18407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16378_18407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16378_18407):map__16378_18407);
var ts_18409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16378_18408__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16379_18410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16378_18408__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16379_18411__$1 = (((((!((map__16379_18410 == null))))?(((((map__16379_18410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16379_18410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16379_18410):map__16379_18410);
var then_18412 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16379_18411__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16391_18417 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_18409));
var chunk__16392_18418 = null;
var count__16393_18419 = (0);
var i__16394_18420 = (0);
while(true){
if((i__16394_18420 < count__16393_18419)){
var test_18421 = chunk__16392_18418.cljs$core$IIndexed$_nth$arity$2(null,i__16394_18420);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18421,":");


var G__18424 = seq__16391_18417;
var G__18425 = chunk__16392_18418;
var G__18426 = count__16393_18419;
var G__18427 = (i__16394_18420 + (1));
seq__16391_18417 = G__18424;
chunk__16392_18418 = G__18425;
count__16393_18419 = G__18426;
i__16394_18420 = G__18427;
continue;
} else {
var temp__5735__auto___18428__$1 = cljs.core.seq(seq__16391_18417);
if(temp__5735__auto___18428__$1){
var seq__16391_18430__$1 = temp__5735__auto___18428__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16391_18430__$1)){
var c__4556__auto___18434 = cljs.core.chunk_first(seq__16391_18430__$1);
var G__18435 = cljs.core.chunk_rest(seq__16391_18430__$1);
var G__18436 = c__4556__auto___18434;
var G__18437 = cljs.core.count(c__4556__auto___18434);
var G__18438 = (0);
seq__16391_18417 = G__18435;
chunk__16392_18418 = G__18436;
count__16393_18419 = G__18437;
i__16394_18420 = G__18438;
continue;
} else {
var test_18439 = cljs.core.first(seq__16391_18430__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18439,":");


var G__18440 = cljs.core.next(seq__16391_18430__$1);
var G__18441 = null;
var G__18442 = (0);
var G__18443 = (0);
seq__16391_18417 = G__18440;
chunk__16392_18418 = G__18441;
count__16393_18419 = G__18442;
i__16394_18420 = G__18443;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_18412);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_18412);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__18446 = cljs.core.next(seq__16310_18396__$1);
var G__18447 = null;
var G__18448 = (0);
var G__18449 = (0);
seq__16310_18340 = G__18446;
chunk__16311_18341 = G__18447;
count__16312_18342 = G__18448;
i__16313_18343 = G__18449;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",default$);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(default$);
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",gs,";})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16421){
var map__16422 = p__16421;
var map__16422__$1 = (((((!((map__16422 == null))))?(((((map__16422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16422):map__16422);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16422__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16422__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function(){throw ",throw$,"})()");
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw ",throw$,";");
}
}));
cljs.compiler.base_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 15, ["boolean",null,"object",null,"*",null,"string",null,"Object",null,"Number",null,"null",null,"Date",null,"number",null,"String",null,"RegExp",null,"...*",null,"Array",null,"array",null,"Boolean",null], null), null);
cljs.compiler.mapped_types = new cljs.core.PersistentArrayMap(null, 1, ["nil","null"], null);
cljs.compiler.resolve_type = (function cljs$compiler$resolve_type(env,t){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.base_types,t))){
return t;
} else {
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler.mapped_types,t);
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"!"))){
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16439 = env;
var G__16440 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16439,G__16440) : cljs.compiler.resolve_type.call(null,G__16439,G__16440));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__16445 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16445,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16445,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16428_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__16428_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__16428_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__16448 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__16448,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__16448;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16458 = env;
var G__16459 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16458,G__16459) : cljs.compiler.resolve_type.call(null,G__16458,G__16459));
})()),"="].join('');
} else {
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(t)))));

}
}
}
}
}
}
});
cljs.compiler.resolve_types = (function cljs$compiler$resolve_types(env,ts){
var ts__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(clojure.string.trim(ts),(1),(cljs.core.count(ts) - (1)));
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(ts__$1,/\|/);
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16464_SHARP_){
return cljs.compiler.resolve_type(env,p1__16464_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__16472 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16473 = cljs.core.seq(vec__16472);
var first__16474 = cljs.core.first(seq__16473);
var seq__16473__$1 = cljs.core.next(seq__16473);
var p = first__16474;
var first__16474__$1 = cljs.core.first(seq__16473__$1);
var seq__16473__$2 = cljs.core.next(seq__16473__$1);
var ts = first__16474__$1;
var first__16474__$2 = cljs.core.first(seq__16473__$2);
var seq__16473__$3 = cljs.core.next(seq__16473__$2);
var n = first__16474__$2;
var xs = seq__16473__$3;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__16481 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16482 = cljs.core.seq(vec__16481);
var first__16483 = cljs.core.first(seq__16482);
var seq__16482__$1 = cljs.core.next(seq__16482);
var p = first__16483;
var first__16483__$1 = cljs.core.first(seq__16482__$1);
var seq__16482__$2 = cljs.core.next(seq__16482__$1);
var ts = first__16483__$1;
var xs = seq__16482__$2;
if(cljs.core.truth_(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p))?(function (){var and__4115__auto__ = ts;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(ts,"{");
} else {
return and__4115__auto__;
}
})():false))){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts)], null),xs));
} else {
return line;
}
} else {
return line;

}
}
});
cljs.compiler.checking_types_QMARK_ = (function cljs$compiler$checking_types_QMARK_(){
var G__16502 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__16501 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__16501.cljs$core$IFn$_invoke$arity$1 ? fexpr__16501.cljs$core$IFn$_invoke$arity$1(G__16502) : fexpr__16501.call(null,G__16502));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__16517 = arguments.length;
switch (G__16517) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2 = (function (doc,jsdoc){
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(null,doc,jsdoc);
}));

(cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3 = (function (env,doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = (function cljs$compiler$print_comment_lines(e){
var vec__16554 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16511_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__16511_SHARP_);
} else {
return p1__16511_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__16555 = cljs.core.seq(vec__16554);
var first__16556 = cljs.core.first(seq__16555);
var seq__16555__$1 = cljs.core.next(seq__16555);
var x = first__16556;
var ys = seq__16555__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__16561 = cljs.core.seq(ys);
var chunk__16562 = null;
var count__16563 = (0);
var i__16564 = (0);
while(true){
if((i__16564 < count__16563)){
var next_line = chunk__16562.cljs$core$IIndexed$_nth$arity$2(null,i__16564);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__18502 = seq__16561;
var G__18503 = chunk__16562;
var G__18504 = count__16563;
var G__18505 = (i__16564 + (1));
seq__16561 = G__18502;
chunk__16562 = G__18503;
count__16563 = G__18504;
i__16564 = G__18505;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16561);
if(temp__5735__auto__){
var seq__16561__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16561__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16561__$1);
var G__18507 = cljs.core.chunk_rest(seq__16561__$1);
var G__18508 = c__4556__auto__;
var G__18509 = cljs.core.count(c__4556__auto__);
var G__18510 = (0);
seq__16561 = G__18507;
chunk__16562 = G__18508;
count__16563 = G__18509;
i__16564 = G__18510;
continue;
} else {
var next_line = cljs.core.first(seq__16561__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__18511 = cljs.core.next(seq__16561__$1);
var G__18512 = null;
var G__18513 = (0);
var G__18514 = (0);
seq__16561 = G__18511;
chunk__16562 = G__18512;
count__16563 = G__18513;
i__16564 = G__18514;
continue;
}
} else {
return null;
}
}
break;
}
});
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

var seq__16577_18516 = cljs.core.seq(docs__$2);
var chunk__16578_18517 = null;
var count__16579_18518 = (0);
var i__16580_18519 = (0);
while(true){
if((i__16580_18519 < count__16579_18518)){
var e_18521 = chunk__16578_18517.cljs$core$IIndexed$_nth$arity$2(null,i__16580_18519);
if(cljs.core.truth_(e_18521)){
print_comment_lines(e_18521);
} else {
}


var G__18522 = seq__16577_18516;
var G__18523 = chunk__16578_18517;
var G__18524 = count__16579_18518;
var G__18525 = (i__16580_18519 + (1));
seq__16577_18516 = G__18522;
chunk__16578_18517 = G__18523;
count__16579_18518 = G__18524;
i__16580_18519 = G__18525;
continue;
} else {
var temp__5735__auto___18526 = cljs.core.seq(seq__16577_18516);
if(temp__5735__auto___18526){
var seq__16577_18527__$1 = temp__5735__auto___18526;
if(cljs.core.chunked_seq_QMARK_(seq__16577_18527__$1)){
var c__4556__auto___18528 = cljs.core.chunk_first(seq__16577_18527__$1);
var G__18529 = cljs.core.chunk_rest(seq__16577_18527__$1);
var G__18530 = c__4556__auto___18528;
var G__18531 = cljs.core.count(c__4556__auto___18528);
var G__18532 = (0);
seq__16577_18516 = G__18529;
chunk__16578_18517 = G__18530;
count__16579_18518 = G__18531;
i__16580_18519 = G__18532;
continue;
} else {
var e_18534 = cljs.core.first(seq__16577_18527__$1);
if(cljs.core.truth_(e_18534)){
print_comment_lines(e_18534);
} else {
}


var G__18535 = cljs.core.next(seq__16577_18527__$1);
var G__18536 = null;
var G__18537 = (0);
var G__18538 = (0);
seq__16577_18516 = G__18535;
chunk__16578_18517 = G__18536;
count__16579_18518 = G__18537;
i__16580_18519 = G__18538;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" */");
} else {
return null;
}
}));

(cljs.compiler.emit_comment.cljs$lang$maxFixedArity = 3);

cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return ((typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number'));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__4115__auto__ = cljs.core.some((function (p1__16597_SHARP_){
return goog.string.startsWith(p1__16597_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = opts;
if(cljs.core.truth_(and__4115__auto____$1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478))){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return false;
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16615){
var map__16616 = p__16615;
var map__16616__$1 = (((((!((map__16616 == null))))?(((((map__16616.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16616.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16616):map__16616);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16616__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__4126__auto__ = init;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env);
}
})())){
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3(env,doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(goog_define)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["@define {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog_define),"}"].join('')], null):null),jsdoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("return (");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(var$);

if(cljs.core.truth_(init)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5733__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5733__auto__)){
var define = temp__5733__auto__;
return define;
} else {
return init;
}
})());
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("; return (");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"the-var","the-var",1428415613),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");})()");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(")");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");");
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return test;
} else {
return and__4115__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(var$,".cljs$lang$test = ",test,";");
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16651){
var map__16653 = p__16651;
var map__16653__$1 = (((((!((map__16653 == null))))?(((((map__16653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16653):map__16653);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16653__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16653__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16653__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__16658_18573 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__16659_18574 = null;
var count__16660_18575 = (0);
var i__16661_18576 = (0);
while(true){
if((i__16661_18576 < count__16660_18575)){
var vec__16680_18578 = chunk__16659_18574.cljs$core$IIndexed$_nth$arity$2(null,i__16661_18576);
var i_18579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16680_18578,(0),null);
var param_18580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16680_18578,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_18580);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__18583 = seq__16658_18573;
var G__18584 = chunk__16659_18574;
var G__18585 = count__16660_18575;
var G__18586 = (i__16661_18576 + (1));
seq__16658_18573 = G__18583;
chunk__16659_18574 = G__18584;
count__16660_18575 = G__18585;
i__16661_18576 = G__18586;
continue;
} else {
var temp__5735__auto___18588 = cljs.core.seq(seq__16658_18573);
if(temp__5735__auto___18588){
var seq__16658_18592__$1 = temp__5735__auto___18588;
if(cljs.core.chunked_seq_QMARK_(seq__16658_18592__$1)){
var c__4556__auto___18593 = cljs.core.chunk_first(seq__16658_18592__$1);
var G__18594 = cljs.core.chunk_rest(seq__16658_18592__$1);
var G__18595 = c__4556__auto___18593;
var G__18596 = cljs.core.count(c__4556__auto___18593);
var G__18597 = (0);
seq__16658_18573 = G__18594;
chunk__16659_18574 = G__18595;
count__16660_18575 = G__18596;
i__16661_18576 = G__18597;
continue;
} else {
var vec__16696_18598 = cljs.core.first(seq__16658_18592__$1);
var i_18599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16696_18598,(0),null);
var param_18600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16696_18598,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_18600);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__18602 = cljs.core.next(seq__16658_18592__$1);
var G__18603 = null;
var G__18604 = (0);
var G__18605 = (0);
seq__16658_18573 = G__18602;
chunk__16659_18574 = G__18603;
count__16660_18575 = G__18604;
i__16661_18576 = G__18605;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.first(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.rest(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__16699_18611 = cljs.core.seq(params);
var chunk__16700_18612 = null;
var count__16701_18613 = (0);
var i__16702_18614 = (0);
while(true){
if((i__16702_18614 < count__16701_18613)){
var param_18615 = chunk__16700_18612.cljs$core$IIndexed$_nth$arity$2(null,i__16702_18614);
cljs.compiler.emit(param_18615);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18615,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18620 = seq__16699_18611;
var G__18621 = chunk__16700_18612;
var G__18622 = count__16701_18613;
var G__18623 = (i__16702_18614 + (1));
seq__16699_18611 = G__18620;
chunk__16700_18612 = G__18621;
count__16701_18613 = G__18622;
i__16702_18614 = G__18623;
continue;
} else {
var temp__5735__auto___18625 = cljs.core.seq(seq__16699_18611);
if(temp__5735__auto___18625){
var seq__16699_18626__$1 = temp__5735__auto___18625;
if(cljs.core.chunked_seq_QMARK_(seq__16699_18626__$1)){
var c__4556__auto___18627 = cljs.core.chunk_first(seq__16699_18626__$1);
var G__18628 = cljs.core.chunk_rest(seq__16699_18626__$1);
var G__18629 = c__4556__auto___18627;
var G__18630 = cljs.core.count(c__4556__auto___18627);
var G__18631 = (0);
seq__16699_18611 = G__18628;
chunk__16700_18612 = G__18629;
count__16701_18613 = G__18630;
i__16702_18614 = G__18631;
continue;
} else {
var param_18632 = cljs.core.first(seq__16699_18626__$1);
cljs.compiler.emit(param_18632);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18632,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18633 = cljs.core.next(seq__16699_18626__$1);
var G__18634 = null;
var G__18635 = (0);
var G__18636 = (0);
seq__16699_18611 = G__18633;
chunk__16700_18612 = G__18634;
count__16701_18613 = G__18635;
i__16702_18614 = G__18636;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = cljs.core.seq(",arglist,");");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name,"(");

var seq__16723_18645 = cljs.core.seq(params);
var chunk__16724_18646 = null;
var count__16725_18647 = (0);
var i__16726_18648 = (0);
while(true){
if((i__16726_18648 < count__16725_18647)){
var param_18652 = chunk__16724_18646.cljs$core$IIndexed$_nth$arity$2(null,i__16726_18648);
cljs.compiler.emit(param_18652);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18652,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18653 = seq__16723_18645;
var G__18654 = chunk__16724_18646;
var G__18655 = count__16725_18647;
var G__18656 = (i__16726_18648 + (1));
seq__16723_18645 = G__18653;
chunk__16724_18646 = G__18654;
count__16725_18647 = G__18655;
i__16726_18648 = G__18656;
continue;
} else {
var temp__5735__auto___18657 = cljs.core.seq(seq__16723_18645);
if(temp__5735__auto___18657){
var seq__16723_18658__$1 = temp__5735__auto___18657;
if(cljs.core.chunked_seq_QMARK_(seq__16723_18658__$1)){
var c__4556__auto___18659 = cljs.core.chunk_first(seq__16723_18658__$1);
var G__18660 = cljs.core.chunk_rest(seq__16723_18658__$1);
var G__18661 = c__4556__auto___18659;
var G__18662 = cljs.core.count(c__4556__auto___18659);
var G__18663 = (0);
seq__16723_18645 = G__18660;
chunk__16724_18646 = G__18661;
count__16725_18647 = G__18662;
i__16726_18648 = G__18663;
continue;
} else {
var param_18664 = cljs.core.first(seq__16723_18658__$1);
cljs.compiler.emit(param_18664);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18664,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18665 = cljs.core.next(seq__16723_18658__$1);
var G__18666 = null;
var G__18667 = (0);
var G__18668 = (0);
seq__16723_18645 = G__18665;
chunk__16724_18646 = G__18666;
count__16725_18647 = G__18667;
i__16726_18648 = G__18668;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(");");
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__16745 = cljs.core.seq(params);
var chunk__16746 = null;
var count__16747 = (0);
var i__16748 = (0);
while(true){
if((i__16748 < count__16747)){
var param = chunk__16746.cljs$core$IIndexed$_nth$arity$2(null,i__16748);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18671 = seq__16745;
var G__18672 = chunk__16746;
var G__18673 = count__16747;
var G__18674 = (i__16748 + (1));
seq__16745 = G__18671;
chunk__16746 = G__18672;
count__16747 = G__18673;
i__16748 = G__18674;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16745);
if(temp__5735__auto__){
var seq__16745__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16745__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16745__$1);
var G__18676 = cljs.core.chunk_rest(seq__16745__$1);
var G__18677 = c__4556__auto__;
var G__18678 = cljs.core.count(c__4556__auto__);
var G__18679 = (0);
seq__16745 = G__18676;
chunk__16746 = G__18677;
count__16747 = G__18678;
i__16748 = G__18679;
continue;
} else {
var param = cljs.core.first(seq__16745__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18682 = cljs.core.next(seq__16745__$1);
var G__18683 = null;
var G__18684 = (0);
var G__18685 = (0);
seq__16745 = G__18682;
chunk__16746 = G__18683;
count__16747 = G__18684;
i__16748 = G__18685;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16753){
var map__16755 = p__16753;
var map__16755__$1 = (((((!((map__16755 == null))))?(((((map__16755.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16755.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16755):map__16755);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16755__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16755__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16755__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16755__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16755__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16755__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"(");

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 *   Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if((((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice)))){
} else {
throw (new Error("Assert failed: (and (>= startslice 0) (integer? startslice))"));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__i"].join('');
var a = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),"__a"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("var ",i," = 0, ",a," = new Array(arguments.length -  ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("while (",i," < ",a,".length) {",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16778){
var map__16779 = p__16778;
var map__16779__$1 = (((((!((map__16779 == null))))?(((((map__16779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16779):map__16779);
var f = map__16779__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16779__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_18702__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_18703 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_18702__$1);
var delegate_name_18704 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18703),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_18704," = function (");

var seq__16786_18707 = cljs.core.seq(params);
var chunk__16787_18708 = null;
var count__16788_18709 = (0);
var i__16789_18710 = (0);
while(true){
if((i__16789_18710 < count__16788_18709)){
var param_18711 = chunk__16787_18708.cljs$core$IIndexed$_nth$arity$2(null,i__16789_18710);
cljs.compiler.emit(param_18711);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18711,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18718 = seq__16786_18707;
var G__18719 = chunk__16787_18708;
var G__18720 = count__16788_18709;
var G__18721 = (i__16789_18710 + (1));
seq__16786_18707 = G__18718;
chunk__16787_18708 = G__18719;
count__16788_18709 = G__18720;
i__16789_18710 = G__18721;
continue;
} else {
var temp__5735__auto___18726 = cljs.core.seq(seq__16786_18707);
if(temp__5735__auto___18726){
var seq__16786_18727__$1 = temp__5735__auto___18726;
if(cljs.core.chunked_seq_QMARK_(seq__16786_18727__$1)){
var c__4556__auto___18736 = cljs.core.chunk_first(seq__16786_18727__$1);
var G__18737 = cljs.core.chunk_rest(seq__16786_18727__$1);
var G__18738 = c__4556__auto___18736;
var G__18739 = cljs.core.count(c__4556__auto___18736);
var G__18740 = (0);
seq__16786_18707 = G__18737;
chunk__16787_18708 = G__18738;
count__16788_18709 = G__18739;
i__16789_18710 = G__18740;
continue;
} else {
var param_18741 = cljs.core.first(seq__16786_18727__$1);
cljs.compiler.emit(param_18741);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18741,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18742 = cljs.core.next(seq__16786_18727__$1);
var G__18743 = null;
var G__18744 = (0);
var G__18745 = (0);
seq__16786_18707 = G__18742;
chunk__16787_18708 = G__18743;
count__16788_18709 = G__18744;
i__16789_18710 = G__18745;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_18703," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_18757 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_18757,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_18704,".call(this,");

var seq__16809_18758 = cljs.core.seq(params);
var chunk__16810_18759 = null;
var count__16811_18760 = (0);
var i__16812_18761 = (0);
while(true){
if((i__16812_18761 < count__16811_18760)){
var param_18763 = chunk__16810_18759.cljs$core$IIndexed$_nth$arity$2(null,i__16812_18761);
cljs.compiler.emit(param_18763);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18763,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18764 = seq__16809_18758;
var G__18765 = chunk__16810_18759;
var G__18766 = count__16811_18760;
var G__18767 = (i__16812_18761 + (1));
seq__16809_18758 = G__18764;
chunk__16810_18759 = G__18765;
count__16811_18760 = G__18766;
i__16812_18761 = G__18767;
continue;
} else {
var temp__5735__auto___18768 = cljs.core.seq(seq__16809_18758);
if(temp__5735__auto___18768){
var seq__16809_18770__$1 = temp__5735__auto___18768;
if(cljs.core.chunked_seq_QMARK_(seq__16809_18770__$1)){
var c__4556__auto___18773 = cljs.core.chunk_first(seq__16809_18770__$1);
var G__18774 = cljs.core.chunk_rest(seq__16809_18770__$1);
var G__18775 = c__4556__auto___18773;
var G__18776 = cljs.core.count(c__4556__auto___18773);
var G__18777 = (0);
seq__16809_18758 = G__18774;
chunk__16810_18759 = G__18775;
count__16811_18760 = G__18776;
i__16812_18761 = G__18777;
continue;
} else {
var param_18778 = cljs.core.first(seq__16809_18770__$1);
cljs.compiler.emit(param_18778);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18778,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18780 = cljs.core.next(seq__16809_18770__$1);
var G__18781 = null;
var G__18782 = (0);
var G__18783 = (0);
seq__16809_18758 = G__18780;
chunk__16810_18759 = G__18781;
count__16811_18760 = G__18782;
i__16812_18761 = G__18783;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18703,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_18703,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_18702__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18703,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_18704,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_18703,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16835){
var map__16837 = p__16835;
var map__16837__$1 = (((((!((map__16837 == null))))?(((((map__16837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16837):map__16837);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16829_SHARP_){
var and__4115__auto__ = p1__16829_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16829_SHARP_));
} else {
return and__4115__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__4126__auto__ = in_loop;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.seq(recur_params);
}
})())?cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loop_lets], 0)):null))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_18807__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_18808 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_18807__$1);
var maxparams_18809 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_18810 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18808),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_18811 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__16830_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16830_SHARP_)));
}),cljs.core.seq(mmap_18810));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_18808," = null;");

var seq__16851_18812 = cljs.core.seq(ms_18811);
var chunk__16852_18813 = null;
var count__16853_18814 = (0);
var i__16854_18815 = (0);
while(true){
if((i__16854_18815 < count__16853_18814)){
var vec__16877_18818 = chunk__16852_18813.cljs$core$IIndexed$_nth$arity$2(null,i__16854_18815);
var n_18819 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16877_18818,(0),null);
var meth_18820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16877_18818,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_18819," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18820))){
cljs.compiler.emit_variadic_fn_method(meth_18820);
} else {
cljs.compiler.emit_fn_method(meth_18820);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__18823 = seq__16851_18812;
var G__18824 = chunk__16852_18813;
var G__18825 = count__16853_18814;
var G__18826 = (i__16854_18815 + (1));
seq__16851_18812 = G__18823;
chunk__16852_18813 = G__18824;
count__16853_18814 = G__18825;
i__16854_18815 = G__18826;
continue;
} else {
var temp__5735__auto___18828 = cljs.core.seq(seq__16851_18812);
if(temp__5735__auto___18828){
var seq__16851_18831__$1 = temp__5735__auto___18828;
if(cljs.core.chunked_seq_QMARK_(seq__16851_18831__$1)){
var c__4556__auto___18832 = cljs.core.chunk_first(seq__16851_18831__$1);
var G__18833 = cljs.core.chunk_rest(seq__16851_18831__$1);
var G__18834 = c__4556__auto___18832;
var G__18835 = cljs.core.count(c__4556__auto___18832);
var G__18836 = (0);
seq__16851_18812 = G__18833;
chunk__16852_18813 = G__18834;
count__16853_18814 = G__18835;
i__16854_18815 = G__18836;
continue;
} else {
var vec__16884_18837 = cljs.core.first(seq__16851_18831__$1);
var n_18838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16884_18837,(0),null);
var meth_18839 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16884_18837,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_18838," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18839))){
cljs.compiler.emit_variadic_fn_method(meth_18839);
} else {
cljs.compiler.emit_fn_method(meth_18839);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__18843 = cljs.core.next(seq__16851_18831__$1);
var G__18844 = null;
var G__18845 = (0);
var G__18846 = (0);
seq__16851_18812 = G__18843;
chunk__16852_18813 = G__18844;
count__16853_18814 = G__18845;
i__16854_18815 = G__18846;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18808," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_18809),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_18809)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_18809));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__16892_18851 = cljs.core.seq(ms_18811);
var chunk__16893_18852 = null;
var count__16894_18853 = (0);
var i__16895_18854 = (0);
while(true){
if((i__16895_18854 < count__16894_18853)){
var vec__16921_18856 = chunk__16893_18852.cljs$core$IIndexed$_nth$arity$2(null,i__16895_18854);
var n_18857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921_18856,(0),null);
var meth_18858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16921_18856,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18858))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_18861 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_18861," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_18863 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_18861," = new cljs.core.IndexedSeq(",a_18863,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_18857,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_18809)),(((cljs.core.count(maxparams_18809) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18861,");"], 0));
} else {
var pcnt_18868 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18858));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_18868,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_18857,".call(this",(((pcnt_18868 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18868,maxparams_18809)),null,(1),null)),(2),null))),");");
}


var G__18869 = seq__16892_18851;
var G__18870 = chunk__16893_18852;
var G__18871 = count__16894_18853;
var G__18872 = (i__16895_18854 + (1));
seq__16892_18851 = G__18869;
chunk__16893_18852 = G__18870;
count__16894_18853 = G__18871;
i__16895_18854 = G__18872;
continue;
} else {
var temp__5735__auto___18873 = cljs.core.seq(seq__16892_18851);
if(temp__5735__auto___18873){
var seq__16892_18874__$1 = temp__5735__auto___18873;
if(cljs.core.chunked_seq_QMARK_(seq__16892_18874__$1)){
var c__4556__auto___18875 = cljs.core.chunk_first(seq__16892_18874__$1);
var G__18876 = cljs.core.chunk_rest(seq__16892_18874__$1);
var G__18877 = c__4556__auto___18875;
var G__18878 = cljs.core.count(c__4556__auto___18875);
var G__18879 = (0);
seq__16892_18851 = G__18876;
chunk__16893_18852 = G__18877;
count__16894_18853 = G__18878;
i__16895_18854 = G__18879;
continue;
} else {
var vec__16932_18883 = cljs.core.first(seq__16892_18874__$1);
var n_18884 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16932_18883,(0),null);
var meth_18885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16932_18883,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18885))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_18886 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_18886," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_18888 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_18886," = new cljs.core.IndexedSeq(",a_18888,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_18884,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_18809)),(((cljs.core.count(maxparams_18809) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18886,");"], 0));
} else {
var pcnt_18893 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18885));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_18893,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_18884,".call(this",(((pcnt_18893 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18893,maxparams_18809)),null,(1),null)),(2),null))),");");
}


var G__18895 = cljs.core.next(seq__16892_18874__$1);
var G__18896 = null;
var G__18897 = (0);
var G__18898 = (0);
seq__16892_18851 = G__18895;
chunk__16893_18852 = G__18896;
count__16894_18853 = G__18897;
i__16895_18854 = G__18898;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_18899 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_18811)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_18899,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18808,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18808,".cljs$lang$applyTo = ",cljs.core.some((function (p1__16832_SHARP_){
var vec__16945 = p1__16832_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16945,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16945,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_18811),".cljs$lang$applyTo;");
} else {
}

var seq__16951_18905 = cljs.core.seq(ms_18811);
var chunk__16952_18906 = null;
var count__16953_18907 = (0);
var i__16954_18908 = (0);
while(true){
if((i__16954_18908 < count__16953_18907)){
var vec__16972_18911 = chunk__16952_18906.cljs$core$IIndexed$_nth$arity$2(null,i__16954_18908);
var n_18912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16972_18911,(0),null);
var meth_18913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16972_18911,(1),null);
var c_18914 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18913));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18913))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18808,".cljs$core$IFn$_invoke$arity$variadic = ",n_18912,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_18808,".cljs$core$IFn$_invoke$arity$",c_18914," = ",n_18912,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__18918 = seq__16951_18905;
var G__18919 = chunk__16952_18906;
var G__18920 = count__16953_18907;
var G__18921 = (i__16954_18908 + (1));
seq__16951_18905 = G__18918;
chunk__16952_18906 = G__18919;
count__16953_18907 = G__18920;
i__16954_18908 = G__18921;
continue;
} else {
var temp__5735__auto___18923 = cljs.core.seq(seq__16951_18905);
if(temp__5735__auto___18923){
var seq__16951_18925__$1 = temp__5735__auto___18923;
if(cljs.core.chunked_seq_QMARK_(seq__16951_18925__$1)){
var c__4556__auto___18926 = cljs.core.chunk_first(seq__16951_18925__$1);
var G__18927 = cljs.core.chunk_rest(seq__16951_18925__$1);
var G__18928 = c__4556__auto___18926;
var G__18929 = cljs.core.count(c__4556__auto___18926);
var G__18930 = (0);
seq__16951_18905 = G__18927;
chunk__16952_18906 = G__18928;
count__16953_18907 = G__18929;
i__16954_18908 = G__18930;
continue;
} else {
var vec__16986_18931 = cljs.core.first(seq__16951_18925__$1);
var n_18932 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16986_18931,(0),null);
var meth_18933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16986_18931,(1),null);
var c_18935 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18933));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18933))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18808,".cljs$core$IFn$_invoke$arity$variadic = ",n_18932,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_18808,".cljs$core$IFn$_invoke$arity$",c_18935," = ",n_18932,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__18937 = cljs.core.next(seq__16951_18925__$1);
var G__18938 = null;
var G__18940 = (0);
var G__18941 = (0);
seq__16951_18905 = G__18937;
chunk__16952_18906 = G__18938;
count__16953_18907 = G__18940;
i__16954_18908 = G__18941;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_18808,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16994){
var map__16995 = p__16994;
var map__16995__$1 = (((((!((map__16995 == null))))?(((((map__16995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16995):map__16995);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16995__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16995__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16995__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__17005_18948 = cljs.core.seq(statements);
var chunk__17006_18949 = null;
var count__17007_18950 = (0);
var i__17008_18951 = (0);
while(true){
if((i__17008_18951 < count__17007_18950)){
var s_18955 = chunk__17006_18949.cljs$core$IIndexed$_nth$arity$2(null,i__17008_18951);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_18955);


var G__18956 = seq__17005_18948;
var G__18957 = chunk__17006_18949;
var G__18958 = count__17007_18950;
var G__18959 = (i__17008_18951 + (1));
seq__17005_18948 = G__18956;
chunk__17006_18949 = G__18957;
count__17007_18950 = G__18958;
i__17008_18951 = G__18959;
continue;
} else {
var temp__5735__auto___18960 = cljs.core.seq(seq__17005_18948);
if(temp__5735__auto___18960){
var seq__17005_18961__$1 = temp__5735__auto___18960;
if(cljs.core.chunked_seq_QMARK_(seq__17005_18961__$1)){
var c__4556__auto___18962 = cljs.core.chunk_first(seq__17005_18961__$1);
var G__18963 = cljs.core.chunk_rest(seq__17005_18961__$1);
var G__18964 = c__4556__auto___18962;
var G__18965 = cljs.core.count(c__4556__auto___18962);
var G__18966 = (0);
seq__17005_18948 = G__18963;
chunk__17006_18949 = G__18964;
count__17007_18950 = G__18965;
i__17008_18951 = G__18966;
continue;
} else {
var s_18967 = cljs.core.first(seq__17005_18961__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_18967);


var G__18968 = cljs.core.next(seq__17005_18961__$1);
var G__18969 = null;
var G__18970 = (0);
var G__18971 = (0);
seq__17005_18948 = G__18968;
chunk__17006_18949 = G__18969;
count__17007_18950 = G__18970;
i__17008_18951 = G__18971;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__17021){
var map__17022 = p__17021;
var map__17022__$1 = (((((!((map__17022 == null))))?(((((map__17022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17022):map__17022);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17022__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17022__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17022__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17022__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17022__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("try{",try$,"}");

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}");
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"const","const",1709929842),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(finally$)))){
} else {
throw (new Error(["Assert failed: ","finally block cannot contain constant","\n","(not= :const (:op (ana/unwrap-quote finally)))"].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("finally {",finally$,"}");
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(try$);
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__17048,is_loop){
var map__17049 = p__17048;
var map__17049__$1 = (((((!((map__17049 == null))))?(((((map__17049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17049):map__17049);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17049__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17049__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17049__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__17062_18985 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__17063_18986 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__17063_18986);

try{var seq__17065_18990 = cljs.core.seq(bindings);
var chunk__17066_18991 = null;
var count__17067_18992 = (0);
var i__17068_18993 = (0);
while(true){
if((i__17068_18993 < count__17067_18992)){
var map__17085_18997 = chunk__17066_18991.cljs$core$IIndexed$_nth$arity$2(null,i__17068_18993);
var map__17085_18998__$1 = (((((!((map__17085_18997 == null))))?(((((map__17085_18997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17085_18997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17085_18997):map__17085_18997);
var binding_18999 = map__17085_18998__$1;
var init_19000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17085_18998__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_18999);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_19000,";");


var G__19003 = seq__17065_18990;
var G__19004 = chunk__17066_18991;
var G__19005 = count__17067_18992;
var G__19006 = (i__17068_18993 + (1));
seq__17065_18990 = G__19003;
chunk__17066_18991 = G__19004;
count__17067_18992 = G__19005;
i__17068_18993 = G__19006;
continue;
} else {
var temp__5735__auto___19007 = cljs.core.seq(seq__17065_18990);
if(temp__5735__auto___19007){
var seq__17065_19008__$1 = temp__5735__auto___19007;
if(cljs.core.chunked_seq_QMARK_(seq__17065_19008__$1)){
var c__4556__auto___19010 = cljs.core.chunk_first(seq__17065_19008__$1);
var G__19011 = cljs.core.chunk_rest(seq__17065_19008__$1);
var G__19012 = c__4556__auto___19010;
var G__19013 = cljs.core.count(c__4556__auto___19010);
var G__19014 = (0);
seq__17065_18990 = G__19011;
chunk__17066_18991 = G__19012;
count__17067_18992 = G__19013;
i__17068_18993 = G__19014;
continue;
} else {
var map__17100_19015 = cljs.core.first(seq__17065_19008__$1);
var map__17100_19016__$1 = (((((!((map__17100_19015 == null))))?(((((map__17100_19015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17100_19015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17100_19015):map__17100_19015);
var binding_19017 = map__17100_19016__$1;
var init_19018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17100_19016__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_19017);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_19018,";");


var G__19021 = cljs.core.next(seq__17065_19008__$1);
var G__19022 = null;
var G__19023 = (0);
var G__19024 = (0);
seq__17065_18990 = G__19021;
chunk__17066_18991 = G__19022;
count__17067_18992 = G__19023;
i__17068_18993 = G__19024;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("while(true){");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");
} else {
}
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__17062_18985);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__17119){
var map__17124 = p__17119;
var map__17124__$1 = (((((!((map__17124 == null))))?(((((map__17124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17124):map__17124);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17124__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___19032 = cljs.core.count(exprs);
var i_19033 = (0);
while(true){
if((i_19033 < n__4613__auto___19032)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_19033) : temps.call(null,i_19033))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_19033) : exprs.call(null,i_19033)),";");

var G__19037 = (i_19033 + (1));
i_19033 = G__19037;
continue;
} else {
}
break;
}

var n__4613__auto___19039 = cljs.core.count(exprs);
var i_19040 = (0);
while(true){
if((i_19040 < n__4613__auto___19039)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_19040) : params.call(null,i_19040)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_19040) : temps.call(null,i_19040)),";");

var G__19041 = (i_19040 + (1));
i_19040 = G__19041;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__17137){
var map__17141 = p__17137;
var map__17141__$1 = (((((!((map__17141 == null))))?(((((map__17141.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17141.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17141):map__17141);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17141__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17141__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17141__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__17154_19048 = cljs.core.seq(bindings);
var chunk__17155_19049 = null;
var count__17156_19050 = (0);
var i__17157_19051 = (0);
while(true){
if((i__17157_19051 < count__17156_19050)){
var map__17174_19052 = chunk__17155_19049.cljs$core$IIndexed$_nth$arity$2(null,i__17157_19051);
var map__17174_19053__$1 = (((((!((map__17174_19052 == null))))?(((((map__17174_19052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17174_19052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17174_19052):map__17174_19052);
var binding_19054 = map__17174_19053__$1;
var init_19055 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17174_19053__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_19054)," = ",init_19055,";");


var G__19065 = seq__17154_19048;
var G__19066 = chunk__17155_19049;
var G__19067 = count__17156_19050;
var G__19068 = (i__17157_19051 + (1));
seq__17154_19048 = G__19065;
chunk__17155_19049 = G__19066;
count__17156_19050 = G__19067;
i__17157_19051 = G__19068;
continue;
} else {
var temp__5735__auto___19069 = cljs.core.seq(seq__17154_19048);
if(temp__5735__auto___19069){
var seq__17154_19070__$1 = temp__5735__auto___19069;
if(cljs.core.chunked_seq_QMARK_(seq__17154_19070__$1)){
var c__4556__auto___19071 = cljs.core.chunk_first(seq__17154_19070__$1);
var G__19072 = cljs.core.chunk_rest(seq__17154_19070__$1);
var G__19073 = c__4556__auto___19071;
var G__19074 = cljs.core.count(c__4556__auto___19071);
var G__19075 = (0);
seq__17154_19048 = G__19072;
chunk__17155_19049 = G__19073;
count__17156_19050 = G__19074;
i__17157_19051 = G__19075;
continue;
} else {
var map__17187_19077 = cljs.core.first(seq__17154_19070__$1);
var map__17187_19078__$1 = (((((!((map__17187_19077 == null))))?(((((map__17187_19077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17187_19077.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17187_19077):map__17187_19077);
var binding_19079 = map__17187_19078__$1;
var init_19080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17187_19078__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_19079)," = ",init_19080,";");


var G__19085 = cljs.core.next(seq__17154_19070__$1);
var G__19086 = null;
var G__19087 = (0);
var G__19088 = (0);
seq__17154_19048 = G__19085;
chunk__17155_19049 = G__19086;
count__17156_19050 = G__19087;
i__17157_19051 = G__19088;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(expr);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__17252){
var map__17253 = p__17252;
var map__17253__$1 = (((((!((map__17253 == null))))?(((((map__17253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17253):map__17253);
var expr = map__17253__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17253__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17253__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17253__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info))){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return false;
}
} else {
return and__4115__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4115__auto__ = protocol;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = tag;
if(cljs.core.truth_(and__4115__auto____$1)){
var or__4126__auto__ = (function (){var and__4115__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto____$2)){
var and__4115__auto____$3 = protocol;
if(cljs.core.truth_(and__4115__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4115__auto____$3;
}
} else {
return and__4115__auto____$2;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto____$2 = (function (){var or__4126__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4115__auto____$2)){
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
if((!(cljs.core.set_QMARK_(tag)))){
if(cljs.core.not((function (){var fexpr__17339 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__17339.cljs$core$IFn$_invoke$arity$1 ? fexpr__17339.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17339.call(null,tag));
})())){
var temp__5735__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5735__auto__)){
var ps = temp__5735__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return false;
}
} else {
return false;
}
}
} else {
return and__4115__auto____$2;
}
}
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__17359 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__17359.cljs$core$IFn$_invoke$arity$1 ? fexpr__17359.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__17359.call(null,first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var temp__5735__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5735__auto__)){
var ns_str = temp__5735__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__4126__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__17261 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (arity > mfa);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__17238_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17238_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__17243_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17243_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17261,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17261,(1),null);
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(!(",cljs.core.first(args),"))");
} else {
if(opt_count_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("((",cljs.core.first(args),").length)");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_19133 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_19133,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_19134 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_19134,args)),(((mfa_19134 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_19134,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
var G__17403 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__17402 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__17402.cljs$core$IFn$_invoke$arity$1 ? fexpr__17402.cljs$core$IFn$_invoke$arity$1(G__17403) : fexpr__17402.call(null,G__17403));
} else {
return and__4115__auto__;
}
})())){
var fprop_19140 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19140," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19140,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19140," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19140,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")");
}

}
}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__17447){
var map__17448 = p__17447;
var map__17448__$1 = (((((!((map__17448 == null))))?(((((map__17448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17448):map__17448);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17448__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__17450){
var map__17451 = p__17450;
var map__17451__$1 = (((((!((map__17451 == null))))?(((((map__17451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17451):map__17451);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__17461 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__17461__$1 = (((((!((map__17461 == null))))?(((((map__17461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17461):map__17461);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17461__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17461__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__17462 = options;
var map__17462__$1 = (((((!((map__17462 == null))))?(((((map__17462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17462):map__17462);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17462__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17462__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17462__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__17463 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__17479 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__17479__$1 = (((((!((map__17479 == null))))?(((((map__17479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17479):map__17479);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17479__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17479__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17463,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17463,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__17499_19170 = cljs.core.seq(libs_to_load);
var chunk__17500_19171 = null;
var count__17501_19172 = (0);
var i__17502_19173 = (0);
while(true){
if((i__17502_19173 < count__17501_19172)){
var lib_19175 = chunk__17500_19171.cljs$core$IIndexed$_nth$arity$2(null,i__17502_19173);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19175)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19175),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19175),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19175),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19175),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19175,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19175),"');");
}

}
}
}


var G__19177 = seq__17499_19170;
var G__19178 = chunk__17500_19171;
var G__19179 = count__17501_19172;
var G__19180 = (i__17502_19173 + (1));
seq__17499_19170 = G__19177;
chunk__17500_19171 = G__19178;
count__17501_19172 = G__19179;
i__17502_19173 = G__19180;
continue;
} else {
var temp__5735__auto___19182 = cljs.core.seq(seq__17499_19170);
if(temp__5735__auto___19182){
var seq__17499_19183__$1 = temp__5735__auto___19182;
if(cljs.core.chunked_seq_QMARK_(seq__17499_19183__$1)){
var c__4556__auto___19184 = cljs.core.chunk_first(seq__17499_19183__$1);
var G__19185 = cljs.core.chunk_rest(seq__17499_19183__$1);
var G__19186 = c__4556__auto___19184;
var G__19187 = cljs.core.count(c__4556__auto___19184);
var G__19188 = (0);
seq__17499_19170 = G__19185;
chunk__17500_19171 = G__19186;
count__17501_19172 = G__19187;
i__17502_19173 = G__19188;
continue;
} else {
var lib_19193 = cljs.core.first(seq__17499_19183__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19193)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19193),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19193),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19193),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19193),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19193,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19193),"');");
}

}
}
}


var G__19200 = cljs.core.next(seq__17499_19183__$1);
var G__19201 = null;
var G__19202 = (0);
var G__19203 = (0);
seq__17499_19170 = G__19200;
chunk__17500_19171 = G__19201;
count__17501_19172 = G__19202;
i__17502_19173 = G__19203;
continue;
}
} else {
}
}
break;
}

var seq__17542_19204 = cljs.core.seq(node_libs);
var chunk__17543_19205 = null;
var count__17544_19206 = (0);
var i__17545_19207 = (0);
while(true){
if((i__17545_19207 < count__17544_19206)){
var lib_19208 = chunk__17543_19205.cljs$core$IIndexed$_nth$arity$2(null,i__17545_19207);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19208)," = require('",lib_19208,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__19209 = seq__17542_19204;
var G__19210 = chunk__17543_19205;
var G__19211 = count__17544_19206;
var G__19212 = (i__17545_19207 + (1));
seq__17542_19204 = G__19209;
chunk__17543_19205 = G__19210;
count__17544_19206 = G__19211;
i__17545_19207 = G__19212;
continue;
} else {
var temp__5735__auto___19213 = cljs.core.seq(seq__17542_19204);
if(temp__5735__auto___19213){
var seq__17542_19214__$1 = temp__5735__auto___19213;
if(cljs.core.chunked_seq_QMARK_(seq__17542_19214__$1)){
var c__4556__auto___19215 = cljs.core.chunk_first(seq__17542_19214__$1);
var G__19216 = cljs.core.chunk_rest(seq__17542_19214__$1);
var G__19217 = c__4556__auto___19215;
var G__19218 = cljs.core.count(c__4556__auto___19215);
var G__19219 = (0);
seq__17542_19204 = G__19216;
chunk__17543_19205 = G__19217;
count__17544_19206 = G__19218;
i__17545_19207 = G__19219;
continue;
} else {
var lib_19220 = cljs.core.first(seq__17542_19214__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19220)," = require('",lib_19220,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__19221 = cljs.core.next(seq__17542_19214__$1);
var G__19222 = null;
var G__19223 = (0);
var G__19224 = (0);
seq__17542_19204 = G__19221;
chunk__17543_19205 = G__19222;
count__17544_19206 = G__19223;
i__17545_19207 = G__19224;
continue;
}
} else {
}
}
break;
}

var seq__17576_19225 = cljs.core.seq(global_exports_libs);
var chunk__17580_19226 = null;
var count__17581_19227 = (0);
var i__17582_19228 = (0);
while(true){
if((i__17582_19228 < count__17581_19227)){
var lib_19230 = chunk__17580_19226.cljs$core$IIndexed$_nth$arity$2(null,i__17582_19228);
var map__17606_19231 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_19230));
var map__17606_19232__$1 = (((((!((map__17606_19231 == null))))?(((((map__17606_19231.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17606_19231.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17606_19231):map__17606_19231);
var global_exports_19233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17606_19232__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_19233,lib_19230);


var G__19239 = seq__17576_19225;
var G__19240 = chunk__17580_19226;
var G__19241 = count__17581_19227;
var G__19242 = (i__17582_19228 + (1));
seq__17576_19225 = G__19239;
chunk__17580_19226 = G__19240;
count__17581_19227 = G__19241;
i__17582_19228 = G__19242;
continue;
} else {
var temp__5735__auto___19245 = cljs.core.seq(seq__17576_19225);
if(temp__5735__auto___19245){
var seq__17576_19246__$1 = temp__5735__auto___19245;
if(cljs.core.chunked_seq_QMARK_(seq__17576_19246__$1)){
var c__4556__auto___19248 = cljs.core.chunk_first(seq__17576_19246__$1);
var G__19249 = cljs.core.chunk_rest(seq__17576_19246__$1);
var G__19250 = c__4556__auto___19248;
var G__19251 = cljs.core.count(c__4556__auto___19248);
var G__19252 = (0);
seq__17576_19225 = G__19249;
chunk__17580_19226 = G__19250;
count__17581_19227 = G__19251;
i__17582_19228 = G__19252;
continue;
} else {
var lib_19253 = cljs.core.first(seq__17576_19246__$1);
var map__17614_19254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_19253));
var map__17614_19255__$1 = (((((!((map__17614_19254 == null))))?(((((map__17614_19254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17614_19254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17614_19254):map__17614_19254);
var global_exports_19256 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17614_19255__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_19256,lib_19253);


var G__19281 = cljs.core.next(seq__17576_19246__$1);
var G__19282 = null;
var G__19283 = (0);
var G__19284 = (0);
seq__17576_19225 = G__19281;
chunk__17580_19226 = G__19282;
count__17581_19227 = G__19283;
i__17582_19228 = G__19284;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__17621){
var map__17622 = p__17621;
var map__17622__$1 = (((((!((map__17622 == null))))?(((((map__17622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17622.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17622):map__17622);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17622__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__17630){
var map__17632 = p__17630;
var map__17632__$1 = (((((!((map__17632 == null))))?(((((map__17632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17632):map__17632);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17632__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");
} else {
}
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__17650){
var map__17651 = p__17650;
var map__17651__$1 = (((((!((map__17651 == null))))?(((((map__17651.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17651.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17651):map__17651);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17651__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17662_19298 = cljs.core.seq(protocols);
var chunk__17663_19299 = null;
var count__17664_19300 = (0);
var i__17665_19301 = (0);
while(true){
if((i__17665_19301 < count__17664_19300)){
var protocol_19302 = chunk__17663_19299.cljs$core$IIndexed$_nth$arity$2(null,i__17665_19301);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19302)),"}");


var G__19303 = seq__17662_19298;
var G__19304 = chunk__17663_19299;
var G__19305 = count__17664_19300;
var G__19306 = (i__17665_19301 + (1));
seq__17662_19298 = G__19303;
chunk__17663_19299 = G__19304;
count__17664_19300 = G__19305;
i__17665_19301 = G__19306;
continue;
} else {
var temp__5735__auto___19307 = cljs.core.seq(seq__17662_19298);
if(temp__5735__auto___19307){
var seq__17662_19308__$1 = temp__5735__auto___19307;
if(cljs.core.chunked_seq_QMARK_(seq__17662_19308__$1)){
var c__4556__auto___19309 = cljs.core.chunk_first(seq__17662_19308__$1);
var G__19312 = cljs.core.chunk_rest(seq__17662_19308__$1);
var G__19313 = c__4556__auto___19309;
var G__19314 = cljs.core.count(c__4556__auto___19309);
var G__19315 = (0);
seq__17662_19298 = G__19312;
chunk__17663_19299 = G__19313;
count__17664_19300 = G__19314;
i__17665_19301 = G__19315;
continue;
} else {
var protocol_19320 = cljs.core.first(seq__17662_19308__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19320)),"}");


var G__19321 = cljs.core.next(seq__17662_19308__$1);
var G__19322 = null;
var G__19323 = (0);
var G__19324 = (0);
seq__17662_19298 = G__19321;
chunk__17663_19299 = G__19322;
count__17664_19300 = G__19323;
i__17665_19301 = G__19324;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17677_19325 = cljs.core.seq(fields__$1);
var chunk__17678_19326 = null;
var count__17679_19327 = (0);
var i__17680_19328 = (0);
while(true){
if((i__17680_19328 < count__17679_19327)){
var fld_19329 = chunk__17678_19326.cljs$core$IIndexed$_nth$arity$2(null,i__17680_19328);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19329," = ",fld_19329,";");


var G__19330 = seq__17677_19325;
var G__19331 = chunk__17678_19326;
var G__19332 = count__17679_19327;
var G__19333 = (i__17680_19328 + (1));
seq__17677_19325 = G__19330;
chunk__17678_19326 = G__19331;
count__17679_19327 = G__19332;
i__17680_19328 = G__19333;
continue;
} else {
var temp__5735__auto___19334 = cljs.core.seq(seq__17677_19325);
if(temp__5735__auto___19334){
var seq__17677_19335__$1 = temp__5735__auto___19334;
if(cljs.core.chunked_seq_QMARK_(seq__17677_19335__$1)){
var c__4556__auto___19336 = cljs.core.chunk_first(seq__17677_19335__$1);
var G__19337 = cljs.core.chunk_rest(seq__17677_19335__$1);
var G__19338 = c__4556__auto___19336;
var G__19339 = cljs.core.count(c__4556__auto___19336);
var G__19340 = (0);
seq__17677_19325 = G__19337;
chunk__17678_19326 = G__19338;
count__17679_19327 = G__19339;
i__17680_19328 = G__19340;
continue;
} else {
var fld_19341 = cljs.core.first(seq__17677_19335__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19341," = ",fld_19341,";");


var G__19342 = cljs.core.next(seq__17677_19335__$1);
var G__19343 = null;
var G__19344 = (0);
var G__19345 = (0);
seq__17677_19325 = G__19342;
chunk__17678_19326 = G__19343;
count__17679_19327 = G__19344;
i__17680_19328 = G__19345;
continue;
}
} else {
}
}
break;
}

var seq__17695_19346 = cljs.core.seq(pmasks);
var chunk__17696_19347 = null;
var count__17697_19348 = (0);
var i__17698_19349 = (0);
while(true){
if((i__17698_19349 < count__17697_19348)){
var vec__17753_19350 = chunk__17696_19347.cljs$core$IIndexed$_nth$arity$2(null,i__17698_19349);
var pno_19351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17753_19350,(0),null);
var pmask_19352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17753_19350,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19351,"$ = ",pmask_19352,";");


var G__19355 = seq__17695_19346;
var G__19356 = chunk__17696_19347;
var G__19357 = count__17697_19348;
var G__19358 = (i__17698_19349 + (1));
seq__17695_19346 = G__19355;
chunk__17696_19347 = G__19356;
count__17697_19348 = G__19357;
i__17698_19349 = G__19358;
continue;
} else {
var temp__5735__auto___19359 = cljs.core.seq(seq__17695_19346);
if(temp__5735__auto___19359){
var seq__17695_19360__$1 = temp__5735__auto___19359;
if(cljs.core.chunked_seq_QMARK_(seq__17695_19360__$1)){
var c__4556__auto___19361 = cljs.core.chunk_first(seq__17695_19360__$1);
var G__19362 = cljs.core.chunk_rest(seq__17695_19360__$1);
var G__19363 = c__4556__auto___19361;
var G__19364 = cljs.core.count(c__4556__auto___19361);
var G__19365 = (0);
seq__17695_19346 = G__19362;
chunk__17696_19347 = G__19363;
count__17697_19348 = G__19364;
i__17698_19349 = G__19365;
continue;
} else {
var vec__17759_19366 = cljs.core.first(seq__17695_19360__$1);
var pno_19367 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759_19366,(0),null);
var pmask_19368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17759_19366,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19367,"$ = ",pmask_19368,";");


var G__19369 = cljs.core.next(seq__17695_19360__$1);
var G__19370 = null;
var G__19371 = (0);
var G__19372 = (0);
seq__17695_19346 = G__19369;
chunk__17696_19347 = G__19370;
count__17697_19348 = G__19371;
i__17698_19349 = G__19372;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__17766){
var map__17768 = p__17766;
var map__17768__$1 = (((((!((map__17768 == null))))?(((((map__17768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17768):map__17768);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17768__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17768__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17768__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17768__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17768__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17788_19387 = cljs.core.seq(protocols);
var chunk__17789_19388 = null;
var count__17790_19389 = (0);
var i__17791_19390 = (0);
while(true){
if((i__17791_19390 < count__17790_19389)){
var protocol_19391 = chunk__17789_19388.cljs$core$IIndexed$_nth$arity$2(null,i__17791_19390);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19391)),"}");


var G__19393 = seq__17788_19387;
var G__19394 = chunk__17789_19388;
var G__19395 = count__17790_19389;
var G__19396 = (i__17791_19390 + (1));
seq__17788_19387 = G__19393;
chunk__17789_19388 = G__19394;
count__17790_19389 = G__19395;
i__17791_19390 = G__19396;
continue;
} else {
var temp__5735__auto___19419 = cljs.core.seq(seq__17788_19387);
if(temp__5735__auto___19419){
var seq__17788_19420__$1 = temp__5735__auto___19419;
if(cljs.core.chunked_seq_QMARK_(seq__17788_19420__$1)){
var c__4556__auto___19421 = cljs.core.chunk_first(seq__17788_19420__$1);
var G__19422 = cljs.core.chunk_rest(seq__17788_19420__$1);
var G__19423 = c__4556__auto___19421;
var G__19424 = cljs.core.count(c__4556__auto___19421);
var G__19425 = (0);
seq__17788_19387 = G__19422;
chunk__17789_19388 = G__19423;
count__17790_19389 = G__19424;
i__17791_19390 = G__19425;
continue;
} else {
var protocol_19426 = cljs.core.first(seq__17788_19420__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19426)),"}");


var G__19427 = cljs.core.next(seq__17788_19420__$1);
var G__19428 = null;
var G__19429 = (0);
var G__19430 = (0);
seq__17788_19387 = G__19427;
chunk__17789_19388 = G__19428;
count__17790_19389 = G__19429;
i__17791_19390 = G__19430;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17798_19431 = cljs.core.seq(fields__$1);
var chunk__17799_19432 = null;
var count__17800_19433 = (0);
var i__17801_19434 = (0);
while(true){
if((i__17801_19434 < count__17800_19433)){
var fld_19435 = chunk__17799_19432.cljs$core$IIndexed$_nth$arity$2(null,i__17801_19434);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19435," = ",fld_19435,";");


var G__19436 = seq__17798_19431;
var G__19437 = chunk__17799_19432;
var G__19438 = count__17800_19433;
var G__19439 = (i__17801_19434 + (1));
seq__17798_19431 = G__19436;
chunk__17799_19432 = G__19437;
count__17800_19433 = G__19438;
i__17801_19434 = G__19439;
continue;
} else {
var temp__5735__auto___19440 = cljs.core.seq(seq__17798_19431);
if(temp__5735__auto___19440){
var seq__17798_19441__$1 = temp__5735__auto___19440;
if(cljs.core.chunked_seq_QMARK_(seq__17798_19441__$1)){
var c__4556__auto___19442 = cljs.core.chunk_first(seq__17798_19441__$1);
var G__19443 = cljs.core.chunk_rest(seq__17798_19441__$1);
var G__19444 = c__4556__auto___19442;
var G__19445 = cljs.core.count(c__4556__auto___19442);
var G__19446 = (0);
seq__17798_19431 = G__19443;
chunk__17799_19432 = G__19444;
count__17800_19433 = G__19445;
i__17801_19434 = G__19446;
continue;
} else {
var fld_19447 = cljs.core.first(seq__17798_19441__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19447," = ",fld_19447,";");


var G__19449 = cljs.core.next(seq__17798_19441__$1);
var G__19450 = null;
var G__19451 = (0);
var G__19452 = (0);
seq__17798_19431 = G__19449;
chunk__17799_19432 = G__19450;
count__17800_19433 = G__19451;
i__17801_19434 = G__19452;
continue;
}
} else {
}
}
break;
}

var seq__17819_19453 = cljs.core.seq(pmasks);
var chunk__17820_19454 = null;
var count__17821_19455 = (0);
var i__17822_19456 = (0);
while(true){
if((i__17822_19456 < count__17821_19455)){
var vec__17835_19459 = chunk__17820_19454.cljs$core$IIndexed$_nth$arity$2(null,i__17822_19456);
var pno_19460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835_19459,(0),null);
var pmask_19461 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17835_19459,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19460,"$ = ",pmask_19461,";");


var G__19462 = seq__17819_19453;
var G__19463 = chunk__17820_19454;
var G__19464 = count__17821_19455;
var G__19465 = (i__17822_19456 + (1));
seq__17819_19453 = G__19462;
chunk__17820_19454 = G__19463;
count__17821_19455 = G__19464;
i__17822_19456 = G__19465;
continue;
} else {
var temp__5735__auto___19469 = cljs.core.seq(seq__17819_19453);
if(temp__5735__auto___19469){
var seq__17819_19470__$1 = temp__5735__auto___19469;
if(cljs.core.chunked_seq_QMARK_(seq__17819_19470__$1)){
var c__4556__auto___19472 = cljs.core.chunk_first(seq__17819_19470__$1);
var G__19474 = cljs.core.chunk_rest(seq__17819_19470__$1);
var G__19475 = c__4556__auto___19472;
var G__19476 = cljs.core.count(c__4556__auto___19472);
var G__19477 = (0);
seq__17819_19453 = G__19474;
chunk__17820_19454 = G__19475;
count__17821_19455 = G__19476;
i__17822_19456 = G__19477;
continue;
} else {
var vec__17840_19478 = cljs.core.first(seq__17819_19470__$1);
var pno_19479 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840_19478,(0),null);
var pmask_19480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17840_19478,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19479,"$ = ",pmask_19480,";");


var G__19481 = cljs.core.next(seq__17819_19470__$1);
var G__19482 = null;
var G__19483 = (0);
var G__19484 = (0);
seq__17819_19453 = G__19481;
chunk__17820_19454 = G__19482;
count__17821_19455 = G__19483;
i__17822_19456 = G__19484;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__17844){
var map__17845 = p__17844;
var map__17845__$1 = (((((!((map__17845 == null))))?(((((map__17845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17845):map__17845);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17845__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__17855){
var map__17863 = p__17855;
var map__17863__$1 = (((((!((map__17863 == null))))?(((((map__17863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17863):map__17863);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17863__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__15301__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15301__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__17883 = cljs.core.seq(table);
var chunk__17884 = null;
var count__17885 = (0);
var i__17886 = (0);
while(true){
if((i__17886 < count__17885)){
var vec__17897 = chunk__17884.cljs$core$IIndexed$_nth$arity$2(null,i__17886);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17897,(1),null);
var ns_19520 = cljs.core.namespace(sym);
var name_19521 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__19524 = seq__17883;
var G__19525 = chunk__17884;
var G__19526 = count__17885;
var G__19527 = (i__17886 + (1));
seq__17883 = G__19524;
chunk__17884 = G__19525;
count__17885 = G__19526;
i__17886 = G__19527;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__17883);
if(temp__5735__auto__){
var seq__17883__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17883__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17883__$1);
var G__19529 = cljs.core.chunk_rest(seq__17883__$1);
var G__19530 = c__4556__auto__;
var G__19531 = cljs.core.count(c__4556__auto__);
var G__19532 = (0);
seq__17883 = G__19529;
chunk__17884 = G__19530;
count__17885 = G__19531;
i__17886 = G__19532;
continue;
} else {
var vec__17900 = cljs.core.first(seq__17883__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17900,(1),null);
var ns_19533 = cljs.core.namespace(sym);
var name_19534 = cljs.core.name(sym);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.",value," = ");

if((sym instanceof cljs.core.Keyword)){
cljs.compiler.emits_keyword(sym);
} else {
if((sym instanceof cljs.core.Symbol)){
cljs.compiler.emits_symbol(sym);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot emit constant for type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(sym))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-constant-type","invalid-constant-type",1294847471),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));

}
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(";\n");


var G__19535 = cljs.core.next(seq__17883__$1);
var G__19536 = null;
var G__19537 = (0);
var G__19538 = (0);
seq__17883 = G__19535;
chunk__17884 = G__19536;
count__17885 = G__19537;
i__17886 = G__19538;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_externs = (function cljs$compiler$emit_externs(var_args){
var G__17908 = arguments.length;
switch (G__17908) {
case 1:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$1 = (function (externs){
return cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,externs,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY),(cljs.core.truth_(cljs.env._STAR_compiler_STAR_)?cljs.analyzer.get_externs():null));
}));

(cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4 = (function (prefix,externs,top_level,known_externs){
var ks = cljs.core.seq(cljs.core.keys(externs));
while(true){
if(ks){
var k_19543 = cljs.core.first(ks);
var vec__17910_19544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_19543);
var top_19545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17910_19544,(0),null);
var prefix_SINGLEQUOTE__19546 = vec__17910_19544;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_19543)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__19546) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_19545)) || (cljs.core.contains_QMARK_(known_externs,top_19545)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19546)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_19545);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19546)),";");
}
} else {
}

var m_19583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_19543);
if(cljs.core.empty_QMARK_(m_19583)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__19546,m_19583,top_level,known_externs);
}

var G__19586 = cljs.core.next(ks);
ks = G__19586;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
