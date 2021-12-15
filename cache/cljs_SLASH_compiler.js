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
var map__15621 = s;
var map__15621__$1 = (((((!((map__15621 == null))))?(((((map__15621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15621):map__15621);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15621__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15621__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15637 = info;
var map__15638 = G__15637;
var map__15638__$1 = (((((!((map__15638 == null))))?(((((map__15638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15638):map__15638);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15638__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15637__$1 = G__15637;
while(true){
var d__$2 = d__$1;
var map__15649 = G__15637__$1;
var map__15649__$1 = (((((!((map__15649 == null))))?(((((map__15649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15649):map__15649);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15649__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__18111 = (d__$2 + (1));
var G__18112 = shadow__$1;
d__$1 = G__18111;
G__15637__$1 = G__18112;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15697){
var map__15698 = p__15697;
var map__15698__$1 = (((((!((map__15698 == null))))?(((((map__15698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15698.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15698):map__15698);
var name_var = map__15698__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15723 = info;
var map__15723__$1 = (((((!((map__15723 == null))))?(((((map__15723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15723.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15723):map__15723);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15723__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15723__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__15737 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__15737) : cljs.compiler.munge.call(null,G__15737));
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
var G__15768 = arguments.length;
switch (G__15768) {
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
var ms = (function (){var fexpr__15803 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11501,11501,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__15803.cljs$core$IFn$_invoke$arity$1 ? fexpr__15803.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__15803.call(null,ss__$3));
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
var G__15811 = cp;
switch (G__15811) {
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
var seq__15831_18153 = cljs.core.seq(s);
var chunk__15832_18154 = null;
var count__15833_18155 = (0);
var i__15834_18156 = (0);
while(true){
if((i__15834_18156 < count__15833_18155)){
var c_18157 = chunk__15832_18154.cljs$core$IIndexed$_nth$arity$2(null,i__15834_18156);
sb.append(cljs.compiler.escape_char(c_18157));


var G__18158 = seq__15831_18153;
var G__18159 = chunk__15832_18154;
var G__18160 = count__15833_18155;
var G__18161 = (i__15834_18156 + (1));
seq__15831_18153 = G__18158;
chunk__15832_18154 = G__18159;
count__15833_18155 = G__18160;
i__15834_18156 = G__18161;
continue;
} else {
var temp__5735__auto___18162 = cljs.core.seq(seq__15831_18153);
if(temp__5735__auto___18162){
var seq__15831_18163__$1 = temp__5735__auto___18162;
if(cljs.core.chunked_seq_QMARK_(seq__15831_18163__$1)){
var c__4556__auto___18164 = cljs.core.chunk_first(seq__15831_18163__$1);
var G__18165 = cljs.core.chunk_rest(seq__15831_18163__$1);
var G__18166 = c__4556__auto___18164;
var G__18167 = cljs.core.count(c__4556__auto___18164);
var G__18168 = (0);
seq__15831_18153 = G__18165;
chunk__15832_18154 = G__18166;
count__15833_18155 = G__18167;
i__15834_18156 = G__18168;
continue;
} else {
var c_18172 = cljs.core.first(seq__15831_18163__$1);
sb.append(cljs.compiler.escape_char(c_18172));


var G__18176 = cljs.core.next(seq__15831_18163__$1);
var G__18177 = null;
var G__18178 = (0);
var G__18179 = (0);
seq__15831_18153 = G__18176;
chunk__15832_18154 = G__18177;
count__15833_18155 = G__18178;
i__15834_18156 = G__18179;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15890 = cljs.core.get_global_hierarchy;
return (fexpr__15890.cljs$core$IFn$_invoke$arity$0 ? fexpr__15890.cljs$core$IFn$_invoke$arity$0() : fexpr__15890.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15892_18184 = ast;
var map__15892_18185__$1 = (((((!((map__15892_18184 == null))))?(((((map__15892_18184.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15892_18184.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15892_18184):map__15892_18184);
var env_18186 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15892_18185__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_18186))){
var map__15894_18194 = env_18186;
var map__15894_18195__$1 = (((((!((map__15894_18194 == null))))?(((((map__15894_18194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15894_18194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15894_18194):map__15894_18194);
var line_18196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15894_18195__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_18197 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15894_18195__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__15913 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__15915 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__15914 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__15914.cljs$core$IFn$_invoke$arity$1 ? fexpr__15914.cljs$core$IFn$_invoke$arity$1(G__15915) : fexpr__15914.call(null,G__15915));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15913,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15913;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_18196 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_18197)?(column_18197 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__15952 = arguments.length;
switch (G__15952) {
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
var len__4736__auto___18210 = arguments.length;
var i__4737__auto___18211 = (0);
while(true){
if((i__4737__auto___18211 < len__4736__auto___18210)){
args_arr__4757__auto__.push((arguments[i__4737__auto___18211]));

var G__18212 = (i__4737__auto___18211 + (1));
i__4737__auto___18211 = G__18212;
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
var s_18217 = (function (){var G__15972 = a;
if((!(typeof a === 'string'))){
return G__15972.toString();
} else {
return G__15972;
}
})();
var temp__5739__auto___18218 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5739__auto___18218 == null)){
} else {
var sm_data_18220 = temp__5739__auto___18218;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_18220,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__15916_SHARP_){
return (p1__15916_SHARP_ + s_18217.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_18217], 0));

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

var seq__16005 = cljs.core.seq(xs);
var chunk__16006 = null;
var count__16007 = (0);
var i__16008 = (0);
while(true){
if((i__16008 < count__16007)){
var x = chunk__16006.cljs$core$IIndexed$_nth$arity$2(null,i__16008);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__18223 = seq__16005;
var G__18224 = chunk__16006;
var G__18225 = count__16007;
var G__18226 = (i__16008 + (1));
seq__16005 = G__18223;
chunk__16006 = G__18224;
count__16007 = G__18225;
i__16008 = G__18226;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16005);
if(temp__5735__auto__){
var seq__16005__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16005__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16005__$1);
var G__18228 = cljs.core.chunk_rest(seq__16005__$1);
var G__18229 = c__4556__auto__;
var G__18230 = cljs.core.count(c__4556__auto__);
var G__18231 = (0);
seq__16005 = G__18228;
chunk__16006 = G__18229;
count__16007 = G__18230;
i__16008 = G__18231;
continue;
} else {
var x = cljs.core.first(seq__16005__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__18232 = cljs.core.next(seq__16005__$1);
var G__18233 = null;
var G__18234 = (0);
var G__18235 = (0);
seq__16005 = G__18232;
chunk__16006 = G__18233;
count__16007 = G__18234;
i__16008 = G__18235;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq15942){
var G__15943 = cljs.core.first(seq15942);
var seq15942__$1 = cljs.core.next(seq15942);
var G__15944 = cljs.core.first(seq15942__$1);
var seq15942__$2 = cljs.core.next(seq15942__$1);
var G__15948 = cljs.core.first(seq15942__$2);
var seq15942__$3 = cljs.core.next(seq15942__$2);
var G__15950 = cljs.core.first(seq15942__$3);
var seq15942__$4 = cljs.core.next(seq15942__$3);
var G__15951 = cljs.core.first(seq15942__$4);
var seq15942__$5 = cljs.core.next(seq15942__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15943,G__15944,G__15948,G__15950,G__15951,seq15942__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__16032){
var map__16033 = p__16032;
var map__16033__$1 = (((((!((map__16033 == null))))?(((((map__16033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16033):map__16033);
var m = map__16033__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16033__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__16057 = arguments.length;
switch (G__16057) {
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
var len__4736__auto___18244 = arguments.length;
var i__4737__auto___18245 = (0);
while(true){
if((i__4737__auto___18245 < len__4736__auto___18244)){
args_arr__4757__auto__.push((arguments[i__4737__auto___18245]));

var G__18246 = (i__4737__auto___18245 + (1));
i__4737__auto___18245 = G__18246;
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

var seq__16082_18249 = cljs.core.seq(xs);
var chunk__16083_18250 = null;
var count__16084_18251 = (0);
var i__16085_18252 = (0);
while(true){
if((i__16085_18252 < count__16084_18251)){
var x_18253 = chunk__16083_18250.cljs$core$IIndexed$_nth$arity$2(null,i__16085_18252);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_18253);


var G__18254 = seq__16082_18249;
var G__18255 = chunk__16083_18250;
var G__18256 = count__16084_18251;
var G__18257 = (i__16085_18252 + (1));
seq__16082_18249 = G__18254;
chunk__16083_18250 = G__18255;
count__16084_18251 = G__18256;
i__16085_18252 = G__18257;
continue;
} else {
var temp__5735__auto___18259 = cljs.core.seq(seq__16082_18249);
if(temp__5735__auto___18259){
var seq__16082_18263__$1 = temp__5735__auto___18259;
if(cljs.core.chunked_seq_QMARK_(seq__16082_18263__$1)){
var c__4556__auto___18264 = cljs.core.chunk_first(seq__16082_18263__$1);
var G__18265 = cljs.core.chunk_rest(seq__16082_18263__$1);
var G__18266 = c__4556__auto___18264;
var G__18267 = cljs.core.count(c__4556__auto___18264);
var G__18268 = (0);
seq__16082_18249 = G__18265;
chunk__16083_18250 = G__18266;
count__16084_18251 = G__18267;
i__16085_18252 = G__18268;
continue;
} else {
var x_18269 = cljs.core.first(seq__16082_18263__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_18269);


var G__18270 = cljs.core.next(seq__16082_18263__$1);
var G__18271 = null;
var G__18272 = (0);
var G__18273 = (0);
seq__16082_18249 = G__18270;
chunk__16083_18250 = G__18271;
count__16084_18251 = G__18272;
i__16085_18252 = G__18273;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq16051){
var G__16052 = cljs.core.first(seq16051);
var seq16051__$1 = cljs.core.next(seq16051);
var G__16053 = cljs.core.first(seq16051__$1);
var seq16051__$2 = cljs.core.next(seq16051__$1);
var G__16054 = cljs.core.first(seq16051__$2);
var seq16051__$3 = cljs.core.next(seq16051__$2);
var G__16055 = cljs.core.first(seq16051__$3);
var seq16051__$4 = cljs.core.next(seq16051__$3);
var G__16056 = cljs.core.first(seq16051__$4);
var seq16051__$5 = cljs.core.next(seq16051__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16052,G__16053,G__16054,G__16055,G__16056,seq16051__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__16115_18281 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__16116_18282 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__16117_18283 = true;
var _STAR_print_fn_STAR__temp_val__16118_18284 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__16117_18283);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__16118_18284);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__16116_18282);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__16115_18281);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16131 = cljs.core.get_global_hierarchy;
return (fexpr__16131.cljs$core$IFn$_invoke$arity$0 ? fexpr__16131.cljs$core$IFn$_invoke$arity$0() : fexpr__16131.call(null));
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
var vec__16151 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16151,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16151,(1),null);
var G__16155 = ns;
var G__16156 = name;
var G__16157 = (function (){
var G__16158 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__16158) : cljs.compiler.emit_constant.call(null,G__16158));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__16155,G__16156,G__16157) : cljs.compiler.emit_record_value.call(null,G__16155,G__16156,G__16157));
} else {
if(cljs.analyzer.cljs_map_QMARK_(x)){
var G__16159 = cljs.core.keys(x);
var G__16160 = cljs.core.vals(x);
var G__16161 = cljs.compiler.emit_constants_comma_sep;
var G__16162 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__16159,G__16160,G__16161,G__16162) : cljs.compiler.emit_map.call(null,G__16159,G__16160,G__16161,G__16162));
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
var G__16174 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__16175 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__16174,G__16175) : cljs.compiler.emit_with_meta.call(null,G__16174,G__16175));
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
var vec__16189 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16189,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16189,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16189,(2),null);
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
var G__16216 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__16216) : x.call(null,G__16216));
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
var G__16224 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__16224) : x.call(null,G__16224));
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
var G__16252 = items;
var G__16253 = (function (p1__16251_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__16251_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__16252,G__16253) : cljs.compiler.emit_js_object.call(null,G__16252,G__16253));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null,items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__16261){
var map__16263 = p__16261;
var map__16263__$1 = (((((!((map__16263 == null))))?(((((map__16263.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16263.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16263):map__16263);
var ast = map__16263__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16263__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16263__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16263__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5733__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5733__auto__)){
var const_expr = temp__5733__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__16272 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__16272__$1 = (((((!((map__16272 == null))))?(((((map__16272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16272):map__16272);
var cenv = map__16272__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16272__$1,new cljs.core.Keyword(null,"options","options",99638489));
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
var reserved = (function (){var G__16279 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__4115__auto__ = (function (){var G__16285 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__16285) : cljs.compiler.es5_GT__EQ_.call(null,G__16285));
})();
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__4115__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__16279,cljs.analyzer.es5_allowed);
} else {
return G__16279;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__4126__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__16287 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__16287,reserved);
} else {
return G__16287;
}
})();
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__16295_18361 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__16295_18362__$1 = (((G__16295_18361 instanceof cljs.core.Keyword))?G__16295_18361.fqn:null);
switch (G__16295_18362__$1) {
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__16308){
var map__16309 = p__16308;
var map__16309__$1 = (((((!((map__16309 == null))))?(((((map__16309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16309):map__16309);
var arg = map__16309__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16309__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16309__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16309__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__16317 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__16317__$1 = (((((!((map__16317 == null))))?(((((map__16317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16317):map__16317);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16317__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__16332){
var map__16333 = p__16332;
var map__16333__$1 = (((((!((map__16333 == null))))?(((((map__16333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16333):map__16333);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16333__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16333__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16333__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__16337_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16337_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null,keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__16340 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16340) : comma_sep.call(null,G__16340));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__16341 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16341) : comma_sep.call(null,G__16341));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null,keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null,vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__16348){
var map__16349 = p__16348;
var map__16349__$1 = (((((!((map__16349 == null))))?(((((map__16349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16349):map__16349);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16349__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16349__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16349__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__16374){
var map__16375 = p__16374;
var map__16375__$1 = (((((!((map__16375 == null))))?(((((map__16375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16375):map__16375);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16375__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16375__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__16379_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16379_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null,items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__16381 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16381) : comma_sep.call(null,G__16381));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null,items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__16386){
var map__16387 = p__16386;
var map__16387__$1 = (((((!((map__16387 == null))))?(((((map__16387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16387):map__16387);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16387__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16387__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5735__auto___18411 = cljs.core.seq(items);
if(temp__5735__auto___18411){
var items_18413__$1 = temp__5735__auto___18411;
var vec__16397_18414 = items_18413__$1;
var seq__16398_18415 = cljs.core.seq(vec__16397_18414);
var first__16399_18416 = cljs.core.first(seq__16398_18415);
var seq__16398_18417__$1 = cljs.core.next(seq__16398_18415);
var vec__16400_18418 = first__16399_18416;
var k_18419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16400_18418,(0),null);
var v_18420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16400_18418,(1),null);
var r_18421 = seq__16398_18417__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_18419),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_18420) : emit_js_object_val.call(null,v_18420)));

var seq__16403_18426 = cljs.core.seq(r_18421);
var chunk__16404_18427 = null;
var count__16405_18428 = (0);
var i__16406_18429 = (0);
while(true){
if((i__16406_18429 < count__16405_18428)){
var vec__16424_18430 = chunk__16404_18427.cljs$core$IIndexed$_nth$arity$2(null,i__16406_18429);
var k_18431__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16424_18430,(0),null);
var v_18432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16424_18430,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_18431__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_18432__$1) : emit_js_object_val.call(null,v_18432__$1)));


var G__18433 = seq__16403_18426;
var G__18434 = chunk__16404_18427;
var G__18435 = count__16405_18428;
var G__18436 = (i__16406_18429 + (1));
seq__16403_18426 = G__18433;
chunk__16404_18427 = G__18434;
count__16405_18428 = G__18435;
i__16406_18429 = G__18436;
continue;
} else {
var temp__5735__auto___18441__$1 = cljs.core.seq(seq__16403_18426);
if(temp__5735__auto___18441__$1){
var seq__16403_18442__$1 = temp__5735__auto___18441__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16403_18442__$1)){
var c__4556__auto___18443 = cljs.core.chunk_first(seq__16403_18442__$1);
var G__18444 = cljs.core.chunk_rest(seq__16403_18442__$1);
var G__18445 = c__4556__auto___18443;
var G__18446 = cljs.core.count(c__4556__auto___18443);
var G__18447 = (0);
seq__16403_18426 = G__18444;
chunk__16404_18427 = G__18445;
count__16405_18428 = G__18446;
i__16406_18429 = G__18447;
continue;
} else {
var vec__16427_18448 = cljs.core.first(seq__16403_18442__$1);
var k_18449__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16427_18448,(0),null);
var v_18450__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16427_18448,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_18449__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_18450__$1) : emit_js_object_val.call(null,v_18450__$1)));


var G__18454 = cljs.core.next(seq__16403_18442__$1);
var G__18455 = null;
var G__18456 = (0);
var G__18457 = (0);
seq__16403_18426 = G__18454;
chunk__16404_18427 = G__18455;
count__16405_18428 = G__18456;
i__16406_18429 = G__18457;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__16432){
var map__16433 = p__16432;
var map__16433__$1 = (((((!((map__16433 == null))))?(((((map__16433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16433):map__16433);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16433__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16433__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16433__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__16449){
var map__16450 = p__16449;
var map__16450__$1 = (((((!((map__16450 == null))))?(((((map__16450.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16450.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16450):map__16450);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16450__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16450__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__16461){
var map__16462 = p__16461;
var map__16462__$1 = (((((!((map__16462 == null))))?(((((map__16462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16462.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16462):map__16462);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16462__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"const","const",1709929842),(function (p__16466){
var map__16467 = p__16466;
var map__16467__$1 = (((((!((map__16467 == null))))?(((((map__16467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16467):map__16467);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16467__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16467__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__16476 = cljs.analyzer.unwrap_quote(expr);
var map__16476__$1 = (((((!((map__16476 == null))))?(((((map__16476.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16476.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16476):map__16476);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16476__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16476__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16476__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var map__16511 = cljs.analyzer.unwrap_quote(expr);
var map__16511__$1 = (((((!((map__16511 == null))))?(((((map__16511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16511):map__16511);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16511__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16511__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16511__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
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
var or__4126__auto__ = (function (){var fexpr__16516 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__16516.cljs$core$IFn$_invoke$arity$1 ? fexpr__16516.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16516.call(null,tag));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__16518){
var map__16520 = p__16518;
var map__16520__$1 = (((((!((map__16520 == null))))?(((((map__16520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16520):map__16520);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16520__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16520__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16520__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16520__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16520__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case","case",1143702196),(function (p__16533){
var map__16536 = p__16533;
var map__16536__$1 = (((((!((map__16536 == null))))?(((((map__16536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16536):map__16536);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16536__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16536__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16536__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16536__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__16541_18512 = cljs.core.seq(nodes);
var chunk__16542_18513 = null;
var count__16543_18514 = (0);
var i__16544_18515 = (0);
while(true){
if((i__16544_18515 < count__16543_18514)){
var map__16611_18516 = chunk__16542_18513.cljs$core$IIndexed$_nth$arity$2(null,i__16544_18515);
var map__16611_18517__$1 = (((((!((map__16611_18516 == null))))?(((((map__16611_18516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16611_18516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16611_18516):map__16611_18516);
var ts_18518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16611_18517__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16612_18519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16611_18517__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16612_18520__$1 = (((((!((map__16612_18519 == null))))?(((((map__16612_18519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16612_18519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16612_18519):map__16612_18519);
var then_18521 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16612_18520__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16618_18523 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_18518));
var chunk__16619_18524 = null;
var count__16620_18525 = (0);
var i__16621_18526 = (0);
while(true){
if((i__16621_18526 < count__16620_18525)){
var test_18528 = chunk__16619_18524.cljs$core$IIndexed$_nth$arity$2(null,i__16621_18526);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18528,":");


var G__18530 = seq__16618_18523;
var G__18531 = chunk__16619_18524;
var G__18532 = count__16620_18525;
var G__18533 = (i__16621_18526 + (1));
seq__16618_18523 = G__18530;
chunk__16619_18524 = G__18531;
count__16620_18525 = G__18532;
i__16621_18526 = G__18533;
continue;
} else {
var temp__5735__auto___18534 = cljs.core.seq(seq__16618_18523);
if(temp__5735__auto___18534){
var seq__16618_18535__$1 = temp__5735__auto___18534;
if(cljs.core.chunked_seq_QMARK_(seq__16618_18535__$1)){
var c__4556__auto___18541 = cljs.core.chunk_first(seq__16618_18535__$1);
var G__18543 = cljs.core.chunk_rest(seq__16618_18535__$1);
var G__18544 = c__4556__auto___18541;
var G__18545 = cljs.core.count(c__4556__auto___18541);
var G__18546 = (0);
seq__16618_18523 = G__18543;
chunk__16619_18524 = G__18544;
count__16620_18525 = G__18545;
i__16621_18526 = G__18546;
continue;
} else {
var test_18547 = cljs.core.first(seq__16618_18535__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18547,":");


var G__18548 = cljs.core.next(seq__16618_18535__$1);
var G__18549 = null;
var G__18550 = (0);
var G__18551 = (0);
seq__16618_18523 = G__18548;
chunk__16619_18524 = G__18549;
count__16620_18525 = G__18550;
i__16621_18526 = G__18551;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_18521);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_18521);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__18558 = seq__16541_18512;
var G__18559 = chunk__16542_18513;
var G__18560 = count__16543_18514;
var G__18561 = (i__16544_18515 + (1));
seq__16541_18512 = G__18558;
chunk__16542_18513 = G__18559;
count__16543_18514 = G__18560;
i__16544_18515 = G__18561;
continue;
} else {
var temp__5735__auto___18562 = cljs.core.seq(seq__16541_18512);
if(temp__5735__auto___18562){
var seq__16541_18563__$1 = temp__5735__auto___18562;
if(cljs.core.chunked_seq_QMARK_(seq__16541_18563__$1)){
var c__4556__auto___18564 = cljs.core.chunk_first(seq__16541_18563__$1);
var G__18565 = cljs.core.chunk_rest(seq__16541_18563__$1);
var G__18566 = c__4556__auto___18564;
var G__18567 = cljs.core.count(c__4556__auto___18564);
var G__18568 = (0);
seq__16541_18512 = G__18565;
chunk__16542_18513 = G__18566;
count__16543_18514 = G__18567;
i__16544_18515 = G__18568;
continue;
} else {
var map__16637_18569 = cljs.core.first(seq__16541_18563__$1);
var map__16637_18570__$1 = (((((!((map__16637_18569 == null))))?(((((map__16637_18569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16637_18569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16637_18569):map__16637_18569);
var ts_18571 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16637_18570__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16638_18572 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16637_18570__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16638_18573__$1 = (((((!((map__16638_18572 == null))))?(((((map__16638_18572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16638_18572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16638_18572):map__16638_18572);
var then_18574 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16638_18573__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16642_18576 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_18571));
var chunk__16643_18577 = null;
var count__16644_18578 = (0);
var i__16645_18579 = (0);
while(true){
if((i__16645_18579 < count__16644_18578)){
var test_18584 = chunk__16643_18577.cljs$core$IIndexed$_nth$arity$2(null,i__16645_18579);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18584,":");


var G__18585 = seq__16642_18576;
var G__18586 = chunk__16643_18577;
var G__18587 = count__16644_18578;
var G__18588 = (i__16645_18579 + (1));
seq__16642_18576 = G__18585;
chunk__16643_18577 = G__18586;
count__16644_18578 = G__18587;
i__16645_18579 = G__18588;
continue;
} else {
var temp__5735__auto___18589__$1 = cljs.core.seq(seq__16642_18576);
if(temp__5735__auto___18589__$1){
var seq__16642_18590__$1 = temp__5735__auto___18589__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16642_18590__$1)){
var c__4556__auto___18591 = cljs.core.chunk_first(seq__16642_18590__$1);
var G__18592 = cljs.core.chunk_rest(seq__16642_18590__$1);
var G__18593 = c__4556__auto___18591;
var G__18594 = cljs.core.count(c__4556__auto___18591);
var G__18595 = (0);
seq__16642_18576 = G__18592;
chunk__16643_18577 = G__18593;
count__16644_18578 = G__18594;
i__16645_18579 = G__18595;
continue;
} else {
var test_18596 = cljs.core.first(seq__16642_18590__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_18596,":");


var G__18598 = cljs.core.next(seq__16642_18590__$1);
var G__18599 = null;
var G__18600 = (0);
var G__18601 = (0);
seq__16642_18576 = G__18598;
chunk__16643_18577 = G__18599;
count__16644_18578 = G__18600;
i__16645_18579 = G__18601;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_18574);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_18574);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__18610 = cljs.core.next(seq__16541_18563__$1);
var G__18611 = null;
var G__18612 = (0);
var G__18613 = (0);
seq__16541_18512 = G__18610;
chunk__16542_18513 = G__18611;
count__16543_18514 = G__18612;
i__16544_18515 = G__18613;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16656){
var map__16659 = p__16656;
var map__16659__$1 = (((((!((map__16659 == null))))?(((((map__16659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16659):map__16659);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16659__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16659__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16686 = env;
var G__16687 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16686,G__16687) : cljs.compiler.resolve_type.call(null,G__16686,G__16687));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__16688 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16688,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null,env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16672_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__16672_SHARP_) : cljs.compiler.resolve_type.call(null,env,p1__16672_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__16700 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__16700,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__16700;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16709 = env;
var G__16710 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16709,G__16710) : cljs.compiler.resolve_type.call(null,G__16709,G__16710));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16712_SHARP_){
return cljs.compiler.resolve_type(env,p1__16712_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__16723 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16724 = cljs.core.seq(vec__16723);
var first__16725 = cljs.core.first(seq__16724);
var seq__16724__$1 = cljs.core.next(seq__16724);
var p = first__16725;
var first__16725__$1 = cljs.core.first(seq__16724__$1);
var seq__16724__$2 = cljs.core.next(seq__16724__$1);
var ts = first__16725__$1;
var first__16725__$2 = cljs.core.first(seq__16724__$2);
var seq__16724__$3 = cljs.core.next(seq__16724__$2);
var n = first__16725__$2;
var xs = seq__16724__$3;
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
var vec__16738 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16739 = cljs.core.seq(vec__16738);
var first__16740 = cljs.core.first(seq__16739);
var seq__16739__$1 = cljs.core.next(seq__16739);
var p = first__16740;
var first__16740__$1 = cljs.core.first(seq__16739__$1);
var seq__16739__$2 = cljs.core.next(seq__16739__$1);
var ts = first__16740__$1;
var xs = seq__16739__$2;
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
var G__16746 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__16745 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__16745.cljs$core$IFn$_invoke$arity$1 ? fexpr__16745.cljs$core$IFn$_invoke$arity$1(G__16746) : fexpr__16745.call(null,G__16746));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__16760 = arguments.length;
switch (G__16760) {
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
var vec__16796 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16752_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__16752_SHARP_);
} else {
return p1__16752_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__16797 = cljs.core.seq(vec__16796);
var first__16798 = cljs.core.first(seq__16797);
var seq__16797__$1 = cljs.core.next(seq__16797);
var x = first__16798;
var ys = seq__16797__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__16799 = cljs.core.seq(ys);
var chunk__16800 = null;
var count__16801 = (0);
var i__16802 = (0);
while(true){
if((i__16802 < count__16801)){
var next_line = chunk__16800.cljs$core$IIndexed$_nth$arity$2(null,i__16802);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__18672 = seq__16799;
var G__18673 = chunk__16800;
var G__18674 = count__16801;
var G__18675 = (i__16802 + (1));
seq__16799 = G__18672;
chunk__16800 = G__18673;
count__16801 = G__18674;
i__16802 = G__18675;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16799);
if(temp__5735__auto__){
var seq__16799__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16799__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16799__$1);
var G__18678 = cljs.core.chunk_rest(seq__16799__$1);
var G__18679 = c__4556__auto__;
var G__18680 = cljs.core.count(c__4556__auto__);
var G__18681 = (0);
seq__16799 = G__18678;
chunk__16800 = G__18679;
count__16801 = G__18680;
i__16802 = G__18681;
continue;
} else {
var next_line = cljs.core.first(seq__16799__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__18682 = cljs.core.next(seq__16799__$1);
var G__18683 = null;
var G__18684 = (0);
var G__18685 = (0);
seq__16799 = G__18682;
chunk__16800 = G__18683;
count__16801 = G__18684;
i__16802 = G__18685;
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

var seq__16808_18687 = cljs.core.seq(docs__$2);
var chunk__16809_18688 = null;
var count__16810_18689 = (0);
var i__16811_18690 = (0);
while(true){
if((i__16811_18690 < count__16810_18689)){
var e_18694 = chunk__16809_18688.cljs$core$IIndexed$_nth$arity$2(null,i__16811_18690);
if(cljs.core.truth_(e_18694)){
print_comment_lines(e_18694);
} else {
}


var G__18698 = seq__16808_18687;
var G__18700 = chunk__16809_18688;
var G__18701 = count__16810_18689;
var G__18702 = (i__16811_18690 + (1));
seq__16808_18687 = G__18698;
chunk__16809_18688 = G__18700;
count__16810_18689 = G__18701;
i__16811_18690 = G__18702;
continue;
} else {
var temp__5735__auto___18704 = cljs.core.seq(seq__16808_18687);
if(temp__5735__auto___18704){
var seq__16808_18705__$1 = temp__5735__auto___18704;
if(cljs.core.chunked_seq_QMARK_(seq__16808_18705__$1)){
var c__4556__auto___18706 = cljs.core.chunk_first(seq__16808_18705__$1);
var G__18707 = cljs.core.chunk_rest(seq__16808_18705__$1);
var G__18708 = c__4556__auto___18706;
var G__18709 = cljs.core.count(c__4556__auto___18706);
var G__18710 = (0);
seq__16808_18687 = G__18707;
chunk__16809_18688 = G__18708;
count__16810_18689 = G__18709;
i__16811_18690 = G__18710;
continue;
} else {
var e_18711 = cljs.core.first(seq__16808_18705__$1);
if(cljs.core.truth_(e_18711)){
print_comment_lines(e_18711);
} else {
}


var G__18712 = cljs.core.next(seq__16808_18705__$1);
var G__18713 = null;
var G__18714 = (0);
var G__18715 = (0);
seq__16808_18687 = G__18712;
chunk__16809_18688 = G__18713;
count__16810_18689 = G__18714;
i__16811_18690 = G__18715;
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
var and__4115__auto__ = cljs.core.some((function (p1__16829_SHARP_){
return goog.string.startsWith(p1__16829_SHARP_,"@define");
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16851){
var map__16852 = p__16851;
var map__16852__$1 = (((((!((map__16852 == null))))?(((((map__16852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16852):map__16852);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16852__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16880){
var map__16882 = p__16880;
var map__16882__$1 = (((((!((map__16882 == null))))?(((((map__16882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16882.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16882):map__16882);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16882__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16882__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16882__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__16892_18733 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__16893_18735 = null;
var count__16894_18736 = (0);
var i__16895_18737 = (0);
while(true){
if((i__16895_18737 < count__16894_18736)){
var vec__16915_18742 = chunk__16893_18735.cljs$core$IIndexed$_nth$arity$2(null,i__16895_18737);
var i_18743 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16915_18742,(0),null);
var param_18744 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16915_18742,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_18744);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__18746 = seq__16892_18733;
var G__18747 = chunk__16893_18735;
var G__18748 = count__16894_18736;
var G__18749 = (i__16895_18737 + (1));
seq__16892_18733 = G__18746;
chunk__16893_18735 = G__18747;
count__16894_18736 = G__18748;
i__16895_18737 = G__18749;
continue;
} else {
var temp__5735__auto___18751 = cljs.core.seq(seq__16892_18733);
if(temp__5735__auto___18751){
var seq__16892_18752__$1 = temp__5735__auto___18751;
if(cljs.core.chunked_seq_QMARK_(seq__16892_18752__$1)){
var c__4556__auto___18753 = cljs.core.chunk_first(seq__16892_18752__$1);
var G__18754 = cljs.core.chunk_rest(seq__16892_18752__$1);
var G__18755 = c__4556__auto___18753;
var G__18756 = cljs.core.count(c__4556__auto___18753);
var G__18757 = (0);
seq__16892_18733 = G__18754;
chunk__16893_18735 = G__18755;
count__16894_18736 = G__18756;
i__16895_18737 = G__18757;
continue;
} else {
var vec__16924_18762 = cljs.core.first(seq__16892_18752__$1);
var i_18763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16924_18762,(0),null);
var param_18764 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16924_18762,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_18764);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__18770 = cljs.core.next(seq__16892_18752__$1);
var G__18771 = null;
var G__18772 = (0);
var G__18773 = (0);
seq__16892_18733 = G__18770;
chunk__16893_18735 = G__18771;
count__16894_18736 = G__18772;
i__16895_18737 = G__18773;
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

var seq__16930_18777 = cljs.core.seq(params);
var chunk__16931_18778 = null;
var count__16932_18779 = (0);
var i__16933_18780 = (0);
while(true){
if((i__16933_18780 < count__16932_18779)){
var param_18783 = chunk__16931_18778.cljs$core$IIndexed$_nth$arity$2(null,i__16933_18780);
cljs.compiler.emit(param_18783);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18783,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18788 = seq__16930_18777;
var G__18789 = chunk__16931_18778;
var G__18790 = count__16932_18779;
var G__18791 = (i__16933_18780 + (1));
seq__16930_18777 = G__18788;
chunk__16931_18778 = G__18789;
count__16932_18779 = G__18790;
i__16933_18780 = G__18791;
continue;
} else {
var temp__5735__auto___18793 = cljs.core.seq(seq__16930_18777);
if(temp__5735__auto___18793){
var seq__16930_18794__$1 = temp__5735__auto___18793;
if(cljs.core.chunked_seq_QMARK_(seq__16930_18794__$1)){
var c__4556__auto___18796 = cljs.core.chunk_first(seq__16930_18794__$1);
var G__18797 = cljs.core.chunk_rest(seq__16930_18794__$1);
var G__18798 = c__4556__auto___18796;
var G__18799 = cljs.core.count(c__4556__auto___18796);
var G__18800 = (0);
seq__16930_18777 = G__18797;
chunk__16931_18778 = G__18798;
count__16932_18779 = G__18799;
i__16933_18780 = G__18800;
continue;
} else {
var param_18802 = cljs.core.first(seq__16930_18794__$1);
cljs.compiler.emit(param_18802);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18802,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18805 = cljs.core.next(seq__16930_18794__$1);
var G__18806 = null;
var G__18807 = (0);
var G__18808 = (0);
seq__16930_18777 = G__18805;
chunk__16931_18778 = G__18806;
count__16932_18779 = G__18807;
i__16933_18780 = G__18808;
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

var seq__16947_18809 = cljs.core.seq(params);
var chunk__16948_18810 = null;
var count__16949_18811 = (0);
var i__16950_18812 = (0);
while(true){
if((i__16950_18812 < count__16949_18811)){
var param_18813 = chunk__16948_18810.cljs$core$IIndexed$_nth$arity$2(null,i__16950_18812);
cljs.compiler.emit(param_18813);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18813,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18814 = seq__16947_18809;
var G__18815 = chunk__16948_18810;
var G__18816 = count__16949_18811;
var G__18817 = (i__16950_18812 + (1));
seq__16947_18809 = G__18814;
chunk__16948_18810 = G__18815;
count__16949_18811 = G__18816;
i__16950_18812 = G__18817;
continue;
} else {
var temp__5735__auto___18818 = cljs.core.seq(seq__16947_18809);
if(temp__5735__auto___18818){
var seq__16947_18820__$1 = temp__5735__auto___18818;
if(cljs.core.chunked_seq_QMARK_(seq__16947_18820__$1)){
var c__4556__auto___18821 = cljs.core.chunk_first(seq__16947_18820__$1);
var G__18822 = cljs.core.chunk_rest(seq__16947_18820__$1);
var G__18823 = c__4556__auto___18821;
var G__18824 = cljs.core.count(c__4556__auto___18821);
var G__18825 = (0);
seq__16947_18809 = G__18822;
chunk__16948_18810 = G__18823;
count__16949_18811 = G__18824;
i__16950_18812 = G__18825;
continue;
} else {
var param_18827 = cljs.core.first(seq__16947_18820__$1);
cljs.compiler.emit(param_18827);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18827,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18828 = cljs.core.next(seq__16947_18820__$1);
var G__18829 = null;
var G__18830 = (0);
var G__18831 = (0);
seq__16947_18809 = G__18828;
chunk__16948_18810 = G__18829;
count__16949_18811 = G__18830;
i__16950_18812 = G__18831;
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
var seq__16967 = cljs.core.seq(params);
var chunk__16968 = null;
var count__16969 = (0);
var i__16970 = (0);
while(true){
if((i__16970 < count__16969)){
var param = chunk__16968.cljs$core$IIndexed$_nth$arity$2(null,i__16970);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18845 = seq__16967;
var G__18846 = chunk__16968;
var G__18847 = count__16969;
var G__18848 = (i__16970 + (1));
seq__16967 = G__18845;
chunk__16968 = G__18846;
count__16969 = G__18847;
i__16970 = G__18848;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__16967);
if(temp__5735__auto__){
var seq__16967__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16967__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__16967__$1);
var G__18854 = cljs.core.chunk_rest(seq__16967__$1);
var G__18855 = c__4556__auto__;
var G__18856 = cljs.core.count(c__4556__auto__);
var G__18857 = (0);
seq__16967 = G__18854;
chunk__16968 = G__18855;
count__16969 = G__18856;
i__16970 = G__18857;
continue;
} else {
var param = cljs.core.first(seq__16967__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18860 = cljs.core.next(seq__16967__$1);
var G__18861 = null;
var G__18862 = (0);
var G__18863 = (0);
seq__16967 = G__18860;
chunk__16968 = G__18861;
count__16969 = G__18862;
i__16970 = G__18863;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16985){
var map__16986 = p__16985;
var map__16986__$1 = (((((!((map__16986 == null))))?(((((map__16986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16986):map__16986);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16986__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16986__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16986__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16986__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16986__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16986__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__17010){
var map__17011 = p__17010;
var map__17011__$1 = (((((!((map__17011 == null))))?(((((map__17011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17011):map__17011);
var f = map__17011__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17011__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_18905__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_18906 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_18905__$1);
var delegate_name_18907 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_18906),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_18907," = function (");

var seq__17020_18910 = cljs.core.seq(params);
var chunk__17021_18911 = null;
var count__17022_18912 = (0);
var i__17023_18913 = (0);
while(true){
if((i__17023_18913 < count__17022_18912)){
var param_18914 = chunk__17021_18911.cljs$core$IIndexed$_nth$arity$2(null,i__17023_18913);
cljs.compiler.emit(param_18914);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18914,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18917 = seq__17020_18910;
var G__18918 = chunk__17021_18911;
var G__18919 = count__17022_18912;
var G__18920 = (i__17023_18913 + (1));
seq__17020_18910 = G__18917;
chunk__17021_18911 = G__18918;
count__17022_18912 = G__18919;
i__17023_18913 = G__18920;
continue;
} else {
var temp__5735__auto___18922 = cljs.core.seq(seq__17020_18910);
if(temp__5735__auto___18922){
var seq__17020_18927__$1 = temp__5735__auto___18922;
if(cljs.core.chunked_seq_QMARK_(seq__17020_18927__$1)){
var c__4556__auto___18928 = cljs.core.chunk_first(seq__17020_18927__$1);
var G__18929 = cljs.core.chunk_rest(seq__17020_18927__$1);
var G__18930 = c__4556__auto___18928;
var G__18931 = cljs.core.count(c__4556__auto___18928);
var G__18932 = (0);
seq__17020_18910 = G__18929;
chunk__17021_18911 = G__18930;
count__17022_18912 = G__18931;
i__17023_18913 = G__18932;
continue;
} else {
var param_18935 = cljs.core.first(seq__17020_18927__$1);
cljs.compiler.emit(param_18935);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18935,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18936 = cljs.core.next(seq__17020_18927__$1);
var G__18937 = null;
var G__18938 = (0);
var G__18939 = (0);
seq__17020_18910 = G__18936;
chunk__17021_18911 = G__18937;
count__17022_18912 = G__18938;
i__17023_18913 = G__18939;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_18906," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_18951 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_18951,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_18907,".call(this,");

var seq__17052_18952 = cljs.core.seq(params);
var chunk__17053_18953 = null;
var count__17054_18954 = (0);
var i__17055_18955 = (0);
while(true){
if((i__17055_18955 < count__17054_18954)){
var param_18958 = chunk__17053_18953.cljs$core$IIndexed$_nth$arity$2(null,i__17055_18955);
cljs.compiler.emit(param_18958);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18958,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18959 = seq__17052_18952;
var G__18960 = chunk__17053_18953;
var G__18961 = count__17054_18954;
var G__18962 = (i__17055_18955 + (1));
seq__17052_18952 = G__18959;
chunk__17053_18953 = G__18960;
count__17054_18954 = G__18961;
i__17055_18955 = G__18962;
continue;
} else {
var temp__5735__auto___18965 = cljs.core.seq(seq__17052_18952);
if(temp__5735__auto___18965){
var seq__17052_18966__$1 = temp__5735__auto___18965;
if(cljs.core.chunked_seq_QMARK_(seq__17052_18966__$1)){
var c__4556__auto___18967 = cljs.core.chunk_first(seq__17052_18966__$1);
var G__18968 = cljs.core.chunk_rest(seq__17052_18966__$1);
var G__18969 = c__4556__auto___18967;
var G__18970 = cljs.core.count(c__4556__auto___18967);
var G__18971 = (0);
seq__17052_18952 = G__18968;
chunk__17053_18953 = G__18969;
count__17054_18954 = G__18970;
i__17055_18955 = G__18971;
continue;
} else {
var param_18972 = cljs.core.first(seq__17052_18966__$1);
cljs.compiler.emit(param_18972);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_18972,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__18973 = cljs.core.next(seq__17052_18966__$1);
var G__18974 = null;
var G__18975 = (0);
var G__18976 = (0);
seq__17052_18952 = G__18973;
chunk__17053_18953 = G__18974;
count__17054_18954 = G__18975;
i__17055_18955 = G__18976;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18906,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_18906,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_18905__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_18906,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_18907,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_18906,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__17082){
var map__17083 = p__17082;
var map__17083__$1 = (((((!((map__17083 == null))))?(((((map__17083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17083):map__17083);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17083__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__17074_SHARP_){
var and__4115__auto__ = p1__17074_SHARP_;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__17074_SHARP_));
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
var name_19003__$1 = (function (){var or__4126__auto__ = name;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_19004 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_19003__$1);
var maxparams_19005 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_19006 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_19004),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_19007 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__17076_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__17076_SHARP_)));
}),cljs.core.seq(mmap_19006));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_19004," = null;");

var seq__17109_19015 = cljs.core.seq(ms_19007);
var chunk__17110_19016 = null;
var count__17111_19017 = (0);
var i__17112_19018 = (0);
while(true){
if((i__17112_19018 < count__17111_19017)){
var vec__17127_19020 = chunk__17110_19016.cljs$core$IIndexed$_nth$arity$2(null,i__17112_19018);
var n_19021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17127_19020,(0),null);
var meth_19022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17127_19020,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_19021," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19022))){
cljs.compiler.emit_variadic_fn_method(meth_19022);
} else {
cljs.compiler.emit_fn_method(meth_19022);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__19024 = seq__17109_19015;
var G__19025 = chunk__17110_19016;
var G__19026 = count__17111_19017;
var G__19027 = (i__17112_19018 + (1));
seq__17109_19015 = G__19024;
chunk__17110_19016 = G__19025;
count__17111_19017 = G__19026;
i__17112_19018 = G__19027;
continue;
} else {
var temp__5735__auto___19028 = cljs.core.seq(seq__17109_19015);
if(temp__5735__auto___19028){
var seq__17109_19030__$1 = temp__5735__auto___19028;
if(cljs.core.chunked_seq_QMARK_(seq__17109_19030__$1)){
var c__4556__auto___19035 = cljs.core.chunk_first(seq__17109_19030__$1);
var G__19037 = cljs.core.chunk_rest(seq__17109_19030__$1);
var G__19038 = c__4556__auto___19035;
var G__19039 = cljs.core.count(c__4556__auto___19035);
var G__19040 = (0);
seq__17109_19015 = G__19037;
chunk__17110_19016 = G__19038;
count__17111_19017 = G__19039;
i__17112_19018 = G__19040;
continue;
} else {
var vec__17141_19041 = cljs.core.first(seq__17109_19030__$1);
var n_19042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17141_19041,(0),null);
var meth_19043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17141_19041,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_19042," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19043))){
cljs.compiler.emit_variadic_fn_method(meth_19043);
} else {
cljs.compiler.emit_fn_method(meth_19043);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__19044 = cljs.core.next(seq__17109_19030__$1);
var G__19045 = null;
var G__19046 = (0);
var G__19047 = (0);
seq__17109_19015 = G__19044;
chunk__17110_19016 = G__19045;
count__17111_19017 = G__19046;
i__17112_19018 = G__19047;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19004," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_19005),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_19005)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_19005));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__17149_19049 = cljs.core.seq(ms_19007);
var chunk__17150_19050 = null;
var count__17151_19051 = (0);
var i__17152_19052 = (0);
while(true){
if((i__17152_19052 < count__17151_19051)){
var vec__17168_19054 = chunk__17150_19050.cljs$core$IIndexed$_nth$arity$2(null,i__17152_19052);
var n_19055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17168_19054,(0),null);
var meth_19056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17168_19054,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19056))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_19057 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_19057," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_19063 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_19057," = new cljs.core.IndexedSeq(",a_19063,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_19055,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_19005)),(((cljs.core.count(maxparams_19005) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_19057,");"], 0));
} else {
var pcnt_19066 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19056));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_19066,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_19055,".call(this",(((pcnt_19066 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_19066,maxparams_19005)),null,(1),null)),(2),null))),");");
}


var G__19068 = seq__17149_19049;
var G__19069 = chunk__17150_19050;
var G__19070 = count__17151_19051;
var G__19071 = (i__17152_19052 + (1));
seq__17149_19049 = G__19068;
chunk__17150_19050 = G__19069;
count__17151_19051 = G__19070;
i__17152_19052 = G__19071;
continue;
} else {
var temp__5735__auto___19072 = cljs.core.seq(seq__17149_19049);
if(temp__5735__auto___19072){
var seq__17149_19073__$1 = temp__5735__auto___19072;
if(cljs.core.chunked_seq_QMARK_(seq__17149_19073__$1)){
var c__4556__auto___19074 = cljs.core.chunk_first(seq__17149_19073__$1);
var G__19075 = cljs.core.chunk_rest(seq__17149_19073__$1);
var G__19076 = c__4556__auto___19074;
var G__19077 = cljs.core.count(c__4556__auto___19074);
var G__19078 = (0);
seq__17149_19049 = G__19075;
chunk__17150_19050 = G__19076;
count__17151_19051 = G__19077;
i__17152_19052 = G__19078;
continue;
} else {
var vec__17193_19079 = cljs.core.first(seq__17149_19073__$1);
var n_19080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193_19079,(0),null);
var meth_19081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17193_19079,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19081))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_19082 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_19082," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_19083 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_19082," = new cljs.core.IndexedSeq(",a_19083,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_19080,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_19005)),(((cljs.core.count(maxparams_19005) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_19082,");"], 0));
} else {
var pcnt_19084 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19081));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_19084,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_19080,".call(this",(((pcnt_19084 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_19084,maxparams_19005)),null,(1),null)),(2),null))),");");
}


var G__19085 = cljs.core.next(seq__17149_19073__$1);
var G__19086 = null;
var G__19087 = (0);
var G__19088 = (0);
seq__17149_19049 = G__19085;
chunk__17150_19050 = G__19086;
count__17151_19051 = G__19087;
i__17152_19052 = G__19088;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_19091 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_19007)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_19091,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19004,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19004,".cljs$lang$applyTo = ",cljs.core.some((function (p1__17081_SHARP_){
var vec__17200 = p1__17081_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17200,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17200,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_19007),".cljs$lang$applyTo;");
} else {
}

var seq__17205_19120 = cljs.core.seq(ms_19007);
var chunk__17206_19121 = null;
var count__17207_19122 = (0);
var i__17208_19123 = (0);
while(true){
if((i__17208_19123 < count__17207_19122)){
var vec__17220_19125 = chunk__17206_19121.cljs$core$IIndexed$_nth$arity$2(null,i__17208_19123);
var n_19126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220_19125,(0),null);
var meth_19127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17220_19125,(1),null);
var c_19128 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19127));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19127))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19004,".cljs$core$IFn$_invoke$arity$variadic = ",n_19126,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_19004,".cljs$core$IFn$_invoke$arity$",c_19128," = ",n_19126,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__19129 = seq__17205_19120;
var G__19130 = chunk__17206_19121;
var G__19131 = count__17207_19122;
var G__19132 = (i__17208_19123 + (1));
seq__17205_19120 = G__19129;
chunk__17206_19121 = G__19130;
count__17207_19122 = G__19131;
i__17208_19123 = G__19132;
continue;
} else {
var temp__5735__auto___19133 = cljs.core.seq(seq__17205_19120);
if(temp__5735__auto___19133){
var seq__17205_19134__$1 = temp__5735__auto___19133;
if(cljs.core.chunked_seq_QMARK_(seq__17205_19134__$1)){
var c__4556__auto___19135 = cljs.core.chunk_first(seq__17205_19134__$1);
var G__19137 = cljs.core.chunk_rest(seq__17205_19134__$1);
var G__19138 = c__4556__auto___19135;
var G__19139 = cljs.core.count(c__4556__auto___19135);
var G__19140 = (0);
seq__17205_19120 = G__19137;
chunk__17206_19121 = G__19138;
count__17207_19122 = G__19139;
i__17208_19123 = G__19140;
continue;
} else {
var vec__17226_19141 = cljs.core.first(seq__17205_19134__$1);
var n_19142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17226_19141,(0),null);
var meth_19143 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17226_19141,(1),null);
var c_19145 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_19143));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_19143))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_19004,".cljs$core$IFn$_invoke$arity$variadic = ",n_19142,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_19004,".cljs$core$IFn$_invoke$arity$",c_19145," = ",n_19142,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__19150 = cljs.core.next(seq__17205_19134__$1);
var G__19151 = null;
var G__19152 = (0);
var G__19153 = (0);
seq__17205_19120 = G__19150;
chunk__17206_19121 = G__19151;
count__17207_19122 = G__19152;
i__17208_19123 = G__19153;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_19004,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__17229){
var map__17230 = p__17229;
var map__17230__$1 = (((((!((map__17230 == null))))?(((((map__17230.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17230.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17230):map__17230);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17230__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17230__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17230__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__17243_19157 = cljs.core.seq(statements);
var chunk__17244_19158 = null;
var count__17245_19159 = (0);
var i__17246_19160 = (0);
while(true){
if((i__17246_19160 < count__17245_19159)){
var s_19162 = chunk__17244_19158.cljs$core$IIndexed$_nth$arity$2(null,i__17246_19160);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_19162);


var G__19163 = seq__17243_19157;
var G__19164 = chunk__17244_19158;
var G__19165 = count__17245_19159;
var G__19166 = (i__17246_19160 + (1));
seq__17243_19157 = G__19163;
chunk__17244_19158 = G__19164;
count__17245_19159 = G__19165;
i__17246_19160 = G__19166;
continue;
} else {
var temp__5735__auto___19170 = cljs.core.seq(seq__17243_19157);
if(temp__5735__auto___19170){
var seq__17243_19171__$1 = temp__5735__auto___19170;
if(cljs.core.chunked_seq_QMARK_(seq__17243_19171__$1)){
var c__4556__auto___19172 = cljs.core.chunk_first(seq__17243_19171__$1);
var G__19173 = cljs.core.chunk_rest(seq__17243_19171__$1);
var G__19174 = c__4556__auto___19172;
var G__19175 = cljs.core.count(c__4556__auto___19172);
var G__19176 = (0);
seq__17243_19157 = G__19173;
chunk__17244_19158 = G__19174;
count__17245_19159 = G__19175;
i__17246_19160 = G__19176;
continue;
} else {
var s_19177 = cljs.core.first(seq__17243_19171__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_19177);


var G__19179 = cljs.core.next(seq__17243_19171__$1);
var G__19180 = null;
var G__19181 = (0);
var G__19182 = (0);
seq__17243_19157 = G__19179;
chunk__17244_19158 = G__19180;
count__17245_19159 = G__19181;
i__17246_19160 = G__19182;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__17256){
var map__17257 = p__17256;
var map__17257__$1 = (((((!((map__17257 == null))))?(((((map__17257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17257):map__17257);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17257__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__17271,is_loop){
var map__17272 = p__17271;
var map__17272__$1 = (((((!((map__17272 == null))))?(((((map__17272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17272.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17272):map__17272);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17272__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17272__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17272__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__17276_19185 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__17277_19186 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__17277_19186);

try{var seq__17282_19191 = cljs.core.seq(bindings);
var chunk__17283_19192 = null;
var count__17284_19193 = (0);
var i__17285_19194 = (0);
while(true){
if((i__17285_19194 < count__17284_19193)){
var map__17301_19195 = chunk__17283_19192.cljs$core$IIndexed$_nth$arity$2(null,i__17285_19194);
var map__17301_19196__$1 = (((((!((map__17301_19195 == null))))?(((((map__17301_19195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17301_19195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17301_19195):map__17301_19195);
var binding_19197 = map__17301_19196__$1;
var init_19198 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17301_19196__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_19197);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_19198,";");


var G__19200 = seq__17282_19191;
var G__19201 = chunk__17283_19192;
var G__19202 = count__17284_19193;
var G__19203 = (i__17285_19194 + (1));
seq__17282_19191 = G__19200;
chunk__17283_19192 = G__19201;
count__17284_19193 = G__19202;
i__17285_19194 = G__19203;
continue;
} else {
var temp__5735__auto___19205 = cljs.core.seq(seq__17282_19191);
if(temp__5735__auto___19205){
var seq__17282_19209__$1 = temp__5735__auto___19205;
if(cljs.core.chunked_seq_QMARK_(seq__17282_19209__$1)){
var c__4556__auto___19221 = cljs.core.chunk_first(seq__17282_19209__$1);
var G__19233 = cljs.core.chunk_rest(seq__17282_19209__$1);
var G__19234 = c__4556__auto___19221;
var G__19235 = cljs.core.count(c__4556__auto___19221);
var G__19236 = (0);
seq__17282_19191 = G__19233;
chunk__17283_19192 = G__19234;
count__17284_19193 = G__19235;
i__17285_19194 = G__19236;
continue;
} else {
var map__17308_19241 = cljs.core.first(seq__17282_19209__$1);
var map__17308_19242__$1 = (((((!((map__17308_19241 == null))))?(((((map__17308_19241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17308_19241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17308_19241):map__17308_19241);
var binding_19243 = map__17308_19242__$1;
var init_19244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17308_19242__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_19243);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_19244,";");


var G__19245 = cljs.core.next(seq__17282_19209__$1);
var G__19246 = null;
var G__19247 = (0);
var G__19248 = (0);
seq__17282_19191 = G__19245;
chunk__17283_19192 = G__19246;
count__17284_19193 = G__19247;
i__17285_19194 = G__19248;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__17276_19185);
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__17317){
var map__17318 = p__17317;
var map__17318__$1 = (((((!((map__17318 == null))))?(((((map__17318.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17318.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17318):map__17318);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17318__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17318__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4613__auto___19262 = cljs.core.count(exprs);
var i_19263 = (0);
while(true){
if((i_19263 < n__4613__auto___19262)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_19263) : temps.call(null,i_19263))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_19263) : exprs.call(null,i_19263)),";");

var G__19264 = (i_19263 + (1));
i_19263 = G__19264;
continue;
} else {
}
break;
}

var n__4613__auto___19269 = cljs.core.count(exprs);
var i_19270 = (0);
while(true){
if((i_19270 < n__4613__auto___19269)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_19270) : params.call(null,i_19270)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_19270) : temps.call(null,i_19270)),";");

var G__19271 = (i_19270 + (1));
i_19270 = G__19271;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__17325){
var map__17326 = p__17325;
var map__17326__$1 = (((((!((map__17326 == null))))?(((((map__17326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17326):map__17326);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17326__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17326__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17326__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__17332_19282 = cljs.core.seq(bindings);
var chunk__17333_19283 = null;
var count__17334_19284 = (0);
var i__17335_19285 = (0);
while(true){
if((i__17335_19285 < count__17334_19284)){
var map__17356_19287 = chunk__17333_19283.cljs$core$IIndexed$_nth$arity$2(null,i__17335_19285);
var map__17356_19288__$1 = (((((!((map__17356_19287 == null))))?(((((map__17356_19287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17356_19287.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17356_19287):map__17356_19287);
var binding_19289 = map__17356_19288__$1;
var init_19290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17356_19288__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_19289)," = ",init_19290,";");


var G__19292 = seq__17332_19282;
var G__19293 = chunk__17333_19283;
var G__19294 = count__17334_19284;
var G__19295 = (i__17335_19285 + (1));
seq__17332_19282 = G__19292;
chunk__17333_19283 = G__19293;
count__17334_19284 = G__19294;
i__17335_19285 = G__19295;
continue;
} else {
var temp__5735__auto___19297 = cljs.core.seq(seq__17332_19282);
if(temp__5735__auto___19297){
var seq__17332_19298__$1 = temp__5735__auto___19297;
if(cljs.core.chunked_seq_QMARK_(seq__17332_19298__$1)){
var c__4556__auto___19299 = cljs.core.chunk_first(seq__17332_19298__$1);
var G__19300 = cljs.core.chunk_rest(seq__17332_19298__$1);
var G__19301 = c__4556__auto___19299;
var G__19302 = cljs.core.count(c__4556__auto___19299);
var G__19303 = (0);
seq__17332_19282 = G__19300;
chunk__17333_19283 = G__19301;
count__17334_19284 = G__19302;
i__17335_19285 = G__19303;
continue;
} else {
var map__17368_19304 = cljs.core.first(seq__17332_19298__$1);
var map__17368_19305__$1 = (((((!((map__17368_19304 == null))))?(((((map__17368_19304.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17368_19304.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17368_19304):map__17368_19304);
var binding_19306 = map__17368_19305__$1;
var init_19307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17368_19305__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_19306)," = ",init_19307,";");


var G__19312 = cljs.core.next(seq__17332_19298__$1);
var G__19313 = null;
var G__19314 = (0);
var G__19315 = (0);
seq__17332_19282 = G__19312;
chunk__17333_19283 = G__19313;
count__17334_19284 = G__19314;
i__17335_19285 = G__19315;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__17384){
var map__17386 = p__17384;
var map__17386__$1 = (((((!((map__17386 == null))))?(((((map__17386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17386):map__17386);
var expr = map__17386__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17386__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17386__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17386__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
if(cljs.core.not((function (){var fexpr__17426 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__17426.cljs$core$IFn$_invoke$arity$1 ? fexpr__17426.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__17426.call(null,tag));
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
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__17433 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__17433.cljs$core$IFn$_invoke$arity$1 ? fexpr__17433.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__17433.call(null,first_arg_tag));
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
var vec__17391 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
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
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__17380_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17380_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__17382_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__17382_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17391,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17391,(1),null);
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
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
var pimpl_19399 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_19399,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_19403 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_19403,args)),(((mfa_19403 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_19403,args)),"], 0))"], 0));
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
var G__17516 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__17515 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__17515.cljs$core$IFn$_invoke$arity$1 ? fexpr__17515.cljs$core$IFn$_invoke$arity$1(G__17516) : fexpr__17515.call(null,G__17516));
} else {
return and__4115__auto__;
}
})())){
var fprop_19431 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19431," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19431,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_19431," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_19431,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__17526){
var map__17527 = p__17526;
var map__17527__$1 = (((((!((map__17527 == null))))?(((((map__17527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17527):map__17527);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17527__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17527__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17527__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__17532){
var map__17533 = p__17532;
var map__17533__$1 = (((((!((map__17533 == null))))?(((((map__17533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17533):map__17533);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17533__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17533__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17533__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
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
var map__17562 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__17562__$1 = (((((!((map__17562 == null))))?(((((map__17562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17562):map__17562);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17562__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17562__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__17563 = options;
var map__17563__$1 = (((((!((map__17563 == null))))?(((((map__17563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17563):map__17563);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17563__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__17564 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__17583 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__17583__$1 = (((((!((map__17583 == null))))?(((((map__17583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17583):map__17583);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17583__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17583__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17564,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17564,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__17595_19452 = cljs.core.seq(libs_to_load);
var chunk__17596_19453 = null;
var count__17597_19454 = (0);
var i__17598_19455 = (0);
while(true){
if((i__17598_19455 < count__17597_19454)){
var lib_19461 = chunk__17596_19453.cljs$core$IIndexed$_nth$arity$2(null,i__17598_19455);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19461)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19461),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19461),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19461),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19461),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19461,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19461),"');");
}

}
}
}


var G__19463 = seq__17595_19452;
var G__19464 = chunk__17596_19453;
var G__19465 = count__17597_19454;
var G__19466 = (i__17598_19455 + (1));
seq__17595_19452 = G__19463;
chunk__17596_19453 = G__19464;
count__17597_19454 = G__19465;
i__17598_19455 = G__19466;
continue;
} else {
var temp__5735__auto___19467 = cljs.core.seq(seq__17595_19452);
if(temp__5735__auto___19467){
var seq__17595_19468__$1 = temp__5735__auto___19467;
if(cljs.core.chunked_seq_QMARK_(seq__17595_19468__$1)){
var c__4556__auto___19469 = cljs.core.chunk_first(seq__17595_19468__$1);
var G__19470 = cljs.core.chunk_rest(seq__17595_19468__$1);
var G__19471 = c__4556__auto___19469;
var G__19472 = cljs.core.count(c__4556__auto___19469);
var G__19473 = (0);
seq__17595_19452 = G__19470;
chunk__17596_19453 = G__19471;
count__17597_19454 = G__19472;
i__17598_19455 = G__19473;
continue;
} else {
var lib_19474 = cljs.core.first(seq__17595_19468__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_19474)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19474),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19474),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_19474),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19474),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_19474,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_19474),"');");
}

}
}
}


var G__19481 = cljs.core.next(seq__17595_19468__$1);
var G__19482 = null;
var G__19483 = (0);
var G__19484 = (0);
seq__17595_19452 = G__19481;
chunk__17596_19453 = G__19482;
count__17597_19454 = G__19483;
i__17598_19455 = G__19484;
continue;
}
} else {
}
}
break;
}

var seq__17648_19485 = cljs.core.seq(node_libs);
var chunk__17649_19486 = null;
var count__17650_19487 = (0);
var i__17651_19488 = (0);
while(true){
if((i__17651_19488 < count__17650_19487)){
var lib_19493 = chunk__17649_19486.cljs$core$IIndexed$_nth$arity$2(null,i__17651_19488);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19493)," = require('",lib_19493,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__19494 = seq__17648_19485;
var G__19495 = chunk__17649_19486;
var G__19496 = count__17650_19487;
var G__19497 = (i__17651_19488 + (1));
seq__17648_19485 = G__19494;
chunk__17649_19486 = G__19495;
count__17650_19487 = G__19496;
i__17651_19488 = G__19497;
continue;
} else {
var temp__5735__auto___19498 = cljs.core.seq(seq__17648_19485);
if(temp__5735__auto___19498){
var seq__17648_19499__$1 = temp__5735__auto___19498;
if(cljs.core.chunked_seq_QMARK_(seq__17648_19499__$1)){
var c__4556__auto___19500 = cljs.core.chunk_first(seq__17648_19499__$1);
var G__19501 = cljs.core.chunk_rest(seq__17648_19499__$1);
var G__19502 = c__4556__auto___19500;
var G__19503 = cljs.core.count(c__4556__auto___19500);
var G__19504 = (0);
seq__17648_19485 = G__19501;
chunk__17649_19486 = G__19502;
count__17650_19487 = G__19503;
i__17651_19488 = G__19504;
continue;
} else {
var lib_19506 = cljs.core.first(seq__17648_19499__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_19506)," = require('",lib_19506,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["');"], 0));


var G__19507 = cljs.core.next(seq__17648_19499__$1);
var G__19508 = null;
var G__19509 = (0);
var G__19510 = (0);
seq__17648_19485 = G__19507;
chunk__17649_19486 = G__19508;
count__17650_19487 = G__19509;
i__17651_19488 = G__19510;
continue;
}
} else {
}
}
break;
}

var seq__17654_19511 = cljs.core.seq(global_exports_libs);
var chunk__17655_19512 = null;
var count__17656_19513 = (0);
var i__17657_19514 = (0);
while(true){
if((i__17657_19514 < count__17656_19513)){
var lib_19515 = chunk__17655_19512.cljs$core$IIndexed$_nth$arity$2(null,i__17657_19514);
var map__17686_19516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_19515));
var map__17686_19517__$1 = (((((!((map__17686_19516 == null))))?(((((map__17686_19516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17686_19516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17686_19516):map__17686_19516);
var global_exports_19518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17686_19517__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_19518,lib_19515);


var G__19521 = seq__17654_19511;
var G__19522 = chunk__17655_19512;
var G__19523 = count__17656_19513;
var G__19524 = (i__17657_19514 + (1));
seq__17654_19511 = G__19521;
chunk__17655_19512 = G__19522;
count__17656_19513 = G__19523;
i__17657_19514 = G__19524;
continue;
} else {
var temp__5735__auto___19526 = cljs.core.seq(seq__17654_19511);
if(temp__5735__auto___19526){
var seq__17654_19530__$1 = temp__5735__auto___19526;
if(cljs.core.chunked_seq_QMARK_(seq__17654_19530__$1)){
var c__4556__auto___19531 = cljs.core.chunk_first(seq__17654_19530__$1);
var G__19532 = cljs.core.chunk_rest(seq__17654_19530__$1);
var G__19533 = c__4556__auto___19531;
var G__19534 = cljs.core.count(c__4556__auto___19531);
var G__19535 = (0);
seq__17654_19511 = G__19532;
chunk__17655_19512 = G__19533;
count__17656_19513 = G__19534;
i__17657_19514 = G__19535;
continue;
} else {
var lib_19536 = cljs.core.first(seq__17654_19530__$1);
var map__17707_19537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(lib_19536));
var map__17707_19538__$1 = (((((!((map__17707_19537 == null))))?(((((map__17707_19537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17707_19537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17707_19537):map__17707_19537);
var global_exports_19539 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17707_19538__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_19539,lib_19536);


var G__19540 = cljs.core.next(seq__17654_19530__$1);
var G__19541 = null;
var G__19542 = (0);
var G__19543 = (0);
seq__17654_19511 = G__19540;
chunk__17655_19512 = G__19541;
count__17656_19513 = G__19542;
i__17657_19514 = G__19543;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__17710){
var map__17711 = p__17710;
var map__17711__$1 = (((((!((map__17711 == null))))?(((((map__17711.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17711.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17711):map__17711);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17711__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__17724){
var map__17726 = p__17724;
var map__17726__$1 = (((((!((map__17726 == null))))?(((((map__17726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17726):map__17726);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17726__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__17732){
var map__17733 = p__17732;
var map__17733__$1 = (((((!((map__17733 == null))))?(((((map__17733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17733):map__17733);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17733__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17742_19564 = cljs.core.seq(protocols);
var chunk__17743_19565 = null;
var count__17744_19566 = (0);
var i__17745_19567 = (0);
while(true){
if((i__17745_19567 < count__17744_19566)){
var protocol_19571 = chunk__17743_19565.cljs$core$IIndexed$_nth$arity$2(null,i__17745_19567);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19571)),"}");


var G__19572 = seq__17742_19564;
var G__19573 = chunk__17743_19565;
var G__19574 = count__17744_19566;
var G__19575 = (i__17745_19567 + (1));
seq__17742_19564 = G__19572;
chunk__17743_19565 = G__19573;
count__17744_19566 = G__19574;
i__17745_19567 = G__19575;
continue;
} else {
var temp__5735__auto___19576 = cljs.core.seq(seq__17742_19564);
if(temp__5735__auto___19576){
var seq__17742_19578__$1 = temp__5735__auto___19576;
if(cljs.core.chunked_seq_QMARK_(seq__17742_19578__$1)){
var c__4556__auto___19582 = cljs.core.chunk_first(seq__17742_19578__$1);
var G__19583 = cljs.core.chunk_rest(seq__17742_19578__$1);
var G__19584 = c__4556__auto___19582;
var G__19585 = cljs.core.count(c__4556__auto___19582);
var G__19586 = (0);
seq__17742_19564 = G__19583;
chunk__17743_19565 = G__19584;
count__17744_19566 = G__19585;
i__17745_19567 = G__19586;
continue;
} else {
var protocol_19587 = cljs.core.first(seq__17742_19578__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19587)),"}");


var G__19588 = cljs.core.next(seq__17742_19578__$1);
var G__19589 = null;
var G__19590 = (0);
var G__19591 = (0);
seq__17742_19564 = G__19588;
chunk__17743_19565 = G__19589;
count__17744_19566 = G__19590;
i__17745_19567 = G__19591;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17810_19592 = cljs.core.seq(fields__$1);
var chunk__17811_19593 = null;
var count__17812_19594 = (0);
var i__17813_19595 = (0);
while(true){
if((i__17813_19595 < count__17812_19594)){
var fld_19596 = chunk__17811_19593.cljs$core$IIndexed$_nth$arity$2(null,i__17813_19595);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19596," = ",fld_19596,";");


var G__19597 = seq__17810_19592;
var G__19598 = chunk__17811_19593;
var G__19599 = count__17812_19594;
var G__19600 = (i__17813_19595 + (1));
seq__17810_19592 = G__19597;
chunk__17811_19593 = G__19598;
count__17812_19594 = G__19599;
i__17813_19595 = G__19600;
continue;
} else {
var temp__5735__auto___19602 = cljs.core.seq(seq__17810_19592);
if(temp__5735__auto___19602){
var seq__17810_19606__$1 = temp__5735__auto___19602;
if(cljs.core.chunked_seq_QMARK_(seq__17810_19606__$1)){
var c__4556__auto___19607 = cljs.core.chunk_first(seq__17810_19606__$1);
var G__19608 = cljs.core.chunk_rest(seq__17810_19606__$1);
var G__19609 = c__4556__auto___19607;
var G__19610 = cljs.core.count(c__4556__auto___19607);
var G__19611 = (0);
seq__17810_19592 = G__19608;
chunk__17811_19593 = G__19609;
count__17812_19594 = G__19610;
i__17813_19595 = G__19611;
continue;
} else {
var fld_19612 = cljs.core.first(seq__17810_19606__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19612," = ",fld_19612,";");


var G__19613 = cljs.core.next(seq__17810_19606__$1);
var G__19614 = null;
var G__19615 = (0);
var G__19616 = (0);
seq__17810_19592 = G__19613;
chunk__17811_19593 = G__19614;
count__17812_19594 = G__19615;
i__17813_19595 = G__19616;
continue;
}
} else {
}
}
break;
}

var seq__17833_19617 = cljs.core.seq(pmasks);
var chunk__17834_19618 = null;
var count__17835_19619 = (0);
var i__17836_19620 = (0);
while(true){
if((i__17836_19620 < count__17835_19619)){
var vec__17874_19625 = chunk__17834_19618.cljs$core$IIndexed$_nth$arity$2(null,i__17836_19620);
var pno_19626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17874_19625,(0),null);
var pmask_19627 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17874_19625,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19626,"$ = ",pmask_19627,";");


var G__19628 = seq__17833_19617;
var G__19629 = chunk__17834_19618;
var G__19630 = count__17835_19619;
var G__19631 = (i__17836_19620 + (1));
seq__17833_19617 = G__19628;
chunk__17834_19618 = G__19629;
count__17835_19619 = G__19630;
i__17836_19620 = G__19631;
continue;
} else {
var temp__5735__auto___19633 = cljs.core.seq(seq__17833_19617);
if(temp__5735__auto___19633){
var seq__17833_19634__$1 = temp__5735__auto___19633;
if(cljs.core.chunked_seq_QMARK_(seq__17833_19634__$1)){
var c__4556__auto___19636 = cljs.core.chunk_first(seq__17833_19634__$1);
var G__19639 = cljs.core.chunk_rest(seq__17833_19634__$1);
var G__19640 = c__4556__auto___19636;
var G__19641 = cljs.core.count(c__4556__auto___19636);
var G__19642 = (0);
seq__17833_19617 = G__19639;
chunk__17834_19618 = G__19640;
count__17835_19619 = G__19641;
i__17836_19620 = G__19642;
continue;
} else {
var vec__17890_19645 = cljs.core.first(seq__17833_19634__$1);
var pno_19646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890_19645,(0),null);
var pmask_19647 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17890_19645,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19646,"$ = ",pmask_19647,";");


var G__19651 = cljs.core.next(seq__17833_19634__$1);
var G__19652 = null;
var G__19653 = (0);
var G__19654 = (0);
seq__17833_19617 = G__19651;
chunk__17834_19618 = G__19652;
count__17835_19619 = G__19653;
i__17836_19620 = G__19654;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__17896){
var map__17897 = p__17896;
var map__17897__$1 = (((((!((map__17897 == null))))?(((((map__17897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17897):map__17897);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17897__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__17900_19663 = cljs.core.seq(protocols);
var chunk__17901_19664 = null;
var count__17902_19665 = (0);
var i__17903_19666 = (0);
while(true){
if((i__17903_19666 < count__17902_19665)){
var protocol_19667 = chunk__17901_19664.cljs$core$IIndexed$_nth$arity$2(null,i__17903_19666);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19667)),"}");


var G__19668 = seq__17900_19663;
var G__19669 = chunk__17901_19664;
var G__19670 = count__17902_19665;
var G__19671 = (i__17903_19666 + (1));
seq__17900_19663 = G__19668;
chunk__17901_19664 = G__19669;
count__17902_19665 = G__19670;
i__17903_19666 = G__19671;
continue;
} else {
var temp__5735__auto___19673 = cljs.core.seq(seq__17900_19663);
if(temp__5735__auto___19673){
var seq__17900_19677__$1 = temp__5735__auto___19673;
if(cljs.core.chunked_seq_QMARK_(seq__17900_19677__$1)){
var c__4556__auto___19678 = cljs.core.chunk_first(seq__17900_19677__$1);
var G__19679 = cljs.core.chunk_rest(seq__17900_19677__$1);
var G__19680 = c__4556__auto___19678;
var G__19681 = cljs.core.count(c__4556__auto___19678);
var G__19682 = (0);
seq__17900_19663 = G__19679;
chunk__17901_19664 = G__19680;
count__17902_19665 = G__19681;
i__17903_19666 = G__19682;
continue;
} else {
var protocol_19683 = cljs.core.first(seq__17900_19677__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_19683)),"}");


var G__19684 = cljs.core.next(seq__17900_19677__$1);
var G__19685 = null;
var G__19686 = (0);
var G__19687 = (0);
seq__17900_19663 = G__19684;
chunk__17901_19664 = G__19685;
count__17902_19665 = G__19686;
i__17903_19666 = G__19687;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__17922_19688 = cljs.core.seq(fields__$1);
var chunk__17923_19689 = null;
var count__17924_19690 = (0);
var i__17925_19691 = (0);
while(true){
if((i__17925_19691 < count__17924_19690)){
var fld_19694 = chunk__17923_19689.cljs$core$IIndexed$_nth$arity$2(null,i__17925_19691);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19694," = ",fld_19694,";");


var G__19696 = seq__17922_19688;
var G__19697 = chunk__17923_19689;
var G__19698 = count__17924_19690;
var G__19699 = (i__17925_19691 + (1));
seq__17922_19688 = G__19696;
chunk__17923_19689 = G__19697;
count__17924_19690 = G__19698;
i__17925_19691 = G__19699;
continue;
} else {
var temp__5735__auto___19700 = cljs.core.seq(seq__17922_19688);
if(temp__5735__auto___19700){
var seq__17922_19701__$1 = temp__5735__auto___19700;
if(cljs.core.chunked_seq_QMARK_(seq__17922_19701__$1)){
var c__4556__auto___19702 = cljs.core.chunk_first(seq__17922_19701__$1);
var G__19703 = cljs.core.chunk_rest(seq__17922_19701__$1);
var G__19704 = c__4556__auto___19702;
var G__19705 = cljs.core.count(c__4556__auto___19702);
var G__19706 = (0);
seq__17922_19688 = G__19703;
chunk__17923_19689 = G__19704;
count__17924_19690 = G__19705;
i__17925_19691 = G__19706;
continue;
} else {
var fld_19708 = cljs.core.first(seq__17922_19701__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_19708," = ",fld_19708,";");


var G__19709 = cljs.core.next(seq__17922_19701__$1);
var G__19710 = null;
var G__19711 = (0);
var G__19712 = (0);
seq__17922_19688 = G__19709;
chunk__17923_19689 = G__19710;
count__17924_19690 = G__19711;
i__17925_19691 = G__19712;
continue;
}
} else {
}
}
break;
}

var seq__17943_19713 = cljs.core.seq(pmasks);
var chunk__17944_19714 = null;
var count__17945_19715 = (0);
var i__17946_19716 = (0);
while(true){
if((i__17946_19716 < count__17945_19715)){
var vec__17962_19719 = chunk__17944_19714.cljs$core$IIndexed$_nth$arity$2(null,i__17946_19716);
var pno_19720 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17962_19719,(0),null);
var pmask_19721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17962_19719,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19720,"$ = ",pmask_19721,";");


var G__19724 = seq__17943_19713;
var G__19725 = chunk__17944_19714;
var G__19726 = count__17945_19715;
var G__19727 = (i__17946_19716 + (1));
seq__17943_19713 = G__19724;
chunk__17944_19714 = G__19725;
count__17945_19715 = G__19726;
i__17946_19716 = G__19727;
continue;
} else {
var temp__5735__auto___19728 = cljs.core.seq(seq__17943_19713);
if(temp__5735__auto___19728){
var seq__17943_19729__$1 = temp__5735__auto___19728;
if(cljs.core.chunked_seq_QMARK_(seq__17943_19729__$1)){
var c__4556__auto___19730 = cljs.core.chunk_first(seq__17943_19729__$1);
var G__19731 = cljs.core.chunk_rest(seq__17943_19729__$1);
var G__19732 = c__4556__auto___19730;
var G__19733 = cljs.core.count(c__4556__auto___19730);
var G__19734 = (0);
seq__17943_19713 = G__19731;
chunk__17944_19714 = G__19732;
count__17945_19715 = G__19733;
i__17946_19716 = G__19734;
continue;
} else {
var vec__17965_19736 = cljs.core.first(seq__17943_19729__$1);
var pno_19737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965_19736,(0),null);
var pmask_19738 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17965_19736,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_19737,"$ = ",pmask_19738,";");


var G__19740 = cljs.core.next(seq__17943_19729__$1);
var G__19741 = null;
var G__19742 = (0);
var G__19743 = (0);
seq__17943_19713 = G__19740;
chunk__17944_19714 = G__19741;
count__17945_19715 = G__19742;
i__17946_19716 = G__19743;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__17973){
var map__17974 = p__17973;
var map__17974__$1 = (((((!((map__17974 == null))))?(((((map__17974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17974):map__17974);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__17983){
var map__17984 = p__17983;
var map__17984__$1 = (((((!((map__17984 == null))))?(((((map__17984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__17984):map__17984);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17984__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__4115__auto__ = code;
if(cljs.core.truth_(and__4115__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__4115__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__15495__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__15495__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__18009 = cljs.core.seq(table);
var chunk__18010 = null;
var count__18011 = (0);
var i__18012 = (0);
while(true){
if((i__18012 < count__18011)){
var vec__18046 = chunk__18010.cljs$core$IIndexed$_nth$arity$2(null,i__18012);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18046,(1),null);
var ns_19751 = cljs.core.namespace(sym);
var name_19752 = cljs.core.name(sym);
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


var G__19754 = seq__18009;
var G__19755 = chunk__18010;
var G__19756 = count__18011;
var G__19757 = (i__18012 + (1));
seq__18009 = G__19754;
chunk__18010 = G__19755;
count__18011 = G__19756;
i__18012 = G__19757;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__18009);
if(temp__5735__auto__){
var seq__18009__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18009__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__18009__$1);
var G__19761 = cljs.core.chunk_rest(seq__18009__$1);
var G__19762 = c__4556__auto__;
var G__19763 = cljs.core.count(c__4556__auto__);
var G__19764 = (0);
seq__18009 = G__19761;
chunk__18010 = G__19762;
count__18011 = G__19763;
i__18012 = G__19764;
continue;
} else {
var vec__18063 = cljs.core.first(seq__18009__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18063,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18063,(1),null);
var ns_19765 = cljs.core.namespace(sym);
var name_19766 = cljs.core.name(sym);
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


var G__19767 = cljs.core.next(seq__18009__$1);
var G__19768 = null;
var G__19769 = (0);
var G__19770 = (0);
seq__18009 = G__19767;
chunk__18010 = G__19768;
count__18011 = G__19769;
i__18012 = G__19770;
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
var G__18072 = arguments.length;
switch (G__18072) {
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
var k_19779 = cljs.core.first(ks);
var vec__18073_19780 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_19779);
var top_19781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18073_19780,(0),null);
var prefix_SINGLEQUOTE__19782 = vec__18073_19780;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_19779)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__19782) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_19781)) || (cljs.core.contains_QMARK_(known_externs,top_19781)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19782)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_19781);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__19782)),";");
}
} else {
}

var m_19790 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_19779);
if(cljs.core.empty_QMARK_(m_19790)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__19782,m_19790,top_level,known_externs);
}

var G__19797 = cljs.core.next(ks);
ks = G__19797;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
