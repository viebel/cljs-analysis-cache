// Compiled by ClojureScript 1.10.597
goog.provide("hicada.compiler");
hicada.compiler.default_handlers = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,">",">",(-555517146)),(function() {
var G__40 = null;
var G__40__2 = (function (_,klass){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass,cljs.core.PersistentArrayMap.EMPTY,null], null);
});
var G__40__4 = (function() { 
var G__41__delegate = function (_,klass,attrs,children){
if(cljs.core.map_QMARK_.call(null,attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass,attrs,children], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons.call(null,attrs,children)], null);
}
};
var G__41 = function (_,klass,attrs,var_args){
var children = null;
if (arguments.length > 3) {
var G__42__i = 0, G__42__a = new Array(arguments.length -  3);
while (G__42__i < G__42__a.length) {G__42__a[G__42__i] = arguments[G__42__i + 3]; ++G__42__i;}
  children = new cljs.core.IndexedSeq(G__42__a,0,null);
} 
return G__41__delegate.call(this,_,klass,attrs,children);};
G__41.cljs$lang$maxFixedArity = 3;
G__41.cljs$lang$applyTo = (function (arglist__43){
var _ = cljs.core.first(arglist__43);
arglist__43 = cljs.core.next(arglist__43);
var klass = cljs.core.first(arglist__43);
arglist__43 = cljs.core.next(arglist__43);
var attrs = cljs.core.first(arglist__43);
var children = cljs.core.rest(arglist__43);
return G__41__delegate(_,klass,attrs,children);
});
G__41.cljs$core$IFn$_invoke$arity$variadic = G__41__delegate;
return G__41;
})()
;
G__40 = function(_,klass,attrs,var_args){
var children = var_args;
switch(arguments.length){
case 2:
return G__40__2.call(this,_,klass);
default:
var G__44 = null;
if (arguments.length > 3) {
var G__45__i = 0, G__45__a = new Array(arguments.length -  3);
while (G__45__i < G__45__a.length) {G__45__a[G__45__i] = arguments[G__45__i + 3]; ++G__45__i;}
G__44 = new cljs.core.IndexedSeq(G__45__a,0,null);
}
return G__40__4.cljs$core$IFn$_invoke$arity$variadic(_,klass,attrs, G__44);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__40.cljs$lang$maxFixedArity = 3;
G__40.cljs$lang$applyTo = G__40__4.cljs$lang$applyTo;
G__40.cljs$core$IFn$_invoke$arity$2 = G__40__2;
G__40.cljs$core$IFn$_invoke$arity$variadic = G__40__4.cljs$core$IFn$_invoke$arity$variadic;
return G__40;
})()
,new cljs.core.Keyword(null,"*","*",(-1294732318)),(function() { 
var G__46__delegate = function (_,attrs,children){
if(cljs.core.map_QMARK_.call(null,attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("js","React.Fragment","js/React.Fragment",(49308998),null),attrs,children], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("js","React.Fragment","js/React.Fragment",(49308998),null),cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons.call(null,attrs,children)], null);
}
};
var G__46 = function (_,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__47__i = 0, G__47__a = new Array(arguments.length -  2);
while (G__47__i < G__47__a.length) {G__47__a[G__47__i] = arguments[G__47__i + 2]; ++G__47__i;}
  children = new cljs.core.IndexedSeq(G__47__a,0,null);
} 
return G__46__delegate.call(this,_,attrs,children);};
G__46.cljs$lang$maxFixedArity = 2;
G__46.cljs$lang$applyTo = (function (arglist__48){
var _ = cljs.core.first(arglist__48);
arglist__48 = cljs.core.next(arglist__48);
var attrs = cljs.core.first(arglist__48);
var children = cljs.core.rest(arglist__48);
return G__46__delegate(_,attrs,children);
});
G__46.cljs$core$IFn$_invoke$arity$variadic = G__46__delegate;
return G__46;
})()
], null);
hicada.compiler.default_config = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"array-children?","array-children?",(-702873599)),new cljs.core.Keyword(null,"child-config","child-config",(-283547326)),new cljs.core.Keyword(null,"rewrite-for?","rewrite-for?",(-695900222)),new cljs.core.Keyword(null,"wrap-input?","wrap-input?",(-768545651)),new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)),new cljs.core.Keyword(null,"transform-fn","transform-fn",(1106801327)),new cljs.core.Keyword(null,"inline?","inline?",(-1674483791)),new cljs.core.Keyword(null,"camelcase-key-pred","camelcase-key-pred",(-48836589)),new cljs.core.Keyword(null,"create-element","create-element",(193243064)),new cljs.core.Keyword(null,"server-render?","server-render?",(928780892))],[false,(function (options,form,expanded){
return options;
}),false,false,null,cljs.core.identity,false,cljs.core.some_fn.call(null,cljs.core.keyword_QMARK_,cljs.core.symbol_QMARK_),new cljs.core.Symbol("js","React.createElement","js/React.createElement",(1766367641),null),false]);
hicada.compiler._STAR_config_STAR_ = hicada.compiler.default_config;
hicada.compiler._STAR_handlers_STAR_ = hicada.compiler.default_handlers;
hicada.compiler._STAR_env_STAR_ = null;
if((typeof hicada !== 'undefined') && (typeof hicada.compiler !== 'undefined') && (typeof hicada.compiler.compile_react !== 'undefined')){
} else {
/**
 * Compile a Clojure data structure into a React fn call.
 */
hicada.compiler.compile_react = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hicada.compiler","compile-react"),(function (x){
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"vector","vector",(1902966158));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"seq","seq",(-1817803783));
} else {
return cljs.core.type.call(null,x);

}
}
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof hicada !== 'undefined') && (typeof hicada.compiler !== 'undefined') && (typeof hicada.compiler.compile_config_kv !== 'undefined')){
} else {
hicada.compiler.compile_config_kv = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hicada.compiler","compile-config-kv"),(function (name,value){
return name;
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,hicada.compiler.compile_config_kv,new cljs.core.Keyword(null,"class","class",(-2030961996)),(function (name,value){
if((((value == null)) || ((value instanceof cljs.core.Keyword)) || (typeof value === 'string'))){
return value;
} else {
if(((((cljs.core.sequential_QMARK_.call(null,value)) || (cljs.core.set_QMARK_.call(null,value)))) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,value)))){
return hicada.util.join_classes.call(null,value);
} else {
if(((cljs.core.vector_QMARK_.call(null,value)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"server-render?","server-render?",(928780892)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_))))){
return cljs.core.apply.call(null,hicada.util.join_classes_js,value);
} else {
return value;

}
}
}
}));
cljs.core._add_method.call(null,hicada.compiler.compile_config_kv,new cljs.core.Keyword(null,"style","style",(-496642736)),(function (name,value){
return hicada.util.camel_case_keys.call(null,value);
}));
cljs.core._add_method.call(null,hicada.compiler.compile_config_kv,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (name,value){
return value;
}));
/**
 * Compile a HTML attribute map to react (class -> className), camelCases :style.
 */
hicada.compiler.compile_config = (function hicada$compiler$compile_config(attrs){
if(cljs.core.map_QMARK_.call(null,attrs)){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,(function (){var G__49 = k;
var G__49__$1 = (((G__49 instanceof cljs.core.Keyword))?G__49.fqn:null);
switch (G__49__$1) {
case "class":
return new cljs.core.Keyword(null,"className","className",(-1983287057));

break;
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",(-1050291720));

break;
default:
if(cljs.core.truth_(new cljs.core.Keyword(null,"camelcase-key-pred","camelcase-key-pred",(-48836589)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_).call(null,k))){
return hicada.util.camel_case.call(null,k);
} else {
return k;
}

}
})(),hicada.compiler.compile_config_kv.call(null,k,v));
}),cljs.core.PersistentArrayMap.EMPTY,attrs);
} else {
return attrs;
}
});
/**
 * True if the expression has not been evaluated.
 * - expr is a symbol? OR
 * - it's something like (foo bar)
 */
hicada.compiler.unevaluated_QMARK_ = (function hicada$compiler$unevaluated_QMARK_(expr){
return (((expr instanceof cljs.core.Symbol)) || (((cljs.core.seq_QMARK_.call(null,expr)) && (cljs.core.not_EQ_.call(null,cljs.core.first.call(null,expr),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))))));
});
/**
 * Get the name of the supplied form.
 */
hicada.compiler.form_name = (function hicada$compiler$form_name(form){
if(((cljs.core.seq_QMARK_.call(null,form)) && ((cljs.core.first.call(null,form) instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,cljs.core.first.call(null,form));
} else {
return null;
}
});
if((typeof hicada !== 'undefined') && (typeof hicada.compiler !== 'undefined') && (typeof hicada.compiler.compile_form !== 'undefined')){
} else {
/**
 * Pre-compile certain standard forms, where possible.
 */
hicada.compiler.compile_form = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hicada.compiler","compile-form"),hicada.compiler.form_name,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,hicada.compiler.compile_form,"do",(function (p__51){
var vec__52 = p__51;
var seq__53 = cljs.core.seq.call(null,vec__52);
var first__54 = cljs.core.first.call(null,seq__53);
var seq__53__$1 = cljs.core.next.call(null,seq__53);
var _ = first__54;
var forms = seq__53__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),cljs.core.butlast.call(null,forms),(new cljs.core.List(null,hicada.compiler.emitter.call(null,cljs.core.last.call(null,forms)),null,(1),null))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"array",(function (p__55){
var vec__56 = p__55;
var seq__57 = cljs.core.seq.call(null,vec__56);
var first__58 = cljs.core.first.call(null,seq__57);
var seq__57__$1 = cljs.core.next.call(null,seq__57);
var _ = first__58;
var forms = seq__57__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",(486685886),null),null,(1),null)),cljs.core.mapv.call(null,hicada.compiler.emitter,forms)));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"let",(function (p__59){
var vec__60 = p__59;
var seq__61 = cljs.core.seq.call(null,vec__60);
var first__62 = cljs.core.first.call(null,seq__61);
var seq__61__$1 = cljs.core.next.call(null,seq__61);
var _ = first__62;
var first__62__$1 = cljs.core.first.call(null,seq__61__$1);
var seq__61__$2 = cljs.core.next.call(null,seq__61__$1);
var bindings = first__62__$1;
var body = seq__61__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.butlast.call(null,body),(new cljs.core.List(null,hicada.compiler.emitter.call(null,cljs.core.last.call(null,body)),null,(1),null))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"let*",(function (p__63){
var vec__64 = p__63;
var seq__65 = cljs.core.seq.call(null,vec__64);
var first__66 = cljs.core.first.call(null,seq__65);
var seq__65__$1 = cljs.core.next.call(null,seq__65);
var _ = first__66;
var first__66__$1 = cljs.core.first.call(null,seq__65__$1);
var seq__65__$2 = cljs.core.next.call(null,seq__65__$1);
var bindings = first__66__$1;
var body = seq__65__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",(1920721458),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.butlast.call(null,body),(new cljs.core.List(null,hicada.compiler.emitter.call(null,cljs.core.last.call(null,body)),null,(1),null))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"letfn*",(function (p__67){
var vec__68 = p__67;
var seq__69 = cljs.core.seq.call(null,vec__68);
var first__70 = cljs.core.first.call(null,seq__69);
var seq__69__$1 = cljs.core.next.call(null,seq__69);
var _ = first__70;
var first__70__$1 = cljs.core.first.call(null,seq__69__$1);
var seq__69__$2 = cljs.core.next.call(null,seq__69__$1);
var bindings = first__70__$1;
var body = seq__69__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"letfn*","letfn*",(-110097810),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.butlast.call(null,body),(new cljs.core.List(null,hicada.compiler.emitter.call(null,cljs.core.last.call(null,body)),null,(1),null))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"for",(function (p__71){
var vec__72 = p__71;
var _ = cljs.core.nth.call(null,vec__72,(0),null);
var bindings = cljs.core.nth.call(null,vec__72,(1),null);
var body = cljs.core.nth.call(null,vec__72,(2),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"rewrite-for?","rewrite-for?",(-695900222)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_))){
if(((2) === cljs.core.count.call(null,bindings))){
var vec__75 = bindings;
var item = cljs.core.nth.call(null,vec__75,(0),null);
var coll = cljs.core.nth.call(null,vec__75,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",(2025430439),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hicada-for-reducer","hicada-for-reducer",(-1930156149),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"out-arr__5__auto__","out-arr__5__auto__",(1580892735),null),null,(1),null)),(new cljs.core.List(null,item,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",(-1497267248),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out-arr__5__auto__","out-arr__5__auto__",(1580892735),null),null,(1),null)),(new cljs.core.List(null,hicada.compiler.emitter.call(null,body),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"out-arr__5__auto__","out-arr__5__auto__",(1580892735),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",(486685886),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,coll,null,(1),null))));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into-array","cljs.core/into-array",(1215545861),null),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",(-89947499),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,hicada.compiler.emitter.call(null,body),null,(1),null)))),null,(1),null)),(2),null));
}
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","for","cljs.core/for",(-89947499),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,hicada.compiler.emitter.call(null,body),null,(1),null))));
}
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"if",(function (p__78){
var vec__79 = p__78;
var seq__80 = cljs.core.seq.call(null,vec__79);
var first__81 = cljs.core.first.call(null,seq__80);
var seq__80__$1 = cljs.core.next.call(null,seq__80);
var _ = first__81;
var first__81__$1 = cljs.core.first.call(null,seq__80__$1);
var seq__80__$2 = cljs.core.next.call(null,seq__80__$1);
var condition = first__81__$1;
var body = seq__80__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,condition,null,(1),null)),cljs.core.doall.call(null,(function (){var iter__11965__auto__ = (function hicada$compiler$iter__82(s__83){
return (new cljs.core.LazySeq(null,(function (){
var s__83__$1 = s__83;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__83__$1);
if(temp__9522__auto__){
var s__83__$2 = temp__9522__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__83__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__83__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__85 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__84 = (0);
while(true){
if((i__84 < size__11964__auto__)){
var x = cljs.core._nth.call(null,c__11961__auto__,i__84);
cljs.core.chunk_append.call(null,b__85,hicada.compiler.emitter.call(null,x));

var G__86 = (i__84 + (1));
i__84 = G__86;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85),hicada$compiler$iter__82.call(null,cljs.core.chunk_rest.call(null,s__83__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__85),null);
}
} else {
var x = cljs.core.first.call(null,s__83__$2);
return cljs.core.cons.call(null,hicada.compiler.emitter.call(null,x),hicada$compiler$iter__82.call(null,cljs.core.rest.call(null,s__83__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,body);
})())));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"when",(function (p__87){
var vec__88 = p__87;
var seq__89 = cljs.core.seq.call(null,vec__88);
var first__90 = cljs.core.first.call(null,seq__89);
var seq__89__$1 = cljs.core.next.call(null,seq__89);
var _ = first__90;
var first__90__$1 = cljs.core.first.call(null,seq__89__$1);
var seq__89__$2 = cljs.core.next.call(null,seq__89__$1);
var bindings = first__90__$1;
var body = seq__89__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.doall.call(null,(function (){var iter__11965__auto__ = (function hicada$compiler$iter__91(s__92){
return (new cljs.core.LazySeq(null,(function (){
var s__92__$1 = s__92;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__92__$1);
if(temp__9522__auto__){
var s__92__$2 = temp__9522__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__92__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__92__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__94 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__93 = (0);
while(true){
if((i__93 < size__11964__auto__)){
var x = cljs.core._nth.call(null,c__11961__auto__,i__93);
cljs.core.chunk_append.call(null,b__94,hicada.compiler.emitter.call(null,x));

var G__95 = (i__93 + (1));
i__93 = G__95;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__94),hicada$compiler$iter__91.call(null,cljs.core.chunk_rest.call(null,s__92__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__94),null);
}
} else {
var x = cljs.core.first.call(null,s__92__$2);
return cljs.core.cons.call(null,hicada.compiler.emitter.call(null,x),hicada$compiler$iter__91.call(null,cljs.core.rest.call(null,s__92__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,body);
})())));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"when-some",(function (p__96){
var vec__97 = p__96;
var seq__98 = cljs.core.seq.call(null,vec__97);
var first__99 = cljs.core.first.call(null,seq__98);
var seq__98__$1 = cljs.core.next.call(null,seq__98);
var _ = first__99;
var first__99__$1 = cljs.core.first.call(null,seq__98__$1);
var seq__98__$2 = cljs.core.next.call(null,seq__98__$1);
var bindings = first__99__$1;
var body = seq__98__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-some","cljs.core/when-some",(1033431610),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.butlast.call(null,body),(new cljs.core.List(null,hicada.compiler.emitter.call(null,cljs.core.last.call(null,body)),null,(1),null))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"when-let",(function (p__100){
var vec__101 = p__100;
var seq__102 = cljs.core.seq.call(null,vec__101);
var first__103 = cljs.core.first.call(null,seq__102);
var seq__102__$1 = cljs.core.next.call(null,seq__102);
var _ = first__103;
var first__103__$1 = cljs.core.first.call(null,seq__102__$1);
var seq__102__$2 = cljs.core.next.call(null,seq__102__$1);
var bindings = first__103__$1;
var body = seq__102__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",(-2049838349),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.butlast.call(null,body),(new cljs.core.List(null,hicada.compiler.emitter.call(null,cljs.core.last.call(null,body)),null,(1),null))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"when-first",(function (p__104){
var vec__105 = p__104;
var seq__106 = cljs.core.seq.call(null,vec__105);
var first__107 = cljs.core.first.call(null,seq__106);
var seq__106__$1 = cljs.core.next.call(null,seq__106);
var _ = first__107;
var first__107__$1 = cljs.core.first.call(null,seq__106__$1);
var seq__106__$2 = cljs.core.next.call(null,seq__106__$1);
var bindings = first__107__$1;
var body = seq__106__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-first","cljs.core/when-first",(-667185267),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.butlast.call(null,body),(new cljs.core.List(null,hicada.compiler.emitter.call(null,cljs.core.last.call(null,body)),null,(1),null))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"when-not",(function (p__108){
var vec__109 = p__108;
var seq__110 = cljs.core.seq.call(null,vec__109);
var first__111 = cljs.core.first.call(null,seq__110);
var seq__110__$1 = cljs.core.next.call(null,seq__110);
var _ = first__111;
var first__111__$1 = cljs.core.first.call(null,seq__110__$1);
var seq__110__$2 = cljs.core.next.call(null,seq__110__$1);
var bindings = first__111__$1;
var body = seq__110__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",(-556141047),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.doall.call(null,(function (){var iter__11965__auto__ = (function hicada$compiler$iter__112(s__113){
return (new cljs.core.LazySeq(null,(function (){
var s__113__$1 = s__113;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__113__$1);
if(temp__9522__auto__){
var s__113__$2 = temp__9522__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__113__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__113__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__115 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__114 = (0);
while(true){
if((i__114 < size__11964__auto__)){
var x = cljs.core._nth.call(null,c__11961__auto__,i__114);
cljs.core.chunk_append.call(null,b__115,hicada.compiler.emitter.call(null,x));

var G__116 = (i__114 + (1));
i__114 = G__116;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__115),hicada$compiler$iter__112.call(null,cljs.core.chunk_rest.call(null,s__113__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__115),null);
}
} else {
var x = cljs.core.first.call(null,s__113__$2);
return cljs.core.cons.call(null,hicada.compiler.emitter.call(null,x),hicada$compiler$iter__112.call(null,cljs.core.rest.call(null,s__113__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,body);
})())));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"if-not",(function (p__117){
var vec__118 = p__117;
var seq__119 = cljs.core.seq.call(null,vec__118);
var first__120 = cljs.core.first.call(null,seq__119);
var seq__119__$1 = cljs.core.next.call(null,seq__119);
var _ = first__120;
var first__120__$1 = cljs.core.first.call(null,seq__119__$1);
var seq__119__$2 = cljs.core.next.call(null,seq__119__$1);
var bindings = first__120__$1;
var body = seq__119__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",(-1997686824),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.doall.call(null,(function (){var iter__11965__auto__ = (function hicada$compiler$iter__121(s__122){
return (new cljs.core.LazySeq(null,(function (){
var s__122__$1 = s__122;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__122__$1);
if(temp__9522__auto__){
var s__122__$2 = temp__9522__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__122__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__122__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__124 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__123 = (0);
while(true){
if((i__123 < size__11964__auto__)){
var x = cljs.core._nth.call(null,c__11961__auto__,i__123);
cljs.core.chunk_append.call(null,b__124,hicada.compiler.emitter.call(null,x));

var G__125 = (i__123 + (1));
i__123 = G__125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__124),hicada$compiler$iter__121.call(null,cljs.core.chunk_rest.call(null,s__122__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__124),null);
}
} else {
var x = cljs.core.first.call(null,s__122__$2);
return cljs.core.cons.call(null,hicada.compiler.emitter.call(null,x),hicada$compiler$iter__121.call(null,cljs.core.rest.call(null,s__122__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,body);
})())));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"if-some",(function (p__126){
var vec__127 = p__126;
var seq__128 = cljs.core.seq.call(null,vec__127);
var first__129 = cljs.core.first.call(null,seq__128);
var seq__128__$1 = cljs.core.next.call(null,seq__128);
var _ = first__129;
var first__129__$1 = cljs.core.first.call(null,seq__128__$1);
var seq__128__$2 = cljs.core.next.call(null,seq__128__$1);
var bindings = first__129__$1;
var body = seq__128__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-some","cljs.core/if-some",(790328718),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.doall.call(null,(function (){var iter__11965__auto__ = (function hicada$compiler$iter__130(s__131){
return (new cljs.core.LazySeq(null,(function (){
var s__131__$1 = s__131;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__131__$1);
if(temp__9522__auto__){
var s__131__$2 = temp__9522__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__131__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__131__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__133 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__132 = (0);
while(true){
if((i__132 < size__11964__auto__)){
var x = cljs.core._nth.call(null,c__11961__auto__,i__132);
cljs.core.chunk_append.call(null,b__133,hicada.compiler.emitter.call(null,x));

var G__134 = (i__132 + (1));
i__132 = G__134;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__133),hicada$compiler$iter__130.call(null,cljs.core.chunk_rest.call(null,s__131__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__133),null);
}
} else {
var x = cljs.core.first.call(null,s__131__$2);
return cljs.core.cons.call(null,hicada.compiler.emitter.call(null,x),hicada$compiler$iter__130.call(null,cljs.core.rest.call(null,s__131__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,body);
})())));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"if-let",(function (p__135){
var vec__136 = p__135;
var seq__137 = cljs.core.seq.call(null,vec__136);
var first__138 = cljs.core.first.call(null,seq__137);
var seq__137__$1 = cljs.core.next.call(null,seq__137);
var _ = first__138;
var first__138__$1 = cljs.core.first.call(null,seq__137__$1);
var seq__137__$2 = cljs.core.next.call(null,seq__137__$1);
var bindings = first__138__$1;
var body = seq__137__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",(1346583165),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.doall.call(null,(function (){var iter__11965__auto__ = (function hicada$compiler$iter__139(s__140){
return (new cljs.core.LazySeq(null,(function (){
var s__140__$1 = s__140;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__140__$1);
if(temp__9522__auto__){
var s__140__$2 = temp__9522__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__140__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__140__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__142 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__141 = (0);
while(true){
if((i__141 < size__11964__auto__)){
var x = cljs.core._nth.call(null,c__11961__auto__,i__141);
cljs.core.chunk_append.call(null,b__142,hicada.compiler.emitter.call(null,x));

var G__143 = (i__141 + (1));
i__141 = G__143;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__142),hicada$compiler$iter__139.call(null,cljs.core.chunk_rest.call(null,s__140__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__142),null);
}
} else {
var x = cljs.core.first.call(null,s__140__$2);
return cljs.core.cons.call(null,hicada.compiler.emitter.call(null,x),hicada$compiler$iter__139.call(null,cljs.core.rest.call(null,s__140__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,body);
})())));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"case",(function (p__144){
var vec__145 = p__144;
var seq__146 = cljs.core.seq.call(null,vec__145);
var first__147 = cljs.core.first.call(null,seq__146);
var seq__146__$1 = cljs.core.next.call(null,seq__146);
var _ = first__147;
var first__147__$1 = cljs.core.first.call(null,seq__146__$1);
var seq__146__$2 = cljs.core.next.call(null,seq__146__$1);
var v = first__147__$1;
var cases = seq__146__$2;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",(-1674122212),null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.doall.call(null,cljs.core.mapcat.call(null,(function (p__148){
var vec__149 = p__148;
var test = cljs.core.nth.call(null,vec__149,(0),null);
var hiccup = cljs.core.nth.call(null,vec__149,(1),null);
if(cljs.core.truth_(hiccup)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,hicada.compiler.emitter.call(null,hiccup)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hicada.compiler.emitter.call(null,test)], null);
}
}),cljs.core.partition_all.call(null,(2),cases)))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"condp",(function (p__152){
var vec__153 = p__152;
var seq__154 = cljs.core.seq.call(null,vec__153);
var first__155 = cljs.core.first.call(null,seq__154);
var seq__154__$1 = cljs.core.next.call(null,seq__154);
var _ = first__155;
var first__155__$1 = cljs.core.first.call(null,seq__154__$1);
var seq__154__$2 = cljs.core.next.call(null,seq__154__$1);
var f = first__155__$1;
var first__155__$2 = cljs.core.first.call(null,seq__154__$2);
var seq__154__$3 = cljs.core.next.call(null,seq__154__$2);
var v = first__155__$2;
var cases = seq__154__$3;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","condp","cljs.core/condp",(353371154),null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.doall.call(null,cljs.core.mapcat.call(null,(function (p__156){
var vec__157 = p__156;
var test = cljs.core.nth.call(null,vec__157,(0),null);
var hiccup = cljs.core.nth.call(null,vec__157,(1),null);
if(cljs.core.truth_(hiccup)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,hicada.compiler.emitter.call(null,hiccup)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hicada.compiler.emitter.call(null,test)], null);
}
}),cljs.core.partition_all.call(null,(2),cases)))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,"cond",(function (p__160){
var vec__161 = p__160;
var seq__162 = cljs.core.seq.call(null,vec__161);
var first__163 = cljs.core.first.call(null,seq__162);
var seq__162__$1 = cljs.core.next.call(null,seq__162);
var _ = first__163;
var clauses = seq__162__$1;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),cljs.core.doall.call(null,cljs.core.mapcat.call(null,(function (p__164){
var vec__165 = p__164;
var check = cljs.core.nth.call(null,vec__165,(0),null);
var expr = cljs.core.nth.call(null,vec__165,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [check,hicada.compiler.emitter.call(null,expr)], null);
}),cljs.core.partition.call(null,(2),clauses)))));
}));
cljs.core._add_method.call(null,hicada.compiler.compile_form,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (expr){
return expr;
}));
/**
 * True if x is a literal value that can be rendered as-is.
 */
hicada.compiler.literal_QMARK_ = (function hicada$compiler$literal_QMARK_(x){
return (((!(hicada.compiler.unevaluated_QMARK_.call(null,x)))) && ((((!(((cljs.core.vector_QMARK_.call(null,x)) || (cljs.core.map_QMARK_.call(null,x)))))) || (((cljs.core.every_QMARK_.call(null,hicada.compiler.literal_QMARK_,x)) && ((!((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)))))))));
});
/**
 * Render an element vector as a HTML element.
 */
hicada.compiler.compile_react_element = (function hicada$compiler$compile_react_element(element){
var vec__168 = hicada.normalize.element.call(null,element);
var tag = cljs.core.nth.call(null,vec__168,(0),null);
var attrs = cljs.core.nth.call(null,vec__168,(1),null);
var content = cljs.core.nth.call(null,vec__168,(2),null);
return hicada.compiler.emit_react.call(null,tag,attrs,(cljs.core.truth_(content)?hicada.compiler.compile_react.call(null,content):null));
});
/**
 * Returns an unevaluated form that will render the supplied vector as a HTML element.
 */
hicada.compiler.compile_element = (function hicada$compiler$compile_element(p__171){
var vec__172 = p__171;
var seq__173 = cljs.core.seq.call(null,vec__172);
var first__174 = cljs.core.first.call(null,seq__173);
var seq__173__$1 = cljs.core.next.call(null,seq__173);
var tag = first__174;
var first__174__$1 = cljs.core.first.call(null,seq__173__$1);
var seq__173__$2 = cljs.core.next.call(null,seq__173__$1);
var attrs = first__174__$1;
var children = seq__173__$2;
var element = vec__172;
if(cljs.core.truth_(cljs.core.get.call(null,hicada.compiler._STAR_handlers_STAR_,tag))){
var f = cljs.core.get.call(null,hicada.compiler._STAR_handlers_STAR_,tag);
var vec__175 = cljs.core.apply.call(null,f,element);
var klass = cljs.core.nth.call(null,vec__175,(0),null);
var attrs__$1 = cljs.core.nth.call(null,vec__175,(1),null);
var children__$1 = cljs.core.nth.call(null,vec__175,(2),null);
return hicada.compiler.emit_react.call(null,klass,attrs__$1,(function (){var cfg__3__auto__ = hicada.compiler._STAR_config_STAR_;
var new_cfg__4__auto__ = new cljs.core.Keyword(null,"child-config","child-config",(-283547326)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_).call(null,hicada.compiler._STAR_config_STAR_,element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass,attrs__$1], null));
var _STAR_config_STAR__orig_val__178 = hicada.compiler._STAR_config_STAR_;
var _STAR_config_STAR__temp_val__179 = new_cfg__4__auto__;
(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__temp_val__179);

try{return cljs.core.mapv.call(null,hicada.compiler.compile_html,children__$1);
}finally {(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__orig_val__178);
}})());
} else {
if(((hicada.compiler.literal_QMARK_.call(null,tag)) && (cljs.core.map_QMARK_.call(null,attrs)))){
var vec__180 = hicada.normalize.element.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs], null));
var tag__$1 = cljs.core.nth.call(null,vec__180,(0),null);
var attrs__$1 = cljs.core.nth.call(null,vec__180,(1),null);
var _ = cljs.core.nth.call(null,vec__180,(2),null);
return hicada.compiler.emit_react.call(null,tag__$1,attrs__$1,(function (){var cfg__3__auto__ = hicada.compiler._STAR_config_STAR_;
var new_cfg__4__auto__ = new cljs.core.Keyword(null,"child-config","child-config",(-283547326)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_).call(null,hicada.compiler._STAR_config_STAR_,element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,attrs__$1], null));
var _STAR_config_STAR__orig_val__183 = hicada.compiler._STAR_config_STAR_;
var _STAR_config_STAR__temp_val__184 = new_cfg__4__auto__;
(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__temp_val__184);

try{return cljs.core.mapv.call(null,hicada.compiler.compile_html,children);
}finally {(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__orig_val__183);
}})());
} else {
if(hicada.compiler.literal_QMARK_.call(null,tag)){
return hicada.compiler.compile_element.call(null,cljs.core.list_STAR_.call(null,tag,cljs.core.PersistentArrayMap.EMPTY,attrs,children));
} else {
if(((cljs.core.vector_QMARK_.call(null,element)) && (cljs.core.map_QMARK_.call(null,attrs)))){
return hicada.compiler.emit_react.call(null,tag,attrs,(function (){var cfg__3__auto__ = hicada.compiler._STAR_config_STAR_;
var new_cfg__4__auto__ = new cljs.core.Keyword(null,"child-config","child-config",(-283547326)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_).call(null,hicada.compiler._STAR_config_STAR_,element,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs], null));
var _STAR_config_STAR__orig_val__185 = hicada.compiler._STAR_config_STAR_;
var _STAR_config_STAR__temp_val__186 = new_cfg__4__auto__;
(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__temp_val__186);

try{return cljs.core.mapv.call(null,hicada.compiler.compile_html,children);
}finally {(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__orig_val__185);
}})());
} else {
if(cljs.core.seq_QMARK_.call(null,element)){
return cljs.core.seq.call(null,cljs.core.mapv.call(null,hicada.compiler.compile_html,element));
} else {
return cljs.core.mapv.call(null,hicada.compiler.compile_html,element);

}
}
}
}
}
});
/**
 * Pre-compile data structures
 */
hicada.compiler.compile_html = (function hicada$compiler$compile_html(content){
if(cljs.core.vector_QMARK_.call(null,content)){
return hicada.compiler.compile_element.call(null,content);
} else {
if(hicada.compiler.literal_QMARK_.call(null,content)){
return content;
} else {
return hicada.compiler.compile_form.call(null,content);

}
}
});
cljs.core._add_method.call(null,hicada.compiler.compile_react,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (xs){
if(hicada.util.element_QMARK_.call(null,xs)){
return hicada.compiler.compile_react_element.call(null,xs);
} else {
return hicada.compiler.compile_react.call(null,cljs.core.seq.call(null,xs));
}
}));
cljs.core._add_method.call(null,hicada.compiler.compile_react,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),(function (xs){
return cljs.core.mapv.call(null,hicada.compiler.compile_react,xs);
}));
cljs.core._add_method.call(null,hicada.compiler.compile_react,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (x){
return x;
}));
if((typeof hicada !== 'undefined') && (typeof hicada.compiler !== 'undefined') && (typeof hicada.compiler.to_js !== 'undefined')){
} else {
/**
 * Compiles to JS
 */
hicada.compiler.to_js = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hicada.compiler","to-js"),(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"server-render?","server-render?",(928780892)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_))){
return new cljs.core.Keyword(null,"server-render","server-render",(814261353));
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"map","map",(1371690461));
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return new cljs.core.Keyword(null,"vector","vector",(1902966158));
} else {
if((x instanceof cljs.core.Keyword)){
return new cljs.core.Keyword(null,"keyword","keyword",(811389747));
} else {
return cljs.core.type.call(null,x);

}
}
}
}
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
/**
 * Convert a map into a JavaScript object.
 */
hicada.compiler.to_js_map = (function hicada$compiler$to_js_map(m){
if(cljs.core.empty_QMARK_.call(null,m)){
return null;
} else {
var key_strs = cljs.core.mapv.call(null,hicada.compiler.to_js,cljs.core.keys.call(null,m));
var non_str = cljs.core.remove.call(null,cljs.core.string_QMARK_,key_strs);
var _ = ((cljs.core.empty_QMARK_.call(null,non_str))?null:(function(){throw (new Error(["Assert failed: ",["Hicada: Props can't be dynamic:",cljs.core.pr_str.call(null,non_str),"in: ",cljs.core.pr_str.call(null,m)].join(''),"\n","(empty? non-str)"].join('')))})());
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.mapv.call(null,(function (p1__6_SHARP_){
return ["'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__6_SHARP_),"':~{}"].join('');
}),key_strs)));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",(-1134233646),null),["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"}"].join(''),cljs.core.mapv.call(null,hicada.compiler.to_js,cljs.core.vals.call(null,m))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"object","object",(-1179821820),null));
}
});
cljs.core._add_method.call(null,hicada.compiler.to_js,new cljs.core.Keyword(null,"keyword","keyword",(811389747)),(function (x){
return cljs.core.name.call(null,x);
}));
cljs.core._add_method.call(null,hicada.compiler.to_js,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (m){
return hicada.compiler.to_js_map.call(null,m);
}));
cljs.core._add_method.call(null,hicada.compiler.to_js,new cljs.core.Keyword(null,"vector","vector",(1902966158)),(function (xs){
return cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol("cljs.core","array","cljs.core/array",(486685886),null),cljs.core.mapv.call(null,hicada.compiler.to_js,xs));
}));
cljs.core._add_method.call(null,hicada.compiler.to_js,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (x){
return x;
}));
/**
 * We can collapse children to a non-vector if there is only one.
 */
hicada.compiler.collapse_one = (function hicada$compiler$collapse_one(xs){
var G__187 = xs;
if(((1) === cljs.core.count.call(null,xs))){
return cljs.core.first.call(null,G__187);
} else {
return G__187;
}
});
/**
 * A :div is translated to "div" and symbol 'ReactRouter stays.
 */
hicada.compiler.tag__GT_el = (function hicada$compiler$tag__GT_el(x){
if((((x instanceof cljs.core.Symbol)) || ((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (cljs.core.seq_QMARK_.call(null,x)))){
} else {
throw (new Error(["Assert failed: ",["Got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,x))].join(''),"\n","(or (symbol? x) (keyword? x) (string? x) (seq? x))"].join('')));
}

if((x instanceof cljs.core.Keyword)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-string-tags?","no-string-tags?",(1590987397)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_))){
return cljs.core.symbol.call(null,(function (){var or__10116__auto__ = cljs.core.namespace.call(null,x);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var G__188 = new cljs.core.Keyword(null,"default-ns","default-ns",(-633908128)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_);
if((G__188 == null)){
return null;
} else {
return cljs.core.name.call(null,G__188);
}
}
})(),cljs.core.name.call(null,x));
} else {
return cljs.core.name.call(null,x);
}
} else {
return x;
}
});
/**
 * Emits the final react js code
 */
hicada.compiler.emit_react = (function hicada$compiler$emit_react(tag,attrs,children){
var map__189 = hicada.compiler._STAR_config_STAR_;
var map__189__$1 = (((((!((map__189 == null))))?(((((map__189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__189):map__189);
var transform_fn = cljs.core.get.call(null,map__189__$1,new cljs.core.Keyword(null,"transform-fn","transform-fn",(1106801327)));
var emit_fn = cljs.core.get.call(null,map__189__$1,new cljs.core.Keyword(null,"emit-fn","emit-fn",(282268910)));
var inline_QMARK_ = cljs.core.get.call(null,map__189__$1,new cljs.core.Keyword(null,"inline?","inline?",(-1674483791)));
var wrap_input_QMARK_ = cljs.core.get.call(null,map__189__$1,new cljs.core.Keyword(null,"wrap-input?","wrap-input?",(-768545651)));
var create_element = cljs.core.get.call(null,map__189__$1,new cljs.core.Keyword(null,"create-element","create-element",(193243064)));
var array_children_QMARK_ = cljs.core.get.call(null,map__189__$1,new cljs.core.Keyword(null,"array-children?","array-children?",(-702873599)));
var server_render_QMARK_ = cljs.core.get.call(null,map__189__$1,new cljs.core.Keyword(null,"server-render?","server-render?",(928780892)));
var vec__190 = transform_fn.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,attrs,children,hicada.compiler._STAR_env_STAR_], null));
var tag__$1 = cljs.core.nth.call(null,vec__190,(0),null);
var attrs__$1 = cljs.core.nth.call(null,vec__190,(1),null);
var children__$1 = cljs.core.nth.call(null,vec__190,(2),null);
if(cljs.core.truth_(inline_QMARK_)){
var type = (function (){var or__10116__auto__ = (function (){var and__10091__auto__ = wrap_input_QMARK_;
if(cljs.core.truth_(and__10091__auto__)){
return hicada.util.controlled_input_class.call(null,tag__$1,attrs__$1);
} else {
return and__10091__auto__;
}
})();
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return hicada.compiler.tag__GT_el.call(null,tag__$1);
}
})();
var props = hicada.compiler.to_js.call(null,cljs.core.merge.call(null,((cljs.core.empty_QMARK_.call(null,children__$1))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",(-940561982)),hicada.compiler.collapse_one.call(null,children__$1)], null)),hicada.compiler.compile_config.call(null,cljs.core.dissoc.call(null,attrs__$1,new cljs.core.Keyword(null,"key","key",(-1516042587)),new cljs.core.Keyword(null,"ref","ref",(1289896967))))));
if(cljs.core.truth_(emit_fn)){
return emit_fn.call(null,type,new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(attrs__$1),new cljs.core.Keyword(null,"ref","ref",(1289896967)).cljs$core$IFn$_invoke$arity$1(attrs__$1),props);
} else {
return (new cljs.core.List(null,create_element,(new cljs.core.List(null,type,(new cljs.core.List(null,new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(attrs__$1),(new cljs.core.List(null,new cljs.core.Keyword(null,"ref","ref",(1289896967)).cljs$core$IFn$_invoke$arity$1(attrs__$1),(new cljs.core.List(null,props,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
}
} else {
var children__$2 = (cljs.core.truth_((function (){var and__10091__auto__ = array_children_QMARK_;
if(cljs.core.truth_(and__10091__auto__)){
return (((!(cljs.core.empty_QMARK_.call(null,children__$1)))) && (((1) < cljs.core.count.call(null,children__$1))));
} else {
return and__10091__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.call(null,cljs.core.list,new cljs.core.Symbol("cljs.core","array","cljs.core/array",(486685886),null),children__$1)], null):children__$1);
var el = (function (){var temp__9714__auto__ = hicada.util.controlled_input_class.call(null,tag__$1,attrs__$1);
if((temp__9714__auto__ == null)){
return hicada.compiler.tag__GT_el.call(null,tag__$1);
} else {
var wrapper_class = temp__9714__auto__;
if(cljs.core.truth_(wrap_input_QMARK_)){
return wrapper_class;
} else {
return hicada.compiler.tag__GT_el.call(null,tag__$1);
}
}
})();
var cfg = (cljs.core.truth_(server_render_QMARK_)?attrs__$1:hicada.compiler.to_js.call(null,hicada.compiler.compile_config.call(null,attrs__$1)));
if(cljs.core.truth_(emit_fn)){
return emit_fn.call(null,el,cfg,children__$2);
} else {
return cljs.core.apply.call(null,cljs.core.list,create_element,el,cfg,children__$2);
}
}
});
hicada.compiler.emitter = (function hicada$compiler$emitter(content){
var G__194 = hicada.compiler.compile_html.call(null,content);
if(cljs.core.truth_(new cljs.core.Keyword(null,"inline?","inline?",(-1674483791)).cljs$core$IFn$_invoke$arity$1(hicada.compiler._STAR_config_STAR_))){
return hicada.compiler.to_js.call(null,G__194);
} else {
return G__194;
}
});
/**
 * Arguments:
 *   - content: The hiccup to compile
 *   - opts
 * o :array-children? - for product build of React only or you'll enojoy a lot of warnings :)
 * o :create-element 'js/React.createElement - you can also use your own function here.
 * o :wrap-input? - if inputs should be wrapped. Try without!
 * o :rewrite-for? - rewrites simple (for [x xs] ...) into efficient reduce pushing into
 *                        a JS array.
 * o :emit-fn - optinal: called with [type config-js child-or-children]
 * o :server-render? - defaults to false. Doesn't do any JS outputting. Still requires an :emit-fn!
 * o :camelcase-key-pred - defaults to (some-fn keyword? symbol?), ie. map keys that have
 *                         string keys, are NOT by default converted from kebab-case to camelCase!
 * o :inline? false - NOT supported yet. Possibly in the future...
 * o :child-config - Called for every element with [config raw-element normalized-element]
 *                   to get a new configuration for element's children
 * o :transform-fn - Called with [[tag attrs children *env*]] before emitting, to get
 *                   transformed element as [tag attrs children]
 * 
 * React Native special recommended options:
 * o :no-string-tags? - Never output string tags (don't exits in RN)
 * o :default-ns - Any unprefixed component will get prefixed with this ns.
 * o :child-config - (fn [config raw-element normalized-element] -> config) change processing options as hicada goes down the tree
 *   - handlers:
 * A map to handle special tags. See default-handlers in this namespace.
 *   - env: The macro environment. Not used currently.
 */
hicada.compiler.compile = (function hicada$compiler$compile(var_args){
var G__196 = arguments.length;
switch (G__196) {
case (1):
return hicada.compiler.compile.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return hicada.compiler.compile.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return hicada.compiler.compile.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return hicada.compiler.compile.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hicada.compiler.compile.cljs$core$IFn$_invoke$arity$1 = (function (content){
return hicada.compiler.compile.call(null,content,hicada.compiler.default_config);
}));

(hicada.compiler.compile.cljs$core$IFn$_invoke$arity$2 = (function (content,opts){
return hicada.compiler.compile.call(null,content,opts,hicada.compiler.default_handlers);
}));

(hicada.compiler.compile.cljs$core$IFn$_invoke$arity$3 = (function (content,opts,handlers){
return hicada.compiler.compile.call(null,content,opts,handlers,null);
}));

(hicada.compiler.compile.cljs$core$IFn$_invoke$arity$4 = (function (content,opts,handlers,env){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"inline?","inline?",(-1674483791)).cljs$core$IFn$_invoke$arity$1(opts))){
} else {
throw (new Error(["Assert failed: ",":inline? isn't supported yet","\n","(not (:inline? opts))"].join('')));
}

var _STAR_config_STAR__orig_val__197 = hicada.compiler._STAR_config_STAR_;
var _STAR_handlers_STAR__orig_val__198 = hicada.compiler._STAR_handlers_STAR_;
var _STAR_env_STAR__orig_val__199 = hicada.compiler._STAR_env_STAR_;
var _STAR_config_STAR__temp_val__200 = cljs.core.merge.call(null,hicada.compiler.default_config,opts);
var _STAR_handlers_STAR__temp_val__201 = cljs.core.merge.call(null,hicada.compiler.default_handlers,handlers);
var _STAR_env_STAR__temp_val__202 = env;
(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__temp_val__200);

(hicada.compiler._STAR_handlers_STAR_ = _STAR_handlers_STAR__temp_val__201);

(hicada.compiler._STAR_env_STAR_ = _STAR_env_STAR__temp_val__202);

try{return hicada.compiler.emitter.call(null,content);
}finally {(hicada.compiler._STAR_env_STAR_ = _STAR_env_STAR__orig_val__199);

(hicada.compiler._STAR_handlers_STAR_ = _STAR_handlers_STAR__orig_val__198);

(hicada.compiler._STAR_config_STAR_ = _STAR_config_STAR__orig_val__197);
}}));

(hicada.compiler.compile.cljs$lang$maxFixedArity = (4));


//# sourceURL=hicada/compiler.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGljYWRhL2NvbXBpbGVyLmpzIiwic291cmNlcyI6WyJjb21waWxlci5jbGpzIl0sImxpbmVDb3VudCI6MTA4OSwibWFwcGluZ3MiOiI7QUFvQkEsbUNBQUEsMkNBQUEsOUVBQUtBLCtIQUFxQjs7MEJBQ0lDLEVBQUVDO0FBRE4sQUFBQSxnR0FBQSxtQ0FBQSx6Q0FFSUE7OztnQ0FDQUQsRUFBRUMsTUFBTUMsTUFBUUM7QUFIcEIsQUFJRyxHQUFJLEFBQUNDLCtCQUFLRjtBQUFWLDBGQUNHRCxNQUFNQyxNQUFNQzs7QUFEZixnR0FBQSxOQUVHRix5Q0FBUyxBQUFDSSx5QkFBS0gsTUFBTUM7OztzQkFIdkJILEVBQUVDLE1BQU1DO0lBQVFDOzs7O0VBQUFBOztpQ0FBaEJILEVBQUVDLE1BQU1DLE1BQVFDOzs7SUFBaEJIOztJQUFFQzs7SUFBTUM7SUFBUUM7dUJBQWhCSCxFQUFFQyxNQUFNQyxNQUFRQzs7Ozs7O2lCQUFoQkgsRUFBRUMsTUFBTUM7SUFBUUM7OzswQkFBaEJILEVBQUVDOzs7Ozs7OztxREFBRkQsRUFBRUMsTUFBTUM7Ozs7Ozs7Ozs7Q0FIdEMsa0RBTzBCO2dDQUFLRixFQUFFRSxNQUFRQztBQUFmLEFBQ0UsR0FBSSxBQUFDQywrQkFBS0Y7QUFBViwwRkFBQSxBQUFBLGdGQUNzQkEsTUFBTUM7O0FBRDVCLDBGQUFBLEFBQUEsZ0ZBQUEsbUNBRXlCLEFBQUNFLHlCQUFLSCxNQUFNQzs7O3NCQUhsQ0gsRUFBRUU7SUFBUUM7Ozs7RUFBQUE7O2lDQUFWSCxFQUFFRSxNQUFRQzs7O0lBQVZIOztJQUFFRTtJQUFRQzt1QkFBVkgsRUFBRUUsTUFBUUM7Ozs7OztBQU16QyxpQ0FBQSx3Q0FBQSw2RUFBQSx1RUFBQSx1RUFBQSxxRUFBQSw0REFBQSx1RUFBQSw4REFBQSxrRkFBQSwwRUFBQSw0RUFBQSxseEJBQUtHLHd4QkFZOEIsV0FBS0ssUUFBUUMsS0FBS0M7QUFBbEIsQUFBNEJGO0dBWi9ELE1BQUEsTUFBQSx3QkFBQSxvRkFBQSxBQUFBLDRGQUFBLDFL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RyxPQUFDcUUsa0NBQVFyRSxRQUFRL007OztBQTNCcEIsQ0FBQSx3REFBQSx4REFBTW9SLG1FQTRCRnJFLFFBQVFzRTtBQTVCWixBQTZCRyxPQUFDRCxrQ0FBUXJFLFFBQVFzRSxLQUFLNVI7OztBQTdCekIsQ0FBQSx3REFBQSx4REFBTTJSLG1FQThCRnJFLFFBQVFzRSxLQUFLQztBQTlCakIsQUErQkcsK0RBQUEseERBQUNGLGtDQUFRckUsUUFBUXNFLEtBQUtDOzs7QUEvQnpCLENBQUEsd0RBQUEseERBQU1GLG1FQWdDRnJFLFFBQVFzRSxLQUFLQyxTQUFTQztBQWhDMUIsQUFpQ0csR0FBUSxBQUFDaFAsd0JBQUksQUFBQSw0RkFBVThPO0FBQXZCO0FBQUEsQUFBQSxNQUFBLEtBQUF4QyxNQUFBLENBQUEsa0JBQUEsK0JBQUEsS0FBQTs7O0FBQ0EsSUFBQTJDLG1DQUFVaFI7SUFBVmlSLHFDQUNVaFI7SUFEVmlSLGdDQUVVaFI7SUFGVmlSLG1DQUFtQixBQUFDaEIsMEJBQU0zUSwrQkFBZXFSO0lBQXpDTyxxQ0FDcUIsQUFBQ2pCLDBCQUFNbFIsaUNBQWlCNlI7SUFEN0NPLGdDQUVnQk47QUFGaEIsQUFBQSxzQ0FBQUksckNBQVVuUjs7QUFBVix3Q0FBQW9SLHZDQUNVblI7O0FBRFYsbUNBQUFvUixsQ0FFVW5SOztBQUZWLElBQUEsQUFHRSxPQUFDNkQsa0NBQVF3STtVQUhYLEFBQUEsbUNBQUEyRSxsQ0FFVWhSOztBQUZWLHdDQUFBK1EsdkNBQ1VoUjs7QUFEVixzQ0FBQStRLHJDQUFVaFI7OztBQWxDYixDQUFBLGtEQUFBLGxEQUFNNFE7O0FBQU4sQUF1Q0EiLCJuYW1lcyI6WyJoaWNhZGEuY29tcGlsZXIvZGVmYXVsdC1oYW5kbGVycyIsIl8iLCJrbGFzcyIsImF0dHJzIiwiY2hpbGRyZW4iLCJjbGpzLmNvcmUvbWFwPyIsImNsanMuY29yZS9jb25zIiwiaGljYWRhLmNvbXBpbGVyL2RlZmF1bHQtY29uZmlnIiwiY2xqcy5jb3JlL3NvbWUtZm4iLCJjbGpzLmNvcmUva2V5d29yZD8iLCJjbGpzLmNvcmUvc3ltYm9sPyIsImNsanMuY29yZS9pZGVudGl0eSIsIm9wdGlvbnMiLCJmb3JtIiwiZXhwYW5kZWQiLCJoaWNhZGEuY29tcGlsZXIvKmNvbmZpZyoiLCJoaWNhZGEuY29tcGlsZXIvKmhhbmRsZXJzKiIsImhpY2FkYS5jb21waWxlci8qZW52KiIsImpzL2hpY2FkYSIsImpzL2hpY2FkYS5jb21waWxlciIsImpzL2hpY2FkYS5jb21waWxlci5jb21waWxlLXJlYWN0IiwibWV0aG9kLXRhYmxlX18xMjQ5NV9fYXV0b19fIiwiY2xqcy5jb3JlL2F0b20iLCJwcmVmZXItdGFibGVfXzEyNDk2X19hdXRvX18iLCJtZXRob2QtY2FjaGVfXzEyNDk3X19hdXRvX18iLCJjYWNoZWQtaGllcmFyY2h5X18xMjQ5OF9fYXV0b19fIiwiaGllcmFyY2h5X18xMjQ5OV9fYXV0b19fIiwiY2xqcy5jb3JlL2dldCIsImNsanMuY29yZS9NdWx0aUZuIiwiY2xqcy5jb3JlL3N5bWJvbCIsImhpY2FkYS5jb21waWxlci9jb21waWxlLXJlYWN0IiwieCIsImNsanMuY29yZS92ZWN0b3I/IiwiY2xqcy5jb3JlL3NlcT8iLCJjbGpzLmNvcmUvdHlwZSIsImpzL2hpY2FkYS5jb21waWxlci5jb21waWxlLWNvbmZpZy1rdiIsImhpY2FkYS5jb21waWxlci9jb21waWxlLWNvbmZpZy1rdiIsIm5hbWUiLCJ2YWx1ZSIsImNsanMuY29yZS8tYWRkLW1ldGhvZCIsImNsanMuY29yZS9LZXl3b3JkIiwiY2xqcy5jb3JlL3NlcXVlbnRpYWw/IiwiY2xqcy5jb3JlL3NldD8iLCJjbGpzLmNvcmUvZXZlcnk/IiwiY2xqcy5jb3JlL3N0cmluZz8iLCJoaWNhZGEudXRpbC9qb2luLWNsYXNzZXMiLCJjbGpzLmNvcmUvbm90IiwiY2xqcy5jb3JlL2FwcGx5IiwiaGljYWRhLnV0aWwvam9pbi1jbGFzc2VzLWpzIiwiaGljYWRhLnV0aWwvY2FtZWwtY2FzZS1rZXlzIiwiaGljYWRhLmNvbXBpbGVyL2NvbXBpbGUtY29uZmlnIiwiY2xqcy5jb3JlL3JlZHVjZS1rdiIsIm0iLCJrIiwidiIsImNsanMuY29yZS9hc3NvYyIsIkdfXzQ5IiwiaGljYWRhLnV0aWwvY2FtZWwtY2FzZSIsImhpY2FkYS5jb21waWxlci91bmV2YWx1YXRlZD8iLCJleHByIiwiY2xqcy5jb3JlL1N5bWJvbCIsImNsanMuY29yZS9ub3Q9IiwiY2xqcy5jb3JlL2ZpcnN0IiwiaGljYWRhLmNvbXBpbGVyL2Zvcm0tbmFtZSIsImNsanMuY29yZS9uYW1lIiwianMvaGljYWRhLmNvbXBpbGVyLmNvbXBpbGUtZm9ybSIsImhpY2FkYS5jb21waWxlci9jb21waWxlLWZvcm0iLCJwX181MSIsInZlY19fNTIiLCJzZXFfXzUzIiwiY2xqcy5jb3JlL3NlcSIsImZpcnN0X181NCIsImNsanMuY29yZS9uZXh0IiwiY2xqcy5jb3JlL3NlcXVlbmNlIiwiY2xqcy5jb3JlL2NvbmNhdCIsImNsanMuY29yZS9MaXN0IiwiZm9ybXMiLCJjbGpzLmNvcmUvYnV0bGFzdCIsImhpY2FkYS5jb21waWxlci9lbWl0dGVyIiwiY2xqcy5jb3JlL2xhc3QiLCJwX181NSIsInZlY19fNTYiLCJzZXFfXzU3IiwiZmlyc3RfXzU4IiwiY2xqcy5jb3JlL21hcHYiLCJwX181OSIsInZlY19fNjAiLCJzZXFfXzYxIiwiZmlyc3RfXzYyIiwiYmluZGluZ3MiLCJib2R5IiwicF9fNjMiLCJ2ZWNfXzY0Iiwic2VxX182NSIsImZpcnN0X182NiIsInBfXzY3IiwidmVjX182OCIsInNlcV9fNjkiLCJmaXJzdF9fNzAiLCJwX183MSIsInZlY19fNzIiLCJjbGpzLmNvcmUvbnRoIiwiY2xqcy5jb3JlL2NvdW50IiwidmVjX183NSIsImNsanMuY29yZS92ZWMiLCJpdGVtIiwiY29sbCIsInBfXzc4IiwidmVjX183OSIsInNlcV9fODAiLCJmaXJzdF9fODEiLCJjb25kaXRpb24iLCJjbGpzLmNvcmUvZG9hbGwiLCJpdGVyX18xMTk2NV9fYXV0b19fIiwic19fODMiLCJjbGpzLmNvcmUvTGF6eVNlcSIsInRlbXBfXzk1MjJfX2F1dG9fXyIsImNsanMuY29yZS9jaHVua2VkLXNlcT8iLCJjX18xMTk2MV9fYXV0b19fIiwic2l6ZV9fMTE5NjRfX2F1dG9fXyIsImJfXzg1IiwiY2xqcy5jb3JlL2NodW5rLWJ1ZmZlciIsImlfXzg0IiwiY2xqcy5jb3JlLy1udGgiLCJjbGpzLmNvcmUvY2h1bmstYXBwZW5kIiwiY2xqcy5jb3JlL2NodW5rLWNvbnMiLCJjbGpzLmNvcmUvY2h1bmsiLCJpdGVyX184MiIsImNsanMuY29yZS9jaHVuay1yZXN0IiwiY2xqcy5jb3JlL3Jlc3QiLCJwX184NyIsInZlY19fODgiLCJzZXFfXzg5IiwiZmlyc3RfXzkwIiwic19fOTIiLCJiX185NCIsImlfXzkzIiwiaXRlcl9fOTEiLCJwX185NiIsInZlY19fOTciLCJzZXFfXzk4IiwiZmlyc3RfXzk5IiwicF9fMTAwIiwidmVjX18xMDEiLCJzZXFfXzEwMiIsImZpcnN0X18xMDMiLCJwX18xMDQiLCJ2ZWNfXzEwNSIsInNlcV9fMTA2IiwiZmlyc3RfXzEwNyIsInBfXzEwOCIsInZlY19fMTA5Iiwic2VxX18xMTAiLCJmaXJzdF9fMTExIiwic19fMTEzIiwiYl9fMTE1IiwiaV9fMTE0IiwiaXRlcl9fMTEyIiwicF9fMTE3IiwidmVjX18xMTgiLCJzZXFfXzExOSIsImZpcnN0X18xMjAiLCJzX18xMjIiLCJiX18xMjQiLCJpX18xMjMiLCJpdGVyX18xMjEiLCJwX18xMjYiLCJ2ZWNfXzEyNyIsInNlcV9fMTI4IiwiZmlyc3RfXzEyOSIsInNfXzEzMSIsImJfXzEzMyIsImlfXzEzMiIsIml0ZXJfXzEzMCIsInBfXzEzNSIsInZlY19fMTM2Iiwic2VxX18xMzciLCJmaXJzdF9fMTM4Iiwic19fMTQwIiwiYl9fMTQyIiwiaV9fMTQxIiwiaXRlcl9fMTM5IiwicF9fMTQ0IiwidmVjX18xNDUiLCJzZXFfXzE0NiIsImZpcnN0X18xNDciLCJjYXNlcyIsImNsanMuY29yZS9tYXBjYXQiLCJwX18xNDgiLCJ2ZWNfXzE0OSIsInRlc3QiLCJoaWNjdXAiLCJjbGpzLmNvcmUvcGFydGl0aW9uLWFsbCIsInBfXzE1MiIsInZlY19fMTUzIiwic2VxX18xNTQiLCJmaXJzdF9fMTU1IiwiZiIsInBfXzE1NiIsInZlY19fMTU3IiwicF9fMTYwIiwidmVjX18xNjEiLCJzZXFfXzE2MiIsImZpcnN0X18xNjMiLCJjbGF1c2VzIiwicF9fMTY0IiwidmVjX18xNjUiLCJjaGVjayIsImNsanMuY29yZS9wYXJ0aXRpb24iLCJoaWNhZGEuY29tcGlsZXIvbGl0ZXJhbD8iLCJoaWNhZGEuY29tcGlsZXIvY29tcGlsZS1yZWFjdC1lbGVtZW50IiwiZWxlbWVudCIsInZlY19fMTY4IiwidGFnIiwiY29udGVudCIsImhpY2FkYS5ub3JtYWxpemUvZWxlbWVudCIsImhpY2FkYS5jb21waWxlci9lbWl0LXJlYWN0IiwicF9fMTcxIiwidmVjX18xNzIiLCJzZXFfXzE3MyIsImZpcnN0X18xNzQiLCJoaWNhZGEuY29tcGlsZXIvY29tcGlsZS1lbGVtZW50IiwidmVjX18xNzUiLCJjZmdfXzNfX2F1dG9fXyIsIm5ldy1jZmdfXzRfX2F1dG9fXyIsIipjb25maWcqLW9yaWctdmFsX18xNzgiLCIqY29uZmlnKi10ZW1wLXZhbF9fMTc5IiwiaGljYWRhLmNvbXBpbGVyL2NvbXBpbGUtaHRtbCIsInZlY19fMTgwIiwiKmNvbmZpZyotb3JpZy12YWxfXzE4MyIsIipjb25maWcqLXRlbXAtdmFsX18xODQiLCJjbGpzLmNvcmUvbGlzdCoiLCIqY29uZmlnKi1vcmlnLXZhbF9fMTg1IiwiKmNvbmZpZyotdGVtcC12YWxfXzE4NiIsInhzIiwiaGljYWRhLnV0aWwvZWxlbWVudD8iLCJqcy9oaWNhZGEuY29tcGlsZXIudG8tanMiLCJoaWNhZGEuY29tcGlsZXIvdG8tanMiLCJoaWNhZGEuY29tcGlsZXIvdG8tanMtbWFwIiwiY2xqcy5jb3JlL2VtcHR5PyIsImtleS1zdHJzIiwiY2xqcy5jb3JlL2tleXMiLCJub24tc3RyIiwiY2xqcy5jb3JlL3JlbW92ZSIsImpzL0Vycm9yIiwiY2xqcy5jb3JlL3ByLXN0ciIsImt2cy1zdHIiLCJwMV9fNiMiLCJjbGpzLmNvcmUvaW50ZXJwb3NlIiwiY2xqcy5jb3JlL3N0ciIsImNsanMuY29yZS92YXJ5LW1ldGEiLCJjbGpzLmNvcmUvdmFscyIsImNsanMuY29yZS9saXN0IiwiaGljYWRhLmNvbXBpbGVyL2NvbGxhcHNlLW9uZSIsIkdfXzE4NyIsImhpY2FkYS5jb21waWxlci90YWctPmVsIiwib3JfXzEwMTE2X19hdXRvX18iLCJjbGpzLmNvcmUvbmFtZXNwYWNlIiwiR19fMTg4IiwibWFwX18xODkiLCJjbGpzLmNvcmUvUFJPVE9DT0xfU0VOVElORUwiLCJjbGpzLmNvcmUvaGFzaC1tYXAiLCJ2ZWNfXzE5MCIsInRyYW5zZm9ybS1mbiIsImVtaXQtZm4iLCJpbmxpbmU/Iiwid3JhcC1pbnB1dD8iLCJjcmVhdGUtZWxlbWVudCIsImFycmF5LWNoaWxkcmVuPyIsInNlcnZlci1yZW5kZXI/IiwidHlwZSIsImFuZF9fMTAwOTFfX2F1dG9fXyIsImhpY2FkYS51dGlsL2NvbnRyb2xsZWQtaW5wdXQtY2xhc3MiLCJwcm9wcyIsImNsanMuY29yZS9tZXJnZSIsImNsanMuY29yZS9kaXNzb2MiLCJlbCIsInRlbXBfXzk3MTRfX2F1dG9fXyIsIndyYXBwZXItY2xhc3MiLCJjZmciLCJHX18xOTQiLCJ2YXJfYXJncyIsIkdfXzE5NiIsImhpY2FkYS5jb21waWxlci9jb21waWxlIiwib3B0cyIsImhhbmRsZXJzIiwiZW52IiwiKmNvbmZpZyotb3JpZy12YWxfXzE5NyIsIipoYW5kbGVycyotb3JpZy12YWxfXzE5OCIsIiplbnYqLW9yaWctdmFsX18xOTkiLCIqY29uZmlnKi10ZW1wLXZhbF9fMjAwIiwiKmhhbmRsZXJzKi10ZW1wLXZhbF9fMjAxIiwiKmVudiotdGVtcC12YWxfXzIwMiIsImNsanMuY29yZS9jaHVuay1maXJzdCJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgaGljYWRhLmNvbXBpbGVyXG4gIFwiXG4gIEhpY2FkYSAtIEhpY2N1cCBjb21waWxlciBhdXMgZGVtIEFsbGdhZXVcblxuICBOT1RFOiBUaGUgY29kZSBmb3IgaGFzIGJlZW4gZm9ya2VkIGxpa2UgdGhpczpcbiAgd2VhdmVqZXN0ZXIvaGljY3VwIC0+IHIwbWFuL3NhYmxvbm8gLT4gSGljYWRhLlxuXG4gIE5vdGUgYWJvdXQgOmFycmF5LWNoaWxkcmVuPyA6XG4gIEdvIHJlYWQgdGhlIFJlYWN0LmNyZWF0ZUVsZW1lbnQoKSBmdW5jdGlvbiwgaXQncyB2ZXJ5IHNob3J0IGFuZCBlYXN5IHRvIHVuZGVyc3RhbmQuXG4gIERvIHlvdSBzZWUgaG93IHRoZSBjaGlsZHJlbiBhcmUganVzdCBjb3BpZWQgZnJvbSB0aGUgYXJndW1lbnRzIGFuZCB0aGVuIGp1c3QgcHV0IGludG9cbiAgcHJvcHMuY2hpbGRyZW4/IFRoaXMgaXMgZXhhY3RseSB3aGF0IDphcnJheS1jaGlsZHJlbj8gYXZvaWRzLiBJdCdzIGNvbXBsZXRlbHkgc2FmZSB0byBkby5cblxuICBEZXYgTm90ZTogRG8gTk9UIHVzZSBhbnkgbGF6aW5lc3MgaGVyZSEgTm90IHdoZW4gZ2VuZXJhdGluZyBjb2RlISBPciBpdCB3b24ndCBwaWNrIHVwXG4gIHRoZSBeOmR5bmFtaWMgY29uZmlnIGFueW1vcmUhXCJcbiAgKDpyZWZlci1jbG9qdXJlIDpleGNsdWRlIFtjb21waWxlXSlcbiAgKDpyZXF1aXJlXG4gICBbaGljYWRhLm1hY3JvcyAjPyg6Y2xqIDpyZWZlciA6Y2xqcyA6cmVmZXItbWFjcm9zKSBbd2l0aC1jaGlsZC1jb25maWddXVxuICAgW2hpY2FkYS5ub3JtYWxpemUgOmFzIG5vcm1dXG4gICBbaGljYWRhLnV0aWwgOmFzIHV0aWxdKSlcblxuKGRlZiBkZWZhdWx0LWhhbmRsZXJzIHs6PiAoZm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoW18ga2xhc3NdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzcyB7fSBuaWxdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChbXyBrbGFzcyBhdHRycyAmIGNoaWxkcmVuXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgKG1hcD8gYXR0cnMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2tsYXNzIGF0dHJzIGNoaWxkcmVuXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtrbGFzcyB7fSAoY29ucyBhdHRycyBjaGlsZHJlbildKSkpXG4gICAgICAgICAgICAgICAgICAgICAgIDoqIChmbiBbXyBhdHRycyAmIGNoaWxkcmVuXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpZiAobWFwPyBhdHRycylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsnanMvUmVhY3QuRnJhZ21lbnQgYXR0cnMgY2hpbGRyZW5dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJ2pzL1JlYWN0LkZyYWdtZW50IHt9IChjb25zIGF0dHJzIGNoaWxkcmVuKV0pKX0pXG5cbjs7IFRPRE86IFdlIHNob3VsZCB0YWtlICZlbnYgYXJvdW5kIGV2ZXJ5dGhpbmcgYW5kIGFsc28gZXhwZWN0IGl0IGFzIGFuIGFyZ3VtZW50LlxuKGRlZiBkZWZhdWx0LWNvbmZpZyB7OmlubGluZT8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgIDp3cmFwLWlucHV0PyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgOmFycmF5LWNoaWxkcmVuPyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgOmVtaXQtZm4gbmlsXG4gICAgICAgICAgICAgICAgICAgICA6cmV3cml0ZS1mb3I/IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICA6c2VydmVyLXJlbmRlcj8gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgIDs7IElmIHlvdSBhbHNvIHdhbnQgdG8gY2FtZWxjYXNlIHN0cmluZyBtYXAga2V5cywgYWRkIHN0cmluZz8gaGVyZTpcbiAgICAgICAgICAgICAgICAgICAgIDpjYW1lbGNhc2Uta2V5LXByZWQgKHNvbWUtZm4ga2V5d29yZD8gc3ltYm9sPylcbiAgICAgICAgICAgICAgICAgICAgIDs7IEEgZm4gdGhhdCB3aWxsIGdldCBbdGFnIGF0dHIgY2hpbGRyZW5dIGFuZCByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgIDs7IFt0YWcgYXR0ciBjaGlsZHJlbl0ganVzdCBiZWZvcmUgZW1pdHRpbmcuXG4gICAgICAgICAgICAgICAgICAgICA6dHJhbnNmb3JtLWZuIGlkZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICA6Y3JlYXRlLWVsZW1lbnQgJ2pzL1JlYWN0LmNyZWF0ZUVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgIDpjaGlsZC1jb25maWcgKGZuIFtvcHRpb25zIGZvcm0gZXhwYW5kZWRdIG9wdGlvbnMpfSlcblxuKGRlZiBeOmR5bmFtaWMgKmNvbmZpZyogZGVmYXVsdC1jb25maWcpXG4oZGVmIF46ZHluYW1pYyAqaGFuZGxlcnMqIGRlZmF1bHQtaGFuZGxlcnMpXG4oZGVmIF46ZHluYW1pYyAqZW52KiBuaWwpXG5cblxuXG4oZGVmbXVsdGkgY29tcGlsZS1yZWFjdFxuICAgICAgICAgIFwiQ29tcGlsZSBhIENsb2p1cmUgZGF0YSBzdHJ1Y3R1cmUgaW50byBhIFJlYWN0IGZuIGNhbGwuXCJcbiAgICAgICAgICAoZm4gW3hdXG4gICAgICAgICAgICAoY29uZFxuICAgICAgICAgICAgICAodmVjdG9yPyB4KSA6dmVjdG9yXG4gICAgICAgICAgICAgIChzZXE/IHgpIDpzZXFcbiAgICAgICAgICAgICAgOmVsc2UgKCM/KDpjbGogY2xhc3MgOmNsanMgdHlwZSkgeCkpKSlcblxuKGRlZm11bHRpIGNvbXBpbGUtY29uZmlnLWt2IChmbiBbbmFtZSB2YWx1ZV0gbmFtZSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1jb25maWcta3YgOmNsYXNzIFtuYW1lIHZhbHVlXVxuICAoY29uZCAob3IgKG5pbD8gdmFsdWUpXG4gICAgICAgICAgICAoa2V5d29yZD8gdmFsdWUpXG4gICAgICAgICAgICAoc3RyaW5nPyB2YWx1ZSkpXG4gICAgICAgIHZhbHVlXG5cbiAgICAgICAgKGFuZCAob3IgKHNlcXVlbnRpYWw/IHZhbHVlKVxuICAgICAgICAgICAgICAgICAoc2V0PyB2YWx1ZSkpXG4gICAgICAgICAgICAgKGV2ZXJ5PyBzdHJpbmc/IHZhbHVlKSlcbiAgICAgICAgKHV0aWwvam9pbi1jbGFzc2VzIHZhbHVlKVxuXG4gICAgICAgIChhbmQgKHZlY3Rvcj8gdmFsdWUpIChub3QgKDpzZXJ2ZXItcmVuZGVyPyAqY29uZmlnKikpKVxuICAgICAgICAoYXBwbHkgdXRpbC9qb2luLWNsYXNzZXMtanMgdmFsdWUpXG5cbiAgICAgICAgOmVsc2UgdmFsdWUpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtY29uZmlnLWt2IDpzdHlsZSBbbmFtZSB2YWx1ZV1cbiAgKHV0aWwvY2FtZWwtY2FzZS1rZXlzIHZhbHVlKSlcblxuKGRlZm1ldGhvZCBjb21waWxlLWNvbmZpZy1rdiA6ZGVmYXVsdCBbbmFtZSB2YWx1ZV1cbiAgdmFsdWUpXG5cbihkZWZuIGNvbXBpbGUtY29uZmlnXG4gIFwiQ29tcGlsZSBhIEhUTUwgYXR0cmlidXRlIG1hcCB0byByZWFjdCAoY2xhc3MgLT4gY2xhc3NOYW1lKSwgY2FtZWxDYXNlcyA6c3R5bGUuXCJcbiAgW2F0dHJzXVxuICAoaWYgKG1hcD8gYXR0cnMpXG4gICAgKHJlZHVjZS1rdiAoZm4gW20gayB2XVxuICAgICAgICAgICAgICAgICAoYXNzb2MgbVxuICAgICAgICAgICAgICAgICAgIChjYXNlIGtcbiAgICAgICAgICAgICAgICAgICAgIDpjbGFzcyA6Y2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgICAgICA6Zm9yIDpodG1sRm9yXG4gICAgICAgICAgICAgICAgICAgICAoaWYgKCg6Y2FtZWxjYXNlLWtleS1wcmVkICpjb25maWcqKSBrKVxuICAgICAgICAgICAgICAgICAgICAgICAodXRpbC9jYW1lbC1jYXNlIGspXG4gICAgICAgICAgICAgICAgICAgICAgIGspKVxuICAgICAgICAgICAgICAgICAgIChjb21waWxlLWNvbmZpZy1rdiBrIHYpKSkge30gYXR0cnMpXG4gICAgYXR0cnMpKVxuI18oY29tcGlsZS1jb25maWcgezpjbGFzcyBbXCJiXCIgJ2NdIDpzdHlsZSB7OmJvcmRlci13aWR0aCBcIjJweFwifX0pIDs7IGNhbWVsY2FzZSBzdHlsZVxuOzsgUmVhY3QgbmF0aXZlIHN0eWxlOlxuI18oY29tcGlsZS1jb25maWcgezpjbGFzcyBbXCJiXCIgJ2NdIDpzdHlsZSBbezpib3JkZXItd2lkdGggXCIycHhcIn1dfSkgOzsgY2FtZWxjYXNlIHN0eWxlXG4jXyhjb21waWxlLWNvbmZpZyB7Om9uLWNsaWNrICgpfSlcblxuXG4oZGVmbi0gdW5ldmFsdWF0ZWQ/XG4gIFwiVHJ1ZSBpZiB0aGUgZXhwcmVzc2lvbiBoYXMgbm90IGJlZW4gZXZhbHVhdGVkLlxuICAgLSBleHByIGlzIGEgc3ltYm9sPyBPUlxuICAgLSBpdCdzIHNvbWV0aGluZyBsaWtlIChmb28gYmFyKVwiXG4gIFtleHByXVxuICAob3IgKHN5bWJvbD8gZXhwcilcbiAgICAgIChhbmQgKHNlcT8gZXhwcilcbiAgICAgICAgICAgKG5vdD0gKGZpcnN0IGV4cHIpIGBxdW90ZSkpKSlcbiNfKHVuZXZhbHVhdGVkPyAnKGZvbykpXG5cbihkZWZuLSBmb3JtLW5hbWVcbiAgXCJHZXQgdGhlIG5hbWUgb2YgdGhlIHN1cHBsaWVkIGZvcm0uXCJcbiAgW2Zvcm1dXG4gICh3aGVuIChhbmQgKHNlcT8gZm9ybSkgKHN5bWJvbD8gKGZpcnN0IGZvcm0pKSlcbiAgICAobmFtZSAoZmlyc3QgZm9ybSkpKSlcblxuKGRlY2xhcmUgY29tcGlsZS1odG1sKVxuXG4oZGVmbXVsdGkgY29tcGlsZS1mb3JtXG4gICAgICAgICAgXCJQcmUtY29tcGlsZSBjZXJ0YWluIHN0YW5kYXJkIGZvcm1zLCB3aGVyZSBwb3NzaWJsZS5cIlxuICAgICAgICAgIGZvcm0tbmFtZSlcblxuKGRlY2xhcmUgZW1pdHRlcilcbihkZWZtZXRob2QgY29tcGlsZS1mb3JtIFwiZG9cIlxuICBbW18gJiBmb3Jtc11dXG4gIGAoZG8gfkAoYnV0bGFzdCBmb3JtcykgfihlbWl0dGVyIChsYXN0IGZvcm1zKSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcImFycmF5XCJcbiAgW1tfICYgZm9ybXNdXVxuICBgKGNsanMuY29yZS9hcnJheSB+QChtYXB2IGVtaXR0ZXIgZm9ybXMpKSlcblxuKGRlZm1ldGhvZCBjb21waWxlLWZvcm0gXCJsZXRcIlxuICBbW18gYmluZGluZ3MgJiBib2R5XV1cbiAgYChsZXQgfmJpbmRpbmdzIH5AKGJ1dGxhc3QgYm9keSkgfihlbWl0dGVyIChsYXN0IGJvZHkpKSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1mb3JtIFwibGV0KlwiXG4gIFtbXyBiaW5kaW5ncyAmIGJvZHldXVxuICBgKGxldCogfmJpbmRpbmdzIH5AKGJ1dGxhc3QgYm9keSkgfihlbWl0dGVyIChsYXN0IGJvZHkpKSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1mb3JtIFwibGV0Zm4qXCJcbiAgW1tfIGJpbmRpbmdzICYgYm9keV1dXG4gIGAobGV0Zm4qIH5iaW5kaW5ncyB+QChidXRsYXN0IGJvZHkpIH4oZW1pdHRlciAobGFzdCBib2R5KSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcImZvclwiXG4gIFtbXyBiaW5kaW5ncyBib2R5XV1cbiAgOzsgU3BlY2lhbCBvcHRpbWl6YXRpb246IEZvciBhIHNpbXBsZSAoZm9yIFt4IHhzXSAuLi4pIHdlIHJld3JpdGUgdGhlIGZvclxuICA7OyB0byBhIGZhc3QgcmVkdWNlIG91dHB1dHRpbmcgYSBKUyBhcnJheTpcbiAgKGlmICg6cmV3cml0ZS1mb3I/ICpjb25maWcqKVxuICAgIChpZiAoPT0gMiAoY291bnQgYmluZGluZ3MpKVxuICAgICAgKGxldCBbW2l0ZW0gY29sbF0gYmluZGluZ3NdXG4gICAgICAgIGAocmVkdWNlIChmbiB+J2hpY2FkYS1mb3ItcmVkdWNlciBbb3V0LWFyciMgfml0ZW1dXG4gICAgICAgICAgICAgICAgICAgKC5wdXNoIG91dC1hcnIjIH4oZW1pdHRlciBib2R5KSlcbiAgICAgICAgICAgICAgICAgICBvdXQtYXJyIylcbiAgICAgICAgICAgICAgICAgKGNsanMuY29yZS9hcnJheSkgfmNvbGwpKVxuICAgICAgOzsgU3RpbGwgb3B0aW1pemUgYSBsaXR0bGUgYnkgZ2l2aW5nIFJlYWN0IGFuIGFycmF5OlxuICAgICAgKGxpc3QgJ2NsanMuY29yZS9pbnRvLWFycmF5IGAoZm9yIH5iaW5kaW5ncyB+KGVtaXR0ZXIgYm9keSkpKSlcbiAgICBgKGZvciB+YmluZGluZ3MgfihlbWl0dGVyIGJvZHkpKSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1mb3JtIFwiaWZcIlxuICBbW18gY29uZGl0aW9uICYgYm9keV1dXG4gIGAoaWYgfmNvbmRpdGlvbiB+QChkb2FsbCAoZm9yIFt4IGJvZHldIChlbWl0dGVyIHgpKSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcIndoZW5cIlxuICBbW18gYmluZGluZ3MgJiBib2R5XV1cbiAgYCh3aGVuIH5iaW5kaW5ncyB+QChkb2FsbCAoZm9yIFt4IGJvZHldIChlbWl0dGVyIHgpKSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcIndoZW4tc29tZVwiXG4gIFtbXyBiaW5kaW5ncyAmIGJvZHldXVxuICBgKHdoZW4tc29tZSB+YmluZGluZ3MgfkAoYnV0bGFzdCBib2R5KSB+KGVtaXR0ZXIgKGxhc3QgYm9keSkpKSlcblxuKGRlZm1ldGhvZCBjb21waWxlLWZvcm0gXCJ3aGVuLWxldFwiXG4gIFtbXyBiaW5kaW5ncyAmIGJvZHldXVxuICBgKHdoZW4tbGV0IH5iaW5kaW5ncyB+QChidXRsYXN0IGJvZHkpIH4oZW1pdHRlciAobGFzdCBib2R5KSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcIndoZW4tZmlyc3RcIlxuICBbW18gYmluZGluZ3MgJiBib2R5XV1cbiAgYCh3aGVuLWZpcnN0IH5iaW5kaW5ncyB+QChidXRsYXN0IGJvZHkpIH4oZW1pdHRlciAobGFzdCBib2R5KSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcIndoZW4tbm90XCJcbiAgW1tfIGJpbmRpbmdzICYgYm9keV1dXG4gIGAod2hlbi1ub3QgfmJpbmRpbmdzIH5AKGRvYWxsIChmb3IgW3ggYm9keV0gKGVtaXR0ZXIgeCkpKSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1mb3JtIFwiaWYtbm90XCJcbiAgW1tfIGJpbmRpbmdzICYgYm9keV1dXG4gIGAoaWYtbm90IH5iaW5kaW5ncyB+QChkb2FsbCAoZm9yIFt4IGJvZHldIChlbWl0dGVyIHgpKSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcImlmLXNvbWVcIlxuICBbW18gYmluZGluZ3MgJiBib2R5XV1cbiAgYChpZi1zb21lIH5iaW5kaW5ncyB+QChkb2FsbCAoZm9yIFt4IGJvZHldIChlbWl0dGVyIHgpKSkpKVxuXG4oZGVmbWV0aG9kIGNvbXBpbGUtZm9ybSBcImlmLWxldFwiXG4gIFtbXyBiaW5kaW5ncyAmIGJvZHldXVxuICBgKGlmLWxldCB+YmluZGluZ3MgfkAoZG9hbGwgKGZvciBbeCBib2R5XSAoZW1pdHRlciB4KSkpKSlcblxuKGRlZm1ldGhvZCBjb21waWxlLWZvcm0gXCJjYXNlXCJcbiAgW1tfIHYgJiBjYXNlc11dXG4gIGAoY2FzZSB+dlxuICAgICB+QChkb2FsbCAobWFwY2F0XG4gICAgICAgICAgICAgICAgKGZuIFtbdGVzdCBoaWNjdXBdXVxuICAgICAgICAgICAgICAgICAgKGlmIGhpY2N1cFxuICAgICAgICAgICAgICAgICAgICBbdGVzdCAoZW1pdHRlciBoaWNjdXApXVxuICAgICAgICAgICAgICAgICAgICBbKGVtaXR0ZXIgdGVzdCldKSlcbiAgICAgICAgICAgICAgICAocGFydGl0aW9uLWFsbCAyIGNhc2VzKSkpKSlcblxuKGRlZm1ldGhvZCBjb21waWxlLWZvcm0gXCJjb25kcFwiXG4gIFtbXyBmIHYgJiBjYXNlc11dXG4gIGAoY29uZHAgfmYgfnZcbiAgICAgfkAoZG9hbGwgKG1hcGNhdFxuICAgICAgICAgICAgICAgIChmbiBbW3Rlc3QgaGljY3VwXV1cbiAgICAgICAgICAgICAgICAgIChpZiBoaWNjdXBcbiAgICAgICAgICAgICAgICAgICAgW3Rlc3QgKGVtaXR0ZXIgaGljY3VwKV1cbiAgICAgICAgICAgICAgICAgICAgWyhlbWl0dGVyIHRlc3QpXSkpXG4gICAgICAgICAgICAgICAgKHBhcnRpdGlvbi1hbGwgMiBjYXNlcykpKSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1mb3JtIFwiY29uZFwiXG4gIFtbXyAmIGNsYXVzZXNdXVxuICBgKGNvbmQgfkAoZG9hbGxcbiAgICAgICAgICAgIChtYXBjYXRcbiAgICAgICAgICAgICAoZm4gW1tjaGVjayBleHByXV0gW2NoZWNrIChlbWl0dGVyIGV4cHIpXSlcbiAgICAgICAgICAgICAocGFydGl0aW9uIDIgY2xhdXNlcykpKSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1mb3JtIDpkZWZhdWx0IFtleHByXSBleHByKVxuXG4oZGVmbi0gbGl0ZXJhbD9cbiAgXCJUcnVlIGlmIHggaXMgYSBsaXRlcmFsIHZhbHVlIHRoYXQgY2FuIGJlIHJlbmRlcmVkIGFzLWlzLlwiXG4gIFt4XVxuICAoYW5kIChub3QgKHVuZXZhbHVhdGVkPyB4KSlcbiAgICAgICAob3IgKG5vdCAob3IgKHZlY3Rvcj8geCkgKG1hcD8geCkpKVxuICAgICAgICAgICAoYW5kIChldmVyeT8gbGl0ZXJhbD8geClcbiAgICAgICAgICAgICAgICAobm90IChrZXl3b3JkPyAoZmlyc3QgeCkpKSkpKSlcbiNfKGxpdGVyYWw/IFs6ZGl2IFwiZm9vXCJdKVxuXG4oZGVjbGFyZSBlbWl0LXJlYWN0KVxuXG4oZGVmbiBjb21waWxlLXJlYWN0LWVsZW1lbnRcbiAgXCJSZW5kZXIgYW4gZWxlbWVudCB2ZWN0b3IgYXMgYSBIVE1MIGVsZW1lbnQuXCJcbiAgW2VsZW1lbnRdXG4gIChsZXQgW1t0YWcgYXR0cnMgY29udGVudF0gKG5vcm0vZWxlbWVudCBlbGVtZW50KV1cbiAgICAoZW1pdC1yZWFjdCB0YWcgYXR0cnMgKHdoZW4gY29udGVudCAoY29tcGlsZS1yZWFjdCBjb250ZW50KSkpKSlcblxuKGRlZm4gY29tcGlsZS1lbGVtZW50XG4gIFwiUmV0dXJucyBhbiB1bmV2YWx1YXRlZCBmb3JtIHRoYXQgd2lsbCByZW5kZXIgdGhlIHN1cHBsaWVkIHZlY3RvciBhcyBhIEhUTUwgZWxlbWVudC5cIlxuICBbW3RhZyBhdHRycyAmIGNoaWxkcmVuIDphcyBlbGVtZW50XV1cbiAgKGNvbmRcbiAgICA7OyBTcGVjaWFsIHN5bnRheDpcbiAgICA7OyBbOj4gUmVhY3ROYXYgezprZXkgXCJ4eXpcIiwgOmZvbyBcImJhcn0gY2gwIGNoMV1cbiAgICAoZ2V0ICpoYW5kbGVycyogdGFnKVxuICAgIChsZXQgW2YgKGdldCAqaGFuZGxlcnMqIHRhZylcbiAgICAgICAgICBba2xhc3MgYXR0cnMgY2hpbGRyZW5dIChhcHBseSBmIGVsZW1lbnQpXVxuICAgICAgKGVtaXQtcmVhY3Qga2xhc3MgYXR0cnNcbiAgICAgICAgICAgICAgICAgICh3aXRoLWNoaWxkLWNvbmZpZyBlbGVtZW50IFtrbGFzcyBhdHRyc11cbiAgICAgICAgICAgICAgICAgICAgKG1hcHYgY29tcGlsZS1odG1sIGNoaWxkcmVuKSkpKVxuXG4gICAgOzsgZS5nLiBbOnNwYW4gXCJmb29cIl1cbiAgICA7KGV2ZXJ5PyBsaXRlcmFsPyBlbGVtZW50KVxuICAgIDsoY29tcGlsZS1yZWFjdC1lbGVtZW50IGVsZW1lbnQpXG5cbiAgICA7OyBlLmcuIFs6c3BhbiB7fSB4XVxuICAgIChhbmQgKGxpdGVyYWw/IHRhZykgKG1hcD8gYXR0cnMpKVxuICAgIChsZXQgW1t0YWcgYXR0cnMgX10gKG5vcm0vZWxlbWVudCBbdGFnIGF0dHJzXSldXG4gICAgICAoZW1pdC1yZWFjdCB0YWcgYXR0cnNcbiAgICAgICAgICAgICAgICAgICh3aXRoLWNoaWxkLWNvbmZpZyBlbGVtZW50IFt0YWcgYXR0cnNdXG4gICAgICAgICAgICAgICAgICAgIChtYXB2IGNvbXBpbGUtaHRtbCBjaGlsZHJlbikpKSlcblxuICAgIChsaXRlcmFsPyB0YWcpXG4gICAgOzsgV2UgY291bGQgbm93IGludGVycGV0IHRoaXMgYXMgZWl0aGVyOlxuICAgIDs7IDEuIEZpcnN0IGFyZ3VtZW50IGlzIHRoZSBhdHRyaWJ1dGVzIChpbiAjanN7fSBwcm92aWRlZCBieSB0aGUgdXNlcikgT1I6XG4gICAgOzsgMi4gRmlyc3QgYXJndW1lbnQgaXMgdGhlIGZpcnN0IGNoaWxkIGVsZW1lbnQuXG4gICAgOzsgV2UgYXNzdW1lICMyLiBBbHdheXMhXG4gICAgKGNvbXBpbGUtZWxlbWVudCAobGlzdCogdGFnIHt9IGF0dHJzIGNoaWxkcmVuKSlcblxuICAgIDs7IFByb2JsZW06IFthIGIgY10gY291bGQgYmUgaW50ZXJwcmV0ZWQgYXM6XG4gICAgOzsgMS4gVGhlIGNvbGwgb2YgUmVhY3ROb2RlcyBbYSBiIGNdIE9SXG4gICAgOzsgMi4gYSBpcyBhIFJlYWN0IEVsZW1lbnQsIGIgYXJlIHRoZSBwcm9wcyBhbmQgYyBpcyB0aGUgZmlyc3QgY2hpbGRcbiAgICA7OyBXZSBkZWZhdWx0IHRvIDEpIChoYW5kbGVkIGJlbG93KSBCVVQsIGlmIGIgaXMgYSBtYXAsIHdlIGtub3cgdGhpcyBtdXN0IGJlIDIpXG4gICAgOzsgc2luY2UgYSBtYXAgZG9lc24ndCBtYWtlIGFueSBzZW5zZSBhcyBhIFJlYWN0Tm9kZS5cbiAgICA7OyBbZm9vIHsuLi59IGNoMCBjaDFdIE5FVkVSIG1ha2VzIHNlbnNlIHRvIGludGVycHJldCBhcyBhIHNlcXVlbmNlXG4gICAgKGFuZCAodmVjdG9yPyBlbGVtZW50KSAobWFwPyBhdHRycykpXG4gICAgKGVtaXQtcmVhY3QgdGFnIGF0dHJzXG4gICAgICAgICAgICAgICAgICAod2l0aC1jaGlsZC1jb25maWcgZWxlbWVudCBbdGFnIGF0dHJzXVxuICAgICAgICAgICAgICAgICAgICAobWFwdiBjb21waWxlLWh0bWwgY2hpbGRyZW4pKSlcblxuICAgIChzZXE/IGVsZW1lbnQpXG4gICAgKHNlcSAobWFwdiBjb21waWxlLWh0bWwgZWxlbWVudCkpXG5cbiAgICA7OyBXZSBoYXZlIG5lc3RlZCBjaGlsZHJlblxuICAgIDs7IFtbOmRpdiBcImZvb1wiXSBbOnNwYW4gXCJmb29cIl1dXG4gICAgOmVsc2VcbiAgICAobWFwdiBjb21waWxlLWh0bWwgZWxlbWVudCkpKVxuI18oY29tcGlsZS1lbGVtZW50ICdbOj4gQSB7OmZvbyBcImJhclwifSBhXSlcbiNfKGNvbXBpbGUtZWxlbWVudCAnWzo+IEEgYSBiXSlcbiNfKGNvbXBpbGUtZWxlbWVudCAnW0Egezpmb28gXCJiYXJcIn1cbiAgICAgICAgICAgICAgICAgICAgIFs6c3BhbiAgYV1dKVxuI18oY29tcGlsZS1lbGVtZW50ICdbQSBiIGFdKVxuI18oY29tcGlsZS1lbGVtZW50ICdbOiogMCAxIDJdKVxuI18oY29tcGlsZS1lbGVtZW50ICcoYXJyYXkgWzpkaXYgXCJmb29cIl0gWzpzcGFuIFwiZm9vXCJdKSlcblxuKGRlZm4gY29tcGlsZS1odG1sXG4gIFwiUHJlLWNvbXBpbGUgZGF0YSBzdHJ1Y3R1cmVzXCJcbiAgW2NvbnRlbnRdXG4gIChjb25kXG4gICAgKHZlY3Rvcj8gY29udGVudCkgKGNvbXBpbGUtZWxlbWVudCBjb250ZW50KVxuICAgIChsaXRlcmFsPyBjb250ZW50KSBjb250ZW50XG4gICAgOmVsc2UgKGNvbXBpbGUtZm9ybSBjb250ZW50KSkpXG5cbihkZWZtZXRob2QgY29tcGlsZS1yZWFjdCA6dmVjdG9yIFt4c11cbiAgKGlmICh1dGlsL2VsZW1lbnQ/IHhzKVxuICAgIChjb21waWxlLXJlYWN0LWVsZW1lbnQgeHMpXG4gICAgKGNvbXBpbGUtcmVhY3QgKHNlcSB4cykpKSlcblxuKGRlZm1ldGhvZCBjb21waWxlLXJlYWN0IDpzZXEgW3hzXVxuICAobWFwdiBjb21waWxlLXJlYWN0IHhzKSlcblxuKGRlZm1ldGhvZCBjb21waWxlLXJlYWN0IDpkZWZhdWx0IFt4XSB4KVxuXG4jXyhucy11bm1hcCAqbnMqICd0by1qcylcbihkZWZtdWx0aSB0by1qc1xuICAgICAgICAgIFwiQ29tcGlsZXMgdG8gSlNcIlxuICAgICAgICAgIChmbiBbeF1cbiAgICAgICAgICAgIChjb25kXG4gICAgICAgICAgICAgICg6c2VydmVyLXJlbmRlcj8gKmNvbmZpZyopIDpzZXJ2ZXItcmVuZGVyIDs7IGVuZHMgdXAgaW4gZGVmYXVsdCBidXQgbGV0IHVzZXIgaGFuZGxlIGl0XG4gICAgICAgICAgICAgIChtYXA/IHgpIDptYXBcbiAgICAgICAgICAgICAgKHZlY3Rvcj8geCkgOnZlY3RvclxuICAgICAgICAgICAgICAoa2V5d29yZD8geCkgOmtleXdvcmRcbiAgICAgICAgICAgICAgOmVsc2UgKCM/KDpjbGogY2xhc3MgOmNsanMgdHlwZSkgeCkpKSlcblxuKGRlZm4tIHRvLWpzLW1hcFxuICBcIkNvbnZlcnQgYSBtYXAgaW50byBhIEphdmFTY3JpcHQgb2JqZWN0LlwiXG4gIFttXVxuICAod2hlbi1ub3QgKGVtcHR5PyBtKVxuICAgIChsZXQgW2tleS1zdHJzIChtYXB2IHRvLWpzIChrZXlzIG0pKVxuICAgICAgICAgIG5vbi1zdHIgKHJlbW92ZSBzdHJpbmc/IGtleS1zdHJzKVxuICAgICAgICAgIF8gKGFzc2VydCAoZW1wdHk/IG5vbi1zdHIpXG4gICAgICAgICAgICAgICAgICAgIChzdHIgXCJIaWNhZGE6IFByb3BzIGNhbid0IGJlIGR5bmFtaWM6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAocHItc3RyIG5vbi1zdHIpIFwiaW46IFwiIChwci1zdHIgbSkpKVxuICAgICAgICAgIGt2cy1zdHIgKC0+PiAobWFwdiAjKC0+IChzdHIgXFwnICUgXCInOn57fVwiKSkga2V5LXN0cnMpXG4gICAgICAgICAgICAgICAgICAgICAgIChpbnRlcnBvc2UgXCIsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgIChhcHBseSBzdHIpKV1cbiAgICAgICh2YXJ5LW1ldGFcbiAgICAgICAgKGxpc3QqICdqcyogKHN0ciBcIntcIiBrdnMtc3RyIFwifVwiKSAobWFwdiB0by1qcyAodmFscyBtKSkpXG4gICAgICAgIGFzc29jIDp0YWcgJ29iamVjdCkpKVxuICA7OyBXZSBhdm9pZCBjbGpzLmNvcmUvanMtb2JqIGhlcmUgc2luY2UgaXQgaW50cm9kdWNlcyBhIGxldCBhbmQgYW4gSUlGRTpcbiAgI18oYXBwbHkgbGlzdCAnY2xqcy5jb3JlL2pzLW9ialxuICAgICAgICAgICAoZG9hbGwgKGludGVybGVhdmUgKG1hcHYgdG8tanMgKGtleXMgbSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWFwdiB0by1qcyAodmFscyBtKSkpKSkpXG5cbihkZWZtZXRob2QgdG8tanMgOmtleXdvcmQgW3hdIChuYW1lIHgpKVxuKGRlZm1ldGhvZCB0by1qcyA6bWFwIFttXSAodG8tanMtbWFwIG0pKVxuKGRlZm1ldGhvZCB0by1qcyA6dmVjdG9yIFt4c11cbiAgKGFwcGx5IGxpc3QgJ2NsanMuY29yZS9hcnJheSAobWFwdiB0by1qcyB4cykpKVxuKGRlZm1ldGhvZCB0by1qcyA6ZGVmYXVsdCBbeF0geClcblxuKGRlZm4gY29sbGFwc2Utb25lXG4gIFwiV2UgY2FuIGNvbGxhcHNlIGNoaWxkcmVuIHRvIGEgbm9uLXZlY3RvciBpZiB0aGVyZSBpcyBvbmx5IG9uZS5cIlxuICBbeHNdXG4gIChjb25kLT4geHNcbiAgICAoPT0gMSAoY291bnQgeHMpKSBmaXJzdCkpXG5cbihkZWZuIHRhZy0+ZWxcbiAgXCJBIDpkaXYgaXMgdHJhbnNsYXRlZCB0byBcXFwiZGl2XFxcIiBhbmQgc3ltYm9sICdSZWFjdFJvdXRlciBzdGF5cy5cIlxuICBbeF1cbiAgKGFzc2VydCAob3IgKHN5bWJvbD8geCkgKGtleXdvcmQ/IHgpIChzdHJpbmc/IHgpIChzZXE/IHgpKVxuICAgICAgICAgIChzdHIgXCJHb3Q6IFwiICgjPyg6Y2xqIGNsYXNzIDpjbGpzIHR5cGUpIHgpKSlcbiAgKGlmIChrZXl3b3JkPyB4KVxuICAgIChpZiAoOm5vLXN0cmluZy10YWdzPyAqY29uZmlnKilcbiAgICAgIChzeW1ib2wgKG9yIChuYW1lc3BhY2UgeCkgKHNvbWUtPiAoOmRlZmF1bHQtbnMgKmNvbmZpZyopIG5hbWUpKSAobmFtZSB4KSlcbiAgICAgIChuYW1lIHgpKVxuICAgIHgpKVxuXG5cbihkZWZuIGVtaXQtcmVhY3RcbiAgXCJFbWl0cyB0aGUgZmluYWwgcmVhY3QganMgY29kZVwiXG4gIFt0YWcgYXR0cnMgY2hpbGRyZW5dXG4gIChsZXQgW3s6a2V5cyBbdHJhbnNmb3JtLWZuIGVtaXQtZm4gaW5saW5lPyB3cmFwLWlucHV0P1xuICAgICAgICAgICAgICAgIGNyZWF0ZS1lbGVtZW50IGFycmF5LWNoaWxkcmVuPyBzZXJ2ZXItcmVuZGVyP119ICpjb25maWcqXG4gICAgICAgIFt0YWcgYXR0cnMgY2hpbGRyZW5dICh0cmFuc2Zvcm0tZm4gW3RhZyBhdHRycyBjaGlsZHJlbiAqZW52Kl0pXVxuICAgIChpZiBpbmxpbmU/XG4gICAgICAobGV0IFt0eXBlIChvciAoYW5kIHdyYXAtaW5wdXQ/ICh1dGlsL2NvbnRyb2xsZWQtaW5wdXQtY2xhc3MgdGFnIGF0dHJzKSlcbiAgICAgICAgICAgICAgICAgICAgICh0YWctPmVsIHRhZykpXG4gICAgICAgICAgICBwcm9wcyAodG8tanNcbiAgICAgICAgICAgICAgICAgICAgKG1lcmdlICh3aGVuLW5vdCAoZW1wdHk/IGNoaWxkcmVuKSB7OmNoaWxkcmVuIChjb2xsYXBzZS1vbmUgY2hpbGRyZW4pfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb21waWxlLWNvbmZpZyAoZGlzc29jIGF0dHJzIDprZXkgOnJlZikpKSldXG4gICAgICAgIChpZiBlbWl0LWZuXG4gICAgICAgICAgKGVtaXQtZm4gdHlwZSAoOmtleSBhdHRycykgKDpyZWYgYXR0cnMpIHByb3BzKVxuICAgICAgICAgIChsaXN0IGNyZWF0ZS1lbGVtZW50IHR5cGUgKDprZXkgYXR0cnMpICg6cmVmIGF0dHJzKSBwcm9wcykpKVxuICAgICAgKGxldCBbY2hpbGRyZW4gKGlmIChhbmQgYXJyYXktY2hpbGRyZW4/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobm90IChlbXB0eT8gY2hpbGRyZW4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKDwgMSAoY291bnQgY2hpbGRyZW4pKSlcbiAgICAgICAgICAgICAgICAgICAgICAgOzsgSW4gcHJvZHVjdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgOzsgUmVhY3QuY3JlYXRlRWxlbWVudCB3aWxsIGp1c3QgY29weSBhbGwgYXJndW1lbnRzIGludG9cbiAgICAgICAgICAgICAgICAgICAgICAgOzsgdGhlIGNoaWxkcmVuIGFycmF5LiBXZSBjYW4gYXZvaWQgdGhpcyBieSBqdXN0IHBhc3NpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgOzsgb25lIGFyZ3VtZW50IGFuZCBtYWtlIGl0IHRoZSBhcnJheSBhbHJlYWR5LiBGYXN0ZXIuXG4gICAgICAgICAgICAgICAgICAgICAgIDs7IFRob3VnaCwgaW4gZGVidWcgYnVpbGRzIG9mIHJlYWN0IHRoaXMgd2lsbCB3YXJuIGFib3V0IFwibm8ga2V5c1wiLlxuICAgICAgICAgICAgICAgICAgICAgICBbKGFwcGx5IGxpc3QgJ2NsanMuY29yZS9hcnJheSBjaGlsZHJlbildXG4gICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuKVxuICAgICAgICAgICAgZWwgKGlmLXNvbWUgW3dyYXBwZXItY2xhc3MgKHV0aWwvY29udHJvbGxlZC1pbnB1dC1jbGFzcyB0YWcgYXR0cnMpXVxuICAgICAgICAgICAgICAgICAoaWYgd3JhcC1pbnB1dD9cbiAgICAgICAgICAgICAgICAgICB3cmFwcGVyLWNsYXNzXG4gICAgICAgICAgICAgICAgICAgKHRhZy0+ZWwgdGFnKSlcbiAgICAgICAgICAgICAgICAgKHRhZy0+ZWwgdGFnKSlcbiAgICAgICAgICAgIGNmZyAoaWYgc2VydmVyLXJlbmRlcj8gYXR0cnMgKHRvLWpzIChjb21waWxlLWNvbmZpZyBhdHRycykpKV1cbiAgICAgICAgKGlmIGVtaXQtZm5cbiAgICAgICAgICAoZW1pdC1mbiBlbCBjZmcgY2hpbGRyZW4pXG4gICAgICAgICAgKGFwcGx5IGxpc3QgY3JlYXRlLWVsZW1lbnQgZWwgY2ZnIGNoaWxkcmVuKSkpKSkpXG5cbihkZWZuIGVtaXR0ZXJcbiAgW2NvbnRlbnRdXG4gIChjb25kLT4gKGNvbXBpbGUtaHRtbCBjb250ZW50KVxuICAgICg6aW5saW5lPyAqY29uZmlnKikgdG8tanMpKVxuXG4oZGVmbiBjb21waWxlXG4gIFwiQXJndW1lbnRzOlxuICAtIGNvbnRlbnQ6IFRoZSBoaWNjdXAgdG8gY29tcGlsZVxuICAtIG9wdHNcbiAgIG8gOmFycmF5LWNoaWxkcmVuPyAtIGZvciBwcm9kdWN0IGJ1aWxkIG9mIFJlYWN0IG9ubHkgb3IgeW91J2xsIGVub2pveSBhIGxvdCBvZiB3YXJuaW5ncyA6KVxuICAgbyA6Y3JlYXRlLWVsZW1lbnQgJ2pzL1JlYWN0LmNyZWF0ZUVsZW1lbnQgLSB5b3UgY2FuIGFsc28gdXNlIHlvdXIgb3duIGZ1bmN0aW9uIGhlcmUuXG4gICBvIDp3cmFwLWlucHV0PyAtIGlmIGlucHV0cyBzaG91bGQgYmUgd3JhcHBlZC4gVHJ5IHdpdGhvdXQhXG4gICBvIDpyZXdyaXRlLWZvcj8gLSByZXdyaXRlcyBzaW1wbGUgKGZvciBbeCB4c10gLi4uKSBpbnRvIGVmZmljaWVudCByZWR1Y2UgcHVzaGluZyBpbnRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGEgSlMgYXJyYXkuXG4gICBvIDplbWl0LWZuIC0gb3B0aW5hbDogY2FsbGVkIHdpdGggW3R5cGUgY29uZmlnLWpzIGNoaWxkLW9yLWNoaWxkcmVuXVxuICAgbyA6c2VydmVyLXJlbmRlcj8gLSBkZWZhdWx0cyB0byBmYWxzZS4gRG9lc24ndCBkbyBhbnkgSlMgb3V0cHV0dGluZy4gU3RpbGwgcmVxdWlyZXMgYW4gOmVtaXQtZm4hXG4gICBvIDpjYW1lbGNhc2Uta2V5LXByZWQgLSBkZWZhdWx0cyB0byAoc29tZS1mbiBrZXl3b3JkPyBzeW1ib2w/KSwgaWUuIG1hcCBrZXlzIHRoYXQgaGF2ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyaW5nIGtleXMsIGFyZSBOT1QgYnkgZGVmYXVsdCBjb252ZXJ0ZWQgZnJvbSBrZWJhYi1jYXNlIHRvIGNhbWVsQ2FzZSFcbiAgIG8gOmlubGluZT8gZmFsc2UgLSBOT1Qgc3VwcG9ydGVkIHlldC4gUG9zc2libHkgaW4gdGhlIGZ1dHVyZS4uLlxuICAgbyA6Y2hpbGQtY29uZmlnIC0gQ2FsbGVkIGZvciBldmVyeSBlbGVtZW50IHdpdGggW2NvbmZpZyByYXctZWxlbWVudCBub3JtYWxpemVkLWVsZW1lbnRdXG4gICAgICAgICAgICAgICAgICAgICB0byBnZXQgYSBuZXcgY29uZmlndXJhdGlvbiBmb3IgZWxlbWVudCdzIGNoaWxkcmVuXG4gICBvIDp0cmFuc2Zvcm0tZm4gLSBDYWxsZWQgd2l0aCBbW3RhZyBhdHRycyBjaGlsZHJlbiAqZW52Kl1dIGJlZm9yZSBlbWl0dGluZywgdG8gZ2V0XG4gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1lZCBlbGVtZW50IGFzIFt0YWcgYXR0cnMgY2hpbGRyZW5dXG5cbiAgIFJlYWN0IE5hdGl2ZSBzcGVjaWFsIHJlY29tbWVuZGVkIG9wdGlvbnM6XG4gICBvIDpuby1zdHJpbmctdGFncz8gLSBOZXZlciBvdXRwdXQgc3RyaW5nIHRhZ3MgKGRvbid0IGV4aXRzIGluIFJOKVxuICAgbyA6ZGVmYXVsdC1ucyAtIEFueSB1bnByZWZpeGVkIGNvbXBvbmVudCB3aWxsIGdldCBwcmVmaXhlZCB3aXRoIHRoaXMgbnMuXG4gICBvIDpjaGlsZC1jb25maWcgLSAoZm4gW2NvbmZpZyByYXctZWxlbWVudCBub3JtYWxpemVkLWVsZW1lbnRdIC0+IGNvbmZpZykgY2hhbmdlIHByb2Nlc3Npbmcgb3B0aW9ucyBhcyBoaWNhZGEgZ29lcyBkb3duIHRoZSB0cmVlXG4gIC0gaGFuZGxlcnM6XG4gICBBIG1hcCB0byBoYW5kbGUgc3BlY2lhbCB0YWdzLiBTZWUgZGVmYXVsdC1oYW5kbGVycyBpbiB0aGlzIG5hbWVzcGFjZS5cbiAgLSBlbnY6IFRoZSBtYWNybyBlbnZpcm9ubWVudC4gTm90IHVzZWQgY3VycmVudGx5LlwiXG4gIChbY29udGVudF1cbiAgIChjb21waWxlIGNvbnRlbnQgZGVmYXVsdC1jb25maWcpKVxuICAoW2NvbnRlbnQgb3B0c11cbiAgIChjb21waWxlIGNvbnRlbnQgb3B0cyBkZWZhdWx0LWhhbmRsZXJzKSlcbiAgKFtjb250ZW50IG9wdHMgaGFuZGxlcnNdXG4gICAoY29tcGlsZSBjb250ZW50IG9wdHMgaGFuZGxlcnMgbmlsKSlcbiAgKFtjb250ZW50IG9wdHMgaGFuZGxlcnMgZW52XVxuICAgKGFzc2VydCAobm90ICg6aW5saW5lPyBvcHRzKSkgXCI6aW5saW5lPyBpc24ndCBzdXBwb3J0ZWQgeWV0XCIpXG4gICAoYmluZGluZyBbKmNvbmZpZyogKG1lcmdlIGRlZmF1bHQtY29uZmlnIG9wdHMpXG4gICAgICAgICAgICAgKmhhbmRsZXJzKiAobWVyZ2UgZGVmYXVsdC1oYW5kbGVycyBoYW5kbGVycylcbiAgICAgICAgICAgICAqZW52KiBlbnZdXG4gICAgIChlbWl0dGVyIGNvbnRlbnQpKSkpXG5cbihjb21tZW50XG5cbiAgKGNvbXBpbGUgWzpoMS5iLmMgezpjbGFzcyBcImFcIn1dKSA7OyBzaG91bGQgYmUgXCJiIGMgYVwiLCBvcmRlciBwcmVzZXJ2ZWRcbiAgKGNvbXBpbGUgWzpoMS5iLmMgezpjbGFzc05hbWUgXCJhXCJ9XSlcbiAgKGNvbXBpbGUgWzpoMS5iLmMgezpjbGFzcy1uYW1lIFwiYVwifV0pXG5cbiAgKGNvbXBpbGUgJ1s6ZGl2IHs6Y2xhc3MgW2FdfSBcImhtbVwiXVxuICAgICAgICAgICB7OnNlcnZlci1yZW5kZXI/IHRydWVcbiAgICAgICAgICAgIDplbWl0LWZuIChmbiBbYSBiIGNdXG4gICAgICAgICAgICAgICAgICAgICAgIChpbnRvIFthIGJdIGMpKX0pXG5cbiAgKGNvbXBpbGUgJ1s6ZGl2IChmb3IgW3ggeHNdXG4gICAgICAgICAgICAgICAgICAgIFs6c3BhbiB4XSldXG4gICAgICAgICAgIHs6cmV3cml0ZS1mb3I/IHRydWV9KVxuXG4gIDs7IEV4YW1wbGUgOmNsb25lIGhhbmRsZXIgKyBlbWl0dGVyOlxuICAoY29tcGlsZSAnWzpkaXZcbiAgICAgICAgICAgICBbOnNwYW4gezprZXkgXCJmb29cIn0gYSBiIGNdXG4gICAgICAgICAgICAgWzpjbG9uZSB4IHs6a2V5IGt9IG9uZSB0d29dXG4gICAgICAgICAgICAgWzpjbG9uZSB4IHs6a2V5IGt9XV1cbiAgICAgICAgICAgezphcnJheS1jaGlsZHJlbj8gZmFsc2UgOzsgd29ya3Mgd2l0aCBib3RoIVxuICAgICAgICAgICAgOmVtaXQtZm4gKGZuIFt0YWcgYXR0ciBjaGlsZHJlbl1cbiAgICAgICAgICAgICAgICAgICAgICAgOzsgTm93IGhhbmRsZSB0aGUgZW1pdHRlciBjYXNlOlxuICAgICAgICAgICAgICAgICAgICAgICAoaWYgKGFuZCAoc2VxPyB0YWcpICg9IDo6Y2xvbmUgKGZpcnN0IHRhZykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIChsaXN0KiAnanMvUmVhY3QuY2xvbmVFbGVtZW50IChzZWNvbmQgdGFnKSBhdHRyIGNoaWxkcmVuKVxuICAgICAgICAgICAgICAgICAgICAgICAgIChsaXN0KiAnanMvUmVhY3QuY3JlYXRlRWxlbWVudCB0YWcgYXR0ciBjaGlsZHJlbikpKX1cbiAgICAgICAgICAgezpjbG9uZSAoZm4gW18gbm9kZSBhdHRycyAmIGNoaWxkcmVuXVxuICAgICAgICAgICAgICAgICAgICAgOzsgRW5zdXJlIHByb3BzICsgY2hpbGRyZW4gYXJlIGluIHRoZSByaWdodCBwb3NpdGlvbjpcbiAgICAgICAgICAgICAgICAgICAgIFsobGlzdCA6OmNsb25lIG5vZGUpIGF0dHJzIGNoaWxkcmVuXSl9KVxuXG4gIChjb21waWxlICdbOiogezprZXkgXCJhXCJ9IGEgYl0pXG5cbiAgKGNvbXBpbGUgJ1s6KiBhIGJdKVxuICAoY29tcGlsZSAnWzo+IDpkaXYgcHJvcHMgYl0pXG5cbiAgOzsgRG9lc24ndCBjb252ZXJ0IHN0cmluZyBrZXlzLCBidXQgZG8gY29udmVydCBrZXl3b3JkcyAmIHN5bWJvbHM6XG4gIChjb21waWxlICdbWCB7XCJrZWJhYi1jYXNlXCIgeSA6Y2FtZWwtY2FzZSB4IGNhbWVsLWNhc2UtMiA4fV0pXG5cbiAgKGNvbXBpbGUgJ1tUcmFuc2l0aW9uIHs6aW4gaW4tcHJvcH0gKGZuIFtzdGF0ZV0pXSkgOzsgd29ya3MgZXEgdG8gOj5cbiAgKGNvbXBpbGUgJ1thIGIgY10pIDs7IFdlIGhhdmUgYSBjb2xsIG9mIFJlYWN0Tm9kZXMuIERvbid0IHRvdWNoXG4gIChjb21waWxlICcoc29tZS1mbiB7OmluIGluLXByb3B9IChmbiBbc3RhdGVdKSkpIDs7IEZOIGNhbGwsIGRvbid0IHRvdWNoXG5cbiAgKGNvbXBpbGVcbiAgICAnWzo+IFRyYW5zaXRpb24gezppbiBpbi1wcm9wXG4gICAgICAgICAgICAgICAgICAgICA6dW5tb3VudC1vbi1leGl0IHRydWVcbiAgICAgICAgICAgICAgICAgICAgIDp0aW1lb3V0IHs6ZW50ZXIgMzAwLCA6ZXhpdCAxMDB9fVxuICAgICAgKGZuIFtzdGF0ZV0pXSlcblxuICA7OyBJc3N1ZSAjMjpcbiAgKGNvbXBpbGUgJ1s6ZGl2IHs6aWh0bWwgXCI8ZGl2PmhpPC9kaXY+XCJ9XVxuICAgICAgICAgICB7OnRyYW5zZm9ybS1mbiAoZm4gW1t0YWcgYXR0ciBjaF1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmLXNvbWUgW2h0bWwgKDppaHRtbCBhdHRyKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0YWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoLT4gYXR0clxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGlzc29jIDppaHRtbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFzc29jIDpkYW5nZXJvdXNseVNldElubmVySFRNTCB7Ol9faHRtbCBodG1sfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdGFnIGF0dHIgY2hdKSl9KVxuXG4gIChjb21waWxlICdbOlRleHQgYSBiXVxuICAgICAgICAgICB7Om5vLXN0cmluZy10YWdzPyB0cnVlXG4gICAgICAgICAgICA6ZGVmYXVsdC1ucyAnbXkucm4ubmF0aXZlfSlcbiAgKGNvbXBpbGUgJ1s6cm4vVGV4dCBhIGJdIHt9KVxuICAoY29tcGlsZSAnWzpUZXh0IGEgYl0gezpuby1zdHJpbmctdGFncz8gdHJ1ZX0pXG5cbiAgKGNvbXBpbGUgJ1s6VGV4dCB7OnN0eWxlIFt7OmJvcmRlci1ib3R0b20gXCIycHhcIn1dfV0pXG5cbiAgKGNvbXBpbGUgJ1s6ZGl2IGEgYl0gezphcnJheS1jaGlsZHJlbj8gZmFsc2V9KVxuXG4gIChjb21waWxlICcod2hlbi1sZXQgW3Bsb3AgXCJhXCJdIFs6aDEuYi5jIHs6Y2xhc3MgcGxvcH1dKSlcbiAgKGNvbXBpbGUgJyh3aGVuLWZpcnN0IFtwbG9wIFtcImFcIiBcImJcIl1dIFs6aDEuYi5jIHs6Y2xhc3MgcGxvcH1dKSlcbiAgKGNvbXBpbGUgJyhpZi1sZXQgW3Bsb3AgXCJhXCJdXG4gICAgICAgICAgICAgIFs6aDEuYi5jIHs6Y2xhc3MgcGxvcH1dXG4gICAgICAgICAgICAgIFs6aDEuZC5lIHs6Y2xhc3MgXCJub3QtcGxvcFwifV0pKSlcbiJdfQ==