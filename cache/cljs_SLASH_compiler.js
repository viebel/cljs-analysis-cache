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
var map__8942 = s;
var map__8942__$1 = (((((!((map__8942 == null))))?(((((map__8942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8942):map__8942);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8942__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8942__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__8947 = info;
var map__8948 = G__8947;
var map__8948__$1 = (((((!((map__8948 == null))))?(((((map__8948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8948):map__8948);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8948__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__8947__$1 = G__8947;
while(true){
var d__$2 = d__$1;
var map__8956 = G__8947__$1;
var map__8956__$1 = (((((!((map__8956 == null))))?(((((map__8956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8956):map__8956);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8956__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__10026 = (d__$2 + (1));
var G__10027 = shadow__$1;
d__$1 = G__10026;
G__8947__$1 = G__10027;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__8963){
var map__8964 = p__8963;
var map__8964__$1 = (((((!((map__8964 == null))))?(((((map__8964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8964):map__8964);
var name_var = map__8964__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8964__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__8969 = info;
var map__8969__$1 = (((((!((map__8969 == null))))?(((((map__8969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8969):map__8969);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8969__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8969__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__8973 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__8973) : cljs.compiler.munge.call(null,G__8973));
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
var G__8981 = arguments.length;
switch (G__8981) {
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
var ms = (function (){var fexpr__8991 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",(25),(1),(11501),(11501),new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__8991.cljs$core$IFn$_invoke$arity$1 ? fexpr__8991.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__8991.call(null,ss__$3));
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
var G__9004 = cp;
switch (G__9004) {
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
var seq__9006_10030 = cljs.core.seq(s);
var chunk__9007_10031 = null;
var count__9008_10032 = (0);
var i__9009_10033 = (0);
while(true){
if((i__9009_10033 < count__9008_10032)){
var c_10034 = chunk__9007_10031.cljs$core$IIndexed$_nth$arity$2(null,i__9009_10033);
sb.append(cljs.compiler.escape_char(c_10034));


var G__10035 = seq__9006_10030;
var G__10036 = chunk__9007_10031;
var G__10037 = count__9008_10032;
var G__10038 = (i__9009_10033 + (1));
seq__9006_10030 = G__10035;
chunk__9007_10031 = G__10036;
count__9008_10032 = G__10037;
i__9009_10033 = G__10038;
continue;
} else {
var temp__5735__auto___10039 = cljs.core.seq(seq__9006_10030);
if(temp__5735__auto___10039){
var seq__9006_10040__$1 = temp__5735__auto___10039;
if(cljs.core.chunked_seq_QMARK_(seq__9006_10040__$1)){
var c__4556__auto___10041 = cljs.core.chunk_first(seq__9006_10040__$1);
var G__10042 = cljs.core.chunk_rest(seq__9006_10040__$1);
var G__10043 = c__4556__auto___10041;
var G__10044 = cljs.core.count(c__4556__auto___10041);
var G__10045 = (0);
seq__9006_10030 = G__10042;
chunk__9007_10031 = G__10043;
count__9008_10032 = G__10044;
i__9009_10033 = G__10045;
continue;
} else {
var c_10046 = cljs.core.first(seq__9006_10040__$1);
sb.append(cljs.compiler.escape_char(c_10046));


var G__10047 = cljs.core.next(seq__9006_10040__$1);
var G__10048 = null;
var G__10049 = (0);
var G__10050 = (0);
seq__9006_10030 = G__10047;
chunk__9007_10031 = G__10048;
count__9008_10032 = G__10049;
i__9009_10033 = G__10050;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__9015 = cljs.core.get_global_hierarchy;
return (fexpr__9015.cljs$core$IFn$_invoke$arity$0 ? fexpr__9015.cljs$core$IFn$_invoke$arity$0() : fexpr__9015.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__9020_10051 = ast;
var map__9020_10052__$1 = (((((!((map__9020_10051 == null))))?(((((map__9020_10051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9020_10051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9020_10051):map__9020_10051);
var env_10053 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9020_10052__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_10053))){
var map__9025_10054 = env_10053;
var map__9025_10055__$1 = (((((!((map__9025_10054 == null))))?(((((map__9025_10054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9025_10054.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9025_10054):map__9025_10054);
var line_10056 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9025_10055__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_10057 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9025_10055__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__9031 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__9034 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__9033 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__9033.cljs$core$IFn$_invoke$arity$1 ? fexpr__9033.cljs$core$IFn$_invoke$arity$1(G__9034) : fexpr__9033.call(null,G__9034));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9031,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__9031;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_10056 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_10057)?(column_10057 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__9063 = arguments.length;
switch (G__9063) {
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
var len__4736__auto___10059 = arguments.length;
var i__4737__auto___10060 = (0);
while(true){
if((i__4737__auto___10060 < len__4736__auto___10059)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10060]));

var G__10061 = (i__4737__auto___10060 + (1));
i__4737__auto___10060 = G__10061;
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
var s_10062 = (function (){var G__9064 = a;
if((!(typeof a === 'string'))){
return G__9064.toString();
} else {
return G__9064;
}
})();
var temp__5739__auto___10063 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___10063 == null)){
} else {
var sm_data_10064 = temp__5739__auto___10063;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_10064,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__9044_SHARP_){
return (p1__9044_SHARP_ + s_10062.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_10062], 0));

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

var seq__9121 = cljs.core.seq(xs);
var chunk__9122 = null;
var count__9123 = (0);
var i__9124 = (0);
while(true){
if((i__9124 < count__9123)){
var x = chunk__9122.cljs$core$IIndexed$_nth$arity$2(null,i__9124);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__10065 = seq__9121;
var G__10066 = chunk__9122;
var G__10067 = count__9123;
var G__10068 = (i__9124 + (1));
seq__9121 = G__10065;
chunk__9122 = G__10066;
count__9123 = G__10067;
i__9124 = G__10068;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__9121);
if(temp__5735__auto__){
var seq__9121__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9121__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__9121__$1);
var G__10069 = cljs.core.chunk_rest(seq__9121__$1);
var G__10070 = c__4556__auto__;
var G__10071 = cljs.core.count(c__4556__auto__);
var G__10072 = (0);
seq__9121 = G__10069;
chunk__9122 = G__10070;
count__9123 = G__10071;
i__9124 = G__10072;
continue;
} else {
var x = cljs.core.first(seq__9121__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__10073 = cljs.core.next(seq__9121__$1);
var G__10074 = null;
var G__10075 = (0);
var G__10076 = (0);
seq__9121 = G__10073;
chunk__9122 = G__10074;
count__9123 = G__10075;
i__9124 = G__10076;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq9057){
var G__9058 = cljs.core.first(seq9057);
var seq9057__$1 = cljs.core.next(seq9057);
var G__9059 = cljs.core.first(seq9057__$1);
var seq9057__$2 = cljs.core.next(seq9057__$1);
var G__9060 = cljs.core.first(seq9057__$2);
var seq9057__$3 = cljs.core.next(seq9057__$2);
var G__9061 = cljs.core.first(seq9057__$3);
var seq9057__$4 = cljs.core.next(seq9057__$3);
var G__9062 = cljs.core.first(seq9057__$4);
var seq9057__$5 = cljs.core.next(seq9057__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9058,G__9059,G__9060,G__9061,G__9062,seq9057__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__9149){
var map__9150 = p__9149;
var map__9150__$1 = (((((!((map__9150 == null))))?(((((map__9150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9150):map__9150);
var m = map__9150__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9150__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__9163 = arguments.length;
switch (G__9163) {
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
var len__4736__auto___10078 = arguments.length;
var i__4737__auto___10079 = (0);
while(true){
if((i__4737__auto___10079 < len__4736__auto___10078)){
args_arr__4757__auto__.push((arguments[i__4737__auto___10079]));

var G__10080 = (i__4737__auto___10079 + (1));
i__4737__auto___10079 = G__10080;
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

var seq__9187_10081 = cljs.core.seq(xs);
var chunk__9188_10082 = null;
var count__9189_10083 = (0);
var i__9190_10084 = (0);
while(true){
if((i__9190_10084 < count__9189_10083)){
var x_10085 = chunk__9188_10082.cljs$core$IIndexed$_nth$arity$2(null,i__9190_10084);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_10085);


var G__10086 = seq__9187_10081;
var G__10087 = chunk__9188_10082;
var G__10088 = count__9189_10083;
var G__10089 = (i__9190_10084 + (1));
seq__9187_10081 = G__10086;
chunk__9188_10082 = G__10087;
count__9189_10083 = G__10088;
i__9190_10084 = G__10089;
continue;
} else {
var temp__5735__auto___10090 = cljs.core.seq(seq__9187_10081);
if(temp__5735__auto___10090){
var seq__9187_10091__$1 = temp__5735__auto___10090;
if(cljs.core.chunked_seq_QMARK_(seq__9187_10091__$1)){
var c__4556__auto___10092 = cljs.core.chunk_first(seq__9187_10091__$1);
var G__10093 = cljs.core.chunk_rest(seq__9187_10091__$1);
var G__10094 = c__4556__auto___10092;
var G__10095 = cljs.core.count(c__4556__auto___10092);
var G__10096 = (0);
seq__9187_10081 = G__10093;
chunk__9188_10082 = G__10094;
count__9189_10083 = G__10095;
i__9190_10084 = G__10096;
continue;
} else {
var x_10097 = cljs.core.first(seq__9187_10091__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_10097);


var G__10098 = cljs.core.next(seq__9187_10091__$1);
var G__10099 = null;
var G__10100 = (0);
var G__10101 = (0);
seq__9187_10081 = G__10098;
chunk__9188_10082 = G__10099;
count__9189_10083 = G__10100;
i__9190_10084 = G__10101;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9157){
var G__9158 = cljs.core.first(seq9157);
var seq9157__$1 = cljs.core.next(seq9157);
var G__9159 = cljs.core.first(seq9157__$1);
var seq9157__$2 = cljs.core.next(seq9157__$1);
var G__9160 = cljs.core.first(seq9157__$2);
var seq9157__$3 = cljs.core.next(seq9157__$2);
var G__9161 = cljs.core.first(seq9157__$3);
var seq9157__$4 = cljs.core.next(seq9157__$3);
var G__9162 = cljs.core.first(seq9157__$4);
var seq9157__$5 = cljs.core.next(seq9157__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9158,G__9159,G__9160,G__9161,G__9162,seq9157__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__9210_10102 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__9211_10103 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__9212_10104 = true;
var _STAR_print_fn_STAR__temp_val__9213_10105 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__9212_10104);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__9213_10105);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__9211_10103);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__9210_10102);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__9221 = cljs.core.get_global_hierarchy;
return (fexpr__9221.cljs$core$IFn$_invoke$arity$0 ? fexpr__9221.cljs$core$IFn$_invoke$arity$0() : fexpr__9221.call(null));
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
var vec__9229 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9229,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9229,(1),null);
var G__9232 = ns;
var G__9233 = name;
var G__9234 = (function (){
var G__9235 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9235) : cljs.compiler.emit_constant.call(null,G__9235));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__9232,G__9233,G__9234) : cljs.compiler.emit_record_value.call(null,G__9232,G__9233,G__9234));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__9238 = cljs.core.keys(x);
var G__9239 = cljs.core.vals(x);
var G__9240 = cljs.compiler.emit_constants_comma_sep;
var G__9241 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__9238,G__9239,G__9240,G__9241) : cljs.compiler.emit_map.call(null,G__9238,G__9239,G__9240,G__9241));
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
var G__9247 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__9248 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__9247,G__9248) : cljs.compiler.emit_with_meta.call(null,G__9247,G__9248));
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
var vec__9255 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9255,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9255,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9255,(2),null);
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
var G__9274 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9274) : x.call(null,G__9274));
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
var G__9282 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9282) : x.call(null,G__9282));
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
var G__9290 = items;
var G__9291 = (function (p1__9289_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__9289_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__9290,G__9291) : cljs.compiler.emit_js_object.call(null,G__9290,G__9291));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__9294){
var map__9295 = p__9294;
var map__9295__$1 = (((((!((map__9295 == null))))?(((((map__9295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9295):map__9295);
var ast = map__9295__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9295__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9295__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9295__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__9298 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__9298__$1 = (((((!((map__9298 == null))))?(((((map__9298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9298):map__9298);
var cenv = map__9298__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9298__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__9308 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__9320 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__9320) : cljs.compiler.es5_GT__EQ_.call(null,G__9320));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__9308,cljs.analyzer.es5_allowed);
} else {
return G__9308;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__9321 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__9321,reserved);
} else {
return G__9321;
}
})();
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__9324_10106 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__9324_10107__$1 = (((G__9324_10106 instanceof cljs.core.Keyword))?G__9324_10106.fqn:null);
switch (G__9324_10107__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__9334){
var map__9335 = p__9334;
var map__9335__$1 = (((((!((map__9335 == null))))?(((((map__9335.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9335.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9335):map__9335);
var arg = map__9335__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9335__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9335__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9335__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9335__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__9337 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9337__$1 = (((((!((map__9337 == null))))?(((((map__9337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9337):map__9337);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9337__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__9345){
var map__9350 = p__9345;
var map__9350__$1 = (((((!((map__9350 == null))))?(((((map__9350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9350):map__9350);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9350__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9350__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9350__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__9353_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9353_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__9357 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__9357) : comma_sep.call(null,G__9357));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__9358 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__9358) : comma_sep.call(null,G__9358));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9359){
var map__9360 = p__9359;
var map__9360__$1 = (((((!((map__9360 == null))))?(((((map__9360.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9360.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9360):map__9360);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9360__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9360__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9372){
var map__9373 = p__9372;
var map__9373__$1 = (((((!((map__9373 == null))))?(((((map__9373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9373):map__9373);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9373__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9373__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__9375_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9375_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__9379 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__9379) : comma_sep.call(null,G__9379));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9380){
var map__9381 = p__9380;
var map__9381__$1 = (((((!((map__9381 == null))))?(((((map__9381.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9381.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9381):map__9381);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9381__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___10109 = cljs.core.seq(items);
if(temp__5735__auto___10109){
var items_10110__$1 = temp__5735__auto___10109;
var vec__9396_10111 = items_10110__$1;
var seq__9397_10112 = cljs.core.seq(vec__9396_10111);
var first__9398_10113 = cljs.core.first(seq__9397_10112);
var seq__9397_10114__$1 = cljs.core.next(seq__9397_10112);
var vec__9399_10115 = first__9398_10113;
var k_10116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9399_10115,(0),null);
var v_10117 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9399_10115,(1),null);
var r_10118 = seq__9397_10114__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_10116),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_10117) : emit_js_object_val.call(null,v_10117)));

var seq__9402_10119 = cljs.core.seq(r_10118);
var chunk__9403_10120 = null;
var count__9404_10121 = (0);
var i__9405_10122 = (0);
while(true){
if((i__9405_10122 < count__9404_10121)){
var vec__9412_10123 = chunk__9403_10120.cljs$core$IIndexed$_nth$arity$2(null,i__9405_10122);
var k_10124__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9412_10123,(0),null);
var v_10125__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9412_10123,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_10124__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_10125__$1) : emit_js_object_val.call(null,v_10125__$1)));


var G__10126 = seq__9402_10119;
var G__10127 = chunk__9403_10120;
var G__10128 = count__9404_10121;
var G__10129 = (i__9405_10122 + (1));
seq__9402_10119 = G__10126;
chunk__9403_10120 = G__10127;
count__9404_10121 = G__10128;
i__9405_10122 = G__10129;
continue;
} else {
var temp__5735__auto___10130__$1 = cljs.core.seq(seq__9402_10119);
if(temp__5735__auto___10130__$1){
var seq__9402_10131__$1 = temp__5735__auto___10130__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9402_10131__$1)){
var c__4556__auto___10132 = cljs.core.chunk_first(seq__9402_10131__$1);
var G__10133 = cljs.core.chunk_rest(seq__9402_10131__$1);
var G__10134 = c__4556__auto___10132;
var G__10135 = cljs.core.count(c__4556__auto___10132);
var G__10136 = (0);
seq__9402_10119 = G__10133;
chunk__9403_10120 = G__10134;
count__9404_10121 = G__10135;
i__9405_10122 = G__10136;
continue;
} else {
var vec__9415_10137 = cljs.core.first(seq__9402_10131__$1);
var k_10138__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9415_10137,(0),null);
var v_10139__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9415_10137,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_10138__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_10139__$1) : emit_js_object_val.call(null,v_10139__$1)));


var G__10140 = cljs.core.next(seq__9402_10131__$1);
var G__10141 = null;
var G__10142 = (0);
var G__10143 = (0);
seq__9402_10119 = G__10140;
chunk__9403_10120 = G__10141;
count__9404_10121 = G__10142;
i__9405_10122 = G__10143;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__9422){
var map__9423 = p__9422;
var map__9423__$1 = (((((!((map__9423 == null))))?(((((map__9423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9423):map__9423);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9423__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9423__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9423__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__9437){
var map__9438 = p__9437;
var map__9438__$1 = (((((!((map__9438 == null))))?(((((map__9438.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9438.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9438):map__9438);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9438__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9438__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__9447){
var map__9448 = p__9447;
var map__9448__$1 = (((((!((map__9448 == null))))?(((((map__9448.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9448.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9448):map__9448);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9448__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__9450){
var map__9451 = p__9450;
var map__9451__$1 = (((((!((map__9451 == null))))?(((((map__9451.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9451.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9451):map__9451);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9451__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9451__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__9458 = cljs.analyzer.unwrap_quote(expr);
var map__9458__$1 = (((((!((map__9458 == null))))?(((((map__9458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9458):map__9458);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9458__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9458__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9458__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__9466 = cljs.analyzer.unwrap_quote(expr);
var map__9466__$1 = (((((!((map__9466 == null))))?(((((map__9466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9466.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9466):map__9466);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9466__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9466__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9466__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__9477 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__9477.cljs$core$IFn$_invoke$arity$1 ? fexpr__9477.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__9477.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9478){
var map__9479 = p__9478;
var map__9479__$1 = (((((!((map__9479 == null))))?(((((map__9479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9479):map__9479);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9479__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9479__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9479__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9479__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9479__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__9500){
var map__9501 = p__9500;
var map__9501__$1 = (((((!((map__9501 == null))))?(((((map__9501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9501.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9501):map__9501);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9501__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9501__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9501__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9501__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__9503_10144 = cljs.core.seq(nodes);
var chunk__9504_10145 = null;
var count__9505_10146 = (0);
var i__9506_10147 = (0);
while(true){
if((i__9506_10147 < count__9505_10146)){
var map__9540_10148 = chunk__9504_10145.cljs$core$IIndexed$_nth$arity$2(null,i__9506_10147);
var map__9540_10149__$1 = (((((!((map__9540_10148 == null))))?(((((map__9540_10148.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9540_10148.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9540_10148):map__9540_10148);
var ts_10150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540_10149__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9541_10151 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9540_10149__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9541_10152__$1 = (((((!((map__9541_10151 == null))))?(((((map__9541_10151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9541_10151.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9541_10151):map__9541_10151);
var then_10153 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9541_10152__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9545_10154 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_10150));
var chunk__9546_10155 = null;
var count__9547_10156 = (0);
var i__9548_10157 = (0);
while(true){
if((i__9548_10157 < count__9547_10156)){
var test_10158 = chunk__9546_10155.cljs$core$IIndexed$_nth$arity$2(null,i__9548_10157);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10158,":");


var G__10159 = seq__9545_10154;
var G__10160 = chunk__9546_10155;
var G__10161 = count__9547_10156;
var G__10162 = (i__9548_10157 + (1));
seq__9545_10154 = G__10159;
chunk__9546_10155 = G__10160;
count__9547_10156 = G__10161;
i__9548_10157 = G__10162;
continue;
} else {
var temp__5735__auto___10163 = cljs.core.seq(seq__9545_10154);
if(temp__5735__auto___10163){
var seq__9545_10164__$1 = temp__5735__auto___10163;
if(cljs.core.chunked_seq_QMARK_(seq__9545_10164__$1)){
var c__4556__auto___10165 = cljs.core.chunk_first(seq__9545_10164__$1);
var G__10166 = cljs.core.chunk_rest(seq__9545_10164__$1);
var G__10167 = c__4556__auto___10165;
var G__10168 = cljs.core.count(c__4556__auto___10165);
var G__10169 = (0);
seq__9545_10154 = G__10166;
chunk__9546_10155 = G__10167;
count__9547_10156 = G__10168;
i__9548_10157 = G__10169;
continue;
} else {
var test_10170 = cljs.core.first(seq__9545_10164__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10170,":");


var G__10171 = cljs.core.next(seq__9545_10164__$1);
var G__10172 = null;
var G__10173 = (0);
var G__10174 = (0);
seq__9545_10154 = G__10171;
chunk__9546_10155 = G__10172;
count__9547_10156 = G__10173;
i__9548_10157 = G__10174;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_10153);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_10153);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__10175 = seq__9503_10144;
var G__10176 = chunk__9504_10145;
var G__10177 = count__9505_10146;
var G__10178 = (i__9506_10147 + (1));
seq__9503_10144 = G__10175;
chunk__9504_10145 = G__10176;
count__9505_10146 = G__10177;
i__9506_10147 = G__10178;
continue;
} else {
var temp__5735__auto___10179 = cljs.core.seq(seq__9503_10144);
if(temp__5735__auto___10179){
var seq__9503_10180__$1 = temp__5735__auto___10179;
if(cljs.core.chunked_seq_QMARK_(seq__9503_10180__$1)){
var c__4556__auto___10181 = cljs.core.chunk_first(seq__9503_10180__$1);
var G__10182 = cljs.core.chunk_rest(seq__9503_10180__$1);
var G__10183 = c__4556__auto___10181;
var G__10184 = cljs.core.count(c__4556__auto___10181);
var G__10185 = (0);
seq__9503_10144 = G__10182;
chunk__9504_10145 = G__10183;
count__9505_10146 = G__10184;
i__9506_10147 = G__10185;
continue;
} else {
var map__9550_10186 = cljs.core.first(seq__9503_10180__$1);
var map__9550_10187__$1 = (((((!((map__9550_10186 == null))))?(((((map__9550_10186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9550_10186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9550_10186):map__9550_10186);
var ts_10188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9550_10187__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__9551_10189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9550_10187__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__9551_10190__$1 = (((((!((map__9551_10189 == null))))?(((((map__9551_10189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9551_10189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9551_10189):map__9551_10189);
var then_10191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9551_10190__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__9556_10192 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_10188));
var chunk__9557_10193 = null;
var count__9558_10194 = (0);
var i__9559_10195 = (0);
while(true){
if((i__9559_10195 < count__9558_10194)){
var test_10196 = chunk__9557_10193.cljs$core$IIndexed$_nth$arity$2(null,i__9559_10195);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10196,":");


var G__10197 = seq__9556_10192;
var G__10198 = chunk__9557_10193;
var G__10199 = count__9558_10194;
var G__10200 = (i__9559_10195 + (1));
seq__9556_10192 = G__10197;
chunk__9557_10193 = G__10198;
count__9558_10194 = G__10199;
i__9559_10195 = G__10200;
continue;
} else {
var temp__5735__auto___10201__$1 = cljs.core.seq(seq__9556_10192);
if(temp__5735__auto___10201__$1){
var seq__9556_10202__$1 = temp__5735__auto___10201__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9556_10202__$1)){
var c__4556__auto___10203 = cljs.core.chunk_first(seq__9556_10202__$1);
var G__10204 = cljs.core.chunk_rest(seq__9556_10202__$1);
var G__10205 = c__4556__auto___10203;
var G__10206 = cljs.core.count(c__4556__auto___10203);
var G__10207 = (0);
seq__9556_10192 = G__10204;
chunk__9557_10193 = G__10205;
count__9558_10194 = G__10206;
i__9559_10195 = G__10207;
continue;
} else {
var test_10208 = cljs.core.first(seq__9556_10202__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_10208,":");


var G__10209 = cljs.core.next(seq__9556_10202__$1);
var G__10210 = null;
var G__10211 = (0);
var G__10212 = (0);
seq__9556_10192 = G__10209;
chunk__9557_10193 = G__10210;
count__9558_10194 = G__10211;
i__9559_10195 = G__10212;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_10191);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_10191);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__10213 = cljs.core.next(seq__9503_10180__$1);
var G__10214 = null;
var G__10215 = (0);
var G__10216 = (0);
seq__9503_10144 = G__10213;
chunk__9504_10145 = G__10214;
count__9505_10146 = G__10215;
i__9506_10147 = G__10216;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__9562){
var map__9563 = p__9562;
var map__9563__$1 = (((((!((map__9563 == null))))?(((((map__9563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9563):map__9563);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9563__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9563__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__9568 = env;
var G__9569 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__9568,G__9569) : cljs.compiler.resolve_type.call(null,G__9568,G__9569));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__9570 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9570,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9570,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__9565_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__9565_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__9565_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__9573 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__9573,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__9573;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__9577 = env;
var G__9578 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__9577,G__9578) : cljs.compiler.resolve_type.call(null,G__9577,G__9578));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9582_SHARP_){
return cljs.compiler.resolve_type(env,p1__9582_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__9588 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__9589 = cljs.core.seq(vec__9588);
var first__9590 = cljs.core.first(seq__9589);
var seq__9589__$1 = cljs.core.next(seq__9589);
var p = first__9590;
var first__9590__$1 = cljs.core.first(seq__9589__$1);
var seq__9589__$2 = cljs.core.next(seq__9589__$1);
var ts = first__9590__$1;
var first__9590__$2 = cljs.core.first(seq__9589__$2);
var seq__9589__$3 = cljs.core.next(seq__9589__$2);
var n = first__9590__$2;
var xs = seq__9589__$3;
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
var vec__9591 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__9592 = cljs.core.seq(vec__9591);
var first__9593 = cljs.core.first(seq__9592);
var seq__9592__$1 = cljs.core.next(seq__9592);
var p = first__9593;
var first__9593__$1 = cljs.core.first(seq__9592__$1);
var seq__9592__$2 = cljs.core.next(seq__9592__$1);
var ts = first__9593__$1;
var xs = seq__9592__$2;
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
var G__9595 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__9594 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__9594.cljs$core$IFn$_invoke$arity$1 ? fexpr__9594.cljs$core$IFn$_invoke$arity$1(G__9595) : fexpr__9594.call(null,G__9595));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__9598 = arguments.length;
switch (G__9598) {
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
var vec__9610 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__9596_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__9596_SHARP_);
} else {
return p1__9596_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__9611 = cljs.core.seq(vec__9610);
var first__9612 = cljs.core.first(seq__9611);
var seq__9611__$1 = cljs.core.next(seq__9611);
var x = first__9612;
var ys = seq__9611__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__9613 = cljs.core.seq(ys);
var chunk__9614 = null;
var count__9615 = (0);
var i__9616 = (0);
while(true){
if((i__9616 < count__9615)){
var next_line = chunk__9614.cljs$core$IIndexed$_nth$arity$2(null,i__9616);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__10218 = seq__9613;
var G__10219 = chunk__9614;
var G__10220 = count__9615;
var G__10221 = (i__9616 + (1));
seq__9613 = G__10218;
chunk__9614 = G__10219;
count__9615 = G__10220;
i__9616 = G__10221;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__9613);
if(temp__5735__auto__){
var seq__9613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9613__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__9613__$1);
var G__10222 = cljs.core.chunk_rest(seq__9613__$1);
var G__10223 = c__4556__auto__;
var G__10224 = cljs.core.count(c__4556__auto__);
var G__10225 = (0);
seq__9613 = G__10222;
chunk__9614 = G__10223;
count__9615 = G__10224;
i__9616 = G__10225;
continue;
} else {
var next_line = cljs.core.first(seq__9613__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__10226 = cljs.core.next(seq__9613__$1);
var G__10227 = null;
var G__10228 = (0);
var G__10229 = (0);
seq__9613 = G__10226;
chunk__9614 = G__10227;
count__9615 = G__10228;
i__9616 = G__10229;
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

var seq__9622_10230 = cljs.core.seq(docs__$2);
var chunk__9623_10231 = null;
var count__9624_10232 = (0);
var i__9625_10233 = (0);
while(true){
if((i__9625_10233 < count__9624_10232)){
var e_10234 = chunk__9623_10231.cljs$core$IIndexed$_nth$arity$2(null,i__9625_10233);
if(cljs.core.truth_(e_10234)){
print_comment_lines(e_10234);
} else {
}


var G__10235 = seq__9622_10230;
var G__10236 = chunk__9623_10231;
var G__10237 = count__9624_10232;
var G__10238 = (i__9625_10233 + (1));
seq__9622_10230 = G__10235;
chunk__9623_10231 = G__10236;
count__9624_10232 = G__10237;
i__9625_10233 = G__10238;
continue;
} else {
var temp__5735__auto___10239 = cljs.core.seq(seq__9622_10230);
if(temp__5735__auto___10239){
var seq__9622_10240__$1 = temp__5735__auto___10239;
if(cljs.core.chunked_seq_QMARK_(seq__9622_10240__$1)){
var c__4556__auto___10241 = cljs.core.chunk_first(seq__9622_10240__$1);
var G__10242 = cljs.core.chunk_rest(seq__9622_10240__$1);
var G__10243 = c__4556__auto___10241;
var G__10244 = cljs.core.count(c__4556__auto___10241);
var G__10245 = (0);
seq__9622_10230 = G__10242;
chunk__9623_10231 = G__10243;
count__9624_10232 = G__10244;
i__9625_10233 = G__10245;
continue;
} else {
var e_10246 = cljs.core.first(seq__9622_10240__$1);
if(cljs.core.truth_(e_10246)){
print_comment_lines(e_10246);
} else {
}


var G__10247 = cljs.core.next(seq__9622_10240__$1);
var G__10248 = null;
var G__10249 = (0);
var G__10250 = (0);
seq__9622_10230 = G__10247;
chunk__9623_10231 = G__10248;
count__9624_10232 = G__10249;
i__9625_10233 = G__10250;
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
var and__4115__auto__ = cljs.core.some((function (p1__9636_SHARP_){
return goog.string.startsWith(p1__9636_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__9642){
var map__9643 = p__9642;
var map__9643__$1 = (((((!((map__9643 == null))))?(((((map__9643.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9643.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9643):map__9643);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9643__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__9653){
var map__9654 = p__9653;
var map__9654__$1 = (((((!((map__9654 == null))))?(((((map__9654.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9654.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9654):map__9654);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9654__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__9656_10251 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__9657_10252 = null;
var count__9658_10253 = (0);
var i__9659_10254 = (0);
while(true){
if((i__9659_10254 < count__9658_10253)){
var vec__9675_10255 = chunk__9657_10252.cljs$core$IIndexed$_nth$arity$2(null,i__9659_10254);
var i_10256 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9675_10255,(0),null);
var param_10257 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9675_10255,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_10257);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__10258 = seq__9656_10251;
var G__10259 = chunk__9657_10252;
var G__10260 = count__9658_10253;
var G__10261 = (i__9659_10254 + (1));
seq__9656_10251 = G__10258;
chunk__9657_10252 = G__10259;
count__9658_10253 = G__10260;
i__9659_10254 = G__10261;
continue;
} else {
var temp__5735__auto___10262 = cljs.core.seq(seq__9656_10251);
if(temp__5735__auto___10262){
var seq__9656_10263__$1 = temp__5735__auto___10262;
if(cljs.core.chunked_seq_QMARK_(seq__9656_10263__$1)){
var c__4556__auto___10264 = cljs.core.chunk_first(seq__9656_10263__$1);
var G__10265 = cljs.core.chunk_rest(seq__9656_10263__$1);
var G__10266 = c__4556__auto___10264;
var G__10267 = cljs.core.count(c__4556__auto___10264);
var G__10268 = (0);
seq__9656_10251 = G__10265;
chunk__9657_10252 = G__10266;
count__9658_10253 = G__10267;
i__9659_10254 = G__10268;
continue;
} else {
var vec__9682_10269 = cljs.core.first(seq__9656_10263__$1);
var i_10270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9682_10269,(0),null);
var param_10271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9682_10269,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_10271);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__10272 = cljs.core.next(seq__9656_10263__$1);
var G__10273 = null;
var G__10274 = (0);
var G__10275 = (0);
seq__9656_10251 = G__10272;
chunk__9657_10252 = G__10273;
count__9658_10253 = G__10274;
i__9659_10254 = G__10275;
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

var seq__9688_10276 = cljs.core.seq(params);
var chunk__9689_10277 = null;
var count__9690_10278 = (0);
var i__9691_10279 = (0);
while(true){
if((i__9691_10279 < count__9690_10278)){
var param_10280 = chunk__9689_10277.cljs$core$IIndexed$_nth$arity$2(null,i__9691_10279);
cljs.compiler.emit(param_10280);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10280,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10281 = seq__9688_10276;
var G__10282 = chunk__9689_10277;
var G__10283 = count__9690_10278;
var G__10284 = (i__9691_10279 + (1));
seq__9688_10276 = G__10281;
chunk__9689_10277 = G__10282;
count__9690_10278 = G__10283;
i__9691_10279 = G__10284;
continue;
} else {
var temp__5735__auto___10285 = cljs.core.seq(seq__9688_10276);
if(temp__5735__auto___10285){
var seq__9688_10286__$1 = temp__5735__auto___10285;
if(cljs.core.chunked_seq_QMARK_(seq__9688_10286__$1)){
var c__4556__auto___10287 = cljs.core.chunk_first(seq__9688_10286__$1);
var G__10288 = cljs.core.chunk_rest(seq__9688_10286__$1);
var G__10289 = c__4556__auto___10287;
var G__10290 = cljs.core.count(c__4556__auto___10287);
var G__10291 = (0);
seq__9688_10276 = G__10288;
chunk__9689_10277 = G__10289;
count__9690_10278 = G__10290;
i__9691_10279 = G__10291;
continue;
} else {
var param_10292 = cljs.core.first(seq__9688_10286__$1);
cljs.compiler.emit(param_10292);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10292,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10293 = cljs.core.next(seq__9688_10286__$1);
var G__10294 = null;
var G__10295 = (0);
var G__10296 = (0);
seq__9688_10276 = G__10293;
chunk__9689_10277 = G__10294;
count__9690_10278 = G__10295;
i__9691_10279 = G__10296;
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

var seq__9696_10297 = cljs.core.seq(params);
var chunk__9697_10298 = null;
var count__9698_10299 = (0);
var i__9699_10300 = (0);
while(true){
if((i__9699_10300 < count__9698_10299)){
var param_10301 = chunk__9697_10298.cljs$core$IIndexed$_nth$arity$2(null,i__9699_10300);
cljs.compiler.emit(param_10301);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10301,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10302 = seq__9696_10297;
var G__10303 = chunk__9697_10298;
var G__10304 = count__9698_10299;
var G__10305 = (i__9699_10300 + (1));
seq__9696_10297 = G__10302;
chunk__9697_10298 = G__10303;
count__9698_10299 = G__10304;
i__9699_10300 = G__10305;
continue;
} else {
var temp__5735__auto___10306 = cljs.core.seq(seq__9696_10297);
if(temp__5735__auto___10306){
var seq__9696_10307__$1 = temp__5735__auto___10306;
if(cljs.core.chunked_seq_QMARK_(seq__9696_10307__$1)){
var c__4556__auto___10308 = cljs.core.chunk_first(seq__9696_10307__$1);
var G__10309 = cljs.core.chunk_rest(seq__9696_10307__$1);
var G__10310 = c__4556__auto___10308;
var G__10311 = cljs.core.count(c__4556__auto___10308);
var G__10312 = (0);
seq__9696_10297 = G__10309;
chunk__9697_10298 = G__10310;
count__9698_10299 = G__10311;
i__9699_10300 = G__10312;
continue;
} else {
var param_10313 = cljs.core.first(seq__9696_10307__$1);
cljs.compiler.emit(param_10313);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10313,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10314 = cljs.core.next(seq__9696_10307__$1);
var G__10315 = null;
var G__10316 = (0);
var G__10317 = (0);
seq__9696_10297 = G__10314;
chunk__9697_10298 = G__10315;
count__9698_10299 = G__10316;
i__9699_10300 = G__10317;
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
var seq__9712 = cljs.core.seq(params);
var chunk__9713 = null;
var count__9714 = (0);
var i__9715 = (0);
while(true){
if((i__9715 < count__9714)){
var param = chunk__9713.cljs$core$IIndexed$_nth$arity$2(null,i__9715);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10318 = seq__9712;
var G__10319 = chunk__9713;
var G__10320 = count__9714;
var G__10321 = (i__9715 + (1));
seq__9712 = G__10318;
chunk__9713 = G__10319;
count__9714 = G__10320;
i__9715 = G__10321;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__9712);
if(temp__5735__auto__){
var seq__9712__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9712__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__9712__$1);
var G__10322 = cljs.core.chunk_rest(seq__9712__$1);
var G__10323 = c__4556__auto__;
var G__10324 = cljs.core.count(c__4556__auto__);
var G__10325 = (0);
seq__9712 = G__10322;
chunk__9713 = G__10323;
count__9714 = G__10324;
i__9715 = G__10325;
continue;
} else {
var param = cljs.core.first(seq__9712__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10326 = cljs.core.next(seq__9712__$1);
var G__10327 = null;
var G__10328 = (0);
var G__10329 = (0);
seq__9712 = G__10326;
chunk__9713 = G__10327;
count__9714 = G__10328;
i__9715 = G__10329;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9724){
var map__9725 = p__9724;
var map__9725__$1 = (((((!((map__9725 == null))))?(((((map__9725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9725):map__9725);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9725__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9725__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9725__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9725__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9725__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9725__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9732){
var map__9733 = p__9732;
var map__9733__$1 = (((((!((map__9733 == null))))?(((((map__9733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9733):map__9733);
var f = map__9733__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9733__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_10330__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_10331 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_10330__$1);
var delegate_name_10332 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_10331),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_10332," = function (");

var seq__9736_10333 = cljs.core.seq(params);
var chunk__9737_10334 = null;
var count__9738_10335 = (0);
var i__9739_10336 = (0);
while(true){
if((i__9739_10336 < count__9738_10335)){
var param_10337 = chunk__9737_10334.cljs$core$IIndexed$_nth$arity$2(null,i__9739_10336);
cljs.compiler.emit(param_10337);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10337,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10338 = seq__9736_10333;
var G__10339 = chunk__9737_10334;
var G__10340 = count__9738_10335;
var G__10341 = (i__9739_10336 + (1));
seq__9736_10333 = G__10338;
chunk__9737_10334 = G__10339;
count__9738_10335 = G__10340;
i__9739_10336 = G__10341;
continue;
} else {
var temp__5735__auto___10342 = cljs.core.seq(seq__9736_10333);
if(temp__5735__auto___10342){
var seq__9736_10343__$1 = temp__5735__auto___10342;
if(cljs.core.chunked_seq_QMARK_(seq__9736_10343__$1)){
var c__4556__auto___10344 = cljs.core.chunk_first(seq__9736_10343__$1);
var G__10345 = cljs.core.chunk_rest(seq__9736_10343__$1);
var G__10346 = c__4556__auto___10344;
var G__10347 = cljs.core.count(c__4556__auto___10344);
var G__10348 = (0);
seq__9736_10333 = G__10345;
chunk__9737_10334 = G__10346;
count__9738_10335 = G__10347;
i__9739_10336 = G__10348;
continue;
} else {
var param_10349 = cljs.core.first(seq__9736_10343__$1);
cljs.compiler.emit(param_10349);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10349,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10350 = cljs.core.next(seq__9736_10343__$1);
var G__10351 = null;
var G__10352 = (0);
var G__10353 = (0);
seq__9736_10333 = G__10350;
chunk__9737_10334 = G__10351;
count__9738_10335 = G__10352;
i__9739_10336 = G__10353;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_10331," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_10354 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_10354,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_10332,".call(this,");

var seq__9753_10355 = cljs.core.seq(params);
var chunk__9754_10356 = null;
var count__9755_10357 = (0);
var i__9756_10358 = (0);
while(true){
if((i__9756_10358 < count__9755_10357)){
var param_10359 = chunk__9754_10356.cljs$core$IIndexed$_nth$arity$2(null,i__9756_10358);
cljs.compiler.emit(param_10359);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10359,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10360 = seq__9753_10355;
var G__10361 = chunk__9754_10356;
var G__10362 = count__9755_10357;
var G__10363 = (i__9756_10358 + (1));
seq__9753_10355 = G__10360;
chunk__9754_10356 = G__10361;
count__9755_10357 = G__10362;
i__9756_10358 = G__10363;
continue;
} else {
var temp__5735__auto___10364 = cljs.core.seq(seq__9753_10355);
if(temp__5735__auto___10364){
var seq__9753_10365__$1 = temp__5735__auto___10364;
if(cljs.core.chunked_seq_QMARK_(seq__9753_10365__$1)){
var c__4556__auto___10366 = cljs.core.chunk_first(seq__9753_10365__$1);
var G__10367 = cljs.core.chunk_rest(seq__9753_10365__$1);
var G__10368 = c__4556__auto___10366;
var G__10369 = cljs.core.count(c__4556__auto___10366);
var G__10370 = (0);
seq__9753_10355 = G__10367;
chunk__9754_10356 = G__10368;
count__9755_10357 = G__10369;
i__9756_10358 = G__10370;
continue;
} else {
var param_10371 = cljs.core.first(seq__9753_10365__$1);
cljs.compiler.emit(param_10371);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_10371,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__10372 = cljs.core.next(seq__9753_10365__$1);
var G__10373 = null;
var G__10374 = (0);
var G__10375 = (0);
seq__9753_10355 = G__10372;
chunk__9754_10356 = G__10373;
count__9755_10357 = G__10374;
i__9756_10358 = G__10375;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10331,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_10331,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_10330__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10331,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_10332,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_10331,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__9764){
var map__9765 = p__9764;
var map__9765__$1 = (((((!((map__9765 == null))))?(((((map__9765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9765):map__9765);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9765__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__9757_SHARP_){
var and__4115__auto__ = p1__9757_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9757_SHARP_));
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
var name_10376__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_10377 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_10376__$1);
var maxparams_10378 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_10379 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_10377),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_10380 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__9761_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__9761_SHARP_)));
}),cljs.core.seq(mmap_10379));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_10377," = null;");

var seq__9772_10381 = cljs.core.seq(ms_10380);
var chunk__9773_10382 = null;
var count__9774_10383 = (0);
var i__9775_10384 = (0);
while(true){
if((i__9775_10384 < count__9774_10383)){
var vec__9782_10385 = chunk__9773_10382.cljs$core$IIndexed$_nth$arity$2(null,i__9775_10384);
var n_10386 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782_10385,(0),null);
var meth_10387 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9782_10385,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_10386," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10387))){
cljs.compiler.emit_variadic_fn_method(meth_10387);
} else {
cljs.compiler.emit_fn_method(meth_10387);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__10388 = seq__9772_10381;
var G__10389 = chunk__9773_10382;
var G__10390 = count__9774_10383;
var G__10391 = (i__9775_10384 + (1));
seq__9772_10381 = G__10388;
chunk__9773_10382 = G__10389;
count__9774_10383 = G__10390;
i__9775_10384 = G__10391;
continue;
} else {
var temp__5735__auto___10392 = cljs.core.seq(seq__9772_10381);
if(temp__5735__auto___10392){
var seq__9772_10393__$1 = temp__5735__auto___10392;
if(cljs.core.chunked_seq_QMARK_(seq__9772_10393__$1)){
var c__4556__auto___10394 = cljs.core.chunk_first(seq__9772_10393__$1);
var G__10395 = cljs.core.chunk_rest(seq__9772_10393__$1);
var G__10396 = c__4556__auto___10394;
var G__10397 = cljs.core.count(c__4556__auto___10394);
var G__10398 = (0);
seq__9772_10381 = G__10395;
chunk__9773_10382 = G__10396;
count__9774_10383 = G__10397;
i__9775_10384 = G__10398;
continue;
} else {
var vec__9789_10399 = cljs.core.first(seq__9772_10393__$1);
var n_10400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9789_10399,(0),null);
var meth_10401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9789_10399,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_10400," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10401))){
cljs.compiler.emit_variadic_fn_method(meth_10401);
} else {
cljs.compiler.emit_fn_method(meth_10401);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__10402 = cljs.core.next(seq__9772_10393__$1);
var G__10403 = null;
var G__10404 = (0);
var G__10405 = (0);
seq__9772_10381 = G__10402;
chunk__9773_10382 = G__10403;
count__9774_10383 = G__10404;
i__9775_10384 = G__10405;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10377," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_10378),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_10378)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_10378));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__9792_10406 = cljs.core.seq(ms_10380);
var chunk__9793_10407 = null;
var count__9794_10408 = (0);
var i__9795_10409 = (0);
while(true){
if((i__9795_10409 < count__9794_10408)){
var vec__9806_10410 = chunk__9793_10407.cljs$core$IIndexed$_nth$arity$2(null,i__9795_10409);
var n_10411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9806_10410,(0),null);
var meth_10412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9806_10410,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10412))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_10413 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_10413," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_10414 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_10413," = new cljs.core.IndexedSeq(",a_10414,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_10411,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_10378)),(((cljs.core.count(maxparams_10378) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_10413,");"], 0));
} else {
var pcnt_10415 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10412));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_10415,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_10411,".call(this",(((pcnt_10415 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_10415,maxparams_10378)),null,(1),null)),(2),null))),");");
}


var G__10416 = seq__9792_10406;
var G__10417 = chunk__9793_10407;
var G__10418 = count__9794_10408;
var G__10419 = (i__9795_10409 + (1));
seq__9792_10406 = G__10416;
chunk__9793_10407 = G__10417;
count__9794_10408 = G__10418;
i__9795_10409 = G__10419;
continue;
} else {
var temp__5735__auto___10420 = cljs.core.seq(seq__9792_10406);
if(temp__5735__auto___10420){
var seq__9792_10421__$1 = temp__5735__auto___10420;
if(cljs.core.chunked_seq_QMARK_(seq__9792_10421__$1)){
var c__4556__auto___10422 = cljs.core.chunk_first(seq__9792_10421__$1);
var G__10423 = cljs.core.chunk_rest(seq__9792_10421__$1);
var G__10424 = c__4556__auto___10422;
var G__10425 = cljs.core.count(c__4556__auto___10422);
var G__10426 = (0);
seq__9792_10406 = G__10423;
chunk__9793_10407 = G__10424;
count__9794_10408 = G__10425;
i__9795_10409 = G__10426;
continue;
} else {
var vec__9811_10427 = cljs.core.first(seq__9792_10421__$1);
var n_10428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9811_10427,(0),null);
var meth_10429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9811_10427,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10429))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_10430 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_10430," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_10431 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_10430," = new cljs.core.IndexedSeq(",a_10431,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_10428,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_10378)),(((cljs.core.count(maxparams_10378) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_10430,");"], 0));
} else {
var pcnt_10432 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10429));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_10432,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_10428,".call(this",(((pcnt_10432 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_10432,maxparams_10378)),null,(1),null)),(2),null))),");");
}


var G__10433 = cljs.core.next(seq__9792_10421__$1);
var G__10434 = null;
var G__10435 = (0);
var G__10436 = (0);
seq__9792_10406 = G__10433;
chunk__9793_10407 = G__10434;
count__9794_10408 = G__10435;
i__9795_10409 = G__10436;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_10437 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_10380)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_10437,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10377,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10377,".cljs$lang$applyTo = ",cljs.core.some((function (p1__9763_SHARP_){
var vec__9814 = p1__9763_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9814,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9814,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_10380),".cljs$lang$applyTo;");
} else {
}

var seq__9817_10438 = cljs.core.seq(ms_10380);
var chunk__9818_10439 = null;
var count__9819_10440 = (0);
var i__9820_10441 = (0);
while(true){
if((i__9820_10441 < count__9819_10440)){
var vec__9827_10442 = chunk__9818_10439.cljs$core$IIndexed$_nth$arity$2(null,i__9820_10441);
var n_10443 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9827_10442,(0),null);
var meth_10444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9827_10442,(1),null);
var c_10445 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10444));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10444))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10377,".cljs$core$IFn$_invoke$arity$variadic = ",n_10443,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_10377,".cljs$core$IFn$_invoke$arity$",c_10445," = ",n_10443,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__10446 = seq__9817_10438;
var G__10447 = chunk__9818_10439;
var G__10448 = count__9819_10440;
var G__10449 = (i__9820_10441 + (1));
seq__9817_10438 = G__10446;
chunk__9818_10439 = G__10447;
count__9819_10440 = G__10448;
i__9820_10441 = G__10449;
continue;
} else {
var temp__5735__auto___10450 = cljs.core.seq(seq__9817_10438);
if(temp__5735__auto___10450){
var seq__9817_10451__$1 = temp__5735__auto___10450;
if(cljs.core.chunked_seq_QMARK_(seq__9817_10451__$1)){
var c__4556__auto___10452 = cljs.core.chunk_first(seq__9817_10451__$1);
var G__10453 = cljs.core.chunk_rest(seq__9817_10451__$1);
var G__10454 = c__4556__auto___10452;
var G__10455 = cljs.core.count(c__4556__auto___10452);
var G__10456 = (0);
seq__9817_10438 = G__10453;
chunk__9818_10439 = G__10454;
count__9819_10440 = G__10455;
i__9820_10441 = G__10456;
continue;
} else {
var vec__9832_10457 = cljs.core.first(seq__9817_10451__$1);
var n_10458 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9832_10457,(0),null);
var meth_10459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9832_10457,(1),null);
var c_10460 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_10459));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_10459))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_10377,".cljs$core$IFn$_invoke$arity$variadic = ",n_10458,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_10377,".cljs$core$IFn$_invoke$arity$",c_10460," = ",n_10458,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__10461 = cljs.core.next(seq__9817_10451__$1);
var G__10462 = null;
var G__10463 = (0);
var G__10464 = (0);
seq__9817_10438 = G__10461;
chunk__9818_10439 = G__10462;
count__9819_10440 = G__10463;
i__9820_10441 = G__10464;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_10377,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__9835){
var map__9836 = p__9835;
var map__9836__$1 = (((((!((map__9836 == null))))?(((((map__9836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9836):map__9836);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9836__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9836__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__9838_10465 = cljs.core.seq(statements);
var chunk__9839_10466 = null;
var count__9840_10467 = (0);
var i__9841_10468 = (0);
while(true){
if((i__9841_10468 < count__9840_10467)){
var s_10469 = chunk__9839_10466.cljs$core$IIndexed$_nth$arity$2(null,i__9841_10468);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_10469);


var G__10470 = seq__9838_10465;
var G__10471 = chunk__9839_10466;
var G__10472 = count__9840_10467;
var G__10473 = (i__9841_10468 + (1));
seq__9838_10465 = G__10470;
chunk__9839_10466 = G__10471;
count__9840_10467 = G__10472;
i__9841_10468 = G__10473;
continue;
} else {
var temp__5735__auto___10474 = cljs.core.seq(seq__9838_10465);
if(temp__5735__auto___10474){
var seq__9838_10475__$1 = temp__5735__auto___10474;
if(cljs.core.chunked_seq_QMARK_(seq__9838_10475__$1)){
var c__4556__auto___10476 = cljs.core.chunk_first(seq__9838_10475__$1);
var G__10477 = cljs.core.chunk_rest(seq__9838_10475__$1);
var G__10478 = c__4556__auto___10476;
var G__10479 = cljs.core.count(c__4556__auto___10476);
var G__10480 = (0);
seq__9838_10465 = G__10477;
chunk__9839_10466 = G__10478;
count__9840_10467 = G__10479;
i__9841_10468 = G__10480;
continue;
} else {
var s_10481 = cljs.core.first(seq__9838_10475__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_10481);


var G__10482 = cljs.core.next(seq__9838_10475__$1);
var G__10483 = null;
var G__10484 = (0);
var G__10485 = (0);
seq__9838_10465 = G__10482;
chunk__9839_10466 = G__10483;
count__9840_10467 = G__10484;
i__9841_10468 = G__10485;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__9842){
var map__9843 = p__9842;
var map__9843__$1 = (((((!((map__9843 == null))))?(((((map__9843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9843):map__9843);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9843__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9843__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9843__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9843__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9843__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__9845,is_loop){
var map__9846 = p__9845;
var map__9846__$1 = (((((!((map__9846 == null))))?(((((map__9846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9846):map__9846);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9846__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9846__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9846__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__9848_10486 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__9849_10487 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__9849_10487);

try{var seq__9850_10488 = cljs.core.seq(bindings);
var chunk__9851_10489 = null;
var count__9852_10490 = (0);
var i__9853_10491 = (0);
while(true){
if((i__9853_10491 < count__9852_10490)){
var map__9858_10492 = chunk__9851_10489.cljs$core$IIndexed$_nth$arity$2(null,i__9853_10491);
var map__9858_10493__$1 = (((((!((map__9858_10492 == null))))?(((((map__9858_10492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9858_10492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9858_10492):map__9858_10492);
var binding_10494 = map__9858_10493__$1;
var init_10495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9858_10493__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_10494);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_10495,";");


var G__10496 = seq__9850_10488;
var G__10497 = chunk__9851_10489;
var G__10498 = count__9852_10490;
var G__10499 = (i__9853_10491 + (1));
seq__9850_10488 = G__10496;
chunk__9851_10489 = G__10497;
count__9852_10490 = G__10498;
i__9853_10491 = G__10499;
continue;
} else {
var temp__5735__auto___10500 = cljs.core.seq(seq__9850_10488);
if(temp__5735__auto___10500){
var seq__9850_10501__$1 = temp__5735__auto___10500;
if(cljs.core.chunked_seq_QMARK_(seq__9850_10501__$1)){
var c__4556__auto___10502 = cljs.core.chunk_first(seq__9850_10501__$1);
var G__10503 = cljs.core.chunk_rest(seq__9850_10501__$1);
var G__10504 = c__4556__auto___10502;
var G__10505 = cljs.core.count(c__4556__auto___10502);
var G__10506 = (0);
seq__9850_10488 = G__10503;
chunk__9851_10489 = G__10504;
count__9852_10490 = G__10505;
i__9853_10491 = G__10506;
continue;
} else {
var map__9860_10507 = cljs.core.first(seq__9850_10501__$1);
var map__9860_10508__$1 = (((((!((map__9860_10507 == null))))?(((((map__9860_10507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9860_10507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9860_10507):map__9860_10507);
var binding_10509 = map__9860_10508__$1;
var init_10510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9860_10508__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_10509);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_10510,";");


var G__10511 = cljs.core.next(seq__9850_10501__$1);
var G__10512 = null;
var G__10513 = (0);
var G__10514 = (0);
seq__9850_10488 = G__10511;
chunk__9851_10489 = G__10512;
count__9852_10490 = G__10513;
i__9853_10491 = G__10514;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__9848_10486);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__9862){
var map__9863 = p__9862;
var map__9863__$1 = (((((!((map__9863 == null))))?(((((map__9863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9863):map__9863);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9863__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9863__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9863__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___10515 = cljs.core.count(exprs);
var i_10516 = (0);
while(true){
if((i_10516 < n__4613__auto___10515)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_10516) : temps.call(null,i_10516))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_10516) : exprs.call(null,i_10516)),";");

var G__10517 = (i_10516 + (1));
i_10516 = G__10517;
continue;
} else {
}
break;
}

var n__4613__auto___10518 = cljs.core.count(exprs);
var i_10519 = (0);
while(true){
if((i_10519 < n__4613__auto___10518)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_10519) : params.call(null,i_10519)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_10519) : temps.call(null,i_10519)),";");

var G__10520 = (i_10519 + (1));
i_10519 = G__10520;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__9865){
var map__9866 = p__9865;
var map__9866__$1 = (((((!((map__9866 == null))))?(((((map__9866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9866):map__9866);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9866__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9866__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9866__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__9868_10521 = cljs.core.seq(bindings);
var chunk__9869_10522 = null;
var count__9870_10523 = (0);
var i__9871_10524 = (0);
while(true){
if((i__9871_10524 < count__9870_10523)){
var map__9876_10525 = chunk__9869_10522.cljs$core$IIndexed$_nth$arity$2(null,i__9871_10524);
var map__9876_10526__$1 = (((((!((map__9876_10525 == null))))?(((((map__9876_10525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9876_10525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9876_10525):map__9876_10525);
var binding_10527 = map__9876_10526__$1;
var init_10528 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9876_10526__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_10527)," = ",init_10528,";");


var G__10529 = seq__9868_10521;
var G__10530 = chunk__9869_10522;
var G__10531 = count__9870_10523;
var G__10532 = (i__9871_10524 + (1));
seq__9868_10521 = G__10529;
chunk__9869_10522 = G__10530;
count__9870_10523 = G__10531;
i__9871_10524 = G__10532;
continue;
} else {
var temp__5735__auto___10533 = cljs.core.seq(seq__9868_10521);
if(temp__5735__auto___10533){
var seq__9868_10534__$1 = temp__5735__auto___10533;
if(cljs.core.chunked_seq_QMARK_(seq__9868_10534__$1)){
var c__4556__auto___10535 = cljs.core.chunk_first(seq__9868_10534__$1);
var G__10536 = cljs.core.chunk_rest(seq__9868_10534__$1);
var G__10537 = c__4556__auto___10535;
var G__10538 = cljs.core.count(c__4556__auto___10535);
var G__10539 = (0);
seq__9868_10521 = G__10536;
chunk__9869_10522 = G__10537;
count__9870_10523 = G__10538;
i__9871_10524 = G__10539;
continue;
} else {
var map__9878_10540 = cljs.core.first(seq__9868_10534__$1);
var map__9878_10541__$1 = (((((!((map__9878_10540 == null))))?(((((map__9878_10540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9878_10540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9878_10540):map__9878_10540);
var binding_10542 = map__9878_10541__$1;
var init_10543 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9878_10541__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_10542)," = ",init_10543,";");


var G__10544 = cljs.core.next(seq__9868_10534__$1);
var G__10545 = null;
var G__10546 = (0);
var G__10547 = (0);
seq__9868_10521 = G__10544;
chunk__9869_10522 = G__10545;
count__9870_10523 = G__10546;
i__9871_10524 = G__10547;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__9882){
var map__9883 = p__9882;
var map__9883__$1 = (((((!((map__9883 == null))))?(((((map__9883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9883.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9883):map__9883);
var expr = map__9883__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9883__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9883__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9883__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__9895 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__9895.cljs$core$IFn$_invoke$arity$1 ? fexpr__9895.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__9895.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__9897 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__9897.cljs$core$IFn$_invoke$arity$1 ? fexpr__9897.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__9897.call(null,first_arg_tag));
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
var vec__9885 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__9880_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9880_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__9881_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9881_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9885,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9885,(1),null);
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
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
var pimpl_10548 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_10548,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_10549 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_10549,args)),(((mfa_10549 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_10549,args)),"], 0))"], 0));
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
var G__9899 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__9898 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__9898.cljs$core$IFn$_invoke$arity$1 ? fexpr__9898.cljs$core$IFn$_invoke$arity$1(G__9899) : fexpr__9898.call(null,G__9899));
} else {
return and__4115__auto__;
}
})())){
var fprop_10550 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_10550," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_10550,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_10550," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_10550,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__9900){
var map__9901 = p__9900;
var map__9901__$1 = (((((!((map__9901 == null))))?(((((map__9901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9901):map__9901);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9901__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9901__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9901__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__9903){
var map__9904 = p__9903;
var map__9904__$1 = (((((!((map__9904 == null))))?(((((map__9904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9904.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9904):map__9904);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9904__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9904__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9904__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
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
var map__9906 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__9906__$1 = (((((!((map__9906 == null))))?(((((map__9906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9906):map__9906);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__9907 = options;
var map__9907__$1 = (((((!((map__9907 == null))))?(((((map__9907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9907):map__9907);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9907__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9907__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9907__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__9908 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__9913 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__9913__$1 = (((((!((map__9913 == null))))?(((((map__9913.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9913.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9913):map__9913);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9913__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9913__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9908,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__9915_10551 = cljs.core.seq(libs_to_load);
var chunk__9916_10552 = null;
var count__9917_10553 = (0);
var i__9918_10554 = (0);
while(true){
if((i__9918_10554 < count__9917_10553)){
var lib_10555 = chunk__9916_10552.cljs$core$IIndexed$_nth$arity$2(null,i__9918_10554);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_10555)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10555),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10555),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10555),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10555),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_10555,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10555),"');");
}

}
}
}


var G__10556 = seq__9915_10551;
var G__10557 = chunk__9916_10552;
var G__10558 = count__9917_10553;
var G__10559 = (i__9918_10554 + (1));
seq__9915_10551 = G__10556;
chunk__9916_10552 = G__10557;
count__9917_10553 = G__10558;
i__9918_10554 = G__10559;
continue;
} else {
var temp__5735__auto___10560 = cljs.core.seq(seq__9915_10551);
if(temp__5735__auto___10560){
var seq__9915_10561__$1 = temp__5735__auto___10560;
if(cljs.core.chunked_seq_QMARK_(seq__9915_10561__$1)){
var c__4556__auto___10562 = cljs.core.chunk_first(seq__9915_10561__$1);
var G__10563 = cljs.core.chunk_rest(seq__9915_10561__$1);
var G__10564 = c__4556__auto___10562;
var G__10565 = cljs.core.count(c__4556__auto___10562);
var G__10566 = (0);
seq__9915_10551 = G__10563;
chunk__9916_10552 = G__10564;
count__9917_10553 = G__10565;
i__9918_10554 = G__10566;
continue;
} else {
var lib_10567 = cljs.core.first(seq__9915_10561__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_10567)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10567),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10567),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_10567),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10567),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_10567,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_10567),"');");
}

}
}
}


var G__10568 = cljs.core.next(seq__9915_10561__$1);
var G__10569 = null;
var G__10570 = (0);
var G__10571 = (0);
seq__9915_10551 = G__10568;
chunk__9916_10552 = G__10569;
count__9917_10553 = G__10570;
i__9918_10554 = G__10571;
continue;
}
} else {
}
}
break;
}

var seq__9919_10572 = cljs.core.seq(node_libs);
var chunk__9920_10573 = null;
var count__9921_10574 = (0);
var i__9922_10575 = (0);
while(true){
if((i__9922_10575 < count__9921_10574)){
var lib_10576 = chunk__9920_10573.cljs$core$IIndexed$_nth$arity$2(null,i__9922_10575);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_10576)," = require('",lib_10576,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__10577 = seq__9919_10572;
var G__10578 = chunk__9920_10573;
var G__10579 = count__9921_10574;
var G__10580 = (i__9922_10575 + (1));
seq__9919_10572 = G__10577;
chunk__9920_10573 = G__10578;
count__9921_10574 = G__10579;
i__9922_10575 = G__10580;
continue;
} else {
var temp__5735__auto___10581 = cljs.core.seq(seq__9919_10572);
if(temp__5735__auto___10581){
var seq__9919_10582__$1 = temp__5735__auto___10581;
if(cljs.core.chunked_seq_QMARK_(seq__9919_10582__$1)){
var c__4556__auto___10583 = cljs.core.chunk_first(seq__9919_10582__$1);
var G__10584 = cljs.core.chunk_rest(seq__9919_10582__$1);
var G__10585 = c__4556__auto___10583;
var G__10586 = cljs.core.count(c__4556__auto___10583);
var G__10587 = (0);
seq__9919_10572 = G__10584;
chunk__9920_10573 = G__10585;
count__9921_10574 = G__10586;
i__9922_10575 = G__10587;
continue;
} else {
var lib_10588 = cljs.core.first(seq__9919_10582__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_10588)," = require('",lib_10588,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__10589 = cljs.core.next(seq__9919_10582__$1);
var G__10590 = null;
var G__10591 = (0);
var G__10592 = (0);
seq__9919_10572 = G__10589;
chunk__9920_10573 = G__10590;
count__9921_10574 = G__10591;
i__9922_10575 = G__10592;
continue;
}
} else {
}
}
break;
}

var seq__9923_10593 = cljs.core.seq(global_exports_libs);
var chunk__9924_10594 = null;
var count__9925_10595 = (0);
var i__9926_10596 = (0);
while(true){
if((i__9926_10596 < count__9925_10595)){
var lib_10597 = chunk__9924_10594.cljs$core$IIndexed$_nth$arity$2(null,i__9926_10596);
var map__9931_10598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_10597));
var map__9931_10599__$1 = (((((!((map__9931_10598 == null))))?(((((map__9931_10598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9931_10598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9931_10598):map__9931_10598);
var global_exports_10600 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9931_10599__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_10600,lib_10597);


var G__10601 = seq__9923_10593;
var G__10602 = chunk__9924_10594;
var G__10603 = count__9925_10595;
var G__10604 = (i__9926_10596 + (1));
seq__9923_10593 = G__10601;
chunk__9924_10594 = G__10602;
count__9925_10595 = G__10603;
i__9926_10596 = G__10604;
continue;
} else {
var temp__5735__auto___10605 = cljs.core.seq(seq__9923_10593);
if(temp__5735__auto___10605){
var seq__9923_10606__$1 = temp__5735__auto___10605;
if(cljs.core.chunked_seq_QMARK_(seq__9923_10606__$1)){
var c__4556__auto___10607 = cljs.core.chunk_first(seq__9923_10606__$1);
var G__10608 = cljs.core.chunk_rest(seq__9923_10606__$1);
var G__10609 = c__4556__auto___10607;
var G__10610 = cljs.core.count(c__4556__auto___10607);
var G__10611 = (0);
seq__9923_10593 = G__10608;
chunk__9924_10594 = G__10609;
count__9925_10595 = G__10610;
i__9926_10596 = G__10611;
continue;
} else {
var lib_10612 = cljs.core.first(seq__9923_10606__$1);
var map__9933_10613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_10612));
var map__9933_10614__$1 = (((((!((map__9933_10613 == null))))?(((((map__9933_10613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9933_10613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9933_10613):map__9933_10613);
var global_exports_10615 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9933_10614__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_10615,lib_10612);


var G__10616 = cljs.core.next(seq__9923_10606__$1);
var G__10617 = null;
var G__10618 = (0);
var G__10619 = (0);
seq__9923_10593 = G__10616;
chunk__9924_10594 = G__10617;
count__9925_10595 = G__10618;
i__9926_10596 = G__10619;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__9935){
var map__9936 = p__9935;
var map__9936__$1 = (((((!((map__9936 == null))))?(((((map__9936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9936):map__9936);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9936__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__9938){
var map__9939 = p__9938;
var map__9939__$1 = (((((!((map__9939 == null))))?(((((map__9939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9939):map__9939);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9939__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__9941){
var map__9942 = p__9941;
var map__9942__$1 = (((((!((map__9942 == null))))?(((((map__9942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9942):map__9942);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9942__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9942__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9942__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9942__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9942__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__9944_10620 = cljs.core.seq(protocols);
var chunk__9945_10621 = null;
var count__9946_10622 = (0);
var i__9947_10623 = (0);
while(true){
if((i__9947_10623 < count__9946_10622)){
var protocol_10624 = chunk__9945_10621.cljs$core$IIndexed$_nth$arity$2(null,i__9947_10623);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10624)),"}");


var G__10625 = seq__9944_10620;
var G__10626 = chunk__9945_10621;
var G__10627 = count__9946_10622;
var G__10628 = (i__9947_10623 + (1));
seq__9944_10620 = G__10625;
chunk__9945_10621 = G__10626;
count__9946_10622 = G__10627;
i__9947_10623 = G__10628;
continue;
} else {
var temp__5735__auto___10629 = cljs.core.seq(seq__9944_10620);
if(temp__5735__auto___10629){
var seq__9944_10630__$1 = temp__5735__auto___10629;
if(cljs.core.chunked_seq_QMARK_(seq__9944_10630__$1)){
var c__4556__auto___10631 = cljs.core.chunk_first(seq__9944_10630__$1);
var G__10632 = cljs.core.chunk_rest(seq__9944_10630__$1);
var G__10633 = c__4556__auto___10631;
var G__10634 = cljs.core.count(c__4556__auto___10631);
var G__10635 = (0);
seq__9944_10620 = G__10632;
chunk__9945_10621 = G__10633;
count__9946_10622 = G__10634;
i__9947_10623 = G__10635;
continue;
} else {
var protocol_10636 = cljs.core.first(seq__9944_10630__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10636)),"}");


var G__10637 = cljs.core.next(seq__9944_10630__$1);
var G__10638 = null;
var G__10639 = (0);
var G__10640 = (0);
seq__9944_10620 = G__10637;
chunk__9945_10621 = G__10638;
count__9946_10622 = G__10639;
i__9947_10623 = G__10640;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__9948_10641 = cljs.core.seq(fields__$1);
var chunk__9949_10642 = null;
var count__9950_10643 = (0);
var i__9951_10644 = (0);
while(true){
if((i__9951_10644 < count__9950_10643)){
var fld_10645 = chunk__9949_10642.cljs$core$IIndexed$_nth$arity$2(null,i__9951_10644);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_10645," = ",fld_10645,";");


var G__10646 = seq__9948_10641;
var G__10647 = chunk__9949_10642;
var G__10648 = count__9950_10643;
var G__10649 = (i__9951_10644 + (1));
seq__9948_10641 = G__10646;
chunk__9949_10642 = G__10647;
count__9950_10643 = G__10648;
i__9951_10644 = G__10649;
continue;
} else {
var temp__5735__auto___10650 = cljs.core.seq(seq__9948_10641);
if(temp__5735__auto___10650){
var seq__9948_10651__$1 = temp__5735__auto___10650;
if(cljs.core.chunked_seq_QMARK_(seq__9948_10651__$1)){
var c__4556__auto___10652 = cljs.core.chunk_first(seq__9948_10651__$1);
var G__10653 = cljs.core.chunk_rest(seq__9948_10651__$1);
var G__10654 = c__4556__auto___10652;
var G__10655 = cljs.core.count(c__4556__auto___10652);
var G__10656 = (0);
seq__9948_10641 = G__10653;
chunk__9949_10642 = G__10654;
count__9950_10643 = G__10655;
i__9951_10644 = G__10656;
continue;
} else {
var fld_10657 = cljs.core.first(seq__9948_10651__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_10657," = ",fld_10657,";");


var G__10658 = cljs.core.next(seq__9948_10651__$1);
var G__10659 = null;
var G__10660 = (0);
var G__10661 = (0);
seq__9948_10641 = G__10658;
chunk__9949_10642 = G__10659;
count__9950_10643 = G__10660;
i__9951_10644 = G__10661;
continue;
}
} else {
}
}
break;
}

var seq__9952_10662 = cljs.core.seq(pmasks);
var chunk__9953_10663 = null;
var count__9954_10664 = (0);
var i__9955_10665 = (0);
while(true){
if((i__9955_10665 < count__9954_10664)){
var vec__9962_10666 = chunk__9953_10663.cljs$core$IIndexed$_nth$arity$2(null,i__9955_10665);
var pno_10667 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9962_10666,(0),null);
var pmask_10668 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9962_10666,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_10667,"$ = ",pmask_10668,";");


var G__10669 = seq__9952_10662;
var G__10670 = chunk__9953_10663;
var G__10671 = count__9954_10664;
var G__10672 = (i__9955_10665 + (1));
seq__9952_10662 = G__10669;
chunk__9953_10663 = G__10670;
count__9954_10664 = G__10671;
i__9955_10665 = G__10672;
continue;
} else {
var temp__5735__auto___10673 = cljs.core.seq(seq__9952_10662);
if(temp__5735__auto___10673){
var seq__9952_10674__$1 = temp__5735__auto___10673;
if(cljs.core.chunked_seq_QMARK_(seq__9952_10674__$1)){
var c__4556__auto___10675 = cljs.core.chunk_first(seq__9952_10674__$1);
var G__10676 = cljs.core.chunk_rest(seq__9952_10674__$1);
var G__10677 = c__4556__auto___10675;
var G__10678 = cljs.core.count(c__4556__auto___10675);
var G__10679 = (0);
seq__9952_10662 = G__10676;
chunk__9953_10663 = G__10677;
count__9954_10664 = G__10678;
i__9955_10665 = G__10679;
continue;
} else {
var vec__9965_10680 = cljs.core.first(seq__9952_10674__$1);
var pno_10681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9965_10680,(0),null);
var pmask_10682 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9965_10680,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_10681,"$ = ",pmask_10682,";");


var G__10683 = cljs.core.next(seq__9952_10674__$1);
var G__10684 = null;
var G__10685 = (0);
var G__10686 = (0);
seq__9952_10662 = G__10683;
chunk__9953_10663 = G__10684;
count__9954_10664 = G__10685;
i__9955_10665 = G__10686;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__9968){
var map__9969 = p__9968;
var map__9969__$1 = (((((!((map__9969 == null))))?(((((map__9969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9969):map__9969);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9969__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9969__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9969__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9969__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9969__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__9971_10687 = cljs.core.seq(protocols);
var chunk__9972_10688 = null;
var count__9973_10689 = (0);
var i__9974_10690 = (0);
while(true){
if((i__9974_10690 < count__9973_10689)){
var protocol_10691 = chunk__9972_10688.cljs$core$IIndexed$_nth$arity$2(null,i__9974_10690);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10691)),"}");


var G__10692 = seq__9971_10687;
var G__10693 = chunk__9972_10688;
var G__10694 = count__9973_10689;
var G__10695 = (i__9974_10690 + (1));
seq__9971_10687 = G__10692;
chunk__9972_10688 = G__10693;
count__9973_10689 = G__10694;
i__9974_10690 = G__10695;
continue;
} else {
var temp__5735__auto___10696 = cljs.core.seq(seq__9971_10687);
if(temp__5735__auto___10696){
var seq__9971_10697__$1 = temp__5735__auto___10696;
if(cljs.core.chunked_seq_QMARK_(seq__9971_10697__$1)){
var c__4556__auto___10698 = cljs.core.chunk_first(seq__9971_10697__$1);
var G__10699 = cljs.core.chunk_rest(seq__9971_10697__$1);
var G__10700 = c__4556__auto___10698;
var G__10701 = cljs.core.count(c__4556__auto___10698);
var G__10702 = (0);
seq__9971_10687 = G__10699;
chunk__9972_10688 = G__10700;
count__9973_10689 = G__10701;
i__9974_10690 = G__10702;
continue;
} else {
var protocol_10703 = cljs.core.first(seq__9971_10697__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_10703)),"}");


var G__10704 = cljs.core.next(seq__9971_10697__$1);
var G__10705 = null;
var G__10706 = (0);
var G__10707 = (0);
seq__9971_10687 = G__10704;
chunk__9972_10688 = G__10705;
count__9973_10689 = G__10706;
i__9974_10690 = G__10707;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__9975_10708 = cljs.core.seq(fields__$1);
var chunk__9976_10709 = null;
var count__9977_10710 = (0);
var i__9978_10711 = (0);
while(true){
if((i__9978_10711 < count__9977_10710)){
var fld_10712 = chunk__9976_10709.cljs$core$IIndexed$_nth$arity$2(null,i__9978_10711);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_10712," = ",fld_10712,";");


var G__10713 = seq__9975_10708;
var G__10714 = chunk__9976_10709;
var G__10715 = count__9977_10710;
var G__10716 = (i__9978_10711 + (1));
seq__9975_10708 = G__10713;
chunk__9976_10709 = G__10714;
count__9977_10710 = G__10715;
i__9978_10711 = G__10716;
continue;
} else {
var temp__5735__auto___10717 = cljs.core.seq(seq__9975_10708);
if(temp__5735__auto___10717){
var seq__9975_10718__$1 = temp__5735__auto___10717;
if(cljs.core.chunked_seq_QMARK_(seq__9975_10718__$1)){
var c__4556__auto___10719 = cljs.core.chunk_first(seq__9975_10718__$1);
var G__10720 = cljs.core.chunk_rest(seq__9975_10718__$1);
var G__10721 = c__4556__auto___10719;
var G__10722 = cljs.core.count(c__4556__auto___10719);
var G__10723 = (0);
seq__9975_10708 = G__10720;
chunk__9976_10709 = G__10721;
count__9977_10710 = G__10722;
i__9978_10711 = G__10723;
continue;
} else {
var fld_10724 = cljs.core.first(seq__9975_10718__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_10724," = ",fld_10724,";");


var G__10725 = cljs.core.next(seq__9975_10718__$1);
var G__10726 = null;
var G__10727 = (0);
var G__10728 = (0);
seq__9975_10708 = G__10725;
chunk__9976_10709 = G__10726;
count__9977_10710 = G__10727;
i__9978_10711 = G__10728;
continue;
}
} else {
}
}
break;
}

var seq__9979_10729 = cljs.core.seq(pmasks);
var chunk__9980_10730 = null;
var count__9981_10731 = (0);
var i__9982_10732 = (0);
while(true){
if((i__9982_10732 < count__9981_10731)){
var vec__9989_10733 = chunk__9980_10730.cljs$core$IIndexed$_nth$arity$2(null,i__9982_10732);
var pno_10734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9989_10733,(0),null);
var pmask_10735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9989_10733,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_10734,"$ = ",pmask_10735,";");


var G__10736 = seq__9979_10729;
var G__10737 = chunk__9980_10730;
var G__10738 = count__9981_10731;
var G__10739 = (i__9982_10732 + (1));
seq__9979_10729 = G__10736;
chunk__9980_10730 = G__10737;
count__9981_10731 = G__10738;
i__9982_10732 = G__10739;
continue;
} else {
var temp__5735__auto___10740 = cljs.core.seq(seq__9979_10729);
if(temp__5735__auto___10740){
var seq__9979_10741__$1 = temp__5735__auto___10740;
if(cljs.core.chunked_seq_QMARK_(seq__9979_10741__$1)){
var c__4556__auto___10742 = cljs.core.chunk_first(seq__9979_10741__$1);
var G__10743 = cljs.core.chunk_rest(seq__9979_10741__$1);
var G__10744 = c__4556__auto___10742;
var G__10745 = cljs.core.count(c__4556__auto___10742);
var G__10746 = (0);
seq__9979_10729 = G__10743;
chunk__9980_10730 = G__10744;
count__9981_10731 = G__10745;
i__9982_10732 = G__10746;
continue;
} else {
var vec__9992_10747 = cljs.core.first(seq__9979_10741__$1);
var pno_10748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992_10747,(0),null);
var pmask_10749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9992_10747,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_10748,"$ = ",pmask_10749,";");


var G__10750 = cljs.core.next(seq__9979_10741__$1);
var G__10751 = null;
var G__10752 = (0);
var G__10753 = (0);
seq__9979_10729 = G__10750;
chunk__9980_10730 = G__10751;
count__9981_10731 = G__10752;
i__9982_10732 = G__10753;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__9995){
var map__9996 = p__9995;
var map__9996__$1 = (((((!((map__9996 == null))))?(((((map__9996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9996):map__9996);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9996__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9996__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9996__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9996__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9996__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__9998){
var map__9999 = p__9998;
var map__9999__$1 = (((((!((map__9999 == null))))?(((((map__9999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9999):map__9999);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9999__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9999__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9999__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9999__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__8926__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8926__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__10005 = cljs.core.seq(table);
var chunk__10006 = null;
var count__10007 = (0);
var i__10008 = (0);
while(true){
if((i__10008 < count__10007)){
var vec__10015 = chunk__10006.cljs$core$IIndexed$_nth$arity$2(null,i__10008);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10015,(1),null);
var ns_10754 = cljs.core.namespace(sym);
var name_10755 = cljs.core.name(sym);
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


var G__10757 = seq__10005;
var G__10758 = chunk__10006;
var G__10759 = count__10007;
var G__10760 = (i__10008 + (1));
seq__10005 = G__10757;
chunk__10006 = G__10758;
count__10007 = G__10759;
i__10008 = G__10760;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__10005);
if(temp__5735__auto__){
var seq__10005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10005__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__10005__$1);
var G__10765 = cljs.core.chunk_rest(seq__10005__$1);
var G__10766 = c__4556__auto__;
var G__10767 = cljs.core.count(c__4556__auto__);
var G__10768 = (0);
seq__10005 = G__10765;
chunk__10006 = G__10766;
count__10007 = G__10767;
i__10008 = G__10768;
continue;
} else {
var vec__10018 = cljs.core.first(seq__10005__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10018,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10018,(1),null);
var ns_10769 = cljs.core.namespace(sym);
var name_10770 = cljs.core.name(sym);
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


var G__10771 = cljs.core.next(seq__10005__$1);
var G__10772 = null;
var G__10773 = (0);
var G__10774 = (0);
seq__10005 = G__10771;
chunk__10006 = G__10772;
count__10007 = G__10773;
i__10008 = G__10774;
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
var G__10022 = arguments.length;
switch (G__10022) {
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
var k_10776 = cljs.core.first(ks);
var vec__10023_10777 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_10776);
var top_10778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10023_10777,(0),null);
var prefix_SINGLEQUOTE__10779 = vec__10023_10777;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_10776)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__10779) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_10778)) || (cljs.core.contains_QMARK_(known_externs,top_10778)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__10779)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_10778);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__10779)),";");
}
} else {
}

var m_10784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_10776);
if(cljs.core.empty_QMARK_(m_10784)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__10779,m_10784,top_level,known_externs);
}

var G__10785 = cljs.core.next(ks);
ks = G__10785;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
