goog.provide('cljs.compiler');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler.es5_GT__EQ_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (lang){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.replace(cljs.core.name(lang),/^ecmascript/,"es"))], null);
}))),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ecmascript5","ecmascript5",342717552),new cljs.core.Keyword(null,"ecmascript5-strict","ecmascript5-strict",888234811),new cljs.core.Keyword(null,"ecmascript6","ecmascript6",723864898),new cljs.core.Keyword(null,"ecmascript6-strict","ecmascript6-strict",-786049555),new cljs.core.Keyword(null,"ecmascript-2015","ecmascript-2015",-902254444),new cljs.core.Keyword(null,"ecmascript6-typed","ecmascript6-typed",-1978203054),new cljs.core.Keyword(null,"ecmascript-2016","ecmascript-2016",471574729),new cljs.core.Keyword(null,"ecmascript-2017","ecmascript-2017",620145058),new cljs.core.Keyword(null,"ecmascript-2018","ecmascript-2018",-811131980),new cljs.core.Keyword(null,"ecmascript-2019","ecmascript-2019",-1872209910),new cljs.core.Keyword(null,"ecmascript-2020","ecmascript-2020",1452286525),new cljs.core.Keyword(null,"ecmascript-2021","ecmascript-2021",-724420359),new cljs.core.Keyword(null,"ecmascript-next","ecmascript-next",-1935155962)], null));
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
var map__15694 = s;
var map__15694__$1 = cljs.core.__destructure_map(map__15694);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15694__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15694__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__15697 = info;
var map__15698 = G__15697;
var map__15698__$1 = cljs.core.__destructure_map(map__15698);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15698__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__15697__$1 = G__15697;
while(true){
var d__$2 = d__$1;
var map__15703 = G__15697__$1;
var map__15703__$1 = cljs.core.__destructure_map(map__15703);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15703__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__16908 = (d__$2 + (1));
var G__16909 = shadow__$1;
d__$1 = G__16908;
G__15697__$1 = G__16909;
continue;
} else {
if(cljs.core.truth_(cljs.compiler.find_ns_starts_with.call(null, cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.hash_scope = (function cljs$compiler$hash_scope(s){
return cljs.core.hash_combine(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(s).cljs$core$IHash$_hash$arity$1(null, ),cljs.compiler.shadow_depth(s));
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__15708){
var map__15709 = p__15708;
var map__15709__$1 = cljs.core.__destructure_map(map__15709);
var name_var = map__15709__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15709__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15709__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"..","_DOT__DOT_");
var map__15712 = info;
var map__15712__$1 = cljs.core.__destructure_map(map__15712);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15712__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15712__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__15715 = [clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),".","$"),"$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__15715) : cljs.compiler.munge.call(null, G__15715));
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
var G__15726 = arguments.length;
switch (G__15726) {
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
if(cljs.analyzer.impl.cljs_map_QMARK_(s)){
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
var ms = (function (){var fexpr__15735 = new cljs.core.Var(function(){return cljs.core.munge_str;},new cljs.core.Symbol("cljs.core","munge-str","cljs.core/munge-str",-301346665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"munge-str","munge-str",-2042069652,null),"cljs/core.cljs",25,1,11982,11982,new cljs.core.Symbol(null,"string","string",-349010059,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),null,(cljs.core.truth_(cljs.core.munge_str)?cljs.core.munge_str.cljs$lang$test:null)]));
return (fexpr__15735.cljs$core$IFn$_invoke$arity$1 ? fexpr__15735.cljs$core$IFn$_invoke$arity$1(ss__$3) : fexpr__15735.call(null, ss__$3));
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
var G__15744 = cp;
switch (G__15744) {
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
var seq__15748_16919 = cljs.core.seq(s);
var chunk__15749_16920 = null;
var count__15750_16921 = (0);
var i__15751_16922 = (0);
while(true){
if((i__15751_16922 < count__15750_16921)){
var c_16923 = chunk__15749_16920.cljs$core$IIndexed$_nth$arity$2(null, i__15751_16922);
sb.append(cljs.compiler.escape_char(c_16923));


var G__16924 = seq__15748_16919;
var G__16925 = chunk__15749_16920;
var G__16926 = count__15750_16921;
var G__16927 = (i__15751_16922 + (1));
seq__15748_16919 = G__16924;
chunk__15749_16920 = G__16925;
count__15750_16921 = G__16926;
i__15751_16922 = G__16927;
continue;
} else {
var temp__5804__auto___16928 = cljs.core.seq(seq__15748_16919);
if(temp__5804__auto___16928){
var seq__15748_16929__$1 = temp__5804__auto___16928;
if(cljs.core.chunked_seq_QMARK_(seq__15748_16929__$1)){
var c__5525__auto___16930 = cljs.core.chunk_first(seq__15748_16929__$1);
var G__16931 = cljs.core.chunk_rest(seq__15748_16929__$1);
var G__16932 = c__5525__auto___16930;
var G__16933 = cljs.core.count(c__5525__auto___16930);
var G__16934 = (0);
seq__15748_16919 = G__16931;
chunk__15749_16920 = G__16932;
count__15750_16921 = G__16933;
i__15751_16922 = G__16934;
continue;
} else {
var c_16935 = cljs.core.first(seq__15748_16929__$1);
sb.append(cljs.compiler.escape_char(c_16935));


var G__16936 = cljs.core.next(seq__15748_16929__$1);
var G__16937 = null;
var G__16938 = (0);
var G__16939 = (0);
seq__15748_16919 = G__16936;
chunk__15749_16920 = G__16937;
count__15750_16921 = G__16938;
i__15751_16922 = G__16939;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15762 = cljs.core.get_global_hierarchy;
return (fexpr__15762.cljs$core$IFn$_invoke$arity$0 ? fexpr__15762.cljs$core$IFn$_invoke$arity$0() : fexpr__15762.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__15768_16940 = ast;
var map__15768_16941__$1 = cljs.core.__destructure_map(map__15768_16940);
var env_16942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15768_16941__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_16942))){
var map__15773_16943 = env_16942;
var map__15773_16944__$1 = cljs.core.__destructure_map(map__15773_16943);
var line_16945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15773_16944__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_16946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15773_16944__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (m){
var minfo = (function (){var G__15774 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core.truth_((function (){var G__15777 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__15776 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"binding","binding",539932593),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__15776.cljs$core$IFn$_invoke$arity$1 ? fexpr__15776.cljs$core$IFn$_invoke$arity$1(G__15777) : fexpr__15776.call(null, G__15777));
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15774,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast))));
} else {
return G__15774;
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_16945 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_16946)?(column_16946 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2((function (column__$1){
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
var G__15800 = arguments.length;
switch (G__15800) {
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
var args_arr__5751__auto__ = [];
var len__5726__auto___16956 = arguments.length;
var i__5727__auto___16957 = (0);
while(true){
if((i__5727__auto___16957 < len__5726__auto___16956)){
args_arr__5751__auto__.push((arguments[i__5727__auto___16957]));

var G__16959 = (i__5727__auto___16957 + (1));
i__5727__auto___16957 = G__16959;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

}
});

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1 = (function (a){
if((a == null)){
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(a)){
cljs.compiler.emit(a);
} else {
if(cljs.analyzer.impl.cljs_seq_QMARK_(a)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,a);
} else {
if(typeof a === 'function'){
(a.cljs$core$IFn$_invoke$arity$0 ? a.cljs$core$IFn$_invoke$arity$0() : a.call(null, ));
} else {
var s_16960 = (function (){var G__15811 = a;
if((!(typeof a === 'string'))){
return G__15811.toString();
} else {
return G__15811;
}
})();
var temp__5808__auto___16961 = cljs.compiler._STAR_source_map_data_STAR_;
if((temp__5808__auto___16961 == null)){
} else {
var sm_data_16962 = temp__5808__auto___16961;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(sm_data_16962,cljs.core.update,new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(function (p1__15788_SHARP_){
return (p1__15788_SHARP_ + s_16960.length);
}));
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s_16960], 0));

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

var seq__15820 = cljs.core.seq(xs);
var chunk__15821 = null;
var count__15822 = (0);
var i__15823 = (0);
while(true){
if((i__15823 < count__15822)){
var x = chunk__15821.cljs$core$IIndexed$_nth$arity$2(null, i__15823);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__16963 = seq__15820;
var G__16964 = chunk__15821;
var G__16965 = count__15822;
var G__16966 = (i__15823 + (1));
seq__15820 = G__16963;
chunk__15821 = G__16964;
count__15822 = G__16965;
i__15823 = G__16966;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15820);
if(temp__5804__auto__){
var seq__15820__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15820__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__15820__$1);
var G__16968 = cljs.core.chunk_rest(seq__15820__$1);
var G__16969 = c__5525__auto__;
var G__16970 = cljs.core.count(c__5525__auto__);
var G__16971 = (0);
seq__15820 = G__16968;
chunk__15821 = G__16969;
count__15822 = G__16970;
i__15823 = G__16971;
continue;
} else {
var x = cljs.core.first(seq__15820__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x);


var G__16972 = cljs.core.next(seq__15820__$1);
var G__16973 = null;
var G__16974 = (0);
var G__16975 = (0);
seq__15820 = G__16972;
chunk__15821 = G__16973;
count__15822 = G__16974;
i__15823 = G__16975;
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
(cljs.compiler.emits.cljs$lang$applyTo = (function (seq15794){
var G__15795 = cljs.core.first(seq15794);
var seq15794__$1 = cljs.core.next(seq15794);
var G__15796 = cljs.core.first(seq15794__$1);
var seq15794__$2 = cljs.core.next(seq15794__$1);
var G__15797 = cljs.core.first(seq15794__$2);
var seq15794__$3 = cljs.core.next(seq15794__$2);
var G__15798 = cljs.core.first(seq15794__$3);
var seq15794__$4 = cljs.core.next(seq15794__$3);
var G__15799 = cljs.core.first(seq15794__$4);
var seq15794__$5 = cljs.core.next(seq15794__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15795,G__15796,G__15797,G__15798,G__15799,seq15794__$5);
}));

(cljs.compiler.emits.cljs$lang$maxFixedArity = (5));

cljs.compiler._emitln = (function cljs$compiler$_emitln(){
cljs.core.newline.cljs$core$IFn$_invoke$arity$0();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__15845){
var map__15848 = p__15845;
var map__15848__$1 = cljs.core.__destructure_map(map__15848);
var m = map__15848__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15848__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});
cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var G__15862 = arguments.length;
switch (G__15862) {
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
var args_arr__5751__auto__ = [];
var len__5726__auto___16978 = arguments.length;
var i__5727__auto___16979 = (0);
while(true){
if((i__5727__auto___16979 < len__5726__auto___16978)){
args_arr__5751__auto__.push((arguments[i__5727__auto___16979]));

var G__16980 = (i__5727__auto___16979 + (1));
i__5727__auto___16979 = G__16980;
continue;
} else {
}
break;
}

var argseq__5752__auto__ = ((((5) < args_arr__5751__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5751__auto__.slice((5)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5752__auto__);

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

var seq__15897_16981 = cljs.core.seq(xs);
var chunk__15898_16982 = null;
var count__15899_16983 = (0);
var i__15900_16984 = (0);
while(true){
if((i__15900_16984 < count__15899_16983)){
var x_16985 = chunk__15898_16982.cljs$core$IIndexed$_nth$arity$2(null, i__15900_16984);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_16985);


var G__16986 = seq__15897_16981;
var G__16987 = chunk__15898_16982;
var G__16988 = count__15899_16983;
var G__16989 = (i__15900_16984 + (1));
seq__15897_16981 = G__16986;
chunk__15898_16982 = G__16987;
count__15899_16983 = G__16988;
i__15900_16984 = G__16989;
continue;
} else {
var temp__5804__auto___16990 = cljs.core.seq(seq__15897_16981);
if(temp__5804__auto___16990){
var seq__15897_16991__$1 = temp__5804__auto___16990;
if(cljs.core.chunked_seq_QMARK_(seq__15897_16991__$1)){
var c__5525__auto___16992 = cljs.core.chunk_first(seq__15897_16991__$1);
var G__16993 = cljs.core.chunk_rest(seq__15897_16991__$1);
var G__16994 = c__5525__auto___16992;
var G__16995 = cljs.core.count(c__5525__auto___16992);
var G__16996 = (0);
seq__15897_16981 = G__16993;
chunk__15898_16982 = G__16994;
count__15899_16983 = G__16995;
i__15900_16984 = G__16996;
continue;
} else {
var x_16997 = cljs.core.first(seq__15897_16991__$1);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(x_16997);


var G__16998 = cljs.core.next(seq__15897_16991__$1);
var G__16999 = null;
var G__17000 = (0);
var G__17001 = (0);
seq__15897_16981 = G__16998;
chunk__15898_16982 = G__16999;
count__15899_16983 = G__17000;
i__15900_16984 = G__17001;
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
(cljs.compiler.emitln.cljs$lang$applyTo = (function (seq15855){
var G__15856 = cljs.core.first(seq15855);
var seq15855__$1 = cljs.core.next(seq15855);
var G__15857 = cljs.core.first(seq15855__$1);
var seq15855__$2 = cljs.core.next(seq15855__$1);
var G__15858 = cljs.core.first(seq15855__$2);
var seq15855__$3 = cljs.core.next(seq15855__$2);
var G__15859 = cljs.core.first(seq15855__$3);
var seq15855__$4 = cljs.core.next(seq15855__$3);
var G__15860 = cljs.core.first(seq15855__$4);
var seq15855__$5 = cljs.core.next(seq15855__$4);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15856,G__15857,G__15858,G__15859,G__15860,seq15855__$5);
}));

(cljs.compiler.emitln.cljs$lang$maxFixedArity = (5));

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15922_17002 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15923_17003 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15924_17004 = true;
var _STAR_print_fn_STAR__temp_val__15925_17005 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15924_17004);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15925_17005);

try{cljs.compiler.emit(expr);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15923_17003);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15922_17002);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
});
if((typeof cljs !== 'undefined') && (typeof cljs.compiler !== 'undefined') && (typeof cljs.compiler.emit_constant_STAR_ !== 'undefined')){
} else {
cljs.compiler.emit_constant_STAR_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15930 = cljs.core.get_global_hierarchy;
return (fexpr__15930.cljs$core$IFn$_invoke$arity$0 ? fexpr__15930.cljs$core$IFn$_invoke$arity$0() : fexpr__15930.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant*"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}









cljs.compiler.all_distinct_QMARK_ = (function cljs$compiler$all_distinct_QMARK_(xs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct_QMARK_,xs);
});
cljs.compiler.emit_constant_no_meta = (function cljs$compiler$emit_constant_no_meta(x){
if(cljs.analyzer.impl.cljs_seq_QMARK_(x)){
return (cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_list.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_list.call(null, x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.core.record_QMARK_(x)){
var vec__15934 = cljs.analyzer.record_ns_PLUS_name(x);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15934,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15934,(1),null);
var G__15937 = ns;
var G__15938 = name;
var G__15939 = (function (){
var G__15940 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,x);
return (cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__15940) : cljs.compiler.emit_constant.call(null, G__15940));
});
return (cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_record_value.cljs$core$IFn$_invoke$arity$3(G__15937,G__15938,G__15939) : cljs.compiler.emit_record_value.call(null, G__15937,G__15938,G__15939));
} else {
if(cljs.analyzer.impl.cljs_map_QMARK_(x)){
var G__15942 = cljs.core.keys(x);
var G__15943 = cljs.core.vals(x);
var G__15944 = cljs.compiler.emit_constants_comma_sep;
var G__15945 = cljs.compiler.all_distinct_QMARK_;
return (cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4 ? cljs.compiler.emit_map.cljs$core$IFn$_invoke$arity$4(G__15942,G__15943,G__15944,G__15945) : cljs.compiler.emit_map.call(null, G__15942,G__15943,G__15944,G__15945));
} else {
if(cljs.analyzer.impl.cljs_vector_QMARK_(x)){
return (cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_vector.cljs$core$IFn$_invoke$arity$2(x,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_vector.call(null, x,cljs.compiler.emit_constants_comma_sep));
} else {
if(cljs.analyzer.impl.cljs_set_QMARK_(x)){
return (cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3 ? cljs.compiler.emit_set.cljs$core$IFn$_invoke$arity$3(x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_) : cljs.compiler.emit_set.call(null, x,cljs.compiler.emit_constants_comma_sep,cljs.compiler.all_distinct_QMARK_));
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
var G__15949 = (function (){
return cljs.compiler.emit_constant_no_meta(v);
});
var G__15950 = (function (){
return cljs.compiler.emit_constant_no_meta(m);
});
return (cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_with_meta.cljs$core$IFn$_invoke$arity$2(G__15949,G__15950) : cljs.compiler.emit_with_meta.call(null, G__15949,G__15950));
} else {
return cljs.compiler.emit_constant_no_meta(v);
}
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (x){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["failed compiling constant: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"; ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(x)], 0))," is not a valid ClojureScript constant."].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"constant","constant",-379609303),x,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"compilation","compilation",-1328774561)], null));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("null");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, Number,(function (x){
if(cljs.core.truth_(isNaN(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("NaN");
} else {
if(cljs.core.not(isFinite(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((((x > (0)))?"Infinity":"-Infinity"));
} else {
if((((x === (0))) && ((((1) / x) < (0))))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(-0)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("(",x,")");

}
}
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x)));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(x)?"true":"false"));
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(new RegExp(\"\"))");
} else {
var vec__15966 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15966,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15966,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15966,(2),null);
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
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs.core.Keyword,(function (x){
var temp__5802__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
var G__15988 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__15988) : x.call(null, G__15988));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2("cljs.core.",value);
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs.core.Symbol,(function (x){
var temp__5802__auto__ = (function (){var and__5000__auto__ = new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)));
if(cljs.core.truth_(and__5000__auto__)){
var G__16000 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__16000) : x.call(null, G__16000));
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5802__auto__)){
var value = temp__5802__auto__;
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
cljs.compiler.emit_inst = (function cljs$compiler$emit_inst(inst_ms){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("new Date(",inst_ms,")");
});
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, Date,(function (date){
return cljs.compiler.emit_inst(date.getTime());
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs.core.UUID,(function (uuid){
var uuid_str = uuid.toString();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.UUID(\"",uuid_str,"\", ",cljs.core.hash(uuid_str),")");
}));
cljs.compiler.emit_constant_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, cljs.tagged_literals.JSValue,(function (v){
var items = v.val;
if(cljs.core.map_QMARK_(items)){
var G__16060 = items;
var G__16061 = (function (p1__16056_SHARP_){
return (function (){
return cljs.compiler.emit_constant(p1__16056_SHARP_);
});
});
return (cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_object.cljs$core$IFn$_invoke$arity$2(G__16060,G__16061) : cljs.compiler.emit_js_object.call(null, G__16060,G__16061));
} else {
return (cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.emit_js_array.cljs$core$IFn$_invoke$arity$2(items,cljs.compiler.emit_constants_comma_sep) : cljs.compiler.emit_js_array.call(null, items,cljs.compiler.emit_constants_comma_sep));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_var = (function cljs$compiler$emit_var(p__16068){
var map__16069 = p__16068;
var map__16069__$1 = cljs.core.__destructure_map(map__16069);
var ast = map__16069__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16069__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16069__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16069__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var temp__5802__auto__ = new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292).cljs$core$IFn$_invoke$arity$1(ast);
if(cljs.core.truth_(temp__5802__auto__)){
var const_expr = temp__5802__auto__;
return cljs.compiler.emit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(const_expr,new cljs.core.Keyword(null,"env","env",-1815813235),env));
} else {
var map__16071 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__16071__$1 = cljs.core.__destructure_map(map__16071);
var cenv = map__16071__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16071__$1,new cljs.core.Keyword(null,"options","options",99638489));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var or__5002__auto__ = js_module_name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var reserved = (function (){var G__16074 = cljs.compiler.js_reserved;
if(cljs.core.truth_((function (){var and__5000__auto__ = (function (){var G__16075 = new cljs.core.Keyword(null,"language-out","language-out",334619882).cljs$core$IFn$_invoke$arity$1(options);
return (cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.es5_GT__EQ_.cljs$core$IFn$_invoke$arity$1(G__16075) : cljs.compiler.es5_GT__EQ_.call(null, G__16075));
})();
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.namespace(var_name) == null)));
} else {
return and__5000__auto__;
}
})())){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(G__16074,cljs.analyzer.es5_allowed);
} else {
return G__16074;
}
})();
var js_module = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cenv,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-namespaces","js-namespaces",-471353612),(function (){var or__5002__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.name(var_name);
}
})()], null));
var info__$2 = (function (){var G__16080 = info__$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(G__16080,reserved);
} else {
return G__16080;
}
})();
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var G__16081_17018 = new cljs.core.Keyword(null,"module-type","module-type",1392760304).cljs$core$IFn$_invoke$arity$1(js_module);
var G__16081_17019__$1 = (((G__16081_17018 instanceof cljs.core.Keyword))?G__16081_17018.fqn:null);
switch (G__16081_17019__$1) {
case "commonjs":
if(cljs.core.truth_(cljs.core.namespace(var_name))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),reserved),"[\"default\"].",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_name),reserved),"[\"default\"]");
}

break;
case "es6":
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.namespace(var_name);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("default",cljs.core.name(var_name));
} else {
return and__5000__auto__;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"var","var",-769682797),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"binding","binding",539932593),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"js-var","js-var",-1177899142),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"local","local",-1497766724),(function (expr){
return cljs.compiler.emit_var(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"the-var","the-var",1428415613),(function (p__16084){
var map__16085 = p__16084;
var map__16085__$1 = cljs.core.__destructure_map(map__16085);
var arg = map__16085__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16085__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16085__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16085__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16085__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__16088 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__16088__$1 = cljs.core.__destructure_map(map__16088);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16088__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_with_meta = (function cljs$compiler$emit_with_meta(expr,meta){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.with_meta(",expr,",",meta,")");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"with-meta","with-meta",-1566856820),(function (p__16094){
var map__16095 = p__16094;
var map__16095__$1 = cljs.core.__destructure_map(map__16095);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16095__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16095__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16095__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_with_meta(expr,meta);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
var keys__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,keys);
return ((cljs.core.every_QMARK_((function (p1__16103_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16103_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),keys__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys__$1)),cljs.core.count(keys__$1))));
});
cljs.compiler.emit_map = (function cljs$compiler$emit_map(keys,vals,comma_sep,distinct_keys_QMARK_){
if((cljs.core.count(keys) === (0))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentArrayMap.EMPTY");
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_((distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_keys_QMARK_.cljs$core$IFn$_invoke$arity$1(keys) : distinct_keys_QMARK_.call(null, keys)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",(function (){var G__16122 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16122) : comma_sep.call(null, G__16122));
})(),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentArrayMap.createAsIfByAssoc([",(function (){var G__16125 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals);
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16125) : comma_sep.call(null, G__16125));
})(),"])");
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("cljs.core.PersistentHashMap.fromArrays([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(keys) : comma_sep.call(null, keys)),"],[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(vals) : comma_sep.call(null, vals)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"map","map",1371690461),(function (p__16126){
var map__16127 = p__16126;
var map__16127__$1 = cljs.core.__destructure_map(map__16127);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16127__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16127__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16127__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_map(keys,vals,cljs.compiler.comma_sep,cljs.compiler.distinct_keys_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_list = (function cljs$compiler$emit_list(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.List.EMPTY");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.list(",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null, items)),")");
}
});
cljs.compiler.emit_vector = (function cljs$compiler$emit_vector(items,comma_sep){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentVector.EMPTY");
} else {
var cnt = cljs.core.count(items);
if((cnt < (32))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentVector(null, ",cnt,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null, items)),"], null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentVector.fromArray([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null, items)),"], true)");
}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__16132){
var map__16133 = p__16132;
var map__16133__$1 = cljs.core.__destructure_map(map__16133);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16133__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16133__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_vector(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
var items__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.unwrap_quote,items);
return ((cljs.core.every_QMARK_((function (p1__16136_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16136_SHARP_),new cljs.core.Keyword(null,"const","const",1709929842));
}),items__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items__$1)),cljs.core.count(items__$1))));
});
cljs.compiler.emit_set = (function cljs$compiler$emit_set(items,comma_sep,distinct_constants_QMARK_){
if(cljs.core.empty_QMARK_(items)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("cljs.core.PersistentHashSet.EMPTY");
} else {
if(cljs.core.truth_((distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1 ? distinct_constants_QMARK_.cljs$core$IFn$_invoke$arity$1(items) : distinct_constants_QMARK_.call(null, items)))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",(function (){var G__16139 = cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"));
return (comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(G__16139) : comma_sep.call(null, G__16139));
})(),"], null), null)");
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("cljs.core.PersistentHashSet.createAsIfByAssoc([",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null, items)),"])");

}
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"set","set",304602554),(function (p__16142){
var map__16143 = p__16142;
var map__16143__$1 = cljs.core.__destructure_map(map__16143);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16143__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16143__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_set(items,cljs.compiler.comma_sep,cljs.compiler.distinct_constants_QMARK_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_js_object = (function cljs$compiler$emit_js_object(items,emit_js_object_val){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("({");

var temp__5804__auto___17040 = cljs.core.seq(items);
if(temp__5804__auto___17040){
var items_17041__$1 = temp__5804__auto___17040;
var vec__16146_17042 = items_17041__$1;
var seq__16147_17043 = cljs.core.seq(vec__16146_17042);
var first__16148_17044 = cljs.core.first(seq__16147_17043);
var seq__16147_17045__$1 = cljs.core.next(seq__16147_17043);
var vec__16149_17046 = first__16148_17044;
var k_17047 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149_17046,(0),null);
var v_17048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16149_17046,(1),null);
var r_17049 = seq__16147_17045__$1;
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4("\"",cljs.core.name(k_17047),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17048) : emit_js_object_val.call(null, v_17048)));

var seq__16152_17050 = cljs.core.seq(r_17049);
var chunk__16153_17051 = null;
var count__16154_17052 = (0);
var i__16155_17053 = (0);
while(true){
if((i__16155_17053 < count__16154_17052)){
var vec__16162_17054 = chunk__16153_17051.cljs$core$IIndexed$_nth$arity$2(null, i__16155_17053);
var k_17055__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162_17054,(0),null);
var v_17056__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16162_17054,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_17055__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17056__$1) : emit_js_object_val.call(null, v_17056__$1)));


var G__17059 = seq__16152_17050;
var G__17060 = chunk__16153_17051;
var G__17061 = count__16154_17052;
var G__17062 = (i__16155_17053 + (1));
seq__16152_17050 = G__17059;
chunk__16153_17051 = G__17060;
count__16154_17052 = G__17061;
i__16155_17053 = G__17062;
continue;
} else {
var temp__5804__auto___17063__$1 = cljs.core.seq(seq__16152_17050);
if(temp__5804__auto___17063__$1){
var seq__16152_17065__$1 = temp__5804__auto___17063__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16152_17065__$1)){
var c__5525__auto___17067 = cljs.core.chunk_first(seq__16152_17065__$1);
var G__17068 = cljs.core.chunk_rest(seq__16152_17065__$1);
var G__17069 = c__5525__auto___17067;
var G__17070 = cljs.core.count(c__5525__auto___17067);
var G__17071 = (0);
seq__16152_17050 = G__17068;
chunk__16153_17051 = G__17069;
count__16154_17052 = G__17070;
i__16155_17053 = G__17071;
continue;
} else {
var vec__16165_17072 = cljs.core.first(seq__16152_17065__$1);
var k_17073__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165_17072,(0),null);
var v_17074__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16165_17072,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(", \"",cljs.core.name(k_17073__$1),"\": ",(emit_js_object_val.cljs$core$IFn$_invoke$arity$1 ? emit_js_object_val.cljs$core$IFn$_invoke$arity$1(v_17074__$1) : emit_js_object_val.call(null, v_17074__$1)));


var G__17075 = cljs.core.next(seq__16152_17065__$1);
var G__17076 = null;
var G__17077 = (0);
var G__17078 = (0);
seq__16152_17050 = G__17075;
chunk__16153_17051 = G__17076;
count__16154_17052 = G__17077;
i__16155_17053 = G__17078;
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
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("[",(comma_sep.cljs$core$IFn$_invoke$arity$1 ? comma_sep.cljs$core$IFn$_invoke$arity$1(items) : comma_sep.call(null, items)),"]");
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"js-object","js-object",1830199158),(function (p__16168){
var map__16169 = p__16168;
var map__16169__$1 = cljs.core.__destructure_map(map__16169);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16169__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16169__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16169__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_object(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,keys,vals),cljs.core.identity);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"js-array","js-array",-1210185421),(function (p__16172){
var map__16173 = p__16172;
var map__16173__$1 = cljs.core.__destructure_map(map__16173);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16173__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_js_array(items,cljs.compiler.comma_sep);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_record_value = (function cljs$compiler$emit_record_value(ns,name,items){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(ns,".map__GT_",name,"(",items,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"quote","quote",-262615245),(function (p__16176){
var map__16177 = p__16176;
var map__16177__$1 = cljs.core.__destructure_map(map__16177);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16177__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
return cljs.compiler.emit(expr);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"const","const",1709929842),(function (p__16178){
var map__16179 = p__16178;
var map__16179__$1 = cljs.core.__destructure_map(map__16179);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16179__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16179__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emit_constant(form);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(expr){
var map__16182 = cljs.analyzer.unwrap_quote(expr);
var map__16182__$1 = cljs.core.__destructure_map(map__16182);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16182__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16182__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16182__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = (function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842));
if(and__5000__auto__){
var and__5000__auto____$1 = form;
if(cljs.core.truth_(and__5000__auto____$1)){
return (!(((((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,"")))) || (((typeof form === 'number') && ((form === (0))))))));
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return (cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.truthy_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.truthy_constant_QMARK_.call(null, const_expr));
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(expr){
var map__16225 = cljs.analyzer.unwrap_quote(expr);
var map__16225__$1 = cljs.core.__destructure_map(map__16225);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16225__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16225__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var const_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16225__$1,new cljs.core.Keyword(null,"const-expr","const-expr",-1379382292));
var or__5002__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"const","const",1709929842))) && (((form === false) || ((form == null)))));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var and__5000__auto__ = (!((const_expr == null)));
if(and__5000__auto__){
return (cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.falsey_constant_QMARK_.cljs$core$IFn$_invoke$arity$1(const_expr) : cljs.compiler.falsey_constant_QMARK_.call(null, const_expr));
} else {
return and__5000__auto__;
}
}
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__5002__auto__ = (function (){var fexpr__16231 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
return (fexpr__16231.cljs$core$IFn$_invoke$arity$1 ? fexpr__16231.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16231.call(null, tag));
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"if","if",-458814265),(function (p__16232){
var map__16233 = p__16232;
var map__16233__$1 = cljs.core.__destructure_map(map__16233);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16233__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16233__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16233__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16233__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16233__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__5002__auto__ = unchecked;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"case","case",1143702196),(function (p__16242){
var map__16243 = p__16242;
var map__16243__$1 = cljs.core.__destructure_map(map__16243);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"test","test",577538877));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16243__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__16248_17103 = cljs.core.seq(nodes);
var chunk__16249_17104 = null;
var count__16250_17105 = (0);
var i__16251_17106 = (0);
while(true){
if((i__16251_17106 < count__16250_17105)){
var map__16266_17107 = chunk__16249_17104.cljs$core$IIndexed$_nth$arity$2(null, i__16251_17106);
var map__16266_17108__$1 = cljs.core.__destructure_map(map__16266_17107);
var ts_17109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266_17108__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16267_17110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16266_17108__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16267_17111__$1 = cljs.core.__destructure_map(map__16267_17110);
var then_17112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16267_17111__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16269_17113 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_17109));
var chunk__16270_17114 = null;
var count__16271_17115 = (0);
var i__16272_17116 = (0);
while(true){
if((i__16272_17116 < count__16271_17115)){
var test_17117 = chunk__16270_17114.cljs$core$IIndexed$_nth$arity$2(null, i__16272_17116);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17117,":");


var G__17118 = seq__16269_17113;
var G__17119 = chunk__16270_17114;
var G__17120 = count__16271_17115;
var G__17121 = (i__16272_17116 + (1));
seq__16269_17113 = G__17118;
chunk__16270_17114 = G__17119;
count__16271_17115 = G__17120;
i__16272_17116 = G__17121;
continue;
} else {
var temp__5804__auto___17122 = cljs.core.seq(seq__16269_17113);
if(temp__5804__auto___17122){
var seq__16269_17123__$1 = temp__5804__auto___17122;
if(cljs.core.chunked_seq_QMARK_(seq__16269_17123__$1)){
var c__5525__auto___17124 = cljs.core.chunk_first(seq__16269_17123__$1);
var G__17125 = cljs.core.chunk_rest(seq__16269_17123__$1);
var G__17126 = c__5525__auto___17124;
var G__17127 = cljs.core.count(c__5525__auto___17124);
var G__17128 = (0);
seq__16269_17113 = G__17125;
chunk__16270_17114 = G__17126;
count__16271_17115 = G__17127;
i__16272_17116 = G__17128;
continue;
} else {
var test_17129 = cljs.core.first(seq__16269_17123__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17129,":");


var G__17130 = cljs.core.next(seq__16269_17123__$1);
var G__17131 = null;
var G__17132 = (0);
var G__17133 = (0);
seq__16269_17113 = G__17130;
chunk__16270_17114 = G__17131;
count__16271_17115 = G__17132;
i__16272_17116 = G__17133;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_17112);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_17112);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__17134 = seq__16248_17103;
var G__17135 = chunk__16249_17104;
var G__17136 = count__16250_17105;
var G__17137 = (i__16251_17106 + (1));
seq__16248_17103 = G__17134;
chunk__16249_17104 = G__17135;
count__16250_17105 = G__17136;
i__16251_17106 = G__17137;
continue;
} else {
var temp__5804__auto___17138 = cljs.core.seq(seq__16248_17103);
if(temp__5804__auto___17138){
var seq__16248_17139__$1 = temp__5804__auto___17138;
if(cljs.core.chunked_seq_QMARK_(seq__16248_17139__$1)){
var c__5525__auto___17140 = cljs.core.chunk_first(seq__16248_17139__$1);
var G__17141 = cljs.core.chunk_rest(seq__16248_17139__$1);
var G__17142 = c__5525__auto___17140;
var G__17143 = cljs.core.count(c__5525__auto___17140);
var G__17144 = (0);
seq__16248_17103 = G__17141;
chunk__16249_17104 = G__17142;
count__16250_17105 = G__17143;
i__16251_17106 = G__17144;
continue;
} else {
var map__16277_17145 = cljs.core.first(seq__16248_17139__$1);
var map__16277_17146__$1 = cljs.core.__destructure_map(map__16277_17145);
var ts_17147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16277_17146__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var map__16278_17148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16277_17146__$1,new cljs.core.Keyword(null,"then","then",460598070));
var map__16278_17149__$1 = cljs.core.__destructure_map(map__16278_17148);
var then_17150 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16278_17149__$1,new cljs.core.Keyword(null,"then","then",460598070));
var seq__16279_17151 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),ts_17147));
var chunk__16280_17152 = null;
var count__16281_17153 = (0);
var i__16282_17154 = (0);
while(true){
if((i__16282_17154 < count__16281_17153)){
var test_17155 = chunk__16280_17152.cljs$core$IIndexed$_nth$arity$2(null, i__16282_17154);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17155,":");


var G__17156 = seq__16279_17151;
var G__17157 = chunk__16280_17152;
var G__17158 = count__16281_17153;
var G__17159 = (i__16282_17154 + (1));
seq__16279_17151 = G__17156;
chunk__16280_17152 = G__17157;
count__16281_17153 = G__17158;
i__16282_17154 = G__17159;
continue;
} else {
var temp__5804__auto___17160__$1 = cljs.core.seq(seq__16279_17151);
if(temp__5804__auto___17160__$1){
var seq__16279_17161__$1 = temp__5804__auto___17160__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16279_17161__$1)){
var c__5525__auto___17162 = cljs.core.chunk_first(seq__16279_17161__$1);
var G__17164 = cljs.core.chunk_rest(seq__16279_17161__$1);
var G__17165 = c__5525__auto___17162;
var G__17166 = cljs.core.count(c__5525__auto___17162);
var G__17167 = (0);
seq__16279_17151 = G__17164;
chunk__16280_17152 = G__17165;
count__16281_17153 = G__17166;
i__16282_17154 = G__17167;
continue;
} else {
var test_17168 = cljs.core.first(seq__16279_17161__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",test_17168,":");


var G__17169 = cljs.core.next(seq__16279_17161__$1);
var G__17170 = null;
var G__17171 = (0);
var G__17172 = (0);
seq__16279_17151 = G__17169;
chunk__16280_17152 = G__17170;
count__16281_17153 = G__17171;
i__16282_17154 = G__17172;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(gs,"=",then_17150);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(then_17150);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("break;");


var G__17173 = cljs.core.next(seq__16248_17139__$1);
var G__17174 = null;
var G__17175 = (0);
var G__17176 = (0);
seq__16248_17103 = G__17173;
chunk__16249_17104 = G__17174;
count__16250_17105 = G__17175;
i__16251_17106 = G__17176;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__16283){
var map__16284 = p__16283;
var map__16284__$1 = cljs.core.__destructure_map(map__16284);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,new cljs.core.Keyword(null,"exception","exception",-335277064));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16284__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
return ["!",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16296 = env;
var G__16297 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(t,(1));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16296,G__16297) : cljs.compiler.resolve_type.call(null, G__16296,G__16297));
})())].join('');
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"{"))){
return t;
} else {
if(cljs.core.truth_(goog.string.startsWith(t,"function"))){
var idx = t.lastIndexOf(":");
var vec__16299 = (((!(((-1) === idx))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),idx),cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(idx + (1)),cljs.core.count(t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16299,(0),null);
var rstr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16299,(1),null);
var ret_t = (cljs.core.truth_(rstr)?(cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,rstr) : cljs.compiler.resolve_type.call(null, env,rstr)):null);
var axstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(fstr,(9),(cljs.core.count(fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_(axstr))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__16287_SHARP_){
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(env,p1__16287_SHARP_) : cljs.compiler.resolve_type.call(null, env,p1__16287_SHARP_));
}),clojure.string.trim),clojure.string.split.cljs$core$IFn$_invoke$arity$2(axstr,/,/)));
var G__16316 = ["function(",clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",args_ts),")"].join('');
if(cljs.core.truth_(ret_t)){
return [G__16316,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ret_t)].join('');
} else {
return G__16316;
}
} else {
if(cljs.core.truth_(goog.string.endsWith(t,"="))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16325 = env;
var G__16326 = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(t,(0),(cljs.core.count(t) - (1)));
return (cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2 ? cljs.compiler.resolve_type.cljs$core$IFn$_invoke$arity$2(G__16325,G__16326) : cljs.compiler.resolve_type.call(null, G__16325,G__16326));
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
return ["{",clojure.string.join.cljs$core$IFn$_invoke$arity$2("|",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16349_SHARP_){
return cljs.compiler.resolve_type(env,p1__16349_SHARP_);
}),xs)),"}"].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find(/@param/,line))){
var vec__16373 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16374 = cljs.core.seq(vec__16373);
var first__16375 = cljs.core.first(seq__16374);
var seq__16374__$1 = cljs.core.next(seq__16374);
var p = first__16375;
var first__16375__$1 = cljs.core.first(seq__16374__$1);
var seq__16374__$2 = cljs.core.next(seq__16374__$1);
var ts = first__16375__$1;
var first__16375__$2 = cljs.core.first(seq__16374__$2);
var seq__16374__$3 = cljs.core.next(seq__16374__$2);
var n = first__16375__$2;
var xs = seq__16374__$3;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@param",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types(env,ts),cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find(/@return/,line))){
var vec__16380 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.trim,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.trim(line),/ /));
var seq__16381 = cljs.core.seq(vec__16380);
var first__16382 = cljs.core.first(seq__16381);
var seq__16381__$1 = cljs.core.next(seq__16381);
var p = first__16382;
var first__16382__$1 = cljs.core.first(seq__16381__$1);
var seq__16381__$2 = cljs.core.next(seq__16381__$1);
var ts = first__16382__$1;
var xs = seq__16381__$2;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("@return",p);
if(and__5000__auto__){
var and__5000__auto____$1 = ts;
if(cljs.core.truth_(and__5000__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})())){
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
var G__16387 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"closure-warnings","closure-warnings",1362834211),new cljs.core.Keyword(null,"check-types","check-types",-833794607)], null));
var fexpr__16386 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
return (fexpr__16386.cljs$core$IFn$_invoke$arity$1 ? fexpr__16386.cljs$core$IFn$_invoke$arity$1(G__16387) : fexpr__16386.call(null, G__16387));
});
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(var_args){
var G__16394 = arguments.length;
switch (G__16394) {
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
var vec__16418 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16389_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())){
return cljs.compiler.munge_param_return(env,p1__16389_SHARP_);
} else {
return p1__16389_SHARP_;
}
}),clojure.string.split_lines(e));
var seq__16419 = cljs.core.seq(vec__16418);
var first__16420 = cljs.core.first(seq__16419);
var seq__16419__$1 = cljs.core.next(seq__16419);
var x = first__16420;
var ys = seq__16419__$1;
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(x,"*/","* /"));

var seq__16421 = cljs.core.seq(ys);
var chunk__16422 = null;
var count__16423 = (0);
var i__16424 = (0);
while(true){
if((i__16424 < count__16423)){
var next_line = chunk__16422.cljs$core$IIndexed$_nth$arity$2(null, i__16424);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__17204 = seq__16421;
var G__17205 = chunk__16422;
var G__17206 = count__16423;
var G__17207 = (i__16424 + (1));
seq__16421 = G__17204;
chunk__16422 = G__17205;
count__16423 = G__17206;
i__16424 = G__17207;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16421);
if(temp__5804__auto__){
var seq__16421__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16421__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16421__$1);
var G__17209 = cljs.core.chunk_rest(seq__16421__$1);
var G__17210 = c__5525__auto__;
var G__17211 = cljs.core.count(c__5525__auto__);
var G__17212 = (0);
seq__16421 = G__17209;
chunk__16422 = G__17210;
count__16423 = G__17211;
i__16424 = G__17212;
continue;
} else {
var next_line = cljs.core.first(seq__16421__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(" * ",clojure.string.replace(clojure.string.replace(next_line,/^   /,""),"*/","* /"));


var G__17213 = cljs.core.next(seq__16421__$1);
var G__17214 = null;
var G__17215 = (0);
var G__17216 = (0);
seq__16421 = G__17213;
chunk__16422 = G__17214;
count__16423 = G__17215;
i__16424 = G__17216;
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

var seq__16425_17217 = cljs.core.seq(docs__$2);
var chunk__16426_17218 = null;
var count__16427_17219 = (0);
var i__16428_17220 = (0);
while(true){
if((i__16428_17220 < count__16427_17219)){
var e_17221 = chunk__16426_17218.cljs$core$IIndexed$_nth$arity$2(null, i__16428_17220);
if(cljs.core.truth_(e_17221)){
print_comment_lines(e_17221);
} else {
}


var G__17222 = seq__16425_17217;
var G__17223 = chunk__16426_17218;
var G__17224 = count__16427_17219;
var G__17225 = (i__16428_17220 + (1));
seq__16425_17217 = G__17222;
chunk__16426_17218 = G__17223;
count__16427_17219 = G__17224;
i__16428_17220 = G__17225;
continue;
} else {
var temp__5804__auto___17226 = cljs.core.seq(seq__16425_17217);
if(temp__5804__auto___17226){
var seq__16425_17227__$1 = temp__5804__auto___17226;
if(cljs.core.chunked_seq_QMARK_(seq__16425_17227__$1)){
var c__5525__auto___17228 = cljs.core.chunk_first(seq__16425_17227__$1);
var G__17229 = cljs.core.chunk_rest(seq__16425_17227__$1);
var G__17230 = c__5525__auto___17228;
var G__17231 = cljs.core.count(c__5525__auto___17228);
var G__17232 = (0);
seq__16425_17217 = G__17229;
chunk__16426_17218 = G__17230;
count__16427_17219 = G__17231;
i__16428_17220 = G__17232;
continue;
} else {
var e_17233 = cljs.core.first(seq__16425_17227__$1);
if(cljs.core.truth_(e_17233)){
print_comment_lines(e_17233);
} else {
}


var G__17234 = cljs.core.next(seq__16425_17227__$1);
var G__17235 = null;
var G__17236 = (0);
var G__17237 = (0);
seq__16425_17217 = G__17234;
chunk__16426_17218 = G__17235;
count__16427_17219 = G__17236;
i__16428_17220 = G__17237;
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
return ((typeof x === 'string') || (((x === true) || (((x === false) || (typeof x === 'number'))))));
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.Keyword(null,"options","options",99638489));
var and__5000__auto__ = cljs.core.some((function (p1__16430_SHARP_){
return goog.string.startsWith(p1__16430_SHARP_,"@define");
}),jsdoc);
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = opts;
if(cljs.core.truth_(and__5000__auto____$1)){
var and__5000__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__5000__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)], null));
if(cljs.compiler.valid_define_value_QMARK_(define)){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([define], 0));
} else {
return null;
}
} else {
return and__5000__auto____$2;
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__16431){
var map__16432 = p__16431;
var map__16432__$1 = cljs.core.__destructure_map(map__16432);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"test","test",577538877));
var goog_define = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"export","export",214356590));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16432__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__5002__auto__ = init;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(" = ",(function (){var temp__5802__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__5802__auto__)){
var define = temp__5802__auto__;
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

if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return test;
} else {
return and__5000__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__16433){
var map__16434 = p__16433;
var map__16434__$1 = cljs.core.__destructure_map(map__16434);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16434__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("(function (",arglist,"){");

var seq__16435_17299 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__16436_17300 = null;
var count__16437_17301 = (0);
var i__16438_17302 = (0);
while(true){
if((i__16438_17302 < count__16437_17301)){
var vec__16450_17305 = chunk__16436_17300.cljs$core$IIndexed$_nth$arity$2(null, i__16438_17302);
var i_17306 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16450_17305,(0),null);
var param_17307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16450_17305,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_17307);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__17308 = seq__16435_17299;
var G__17309 = chunk__16436_17300;
var G__17310 = count__16437_17301;
var G__17311 = (i__16438_17302 + (1));
seq__16435_17299 = G__17308;
chunk__16436_17300 = G__17309;
count__16437_17301 = G__17310;
i__16438_17302 = G__17311;
continue;
} else {
var temp__5804__auto___17312 = cljs.core.seq(seq__16435_17299);
if(temp__5804__auto___17312){
var seq__16435_17313__$1 = temp__5804__auto___17312;
if(cljs.core.chunked_seq_QMARK_(seq__16435_17313__$1)){
var c__5525__auto___17314 = cljs.core.chunk_first(seq__16435_17313__$1);
var G__17315 = cljs.core.chunk_rest(seq__16435_17313__$1);
var G__17316 = c__5525__auto___17314;
var G__17317 = cljs.core.count(c__5525__auto___17314);
var G__17318 = (0);
seq__16435_17299 = G__17315;
chunk__16436_17300 = G__17316;
count__16437_17301 = G__17317;
i__16438_17302 = G__17318;
continue;
} else {
var vec__16455_17319 = cljs.core.first(seq__16435_17313__$1);
var i_17320 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16455_17319,(0),null);
var param_17321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16455_17319,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(param_17321);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(" = cljs.core.first(");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(arglist,");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(arglist," = cljs.core.next(",arglist,");");


var G__17322 = cljs.core.next(seq__16435_17313__$1);
var G__17323 = null;
var G__17324 = (0);
var G__17325 = (0);
seq__16435_17299 = G__17322;
chunk__16436_17300 = G__17323;
count__16437_17301 = G__17324;
i__16438_17302 = G__17325;
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

var seq__16459_17327 = cljs.core.seq(params);
var chunk__16460_17328 = null;
var count__16461_17329 = (0);
var i__16462_17330 = (0);
while(true){
if((i__16462_17330 < count__16461_17329)){
var param_17331 = chunk__16460_17328.cljs$core$IIndexed$_nth$arity$2(null, i__16462_17330);
cljs.compiler.emit(param_17331);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17331,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17332 = seq__16459_17327;
var G__17333 = chunk__16460_17328;
var G__17334 = count__16461_17329;
var G__17335 = (i__16462_17330 + (1));
seq__16459_17327 = G__17332;
chunk__16460_17328 = G__17333;
count__16461_17329 = G__17334;
i__16462_17330 = G__17335;
continue;
} else {
var temp__5804__auto___17337 = cljs.core.seq(seq__16459_17327);
if(temp__5804__auto___17337){
var seq__16459_17338__$1 = temp__5804__auto___17337;
if(cljs.core.chunked_seq_QMARK_(seq__16459_17338__$1)){
var c__5525__auto___17339 = cljs.core.chunk_first(seq__16459_17338__$1);
var G__17341 = cljs.core.chunk_rest(seq__16459_17338__$1);
var G__17342 = c__5525__auto___17339;
var G__17343 = cljs.core.count(c__5525__auto___17339);
var G__17344 = (0);
seq__16459_17327 = G__17341;
chunk__16460_17328 = G__17342;
count__16461_17329 = G__17343;
i__16462_17330 = G__17344;
continue;
} else {
var param_17348 = cljs.core.first(seq__16459_17338__$1);
cljs.compiler.emit(param_17348);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17348,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17350 = cljs.core.next(seq__16459_17338__$1);
var G__17351 = null;
var G__17352 = (0);
var G__17353 = (0);
seq__16459_17327 = G__17350;
chunk__16460_17328 = G__17351;
count__16461_17329 = G__17352;
i__16462_17330 = G__17353;
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

var seq__16473_17354 = cljs.core.seq(params);
var chunk__16474_17355 = null;
var count__16475_17356 = (0);
var i__16476_17357 = (0);
while(true){
if((i__16476_17357 < count__16475_17356)){
var param_17358 = chunk__16474_17355.cljs$core$IIndexed$_nth$arity$2(null, i__16476_17357);
cljs.compiler.emit(param_17358);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17358,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17360 = seq__16473_17354;
var G__17361 = chunk__16474_17355;
var G__17362 = count__16475_17356;
var G__17363 = (i__16476_17357 + (1));
seq__16473_17354 = G__17360;
chunk__16474_17355 = G__17361;
count__16475_17356 = G__17362;
i__16476_17357 = G__17363;
continue;
} else {
var temp__5804__auto___17364 = cljs.core.seq(seq__16473_17354);
if(temp__5804__auto___17364){
var seq__16473_17365__$1 = temp__5804__auto___17364;
if(cljs.core.chunked_seq_QMARK_(seq__16473_17365__$1)){
var c__5525__auto___17366 = cljs.core.chunk_first(seq__16473_17365__$1);
var G__17367 = cljs.core.chunk_rest(seq__16473_17365__$1);
var G__17368 = c__5525__auto___17366;
var G__17369 = cljs.core.count(c__5525__auto___17366);
var G__17370 = (0);
seq__16473_17354 = G__17367;
chunk__16474_17355 = G__17368;
count__16475_17356 = G__17369;
i__16476_17357 = G__17370;
continue;
} else {
var param_17371 = cljs.core.first(seq__16473_17365__$1);
cljs.compiler.emit(param_17371);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17371,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17373 = cljs.core.next(seq__16473_17365__$1);
var G__17374 = null;
var G__17375 = (0);
var G__17376 = (0);
seq__16473_17354 = G__17373;
chunk__16474_17355 = G__17374;
count__16475_17356 = G__17375;
i__16476_17357 = G__17376;
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
var seq__16483 = cljs.core.seq(params);
var chunk__16484 = null;
var count__16485 = (0);
var i__16486 = (0);
while(true){
if((i__16486 < count__16485)){
var param = chunk__16484.cljs$core$IIndexed$_nth$arity$2(null, i__16486);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17384 = seq__16483;
var G__17385 = chunk__16484;
var G__17386 = count__16485;
var G__17387 = (i__16486 + (1));
seq__16483 = G__17384;
chunk__16484 = G__17385;
count__16485 = G__17386;
i__16486 = G__17387;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16483);
if(temp__5804__auto__){
var seq__16483__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16483__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16483__$1);
var G__17392 = cljs.core.chunk_rest(seq__16483__$1);
var G__17393 = c__5525__auto__;
var G__17394 = cljs.core.count(c__5525__auto__);
var G__17395 = (0);
seq__16483 = G__17392;
chunk__16484 = G__17393;
count__16485 = G__17394;
i__16486 = G__17395;
continue;
} else {
var param = cljs.core.first(seq__16483__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17399 = cljs.core.next(seq__16483__$1);
var G__17400 = null;
var G__17401 = (0);
var G__17402 = (0);
seq__16483 = G__17399;
chunk__16484 = G__17400;
count__16485 = G__17401;
i__16486 = G__17402;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__16491){
var map__16492 = p__16491;
var map__16492__$1 = cljs.core.__destructure_map(map__16492);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16492__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16492__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16492__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16492__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16492__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16492__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__16494){
var map__16495 = p__16494;
var map__16495__$1 = cljs.core.__destructure_map(map__16495);
var f = map__16495__$1;
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16495__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

var name_17405__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17406 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17405__$1);
var delegate_name_17407 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17406),"__delegate"].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() { ");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",delegate_name_17407," = function (");

var seq__16497_17408 = cljs.core.seq(params);
var chunk__16498_17409 = null;
var count__16499_17410 = (0);
var i__16500_17411 = (0);
while(true){
if((i__16500_17411 < count__16499_17410)){
var param_17412 = chunk__16498_17409.cljs$core$IIndexed$_nth$arity$2(null, i__16500_17411);
cljs.compiler.emit(param_17412);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17412,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17419 = seq__16497_17408;
var G__17420 = chunk__16498_17409;
var G__17421 = count__16499_17410;
var G__17422 = (i__16500_17411 + (1));
seq__16497_17408 = G__17419;
chunk__16498_17409 = G__17420;
count__16499_17410 = G__17421;
i__16500_17411 = G__17422;
continue;
} else {
var temp__5804__auto___17423 = cljs.core.seq(seq__16497_17408);
if(temp__5804__auto___17423){
var seq__16497_17424__$1 = temp__5804__auto___17423;
if(cljs.core.chunked_seq_QMARK_(seq__16497_17424__$1)){
var c__5525__auto___17425 = cljs.core.chunk_first(seq__16497_17424__$1);
var G__17426 = cljs.core.chunk_rest(seq__16497_17424__$1);
var G__17427 = c__5525__auto___17425;
var G__17428 = cljs.core.count(c__5525__auto___17425);
var G__17429 = (0);
seq__16497_17408 = G__17426;
chunk__16498_17409 = G__17427;
count__16499_17410 = G__17428;
i__16500_17411 = G__17429;
continue;
} else {
var param_17430 = cljs.core.first(seq__16497_17424__$1);
cljs.compiler.emit(param_17430);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17430,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17431 = cljs.core.next(seq__16497_17424__$1);
var G__17432 = null;
var G__17433 = (0);
var G__17434 = (0);
seq__16497_17408 = G__17431;
chunk__16498_17409 = G__17432;
count__16499_17410 = G__17433;
i__16500_17411 = G__17434;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",mname_17406," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",(cljs.core.count(params) - (1)),") {");

var a_17438 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_17438,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("} ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("return ",delegate_name_17407,".call(this,");

var seq__16502_17439 = cljs.core.seq(params);
var chunk__16503_17440 = null;
var count__16504_17441 = (0);
var i__16505_17442 = (0);
while(true){
if((i__16505_17442 < count__16504_17441)){
var param_17443 = chunk__16503_17440.cljs$core$IIndexed$_nth$arity$2(null, i__16505_17442);
cljs.compiler.emit(param_17443);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17443,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17444 = seq__16502_17439;
var G__17445 = chunk__16503_17440;
var G__17446 = count__16504_17441;
var G__17447 = (i__16505_17442 + (1));
seq__16502_17439 = G__17444;
chunk__16503_17440 = G__17445;
count__16504_17441 = G__17446;
i__16505_17442 = G__17447;
continue;
} else {
var temp__5804__auto___17448 = cljs.core.seq(seq__16502_17439);
if(temp__5804__auto___17448){
var seq__16502_17449__$1 = temp__5804__auto___17448;
if(cljs.core.chunked_seq_QMARK_(seq__16502_17449__$1)){
var c__5525__auto___17451 = cljs.core.chunk_first(seq__16502_17449__$1);
var G__17452 = cljs.core.chunk_rest(seq__16502_17449__$1);
var G__17453 = c__5525__auto___17451;
var G__17454 = cljs.core.count(c__5525__auto___17451);
var G__17455 = (0);
seq__16502_17439 = G__17452;
chunk__16503_17440 = G__17453;
count__16504_17441 = G__17454;
i__16505_17442 = G__17455;
continue;
} else {
var param_17459 = cljs.core.first(seq__16502_17449__$1);
cljs.compiler.emit(param_17459);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_17459,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(",");
}


var G__17460 = cljs.core.next(seq__16502_17449__$1);
var G__17461 = null;
var G__17462 = (0);
var G__17463 = (0);
seq__16502_17439 = G__17460;
chunk__16503_17440 = G__17461;
count__16504_17441 = G__17462;
i__16505_17442 = G__17463;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(");");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17406,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$2(mname_17406,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_17405__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17406,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_17407,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_17406,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__16515){
var map__16516 = p__16515;
var map__16516__$1 = cljs.core.__destructure_map(map__16516);
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"variadic?","variadic?",584179762));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var in_loop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"in-loop","in-loop",-187298246));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16516__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var recur_params = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16512_SHARP_){
var and__5000__auto__ = p1__16512_SHARP_;
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.deref(new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__16512_SHARP_));
} else {
return and__5000__auto__;
}
}),recur_frames)], 0));
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(recur_params,(cljs.core.truth_((function (){var or__5002__auto__ = in_loop;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
var name_17477__$1 = (function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_17478 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_17477__$1);
var maxparams_17479 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_17480 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname_17478),"__",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
}),methods$));
var ms_17481 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__16513_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__16513_SHARP_)));
}),cljs.core.seq(mmap_17480));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function() {");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",mname_17478," = null;");

var seq__16521_17484 = cljs.core.seq(ms_17481);
var chunk__16522_17485 = null;
var count__16523_17486 = (0);
var i__16524_17487 = (0);
while(true){
if((i__16524_17487 < count__16523_17486)){
var vec__16532_17491 = chunk__16522_17485.cljs$core$IIndexed$_nth$arity$2(null, i__16524_17487);
var n_17492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532_17491,(0),null);
var meth_17493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16532_17491,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_17492," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17493))){
cljs.compiler.emit_variadic_fn_method(meth_17493);
} else {
cljs.compiler.emit_fn_method(meth_17493);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__17494 = seq__16521_17484;
var G__17495 = chunk__16522_17485;
var G__17496 = count__16523_17486;
var G__17497 = (i__16524_17487 + (1));
seq__16521_17484 = G__17494;
chunk__16522_17485 = G__17495;
count__16523_17486 = G__17496;
i__16524_17487 = G__17497;
continue;
} else {
var temp__5804__auto___17498 = cljs.core.seq(seq__16521_17484);
if(temp__5804__auto___17498){
var seq__16521_17499__$1 = temp__5804__auto___17498;
if(cljs.core.chunked_seq_QMARK_(seq__16521_17499__$1)){
var c__5525__auto___17500 = cljs.core.chunk_first(seq__16521_17499__$1);
var G__17501 = cljs.core.chunk_rest(seq__16521_17499__$1);
var G__17502 = c__5525__auto___17500;
var G__17503 = cljs.core.count(c__5525__auto___17500);
var G__17504 = (0);
seq__16521_17484 = G__17501;
chunk__16522_17485 = G__17502;
count__16523_17486 = G__17503;
i__16524_17487 = G__17504;
continue;
} else {
var vec__16545_17505 = cljs.core.first(seq__16521_17499__$1);
var n_17506 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16545_17505,(0),null);
var meth_17507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16545_17505,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3("var ",n_17506," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17507))){
cljs.compiler.emit_variadic_fn_method(meth_17507);
} else {
cljs.compiler.emit_fn_method(meth_17507);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");


var G__17508 = cljs.core.next(seq__16521_17499__$1);
var G__17509 = null;
var G__17510 = (0);
var G__17511 = (0);
seq__16521_17484 = G__17508;
chunk__16522_17485 = G__17509;
count__16523_17486 = G__17510;
i__16524_17487 = G__17511;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17478," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_17479),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_17479)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(cljs.core.last(maxparams_17479));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(" = var_args;");
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("switch(arguments.length){");

var seq__16548_17513 = cljs.core.seq(ms_17481);
var chunk__16549_17514 = null;
var count__16550_17515 = (0);
var i__16551_17516 = (0);
while(true){
if((i__16551_17516 < count__16550_17515)){
var vec__16566_17517 = chunk__16549_17514.cljs$core$IIndexed$_nth$arity$2(null, i__16551_17516);
var n_17518 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_17517,(0),null);
var meth_17519 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16566_17517,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17519))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_17523 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_17523," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_17524 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_17523," = new cljs.core.IndexedSeq(",a_17524,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_17518,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17479)),(((cljs.core.count(maxparams_17479) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_17523,");"], 0));
} else {
var pcnt_17525 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17519));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_17525,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_17518,".call(this",(((pcnt_17525 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_17525,maxparams_17479)),null,(1),null)),(2),null))),");");
}


var G__17526 = seq__16548_17513;
var G__17527 = chunk__16549_17514;
var G__17528 = count__16550_17515;
var G__17529 = (i__16551_17516 + (1));
seq__16548_17513 = G__17526;
chunk__16549_17514 = G__17527;
count__16550_17515 = G__17528;
i__16551_17516 = G__17529;
continue;
} else {
var temp__5804__auto___17530 = cljs.core.seq(seq__16548_17513);
if(temp__5804__auto___17530){
var seq__16548_17531__$1 = temp__5804__auto___17530;
if(cljs.core.chunked_seq_QMARK_(seq__16548_17531__$1)){
var c__5525__auto___17532 = cljs.core.chunk_first(seq__16548_17531__$1);
var G__17533 = cljs.core.chunk_rest(seq__16548_17531__$1);
var G__17534 = c__5525__auto___17532;
var G__17535 = cljs.core.count(c__5525__auto___17532);
var G__17536 = (0);
seq__16548_17513 = G__17533;
chunk__16549_17514 = G__17534;
count__16550_17515 = G__17535;
i__16551_17516 = G__17536;
continue;
} else {
var vec__16580_17539 = cljs.core.first(seq__16548_17531__$1);
var n_17540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16580_17539,(0),null);
var meth_17541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16580_17539,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17541))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("default:");

var restarg_17542 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",restarg_17542," = null;");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if (arguments.length > ",max_fixed_arity,") {");

var a_17543 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(restarg_17542," = new cljs.core.IndexedSeq(",a_17543,",0,null);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic("return ",n_17540,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_17479)),(((cljs.core.count(maxparams_17479) > (1)))?", ":null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([restarg_17542,");"], 0));
} else {
var pcnt_17544 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17541));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("case ",pcnt_17544,":");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("return ",n_17540,".call(this",(((pcnt_17544 === (0)))?null:(new cljs.core.List(null,",",(new cljs.core.List(null,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_17544,maxparams_17479)),null,(1),null)),(2),null))),");");
}


var G__17545 = cljs.core.next(seq__16548_17531__$1);
var G__17546 = null;
var G__17547 = (0);
var G__17548 = (0);
seq__16548_17513 = G__17545;
chunk__16549_17514 = G__17546;
count__16550_17515 = G__17547;
i__16551_17516 = G__17548;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("}");

var arg_count_js_17550 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.val(cljs.core.first(ms_17481)))))))?"(arguments.length - 1)":"arguments.length");
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("throw(new Error('Invalid arity: ' + ",arg_count_js_17550,"));");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("};");

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17478,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17478,".cljs$lang$applyTo = ",cljs.core.some((function (p1__16514_SHARP_){
var vec__16591 = p1__16514_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16591,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16591,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
}),ms_17481),".cljs$lang$applyTo;");
} else {
}

var seq__16594_17560 = cljs.core.seq(ms_17481);
var chunk__16595_17561 = null;
var count__16596_17562 = (0);
var i__16597_17563 = (0);
while(true){
if((i__16597_17563 < count__16596_17562)){
var vec__16613_17564 = chunk__16595_17561.cljs$core$IIndexed$_nth$arity$2(null, i__16597_17563);
var n_17565 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613_17564,(0),null);
var meth_17566 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16613_17564,(1),null);
var c_17567 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17566));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17566))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17478,".cljs$core$IFn$_invoke$arity$variadic = ",n_17565,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_17478,".cljs$core$IFn$_invoke$arity$",c_17567," = ",n_17565,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__17568 = seq__16594_17560;
var G__17569 = chunk__16595_17561;
var G__17570 = count__16596_17562;
var G__17571 = (i__16597_17563 + (1));
seq__16594_17560 = G__17568;
chunk__16595_17561 = G__17569;
count__16596_17562 = G__17570;
i__16597_17563 = G__17571;
continue;
} else {
var temp__5804__auto___17572 = cljs.core.seq(seq__16594_17560);
if(temp__5804__auto___17572){
var seq__16594_17573__$1 = temp__5804__auto___17572;
if(cljs.core.chunked_seq_QMARK_(seq__16594_17573__$1)){
var c__5525__auto___17574 = cljs.core.chunk_first(seq__16594_17573__$1);
var G__17575 = cljs.core.chunk_rest(seq__16594_17573__$1);
var G__17576 = c__5525__auto___17574;
var G__17577 = cljs.core.count(c__5525__auto___17574);
var G__17578 = (0);
seq__16594_17560 = G__17575;
chunk__16595_17561 = G__17576;
count__16596_17562 = G__17577;
i__16597_17563 = G__17578;
continue;
} else {
var vec__16616_17579 = cljs.core.first(seq__16594_17573__$1);
var n_17580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616_17579,(0),null);
var meth_17581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16616_17579,(1),null);
var c_17582 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_17581));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(meth_17581))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(mname_17478,".cljs$core$IFn$_invoke$arity$variadic = ",n_17580,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(mname_17478,".cljs$core$IFn$_invoke$arity$",c_17582," = ",n_17580,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([";"], 0));
}


var G__17583 = cljs.core.next(seq__16594_17573__$1);
var G__17584 = null;
var G__17585 = (0);
var G__17586 = (0);
seq__16594_17560 = G__17583;
chunk__16595_17561 = G__17584;
count__16596_17562 = G__17585;
i__16597_17563 = G__17586;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("return ",mname_17478,";");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("})()");
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(";})(",cljs.compiler.comma_sep(loop_locals),"))");
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"do","do",46310725),(function (p__16619){
var map__16620 = p__16619;
var map__16620__$1 = cljs.core.__destructure_map(map__16620);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(((cljs.core.seq(statements)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__16622_17587 = cljs.core.seq(statements);
var chunk__16623_17588 = null;
var count__16624_17589 = (0);
var i__16625_17590 = (0);
while(true){
if((i__16625_17590 < count__16624_17589)){
var s_17591 = chunk__16623_17588.cljs$core$IIndexed$_nth$arity$2(null, i__16625_17590);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_17591);


var G__17592 = seq__16622_17587;
var G__17593 = chunk__16623_17588;
var G__17594 = count__16624_17589;
var G__17595 = (i__16625_17590 + (1));
seq__16622_17587 = G__17592;
chunk__16623_17588 = G__17593;
count__16624_17589 = G__17594;
i__16625_17590 = G__17595;
continue;
} else {
var temp__5804__auto___17596 = cljs.core.seq(seq__16622_17587);
if(temp__5804__auto___17596){
var seq__16622_17597__$1 = temp__5804__auto___17596;
if(cljs.core.chunked_seq_QMARK_(seq__16622_17597__$1)){
var c__5525__auto___17598 = cljs.core.chunk_first(seq__16622_17597__$1);
var G__17599 = cljs.core.chunk_rest(seq__16622_17597__$1);
var G__17600 = c__5525__auto___17598;
var G__17601 = cljs.core.count(c__5525__auto___17598);
var G__17602 = (0);
seq__16622_17587 = G__17599;
chunk__16623_17588 = G__17600;
count__16624_17589 = G__17601;
i__16625_17590 = G__17602;
continue;
} else {
var s_17604 = cljs.core.first(seq__16622_17597__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(s_17604);


var G__17606 = cljs.core.next(seq__16622_17597__$1);
var G__17607 = null;
var G__17608 = (0);
var G__17609 = (0);
seq__16622_17587 = G__17606;
chunk__16623_17588 = G__17607;
count__16624_17589 = G__17608;
i__16625_17590 = G__17609;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"try","try",1380742522),(function (p__16628){
var map__16629 = p__16628;
var map__16629__$1 = cljs.core.__destructure_map(map__16629);
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16629__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16629__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16629__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16629__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16629__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__5002__auto__ = name;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__16635,is_loop){
var map__16636 = p__16635;
var map__16636__$1 = cljs.core.__destructure_map(map__16636);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16636__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16636__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16636__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var _STAR_lexical_renames_STAR__orig_val__16637_17613 = cljs.compiler._STAR_lexical_renames_STAR_;
var _STAR_lexical_renames_STAR__temp_val__16638_17614 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope(binding),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"-"].join(''))],null));
}),bindings):null));
(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__temp_val__16638_17614);

try{var seq__16640_17617 = cljs.core.seq(bindings);
var chunk__16641_17618 = null;
var count__16642_17619 = (0);
var i__16643_17620 = (0);
while(true){
if((i__16643_17620 < count__16642_17619)){
var map__16650_17621 = chunk__16641_17618.cljs$core$IIndexed$_nth$arity$2(null, i__16643_17620);
var map__16650_17622__$1 = cljs.core.__destructure_map(map__16650_17621);
var binding_17623 = map__16650_17622__$1;
var init_17624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16650_17622__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_17623);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_17624,";");


var G__17625 = seq__16640_17617;
var G__17626 = chunk__16641_17618;
var G__17627 = count__16642_17619;
var G__17628 = (i__16643_17620 + (1));
seq__16640_17617 = G__17625;
chunk__16641_17618 = G__17626;
count__16642_17619 = G__17627;
i__16643_17620 = G__17628;
continue;
} else {
var temp__5804__auto___17629 = cljs.core.seq(seq__16640_17617);
if(temp__5804__auto___17629){
var seq__16640_17630__$1 = temp__5804__auto___17629;
if(cljs.core.chunked_seq_QMARK_(seq__16640_17630__$1)){
var c__5525__auto___17632 = cljs.core.chunk_first(seq__16640_17630__$1);
var G__17636 = cljs.core.chunk_rest(seq__16640_17630__$1);
var G__17637 = c__5525__auto___17632;
var G__17638 = cljs.core.count(c__5525__auto___17632);
var G__17639 = (0);
seq__16640_17617 = G__17636;
chunk__16641_17618 = G__17637;
count__16642_17619 = G__17638;
i__16643_17620 = G__17639;
continue;
} else {
var map__16651_17640 = cljs.core.first(seq__16640_17630__$1);
var map__16651_17641__$1 = cljs.core.__destructure_map(map__16651_17640);
var binding_17642 = map__16651_17641__$1;
var init_17643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16651_17641__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("var ");

cljs.compiler.emit(binding_17642);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" = ",init_17643,";");


var G__17644 = cljs.core.next(seq__16640_17630__$1);
var G__17645 = null;
var G__17646 = (0);
var G__17647 = (0);
seq__16640_17617 = G__17644;
chunk__16641_17618 = G__17645;
count__16642_17619 = G__17646;
i__16643_17620 = G__17647;
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
}finally {(cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR__orig_val__16637_17613);
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("})()");
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__16654){
var map__16656 = p__16654;
var map__16656__$1 = cljs.core.__destructure_map(map__16656);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16656__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16656__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16656__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5593__auto___17654 = cljs.core.count(exprs);
var i_17655 = (0);
while(true){
if((i_17655 < n__5593__auto___17654)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_17655) : temps.call(null, i_17655))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_17655) : exprs.call(null, i_17655)),";");

var G__17662 = (i_17655 + (1));
i_17655 = G__17662;
continue;
} else {
}
break;
}

var n__5593__auto___17663 = cljs.core.count(exprs);
var i_17664 = (0);
while(true){
if((i_17664 < n__5593__auto___17663)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_17664) : params.call(null, i_17664)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_17664) : temps.call(null, i_17664)),";");

var G__17666 = (i_17664 + (1));
i_17664 = G__17666;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("continue;");
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__16660){
var map__16661 = p__16660;
var map__16661__$1 = cljs.core.__destructure_map(map__16661);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16661__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("(function (){");
} else {
}

var seq__16663_17667 = cljs.core.seq(bindings);
var chunk__16664_17668 = null;
var count__16665_17669 = (0);
var i__16666_17670 = (0);
while(true){
if((i__16666_17670 < count__16665_17669)){
var map__16669_17677 = chunk__16664_17668.cljs$core$IIndexed$_nth$arity$2(null, i__16666_17670);
var map__16669_17678__$1 = cljs.core.__destructure_map(map__16669_17677);
var binding_17679 = map__16669_17678__$1;
var init_17680 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16669_17678__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_17679)," = ",init_17680,";");


var G__17681 = seq__16663_17667;
var G__17682 = chunk__16664_17668;
var G__17683 = count__16665_17669;
var G__17684 = (i__16666_17670 + (1));
seq__16663_17667 = G__17681;
chunk__16664_17668 = G__17682;
count__16665_17669 = G__17683;
i__16666_17670 = G__17684;
continue;
} else {
var temp__5804__auto___17685 = cljs.core.seq(seq__16663_17667);
if(temp__5804__auto___17685){
var seq__16663_17686__$1 = temp__5804__auto___17685;
if(cljs.core.chunked_seq_QMARK_(seq__16663_17686__$1)){
var c__5525__auto___17687 = cljs.core.chunk_first(seq__16663_17686__$1);
var G__17688 = cljs.core.chunk_rest(seq__16663_17686__$1);
var G__17689 = c__5525__auto___17687;
var G__17690 = cljs.core.count(c__5525__auto___17687);
var G__17691 = (0);
seq__16663_17667 = G__17688;
chunk__16664_17668 = G__17689;
count__16665_17669 = G__17690;
i__16666_17670 = G__17691;
continue;
} else {
var map__16672_17693 = cljs.core.first(seq__16663_17686__$1);
var map__16672_17694__$1 = cljs.core.__destructure_map(map__16672_17693);
var binding_17695 = map__16672_17694__$1;
var init_17696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16672_17694__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_17695)," = ",init_17696,";");


var G__17698 = cljs.core.next(seq__16663_17686__$1);
var G__17699 = null;
var G__17700 = (0);
var G__17701 = (0);
seq__16663_17667 = G__17698;
chunk__16664_17668 = G__17699;
count__16665_17669 = G__17700;
i__16666_17670 = G__17701;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__16696){
var map__16697 = p__16696;
var map__16697__$1 = cljs.core.__destructure_map(map__16697);
var expr = map__16697__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16697__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__5000__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__5000__auto__ = protocol;
if(cljs.core.truth_(and__5000__auto__)){
var and__5000__auto____$1 = tag;
if(cljs.core.truth_(and__5000__auto____$1)){
var or__5002__auto__ = (function (){var and__5000__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto____$2)){
var and__5000__auto____$3 = protocol;
if(cljs.core.truth_(and__5000__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__5000__auto____$3;
}
} else {
return and__5000__auto____$2;
}
})();
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto____$2 = (function (){var or__5002__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__5000__auto____$2)){
var or__5002__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
var and__5000__auto____$3 = (!(cljs.core.set_QMARK_(tag)));
if(and__5000__auto____$3){
var and__5000__auto____$4 = cljs.core.not((function (){var fexpr__16716 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Symbol(null,"clj","clj",980036099,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"null",new cljs.core.Symbol(null,"any","any",-948528346,null),"null",new cljs.core.Symbol(null,"js","js",-886355190,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null",new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),"null",new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"function","function",-486723946,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null);
return (fexpr__16716.cljs$core$IFn$_invoke$arity$1 ? fexpr__16716.cljs$core$IFn$_invoke$arity$1(tag) : fexpr__16716.call(null, tag));
})());
if(and__5000__auto____$4){
var temp__5804__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)));
if(cljs.core.truth_(temp__5804__auto__)){
var ps = temp__5804__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null, protocol));
} else {
return null;
}
} else {
return and__5000__auto____$4;
}
} else {
return and__5000__auto____$3;
}
}
} else {
return and__5000__auto____$2;
}
}
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
})();
var first_arg_tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var opt_not_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(first_arg_tag,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null))));
var opt_count_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null))) && (cljs.core.boolean$((function (){var fexpr__16717 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"array","array",-440182315,null),"null",new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null);
return (fexpr__16717.cljs$core$IFn$_invoke$arity$1 ? fexpr__16717.cljs$core$IFn$_invoke$arity$1(first_arg_tag) : fexpr__16717.call(null, first_arg_tag));
})())));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var ftag = cljs.analyzer.infer_tag(env,f);
var js_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null));
if(or__5002__auto____$1){
return or__5002__auto____$1;
} else {
return new cljs.core.Keyword(null,"foreign","foreign",990521149).cljs$core$IFn$_invoke$arity$1(info);
}
}
})();
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__5002__auto__){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = (function (){var temp__5804__auto__ = cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns);
if(cljs.core.truth_(temp__5804__auto__)){
var ns_str = temp__5804__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
})();
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return (!(cljs.core.contains_QMARK_(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(cljs.env._STAR_compiler_STAR_)),ns)));
}
}
})():null);
var keyword_QMARK_ = (function (){var or__5002__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),ftag);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var f__$1 = cljs.analyzer.unwrap_quote(f);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"const","const",1709929842))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f__$1) instanceof cljs.core.Keyword)));
}
})();
var vec__16702 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic?","variadic?",584179762).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if(((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__5000__auto__)){
return (arity > mfa);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$variadic"].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__16689_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16689_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([arity]),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),(function (p1__16690_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__16690_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
}));
})),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16702,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16702,(1),null);
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
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
var pimpl_17741 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(args),".",pimpl_17741,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_17742 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_17742,args)),(((mfa_17742 === (0)))?null:","),"cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_17742,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = js_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$4(f__$1,"(",cljs.compiler.comma_sep(args),")");
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
var G__16743 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1);
var fexpr__16742 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__16742.cljs$core$IFn$_invoke$arity$1 ? fexpr__16742.cljs$core$IFn$_invoke$arity$1(G__16743) : fexpr__16742.call(null, G__16743));
} else {
return and__5000__auto__;
}
})())){
var fprop_17749 = [".cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(args))].join('');
if(cljs.core.truth_(cljs.analyzer._STAR_fn_invoke_direct_STAR_)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_17749," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_17749,"(",cljs.compiler.comma_sep(args),") : ",f__$1,"(",cljs.compiler.comma_sep(args),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic("(",f__$1,fprop_17749," ? ",f__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fprop_17749,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__16744){
var map__16745 = p__16744;
var map__16745__$1 = cljs.core.__destructure_map(map__16745);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(new ",ctor,"(",cljs.compiler.comma_sep(args),"))");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__16746){
var map__16747 = p__16746;
var map__16747__$1 = cljs.core.__destructure_map(map__16747);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16747__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16747__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16747__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$5("(",target," = ",val,")");

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}));
cljs.compiler.sublib_select = (function cljs$compiler$sublib_select(sublib){
if(cljs.core.truth_(sublib)){
var xs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(sublib,/\./);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16748_SHARP_){
return ["['",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16748_SHARP_),"']"].join('');
}),xs));
} else {
return null;
}
});
cljs.compiler.emit_global_export = (function cljs$compiler$emit_global_export(ns_name,global_exports,lib){
var vec__16749 = cljs.analyzer.lib_AMPERSAND_sublib(lib);
var lib_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16749,(0),null);
var sublib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16749,(1),null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_global_export(lib)," = goog.global",cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (prop){
return ["[\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"\"]"].join('');
}),clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name((function (){var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lib_SINGLEQUOTE_));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(global_exports,cljs.core.name(lib_SINGLEQUOTE_));
}
})()),/\./))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.compiler.sublib_select(sublib),";"], 0));
});
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads,deps,ns_name){
var map__16752 = cljs.core.deref(cljs.env._STAR_compiler_STAR_);
var map__16752__$1 = cljs.core.__destructure_map(map__16752);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16752__$1,new cljs.core.Keyword(null,"options","options",99638489));
var js_dependency_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16752__$1,new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131));
var map__16753 = options;
var map__16753__$1 = cljs.core.__destructure_map(map__16753);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16753__$1,new cljs.core.Keyword(null,"target","target",253001721));
var nodejs_rt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16753__$1,new cljs.core.Keyword(null,"nodejs-rt","nodejs-rt",-512437071));
var optimizations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16753__$1,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854));
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
var vec__16754 = (function (){var libs__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(libs)),deps));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nodejs","nodejs",321212524),target)){
var map__16760 = cljs.core.group_by(cljs.analyzer.node_module_dep_QMARK_,libs__$1);
var map__16760__$1 = cljs.core.__destructure_map(map__16760);
var node_libs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16760__$1,true);
var libs_to_load = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16760__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_libs,libs_to_load], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,libs__$1], null);
}
})();
var node_libs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16754,(0),null);
var libs_to_load = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16754,(1),null);
var vec__16757 = (function (){var map__16761 = cljs.core.group_by(cljs.analyzer.goog_module_dep_QMARK_,libs_to_load);
var map__16761__$1 = cljs.core.__destructure_map(map__16761);
var goog_modules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761__$1,true);
var libs_to_load__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761__$1,false);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog_modules,libs_to_load__$1], null);
})();
var goog_modules = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(0),null);
var libs_to_load__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16757,(1),null);
var global_exports_libs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.dep_has_global_exports_QMARK_,libs_to_load__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set([\"cljs.core\"]);");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("if(!COMPILED) ",loaded_libs," = cljs.core.set([\"cljs.core\"]);");
} else {
}

var seq__16762_17759 = cljs.core.seq(libs_to_load__$1);
var chunk__16763_17760 = null;
var count__16764_17761 = (0);
var i__16765_17762 = (0);
while(true){
if((i__16765_17762 < count__16764_17761)){
var lib_17763 = chunk__16763_17760.cljs$core$IIndexed$_nth$arity$2(null, i__16765_17762);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_17763)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17763),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17763),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17763),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17763),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_17763,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17763),"');");
}

}
}
}


var G__17765 = seq__16762_17759;
var G__17766 = chunk__16763_17760;
var G__17767 = count__16764_17761;
var G__17768 = (i__16765_17762 + (1));
seq__16762_17759 = G__17765;
chunk__16763_17760 = G__17766;
count__16764_17761 = G__17767;
i__16765_17762 = G__17768;
continue;
} else {
var temp__5804__auto___17769 = cljs.core.seq(seq__16762_17759);
if(temp__5804__auto___17769){
var seq__16762_17770__$1 = temp__5804__auto___17769;
if(cljs.core.chunked_seq_QMARK_(seq__16762_17770__$1)){
var c__5525__auto___17771 = cljs.core.chunk_first(seq__16762_17770__$1);
var G__17772 = cljs.core.chunk_rest(seq__16762_17770__$1);
var G__17773 = c__5525__auto___17771;
var G__17774 = cljs.core.count(c__5525__auto___17771);
var G__17775 = (0);
seq__16762_17759 = G__17772;
chunk__16763_17760 = G__17773;
count__16764_17761 = G__17774;
i__16765_17762 = G__17775;
continue;
} else {
var lib_17779 = cljs.core.first(seq__16762_17770__$1);
if(((cljs.analyzer.foreign_dep_QMARK_(lib_17779)) && ((!(cljs.core.keyword_identical_QMARK_(optimizations,new cljs.core.Keyword(null,"none","none",1333468478))))))){
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17779),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17779),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_17779),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17779),"', 'reload-all');");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(lib_17779,new cljs.core.Symbol(null,"goog","goog",-70603925,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_17779),"');");
}

}
}
}


var G__17785 = cljs.core.next(seq__16762_17770__$1);
var G__17786 = null;
var G__17787 = (0);
var G__17788 = (0);
seq__16762_17759 = G__17785;
chunk__16763_17760 = G__17786;
count__16764_17761 = G__17787;
i__16765_17762 = G__17788;
continue;
}
} else {
}
}
break;
}

var seq__16766_17789 = cljs.core.seq(node_libs);
var chunk__16767_17790 = null;
var count__16768_17791 = (0);
var i__16769_17792 = (0);
while(true){
if((i__16769_17792 < count__16768_17791)){
var lib_17793 = chunk__16767_17790.cljs$core$IIndexed$_nth$arity$2(null, i__16769_17792);
var vec__16776_17794 = cljs.analyzer.lib_AMPERSAND_sublib(lib_17793);
var lib_SINGLEQUOTE__17795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16776_17794,(0),null);
var sublib_17796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16776_17794,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_17793)," = require('",lib_SINGLEQUOTE__17795,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_17796),";"], 0));


var G__17801 = seq__16766_17789;
var G__17802 = chunk__16767_17790;
var G__17803 = count__16768_17791;
var G__17804 = (i__16769_17792 + (1));
seq__16766_17789 = G__17801;
chunk__16767_17790 = G__17802;
count__16768_17791 = G__17803;
i__16769_17792 = G__17804;
continue;
} else {
var temp__5804__auto___17805 = cljs.core.seq(seq__16766_17789);
if(temp__5804__auto___17805){
var seq__16766_17806__$1 = temp__5804__auto___17805;
if(cljs.core.chunked_seq_QMARK_(seq__16766_17806__$1)){
var c__5525__auto___17807 = cljs.core.chunk_first(seq__16766_17806__$1);
var G__17808 = cljs.core.chunk_rest(seq__16766_17806__$1);
var G__17809 = c__5525__auto___17807;
var G__17810 = cljs.core.count(c__5525__auto___17807);
var G__17811 = (0);
seq__16766_17789 = G__17808;
chunk__16767_17790 = G__17809;
count__16768_17791 = G__17810;
i__16769_17792 = G__17811;
continue;
} else {
var lib_17812 = cljs.core.first(seq__16766_17806__$1);
var vec__16779_17813 = cljs.analyzer.lib_AMPERSAND_sublib(lib_17812);
var lib_SINGLEQUOTE__17814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779_17813,(0),null);
var sublib_17815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16779_17813,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_node_lib(lib_17812)," = require('",lib_SINGLEQUOTE__17814,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_17815),";"], 0));


var G__17820 = cljs.core.next(seq__16766_17806__$1);
var G__17821 = null;
var G__17822 = (0);
var G__17823 = (0);
seq__16766_17789 = G__17820;
chunk__16767_17790 = G__17821;
count__16768_17791 = G__17822;
i__16769_17792 = G__17823;
continue;
}
} else {
}
}
break;
}

var seq__16782_17824 = cljs.core.seq(goog_modules);
var chunk__16783_17825 = null;
var count__16784_17826 = (0);
var i__16785_17827 = (0);
while(true){
if((i__16785_17827 < count__16784_17826)){
var lib_17832 = chunk__16783_17825.cljs$core$IIndexed$_nth$arity$2(null, i__16785_17827);
var vec__16792_17833 = cljs.analyzer.lib_AMPERSAND_sublib(lib_17832);
var lib_SINGLEQUOTE__17834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16792_17833,(0),null);
var sublib_17835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16792_17833,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__17834,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_17832)," = goog.module.get('",lib_SINGLEQUOTE__17834,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_17835),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__17836 = seq__16782_17824;
var G__17837 = chunk__16783_17825;
var G__17838 = count__16784_17826;
var G__17839 = (i__16785_17827 + (1));
seq__16782_17824 = G__17836;
chunk__16783_17825 = G__17837;
count__16784_17826 = G__17838;
i__16785_17827 = G__17839;
continue;
} else {
var temp__5804__auto___17840 = cljs.core.seq(seq__16782_17824);
if(temp__5804__auto___17840){
var seq__16782_17841__$1 = temp__5804__auto___17840;
if(cljs.core.chunked_seq_QMARK_(seq__16782_17841__$1)){
var c__5525__auto___17842 = cljs.core.chunk_first(seq__16782_17841__$1);
var G__17843 = cljs.core.chunk_rest(seq__16782_17841__$1);
var G__17844 = c__5525__auto___17842;
var G__17845 = cljs.core.count(c__5525__auto___17842);
var G__17846 = (0);
seq__16782_17824 = G__17843;
chunk__16783_17825 = G__17844;
count__16784_17826 = G__17845;
i__16785_17827 = G__17846;
continue;
} else {
var lib_17847 = cljs.core.first(seq__16782_17841__$1);
var vec__16795_17848 = cljs.analyzer.lib_AMPERSAND_sublib(lib_17847);
var lib_SINGLEQUOTE__17849 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795_17848,(0),null);
var sublib_17850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16795_17848,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.require('",lib_SINGLEQUOTE__17849,"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.scope(function(){");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns_name),".",cljs.analyzer.munge_goog_module_lib.cljs$core$IFn$_invoke$arity$1(lib_17847)," = goog.module.get('",lib_SINGLEQUOTE__17849,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["')",cljs.compiler.sublib_select(sublib_17850),";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("});");


var G__17854 = cljs.core.next(seq__16782_17841__$1);
var G__17855 = null;
var G__17856 = (0);
var G__17857 = (0);
seq__16782_17824 = G__17854;
chunk__16783_17825 = G__17855;
count__16784_17826 = G__17856;
i__16785_17827 = G__17857;
continue;
}
} else {
}
}
break;
}

var seq__16798_17858 = cljs.core.seq(global_exports_libs);
var chunk__16799_17859 = null;
var count__16800_17860 = (0);
var i__16801_17861 = (0);
while(true){
if((i__16801_17861 < count__16800_17860)){
var lib_17862 = chunk__16799_17859.cljs$core$IIndexed$_nth$arity$2(null, i__16801_17861);
var map__16804_17863 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_17862))));
var map__16804_17864__$1 = cljs.core.__destructure_map(map__16804_17863);
var global_exports_17865 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16804_17864__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_17865,lib_17862);


var G__17866 = seq__16798_17858;
var G__17867 = chunk__16799_17859;
var G__17868 = count__16800_17860;
var G__17869 = (i__16801_17861 + (1));
seq__16798_17858 = G__17866;
chunk__16799_17859 = G__17867;
count__16800_17860 = G__17868;
i__16801_17861 = G__17869;
continue;
} else {
var temp__5804__auto___17870 = cljs.core.seq(seq__16798_17858);
if(temp__5804__auto___17870){
var seq__16798_17871__$1 = temp__5804__auto___17870;
if(cljs.core.chunked_seq_QMARK_(seq__16798_17871__$1)){
var c__5525__auto___17872 = cljs.core.chunk_first(seq__16798_17871__$1);
var G__17873 = cljs.core.chunk_rest(seq__16798_17871__$1);
var G__17874 = c__5525__auto___17872;
var G__17875 = cljs.core.count(c__5525__auto___17872);
var G__17876 = (0);
seq__16798_17858 = G__17873;
chunk__16799_17859 = G__17874;
count__16800_17860 = G__17875;
i__16801_17861 = G__17876;
continue;
} else {
var lib_17877 = cljs.core.first(seq__16798_17871__$1);
var map__16805_17878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_dependency_index,cljs.core.name(cljs.core.first(cljs.analyzer.lib_AMPERSAND_sublib(lib_17877))));
var map__16805_17879__$1 = cljs.core.__destructure_map(map__16805_17878);
var global_exports_17880 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16805_17879__$1,new cljs.core.Keyword(null,"global-exports","global-exports",-1644865592));
cljs.compiler.emit_global_export(ns_name,global_exports_17880,lib_17877);


var G__17882 = cljs.core.next(seq__16798_17871__$1);
var G__17883 = null;
var G__17884 = (0);
var G__17885 = (0);
seq__16798_17858 = G__17882;
chunk__16799_17859 = G__17883;
count__16800_17860 = G__17884;
i__16801_17861 = G__17885;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__16806){
var map__16807 = p__16806;
var map__16807__$1 = cljs.core.__destructure_map(map__16807);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16807__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads),deps,name);

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-env","repl-env",-1976503928).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("'nil';");
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__16808){
var map__16809 = p__16808;
var map__16809__$1 = cljs.core.__destructure_map(map__16809);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16809__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"deftype","deftype",340294561),(function (p__16810){
var map__16811 = p__16810;
var map__16811__$1 = cljs.core.__destructure_map(map__16811);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16811__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__16812_17899 = cljs.core.seq(protocols);
var chunk__16813_17900 = null;
var count__16814_17901 = (0);
var i__16815_17902 = (0);
while(true){
if((i__16815_17902 < count__16814_17901)){
var protocol_17904 = chunk__16813_17900.cljs$core$IIndexed$_nth$arity$2(null, i__16815_17902);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17904)),"}");


var G__17907 = seq__16812_17899;
var G__17908 = chunk__16813_17900;
var G__17909 = count__16814_17901;
var G__17910 = (i__16815_17902 + (1));
seq__16812_17899 = G__17907;
chunk__16813_17900 = G__17908;
count__16814_17901 = G__17909;
i__16815_17902 = G__17910;
continue;
} else {
var temp__5804__auto___17912 = cljs.core.seq(seq__16812_17899);
if(temp__5804__auto___17912){
var seq__16812_17913__$1 = temp__5804__auto___17912;
if(cljs.core.chunked_seq_QMARK_(seq__16812_17913__$1)){
var c__5525__auto___17914 = cljs.core.chunk_first(seq__16812_17913__$1);
var G__17915 = cljs.core.chunk_rest(seq__16812_17913__$1);
var G__17916 = c__5525__auto___17914;
var G__17917 = cljs.core.count(c__5525__auto___17914);
var G__17918 = (0);
seq__16812_17899 = G__17915;
chunk__16813_17900 = G__17916;
count__16814_17901 = G__17917;
i__16815_17902 = G__17918;
continue;
} else {
var protocol_17919 = cljs.core.first(seq__16812_17913__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17919)),"}");


var G__17920 = cljs.core.next(seq__16812_17913__$1);
var G__17921 = null;
var G__17922 = (0);
var G__17923 = (0);
seq__16812_17899 = G__17920;
chunk__16813_17900 = G__17921;
count__16814_17901 = G__17922;
i__16815_17902 = G__17923;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__16816_17924 = cljs.core.seq(fields__$1);
var chunk__16817_17925 = null;
var count__16818_17926 = (0);
var i__16819_17927 = (0);
while(true){
if((i__16819_17927 < count__16818_17926)){
var fld_17928 = chunk__16817_17925.cljs$core$IIndexed$_nth$arity$2(null, i__16819_17927);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_17928," = ",fld_17928,";");


var G__17929 = seq__16816_17924;
var G__17930 = chunk__16817_17925;
var G__17931 = count__16818_17926;
var G__17932 = (i__16819_17927 + (1));
seq__16816_17924 = G__17929;
chunk__16817_17925 = G__17930;
count__16818_17926 = G__17931;
i__16819_17927 = G__17932;
continue;
} else {
var temp__5804__auto___17933 = cljs.core.seq(seq__16816_17924);
if(temp__5804__auto___17933){
var seq__16816_17934__$1 = temp__5804__auto___17933;
if(cljs.core.chunked_seq_QMARK_(seq__16816_17934__$1)){
var c__5525__auto___17935 = cljs.core.chunk_first(seq__16816_17934__$1);
var G__17936 = cljs.core.chunk_rest(seq__16816_17934__$1);
var G__17937 = c__5525__auto___17935;
var G__17938 = cljs.core.count(c__5525__auto___17935);
var G__17939 = (0);
seq__16816_17924 = G__17936;
chunk__16817_17925 = G__17937;
count__16818_17926 = G__17938;
i__16819_17927 = G__17939;
continue;
} else {
var fld_17940 = cljs.core.first(seq__16816_17934__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_17940," = ",fld_17940,";");


var G__17941 = cljs.core.next(seq__16816_17934__$1);
var G__17942 = null;
var G__17943 = (0);
var G__17944 = (0);
seq__16816_17924 = G__17941;
chunk__16817_17925 = G__17942;
count__16818_17926 = G__17943;
i__16819_17927 = G__17944;
continue;
}
} else {
}
}
break;
}

var seq__16820_17945 = cljs.core.seq(pmasks);
var chunk__16821_17946 = null;
var count__16822_17947 = (0);
var i__16823_17948 = (0);
while(true){
if((i__16823_17948 < count__16822_17947)){
var vec__16830_17952 = chunk__16821_17946.cljs$core$IIndexed$_nth$arity$2(null, i__16823_17948);
var pno_17953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16830_17952,(0),null);
var pmask_17954 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16830_17952,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_17953,"$ = ",pmask_17954,";");


var G__17955 = seq__16820_17945;
var G__17956 = chunk__16821_17946;
var G__17957 = count__16822_17947;
var G__17958 = (i__16823_17948 + (1));
seq__16820_17945 = G__17955;
chunk__16821_17946 = G__17956;
count__16822_17947 = G__17957;
i__16823_17948 = G__17958;
continue;
} else {
var temp__5804__auto___17960 = cljs.core.seq(seq__16820_17945);
if(temp__5804__auto___17960){
var seq__16820_17963__$1 = temp__5804__auto___17960;
if(cljs.core.chunked_seq_QMARK_(seq__16820_17963__$1)){
var c__5525__auto___17964 = cljs.core.chunk_first(seq__16820_17963__$1);
var G__17965 = cljs.core.chunk_rest(seq__16820_17963__$1);
var G__17966 = c__5525__auto___17964;
var G__17967 = cljs.core.count(c__5525__auto___17964);
var G__17968 = (0);
seq__16820_17945 = G__17965;
chunk__16821_17946 = G__17966;
count__16822_17947 = G__17967;
i__16823_17948 = G__17968;
continue;
} else {
var vec__16833_17969 = cljs.core.first(seq__16820_17963__$1);
var pno_17970 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833_17969,(0),null);
var pmask_17971 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16833_17969,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_17970,"$ = ",pmask_17971,";");


var G__17972 = cljs.core.next(seq__16820_17963__$1);
var G__17973 = null;
var G__17974 = (0);
var G__17975 = (0);
seq__16820_17945 = G__17972;
chunk__16821_17946 = G__17973;
count__16822_17947 = G__17974;
i__16823_17948 = G__17975;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"defrecord","defrecord",-1367493418),(function (p__16836){
var map__16837 = p__16836;
var map__16837__$1 = cljs.core.__destructure_map(map__16837);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16837__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("/**");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("* @constructor");

var seq__16838_17984 = cljs.core.seq(protocols);
var chunk__16839_17985 = null;
var count__16840_17986 = (0);
var i__16841_17987 = (0);
while(true){
if((i__16841_17987 < count__16840_17986)){
var protocol_17988 = chunk__16839_17985.cljs$core$IIndexed$_nth$arity$2(null, i__16841_17987);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_17988)),"}");


var G__17989 = seq__16838_17984;
var G__17990 = chunk__16839_17985;
var G__17991 = count__16840_17986;
var G__17992 = (i__16841_17987 + (1));
seq__16838_17984 = G__17989;
chunk__16839_17985 = G__17990;
count__16840_17986 = G__17991;
i__16841_17987 = G__17992;
continue;
} else {
var temp__5804__auto___17993 = cljs.core.seq(seq__16838_17984);
if(temp__5804__auto___17993){
var seq__16838_17994__$1 = temp__5804__auto___17993;
if(cljs.core.chunked_seq_QMARK_(seq__16838_17994__$1)){
var c__5525__auto___17995 = cljs.core.chunk_first(seq__16838_17994__$1);
var G__17996 = cljs.core.chunk_rest(seq__16838_17994__$1);
var G__17997 = c__5525__auto___17995;
var G__17998 = cljs.core.count(c__5525__auto___17995);
var G__17999 = (0);
seq__16838_17984 = G__17996;
chunk__16839_17985 = G__17997;
count__16840_17986 = G__17998;
i__16841_17987 = G__17999;
continue;
} else {
var protocol_18000 = cljs.core.first(seq__16838_17994__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3(" * @implements {",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol_18000)),"}");


var G__18001 = cljs.core.next(seq__16838_17994__$1);
var G__18002 = null;
var G__18003 = (0);
var G__18004 = (0);
seq__16838_17984 = G__18001;
chunk__16839_17985 = G__18002;
count__16840_17986 = G__18003;
i__16841_17987 = G__18004;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("*/");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$4(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){");

var seq__16842_18005 = cljs.core.seq(fields__$1);
var chunk__16843_18006 = null;
var count__16844_18007 = (0);
var i__16845_18008 = (0);
while(true){
if((i__16845_18008 < count__16844_18007)){
var fld_18009 = chunk__16843_18006.cljs$core$IIndexed$_nth$arity$2(null, i__16845_18008);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_18009," = ",fld_18009,";");


var G__18010 = seq__16842_18005;
var G__18011 = chunk__16843_18006;
var G__18012 = count__16844_18007;
var G__18013 = (i__16845_18008 + (1));
seq__16842_18005 = G__18010;
chunk__16843_18006 = G__18011;
count__16844_18007 = G__18012;
i__16845_18008 = G__18013;
continue;
} else {
var temp__5804__auto___18014 = cljs.core.seq(seq__16842_18005);
if(temp__5804__auto___18014){
var seq__16842_18015__$1 = temp__5804__auto___18014;
if(cljs.core.chunked_seq_QMARK_(seq__16842_18015__$1)){
var c__5525__auto___18016 = cljs.core.chunk_first(seq__16842_18015__$1);
var G__18017 = cljs.core.chunk_rest(seq__16842_18015__$1);
var G__18018 = c__5525__auto___18016;
var G__18019 = cljs.core.count(c__5525__auto___18016);
var G__18020 = (0);
seq__16842_18005 = G__18017;
chunk__16843_18006 = G__18018;
count__16844_18007 = G__18019;
i__16845_18008 = G__18020;
continue;
} else {
var fld_18021 = cljs.core.first(seq__16842_18015__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.",fld_18021," = ",fld_18021,";");


var G__18022 = cljs.core.next(seq__16842_18015__$1);
var G__18023 = null;
var G__18024 = (0);
var G__18025 = (0);
seq__16842_18005 = G__18022;
chunk__16843_18006 = G__18023;
count__16844_18007 = G__18024;
i__16845_18008 = G__18025;
continue;
}
} else {
}
}
break;
}

var seq__16846_18026 = cljs.core.seq(pmasks);
var chunk__16847_18027 = null;
var count__16848_18028 = (0);
var i__16849_18029 = (0);
while(true){
if((i__16849_18029 < count__16848_18028)){
var vec__16856_18030 = chunk__16847_18027.cljs$core$IIndexed$_nth$arity$2(null, i__16849_18029);
var pno_18031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856_18030,(0),null);
var pmask_18032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16856_18030,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_18031,"$ = ",pmask_18032,";");


var G__18034 = seq__16846_18026;
var G__18035 = chunk__16847_18027;
var G__18036 = count__16848_18028;
var G__18037 = (i__16849_18029 + (1));
seq__16846_18026 = G__18034;
chunk__16847_18027 = G__18035;
count__16848_18028 = G__18036;
i__16849_18029 = G__18037;
continue;
} else {
var temp__5804__auto___18039 = cljs.core.seq(seq__16846_18026);
if(temp__5804__auto___18039){
var seq__16846_18041__$1 = temp__5804__auto___18039;
if(cljs.core.chunked_seq_QMARK_(seq__16846_18041__$1)){
var c__5525__auto___18043 = cljs.core.chunk_first(seq__16846_18041__$1);
var G__18044 = cljs.core.chunk_rest(seq__16846_18041__$1);
var G__18045 = c__5525__auto___18043;
var G__18046 = cljs.core.count(c__5525__auto___18043);
var G__18047 = (0);
seq__16846_18026 = G__18044;
chunk__16847_18027 = G__18045;
count__16848_18028 = G__18046;
i__16849_18029 = G__18047;
continue;
} else {
var vec__16859_18048 = cljs.core.first(seq__16846_18041__$1);
var pno_18049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859_18048,(0),null);
var pmask_18050 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16859_18048,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$5("this.cljs$lang$protocol_mask$partition",pno_18049,"$ = ",pmask_18050,";");


var G__18051 = cljs.core.next(seq__16846_18041__$1);
var G__18052 = null;
var G__18053 = (0);
var G__18054 = (0);
seq__16846_18026 = G__18051;
chunk__16847_18027 = G__18052;
count__16848_18028 = G__18053;
i__16849_18029 = G__18054;
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
cljs.compiler.emit_dot = (function cljs$compiler$emit_dot(p__16862){
var map__16863 = p__16862;
var map__16863__$1 = cljs.core.__destructure_map(map__16863);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16863__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16863__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16863__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16863__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16863__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$3(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"host-field","host-field",-72662140),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"host-call","host-call",1059629755),(function (ast){
return cljs.compiler.emit_dot(ast);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"js","js",1768080579),(function (p__16864){
var map__16865 = p__16864;
var map__16865__$1 = cljs.core.__destructure_map(map__16865);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16865__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16865__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16865__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16865__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16865__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__5000__auto__ = code;
if(cljs.core.truth_(and__5000__auto__)){
return goog.string.startsWith(clojure.string.trim(code),"/*");
} else {
return and__5000__auto__;
}
})())){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
var env__8329__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1("return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(code);
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__8329__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1(";");
}
}
}));
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.analyzer.constants_ns_sym),"');");

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$1("goog.require('cljs.core');");

var seq__16870 = cljs.core.seq(table);
var chunk__16871 = null;
var count__16872 = (0);
var i__16873 = (0);
while(true){
if((i__16873 < count__16872)){
var vec__16880 = chunk__16871.cljs$core$IIndexed$_nth$arity$2(null, i__16873);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16880,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16880,(1),null);
var ns_18111 = cljs.core.namespace(sym);
var name_18112 = cljs.core.name(sym);
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


var G__18113 = seq__16870;
var G__18114 = chunk__16871;
var G__18115 = count__16872;
var G__18116 = (i__16873 + (1));
seq__16870 = G__18113;
chunk__16871 = G__18114;
count__16872 = G__18115;
i__16873 = G__18116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16870);
if(temp__5804__auto__){
var seq__16870__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16870__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__16870__$1);
var G__18124 = cljs.core.chunk_rest(seq__16870__$1);
var G__18125 = c__5525__auto__;
var G__18126 = cljs.core.count(c__5525__auto__);
var G__18127 = (0);
seq__16870 = G__18124;
chunk__16871 = G__18125;
count__16872 = G__18126;
i__16873 = G__18127;
continue;
} else {
var vec__16883 = cljs.core.first(seq__16870__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16883,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16883,(1),null);
var ns_18129 = cljs.core.namespace(sym);
var name_18130 = cljs.core.name(sym);
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


var G__18131 = cljs.core.next(seq__16870__$1);
var G__18132 = null;
var G__18133 = (0);
var G__18134 = (0);
seq__16870 = G__18131;
chunk__16871 = G__18132;
count__16872 = G__18133;
i__16873 = G__18134;
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
var G__16887 = arguments.length;
switch (G__16887) {
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
var k_18142 = cljs.core.first(ks);
var vec__16888_18143 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prefix,k_18142);
var top_18144 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16888_18143,(0),null);
var prefix_SINGLEQUOTE__18145 = vec__16888_18143;
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"prototype","prototype",519166522,null),k_18142)) && ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(known_externs,prefix_SINGLEQUOTE__18145) == null)))){
if((!(((cljs.core.contains_QMARK_(cljs.core.deref(top_level),top_18144)) || (cljs.core.contains_QMARK_(known_externs,top_18144)))))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$3("var ",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18145)),";");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(top_level,cljs.core.conj,top_18144);
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$2(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,prefix_SINGLEQUOTE__18145)),";");
}
} else {
}

var m_18154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(externs,k_18142);
if(cljs.core.empty_QMARK_(m_18154)){
} else {
cljs.compiler.emit_externs.cljs$core$IFn$_invoke$arity$4(prefix_SINGLEQUOTE__18145,m_18154,top_level,known_externs);
}

var G__18162 = cljs.core.next(ks);
ks = G__18162;
continue;
} else {
return null;
}
break;
}
}));

(cljs.compiler.emit_externs.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=cljs.compiler.js.map
