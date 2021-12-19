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
var map__12115 = s;
var map__12115__$1 = (((((!((map__12115 == null))))?(((((map__12115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12115):map__12115);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12115__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12115__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12121 = info;
var map__12122 = G__12121;
var map__12122__$1 = (((((!((map__12122 == null))))?(((((map__12122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12122):map__12122);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12122__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12121__$1 = G__12121;
while(true){
var d__$2 = d__$1;
var map__12162 = G__12121__$1;
var map__12162__$1 = (((((!((map__12162 == null))))?(((((map__12162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12162.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12162):map__12162);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12162__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__13539 = (d__$2 + (1));
var G__13540 = shadow__$1;
d__$1 = G__13539;
G__12121__$1 = G__13540;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12196){
var map__12199 = p__12196;
var map__12199__$1 = (((((!((map__12199 == null))))?(((((map__12199.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12199.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12199):map__12199);
var name_var = map__12199__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12199__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12199__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__12204 = info;
var map__12204__$1 = (((((!((map__12204 == null))))?(((((map__12204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12204):map__12204);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12204__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12204__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__12210 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__12210) : cljs.compiler.munge.call(null,G__12210));
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
var G__12222 = arguments.length;
switch (G__12222) {
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
var ms = (function (){var fexpr__12235 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__12235.cljs$core$IFn$_invoke$arity$1 ? fexpr__12235.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__12235.call(null,ss__$3));
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
var G__12248 = cp;
switch (G__12248) {
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
var seq__12253_13563 = cljs.core.seq(s);
var chunk__12254_13564 = null;
var count__12255_13565 = (0);
var i__12256_13566 = (0);
while(true){
if((i__12256_13566 < count__12255_13565)){
var c_13569 = chunk__12254_13564.cljs$core$IIndexed$_nth$arity$2(null,i__12256_13566);
sb.append(cljs.compiler.escape_char(c_13569));


var G__13570 = seq__12253_13563;
var G__13571 = chunk__12254_13564;
var G__13572 = count__12255_13565;
var G__13573 = (i__12256_13566 + (1));
seq__12253_13563 = G__13570;
chunk__12254_13564 = G__13571;
count__12255_13565 = G__13572;
i__12256_13566 = G__13573;
continue;
} else {
var temp__5735__auto___13576 = cljs.core.seq(seq__12253_13563);
if(temp__5735__auto___13576){
var seq__12253_13577__$1 = temp__5735__auto___13576;
if(cljs.core.chunked_seq_QMARK_(seq__12253_13577__$1)){
var c__4556__auto___13580 = cljs.core.chunk_first(seq__12253_13577__$1);
var G__13585 = cljs.core.chunk_rest(seq__12253_13577__$1);
var G__13586 = c__4556__auto___13580;
var G__13587 = cljs.core.count(c__4556__auto___13580);
var G__13588 = (0);
seq__12253_13563 = G__13585;
chunk__12254_13564 = G__13586;
count__12255_13565 = G__13587;
i__12256_13566 = G__13588;
continue;
} else {
var c_13590 = cljs.core.first(seq__12253_13577__$1);
sb.append(cljs.compiler.escape_char(c_13590));


var G__13591 = cljs.core.next(seq__12253_13577__$1);
var G__13592 = null;
var G__13593 = (0);
var G__13594 = (0);
seq__12253_13563 = G__13591;
chunk__12254_13564 = G__13592;
count__12255_13565 = G__13593;
i__12256_13566 = G__13594;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__12270 = cljs.core.get_global_hierarchy;
return (fexpr__12270.cljs$core$IFn$_invoke$arity$0 ? fexpr__12270.cljs$core$IFn$_invoke$arity$0() : fexpr__12270.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__12278_13596 = ast;
var map__12278_13597__$1 = (((((!((map__12278_13596 == null))))?(((((map__12278_13596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12278_13596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12278_13596):map__12278_13596);
var env_13598 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12278_13597__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_13598))){
var map__12284_13600 = env_13598;
var map__12284_13601__$1 = (((((!((map__12284_13600 == null))))?(((((map__12284_13600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12284_13600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12284_13600):map__12284_13600);
var line_13602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284_13601__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_13603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12284_13601__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__12291 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__12294 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__12293 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__12293.cljs$core$IFn$_invoke$arity$1 ? fexpr__12293.cljs$core$IFn$_invoke$arity$1(G__12294) : fexpr__12293.call(null,G__12294));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12291,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__12291;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_13602 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_13603)?(column_13603 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__12318 = arguments.length;
switch (G__12318) {
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
var len__4736__auto___13610 = arguments.length;
var i__4737__auto___13611 = (0);
while(true){
if((i__4737__auto___13611 < len__4736__auto___13610)){
args_arr__4757__auto__.push((arguments[i__4737__auto___13611]));

var G__13612 = (i__4737__auto___13611 + (1));
i__4737__auto___13611 = G__13612;
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
var s_13613 = (function (){var G__12330 = a;
if((!(typeof a === 'string'))){
return G__12330.toString();
} else {
return G__12330;
}
})();
var temp__5739__auto___13617 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___13617 == null)){
} else {
var sm_data_13618 = temp__5739__auto___13617;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_13618,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__12299_SHARP_){
return (p1__12299_SHARP_ + s_13613.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_13613], 0));

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

var seq__12335 = cljs.core.seq(xs);
var chunk__12336 = null;
var count__12337 = (0);
var i__12338 = (0);
while(true){
if((i__12338 < count__12337)){
var x = chunk__12336.cljs$core$IIndexed$_nth$arity$2(null,i__12338);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__13619 = seq__12335;
var G__13620 = chunk__12336;
var G__13621 = count__12337;
var G__13622 = (i__12338 + (1));
seq__12335 = G__13619;
chunk__12336 = G__13620;
count__12337 = G__13621;
i__12338 = G__13622;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__12335);
if(temp__5735__auto__){
var seq__12335__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12335__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__12335__$1);
var G__13623 = cljs.core.chunk_rest(seq__12335__$1);
var G__13624 = c__4556__auto__;
var G__13625 = cljs.core.count(c__4556__auto__);
var G__13626 = (0);
seq__12335 = G__13623;
chunk__12336 = G__13624;
count__12337 = G__13625;
i__12338 = G__13626;
continue;
} else {
var x = cljs.core.first(seq__12335__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__13630 = cljs.core.next(seq__12335__$1);
var G__13631 = null;
var G__13632 = (0);
var G__13633 = (0);
seq__12335 = G__13630;
chunk__12336 = G__13631;
count__12337 = G__13632;
i__12338 = G__13633;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq12311){
var G__12312 = cljs.core.first(seq12311);
var seq12311__$1 = cljs.core.next(seq12311);
var G__12313 = cljs.core.first(seq12311__$1);
var seq12311__$2 = cljs.core.next(seq12311__$1);
var G__12314 = cljs.core.first(seq12311__$2);
var seq12311__$3 = cljs.core.next(seq12311__$2);
var G__12315 = cljs.core.first(seq12311__$3);
var seq12311__$4 = cljs.core.next(seq12311__$3);
var G__12316 = cljs.core.first(seq12311__$4);
var seq12311__$5 = cljs.core.next(seq12311__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12312,G__12313,G__12314,G__12315,G__12316,seq12311__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__12360){
var map__12361 = p__12360;
var map__12361__$1 = (((((!((map__12361 == null))))?(((((map__12361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12361):map__12361);
var m = map__12361__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12361__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__12375 = arguments.length;
switch (G__12375) {
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
var len__4736__auto___13638 = arguments.length;
var i__4737__auto___13639 = (0);
while(true){
if((i__4737__auto___13639 < len__4736__auto___13638)){
args_arr__4757__auto__.push((arguments[i__4737__auto___13639]));

var G__13640 = (i__4737__auto___13639 + (1));
i__4737__auto___13639 = G__13640;
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

var seq__12382_13645 = cljs.core.seq(xs);
var chunk__12383_13646 = null;
var count__12384_13647 = (0);
var i__12385_13648 = (0);
while(true){
if((i__12385_13648 < count__12384_13647)){
var x_13649 = chunk__12383_13646.cljs$core$IIndexed$_nth$arity$2(null,i__12385_13648);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_13649);


var G__13650 = seq__12382_13645;
var G__13651 = chunk__12383_13646;
var G__13652 = count__12384_13647;
var G__13653 = (i__12385_13648 + (1));
seq__12382_13645 = G__13650;
chunk__12383_13646 = G__13651;
count__12384_13647 = G__13652;
i__12385_13648 = G__13653;
continue;
} else {
var temp__5735__auto___13654 = cljs.core.seq(seq__12382_13645);
if(temp__5735__auto___13654){
var seq__12382_13656__$1 = temp__5735__auto___13654;
if(cljs.core.chunked_seq_QMARK_(seq__12382_13656__$1)){
var c__4556__auto___13658 = cljs.core.chunk_first(seq__12382_13656__$1);
var G__13660 = cljs.core.chunk_rest(seq__12382_13656__$1);
var G__13661 = c__4556__auto___13658;
var G__13662 = cljs.core.count(c__4556__auto___13658);
var G__13663 = (0);
seq__12382_13645 = G__13660;
chunk__12383_13646 = G__13661;
count__12384_13647 = G__13662;
i__12385_13648 = G__13663;
continue;
} else {
var x_13664 = cljs.core.first(seq__12382_13656__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_13664);


var G__13665 = cljs.core.next(seq__12382_13656__$1);
var G__13666 = null;
var G__13667 = (0);
var G__13668 = (0);
seq__12382_13645 = G__13665;
chunk__12383_13646 = G__13666;
count__12384_13647 = G__13667;
i__12385_13648 = G__13668;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12369){
var G__12370 = cljs.core.first(seq12369);
var seq12369__$1 = cljs.core.next(seq12369);
var G__12371 = cljs.core.first(seq12369__$1);
var seq12369__$2 = cljs.core.next(seq12369__$1);
var G__12372 = cljs.core.first(seq12369__$2);
var seq12369__$3 = cljs.core.next(seq12369__$2);
var G__12373 = cljs.core.first(seq12369__$3);
var seq12369__$4 = cljs.core.next(seq12369__$3);
var G__12374 = cljs.core.first(seq12369__$4);
var seq12369__$5 = cljs.core.next(seq12369__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12370,G__12371,G__12372,G__12373,G__12374,seq12369__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__12405_13669 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__12406_13670 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__12407_13671 = true;
var _STAR_print_fn_STAR__temp_val__12408_13672 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__12407_13671);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__12408_13672);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__12406_13670);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__12405_13669);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__12410 = cljs.core.get_global_hierarchy;
return (fexpr__12410.cljs$core$IFn$_invoke$arity$0 ? fexpr__12410.cljs$core$IFn$_invoke$arity$0() : fexpr__12410.call(null));
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
var vec__12420 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(1),null);
var G__12423 = ns;
var G__12424 = name;
var G__12425 = (function (){
var G__12427 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__12427) : cljs.compiler.emit_constant.call(null,G__12427));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__12423,G__12424,G__12425) : cljs.compiler.emit_record_value.call(null,G__12423,G__12424,G__12425));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__12428 = cljs.core.keys(x);
var G__12429 = cljs.core.vals(x);
var G__12430 = cljs.compiler.emit_constants_comma_sep;
var G__12431 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__12428,G__12429,G__12430,G__12431) : cljs.compiler.emit_map.call(null,G__12428,G__12429,G__12430,G__12431));
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
var G__12434 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__12435 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__12434,G__12435) : cljs.compiler.emit_with_meta.call(null,G__12434,G__12435));
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
var vec__12452 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(2),null);
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
var G__12469 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__12469) : x.call(null,G__12469));
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
var G__12476 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__12476) : x.call(null,G__12476));
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
var G__12490 = items;
var G__12491 = (function (p1__12484_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__12484_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__12490,G__12491) : cljs.compiler.emit_js_object.call(null,G__12490,G__12491));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__12498){
var map__12499 = p__12498;
var map__12499__$1 = (((((!((map__12499 == null))))?(((((map__12499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12499):map__12499);
var ast = map__12499__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12499__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12499__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12499__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__12505 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__12505__$1 = (((((!((map__12505 == null))))?(((((map__12505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12505):map__12505);
var cenv = map__12505__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12505__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__12508 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__12519 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__12519) : cljs.compiler.es5_GT__EQ_.call(null,G__12519));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__12508,cljs.analyzer.es5_allowed);
} else {
return G__12508;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__12520 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__12520,reserved);
} else {
return G__12520;
}
})();
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__12521_13708 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__12521_13710__$1 = (((G__12521_13708 instanceof cljs.core.Keyword))?G__12521_13708.fqn:null);
switch (G__12521_13710__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__12527){
var map__12528 = p__12527;
var map__12528__$1 = (((((!((map__12528 == null))))?(((((map__12528.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12528.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12528):map__12528);
var arg = map__12528__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12528__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12537 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12537__$1 = (((((!((map__12537 == null))))?(((((map__12537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12537):map__12537);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12537__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__12557){
var map__12558 = p__12557;
var map__12558__$1 = (((((!((map__12558 == null))))?(((((map__12558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12558):map__12558);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12558__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12558__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12558__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__12571_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12571_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__12583 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__12583) : comma_sep.call(null,G__12583));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__12584 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__12584) : comma_sep.call(null,G__12584));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12585){
var map__12586 = p__12585;
var map__12586__$1 = (((((!((map__12586 == null))))?(((((map__12586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12586.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12586):map__12586);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12586__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12586__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12586__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12595){
var map__12596 = p__12595;
var map__12596__$1 = (((((!((map__12596 == null))))?(((((map__12596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12596):map__12596);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12596__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12596__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__12602_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12602_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__12604 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__12604) : comma_sep.call(null,G__12604));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12607){
var map__12608 = p__12607;
var map__12608__$1 = (((((!((map__12608 == null))))?(((((map__12608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12608):map__12608);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12608__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___13742 = cljs.core.seq(items);
if(temp__5735__auto___13742){
var items_13743__$1 = temp__5735__auto___13742;
var vec__12625_13744 = items_13743__$1;
var seq__12626_13745 = cljs.core.seq(vec__12625_13744);
var first__12627_13746 = cljs.core.first(seq__12626_13745);
var seq__12626_13747__$1 = cljs.core.next(seq__12626_13745);
var vec__12628_13748 = first__12627_13746;
var k_13749 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628_13748,(0),null);
var v_13750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12628_13748,(1),null);
var r_13751 = seq__12626_13747__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_13749),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_13750) : emit_js_object_val.call(null,v_13750)));

var seq__12631_13754 = cljs.core.seq(r_13751);
var chunk__12632_13755 = null;
var count__12633_13756 = (0);
var i__12634_13757 = (0);
while(true){
if((i__12634_13757 < count__12633_13756)){
var vec__12645_13759 = chunk__12632_13755.cljs$core$IIndexed$_nth$arity$2(null,i__12634_13757);
var k_13760__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645_13759,(0),null);
var v_13761__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12645_13759,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_13760__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_13761__$1) : emit_js_object_val.call(null,v_13761__$1)));


var G__13768 = seq__12631_13754;
var G__13769 = chunk__12632_13755;
var G__13770 = count__12633_13756;
var G__13771 = (i__12634_13757 + (1));
seq__12631_13754 = G__13768;
chunk__12632_13755 = G__13769;
count__12633_13756 = G__13770;
i__12634_13757 = G__13771;
continue;
} else {
var temp__5735__auto___13773__$1 = cljs.core.seq(seq__12631_13754);
if(temp__5735__auto___13773__$1){
var seq__12631_13774__$1 = temp__5735__auto___13773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12631_13774__$1)){
var c__4556__auto___13775 = cljs.core.chunk_first(seq__12631_13774__$1);
var G__13776 = cljs.core.chunk_rest(seq__12631_13774__$1);
var G__13777 = c__4556__auto___13775;
var G__13778 = cljs.core.count(c__4556__auto___13775);
var G__13779 = (0);
seq__12631_13754 = G__13776;
chunk__12632_13755 = G__13777;
count__12633_13756 = G__13778;
i__12634_13757 = G__13779;
continue;
} else {
var vec__12651_13780 = cljs.core.first(seq__12631_13774__$1);
var k_13781__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651_13780,(0),null);
var v_13782__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12651_13780,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_13781__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_13782__$1) : emit_js_object_val.call(null,v_13782__$1)));


var G__13783 = cljs.core.next(seq__12631_13774__$1);
var G__13784 = null;
var G__13785 = (0);
var G__13786 = (0);
seq__12631_13754 = G__13783;
chunk__12632_13755 = G__13784;
count__12633_13756 = G__13785;
i__12634_13757 = G__13786;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__12659){
var map__12660 = p__12659;
var map__12660__$1 = (((((!((map__12660 == null))))?(((((map__12660.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12660.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12660):map__12660);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12660__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__12672){
var map__12675 = p__12672;
var map__12675__$1 = (((((!((map__12675 == null))))?(((((map__12675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12675):map__12675);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12675__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12675__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__12681){
var map__12682 = p__12681;
var map__12682__$1 = (((((!((map__12682 == null))))?(((((map__12682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12682):map__12682);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12682__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__12690){
var map__12692 = p__12690;
var map__12692__$1 = (((((!((map__12692 == null))))?(((((map__12692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12692):map__12692);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12692__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12692__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__12696 = cljs.analyzer.unwrap_quote(expr);
var map__12696__$1 = (((((!((map__12696 == null))))?(((((map__12696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12696):map__12696);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12696__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12696__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12696__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__12719 = cljs.analyzer.unwrap_quote(expr);
var map__12719__$1 = (((((!((map__12719 == null))))?(((((map__12719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12719):map__12719);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12719__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12719__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12719__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__12722 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__12722.cljs$core$IFn$_invoke$arity$1 ? fexpr__12722.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__12722.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12723){
var map__12724 = p__12723;
var map__12724__$1 = (((((!((map__12724 == null))))?(((((map__12724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12724):map__12724);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12724__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__12730){
var map__12731 = p__12730;
var map__12731__$1 = (((((!((map__12731 == null))))?(((((map__12731.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12731.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12731):map__12731);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12731__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12733_13808 = cljs.core.seq(nodes);
var chunk__12734_13809 = null;
var count__12735_13810 = (0);
var i__12736_13811 = (0);
while(true){
if((i__12736_13811 < count__12735_13810)){
var map__12760_13812 = chunk__12734_13809.cljs$core$IIndexed$_nth$arity$2(null,i__12736_13811);
var map__12760_13813__$1 = (((((!((map__12760_13812 == null))))?(((((map__12760_13812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12760_13812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12760_13812):map__12760_13812);
var ts_13814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12760_13813__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12761_13815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12760_13813__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12761_13816__$1 = (((((!((map__12761_13815 == null))))?(((((map__12761_13815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12761_13815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12761_13815):map__12761_13815);
var then_13817 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12761_13816__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12764_13824 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_13814));
var chunk__12765_13825 = null;
var count__12766_13826 = (0);
var i__12767_13827 = (0);
while(true){
if((i__12767_13827 < count__12766_13826)){
var test_13828 = chunk__12765_13825.cljs$core$IIndexed$_nth$arity$2(null,i__12767_13827);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13828,":");


var G__13829 = seq__12764_13824;
var G__13830 = chunk__12765_13825;
var G__13831 = count__12766_13826;
var G__13832 = (i__12767_13827 + (1));
seq__12764_13824 = G__13829;
chunk__12765_13825 = G__13830;
count__12766_13826 = G__13831;
i__12767_13827 = G__13832;
continue;
} else {
var temp__5735__auto___13833 = cljs.core.seq(seq__12764_13824);
if(temp__5735__auto___13833){
var seq__12764_13834__$1 = temp__5735__auto___13833;
if(cljs.core.chunked_seq_QMARK_(seq__12764_13834__$1)){
var c__4556__auto___13836 = cljs.core.chunk_first(seq__12764_13834__$1);
var G__13837 = cljs.core.chunk_rest(seq__12764_13834__$1);
var G__13838 = c__4556__auto___13836;
var G__13839 = cljs.core.count(c__4556__auto___13836);
var G__13840 = (0);
seq__12764_13824 = G__13837;
chunk__12765_13825 = G__13838;
count__12766_13826 = G__13839;
i__12767_13827 = G__13840;
continue;
} else {
var test_13842 = cljs.core.first(seq__12764_13834__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13842,":");


var G__13843 = cljs.core.next(seq__12764_13834__$1);
var G__13844 = null;
var G__13845 = (0);
var G__13846 = (0);
seq__12764_13824 = G__13843;
chunk__12765_13825 = G__13844;
count__12766_13826 = G__13845;
i__12767_13827 = G__13846;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_13817);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_13817);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__13848 = seq__12733_13808;
var G__13849 = chunk__12734_13809;
var G__13850 = count__12735_13810;
var G__13851 = (i__12736_13811 + (1));
seq__12733_13808 = G__13848;
chunk__12734_13809 = G__13849;
count__12735_13810 = G__13850;
i__12736_13811 = G__13851;
continue;
} else {
var temp__5735__auto___13852 = cljs.core.seq(seq__12733_13808);
if(temp__5735__auto___13852){
var seq__12733_13853__$1 = temp__5735__auto___13852;
if(cljs.core.chunked_seq_QMARK_(seq__12733_13853__$1)){
var c__4556__auto___13855 = cljs.core.chunk_first(seq__12733_13853__$1);
var G__13856 = cljs.core.chunk_rest(seq__12733_13853__$1);
var G__13857 = c__4556__auto___13855;
var G__13858 = cljs.core.count(c__4556__auto___13855);
var G__13859 = (0);
seq__12733_13808 = G__13856;
chunk__12734_13809 = G__13857;
count__12735_13810 = G__13858;
i__12736_13811 = G__13859;
continue;
} else {
var map__12768_13860 = cljs.core.first(seq__12733_13853__$1);
var map__12768_13861__$1 = (((((!((map__12768_13860 == null))))?(((((map__12768_13860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12768_13860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12768_13860):map__12768_13860);
var ts_13862 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12768_13861__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__12769_13863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12768_13861__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__12769_13864__$1 = (((((!((map__12769_13863 == null))))?(((((map__12769_13863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12769_13863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12769_13863):map__12769_13863);
var then_13865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12769_13864__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__12773_13870 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_13862));
var chunk__12774_13871 = null;
var count__12775_13872 = (0);
var i__12776_13873 = (0);
while(true){
if((i__12776_13873 < count__12775_13872)){
var test_13874 = chunk__12774_13871.cljs$core$IIndexed$_nth$arity$2(null,i__12776_13873);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13874,":");


var G__13875 = seq__12773_13870;
var G__13876 = chunk__12774_13871;
var G__13877 = count__12775_13872;
var G__13878 = (i__12776_13873 + (1));
seq__12773_13870 = G__13875;
chunk__12774_13871 = G__13876;
count__12775_13872 = G__13877;
i__12776_13873 = G__13878;
continue;
} else {
var temp__5735__auto___13879__$1 = cljs.core.seq(seq__12773_13870);
if(temp__5735__auto___13879__$1){
var seq__12773_13880__$1 = temp__5735__auto___13879__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12773_13880__$1)){
var c__4556__auto___13881 = cljs.core.chunk_first(seq__12773_13880__$1);
var G__13882 = cljs.core.chunk_rest(seq__12773_13880__$1);
var G__13883 = c__4556__auto___13881;
var G__13884 = cljs.core.count(c__4556__auto___13881);
var G__13885 = (0);
seq__12773_13870 = G__13882;
chunk__12774_13871 = G__13883;
count__12775_13872 = G__13884;
i__12776_13873 = G__13885;
continue;
} else {
var test_13886 = cljs.core.first(seq__12773_13880__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_13886,":");


var G__13887 = cljs.core.next(seq__12773_13880__$1);
var G__13888 = null;
var G__13889 = (0);
var G__13890 = (0);
seq__12773_13870 = G__13887;
chunk__12774_13871 = G__13888;
count__12775_13872 = G__13889;
i__12776_13873 = G__13890;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_13865);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_13865);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__13892 = cljs.core.next(seq__12733_13853__$1);
var G__13893 = null;
var G__13894 = (0);
var G__13895 = (0);
seq__12733_13808 = G__13892;
chunk__12734_13809 = G__13893;
count__12735_13810 = G__13894;
i__12736_13811 = G__13895;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12782){
var map__12783 = p__12782;
var map__12783__$1 = (((((!((map__12783 == null))))?(((((map__12783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12783):map__12783);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12783__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12796 = env;
var G__12797 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__12796,G__12797) : cljs.compiler.resolve_type.call(null,G__12796,G__12797));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__12798 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12798,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12798,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__12789_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__12789_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__12789_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__12802 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__12802,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__12802;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__12805 = env;
var G__12806 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__12805,G__12806) : cljs.compiler.resolve_type.call(null,G__12805,G__12806));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12807_SHARP_){
return cljs.compiler.resolve_type(env,p1__12807_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__12808 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__12809 = cljs.core.seq(vec__12808);
var first__12810 = cljs.core.first(seq__12809);
var seq__12809__$1 = cljs.core.next(seq__12809);
var p = first__12810;
var first__12810__$1 = cljs.core.first(seq__12809__$1);
var seq__12809__$2 = cljs.core.next(seq__12809__$1);
var ts = first__12810__$1;
var first__12810__$2 = cljs.core.first(seq__12809__$2);
var seq__12809__$3 = cljs.core.next(seq__12809__$2);
var n = first__12810__$2;
var xs = seq__12809__$3;
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
var vec__12812 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__12813 = cljs.core.seq(vec__12812);
var first__12814 = cljs.core.first(seq__12813);
var seq__12813__$1 = cljs.core.next(seq__12813);
var p = first__12814;
var first__12814__$1 = cljs.core.first(seq__12813__$1);
var seq__12813__$2 = cljs.core.next(seq__12813__$1);
var ts = first__12814__$1;
var xs = seq__12813__$2;
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
var G__12824 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__12823 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__12823.cljs$core$IFn$_invoke$arity$1 ? fexpr__12823.cljs$core$IFn$_invoke$arity$1(G__12824) : fexpr__12823.call(null,G__12824));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__12832 = arguments.length;
switch (G__12832) {
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
var vec__12854 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12826_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__12826_SHARP_);
} else {
return p1__12826_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__12855 = cljs.core.seq(vec__12854);
var first__12856 = cljs.core.first(seq__12855);
var seq__12855__$1 = cljs.core.next(seq__12855);
var x = first__12856;
var ys = seq__12855__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__12857 = cljs.core.seq(ys);
var chunk__12858 = null;
var count__12859 = (0);
var i__12860 = (0);
while(true){
if((i__12860 < count__12859)){
var next_line = chunk__12858.cljs$core$IIndexed$_nth$arity$2(null,i__12860);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__13919 = seq__12857;
var G__13920 = chunk__12858;
var G__13921 = count__12859;
var G__13922 = (i__12860 + (1));
seq__12857 = G__13919;
chunk__12858 = G__13920;
count__12859 = G__13921;
i__12860 = G__13922;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__12857);
if(temp__5735__auto__){
var seq__12857__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12857__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__12857__$1);
var G__13923 = cljs.core.chunk_rest(seq__12857__$1);
var G__13924 = c__4556__auto__;
var G__13925 = cljs.core.count(c__4556__auto__);
var G__13926 = (0);
seq__12857 = G__13923;
chunk__12858 = G__13924;
count__12859 = G__13925;
i__12860 = G__13926;
continue;
} else {
var next_line = cljs.core.first(seq__12857__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__13931 = cljs.core.next(seq__12857__$1);
var G__13932 = null;
var G__13933 = (0);
var G__13934 = (0);
seq__12857 = G__13931;
chunk__12858 = G__13932;
count__12859 = G__13933;
i__12860 = G__13934;
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

var seq__12861_13936 = cljs.core.seq(docs__$2);
var chunk__12862_13937 = null;
var count__12863_13938 = (0);
var i__12864_13939 = (0);
while(true){
if((i__12864_13939 < count__12863_13938)){
var e_13940 = chunk__12862_13937.cljs$core$IIndexed$_nth$arity$2(null,i__12864_13939);
if(cljs.core.truth_(e_13940)){
print_comment_lines(e_13940);
} else {
}


var G__13942 = seq__12861_13936;
var G__13943 = chunk__12862_13937;
var G__13944 = count__12863_13938;
var G__13945 = (i__12864_13939 + (1));
seq__12861_13936 = G__13942;
chunk__12862_13937 = G__13943;
count__12863_13938 = G__13944;
i__12864_13939 = G__13945;
continue;
} else {
var temp__5735__auto___13946 = cljs.core.seq(seq__12861_13936);
if(temp__5735__auto___13946){
var seq__12861_13947__$1 = temp__5735__auto___13946;
if(cljs.core.chunked_seq_QMARK_(seq__12861_13947__$1)){
var c__4556__auto___13948 = cljs.core.chunk_first(seq__12861_13947__$1);
var G__13949 = cljs.core.chunk_rest(seq__12861_13947__$1);
var G__13950 = c__4556__auto___13948;
var G__13951 = cljs.core.count(c__4556__auto___13948);
var G__13952 = (0);
seq__12861_13936 = G__13949;
chunk__12862_13937 = G__13950;
count__12863_13938 = G__13951;
i__12864_13939 = G__13952;
continue;
} else {
var e_13953 = cljs.core.first(seq__12861_13947__$1);
if(cljs.core.truth_(e_13953)){
print_comment_lines(e_13953);
} else {
}


var G__13955 = cljs.core.next(seq__12861_13947__$1);
var G__13956 = null;
var G__13957 = (0);
var G__13958 = (0);
seq__12861_13936 = G__13955;
chunk__12862_13937 = G__13956;
count__12863_13938 = G__13957;
i__12864_13939 = G__13958;
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
var and__4115__auto__ = cljs.core.some((function (p1__12871_SHARP_){
return goog.string.startsWith(p1__12871_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12880){
var map__12881 = p__12880;
var map__12881__$1 = (((((!((map__12881 == null))))?(((((map__12881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12881):map__12881);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12881__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12935){
var map__12936 = p__12935;
var map__12936__$1 = (((((!((map__12936 == null))))?(((((map__12936.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12936.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12936):map__12936);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12936__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12936__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12936__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__12941_13977 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__12943_13978 = null;
var count__12944_13979 = (0);
var i__12945_13980 = (0);
while(true){
if((i__12945_13980 < count__12944_13979)){
var vec__12962_13981 = chunk__12943_13978.cljs$core$IIndexed$_nth$arity$2(null,i__12945_13980);
var i_13982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12962_13981,(0),null);
var param_13983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12962_13981,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_13983);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__13984 = seq__12941_13977;
var G__13985 = chunk__12943_13978;
var G__13986 = count__12944_13979;
var G__13987 = (i__12945_13980 + (1));
seq__12941_13977 = G__13984;
chunk__12943_13978 = G__13985;
count__12944_13979 = G__13986;
i__12945_13980 = G__13987;
continue;
} else {
var temp__5735__auto___13989 = cljs.core.seq(seq__12941_13977);
if(temp__5735__auto___13989){
var seq__12941_13993__$1 = temp__5735__auto___13989;
if(cljs.core.chunked_seq_QMARK_(seq__12941_13993__$1)){
var c__4556__auto___13994 = cljs.core.chunk_first(seq__12941_13993__$1);
var G__13996 = cljs.core.chunk_rest(seq__12941_13993__$1);
var G__13997 = c__4556__auto___13994;
var G__13998 = cljs.core.count(c__4556__auto___13994);
var G__13999 = (0);
seq__12941_13977 = G__13996;
chunk__12943_13978 = G__13997;
count__12944_13979 = G__13998;
i__12945_13980 = G__13999;
continue;
} else {
var vec__12966_14000 = cljs.core.first(seq__12941_13993__$1);
var i_14001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12966_14000,(0),null);
var param_14002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12966_14000,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_14002);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__14005 = cljs.core.next(seq__12941_13993__$1);
var G__14006 = null;
var G__14007 = (0);
var G__14008 = (0);
seq__12941_13977 = G__14005;
chunk__12943_13978 = G__14006;
count__12944_13979 = G__14007;
i__12945_13980 = G__14008;
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

var seq__12971_14010 = cljs.core.seq(params);
var chunk__12972_14011 = null;
var count__12973_14012 = (0);
var i__12974_14013 = (0);
while(true){
if((i__12974_14013 < count__12973_14012)){
var param_14017 = chunk__12972_14011.cljs$core$IIndexed$_nth$arity$2(null,i__12974_14013);
cljs.compiler.emit(param_14017);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14017,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14018 = seq__12971_14010;
var G__14019 = chunk__12972_14011;
var G__14020 = count__12973_14012;
var G__14021 = (i__12974_14013 + (1));
seq__12971_14010 = G__14018;
chunk__12972_14011 = G__14019;
count__12973_14012 = G__14020;
i__12974_14013 = G__14021;
continue;
} else {
var temp__5735__auto___14022 = cljs.core.seq(seq__12971_14010);
if(temp__5735__auto___14022){
var seq__12971_14023__$1 = temp__5735__auto___14022;
if(cljs.core.chunked_seq_QMARK_(seq__12971_14023__$1)){
var c__4556__auto___14024 = cljs.core.chunk_first(seq__12971_14023__$1);
var G__14025 = cljs.core.chunk_rest(seq__12971_14023__$1);
var G__14026 = c__4556__auto___14024;
var G__14027 = cljs.core.count(c__4556__auto___14024);
var G__14028 = (0);
seq__12971_14010 = G__14025;
chunk__12972_14011 = G__14026;
count__12973_14012 = G__14027;
i__12974_14013 = G__14028;
continue;
} else {
var param_14029 = cljs.core.first(seq__12971_14023__$1);
cljs.compiler.emit(param_14029);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14029,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14030 = cljs.core.next(seq__12971_14023__$1);
var G__14031 = null;
var G__14032 = (0);
var G__14033 = (0);
seq__12971_14010 = G__14030;
chunk__12972_14011 = G__14031;
count__12973_14012 = G__14032;
i__12974_14013 = G__14033;
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

var seq__12989_14039 = cljs.core.seq(params);
var chunk__12990_14040 = null;
var count__12991_14041 = (0);
var i__12992_14042 = (0);
while(true){
if((i__12992_14042 < count__12991_14041)){
var param_14043 = chunk__12990_14040.cljs$core$IIndexed$_nth$arity$2(null,i__12992_14042);
cljs.compiler.emit(param_14043);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14043,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14044 = seq__12989_14039;
var G__14045 = chunk__12990_14040;
var G__14046 = count__12991_14041;
var G__14047 = (i__12992_14042 + (1));
seq__12989_14039 = G__14044;
chunk__12990_14040 = G__14045;
count__12991_14041 = G__14046;
i__12992_14042 = G__14047;
continue;
} else {
var temp__5735__auto___14048 = cljs.core.seq(seq__12989_14039);
if(temp__5735__auto___14048){
var seq__12989_14049__$1 = temp__5735__auto___14048;
if(cljs.core.chunked_seq_QMARK_(seq__12989_14049__$1)){
var c__4556__auto___14050 = cljs.core.chunk_first(seq__12989_14049__$1);
var G__14051 = cljs.core.chunk_rest(seq__12989_14049__$1);
var G__14052 = c__4556__auto___14050;
var G__14053 = cljs.core.count(c__4556__auto___14050);
var G__14054 = (0);
seq__12989_14039 = G__14051;
chunk__12990_14040 = G__14052;
count__12991_14041 = G__14053;
i__12992_14042 = G__14054;
continue;
} else {
var param_14055 = cljs.core.first(seq__12989_14049__$1);
cljs.compiler.emit(param_14055);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14055,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14056 = cljs.core.next(seq__12989_14049__$1);
var G__14057 = null;
var G__14058 = (0);
var G__14059 = (0);
seq__12989_14039 = G__14056;
chunk__12990_14040 = G__14057;
count__12991_14041 = G__14058;
i__12992_14042 = G__14059;
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
var seq__13001 = cljs.core.seq(params);
var chunk__13002 = null;
var count__13003 = (0);
var i__13004 = (0);
while(true){
if((i__13004 < count__13003)){
var param = chunk__13002.cljs$core$IIndexed$_nth$arity$2(null,i__13004);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14064 = seq__13001;
var G__14065 = chunk__13002;
var G__14066 = count__13003;
var G__14067 = (i__13004 + (1));
seq__13001 = G__14064;
chunk__13002 = G__14065;
count__13003 = G__14066;
i__13004 = G__14067;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13001);
if(temp__5735__auto__){
var seq__13001__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13001__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13001__$1);
var G__14068 = cljs.core.chunk_rest(seq__13001__$1);
var G__14069 = c__4556__auto__;
var G__14070 = cljs.core.count(c__4556__auto__);
var G__14071 = (0);
seq__13001 = G__14068;
chunk__13002 = G__14069;
count__13003 = G__14070;
i__13004 = G__14071;
continue;
} else {
var param = cljs.core.first(seq__13001__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14072 = cljs.core.next(seq__13001__$1);
var G__14073 = null;
var G__14074 = (0);
var G__14075 = (0);
seq__13001 = G__14072;
chunk__13002 = G__14073;
count__13003 = G__14074;
i__13004 = G__14075;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13011){
var map__13014 = p__13011;
var map__13014__$1 = (((((!((map__13014 == null))))?(((((map__13014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13014):map__13014);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13014__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13031){
var map__13032 = p__13031;
var map__13032__$1 = (((((!((map__13032 == null))))?(((((map__13032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13032):map__13032);
var f = map__13032__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13032__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_14101__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_14102 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_14101__$1);
var delegate_name_14103 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14102),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_14103," = function (");

var seq__13039_14105 = cljs.core.seq(params);
var chunk__13040_14106 = null;
var count__13041_14107 = (0);
var i__13042_14108 = (0);
while(true){
if((i__13042_14108 < count__13041_14107)){
var param_14109 = chunk__13040_14106.cljs$core$IIndexed$_nth$arity$2(null,i__13042_14108);
cljs.compiler.emit(param_14109);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14109,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14111 = seq__13039_14105;
var G__14112 = chunk__13040_14106;
var G__14113 = count__13041_14107;
var G__14114 = (i__13042_14108 + (1));
seq__13039_14105 = G__14111;
chunk__13040_14106 = G__14112;
count__13041_14107 = G__14113;
i__13042_14108 = G__14114;
continue;
} else {
var temp__5735__auto___14115 = cljs.core.seq(seq__13039_14105);
if(temp__5735__auto___14115){
var seq__13039_14116__$1 = temp__5735__auto___14115;
if(cljs.core.chunked_seq_QMARK_(seq__13039_14116__$1)){
var c__4556__auto___14117 = cljs.core.chunk_first(seq__13039_14116__$1);
var G__14118 = cljs.core.chunk_rest(seq__13039_14116__$1);
var G__14119 = c__4556__auto___14117;
var G__14120 = cljs.core.count(c__4556__auto___14117);
var G__14121 = (0);
seq__13039_14105 = G__14118;
chunk__13040_14106 = G__14119;
count__13041_14107 = G__14120;
i__13042_14108 = G__14121;
continue;
} else {
var param_14126 = cljs.core.first(seq__13039_14116__$1);
cljs.compiler.emit(param_14126);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14126,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14127 = cljs.core.next(seq__13039_14116__$1);
var G__14128 = null;
var G__14129 = (0);
var G__14130 = (0);
seq__13039_14105 = G__14127;
chunk__13040_14106 = G__14128;
count__13041_14107 = G__14129;
i__13042_14108 = G__14130;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_14102," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_14138 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_14138,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_14103,".call(this,");

var seq__13046_14139 = cljs.core.seq(params);
var chunk__13047_14140 = null;
var count__13048_14141 = (0);
var i__13049_14142 = (0);
while(true){
if((i__13049_14142 < count__13048_14141)){
var param_14143 = chunk__13047_14140.cljs$core$IIndexed$_nth$arity$2(null,i__13049_14142);
cljs.compiler.emit(param_14143);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14143,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14144 = seq__13046_14139;
var G__14145 = chunk__13047_14140;
var G__14146 = count__13048_14141;
var G__14147 = (i__13049_14142 + (1));
seq__13046_14139 = G__14144;
chunk__13047_14140 = G__14145;
count__13048_14141 = G__14146;
i__13049_14142 = G__14147;
continue;
} else {
var temp__5735__auto___14148 = cljs.core.seq(seq__13046_14139);
if(temp__5735__auto___14148){
var seq__13046_14149__$1 = temp__5735__auto___14148;
if(cljs.core.chunked_seq_QMARK_(seq__13046_14149__$1)){
var c__4556__auto___14150 = cljs.core.chunk_first(seq__13046_14149__$1);
var G__14151 = cljs.core.chunk_rest(seq__13046_14149__$1);
var G__14152 = c__4556__auto___14150;
var G__14153 = cljs.core.count(c__4556__auto___14150);
var G__14154 = (0);
seq__13046_14139 = G__14151;
chunk__13047_14140 = G__14152;
count__13048_14141 = G__14153;
i__13049_14142 = G__14154;
continue;
} else {
var param_14155 = cljs.core.first(seq__13046_14149__$1);
cljs.compiler.emit(param_14155);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_14155,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__14156 = cljs.core.next(seq__13046_14149__$1);
var G__14157 = null;
var G__14158 = (0);
var G__14159 = (0);
seq__13046_14139 = G__14156;
chunk__13047_14140 = G__14157;
count__13048_14141 = G__14158;
i__13049_14142 = G__14159;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14102,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_14102,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_14101__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14102,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_14103,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_14102,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13056){
var map__13057 = p__13056;
var map__13057__$1 = (((((!((map__13057 == null))))?(((((map__13057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13057):map__13057);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13057__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13052_SHARP_){
var and__4115__auto__ = p1__13052_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13052_SHARP_));
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
var name_14173__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_14174 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_14173__$1);
var maxparams_14175 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_14176 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_14174),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_14177 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__13054_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__13054_SHARP_)));
}),cljs.core.seq(mmap_14176));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_14174," = null;");

var seq__13066_14178 = cljs.core.seq(ms_14177);
var chunk__13067_14179 = null;
var count__13068_14180 = (0);
var i__13069_14181 = (0);
while(true){
if((i__13069_14181 < count__13068_14180)){
var vec__13082_14182 = chunk__13067_14179.cljs$core$IIndexed$_nth$arity$2(null,i__13069_14181);
var n_14183 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082_14182,(0),null);
var meth_14184 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082_14182,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_14183," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14184))){
cljs.compiler.emit_variadic_fn_method(meth_14184);
} else {
cljs.compiler.emit_fn_method(meth_14184);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__14185 = seq__13066_14178;
var G__14186 = chunk__13067_14179;
var G__14187 = count__13068_14180;
var G__14188 = (i__13069_14181 + (1));
seq__13066_14178 = G__14185;
chunk__13067_14179 = G__14186;
count__13068_14180 = G__14187;
i__13069_14181 = G__14188;
continue;
} else {
var temp__5735__auto___14190 = cljs.core.seq(seq__13066_14178);
if(temp__5735__auto___14190){
var seq__13066_14191__$1 = temp__5735__auto___14190;
if(cljs.core.chunked_seq_QMARK_(seq__13066_14191__$1)){
var c__4556__auto___14193 = cljs.core.chunk_first(seq__13066_14191__$1);
var G__14195 = cljs.core.chunk_rest(seq__13066_14191__$1);
var G__14196 = c__4556__auto___14193;
var G__14197 = cljs.core.count(c__4556__auto___14193);
var G__14198 = (0);
seq__13066_14178 = G__14195;
chunk__13067_14179 = G__14196;
count__13068_14180 = G__14197;
i__13069_14181 = G__14198;
continue;
} else {
var vec__13091_14199 = cljs.core.first(seq__13066_14191__$1);
var n_14200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091_14199,(0),null);
var meth_14201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091_14199,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_14200," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14201))){
cljs.compiler.emit_variadic_fn_method(meth_14201);
} else {
cljs.compiler.emit_fn_method(meth_14201);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__14210 = cljs.core.next(seq__13066_14191__$1);
var G__14211 = null;
var G__14212 = (0);
var G__14213 = (0);
seq__13066_14178 = G__14210;
chunk__13067_14179 = G__14211;
count__13068_14180 = G__14212;
i__13069_14181 = G__14213;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14174," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_14175),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_14175)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_14175));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__13095_14216 = cljs.core.seq(ms_14177);
var chunk__13096_14217 = null;
var count__13097_14218 = (0);
var i__13098_14219 = (0);
while(true){
if((i__13098_14219 < count__13097_14218)){
var vec__13110_14220 = chunk__13096_14217.cljs$core$IIndexed$_nth$arity$2(null,i__13098_14219);
var n_14221 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110_14220,(0),null);
var meth_14222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13110_14220,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14222))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_14223 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_14223," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_14224 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_14223," = new cljs.core.IndexedSeq(",a_14224,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_14221,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_14175)),(((cljs.core.count(maxparams_14175) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_14223,");"], 0));
} else {
var pcnt_14225 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14222));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_14225,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_14221,".call(this",(((pcnt_14225 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_14225,maxparams_14175)),null,(1),null)),(2),null))),");");
}


var G__14229 = seq__13095_14216;
var G__14230 = chunk__13096_14217;
var G__14231 = count__13097_14218;
var G__14232 = (i__13098_14219 + (1));
seq__13095_14216 = G__14229;
chunk__13096_14217 = G__14230;
count__13097_14218 = G__14231;
i__13098_14219 = G__14232;
continue;
} else {
var temp__5735__auto___14233 = cljs.core.seq(seq__13095_14216);
if(temp__5735__auto___14233){
var seq__13095_14234__$1 = temp__5735__auto___14233;
if(cljs.core.chunked_seq_QMARK_(seq__13095_14234__$1)){
var c__4556__auto___14235 = cljs.core.chunk_first(seq__13095_14234__$1);
var G__14236 = cljs.core.chunk_rest(seq__13095_14234__$1);
var G__14237 = c__4556__auto___14235;
var G__14238 = cljs.core.count(c__4556__auto___14235);
var G__14239 = (0);
seq__13095_14216 = G__14236;
chunk__13096_14217 = G__14237;
count__13097_14218 = G__14238;
i__13098_14219 = G__14239;
continue;
} else {
var vec__13113_14240 = cljs.core.first(seq__13095_14234__$1);
var n_14241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113_14240,(0),null);
var meth_14242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13113_14240,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14242))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_14244 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_14244," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_14246 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_14244," = new cljs.core.IndexedSeq(",a_14246,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_14241,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_14175)),(((cljs.core.count(maxparams_14175) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_14244,");"], 0));
} else {
var pcnt_14248 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14242));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_14248,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_14241,".call(this",(((pcnt_14248 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_14248,maxparams_14175)),null,(1),null)),(2),null))),");");
}


var G__14249 = cljs.core.next(seq__13095_14234__$1);
var G__14250 = null;
var G__14251 = (0);
var G__14252 = (0);
seq__13095_14216 = G__14249;
chunk__13096_14217 = G__14250;
count__13097_14218 = G__14251;
i__13098_14219 = G__14252;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_14253 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_14177)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_14253,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14174,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14174,".cljs$lang$applyTo = ",cljs.core.some((function (p1__13055_SHARP_){
var vec__13119 = p1__13055_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13119,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_14177),".cljs$lang$applyTo;");
} else {
}

var seq__13122_14257 = cljs.core.seq(ms_14177);
var chunk__13123_14258 = null;
var count__13124_14259 = (0);
var i__13125_14260 = (0);
while(true){
if((i__13125_14260 < count__13124_14259)){
var vec__13136_14261 = chunk__13123_14258.cljs$core$IIndexed$_nth$arity$2(null,i__13125_14260);
var n_14262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13136_14261,(0),null);
var meth_14263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13136_14261,(1),null);
var c_14268 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14263));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14263))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14174,".cljs$core$IFn$_invoke$arity$variadic = ",n_14262,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_14174,".cljs$core$IFn$_invoke$arity$",c_14268," = ",n_14262,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__14270 = seq__13122_14257;
var G__14271 = chunk__13123_14258;
var G__14272 = count__13124_14259;
var G__14273 = (i__13125_14260 + (1));
seq__13122_14257 = G__14270;
chunk__13123_14258 = G__14271;
count__13124_14259 = G__14272;
i__13125_14260 = G__14273;
continue;
} else {
var temp__5735__auto___14275 = cljs.core.seq(seq__13122_14257);
if(temp__5735__auto___14275){
var seq__13122_14276__$1 = temp__5735__auto___14275;
if(cljs.core.chunked_seq_QMARK_(seq__13122_14276__$1)){
var c__4556__auto___14277 = cljs.core.chunk_first(seq__13122_14276__$1);
var G__14278 = cljs.core.chunk_rest(seq__13122_14276__$1);
var G__14279 = c__4556__auto___14277;
var G__14280 = cljs.core.count(c__4556__auto___14277);
var G__14281 = (0);
seq__13122_14257 = G__14278;
chunk__13123_14258 = G__14279;
count__13124_14259 = G__14280;
i__13125_14260 = G__14281;
continue;
} else {
var vec__13139_14283 = cljs.core.first(seq__13122_14276__$1);
var n_14284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139_14283,(0),null);
var meth_14285 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13139_14283,(1),null);
var c_14286 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_14285));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_14285))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_14174,".cljs$core$IFn$_invoke$arity$variadic = ",n_14284,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_14174,".cljs$core$IFn$_invoke$arity$",c_14286," = ",n_14284,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__14291 = cljs.core.next(seq__13122_14276__$1);
var G__14292 = null;
var G__14293 = (0);
var G__14294 = (0);
seq__13122_14257 = G__14291;
chunk__13123_14258 = G__14292;
count__13124_14259 = G__14293;
i__13125_14260 = G__14294;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_14174,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13142){
var map__13143 = p__13142;
var map__13143__$1 = (((((!((map__13143 == null))))?(((((map__13143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13143):map__13143);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__13145_14297 = cljs.core.seq(statements);
var chunk__13146_14298 = null;
var count__13147_14299 = (0);
var i__13148_14300 = (0);
while(true){
if((i__13148_14300 < count__13147_14299)){
var s_14301 = chunk__13146_14298.cljs$core$IIndexed$_nth$arity$2(null,i__13148_14300);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_14301);


var G__14302 = seq__13145_14297;
var G__14303 = chunk__13146_14298;
var G__14304 = count__13147_14299;
var G__14305 = (i__13148_14300 + (1));
seq__13145_14297 = G__14302;
chunk__13146_14298 = G__14303;
count__13147_14299 = G__14304;
i__13148_14300 = G__14305;
continue;
} else {
var temp__5735__auto___14310 = cljs.core.seq(seq__13145_14297);
if(temp__5735__auto___14310){
var seq__13145_14311__$1 = temp__5735__auto___14310;
if(cljs.core.chunked_seq_QMARK_(seq__13145_14311__$1)){
var c__4556__auto___14312 = cljs.core.chunk_first(seq__13145_14311__$1);
var G__14313 = cljs.core.chunk_rest(seq__13145_14311__$1);
var G__14314 = c__4556__auto___14312;
var G__14315 = cljs.core.count(c__4556__auto___14312);
var G__14316 = (0);
seq__13145_14297 = G__14313;
chunk__13146_14298 = G__14314;
count__13147_14299 = G__14315;
i__13148_14300 = G__14316;
continue;
} else {
var s_14317 = cljs.core.first(seq__13145_14311__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_14317);


var G__14318 = cljs.core.next(seq__13145_14311__$1);
var G__14319 = null;
var G__14320 = (0);
var G__14321 = (0);
seq__13145_14297 = G__14318;
chunk__13146_14298 = G__14319;
count__13147_14299 = G__14320;
i__13148_14300 = G__14321;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13149){
var map__13150 = p__13149;
var map__13150__$1 = (((((!((map__13150 == null))))?(((((map__13150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13150):map__13150);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13150__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13150__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13150__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13150__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13150__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13152,is_loop){
var map__13153 = p__13152;
var map__13153__$1 = (((((!((map__13153 == null))))?(((((map__13153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13153):map__13153);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13153__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13153__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13153__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__13155_14330 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__13156_14331 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__13156_14331);

try{var seq__13158_14332 = cljs.core.seq(bindings);
var chunk__13159_14333 = null;
var count__13160_14334 = (0);
var i__13161_14335 = (0);
while(true){
if((i__13161_14335 < count__13160_14334)){
var map__13170_14337 = chunk__13159_14333.cljs$core$IIndexed$_nth$arity$2(null,i__13161_14335);
var map__13170_14338__$1 = (((((!((map__13170_14337 == null))))?(((((map__13170_14337.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13170_14337.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13170_14337):map__13170_14337);
var binding_14339 = map__13170_14338__$1;
var init_14340 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13170_14338__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_14339);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_14340,";");


var G__14342 = seq__13158_14332;
var G__14343 = chunk__13159_14333;
var G__14344 = count__13160_14334;
var G__14345 = (i__13161_14335 + (1));
seq__13158_14332 = G__14342;
chunk__13159_14333 = G__14343;
count__13160_14334 = G__14344;
i__13161_14335 = G__14345;
continue;
} else {
var temp__5735__auto___14346 = cljs.core.seq(seq__13158_14332);
if(temp__5735__auto___14346){
var seq__13158_14347__$1 = temp__5735__auto___14346;
if(cljs.core.chunked_seq_QMARK_(seq__13158_14347__$1)){
var c__4556__auto___14348 = cljs.core.chunk_first(seq__13158_14347__$1);
var G__14349 = cljs.core.chunk_rest(seq__13158_14347__$1);
var G__14350 = c__4556__auto___14348;
var G__14351 = cljs.core.count(c__4556__auto___14348);
var G__14352 = (0);
seq__13158_14332 = G__14349;
chunk__13159_14333 = G__14350;
count__13160_14334 = G__14351;
i__13161_14335 = G__14352;
continue;
} else {
var map__13172_14354 = cljs.core.first(seq__13158_14347__$1);
var map__13172_14355__$1 = (((((!((map__13172_14354 == null))))?(((((map__13172_14354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13172_14354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13172_14354):map__13172_14354);
var binding_14356 = map__13172_14355__$1;
var init_14357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13172_14355__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_14356);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_14357,";");


var G__14359 = cljs.core.next(seq__13158_14347__$1);
var G__14360 = null;
var G__14361 = (0);
var G__14362 = (0);
seq__13158_14332 = G__14359;
chunk__13159_14333 = G__14360;
count__13160_14334 = G__14361;
i__13161_14335 = G__14362;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__13155_14330);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13175){
var map__13176 = p__13175;
var map__13176__$1 = (((((!((map__13176 == null))))?(((((map__13176.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13176.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13176):map__13176);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13176__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13176__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13176__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___14370 = cljs.core.count(exprs);
var i_14371 = (0);
while(true){
if((i_14371 < n__4613__auto___14370)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_14371) : temps.call(null,i_14371))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_14371) : exprs.call(null,i_14371)),";");

var G__14386 = (i_14371 + (1));
i_14371 = G__14386;
continue;
} else {
}
break;
}

var n__4613__auto___14387 = cljs.core.count(exprs);
var i_14388 = (0);
while(true){
if((i_14388 < n__4613__auto___14387)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_14388) : params.call(null,i_14388)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_14388) : temps.call(null,i_14388)),";");

var G__14390 = (i_14388 + (1));
i_14388 = G__14390;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13187){
var map__13188 = p__13187;
var map__13188__$1 = (((((!((map__13188 == null))))?(((((map__13188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13188):map__13188);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13188__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13188__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__13195_14391 = cljs.core.seq(bindings);
var chunk__13196_14392 = null;
var count__13197_14393 = (0);
var i__13198_14394 = (0);
while(true){
if((i__13198_14394 < count__13197_14393)){
var map__13203_14395 = chunk__13196_14392.cljs$core$IIndexed$_nth$arity$2(null,i__13198_14394);
var map__13203_14396__$1 = (((((!((map__13203_14395 == null))))?(((((map__13203_14395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13203_14395.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13203_14395):map__13203_14395);
var binding_14397 = map__13203_14396__$1;
var init_14398 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13203_14396__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_14397)," = ",init_14398,";");


var G__14399 = seq__13195_14391;
var G__14400 = chunk__13196_14392;
var G__14401 = count__13197_14393;
var G__14402 = (i__13198_14394 + (1));
seq__13195_14391 = G__14399;
chunk__13196_14392 = G__14400;
count__13197_14393 = G__14401;
i__13198_14394 = G__14402;
continue;
} else {
var temp__5735__auto___14403 = cljs.core.seq(seq__13195_14391);
if(temp__5735__auto___14403){
var seq__13195_14404__$1 = temp__5735__auto___14403;
if(cljs.core.chunked_seq_QMARK_(seq__13195_14404__$1)){
var c__4556__auto___14405 = cljs.core.chunk_first(seq__13195_14404__$1);
var G__14406 = cljs.core.chunk_rest(seq__13195_14404__$1);
var G__14407 = c__4556__auto___14405;
var G__14408 = cljs.core.count(c__4556__auto___14405);
var G__14409 = (0);
seq__13195_14391 = G__14406;
chunk__13196_14392 = G__14407;
count__13197_14393 = G__14408;
i__13198_14394 = G__14409;
continue;
} else {
var map__13205_14410 = cljs.core.first(seq__13195_14404__$1);
var map__13205_14411__$1 = (((((!((map__13205_14410 == null))))?(((((map__13205_14410.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13205_14410.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13205_14410):map__13205_14410);
var binding_14412 = map__13205_14411__$1;
var init_14413 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13205_14411__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_14412)," = ",init_14413,";");


var G__14415 = cljs.core.next(seq__13195_14404__$1);
var G__14416 = null;
var G__14417 = (0);
var G__14418 = (0);
seq__13195_14391 = G__14415;
chunk__13196_14392 = G__14416;
count__13197_14393 = G__14417;
i__13198_14394 = G__14418;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13229){
var map__13230 = p__13229;
var map__13230__$1 = (((((!((map__13230 == null))))?(((((map__13230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13230):map__13230);
var expr = map__13230__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13230__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13230__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13230__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__13260 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__13260.cljs$core$IFn$_invoke$arity$1 ? fexpr__13260.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__13260.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__13265 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__13265.cljs$core$IFn$_invoke$arity$1 ? fexpr__13265.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__13265.call(null,first_arg_tag));
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
var vec__13246 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13220_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13220_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__13221_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__13221_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13246,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13246,(1),null);
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
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
var pimpl_14438 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_14438,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_14443 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_14443,args)),(((mfa_14443 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_14443,args)),"], 0))"], 0));
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
var G__13295 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__13294 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__13294.cljs$core$IFn$_invoke$arity$1 ? fexpr__13294.cljs$core$IFn$_invoke$arity$1(G__13295) : fexpr__13294.call(null,G__13295));
} else {
return and__4115__auto__;
}
})())){
var fprop_14444 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_14444," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_14444,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_14444," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_14444,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13303){
var map__13304 = p__13303;
var map__13304__$1 = (((((!((map__13304 == null))))?(((((map__13304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13304):map__13304);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13304__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13324){
var map__13325 = p__13324;
var map__13325__$1 = (((((!((map__13325 == null))))?(((((map__13325.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13325.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13325):map__13325);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
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
var map__13329 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__13329__$1 = (((((!((map__13329 == null))))?(((((map__13329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13329):map__13329);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13329__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13329__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__13330 = options;
var map__13330__$1 = (((((!((map__13330 == null))))?(((((map__13330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13330):map__13330);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13330__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__13331 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__13336 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__13336__$1 = (((((!((map__13336 == null))))?(((((map__13336.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13336.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13336):map__13336);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13336__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13336__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13331,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13331,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__13338_14462 = cljs.core.seq(libs_to_load);
var chunk__13339_14463 = null;
var count__13340_14464 = (0);
var i__13341_14465 = (0);
while(true){
if((i__13341_14465 < count__13340_14464)){
var lib_14467 = chunk__13339_14463.cljs$core$IIndexed$_nth$arity$2(null,i__13341_14465);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_14467)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14467),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14467),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14467),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14467),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_14467,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14467),"');");
}

}
}
}


var G__14475 = seq__13338_14462;
var G__14476 = chunk__13339_14463;
var G__14477 = count__13340_14464;
var G__14478 = (i__13341_14465 + (1));
seq__13338_14462 = G__14475;
chunk__13339_14463 = G__14476;
count__13340_14464 = G__14477;
i__13341_14465 = G__14478;
continue;
} else {
var temp__5735__auto___14479 = cljs.core.seq(seq__13338_14462);
if(temp__5735__auto___14479){
var seq__13338_14480__$1 = temp__5735__auto___14479;
if(cljs.core.chunked_seq_QMARK_(seq__13338_14480__$1)){
var c__4556__auto___14481 = cljs.core.chunk_first(seq__13338_14480__$1);
var G__14482 = cljs.core.chunk_rest(seq__13338_14480__$1);
var G__14483 = c__4556__auto___14481;
var G__14484 = cljs.core.count(c__4556__auto___14481);
var G__14485 = (0);
seq__13338_14462 = G__14482;
chunk__13339_14463 = G__14483;
count__13340_14464 = G__14484;
i__13341_14465 = G__14485;
continue;
} else {
var lib_14487 = cljs.core.first(seq__13338_14480__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_14487)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14487),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14487),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_14487),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14487),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_14487,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_14487),"');");
}

}
}
}


var G__14493 = cljs.core.next(seq__13338_14480__$1);
var G__14494 = null;
var G__14495 = (0);
var G__14496 = (0);
seq__13338_14462 = G__14493;
chunk__13339_14463 = G__14494;
count__13340_14464 = G__14495;
i__13341_14465 = G__14496;
continue;
}
} else {
}
}
break;
}

var seq__13358_14497 = cljs.core.seq(node_libs);
var chunk__13359_14498 = null;
var count__13360_14499 = (0);
var i__13361_14500 = (0);
while(true){
if((i__13361_14500 < count__13360_14499)){
var lib_14501 = chunk__13359_14498.cljs$core$IIndexed$_nth$arity$2(null,i__13361_14500);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_14501)," = require('",lib_14501,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__14502 = seq__13358_14497;
var G__14503 = chunk__13359_14498;
var G__14504 = count__13360_14499;
var G__14505 = (i__13361_14500 + (1));
seq__13358_14497 = G__14502;
chunk__13359_14498 = G__14503;
count__13360_14499 = G__14504;
i__13361_14500 = G__14505;
continue;
} else {
var temp__5735__auto___14506 = cljs.core.seq(seq__13358_14497);
if(temp__5735__auto___14506){
var seq__13358_14507__$1 = temp__5735__auto___14506;
if(cljs.core.chunked_seq_QMARK_(seq__13358_14507__$1)){
var c__4556__auto___14508 = cljs.core.chunk_first(seq__13358_14507__$1);
var G__14509 = cljs.core.chunk_rest(seq__13358_14507__$1);
var G__14510 = c__4556__auto___14508;
var G__14511 = cljs.core.count(c__4556__auto___14508);
var G__14512 = (0);
seq__13358_14497 = G__14509;
chunk__13359_14498 = G__14510;
count__13360_14499 = G__14511;
i__13361_14500 = G__14512;
continue;
} else {
var lib_14513 = cljs.core.first(seq__13358_14507__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_14513)," = require('",lib_14513,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__14515 = cljs.core.next(seq__13358_14507__$1);
var G__14516 = null;
var G__14517 = (0);
var G__14518 = (0);
seq__13358_14497 = G__14515;
chunk__13359_14498 = G__14516;
count__13360_14499 = G__14517;
i__13361_14500 = G__14518;
continue;
}
} else {
}
}
break;
}

var seq__13364_14519 = cljs.core.seq(global_exports_libs);
var chunk__13365_14520 = null;
var count__13366_14521 = (0);
var i__13367_14522 = (0);
while(true){
if((i__13367_14522 < count__13366_14521)){
var lib_14524 = chunk__13365_14520.cljs$core$IIndexed$_nth$arity$2(null,i__13367_14522);
var map__13380_14525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_14524));
var map__13380_14526__$1 = (((((!((map__13380_14525 == null))))?(((((map__13380_14525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13380_14525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13380_14525):map__13380_14525);
var global_exports_14527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13380_14526__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_14527,lib_14524);


var G__14532 = seq__13364_14519;
var G__14533 = chunk__13365_14520;
var G__14534 = count__13366_14521;
var G__14535 = (i__13367_14522 + (1));
seq__13364_14519 = G__14532;
chunk__13365_14520 = G__14533;
count__13366_14521 = G__14534;
i__13367_14522 = G__14535;
continue;
} else {
var temp__5735__auto___14536 = cljs.core.seq(seq__13364_14519);
if(temp__5735__auto___14536){
var seq__13364_14537__$1 = temp__5735__auto___14536;
if(cljs.core.chunked_seq_QMARK_(seq__13364_14537__$1)){
var c__4556__auto___14538 = cljs.core.chunk_first(seq__13364_14537__$1);
var G__14539 = cljs.core.chunk_rest(seq__13364_14537__$1);
var G__14540 = c__4556__auto___14538;
var G__14541 = cljs.core.count(c__4556__auto___14538);
var G__14542 = (0);
seq__13364_14519 = G__14539;
chunk__13365_14520 = G__14540;
count__13366_14521 = G__14541;
i__13367_14522 = G__14542;
continue;
} else {
var lib_14543 = cljs.core.first(seq__13364_14537__$1);
var map__13390_14544 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_14543));
var map__13390_14545__$1 = (((((!((map__13390_14544 == null))))?(((((map__13390_14544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13390_14544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13390_14544):map__13390_14544);
var global_exports_14546 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13390_14545__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_14546,lib_14543);


var G__14548 = cljs.core.next(seq__13364_14537__$1);
var G__14549 = null;
var G__14550 = (0);
var G__14551 = (0);
seq__13364_14519 = G__14548;
chunk__13365_14520 = G__14549;
count__13366_14521 = G__14550;
i__13367_14522 = G__14551;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13418){
var map__13420 = p__13418;
var map__13420__$1 = (((((!((map__13420 == null))))?(((((map__13420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13420):map__13420);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13420__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13423){
var map__13424 = p__13423;
var map__13424__$1 = (((((!((map__13424 == null))))?(((((map__13424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13424):map__13424);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13424__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__13426){
var map__13427 = p__13426;
var map__13427__$1 = (((((!((map__13427 == null))))?(((((map__13427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13427):map__13427);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13427__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13427__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13427__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13427__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13427__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__13433_14583 = cljs.core.seq(protocols);
var chunk__13434_14584 = null;
var count__13435_14585 = (0);
var i__13436_14586 = (0);
while(true){
if((i__13436_14586 < count__13435_14585)){
var protocol_14587 = chunk__13434_14584.cljs$core$IIndexed$_nth$arity$2(null,i__13436_14586);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14587)),"}");


var G__14588 = seq__13433_14583;
var G__14589 = chunk__13434_14584;
var G__14590 = count__13435_14585;
var G__14591 = (i__13436_14586 + (1));
seq__13433_14583 = G__14588;
chunk__13434_14584 = G__14589;
count__13435_14585 = G__14590;
i__13436_14586 = G__14591;
continue;
} else {
var temp__5735__auto___14592 = cljs.core.seq(seq__13433_14583);
if(temp__5735__auto___14592){
var seq__13433_14593__$1 = temp__5735__auto___14592;
if(cljs.core.chunked_seq_QMARK_(seq__13433_14593__$1)){
var c__4556__auto___14594 = cljs.core.chunk_first(seq__13433_14593__$1);
var G__14595 = cljs.core.chunk_rest(seq__13433_14593__$1);
var G__14596 = c__4556__auto___14594;
var G__14597 = cljs.core.count(c__4556__auto___14594);
var G__14598 = (0);
seq__13433_14583 = G__14595;
chunk__13434_14584 = G__14596;
count__13435_14585 = G__14597;
i__13436_14586 = G__14598;
continue;
} else {
var protocol_14599 = cljs.core.first(seq__13433_14593__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14599)),"}");


var G__14604 = cljs.core.next(seq__13433_14593__$1);
var G__14605 = null;
var G__14606 = (0);
var G__14607 = (0);
seq__13433_14583 = G__14604;
chunk__13434_14584 = G__14605;
count__13435_14585 = G__14606;
i__13436_14586 = G__14607;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__13439_14608 = cljs.core.seq(fields__$1);
var chunk__13440_14609 = null;
var count__13441_14610 = (0);
var i__13442_14611 = (0);
while(true){
if((i__13442_14611 < count__13441_14610)){
var fld_14612 = chunk__13440_14609.cljs$core$IIndexed$_nth$arity$2(null,i__13442_14611);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14612," = ",fld_14612,";");


var G__14613 = seq__13439_14608;
var G__14614 = chunk__13440_14609;
var G__14615 = count__13441_14610;
var G__14616 = (i__13442_14611 + (1));
seq__13439_14608 = G__14613;
chunk__13440_14609 = G__14614;
count__13441_14610 = G__14615;
i__13442_14611 = G__14616;
continue;
} else {
var temp__5735__auto___14617 = cljs.core.seq(seq__13439_14608);
if(temp__5735__auto___14617){
var seq__13439_14619__$1 = temp__5735__auto___14617;
if(cljs.core.chunked_seq_QMARK_(seq__13439_14619__$1)){
var c__4556__auto___14620 = cljs.core.chunk_first(seq__13439_14619__$1);
var G__14621 = cljs.core.chunk_rest(seq__13439_14619__$1);
var G__14622 = c__4556__auto___14620;
var G__14623 = cljs.core.count(c__4556__auto___14620);
var G__14624 = (0);
seq__13439_14608 = G__14621;
chunk__13440_14609 = G__14622;
count__13441_14610 = G__14623;
i__13442_14611 = G__14624;
continue;
} else {
var fld_14625 = cljs.core.first(seq__13439_14619__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14625," = ",fld_14625,";");


var G__14626 = cljs.core.next(seq__13439_14619__$1);
var G__14627 = null;
var G__14628 = (0);
var G__14629 = (0);
seq__13439_14608 = G__14626;
chunk__13440_14609 = G__14627;
count__13441_14610 = G__14628;
i__13442_14611 = G__14629;
continue;
}
} else {
}
}
break;
}

var seq__13443_14630 = cljs.core.seq(pmasks);
var chunk__13444_14631 = null;
var count__13445_14632 = (0);
var i__13446_14633 = (0);
while(true){
if((i__13446_14633 < count__13445_14632)){
var vec__13453_14635 = chunk__13444_14631.cljs$core$IIndexed$_nth$arity$2(null,i__13446_14633);
var pno_14636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13453_14635,(0),null);
var pmask_14637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13453_14635,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14636,"$ = ",pmask_14637,";");


var G__14638 = seq__13443_14630;
var G__14639 = chunk__13444_14631;
var G__14640 = count__13445_14632;
var G__14641 = (i__13446_14633 + (1));
seq__13443_14630 = G__14638;
chunk__13444_14631 = G__14639;
count__13445_14632 = G__14640;
i__13446_14633 = G__14641;
continue;
} else {
var temp__5735__auto___14643 = cljs.core.seq(seq__13443_14630);
if(temp__5735__auto___14643){
var seq__13443_14644__$1 = temp__5735__auto___14643;
if(cljs.core.chunked_seq_QMARK_(seq__13443_14644__$1)){
var c__4556__auto___14645 = cljs.core.chunk_first(seq__13443_14644__$1);
var G__14646 = cljs.core.chunk_rest(seq__13443_14644__$1);
var G__14647 = c__4556__auto___14645;
var G__14648 = cljs.core.count(c__4556__auto___14645);
var G__14649 = (0);
seq__13443_14630 = G__14646;
chunk__13444_14631 = G__14647;
count__13445_14632 = G__14648;
i__13446_14633 = G__14649;
continue;
} else {
var vec__13456_14650 = cljs.core.first(seq__13443_14644__$1);
var pno_14651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13456_14650,(0),null);
var pmask_14652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13456_14650,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14651,"$ = ",pmask_14652,";");


var G__14655 = cljs.core.next(seq__13443_14644__$1);
var G__14656 = null;
var G__14657 = (0);
var G__14658 = (0);
seq__13443_14630 = G__14655;
chunk__13444_14631 = G__14656;
count__13445_14632 = G__14657;
i__13446_14633 = G__14658;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__13459){
var map__13460 = p__13459;
var map__13460__$1 = (((((!((map__13460 == null))))?(((((map__13460.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13460.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13460):map__13460);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13460__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__13462_14663 = cljs.core.seq(protocols);
var chunk__13463_14664 = null;
var count__13464_14665 = (0);
var i__13465_14666 = (0);
while(true){
if((i__13465_14666 < count__13464_14665)){
var protocol_14668 = chunk__13463_14664.cljs$core$IIndexed$_nth$arity$2(null,i__13465_14666);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14668)),"}");


var G__14669 = seq__13462_14663;
var G__14670 = chunk__13463_14664;
var G__14671 = count__13464_14665;
var G__14672 = (i__13465_14666 + (1));
seq__13462_14663 = G__14669;
chunk__13463_14664 = G__14670;
count__13464_14665 = G__14671;
i__13465_14666 = G__14672;
continue;
} else {
var temp__5735__auto___14674 = cljs.core.seq(seq__13462_14663);
if(temp__5735__auto___14674){
var seq__13462_14675__$1 = temp__5735__auto___14674;
if(cljs.core.chunked_seq_QMARK_(seq__13462_14675__$1)){
var c__4556__auto___14676 = cljs.core.chunk_first(seq__13462_14675__$1);
var G__14677 = cljs.core.chunk_rest(seq__13462_14675__$1);
var G__14678 = c__4556__auto___14676;
var G__14679 = cljs.core.count(c__4556__auto___14676);
var G__14680 = (0);
seq__13462_14663 = G__14677;
chunk__13463_14664 = G__14678;
count__13464_14665 = G__14679;
i__13465_14666 = G__14680;
continue;
} else {
var protocol_14681 = cljs.core.first(seq__13462_14675__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_14681)),"}");


var G__14682 = cljs.core.next(seq__13462_14675__$1);
var G__14683 = null;
var G__14684 = (0);
var G__14685 = (0);
seq__13462_14663 = G__14682;
chunk__13463_14664 = G__14683;
count__13464_14665 = G__14684;
i__13465_14666 = G__14685;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__13466_14687 = cljs.core.seq(fields__$1);
var chunk__13467_14688 = null;
var count__13468_14689 = (0);
var i__13469_14690 = (0);
while(true){
if((i__13469_14690 < count__13468_14689)){
var fld_14691 = chunk__13467_14688.cljs$core$IIndexed$_nth$arity$2(null,i__13469_14690);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14691," = ",fld_14691,";");


var G__14692 = seq__13466_14687;
var G__14693 = chunk__13467_14688;
var G__14694 = count__13468_14689;
var G__14695 = (i__13469_14690 + (1));
seq__13466_14687 = G__14692;
chunk__13467_14688 = G__14693;
count__13468_14689 = G__14694;
i__13469_14690 = G__14695;
continue;
} else {
var temp__5735__auto___14696 = cljs.core.seq(seq__13466_14687);
if(temp__5735__auto___14696){
var seq__13466_14697__$1 = temp__5735__auto___14696;
if(cljs.core.chunked_seq_QMARK_(seq__13466_14697__$1)){
var c__4556__auto___14698 = cljs.core.chunk_first(seq__13466_14697__$1);
var G__14699 = cljs.core.chunk_rest(seq__13466_14697__$1);
var G__14700 = c__4556__auto___14698;
var G__14701 = cljs.core.count(c__4556__auto___14698);
var G__14702 = (0);
seq__13466_14687 = G__14699;
chunk__13467_14688 = G__14700;
count__13468_14689 = G__14701;
i__13469_14690 = G__14702;
continue;
} else {
var fld_14703 = cljs.core.first(seq__13466_14697__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_14703," = ",fld_14703,";");


var G__14705 = cljs.core.next(seq__13466_14697__$1);
var G__14706 = null;
var G__14707 = (0);
var G__14708 = (0);
seq__13466_14687 = G__14705;
chunk__13467_14688 = G__14706;
count__13468_14689 = G__14707;
i__13469_14690 = G__14708;
continue;
}
} else {
}
}
break;
}

var seq__13473_14712 = cljs.core.seq(pmasks);
var chunk__13474_14713 = null;
var count__13475_14714 = (0);
var i__13476_14715 = (0);
while(true){
if((i__13476_14715 < count__13475_14714)){
var vec__13485_14716 = chunk__13474_14713.cljs$core$IIndexed$_nth$arity$2(null,i__13476_14715);
var pno_14717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13485_14716,(0),null);
var pmask_14718 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13485_14716,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14717,"$ = ",pmask_14718,";");


var G__14719 = seq__13473_14712;
var G__14720 = chunk__13474_14713;
var G__14721 = count__13475_14714;
var G__14722 = (i__13476_14715 + (1));
seq__13473_14712 = G__14719;
chunk__13474_14713 = G__14720;
count__13475_14714 = G__14721;
i__13476_14715 = G__14722;
continue;
} else {
var temp__5735__auto___14723 = cljs.core.seq(seq__13473_14712);
if(temp__5735__auto___14723){
var seq__13473_14724__$1 = temp__5735__auto___14723;
if(cljs.core.chunked_seq_QMARK_(seq__13473_14724__$1)){
var c__4556__auto___14725 = cljs.core.chunk_first(seq__13473_14724__$1);
var G__14726 = cljs.core.chunk_rest(seq__13473_14724__$1);
var G__14727 = c__4556__auto___14725;
var G__14728 = cljs.core.count(c__4556__auto___14725);
var G__14729 = (0);
seq__13473_14712 = G__14726;
chunk__13474_14713 = G__14727;
count__13475_14714 = G__14728;
i__13476_14715 = G__14729;
continue;
} else {
var vec__13488_14730 = cljs.core.first(seq__13473_14724__$1);
var pno_14731 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13488_14730,(0),null);
var pmask_14732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13488_14730,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_14731,"$ = ",pmask_14732,";");


var G__14733 = cljs.core.next(seq__13473_14724__$1);
var G__14734 = null;
var G__14735 = (0);
var G__14736 = (0);
seq__13473_14712 = G__14733;
chunk__13474_14713 = G__14734;
count__13475_14714 = G__14735;
i__13476_14715 = G__14736;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__13491){
var map__13492 = p__13491;
var map__13492__$1 = (((((!((map__13492 == null))))?(((((map__13492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13492):map__13492);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13492__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13492__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13492__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13492__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13492__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13494){
var map__13495 = p__13494;
var map__13495__$1 = (((((!((map__13495 == null))))?(((((map__13495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13495.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13495):map__13495);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13495__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13495__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13495__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13495__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13495__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__12091__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12091__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__13509 = cljs.core.seq(table);
var chunk__13510 = null;
var count__13511 = (0);
var i__13512 = (0);
while(true){
if((i__13512 < count__13511)){
var vec__13521 = chunk__13510.cljs$core$IIndexed$_nth$arity$2(null,i__13512);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13521,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13521,(1),null);
var ns_14768 = cljs.core.namespace(sym);
var name_14769 = cljs.core.name(sym);
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


var G__14772 = seq__13509;
var G__14773 = chunk__13510;
var G__14774 = count__13511;
var G__14775 = (i__13512 + (1));
seq__13509 = G__14772;
chunk__13510 = G__14773;
count__13511 = G__14774;
i__13512 = G__14775;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13509);
if(temp__5735__auto__){
var seq__13509__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13509__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__13509__$1);
var G__14776 = cljs.core.chunk_rest(seq__13509__$1);
var G__14777 = c__4556__auto__;
var G__14778 = cljs.core.count(c__4556__auto__);
var G__14779 = (0);
seq__13509 = G__14776;
chunk__13510 = G__14777;
count__13511 = G__14778;
i__13512 = G__14779;
continue;
} else {
var vec__13524 = cljs.core.first(seq__13509__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13524,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13524,(1),null);
var ns_14783 = cljs.core.namespace(sym);
var name_14784 = cljs.core.name(sym);
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


var G__14787 = cljs.core.next(seq__13509__$1);
var G__14788 = null;
var G__14789 = (0);
var G__14790 = (0);
seq__13509 = G__14787;
chunk__13510 = G__14788;
count__13511 = G__14789;
i__13512 = G__14790;
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
var G__13529 = arguments.length;
switch (G__13529) {
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
var k_14794 = cljs.core.first(ks);
var vec__13530_14795 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_14794);
var top_14796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13530_14795,(0),null);
var prefix_SINGLEQUOTE__14797 = vec__13530_14795;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_14794)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__14797) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_14796)) || (cljs.core.contains_QMARK_(known_externs,top_14796)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__14797)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_14796);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__14797)),";");
}
} else {
}

var m_14802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_14794);
if(cljs.core.empty_QMARK_(m_14802)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__14797,m_14802,top_level,known_externs);
}

var G__14803 = cljs.core.next(ks);
ks = G__14803;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
