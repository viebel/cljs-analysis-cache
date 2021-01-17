// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.match$macros");
/**
 * Enable syntax check of match macros
 */
cljs.core.match$macros._STAR_syntax_check_STAR_ = cljs.core.atom.call(null,true);
cljs.core.match$macros._STAR_locals_STAR_ = null;
/**
 * Allow map matching syntax to check for IMatchLookup
 */
cljs.core.match$macros._STAR_match_lookup_STAR_ = false;
/**
 * Default vector type. Can be rebound allowing emission of
 *           custom inline code for vector patterns, for example
 *           type-hinted primitive array operations
 */
cljs.core.match$macros._STAR_vector_type_STAR_ = new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296));
/**
 * In the presence of recur we cannot apply code size optimizations
 */
cljs.core.match$macros._STAR_recur_present_STAR_ = false;
/**
 * Flag to optimize performance over code size.
 */
cljs.core.match$macros._STAR_no_backtrack_STAR_ = false;
/**
 * Pre-allocated exception used for backtracing
 */
cljs.core.match$macros.backtrack = (new Error("Could not find match."));
cljs.core.match$macros.backtrack_expr = (function cljs$core$match$macros$backtrack_expr(){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",(463239872),null),null,(1),null))));
});
cljs.core.match$macros.backtrack_sym = (function cljs$core$match$macros$backtrack_sym(){
return new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",(463239872),null);
});
cljs.core.match$macros._STAR_backtrack_stack_STAR_ = cljs.core.List.EMPTY;
cljs.core.match$macros._STAR_root_STAR_ = true;
cljs.core.match$macros.warn = (function cljs$core$match$macros$warn(msg){
if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs.core.match$macros._STAR_warned_STAR_))){
var _STAR_print_fn_STAR__orig_val__22_24 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__23_25 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23_25);

try{cljs.core.println.call(null,"WARNING:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),", line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros._STAR_line_STAR_),":"].join(''),msg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__22_24);
}
return cljs.core.reset_BANG_.call(null,cljs.core.match$macros._STAR_warned_STAR_,true);
} else {
return null;
}
});
(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$val_at$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,not_found);
}));
cljs.core.match$macros.val_at_expr = (function cljs$core$match$macros$val_at_expr(var_args){
var args__12669__auto__ = [];
var len__12666__auto___27 = arguments.length;
var i__12667__auto___28 = (0);
while(true){
if((i__12667__auto___28 < len__12666__auto___27)){
args__12669__auto__.push((arguments[i__12667__auto___28]));

var G__29 = (i__12667__auto___28 + (1));
i__12667__auto___28 = G__29;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((0) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((0)),(0),null)):null);
return cljs.core.match$macros.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(argseq__12670__auto__);
});

(cljs.core.match$macros.val_at_expr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",(-296075407),null),null,(1),null)),args));
}));

(cljs.core.match$macros.val_at_expr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match$macros.val_at_expr.cljs$lang$applyTo = (function (seq26){
var self__12659__auto__ = this;
return self__12659__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26));
}));

cljs.core.match$macros.vector_type = (function cljs$core$match$macros$vector_type(var_args){
var args__12669__auto__ = [];
var len__12666__auto___32 = arguments.length;
var i__12667__auto___33 = (0);
while(true){
if((i__12667__auto___33 < len__12666__auto___32)){
args__12669__auto__.push((arguments[i__12667__auto___33]));

var G__34 = (i__12667__auto___33 + (1));
i__12667__auto___33 = G__34;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return cljs.core.match$macros.vector_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(cljs.core.match$macros.vector_type.cljs$core$IFn$_invoke$arity$variadic = (function (t,r){
return t;
}));

(cljs.core.match$macros.vector_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.match$macros.vector_type.cljs$lang$applyTo = (function (seq30){
var G__31 = cljs.core.first.call(null,seq30);
var seq30__$1 = cljs.core.next.call(null,seq30);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31,seq30__$1);
}));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.check_size_QMARK_ !== 'undefined')){
} else {
cljs.core.match$macros.check_size_QMARK_ = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","check-size?"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.tag !== 'undefined')){
} else {
cljs.core.match$macros.tag = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","tag"),(function (t){
return t;
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.test_inline !== 'undefined')){
} else {
cljs.core.match$macros.test_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","test-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.test_with_size_inline !== 'undefined')){
} else {
cljs.core.match$macros.test_with_size_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","test-with-size-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.test_with_min_size_inline !== 'undefined')){
} else {
cljs.core.match$macros.test_with_min_size_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","test-with-min-size-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.count_inline !== 'undefined')){
} else {
cljs.core.match$macros.count_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","count-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.nth_inline !== 'undefined')){
} else {
cljs.core.match$macros.nth_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","nth-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.nth_offset_inline !== 'undefined')){
} else {
cljs.core.match$macros.nth_offset_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","nth-offset-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.subvec_inline !== 'undefined')){
} else {
cljs.core.match$macros.subvec_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","subvec-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.nthnext_inline !== 'undefined')){
} else {
cljs.core.match$macros.nthnext_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","nthnext-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match$macros.check_size_QMARK_,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (_){
return true;
}));
cljs.core._add_method.call(null,cljs.core.match$macros.tag,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (t){
throw (new Error(["No tag specified for vector specialization ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.tag,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_){
return cljs.core.PersistentVector;
}));
cljs.core.match$macros.with_tag = (function cljs$core$match$macros$with_tag(t,ocr){
var the_tag = cljs.core.match$macros.tag.call(null,t);
var the_tag__$1 = the_tag;
return cljs.core.vary_meta.call(null,ocr,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),the_tag__$1);
});
cljs.core._add_method.call(null,cljs.core.match$macros.test_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr){
var the_tag = cljs.core.match$macros.tag.call(null,t);
var c = ((cljs.core._EQ_.call(null,the_tag,cljs.core.PersistentVector))?the_tag:((typeof the_tag === 'string')?the_tag:(((the_tag instanceof cljs.core.Symbol))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_tag.call(null)):(function(){throw (new Error(["Unsupported tag type",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_tag)].join('')))})()
)));
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",(-1550392028),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));
} else {
if(cljs.core.truth_(c.isArray())){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",(-1655912448),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",(2044751870),null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));

}
}
}));
cljs.core._add_method.call(null,cljs.core.match$macros.test_with_size_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,size){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.test_inline.call(null,t,ocr),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.count_inline.call(null,t,cljs.core.match$macros.with_tag.call(null,t,ocr)),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))),null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.test_with_min_size_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,size){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.test_inline.call(null,t,ocr),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",(350096541),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.count_inline.call(null,t,cljs.core.match$macros.with_tag.call(null,t,ocr)),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))),null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.count_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",(-921270233),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.nth_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr,i){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",(1961052085),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,i,null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.nth_offset_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,i,offset){
return cljs.core.match$macros.nth_inline.call(null,t,ocr,i);
}));
cljs.core._add_method.call(null,cljs.core.match$macros.subvec_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function() {
var G__35 = null;
var G__35__3 = (function (_,ocr,start){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",(1039737205),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,start,null,(1),null))));
});
var G__35__4 = (function (_,ocr,start,end){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",(1039737205),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null))));
});
G__35 = function(_,ocr,start,end){
switch(arguments.length){
case 3:
return G__35__3.call(this,_,ocr,start);
case 4:
return G__35__4.call(this,_,ocr,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35.cljs$core$IFn$_invoke$arity$3 = G__35__3;
G__35.cljs$core$IFn$_invoke$arity$4 = G__35__4;
return G__35;
})()
);
cljs.core._add_method.call(null,cljs.core.match$macros.nthnext_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr,n){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nthnext","cljs.core/nthnext",(-1690777327),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,n,null,(1),null))));
}));
(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (this$,x){
var this$__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),this$__$1);
}));

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.subvec.call(null,this$__$1,(0),n),cljs.core.subvec.call(null,this$__$1,(n + (1)),cljs.core.count.call(null,this$__$1)));
}));

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (this$,n){
var this$__$1 = this;
var x = cljs.core.nth.call(null,this$__$1,n);
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.protocols.drop_nth.call(null,this$__$1,n),x);
}));
(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (this$,x){
var this$__$1 = this;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),this$__$1);
}));

(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
return cljs.core.into.call(null,cljs.core.subvec.call(null,this$__$1,(0),n),cljs.core.subvec.call(null,this$__$1,(n + (1)),cljs.core.count.call(null,this$__$1)));
}));

(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (this$,n){
var this$__$1 = this;
var x = cljs.core.nth.call(null,this$__$1,n);
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.protocols.drop_nth.call(null,this$__$1,n),x);
}));
cljs.core.match$macros.constructor_QMARK_ = (function cljs$core$match$macros$constructor_QMARK_(p){
return cljs.core.not.call(null,cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,p));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.groupable_QMARK_ !== 'undefined')){
} else {
/**
 * Determine if two patterns may be grouped together for simultaneous
 * testing.
 */
cljs.core.match$macros.groupable_QMARK_ = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","groupable?"),(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(b)], null);
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (a,b){
return cljs.core._EQ_.call(null,a,b);
}));


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.match.protocols.IVecMod}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.PatternRow = (function (ps,action,bindings){
this.ps = ps;
this.action = action;
this.bindings = bindings;
this.cljs$lang$protocol_mask$partition0$ = 10486747;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.PatternRow.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.PatternRow)) && (cljs.core._EQ_.call(null,self__.ps,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.action,new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.bindings,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__37 = k;
var G__37__$1 = (((G__37 instanceof cljs.core.Keyword))?G__37.fqn:null);
switch (G__37__$1) {
case "ps":
return self__.ps;

break;
case "action":
return self__.action;

break;
case "bindings":
return self__.bindings;

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.call(null,self__.ps,i);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,x){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.call(null,self__.ps,i,x);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__9395__auto__ = cljs.core.next.call(null,self__.ps);
if(temp__9395__auto__){
var nps = temp__9395__auto__;
return (new cljs.core.match$macros.PatternRow(nps,self__.action,self__.bindings));
} else {
return (new cljs.core.match$macros.PatternRow(cljs.core.PersistentVector.EMPTY,self__.action,self__.bindings));
}
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.ps);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return this$__$1.equals(other);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PatternRow.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.match.protocols.drop_nth.call(null,self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),self__.ps),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.match.protocols.swap.call(null,self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,self__.ps);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.assoc.call(null,self__.ps,k,v),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,self__.ps);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.conj.call(null,self__.ps,x),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.call = (function (self__,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.nth.call(null,self__.ps,n);
}));

(cljs.core.match$macros.PatternRow.prototype.apply = (function (self__,args36){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args36)));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var _ = this;
return cljs.core.nth.call(null,self__.ps,n);
}));

(cljs.core.match$macros.PatternRow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null);
}));

(cljs.core.match$macros.PatternRow.cljs$lang$type = true);

(cljs.core.match$macros.PatternRow.cljs$lang$ctorStr = "cljs.core.match$macros/PatternRow");

(cljs.core.match$macros.PatternRow.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/PatternRow");
}));

/**
 * Positional factory function for cljs.core.match$macros/PatternRow.
 */
cljs.core.match$macros.__GT_PatternRow = (function cljs$core$match$macros$__GT_PatternRow(ps,action,bindings){
return (new cljs.core.match$macros.PatternRow(ps,action,bindings));
});

cljs.core.match$macros.pattern_row = (function cljs$core$match$macros$pattern_row(var_args){
var G__40 = arguments.length;
switch (G__40) {
case (2):
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$2 = (function (ps,action){
return cljs.core.match$macros.pattern_row.call(null,ps,action,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$3 = (function (ps,action,bindings){
var ps__$1 = ((cljs.core.vector_QMARK_.call(null,ps))?ps:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,ps));
return (new cljs.core.match$macros.PatternRow(ps__$1,action,bindings));
}));

(cljs.core.match$macros.pattern_row.cljs$lang$maxFixedArity = (3));

cljs.core.match$macros.update_pattern = (function cljs$core$match$macros$update_pattern(prow,i,p){
return cljs.core.match$macros.pattern_row.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow),i,p),new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(prow),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match$macros.all_wildcards_QMARK_ = (function cljs$core$match$macros$all_wildcards_QMARK_(prow){
return cljs.core.every_QMARK_.call(null,cljs.core.match$macros.wildcard_pattern_QMARK_,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match$macros.drop_nth_bind = (function cljs$core$match$macros$drop_nth_bind(prow,n,ocr){
var ps = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow);
var p = ps.call(null,n);
var action = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(prow);
var bind_expr = cljs.core.match$macros.leaf_bind_expr.call(null,ocr);
var as = new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p));
var bindings = (function (){var or__10116__auto__ = new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(prow);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var bindings__$1 = (cljs.core.truth_(as)?cljs.core.conj.call(null,bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [as,bind_expr], null)):bindings);
var bindings__$2 = (cljs.core.truth_(cljs.core.match$macros.named_wildcard_pattern_QMARK_.call(null,p))?cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(p),bind_expr], null)):bindings__$1);
return cljs.core.match$macros.pattern_row.call(null,cljs.core.match.protocols.drop_nth.call(null,ps,n),action,bindings__$2);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.LeafNode = (function (value,bindings,__meta,__extmap,__hash){
this.value = value;
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k43,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__47 = k43;
var G__47__$1 = (((G__47 instanceof cljs.core.Keyword))?G__47.fqn:null);
switch (G__47__$1) {
case "value":
return self__.value;

break;
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k43,else__11461__auto__);

}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.empty_QMARK_.call(null,self__.bindings)))){
var bindings__$1 = cljs.core.remove.call(null,(function (p__48){
var vec__49 = p__48;
var sym = cljs.core.nth.call(null,vec__49,(0),null);
var _ = cljs.core.nth.call(null,vec__49,(1),null);
return cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
}),self__.bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,bindings__$1)))),null,(1),null)),(new cljs.core.List(null,self__.value,null,(1),null))));
} else {
return self__.value;
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__52){
var vec__53 = p__52;
var k__11487__auto__ = cljs.core.nth.call(null,vec__53,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__53,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match$macros.LeafNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__42){
var self__ = this;
var G__42__$1 = this;
return (new cljs.core.RecordIter((0),G__42__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"bindings","bindings",(1271397192))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((1549484068) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44,other45){
var self__ = this;
var this44__$1 = this;
return (((!((other45 == null)))) && ((this44__$1.constructor === other45.constructor)) && (cljs.core._EQ_.call(null,this44__$1.value,other45.value)) && (cljs.core._EQ_.call(null,this44__$1.bindings,other45.bindings)) && (cljs.core._EQ_.call(null,this44__$1.__extmap,other45.__extmap)));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",(305978217)),null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__42){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__56 = cljs.core.keyword_identical_QMARK_;
var expr__57 = k__11472__auto__;
if(cljs.core.truth_(pred__56.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__57))){
return (new cljs.core.match$macros.LeafNode(G__42,self__.bindings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__56.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),expr__57))){
return (new cljs.core.match$macros.LeafNode(self__.value,G__42,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__42),null));
}
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",(305978217)),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__42){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,G__42,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match$macros.LeafNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null);
}));

(cljs.core.match$macros.LeafNode.cljs$lang$type = true);

(cljs.core.match$macros.LeafNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/LeafNode",null,(1),null));
}));

(cljs.core.match$macros.LeafNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match$macros/LeafNode");
}));

/**
 * Positional factory function for cljs.core.match$macros/LeafNode.
 */
cljs.core.match$macros.__GT_LeafNode = (function cljs$core$match$macros$__GT_LeafNode(value,bindings){
return (new cljs.core.match$macros.LeafNode(value,bindings,null,null,null));
});

/**
 * Factory function for cljs.core.match$macros/LeafNode, taking a map of keywords to field values.
 */
cljs.core.match$macros.map__GT_LeafNode = (function cljs$core$match$macros$map__GT_LeafNode(G__46){
var extmap__11545__auto__ = (function (){var G__59 = cljs.core.dissoc.call(null,G__46,new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)));
if(cljs.core.record_QMARK_.call(null,G__46)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__59);
} else {
return G__59;
}
})();
return (new cljs.core.match$macros.LeafNode(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__46),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(G__46),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match$macros.leaf_node = (function cljs$core$match$macros$leaf_node(var_args){
var G__62 = arguments.length;
switch (G__62) {
case (1):
return cljs.core.match$macros.leaf_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match$macros.leaf_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.leaf_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return (new cljs.core.match$macros.LeafNode(value,cljs.core.PersistentVector.EMPTY,null,null,null));
}));

(cljs.core.match$macros.leaf_node.cljs$core$IFn$_invoke$arity$2 = (function (value,bindings){
return (new cljs.core.match$macros.LeafNode(value,bindings,null,null,null));
}));

(cljs.core.match$macros.leaf_node.cljs$lang$maxFixedArity = (2));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.leaf_bind_expr !== 'undefined')){
} else {
cljs.core.match$macros.leaf_bind_expr = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","leaf-bind-expr"),(function (ocr){
return new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match$macros.leaf_bind_expr,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.leaf_bind_expr,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.leaf_bind_expr,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (ocr){
var m = cljs.core.meta.call(null,ocr);
return cljs.core.match$macros.val_at_expr.call(null,new cljs.core.Keyword(null,"map-sym","map-sym",(1467543192)).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(m));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.leaf_bind_expr,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (ocr){
return ocr;
}));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.FailNode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.FailNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k65,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__69 = k65;
switch (G__69) {
default:
return cljs.core.get.call(null,self__.__extmap,k65,else__11461__auto__);

}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.FailNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),(new cljs.core.List(null,"No match found.",null,(1),null)))),null,(1),null)))),null,(1),null))));
} else {
return cljs.core.match$macros.backtrack_expr.call(null);
}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__70){
var vec__71 = p__70;
var k__11487__auto__ = cljs.core.nth.call(null,vec__71,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__71,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match$macros.FailNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__64){
var self__ = this;
var G__64__$1 = this;
return (new cljs.core.RecordIter((0),G__64__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match$macros.FailNode(self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((-1819155752) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this66,other67){
var self__ = this;
var this66__$1 = this;
return (((!((other67 == null)))) && ((this66__$1.constructor === other67.constructor)) && (cljs.core._EQ_.call(null,this66__$1.__extmap,other67.__extmap)));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match$macros.FailNode(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__64){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__74 = cljs.core.keyword_identical_QMARK_;
var expr__75 = k__11472__auto__;
return (new cljs.core.match$macros.FailNode(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__64),null));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__64){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match$macros.FailNode(G__64,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match$macros.FailNode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cljs.core.match$macros.FailNode.cljs$lang$type = true);

(cljs.core.match$macros.FailNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/FailNode",null,(1),null));
}));

(cljs.core.match$macros.FailNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match$macros/FailNode");
}));

/**
 * Positional factory function for cljs.core.match$macros/FailNode.
 */
cljs.core.match$macros.__GT_FailNode = (function cljs$core$match$macros$__GT_FailNode(){
return (new cljs.core.match$macros.FailNode(null,null,null));
});

/**
 * Factory function for cljs.core.match$macros/FailNode, taking a map of keywords to field values.
 */
cljs.core.match$macros.map__GT_FailNode = (function cljs$core$match$macros$map__GT_FailNode(G__68){
var extmap__11545__auto__ = (function (){var G__77 = cljs.core.dissoc.call(null,G__68);
if(cljs.core.record_QMARK_.call(null,G__68)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__77);
} else {
return G__77;
}
})();
return (new cljs.core.match$macros.FailNode(null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match$macros.fail_node = (function cljs$core$match$macros$fail_node(){
return (new cljs.core.match$macros.FailNode(null,null,null));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.BindNode = (function (bindings,node,__meta,__extmap,__hash){
this.bindings = bindings;
this.node = node;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.BindNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k80,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__84 = k80;
var G__84__$1 = (((G__84 instanceof cljs.core.Keyword))?G__84.fqn:null);
switch (G__84__$1) {
case "bindings":
return self__.bindings;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k80,else__11461__auto__);

}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.BindNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,self__.bindings))),null,(1),null)),(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj.call(null,self__.node),null,(1),null))));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__85){
var vec__86 = p__85;
var k__11487__auto__ = cljs.core.nth.call(null,vec__86,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__86,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match$macros.BindNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",(581201198)),self__.node],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__79){
var self__ = this;
var G__79__$1 = this;
return (new cljs.core.RecordIter((0),G__79__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),new cljs.core.Keyword(null,"node","node",(581201198))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((1867327000) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this81,other82){
var self__ = this;
var this81__$1 = this;
return (((!((other82 == null)))) && ((this81__$1.constructor === other82.constructor)) && (cljs.core._EQ_.call(null,this81__$1.bindings,other82.bindings)) && (cljs.core._EQ_.call(null,this81__$1.node,other82.node)) && (cljs.core._EQ_.call(null,this81__$1.__extmap,other82.__extmap)));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),null,new cljs.core.Keyword(null,"node","node",(581201198)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__79){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__89 = cljs.core.keyword_identical_QMARK_;
var expr__90 = k__11472__auto__;
if(cljs.core.truth_(pred__89.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),expr__90))){
return (new cljs.core.match$macros.BindNode(G__79,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__89.call(null,new cljs.core.Keyword(null,"node","node",(581201198)),expr__90))){
return (new cljs.core.match$macros.BindNode(self__.bindings,G__79,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__79),null));
}
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",(581201198)),self__.node,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__79){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,G__79,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match$macros.BindNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null);
}));

(cljs.core.match$macros.BindNode.cljs$lang$type = true);

(cljs.core.match$macros.BindNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/BindNode",null,(1),null));
}));

(cljs.core.match$macros.BindNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match$macros/BindNode");
}));

/**
 * Positional factory function for cljs.core.match$macros/BindNode.
 */
cljs.core.match$macros.__GT_BindNode = (function cljs$core$match$macros$__GT_BindNode(bindings,node){
return (new cljs.core.match$macros.BindNode(bindings,node,null,null,null));
});

/**
 * Factory function for cljs.core.match$macros/BindNode, taking a map of keywords to field values.
 */
cljs.core.match$macros.map__GT_BindNode = (function cljs$core$match$macros$map__GT_BindNode(G__83){
var extmap__11545__auto__ = (function (){var G__92 = cljs.core.dissoc.call(null,G__83,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),new cljs.core.Keyword(null,"node","node",(581201198)));
if(cljs.core.record_QMARK_.call(null,G__83)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__92);
} else {
return G__92;
}
})();
return (new cljs.core.match$macros.BindNode(new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(G__83),new cljs.core.Keyword(null,"node","node",(581201198)).cljs$core$IFn$_invoke$arity$1(G__83),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match$macros.bind_node = (function cljs$core$match$macros$bind_node(bindings,node){
return (new cljs.core.match$macros.BindNode(bindings,node,null,null,null));
});
cljs.core.match$macros.dag_clause_to_clj = (function cljs$core$match$macros$dag_clause_to_clj(occurrence,pattern,action){
var test = (((((!((pattern == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pattern.cljs$core$match$protocols$IPatternCompile$))))?true:(((!pattern.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.IPatternCompile,pattern):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.IPatternCompile,pattern)))?cljs.core.match.protocols.to_source_STAR_.call(null,pattern,occurrence):cljs.core.match$macros.to_source.call(null,pattern,occurrence));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.core.match.protocols.n_to_clj.call(null,action)], null);
});
cljs.core.match$macros.catch_error = (function cljs$core$match$macros$catch_error(var_args){
var args__12669__auto__ = [];
var len__12666__auto___96 = arguments.length;
var i__12667__auto___97 = (0);
while(true){
if((i__12667__auto___97 < len__12666__auto___96)){
args__12669__auto__.push((arguments[i__12667__auto___97]));

var G__98 = (i__12667__auto___97 + (1));
i__12667__auto___97 = G__98;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((0) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((0)),(0),null)):null);
return cljs.core.match$macros.catch_error.cljs$core$IFn$_invoke$arity$variadic(argseq__12670__auto__);
});

(cljs.core.match$macros.catch_error.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var err_sym = new cljs.core.Symbol("js","Error","js/Error",(-1692659266),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null),null,(1),null)),(new cljs.core.List(null,err_sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__1__auto__","e__1__auto__",(996064048),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__1__auto__","e__1__auto__",(996064048),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.backtrack_sym.call(null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),body)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__1__auto__","e__1__auto__",(996064048),null),null,(1),null)))),null,(1),null)))),null,(1),null))));
}));

(cljs.core.match$macros.catch_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match$macros.catch_error.cljs$lang$applyTo = (function (seq95){
var self__12659__auto__ = this;
return self__12659__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq95));
}));


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.INodeCompile}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.SwitchNode = (function (occurrence,cases,default$,__meta,__extmap,__hash){
this.occurrence = occurrence;
this.cases = cases;
this.default$ = default$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k100,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__104 = k100;
var G__104__$1 = (((G__104 instanceof cljs.core.Keyword))?G__104.fqn:null);
switch (G__104__$1) {
case "occurrence":
return self__.occurrence;

break;
case "cases":
return self__.cases;

break;
case "default":
return self__.default$;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k100,else__11461__auto__);

}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var clauses = cljs.core.doall.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.match$macros.dag_clause_to_clj,self__.occurrence),self__.cases));
var bind_expr = new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,self__.occurrence));
var cond_expr = (cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)?cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),clauses)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null,(1),null)),(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$),null,(1),null)))))):cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),clauses)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.backtrack_expr.call(null),null,(1),null)))))));
if(cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)){
if(cljs.core.truth_(bind_expr)){
return cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null))))),null,(1),null)))),(new cljs.core.List(null,cond_expr,null,(1),null))));
} else {
return cond_expr;
}
} else {
if(cljs.core.truth_(bind_expr)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",(-1273693247),null),null,(1),null)),(new cljs.core.List(null,cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null))))),null,(1),null)))),(new cljs.core.List(null,cond_expr,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.catch_error.call(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$)),null,(1),null))));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",(-1273693247),null),null,(1),null)),(new cljs.core.List(null,cond_expr,null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.catch_error.call(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$)),null,(1),null))));
}
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__105){
var vec__106 = p__105;
var k__11487__auto__ = cljs.core.nth.call(null,vec__106,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__106,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match$macros.SwitchNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),self__.occurrence],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cases","cases",(253862775)),self__.cases],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",(-1987822328)),self__.default$],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__99){
var self__ = this;
var G__99__$1 = this;
return (new cljs.core.RecordIter((0),G__99__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),new cljs.core.Keyword(null,"cases","cases",(253862775)),new cljs.core.Keyword(null,"default","default",(-1987822328))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((-1224609716) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this101,other102){
var self__ = this;
var this101__$1 = this;
return (((!((other102 == null)))) && ((this101__$1.constructor === other102.constructor)) && (cljs.core._EQ_.call(null,this101__$1.occurrence,other102.occurrence)) && (cljs.core._EQ_.call(null,this101__$1.cases,other102.cases)) && (cljs.core._EQ_.call(null,this101__$1.default,other102.default)) && (cljs.core._EQ_.call(null,this101__$1.__extmap,other102.__extmap)));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),null,new cljs.core.Keyword(null,"cases","cases",(253862775)),null,new cljs.core.Keyword(null,"default","default",(-1987822328)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__99){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__109 = cljs.core.keyword_identical_QMARK_;
var expr__110 = k__11472__auto__;
if(cljs.core.truth_(pred__109.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),expr__110))){
return (new cljs.core.match$macros.SwitchNode(G__99,self__.cases,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__109.call(null,new cljs.core.Keyword(null,"cases","cases",(253862775)),expr__110))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,G__99,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__109.call(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),expr__110))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,G__99,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__99),null));
}
}
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),self__.occurrence,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cases","cases",(253862775)),self__.cases,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",(-1987822328)),self__.default$,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__99){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,G__99,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match$macros.SwitchNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",(-90277627),null),new cljs.core.Symbol(null,"cases","cases",(1894394302),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null);
}));

(cljs.core.match$macros.SwitchNode.cljs$lang$type = true);

(cljs.core.match$macros.SwitchNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/SwitchNode",null,(1),null));
}));

(cljs.core.match$macros.SwitchNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match$macros/SwitchNode");
}));

/**
 * Positional factory function for cljs.core.match$macros/SwitchNode.
 */
cljs.core.match$macros.__GT_SwitchNode = (function cljs$core$match$macros$__GT_SwitchNode(occurrence,cases,default$){
return (new cljs.core.match$macros.SwitchNode(occurrence,cases,default$,null,null,null));
});

/**
 * Factory function for cljs.core.match$macros/SwitchNode, taking a map of keywords to field values.
 */
cljs.core.match$macros.map__GT_SwitchNode = (function cljs$core$match$macros$map__GT_SwitchNode(G__103){
var extmap__11545__auto__ = (function (){var G__112 = cljs.core.dissoc.call(null,G__103,new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),new cljs.core.Keyword(null,"cases","cases",(253862775)),new cljs.core.Keyword(null,"default","default",(-1987822328)));
if(cljs.core.record_QMARK_.call(null,G__103)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__112);
} else {
return G__112;
}
})();
return (new cljs.core.match$macros.SwitchNode(new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)).cljs$core$IFn$_invoke$arity$1(G__103),new cljs.core.Keyword(null,"cases","cases",(253862775)).cljs$core$IFn$_invoke$arity$1(G__103),new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(G__103),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match$macros.switch_node = (function cljs$core$match$macros$switch_node(occurrence,cases,default$){
if(cljs.core.sequential_QMARK_.call(null,cases)){
} else {
throw (new Error("Assert failed: (sequential? cases)"));
}

return (new cljs.core.match$macros.SwitchNode(occurrence,cases,default$,null,null,null));
});
cljs.core.match$macros.first_column_QMARK_ = (function cljs$core$match$macros$first_column_QMARK_(i){
return (i === (0));
});
cljs.core.match$macros.empty_row_QMARK_ = (function cljs$core$match$macros$empty_row_QMARK_(row){
var ps = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(row);
return (((!((ps == null)))) && (cljs.core.empty_QMARK_.call(null,ps)));
});
cljs.core.match$macros.score_column = (function cljs$core$match$macros$score_column(i,col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.reduce.call(null,cljs.core._PLUS_,(0),col)], null);
});
cljs.core.match$macros.width = (function cljs$core$match$macros$width(p__114){
var map__115 = p__114;
var map__115__$1 = (((((!((map__115 == null))))?(((((map__115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__115):map__115);
var rows = cljs.core.get.call(null,map__115__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
if((!(cljs.core.empty_QMARK_.call(null,rows)))){
return cljs.core.count.call(null,rows.call(null,(0)));
} else {
return (0);
}
});
cljs.core.match$macros.height = (function cljs$core$match$macros$height(p__117){
var map__118 = p__117;
var map__118__$1 = (((((!((map__118 == null))))?(((((map__118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__118):map__118);
var rows = cljs.core.get.call(null,map__118__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.count.call(null,rows);
});
cljs.core.match$macros.dim = (function cljs$core$match$macros$dim(pm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.width.call(null,pm),cljs.core.match$macros.height.call(null,pm)], null);
});
cljs.core.match$macros.empty_matrix_QMARK_ = (function cljs$core$match$macros$empty_matrix_QMARK_(pm){
return cljs.core._EQ_.call(null,cljs.core.match$macros.dim.call(null,pm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
cljs.core.match$macros.column = (function cljs$core$match$macros$column(p__120,i){
var map__121 = p__120;
var map__121__$1 = (((((!((map__121 == null))))?(((((map__121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__121):map__121);
var rows = cljs.core.get.call(null,map__121__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__2_SHARP_){
return cljs.core.nth.call(null,p1__2_SHARP_,i);
}),rows));
});
cljs.core.match$macros.row = (function cljs$core$match$macros$row(p__123,j){
var map__124 = p__123;
var map__124__$1 = (((((!((map__124 == null))))?(((((map__124.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__124.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__124):map__124);
var rows = cljs.core.get.call(null,map__124__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.nth.call(null,rows,j);
});
cljs.core.match$macros.rows = (function cljs$core$match$macros$rows(p__126){
var map__127 = p__126;
var map__127__$1 = (((((!((map__127 == null))))?(((((map__127.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__127.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__127):map__127);
var rows = cljs.core.get.call(null,map__127__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return rows;
});
cljs.core.match$macros.pattern_at = (function cljs$core$match$macros$pattern_at(p__129,i,j){
var map__130 = p__129;
var map__130__$1 = (((((!((map__130 == null))))?(((((map__130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__130):map__130);
var rows = cljs.core.get.call(null,map__130__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return rows.call(null,j).call(null,i);
});
cljs.core.match$macros.action_for_row = (function cljs$core$match$macros$action_for_row(p__132,j){
var map__133 = p__132;
var map__133__$1 = (((((!((map__133 == null))))?(((((map__133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__133):map__133);
var rows = cljs.core.get.call(null,map__133__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(rows.call(null,j));
});
cljs.core.match$macros.occurrences = (function cljs$core$match$macros$occurrences(pm){
return new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)).cljs$core$IFn$_invoke$arity$1(pm);
});
cljs.core.match$macros.row_bindings = (function cljs$core$match$macros$row_bindings(f,ocrs){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(f),cljs.core.map.call(null,(function (p__135){
var vec__136 = p__135;
var p = cljs.core.nth.call(null,vec__136,(0),null);
var ocr = cljs.core.nth.call(null,vec__136,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(p),cljs.core.match$macros.leaf_bind_expr.call(null,ocr)], null);
}),cljs.core.filter.call(null,(function (p__139){
var vec__140 = p__139;
var p = cljs.core.nth.call(null,vec__140,(0),null);
var ocr = cljs.core.nth.call(null,vec__140,(1),null);
return cljs.core.match$macros.named_wildcard_pattern_QMARK_.call(null,p);
}),cljs.core.map.call(null,cljs.core.vector,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(f),ocrs))));
});
cljs.core.match$macros.existential_pattern_QMARK_ = (function cljs$core$match$macros$existential_pattern_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$match$protocols$IExistentialPattern$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.core.match$macros.wildcard_or_existential_QMARK_ = (function cljs$core$match$macros$wildcard_or_existential_QMARK_(x){
var or__10116__auto__ = cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,x);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return cljs.core.match$macros.existential_pattern_QMARK_.call(null,x);
}
});
cljs.core.match$macros.constructors_above_QMARK_ = (function cljs$core$match$macros$constructors_above_QMARK_(pm,i,j){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.match$macros.wildcard_or_existential_QMARK_),cljs.core.take.call(null,j,cljs.core.match$macros.column.call(null,pm,i)));
});
cljs.core.match$macros.pattern_score = (function cljs$core$match$macros$pattern_score(pm,i,j){
var p = cljs.core.match$macros.pattern_at.call(null,pm,i,j);
if(cljs.core.truth_((function (){var or__10116__auto__ = cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return (!(cljs.core.match$macros.constructors_above_QMARK_.call(null,pm,i,j)));
}
})())){
return (0);
} else {
if(cljs.core.match$macros.existential_pattern_QMARK_.call(null,p)){
return (1);
} else {
return (2);

}
}
});
cljs.core.match$macros.useful_matrix = (function cljs$core$match$macros$useful_matrix(pm){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,cljs.core.match$macros.width.call(null,pm),(function (){var iter__11965__auto__ = (function cljs$core$match$macros$useful_matrix_$_iter__144(s__145){
return (new cljs.core.LazySeq(null,(function (){
var s__145__$1 = s__145;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__145__$1);
if(temp__9522__auto__){
var xs__9484__auto__ = temp__9522__auto__;
var j = cljs.core.first.call(null,xs__9484__auto__);
var iterys__11953__auto__ = ((function (s__145__$1,j,xs__9484__auto__,temp__9522__auto__){
return (function cljs$core$match$macros$useful_matrix_$_iter__144_$_iter__146(s__147){
return (new cljs.core.LazySeq(null,((function (s__145__$1,j,xs__9484__auto__,temp__9522__auto__){
return (function (){
var s__147__$1 = s__147;
while(true){
var temp__9522__auto____$1 = cljs.core.seq.call(null,s__147__$1);
if(temp__9522__auto____$1){
var s__147__$2 = temp__9522__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__147__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__147__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__149 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__148 = (0);
while(true){
if((i__148 < size__11964__auto__)){
var i = cljs.core._nth.call(null,c__11961__auto__,i__148);
cljs.core.chunk_append.call(null,b__149,cljs.core.match$macros.pattern_score.call(null,pm,i,j));

var G__150 = (i__148 + (1));
i__148 = G__150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__149),cljs$core$match$macros$useful_matrix_$_iter__144_$_iter__146.call(null,cljs.core.chunk_rest.call(null,s__147__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__149),null);
}
} else {
var i = cljs.core.first.call(null,s__147__$2);
return cljs.core.cons.call(null,cljs.core.match$macros.pattern_score.call(null,pm,i,j),cljs$core$match$macros$useful_matrix_$_iter__144_$_iter__146.call(null,cljs.core.rest.call(null,s__147__$2)));
}
} else {
return null;
}
break;
}
});})(s__145__$1,j,xs__9484__auto__,temp__9522__auto__))
,null,null));
});})(s__145__$1,j,xs__9484__auto__,temp__9522__auto__))
;
var fs__11954__auto__ = cljs.core.seq.call(null,iterys__11953__auto__.call(null,cljs.core.range.call(null,cljs.core.match$macros.width.call(null,pm))));
if(fs__11954__auto__){
return cljs.core.concat.call(null,fs__11954__auto__,cljs$core$match$macros$useful_matrix_$_iter__144.call(null,cljs.core.rest.call(null,s__145__$1)));
} else {
var G__151 = cljs.core.rest.call(null,s__145__$1);
s__145__$1 = G__151;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,cljs.core.range.call(null,cljs.core.match$macros.height.call(null,pm)));
})())));
});
cljs.core.match$macros.necessary_column = (function cljs$core$match$macros$necessary_column(pm){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__152,p__153){
var vec__154 = p__152;
var col = cljs.core.nth.call(null,vec__154,(0),null);
var score = cljs.core.nth.call(null,vec__154,(1),null);
var curr = vec__154;
var vec__157 = p__153;
var ocol = cljs.core.nth.call(null,vec__157,(0),null);
var oscore = cljs.core.nth.call(null,vec__157,(1),null);
var cand = vec__157;
if((oscore > score)){
return cand;
} else {
return curr;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.map_indexed.call(null,cljs.core.match$macros.score_column,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.match$macros.useful_matrix.call(null,pm)))));
});
cljs.core.match$macros.select = (function cljs$core$match$macros$select(pm){
return cljs.core.match.protocols.swap.call(null,pm,cljs.core.match$macros.necessary_column.call(null,pm));
});
cljs.core.match$macros.specialize = (function cljs$core$match$macros$specialize(var_args){
var G__161 = arguments.length;
switch (G__161) {
case (1):
return cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$1 = (function (matrix){
return cljs.core.match$macros.specialize.call(null,matrix,cljs.core.ffirst.call(null,cljs.core.match$macros.rows.call(null,matrix)));
}));

(cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2 = (function (matrix,p){
if((((!((p == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.cljs$core$match$protocols$ISpecializeMatrix$))))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.ISpecializeMatrix,p):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.ISpecializeMatrix,p))){
return cljs.core.match.protocols.specialize_matrix.call(null,p,matrix);
} else {
return cljs.core.match$macros.default_specialize_matrix.call(null,p,matrix);
}
}));

(cljs.core.match$macros.specialize.cljs$lang$maxFixedArity = (2));

cljs.core.match$macros.pseudo_pattern_QMARK_ = (function cljs$core$match$macros$pseudo_pattern_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$match$protocols$IPseudoPattern$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.core.match$macros.pseudo_patterns = (function cljs$core$match$macros$pseudo_patterns(matrix,i){
return cljs.core.filter.call(null,cljs.core.match$macros.pseudo_pattern_QMARK_,cljs.core.match$macros.column.call(null,matrix,i));
});
cljs.core.match$macros.column_splitter = (function cljs$core$match$macros$column_splitter(col){
var f = cljs.core.first.call(null,col);
var vec__165 = cljs.core.split_with.call(null,(function (p1__3_SHARP_){
return cljs.core.match$macros.groupable_QMARK_.call(null,f,p1__3_SHARP_);
}),cljs.core.rest.call(null,col));
var top = cljs.core.nth.call(null,vec__165,(0),null);
var bottom = cljs.core.nth.call(null,vec__165,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons.call(null,f,top),bottom], null);
});

cljs.core.match$macros.return_split = (function cljs$core$match$macros$return_split(S,D){
if(cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)){
if(((cljs.core.match$macros.empty_matrix_QMARK_.call(null,D)) && (cljs.core.seq.call(null,cljs.core.match$macros._STAR_backtrack_stack_STAR_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,cljs.core.peek.call(null,cljs.core.match$macros._STAR_backtrack_stack_STAR_),cljs.core.match$macros._STAR_backtrack_stack_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D,cljs.core.conj.call(null,cljs.core.match$macros._STAR_backtrack_stack_STAR_,D)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D], null);
}
});
cljs.core.match$macros.matrix_splitter = (function cljs$core$match$macros$matrix_splitter(matrix){
var rows = cljs.core.match$macros.rows.call(null,matrix);
var n = cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.match$macros.column_splitter.call(null,cljs.core.map.call(null,cljs.core.first,rows))));
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var S = cljs.core.match$macros.pattern_matrix.call(null,cljs.core.take.call(null,n,rows),ocrs);
var D = cljs.core.match$macros.pattern_matrix.call(null,cljs.core.drop.call(null,n,rows),ocrs);
return cljs.core.match$macros.return_split.call(null,S,D);
});
cljs.core.match$macros.group_rows = (function cljs$core$match$macros$group_rows(cs,rows){
return cljs.core.reduce.call(null,(function (res,row){
var vec__168 = cljs.core.peek.call(null,res);
var c = cljs.core.nth.call(null,vec__168,(0),null);
var rows__$1 = cljs.core.nth.call(null,vec__168,(1),null);
var c_SINGLEQUOTE_ = cljs.core.first.call(null,row);
if(cljs.core.truth_(cljs.core.match$macros.groupable_QMARK_.call(null,c,c_SINGLEQUOTE_))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,res),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.conj.call(null,rows__$1,row)], null));
} else {
return cljs.core.conj.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rows)], null)], null)], null),cljs.core.rest.call(null,rows));
});
cljs.core.match$macros.non_local_literal_pattern_QMARK_ = (function cljs$core$match$macros$non_local_literal_pattern_QMARK_(p){
var and__10091__auto__ = cljs.core.match$macros.literal_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(and__10091__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"local","local",(-1497766724)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__10091__auto__;
}
});
cljs.core.match$macros.literal_case_matrix_splitter = (function cljs$core$match$macros$literal_case_matrix_splitter(matrix){
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var rows = cljs.core.match$macros.rows.call(null,matrix);
var lrows = (function (){var rows__$1 = cljs.core.seq.call(null,rows);
var res = cljs.core.PersistentVector.EMPTY;
var lits = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(rows__$1){
var vec__174 = cljs.core.first.call(null,rows__$1);
var p = cljs.core.nth.call(null,vec__174,(0),null);
var row = vec__174;
if(cljs.core.truth_((function (){var and__10091__auto__ = cljs.core.match$macros.non_local_literal_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(and__10091__auto__)){
return (!(cljs.core.contains_QMARK_.call(null,lits,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__10091__auto__;
}
})())){
var G__181 = cljs.core.next.call(null,rows__$1);
var G__182 = cljs.core.conj.call(null,res,row);
var G__183 = (cljs.core.truth_(cljs.core.match$macros.non_local_literal_pattern_QMARK_.call(null,p))?cljs.core.conj.call(null,lits,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p)):lits);
rows__$1 = G__181;
res = G__182;
lits = G__183;
continue;
} else {
return res;
}
} else {
return res;
}
break;
}
})();
var S = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__177){
var vec__178 = p__177;
var c = cljs.core.nth.call(null,vec__178,(0),null);
var rows__$1 = cljs.core.nth.call(null,vec__178,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match$macros.pattern_matrix.call(null,rows__$1,ocrs)], null);
}),cljs.core.match$macros.group_rows.call(null,cljs.core.map.call(null,cljs.core.first,lrows),lrows)));
var D = cljs.core.match$macros.pattern_matrix.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,lrows),rows),ocrs);
return cljs.core.match$macros.return_split.call(null,S,D);
});
cljs.core.match$macros.default_case = (function cljs$core$match$macros$default_case(matrix){
if((!(cljs.core.match$macros.empty_matrix_QMARK_.call(null,matrix)))){
return cljs.core.match$macros.compile.call(null,matrix);
} else {
return cljs.core.match$macros.fail_node.call(null);
}
});
cljs.core.match$macros.cases = (function cljs$core$match$macros$cases(matrix){
if(cljs.core.vector_QMARK_.call(null,matrix)){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__184){
var vec__185 = p__184;
var c = cljs.core.nth.call(null,vec__185,(0),null);
var m = cljs.core.nth.call(null,vec__185,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match$macros.compile.call(null,cljs.core.match$macros.specialize.call(null,m,c))], null);
}),matrix));
} else {
var rows = cljs.core.match$macros.rows.call(null,matrix);
var c = cljs.core.ffirst.call(null,rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match$macros.compile.call(null,cljs.core.match$macros.specialize.call(null,matrix,c))], null)], null);
}
});
cljs.core.match$macros.expression_QMARK_ = (function cljs$core$match$macros$expression_QMARK_(ocr){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)));
});
cljs.core.match$macros.bind_variables = (function cljs$core$match$macros$bind_variables(ocrs){
return cljs.core.mapcat.call(null,(function (ocr){
var bind_expr = cljs.core.get.call(null,cljs.core.meta.call(null,ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)));
if(cljs.core.not_EQ_.call(null,bind_expr,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,bind_expr], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,ocr], null);
}
}),ocrs);
});
cljs.core.match$macros.root_bind_node = (function cljs$core$match$macros$root_bind_node(matrix){
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var node = cljs.core.match$macros.compile.call(null,matrix);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.match$macros.expression_QMARK_,ocrs))){
return cljs.core.match$macros.bind_node.call(null,cljs.core.match$macros.bind_variables.call(null,ocrs),node);
} else {
return node;
}
});
/**
 * Case 1: If there are no pattern rows to match, then matching always fails
 */
cljs.core.match$macros.empty_rows_case = (function cljs$core$match$macros$empty_rows_case(){
return cljs.core.match$macros.fail_node.call(null);
});
/**
 * Case 2: If the first row is empty then matching always succeeds 
 *   and yields the first action.
 */
cljs.core.match$macros.first_row_empty_case = (function cljs$core$match$macros$first_row_empty_case(rows,ocr){
var f = cljs.core.first.call(null,rows);
var a = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(f);
var bs = new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.match$macros.leaf_node.call(null,a,bs);
});
/**
 * Case 2: If the first row is constituted by wildcards then matching
 *   matching always succeeds and yields the first action.
 */
cljs.core.match$macros.first_row_wildcards_case = (function cljs$core$match$macros$first_row_wildcards_case(rows,ocrs){
var f = cljs.core.first.call(null,rows);
var a = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(f);
var bs = cljs.core.match$macros.row_bindings.call(null,f,ocrs);
return cljs.core.match$macros.leaf_node.call(null,a,bs);
});
cljs.core.match$macros.expand_matrix = (function cljs$core$match$macros$expand_matrix(matrix,col){
var matrix__$1 = matrix;
while(true){
var p = cljs.core.first.call(null,cljs.core.match$macros.column.call(null,matrix__$1,col));
if(cljs.core.match$macros.pseudo_pattern_QMARK_.call(null,p)){
var G__188 = cljs.core.match$macros.specialize.call(null,matrix__$1,p);
matrix__$1 = G__188;
continue;
} else {
return matrix__$1;
}
break;
}
});
cljs.core.match$macros.split_matrix = (function cljs$core$match$macros$split_matrix(matrix){
return cljs.core.match$macros.matrix_splitter.call(null,matrix);
});
/**
 * Case 3a: The first column is chosen. Compute and return a
 *   switch/bind node with a default matrix case
 */
cljs.core.match$macros.first_column_chosen_case = (function cljs$core$match$macros$first_column_chosen_case(matrix,col,ocrs){
var expanded = cljs.core.match$macros.expand_matrix.call(null,matrix,col);
var ocrs__$1 = cljs.core.match$macros.occurrences.call(null,expanded);
var vec__189 = cljs.core.match$macros.split_matrix.call(null,expanded);
var S = cljs.core.nth.call(null,vec__189,(0),null);
var D = cljs.core.nth.call(null,vec__189,(1),null);
var split = vec__189;
if(cljs.core.not.call(null,cljs.core.match$macros._STAR_recur_present_STAR_)){
return cljs.core.match$macros.switch_node.call(null,ocrs__$1.call(null,col),cljs.core.match$macros.cases.call(null,S),cljs.core.match$macros.default_case.call(null,D));
} else {
var new_stack = cljs.core.last.call(null,split);
return cljs.core.match$macros.switch_node.call(null,ocrs__$1.call(null,col),(((!((cljs.core.match$macros._STAR_backtrack_stack_STAR_ === new_stack))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__192 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__193 = new_stack;
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__193);

try{return cljs.core.match$macros.cases.call(null,S);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__192);
}})():cljs.core.match$macros.cases.call(null,S)),((((cljs.core.seq.call(null,cljs.core.match$macros._STAR_backtrack_stack_STAR_)) && ((cljs.core.peek.call(null,cljs.core.match$macros._STAR_backtrack_stack_STAR_) === D))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__194 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__195 = cljs.core.pop.call(null,cljs.core.match$macros._STAR_backtrack_stack_STAR_);
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__195);

try{return cljs.core.match$macros.default_case.call(null,D);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__194);
}})():cljs.core.match$macros.default_case.call(null,D)));
}
});
/**
 * Case 3b: A column other than the first is chosen. Swap column 
 * col with the first column and compile the result
 */
cljs.core.match$macros.other_column_chosen_case = (function cljs$core$match$macros$other_column_chosen_case(matrix,col){
return cljs.core.match$macros.compile.call(null,cljs.core.match.protocols.swap.call(null,matrix,col));
});
cljs.core.match$macros.choose_column = (function cljs$core$match$macros$choose_column(matrix){
return cljs.core.match$macros.necessary_column.call(null,matrix);
});
cljs.core.match$macros.compile = (function cljs$core$match$macros$compile(p__196){
var map__197 = p__196;
var map__197__$1 = (((((!((map__197 == null))))?(((((map__197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__197):map__197);
var pm = map__197__$1;
var rows = cljs.core.get.call(null,map__197__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
var ocrs = cljs.core.get.call(null,map__197__$1,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)));
if(cljs.core.truth_(cljs.core.match$macros._STAR_root_STAR_)){
var _STAR_root_STAR__orig_val__199 = cljs.core.match$macros._STAR_root_STAR_;
var _STAR_root_STAR__temp_val__200 = false;
(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__temp_val__200);

try{return cljs.core.match$macros.root_bind_node.call(null,pm);
}finally {(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__orig_val__199);
}} else {
if(cljs.core.empty_QMARK_.call(null,rows)){
return cljs.core.match$macros.empty_rows_case.call(null);
} else {
if(cljs.core.match$macros.empty_row_QMARK_.call(null,cljs.core.first.call(null,rows))){
return cljs.core.match$macros.first_row_empty_case.call(null,rows,cljs.core.first.call(null,ocrs));
} else {
if(cljs.core.match$macros.all_wildcards_QMARK_.call(null,cljs.core.first.call(null,rows))){
return cljs.core.match$macros.first_row_wildcards_case.call(null,rows,ocrs);
} else {
var col = cljs.core.match$macros.choose_column.call(null,pm);
if(cljs.core.match$macros.first_column_QMARK_.call(null,col)){
return cljs.core.match$macros.first_column_chosen_case.call(null,pm,col,ocrs);
} else {
return cljs.core.match$macros.other_column_chosen_case.call(null,pm,col);
}

}
}
}
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.match.protocols.IVecMod}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.PatternMatrix = (function (rows,ocrs,__meta,__extmap,__hash){
this.rows = rows;
this.ocrs = ocrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k202,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__206 = k202;
var G__206__$1 = (((G__206 instanceof cljs.core.Keyword))?G__206.fqn:null);
switch (G__206__$1) {
case "rows":
return self__.rows;

break;
case "ocrs":
return self__.ocrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k202,else__11461__auto__);

}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__207){
var vec__208 = p__207;
var k__11487__auto__ = cljs.core.nth.call(null,vec__208,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__208,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match$macros.PatternMatrix{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",(850049680)),self__.rows],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),self__.ocrs],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__201){
var self__ = this;
var G__201__$1 = this;
return (new cljs.core.RecordIter((0),G__201__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",(850049680)),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((1082442510) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this203,other204){
var self__ = this;
var this203__$1 = this;
return (((!((other204 == null)))) && ((this203__$1.constructor === other204.constructor)) && (cljs.core._EQ_.call(null,this203__$1.rows,other204.rows)) && (cljs.core._EQ_.call(null,this203__$1.ocrs,other204.ocrs)) && (cljs.core._EQ_.call(null,this203__$1.__extmap,other204.__extmap)));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__4_SHARP_){
return cljs.core.match.protocols.drop_nth.call(null,p1__4_SHARP_,i);
}),self__.rows));
return (new cljs.core.match$macros.PatternMatrix(nrows,self__.ocrs,null,null,null));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__5_SHARP_){
return cljs.core.match.protocols.swap.call(null,p1__5_SHARP_,idx);
}),self__.rows));
return (new cljs.core.match$macros.PatternMatrix(nrows,cljs.core.match.protocols.swap.call(null,self__.ocrs,idx),null,null,null));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",(850049680)),null,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__201){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__211 = cljs.core.keyword_identical_QMARK_;
var expr__212 = k__11472__auto__;
if(cljs.core.truth_(pred__211.call(null,new cljs.core.Keyword(null,"rows","rows",(850049680)),expr__212))){
return (new cljs.core.match$macros.PatternMatrix(G__201,self__.ocrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__211.call(null,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),expr__212))){
return (new cljs.core.match$macros.PatternMatrix(self__.rows,G__201,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__201),null));
}
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",(850049680)),self__.rows,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),self__.ocrs,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__201){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,G__201,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match$macros.PatternMatrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null);
}));

(cljs.core.match$macros.PatternMatrix.cljs$lang$type = true);

(cljs.core.match$macros.PatternMatrix.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/PatternMatrix",null,(1),null));
}));

(cljs.core.match$macros.PatternMatrix.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match$macros/PatternMatrix");
}));

/**
 * Positional factory function for cljs.core.match$macros/PatternMatrix.
 */
cljs.core.match$macros.__GT_PatternMatrix = (function cljs$core$match$macros$__GT_PatternMatrix(rows,ocrs){
return (new cljs.core.match$macros.PatternMatrix(rows,ocrs,null,null,null));
});

/**
 * Factory function for cljs.core.match$macros/PatternMatrix, taking a map of keywords to field values.
 */
cljs.core.match$macros.map__GT_PatternMatrix = (function cljs$core$match$macros$map__GT_PatternMatrix(G__205){
var extmap__11545__auto__ = (function (){var G__214 = cljs.core.dissoc.call(null,G__205,new cljs.core.Keyword(null,"rows","rows",(850049680)),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)));
if(cljs.core.record_QMARK_.call(null,G__205)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__214);
} else {
return G__214;
}
})();
return (new cljs.core.match$macros.PatternMatrix(new cljs.core.Keyword(null,"rows","rows",(850049680)).cljs$core$IFn$_invoke$arity$1(G__205),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)).cljs$core$IFn$_invoke$arity$1(G__205),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match$macros.pattern_matrix = (function cljs$core$match$macros$pattern_matrix(rows,ocrs){
var rows__$1 = ((cljs.core.vector_QMARK_.call(null,rows))?rows:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,rows));
var ocrs__$1 = ((cljs.core.vector_QMARK_.call(null,ocrs))?ocrs:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,ocrs));
return (new cljs.core.match$macros.PatternMatrix(rows__$1,ocrs__$1,null,null,null));
});
cljs.core.match$macros.default_specialize_matrix = (function cljs$core$match$macros$default_specialize_matrix(p,matrix){
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__6_SHARP_){
return cljs.core.match$macros.drop_nth_bind.call(null,p1__6_SHARP_,(0),focr);
}),rows));
var nocrs = cljs.core.match.protocols.drop_nth.call(null,ocrs,(0));
return cljs.core.match$macros.pattern_matrix.call(null,nrows,nocrs);
});

/**
* @constructor
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.WildcardPattern = (function (sym,named,_meta){
this.sym = sym;
this.named = named;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.WildcardPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
if((other instanceof cljs.core.match$macros.WildcardPattern)){
if(cljs.core.truth_(self__.named)){
return cljs.core._EQ_.call(null,self__.sym,new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(other));
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"named","named",(-422393479)).cljs$core$IFn$_invoke$arity$1(other));
}
} else {
return false;
}
}));

(cljs.core.match$macros.WildcardPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.WildcardPattern(self__.sym,self__.named,new_meta));
}));

(cljs.core.match$macros.WildcardPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.WildcardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.WildcardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return true;
}));

(cljs.core.match$macros.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__216 = k;
var G__216__$1 = (((G__216 instanceof cljs.core.Keyword))?G__216.fqn:null);
switch (G__216__$1) {
case "sym":
return self__.sym;

break;
case "named":
return self__.named;

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.WildcardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"named","named",(1218138048),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.WildcardPattern.cljs$lang$type = true);

(cljs.core.match$macros.WildcardPattern.cljs$lang$ctorStr = "cljs.core.match$macros/WildcardPattern");

(cljs.core.match$macros.WildcardPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/WildcardPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/WildcardPattern.
 */
cljs.core.match$macros.__GT_WildcardPattern = (function cljs$core$match$macros$__GT_WildcardPattern(sym,named,_meta){
return (new cljs.core.match$macros.WildcardPattern(sym,named,_meta));
});

cljs.core.match$macros.wildcard_pattern = (function cljs$core$match$macros$wildcard_pattern(var_args){
var G__219 = arguments.length;
switch (G__219) {
case (0):
return cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match$macros.wildcard_pattern.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
}));

(cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$1 = (function (sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"_","_",(-1201019570),null))){
return (new cljs.core.match$macros.WildcardPattern(cljs.core.gensym.call(null),false,null));
} else {
return (new cljs.core.match$macros.WildcardPattern(sym,true,null));
}
}));

(cljs.core.match$macros.wildcard_pattern.cljs$lang$maxFixedArity = (1));

cljs.core.match$macros.wildcard_pattern_QMARK_ = (function cljs$core$match$macros$wildcard_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.WildcardPattern);
});
cljs.core.match$macros.named_wildcard_pattern_QMARK_ = (function cljs$core$match$macros$named_wildcard_pattern_QMARK_(x){
if((x instanceof cljs.core.match$macros.WildcardPattern)){
return new cljs.core.Keyword(null,"named","named",(-422393479)).cljs$core$IFn$_invoke$arity$1(x);
} else {
return false;
}
});

/**
* @constructor
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
*/
cljs.core.match$macros.LiteralPattern = (function (l,_meta){
this.l = l;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.LiteralPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
if((self__.l == null)){
return "nil";
} else {
return cljs.core.pr_str.call(null,self__.l);
}
}));

(cljs.core.match$macros.LiteralPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.LiteralPattern)) && (cljs.core._EQ_.call(null,self__.l,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.LiteralPattern(self__.l,new_meta));
}));

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__221 = k;
var G__221__$1 = (((G__221 instanceof cljs.core.Keyword))?G__221.fqn:null);
switch (G__221__$1) {
case "l":
return self__.l;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,self__.l,cljs.core.List.EMPTY)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",(1866613644),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));
} else {
if((((self__.l instanceof cljs.core.Symbol)) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"local","local",(-1497766724)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,self__.l)))))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",(1377916282),null),null,(1),null)),(new cljs.core.List(null,self__.l,null,(1),null)))),null,(1),null))));
} else {
if(((typeof self__.l === 'number') || (typeof self__.l === 'string') || (self__.l === true) || (self__.l === false) || ((self__.l == null)))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,self__.l,null,(1),null))));
} else {
if((self__.l instanceof cljs.core.Keyword)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",(1598491177),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,self__.l,null,(1),null))));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,self__.l,null,(1),null))));

}
}
}
}
}));

(cljs.core.match$macros.LiteralPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.LiteralPattern.cljs$lang$type = true);

(cljs.core.match$macros.LiteralPattern.cljs$lang$ctorStr = "cljs.core.match$macros/LiteralPattern");

(cljs.core.match$macros.LiteralPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/LiteralPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/LiteralPattern.
 */
cljs.core.match$macros.__GT_LiteralPattern = (function cljs$core$match$macros$__GT_LiteralPattern(l,_meta){
return (new cljs.core.match$macros.LiteralPattern(l,_meta));
});

cljs.core.match$macros.literal_pattern = (function cljs$core$match$macros$literal_pattern(l){
return (new cljs.core.match$macros.LiteralPattern(l,cljs.core.meta.call(null,l)));
});
cljs.core.match$macros.literal_pattern_QMARK_ = (function cljs$core$match$macros$literal_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.LiteralPattern);
});


cljs.core.match$macros.specialize_seq_pattern_rest_row = (function cljs$core$match$macros$specialize_seq_pattern_rest_row(focr,row){
var p = cljs.core.first.call(null,row);
var p__$1 = (cljs.core.truth_(cljs.core.match$macros.seq_pattern_QMARK_.call(null,p))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"s","s",(1705939918)).cljs$core$IFn$_invoke$arity$1(p))):cljs.core.match$macros.wildcard_pattern.call(null));
return cljs.core.match.protocols.prepend.call(null,cljs.core.match$macros.drop_nth_bind.call(null,row,(0),focr),p__$1);
});
cljs.core.match$macros.specialize_seq_pattern_rest_matrix = (function cljs$core$match$macros$specialize_seq_pattern_rest_matrix(rows,focr){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match$macros.specialize_seq_pattern_rest_row,focr),rows));
});
cljs.core.match$macros.seq_pattern_matrix_rest_ocrs = (function cljs$core$match$macros$seq_pattern_matrix_rest_ocrs(ocrs,focr){
return ocrs;
});
cljs.core.match$macros.specialize_seq_pattern_row = (function cljs$core$match$macros$specialize_seq_pattern_row(focr,row){
var p = cljs.core.first.call(null,row);
var vec__223 = (cljs.core.truth_(cljs.core.match$macros.seq_pattern_QMARK_.call(null,p))?(function (){var vec__226 = new cljs.core.Keyword(null,"s","s",(1705939918)).cljs$core$IFn$_invoke$arity$1(p);
var seq__227 = cljs.core.seq.call(null,vec__226);
var first__228 = cljs.core.first.call(null,seq__227);
var seq__227__$1 = cljs.core.next.call(null,seq__227);
var h = first__228;
var t = seq__227__$1;
var t__$1 = ((cljs.core.empty_QMARK_.call(null,t))?cljs.core.match$macros.literal_pattern.call(null,cljs.core.List.EMPTY):(cljs.core.truth_(cljs.core.match$macros.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,t)))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,t)):cljs.core.match$macros.seq_pattern.call(null,t)
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,t__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.call(null),cljs.core.match$macros.wildcard_pattern.call(null)], null));
var h = cljs.core.nth.call(null,vec__223,(0),null);
var t = cljs.core.nth.call(null,vec__223,(1),null);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind.call(null,row,(0),focr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,h], null));
});
cljs.core.match$macros.specialize_seq_pattern_matrix = (function cljs$core$match$macros$specialize_seq_pattern_matrix(rows,focr){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match$macros.specialize_seq_pattern_row,focr),rows));
});
cljs.core.match$macros.seq_pattern_matrix_ocrs = (function cljs$core$match$macros$seq_pattern_matrix_ocrs(ocrs,focr){
var seq_sym = (function (){var or__10116__auto__ = new cljs.core.Keyword(null,"seq-sym","seq-sym",(-525219406)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,focr));
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return focr;
}
})();
var sym_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),new cljs.core.Keyword(null,"seq","seq",(-1817803783)),new cljs.core.Keyword(null,"seq-sym","seq-sym",(-525219406)),focr], null);
var hsym = cljs.core.gensym.call(null,[cljs.core.name.call(null,seq_sym),"_head__"].join(''));
var hsym__$1 = cljs.core.with_meta.call(null,hsym,cljs.core.assoc.call(null,sym_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",(-752535972),null),null,(1),null)),(new cljs.core.List(null,focr,null,(1),null))))));
var tsym = cljs.core.gensym.call(null,[cljs.core.name.call(null,seq_sym),"_tail__"].join(''));
var tsym__$1 = cljs.core.with_meta.call(null,tsym,cljs.core.assoc.call(null,sym_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",(-285075455),null),null,(1),null)),(new cljs.core.List(null,focr,null,(1),null))))));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsym__$1,tsym__$1], null),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
});

/**
* @constructor
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match$macros.SeqPattern = (function (s,_meta){
this.s = s;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.SeqPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s);
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.SeqPattern(self__.s,new_meta));
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__229 = k;
var G__229__$1 = (((G__229 instanceof cljs.core.Keyword))?G__229.fqn:null);
switch (G__229__$1) {
case "s":
return self__.s;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if((((cljs.core.count.call(null,self__.s) >= (1))) && (cljs.core.not.call(null,cljs.core.match$macros.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,self__.s)))))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",(-1302056292),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",(-1649497689),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null))));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",(-1302056292),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null))));
}
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
if(cljs.core.not.call(null,cljs.core.match$macros.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,self__.s)))){
var nrows = cljs.core.match$macros.specialize_seq_pattern_matrix.call(null,rows,focr);
var nocrs = cljs.core.match$macros.seq_pattern_matrix_ocrs.call(null,ocrs,focr);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,nocrs);
} else {
var nrows = cljs.core.match$macros.specialize_seq_pattern_rest_matrix.call(null,rows,focr);
var nocrs = cljs.core.match$macros.seq_pattern_matrix_rest_ocrs.call(null,ocrs,focr);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,nocrs);
}
}));

(cljs.core.match$macros.SeqPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.SeqPattern.cljs$lang$type = true);

(cljs.core.match$macros.SeqPattern.cljs$lang$ctorStr = "cljs.core.match$macros/SeqPattern");

(cljs.core.match$macros.SeqPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/SeqPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/SeqPattern.
 */
cljs.core.match$macros.__GT_SeqPattern = (function cljs$core$match$macros$__GT_SeqPattern(s,_meta){
return (new cljs.core.match$macros.SeqPattern(s,_meta));
});

cljs.core.match$macros.seq_pattern = (function cljs$core$match$macros$seq_pattern(s){
if(cljs.core.sequential_QMARK_.call(null,s)){
} else {
throw (new Error("Assert failed: (sequential? s)"));
}

if((!(cljs.core.empty_QMARK_.call(null,s)))){
} else {
throw (new Error("Assert failed: (not (empty? s))"));
}

return (new cljs.core.match$macros.SeqPattern(s,null));
});
cljs.core.match$macros.seq_pattern_QMARK_ = (function cljs$core$match$macros$seq_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.SeqPattern);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.RestPattern = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k232,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__236 = k232;
var G__236__$1 = (((G__236 instanceof cljs.core.Keyword))?G__236.fqn:null);
switch (G__236__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k232,else__11461__auto__);

}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__237){
var vec__238 = p__237;
var k__11487__auto__ = cljs.core.nth.call(null,vec__238,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__238,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match$macros.RestPattern{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__231){
var self__ = this;
var G__231__$1 = this;
return (new cljs.core.RecordIter((0),G__231__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",(151049309))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((1478558536) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this233,other234){
var self__ = this;
var this233__$1 = this;
return (((!((other234 == null)))) && ((this233__$1.constructor === other234.constructor)) && (cljs.core._EQ_.call(null,this233__$1.p,other234.p)) && (cljs.core._EQ_.call(null,this233__$1.__extmap,other234.__extmap)));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",(151049309)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__231){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__241 = cljs.core.keyword_identical_QMARK_;
var expr__242 = k__11472__auto__;
if(cljs.core.truth_(pred__241.call(null,new cljs.core.Keyword(null,"p","p",(151049309)),expr__242))){
return (new cljs.core.match$macros.RestPattern(G__231,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__231),null));
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",(151049309)),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__231){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match$macros.RestPattern(self__.p,G__231,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match$macros.RestPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null);
}));

(cljs.core.match$macros.RestPattern.cljs$lang$type = true);

(cljs.core.match$macros.RestPattern.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/RestPattern",null,(1),null));
}));

(cljs.core.match$macros.RestPattern.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match$macros/RestPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/RestPattern.
 */
cljs.core.match$macros.__GT_RestPattern = (function cljs$core$match$macros$__GT_RestPattern(p){
return (new cljs.core.match$macros.RestPattern(p,null,null,null));
});

/**
 * Factory function for cljs.core.match$macros/RestPattern, taking a map of keywords to field values.
 */
cljs.core.match$macros.map__GT_RestPattern = (function cljs$core$match$macros$map__GT_RestPattern(G__235){
var extmap__11545__auto__ = (function (){var G__244 = cljs.core.dissoc.call(null,G__235,new cljs.core.Keyword(null,"p","p",(151049309)));
if(cljs.core.record_QMARK_.call(null,G__235)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__244);
} else {
return G__244;
}
})();
return (new cljs.core.match$macros.RestPattern(new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(G__235),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match$macros.rest_pattern = (function cljs$core$match$macros$rest_pattern(p){
return cljs.core.assoc.call(null,(new cljs.core.match$macros.RestPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)),new cljs.core.Keyword("cljs.core.match","rest","cljs.core.match/rest",(-410436433)));
});
cljs.core.match$macros.rest_pattern_QMARK_ = (function cljs$core$match$macros$rest_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.RestPattern);
});
cljs.core.match$macros.specialize_map_key_pattern_matrix = (function cljs$core$match$macros$specialize_map_key_pattern_matrix(rows){
var p = new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,rows));
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__8_SHARP_){
return cljs.core.match.protocols.prepend.call(null,p1__8_SHARP_,p);
}),cljs.core.map.call(null,(function (p1__7_SHARP_){
return cljs.core.match.protocols.drop_nth.call(null,p1__7_SHARP_,(0));
}),rows)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.match.protocols.IExistentialPattern}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match$macros.MapKeyPattern = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)),null,(1),null))));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k247,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__251 = k247;
var G__251__$1 = (((G__251 instanceof cljs.core.Keyword))?G__251.fqn:null);
switch (G__251__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k247,else__11461__auto__);

}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__252){
var vec__253 = p__252;
var k__11487__auto__ = cljs.core.nth.call(null,vec__253,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__253,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match$macros.MapKeyPattern{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__246){
var self__ = this;
var G__246__$1 = this;
return (new cljs.core.RecordIter((0),G__246__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",(151049309))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((-2099047708) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this248,other249){
var self__ = this;
var this248__$1 = this;
return (((!((other249 == null)))) && ((this248__$1.constructor === other249.constructor)) && (cljs.core._EQ_.call(null,this248__$1.p,other249.p)) && (cljs.core._EQ_.call(null,this248__$1.__extmap,other249.__extmap)));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$IExistentialPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var nrows = cljs.core.match$macros.specialize_map_key_pattern_matrix.call(null,rows);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",(151049309)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__246){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__256 = cljs.core.keyword_identical_QMARK_;
var expr__257 = k__11472__auto__;
if(cljs.core.truth_(pred__256.call(null,new cljs.core.Keyword(null,"p","p",(151049309)),expr__257))){
return (new cljs.core.match$macros.MapKeyPattern(G__246,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__246),null));
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",(151049309)),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__246){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match$macros.MapKeyPattern(self__.p,G__246,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match$macros.MapKeyPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null);
}));

(cljs.core.match$macros.MapKeyPattern.cljs$lang$type = true);

(cljs.core.match$macros.MapKeyPattern.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/MapKeyPattern",null,(1),null));
}));

(cljs.core.match$macros.MapKeyPattern.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match$macros/MapKeyPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/MapKeyPattern.
 */
cljs.core.match$macros.__GT_MapKeyPattern = (function cljs$core$match$macros$__GT_MapKeyPattern(p){
return (new cljs.core.match$macros.MapKeyPattern(p,null,null,null));
});

/**
 * Factory function for cljs.core.match$macros/MapKeyPattern, taking a map of keywords to field values.
 */
cljs.core.match$macros.map__GT_MapKeyPattern = (function cljs$core$match$macros$map__GT_MapKeyPattern(G__250){
var extmap__11545__auto__ = (function (){var G__259 = cljs.core.dissoc.call(null,G__250,new cljs.core.Keyword(null,"p","p",(151049309)));
if(cljs.core.record_QMARK_.call(null,G__250)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__259);
} else {
return G__259;
}
})();
return (new cljs.core.match$macros.MapKeyPattern(new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(G__250),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match$macros.map_key_pattern = (function cljs$core$match$macros$map_key_pattern(p){
return cljs.core.assoc.call(null,(new cljs.core.match$macros.MapKeyPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)),new cljs.core.Keyword("cljs.core.match","map-key","cljs.core.match/map-key",(852254431)));
});
cljs.core.match$macros.map_key_pattern_QMARK_ = (function cljs$core$match$macros$map_key_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.MapKeyPattern);
});

cljs.core.match$macros.row_keys = (function cljs$core$match$macros$row_keys(row,env){
var p = cljs.core.first.call(null,row);
var only = new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p));
if(((cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env)))) && (cljs.core.seq.call(null,only)))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env),true);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(p))),cljs.core.set.call(null,only)], null);
});
cljs.core.match$macros.get_all_keys = (function cljs$core$match$macros$get_all_keys(rows,env){
return cljs.core.reduce.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__9_SHARP_){
return cljs.core.match$macros.row_keys.call(null,p1__9_SHARP_,env);
}),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.match$macros.wildcard_pattern_QMARK_,cljs.core.first),rows))));
});
cljs.core.match$macros.wrap_values = (function cljs$core$match$macros$wrap_values(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__261){
var vec__262 = p__261;
var k = cljs.core.nth.call(null,vec__262,(0),null);
var v = cljs.core.nth.call(null,vec__262,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,v))?cljs.core.match$macros.map_key_pattern.call(null,v):v)], null);
}),m));
});
cljs.core.match$macros.get_ocr_map = (function cljs$core$match$macros$get_ocr_map(p,p__265){
var map__266 = p__265;
var map__266__$1 = (((((!((map__266 == null))))?(((((map__266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__266):map__266);
var only = cljs.core.get.call(null,map__266__$1,new cljs.core.Keyword(null,"only","only",(1907811652)));
var all_keys = cljs.core.get.call(null,map__266__$1,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)));
var wc_map = cljs.core.get.call(null,map__266__$1,new cljs.core.Keyword(null,"wc-map","wc-map",(-57721646)));
if(cljs.core.truth_(cljs.core.match$macros.map_pattern_QMARK_.call(null,p))){
return cljs.core.merge.call(null,(cljs.core.truth_(only)?cljs.core.zipmap.call(null,all_keys,cljs.core.repeat.call(null,cljs.core.match$macros.literal_pattern.call(null,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222))))):null),wc_map,cljs.core.match$macros.wrap_values.call(null,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(p)));
} else {
return wc_map;
}
});
cljs.core.match$macros.specialize_map_pattern_row = (function cljs$core$match$macros$specialize_map_pattern_row(row,p__268){
var map__269 = p__268;
var map__269__$1 = (((((!((map__269 == null))))?(((((map__269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__269):map__269);
var env = map__269__$1;
var all_keys = cljs.core.get.call(null,map__269__$1,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)));
var only_QMARK_ = cljs.core.get.call(null,map__269__$1,new cljs.core.Keyword(null,"only?","only?",(504823581)));
var focr = cljs.core.get.call(null,map__269__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var p = cljs.core.first.call(null,row);
var only = cljs.core.seq.call(null,new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
var ocr_map = cljs.core.match$macros.get_ocr_map.call(null,p,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"only","only",(1907811652)),only));
var ps = cljs.core.doall.call(null,cljs.core.map.call(null,ocr_map,all_keys));
var ps__$1 = (cljs.core.truth_(cljs.core.deref.call(null,only_QMARK_))?((only)?(function (){var a = cljs.core.with_meta.call(null,cljs.core.gensym.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",(981564201),null)], null));
return cljs.core.cons.call(null,cljs.core.match$macros.guard_pattern.call(null,cljs.core.match$macros.wildcard_pattern.call(null),cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,a,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","set","cljs.core/set",(724680876),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",(-927561820),null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null,only))),null,(1),null)))),null,(1),null))))], null))),ps);
})():cljs.core.cons.call(null,cljs.core.match$macros.wildcard_pattern.call(null),ps)):ps);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind.call(null,row,(0),focr),cljs.core.reverse.call(null,ps__$1));
});
cljs.core.match$macros.specialize_map_pattern_matrix = (function cljs$core$match$macros$specialize_map_pattern_matrix(rows,env){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__10_SHARP_){
return cljs.core.match$macros.specialize_map_pattern_row.call(null,p1__10_SHARP_,env);
}),rows));
});
cljs.core.match$macros.gen_map_pattern_ocr = (function cljs$core$match$macros$gen_map_pattern_ocr(ocr,k){
return cljs.core.gensym.call(null,[cljs.core.name.call(null,ocr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k).replace(".","_DOT_")),"__"].join(''));
});
cljs.core.match$macros.map_pattern_matrix_ocr_sym = (function cljs$core$match$macros$map_pattern_matrix_ocr_sym(k,env){
var focr = new cljs.core.Keyword(null,"focr","focr",(-820561400)).cljs$core$IFn$_invoke$arity$1(env);
var ocr = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ocrs-map","ocrs-map",(76084823)),k], null));
return cljs.core.with_meta.call(null,ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),new cljs.core.Keyword(null,"map","map",(1371690461)),new cljs.core.Keyword(null,"key","key",(-1516042587)),k,new cljs.core.Keyword(null,"map-sym","map-sym",(1467543192)),focr,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match$macros.val_at_expr.call(null,focr,k,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))], null));
});
cljs.core.match$macros.map_pattern_matrix_ocrs = (function cljs$core$match$macros$map_pattern_matrix_ocrs(ocrs,env){
var focr = new cljs.core.Keyword(null,"focr","focr",(-820561400)).cljs$core$IFn$_invoke$arity$1(env);
var mocrs = cljs.core.map.call(null,(function (p1__11_SHARP_){
return cljs.core.match$macros.map_pattern_matrix_ocr_sym.call(null,p1__11_SHARP_,env);
}),new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)).cljs$core$IFn$_invoke$arity$1(env));
var mocrs__$1 = cljs.core.vec.call(null,(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.cons.call(null,focr,mocrs):mocrs));
return cljs.core.into.call(null,mocrs__$1,cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
});

/**
* @constructor
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match$macros.MapPattern = (function (m,_meta){
this.m = m;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.MapPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.m)," :only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10116__auto__ = new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(self__._meta);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())].join('');
}));

(cljs.core.match$macros.MapPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.MapPattern)) && (cljs.core._EQ_.call(null,self__.m,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.MapPattern(self__.m,new_meta));
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__271 = k;
var G__271__$1 = (((G__271 instanceof cljs.core.Keyword))?G__271.fqn:null);
switch (G__271__$1) {
case "m":
return self__.m;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",(-1074798682),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focr","focr",(-820561400)),focr,new cljs.core.Keyword(null,"only?","only?",(504823581)),cljs.core.atom.call(null,false)], null);
var all_keys = cljs.core.match$macros.get_all_keys.call(null,rows,env);
var env_SINGLEQUOTE_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)),all_keys,new cljs.core.Keyword(null,"wc-map","wc-map",(-57721646)),cljs.core.zipmap.call(null,all_keys,cljs.core.repeatedly.call(null,cljs.core.match$macros.wildcard_pattern)),new cljs.core.Keyword(null,"ocrs-map","ocrs-map",(76084823)),cljs.core.zipmap.call(null,all_keys,cljs.core.map.call(null,(function (p1__12_SHARP_){
return cljs.core.match$macros.gen_map_pattern_ocr.call(null,focr,p1__12_SHARP_);
}),all_keys)));
var nrows = cljs.core.match$macros.specialize_map_pattern_matrix.call(null,rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match$macros.map_pattern_matrix_ocrs.call(null,ocrs,env_SINGLEQUOTE_);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,nocrs);
}));

(cljs.core.match$macros.MapPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.MapPattern.cljs$lang$type = true);

(cljs.core.match$macros.MapPattern.cljs$lang$ctorStr = "cljs.core.match$macros/MapPattern");

(cljs.core.match$macros.MapPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/MapPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/MapPattern.
 */
cljs.core.match$macros.__GT_MapPattern = (function cljs$core$match$macros$__GT_MapPattern(m,_meta){
return (new cljs.core.match$macros.MapPattern(m,_meta));
});

cljs.core.match$macros.map_pattern = (function cljs$core$match$macros$map_pattern(var_args){
var G__274 = arguments.length;
switch (G__274) {
case (0):
return cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new cljs.core.match$macros.MapPattern(cljs.core.PersistentArrayMap.EMPTY,null));
}));

(cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error("Assert failed: (map? m)"));
}

return (new cljs.core.match$macros.MapPattern(m,null));
}));

(cljs.core.match$macros.map_pattern.cljs$lang$maxFixedArity = (1));

cljs.core.match$macros.map_pattern_QMARK_ = (function cljs$core$match$macros$map_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.MapPattern);
});
cljs.core.match$macros.calc_rest_QMARK__and_min_size = (function cljs$core$match$macros$calc_rest_QMARK__and_min_size(rows,env){
return cljs.core.reduce.call(null,(function (p__276,p__277){
var vec__278 = p__276;
var rest_QMARK_ = cljs.core.nth.call(null,vec__278,(0),null);
var min_size = cljs.core.nth.call(null,vec__278,(1),null);
var vec__281 = p__277;
var seq__282 = cljs.core.seq.call(null,vec__281);
var first__283 = cljs.core.first.call(null,seq__282);
var seq__282__$1 = cljs.core.next.call(null,seq__282);
var p = first__283;
var ps = seq__282__$1;
if(cljs.core.truth_(cljs.core.match$macros.vector_pattern_QMARK_.call(null,p))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__10116__auto__ = rest_QMARK_;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(p);
}
})(),(function (){var x__10676__auto__ = min_size;
var y__10677__auto__ = new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(p);
return ((x__10676__auto__ < y__10677__auto__) ? x__10676__auto__ : y__10677__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rest_QMARK_,min_size], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fp","fp",(-469175650)).cljs$core$IFn$_invoke$arity$1(env))], null),rows);
});
cljs.core.match$macros.specialize_vector_pattern_row = (function cljs$core$match$macros$specialize_vector_pattern_row(row,p__284){
var map__285 = p__284;
var map__285__$1 = (((((!((map__285 == null))))?(((((map__285.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__285.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__285):map__285);
var focr = cljs.core.get.call(null,map__285__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var min_size = cljs.core.get.call(null,map__285__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var p = cljs.core.first.call(null,row);
var ps = (cljs.core.truth_(cljs.core.match$macros.vector_pattern_QMARK_.call(null,p))?cljs.core.match.protocols.split.call(null,p,min_size):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.call(null),cljs.core.match$macros.wildcard_pattern.call(null)], null)
);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind.call(null,row,(0),focr),cljs.core.reverse.call(null,ps));
});
cljs.core.match$macros.specialize_vector_pattern_row_non_rest = (function cljs$core$match$macros$specialize_vector_pattern_row_non_rest(row,p__287){
var map__288 = p__287;
var map__288__$1 = (((((!((map__288 == null))))?(((((map__288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__288.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__288):map__288);
var focr = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var min_size = cljs.core.get.call(null,map__288__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var p = cljs.core.first.call(null,row);
var ps = (cljs.core.truth_(cljs.core.match$macros.vector_pattern_QMARK_.call(null,p))?cljs.core.reverse.call(null,new cljs.core.Keyword(null,"v","v",(21465059)).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.repeatedly.call(null,min_size,cljs.core.match$macros.wildcard_pattern));
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind.call(null,row,(0),focr),ps);
});
cljs.core.match$macros.specialize_vector_pattern_matrix = (function cljs$core$match$macros$specialize_vector_pattern_matrix(rows,env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__13_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row.call(null,p1__13_SHARP_,env);
}),rows));
} else {
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__14_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row_non_rest.call(null,p1__14_SHARP_,env);
}),rows));
}
});
cljs.core.match$macros.vector_pattern_ocr_sym = (function cljs$core$match$macros$vector_pattern_ocr_sym(p__290,i){
var map__291 = p__290;
var map__291__$1 = (((((!((map__291 == null))))?(((((map__291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__291):map__291);
var pat = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"pat","pat",(-1417570164)));
var focr = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var tag = cljs.core.get.call(null,map__291__$1,new cljs.core.Keyword(null,"tag","tag",(-1290361223)));
var ocr = cljs.core.gensym.call(null,[cljs.core.name.call(null,focr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
return cljs.core.with_meta.call(null,ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",(-1671818864)),focr,new cljs.core.Keyword(null,"index","index",(-1531685915)),i,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),(function (){var temp__9395__auto__ = new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(pat);
if(cljs.core.truth_(temp__9395__auto__)){
var offset = temp__9395__auto__;
return cljs.core.match$macros.nth_offset_inline.call(null,tag,cljs.core.match$macros.with_tag.call(null,tag,focr),i,offset);
} else {
return cljs.core.match$macros.nth_inline.call(null,tag,cljs.core.match$macros.with_tag.call(null,tag,focr),i);
}
})()], null));
});
cljs.core.match$macros.vector_pattern_matrix_ocrs = (function cljs$core$match$macros$vector_pattern_matrix_ocrs(ocrs,p__293){
var map__294 = p__293;
var map__294__$1 = (((((!((map__294 == null))))?(((((map__294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__294):map__294);
var env = map__294__$1;
var focr = cljs.core.get.call(null,map__294__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var tag = cljs.core.get.call(null,map__294__$1,new cljs.core.Keyword(null,"tag","tag",(-1290361223)));
var min_size = cljs.core.get.call(null,map__294__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var rest_QMARK_ = cljs.core.get.call(null,map__294__$1,new cljs.core.Keyword(null,"rest?","rest?",(345335951)));
if(cljs.core.truth_(rest_QMARK_)){
var ocr_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",(-1671818864)),focr], null);
var vl_ocr = cljs.core.gensym.call(null,[cljs.core.name.call(null,focr),"_left__"].join(''));
var vl_ocr__$1 = cljs.core.with_meta.call(null,vl_ocr,cljs.core.assoc.call(null,ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match$macros.subvec_inline.call(null,tag,cljs.core.match$macros.with_tag.call(null,tag,focr),(0),min_size)));
var vr_ocr = cljs.core.gensym.call(null,[cljs.core.name.call(null,focr),"_right__"].join(''));
var vr_ocr__$1 = cljs.core.with_meta.call(null,vr_ocr,cljs.core.assoc.call(null,ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match$macros.subvec_inline.call(null,tag,cljs.core.match$macros.with_tag.call(null,tag,focr),min_size)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vl_ocr__$1,vr_ocr__$1], null),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
} else {
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match$macros.vector_pattern_ocr_sym,env),cljs.core.range.call(null,min_size)),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
}
});
cljs.core.match$macros.array_tag = (function cljs$core$match$macros$array_tag(x){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null),new cljs.core.Keyword("cljs.core.match","array","cljs.core.match/array",(1503073376)),new cljs.core.Symbol(null,"shorts","shorts",(107738238),null),new cljs.core.Keyword("cljs.core.match","shorts","cljs.core.match/shorts",(-552653627)),new cljs.core.Symbol(null,"ints","ints",(-1761239845),null),new cljs.core.Keyword("cljs.core.match","ints","cljs.core.match/ints",(-406235954)),new cljs.core.Symbol(null,"longs","longs",(-1017696020),null),new cljs.core.Keyword("cljs.core.match","longs","cljs.core.match/longs",(-652539949)),new cljs.core.Symbol(null,"doubles","doubles",(-1517872169),null),new cljs.core.Keyword("cljs.core.match","doubles","cljs.core.match/doubles",(-56405410)),new cljs.core.Symbol(null,"objects","objects",(-554722035),null),new cljs.core.Keyword("cljs.core.match","objects","cljs.core.match/objects",(-1548561908))], null),new cljs.core.Keyword(null,"tag","tag",(-1290361223)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x)));
});

/**
* @constructor
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.IContainsRestPattern}
 * @implements {cljs.core.match.protocols.IVectorPattern}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match$macros.VectorPattern = (function (v,t,size,offset,rest_QMARK_,_meta){
this.v = v;
this.t = t;
this.size = size;
this.offset = offset;
this.rest_QMARK_ = rest_QMARK_;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.VectorPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.v)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.t)].join('');
}));

(cljs.core.match$macros.VectorPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.VectorPattern)) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_], null),cljs.core.map.call(null,(function (p1__15_SHARP_){
return p1__15_SHARP_.call(null,other);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",(21465059)),new cljs.core.Keyword(null,"t","t",(-1397832519)),new cljs.core.Keyword(null,"size","size",(1098693007)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"rest?","rest?",(345335951))], null)))));
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.VectorPattern(self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_,new_meta));
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__296 = k;
var G__296__$1 = (((G__296 instanceof cljs.core.Keyword))?G__296.fqn:null);
switch (G__296__$1) {
case "v":
return self__.v;

break;
case "t":
return self__.t;

break;
case "size":
return self__.size;

break;
case "offset":
return self__.offset;

break;
case "rest?":
return self__.rest_QMARK_;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
var t__$1 = (function (){var or__10116__auto__ = cljs.core.match$macros.array_tag.call(null,ocr);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return self__.t;
}
})();
if(cljs.core.truth_(cljs.core.match$macros.check_size_QMARK_.call(null,t__$1))){
if(cljs.core.truth_(self__.rest_QMARK_)){
return cljs.core.match$macros.test_with_min_size_inline.call(null,t__$1,ocr,self__.size);
} else {
return cljs.core.match$macros.test_with_size_inline.call(null,t__$1,ocr,self__.size);
}
} else {
return cljs.core.match$macros.test_inline.call(null,t__$1,ocr);
}
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IContainsRestPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.rest_QMARK_;
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IVectorPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IVectorPattern$split$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var lv = cljs.core.subvec.call(null,self__.v,(0),n);
var rv = cljs.core.subvec.call(null,self__.v,n);
var pl = (new cljs.core.match$macros.VectorPattern(lv,self__.t,n,self__.offset,false,self__._meta));
var pr = ((cljs.core.match$macros.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,rv)))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,rv)):(function (){var rest_QMARK___$1 = cljs.core.some.call(null,cljs.core.match$macros.rest_pattern_QMARK_,rv);
var rvc = cljs.core.count.call(null,rv);
var size__$1 = (cljs.core.truth_(rest_QMARK___$1)?(rvc - (1)):rvc);
return (new cljs.core.match$macros.VectorPattern(rv,self__.t,size__$1,n,rest_QMARK___$1,self__._meta));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pl,pr], null);
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focr","focr",(-820561400)),focr,new cljs.core.Keyword(null,"fp","fp",(-469175650)),cljs.core.ffirst.call(null,rows),new cljs.core.Keyword(null,"pat","pat",(-1417570164)),this$__$1], null);
var vec__297 = cljs.core.match$macros.calc_rest_QMARK__and_min_size.call(null,rows,env);
var rest_QMARK___$1 = cljs.core.nth.call(null,vec__297,(0),null);
var min_size = cljs.core.nth.call(null,vec__297,(1),null);
var env_SINGLEQUOTE_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"rest?","rest?",(345335951)),rest_QMARK___$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)),min_size,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),(function (){var or__10116__auto__ = cljs.core.match$macros.array_tag.call(null,focr);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return new cljs.core.Keyword(null,"t","t",(-1397832519)).cljs$core$IFn$_invoke$arity$1(this$__$1);
}
})());
var nrows = cljs.core.match$macros.specialize_vector_pattern_matrix.call(null,rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match$macros.vector_pattern_matrix_ocrs.call(null,ocrs,env_SINGLEQUOTE_);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,nocrs);
}));

(cljs.core.match$macros.VectorPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.VectorPattern.cljs$lang$type = true);

(cljs.core.match$macros.VectorPattern.cljs$lang$ctorStr = "cljs.core.match$macros/VectorPattern");

(cljs.core.match$macros.VectorPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/VectorPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/VectorPattern.
 */
cljs.core.match$macros.__GT_VectorPattern = (function cljs$core$match$macros$__GT_VectorPattern(v,t,size,offset,rest_QMARK_,_meta){
return (new cljs.core.match$macros.VectorPattern(v,t,size,offset,rest_QMARK_,_meta));
});

cljs.core.match$macros.vector_pattern = (function cljs$core$match$macros$vector_pattern(var_args){
var G__302 = arguments.length;
switch (G__302) {
case (0):
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match$macros.vector_pattern.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),null,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.match$macros.vector_pattern.call(null,v,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),null,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$2 = (function (v,t){
return cljs.core.match$macros.vector_pattern.call(null,v,t,null,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$3 = (function (v,t,offset){
return cljs.core.match$macros.vector_pattern.call(null,v,t,offset,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4 = (function (v,t,offset,rest_QMARK_){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var c = cljs.core.count.call(null,v);
var size = (cljs.core.truth_(rest_QMARK_)?(c - (1)):c);
return (new cljs.core.match$macros.VectorPattern(v,t,size,offset,rest_QMARK_,null));
}));

(cljs.core.match$macros.vector_pattern.cljs$lang$maxFixedArity = (4));

cljs.core.match$macros.vector_pattern_QMARK_ = (function cljs$core$match$macros$vector_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.VectorPattern);
});
cljs.core.match$macros.specialize_or_pattern_row = (function cljs$core$match$macros$specialize_or_pattern_row(row,pat,ps){
var p = cljs.core.first.call(null,row);
if(cljs.core.truth_((function (){var and__10091__auto__ = cljs.core.match$macros.groupable_QMARK_.call(null,pat,p);
if(cljs.core.truth_(and__10091__auto__)){
return (!(cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,p)));
} else {
return and__10091__auto__;
}
})())){
return cljs.core.map.call(null,(function (p__$1){
return cljs.core.match$macros.update_pattern.call(null,row,(0),p__$1);
}),ps);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
}
});
cljs.core.match$macros.specialize_or_pattern_matrix = (function cljs$core$match$macros$specialize_or_pattern_matrix(rows,pat,ps){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__16_SHARP_){
return cljs.core.match$macros.specialize_or_pattern_row.call(null,p1__16_SHARP_,pat,ps);
}),rows)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match$macros.OrPattern = (function (ps,_meta){
this.ps = ps;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.OrPattern.prototype.cljs$core$match$protocols$IPseudoPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.OrPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.ps);
}));

(cljs.core.match$macros.OrPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.OrPattern)) && (cljs.core._EQ_.call(null,self__.ps,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.OrPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.OrPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.OrPattern(self__.ps,new_meta));
}));

(cljs.core.match$macros.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__304 = k;
var G__304__$1 = (((G__304 instanceof cljs.core.Keyword))?G__304.fqn:null);
switch (G__304__$1) {
case "ps":
return self__.ps;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var nrows = cljs.core.match$macros.specialize_or_pattern_matrix.call(null,rows,this$__$1,self__.ps);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match$macros.OrPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.OrPattern.cljs$lang$type = true);

(cljs.core.match$macros.OrPattern.cljs$lang$ctorStr = "cljs.core.match$macros/OrPattern");

(cljs.core.match$macros.OrPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/OrPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/OrPattern.
 */
cljs.core.match$macros.__GT_OrPattern = (function cljs$core$match$macros$__GT_OrPattern(ps,_meta){
return (new cljs.core.match$macros.OrPattern(ps,_meta));
});

cljs.core.match$macros.or_pattern = (function cljs$core$match$macros$or_pattern(p){
if(cljs.core.vector_QMARK_.call(null,p)){
} else {
throw (new Error("Assert failed: (vector? p)"));
}

return (new cljs.core.match$macros.OrPattern(p,null));
});
cljs.core.match$macros.or_pattern_QMARK_ = (function cljs$core$match$macros$or_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.OrPattern);
});
cljs.core.match$macros.specialize_guard_pattern_matrix = (function cljs$core$match$macros$specialize_guard_pattern_matrix(rows){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__306){
var vec__307 = p__306;
var p = cljs.core.nth.call(null,vec__307,(0),null);
var row = vec__307;
if(cljs.core.truth_(cljs.core.match$macros.guard_pattern_QMARK_.call(null,p))){
return cljs.core.match$macros.update_pattern.call(null,row,(0),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
});

/**
* @constructor
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match$macros.GuardPattern = (function (p,gs,_meta){
this.p = p;
this.gs = gs;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.GuardPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.p)," :guard ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.gs)].join('');
}));

(cljs.core.match$macros.GuardPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.GuardPattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.gs,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.GuardPattern(self__.p,self__.gs,new_meta));
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__310 = k;
var G__310__$1 = (((G__310 instanceof cljs.core.Keyword))?G__310.fqn:null);
switch (G__310__$1) {
case "p":
return self__.p;

break;
case "gs":
return self__.gs;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),cljs.core.map.call(null,(function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.call(null,ocr))));
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var nrows = cljs.core.match$macros.specialize_guard_pattern_matrix.call(null,rows);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match$macros.GuardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.GuardPattern.cljs$lang$type = true);

(cljs.core.match$macros.GuardPattern.cljs$lang$ctorStr = "cljs.core.match$macros/GuardPattern");

(cljs.core.match$macros.GuardPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/GuardPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/GuardPattern.
 */
cljs.core.match$macros.__GT_GuardPattern = (function cljs$core$match$macros$__GT_GuardPattern(p,gs,_meta){
return (new cljs.core.match$macros.GuardPattern(p,gs,_meta));
});

cljs.core.match$macros.guard_pattern = (function cljs$core$match$macros$guard_pattern(p,gs){
if(cljs.core.set_QMARK_.call(null,gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match$macros.GuardPattern(p,gs,null));
});
cljs.core.match$macros.guard_pattern_QMARK_ = (function cljs$core$match$macros$guard_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.GuardPattern);
});
cljs.core.match$macros.app_pattern_matrix_ocrs = (function cljs$core$match$macros$app_pattern_matrix_ocrs(p__312,form){
var vec__313 = p__312;
var focr = cljs.core.nth.call(null,vec__313,(0),null);
var ocrs = vec__313;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["app_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(focr)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,(function (){var or__10116__auto__ = new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,focr));
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return focr;
}
})(),null,(1),null))))], null))], null),ocrs);
});
cljs.core.match$macros.specialize_app_pattern_matrix = (function cljs$core$match$macros$specialize_app_pattern_matrix(rows,form){
var vec__316 = cljs.core.split_with.call(null,(function (p__319){
var vec__320 = p__319;
var pat = cljs.core.nth.call(null,vec__320,(0),null);
var row = vec__320;
var and__10091__auto__ = cljs.core.match$macros.app_pattern_QMARK_.call(null,pat);
if(cljs.core.truth_(and__10091__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(pat),form);
} else {
return and__10091__auto__;
}
}),rows);
var matched_rows = cljs.core.nth.call(null,vec__316,(0),null);
var rest_rows = cljs.core.nth.call(null,vec__316,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,(function (row){
return cljs.core.match.protocols.prepend.call(null,cljs.core.match$macros.update_pattern.call(null,row,(0),cljs.core.match$macros.wildcard_pattern.call(null)),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,row)));
}),matched_rows),cljs.core.map.call(null,(function (row){
return cljs.core.match.protocols.prepend.call(null,row,cljs.core.match$macros.wildcard_pattern.call(null));
}),rest_rows)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match$macros.AppPattern = (function (p,form,_meta){
this.p = p;
this.form = form;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.AppPattern.prototype.cljs$core$match$protocols$IPseudoPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.AppPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.p)," :<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)].join('');
}));

(cljs.core.match$macros.AppPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.AppPattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.form,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.AppPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.AppPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.AppPattern(self__.p,self__.form,new_meta));
}));

(cljs.core.match$macros.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__323 = k;
var G__323__$1 = (((G__323 instanceof cljs.core.Keyword))?G__323.fqn:null);
switch (G__323__$1) {
case "p":
return self__.p;

break;
case "form":
return self__.form;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var nocrs = cljs.core.match$macros.app_pattern_matrix_ocrs.call(null,ocrs,self__.form);
var nrows = cljs.core.match$macros.specialize_app_pattern_matrix.call(null,rows,self__.form);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,nocrs);
}));

(cljs.core.match$macros.AppPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.AppPattern.cljs$lang$type = true);

(cljs.core.match$macros.AppPattern.cljs$lang$ctorStr = "cljs.core.match$macros/AppPattern");

(cljs.core.match$macros.AppPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/AppPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/AppPattern.
 */
cljs.core.match$macros.__GT_AppPattern = (function cljs$core$match$macros$__GT_AppPattern(p,form,_meta){
return (new cljs.core.match$macros.AppPattern(p,form,_meta));
});

cljs.core.match$macros.app_pattern = (function cljs$core$match$macros$app_pattern(p,form){
return (new cljs.core.match$macros.AppPattern(p,form,null));
});
cljs.core.match$macros.app_pattern_QMARK_ = (function cljs$core$match$macros$app_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.AppPattern);
});
cljs.core.match$macros.preds = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret__12698__auto___327 = (function (){
cljs.core.match$macros.defpred = (function cljs$core$match$macros$defpred(var_args){
var G__326 = arguments.length;
switch (G__326) {
case (3):
return cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.swap_BANG_.call(null,cljs.core.match$macros.preds,cljs.core.assoc,name,name);
}));

(cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.swap_BANG_.call(null,cljs.core.match$macros.preds,cljs.core.assoc,name,f);
}));

(cljs.core.match$macros.defpred.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core.match$macros.defpred.cljs$lang$macro = true);

cljs.core.match$macros.specialize_predicate_pattern_matrix = (function cljs$core$match$macros$specialize_predicate_pattern_matrix(rows){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__329){
var vec__330 = p__329;
var p = cljs.core.nth.call(null,vec__330,(0),null);
var row = vec__330;
if(cljs.core.truth_(cljs.core.match$macros.predicate_pattern_QMARK_.call(null,p))){
return cljs.core.match$macros.update_pattern.call(null,row,(0),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
});

/**
* @constructor
 * @implements {cljs.core.match$macros.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match$macros.PredicatePattern = (function (p,gs,_meta){
this.p = p;
this.gs = gs;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match$macros.PredicatePattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.p)," :when ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.gs)].join('');
}));

(cljs.core.match$macros.PredicatePattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.PredicatePattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.gs,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PredicatePattern(self__.p,self__.gs,new_meta));
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__333 = k;
var G__333__$1 = (((G__333 instanceof cljs.core.Keyword))?G__333.fqn:null);
switch (G__333__$1) {
case "p":
return self__.p;

break;
case "gs":
return self__.gs;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",(-794311346));

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),cljs.core.map.call(null,(function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.call(null,ocr))));
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows.call(null,matrix);
var ocrs = cljs.core.match$macros.occurrences.call(null,matrix);
var nrows = cljs.core.match$macros.specialize_predicate_pattern_matrix.call(null,rows);
return cljs.core.match$macros.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match$macros.PredicatePattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match$macros.PredicatePattern.cljs$lang$type = true);

(cljs.core.match$macros.PredicatePattern.cljs$lang$ctorStr = "cljs.core.match$macros/PredicatePattern");

(cljs.core.match$macros.PredicatePattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match$macros/PredicatePattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/PredicatePattern.
 */
cljs.core.match$macros.__GT_PredicatePattern = (function cljs$core$match$macros$__GT_PredicatePattern(p,gs,_meta){
return (new cljs.core.match$macros.PredicatePattern(p,gs,_meta));
});

cljs.core.match$macros.predicate_pattern = (function cljs$core$match$macros$predicate_pattern(p,gs){
if(cljs.core.set_QMARK_.call(null,gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match$macros.PredicatePattern(p,gs,null));
});
cljs.core.match$macros.predicate_pattern_QMARK_ = (function cljs$core$match$macros$predicate_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.PredicatePattern);
});
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641)),new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417)),new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","predice","cljs.core.match/predice",(173694935)),new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",(-794311346))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017)),new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,a)),new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,b)));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311)),new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311))], null),(function (a,b){
var as = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(a);
var bs = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(b);
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,as),cljs.core.count.call(null,bs))) && (cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.match$macros.groupable_QMARK_,as,bs))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296))], null),(function (a,b){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(b))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373)),new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(b));
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.to_source !== 'undefined')){
} else {
/**
 * Returns a Clojure form that, when executed, is truthy if the
 *   pattern matches the occurrence. Dispatches on the `type` of the
 *   pattern. For instance, a literal pattern might return `(= ~(:pattern
 *   pattern) ~ocr)`, using `=` to test for a match.
 */
cljs.core.match$macros.to_source = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","to-source"),(function (pattern,ocr){
return new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(pattern);
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.emit_pattern !== 'undefined')){
} else {
/**
 * Returns the corresponding pattern for the given syntax. Dispatches
 *   on the class of its argument. For example, `[(:or 1 2) 2]` is dispatched
 *   as clojure.lang.IPersistentVector
 */
cljs.core.match$macros.emit_pattern = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","emit-pattern"),(function (pattern){
return cljs.core.match.protocols.syntax_tag.call(null,pattern);
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296));
}));

(cljs.core.List.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153));
}));

(cljs.core.Cons.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153));
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017));
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017));
}));

(cljs.core.Symbol.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",(-2001901386));
}));

goog.object.set(cljs.core.match.protocols.ISyntaxTag,"object",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"object",(function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));

goog.object.set(cljs.core.match.protocols.ISyntaxTag,"null",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"null",(function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
goog.object.set(cljs.core.match.protocols.ISyntaxTag,"number",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"number",(function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
goog.object.set(cljs.core.match.protocols.ISyntaxTag,"string",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"string",(function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
goog.object.set(cljs.core.match.protocols.ISyntaxTag,"boolean",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"boolean",(function (_){
return new cljs.core.Keyword(null,"default","default",(-1987822328));
}));
cljs.core.match$macros.emit_patterns = (function cljs$core$match$macros$emit_patterns(var_args){
var G__336 = arguments.length;
switch (G__336) {
case (2):
return cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2 = (function (ps,t){
return cljs.core.match$macros.emit_patterns.call(null,ps,t,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$3 = (function (ps,t,v){
while(true){
if(cljs.core.empty_QMARK_.call(null,ps)){
return v;
} else {
var p = cljs.core.first.call(null,ps);
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"&","&",(-2144855648),null))){
var p__$1 = cljs.core.second.call(null,ps);
var rp = ((((cljs.core.vector_QMARK_.call(null,p__$1)) && (cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"seq","seq",(-1817803783))))))?cljs.core.match$macros.seq_pattern.call(null,cljs.core.match$macros.emit_patterns.call(null,p__$1,t)):cljs.core.match$macros.emit_pattern.call(null,p__$1));
var G__338 = cljs.core.nnext.call(null,ps);
var G__339 = t;
var G__340 = cljs.core.conj.call(null,v,cljs.core.match$macros.rest_pattern.call(null,rp));
ps = G__338;
t = G__339;
v = G__340;
continue;
} else {
var G__341 = cljs.core.next.call(null,ps);
var G__342 = t;
var G__343 = cljs.core.conj.call(null,v,cljs.core.match$macros.emit_pattern.call(null,cljs.core.first.call(null,ps)));
ps = G__341;
t = G__342;
v = G__343;
continue;

}
}
break;
}
}));

(cljs.core.match$macros.emit_patterns.cljs$lang$maxFixedArity = (3));

cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (pat){
var ps = cljs.core.match$macros.emit_patterns.call(null,pat,new cljs.core.Keyword(null,"vector","vector",(1902966158)));
return cljs.core.match$macros.vector_pattern.call(null,ps,cljs.core.match$macros._STAR_vector_type_STAR_,(0),cljs.core.some.call(null,cljs.core.match$macros.rest_pattern_QMARK_,ps));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern,new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017)),(function (pat){
return cljs.core.match$macros.map_pattern.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p__344){
var vec__345 = p__344;
var k = cljs.core.nth.call(null,vec__345,(0),null);
var v = cljs.core.nth.call(null,vec__345,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.match$macros.emit_pattern.call(null,v)], null);
}),pat))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern,new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",(-2001901386)),(function (pat){
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,cljs.core.match$macros._STAR_locals_STAR_,pat,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222))),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))){
return cljs.core.match$macros.literal_pattern.call(null,cljs.core.with_meta.call(null,pat,cljs.core.assoc.call(null,cljs.core.meta.call(null,pat),new cljs.core.Keyword(null,"local","local",(-1497766724)),true)));
} else {
return cljs.core.match$macros.wildcard_pattern.call(null,pat);
}
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (pat){
return cljs.core.match$macros.literal_pattern.call(null,pat);
}));





cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern,new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153)),(function (pat){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,pat),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))) && ((((cljs.core.second.call(null,pat) instanceof cljs.core.Symbol)) || ((cljs.core.second.call(null,pat) instanceof cljs.core.Keyword)))))){
return cljs.core.match$macros.literal_pattern.call(null,cljs.core.second.call(null,pat));
} else {
return cljs.core.match$macros.emit_pattern_for_syntax.call(null,pat);
}
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.emit_pattern_for_syntax !== 'undefined')){
} else {
/**
 * Handles patterns wrapped in the special list syntax. Dispatches
 *   on the first or second keyword in the list. For example, the pattern 
 *   `(:or 1 ...) is dispatches as :or, and `(1 :as a)` is dispatched by :as.
 */
cljs.core.match$macros.emit_pattern_for_syntax = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match$macros","emit-pattern-for-syntax"),(function (p__348){
var vec__349 = p__348;
var f = cljs.core.nth.call(null,vec__349,(0),null);
var s = cljs.core.nth.call(null,vec__349,(1),null);
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"default","default",(-1987822328))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),s], null);
}
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.Keyword(null,"default","default",(-1987822328))], null),(function (pat){
return cljs.core.match$macros.or_pattern.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.match$macros.emit_pattern,cljs.core.rest.call(null,pat))));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"as","as",(1148689641))], null),(function (p__352){
var vec__353 = p__352;
var p = cljs.core.nth.call(null,vec__353,(0),null);
var _ = cljs.core.nth.call(null,vec__353,(1),null);
var sym = cljs.core.nth.call(null,vec__353,(2),null);
return cljs.core.with_meta.call(null,cljs.core.match$macros.emit_pattern.call(null,p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),sym], null));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"<<","<<",(1655720184))], null),(function (p__356){
var vec__357 = p__356;
var p = cljs.core.nth.call(null,vec__357,(0),null);
var _ = cljs.core.nth.call(null,vec__357,(1),null);
var form = cljs.core.nth.call(null,vec__357,(2),null);
return cljs.core.match$macros.app_pattern.call(null,cljs.core.match$macros.emit_pattern.call(null,p),form);
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"when","when",(-576417306))], null),(function (p__360){
var vec__361 = p__360;
var p = cljs.core.nth.call(null,vec__361,(0),null);
var _ = cljs.core.nth.call(null,vec__361,(1),null);
var gs = cljs.core.nth.call(null,vec__361,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_.call(null,gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Invalid predicate expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? symbol? gs)"].join('')));
}

if(cljs.core.every_QMARK_.call(null,(function (p1__17_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.match$macros.preds),p1__17_SHARP_);
}),gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Unknown predicate in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? (fn* [p1__17#] (contains? (clojure.core/deref preds) p1__17#)) gs)"].join('')));
}

return cljs.core.match$macros.predicate_pattern.call(null,cljs.core.match$macros.emit_pattern.call(null,p),cljs.core.set.call(null,gs__$1));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"guard","guard",(-873147811))], null),(function (p__364){
var vec__365 = p__364;
var p = cljs.core.nth.call(null,vec__365,(0),null);
var _ = cljs.core.nth.call(null,vec__365,(1),null);
var gs = cljs.core.nth.call(null,vec__365,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_.call(null,gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
return cljs.core.match$macros.guard_pattern.call(null,cljs.core.match$macros.emit_pattern.call(null,p),cljs.core.set.call(null,gs__$1));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"seq","seq",(-1817803783))], null),(function (pat){
var p = cljs.core.first.call(null,pat);
if(cljs.core.empty_QMARK_.call(null,p)){
return cljs.core.match$macros.literal_pattern.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.match$macros.seq_pattern.call(null,cljs.core.match$macros.emit_patterns.call(null,p,new cljs.core.Keyword(null,"seq","seq",(-1817803783))));
}
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296))], null),(function (p__368){
var vec__369 = p__368;
var p = cljs.core.nth.call(null,vec__369,(0),null);
var t = cljs.core.nth.call(null,vec__369,(1),null);
var offset_key = cljs.core.nth.call(null,vec__369,(2),null);
var offset = cljs.core.nth.call(null,vec__369,(3),null);
var ps = cljs.core.match$macros.emit_patterns.call(null,p,new cljs.core.Keyword(null,"vector","vector",(1902966158)));
return cljs.core.match$macros.vector_pattern.call(null,ps,t,offset,cljs.core.some.call(null,cljs.core.match$macros.rest_pattern_QMARK_,ps));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"only","only",(1907811652))], null),(function (p__372){
var vec__373 = p__372;
var p = cljs.core.nth.call(null,vec__373,(0),null);
var _ = cljs.core.nth.call(null,vec__373,(1),null);
var only = cljs.core.nth.call(null,vec__373,(2),null);
return cljs.core.with_meta.call(null,cljs.core.match$macros.emit_pattern.call(null,p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",(1907811652)),only], null));
}));
cljs.core._add_method.call(null,cljs.core.match$macros.emit_pattern_for_syntax,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (p__376){
var vec__377 = p__376;
var _ = cljs.core.nth.call(null,vec__377,(0),null);
var s = cljs.core.nth.call(null,vec__377,(1),null);
var l = vec__377;
throw (new Error(["Invalid list syntax ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),". ","Valid syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__18_SHARP_){
return cljs.core._EQ_.call(null,p1__18_SHARP_,new cljs.core.Keyword(null,"default","default",(-1987822328)));
}),cljs.core.keys.call(null,cljs.core.match$macros.emit_pattern_for_syntax.getMethodTable()))))].join('')));
}));
var void_386 = ({});
var void_QMARK__387 = (function (p1__19_SHARP_){
return (void_386 === p1__19_SHARP_);
});
var infix_keyword_QMARK__388 = (function (p1__20_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",(-576417306)),null,new cljs.core.Keyword(null,"as","as",(1148689641)),null,new cljs.core.Keyword(null,"guard","guard",(-873147811)),null], null), null).call(null,p1__20_SHARP_);
});
cljs.core.match$macros.regroup_keywords = (function cljs$core$match$macros$regroup_keywords(pattern){
if(cljs.core.vector_QMARK_.call(null,pattern)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__382,r){
var vec__383 = p__382;
var result = cljs.core.nth.call(null,vec__383,(0),null);
var p = cljs.core.nth.call(null,vec__383,(1),null);
var q = cljs.core.nth.call(null,vec__383,(2),null);
if(void_QMARK__387.call(null,p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,q,r], null);
} else {
if(cljs.core.truth_((((!(void_QMARK__387.call(null,r))))?infix_keyword_QMARK__388.call(null,q):false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,result,(new cljs.core.List(null,cljs.core.match$macros.regroup_keywords.call(null,p),(new cljs.core.List(null,q,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null))),void_386,void_386], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,result,cljs.core.match$macros.regroup_keywords.call(null,p)),q,r], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,void_386,void_386], null),cljs.core.conj.call(null,pattern,void_386,void_386)));
} else {
if(cljs.core.seq_QMARK_.call(null,pattern)){
return cljs.core.cons.call(null,cljs.core.match$macros.regroup_keywords.call(null,cljs.core.first.call(null,pattern)),cljs.core.rest.call(null,pattern));
} else {
return pattern;

}
}
});
/**
 * Returns a pattern with pattern-keywords (:when and :as) properly
 *  grouped.  The original pattern may use the 'flattened' syntax.
 *  For example, a 'flattened' pattern row like [a b :when even?] is
 *  grouped as [a (b :when even?)].
 */
cljs.core.match$macros.group_keywords = (function cljs$core$match$macros$group_keywords(pattern){
if(cljs.core.vector_QMARK_.call(null,pattern)){
return cljs.core.match$macros.regroup_keywords.call(null,pattern);
} else {
return pattern;
}
});
/**
 * Take an unprocessed pattern expression and an action expression and return
 * a pattern row of the processed pattern expression plus the action epxression.
 */
cljs.core.match$macros.to_pattern_row = (function cljs$core$match$macros$to_pattern_row(pat,action){
var ps = cljs.core.map.call(null,cljs.core.match$macros.emit_pattern,cljs.core.match$macros.group_keywords.call(null,pat));
return cljs.core.match$macros.pattern_row.call(null,ps,action);
});
/**
 * Returns a vector of two elements: the set of all wildcards and the 
 * set of duplicate wildcards.  The underbar _ is excluded from both.
 */
cljs.core.match$macros.wildcards_and_duplicates = (function cljs$core$match$macros$wildcards_and_duplicates(patterns){
var remaining = patterns;
var seen = cljs.core.PersistentHashSet.EMPTY;
var dups = cljs.core.PersistentHashSet.EMPTY;
while(true){
var temp__9395__auto__ = cljs.core.seq.call(null,remaining);
if(temp__9395__auto__){
var patterns__$1 = temp__9395__auto__;
var pat = cljs.core.first.call(null,patterns__$1);
var pats = cljs.core.rest.call(null,patterns__$1);
if(((cljs.core._EQ_.call(null,pat,new cljs.core.Symbol(null,"_","_",(-1201019570),null))) || (cljs.core._EQ_.call(null,pat,new cljs.core.Symbol(null,"&","&",(-2144855648),null))))){
var G__389 = pats;
var G__390 = seen;
var G__391 = dups;
remaining = G__389;
seen = G__390;
dups = G__391;
continue;
} else {
if((pat instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_.call(null,seen,pat)){
var G__392 = pats;
var G__393 = seen;
var G__394 = cljs.core.conj.call(null,dups,pat);
remaining = G__392;
seen = G__393;
dups = G__394;
continue;
} else {
var G__395 = pats;
var G__396 = cljs.core.conj.call(null,seen,pat);
var G__397 = dups;
remaining = G__395;
seen = G__396;
dups = G__397;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,pat)){
var G__398 = cljs.core.concat.call(null,pats,pat);
var G__399 = seen;
var G__400 = dups;
remaining = G__398;
seen = G__399;
dups = G__400;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,pat)){
var G__401 = cljs.core.concat.call(null,pats,cljs.core.vals.call(null,pat));
var G__402 = seen;
var G__403 = dups;
remaining = G__401;
seen = G__402;
dups = G__403;
continue;
} else {
if(cljs.core.seq_QMARK_.call(null,pat)){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))){
var G__404 = pats;
var G__405 = seen;
var G__406 = dups;
remaining = G__404;
seen = G__405;
dups = G__406;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Keyword(null,"or","or",(235744169)))){
var wds = cljs.core.map.call(null,cljs.core.match$macros.wildcards_and_duplicates,cljs.core.map.call(null,cljs.core.list,cljs.core.take_nth.call(null,(2),pat)));
var mseen = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.first,wds));
var G__407 = pats;
var G__408 = clojure.set.union.call(null,seen,mseen);
var G__409 = cljs.core.apply.call(null,clojure.set.union,dups,clojure.set.intersection.call(null,seen,mseen),cljs.core.map.call(null,cljs.core.second,wds));
remaining = G__407;
seen = G__408;
dups = G__409;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.second.call(null,pat),new cljs.core.Keyword(null,"as","as",(1148689641)))){
var G__410 = cljs.core.concat.call(null,pats,cljs.core.take_nth.call(null,(2),pat));
var G__411 = seen;
var G__412 = dups;
remaining = G__410;
seen = G__411;
dups = G__412;
continue;
} else {
var G__413 = cljs.core.conj.call(null,pats,cljs.core.first.call(null,pat));
var G__414 = seen;
var G__415 = dups;
remaining = G__413;
seen = G__414;
dups = G__415;
continue;

}
}
}
} else {
var G__416 = pats;
var G__417 = seen;
var G__418 = dups;
remaining = G__416;
seen = G__417;
dups = G__418;
continue;

}
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [seen,dups], null);
}
break;
}
});
cljs.core.match$macros.find_duplicate_wildcards = (function cljs$core$match$macros$find_duplicate_wildcards(pattern){
return cljs.core.second.call(null,cljs.core.match$macros.wildcards_and_duplicates.call(null,pattern));
});
cljs.core.match$macros.check_pattern = (function cljs$core$match$macros$check_pattern(pat,vars,nvars,rownum){
var pat__$1 = cljs.core.match$macros.group_keywords.call(null,pat);
if((!(cljs.core.vector_QMARK_.call(null,pat__$1)))){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern rows must be wrapped in []."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),"].",((cljs.core.list_QMARK_.call(null,pat__$1))?[" Note: pattern rows are not patterns."," They cannot be wrapped in a :when guard, for example"].join(''):null)].join('')));
} else {
}

if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,pat__$1),nvars)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row has differing number of patterns. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,pat__$1))," pattern/s, expecting ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nvars)," for occurrences ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)].join('')));
} else {
}

var temp__9522__auto__ = cljs.core.seq.call(null,cljs.core.match$macros.find_duplicate_wildcards.call(null,pat__$1));
if(temp__9522__auto__){
var duplicates = temp__9522__auto__;
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row reuses wildcards in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),".  The following wildcards are ambiguous: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.sort.call(null,duplicates)))),".  There's no guarantee that the matched values will be same.","  Rename the occurrences uniquely."].join('')));
} else {
return null;
}
});
cljs.core.match$macros.check_matrix_args = (function cljs$core$match$macros$check_matrix_args(vars,clauses){
if((vars instanceof cljs.core.Symbol)){
throw (new Error(["Occurrences must be in a vector."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars),"]"].join('')));
} else {
}

if((!(cljs.core.vector_QMARK_.call(null,vars)))){
throw (new Error(["Occurrences must be in a vector. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," is not a vector"].join('')));
} else {
}

var nvars_450 = cljs.core.count.call(null,vars);
var cls_451 = cljs.core.partition.call(null,(2),clauses);
var seq__419_452 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,cls_451),cljs.core.rest.call(null,cljs.core.range.call(null))));
var chunk__420_453 = null;
var count__421_454 = (0);
var i__422_455 = (0);
while(true){
if((i__422_455 < count__421_454)){
var vec__435_456 = cljs.core._nth.call(null,chunk__420_453,i__422_455);
var vec__438_457 = cljs.core.nth.call(null,vec__435_456,(0),null);
var pat_458 = cljs.core.nth.call(null,vec__438_457,(0),null);
var __459 = cljs.core.nth.call(null,vec__438_457,(1),null);
var rownum_460 = cljs.core.nth.call(null,vec__435_456,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_458)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_460),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern.call(null,pat_458,vars,nvars_450,rownum_460);


var G__461 = seq__419_452;
var G__462 = chunk__420_453;
var G__463 = count__421_454;
var G__464 = (i__422_455 + (1));
seq__419_452 = G__461;
chunk__420_453 = G__462;
count__421_454 = G__463;
i__422_455 = G__464;
continue;
} else {
var temp__9522__auto___465 = cljs.core.seq.call(null,seq__419_452);
if(temp__9522__auto___465){
var seq__419_466__$1 = temp__9522__auto___465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__419_466__$1)){
var c__12122__auto___467 = cljs.core.chunk_first.call(null,seq__419_466__$1);
var G__468 = cljs.core.chunk_rest.call(null,seq__419_466__$1);
var G__469 = c__12122__auto___467;
var G__470 = cljs.core.count.call(null,c__12122__auto___467);
var G__471 = (0);
seq__419_452 = G__468;
chunk__420_453 = G__469;
count__421_454 = G__470;
i__422_455 = G__471;
continue;
} else {
var vec__441_472 = cljs.core.first.call(null,seq__419_466__$1);
var vec__444_473 = cljs.core.nth.call(null,vec__441_472,(0),null);
var pat_474 = cljs.core.nth.call(null,vec__444_473,(0),null);
var __475 = cljs.core.nth.call(null,vec__444_473,(1),null);
var rownum_476 = cljs.core.nth.call(null,vec__441_472,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_474)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_476),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern.call(null,pat_474,vars,nvars_450,rownum_476);


var G__477 = cljs.core.next.call(null,seq__419_466__$1);
var G__478 = null;
var G__479 = (0);
var G__480 = (0);
seq__419_452 = G__477;
chunk__420_453 = G__478;
count__421_454 = G__479;
i__422_455 = G__480;
continue;
}
} else {
}
}
break;
}

var temp__9522__auto___481 = cljs.core.last.call(null,cls_451);
if(cljs.core.truth_(temp__9522__auto___481)){
var vec__447_482 = temp__9522__auto___481;
var pat_483 = cljs.core.nth.call(null,vec__447_482,(0),null);
var __484 = cljs.core.nth.call(null,vec__447_482,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_483)){
} else {
cljs.core.match$macros.check_pattern.call(null,pat_483,vars,nvars_450,cljs.core.count.call(null,cls_451));
}
} else {
}

if(cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses))){
throw (new Error(["Uneven number of Pattern Rows. The last form `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,clauses)),"` seems out of place."].join('')));
} else {
return null;
}
});
/**
 * Process the vars for the pattern matrix. If user provides an
 * expression, create a var and annotate via metadata with the
 * original expression.
 */
cljs.core.match$macros.process_vars = (function cljs$core$match$macros$process_vars(vars){
var process_var = (function cljs$core$match$macros$process_vars_$_process_var(var$){
if((!((var$ instanceof cljs.core.Symbol)))){
var nsym = cljs.core.gensym.call(null,"ocr-");
return cljs.core.with_meta.call(null,nsym,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)),var$], null));
} else {
return var$;
}
});
return cljs.core.vec.call(null,cljs.core.map.call(null,process_var,vars));
});
/**
 * Take the list of vars and sequence of unprocessed clauses and
 * return the pattern matrix. The pattern matrix contains the processed
 * pattern rows and the list of vars originally specified. Inserts
 * a last match - :else if provided by the user or a default match that
 * throws.
 */
cljs.core.match$macros.emit_matrix = (function cljs$core$match$macros$emit_matrix(var_args){
var G__486 = arguments.length;
switch (G__486) {
case (2):
return cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$2 = (function (vars,clauses){
return cljs.core.match$macros.emit_matrix.call(null,vars,clauses,true);
}));

(cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$3 = (function (vars,clauses,default$){
var cs = cljs.core.partition.call(null,(2),clauses);
var vs = cljs.core.match$macros.process_vars.call(null,vars);
var cs__$1 = (function (){var vec__487 = cljs.core.last.call(null,cs);
var p = cljs.core.nth.call(null,vec__487,(0),null);
var a = cljs.core.nth.call(null,vec__487,(1),null);
var last_match = cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,vars),new cljs.core.Symbol(null,"_","_",(-1201019570),null)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),p)){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.butlast.call(null,cs)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_match,a], null));
} else {
if(cljs.core.truth_(default$)){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_match,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),cljs.core.interpose.call(null," ",vs))),null,(1),null)))),null,(1),null))))], null));
} else {
return cs;
}
}
})();
return cljs.core.match$macros.pattern_matrix.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__21_SHARP_){
return cljs.core.apply.call(null,cljs.core.match$macros.to_pattern_row,p1__21_SHARP_);
}),cs__$1)),cljs.core.match$macros.process_vars.call(null,vs));
}));

(cljs.core.match$macros.emit_matrix.cljs$lang$maxFixedArity = (3));

cljs.core.match$macros.executable_form = (function cljs$core$match$macros$executable_form(node){
return cljs.core.match.protocols.n_to_clj.call(null,node);
});
cljs.core.match$macros.recur_present_QMARK_ = (function cljs$core$match$macros$recur_present_QMARK_(actions){
var analyze_action = (function cljs$core$match$macros$recur_present_QMARK__$_analyze_action(action){
if(cljs.core.truth_(((cljs.core.sequential_QMARK_.call(null,action))?cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"recur","recur",(1202958259),null),"null"], null), null),cljs.core.flatten.call(null,action)):false))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recur-present","recur-present",(1178490943)),true], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
return cljs.core.some.call(null,new cljs.core.Keyword(null,"recur-present","recur-present",(1178490943)),cljs.core.map.call(null,analyze_action,actions));
});
cljs.core.match$macros.clj_form = (function cljs$core$match$macros$clj_form(vars,clauses){
if(cljs.core.truth_(cljs.core.deref.call(null,cljs.core.match$macros._STAR_syntax_check_STAR_))){
cljs.core.match$macros.check_matrix_args.call(null,vars,clauses);
} else {
}

var actions = cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),clauses));
var recur_present_QMARK_ = cljs.core.match$macros.recur_present_QMARK_.call(null,actions);
if(cljs.core.not.call(null,(function (){var and__10091__auto__ = cljs.core.match$macros._STAR_no_backtrack_STAR_;
if(cljs.core.truth_(and__10091__auto__)){
return recur_present_QMARK_;
} else {
return and__10091__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Recur form present yet *no-backtrack* set to true","\n","(not (and *no-backtrack* recur-present?))"].join('')));
}

var _STAR_recur_present_STAR__orig_val__491 = cljs.core.match$macros._STAR_recur_present_STAR_;
var _STAR_recur_present_STAR__temp_val__492 = (function (){var or__10116__auto__ = cljs.core.match$macros._STAR_recur_present_STAR_;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var or__10116__auto____$1 = recur_present_QMARK_;
if(cljs.core.truth_(or__10116__auto____$1)){
return or__10116__auto____$1;
} else {
return cljs.core.match$macros._STAR_no_backtrack_STAR_;
}
}
})();
(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__temp_val__492);

try{return cljs.core.match$macros.executable_form.call(null,cljs.core.match$macros.compile.call(null,cljs.core.match$macros.emit_matrix.call(null,vars,clauses)));
}finally {(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__orig_val__491);
}});
var ret__12698__auto___510 = (function (){
/**
 * Pattern match a row of occurrences. Take a vector of occurrences, vars.
 *   Clause question-answer syntax is like `cond`. Questions must be
 *   wrapped in a vector, with same arity as vars. Last question can be :else,
 *   which expands to a row of wildcards. Optionally may take a single
 *   var not wrapped in a vector, questions then need not be wrapped in a
 *   vector.
 * 
 *   Example:
 *   (let [x 1
 *      y 2]
 *  (match [x y 3]
 *    [1 2 3] :answer1
 *    :else :default-answer))
 */
cljs.core.match$macros.match = (function cljs$core$match$macros$match(var_args){
var args__12669__auto__ = [];
var len__12666__auto___511 = arguments.length;
var i__12667__auto___512 = (0);
while(true){
if((i__12667__auto___512 < len__12666__auto___511)){
args__12669__auto__.push((arguments[i__12667__auto___512]));

var G__513 = (i__12667__auto___512 + (1));
i__12667__auto___512 = G__513;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__497 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__500){
var vec__501 = p__500;
var c = cljs.core.nth.call(null,vec__501,(0),null);
var a = cljs.core.nth.call(null,vec__501,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__497,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__497,(1),null);
var _STAR_line_STAR__orig_val__504 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__505 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__506 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__507 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__508 = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__509 = cljs.core.atom.call(null,false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__507);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__508);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__509);

try{return cljs.core.match$macros.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__506);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__505);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__504);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq493){
var G__494 = cljs.core.first.call(null,seq493);
var seq493__$1 = cljs.core.next.call(null,seq493);
var G__495 = cljs.core.first.call(null,seq493__$1);
var seq493__$2 = cljs.core.next.call(null,seq493__$1);
var G__496 = cljs.core.first.call(null,seq493__$2);
var seq493__$3 = cljs.core.next.call(null,seq493__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__494,G__495,G__496,seq493__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__12698__auto___527 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__12669__auto__ = [];
var len__12666__auto___528 = arguments.length;
var i__12667__auto___529 = (0);
while(true){
if((i__12667__auto___529 < len__12666__auto___528)){
args__12669__auto__.push((arguments[i__12667__auto___529]));

var G__530 = (i__12667__auto___529 + (1));
i__12667__auto___529 = G__530;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__519 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__520 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__521 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__522 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__523 = type;
var _STAR_line_STAR__temp_val__524 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__525 = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__526 = cljs.core.atom.call(null,false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__523);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__524);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__525);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__526);

try{return cljs.core.match$macros.clj_form.call(null,vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__522);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__521);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__520);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__519);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq514){
var G__515 = cljs.core.first.call(null,seq514);
var seq514__$1 = cljs.core.next.call(null,seq514);
var G__516 = cljs.core.first.call(null,seq514__$1);
var seq514__$2 = cljs.core.next.call(null,seq514__$1);
var G__517 = cljs.core.first.call(null,seq514__$2);
var seq514__$3 = cljs.core.next.call(null,seq514__$2);
var G__518 = cljs.core.first.call(null,seq514__$3);
var seq514__$4 = cljs.core.next.call(null,seq514__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__515,G__516,G__517,G__518,seq514__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__12698__auto___550 = (function (){
/**
 * Same as match but supports IMatchLookup when
 *   matching maps.
 */
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__12669__auto__ = [];
var len__12666__auto___551 = arguments.length;
var i__12667__auto___552 = (0);
while(true){
if((i__12667__auto___552 < len__12666__auto___551)){
args__12669__auto__.push((arguments[i__12667__auto___552]));

var G__553 = (i__12667__auto___552 + (1));
i__12667__auto___552 = G__553;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__535 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__538){
var vec__539 = p__538;
var c = cljs.core.nth.call(null,vec__539,(0),null);
var a = cljs.core.nth.call(null,vec__539,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__535,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__535,(1),null);
var _STAR_match_lookup_STAR__orig_val__542 = cljs.core.match$macros._STAR_match_lookup_STAR_;
var _STAR_line_STAR__orig_val__543 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__544 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__545 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_match_lookup_STAR__temp_val__546 = true;
var _STAR_line_STAR__temp_val__547 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__548 = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__549 = cljs.core.atom.call(null,false);
(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__temp_val__546);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__547);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__548);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__549);

try{return cljs.core.match$macros.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__545);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__544);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__543);

(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__orig_val__542);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq531){
var G__532 = cljs.core.first.call(null,seq531);
var seq531__$1 = cljs.core.next.call(null,seq531);
var G__533 = cljs.core.first.call(null,seq531__$1);
var seq531__$2 = cljs.core.next.call(null,seq531__$1);
var G__534 = cljs.core.first.call(null,seq531__$2);
var seq531__$3 = cljs.core.next.call(null,seq531__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__532,G__533,G__534,seq531__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__12698__auto___558 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__12669__auto__ = [];
var len__12666__auto___559 = arguments.length;
var i__12667__auto___560 = (0);
while(true){
if((i__12667__auto___560 < len__12666__auto___559)){
args__12669__auto__.push((arguments[i__12667__auto___560]));

var G__561 = (i__12667__auto___560 + (1));
i__12667__auto___560 = G__561;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_))),null,(1),null)),body)),null,(1),null))));
}));

(cljs.core.match$macros.match_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq554){
var G__555 = cljs.core.first.call(null,seq554);
var seq554__$1 = cljs.core.next.call(null,seq554);
var G__556 = cljs.core.first.call(null,seq554__$1);
var seq554__$2 = cljs.core.next.call(null,seq554__$1);
var G__557 = cljs.core.first.call(null,seq554__$2);
var seq554__$3 = cljs.core.next.call(null,seq554__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__555,G__556,G__557,seq554__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__12698__auto___562 = cljs.core.match$macros.asets = (function cljs$core$match$macros$asets(_AMPERSAND_form,_AMPERSAND_env,a,vs){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),cljs.core.map.call(null,(function (a__$1,b,c){
return cljs.core.concat.call(null,a__$1,(new cljs.core.List(null,b,(new cljs.core.List(null,c,null,(1),null)),(2),null)));
}),cljs.core.repeat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),cljs.core.range.call(null,cljs.core.count.call(null,vs)),vs),(new cljs.core.List(null,a,null,(1),null))));
});
(cljs.core.match$macros.asets.cljs$lang$macro = true);

var ret__12698__auto___580 = (function (){
cljs.core.match$macros.match = (function cljs$core$match$macros$match(var_args){
var args__12669__auto__ = [];
var len__12666__auto___581 = arguments.length;
var i__12667__auto___582 = (0);
while(true){
if((i__12667__auto___582 < len__12666__auto___581)){
args__12669__auto__.push((arguments[i__12667__auto___582]));

var G__583 = (i__12667__auto___582 + (1));
i__12667__auto___582 = G__583;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__567 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__570){
var vec__571 = p__570;
var c = cljs.core.nth.call(null,vec__571,(0),null);
var a = cljs.core.nth.call(null,vec__571,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__567,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__567,(1),null);
var _STAR_line_STAR__orig_val__574 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__575 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__576 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__577 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__578 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__579 = cljs.core.atom.call(null,false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__577);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__578);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__579);

try{return cljs.core.match$macros.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__576);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__575);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__574);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq563){
var G__564 = cljs.core.first.call(null,seq563);
var seq563__$1 = cljs.core.next.call(null,seq563);
var G__565 = cljs.core.first.call(null,seq563__$1);
var seq563__$2 = cljs.core.next.call(null,seq563__$1);
var G__566 = cljs.core.first.call(null,seq563__$2);
var seq563__$3 = cljs.core.next.call(null,seq563__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__564,G__565,G__566,seq563__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__12698__auto___603 = (function (){
cljs.core.match$macros.match_STAR_ = (function cljs$core$match$macros$match_STAR_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___604 = arguments.length;
var i__12667__auto___605 = (0);
while(true){
if((i__12667__auto___605 < len__12666__auto___604)){
args__12669__auto__.push((arguments[i__12667__auto___605]));

var G__606 = (i__12667__auto___605 + (1));
i__12667__auto___605 = G__606;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__588 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__591){
var vec__592 = p__591;
var c = cljs.core.nth.call(null,vec__592,(0),null);
var a = cljs.core.nth.call(null,vec__592,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__588,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__588,(1),null);
var _STAR_line_STAR__orig_val__595 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__596 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__597 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__598 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_line_STAR__temp_val__599 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__600 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__601 = cljs.core.atom.call(null,false);
var _STAR_no_backtrack_STAR__temp_val__602 = true;
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__599);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__600);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__601);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__602);

try{return cljs.core.match$macros.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__598);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__597);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__596);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__595);
}}));

(cljs.core.match$macros.match_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_STAR_.cljs$lang$applyTo = (function (seq584){
var G__585 = cljs.core.first.call(null,seq584);
var seq584__$1 = cljs.core.next.call(null,seq584);
var G__586 = cljs.core.first.call(null,seq584__$1);
var seq584__$2 = cljs.core.next.call(null,seq584__$1);
var G__587 = cljs.core.first.call(null,seq584__$2);
var seq584__$3 = cljs.core.next.call(null,seq584__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__585,G__586,G__587,seq584__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_STAR_.cljs$lang$macro = true);

var ret__12698__auto___620 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__12669__auto__ = [];
var len__12666__auto___621 = arguments.length;
var i__12667__auto___622 = (0);
while(true){
if((i__12667__auto___622 < len__12666__auto___621)){
args__12669__auto__.push((arguments[i__12667__auto___622]));

var G__623 = (i__12667__auto___622 + (1));
i__12667__auto___622 = G__623;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__612 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__613 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__614 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__615 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__616 = type;
var _STAR_line_STAR__temp_val__617 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__618 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__619 = cljs.core.atom.call(null,false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__616);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__617);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__618);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__619);

try{return cljs.core.match$macros.clj_form.call(null,vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__615);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__614);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__613);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__612);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq607){
var G__608 = cljs.core.first.call(null,seq607);
var seq607__$1 = cljs.core.next.call(null,seq607);
var G__609 = cljs.core.first.call(null,seq607__$1);
var seq607__$2 = cljs.core.next.call(null,seq607__$1);
var G__610 = cljs.core.first.call(null,seq607__$2);
var seq607__$3 = cljs.core.next.call(null,seq607__$2);
var G__611 = cljs.core.first.call(null,seq607__$3);
var seq607__$4 = cljs.core.next.call(null,seq607__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__608,G__609,G__610,G__611,seq607__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__12698__auto___639 = (function (){
cljs.core.match$macros.matchv_STAR_ = (function cljs$core$match$macros$matchv_STAR_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___640 = arguments.length;
var i__12667__auto___641 = (0);
while(true){
if((i__12667__auto___641 < len__12666__auto___640)){
args__12669__auto__.push((arguments[i__12667__auto___641]));

var G__642 = (i__12667__auto___641 + (1));
i__12667__auto___641 = G__642;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__629 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__630 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__631 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__632 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__633 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_vector_type_STAR__temp_val__634 = type;
var _STAR_line_STAR__temp_val__635 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__636 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__637 = cljs.core.atom.call(null,false);
var _STAR_no_backtrack_STAR__temp_val__638 = true;
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__634);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__635);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__636);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__637);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__638);

try{return cljs.core.match$macros.clj_form.call(null,vars,clauses);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__633);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__632);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__631);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__630);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__629);
}}));

(cljs.core.match$macros.matchv_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv_STAR_.cljs$lang$applyTo = (function (seq624){
var G__625 = cljs.core.first.call(null,seq624);
var seq624__$1 = cljs.core.next.call(null,seq624);
var G__626 = cljs.core.first.call(null,seq624__$1);
var seq624__$2 = cljs.core.next.call(null,seq624__$1);
var G__627 = cljs.core.first.call(null,seq624__$2);
var seq624__$3 = cljs.core.next.call(null,seq624__$2);
var G__628 = cljs.core.first.call(null,seq624__$3);
var seq624__$4 = cljs.core.next.call(null,seq624__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__625,G__626,G__627,G__628,seq624__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv_STAR_.cljs$lang$macro = true);

var ret__12698__auto___660 = (function (){
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__12669__auto__ = [];
var len__12666__auto___661 = arguments.length;
var i__12667__auto___662 = (0);
while(true){
if((i__12667__auto___662 < len__12666__auto___661)){
args__12669__auto__.push((arguments[i__12667__auto___662]));

var G__663 = (i__12667__auto___662 + (1));
i__12667__auto___662 = G__663;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__647 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__650){
var vec__651 = p__650;
var c = cljs.core.nth.call(null,vec__651,(0),null);
var a = cljs.core.nth.call(null,vec__651,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__647,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__647,(1),null);
var _STAR_line_STAR__orig_val__654 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__655 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__656 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__657 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__658 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__659 = cljs.core.atom.call(null,false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__657);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__658);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__659);

try{return cljs.core.match$macros.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__656);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__655);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__654);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq643){
var G__644 = cljs.core.first.call(null,seq643);
var seq643__$1 = cljs.core.next.call(null,seq643);
var G__645 = cljs.core.first.call(null,seq643__$1);
var seq643__$2 = cljs.core.next.call(null,seq643__$1);
var G__646 = cljs.core.first.call(null,seq643__$2);
var seq643__$3 = cljs.core.next.call(null,seq643__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__644,G__645,G__646,seq643__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__12698__auto___668 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__12669__auto__ = [];
var len__12666__auto___669 = arguments.length;
var i__12667__auto___670 = (0);
while(true){
if((i__12667__auto___670 < len__12666__auto___669)){
args__12669__auto__.push((arguments[i__12667__auto___670]));

var G__671 = (i__12667__auto___670 + (1));
i__12667__auto___670 = G__671;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_))),null,(1),null)),body)),null,(1),null))));
}));

(cljs.core.match$macros.match_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq664){
var G__665 = cljs.core.first.call(null,seq664);
var seq664__$1 = cljs.core.next.call(null,seq664);
var G__666 = cljs.core.first.call(null,seq664__$1);
var seq664__$2 = cljs.core.next.call(null,seq664__$1);
var G__667 = cljs.core.first.call(null,seq664__$2);
var seq664__$3 = cljs.core.next.call(null,seq664__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__665,G__666,G__667,seq664__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__12698__auto___676 = (function (){
cljs.core.match$macros.match_let_STAR_ = (function cljs$core$match$macros$match_let_STAR_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___677 = arguments.length;
var i__12667__auto___678 = (0);
while(true){
if((i__12667__auto___678 < len__12666__auto___677)){
args__12669__auto__.push((arguments[i__12667__auto___678]));

var G__679 = (i__12667__auto___678 + (1));
i__12667__auto___678 = G__679;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match$macros.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match*","cljs.core.match/match*",(-529932879),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_))),null,(1),null)),body)),null,(1),null))));
}));

(cljs.core.match$macros.match_let_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_let_STAR_.cljs$lang$applyTo = (function (seq672){
var G__673 = cljs.core.first.call(null,seq672);
var seq672__$1 = cljs.core.next.call(null,seq672);
var G__674 = cljs.core.first.call(null,seq672__$1);
var seq672__$2 = cljs.core.next.call(null,seq672__$1);
var G__675 = cljs.core.first.call(null,seq672__$2);
var seq672__$3 = cljs.core.next.call(null,seq672__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__673,G__674,G__675,seq672__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let_STAR_.cljs$lang$macro = true);


//# sourceURL=cljs/core/match$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL21hdGNoJG1hY3Jvcy5qcyIsInNvdXJjZXMiOlsibWF0Y2gkbWFjcm9zLmNsanMiXSwibGluZUNvdW50Ijo1NzcwLCJtYXBwaW5ncyI6IjtBQW1EQTs7O0FBRUVBLGtEQUFlLHlCQUFBLHpCQUFDQztBQUVsQixBQUNBLDRDQUFBLDVDQUFzQkM7QUFDdEIsQUFFQTs7O2tEQUFBLGxEQUVFQztBQUVGOzs7OztpREFBQSxqREFJRUM7QUFFRjs7O21EQUFBLG5EQUVFQztBQUVGOzs7a0RBQUEsbERBRUVDO0FBRUY7OztBQUNFQyxtQ0FDbUIsS0FBQUMsTUFBQTtBQUVyQix3Q0FBQSx4Q0FBTUk7QUFBTixBQUFBLE9BQUFILDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLDREQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBLGlHQUFBLEtBQUEsSUFBQTs7QUFNQSx1Q0FBQSx2Q0FBTUU7QUFBTixBQUFBLEFBQUE7O0FBTUEscURBQUEsckRBQXNCQztBQUN0QiwwQ0FBQSwxQ0FBc0JDO0FBRXRCLDhCQUFBLDlCQUFNQyxvRUFBTUM7QUFBWixBQUNFLEdBQU0sd0JBQUEsQUFBQUMseEJBQUNDLGtEQUFLQztBQUFaLEFBQ0UsSUFBQUMsdUNBQXNDRTtJQUF0Q0QsdUNBQWlERTtBQUFqRCxBQUFBLGtDQUFBRixqQ0FBc0NDOztBQUF0QyxJQUFBLEFBQ0UsNEJBQUEsNUJBQUNFLHVDQUNDLHVFQUFBLCtGQUFBLHpIQUFLQyxnRkFBZUMsdURBQ3BCVjtVQUhKLEFBQUEsa0NBQUFJLGpDQUFzQ0U7O0FBSXRDLGlGQUFBLDFFQUFDSyxnQ0FBT1I7O0FBTFY7OztBQTRCRixBQUFBLENBQUEsQUFBQSxzRUFBQVMsdEVBQWdEQzs7QUFBaEQsQ0FBQSxBQUFBLEFBQWdEQSxvRkFFOUMsV0FBU0MsTUFBS0MsRUFBRUM7QUFBaEIsQUFBQSxnQkFBQSxaQUFTRjtBQUFULEFBQ0UsT0FBc0JHLDRCQUFTSCxVQUFLQyxFQUFFQzs7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NHhCa0RweEI7QUE1eEJsRCxBQUFBLElBQUFyRixzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUEwMkIsT0FBQUMsT0FBQUMsT0FBQUg7OztBQUFBOzs7QUFBQSxBQUFBLENBQUEseURBQUEsekRBQVVEOztBQUFWMVAiLCJuYW1lcyI6WyJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zLypzeW50YXgtY2hlY2sqIiwiY2xqcy5jb3JlL2F0b20iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zLypsb2NhbHMqIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8qbWF0Y2gtbG9va3VwKiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvKnZlY3Rvci10eXBlKiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvKnJlY3VyLXByZXNlbnQqIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8qbm8tYmFja3RyYWNrKiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvYmFja3RyYWNrIiwianMvRXJyb3IiLCJjbGpzLmNvcmUvc2VxdWVuY2UiLCJjbGpzLmNvcmUvY29uY2F0IiwiY2xqcy5jb3JlL0xpc3QiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2JhY2t0cmFjay1leHByIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9iYWNrdHJhY2stc3ltIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8qYmFja3RyYWNrLXN0YWNrKiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvKnJvb3QqIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy93YXJuIiwibXNnIiwiY2xqcy5jb3JlL2RlcmVmIiwiY2xqcy5jb3JlL25vdCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvKndhcm5lZCoiLCIqcHJpbnQtZm4qLW9yaWctdmFsX18yMiIsIipwcmludC1mbiotdGVtcC12YWxfXzIzIiwiY2xqcy5jb3JlLypwcmludC1mbioiLCJjbGpzLmNvcmUvKnByaW50LWVyci1mbioiLCJjbGpzLmNvcmUvcHJpbnRsbiIsImNsanMuY29yZS8qbnMqIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8qbGluZSoiLCJjbGpzLmNvcmUvcmVzZXQhIiwiY2xqcy5jb3JlL1BST1RPQ09MX1NFTlRJTkVMIiwiY2xqcy5jb3JlL0lMb29rdXAiLCJ0aGlzIiwiayIsIm5vdC1mb3VuZCIsImNsanMuY29yZS8tbG9va3VwIiwidmFyX2FyZ3MiLCJhcmdzX18xMjY2OV9fYXV0b19fIiwibGVuX18xMjY2Nl9fYXV0b19fIiwiaV9fMTI2NjdfX2F1dG9fXyIsImFyZ3NlcV9fMTI2NzBfX2F1dG9fXyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvdmFsLWF0LWV4cHIiLCJzZXEyNiIsInNlbGZfXzEyNjU5X19hdXRvX18iLCJjbGpzLmNvcmUvc2VxIiwiYXJncyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvdmVjdG9yLXR5cGUiLCJzZXEzMCIsIkdfXzMxIiwic2VsZl9fMTI2NThfX2F1dG9fXyIsInQiLCJyIiwianMvY2xqcyIsImpzL2NsanMuY29yZSIsImpzL2NsanMuY29yZS5tYXRjaCRtYWNyb3MiLCJqcy9jbGpzLmNvcmUubWF0Y2gkbWFjcm9zLmNoZWNrLXNpemU/IiwibWV0aG9kLXRhYmxlX18xMjQ5NV9fYXV0b19fIiwicHJlZmVyLXRhYmxlX18xMjQ5Nl9fYXV0b19fIiwibWV0aG9kLWNhY2hlX18xMjQ5N19fYXV0b19fIiwiY2FjaGVkLWhpZXJhcmNoeV9fMTI0OThfX2F1dG9fXyIsImhpZXJhcmNoeV9fMTI0OTlfX2F1dG9fXyIsImNsanMuY29yZS9nZXQiLCJjbGpzLmNvcmUvTXVsdGlGbiIsImNsanMuY29yZS9zeW1ib2wiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2NoZWNrLXNpemU/IiwiY2xqcy5jb3JlL2lkZW50aXR5IiwianMvY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy50YWciLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3RhZyIsImpzL2NsanMuY29yZS5tYXRjaCRtYWNyb3MudGVzdC1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3Rlc3QtaW5saW5lIiwianMvY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy50ZXN0LXdpdGgtc2l6ZS1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3Rlc3Qtd2l0aC1zaXplLWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaCRtYWNyb3MudGVzdC13aXRoLW1pbi1zaXplLWlubGluZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvdGVzdC13aXRoLW1pbi1zaXplLWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaCRtYWNyb3MuY291bnQtaW5saW5lIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9jb3VudC1pbmxpbmUiLCJqcy9jbGpzLmNvcmUubWF0Y2gkbWFjcm9zLm50aC1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL250aC1pbmxpbmUiLCJqcy9jbGpzLmNvcmUubWF0Y2gkbWFjcm9zLm50aC1vZmZzZXQtaW5saW5lIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9udGgtb2Zmc2V0LWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaCRtYWNyb3Muc3VidmVjLWlubGluZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc3VidmVjLWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaCRtYWNyb3MubnRobmV4dC1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL250aG5leHQtaW5saW5lIiwiY2xqcy5jb3JlLy1hZGQtbWV0aG9kIiwiXyIsImNsanMuY29yZS9QZXJzaXN0ZW50VmVjdG9yIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy93aXRoLXRhZyIsIm9jciIsInRoZS10YWciLCJjbGpzLmNvcmUvdmFyeS1tZXRhIiwiY2xqcy5jb3JlL2Fzc29jIiwiYyIsImNsanMuY29yZS89IiwiY2xqcy5jb3JlL1N5bWJvbCIsInNpemUiLCJpIiwib2Zmc2V0Iiwic3RhcnQiLCJlbmQiLCJuIiwieCIsImNsanMuY29yZS9pbnRvIiwiY2xqcy5jb3JlL3N1YnZlYyIsImNsanMuY29yZS9jb3VudCIsImNsanMuY29yZS9udGgiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL3ByZXBlbmQiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL2Ryb3AtbnRoIiwiY2xqcy5jb3JlL1N1YnZlYyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvY29uc3RydWN0b3I/IiwicCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvd2lsZGNhcmQtcGF0dGVybj8iLCJqcy9jbGpzLmNvcmUubWF0Y2gkbWFjcm9zLmdyb3VwYWJsZT8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2dyb3VwYWJsZT8iLCJhIiwiYiIsInNlbGZfXyIsImFyZ3MzNiIsImNsanMuY29yZS9hY2xvbmUiLCJ0aGlzX18xMTM4NV9fYXV0b19fIiwid3JpdGVyX18xMTM4Nl9fYXV0b19fIiwib3B0X18xMTM4N19fYXV0b19fIiwiY2xqcy5jb3JlLy13cml0ZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvUGF0dGVyblJvdyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvLT5QYXR0ZXJuUm93IiwicHMiLCJhY3Rpb24iLCJiaW5kaW5ncyIsIm90aGVyIiwiY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scy9zd2FwIiwidiIsImNsanMuY29yZS9maXJzdCIsInRlbXBfXzkzOTVfX2F1dG9fXyIsIm5wcyIsImNsanMuY29yZS9uZXh0IiwiR19fMzciLCJjbGpzLmNvcmUvS2V5d29yZCIsImNsanMuY29yZS9jb25qIiwiR19fNDAiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3BhdHRlcm4tcm93IiwiY2xqcy5jb3JlL3ZlY3Rvcj8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3VwZGF0ZS1wYXR0ZXJuIiwicHJvdyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvYWxsLXdpbGRjYXJkcz8iLCJjbGpzLmNvcmUvZXZlcnk/IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9kcm9wLW50aC1iaW5kIiwiYmluZC1leHByIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9sZWFmLWJpbmQtZXhwciIsImFzIiwiY2xqcy5jb3JlL21ldGEiLCJvcl9fMTAxMTZfX2F1dG9fXyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbmFtZWQtd2lsZGNhcmQtcGF0dGVybj8iLCJ0aGlzX18xMTQ1OF9fYXV0b19fIiwia19fMTE0NTlfX2F1dG9fXyIsInRoaXNfXzExNDYwX19hdXRvX18iLCJrNDMiLCJlbHNlX18xMTQ2MV9fYXV0b19fIiwiR19fNDciLCJ2YWx1ZSIsIl9fZXh0bWFwIiwidGhpc19fMTE0ODNfX2F1dG9fXyIsImZfXzExNDg0X19hdXRvX18iLCJpbml0X18xMTQ4NV9fYXV0b19fIiwiY2xqcy5jb3JlL3JlZHVjZSIsInJldF9fMTE0ODZfX2F1dG9fXyIsInBfXzUyIiwidmVjX181MyIsImtfXzExNDg3X19hdXRvX18iLCJ2X18xMTQ4OF9fYXV0b19fIiwidGhpc19fMTE0NzhfX2F1dG9fXyIsIndyaXRlcl9fMTE0NzlfX2F1dG9fXyIsIm9wdHNfXzExNDgwX19hdXRvX18iLCJwci1wYWlyX18xMTQ4MV9fYXV0b19fIiwia2V5dmFsX18xMTQ4Ml9fYXV0b19fIiwiY2xqcy5jb3JlL3ByLXNlcXVlbnRpYWwtd3JpdGVyIiwiR19fNDIiLCJjbGpzLmNvcmUvUmVjb3JkSXRlciIsImNsanMuY29yZS8taXRlcmF0b3IiLCJjbGpzLmNvcmUvbmlsLWl0ZXIiLCJ0aGlzX18xMTQ1Nl9fYXV0b19fIiwiX19tZXRhIiwidGhpc19fMTE0NDlfX2F1dG9fXyIsIl9faGFzaCIsInRoaXNfXzExNDYyX19hdXRvX18iLCJ0aGlzX18xMTQ1MF9fYXV0b19fIiwiaF9fMTA4ODhfX2F1dG9fXyIsImNvbGxfXzExNDUxX19hdXRvX18iLCJjbGpzLmNvcmUvaGFzaC11bm9yZGVyZWQtY29sbCIsInRoaXM0NCIsIm90aGVyNDUiLCJ0aGlzX18xMTQ3M19fYXV0b19fIiwia19fMTE0NzRfX2F1dG9fXyIsImNsanMuY29yZS9jb250YWlucz8iLCJjbGpzLmNvcmUvZGlzc29jIiwiY2xqcy5jb3JlLy13aXRoLW1ldGEiLCJjbGpzLmNvcmUvbm90LWVtcHR5IiwidGhpc19fMTE0NzFfX2F1dG9fXyIsImtfXzExNDcyX19hdXRvX18iLCJwcmVkX181NiIsImNsanMuY29yZS9rZXl3b3JkLWlkZW50aWNhbD8iLCJleHByX181NyIsInRoaXNfXzExNDc2X19hdXRvX18iLCJjbGpzLmNvcmUvTWFwRW50cnkiLCJ0aGlzX18xMTQ1N19fYXV0b19fIiwidGhpc19fMTE0NjNfX2F1dG9fXyIsImVudHJ5X18xMTQ2NF9fYXV0b19fIiwiY2xqcy5jb3JlLy1udGgiLCJjbGpzLmNvcmUvLWNvbmoiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL0xlYWZOb2RlIiwidGhpc19fMTE1NDlfX2F1dG9fXyIsIndyaXRlcl9fMTE1NTBfX2F1dG9fXyIsIkdfXzQ2IiwiZXh0bWFwX18xMTU0NV9fYXV0b19fIiwiR19fNTkiLCJjbGpzLmNvcmUvcmVjb3JkPyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvLT5MZWFmTm9kZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbWFwLT5MZWFmTm9kZSIsImNsanMuY29yZS9lbXB0eT8iLCJjbGpzLmNvcmUvdmVjIiwiY2xqcy5jb3JlL3JlbW92ZSIsInBfXzQ4IiwidmVjX180OSIsInN5bSIsImNsanMuY29yZS9hcHBseSIsIkdfXzYyIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9sZWFmLW5vZGUiLCJqcy9jbGpzLmNvcmUubWF0Y2gkbWFjcm9zLmxlYWYtYmluZC1leHByIiwibSIsIms2NSIsIkdfXzY5IiwicF9fNzAiLCJ2ZWNfXzcxIiwiR19fNjQiLCJ0aGlzNjYiLCJvdGhlcjY3IiwicHJlZF9fNzQiLCJleHByX183NSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvRmFpbE5vZGUiLCJHX182OCIsIkdfXzc3IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8tPkZhaWxOb2RlIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9tYXAtPkZhaWxOb2RlIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9mYWlsLW5vZGUiLCJrODAiLCJHX184NCIsIm5vZGUiLCJwX184NSIsInZlY19fODYiLCJHX183OSIsInRoaXM4MSIsIm90aGVyODIiLCJwcmVkX184OSIsImV4cHJfXzkwIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9CaW5kTm9kZSIsIkdfXzgzIiwiR19fOTIiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zLy0+QmluZE5vZGUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hcC0+QmluZE5vZGUiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL24tdG8tY2xqIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9iaW5kLW5vZGUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2RhZy1jbGF1c2UtdG8tY2xqIiwib2NjdXJyZW5jZSIsInBhdHRlcm4iLCJ0ZXN0IiwiY2xqcy5jb3JlL25hdGl2ZS1zYXRpc2ZpZXM/IiwiY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scy9JUGF0dGVybkNvbXBpbGUiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL3RvLXNvdXJjZSoiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3RvLXNvdXJjZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvY2F0Y2gtZXJyb3IiLCJzZXE5NSIsImJvZHkiLCJlcnItc3ltIiwiazEwMCIsIkdfXzEwNCIsImNhc2VzIiwiZGVmYXVsdCIsInBfXzEwNSIsInZlY19fMTA2IiwiR19fOTkiLCJ0aGlzMTAxIiwib3RoZXIxMDIiLCJwcmVkX18xMDkiLCJleHByX18xMTAiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL1N3aXRjaE5vZGUiLCJHX18xMDMiLCJHX18xMTIiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zLy0+U3dpdGNoTm9kZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbWFwLT5Td2l0Y2hOb2RlIiwiY2xhdXNlcyIsImNsanMuY29yZS9kb2FsbCIsImNsanMuY29yZS9tYXBjYXQiLCJjbGpzLmNvcmUvcGFydGlhbCIsImNvbmQtZXhwciIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc3dpdGNoLW5vZGUiLCJjbGpzLmNvcmUvc2VxdWVudGlhbD8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2ZpcnN0LWNvbHVtbj8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2VtcHR5LXJvdz8iLCJyb3ciLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3Njb3JlLWNvbHVtbiIsImNvbCIsImNsanMuY29yZS8rIiwicF9fMTE0IiwibWFwX18xMTUiLCJjbGpzLmNvcmUvaGFzaC1tYXAiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3dpZHRoIiwicm93cyIsInBfXzExNyIsIm1hcF9fMTE4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9oZWlnaHQiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2RpbSIsInBtIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9lbXB0eS1tYXRyaXg/IiwicF9fMTIwIiwibWFwX18xMjEiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2NvbHVtbiIsInAxX18yIyIsImNsanMuY29yZS9tYXAiLCJwX18xMjMiLCJtYXBfXzEyNCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvcm93IiwiaiIsInBfXzEyNiIsIm1hcF9fMTI3IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9yb3dzIiwicF9fMTI5IiwibWFwX18xMzAiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3BhdHRlcm4tYXQiLCJwX18xMzIiLCJtYXBfXzEzMyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvYWN0aW9uLWZvci1yb3ciLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL29jY3VycmVuY2VzIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9yb3ctYmluZGluZ3MiLCJmIiwib2NycyIsImNsanMuY29yZS92ZWN0b3IiLCJjbGpzLmNvcmUvZmlsdGVyIiwicF9fMTM5IiwidmVjX18xNDAiLCJwX18xMzUiLCJ2ZWNfXzEzNiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZXhpc3RlbnRpYWwtcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3dpbGRjYXJkLW9yLWV4aXN0ZW50aWFsPyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvY29uc3RydWN0b3JzLWFib3ZlPyIsImNsanMuY29yZS9jb21wIiwiY2xqcy5jb3JlL3Rha2UiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3BhdHRlcm4tc2NvcmUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3VzZWZ1bC1tYXRyaXgiLCJpdGVyX18xMTk2NV9fYXV0b19fIiwic19fMTQ1IiwiY2xqcy5jb3JlL0xhenlTZXEiLCJ0ZW1wX185NTIyX19hdXRvX18iLCJ4c19fOTQ4NF9fYXV0b19fIiwiaXRlcnlzX18xMTk1M19fYXV0b19fIiwic19fMTQ3IiwiY2xqcy5jb3JlL2NodW5rZWQtc2VxPyIsImNfXzExOTYxX19hdXRvX18iLCJzaXplX18xMTk2NF9fYXV0b19fIiwiYl9fMTQ5IiwiY2xqcy5jb3JlL2NodW5rLWJ1ZmZlciIsImlfXzE0OCIsImNsanMuY29yZS9jaHVuay1hcHBlbmQiLCJjbGpzLmNvcmUvY2h1bmstY29ucyIsImNsanMuY29yZS9jaHVuayIsIml0ZXJfXzE0NiIsImNsanMuY29yZS9jaHVuay1yZXN0IiwiY2xqcy5jb3JlL2NvbnMiLCJjbGpzLmNvcmUvcmVzdCIsImZzX18xMTk1NF9fYXV0b19fIiwiaXRlcl9fMTQ0IiwiY2xqcy5jb3JlL3JhbmdlIiwiY2xqcy5jb3JlL3BhcnRpdGlvbiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbmVjZXNzYXJ5LWNvbHVtbiIsImNsanMuY29yZS9tYXAtaW5kZXhlZCIsInBfXzE1MiIsInBfXzE1MyIsInZlY19fMTU0IiwidmVjX18xNTciLCJzY29yZSIsImN1cnIiLCJvY29sIiwib3Njb3JlIiwiY2FuZCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc2VsZWN0IiwiR19fMTYxIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplIiwibWF0cml4IiwiY2xqcy5jb3JlL2ZmaXJzdCIsImNsanMuY29yZS5tYXRjaC5wcm90b2NvbHMvSVNwZWNpYWxpemVNYXRyaXgiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL3NwZWNpYWxpemUtbWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9kZWZhdWx0LXNwZWNpYWxpemUtbWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9wc2V1ZG8tcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3BzZXVkby1wYXR0ZXJucyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvY29sdW1uLXNwbGl0dGVyIiwidmVjX18xNjUiLCJ0b3AiLCJib3R0b20iLCJwMV9fMyMiLCJjbGpzLmNvcmUvc3BsaXQtd2l0aCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvcmV0dXJuLXNwbGl0IiwiUyIsIkQiLCJjbGpzLmNvcmUvcGVlayIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbWF0cml4LXNwbGl0dGVyIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9wYXR0ZXJuLW1hdHJpeCIsImNsanMuY29yZS9kcm9wIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9ncm91cC1yb3dzIiwiY3MiLCJyZXMiLCJ2ZWNfXzE2OCIsImMnIiwiY2xqcy5jb3JlL3BvcCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvbm9uLWxvY2FsLWxpdGVyYWwtcGF0dGVybj8iLCJhbmRfXzEwMDkxX19hdXRvX18iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2xpdGVyYWwtcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2xpdGVyYWwtY2FzZS1tYXRyaXgtc3BsaXR0ZXIiLCJscm93cyIsImxpdHMiLCJ2ZWNfXzE3NCIsInBfXzE3NyIsInZlY19fMTc4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9kZWZhdWx0LWNhc2UiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2NvbXBpbGUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2Nhc2VzIiwicF9fMTg0IiwidmVjX18xODUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2V4cHJlc3Npb24/IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9iaW5kLXZhcmlhYmxlcyIsImNsanMuY29yZS9ub3Q9IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9yb290LWJpbmQtbm9kZSIsImNsanMuY29yZS9zb21lIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9lbXB0eS1yb3dzLWNhc2UiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2ZpcnN0LXJvdy1lbXB0eS1jYXNlIiwiYnMiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2ZpcnN0LXJvdy13aWxkY2FyZHMtY2FzZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZXhwYW5kLW1hdHJpeCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc3BsaXQtbWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9maXJzdC1jb2x1bW4tY2hvc2VuLWNhc2UiLCJ2ZWNfXzE4OSIsImV4cGFuZGVkIiwic3BsaXQiLCJuZXctc3RhY2siLCJjbGpzLmNvcmUvbGFzdCIsIipiYWNrdHJhY2stc3RhY2sqLW9yaWctdmFsX18xOTIiLCIqYmFja3RyYWNrLXN0YWNrKi10ZW1wLXZhbF9fMTkzIiwiKmJhY2t0cmFjay1zdGFjayotb3JpZy12YWxfXzE5NCIsIipiYWNrdHJhY2stc3RhY2sqLXRlbXAtdmFsX18xOTUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL290aGVyLWNvbHVtbi1jaG9zZW4tY2FzZSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvY2hvb3NlLWNvbHVtbiIsInBfXzE5NiIsIm1hcF9fMTk3IiwiKnJvb3QqLW9yaWctdmFsX18xOTkiLCIqcm9vdCotdGVtcC12YWxfXzIwMCIsImsyMDIiLCJHX18yMDYiLCJwX18yMDciLCJ2ZWNfXzIwOCIsIkdfXzIwMSIsInRoaXMyMDMiLCJvdGhlcjIwNCIsInByZWRfXzIxMSIsImV4cHJfXzIxMiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvUGF0dGVybk1hdHJpeCIsIkdfXzIwNSIsIkdfXzIxNCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvLT5QYXR0ZXJuTWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9tYXAtPlBhdHRlcm5NYXRyaXgiLCJucm93cyIsInAxX180IyIsImlkeCIsInAxX181IyIsImZvY3IiLCJwMV9fNiMiLCJub2NycyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvV2lsZGNhcmRQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8tPldpbGRjYXJkUGF0dGVybiIsIm5hbWVkIiwiX21ldGEiLCJuZXctbWV0YSIsIkdfXzIxNiIsIkdfXzIxOSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvd2lsZGNhcmQtcGF0dGVybiIsImNsanMuY29yZS9nZW5zeW0iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL0xpdGVyYWxQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8tPkxpdGVyYWxQYXR0ZXJuIiwibCIsImNsanMuY29yZS9wci1zdHIiLCJHX18yMjEiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2xpdGVyYWwtcGF0dGVybiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1yZXN0LXJvdyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc2VxLXBhdHRlcm4/IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplLXNlcS1wYXR0ZXJuLXJlc3QtbWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zZXEtcGF0dGVybi1tYXRyaXgtcmVzdC1vY3JzIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplLXNlcS1wYXR0ZXJuLXJvdyIsInZlY19fMjIzIiwiaCIsInZlY19fMjI2Iiwic2VxX18yMjciLCJmaXJzdF9fMjI4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9yZXN0LXBhdHRlcm4/IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zZXEtcGF0dGVybiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1tYXRyaXgiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3NlcS1wYXR0ZXJuLW1hdHJpeC1vY3JzIiwic2VxLXN5bSIsInN5bS1tZXRhIiwiaHN5bSIsImNsanMuY29yZS9uYW1lIiwiY2xqcy5jb3JlL3dpdGgtbWV0YSIsInRzeW0iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL1NlcVBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zLy0+U2VxUGF0dGVybiIsInMiLCJHX18yMjkiLCJrMjMyIiwiR19fMjM2IiwicF9fMjM3IiwidmVjX18yMzgiLCJHX18yMzEiLCJ0aGlzMjMzIiwib3RoZXIyMzQiLCJwcmVkX18yNDEiLCJleHByX18yNDIiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL1Jlc3RQYXR0ZXJuIiwiR19fMjM1IiwiR19fMjQ0IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8tPlJlc3RQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9tYXAtPlJlc3RQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9yZXN0LXBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3NwZWNpYWxpemUtbWFwLWtleS1wYXR0ZXJuLW1hdHJpeCIsInAxX183IyIsInAxX184IyIsImsyNDciLCJHX18yNTEiLCJwX18yNTIiLCJ2ZWNfXzI1MyIsIkdfXzI0NiIsInRoaXMyNDgiLCJvdGhlcjI0OSIsInByZWRfXzI1NiIsImV4cHJfXzI1NyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvTWFwS2V5UGF0dGVybiIsIkdfXzI1MCIsIkdfXzI1OSIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvLT5NYXBLZXlQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9tYXAtPk1hcEtleVBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hcC1rZXktcGF0dGVybiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbWFwLWtleS1wYXR0ZXJuPyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvcm93LWtleXMiLCJlbnYiLCJvbmx5IiwiY2xqcy5jb3JlL3NldCIsImNsanMuY29yZS9rZXlzIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9nZXQtYWxsLWtleXMiLCJwMV9fOSMiLCJjbG9qdXJlLnNldC91bmlvbiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvd3JhcC12YWx1ZXMiLCJwX18yNjEiLCJ2ZWNfXzI2MiIsInBfXzI2NSIsIm1hcF9fMjY2IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9nZXQtb2NyLW1hcCIsImFsbC1rZXlzIiwid2MtbWFwIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9tYXAtcGF0dGVybj8iLCJjbGpzLmNvcmUvbWVyZ2UiLCJjbGpzLmNvcmUvemlwbWFwIiwiY2xqcy5jb3JlL3JlcGVhdCIsInBfXzI2OCIsIm1hcF9fMjY5IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplLW1hcC1wYXR0ZXJuLXJvdyIsIm9ubHk/Iiwib2NyLW1hcCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZ3VhcmQtcGF0dGVybiIsImNsanMuY29yZS9oYXNoLXNldCIsImNsanMuY29yZS9yZXZlcnNlIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplLW1hcC1wYXR0ZXJuLW1hdHJpeCIsInAxX18xMCMiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2dlbi1tYXAtcGF0dGVybi1vY3IiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hcC1wYXR0ZXJuLW1hdHJpeC1vY3Itc3ltIiwiY2xqcy5jb3JlL2dldC1pbiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbWFwLXBhdHRlcm4tbWF0cml4LW9jcnMiLCJtb2NycyIsInAxX18xMSMiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL01hcFBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zLy0+TWFwUGF0dGVybiIsIkdfXzI3MSIsImVudiciLCJjbGpzLmNvcmUvcmVwZWF0ZWRseSIsInAxX18xMiMiLCJHX18yNzQiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hcC1wYXR0ZXJuIiwiY2xqcy5jb3JlL21hcD8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2NhbGMtcmVzdD8tYW5kLW1pbi1zaXplIiwicF9fMjc2IiwicF9fMjc3IiwidmVjX18yNzgiLCJ2ZWNfXzI4MSIsInNlcV9fMjgyIiwiZmlyc3RfXzI4MyIsInJlc3Q/IiwibWluLXNpemUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3ZlY3Rvci1wYXR0ZXJuPyIsInhfXzEwNjc2X19hdXRvX18iLCJ5X18xMDY3N19fYXV0b19fIiwicF9fMjg0IiwibWFwX18yODUiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3NwZWNpYWxpemUtdmVjdG9yLXBhdHRlcm4tcm93IiwiY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scy9zcGxpdCIsInBfXzI4NyIsIm1hcF9fMjg4IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplLXZlY3Rvci1wYXR0ZXJuLXJvdy1ub24tcmVzdCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1tYXRyaXgiLCJwMV9fMTMjIiwicDFfXzE0IyIsInBfXzI5MCIsIm1hcF9fMjkxIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy92ZWN0b3ItcGF0dGVybi1vY3Itc3ltIiwicGF0IiwidGFnIiwicF9fMjkzIiwibWFwX18yOTQiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3ZlY3Rvci1wYXR0ZXJuLW1hdHJpeC1vY3JzIiwib2NyLW1ldGEiLCJ2bC1vY3IiLCJ2ci1vY3IiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2FycmF5LXRhZyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvVmVjdG9yUGF0dGVybiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvLT5WZWN0b3JQYXR0ZXJuIiwicDFfXzE1IyIsIkdfXzI5NiIsImx2IiwicnYiLCJwbCIsInByIiwicnZjIiwidmVjX18yOTciLCJHX18zMDIiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3ZlY3Rvci1wYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplLW9yLXBhdHRlcm4tcm93IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9zcGVjaWFsaXplLW9yLXBhdHRlcm4tbWF0cml4IiwicDFfXzE2IyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvT3JQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8tPk9yUGF0dGVybiIsIkdfXzMwNCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvb3ItcGF0dGVybiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3Mvb3ItcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3NwZWNpYWxpemUtZ3VhcmQtcGF0dGVybi1tYXRyaXgiLCJwX18zMDYiLCJ2ZWNfXzMwNyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZ3VhcmQtcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL0d1YXJkUGF0dGVybiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvLT5HdWFyZFBhdHRlcm4iLCJncyIsIkdfXzMxMCIsImV4cHIiLCJjbGpzLmNvcmUvc2V0PyIsInBfXzMxMiIsInZlY19fMzEzIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9hcHAtcGF0dGVybi1tYXRyaXgtb2NycyIsImZvcm0iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3NwZWNpYWxpemUtYXBwLXBhdHRlcm4tbWF0cml4IiwidmVjX18zMTYiLCJtYXRjaGVkLXJvd3MiLCJyZXN0LXJvd3MiLCJwX18zMTkiLCJ2ZWNfXzMyMCIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvYXBwLXBhdHRlcm4/IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9BcHBQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy8tPkFwcFBhdHRlcm4iLCJHX18zMjMiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2FwcC1wYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9wcmVkcyIsInJldF9fMTI2OThfX2F1dG9fXyIsIkdfXzMyNiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZGVmcHJlZCIsIiZmb3JtIiwiJmVudiIsIm5hbWUiLCJjbGpzLmNvcmUvc3dhcCEiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3NwZWNpYWxpemUtcHJlZGljYXRlLXBhdHRlcm4tbWF0cml4IiwicF9fMzI5IiwidmVjX18zMzAiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3ByZWRpY2F0ZS1wYXR0ZXJuPyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvUHJlZGljYXRlUGF0dGVybiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvLT5QcmVkaWNhdGVQYXR0ZXJuIiwiR19fMzMzIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9wcmVkaWNhdGUtcGF0dGVybiIsImpzL2NsanMuY29yZS5tYXRjaCRtYWNyb3MudG8tc291cmNlIiwianMvY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy5lbWl0LXBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2VtaXQtcGF0dGVybiIsImNsanMuY29yZS5tYXRjaC5wcm90b2NvbHMvc3ludGF4LXRhZyIsImdvb2cub2JqZWN0L3NldCIsImNsanMuY29yZS5tYXRjaC5wcm90b2NvbHMvSVN5bnRheFRhZyIsImNsanMuY29yZS9Db25zIiwiY2xqcy5jb3JlL1BlcnNpc3RlbnRIYXNoTWFwIiwiY2xqcy5jb3JlL1BlcnNpc3RlbnRBcnJheU1hcCIsIkdfXzMzNiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZW1pdC1wYXR0ZXJucyIsImNsanMuY29yZS9zZWNvbmQiLCJycCIsImNsanMuY29yZS9ubmV4dCIsInBfXzM0NCIsInZlY19fMzQ1IiwiY2xqcy5jb3JlL25pbD8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2VtaXQtcGF0dGVybi1mb3Itc3ludGF4IiwianMvY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy5lbWl0LXBhdHRlcm4tZm9yLXN5bnRheCIsInBfXzM0OCIsInZlY19fMzQ5IiwicF9fMzUyIiwidmVjX18zNTMiLCJwX18zNTYiLCJ2ZWNfXzM1NyIsInBfXzM2MCIsInZlY19fMzYxIiwiY2xqcy5jb3JlL3N5bWJvbD8iLCJwMV9fMTcjIiwicF9fMzY0IiwidmVjX18zNjUiLCJwX18zNjgiLCJ2ZWNfXzM2OSIsIm9mZnNldC1rZXkiLCJwX18zNzIiLCJ2ZWNfXzM3MyIsInBfXzM3NiIsInZlY19fMzc3IiwicDFfXzE4IyIsInAxX18xOSMiLCJwMV9fMjAjIiwidm9pZCIsInZvaWQ/IiwiaW5maXgta2V5d29yZD8iLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3JlZ3JvdXAta2V5d29yZHMiLCJwX18zODIiLCJ2ZWNfXzM4MyIsInJlc3VsdCIsInEiLCJjbGpzLmNvcmUvc2VxPyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZ3JvdXAta2V5d29yZHMiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL3RvLXBhdHRlcm4tcm93IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy93aWxkY2FyZHMtYW5kLWR1cGxpY2F0ZXMiLCJwYXR0ZXJucyIsInJlbWFpbmluZyIsInNlZW4iLCJkdXBzIiwicGF0cyIsImNsanMuY29yZS92YWxzIiwid2RzIiwiY2xqcy5jb3JlL2xpc3QiLCJjbGpzLmNvcmUvdGFrZS1udGgiLCJtc2VlbiIsImNsb2p1cmUuc2V0L2ludGVyc2VjdGlvbiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZmluZC1kdXBsaWNhdGUtd2lsZGNhcmRzIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9jaGVjay1wYXR0ZXJuIiwidmFycyIsIm52YXJzIiwicm93bnVtIiwiY2xqcy5jb3JlL2xpc3Q/IiwiZHVwbGljYXRlcyIsImNsanMuY29yZS9zdHIiLCJjbGpzLmNvcmUvaW50ZXJwb3NlIiwiY2xqcy5jb3JlL3NvcnQiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL2NoZWNrLW1hdHJpeC1hcmdzIiwiY2xzIiwic2VxX180MTkiLCJjaHVua19fNDIwIiwiY291bnRfXzQyMSIsImlfXzQyMiIsInZlY19fNDM1IiwidmVjX180MzgiLCJjX18xMjEyMl9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rLWZpcnN0IiwidmVjX180NDEiLCJ2ZWNfXzQ0NCIsImNsanMuY29yZS9idXRsYXN0IiwidmVjX180NDciLCJjbGpzLmNvcmUvb2RkPyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvcHJvY2Vzcy12YXJzIiwidmFyIiwibnN5bSIsInByb2Nlc3MtdmFyIiwiR19fNDg2IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9lbWl0LW1hdHJpeCIsInZzIiwidmVjX180ODciLCJsYXN0LW1hdGNoIiwicDFfXzIxIyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvZXhlY3V0YWJsZS1mb3JtIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9yZWN1ci1wcmVzZW50PyIsImFjdGlvbnMiLCJjbGpzLmNvcmUvZmxhdHRlbiIsImFuYWx5emUtYWN0aW9uIiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9jbGotZm9ybSIsInJlY3VyLXByZXNlbnQ/IiwiKnJlY3VyLXByZXNlbnQqLW9yaWctdmFsX180OTEiLCIqcmVjdXItcHJlc2VudCotdGVtcC12YWxfXzQ5MiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbWF0Y2giLCJzZXE0OTMiLCJHX180OTQiLCJHX180OTUiLCJHX180OTYiLCJ2ZWNfXzQ5NyIsInBfXzUwMCIsInZlY19fNTAxIiwiKmxpbmUqLW9yaWctdmFsX181MDQiLCIqbG9jYWxzKi1vcmlnLXZhbF9fNTA1IiwiKndhcm5lZCotb3JpZy12YWxfXzUwNiIsIipsaW5lKi10ZW1wLXZhbF9fNTA3IiwiKmxvY2FscyotdGVtcC12YWxfXzUwOCIsIip3YXJuZWQqLXRlbXAtdmFsX181MDkiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hdGNodiIsInNlcTUxNCIsIkdfXzUxNSIsIkdfXzUxNiIsIkdfXzUxNyIsIkdfXzUxOCIsInR5cGUiLCIqdmVjdG9yLXR5cGUqLW9yaWctdmFsX181MTkiLCIqbGluZSotb3JpZy12YWxfXzUyMCIsIipsb2NhbHMqLW9yaWctdmFsX181MjEiLCIqd2FybmVkKi1vcmlnLXZhbF9fNTIyIiwiKnZlY3Rvci10eXBlKi10ZW1wLXZhbF9fNTIzIiwiKmxpbmUqLXRlbXAtdmFsX181MjQiLCIqbG9jYWxzKi10ZW1wLXZhbF9fNTI1IiwiKndhcm5lZCotdGVtcC12YWxfXzUyNiIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvbWF0Y2htIiwic2VxNTMxIiwiR19fNTMyIiwiR19fNTMzIiwiR19fNTM0IiwidmVjX181MzUiLCJwX181MzgiLCJ2ZWNfXzUzOSIsIiptYXRjaC1sb29rdXAqLW9yaWctdmFsX181NDIiLCIqbGluZSotb3JpZy12YWxfXzU0MyIsIipsb2NhbHMqLW9yaWctdmFsX181NDQiLCIqd2FybmVkKi1vcmlnLXZhbF9fNTQ1IiwiKm1hdGNoLWxvb2t1cCotdGVtcC12YWxfXzU0NiIsIipsaW5lKi10ZW1wLXZhbF9fNTQ3IiwiKmxvY2FscyotdGVtcC12YWxfXzU0OCIsIip3YXJuZWQqLXRlbXAtdmFsX181NDkiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hdGNoLWxldCIsInNlcTU1NCIsIkdfXzU1NSIsIkdfXzU1NiIsIkdfXzU1NyIsImJpbmR2YXJzIyIsImNsanMuY29yZS5tYXRjaCRtYWNyb3MvYXNldHMiLCJzZXE1NjMiLCJHX181NjQiLCJHX181NjUiLCJHX181NjYiLCJ2ZWNfXzU2NyIsInBfXzU3MCIsInZlY19fNTcxIiwiKmxpbmUqLW9yaWctdmFsX181NzQiLCIqbG9jYWxzKi1vcmlnLXZhbF9fNTc1IiwiKndhcm5lZCotb3JpZy12YWxfXzU3NiIsIipsaW5lKi10ZW1wLXZhbF9fNTc3IiwiKmxvY2FscyotdGVtcC12YWxfXzU3OCIsIip3YXJuZWQqLXRlbXAtdmFsX181NzkiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hdGNoKiIsInNlcTU4NCIsIkdfXzU4NSIsIkdfXzU4NiIsIkdfXzU4NyIsInZlY19fNTg4IiwicF9fNTkxIiwidmVjX181OTIiLCIqbGluZSotb3JpZy12YWxfXzU5NSIsIipsb2NhbHMqLW9yaWctdmFsX181OTYiLCIqd2FybmVkKi1vcmlnLXZhbF9fNTk3IiwiKm5vLWJhY2t0cmFjayotb3JpZy12YWxfXzU5OCIsIipsaW5lKi10ZW1wLXZhbF9fNTk5IiwiKmxvY2FscyotdGVtcC12YWxfXzYwMCIsIip3YXJuZWQqLXRlbXAtdmFsX182MDEiLCIqbm8tYmFja3RyYWNrKi10ZW1wLXZhbF9fNjAyIiwic2VxNjA3IiwiR19fNjA4IiwiR19fNjA5IiwiR19fNjEwIiwiR19fNjExIiwiKnZlY3Rvci10eXBlKi1vcmlnLXZhbF9fNjEyIiwiKmxpbmUqLW9yaWctdmFsX182MTMiLCIqbG9jYWxzKi1vcmlnLXZhbF9fNjE0IiwiKndhcm5lZCotb3JpZy12YWxfXzYxNSIsIip2ZWN0b3ItdHlwZSotdGVtcC12YWxfXzYxNiIsIipsaW5lKi10ZW1wLXZhbF9fNjE3IiwiKmxvY2FscyotdGVtcC12YWxfXzYxOCIsIip3YXJuZWQqLXRlbXAtdmFsX182MTkiLCJjbGpzLmNvcmUubWF0Y2gkbWFjcm9zL21hdGNodioiLCJzZXE2MjQiLCJHX182MjUiLCJHX182MjYiLCJHX182MjciLCJHX182MjgiLCIqdmVjdG9yLXR5cGUqLW9yaWctdmFsX182MjkiLCIqbGluZSotb3JpZy12YWxfXzYzMCIsIipsb2NhbHMqLW9yaWctdmFsX182MzEiLCIqd2FybmVkKi1vcmlnLXZhbF9fNjMyIiwiKm5vLWJhY2t0cmFjayotb3JpZy12YWxfXzYzMyIsIip2ZWN0b3ItdHlwZSotdGVtcC12YWxfXzYzNCIsIipsaW5lKi10ZW1wLXZhbF9fNjM1IiwiKmxvY2FscyotdGVtcC12YWxfXzYzNiIsIip3YXJuZWQqLXRlbXAtdmFsX182MzciLCIqbm8tYmFja3RyYWNrKi10ZW1wLXZhbF9fNjM4Iiwic2VxNjQzIiwiR19fNjQ0IiwiR19fNjQ1IiwiR19fNjQ2IiwidmVjX182NDciLCJwX182NTAiLCJ2ZWNfXzY1MSIsIipsaW5lKi1vcmlnLXZhbF9fNjU0IiwiKmxvY2Fscyotb3JpZy12YWxfXzY1NSIsIip3YXJuZWQqLW9yaWctdmFsX182NTYiLCIqbGluZSotdGVtcC12YWxfXzY1NyIsIipsb2NhbHMqLXRlbXAtdmFsX182NTgiLCIqd2FybmVkKi10ZW1wLXZhbF9fNjU5Iiwic2VxNjY0IiwiR19fNjY1IiwiR19fNjY2IiwiR19fNjY3IiwiY2xqcy5jb3JlLm1hdGNoJG1hY3Jvcy9tYXRjaC1sZXQqIiwic2VxNjcyIiwiR19fNjczIiwiR19fNjc0IiwiR19fNjc1IiwiY2xqcy5jb3JlL0luZGV4ZWRTZXEiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIGNsanMuY29yZS5tYXRjaFxuICAoOnJlZmVyLWNsb2p1cmUgOmV4Y2x1ZGUgW2NvbXBpbGVdKVxuICAjP0AoOmNsaiAoKDp1c2UgW2Nsb2p1cmUuY29yZS5tYXRjaC5wcm90b2NvbHNdKVxuICAgICAgICAgICAgKDpyZXF1aXJlIFtjbG9qdXJlLnNldCA6YXMgc2V0XVxuICAgICAgICAgICAgICAgICAgICAgIFtjbG9qdXJlLnRvb2xzLmFuYWx5emVyIDphcyBhbmFdXG4gICAgICAgICAgICAgICAgICAgICAgW2Nsb2p1cmUudG9vbHMuYW5hbHl6ZXIuanZtIDphcyBhbmEtanZtXVxuICAgICAgICAgICAgICAgICAgICAgIFtjbG9qdXJlLnRvb2xzLmFuYWx5emVyLnBhc3Nlcy5qdm0uYW5ub3RhdGUtbG9vcHMgOmFzIGxvb3BzXSlcbiAgICAgICAgICAgICg6aW1wb3J0IFtqYXZhLmlvIFdyaXRlcl1cbiAgICAgICAgICAgICAgICAgICAgIFtjbG9qdXJlLmNvcmUubWF0Y2gucHJvdG9jb2xzIElFeGlzdGVudGlhbFBhdHRlcm4gSVBzZXVkb1BhdHRlcm5dKSlcbiAgOmNsanMgKCg6cmVxdWlyZS1tYWNyb3MgW2NsanMuY29yZS5tYXRjaF0pXG4gICAgICAgICAoOnJlcXVpcmUgW2Nsb2p1cmUuc2V0IDphcyBzZXRdXG4gICAgICAgICAgICAgICAgICAgW2NsanMuY29yZSA6cmVmZXIgW1N1YnZlYyBTeW1ib2wgUGVyc2lzdGVudEhhc2hNYXAgUGVyc2lzdGVudFZlY3RvciBJTG9va3VwIElBc3NvY2lhdGl2ZSBJSW5kZXhlZCBDb25zIExpc3QgUGVyc2lzdGVudEFycmF5TWFwIElOZXh0IElTZXFhYmxlIElDb3VudGVkIElXaXRoTWV0YSBJTWV0YSBJRm4gSUNvbGxlY3Rpb24gSVNlcXVlbnRpYWwgSUVxdWl2XV1cbiAgICAgICAgICAgICAgICAgICBbY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scyA6cmVmZXIgW0lQYXR0ZXJuQ29tcGlsZSBJQ29udGFpbnNSZXN0UGF0dGVybiBJVmVjdG9yUGF0dGVybiBJU3ludGF4VGFnIElTcGVjaWFsaXplTWF0cml4IElOb2RlQ29tcGlsZSBJTWF0Y2hMb29rdXAgSUV4aXN0ZW50aWFsUGF0dGVybiBJUHNldWRvUGF0dGVybiBJVmVjTW9kIHZhbC1hdCBwcmVwZW5kIGRyb3AtbnRoIHN3YXAgbi10by1jbGogdG8tc291cmNlKiBzcGVjaWFsaXplLW1hdHJpeCBzcGxpdCBzeW50YXgtdGFnXV0pKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIEludHJvZHVjdGlvblxuOztcbjs7IFRoaXMgbmFtZXNwYWNlIGNvbnRhaW5zIGFuIGltcGxlbWVudGF0aW9uIG9mIGNsb3NlZCBwYXR0ZXJuXG47OyBtYXRjaGluZy4gSXQgdXNlcyBhbiBhbGdvcml0aG0gYmFzZWQgb24gTHVjIE1hcmFuZ2V0J3MgcGFwZXJcbjs7IFwiQ29tcGlsaW5nIFBhdHRlcm4gTWF0Y2hpbmcgdG8gR29vZCBEZWNpc2lvbiBUcmVlc1wiLlxuOztcbjs7IFRoZXJlIGFyZSB0aHJlZSBtYWluIHN0ZXBzIHRvIHRoaXMgaW1wbGVtZW50YXRpb246XG47O1xuOzsgMS4gKkNvbnZlcnRpbmcgQ2xvanVyZSBzeW50YXggdG8gYSBQYXR0ZXJuIE1hdHJpeCo6XG47OyAgICBUaGUgZnVuY3Rpb24gYGVtaXQtbWF0cml4YCBkb2VzIHRoaXMgd29yay5cbjs7ICAgIEEgUGF0dGVybiBNYXRyaXggaXMgcmVwcmVzZW50ZWQgYnkgUGF0dGVybk1hdHJpeC5cbjs7XG47OyAyLiAqQ29tcGlsaW5nIHRoZSBQYXR0ZXJuIE1hdHJpeCB0byBhIERpcmVjdGVkIEFjeWNsaWMgR3JhcGgqOlxuOzsgICAgVGhlIGZ1bmN0aW9uIGBjb21waWxlYCBkb2VzIHRoaXMgd29yay4gVGhpcyBzdGVwXG47OyAgICBpcyB3aGVyZSBNYXJhbmdldCdzIGFsZ29yaXRobSBpcyBpbXBsZW1lbnRlZC5cbjs7XG47OyAzLiAqQ29udmVydGluZyB0aGUgREFHIHRvIENsb2p1cmUgY29kZSo6XG47OyAgICBUaGlzIGlzIG1vc3RseSBhIDEtMSBjb252ZXJzaW9uLiBTZWUgZnVuY3Rpb24gYGV4ZWN1dGFibGUtZm9ybWAuXG47O1xuXG47OyAjIE5vbWVuY2xhdHVyZVxuOztcbjs7ICogeCBhbmQgeSBhcmUgY2FsbGVkIF9vY2N1cnJlbmNlc19cbjs7ICogMSwgMiwgMyBhbmQgNCBhcmUgX3BhdHRlcm5zX1xuOzsgKiBbMSAyXSBhbmQgWzMgNF0gYXJlIF9wYXR0ZXJuIHJvd3NfXG47OyAqIDphMCBhbmQgOmExIGFyZSBfYWN0aW9uc19cbjs7IFxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBEZWJ1Z2dpbmcgdG9vbHNcbjs7XG47OyBUaGVzZSBkZWJ1Z2dpbmcgYWlkcyBhcmUgbW9zdCB1c2VmdWwgaW4gc3RlcHMgMiBhbmQgMyBvZiBjb21waWxhdGlvbi5cbjs7XG5cbjs7IFRPRE8gYWxsb3cgdGhlc2UgdG8gYmUgc2V0IGR5bmFtaWNhbGx5LCBhdCBtYWNyby1leHBhbmQgdGltZS5cbjs7IE1heWJlIG1hdGNoIG1hY3JvcyBjb3VsZCB0YWtlIGV4dHJhIG1ldGFkYXRhPyAtIEFtYnJvc2VcbihkZWYgXns6ZHluYW1pYyB0cnVlXG4gICAgICAgOmRvYyBcIkVuYWJsZSBzeW50YXggY2hlY2sgb2YgbWF0Y2ggbWFjcm9zXCJ9IFxuICAqc3ludGF4LWNoZWNrKiAoYXRvbSB0cnVlKSlcblxuKGRlZiBeezpkeW5hbWljIHRydWV9ICpsaW5lKilcbihkZWYgXns6ZHluYW1pYyB0cnVlfSAqbG9jYWxzKiBuaWwpXG4oZGVmIF57OmR5bmFtaWMgdHJ1ZX0gKndhcm5lZCopXG5cbihkZWYgXns6ZHluYW1pYyB0cnVlXG4gICAgICAgOmRvYyBcIkFsbG93IG1hcCBtYXRjaGluZyBzeW50YXggdG8gY2hlY2sgZm9yIElNYXRjaExvb2t1cFwifVxuICAqbWF0Y2gtbG9va3VwKiBmYWxzZSlcblxuKGRlZiBeezpkeW5hbWljIHRydWVcbiAgICAgICA6ZG9jIFwiRGVmYXVsdCB2ZWN0b3IgdHlwZS4gQ2FuIGJlIHJlYm91bmQgYWxsb3dpbmcgZW1pc3Npb24gb2ZcbiAgICAgICAgICAgICBjdXN0b20gaW5saW5lIGNvZGUgZm9yIHZlY3RvciBwYXR0ZXJucywgZm9yIGV4YW1wbGVcbiAgICAgICAgICAgICB0eXBlLWhpbnRlZCBwcmltaXRpdmUgYXJyYXkgb3BlcmF0aW9uc1wifVxuICAqdmVjdG9yLXR5cGUqIDo6dmVjdG9yKVxuXG4oZGVmIF57OmR5bmFtaWMgdHJ1ZVxuICAgICAgIDpkb2MgXCJJbiB0aGUgcHJlc2VuY2Ugb2YgcmVjdXIgd2UgY2Fubm90IGFwcGx5IGNvZGUgc2l6ZSBvcHRpbWl6YXRpb25zXCJ9XG4gICpyZWN1ci1wcmVzZW50KiBmYWxzZSlcblxuKGRlZiBeezpkeW5hbWljIHRydWVcbiAgICAgICA6ZG9jIFwiRmxhZyB0byBvcHRpbWl6ZSBwZXJmb3JtYW5jZSBvdmVyIGNvZGUgc2l6ZS5cIn1cbiAgKm5vLWJhY2t0cmFjayogZmFsc2UpXG5cbihkZWYgXns6ZG9jIFwiUHJlLWFsbG9jYXRlZCBleGNlcHRpb24gdXNlZCBmb3IgYmFja3RyYWNpbmdcIn1cbiAgYmFja3RyYWNrICM/KDpjbGogKEV4Y2VwdGlvbi4gXCJDb3VsZCBub3QgZmluZCBtYXRjaC5cIilcbiAgICAgICAgICAgICAgIDpjbGpzIChqcy9FcnJvci4gXCJDb3VsZCBub3QgZmluZCBtYXRjaC5cIikpKVxuXG4oZGVmbiBiYWNrdHJhY2stZXhwciBbXVxuICAjPyg6Y2xqc1xuICAgIGAodGhyb3cgY2xqcy5jb3JlLm1hdGNoL2JhY2t0cmFjaylcbiAgICAgOmNsalxuICAgIGAodGhyb3cgY2xvanVyZS5jb3JlLm1hdGNoL2JhY2t0cmFjaykpKVxuXG4oZGVmbiBiYWNrdHJhY2stc3ltIFtdXG4gICM/KDpjbGpzXG4gICAgJ2NsanMuY29yZS5tYXRjaC9iYWNrdHJhY2tcbiAgICAgOmNsalxuICAgICdjbG9qdXJlLmNvcmUubWF0Y2gvYmFja3RyYWNrKSlcblxuKGRlZiBeezpkeW5hbWljIHRydWV9ICpiYWNrdHJhY2stc3RhY2sqICgpKVxuKGRlZiBeezpkeW5hbWljIHRydWV9ICpyb290KiB0cnVlKVxuXG4oZGVmbiB3YXJuIFttc2ddXG4gICh3aGVuIChub3QgQCp3YXJuZWQqKVxuICAgIChiaW5kaW5nICM/KDpjbGogWypvdXQqICplcnIqXSA6Y2xqcyBbKnByaW50LWZuKiAqcHJpbnQtZXJyLWZuKl0pXG4gICAgICAocHJpbnRsbiBcIldBUk5JTkc6XCJcbiAgICAgICAgKHN0ciAqbnMqIFwiLCBsaW5lIFwiICpsaW5lKiBcIjpcIikgXG4gICAgICAgIG1zZykpXG4gICAgKHJlc2V0ISAqd2FybmVkKiB0cnVlKSkpXG5cbiM/KDpjbGpcbihkZWZuIGFuYWx5emUgW2Zvcm0gZW52XVxuICAoYmluZGluZyBbYW5hL21hY3JvZXhwYW5kLTEgYW5hLWp2bS9tYWNyb2V4cGFuZC0xXG4gICAgICAgICAgICBhbmEvY3JlYXRlLXZhciAgICBhbmEtanZtL2NyZWF0ZS12YXJcbiAgICAgICAgICAgIGFuYS9wYXJzZSAgICAgICAgIGFuYS1qdm0vcGFyc2VcbiAgICAgICAgICAgIGFuYS92YXI/ICAgICAgICAgIHZhcj9dXG4gICAgKGFuYS9hbmFseXplIGZvcm0gZW52KSkpKVxuXG4jPyg6Y2xqXG4oZGVmbiBnZXQtbG9vcC1sb2NhbHMgW11cbiAgKGxldCBbTE9PUF9MT0NBTFMgY2xvanVyZS5sYW5nLkNvbXBpbGVyL0xPT1BfTE9DQUxTXVxuICAgIChtYXBjYXRcbiAgICAgIChmbiBbYl1cbiAgICAgICAgKGxldCBbbmFtZSAoLnN5bSBeY2xvanVyZS5sYW5nLkNvbXBpbGVyJExvY2FsQmluZGluZyBiKV1cbiAgICAgICAgICBbbmFtZSBuYW1lXSkpXG4gICAgICAod2hlbiAoYm91bmQ/IExPT1BfTE9DQUxTKVxuICAgICAgICBATE9PUF9MT0NBTFMpKSkpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBNYXAgUGF0dGVybiBJbnRlcm9wXG5cbihleHRlbmQtdHlwZSAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gIElNYXRjaExvb2t1cFxuICAodmFsLWF0IFt0aGlzIGsgbm90LWZvdW5kXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbm90LWZvdW5kKSkpXG5cbiM/KDpjbGpcbihkZWZuIHZhbC1hdCpcbiAgKFttIGtdICh2YWwtYXQgbSBrIDo6bm90LWZvdW5kKSlcbiAgKFttIGsgbm90LWZvdW5kXSAodmFsLWF0IG0gayBub3QtZm91bmQpKSkpXG5cbihkZWZuIHZhbC1hdC1leHByIFsmIGFyZ3NdXG4gICM/KDpjbGpzXG4gICAgYChnZXQgfkBhcmdzKVxuICAgIDs7SWYgbm90IENsb2p1cmVTY3JpcHQsIGRlZmVyIHRvIHZhbC1hdCpcbiAgICA6Y2xqXG4gICAgYChpZiAoaW5zdGFuY2U/IGNsb2p1cmUubGFuZy5JTG9va3VwIH4oZmlyc3QgYXJncykpXG4gICAgICAgKGdldCB+QGFyZ3MpXG4gICAgICAgKHZhbC1hdCogfkBhcmdzKSkpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBWZWN0b3IgUGF0dGVybiBJbnRlcm9wXG47O1xuOzsgVmVjdG9ycyBwYXR0ZXJucyBjYW4gZ2VuZXJhdGUgY29kZSBzcGVjaWFsaXplZCBvbiB0eXBlLiBUaGlzIGlzXG47OyB1c2VmdWwgZm9yIGdlbmVyYXRpbmcgb3B0aW1hbCBjb2RlIGZvciBkYXRhIGxpa2UgcHJpbWl0aXZlIGFycmF5c1xuOzsgYW5kIGJ5dGVzLiBEZWZhdWx0cyBmb3IgdmVjdG9yIGFyZSBwcm92aWRlZCwgc2VlXG47OyBjbG9qdXJlLmNvcmUubWF0Y2guYXJyYXkgYW5kIGNsb2p1cmUuY29yZS5tYXRjaC5iaXRzIGZvclxuOzsgZXhwZXJpbWVudHMgaW52b2x2aW5nIHRoZXNlIHR5cGVzLlxuXG4oZGVmbiB2ZWN0b3ItdHlwZSBbdCAmIHJdIHQpXG5cbihkZWZtdWx0aSBjaGVjay1zaXplPyBpZGVudGl0eSlcbihkZWZtdWx0aSB0YWcgKGZuIFt0XSB0KSlcbihkZWZtdWx0aSB0ZXN0LWlubGluZSB2ZWN0b3ItdHlwZSlcbihkZWZtdWx0aSB0ZXN0LXdpdGgtc2l6ZS1pbmxpbmUgdmVjdG9yLXR5cGUpXG4oZGVmbXVsdGkgdGVzdC13aXRoLW1pbi1zaXplLWlubGluZSB2ZWN0b3ItdHlwZSlcbihkZWZtdWx0aSBjb3VudC1pbmxpbmUgdmVjdG9yLXR5cGUpXG4oZGVmbXVsdGkgbnRoLWlubGluZSB2ZWN0b3ItdHlwZSlcbihkZWZtdWx0aSBudGgtb2Zmc2V0LWlubGluZSB2ZWN0b3ItdHlwZSlcbihkZWZtdWx0aSBzdWJ2ZWMtaW5saW5lIHZlY3Rvci10eXBlKVxuKGRlZm11bHRpIG50aG5leHQtaW5saW5lIHZlY3Rvci10eXBlKVxuXG4oZGVmbWV0aG9kIGNoZWNrLXNpemU/IDpkZWZhdWx0XG4gIFtfXSB0cnVlKVxuXG4oZGVmbWV0aG9kIHRhZyA6ZGVmYXVsdFxuICBbdF0gKHRocm93ICM/KDpjbGogKEV4Y2VwdGlvbi4gKHN0ciBcIk5vIHRhZyBzcGVjaWZpZWQgZm9yIHZlY3RvciBzcGVjaWFsaXphdGlvbiBcIiB0KSlcbiAgICAgICAgICAgICAgICA6Y2xqcyAoanMvRXJyb3IuIChzdHIgXCJObyB0YWcgc3BlY2lmaWVkIGZvciB2ZWN0b3Igc3BlY2lhbGl6YXRpb24gXCIgdCkpKSkpXG5cbihkZWZtZXRob2QgdGFnIDo6dmVjdG9yXG4gIFtfXSAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JUGVyc2lzdGVudFZlY3RvciA6Y2xqcyBQZXJzaXN0ZW50VmVjdG9yKSlcblxuKGRlZm4gd2l0aC10YWcgW3Qgb2NyXVxuICAobGV0IFt0aGUtdGFnICh0YWcgdClcbiAgICAgICAgdGhlLXRhZyAjPyg6Y2xqXG4gICAgICAgICAgICAgICAgICAgIChpZiAoYW5kIChjbGFzcz8gdGhlLXRhZylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKC5pc0FycmF5IF5DbGFzcyB0aGUtdGFnKSlcbiAgICAgICAgICAgICAgICAgICAgICAoLmdldE5hbWUgXkNsYXNzIHRoZS10YWcpXG4gICAgICAgICAgICAgICAgICAgICAgdGhlLXRhZylcbiAgICAgICAgICAgICAgICAgIDpjbGpzIHRoZS10YWcpXTtUT0RPIFllaG9uYXRoYW4gLSB3aGF0IHNob3VsZCBiZSBpbnN0ZWFkIG9mIGBjbGFzcz9gIGZvciBjbGpzP1xuICAgICh2YXJ5LW1ldGEgb2NyIGFzc29jIDp0YWcgdGhlLXRhZykpKVxuXG4oZGVmbWV0aG9kIHRlc3QtaW5saW5lIDo6dmVjdG9yXG4gIFt0IG9jcl1cbiAgKGxldCBbdGhlLXRhZyAodGFnIHQpXG4gICAgICAgIGMgIz8oOmNsalxuICAgICAgICAgICAgICAoY29uZCBcbiAgICAgICAgICAgIChjbGFzcz8gdGhlLXRhZykgdGhlLXRhZ1xuICAgICAgICAgICAgKHN0cmluZz8gdGhlLXRhZykgKENsYXNzL2Zvck5hbWUgdGhlLXRhZylcbiAgICAgICAgICAgIChzeW1ib2w/IHRoZS10YWcpIChDbGFzcy9mb3JOYW1lIChzdHIgdGhlLXRhZykpXG4gICAgICAgICAgICA6ZWxzZSAodGhyb3cgKEVycm9yLiAoc3RyIFwiVW5zdXBwb3J0ZWQgdGFnIHR5cGVcIiB0aGUtdGFnKSkpKVxuICAgICAgICAgICAgOmNsanNcbiAgICAgICAgICAgICAgKGNvbmRcbiAgICAgICAgICAgICAgICAoPSB0aGUtdGFnIFBlcnNpc3RlbnRWZWN0b3IpIHRoZS10YWcgOyBUT0RPIFllaG9uYXRoYW4gLSB3aGF0IHNob3VsZCBiZSBpbnN0ZWFkIG9mIGBjbGFzcz9gIGFuZCBmb3JOYW1lIGZvciBjbGpzP1xuICAgICAgICAgICAgICAgIChzdHJpbmc/IHRoZS10YWcpIHRoZS10YWdcbiAgICAgICAgICAgICAgICAoc3ltYm9sPyB0aGUtdGFnKSAoc3RyICh0aGUtdGFnKSlcbiAgICAgICAgICAgICAgICA6ZWxzZSAodGhyb3cgKGpzL0Vycm9yLiAoc3RyIFwiVW5zdXBwb3J0ZWQgdGFnIHR5cGVcIiB0aGUtdGFnKSkpKSldXG4gICAgKGNvbmRcbiAgICAgICg9IHQgOjp2ZWN0b3IpIGAodmVjdG9yPyB+b2NyKVxuICAgICAgIz9AKDpjbGpzICgoLmlzQXJyYXkgXkNsYXNzIGMpIGAoY2xqcy5jb3JlL2FycmF5PyB+b2NyKSkpXG4gICAgICA6ZWxzZSBgKGluc3RhbmNlPyB+YyB+b2NyKSkpKVxuXG4oZGVmbWV0aG9kIHRlc3Qtd2l0aC1zaXplLWlubGluZSA6OnZlY3RvclxuICBbdCBvY3Igc2l6ZV1cbiAgYChhbmQgfih0ZXN0LWlubGluZSB0IG9jcilcbiAgICAgICAgICg9PSB+KGNvdW50LWlubGluZSB0ICh3aXRoLXRhZyB0IG9jcikpIH5zaXplKSkpXG5cbihkZWZtZXRob2QgdGVzdC13aXRoLW1pbi1zaXplLWlubGluZSA6OnZlY3RvclxuICBbdCBvY3Igc2l6ZV1cbiAgYChhbmQgfih0ZXN0LWlubGluZSB0IG9jcilcbiAgICAgICAgICg+PSB+KGNvdW50LWlubGluZSB0ICh3aXRoLXRhZyB0IG9jcikpIH5zaXplKSkpXG5cbihkZWZtZXRob2QgY291bnQtaW5saW5lIDo6dmVjdG9yXG4gIFtfIG9jcl0gYChjb3VudCB+b2NyKSlcblxuKGRlZm1ldGhvZCBudGgtaW5saW5lIDo6dmVjdG9yXG4gIFtfIG9jciBpXSBgKG50aCB+b2NyIH5pKSlcblxuKGRlZm1ldGhvZCBudGgtb2Zmc2V0LWlubGluZSA6OnZlY3RvclxuICBbdCBvY3IgaSBvZmZzZXRdXG4gIChudGgtaW5saW5lIHQgb2NyIGkpKVxuXG4oZGVmbWV0aG9kIHN1YnZlYy1pbmxpbmUgOjp2ZWN0b3JcbiAgKFtfIG9jciBzdGFydF0gYChzdWJ2ZWMgfm9jciB+c3RhcnQpKVxuICAoW18gb2NyIHN0YXJ0IGVuZF0gYChzdWJ2ZWMgfm9jciB+c3RhcnQgfmVuZCkpKVxuXG4oZGVmbWV0aG9kIG50aG5leHQtaW5saW5lIDo6dmVjdG9yXG4gIChbXyBvY3Igbl0gYChudGhuZXh0IH5vY3Igfm4pKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgRXh0ZW5zaW9uc1xuXG47OyBQYXR0ZXJuIG1hdHJpY2VzIGFyZSByZXByZXNlbnRlZCB3aXRoIHBlcnNpc3RlbnRcbjs7IHZlY3RvcnMuIE9wZXJhdGlvbnMgb24gcGF0dGVybiBtYXRyaWNlcyByZXF1aXJlIHVzIHRvIG1vdmVcbjs7IHNvbWV0aGluZyBmcm9tIHRoZSBtaWRkbGUgb2YgdGhlIHZlY3RvciB0byB0aGUgZnJvbnQgLSB0aHVzIHByZXBlbmRcbjs7IGFuZCBkcm9wLW50aC4gc3dhcCB3aWxsIHN3YXAgdGhlIDB0aCBlbGVtZW50IHdpdGggdGhlIG50aCBlbGVtZW50LlxuXG4oZXh0ZW5kLXR5cGUgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSVBlcnNpc3RlbnRWZWN0b3IgOmNsanMgUGVyc2lzdGVudFZlY3RvcilcbiAgSVZlY01vZFxuICAocHJlcGVuZCBbdGhpcyB4XVxuICAgIChpbnRvIFt4XSB0aGlzKSlcbiAgKGRyb3AtbnRoIFt0aGlzIG5dXG4gICAgKGludG8gKHN1YnZlYyB0aGlzIDAgbilcbiAgICAgICAgICAoc3VidmVjIHRoaXMgKGluYyBuKSAoY291bnQgdGhpcykpKSlcbiAgKHN3YXAgW3RoaXMgbl1cbiAgICAobGV0IFt4IChudGggdGhpcyBuKV1cbiAgICAgIChwcmVwZW5kIChkcm9wLW50aCB0aGlzIG4pIHgpKSkpXG5cbiM/KDpjbGpzXG4oZXh0ZW5kLXR5cGUgU3VidmVjXG4gIElWZWNNb2RcbiAgKHByZXBlbmQgW3RoaXMgeF1cbiAgICAoaW50byBbeF0gdGhpcykpXG4gIChkcm9wLW50aCBbdGhpcyBuXVxuICAgIChpbnRvIChzdWJ2ZWMgdGhpcyAwIG4pXG4gICAgICAgICAgKHN1YnZlYyB0aGlzIChpbmMgbikgKGNvdW50IHRoaXMpKSkpXG4gIChzd2FwIFt0aGlzIG5dXG4gICAgKGxldCBbeCAobnRoIHRoaXMgbildXG4gICAgICAocHJlcGVuZCAoZHJvcC1udGggdGhpcyBuKSB4KSkpKSlcblxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgY29uc3RydWN0b3I/XG5cbihkZWNsYXJlIHdpbGRjYXJkLXBhdHRlcm4/KVxuXG4oZGVmbiBjb25zdHJ1Y3Rvcj8gW3BdXG4gIChub3QgKHdpbGRjYXJkLXBhdHRlcm4/IHApKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgUGF0dGVybiBHcm91cGluZ1xuOztcbjs7IFVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBncm91cGFibGUgY29uc3RydWN0b3JzIGluIGEgY29sdW1uXG5cbihkZWZtdWx0aSBncm91cGFibGU/XG4gIFwiRGV0ZXJtaW5lIGlmIHR3byBwYXR0ZXJucyBtYXkgYmUgZ3JvdXBlZCB0b2dldGhlciBmb3Igc2ltdWx0YW5lb3VzXG4gICB0ZXN0aW5nLlwiXG4gIChmbiBbYSBiXSBbKDo6dGFnIGEpICg6OnRhZyBiKV0pKVxuXG4oZGVmbWV0aG9kIGdyb3VwYWJsZT8gOmRlZmF1bHRcbiAgW2EgYl0gKD0gYSBiKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgUGF0dGVybiBSb3dzXG47O1xuOzsgUGF0dGVybiByb3dzIGFyZSBvbmUgbGluZSBvZiBhIG1hdHJpeC4gVGhleSBjb3JyZXNwb25kIHRvIG9uZVxuOzsgY2xhdXNlIGluIHRoZSBpbiB0aGUgdXNlcidzIG9yaWdpbmFsIHBhdHRlcm4uIHBhdHRlcm5zLCBhY3Rpb24sXG47OyBiaW5kaW5ncyBhcmUgYWNjZXNzb3JzLlxuOzsgXG5cbihkZWNsYXJlIGxlYWYtYmluZC1leHByIG5hbWVkLXdpbGRjYXJkLXBhdHRlcm4/KVxuXG4oZGVmdHlwZSBQYXR0ZXJuUm93IFtwcyBhY3Rpb24gYmluZGluZ3NdXG4gIE9iamVjdFxuICAoZXF1YWxzIFtfIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBQYXR0ZXJuUm93IG90aGVyKVxuICAgICAgICAgKD0gcHMgKDpwcyBvdGhlcikpXG4gICAgICAgICAoPSBhY3Rpb24gKDphY3Rpb24gb3RoZXIpKVxuICAgICAgICAgKD0gYmluZGluZ3MgKDpiaW5kaW5ncyBvdGhlcikpKSlcblxuICBJVmVjTW9kXG4gIChkcm9wLW50aCBbXyBuXVxuICAgIChQYXR0ZXJuUm93LiAoZHJvcC1udGggcHMgbikgYWN0aW9uIGJpbmRpbmdzKSlcblxuICAocHJlcGVuZCBbXyB4XVxuICAgIChQYXR0ZXJuUm93LiAoaW50byBbeF0gcHMpIGFjdGlvbiBiaW5kaW5ncykpXG5cbiAgKHN3YXAgW18gbl1cbiAgICAoUGF0dGVyblJvdy4gKHN3YXAgcHMgbikgYWN0aW9uIGJpbmRpbmdzKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5Bc3NvY2lhdGl2ZSA6Y2xqcyBJQXNzb2NpYXRpdmUpXG4gICgjPyg6Y2xqIGFzc29jIDpjbGpzIC1hc3NvYykgW3RoaXMgayB2XVxuICAgIChQYXR0ZXJuUm93LiAoYXNzb2MgcHMgayB2KSBhY3Rpb24gYmluZGluZ3MpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLkluZGV4ZWQgOmNsanMgSUluZGV4ZWQpXG4gICgjPyg6Y2xqIG50aCA6Y2xqcyAtbnRoKSBbXyBpXVxuICAgIChudGggcHMgaSkpXG4gICgjPyg6Y2xqIG50aCA6Y2xqcyAtbnRoKSBbXyBpIHhdXG4gICAgKG50aCBwcyBpIHgpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklTZXEgOmNsanMgSVNlcSlcbiAgKCM/KDpjbGogZmlyc3QgOmNsanMgLWZpcnN0KSBbX10gKGZpcnN0IHBzKSlcblxuICAjPyg6Y2xqcyBJTmV4dClcbiAgKCM/KDpjbGogbmV4dCA6Y2xqcyAtbmV4dCkgW19dXG4gICAgKGlmLWxldCBbbnBzIChuZXh0IHBzKV1cbiAgICAgIChQYXR0ZXJuUm93LiBucHMgYWN0aW9uIGJpbmRpbmdzKVxuICAgICAgKFBhdHRlcm5Sb3cuIFtdIGFjdGlvbiBiaW5kaW5ncykpKVxuXG4gIDtUT0RPIFllaG9uYXRoYW4gLSBubyBgbW9yZWAgaW4gY2xqcz9cbiAgIz8oOmNsalxuICAobW9yZSBbX11cbiAgICAoaWYgKGVtcHR5PyBwcylcbiAgICAgIG5pbFxuICAgICAgKGxldCBbbnBzIChyZXN0IHBzKV1cbiAgICAgICAgKFBhdHRlcm5Sb3cuIG5wcyBhY3Rpb24gYmluZGluZ3MpKSkpKVxuXG4gICM/KDpjbGpzIElTZXFhYmxlKVxuICAoIz8oOmNsaiBzZXEgOmNsanMgLXNlcSkgW3RoaXNdXG4gICAgKHNlcSBwcykpXG5cbiAgIz8oOmNsanMgSUNvdW50ZWQpXG4gICgjPyg6Y2xqIGNvdW50IDpjbGpzIC1jb3VudClbX11cbiAgICAoY291bnQgcHMpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklMb29rdXAgOmNsanMgSUxvb2t1cClcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMga11cbiAgICAoIz8oOmNsaiAudmFsQXQgOmNsanMgLWxvb2t1cCkgdGhpcyBrIG5pbCkpXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOnBzIHBzXG4gICAgICA6YWN0aW9uIGFjdGlvblxuICAgICAgOmJpbmRpbmdzIGJpbmRpbmdzXG4gICAgICBub3QtZm91bmQpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklGbiA6Y2xqcyBJRm4pXG4gICgjPyg6Y2xqIGludm9rZSA6Y2xqcyAtaW52b2tlKVtfIG5dXG4gICAgKG50aCBwcyBuKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JUGVyc2lzdGVudENvbGxlY3Rpb24gOmNsanMgSUNvbGxlY3Rpb24pXG4gICgjPyg6Y2xqIGNvbnMgOmNsanMgLWNvbmopIFtfIHhdXG4gICAgKFBhdHRlcm5Sb3cuIChjb25qIHBzIHgpIGFjdGlvbiBiaW5kaW5ncykpXG5cbiAgIz8oOmNsanMgSUVxdWl2KVxuICAoIz8oOmNsaiBlcXVpdiA6Y2xqcyAtZXF1aXYpIFt0aGlzIG90aGVyXVxuICAgICguZXF1YWxzIHRoaXMgb3RoZXIpKSlcblxuKGRlZm4gcGF0dGVybi1yb3dcbiAgKFtwcyBhY3Rpb25dIFxuICAgIChwYXR0ZXJuLXJvdyBwcyBhY3Rpb24gW10pKVxuICAoW3BzIGFjdGlvbiBiaW5kaW5nc11cbiAgICAobGV0IFtwcyAoaWYgKHZlY3Rvcj8gcHMpIHBzIChpbnRvIFtdIHBzKSldXG4gICAgICAoUGF0dGVyblJvdy4gcHMgYWN0aW9uIGJpbmRpbmdzKSkpKVxuXG47OyBOT1RFOiB3ZSBkb24ndCB1c2UgbWFwIGRlc3RydWN0dXJpbmcgaGVyZSBiZWNhdXNlIFBhdHRlcm5Sb3cgaXNcbjs7IGJvdGggSVNlcSBhbmQgSUxvb2t1cCwgYnV0IGluIG1hcCBkZXN0cnVjdHVyaW5nIHNlcT8gaXMgdGVzdGVkXG47OyBmaXJzdCAtIERhdmlkXG5cbihkZWZuIHVwZGF0ZS1wYXR0ZXJuIFtwcm93IGkgcF1cbiAgKHBhdHRlcm4tcm93IChhc3NvYyAoOnBzIHByb3cpIGkgcCkgKDphY3Rpb24gcHJvdykgKDpiaW5kaW5ncyBwcm93KSkpXG5cbihkZWZuIGFsbC13aWxkY2FyZHM/IFtwcm93XVxuICAoZXZlcnk/IHdpbGRjYXJkLXBhdHRlcm4/ICg6cHMgcHJvdykpKVxuXG4oZGVmbiBkcm9wLW50aC1iaW5kIFtwcm93IG4gb2NyXVxuICAobGV0IFtwcyAgICAgICAgKDpwcyBwcm93KVxuICAgICAgICBwICAgICAgICAgKHBzIG4pXG4gICAgICAgIGFjdGlvbiAgICAoOmFjdGlvbiBwcm93KVxuICAgICAgICBiaW5kLWV4cHIgKGxlYWYtYmluZC1leHByIG9jcilcbiAgICAgICAgYXMgICAgICAgICgtPiBwIG1ldGEgOmFzKVxuICAgICAgICBiaW5kaW5ncyAgKG9yICg6YmluZGluZ3MgcHJvdykgW10pXG4gICAgICAgIGJpbmRpbmdzICAoaWYgYXNcbiAgICAgICAgICAgICAgICAgICAgKGNvbmogYmluZGluZ3MgW2FzIGJpbmQtZXhwcl0pXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdzKVxuICAgICAgICBiaW5kaW5ncyAgKGlmIChuYW1lZC13aWxkY2FyZC1wYXR0ZXJuPyBwKVxuICAgICAgICAgICAgICAgICAgICAoY29uaiBiaW5kaW5ncyBbKDpzeW0gcCkgYmluZC1leHByXSlcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZ3MpXVxuICAgIChwYXR0ZXJuLXJvdyAoZHJvcC1udGggcHMgbikgYWN0aW9uIGJpbmRpbmdzKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIENvbXBpbGF0aW9uIE5vZGVzXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIyBMZWFmIE5vZGVcblxuKGRlZnJlY29yZCBMZWFmTm9kZSBbdmFsdWUgYmluZGluZ3NdXG4gIElOb2RlQ29tcGlsZVxuICAobi10by1jbGogW3RoaXNdXG4gICAgKGlmIChub3QgKGVtcHR5PyBiaW5kaW5ncykpXG4gICAgICAobGV0IFtiaW5kaW5ncyAocmVtb3ZlIChmbiBbW3N5bSBfXV0gKD0gc3ltICdfKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZ3MpXVxuICAgICAgIGAobGV0IFt+QChhcHBseSBjb25jYXQgYmluZGluZ3MpXVxuICAgICAgICAgIH52YWx1ZSkpXG4gICAgICB2YWx1ZSkpKVxuXG47OyBUT0RPIHByZWNvbmRpdGlvbiBvbiBiaW5kaW5ncz8gc2VlIGFib3ZlIC0gQW1icm9zZVxuKGRlZm4gbGVhZi1ub2RlXG4gIChbdmFsdWVdIChMZWFmTm9kZS4gdmFsdWUgW10pKVxuICAoW3ZhbHVlIGJpbmRpbmdzXSAoTGVhZk5vZGUuIHZhbHVlIGJpbmRpbmdzKSkpIFxuXG4oZGVmbXVsdGkgbGVhZi1iaW5kLWV4cHIgKGZuIFtvY3JdICgtPiBvY3IgbWV0YSA6b2NjdXJyZW5jZS10eXBlKSkpXG5cbihkZWZtZXRob2QgbGVhZi1iaW5kLWV4cHIgOnNlcVxuICBbb2NyXSAoLT4gb2NyIG1ldGEgOmJpbmQtZXhwcikpXG5cbihkZWZtZXRob2QgbGVhZi1iaW5kLWV4cHIgOjp2ZWN0b3JcbiAgW29jcl0gKC0+IG9jciBtZXRhIDpiaW5kLWV4cHIpKVxuXG4oZGVmbWV0aG9kIGxlYWYtYmluZC1leHByIDptYXBcbiAgW29jcl0gKGxldCBbbSAobWV0YSBvY3IpXVxuICAgICAgICAgICh2YWwtYXQtZXhwciAoOm1hcC1zeW0gbSkgKDprZXkgbSkpKSlcblxuKGRlZm1ldGhvZCBsZWFmLWJpbmQtZXhwciA6ZGVmYXVsdFxuICBbb2NyXSBvY3IpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIyBGYWlsIE5vZGVcblxuKGRlZnJlY29yZCBGYWlsTm9kZSBbXVxuICBJTm9kZUNvbXBpbGVcbiAgKG4tdG8tY2xqIFt0aGlzXVxuICAgIChpZiAqcmVjdXItcHJlc2VudCpcbiAgICAgIGAodGhyb3dcbiAgICAgICAgICM/KDpjbGpzXG4gICAgICAgICAgICAoanMvRXJyb3IuIChzdHIgXCJObyBtYXRjaCBmb3VuZC5cIikpXG4gICAgICAgICAgICA6Y2xqXG4gICAgICAgICAgICAoRXhjZXB0aW9uLiAoc3RyIFwiTm8gbWF0Y2ggZm91bmQuXCIpKSkpXG4gICAgICAoYmFja3RyYWNrLWV4cHIpKSkpXG5cbihkZWZuIGZhaWwtbm9kZSBbXVxuICAoRmFpbE5vZGUuKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMjIEJpbmQgTm9kZVxuXG4oZGVmcmVjb3JkIEJpbmROb2RlIFtiaW5kaW5ncyBub2RlXVxuICBJTm9kZUNvbXBpbGVcbiAgKG4tdG8tY2xqIFt0aGlzXVxuICAgIGAobGV0IFt+QGJpbmRpbmdzXVxuICAgICAgIH4obi10by1jbGogbm9kZSkpKSlcblxuKGRlZm4gYmluZC1ub2RlIFtiaW5kaW5ncyBub2RlXVxuICAoQmluZE5vZGUuIGJpbmRpbmdzIG5vZGUpKVxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgIyMgU3dpdGNoIE5vZGVcblxuKGRlY2xhcmUgdG8tc291cmNlKVxuXG4oZGVmbiBkYWctY2xhdXNlLXRvLWNsaiBbb2NjdXJyZW5jZSBwYXR0ZXJuIGFjdGlvbl1cbiAgKGxldCBbdGVzdCAoaWYgIz8oOmNsaiAoaW5zdGFuY2U/IGNsb2p1cmUuY29yZS5tYXRjaC5wcm90b2NvbHMuSVBhdHRlcm5Db21waWxlIHBhdHRlcm4pIDpjbGpzIChzYXRpc2ZpZXM/IElQYXR0ZXJuQ29tcGlsZSBwYXR0ZXJuKSlcbiAgICAgICAgICAgICAgICh0by1zb3VyY2UqIHBhdHRlcm4gb2NjdXJyZW5jZSlcbiAgICAgICAgICAgICAgICh0by1zb3VyY2UgcGF0dGVybiBvY2N1cnJlbmNlKSldXG4gICAgW3Rlc3QgKG4tdG8tY2xqIGFjdGlvbildKSlcblxuKGRlZm4gY2F0Y2gtZXJyb3IgWyYgYm9keV1cbiAgKGxldCBbZXJyLXN5bSAjPyg6Y2xqcyAnanMvRXJyb3IgOmNsaiAnRXhjZXB0aW9uKV1cbiAgICBgKGNhdGNoIH5lcnItc3ltIGUjXG4gICAgICAgKGlmIChpZGVudGljYWw/IGUjIH4oYmFja3RyYWNrLXN5bSkpXG4gICAgICAgICAoZG9cbiAgICAgICAgICAgfkBib2R5KVxuICAgICAgICAgKHRocm93IGUjKSkpKSlcblxuKGRlZnJlY29yZCBTd2l0Y2hOb2RlIFtvY2N1cnJlbmNlIGNhc2VzIGRlZmF1bHRdXG4gIElOb2RlQ29tcGlsZVxuICAobi10by1jbGogW3RoaXNdXG4gICAgKGxldCBbY2xhdXNlcyAoZG9hbGxcbiAgICAgICAgICAgICAgICAgICAgKG1hcGNhdCAocGFydGlhbCBhcHBseSBkYWctY2xhdXNlLXRvLWNsaiBvY2N1cnJlbmNlKVxuICAgICAgICAgICAgICAgICAgICAgIGNhc2VzKSlcbiAgICAgICAgICBiaW5kLWV4cHIgKC0+IG9jY3VycmVuY2UgbWV0YSA6YmluZC1leHByKVxuICAgICAgICAgIGNvbmQtZXhwclxuICAgICAgICAgIChpZiAqcmVjdXItcHJlc2VudCpcbiAgICAgICAgICAgIChkb2FsbFxuICAgICAgICAgICAgICAoY29uY2F0XG4gICAgICAgICAgICAgICAgYChjb25kIH5AY2xhdXNlcylcbiAgICAgICAgICAgICAgICBgKDplbHNlIH4obi10by1jbGogZGVmYXVsdCkpKSlcbiAgICAgICAgICAgIChkb2FsbFxuICAgICAgICAgICAgICAoY29uY2F0XG4gICAgICAgICAgICAgICAgYChjb25kIH5AY2xhdXNlcylcbiAgICAgICAgICAgICAgICBgKDplbHNlXG4gICAgICAgICAgICAgICAgICAgfihiYWNrdHJhY2stZXhwcikpKSkpXVxuICAgICAgKGlmICpyZWN1ci1wcmVzZW50KlxuICAgICAgICAoaWYgYmluZC1leHByXG4gICAgICAgICAgYH4oZG9hbGxcbiAgICAgICAgICAgICAgKGNvbmNhdFxuICAgICAgICAgICAgICAgIGAobGV0IFt+b2NjdXJyZW5jZSB+YmluZC1leHByXSlcbiAgICAgICAgICAgICAgICAobGlzdCBjb25kLWV4cHIpKSlcbiAgICAgICAgICBgfmNvbmQtZXhwcilcbiAgICAgICAgKGlmIGJpbmQtZXhwclxuICAgICAgICAgIGAodHJ5XG4gICAgICAgICAgICAgfihkb2FsbFxuICAgICAgICAgICAgICAgIChjb25jYXRcbiAgICAgICAgICAgICAgICAgIGAobGV0IFt+b2NjdXJyZW5jZSB+YmluZC1leHByXSlcbiAgICAgICAgICAgICAgICAgIChsaXN0IGNvbmQtZXhwcikpKVxuICAgICAgICAgICAgIH4oY2F0Y2gtZXJyb3IgKG4tdG8tY2xqIGRlZmF1bHQpKSlcbiAgICAgICAgICBgKHRyeVxuICAgICAgICAgICAgIH5jb25kLWV4cHJcbiAgICAgICAgICAgICB+KGNhdGNoLWVycm9yIChuLXRvLWNsaiBkZWZhdWx0KSkpKSkpKSlcblxuKGRlZm4gc3dpdGNoLW5vZGVcbiAgKFtvY2N1cnJlbmNlIGNhc2VzIGRlZmF1bHRdXG4gICB7OnByZSBbKHNlcXVlbnRpYWw/IGNhc2VzKV19XG4gICAoU3dpdGNoTm9kZS4gb2NjdXJyZW5jZSBjYXNlcyBkZWZhdWx0KSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIFBhdHRlcm4gTWF0cml4XG5cbihkZWZuIGZpcnN0LWNvbHVtbj8gW2ldICh6ZXJvPyBpKSlcblxuKGRlZm4gZW1wdHktcm93PyBbcm93XVxuICAobGV0IFtwcyAoOnBzIHJvdyldXG4gICAgKGFuZCAobm90IChuaWw/IHBzKSlcbiAgICAgICAgIChlbXB0eT8gcHMpKSkpXG5cbihkZWZuIHNjb3JlLWNvbHVtbiBbaSBjb2xdXG4gIFtpIChyZWR1Y2UgKyAwIGNvbCldKVxuXG4oZGVmbiB3aWR0aCBbe3Jvd3MgOnJvd3N9XVxuICAoaWYgKG5vdCAoZW1wdHk/IHJvd3MpKVxuICAgIChjb3VudCAocm93cyAwKSlcbiAgICAwKSlcblxuKGRlZm4gaGVpZ2h0IFt7cm93cyA6cm93c31dXG4gIChjb3VudCByb3dzKSlcblxuKGRlZm4gZGltIFtwbV1cbiAgWyh3aWR0aCBwbSkgKGhlaWdodCBwbSldKVxuXG4oZGVmbiBlbXB0eS1tYXRyaXg/IFtwbV1cbiAgKD0gKGRpbSBwbSkgWzAgMF0pKVxuXG4oZGVmbiBjb2x1bW4gW3tyb3dzIDpyb3dzfSBpXVxuICAodmVjIChtYXAgIyhudGggJSBpKSByb3dzKSkpXG5cbihkZWZuIHJvdyBbe3Jvd3MgOnJvd3N9IGpdXG4gIChudGggcm93cyBqKSlcblxuKGRlZm4gcm93cyBbe3Jvd3MgOnJvd3N9XSByb3dzKVxuXG4oZGVmbiBwYXR0ZXJuLWF0IFt7cm93cyA6cm93c30gaSBqXVxuICAoKHJvd3MgaikgaSkpXG5cbihkZWZuIGFjdGlvbi1mb3Itcm93IFt7cm93cyA6cm93c30gal1cbiAgKDphY3Rpb24gKHJvd3MgaikpKVxuXG4oZGVmbiBvY2N1cnJlbmNlcyBbcG1dICg6b2NycyBwbSkpXG5cbjs7IFJldHVybnMgYmluZGluZ3MgdXNhYmxlIGJ5IGxlYWYtbm9kZVxuKGRlZm4gcm93LWJpbmRpbmdzIFtmIG9jcnNdXG4gIChjb25jYXQgKDpiaW5kaW5ncyBmKVxuICAgICgtPj4gKG1hcCB2ZWN0b3IgKDpwcyBmKSBvY3JzKVxuICAgICAgKGZpbHRlciAoZm4gW1twIG9jcl1dIChuYW1lZC13aWxkY2FyZC1wYXR0ZXJuPyBwKSkpXG4gICAgICAobWFwIChmbiBbW3Agb2NyXV0gWyg6c3ltIHApIChsZWFmLWJpbmQtZXhwciBvY3IpXSkpKSkpXG5cbihkZWZuIGV4aXN0ZW50aWFsLXBhdHRlcm4/IFt4XVxuICAoIz8oOmNsaiBpbnN0YW5jZT8gOmNsanMgaW1wbGVtZW50cz8pIElFeGlzdGVudGlhbFBhdHRlcm4geCkpXG5cbihkZWZuIHdpbGRjYXJkLW9yLWV4aXN0ZW50aWFsPyBbeF1cbiAgKG9yICh3aWxkY2FyZC1wYXR0ZXJuPyB4KVxuICAgICAgKGV4aXN0ZW50aWFsLXBhdHRlcm4/IHgpKSlcblxuKGRlZm4gY29uc3RydWN0b3JzLWFib3ZlPyBbcG0gaSBqXVxuICAoZXZlcnk/XG4gICAgKGNvbXAgbm90IHdpbGRjYXJkLW9yLWV4aXN0ZW50aWFsPylcbiAgICAodGFrZSBqIChjb2x1bW4gcG0gaSkpKSlcblxuOzsgYmFzZWQgb24gcGFwZXIgd2UgdXNlZCB0byBjaGVjayB0aGUgZm9sbG93aW5nXG47OyAod2lsZGNhcmQtcGF0dGVybj8gcCkgKG5vdCAodXNlZnVsPyAoZHJvcC1udGggcG0gaSkgaikpXG47OyBJTVBPUlRBTlQgTk9URTogdGhpcyBjYWxjdWxhdGlvbiBpcyB2ZXJ5IHZlcnkgc2xvdyxcbjs7IHdlIHNob3VsZCBsb29rIGF0IHRoaXMgbW9yZSBjbG9zZWx5IC0gRGF2aWRcblxuKGRlZm4gcGF0dGVybi1zY29yZSBbcG0gaSBqXVxuICAobGV0IFtwIChwYXR0ZXJuLWF0IHBtIGkgaildXG4gICAgKGNvbmRcbiAgICAgIChvciAod2lsZGNhcmQtcGF0dGVybj8gcClcbiAgICAgICAgICAobm90IChjb25zdHJ1Y3RvcnMtYWJvdmU/IHBtIGkgaikpKSAwXG4gICAgICAoZXhpc3RlbnRpYWwtcGF0dGVybj8gcCkgMVxuICAgICAgOmVsc2UgMikpKVxuXG47OyBERUFEIENPREUgZm9yIG5vdyAtIERhdmlkXG47OyAoZGVmbiB1c2VmdWw/IFtwbSBqXVxuOzsgICAoc29tZSAjKHVzZWZ1bC1wPyBwbSAlIGopXG47OyAgICAgICAgIChyYW5nZSAoY291bnQgKHJvdyBwbSBqKSkpKSlcblxuKGRlZm4gdXNlZnVsLW1hdHJpeCBbcG1dXG4gICgtPj4gKGZvciBbaiAocmFuZ2UgKGhlaWdodCBwbSkpXG4gICAgICAgICAgICAgaSAocmFuZ2UgKHdpZHRoIHBtKSldXG4gICAgICAgICAocGF0dGVybi1zY29yZSBwbSBpIGopKVxuICAgIChwYXJ0aXRpb24gKHdpZHRoIHBtKSlcbiAgICAobWFwIHZlYylcbiAgICB2ZWMpKVxuXG4oZGVmbiBuZWNlc3NhcnktY29sdW1uIFtwbV1cbiAgKC0+PiAoYXBwbHkgbWFwIHZlY3RvciAodXNlZnVsLW1hdHJpeCBwbSkpXG4gICAgKG1hcC1pbmRleGVkIHNjb3JlLWNvbHVtbilcbiAgICAocmVkdWNlXG4gICAgICAoZm4gW1tjb2wgc2NvcmUgOmFzIGN1cnJdXG4gICAgICAgICAgIFtvY29sIG9zY29yZSA6YXMgY2FuZF1dXG4gICAgICAgIChpZiAoPiBvc2NvcmUgc2NvcmUpIGNhbmQgY3VycikpXG4gICAgICBbMCAwXSlcbiAgICBmaXJzdCkpXG5cbihkZWZuIHNlbGVjdCBbcG1dXG4gIChzd2FwIHBtIChuZWNlc3NhcnktY29sdW1uIHBtKSkpXG5cbihkZWNsYXJlIGRlZmF1bHQtc3BlY2lhbGl6ZS1tYXRyaXgpXG5cbihkZWZuIHNwZWNpYWxpemVcbiAgKFttYXRyaXhdXG4gICAgKHNwZWNpYWxpemUgbWF0cml4IChmZmlyc3QgKHJvd3MgbWF0cml4KSkpKVxuICAoW21hdHJpeCBwXVxuICAgIChpZiAoc2F0aXNmaWVzPyBJU3BlY2lhbGl6ZU1hdHJpeCBwKVxuICAgICAgKHNwZWNpYWxpemUtbWF0cml4IHAgbWF0cml4KVxuICAgICAgKGRlZmF1bHQtc3BlY2lhbGl6ZS1tYXRyaXggcCBtYXRyaXgpKSkpXG5cbihkZWZuIHBzZXVkby1wYXR0ZXJuPyBbeF1cbiAgKCM/KDpjbGogaW5zdGFuY2U/IDpjbGpzIGltcGxlbWVudHM/KSBJUHNldWRvUGF0dGVybiB4KSlcblxuKGRlZm4gcHNldWRvLXBhdHRlcm5zIFttYXRyaXggaV1cbiAgKGZpbHRlciBwc2V1ZG8tcGF0dGVybj8gKGNvbHVtbiBtYXRyaXggaSkpKVxuXG4oZGVmbiBjb2x1bW4tc3BsaXR0ZXIgW2NvbF1cbiAgKGxldCBbZiAoZmlyc3QgY29sKVxuICAgICAgICBbdG9wIGJvdHRvbV0gKHNwbGl0LXdpdGggIyhncm91cGFibGU/IGYgJSkgKHJlc3QgY29sKSldXG4gICAgWyhjb25zIGYgdG9wKSBib3R0b21dKSlcblxuKGRlY2xhcmUgcGF0dGVybi1tYXRyaXggY29tcGlsZSlcblxuKGRlZm4gcmV0dXJuLXNwbGl0IFtTIERdXG4gIChpZiAqcmVjdXItcHJlc2VudCpcbiAgICAoaWYgKGFuZCAoZW1wdHktbWF0cml4PyBEKSAoc2VxICpiYWNrdHJhY2stc3RhY2sqKSlcbiAgICAgIFtTIChwZWVrICpiYWNrdHJhY2stc3RhY2sqKSAqYmFja3RyYWNrLXN0YWNrKl1cbiAgICAgIFtTIEQgKGNvbmogKmJhY2t0cmFjay1zdGFjayogRCldKVxuICAgIFtTIERdKSlcblxuKGRlZm4gbWF0cml4LXNwbGl0dGVyIFttYXRyaXhdXG4gIChsZXQgW3Jvd3MgKHJvd3MgbWF0cml4KVxuICAgICAgICBuICAgIChjb3VudCAoZmlyc3QgKGNvbHVtbi1zcGxpdHRlciAobWFwIGZpcnN0IHJvd3MpKSkpXG4gICAgICAgIG9jcnMgKG9jY3VycmVuY2VzIG1hdHJpeClcbiAgICAgICAgUyAgICAocGF0dGVybi1tYXRyaXggKHRha2UgbiByb3dzKSBvY3JzKVxuICAgICAgICBEICAgIChwYXR0ZXJuLW1hdHJpeCAoZHJvcCBuIHJvd3MpIG9jcnMpXVxuICAgIChyZXR1cm4tc3BsaXQgUyBEKSkpXG5cbihkZWZuIGdyb3VwLXJvd3MgW2NzIHJvd3NdXG4gIChyZWR1Y2VcbiAgICAoZm4gW3JlcyByb3ddXG4gICAgICAobGV0IFtbYyByb3dzXSAocGVlayByZXMpXG4gICAgICAgICAgICAgYycgICAgICAoZmlyc3Qgcm93KV1cbiAgICAgICAgKGlmIChncm91cGFibGU/IGMgYycpXG4gICAgICAgICAgKGNvbmogKHBvcCByZXMpIFtjIChjb25qIHJvd3Mgcm93KV0pXG4gICAgICAgICAgKGNvbmogcmVzIFtjJyBbcm93XV0pKSkpXG4gICAgW1soZmlyc3QgY3MpIFsoZmlyc3Qgcm93cyldXV0gKHJlc3Qgcm93cykpKVxuXG4oZGVjbGFyZSBsaXRlcmFsLXBhdHRlcm4/KVxuXG4oZGVmbiBub24tbG9jYWwtbGl0ZXJhbC1wYXR0ZXJuPyBbcF1cbiAgKGFuZCAobGl0ZXJhbC1wYXR0ZXJuPyBwKVxuICAgICAgIChub3QgKC0+IHAgOmwgbWV0YSA6bG9jYWwpKSkpXG5cbihkZWZuIGxpdGVyYWwtY2FzZS1tYXRyaXgtc3BsaXR0ZXIgW21hdHJpeF1cbiAgKGxldCBbb2NycyAgKG9jY3VycmVuY2VzIG1hdHJpeClcbiAgICAgICAgcm93cyAgKHJvd3MgbWF0cml4KVxuICAgICAgICBscm93cyAobG9vcCBbcm93cyAoc2VxIHJvd3MpIHJlcyBbXSBsaXRzICN7fV1cbiAgICAgICAgICAgICAgICA7OyBhIGJpdCBoYWNreSBidXQgbGl0IHBhdHRlcm5zIGhhc2ggZGlmZmVyZW50bHkgd2VcbiAgICAgICAgICAgICAgICA7OyBzdG9yZSB0aGUgbGl0ZXJhbCB2YWx1ZSBkaXJlY3RseSBpbiBsaXRzIHNldFxuICAgICAgICAgICAgICAgIChpZiByb3dzXG4gICAgICAgICAgICAgICAgICAobGV0IFtbcCA6YXMgcm93XSAoZmlyc3Qgcm93cyldXG4gICAgICAgICAgICAgICAgICAgIChpZiAoYW5kIChub24tbG9jYWwtbGl0ZXJhbC1wYXR0ZXJuPyBwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobm90IChjb250YWlucz8gbGl0cyAoOmwgcCkpKSlcbiAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgKG5leHQgcm93cykgKGNvbmogcmVzIHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIChpZiAobm9uLWxvY2FsLWxpdGVyYWwtcGF0dGVybj8gcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmogbGl0cyAoOmwgcCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpdHMpKVxuICAgICAgICAgICAgICAgICAgICAgIHJlcykpXG4gICAgICAgICAgICAgICAgICByZXMpKVxuICAgICAgICBTICAgICAoLT4+IGxyb3dzXG4gICAgICAgICAgICAgICAgKGdyb3VwLXJvd3MgKG1hcCBmaXJzdCBscm93cykpXG4gICAgICAgICAgICAgICAgKG1hcCAoZm4gW1tjIHJvd3NdXVxuICAgICAgICAgICAgICAgICAgICAgICBbYyAocGF0dGVybi1tYXRyaXggcm93cyBvY3JzKV0pKVxuICAgICAgICAgICAgICAgIHZlYylcbiAgICAgICAgRCAgICAgKHBhdHRlcm4tbWF0cml4IChkcm9wIChjb3VudCBscm93cykgcm93cykgb2NycyldXG4gICAgKHJldHVybi1zcGxpdCBTIEQpKSlcblxuKGRlZm4gZGVmYXVsdC1jYXNlIFttYXRyaXhdXG4gIChpZi1ub3QgKGVtcHR5LW1hdHJpeD8gbWF0cml4KVxuICAgIChjb21waWxlIG1hdHJpeClcbiAgICAoZmFpbC1ub2RlKSkpXG5cbihkZWZuIGNhc2VzIFttYXRyaXhdXG4gIChpZiAodmVjdG9yPyBtYXRyaXgpXG4gICAgOzsgZ3JvdXBlZCBsaXRlcmFsIGNhc2VcbiAgICAoLT4+IG1hdHJpeFxuICAgICAgKG1hcCAoZm4gW1tjIG1dXVxuICAgICAgICAgICAgIFtjICgtPiBtIChzcGVjaWFsaXplIGMpIGNvbXBpbGUpXSkpXG4gICAgICB2ZWMpXG4gICAgOzsgbm9ybWFsIGNhc2VcbiAgICAobGV0IFtyb3dzIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBjICAgIChmZmlyc3Qgcm93cyldXG4gICAgICBbW2MgKC0+IG1hdHJpeCAoc3BlY2lhbGl6ZSBjKSBjb21waWxlKV1dKSkpXG5cbihkZWZuIGV4cHJlc3Npb24/IFtvY3JdXG4gIChjb250YWlucz8gKG1ldGEgb2NyKSA6b2NyLWV4cHIpKVxuXG4oZGVmbiBiaW5kLXZhcmlhYmxlcyBbb2Nyc10gXG4gIChtYXBjYXRcbiAgICAoZm4gW29jcl1cbiAgICAgIChsZXQgW2JpbmQtZXhwciAoZ2V0IChtZXRhIG9jcikgOm9jci1leHByIDo6bm90LWZvdW5kKV1cbiAgICAgICAgKGlmIChub3Q9IGJpbmQtZXhwciA6Om5vdC1mb3VuZClcbiAgICAgICAgICBbb2NyIGJpbmQtZXhwcl1cbiAgICAgICAgICBbb2NyIG9jcl0pKSlcbiAgICBvY3JzKSlcblxuKGRlZm4gcm9vdC1iaW5kLW5vZGUgW21hdHJpeF1cbiAgKGxldCBbb2NycyAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICBub2RlIChjb21waWxlIG1hdHJpeCldXG4gICAgKGlmIChzb21lIGV4cHJlc3Npb24/IG9jcnMpXG4gICAgICAoYmluZC1ub2RlIChiaW5kLXZhcmlhYmxlcyBvY3JzKSBub2RlKVxuICAgICAgbm9kZSkpKVxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgIyBDb21waWxhdGlvbiBDYXNlc1xuOztcbjs7IFRoZXNlIGFyZSBhbmFsb2dvdXMgdG8gTWFyYW5nZXQncyBDb21waWxhdGlvbiBTY2hlbWUgb24gcGFnZSA0LFxuOzsgcmVzcGVjdGl2ZWx5IGNhc2UgMSwgMiwgMiAoYWxzbyksIDNhIGFuZCAzYi5cbjs7XG5cbihkZWZuIGVtcHR5LXJvd3MtY2FzZSBcbiAgXCJDYXNlIDE6IElmIHRoZXJlIGFyZSBubyBwYXR0ZXJuIHJvd3MgdG8gbWF0Y2gsIHRoZW4gbWF0Y2hpbmcgYWx3YXlzIGZhaWxzXCJcbiAgW11cbiAgKGZhaWwtbm9kZSkpXG5cbihkZWZuIGZpcnN0LXJvdy1lbXB0eS1jYXNlIFxuICBcIkNhc2UgMjogSWYgdGhlIGZpcnN0IHJvdyBpcyBlbXB0eSB0aGVuIG1hdGNoaW5nIGFsd2F5cyBzdWNjZWVkcyBcbiAgYW5kIHlpZWxkcyB0aGUgZmlyc3QgYWN0aW9uLlwiXG4gIFtyb3dzIG9jcl1cbiAgKGxldCBbZiAoZmlyc3Qgcm93cylcbiAgICAgICAgYSAoOmFjdGlvbiBmKVxuICAgICAgICBicyAoOmJpbmRpbmdzIGYpXVxuICAgIDs7IEZJWE1FOiB0aGUgZmlyc3Qgcm93IGlzIGFuIGluZmluaXRlIGxpc3Qgb2YgbmlsIC0gRGF2aWRcbiAgICAobGVhZi1ub2RlIGEgYnMpKSlcblxuKGRlZm4gZmlyc3Qtcm93LXdpbGRjYXJkcy1jYXNlIFxuICBcIkNhc2UgMjogSWYgdGhlIGZpcnN0IHJvdyBpcyBjb25zdGl0dXRlZCBieSB3aWxkY2FyZHMgdGhlbiBtYXRjaGluZ1xuICBtYXRjaGluZyBhbHdheXMgc3VjY2VlZHMgYW5kIHlpZWxkcyB0aGUgZmlyc3QgYWN0aW9uLlwiXG4gIFtyb3dzIG9jcnNdXG4gIChsZXQgW2YgKGZpcnN0IHJvd3MpXG4gICAgICAgIGEgKDphY3Rpb24gZilcbiAgICAgICAgYnMgKHJvdy1iaW5kaW5ncyBmIG9jcnMpXVxuICAgIChsZWFmLW5vZGUgYSBicykpKVxuXG47OyBpZiB0aGUgZmlyc3QgcGF0dGVybiBpbiB0aGUgZmlyc3QgY29sdW1uIGlzIGFcbjs7IHBzZXVkby1wYXR0ZXJuLCBleHBhbmQgdW50aWwgaXQgaXNuJ3QsIGxvb2tpbmcgYXRcbjs7IGFueSByb3dzIGJleW9uZCB0aGUgZmlyc3QgY2F1c2VzIHByb2JsZW1zIGZvclxuOzsgZm4gYXBwbGljYXRpb24gcGF0dGVyblxuOzsgVE9ETzogY29sIGlzIGFsd2F5cyBaRVJPIC0gdGhpcyBpcyBjb25mdXNpbmdcbjs7IHRoYXQgaXQgdGFrZXMgY29sIGFzIGFuIGFyZ3VtZW50LCBmaXggLSBEYXZpZFxuXG4oZGVmbiBleHBhbmQtbWF0cml4IFttYXRyaXggY29sXVxuICAobG9vcCBbbWF0cml4IG1hdHJpeF1cbiAgICAobGV0IFtwIChmaXJzdCAoY29sdW1uIG1hdHJpeCBjb2wpKV1cbiAgICAgIChpZiAocHNldWRvLXBhdHRlcm4/IHApXG4gICAgICAgIChyZWN1ciAoc3BlY2lhbGl6ZSBtYXRyaXggcCkpXG4gICAgICAgIG1hdHJpeCkpKSlcblxuKGRlZm4gc3BsaXQtbWF0cml4IFttYXRyaXhdXG4gIChtYXRyaXgtc3BsaXR0ZXIgbWF0cml4KVxuICAjXyhpZiAobm9uLWxvY2FsLWxpdGVyYWwtcGF0dGVybj8gKGZmaXJzdCAocm93cyBtYXRyaXgpKSlcbiAgICA7OyBsaXRlcmFsIHRlc3RpbmcgYmFzZWQgb24gZXF1YWxpdHkgY2FuIGRvIHcvb1xuICAgIDs7IGJhY2t0cmFja2luZyBmb3IgYWxsIGFkamFjZW50IGxpdGVyYWwgY3RvcnMgaW4gYSBjb2x1bW5cbiAgICAobGl0ZXJhbC1jYXNlLW1hdHJpeC1zcGxpdHRlciBtYXRyaXgpXG4gICAgKG1hdHJpeC1zcGxpdHRlciBtYXRyaXgpKVxuICApXG5cbihkZWZuIGZpcnN0LWNvbHVtbi1jaG9zZW4tY2FzZSBcbiAgXCJDYXNlIDNhOiBUaGUgZmlyc3QgY29sdW1uIGlzIGNob3Nlbi4gQ29tcHV0ZSBhbmQgcmV0dXJuIGFcbiAgc3dpdGNoL2JpbmQgbm9kZSB3aXRoIGEgZGVmYXVsdCBtYXRyaXggY2FzZVwiXG4gIFttYXRyaXggY29sIG9jcnNdXG4gIChsZXQgW2V4cGFuZGVkICAgICAgICAoZXhwYW5kLW1hdHJpeCBtYXRyaXggY29sKVxuICAgICAgICBvY3JzICAgICAgICAgICAgKG9jY3VycmVuY2VzIGV4cGFuZGVkKVxuICAgICAgICBbUyBEIDphcyBzcGxpdF0gKHNwbGl0LW1hdHJpeCBleHBhbmRlZCldXG4gICAgKGlmLW5vdCAqcmVjdXItcHJlc2VudCpcbiAgICAgIChzd2l0Y2gtbm9kZSAob2NycyBjb2wpXG4gICAgICAgIChjYXNlcyBTKVxuICAgICAgICAoZGVmYXVsdC1jYXNlIEQpKVxuICAgICAgKGxldCBbbmV3LXN0YWNrIChsYXN0IHNwbGl0KV1cbiAgICAgICAgKHN3aXRjaC1ub2RlIChvY3JzIGNvbClcbiAgICAgICAgICAoaWYtbm90IChpZGVudGljYWw/ICpiYWNrdHJhY2stc3RhY2sqIG5ldy1zdGFjaylcbiAgICAgICAgICAgIChiaW5kaW5nIFsqYmFja3RyYWNrLXN0YWNrKiBuZXctc3RhY2tdXG4gICAgICAgICAgICAgIChjYXNlcyBTKSlcbiAgICAgICAgICAgIChjYXNlcyBTKSlcbiAgICAgICAgICAoaWYgKGFuZCAoc2VxICpiYWNrdHJhY2stc3RhY2sqKVxuICAgICAgICAgICAgICAgICAgIChpZGVudGljYWw/IChwZWVrICpiYWNrdHJhY2stc3RhY2sqKSBEKSlcbiAgICAgICAgICAgIChiaW5kaW5nIFsqYmFja3RyYWNrLXN0YWNrKiAocG9wICpiYWNrdHJhY2stc3RhY2sqKV1cbiAgICAgICAgICAgICAgKGRlZmF1bHQtY2FzZSBEKSlcbiAgICAgICAgICAgIChkZWZhdWx0LWNhc2UgRCkpKSkpKSlcblxuKGRlZm4gb3RoZXItY29sdW1uLWNob3Nlbi1jYXNlIFxuICBcIkNhc2UgM2I6IEEgY29sdW1uIG90aGVyIHRoYW4gdGhlIGZpcnN0IGlzIGNob3Nlbi4gU3dhcCBjb2x1bW4gXG5jb2wgd2l0aCB0aGUgZmlyc3QgY29sdW1uIGFuZCBjb21waWxlIHRoZSByZXN1bHRcIlxuICBbbWF0cml4IGNvbF1cbiAgKGNvbXBpbGUgKHN3YXAgbWF0cml4IGNvbCkpKVxuXG47OyBSZXR1cm4gYSBjb2x1bW4gbnVtYmVyIG9mIGEgY29sdW1uIHdoaWNoIGNvbnRhaW5zIGF0IGxlYXN0XG47OyBvbmUgbm9uLXdpbGRjYXJkIGNvbnN0cnVjdG9yXG4oZGVmbiBjaG9vc2UtY29sdW1uIFttYXRyaXhdXG4gIChuZWNlc3NhcnktY29sdW1uIG1hdHJpeCkpXG5cbihkZWZuIGNvbXBpbGUgW3s6a2V5cyBbcm93cyBvY3JzXSA6YXMgcG19XVxuICAoY29uZFxuICAgICpyb290KlxuICAgIChiaW5kaW5nIFsqcm9vdCogZmFsc2VdXG4gICAgICAocm9vdC1iaW5kLW5vZGUgcG0pKVxuXG4gICAgKGVtcHR5PyByb3dzKVxuICAgIChlbXB0eS1yb3dzLWNhc2UpXG5cbiAgICAoZW1wdHktcm93PyAoZmlyc3Qgcm93cykpXG4gICAgKGZpcnN0LXJvdy1lbXB0eS1jYXNlIHJvd3MgKGZpcnN0IG9jcnMpKVxuXG4gICAgKGFsbC13aWxkY2FyZHM/IChmaXJzdCByb3dzKSlcbiAgICAoZmlyc3Qtcm93LXdpbGRjYXJkcy1jYXNlIHJvd3Mgb2NycylcblxuICAgIDplbHNlXG4gICAgKGxldCBbY29sIChjaG9vc2UtY29sdW1uIHBtKV1cbiAgICAgIChpZiAoZmlyc3QtY29sdW1uPyBjb2wpXG4gICAgICAgIChmaXJzdC1jb2x1bW4tY2hvc2VuLWNhc2UgcG0gY29sIG9jcnMpXG4gICAgICAgIChvdGhlci1jb2x1bW4tY2hvc2VuLWNhc2UgcG0gY29sKSkpKSlcblxuKGRlZnJlY29yZCBQYXR0ZXJuTWF0cml4IFtyb3dzIG9jcnNdXG4gIElWZWNNb2RcbiAgKGRyb3AtbnRoIFtfIGldXG4gICAgKGxldCBbbnJvd3MgKHZlYyAobWFwICMoZHJvcC1udGggJSBpKSByb3dzKSldXG4gICAgICAoUGF0dGVybk1hdHJpeC4gbnJvd3Mgb2NycykpKVxuXG4gIDs7IFN3YXAgY29sdW1uIG51bWJlciBpZHggd2l0aCB0aGUgZmlyc3QgY29sdW1uXG4gIChzd2FwIFtfIGlkeF1cbiAgICAobGV0IFtucm93cyAodmVjIChtYXAgIyhzd2FwICUgaWR4KSByb3dzKSldXG4gICAgICAoUGF0dGVybk1hdHJpeC4gbnJvd3MgKHN3YXAgb2NycyBpZHgpKSkpKVxuXG4oZGVmbiBwYXR0ZXJuLW1hdHJpeCBbcm93cyBvY3JzXSAgXG4gIChsZXQgW3Jvd3MgKGlmICh2ZWN0b3I/IHJvd3MpIHJvd3MgKGludG8gW10gcm93cykpXG4gICAgICAgIG9jcnMgKGlmICh2ZWN0b3I/IG9jcnMpIG9jcnMgKGludG8gW10gb2NycykpXVxuICAgIChQYXR0ZXJuTWF0cml4LiByb3dzIG9jcnMpKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMjIERlZmF1bHQgTWF0cml4IFNwZWNpYWxpemF0aW9uXG5cbjs7IE5PVEU6IG5vdCBzdXJlIHdoeSB3ZSBuZWVkIGdyb3VwYWJsZT8gaGVyZSBmb3IgdGhpcyB0byB3b3JrIC0gRGF2aWRcblxuKGRlZm4gZGVmYXVsdC1zcGVjaWFsaXplLW1hdHJpeCBbcCBtYXRyaXhdXG4gIChsZXQgW3Jvd3MgKHJvd3MgbWF0cml4KVxuICAgICAgICBvY3JzIChvY2N1cnJlbmNlcyBtYXRyaXgpXG4gICAgICAgIGZvY3IgKGZpcnN0IG9jcnMpXG4gICAgICAgIG5yb3dzICgtPj4gcm93c1xuICAgICAgICAgICAgICAgIChtYXAgIyhkcm9wLW50aC1iaW5kICUgMCBmb2NyKSlcbiAgICAgICAgICAgICAgICB2ZWMpXG4gICAgICAgIG5vY3JzIChkcm9wLW50aCBvY3JzIDApXVxuICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBub2NycykpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBQYXR0ZXJuc1xuOztcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMjIFdpbGRjYXJkIFBhdHRlcm5cbjs7IFxuOzsgQSB3aWxkY2FyZCBwYXR0ZXJuIGFjY2VwdHMgYW55IHZhbHVlLlxuOztcbjs7IEluIHByYWN0aWNlLCB0aGUgREFHIGNvbXBpbGF0aW9uIGVsaW1pbmF0ZXMgYW55IHdpbGRjYXJkIHBhdHRlcm5zLlxuXG4oZGVmdHlwZSBXaWxkY2FyZFBhdHRlcm4gW3N5bSBuYW1lZCBfbWV0YV1cbiAgT2JqZWN0XG4gIChlcXVhbHMgW18gb3RoZXJdXG4gICAgKGFuZCAoaW5zdGFuY2U/IFdpbGRjYXJkUGF0dGVybiBvdGhlcilcbiAgICAgICAgIChpZiBuYW1lZFxuICAgICAgICAgICAoPSBzeW0gKDpzeW0gb3RoZXIpKVxuICAgICAgICAgICAobm90ICg6bmFtZWQgb3RoZXIpKSkpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSVdpdGhNZXRhKVxuICAoIz8oOmNsaiB3aXRoTWV0YSA6Y2xqcyAtd2l0aC1tZXRhKSBbXyBuZXctbWV0YV1cbiAgICAoV2lsZGNhcmRQYXR0ZXJuLiBzeW0gbmFtZWQgbmV3LW1ldGEpKVxuICAjPyg6Y2xqcyBJTWV0YSlcbiAgKCM/KDpjbGogbWV0YSA6Y2xqcyAtbWV0YSlbX11cbiAgICBfbWV0YSlcbiAgO1RPRE8gWWVob25hdGhhbiAtIHdoeSBkbyB3ZSBoYXZlIHRvIGluY2x1ZGUgdGhhdCBpbiBjbGpzPyBzZWUgZGFnLWNsYXVzZS10by1jbGogV2lsZGNhcmRQYXR0ZXJuIGhhcyB0byBpbXBsZW1lbXRzIElQYXR0ZXJuQ29tcGlsZVxuICBJUGF0dGVybkNvbXBpbGVcbiAgKHRvLXNvdXJjZSogW3RoaXMgb2NyXVxuICAgIDttYXRjaGVzIGV2ZXJ5dGhpbmdcbiAgICB0cnVlKVxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGtdXG4gICAgKCM/KDpjbGogLnZhbEF0IDpjbGpzIC1sb29rdXApIHRoaXMgayBuaWwpKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrIG5vdC1mb3VuZF1cbiAgICAoY2FzZSBrXG4gICAgICA6c3ltIHN5bVxuICAgICAgOm5hbWVkIG5hbWVkXG4gICAgICBub3QtZm91bmQpKSlcblxuKGRlZm4gd2lsZGNhcmQtcGF0dGVyblxuICAoW10gKHdpbGRjYXJkLXBhdHRlcm4gJ18pKVxuICAoW3N5bV0gXG4gICAgezpwcmUgWyhzeW1ib2w/IHN5bSldfVxuICAgIChpZiAoPSBzeW0gJ18pXG4gICAgICAoV2lsZGNhcmRQYXR0ZXJuLiAoZ2Vuc3ltKSBmYWxzZSBuaWwpXG4gICAgICAoV2lsZGNhcmRQYXR0ZXJuLiBzeW0gdHJ1ZSBuaWwpKSkpXG5cbihkZWZuIHdpbGRjYXJkLXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IFdpbGRjYXJkUGF0dGVybiB4KSlcblxuOzsgTG9jYWwgYmluZGluZ3MgaW4gcGF0dGVybiBtYXRjaGluZyBhcmUgZW11bGF0ZWQgYnkgdXNpbmcgbmFtZWQgd2lsZGNhcmRzLlxuOzsgU2VlIGNsb2p1cmUubGFuZy5TeW1ib2wgZGlzcGF0Y2ggZm9yIGBlbWl0LXBhdHRlcm5gIFxuXG4oZGVmbiBuYW1lZC13aWxkY2FyZC1wYXR0ZXJuPyBbeF1cbiAgKGFuZCAoaW5zdGFuY2U/IFdpbGRjYXJkUGF0dGVybiB4KSAoOm5hbWVkIHgpKSlcblxuIz8oOmNsaiAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBXaWxkY2FyZFBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICgud3JpdGUgd3JpdGVyIChzdHIgXCI8V2lsZGNhcmRQYXR0ZXJuOiBcIiAoOnN5bSBwKSBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMjIExpdGVyYWwgUGF0dGVyblxuOztcbjs7IEEgbGl0ZXJhbCBwYXR0ZXJuIGlzIG5vdCBmdXJ0aGVyIHNwbGl0IGludG8gZnVydGhlciBwYXR0ZXJucyBpbiB0aGUgREFHXG47OyBjb21waWxhdGlvbiBwaGFzZS5cbjs7XG47OyBJdCBcImxpdGVyYWxseVwiIG1hdGNoZXMgYSBnaXZlbiBvY2N1cnJlbmNlLlxuXG4oZGVmdHlwZSBMaXRlcmFsUGF0dGVybiBbbCBfbWV0YV1cbiAgT2JqZWN0XG4gICh0b1N0cmluZyBbX11cbiAgICAoaWYgKG5pbD8gbClcbiAgICAgIFwibmlsXCJcbiAgICAgIChwci1zdHIgbCkpKVxuICAoZXF1YWxzIFtfIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBMaXRlcmFsUGF0dGVybiBvdGhlcikgKD0gbCAoOmwgb3RoZXIpKSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSU9iaiA6Y2xqcyBJTWV0YSlcbiAgKCM/KDpjbGogbWV0YSA6Y2xqcyAtbWV0YSkgW19dIF9tZXRhKVxuXG4gICM/KDpjbGpzIElXaXRoTWV0YSlcbiAgKCM/KDpjbGogd2l0aE1ldGEgOmNsanMgLXdpdGgtbWV0YSkgW18gbmV3LW1ldGFdXG4gICAgKExpdGVyYWxQYXR0ZXJuLiBsIG5ldy1tZXRhKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGtdXG4gICAgKCM/KDpjbGogLnZhbEF0IDpjbGpzIC1sb29rdXApIHRoaXMgayBuaWwpKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrIG5vdC1mb3VuZF1cbiAgICAoY2FzZSBrXG4gICAgICA6bCBsXG4gICAgICA6OnRhZyA6OmxpdGVyYWxcbiAgICAgIG5vdC1mb3VuZCkpXG5cbiAgSVBhdHRlcm5Db21waWxlXG4gICh0by1zb3VyY2UqIFt0aGlzIG9jcl1cbiAgICAoY29uZFxuICAgICAoPSBsICgpKVxuICAgICBgKGVtcHR5PyB+b2NyKVxuXG4gICAgIChhbmQgKHN5bWJvbD8gbCkgKG5vdCAoLT4gbCBtZXRhIDpsb2NhbCkpKVxuICAgICBgKD0gfm9jciAnfmwpXG5cbiAgICAgIz9AKDpjbGpzXG4gICAgICAgICAgKChvciAobnVtYmVyPyBsKSAoc3RyaW5nPyBsKVxuICAgICAgICAgICAgICAgKHRydWU/IGwpIChmYWxzZT8gbClcbiAgICAgICAgICAgICAgIChuaWw/IGwpKVxuICAgICAgICAgICBgKGlkZW50aWNhbD8gfm9jciB+bClcblxuICAgICAgICAgICAoa2V5d29yZD8gbClcbiAgICAgICAgICAgYChjbGpzLmNvcmUva2V5d29yZC1pZGVudGljYWw/IH5vY3IgfmwpKSlcblxuICAgICAgOmVsc2UgYCg9IH5vY3IgfmwpKSkpXG5cbihkZWZuIGxpdGVyYWwtcGF0dGVybiBbbF1cbiAgKExpdGVyYWxQYXR0ZXJuLiBsIChtZXRhIGwpKSlcblxuKGRlZm4gbGl0ZXJhbC1wYXR0ZXJuPyBbeF1cbiAgKGluc3RhbmNlPyBMaXRlcmFsUGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIExpdGVyYWxQYXR0ZXJuIFtwIF5Xcml0ZXIgd3JpdGVyXVxuICAgICAgKC53cml0ZSB3cml0ZXIgKHN0ciBcIjxMaXRlcmFsUGF0dGVybjogXCIgcCBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMgU2VxIFBhdHRlcm5cbjs7XG47OyBBIFNlcSBQYXR0ZXJuIGlzIGludGVuZGVkIGZvciBtYXRjaGluZyBgc2VxYHMuICBUaGV5IGFyZSBzcGxpdCBpbnRvXG47OyBtdWx0aXBsZSBwYXR0ZXJucywgdGVzdGluZyBlYWNoIGVsZW1lbnQgb2YgdGhlIHNlcSBpbiBvcmRlci5cblxuKGRlY2xhcmUgc2VxLXBhdHRlcm4/IHJlc3QtcGF0dGVybj8gc2VxLXBhdHRlcm4pXG5cbihkZWZuIHNwZWNpYWxpemUtc2VxLXBhdHRlcm4tcmVzdC1yb3cgW2ZvY3Igcm93XVxuICAobGV0IFtwIChmaXJzdCByb3cpXG4gICAgICAgIHAgKGlmIChzZXEtcGF0dGVybj8gcClcbiAgICAgICAgICAgICg6cCAoZmlyc3QgKDpzIHApKSkgOzsgdW53cmFwIHJlc3QgcGF0dGVyblxuICAgICAgICAgICAgKHdpbGRjYXJkLXBhdHRlcm4pKV1cbiAgICAocHJlcGVuZCAoZHJvcC1udGgtYmluZCByb3cgMCBmb2NyKSBwKSkpXG5cbihkZWZuIHNwZWNpYWxpemUtc2VxLXBhdHRlcm4tcmVzdC1tYXRyaXggW3Jvd3MgZm9jcl1cbiAgKC0+PiByb3dzXG4gICAgKG1hcCAocGFydGlhbCBzcGVjaWFsaXplLXNlcS1wYXR0ZXJuLXJlc3Qtcm93IGZvY3IpKVxuICAgIHZlYykpXG5cbihkZWZuIHNlcS1wYXR0ZXJuLW1hdHJpeC1yZXN0LW9jcnMgW29jcnMgZm9jcl0gb2NycylcblxuKGRlZm4gc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1yb3cgW2ZvY3Igcm93XVxuICAobGV0IFtwIChmaXJzdCByb3cpXG4gICAgICAgIFtoIHRdIChpZiAoc2VxLXBhdHRlcm4/IHApXG4gICAgICAgICAgICAgICAgKGxldCBbW2ggJiB0XSAoOnMgcClcbiAgICAgICAgICAgICAgICAgICAgICB0IChjb25kXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChlbXB0eT8gdCkgKGxpdGVyYWwtcGF0dGVybiAoKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHJlc3QtcGF0dGVybj8gKGZpcnN0IHQpKSAoOnAgKGZpcnN0IHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ZWxzZSAoc2VxLXBhdHRlcm4gdCkpXVxuICAgICAgICAgICAgICAgICAgW2ggdF0pXG4gICAgICAgICAgICAgICAgWyh3aWxkY2FyZC1wYXR0ZXJuKSAod2lsZGNhcmQtcGF0dGVybildKV1cbiAgICAocmVkdWNlIHByZXBlbmQgKGRyb3AtbnRoLWJpbmQgcm93IDAgZm9jcikgW3QgaF0pKSlcblxuKGRlZm4gc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1tYXRyaXggW3Jvd3MgZm9jcl1cbiAgKC0+PiByb3dzXG4gICAgKG1hcCAocGFydGlhbCBzcGVjaWFsaXplLXNlcS1wYXR0ZXJuLXJvdyBmb2NyKSlcbiAgICB2ZWMpKVxuXG4oZGVmbiBzZXEtcGF0dGVybi1tYXRyaXgtb2NycyBbb2NycyBmb2NyXVxuICAobGV0IFtzZXEtc3ltIChvciAoLT4gZm9jciBtZXRhIDpzZXEtc3ltKSBmb2NyKVxuICAgICAgICBzeW0tbWV0YSB7Om9jY3VycmVuY2UtdHlwZSA6c2VxXG4gICAgICAgICAgICAgICAgICA6c2VxLXN5bSBmb2NyfVxuICAgICAgICBoc3ltIChnZW5zeW0gKHN0ciAobmFtZSBzZXEtc3ltKSBcIl9oZWFkX19cIikpXG4gICAgICAgIGhzeW0gKHdpdGgtbWV0YSBoc3ltXG4gICAgICAgICAgICAgICAoYXNzb2Mgc3ltLW1ldGEgOmJpbmQtZXhwciBgKGZpcnN0IH5mb2NyKSkpXG4gICAgICAgIHRzeW0gKGdlbnN5bSAoc3RyIChuYW1lIHNlcS1zeW0pIFwiX3RhaWxfX1wiKSlcbiAgICAgICAgdHN5bSAod2l0aC1tZXRhIHRzeW1cbiAgICAgICAgICAgICAgIChhc3NvYyBzeW0tbWV0YSA6YmluZC1leHByIGAocmVzdCB+Zm9jcikpKV1cbiAgICAoaW50byBbaHN5bSB0c3ltXSAoZHJvcC1udGggb2NycyAwKSkpKVxuXG4oZGVmdHlwZSBTZXFQYXR0ZXJuIFtzIF9tZXRhXVxuICBPYmplY3RcbiAgKHRvU3RyaW5nIFtfXVxuICAgIChzdHIgcykpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSU9iaiA6Y2xqcyBJTWV0YSlcbiAgKCM/KDpjbGogbWV0YSA6Y2xqcyAtbWV0YSkgW19dIF9tZXRhKVxuICAjPyg6Y2xqcyBJV2l0aE1ldGEpXG4gICgjPyg6Y2xqIHdpdGhNZXRhIDpjbGpzIC13aXRoLW1ldGEpIFtfIG5ldy1tZXRhXVxuICAgIChTZXFQYXR0ZXJuLiBzIG5ldy1tZXRhKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApW3RoaXMga11cbiAgICAoIz8oOmNsaiAudmFsQXQgOmNsanMgLWxvb2t1cCkgdGhpcyBrIG5pbCkpXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOnMgc1xuICAgICAgOjp0YWcgOjpzZXFcbiAgICAgIG5vdC1mb3VuZCkpXG5cbiAgSVBhdHRlcm5Db21waWxlXG4gICh0by1zb3VyY2UqIFt0aGlzIG9jcl1cbiAgICAoaWYgKGFuZCAoPj0gKGNvdW50IHMpIDEpXG4gICAgICAgICAgICAgKG5vdCAocmVzdC1wYXR0ZXJuPyAoZmlyc3QgcykpKSlcbiAgICAgIGAoYW5kIChvciAoc2VxPyB+b2NyKSAoc2VxdWVudGlhbD8gfm9jcikpIChzZXEgfm9jcikpXG4gICAgICBgKG9yIChzZXE/IH5vY3IpIChzZXF1ZW50aWFsPyB+b2NyKSkpKVxuXG4gIElTcGVjaWFsaXplTWF0cml4XG4gIChzcGVjaWFsaXplLW1hdHJpeCBbdGhpcyBtYXRyaXhdXG4gICAgKGxldCBbcm93cyAgKHJvd3MgbWF0cml4KVxuICAgICAgICAgIG9jcnMgIChvY2N1cnJlbmNlcyBtYXRyaXgpXG4gICAgICAgICAgZm9jciAgKGZpcnN0IG9jcnMpXVxuICAgICAgKGlmLW5vdCAocmVzdC1wYXR0ZXJuPyAoZmlyc3QgcykpXG4gICAgICAgIChsZXQgW25yb3dzIChzcGVjaWFsaXplLXNlcS1wYXR0ZXJuLW1hdHJpeCByb3dzIGZvY3IpXG4gICAgICAgICAgICAgIG5vY3JzIChzZXEtcGF0dGVybi1tYXRyaXgtb2NycyBvY3JzIGZvY3IpXVxuICAgICAgICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBub2NycykpXG4gICAgICAgIChsZXQgW25yb3dzIChzcGVjaWFsaXplLXNlcS1wYXR0ZXJuLXJlc3QtbWF0cml4IHJvd3MgZm9jcilcbiAgICAgICAgICAgICAgbm9jcnMgKHNlcS1wYXR0ZXJuLW1hdHJpeC1yZXN0LW9jcnMgb2NycyBmb2NyKV1cbiAgICAgICAgICAocGF0dGVybi1tYXRyaXggbnJvd3Mgbm9jcnMpKSkpKSlcblxuKGRlZm4gXlNlcVBhdHRlcm4gc2VxLXBhdHRlcm4gW3NdXG4gIHs6cHJlIFsoc2VxdWVudGlhbD8gcylcbiAgICAgICAgIChub3QgKGVtcHR5PyBzKSldfVxuICAoU2VxUGF0dGVybi4gcyBuaWwpKVxuXG4oZGVmbiBzZXEtcGF0dGVybj8gW3hdXG4gIChpbnN0YW5jZT8gU2VxUGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIFNlcVBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPFNlcVBhdHRlcm46IFwiIHAgXCI+XCIpKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIFJlc3QgUGF0dGVyblxuOzsgXG47OyBBIHJlc3QgcGF0dGVybiByZXByZXNlbnRzIHRoZSBjYXNlIG9mIG1hdGNoaW5nIFsyIDNdIGluIFsxICYgWzIgM11dXG47OyBJdCBpcyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwgb2Ygb3RoZXIgcGF0dGVybnMsIGxpa2UgU2VxUGF0dGVybi5cbjs7XG5cbihkZWZyZWNvcmQgUmVzdFBhdHRlcm4gW3BdKVxuXG4oZGVmbiByZXN0LXBhdHRlcm4gW3BdXG4gIChhc3NvYyAoUmVzdFBhdHRlcm4uIHApIDo6dGFnIDo6cmVzdCkpXG5cbihkZWZuIHJlc3QtcGF0dGVybj8gW3hdXG4gIChpbnN0YW5jZT8gUmVzdFBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBSZXN0UGF0dGVybiBbcCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgICgud3JpdGUgd3JpdGVyIChzdHIgXCI8UmVzdFBhdHRlcm46IFwiICg6cCBwKSBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMgTWFwIFBhdHRlcm5cbjs7IFxuOzsgTWFwIHBhdHRlcm5zIG1hdGNoIG1hcHMsIG9yIGFueSBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgSU1hdGNoTG9va3VwLlxuOztcblxuKGRlZm4gc3BlY2lhbGl6ZS1tYXAta2V5LXBhdHRlcm4tbWF0cml4IFtyb3dzXVxuICAobGV0IFtwICg6cCAoZmZpcnN0IHJvd3MpKV1cbiAgICAoLT4+IHJvd3NcbiAgICAgIChtYXAgIyhkcm9wLW50aCAlIDApKVxuICAgICAgKG1hcCAjKHByZXBlbmQgJSBwKSlcbiAgICAgIHZlYykpKVxuXG4oZGVmcmVjb3JkIE1hcEtleVBhdHRlcm4gW3BdXG4gIElFeGlzdGVudGlhbFBhdHRlcm5cblxuICBJUGF0dGVybkNvbXBpbGVcbiAgKHRvLXNvdXJjZSogW3RoaXMgb2NyXVxuICAgIGAobm90PSB+b2NyIDo6bm90LWZvdW5kKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBvY3JzICAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIG5yb3dzIChzcGVjaWFsaXplLW1hcC1rZXktcGF0dGVybi1tYXRyaXggcm93cyldXG4gICAgICAocGF0dGVybi1tYXRyaXggbnJvd3Mgb2NycykpKSlcblxuKGRlZm4gbWFwLWtleS1wYXR0ZXJuIFtwXVxuICAoYXNzb2MgKE1hcEtleVBhdHRlcm4uIHApIDo6dGFnIDo6bWFwLWtleSkpXG5cbihkZWZuIG1hcC1rZXktcGF0dGVybj8gW3hdXG4gIChpbnN0YW5jZT8gTWFwS2V5UGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIE1hcEtleVBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPE1hcEtleVBhdHRlcm46IFwiICg6cCBwKSBcIj5cIikpKSlcblxuKGRlY2xhcmUgbWFwLXBhdHRlcm4/IGd1YXJkLXBhdHRlcm4pXG5cbihkZWZuIHJvdy1rZXlzIFtyb3cgZW52XVxuICAobGV0IFtwICAgIChmaXJzdCByb3cpXG4gICAgICAgIG9ubHkgKC0+IHAgbWV0YSA6b25seSldXG4gICAgKHdoZW4gKGFuZCAobm90IEAoOm9ubHk/IGVudikpXG4gICAgICAgICAgICAgICAoc2VxIG9ubHkpKVxuICAgICAgKHJlc2V0ISAoOm9ubHk/IGVudikgdHJ1ZSkpXG4gICAgWyhzZXQgKGtleXMgKDptIHApKSlcbiAgICAgKHNldCBvbmx5KV0pKVxuXG4oZGVmbiBnZXQtYWxsLWtleXMgW3Jvd3MgZW52XVxuICAoLT4+IHJvd3NcbiAgICAocmVtb3ZlIChjb21wIHdpbGRjYXJkLXBhdHRlcm4/IGZpcnN0KSlcbiAgICAobWFwICMocm93LWtleXMgJSBlbnYpKVxuICAgIChyZWR1Y2UgY29uY2F0KVxuICAgIChyZWR1Y2Ugc2V0L3VuaW9uICN7fSkpKVxuXG4oZGVmbiB3cmFwLXZhbHVlcyBbbV1cbiAgKC0+PiBtXG4gICAgKG1hcCAoZm4gW1trIHZdXVxuICAgICAgICAgICBbayAoaWYgKHdpbGRjYXJkLXBhdHRlcm4/IHYpXG4gICAgICAgICAgICAgICAgKG1hcC1rZXktcGF0dGVybiB2KSB2KV0pKVxuICAgIChpbnRvIHt9KSkpXG5cbihkZWZuIGdldC1vY3ItbWFwXG4gIFtwIHs6a2V5cyBbb25seSBhbGwta2V5cyB3Yy1tYXBdfV1cbiAgKGlmIChtYXAtcGF0dGVybj8gcClcbiAgICAobWVyZ2VcbiAgICAgICh3aGVuIG9ubHlcbiAgICAgICAgKHppcG1hcCBhbGwta2V5c1xuICAgICAgICAgIChyZXBlYXQgKGxpdGVyYWwtcGF0dGVybiA6Om5vdC1mb3VuZCkpKSlcbiAgICAgIHdjLW1hcCAod3JhcC12YWx1ZXMgKDptIHApKSlcbiAgICB3Yy1tYXApKVxuXG4oZGVmbiBzcGVjaWFsaXplLW1hcC1wYXR0ZXJuLXJvd1xuICBbcm93IHs6a2V5cyBbYWxsLWtleXMgb25seT8gZm9jcl0gOmFzIGVudn1dXG4gIChsZXQgW3AgICAgICAgKGZpcnN0IHJvdylcbiAgICAgICAgb25seSAgICAoc2VxICgtPiBwIG1ldGEgOm9ubHkpKVxuICAgICAgICBvY3ItbWFwIChnZXQtb2NyLW1hcCBwIChhc3NvYyBlbnYgOm9ubHkgb25seSkpXG4gICAgICAgIHBzICAgICAgKGRvYWxsIChtYXAgb2NyLW1hcCBhbGwta2V5cykpXG4gICAgICAgIHBzICAgICAgKGlmIEBvbmx5P1xuICAgICAgICAgICAgICAgICAgKGlmIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgKGxldCBbYSAod2l0aC1tZXRhIChnZW5zeW0pIHs6dGFnICdqYXZhLnV0aWwuTWFwfSldXG4gICAgICAgICAgICAgICAgICAgICAgKGNvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIChndWFyZC1wYXR0ZXJuICh3aWxkY2FyZC1wYXR0ZXJuKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoc2V0IFsjPyg6Y2xqc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAoZm4gW35hXSAoPSAoc2V0IChrZXlzIH5hKSkgI3t+QG9ubHl9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsalxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAoZm4gW35hXSAoPSAoLmtleVNldCB+YSkgI3t+QG9ubHl9KSkpXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBwcykpXG4gICAgICAgICAgICAgICAgICAgIChjb25zICh3aWxkY2FyZC1wYXR0ZXJuKSBwcykpXG4gICAgICAgICAgICAgICAgICBwcyldXG4gICAgKHJlZHVjZSBwcmVwZW5kIChkcm9wLW50aC1iaW5kIHJvdyAwIGZvY3IpIChyZXZlcnNlIHBzKSkpKVxuXG4oZGVmbiBzcGVjaWFsaXplLW1hcC1wYXR0ZXJuLW1hdHJpeCBbcm93cyBlbnZdXG4gICh2ZWMgKG1hcCAjKHNwZWNpYWxpemUtbWFwLXBhdHRlcm4tcm93ICUgZW52KSByb3dzKSkpXG5cbihkZWZuIGdlbi1tYXAtcGF0dGVybi1vY3IgW29jciBrXVxuICAoZ2Vuc3ltIChzdHIgKG5hbWUgb2NyKSBcIl9cIiAoLnJlcGxhY2UgKG5hbWUgaykgXCIuXCIgXCJfRE9UX1wiKSBcIl9fXCIpKSlcblxuKGRlZm4gbWFwLXBhdHRlcm4tbWF0cml4LW9jci1zeW0gW2sgZW52XVxuICAobGV0IFtmb2NyICg6Zm9jciBlbnYpXG4gICAgICAgIG9jciAgKGdldC1pbiBlbnYgWzpvY3JzLW1hcCBrXSldXG4gICAgKHdpdGgtbWV0YSBvY3JcbiAgICAgIHs6b2NjdXJyZW5jZS10eXBlIDptYXBcbiAgICAgICA6a2V5IGtcbiAgICAgICA6bWFwLXN5bSBmb2NyXG4gICAgICAgOmJpbmQtZXhwciAodmFsLWF0LWV4cHIgZm9jciBrIDo6bm90LWZvdW5kKX0pKSlcblxuKGRlZm4gbWFwLXBhdHRlcm4tbWF0cml4LW9jcnMgW29jcnMgZW52XVxuICAobGV0IFtmb2NyICAoOmZvY3IgZW52KVxuICAgICAgICBtb2NycyAobWFwICMobWFwLXBhdHRlcm4tbWF0cml4LW9jci1zeW0gJSBlbnYpXG4gICAgICAgICAgICAgICAgKDphbGwta2V5cyBlbnYpKVxuICAgICAgICBtb2NycyAodmVjXG4gICAgICAgICAgICAgICAgKGlmIEAoOm9ubHk/IGVudilcbiAgICAgICAgICAgICAgICAgIChjb25zIGZvY3IgbW9jcnMpXG4gICAgICAgICAgICAgICAgICBtb2NycykpXVxuICAgIChpbnRvIG1vY3JzIChkcm9wLW50aCBvY3JzIDApKSkpXG5cbihkZWZ0eXBlIE1hcFBhdHRlcm4gW20gX21ldGFdXG4gIE9iamVjdFxuICAodG9TdHJpbmcgW19dXG4gICAgKHN0ciBtIFwiIDpvbmx5IFwiIChvciAoOm9ubHkgX21ldGEpIFtdKSkpXG4gIChlcXVhbHMgW18gb3RoZXJdXG4gICAgKGFuZCAoaW5zdGFuY2U/IE1hcFBhdHRlcm4gb3RoZXIpICg9IG0gKDptIG90aGVyKSkpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpIFtfXSBfbWV0YSlcbiAgIz8oOmNsanMgSVdpdGhNZXRhKVxuICAoIz8oOmNsaiB3aXRoTWV0YSA6Y2xqcyAtd2l0aC1tZXRhKSBbXyBuZXctbWV0YV1cbiAgICAoTWFwUGF0dGVybi4gbSBuZXctbWV0YSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbmlsKSlcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOm0gbVxuICAgICAgOjp0YWcgOjptYXBcbiAgICAgIG5vdC1mb3VuZCkpXG5cbiAgSVBhdHRlcm5Db21waWxlXG4gICh0by1zb3VyY2UqIFt0aGlzIG9jcl1cbiAgICAjPyg6Y2xqcyBgKHNhdGlzZmllcz8gSUxvb2t1cCB+b2NyKVxuICAgICAgIDpjbGogKGNvbmRcbiAgICAgICptYXRjaC1sb29rdXAqICBgKG9yICgjPyg6Y2xqIGluc3RhbmNlPyA6Y2xqcyBpbXBsZW1lbnRzPykgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKSB+b2NyKSAoc2F0aXNmaWVzPyBJTWF0Y2hMb29rdXAgfm9jcikpXG4gICAgICA6ZWxzZSBgKHNhdGlzZmllcz8gIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKSB+b2NyKSkpKVxuXG4gIElTcGVjaWFsaXplTWF0cml4XG4gIChzcGVjaWFsaXplLW1hdHJpeCBbdGhpcyBtYXRyaXhdXG4gICAgKGxldCBbcm93cyAgICAgKHJvd3MgbWF0cml4KVxuICAgICAgICAgIG9jcnMgICAgIChvY2N1cnJlbmNlcyBtYXRyaXgpXG4gICAgICAgICAgZm9jciAgICAgKGZpcnN0IG9jcnMpXG4gICAgICAgICAgZW52ICAgICAgezpmb2NyIGZvY3JcbiAgICAgICAgICAgICAgICAgICAgOm9ubHk/IChhdG9tIGZhbHNlKX1cbiAgICAgICAgICBhbGwta2V5cyAoZ2V0LWFsbC1rZXlzIHJvd3MgZW52KVxuICAgICAgICAgIGVudicgICAgIChhc3NvYyBlbnZcbiAgICAgICAgICAgICAgICAgICAgIDphbGwta2V5cyBhbGwta2V5c1xuICAgICAgICAgICAgICAgICAgICAgOndjLW1hcCAoemlwbWFwIGFsbC1rZXlzIChyZXBlYXRlZGx5IHdpbGRjYXJkLXBhdHRlcm4pKVxuICAgICAgICAgICAgICAgICAgICAgOm9jcnMtbWFwICh6aXBtYXAgYWxsLWtleXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtYXAgIyhnZW4tbWFwLXBhdHRlcm4tb2NyIGZvY3IgJSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsLWtleXMpKSlcbiAgICAgICAgICBucm93cyAgICAoc3BlY2lhbGl6ZS1tYXAtcGF0dGVybi1tYXRyaXggcm93cyBlbnYnKVxuICAgICAgICAgIG5vY3JzICAgIChtYXAtcGF0dGVybi1tYXRyaXgtb2NycyBvY3JzIGVudicpXVxuICAgICAgKHBhdHRlcm4tbWF0cml4IG5yb3dzIG5vY3JzKSkpKVxuXG4oZGVmbiBtYXAtcGF0dGVyblxuICAoW10gKE1hcFBhdHRlcm4uIHt9IG5pbCkpXG4gIChbbV0gezpwcmUgWyhtYXA/IG0pXX1cbiAgICAgKE1hcFBhdHRlcm4uIG0gbmlsKSkpXG5cbihkZWZuIG1hcC1wYXR0ZXJuPyBbeF1cbiAgKGluc3RhbmNlPyBNYXBQYXR0ZXJuIHgpKVxuXG4jPyg6Y2xqXG4gICAgKGRlZm1ldGhvZCBwcmludC1tZXRob2QgTWFwUGF0dGVybiBbcCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgICgud3JpdGUgd3JpdGVyIChzdHIgXCI8TWFwUGF0dGVybjogXCIgcCBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7IFZlY3RvciBQYXR0ZXJuXG47O1xuOzsgVmVjdG9yIHBhdHRlcm5zIG1hdGNoIGFueSBTZXF1ZW50aWFsIGRhdGEgc3RydWN0dXJlLiBOb3RlIHRoaXMgbWVhbnMgdGhhdFxuOzsgdGhlIGxhenkgc2VtYW50aWNzIG1heSBtZWFuIHBvb3JlciBwZXJmb3JtYW5jZSBmb3Igc2VxdWVuY2VzLlxuXG4oZGVjbGFyZSB2ZWN0b3ItcGF0dGVybj8pXG5cbihkZWZuIGNhbGMtcmVzdD8tYW5kLW1pbi1zaXplIFtyb3dzIGVudl1cbiAgKHJlZHVjZVxuICAgIChmbiBbW3Jlc3Q/IG1pbi1zaXplXSBbcCAmIHBzXV1cbiAgICAgIChpZiAodmVjdG9yLXBhdHRlcm4/IHApXG4gICAgICAgIFsob3IgcmVzdD8gKDpyZXN0PyBwKSlcbiAgICAgICAgIChtaW4gbWluLXNpemUgKDpzaXplIHApKV1cbiAgICAgICAgW3Jlc3Q/IG1pbi1zaXplXSkpXG4gICAgW2ZhbHNlICgtPiBlbnYgOmZwIDpzaXplKV0gcm93cykpXG5cbihkZWZuIHNwZWNpYWxpemUtdmVjdG9yLXBhdHRlcm4tcm93XG4gIFtyb3cgezprZXlzIFtmb2NyIG1pbi1zaXplXX1dXG4gIChsZXQgW3AgIChmaXJzdCByb3cpXG4gICAgICAgIHBzIChjb25kXG4gICAgICAgICAgICAgKHZlY3Rvci1wYXR0ZXJuPyBwKSAoc3BsaXQgcCBtaW4tc2l6ZSlcbiAgICAgICAgICAgICA6ZWxzZSBbKHdpbGRjYXJkLXBhdHRlcm4pICh3aWxkY2FyZC1wYXR0ZXJuKV0pXVxuICAgIChyZWR1Y2UgcHJlcGVuZCAoZHJvcC1udGgtYmluZCByb3cgMCBmb2NyKSAocmV2ZXJzZSBwcykpKSlcblxuKGRlZm4gc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1yb3ctbm9uLXJlc3RcbiAgW3JvdyB7OmtleXMgW2ZvY3IgbWluLXNpemVdfV1cbiAgKGxldCBbcCAgKGZpcnN0IHJvdylcbiAgICAgICAgcHMgKGlmICh2ZWN0b3ItcGF0dGVybj8gcClcbiAgICAgICAgICAgICAocmV2ZXJzZSAoOnYgcCkpXG4gICAgICAgICAgICAgKHJlcGVhdGVkbHkgbWluLXNpemUgd2lsZGNhcmQtcGF0dGVybikpXVxuICAgIChyZWR1Y2UgcHJlcGVuZCAoZHJvcC1udGgtYmluZCByb3cgMCBmb2NyKSBwcykpKVxuXG4oZGVmbiBzcGVjaWFsaXplLXZlY3Rvci1wYXR0ZXJuLW1hdHJpeCBbcm93cyBlbnZdXG4gIChpZiAoOnJlc3Q/IGVudilcbiAgICAodmVjIChtYXAgIyhzcGVjaWFsaXplLXZlY3Rvci1wYXR0ZXJuLXJvdyAlIGVudikgcm93cykpXG4gICAgKHZlYyAobWFwICMoc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1yb3ctbm9uLXJlc3QgJSBlbnYpIHJvd3MpKSkpXG5cbihkZWZuIHZlY3Rvci1wYXR0ZXJuLW9jci1zeW1cbiAgW3s6a2V5cyBbcGF0IGZvY3IgdGFnXX0gaV1cbiAgKGxldCBbb2NyIChnZW5zeW0gKHN0ciAobmFtZSBmb2NyKSBcIl9cIiBpIFwiX19cIikpXVxuICAgICh3aXRoLW1ldGEgb2NyXG4gICAgICB7Om9jY3VycmVuY2UtdHlwZSB0YWdcbiAgICAgICA6dmVjLXN5bSBmb2NyXG4gICAgICAgOmluZGV4IGlcbiAgICAgICA6YmluZC1leHByXG4gICAgICAgKGlmLWxldCBbb2Zmc2V0ICg6b2Zmc2V0IHBhdCldXG4gICAgICAgICAobnRoLW9mZnNldC1pbmxpbmUgdGFnICh3aXRoLXRhZyB0YWcgZm9jcikgaSBvZmZzZXQpXG4gICAgICAgICAobnRoLWlubGluZSB0YWcgKHdpdGgtdGFnIHRhZyBmb2NyKSBpKSl9KSkpXG5cbihkZWZuIHZlY3Rvci1wYXR0ZXJuLW1hdHJpeC1vY3JzXG4gIFtvY3JzIHs6a2V5cyBbZm9jciB0YWcgbWluLXNpemUgcmVzdD9dIDphcyBlbnZ9XVxuICAoaWYgcmVzdD9cbiAgICAobGV0IFtvY3ItbWV0YSB7Om9jY3VycmVuY2UtdHlwZSB0YWdcbiAgICAgICAgICAgICAgICAgICAgOnZlYy1zeW0gZm9jcn1cbiAgICAgICAgICB2bC1vY3IgKGdlbnN5bSAoc3RyIChuYW1lIGZvY3IpIFwiX2xlZnRfX1wiKSlcbiAgICAgICAgICB2bC1vY3IgKHdpdGgtbWV0YSB2bC1vY3JcbiAgICAgICAgICAgICAgICAgICAoYXNzb2Mgb2NyLW1ldGEgOmJpbmQtZXhwclxuICAgICAgICAgICAgICAgICAgICAgKHN1YnZlYy1pbmxpbmUgdGFnICh3aXRoLXRhZyB0YWcgZm9jcikgMCBtaW4tc2l6ZSApKSlcbiAgICAgICAgICB2ci1vY3IgKGdlbnN5bSAoc3RyIChuYW1lIGZvY3IpIFwiX3JpZ2h0X19cIikpXG4gICAgICAgICAgdnItb2NyICh3aXRoLW1ldGEgdnItb2NyXG4gICAgICAgICAgICAgICAgICAgKGFzc29jIG9jci1tZXRhIDpiaW5kLWV4cHJcbiAgICAgICAgICAgICAgICAgICAgIChzdWJ2ZWMtaW5saW5lIHRhZyAod2l0aC10YWcgdGFnIGZvY3IpIG1pbi1zaXplKSkpXVxuICAgICAgKGludG8gW3ZsLW9jciB2ci1vY3JdIChkcm9wLW50aCBvY3JzIDApKSlcbiAgICAoY29uY2F0XG4gICAgICAobWFwIChwYXJ0aWFsIHZlY3Rvci1wYXR0ZXJuLW9jci1zeW0gZW52KSAocmFuZ2UgbWluLXNpemUpKVxuICAgICAgKGRyb3AtbnRoIG9jcnMgMCkpKSlcblxuKGRlZm4gYXJyYXktdGFnIFt4XVxuICAoZ2V0ICd7Ynl0ZXMgICA6OmFycmF5XG4gICAgICAgICBzaG9ydHMgIDo6c2hvcnRzXG4gICAgICAgICBpbnRzICAgIDo6aW50c1xuICAgICAgICAgbG9uZ3MgICA6OmxvbmdzXG4gICAgICAgICBkb3VibGVzIDo6ZG91Ymxlc1xuICAgICAgICAgb2JqZWN0cyA6Om9iamVjdHN9XG4gICAgKC0+IHggbWV0YSA6dGFnKSkpXG5cbjs7IHYgLSB0aGUgcGF0dGVybnNcbjs7IHQgLSB0aGUgdHlwZSwgZm9yIG9wdGltaXppbmcgdmlhIHNwZWNpYWxpemF0aW9uXG47OyBzaXplIC0gc2l6ZSBvZiB0aGUgcGF0dGVybiBpZiBrbm93blxuOzsgcmVzdD8gLSBjb250YWlucyBhIHJlc3QgcGF0dGVyblxuXG4oZGVmdHlwZSBWZWN0b3JQYXR0ZXJuIFt2IHQgc2l6ZSBvZmZzZXQgcmVzdD8gX21ldGFdXG4gIE9iamVjdFxuICAodG9TdHJpbmcgW19dXG4gICAgKHN0ciB2IFwiIFwiIHQpKVxuICAoZXF1YWxzIFtfIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBWZWN0b3JQYXR0ZXJuIG90aGVyKVxuICAgICAgICAgKD0gW3YgdCBzaXplIG9mZnNldCByZXN0P11cbiAgICAgICAgICAgIChtYXAgIyglIG90aGVyKSBbOnYgOnQgOnNpemUgOm9mZnNldCA6cmVzdD9dKSkpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpIFtfXSBfbWV0YSlcbiAgIz8oOmNsanMgSVdpdGhNZXRhKVxuICAoIz8oOmNsaiB3aXRoTWV0YSA6Y2xqcyAtd2l0aC1tZXRhKSBbXyBuZXctbWV0YV1cbiAgICAoVmVjdG9yUGF0dGVybi4gdiB0IHNpemUgb2Zmc2V0IHJlc3Q/IG5ldy1tZXRhKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGtdXG4gICAgKCM/KDpjbGogLnZhbEF0IDpjbGpzIC1sb29rdXApIHRoaXMgayBuaWwpKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrIG5vdC1mb3VuZF1cbiAgICAoY2FzZSBrXG4gICAgICA6diB2XG4gICAgICA6dCB0XG4gICAgICA6c2l6ZSBzaXplXG4gICAgICA6b2Zmc2V0IG9mZnNldFxuICAgICAgOnJlc3Q/IHJlc3Q/XG4gICAgICA6OnRhZyA6OnZlY3RvclxuICAgICAgbm90LWZvdW5kKSlcblxuICBJUGF0dGVybkNvbXBpbGVcbiAgKHRvLXNvdXJjZSogW3RoaXMgb2NyXVxuICAgIChsZXQgW3QgKG9yIChhcnJheS10YWcgb2NyKSB0KV1cbiAgICAgIChpZiAoY2hlY2stc2l6ZT8gdClcbiAgICAgICAgKGlmIHJlc3Q/XG4gICAgICAgICAgKHRlc3Qtd2l0aC1taW4tc2l6ZS1pbmxpbmUgdCBvY3Igc2l6ZSlcbiAgICAgICAgICAodGVzdC13aXRoLXNpemUtaW5saW5lIHQgb2NyIHNpemUpKVxuICAgICAgICAodGVzdC1pbmxpbmUgdCBvY3IpKSkpXG5cbiAgSUNvbnRhaW5zUmVzdFBhdHRlcm5cbiAgKGNvbnRhaW5zLXJlc3QtcGF0dGVybj8gW19dIHJlc3Q/KVxuXG4gIElWZWN0b3JQYXR0ZXJuXG4gIChzcGxpdCBbdGhpcyBuXVxuICAgIChsZXQgW2x2IChzdWJ2ZWMgdiAwIG4pXG4gICAgICAgICAgcnYgKHN1YnZlYyB2IG4pXG4gICAgICAgICAgcGwgKFZlY3RvclBhdHRlcm4uIGx2IHQgbiBvZmZzZXQgZmFsc2UgX21ldGEpXG4gICAgICAgICAgcHIgKGlmIChyZXN0LXBhdHRlcm4/IChmaXJzdCBydikpXG4gICAgICAgICAgICAgICAoOnAgKGZpcnN0IHJ2KSlcbiAgICAgICAgICAgICAgIChsZXQgW3Jlc3Q/IChzb21lIHJlc3QtcGF0dGVybj8gcnYpXG4gICAgICAgICAgICAgICAgICAgICBydmMgKGNvdW50IHJ2KVxuICAgICAgICAgICAgICAgICAgICAgc2l6ZSAoaWYgcmVzdD8gKGRlYyBydmMpIHJ2YyldXG4gICAgICAgICAgICAgICAgIChWZWN0b3JQYXR0ZXJuLiBydiB0IHNpemUgbiByZXN0PyBfbWV0YSkpKV1cbiAgICAgIFtwbCBwcl0pKVxuXG4gIElTcGVjaWFsaXplTWF0cml4XG4gIChzcGVjaWFsaXplLW1hdHJpeCBbdGhpcyBtYXRyaXhdXG4gICAgKGxldCBbcm93cyAocm93cyBtYXRyaXgpXG4gICAgICAgICAgb2NycyAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIGZvY3IgKGZpcnN0IG9jcnMpXG4gICAgICAgICAgZW52ICB7OmZvY3IgZm9jclxuICAgICAgICAgICAgICAgIDpmcCAgIChmZmlyc3Qgcm93cylcbiAgICAgICAgICAgICAgICA6cGF0ICB0aGlzfVxuICAgICAgICAgIFtyZXN0PyBtaW4tc2l6ZV0gKGNhbGMtcmVzdD8tYW5kLW1pbi1zaXplIHJvd3MgZW52KVxuICAgICAgICAgIGVudicgKGFzc29jIGVudlxuICAgICAgICAgICAgICAgICA6cmVzdD8gcmVzdD8gOm1pbi1zaXplIG1pbi1zaXplXG4gICAgICAgICAgICAgICAgIDp0YWcgKG9yIChhcnJheS10YWcgZm9jcikgKDp0IHRoaXMpKSlcbiAgICAgICAgICBucm93cyAoc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1tYXRyaXggcm93cyBlbnYnKVxuICAgICAgICAgIG5vY3JzICh2ZWN0b3ItcGF0dGVybi1tYXRyaXgtb2NycyBvY3JzIGVudicpXVxuICAgICAgKHBhdHRlcm4tbWF0cml4IG5yb3dzIG5vY3JzKSkpKVxuXG4oZGVmbiB2ZWN0b3ItcGF0dGVyblxuICAoW10gKHZlY3Rvci1wYXR0ZXJuIFtdIDo6dmVjdG9yIG5pbCBuaWwpKVxuICAoW3ZdICh2ZWN0b3ItcGF0dGVybiB2IDo6dmVjdG9yIG5pbCBuaWwpKVxuICAoW3YgdF0gKHZlY3Rvci1wYXR0ZXJuIHYgdCBuaWwgbmlsKSlcbiAgKFt2IHQgb2Zmc2V0XSAodmVjdG9yLXBhdHRlcm4gdiB0IG9mZnNldCBuaWwpKVxuICAoW3YgdCBvZmZzZXQgcmVzdD9dXG4gICAgezpwcmUgWyh2ZWN0b3I/IHYpXX1cbiAgICAobGV0IFtjICAgIChjb3VudCB2KVxuICAgICAgICAgIHNpemUgKGlmIHJlc3Q/IChkZWMgYykgYyldXG4gICAgICAoVmVjdG9yUGF0dGVybi4gdiB0IHNpemUgb2Zmc2V0IHJlc3Q/IG5pbCkpKSlcblxuKGRlZm4gdmVjdG9yLXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IFZlY3RvclBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBWZWN0b3JQYXR0ZXJuIFtwIF5Xcml0ZXIgd3JpdGVyXVxuICAgICAgKC53cml0ZSB3cml0ZXIgKHN0ciBcIjxWZWN0b3JQYXR0ZXJuOiBcIiBwIFwiPlwiKSkpKVxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgT3IgUGF0dGVybnNcblxuKGRlZm4gc3BlY2lhbGl6ZS1vci1wYXR0ZXJuLXJvdyBbcm93IHBhdCBwc11cbiAgKGxldCBbcCAoZmlyc3Qgcm93KV1cbiAgICA7OyBOT1RFOiBobW0gd2h5IGNhbid0IHdlIHJlbW92ZSB0aGlzIC0gRGF2aWRcbiAgICAoaWYgKGFuZCAoZ3JvdXBhYmxlPyBwYXQgcClcbiAgICAgICAgICAgICAobm90ICh3aWxkY2FyZC1wYXR0ZXJuPyBwKSkpXG4gICAgICAobWFwIChmbiBbcF0gKHVwZGF0ZS1wYXR0ZXJuIHJvdyAwIHApKSBwcykgW3Jvd10pKSlcblxuKGRlZm4gc3BlY2lhbGl6ZS1vci1wYXR0ZXJuLW1hdHJpeCBbcm93cyBwYXQgcHNdXG4gICh2ZWMgKGFwcGx5IGNvbmNhdFxuICAgICAgICAgKG1hcCAjKHNwZWNpYWxpemUtb3ItcGF0dGVybi1yb3cgJSBwYXQgcHMpIHJvd3MpKSkpXG5cbihkZWZ0eXBlIE9yUGF0dGVybiBbcHMgX21ldGFdXG4gIElQc2V1ZG9QYXR0ZXJuXG5cbiAgT2JqZWN0XG4gICh0b1N0cmluZyBbdGhpc11cbiAgICAoc3RyIHBzKSlcbiAgKGVxdWFscyBbXyBvdGhlcl1cbiAgICAoYW5kIChpbnN0YW5jZT8gT3JQYXR0ZXJuIG90aGVyKSAoPSBwcyAoOnBzIG90aGVyKSkpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpIFtfXSBfbWV0YSlcbiAgIz8oOmNsanMgSVdpdGhNZXRhKVxuICAoIz8oOmNsaiB3aXRoTWV0YSA6Y2xqcyAtd2l0aC1tZXRhKSBbXyBuZXctbWV0YV1cbiAgICAoT3JQYXR0ZXJuLiBwcyBuZXctbWV0YSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbmlsKSlcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOnBzIHBzXG4gICAgICA6OnRhZyA6Om9yXG4gICAgICBub3QtZm91bmQpKVxuXG4gIElTcGVjaWFsaXplTWF0cml4XG4gIChzcGVjaWFsaXplLW1hdHJpeCBbdGhpcyBtYXRyaXhdXG4gICAgKGxldCBbcm93cyAgKHJvd3MgbWF0cml4KVxuICAgICAgICAgIG9jcnMgIChvY2N1cnJlbmNlcyBtYXRyaXgpXG4gICAgICAgICAgbnJvd3MgKHNwZWNpYWxpemUtb3ItcGF0dGVybi1tYXRyaXggcm93cyB0aGlzIHBzKV1cbiAgICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBvY3JzKSkpKVxuXG4oZGVmbiBvci1wYXR0ZXJuIFtwXVxuICB7OnByZSBbKHZlY3Rvcj8gcCldfVxuICAoT3JQYXR0ZXJuLiBwIG5pbCkpXG5cbihkZWZuIG9yLXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IE9yUGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIE9yUGF0dGVybiBbcCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgICgud3JpdGUgd3JpdGVyIChzdHIgXCI8T3JQYXR0ZXJuOiBcIiAoOnBzIHApIFwiPlwiKSkpKVxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgIyMgR3VhcmQgUGF0dGVybnNcbjs7XG47OyBHdWFyZCBwYXR0ZXJucyBhcmUgdXNlZCB0byByZXByZXNlbnQgZ3VhcmRzIG9uIHBhdHRlcm5zLCBmb3IgZXhhbXBsZVxuOzsgICBgKDEgOmd1YXJkIGV2ZW4/KWBcbjs7XG5cbihkZWNsYXJlIGd1YXJkLXBhdHRlcm4/KVxuXG4oZGVmbiBzcGVjaWFsaXplLWd1YXJkLXBhdHRlcm4tbWF0cml4IFtyb3dzXVxuICAoLT4+IHJvd3NcbiAgICAobWFwIChmbiBbW3AgOmFzIHJvd11dXG4gICAgICAgICAgIChpZiAoZ3VhcmQtcGF0dGVybj8gcClcbiAgICAgICAgICAgICAodXBkYXRlLXBhdHRlcm4gcm93IDAgKDpwIHApKVxuICAgICAgICAgICAgIHJvdykpKVxuICAgIHZlYykpXG5cbihkZWZ0eXBlIEd1YXJkUGF0dGVybiBbcCBncyBfbWV0YV1cbiAgT2JqZWN0XG4gICh0b1N0cmluZyBbdGhpc11cbiAgICAoc3RyIHAgXCIgOmd1YXJkIFwiIGdzKSlcbiAgKGVxdWFscyBbXyBvdGhlcl1cbiAgICAoYW5kIChpbnN0YW5jZT8gR3VhcmRQYXR0ZXJuIG90aGVyKVxuICAgICAgICAgKD0gcCAoOnAgb3RoZXIpKVxuICAgICAgICAgKD0gZ3MgKDpncyBvdGhlcikpKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JT2JqIDpjbGpzIElNZXRhKVxuICAoIz8oOmNsaiBtZXRhIDpjbGpzIC1tZXRhKSBbX10gX21ldGEpXG4gICM/KDpjbGpzIElXaXRoTWV0YSlcbiAgKCM/KDpjbGogd2l0aE1ldGEgOmNsanMgLXdpdGgtbWV0YSkgW18gbmV3LW1ldGFdXG4gICAgKEd1YXJkUGF0dGVybi4gcCBncyBuZXctbWV0YSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbmlsKSlcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOnAgcFxuICAgICAgOmdzIGdzXG4gICAgICA6OnRhZyA6Omd1YXJkXG4gICAgICBub3QtZm91bmQpKVxuXG4gIElQYXR0ZXJuQ29tcGlsZVxuICAodG8tc291cmNlKiBbdGhpcyBvY3JdXG4gICAgYChhbmQgfkAobWFwIChmbiBbZXhwciBvY3JdXG4gICAgICAgICAgICAgICAgICAgKGxpc3QgZXhwciBvY3IpKVxuICAgICAgICAgICAgICAgICBncyAocmVwZWF0IG9jcikpKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBvY3JzICAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIG5yb3dzIChzcGVjaWFsaXplLWd1YXJkLXBhdHRlcm4tbWF0cml4IHJvd3MpXVxuICAgICAgKHBhdHRlcm4tbWF0cml4IG5yb3dzIG9jcnMpKSkpXG5cbihkZWZuIGd1YXJkLXBhdHRlcm4gW3AgZ3NdXG4gIHs6cHJlIFsoc2V0PyBncyldfVxuICAoR3VhcmRQYXR0ZXJuLiBwIGdzIG5pbCkpXG5cbihkZWZuIGd1YXJkLXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IEd1YXJkUGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIEd1YXJkUGF0dGVybiBbcCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgICgud3JpdGUgd3JpdGVyIChzdHIgXCI8R3VhcmRQYXR0ZXJuIFwiICg6cCBwKSBcIiA6Z3VhcmQgXCIgKDpncyBwKSBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMjIEZ1bmN0aW9uIEFwcGxpY2F0aW9uIFBhdHRlcm5cbjs7XG47OyBGdW5jdGlvbiBBcHBsaWNhdGlvbiBwYXR0ZXJucyBhcmUgdXNlZCB0byByZXByZXNlbnQgZnVuY3Rpb24gYXBwbGljYXRpb24gb25cbjs7IG9jY3VycmVuY2VzLiBQYXR0ZXJuIG1hdGNoaW5nIHdpbGwgY29udGludWUgb24gdGhlIHJlc3VsdCBvZiB0aGUgYXBwbGljYXRpb24uXG47OyAgICBgKDMgOjw8IGluYylgXG5cbihkZWNsYXJlIGFwcC1wYXR0ZXJuPylcblxuOzsgdGFrZSB0aGUgb3JpZ2luYWwgb2NjdXJlbmNlIGFuZCByZXBsYWNlIGl0IHdpdGggYSB3aWxkY2FyZCBpbiBlYWNoXG47OyByb3cgdGhhdCBoYXMgYSBjb21wYXRpYmxlIGFwcGxpY2F0aW9uIGNyZWF0ZSAmIG5ldyBvY2N1cnJlbmNlIHdob3NlXG47OyBiaW5kaW5nIGlzIHRoZSBvbGQgb2NjdXJlbmNlIHdpdGggdGhlIGZ1bmN0aW9uIGFwcGxpZWRcblxuKGRlZm4gYXBwLXBhdHRlcm4tbWF0cml4LW9jcnMgW1tmb2NyIDphcyBvY3JzXSBmb3JtXVxuICAoaW50b1xuICAgIFsod2l0aC1tZXRhXG4gICAgICAgKGdlbnN5bSAoc3RyIFwiYXBwX1wiIGZvY3IpKVxuICAgICAgIHs6YmluZC1leHByIGAofmZvcm0gfihvciAoLT4gZm9jciBtZXRhIDpiaW5kLWV4cHIpIGZvY3IpKX0pXVxuICAgIG9jcnMpKVxuXG4oZGVmbiBzcGVjaWFsaXplLWFwcC1wYXR0ZXJuLW1hdHJpeCBbcm93cyBmb3JtXVxuICAobGV0IFtbbWF0Y2hlZC1yb3dzIHJlc3Qtcm93c11cbiAgICAgICAgKHNwbGl0LXdpdGhcbiAgICAgICAgICAoZm4gW1twYXQgOmFzIHJvd11dXG4gICAgICAgICAgICAoYW5kIChhcHAtcGF0dGVybj8gcGF0KVxuICAgICAgICAgICAgICAgICAoPSAoOmZvcm0gcGF0KSBmb3JtKSkpXG4gICAgICAgICAgcm93cyldXG4gICAgKHZlY1xuICAgICAgKGNvbmNhdFxuICAgICAgICAobWFwXG4gICAgICAgICAgKGZuIFtyb3ddXG4gICAgICAgICAgICAocHJlcGVuZFxuICAgICAgICAgICAgICAodXBkYXRlLXBhdHRlcm4gcm93IDAgKHdpbGRjYXJkLXBhdHRlcm4pKVxuICAgICAgICAgICAgICAoOnAgKGZpcnN0IHJvdykpKSlcbiAgICAgICAgICBtYXRjaGVkLXJvd3MpXG4gICAgICAgIChtYXBcbiAgICAgICAgICAoZm4gW3Jvd11cbiAgICAgICAgICAgIChwcmVwZW5kIHJvdyAod2lsZGNhcmQtcGF0dGVybikpKVxuICAgICAgICAgIHJlc3Qtcm93cykpKSkpXG5cbihkZWZ0eXBlIEFwcFBhdHRlcm4gW3AgZm9ybSBfbWV0YV1cbiAgSVBzZXVkb1BhdHRlcm5cblxuICBPYmplY3RcbiAgKHRvU3RyaW5nIFt0aGlzXVxuICAoc3RyIHAgXCIgOjw8IFwiIGZvcm0pKVxuICAoZXF1YWxzIFtfIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBBcHBQYXR0ZXJuIG90aGVyKVxuICAgICAgICAgKD0gcCAoOnAgb3RoZXIpKVxuICAgICAgICAgKD0gZm9ybSAoOmZvcm0gb3RoZXIpKSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSU9iaiA6Y2xqcyBJTWV0YSlcbiAgKCM/KDpjbGogbWV0YSA6Y2xqcyAtbWV0YSkgW19dIF9tZXRhKVxuICAjPyg6Y2xqcyBJV2l0aE1ldGEpXG4gICgjPyg6Y2xqIHdpdGhNZXRhIDpjbGpzIC13aXRoLW1ldGEpIFtfIG5ldy1tZXRhXVxuICAgIChBcHBQYXR0ZXJuLiBwIGZvcm0gbmV3LW1ldGEpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklMb29rdXAgOmNsanMgSUxvb2t1cClcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMga11cbiAgICAoIz8oOmNsaiAudmFsQXQgOmNsanMgLWxvb2t1cCkgdGhpcyBrIG5pbCkpXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGsgbm90LWZvdW5kXVxuICAgIChjYXNlIGtcbiAgICAgIDpwIHBcbiAgICAgIDpmb3JtIGZvcm1cbiAgICAgIDo6dGFnIDo6YXBwXG4gICAgICBub3QtZm91bmQpKVxuXG4gIElTcGVjaWFsaXplTWF0cml4XG4gIChzcGVjaWFsaXplLW1hdHJpeCBbdGhpcyBtYXRyaXhdXG4gICAgKGxldCBbcm93cyAgKHJvd3MgbWF0cml4KVxuICAgICAgICAgIG9jcnMgIChvY2N1cnJlbmNlcyBtYXRyaXgpXG4gICAgICAgICAgbm9jcnMgKGFwcC1wYXR0ZXJuLW1hdHJpeC1vY3JzIG9jcnMgZm9ybSlcbiAgICAgICAgICBucm93cyAoc3BlY2lhbGl6ZS1hcHAtcGF0dGVybi1tYXRyaXggcm93cyBmb3JtKV1cbiAgICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBub2NycykpKSlcblxuKGRlZm4gYXBwLXBhdHRlcm4gW3AgZm9ybV1cbiAgKEFwcFBhdHRlcm4uIHAgZm9ybSBuaWwpKVxuXG4oZGVmbiBhcHAtcGF0dGVybj8gW3hdXG4gIChpbnN0YW5jZT8gQXBwUGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIEFwcFBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPEFwcFBhdHRlcm4gXCIgKDpwIHApIFwiIDphcHAgXCIgKDpmb3JtIHApIFwiPlwiKSkpKVxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgIyMgUHJlZGljYXRlIFBhdHRlcm5zXG47O1xuOzsgUHJlZGljYXRlIHBhdHRlcm5zIGFyZSB1c2VkIHRvIHJlcHJlc2VudCBzaW1wbGUgZ3VhcmRzIG9uIHBhdHRlcm5zLFxuOzsgZm9yIGV4YW1wbGVcbjs7ICAgYCgxIDp3aGVuIGV2ZW4/KWBcbjs7XG47OyBUaGUgcHJlZGljYXRlcyBpbiBwcmVkaWNhdGUgcGF0dGVybnMgc2hvdWxkIG5vdCBvdmVybGFwLiAgVGhhdCBpcyxcbjs7IG5vIHR3byBwcmVkaWNhdGVzIHNob3VsZCByZXR1cm4gdGhlIHNhbWUgYW5zd2VyIGdpdmVuIHRoZSBzYW1lXG47OyBpbnB1dC4gIEZvciBleGFtcGxlLCBpbiB0aGUgdW5saWtlbHkgY2FzZSB0aGF0IHRoZXJlIHdhcyBhIGZ1bmN0aW9uXG47OyBuYW1lZCBgZm91cj9gIGFuZCBkZWZpbmVkIGFzIGAoZGVmbiBmb3VyPyBbeF0gKD0gNCB4KSlgLCB0aGVuIHVzaW5nXG47OyBgeCA6d2hlbiBmb3VyP2AgYW5kIGB5IDp3aGVuIGV2ZW4/YCBpbiB0aGUgc2FtZSBtYXRjaCBleHByZXNzaW9uXG47OyB3aWxsIHlpZWxkIGFuIGluY29ycmVjdCBkZWNpc2lvbiB0cmVlLiAgSW4gY2FzZXMgd2hlcmUgb3ZlcmxhcHBpbmdcbjs7IHByZWRpY2F0ZXMgYXJlIGRlc2lyZWQsIHVzZSBndWFyZCBwYXR0ZXJucy5cbjs7XG5cbihkZWYgcHJlZHMgKGF0b20ge30pKVxuXG4oZGVmbWFjcm8gZGVmcHJlZFxuICAoW25hbWVdXG4gICAgIChzd2FwISBwcmVkcyBhc3NvYyBuYW1lIG5hbWUpKVxuICAoW25hbWUgZl1cbiAgICAgKHN3YXAhIHByZWRzIGFzc29jIG5hbWUgZikpKVxuXG4oZGVjbGFyZSBwcmVkaWNhdGUtcGF0dGVybj8pXG5cbihkZWZuIHNwZWNpYWxpemUtcHJlZGljYXRlLXBhdHRlcm4tbWF0cml4IFtyb3dzXVxuICAoLT4+IHJvd3NcbiAgICAobWFwIChmbiBbW3AgOmFzIHJvd11dXG4gICAgICAgICAgIChpZiAocHJlZGljYXRlLXBhdHRlcm4/IHApXG4gICAgICAgICAgICAgKHVwZGF0ZS1wYXR0ZXJuIHJvdyAwICg6cCBwKSlcbiAgICAgICAgICAgICByb3cpKSlcbiAgICB2ZWMpKVxuXG4oZGVmdHlwZSBQcmVkaWNhdGVQYXR0ZXJuIFtwIGdzIF9tZXRhXVxuICBPYmplY3RcbiAgKHRvU3RyaW5nIFt0aGlzXVxuICAgIChzdHIgcCBcIiA6d2hlbiBcIiBncykpXG4gIChlcXVhbHMgW18gb3RoZXJdXG4gICAgKGFuZCAoaW5zdGFuY2U/IFByZWRpY2F0ZVBhdHRlcm4gb3RoZXIpXG4gICAgICAgICAoPSBwICg6cCBvdGhlcikpXG4gICAgICAgICAoPSBncyAoOmdzIG90aGVyKSkpKSAgXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSU9iaiA6Y2xqcyBJTWV0YSlcbiAgKCM/KDpjbGogbWV0YSA6Y2xqcyAtbWV0YSkgW19dIF9tZXRhKVxuICAjPyg6Y2xqcyBJV2l0aE1ldGEpXG4gICgjPyg6Y2xqIHdpdGhNZXRhIDpjbGpzIC13aXRoLW1ldGEpIFtfIG5ldy1tZXRhXVxuICAgIChQcmVkaWNhdGVQYXR0ZXJuLiBwIGdzIG5ldy1tZXRhKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGtdXG4gICAgKCM/KDpjbGogLnZhbEF0IDpjbGpzIC1sb29rdXApIHRoaXMgayBuaWwpKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrIG5vdC1mb3VuZF1cbiAgICAoY2FzZSBrXG4gICAgICA6cCBwXG4gICAgICA6Z3MgZ3NcbiAgICAgIDo6dGFnIDo6cHJlZGljYXRlXG4gICAgICBub3QtZm91bmQpKVxuXG4gIElQYXR0ZXJuQ29tcGlsZVxuICAodG8tc291cmNlKiBbdGhpcyBvY3JdXG4gICAgYChhbmQgfkAobWFwIChmbiBbZXhwciBvY3JdXG4gICAgICAgICAgICAgICAgICAgKGxpc3QgZXhwciBvY3IpKVxuICAgICAgICAgICAgICAgICBncyAocmVwZWF0IG9jcikpKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBvY3JzICAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIG5yb3dzIChzcGVjaWFsaXplLXByZWRpY2F0ZS1wYXR0ZXJuLW1hdHJpeCByb3dzKV1cbiAgICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBvY3JzKSkpKVxuXG4oZGVmbiBwcmVkaWNhdGUtcGF0dGVybiBbcCBnc11cbiAgezpwcmUgWyhzZXQ/IGdzKV19XG4gIChQcmVkaWNhdGVQYXR0ZXJuLiBwIGdzIG5pbCkpXG5cbihkZWZuIHByZWRpY2F0ZS1wYXR0ZXJuPyBbeF1cbiAgKGluc3RhbmNlPyBQcmVkaWNhdGVQYXR0ZXJuIHgpKVxuXG4jPyg6Y2xqXG4gICAgKGRlZm1ldGhvZCBwcmludC1tZXRob2QgUHJlZGljYXRlUGF0dGVybiBbcCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgICgud3JpdGUgd3JpdGVyIChzdHIgXCI8UHJlZGljYXRlUGF0dGVybiBcIiAoOnAgcCkgXCIgOndoZW4gXCIgKDpncyBwKSBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7IFBhdHRlcm4gQ29tcGFyaXNvbnNcblxuKGRlZm1ldGhvZCBncm91cGFibGU/IFs6OmxpdGVyYWwgOjpsaXRlcmFsXVxuICBbYSBiXSAoPSAoOmwgYSkgKDpsIGIpKSlcblxuKGRlZm1ldGhvZCBncm91cGFibGU/IFs6Omd1YXJkIDo6Z3VhcmRdXG4gIFthIGJdICg9ICg6Z3MgYSkgKDpncyBiKSkpXG5cbihkZWZtZXRob2QgZ3JvdXBhYmxlPyBbOjpwcmVkaWNlIDo6cHJlZGljYXRlXVxuICBbYSBiXSAoPSAoOmdzIGEpICg6Z3MgYikpKVxuXG4oZGVmbWV0aG9kIGdyb3VwYWJsZT8gWzo6bWFwIDo6bWFwXVxuICBbYSBiXVxuICAoPSAoLT4gYSBtZXRhIDpvbmx5KSAoLT4gYiBtZXRhIDpvbmx5KSkpXG5cbihkZWZtZXRob2QgZ3JvdXBhYmxlPyBbOjpvciA6Om9yXVxuICBbYSBiXVxuICAobGV0IFthcyAoOnBzIGEpXG4gICAgICAgIGJzICg6cHMgYildXG4gICAgKGFuZCAoPSAoY291bnQgYXMpIChjb3VudCBicykpXG4gICAgICAgICAoZXZlcnk/IGlkZW50aXR5IChtYXAgZ3JvdXBhYmxlPyBhcyBicykpKSkpXG5cbihkZWZtZXRob2QgZ3JvdXBhYmxlPyBbOjp2ZWN0b3IgOjp2ZWN0b3JdXG4gIFthIGJdXG4gIChhbmQgKD0gKDpyZXN0PyBhKSAoOnJlc3Q/IGIpKVxuICAgICAgICg9ICg6c2l6ZSBhKSAoOnNpemUgYikpKSlcblxuKGRlZm1ldGhvZCBncm91cGFibGU/IFs6OmFwcCA6OmFwcF1cbiAgW2EgYl1cbiAgKGFuZCAoPSAoOmZvcm0gYSkgKDpmb3JtIGIpKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIEludGVyZmFjZVxuXG4oZGVmbXVsdGkgdG8tc291cmNlXG4gIFwiUmV0dXJucyBhIENsb2p1cmUgZm9ybSB0aGF0LCB3aGVuIGV4ZWN1dGVkLCBpcyB0cnV0aHkgaWYgdGhlXG4gIHBhdHRlcm4gbWF0Y2hlcyB0aGUgb2NjdXJyZW5jZS4gRGlzcGF0Y2hlcyBvbiB0aGUgYHR5cGVgIG9mIHRoZVxuICBwYXR0ZXJuLiBGb3IgaW5zdGFuY2UsIGEgbGl0ZXJhbCBwYXR0ZXJuIG1pZ2h0IHJldHVybiBgKD0gfig6cGF0dGVyblxuICBwYXR0ZXJuKSB+b2NyKWAsIHVzaW5nIGA9YCB0byB0ZXN0IGZvciBhIG1hdGNoLlwiXG4gIChmbiBbcGF0dGVybiBvY3JdXG4gICAgKDo6dGFnIHBhdHRlcm4pKSlcblxuKGRlZm11bHRpIGVtaXQtcGF0dGVyblxuICBcIlJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcGF0dGVybiBmb3IgdGhlIGdpdmVuIHN5bnRheC4gRGlzcGF0Y2hlc1xuICBvbiB0aGUgY2xhc3Mgb2YgaXRzIGFyZ3VtZW50LiBGb3IgZXhhbXBsZSwgYFsoOm9yIDEgMikgMl1gIGlzIGRpc3BhdGNoZWRcbiAgYXMgY2xvanVyZS5sYW5nLklQZXJzaXN0ZW50VmVjdG9yXCJcbiAgKGZuIFtwYXR0ZXJuXVxuICAgIChzeW50YXgtdGFnIHBhdHRlcm4pKSlcblxuKGV4dGVuZC1wcm90b2NvbCBJU3ludGF4VGFnXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklQZXJzaXN0ZW50VmVjdG9yIDpjbGpzIFBlcnNpc3RlbnRWZWN0b3IpXG4gIChzeW50YXgtdGFnIFtfXSA6OnZlY3RvcilcbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSVNlcSA6Y2xqcyBMaXN0KVxuICAoc3ludGF4LXRhZyBbX10gOjpzZXEpXG4gICM/KDpjbGpzIENvbnMpXG4gIChzeW50YXgtdGFnIFtfXSA6OnNlcSlcbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSVBlcnNpc3RlbnRNYXAgOmNsanMgUGVyc2lzdGVudEhhc2hNYXApXG4gIChzeW50YXgtdGFnIFtfXSA6Om1hcClcbiAgIz8oOmNsanMgUGVyc2lzdGVudEFycmF5TWFwKVxuICAoc3ludGF4LXRhZyBbX10gOjptYXApXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLlN5bWJvbCA6Y2xqcyBTeW1ib2wpXG4gIChzeW50YXgtdGFnIFtfXSA6OnN5bWJvbClcbiAgIz8oOmNsaiBPYmplY3QgOmNsanMgb2JqZWN0KVxuICAoc3ludGF4LXRhZyBbX10gOmRlZmF1bHQpXG4gIG5pbFxuICAoc3ludGF4LXRhZyBbX10gOmRlZmF1bHQpKVxuXG4jPyg6Y2xqc1xuKGV4dGVuZC10eXBlIG51bWJlclxuICBJU3ludGF4VGFnXG4gIChzeW50YXgtdGFnIFtfXSA6ZGVmYXVsdCkpKVxuXG4jPyg6Y2xqc1xuKGV4dGVuZC10eXBlIHN0cmluZ1xuICBJU3ludGF4VGFnXG4gIChzeW50YXgtdGFnIFtfXSA6ZGVmYXVsdCkpKVxuXG4jPyg6Y2xqc1xuKGV4dGVuZC10eXBlIGJvb2xlYW5cbiAgSVN5bnRheFRhZ1xuICAoc3ludGF4LXRhZyBbX10gOmRlZmF1bHQpKSlcblxuXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgZW1pdC1wYXR0ZXJuIE1ldGhvZHNcblxuKGRlZm4gZW1pdC1wYXR0ZXJuc1xuICAoW3BzIHRdIChlbWl0LXBhdHRlcm5zIHBzIHQgW10pKVxuICAoW3BzIHQgdl1cbiAgICAgKGlmIChlbXB0eT8gcHMpXG4gICAgICAgdlxuICAgICAgIChsZXQgW3AgKGZpcnN0IHBzKV1cbiAgICAgICAgIChjb25kXG4gICAgICAgICAgKD0gcCAnJilcbiAgICAgICAgICAobGV0IFtwIChzZWNvbmQgcHMpXG4gICAgICAgICAgICAgICAgcnAgKGlmIChhbmQgKHZlY3Rvcj8gcCkgKD0gdCA6c2VxKSlcbiAgICAgICAgICAgICAgICAgICAgIChzZXEtcGF0dGVybiAoZW1pdC1wYXR0ZXJucyBwIHQpKVxuICAgICAgICAgICAgICAgICAgICAgKGVtaXQtcGF0dGVybiBwKSldXG4gICAgICAgICAgICAocmVjdXIgKG5uZXh0IHBzKSB0IChjb25qIHYgKHJlc3QtcGF0dGVybiBycCkpKSkgXG5cbiAgICAgICAgICA6ZWxzZVxuICAgICAgICAgIChyZWN1ciAobmV4dCBwcykgdCAoY29uaiB2IChlbWl0LXBhdHRlcm4gKGZpcnN0IHBzKSkpKSkpKSkpXG5cbihkZWZtZXRob2QgZW1pdC1wYXR0ZXJuIDo6dmVjdG9yXG4gIFtwYXRdXG4gIChsZXQgW3BzIChlbWl0LXBhdHRlcm5zIHBhdCA6dmVjdG9yKV1cbiAgICAodmVjdG9yLXBhdHRlcm4gcHMgKnZlY3Rvci10eXBlKiAwIChzb21lIHJlc3QtcGF0dGVybj8gcHMpKSkpXG5cbihkZWZtZXRob2QgZW1pdC1wYXR0ZXJuIDo6bWFwXG4gIFtwYXRdXG4gIChtYXAtcGF0dGVyblxuICAgICgtPj4gcGF0XG4gICAgICAobWFwIChmbiBbW2sgdl1dXG4gICAgICAgICAgICAgW2sgKGVtaXQtcGF0dGVybiB2KV0pKVxuICAgICAgKHJlbW92ZSBuaWw/KVxuICAgICAgKGludG8ge30pKSkpXG5cbihkZWZtZXRob2QgZW1pdC1wYXR0ZXJuIDo6c3ltYm9sXG4gIFtwYXRdXG4gIChpZiAobm90PSAoZ2V0ICpsb2NhbHMqIHBhdCA6Om5vdC1mb3VuZCkgOjpub3QtZm91bmQpXG4gICAgKGxpdGVyYWwtcGF0dGVybiAod2l0aC1tZXRhIHBhdCAoYXNzb2MgKG1ldGEgcGF0KSA6bG9jYWwgdHJ1ZSkpKVxuICAgICh3aWxkY2FyZC1wYXR0ZXJuIHBhdCkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybiA6ZGVmYXVsdFxuICBbcGF0XVxuICAobGl0ZXJhbC1wYXR0ZXJuIHBhdCkpXG5cbihkZWNsYXJlIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IG9yLXBhdHRlcm4gYXMtcGF0dGVybiBndWFyZC1wYXR0ZXJuXG4gICAgICAgICBwcmVkaWNhdGUtcGF0dGVybiB2ZWN0b3ItcGF0dGVybilcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4gOjpzZXFcbiAgW3BhdF0gKGlmIChhbmQgKD0gKGNvdW50IHBhdCkgMilcbiAgICAgICAgICAgICAgICAgKD0gKGZpcnN0IHBhdCkgJ3F1b3RlKVxuICAgICAgICAgICAgICAgICAob3IgKHN5bWJvbD8gKHNlY29uZCBwYXQpKVxuICAgICAgICAgICAgICAgICAgICAgKGtleXdvcmQ/IChzZWNvbmQgcGF0KSkpKVxuICAgICAgICAgIChsaXRlcmFsLXBhdHRlcm4gKHNlY29uZCBwYXQpKVxuICAgICAgICAgIChlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBwYXQpKSlcblxuKGRlZm11bHRpIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IFxuICBcIkhhbmRsZXMgcGF0dGVybnMgd3JhcHBlZCBpbiB0aGUgc3BlY2lhbCBsaXN0IHN5bnRheC4gRGlzcGF0Y2hlc1xuICBvbiB0aGUgZmlyc3Qgb3Igc2Vjb25kIGtleXdvcmQgaW4gdGhlIGxpc3QuIEZvciBleGFtcGxlLCB0aGUgcGF0dGVybiBcbiAgYCg6b3IgMSAuLi4pIGlzIGRpc3BhdGNoZXMgYXMgOm9yLCBhbmQgYCgxIDphcyBhKWAgaXMgZGlzcGF0Y2hlZCBieSA6YXMuXCJcbiAgKGZuIFtbZiBzXV1cbiAgICAoaWYgKGtleXdvcmQ/IGYpXG4gICAgICBbZiA6ZGVmYXVsdF1cbiAgICAgIFs6ZGVmYXVsdCBzXSkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IFs6b3IgOmRlZmF1bHRdXG4gIFtwYXRdIChvci1wYXR0ZXJuXG4gICAgICAgICAgKC0+PiAocmVzdCBwYXQpXG4gICAgICAgICAgICAobWFwIGVtaXQtcGF0dGVybilcbiAgICAgICAgICAgIChpbnRvIFtdKSkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IFs6ZGVmYXVsdCA6YXNdXG4gIFtbcCBfIHN5bV1dICh3aXRoLW1ldGEgKGVtaXQtcGF0dGVybiBwKSB7OmFzIHN5bX0pKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IFs6ZGVmYXVsdCA6PDxdXG4gIFtbcCBfIGZvcm1dXSAoYXBwLXBhdHRlcm4gKGVtaXQtcGF0dGVybiBwKSBmb3JtKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOmRlZmF1bHQgOndoZW5dXG4gIFtbcCBfIGdzXV1cbiAgKGxldCBbZ3MgKGlmIChub3QgKHZlY3Rvcj8gZ3MpKSBbZ3NdIGdzKV1cbiAgICAoYXNzZXJ0IChldmVyeT8gc3ltYm9sPyBncykgKHN0ciBcIkludmFsaWQgcHJlZGljYXRlIGV4cHJlc3Npb24gXCIgZ3MpKVxuICAgIChhc3NlcnQgKGV2ZXJ5PyAjKGNvbnRhaW5zPyBAcHJlZHMgJSkgZ3MpIChzdHIgXCJVbmtub3duIHByZWRpY2F0ZSBpbiBcIiBncykpXG4gICAgKHByZWRpY2F0ZS1wYXR0ZXJuIChlbWl0LXBhdHRlcm4gcCkgKHNldCBncykpKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOmRlZmF1bHQgOmd1YXJkXVxuICBbW3AgXyBnc11dIChsZXQgW2dzIChpZiAobm90ICh2ZWN0b3I/IGdzKSkgW2dzXSBncyldXG4gICAgICAgICAgICAgIChndWFyZC1wYXR0ZXJuIChlbWl0LXBhdHRlcm4gcCkgKHNldCBncykpKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOmRlZmF1bHQgOnNlcV1cbiAgW3BhdF1cbiAgKGxldCBbcCAoZmlyc3QgcGF0KV1cbiAgICAoaWYgKGVtcHR5PyBwKVxuICAgICAgKGxpdGVyYWwtcGF0dGVybiAoKSlcbiAgICAgIChzZXEtcGF0dGVybiAoZW1pdC1wYXR0ZXJucyBwIDpzZXEpKSkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IFs6ZGVmYXVsdCA6OnZlY3Rvcl1cbiAgW1twIHQgb2Zmc2V0LWtleSBvZmZzZXRdXVxuICAobGV0IFtwcyAoZW1pdC1wYXR0ZXJucyBwIDp2ZWN0b3IpXVxuICAgICh2ZWN0b3ItcGF0dGVybiBwcyB0IG9mZnNldCAoc29tZSByZXN0LXBhdHRlcm4/IHBzKSkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IFs6ZGVmYXVsdCA6b25seV1cbiAgW1twIF8gb25seV1dICh3aXRoLW1ldGEgKGVtaXQtcGF0dGVybiBwKSB7Om9ubHkgb25seX0pKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybi1mb3Itc3ludGF4IDpkZWZhdWx0XG4gIFtbXyBzIDphcyBsXV1cbiAgKHRocm93XG4gICAgKCM/KDpjbGogQXNzZXJ0aW9uRXJyb3IuIDpjbGpzIGpzL0Vycm9yLilcbiAgICAgIChzdHIgXCJJbnZhbGlkIGxpc3Qgc3ludGF4IFwiIHMgXCIgaW4gXCIgbCBcIi4gXCJcbiAgICAgICAgXCJWYWxpZCBzeW50YXg6IFwiXG4gICAgICAgICh2ZWNcbiAgICAgICAgICAocmVtb3ZlICMoPSAlIDpkZWZhdWx0KVxuICAgICAgICAgICAgKGtleXNcbiAgICAgICAgICAgICAgKC5nZXRNZXRob2RUYWJsZVxuICAgICAgICAgICAgICAgIF5jbG9qdXJlLmxhbmcuTXVsdGlGbiBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCkpKSkpKSkpXG5cblxuKGxldCBbdm9pZCAjPyg6Y2xqIChPYmplY3QuKSA6Y2xqcyAoanMtb2JqKSlcbiAgICAgIHZvaWQ/ICMoaWRlbnRpY2FsPyB2b2lkICUpXG4gICAgICBpbmZpeC1rZXl3b3JkPyAjKCN7OndoZW4gOmFzIDpndWFyZH0gJSldXG4gIDs7IHZvaWQgaXMgYSB1bmlxdWUgcGxhY2Vob2xkZXIgZm9yIG5vdGhpbmcgLS0gd2UgY2FuJ3QgdXNlIG5pbFxuICA7OyBiZWNhdXNlIHRoYXQncyBhIGxlZ2FsIHN5bWJvbCBpbiBhIHBhdHRlcm4gcm93XG4gIChkZWZuIHJlZ3JvdXAta2V5d29yZHMgW3BhdHRlcm5dXG4gICAgKGNvbmRcbiAgICAgICh2ZWN0b3I/IHBhdHRlcm4pXG4gICAgICAoZmlyc3RcbiAgICAgICAgKHJlZHVjZVxuICAgICAgICAgIChmbiBbW3Jlc3VsdCBwIHFdIHJdXG4gICAgICAgICAgICAoY29uZFxuICAgICAgICAgICAgICAodm9pZD8gcCkgW3Jlc3VsdCBxIHJdXG4gICAgICAgICAgICAgIChhbmQgKG5vdCAodm9pZD8gcikpIChpbmZpeC1rZXl3b3JkPyBxKSlcbiAgICAgICAgICAgICAgWyhjb25qIHJlc3VsdCAobGlzdCAocmVncm91cC1rZXl3b3JkcyBwKSBxIHIpKSB2b2lkIHZvaWRdXG4gICAgICAgICAgICAgIDplbHNlIFsoY29uaiByZXN1bHQgKHJlZ3JvdXAta2V5d29yZHMgcCkpIHEgcl0pKVxuICAgICAgICAgIFtbXSB2b2lkIHZvaWRdXG4gICAgICAgICAgKGNvbmogcGF0dGVybiB2b2lkIHZvaWQpKSlcblxuICAgICAgKHNlcT8gcGF0dGVybilcbiAgICAgIChjb25zIChyZWdyb3VwLWtleXdvcmRzIChmaXJzdCBwYXR0ZXJuKSkgKHJlc3QgcGF0dGVybikpXG5cbiAgICAgIDplbHNlIHBhdHRlcm4pKSlcblxuIChkZWZuIGdyb3VwLWtleXdvcmRzIFxuICAgXCJSZXR1cm5zIGEgcGF0dGVybiB3aXRoIHBhdHRlcm4ta2V5d29yZHMgKDp3aGVuIGFuZCA6YXMpIHByb3Blcmx5XG4gICAgZ3JvdXBlZC4gIFRoZSBvcmlnaW5hbCBwYXR0ZXJuIG1heSB1c2UgdGhlICdmbGF0dGVuZWQnIHN5bnRheC5cbiAgICBGb3IgZXhhbXBsZSwgYSAnZmxhdHRlbmVkJyBwYXR0ZXJuIHJvdyBsaWtlIFthIGIgOndoZW4gZXZlbj9dIGlzXG4gICAgZ3JvdXBlZCBhcyBbYSAoYiA6d2hlbiBldmVuPyldLlwiXG4gIFtwYXR0ZXJuXVxuICAoaWYgKHZlY3Rvcj8gcGF0dGVybikgKHJlZ3JvdXAta2V5d29yZHMgcGF0dGVybikgcGF0dGVybikpXG5cbihkZWZuIHRvLXBhdHRlcm4tcm93XG4gIFwiVGFrZSBhbiB1bnByb2Nlc3NlZCBwYXR0ZXJuIGV4cHJlc3Npb24gYW5kIGFuIGFjdGlvbiBleHByZXNzaW9uIGFuZCByZXR1cm5cbiAgIGEgcGF0dGVybiByb3cgb2YgdGhlIHByb2Nlc3NlZCBwYXR0ZXJuIGV4cHJlc3Npb24gcGx1cyB0aGUgYWN0aW9uIGVweHJlc3Npb24uXCJcbiAgW3BhdCBhY3Rpb25dXG4gIChsZXQgW3BzIChtYXAgZW1pdC1wYXR0ZXJuIChncm91cC1rZXl3b3JkcyBwYXQpKV1cbiAgICAocGF0dGVybi1yb3cgcHMgYWN0aW9uKSkpXG5cbihkZWZuIHdpbGRjYXJkcy1hbmQtZHVwbGljYXRlc1xuICBcIlJldHVybnMgYSB2ZWN0b3Igb2YgdHdvIGVsZW1lbnRzOiB0aGUgc2V0IG9mIGFsbCB3aWxkY2FyZHMgYW5kIHRoZSBcbiAgIHNldCBvZiBkdXBsaWNhdGUgd2lsZGNhcmRzLiAgVGhlIHVuZGVyYmFyIF8gaXMgZXhjbHVkZWQgZnJvbSBib3RoLlwiXG4gIFtwYXR0ZXJuc11cbiAgKGxvb3AgW3JlbWFpbmluZyBwYXR0ZXJucyBzZWVuICN7fSBkdXBzICN7fV1cbiAgICAoaWYtbGV0IFtwYXR0ZXJucyAoc2VxIHJlbWFpbmluZyldXG4gICAgICAobGV0IFtwYXQgKGZpcnN0IHBhdHRlcm5zKVxuICAgICAgICAgICAgcGF0cyAocmVzdCBwYXR0ZXJucyldXG4gICAgICAgIChjb25kXG4gICAgICAgICAgKG9yICg9IHBhdCAnXykgKD0gcGF0ICcmKSlcbiAgICAgICAgICAocmVjdXIgcGF0cyBzZWVuIGR1cHMpXG5cbiAgICAgICAgICAoc3ltYm9sPyBwYXQpXG4gICAgICAgICAgKGlmIChjb250YWlucz8gc2VlbiBwYXQpXG4gICAgICAgICAgICAocmVjdXIgcGF0cyBzZWVuIChjb25qIGR1cHMgcGF0KSlcbiAgICAgICAgICAgIChyZWN1ciBwYXRzIChjb25qIHNlZW4gcGF0KSBkdXBzKSlcbiAgICAgICAgICBcbiAgICAgICAgICAodmVjdG9yPyBwYXQpXG4gICAgICAgICAgKHJlY3VyIChjb25jYXQgcGF0cyBwYXQpIHNlZW4gZHVwcylcblxuICAgICAgICAgIChtYXA/IHBhdClcbiAgICAgICAgICAocmVjdXIgKGNvbmNhdCBwYXRzICh2YWxzIHBhdCkpIHNlZW4gZHVwcylcblxuICAgICAgICAgIChzZXE/IHBhdClcbiAgICAgICAgICAoY29uZFxuICAgICAgICAgICAgKD0gKGZpcnN0IHBhdCkgJ3F1b3RlKVxuICAgICAgICAgICAgKHJlY3VyIHBhdHMgc2VlbiBkdXBzKVxuXG4gICAgICAgICAgICAoPSAoZmlyc3QgcGF0KSA6b3IpXG4gICAgICAgICAgICAobGV0IFt3ZHMgKG1hcCB3aWxkY2FyZHMtYW5kLWR1cGxpY2F0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIChtYXAgbGlzdCAodGFrZS1udGggMiBwYXQpKSlcbiAgICAgICAgICAgICAgICAgICBtc2VlbiAoYXBwbHkgc2V0L3VuaW9uIChtYXAgZmlyc3Qgd2RzKSldXG4gICAgICAgICAgICAgIChyZWN1ciBwYXRzIChzZXQvdW5pb24gc2VlbiBtc2VlbilcbiAgICAgICAgICAgICAgICAoYXBwbHkgc2V0L3VuaW9uIGR1cHNcbiAgICAgICAgICAgICAgICAgIChzZXQvaW50ZXJzZWN0aW9uIHNlZW4gbXNlZW4pXG4gICAgICAgICAgICAgICAgICAobWFwIHNlY29uZCB3ZHMpKSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgICg9IChzZWNvbmQgcGF0KSA6YXMpXG4gICAgICAgICAgICAocmVjdXIgKGNvbmNhdCBwYXRzICh0YWtlLW50aCAyIHBhdCkpIHNlZW4gZHVwcylcblxuICAgICAgICAgICAgOmVsc2VcbiAgICAgICAgICAgIChyZWN1ciAoY29uaiBwYXRzIChmaXJzdCBwYXQpKSBzZWVuIGR1cHMpKVxuICAgICAgICAgIDplbHNlXG4gICAgICAgICAgKHJlY3VyIHBhdHMgc2VlbiBkdXBzKSkpXG4gICAgICBbc2VlbiBkdXBzXSkpKVxuXG4oZGVmbiBmaW5kLWR1cGxpY2F0ZS13aWxkY2FyZHMgW3BhdHRlcm5dXG4gIChzZWNvbmQgKHdpbGRjYXJkcy1hbmQtZHVwbGljYXRlcyBwYXR0ZXJuKSkpXG5cbihkZWZuIGNoZWNrLXBhdHRlcm4gW3BhdCB2YXJzIG52YXJzIHJvd251bV1cbiAgKGxldCBbcGF0IChncm91cC1rZXl3b3JkcyBwYXQpXVxuICAgICh3aGVuIChub3QgKHZlY3Rvcj8gcGF0KSlcbiAgICAgICh0aHJvd1xuICAgICAgICAoIz8oOmNsaiBBc3NlcnRpb25FcnJvci4gOmNsanMganMvRXJyb3IuKVxuICAgICAgICAgIChzdHIgXCJQYXR0ZXJuIHJvdyBcIiByb3dudW1cbiAgICAgICAgICAgIFwiOiBQYXR0ZXJuIHJvd3MgbXVzdCBiZSB3cmFwcGVkIGluIFtdLlwiXG4gICAgICAgICAgICBcIiBUcnkgY2hhbmdpbmcgXCIgcGF0IFwiIHRvIFtcIiBwYXQgXCJdLlwiIFxuICAgICAgICAgICAgKHdoZW4gKGxpc3Q/IHBhdClcbiAgICAgICAgICAgICAgKHN0ciBcIiBOb3RlOiBwYXR0ZXJuIHJvd3MgYXJlIG5vdCBwYXR0ZXJucy5cIlxuICAgICAgICAgICAgICAgIFwiIFRoZXkgY2Fubm90IGJlIHdyYXBwZWQgaW4gYSA6d2hlbiBndWFyZCwgZm9yIGV4YW1wbGVcIikpKSkpKVxuICAgICh3aGVuIChub3Q9IChjb3VudCBwYXQpIG52YXJzKVxuICAgICAgKHRocm93XG4gICAgICAgICgjPyg6Y2xqIEFzc2VydGlvbkVycm9yLiA6Y2xqcyBqcy9FcnJvci4pXG4gICAgICAgICAgKHN0ciBcIlBhdHRlcm4gcm93IFwiIHJvd251bVxuICAgICAgICAgICAgXCI6IFBhdHRlcm4gcm93IGhhcyBkaWZmZXJpbmcgbnVtYmVyIG9mIHBhdHRlcm5zLiBcIlxuICAgICAgICAgICAgcGF0IFwiIGhhcyBcIiAoY291bnQgcGF0KSBcIiBwYXR0ZXJuL3MsIGV4cGVjdGluZyBcIlxuICAgICAgICAgICAgbnZhcnMgXCIgZm9yIG9jY3VycmVuY2VzIFwiIHZhcnMpKSkpXG4gICAgKHdoZW4tbGV0IFtkdXBsaWNhdGVzIChzZXEgKGZpbmQtZHVwbGljYXRlLXdpbGRjYXJkcyBwYXQpKV1cbiAgICAgICh0aHJvd1xuICAgICAgICAoIz8oOmNsaiBBc3NlcnRpb25FcnJvci4gOmNsanMganMvRXJyb3IuKVxuICAgICAgICAgIChzdHIgXCJQYXR0ZXJuIHJvdyBcIiByb3dudW1cbiAgICAgICAgICAgIFwiOiBQYXR0ZXJuIHJvdyByZXVzZXMgd2lsZGNhcmRzIGluIFwiIHBhdFxuICAgICAgICAgICAgXCIuICBUaGUgZm9sbG93aW5nIHdpbGRjYXJkcyBhcmUgYW1iaWd1b3VzOiBcIlxuICAgICAgICAgICAgKGFwcGx5IHN0ciAoaW50ZXJwb3NlIFwiLCBcIiAoc29ydCBkdXBsaWNhdGVzKSkpXG4gICAgICAgICAgICBcIi4gIFRoZXJlJ3Mgbm8gZ3VhcmFudGVlIHRoYXQgdGhlIG1hdGNoZWQgdmFsdWVzIHdpbGwgYmUgc2FtZS5cIlxuICAgICAgICAgICAgXCIgIFJlbmFtZSB0aGUgb2NjdXJyZW5jZXMgdW5pcXVlbHkuXCIpKSkpKSlcblxuOzsgVGhpcyBjb3VsZCBiZSBzY2F0dGVyZWQgYXJvdW5kIGluIG90aGVyIGZ1bmN0aW9ucyB0byBiZSBtb3JlIGVmZmljaWVudFxuOzsgVHVybiBvZmYgKnN5bnRheC1jaGVjayogdG8gZGlzYWJsZVxuXG4oZGVmbiBjaGVjay1tYXRyaXgtYXJncyBbdmFycyBjbGF1c2VzXVxuICAod2hlbiAoc3ltYm9sPyB2YXJzKVxuICAgICh0aHJvd1xuICAgICAgKCM/KDpjbGogQXNzZXJ0aW9uRXJyb3IuIDpjbGpzIGpzL0Vycm9yLilcbiAgICAgICAgKHN0ciBcIk9jY3VycmVuY2VzIG11c3QgYmUgaW4gYSB2ZWN0b3IuXCJcbiAgICAgICAgICBcIiBUcnkgY2hhbmdpbmcgXCIgdmFycyBcIiB0byBbXCIgdmFycyBcIl1cIikpKSlcbiAgKHdoZW4gKG5vdCAodmVjdG9yPyB2YXJzKSlcbiAgICAodGhyb3dcbiAgICAgICgjPyg6Y2xqIEFzc2VydGlvbkVycm9yLiA6Y2xqcyBqcy9FcnJvci4pXG4gICAgICAgIChzdHIgXCJPY2N1cnJlbmNlcyBtdXN0IGJlIGluIGEgdmVjdG9yLiBcIlxuICAgICAgICAgIHZhcnMgXCIgaXMgbm90IGEgdmVjdG9yXCIpKSkpXG4gIChsZXQgW252YXJzIChjb3VudCB2YXJzKVxuICAgICAgICBjbHMgICAocGFydGl0aW9uIDIgY2xhdXNlcyldXG4gICAgKGRvc2VxIFtbW3BhdCBfXSByb3dudW1dIChtYXAgdmVjdG9yIChidXRsYXN0IGNscykgKHJlc3QgKHJhbmdlKSkpXVxuICAgICAgKHdoZW4gKD0gOmVsc2UgcGF0KVxuICAgICAgICAodGhyb3dcbiAgICAgICAgICAoIz8oOmNsaiBBc3NlcnRpb25FcnJvci4gOmNsanMganMvRXJyb3IuKVxuICAgICAgICAgICAgKHN0ciBcIlBhdHRlcm4gcm93IFwiIHJvd251bVxuICAgICAgICAgICAgICBcIjogOmVsc2UgZm9ybSBvbmx5IGFsbG93ZWQgb24gZmluYWwgcGF0dGVybiByb3dcIikpKSlcbiAgICAgIChjaGVjay1wYXR0ZXJuIHBhdCB2YXJzIG52YXJzIHJvd251bSkpXG4gICAgKHdoZW4tbGV0IFtbcGF0IF9dIChsYXN0IGNscyldXG4gICAgICAod2hlbi1ub3QgKD0gOmVsc2UgcGF0KVxuICAgICAgICAoY2hlY2stcGF0dGVybiBwYXQgdmFycyBudmFycyAoY291bnQgY2xzKSkpKSlcbiAgKHdoZW4gKG9kZD8gKGNvdW50IGNsYXVzZXMpKSBcbiAgICAodGhyb3dcbiAgICAgICgjPyg6Y2xqIEFzc2VydGlvbkVycm9yLiA6Y2xqcyBqcy9FcnJvci4pXG4gICAgICAgIChzdHIgXCJVbmV2ZW4gbnVtYmVyIG9mIFBhdHRlcm4gUm93cy4gVGhlIGxhc3QgZm9ybSBgXCJcbiAgICAgICAgICAobGFzdCBjbGF1c2VzKSBcImAgc2VlbXMgb3V0IG9mIHBsYWNlLlwiKSkpKSlcblxuKGRlZm4gcHJvY2Vzcy12YXJzXG4gIFwiUHJvY2VzcyB0aGUgdmFycyBmb3IgdGhlIHBhdHRlcm4gbWF0cml4LiBJZiB1c2VyIHByb3ZpZGVzIGFuXG4gICBleHByZXNzaW9uLCBjcmVhdGUgYSB2YXIgYW5kIGFubm90YXRlIHZpYSBtZXRhZGF0YSB3aXRoIHRoZVxuICAgb3JpZ2luYWwgZXhwcmVzc2lvbi5cIlxuICBbdmFyc11cbiAgKGxldGZuIFsocHJvY2Vzcy12YXIgW3Zhcl1cbiAgICAgICAgICAgIChpZi1ub3QgKHN5bWJvbD8gdmFyKVxuICAgICAgICAgICAgICAobGV0IFtuc3ltIChnZW5zeW0gXCJvY3ItXCIpXVxuICAgICAgICAgICAgICAgICh3aXRoLW1ldGEgbnN5bSB7Om9jci1leHByIHZhcn0pKVxuICAgICAgICAgICAgICB2YXIpKV1cbiAgICAodmVjIChtYXAgcHJvY2Vzcy12YXIgdmFycykpKSlcblxuKGRlZm4gZW1pdC1tYXRyaXhcbiAgXCJUYWtlIHRoZSBsaXN0IG9mIHZhcnMgYW5kIHNlcXVlbmNlIG9mIHVucHJvY2Vzc2VkIGNsYXVzZXMgYW5kXG4gICByZXR1cm4gdGhlIHBhdHRlcm4gbWF0cml4LiBUaGUgcGF0dGVybiBtYXRyaXggY29udGFpbnMgdGhlIHByb2Nlc3NlZFxuICAgcGF0dGVybiByb3dzIGFuZCB0aGUgbGlzdCBvZiB2YXJzIG9yaWdpbmFsbHkgc3BlY2lmaWVkLiBJbnNlcnRzXG4gICBhIGxhc3QgbWF0Y2ggLSA6ZWxzZSBpZiBwcm92aWRlZCBieSB0aGUgdXNlciBvciBhIGRlZmF1bHQgbWF0Y2ggdGhhdFxuICAgdGhyb3dzLlwiXG4gIChbdmFycyBjbGF1c2VzXVxuICAgIChlbWl0LW1hdHJpeCB2YXJzIGNsYXVzZXMgdHJ1ZSkpXG4gIChbdmFycyBjbGF1c2VzIGRlZmF1bHRdXG4gICAgKGxldCBbY3MgKHBhcnRpdGlvbiAyIGNsYXVzZXMpXG4gICAgICAgICAgdnMgKHByb2Nlc3MtdmFycyB2YXJzKVxuICAgICAgICAgIGNzIChsZXQgW1twIGFdIChsYXN0IGNzKVxuICAgICAgICAgICAgICAgICAgIGxhc3QtbWF0Y2ggKHZlYyAocmVwZWF0IChjb3VudCB2YXJzKSAnXykpXVxuICAgICAgICAgICAgICAgKGlmICg9IDplbHNlIHApXG4gICAgICAgICAgICAgICAgIChjb25qICh2ZWMgKGJ1dGxhc3QgY3MpKSBbbGFzdC1tYXRjaCBhXSlcbiAgICAgICAgICAgICAgICAgOzsgVE9ETzogdGhyb3cgYW4gZXhjZXB0aW9uIGlmIDplbHNlIGxpbmUgbm90IHByb3ZpZGVkIC0gRGF2aWRcbiAgICAgICAgICAgICAgICAgKGlmIGRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAoY29uaiAodmVjIGNzKVxuICAgICAgICAgICAgICAgICAgICAgW2xhc3QtbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgIz8oOmNsanNcbiAgICAgICAgICAgICAgICAgICAgICAgICBgKHRocm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGpzL0Vycm9yLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0ciBcIk5vIG1hdGNoaW5nIGNsYXVzZTogXCIgfkAoaW50ZXJwb3NlIFwiIFwiIHZzKSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xqXG4gICAgICAgICAgICAgICAgICAgICAgICAgYCh0aHJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RyIFwiTm8gbWF0Y2hpbmcgY2xhdXNlOiBcIiB+QChpbnRlcnBvc2UgXCIgXCIgdnMpKSkpKV0pXG4gICAgICAgICAgICAgICAgICAgY3MpKSldXG4gICAgICAocGF0dGVybi1tYXRyaXhcbiAgICAgICAgKHZlYyAobWFwICMoYXBwbHkgdG8tcGF0dGVybi1yb3cgJSkgY3MpKVxuICAgICAgICAocHJvY2Vzcy12YXJzIHZzKSkpKSlcblxuKGRlZm4gZXhlY3V0YWJsZS1mb3JtIFtub2RlXVxuICAobi10by1jbGogbm9kZSkpXG5cbjs7IFRPRE86IG1vcmUgc29waGlzdGljYXRlZCBhbmFseXNpcyB0aGF0IGFjdHVhbGx5IGNoZWNrcyB0aGF0IHJlY3VyIGlzXG47OyBub3QgYmVpbmcgdXNlZCBhcyBhIGxvY2FsIGJpbmRpbmcgd2hlbiBpdCBvY2N1cnMgLSBEYXZpZFxuXG4oZGVmbiByZWN1ci1wcmVzZW50PyBbYWN0aW9uc11cbiAgKGxldGZuIFsoYW5hbHl6ZS1hY3Rpb24gW2FjdGlvbl1cbiAgICAgICAgICAgIChpZiAoYW5kIChzZXF1ZW50aWFsPyBhY3Rpb24pXG4gICAgICAgICAgICAgICAgICAgICAoc29tZSAnI3tyZWN1cn0gKGZsYXR0ZW4gYWN0aW9uKSkpXG4gICAgICAgICAgICAgIHs6cmVjdXItcHJlc2VudCB0cnVlfSB7fSkpXVxuICAgIChzb21lIDpyZWN1ci1wcmVzZW50IChtYXAgYW5hbHl6ZS1hY3Rpb24gYWN0aW9ucykpKSlcblxuKGRlZm4gY2xqLWZvcm0gW3ZhcnMgY2xhdXNlc11cbiAgKHdoZW4gQCpzeW50YXgtY2hlY2sqIChjaGVjay1tYXRyaXgtYXJncyB2YXJzIGNsYXVzZXMpKVxuICAobGV0IFthY3Rpb25zIChtYXAgc2Vjb25kIChwYXJ0aXRpb24gMiBjbGF1c2VzKSlcbiAgICAgICAgcmVjdXItcHJlc2VudD8gKHJlY3VyLXByZXNlbnQ/IGFjdGlvbnMpXVxuICAgIDs7IFRPRE86IHRoaXMgaXMgbmFpdmUsIHJlY3VyLXByZXNlbnQ/IG5lZWQgaWdub3JlXG4gICAgOzsgcmVjdXIgaW50ZXJuYWwgdG8gYW4gYWN0aW9uIC0gRGF2aWRcbiAgICAoYXNzZXJ0IChub3QgKGFuZCAqbm8tYmFja3RyYWNrKiByZWN1ci1wcmVzZW50PykpXG4gICAgICBcIlJlY3VyIGZvcm0gcHJlc2VudCB5ZXQgKm5vLWJhY2t0cmFjayogc2V0IHRvIHRydWVcIilcbiAgICAoYmluZGluZyBbKnJlY3VyLXByZXNlbnQqIChvciAqcmVjdXItcHJlc2VudCpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1ci1wcmVzZW50P1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuby1iYWNrdHJhY2sqKV1cbiAgICAgICgtPiAoZW1pdC1tYXRyaXggdmFycyBjbGF1c2VzKVxuICAgICAgICBjb21waWxlXG4gICAgICAgIGV4ZWN1dGFibGUtZm9ybSkpKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBNYXRjaCBtYWNyb3NcblxuKGRlZm1hY3JvIG1hdGNoXG4gIFwiUGF0dGVybiBtYXRjaCBhIHJvdyBvZiBvY2N1cnJlbmNlcy4gVGFrZSBhIHZlY3RvciBvZiBvY2N1cnJlbmNlcywgdmFycy5cbiAgQ2xhdXNlIHF1ZXN0aW9uLWFuc3dlciBzeW50YXggaXMgbGlrZSBgY29uZGAuIFF1ZXN0aW9ucyBtdXN0IGJlXG4gIHdyYXBwZWQgaW4gYSB2ZWN0b3IsIHdpdGggc2FtZSBhcml0eSBhcyB2YXJzLiBMYXN0IHF1ZXN0aW9uIGNhbiBiZSA6ZWxzZSxcbiAgd2hpY2ggZXhwYW5kcyB0byBhIHJvdyBvZiB3aWxkY2FyZHMuIE9wdGlvbmFsbHkgbWF5IHRha2UgYSBzaW5nbGVcbiAgdmFyIG5vdCB3cmFwcGVkIGluIGEgdmVjdG9yLCBxdWVzdGlvbnMgdGhlbiBuZWVkIG5vdCBiZSB3cmFwcGVkIGluIGFcbiAgdmVjdG9yLlxuXG4gIEV4YW1wbGU6XG4gIChsZXQgW3ggMVxuICAgICAgICB5IDJdXG4gICAgKG1hdGNoIFt4IHkgM11cbiAgICAgIFsxIDIgM10gOmFuc3dlcjFcbiAgICAgIDplbHNlIDpkZWZhdWx0LWFuc3dlcikpXCJcbiAgW3ZhcnMgJiBjbGF1c2VzXVxuICAobGV0IFtbdmFycyBjbGF1c2VzXVxuICAgICAgICAoaWYgKHZlY3Rvcj8gdmFycylcbiAgICAgICAgICBbdmFycyBjbGF1c2VzXVxuICAgICAgICAgIFsodmVjdG9yIHZhcnMpXG4gICAgICAgICAgICAobWFwY2F0IChmbiBbW2MgYV1dXG4gICAgICAgICAgICAgICAgICAgICAgWyhpZiAobm90PSBjIDplbHNlKSAodmVjdG9yIGMpIGMpIGFdKVxuICAgICAgICAgICAgICAocGFydGl0aW9uIDIgY2xhdXNlcykpXSldXG4gICAoYmluZGluZyBbKmxpbmUqICgtPiAmZm9ybSBtZXRhIDpsaW5lKVxuICAgICAgICAgICAgICpsb2NhbHMqIChkaXNzb2MgJmVudiAnXylcbiAgICAgICAgICAgICAqd2FybmVkKiAoYXRvbSBmYWxzZSldXG4gICAgIGB+KGNsai1mb3JtIHZhcnMgY2xhdXNlcykpKSlcblxuKGRlZm1hY3JvIG1hdGNodiBbdHlwZSB2YXJzICYgY2xhdXNlc11cbiAgKGJpbmRpbmcgWyp2ZWN0b3ItdHlwZSogdHlwZVxuICAgICAgICAgICAgKmxpbmUqICgtPiAmZm9ybSBtZXRhIDpsaW5lKVxuICAgICAgICAgICAgKmxvY2FscyogKGRpc3NvYyAmZW52ICdfKVxuICAgICAgICAgICAgKndhcm5lZCogKGF0b20gZmFsc2UpXVxuICAgIGB+KGNsai1mb3JtIHZhcnMgY2xhdXNlcykpKVxuXG4oZGVmbWFjcm8gbWF0Y2htXG4gIFwiU2FtZSBhcyBtYXRjaCBidXQgc3VwcG9ydHMgSU1hdGNoTG9va3VwIHdoZW5cbiAgbWF0Y2hpbmcgbWFwcy5cIlxuICBbdmFycyAmIGNsYXVzZXNdXG4gIChsZXQgW1t2YXJzIGNsYXVzZXNdXG4gICAgICAgIChpZiAodmVjdG9yPyB2YXJzKVxuICAgICAgICAgIFt2YXJzIGNsYXVzZXNdXG4gICAgICAgICAgWyh2ZWN0b3IgdmFycylcbiAgICAgICAgICAgKG1hcGNhdCAoZm4gW1tjIGFdXVxuICAgICAgICAgICAgICAgICAgICAgWyhpZiAobm90PSBjIDplbHNlKSAodmVjdG9yIGMpIGMpIGFdKVxuICAgICAgICAgICAgIChwYXJ0aXRpb24gMiBjbGF1c2VzKSldKV1cbiAgICAoYmluZGluZyBbKm1hdGNoLWxvb2t1cCogdHJ1ZVxuICAgICAgICAgICAgICAqbGluZSogKC0+ICZmb3JtIG1ldGEgOmxpbmUpXG4gICAgICAgICAgICAgICpsb2NhbHMqIChkaXNzb2MgJmVudiAnXylcbiAgICAgICAgICAgICAgKndhcm5lZCogKGF0b20gZmFsc2UpXVxuICAgICAgYH4oY2xqLWZvcm0gdmFycyBjbGF1c2VzKSkpKVxuXG4oZGVmbWFjcm8gbWF0Y2gtbGV0IFtiaW5kaW5ncyAmIGJvZHldXG4gIChsZXQgW2JpbmR2YXJzIyAodGFrZS1udGggMiBiaW5kaW5ncyldXG4gICAgYChsZXQgfmJpbmRpbmdzXG4gICAgICAgKG1hdGNoIFt+QGJpbmR2YXJzI11cbiAgICAgICAgIH5AYm9keSkpKSlcbihkZWZtYWNybyBhc2V0cyBbYSB2c11cbiAgYChkb1xuICAgICB+QChtYXAgKGZuIFthIGIgY10gKGNvbmNhdCBhIChsaXN0IGIgYykpKVxuICAgICAgICAgKHJlcGVhdCBgKGFzZXQgfmEpKSAocmFuZ2UgKGNvdW50IHZzKSkgdnMpXG4gICAgIH5hKSlcblxuKGRlZm1hY3JvIG1hdGNoXG4gIFt2YXJzICYgY2xhdXNlc11cbiAgKGxldCBbW3ZhcnMgY2xhdXNlc11cbiAgICAgICAgKGlmICh2ZWN0b3I/IHZhcnMpXG4gICAgICAgICAgW3ZhcnMgY2xhdXNlc11cbiAgICAgICAgICBbKHZlY3RvciB2YXJzKVxuICAgICAgICAgICAgKG1hcGNhdCAoZm4gW1tjIGFdXVxuICAgICAgICAgICAgICAgICAgICAgIFsoaWYgKG5vdD0gYyA6ZWxzZSkgKHZlY3RvciBjKSBjKSBhXSlcbiAgICAgICAgICAgICAgKHBhcnRpdGlvbiAyIGNsYXVzZXMpKV0pXVxuICAgKGJpbmRpbmcgWypsaW5lKiAoLT4gJmZvcm0gbWV0YSA6bGluZSlcbiAgICAgICAgICAgICAqbG9jYWxzKiAoZGlzc29jICg6bG9jYWxzICZlbnYpICdfKVxuICAgICAgICAgICAgICp3YXJuZWQqIChhdG9tIGZhbHNlKV1cbiAgICAgYH4oY2xqLWZvcm0gdmFycyBjbGF1c2VzKSkpKVxuXG4oZGVmbWFjcm8gbWF0Y2gqXG4gIFt2YXJzICYgY2xhdXNlc11cbiAgKGxldCBbW3ZhcnMgY2xhdXNlc11cbiAgICAgICAgKGlmICh2ZWN0b3I/IHZhcnMpXG4gICAgICAgICAgW3ZhcnMgY2xhdXNlc11cbiAgICAgICAgICBbKHZlY3RvciB2YXJzKVxuICAgICAgICAgICAgKG1hcGNhdCAoZm4gW1tjIGFdXVxuICAgICAgICAgICAgICAgICAgICAgIFsoaWYgKG5vdD0gYyA6ZWxzZSkgKHZlY3RvciBjKSBjKSBhXSlcbiAgICAgICAgICAgICAgKHBhcnRpdGlvbiAyIGNsYXVzZXMpKV0pXVxuICAgKGJpbmRpbmcgWypsaW5lKiAoLT4gJmZvcm0gbWV0YSA6bGluZSlcbiAgICAgICAgICAgICAqbG9jYWxzKiAoZGlzc29jICg6bG9jYWxzICZlbnYpICdfKVxuICAgICAgICAgICAgICp3YXJuZWQqIChhdG9tIGZhbHNlKVxuICAgICAgICAgICAgICpuby1iYWNrdHJhY2sqIHRydWVdXG4gICAgIGB+KGNsai1mb3JtIHZhcnMgY2xhdXNlcykpKSlcblxuKGRlZm1hY3JvIG1hdGNodiBbdHlwZSB2YXJzICYgY2xhdXNlc11cbiAgKGJpbmRpbmcgWyp2ZWN0b3ItdHlwZSogdHlwZVxuICAgICAgICAgICAgKmxpbmUqICgtPiAmZm9ybSBtZXRhIDpsaW5lKVxuICAgICAgICAgICAgKmxvY2FscyogKGRpc3NvYyAoOmxvY2FscyAmZW52KSAnXylcbiAgICAgICAgICAgICp3YXJuZWQqIChhdG9tIGZhbHNlKV1cbiAgICBgfihjbGotZm9ybSB2YXJzIGNsYXVzZXMpKSlcblxuXG4oZGVmbWFjcm8gbWF0Y2h2KiBbdHlwZSB2YXJzICYgY2xhdXNlc11cbiAgKGJpbmRpbmcgWyp2ZWN0b3ItdHlwZSogdHlwZVxuICAgICAgICAgICAgKmxpbmUqICgtPiAmZm9ybSBtZXRhIDpsaW5lKVxuICAgICAgICAgICAgKmxvY2FscyogKGRpc3NvYyAoOmxvY2FscyAmZW52KSAnXylcbiAgICAgICAgICAgICp3YXJuZWQqIChhdG9tIGZhbHNlKVxuICAgICAgICAgICAgKm5vLWJhY2t0cmFjayogdHJ1ZV1cbiAgICBgfihjbGotZm9ybSB2YXJzIGNsYXVzZXMpKSlcblxuKGRlZm1hY3JvIG1hdGNobVxuICBbdmFycyAmIGNsYXVzZXNdXG4gIChsZXQgW1t2YXJzIGNsYXVzZXNdXG4gICAgICAgIChpZiAodmVjdG9yPyB2YXJzKVxuICAgICAgICAgIFt2YXJzIGNsYXVzZXNdXG4gICAgICAgICAgWyh2ZWN0b3IgdmFycylcbiAgICAgICAgICAgIChtYXBjYXQgKGZuIFtbYyBhXV1cbiAgICAgICAgICAgICAgICAgICAgICBbKGlmIChub3Q9IGMgOmVsc2UpICh2ZWN0b3IgYykgYykgYV0pXG4gICAgICAgICAgICAgIChwYXJ0aXRpb24gMiBjbGF1c2VzKSldKV1cbiAgIChiaW5kaW5nIFsqbGluZSogKC0+ICZmb3JtIG1ldGEgOmxpbmUpXG4gICAgICAgICAgICAgKmxvY2FscyogKGRpc3NvYyAoOmxvY2FscyAmZW52KSAnXylcbiAgICAgICAgICAgICAqd2FybmVkKiAoYXRvbSBmYWxzZSldXG4gICAgIGB+KGNsai1mb3JtIHZhcnMgY2xhdXNlcykpKSlcblxuKGRlZm1hY3JvIG1hdGNoLWxldCBbYmluZGluZ3MgJiBib2R5XVxuICAobGV0IFtiaW5kdmFycyMgKHRha2UtbnRoIDIgYmluZGluZ3MpXVxuICAgIGAobGV0IH5iaW5kaW5nc1xuICAgICAgIChtYXRjaCBbfkBiaW5kdmFycyNdXG4gICAgICAgICB+QGJvZHkpKSkpXG5cbihkZWZtYWNybyBtYXRjaC1sZXQqIFtiaW5kaW5ncyAmIGJvZHldXG4gIChsZXQgW2JpbmR2YXJzIyAodGFrZS1udGggMiBiaW5kaW5ncyldXG4gICAgYChsZXQgfmJpbmRpbmdzXG4gICAgICAgKG1hdGNoKiBbfkBiaW5kdmFycyNdXG4gICAgICAgICB+QGJvZHkpKSkpXG4iXX0=