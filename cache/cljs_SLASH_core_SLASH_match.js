// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.match");
/**
 * Enable syntax check of match macros
 */
cljs.core.match._STAR_syntax_check_STAR_ = cljs.core.atom.call(null,true);
cljs.core.match._STAR_locals_STAR_ = null;
/**
 * Allow map matching syntax to check for IMatchLookup
 */
cljs.core.match._STAR_match_lookup_STAR_ = false;
/**
 * Default vector type. Can be rebound allowing emission of
 *           custom inline code for vector patterns, for example
 *           type-hinted primitive array operations
 */
cljs.core.match._STAR_vector_type_STAR_ = new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296));
/**
 * In the presence of recur we cannot apply code size optimizations
 */
cljs.core.match._STAR_recur_present_STAR_ = false;
/**
 * Flag to optimize performance over code size.
 */
cljs.core.match._STAR_no_backtrack_STAR_ = false;
/**
 * Pre-allocated exception used for backtracing
 */
cljs.core.match.backtrack = (new Error("Could not find match."));
cljs.core.match.backtrack_expr = (function cljs$core$match$backtrack_expr(){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",(463239872),null),null,(1),null))));
});
cljs.core.match.backtrack_sym = (function cljs$core$match$backtrack_sym(){
return new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",(463239872),null);
});
cljs.core.match._STAR_backtrack_stack_STAR_ = cljs.core.List.EMPTY;
cljs.core.match._STAR_root_STAR_ = true;
cljs.core.match.warn = (function cljs$core$match$warn(msg){
if(cljs.core.not.call(null,cljs.core.deref.call(null,cljs.core.match._STAR_warned_STAR_))){
var _STAR_print_fn_STAR__orig_val__680_682 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__681_683 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__681_683);

try{cljs.core.println.call(null,"WARNING:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),", line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.match._STAR_line_STAR_),":"].join(''),msg);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__680_682);
}
return cljs.core.reset_BANG_.call(null,cljs.core.match._STAR_warned_STAR_,true);
} else {
return null;
}
});
(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$val_at$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,not_found);
}));
cljs.core.match.val_at_expr = (function cljs$core$match$val_at_expr(var_args){
var args__12669__auto__ = [];
var len__12666__auto___685 = arguments.length;
var i__12667__auto___686 = (0);
while(true){
if((i__12667__auto___686 < len__12666__auto___685)){
args__12669__auto__.push((arguments[i__12667__auto___686]));

var G__687 = (i__12667__auto___686 + (1));
i__12667__auto___686 = G__687;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((0) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((0)),(0),null)):null);
return cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(argseq__12670__auto__);
});

(cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",(-296075407),null),null,(1),null)),args));
}));

(cljs.core.match.val_at_expr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match.val_at_expr.cljs$lang$applyTo = (function (seq684){
var self__12659__auto__ = this;
return self__12659__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq684));
}));

cljs.core.match.vector_type = (function cljs$core$match$vector_type(var_args){
var args__12669__auto__ = [];
var len__12666__auto___690 = arguments.length;
var i__12667__auto___691 = (0);
while(true){
if((i__12667__auto___691 < len__12666__auto___690)){
args__12669__auto__.push((arguments[i__12667__auto___691]));

var G__692 = (i__12667__auto___691 + (1));
i__12667__auto___691 = G__692;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return cljs.core.match.vector_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(cljs.core.match.vector_type.cljs$core$IFn$_invoke$arity$variadic = (function (t,r){
return t;
}));

(cljs.core.match.vector_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.match.vector_type.cljs$lang$applyTo = (function (seq688){
var G__689 = cljs.core.first.call(null,seq688);
var seq688__$1 = cljs.core.next.call(null,seq688);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__689,seq688__$1);
}));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.check_size_QMARK_ !== 'undefined')){
} else {
cljs.core.match.check_size_QMARK_ = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","check-size?"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.tag !== 'undefined')){
} else {
cljs.core.match.tag = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","tag"),(function (t){
return t;
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.test_inline !== 'undefined')){
} else {
cljs.core.match.test_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","test-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.test_with_size_inline !== 'undefined')){
} else {
cljs.core.match.test_with_size_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","test-with-size-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.test_with_min_size_inline !== 'undefined')){
} else {
cljs.core.match.test_with_min_size_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","test-with-min-size-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.count_inline !== 'undefined')){
} else {
cljs.core.match.count_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","count-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.nth_inline !== 'undefined')){
} else {
cljs.core.match.nth_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","nth-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.nth_offset_inline !== 'undefined')){
} else {
cljs.core.match.nth_offset_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","nth-offset-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.subvec_inline !== 'undefined')){
} else {
cljs.core.match.subvec_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","subvec-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.nthnext_inline !== 'undefined')){
} else {
cljs.core.match.nthnext_inline = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","nthnext-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match.check_size_QMARK_,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (_){
return true;
}));
cljs.core._add_method.call(null,cljs.core.match.tag,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (t){
throw (new Error(["No tag specified for vector specialization ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
}));
cljs.core._add_method.call(null,cljs.core.match.tag,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_){
return cljs.core.PersistentVector;
}));
cljs.core.match.with_tag = (function cljs$core$match$with_tag(t,ocr){
var the_tag = cljs.core.match.tag.call(null,t);
var the_tag__$1 = the_tag;
return cljs.core.vary_meta.call(null,ocr,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),the_tag__$1);
});
cljs.core._add_method.call(null,cljs.core.match.test_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr){
var the_tag = cljs.core.match.tag.call(null,t);
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
cljs.core._add_method.call(null,cljs.core.match.test_with_size_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,size){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.test_inline.call(null,t,ocr),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",(-632471488),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.count_inline.call(null,t,cljs.core.match.with_tag.call(null,t,ocr)),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))),null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match.test_with_min_size_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,size){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.test_inline.call(null,t,ocr),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",(350096541),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.count_inline.call(null,t,cljs.core.match.with_tag.call(null,t,ocr)),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))),null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match.count_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",(-921270233),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match.nth_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr,i){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",(1961052085),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,i,null,(1),null))));
}));
cljs.core._add_method.call(null,cljs.core.match.nth_offset_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (t,ocr,i,offset){
return cljs.core.match.nth_inline.call(null,t,ocr,i);
}));
cljs.core._add_method.call(null,cljs.core.match.subvec_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function() {
var G__693 = null;
var G__693__3 = (function (_,ocr,start){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",(1039737205),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,start,null,(1),null))));
});
var G__693__4 = (function (_,ocr,start,end){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",(1039737205),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null))));
});
G__693 = function(_,ocr,start,end){
switch(arguments.length){
case 3:
return G__693__3.call(this,_,ocr,start);
case 4:
return G__693__4.call(this,_,ocr,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__693.cljs$core$IFn$_invoke$arity$3 = G__693__3;
G__693.cljs$core$IFn$_invoke$arity$4 = G__693__4;
return G__693;
})()
);
cljs.core._add_method.call(null,cljs.core.match.nthnext_inline,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (_,ocr,n){
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
cljs.core.match.constructor_QMARK_ = (function cljs$core$match$constructor_QMARK_(p){
return cljs.core.not.call(null,cljs.core.match.wildcard_pattern_QMARK_.call(null,p));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.groupable_QMARK_ !== 'undefined')){
} else {
/**
 * Determine if two patterns may be grouped together for simultaneous
 * testing.
 */
cljs.core.match.groupable_QMARK_ = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","groupable?"),(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(b)], null);
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (a,b){
return cljs.core._EQ_.call(null,a,b);
}));


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeq}
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.INext}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.match.protocols.IVecMod}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match.PatternRow = (function (ps,action,bindings){
this.ps = ps;
this.action = action;
this.bindings = bindings;
this.cljs$lang$protocol_mask$partition0$ = 10486747;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.PatternRow.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.PatternRow)) && (cljs.core._EQ_.call(null,self__.ps,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.action,new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.bindings,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__695 = k;
var G__695__$1 = (((G__695 instanceof cljs.core.Keyword))?G__695.fqn:null);
switch (G__695__$1) {
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

(cljs.core.match.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.call(null,self__.ps,i);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,x){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.call(null,self__.ps,i,x);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__9395__auto__ = cljs.core.next.call(null,self__.ps);
if(temp__9395__auto__){
var nps = temp__9395__auto__;
return (new cljs.core.match.PatternRow(nps,self__.action,self__.bindings));
} else {
return (new cljs.core.match.PatternRow(cljs.core.PersistentVector.EMPTY,self__.action,self__.bindings));
}
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count.call(null,self__.ps);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return this$__$1.equals(other);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.match.protocols.drop_nth.call(null,self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),self__.ps),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.match.protocols.swap.call(null,self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,self__.ps);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.assoc.call(null,self__.ps,k,v),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq.call(null,self__.ps);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.conj.call(null,self__.ps,x),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.call = (function (self__,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.nth.call(null,self__.ps,n);
}));

(cljs.core.match.PatternRow.prototype.apply = (function (self__,args694){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args694)));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var _ = this;
return cljs.core.nth.call(null,self__.ps,n);
}));

(cljs.core.match.PatternRow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"action","action",(829293503),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null);
}));

(cljs.core.match.PatternRow.cljs$lang$type = true);

(cljs.core.match.PatternRow.cljs$lang$ctorStr = "cljs.core.match/PatternRow");

(cljs.core.match.PatternRow.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/PatternRow");
}));

/**
 * Positional factory function for cljs.core.match/PatternRow.
 */
cljs.core.match.__GT_PatternRow = (function cljs$core$match$__GT_PatternRow(ps,action,bindings){
return (new cljs.core.match.PatternRow(ps,action,bindings));
});

cljs.core.match.pattern_row = (function cljs$core$match$pattern_row(var_args){
var G__698 = arguments.length;
switch (G__698) {
case (2):
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$2 = (function (ps,action){
return cljs.core.match.pattern_row.call(null,ps,action,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3 = (function (ps,action,bindings){
var ps__$1 = ((cljs.core.vector_QMARK_.call(null,ps))?ps:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,ps));
return (new cljs.core.match.PatternRow(ps__$1,action,bindings));
}));

(cljs.core.match.pattern_row.cljs$lang$maxFixedArity = (3));

cljs.core.match.update_pattern = (function cljs$core$match$update_pattern(prow,i,p){
return cljs.core.match.pattern_row.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow),i,p),new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(prow),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match.all_wildcards_QMARK_ = (function cljs$core$match$all_wildcards_QMARK_(prow){
return cljs.core.every_QMARK_.call(null,cljs.core.match.wildcard_pattern_QMARK_,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match.drop_nth_bind = (function cljs$core$match$drop_nth_bind(prow,n,ocr){
var ps = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(prow);
var p = ps.call(null,n);
var action = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(prow);
var bind_expr = cljs.core.match.leaf_bind_expr.call(null,ocr);
var as = new cljs.core.Keyword(null,"as","as",(1148689641)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p));
var bindings = (function (){var or__10116__auto__ = new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(prow);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var bindings__$1 = (cljs.core.truth_(as)?cljs.core.conj.call(null,bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [as,bind_expr], null)):bindings);
var bindings__$2 = (cljs.core.truth_(cljs.core.match.named_wildcard_pattern_QMARK_.call(null,p))?cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(p),bind_expr], null)):bindings__$1);
return cljs.core.match.pattern_row.call(null,cljs.core.match.protocols.drop_nth.call(null,ps,n),action,bindings__$2);
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
cljs.core.match.LeafNode = (function (value,bindings,__meta,__extmap,__hash){
this.value = value;
this.bindings = bindings;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k701,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__705 = k701;
var G__705__$1 = (((G__705 instanceof cljs.core.Keyword))?G__705.fqn:null);
switch (G__705__$1) {
case "value":
return self__.value;

break;
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k701,else__11461__auto__);

}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.empty_QMARK_.call(null,self__.bindings)))){
var bindings__$1 = cljs.core.remove.call(null,(function (p__706){
var vec__707 = p__706;
var sym = cljs.core.nth.call(null,vec__707,(0),null);
var _ = cljs.core.nth.call(null,vec__707,(1),null);
return cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
}),self__.bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,bindings__$1)))),null,(1),null)),(new cljs.core.List(null,self__.value,null,(1),null))));
} else {
return self__.value;
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__710){
var vec__711 = p__710;
var k__11487__auto__ = cljs.core.nth.call(null,vec__711,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__711,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match.LeafNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",(305978217)),self__.value],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null))], null),self__.__extmap));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__700){
var self__ = this;
var G__700__$1 = this;
return (new cljs.core.RecordIter((0),G__700__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"bindings","bindings",(1271397192))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((1133054042) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this702,other703){
var self__ = this;
var this702__$1 = this;
return (((!((other703 == null)))) && ((this702__$1.constructor === other703.constructor)) && (cljs.core._EQ_.call(null,this702__$1.value,other703.value)) && (cljs.core._EQ_.call(null,this702__$1.bindings,other703.bindings)) && (cljs.core._EQ_.call(null,this702__$1.__extmap,other703.__extmap)));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",(305978217)),null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__700){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__714 = cljs.core.keyword_identical_QMARK_;
var expr__715 = k__11472__auto__;
if(cljs.core.truth_(pred__714.call(null,new cljs.core.Keyword(null,"value","value",(305978217)),expr__715))){
return (new cljs.core.match.LeafNode(G__700,self__.bindings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__714.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),expr__715))){
return (new cljs.core.match.LeafNode(self__.value,G__700,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__700),null));
}
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",(305978217)),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings,null))], null),self__.__extmap));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__700){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,G__700,self__.__extmap,self__.__hash));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match.LeafNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",(1946509744),null),new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null)], null);
}));

(cljs.core.match.LeafNode.cljs$lang$type = true);

(cljs.core.match.LeafNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match/LeafNode",null,(1),null));
}));

(cljs.core.match.LeafNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match/LeafNode");
}));

/**
 * Positional factory function for cljs.core.match/LeafNode.
 */
cljs.core.match.__GT_LeafNode = (function cljs$core$match$__GT_LeafNode(value,bindings){
return (new cljs.core.match.LeafNode(value,bindings,null,null,null));
});

/**
 * Factory function for cljs.core.match/LeafNode, taking a map of keywords to field values.
 */
cljs.core.match.map__GT_LeafNode = (function cljs$core$match$map__GT_LeafNode(G__704){
var extmap__11545__auto__ = (function (){var G__717 = cljs.core.dissoc.call(null,G__704,new cljs.core.Keyword(null,"value","value",(305978217)),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)));
if(cljs.core.record_QMARK_.call(null,G__704)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__717);
} else {
return G__717;
}
})();
return (new cljs.core.match.LeafNode(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(G__704),new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(G__704),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match.leaf_node = (function cljs$core$match$leaf_node(var_args){
var G__720 = arguments.length;
switch (G__720) {
case (1):
return cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$1 = (function (value){
return (new cljs.core.match.LeafNode(value,cljs.core.PersistentVector.EMPTY,null,null,null));
}));

(cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$2 = (function (value,bindings){
return (new cljs.core.match.LeafNode(value,bindings,null,null,null));
}));

(cljs.core.match.leaf_node.cljs$lang$maxFixedArity = (2));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.leaf_bind_expr !== 'undefined')){
} else {
cljs.core.match.leaf_bind_expr = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","leaf-bind-expr"),(function (ocr){
return new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword(null,"seq","seq",(-1817803783)),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}));
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ocr));
}));
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword(null,"map","map",(1371690461)),(function (ocr){
var m = cljs.core.meta.call(null,ocr);
return cljs.core.match.val_at_expr.call(null,new cljs.core.Keyword(null,"map-sym","map-sym",(1467543192)).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"key","key",(-1516042587)).cljs$core$IFn$_invoke$arity$1(m));
}));
cljs.core._add_method.call(null,cljs.core.match.leaf_bind_expr,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (ocr){
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
cljs.core.match.FailNode = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.FailNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match.FailNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k723,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__727 = k723;
switch (G__727) {
default:
return cljs.core.get.call(null,self__.__extmap,k723,else__11461__auto__);

}
}));

(cljs.core.match.FailNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.FailNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",(750655924),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),(new cljs.core.List(null,"No match found.",null,(1),null)))),null,(1),null)))),null,(1),null))));
} else {
return cljs.core.match.backtrack_expr.call(null);
}
}));

(cljs.core.match.FailNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__728){
var vec__729 = p__728;
var k__11487__auto__ = cljs.core.nth.call(null,vec__729,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__729,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match.FailNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match.FailNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__722){
var self__ = this;
var G__722__$1 = this;
return (new cljs.core.RecordIter((0),G__722__$1,(0),cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.FailNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match.FailNode(self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.FailNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((0) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((-600001251) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match.FailNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this724,other725){
var self__ = this;
var this724__$1 = this;
return (((!((other725 == null)))) && ((this724__$1.constructor === other725.constructor)) && (cljs.core._EQ_.call(null,this724__$1.__extmap,other725.__extmap)));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.EMPTY,k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match.FailNode(self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match.FailNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__722){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__732 = cljs.core.keyword_identical_QMARK_;
var expr__733 = k__11472__auto__;
return (new cljs.core.match.FailNode(self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__722),null));
}));

(cljs.core.match.FailNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__722){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match.FailNode(G__722,self__.__extmap,self__.__hash));
}));

(cljs.core.match.FailNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match.FailNode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cljs.core.match.FailNode.cljs$lang$type = true);

(cljs.core.match.FailNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match/FailNode",null,(1),null));
}));

(cljs.core.match.FailNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match/FailNode");
}));

/**
 * Positional factory function for cljs.core.match/FailNode.
 */
cljs.core.match.__GT_FailNode = (function cljs$core$match$__GT_FailNode(){
return (new cljs.core.match.FailNode(null,null,null));
});

/**
 * Factory function for cljs.core.match/FailNode, taking a map of keywords to field values.
 */
cljs.core.match.map__GT_FailNode = (function cljs$core$match$map__GT_FailNode(G__726){
var extmap__11545__auto__ = (function (){var G__735 = cljs.core.dissoc.call(null,G__726);
if(cljs.core.record_QMARK_.call(null,G__726)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__735);
} else {
return G__735;
}
})();
return (new cljs.core.match.FailNode(null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match.fail_node = (function cljs$core$match$fail_node(){
return (new cljs.core.match.FailNode(null,null,null));
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
cljs.core.match.BindNode = (function (bindings,node,__meta,__extmap,__hash){
this.bindings = bindings;
this.node = node;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.BindNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match.BindNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k738,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__742 = k738;
var G__742__$1 = (((G__742 instanceof cljs.core.Keyword))?G__742.fqn:null);
switch (G__742__$1) {
case "bindings":
return self__.bindings;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k738,else__11461__auto__);

}
}));

(cljs.core.match.BindNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.BindNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,self__.bindings))),null,(1),null)),(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj.call(null,self__.node),null,(1),null))));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__743){
var vec__744 = p__743;
var k__11487__auto__ = cljs.core.nth.call(null,vec__744,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__744,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match.BindNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match.BindNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",(581201198)),self__.node],null))], null),self__.__extmap));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__737){
var self__ = this;
var G__737__$1 = this;
return (new cljs.core.RecordIter((0),G__737__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),new cljs.core.Keyword(null,"node","node",(581201198))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.BindNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.BindNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((1009235871) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match.BindNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this739,other740){
var self__ = this;
var this739__$1 = this;
return (((!((other740 == null)))) && ((this739__$1.constructor === other740.constructor)) && (cljs.core._EQ_.call(null,this739__$1.bindings,other740.bindings)) && (cljs.core._EQ_.call(null,this739__$1.node,other740.node)) && (cljs.core._EQ_.call(null,this739__$1.__extmap,other740.__extmap)));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),null,new cljs.core.Keyword(null,"node","node",(581201198)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match.BindNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__737){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__747 = cljs.core.keyword_identical_QMARK_;
var expr__748 = k__11472__auto__;
if(cljs.core.truth_(pred__747.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),expr__748))){
return (new cljs.core.match.BindNode(G__737,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__747.call(null,new cljs.core.Keyword(null,"node","node",(581201198)),expr__748))){
return (new cljs.core.match.BindNode(self__.bindings,G__737,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__737),null));
}
}
}));

(cljs.core.match.BindNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",(581201198)),self__.node,null))], null),self__.__extmap));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__737){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match.BindNode(self__.bindings,self__.node,G__737,self__.__extmap,self__.__hash));
}));

(cljs.core.match.BindNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match.BindNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",(-1383038577),null),new cljs.core.Symbol(null,"node","node",(-2073234571),null)], null);
}));

(cljs.core.match.BindNode.cljs$lang$type = true);

(cljs.core.match.BindNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match/BindNode",null,(1),null));
}));

(cljs.core.match.BindNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match/BindNode");
}));

/**
 * Positional factory function for cljs.core.match/BindNode.
 */
cljs.core.match.__GT_BindNode = (function cljs$core$match$__GT_BindNode(bindings,node){
return (new cljs.core.match.BindNode(bindings,node,null,null,null));
});

/**
 * Factory function for cljs.core.match/BindNode, taking a map of keywords to field values.
 */
cljs.core.match.map__GT_BindNode = (function cljs$core$match$map__GT_BindNode(G__741){
var extmap__11545__auto__ = (function (){var G__750 = cljs.core.dissoc.call(null,G__741,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)),new cljs.core.Keyword(null,"node","node",(581201198)));
if(cljs.core.record_QMARK_.call(null,G__741)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__750);
} else {
return G__750;
}
})();
return (new cljs.core.match.BindNode(new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(G__741),new cljs.core.Keyword(null,"node","node",(581201198)).cljs$core$IFn$_invoke$arity$1(G__741),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match.bind_node = (function cljs$core$match$bind_node(bindings,node){
return (new cljs.core.match.BindNode(bindings,node,null,null,null));
});
cljs.core.match.dag_clause_to_clj = (function cljs$core$match$dag_clause_to_clj(occurrence,pattern,action){
var test = (((((!((pattern == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pattern.cljs$core$match$protocols$IPatternCompile$))))?true:(((!pattern.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.IPatternCompile,pattern):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.IPatternCompile,pattern)))?cljs.core.match.protocols.to_source_STAR_.call(null,pattern,occurrence):cljs.core.match.to_source.call(null,pattern,occurrence));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.core.match.protocols.n_to_clj.call(null,action)], null);
});
cljs.core.match.catch_error = (function cljs$core$match$catch_error(var_args){
var args__12669__auto__ = [];
var len__12666__auto___754 = arguments.length;
var i__12667__auto___755 = (0);
while(true){
if((i__12667__auto___755 < len__12666__auto___754)){
args__12669__auto__.push((arguments[i__12667__auto___755]));

var G__756 = (i__12667__auto___755 + (1));
i__12667__auto___755 = G__756;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((0) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((0)),(0),null)):null);
return cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic(argseq__12670__auto__);
});

(cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var err_sym = new cljs.core.Symbol("js","Error","js/Error",(-1692659266),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",(-1616370245),null),null,(1),null)),(new cljs.core.List(null,err_sym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22__auto__","e__22__auto__",(460521825),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",(608476750),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22__auto__","e__22__auto__",(460521825),null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.backtrack_sym.call(null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),body)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",(595905694),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__22__auto__","e__22__auto__",(460521825),null),null,(1),null)))),null,(1),null)))),null,(1),null))));
}));

(cljs.core.match.catch_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match.catch_error.cljs$lang$applyTo = (function (seq753){
var self__12659__auto__ = this;
return self__12659__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq753));
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
cljs.core.match.SwitchNode = (function (occurrence,cases,default$,__meta,__extmap,__hash){
this.occurrence = occurrence;
this.cases = cases;
this.default$ = default$;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k758,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__762 = k758;
var G__762__$1 = (((G__762 instanceof cljs.core.Keyword))?G__762.fqn:null);
switch (G__762__$1) {
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
return cljs.core.get.call(null,self__.__extmap,k758,else__11461__auto__);

}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var clauses = cljs.core.doall.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core.match.dag_clause_to_clj,self__.occurrence),self__.cases));
var bind_expr = new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,self__.occurrence));
var cond_expr = (cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)?cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),clauses)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null,(1),null)),(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$),null,(1),null)))))):cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),clauses)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),null,(1),null)),(new cljs.core.List(null,cljs.core.match.backtrack_expr.call(null),null,(1),null)))))));
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
if(cljs.core.truth_(bind_expr)){
return cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null))))),null,(1),null)))),(new cljs.core.List(null,cond_expr,null,(1),null))));
} else {
return cond_expr;
}
} else {
if(cljs.core.truth_(bind_expr)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",(-1273693247),null),null,(1),null)),(new cljs.core.List(null,cljs.core.doall.call(null,cljs.core.concat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null))))),null,(1),null)))),(new cljs.core.List(null,cond_expr,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.match.catch_error.call(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$)),null,(1),null))));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",(-1273693247),null),null,(1),null)),(new cljs.core.List(null,cond_expr,null,(1),null)),(new cljs.core.List(null,cljs.core.match.catch_error.call(null,cljs.core.match.protocols.n_to_clj.call(null,self__.default$)),null,(1),null))));
}
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__763){
var vec__764 = p__763;
var k__11487__auto__ = cljs.core.nth.call(null,vec__764,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__764,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match.SwitchNode{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),self__.occurrence],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cases","cases",(253862775)),self__.cases],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",(-1987822328)),self__.default$],null))], null),self__.__extmap));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__757){
var self__ = this;
var G__757__$1 = this;
return (new cljs.core.RecordIter((0),G__757__$1,(3),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),new cljs.core.Keyword(null,"cases","cases",(253862775)),new cljs.core.Keyword(null,"default","default",(-1987822328))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((3) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((2072471792) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this759,other760){
var self__ = this;
var this759__$1 = this;
return (((!((other760 == null)))) && ((this759__$1.constructor === other760.constructor)) && (cljs.core._EQ_.call(null,this759__$1.occurrence,other760.occurrence)) && (cljs.core._EQ_.call(null,this759__$1.cases,other760.cases)) && (cljs.core._EQ_.call(null,this759__$1.default,other760.default)) && (cljs.core._EQ_.call(null,this759__$1.__extmap,other760.__extmap)));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),null,new cljs.core.Keyword(null,"cases","cases",(253862775)),null,new cljs.core.Keyword(null,"default","default",(-1987822328)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__757){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__767 = cljs.core.keyword_identical_QMARK_;
var expr__768 = k__11472__auto__;
if(cljs.core.truth_(pred__767.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),expr__768))){
return (new cljs.core.match.SwitchNode(G__757,self__.cases,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__767.call(null,new cljs.core.Keyword(null,"cases","cases",(253862775)),expr__768))){
return (new cljs.core.match.SwitchNode(self__.occurrence,G__757,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__767.call(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),expr__768))){
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,G__757,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__757),null));
}
}
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),self__.occurrence,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cases","cases",(253862775)),self__.cases,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",(-1987822328)),self__.default$,null))], null),self__.__extmap));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__757){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,G__757,self__.__extmap,self__.__hash));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match.SwitchNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",(-90277627),null),new cljs.core.Symbol(null,"cases","cases",(1894394302),null),new cljs.core.Symbol(null,"default","default",(-347290801),null)], null);
}));

(cljs.core.match.SwitchNode.cljs$lang$type = true);

(cljs.core.match.SwitchNode.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match/SwitchNode",null,(1),null));
}));

(cljs.core.match.SwitchNode.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match/SwitchNode");
}));

/**
 * Positional factory function for cljs.core.match/SwitchNode.
 */
cljs.core.match.__GT_SwitchNode = (function cljs$core$match$__GT_SwitchNode(occurrence,cases,default$){
return (new cljs.core.match.SwitchNode(occurrence,cases,default$,null,null,null));
});

/**
 * Factory function for cljs.core.match/SwitchNode, taking a map of keywords to field values.
 */
cljs.core.match.map__GT_SwitchNode = (function cljs$core$match$map__GT_SwitchNode(G__761){
var extmap__11545__auto__ = (function (){var G__770 = cljs.core.dissoc.call(null,G__761,new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)),new cljs.core.Keyword(null,"cases","cases",(253862775)),new cljs.core.Keyword(null,"default","default",(-1987822328)));
if(cljs.core.record_QMARK_.call(null,G__761)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__770);
} else {
return G__770;
}
})();
return (new cljs.core.match.SwitchNode(new cljs.core.Keyword(null,"occurrence","occurrence",(-1730809154)).cljs$core$IFn$_invoke$arity$1(G__761),new cljs.core.Keyword(null,"cases","cases",(253862775)).cljs$core$IFn$_invoke$arity$1(G__761),new cljs.core.Keyword(null,"default","default",(-1987822328)).cljs$core$IFn$_invoke$arity$1(G__761),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match.switch_node = (function cljs$core$match$switch_node(occurrence,cases,default$){
if(cljs.core.sequential_QMARK_.call(null,cases)){
} else {
throw (new Error("Assert failed: (sequential? cases)"));
}

return (new cljs.core.match.SwitchNode(occurrence,cases,default$,null,null,null));
});
cljs.core.match.first_column_QMARK_ = (function cljs$core$match$first_column_QMARK_(i){
return (i === (0));
});
cljs.core.match.empty_row_QMARK_ = (function cljs$core$match$empty_row_QMARK_(row){
var ps = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(row);
return (((!((ps == null)))) && (cljs.core.empty_QMARK_.call(null,ps)));
});
cljs.core.match.score_column = (function cljs$core$match$score_column(i,col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.reduce.call(null,cljs.core._PLUS_,(0),col)], null);
});
cljs.core.match.width = (function cljs$core$match$width(p__772){
var map__773 = p__772;
var map__773__$1 = (((((!((map__773 == null))))?(((((map__773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__773):map__773);
var rows = cljs.core.get.call(null,map__773__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
if((!(cljs.core.empty_QMARK_.call(null,rows)))){
return cljs.core.count.call(null,rows.call(null,(0)));
} else {
return (0);
}
});
cljs.core.match.height = (function cljs$core$match$height(p__775){
var map__776 = p__775;
var map__776__$1 = (((((!((map__776 == null))))?(((((map__776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__776):map__776);
var rows = cljs.core.get.call(null,map__776__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.count.call(null,rows);
});
cljs.core.match.dim = (function cljs$core$match$dim(pm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.width.call(null,pm),cljs.core.match.height.call(null,pm)], null);
});
cljs.core.match.empty_matrix_QMARK_ = (function cljs$core$match$empty_matrix_QMARK_(pm){
return cljs.core._EQ_.call(null,cljs.core.match.dim.call(null,pm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
cljs.core.match.column = (function cljs$core$match$column(p__778,i){
var map__779 = p__778;
var map__779__$1 = (((((!((map__779 == null))))?(((((map__779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__779):map__779);
var rows = cljs.core.get.call(null,map__779__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__23_SHARP_){
return cljs.core.nth.call(null,p1__23_SHARP_,i);
}),rows));
});
cljs.core.match.row = (function cljs$core$match$row(p__781,j){
var map__782 = p__781;
var map__782__$1 = (((((!((map__782 == null))))?(((((map__782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__782):map__782);
var rows = cljs.core.get.call(null,map__782__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return cljs.core.nth.call(null,rows,j);
});
cljs.core.match.rows = (function cljs$core$match$rows(p__784){
var map__785 = p__784;
var map__785__$1 = (((((!((map__785 == null))))?(((((map__785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__785):map__785);
var rows = cljs.core.get.call(null,map__785__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return rows;
});
cljs.core.match.pattern_at = (function cljs$core$match$pattern_at(p__787,i,j){
var map__788 = p__787;
var map__788__$1 = (((((!((map__788 == null))))?(((((map__788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__788):map__788);
var rows = cljs.core.get.call(null,map__788__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return rows.call(null,j).call(null,i);
});
cljs.core.match.action_for_row = (function cljs$core$match$action_for_row(p__790,j){
var map__791 = p__790;
var map__791__$1 = (((((!((map__791 == null))))?(((((map__791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__791.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__791):map__791);
var rows = cljs.core.get.call(null,map__791__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
return new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(rows.call(null,j));
});
cljs.core.match.occurrences = (function cljs$core$match$occurrences(pm){
return new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)).cljs$core$IFn$_invoke$arity$1(pm);
});
cljs.core.match.row_bindings = (function cljs$core$match$row_bindings(f,ocrs){
return cljs.core.concat.call(null,new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(f),cljs.core.map.call(null,(function (p__793){
var vec__794 = p__793;
var p = cljs.core.nth.call(null,vec__794,(0),null);
var ocr = cljs.core.nth.call(null,vec__794,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(p),cljs.core.match.leaf_bind_expr.call(null,ocr)], null);
}),cljs.core.filter.call(null,(function (p__797){
var vec__798 = p__797;
var p = cljs.core.nth.call(null,vec__798,(0),null);
var ocr = cljs.core.nth.call(null,vec__798,(1),null);
return cljs.core.match.named_wildcard_pattern_QMARK_.call(null,p);
}),cljs.core.map.call(null,cljs.core.vector,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(f),ocrs))));
});
cljs.core.match.existential_pattern_QMARK_ = (function cljs$core$match$existential_pattern_QMARK_(x){
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
cljs.core.match.wildcard_or_existential_QMARK_ = (function cljs$core$match$wildcard_or_existential_QMARK_(x){
var or__10116__auto__ = cljs.core.match.wildcard_pattern_QMARK_.call(null,x);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return cljs.core.match.existential_pattern_QMARK_.call(null,x);
}
});
cljs.core.match.constructors_above_QMARK_ = (function cljs$core$match$constructors_above_QMARK_(pm,i,j){
return cljs.core.every_QMARK_.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.match.wildcard_or_existential_QMARK_),cljs.core.take.call(null,j,cljs.core.match.column.call(null,pm,i)));
});
cljs.core.match.pattern_score = (function cljs$core$match$pattern_score(pm,i,j){
var p = cljs.core.match.pattern_at.call(null,pm,i,j);
if(cljs.core.truth_((function (){var or__10116__auto__ = cljs.core.match.wildcard_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return (!(cljs.core.match.constructors_above_QMARK_.call(null,pm,i,j)));
}
})())){
return (0);
} else {
if(cljs.core.match.existential_pattern_QMARK_.call(null,p)){
return (1);
} else {
return (2);

}
}
});
cljs.core.match.useful_matrix = (function cljs$core$match$useful_matrix(pm){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,cljs.core.match.width.call(null,pm),(function (){var iter__11965__auto__ = (function cljs$core$match$useful_matrix_$_iter__802(s__803){
return (new cljs.core.LazySeq(null,(function (){
var s__803__$1 = s__803;
while(true){
var temp__9522__auto__ = cljs.core.seq.call(null,s__803__$1);
if(temp__9522__auto__){
var xs__9484__auto__ = temp__9522__auto__;
var j = cljs.core.first.call(null,xs__9484__auto__);
var iterys__11953__auto__ = ((function (s__803__$1,j,xs__9484__auto__,temp__9522__auto__){
return (function cljs$core$match$useful_matrix_$_iter__802_$_iter__804(s__805){
return (new cljs.core.LazySeq(null,((function (s__803__$1,j,xs__9484__auto__,temp__9522__auto__){
return (function (){
var s__805__$1 = s__805;
while(true){
var temp__9522__auto____$1 = cljs.core.seq.call(null,s__805__$1);
if(temp__9522__auto____$1){
var s__805__$2 = temp__9522__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__805__$2)){
var c__11961__auto__ = cljs.core.chunk_first.call(null,s__805__$2);
var size__11964__auto__ = cljs.core.count.call(null,c__11961__auto__);
var b__807 = cljs.core.chunk_buffer.call(null,size__11964__auto__);
if((function (){var i__806 = (0);
while(true){
if((i__806 < size__11964__auto__)){
var i = cljs.core._nth.call(null,c__11961__auto__,i__806);
cljs.core.chunk_append.call(null,b__807,cljs.core.match.pattern_score.call(null,pm,i,j));

var G__808 = (i__806 + (1));
i__806 = G__808;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__807),cljs$core$match$useful_matrix_$_iter__802_$_iter__804.call(null,cljs.core.chunk_rest.call(null,s__805__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__807),null);
}
} else {
var i = cljs.core.first.call(null,s__805__$2);
return cljs.core.cons.call(null,cljs.core.match.pattern_score.call(null,pm,i,j),cljs$core$match$useful_matrix_$_iter__802_$_iter__804.call(null,cljs.core.rest.call(null,s__805__$2)));
}
} else {
return null;
}
break;
}
});})(s__803__$1,j,xs__9484__auto__,temp__9522__auto__))
,null,null));
});})(s__803__$1,j,xs__9484__auto__,temp__9522__auto__))
;
var fs__11954__auto__ = cljs.core.seq.call(null,iterys__11953__auto__.call(null,cljs.core.range.call(null,cljs.core.match.width.call(null,pm))));
if(fs__11954__auto__){
return cljs.core.concat.call(null,fs__11954__auto__,cljs$core$match$useful_matrix_$_iter__802.call(null,cljs.core.rest.call(null,s__803__$1)));
} else {
var G__809 = cljs.core.rest.call(null,s__803__$1);
s__803__$1 = G__809;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__11965__auto__.call(null,cljs.core.range.call(null,cljs.core.match.height.call(null,pm)));
})())));
});
cljs.core.match.necessary_column = (function cljs$core$match$necessary_column(pm){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__810,p__811){
var vec__812 = p__810;
var col = cljs.core.nth.call(null,vec__812,(0),null);
var score = cljs.core.nth.call(null,vec__812,(1),null);
var curr = vec__812;
var vec__815 = p__811;
var ocol = cljs.core.nth.call(null,vec__815,(0),null);
var oscore = cljs.core.nth.call(null,vec__815,(1),null);
var cand = vec__815;
if((oscore > score)){
return cand;
} else {
return curr;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.map_indexed.call(null,cljs.core.match.score_column,cljs.core.apply.call(null,cljs.core.map,cljs.core.vector,cljs.core.match.useful_matrix.call(null,pm)))));
});
cljs.core.match.select = (function cljs$core$match$select(pm){
return cljs.core.match.protocols.swap.call(null,pm,cljs.core.match.necessary_column.call(null,pm));
});
cljs.core.match.specialize = (function cljs$core$match$specialize(var_args){
var G__819 = arguments.length;
switch (G__819) {
case (1):
return cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$1 = (function (matrix){
return cljs.core.match.specialize.call(null,matrix,cljs.core.ffirst.call(null,cljs.core.match.rows.call(null,matrix)));
}));

(cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2 = (function (matrix,p){
if((((!((p == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.cljs$core$match$protocols$ISpecializeMatrix$))))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.ISpecializeMatrix,p):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.match.protocols.ISpecializeMatrix,p))){
return cljs.core.match.protocols.specialize_matrix.call(null,p,matrix);
} else {
return cljs.core.match.default_specialize_matrix.call(null,p,matrix);
}
}));

(cljs.core.match.specialize.cljs$lang$maxFixedArity = (2));

cljs.core.match.pseudo_pattern_QMARK_ = (function cljs$core$match$pseudo_pattern_QMARK_(x){
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
cljs.core.match.pseudo_patterns = (function cljs$core$match$pseudo_patterns(matrix,i){
return cljs.core.filter.call(null,cljs.core.match.pseudo_pattern_QMARK_,cljs.core.match.column.call(null,matrix,i));
});
cljs.core.match.column_splitter = (function cljs$core$match$column_splitter(col){
var f = cljs.core.first.call(null,col);
var vec__823 = cljs.core.split_with.call(null,(function (p1__24_SHARP_){
return cljs.core.match.groupable_QMARK_.call(null,f,p1__24_SHARP_);
}),cljs.core.rest.call(null,col));
var top = cljs.core.nth.call(null,vec__823,(0),null);
var bottom = cljs.core.nth.call(null,vec__823,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons.call(null,f,top),bottom], null);
});

cljs.core.match.return_split = (function cljs$core$match$return_split(S,D){
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
if(((cljs.core.match.empty_matrix_QMARK_.call(null,D)) && (cljs.core.seq.call(null,cljs.core.match._STAR_backtrack_stack_STAR_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,cljs.core.peek.call(null,cljs.core.match._STAR_backtrack_stack_STAR_),cljs.core.match._STAR_backtrack_stack_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D,cljs.core.conj.call(null,cljs.core.match._STAR_backtrack_stack_STAR_,D)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D], null);
}
});
cljs.core.match.matrix_splitter = (function cljs$core$match$matrix_splitter(matrix){
var rows = cljs.core.match.rows.call(null,matrix);
var n = cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.match.column_splitter.call(null,cljs.core.map.call(null,cljs.core.first,rows))));
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var S = cljs.core.match.pattern_matrix.call(null,cljs.core.take.call(null,n,rows),ocrs);
var D = cljs.core.match.pattern_matrix.call(null,cljs.core.drop.call(null,n,rows),ocrs);
return cljs.core.match.return_split.call(null,S,D);
});
cljs.core.match.group_rows = (function cljs$core$match$group_rows(cs,rows){
return cljs.core.reduce.call(null,(function (res,row){
var vec__826 = cljs.core.peek.call(null,res);
var c = cljs.core.nth.call(null,vec__826,(0),null);
var rows__$1 = cljs.core.nth.call(null,vec__826,(1),null);
var c_SINGLEQUOTE_ = cljs.core.first.call(null,row);
if(cljs.core.truth_(cljs.core.match.groupable_QMARK_.call(null,c,c_SINGLEQUOTE_))){
return cljs.core.conj.call(null,cljs.core.pop.call(null,res),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.conj.call(null,rows__$1,row)], null));
} else {
return cljs.core.conj.call(null,res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,cs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rows)], null)], null)], null),cljs.core.rest.call(null,rows));
});
cljs.core.match.non_local_literal_pattern_QMARK_ = (function cljs$core$match$non_local_literal_pattern_QMARK_(p){
var and__10091__auto__ = cljs.core.match.literal_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(and__10091__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"local","local",(-1497766724)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__10091__auto__;
}
});
cljs.core.match.literal_case_matrix_splitter = (function cljs$core$match$literal_case_matrix_splitter(matrix){
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var rows = cljs.core.match.rows.call(null,matrix);
var lrows = (function (){var rows__$1 = cljs.core.seq.call(null,rows);
var res = cljs.core.PersistentVector.EMPTY;
var lits = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(rows__$1){
var vec__832 = cljs.core.first.call(null,rows__$1);
var p = cljs.core.nth.call(null,vec__832,(0),null);
var row = vec__832;
if(cljs.core.truth_((function (){var and__10091__auto__ = cljs.core.match.non_local_literal_pattern_QMARK_.call(null,p);
if(cljs.core.truth_(and__10091__auto__)){
return (!(cljs.core.contains_QMARK_.call(null,lits,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__10091__auto__;
}
})())){
var G__839 = cljs.core.next.call(null,rows__$1);
var G__840 = cljs.core.conj.call(null,res,row);
var G__841 = (cljs.core.truth_(cljs.core.match.non_local_literal_pattern_QMARK_.call(null,p))?cljs.core.conj.call(null,lits,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(p)):lits);
rows__$1 = G__839;
res = G__840;
lits = G__841;
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
var S = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__835){
var vec__836 = p__835;
var c = cljs.core.nth.call(null,vec__836,(0),null);
var rows__$1 = cljs.core.nth.call(null,vec__836,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match.pattern_matrix.call(null,rows__$1,ocrs)], null);
}),cljs.core.match.group_rows.call(null,cljs.core.map.call(null,cljs.core.first,lrows),lrows)));
var D = cljs.core.match.pattern_matrix.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,lrows),rows),ocrs);
return cljs.core.match.return_split.call(null,S,D);
});
cljs.core.match.default_case = (function cljs$core$match$default_case(matrix){
if((!(cljs.core.match.empty_matrix_QMARK_.call(null,matrix)))){
return cljs.core.match.compile.call(null,matrix);
} else {
return cljs.core.match.fail_node.call(null);
}
});
cljs.core.match.cases = (function cljs$core$match$cases(matrix){
if(cljs.core.vector_QMARK_.call(null,matrix)){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__842){
var vec__843 = p__842;
var c = cljs.core.nth.call(null,vec__843,(0),null);
var m = cljs.core.nth.call(null,vec__843,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match.compile.call(null,cljs.core.match.specialize.call(null,m,c))], null);
}),matrix));
} else {
var rows = cljs.core.match.rows.call(null,matrix);
var c = cljs.core.ffirst.call(null,rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.match.compile.call(null,cljs.core.match.specialize.call(null,matrix,c))], null)], null);
}
});
cljs.core.match.expression_QMARK_ = (function cljs$core$match$expression_QMARK_(ocr){
return cljs.core.contains_QMARK_.call(null,cljs.core.meta.call(null,ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)));
});
cljs.core.match.bind_variables = (function cljs$core$match$bind_variables(ocrs){
return cljs.core.mapcat.call(null,(function (ocr){
var bind_expr = cljs.core.get.call(null,cljs.core.meta.call(null,ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",(-897749617)),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)));
if(cljs.core.not_EQ_.call(null,bind_expr,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,bind_expr], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,ocr], null);
}
}),ocrs);
});
cljs.core.match.root_bind_node = (function cljs$core$match$root_bind_node(matrix){
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var node = cljs.core.match.compile.call(null,matrix);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.match.expression_QMARK_,ocrs))){
return cljs.core.match.bind_node.call(null,cljs.core.match.bind_variables.call(null,ocrs),node);
} else {
return node;
}
});
/**
 * Case 1: If there are no pattern rows to match, then matching always fails
 */
cljs.core.match.empty_rows_case = (function cljs$core$match$empty_rows_case(){
return cljs.core.match.fail_node.call(null);
});
/**
 * Case 2: If the first row is empty then matching always succeeds 
 *   and yields the first action.
 */
cljs.core.match.first_row_empty_case = (function cljs$core$match$first_row_empty_case(rows,ocr){
var f = cljs.core.first.call(null,rows);
var a = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(f);
var bs = new cljs.core.Keyword(null,"bindings","bindings",(1271397192)).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.match.leaf_node.call(null,a,bs);
});
/**
 * Case 2: If the first row is constituted by wildcards then matching
 *   matching always succeeds and yields the first action.
 */
cljs.core.match.first_row_wildcards_case = (function cljs$core$match$first_row_wildcards_case(rows,ocrs){
var f = cljs.core.first.call(null,rows);
var a = new cljs.core.Keyword(null,"action","action",(-811238024)).cljs$core$IFn$_invoke$arity$1(f);
var bs = cljs.core.match.row_bindings.call(null,f,ocrs);
return cljs.core.match.leaf_node.call(null,a,bs);
});
cljs.core.match.expand_matrix = (function cljs$core$match$expand_matrix(matrix,col){
var matrix__$1 = matrix;
while(true){
var p = cljs.core.first.call(null,cljs.core.match.column.call(null,matrix__$1,col));
if(cljs.core.match.pseudo_pattern_QMARK_.call(null,p)){
var G__846 = cljs.core.match.specialize.call(null,matrix__$1,p);
matrix__$1 = G__846;
continue;
} else {
return matrix__$1;
}
break;
}
});
cljs.core.match.split_matrix = (function cljs$core$match$split_matrix(matrix){
return cljs.core.match.matrix_splitter.call(null,matrix);
});
/**
 * Case 3a: The first column is chosen. Compute and return a
 *   switch/bind node with a default matrix case
 */
cljs.core.match.first_column_chosen_case = (function cljs$core$match$first_column_chosen_case(matrix,col,ocrs){
var expanded = cljs.core.match.expand_matrix.call(null,matrix,col);
var ocrs__$1 = cljs.core.match.occurrences.call(null,expanded);
var vec__847 = cljs.core.match.split_matrix.call(null,expanded);
var S = cljs.core.nth.call(null,vec__847,(0),null);
var D = cljs.core.nth.call(null,vec__847,(1),null);
var split = vec__847;
if(cljs.core.not.call(null,cljs.core.match._STAR_recur_present_STAR_)){
return cljs.core.match.switch_node.call(null,ocrs__$1.call(null,col),cljs.core.match.cases.call(null,S),cljs.core.match.default_case.call(null,D));
} else {
var new_stack = cljs.core.last.call(null,split);
return cljs.core.match.switch_node.call(null,ocrs__$1.call(null,col),(((!((cljs.core.match._STAR_backtrack_stack_STAR_ === new_stack))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__850 = cljs.core.match._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__851 = new_stack;
(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__851);

try{return cljs.core.match.cases.call(null,S);
}finally {(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__850);
}})():cljs.core.match.cases.call(null,S)),((((cljs.core.seq.call(null,cljs.core.match._STAR_backtrack_stack_STAR_)) && ((cljs.core.peek.call(null,cljs.core.match._STAR_backtrack_stack_STAR_) === D))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__852 = cljs.core.match._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__853 = cljs.core.pop.call(null,cljs.core.match._STAR_backtrack_stack_STAR_);
(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__853);

try{return cljs.core.match.default_case.call(null,D);
}finally {(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__852);
}})():cljs.core.match.default_case.call(null,D)));
}
});
/**
 * Case 3b: A column other than the first is chosen. Swap column 
 * col with the first column and compile the result
 */
cljs.core.match.other_column_chosen_case = (function cljs$core$match$other_column_chosen_case(matrix,col){
return cljs.core.match.compile.call(null,cljs.core.match.protocols.swap.call(null,matrix,col));
});
cljs.core.match.choose_column = (function cljs$core$match$choose_column(matrix){
return cljs.core.match.necessary_column.call(null,matrix);
});
cljs.core.match.compile = (function cljs$core$match$compile(p__854){
var map__855 = p__854;
var map__855__$1 = (((((!((map__855 == null))))?(((((map__855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__855):map__855);
var pm = map__855__$1;
var rows = cljs.core.get.call(null,map__855__$1,new cljs.core.Keyword(null,"rows","rows",(850049680)));
var ocrs = cljs.core.get.call(null,map__855__$1,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)));
if(cljs.core.truth_(cljs.core.match._STAR_root_STAR_)){
var _STAR_root_STAR__orig_val__857 = cljs.core.match._STAR_root_STAR_;
var _STAR_root_STAR__temp_val__858 = false;
(cljs.core.match._STAR_root_STAR_ = _STAR_root_STAR__temp_val__858);

try{return cljs.core.match.root_bind_node.call(null,pm);
}finally {(cljs.core.match._STAR_root_STAR_ = _STAR_root_STAR__orig_val__857);
}} else {
if(cljs.core.empty_QMARK_.call(null,rows)){
return cljs.core.match.empty_rows_case.call(null);
} else {
if(cljs.core.match.empty_row_QMARK_.call(null,cljs.core.first.call(null,rows))){
return cljs.core.match.first_row_empty_case.call(null,rows,cljs.core.first.call(null,ocrs));
} else {
if(cljs.core.match.all_wildcards_QMARK_.call(null,cljs.core.first.call(null,rows))){
return cljs.core.match.first_row_wildcards_case.call(null,rows,ocrs);
} else {
var col = cljs.core.match.choose_column.call(null,pm);
if(cljs.core.match.first_column_QMARK_.call(null,col)){
return cljs.core.match.first_column_chosen_case.call(null,pm,col,ocrs);
} else {
return cljs.core.match.other_column_chosen_case.call(null,pm,col);
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
cljs.core.match.PatternMatrix = (function (rows,ocrs,__meta,__extmap,__hash){
this.rows = rows;
this.ocrs = ocrs;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k860,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__864 = k860;
var G__864__$1 = (((G__864 instanceof cljs.core.Keyword))?G__864.fqn:null);
switch (G__864__$1) {
case "rows":
return self__.rows;

break;
case "ocrs":
return self__.ocrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k860,else__11461__auto__);

}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__865){
var vec__866 = p__865;
var k__11487__auto__ = cljs.core.nth.call(null,vec__866,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__866,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match.PatternMatrix{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",(850049680)),self__.rows],null)),(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),self__.ocrs],null))], null),self__.__extmap));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__859){
var self__ = this;
var G__859__$1 = this;
return (new cljs.core.RecordIter((0),G__859__$1,(2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",(850049680)),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((2) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((-2047848843) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this861,other862){
var self__ = this;
var this861__$1 = this;
return (((!((other862 == null)))) && ((this861__$1.constructor === other862.constructor)) && (cljs.core._EQ_.call(null,this861__$1.rows,other862.rows)) && (cljs.core._EQ_.call(null,this861__$1.ocrs,other862.ocrs)) && (cljs.core._EQ_.call(null,this861__$1.__extmap,other862.__extmap)));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__25_SHARP_){
return cljs.core.match.protocols.drop_nth.call(null,p1__25_SHARP_,i);
}),self__.rows));
return (new cljs.core.match.PatternMatrix(nrows,self__.ocrs,null,null,null));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__26_SHARP_){
return cljs.core.match.protocols.swap.call(null,p1__26_SHARP_,idx);
}),self__.rows));
return (new cljs.core.match.PatternMatrix(nrows,cljs.core.match.protocols.swap.call(null,self__.ocrs,idx),null,null,null));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rows","rows",(850049680)),null,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__859){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__869 = cljs.core.keyword_identical_QMARK_;
var expr__870 = k__11472__auto__;
if(cljs.core.truth_(pred__869.call(null,new cljs.core.Keyword(null,"rows","rows",(850049680)),expr__870))){
return (new cljs.core.match.PatternMatrix(G__859,self__.ocrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__869.call(null,new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),expr__870))){
return (new cljs.core.match.PatternMatrix(self__.rows,G__859,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__859),null));
}
}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",(850049680)),self__.rows,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)),self__.ocrs,null))], null),self__.__extmap));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__859){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,G__859,self__.__extmap,self__.__hash));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match.PatternMatrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",(-1804386089),null),new cljs.core.Symbol(null,"ocrs","ocrs",(-195684886),null)], null);
}));

(cljs.core.match.PatternMatrix.cljs$lang$type = true);

(cljs.core.match.PatternMatrix.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match/PatternMatrix",null,(1),null));
}));

(cljs.core.match.PatternMatrix.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match/PatternMatrix");
}));

/**
 * Positional factory function for cljs.core.match/PatternMatrix.
 */
cljs.core.match.__GT_PatternMatrix = (function cljs$core$match$__GT_PatternMatrix(rows,ocrs){
return (new cljs.core.match.PatternMatrix(rows,ocrs,null,null,null));
});

/**
 * Factory function for cljs.core.match/PatternMatrix, taking a map of keywords to field values.
 */
cljs.core.match.map__GT_PatternMatrix = (function cljs$core$match$map__GT_PatternMatrix(G__863){
var extmap__11545__auto__ = (function (){var G__872 = cljs.core.dissoc.call(null,G__863,new cljs.core.Keyword(null,"rows","rows",(850049680)),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)));
if(cljs.core.record_QMARK_.call(null,G__863)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__872);
} else {
return G__872;
}
})();
return (new cljs.core.match.PatternMatrix(new cljs.core.Keyword(null,"rows","rows",(850049680)).cljs$core$IFn$_invoke$arity$1(G__863),new cljs.core.Keyword(null,"ocrs","ocrs",(-1836216413)).cljs$core$IFn$_invoke$arity$1(G__863),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match.pattern_matrix = (function cljs$core$match$pattern_matrix(rows,ocrs){
var rows__$1 = ((cljs.core.vector_QMARK_.call(null,rows))?rows:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,rows));
var ocrs__$1 = ((cljs.core.vector_QMARK_.call(null,ocrs))?ocrs:cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,ocrs));
return (new cljs.core.match.PatternMatrix(rows__$1,ocrs__$1,null,null,null));
});
cljs.core.match.default_specialize_matrix = (function cljs$core$match$default_specialize_matrix(p,matrix){
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var nrows = cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__27_SHARP_){
return cljs.core.match.drop_nth_bind.call(null,p1__27_SHARP_,(0),focr);
}),rows));
var nocrs = cljs.core.match.protocols.drop_nth.call(null,ocrs,(0));
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
});

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.ILookup}
*/
cljs.core.match.WildcardPattern = (function (sym,named,_meta){
this.sym = sym;
this.named = named;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.WildcardPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
if((other instanceof cljs.core.match.WildcardPattern)){
if(cljs.core.truth_(self__.named)){
return cljs.core._EQ_.call(null,self__.sym,new cljs.core.Keyword(null,"sym","sym",(-1444860305)).cljs$core$IFn$_invoke$arity$1(other));
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"named","named",(-422393479)).cljs$core$IFn$_invoke$arity$1(other));
}
} else {
return false;
}
}));

(cljs.core.match.WildcardPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.WildcardPattern(self__.sym,self__.named,new_meta));
}));

(cljs.core.match.WildcardPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.WildcardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.WildcardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return true;
}));

(cljs.core.match.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__874 = k;
var G__874__$1 = (((G__874 instanceof cljs.core.Keyword))?G__874.fqn:null);
switch (G__874__$1) {
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

(cljs.core.match.WildcardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",(195671222),null),new cljs.core.Symbol(null,"named","named",(1218138048),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.WildcardPattern.cljs$lang$type = true);

(cljs.core.match.WildcardPattern.cljs$lang$ctorStr = "cljs.core.match/WildcardPattern");

(cljs.core.match.WildcardPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/WildcardPattern");
}));

/**
 * Positional factory function for cljs.core.match/WildcardPattern.
 */
cljs.core.match.__GT_WildcardPattern = (function cljs$core$match$__GT_WildcardPattern(sym,named,_meta){
return (new cljs.core.match.WildcardPattern(sym,named,_meta));
});

cljs.core.match.wildcard_pattern = (function cljs$core$match$wildcard_pattern(var_args){
var G__877 = arguments.length;
switch (G__877) {
case (0):
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match.wildcard_pattern.call(null,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
}));

(cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1 = (function (sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

if(cljs.core._EQ_.call(null,sym,new cljs.core.Symbol(null,"_","_",(-1201019570),null))){
return (new cljs.core.match.WildcardPattern(cljs.core.gensym.call(null),false,null));
} else {
return (new cljs.core.match.WildcardPattern(sym,true,null));
}
}));

(cljs.core.match.wildcard_pattern.cljs$lang$maxFixedArity = (1));

cljs.core.match.wildcard_pattern_QMARK_ = (function cljs$core$match$wildcard_pattern_QMARK_(x){
return (x instanceof cljs.core.match.WildcardPattern);
});
cljs.core.match.named_wildcard_pattern_QMARK_ = (function cljs$core$match$named_wildcard_pattern_QMARK_(x){
if((x instanceof cljs.core.match.WildcardPattern)){
return new cljs.core.Keyword(null,"named","named",(-422393479)).cljs$core$IFn$_invoke$arity$1(x);
} else {
return false;
}
});

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
*/
cljs.core.match.LiteralPattern = (function (l,_meta){
this.l = l;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.LiteralPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
if((self__.l == null)){
return "nil";
} else {
return cljs.core.pr_str.call(null,self__.l);
}
}));

(cljs.core.match.LiteralPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.LiteralPattern)) && (cljs.core._EQ_.call(null,self__.l,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match.LiteralPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.LiteralPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.LiteralPattern(self__.l,new_meta));
}));

(cljs.core.match.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__879 = k;
var G__879__$1 = (((G__879 instanceof cljs.core.Keyword))?G__879.fqn:null);
switch (G__879__$1) {
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

(cljs.core.match.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
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

(cljs.core.match.LiteralPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",(-1258542346),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.LiteralPattern.cljs$lang$type = true);

(cljs.core.match.LiteralPattern.cljs$lang$ctorStr = "cljs.core.match/LiteralPattern");

(cljs.core.match.LiteralPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/LiteralPattern");
}));

/**
 * Positional factory function for cljs.core.match/LiteralPattern.
 */
cljs.core.match.__GT_LiteralPattern = (function cljs$core$match$__GT_LiteralPattern(l,_meta){
return (new cljs.core.match.LiteralPattern(l,_meta));
});

cljs.core.match.literal_pattern = (function cljs$core$match$literal_pattern(l){
return (new cljs.core.match.LiteralPattern(l,cljs.core.meta.call(null,l)));
});
cljs.core.match.literal_pattern_QMARK_ = (function cljs$core$match$literal_pattern_QMARK_(x){
return (x instanceof cljs.core.match.LiteralPattern);
});


cljs.core.match.specialize_seq_pattern_rest_row = (function cljs$core$match$specialize_seq_pattern_rest_row(focr,row){
var p = cljs.core.first.call(null,row);
var p__$1 = (cljs.core.truth_(cljs.core.match.seq_pattern_QMARK_.call(null,p))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"s","s",(1705939918)).cljs$core$IFn$_invoke$arity$1(p))):cljs.core.match.wildcard_pattern.call(null));
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),p__$1);
});
cljs.core.match.specialize_seq_pattern_rest_matrix = (function cljs$core$match$specialize_seq_pattern_rest_matrix(rows,focr){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match.specialize_seq_pattern_rest_row,focr),rows));
});
cljs.core.match.seq_pattern_matrix_rest_ocrs = (function cljs$core$match$seq_pattern_matrix_rest_ocrs(ocrs,focr){
return ocrs;
});
cljs.core.match.specialize_seq_pattern_row = (function cljs$core$match$specialize_seq_pattern_row(focr,row){
var p = cljs.core.first.call(null,row);
var vec__881 = (cljs.core.truth_(cljs.core.match.seq_pattern_QMARK_.call(null,p))?(function (){var vec__884 = new cljs.core.Keyword(null,"s","s",(1705939918)).cljs$core$IFn$_invoke$arity$1(p);
var seq__885 = cljs.core.seq.call(null,vec__884);
var first__886 = cljs.core.first.call(null,seq__885);
var seq__885__$1 = cljs.core.next.call(null,seq__885);
var h = first__886;
var t = seq__885__$1;
var t__$1 = ((cljs.core.empty_QMARK_.call(null,t))?cljs.core.match.literal_pattern.call(null,cljs.core.List.EMPTY):(cljs.core.truth_(cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,t)))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,t)):cljs.core.match.seq_pattern.call(null,t)
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,t__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.wildcard_pattern.call(null),cljs.core.match.wildcard_pattern.call(null)], null));
var h = cljs.core.nth.call(null,vec__881,(0),null);
var t = cljs.core.nth.call(null,vec__881,(1),null);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,h], null));
});
cljs.core.match.specialize_seq_pattern_matrix = (function cljs$core$match$specialize_seq_pattern_matrix(rows,focr){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match.specialize_seq_pattern_row,focr),rows));
});
cljs.core.match.seq_pattern_matrix_ocrs = (function cljs$core$match$seq_pattern_matrix_ocrs(ocrs,focr){
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
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.SeqPattern = (function (s,_meta){
this.s = s;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.SeqPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.s);
}));

(cljs.core.match.SeqPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.SeqPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.SeqPattern(self__.s,new_meta));
}));

(cljs.core.match.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__887 = k;
var G__887__$1 = (((G__887 instanceof cljs.core.Keyword))?G__887.fqn:null);
switch (G__887__$1) {
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

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if((((cljs.core.count.call(null,self__.s) >= (1))) && (cljs.core.not.call(null,cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,self__.s)))))){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",(-1302056292),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",(-1649497689),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null))));
} else {
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",(-1302056292),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",(1777854658),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))),null,(1),null))));
}
}));

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
if(cljs.core.not.call(null,cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,self__.s)))){
var nrows = cljs.core.match.specialize_seq_pattern_matrix.call(null,rows,focr);
var nocrs = cljs.core.match.seq_pattern_matrix_ocrs.call(null,ocrs,focr);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
} else {
var nrows = cljs.core.match.specialize_seq_pattern_rest_matrix.call(null,rows,focr);
var nocrs = cljs.core.match.seq_pattern_matrix_rest_ocrs.call(null,ocrs,focr);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
}
}));

(cljs.core.match.SeqPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",(-948495851),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.SeqPattern.cljs$lang$type = true);

(cljs.core.match.SeqPattern.cljs$lang$ctorStr = "cljs.core.match/SeqPattern");

(cljs.core.match.SeqPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/SeqPattern");
}));

/**
 * Positional factory function for cljs.core.match/SeqPattern.
 */
cljs.core.match.__GT_SeqPattern = (function cljs$core$match$__GT_SeqPattern(s,_meta){
return (new cljs.core.match.SeqPattern(s,_meta));
});

cljs.core.match.seq_pattern = (function cljs$core$match$seq_pattern(s){
if(cljs.core.sequential_QMARK_.call(null,s)){
} else {
throw (new Error("Assert failed: (sequential? s)"));
}

if((!(cljs.core.empty_QMARK_.call(null,s)))){
} else {
throw (new Error("Assert failed: (not (empty? s))"));
}

return (new cljs.core.match.SeqPattern(s,null));
});
cljs.core.match.seq_pattern_QMARK_ = (function cljs$core$match$seq_pattern_QMARK_(x){
return (x instanceof cljs.core.match.SeqPattern);
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
cljs.core.match.RestPattern = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k890,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__894 = k890;
var G__894__$1 = (((G__894 instanceof cljs.core.Keyword))?G__894.fqn:null);
switch (G__894__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k890,else__11461__auto__);

}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__895){
var vec__896 = p__895;
var k__11487__auto__ = cljs.core.nth.call(null,vec__896,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__896,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match.RestPattern{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__889){
var self__ = this;
var G__889__$1 = this;
return (new cljs.core.RecordIter((0),G__889__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",(151049309))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((1490450147) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this891,other892){
var self__ = this;
var this891__$1 = this;
return (((!((other892 == null)))) && ((this891__$1.constructor === other892.constructor)) && (cljs.core._EQ_.call(null,this891__$1.p,other892.p)) && (cljs.core._EQ_.call(null,this891__$1.__extmap,other892.__extmap)));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",(151049309)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__889){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__899 = cljs.core.keyword_identical_QMARK_;
var expr__900 = k__11472__auto__;
if(cljs.core.truth_(pred__899.call(null,new cljs.core.Keyword(null,"p","p",(151049309)),expr__900))){
return (new cljs.core.match.RestPattern(G__889,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__889),null));
}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",(151049309)),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__889){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match.RestPattern(self__.p,G__889,self__.__extmap,self__.__hash));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match.RestPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null);
}));

(cljs.core.match.RestPattern.cljs$lang$type = true);

(cljs.core.match.RestPattern.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match/RestPattern",null,(1),null));
}));

(cljs.core.match.RestPattern.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match/RestPattern");
}));

/**
 * Positional factory function for cljs.core.match/RestPattern.
 */
cljs.core.match.__GT_RestPattern = (function cljs$core$match$__GT_RestPattern(p){
return (new cljs.core.match.RestPattern(p,null,null,null));
});

/**
 * Factory function for cljs.core.match/RestPattern, taking a map of keywords to field values.
 */
cljs.core.match.map__GT_RestPattern = (function cljs$core$match$map__GT_RestPattern(G__893){
var extmap__11545__auto__ = (function (){var G__902 = cljs.core.dissoc.call(null,G__893,new cljs.core.Keyword(null,"p","p",(151049309)));
if(cljs.core.record_QMARK_.call(null,G__893)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__902);
} else {
return G__902;
}
})();
return (new cljs.core.match.RestPattern(new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(G__893),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match.rest_pattern = (function cljs$core$match$rest_pattern(p){
return cljs.core.assoc.call(null,(new cljs.core.match.RestPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)),new cljs.core.Keyword("cljs.core.match","rest","cljs.core.match/rest",(-410436433)));
});
cljs.core.match.rest_pattern_QMARK_ = (function cljs$core$match$rest_pattern_QMARK_(x){
return (x instanceof cljs.core.match.RestPattern);
});
cljs.core.match.specialize_map_key_pattern_matrix = (function cljs$core$match$specialize_map_key_pattern_matrix(rows){
var p = new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,rows));
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__29_SHARP_){
return cljs.core.match.protocols.prepend.call(null,p1__29_SHARP_,p);
}),cljs.core.map.call(null,(function (p1__28_SHARP_){
return cljs.core.match.protocols.drop_nth.call(null,p1__28_SHARP_,(0));
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
cljs.core.match.MapKeyPattern = (function (p,__meta,__extmap,__hash){
this.p = p;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = -2064251126;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",(1017572457),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)),null,(1),null))));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__11458__auto__,k__11459__auto__){
var self__ = this;
var this__11458__auto____$1 = this;
return this__11458__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__11459__auto__,null);
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__11460__auto__,k905,else__11461__auto__){
var self__ = this;
var this__11460__auto____$1 = this;
var G__909 = k905;
var G__909__$1 = (((G__909 instanceof cljs.core.Keyword))?G__909.fqn:null);
switch (G__909__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k905,else__11461__auto__);

}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__11483__auto__,f__11484__auto__,init__11485__auto__){
var self__ = this;
var this__11483__auto____$1 = this;
return cljs.core.reduce.call(null,(function (ret__11486__auto__,p__910){
var vec__911 = p__910;
var k__11487__auto__ = cljs.core.nth.call(null,vec__911,(0),null);
var v__11488__auto__ = cljs.core.nth.call(null,vec__911,(1),null);
return f__11484__auto__.call(null,ret__11486__auto__,k__11487__auto__,v__11488__auto__);
}),init__11485__auto__,this__11483__auto____$1);
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__11478__auto__,writer__11479__auto__,opts__11480__auto__){
var self__ = this;
var this__11478__auto____$1 = this;
var pr_pair__11481__auto__ = (function (keyval__11482__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,cljs.core.pr_writer,""," ","",opts__11480__auto__,keyval__11482__auto__);
});
return cljs.core.pr_sequential_writer.call(null,writer__11479__auto__,pr_pair__11481__auto__,"#cljs.core.match.MapKeyPattern{",", ","}",opts__11480__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",(151049309)),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__904){
var self__ = this;
var G__904__$1 = this;
return (new cljs.core.RecordIter((0),G__904__$1,(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",(151049309))], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__11456__auto__){
var self__ = this;
var this__11456__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__11449__auto__){
var self__ = this;
var this__11449__auto____$1 = this;
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__11462__auto__){
var self__ = this;
var this__11462__auto____$1 = this;
return ((1) + cljs.core.count.call(null,self__.__extmap));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__11450__auto__){
var self__ = this;
var this__11450__auto____$1 = this;
var h__10888__auto__ = self__.__hash;
if((!((h__10888__auto__ == null)))){
return h__10888__auto__;
} else {
var h__10888__auto____$1 = (function (coll__11451__auto__){
return ((-1368676066) ^ cljs.core.hash_unordered_coll.call(null,coll__11451__auto__));
}).call(null,this__11450__auto____$1);
(self__.__hash = h__10888__auto____$1);

return h__10888__auto____$1;
}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this906,other907){
var self__ = this;
var this906__$1 = this;
return (((!((other907 == null)))) && ((this906__$1.constructor === other907.constructor)) && (cljs.core._EQ_.call(null,this906__$1.p,other907.p)) && (cljs.core._EQ_.call(null,this906__$1.__extmap,other907.__extmap)));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IExistentialPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_map_key_pattern_matrix.call(null,rows);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__11473__auto__,k__11474__auto__){
var self__ = this;
var this__11473__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",(151049309)),null], null), null),k__11474__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__11473__auto____$1),self__.__meta),k__11474__auto__);
} else {
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__11474__auto__)),null));
}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__11471__auto__,k__11472__auto__,G__904){
var self__ = this;
var this__11471__auto____$1 = this;
var pred__914 = cljs.core.keyword_identical_QMARK_;
var expr__915 = k__11472__auto__;
if(cljs.core.truth_(pred__914.call(null,new cljs.core.Keyword(null,"p","p",(151049309)),expr__915))){
return (new cljs.core.match.MapKeyPattern(G__904,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__11472__auto__,G__904),null));
}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__11476__auto__){
var self__ = this;
var this__11476__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",(151049309)),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__11457__auto__,G__904){
var self__ = this;
var this__11457__auto____$1 = this;
return (new cljs.core.match.MapKeyPattern(self__.p,G__904,self__.__extmap,self__.__hash));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__11463__auto__,entry__11464__auto__){
var self__ = this;
var this__11463__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__11464__auto__)){
return this__11463__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__11464__auto__,(0)),cljs.core._nth.call(null,entry__11464__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__11463__auto____$1,entry__11464__auto__);
}
}));

(cljs.core.match.MapKeyPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null)], null);
}));

(cljs.core.match.MapKeyPattern.cljs$lang$type = true);

(cljs.core.match.MapKeyPattern.cljs$lang$ctorPrSeq = (function (this__11549__auto__){
return (new cljs.core.List(null,"cljs.core.match/MapKeyPattern",null,(1),null));
}));

(cljs.core.match.MapKeyPattern.cljs$lang$ctorPrWriter = (function (this__11549__auto__,writer__11550__auto__){
return cljs.core._write.call(null,writer__11550__auto__,"cljs.core.match/MapKeyPattern");
}));

/**
 * Positional factory function for cljs.core.match/MapKeyPattern.
 */
cljs.core.match.__GT_MapKeyPattern = (function cljs$core$match$__GT_MapKeyPattern(p){
return (new cljs.core.match.MapKeyPattern(p,null,null,null));
});

/**
 * Factory function for cljs.core.match/MapKeyPattern, taking a map of keywords to field values.
 */
cljs.core.match.map__GT_MapKeyPattern = (function cljs$core$match$map__GT_MapKeyPattern(G__908){
var extmap__11545__auto__ = (function (){var G__917 = cljs.core.dissoc.call(null,G__908,new cljs.core.Keyword(null,"p","p",(151049309)));
if(cljs.core.record_QMARK_.call(null,G__908)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__917);
} else {
return G__917;
}
})();
return (new cljs.core.match.MapKeyPattern(new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(G__908),null,cljs.core.not_empty.call(null,extmap__11545__auto__),null));
});

cljs.core.match.map_key_pattern = (function cljs$core$match$map_key_pattern(p){
return cljs.core.assoc.call(null,(new cljs.core.match.MapKeyPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)),new cljs.core.Keyword("cljs.core.match","map-key","cljs.core.match/map-key",(852254431)));
});
cljs.core.match.map_key_pattern_QMARK_ = (function cljs$core$match$map_key_pattern_QMARK_(x){
return (x instanceof cljs.core.match.MapKeyPattern);
});

cljs.core.match.row_keys = (function cljs$core$match$row_keys(row,env){
var p = cljs.core.first.call(null,row);
var only = new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p));
if(((cljs.core.not.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env)))) && (cljs.core.seq.call(null,only)))){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env),true);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(p))),cljs.core.set.call(null,only)], null);
});
cljs.core.match.get_all_keys = (function cljs$core$match$get_all_keys(rows,env){
return cljs.core.reduce.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__30_SHARP_){
return cljs.core.match.row_keys.call(null,p1__30_SHARP_,env);
}),cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.match.wildcard_pattern_QMARK_,cljs.core.first),rows))));
});
cljs.core.match.wrap_values = (function cljs$core$match$wrap_values(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__919){
var vec__920 = p__919;
var k = cljs.core.nth.call(null,vec__920,(0),null);
var v = cljs.core.nth.call(null,vec__920,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.match.wildcard_pattern_QMARK_.call(null,v))?cljs.core.match.map_key_pattern.call(null,v):v)], null);
}),m));
});
cljs.core.match.get_ocr_map = (function cljs$core$match$get_ocr_map(p,p__923){
var map__924 = p__923;
var map__924__$1 = (((((!((map__924 == null))))?(((((map__924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__924):map__924);
var only = cljs.core.get.call(null,map__924__$1,new cljs.core.Keyword(null,"only","only",(1907811652)));
var all_keys = cljs.core.get.call(null,map__924__$1,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)));
var wc_map = cljs.core.get.call(null,map__924__$1,new cljs.core.Keyword(null,"wc-map","wc-map",(-57721646)));
if(cljs.core.truth_(cljs.core.match.map_pattern_QMARK_.call(null,p))){
return cljs.core.merge.call(null,(cljs.core.truth_(only)?cljs.core.zipmap.call(null,all_keys,cljs.core.repeat.call(null,cljs.core.match.literal_pattern.call(null,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222))))):null),wc_map,cljs.core.match.wrap_values.call(null,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(p)));
} else {
return wc_map;
}
});
cljs.core.match.specialize_map_pattern_row = (function cljs$core$match$specialize_map_pattern_row(row,p__926){
var map__927 = p__926;
var map__927__$1 = (((((!((map__927 == null))))?(((((map__927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__927):map__927);
var env = map__927__$1;
var all_keys = cljs.core.get.call(null,map__927__$1,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)));
var only_QMARK_ = cljs.core.get.call(null,map__927__$1,new cljs.core.Keyword(null,"only?","only?",(504823581)));
var focr = cljs.core.get.call(null,map__927__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var p = cljs.core.first.call(null,row);
var only = cljs.core.seq.call(null,new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
var ocr_map = cljs.core.match.get_ocr_map.call(null,p,cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"only","only",(1907811652)),only));
var ps = cljs.core.doall.call(null,cljs.core.map.call(null,ocr_map,all_keys));
var ps__$1 = (cljs.core.truth_(cljs.core.deref.call(null,only_QMARK_))?((only)?(function (){var a = cljs.core.with_meta.call(null,cljs.core.gensym.call(null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",(981564201),null)], null));
return cljs.core.cons.call(null,cljs.core.match.guard_pattern.call(null,cljs.core.match.wildcard_pattern.call(null),cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,a,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","set","cljs.core/set",(724680876),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",(-927561820),null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.concat.call(null,only))),null,(1),null)))),null,(1),null))))], null))),ps);
})():cljs.core.cons.call(null,cljs.core.match.wildcard_pattern.call(null),ps)):ps);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),cljs.core.reverse.call(null,ps__$1));
});
cljs.core.match.specialize_map_pattern_matrix = (function cljs$core$match$specialize_map_pattern_matrix(rows,env){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__31_SHARP_){
return cljs.core.match.specialize_map_pattern_row.call(null,p1__31_SHARP_,env);
}),rows));
});
cljs.core.match.gen_map_pattern_ocr = (function cljs$core$match$gen_map_pattern_ocr(ocr,k){
return cljs.core.gensym.call(null,[cljs.core.name.call(null,ocr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k).replace(".","_DOT_")),"__"].join(''));
});
cljs.core.match.map_pattern_matrix_ocr_sym = (function cljs$core$match$map_pattern_matrix_ocr_sym(k,env){
var focr = new cljs.core.Keyword(null,"focr","focr",(-820561400)).cljs$core$IFn$_invoke$arity$1(env);
var ocr = cljs.core.get_in.call(null,env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ocrs-map","ocrs-map",(76084823)),k], null));
return cljs.core.with_meta.call(null,ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),new cljs.core.Keyword(null,"map","map",(1371690461)),new cljs.core.Keyword(null,"key","key",(-1516042587)),k,new cljs.core.Keyword(null,"map-sym","map-sym",(1467543192)),focr,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match.val_at_expr.call(null,focr,k,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))], null));
});
cljs.core.match.map_pattern_matrix_ocrs = (function cljs$core$match$map_pattern_matrix_ocrs(ocrs,env){
var focr = new cljs.core.Keyword(null,"focr","focr",(-820561400)).cljs$core$IFn$_invoke$arity$1(env);
var mocrs = cljs.core.map.call(null,(function (p1__32_SHARP_){
return cljs.core.match.map_pattern_matrix_ocr_sym.call(null,p1__32_SHARP_,env);
}),new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)).cljs$core$IFn$_invoke$arity$1(env));
var mocrs__$1 = cljs.core.vec.call(null,(cljs.core.truth_(cljs.core.deref.call(null,new cljs.core.Keyword(null,"only?","only?",(504823581)).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.cons.call(null,focr,mocrs):mocrs));
return cljs.core.into.call(null,mocrs__$1,cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
});

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.MapPattern = (function (m,_meta){
this.m = m;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.MapPattern.prototype.toString = (function (){
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

(cljs.core.match.MapPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.MapPattern)) && (cljs.core._EQ_.call(null,self__.m,new cljs.core.Keyword(null,"m","m",(1632677161)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match.MapPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.MapPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.MapPattern(self__.m,new_meta));
}));

(cljs.core.match.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__929 = k;
var G__929__$1 = (((G__929 instanceof cljs.core.Keyword))?G__929.fqn:null);
switch (G__929__$1) {
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

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",(-1074798682),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",(-150575073),null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))));
}));

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focr","focr",(-820561400)),focr,new cljs.core.Keyword(null,"only?","only?",(504823581)),cljs.core.atom.call(null,false)], null);
var all_keys = cljs.core.match.get_all_keys.call(null,rows,env);
var env_SINGLEQUOTE_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"all-keys","all-keys",(-1041756070)),all_keys,new cljs.core.Keyword(null,"wc-map","wc-map",(-57721646)),cljs.core.zipmap.call(null,all_keys,cljs.core.repeatedly.call(null,cljs.core.match.wildcard_pattern)),new cljs.core.Keyword(null,"ocrs-map","ocrs-map",(76084823)),cljs.core.zipmap.call(null,all_keys,cljs.core.map.call(null,(function (p1__33_SHARP_){
return cljs.core.match.gen_map_pattern_ocr.call(null,focr,p1__33_SHARP_);
}),all_keys)));
var nrows = cljs.core.match.specialize_map_pattern_matrix.call(null,rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match.map_pattern_matrix_ocrs.call(null,ocrs,env_SINGLEQUOTE_);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
}));

(cljs.core.match.MapPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",(-1021758608),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.MapPattern.cljs$lang$type = true);

(cljs.core.match.MapPattern.cljs$lang$ctorStr = "cljs.core.match/MapPattern");

(cljs.core.match.MapPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/MapPattern");
}));

/**
 * Positional factory function for cljs.core.match/MapPattern.
 */
cljs.core.match.__GT_MapPattern = (function cljs$core$match$__GT_MapPattern(m,_meta){
return (new cljs.core.match.MapPattern(m,_meta));
});

cljs.core.match.map_pattern = (function cljs$core$match$map_pattern(var_args){
var G__932 = arguments.length;
switch (G__932) {
case (0):
return cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return (new cljs.core.match.MapPattern(cljs.core.PersistentArrayMap.EMPTY,null));
}));

(cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$1 = (function (m){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error("Assert failed: (map? m)"));
}

return (new cljs.core.match.MapPattern(m,null));
}));

(cljs.core.match.map_pattern.cljs$lang$maxFixedArity = (1));

cljs.core.match.map_pattern_QMARK_ = (function cljs$core$match$map_pattern_QMARK_(x){
return (x instanceof cljs.core.match.MapPattern);
});
cljs.core.match.calc_rest_QMARK__and_min_size = (function cljs$core$match$calc_rest_QMARK__and_min_size(rows,env){
return cljs.core.reduce.call(null,(function (p__934,p__935){
var vec__936 = p__934;
var rest_QMARK_ = cljs.core.nth.call(null,vec__936,(0),null);
var min_size = cljs.core.nth.call(null,vec__936,(1),null);
var vec__939 = p__935;
var seq__940 = cljs.core.seq.call(null,vec__939);
var first__941 = cljs.core.first.call(null,seq__940);
var seq__940__$1 = cljs.core.next.call(null,seq__940);
var p = first__941;
var ps = seq__940__$1;
if(cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_.call(null,p))){
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
cljs.core.match.specialize_vector_pattern_row = (function cljs$core$match$specialize_vector_pattern_row(row,p__942){
var map__943 = p__942;
var map__943__$1 = (((((!((map__943 == null))))?(((((map__943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__943.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__943):map__943);
var focr = cljs.core.get.call(null,map__943__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var min_size = cljs.core.get.call(null,map__943__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var p = cljs.core.first.call(null,row);
var ps = (cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_.call(null,p))?cljs.core.match.protocols.split.call(null,p,min_size):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.wildcard_pattern.call(null),cljs.core.match.wildcard_pattern.call(null)], null)
);
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),cljs.core.reverse.call(null,ps));
});
cljs.core.match.specialize_vector_pattern_row_non_rest = (function cljs$core$match$specialize_vector_pattern_row_non_rest(row,p__945){
var map__946 = p__945;
var map__946__$1 = (((((!((map__946 == null))))?(((((map__946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__946):map__946);
var focr = cljs.core.get.call(null,map__946__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var min_size = cljs.core.get.call(null,map__946__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var p = cljs.core.first.call(null,row);
var ps = (cljs.core.truth_(cljs.core.match.vector_pattern_QMARK_.call(null,p))?cljs.core.reverse.call(null,new cljs.core.Keyword(null,"v","v",(21465059)).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.repeatedly.call(null,min_size,cljs.core.match.wildcard_pattern));
return cljs.core.reduce.call(null,cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind.call(null,row,(0),focr),ps);
});
cljs.core.match.specialize_vector_pattern_matrix = (function cljs$core$match$specialize_vector_pattern_matrix(rows,env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__34_SHARP_){
return cljs.core.match.specialize_vector_pattern_row.call(null,p1__34_SHARP_,env);
}),rows));
} else {
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__35_SHARP_){
return cljs.core.match.specialize_vector_pattern_row_non_rest.call(null,p1__35_SHARP_,env);
}),rows));
}
});
cljs.core.match.vector_pattern_ocr_sym = (function cljs$core$match$vector_pattern_ocr_sym(p__948,i){
var map__949 = p__948;
var map__949__$1 = (((((!((map__949 == null))))?(((((map__949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__949):map__949);
var pat = cljs.core.get.call(null,map__949__$1,new cljs.core.Keyword(null,"pat","pat",(-1417570164)));
var focr = cljs.core.get.call(null,map__949__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var tag = cljs.core.get.call(null,map__949__$1,new cljs.core.Keyword(null,"tag","tag",(-1290361223)));
var ocr = cljs.core.gensym.call(null,[cljs.core.name.call(null,focr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
return cljs.core.with_meta.call(null,ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",(-1671818864)),focr,new cljs.core.Keyword(null,"index","index",(-1531685915)),i,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),(function (){var temp__9395__auto__ = new cljs.core.Keyword(null,"offset","offset",(296498311)).cljs$core$IFn$_invoke$arity$1(pat);
if(cljs.core.truth_(temp__9395__auto__)){
var offset = temp__9395__auto__;
return cljs.core.match.nth_offset_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),i,offset);
} else {
return cljs.core.match.nth_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),i);
}
})()], null));
});
cljs.core.match.vector_pattern_matrix_ocrs = (function cljs$core$match$vector_pattern_matrix_ocrs(ocrs,p__951){
var map__952 = p__951;
var map__952__$1 = (((((!((map__952 == null))))?(((((map__952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__952):map__952);
var env = map__952__$1;
var focr = cljs.core.get.call(null,map__952__$1,new cljs.core.Keyword(null,"focr","focr",(-820561400)));
var tag = cljs.core.get.call(null,map__952__$1,new cljs.core.Keyword(null,"tag","tag",(-1290361223)));
var min_size = cljs.core.get.call(null,map__952__$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)));
var rest_QMARK_ = cljs.core.get.call(null,map__952__$1,new cljs.core.Keyword(null,"rest?","rest?",(345335951)));
if(cljs.core.truth_(rest_QMARK_)){
var ocr_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",(-1111165873)),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",(-1671818864)),focr], null);
var vl_ocr = cljs.core.gensym.call(null,[cljs.core.name.call(null,focr),"_left__"].join(''));
var vl_ocr__$1 = cljs.core.with_meta.call(null,vl_ocr,cljs.core.assoc.call(null,ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match.subvec_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),(0),min_size)));
var vr_ocr = cljs.core.gensym.call(null,[cljs.core.name.call(null,focr),"_right__"].join(''));
var vr_ocr__$1 = cljs.core.with_meta.call(null,vr_ocr,cljs.core.assoc.call(null,ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.match.subvec_inline.call(null,tag,cljs.core.match.with_tag.call(null,tag,focr),min_size)));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vl_ocr__$1,vr_ocr__$1], null),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
} else {
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.match.vector_pattern_ocr_sym,env),cljs.core.range.call(null,min_size)),cljs.core.match.protocols.drop_nth.call(null,ocrs,(0)));
}
});
cljs.core.match.array_tag = (function cljs$core$match$array_tag(x){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"bytes","bytes",(-1478569089),null),new cljs.core.Keyword("cljs.core.match","array","cljs.core.match/array",(1503073376)),new cljs.core.Symbol(null,"shorts","shorts",(107738238),null),new cljs.core.Keyword("cljs.core.match","shorts","cljs.core.match/shorts",(-552653627)),new cljs.core.Symbol(null,"ints","ints",(-1761239845),null),new cljs.core.Keyword("cljs.core.match","ints","cljs.core.match/ints",(-406235954)),new cljs.core.Symbol(null,"longs","longs",(-1017696020),null),new cljs.core.Keyword("cljs.core.match","longs","cljs.core.match/longs",(-652539949)),new cljs.core.Symbol(null,"doubles","doubles",(-1517872169),null),new cljs.core.Keyword("cljs.core.match","doubles","cljs.core.match/doubles",(-56405410)),new cljs.core.Symbol(null,"objects","objects",(-554722035),null),new cljs.core.Keyword("cljs.core.match","objects","cljs.core.match/objects",(-1548561908))], null),new cljs.core.Keyword(null,"tag","tag",(-1290361223)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,x)));
});

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.IContainsRestPattern}
 * @implements {cljs.core.match.protocols.IVectorPattern}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.VectorPattern = (function (v,t,size,offset,rest_QMARK_,_meta){
this.v = v;
this.t = t;
this.size = size;
this.offset = offset;
this.rest_QMARK_ = rest_QMARK_;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.VectorPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.v)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.t)].join('');
}));

(cljs.core.match.VectorPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.VectorPattern)) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_], null),cljs.core.map.call(null,(function (p1__36_SHARP_){
return p1__36_SHARP_.call(null,other);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",(21465059)),new cljs.core.Keyword(null,"t","t",(-1397832519)),new cljs.core.Keyword(null,"size","size",(1098693007)),new cljs.core.Keyword(null,"offset","offset",(296498311)),new cljs.core.Keyword(null,"rest?","rest?",(345335951))], null)))));
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.VectorPattern(self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_,new_meta));
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__954 = k;
var G__954__$1 = (((G__954 instanceof cljs.core.Keyword))?G__954.fqn:null);
switch (G__954__$1) {
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

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
var t__$1 = (function (){var or__10116__auto__ = cljs.core.match.array_tag.call(null,ocr);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return self__.t;
}
})();
if(cljs.core.truth_(cljs.core.match.check_size_QMARK_.call(null,t__$1))){
if(cljs.core.truth_(self__.rest_QMARK_)){
return cljs.core.match.test_with_min_size_inline.call(null,t__$1,ocr,self__.size);
} else {
return cljs.core.match.test_with_size_inline.call(null,t__$1,ocr,self__.size);
}
} else {
return cljs.core.match.test_inline.call(null,t__$1,ocr);
}
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IContainsRestPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.rest_QMARK_;
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IVectorPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IVectorPattern$split$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
var lv = cljs.core.subvec.call(null,self__.v,(0),n);
var rv = cljs.core.subvec.call(null,self__.v,n);
var pl = (new cljs.core.match.VectorPattern(lv,self__.t,n,self__.offset,false,self__._meta));
var pr = ((cljs.core.match.rest_pattern_QMARK_.call(null,cljs.core.first.call(null,rv)))?new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,rv)):(function (){var rest_QMARK___$1 = cljs.core.some.call(null,cljs.core.match.rest_pattern_QMARK_,rv);
var rvc = cljs.core.count.call(null,rv);
var size__$1 = (cljs.core.truth_(rest_QMARK___$1)?(rvc - (1)):rvc);
return (new cljs.core.match.VectorPattern(rv,self__.t,size__$1,n,rest_QMARK___$1,self__._meta));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pl,pr], null);
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var focr = cljs.core.first.call(null,ocrs);
var env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focr","focr",(-820561400)),focr,new cljs.core.Keyword(null,"fp","fp",(-469175650)),cljs.core.ffirst.call(null,rows),new cljs.core.Keyword(null,"pat","pat",(-1417570164)),this$__$1], null);
var vec__955 = cljs.core.match.calc_rest_QMARK__and_min_size.call(null,rows,env);
var rest_QMARK___$1 = cljs.core.nth.call(null,vec__955,(0),null);
var min_size = cljs.core.nth.call(null,vec__955,(1),null);
var env_SINGLEQUOTE_ = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"rest?","rest?",(345335951)),rest_QMARK___$1,new cljs.core.Keyword(null,"min-size","min-size",(1058361905)),min_size,new cljs.core.Keyword(null,"tag","tag",(-1290361223)),(function (){var or__10116__auto__ = cljs.core.match.array_tag.call(null,focr);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return new cljs.core.Keyword(null,"t","t",(-1397832519)).cljs$core$IFn$_invoke$arity$1(this$__$1);
}
})());
var nrows = cljs.core.match.specialize_vector_pattern_matrix.call(null,rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match.vector_pattern_matrix_ocrs.call(null,ocrs,env_SINGLEQUOTE_);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
}));

(cljs.core.match.VectorPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",(1661996586),null),new cljs.core.Symbol(null,"t","t",(242699008),null),new cljs.core.Symbol(null,"size","size",(-1555742762),null),new cljs.core.Symbol(null,"offset","offset",(1937029838),null),new cljs.core.Symbol(null,"rest?","rest?",(1985867478),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.VectorPattern.cljs$lang$type = true);

(cljs.core.match.VectorPattern.cljs$lang$ctorStr = "cljs.core.match/VectorPattern");

(cljs.core.match.VectorPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/VectorPattern");
}));

/**
 * Positional factory function for cljs.core.match/VectorPattern.
 */
cljs.core.match.__GT_VectorPattern = (function cljs$core$match$__GT_VectorPattern(v,t,size,offset,rest_QMARK_,_meta){
return (new cljs.core.match.VectorPattern(v,t,size,offset,rest_QMARK_,_meta));
});

cljs.core.match.vector_pattern = (function cljs$core$match$vector_pattern(var_args){
var G__960 = arguments.length;
switch (G__960) {
case (0):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match.vector_pattern.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),null,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.match.vector_pattern.call(null,v,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),null,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$2 = (function (v,t){
return cljs.core.match.vector_pattern.call(null,v,t,null,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$3 = (function (v,t,offset){
return cljs.core.match.vector_pattern.call(null,v,t,offset,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4 = (function (v,t,offset,rest_QMARK_){
if(cljs.core.vector_QMARK_.call(null,v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var c = cljs.core.count.call(null,v);
var size = (cljs.core.truth_(rest_QMARK_)?(c - (1)):c);
return (new cljs.core.match.VectorPattern(v,t,size,offset,rest_QMARK_,null));
}));

(cljs.core.match.vector_pattern.cljs$lang$maxFixedArity = (4));

cljs.core.match.vector_pattern_QMARK_ = (function cljs$core$match$vector_pattern_QMARK_(x){
return (x instanceof cljs.core.match.VectorPattern);
});
cljs.core.match.specialize_or_pattern_row = (function cljs$core$match$specialize_or_pattern_row(row,pat,ps){
var p = cljs.core.first.call(null,row);
if(cljs.core.truth_((function (){var and__10091__auto__ = cljs.core.match.groupable_QMARK_.call(null,pat,p);
if(cljs.core.truth_(and__10091__auto__)){
return (!(cljs.core.match.wildcard_pattern_QMARK_.call(null,p)));
} else {
return and__10091__auto__;
}
})())){
return cljs.core.map.call(null,(function (p__$1){
return cljs.core.match.update_pattern.call(null,row,(0),p__$1);
}),ps);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
}
});
cljs.core.match.specialize_or_pattern_matrix = (function cljs$core$match$specialize_or_pattern_matrix(rows,pat,ps){
return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__37_SHARP_){
return cljs.core.match.specialize_or_pattern_row.call(null,p1__37_SHARP_,pat,ps);
}),rows)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.OrPattern = (function (ps,_meta){
this.ps = ps;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$IPseudoPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.OrPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.ps);
}));

(cljs.core.match.OrPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.OrPattern)) && (cljs.core._EQ_.call(null,self__.ps,new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match.OrPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.OrPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.OrPattern(self__.ps,new_meta));
}));

(cljs.core.match.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__962 = k;
var G__962__$1 = (((G__962 instanceof cljs.core.Keyword))?G__962.fqn:null);
switch (G__962__$1) {
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

(cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_or_pattern_matrix.call(null,rows,this$__$1,self__.ps);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match.OrPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",(1932889573),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.OrPattern.cljs$lang$type = true);

(cljs.core.match.OrPattern.cljs$lang$ctorStr = "cljs.core.match/OrPattern");

(cljs.core.match.OrPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/OrPattern");
}));

/**
 * Positional factory function for cljs.core.match/OrPattern.
 */
cljs.core.match.__GT_OrPattern = (function cljs$core$match$__GT_OrPattern(ps,_meta){
return (new cljs.core.match.OrPattern(ps,_meta));
});

cljs.core.match.or_pattern = (function cljs$core$match$or_pattern(p){
if(cljs.core.vector_QMARK_.call(null,p)){
} else {
throw (new Error("Assert failed: (vector? p)"));
}

return (new cljs.core.match.OrPattern(p,null));
});
cljs.core.match.or_pattern_QMARK_ = (function cljs$core$match$or_pattern_QMARK_(x){
return (x instanceof cljs.core.match.OrPattern);
});
cljs.core.match.specialize_guard_pattern_matrix = (function cljs$core$match$specialize_guard_pattern_matrix(rows){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__964){
var vec__965 = p__964;
var p = cljs.core.nth.call(null,vec__965,(0),null);
var row = vec__965;
if(cljs.core.truth_(cljs.core.match.guard_pattern_QMARK_.call(null,p))){
return cljs.core.match.update_pattern.call(null,row,(0),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
});

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.GuardPattern = (function (p,gs,_meta){
this.p = p;
this.gs = gs;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.GuardPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.p)," :guard ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.gs)].join('');
}));

(cljs.core.match.GuardPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.GuardPattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.gs,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match.GuardPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.GuardPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.GuardPattern(self__.p,self__.gs,new_meta));
}));

(cljs.core.match.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__968 = k;
var G__968__$1 = (((G__968 instanceof cljs.core.Keyword))?G__968.fqn:null);
switch (G__968__$1) {
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

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),cljs.core.map.call(null,(function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.call(null,ocr))));
}));

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_guard_pattern_matrix.call(null,rows);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match.GuardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.GuardPattern.cljs$lang$type = true);

(cljs.core.match.GuardPattern.cljs$lang$ctorStr = "cljs.core.match/GuardPattern");

(cljs.core.match.GuardPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/GuardPattern");
}));

/**
 * Positional factory function for cljs.core.match/GuardPattern.
 */
cljs.core.match.__GT_GuardPattern = (function cljs$core$match$__GT_GuardPattern(p,gs,_meta){
return (new cljs.core.match.GuardPattern(p,gs,_meta));
});

cljs.core.match.guard_pattern = (function cljs$core$match$guard_pattern(p,gs){
if(cljs.core.set_QMARK_.call(null,gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match.GuardPattern(p,gs,null));
});
cljs.core.match.guard_pattern_QMARK_ = (function cljs$core$match$guard_pattern_QMARK_(x){
return (x instanceof cljs.core.match.GuardPattern);
});
cljs.core.match.app_pattern_matrix_ocrs = (function cljs$core$match$app_pattern_matrix_ocrs(p__970,form){
var vec__971 = p__970;
var focr = cljs.core.nth.call(null,vec__971,(0),null);
var ocrs = vec__971;
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta.call(null,cljs.core.gensym.call(null,["app_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(focr)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)),cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,(function (){var or__10116__auto__ = new cljs.core.Keyword(null,"bind-expr","bind-expr",(41520549)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,focr));
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return focr;
}
})(),null,(1),null))))], null))], null),ocrs);
});
cljs.core.match.specialize_app_pattern_matrix = (function cljs$core$match$specialize_app_pattern_matrix(rows,form){
var vec__974 = cljs.core.split_with.call(null,(function (p__977){
var vec__978 = p__977;
var pat = cljs.core.nth.call(null,vec__978,(0),null);
var row = vec__978;
var and__10091__auto__ = cljs.core.match.app_pattern_QMARK_.call(null,pat);
if(cljs.core.truth_(and__10091__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(pat),form);
} else {
return and__10091__auto__;
}
}),rows);
var matched_rows = cljs.core.nth.call(null,vec__974,(0),null);
var rest_rows = cljs.core.nth.call(null,vec__974,(1),null);
return cljs.core.vec.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,(function (row){
return cljs.core.match.protocols.prepend.call(null,cljs.core.match.update_pattern.call(null,row,(0),cljs.core.match.wildcard_pattern.call(null)),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,row)));
}),matched_rows),cljs.core.map.call(null,(function (row){
return cljs.core.match.protocols.prepend.call(null,row,cljs.core.match.wildcard_pattern.call(null));
}),rest_rows)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.AppPattern = (function (p,form,_meta){
this.p = p;
this.form = form;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$IPseudoPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.AppPattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.p)," :<< ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.form)].join('');
}));

(cljs.core.match.AppPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.AppPattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.form,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match.AppPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.AppPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.AppPattern(self__.p,self__.form,new_meta));
}));

(cljs.core.match.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__981 = k;
var G__981__$1 = (((G__981 instanceof cljs.core.Keyword))?G__981.fqn:null);
switch (G__981__$1) {
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

(cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nocrs = cljs.core.match.app_pattern_matrix_ocrs.call(null,ocrs,self__.form);
var nrows = cljs.core.match.specialize_app_pattern_matrix.call(null,rows,self__.form);
return cljs.core.match.pattern_matrix.call(null,nrows,nocrs);
}));

(cljs.core.match.AppPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"form","form",(16469056),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.AppPattern.cljs$lang$type = true);

(cljs.core.match.AppPattern.cljs$lang$ctorStr = "cljs.core.match/AppPattern");

(cljs.core.match.AppPattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/AppPattern");
}));

/**
 * Positional factory function for cljs.core.match/AppPattern.
 */
cljs.core.match.__GT_AppPattern = (function cljs$core$match$__GT_AppPattern(p,form,_meta){
return (new cljs.core.match.AppPattern(p,form,_meta));
});

cljs.core.match.app_pattern = (function cljs$core$match$app_pattern(p,form){
return (new cljs.core.match.AppPattern(p,form,null));
});
cljs.core.match.app_pattern_QMARK_ = (function cljs$core$match$app_pattern_QMARK_(x){
return (x instanceof cljs.core.match.AppPattern);
});
cljs.core.match.preds = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ret__12698__auto___985 = (function (){
cljs.core.match.defpred = (function cljs$core$match$defpred(var_args){
var G__984 = arguments.length;
switch (G__984) {
case (3):
return cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.swap_BANG_.call(null,cljs.core.match.preds,cljs.core.assoc,name,name);
}));

(cljs.core.match.defpred.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.swap_BANG_.call(null,cljs.core.match.preds,cljs.core.assoc,name,f);
}));

(cljs.core.match.defpred.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core.match.defpred.cljs$lang$macro = true);

cljs.core.match.specialize_predicate_pattern_matrix = (function cljs$core$match$specialize_predicate_pattern_matrix(rows){
return cljs.core.vec.call(null,cljs.core.map.call(null,(function (p__987){
var vec__988 = p__987;
var p = cljs.core.nth.call(null,vec__988,(0),null);
var row = vec__988;
if(cljs.core.truth_(cljs.core.match.predicate_pattern_QMARK_.call(null,p))){
return cljs.core.match.update_pattern.call(null,row,(0),new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
});

/**
* @constructor
 * @implements {cljs.core.match.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
*/
cljs.core.match.PredicatePattern = (function (p,gs,_meta){
this.p = p;
this.gs = gs;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.PredicatePattern.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.p)," :when ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.gs)].join('');
}));

(cljs.core.match.PredicatePattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.PredicatePattern)) && (cljs.core._EQ_.call(null,self__.p,new cljs.core.Keyword(null,"p","p",(151049309)).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.call(null,self__.gs,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match.PredicatePattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__._meta;
}));

(cljs.core.match.PredicatePattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PredicatePattern(self__.p,self__.gs,new_meta));
}));

(cljs.core.match.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.call(null,this$__$1,k,null);
}));

(cljs.core.match.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__991 = k;
var G__991__$1 = (((G__991 instanceof cljs.core.Keyword))?G__991.fqn:null);
switch (G__991__$1) {
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

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",(-6692549),null),null,(1),null)),cljs.core.map.call(null,(function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.call(null,ocr))));
}));

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows.call(null,matrix);
var ocrs = cljs.core.match.occurrences.call(null,matrix);
var nrows = cljs.core.match.specialize_predicate_pattern_matrix.call(null,rows);
return cljs.core.match.pattern_matrix.call(null,nrows,ocrs);
}));

(cljs.core.match.PredicatePattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",(1791580836),null),new cljs.core.Symbol(null,"gs","gs",(-1065948605),null),new cljs.core.Symbol(null,"_meta","_meta",(-1716892533),null)], null);
}));

(cljs.core.match.PredicatePattern.cljs$lang$type = true);

(cljs.core.match.PredicatePattern.cljs$lang$ctorStr = "cljs.core.match/PredicatePattern");

(cljs.core.match.PredicatePattern.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.match/PredicatePattern");
}));

/**
 * Positional factory function for cljs.core.match/PredicatePattern.
 */
cljs.core.match.__GT_PredicatePattern = (function cljs$core$match$__GT_PredicatePattern(p,gs,_meta){
return (new cljs.core.match.PredicatePattern(p,gs,_meta));
});

cljs.core.match.predicate_pattern = (function cljs$core$match$predicate_pattern(p,gs){
if(cljs.core.set_QMARK_.call(null,gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match.PredicatePattern(p,gs,null));
});
cljs.core.match.predicate_pattern_QMARK_ = (function cljs$core$match$predicate_pattern_QMARK_(x){
return (x instanceof cljs.core.match.PredicatePattern);
});
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641)),new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",(-1699299641))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"l","l",(1395893423)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417)),new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",(-2126094417))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","predice","cljs.core.match/predice",(173694935)),new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",(-794311346))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",(1588487164)).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017)),new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,a)),new cljs.core.Keyword(null,"only","only",(1907811652)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,b)));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311)),new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",(1151305311))], null),(function (a,b){
var as = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(a);
var bs = new cljs.core.Keyword(null,"ps","ps",(292358046)).cljs$core$IFn$_invoke$arity$1(b);
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,as),cljs.core.count.call(null,bs))) && (cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,cljs.core.match.groupable_QMARK_,as,bs))));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296))], null),(function (a,b){
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"rest?","rest?",(345335951)).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"size","size",(1098693007)).cljs$core$IFn$_invoke$arity$1(b))));
}));
cljs.core._add_method.call(null,cljs.core.match.groupable_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373)),new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",(-668230373))], null),(function (a,b){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"form","form",(-1624062471)).cljs$core$IFn$_invoke$arity$1(b));
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.to_source !== 'undefined')){
} else {
/**
 * Returns a Clojure form that, when executed, is truthy if the
 *   pattern matches the occurrence. Dispatches on the `type` of the
 *   pattern. For instance, a literal pattern might return `(= ~(:pattern
 *   pattern) ~ocr)`, using `=` to test for a match.
 */
cljs.core.match.to_source = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","to-source"),(function (pattern,ocr){
return new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",(-39691477)).cljs$core$IFn$_invoke$arity$1(pattern);
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.emit_pattern !== 'undefined')){
} else {
/**
 * Returns the corresponding pattern for the given syntax. Dispatches
 *   on the class of its argument. For example, `[(:or 1 2) 2]` is dispatched
 *   as clojure.lang.IPersistentVector
 */
cljs.core.match.emit_pattern = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","emit-pattern"),(function (pattern){
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
cljs.core.match.emit_patterns = (function cljs$core$match$emit_patterns(var_args){
var G__994 = arguments.length;
switch (G__994) {
case (2):
return cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2 = (function (ps,t){
return cljs.core.match.emit_patterns.call(null,ps,t,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$3 = (function (ps,t,v){
while(true){
if(cljs.core.empty_QMARK_.call(null,ps)){
return v;
} else {
var p = cljs.core.first.call(null,ps);
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"&","&",(-2144855648),null))){
var p__$1 = cljs.core.second.call(null,ps);
var rp = ((((cljs.core.vector_QMARK_.call(null,p__$1)) && (cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"seq","seq",(-1817803783))))))?cljs.core.match.seq_pattern.call(null,cljs.core.match.emit_patterns.call(null,p__$1,t)):cljs.core.match.emit_pattern.call(null,p__$1));
var G__996 = cljs.core.nnext.call(null,ps);
var G__997 = t;
var G__998 = cljs.core.conj.call(null,v,cljs.core.match.rest_pattern.call(null,rp));
ps = G__996;
t = G__997;
v = G__998;
continue;
} else {
var G__999 = cljs.core.next.call(null,ps);
var G__1000 = t;
var G__1001 = cljs.core.conj.call(null,v,cljs.core.match.emit_pattern.call(null,cljs.core.first.call(null,ps)));
ps = G__999;
t = G__1000;
v = G__1001;
continue;

}
}
break;
}
}));

(cljs.core.match.emit_patterns.cljs$lang$maxFixedArity = (3));

cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296)),(function (pat){
var ps = cljs.core.match.emit_patterns.call(null,pat,new cljs.core.Keyword(null,"vector","vector",(1902966158)));
return cljs.core.match.vector_pattern.call(null,ps,cljs.core.match._STAR_vector_type_STAR_,(0),cljs.core.some.call(null,cljs.core.match.rest_pattern_QMARK_,ps));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",(-408120017)),(function (pat){
return cljs.core.match.map_pattern.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p__1002){
var vec__1003 = p__1002;
var k = cljs.core.nth.call(null,vec__1003,(0),null);
var v = cljs.core.nth.call(null,vec__1003,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.match.emit_pattern.call(null,v)], null);
}),pat))));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",(-2001901386)),(function (pat){
if(cljs.core.not_EQ_.call(null,cljs.core.get.call(null,cljs.core.match._STAR_locals_STAR_,pat,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222))),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",(85049222)))){
return cljs.core.match.literal_pattern.call(null,cljs.core.with_meta.call(null,pat,cljs.core.assoc.call(null,cljs.core.meta.call(null,pat),new cljs.core.Keyword(null,"local","local",(-1497766724)),true)));
} else {
return cljs.core.match.wildcard_pattern.call(null,pat);
}
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (pat){
return cljs.core.match.literal_pattern.call(null,pat);
}));





cljs.core._add_method.call(null,cljs.core.match.emit_pattern,new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",(-634730153)),(function (pat){
if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,pat),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))) && ((((cljs.core.second.call(null,pat) instanceof cljs.core.Symbol)) || ((cljs.core.second.call(null,pat) instanceof cljs.core.Keyword)))))){
return cljs.core.match.literal_pattern.call(null,cljs.core.second.call(null,pat));
} else {
return cljs.core.match.emit_pattern_for_syntax.call(null,pat);
}
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.emit_pattern_for_syntax !== 'undefined')){
} else {
/**
 * Handles patterns wrapped in the special list syntax. Dispatches
 *   on the first or second keyword in the list. For example, the pattern 
 *   `(:or 1 ...) is dispatches as :or, and `(1 :as a)` is dispatched by :as.
 */
cljs.core.match.emit_pattern_for_syntax = (function (){var method_table__12495__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__12496__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__12497__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__12498__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__12499__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",(-1053470341)),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core.match","emit-pattern-for-syntax"),(function (p__1006){
var vec__1007 = p__1006;
var f = cljs.core.nth.call(null,vec__1007,(0),null);
var s = cljs.core.nth.call(null,vec__1007,(1),null);
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"default","default",(-1987822328))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),s], null);
}
}),new cljs.core.Keyword(null,"default","default",(-1987822328)),hierarchy__12499__auto__,method_table__12495__auto__,prefer_table__12496__auto__,method_cache__12497__auto__,cached_hierarchy__12498__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",(235744169)),new cljs.core.Keyword(null,"default","default",(-1987822328))], null),(function (pat){
return cljs.core.match.or_pattern.call(null,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.match.emit_pattern,cljs.core.rest.call(null,pat))));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"as","as",(1148689641))], null),(function (p__1010){
var vec__1011 = p__1010;
var p = cljs.core.nth.call(null,vec__1011,(0),null);
var _ = cljs.core.nth.call(null,vec__1011,(1),null);
var sym = cljs.core.nth.call(null,vec__1011,(2),null);
return cljs.core.with_meta.call(null,cljs.core.match.emit_pattern.call(null,p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",(1148689641)),sym], null));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"<<","<<",(1655720184))], null),(function (p__1014){
var vec__1015 = p__1014;
var p = cljs.core.nth.call(null,vec__1015,(0),null);
var _ = cljs.core.nth.call(null,vec__1015,(1),null);
var form = cljs.core.nth.call(null,vec__1015,(2),null);
return cljs.core.match.app_pattern.call(null,cljs.core.match.emit_pattern.call(null,p),form);
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"when","when",(-576417306))], null),(function (p__1018){
var vec__1019 = p__1018;
var p = cljs.core.nth.call(null,vec__1019,(0),null);
var _ = cljs.core.nth.call(null,vec__1019,(1),null);
var gs = cljs.core.nth.call(null,vec__1019,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_.call(null,gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Invalid predicate expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? symbol? gs)"].join('')));
}

if(cljs.core.every_QMARK_.call(null,(function (p1__38_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.match.preds),p1__38_SHARP_);
}),gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Unknown predicate in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? (fn* [p1__38#] (contains? (clojure.core/deref preds) p1__38#)) gs)"].join('')));
}

return cljs.core.match.predicate_pattern.call(null,cljs.core.match.emit_pattern.call(null,p),cljs.core.set.call(null,gs__$1));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"guard","guard",(-873147811))], null),(function (p__1022){
var vec__1023 = p__1022;
var p = cljs.core.nth.call(null,vec__1023,(0),null);
var _ = cljs.core.nth.call(null,vec__1023,(1),null);
var gs = cljs.core.nth.call(null,vec__1023,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_.call(null,gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
return cljs.core.match.guard_pattern.call(null,cljs.core.match.emit_pattern.call(null,p),cljs.core.set.call(null,gs__$1));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"seq","seq",(-1817803783))], null),(function (pat){
var p = cljs.core.first.call(null,pat);
if(cljs.core.empty_QMARK_.call(null,p)){
return cljs.core.match.literal_pattern.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.match.seq_pattern.call(null,cljs.core.match.emit_patterns.call(null,p,new cljs.core.Keyword(null,"seq","seq",(-1817803783))));
}
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",(651763296))], null),(function (p__1026){
var vec__1027 = p__1026;
var p = cljs.core.nth.call(null,vec__1027,(0),null);
var t = cljs.core.nth.call(null,vec__1027,(1),null);
var offset_key = cljs.core.nth.call(null,vec__1027,(2),null);
var offset = cljs.core.nth.call(null,vec__1027,(3),null);
var ps = cljs.core.match.emit_patterns.call(null,p,new cljs.core.Keyword(null,"vector","vector",(1902966158)));
return cljs.core.match.vector_pattern.call(null,ps,t,offset,cljs.core.some.call(null,cljs.core.match.rest_pattern_QMARK_,ps));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",(-1987822328)),new cljs.core.Keyword(null,"only","only",(1907811652))], null),(function (p__1030){
var vec__1031 = p__1030;
var p = cljs.core.nth.call(null,vec__1031,(0),null);
var _ = cljs.core.nth.call(null,vec__1031,(1),null);
var only = cljs.core.nth.call(null,vec__1031,(2),null);
return cljs.core.with_meta.call(null,cljs.core.match.emit_pattern.call(null,p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",(1907811652)),only], null));
}));
cljs.core._add_method.call(null,cljs.core.match.emit_pattern_for_syntax,new cljs.core.Keyword(null,"default","default",(-1987822328)),(function (p__1034){
var vec__1035 = p__1034;
var _ = cljs.core.nth.call(null,vec__1035,(0),null);
var s = cljs.core.nth.call(null,vec__1035,(1),null);
var l = vec__1035;
throw (new Error(["Invalid list syntax ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),". ","Valid syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec.call(null,cljs.core.remove.call(null,(function (p1__39_SHARP_){
return cljs.core._EQ_.call(null,p1__39_SHARP_,new cljs.core.Keyword(null,"default","default",(-1987822328)));
}),cljs.core.keys.call(null,cljs.core.match.emit_pattern_for_syntax.getMethodTable()))))].join('')));
}));
var void_1044 = ({});
var void_QMARK__1045 = (function (p1__40_SHARP_){
return (void_1044 === p1__40_SHARP_);
});
var infix_keyword_QMARK__1046 = (function (p1__41_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",(-576417306)),null,new cljs.core.Keyword(null,"as","as",(1148689641)),null,new cljs.core.Keyword(null,"guard","guard",(-873147811)),null], null), null).call(null,p1__41_SHARP_);
});
cljs.core.match.regroup_keywords = (function cljs$core$match$regroup_keywords(pattern){
if(cljs.core.vector_QMARK_.call(null,pattern)){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p__1040,r){
var vec__1041 = p__1040;
var result = cljs.core.nth.call(null,vec__1041,(0),null);
var p = cljs.core.nth.call(null,vec__1041,(1),null);
var q = cljs.core.nth.call(null,vec__1041,(2),null);
if(void_QMARK__1045.call(null,p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,q,r], null);
} else {
if(cljs.core.truth_((((!(void_QMARK__1045.call(null,r))))?infix_keyword_QMARK__1046.call(null,q):false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,result,(new cljs.core.List(null,cljs.core.match.regroup_keywords.call(null,p),(new cljs.core.List(null,q,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null))),void_1044,void_1044], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,result,cljs.core.match.regroup_keywords.call(null,p)),q,r], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,void_1044,void_1044], null),cljs.core.conj.call(null,pattern,void_1044,void_1044)));
} else {
if(cljs.core.seq_QMARK_.call(null,pattern)){
return cljs.core.cons.call(null,cljs.core.match.regroup_keywords.call(null,cljs.core.first.call(null,pattern)),cljs.core.rest.call(null,pattern));
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
cljs.core.match.group_keywords = (function cljs$core$match$group_keywords(pattern){
if(cljs.core.vector_QMARK_.call(null,pattern)){
return cljs.core.match.regroup_keywords.call(null,pattern);
} else {
return pattern;
}
});
/**
 * Take an unprocessed pattern expression and an action expression and return
 * a pattern row of the processed pattern expression plus the action epxression.
 */
cljs.core.match.to_pattern_row = (function cljs$core$match$to_pattern_row(pat,action){
var ps = cljs.core.map.call(null,cljs.core.match.emit_pattern,cljs.core.match.group_keywords.call(null,pat));
return cljs.core.match.pattern_row.call(null,ps,action);
});
/**
 * Returns a vector of two elements: the set of all wildcards and the 
 * set of duplicate wildcards.  The underbar _ is excluded from both.
 */
cljs.core.match.wildcards_and_duplicates = (function cljs$core$match$wildcards_and_duplicates(patterns){
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
var G__1047 = pats;
var G__1048 = seen;
var G__1049 = dups;
remaining = G__1047;
seen = G__1048;
dups = G__1049;
continue;
} else {
if((pat instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_.call(null,seen,pat)){
var G__1050 = pats;
var G__1051 = seen;
var G__1052 = cljs.core.conj.call(null,dups,pat);
remaining = G__1050;
seen = G__1051;
dups = G__1052;
continue;
} else {
var G__1053 = pats;
var G__1054 = cljs.core.conj.call(null,seen,pat);
var G__1055 = dups;
remaining = G__1053;
seen = G__1054;
dups = G__1055;
continue;
}
} else {
if(cljs.core.vector_QMARK_.call(null,pat)){
var G__1056 = cljs.core.concat.call(null,pats,pat);
var G__1057 = seen;
var G__1058 = dups;
remaining = G__1056;
seen = G__1057;
dups = G__1058;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,pat)){
var G__1059 = cljs.core.concat.call(null,pats,cljs.core.vals.call(null,pat));
var G__1060 = seen;
var G__1061 = dups;
remaining = G__1059;
seen = G__1060;
dups = G__1061;
continue;
} else {
if(cljs.core.seq_QMARK_.call(null,pat)){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Symbol(null,"quote","quote",(1377916282),null))){
var G__1062 = pats;
var G__1063 = seen;
var G__1064 = dups;
remaining = G__1062;
seen = G__1063;
dups = G__1064;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,pat),new cljs.core.Keyword(null,"or","or",(235744169)))){
var wds = cljs.core.map.call(null,cljs.core.match.wildcards_and_duplicates,cljs.core.map.call(null,cljs.core.list,cljs.core.take_nth.call(null,(2),pat)));
var mseen = cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,cljs.core.first,wds));
var G__1065 = pats;
var G__1066 = clojure.set.union.call(null,seen,mseen);
var G__1067 = cljs.core.apply.call(null,clojure.set.union,dups,clojure.set.intersection.call(null,seen,mseen),cljs.core.map.call(null,cljs.core.second,wds));
remaining = G__1065;
seen = G__1066;
dups = G__1067;
continue;
} else {
if(cljs.core._EQ_.call(null,cljs.core.second.call(null,pat),new cljs.core.Keyword(null,"as","as",(1148689641)))){
var G__1068 = cljs.core.concat.call(null,pats,cljs.core.take_nth.call(null,(2),pat));
var G__1069 = seen;
var G__1070 = dups;
remaining = G__1068;
seen = G__1069;
dups = G__1070;
continue;
} else {
var G__1071 = cljs.core.conj.call(null,pats,cljs.core.first.call(null,pat));
var G__1072 = seen;
var G__1073 = dups;
remaining = G__1071;
seen = G__1072;
dups = G__1073;
continue;

}
}
}
} else {
var G__1074 = pats;
var G__1075 = seen;
var G__1076 = dups;
remaining = G__1074;
seen = G__1075;
dups = G__1076;
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
cljs.core.match.find_duplicate_wildcards = (function cljs$core$match$find_duplicate_wildcards(pattern){
return cljs.core.second.call(null,cljs.core.match.wildcards_and_duplicates.call(null,pattern));
});
cljs.core.match.check_pattern = (function cljs$core$match$check_pattern(pat,vars,nvars,rownum){
var pat__$1 = cljs.core.match.group_keywords.call(null,pat);
if((!(cljs.core.vector_QMARK_.call(null,pat__$1)))){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern rows must be wrapped in []."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),"].",((cljs.core.list_QMARK_.call(null,pat__$1))?[" Note: pattern rows are not patterns."," They cannot be wrapped in a :when guard, for example"].join(''):null)].join('')));
} else {
}

if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,pat__$1),nvars)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row has differing number of patterns. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,pat__$1))," pattern/s, expecting ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nvars)," for occurrences ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)].join('')));
} else {
}

var temp__9522__auto__ = cljs.core.seq.call(null,cljs.core.match.find_duplicate_wildcards.call(null,pat__$1));
if(temp__9522__auto__){
var duplicates = temp__9522__auto__;
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row reuses wildcards in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),".  The following wildcards are ambiguous: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",cljs.core.sort.call(null,duplicates)))),".  There's no guarantee that the matched values will be same.","  Rename the occurrences uniquely."].join('')));
} else {
return null;
}
});
cljs.core.match.check_matrix_args = (function cljs$core$match$check_matrix_args(vars,clauses){
if((vars instanceof cljs.core.Symbol)){
throw (new Error(["Occurrences must be in a vector."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars),"]"].join('')));
} else {
}

if((!(cljs.core.vector_QMARK_.call(null,vars)))){
throw (new Error(["Occurrences must be in a vector. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," is not a vector"].join('')));
} else {
}

var nvars_1108 = cljs.core.count.call(null,vars);
var cls_1109 = cljs.core.partition.call(null,(2),clauses);
var seq__1077_1110 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.butlast.call(null,cls_1109),cljs.core.rest.call(null,cljs.core.range.call(null))));
var chunk__1078_1111 = null;
var count__1079_1112 = (0);
var i__1080_1113 = (0);
while(true){
if((i__1080_1113 < count__1079_1112)){
var vec__1093_1114 = cljs.core._nth.call(null,chunk__1078_1111,i__1080_1113);
var vec__1096_1115 = cljs.core.nth.call(null,vec__1093_1114,(0),null);
var pat_1116 = cljs.core.nth.call(null,vec__1096_1115,(0),null);
var __1117 = cljs.core.nth.call(null,vec__1096_1115,(1),null);
var rownum_1118 = cljs.core.nth.call(null,vec__1093_1114,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_1116)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_1118),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match.check_pattern.call(null,pat_1116,vars,nvars_1108,rownum_1118);


var G__1119 = seq__1077_1110;
var G__1120 = chunk__1078_1111;
var G__1121 = count__1079_1112;
var G__1122 = (i__1080_1113 + (1));
seq__1077_1110 = G__1119;
chunk__1078_1111 = G__1120;
count__1079_1112 = G__1121;
i__1080_1113 = G__1122;
continue;
} else {
var temp__9522__auto___1123 = cljs.core.seq.call(null,seq__1077_1110);
if(temp__9522__auto___1123){
var seq__1077_1124__$1 = temp__9522__auto___1123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1077_1124__$1)){
var c__12122__auto___1125 = cljs.core.chunk_first.call(null,seq__1077_1124__$1);
var G__1126 = cljs.core.chunk_rest.call(null,seq__1077_1124__$1);
var G__1127 = c__12122__auto___1125;
var G__1128 = cljs.core.count.call(null,c__12122__auto___1125);
var G__1129 = (0);
seq__1077_1110 = G__1126;
chunk__1078_1111 = G__1127;
count__1079_1112 = G__1128;
i__1080_1113 = G__1129;
continue;
} else {
var vec__1099_1130 = cljs.core.first.call(null,seq__1077_1124__$1);
var vec__1102_1131 = cljs.core.nth.call(null,vec__1099_1130,(0),null);
var pat_1132 = cljs.core.nth.call(null,vec__1102_1131,(0),null);
var __1133 = cljs.core.nth.call(null,vec__1102_1131,(1),null);
var rownum_1134 = cljs.core.nth.call(null,vec__1099_1130,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_1132)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_1134),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match.check_pattern.call(null,pat_1132,vars,nvars_1108,rownum_1134);


var G__1135 = cljs.core.next.call(null,seq__1077_1124__$1);
var G__1136 = null;
var G__1137 = (0);
var G__1138 = (0);
seq__1077_1110 = G__1135;
chunk__1078_1111 = G__1136;
count__1079_1112 = G__1137;
i__1080_1113 = G__1138;
continue;
}
} else {
}
}
break;
}

var temp__9522__auto___1139 = cljs.core.last.call(null,cls_1109);
if(cljs.core.truth_(temp__9522__auto___1139)){
var vec__1105_1140 = temp__9522__auto___1139;
var pat_1141 = cljs.core.nth.call(null,vec__1105_1140,(0),null);
var __1142 = cljs.core.nth.call(null,vec__1105_1140,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"else","else",(-1508377146)),pat_1141)){
} else {
cljs.core.match.check_pattern.call(null,pat_1141,vars,nvars_1108,cljs.core.count.call(null,cls_1109));
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
cljs.core.match.process_vars = (function cljs$core$match$process_vars(vars){
var process_var = (function cljs$core$match$process_vars_$_process_var(var$){
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
cljs.core.match.emit_matrix = (function cljs$core$match$emit_matrix(var_args){
var G__1144 = arguments.length;
switch (G__1144) {
case (2):
return cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$2 = (function (vars,clauses){
return cljs.core.match.emit_matrix.call(null,vars,clauses,true);
}));

(cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$3 = (function (vars,clauses,default$){
var cs = cljs.core.partition.call(null,(2),clauses);
var vs = cljs.core.match.process_vars.call(null,vars);
var cs__$1 = (function (){var vec__1145 = cljs.core.last.call(null,cs);
var p = cljs.core.nth.call(null,vec__1145,(0),null);
var a = cljs.core.nth.call(null,vec__1145,(1),null);
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
return cljs.core.match.pattern_matrix.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,(function (p1__42_SHARP_){
return cljs.core.apply.call(null,cljs.core.match.to_pattern_row,p1__42_SHARP_);
}),cs__$1)),cljs.core.match.process_vars.call(null,vs));
}));

(cljs.core.match.emit_matrix.cljs$lang$maxFixedArity = (3));

cljs.core.match.executable_form = (function cljs$core$match$executable_form(node){
return cljs.core.match.protocols.n_to_clj.call(null,node);
});
cljs.core.match.recur_present_QMARK_ = (function cljs$core$match$recur_present_QMARK_(actions){
var analyze_action = (function cljs$core$match$recur_present_QMARK__$_analyze_action(action){
if(cljs.core.truth_(((cljs.core.sequential_QMARK_.call(null,action))?cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"recur","recur",(1202958259),null),"null"], null), null),cljs.core.flatten.call(null,action)):false))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recur-present","recur-present",(1178490943)),true], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
return cljs.core.some.call(null,new cljs.core.Keyword(null,"recur-present","recur-present",(1178490943)),cljs.core.map.call(null,analyze_action,actions));
});
cljs.core.match.clj_form = (function cljs$core$match$clj_form(vars,clauses){
if(cljs.core.truth_(cljs.core.deref.call(null,cljs.core.match._STAR_syntax_check_STAR_))){
cljs.core.match.check_matrix_args.call(null,vars,clauses);
} else {
}

var actions = cljs.core.map.call(null,cljs.core.second,cljs.core.partition.call(null,(2),clauses));
var recur_present_QMARK_ = cljs.core.match.recur_present_QMARK_.call(null,actions);
if(cljs.core.not.call(null,(function (){var and__10091__auto__ = cljs.core.match._STAR_no_backtrack_STAR_;
if(cljs.core.truth_(and__10091__auto__)){
return recur_present_QMARK_;
} else {
return and__10091__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Recur form present yet *no-backtrack* set to true","\n","(not (and *no-backtrack* recur-present?))"].join('')));
}

var _STAR_recur_present_STAR__orig_val__1149 = cljs.core.match._STAR_recur_present_STAR_;
var _STAR_recur_present_STAR__temp_val__1150 = (function (){var or__10116__auto__ = cljs.core.match._STAR_recur_present_STAR_;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var or__10116__auto____$1 = recur_present_QMARK_;
if(cljs.core.truth_(or__10116__auto____$1)){
return or__10116__auto____$1;
} else {
return cljs.core.match._STAR_no_backtrack_STAR_;
}
}
})();
(cljs.core.match._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__temp_val__1150);

try{return cljs.core.match.executable_form.call(null,cljs.core.match.compile.call(null,cljs.core.match.emit_matrix.call(null,vars,clauses)));
}finally {(cljs.core.match._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__orig_val__1149);
}});
var ret__12698__auto___1168 = (function (){
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
cljs.core.match.match = (function cljs$core$match$match(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1169 = arguments.length;
var i__12667__auto___1170 = (0);
while(true){
if((i__12667__auto___1170 < len__12666__auto___1169)){
args__12669__auto__.push((arguments[i__12667__auto___1170]));

var G__1171 = (i__12667__auto___1170 + (1));
i__12667__auto___1170 = G__1171;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1155 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1158){
var vec__1159 = p__1158;
var c = cljs.core.nth.call(null,vec__1159,(0),null);
var a = cljs.core.nth.call(null,vec__1159,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1155,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1155,(1),null);
var _STAR_line_STAR__orig_val__1162 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1163 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1164 = cljs.core.match._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__1165 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1166 = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1167 = cljs.core.atom.call(null,false);
(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1165);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1166);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1167);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1164);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1163);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1162);
}}));

(cljs.core.match.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.match.cljs$lang$applyTo = (function (seq1151){
var G__1152 = cljs.core.first.call(null,seq1151);
var seq1151__$1 = cljs.core.next.call(null,seq1151);
var G__1153 = cljs.core.first.call(null,seq1151__$1);
var seq1151__$2 = cljs.core.next.call(null,seq1151__$1);
var G__1154 = cljs.core.first.call(null,seq1151__$2);
var seq1151__$3 = cljs.core.next.call(null,seq1151__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1152,G__1153,G__1154,seq1151__$3);
}));

return null;
})()
;
(cljs.core.match.match.cljs$lang$macro = true);

var ret__12698__auto___1185 = (function (){
cljs.core.match.matchv = (function cljs$core$match$matchv(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1186 = arguments.length;
var i__12667__auto___1187 = (0);
while(true){
if((i__12667__auto___1187 < len__12666__auto___1186)){
args__12669__auto__.push((arguments[i__12667__auto___1187]));

var G__1188 = (i__12667__auto___1187 + (1));
i__12667__auto___1187 = G__1188;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__1177 = cljs.core.match._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__1178 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1179 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1180 = cljs.core.match._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__1181 = type;
var _STAR_line_STAR__temp_val__1182 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1183 = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1184 = cljs.core.atom.call(null,false);
(cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__1181);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1182);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1183);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1184);

try{return cljs.core.match.clj_form.call(null,vars,clauses);
}finally {(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1180);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1179);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1178);

(cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__1177);
}}));

(cljs.core.match.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match.matchv.cljs$lang$applyTo = (function (seq1172){
var G__1173 = cljs.core.first.call(null,seq1172);
var seq1172__$1 = cljs.core.next.call(null,seq1172);
var G__1174 = cljs.core.first.call(null,seq1172__$1);
var seq1172__$2 = cljs.core.next.call(null,seq1172__$1);
var G__1175 = cljs.core.first.call(null,seq1172__$2);
var seq1172__$3 = cljs.core.next.call(null,seq1172__$2);
var G__1176 = cljs.core.first.call(null,seq1172__$3);
var seq1172__$4 = cljs.core.next.call(null,seq1172__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1173,G__1174,G__1175,G__1176,seq1172__$4);
}));

return null;
})()
;
(cljs.core.match.matchv.cljs$lang$macro = true);

var ret__12698__auto___1208 = (function (){
/**
 * Same as match but supports IMatchLookup when
 *   matching maps.
 */
cljs.core.match.matchm = (function cljs$core$match$matchm(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1209 = arguments.length;
var i__12667__auto___1210 = (0);
while(true){
if((i__12667__auto___1210 < len__12666__auto___1209)){
args__12669__auto__.push((arguments[i__12667__auto___1210]));

var G__1211 = (i__12667__auto___1210 + (1));
i__12667__auto___1210 = G__1211;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1193 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1196){
var vec__1197 = p__1196;
var c = cljs.core.nth.call(null,vec__1197,(0),null);
var a = cljs.core.nth.call(null,vec__1197,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1193,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1193,(1),null);
var _STAR_match_lookup_STAR__orig_val__1200 = cljs.core.match._STAR_match_lookup_STAR_;
var _STAR_line_STAR__orig_val__1201 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1202 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1203 = cljs.core.match._STAR_warned_STAR_;
var _STAR_match_lookup_STAR__temp_val__1204 = true;
var _STAR_line_STAR__temp_val__1205 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1206 = cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1207 = cljs.core.atom.call(null,false);
(cljs.core.match._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__temp_val__1204);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1205);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1206);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1207);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1203);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1202);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1201);

(cljs.core.match._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__orig_val__1200);
}}));

(cljs.core.match.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.matchm.cljs$lang$applyTo = (function (seq1189){
var G__1190 = cljs.core.first.call(null,seq1189);
var seq1189__$1 = cljs.core.next.call(null,seq1189);
var G__1191 = cljs.core.first.call(null,seq1189__$1);
var seq1189__$2 = cljs.core.next.call(null,seq1189__$1);
var G__1192 = cljs.core.first.call(null,seq1189__$2);
var seq1189__$3 = cljs.core.next.call(null,seq1189__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1190,G__1191,G__1192,seq1189__$3);
}));

return null;
})()
;
(cljs.core.match.matchm.cljs$lang$macro = true);

var ret__12698__auto___1216 = (function (){
cljs.core.match.match_let = (function cljs$core$match$match_let(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1217 = arguments.length;
var i__12667__auto___1218 = (0);
while(true){
if((i__12667__auto___1218 < len__12666__auto___1217)){
args__12669__auto__.push((arguments[i__12667__auto___1218]));

var G__1219 = (i__12667__auto___1218 + (1));
i__12667__auto___1218 = G__1219;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_))),null,(1),null)),body)),null,(1),null))));
}));

(cljs.core.match.match_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.match_let.cljs$lang$applyTo = (function (seq1212){
var G__1213 = cljs.core.first.call(null,seq1212);
var seq1212__$1 = cljs.core.next.call(null,seq1212);
var G__1214 = cljs.core.first.call(null,seq1212__$1);
var seq1212__$2 = cljs.core.next.call(null,seq1212__$1);
var G__1215 = cljs.core.first.call(null,seq1212__$2);
var seq1212__$3 = cljs.core.next.call(null,seq1212__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1213,G__1214,G__1215,seq1212__$3);
}));

return null;
})()
;
(cljs.core.match.match_let.cljs$lang$macro = true);

var ret__12698__auto___1220 = cljs.core.match.asets = (function cljs$core$match$asets(_AMPERSAND_form,_AMPERSAND_env,a,vs){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),cljs.core.map.call(null,(function (a__$1,b,c){
return cljs.core.concat.call(null,a__$1,(new cljs.core.List(null,b,(new cljs.core.List(null,c,null,(1),null)),(2),null)));
}),cljs.core.repeat.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),cljs.core.range.call(null,cljs.core.count.call(null,vs)),vs),(new cljs.core.List(null,a,null,(1),null))));
});
(cljs.core.match.asets.cljs$lang$macro = true);

var ret__12698__auto___1238 = (function (){
cljs.core.match.match = (function cljs$core$match$match(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1239 = arguments.length;
var i__12667__auto___1240 = (0);
while(true){
if((i__12667__auto___1240 < len__12666__auto___1239)){
args__12669__auto__.push((arguments[i__12667__auto___1240]));

var G__1241 = (i__12667__auto___1240 + (1));
i__12667__auto___1240 = G__1241;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1225 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1228){
var vec__1229 = p__1228;
var c = cljs.core.nth.call(null,vec__1229,(0),null);
var a = cljs.core.nth.call(null,vec__1229,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1225,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1225,(1),null);
var _STAR_line_STAR__orig_val__1232 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1233 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1234 = cljs.core.match._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__1235 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1236 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1237 = cljs.core.atom.call(null,false);
(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1235);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1236);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1237);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1234);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1233);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1232);
}}));

(cljs.core.match.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.match.cljs$lang$applyTo = (function (seq1221){
var G__1222 = cljs.core.first.call(null,seq1221);
var seq1221__$1 = cljs.core.next.call(null,seq1221);
var G__1223 = cljs.core.first.call(null,seq1221__$1);
var seq1221__$2 = cljs.core.next.call(null,seq1221__$1);
var G__1224 = cljs.core.first.call(null,seq1221__$2);
var seq1221__$3 = cljs.core.next.call(null,seq1221__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1222,G__1223,G__1224,seq1221__$3);
}));

return null;
})()
;
(cljs.core.match.match.cljs$lang$macro = true);

var ret__12698__auto___1261 = (function (){
cljs.core.match.match_STAR_ = (function cljs$core$match$match_STAR_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1262 = arguments.length;
var i__12667__auto___1263 = (0);
while(true){
if((i__12667__auto___1263 < len__12666__auto___1262)){
args__12669__auto__.push((arguments[i__12667__auto___1263]));

var G__1264 = (i__12667__auto___1263 + (1));
i__12667__auto___1263 = G__1264;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.match_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1246 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1249){
var vec__1250 = p__1249;
var c = cljs.core.nth.call(null,vec__1250,(0),null);
var a = cljs.core.nth.call(null,vec__1250,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1246,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1246,(1),null);
var _STAR_line_STAR__orig_val__1253 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1254 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1255 = cljs.core.match._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__1256 = cljs.core.match._STAR_no_backtrack_STAR_;
var _STAR_line_STAR__temp_val__1257 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1258 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1259 = cljs.core.atom.call(null,false);
var _STAR_no_backtrack_STAR__temp_val__1260 = true;
(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1257);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1258);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1259);

(cljs.core.match._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__1260);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__1256);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1255);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1254);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1253);
}}));

(cljs.core.match.match_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.match_STAR_.cljs$lang$applyTo = (function (seq1242){
var G__1243 = cljs.core.first.call(null,seq1242);
var seq1242__$1 = cljs.core.next.call(null,seq1242);
var G__1244 = cljs.core.first.call(null,seq1242__$1);
var seq1242__$2 = cljs.core.next.call(null,seq1242__$1);
var G__1245 = cljs.core.first.call(null,seq1242__$2);
var seq1242__$3 = cljs.core.next.call(null,seq1242__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1243,G__1244,G__1245,seq1242__$3);
}));

return null;
})()
;
(cljs.core.match.match_STAR_.cljs$lang$macro = true);

var ret__12698__auto___1278 = (function (){
cljs.core.match.matchv = (function cljs$core$match$matchv(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1279 = arguments.length;
var i__12667__auto___1280 = (0);
while(true){
if((i__12667__auto___1280 < len__12666__auto___1279)){
args__12669__auto__.push((arguments[i__12667__auto___1280]));

var G__1281 = (i__12667__auto___1280 + (1));
i__12667__auto___1280 = G__1281;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(cljs.core.match.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__1270 = cljs.core.match._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__1271 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1272 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1273 = cljs.core.match._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__1274 = type;
var _STAR_line_STAR__temp_val__1275 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1276 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1277 = cljs.core.atom.call(null,false);
(cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__1274);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1275);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1276);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1277);

try{return cljs.core.match.clj_form.call(null,vars,clauses);
}finally {(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1273);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1272);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1271);

(cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__1270);
}}));

(cljs.core.match.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match.matchv.cljs$lang$applyTo = (function (seq1265){
var G__1266 = cljs.core.first.call(null,seq1265);
var seq1265__$1 = cljs.core.next.call(null,seq1265);
var G__1267 = cljs.core.first.call(null,seq1265__$1);
var seq1265__$2 = cljs.core.next.call(null,seq1265__$1);
var G__1268 = cljs.core.first.call(null,seq1265__$2);
var seq1265__$3 = cljs.core.next.call(null,seq1265__$2);
var G__1269 = cljs.core.first.call(null,seq1265__$3);
var seq1265__$4 = cljs.core.next.call(null,seq1265__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1266,G__1267,G__1268,G__1269,seq1265__$4);
}));

return null;
})()
;
(cljs.core.match.matchv.cljs$lang$macro = true);

var ret__12698__auto___1297 = (function (){
cljs.core.match.matchv_STAR_ = (function cljs$core$match$matchv_STAR_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1298 = arguments.length;
var i__12667__auto___1299 = (0);
while(true){
if((i__12667__auto___1299 < len__12666__auto___1298)){
args__12669__auto__.push((arguments[i__12667__auto___1299]));

var G__1300 = (i__12667__auto___1299 + (1));
i__12667__auto___1299 = G__1300;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return cljs.core.match.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(cljs.core.match.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__1287 = cljs.core.match._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__1288 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1289 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1290 = cljs.core.match._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__1291 = cljs.core.match._STAR_no_backtrack_STAR_;
var _STAR_vector_type_STAR__temp_val__1292 = type;
var _STAR_line_STAR__temp_val__1293 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1294 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1295 = cljs.core.atom.call(null,false);
var _STAR_no_backtrack_STAR__temp_val__1296 = true;
(cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__1292);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1293);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1294);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1295);

(cljs.core.match._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__1296);

try{return cljs.core.match.clj_form.call(null,vars,clauses);
}finally {(cljs.core.match._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__1291);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1290);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1289);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1288);

(cljs.core.match._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__1287);
}}));

(cljs.core.match.matchv_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match.matchv_STAR_.cljs$lang$applyTo = (function (seq1282){
var G__1283 = cljs.core.first.call(null,seq1282);
var seq1282__$1 = cljs.core.next.call(null,seq1282);
var G__1284 = cljs.core.first.call(null,seq1282__$1);
var seq1282__$2 = cljs.core.next.call(null,seq1282__$1);
var G__1285 = cljs.core.first.call(null,seq1282__$2);
var seq1282__$3 = cljs.core.next.call(null,seq1282__$2);
var G__1286 = cljs.core.first.call(null,seq1282__$3);
var seq1282__$4 = cljs.core.next.call(null,seq1282__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1283,G__1284,G__1285,G__1286,seq1282__$4);
}));

return null;
})()
;
(cljs.core.match.matchv_STAR_.cljs$lang$macro = true);

var ret__12698__auto___1318 = (function (){
cljs.core.match.matchm = (function cljs$core$match$matchm(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1319 = arguments.length;
var i__12667__auto___1320 = (0);
while(true){
if((i__12667__auto___1320 < len__12666__auto___1319)){
args__12669__auto__.push((arguments[i__12667__auto___1320]));

var G__1321 = (i__12667__auto___1320 + (1));
i__12667__auto___1320 = G__1321;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__1305 = ((cljs.core.vector_QMARK_.call(null,vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.call(null,(function (p__1308){
var vec__1309 = p__1308;
var c = cljs.core.nth.call(null,vec__1309,(0),null);
var a = cljs.core.nth.call(null,vec__1309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.call(null,c,new cljs.core.Keyword(null,"else","else",(-1508377146))))?(new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.partition.call(null,(2),clauses))], null));
var vars__$1 = cljs.core.nth.call(null,vec__1305,(0),null);
var clauses__$1 = cljs.core.nth.call(null,vec__1305,(1),null);
var _STAR_line_STAR__orig_val__1312 = cljs.core.match._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__1313 = cljs.core.match._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__1314 = cljs.core.match._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__1315 = new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__1316 = cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"locals","locals",(535295783)).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",(-1201019570),null));
var _STAR_warned_STAR__temp_val__1317 = cljs.core.atom.call(null,false);
(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__temp_val__1315);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__1316);

(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__1317);

try{return cljs.core.match.clj_form.call(null,vars__$1,clauses__$1);
}finally {(cljs.core.match._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__1314);

(cljs.core.match._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__1313);

(cljs.core.match._STAR_line_STAR_ = _STAR_line_STAR__orig_val__1312);
}}));

(cljs.core.match.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.matchm.cljs$lang$applyTo = (function (seq1301){
var G__1302 = cljs.core.first.call(null,seq1301);
var seq1301__$1 = cljs.core.next.call(null,seq1301);
var G__1303 = cljs.core.first.call(null,seq1301__$1);
var seq1301__$2 = cljs.core.next.call(null,seq1301__$1);
var G__1304 = cljs.core.first.call(null,seq1301__$2);
var seq1301__$3 = cljs.core.next.call(null,seq1301__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1302,G__1303,G__1304,seq1301__$3);
}));

return null;
})()
;
(cljs.core.match.matchm.cljs$lang$macro = true);

var ret__12698__auto___1326 = (function (){
cljs.core.match.match_let = (function cljs$core$match$match_let(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1327 = arguments.length;
var i__12667__auto___1328 = (0);
while(true){
if((i__12667__auto___1328 < len__12666__auto___1327)){
args__12669__auto__.push((arguments[i__12667__auto___1328]));

var G__1329 = (i__12667__auto___1328 + (1));
i__12667__auto___1328 = G__1329;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",(-1807915977),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_))),null,(1),null)),body)),null,(1),null))));
}));

(cljs.core.match.match_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.match_let.cljs$lang$applyTo = (function (seq1322){
var G__1323 = cljs.core.first.call(null,seq1322);
var seq1322__$1 = cljs.core.next.call(null,seq1322);
var G__1324 = cljs.core.first.call(null,seq1322__$1);
var seq1322__$2 = cljs.core.next.call(null,seq1322__$1);
var G__1325 = cljs.core.first.call(null,seq1322__$2);
var seq1322__$3 = cljs.core.next.call(null,seq1322__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1323,G__1324,G__1325,seq1322__$3);
}));

return null;
})()
;
(cljs.core.match.match_let.cljs$lang$macro = true);

var ret__12698__auto___1334 = (function (){
cljs.core.match.match_let_STAR_ = (function cljs$core$match$match_let_STAR_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___1335 = arguments.length;
var i__12667__auto___1336 = (0);
while(true){
if((i__12667__auto___1336 < len__12666__auto___1335)){
args__12669__auto__.push((arguments[i__12667__auto___1336]));

var G__1337 = (i__12667__auto___1336 + (1));
i__12667__auto___1336 = G__1337;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.match.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.match.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.call(null,(2),bindings);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match*","cljs.core.match/match*",(-529932879),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,bindvars_SHARP_))),null,(1),null)),body)),null,(1),null))));
}));

(cljs.core.match.match_let_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match.match_let_STAR_.cljs$lang$applyTo = (function (seq1330){
var G__1331 = cljs.core.first.call(null,seq1330);
var seq1330__$1 = cljs.core.next.call(null,seq1330);
var G__1332 = cljs.core.first.call(null,seq1330__$1);
var seq1330__$2 = cljs.core.next.call(null,seq1330__$1);
var G__1333 = cljs.core.first.call(null,seq1330__$2);
var seq1330__$3 = cljs.core.next.call(null,seq1330__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__1331,G__1332,G__1333,seq1330__$3);
}));

return null;
})()
;
(cljs.core.match.match_let_STAR_.cljs$lang$macro = true);


//# sourceURL=cljs/core/match.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL21hdGNoLmpzIiwic291cmNlcyI6WyJtYXRjaC5jbGpzIl0sImxpbmVDb3VudCI6NTc3MCwibWFwcGluZ3MiOiI7QUFtREE7OztBQUVFQSwyQ0FBZSx5QkFBQSx6QkFBQ0M7QUFFbEIsQUFDQSxxQ0FBQSxyQ0FBc0JDO0FBQ3RCLEFBRUE7OzsyQ0FBQSwzQ0FFRUM7QUFFRjs7Ozs7MENBQUEsMUNBSUVDO0FBRUY7Ozs0Q0FBQSw1Q0FFRUM7QUFFRjs7OzJDQUFBLDNDQUVFQztBQUVGOzs7QUFDRUMsNEJBQ21CLEtBQUFDLE1BQUE7QUFFckIsaUNBQUEsakNBQU1JO0FBQU4sQUFBQSxPQUFBSCw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSw0REFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQSxpR0FBQSxLQUFBLElBQUE7O0FBTUEsZ0NBQUEsaENBQU1FO0FBQU4sQUFBQSxBQUFBOztBQU1BLDhDQUFBLDlDQUFzQkM7QUFDdEIsbUNBQUEsbkNBQXNCQztBQUV0Qix1QkFBQSx2QkFBTUMsc0RBQU1DO0FBQVosQUFDRSxHQUFNLHdCQUFBLEFBQUFDLHhCQUFDQyxrREFBS0M7QUFBWixBQUNFLElBQUFDLHlDQUFzQ0U7SUFBdENELHlDQUFpREU7QUFBakQsQUFBQSxrQ0FBQUYsakNBQXNDQzs7QUFBdEMsSUFBQSxBQUNFLDRCQUFBLDVCQUFDRSx1Q0FDQyx1RUFBQSx3RkFBQSxsSEFBS0MsZ0ZBQWVDLGdEQUNwQlY7VUFISixBQUFBLGtDQUFBSSxqQ0FBc0NFOztBQUl0QywwRUFBQSxuRUFBQ0ssZ0NBQU9SOztBQUxWOzs7QUE0QkYsQUFBQSxDQUFBLEFBQUEsc0VBQUFTLHRFQUFnREM7O0FBQWhELENBQUEsQUFBQSxBQUFnREEsb0ZBRTlDLFdBQVNDLE1BQUtDLEVBQUVDO0FBQWhCLEFBQUEsZ0JBQUEsWkFBU0Y7QUFBVCxBQUNFLE9BQXNCRyw0QkFBU0gsVUFBS0MsRUFBRUM7O0FBTzFDLEFBQUEsOEJB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O0FBNXhCbEQsQUFBQSxJQUFBckYsc0JBQUE7QUFBQSxBQUFBLE9BQUFBLHlEQUFBMDJCLFFBQUFDLFFBQUFDLFFBQUFIOzs7QUFBQTs7O0FBQUEsQUFBQSxDQUFBLGtEQUFBLGxEQUFVRDs7QUFBVjFQIiwibmFtZXMiOlsiY2xqcy5jb3JlLm1hdGNoLypzeW50YXgtY2hlY2sqIiwiY2xqcy5jb3JlL2F0b20iLCJjbGpzLmNvcmUubWF0Y2gvKmxvY2FscyoiLCJjbGpzLmNvcmUubWF0Y2gvKm1hdGNoLWxvb2t1cCoiLCJjbGpzLmNvcmUubWF0Y2gvKnZlY3Rvci10eXBlKiIsImNsanMuY29yZS5tYXRjaC8qcmVjdXItcHJlc2VudCoiLCJjbGpzLmNvcmUubWF0Y2gvKm5vLWJhY2t0cmFjayoiLCJjbGpzLmNvcmUubWF0Y2gvYmFja3RyYWNrIiwianMvRXJyb3IiLCJjbGpzLmNvcmUvc2VxdWVuY2UiLCJjbGpzLmNvcmUvY29uY2F0IiwiY2xqcy5jb3JlL0xpc3QiLCJjbGpzLmNvcmUubWF0Y2gvYmFja3RyYWNrLWV4cHIiLCJjbGpzLmNvcmUubWF0Y2gvYmFja3RyYWNrLXN5bSIsImNsanMuY29yZS5tYXRjaC8qYmFja3RyYWNrLXN0YWNrKiIsImNsanMuY29yZS5tYXRjaC8qcm9vdCoiLCJjbGpzLmNvcmUubWF0Y2gvd2FybiIsIm1zZyIsImNsanMuY29yZS9kZXJlZiIsImNsanMuY29yZS9ub3QiLCJjbGpzLmNvcmUubWF0Y2gvKndhcm5lZCoiLCIqcHJpbnQtZm4qLW9yaWctdmFsX182ODAiLCIqcHJpbnQtZm4qLXRlbXAtdmFsX182ODEiLCJjbGpzLmNvcmUvKnByaW50LWZuKiIsImNsanMuY29yZS8qcHJpbnQtZXJyLWZuKiIsImNsanMuY29yZS9wcmludGxuIiwiY2xqcy5jb3JlLypucyoiLCJjbGpzLmNvcmUubWF0Y2gvKmxpbmUqIiwiY2xqcy5jb3JlL3Jlc2V0ISIsImNsanMuY29yZS9QUk9UT0NPTF9TRU5USU5FTCIsImNsanMuY29yZS9JTG9va3VwIiwidGhpcyIsImsiLCJub3QtZm91bmQiLCJjbGpzLmNvcmUvLWxvb2t1cCIsInZhcl9hcmdzIiwiYXJnc19fMTI2NjlfX2F1dG9fXyIsImxlbl9fMTI2NjZfX2F1dG9fXyIsImlfXzEyNjY3X19hdXRvX18iLCJhcmdzZXFfXzEyNjcwX19hdXRvX18iLCJjbGpzLmNvcmUubWF0Y2gvdmFsLWF0LWV4cHIiLCJzZXE2ODQiLCJzZWxmX18xMjY1OV9fYXV0b19fIiwiY2xqcy5jb3JlL3NlcSIsImFyZ3MiLCJjbGpzLmNvcmUubWF0Y2gvdmVjdG9yLXR5cGUiLCJzZXE2ODgiLCJHX182ODkiLCJzZWxmX18xMjY1OF9fYXV0b19fIiwidCIsInIiLCJqcy9jbGpzIiwianMvY2xqcy5jb3JlIiwianMvY2xqcy5jb3JlLm1hdGNoIiwianMvY2xqcy5jb3JlLm1hdGNoLmNoZWNrLXNpemU/IiwibWV0aG9kLXRhYmxlX18xMjQ5NV9fYXV0b19fIiwicHJlZmVyLXRhYmxlX18xMjQ5Nl9fYXV0b19fIiwibWV0aG9kLWNhY2hlX18xMjQ5N19fYXV0b19fIiwiY2FjaGVkLWhpZXJhcmNoeV9fMTI0OThfX2F1dG9fXyIsImhpZXJhcmNoeV9fMTI0OTlfX2F1dG9fXyIsImNsanMuY29yZS9nZXQiLCJjbGpzLmNvcmUvTXVsdGlGbiIsImNsanMuY29yZS9zeW1ib2wiLCJjbGpzLmNvcmUubWF0Y2gvY2hlY2stc2l6ZT8iLCJjbGpzLmNvcmUvaWRlbnRpdHkiLCJqcy9jbGpzLmNvcmUubWF0Y2gudGFnIiwiY2xqcy5jb3JlLm1hdGNoL3RhZyIsImpzL2NsanMuY29yZS5tYXRjaC50ZXN0LWlubGluZSIsImNsanMuY29yZS5tYXRjaC90ZXN0LWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaC50ZXN0LXdpdGgtc2l6ZS1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gvdGVzdC13aXRoLXNpemUtaW5saW5lIiwianMvY2xqcy5jb3JlLm1hdGNoLnRlc3Qtd2l0aC1taW4tc2l6ZS1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gvdGVzdC13aXRoLW1pbi1zaXplLWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaC5jb3VudC1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gvY291bnQtaW5saW5lIiwianMvY2xqcy5jb3JlLm1hdGNoLm50aC1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gvbnRoLWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaC5udGgtb2Zmc2V0LWlubGluZSIsImNsanMuY29yZS5tYXRjaC9udGgtb2Zmc2V0LWlubGluZSIsImpzL2NsanMuY29yZS5tYXRjaC5zdWJ2ZWMtaW5saW5lIiwiY2xqcy5jb3JlLm1hdGNoL3N1YnZlYy1pbmxpbmUiLCJqcy9jbGpzLmNvcmUubWF0Y2gubnRobmV4dC1pbmxpbmUiLCJjbGpzLmNvcmUubWF0Y2gvbnRobmV4dC1pbmxpbmUiLCJjbGpzLmNvcmUvLWFkZC1tZXRob2QiLCJfIiwiY2xqcy5jb3JlL1BlcnNpc3RlbnRWZWN0b3IiLCJjbGpzLmNvcmUubWF0Y2gvd2l0aC10YWciLCJvY3IiLCJ0aGUtdGFnIiwiY2xqcy5jb3JlL3ZhcnktbWV0YSIsImNsanMuY29yZS9hc3NvYyIsImMiLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9TeW1ib2wiLCJzaXplIiwiaSIsIm9mZnNldCIsInN0YXJ0IiwiZW5kIiwibiIsIngiLCJjbGpzLmNvcmUvaW50byIsImNsanMuY29yZS9zdWJ2ZWMiLCJjbGpzLmNvcmUvY291bnQiLCJjbGpzLmNvcmUvbnRoIiwiY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scy9wcmVwZW5kIiwiY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scy9kcm9wLW50aCIsImNsanMuY29yZS9TdWJ2ZWMiLCJjbGpzLmNvcmUubWF0Y2gvY29uc3RydWN0b3I/IiwicCIsImNsanMuY29yZS5tYXRjaC93aWxkY2FyZC1wYXR0ZXJuPyIsImpzL2NsanMuY29yZS5tYXRjaC5ncm91cGFibGU/IiwiY2xqcy5jb3JlLm1hdGNoL2dyb3VwYWJsZT8iLCJhIiwiYiIsInNlbGZfXyIsImFyZ3M2OTQiLCJjbGpzLmNvcmUvYWNsb25lIiwidGhpc19fMTEzODVfX2F1dG9fXyIsIndyaXRlcl9fMTEzODZfX2F1dG9fXyIsIm9wdF9fMTEzODdfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJjbGpzLmNvcmUubWF0Y2gvUGF0dGVyblJvdyIsImNsanMuY29yZS5tYXRjaC8tPlBhdHRlcm5Sb3ciLCJwcyIsImFjdGlvbiIsImJpbmRpbmdzIiwib3RoZXIiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL3N3YXAiLCJ2IiwiY2xqcy5jb3JlL2ZpcnN0IiwidGVtcF9fOTM5NV9fYXV0b19fIiwibnBzIiwiY2xqcy5jb3JlL25leHQiLCJHX182OTUiLCJjbGpzLmNvcmUvS2V5d29yZCIsImNsanMuY29yZS9jb25qIiwiR19fNjk4IiwiY2xqcy5jb3JlLm1hdGNoL3BhdHRlcm4tcm93IiwiY2xqcy5jb3JlL3ZlY3Rvcj8iLCJjbGpzLmNvcmUubWF0Y2gvdXBkYXRlLXBhdHRlcm4iLCJwcm93IiwiY2xqcy5jb3JlLm1hdGNoL2FsbC13aWxkY2FyZHM/IiwiY2xqcy5jb3JlL2V2ZXJ5PyIsImNsanMuY29yZS5tYXRjaC9kcm9wLW50aC1iaW5kIiwiYmluZC1leHByIiwiY2xqcy5jb3JlLm1hdGNoL2xlYWYtYmluZC1leHByIiwiYXMiLCJjbGpzLmNvcmUvbWV0YSIsIm9yX18xMDExNl9fYXV0b19fIiwiY2xqcy5jb3JlLm1hdGNoL25hbWVkLXdpbGRjYXJkLXBhdHRlcm4/IiwidGhpc19fMTE0NThfX2F1dG9fXyIsImtfXzExNDU5X19hdXRvX18iLCJ0aGlzX18xMTQ2MF9fYXV0b19fIiwiazcwMSIsImVsc2VfXzExNDYxX19hdXRvX18iLCJHX183MDUiLCJ2YWx1ZSIsIl9fZXh0bWFwIiwidGhpc19fMTE0ODNfX2F1dG9fXyIsImZfXzExNDg0X19hdXRvX18iLCJpbml0X18xMTQ4NV9fYXV0b19fIiwiY2xqcy5jb3JlL3JlZHVjZSIsInJldF9fMTE0ODZfX2F1dG9fXyIsInBfXzcxMCIsInZlY19fNzExIiwia19fMTE0ODdfX2F1dG9fXyIsInZfXzExNDg4X19hdXRvX18iLCJ0aGlzX18xMTQ3OF9fYXV0b19fIiwid3JpdGVyX18xMTQ3OV9fYXV0b19fIiwib3B0c19fMTE0ODBfX2F1dG9fXyIsInByLXBhaXJfXzExNDgxX19hdXRvX18iLCJrZXl2YWxfXzExNDgyX19hdXRvX18iLCJjbGpzLmNvcmUvcHItc2VxdWVudGlhbC13cml0ZXIiLCJHX183MDAiLCJjbGpzLmNvcmUvUmVjb3JkSXRlciIsImNsanMuY29yZS8taXRlcmF0b3IiLCJjbGpzLmNvcmUvbmlsLWl0ZXIiLCJ0aGlzX18xMTQ1Nl9fYXV0b19fIiwiX19tZXRhIiwidGhpc19fMTE0NDlfX2F1dG9fXyIsIl9faGFzaCIsInRoaXNfXzExNDYyX19hdXRvX18iLCJ0aGlzX18xMTQ1MF9fYXV0b19fIiwiaF9fMTA4ODhfX2F1dG9fXyIsImNvbGxfXzExNDUxX19hdXRvX18iLCJjbGpzLmNvcmUvaGFzaC11bm9yZGVyZWQtY29sbCIsInRoaXM3MDIiLCJvdGhlcjcwMyIsInRoaXNfXzExNDczX19hdXRvX18iLCJrX18xMTQ3NF9fYXV0b19fIiwiY2xqcy5jb3JlL2NvbnRhaW5zPyIsImNsanMuY29yZS9kaXNzb2MiLCJjbGpzLmNvcmUvLXdpdGgtbWV0YSIsImNsanMuY29yZS9ub3QtZW1wdHkiLCJ0aGlzX18xMTQ3MV9fYXV0b19fIiwia19fMTE0NzJfX2F1dG9fXyIsInByZWRfXzcxNCIsImNsanMuY29yZS9rZXl3b3JkLWlkZW50aWNhbD8iLCJleHByX183MTUiLCJ0aGlzX18xMTQ3Nl9fYXV0b19fIiwiY2xqcy5jb3JlL01hcEVudHJ5IiwidGhpc19fMTE0NTdfX2F1dG9fXyIsInRoaXNfXzExNDYzX19hdXRvX18iLCJlbnRyeV9fMTE0NjRfX2F1dG9fXyIsImNsanMuY29yZS8tbnRoIiwiY2xqcy5jb3JlLy1jb25qIiwiY2xqcy5jb3JlLm1hdGNoL0xlYWZOb2RlIiwidGhpc19fMTE1NDlfX2F1dG9fXyIsIndyaXRlcl9fMTE1NTBfX2F1dG9fXyIsIkdfXzcwNCIsImV4dG1hcF9fMTE1NDVfX2F1dG9fXyIsIkdfXzcxNyIsImNsanMuY29yZS9yZWNvcmQ/IiwiY2xqcy5jb3JlLm1hdGNoLy0+TGVhZk5vZGUiLCJjbGpzLmNvcmUubWF0Y2gvbWFwLT5MZWFmTm9kZSIsImNsanMuY29yZS9lbXB0eT8iLCJjbGpzLmNvcmUvdmVjIiwiY2xqcy5jb3JlL3JlbW92ZSIsInBfXzcwNiIsInZlY19fNzA3Iiwic3ltIiwiY2xqcy5jb3JlL2FwcGx5IiwiR19fNzIwIiwiY2xqcy5jb3JlLm1hdGNoL2xlYWYtbm9kZSIsImpzL2NsanMuY29yZS5tYXRjaC5sZWFmLWJpbmQtZXhwciIsIm0iLCJrNzIzIiwiR19fNzI3IiwicF9fNzI4IiwidmVjX183MjkiLCJHX183MjIiLCJ0aGlzNzI0Iiwib3RoZXI3MjUiLCJwcmVkX183MzIiLCJleHByX183MzMiLCJjbGpzLmNvcmUubWF0Y2gvRmFpbE5vZGUiLCJHX183MjYiLCJHX183MzUiLCJjbGpzLmNvcmUubWF0Y2gvLT5GYWlsTm9kZSIsImNsanMuY29yZS5tYXRjaC9tYXAtPkZhaWxOb2RlIiwiY2xqcy5jb3JlLm1hdGNoL2ZhaWwtbm9kZSIsIms3MzgiLCJHX183NDIiLCJub2RlIiwicF9fNzQzIiwidmVjX183NDQiLCJHX183MzciLCJ0aGlzNzM5Iiwib3RoZXI3NDAiLCJwcmVkX183NDciLCJleHByX183NDgiLCJjbGpzLmNvcmUubWF0Y2gvQmluZE5vZGUiLCJHX183NDEiLCJHX183NTAiLCJjbGpzLmNvcmUubWF0Y2gvLT5CaW5kTm9kZSIsImNsanMuY29yZS5tYXRjaC9tYXAtPkJpbmROb2RlIiwiY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scy9uLXRvLWNsaiIsImNsanMuY29yZS5tYXRjaC9iaW5kLW5vZGUiLCJjbGpzLmNvcmUubWF0Y2gvZGFnLWNsYXVzZS10by1jbGoiLCJvY2N1cnJlbmNlIiwicGF0dGVybiIsInRlc3QiLCJjbGpzLmNvcmUvbmF0aXZlLXNhdGlzZmllcz8iLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL0lQYXR0ZXJuQ29tcGlsZSIsImNsanMuY29yZS5tYXRjaC5wcm90b2NvbHMvdG8tc291cmNlKiIsImNsanMuY29yZS5tYXRjaC90by1zb3VyY2UiLCJjbGpzLmNvcmUubWF0Y2gvY2F0Y2gtZXJyb3IiLCJzZXE3NTMiLCJib2R5IiwiZXJyLXN5bSIsIms3NTgiLCJHX183NjIiLCJjYXNlcyIsImRlZmF1bHQiLCJwX183NjMiLCJ2ZWNfXzc2NCIsIkdfXzc1NyIsInRoaXM3NTkiLCJvdGhlcjc2MCIsInByZWRfXzc2NyIsImV4cHJfXzc2OCIsImNsanMuY29yZS5tYXRjaC9Td2l0Y2hOb2RlIiwiR19fNzYxIiwiR19fNzcwIiwiY2xqcy5jb3JlLm1hdGNoLy0+U3dpdGNoTm9kZSIsImNsanMuY29yZS5tYXRjaC9tYXAtPlN3aXRjaE5vZGUiLCJjbGF1c2VzIiwiY2xqcy5jb3JlL2RvYWxsIiwiY2xqcy5jb3JlL21hcGNhdCIsImNsanMuY29yZS9wYXJ0aWFsIiwiY29uZC1leHByIiwiY2xqcy5jb3JlLm1hdGNoL3N3aXRjaC1ub2RlIiwiY2xqcy5jb3JlL3NlcXVlbnRpYWw/IiwiY2xqcy5jb3JlLm1hdGNoL2ZpcnN0LWNvbHVtbj8iLCJjbGpzLmNvcmUubWF0Y2gvZW1wdHktcm93PyIsInJvdyIsImNsanMuY29yZS5tYXRjaC9zY29yZS1jb2x1bW4iLCJjb2wiLCJjbGpzLmNvcmUvKyIsInBfXzc3MiIsIm1hcF9fNzczIiwiY2xqcy5jb3JlL2hhc2gtbWFwIiwiY2xqcy5jb3JlLm1hdGNoL3dpZHRoIiwicm93cyIsInBfXzc3NSIsIm1hcF9fNzc2IiwiY2xqcy5jb3JlLm1hdGNoL2hlaWdodCIsImNsanMuY29yZS5tYXRjaC9kaW0iLCJwbSIsImNsanMuY29yZS5tYXRjaC9lbXB0eS1tYXRyaXg/IiwicF9fNzc4IiwibWFwX183NzkiLCJjbGpzLmNvcmUubWF0Y2gvY29sdW1uIiwicDFfXzIzIyIsImNsanMuY29yZS9tYXAiLCJwX183ODEiLCJtYXBfXzc4MiIsImNsanMuY29yZS5tYXRjaC9yb3ciLCJqIiwicF9fNzg0IiwibWFwX183ODUiLCJjbGpzLmNvcmUubWF0Y2gvcm93cyIsInBfXzc4NyIsIm1hcF9fNzg4IiwiY2xqcy5jb3JlLm1hdGNoL3BhdHRlcm4tYXQiLCJwX183OTAiLCJtYXBfXzc5MSIsImNsanMuY29yZS5tYXRjaC9hY3Rpb24tZm9yLXJvdyIsImNsanMuY29yZS5tYXRjaC9vY2N1cnJlbmNlcyIsImNsanMuY29yZS5tYXRjaC9yb3ctYmluZGluZ3MiLCJmIiwib2NycyIsImNsanMuY29yZS92ZWN0b3IiLCJjbGpzLmNvcmUvZmlsdGVyIiwicF9fNzk3IiwidmVjX183OTgiLCJwX183OTMiLCJ2ZWNfXzc5NCIsImNsanMuY29yZS5tYXRjaC9leGlzdGVudGlhbC1wYXR0ZXJuPyIsImNsanMuY29yZS5tYXRjaC93aWxkY2FyZC1vci1leGlzdGVudGlhbD8iLCJjbGpzLmNvcmUubWF0Y2gvY29uc3RydWN0b3JzLWFib3ZlPyIsImNsanMuY29yZS9jb21wIiwiY2xqcy5jb3JlL3Rha2UiLCJjbGpzLmNvcmUubWF0Y2gvcGF0dGVybi1zY29yZSIsImNsanMuY29yZS5tYXRjaC91c2VmdWwtbWF0cml4IiwiaXRlcl9fMTE5NjVfX2F1dG9fXyIsInNfXzgwMyIsImNsanMuY29yZS9MYXp5U2VxIiwidGVtcF9fOTUyMl9fYXV0b19fIiwieHNfXzk0ODRfX2F1dG9fXyIsIml0ZXJ5c19fMTE5NTNfX2F1dG9fXyIsInNfXzgwNSIsImNsanMuY29yZS9jaHVua2VkLXNlcT8iLCJjX18xMTk2MV9fYXV0b19fIiwic2l6ZV9fMTE5NjRfX2F1dG9fXyIsImJfXzgwNyIsImNsanMuY29yZS9jaHVuay1idWZmZXIiLCJpX184MDYiLCJjbGpzLmNvcmUvY2h1bmstYXBwZW5kIiwiY2xqcy5jb3JlL2NodW5rLWNvbnMiLCJjbGpzLmNvcmUvY2h1bmsiLCJpdGVyX184MDQiLCJjbGpzLmNvcmUvY2h1bmstcmVzdCIsImNsanMuY29yZS9jb25zIiwiY2xqcy5jb3JlL3Jlc3QiLCJmc19fMTE5NTRfX2F1dG9fXyIsIml0ZXJfXzgwMiIsImNsanMuY29yZS9yYW5nZSIsImNsanMuY29yZS9wYXJ0aXRpb24iLCJjbGpzLmNvcmUubWF0Y2gvbmVjZXNzYXJ5LWNvbHVtbiIsImNsanMuY29yZS9tYXAtaW5kZXhlZCIsInBfXzgxMCIsInBfXzgxMSIsInZlY19fODEyIiwidmVjX184MTUiLCJzY29yZSIsImN1cnIiLCJvY29sIiwib3Njb3JlIiwiY2FuZCIsImNsanMuY29yZS5tYXRjaC9zZWxlY3QiLCJHX184MTkiLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZSIsIm1hdHJpeCIsImNsanMuY29yZS9mZmlyc3QiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL0lTcGVjaWFsaXplTWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoLnByb3RvY29scy9zcGVjaWFsaXplLW1hdHJpeCIsImNsanMuY29yZS5tYXRjaC9kZWZhdWx0LXNwZWNpYWxpemUtbWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoL3BzZXVkby1wYXR0ZXJuPyIsImNsanMuY29yZS5tYXRjaC9wc2V1ZG8tcGF0dGVybnMiLCJjbGpzLmNvcmUubWF0Y2gvY29sdW1uLXNwbGl0dGVyIiwidmVjX184MjMiLCJ0b3AiLCJib3R0b20iLCJwMV9fMjQjIiwiY2xqcy5jb3JlL3NwbGl0LXdpdGgiLCJjbGpzLmNvcmUubWF0Y2gvcmV0dXJuLXNwbGl0IiwiUyIsIkQiLCJjbGpzLmNvcmUvcGVlayIsImNsanMuY29yZS5tYXRjaC9tYXRyaXgtc3BsaXR0ZXIiLCJjbGpzLmNvcmUubWF0Y2gvcGF0dGVybi1tYXRyaXgiLCJjbGpzLmNvcmUvZHJvcCIsImNsanMuY29yZS5tYXRjaC9ncm91cC1yb3dzIiwiY3MiLCJyZXMiLCJ2ZWNfXzgyNiIsImMnIiwiY2xqcy5jb3JlL3BvcCIsImNsanMuY29yZS5tYXRjaC9ub24tbG9jYWwtbGl0ZXJhbC1wYXR0ZXJuPyIsImFuZF9fMTAwOTFfX2F1dG9fXyIsImNsanMuY29yZS5tYXRjaC9saXRlcmFsLXBhdHRlcm4/IiwiY2xqcy5jb3JlLm1hdGNoL2xpdGVyYWwtY2FzZS1tYXRyaXgtc3BsaXR0ZXIiLCJscm93cyIsImxpdHMiLCJ2ZWNfXzgzMiIsInBfXzgzNSIsInZlY19fODM2IiwiY2xqcy5jb3JlLm1hdGNoL2RlZmF1bHQtY2FzZSIsImNsanMuY29yZS5tYXRjaC9jb21waWxlIiwiY2xqcy5jb3JlLm1hdGNoL2Nhc2VzIiwicF9fODQyIiwidmVjX184NDMiLCJjbGpzLmNvcmUubWF0Y2gvZXhwcmVzc2lvbj8iLCJjbGpzLmNvcmUubWF0Y2gvYmluZC12YXJpYWJsZXMiLCJjbGpzLmNvcmUvbm90PSIsImNsanMuY29yZS5tYXRjaC9yb290LWJpbmQtbm9kZSIsImNsanMuY29yZS9zb21lIiwiY2xqcy5jb3JlLm1hdGNoL2VtcHR5LXJvd3MtY2FzZSIsImNsanMuY29yZS5tYXRjaC9maXJzdC1yb3ctZW1wdHktY2FzZSIsImJzIiwiY2xqcy5jb3JlLm1hdGNoL2ZpcnN0LXJvdy13aWxkY2FyZHMtY2FzZSIsImNsanMuY29yZS5tYXRjaC9leHBhbmQtbWF0cml4IiwiY2xqcy5jb3JlLm1hdGNoL3NwbGl0LW1hdHJpeCIsImNsanMuY29yZS5tYXRjaC9maXJzdC1jb2x1bW4tY2hvc2VuLWNhc2UiLCJ2ZWNfXzg0NyIsImV4cGFuZGVkIiwic3BsaXQiLCJuZXctc3RhY2siLCJjbGpzLmNvcmUvbGFzdCIsIipiYWNrdHJhY2stc3RhY2sqLW9yaWctdmFsX184NTAiLCIqYmFja3RyYWNrLXN0YWNrKi10ZW1wLXZhbF9fODUxIiwiKmJhY2t0cmFjay1zdGFjayotb3JpZy12YWxfXzg1MiIsIipiYWNrdHJhY2stc3RhY2sqLXRlbXAtdmFsX184NTMiLCJjbGpzLmNvcmUubWF0Y2gvb3RoZXItY29sdW1uLWNob3Nlbi1jYXNlIiwiY2xqcy5jb3JlLm1hdGNoL2Nob29zZS1jb2x1bW4iLCJwX184NTQiLCJtYXBfXzg1NSIsIipyb290Ki1vcmlnLXZhbF9fODU3IiwiKnJvb3QqLXRlbXAtdmFsX184NTgiLCJrODYwIiwiR19fODY0IiwicF9fODY1IiwidmVjX184NjYiLCJHX184NTkiLCJ0aGlzODYxIiwib3RoZXI4NjIiLCJwcmVkX184NjkiLCJleHByX184NzAiLCJjbGpzLmNvcmUubWF0Y2gvUGF0dGVybk1hdHJpeCIsIkdfXzg2MyIsIkdfXzg3MiIsImNsanMuY29yZS5tYXRjaC8tPlBhdHRlcm5NYXRyaXgiLCJjbGpzLmNvcmUubWF0Y2gvbWFwLT5QYXR0ZXJuTWF0cml4IiwibnJvd3MiLCJwMV9fMjUjIiwiaWR4IiwicDFfXzI2IyIsImZvY3IiLCJwMV9fMjcjIiwibm9jcnMiLCJjbGpzLmNvcmUubWF0Y2gvV2lsZGNhcmRQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoLy0+V2lsZGNhcmRQYXR0ZXJuIiwibmFtZWQiLCJfbWV0YSIsIm5ldy1tZXRhIiwiR19fODc0IiwiR19fODc3IiwiY2xqcy5jb3JlLm1hdGNoL3dpbGRjYXJkLXBhdHRlcm4iLCJjbGpzLmNvcmUvZ2Vuc3ltIiwiY2xqcy5jb3JlLm1hdGNoL0xpdGVyYWxQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoLy0+TGl0ZXJhbFBhdHRlcm4iLCJsIiwiY2xqcy5jb3JlL3ByLXN0ciIsIkdfXzg3OSIsImNsanMuY29yZS5tYXRjaC9saXRlcmFsLXBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1yZXN0LXJvdyIsImNsanMuY29yZS5tYXRjaC9zZXEtcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1yZXN0LW1hdHJpeCIsImNsanMuY29yZS5tYXRjaC9zZXEtcGF0dGVybi1tYXRyaXgtcmVzdC1vY3JzIiwiY2xqcy5jb3JlLm1hdGNoL3NwZWNpYWxpemUtc2VxLXBhdHRlcm4tcm93IiwidmVjX184ODEiLCJoIiwidmVjX184ODQiLCJzZXFfXzg4NSIsImZpcnN0X184ODYiLCJjbGpzLmNvcmUubWF0Y2gvcmVzdC1wYXR0ZXJuPyIsImNsanMuY29yZS5tYXRjaC9zZXEtcGF0dGVybiIsImNsanMuY29yZS5tYXRjaC9zcGVjaWFsaXplLXNlcS1wYXR0ZXJuLW1hdHJpeCIsImNsanMuY29yZS5tYXRjaC9zZXEtcGF0dGVybi1tYXRyaXgtb2NycyIsInNlcS1zeW0iLCJzeW0tbWV0YSIsImhzeW0iLCJjbGpzLmNvcmUvbmFtZSIsImNsanMuY29yZS93aXRoLW1ldGEiLCJ0c3ltIiwiY2xqcy5jb3JlLm1hdGNoL1NlcVBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gvLT5TZXFQYXR0ZXJuIiwicyIsIkdfXzg4NyIsIms4OTAiLCJHX184OTQiLCJwX184OTUiLCJ2ZWNfXzg5NiIsIkdfXzg4OSIsInRoaXM4OTEiLCJvdGhlcjg5MiIsInByZWRfXzg5OSIsImV4cHJfXzkwMCIsImNsanMuY29yZS5tYXRjaC9SZXN0UGF0dGVybiIsIkdfXzg5MyIsIkdfXzkwMiIsImNsanMuY29yZS5tYXRjaC8tPlJlc3RQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoL21hcC0+UmVzdFBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gvcmVzdC1wYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoL3NwZWNpYWxpemUtbWFwLWtleS1wYXR0ZXJuLW1hdHJpeCIsInAxX18yOCMiLCJwMV9fMjkjIiwiazkwNSIsIkdfXzkwOSIsInBfXzkxMCIsInZlY19fOTExIiwiR19fOTA0IiwidGhpczkwNiIsIm90aGVyOTA3IiwicHJlZF9fOTE0IiwiZXhwcl9fOTE1IiwiY2xqcy5jb3JlLm1hdGNoL01hcEtleVBhdHRlcm4iLCJHX185MDgiLCJHX185MTciLCJjbGpzLmNvcmUubWF0Y2gvLT5NYXBLZXlQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoL21hcC0+TWFwS2V5UGF0dGVybiIsImNsanMuY29yZS5tYXRjaC9tYXAta2V5LXBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gvbWFwLWtleS1wYXR0ZXJuPyIsImNsanMuY29yZS5tYXRjaC9yb3cta2V5cyIsImVudiIsIm9ubHkiLCJjbGpzLmNvcmUvc2V0IiwiY2xqcy5jb3JlL2tleXMiLCJjbGpzLmNvcmUubWF0Y2gvZ2V0LWFsbC1rZXlzIiwicDFfXzMwIyIsImNsb2p1cmUuc2V0L3VuaW9uIiwiY2xqcy5jb3JlLm1hdGNoL3dyYXAtdmFsdWVzIiwicF9fOTE5IiwidmVjX185MjAiLCJwX185MjMiLCJtYXBfXzkyNCIsImNsanMuY29yZS5tYXRjaC9nZXQtb2NyLW1hcCIsImFsbC1rZXlzIiwid2MtbWFwIiwiY2xqcy5jb3JlLm1hdGNoL21hcC1wYXR0ZXJuPyIsImNsanMuY29yZS9tZXJnZSIsImNsanMuY29yZS96aXBtYXAiLCJjbGpzLmNvcmUvcmVwZWF0IiwicF9fOTI2IiwibWFwX185MjciLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS1tYXAtcGF0dGVybi1yb3ciLCJvbmx5PyIsIm9jci1tYXAiLCJjbGpzLmNvcmUubWF0Y2gvZ3VhcmQtcGF0dGVybiIsImNsanMuY29yZS9oYXNoLXNldCIsImNsanMuY29yZS9yZXZlcnNlIiwiY2xqcy5jb3JlLm1hdGNoL3NwZWNpYWxpemUtbWFwLXBhdHRlcm4tbWF0cml4IiwicDFfXzMxIyIsImNsanMuY29yZS5tYXRjaC9nZW4tbWFwLXBhdHRlcm4tb2NyIiwiY2xqcy5jb3JlLm1hdGNoL21hcC1wYXR0ZXJuLW1hdHJpeC1vY3Itc3ltIiwiY2xqcy5jb3JlL2dldC1pbiIsImNsanMuY29yZS5tYXRjaC9tYXAtcGF0dGVybi1tYXRyaXgtb2NycyIsIm1vY3JzIiwicDFfXzMyIyIsImNsanMuY29yZS5tYXRjaC9NYXBQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoLy0+TWFwUGF0dGVybiIsIkdfXzkyOSIsImVudiciLCJjbGpzLmNvcmUvcmVwZWF0ZWRseSIsInAxX18zMyMiLCJHX185MzIiLCJjbGpzLmNvcmUubWF0Y2gvbWFwLXBhdHRlcm4iLCJjbGpzLmNvcmUvbWFwPyIsImNsanMuY29yZS5tYXRjaC9jYWxjLXJlc3Q/LWFuZC1taW4tc2l6ZSIsInBfXzkzNCIsInBfXzkzNSIsInZlY19fOTM2IiwidmVjX185MzkiLCJzZXFfXzk0MCIsImZpcnN0X185NDEiLCJyZXN0PyIsIm1pbi1zaXplIiwiY2xqcy5jb3JlLm1hdGNoL3ZlY3Rvci1wYXR0ZXJuPyIsInhfXzEwNjc2X19hdXRvX18iLCJ5X18xMDY3N19fYXV0b19fIiwicF9fOTQyIiwibWFwX185NDMiLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1yb3ciLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL3NwbGl0IiwicF9fOTQ1IiwibWFwX185NDYiLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1yb3ctbm9uLXJlc3QiLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1tYXRyaXgiLCJwMV9fMzQjIiwicDFfXzM1IyIsInBfXzk0OCIsIm1hcF9fOTQ5IiwiY2xqcy5jb3JlLm1hdGNoL3ZlY3Rvci1wYXR0ZXJuLW9jci1zeW0iLCJwYXQiLCJ0YWciLCJwX185NTEiLCJtYXBfXzk1MiIsImNsanMuY29yZS5tYXRjaC92ZWN0b3ItcGF0dGVybi1tYXRyaXgtb2NycyIsIm9jci1tZXRhIiwidmwtb2NyIiwidnItb2NyIiwiY2xqcy5jb3JlLm1hdGNoL2FycmF5LXRhZyIsImNsanMuY29yZS5tYXRjaC9WZWN0b3JQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoLy0+VmVjdG9yUGF0dGVybiIsInAxX18zNiMiLCJHX185NTQiLCJsdiIsInJ2IiwicGwiLCJwciIsInJ2YyIsInZlY19fOTU1IiwiR19fOTYwIiwiY2xqcy5jb3JlLm1hdGNoL3ZlY3Rvci1wYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoL3NwZWNpYWxpemUtb3ItcGF0dGVybi1yb3ciLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS1vci1wYXR0ZXJuLW1hdHJpeCIsInAxX18zNyMiLCJjbGpzLmNvcmUubWF0Y2gvT3JQYXR0ZXJuIiwiY2xqcy5jb3JlLm1hdGNoLy0+T3JQYXR0ZXJuIiwiR19fOTYyIiwiY2xqcy5jb3JlLm1hdGNoL29yLXBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gvb3ItcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS1ndWFyZC1wYXR0ZXJuLW1hdHJpeCIsInBfXzk2NCIsInZlY19fOTY1IiwiY2xqcy5jb3JlLm1hdGNoL2d1YXJkLXBhdHRlcm4/IiwiY2xqcy5jb3JlLm1hdGNoL0d1YXJkUGF0dGVybiIsImNsanMuY29yZS5tYXRjaC8tPkd1YXJkUGF0dGVybiIsImdzIiwiR19fOTY4IiwiZXhwciIsImNsanMuY29yZS9zZXQ/IiwicF9fOTcwIiwidmVjX185NzEiLCJjbGpzLmNvcmUubWF0Y2gvYXBwLXBhdHRlcm4tbWF0cml4LW9jcnMiLCJmb3JtIiwiY2xqcy5jb3JlLm1hdGNoL3NwZWNpYWxpemUtYXBwLXBhdHRlcm4tbWF0cml4IiwidmVjX185NzQiLCJtYXRjaGVkLXJvd3MiLCJyZXN0LXJvd3MiLCJwX185NzciLCJ2ZWNfXzk3OCIsImNsanMuY29yZS5tYXRjaC9hcHAtcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gvQXBwUGF0dGVybiIsImNsanMuY29yZS5tYXRjaC8tPkFwcFBhdHRlcm4iLCJHX185ODEiLCJjbGpzLmNvcmUubWF0Y2gvYXBwLXBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gvcHJlZHMiLCJyZXRfXzEyNjk4X19hdXRvX18iLCJHX185ODQiLCJjbGpzLmNvcmUubWF0Y2gvZGVmcHJlZCIsIiZmb3JtIiwiJmVudiIsIm5hbWUiLCJjbGpzLmNvcmUvc3dhcCEiLCJjbGpzLmNvcmUubWF0Y2gvc3BlY2lhbGl6ZS1wcmVkaWNhdGUtcGF0dGVybi1tYXRyaXgiLCJwX185ODciLCJ2ZWNfXzk4OCIsImNsanMuY29yZS5tYXRjaC9wcmVkaWNhdGUtcGF0dGVybj8iLCJjbGpzLmNvcmUubWF0Y2gvUHJlZGljYXRlUGF0dGVybiIsImNsanMuY29yZS5tYXRjaC8tPlByZWRpY2F0ZVBhdHRlcm4iLCJHX185OTEiLCJjbGpzLmNvcmUubWF0Y2gvcHJlZGljYXRlLXBhdHRlcm4iLCJqcy9jbGpzLmNvcmUubWF0Y2gudG8tc291cmNlIiwianMvY2xqcy5jb3JlLm1hdGNoLmVtaXQtcGF0dGVybiIsImNsanMuY29yZS5tYXRjaC9lbWl0LXBhdHRlcm4iLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL3N5bnRheC10YWciLCJnb29nLm9iamVjdC9zZXQiLCJjbGpzLmNvcmUubWF0Y2gucHJvdG9jb2xzL0lTeW50YXhUYWciLCJjbGpzLmNvcmUvQ29ucyIsImNsanMuY29yZS9QZXJzaXN0ZW50SGFzaE1hcCIsImNsanMuY29yZS9QZXJzaXN0ZW50QXJyYXlNYXAiLCJHX185OTQiLCJjbGpzLmNvcmUubWF0Y2gvZW1pdC1wYXR0ZXJucyIsImNsanMuY29yZS9zZWNvbmQiLCJycCIsImNsanMuY29yZS9ubmV4dCIsInBfXzEwMDIiLCJ2ZWNfXzEwMDMiLCJjbGpzLmNvcmUvbmlsPyIsImNsanMuY29yZS5tYXRjaC9lbWl0LXBhdHRlcm4tZm9yLXN5bnRheCIsImpzL2NsanMuY29yZS5tYXRjaC5lbWl0LXBhdHRlcm4tZm9yLXN5bnRheCIsInBfXzEwMDYiLCJ2ZWNfXzEwMDciLCJwX18xMDEwIiwidmVjX18xMDExIiwicF9fMTAxNCIsInZlY19fMTAxNSIsInBfXzEwMTgiLCJ2ZWNfXzEwMTkiLCJjbGpzLmNvcmUvc3ltYm9sPyIsInAxX18zOCMiLCJwX18xMDIyIiwidmVjX18xMDIzIiwicF9fMTAyNiIsInZlY19fMTAyNyIsIm9mZnNldC1rZXkiLCJwX18xMDMwIiwidmVjX18xMDMxIiwicF9fMTAzNCIsInZlY19fMTAzNSIsInAxX18zOSMiLCJwMV9fNDAjIiwicDFfXzQxIyIsInZvaWQiLCJ2b2lkPyIsImluZml4LWtleXdvcmQ/IiwiY2xqcy5jb3JlLm1hdGNoL3JlZ3JvdXAta2V5d29yZHMiLCJwX18xMDQwIiwidmVjX18xMDQxIiwicmVzdWx0IiwicSIsImNsanMuY29yZS9zZXE/IiwiY2xqcy5jb3JlLm1hdGNoL2dyb3VwLWtleXdvcmRzIiwiY2xqcy5jb3JlLm1hdGNoL3RvLXBhdHRlcm4tcm93IiwiY2xqcy5jb3JlLm1hdGNoL3dpbGRjYXJkcy1hbmQtZHVwbGljYXRlcyIsInBhdHRlcm5zIiwicmVtYWluaW5nIiwic2VlbiIsImR1cHMiLCJwYXRzIiwiY2xqcy5jb3JlL3ZhbHMiLCJ3ZHMiLCJjbGpzLmNvcmUvbGlzdCIsImNsanMuY29yZS90YWtlLW50aCIsIm1zZWVuIiwiY2xvanVyZS5zZXQvaW50ZXJzZWN0aW9uIiwiY2xqcy5jb3JlLm1hdGNoL2ZpbmQtZHVwbGljYXRlLXdpbGRjYXJkcyIsImNsanMuY29yZS5tYXRjaC9jaGVjay1wYXR0ZXJuIiwidmFycyIsIm52YXJzIiwicm93bnVtIiwiY2xqcy5jb3JlL2xpc3Q/IiwiZHVwbGljYXRlcyIsImNsanMuY29yZS9zdHIiLCJjbGpzLmNvcmUvaW50ZXJwb3NlIiwiY2xqcy5jb3JlL3NvcnQiLCJjbGpzLmNvcmUubWF0Y2gvY2hlY2stbWF0cml4LWFyZ3MiLCJjbHMiLCJzZXFfXzEwNzciLCJjaHVua19fMTA3OCIsImNvdW50X18xMDc5IiwiaV9fMTA4MCIsInZlY19fMTA5MyIsInZlY19fMTA5NiIsImNfXzEyMTIyX19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiLCJ2ZWNfXzEwOTkiLCJ2ZWNfXzExMDIiLCJjbGpzLmNvcmUvYnV0bGFzdCIsInZlY19fMTEwNSIsImNsanMuY29yZS9vZGQ/IiwiY2xqcy5jb3JlLm1hdGNoL3Byb2Nlc3MtdmFycyIsInZhciIsIm5zeW0iLCJwcm9jZXNzLXZhciIsIkdfXzExNDQiLCJjbGpzLmNvcmUubWF0Y2gvZW1pdC1tYXRyaXgiLCJ2cyIsInZlY19fMTE0NSIsImxhc3QtbWF0Y2giLCJwMV9fNDIjIiwiY2xqcy5jb3JlLm1hdGNoL2V4ZWN1dGFibGUtZm9ybSIsImNsanMuY29yZS5tYXRjaC9yZWN1ci1wcmVzZW50PyIsImFjdGlvbnMiLCJjbGpzLmNvcmUvZmxhdHRlbiIsImFuYWx5emUtYWN0aW9uIiwiY2xqcy5jb3JlLm1hdGNoL2Nsai1mb3JtIiwicmVjdXItcHJlc2VudD8iLCIqcmVjdXItcHJlc2VudCotb3JpZy12YWxfXzExNDkiLCIqcmVjdXItcHJlc2VudCotdGVtcC12YWxfXzExNTAiLCJjbGpzLmNvcmUubWF0Y2gvbWF0Y2giLCJzZXExMTUxIiwiR19fMTE1MiIsIkdfXzExNTMiLCJHX18xMTU0IiwidmVjX18xMTU1IiwicF9fMTE1OCIsInZlY19fMTE1OSIsIipsaW5lKi1vcmlnLXZhbF9fMTE2MiIsIipsb2NhbHMqLW9yaWctdmFsX18xMTYzIiwiKndhcm5lZCotb3JpZy12YWxfXzExNjQiLCIqbGluZSotdGVtcC12YWxfXzExNjUiLCIqbG9jYWxzKi10ZW1wLXZhbF9fMTE2NiIsIip3YXJuZWQqLXRlbXAtdmFsX18xMTY3IiwiY2xqcy5jb3JlLm1hdGNoL21hdGNodiIsInNlcTExNzIiLCJHX18xMTczIiwiR19fMTE3NCIsIkdfXzExNzUiLCJHX18xMTc2IiwidHlwZSIsIip2ZWN0b3ItdHlwZSotb3JpZy12YWxfXzExNzciLCIqbGluZSotb3JpZy12YWxfXzExNzgiLCIqbG9jYWxzKi1vcmlnLXZhbF9fMTE3OSIsIip3YXJuZWQqLW9yaWctdmFsX18xMTgwIiwiKnZlY3Rvci10eXBlKi10ZW1wLXZhbF9fMTE4MSIsIipsaW5lKi10ZW1wLXZhbF9fMTE4MiIsIipsb2NhbHMqLXRlbXAtdmFsX18xMTgzIiwiKndhcm5lZCotdGVtcC12YWxfXzExODQiLCJjbGpzLmNvcmUubWF0Y2gvbWF0Y2htIiwic2VxMTE4OSIsIkdfXzExOTAiLCJHX18xMTkxIiwiR19fMTE5MiIsInZlY19fMTE5MyIsInBfXzExOTYiLCJ2ZWNfXzExOTciLCIqbWF0Y2gtbG9va3VwKi1vcmlnLXZhbF9fMTIwMCIsIipsaW5lKi1vcmlnLXZhbF9fMTIwMSIsIipsb2NhbHMqLW9yaWctdmFsX18xMjAyIiwiKndhcm5lZCotb3JpZy12YWxfXzEyMDMiLCIqbWF0Y2gtbG9va3VwKi10ZW1wLXZhbF9fMTIwNCIsIipsaW5lKi10ZW1wLXZhbF9fMTIwNSIsIipsb2NhbHMqLXRlbXAtdmFsX18xMjA2IiwiKndhcm5lZCotdGVtcC12YWxfXzEyMDciLCJjbGpzLmNvcmUubWF0Y2gvbWF0Y2gtbGV0Iiwic2VxMTIxMiIsIkdfXzEyMTMiLCJHX18xMjE0IiwiR19fMTIxNSIsImJpbmR2YXJzIyIsImNsanMuY29yZS5tYXRjaC9hc2V0cyIsInNlcTEyMjEiLCJHX18xMjIyIiwiR19fMTIyMyIsIkdfXzEyMjQiLCJ2ZWNfXzEyMjUiLCJwX18xMjI4IiwidmVjX18xMjI5IiwiKmxpbmUqLW9yaWctdmFsX18xMjMyIiwiKmxvY2Fscyotb3JpZy12YWxfXzEyMzMiLCIqd2FybmVkKi1vcmlnLXZhbF9fMTIzNCIsIipsaW5lKi10ZW1wLXZhbF9fMTIzNSIsIipsb2NhbHMqLXRlbXAtdmFsX18xMjM2IiwiKndhcm5lZCotdGVtcC12YWxfXzEyMzciLCJjbGpzLmNvcmUubWF0Y2gvbWF0Y2gqIiwic2VxMTI0MiIsIkdfXzEyNDMiLCJHX18xMjQ0IiwiR19fMTI0NSIsInZlY19fMTI0NiIsInBfXzEyNDkiLCJ2ZWNfXzEyNTAiLCIqbGluZSotb3JpZy12YWxfXzEyNTMiLCIqbG9jYWxzKi1vcmlnLXZhbF9fMTI1NCIsIip3YXJuZWQqLW9yaWctdmFsX18xMjU1IiwiKm5vLWJhY2t0cmFjayotb3JpZy12YWxfXzEyNTYiLCIqbGluZSotdGVtcC12YWxfXzEyNTciLCIqbG9jYWxzKi10ZW1wLXZhbF9fMTI1OCIsIip3YXJuZWQqLXRlbXAtdmFsX18xMjU5IiwiKm5vLWJhY2t0cmFjayotdGVtcC12YWxfXzEyNjAiLCJzZXExMjY1IiwiR19fMTI2NiIsIkdfXzEyNjciLCJHX18xMjY4IiwiR19fMTI2OSIsIip2ZWN0b3ItdHlwZSotb3JpZy12YWxfXzEyNzAiLCIqbGluZSotb3JpZy12YWxfXzEyNzEiLCIqbG9jYWxzKi1vcmlnLXZhbF9fMTI3MiIsIip3YXJuZWQqLW9yaWctdmFsX18xMjczIiwiKnZlY3Rvci10eXBlKi10ZW1wLXZhbF9fMTI3NCIsIipsaW5lKi10ZW1wLXZhbF9fMTI3NSIsIipsb2NhbHMqLXRlbXAtdmFsX18xMjc2IiwiKndhcm5lZCotdGVtcC12YWxfXzEyNzciLCJjbGpzLmNvcmUubWF0Y2gvbWF0Y2h2KiIsInNlcTEyODIiLCJHX18xMjgzIiwiR19fMTI4NCIsIkdfXzEyODUiLCJHX18xMjg2IiwiKnZlY3Rvci10eXBlKi1vcmlnLXZhbF9fMTI4NyIsIipsaW5lKi1vcmlnLXZhbF9fMTI4OCIsIipsb2NhbHMqLW9yaWctdmFsX18xMjg5IiwiKndhcm5lZCotb3JpZy12YWxfXzEyOTAiLCIqbm8tYmFja3RyYWNrKi1vcmlnLXZhbF9fMTI5MSIsIip2ZWN0b3ItdHlwZSotdGVtcC12YWxfXzEyOTIiLCIqbGluZSotdGVtcC12YWxfXzEyOTMiLCIqbG9jYWxzKi10ZW1wLXZhbF9fMTI5NCIsIip3YXJuZWQqLXRlbXAtdmFsX18xMjk1IiwiKm5vLWJhY2t0cmFjayotdGVtcC12YWxfXzEyOTYiLCJzZXExMzAxIiwiR19fMTMwMiIsIkdfXzEzMDMiLCJHX18xMzA0IiwidmVjX18xMzA1IiwicF9fMTMwOCIsInZlY19fMTMwOSIsIipsaW5lKi1vcmlnLXZhbF9fMTMxMiIsIipsb2NhbHMqLW9yaWctdmFsX18xMzEzIiwiKndhcm5lZCotb3JpZy12YWxfXzEzMTQiLCIqbGluZSotdGVtcC12YWxfXzEzMTUiLCIqbG9jYWxzKi10ZW1wLXZhbF9fMTMxNiIsIip3YXJuZWQqLXRlbXAtdmFsX18xMzE3Iiwic2VxMTMyMiIsIkdfXzEzMjMiLCJHX18xMzI0IiwiR19fMTMyNSIsImNsanMuY29yZS5tYXRjaC9tYXRjaC1sZXQqIiwic2VxMTMzMCIsIkdfXzEzMzEiLCJHX18xMzMyIiwiR19fMTMzMyIsImNsanMuY29yZS9JbmRleGVkU2VxIl0sInNvdXJjZXNDb250ZW50IjpbIihucyBjbGpzLmNvcmUubWF0Y2hcbiAgKDpyZWZlci1jbG9qdXJlIDpleGNsdWRlIFtjb21waWxlXSlcbiAgIz9AKDpjbGogKCg6dXNlIFtjbG9qdXJlLmNvcmUubWF0Y2gucHJvdG9jb2xzXSlcbiAgICAgICAgICAgICg6cmVxdWlyZSBbY2xvanVyZS5zZXQgOmFzIHNldF1cbiAgICAgICAgICAgICAgICAgICAgICBbY2xvanVyZS50b29scy5hbmFseXplciA6YXMgYW5hXVxuICAgICAgICAgICAgICAgICAgICAgIFtjbG9qdXJlLnRvb2xzLmFuYWx5emVyLmp2bSA6YXMgYW5hLWp2bV1cbiAgICAgICAgICAgICAgICAgICAgICBbY2xvanVyZS50b29scy5hbmFseXplci5wYXNzZXMuanZtLmFubm90YXRlLWxvb3BzIDphcyBsb29wc10pXG4gICAgICAgICAgICAoOmltcG9ydCBbamF2YS5pbyBXcml0ZXJdXG4gICAgICAgICAgICAgICAgICAgICBbY2xvanVyZS5jb3JlLm1hdGNoLnByb3RvY29scyBJRXhpc3RlbnRpYWxQYXR0ZXJuIElQc2V1ZG9QYXR0ZXJuXSkpXG4gIDpjbGpzICgoOnJlcXVpcmUtbWFjcm9zIFtjbGpzLmNvcmUubWF0Y2hdKVxuICAgICAgICAgKDpyZXF1aXJlIFtjbG9qdXJlLnNldCA6YXMgc2V0XVxuICAgICAgICAgICAgICAgICAgIFtjbGpzLmNvcmUgOnJlZmVyIFtTdWJ2ZWMgU3ltYm9sIFBlcnNpc3RlbnRIYXNoTWFwIFBlcnNpc3RlbnRWZWN0b3IgSUxvb2t1cCBJQXNzb2NpYXRpdmUgSUluZGV4ZWQgQ29ucyBMaXN0IFBlcnNpc3RlbnRBcnJheU1hcCBJTmV4dCBJU2VxYWJsZSBJQ291bnRlZCBJV2l0aE1ldGEgSU1ldGEgSUZuIElDb2xsZWN0aW9uIElTZXF1ZW50aWFsIElFcXVpdl1dXG4gICAgICAgICAgICAgICAgICAgW2NsanMuY29yZS5tYXRjaC5wcm90b2NvbHMgOnJlZmVyIFtJUGF0dGVybkNvbXBpbGUgSUNvbnRhaW5zUmVzdFBhdHRlcm4gSVZlY3RvclBhdHRlcm4gSVN5bnRheFRhZyBJU3BlY2lhbGl6ZU1hdHJpeCBJTm9kZUNvbXBpbGUgSU1hdGNoTG9va3VwIElFeGlzdGVudGlhbFBhdHRlcm4gSVBzZXVkb1BhdHRlcm4gSVZlY01vZCB2YWwtYXQgcHJlcGVuZCBkcm9wLW50aCBzd2FwIG4tdG8tY2xqIHRvLXNvdXJjZSogc3BlY2lhbGl6ZS1tYXRyaXggc3BsaXQgc3ludGF4LXRhZ11dKSkpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBJbnRyb2R1Y3Rpb25cbjs7XG47OyBUaGlzIG5hbWVzcGFjZSBjb250YWlucyBhbiBpbXBsZW1lbnRhdGlvbiBvZiBjbG9zZWQgcGF0dGVyblxuOzsgbWF0Y2hpbmcuIEl0IHVzZXMgYW4gYWxnb3JpdGhtIGJhc2VkIG9uIEx1YyBNYXJhbmdldCdzIHBhcGVyXG47OyBcIkNvbXBpbGluZyBQYXR0ZXJuIE1hdGNoaW5nIHRvIEdvb2QgRGVjaXNpb24gVHJlZXNcIi5cbjs7XG47OyBUaGVyZSBhcmUgdGhyZWUgbWFpbiBzdGVwcyB0byB0aGlzIGltcGxlbWVudGF0aW9uOlxuOztcbjs7IDEuICpDb252ZXJ0aW5nIENsb2p1cmUgc3ludGF4IHRvIGEgUGF0dGVybiBNYXRyaXgqOlxuOzsgICAgVGhlIGZ1bmN0aW9uIGBlbWl0LW1hdHJpeGAgZG9lcyB0aGlzIHdvcmsuXG47OyAgICBBIFBhdHRlcm4gTWF0cml4IGlzIHJlcHJlc2VudGVkIGJ5IFBhdHRlcm5NYXRyaXguXG47O1xuOzsgMi4gKkNvbXBpbGluZyB0aGUgUGF0dGVybiBNYXRyaXggdG8gYSBEaXJlY3RlZCBBY3ljbGljIEdyYXBoKjpcbjs7ICAgIFRoZSBmdW5jdGlvbiBgY29tcGlsZWAgZG9lcyB0aGlzIHdvcmsuIFRoaXMgc3RlcFxuOzsgICAgaXMgd2hlcmUgTWFyYW5nZXQncyBhbGdvcml0aG0gaXMgaW1wbGVtZW50ZWQuXG47O1xuOzsgMy4gKkNvbnZlcnRpbmcgdGhlIERBRyB0byBDbG9qdXJlIGNvZGUqOlxuOzsgICAgVGhpcyBpcyBtb3N0bHkgYSAxLTEgY29udmVyc2lvbi4gU2VlIGZ1bmN0aW9uIGBleGVjdXRhYmxlLWZvcm1gLlxuOztcblxuOzsgIyBOb21lbmNsYXR1cmVcbjs7XG47OyAqIHggYW5kIHkgYXJlIGNhbGxlZCBfb2NjdXJyZW5jZXNfXG47OyAqIDEsIDIsIDMgYW5kIDQgYXJlIF9wYXR0ZXJuc19cbjs7ICogWzEgMl0gYW5kIFszIDRdIGFyZSBfcGF0dGVybiByb3dzX1xuOzsgKiA6YTAgYW5kIDphMSBhcmUgX2FjdGlvbnNfXG47OyBcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgRGVidWdnaW5nIHRvb2xzXG47O1xuOzsgVGhlc2UgZGVidWdnaW5nIGFpZHMgYXJlIG1vc3QgdXNlZnVsIGluIHN0ZXBzIDIgYW5kIDMgb2YgY29tcGlsYXRpb24uXG47O1xuXG47OyBUT0RPIGFsbG93IHRoZXNlIHRvIGJlIHNldCBkeW5hbWljYWxseSwgYXQgbWFjcm8tZXhwYW5kIHRpbWUuXG47OyBNYXliZSBtYXRjaCBtYWNyb3MgY291bGQgdGFrZSBleHRyYSBtZXRhZGF0YT8gLSBBbWJyb3NlXG4oZGVmIF57OmR5bmFtaWMgdHJ1ZVxuICAgICAgIDpkb2MgXCJFbmFibGUgc3ludGF4IGNoZWNrIG9mIG1hdGNoIG1hY3Jvc1wifSBcbiAgKnN5bnRheC1jaGVjayogKGF0b20gdHJ1ZSkpXG5cbihkZWYgXns6ZHluYW1pYyB0cnVlfSAqbGluZSopXG4oZGVmIF57OmR5bmFtaWMgdHJ1ZX0gKmxvY2FscyogbmlsKVxuKGRlZiBeezpkeW5hbWljIHRydWV9ICp3YXJuZWQqKVxuXG4oZGVmIF57OmR5bmFtaWMgdHJ1ZVxuICAgICAgIDpkb2MgXCJBbGxvdyBtYXAgbWF0Y2hpbmcgc3ludGF4IHRvIGNoZWNrIGZvciBJTWF0Y2hMb29rdXBcIn1cbiAgKm1hdGNoLWxvb2t1cCogZmFsc2UpXG5cbihkZWYgXns6ZHluYW1pYyB0cnVlXG4gICAgICAgOmRvYyBcIkRlZmF1bHQgdmVjdG9yIHR5cGUuIENhbiBiZSByZWJvdW5kIGFsbG93aW5nIGVtaXNzaW9uIG9mXG4gICAgICAgICAgICAgY3VzdG9tIGlubGluZSBjb2RlIGZvciB2ZWN0b3IgcGF0dGVybnMsIGZvciBleGFtcGxlXG4gICAgICAgICAgICAgdHlwZS1oaW50ZWQgcHJpbWl0aXZlIGFycmF5IG9wZXJhdGlvbnNcIn1cbiAgKnZlY3Rvci10eXBlKiA6OnZlY3RvcilcblxuKGRlZiBeezpkeW5hbWljIHRydWVcbiAgICAgICA6ZG9jIFwiSW4gdGhlIHByZXNlbmNlIG9mIHJlY3VyIHdlIGNhbm5vdCBhcHBseSBjb2RlIHNpemUgb3B0aW1pemF0aW9uc1wifVxuICAqcmVjdXItcHJlc2VudCogZmFsc2UpXG5cbihkZWYgXns6ZHluYW1pYyB0cnVlXG4gICAgICAgOmRvYyBcIkZsYWcgdG8gb3B0aW1pemUgcGVyZm9ybWFuY2Ugb3ZlciBjb2RlIHNpemUuXCJ9XG4gICpuby1iYWNrdHJhY2sqIGZhbHNlKVxuXG4oZGVmIF57OmRvYyBcIlByZS1hbGxvY2F0ZWQgZXhjZXB0aW9uIHVzZWQgZm9yIGJhY2t0cmFjaW5nXCJ9XG4gIGJhY2t0cmFjayAjPyg6Y2xqIChFeGNlcHRpb24uIFwiQ291bGQgbm90IGZpbmQgbWF0Y2guXCIpXG4gICAgICAgICAgICAgICA6Y2xqcyAoanMvRXJyb3IuIFwiQ291bGQgbm90IGZpbmQgbWF0Y2guXCIpKSlcblxuKGRlZm4gYmFja3RyYWNrLWV4cHIgW11cbiAgIz8oOmNsanNcbiAgICBgKHRocm93IGNsanMuY29yZS5tYXRjaC9iYWNrdHJhY2spXG4gICAgIDpjbGpcbiAgICBgKHRocm93IGNsb2p1cmUuY29yZS5tYXRjaC9iYWNrdHJhY2spKSlcblxuKGRlZm4gYmFja3RyYWNrLXN5bSBbXVxuICAjPyg6Y2xqc1xuICAgICdjbGpzLmNvcmUubWF0Y2gvYmFja3RyYWNrXG4gICAgIDpjbGpcbiAgICAnY2xvanVyZS5jb3JlLm1hdGNoL2JhY2t0cmFjaykpXG5cbihkZWYgXns6ZHluYW1pYyB0cnVlfSAqYmFja3RyYWNrLXN0YWNrKiAoKSlcbihkZWYgXns6ZHluYW1pYyB0cnVlfSAqcm9vdCogdHJ1ZSlcblxuKGRlZm4gd2FybiBbbXNnXVxuICAod2hlbiAobm90IEAqd2FybmVkKilcbiAgICAoYmluZGluZyAjPyg6Y2xqIFsqb3V0KiAqZXJyKl0gOmNsanMgWypwcmludC1mbiogKnByaW50LWVyci1mbipdKVxuICAgICAgKHByaW50bG4gXCJXQVJOSU5HOlwiXG4gICAgICAgIChzdHIgKm5zKiBcIiwgbGluZSBcIiAqbGluZSogXCI6XCIpIFxuICAgICAgICBtc2cpKVxuICAgIChyZXNldCEgKndhcm5lZCogdHJ1ZSkpKVxuXG4jPyg6Y2xqXG4oZGVmbiBhbmFseXplIFtmb3JtIGVudl1cbiAgKGJpbmRpbmcgW2FuYS9tYWNyb2V4cGFuZC0xIGFuYS1qdm0vbWFjcm9leHBhbmQtMVxuICAgICAgICAgICAgYW5hL2NyZWF0ZS12YXIgICAgYW5hLWp2bS9jcmVhdGUtdmFyXG4gICAgICAgICAgICBhbmEvcGFyc2UgICAgICAgICBhbmEtanZtL3BhcnNlXG4gICAgICAgICAgICBhbmEvdmFyPyAgICAgICAgICB2YXI/XVxuICAgIChhbmEvYW5hbHl6ZSBmb3JtIGVudikpKSlcblxuIz8oOmNsalxuKGRlZm4gZ2V0LWxvb3AtbG9jYWxzIFtdXG4gIChsZXQgW0xPT1BfTE9DQUxTIGNsb2p1cmUubGFuZy5Db21waWxlci9MT09QX0xPQ0FMU11cbiAgICAobWFwY2F0XG4gICAgICAoZm4gW2JdXG4gICAgICAgIChsZXQgW25hbWUgKC5zeW0gXmNsb2p1cmUubGFuZy5Db21waWxlciRMb2NhbEJpbmRpbmcgYildXG4gICAgICAgICAgW25hbWUgbmFtZV0pKVxuICAgICAgKHdoZW4gKGJvdW5kPyBMT09QX0xPQ0FMUylcbiAgICAgICAgQExPT1BfTE9DQUxTKSkpKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgTWFwIFBhdHRlcm4gSW50ZXJvcFxuXG4oZXh0ZW5kLXR5cGUgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICBJTWF0Y2hMb29rdXBcbiAgKHZhbC1hdCBbdGhpcyBrIG5vdC1mb3VuZF1cbiAgICAoIz8oOmNsaiAudmFsQXQgOmNsanMgLWxvb2t1cCkgdGhpcyBrIG5vdC1mb3VuZCkpKVxuXG4jPyg6Y2xqXG4oZGVmbiB2YWwtYXQqXG4gIChbbSBrXSAodmFsLWF0IG0gayA6Om5vdC1mb3VuZCkpXG4gIChbbSBrIG5vdC1mb3VuZF0gKHZhbC1hdCBtIGsgbm90LWZvdW5kKSkpKVxuXG4oZGVmbiB2YWwtYXQtZXhwciBbJiBhcmdzXVxuICAjPyg6Y2xqc1xuICAgIGAoZ2V0IH5AYXJncylcbiAgICA7O0lmIG5vdCBDbG9qdXJlU2NyaXB0LCBkZWZlciB0byB2YWwtYXQqXG4gICAgOmNsalxuICAgIGAoaWYgKGluc3RhbmNlPyBjbG9qdXJlLmxhbmcuSUxvb2t1cCB+KGZpcnN0IGFyZ3MpKVxuICAgICAgIChnZXQgfkBhcmdzKVxuICAgICAgICh2YWwtYXQqIH5AYXJncykpKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgVmVjdG9yIFBhdHRlcm4gSW50ZXJvcFxuOztcbjs7IFZlY3RvcnMgcGF0dGVybnMgY2FuIGdlbmVyYXRlIGNvZGUgc3BlY2lhbGl6ZWQgb24gdHlwZS4gVGhpcyBpc1xuOzsgdXNlZnVsIGZvciBnZW5lcmF0aW5nIG9wdGltYWwgY29kZSBmb3IgZGF0YSBsaWtlIHByaW1pdGl2ZSBhcnJheXNcbjs7IGFuZCBieXRlcy4gRGVmYXVsdHMgZm9yIHZlY3RvciBhcmUgcHJvdmlkZWQsIHNlZVxuOzsgY2xvanVyZS5jb3JlLm1hdGNoLmFycmF5IGFuZCBjbG9qdXJlLmNvcmUubWF0Y2guYml0cyBmb3Jcbjs7IGV4cGVyaW1lbnRzIGludm9sdmluZyB0aGVzZSB0eXBlcy5cblxuKGRlZm4gdmVjdG9yLXR5cGUgW3QgJiByXSB0KVxuXG4oZGVmbXVsdGkgY2hlY2stc2l6ZT8gaWRlbnRpdHkpXG4oZGVmbXVsdGkgdGFnIChmbiBbdF0gdCkpXG4oZGVmbXVsdGkgdGVzdC1pbmxpbmUgdmVjdG9yLXR5cGUpXG4oZGVmbXVsdGkgdGVzdC13aXRoLXNpemUtaW5saW5lIHZlY3Rvci10eXBlKVxuKGRlZm11bHRpIHRlc3Qtd2l0aC1taW4tc2l6ZS1pbmxpbmUgdmVjdG9yLXR5cGUpXG4oZGVmbXVsdGkgY291bnQtaW5saW5lIHZlY3Rvci10eXBlKVxuKGRlZm11bHRpIG50aC1pbmxpbmUgdmVjdG9yLXR5cGUpXG4oZGVmbXVsdGkgbnRoLW9mZnNldC1pbmxpbmUgdmVjdG9yLXR5cGUpXG4oZGVmbXVsdGkgc3VidmVjLWlubGluZSB2ZWN0b3ItdHlwZSlcbihkZWZtdWx0aSBudGhuZXh0LWlubGluZSB2ZWN0b3ItdHlwZSlcblxuKGRlZm1ldGhvZCBjaGVjay1zaXplPyA6ZGVmYXVsdFxuICBbX10gdHJ1ZSlcblxuKGRlZm1ldGhvZCB0YWcgOmRlZmF1bHRcbiAgW3RdICh0aHJvdyAjPyg6Y2xqIChFeGNlcHRpb24uIChzdHIgXCJObyB0YWcgc3BlY2lmaWVkIGZvciB2ZWN0b3Igc3BlY2lhbGl6YXRpb24gXCIgdCkpXG4gICAgICAgICAgICAgICAgOmNsanMgKGpzL0Vycm9yLiAoc3RyIFwiTm8gdGFnIHNwZWNpZmllZCBmb3IgdmVjdG9yIHNwZWNpYWxpemF0aW9uIFwiIHQpKSkpKVxuXG4oZGVmbWV0aG9kIHRhZyA6OnZlY3RvclxuICBbX10gIz8oOmNsaiBjbG9qdXJlLmxhbmcuSVBlcnNpc3RlbnRWZWN0b3IgOmNsanMgUGVyc2lzdGVudFZlY3RvcikpXG5cbihkZWZuIHdpdGgtdGFnIFt0IG9jcl1cbiAgKGxldCBbdGhlLXRhZyAodGFnIHQpXG4gICAgICAgIHRoZS10YWcgIz8oOmNsalxuICAgICAgICAgICAgICAgICAgICAoaWYgKGFuZCAoY2xhc3M/IHRoZS10YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICguaXNBcnJheSBeQ2xhc3MgdGhlLXRhZykpXG4gICAgICAgICAgICAgICAgICAgICAgKC5nZXROYW1lIF5DbGFzcyB0aGUtdGFnKVxuICAgICAgICAgICAgICAgICAgICAgIHRoZS10YWcpXG4gICAgICAgICAgICAgICAgICA6Y2xqcyB0aGUtdGFnKV07VE9ETyBZZWhvbmF0aGFuIC0gd2hhdCBzaG91bGQgYmUgaW5zdGVhZCBvZiBgY2xhc3M/YCBmb3IgY2xqcz9cbiAgICAodmFyeS1tZXRhIG9jciBhc3NvYyA6dGFnIHRoZS10YWcpKSlcblxuKGRlZm1ldGhvZCB0ZXN0LWlubGluZSA6OnZlY3RvclxuICBbdCBvY3JdXG4gIChsZXQgW3RoZS10YWcgKHRhZyB0KVxuICAgICAgICBjICM/KDpjbGpcbiAgICAgICAgICAgICAgKGNvbmQgXG4gICAgICAgICAgICAoY2xhc3M/IHRoZS10YWcpIHRoZS10YWdcbiAgICAgICAgICAgIChzdHJpbmc/IHRoZS10YWcpIChDbGFzcy9mb3JOYW1lIHRoZS10YWcpXG4gICAgICAgICAgICAoc3ltYm9sPyB0aGUtdGFnKSAoQ2xhc3MvZm9yTmFtZSAoc3RyIHRoZS10YWcpKVxuICAgICAgICAgICAgOmVsc2UgKHRocm93IChFcnJvci4gKHN0ciBcIlVuc3VwcG9ydGVkIHRhZyB0eXBlXCIgdGhlLXRhZykpKSlcbiAgICAgICAgICAgIDpjbGpzXG4gICAgICAgICAgICAgIChjb25kXG4gICAgICAgICAgICAgICAgKD0gdGhlLXRhZyBQZXJzaXN0ZW50VmVjdG9yKSB0aGUtdGFnIDsgVE9ETyBZZWhvbmF0aGFuIC0gd2hhdCBzaG91bGQgYmUgaW5zdGVhZCBvZiBgY2xhc3M/YCBhbmQgZm9yTmFtZSBmb3IgY2xqcz9cbiAgICAgICAgICAgICAgICAoc3RyaW5nPyB0aGUtdGFnKSB0aGUtdGFnXG4gICAgICAgICAgICAgICAgKHN5bWJvbD8gdGhlLXRhZykgKHN0ciAodGhlLXRhZykpXG4gICAgICAgICAgICAgICAgOmVsc2UgKHRocm93IChqcy9FcnJvci4gKHN0ciBcIlVuc3VwcG9ydGVkIHRhZyB0eXBlXCIgdGhlLXRhZykpKSkpXVxuICAgIChjb25kXG4gICAgICAoPSB0IDo6dmVjdG9yKSBgKHZlY3Rvcj8gfm9jcilcbiAgICAgICM/QCg6Y2xqcyAoKC5pc0FycmF5IF5DbGFzcyBjKSBgKGNsanMuY29yZS9hcnJheT8gfm9jcikpKVxuICAgICAgOmVsc2UgYChpbnN0YW5jZT8gfmMgfm9jcikpKSlcblxuKGRlZm1ldGhvZCB0ZXN0LXdpdGgtc2l6ZS1pbmxpbmUgOjp2ZWN0b3JcbiAgW3Qgb2NyIHNpemVdXG4gIGAoYW5kIH4odGVzdC1pbmxpbmUgdCBvY3IpXG4gICAgICAgICAoPT0gfihjb3VudC1pbmxpbmUgdCAod2l0aC10YWcgdCBvY3IpKSB+c2l6ZSkpKVxuXG4oZGVmbWV0aG9kIHRlc3Qtd2l0aC1taW4tc2l6ZS1pbmxpbmUgOjp2ZWN0b3JcbiAgW3Qgb2NyIHNpemVdXG4gIGAoYW5kIH4odGVzdC1pbmxpbmUgdCBvY3IpXG4gICAgICAgICAoPj0gfihjb3VudC1pbmxpbmUgdCAod2l0aC10YWcgdCBvY3IpKSB+c2l6ZSkpKVxuXG4oZGVmbWV0aG9kIGNvdW50LWlubGluZSA6OnZlY3RvclxuICBbXyBvY3JdIGAoY291bnQgfm9jcikpXG5cbihkZWZtZXRob2QgbnRoLWlubGluZSA6OnZlY3RvclxuICBbXyBvY3IgaV0gYChudGggfm9jciB+aSkpXG5cbihkZWZtZXRob2QgbnRoLW9mZnNldC1pbmxpbmUgOjp2ZWN0b3JcbiAgW3Qgb2NyIGkgb2Zmc2V0XVxuICAobnRoLWlubGluZSB0IG9jciBpKSlcblxuKGRlZm1ldGhvZCBzdWJ2ZWMtaW5saW5lIDo6dmVjdG9yXG4gIChbXyBvY3Igc3RhcnRdIGAoc3VidmVjIH5vY3IgfnN0YXJ0KSlcbiAgKFtfIG9jciBzdGFydCBlbmRdIGAoc3VidmVjIH5vY3IgfnN0YXJ0IH5lbmQpKSlcblxuKGRlZm1ldGhvZCBudGhuZXh0LWlubGluZSA6OnZlY3RvclxuICAoW18gb2NyIG5dIGAobnRobmV4dCB+b2NyIH5uKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIEV4dGVuc2lvbnNcblxuOzsgUGF0dGVybiBtYXRyaWNlcyBhcmUgcmVwcmVzZW50ZWQgd2l0aCBwZXJzaXN0ZW50XG47OyB2ZWN0b3JzLiBPcGVyYXRpb25zIG9uIHBhdHRlcm4gbWF0cmljZXMgcmVxdWlyZSB1cyB0byBtb3ZlXG47OyBzb21ldGhpbmcgZnJvbSB0aGUgbWlkZGxlIG9mIHRoZSB2ZWN0b3IgdG8gdGhlIGZyb250IC0gdGh1cyBwcmVwZW5kXG47OyBhbmQgZHJvcC1udGguIHN3YXAgd2lsbCBzd2FwIHRoZSAwdGggZWxlbWVudCB3aXRoIHRoZSBudGggZWxlbWVudC5cblxuKGV4dGVuZC10eXBlICM/KDpjbGogY2xvanVyZS5sYW5nLklQZXJzaXN0ZW50VmVjdG9yIDpjbGpzIFBlcnNpc3RlbnRWZWN0b3IpXG4gIElWZWNNb2RcbiAgKHByZXBlbmQgW3RoaXMgeF1cbiAgICAoaW50byBbeF0gdGhpcykpXG4gIChkcm9wLW50aCBbdGhpcyBuXVxuICAgIChpbnRvIChzdWJ2ZWMgdGhpcyAwIG4pXG4gICAgICAgICAgKHN1YnZlYyB0aGlzIChpbmMgbikgKGNvdW50IHRoaXMpKSkpXG4gIChzd2FwIFt0aGlzIG5dXG4gICAgKGxldCBbeCAobnRoIHRoaXMgbildXG4gICAgICAocHJlcGVuZCAoZHJvcC1udGggdGhpcyBuKSB4KSkpKVxuXG4jPyg6Y2xqc1xuKGV4dGVuZC10eXBlIFN1YnZlY1xuICBJVmVjTW9kXG4gIChwcmVwZW5kIFt0aGlzIHhdXG4gICAgKGludG8gW3hdIHRoaXMpKVxuICAoZHJvcC1udGggW3RoaXMgbl1cbiAgICAoaW50byAoc3VidmVjIHRoaXMgMCBuKVxuICAgICAgICAgIChzdWJ2ZWMgdGhpcyAoaW5jIG4pIChjb3VudCB0aGlzKSkpKVxuICAoc3dhcCBbdGhpcyBuXVxuICAgIChsZXQgW3ggKG50aCB0aGlzIG4pXVxuICAgICAgKHByZXBlbmQgKGRyb3AtbnRoIHRoaXMgbikgeCkpKSkpXG5cblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7IGNvbnN0cnVjdG9yP1xuXG4oZGVjbGFyZSB3aWxkY2FyZC1wYXR0ZXJuPylcblxuKGRlZm4gY29uc3RydWN0b3I/IFtwXVxuICAobm90ICh3aWxkY2FyZC1wYXR0ZXJuPyBwKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIFBhdHRlcm4gR3JvdXBpbmdcbjs7XG47OyBVc2VkIHRvIGRldGVybWluZSB0aGUgZ3JvdXBhYmxlIGNvbnN0cnVjdG9ycyBpbiBhIGNvbHVtblxuXG4oZGVmbXVsdGkgZ3JvdXBhYmxlP1xuICBcIkRldGVybWluZSBpZiB0d28gcGF0dGVybnMgbWF5IGJlIGdyb3VwZWQgdG9nZXRoZXIgZm9yIHNpbXVsdGFuZW91c1xuICAgdGVzdGluZy5cIlxuICAoZm4gW2EgYl0gWyg6OnRhZyBhKSAoOjp0YWcgYildKSlcblxuKGRlZm1ldGhvZCBncm91cGFibGU/IDpkZWZhdWx0XG4gIFthIGJdICg9IGEgYikpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIFBhdHRlcm4gUm93c1xuOztcbjs7IFBhdHRlcm4gcm93cyBhcmUgb25lIGxpbmUgb2YgYSBtYXRyaXguIFRoZXkgY29ycmVzcG9uZCB0byBvbmVcbjs7IGNsYXVzZSBpbiB0aGUgaW4gdGhlIHVzZXIncyBvcmlnaW5hbCBwYXR0ZXJuLiBwYXR0ZXJucywgYWN0aW9uLFxuOzsgYmluZGluZ3MgYXJlIGFjY2Vzc29ycy5cbjs7IFxuXG4oZGVjbGFyZSBsZWFmLWJpbmQtZXhwciBuYW1lZC13aWxkY2FyZC1wYXR0ZXJuPylcblxuKGRlZnR5cGUgUGF0dGVyblJvdyBbcHMgYWN0aW9uIGJpbmRpbmdzXVxuICBPYmplY3RcbiAgKGVxdWFscyBbXyBvdGhlcl1cbiAgICAoYW5kIChpbnN0YW5jZT8gUGF0dGVyblJvdyBvdGhlcilcbiAgICAgICAgICg9IHBzICg6cHMgb3RoZXIpKVxuICAgICAgICAgKD0gYWN0aW9uICg6YWN0aW9uIG90aGVyKSlcbiAgICAgICAgICg9IGJpbmRpbmdzICg6YmluZGluZ3Mgb3RoZXIpKSkpXG5cbiAgSVZlY01vZFxuICAoZHJvcC1udGggW18gbl1cbiAgICAoUGF0dGVyblJvdy4gKGRyb3AtbnRoIHBzIG4pIGFjdGlvbiBiaW5kaW5ncykpXG5cbiAgKHByZXBlbmQgW18geF1cbiAgICAoUGF0dGVyblJvdy4gKGludG8gW3hdIHBzKSBhY3Rpb24gYmluZGluZ3MpKVxuXG4gIChzd2FwIFtfIG5dXG4gICAgKFBhdHRlcm5Sb3cuIChzd2FwIHBzIG4pIGFjdGlvbiBiaW5kaW5ncykpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuQXNzb2NpYXRpdmUgOmNsanMgSUFzc29jaWF0aXZlKVxuICAoIz8oOmNsaiBhc3NvYyA6Y2xqcyAtYXNzb2MpIFt0aGlzIGsgdl1cbiAgICAoUGF0dGVyblJvdy4gKGFzc29jIHBzIGsgdikgYWN0aW9uIGJpbmRpbmdzKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JbmRleGVkIDpjbGpzIElJbmRleGVkKVxuICAoIz8oOmNsaiBudGggOmNsanMgLW50aCkgW18gaV1cbiAgICAobnRoIHBzIGkpKVxuICAoIz8oOmNsaiBudGggOmNsanMgLW50aCkgW18gaSB4XVxuICAgIChudGggcHMgaSB4KSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JU2VxIDpjbGpzIElTZXEpXG4gICgjPyg6Y2xqIGZpcnN0IDpjbGpzIC1maXJzdCkgW19dIChmaXJzdCBwcykpXG5cbiAgIz8oOmNsanMgSU5leHQpXG4gICgjPyg6Y2xqIG5leHQgOmNsanMgLW5leHQpIFtfXVxuICAgIChpZi1sZXQgW25wcyAobmV4dCBwcyldXG4gICAgICAoUGF0dGVyblJvdy4gbnBzIGFjdGlvbiBiaW5kaW5ncylcbiAgICAgIChQYXR0ZXJuUm93LiBbXSBhY3Rpb24gYmluZGluZ3MpKSlcblxuICA7VE9ETyBZZWhvbmF0aGFuIC0gbm8gYG1vcmVgIGluIGNsanM/XG4gICM/KDpjbGpcbiAgKG1vcmUgW19dXG4gICAgKGlmIChlbXB0eT8gcHMpXG4gICAgICBuaWxcbiAgICAgIChsZXQgW25wcyAocmVzdCBwcyldXG4gICAgICAgIChQYXR0ZXJuUm93LiBucHMgYWN0aW9uIGJpbmRpbmdzKSkpKSlcblxuICAjPyg6Y2xqcyBJU2VxYWJsZSlcbiAgKCM/KDpjbGogc2VxIDpjbGpzIC1zZXEpIFt0aGlzXVxuICAgIChzZXEgcHMpKVxuXG4gICM/KDpjbGpzIElDb3VudGVkKVxuICAoIz8oOmNsaiBjb3VudCA6Y2xqcyAtY291bnQpW19dXG4gICAgKGNvdW50IHBzKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGtdXG4gICAgKCM/KDpjbGogLnZhbEF0IDpjbGpzIC1sb29rdXApIHRoaXMgayBuaWwpKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKVt0aGlzIGsgbm90LWZvdW5kXVxuICAgIChjYXNlIGtcbiAgICAgIDpwcyBwc1xuICAgICAgOmFjdGlvbiBhY3Rpb25cbiAgICAgIDpiaW5kaW5ncyBiaW5kaW5nc1xuICAgICAgbm90LWZvdW5kKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JRm4gOmNsanMgSUZuKVxuICAoIz8oOmNsaiBpbnZva2UgOmNsanMgLWludm9rZSlbXyBuXVxuICAgIChudGggcHMgbikpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSVBlcnNpc3RlbnRDb2xsZWN0aW9uIDpjbGpzIElDb2xsZWN0aW9uKVxuICAoIz8oOmNsaiBjb25zIDpjbGpzIC1jb25qKSBbXyB4XVxuICAgIChQYXR0ZXJuUm93LiAoY29uaiBwcyB4KSBhY3Rpb24gYmluZGluZ3MpKVxuXG4gICM/KDpjbGpzIElFcXVpdilcbiAgKCM/KDpjbGogZXF1aXYgOmNsanMgLWVxdWl2KSBbdGhpcyBvdGhlcl1cbiAgICAoLmVxdWFscyB0aGlzIG90aGVyKSkpXG5cbihkZWZuIHBhdHRlcm4tcm93XG4gIChbcHMgYWN0aW9uXSBcbiAgICAocGF0dGVybi1yb3cgcHMgYWN0aW9uIFtdKSlcbiAgKFtwcyBhY3Rpb24gYmluZGluZ3NdXG4gICAgKGxldCBbcHMgKGlmICh2ZWN0b3I/IHBzKSBwcyAoaW50byBbXSBwcykpXVxuICAgICAgKFBhdHRlcm5Sb3cuIHBzIGFjdGlvbiBiaW5kaW5ncykpKSlcblxuOzsgTk9URTogd2UgZG9uJ3QgdXNlIG1hcCBkZXN0cnVjdHVyaW5nIGhlcmUgYmVjYXVzZSBQYXR0ZXJuUm93IGlzXG47OyBib3RoIElTZXEgYW5kIElMb29rdXAsIGJ1dCBpbiBtYXAgZGVzdHJ1Y3R1cmluZyBzZXE/IGlzIHRlc3RlZFxuOzsgZmlyc3QgLSBEYXZpZFxuXG4oZGVmbiB1cGRhdGUtcGF0dGVybiBbcHJvdyBpIHBdXG4gIChwYXR0ZXJuLXJvdyAoYXNzb2MgKDpwcyBwcm93KSBpIHApICg6YWN0aW9uIHByb3cpICg6YmluZGluZ3MgcHJvdykpKVxuXG4oZGVmbiBhbGwtd2lsZGNhcmRzPyBbcHJvd11cbiAgKGV2ZXJ5PyB3aWxkY2FyZC1wYXR0ZXJuPyAoOnBzIHByb3cpKSlcblxuKGRlZm4gZHJvcC1udGgtYmluZCBbcHJvdyBuIG9jcl1cbiAgKGxldCBbcHMgICAgICAgICg6cHMgcHJvdylcbiAgICAgICAgcCAgICAgICAgIChwcyBuKVxuICAgICAgICBhY3Rpb24gICAgKDphY3Rpb24gcHJvdylcbiAgICAgICAgYmluZC1leHByIChsZWFmLWJpbmQtZXhwciBvY3IpXG4gICAgICAgIGFzICAgICAgICAoLT4gcCBtZXRhIDphcylcbiAgICAgICAgYmluZGluZ3MgIChvciAoOmJpbmRpbmdzIHByb3cpIFtdKVxuICAgICAgICBiaW5kaW5ncyAgKGlmIGFzXG4gICAgICAgICAgICAgICAgICAgIChjb25qIGJpbmRpbmdzIFthcyBiaW5kLWV4cHJdKVxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5ncylcbiAgICAgICAgYmluZGluZ3MgIChpZiAobmFtZWQtd2lsZGNhcmQtcGF0dGVybj8gcClcbiAgICAgICAgICAgICAgICAgICAgKGNvbmogYmluZGluZ3MgWyg6c3ltIHApIGJpbmQtZXhwcl0pXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdzKV1cbiAgICAocGF0dGVybi1yb3cgKGRyb3AtbnRoIHBzIG4pIGFjdGlvbiBiaW5kaW5ncykpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBDb21waWxhdGlvbiBOb2Rlc1xuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgIyMgTGVhZiBOb2RlXG5cbihkZWZyZWNvcmQgTGVhZk5vZGUgW3ZhbHVlIGJpbmRpbmdzXVxuICBJTm9kZUNvbXBpbGVcbiAgKG4tdG8tY2xqIFt0aGlzXVxuICAgIChpZiAobm90IChlbXB0eT8gYmluZGluZ3MpKVxuICAgICAgKGxldCBbYmluZGluZ3MgKHJlbW92ZSAoZm4gW1tzeW0gX11dICg9IHN5bSAnXykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmRpbmdzKV1cbiAgICAgICBgKGxldCBbfkAoYXBwbHkgY29uY2F0IGJpbmRpbmdzKV1cbiAgICAgICAgICB+dmFsdWUpKVxuICAgICAgdmFsdWUpKSlcblxuOzsgVE9ETyBwcmVjb25kaXRpb24gb24gYmluZGluZ3M/IHNlZSBhYm92ZSAtIEFtYnJvc2VcbihkZWZuIGxlYWYtbm9kZVxuICAoW3ZhbHVlXSAoTGVhZk5vZGUuIHZhbHVlIFtdKSlcbiAgKFt2YWx1ZSBiaW5kaW5nc10gKExlYWZOb2RlLiB2YWx1ZSBiaW5kaW5ncykpKSBcblxuKGRlZm11bHRpIGxlYWYtYmluZC1leHByIChmbiBbb2NyXSAoLT4gb2NyIG1ldGEgOm9jY3VycmVuY2UtdHlwZSkpKVxuXG4oZGVmbWV0aG9kIGxlYWYtYmluZC1leHByIDpzZXFcbiAgW29jcl0gKC0+IG9jciBtZXRhIDpiaW5kLWV4cHIpKVxuXG4oZGVmbWV0aG9kIGxlYWYtYmluZC1leHByIDo6dmVjdG9yXG4gIFtvY3JdICgtPiBvY3IgbWV0YSA6YmluZC1leHByKSlcblxuKGRlZm1ldGhvZCBsZWFmLWJpbmQtZXhwciA6bWFwXG4gIFtvY3JdIChsZXQgW20gKG1ldGEgb2NyKV1cbiAgICAgICAgICAodmFsLWF0LWV4cHIgKDptYXAtc3ltIG0pICg6a2V5IG0pKSkpXG5cbihkZWZtZXRob2QgbGVhZi1iaW5kLWV4cHIgOmRlZmF1bHRcbiAgW29jcl0gb2NyKVxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgIyMgRmFpbCBOb2RlXG5cbihkZWZyZWNvcmQgRmFpbE5vZGUgW11cbiAgSU5vZGVDb21waWxlXG4gIChuLXRvLWNsaiBbdGhpc11cbiAgICAoaWYgKnJlY3VyLXByZXNlbnQqXG4gICAgICBgKHRocm93XG4gICAgICAgICAjPyg6Y2xqc1xuICAgICAgICAgICAgKGpzL0Vycm9yLiAoc3RyIFwiTm8gbWF0Y2ggZm91bmQuXCIpKVxuICAgICAgICAgICAgOmNsalxuICAgICAgICAgICAgKEV4Y2VwdGlvbi4gKHN0ciBcIk5vIG1hdGNoIGZvdW5kLlwiKSkpKVxuICAgICAgKGJhY2t0cmFjay1leHByKSkpKVxuXG4oZGVmbiBmYWlsLW5vZGUgW11cbiAgKEZhaWxOb2RlLikpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIyBCaW5kIE5vZGVcblxuKGRlZnJlY29yZCBCaW5kTm9kZSBbYmluZGluZ3Mgbm9kZV1cbiAgSU5vZGVDb21waWxlXG4gIChuLXRvLWNsaiBbdGhpc11cbiAgICBgKGxldCBbfkBiaW5kaW5nc11cbiAgICAgICB+KG4tdG8tY2xqIG5vZGUpKSkpXG5cbihkZWZuIGJpbmQtbm9kZSBbYmluZGluZ3Mgbm9kZV1cbiAgKEJpbmROb2RlLiBiaW5kaW5ncyBub2RlKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMjIFN3aXRjaCBOb2RlXG5cbihkZWNsYXJlIHRvLXNvdXJjZSlcblxuKGRlZm4gZGFnLWNsYXVzZS10by1jbGogW29jY3VycmVuY2UgcGF0dGVybiBhY3Rpb25dXG4gIChsZXQgW3Rlc3QgKGlmICM/KDpjbGogKGluc3RhbmNlPyBjbG9qdXJlLmNvcmUubWF0Y2gucHJvdG9jb2xzLklQYXR0ZXJuQ29tcGlsZSBwYXR0ZXJuKSA6Y2xqcyAoc2F0aXNmaWVzPyBJUGF0dGVybkNvbXBpbGUgcGF0dGVybikpXG4gICAgICAgICAgICAgICAodG8tc291cmNlKiBwYXR0ZXJuIG9jY3VycmVuY2UpXG4gICAgICAgICAgICAgICAodG8tc291cmNlIHBhdHRlcm4gb2NjdXJyZW5jZSkpXVxuICAgIFt0ZXN0IChuLXRvLWNsaiBhY3Rpb24pXSkpXG5cbihkZWZuIGNhdGNoLWVycm9yIFsmIGJvZHldXG4gIChsZXQgW2Vyci1zeW0gIz8oOmNsanMgJ2pzL0Vycm9yIDpjbGogJ0V4Y2VwdGlvbildXG4gICAgYChjYXRjaCB+ZXJyLXN5bSBlI1xuICAgICAgIChpZiAoaWRlbnRpY2FsPyBlIyB+KGJhY2t0cmFjay1zeW0pKVxuICAgICAgICAgKGRvXG4gICAgICAgICAgIH5AYm9keSlcbiAgICAgICAgICh0aHJvdyBlIykpKSkpXG5cbihkZWZyZWNvcmQgU3dpdGNoTm9kZSBbb2NjdXJyZW5jZSBjYXNlcyBkZWZhdWx0XVxuICBJTm9kZUNvbXBpbGVcbiAgKG4tdG8tY2xqIFt0aGlzXVxuICAgIChsZXQgW2NsYXVzZXMgKGRvYWxsXG4gICAgICAgICAgICAgICAgICAgIChtYXBjYXQgKHBhcnRpYWwgYXBwbHkgZGFnLWNsYXVzZS10by1jbGogb2NjdXJyZW5jZSlcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlcykpXG4gICAgICAgICAgYmluZC1leHByICgtPiBvY2N1cnJlbmNlIG1ldGEgOmJpbmQtZXhwcilcbiAgICAgICAgICBjb25kLWV4cHJcbiAgICAgICAgICAoaWYgKnJlY3VyLXByZXNlbnQqXG4gICAgICAgICAgICAoZG9hbGxcbiAgICAgICAgICAgICAgKGNvbmNhdFxuICAgICAgICAgICAgICAgIGAoY29uZCB+QGNsYXVzZXMpXG4gICAgICAgICAgICAgICAgYCg6ZWxzZSB+KG4tdG8tY2xqIGRlZmF1bHQpKSkpXG4gICAgICAgICAgICAoZG9hbGxcbiAgICAgICAgICAgICAgKGNvbmNhdFxuICAgICAgICAgICAgICAgIGAoY29uZCB+QGNsYXVzZXMpXG4gICAgICAgICAgICAgICAgYCg6ZWxzZVxuICAgICAgICAgICAgICAgICAgIH4oYmFja3RyYWNrLWV4cHIpKSkpKV1cbiAgICAgIChpZiAqcmVjdXItcHJlc2VudCpcbiAgICAgICAgKGlmIGJpbmQtZXhwclxuICAgICAgICAgIGB+KGRvYWxsXG4gICAgICAgICAgICAgIChjb25jYXRcbiAgICAgICAgICAgICAgICBgKGxldCBbfm9jY3VycmVuY2UgfmJpbmQtZXhwcl0pXG4gICAgICAgICAgICAgICAgKGxpc3QgY29uZC1leHByKSkpXG4gICAgICAgICAgYH5jb25kLWV4cHIpXG4gICAgICAgIChpZiBiaW5kLWV4cHJcbiAgICAgICAgICBgKHRyeVxuICAgICAgICAgICAgIH4oZG9hbGxcbiAgICAgICAgICAgICAgICAoY29uY2F0XG4gICAgICAgICAgICAgICAgICBgKGxldCBbfm9jY3VycmVuY2UgfmJpbmQtZXhwcl0pXG4gICAgICAgICAgICAgICAgICAobGlzdCBjb25kLWV4cHIpKSlcbiAgICAgICAgICAgICB+KGNhdGNoLWVycm9yIChuLXRvLWNsaiBkZWZhdWx0KSkpXG4gICAgICAgICAgYCh0cnlcbiAgICAgICAgICAgICB+Y29uZC1leHByXG4gICAgICAgICAgICAgfihjYXRjaC1lcnJvciAobi10by1jbGogZGVmYXVsdCkpKSkpKSkpXG5cbihkZWZuIHN3aXRjaC1ub2RlXG4gIChbb2NjdXJyZW5jZSBjYXNlcyBkZWZhdWx0XVxuICAgezpwcmUgWyhzZXF1ZW50aWFsPyBjYXNlcyldfVxuICAgKFN3aXRjaE5vZGUuIG9jY3VycmVuY2UgY2FzZXMgZGVmYXVsdCkpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBQYXR0ZXJuIE1hdHJpeFxuXG4oZGVmbiBmaXJzdC1jb2x1bW4/IFtpXSAoemVybz8gaSkpXG5cbihkZWZuIGVtcHR5LXJvdz8gW3Jvd11cbiAgKGxldCBbcHMgKDpwcyByb3cpXVxuICAgIChhbmQgKG5vdCAobmlsPyBwcykpXG4gICAgICAgICAoZW1wdHk/IHBzKSkpKVxuXG4oZGVmbiBzY29yZS1jb2x1bW4gW2kgY29sXVxuICBbaSAocmVkdWNlICsgMCBjb2wpXSlcblxuKGRlZm4gd2lkdGggW3tyb3dzIDpyb3dzfV1cbiAgKGlmIChub3QgKGVtcHR5PyByb3dzKSlcbiAgICAoY291bnQgKHJvd3MgMCkpXG4gICAgMCkpXG5cbihkZWZuIGhlaWdodCBbe3Jvd3MgOnJvd3N9XVxuICAoY291bnQgcm93cykpXG5cbihkZWZuIGRpbSBbcG1dXG4gIFsod2lkdGggcG0pIChoZWlnaHQgcG0pXSlcblxuKGRlZm4gZW1wdHktbWF0cml4PyBbcG1dXG4gICg9IChkaW0gcG0pIFswIDBdKSlcblxuKGRlZm4gY29sdW1uIFt7cm93cyA6cm93c30gaV1cbiAgKHZlYyAobWFwICMobnRoICUgaSkgcm93cykpKVxuXG4oZGVmbiByb3cgW3tyb3dzIDpyb3dzfSBqXVxuICAobnRoIHJvd3MgaikpXG5cbihkZWZuIHJvd3MgW3tyb3dzIDpyb3dzfV0gcm93cylcblxuKGRlZm4gcGF0dGVybi1hdCBbe3Jvd3MgOnJvd3N9IGkgal1cbiAgKChyb3dzIGopIGkpKVxuXG4oZGVmbiBhY3Rpb24tZm9yLXJvdyBbe3Jvd3MgOnJvd3N9IGpdXG4gICg6YWN0aW9uIChyb3dzIGopKSlcblxuKGRlZm4gb2NjdXJyZW5jZXMgW3BtXSAoOm9jcnMgcG0pKVxuXG47OyBSZXR1cm5zIGJpbmRpbmdzIHVzYWJsZSBieSBsZWFmLW5vZGVcbihkZWZuIHJvdy1iaW5kaW5ncyBbZiBvY3JzXVxuICAoY29uY2F0ICg6YmluZGluZ3MgZilcbiAgICAoLT4+IChtYXAgdmVjdG9yICg6cHMgZikgb2NycylcbiAgICAgIChmaWx0ZXIgKGZuIFtbcCBvY3JdXSAobmFtZWQtd2lsZGNhcmQtcGF0dGVybj8gcCkpKVxuICAgICAgKG1hcCAoZm4gW1twIG9jcl1dIFsoOnN5bSBwKSAobGVhZi1iaW5kLWV4cHIgb2NyKV0pKSkpKVxuXG4oZGVmbiBleGlzdGVudGlhbC1wYXR0ZXJuPyBbeF1cbiAgKCM/KDpjbGogaW5zdGFuY2U/IDpjbGpzIGltcGxlbWVudHM/KSBJRXhpc3RlbnRpYWxQYXR0ZXJuIHgpKVxuXG4oZGVmbiB3aWxkY2FyZC1vci1leGlzdGVudGlhbD8gW3hdXG4gIChvciAod2lsZGNhcmQtcGF0dGVybj8geClcbiAgICAgIChleGlzdGVudGlhbC1wYXR0ZXJuPyB4KSkpXG5cbihkZWZuIGNvbnN0cnVjdG9ycy1hYm92ZT8gW3BtIGkgal1cbiAgKGV2ZXJ5P1xuICAgIChjb21wIG5vdCB3aWxkY2FyZC1vci1leGlzdGVudGlhbD8pXG4gICAgKHRha2UgaiAoY29sdW1uIHBtIGkpKSkpXG5cbjs7IGJhc2VkIG9uIHBhcGVyIHdlIHVzZWQgdG8gY2hlY2sgdGhlIGZvbGxvd2luZ1xuOzsgKHdpbGRjYXJkLXBhdHRlcm4/IHApIChub3QgKHVzZWZ1bD8gKGRyb3AtbnRoIHBtIGkpIGopKVxuOzsgSU1QT1JUQU5UIE5PVEU6IHRoaXMgY2FsY3VsYXRpb24gaXMgdmVyeSB2ZXJ5IHNsb3csXG47OyB3ZSBzaG91bGQgbG9vayBhdCB0aGlzIG1vcmUgY2xvc2VseSAtIERhdmlkXG5cbihkZWZuIHBhdHRlcm4tc2NvcmUgW3BtIGkgal1cbiAgKGxldCBbcCAocGF0dGVybi1hdCBwbSBpIGopXVxuICAgIChjb25kXG4gICAgICAob3IgKHdpbGRjYXJkLXBhdHRlcm4/IHApXG4gICAgICAgICAgKG5vdCAoY29uc3RydWN0b3JzLWFib3ZlPyBwbSBpIGopKSkgMFxuICAgICAgKGV4aXN0ZW50aWFsLXBhdHRlcm4/IHApIDFcbiAgICAgIDplbHNlIDIpKSlcblxuOzsgREVBRCBDT0RFIGZvciBub3cgLSBEYXZpZFxuOzsgKGRlZm4gdXNlZnVsPyBbcG0gal1cbjs7ICAgKHNvbWUgIyh1c2VmdWwtcD8gcG0gJSBqKVxuOzsgICAgICAgICAocmFuZ2UgKGNvdW50IChyb3cgcG0gaikpKSkpXG5cbihkZWZuIHVzZWZ1bC1tYXRyaXggW3BtXVxuICAoLT4+IChmb3IgW2ogKHJhbmdlIChoZWlnaHQgcG0pKVxuICAgICAgICAgICAgIGkgKHJhbmdlICh3aWR0aCBwbSkpXVxuICAgICAgICAgKHBhdHRlcm4tc2NvcmUgcG0gaSBqKSlcbiAgICAocGFydGl0aW9uICh3aWR0aCBwbSkpXG4gICAgKG1hcCB2ZWMpXG4gICAgdmVjKSlcblxuKGRlZm4gbmVjZXNzYXJ5LWNvbHVtbiBbcG1dXG4gICgtPj4gKGFwcGx5IG1hcCB2ZWN0b3IgKHVzZWZ1bC1tYXRyaXggcG0pKVxuICAgIChtYXAtaW5kZXhlZCBzY29yZS1jb2x1bW4pXG4gICAgKHJlZHVjZVxuICAgICAgKGZuIFtbY29sIHNjb3JlIDphcyBjdXJyXVxuICAgICAgICAgICBbb2NvbCBvc2NvcmUgOmFzIGNhbmRdXVxuICAgICAgICAoaWYgKD4gb3Njb3JlIHNjb3JlKSBjYW5kIGN1cnIpKVxuICAgICAgWzAgMF0pXG4gICAgZmlyc3QpKVxuXG4oZGVmbiBzZWxlY3QgW3BtXVxuICAoc3dhcCBwbSAobmVjZXNzYXJ5LWNvbHVtbiBwbSkpKVxuXG4oZGVjbGFyZSBkZWZhdWx0LXNwZWNpYWxpemUtbWF0cml4KVxuXG4oZGVmbiBzcGVjaWFsaXplXG4gIChbbWF0cml4XVxuICAgIChzcGVjaWFsaXplIG1hdHJpeCAoZmZpcnN0IChyb3dzIG1hdHJpeCkpKSlcbiAgKFttYXRyaXggcF1cbiAgICAoaWYgKHNhdGlzZmllcz8gSVNwZWNpYWxpemVNYXRyaXggcClcbiAgICAgIChzcGVjaWFsaXplLW1hdHJpeCBwIG1hdHJpeClcbiAgICAgIChkZWZhdWx0LXNwZWNpYWxpemUtbWF0cml4IHAgbWF0cml4KSkpKVxuXG4oZGVmbiBwc2V1ZG8tcGF0dGVybj8gW3hdXG4gICgjPyg6Y2xqIGluc3RhbmNlPyA6Y2xqcyBpbXBsZW1lbnRzPykgSVBzZXVkb1BhdHRlcm4geCkpXG5cbihkZWZuIHBzZXVkby1wYXR0ZXJucyBbbWF0cml4IGldXG4gIChmaWx0ZXIgcHNldWRvLXBhdHRlcm4/IChjb2x1bW4gbWF0cml4IGkpKSlcblxuKGRlZm4gY29sdW1uLXNwbGl0dGVyIFtjb2xdXG4gIChsZXQgW2YgKGZpcnN0IGNvbClcbiAgICAgICAgW3RvcCBib3R0b21dIChzcGxpdC13aXRoICMoZ3JvdXBhYmxlPyBmICUpIChyZXN0IGNvbCkpXVxuICAgIFsoY29ucyBmIHRvcCkgYm90dG9tXSkpXG5cbihkZWNsYXJlIHBhdHRlcm4tbWF0cml4IGNvbXBpbGUpXG5cbihkZWZuIHJldHVybi1zcGxpdCBbUyBEXVxuICAoaWYgKnJlY3VyLXByZXNlbnQqXG4gICAgKGlmIChhbmQgKGVtcHR5LW1hdHJpeD8gRCkgKHNlcSAqYmFja3RyYWNrLXN0YWNrKikpXG4gICAgICBbUyAocGVlayAqYmFja3RyYWNrLXN0YWNrKikgKmJhY2t0cmFjay1zdGFjaypdXG4gICAgICBbUyBEIChjb25qICpiYWNrdHJhY2stc3RhY2sqIEQpXSlcbiAgICBbUyBEXSkpXG5cbihkZWZuIG1hdHJpeC1zcGxpdHRlciBbbWF0cml4XVxuICAobGV0IFtyb3dzIChyb3dzIG1hdHJpeClcbiAgICAgICAgbiAgICAoY291bnQgKGZpcnN0IChjb2x1bW4tc3BsaXR0ZXIgKG1hcCBmaXJzdCByb3dzKSkpKVxuICAgICAgICBvY3JzIChvY2N1cnJlbmNlcyBtYXRyaXgpXG4gICAgICAgIFMgICAgKHBhdHRlcm4tbWF0cml4ICh0YWtlIG4gcm93cykgb2NycylcbiAgICAgICAgRCAgICAocGF0dGVybi1tYXRyaXggKGRyb3AgbiByb3dzKSBvY3JzKV1cbiAgICAocmV0dXJuLXNwbGl0IFMgRCkpKVxuXG4oZGVmbiBncm91cC1yb3dzIFtjcyByb3dzXVxuICAocmVkdWNlXG4gICAgKGZuIFtyZXMgcm93XVxuICAgICAgKGxldCBbW2Mgcm93c10gKHBlZWsgcmVzKVxuICAgICAgICAgICAgIGMnICAgICAgKGZpcnN0IHJvdyldXG4gICAgICAgIChpZiAoZ3JvdXBhYmxlPyBjIGMnKVxuICAgICAgICAgIChjb25qIChwb3AgcmVzKSBbYyAoY29uaiByb3dzIHJvdyldKVxuICAgICAgICAgIChjb25qIHJlcyBbYycgW3Jvd11dKSkpKVxuICAgIFtbKGZpcnN0IGNzKSBbKGZpcnN0IHJvd3MpXV1dIChyZXN0IHJvd3MpKSlcblxuKGRlY2xhcmUgbGl0ZXJhbC1wYXR0ZXJuPylcblxuKGRlZm4gbm9uLWxvY2FsLWxpdGVyYWwtcGF0dGVybj8gW3BdXG4gIChhbmQgKGxpdGVyYWwtcGF0dGVybj8gcClcbiAgICAgICAobm90ICgtPiBwIDpsIG1ldGEgOmxvY2FsKSkpKVxuXG4oZGVmbiBsaXRlcmFsLWNhc2UtbWF0cml4LXNwbGl0dGVyIFttYXRyaXhdXG4gIChsZXQgW29jcnMgIChvY2N1cnJlbmNlcyBtYXRyaXgpXG4gICAgICAgIHJvd3MgIChyb3dzIG1hdHJpeClcbiAgICAgICAgbHJvd3MgKGxvb3AgW3Jvd3MgKHNlcSByb3dzKSByZXMgW10gbGl0cyAje31dXG4gICAgICAgICAgICAgICAgOzsgYSBiaXQgaGFja3kgYnV0IGxpdCBwYXR0ZXJucyBoYXNoIGRpZmZlcmVudGx5IHdlXG4gICAgICAgICAgICAgICAgOzsgc3RvcmUgdGhlIGxpdGVyYWwgdmFsdWUgZGlyZWN0bHkgaW4gbGl0cyBzZXRcbiAgICAgICAgICAgICAgICAoaWYgcm93c1xuICAgICAgICAgICAgICAgICAgKGxldCBbW3AgOmFzIHJvd10gKGZpcnN0IHJvd3MpXVxuICAgICAgICAgICAgICAgICAgICAoaWYgKGFuZCAobm9uLWxvY2FsLWxpdGVyYWwtcGF0dGVybj8gcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5vdCAoY29udGFpbnM/IGxpdHMgKDpsIHApKSkpXG4gICAgICAgICAgICAgICAgICAgICAgKHJlY3VyIChuZXh0IHJvd3MpIChjb25qIHJlcyByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAoaWYgKG5vbi1sb2NhbC1saXRlcmFsLXBhdHRlcm4/IHApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChjb25qIGxpdHMgKDpsIHApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsaXRzKSlcbiAgICAgICAgICAgICAgICAgICAgICByZXMpKVxuICAgICAgICAgICAgICAgICAgcmVzKSlcbiAgICAgICAgUyAgICAgKC0+PiBscm93c1xuICAgICAgICAgICAgICAgIChncm91cC1yb3dzIChtYXAgZmlyc3QgbHJvd3MpKVxuICAgICAgICAgICAgICAgIChtYXAgKGZuIFtbYyByb3dzXV1cbiAgICAgICAgICAgICAgICAgICAgICAgW2MgKHBhdHRlcm4tbWF0cml4IHJvd3Mgb2NycyldKSlcbiAgICAgICAgICAgICAgICB2ZWMpXG4gICAgICAgIEQgICAgIChwYXR0ZXJuLW1hdHJpeCAoZHJvcCAoY291bnQgbHJvd3MpIHJvd3MpIG9jcnMpXVxuICAgIChyZXR1cm4tc3BsaXQgUyBEKSkpXG5cbihkZWZuIGRlZmF1bHQtY2FzZSBbbWF0cml4XVxuICAoaWYtbm90IChlbXB0eS1tYXRyaXg/IG1hdHJpeClcbiAgICAoY29tcGlsZSBtYXRyaXgpXG4gICAgKGZhaWwtbm9kZSkpKVxuXG4oZGVmbiBjYXNlcyBbbWF0cml4XVxuICAoaWYgKHZlY3Rvcj8gbWF0cml4KVxuICAgIDs7IGdyb3VwZWQgbGl0ZXJhbCBjYXNlXG4gICAgKC0+PiBtYXRyaXhcbiAgICAgIChtYXAgKGZuIFtbYyBtXV1cbiAgICAgICAgICAgICBbYyAoLT4gbSAoc3BlY2lhbGl6ZSBjKSBjb21waWxlKV0pKVxuICAgICAgdmVjKVxuICAgIDs7IG5vcm1hbCBjYXNlXG4gICAgKGxldCBbcm93cyAocm93cyBtYXRyaXgpXG4gICAgICAgICAgYyAgICAoZmZpcnN0IHJvd3MpXVxuICAgICAgW1tjICgtPiBtYXRyaXggKHNwZWNpYWxpemUgYykgY29tcGlsZSldXSkpKVxuXG4oZGVmbiBleHByZXNzaW9uPyBbb2NyXVxuICAoY29udGFpbnM/IChtZXRhIG9jcikgOm9jci1leHByKSlcblxuKGRlZm4gYmluZC12YXJpYWJsZXMgW29jcnNdIFxuICAobWFwY2F0XG4gICAgKGZuIFtvY3JdXG4gICAgICAobGV0IFtiaW5kLWV4cHIgKGdldCAobWV0YSBvY3IpIDpvY3ItZXhwciA6Om5vdC1mb3VuZCldXG4gICAgICAgIChpZiAobm90PSBiaW5kLWV4cHIgOjpub3QtZm91bmQpXG4gICAgICAgICAgW29jciBiaW5kLWV4cHJdXG4gICAgICAgICAgW29jciBvY3JdKSkpXG4gICAgb2NycykpXG5cbihkZWZuIHJvb3QtYmluZC1ub2RlIFttYXRyaXhdXG4gIChsZXQgW29jcnMgKG9jY3VycmVuY2VzIG1hdHJpeClcbiAgICAgICAgbm9kZSAoY29tcGlsZSBtYXRyaXgpXVxuICAgIChpZiAoc29tZSBleHByZXNzaW9uPyBvY3JzKVxuICAgICAgKGJpbmQtbm9kZSAoYmluZC12YXJpYWJsZXMgb2Nycykgbm9kZSlcbiAgICAgIG5vZGUpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMgQ29tcGlsYXRpb24gQ2FzZXNcbjs7XG47OyBUaGVzZSBhcmUgYW5hbG9nb3VzIHRvIE1hcmFuZ2V0J3MgQ29tcGlsYXRpb24gU2NoZW1lIG9uIHBhZ2UgNCxcbjs7IHJlc3BlY3RpdmVseSBjYXNlIDEsIDIsIDIgKGFsc28pLCAzYSBhbmQgM2IuXG47O1xuXG4oZGVmbiBlbXB0eS1yb3dzLWNhc2UgXG4gIFwiQ2FzZSAxOiBJZiB0aGVyZSBhcmUgbm8gcGF0dGVybiByb3dzIHRvIG1hdGNoLCB0aGVuIG1hdGNoaW5nIGFsd2F5cyBmYWlsc1wiXG4gIFtdXG4gIChmYWlsLW5vZGUpKVxuXG4oZGVmbiBmaXJzdC1yb3ctZW1wdHktY2FzZSBcbiAgXCJDYXNlIDI6IElmIHRoZSBmaXJzdCByb3cgaXMgZW1wdHkgdGhlbiBtYXRjaGluZyBhbHdheXMgc3VjY2VlZHMgXG4gIGFuZCB5aWVsZHMgdGhlIGZpcnN0IGFjdGlvbi5cIlxuICBbcm93cyBvY3JdXG4gIChsZXQgW2YgKGZpcnN0IHJvd3MpXG4gICAgICAgIGEgKDphY3Rpb24gZilcbiAgICAgICAgYnMgKDpiaW5kaW5ncyBmKV1cbiAgICA7OyBGSVhNRTogdGhlIGZpcnN0IHJvdyBpcyBhbiBpbmZpbml0ZSBsaXN0IG9mIG5pbCAtIERhdmlkXG4gICAgKGxlYWYtbm9kZSBhIGJzKSkpXG5cbihkZWZuIGZpcnN0LXJvdy13aWxkY2FyZHMtY2FzZSBcbiAgXCJDYXNlIDI6IElmIHRoZSBmaXJzdCByb3cgaXMgY29uc3RpdHV0ZWQgYnkgd2lsZGNhcmRzIHRoZW4gbWF0Y2hpbmdcbiAgbWF0Y2hpbmcgYWx3YXlzIHN1Y2NlZWRzIGFuZCB5aWVsZHMgdGhlIGZpcnN0IGFjdGlvbi5cIlxuICBbcm93cyBvY3JzXVxuICAobGV0IFtmIChmaXJzdCByb3dzKVxuICAgICAgICBhICg6YWN0aW9uIGYpXG4gICAgICAgIGJzIChyb3ctYmluZGluZ3MgZiBvY3JzKV1cbiAgICAobGVhZi1ub2RlIGEgYnMpKSlcblxuOzsgaWYgdGhlIGZpcnN0IHBhdHRlcm4gaW4gdGhlIGZpcnN0IGNvbHVtbiBpcyBhXG47OyBwc2V1ZG8tcGF0dGVybiwgZXhwYW5kIHVudGlsIGl0IGlzbid0LCBsb29raW5nIGF0XG47OyBhbnkgcm93cyBiZXlvbmQgdGhlIGZpcnN0IGNhdXNlcyBwcm9ibGVtcyBmb3Jcbjs7IGZuIGFwcGxpY2F0aW9uIHBhdHRlcm5cbjs7IFRPRE86IGNvbCBpcyBhbHdheXMgWkVSTyAtIHRoaXMgaXMgY29uZnVzaW5nXG47OyB0aGF0IGl0IHRha2VzIGNvbCBhcyBhbiBhcmd1bWVudCwgZml4IC0gRGF2aWRcblxuKGRlZm4gZXhwYW5kLW1hdHJpeCBbbWF0cml4IGNvbF1cbiAgKGxvb3AgW21hdHJpeCBtYXRyaXhdXG4gICAgKGxldCBbcCAoZmlyc3QgKGNvbHVtbiBtYXRyaXggY29sKSldXG4gICAgICAoaWYgKHBzZXVkby1wYXR0ZXJuPyBwKVxuICAgICAgICAocmVjdXIgKHNwZWNpYWxpemUgbWF0cml4IHApKVxuICAgICAgICBtYXRyaXgpKSkpXG5cbihkZWZuIHNwbGl0LW1hdHJpeCBbbWF0cml4XVxuICAobWF0cml4LXNwbGl0dGVyIG1hdHJpeClcbiAgI18oaWYgKG5vbi1sb2NhbC1saXRlcmFsLXBhdHRlcm4/IChmZmlyc3QgKHJvd3MgbWF0cml4KSkpXG4gICAgOzsgbGl0ZXJhbCB0ZXN0aW5nIGJhc2VkIG9uIGVxdWFsaXR5IGNhbiBkbyB3L29cbiAgICA7OyBiYWNrdHJhY2tpbmcgZm9yIGFsbCBhZGphY2VudCBsaXRlcmFsIGN0b3JzIGluIGEgY29sdW1uXG4gICAgKGxpdGVyYWwtY2FzZS1tYXRyaXgtc3BsaXR0ZXIgbWF0cml4KVxuICAgIChtYXRyaXgtc3BsaXR0ZXIgbWF0cml4KSlcbiAgKVxuXG4oZGVmbiBmaXJzdC1jb2x1bW4tY2hvc2VuLWNhc2UgXG4gIFwiQ2FzZSAzYTogVGhlIGZpcnN0IGNvbHVtbiBpcyBjaG9zZW4uIENvbXB1dGUgYW5kIHJldHVybiBhXG4gIHN3aXRjaC9iaW5kIG5vZGUgd2l0aCBhIGRlZmF1bHQgbWF0cml4IGNhc2VcIlxuICBbbWF0cml4IGNvbCBvY3JzXVxuICAobGV0IFtleHBhbmRlZCAgICAgICAgKGV4cGFuZC1tYXRyaXggbWF0cml4IGNvbClcbiAgICAgICAgb2NycyAgICAgICAgICAgIChvY2N1cnJlbmNlcyBleHBhbmRlZClcbiAgICAgICAgW1MgRCA6YXMgc3BsaXRdIChzcGxpdC1tYXRyaXggZXhwYW5kZWQpXVxuICAgIChpZi1ub3QgKnJlY3VyLXByZXNlbnQqXG4gICAgICAoc3dpdGNoLW5vZGUgKG9jcnMgY29sKVxuICAgICAgICAoY2FzZXMgUylcbiAgICAgICAgKGRlZmF1bHQtY2FzZSBEKSlcbiAgICAgIChsZXQgW25ldy1zdGFjayAobGFzdCBzcGxpdCldXG4gICAgICAgIChzd2l0Y2gtbm9kZSAob2NycyBjb2wpXG4gICAgICAgICAgKGlmLW5vdCAoaWRlbnRpY2FsPyAqYmFja3RyYWNrLXN0YWNrKiBuZXctc3RhY2spXG4gICAgICAgICAgICAoYmluZGluZyBbKmJhY2t0cmFjay1zdGFjayogbmV3LXN0YWNrXVxuICAgICAgICAgICAgICAoY2FzZXMgUykpXG4gICAgICAgICAgICAoY2FzZXMgUykpXG4gICAgICAgICAgKGlmIChhbmQgKHNlcSAqYmFja3RyYWNrLXN0YWNrKilcbiAgICAgICAgICAgICAgICAgICAoaWRlbnRpY2FsPyAocGVlayAqYmFja3RyYWNrLXN0YWNrKikgRCkpXG4gICAgICAgICAgICAoYmluZGluZyBbKmJhY2t0cmFjay1zdGFjayogKHBvcCAqYmFja3RyYWNrLXN0YWNrKildXG4gICAgICAgICAgICAgIChkZWZhdWx0LWNhc2UgRCkpXG4gICAgICAgICAgICAoZGVmYXVsdC1jYXNlIEQpKSkpKSkpXG5cbihkZWZuIG90aGVyLWNvbHVtbi1jaG9zZW4tY2FzZSBcbiAgXCJDYXNlIDNiOiBBIGNvbHVtbiBvdGhlciB0aGFuIHRoZSBmaXJzdCBpcyBjaG9zZW4uIFN3YXAgY29sdW1uIFxuY29sIHdpdGggdGhlIGZpcnN0IGNvbHVtbiBhbmQgY29tcGlsZSB0aGUgcmVzdWx0XCJcbiAgW21hdHJpeCBjb2xdXG4gIChjb21waWxlIChzd2FwIG1hdHJpeCBjb2wpKSlcblxuOzsgUmV0dXJuIGEgY29sdW1uIG51bWJlciBvZiBhIGNvbHVtbiB3aGljaCBjb250YWlucyBhdCBsZWFzdFxuOzsgb25lIG5vbi13aWxkY2FyZCBjb25zdHJ1Y3RvclxuKGRlZm4gY2hvb3NlLWNvbHVtbiBbbWF0cml4XVxuICAobmVjZXNzYXJ5LWNvbHVtbiBtYXRyaXgpKVxuXG4oZGVmbiBjb21waWxlIFt7OmtleXMgW3Jvd3Mgb2Nyc10gOmFzIHBtfV1cbiAgKGNvbmRcbiAgICAqcm9vdCpcbiAgICAoYmluZGluZyBbKnJvb3QqIGZhbHNlXVxuICAgICAgKHJvb3QtYmluZC1ub2RlIHBtKSlcblxuICAgIChlbXB0eT8gcm93cylcbiAgICAoZW1wdHktcm93cy1jYXNlKVxuXG4gICAgKGVtcHR5LXJvdz8gKGZpcnN0IHJvd3MpKVxuICAgIChmaXJzdC1yb3ctZW1wdHktY2FzZSByb3dzIChmaXJzdCBvY3JzKSlcblxuICAgIChhbGwtd2lsZGNhcmRzPyAoZmlyc3Qgcm93cykpXG4gICAgKGZpcnN0LXJvdy13aWxkY2FyZHMtY2FzZSByb3dzIG9jcnMpXG5cbiAgICA6ZWxzZVxuICAgIChsZXQgW2NvbCAoY2hvb3NlLWNvbHVtbiBwbSldXG4gICAgICAoaWYgKGZpcnN0LWNvbHVtbj8gY29sKVxuICAgICAgICAoZmlyc3QtY29sdW1uLWNob3Nlbi1jYXNlIHBtIGNvbCBvY3JzKVxuICAgICAgICAob3RoZXItY29sdW1uLWNob3Nlbi1jYXNlIHBtIGNvbCkpKSkpXG5cbihkZWZyZWNvcmQgUGF0dGVybk1hdHJpeCBbcm93cyBvY3JzXVxuICBJVmVjTW9kXG4gIChkcm9wLW50aCBbXyBpXVxuICAgIChsZXQgW25yb3dzICh2ZWMgKG1hcCAjKGRyb3AtbnRoICUgaSkgcm93cykpXVxuICAgICAgKFBhdHRlcm5NYXRyaXguIG5yb3dzIG9jcnMpKSlcblxuICA7OyBTd2FwIGNvbHVtbiBudW1iZXIgaWR4IHdpdGggdGhlIGZpcnN0IGNvbHVtblxuICAoc3dhcCBbXyBpZHhdXG4gICAgKGxldCBbbnJvd3MgKHZlYyAobWFwICMoc3dhcCAlIGlkeCkgcm93cykpXVxuICAgICAgKFBhdHRlcm5NYXRyaXguIG5yb3dzIChzd2FwIG9jcnMgaWR4KSkpKSlcblxuKGRlZm4gcGF0dGVybi1tYXRyaXggW3Jvd3Mgb2Nyc10gIFxuICAobGV0IFtyb3dzIChpZiAodmVjdG9yPyByb3dzKSByb3dzIChpbnRvIFtdIHJvd3MpKVxuICAgICAgICBvY3JzIChpZiAodmVjdG9yPyBvY3JzKSBvY3JzIChpbnRvIFtdIG9jcnMpKV1cbiAgICAoUGF0dGVybk1hdHJpeC4gcm93cyBvY3JzKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIyBEZWZhdWx0IE1hdHJpeCBTcGVjaWFsaXphdGlvblxuXG47OyBOT1RFOiBub3Qgc3VyZSB3aHkgd2UgbmVlZCBncm91cGFibGU/IGhlcmUgZm9yIHRoaXMgdG8gd29yayAtIERhdmlkXG5cbihkZWZuIGRlZmF1bHQtc3BlY2lhbGl6ZS1tYXRyaXggW3AgbWF0cml4XVxuICAobGV0IFtyb3dzIChyb3dzIG1hdHJpeClcbiAgICAgICAgb2NycyAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICBmb2NyIChmaXJzdCBvY3JzKVxuICAgICAgICBucm93cyAoLT4+IHJvd3NcbiAgICAgICAgICAgICAgICAobWFwICMoZHJvcC1udGgtYmluZCAlIDAgZm9jcikpXG4gICAgICAgICAgICAgICAgdmVjKVxuICAgICAgICBub2NycyAoZHJvcC1udGggb2NycyAwKV1cbiAgICAocGF0dGVybi1tYXRyaXggbnJvd3Mgbm9jcnMpKSlcblxuOzsgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgUGF0dGVybnNcbjs7XG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIyBXaWxkY2FyZCBQYXR0ZXJuXG47OyBcbjs7IEEgd2lsZGNhcmQgcGF0dGVybiBhY2NlcHRzIGFueSB2YWx1ZS5cbjs7XG47OyBJbiBwcmFjdGljZSwgdGhlIERBRyBjb21waWxhdGlvbiBlbGltaW5hdGVzIGFueSB3aWxkY2FyZCBwYXR0ZXJucy5cblxuKGRlZnR5cGUgV2lsZGNhcmRQYXR0ZXJuIFtzeW0gbmFtZWQgX21ldGFdXG4gIE9iamVjdFxuICAoZXF1YWxzIFtfIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBXaWxkY2FyZFBhdHRlcm4gb3RoZXIpXG4gICAgICAgICAoaWYgbmFtZWRcbiAgICAgICAgICAgKD0gc3ltICg6c3ltIG90aGVyKSlcbiAgICAgICAgICAgKG5vdCAoOm5hbWVkIG90aGVyKSkpKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JT2JqIDpjbGpzIElXaXRoTWV0YSlcbiAgKCM/KDpjbGogd2l0aE1ldGEgOmNsanMgLXdpdGgtbWV0YSkgW18gbmV3LW1ldGFdXG4gICAgKFdpbGRjYXJkUGF0dGVybi4gc3ltIG5hbWVkIG5ldy1tZXRhKSlcbiAgIz8oOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpW19dXG4gICAgX21ldGEpXG4gIDtUT0RPIFllaG9uYXRoYW4gLSB3aHkgZG8gd2UgaGF2ZSB0byBpbmNsdWRlIHRoYXQgaW4gY2xqcz8gc2VlIGRhZy1jbGF1c2UtdG8tY2xqIFdpbGRjYXJkUGF0dGVybiBoYXMgdG8gaW1wbGVtZW10cyBJUGF0dGVybkNvbXBpbGVcbiAgSVBhdHRlcm5Db21waWxlXG4gICh0by1zb3VyY2UqIFt0aGlzIG9jcl1cbiAgICA7bWF0Y2hlcyBldmVyeXRoaW5nXG4gICAgdHJ1ZSlcbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbmlsKSlcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOnN5bSBzeW1cbiAgICAgIDpuYW1lZCBuYW1lZFxuICAgICAgbm90LWZvdW5kKSkpXG5cbihkZWZuIHdpbGRjYXJkLXBhdHRlcm5cbiAgKFtdICh3aWxkY2FyZC1wYXR0ZXJuICdfKSlcbiAgKFtzeW1dIFxuICAgIHs6cHJlIFsoc3ltYm9sPyBzeW0pXX1cbiAgICAoaWYgKD0gc3ltICdfKVxuICAgICAgKFdpbGRjYXJkUGF0dGVybi4gKGdlbnN5bSkgZmFsc2UgbmlsKVxuICAgICAgKFdpbGRjYXJkUGF0dGVybi4gc3ltIHRydWUgbmlsKSkpKVxuXG4oZGVmbiB3aWxkY2FyZC1wYXR0ZXJuPyBbeF1cbiAgKGluc3RhbmNlPyBXaWxkY2FyZFBhdHRlcm4geCkpXG5cbjs7IExvY2FsIGJpbmRpbmdzIGluIHBhdHRlcm4gbWF0Y2hpbmcgYXJlIGVtdWxhdGVkIGJ5IHVzaW5nIG5hbWVkIHdpbGRjYXJkcy5cbjs7IFNlZSBjbG9qdXJlLmxhbmcuU3ltYm9sIGRpc3BhdGNoIGZvciBgZW1pdC1wYXR0ZXJuYCBcblxuKGRlZm4gbmFtZWQtd2lsZGNhcmQtcGF0dGVybj8gW3hdXG4gIChhbmQgKGluc3RhbmNlPyBXaWxkY2FyZFBhdHRlcm4geCkgKDpuYW1lZCB4KSkpXG5cbiM/KDpjbGogKGRlZm1ldGhvZCBwcmludC1tZXRob2QgV2lsZGNhcmRQYXR0ZXJuIFtwIF5Xcml0ZXIgd3JpdGVyXVxuICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPFdpbGRjYXJkUGF0dGVybjogXCIgKDpzeW0gcCkgXCI+XCIpKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIyBMaXRlcmFsIFBhdHRlcm5cbjs7XG47OyBBIGxpdGVyYWwgcGF0dGVybiBpcyBub3QgZnVydGhlciBzcGxpdCBpbnRvIGZ1cnRoZXIgcGF0dGVybnMgaW4gdGhlIERBR1xuOzsgY29tcGlsYXRpb24gcGhhc2UuXG47O1xuOzsgSXQgXCJsaXRlcmFsbHlcIiBtYXRjaGVzIGEgZ2l2ZW4gb2NjdXJyZW5jZS5cblxuKGRlZnR5cGUgTGl0ZXJhbFBhdHRlcm4gW2wgX21ldGFdXG4gIE9iamVjdFxuICAodG9TdHJpbmcgW19dXG4gICAgKGlmIChuaWw/IGwpXG4gICAgICBcIm5pbFwiXG4gICAgICAocHItc3RyIGwpKSlcbiAgKGVxdWFscyBbXyBvdGhlcl1cbiAgICAoYW5kIChpbnN0YW5jZT8gTGl0ZXJhbFBhdHRlcm4gb3RoZXIpICg9IGwgKDpsIG90aGVyKSkpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpIFtfXSBfbWV0YSlcblxuICAjPyg6Y2xqcyBJV2l0aE1ldGEpXG4gICgjPyg6Y2xqIHdpdGhNZXRhIDpjbGpzIC13aXRoLW1ldGEpIFtfIG5ldy1tZXRhXVxuICAgIChMaXRlcmFsUGF0dGVybi4gbCBuZXctbWV0YSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbmlsKSlcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOmwgbFxuICAgICAgOjp0YWcgOjpsaXRlcmFsXG4gICAgICBub3QtZm91bmQpKVxuXG4gIElQYXR0ZXJuQ29tcGlsZVxuICAodG8tc291cmNlKiBbdGhpcyBvY3JdXG4gICAgKGNvbmRcbiAgICAgKD0gbCAoKSlcbiAgICAgYChlbXB0eT8gfm9jcilcblxuICAgICAoYW5kIChzeW1ib2w/IGwpIChub3QgKC0+IGwgbWV0YSA6bG9jYWwpKSlcbiAgICAgYCg9IH5vY3IgJ35sKVxuXG4gICAgICM/QCg6Y2xqc1xuICAgICAgICAgICgob3IgKG51bWJlcj8gbCkgKHN0cmluZz8gbClcbiAgICAgICAgICAgICAgICh0cnVlPyBsKSAoZmFsc2U/IGwpXG4gICAgICAgICAgICAgICAobmlsPyBsKSlcbiAgICAgICAgICAgYChpZGVudGljYWw/IH5vY3IgfmwpXG5cbiAgICAgICAgICAgKGtleXdvcmQ/IGwpXG4gICAgICAgICAgIGAoY2xqcy5jb3JlL2tleXdvcmQtaWRlbnRpY2FsPyB+b2NyIH5sKSkpXG5cbiAgICAgIDplbHNlIGAoPSB+b2NyIH5sKSkpKVxuXG4oZGVmbiBsaXRlcmFsLXBhdHRlcm4gW2xdXG4gIChMaXRlcmFsUGF0dGVybi4gbCAobWV0YSBsKSkpXG5cbihkZWZuIGxpdGVyYWwtcGF0dGVybj8gW3hdXG4gIChpbnN0YW5jZT8gTGl0ZXJhbFBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBMaXRlcmFsUGF0dGVybiBbcCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgICgud3JpdGUgd3JpdGVyIChzdHIgXCI8TGl0ZXJhbFBhdHRlcm46IFwiIHAgXCI+XCIpKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIFNlcSBQYXR0ZXJuXG47O1xuOzsgQSBTZXEgUGF0dGVybiBpcyBpbnRlbmRlZCBmb3IgbWF0Y2hpbmcgYHNlcWBzLiAgVGhleSBhcmUgc3BsaXQgaW50b1xuOzsgbXVsdGlwbGUgcGF0dGVybnMsIHRlc3RpbmcgZWFjaCBlbGVtZW50IG9mIHRoZSBzZXEgaW4gb3JkZXIuXG5cbihkZWNsYXJlIHNlcS1wYXR0ZXJuPyByZXN0LXBhdHRlcm4/IHNlcS1wYXR0ZXJuKVxuXG4oZGVmbiBzcGVjaWFsaXplLXNlcS1wYXR0ZXJuLXJlc3Qtcm93IFtmb2NyIHJvd11cbiAgKGxldCBbcCAoZmlyc3Qgcm93KVxuICAgICAgICBwIChpZiAoc2VxLXBhdHRlcm4/IHApXG4gICAgICAgICAgICAoOnAgKGZpcnN0ICg6cyBwKSkpIDs7IHVud3JhcCByZXN0IHBhdHRlcm5cbiAgICAgICAgICAgICh3aWxkY2FyZC1wYXR0ZXJuKSldXG4gICAgKHByZXBlbmQgKGRyb3AtbnRoLWJpbmQgcm93IDAgZm9jcikgcCkpKVxuXG4oZGVmbiBzcGVjaWFsaXplLXNlcS1wYXR0ZXJuLXJlc3QtbWF0cml4IFtyb3dzIGZvY3JdXG4gICgtPj4gcm93c1xuICAgIChtYXAgKHBhcnRpYWwgc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1yZXN0LXJvdyBmb2NyKSlcbiAgICB2ZWMpKVxuXG4oZGVmbiBzZXEtcGF0dGVybi1tYXRyaXgtcmVzdC1vY3JzIFtvY3JzIGZvY3JdIG9jcnMpXG5cbihkZWZuIHNwZWNpYWxpemUtc2VxLXBhdHRlcm4tcm93IFtmb2NyIHJvd11cbiAgKGxldCBbcCAoZmlyc3Qgcm93KVxuICAgICAgICBbaCB0XSAoaWYgKHNlcS1wYXR0ZXJuPyBwKVxuICAgICAgICAgICAgICAgIChsZXQgW1toICYgdF0gKDpzIHApXG4gICAgICAgICAgICAgICAgICAgICAgdCAoY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAoZW1wdHk/IHQpIChsaXRlcmFsLXBhdHRlcm4gKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChyZXN0LXBhdHRlcm4/IChmaXJzdCB0KSkgKDpwIChmaXJzdCB0KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmVsc2UgKHNlcS1wYXR0ZXJuIHQpKV1cbiAgICAgICAgICAgICAgICAgIFtoIHRdKVxuICAgICAgICAgICAgICAgIFsod2lsZGNhcmQtcGF0dGVybikgKHdpbGRjYXJkLXBhdHRlcm4pXSldXG4gICAgKHJlZHVjZSBwcmVwZW5kIChkcm9wLW50aC1iaW5kIHJvdyAwIGZvY3IpIFt0IGhdKSkpXG5cbihkZWZuIHNwZWNpYWxpemUtc2VxLXBhdHRlcm4tbWF0cml4IFtyb3dzIGZvY3JdXG4gICgtPj4gcm93c1xuICAgIChtYXAgKHBhcnRpYWwgc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1yb3cgZm9jcikpXG4gICAgdmVjKSlcblxuKGRlZm4gc2VxLXBhdHRlcm4tbWF0cml4LW9jcnMgW29jcnMgZm9jcl1cbiAgKGxldCBbc2VxLXN5bSAob3IgKC0+IGZvY3IgbWV0YSA6c2VxLXN5bSkgZm9jcilcbiAgICAgICAgc3ltLW1ldGEgezpvY2N1cnJlbmNlLXR5cGUgOnNlcVxuICAgICAgICAgICAgICAgICAgOnNlcS1zeW0gZm9jcn1cbiAgICAgICAgaHN5bSAoZ2Vuc3ltIChzdHIgKG5hbWUgc2VxLXN5bSkgXCJfaGVhZF9fXCIpKVxuICAgICAgICBoc3ltICh3aXRoLW1ldGEgaHN5bVxuICAgICAgICAgICAgICAgKGFzc29jIHN5bS1tZXRhIDpiaW5kLWV4cHIgYChmaXJzdCB+Zm9jcikpKVxuICAgICAgICB0c3ltIChnZW5zeW0gKHN0ciAobmFtZSBzZXEtc3ltKSBcIl90YWlsX19cIikpXG4gICAgICAgIHRzeW0gKHdpdGgtbWV0YSB0c3ltXG4gICAgICAgICAgICAgICAoYXNzb2Mgc3ltLW1ldGEgOmJpbmQtZXhwciBgKHJlc3QgfmZvY3IpKSldXG4gICAgKGludG8gW2hzeW0gdHN5bV0gKGRyb3AtbnRoIG9jcnMgMCkpKSlcblxuKGRlZnR5cGUgU2VxUGF0dGVybiBbcyBfbWV0YV1cbiAgT2JqZWN0XG4gICh0b1N0cmluZyBbX11cbiAgICAoc3RyIHMpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpIFtfXSBfbWV0YSlcbiAgIz8oOmNsanMgSVdpdGhNZXRhKVxuICAoIz8oOmNsaiB3aXRoTWV0YSA6Y2xqcyAtd2l0aC1tZXRhKSBbXyBuZXctbWV0YV1cbiAgICAoU2VxUGF0dGVybi4gcyBuZXctbWV0YSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKVt0aGlzIGtdXG4gICAgKCM/KDpjbGogLnZhbEF0IDpjbGpzIC1sb29rdXApIHRoaXMgayBuaWwpKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKVt0aGlzIGsgbm90LWZvdW5kXVxuICAgIChjYXNlIGtcbiAgICAgIDpzIHNcbiAgICAgIDo6dGFnIDo6c2VxXG4gICAgICBub3QtZm91bmQpKVxuXG4gIElQYXR0ZXJuQ29tcGlsZVxuICAodG8tc291cmNlKiBbdGhpcyBvY3JdXG4gICAgKGlmIChhbmQgKD49IChjb3VudCBzKSAxKVxuICAgICAgICAgICAgIChub3QgKHJlc3QtcGF0dGVybj8gKGZpcnN0IHMpKSkpXG4gICAgICBgKGFuZCAob3IgKHNlcT8gfm9jcikgKHNlcXVlbnRpYWw/IH5vY3IpKSAoc2VxIH5vY3IpKVxuICAgICAgYChvciAoc2VxPyB+b2NyKSAoc2VxdWVudGlhbD8gfm9jcikpKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBvY3JzICAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIGZvY3IgIChmaXJzdCBvY3JzKV1cbiAgICAgIChpZi1ub3QgKHJlc3QtcGF0dGVybj8gKGZpcnN0IHMpKVxuICAgICAgICAobGV0IFtucm93cyAoc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1tYXRyaXggcm93cyBmb2NyKVxuICAgICAgICAgICAgICBub2NycyAoc2VxLXBhdHRlcm4tbWF0cml4LW9jcnMgb2NycyBmb2NyKV1cbiAgICAgICAgICAocGF0dGVybi1tYXRyaXggbnJvd3Mgbm9jcnMpKVxuICAgICAgICAobGV0IFtucm93cyAoc3BlY2lhbGl6ZS1zZXEtcGF0dGVybi1yZXN0LW1hdHJpeCByb3dzIGZvY3IpXG4gICAgICAgICAgICAgIG5vY3JzIChzZXEtcGF0dGVybi1tYXRyaXgtcmVzdC1vY3JzIG9jcnMgZm9jcildXG4gICAgICAgICAgKHBhdHRlcm4tbWF0cml4IG5yb3dzIG5vY3JzKSkpKSkpXG5cbihkZWZuIF5TZXFQYXR0ZXJuIHNlcS1wYXR0ZXJuIFtzXVxuICB7OnByZSBbKHNlcXVlbnRpYWw/IHMpXG4gICAgICAgICAobm90IChlbXB0eT8gcykpXX1cbiAgKFNlcVBhdHRlcm4uIHMgbmlsKSlcblxuKGRlZm4gc2VxLXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IFNlcVBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBTZXFQYXR0ZXJuIFtwIF5Xcml0ZXIgd3JpdGVyXVxuICAgICAgKC53cml0ZSB3cml0ZXIgKHN0ciBcIjxTZXFQYXR0ZXJuOiBcIiBwIFwiPlwiKSkpKVxuXG47OyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuOzsgIyBSZXN0IFBhdHRlcm5cbjs7IFxuOzsgQSByZXN0IHBhdHRlcm4gcmVwcmVzZW50cyB0aGUgY2FzZSBvZiBtYXRjaGluZyBbMiAzXSBpbiBbMSAmIFsyIDNdXVxuOzsgSXQgaXMgYW4gaW1wbGVtZW50YXRpb24gZGV0YWlsIG9mIG90aGVyIHBhdHRlcm5zLCBsaWtlIFNlcVBhdHRlcm4uXG47O1xuXG4oZGVmcmVjb3JkIFJlc3RQYXR0ZXJuIFtwXSlcblxuKGRlZm4gcmVzdC1wYXR0ZXJuIFtwXVxuICAoYXNzb2MgKFJlc3RQYXR0ZXJuLiBwKSA6OnRhZyA6OnJlc3QpKVxuXG4oZGVmbiByZXN0LXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IFJlc3RQYXR0ZXJuIHgpKVxuXG4jPyg6Y2xqXG4gICAgKGRlZm1ldGhvZCBwcmludC1tZXRob2QgUmVzdFBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPFJlc3RQYXR0ZXJuOiBcIiAoOnAgcCkgXCI+XCIpKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIE1hcCBQYXR0ZXJuXG47OyBcbjs7IE1hcCBwYXR0ZXJucyBtYXRjaCBtYXBzLCBvciBhbnkgb2JqZWN0IHRoYXQgc2F0aXNmaWVzIElNYXRjaExvb2t1cC5cbjs7XG5cbihkZWZuIHNwZWNpYWxpemUtbWFwLWtleS1wYXR0ZXJuLW1hdHJpeCBbcm93c11cbiAgKGxldCBbcCAoOnAgKGZmaXJzdCByb3dzKSldXG4gICAgKC0+PiByb3dzXG4gICAgICAobWFwICMoZHJvcC1udGggJSAwKSlcbiAgICAgIChtYXAgIyhwcmVwZW5kICUgcCkpXG4gICAgICB2ZWMpKSlcblxuKGRlZnJlY29yZCBNYXBLZXlQYXR0ZXJuIFtwXVxuICBJRXhpc3RlbnRpYWxQYXR0ZXJuXG5cbiAgSVBhdHRlcm5Db21waWxlXG4gICh0by1zb3VyY2UqIFt0aGlzIG9jcl1cbiAgICBgKG5vdD0gfm9jciA6Om5vdC1mb3VuZCkpXG5cbiAgSVNwZWNpYWxpemVNYXRyaXhcbiAgKHNwZWNpYWxpemUtbWF0cml4IFt0aGlzIG1hdHJpeF1cbiAgICAobGV0IFtyb3dzICAocm93cyBtYXRyaXgpXG4gICAgICAgICAgb2NycyAgKG9jY3VycmVuY2VzIG1hdHJpeClcbiAgICAgICAgICBucm93cyAoc3BlY2lhbGl6ZS1tYXAta2V5LXBhdHRlcm4tbWF0cml4IHJvd3MpXVxuICAgICAgKHBhdHRlcm4tbWF0cml4IG5yb3dzIG9jcnMpKSkpXG5cbihkZWZuIG1hcC1rZXktcGF0dGVybiBbcF1cbiAgKGFzc29jIChNYXBLZXlQYXR0ZXJuLiBwKSA6OnRhZyA6Om1hcC1rZXkpKVxuXG4oZGVmbiBtYXAta2V5LXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IE1hcEtleVBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBNYXBLZXlQYXR0ZXJuIFtwIF5Xcml0ZXIgd3JpdGVyXVxuICAgICAgKC53cml0ZSB3cml0ZXIgKHN0ciBcIjxNYXBLZXlQYXR0ZXJuOiBcIiAoOnAgcCkgXCI+XCIpKSkpXG5cbihkZWNsYXJlIG1hcC1wYXR0ZXJuPyBndWFyZC1wYXR0ZXJuKVxuXG4oZGVmbiByb3cta2V5cyBbcm93IGVudl1cbiAgKGxldCBbcCAgICAoZmlyc3Qgcm93KVxuICAgICAgICBvbmx5ICgtPiBwIG1ldGEgOm9ubHkpXVxuICAgICh3aGVuIChhbmQgKG5vdCBAKDpvbmx5PyBlbnYpKVxuICAgICAgICAgICAgICAgKHNlcSBvbmx5KSlcbiAgICAgIChyZXNldCEgKDpvbmx5PyBlbnYpIHRydWUpKVxuICAgIFsoc2V0IChrZXlzICg6bSBwKSkpXG4gICAgIChzZXQgb25seSldKSlcblxuKGRlZm4gZ2V0LWFsbC1rZXlzIFtyb3dzIGVudl1cbiAgKC0+PiByb3dzXG4gICAgKHJlbW92ZSAoY29tcCB3aWxkY2FyZC1wYXR0ZXJuPyBmaXJzdCkpXG4gICAgKG1hcCAjKHJvdy1rZXlzICUgZW52KSlcbiAgICAocmVkdWNlIGNvbmNhdClcbiAgICAocmVkdWNlIHNldC91bmlvbiAje30pKSlcblxuKGRlZm4gd3JhcC12YWx1ZXMgW21dXG4gICgtPj4gbVxuICAgIChtYXAgKGZuIFtbayB2XV1cbiAgICAgICAgICAgW2sgKGlmICh3aWxkY2FyZC1wYXR0ZXJuPyB2KVxuICAgICAgICAgICAgICAgIChtYXAta2V5LXBhdHRlcm4gdikgdildKSlcbiAgICAoaW50byB7fSkpKVxuXG4oZGVmbiBnZXQtb2NyLW1hcFxuICBbcCB7OmtleXMgW29ubHkgYWxsLWtleXMgd2MtbWFwXX1dXG4gIChpZiAobWFwLXBhdHRlcm4/IHApXG4gICAgKG1lcmdlXG4gICAgICAod2hlbiBvbmx5XG4gICAgICAgICh6aXBtYXAgYWxsLWtleXNcbiAgICAgICAgICAocmVwZWF0IChsaXRlcmFsLXBhdHRlcm4gOjpub3QtZm91bmQpKSkpXG4gICAgICB3Yy1tYXAgKHdyYXAtdmFsdWVzICg6bSBwKSkpXG4gICAgd2MtbWFwKSlcblxuKGRlZm4gc3BlY2lhbGl6ZS1tYXAtcGF0dGVybi1yb3dcbiAgW3JvdyB7OmtleXMgW2FsbC1rZXlzIG9ubHk/IGZvY3JdIDphcyBlbnZ9XVxuICAobGV0IFtwICAgICAgIChmaXJzdCByb3cpXG4gICAgICAgIG9ubHkgICAgKHNlcSAoLT4gcCBtZXRhIDpvbmx5KSlcbiAgICAgICAgb2NyLW1hcCAoZ2V0LW9jci1tYXAgcCAoYXNzb2MgZW52IDpvbmx5IG9ubHkpKVxuICAgICAgICBwcyAgICAgIChkb2FsbCAobWFwIG9jci1tYXAgYWxsLWtleXMpKVxuICAgICAgICBwcyAgICAgIChpZiBAb25seT9cbiAgICAgICAgICAgICAgICAgIChpZiBvbmx5XG4gICAgICAgICAgICAgICAgICAgIChsZXQgW2EgKHdpdGgtbWV0YSAoZ2Vuc3ltKSB7OnRhZyAnamF2YS51dGlsLk1hcH0pXVxuICAgICAgICAgICAgICAgICAgICAgIChjb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAoZ3VhcmQtcGF0dGVybiAod2lsZGNhcmQtcGF0dGVybilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKHNldCBbIz8oOmNsanNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKGZuIFt+YV0gKD0gKHNldCAoa2V5cyB+YSkpICN7fkBvbmx5fSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgKGZuIFt+YV0gKD0gKC5rZXlTZXQgfmEpICN7fkBvbmx5fSkpKV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgcHMpKVxuICAgICAgICAgICAgICAgICAgICAoY29ucyAod2lsZGNhcmQtcGF0dGVybikgcHMpKVxuICAgICAgICAgICAgICAgICAgcHMpXVxuICAgIChyZWR1Y2UgcHJlcGVuZCAoZHJvcC1udGgtYmluZCByb3cgMCBmb2NyKSAocmV2ZXJzZSBwcykpKSlcblxuKGRlZm4gc3BlY2lhbGl6ZS1tYXAtcGF0dGVybi1tYXRyaXggW3Jvd3MgZW52XVxuICAodmVjIChtYXAgIyhzcGVjaWFsaXplLW1hcC1wYXR0ZXJuLXJvdyAlIGVudikgcm93cykpKVxuXG4oZGVmbiBnZW4tbWFwLXBhdHRlcm4tb2NyIFtvY3Iga11cbiAgKGdlbnN5bSAoc3RyIChuYW1lIG9jcikgXCJfXCIgKC5yZXBsYWNlIChuYW1lIGspIFwiLlwiIFwiX0RPVF9cIikgXCJfX1wiKSkpXG5cbihkZWZuIG1hcC1wYXR0ZXJuLW1hdHJpeC1vY3Itc3ltIFtrIGVudl1cbiAgKGxldCBbZm9jciAoOmZvY3IgZW52KVxuICAgICAgICBvY3IgIChnZXQtaW4gZW52IFs6b2Nycy1tYXAga10pXVxuICAgICh3aXRoLW1ldGEgb2NyXG4gICAgICB7Om9jY3VycmVuY2UtdHlwZSA6bWFwXG4gICAgICAgOmtleSBrXG4gICAgICAgOm1hcC1zeW0gZm9jclxuICAgICAgIDpiaW5kLWV4cHIgKHZhbC1hdC1leHByIGZvY3IgayA6Om5vdC1mb3VuZCl9KSkpXG5cbihkZWZuIG1hcC1wYXR0ZXJuLW1hdHJpeC1vY3JzIFtvY3JzIGVudl1cbiAgKGxldCBbZm9jciAgKDpmb2NyIGVudilcbiAgICAgICAgbW9jcnMgKG1hcCAjKG1hcC1wYXR0ZXJuLW1hdHJpeC1vY3Itc3ltICUgZW52KVxuICAgICAgICAgICAgICAgICg6YWxsLWtleXMgZW52KSlcbiAgICAgICAgbW9jcnMgKHZlY1xuICAgICAgICAgICAgICAgIChpZiBAKDpvbmx5PyBlbnYpXG4gICAgICAgICAgICAgICAgICAoY29ucyBmb2NyIG1vY3JzKVxuICAgICAgICAgICAgICAgICAgbW9jcnMpKV1cbiAgICAoaW50byBtb2NycyAoZHJvcC1udGggb2NycyAwKSkpKVxuXG4oZGVmdHlwZSBNYXBQYXR0ZXJuIFttIF9tZXRhXVxuICBPYmplY3RcbiAgKHRvU3RyaW5nIFtfXVxuICAgIChzdHIgbSBcIiA6b25seSBcIiAob3IgKDpvbmx5IF9tZXRhKSBbXSkpKVxuICAoZXF1YWxzIFtfIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBNYXBQYXR0ZXJuIG90aGVyKSAoPSBtICg6bSBvdGhlcikpKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JT2JqIDpjbGpzIElNZXRhKVxuICAoIz8oOmNsaiBtZXRhIDpjbGpzIC1tZXRhKSBbX10gX21ldGEpXG4gICM/KDpjbGpzIElXaXRoTWV0YSlcbiAgKCM/KDpjbGogd2l0aE1ldGEgOmNsanMgLXdpdGgtbWV0YSkgW18gbmV3LW1ldGFdXG4gICAgKE1hcFBhdHRlcm4uIG0gbmV3LW1ldGEpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklMb29rdXAgOmNsanMgSUxvb2t1cClcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMga11cbiAgICAoIz8oOmNsaiAudmFsQXQgOmNsanMgLWxvb2t1cCkgdGhpcyBrIG5pbCkpXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGsgbm90LWZvdW5kXVxuICAgIChjYXNlIGtcbiAgICAgIDptIG1cbiAgICAgIDo6dGFnIDo6bWFwXG4gICAgICBub3QtZm91bmQpKVxuXG4gIElQYXR0ZXJuQ29tcGlsZVxuICAodG8tc291cmNlKiBbdGhpcyBvY3JdXG4gICAgIz8oOmNsanMgYChzYXRpc2ZpZXM/IElMb29rdXAgfm9jcilcbiAgICAgICA6Y2xqIChjb25kXG4gICAgICAqbWF0Y2gtbG9va3VwKiAgYChvciAoIz8oOmNsaiBpbnN0YW5jZT8gOmNsanMgaW1wbGVtZW50cz8pICM/KDpjbGogY2xvanVyZS5sYW5nLklMb29rdXAgOmNsanMgSUxvb2t1cCkgfm9jcikgKHNhdGlzZmllcz8gSU1hdGNoTG9va3VwIH5vY3IpKVxuICAgICAgOmVsc2UgYChzYXRpc2ZpZXM/ICM/KDpjbGogY2xvanVyZS5sYW5nLklMb29rdXAgOmNsanMgSUxvb2t1cCkgfm9jcikpKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgICAgIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBvY3JzICAgICAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIGZvY3IgICAgIChmaXJzdCBvY3JzKVxuICAgICAgICAgIGVudiAgICAgIHs6Zm9jciBmb2NyXG4gICAgICAgICAgICAgICAgICAgIDpvbmx5PyAoYXRvbSBmYWxzZSl9XG4gICAgICAgICAgYWxsLWtleXMgKGdldC1hbGwta2V5cyByb3dzIGVudilcbiAgICAgICAgICBlbnYnICAgICAoYXNzb2MgZW52XG4gICAgICAgICAgICAgICAgICAgICA6YWxsLWtleXMgYWxsLWtleXNcbiAgICAgICAgICAgICAgICAgICAgIDp3Yy1tYXAgKHppcG1hcCBhbGwta2V5cyAocmVwZWF0ZWRseSB3aWxkY2FyZC1wYXR0ZXJuKSlcbiAgICAgICAgICAgICAgICAgICAgIDpvY3JzLW1hcCAoemlwbWFwIGFsbC1rZXlzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobWFwICMoZ2VuLW1hcC1wYXR0ZXJuLW9jciBmb2NyICUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbC1rZXlzKSkpXG4gICAgICAgICAgbnJvd3MgICAgKHNwZWNpYWxpemUtbWFwLXBhdHRlcm4tbWF0cml4IHJvd3MgZW52JylcbiAgICAgICAgICBub2NycyAgICAobWFwLXBhdHRlcm4tbWF0cml4LW9jcnMgb2NycyBlbnYnKV1cbiAgICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBub2NycykpKSlcblxuKGRlZm4gbWFwLXBhdHRlcm5cbiAgKFtdIChNYXBQYXR0ZXJuLiB7fSBuaWwpKVxuICAoW21dIHs6cHJlIFsobWFwPyBtKV19XG4gICAgIChNYXBQYXR0ZXJuLiBtIG5pbCkpKVxuXG4oZGVmbiBtYXAtcGF0dGVybj8gW3hdXG4gIChpbnN0YW5jZT8gTWFwUGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIE1hcFBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPE1hcFBhdHRlcm46IFwiIHAgXCI+XCIpKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyBWZWN0b3IgUGF0dGVyblxuOztcbjs7IFZlY3RvciBwYXR0ZXJucyBtYXRjaCBhbnkgU2VxdWVudGlhbCBkYXRhIHN0cnVjdHVyZS4gTm90ZSB0aGlzIG1lYW5zIHRoYXRcbjs7IHRoZSBsYXp5IHNlbWFudGljcyBtYXkgbWVhbiBwb29yZXIgcGVyZm9ybWFuY2UgZm9yIHNlcXVlbmNlcy5cblxuKGRlY2xhcmUgdmVjdG9yLXBhdHRlcm4/KVxuXG4oZGVmbiBjYWxjLXJlc3Q/LWFuZC1taW4tc2l6ZSBbcm93cyBlbnZdXG4gIChyZWR1Y2VcbiAgICAoZm4gW1tyZXN0PyBtaW4tc2l6ZV0gW3AgJiBwc11dXG4gICAgICAoaWYgKHZlY3Rvci1wYXR0ZXJuPyBwKVxuICAgICAgICBbKG9yIHJlc3Q/ICg6cmVzdD8gcCkpXG4gICAgICAgICAobWluIG1pbi1zaXplICg6c2l6ZSBwKSldXG4gICAgICAgIFtyZXN0PyBtaW4tc2l6ZV0pKVxuICAgIFtmYWxzZSAoLT4gZW52IDpmcCA6c2l6ZSldIHJvd3MpKVxuXG4oZGVmbiBzcGVjaWFsaXplLXZlY3Rvci1wYXR0ZXJuLXJvd1xuICBbcm93IHs6a2V5cyBbZm9jciBtaW4tc2l6ZV19XVxuICAobGV0IFtwICAoZmlyc3Qgcm93KVxuICAgICAgICBwcyAoY29uZFxuICAgICAgICAgICAgICh2ZWN0b3ItcGF0dGVybj8gcCkgKHNwbGl0IHAgbWluLXNpemUpXG4gICAgICAgICAgICAgOmVsc2UgWyh3aWxkY2FyZC1wYXR0ZXJuKSAod2lsZGNhcmQtcGF0dGVybildKV1cbiAgICAocmVkdWNlIHByZXBlbmQgKGRyb3AtbnRoLWJpbmQgcm93IDAgZm9jcikgKHJldmVyc2UgcHMpKSkpXG5cbihkZWZuIHNwZWNpYWxpemUtdmVjdG9yLXBhdHRlcm4tcm93LW5vbi1yZXN0XG4gIFtyb3cgezprZXlzIFtmb2NyIG1pbi1zaXplXX1dXG4gIChsZXQgW3AgIChmaXJzdCByb3cpXG4gICAgICAgIHBzIChpZiAodmVjdG9yLXBhdHRlcm4/IHApXG4gICAgICAgICAgICAgKHJldmVyc2UgKDp2IHApKVxuICAgICAgICAgICAgIChyZXBlYXRlZGx5IG1pbi1zaXplIHdpbGRjYXJkLXBhdHRlcm4pKV1cbiAgICAocmVkdWNlIHByZXBlbmQgKGRyb3AtbnRoLWJpbmQgcm93IDAgZm9jcikgcHMpKSlcblxuKGRlZm4gc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1tYXRyaXggW3Jvd3MgZW52XVxuICAoaWYgKDpyZXN0PyBlbnYpXG4gICAgKHZlYyAobWFwICMoc3BlY2lhbGl6ZS12ZWN0b3ItcGF0dGVybi1yb3cgJSBlbnYpIHJvd3MpKVxuICAgICh2ZWMgKG1hcCAjKHNwZWNpYWxpemUtdmVjdG9yLXBhdHRlcm4tcm93LW5vbi1yZXN0ICUgZW52KSByb3dzKSkpKVxuXG4oZGVmbiB2ZWN0b3ItcGF0dGVybi1vY3Itc3ltXG4gIFt7OmtleXMgW3BhdCBmb2NyIHRhZ119IGldXG4gIChsZXQgW29jciAoZ2Vuc3ltIChzdHIgKG5hbWUgZm9jcikgXCJfXCIgaSBcIl9fXCIpKV1cbiAgICAod2l0aC1tZXRhIG9jclxuICAgICAgezpvY2N1cnJlbmNlLXR5cGUgdGFnXG4gICAgICAgOnZlYy1zeW0gZm9jclxuICAgICAgIDppbmRleCBpXG4gICAgICAgOmJpbmQtZXhwclxuICAgICAgIChpZi1sZXQgW29mZnNldCAoOm9mZnNldCBwYXQpXVxuICAgICAgICAgKG50aC1vZmZzZXQtaW5saW5lIHRhZyAod2l0aC10YWcgdGFnIGZvY3IpIGkgb2Zmc2V0KVxuICAgICAgICAgKG50aC1pbmxpbmUgdGFnICh3aXRoLXRhZyB0YWcgZm9jcikgaSkpfSkpKVxuXG4oZGVmbiB2ZWN0b3ItcGF0dGVybi1tYXRyaXgtb2Nyc1xuICBbb2NycyB7OmtleXMgW2ZvY3IgdGFnIG1pbi1zaXplIHJlc3Q/XSA6YXMgZW52fV1cbiAgKGlmIHJlc3Q/XG4gICAgKGxldCBbb2NyLW1ldGEgezpvY2N1cnJlbmNlLXR5cGUgdGFnXG4gICAgICAgICAgICAgICAgICAgIDp2ZWMtc3ltIGZvY3J9XG4gICAgICAgICAgdmwtb2NyIChnZW5zeW0gKHN0ciAobmFtZSBmb2NyKSBcIl9sZWZ0X19cIikpXG4gICAgICAgICAgdmwtb2NyICh3aXRoLW1ldGEgdmwtb2NyXG4gICAgICAgICAgICAgICAgICAgKGFzc29jIG9jci1tZXRhIDpiaW5kLWV4cHJcbiAgICAgICAgICAgICAgICAgICAgIChzdWJ2ZWMtaW5saW5lIHRhZyAod2l0aC10YWcgdGFnIGZvY3IpIDAgbWluLXNpemUgKSkpXG4gICAgICAgICAgdnItb2NyIChnZW5zeW0gKHN0ciAobmFtZSBmb2NyKSBcIl9yaWdodF9fXCIpKVxuICAgICAgICAgIHZyLW9jciAod2l0aC1tZXRhIHZyLW9jclxuICAgICAgICAgICAgICAgICAgIChhc3NvYyBvY3ItbWV0YSA6YmluZC1leHByXG4gICAgICAgICAgICAgICAgICAgICAoc3VidmVjLWlubGluZSB0YWcgKHdpdGgtdGFnIHRhZyBmb2NyKSBtaW4tc2l6ZSkpKV1cbiAgICAgIChpbnRvIFt2bC1vY3IgdnItb2NyXSAoZHJvcC1udGggb2NycyAwKSkpXG4gICAgKGNvbmNhdFxuICAgICAgKG1hcCAocGFydGlhbCB2ZWN0b3ItcGF0dGVybi1vY3Itc3ltIGVudikgKHJhbmdlIG1pbi1zaXplKSlcbiAgICAgIChkcm9wLW50aCBvY3JzIDApKSkpXG5cbihkZWZuIGFycmF5LXRhZyBbeF1cbiAgKGdldCAne2J5dGVzICAgOjphcnJheVxuICAgICAgICAgc2hvcnRzICA6OnNob3J0c1xuICAgICAgICAgaW50cyAgICA6OmludHNcbiAgICAgICAgIGxvbmdzICAgOjpsb25nc1xuICAgICAgICAgZG91YmxlcyA6OmRvdWJsZXNcbiAgICAgICAgIG9iamVjdHMgOjpvYmplY3RzfVxuICAgICgtPiB4IG1ldGEgOnRhZykpKVxuXG47OyB2IC0gdGhlIHBhdHRlcm5zXG47OyB0IC0gdGhlIHR5cGUsIGZvciBvcHRpbWl6aW5nIHZpYSBzcGVjaWFsaXphdGlvblxuOzsgc2l6ZSAtIHNpemUgb2YgdGhlIHBhdHRlcm4gaWYga25vd25cbjs7IHJlc3Q/IC0gY29udGFpbnMgYSByZXN0IHBhdHRlcm5cblxuKGRlZnR5cGUgVmVjdG9yUGF0dGVybiBbdiB0IHNpemUgb2Zmc2V0IHJlc3Q/IF9tZXRhXVxuICBPYmplY3RcbiAgKHRvU3RyaW5nIFtfXVxuICAgIChzdHIgdiBcIiBcIiB0KSlcbiAgKGVxdWFscyBbXyBvdGhlcl1cbiAgICAoYW5kIChpbnN0YW5jZT8gVmVjdG9yUGF0dGVybiBvdGhlcilcbiAgICAgICAgICg9IFt2IHQgc2l6ZSBvZmZzZXQgcmVzdD9dXG4gICAgICAgICAgICAobWFwICMoJSBvdGhlcikgWzp2IDp0IDpzaXplIDpvZmZzZXQgOnJlc3Q/XSkpKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JT2JqIDpjbGpzIElNZXRhKVxuICAoIz8oOmNsaiBtZXRhIDpjbGpzIC1tZXRhKSBbX10gX21ldGEpXG4gICM/KDpjbGpzIElXaXRoTWV0YSlcbiAgKCM/KDpjbGogd2l0aE1ldGEgOmNsanMgLXdpdGgtbWV0YSkgW18gbmV3LW1ldGFdXG4gICAgKFZlY3RvclBhdHRlcm4uIHYgdCBzaXplIG9mZnNldCByZXN0PyBuZXctbWV0YSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbmlsKSlcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOnYgdlxuICAgICAgOnQgdFxuICAgICAgOnNpemUgc2l6ZVxuICAgICAgOm9mZnNldCBvZmZzZXRcbiAgICAgIDpyZXN0PyByZXN0P1xuICAgICAgOjp0YWcgOjp2ZWN0b3JcbiAgICAgIG5vdC1mb3VuZCkpXG5cbiAgSVBhdHRlcm5Db21waWxlXG4gICh0by1zb3VyY2UqIFt0aGlzIG9jcl1cbiAgICAobGV0IFt0IChvciAoYXJyYXktdGFnIG9jcikgdCldXG4gICAgICAoaWYgKGNoZWNrLXNpemU/IHQpXG4gICAgICAgIChpZiByZXN0P1xuICAgICAgICAgICh0ZXN0LXdpdGgtbWluLXNpemUtaW5saW5lIHQgb2NyIHNpemUpXG4gICAgICAgICAgKHRlc3Qtd2l0aC1zaXplLWlubGluZSB0IG9jciBzaXplKSlcbiAgICAgICAgKHRlc3QtaW5saW5lIHQgb2NyKSkpKVxuXG4gIElDb250YWluc1Jlc3RQYXR0ZXJuXG4gIChjb250YWlucy1yZXN0LXBhdHRlcm4/IFtfXSByZXN0PylcblxuICBJVmVjdG9yUGF0dGVyblxuICAoc3BsaXQgW3RoaXMgbl1cbiAgICAobGV0IFtsdiAoc3VidmVjIHYgMCBuKVxuICAgICAgICAgIHJ2IChzdWJ2ZWMgdiBuKVxuICAgICAgICAgIHBsIChWZWN0b3JQYXR0ZXJuLiBsdiB0IG4gb2Zmc2V0IGZhbHNlIF9tZXRhKVxuICAgICAgICAgIHByIChpZiAocmVzdC1wYXR0ZXJuPyAoZmlyc3QgcnYpKVxuICAgICAgICAgICAgICAgKDpwIChmaXJzdCBydikpXG4gICAgICAgICAgICAgICAobGV0IFtyZXN0PyAoc29tZSByZXN0LXBhdHRlcm4/IHJ2KVxuICAgICAgICAgICAgICAgICAgICAgcnZjIChjb3VudCBydilcbiAgICAgICAgICAgICAgICAgICAgIHNpemUgKGlmIHJlc3Q/IChkZWMgcnZjKSBydmMpXVxuICAgICAgICAgICAgICAgICAoVmVjdG9yUGF0dGVybi4gcnYgdCBzaXplIG4gcmVzdD8gX21ldGEpKSldXG4gICAgICBbcGwgcHJdKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgKHJvd3MgbWF0cml4KVxuICAgICAgICAgIG9jcnMgKG9jY3VycmVuY2VzIG1hdHJpeClcbiAgICAgICAgICBmb2NyIChmaXJzdCBvY3JzKVxuICAgICAgICAgIGVudiAgezpmb2NyIGZvY3JcbiAgICAgICAgICAgICAgICA6ZnAgICAoZmZpcnN0IHJvd3MpXG4gICAgICAgICAgICAgICAgOnBhdCAgdGhpc31cbiAgICAgICAgICBbcmVzdD8gbWluLXNpemVdIChjYWxjLXJlc3Q/LWFuZC1taW4tc2l6ZSByb3dzIGVudilcbiAgICAgICAgICBlbnYnIChhc3NvYyBlbnZcbiAgICAgICAgICAgICAgICAgOnJlc3Q/IHJlc3Q/IDptaW4tc2l6ZSBtaW4tc2l6ZVxuICAgICAgICAgICAgICAgICA6dGFnIChvciAoYXJyYXktdGFnIGZvY3IpICg6dCB0aGlzKSkpXG4gICAgICAgICAgbnJvd3MgKHNwZWNpYWxpemUtdmVjdG9yLXBhdHRlcm4tbWF0cml4IHJvd3MgZW52JylcbiAgICAgICAgICBub2NycyAodmVjdG9yLXBhdHRlcm4tbWF0cml4LW9jcnMgb2NycyBlbnYnKV1cbiAgICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBub2NycykpKSlcblxuKGRlZm4gdmVjdG9yLXBhdHRlcm5cbiAgKFtdICh2ZWN0b3ItcGF0dGVybiBbXSA6OnZlY3RvciBuaWwgbmlsKSlcbiAgKFt2XSAodmVjdG9yLXBhdHRlcm4gdiA6OnZlY3RvciBuaWwgbmlsKSlcbiAgKFt2IHRdICh2ZWN0b3ItcGF0dGVybiB2IHQgbmlsIG5pbCkpXG4gIChbdiB0IG9mZnNldF0gKHZlY3Rvci1wYXR0ZXJuIHYgdCBvZmZzZXQgbmlsKSlcbiAgKFt2IHQgb2Zmc2V0IHJlc3Q/XVxuICAgIHs6cHJlIFsodmVjdG9yPyB2KV19XG4gICAgKGxldCBbYyAgICAoY291bnQgdilcbiAgICAgICAgICBzaXplIChpZiByZXN0PyAoZGVjIGMpIGMpXVxuICAgICAgKFZlY3RvclBhdHRlcm4uIHYgdCBzaXplIG9mZnNldCByZXN0PyBuaWwpKSkpXG5cbihkZWZuIHZlY3Rvci1wYXR0ZXJuPyBbeF1cbiAgKGluc3RhbmNlPyBWZWN0b3JQYXR0ZXJuIHgpKVxuXG4jPyg6Y2xqXG4gICAgKGRlZm1ldGhvZCBwcmludC1tZXRob2QgVmVjdG9yUGF0dGVybiBbcCBeV3JpdGVyIHdyaXRlcl1cbiAgICAgICgud3JpdGUgd3JpdGVyIChzdHIgXCI8VmVjdG9yUGF0dGVybjogXCIgcCBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7IE9yIFBhdHRlcm5zXG5cbihkZWZuIHNwZWNpYWxpemUtb3ItcGF0dGVybi1yb3cgW3JvdyBwYXQgcHNdXG4gIChsZXQgW3AgKGZpcnN0IHJvdyldXG4gICAgOzsgTk9URTogaG1tIHdoeSBjYW4ndCB3ZSByZW1vdmUgdGhpcyAtIERhdmlkXG4gICAgKGlmIChhbmQgKGdyb3VwYWJsZT8gcGF0IHApXG4gICAgICAgICAgICAgKG5vdCAod2lsZGNhcmQtcGF0dGVybj8gcCkpKVxuICAgICAgKG1hcCAoZm4gW3BdICh1cGRhdGUtcGF0dGVybiByb3cgMCBwKSkgcHMpIFtyb3ddKSkpXG5cbihkZWZuIHNwZWNpYWxpemUtb3ItcGF0dGVybi1tYXRyaXggW3Jvd3MgcGF0IHBzXVxuICAodmVjIChhcHBseSBjb25jYXRcbiAgICAgICAgIChtYXAgIyhzcGVjaWFsaXplLW9yLXBhdHRlcm4tcm93ICUgcGF0IHBzKSByb3dzKSkpKVxuXG4oZGVmdHlwZSBPclBhdHRlcm4gW3BzIF9tZXRhXVxuICBJUHNldWRvUGF0dGVyblxuXG4gIE9iamVjdFxuICAodG9TdHJpbmcgW3RoaXNdXG4gICAgKHN0ciBwcykpXG4gIChlcXVhbHMgW18gb3RoZXJdXG4gICAgKGFuZCAoaW5zdGFuY2U/IE9yUGF0dGVybiBvdGhlcikgKD0gcHMgKDpwcyBvdGhlcikpKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JT2JqIDpjbGpzIElNZXRhKVxuICAoIz8oOmNsaiBtZXRhIDpjbGpzIC1tZXRhKSBbX10gX21ldGEpXG4gICM/KDpjbGpzIElXaXRoTWV0YSlcbiAgKCM/KDpjbGogd2l0aE1ldGEgOmNsanMgLXdpdGgtbWV0YSkgW18gbmV3LW1ldGFdXG4gICAgKE9yUGF0dGVybi4gcHMgbmV3LW1ldGEpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklMb29rdXAgOmNsanMgSUxvb2t1cClcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMga11cbiAgICAoIz8oOmNsaiAudmFsQXQgOmNsanMgLWxvb2t1cCkgdGhpcyBrIG5pbCkpXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGsgbm90LWZvdW5kXVxuICAgIChjYXNlIGtcbiAgICAgIDpwcyBwc1xuICAgICAgOjp0YWcgOjpvclxuICAgICAgbm90LWZvdW5kKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBvY3JzICAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIG5yb3dzIChzcGVjaWFsaXplLW9yLXBhdHRlcm4tbWF0cml4IHJvd3MgdGhpcyBwcyldXG4gICAgICAocGF0dGVybi1tYXRyaXggbnJvd3Mgb2NycykpKSlcblxuKGRlZm4gb3ItcGF0dGVybiBbcF1cbiAgezpwcmUgWyh2ZWN0b3I/IHApXX1cbiAgKE9yUGF0dGVybi4gcCBuaWwpKVxuXG4oZGVmbiBvci1wYXR0ZXJuPyBbeF1cbiAgKGluc3RhbmNlPyBPclBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBPclBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPE9yUGF0dGVybjogXCIgKDpwcyBwKSBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMjIEd1YXJkIFBhdHRlcm5zXG47O1xuOzsgR3VhcmQgcGF0dGVybnMgYXJlIHVzZWQgdG8gcmVwcmVzZW50IGd1YXJkcyBvbiBwYXR0ZXJucywgZm9yIGV4YW1wbGVcbjs7ICAgYCgxIDpndWFyZCBldmVuPylgXG47O1xuXG4oZGVjbGFyZSBndWFyZC1wYXR0ZXJuPylcblxuKGRlZm4gc3BlY2lhbGl6ZS1ndWFyZC1wYXR0ZXJuLW1hdHJpeCBbcm93c11cbiAgKC0+PiByb3dzXG4gICAgKG1hcCAoZm4gW1twIDphcyByb3ddXVxuICAgICAgICAgICAoaWYgKGd1YXJkLXBhdHRlcm4/IHApXG4gICAgICAgICAgICAgKHVwZGF0ZS1wYXR0ZXJuIHJvdyAwICg6cCBwKSlcbiAgICAgICAgICAgICByb3cpKSlcbiAgICB2ZWMpKVxuXG4oZGVmdHlwZSBHdWFyZFBhdHRlcm4gW3AgZ3MgX21ldGFdXG4gIE9iamVjdFxuICAodG9TdHJpbmcgW3RoaXNdXG4gICAgKHN0ciBwIFwiIDpndWFyZCBcIiBncykpXG4gIChlcXVhbHMgW18gb3RoZXJdXG4gICAgKGFuZCAoaW5zdGFuY2U/IEd1YXJkUGF0dGVybiBvdGhlcilcbiAgICAgICAgICg9IHAgKDpwIG90aGVyKSlcbiAgICAgICAgICg9IGdzICg6Z3Mgb3RoZXIpKSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSU9iaiA6Y2xqcyBJTWV0YSlcbiAgKCM/KDpjbGogbWV0YSA6Y2xqcyAtbWV0YSkgW19dIF9tZXRhKVxuICAjPyg6Y2xqcyBJV2l0aE1ldGEpXG4gICgjPyg6Y2xqIHdpdGhNZXRhIDpjbGpzIC13aXRoLW1ldGEpIFtfIG5ldy1tZXRhXVxuICAgIChHdWFyZFBhdHRlcm4uIHAgZ3MgbmV3LW1ldGEpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklMb29rdXAgOmNsanMgSUxvb2t1cClcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMga11cbiAgICAoIz8oOmNsaiAudmFsQXQgOmNsanMgLWxvb2t1cCkgdGhpcyBrIG5pbCkpXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGsgbm90LWZvdW5kXVxuICAgIChjYXNlIGtcbiAgICAgIDpwIHBcbiAgICAgIDpncyBnc1xuICAgICAgOjp0YWcgOjpndWFyZFxuICAgICAgbm90LWZvdW5kKSlcblxuICBJUGF0dGVybkNvbXBpbGVcbiAgKHRvLXNvdXJjZSogW3RoaXMgb2NyXVxuICAgIGAoYW5kIH5AKG1hcCAoZm4gW2V4cHIgb2NyXVxuICAgICAgICAgICAgICAgICAgIChsaXN0IGV4cHIgb2NyKSlcbiAgICAgICAgICAgICAgICAgZ3MgKHJlcGVhdCBvY3IpKSkpXG5cbiAgSVNwZWNpYWxpemVNYXRyaXhcbiAgKHNwZWNpYWxpemUtbWF0cml4IFt0aGlzIG1hdHJpeF1cbiAgICAobGV0IFtyb3dzICAocm93cyBtYXRyaXgpXG4gICAgICAgICAgb2NycyAgKG9jY3VycmVuY2VzIG1hdHJpeClcbiAgICAgICAgICBucm93cyAoc3BlY2lhbGl6ZS1ndWFyZC1wYXR0ZXJuLW1hdHJpeCByb3dzKV1cbiAgICAgIChwYXR0ZXJuLW1hdHJpeCBucm93cyBvY3JzKSkpKVxuXG4oZGVmbiBndWFyZC1wYXR0ZXJuIFtwIGdzXVxuICB7OnByZSBbKHNldD8gZ3MpXX1cbiAgKEd1YXJkUGF0dGVybi4gcCBncyBuaWwpKVxuXG4oZGVmbiBndWFyZC1wYXR0ZXJuPyBbeF1cbiAgKGluc3RhbmNlPyBHdWFyZFBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBHdWFyZFBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPEd1YXJkUGF0dGVybiBcIiAoOnAgcCkgXCIgOmd1YXJkIFwiICg6Z3MgcCkgXCI+XCIpKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyAjIyBGdW5jdGlvbiBBcHBsaWNhdGlvbiBQYXR0ZXJuXG47O1xuOzsgRnVuY3Rpb24gQXBwbGljYXRpb24gcGF0dGVybnMgYXJlIHVzZWQgdG8gcmVwcmVzZW50IGZ1bmN0aW9uIGFwcGxpY2F0aW9uIG9uXG47OyBvY2N1cnJlbmNlcy4gUGF0dGVybiBtYXRjaGluZyB3aWxsIGNvbnRpbnVlIG9uIHRoZSByZXN1bHQgb2YgdGhlIGFwcGxpY2F0aW9uLlxuOzsgICAgYCgzIDo8PCBpbmMpYFxuXG4oZGVjbGFyZSBhcHAtcGF0dGVybj8pXG5cbjs7IHRha2UgdGhlIG9yaWdpbmFsIG9jY3VyZW5jZSBhbmQgcmVwbGFjZSBpdCB3aXRoIGEgd2lsZGNhcmQgaW4gZWFjaFxuOzsgcm93IHRoYXQgaGFzIGEgY29tcGF0aWJsZSBhcHBsaWNhdGlvbiBjcmVhdGUgJiBuZXcgb2NjdXJyZW5jZSB3aG9zZVxuOzsgYmluZGluZyBpcyB0aGUgb2xkIG9jY3VyZW5jZSB3aXRoIHRoZSBmdW5jdGlvbiBhcHBsaWVkXG5cbihkZWZuIGFwcC1wYXR0ZXJuLW1hdHJpeC1vY3JzIFtbZm9jciA6YXMgb2Nyc10gZm9ybV1cbiAgKGludG9cbiAgICBbKHdpdGgtbWV0YVxuICAgICAgIChnZW5zeW0gKHN0ciBcImFwcF9cIiBmb2NyKSlcbiAgICAgICB7OmJpbmQtZXhwciBgKH5mb3JtIH4ob3IgKC0+IGZvY3IgbWV0YSA6YmluZC1leHByKSBmb2NyKSl9KV1cbiAgICBvY3JzKSlcblxuKGRlZm4gc3BlY2lhbGl6ZS1hcHAtcGF0dGVybi1tYXRyaXggW3Jvd3MgZm9ybV1cbiAgKGxldCBbW21hdGNoZWQtcm93cyByZXN0LXJvd3NdXG4gICAgICAgIChzcGxpdC13aXRoXG4gICAgICAgICAgKGZuIFtbcGF0IDphcyByb3ddXVxuICAgICAgICAgICAgKGFuZCAoYXBwLXBhdHRlcm4/IHBhdClcbiAgICAgICAgICAgICAgICAgKD0gKDpmb3JtIHBhdCkgZm9ybSkpKVxuICAgICAgICAgIHJvd3MpXVxuICAgICh2ZWNcbiAgICAgIChjb25jYXRcbiAgICAgICAgKG1hcFxuICAgICAgICAgIChmbiBbcm93XVxuICAgICAgICAgICAgKHByZXBlbmRcbiAgICAgICAgICAgICAgKHVwZGF0ZS1wYXR0ZXJuIHJvdyAwICh3aWxkY2FyZC1wYXR0ZXJuKSlcbiAgICAgICAgICAgICAgKDpwIChmaXJzdCByb3cpKSkpXG4gICAgICAgICAgbWF0Y2hlZC1yb3dzKVxuICAgICAgICAobWFwXG4gICAgICAgICAgKGZuIFtyb3ddXG4gICAgICAgICAgICAocHJlcGVuZCByb3cgKHdpbGRjYXJkLXBhdHRlcm4pKSlcbiAgICAgICAgICByZXN0LXJvd3MpKSkpKVxuXG4oZGVmdHlwZSBBcHBQYXR0ZXJuIFtwIGZvcm0gX21ldGFdXG4gIElQc2V1ZG9QYXR0ZXJuXG5cbiAgT2JqZWN0XG4gICh0b1N0cmluZyBbdGhpc11cbiAgKHN0ciBwIFwiIDo8PCBcIiBmb3JtKSlcbiAgKGVxdWFscyBbXyBvdGhlcl1cbiAgICAoYW5kIChpbnN0YW5jZT8gQXBwUGF0dGVybiBvdGhlcilcbiAgICAgICAgICg9IHAgKDpwIG90aGVyKSlcbiAgICAgICAgICg9IGZvcm0gKDpmb3JtIG90aGVyKSkpKVxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpIFtfXSBfbWV0YSlcbiAgIz8oOmNsanMgSVdpdGhNZXRhKVxuICAoIz8oOmNsaiB3aXRoTWV0YSA6Y2xqcyAtd2l0aC1tZXRhKSBbXyBuZXctbWV0YV1cbiAgICAoQXBwUGF0dGVybi4gcCBmb3JtIG5ldy1tZXRhKSlcblxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JTG9va3VwIDpjbGpzIElMb29rdXApXG4gICgjPyg6Y2xqIHZhbEF0IDpjbGpzIC1sb29rdXApIFt0aGlzIGtdXG4gICAgKCM/KDpjbGogLnZhbEF0IDpjbGpzIC1sb29rdXApIHRoaXMgayBuaWwpKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrIG5vdC1mb3VuZF1cbiAgICAoY2FzZSBrXG4gICAgICA6cCBwXG4gICAgICA6Zm9ybSBmb3JtXG4gICAgICA6OnRhZyA6OmFwcFxuICAgICAgbm90LWZvdW5kKSlcblxuICBJU3BlY2lhbGl6ZU1hdHJpeFxuICAoc3BlY2lhbGl6ZS1tYXRyaXggW3RoaXMgbWF0cml4XVxuICAgIChsZXQgW3Jvd3MgIChyb3dzIG1hdHJpeClcbiAgICAgICAgICBvY3JzICAob2NjdXJyZW5jZXMgbWF0cml4KVxuICAgICAgICAgIG5vY3JzIChhcHAtcGF0dGVybi1tYXRyaXgtb2NycyBvY3JzIGZvcm0pXG4gICAgICAgICAgbnJvd3MgKHNwZWNpYWxpemUtYXBwLXBhdHRlcm4tbWF0cml4IHJvd3MgZm9ybSldXG4gICAgICAocGF0dGVybi1tYXRyaXggbnJvd3Mgbm9jcnMpKSkpXG5cbihkZWZuIGFwcC1wYXR0ZXJuIFtwIGZvcm1dXG4gIChBcHBQYXR0ZXJuLiBwIGZvcm0gbmlsKSlcblxuKGRlZm4gYXBwLXBhdHRlcm4/IFt4XVxuICAoaW5zdGFuY2U/IEFwcFBhdHRlcm4geCkpXG5cbiM/KDpjbGpcbiAgICAoZGVmbWV0aG9kIHByaW50LW1ldGhvZCBBcHBQYXR0ZXJuIFtwIF5Xcml0ZXIgd3JpdGVyXVxuICAgICAgKC53cml0ZSB3cml0ZXIgKHN0ciBcIjxBcHBQYXR0ZXJuIFwiICg6cCBwKSBcIiA6YXBwIFwiICg6Zm9ybSBwKSBcIj5cIikpKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7ICMjIFByZWRpY2F0ZSBQYXR0ZXJuc1xuOztcbjs7IFByZWRpY2F0ZSBwYXR0ZXJucyBhcmUgdXNlZCB0byByZXByZXNlbnQgc2ltcGxlIGd1YXJkcyBvbiBwYXR0ZXJucyxcbjs7IGZvciBleGFtcGxlXG47OyAgIGAoMSA6d2hlbiBldmVuPylgXG47O1xuOzsgVGhlIHByZWRpY2F0ZXMgaW4gcHJlZGljYXRlIHBhdHRlcm5zIHNob3VsZCBub3Qgb3ZlcmxhcC4gIFRoYXQgaXMsXG47OyBubyB0d28gcHJlZGljYXRlcyBzaG91bGQgcmV0dXJuIHRoZSBzYW1lIGFuc3dlciBnaXZlbiB0aGUgc2FtZVxuOzsgaW5wdXQuICBGb3IgZXhhbXBsZSwgaW4gdGhlIHVubGlrZWx5IGNhc2UgdGhhdCB0aGVyZSB3YXMgYSBmdW5jdGlvblxuOzsgbmFtZWQgYGZvdXI/YCBhbmQgZGVmaW5lZCBhcyBgKGRlZm4gZm91cj8gW3hdICg9IDQgeCkpYCwgdGhlbiB1c2luZ1xuOzsgYHggOndoZW4gZm91cj9gIGFuZCBgeSA6d2hlbiBldmVuP2AgaW4gdGhlIHNhbWUgbWF0Y2ggZXhwcmVzc2lvblxuOzsgd2lsbCB5aWVsZCBhbiBpbmNvcnJlY3QgZGVjaXNpb24gdHJlZS4gIEluIGNhc2VzIHdoZXJlIG92ZXJsYXBwaW5nXG47OyBwcmVkaWNhdGVzIGFyZSBkZXNpcmVkLCB1c2UgZ3VhcmQgcGF0dGVybnMuXG47O1xuXG4oZGVmIHByZWRzIChhdG9tIHt9KSlcblxuKGRlZm1hY3JvIGRlZnByZWRcbiAgKFtuYW1lXVxuICAgICAoc3dhcCEgcHJlZHMgYXNzb2MgbmFtZSBuYW1lKSlcbiAgKFtuYW1lIGZdXG4gICAgIChzd2FwISBwcmVkcyBhc3NvYyBuYW1lIGYpKSlcblxuKGRlY2xhcmUgcHJlZGljYXRlLXBhdHRlcm4/KVxuXG4oZGVmbiBzcGVjaWFsaXplLXByZWRpY2F0ZS1wYXR0ZXJuLW1hdHJpeCBbcm93c11cbiAgKC0+PiByb3dzXG4gICAgKG1hcCAoZm4gW1twIDphcyByb3ddXVxuICAgICAgICAgICAoaWYgKHByZWRpY2F0ZS1wYXR0ZXJuPyBwKVxuICAgICAgICAgICAgICh1cGRhdGUtcGF0dGVybiByb3cgMCAoOnAgcCkpXG4gICAgICAgICAgICAgcm93KSkpXG4gICAgdmVjKSlcblxuKGRlZnR5cGUgUHJlZGljYXRlUGF0dGVybiBbcCBncyBfbWV0YV1cbiAgT2JqZWN0XG4gICh0b1N0cmluZyBbdGhpc11cbiAgICAoc3RyIHAgXCIgOndoZW4gXCIgZ3MpKVxuICAoZXF1YWxzIFtfIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBQcmVkaWNhdGVQYXR0ZXJuIG90aGVyKVxuICAgICAgICAgKD0gcCAoOnAgb3RoZXIpKVxuICAgICAgICAgKD0gZ3MgKDpncyBvdGhlcikpKSkgIFxuXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklPYmogOmNsanMgSU1ldGEpXG4gICgjPyg6Y2xqIG1ldGEgOmNsanMgLW1ldGEpIFtfXSBfbWV0YSlcbiAgIz8oOmNsanMgSVdpdGhNZXRhKVxuICAoIz8oOmNsaiB3aXRoTWV0YSA6Y2xqcyAtd2l0aC1tZXRhKSBbXyBuZXctbWV0YV1cbiAgICAoUHJlZGljYXRlUGF0dGVybi4gcCBncyBuZXctbWV0YSkpXG5cbiAgIz8oOmNsaiBjbG9qdXJlLmxhbmcuSUxvb2t1cCA6Y2xqcyBJTG9va3VwKVxuICAoIz8oOmNsaiB2YWxBdCA6Y2xqcyAtbG9va3VwKSBbdGhpcyBrXVxuICAgICgjPyg6Y2xqIC52YWxBdCA6Y2xqcyAtbG9va3VwKSB0aGlzIGsgbmlsKSlcbiAgKCM/KDpjbGogdmFsQXQgOmNsanMgLWxvb2t1cCkgW3RoaXMgayBub3QtZm91bmRdXG4gICAgKGNhc2Uga1xuICAgICAgOnAgcFxuICAgICAgOmdzIGdzXG4gICAgICA6OnRhZyA6OnByZWRpY2F0ZVxuICAgICAgbm90LWZvdW5kKSlcblxuICBJUGF0dGVybkNvbXBpbGVcbiAgKHRvLXNvdXJjZSogW3RoaXMgb2NyXVxuICAgIGAoYW5kIH5AKG1hcCAoZm4gW2V4cHIgb2NyXVxuICAgICAgICAgICAgICAgICAgIChsaXN0IGV4cHIgb2NyKSlcbiAgICAgICAgICAgICAgICAgZ3MgKHJlcGVhdCBvY3IpKSkpXG5cbiAgSVNwZWNpYWxpemVNYXRyaXhcbiAgKHNwZWNpYWxpemUtbWF0cml4IFt0aGlzIG1hdHJpeF1cbiAgICAobGV0IFtyb3dzICAocm93cyBtYXRyaXgpXG4gICAgICAgICAgb2NycyAgKG9jY3VycmVuY2VzIG1hdHJpeClcbiAgICAgICAgICBucm93cyAoc3BlY2lhbGl6ZS1wcmVkaWNhdGUtcGF0dGVybi1tYXRyaXggcm93cyldXG4gICAgICAocGF0dGVybi1tYXRyaXggbnJvd3Mgb2NycykpKSlcblxuKGRlZm4gcHJlZGljYXRlLXBhdHRlcm4gW3AgZ3NdXG4gIHs6cHJlIFsoc2V0PyBncyldfVxuICAoUHJlZGljYXRlUGF0dGVybi4gcCBncyBuaWwpKVxuXG4oZGVmbiBwcmVkaWNhdGUtcGF0dGVybj8gW3hdXG4gIChpbnN0YW5jZT8gUHJlZGljYXRlUGF0dGVybiB4KSlcblxuIz8oOmNsalxuICAgIChkZWZtZXRob2QgcHJpbnQtbWV0aG9kIFByZWRpY2F0ZVBhdHRlcm4gW3AgXldyaXRlciB3cml0ZXJdXG4gICAgICAoLndyaXRlIHdyaXRlciAoc3RyIFwiPFByZWRpY2F0ZVBhdHRlcm4gXCIgKDpwIHApIFwiIDp3aGVuIFwiICg6Z3MgcCkgXCI+XCIpKSkpXG5cbjs7IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG47OyBQYXR0ZXJuIENvbXBhcmlzb25zXG5cbihkZWZtZXRob2QgZ3JvdXBhYmxlPyBbOjpsaXRlcmFsIDo6bGl0ZXJhbF1cbiAgW2EgYl0gKD0gKDpsIGEpICg6bCBiKSkpXG5cbihkZWZtZXRob2QgZ3JvdXBhYmxlPyBbOjpndWFyZCA6Omd1YXJkXVxuICBbYSBiXSAoPSAoOmdzIGEpICg6Z3MgYikpKVxuXG4oZGVmbWV0aG9kIGdyb3VwYWJsZT8gWzo6cHJlZGljZSA6OnByZWRpY2F0ZV1cbiAgW2EgYl0gKD0gKDpncyBhKSAoOmdzIGIpKSlcblxuKGRlZm1ldGhvZCBncm91cGFibGU/IFs6Om1hcCA6Om1hcF1cbiAgW2EgYl1cbiAgKD0gKC0+IGEgbWV0YSA6b25seSkgKC0+IGIgbWV0YSA6b25seSkpKVxuXG4oZGVmbWV0aG9kIGdyb3VwYWJsZT8gWzo6b3IgOjpvcl1cbiAgW2EgYl1cbiAgKGxldCBbYXMgKDpwcyBhKVxuICAgICAgICBicyAoOnBzIGIpXVxuICAgIChhbmQgKD0gKGNvdW50IGFzKSAoY291bnQgYnMpKVxuICAgICAgICAgKGV2ZXJ5PyBpZGVudGl0eSAobWFwIGdyb3VwYWJsZT8gYXMgYnMpKSkpKVxuXG4oZGVmbWV0aG9kIGdyb3VwYWJsZT8gWzo6dmVjdG9yIDo6dmVjdG9yXVxuICBbYSBiXVxuICAoYW5kICg9ICg6cmVzdD8gYSkgKDpyZXN0PyBiKSlcbiAgICAgICAoPSAoOnNpemUgYSkgKDpzaXplIGIpKSkpXG5cbihkZWZtZXRob2QgZ3JvdXBhYmxlPyBbOjphcHAgOjphcHBdXG4gIFthIGJdXG4gIChhbmQgKD0gKDpmb3JtIGEpICg6Zm9ybSBiKSkpKVxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuOzsgIyBJbnRlcmZhY2VcblxuKGRlZm11bHRpIHRvLXNvdXJjZVxuICBcIlJldHVybnMgYSBDbG9qdXJlIGZvcm0gdGhhdCwgd2hlbiBleGVjdXRlZCwgaXMgdHJ1dGh5IGlmIHRoZVxuICBwYXR0ZXJuIG1hdGNoZXMgdGhlIG9jY3VycmVuY2UuIERpc3BhdGNoZXMgb24gdGhlIGB0eXBlYCBvZiB0aGVcbiAgcGF0dGVybi4gRm9yIGluc3RhbmNlLCBhIGxpdGVyYWwgcGF0dGVybiBtaWdodCByZXR1cm4gYCg9IH4oOnBhdHRlcm5cbiAgcGF0dGVybikgfm9jcilgLCB1c2luZyBgPWAgdG8gdGVzdCBmb3IgYSBtYXRjaC5cIlxuICAoZm4gW3BhdHRlcm4gb2NyXVxuICAgICg6OnRhZyBwYXR0ZXJuKSkpXG5cbihkZWZtdWx0aSBlbWl0LXBhdHRlcm5cbiAgXCJSZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHBhdHRlcm4gZm9yIHRoZSBnaXZlbiBzeW50YXguIERpc3BhdGNoZXNcbiAgb24gdGhlIGNsYXNzIG9mIGl0cyBhcmd1bWVudC4gRm9yIGV4YW1wbGUsIGBbKDpvciAxIDIpIDJdYCBpcyBkaXNwYXRjaGVkXG4gIGFzIGNsb2p1cmUubGFuZy5JUGVyc2lzdGVudFZlY3RvclwiXG4gIChmbiBbcGF0dGVybl1cbiAgICAoc3ludGF4LXRhZyBwYXR0ZXJuKSkpXG5cbihleHRlbmQtcHJvdG9jb2wgSVN5bnRheFRhZ1xuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5JUGVyc2lzdGVudFZlY3RvciA6Y2xqcyBQZXJzaXN0ZW50VmVjdG9yKVxuICAoc3ludGF4LXRhZyBbX10gOjp2ZWN0b3IpXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklTZXEgOmNsanMgTGlzdClcbiAgKHN5bnRheC10YWcgW19dIDo6c2VxKVxuICAjPyg6Y2xqcyBDb25zKVxuICAoc3ludGF4LXRhZyBbX10gOjpzZXEpXG4gICM/KDpjbGogY2xvanVyZS5sYW5nLklQZXJzaXN0ZW50TWFwIDpjbGpzIFBlcnNpc3RlbnRIYXNoTWFwKVxuICAoc3ludGF4LXRhZyBbX10gOjptYXApXG4gICM/KDpjbGpzIFBlcnNpc3RlbnRBcnJheU1hcClcbiAgKHN5bnRheC10YWcgW19dIDo6bWFwKVxuICAjPyg6Y2xqIGNsb2p1cmUubGFuZy5TeW1ib2wgOmNsanMgU3ltYm9sKVxuICAoc3ludGF4LXRhZyBbX10gOjpzeW1ib2wpXG4gICM/KDpjbGogT2JqZWN0IDpjbGpzIG9iamVjdClcbiAgKHN5bnRheC10YWcgW19dIDpkZWZhdWx0KVxuICBuaWxcbiAgKHN5bnRheC10YWcgW19dIDpkZWZhdWx0KSlcblxuIz8oOmNsanNcbihleHRlbmQtdHlwZSBudW1iZXJcbiAgSVN5bnRheFRhZ1xuICAoc3ludGF4LXRhZyBbX10gOmRlZmF1bHQpKSlcblxuIz8oOmNsanNcbihleHRlbmQtdHlwZSBzdHJpbmdcbiAgSVN5bnRheFRhZ1xuICAoc3ludGF4LXRhZyBbX10gOmRlZmF1bHQpKSlcblxuIz8oOmNsanNcbihleHRlbmQtdHlwZSBib29sZWFuXG4gIElTeW50YXhUYWdcbiAgKHN5bnRheC10YWcgW19dIDpkZWZhdWx0KSkpXG5cblxuXG47OyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG47OyAjIGVtaXQtcGF0dGVybiBNZXRob2RzXG5cbihkZWZuIGVtaXQtcGF0dGVybnNcbiAgKFtwcyB0XSAoZW1pdC1wYXR0ZXJucyBwcyB0IFtdKSlcbiAgKFtwcyB0IHZdXG4gICAgIChpZiAoZW1wdHk/IHBzKVxuICAgICAgIHZcbiAgICAgICAobGV0IFtwIChmaXJzdCBwcyldXG4gICAgICAgICAoY29uZFxuICAgICAgICAgICg9IHAgJyYpXG4gICAgICAgICAgKGxldCBbcCAoc2Vjb25kIHBzKVxuICAgICAgICAgICAgICAgIHJwIChpZiAoYW5kICh2ZWN0b3I/IHApICg9IHQgOnNlcSkpXG4gICAgICAgICAgICAgICAgICAgICAoc2VxLXBhdHRlcm4gKGVtaXQtcGF0dGVybnMgcCB0KSlcbiAgICAgICAgICAgICAgICAgICAgIChlbWl0LXBhdHRlcm4gcCkpXVxuICAgICAgICAgICAgKHJlY3VyIChubmV4dCBwcykgdCAoY29uaiB2IChyZXN0LXBhdHRlcm4gcnApKSkpIFxuXG4gICAgICAgICAgOmVsc2VcbiAgICAgICAgICAocmVjdXIgKG5leHQgcHMpIHQgKGNvbmogdiAoZW1pdC1wYXR0ZXJuIChmaXJzdCBwcykpKSkpKSkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybiA6OnZlY3RvclxuICBbcGF0XVxuICAobGV0IFtwcyAoZW1pdC1wYXR0ZXJucyBwYXQgOnZlY3RvcildXG4gICAgKHZlY3Rvci1wYXR0ZXJuIHBzICp2ZWN0b3ItdHlwZSogMCAoc29tZSByZXN0LXBhdHRlcm4/IHBzKSkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybiA6Om1hcFxuICBbcGF0XVxuICAobWFwLXBhdHRlcm5cbiAgICAoLT4+IHBhdFxuICAgICAgKG1hcCAoZm4gW1trIHZdXVxuICAgICAgICAgICAgIFtrIChlbWl0LXBhdHRlcm4gdildKSlcbiAgICAgIChyZW1vdmUgbmlsPylcbiAgICAgIChpbnRvIHt9KSkpKVxuXG4oZGVmbWV0aG9kIGVtaXQtcGF0dGVybiA6OnN5bWJvbFxuICBbcGF0XVxuICAoaWYgKG5vdD0gKGdldCAqbG9jYWxzKiBwYXQgOjpub3QtZm91bmQpIDo6bm90LWZvdW5kKVxuICAgIChsaXRlcmFsLXBhdHRlcm4gKHdpdGgtbWV0YSBwYXQgKGFzc29jIChtZXRhIHBhdCkgOmxvY2FsIHRydWUpKSlcbiAgICAod2lsZGNhcmQtcGF0dGVybiBwYXQpKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4gOmRlZmF1bHRcbiAgW3BhdF1cbiAgKGxpdGVyYWwtcGF0dGVybiBwYXQpKVxuXG4oZGVjbGFyZSBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBvci1wYXR0ZXJuIGFzLXBhdHRlcm4gZ3VhcmQtcGF0dGVyblxuICAgICAgICAgcHJlZGljYXRlLXBhdHRlcm4gdmVjdG9yLXBhdHRlcm4pXG5cbihkZWZtZXRob2QgZW1pdC1wYXR0ZXJuIDo6c2VxXG4gIFtwYXRdIChpZiAoYW5kICg9IChjb3VudCBwYXQpIDIpXG4gICAgICAgICAgICAgICAgICg9IChmaXJzdCBwYXQpICdxdW90ZSlcbiAgICAgICAgICAgICAgICAgKG9yIChzeW1ib2w/IChzZWNvbmQgcGF0KSlcbiAgICAgICAgICAgICAgICAgICAgIChrZXl3b3JkPyAoc2Vjb25kIHBhdCkpKSlcbiAgICAgICAgICAobGl0ZXJhbC1wYXR0ZXJuIChzZWNvbmQgcGF0KSlcbiAgICAgICAgICAoZW1pdC1wYXR0ZXJuLWZvci1zeW50YXggcGF0KSkpXG5cbihkZWZtdWx0aSBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBcbiAgXCJIYW5kbGVzIHBhdHRlcm5zIHdyYXBwZWQgaW4gdGhlIHNwZWNpYWwgbGlzdCBzeW50YXguIERpc3BhdGNoZXNcbiAgb24gdGhlIGZpcnN0IG9yIHNlY29uZCBrZXl3b3JkIGluIHRoZSBsaXN0LiBGb3IgZXhhbXBsZSwgdGhlIHBhdHRlcm4gXG4gIGAoOm9yIDEgLi4uKSBpcyBkaXNwYXRjaGVzIGFzIDpvciwgYW5kIGAoMSA6YXMgYSlgIGlzIGRpc3BhdGNoZWQgYnkgOmFzLlwiXG4gIChmbiBbW2Ygc11dXG4gICAgKGlmIChrZXl3b3JkPyBmKVxuICAgICAgW2YgOmRlZmF1bHRdXG4gICAgICBbOmRlZmF1bHQgc10pKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOm9yIDpkZWZhdWx0XVxuICBbcGF0XSAob3ItcGF0dGVyblxuICAgICAgICAgICgtPj4gKHJlc3QgcGF0KVxuICAgICAgICAgICAgKG1hcCBlbWl0LXBhdHRlcm4pXG4gICAgICAgICAgICAoaW50byBbXSkpKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOmRlZmF1bHQgOmFzXVxuICBbW3AgXyBzeW1dXSAod2l0aC1tZXRhIChlbWl0LXBhdHRlcm4gcCkgezphcyBzeW19KSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOmRlZmF1bHQgOjw8XVxuICBbW3AgXyBmb3JtXV0gKGFwcC1wYXR0ZXJuIChlbWl0LXBhdHRlcm4gcCkgZm9ybSkpXG5cbihkZWZtZXRob2QgZW1pdC1wYXR0ZXJuLWZvci1zeW50YXggWzpkZWZhdWx0IDp3aGVuXVxuICBbW3AgXyBnc11dXG4gIChsZXQgW2dzIChpZiAobm90ICh2ZWN0b3I/IGdzKSkgW2dzXSBncyldXG4gICAgKGFzc2VydCAoZXZlcnk/IHN5bWJvbD8gZ3MpIChzdHIgXCJJbnZhbGlkIHByZWRpY2F0ZSBleHByZXNzaW9uIFwiIGdzKSlcbiAgICAoYXNzZXJ0IChldmVyeT8gIyhjb250YWlucz8gQHByZWRzICUpIGdzKSAoc3RyIFwiVW5rbm93biBwcmVkaWNhdGUgaW4gXCIgZ3MpKVxuICAgIChwcmVkaWNhdGUtcGF0dGVybiAoZW1pdC1wYXR0ZXJuIHApIChzZXQgZ3MpKSkpXG5cbihkZWZtZXRob2QgZW1pdC1wYXR0ZXJuLWZvci1zeW50YXggWzpkZWZhdWx0IDpndWFyZF1cbiAgW1twIF8gZ3NdXSAobGV0IFtncyAoaWYgKG5vdCAodmVjdG9yPyBncykpIFtnc10gZ3MpXVxuICAgICAgICAgICAgICAoZ3VhcmQtcGF0dGVybiAoZW1pdC1wYXR0ZXJuIHApIChzZXQgZ3MpKSkpXG5cbihkZWZtZXRob2QgZW1pdC1wYXR0ZXJuLWZvci1zeW50YXggWzpkZWZhdWx0IDpzZXFdXG4gIFtwYXRdXG4gIChsZXQgW3AgKGZpcnN0IHBhdCldXG4gICAgKGlmIChlbXB0eT8gcClcbiAgICAgIChsaXRlcmFsLXBhdHRlcm4gKCkpXG4gICAgICAoc2VxLXBhdHRlcm4gKGVtaXQtcGF0dGVybnMgcCA6c2VxKSkpKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOmRlZmF1bHQgOjp2ZWN0b3JdXG4gIFtbcCB0IG9mZnNldC1rZXkgb2Zmc2V0XV1cbiAgKGxldCBbcHMgKGVtaXQtcGF0dGVybnMgcCA6dmVjdG9yKV1cbiAgICAodmVjdG9yLXBhdHRlcm4gcHMgdCBvZmZzZXQgKHNvbWUgcmVzdC1wYXR0ZXJuPyBwcykpKSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCBbOmRlZmF1bHQgOm9ubHldXG4gIFtbcCBfIG9ubHldXSAod2l0aC1tZXRhIChlbWl0LXBhdHRlcm4gcCkgezpvbmx5IG9ubHl9KSlcblxuKGRlZm1ldGhvZCBlbWl0LXBhdHRlcm4tZm9yLXN5bnRheCA6ZGVmYXVsdFxuICBbW18gcyA6YXMgbF1dXG4gICh0aHJvd1xuICAgICgjPyg6Y2xqIEFzc2VydGlvbkVycm9yLiA6Y2xqcyBqcy9FcnJvci4pXG4gICAgICAoc3RyIFwiSW52YWxpZCBsaXN0IHN5bnRheCBcIiBzIFwiIGluIFwiIGwgXCIuIFwiXG4gICAgICAgIFwiVmFsaWQgc3ludGF4OiBcIlxuICAgICAgICAodmVjXG4gICAgICAgICAgKHJlbW92ZSAjKD0gJSA6ZGVmYXVsdClcbiAgICAgICAgICAgIChrZXlzXG4gICAgICAgICAgICAgICguZ2V0TWV0aG9kVGFibGVcbiAgICAgICAgICAgICAgICBeY2xvanVyZS5sYW5nLk11bHRpRm4gZW1pdC1wYXR0ZXJuLWZvci1zeW50YXgpKSkpKSkpKVxuXG5cbihsZXQgW3ZvaWQgIz8oOmNsaiAoT2JqZWN0LikgOmNsanMgKGpzLW9iaikpXG4gICAgICB2b2lkPyAjKGlkZW50aWNhbD8gdm9pZCAlKVxuICAgICAgaW5maXgta2V5d29yZD8gIygjezp3aGVuIDphcyA6Z3VhcmR9ICUpXVxuICA7OyB2b2lkIGlzIGEgdW5pcXVlIHBsYWNlaG9sZGVyIGZvciBub3RoaW5nIC0tIHdlIGNhbid0IHVzZSBuaWxcbiAgOzsgYmVjYXVzZSB0aGF0J3MgYSBsZWdhbCBzeW1ib2wgaW4gYSBwYXR0ZXJuIHJvd1xuICAoZGVmbiByZWdyb3VwLWtleXdvcmRzIFtwYXR0ZXJuXVxuICAgIChjb25kXG4gICAgICAodmVjdG9yPyBwYXR0ZXJuKVxuICAgICAgKGZpcnN0XG4gICAgICAgIChyZWR1Y2VcbiAgICAgICAgICAoZm4gW1tyZXN1bHQgcCBxXSByXVxuICAgICAgICAgICAgKGNvbmRcbiAgICAgICAgICAgICAgKHZvaWQ/IHApIFtyZXN1bHQgcSByXVxuICAgICAgICAgICAgICAoYW5kIChub3QgKHZvaWQ/IHIpKSAoaW5maXgta2V5d29yZD8gcSkpXG4gICAgICAgICAgICAgIFsoY29uaiByZXN1bHQgKGxpc3QgKHJlZ3JvdXAta2V5d29yZHMgcCkgcSByKSkgdm9pZCB2b2lkXVxuICAgICAgICAgICAgICA6ZWxzZSBbKGNvbmogcmVzdWx0IChyZWdyb3VwLWtleXdvcmRzIHApKSBxIHJdKSlcbiAgICAgICAgICBbW10gdm9pZCB2b2lkXVxuICAgICAgICAgIChjb25qIHBhdHRlcm4gdm9pZCB2b2lkKSkpXG5cbiAgICAgIChzZXE/IHBhdHRlcm4pXG4gICAgICAoY29ucyAocmVncm91cC1rZXl3b3JkcyAoZmlyc3QgcGF0dGVybikpIChyZXN0IHBhdHRlcm4pKVxuXG4gICAgICA6ZWxzZSBwYXR0ZXJuKSkpXG5cbiAoZGVmbiBncm91cC1rZXl3b3JkcyBcbiAgIFwiUmV0dXJucyBhIHBhdHRlcm4gd2l0aCBwYXR0ZXJuLWtleXdvcmRzICg6d2hlbiBhbmQgOmFzKSBwcm9wZXJseVxuICAgIGdyb3VwZWQuICBUaGUgb3JpZ2luYWwgcGF0dGVybiBtYXkgdXNlIHRoZSAnZmxhdHRlbmVkJyBzeW50YXguXG4gICAgRm9yIGV4YW1wbGUsIGEgJ2ZsYXR0ZW5lZCcgcGF0dGVybiByb3cgbGlrZSBbYSBiIDp3aGVuIGV2ZW4/XSBpc1xuICAgIGdyb3VwZWQgYXMgW2EgKGIgOndoZW4gZXZlbj8pXS5cIlxuICBbcGF0dGVybl1cbiAgKGlmICh2ZWN0b3I/IHBhdHRlcm4pIChyZWdyb3VwLWtleXdvcmRzIHBhdHRlcm4pIHBhdHRlcm4pKVxuXG4oZGVmbiB0by1wYXR0ZXJuLXJvd1xuICBcIlRha2UgYW4gdW5wcm9jZXNzZWQgcGF0dGVybiBleHByZXNzaW9uIGFuZCBhbiBhY3Rpb24gZXhwcmVzc2lvbiBhbmQgcmV0dXJuXG4gICBhIHBhdHRlcm4gcm93IG9mIHRoZSBwcm9jZXNzZWQgcGF0dGVybiBleHByZXNzaW9uIHBsdXMgdGhlIGFjdGlvbiBlcHhyZXNzaW9uLlwiXG4gIFtwYXQgYWN0aW9uXVxuICAobGV0IFtwcyAobWFwIGVtaXQtcGF0dGVybiAoZ3JvdXAta2V5d29yZHMgcGF0KSldXG4gICAgKHBhdHRlcm4tcm93IHBzIGFjdGlvbikpKVxuXG4oZGVmbiB3aWxkY2FyZHMtYW5kLWR1cGxpY2F0ZXNcbiAgXCJSZXR1cm5zIGEgdmVjdG9yIG9mIHR3byBlbGVtZW50czogdGhlIHNldCBvZiBhbGwgd2lsZGNhcmRzIGFuZCB0aGUgXG4gICBzZXQgb2YgZHVwbGljYXRlIHdpbGRjYXJkcy4gIFRoZSB1bmRlcmJhciBfIGlzIGV4Y2x1ZGVkIGZyb20gYm90aC5cIlxuICBbcGF0dGVybnNdXG4gIChsb29wIFtyZW1haW5pbmcgcGF0dGVybnMgc2VlbiAje30gZHVwcyAje31dXG4gICAgKGlmLWxldCBbcGF0dGVybnMgKHNlcSByZW1haW5pbmcpXVxuICAgICAgKGxldCBbcGF0IChmaXJzdCBwYXR0ZXJucylcbiAgICAgICAgICAgIHBhdHMgKHJlc3QgcGF0dGVybnMpXVxuICAgICAgICAoY29uZFxuICAgICAgICAgIChvciAoPSBwYXQgJ18pICg9IHBhdCAnJikpXG4gICAgICAgICAgKHJlY3VyIHBhdHMgc2VlbiBkdXBzKVxuXG4gICAgICAgICAgKHN5bWJvbD8gcGF0KVxuICAgICAgICAgIChpZiAoY29udGFpbnM/IHNlZW4gcGF0KVxuICAgICAgICAgICAgKHJlY3VyIHBhdHMgc2VlbiAoY29uaiBkdXBzIHBhdCkpXG4gICAgICAgICAgICAocmVjdXIgcGF0cyAoY29uaiBzZWVuIHBhdCkgZHVwcykpXG4gICAgICAgICAgXG4gICAgICAgICAgKHZlY3Rvcj8gcGF0KVxuICAgICAgICAgIChyZWN1ciAoY29uY2F0IHBhdHMgcGF0KSBzZWVuIGR1cHMpXG5cbiAgICAgICAgICAobWFwPyBwYXQpXG4gICAgICAgICAgKHJlY3VyIChjb25jYXQgcGF0cyAodmFscyBwYXQpKSBzZWVuIGR1cHMpXG5cbiAgICAgICAgICAoc2VxPyBwYXQpXG4gICAgICAgICAgKGNvbmRcbiAgICAgICAgICAgICg9IChmaXJzdCBwYXQpICdxdW90ZSlcbiAgICAgICAgICAgIChyZWN1ciBwYXRzIHNlZW4gZHVwcylcblxuICAgICAgICAgICAgKD0gKGZpcnN0IHBhdCkgOm9yKVxuICAgICAgICAgICAgKGxldCBbd2RzIChtYXAgd2lsZGNhcmRzLWFuZC1kdXBsaWNhdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAobWFwIGxpc3QgKHRha2UtbnRoIDIgcGF0KSkpXG4gICAgICAgICAgICAgICAgICAgbXNlZW4gKGFwcGx5IHNldC91bmlvbiAobWFwIGZpcnN0IHdkcykpXVxuICAgICAgICAgICAgICAocmVjdXIgcGF0cyAoc2V0L3VuaW9uIHNlZW4gbXNlZW4pXG4gICAgICAgICAgICAgICAgKGFwcGx5IHNldC91bmlvbiBkdXBzXG4gICAgICAgICAgICAgICAgICAoc2V0L2ludGVyc2VjdGlvbiBzZWVuIG1zZWVuKVxuICAgICAgICAgICAgICAgICAgKG1hcCBzZWNvbmQgd2RzKSkpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAoPSAoc2Vjb25kIHBhdCkgOmFzKVxuICAgICAgICAgICAgKHJlY3VyIChjb25jYXQgcGF0cyAodGFrZS1udGggMiBwYXQpKSBzZWVuIGR1cHMpXG5cbiAgICAgICAgICAgIDplbHNlXG4gICAgICAgICAgICAocmVjdXIgKGNvbmogcGF0cyAoZmlyc3QgcGF0KSkgc2VlbiBkdXBzKSlcbiAgICAgICAgICA6ZWxzZVxuICAgICAgICAgIChyZWN1ciBwYXRzIHNlZW4gZHVwcykpKVxuICAgICAgW3NlZW4gZHVwc10pKSlcblxuKGRlZm4gZmluZC1kdXBsaWNhdGUtd2lsZGNhcmRzIFtwYXR0ZXJuXVxuICAoc2Vjb25kICh3aWxkY2FyZHMtYW5kLWR1cGxpY2F0ZXMgcGF0dGVybikpKVxuXG4oZGVmbiBjaGVjay1wYXR0ZXJuIFtwYXQgdmFycyBudmFycyByb3dudW1dXG4gIChsZXQgW3BhdCAoZ3JvdXAta2V5d29yZHMgcGF0KV1cbiAgICAod2hlbiAobm90ICh2ZWN0b3I/IHBhdCkpXG4gICAgICAodGhyb3dcbiAgICAgICAgKCM/KDpjbGogQXNzZXJ0aW9uRXJyb3IuIDpjbGpzIGpzL0Vycm9yLilcbiAgICAgICAgICAoc3RyIFwiUGF0dGVybiByb3cgXCIgcm93bnVtXG4gICAgICAgICAgICBcIjogUGF0dGVybiByb3dzIG11c3QgYmUgd3JhcHBlZCBpbiBbXS5cIlxuICAgICAgICAgICAgXCIgVHJ5IGNoYW5naW5nIFwiIHBhdCBcIiB0byBbXCIgcGF0IFwiXS5cIiBcbiAgICAgICAgICAgICh3aGVuIChsaXN0PyBwYXQpXG4gICAgICAgICAgICAgIChzdHIgXCIgTm90ZTogcGF0dGVybiByb3dzIGFyZSBub3QgcGF0dGVybnMuXCJcbiAgICAgICAgICAgICAgICBcIiBUaGV5IGNhbm5vdCBiZSB3cmFwcGVkIGluIGEgOndoZW4gZ3VhcmQsIGZvciBleGFtcGxlXCIpKSkpKSlcbiAgICAod2hlbiAobm90PSAoY291bnQgcGF0KSBudmFycylcbiAgICAgICh0aHJvd1xuICAgICAgICAoIz8oOmNsaiBBc3NlcnRpb25FcnJvci4gOmNsanMganMvRXJyb3IuKVxuICAgICAgICAgIChzdHIgXCJQYXR0ZXJuIHJvdyBcIiByb3dudW1cbiAgICAgICAgICAgIFwiOiBQYXR0ZXJuIHJvdyBoYXMgZGlmZmVyaW5nIG51bWJlciBvZiBwYXR0ZXJucy4gXCJcbiAgICAgICAgICAgIHBhdCBcIiBoYXMgXCIgKGNvdW50IHBhdCkgXCIgcGF0dGVybi9zLCBleHBlY3RpbmcgXCJcbiAgICAgICAgICAgIG52YXJzIFwiIGZvciBvY2N1cnJlbmNlcyBcIiB2YXJzKSkpKVxuICAgICh3aGVuLWxldCBbZHVwbGljYXRlcyAoc2VxIChmaW5kLWR1cGxpY2F0ZS13aWxkY2FyZHMgcGF0KSldXG4gICAgICAodGhyb3dcbiAgICAgICAgKCM/KDpjbGogQXNzZXJ0aW9uRXJyb3IuIDpjbGpzIGpzL0Vycm9yLilcbiAgICAgICAgICAoc3RyIFwiUGF0dGVybiByb3cgXCIgcm93bnVtXG4gICAgICAgICAgICBcIjogUGF0dGVybiByb3cgcmV1c2VzIHdpbGRjYXJkcyBpbiBcIiBwYXRcbiAgICAgICAgICAgIFwiLiAgVGhlIGZvbGxvd2luZyB3aWxkY2FyZHMgYXJlIGFtYmlndW91czogXCJcbiAgICAgICAgICAgIChhcHBseSBzdHIgKGludGVycG9zZSBcIiwgXCIgKHNvcnQgZHVwbGljYXRlcykpKVxuICAgICAgICAgICAgXCIuICBUaGVyZSdzIG5vIGd1YXJhbnRlZSB0aGF0IHRoZSBtYXRjaGVkIHZhbHVlcyB3aWxsIGJlIHNhbWUuXCJcbiAgICAgICAgICAgIFwiICBSZW5hbWUgdGhlIG9jY3VycmVuY2VzIHVuaXF1ZWx5LlwiKSkpKSkpXG5cbjs7IFRoaXMgY291bGQgYmUgc2NhdHRlcmVkIGFyb3VuZCBpbiBvdGhlciBmdW5jdGlvbnMgdG8gYmUgbW9yZSBlZmZpY2llbnRcbjs7IFR1cm4gb2ZmICpzeW50YXgtY2hlY2sqIHRvIGRpc2FibGVcblxuKGRlZm4gY2hlY2stbWF0cml4LWFyZ3MgW3ZhcnMgY2xhdXNlc11cbiAgKHdoZW4gKHN5bWJvbD8gdmFycylcbiAgICAodGhyb3dcbiAgICAgICgjPyg6Y2xqIEFzc2VydGlvbkVycm9yLiA6Y2xqcyBqcy9FcnJvci4pXG4gICAgICAgIChzdHIgXCJPY2N1cnJlbmNlcyBtdXN0IGJlIGluIGEgdmVjdG9yLlwiXG4gICAgICAgICAgXCIgVHJ5IGNoYW5naW5nIFwiIHZhcnMgXCIgdG8gW1wiIHZhcnMgXCJdXCIpKSkpXG4gICh3aGVuIChub3QgKHZlY3Rvcj8gdmFycykpXG4gICAgKHRocm93XG4gICAgICAoIz8oOmNsaiBBc3NlcnRpb25FcnJvci4gOmNsanMganMvRXJyb3IuKVxuICAgICAgICAoc3RyIFwiT2NjdXJyZW5jZXMgbXVzdCBiZSBpbiBhIHZlY3Rvci4gXCJcbiAgICAgICAgICB2YXJzIFwiIGlzIG5vdCBhIHZlY3RvclwiKSkpKVxuICAobGV0IFtudmFycyAoY291bnQgdmFycylcbiAgICAgICAgY2xzICAgKHBhcnRpdGlvbiAyIGNsYXVzZXMpXVxuICAgIChkb3NlcSBbW1twYXQgX10gcm93bnVtXSAobWFwIHZlY3RvciAoYnV0bGFzdCBjbHMpIChyZXN0IChyYW5nZSkpKV1cbiAgICAgICh3aGVuICg9IDplbHNlIHBhdClcbiAgICAgICAgKHRocm93XG4gICAgICAgICAgKCM/KDpjbGogQXNzZXJ0aW9uRXJyb3IuIDpjbGpzIGpzL0Vycm9yLilcbiAgICAgICAgICAgIChzdHIgXCJQYXR0ZXJuIHJvdyBcIiByb3dudW1cbiAgICAgICAgICAgICAgXCI6IDplbHNlIGZvcm0gb25seSBhbGxvd2VkIG9uIGZpbmFsIHBhdHRlcm4gcm93XCIpKSkpXG4gICAgICAoY2hlY2stcGF0dGVybiBwYXQgdmFycyBudmFycyByb3dudW0pKVxuICAgICh3aGVuLWxldCBbW3BhdCBfXSAobGFzdCBjbHMpXVxuICAgICAgKHdoZW4tbm90ICg9IDplbHNlIHBhdClcbiAgICAgICAgKGNoZWNrLXBhdHRlcm4gcGF0IHZhcnMgbnZhcnMgKGNvdW50IGNscykpKSkpXG4gICh3aGVuIChvZGQ/IChjb3VudCBjbGF1c2VzKSkgXG4gICAgKHRocm93XG4gICAgICAoIz8oOmNsaiBBc3NlcnRpb25FcnJvci4gOmNsanMganMvRXJyb3IuKVxuICAgICAgICAoc3RyIFwiVW5ldmVuIG51bWJlciBvZiBQYXR0ZXJuIFJvd3MuIFRoZSBsYXN0IGZvcm0gYFwiXG4gICAgICAgICAgKGxhc3QgY2xhdXNlcykgXCJgIHNlZW1zIG91dCBvZiBwbGFjZS5cIikpKSkpXG5cbihkZWZuIHByb2Nlc3MtdmFyc1xuICBcIlByb2Nlc3MgdGhlIHZhcnMgZm9yIHRoZSBwYXR0ZXJuIG1hdHJpeC4gSWYgdXNlciBwcm92aWRlcyBhblxuICAgZXhwcmVzc2lvbiwgY3JlYXRlIGEgdmFyIGFuZCBhbm5vdGF0ZSB2aWEgbWV0YWRhdGEgd2l0aCB0aGVcbiAgIG9yaWdpbmFsIGV4cHJlc3Npb24uXCJcbiAgW3ZhcnNdXG4gIChsZXRmbiBbKHByb2Nlc3MtdmFyIFt2YXJdXG4gICAgICAgICAgICAoaWYtbm90IChzeW1ib2w/IHZhcilcbiAgICAgICAgICAgICAgKGxldCBbbnN5bSAoZ2Vuc3ltIFwib2NyLVwiKV1cbiAgICAgICAgICAgICAgICAod2l0aC1tZXRhIG5zeW0gezpvY3ItZXhwciB2YXJ9KSlcbiAgICAgICAgICAgICAgdmFyKSldXG4gICAgKHZlYyAobWFwIHByb2Nlc3MtdmFyIHZhcnMpKSkpXG5cbihkZWZuIGVtaXQtbWF0cml4XG4gIFwiVGFrZSB0aGUgbGlzdCBvZiB2YXJzIGFuZCBzZXF1ZW5jZSBvZiB1bnByb2Nlc3NlZCBjbGF1c2VzIGFuZFxuICAgcmV0dXJuIHRoZSBwYXR0ZXJuIG1hdHJpeC4gVGhlIHBhdHRlcm4gbWF0cml4IGNvbnRhaW5zIHRoZSBwcm9jZXNzZWRcbiAgIHBhdHRlcm4gcm93cyBhbmQgdGhlIGxpc3Qgb2YgdmFycyBvcmlnaW5hbGx5IHNwZWNpZmllZC4gSW5zZXJ0c1xuICAgYSBsYXN0IG1hdGNoIC0gOmVsc2UgaWYgcHJvdmlkZWQgYnkgdGhlIHVzZXIgb3IgYSBkZWZhdWx0IG1hdGNoIHRoYXRcbiAgIHRocm93cy5cIlxuICAoW3ZhcnMgY2xhdXNlc11cbiAgICAoZW1pdC1tYXRyaXggdmFycyBjbGF1c2VzIHRydWUpKVxuICAoW3ZhcnMgY2xhdXNlcyBkZWZhdWx0XVxuICAgIChsZXQgW2NzIChwYXJ0aXRpb24gMiBjbGF1c2VzKVxuICAgICAgICAgIHZzIChwcm9jZXNzLXZhcnMgdmFycylcbiAgICAgICAgICBjcyAobGV0IFtbcCBhXSAobGFzdCBjcylcbiAgICAgICAgICAgICAgICAgICBsYXN0LW1hdGNoICh2ZWMgKHJlcGVhdCAoY291bnQgdmFycykgJ18pKV1cbiAgICAgICAgICAgICAgIChpZiAoPSA6ZWxzZSBwKVxuICAgICAgICAgICAgICAgICAoY29uaiAodmVjIChidXRsYXN0IGNzKSkgW2xhc3QtbWF0Y2ggYV0pXG4gICAgICAgICAgICAgICAgIDs7IFRPRE86IHRocm93IGFuIGV4Y2VwdGlvbiBpZiA6ZWxzZSBsaW5lIG5vdCBwcm92aWRlZCAtIERhdmlkXG4gICAgICAgICAgICAgICAgIChpZiBkZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgKGNvbmogKHZlYyBjcylcbiAgICAgICAgICAgICAgICAgICAgIFtsYXN0LW1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICM/KDpjbGpzXG4gICAgICAgICAgICAgICAgICAgICAgICAgYCh0aHJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChqcy9FcnJvci5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzdHIgXCJObyBtYXRjaGluZyBjbGF1c2U6IFwiIH5AKGludGVycG9zZSBcIiBcIiB2cykpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsalxuICAgICAgICAgICAgICAgICAgICAgICAgIGAodGhyb3dcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN0ciBcIk5vIG1hdGNoaW5nIGNsYXVzZTogXCIgfkAoaW50ZXJwb3NlIFwiIFwiIHZzKSkpKSldKVxuICAgICAgICAgICAgICAgICAgIGNzKSkpXVxuICAgICAgKHBhdHRlcm4tbWF0cml4XG4gICAgICAgICh2ZWMgKG1hcCAjKGFwcGx5IHRvLXBhdHRlcm4tcm93ICUpIGNzKSlcbiAgICAgICAgKHByb2Nlc3MtdmFycyB2cykpKSkpXG5cbihkZWZuIGV4ZWN1dGFibGUtZm9ybSBbbm9kZV1cbiAgKG4tdG8tY2xqIG5vZGUpKVxuXG47OyBUT0RPOiBtb3JlIHNvcGhpc3RpY2F0ZWQgYW5hbHlzaXMgdGhhdCBhY3R1YWxseSBjaGVja3MgdGhhdCByZWN1ciBpc1xuOzsgbm90IGJlaW5nIHVzZWQgYXMgYSBsb2NhbCBiaW5kaW5nIHdoZW4gaXQgb2NjdXJzIC0gRGF2aWRcblxuKGRlZm4gcmVjdXItcHJlc2VudD8gW2FjdGlvbnNdXG4gIChsZXRmbiBbKGFuYWx5emUtYWN0aW9uIFthY3Rpb25dXG4gICAgICAgICAgICAoaWYgKGFuZCAoc2VxdWVudGlhbD8gYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgKHNvbWUgJyN7cmVjdXJ9IChmbGF0dGVuIGFjdGlvbikpKVxuICAgICAgICAgICAgICB7OnJlY3VyLXByZXNlbnQgdHJ1ZX0ge30pKV1cbiAgICAoc29tZSA6cmVjdXItcHJlc2VudCAobWFwIGFuYWx5emUtYWN0aW9uIGFjdGlvbnMpKSkpXG5cbihkZWZuIGNsai1mb3JtIFt2YXJzIGNsYXVzZXNdXG4gICh3aGVuIEAqc3ludGF4LWNoZWNrKiAoY2hlY2stbWF0cml4LWFyZ3MgdmFycyBjbGF1c2VzKSlcbiAgKGxldCBbYWN0aW9ucyAobWFwIHNlY29uZCAocGFydGl0aW9uIDIgY2xhdXNlcykpXG4gICAgICAgIHJlY3VyLXByZXNlbnQ/IChyZWN1ci1wcmVzZW50PyBhY3Rpb25zKV1cbiAgICA7OyBUT0RPOiB0aGlzIGlzIG5haXZlLCByZWN1ci1wcmVzZW50PyBuZWVkIGlnbm9yZVxuICAgIDs7IHJlY3VyIGludGVybmFsIHRvIGFuIGFjdGlvbiAtIERhdmlkXG4gICAgKGFzc2VydCAobm90IChhbmQgKm5vLWJhY2t0cmFjayogcmVjdXItcHJlc2VudD8pKVxuICAgICAgXCJSZWN1ciBmb3JtIHByZXNlbnQgeWV0ICpuby1iYWNrdHJhY2sqIHNldCB0byB0cnVlXCIpXG4gICAgKGJpbmRpbmcgWypyZWN1ci1wcmVzZW50KiAob3IgKnJlY3VyLXByZXNlbnQqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXItcHJlc2VudD9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbm8tYmFja3RyYWNrKildXG4gICAgICAoLT4gKGVtaXQtbWF0cml4IHZhcnMgY2xhdXNlcylcbiAgICAgICAgY29tcGlsZVxuICAgICAgICBleGVjdXRhYmxlLWZvcm0pKSkpXG5cbjs7ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbjs7ICMgTWF0Y2ggbWFjcm9zXG5cbihkZWZtYWNybyBtYXRjaFxuICBcIlBhdHRlcm4gbWF0Y2ggYSByb3cgb2Ygb2NjdXJyZW5jZXMuIFRha2UgYSB2ZWN0b3Igb2Ygb2NjdXJyZW5jZXMsIHZhcnMuXG4gIENsYXVzZSBxdWVzdGlvbi1hbnN3ZXIgc3ludGF4IGlzIGxpa2UgYGNvbmRgLiBRdWVzdGlvbnMgbXVzdCBiZVxuICB3cmFwcGVkIGluIGEgdmVjdG9yLCB3aXRoIHNhbWUgYXJpdHkgYXMgdmFycy4gTGFzdCBxdWVzdGlvbiBjYW4gYmUgOmVsc2UsXG4gIHdoaWNoIGV4cGFuZHMgdG8gYSByb3cgb2Ygd2lsZGNhcmRzLiBPcHRpb25hbGx5IG1heSB0YWtlIGEgc2luZ2xlXG4gIHZhciBub3Qgd3JhcHBlZCBpbiBhIHZlY3RvciwgcXVlc3Rpb25zIHRoZW4gbmVlZCBub3QgYmUgd3JhcHBlZCBpbiBhXG4gIHZlY3Rvci5cblxuICBFeGFtcGxlOlxuICAobGV0IFt4IDFcbiAgICAgICAgeSAyXVxuICAgIChtYXRjaCBbeCB5IDNdXG4gICAgICBbMSAyIDNdIDphbnN3ZXIxXG4gICAgICA6ZWxzZSA6ZGVmYXVsdC1hbnN3ZXIpKVwiXG4gIFt2YXJzICYgY2xhdXNlc11cbiAgKGxldCBbW3ZhcnMgY2xhdXNlc11cbiAgICAgICAgKGlmICh2ZWN0b3I/IHZhcnMpXG4gICAgICAgICAgW3ZhcnMgY2xhdXNlc11cbiAgICAgICAgICBbKHZlY3RvciB2YXJzKVxuICAgICAgICAgICAgKG1hcGNhdCAoZm4gW1tjIGFdXVxuICAgICAgICAgICAgICAgICAgICAgIFsoaWYgKG5vdD0gYyA6ZWxzZSkgKHZlY3RvciBjKSBjKSBhXSlcbiAgICAgICAgICAgICAgKHBhcnRpdGlvbiAyIGNsYXVzZXMpKV0pXVxuICAgKGJpbmRpbmcgWypsaW5lKiAoLT4gJmZvcm0gbWV0YSA6bGluZSlcbiAgICAgICAgICAgICAqbG9jYWxzKiAoZGlzc29jICZlbnYgJ18pXG4gICAgICAgICAgICAgKndhcm5lZCogKGF0b20gZmFsc2UpXVxuICAgICBgfihjbGotZm9ybSB2YXJzIGNsYXVzZXMpKSkpXG5cbihkZWZtYWNybyBtYXRjaHYgW3R5cGUgdmFycyAmIGNsYXVzZXNdXG4gIChiaW5kaW5nIFsqdmVjdG9yLXR5cGUqIHR5cGVcbiAgICAgICAgICAgICpsaW5lKiAoLT4gJmZvcm0gbWV0YSA6bGluZSlcbiAgICAgICAgICAgICpsb2NhbHMqIChkaXNzb2MgJmVudiAnXylcbiAgICAgICAgICAgICp3YXJuZWQqIChhdG9tIGZhbHNlKV1cbiAgICBgfihjbGotZm9ybSB2YXJzIGNsYXVzZXMpKSlcblxuKGRlZm1hY3JvIG1hdGNobVxuICBcIlNhbWUgYXMgbWF0Y2ggYnV0IHN1cHBvcnRzIElNYXRjaExvb2t1cCB3aGVuXG4gIG1hdGNoaW5nIG1hcHMuXCJcbiAgW3ZhcnMgJiBjbGF1c2VzXVxuICAobGV0IFtbdmFycyBjbGF1c2VzXVxuICAgICAgICAoaWYgKHZlY3Rvcj8gdmFycylcbiAgICAgICAgICBbdmFycyBjbGF1c2VzXVxuICAgICAgICAgIFsodmVjdG9yIHZhcnMpXG4gICAgICAgICAgIChtYXBjYXQgKGZuIFtbYyBhXV1cbiAgICAgICAgICAgICAgICAgICAgIFsoaWYgKG5vdD0gYyA6ZWxzZSkgKHZlY3RvciBjKSBjKSBhXSlcbiAgICAgICAgICAgICAocGFydGl0aW9uIDIgY2xhdXNlcykpXSldXG4gICAgKGJpbmRpbmcgWyptYXRjaC1sb29rdXAqIHRydWVcbiAgICAgICAgICAgICAgKmxpbmUqICgtPiAmZm9ybSBtZXRhIDpsaW5lKVxuICAgICAgICAgICAgICAqbG9jYWxzKiAoZGlzc29jICZlbnYgJ18pXG4gICAgICAgICAgICAgICp3YXJuZWQqIChhdG9tIGZhbHNlKV1cbiAgICAgIGB+KGNsai1mb3JtIHZhcnMgY2xhdXNlcykpKSlcblxuKGRlZm1hY3JvIG1hdGNoLWxldCBbYmluZGluZ3MgJiBib2R5XVxuICAobGV0IFtiaW5kdmFycyMgKHRha2UtbnRoIDIgYmluZGluZ3MpXVxuICAgIGAobGV0IH5iaW5kaW5nc1xuICAgICAgIChtYXRjaCBbfkBiaW5kdmFycyNdXG4gICAgICAgICB+QGJvZHkpKSkpXG4oZGVmbWFjcm8gYXNldHMgW2EgdnNdXG4gIGAoZG9cbiAgICAgfkAobWFwIChmbiBbYSBiIGNdIChjb25jYXQgYSAobGlzdCBiIGMpKSlcbiAgICAgICAgIChyZXBlYXQgYChhc2V0IH5hKSkgKHJhbmdlIChjb3VudCB2cykpIHZzKVxuICAgICB+YSkpXG5cbihkZWZtYWNybyBtYXRjaFxuICBbdmFycyAmIGNsYXVzZXNdXG4gIChsZXQgW1t2YXJzIGNsYXVzZXNdXG4gICAgICAgIChpZiAodmVjdG9yPyB2YXJzKVxuICAgICAgICAgIFt2YXJzIGNsYXVzZXNdXG4gICAgICAgICAgWyh2ZWN0b3IgdmFycylcbiAgICAgICAgICAgIChtYXBjYXQgKGZuIFtbYyBhXV1cbiAgICAgICAgICAgICAgICAgICAgICBbKGlmIChub3Q9IGMgOmVsc2UpICh2ZWN0b3IgYykgYykgYV0pXG4gICAgICAgICAgICAgIChwYXJ0aXRpb24gMiBjbGF1c2VzKSldKV1cbiAgIChiaW5kaW5nIFsqbGluZSogKC0+ICZmb3JtIG1ldGEgOmxpbmUpXG4gICAgICAgICAgICAgKmxvY2FscyogKGRpc3NvYyAoOmxvY2FscyAmZW52KSAnXylcbiAgICAgICAgICAgICAqd2FybmVkKiAoYXRvbSBmYWxzZSldXG4gICAgIGB+KGNsai1mb3JtIHZhcnMgY2xhdXNlcykpKSlcblxuKGRlZm1hY3JvIG1hdGNoKlxuICBbdmFycyAmIGNsYXVzZXNdXG4gIChsZXQgW1t2YXJzIGNsYXVzZXNdXG4gICAgICAgIChpZiAodmVjdG9yPyB2YXJzKVxuICAgICAgICAgIFt2YXJzIGNsYXVzZXNdXG4gICAgICAgICAgWyh2ZWN0b3IgdmFycylcbiAgICAgICAgICAgIChtYXBjYXQgKGZuIFtbYyBhXV1cbiAgICAgICAgICAgICAgICAgICAgICBbKGlmIChub3Q9IGMgOmVsc2UpICh2ZWN0b3IgYykgYykgYV0pXG4gICAgICAgICAgICAgIChwYXJ0aXRpb24gMiBjbGF1c2VzKSldKV1cbiAgIChiaW5kaW5nIFsqbGluZSogKC0+ICZmb3JtIG1ldGEgOmxpbmUpXG4gICAgICAgICAgICAgKmxvY2FscyogKGRpc3NvYyAoOmxvY2FscyAmZW52KSAnXylcbiAgICAgICAgICAgICAqd2FybmVkKiAoYXRvbSBmYWxzZSlcbiAgICAgICAgICAgICAqbm8tYmFja3RyYWNrKiB0cnVlXVxuICAgICBgfihjbGotZm9ybSB2YXJzIGNsYXVzZXMpKSkpXG5cbihkZWZtYWNybyBtYXRjaHYgW3R5cGUgdmFycyAmIGNsYXVzZXNdXG4gIChiaW5kaW5nIFsqdmVjdG9yLXR5cGUqIHR5cGVcbiAgICAgICAgICAgICpsaW5lKiAoLT4gJmZvcm0gbWV0YSA6bGluZSlcbiAgICAgICAgICAgICpsb2NhbHMqIChkaXNzb2MgKDpsb2NhbHMgJmVudikgJ18pXG4gICAgICAgICAgICAqd2FybmVkKiAoYXRvbSBmYWxzZSldXG4gICAgYH4oY2xqLWZvcm0gdmFycyBjbGF1c2VzKSkpXG5cblxuKGRlZm1hY3JvIG1hdGNodiogW3R5cGUgdmFycyAmIGNsYXVzZXNdXG4gIChiaW5kaW5nIFsqdmVjdG9yLXR5cGUqIHR5cGVcbiAgICAgICAgICAgICpsaW5lKiAoLT4gJmZvcm0gbWV0YSA6bGluZSlcbiAgICAgICAgICAgICpsb2NhbHMqIChkaXNzb2MgKDpsb2NhbHMgJmVudikgJ18pXG4gICAgICAgICAgICAqd2FybmVkKiAoYXRvbSBmYWxzZSlcbiAgICAgICAgICAgICpuby1iYWNrdHJhY2sqIHRydWVdXG4gICAgYH4oY2xqLWZvcm0gdmFycyBjbGF1c2VzKSkpXG5cbihkZWZtYWNybyBtYXRjaG1cbiAgW3ZhcnMgJiBjbGF1c2VzXVxuICAobGV0IFtbdmFycyBjbGF1c2VzXVxuICAgICAgICAoaWYgKHZlY3Rvcj8gdmFycylcbiAgICAgICAgICBbdmFycyBjbGF1c2VzXVxuICAgICAgICAgIFsodmVjdG9yIHZhcnMpXG4gICAgICAgICAgICAobWFwY2F0IChmbiBbW2MgYV1dXG4gICAgICAgICAgICAgICAgICAgICAgWyhpZiAobm90PSBjIDplbHNlKSAodmVjdG9yIGMpIGMpIGFdKVxuICAgICAgICAgICAgICAocGFydGl0aW9uIDIgY2xhdXNlcykpXSldXG4gICAoYmluZGluZyBbKmxpbmUqICgtPiAmZm9ybSBtZXRhIDpsaW5lKVxuICAgICAgICAgICAgICpsb2NhbHMqIChkaXNzb2MgKDpsb2NhbHMgJmVudikgJ18pXG4gICAgICAgICAgICAgKndhcm5lZCogKGF0b20gZmFsc2UpXVxuICAgICBgfihjbGotZm9ybSB2YXJzIGNsYXVzZXMpKSkpXG5cbihkZWZtYWNybyBtYXRjaC1sZXQgW2JpbmRpbmdzICYgYm9keV1cbiAgKGxldCBbYmluZHZhcnMjICh0YWtlLW50aCAyIGJpbmRpbmdzKV1cbiAgICBgKGxldCB+YmluZGluZ3NcbiAgICAgICAobWF0Y2ggW35AYmluZHZhcnMjXVxuICAgICAgICAgfkBib2R5KSkpKVxuXG4oZGVmbWFjcm8gbWF0Y2gtbGV0KiBbYmluZGluZ3MgJiBib2R5XVxuICAobGV0IFtiaW5kdmFycyMgKHRha2UtbnRoIDIgYmluZGluZ3MpXVxuICAgIGAobGV0IH5iaW5kaW5nc1xuICAgICAgIChtYXRjaCogW35AYmluZHZhcnMjXVxuICAgICAgICAgfkBib2R5KSkpKVxuIl19