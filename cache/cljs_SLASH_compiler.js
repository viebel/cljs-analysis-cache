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
var map__15110 = s;
var map__15110__$1 = (((((!((map__15110 == null))))?(((((map__15110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15110):map__15110);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15110__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15110__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15125 = info;
var map__15126 = G__15125;
var map__15126__$1 = (((((!((map__15126 == null))))?(((((map__15126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15126):map__15126);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15126__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15125__$1 = G__15125;
while(true){
var d__$2 = d__$1;
var map__15163 = G__15125__$1;
var map__15163__$1 = (((((!((map__15163 == null))))?(((((map__15163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15163):map__15163);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15163__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__17442 = (d__$2 + (1));
var G__17443 = shadow__$1;
d__$1 = G__17442;
G__15125__$1 = G__17443;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15185){
var map__15187 = p__15185;
var map__15187__$1 = (((((!((map__15187 == null))))?(((((map__15187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15187):map__15187);
var name_var = map__15187__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15187__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15193 = info;
var map__15193__$1 = (((((!((map__15193 == null))))?(((((map__15193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15193):map__15193);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15193__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__15206 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__15206) : cljs.compiler.munge.call(null,G__15206));
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
var G__15224 = arguments.length;
switch (G__15224) {
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
var ms = (function (){var fexpr__15243 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__15243.cljs$core$IFn$_invoke$arity$1 ? fexpr__15243.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__15243.call(null,ss__$3));
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
var G__15253 = cp;
switch (G__15253) {
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
var seq__15266_17510 = cljs.core.seq(s);
var chunk__15269_17511 = null;
var count__15270_17512 = (0);
var i__15271_17513 = (0);
while(true){
if((i__15271_17513 < count__15270_17512)){
var c_17515 = chunk__15269_17511.cljs$core$IIndexed$_nth$arity$2(null,i__15271_17513);
sb.append(cljs.compiler.escape_char(c_17515));


var G__17516 = seq__15266_17510;
var G__17517 = chunk__15269_17511;
var G__17518 = count__15270_17512;
var G__17519 = (i__15271_17513 + (1));
seq__15266_17510 = G__17516;
chunk__15269_17511 = G__17517;
count__15270_17512 = G__17518;
i__15271_17513 = G__17519;
continue;
} else {
var temp__5735__auto___17520 = cljs.core.seq(seq__15266_17510);
if(temp__5735__auto___17520){
var seq__15266_17521__$1 = temp__5735__auto___17520;
if(cljs.core.chunked_seq_QMARK_(seq__15266_17521__$1)){
var c__4556__auto___17523 = cljs.core.chunk_first(seq__15266_17521__$1);
var G__17524 = cljs.core.chunk_rest(seq__15266_17521__$1);
var G__17525 = c__4556__auto___17523;
var G__17526 = cljs.core.count(c__4556__auto___17523);
var G__17527 = (0);
seq__15266_17510 = G__17524;
chunk__15269_17511 = G__17525;
count__15270_17512 = G__17526;
i__15271_17513 = G__17527;
continue;
} else {
var c_17531 = cljs.core.first(seq__15266_17521__$1);
sb.append(cljs.compiler.escape_char(c_17531));


var G__17535 = cljs.core.next(seq__15266_17521__$1);
var G__17536 = null;
var G__17537 = (0);
var G__17538 = (0);
seq__15266_17510 = G__17535;
chunk__15269_17511 = G__17536;
count__15270_17512 = G__17537;
i__15271_17513 = G__17538;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15292 = cljs.core.get_global_hierarchy;
return (fexpr__15292.cljs$core$IFn$_invoke$arity$0 ? fexpr__15292.cljs$core$IFn$_invoke$arity$0() : fexpr__15292.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15296_17542 = ast;
var map__15296_17543__$1 = (((((!((map__15296_17542 == null))))?(((((map__15296_17542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15296_17542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15296_17542):map__15296_17542);
var env_17544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15296_17543__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_17544))){
var map__15308_17552 = env_17544;
var map__15308_17553__$1 = (((((!((map__15308_17552 == null))))?(((((map__15308_17552.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15308_17552.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15308_17552):map__15308_17552);
var line_17554 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15308_17553__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15308_17553__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__15316 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__15323 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__15322 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__15322.cljs$core$IFn$_invoke$arity$1 ? fexpr__15322.cljs$core$IFn$_invoke$arity$1(G__15323) : fexpr__15322.call(null,G__15323));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15316,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15316;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_17554 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_17555)?(column_17555 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__15365 = arguments.length;
switch (G__15365) {
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
var len__4736__auto___17565 = arguments.length;
var i__4737__auto___17567 = (0);
while(true){
if((i__4737__auto___17567 < len__4736__auto___17565)){
args_arr__4757__auto__.push((arguments[i__4737__auto___17567]));

var G__17568 = (i__4737__auto___17567 + (1));
i__4737__auto___17567 = G__17568;
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
var s_17573 = (function (){var G__15380 = a;
if((!(typeof a === 'string'))){
return G__15380.toString();
} else {
return G__15380;
}
})();
var temp__5739__auto___17574 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___17574 == null)){
} else {
var sm_data_17575 = temp__5739__auto___17574;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_17575,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__15354_SHARP_){
return (p1__15354_SHARP_ + s_17573.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17573], 0));

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

var seq__15400 = cljs.core.seq(xs);
var chunk__15401 = null;
var count__15402 = (0);
var i__15403 = (0);
while(true){
if((i__15403 < count__15402)){
var x = chunk__15401.cljs$core$IIndexed$_nth$arity$2(null,i__15403);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__17577 = seq__15400;
var G__17578 = chunk__15401;
var G__17579 = count__15402;
var G__17580 = (i__15403 + (1));
seq__15400 = G__17577;
chunk__15401 = G__17578;
count__15402 = G__17579;
i__15403 = G__17580;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15400);
if(temp__5735__auto__){
var seq__15400__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15400__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15400__$1);
var G__17585 = cljs.core.chunk_rest(seq__15400__$1);
var G__17586 = c__4556__auto__;
var G__17587 = cljs.core.count(c__4556__auto__);
var G__17588 = (0);
seq__15400 = G__17585;
chunk__15401 = G__17586;
count__15402 = G__17587;
i__15403 = G__17588;
continue;
} else {
var x = cljs.core.first(seq__15400__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__17589 = cljs.core.next(seq__15400__$1);
var G__17590 = null;
var G__17591 = (0);
var G__17592 = (0);
seq__15400 = G__17589;
chunk__15401 = G__17590;
count__15402 = G__17591;
i__15403 = G__17592;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq15358){
var G__15359 = cljs.core.first(seq15358);
var seq15358__$1 = cljs.core.next(seq15358);
var G__15360 = cljs.core.first(seq15358__$1);
var seq15358__$2 = cljs.core.next(seq15358__$1);
var G__15361 = cljs.core.first(seq15358__$2);
var seq15358__$3 = cljs.core.next(seq15358__$2);
var G__15362 = cljs.core.first(seq15358__$3);
var seq15358__$4 = cljs.core.next(seq15358__$3);
var G__15363 = cljs.core.first(seq15358__$4);
var seq15358__$5 = cljs.core.next(seq15358__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15359,G__15360,G__15361,G__15362,G__15363,seq15358__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__15414){
var map__15415 = p__15414;
var map__15415__$1 = (((((!((map__15415 == null))))?(((((map__15415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15415.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15415):map__15415);
var m = map__15415__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15415__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15444 = arguments.length;
switch (G__15444) {
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
var len__4736__auto___17600 = arguments.length;
var i__4737__auto___17602 = (0);
while(true){
if((i__4737__auto___17602 < len__4736__auto___17600)){
args_arr__4757__auto__.push((arguments[i__4737__auto___17602]));

var G__17605 = (i__4737__auto___17602 + (1));
i__4737__auto___17602 = G__17605;
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

var seq__15478_17612 = cljs.core.seq(xs);
var chunk__15479_17613 = null;
var count__15480_17614 = (0);
var i__15481_17615 = (0);
while(true){
if((i__15481_17615 < count__15480_17614)){
var x_17629 = chunk__15479_17613.cljs$core$IIndexed$_nth$arity$2(null,i__15481_17615);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_17629);


var G__17630 = seq__15478_17612;
var G__17631 = chunk__15479_17613;
var G__17632 = count__15480_17614;
var G__17633 = (i__15481_17615 + (1));
seq__15478_17612 = G__17630;
chunk__15479_17613 = G__17631;
count__15480_17614 = G__17632;
i__15481_17615 = G__17633;
continue;
} else {
var temp__5735__auto___17634 = cljs.core.seq(seq__15478_17612);
if(temp__5735__auto___17634){
var seq__15478_17637__$1 = temp__5735__auto___17634;
if(cljs.core.chunked_seq_QMARK_(seq__15478_17637__$1)){
var c__4556__auto___17638 = cljs.core.chunk_first(seq__15478_17637__$1);
var G__17644 = cljs.core.chunk_rest(seq__15478_17637__$1);
var G__17645 = c__4556__auto___17638;
var G__17646 = cljs.core.count(c__4556__auto___17638);
var G__17647 = (0);
seq__15478_17612 = G__17644;
chunk__15479_17613 = G__17645;
count__15480_17614 = G__17646;
i__15481_17615 = G__17647;
continue;
} else {
var x_17652 = cljs.core.first(seq__15478_17637__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_17652);


var G__17654 = cljs.core.next(seq__15478_17637__$1);
var G__17655 = null;
var G__17656 = (0);
var G__17657 = (0);
seq__15478_17612 = G__17654;
chunk__15479_17613 = G__17655;
count__15480_17614 = G__17656;
i__15481_17615 = G__17657;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15435){
var G__15437 = cljs.core.first(seq15435);
var seq15435__$1 = cljs.core.next(seq15435);
var G__15438 = cljs.core.first(seq15435__$1);
var seq15435__$2 = cljs.core.next(seq15435__$1);
var G__15439 = cljs.core.first(seq15435__$2);
var seq15435__$3 = cljs.core.next(seq15435__$2);
var G__15440 = cljs.core.first(seq15435__$3);
var seq15435__$4 = cljs.core.next(seq15435__$3);
var G__15441 = cljs.core.first(seq15435__$4);
var seq15435__$5 = cljs.core.next(seq15435__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15437,G__15438,G__15439,G__15440,G__15441,seq15435__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15515_17662 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15516_17663 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15517_17664 = true;
var _STAR_print_fn_STAR__temp_val__15518_17665 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15517_17664);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15518_17665);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15516_17663);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15515_17662);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15522 = cljs.core.get_global_hierarchy;
return (fexpr__15522.cljs$core$IFn$_invoke$arity$0 ? fexpr__15522.cljs$core$IFn$_invoke$arity$0() : fexpr__15522.call(null));
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
var vec__15528 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15528,(1),null);
var G__15531 = ns;
var G__15532 = name;
var G__15533 = (function (){
var G__15534 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__15534) : cljs.compiler.emit_constant.call(null,G__15534));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__15531,G__15532,G__15533) : cljs.compiler.emit_record_value.call(null,G__15531,G__15532,G__15533));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__15535 = cljs.core.keys(x);
var G__15536 = cljs.core.vals(x);
var G__15537 = cljs.compiler.emit_constants_comma_sep;
var G__15538 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__15535,G__15536,G__15537,G__15538) : cljs.compiler.emit_map.call(null,G__15535,G__15536,G__15537,G__15538));
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
var G__15546 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__15547 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__15546,G__15547) : cljs.compiler.emit_with_meta.call(null,G__15546,G__15547));
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
var vec__15568 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15568,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15568,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15568,(2),null);
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
var G__15587 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__15587) : x.call(null,G__15587));
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
var G__15597 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__15597) : x.call(null,G__15597));
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
var G__15624 = items;
var G__15625 = (function (p1__15618_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__15618_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__15624,G__15625) : cljs.compiler.emit_js_object.call(null,G__15624,G__15625));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15634){
var map__15635 = p__15634;
var map__15635__$1 = (((((!((map__15635 == null))))?(((((map__15635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15635):map__15635);
var ast = map__15635__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15635__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15635__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15635__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15648 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__15648__$1 = (((((!((map__15648 == null))))?(((((map__15648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15648):map__15648);
var cenv = map__15648__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15648__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__15656 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__15668 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__15668) : cljs.compiler.es5_GT__EQ_.call(null,G__15668));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__15656,cljs.analyzer.es5_allowed);
} else {
return G__15656;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__15673 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__15673,reserved);
} else {
return G__15673;
}
})();
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__15679_17803 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15679_17804__$1 = (((G__15679_17803 instanceof cljs.core.Keyword))?G__15679_17803.fqn:null);
switch (G__15679_17804__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15697){
var map__15698 = p__15697;
var map__15698__$1 = (((((!((map__15698 == null))))?(((((map__15698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15698):map__15698);
var arg = map__15698__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15703 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15703__$1 = (((((!((map__15703 == null))))?(((((map__15703.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15703.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15703):map__15703);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15703__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15712){
var map__15713 = p__15712;
var map__15713__$1 = (((((!((map__15713 == null))))?(((((map__15713.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15713.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15713):map__15713);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15713__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15713__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__15720_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15720_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__15725 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__15725) : comma_sep.call(null,G__15725));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__15726 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__15726) : comma_sep.call(null,G__15726));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15729){
var map__15730 = p__15729;
var map__15730__$1 = (((((!((map__15730 == null))))?(((((map__15730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15730):map__15730);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15730__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15730__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15730__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15750){
var map__15751 = p__15750;
var map__15751__$1 = (((((!((map__15751 == null))))?(((((map__15751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15751):map__15751);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15751__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__15760_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15760_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__15779 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__15779) : comma_sep.call(null,G__15779));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15781){
var map__15784 = p__15781;
var map__15784__$1 = (((((!((map__15784 == null))))?(((((map__15784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15784):map__15784);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15784__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15784__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___17904 = cljs.core.seq(items);
if(temp__5735__auto___17904){
var items_17905__$1 = temp__5735__auto___17904;
var vec__15793_17908 = items_17905__$1;
var seq__15794_17909 = cljs.core.seq(vec__15793_17908);
var first__15795_17910 = cljs.core.first(seq__15794_17909);
var seq__15794_17911__$1 = cljs.core.next(seq__15794_17909);
var vec__15796_17912 = first__15795_17910;
var k_17913 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15796_17912,(0),null);
var v_17914 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15796_17912,(1),null);
var r_17915 = seq__15794_17911__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_17913),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17914) : emit_js_object_val.call(null,v_17914)));

var seq__15799_17923 = cljs.core.seq(r_17915);
var chunk__15800_17924 = null;
var count__15801_17925 = (0);
var i__15802_17926 = (0);
while(true){
if((i__15802_17926 < count__15801_17925)){
var vec__15817_17928 = chunk__15800_17924.cljs$core$IIndexed$_nth$arity$2(null,i__15802_17926);
var k_17929__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15817_17928,(0),null);
var v_17930__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15817_17928,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_17929__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17930__$1) : emit_js_object_val.call(null,v_17930__$1)));


var G__17937 = seq__15799_17923;
var G__17938 = chunk__15800_17924;
var G__17939 = count__15801_17925;
var G__17940 = (i__15802_17926 + (1));
seq__15799_17923 = G__17937;
chunk__15800_17924 = G__17938;
count__15801_17925 = G__17939;
i__15802_17926 = G__17940;
continue;
} else {
var temp__5735__auto___17943__$1 = cljs.core.seq(seq__15799_17923);
if(temp__5735__auto___17943__$1){
var seq__15799_17946__$1 = temp__5735__auto___17943__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15799_17946__$1)){
var c__4556__auto___17947 = cljs.core.chunk_first(seq__15799_17946__$1);
var G__17949 = cljs.core.chunk_rest(seq__15799_17946__$1);
var G__17950 = c__4556__auto___17947;
var G__17951 = cljs.core.count(c__4556__auto___17947);
var G__17952 = (0);
seq__15799_17923 = G__17949;
chunk__15800_17924 = G__17950;
count__15801_17925 = G__17951;
i__15802_17926 = G__17952;
continue;
} else {
var vec__15825_17957 = cljs.core.first(seq__15799_17946__$1);
var k_17958__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15825_17957,(0),null);
var v_17959__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15825_17957,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_17958__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17959__$1) : emit_js_object_val.call(null,v_17959__$1)));


var G__17962 = cljs.core.next(seq__15799_17946__$1);
var G__17963 = null;
var G__17964 = (0);
var G__17965 = (0);
seq__15799_17923 = G__17962;
chunk__15800_17924 = G__17963;
count__15801_17925 = G__17964;
i__15802_17926 = G__17965;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15833){
var map__15836 = p__15833;
var map__15836__$1 = (((((!((map__15836 == null))))?(((((map__15836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15836):map__15836);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15836__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15836__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15836__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15844){
var map__15845 = p__15844;
var map__15845__$1 = (((((!((map__15845 == null))))?(((((map__15845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15845):map__15845);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15845__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15845__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__15852){
var map__15854 = p__15852;
var map__15854__$1 = (((((!((map__15854 == null))))?(((((map__15854.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15854.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15854):map__15854);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15854__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__15862){
var map__15863 = p__15862;
var map__15863__$1 = (((((!((map__15863 == null))))?(((((map__15863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15863):map__15863);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15863__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15863__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__15867 = cljs.analyzer.unwrap_quote(expr);
var map__15867__$1 = (((((!((map__15867 == null))))?(((((map__15867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15867.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15867):map__15867);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15867__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15867__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15867__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__15885 = cljs.analyzer.unwrap_quote(expr);
var map__15885__$1 = (((((!((map__15885 == null))))?(((((map__15885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15885.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15885):map__15885);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15885__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15885__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15885__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__15899 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__15899.cljs$core$IFn$_invoke$arity$1 ? fexpr__15899.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__15899.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__15900){
var map__15902 = p__15900;
var map__15902__$1 = (((((!((map__15902 == null))))?(((((map__15902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15902):map__15902);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15902__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15902__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15902__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15902__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15902__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__15915){
var map__15916 = p__15915;
var map__15916__$1 = (((((!((map__15916 == null))))?(((((map__15916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15916):map__15916);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15916__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15916__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15916__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__15921_18077 = cljs.core.seq(nodes);
var chunk__15922_18078 = null;
var count__15923_18079 = (0);
var i__15924_18080 = (0);
while(true){
if((i__15924_18080 < count__15923_18079)){
var map__16000_18082 = chunk__15922_18078.cljs$core$IIndexed$_nth$arity$2(null,i__15924_18080);
var map__16000_18083__$1 = (((((!((map__16000_18082 == null))))?(((((map__16000_18082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16000_18082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16000_18082):map__16000_18082);
var ts_18084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16000_18083__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16001_18085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16000_18083__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16001_18086__$1 = (((((!((map__16001_18085 == null))))?(((((map__16001_18085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16001_18085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16001_18085):map__16001_18085);
var then_18087 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16001_18086__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16026_18104 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_18084));
var chunk__16027_18105 = null;
var count__16028_18106 = (0);
var i__16029_18107 = (0);
while(true){
if((i__16029_18107 < count__16028_18106)){
var test_18111 = chunk__16027_18105.cljs$core$IIndexed$_nth$arity$2(null,i__16029_18107);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18111,":");


var G__18121 = seq__16026_18104;
var G__18122 = chunk__16027_18105;
var G__18123 = count__16028_18106;
var G__18124 = (i__16029_18107 + (1));
seq__16026_18104 = G__18121;
chunk__16027_18105 = G__18122;
count__16028_18106 = G__18123;
i__16029_18107 = G__18124;
continue;
} else {
var temp__5735__auto___18134 = cljs.core.seq(seq__16026_18104);
if(temp__5735__auto___18134){
var seq__16026_18135__$1 = temp__5735__auto___18134;
if(cljs.core.chunked_seq_QMARK_(seq__16026_18135__$1)){
var c__4556__auto___18136 = cljs.core.chunk_first(seq__16026_18135__$1);
var G__18138 = cljs.core.chunk_rest(seq__16026_18135__$1);
var G__18139 = c__4556__auto___18136;
var G__18140 = cljs.core.count(c__4556__auto___18136);
var G__18141 = (0);
seq__16026_18104 = G__18138;
chunk__16027_18105 = G__18139;
count__16028_18106 = G__18140;
i__16029_18107 = G__18141;
continue;
} else {
var test_18143 = cljs.core.first(seq__16026_18135__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18143,":");


var G__18147 = cljs.core.next(seq__16026_18135__$1);
var G__18148 = null;
var G__18149 = (0);
var G__18150 = (0);
seq__16026_18104 = G__18147;
chunk__16027_18105 = G__18148;
count__16028_18106 = G__18149;
i__16029_18107 = G__18150;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_18087);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_18087);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__18152 = seq__15921_18077;
var G__18153 = chunk__15922_18078;
var G__18154 = count__15923_18079;
var G__18155 = (i__15924_18080 + (1));
seq__15921_18077 = G__18152;
chunk__15922_18078 = G__18153;
count__15923_18079 = G__18154;
i__15924_18080 = G__18155;
continue;
} else {
var temp__5735__auto___18158 = cljs.core.seq(seq__15921_18077);
if(temp__5735__auto___18158){
var seq__15921_18180__$1 = temp__5735__auto___18158;
if(cljs.core.chunked_seq_QMARK_(seq__15921_18180__$1)){
var c__4556__auto___18181 = cljs.core.chunk_first(seq__15921_18180__$1);
var G__18182 = cljs.core.chunk_rest(seq__15921_18180__$1);
var G__18183 = c__4556__auto___18181;
var G__18184 = cljs.core.count(c__4556__auto___18181);
var G__18185 = (0);
seq__15921_18077 = G__18182;
chunk__15922_18078 = G__18183;
count__15923_18079 = G__18184;
i__15924_18080 = G__18185;
continue;
} else {
var map__16064_18186 = cljs.core.first(seq__15921_18180__$1);
var map__16064_18187__$1 = (((((!((map__16064_18186 == null))))?(((((map__16064_18186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16064_18186.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16064_18186):map__16064_18186);
var ts_18188 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16064_18187__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16065_18189 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16064_18187__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16065_18190__$1 = (((((!((map__16065_18189 == null))))?(((((map__16065_18189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16065_18189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16065_18189):map__16065_18189);
var then_18191 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16065_18190__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16074_18196 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_18188));
var chunk__16075_18197 = null;
var count__16076_18198 = (0);
var i__16077_18199 = (0);
while(true){
if((i__16077_18199 < count__16076_18198)){
var test_18200 = chunk__16075_18197.cljs$core$IIndexed$_nth$arity$2(null,i__16077_18199);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18200,":");


var G__18201 = seq__16074_18196;
var G__18202 = chunk__16075_18197;
var G__18203 = count__16076_18198;
var G__18204 = (i__16077_18199 + (1));
seq__16074_18196 = G__18201;
chunk__16075_18197 = G__18202;
count__16076_18198 = G__18203;
i__16077_18199 = G__18204;
continue;
} else {
var temp__5735__auto___18206__$1 = cljs.core.seq(seq__16074_18196);
if(temp__5735__auto___18206__$1){
var seq__16074_18211__$1 = temp__5735__auto___18206__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16074_18211__$1)){
var c__4556__auto___18213 = cljs.core.chunk_first(seq__16074_18211__$1);
var G__18215 = cljs.core.chunk_rest(seq__16074_18211__$1);
var G__18216 = c__4556__auto___18213;
var G__18217 = cljs.core.count(c__4556__auto___18213);
var G__18218 = (0);
seq__16074_18196 = G__18215;
chunk__16075_18197 = G__18216;
count__16076_18198 = G__18217;
i__16077_18199 = G__18218;
continue;
} else {
var test_18220 = cljs.core.first(seq__16074_18211__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18220,":");


var G__18221 = cljs.core.next(seq__16074_18211__$1);
var G__18222 = null;
var G__18223 = (0);
var G__18224 = (0);
seq__16074_18196 = G__18221;
chunk__16075_18197 = G__18222;
count__16076_18198 = G__18223;
i__16077_18199 = G__18224;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_18191);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_18191);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__18225 = cljs.core.next(seq__15921_18180__$1);
var G__18226 = null;
var G__18227 = (0);
var G__18228 = (0);
seq__15921_18077 = G__18225;
chunk__15922_18078 = G__18226;
count__15923_18079 = G__18227;
i__15924_18080 = G__18228;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16095){
var map__16096 = p__16095;
var map__16096__$1 = (((((!((map__16096 == null))))?(((((map__16096.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16096.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16096):map__16096);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16096__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16128 = env;
var G__16129 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16128,G__16129) : cljs.compiler.resolve_type.call(null,G__16128,G__16129));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__16134 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16134,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16134,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16103_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__16103_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__16103_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__16147 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__16147,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__16147;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16161 = env;
var G__16163 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16161,G__16163) : cljs.compiler.resolve_type.call(null,G__16161,G__16163));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16177_SHARP_){
return cljs.compiler.resolve_type(env,p1__16177_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__16190 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16191 = cljs.core.seq(vec__16190);
var first__16192 = cljs.core.first(seq__16191);
var seq__16191__$1 = cljs.core.next(seq__16191);
var p = first__16192;
var first__16192__$1 = cljs.core.first(seq__16191__$1);
var seq__16191__$2 = cljs.core.next(seq__16191__$1);
var ts = first__16192__$1;
var first__16192__$2 = cljs.core.first(seq__16191__$2);
var seq__16191__$3 = cljs.core.next(seq__16191__$2);
var n = first__16192__$2;
var xs = seq__16191__$3;
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
var vec__16203 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16204 = cljs.core.seq(vec__16203);
var first__16205 = cljs.core.first(seq__16204);
var seq__16204__$1 = cljs.core.next(seq__16204);
var p = first__16205;
var first__16205__$1 = cljs.core.first(seq__16204__$1);
var seq__16204__$2 = cljs.core.next(seq__16204__$1);
var ts = first__16205__$1;
var xs = seq__16204__$2;
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
var G__16212 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__16211 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__16211.cljs$core$IFn$_invoke$arity$1 ? fexpr__16211.cljs$core$IFn$_invoke$arity$1(G__16212) : fexpr__16211.call(null,G__16212));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__16220 = arguments.length;
switch (G__16220) {
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
var vec__16255 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16215_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__16215_SHARP_);
} else {
return p1__16215_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__16256 = cljs.core.seq(vec__16255);
var first__16257 = cljs.core.first(seq__16256);
var seq__16256__$1 = cljs.core.next(seq__16256);
var x = first__16257;
var ys = seq__16256__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__16260 = cljs.core.seq(ys);
var chunk__16261 = null;
var count__16262 = (0);
var i__16263 = (0);
while(true){
if((i__16263 < count__16262)){
var next_line = chunk__16261.cljs$core$IIndexed$_nth$arity$2(null,i__16263);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__18290 = seq__16260;
var G__18291 = chunk__16261;
var G__18292 = count__16262;
var G__18293 = (i__16263 + (1));
seq__16260 = G__18290;
chunk__16261 = G__18291;
count__16262 = G__18292;
i__16263 = G__18293;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16260);
if(temp__5735__auto__){
var seq__16260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16260__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16260__$1);
var G__18318 = cljs.core.chunk_rest(seq__16260__$1);
var G__18319 = c__4556__auto__;
var G__18320 = cljs.core.count(c__4556__auto__);
var G__18321 = (0);
seq__16260 = G__18318;
chunk__16261 = G__18319;
count__16262 = G__18320;
i__16263 = G__18321;
continue;
} else {
var next_line = cljs.core.first(seq__16260__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__18323 = cljs.core.next(seq__16260__$1);
var G__18324 = null;
var G__18325 = (0);
var G__18326 = (0);
seq__16260 = G__18323;
chunk__16261 = G__18324;
count__16262 = G__18325;
i__16263 = G__18326;
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

var seq__16298_18327 = cljs.core.seq(docs__$2);
var chunk__16299_18328 = null;
var count__16300_18329 = (0);
var i__16301_18330 = (0);
while(true){
if((i__16301_18330 < count__16300_18329)){
var e_18331 = chunk__16299_18328.cljs$core$IIndexed$_nth$arity$2(null,i__16301_18330);
if(cljs.core.truth_(e_18331)){
print_comment_lines(e_18331);
} else {
}


var G__18332 = seq__16298_18327;
var G__18333 = chunk__16299_18328;
var G__18334 = count__16300_18329;
var G__18335 = (i__16301_18330 + (1));
seq__16298_18327 = G__18332;
chunk__16299_18328 = G__18333;
count__16300_18329 = G__18334;
i__16301_18330 = G__18335;
continue;
} else {
var temp__5735__auto___18337 = cljs.core.seq(seq__16298_18327);
if(temp__5735__auto___18337){
var seq__16298_18338__$1 = temp__5735__auto___18337;
if(cljs.core.chunked_seq_QMARK_(seq__16298_18338__$1)){
var c__4556__auto___18339 = cljs.core.chunk_first(seq__16298_18338__$1);
var G__18340 = cljs.core.chunk_rest(seq__16298_18338__$1);
var G__18341 = c__4556__auto___18339;
var G__18342 = cljs.core.count(c__4556__auto___18339);
var G__18343 = (0);
seq__16298_18327 = G__18340;
chunk__16299_18328 = G__18341;
count__16300_18329 = G__18342;
i__16301_18330 = G__18343;
continue;
} else {
var e_18345 = cljs.core.first(seq__16298_18338__$1);
if(cljs.core.truth_(e_18345)){
print_comment_lines(e_18345);
} else {
}


var G__18346 = cljs.core.next(seq__16298_18338__$1);
var G__18347 = null;
var G__18348 = (0);
var G__18349 = (0);
seq__16298_18327 = G__18346;
chunk__16299_18328 = G__18347;
count__16300_18329 = G__18348;
i__16301_18330 = G__18349;
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
var and__4115__auto__ = cljs.core.some((function (p1__16333_SHARP_){
return goog.string.startsWith(p1__16333_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16352){
var map__16355 = p__16352;
var map__16355__$1 = (((((!((map__16355 == null))))?(((((map__16355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16355):map__16355);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16355__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16405){
var map__16406 = p__16405;
var map__16406__$1 = (((((!((map__16406 == null))))?(((((map__16406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16406):map__16406);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16406__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__16417_18392 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__16418_18393 = null;
var count__16419_18394 = (0);
var i__16420_18395 = (0);
while(true){
if((i__16420_18395 < count__16419_18394)){
var vec__16446_18396 = chunk__16418_18393.cljs$core$IIndexed$_nth$arity$2(null,i__16420_18395);
var i_18397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16446_18396,(0),null);
var param_18398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16446_18396,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_18398);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__18399 = seq__16417_18392;
var G__18400 = chunk__16418_18393;
var G__18401 = count__16419_18394;
var G__18402 = (i__16420_18395 + (1));
seq__16417_18392 = G__18399;
chunk__16418_18393 = G__18400;
count__16419_18394 = G__18401;
i__16420_18395 = G__18402;
continue;
} else {
var temp__5735__auto___18403 = cljs.core.seq(seq__16417_18392);
if(temp__5735__auto___18403){
var seq__16417_18405__$1 = temp__5735__auto___18403;
if(cljs.core.chunked_seq_QMARK_(seq__16417_18405__$1)){
var c__4556__auto___18406 = cljs.core.chunk_first(seq__16417_18405__$1);
var G__18407 = cljs.core.chunk_rest(seq__16417_18405__$1);
var G__18408 = c__4556__auto___18406;
var G__18409 = cljs.core.count(c__4556__auto___18406);
var G__18410 = (0);
seq__16417_18392 = G__18407;
chunk__16418_18393 = G__18408;
count__16419_18394 = G__18409;
i__16420_18395 = G__18410;
continue;
} else {
var vec__16469_18411 = cljs.core.first(seq__16417_18405__$1);
var i_18412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16469_18411,(0),null);
var param_18413 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16469_18411,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_18413);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__18414 = cljs.core.next(seq__16417_18405__$1);
var G__18415 = null;
var G__18416 = (0);
var G__18417 = (0);
seq__16417_18392 = G__18414;
chunk__16418_18393 = G__18415;
count__16419_18394 = G__18416;
i__16420_18395 = G__18417;
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

var seq__16478_18419 = cljs.core.seq(params);
var chunk__16479_18420 = null;
var count__16480_18421 = (0);
var i__16481_18422 = (0);
while(true){
if((i__16481_18422 < count__16480_18421)){
var param_18423 = chunk__16479_18420.cljs$core$IIndexed$_nth$arity$2(null,i__16481_18422);
cljs.compiler.emit(param_18423);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18423,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18424 = seq__16478_18419;
var G__18425 = chunk__16479_18420;
var G__18426 = count__16480_18421;
var G__18427 = (i__16481_18422 + (1));
seq__16478_18419 = G__18424;
chunk__16479_18420 = G__18425;
count__16480_18421 = G__18426;
i__16481_18422 = G__18427;
continue;
} else {
var temp__5735__auto___18431 = cljs.core.seq(seq__16478_18419);
if(temp__5735__auto___18431){
var seq__16478_18432__$1 = temp__5735__auto___18431;
if(cljs.core.chunked_seq_QMARK_(seq__16478_18432__$1)){
var c__4556__auto___18435 = cljs.core.chunk_first(seq__16478_18432__$1);
var G__18436 = cljs.core.chunk_rest(seq__16478_18432__$1);
var G__18437 = c__4556__auto___18435;
var G__18438 = cljs.core.count(c__4556__auto___18435);
var G__18439 = (0);
seq__16478_18419 = G__18436;
chunk__16479_18420 = G__18437;
count__16480_18421 = G__18438;
i__16481_18422 = G__18439;
continue;
} else {
var param_18442 = cljs.core.first(seq__16478_18432__$1);
cljs.compiler.emit(param_18442);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18442,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18443 = cljs.core.next(seq__16478_18432__$1);
var G__18444 = null;
var G__18445 = (0);
var G__18446 = (0);
seq__16478_18419 = G__18443;
chunk__16479_18420 = G__18444;
count__16480_18421 = G__18445;
i__16481_18422 = G__18446;
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

var seq__16506_18456 = cljs.core.seq(params);
var chunk__16507_18457 = null;
var count__16508_18458 = (0);
var i__16509_18459 = (0);
while(true){
if((i__16509_18459 < count__16508_18458)){
var param_18468 = chunk__16507_18457.cljs$core$IIndexed$_nth$arity$2(null,i__16509_18459);
cljs.compiler.emit(param_18468);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18468,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18471 = seq__16506_18456;
var G__18472 = chunk__16507_18457;
var G__18473 = count__16508_18458;
var G__18474 = (i__16509_18459 + (1));
seq__16506_18456 = G__18471;
chunk__16507_18457 = G__18472;
count__16508_18458 = G__18473;
i__16509_18459 = G__18474;
continue;
} else {
var temp__5735__auto___18475 = cljs.core.seq(seq__16506_18456);
if(temp__5735__auto___18475){
var seq__16506_18477__$1 = temp__5735__auto___18475;
if(cljs.core.chunked_seq_QMARK_(seq__16506_18477__$1)){
var c__4556__auto___18478 = cljs.core.chunk_first(seq__16506_18477__$1);
var G__18479 = cljs.core.chunk_rest(seq__16506_18477__$1);
var G__18480 = c__4556__auto___18478;
var G__18481 = cljs.core.count(c__4556__auto___18478);
var G__18482 = (0);
seq__16506_18456 = G__18479;
chunk__16507_18457 = G__18480;
count__16508_18458 = G__18481;
i__16509_18459 = G__18482;
continue;
} else {
var param_18483 = cljs.core.first(seq__16506_18477__$1);
cljs.compiler.emit(param_18483);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18483,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18497 = cljs.core.next(seq__16506_18477__$1);
var G__18498 = null;
var G__18499 = (0);
var G__18500 = (0);
seq__16506_18456 = G__18497;
chunk__16507_18457 = G__18498;
count__16508_18458 = G__18499;
i__16509_18459 = G__18500;
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
var seq__16522 = cljs.core.seq(params);
var chunk__16523 = null;
var count__16524 = (0);
var i__16525 = (0);
while(true){
if((i__16525 < count__16524)){
var param = chunk__16523.cljs$core$IIndexed$_nth$arity$2(null,i__16525);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18501 = seq__16522;
var G__18502 = chunk__16523;
var G__18503 = count__16524;
var G__18504 = (i__16525 + (1));
seq__16522 = G__18501;
chunk__16523 = G__18502;
count__16524 = G__18503;
i__16525 = G__18504;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16522);
if(temp__5735__auto__){
var seq__16522__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16522__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16522__$1);
var G__18505 = cljs.core.chunk_rest(seq__16522__$1);
var G__18506 = c__4556__auto__;
var G__18507 = cljs.core.count(c__4556__auto__);
var G__18508 = (0);
seq__16522 = G__18505;
chunk__16523 = G__18506;
count__16524 = G__18507;
i__16525 = G__18508;
continue;
} else {
var param = cljs.core.first(seq__16522__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18509 = cljs.core.next(seq__16522__$1);
var G__18510 = null;
var G__18511 = (0);
var G__18512 = (0);
seq__16522 = G__18509;
chunk__16523 = G__18510;
count__16524 = G__18511;
i__16525 = G__18512;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16541){
var map__16542 = p__16541;
var map__16542__$1 = (((((!((map__16542 == null))))?(((((map__16542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16542.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16542):map__16542);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16542__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16550){
var map__16551 = p__16550;
var map__16551__$1 = (((((!((map__16551 == null))))?(((((map__16551.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16551.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16551):map__16551);
var f = map__16551__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16551__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_18529__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_18530 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_18529__$1);
var delegate_name_18531 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18530),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_18531," = function (");

var seq__16556_18533 = cljs.core.seq(params);
var chunk__16557_18534 = null;
var count__16558_18535 = (0);
var i__16559_18536 = (0);
while(true){
if((i__16559_18536 < count__16558_18535)){
var param_18537 = chunk__16557_18534.cljs$core$IIndexed$_nth$arity$2(null,i__16559_18536);
cljs.compiler.emit(param_18537);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18537,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18543 = seq__16556_18533;
var G__18544 = chunk__16557_18534;
var G__18545 = count__16558_18535;
var G__18546 = (i__16559_18536 + (1));
seq__16556_18533 = G__18543;
chunk__16557_18534 = G__18544;
count__16558_18535 = G__18545;
i__16559_18536 = G__18546;
continue;
} else {
var temp__5735__auto___18547 = cljs.core.seq(seq__16556_18533);
if(temp__5735__auto___18547){
var seq__16556_18548__$1 = temp__5735__auto___18547;
if(cljs.core.chunked_seq_QMARK_(seq__16556_18548__$1)){
var c__4556__auto___18549 = cljs.core.chunk_first(seq__16556_18548__$1);
var G__18550 = cljs.core.chunk_rest(seq__16556_18548__$1);
var G__18551 = c__4556__auto___18549;
var G__18552 = cljs.core.count(c__4556__auto___18549);
var G__18553 = (0);
seq__16556_18533 = G__18550;
chunk__16557_18534 = G__18551;
count__16558_18535 = G__18552;
i__16559_18536 = G__18553;
continue;
} else {
var param_18555 = cljs.core.first(seq__16556_18548__$1);
cljs.compiler.emit(param_18555);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18555,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18557 = cljs.core.next(seq__16556_18548__$1);
var G__18558 = null;
var G__18559 = (0);
var G__18560 = (0);
seq__16556_18533 = G__18557;
chunk__16557_18534 = G__18558;
count__16558_18535 = G__18559;
i__16559_18536 = G__18560;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_18530," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_18573 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_18573,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_18531,".call(this,");

var seq__16568_18574 = cljs.core.seq(params);
var chunk__16569_18575 = null;
var count__16570_18576 = (0);
var i__16571_18577 = (0);
while(true){
if((i__16571_18577 < count__16570_18576)){
var param_18578 = chunk__16569_18575.cljs$core$IIndexed$_nth$arity$2(null,i__16571_18577);
cljs.compiler.emit(param_18578);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18578,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18579 = seq__16568_18574;
var G__18580 = chunk__16569_18575;
var G__18581 = count__16570_18576;
var G__18582 = (i__16571_18577 + (1));
seq__16568_18574 = G__18579;
chunk__16569_18575 = G__18580;
count__16570_18576 = G__18581;
i__16571_18577 = G__18582;
continue;
} else {
var temp__5735__auto___18583 = cljs.core.seq(seq__16568_18574);
if(temp__5735__auto___18583){
var seq__16568_18585__$1 = temp__5735__auto___18583;
if(cljs.core.chunked_seq_QMARK_(seq__16568_18585__$1)){
var c__4556__auto___18589 = cljs.core.chunk_first(seq__16568_18585__$1);
var G__18590 = cljs.core.chunk_rest(seq__16568_18585__$1);
var G__18591 = c__4556__auto___18589;
var G__18592 = cljs.core.count(c__4556__auto___18589);
var G__18593 = (0);
seq__16568_18574 = G__18590;
chunk__16569_18575 = G__18591;
count__16570_18576 = G__18592;
i__16571_18577 = G__18593;
continue;
} else {
var param_18594 = cljs.core.first(seq__16568_18585__$1);
cljs.compiler.emit(param_18594);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18594,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18595 = cljs.core.next(seq__16568_18585__$1);
var G__18596 = null;
var G__18597 = (0);
var G__18598 = (0);
seq__16568_18574 = G__18595;
chunk__16569_18575 = G__18596;
count__16570_18576 = G__18597;
i__16571_18577 = G__18598;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18530,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_18530,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_18529__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18530,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_18531,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_18530,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16594){
var map__16595 = p__16594;
var map__16595__$1 = (((((!((map__16595 == null))))?(((((map__16595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16595):map__16595);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16595__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16588_SHARP_){
var and__4115__auto__ = p1__16588_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16588_SHARP_));
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
var name_18669__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_18670 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_18669__$1);
var maxparams_18671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_18672 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18670),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_18673 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__16589_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16589_SHARP_)));
}),cljs.core.seq(mmap_18672));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_18670," = null;");

var seq__16612_18678 = cljs.core.seq(ms_18673);
var chunk__16613_18679 = null;
var count__16614_18680 = (0);
var i__16615_18681 = (0);
while(true){
if((i__16615_18681 < count__16614_18680)){
var vec__16624_18682 = chunk__16613_18679.cljs$core$IIndexed$_nth$arity$2(null,i__16615_18681);
var n_18683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16624_18682,(0),null);
var meth_18684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16624_18682,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_18683," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18684))){
cljs.compiler.emit_variadic_fn_method(meth_18684);
} else {
cljs.compiler.emit_fn_method(meth_18684);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__18685 = seq__16612_18678;
var G__18686 = chunk__16613_18679;
var G__18687 = count__16614_18680;
var G__18688 = (i__16615_18681 + (1));
seq__16612_18678 = G__18685;
chunk__16613_18679 = G__18686;
count__16614_18680 = G__18687;
i__16615_18681 = G__18688;
continue;
} else {
var temp__5735__auto___18689 = cljs.core.seq(seq__16612_18678);
if(temp__5735__auto___18689){
var seq__16612_18690__$1 = temp__5735__auto___18689;
if(cljs.core.chunked_seq_QMARK_(seq__16612_18690__$1)){
var c__4556__auto___18691 = cljs.core.chunk_first(seq__16612_18690__$1);
var G__18692 = cljs.core.chunk_rest(seq__16612_18690__$1);
var G__18693 = c__4556__auto___18691;
var G__18694 = cljs.core.count(c__4556__auto___18691);
var G__18695 = (0);
seq__16612_18678 = G__18692;
chunk__16613_18679 = G__18693;
count__16614_18680 = G__18694;
i__16615_18681 = G__18695;
continue;
} else {
var vec__16628_18696 = cljs.core.first(seq__16612_18690__$1);
var n_18697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628_18696,(0),null);
var meth_18698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16628_18696,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_18697," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18698))){
cljs.compiler.emit_variadic_fn_method(meth_18698);
} else {
cljs.compiler.emit_fn_method(meth_18698);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__18704 = cljs.core.next(seq__16612_18690__$1);
var G__18705 = null;
var G__18706 = (0);
var G__18707 = (0);
seq__16612_18678 = G__18704;
chunk__16613_18679 = G__18705;
count__16614_18680 = G__18706;
i__16615_18681 = G__18707;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18670," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_18671),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_18671)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_18671));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__16632_18709 = cljs.core.seq(ms_18673);
var chunk__16633_18710 = null;
var count__16634_18711 = (0);
var i__16635_18712 = (0);
while(true){
if((i__16635_18712 < count__16634_18711)){
var vec__16681_18713 = chunk__16633_18710.cljs$core$IIndexed$_nth$arity$2(null,i__16635_18712);
var n_18714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681_18713,(0),null);
var meth_18715 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16681_18713,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18715))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_18716 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_18716," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_18718 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_18716," = new cljs.core.IndexedSeq(",a_18718,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_18714,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_18671)),(((cljs.core.count(maxparams_18671) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18716,");"], 0));
} else {
var pcnt_18719 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18715));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_18719,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_18714,".call(this",(((pcnt_18719 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18719,maxparams_18671)),null,(1),null)),(2),null))),");");
}


var G__18720 = seq__16632_18709;
var G__18721 = chunk__16633_18710;
var G__18722 = count__16634_18711;
var G__18723 = (i__16635_18712 + (1));
seq__16632_18709 = G__18720;
chunk__16633_18710 = G__18721;
count__16634_18711 = G__18722;
i__16635_18712 = G__18723;
continue;
} else {
var temp__5735__auto___18724 = cljs.core.seq(seq__16632_18709);
if(temp__5735__auto___18724){
var seq__16632_18725__$1 = temp__5735__auto___18724;
if(cljs.core.chunked_seq_QMARK_(seq__16632_18725__$1)){
var c__4556__auto___18726 = cljs.core.chunk_first(seq__16632_18725__$1);
var G__18727 = cljs.core.chunk_rest(seq__16632_18725__$1);
var G__18728 = c__4556__auto___18726;
var G__18729 = cljs.core.count(c__4556__auto___18726);
var G__18730 = (0);
seq__16632_18709 = G__18727;
chunk__16633_18710 = G__18728;
count__16634_18711 = G__18729;
i__16635_18712 = G__18730;
continue;
} else {
var vec__16704_18731 = cljs.core.first(seq__16632_18725__$1);
var n_18732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16704_18731,(0),null);
var meth_18733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16704_18731,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18733))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_18734 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_18734," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_18735 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_18734," = new cljs.core.IndexedSeq(",a_18735,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_18732,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_18671)),(((cljs.core.count(maxparams_18671) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18734,");"], 0));
} else {
var pcnt_18739 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18733));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_18739,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_18732,".call(this",(((pcnt_18739 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18739,maxparams_18671)),null,(1),null)),(2),null))),");");
}


var G__18746 = cljs.core.next(seq__16632_18725__$1);
var G__18747 = null;
var G__18748 = (0);
var G__18749 = (0);
seq__16632_18709 = G__18746;
chunk__16633_18710 = G__18747;
count__16634_18711 = G__18748;
i__16635_18712 = G__18749;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_18754 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_18673)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_18754,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18670,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18670,".cljs$lang$applyTo = ",cljs.core.some((function (p1__16592_SHARP_){
var vec__16710 = p1__16592_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16710,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16710,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_18673),".cljs$lang$applyTo;");
} else {
}

var seq__16713_18761 = cljs.core.seq(ms_18673);
var chunk__16714_18762 = null;
var count__16715_18763 = (0);
var i__16716_18764 = (0);
while(true){
if((i__16716_18764 < count__16715_18763)){
var vec__16733_18770 = chunk__16714_18762.cljs$core$IIndexed$_nth$arity$2(null,i__16716_18764);
var n_18771 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16733_18770,(0),null);
var meth_18772 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16733_18770,(1),null);
var c_18775 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18772));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18772))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18670,".cljs$core$IFn$_invoke$arity$variadic = ",n_18771,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_18670,".cljs$core$IFn$_invoke$arity$",c_18775," = ",n_18771,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__18778 = seq__16713_18761;
var G__18779 = chunk__16714_18762;
var G__18780 = count__16715_18763;
var G__18781 = (i__16716_18764 + (1));
seq__16713_18761 = G__18778;
chunk__16714_18762 = G__18779;
count__16715_18763 = G__18780;
i__16716_18764 = G__18781;
continue;
} else {
var temp__5735__auto___18782 = cljs.core.seq(seq__16713_18761);
if(temp__5735__auto___18782){
var seq__16713_18785__$1 = temp__5735__auto___18782;
if(cljs.core.chunked_seq_QMARK_(seq__16713_18785__$1)){
var c__4556__auto___18786 = cljs.core.chunk_first(seq__16713_18785__$1);
var G__18788 = cljs.core.chunk_rest(seq__16713_18785__$1);
var G__18789 = c__4556__auto___18786;
var G__18790 = cljs.core.count(c__4556__auto___18786);
var G__18791 = (0);
seq__16713_18761 = G__18788;
chunk__16714_18762 = G__18789;
count__16715_18763 = G__18790;
i__16716_18764 = G__18791;
continue;
} else {
var vec__16739_18794 = cljs.core.first(seq__16713_18785__$1);
var n_18795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739_18794,(0),null);
var meth_18796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16739_18794,(1),null);
var c_18797 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18796));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18796))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18670,".cljs$core$IFn$_invoke$arity$variadic = ",n_18795,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_18670,".cljs$core$IFn$_invoke$arity$",c_18797," = ",n_18795,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__18800 = cljs.core.next(seq__16713_18785__$1);
var G__18801 = null;
var G__18802 = (0);
var G__18803 = (0);
seq__16713_18761 = G__18800;
chunk__16714_18762 = G__18801;
count__16715_18763 = G__18802;
i__16716_18764 = G__18803;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_18670,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16745){
var map__16746 = p__16745;
var map__16746__$1 = (((((!((map__16746 == null))))?(((((map__16746.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16746.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16746):map__16746);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16746__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16746__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16746__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__16748_18806 = cljs.core.seq(statements);
var chunk__16749_18807 = null;
var count__16750_18808 = (0);
var i__16751_18809 = (0);
while(true){
if((i__16751_18809 < count__16750_18808)){
var s_18810 = chunk__16749_18807.cljs$core$IIndexed$_nth$arity$2(null,i__16751_18809);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_18810);


var G__18811 = seq__16748_18806;
var G__18812 = chunk__16749_18807;
var G__18813 = count__16750_18808;
var G__18814 = (i__16751_18809 + (1));
seq__16748_18806 = G__18811;
chunk__16749_18807 = G__18812;
count__16750_18808 = G__18813;
i__16751_18809 = G__18814;
continue;
} else {
var temp__5735__auto___18815 = cljs.core.seq(seq__16748_18806);
if(temp__5735__auto___18815){
var seq__16748_18831__$1 = temp__5735__auto___18815;
if(cljs.core.chunked_seq_QMARK_(seq__16748_18831__$1)){
var c__4556__auto___18841 = cljs.core.chunk_first(seq__16748_18831__$1);
var G__18843 = cljs.core.chunk_rest(seq__16748_18831__$1);
var G__18844 = c__4556__auto___18841;
var G__18845 = cljs.core.count(c__4556__auto___18841);
var G__18846 = (0);
seq__16748_18806 = G__18843;
chunk__16749_18807 = G__18844;
count__16750_18808 = G__18845;
i__16751_18809 = G__18846;
continue;
} else {
var s_18847 = cljs.core.first(seq__16748_18831__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_18847);


var G__18848 = cljs.core.next(seq__16748_18831__$1);
var G__18849 = null;
var G__18850 = (0);
var G__18851 = (0);
seq__16748_18806 = G__18848;
chunk__16749_18807 = G__18849;
count__16750_18808 = G__18850;
i__16751_18809 = G__18851;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16820){
var map__16823 = p__16820;
var map__16823__$1 = (((((!((map__16823 == null))))?(((((map__16823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16823):map__16823);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16823__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16823__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16823__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16823__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16823__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16855,is_loop){
var map__16856 = p__16855;
var map__16856__$1 = (((((!((map__16856 == null))))?(((((map__16856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16856):map__16856);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16856__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16856__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16856__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__16860_18896 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__16861_18897 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__16861_18897);

try{var seq__16862_18898 = cljs.core.seq(bindings);
var chunk__16863_18899 = null;
var count__16864_18900 = (0);
var i__16865_18901 = (0);
while(true){
if((i__16865_18901 < count__16864_18900)){
var map__16889_18902 = chunk__16863_18899.cljs$core$IIndexed$_nth$arity$2(null,i__16865_18901);
var map__16889_18903__$1 = (((((!((map__16889_18902 == null))))?(((((map__16889_18902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16889_18902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16889_18902):map__16889_18902);
var binding_18904 = map__16889_18903__$1;
var init_18905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16889_18903__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_18904);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_18905,";");


var G__18906 = seq__16862_18898;
var G__18907 = chunk__16863_18899;
var G__18908 = count__16864_18900;
var G__18909 = (i__16865_18901 + (1));
seq__16862_18898 = G__18906;
chunk__16863_18899 = G__18907;
count__16864_18900 = G__18908;
i__16865_18901 = G__18909;
continue;
} else {
var temp__5735__auto___18910 = cljs.core.seq(seq__16862_18898);
if(temp__5735__auto___18910){
var seq__16862_18911__$1 = temp__5735__auto___18910;
if(cljs.core.chunked_seq_QMARK_(seq__16862_18911__$1)){
var c__4556__auto___18912 = cljs.core.chunk_first(seq__16862_18911__$1);
var G__18913 = cljs.core.chunk_rest(seq__16862_18911__$1);
var G__18914 = c__4556__auto___18912;
var G__18915 = cljs.core.count(c__4556__auto___18912);
var G__18916 = (0);
seq__16862_18898 = G__18913;
chunk__16863_18899 = G__18914;
count__16864_18900 = G__18915;
i__16865_18901 = G__18916;
continue;
} else {
var map__16905_18917 = cljs.core.first(seq__16862_18911__$1);
var map__16905_18918__$1 = (((((!((map__16905_18917 == null))))?(((((map__16905_18917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16905_18917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16905_18917):map__16905_18917);
var binding_18919 = map__16905_18918__$1;
var init_18920 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905_18918__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_18919);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_18920,";");


var G__18921 = cljs.core.next(seq__16862_18911__$1);
var G__18922 = null;
var G__18923 = (0);
var G__18924 = (0);
seq__16862_18898 = G__18921;
chunk__16863_18899 = G__18922;
count__16864_18900 = G__18923;
i__16865_18901 = G__18924;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__16860_18896);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16915){
var map__16916 = p__16915;
var map__16916__$1 = (((((!((map__16916 == null))))?(((((map__16916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16916):map__16916);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16916__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16916__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16916__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___18930 = cljs.core.count(exprs);
var i_18931 = (0);
while(true){
if((i_18931 < n__4613__auto___18930)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18931) : temps.call(null,i_18931))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_18931) : exprs.call(null,i_18931)),";");

var G__18932 = (i_18931 + (1));
i_18931 = G__18932;
continue;
} else {
}
break;
}

var n__4613__auto___18934 = cljs.core.count(exprs);
var i_18935 = (0);
while(true){
if((i_18935 < n__4613__auto___18934)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_18935) : params.call(null,i_18935)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18935) : temps.call(null,i_18935)),";");

var G__18939 = (i_18935 + (1));
i_18935 = G__18939;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16929){
var map__16930 = p__16929;
var map__16930__$1 = (((((!((map__16930 == null))))?(((((map__16930.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16930.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16930):map__16930);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16930__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16930__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16930__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__16937_18943 = cljs.core.seq(bindings);
var chunk__16938_18944 = null;
var count__16939_18945 = (0);
var i__16940_18946 = (0);
while(true){
if((i__16940_18946 < count__16939_18945)){
var map__16950_18947 = chunk__16938_18944.cljs$core$IIndexed$_nth$arity$2(null,i__16940_18946);
var map__16950_18948__$1 = (((((!((map__16950_18947 == null))))?(((((map__16950_18947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16950_18947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16950_18947):map__16950_18947);
var binding_18949 = map__16950_18948__$1;
var init_18950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16950_18948__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18949)," = ",init_18950,";");


var G__18953 = seq__16937_18943;
var G__18954 = chunk__16938_18944;
var G__18955 = count__16939_18945;
var G__18956 = (i__16940_18946 + (1));
seq__16937_18943 = G__18953;
chunk__16938_18944 = G__18954;
count__16939_18945 = G__18955;
i__16940_18946 = G__18956;
continue;
} else {
var temp__5735__auto___18957 = cljs.core.seq(seq__16937_18943);
if(temp__5735__auto___18957){
var seq__16937_18958__$1 = temp__5735__auto___18957;
if(cljs.core.chunked_seq_QMARK_(seq__16937_18958__$1)){
var c__4556__auto___18959 = cljs.core.chunk_first(seq__16937_18958__$1);
var G__18960 = cljs.core.chunk_rest(seq__16937_18958__$1);
var G__18961 = c__4556__auto___18959;
var G__18962 = cljs.core.count(c__4556__auto___18959);
var G__18963 = (0);
seq__16937_18943 = G__18960;
chunk__16938_18944 = G__18961;
count__16939_18945 = G__18962;
i__16940_18946 = G__18963;
continue;
} else {
var map__16956_18964 = cljs.core.first(seq__16937_18958__$1);
var map__16956_18965__$1 = (((((!((map__16956_18964 == null))))?(((((map__16956_18964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16956_18964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16956_18964):map__16956_18964);
var binding_18966 = map__16956_18965__$1;
var init_18967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16956_18965__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18966)," = ",init_18967,";");


var G__18968 = cljs.core.next(seq__16937_18958__$1);
var G__18969 = null;
var G__18970 = (0);
var G__18971 = (0);
seq__16937_18943 = G__18968;
chunk__16938_18944 = G__18969;
count__16939_18945 = G__18970;
i__16940_18946 = G__18971;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16977){
var map__16978 = p__16977;
var map__16978__$1 = (((((!((map__16978 == null))))?(((((map__16978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16978):map__16978);
var expr = map__16978__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16978__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16978__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16978__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__17011 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__17011.cljs$core$IFn$_invoke$arity$1 ? fexpr__17011.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17011.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__17020 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__17020.cljs$core$IFn$_invoke$arity$1 ? fexpr__17020.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__17020.call(null,first_arg_tag));
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
var vec__16985 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__16971_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16971_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__16972_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16972_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16985,(1),null);
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
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
var pimpl_19002 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_19002,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_19006 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_19006,args)),(((mfa_19006 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_19006,args)),"], 0))"], 0));
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
var G__17061 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__17060 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__17060.cljs$core$IFn$_invoke$arity$1 ? fexpr__17060.cljs$core$IFn$_invoke$arity$1(G__17061) : fexpr__17060.call(null,G__17061));
} else {
return and__4115__auto__;
}
})())){
var fprop_19011 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19011," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19011,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19011," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19011,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__17070){
var map__17071 = p__17070;
var map__17071__$1 = (((((!((map__17071 == null))))?(((((map__17071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17071):map__17071);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17071__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__17084){
var map__17086 = p__17084;
var map__17086__$1 = (((((!((map__17086 == null))))?(((((map__17086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17086.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17086):map__17086);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17086__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17086__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17086__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
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
var map__17094 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__17094__$1 = (((((!((map__17094 == null))))?(((((map__17094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17094):map__17094);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17094__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17094__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__17095 = options;
var map__17095__$1 = (((((!((map__17095 == null))))?(((((map__17095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17095):map__17095);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17095__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__17096 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__17103 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__17103__$1 = (((((!((map__17103 == null))))?(((((map__17103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17103):map__17103);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17103__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17103__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__17106_19038 = cljs.core.seq(libs_to_load);
var chunk__17107_19039 = null;
var count__17108_19040 = (0);
var i__17109_19041 = (0);
while(true){
if((i__17109_19041 < count__17108_19040)){
var lib_19042 = chunk__17107_19039.cljs$core$IIndexed$_nth$arity$2(null,i__17109_19041);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19042)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19042),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19042),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19042),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19042),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19042,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19042),"');");
}

}
}
}


var G__19056 = seq__17106_19038;
var G__19057 = chunk__17107_19039;
var G__19058 = count__17108_19040;
var G__19059 = (i__17109_19041 + (1));
seq__17106_19038 = G__19056;
chunk__17107_19039 = G__19057;
count__17108_19040 = G__19058;
i__17109_19041 = G__19059;
continue;
} else {
var temp__5735__auto___19060 = cljs.core.seq(seq__17106_19038);
if(temp__5735__auto___19060){
var seq__17106_19061__$1 = temp__5735__auto___19060;
if(cljs.core.chunked_seq_QMARK_(seq__17106_19061__$1)){
var c__4556__auto___19062 = cljs.core.chunk_first(seq__17106_19061__$1);
var G__19063 = cljs.core.chunk_rest(seq__17106_19061__$1);
var G__19064 = c__4556__auto___19062;
var G__19065 = cljs.core.count(c__4556__auto___19062);
var G__19066 = (0);
seq__17106_19038 = G__19063;
chunk__17107_19039 = G__19064;
count__17108_19040 = G__19065;
i__17109_19041 = G__19066;
continue;
} else {
var lib_19067 = cljs.core.first(seq__17106_19061__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19067)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19067),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19067),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19067),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19067),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19067,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19067),"');");
}

}
}
}


var G__19076 = cljs.core.next(seq__17106_19061__$1);
var G__19077 = null;
var G__19078 = (0);
var G__19079 = (0);
seq__17106_19038 = G__19076;
chunk__17107_19039 = G__19077;
count__17108_19040 = G__19078;
i__17109_19041 = G__19079;
continue;
}
} else {
}
}
break;
}

var seq__17127_19080 = cljs.core.seq(node_libs);
var chunk__17128_19081 = null;
var count__17129_19082 = (0);
var i__17130_19083 = (0);
while(true){
if((i__17130_19083 < count__17129_19082)){
var lib_19084 = chunk__17128_19081.cljs$core$IIndexed$_nth$arity$2(null,i__17130_19083);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19084)," = require('",lib_19084,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__19086 = seq__17127_19080;
var G__19087 = chunk__17128_19081;
var G__19088 = count__17129_19082;
var G__19089 = (i__17130_19083 + (1));
seq__17127_19080 = G__19086;
chunk__17128_19081 = G__19087;
count__17129_19082 = G__19088;
i__17130_19083 = G__19089;
continue;
} else {
var temp__5735__auto___19090 = cljs.core.seq(seq__17127_19080);
if(temp__5735__auto___19090){
var seq__17127_19091__$1 = temp__5735__auto___19090;
if(cljs.core.chunked_seq_QMARK_(seq__17127_19091__$1)){
var c__4556__auto___19092 = cljs.core.chunk_first(seq__17127_19091__$1);
var G__19093 = cljs.core.chunk_rest(seq__17127_19091__$1);
var G__19094 = c__4556__auto___19092;
var G__19095 = cljs.core.count(c__4556__auto___19092);
var G__19096 = (0);
seq__17127_19080 = G__19093;
chunk__17128_19081 = G__19094;
count__17129_19082 = G__19095;
i__17130_19083 = G__19096;
continue;
} else {
var lib_19097 = cljs.core.first(seq__17127_19091__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19097)," = require('",lib_19097,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__19098 = cljs.core.next(seq__17127_19091__$1);
var G__19099 = null;
var G__19100 = (0);
var G__19101 = (0);
seq__17127_19080 = G__19098;
chunk__17128_19081 = G__19099;
count__17129_19082 = G__19100;
i__17130_19083 = G__19101;
continue;
}
} else {
}
}
break;
}

var seq__17142_19102 = cljs.core.seq(global_exports_libs);
var chunk__17143_19103 = null;
var count__17144_19104 = (0);
var i__17145_19105 = (0);
while(true){
if((i__17145_19105 < count__17144_19104)){
var lib_19106 = chunk__17143_19103.cljs$core$IIndexed$_nth$arity$2(null,i__17145_19105);
var map__17161_19107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_19106));
var map__17161_19108__$1 = (((((!((map__17161_19107 == null))))?(((((map__17161_19107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17161_19107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17161_19107):map__17161_19107);
var global_exports_19109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17161_19108__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_19109,lib_19106);


var G__19114 = seq__17142_19102;
var G__19115 = chunk__17143_19103;
var G__19116 = count__17144_19104;
var G__19117 = (i__17145_19105 + (1));
seq__17142_19102 = G__19114;
chunk__17143_19103 = G__19115;
count__17144_19104 = G__19116;
i__17145_19105 = G__19117;
continue;
} else {
var temp__5735__auto___19118 = cljs.core.seq(seq__17142_19102);
if(temp__5735__auto___19118){
var seq__17142_19119__$1 = temp__5735__auto___19118;
if(cljs.core.chunked_seq_QMARK_(seq__17142_19119__$1)){
var c__4556__auto___19120 = cljs.core.chunk_first(seq__17142_19119__$1);
var G__19121 = cljs.core.chunk_rest(seq__17142_19119__$1);
var G__19122 = c__4556__auto___19120;
var G__19123 = cljs.core.count(c__4556__auto___19120);
var G__19124 = (0);
seq__17142_19102 = G__19121;
chunk__17143_19103 = G__19122;
count__17144_19104 = G__19123;
i__17145_19105 = G__19124;
continue;
} else {
var lib_19127 = cljs.core.first(seq__17142_19119__$1);
var map__17163_19176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_19127));
var map__17163_19177__$1 = (((((!((map__17163_19176 == null))))?(((((map__17163_19176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17163_19176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17163_19176):map__17163_19176);
var global_exports_19178 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17163_19177__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_19178,lib_19127);


var G__19179 = cljs.core.next(seq__17142_19119__$1);
var G__19180 = null;
var G__19181 = (0);
var G__19182 = (0);
seq__17142_19102 = G__19179;
chunk__17143_19103 = G__19180;
count__17144_19104 = G__19181;
i__17145_19105 = G__19182;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__17165){
var map__17166 = p__17165;
var map__17166__$1 = (((((!((map__17166 == null))))?(((((map__17166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17166):map__17166);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17166__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__17171){
var map__17173 = p__17171;
var map__17173__$1 = (((((!((map__17173 == null))))?(((((map__17173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17173):map__17173);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17173__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__17176){
var map__17177 = p__17176;
var map__17177__$1 = (((((!((map__17177 == null))))?(((((map__17177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17177):map__17177);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17184_19203 = cljs.core.seq(protocols);
var chunk__17185_19204 = null;
var count__17186_19205 = (0);
var i__17187_19206 = (0);
while(true){
if((i__17187_19206 < count__17186_19205)){
var protocol_19208 = chunk__17185_19204.cljs$core$IIndexed$_nth$arity$2(null,i__17187_19206);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19208)),"}");


var G__19209 = seq__17184_19203;
var G__19210 = chunk__17185_19204;
var G__19211 = count__17186_19205;
var G__19212 = (i__17187_19206 + (1));
seq__17184_19203 = G__19209;
chunk__17185_19204 = G__19210;
count__17186_19205 = G__19211;
i__17187_19206 = G__19212;
continue;
} else {
var temp__5735__auto___19213 = cljs.core.seq(seq__17184_19203);
if(temp__5735__auto___19213){
var seq__17184_19214__$1 = temp__5735__auto___19213;
if(cljs.core.chunked_seq_QMARK_(seq__17184_19214__$1)){
var c__4556__auto___19215 = cljs.core.chunk_first(seq__17184_19214__$1);
var G__19216 = cljs.core.chunk_rest(seq__17184_19214__$1);
var G__19217 = c__4556__auto___19215;
var G__19218 = cljs.core.count(c__4556__auto___19215);
var G__19219 = (0);
seq__17184_19203 = G__19216;
chunk__17185_19204 = G__19217;
count__17186_19205 = G__19218;
i__17187_19206 = G__19219;
continue;
} else {
var protocol_19221 = cljs.core.first(seq__17184_19214__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19221)),"}");


var G__19223 = cljs.core.next(seq__17184_19214__$1);
var G__19224 = null;
var G__19225 = (0);
var G__19226 = (0);
seq__17184_19203 = G__19223;
chunk__17185_19204 = G__19224;
count__17186_19205 = G__19225;
i__17187_19206 = G__19226;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17204_19227 = cljs.core.seq(fields__$1);
var chunk__17205_19228 = null;
var count__17206_19229 = (0);
var i__17207_19230 = (0);
while(true){
if((i__17207_19230 < count__17206_19229)){
var fld_19231 = chunk__17205_19228.cljs$core$IIndexed$_nth$arity$2(null,i__17207_19230);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19231," = ",fld_19231,";");


var G__19232 = seq__17204_19227;
var G__19233 = chunk__17205_19228;
var G__19234 = count__17206_19229;
var G__19235 = (i__17207_19230 + (1));
seq__17204_19227 = G__19232;
chunk__17205_19228 = G__19233;
count__17206_19229 = G__19234;
i__17207_19230 = G__19235;
continue;
} else {
var temp__5735__auto___19240 = cljs.core.seq(seq__17204_19227);
if(temp__5735__auto___19240){
var seq__17204_19241__$1 = temp__5735__auto___19240;
if(cljs.core.chunked_seq_QMARK_(seq__17204_19241__$1)){
var c__4556__auto___19242 = cljs.core.chunk_first(seq__17204_19241__$1);
var G__19243 = cljs.core.chunk_rest(seq__17204_19241__$1);
var G__19244 = c__4556__auto___19242;
var G__19245 = cljs.core.count(c__4556__auto___19242);
var G__19246 = (0);
seq__17204_19227 = G__19243;
chunk__17205_19228 = G__19244;
count__17206_19229 = G__19245;
i__17207_19230 = G__19246;
continue;
} else {
var fld_19247 = cljs.core.first(seq__17204_19241__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19247," = ",fld_19247,";");


var G__19248 = cljs.core.next(seq__17204_19241__$1);
var G__19249 = null;
var G__19250 = (0);
var G__19251 = (0);
seq__17204_19227 = G__19248;
chunk__17205_19228 = G__19249;
count__17206_19229 = G__19250;
i__17207_19230 = G__19251;
continue;
}
} else {
}
}
break;
}

var seq__17216_19252 = cljs.core.seq(pmasks);
var chunk__17217_19253 = null;
var count__17218_19254 = (0);
var i__17219_19255 = (0);
while(true){
if((i__17219_19255 < count__17218_19254)){
var vec__17232_19257 = chunk__17217_19253.cljs$core$IIndexed$_nth$arity$2(null,i__17219_19255);
var pno_19258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17232_19257,(0),null);
var pmask_19259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17232_19257,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19258,"$ = ",pmask_19259,";");


var G__19262 = seq__17216_19252;
var G__19263 = chunk__17217_19253;
var G__19264 = count__17218_19254;
var G__19265 = (i__17219_19255 + (1));
seq__17216_19252 = G__19262;
chunk__17217_19253 = G__19263;
count__17218_19254 = G__19264;
i__17219_19255 = G__19265;
continue;
} else {
var temp__5735__auto___19266 = cljs.core.seq(seq__17216_19252);
if(temp__5735__auto___19266){
var seq__17216_19267__$1 = temp__5735__auto___19266;
if(cljs.core.chunked_seq_QMARK_(seq__17216_19267__$1)){
var c__4556__auto___19268 = cljs.core.chunk_first(seq__17216_19267__$1);
var G__19269 = cljs.core.chunk_rest(seq__17216_19267__$1);
var G__19270 = c__4556__auto___19268;
var G__19271 = cljs.core.count(c__4556__auto___19268);
var G__19272 = (0);
seq__17216_19252 = G__19269;
chunk__17217_19253 = G__19270;
count__17218_19254 = G__19271;
i__17219_19255 = G__19272;
continue;
} else {
var vec__17239_19273 = cljs.core.first(seq__17216_19267__$1);
var pno_19274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17239_19273,(0),null);
var pmask_19275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17239_19273,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19274,"$ = ",pmask_19275,";");


var G__19278 = cljs.core.next(seq__17216_19267__$1);
var G__19279 = null;
var G__19280 = (0);
var G__19281 = (0);
seq__17216_19252 = G__19278;
chunk__17217_19253 = G__19279;
count__17218_19254 = G__19280;
i__17219_19255 = G__19281;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__17246){
var map__17248 = p__17246;
var map__17248__$1 = (((((!((map__17248 == null))))?(((((map__17248.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17248.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17248):map__17248);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17248__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17250_19284 = cljs.core.seq(protocols);
var chunk__17251_19285 = null;
var count__17252_19286 = (0);
var i__17253_19287 = (0);
while(true){
if((i__17253_19287 < count__17252_19286)){
var protocol_19289 = chunk__17251_19285.cljs$core$IIndexed$_nth$arity$2(null,i__17253_19287);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19289)),"}");


var G__19290 = seq__17250_19284;
var G__19291 = chunk__17251_19285;
var G__19292 = count__17252_19286;
var G__19293 = (i__17253_19287 + (1));
seq__17250_19284 = G__19290;
chunk__17251_19285 = G__19291;
count__17252_19286 = G__19292;
i__17253_19287 = G__19293;
continue;
} else {
var temp__5735__auto___19312 = cljs.core.seq(seq__17250_19284);
if(temp__5735__auto___19312){
var seq__17250_19313__$1 = temp__5735__auto___19312;
if(cljs.core.chunked_seq_QMARK_(seq__17250_19313__$1)){
var c__4556__auto___19314 = cljs.core.chunk_first(seq__17250_19313__$1);
var G__19315 = cljs.core.chunk_rest(seq__17250_19313__$1);
var G__19316 = c__4556__auto___19314;
var G__19317 = cljs.core.count(c__4556__auto___19314);
var G__19318 = (0);
seq__17250_19284 = G__19315;
chunk__17251_19285 = G__19316;
count__17252_19286 = G__19317;
i__17253_19287 = G__19318;
continue;
} else {
var protocol_19319 = cljs.core.first(seq__17250_19313__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19319)),"}");


var G__19320 = cljs.core.next(seq__17250_19313__$1);
var G__19321 = null;
var G__19322 = (0);
var G__19323 = (0);
seq__17250_19284 = G__19320;
chunk__17251_19285 = G__19321;
count__17252_19286 = G__19322;
i__17253_19287 = G__19323;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17260_19324 = cljs.core.seq(fields__$1);
var chunk__17261_19325 = null;
var count__17262_19326 = (0);
var i__17263_19327 = (0);
while(true){
if((i__17263_19327 < count__17262_19326)){
var fld_19328 = chunk__17261_19325.cljs$core$IIndexed$_nth$arity$2(null,i__17263_19327);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19328," = ",fld_19328,";");


var G__19329 = seq__17260_19324;
var G__19330 = chunk__17261_19325;
var G__19331 = count__17262_19326;
var G__19332 = (i__17263_19327 + (1));
seq__17260_19324 = G__19329;
chunk__17261_19325 = G__19330;
count__17262_19326 = G__19331;
i__17263_19327 = G__19332;
continue;
} else {
var temp__5735__auto___19333 = cljs.core.seq(seq__17260_19324);
if(temp__5735__auto___19333){
var seq__17260_19339__$1 = temp__5735__auto___19333;
if(cljs.core.chunked_seq_QMARK_(seq__17260_19339__$1)){
var c__4556__auto___19340 = cljs.core.chunk_first(seq__17260_19339__$1);
var G__19341 = cljs.core.chunk_rest(seq__17260_19339__$1);
var G__19342 = c__4556__auto___19340;
var G__19343 = cljs.core.count(c__4556__auto___19340);
var G__19344 = (0);
seq__17260_19324 = G__19341;
chunk__17261_19325 = G__19342;
count__17262_19326 = G__19343;
i__17263_19327 = G__19344;
continue;
} else {
var fld_19346 = cljs.core.first(seq__17260_19339__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19346," = ",fld_19346,";");


var G__19347 = cljs.core.next(seq__17260_19339__$1);
var G__19348 = null;
var G__19349 = (0);
var G__19350 = (0);
seq__17260_19324 = G__19347;
chunk__17261_19325 = G__19348;
count__17262_19326 = G__19349;
i__17263_19327 = G__19350;
continue;
}
} else {
}
}
break;
}

var seq__17267_19351 = cljs.core.seq(pmasks);
var chunk__17268_19352 = null;
var count__17269_19353 = (0);
var i__17270_19354 = (0);
while(true){
if((i__17270_19354 < count__17269_19353)){
var vec__17287_19355 = chunk__17268_19352.cljs$core$IIndexed$_nth$arity$2(null,i__17270_19354);
var pno_19356 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17287_19355,(0),null);
var pmask_19357 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17287_19355,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19356,"$ = ",pmask_19357,";");


var G__19358 = seq__17267_19351;
var G__19359 = chunk__17268_19352;
var G__19360 = count__17269_19353;
var G__19361 = (i__17270_19354 + (1));
seq__17267_19351 = G__19358;
chunk__17268_19352 = G__19359;
count__17269_19353 = G__19360;
i__17270_19354 = G__19361;
continue;
} else {
var temp__5735__auto___19363 = cljs.core.seq(seq__17267_19351);
if(temp__5735__auto___19363){
var seq__17267_19364__$1 = temp__5735__auto___19363;
if(cljs.core.chunked_seq_QMARK_(seq__17267_19364__$1)){
var c__4556__auto___19365 = cljs.core.chunk_first(seq__17267_19364__$1);
var G__19366 = cljs.core.chunk_rest(seq__17267_19364__$1);
var G__19367 = c__4556__auto___19365;
var G__19368 = cljs.core.count(c__4556__auto___19365);
var G__19369 = (0);
seq__17267_19351 = G__19366;
chunk__17268_19352 = G__19367;
count__17269_19353 = G__19368;
i__17270_19354 = G__19369;
continue;
} else {
var vec__17290_19370 = cljs.core.first(seq__17267_19364__$1);
var pno_19371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290_19370,(0),null);
var pmask_19372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17290_19370,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19371,"$ = ",pmask_19372,";");


var G__19380 = cljs.core.next(seq__17267_19364__$1);
var G__19381 = null;
var G__19382 = (0);
var G__19383 = (0);
seq__17267_19351 = G__19380;
chunk__17268_19352 = G__19381;
count__17269_19353 = G__19382;
i__17270_19354 = G__19383;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__17293){
var map__17294 = p__17293;
var map__17294__$1 = (((((!((map__17294 == null))))?(((((map__17294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17294):map__17294);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__17304){
var map__17305 = p__17304;
var map__17305__$1 = (((((!((map__17305 == null))))?(((((map__17305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17305):map__17305);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17305__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17305__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17305__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17305__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__15070__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15070__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__17340 = cljs.core.seq(table);
var chunk__17341 = null;
var count__17342 = (0);
var i__17343 = (0);
while(true){
if((i__17343 < count__17342)){
var vec__17367 = chunk__17341.cljs$core$IIndexed$_nth$arity$2(null,i__17343);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17367,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17367,(1),null);
var ns_19467 = cljs.core.namespace(sym);
var name_19468 = cljs.core.name(sym);
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


var G__19469 = seq__17340;
var G__19470 = chunk__17341;
var G__19471 = count__17342;
var G__19472 = (i__17343 + (1));
seq__17340 = G__19469;
chunk__17341 = G__19470;
count__17342 = G__19471;
i__17343 = G__19472;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__17340);
if(temp__5735__auto__){
var seq__17340__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17340__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17340__$1);
var G__19473 = cljs.core.chunk_rest(seq__17340__$1);
var G__19474 = c__4556__auto__;
var G__19475 = cljs.core.count(c__4556__auto__);
var G__19476 = (0);
seq__17340 = G__19473;
chunk__17341 = G__19474;
count__17342 = G__19475;
i__17343 = G__19476;
continue;
} else {
var vec__17374 = cljs.core.first(seq__17340__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17374,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17374,(1),null);
var ns_19477 = cljs.core.namespace(sym);
var name_19478 = cljs.core.name(sym);
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


var G__19479 = cljs.core.next(seq__17340__$1);
var G__19480 = null;
var G__19481 = (0);
var G__19482 = (0);
seq__17340 = G__19479;
chunk__17341 = G__19480;
count__17342 = G__19481;
i__17343 = G__19482;
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
var G__17379 = arguments.length;
switch (G__17379) {
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
var k_19484 = cljs.core.first(ks);
var vec__17388_19485 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_19484);
var top_19486 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17388_19485,(0),null);
var prefix_SINGLEQUOTE__19487 = vec__17388_19485;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_19484)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__19487) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_19486)) || (cljs.core.contains_QMARK_(known_externs,top_19486)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19487)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_19486);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19487)),";");
}
} else {
}

var m_19488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_19484);
if(cljs.core.empty_QMARK_(m_19488)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__19487,m_19488,top_level,known_externs);
}

var G__19489 = cljs.core.next(ks);
ks = G__19489;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
