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
var map__15272 = s;
var map__15272__$1 = (((((!((map__15272 == null))))?(((((map__15272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15272):map__15272);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15272__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15272__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15275 = info;
var map__15276 = G__15275;
var map__15276__$1 = (((((!((map__15276 == null))))?(((((map__15276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15276):map__15276);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15276__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15275__$1 = G__15275;
while(true){
var d__$2 = d__$1;
var map__15282 = G__15275__$1;
var map__15282__$1 = (((((!((map__15282 == null))))?(((((map__15282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15282):map__15282);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15282__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__17223 = (d__$2 + (1));
var G__17224 = shadow__$1;
d__$1 = G__17223;
G__15275__$1 = G__17224;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15292){
var map__15293 = p__15292;
var map__15293__$1 = (((((!((map__15293 == null))))?(((((map__15293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15293):map__15293);
var name_var = map__15293__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15293__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15293__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15296 = info;
var map__15296__$1 = (((((!((map__15296 == null))))?(((((map__15296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15296):map__15296);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15296__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15296__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__15298 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__15298) : cljs.compiler.munge.call(null,G__15298));
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
var G__15300 = arguments.length;
switch (G__15300) {
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
var ms = (function (){var fexpr__15306 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__15306.cljs$core$IFn$_invoke$arity$1 ? fexpr__15306.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__15306.call(null,ss__$3));
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
var G__15307 = cp;
switch (G__15307) {
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
var seq__15311_17242 = cljs.core.seq(s);
var chunk__15312_17243 = null;
var count__15313_17244 = (0);
var i__15314_17245 = (0);
while(true){
if((i__15314_17245 < count__15313_17244)){
var c_17246 = chunk__15312_17243.cljs$core$IIndexed$_nth$arity$2(null,i__15314_17245);
sb.append(cljs.compiler.escape_char(c_17246));


var G__17247 = seq__15311_17242;
var G__17248 = chunk__15312_17243;
var G__17249 = count__15313_17244;
var G__17250 = (i__15314_17245 + (1));
seq__15311_17242 = G__17247;
chunk__15312_17243 = G__17248;
count__15313_17244 = G__17249;
i__15314_17245 = G__17250;
continue;
} else {
var temp__5735__auto___17251 = cljs.core.seq(seq__15311_17242);
if(temp__5735__auto___17251){
var seq__15311_17252__$1 = temp__5735__auto___17251;
if(cljs.core.chunked_seq_QMARK_(seq__15311_17252__$1)){
var c__4556__auto___17253 = cljs.core.chunk_first(seq__15311_17252__$1);
var G__17254 = cljs.core.chunk_rest(seq__15311_17252__$1);
var G__17255 = c__4556__auto___17253;
var G__17256 = cljs.core.count(c__4556__auto___17253);
var G__17257 = (0);
seq__15311_17242 = G__17254;
chunk__15312_17243 = G__17255;
count__15313_17244 = G__17256;
i__15314_17245 = G__17257;
continue;
} else {
var c_17258 = cljs.core.first(seq__15311_17252__$1);
sb.append(cljs.compiler.escape_char(c_17258));


var G__17259 = cljs.core.next(seq__15311_17252__$1);
var G__17260 = null;
var G__17261 = (0);
var G__17262 = (0);
seq__15311_17242 = G__17259;
chunk__15312_17243 = G__17260;
count__15313_17244 = G__17261;
i__15314_17245 = G__17262;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15319 = cljs.core.get_global_hierarchy;
return (fexpr__15319.cljs$core$IFn$_invoke$arity$0 ? fexpr__15319.cljs$core$IFn$_invoke$arity$0() : fexpr__15319.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15324_17263 = ast;
var map__15324_17264__$1 = (((((!((map__15324_17263 == null))))?(((((map__15324_17263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15324_17263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15324_17263):map__15324_17263);
var env_17265 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15324_17264__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_17265))){
var map__15326_17266 = env_17265;
var map__15326_17267__$1 = (((((!((map__15326_17266 == null))))?(((((map__15326_17266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15326_17266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15326_17266):map__15326_17266);
var line_17268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15326_17267__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_17269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15326_17267__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__15328 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__15330 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__15329 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__15329.cljs$core$IFn$_invoke$arity$1 ? fexpr__15329.cljs$core$IFn$_invoke$arity$1(G__15330) : fexpr__15329.call(null,G__15330));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15328,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15328;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_17268 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_17269)?(column_17269 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__15345 = arguments.length;
switch (G__15345) {
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
var len__4736__auto___17273 = arguments.length;
var i__4737__auto___17274 = (0);
while(true){
if((i__4737__auto___17274 < len__4736__auto___17273)){
args_arr__4757__auto__.push((arguments[i__4737__auto___17274]));

var G__17275 = (i__4737__auto___17274 + (1));
i__4737__auto___17274 = G__17275;
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
var s_17276 = (function (){var G__15355 = a;
if((!(typeof a === 'string'))){
return G__15355.toString();
} else {
return G__15355;
}
})();
var temp__5739__auto___17277 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___17277 == null)){
} else {
var sm_data_17278 = temp__5739__auto___17277;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_17278,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__15336_SHARP_){
return (p1__15336_SHARP_ + s_17276.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_17276], 0));

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

var seq__15369 = cljs.core.seq(xs);
var chunk__15370 = null;
var count__15371 = (0);
var i__15372 = (0);
while(true){
if((i__15372 < count__15371)){
var x = chunk__15370.cljs$core$IIndexed$_nth$arity$2(null,i__15372);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__17283 = seq__15369;
var G__17284 = chunk__15370;
var G__17285 = count__15371;
var G__17286 = (i__15372 + (1));
seq__15369 = G__17283;
chunk__15370 = G__17284;
count__15371 = G__17285;
i__15372 = G__17286;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15369);
if(temp__5735__auto__){
var seq__15369__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15369__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__15369__$1);
var G__17287 = cljs.core.chunk_rest(seq__15369__$1);
var G__17288 = c__4556__auto__;
var G__17289 = cljs.core.count(c__4556__auto__);
var G__17290 = (0);
seq__15369 = G__17287;
chunk__15370 = G__17288;
count__15371 = G__17289;
i__15372 = G__17290;
continue;
} else {
var x = cljs.core.first(seq__15369__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__17291 = cljs.core.next(seq__15369__$1);
var G__17292 = null;
var G__17293 = (0);
var G__17294 = (0);
seq__15369 = G__17291;
chunk__15370 = G__17292;
count__15371 = G__17293;
i__15372 = G__17294;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq15339){
var G__15340 = cljs.core.first(seq15339);
var seq15339__$1 = cljs.core.next(seq15339);
var G__15341 = cljs.core.first(seq15339__$1);
var seq15339__$2 = cljs.core.next(seq15339__$1);
var G__15342 = cljs.core.first(seq15339__$2);
var seq15339__$3 = cljs.core.next(seq15339__$2);
var G__15343 = cljs.core.first(seq15339__$3);
var seq15339__$4 = cljs.core.next(seq15339__$3);
var G__15344 = cljs.core.first(seq15339__$4);
var seq15339__$5 = cljs.core.next(seq15339__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15340,G__15341,G__15342,G__15343,G__15344,seq15339__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__15385){
var map__15386 = p__15385;
var map__15386__$1 = (((((!((map__15386 == null))))?(((((map__15386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15386):map__15386);
var m = map__15386__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15386__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15419 = arguments.length;
switch (G__15419) {
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
var len__4736__auto___17321 = arguments.length;
var i__4737__auto___17322 = (0);
while(true){
if((i__4737__auto___17322 < len__4736__auto___17321)){
args_arr__4757__auto__.push((arguments[i__4737__auto___17322]));

var G__17327 = (i__4737__auto___17322 + (1));
i__4737__auto___17322 = G__17327;
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

var seq__15436_17328 = cljs.core.seq(xs);
var chunk__15437_17329 = null;
var count__15438_17330 = (0);
var i__15439_17331 = (0);
while(true){
if((i__15439_17331 < count__15438_17330)){
var x_17332 = chunk__15437_17329.cljs$core$IIndexed$_nth$arity$2(null,i__15439_17331);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_17332);


var G__17333 = seq__15436_17328;
var G__17334 = chunk__15437_17329;
var G__17335 = count__15438_17330;
var G__17336 = (i__15439_17331 + (1));
seq__15436_17328 = G__17333;
chunk__15437_17329 = G__17334;
count__15438_17330 = G__17335;
i__15439_17331 = G__17336;
continue;
} else {
var temp__5735__auto___17337 = cljs.core.seq(seq__15436_17328);
if(temp__5735__auto___17337){
var seq__15436_17338__$1 = temp__5735__auto___17337;
if(cljs.core.chunked_seq_QMARK_(seq__15436_17338__$1)){
var c__4556__auto___17339 = cljs.core.chunk_first(seq__15436_17338__$1);
var G__17340 = cljs.core.chunk_rest(seq__15436_17338__$1);
var G__17341 = c__4556__auto___17339;
var G__17342 = cljs.core.count(c__4556__auto___17339);
var G__17343 = (0);
seq__15436_17328 = G__17340;
chunk__15437_17329 = G__17341;
count__15438_17330 = G__17342;
i__15439_17331 = G__17343;
continue;
} else {
var x_17344 = cljs.core.first(seq__15436_17338__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_17344);


var G__17345 = cljs.core.next(seq__15436_17338__$1);
var G__17346 = null;
var G__17347 = (0);
var G__17348 = (0);
seq__15436_17328 = G__17345;
chunk__15437_17329 = G__17346;
count__15438_17330 = G__17347;
i__15439_17331 = G__17348;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15413){
var G__15414 = cljs.core.first(seq15413);
var seq15413__$1 = cljs.core.next(seq15413);
var G__15415 = cljs.core.first(seq15413__$1);
var seq15413__$2 = cljs.core.next(seq15413__$1);
var G__15416 = cljs.core.first(seq15413__$2);
var seq15413__$3 = cljs.core.next(seq15413__$2);
var G__15417 = cljs.core.first(seq15413__$3);
var seq15413__$4 = cljs.core.next(seq15413__$3);
var G__15418 = cljs.core.first(seq15413__$4);
var seq15413__$5 = cljs.core.next(seq15413__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15414,G__15415,G__15416,G__15417,G__15418,seq15413__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15445_17349 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15446_17350 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15447_17351 = true;
var _STAR_print_fn_STAR__temp_val__15448_17352 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15447_17351);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15448_17352);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15446_17350);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15445_17349);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15450 = cljs.core.get_global_hierarchy;
return (fexpr__15450.cljs$core$IFn$_invoke$arity$0 ? fexpr__15450.cljs$core$IFn$_invoke$arity$0() : fexpr__15450.call(null));
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
var vec__15465 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15465,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15465,(1),null);
var G__15468 = ns;
var G__15469 = name;
var G__15470 = (function (){
var G__15471 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__15471) : cljs.compiler.emit_constant.call(null,G__15471));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__15468,G__15469,G__15470) : cljs.compiler.emit_record_value.call(null,G__15468,G__15469,G__15470));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__15472 = cljs.core.keys(x);
var G__15473 = cljs.core.vals(x);
var G__15474 = cljs.compiler.emit_constants_comma_sep;
var G__15475 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__15472,G__15473,G__15474,G__15475) : cljs.compiler.emit_map.call(null,G__15472,G__15473,G__15474,G__15475));
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
var G__15479 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__15480 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__15479,G__15480) : cljs.compiler.emit_with_meta.call(null,G__15479,G__15480));
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
var vec__15490 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15490,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15490,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15490,(2),null);
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
var G__15497 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__15497) : x.call(null,G__15497));
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
var G__15512 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__15512) : x.call(null,G__15512));
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
var G__15605 = items;
var G__15606 = (function (p1__15589_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__15589_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__15605,G__15606) : cljs.compiler.emit_js_object.call(null,G__15605,G__15606));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__15654){
var map__15655 = p__15654;
var map__15655__$1 = (((((!((map__15655 == null))))?(((((map__15655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15655):map__15655);
var ast = map__15655__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15655__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15655__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15655__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__15678 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__15678__$1 = (((((!((map__15678 == null))))?(((((map__15678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15678):map__15678);
var cenv = map__15678__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15678__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__15693 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__15699 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__15699) : cljs.compiler.es5_GT__EQ_.call(null,G__15699));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__15693,cljs.analyzer.es5_allowed);
} else {
return G__15693;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__15725 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__15725,reserved);
} else {
return G__15725;
}
})();
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__15726_17411 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__15726_17412__$1 = (((G__15726_17411 instanceof cljs.core.Keyword))?G__15726_17411.fqn:null);
switch (G__15726_17412__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__15855){
var map__15856 = p__15855;
var map__15856__$1 = (((((!((map__15856 == null))))?(((((map__15856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15856):map__15856);
var arg = map__15856__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15856__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__15858 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__15858__$1 = (((((!((map__15858 == null))))?(((((map__15858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15858):map__15858);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__15939){
var map__15940 = p__15939;
var map__15940__$1 = (((((!((map__15940 == null))))?(((((map__15940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15940):map__15940);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15940__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15940__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15940__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__15944_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15944_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__15945 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__15945) : comma_sep.call(null,G__15945));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__15946 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__15946) : comma_sep.call(null,G__15946));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__15948){
var map__15949 = p__15948;
var map__15949__$1 = (((((!((map__15949 == null))))?(((((map__15949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15949):map__15949);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15949__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15949__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15949__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__15959){
var map__15960 = p__15959;
var map__15960__$1 = (((((!((map__15960 == null))))?(((((map__15960.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15960.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15960):map__15960);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15960__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15960__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__15963_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__15963_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__15965 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__15965) : comma_sep.call(null,G__15965));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__15966){
var map__15967 = p__15966;
var map__15967__$1 = (((((!((map__15967 == null))))?(((((map__15967.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15967.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15967):map__15967);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15967__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15967__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___17484 = cljs.core.seq(items);
if(temp__5735__auto___17484){
var items_17485__$1 = temp__5735__auto___17484;
var vec__15970_17486 = items_17485__$1;
var seq__15971_17487 = cljs.core.seq(vec__15970_17486);
var first__15972_17488 = cljs.core.first(seq__15971_17487);
var seq__15971_17489__$1 = cljs.core.next(seq__15971_17487);
var vec__15973_17490 = first__15972_17488;
var k_17491 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973_17490,(0),null);
var v_17492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15973_17490,(1),null);
var r_17493 = seq__15971_17489__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_17491),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17492) : emit_js_object_val.call(null,v_17492)));

var seq__15976_17494 = cljs.core.seq(r_17493);
var chunk__15977_17495 = null;
var count__15978_17496 = (0);
var i__15979_17497 = (0);
while(true){
if((i__15979_17497 < count__15978_17496)){
var vec__15986_17498 = chunk__15977_17495.cljs$core$IIndexed$_nth$arity$2(null,i__15979_17497);
var k_17499__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15986_17498,(0),null);
var v_17500__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15986_17498,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_17499__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17500__$1) : emit_js_object_val.call(null,v_17500__$1)));


var G__17501 = seq__15976_17494;
var G__17502 = chunk__15977_17495;
var G__17503 = count__15978_17496;
var G__17504 = (i__15979_17497 + (1));
seq__15976_17494 = G__17501;
chunk__15977_17495 = G__17502;
count__15978_17496 = G__17503;
i__15979_17497 = G__17504;
continue;
} else {
var temp__5735__auto___17505__$1 = cljs.core.seq(seq__15976_17494);
if(temp__5735__auto___17505__$1){
var seq__15976_17506__$1 = temp__5735__auto___17505__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15976_17506__$1)){
var c__4556__auto___17507 = cljs.core.chunk_first(seq__15976_17506__$1);
var G__17508 = cljs.core.chunk_rest(seq__15976_17506__$1);
var G__17509 = c__4556__auto___17507;
var G__17510 = cljs.core.count(c__4556__auto___17507);
var G__17511 = (0);
seq__15976_17494 = G__17508;
chunk__15977_17495 = G__17509;
count__15978_17496 = G__17510;
i__15979_17497 = G__17511;
continue;
} else {
var vec__15989_17512 = cljs.core.first(seq__15976_17506__$1);
var k_17513__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15989_17512,(0),null);
var v_17514__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15989_17512,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_17513__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17514__$1) : emit_js_object_val.call(null,v_17514__$1)));


var G__17515 = cljs.core.next(seq__15976_17506__$1);
var G__17516 = null;
var G__17517 = (0);
var G__17518 = (0);
seq__15976_17494 = G__17515;
chunk__15977_17495 = G__17516;
count__15978_17496 = G__17517;
i__15979_17497 = G__17518;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__15992){
var map__15993 = p__15992;
var map__15993__$1 = (((((!((map__15993 == null))))?(((((map__15993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15993):map__15993);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15993__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15993__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15993__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__15997){
var map__15998 = p__15997;
var map__15998__$1 = (((((!((map__15998 == null))))?(((((map__15998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15998):map__15998);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15998__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15998__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__16002){
var map__16003 = p__16002;
var map__16003__$1 = (((((!((map__16003 == null))))?(((((map__16003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16003):map__16003);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16003__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__16007){
var map__16008 = p__16007;
var map__16008__$1 = (((((!((map__16008 == null))))?(((((map__16008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16008):map__16008);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16008__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16008__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__16018 = cljs.analyzer.unwrap_quote(expr);
var map__16018__$1 = (((((!((map__16018 == null))))?(((((map__16018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16018):map__16018);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16018__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16018__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16018__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__16025 = cljs.analyzer.unwrap_quote(expr);
var map__16025__$1 = (((((!((map__16025 == null))))?(((((map__16025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16025):map__16025);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16025__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__16034 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__16034.cljs$core$IFn$_invoke$arity$1 ? fexpr__16034.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16034.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__16039){
var map__16040 = p__16039;
var map__16040__$1 = (((((!((map__16040 == null))))?(((((map__16040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16040):map__16040);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16040__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16040__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16040__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16040__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16040__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__16054){
var map__16055 = p__16054;
var map__16055__$1 = (((((!((map__16055 == null))))?(((((map__16055.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16055.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16055):map__16055);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16055__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__16064_17548 = cljs.core.seq(nodes);
var chunk__16065_17549 = null;
var count__16066_17550 = (0);
var i__16067_17551 = (0);
while(true){
if((i__16067_17551 < count__16066_17550)){
var map__16126_17553 = chunk__16065_17549.cljs$core$IIndexed$_nth$arity$2(null,i__16067_17551);
var map__16126_17554__$1 = (((((!((map__16126_17553 == null))))?(((((map__16126_17553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16126_17553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16126_17553):map__16126_17553);
var ts_17555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126_17554__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16127_17556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16126_17554__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16127_17557__$1 = (((((!((map__16127_17556 == null))))?(((((map__16127_17556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16127_17556.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16127_17556):map__16127_17556);
var then_17558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16127_17557__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16134_17561 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_17555));
var chunk__16135_17562 = null;
var count__16136_17563 = (0);
var i__16137_17564 = (0);
while(true){
if((i__16137_17564 < count__16136_17563)){
var test_17569 = chunk__16135_17562.cljs$core$IIndexed$_nth$arity$2(null,i__16137_17564);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17569,":");


var G__17571 = seq__16134_17561;
var G__17572 = chunk__16135_17562;
var G__17573 = count__16136_17563;
var G__17574 = (i__16137_17564 + (1));
seq__16134_17561 = G__17571;
chunk__16135_17562 = G__17572;
count__16136_17563 = G__17573;
i__16137_17564 = G__17574;
continue;
} else {
var temp__5735__auto___17576 = cljs.core.seq(seq__16134_17561);
if(temp__5735__auto___17576){
var seq__16134_17577__$1 = temp__5735__auto___17576;
if(cljs.core.chunked_seq_QMARK_(seq__16134_17577__$1)){
var c__4556__auto___17578 = cljs.core.chunk_first(seq__16134_17577__$1);
var G__17579 = cljs.core.chunk_rest(seq__16134_17577__$1);
var G__17580 = c__4556__auto___17578;
var G__17581 = cljs.core.count(c__4556__auto___17578);
var G__17582 = (0);
seq__16134_17561 = G__17579;
chunk__16135_17562 = G__17580;
count__16136_17563 = G__17581;
i__16137_17564 = G__17582;
continue;
} else {
var test_17583 = cljs.core.first(seq__16134_17577__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17583,":");


var G__17584 = cljs.core.next(seq__16134_17577__$1);
var G__17585 = null;
var G__17586 = (0);
var G__17587 = (0);
seq__16134_17561 = G__17584;
chunk__16135_17562 = G__17585;
count__16136_17563 = G__17586;
i__16137_17564 = G__17587;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_17558);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_17558);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__17588 = seq__16064_17548;
var G__17589 = chunk__16065_17549;
var G__17590 = count__16066_17550;
var G__17591 = (i__16067_17551 + (1));
seq__16064_17548 = G__17588;
chunk__16065_17549 = G__17589;
count__16066_17550 = G__17590;
i__16067_17551 = G__17591;
continue;
} else {
var temp__5735__auto___17592 = cljs.core.seq(seq__16064_17548);
if(temp__5735__auto___17592){
var seq__16064_17593__$1 = temp__5735__auto___17592;
if(cljs.core.chunked_seq_QMARK_(seq__16064_17593__$1)){
var c__4556__auto___17594 = cljs.core.chunk_first(seq__16064_17593__$1);
var G__17595 = cljs.core.chunk_rest(seq__16064_17593__$1);
var G__17596 = c__4556__auto___17594;
var G__17597 = cljs.core.count(c__4556__auto___17594);
var G__17598 = (0);
seq__16064_17548 = G__17595;
chunk__16065_17549 = G__17596;
count__16066_17550 = G__17597;
i__16067_17551 = G__17598;
continue;
} else {
var map__16139_17599 = cljs.core.first(seq__16064_17593__$1);
var map__16139_17600__$1 = (((((!((map__16139_17599 == null))))?(((((map__16139_17599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16139_17599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16139_17599):map__16139_17599);
var ts_17601 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16139_17600__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16140_17602 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16139_17600__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16140_17603__$1 = (((((!((map__16140_17602 == null))))?(((((map__16140_17602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16140_17602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16140_17602):map__16140_17602);
var then_17604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16140_17603__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16147_17609 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_17601));
var chunk__16148_17610 = null;
var count__16149_17611 = (0);
var i__16150_17612 = (0);
while(true){
if((i__16150_17612 < count__16149_17611)){
var test_17613 = chunk__16148_17610.cljs$core$IIndexed$_nth$arity$2(null,i__16150_17612);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17613,":");


var G__17614 = seq__16147_17609;
var G__17615 = chunk__16148_17610;
var G__17616 = count__16149_17611;
var G__17617 = (i__16150_17612 + (1));
seq__16147_17609 = G__17614;
chunk__16148_17610 = G__17615;
count__16149_17611 = G__17616;
i__16150_17612 = G__17617;
continue;
} else {
var temp__5735__auto___17618__$1 = cljs.core.seq(seq__16147_17609);
if(temp__5735__auto___17618__$1){
var seq__16147_17619__$1 = temp__5735__auto___17618__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16147_17619__$1)){
var c__4556__auto___17620 = cljs.core.chunk_first(seq__16147_17619__$1);
var G__17621 = cljs.core.chunk_rest(seq__16147_17619__$1);
var G__17622 = c__4556__auto___17620;
var G__17623 = cljs.core.count(c__4556__auto___17620);
var G__17624 = (0);
seq__16147_17609 = G__17621;
chunk__16148_17610 = G__17622;
count__16149_17611 = G__17623;
i__16150_17612 = G__17624;
continue;
} else {
var test_17628 = cljs.core.first(seq__16147_17619__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17628,":");


var G__17629 = cljs.core.next(seq__16147_17619__$1);
var G__17630 = null;
var G__17631 = (0);
var G__17632 = (0);
seq__16147_17609 = G__17629;
chunk__16148_17610 = G__17630;
count__16149_17611 = G__17631;
i__16150_17612 = G__17632;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_17604);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_17604);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__17636 = cljs.core.next(seq__16064_17593__$1);
var G__17637 = null;
var G__17638 = (0);
var G__17639 = (0);
seq__16064_17548 = G__17636;
chunk__16065_17549 = G__17637;
count__16066_17550 = G__17638;
i__16067_17551 = G__17639;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16167){
var map__16168 = p__16167;
var map__16168__$1 = (((((!((map__16168 == null))))?(((((map__16168.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16168.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16168):map__16168);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16168__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16168__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16197 = env;
var G__16198 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16197,G__16198) : cljs.compiler.resolve_type.call(null,G__16197,G__16198));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__16206 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16206,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16177_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__16177_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__16177_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__16213 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__16213,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__16213;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16217 = env;
var G__16218 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16217,G__16218) : cljs.compiler.resolve_type.call(null,G__16217,G__16218));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16227_SHARP_){
return cljs.compiler.resolve_type(env,p1__16227_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__16237 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16238 = cljs.core.seq(vec__16237);
var first__16239 = cljs.core.first(seq__16238);
var seq__16238__$1 = cljs.core.next(seq__16238);
var p = first__16239;
var first__16239__$1 = cljs.core.first(seq__16238__$1);
var seq__16238__$2 = cljs.core.next(seq__16238__$1);
var ts = first__16239__$1;
var first__16239__$2 = cljs.core.first(seq__16238__$2);
var seq__16238__$3 = cljs.core.next(seq__16238__$2);
var n = first__16239__$2;
var xs = seq__16238__$3;
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
var vec__16255 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16256 = cljs.core.seq(vec__16255);
var first__16257 = cljs.core.first(seq__16256);
var seq__16256__$1 = cljs.core.next(seq__16256);
var p = first__16257;
var first__16257__$1 = cljs.core.first(seq__16256__$1);
var seq__16256__$2 = cljs.core.next(seq__16256__$1);
var ts = first__16257__$1;
var xs = seq__16256__$2;
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
var G__16282 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__16281 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__16281.cljs$core$IFn$_invoke$arity$1 ? fexpr__16281.cljs$core$IFn$_invoke$arity$1(G__16282) : fexpr__16281.call(null,G__16282));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__16292 = arguments.length;
switch (G__16292) {
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
var vec__16366 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16286_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__16286_SHARP_);
} else {
return p1__16286_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__16367 = cljs.core.seq(vec__16366);
var first__16368 = cljs.core.first(seq__16367);
var seq__16367__$1 = cljs.core.next(seq__16367);
var x = first__16368;
var ys = seq__16367__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__16379 = cljs.core.seq(ys);
var chunk__16380 = null;
var count__16381 = (0);
var i__16382 = (0);
while(true){
if((i__16382 < count__16381)){
var next_line = chunk__16380.cljs$core$IIndexed$_nth$arity$2(null,i__16382);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__17671 = seq__16379;
var G__17672 = chunk__16380;
var G__17673 = count__16381;
var G__17674 = (i__16382 + (1));
seq__16379 = G__17671;
chunk__16380 = G__17672;
count__16381 = G__17673;
i__16382 = G__17674;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16379);
if(temp__5735__auto__){
var seq__16379__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16379__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16379__$1);
var G__17676 = cljs.core.chunk_rest(seq__16379__$1);
var G__17677 = c__4556__auto__;
var G__17678 = cljs.core.count(c__4556__auto__);
var G__17679 = (0);
seq__16379 = G__17676;
chunk__16380 = G__17677;
count__16381 = G__17678;
i__16382 = G__17679;
continue;
} else {
var next_line = cljs.core.first(seq__16379__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__17685 = cljs.core.next(seq__16379__$1);
var G__17686 = null;
var G__17687 = (0);
var G__17688 = (0);
seq__16379 = G__17685;
chunk__16380 = G__17686;
count__16381 = G__17687;
i__16382 = G__17688;
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

var seq__16434_17689 = cljs.core.seq(docs__$2);
var chunk__16435_17690 = null;
var count__16436_17691 = (0);
var i__16437_17692 = (0);
while(true){
if((i__16437_17692 < count__16436_17691)){
var e_17694 = chunk__16435_17690.cljs$core$IIndexed$_nth$arity$2(null,i__16437_17692);
if(cljs.core.truth_(e_17694)){
print_comment_lines(e_17694);
} else {
}


var G__17695 = seq__16434_17689;
var G__17696 = chunk__16435_17690;
var G__17697 = count__16436_17691;
var G__17698 = (i__16437_17692 + (1));
seq__16434_17689 = G__17695;
chunk__16435_17690 = G__17696;
count__16436_17691 = G__17697;
i__16437_17692 = G__17698;
continue;
} else {
var temp__5735__auto___17701 = cljs.core.seq(seq__16434_17689);
if(temp__5735__auto___17701){
var seq__16434_17702__$1 = temp__5735__auto___17701;
if(cljs.core.chunked_seq_QMARK_(seq__16434_17702__$1)){
var c__4556__auto___17703 = cljs.core.chunk_first(seq__16434_17702__$1);
var G__17704 = cljs.core.chunk_rest(seq__16434_17702__$1);
var G__17705 = c__4556__auto___17703;
var G__17706 = cljs.core.count(c__4556__auto___17703);
var G__17707 = (0);
seq__16434_17689 = G__17704;
chunk__16435_17690 = G__17705;
count__16436_17691 = G__17706;
i__16437_17692 = G__17707;
continue;
} else {
var e_17708 = cljs.core.first(seq__16434_17702__$1);
if(cljs.core.truth_(e_17708)){
print_comment_lines(e_17708);
} else {
}


var G__17709 = cljs.core.next(seq__16434_17702__$1);
var G__17710 = null;
var G__17711 = (0);
var G__17712 = (0);
seq__16434_17689 = G__17709;
chunk__16435_17690 = G__17710;
count__16436_17691 = G__17711;
i__16437_17692 = G__17712;
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
var and__4115__auto__ = cljs.core.some((function (p1__16490_SHARP_){
return goog.string.startsWith(p1__16490_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16554){
var map__16555 = p__16554;
var map__16555__$1 = (((((!((map__16555 == null))))?(((((map__16555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16555):map__16555);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16555__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16575){
var map__16576 = p__16575;
var map__16576__$1 = (((((!((map__16576 == null))))?(((((map__16576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16576):map__16576);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16576__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16576__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16576__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__16581_17729 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__16582_17730 = null;
var count__16583_17731 = (0);
var i__16584_17732 = (0);
while(true){
if((i__16584_17732 < count__16583_17731)){
var vec__16616_17733 = chunk__16582_17730.cljs$core$IIndexed$_nth$arity$2(null,i__16584_17732);
var i_17734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616_17733,(0),null);
var param_17735 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616_17733,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_17735);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__17740 = seq__16581_17729;
var G__17741 = chunk__16582_17730;
var G__17742 = count__16583_17731;
var G__17743 = (i__16584_17732 + (1));
seq__16581_17729 = G__17740;
chunk__16582_17730 = G__17741;
count__16583_17731 = G__17742;
i__16584_17732 = G__17743;
continue;
} else {
var temp__5735__auto___17748 = cljs.core.seq(seq__16581_17729);
if(temp__5735__auto___17748){
var seq__16581_17749__$1 = temp__5735__auto___17748;
if(cljs.core.chunked_seq_QMARK_(seq__16581_17749__$1)){
var c__4556__auto___17750 = cljs.core.chunk_first(seq__16581_17749__$1);
var G__17751 = cljs.core.chunk_rest(seq__16581_17749__$1);
var G__17752 = c__4556__auto___17750;
var G__17753 = cljs.core.count(c__4556__auto___17750);
var G__17754 = (0);
seq__16581_17729 = G__17751;
chunk__16582_17730 = G__17752;
count__16583_17731 = G__17753;
i__16584_17732 = G__17754;
continue;
} else {
var vec__16622_17755 = cljs.core.first(seq__16581_17749__$1);
var i_17756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16622_17755,(0),null);
var param_17757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16622_17755,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_17757);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__17758 = cljs.core.next(seq__16581_17749__$1);
var G__17759 = null;
var G__17760 = (0);
var G__17761 = (0);
seq__16581_17729 = G__17758;
chunk__16582_17730 = G__17759;
count__16583_17731 = G__17760;
i__16584_17732 = G__17761;
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

var seq__16635_17762 = cljs.core.seq(params);
var chunk__16636_17763 = null;
var count__16637_17764 = (0);
var i__16638_17765 = (0);
while(true){
if((i__16638_17765 < count__16637_17764)){
var param_17766 = chunk__16636_17763.cljs$core$IIndexed$_nth$arity$2(null,i__16638_17765);
cljs.compiler.emit(param_17766);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17766,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17767 = seq__16635_17762;
var G__17768 = chunk__16636_17763;
var G__17769 = count__16637_17764;
var G__17770 = (i__16638_17765 + (1));
seq__16635_17762 = G__17767;
chunk__16636_17763 = G__17768;
count__16637_17764 = G__17769;
i__16638_17765 = G__17770;
continue;
} else {
var temp__5735__auto___17771 = cljs.core.seq(seq__16635_17762);
if(temp__5735__auto___17771){
var seq__16635_17772__$1 = temp__5735__auto___17771;
if(cljs.core.chunked_seq_QMARK_(seq__16635_17772__$1)){
var c__4556__auto___17774 = cljs.core.chunk_first(seq__16635_17772__$1);
var G__17776 = cljs.core.chunk_rest(seq__16635_17772__$1);
var G__17777 = c__4556__auto___17774;
var G__17778 = cljs.core.count(c__4556__auto___17774);
var G__17779 = (0);
seq__16635_17762 = G__17776;
chunk__16636_17763 = G__17777;
count__16637_17764 = G__17778;
i__16638_17765 = G__17779;
continue;
} else {
var param_17780 = cljs.core.first(seq__16635_17772__$1);
cljs.compiler.emit(param_17780);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17780,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17785 = cljs.core.next(seq__16635_17772__$1);
var G__17786 = null;
var G__17787 = (0);
var G__17788 = (0);
seq__16635_17762 = G__17785;
chunk__16636_17763 = G__17786;
count__16637_17764 = G__17787;
i__16638_17765 = G__17788;
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

var seq__16651_17791 = cljs.core.seq(params);
var chunk__16652_17792 = null;
var count__16653_17793 = (0);
var i__16654_17794 = (0);
while(true){
if((i__16654_17794 < count__16653_17793)){
var param_17795 = chunk__16652_17792.cljs$core$IIndexed$_nth$arity$2(null,i__16654_17794);
cljs.compiler.emit(param_17795);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17795,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17796 = seq__16651_17791;
var G__17797 = chunk__16652_17792;
var G__17798 = count__16653_17793;
var G__17799 = (i__16654_17794 + (1));
seq__16651_17791 = G__17796;
chunk__16652_17792 = G__17797;
count__16653_17793 = G__17798;
i__16654_17794 = G__17799;
continue;
} else {
var temp__5735__auto___17800 = cljs.core.seq(seq__16651_17791);
if(temp__5735__auto___17800){
var seq__16651_17805__$1 = temp__5735__auto___17800;
if(cljs.core.chunked_seq_QMARK_(seq__16651_17805__$1)){
var c__4556__auto___17806 = cljs.core.chunk_first(seq__16651_17805__$1);
var G__17807 = cljs.core.chunk_rest(seq__16651_17805__$1);
var G__17808 = c__4556__auto___17806;
var G__17809 = cljs.core.count(c__4556__auto___17806);
var G__17810 = (0);
seq__16651_17791 = G__17807;
chunk__16652_17792 = G__17808;
count__16653_17793 = G__17809;
i__16654_17794 = G__17810;
continue;
} else {
var param_17811 = cljs.core.first(seq__16651_17805__$1);
cljs.compiler.emit(param_17811);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17811,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17812 = cljs.core.next(seq__16651_17805__$1);
var G__17813 = null;
var G__17814 = (0);
var G__17815 = (0);
seq__16651_17791 = G__17812;
chunk__16652_17792 = G__17813;
count__16653_17793 = G__17814;
i__16654_17794 = G__17815;
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
var seq__16676 = cljs.core.seq(params);
var chunk__16677 = null;
var count__16678 = (0);
var i__16679 = (0);
while(true){
if((i__16679 < count__16678)){
var param = chunk__16677.cljs$core$IIndexed$_nth$arity$2(null,i__16679);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17818 = seq__16676;
var G__17819 = chunk__16677;
var G__17820 = count__16678;
var G__17821 = (i__16679 + (1));
seq__16676 = G__17818;
chunk__16677 = G__17819;
count__16678 = G__17820;
i__16679 = G__17821;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16676);
if(temp__5735__auto__){
var seq__16676__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16676__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16676__$1);
var G__17822 = cljs.core.chunk_rest(seq__16676__$1);
var G__17823 = c__4556__auto__;
var G__17824 = cljs.core.count(c__4556__auto__);
var G__17825 = (0);
seq__16676 = G__17822;
chunk__16677 = G__17823;
count__16678 = G__17824;
i__16679 = G__17825;
continue;
} else {
var param = cljs.core.first(seq__16676__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17826 = cljs.core.next(seq__16676__$1);
var G__17827 = null;
var G__17828 = (0);
var G__17829 = (0);
seq__16676 = G__17826;
chunk__16677 = G__17827;
count__16678 = G__17828;
i__16679 = G__17829;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16695){
var map__16696 = p__16695;
var map__16696__$1 = (((((!((map__16696 == null))))?(((((map__16696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16696.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16696):map__16696);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16696__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16706){
var map__16707 = p__16706;
var map__16707__$1 = (((((!((map__16707 == null))))?(((((map__16707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16707):map__16707);
var f = map__16707__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16707__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_17840__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17841 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17840__$1);
var delegate_name_17842 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17841),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_17842," = function (");

var seq__16713_17845 = cljs.core.seq(params);
var chunk__16714_17846 = null;
var count__16715_17847 = (0);
var i__16716_17848 = (0);
while(true){
if((i__16716_17848 < count__16715_17847)){
var param_17849 = chunk__16714_17846.cljs$core$IIndexed$_nth$arity$2(null,i__16716_17848);
cljs.compiler.emit(param_17849);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17849,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17850 = seq__16713_17845;
var G__17851 = chunk__16714_17846;
var G__17852 = count__16715_17847;
var G__17853 = (i__16716_17848 + (1));
seq__16713_17845 = G__17850;
chunk__16714_17846 = G__17851;
count__16715_17847 = G__17852;
i__16716_17848 = G__17853;
continue;
} else {
var temp__5735__auto___17854 = cljs.core.seq(seq__16713_17845);
if(temp__5735__auto___17854){
var seq__16713_17855__$1 = temp__5735__auto___17854;
if(cljs.core.chunked_seq_QMARK_(seq__16713_17855__$1)){
var c__4556__auto___17856 = cljs.core.chunk_first(seq__16713_17855__$1);
var G__17857 = cljs.core.chunk_rest(seq__16713_17855__$1);
var G__17858 = c__4556__auto___17856;
var G__17859 = cljs.core.count(c__4556__auto___17856);
var G__17860 = (0);
seq__16713_17845 = G__17857;
chunk__16714_17846 = G__17858;
count__16715_17847 = G__17859;
i__16716_17848 = G__17860;
continue;
} else {
var param_17861 = cljs.core.first(seq__16713_17855__$1);
cljs.compiler.emit(param_17861);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17861,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17862 = cljs.core.next(seq__16713_17855__$1);
var G__17863 = null;
var G__17864 = (0);
var G__17865 = (0);
seq__16713_17845 = G__17862;
chunk__16714_17846 = G__17863;
count__16715_17847 = G__17864;
i__16716_17848 = G__17865;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_17841," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_17870 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_17870,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_17842,".call(this,");

var seq__16726_17871 = cljs.core.seq(params);
var chunk__16727_17872 = null;
var count__16728_17873 = (0);
var i__16729_17874 = (0);
while(true){
if((i__16729_17874 < count__16728_17873)){
var param_17875 = chunk__16727_17872.cljs$core$IIndexed$_nth$arity$2(null,i__16729_17874);
cljs.compiler.emit(param_17875);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17875,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17876 = seq__16726_17871;
var G__17877 = chunk__16727_17872;
var G__17878 = count__16728_17873;
var G__17879 = (i__16729_17874 + (1));
seq__16726_17871 = G__17876;
chunk__16727_17872 = G__17877;
count__16728_17873 = G__17878;
i__16729_17874 = G__17879;
continue;
} else {
var temp__5735__auto___17880 = cljs.core.seq(seq__16726_17871);
if(temp__5735__auto___17880){
var seq__16726_17881__$1 = temp__5735__auto___17880;
if(cljs.core.chunked_seq_QMARK_(seq__16726_17881__$1)){
var c__4556__auto___17882 = cljs.core.chunk_first(seq__16726_17881__$1);
var G__17883 = cljs.core.chunk_rest(seq__16726_17881__$1);
var G__17884 = c__4556__auto___17882;
var G__17885 = cljs.core.count(c__4556__auto___17882);
var G__17886 = (0);
seq__16726_17871 = G__17883;
chunk__16727_17872 = G__17884;
count__16728_17873 = G__17885;
i__16729_17874 = G__17886;
continue;
} else {
var param_17887 = cljs.core.first(seq__16726_17881__$1);
cljs.compiler.emit(param_17887);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17887,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17888 = cljs.core.next(seq__16726_17881__$1);
var G__17889 = null;
var G__17890 = (0);
var G__17891 = (0);
seq__16726_17871 = G__17888;
chunk__16727_17872 = G__17889;
count__16728_17873 = G__17890;
i__16729_17874 = G__17891;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17841,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_17841,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_17840__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17841,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_17842,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_17841,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16748){
var map__16750 = p__16748;
var map__16750__$1 = (((((!((map__16750 == null))))?(((((map__16750.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16750.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16750):map__16750);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16750__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16736_SHARP_){
var and__4115__auto__ = p1__16736_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16736_SHARP_));
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
var name_17924__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17925 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17924__$1);
var maxparams_17926 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_17927 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17925),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_17928 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__16737_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16737_SHARP_)));
}),cljs.core.seq(mmap_17927));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_17925," = null;");

var seq__16765_17931 = cljs.core.seq(ms_17928);
var chunk__16766_17932 = null;
var count__16767_17933 = (0);
var i__16768_17934 = (0);
while(true){
if((i__16768_17934 < count__16767_17933)){
var vec__16780_17935 = chunk__16766_17932.cljs$core$IIndexed$_nth$arity$2(null,i__16768_17934);
var n_17936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16780_17935,(0),null);
var meth_17937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16780_17935,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_17936," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17937))){
cljs.compiler.emit_variadic_fn_method(meth_17937);
} else {
cljs.compiler.emit_fn_method(meth_17937);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__17938 = seq__16765_17931;
var G__17939 = chunk__16766_17932;
var G__17940 = count__16767_17933;
var G__17941 = (i__16768_17934 + (1));
seq__16765_17931 = G__17938;
chunk__16766_17932 = G__17939;
count__16767_17933 = G__17940;
i__16768_17934 = G__17941;
continue;
} else {
var temp__5735__auto___17942 = cljs.core.seq(seq__16765_17931);
if(temp__5735__auto___17942){
var seq__16765_17943__$1 = temp__5735__auto___17942;
if(cljs.core.chunked_seq_QMARK_(seq__16765_17943__$1)){
var c__4556__auto___17944 = cljs.core.chunk_first(seq__16765_17943__$1);
var G__17945 = cljs.core.chunk_rest(seq__16765_17943__$1);
var G__17946 = c__4556__auto___17944;
var G__17947 = cljs.core.count(c__4556__auto___17944);
var G__17948 = (0);
seq__16765_17931 = G__17945;
chunk__16766_17932 = G__17946;
count__16767_17933 = G__17947;
i__16768_17934 = G__17948;
continue;
} else {
var vec__16785_17949 = cljs.core.first(seq__16765_17943__$1);
var n_17950 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16785_17949,(0),null);
var meth_17951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16785_17949,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_17950," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17951))){
cljs.compiler.emit_variadic_fn_method(meth_17951);
} else {
cljs.compiler.emit_fn_method(meth_17951);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__17952 = cljs.core.next(seq__16765_17943__$1);
var G__17953 = null;
var G__17954 = (0);
var G__17955 = (0);
seq__16765_17931 = G__17952;
chunk__16766_17932 = G__17953;
count__16767_17933 = G__17954;
i__16768_17934 = G__17955;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17925," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_17926),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_17926)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_17926));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__16788_17956 = cljs.core.seq(ms_17928);
var chunk__16789_17957 = null;
var count__16790_17958 = (0);
var i__16791_17959 = (0);
while(true){
if((i__16791_17959 < count__16790_17958)){
var vec__16807_17960 = chunk__16789_17957.cljs$core$IIndexed$_nth$arity$2(null,i__16791_17959);
var n_17961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807_17960,(0),null);
var meth_17962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16807_17960,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17962))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_17963 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_17963," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_17964 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_17963," = new cljs.core.IndexedSeq(",a_17964,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_17961,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17926)),(((cljs.core.count(maxparams_17926) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_17963,");"], 0));
} else {
var pcnt_17965 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17962));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_17965,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_17961,".call(this",(((pcnt_17965 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_17965,maxparams_17926)),null,(1),null)),(2),null))),");");
}


var G__17966 = seq__16788_17956;
var G__17967 = chunk__16789_17957;
var G__17968 = count__16790_17958;
var G__17969 = (i__16791_17959 + (1));
seq__16788_17956 = G__17966;
chunk__16789_17957 = G__17967;
count__16790_17958 = G__17968;
i__16791_17959 = G__17969;
continue;
} else {
var temp__5735__auto___17970 = cljs.core.seq(seq__16788_17956);
if(temp__5735__auto___17970){
var seq__16788_17972__$1 = temp__5735__auto___17970;
if(cljs.core.chunked_seq_QMARK_(seq__16788_17972__$1)){
var c__4556__auto___17973 = cljs.core.chunk_first(seq__16788_17972__$1);
var G__17974 = cljs.core.chunk_rest(seq__16788_17972__$1);
var G__17975 = c__4556__auto___17973;
var G__17976 = cljs.core.count(c__4556__auto___17973);
var G__17977 = (0);
seq__16788_17956 = G__17974;
chunk__16789_17957 = G__17975;
count__16790_17958 = G__17976;
i__16791_17959 = G__17977;
continue;
} else {
var vec__16815_17978 = cljs.core.first(seq__16788_17972__$1);
var n_17979 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16815_17978,(0),null);
var meth_17980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16815_17978,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17980))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_18003 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_18003," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_18004 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_18003," = new cljs.core.IndexedSeq(",a_18004,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_17979,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17926)),(((cljs.core.count(maxparams_17926) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_18003,");"], 0));
} else {
var pcnt_18005 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17980));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_18005,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_17979,".call(this",(((pcnt_18005 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_18005,maxparams_17926)),null,(1),null)),(2),null))),");");
}


var G__18006 = cljs.core.next(seq__16788_17972__$1);
var G__18007 = null;
var G__18008 = (0);
var G__18009 = (0);
seq__16788_17956 = G__18006;
chunk__16789_17957 = G__18007;
count__16790_17958 = G__18008;
i__16791_17959 = G__18009;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_18010 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_17928)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_18010,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17925,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17925,".cljs$lang$applyTo = ",cljs.core.some((function (p1__16742_SHARP_){
var vec__16820 = p1__16742_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16820,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16820,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_17928),".cljs$lang$applyTo;");
} else {
}

var seq__16823_18016 = cljs.core.seq(ms_17928);
var chunk__16824_18017 = null;
var count__16825_18018 = (0);
var i__16826_18019 = (0);
while(true){
if((i__16826_18019 < count__16825_18018)){
var vec__16840_18020 = chunk__16824_18017.cljs$core$IIndexed$_nth$arity$2(null,i__16826_18019);
var n_18021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840_18020,(0),null);
var meth_18022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16840_18020,(1),null);
var c_18023 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18022));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18022))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17925,".cljs$core$IFn$_invoke$arity$variadic = ",n_18021,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_17925,".cljs$core$IFn$_invoke$arity$",c_18023," = ",n_18021,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__18025 = seq__16823_18016;
var G__18026 = chunk__16824_18017;
var G__18027 = count__16825_18018;
var G__18028 = (i__16826_18019 + (1));
seq__16823_18016 = G__18025;
chunk__16824_18017 = G__18026;
count__16825_18018 = G__18027;
i__16826_18019 = G__18028;
continue;
} else {
var temp__5735__auto___18030 = cljs.core.seq(seq__16823_18016);
if(temp__5735__auto___18030){
var seq__16823_18032__$1 = temp__5735__auto___18030;
if(cljs.core.chunked_seq_QMARK_(seq__16823_18032__$1)){
var c__4556__auto___18033 = cljs.core.chunk_first(seq__16823_18032__$1);
var G__18034 = cljs.core.chunk_rest(seq__16823_18032__$1);
var G__18035 = c__4556__auto___18033;
var G__18036 = cljs.core.count(c__4556__auto___18033);
var G__18037 = (0);
seq__16823_18016 = G__18034;
chunk__16824_18017 = G__18035;
count__16825_18018 = G__18036;
i__16826_18019 = G__18037;
continue;
} else {
var vec__16846_18038 = cljs.core.first(seq__16823_18032__$1);
var n_18039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16846_18038,(0),null);
var meth_18040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16846_18038,(1),null);
var c_18043 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_18040));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_18040))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17925,".cljs$core$IFn$_invoke$arity$variadic = ",n_18039,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_17925,".cljs$core$IFn$_invoke$arity$",c_18043," = ",n_18039,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__18044 = cljs.core.next(seq__16823_18032__$1);
var G__18045 = null;
var G__18046 = (0);
var G__18047 = (0);
seq__16823_18016 = G__18044;
chunk__16824_18017 = G__18045;
count__16825_18018 = G__18046;
i__16826_18019 = G__18047;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_17925,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__16850){
var map__16851 = p__16850;
var map__16851__$1 = (((((!((map__16851 == null))))?(((((map__16851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16851):map__16851);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16851__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16851__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16851__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__16863_18057 = cljs.core.seq(statements);
var chunk__16864_18058 = null;
var count__16865_18059 = (0);
var i__16866_18060 = (0);
while(true){
if((i__16866_18060 < count__16865_18059)){
var s_18061 = chunk__16864_18058.cljs$core$IIndexed$_nth$arity$2(null,i__16866_18060);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_18061);


var G__18062 = seq__16863_18057;
var G__18063 = chunk__16864_18058;
var G__18064 = count__16865_18059;
var G__18065 = (i__16866_18060 + (1));
seq__16863_18057 = G__18062;
chunk__16864_18058 = G__18063;
count__16865_18059 = G__18064;
i__16866_18060 = G__18065;
continue;
} else {
var temp__5735__auto___18066 = cljs.core.seq(seq__16863_18057);
if(temp__5735__auto___18066){
var seq__16863_18071__$1 = temp__5735__auto___18066;
if(cljs.core.chunked_seq_QMARK_(seq__16863_18071__$1)){
var c__4556__auto___18072 = cljs.core.chunk_first(seq__16863_18071__$1);
var G__18074 = cljs.core.chunk_rest(seq__16863_18071__$1);
var G__18075 = c__4556__auto___18072;
var G__18076 = cljs.core.count(c__4556__auto___18072);
var G__18077 = (0);
seq__16863_18057 = G__18074;
chunk__16864_18058 = G__18075;
count__16865_18059 = G__18076;
i__16866_18060 = G__18077;
continue;
} else {
var s_18078 = cljs.core.first(seq__16863_18071__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_18078);


var G__18079 = cljs.core.next(seq__16863_18071__$1);
var G__18080 = null;
var G__18081 = (0);
var G__18082 = (0);
seq__16863_18057 = G__18079;
chunk__16864_18058 = G__18080;
count__16865_18059 = G__18081;
i__16866_18060 = G__18082;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16872){
var map__16873 = p__16872;
var map__16873__$1 = (((((!((map__16873 == null))))?(((((map__16873.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16873.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16873):map__16873);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16873__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16873__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16873__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16873__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16873__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16880,is_loop){
var map__16884 = p__16880;
var map__16884__$1 = (((((!((map__16884 == null))))?(((((map__16884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16884):map__16884);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16884__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16884__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16884__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__16892_18089 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__16893_18090 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__16893_18090);

try{var seq__16896_18091 = cljs.core.seq(bindings);
var chunk__16897_18092 = null;
var count__16898_18093 = (0);
var i__16899_18094 = (0);
while(true){
if((i__16899_18094 < count__16898_18093)){
var map__16906_18095 = chunk__16897_18092.cljs$core$IIndexed$_nth$arity$2(null,i__16899_18094);
var map__16906_18096__$1 = (((((!((map__16906_18095 == null))))?(((((map__16906_18095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16906_18095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16906_18095):map__16906_18095);
var binding_18097 = map__16906_18096__$1;
var init_18098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16906_18096__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_18097);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_18098,";");


var G__18105 = seq__16896_18091;
var G__18106 = chunk__16897_18092;
var G__18107 = count__16898_18093;
var G__18108 = (i__16899_18094 + (1));
seq__16896_18091 = G__18105;
chunk__16897_18092 = G__18106;
count__16898_18093 = G__18107;
i__16899_18094 = G__18108;
continue;
} else {
var temp__5735__auto___18115 = cljs.core.seq(seq__16896_18091);
if(temp__5735__auto___18115){
var seq__16896_18116__$1 = temp__5735__auto___18115;
if(cljs.core.chunked_seq_QMARK_(seq__16896_18116__$1)){
var c__4556__auto___18118 = cljs.core.chunk_first(seq__16896_18116__$1);
var G__18119 = cljs.core.chunk_rest(seq__16896_18116__$1);
var G__18120 = c__4556__auto___18118;
var G__18121 = cljs.core.count(c__4556__auto___18118);
var G__18122 = (0);
seq__16896_18091 = G__18119;
chunk__16897_18092 = G__18120;
count__16898_18093 = G__18121;
i__16899_18094 = G__18122;
continue;
} else {
var map__16908_18123 = cljs.core.first(seq__16896_18116__$1);
var map__16908_18124__$1 = (((((!((map__16908_18123 == null))))?(((((map__16908_18123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16908_18123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16908_18123):map__16908_18123);
var binding_18125 = map__16908_18124__$1;
var init_18126 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16908_18124__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_18125);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_18126,";");


var G__18127 = cljs.core.next(seq__16896_18116__$1);
var G__18128 = null;
var G__18129 = (0);
var G__18130 = (0);
seq__16896_18091 = G__18127;
chunk__16897_18092 = G__18128;
count__16898_18093 = G__18129;
i__16899_18094 = G__18130;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__16892_18089);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16917){
var map__16918 = p__16917;
var map__16918__$1 = (((((!((map__16918 == null))))?(((((map__16918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16918):map__16918);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16918__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16918__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16918__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___18160 = cljs.core.count(exprs);
var i_18162 = (0);
while(true){
if((i_18162 < n__4613__auto___18160)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18162) : temps.call(null,i_18162))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_18162) : exprs.call(null,i_18162)),";");

var G__18169 = (i_18162 + (1));
i_18162 = G__18169;
continue;
} else {
}
break;
}

var n__4613__auto___18171 = cljs.core.count(exprs);
var i_18172 = (0);
while(true){
if((i_18172 < n__4613__auto___18171)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_18172) : params.call(null,i_18172)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_18172) : temps.call(null,i_18172)),";");

var G__18178 = (i_18172 + (1));
i_18172 = G__18178;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16922){
var map__16923 = p__16922;
var map__16923__$1 = (((((!((map__16923 == null))))?(((((map__16923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16923):map__16923);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16923__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16923__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16923__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__16966_18186 = cljs.core.seq(bindings);
var chunk__16967_18187 = null;
var count__16968_18188 = (0);
var i__16969_18189 = (0);
while(true){
if((i__16969_18189 < count__16968_18188)){
var map__16995_18190 = chunk__16967_18187.cljs$core$IIndexed$_nth$arity$2(null,i__16969_18189);
var map__16995_18191__$1 = (((((!((map__16995_18190 == null))))?(((((map__16995_18190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16995_18190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16995_18190):map__16995_18190);
var binding_18192 = map__16995_18191__$1;
var init_18193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16995_18191__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18192)," = ",init_18193,";");


var G__18198 = seq__16966_18186;
var G__18199 = chunk__16967_18187;
var G__18200 = count__16968_18188;
var G__18201 = (i__16969_18189 + (1));
seq__16966_18186 = G__18198;
chunk__16967_18187 = G__18199;
count__16968_18188 = G__18200;
i__16969_18189 = G__18201;
continue;
} else {
var temp__5735__auto___18202 = cljs.core.seq(seq__16966_18186);
if(temp__5735__auto___18202){
var seq__16966_18203__$1 = temp__5735__auto___18202;
if(cljs.core.chunked_seq_QMARK_(seq__16966_18203__$1)){
var c__4556__auto___18204 = cljs.core.chunk_first(seq__16966_18203__$1);
var G__18205 = cljs.core.chunk_rest(seq__16966_18203__$1);
var G__18206 = c__4556__auto___18204;
var G__18207 = cljs.core.count(c__4556__auto___18204);
var G__18208 = (0);
seq__16966_18186 = G__18205;
chunk__16967_18187 = G__18206;
count__16968_18188 = G__18207;
i__16969_18189 = G__18208;
continue;
} else {
var map__16997_18209 = cljs.core.first(seq__16966_18203__$1);
var map__16997_18210__$1 = (((((!((map__16997_18209 == null))))?(((((map__16997_18209.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16997_18209.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16997_18209):map__16997_18209);
var binding_18211 = map__16997_18210__$1;
var init_18212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16997_18210__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_18211)," = ",init_18212,";");


var G__18230 = cljs.core.next(seq__16966_18203__$1);
var G__18231 = null;
var G__18232 = (0);
var G__18233 = (0);
seq__16966_18186 = G__18230;
chunk__16967_18187 = G__18231;
count__16968_18188 = G__18232;
i__16969_18189 = G__18233;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__17017){
var map__17018 = p__17017;
var map__17018__$1 = (((((!((map__17018 == null))))?(((((map__17018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17018):map__17018);
var expr = map__17018__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__17041 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__17041.cljs$core$IFn$_invoke$arity$1 ? fexpr__17041.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17041.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__17045 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__17045.cljs$core$IFn$_invoke$arity$1 ? fexpr__17045.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__17045.call(null,first_arg_tag));
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
var vec__17020 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__17015_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17015_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__17016_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17016_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17020,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17020,(1),null);
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
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
var pimpl_18305 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_18305,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_18318 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_18318,args)),(((mfa_18318 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_18318,args)),"], 0))"], 0));
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
var G__17058 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__17057 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__17057.cljs$core$IFn$_invoke$arity$1 ? fexpr__17057.cljs$core$IFn$_invoke$arity$1(G__17058) : fexpr__17057.call(null,G__17058));
} else {
return and__4115__auto__;
}
})())){
var fprop_18325 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_18325," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_18325,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_18325," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_18325,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__17059){
var map__17060 = p__17059;
var map__17060__$1 = (((((!((map__17060 == null))))?(((((map__17060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17060):map__17060);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17060__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__17062){
var map__17063 = p__17062;
var map__17063__$1 = (((((!((map__17063 == null))))?(((((map__17063.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17063.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17063):map__17063);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17063__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17063__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17063__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
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
var map__17066 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__17066__$1 = (((((!((map__17066 == null))))?(((((map__17066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17066):map__17066);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17066__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17066__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__17067 = options;
var map__17067__$1 = (((((!((map__17067 == null))))?(((((map__17067.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17067.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17067):map__17067);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17067__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__17068 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__17073 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__17073__$1 = (((((!((map__17073 == null))))?(((((map__17073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17073.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17073):map__17073);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17073__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17073__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17068,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__17075_18343 = cljs.core.seq(libs_to_load);
var chunk__17076_18344 = null;
var count__17077_18345 = (0);
var i__17078_18346 = (0);
while(true){
if((i__17078_18346 < count__17077_18345)){
var lib_18347 = chunk__17076_18344.cljs$core$IIndexed$_nth$arity$2(null,i__17078_18346);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_18347)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18347),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18347),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18347),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18347),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_18347,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18347),"');");
}

}
}
}


var G__18354 = seq__17075_18343;
var G__18355 = chunk__17076_18344;
var G__18356 = count__17077_18345;
var G__18357 = (i__17078_18346 + (1));
seq__17075_18343 = G__18354;
chunk__17076_18344 = G__18355;
count__17077_18345 = G__18356;
i__17078_18346 = G__18357;
continue;
} else {
var temp__5735__auto___18358 = cljs.core.seq(seq__17075_18343);
if(temp__5735__auto___18358){
var seq__17075_18359__$1 = temp__5735__auto___18358;
if(cljs.core.chunked_seq_QMARK_(seq__17075_18359__$1)){
var c__4556__auto___18360 = cljs.core.chunk_first(seq__17075_18359__$1);
var G__18361 = cljs.core.chunk_rest(seq__17075_18359__$1);
var G__18362 = c__4556__auto___18360;
var G__18363 = cljs.core.count(c__4556__auto___18360);
var G__18364 = (0);
seq__17075_18343 = G__18361;
chunk__17076_18344 = G__18362;
count__17077_18345 = G__18363;
i__17078_18346 = G__18364;
continue;
} else {
var lib_18365 = cljs.core.first(seq__17075_18359__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_18365)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18365),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18365),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_18365),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18365),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_18365,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_18365),"');");
}

}
}
}


var G__18374 = cljs.core.next(seq__17075_18359__$1);
var G__18375 = null;
var G__18376 = (0);
var G__18377 = (0);
seq__17075_18343 = G__18374;
chunk__17076_18344 = G__18375;
count__17077_18345 = G__18376;
i__17078_18346 = G__18377;
continue;
}
} else {
}
}
break;
}

var seq__17081_18378 = cljs.core.seq(node_libs);
var chunk__17082_18379 = null;
var count__17083_18380 = (0);
var i__17084_18381 = (0);
while(true){
if((i__17084_18381 < count__17083_18380)){
var lib_18386 = chunk__17082_18379.cljs$core$IIndexed$_nth$arity$2(null,i__17084_18381);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_18386)," = require('",lib_18386,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__18395 = seq__17081_18378;
var G__18396 = chunk__17082_18379;
var G__18397 = count__17083_18380;
var G__18398 = (i__17084_18381 + (1));
seq__17081_18378 = G__18395;
chunk__17082_18379 = G__18396;
count__17083_18380 = G__18397;
i__17084_18381 = G__18398;
continue;
} else {
var temp__5735__auto___18399 = cljs.core.seq(seq__17081_18378);
if(temp__5735__auto___18399){
var seq__17081_18400__$1 = temp__5735__auto___18399;
if(cljs.core.chunked_seq_QMARK_(seq__17081_18400__$1)){
var c__4556__auto___18401 = cljs.core.chunk_first(seq__17081_18400__$1);
var G__18403 = cljs.core.chunk_rest(seq__17081_18400__$1);
var G__18404 = c__4556__auto___18401;
var G__18405 = cljs.core.count(c__4556__auto___18401);
var G__18406 = (0);
seq__17081_18378 = G__18403;
chunk__17082_18379 = G__18404;
count__17083_18380 = G__18405;
i__17084_18381 = G__18406;
continue;
} else {
var lib_18408 = cljs.core.first(seq__17081_18400__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_18408)," = require('",lib_18408,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__18410 = cljs.core.next(seq__17081_18400__$1);
var G__18411 = null;
var G__18412 = (0);
var G__18413 = (0);
seq__17081_18378 = G__18410;
chunk__17082_18379 = G__18411;
count__17083_18380 = G__18412;
i__17084_18381 = G__18413;
continue;
}
} else {
}
}
break;
}

var seq__17086_18414 = cljs.core.seq(global_exports_libs);
var chunk__17087_18415 = null;
var count__17088_18416 = (0);
var i__17089_18417 = (0);
while(true){
if((i__17089_18417 < count__17088_18416)){
var lib_18426 = chunk__17087_18415.cljs$core$IIndexed$_nth$arity$2(null,i__17089_18417);
var map__17094_18427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_18426));
var map__17094_18428__$1 = (((((!((map__17094_18427 == null))))?(((((map__17094_18427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17094_18427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17094_18427):map__17094_18427);
var global_exports_18429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17094_18428__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_18429,lib_18426);


var G__18431 = seq__17086_18414;
var G__18432 = chunk__17087_18415;
var G__18433 = count__17088_18416;
var G__18434 = (i__17089_18417 + (1));
seq__17086_18414 = G__18431;
chunk__17087_18415 = G__18432;
count__17088_18416 = G__18433;
i__17089_18417 = G__18434;
continue;
} else {
var temp__5735__auto___18437 = cljs.core.seq(seq__17086_18414);
if(temp__5735__auto___18437){
var seq__17086_18438__$1 = temp__5735__auto___18437;
if(cljs.core.chunked_seq_QMARK_(seq__17086_18438__$1)){
var c__4556__auto___18439 = cljs.core.chunk_first(seq__17086_18438__$1);
var G__18440 = cljs.core.chunk_rest(seq__17086_18438__$1);
var G__18441 = c__4556__auto___18439;
var G__18442 = cljs.core.count(c__4556__auto___18439);
var G__18443 = (0);
seq__17086_18414 = G__18440;
chunk__17087_18415 = G__18441;
count__17088_18416 = G__18442;
i__17089_18417 = G__18443;
continue;
} else {
var lib_18444 = cljs.core.first(seq__17086_18438__$1);
var map__17096_18445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_18444));
var map__17096_18446__$1 = (((((!((map__17096_18445 == null))))?(((((map__17096_18445.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17096_18445.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17096_18445):map__17096_18445);
var global_exports_18447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17096_18446__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_18447,lib_18444);


var G__18448 = cljs.core.next(seq__17086_18438__$1);
var G__18449 = null;
var G__18450 = (0);
var G__18451 = (0);
seq__17086_18414 = G__18448;
chunk__17087_18415 = G__18449;
count__17088_18416 = G__18450;
i__17089_18417 = G__18451;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__17098){
var map__17099 = p__17098;
var map__17099__$1 = (((((!((map__17099 == null))))?(((((map__17099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17099.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17099):map__17099);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17099__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__17102){
var map__17105 = p__17102;
var map__17105__$1 = (((((!((map__17105 == null))))?(((((map__17105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17105):map__17105);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17105__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__17110){
var map__17111 = p__17110;
var map__17111__$1 = (((((!((map__17111 == null))))?(((((map__17111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17111):map__17111);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17111__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17111__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17111__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17111__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17111__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17113_18467 = cljs.core.seq(protocols);
var chunk__17114_18468 = null;
var count__17115_18469 = (0);
var i__17116_18470 = (0);
while(true){
if((i__17116_18470 < count__17115_18469)){
var protocol_18473 = chunk__17114_18468.cljs$core$IIndexed$_nth$arity$2(null,i__17116_18470);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18473)),"}");


var G__18479 = seq__17113_18467;
var G__18480 = chunk__17114_18468;
var G__18481 = count__17115_18469;
var G__18482 = (i__17116_18470 + (1));
seq__17113_18467 = G__18479;
chunk__17114_18468 = G__18480;
count__17115_18469 = G__18481;
i__17116_18470 = G__18482;
continue;
} else {
var temp__5735__auto___18483 = cljs.core.seq(seq__17113_18467);
if(temp__5735__auto___18483){
var seq__17113_18484__$1 = temp__5735__auto___18483;
if(cljs.core.chunked_seq_QMARK_(seq__17113_18484__$1)){
var c__4556__auto___18485 = cljs.core.chunk_first(seq__17113_18484__$1);
var G__18487 = cljs.core.chunk_rest(seq__17113_18484__$1);
var G__18488 = c__4556__auto___18485;
var G__18489 = cljs.core.count(c__4556__auto___18485);
var G__18490 = (0);
seq__17113_18467 = G__18487;
chunk__17114_18468 = G__18488;
count__17115_18469 = G__18489;
i__17116_18470 = G__18490;
continue;
} else {
var protocol_18491 = cljs.core.first(seq__17113_18484__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18491)),"}");


var G__18492 = cljs.core.next(seq__17113_18484__$1);
var G__18493 = null;
var G__18494 = (0);
var G__18495 = (0);
seq__17113_18467 = G__18492;
chunk__17114_18468 = G__18493;
count__17115_18469 = G__18494;
i__17116_18470 = G__18495;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17117_18497 = cljs.core.seq(fields__$1);
var chunk__17118_18498 = null;
var count__17119_18499 = (0);
var i__17120_18500 = (0);
while(true){
if((i__17120_18500 < count__17119_18499)){
var fld_18502 = chunk__17118_18498.cljs$core$IIndexed$_nth$arity$2(null,i__17120_18500);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_18502," = ",fld_18502,";");


var G__18503 = seq__17117_18497;
var G__18504 = chunk__17118_18498;
var G__18505 = count__17119_18499;
var G__18506 = (i__17120_18500 + (1));
seq__17117_18497 = G__18503;
chunk__17118_18498 = G__18504;
count__17119_18499 = G__18505;
i__17120_18500 = G__18506;
continue;
} else {
var temp__5735__auto___18507 = cljs.core.seq(seq__17117_18497);
if(temp__5735__auto___18507){
var seq__17117_18508__$1 = temp__5735__auto___18507;
if(cljs.core.chunked_seq_QMARK_(seq__17117_18508__$1)){
var c__4556__auto___18509 = cljs.core.chunk_first(seq__17117_18508__$1);
var G__18510 = cljs.core.chunk_rest(seq__17117_18508__$1);
var G__18511 = c__4556__auto___18509;
var G__18512 = cljs.core.count(c__4556__auto___18509);
var G__18513 = (0);
seq__17117_18497 = G__18510;
chunk__17118_18498 = G__18511;
count__17119_18499 = G__18512;
i__17120_18500 = G__18513;
continue;
} else {
var fld_18515 = cljs.core.first(seq__17117_18508__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_18515," = ",fld_18515,";");


var G__18518 = cljs.core.next(seq__17117_18508__$1);
var G__18519 = null;
var G__18520 = (0);
var G__18521 = (0);
seq__17117_18497 = G__18518;
chunk__17118_18498 = G__18519;
count__17119_18499 = G__18520;
i__17120_18500 = G__18521;
continue;
}
} else {
}
}
break;
}

var seq__17122_18524 = cljs.core.seq(pmasks);
var chunk__17123_18525 = null;
var count__17124_18526 = (0);
var i__17125_18527 = (0);
while(true){
if((i__17125_18527 < count__17124_18526)){
var vec__17132_18533 = chunk__17123_18525.cljs$core$IIndexed$_nth$arity$2(null,i__17125_18527);
var pno_18534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132_18533,(0),null);
var pmask_18535 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17132_18533,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_18534,"$ = ",pmask_18535,";");


var G__18537 = seq__17122_18524;
var G__18538 = chunk__17123_18525;
var G__18539 = count__17124_18526;
var G__18540 = (i__17125_18527 + (1));
seq__17122_18524 = G__18537;
chunk__17123_18525 = G__18538;
count__17124_18526 = G__18539;
i__17125_18527 = G__18540;
continue;
} else {
var temp__5735__auto___18541 = cljs.core.seq(seq__17122_18524);
if(temp__5735__auto___18541){
var seq__17122_18542__$1 = temp__5735__auto___18541;
if(cljs.core.chunked_seq_QMARK_(seq__17122_18542__$1)){
var c__4556__auto___18543 = cljs.core.chunk_first(seq__17122_18542__$1);
var G__18545 = cljs.core.chunk_rest(seq__17122_18542__$1);
var G__18546 = c__4556__auto___18543;
var G__18547 = cljs.core.count(c__4556__auto___18543);
var G__18548 = (0);
seq__17122_18524 = G__18545;
chunk__17123_18525 = G__18546;
count__17124_18526 = G__18547;
i__17125_18527 = G__18548;
continue;
} else {
var vec__17135_18549 = cljs.core.first(seq__17122_18542__$1);
var pno_18550 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17135_18549,(0),null);
var pmask_18551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17135_18549,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_18550,"$ = ",pmask_18551,";");


var G__18554 = cljs.core.next(seq__17122_18542__$1);
var G__18555 = null;
var G__18556 = (0);
var G__18557 = (0);
seq__17122_18524 = G__18554;
chunk__17123_18525 = G__18555;
count__17124_18526 = G__18556;
i__17125_18527 = G__18557;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__17138){
var map__17139 = p__17138;
var map__17139__$1 = (((((!((map__17139 == null))))?(((((map__17139.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17139.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17139):map__17139);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17139__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17141_18567 = cljs.core.seq(protocols);
var chunk__17142_18568 = null;
var count__17143_18569 = (0);
var i__17144_18570 = (0);
while(true){
if((i__17144_18570 < count__17143_18569)){
var protocol_18571 = chunk__17142_18568.cljs$core$IIndexed$_nth$arity$2(null,i__17144_18570);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18571)),"}");


var G__18573 = seq__17141_18567;
var G__18574 = chunk__17142_18568;
var G__18575 = count__17143_18569;
var G__18576 = (i__17144_18570 + (1));
seq__17141_18567 = G__18573;
chunk__17142_18568 = G__18574;
count__17143_18569 = G__18575;
i__17144_18570 = G__18576;
continue;
} else {
var temp__5735__auto___18588 = cljs.core.seq(seq__17141_18567);
if(temp__5735__auto___18588){
var seq__17141_18591__$1 = temp__5735__auto___18588;
if(cljs.core.chunked_seq_QMARK_(seq__17141_18591__$1)){
var c__4556__auto___18593 = cljs.core.chunk_first(seq__17141_18591__$1);
var G__18594 = cljs.core.chunk_rest(seq__17141_18591__$1);
var G__18595 = c__4556__auto___18593;
var G__18596 = cljs.core.count(c__4556__auto___18593);
var G__18597 = (0);
seq__17141_18567 = G__18594;
chunk__17142_18568 = G__18595;
count__17143_18569 = G__18596;
i__17144_18570 = G__18597;
continue;
} else {
var protocol_18598 = cljs.core.first(seq__17141_18591__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18598)),"}");


var G__18599 = cljs.core.next(seq__17141_18591__$1);
var G__18600 = null;
var G__18601 = (0);
var G__18602 = (0);
seq__17141_18567 = G__18599;
chunk__17142_18568 = G__18600;
count__17143_18569 = G__18601;
i__17144_18570 = G__18602;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17153_18603 = cljs.core.seq(fields__$1);
var chunk__17154_18604 = null;
var count__17155_18605 = (0);
var i__17156_18606 = (0);
while(true){
if((i__17156_18606 < count__17155_18605)){
var fld_18607 = chunk__17154_18604.cljs$core$IIndexed$_nth$arity$2(null,i__17156_18606);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_18607," = ",fld_18607,";");


var G__18608 = seq__17153_18603;
var G__18609 = chunk__17154_18604;
var G__18610 = count__17155_18605;
var G__18611 = (i__17156_18606 + (1));
seq__17153_18603 = G__18608;
chunk__17154_18604 = G__18609;
count__17155_18605 = G__18610;
i__17156_18606 = G__18611;
continue;
} else {
var temp__5735__auto___18613 = cljs.core.seq(seq__17153_18603);
if(temp__5735__auto___18613){
var seq__17153_18614__$1 = temp__5735__auto___18613;
if(cljs.core.chunked_seq_QMARK_(seq__17153_18614__$1)){
var c__4556__auto___18615 = cljs.core.chunk_first(seq__17153_18614__$1);
var G__18616 = cljs.core.chunk_rest(seq__17153_18614__$1);
var G__18617 = c__4556__auto___18615;
var G__18618 = cljs.core.count(c__4556__auto___18615);
var G__18619 = (0);
seq__17153_18603 = G__18616;
chunk__17154_18604 = G__18617;
count__17155_18605 = G__18618;
i__17156_18606 = G__18619;
continue;
} else {
var fld_18620 = cljs.core.first(seq__17153_18614__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_18620," = ",fld_18620,";");


var G__18621 = cljs.core.next(seq__17153_18614__$1);
var G__18622 = null;
var G__18623 = (0);
var G__18624 = (0);
seq__17153_18603 = G__18621;
chunk__17154_18604 = G__18622;
count__17155_18605 = G__18623;
i__17156_18606 = G__18624;
continue;
}
} else {
}
}
break;
}

var seq__17157_18625 = cljs.core.seq(pmasks);
var chunk__17158_18626 = null;
var count__17159_18627 = (0);
var i__17160_18628 = (0);
while(true){
if((i__17160_18628 < count__17159_18627)){
var vec__17167_18631 = chunk__17158_18626.cljs$core$IIndexed$_nth$arity$2(null,i__17160_18628);
var pno_18632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17167_18631,(0),null);
var pmask_18633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17167_18631,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_18632,"$ = ",pmask_18633,";");


var G__18635 = seq__17157_18625;
var G__18636 = chunk__17158_18626;
var G__18637 = count__17159_18627;
var G__18638 = (i__17160_18628 + (1));
seq__17157_18625 = G__18635;
chunk__17158_18626 = G__18636;
count__17159_18627 = G__18637;
i__17160_18628 = G__18638;
continue;
} else {
var temp__5735__auto___18641 = cljs.core.seq(seq__17157_18625);
if(temp__5735__auto___18641){
var seq__17157_18642__$1 = temp__5735__auto___18641;
if(cljs.core.chunked_seq_QMARK_(seq__17157_18642__$1)){
var c__4556__auto___18644 = cljs.core.chunk_first(seq__17157_18642__$1);
var G__18645 = cljs.core.chunk_rest(seq__17157_18642__$1);
var G__18646 = c__4556__auto___18644;
var G__18647 = cljs.core.count(c__4556__auto___18644);
var G__18648 = (0);
seq__17157_18625 = G__18645;
chunk__17158_18626 = G__18646;
count__17159_18627 = G__18647;
i__17160_18628 = G__18648;
continue;
} else {
var vec__17170_18650 = cljs.core.first(seq__17157_18642__$1);
var pno_18651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17170_18650,(0),null);
var pmask_18652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17170_18650,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_18651,"$ = ",pmask_18652,";");


var G__18660 = cljs.core.next(seq__17157_18642__$1);
var G__18661 = null;
var G__18662 = (0);
var G__18663 = (0);
seq__17157_18625 = G__18660;
chunk__17158_18626 = G__18661;
count__17159_18627 = G__18662;
i__17160_18628 = G__18663;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__17173){
var map__17174 = p__17173;
var map__17174__$1 = (((((!((map__17174 == null))))?(((((map__17174.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17174.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17174):map__17174);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17174__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17174__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17174__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17174__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17174__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__17176){
var map__17177 = p__17176;
var map__17177__$1 = (((((!((map__17177 == null))))?(((((map__17177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17177):map__17177);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17177__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__15264__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15264__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__17190 = cljs.core.seq(table);
var chunk__17191 = null;
var count__17192 = (0);
var i__17193 = (0);
while(true){
if((i__17193 < count__17192)){
var vec__17200 = chunk__17191.cljs$core$IIndexed$_nth$arity$2(null,i__17193);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17200,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17200,(1),null);
var ns_18678 = cljs.core.namespace(sym);
var name_18679 = cljs.core.name(sym);
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


var G__18684 = seq__17190;
var G__18685 = chunk__17191;
var G__18686 = count__17192;
var G__18687 = (i__17193 + (1));
seq__17190 = G__18684;
chunk__17191 = G__18685;
count__17192 = G__18686;
i__17193 = G__18687;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__17190);
if(temp__5735__auto__){
var seq__17190__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17190__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__17190__$1);
var G__18700 = cljs.core.chunk_rest(seq__17190__$1);
var G__18701 = c__4556__auto__;
var G__18702 = cljs.core.count(c__4556__auto__);
var G__18703 = (0);
seq__17190 = G__18700;
chunk__17191 = G__18701;
count__17192 = G__18702;
i__17193 = G__18703;
continue;
} else {
var vec__17203 = cljs.core.first(seq__17190__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17203,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17203,(1),null);
var ns_18705 = cljs.core.namespace(sym);
var name_18706 = cljs.core.name(sym);
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


var G__18707 = cljs.core.next(seq__17190__$1);
var G__18708 = null;
var G__18709 = (0);
var G__18710 = (0);
seq__17190 = G__18707;
chunk__17191 = G__18708;
count__17192 = G__18709;
i__17193 = G__18710;
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
var G__17207 = arguments.length;
switch (G__17207) {
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
var k_18732 = cljs.core.first(ks);
var vec__17208_18733 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_18732);
var top_18734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17208_18733,(0),null);
var prefix_SINGLEQUOTE__18735 = vec__17208_18733;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_18732)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__18735) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_18734)) || (cljs.core.contains_QMARK_(known_externs,top_18734)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18735)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_18734);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18735)),";");
}
} else {
}

var m_18736 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_18732);
if(cljs.core.empty_QMARK_(m_18736)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__18735,m_18736,top_level,known_externs);
}

var G__18741 = cljs.core.next(ks);
ks = G__18741;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
