goog.provide('cljs.core.match$macros');
/**
 * Enable syntax check of match macros
 */
cljs.core.match$macros._STAR_syntax_check_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
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
cljs.core.match$macros._STAR_vector_type_STAR_ = new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",463239872,null),null,(1),null)))));
});
cljs.core.match$macros.backtrack_sym = (function cljs$core$match$macros$backtrack_sym(){
return new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",463239872,null);
});
cljs.core.match$macros._STAR_backtrack_stack_STAR_ = cljs.core.List.EMPTY;
cljs.core.match$macros._STAR_root_STAR_ = true;
cljs.core.match$macros.warn = (function cljs$core$match$macros$warn(msg){
if(cljs.core.not(cljs.core.deref(cljs.core.match$macros._STAR_warned_STAR_))){
var _STAR_print_fn_STAR__orig_val__7647_8467 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__7648_8468 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7648_8468);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),", line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros._STAR_line_STAR_),":"].join(''),msg], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7647_8467);
}
return cljs.core.reset_BANG_(cljs.core.match$macros._STAR_warned_STAR_,true);
} else {
return null;
}
});
(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$val_at$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
}));
cljs.core.match$macros.val_at_expr = (function cljs$core$match$macros$val_at_expr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8469 = arguments.length;
var i__4737__auto___8470 = (0);
while(true){
if((i__4737__auto___8470 < len__4736__auto___8469)){
args__4742__auto__.push((arguments[i__4737__auto___8470]));

var G__8471 = (i__4737__auto___8470 + (1));
i__4737__auto___8470 = G__8471;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.core.match$macros.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.core.match$macros.val_at_expr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),args)));
}));

(cljs.core.match$macros.val_at_expr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match$macros.val_at_expr.cljs$lang$applyTo = (function (seq7649){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7649));
}));

cljs.core.match$macros.vector_type = (function cljs$core$match$macros$vector_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8472 = arguments.length;
var i__4737__auto___8473 = (0);
while(true){
if((i__4737__auto___8473 < len__4736__auto___8472)){
args__4742__auto__.push((arguments[i__4737__auto___8473]));

var G__8474 = (i__4737__auto___8473 + (1));
i__4737__auto___8473 = G__8474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.match$macros.vector_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.match$macros.vector_type.cljs$core$IFn$_invoke$arity$variadic = (function (t,r){
return t;
}));

(cljs.core.match$macros.vector_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.match$macros.vector_type.cljs$lang$applyTo = (function (seq7650){
var G__7651 = cljs.core.first(seq7650);
var seq7650__$1 = cljs.core.next(seq7650);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7651,seq7650__$1);
}));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.check_size_QMARK_ !== 'undefined')){
} else {
cljs.core.match$macros.check_size_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7652 = cljs.core.get_global_hierarchy;
return (fexpr__7652.cljs$core$IFn$_invoke$arity$0 ? fexpr__7652.cljs$core$IFn$_invoke$arity$0() : fexpr__7652.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","check-size?"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.tag !== 'undefined')){
} else {
cljs.core.match$macros.tag = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7653 = cljs.core.get_global_hierarchy;
return (fexpr__7653.cljs$core$IFn$_invoke$arity$0 ? fexpr__7653.cljs$core$IFn$_invoke$arity$0() : fexpr__7653.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","tag"),(function (t){
return t;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.test_inline !== 'undefined')){
} else {
cljs.core.match$macros.test_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7654 = cljs.core.get_global_hierarchy;
return (fexpr__7654.cljs$core$IFn$_invoke$arity$0 ? fexpr__7654.cljs$core$IFn$_invoke$arity$0() : fexpr__7654.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","test-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.test_with_size_inline !== 'undefined')){
} else {
cljs.core.match$macros.test_with_size_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7655 = cljs.core.get_global_hierarchy;
return (fexpr__7655.cljs$core$IFn$_invoke$arity$0 ? fexpr__7655.cljs$core$IFn$_invoke$arity$0() : fexpr__7655.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","test-with-size-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.test_with_min_size_inline !== 'undefined')){
} else {
cljs.core.match$macros.test_with_min_size_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7656 = cljs.core.get_global_hierarchy;
return (fexpr__7656.cljs$core$IFn$_invoke$arity$0 ? fexpr__7656.cljs$core$IFn$_invoke$arity$0() : fexpr__7656.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","test-with-min-size-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.count_inline !== 'undefined')){
} else {
cljs.core.match$macros.count_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7657 = cljs.core.get_global_hierarchy;
return (fexpr__7657.cljs$core$IFn$_invoke$arity$0 ? fexpr__7657.cljs$core$IFn$_invoke$arity$0() : fexpr__7657.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","count-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.nth_inline !== 'undefined')){
} else {
cljs.core.match$macros.nth_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7658 = cljs.core.get_global_hierarchy;
return (fexpr__7658.cljs$core$IFn$_invoke$arity$0 ? fexpr__7658.cljs$core$IFn$_invoke$arity$0() : fexpr__7658.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","nth-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.nth_offset_inline !== 'undefined')){
} else {
cljs.core.match$macros.nth_offset_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7659 = cljs.core.get_global_hierarchy;
return (fexpr__7659.cljs$core$IFn$_invoke$arity$0 ? fexpr__7659.cljs$core$IFn$_invoke$arity$0() : fexpr__7659.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","nth-offset-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.subvec_inline !== 'undefined')){
} else {
cljs.core.match$macros.subvec_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7660 = cljs.core.get_global_hierarchy;
return (fexpr__7660.cljs$core$IFn$_invoke$arity$0 ? fexpr__7660.cljs$core$IFn$_invoke$arity$0() : fexpr__7660.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","subvec-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.nthnext_inline !== 'undefined')){
} else {
cljs.core.match$macros.nthnext_inline = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7661 = cljs.core.get_global_hierarchy;
return (fexpr__7661.cljs$core$IFn$_invoke$arity$0 ? fexpr__7661.cljs$core$IFn$_invoke$arity$0() : fexpr__7661.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","nthnext-inline"),cljs.core.match$macros.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core.match$macros.check_size_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return true;
}));
cljs.core.match$macros.tag.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (t){
throw (new Error(["No tag specified for vector specialization ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
}));
cljs.core.match$macros.tag.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_){
return cljs.core.PersistentVector;
}));
cljs.core.match$macros.with_tag = (function cljs$core$match$macros$with_tag(t,ocr){
var the_tag = cljs.core.match$macros.tag.cljs$core$IFn$_invoke$arity$1(t);
var the_tag__$1 = the_tag;
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(ocr,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),the_tag__$1);
});
cljs.core.match$macros.test_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr){
var the_tag = cljs.core.match$macros.tag.cljs$core$IFn$_invoke$arity$1(t);
var c = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_tag,cljs.core.PersistentVector))?the_tag:((typeof the_tag === 'string')?the_tag:(((the_tag instanceof cljs.core.Symbol))?cljs.core.str.cljs$core$IFn$_invoke$arity$1((the_tag.cljs$core$IFn$_invoke$arity$0 ? the_tag.cljs$core$IFn$_invoke$arity$0() : the_tag.call(null))):(function(){throw (new Error(["Unsupported tag type",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_tag)].join('')))})()
)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))));
} else {
if(cljs.core.truth_(c.isArray())){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array?","cljs.core/array?",-1655912448,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ocr,null,(1),null))], 0))));

}
}
}));
cljs.core.match$macros.test_with_size_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.test_inline.cljs$core$IFn$_invoke$arity$2(t,ocr),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.count_inline.cljs$core$IFn$_invoke$arity$2(t,cljs.core.match$macros.with_tag(t,ocr)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,size,null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.core.match$macros.test_with_min_size_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.test_inline.cljs$core$IFn$_invoke$arity$2(t,ocr),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.count_inline.cljs$core$IFn$_invoke$arity$2(t,cljs.core.match$macros.with_tag(t,ocr)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,size,null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.core.match$macros.count_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_,ocr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))));
}));
cljs.core.match$macros.nth_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_,ocr,i){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))));
}));
cljs.core.match$macros.nth_offset_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr,i,offset){
return cljs.core.match$macros.nth_inline.cljs$core$IFn$_invoke$arity$3(t,ocr,i);
}));
cljs.core.match$macros.subvec_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function() {
var G__8475 = null;
var G__8475__3 = (function (_,ocr,start){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null))], 0))));
});
var G__8475__4 = (function (_,ocr,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null))], 0))));
});
G__8475 = function(_,ocr,start,end){
switch(arguments.length){
case 3:
return G__8475__3.call(this,_,ocr,start);
case 4:
return G__8475__4.call(this,_,ocr,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8475.cljs$core$IFn$_invoke$arity$3 = G__8475__3;
G__8475.cljs$core$IFn$_invoke$arity$4 = G__8475__4;
return G__8475;
})()
);
cljs.core.match$macros.nthnext_inline.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_,ocr,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nthnext","cljs.core/nthnext",-1690777327,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
}));
(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (this$,x){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),this$__$1);
}));

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(this$__$1,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(this$__$1,(n + (1)),cljs.core.count(this$__$1)));
}));

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (this$,n){
var this$__$1 = this;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$__$1,n);
return cljs.core.match.protocols.prepend(cljs.core.match.protocols.drop_nth(this$__$1,n),x);
}));
(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (this$,x){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),this$__$1);
}));

(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (this$,n){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(this$__$1,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(this$__$1,(n + (1)),cljs.core.count(this$__$1)));
}));

(cljs.core.Subvec.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (this$,n){
var this$__$1 = this;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(this$__$1,n);
return cljs.core.match.protocols.prepend(cljs.core.match.protocols.drop_nth(this$__$1,n),x);
}));
cljs.core.match$macros.constructor_QMARK_ = (function cljs$core$match$macros$constructor_QMARK_(p){
return cljs.core.not((cljs.core.match$macros.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,p)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.groupable_QMARK_ !== 'undefined')){
} else {
/**
 * Determine if two patterns may be grouped together for simultaneous
 * testing.
 */
cljs.core.match$macros.groupable_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7667 = cljs.core.get_global_hierarchy;
return (fexpr__7667.cljs$core$IFn$_invoke$arity$0 ? fexpr__7667.cljs$core$IFn$_invoke$arity$0() : fexpr__7667.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","groupable?"),(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477).cljs$core$IFn$_invoke$arity$1(b)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b);
}));


/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
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
return (((other instanceof cljs.core.match$macros.PatternRow)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ps,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.action,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.bindings,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(other))));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__7674 = k;
var G__7674__$1 = (((G__7674 instanceof cljs.core.Keyword))?G__7674.fqn:null);
switch (G__7674__$1) {
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.ps,i);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,x){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(self__.ps,i,x);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = cljs.core.next(self__.ps);
if(temp__5733__auto__){
var nps = temp__5733__auto__;
return (new cljs.core.match$macros.PatternRow(nps,self__.action,self__.bindings));
} else {
return (new cljs.core.match$macros.PatternRow(cljs.core.PersistentVector.EMPTY,self__.action,self__.bindings));
}
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.ps);
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
return (new cljs.core.match$macros.PatternRow(cljs.core.match.protocols.drop_nth(self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),self__.ps),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.match.protocols.swap(self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first(self__.ps);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ps,k,v),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(self__.ps);
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match$macros.PatternRow(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.ps,x),self__.action,self__.bindings));
}));

(cljs.core.match$macros.PatternRow.prototype.call = (function (self__,n){
var self__ = this;
var self____$1 = this;
var _ = self____$1;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.ps,n);
}));

(cljs.core.match$macros.PatternRow.prototype.apply = (function (self__,args7673){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args7673)));
}));

(cljs.core.match$macros.PatternRow.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var _ = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.ps,n);
}));

(cljs.core.match$macros.PatternRow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",1932889573,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(cljs.core.match$macros.PatternRow.cljs$lang$type = true);

(cljs.core.match$macros.PatternRow.cljs$lang$ctorStr = "cljs.core.match$macros/PatternRow");

(cljs.core.match$macros.PatternRow.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/PatternRow");
}));

/**
 * Positional factory function for cljs.core.match$macros/PatternRow.
 */
cljs.core.match$macros.__GT_PatternRow = (function cljs$core$match$macros$__GT_PatternRow(ps,action,bindings){
return (new cljs.core.match$macros.PatternRow(ps,action,bindings));
});

cljs.core.match$macros.pattern_row = (function cljs$core$match$macros$pattern_row(var_args){
var G__7685 = arguments.length;
switch (G__7685) {
case 2:
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$2 = (function (ps,action){
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$3(ps,action,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$3 = (function (ps,action,bindings){
var ps__$1 = ((cljs.core.vector_QMARK_(ps))?ps:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,ps));
return (new cljs.core.match$macros.PatternRow(ps__$1,action,bindings));
}));

(cljs.core.match$macros.pattern_row.cljs$lang$maxFixedArity = 3);

cljs.core.match$macros.update_pattern = (function cljs$core$match$macros$update_pattern(prow,i,p){
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(prow),i,p),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(prow),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match$macros.all_wildcards_QMARK_ = (function cljs$core$match$macros$all_wildcards_QMARK_(prow){
return cljs.core.every_QMARK_(cljs.core.match$macros.wildcard_pattern_QMARK_,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match$macros.drop_nth_bind = (function cljs$core$match$macros$drop_nth_bind(prow,n,ocr){
var ps = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(prow);
var p = (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(n) : ps.call(null,n));
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(prow);
var bind_expr = (cljs.core.match$macros.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1(ocr) : cljs.core.match$macros.leaf_bind_expr.call(null,ocr));
var as = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p));
var bindings = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(prow);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var bindings__$1 = (cljs.core.truth_(as)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [as,bind_expr], null)):bindings);
var bindings__$2 = (cljs.core.truth_((cljs.core.match$macros.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.named_wildcard_pattern_QMARK_.call(null,p)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p),bind_expr], null)):bindings__$1);
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.drop_nth(ps,n),action,bindings__$2);
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7692,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7696 = k7692;
var G__7696__$1 = (((G__7696 instanceof cljs.core.Keyword))?G__7696.fqn:null);
switch (G__7696__$1) {
case "value":
return self__.value;

break;
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7692,else__4383__auto__);

}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.empty_QMARK_(self__.bindings)))){
var bindings__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__7697){
var vec__7698 = p__7697;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7698,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7698,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,new cljs.core.Symbol(null,"_","_",-1201019570,null));
}),self__.bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bindings__$1))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.value,null,(1),null))], 0))));
} else {
return self__.value;
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7701){
var vec__7702 = p__7701;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7702,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7702,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.core.match$macros.LeafNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7691){
var self__ = this;
var G__7691__$1 = this;
return (new cljs.core.RecordIter((0),G__7691__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1549484068 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7693,other7694){
var self__ = this;
var this7693__$1 = this;
return (((!((other7694 == null)))) && ((this7693__$1.constructor === other7694.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7693__$1.value,other7694.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7693__$1.bindings,other7694.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7693__$1.__extmap,other7694.__extmap)));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7691){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7709 = cljs.core.keyword_identical_QMARK_;
var expr__7710 = k__4388__auto__;
if(cljs.core.truth_((pred__7709.cljs$core$IFn$_invoke$arity$2 ? pred__7709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__7710) : pred__7709.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__7710)))){
return (new cljs.core.match$macros.LeafNode(G__7691,self__.bindings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7709.cljs$core$IFn$_invoke$arity$2 ? pred__7709.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7710) : pred__7709.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7710)))){
return (new cljs.core.match$macros.LeafNode(self__.value,G__7691,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7691),null));
}
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7691){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,G__7691,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.core.match$macros.LeafNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(cljs.core.match$macros.LeafNode.cljs$lang$type = true);

(cljs.core.match$macros.LeafNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/LeafNode",null,(1),null));
}));

(cljs.core.match$macros.LeafNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.core.match$macros/LeafNode");
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
cljs.core.match$macros.map__GT_LeafNode = (function cljs$core$match$macros$map__GT_LeafNode(G__7695){
var extmap__4419__auto__ = (function (){var G__7717 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7695,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bindings","bindings",1271397192)], 0));
if(cljs.core.record_QMARK_(G__7695)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7717);
} else {
return G__7717;
}
})();
return (new cljs.core.match$macros.LeafNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__7695),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__7695),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.leaf_node = (function cljs$core$match$macros$leaf_node(var_args){
var G__7722 = arguments.length;
switch (G__7722) {
case 1:
return cljs.core.match$macros.leaf_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
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

(cljs.core.match$macros.leaf_node.cljs$lang$maxFixedArity = 2);

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.leaf_bind_expr !== 'undefined')){
} else {
cljs.core.match$macros.leaf_bind_expr = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7726 = cljs.core.get_global_hierarchy;
return (fexpr__7726.cljs$core$IFn$_invoke$arity$0 ? fexpr__7726.cljs$core$IFn$_invoke$arity$0() : fexpr__7726.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","leaf-bind-expr"),(function (ocr){
return new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ocr));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core.match$macros.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ocr));
}));
cljs.core.match$macros.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ocr));
}));
cljs.core.match$macros.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (ocr){
var m = cljs.core.meta(ocr);
return cljs.core.match$macros.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-sym","map-sym",1467543192).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(m)], 0));
}));
cljs.core.match$macros.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (ocr){
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.FailNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7732,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7739 = k7732;
switch (G__7739) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7732,else__4383__auto__);

}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.FailNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No match found.",null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.match$macros.backtrack_expr();
}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7743){
var vec__7744 = p__7743;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7744,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7744,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.core.match$macros.FailNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7731){
var self__ = this;
var G__7731__$1 = this;
return (new cljs.core.RecordIter((0),G__7731__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.core.match$macros.FailNode(self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1819155752 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7733,other7734){
var self__ = this;
var this7733__$1 = this;
return (((!((other7734 == null)))) && ((this7733__$1.constructor === other7734.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7733__$1.__extmap,other7734.__extmap)));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.core.match$macros.FailNode(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7731){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7753 = cljs.core.keyword_identical_QMARK_;
var expr__7754 = k__4388__auto__;
return (new cljs.core.match$macros.FailNode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7731),null));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7731){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.FailNode(G__7731,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.core.match$macros.FailNode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cljs.core.match$macros.FailNode.cljs$lang$type = true);

(cljs.core.match$macros.FailNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/FailNode",null,(1),null));
}));

(cljs.core.match$macros.FailNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.core.match$macros/FailNode");
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
cljs.core.match$macros.map__GT_FailNode = (function cljs$core$match$macros$map__GT_FailNode(G__7738){
var extmap__4419__auto__ = (function (){var G__7756 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__7738);
if(cljs.core.record_QMARK_(G__7738)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7756);
} else {
return G__7756;
}
})();
return (new cljs.core.match$macros.FailNode(null,cljs.core.not_empty(extmap__4419__auto__),null));
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.BindNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7758,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7762 = k7758;
var G__7762__$1 = (((G__7762 instanceof cljs.core.Keyword))?G__7762.fqn:null);
switch (G__7762__$1) {
case "bindings":
return self__.bindings;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7758,else__4383__auto__);

}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.BindNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(self__.bindings)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj(self__.node),null,(1),null))], 0))));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7763){
var vec__7764 = p__7763;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7764,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7764,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.core.match$macros.BindNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7757){
var self__ = this;
var G__7757__$1 = this;
return (new cljs.core.RecordIter((0),G__7757__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"node","node",581201198)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1867327000 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7759,other7760){
var self__ = this;
var this7759__$1 = this;
return (((!((other7760 == null)))) && ((this7759__$1.constructor === other7760.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7759__$1.bindings,other7760.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7759__$1.node,other7760.node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7759__$1.__extmap,other7760.__extmap)));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null,new cljs.core.Keyword(null,"node","node",581201198),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7757){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7767 = cljs.core.keyword_identical_QMARK_;
var expr__7768 = k__4388__auto__;
if(cljs.core.truth_((pred__7767.cljs$core$IFn$_invoke$arity$2 ? pred__7767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7768) : pred__7767.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7768)))){
return (new cljs.core.match$macros.BindNode(G__7757,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7767.cljs$core$IFn$_invoke$arity$2 ? pred__7767.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),expr__7768) : pred__7767.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__7768)))){
return (new cljs.core.match$macros.BindNode(self__.bindings,G__7757,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7757),null));
}
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",581201198),self__.node,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7757){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,G__7757,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.core.match$macros.BindNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null);
}));

(cljs.core.match$macros.BindNode.cljs$lang$type = true);

(cljs.core.match$macros.BindNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/BindNode",null,(1),null));
}));

(cljs.core.match$macros.BindNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.core.match$macros/BindNode");
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
cljs.core.match$macros.map__GT_BindNode = (function cljs$core$match$macros$map__GT_BindNode(G__7761){
var extmap__4419__auto__ = (function (){var G__7770 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7761,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198)], 0));
if(cljs.core.record_QMARK_(G__7761)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7770);
} else {
return G__7770;
}
})();
return (new cljs.core.match$macros.BindNode(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__7761),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__7761),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.bind_node = (function cljs$core$match$macros$bind_node(bindings,node){
return (new cljs.core.match$macros.BindNode(bindings,node,null,null,null));
});
cljs.core.match$macros.dag_clause_to_clj = (function cljs$core$match$macros$dag_clause_to_clj(occurrence,pattern,action){
var test = (((((!((pattern == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pattern.cljs$core$match$protocols$IPatternCompile$))))?true:(((!pattern.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.IPatternCompile,pattern):false)):cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.IPatternCompile,pattern)))?cljs.core.match.protocols.to_source_STAR_(pattern,occurrence):(cljs.core.match$macros.to_source.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.to_source.cljs$core$IFn$_invoke$arity$2(pattern,occurrence) : cljs.core.match$macros.to_source.call(null,pattern,occurrence)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.core.match.protocols.n_to_clj(action)], null);
});
cljs.core.match$macros.catch_error = (function cljs$core$match$macros$catch_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8482 = arguments.length;
var i__4737__auto___8483 = (0);
while(true){
if((i__4737__auto___8483 < len__4736__auto___8482)){
args__4742__auto__.push((arguments[i__4737__auto___8483]));

var G__8484 = (i__4737__auto___8483 + (1));
i__4737__auto___8483 = G__8484;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return cljs.core.match$macros.catch_error.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(cljs.core.match$macros.catch_error.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var err_sym = new cljs.core.Symbol("js","Error","js/Error",-1692659266,null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,err_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7772__auto__","e__7772__auto__",1214096266,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7772__auto__","e__7772__auto__",1214096266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match$macros.backtrack_sym(),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7772__auto__","e__7772__auto__",1214096266,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core.match$macros.catch_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match$macros.catch_error.cljs$lang$applyTo = (function (seq7773){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7773));
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7775,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7779 = k7775;
var G__7779__$1 = (((G__7779 instanceof cljs.core.Keyword))?G__7779.fqn:null);
switch (G__7779__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7775,else__4383__auto__);

}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var clauses = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.match$macros.dag_clause_to_clj,self__.occurrence),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.cases], 0)));
var bind_expr = new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.occurrence));
var cond_expr = (cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),clauses))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj(self__.default$),null,(1),null))))))):cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),clauses))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.match$macros.backtrack_expr(),null,(1),null))))))));
if(cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)){
if(cljs.core.truth_(bind_expr)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null)))))),null,(1),null))))),(new cljs.core.List(null,cond_expr,null,(1),null))));
} else {
return cond_expr;
}
} else {
if(cljs.core.truth_(bind_expr)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null)))))),null,(1),null))))),(new cljs.core.List(null,cond_expr,null,(1),null)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match$macros.catch_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.match.protocols.n_to_clj(self__.default$)], 0)),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cond_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match$macros.catch_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.match.protocols.n_to_clj(self__.default$)], 0)),null,(1),null))], 0))));
}
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7783){
var vec__7785 = p__7783;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7785,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7785,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.core.match$macros.SwitchNode{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),self__.occurrence],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cases","cases",253862775),self__.cases],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7774){
var self__ = this;
var G__7774__$1 = this;
return (new cljs.core.RecordIter((0),G__7774__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1224609716 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7776,other7777){
var self__ = this;
var this7776__$1 = this;
return (((!((other7777 == null)))) && ((this7776__$1.constructor === other7777.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7776__$1.occurrence,other7777.occurrence)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7776__$1.cases,other7777.cases)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7776__$1.default,other7777.default)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7776__$1.__extmap,other7777.__extmap)));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"cases","cases",253862775),null,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7774){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7792 = cljs.core.keyword_identical_QMARK_;
var expr__7793 = k__4388__auto__;
if(cljs.core.truth_((pred__7792.cljs$core$IFn$_invoke$arity$2 ? pred__7792.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__7793) : pred__7792.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__7793)))){
return (new cljs.core.match$macros.SwitchNode(G__7774,self__.cases,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7792.cljs$core$IFn$_invoke$arity$2 ? pred__7792.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cases","cases",253862775),expr__7793) : pred__7792.call(null,new cljs.core.Keyword(null,"cases","cases",253862775),expr__7793)))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,G__7774,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7792.cljs$core$IFn$_invoke$arity$2 ? pred__7792.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__7793) : pred__7792.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__7793)))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,G__7774,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7774),null));
}
}
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),self__.occurrence,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cases","cases",253862775),self__.cases,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7774){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,G__7774,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.core.match$macros.SwitchNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",-90277627,null),new cljs.core.Symbol(null,"cases","cases",1894394302,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null);
}));

(cljs.core.match$macros.SwitchNode.cljs$lang$type = true);

(cljs.core.match$macros.SwitchNode.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/SwitchNode",null,(1),null));
}));

(cljs.core.match$macros.SwitchNode.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.core.match$macros/SwitchNode");
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
cljs.core.match$macros.map__GT_SwitchNode = (function cljs$core$match$macros$map__GT_SwitchNode(G__7778){
var extmap__4419__auto__ = (function (){var G__7796 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7778,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], 0));
if(cljs.core.record_QMARK_(G__7778)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7796);
} else {
return G__7796;
}
})();
return (new cljs.core.match$macros.SwitchNode(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154).cljs$core$IFn$_invoke$arity$1(G__7778),new cljs.core.Keyword(null,"cases","cases",253862775).cljs$core$IFn$_invoke$arity$1(G__7778),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__7778),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.switch_node = (function cljs$core$match$macros$switch_node(occurrence,cases,default$){
if(cljs.core.sequential_QMARK_(cases)){
} else {
throw (new Error("Assert failed: (sequential? cases)"));
}

return (new cljs.core.match$macros.SwitchNode(occurrence,cases,default$,null,null,null));
});
cljs.core.match$macros.first_column_QMARK_ = (function cljs$core$match$macros$first_column_QMARK_(i){
return (i === (0));
});
cljs.core.match$macros.empty_row_QMARK_ = (function cljs$core$match$macros$empty_row_QMARK_(row){
var ps = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(row);
return (((!((ps == null)))) && (cljs.core.empty_QMARK_(ps)));
});
cljs.core.match$macros.score_column = (function cljs$core$match$macros$score_column(i,col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),col)], null);
});
cljs.core.match$macros.width = (function cljs$core$match$macros$width(p__7798){
var map__7799 = p__7798;
var map__7799__$1 = (((((!((map__7799 == null))))?(((((map__7799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7799):map__7799);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7799__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
if((!(cljs.core.empty_QMARK_(rows)))){
return cljs.core.count((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1((0)) : rows.call(null,(0))));
} else {
return (0);
}
});
cljs.core.match$macros.height = (function cljs$core$match$macros$height(p__7801){
var map__7802 = p__7801;
var map__7802__$1 = (((((!((map__7802 == null))))?(((((map__7802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7802):map__7802);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7802__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.count(rows);
});
cljs.core.match$macros.dim = (function cljs$core$match$macros$dim(pm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.width(pm),cljs.core.match$macros.height(pm)], null);
});
cljs.core.match$macros.empty_matrix_QMARK_ = (function cljs$core$match$macros$empty_matrix_QMARK_(pm){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.dim(pm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
cljs.core.match$macros.column = (function cljs$core$match$macros$column(p__7807,i){
var map__7808 = p__7807;
var map__7808__$1 = (((((!((map__7808 == null))))?(((((map__7808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7808):map__7808);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7808__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7806_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__7806_SHARP_,i);
}),rows));
});
cljs.core.match$macros.row = (function cljs$core$match$macros$row(p__7810,j){
var map__7811 = p__7810;
var map__7811__$1 = (((((!((map__7811 == null))))?(((((map__7811.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7811.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7811):map__7811);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7811__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,j);
});
cljs.core.match$macros.rows = (function cljs$core$match$macros$rows(p__7814){
var map__7815 = p__7814;
var map__7815__$1 = (((((!((map__7815 == null))))?(((((map__7815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7815):map__7815);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7815__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return rows;
});
cljs.core.match$macros.pattern_at = (function cljs$core$match$macros$pattern_at(p__7817,i,j){
var map__7818 = p__7817;
var map__7818__$1 = (((((!((map__7818 == null))))?(((((map__7818.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7818.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7818):map__7818);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7818__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var fexpr__7820 = (rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null,j));
return (fexpr__7820.cljs$core$IFn$_invoke$arity$1 ? fexpr__7820.cljs$core$IFn$_invoke$arity$1(i) : fexpr__7820.call(null,i));
});
cljs.core.match$macros.action_for_row = (function cljs$core$match$macros$action_for_row(p__7821,j){
var map__7824 = p__7821;
var map__7824__$1 = (((((!((map__7824 == null))))?(((((map__7824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7824):map__7824);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7824__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null,j)));
});
cljs.core.match$macros.occurrences = (function cljs$core$match$macros$occurrences(pm){
return new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(pm);
});
cljs.core.match$macros.row_bindings = (function cljs$core$match$macros$row_bindings(f,ocrs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(f),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7828){
var vec__7829 = p__7828;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7829,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7829,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p),cljs.core.match$macros.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1(ocr)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7834){
var vec__7835 = p__7834;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7835,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7835,(1),null);
return (cljs.core.match$macros.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.named_wildcard_pattern_QMARK_.call(null,p));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(f),ocrs))));
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
var or__4126__auto__ = (cljs.core.match$macros.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,x));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.match$macros.existential_pattern_QMARK_(x);
}
});
cljs.core.match$macros.constructors_above_QMARK_ = (function cljs$core$match$macros$constructors_above_QMARK_(pm,i,j){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.match$macros.wildcard_or_existential_QMARK_),cljs.core.take.cljs$core$IFn$_invoke$arity$2(j,cljs.core.match$macros.column(pm,i)));
});
cljs.core.match$macros.pattern_score = (function cljs$core$match$macros$pattern_score(pm,i,j){
var p = cljs.core.match$macros.pattern_at(pm,i,j);
if(cljs.core.truth_((function (){var or__4126__auto__ = (cljs.core.match$macros.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.wildcard_pattern_QMARK_.call(null,p));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (!(cljs.core.match$macros.constructors_above_QMARK_(pm,i,j)));
}
})())){
return (0);
} else {
if(cljs.core.match$macros.existential_pattern_QMARK_(p)){
return (1);
} else {
return (2);

}
}
});
cljs.core.match$macros.useful_matrix = (function cljs$core$match$macros$useful_matrix(pm){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.width(pm),(function (){var iter__4529__auto__ = (function cljs$core$match$macros$useful_matrix_$_iter__7845(s__7846){
return (new cljs.core.LazySeq(null,(function (){
var s__7846__$1 = s__7846;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7846__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var j = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__7846__$1,j,xs__6292__auto__,temp__5735__auto__){
return (function cljs$core$match$macros$useful_matrix_$_iter__7845_$_iter__7849(s__7850){
return (new cljs.core.LazySeq(null,((function (s__7846__$1,j,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7850__$1 = s__7850;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7850__$1);
if(temp__5735__auto____$1){
var s__7850__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7850__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__7850__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__7852 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__7851 = (0);
while(true){
if((i__7851 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__7851);
cljs.core.chunk_append(b__7852,cljs.core.match$macros.pattern_score(pm,i,j));

var G__8486 = (i__7851 + (1));
i__7851 = G__8486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7852),cljs$core$match$macros$useful_matrix_$_iter__7845_$_iter__7849(cljs.core.chunk_rest(s__7850__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7852),null);
}
} else {
var i = cljs.core.first(s__7850__$2);
return cljs.core.cons(cljs.core.match$macros.pattern_score(pm,i,j),cljs$core$match$macros$useful_matrix_$_iter__7845_$_iter__7849(cljs.core.rest(s__7850__$2)));
}
} else {
return null;
}
break;
}
});})(s__7846__$1,j,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7846__$1,j,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.width(pm))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,cljs$core$match$macros$useful_matrix_$_iter__7845(cljs.core.rest(s__7846__$1)));
} else {
var G__8487 = cljs.core.rest(s__7846__$1);
s__7846__$1 = G__8487;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.height(pm)));
})())));
});
cljs.core.match$macros.necessary_column = (function cljs$core$match$macros$necessary_column(pm){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7861,p__7862){
var vec__7864 = p__7861;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7864,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7864,(1),null);
var curr = vec__7864;
var vec__7867 = p__7862;
var ocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7867,(0),null);
var oscore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7867,(1),null);
var cand = vec__7867;
if((oscore > score)){
return cand;
} else {
return curr;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.score_column,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.match$macros.useful_matrix(pm)))));
});
cljs.core.match$macros.select = (function cljs$core$match$macros$select(pm){
return cljs.core.match.protocols.swap(pm,cljs.core.match$macros.necessary_column(pm));
});
cljs.core.match$macros.specialize = (function cljs$core$match$macros$specialize(var_args){
var G__7871 = arguments.length;
switch (G__7871) {
case 1:
return cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$1 = (function (matrix){
return cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(matrix,cljs.core.ffirst(cljs.core.match$macros.rows(matrix)));
}));

(cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2 = (function (matrix,p){
if((((!((p == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.cljs$core$match$protocols$ISpecializeMatrix$))))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.ISpecializeMatrix,p):false)):cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.ISpecializeMatrix,p))){
return cljs.core.match.protocols.specialize_matrix(p,matrix);
} else {
return (cljs.core.match$macros.default_specialize_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.default_specialize_matrix.cljs$core$IFn$_invoke$arity$2(p,matrix) : cljs.core.match$macros.default_specialize_matrix.call(null,p,matrix));
}
}));

(cljs.core.match$macros.specialize.cljs$lang$maxFixedArity = 2);

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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.pseudo_pattern_QMARK_,cljs.core.match$macros.column(matrix,i));
});
cljs.core.match$macros.column_splitter = (function cljs$core$match$macros$column_splitter(col){
var f = cljs.core.first(col);
var vec__7880 = cljs.core.split_with((function (p1__7879_SHARP_){
return cljs.core.match$macros.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(f,p1__7879_SHARP_);
}),cljs.core.rest(col));
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7880,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7880,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons(f,top),bottom], null);
});

cljs.core.match$macros.return_split = (function cljs$core$match$macros$return_split(S,D){
if(cljs.core.truth_(cljs.core.match$macros._STAR_recur_present_STAR_)){
if(((cljs.core.match$macros.empty_matrix_QMARK_(D)) && (cljs.core.seq(cljs.core.match$macros._STAR_backtrack_stack_STAR_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,cljs.core.peek(cljs.core.match$macros._STAR_backtrack_stack_STAR_),cljs.core.match$macros._STAR_backtrack_stack_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros._STAR_backtrack_stack_STAR_,D)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D], null);
}
});
cljs.core.match$macros.matrix_splitter = (function cljs$core$match$macros$matrix_splitter(matrix){
var rows = cljs.core.match$macros.rows(matrix);
var n = cljs.core.count(cljs.core.first(cljs.core.match$macros.column_splitter(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,rows))));
var ocrs = cljs.core.match$macros.occurrences(matrix);
var S = (function (){var G__7885 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__7886 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__7885,G__7886) : cljs.core.match$macros.pattern_matrix.call(null,G__7885,G__7886));
})();
var D = (function (){var G__7887 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__7888 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__7887,G__7888) : cljs.core.match$macros.pattern_matrix.call(null,G__7887,G__7888));
})();
return cljs.core.match$macros.return_split(S,D);
});
cljs.core.match$macros.group_rows = (function cljs$core$match$macros$group_rows(cs,rows){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,row){
var vec__7891 = cljs.core.peek(res);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7891,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7891,(1),null);
var c_SINGLEQUOTE_ = cljs.core.first(row);
if(cljs.core.truth_(cljs.core.match$macros.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(c,c_SINGLEQUOTE_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(res),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rows__$1,row)], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rows)], null)], null)], null),cljs.core.rest(rows));
});
cljs.core.match$macros.non_local_literal_pattern_QMARK_ = (function cljs$core$match$macros$non_local_literal_pattern_QMARK_(p){
var and__4115__auto__ = (cljs.core.match$macros.literal_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.literal_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.literal_pattern_QMARK_.call(null,p));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__4115__auto__;
}
});
cljs.core.match$macros.literal_case_matrix_splitter = (function cljs$core$match$macros$literal_case_matrix_splitter(matrix){
var ocrs = cljs.core.match$macros.occurrences(matrix);
var rows = cljs.core.match$macros.rows(matrix);
var lrows = (function (){var rows__$1 = cljs.core.seq(rows);
var res = cljs.core.PersistentVector.EMPTY;
var lits = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(rows__$1){
var vec__7899 = cljs.core.first(rows__$1);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7899,(0),null);
var row = vec__7899;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.match$macros.non_local_literal_pattern_QMARK_(p);
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.contains_QMARK_(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__4115__auto__;
}
})())){
var G__8489 = cljs.core.next(rows__$1);
var G__8490 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,row);
var G__8491 = (cljs.core.truth_(cljs.core.match$macros.non_local_literal_pattern_QMARK_(p))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p)):lits);
rows__$1 = G__8489;
res = G__8490;
lits = G__8491;
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
var S = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7904){
var vec__7905 = p__7904;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7905,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7905,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(rows__$1,ocrs) : cljs.core.match$macros.pattern_matrix.call(null,rows__$1,ocrs))], null);
}),cljs.core.match$macros.group_rows(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,lrows),lrows)));
var D = (function (){var G__7910 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lrows),rows);
var G__7911 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__7910,G__7911) : cljs.core.match$macros.pattern_matrix.call(null,G__7910,G__7911));
})();
return cljs.core.match$macros.return_split(S,D);
});
cljs.core.match$macros.default_case = (function cljs$core$match$macros$default_case(matrix){
if((!(cljs.core.match$macros.empty_matrix_QMARK_(matrix)))){
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(matrix) : cljs.core.match$macros.compile.call(null,matrix));
} else {
return cljs.core.match$macros.fail_node();
}
});
cljs.core.match$macros.cases = (function cljs$core$match$macros$cases(matrix){
if(cljs.core.vector_QMARK_(matrix)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7914){
var vec__7915 = p__7914;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7915,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7915,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__7918 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(m,c);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__7918) : cljs.core.match$macros.compile.call(null,G__7918));
})()], null);
}),matrix));
} else {
var rows = cljs.core.match$macros.rows(matrix);
var c = cljs.core.ffirst(rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__7922 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(matrix,c);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__7922) : cljs.core.match$macros.compile.call(null,G__7922));
})()], null)], null);
}
});
cljs.core.match$macros.expression_QMARK_ = (function cljs$core$match$macros$expression_QMARK_(ocr){
return cljs.core.contains_QMARK_(cljs.core.meta(ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",-897749617));
});
cljs.core.match$macros.bind_variables = (function cljs$core$match$macros$bind_variables(ocrs){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ocr){
var bind_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",-897749617),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bind_expr,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,bind_expr], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,ocr], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ocrs], 0));
});
cljs.core.match$macros.root_bind_node = (function cljs$core$match$macros$root_bind_node(matrix){
var ocrs = cljs.core.match$macros.occurrences(matrix);
var node = (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(matrix) : cljs.core.match$macros.compile.call(null,matrix));
if(cljs.core.truth_(cljs.core.some(cljs.core.match$macros.expression_QMARK_,ocrs))){
return cljs.core.match$macros.bind_node(cljs.core.match$macros.bind_variables(ocrs),node);
} else {
return node;
}
});
/**
 * Case 1: If there are no pattern rows to match, then matching always fails
 */
cljs.core.match$macros.empty_rows_case = (function cljs$core$match$macros$empty_rows_case(){
return cljs.core.match$macros.fail_node();
});
/**
 * Case 2: If the first row is empty then matching always succeeds 
 *   and yields the first action.
 */
cljs.core.match$macros.first_row_empty_case = (function cljs$core$match$macros$first_row_empty_case(rows,ocr){
var f = cljs.core.first(rows);
var a = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(f);
var bs = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.match$macros.leaf_node.cljs$core$IFn$_invoke$arity$2(a,bs);
});
/**
 * Case 2: If the first row is constituted by wildcards then matching
 *   matching always succeeds and yields the first action.
 */
cljs.core.match$macros.first_row_wildcards_case = (function cljs$core$match$macros$first_row_wildcards_case(rows,ocrs){
var f = cljs.core.first(rows);
var a = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(f);
var bs = cljs.core.match$macros.row_bindings(f,ocrs);
return cljs.core.match$macros.leaf_node.cljs$core$IFn$_invoke$arity$2(a,bs);
});
cljs.core.match$macros.expand_matrix = (function cljs$core$match$macros$expand_matrix(matrix,col){
var matrix__$1 = matrix;
while(true){
var p = cljs.core.first(cljs.core.match$macros.column(matrix__$1,col));
if(cljs.core.match$macros.pseudo_pattern_QMARK_(p)){
var G__8492 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(matrix__$1,p);
matrix__$1 = G__8492;
continue;
} else {
return matrix__$1;
}
break;
}
});
cljs.core.match$macros.split_matrix = (function cljs$core$match$macros$split_matrix(matrix){
return cljs.core.match$macros.matrix_splitter(matrix);
});
/**
 * Case 3a: The first column is chosen. Compute and return a
 *   switch/bind node with a default matrix case
 */
cljs.core.match$macros.first_column_chosen_case = (function cljs$core$match$macros$first_column_chosen_case(matrix,col,ocrs){
var expanded = cljs.core.match$macros.expand_matrix(matrix,col);
var ocrs__$1 = cljs.core.match$macros.occurrences(expanded);
var vec__7929 = cljs.core.match$macros.split_matrix(expanded);
var S = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7929,(0),null);
var D = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7929,(1),null);
var split = vec__7929;
if(cljs.core.not(cljs.core.match$macros._STAR_recur_present_STAR_)){
return cljs.core.match$macros.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null,col)),cljs.core.match$macros.cases(S),cljs.core.match$macros.default_case(D));
} else {
var new_stack = cljs.core.last(split);
return cljs.core.match$macros.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null,col)),(((!((cljs.core.match$macros._STAR_backtrack_stack_STAR_ === new_stack))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__7934 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__7935 = new_stack;
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__7935);

try{return cljs.core.match$macros.cases(S);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__7934);
}})():cljs.core.match$macros.cases(S)),((((cljs.core.seq(cljs.core.match$macros._STAR_backtrack_stack_STAR_)) && ((cljs.core.peek(cljs.core.match$macros._STAR_backtrack_stack_STAR_) === D))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__7936 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__7937 = cljs.core.pop(cljs.core.match$macros._STAR_backtrack_stack_STAR_);
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__7937);

try{return cljs.core.match$macros.default_case(D);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__7936);
}})():cljs.core.match$macros.default_case(D)));
}
});
/**
 * Case 3b: A column other than the first is chosen. Swap column 
 * col with the first column and compile the result
 */
cljs.core.match$macros.other_column_chosen_case = (function cljs$core$match$macros$other_column_chosen_case(matrix,col){
var G__7938 = cljs.core.match.protocols.swap(matrix,col);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__7938) : cljs.core.match$macros.compile.call(null,G__7938));
});
cljs.core.match$macros.choose_column = (function cljs$core$match$macros$choose_column(matrix){
return cljs.core.match$macros.necessary_column(matrix);
});
cljs.core.match$macros.compile = (function cljs$core$match$macros$compile(p__7939){
var map__7940 = p__7939;
var map__7940__$1 = (((((!((map__7940 == null))))?(((((map__7940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7940):map__7940);
var pm = map__7940__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7940__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ocrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7940__$1,new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413));
if(cljs.core.truth_(cljs.core.match$macros._STAR_root_STAR_)){
var _STAR_root_STAR__orig_val__7943 = cljs.core.match$macros._STAR_root_STAR_;
var _STAR_root_STAR__temp_val__7944 = false;
(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__temp_val__7944);

try{return cljs.core.match$macros.root_bind_node(pm);
}finally {(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__orig_val__7943);
}} else {
if(cljs.core.empty_QMARK_(rows)){
return cljs.core.match$macros.empty_rows_case();
} else {
if(cljs.core.match$macros.empty_row_QMARK_(cljs.core.first(rows))){
return cljs.core.match$macros.first_row_empty_case(rows,cljs.core.first(ocrs));
} else {
if(cljs.core.match$macros.all_wildcards_QMARK_(cljs.core.first(rows))){
return cljs.core.match$macros.first_row_wildcards_case(rows,ocrs);
} else {
var col = cljs.core.match$macros.choose_column(pm);
if(cljs.core.match$macros.first_column_QMARK_(col)){
return cljs.core.match$macros.first_column_chosen_case(pm,col,ocrs);
} else {
return cljs.core.match$macros.other_column_chosen_case(pm,col);
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7952,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7959 = k7952;
var G__7959__$1 = (((G__7959 instanceof cljs.core.Keyword))?G__7959.fqn:null);
switch (G__7959__$1) {
case "rows":
return self__.rows;

break;
case "ocrs":
return self__.ocrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7952,else__4383__auto__);

}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7962){
var vec__7963 = p__7962;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7963,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7963,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.core.match$macros.PatternMatrix{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),self__.ocrs],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7951){
var self__ = this;
var G__7951__$1 = this;
return (new cljs.core.RecordIter((0),G__7951__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1082442510 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7953,other7954){
var self__ = this;
var this7953__$1 = this;
return (((!((other7954 == null)))) && ((this7953__$1.constructor === other7954.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7953__$1.rows,other7954.rows)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7953__$1.ocrs,other7954.ocrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7953__$1.__extmap,other7954.__extmap)));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7949_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__7949_SHARP_,i);
}),self__.rows));
return (new cljs.core.match$macros.PatternMatrix(nrows,self__.ocrs,null,null,null));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7950_SHARP_){
return cljs.core.match.protocols.swap(p1__7950_SHARP_,idx);
}),self__.rows));
return (new cljs.core.match$macros.PatternMatrix(nrows,cljs.core.match.protocols.swap(self__.ocrs,idx),null,null,null));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),null,new cljs.core.Keyword(null,"rows","rows",850049680),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7951){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7973 = cljs.core.keyword_identical_QMARK_;
var expr__7974 = k__4388__auto__;
if(cljs.core.truth_((pred__7973.cljs$core$IFn$_invoke$arity$2 ? pred__7973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),expr__7974) : pred__7973.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),expr__7974)))){
return (new cljs.core.match$macros.PatternMatrix(G__7951,self__.ocrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7973.cljs$core$IFn$_invoke$arity$2 ? pred__7973.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__7974) : pred__7973.call(null,new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__7974)))){
return (new cljs.core.match$macros.PatternMatrix(self__.rows,G__7951,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7951),null));
}
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),self__.ocrs,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7951){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,G__7951,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.core.match$macros.PatternMatrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"ocrs","ocrs",-195684886,null)], null);
}));

(cljs.core.match$macros.PatternMatrix.cljs$lang$type = true);

(cljs.core.match$macros.PatternMatrix.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/PatternMatrix",null,(1),null));
}));

(cljs.core.match$macros.PatternMatrix.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.core.match$macros/PatternMatrix");
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
cljs.core.match$macros.map__GT_PatternMatrix = (function cljs$core$match$macros$map__GT_PatternMatrix(G__7955){
var extmap__4419__auto__ = (function (){var G__7981 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7955,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], 0));
if(cljs.core.record_QMARK_(G__7955)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7981);
} else {
return G__7981;
}
})();
return (new cljs.core.match$macros.PatternMatrix(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(G__7955),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(G__7955),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.pattern_matrix = (function cljs$core$match$macros$pattern_matrix(rows,ocrs){
var rows__$1 = ((cljs.core.vector_QMARK_(rows))?rows:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,rows));
var ocrs__$1 = ((cljs.core.vector_QMARK_(ocrs))?ocrs:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,ocrs));
return (new cljs.core.match$macros.PatternMatrix(rows__$1,ocrs__$1,null,null,null));
});
cljs.core.match$macros.default_specialize_matrix = (function cljs$core$match$macros$default_specialize_matrix(p,matrix){
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var focr = cljs.core.first(ocrs);
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7988_SHARP_){
return cljs.core.match$macros.drop_nth_bind(p1__7988_SHARP_,(0),focr);
}),rows));
var nocrs = cljs.core.match.protocols.drop_nth(ocrs,(0));
return cljs.core.match$macros.pattern_matrix(nrows,nocrs);
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
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
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.sym,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(other));
} else {
return cljs.core.not(new cljs.core.Keyword(null,"named","named",-422393479).cljs$core$IFn$_invoke$arity$1(other));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__7991 = k;
var G__7991__$1 = (((G__7991 instanceof cljs.core.Keyword))?G__7991.fqn:null);
switch (G__7991__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"named","named",1218138048,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.WildcardPattern.cljs$lang$type = true);

(cljs.core.match$macros.WildcardPattern.cljs$lang$ctorStr = "cljs.core.match$macros/WildcardPattern");

(cljs.core.match$macros.WildcardPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/WildcardPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/WildcardPattern.
 */
cljs.core.match$macros.__GT_WildcardPattern = (function cljs$core$match$macros$__GT_WildcardPattern(sym,named,_meta){
return (new cljs.core.match$macros.WildcardPattern(sym,named,_meta));
});

cljs.core.match$macros.wildcard_pattern = (function cljs$core$match$macros$wildcard_pattern(var_args){
var G__8000 = arguments.length;
switch (G__8000) {
case 0:
return cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"_","_",-1201019570,null));
}));

(cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$1 = (function (sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return (new cljs.core.match$macros.WildcardPattern(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),false,null));
} else {
return (new cljs.core.match$macros.WildcardPattern(sym,true,null));
}
}));

(cljs.core.match$macros.wildcard_pattern.cljs$lang$maxFixedArity = 1);

cljs.core.match$macros.wildcard_pattern_QMARK_ = (function cljs$core$match$macros$wildcard_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.WildcardPattern);
});
cljs.core.match$macros.named_wildcard_pattern_QMARK_ = (function cljs$core$match$macros$named_wildcard_pattern_QMARK_(x){
if((x instanceof cljs.core.match$macros.WildcardPattern)){
return new cljs.core.Keyword(null,"named","named",-422393479).cljs$core$IFn$_invoke$arity$1(x);
} else {
return false;
}
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.l], 0));
}
}));

(cljs.core.match$macros.LiteralPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.LiteralPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.l,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8002 = k;
var G__8002__$1 = (((G__8002 instanceof cljs.core.Keyword))?G__8002.fqn:null);
switch (G__8002__$1) {
case "l":
return self__.l;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",-1699299641);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.l,cljs.core.List.EMPTY)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))));
} else {
if((((self__.l instanceof cljs.core.Symbol)) && (cljs.core.not(new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.l)))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,self__.l,null,(1),null))))),null,(1),null))], 0))));
} else {
if(((typeof self__.l === 'number') || (typeof self__.l === 'string') || (self__.l === true) || (self__.l === false) || ((self__.l == null)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.l,null,(1),null))], 0))));
} else {
if((self__.l instanceof cljs.core.Keyword)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.l,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.l,null,(1),null))], 0))));

}
}
}
}
}));

(cljs.core.match$macros.LiteralPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.LiteralPattern.cljs$lang$type = true);

(cljs.core.match$macros.LiteralPattern.cljs$lang$ctorStr = "cljs.core.match$macros/LiteralPattern");

(cljs.core.match$macros.LiteralPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/LiteralPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/LiteralPattern.
 */
cljs.core.match$macros.__GT_LiteralPattern = (function cljs$core$match$macros$__GT_LiteralPattern(l,_meta){
return (new cljs.core.match$macros.LiteralPattern(l,_meta));
});

cljs.core.match$macros.literal_pattern = (function cljs$core$match$macros$literal_pattern(l){
return (new cljs.core.match$macros.LiteralPattern(l,cljs.core.meta(l)));
});
cljs.core.match$macros.literal_pattern_QMARK_ = (function cljs$core$match$macros$literal_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.LiteralPattern);
});


cljs.core.match$macros.specialize_seq_pattern_rest_row = (function cljs$core$match$macros$specialize_seq_pattern_rest_row(focr,row){
var p = cljs.core.first(row);
var p__$1 = (cljs.core.truth_((cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.seq_pattern_QMARK_.call(null,p)))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p))):cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0());
return cljs.core.match$macros.drop_nth_bind(row,(0),focr).cljs$core$match$protocols$IVecMod$prepend$arity$2(null,p__$1);
});
cljs.core.match$macros.specialize_seq_pattern_rest_matrix = (function cljs$core$match$macros$specialize_seq_pattern_rest_matrix(rows,focr){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.specialize_seq_pattern_rest_row,focr),rows));
});
cljs.core.match$macros.seq_pattern_matrix_rest_ocrs = (function cljs$core$match$macros$seq_pattern_matrix_rest_ocrs(ocrs,focr){
return ocrs;
});
cljs.core.match$macros.specialize_seq_pattern_row = (function cljs$core$match$macros$specialize_seq_pattern_row(focr,row){
var p = cljs.core.first(row);
var vec__8008 = (cljs.core.truth_((cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.seq_pattern_QMARK_.call(null,p)))?(function (){var vec__8012 = new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p);
var seq__8013 = cljs.core.seq(vec__8012);
var first__8014 = cljs.core.first(seq__8013);
var seq__8013__$1 = cljs.core.next(seq__8013);
var h = first__8014;
var t = seq__8013__$1;
var t__$1 = ((cljs.core.empty_QMARK_(t))?cljs.core.match$macros.literal_pattern(cljs.core.List.EMPTY):(cljs.core.truth_((function (){var G__8017 = cljs.core.first(t);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__8017) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__8017));
})())?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(t)):(cljs.core.match$macros.seq_pattern.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.seq_pattern.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.match$macros.seq_pattern.call(null,t))
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,t__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8008,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8008,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,h], null));
});
cljs.core.match$macros.specialize_seq_pattern_matrix = (function cljs$core$match$macros$specialize_seq_pattern_matrix(rows,focr){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.specialize_seq_pattern_row,focr),rows));
});
cljs.core.match$macros.seq_pattern_matrix_ocrs = (function cljs$core$match$macros$seq_pattern_matrix_ocrs(ocrs,focr){
var seq_sym = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"seq-sym","seq-sym",-525219406).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(focr));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return focr;
}
})();
var sym_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873),new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"seq-sym","seq-sym",-525219406),focr], null);
var hsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(seq_sym),"_head__"].join(''));
var hsym__$1 = cljs.core.with_meta(hsym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sym_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,focr,null,(1),null)))))));
var tsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(seq_sym),"_tail__"].join(''));
var tsym__$1 = cljs.core.with_meta(tsym,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sym_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,focr,null,(1),null)))))));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hsym__$1,tsym__$1], null),cljs.core.match.protocols.drop_nth(ocrs,(0)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8025 = k;
var G__8025__$1 = (((G__8025 instanceof cljs.core.Keyword))?G__8025.fqn:null);
switch (G__8025__$1) {
case "s":
return self__.s;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",-634730153);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if((((cljs.core.count(self__.s) >= (1))) && (cljs.core.not((function (){var G__8027 = cljs.core.first(self__.s);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__8027) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__8027));
})())))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null))], 0))));
}
}));

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var focr = cljs.core.first(ocrs);
if(cljs.core.not((function (){var G__8028 = cljs.core.first(self__.s);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__8028) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__8028));
})())){
var nrows = cljs.core.match$macros.specialize_seq_pattern_matrix(rows,focr);
var nocrs = cljs.core.match$macros.seq_pattern_matrix_ocrs(ocrs,focr);
return cljs.core.match$macros.pattern_matrix(nrows,nocrs);
} else {
var nrows = cljs.core.match$macros.specialize_seq_pattern_rest_matrix(rows,focr);
var nocrs = cljs.core.match$macros.seq_pattern_matrix_rest_ocrs(ocrs,focr);
return cljs.core.match$macros.pattern_matrix(nrows,nocrs);
}
}));

(cljs.core.match$macros.SeqPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.SeqPattern.cljs$lang$type = true);

(cljs.core.match$macros.SeqPattern.cljs$lang$ctorStr = "cljs.core.match$macros/SeqPattern");

(cljs.core.match$macros.SeqPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/SeqPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/SeqPattern.
 */
cljs.core.match$macros.__GT_SeqPattern = (function cljs$core$match$macros$__GT_SeqPattern(s,_meta){
return (new cljs.core.match$macros.SeqPattern(s,_meta));
});

cljs.core.match$macros.seq_pattern = (function cljs$core$match$macros$seq_pattern(s){
if(cljs.core.sequential_QMARK_(s)){
} else {
throw (new Error("Assert failed: (sequential? s)"));
}

if((!(cljs.core.empty_QMARK_(s)))){
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8032,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8038 = k8032;
var G__8038__$1 = (((G__8038 instanceof cljs.core.Keyword))?G__8038.fqn:null);
switch (G__8038__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8032,else__4383__auto__);

}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__8040){
var vec__8041 = p__8040;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8041,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8041,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.core.match$macros.RestPattern{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8031){
var self__ = this;
var G__8031__$1 = this;
return (new cljs.core.RecordIter((0),G__8031__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1478558536 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8033,other8034){
var self__ = this;
var this8033__$1 = this;
return (((!((other8034 == null)))) && ((this8033__$1.constructor === other8034.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8033__$1.p,other8034.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8033__$1.__extmap,other8034.__extmap)));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8031){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8049 = cljs.core.keyword_identical_QMARK_;
var expr__8050 = k__4388__auto__;
if(cljs.core.truth_((pred__8049.cljs$core$IFn$_invoke$arity$2 ? pred__8049.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__8050) : pred__8049.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__8050)))){
return (new cljs.core.match$macros.RestPattern(G__8031,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__8031),null));
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8031){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.RestPattern(self__.p,G__8031,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.core.match$macros.RestPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(cljs.core.match$macros.RestPattern.cljs$lang$type = true);

(cljs.core.match$macros.RestPattern.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/RestPattern",null,(1),null));
}));

(cljs.core.match$macros.RestPattern.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.core.match$macros/RestPattern");
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
cljs.core.match$macros.map__GT_RestPattern = (function cljs$core$match$macros$map__GT_RestPattern(G__8036){
var extmap__4419__auto__ = (function (){var G__8055 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8036,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__8036)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8055);
} else {
return G__8055;
}
})();
return (new cljs.core.match$macros.RestPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__8036),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.rest_pattern = (function cljs$core$match$macros$rest_pattern(p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cljs.core.match$macros.RestPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477),new cljs.core.Keyword("cljs.core.match","rest","cljs.core.match/rest",-410436433));
});
cljs.core.match$macros.rest_pattern_QMARK_ = (function cljs$core$match$macros$rest_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.RestPattern);
});
cljs.core.match$macros.specialize_map_key_pattern_matrix = (function cljs$core$match$macros$specialize_map_key_pattern_matrix(rows){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(rows));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8059_SHARP_){
return cljs.core.match.protocols.prepend(p1__8059_SHARP_,p);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8058_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__8058_SHARP_,(0));
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222),null,(1),null))], 0))));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8062,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8069 = k8062;
var G__8069__$1 = (((G__8069 instanceof cljs.core.Keyword))?G__8069.fqn:null);
switch (G__8069__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8062,else__4383__auto__);

}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__8071){
var vec__8072 = p__8071;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8072,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8072,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#cljs.core.match$macros.MapKeyPattern{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8061){
var self__ = this;
var G__8061__$1 = this;
return (new cljs.core.RecordIter((0),G__8061__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-2099047708 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8063,other8064){
var self__ = this;
var this8063__$1 = this;
return (((!((other8064 == null)))) && ((this8063__$1.constructor === other8064.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8063__$1.p,other8064.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8063__$1.__extmap,other8064.__extmap)));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$IExistentialPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var nrows = cljs.core.match$macros.specialize_map_key_pattern_matrix(rows);
return cljs.core.match$macros.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8061){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8080 = cljs.core.keyword_identical_QMARK_;
var expr__8081 = k__4388__auto__;
if(cljs.core.truth_((pred__8080.cljs$core$IFn$_invoke$arity$2 ? pred__8080.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__8081) : pred__8080.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__8081)))){
return (new cljs.core.match$macros.MapKeyPattern(G__8061,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__8061),null));
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8061){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.MapKeyPattern(self__.p,G__8061,self__.__extmap,self__.__hash));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(cljs.core.match$macros.MapKeyPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(cljs.core.match$macros.MapKeyPattern.cljs$lang$type = true);

(cljs.core.match$macros.MapKeyPattern.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"cljs.core.match$macros/MapKeyPattern",null,(1),null));
}));

(cljs.core.match$macros.MapKeyPattern.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"cljs.core.match$macros/MapKeyPattern");
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
cljs.core.match$macros.map__GT_MapKeyPattern = (function cljs$core$match$macros$map__GT_MapKeyPattern(G__8066){
var extmap__4419__auto__ = (function (){var G__8084 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8066,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__8066)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8084);
} else {
return G__8084;
}
})();
return (new cljs.core.match$macros.MapKeyPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__8066),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.map_key_pattern = (function cljs$core$match$macros$map_key_pattern(p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cljs.core.match$macros.MapKeyPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477),new cljs.core.Keyword("cljs.core.match","map-key","cljs.core.match/map-key",852254431));
});
cljs.core.match$macros.map_key_pattern_QMARK_ = (function cljs$core$match$macros$map_key_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.MapKeyPattern);
});

cljs.core.match$macros.row_keys = (function cljs$core$match$macros$row_keys(row,env){
var p = cljs.core.first(row);
var only = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p));
if(((cljs.core.not(cljs.core.deref(new cljs.core.Keyword(null,"only?","only?",504823581).cljs$core$IFn$_invoke$arity$1(env)))) && (cljs.core.seq(only)))){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"only?","only?",504823581).cljs$core$IFn$_invoke$arity$1(env),true);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(p))),cljs.core.set(only)], null);
});
cljs.core.match$macros.get_all_keys = (function cljs$core$match$macros$get_all_keys(rows,env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8085_SHARP_){
return cljs.core.match$macros.row_keys(p1__8085_SHARP_,env);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.wildcard_pattern_QMARK_,cljs.core.first),rows))));
});
cljs.core.match$macros.wrap_values = (function cljs$core$match$macros$wrap_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8086){
var vec__8087 = p__8086;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8087,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8087,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.match$macros.wildcard_pattern_QMARK_(v))?cljs.core.match$macros.map_key_pattern(v):v)], null);
}),m));
});
cljs.core.match$macros.get_ocr_map = (function cljs$core$match$macros$get_ocr_map(p,p__8090){
var map__8091 = p__8090;
var map__8091__$1 = (((((!((map__8091 == null))))?(((((map__8091.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8091.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8091):map__8091);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8091__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8091__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var wc_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8091__$1,new cljs.core.Keyword(null,"wc-map","wc-map",-57721646));
if(cljs.core.truth_((cljs.core.match$macros.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.map_pattern_QMARK_.call(null,p)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(only)?cljs.core.zipmap(all_keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.literal_pattern(new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)))):null),wc_map,cljs.core.match$macros.wrap_values(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(p))], 0));
} else {
return wc_map;
}
});
cljs.core.match$macros.specialize_map_pattern_row = (function cljs$core$match$macros$specialize_map_pattern_row(row,p__8094){
var map__8095 = p__8094;
var map__8095__$1 = (((((!((map__8095 == null))))?(((((map__8095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8095):map__8095);
var env = map__8095__$1;
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8095__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8095__$1,new cljs.core.Keyword(null,"only?","only?",504823581));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8095__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var p = cljs.core.first(row);
var only = cljs.core.seq(new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
var ocr_map = cljs.core.match$macros.get_ocr_map(p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"only","only",1907811652),only));
var ps = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ocr_map,all_keys));
var ps__$1 = (cljs.core.truth_(cljs.core.deref(only_QMARK_))?((only)?(function (){var a = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",981564201,null)], null));
return cljs.core.cons((function (){var G__8097 = cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();
var G__8098 = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,a,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(only)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null));
return (cljs.core.match$macros.guard_pattern.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.guard_pattern.cljs$core$IFn$_invoke$arity$2(G__8097,G__8098) : cljs.core.match$macros.guard_pattern.call(null,G__8097,G__8098));
})(),ps);
})():cljs.core.cons(cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),ps)):ps);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps__$1));
});
cljs.core.match$macros.specialize_map_pattern_matrix = (function cljs$core$match$macros$specialize_map_pattern_matrix(rows,env){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8099_SHARP_){
return cljs.core.match$macros.specialize_map_pattern_row(p1__8099_SHARP_,env);
}),rows));
});
cljs.core.match$macros.gen_map_pattern_ocr = (function cljs$core$match$macros$gen_map_pattern_ocr(ocr,k){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(ocr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k).replace(".","_DOT_")),"__"].join(''));
});
cljs.core.match$macros.map_pattern_matrix_ocr_sym = (function cljs$core$match$macros$map_pattern_matrix_ocr_sym(k,env){
var focr = new cljs.core.Keyword(null,"focr","focr",-820561400).cljs$core$IFn$_invoke$arity$1(env);
var ocr = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ocrs-map","ocrs-map",76084823),k], null));
return cljs.core.with_meta(ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map-sym","map-sym",1467543192),focr,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.match$macros.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([focr,k,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)], 0))], null));
});
cljs.core.match$macros.map_pattern_matrix_ocrs = (function cljs$core$match$macros$map_pattern_matrix_ocrs(ocrs,env){
var focr = new cljs.core.Keyword(null,"focr","focr",-820561400).cljs$core$IFn$_invoke$arity$1(env);
var mocrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8100_SHARP_){
return cljs.core.match$macros.map_pattern_matrix_ocr_sym(p1__8100_SHARP_,env);
}),new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070).cljs$core$IFn$_invoke$arity$1(env));
var mocrs__$1 = cljs.core.vec((cljs.core.truth_(cljs.core.deref(new cljs.core.Keyword(null,"only?","only?",504823581).cljs$core$IFn$_invoke$arity$1(env)))?cljs.core.cons(focr,mocrs):mocrs));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(mocrs__$1,cljs.core.match.protocols.drop_nth(ocrs,(0)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.m)," :only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(self__._meta);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())].join('');
}));

(cljs.core.match$macros.MapPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match$macros.MapPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.m,new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8102 = k;
var G__8102__$1 = (((G__8102 instanceof cljs.core.Keyword))?G__8102.fqn:null);
switch (G__8102__$1) {
case "m":
return self__.m;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",-150575073,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ocr,null,(1),null))], 0))));
}));

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var focr = cljs.core.first(ocrs);
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focr","focr",-820561400),focr,new cljs.core.Keyword(null,"only?","only?",504823581),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false)], null);
var all_keys = cljs.core.match$macros.get_all_keys(rows,env);
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070),all_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wc-map","wc-map",-57721646),cljs.core.zipmap(all_keys,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.wildcard_pattern)),new cljs.core.Keyword(null,"ocrs-map","ocrs-map",76084823),cljs.core.zipmap(all_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8101_SHARP_){
return cljs.core.match$macros.gen_map_pattern_ocr(focr,p1__8101_SHARP_);
}),all_keys))], 0));
var nrows = cljs.core.match$macros.specialize_map_pattern_matrix(rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match$macros.map_pattern_matrix_ocrs(ocrs,env_SINGLEQUOTE_);
return cljs.core.match$macros.pattern_matrix(nrows,nocrs);
}));

(cljs.core.match$macros.MapPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.MapPattern.cljs$lang$type = true);

(cljs.core.match$macros.MapPattern.cljs$lang$ctorStr = "cljs.core.match$macros/MapPattern");

(cljs.core.match$macros.MapPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/MapPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/MapPattern.
 */
cljs.core.match$macros.__GT_MapPattern = (function cljs$core$match$macros$__GT_MapPattern(m,_meta){
return (new cljs.core.match$macros.MapPattern(m,_meta));
});

cljs.core.match$macros.map_pattern = (function cljs$core$match$macros$map_pattern(var_args){
var G__8108 = arguments.length;
switch (G__8108) {
case 0:
return cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
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
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error("Assert failed: (map? m)"));
}

return (new cljs.core.match$macros.MapPattern(m,null));
}));

(cljs.core.match$macros.map_pattern.cljs$lang$maxFixedArity = 1);

cljs.core.match$macros.map_pattern_QMARK_ = (function cljs$core$match$macros$map_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.MapPattern);
});
cljs.core.match$macros.calc_rest_QMARK__and_min_size = (function cljs$core$match$macros$calc_rest_QMARK__and_min_size(rows,env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__8136,p__8137){
var vec__8139 = p__8136;
var rest_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8139,(1),null);
var vec__8142 = p__8137;
var seq__8143 = cljs.core.seq(vec__8142);
var first__8144 = cljs.core.first(seq__8143);
var seq__8143__$1 = cljs.core.next(seq__8143);
var p = first__8144;
var ps = seq__8143__$1;
if(cljs.core.truth_((cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.vector_pattern_QMARK_.call(null,p)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__4126__auto__ = rest_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(p);
}
})(),(function (){var x__4217__auto__ = min_size;
var y__4218__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p);
return ((x__4217__auto__ < y__4218__auto__) ? x__4217__auto__ : y__4218__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rest_QMARK_,min_size], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fp","fp",-469175650).cljs$core$IFn$_invoke$arity$1(env))], null),rows);
});
cljs.core.match$macros.specialize_vector_pattern_row = (function cljs$core$match$macros$specialize_vector_pattern_row(row,p__8154){
var map__8155 = p__8154;
var map__8155__$1 = (((((!((map__8155 == null))))?(((((map__8155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8155):map__8155);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8155__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8155__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.vector_pattern_QMARK_.call(null,p)))?cljs.core.match.protocols.split(p,min_size):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null)
);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps));
});
cljs.core.match$macros.specialize_vector_pattern_row_non_rest = (function cljs$core$match$macros$specialize_vector_pattern_row_non_rest(row,p__8157){
var map__8158 = p__8157;
var map__8158__$1 = (((((!((map__8158 == null))))?(((((map__8158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8158):map__8158);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8158__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8158__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.vector_pattern_QMARK_.call(null,p)))?cljs.core.reverse(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(min_size,cljs.core.match$macros.wildcard_pattern));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),ps);
});
cljs.core.match$macros.specialize_vector_pattern_matrix = (function cljs$core$match$macros$specialize_vector_pattern_matrix(rows,env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8160_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row(p1__8160_SHARP_,env);
}),rows));
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8161_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row_non_rest(p1__8161_SHARP_,env);
}),rows));
}
});
cljs.core.match$macros.vector_pattern_ocr_sym = (function cljs$core$match$macros$vector_pattern_ocr_sym(p__8162,i){
var map__8163 = p__8162;
var map__8163__$1 = (((((!((map__8163 == null))))?(((((map__8163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8163.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8163):map__8163);
var pat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8163__$1,new cljs.core.Keyword(null,"pat","pat",-1417570164));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8163__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8163__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var ocr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(focr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
return cljs.core.with_meta(ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",-1671818864),focr,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),(function (){var temp__5733__auto__ = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(pat);
if(cljs.core.truth_(temp__5733__auto__)){
var offset = temp__5733__auto__;
return cljs.core.match$macros.nth_offset_inline.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.match$macros.with_tag(tag,focr),i,offset);
} else {
return cljs.core.match$macros.nth_inline.cljs$core$IFn$_invoke$arity$3(tag,cljs.core.match$macros.with_tag(tag,focr),i);
}
})()], null));
});
cljs.core.match$macros.vector_pattern_matrix_ocrs = (function cljs$core$match$macros$vector_pattern_matrix_ocrs(ocrs,p__8165){
var map__8166 = p__8165;
var map__8166__$1 = (((((!((map__8166 == null))))?(((((map__8166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8166):map__8166);
var env = map__8166__$1;
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8166__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8166__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8166__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var rest_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8166__$1,new cljs.core.Keyword(null,"rest?","rest?",345335951));
if(cljs.core.truth_(rest_QMARK_)){
var ocr_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",-1671818864),focr], null);
var vl_ocr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(focr),"_left__"].join(''));
var vl_ocr__$1 = cljs.core.with_meta(vl_ocr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.match$macros.subvec_inline.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.match$macros.with_tag(tag,focr),(0),min_size)));
var vr_ocr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(focr),"_right__"].join(''));
var vr_ocr__$1 = cljs.core.with_meta(vr_ocr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.match$macros.subvec_inline.cljs$core$IFn$_invoke$arity$3(tag,cljs.core.match$macros.with_tag(tag,focr),min_size)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vl_ocr__$1,vr_ocr__$1], null),cljs.core.match.protocols.drop_nth(ocrs,(0)));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.vector_pattern_ocr_sym,env),cljs.core.range.cljs$core$IFn$_invoke$arity$1(min_size)),cljs.core.match.protocols.drop_nth(ocrs,(0)));
}
});
cljs.core.match$macros.array_tag = (function cljs$core$match$macros$array_tag(x){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"bytes","bytes",-1478569089,null),new cljs.core.Keyword("cljs.core.match","array","cljs.core.match/array",1503073376),new cljs.core.Symbol(null,"shorts","shorts",107738238,null),new cljs.core.Keyword("cljs.core.match","shorts","cljs.core.match/shorts",-552653627),new cljs.core.Symbol(null,"ints","ints",-1761239845,null),new cljs.core.Keyword("cljs.core.match","ints","cljs.core.match/ints",-406235954),new cljs.core.Symbol(null,"longs","longs",-1017696020,null),new cljs.core.Keyword("cljs.core.match","longs","cljs.core.match/longs",-652539949),new cljs.core.Symbol(null,"doubles","doubles",-1517872169,null),new cljs.core.Keyword("cljs.core.match","doubles","cljs.core.match/doubles",-56405410),new cljs.core.Symbol(null,"objects","objects",-554722035,null),new cljs.core.Keyword("cljs.core.match","objects","cljs.core.match/objects",-1548561908)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.match.protocols.IVectorPattern}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.match.protocols.IContainsRestPattern}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return (((other instanceof cljs.core.match$macros.VectorPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8168_SHARP_){
return (p1__8168_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8168_SHARP_.cljs$core$IFn$_invoke$arity$1(other) : p1__8168_SHARP_.call(null,other));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"rest?","rest?",345335951)], null)))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8171 = k;
var G__8171__$1 = (((G__8171 instanceof cljs.core.Keyword))?G__8171.fqn:null);
switch (G__8171__$1) {
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
return new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
var t__$1 = (function (){var or__4126__auto__ = cljs.core.match$macros.array_tag(ocr);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return self__.t;
}
})();
if(cljs.core.truth_(cljs.core.match$macros.check_size_QMARK_.cljs$core$IFn$_invoke$arity$1(t__$1))){
if(cljs.core.truth_(self__.rest_QMARK_)){
return cljs.core.match$macros.test_with_min_size_inline.cljs$core$IFn$_invoke$arity$3(t__$1,ocr,self__.size);
} else {
return cljs.core.match$macros.test_with_size_inline.cljs$core$IFn$_invoke$arity$3(t__$1,ocr,self__.size);
}
} else {
return cljs.core.match$macros.test_inline.cljs$core$IFn$_invoke$arity$2(t__$1,ocr);
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
var lv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.v,(0),n);
var rv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(self__.v,n);
var pl = (new cljs.core.match$macros.VectorPattern(lv,self__.t,n,self__.offset,false,self__._meta));
var pr = ((cljs.core.match$macros.rest_pattern_QMARK_(cljs.core.first(rv)))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(rv)):(function (){var rest_QMARK___$1 = cljs.core.some(cljs.core.match$macros.rest_pattern_QMARK_,rv);
var rvc = cljs.core.count(rv);
var size__$1 = (cljs.core.truth_(rest_QMARK___$1)?(rvc - (1)):rvc);
return (new cljs.core.match$macros.VectorPattern(rv,self__.t,size__$1,n,rest_QMARK___$1,self__._meta));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pl,pr], null);
}));

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var focr = cljs.core.first(ocrs);
var env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focr","focr",-820561400),focr,new cljs.core.Keyword(null,"fp","fp",-469175650),cljs.core.ffirst(rows),new cljs.core.Keyword(null,"pat","pat",-1417570164),this$__$1], null);
var vec__8173 = cljs.core.match$macros.calc_rest_QMARK__and_min_size(rows,env);
var rest_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8173,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8173,(1),null);
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"rest?","rest?",345335951),rest_QMARK___$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"min-size","min-size",1058361905),min_size,new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var or__4126__auto__ = cljs.core.match$macros.array_tag(focr);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(this$__$1);
}
})()], 0));
var nrows = cljs.core.match$macros.specialize_vector_pattern_matrix(rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match$macros.vector_pattern_matrix_ocrs(ocrs,env_SINGLEQUOTE_);
return cljs.core.match$macros.pattern_matrix(nrows,nocrs);
}));

(cljs.core.match$macros.VectorPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"rest?","rest?",1985867478,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.VectorPattern.cljs$lang$type = true);

(cljs.core.match$macros.VectorPattern.cljs$lang$ctorStr = "cljs.core.match$macros/VectorPattern");

(cljs.core.match$macros.VectorPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/VectorPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/VectorPattern.
 */
cljs.core.match$macros.__GT_VectorPattern = (function cljs$core$match$macros$__GT_VectorPattern(v,t,size,offset,rest_QMARK_,_meta){
return (new cljs.core.match$macros.VectorPattern(v,t,size,offset,rest_QMARK_,_meta));
});

cljs.core.match$macros.vector_pattern = (function cljs$core$match$macros$vector_pattern(var_args){
var G__8178 = arguments.length;
switch (G__8178) {
case 0:
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),null,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(v,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),null,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$2 = (function (v,t){
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(v,t,null,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$3 = (function (v,t,offset){
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(v,t,offset,null);
}));

(cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4 = (function (v,t,offset,rest_QMARK_){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var c = cljs.core.count(v);
var size = (cljs.core.truth_(rest_QMARK_)?(c - (1)):c);
return (new cljs.core.match$macros.VectorPattern(v,t,size,offset,rest_QMARK_,null));
}));

(cljs.core.match$macros.vector_pattern.cljs$lang$maxFixedArity = 4);

cljs.core.match$macros.vector_pattern_QMARK_ = (function cljs$core$match$macros$vector_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.VectorPattern);
});
cljs.core.match$macros.specialize_or_pattern_row = (function cljs$core$match$macros$specialize_or_pattern_row(row,pat,ps){
var p = cljs.core.first(row);
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.match$macros.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(pat,p);
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.match$macros.wildcard_pattern_QMARK_(p)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__$1){
return cljs.core.match$macros.update_pattern(row,(0),p__$1);
}),ps);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
}
});
cljs.core.match$macros.specialize_or_pattern_matrix = (function cljs$core$match$macros$specialize_or_pattern_matrix(rows,pat,ps){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8181_SHARP_){
return cljs.core.match$macros.specialize_or_pattern_row(p1__8181_SHARP_,pat,ps);
}),rows)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return (((other instanceof cljs.core.match$macros.OrPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ps,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8188 = k;
var G__8188__$1 = (((G__8188 instanceof cljs.core.Keyword))?G__8188.fqn:null);
switch (G__8188__$1) {
case "ps":
return self__.ps;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",1151305311);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var nrows = cljs.core.match$macros.specialize_or_pattern_matrix(rows,this$__$1,self__.ps);
return cljs.core.match$macros.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match$macros.OrPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",1932889573,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.OrPattern.cljs$lang$type = true);

(cljs.core.match$macros.OrPattern.cljs$lang$ctorStr = "cljs.core.match$macros/OrPattern");

(cljs.core.match$macros.OrPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/OrPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/OrPattern.
 */
cljs.core.match$macros.__GT_OrPattern = (function cljs$core$match$macros$__GT_OrPattern(ps,_meta){
return (new cljs.core.match$macros.OrPattern(ps,_meta));
});

cljs.core.match$macros.or_pattern = (function cljs$core$match$macros$or_pattern(p){
if(cljs.core.vector_QMARK_(p)){
} else {
throw (new Error("Assert failed: (vector? p)"));
}

return (new cljs.core.match$macros.OrPattern(p,null));
});
cljs.core.match$macros.or_pattern_QMARK_ = (function cljs$core$match$macros$or_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.OrPattern);
});
cljs.core.match$macros.specialize_guard_pattern_matrix = (function cljs$core$match$macros$specialize_guard_pattern_matrix(rows){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8197){
var vec__8198 = p__8197;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8198,(0),null);
var row = vec__8198;
if(cljs.core.truth_((cljs.core.match$macros.guard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.guard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.guard_pattern_QMARK_.call(null,p)))){
return cljs.core.match$macros.update_pattern(row,(0),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return (((other instanceof cljs.core.match$macros.GuardPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.gs,new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8206 = k;
var G__8206__$1 = (((G__8206 instanceof cljs.core.Keyword))?G__8206.fqn:null);
switch (G__8206__$1) {
case "p":
return self__.p;

break;
case "gs":
return self__.gs;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",-2126094417);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ocr)))));
}));

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var nrows = cljs.core.match$macros.specialize_guard_pattern_matrix(rows);
return cljs.core.match$macros.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match$macros.GuardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"gs","gs",-1065948605,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.GuardPattern.cljs$lang$type = true);

(cljs.core.match$macros.GuardPattern.cljs$lang$ctorStr = "cljs.core.match$macros/GuardPattern");

(cljs.core.match$macros.GuardPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/GuardPattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/GuardPattern.
 */
cljs.core.match$macros.__GT_GuardPattern = (function cljs$core$match$macros$__GT_GuardPattern(p,gs,_meta){
return (new cljs.core.match$macros.GuardPattern(p,gs,_meta));
});

cljs.core.match$macros.guard_pattern = (function cljs$core$match$macros$guard_pattern(p,gs){
if(cljs.core.set_QMARK_(gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match$macros.GuardPattern(p,gs,null));
});
cljs.core.match$macros.guard_pattern_QMARK_ = (function cljs$core$match$macros$guard_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.GuardPattern);
});
cljs.core.match$macros.app_pattern_matrix_ocrs = (function cljs$core$match$macros$app_pattern_matrix_ocrs(p__8207,form){
var vec__8208 = p__8207;
var focr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8208,(0),null);
var ocrs = vec__8208;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["app_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(focr)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(focr));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return focr;
}
})(),null,(1),null)))))], null))], null),ocrs);
});
cljs.core.match$macros.specialize_app_pattern_matrix = (function cljs$core$match$macros$specialize_app_pattern_matrix(rows,form){
var vec__8211 = cljs.core.split_with((function (p__8214){
var vec__8215 = p__8214;
var pat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8215,(0),null);
var row = vec__8215;
var and__4115__auto__ = (cljs.core.match$macros.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(pat) : cljs.core.match$macros.app_pattern_QMARK_.call(null,pat));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(pat),form);
} else {
return and__4115__auto__;
}
}),rows);
var matched_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8211,(0),null);
var rest_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8211,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.match$macros.update_pattern(row,(0),cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()).cljs$core$match$protocols$IVecMod$prepend$arity$2(null,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)));
}),matched_rows),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.match.protocols.prepend(row,cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0());
}),rest_rows)));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPseudoPattern}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return (((other instanceof cljs.core.match$macros.AppPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.form,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8218 = k;
var G__8218__$1 = (((G__8218 instanceof cljs.core.Keyword))?G__8218.fqn:null);
switch (G__8218__$1) {
case "p":
return self__.p;

break;
case "form":
return self__.form;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",-668230373);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var nocrs = cljs.core.match$macros.app_pattern_matrix_ocrs(ocrs,self__.form);
var nrows = cljs.core.match$macros.specialize_app_pattern_matrix(rows,self__.form);
return cljs.core.match$macros.pattern_matrix(nrows,nocrs);
}));

(cljs.core.match$macros.AppPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.AppPattern.cljs$lang$type = true);

(cljs.core.match$macros.AppPattern.cljs$lang$ctorStr = "cljs.core.match$macros/AppPattern");

(cljs.core.match$macros.AppPattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/AppPattern");
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
cljs.core.match$macros.preds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ret__4785__auto___8507 = (function (){
cljs.core.match$macros.defpred = (function cljs$core$match$macros$defpred(var_args){
var G__8220 = arguments.length;
switch (G__8220) {
case 3:
return cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.match$macros.preds,cljs.core.assoc,name,name);
}));

(cljs.core.match$macros.defpred.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,name,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.core.match$macros.preds,cljs.core.assoc,name,f);
}));

(cljs.core.match$macros.defpred.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.core.match$macros.defpred.cljs$lang$macro = true);

cljs.core.match$macros.specialize_predicate_pattern_matrix = (function cljs$core$match$macros$specialize_predicate_pattern_matrix(rows){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8221){
var vec__8222 = p__8221;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8222,(0),null);
var row = vec__8222;
if(cljs.core.truth_((cljs.core.match$macros.predicate_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.predicate_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.predicate_pattern_QMARK_.call(null,p)))){
return cljs.core.match$macros.update_pattern(row,(0),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p));
} else {
return row;
}
}),rows));
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.match.protocols.ISpecializeMatrix}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return (((other instanceof cljs.core.match$macros.PredicatePattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.gs,new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null,k,null);
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__8227 = k;
var G__8227__$1 = (((G__8227 instanceof cljs.core.Keyword))?G__8227.fqn:null);
switch (G__8227__$1) {
case "p":
return self__.p;

break;
case "gs":
return self__.gs;

break;
case "cljs.core.match/tag":
return new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",-794311346);

break;
default:
return not_found;

}
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ocr)))));
}));

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match$macros.rows(matrix);
var ocrs = cljs.core.match$macros.occurrences(matrix);
var nrows = cljs.core.match$macros.specialize_predicate_pattern_matrix(rows);
return cljs.core.match$macros.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match$macros.PredicatePattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"gs","gs",-1065948605,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match$macros.PredicatePattern.cljs$lang$type = true);

(cljs.core.match$macros.PredicatePattern.cljs$lang$ctorStr = "cljs.core.match$macros/PredicatePattern");

(cljs.core.match$macros.PredicatePattern.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.match$macros/PredicatePattern");
}));

/**
 * Positional factory function for cljs.core.match$macros/PredicatePattern.
 */
cljs.core.match$macros.__GT_PredicatePattern = (function cljs$core$match$macros$__GT_PredicatePattern(p,gs,_meta){
return (new cljs.core.match$macros.PredicatePattern(p,gs,_meta));
});

cljs.core.match$macros.predicate_pattern = (function cljs$core$match$macros$predicate_pattern(p,gs){
if(cljs.core.set_QMARK_(gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match$macros.PredicatePattern(p,gs,null));
});
cljs.core.match$macros.predicate_pattern_QMARK_ = (function cljs$core$match$macros$predicate_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.PredicatePattern);
});
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",-1699299641),new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",-1699299641)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",-2126094417),new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",-2126094417)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","predice","cljs.core.match/predice",173694935),new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",-794311346)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017),new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(a)),new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(b)));
}));
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",1151305311),new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",1151305311)], null),(function (a,b){
var as = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(a);
var bs = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(b);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(as),cljs.core.count(bs))) && (cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.match$macros.groupable_QMARK_,as,bs))));
}));
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296)], null),(function (a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(b))));
}));
cljs.core.match$macros.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",-668230373),new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",-668230373)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(b));
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.to_source !== 'undefined')){
} else {
/**
 * Returns a Clojure form that, when executed, is truthy if the
 *   pattern matches the occurrence. Dispatches on the `type` of the
 *   pattern. For instance, a literal pattern might return `(= ~(:pattern
 *   pattern) ~ocr)`, using `=` to test for a match.
 */
cljs.core.match$macros.to_source = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__8232 = cljs.core.get_global_hierarchy;
return (fexpr__8232.cljs$core$IFn$_invoke$arity$0 ? fexpr__8232.cljs$core$IFn$_invoke$arity$0() : fexpr__8232.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","to-source"),(function (pattern,ocr){
return new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477).cljs$core$IFn$_invoke$arity$1(pattern);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.emit_pattern !== 'undefined')){
} else {
/**
 * Returns the corresponding pattern for the given syntax. Dispatches
 *   on the class of its argument. For example, `[(:or 1 2) 2]` is dispatched
 *   as clojure.lang.IPersistentVector
 */
cljs.core.match$macros.emit_pattern = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__8233 = cljs.core.get_global_hierarchy;
return (fexpr__8233.cljs$core$IFn$_invoke$arity$0 ? fexpr__8233.cljs$core$IFn$_invoke$arity$0() : fexpr__8233.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","emit-pattern"),(function (pattern){
return cljs.core.match.protocols.syntax_tag(pattern);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296);
}));

(cljs.core.List.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",-634730153);
}));

(cljs.core.Cons.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Cons.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",-634730153);
}));

(cljs.core.PersistentHashMap.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017);
}));

(cljs.core.PersistentArrayMap.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017);
}));

(cljs.core.Symbol.prototype.cljs$core$match$protocols$ISyntaxTag$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 = (function (_){
var ___$1 = this;
return new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",-2001901386);
}));

goog.object.set(cljs.core.match.protocols.ISyntaxTag,"object",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"object",(function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));

goog.object.set(cljs.core.match.protocols.ISyntaxTag,"null",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"null",(function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
goog.object.set(cljs.core.match.protocols.ISyntaxTag,"number",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"number",(function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
goog.object.set(cljs.core.match.protocols.ISyntaxTag,"string",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"string",(function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
goog.object.set(cljs.core.match.protocols.ISyntaxTag,"boolean",true);

goog.object.set(cljs.core.match.protocols.syntax_tag,"boolean",(function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
cljs.core.match$macros.emit_patterns = (function cljs$core$match$macros$emit_patterns(var_args){
var G__8236 = arguments.length;
switch (G__8236) {
case 2:
return cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2 = (function (ps,t){
return cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$3(ps,t,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$3 = (function (ps,t,v){
while(true){
if(cljs.core.empty_QMARK_(ps)){
return v;
} else {
var p = cljs.core.first(ps);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var p__$1 = cljs.core.second(ps);
var rp = ((((cljs.core.vector_QMARK_(p__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"seq","seq",-1817803783)))))?cljs.core.match$macros.seq_pattern(cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2(p__$1,t)):cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p__$1));
var G__8511 = cljs.core.nnext(ps);
var G__8512 = t;
var G__8513 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match$macros.rest_pattern(rp));
ps = G__8511;
t = G__8512;
v = G__8513;
continue;
} else {
var G__8514 = cljs.core.next(ps);
var G__8515 = t;
var G__8516 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ps)));
ps = G__8514;
t = G__8515;
v = G__8516;
continue;

}
}
break;
}
}));

(cljs.core.match$macros.emit_patterns.cljs$lang$maxFixedArity = 3);

cljs.core.match$macros.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (pat){
var ps = cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2(pat,new cljs.core.Keyword(null,"vector","vector",1902966158));
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(ps,cljs.core.match$macros._STAR_vector_type_STAR_,(0),cljs.core.some(cljs.core.match$macros.rest_pattern_QMARK_,ps));
}));
cljs.core.match$macros.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017),(function (pat){
return cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8237){
var vec__8238 = p__8237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8238,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8238,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(v)], null);
}),pat))));
}));
cljs.core.match$macros.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",-2001901386),(function (pat){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.match$macros._STAR_locals_STAR_,pat,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222))){
return cljs.core.match$macros.literal_pattern(cljs.core.with_meta(pat,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(pat),new cljs.core.Keyword(null,"local","local",-1497766724),true)));
} else {
return cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$1(pat);
}
}));
cljs.core.match$macros.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (pat){
return cljs.core.match$macros.literal_pattern(pat);
}));





cljs.core.match$macros.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",-634730153),(function (pat){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pat),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((((cljs.core.second(pat) instanceof cljs.core.Symbol)) || ((cljs.core.second(pat) instanceof cljs.core.Keyword)))))){
return cljs.core.match$macros.literal_pattern(cljs.core.second(pat));
} else {
return (cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IFn$_invoke$arity$1(pat) : cljs.core.match$macros.emit_pattern_for_syntax.call(null,pat));
}
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.emit_pattern_for_syntax !== 'undefined')){
} else {
/**
 * Handles patterns wrapped in the special list syntax. Dispatches
 *   on the first or second keyword in the list. For example, the pattern 
 *   `(:or 1 ...) is dispatches as :or, and `(1 :as a)` is dispatched by :as.
 */
cljs.core.match$macros.emit_pattern_for_syntax = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__8241 = cljs.core.get_global_hierarchy;
return (fexpr__8241.cljs$core$IFn$_invoke$arity$0 ? fexpr__8241.cljs$core$IFn$_invoke$arity$0() : fexpr__8241.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","emit-pattern-for-syntax"),(function (p__8242){
var vec__8243 = p__8242;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8243,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8243,(1),null);
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"default","default",-1987822328)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),s], null);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"default","default",-1987822328)], null),(function (pat){
return cljs.core.match$macros.or_pattern(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.emit_pattern,cljs.core.rest(pat))));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"as","as",1148689641)], null),(function (p__8246){
var vec__8247 = p__8246;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8247,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8247,(1),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8247,(2),null);
return cljs.core.with_meta(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),sym], null));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"<<","<<",1655720184)], null),(function (p__8250){
var vec__8251 = p__8250;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8251,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8251,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8251,(2),null);
return cljs.core.match$macros.app_pattern(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),form);
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"when","when",-576417306)], null),(function (p__8255){
var vec__8256 = p__8255;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8256,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8256,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8256,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_(gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Invalid predicate expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? symbol? gs)"].join('')));
}

if(cljs.core.every_QMARK_((function (p1__8254_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(cljs.core.match$macros.preds),p1__8254_SHARP_);
}),gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Unknown predicate in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? (fn* [p1__8254#] (contains? (clojure.core/deref preds) p1__8254#)) gs)"].join('')));
}

return cljs.core.match$macros.predicate_pattern(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),cljs.core.set(gs__$1));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"guard","guard",-873147811)], null),(function (p__8259){
var vec__8260 = p__8259;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8260,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8260,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8260,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_(gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
return cljs.core.match$macros.guard_pattern(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),cljs.core.set(gs__$1));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"seq","seq",-1817803783)], null),(function (pat){
var p = cljs.core.first(pat);
if(cljs.core.empty_QMARK_(p)){
return cljs.core.match$macros.literal_pattern(cljs.core.List.EMPTY);
} else {
return cljs.core.match$macros.seq_pattern(cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"seq","seq",-1817803783)));
}
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296)], null),(function (p__8263){
var vec__8264 = p__8263;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8264,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8264,(1),null);
var offset_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8264,(2),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8264,(3),null);
var ps = cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"vector","vector",1902966158));
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(ps,t,offset,cljs.core.some(cljs.core.match$macros.rest_pattern_QMARK_,ps));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"only","only",1907811652)], null),(function (p__8267){
var vec__8268 = p__8267;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8268,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8268,(1),null);
var only = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8268,(2),null);
return cljs.core.with_meta(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",1907811652),only], null));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__8272){
var vec__8273 = p__8272;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8273,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8273,(1),null);
var l = vec__8273;
throw (new Error(["Invalid list syntax ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),". ","Valid syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__8271_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__8271_SHARP_,new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.keys(cljs.core.match$macros.emit_pattern_for_syntax.getMethodTable()))))].join('')));
}));
var void_8517 = ({});
var void_QMARK__8518 = (function (p1__8276_SHARP_){
return (void_8517 === p1__8276_SHARP_);
});
var infix_keyword_QMARK__8519 = (function (p1__8277_SHARP_){
var fexpr__8280 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"guard","guard",-873147811),null], null), null);
return (fexpr__8280.cljs$core$IFn$_invoke$arity$1 ? fexpr__8280.cljs$core$IFn$_invoke$arity$1(p1__8277_SHARP_) : fexpr__8280.call(null,p1__8277_SHARP_));
});
cljs.core.match$macros.regroup_keywords = (function cljs$core$match$macros$regroup_keywords(pattern){
if(cljs.core.vector_QMARK_(pattern)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__8281,r){
var vec__8282 = p__8281;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8282,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8282,(1),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8282,(2),null);
if(void_QMARK__8518(p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,q,r], null);
} else {
if(cljs.core.truth_((((!(void_QMARK__8518(r))))?infix_keyword_QMARK__8519(q):false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(new cljs.core.List(null,(cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.regroup_keywords.call(null,p)),(new cljs.core.List(null,q,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null))),void_8517,void_8517], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.regroup_keywords.call(null,p))),q,r], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,void_8517,void_8517], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(pattern,void_8517,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([void_8517], 0))));
} else {
if(cljs.core.seq_QMARK_(pattern)){
return cljs.core.cons((function (){var G__8285 = cljs.core.first(pattern);
return (cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(G__8285) : cljs.core.match$macros.regroup_keywords.call(null,G__8285));
})(),cljs.core.rest(pattern));
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
if(cljs.core.vector_QMARK_(pattern)){
return cljs.core.match$macros.regroup_keywords(pattern);
} else {
return pattern;
}
});
/**
 * Take an unprocessed pattern expression and an action expression and return
 * a pattern row of the processed pattern expression plus the action epxression.
 */
cljs.core.match$macros.to_pattern_row = (function cljs$core$match$macros$to_pattern_row(pat,action){
var ps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.emit_pattern,cljs.core.match$macros.group_keywords(pat));
return cljs.core.match$macros.pattern_row.cljs$core$IFn$_invoke$arity$2(ps,action);
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
var temp__5733__auto__ = cljs.core.seq(remaining);
if(temp__5733__auto__){
var patterns__$1 = temp__5733__auto__;
var pat = cljs.core.first(patterns__$1);
var pats = cljs.core.rest(patterns__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pat,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pat,new cljs.core.Symbol(null,"&","&",-2144855648,null))))){
var G__8520 = pats;
var G__8521 = seen;
var G__8522 = dups;
remaining = G__8520;
seen = G__8521;
dups = G__8522;
continue;
} else {
if((pat instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_(seen,pat)){
var G__8523 = pats;
var G__8524 = seen;
var G__8525 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dups,pat);
remaining = G__8523;
seen = G__8524;
dups = G__8525;
continue;
} else {
var G__8526 = pats;
var G__8527 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,pat);
var G__8528 = dups;
remaining = G__8526;
seen = G__8527;
dups = G__8528;
continue;
}
} else {
if(cljs.core.vector_QMARK_(pat)){
var G__8529 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,pat);
var G__8530 = seen;
var G__8531 = dups;
remaining = G__8529;
seen = G__8530;
dups = G__8531;
continue;
} else {
if(cljs.core.map_QMARK_(pat)){
var G__8532 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.vals(pat));
var G__8533 = seen;
var G__8534 = dups;
remaining = G__8532;
seen = G__8533;
dups = G__8534;
continue;
} else {
if(cljs.core.seq_QMARK_(pat)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
var G__8535 = pats;
var G__8536 = seen;
var G__8537 = dups;
remaining = G__8535;
seen = G__8536;
dups = G__8537;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Keyword(null,"or","or",235744169))){
var wds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.wildcards_and_duplicates,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat)));
var mseen = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,wds));
var G__8538 = pats;
var G__8539 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(seen,mseen);
var G__8540 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.set.union,dups,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(seen,mseen),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,wds));
remaining = G__8538;
seen = G__8539;
dups = G__8540;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(pat),new cljs.core.Keyword(null,"as","as",1148689641))){
var G__8541 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat));
var G__8542 = seen;
var G__8543 = dups;
remaining = G__8541;
seen = G__8542;
dups = G__8543;
continue;
} else {
var G__8544 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.first(pat));
var G__8545 = seen;
var G__8546 = dups;
remaining = G__8544;
seen = G__8545;
dups = G__8546;
continue;

}
}
}
} else {
var G__8547 = pats;
var G__8548 = seen;
var G__8549 = dups;
remaining = G__8547;
seen = G__8548;
dups = G__8549;
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
return cljs.core.second(cljs.core.match$macros.wildcards_and_duplicates(pattern));
});
cljs.core.match$macros.check_pattern = (function cljs$core$match$macros$check_pattern(pat,vars,nvars,rownum){
var pat__$1 = cljs.core.match$macros.group_keywords(pat);
if((!(cljs.core.vector_QMARK_(pat__$1)))){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern rows must be wrapped in []."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),"].",((cljs.core.list_QMARK_(pat__$1))?[" Note: pattern rows are not patterns."," They cannot be wrapped in a :when guard, for example"].join(''):null)].join('')));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pat__$1),nvars)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row has differing number of patterns. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pat__$1))," pattern/s, expecting ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nvars)," for occurrences ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)].join('')));
} else {
}

var temp__5735__auto__ = cljs.core.seq(cljs.core.match$macros.find_duplicate_wildcards(pat__$1));
if(temp__5735__auto__){
var duplicates = temp__5735__auto__;
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row reuses wildcards in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),".  The following wildcards are ambiguous: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(duplicates)))),".  There's no guarantee that the matched values will be same.","  Rename the occurrences uniquely."].join('')));
} else {
return null;
}
});
cljs.core.match$macros.check_matrix_args = (function cljs$core$match$macros$check_matrix_args(vars,clauses){
if((vars instanceof cljs.core.Symbol)){
throw (new Error(["Occurrences must be in a vector."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars),"]"].join('')));
} else {
}

if((!(cljs.core.vector_QMARK_(vars)))){
throw (new Error(["Occurrences must be in a vector. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," is not a vector"].join('')));
} else {
}

var nvars_8550 = cljs.core.count(vars);
var cls_8551 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var seq__8286_8552 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(cls_8551),cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var chunk__8287_8553 = null;
var count__8288_8554 = (0);
var i__8289_8555 = (0);
while(true){
if((i__8289_8555 < count__8288_8554)){
var vec__8302_8556 = chunk__8287_8553.cljs$core$IIndexed$_nth$arity$2(null,i__8289_8555);
var vec__8305_8557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8302_8556,(0),null);
var pat_8558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8305_8557,(0),null);
var __8559 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8305_8557,(1),null);
var rownum_8560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8302_8556,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8558)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_8560),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern(pat_8558,vars,nvars_8550,rownum_8560);


var G__8561 = seq__8286_8552;
var G__8562 = chunk__8287_8553;
var G__8563 = count__8288_8554;
var G__8564 = (i__8289_8555 + (1));
seq__8286_8552 = G__8561;
chunk__8287_8553 = G__8562;
count__8288_8554 = G__8563;
i__8289_8555 = G__8564;
continue;
} else {
var temp__5735__auto___8565 = cljs.core.seq(seq__8286_8552);
if(temp__5735__auto___8565){
var seq__8286_8566__$1 = temp__5735__auto___8565;
if(cljs.core.chunked_seq_QMARK_(seq__8286_8566__$1)){
var c__4556__auto___8567 = cljs.core.chunk_first(seq__8286_8566__$1);
var G__8568 = cljs.core.chunk_rest(seq__8286_8566__$1);
var G__8569 = c__4556__auto___8567;
var G__8570 = cljs.core.count(c__4556__auto___8567);
var G__8571 = (0);
seq__8286_8552 = G__8568;
chunk__8287_8553 = G__8569;
count__8288_8554 = G__8570;
i__8289_8555 = G__8571;
continue;
} else {
var vec__8308_8572 = cljs.core.first(seq__8286_8566__$1);
var vec__8311_8573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8308_8572,(0),null);
var pat_8574 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8311_8573,(0),null);
var __8575 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8311_8573,(1),null);
var rownum_8576 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8308_8572,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8574)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_8576),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern(pat_8574,vars,nvars_8550,rownum_8576);


var G__8577 = cljs.core.next(seq__8286_8566__$1);
var G__8578 = null;
var G__8579 = (0);
var G__8580 = (0);
seq__8286_8552 = G__8577;
chunk__8287_8553 = G__8578;
count__8288_8554 = G__8579;
i__8289_8555 = G__8580;
continue;
}
} else {
}
}
break;
}

var temp__5735__auto___8581 = cljs.core.last(cls_8551);
if(cljs.core.truth_(temp__5735__auto___8581)){
var vec__8314_8582 = temp__5735__auto___8581;
var pat_8583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8314_8582,(0),null);
var __8584 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8314_8582,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8583)){
} else {
cljs.core.match$macros.check_pattern(pat_8583,vars,nvars_8550,cljs.core.count(cls_8551));
}
} else {
}

if(cljs.core.odd_QMARK_(cljs.core.count(clauses))){
throw (new Error(["Uneven number of Pattern Rows. The last form `",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clauses)),"` seems out of place."].join('')));
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
var nsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("ocr-");
return cljs.core.with_meta(nsym,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ocr-expr","ocr-expr",-897749617),var$], null));
} else {
return var$;
}
});
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(process_var,vars));
});
/**
 * Take the list of vars and sequence of unprocessed clauses and
 * return the pattern matrix. The pattern matrix contains the processed
 * pattern rows and the list of vars originally specified. Inserts
 * a last match - :else if provided by the user or a default match that
 * throws.
 */
cljs.core.match$macros.emit_matrix = (function cljs$core$match$macros$emit_matrix(var_args){
var G__8319 = arguments.length;
switch (G__8319) {
case 2:
return cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$2 = (function (vars,clauses){
return cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$3(vars,clauses,true);
}));

(cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$3 = (function (vars,clauses,default$){
var cs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var vs = cljs.core.match$macros.process_vars(vars);
var cs__$1 = (function (){var vec__8320 = cljs.core.last(cs);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8320,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8320,(1),null);
var last_match = cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(vars),new cljs.core.Symbol(null,"_","_",-1201019570,null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),p)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(cs)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_match,a], null));
} else {
if(cljs.core.truth_(default$)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_match,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",vs)], 0)))),null,(1),null))))),null,(1),null)))))], null));
} else {
return cs;
}
}
})();
return cljs.core.match$macros.pattern_matrix(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8317_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.to_pattern_row,p1__8317_SHARP_);
}),cs__$1)),cljs.core.match$macros.process_vars(vs));
}));

(cljs.core.match$macros.emit_matrix.cljs$lang$maxFixedArity = 3);

cljs.core.match$macros.executable_form = (function cljs$core$match$macros$executable_form(node){
return cljs.core.match.protocols.n_to_clj(node);
});
cljs.core.match$macros.recur_present_QMARK_ = (function cljs$core$match$macros$recur_present_QMARK_(actions){
var analyze_action = (function cljs$core$match$macros$recur_present_QMARK__$_analyze_action(action){
if(cljs.core.truth_(((cljs.core.sequential_QMARK_(action))?cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null"], null), null),cljs.core.flatten(action)):false))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recur-present","recur-present",1178490943),true], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
return cljs.core.some(new cljs.core.Keyword(null,"recur-present","recur-present",1178490943),cljs.core.map.cljs$core$IFn$_invoke$arity$2(analyze_action,actions));
});
cljs.core.match$macros.clj_form = (function cljs$core$match$macros$clj_form(vars,clauses){
if(cljs.core.truth_(cljs.core.deref(cljs.core.match$macros._STAR_syntax_check_STAR_))){
cljs.core.match$macros.check_matrix_args(vars,clauses);
} else {
}

var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var recur_present_QMARK_ = cljs.core.match$macros.recur_present_QMARK_(actions);
if(cljs.core.not((function (){var and__4115__auto__ = cljs.core.match$macros._STAR_no_backtrack_STAR_;
if(cljs.core.truth_(and__4115__auto__)){
return recur_present_QMARK_;
} else {
return and__4115__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Recur form present yet *no-backtrack* set to true","\n","(not (and *no-backtrack* recur-present?))"].join('')));
}

var _STAR_recur_present_STAR__orig_val__8323 = cljs.core.match$macros._STAR_recur_present_STAR_;
var _STAR_recur_present_STAR__temp_val__8324 = (function (){var or__4126__auto__ = cljs.core.match$macros._STAR_recur_present_STAR_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = recur_present_QMARK_;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.match$macros._STAR_no_backtrack_STAR_;
}
}
})();
(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__temp_val__8324);

try{return cljs.core.match$macros.executable_form(cljs.core.match$macros.compile(cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$2(vars,clauses)));
}finally {(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__orig_val__8323);
}});
var ret__4785__auto___8586 = (function (){
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
var args__4742__auto__ = [];
var len__4736__auto___8587 = arguments.length;
var i__4737__auto___8588 = (0);
while(true){
if((i__4737__auto___8588 < len__4736__auto___8587)){
args__4742__auto__.push((arguments[i__4737__auto___8588]));

var G__8589 = (i__4737__auto___8588 + (1));
i__4737__auto___8588 = G__8589;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8329 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8332){
var vec__8333 = p__8332;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8333,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8333,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8329,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8329,(1),null);
var _STAR_line_STAR__orig_val__8336 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8337 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8338 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8339 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8340 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8341 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8339);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8340);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8341);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8338);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8337);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8336);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq8325){
var G__8326 = cljs.core.first(seq8325);
var seq8325__$1 = cljs.core.next(seq8325);
var G__8327 = cljs.core.first(seq8325__$1);
var seq8325__$2 = cljs.core.next(seq8325__$1);
var G__8328 = cljs.core.first(seq8325__$2);
var seq8325__$3 = cljs.core.next(seq8325__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8326,G__8327,G__8328,seq8325__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__4785__auto___8590 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8591 = arguments.length;
var i__4737__auto___8592 = (0);
while(true){
if((i__4737__auto___8592 < len__4736__auto___8591)){
args__4742__auto__.push((arguments[i__4737__auto___8592]));

var G__8593 = (i__4737__auto___8592 + (1));
i__4737__auto___8592 = G__8593;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8347 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8348 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8349 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8350 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__8351 = type;
var _STAR_line_STAR__temp_val__8352 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8353 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8354 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8351);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8352);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8353);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8354);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8350);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8349);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8348);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8347);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq8342){
var G__8343 = cljs.core.first(seq8342);
var seq8342__$1 = cljs.core.next(seq8342);
var G__8344 = cljs.core.first(seq8342__$1);
var seq8342__$2 = cljs.core.next(seq8342__$1);
var G__8345 = cljs.core.first(seq8342__$2);
var seq8342__$3 = cljs.core.next(seq8342__$2);
var G__8346 = cljs.core.first(seq8342__$3);
var seq8342__$4 = cljs.core.next(seq8342__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8343,G__8344,G__8345,G__8346,seq8342__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__4785__auto___8594 = (function (){
/**
 * Same as match but supports IMatchLookup when
 *   matching maps.
 */
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8595 = arguments.length;
var i__4737__auto___8596 = (0);
while(true){
if((i__4737__auto___8596 < len__4736__auto___8595)){
args__4742__auto__.push((arguments[i__4737__auto___8596]));

var G__8597 = (i__4737__auto___8596 + (1));
i__4737__auto___8596 = G__8597;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8359 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8362){
var vec__8363 = p__8362;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8363,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8363,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8359,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8359,(1),null);
var _STAR_match_lookup_STAR__orig_val__8366 = cljs.core.match$macros._STAR_match_lookup_STAR_;
var _STAR_line_STAR__orig_val__8367 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8368 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8369 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_match_lookup_STAR__temp_val__8370 = true;
var _STAR_line_STAR__temp_val__8371 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8372 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8373 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__temp_val__8370);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8371);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8372);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8373);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8369);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8368);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8367);

(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__orig_val__8366);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq8355){
var G__8356 = cljs.core.first(seq8355);
var seq8355__$1 = cljs.core.next(seq8355);
var G__8357 = cljs.core.first(seq8355__$1);
var seq8355__$2 = cljs.core.next(seq8355__$1);
var G__8358 = cljs.core.first(seq8355__$2);
var seq8355__$3 = cljs.core.next(seq8355__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8356,G__8357,G__8358,seq8355__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__4785__auto___8598 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8599 = arguments.length;
var i__4737__auto___8600 = (0);
while(true){
if((i__4737__auto___8600 < len__4736__auto___8599)){
args__4742__auto__.push((arguments[i__4737__auto___8600]));

var G__8601 = (i__4737__auto___8600 + (1));
i__4737__auto___8600 = G__8601;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",-1807915977,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(bindvars_SHARP_)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.core.match$macros.match_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq8374){
var G__8375 = cljs.core.first(seq8374);
var seq8374__$1 = cljs.core.next(seq8374);
var G__8376 = cljs.core.first(seq8374__$1);
var seq8374__$2 = cljs.core.next(seq8374__$1);
var G__8377 = cljs.core.first(seq8374__$2);
var seq8374__$3 = cljs.core.next(seq8374__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8375,G__8376,G__8377,seq8374__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__4785__auto___8602 = cljs.core.match$macros.asets = (function cljs$core$match$macros$asets(_AMPERSAND_form,_AMPERSAND_env,a,vs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (a__$1,b,c){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a__$1,(new cljs.core.List(null,b,(new cljs.core.List(null,c,null,(1),null)),(2),null)));
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)))))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vs)),vs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,a,null,(1),null))], 0))));
});
(cljs.core.match$macros.asets.cljs$lang$macro = true);

var ret__4785__auto___8603 = (function (){
cljs.core.match$macros.match = (function cljs$core$match$macros$match(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8604 = arguments.length;
var i__4737__auto___8605 = (0);
while(true){
if((i__4737__auto___8605 < len__4736__auto___8604)){
args__4742__auto__.push((arguments[i__4737__auto___8605]));

var G__8606 = (i__4737__auto___8605 + (1));
i__4737__auto___8605 = G__8606;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8382 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8385){
var vec__8386 = p__8385;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8386,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8386,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8382,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8382,(1),null);
var _STAR_line_STAR__orig_val__8389 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8390 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8391 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8392 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8394 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8392);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8393);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8394);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8391);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8390);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8389);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq8378){
var G__8379 = cljs.core.first(seq8378);
var seq8378__$1 = cljs.core.next(seq8378);
var G__8380 = cljs.core.first(seq8378__$1);
var seq8378__$2 = cljs.core.next(seq8378__$1);
var G__8381 = cljs.core.first(seq8378__$2);
var seq8378__$3 = cljs.core.next(seq8378__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8379,G__8380,G__8381,seq8378__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__4785__auto___8607 = (function (){
cljs.core.match$macros.match_STAR_ = (function cljs$core$match$macros$match_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8608 = arguments.length;
var i__4737__auto___8609 = (0);
while(true){
if((i__4737__auto___8609 < len__4736__auto___8608)){
args__4742__auto__.push((arguments[i__4737__auto___8609]));

var G__8610 = (i__4737__auto___8609 + (1));
i__4737__auto___8609 = G__8610;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8399 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8402){
var vec__8403 = p__8402;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8403,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8399,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8399,(1),null);
var _STAR_line_STAR__orig_val__8406 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8407 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8408 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__8409 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_line_STAR__temp_val__8410 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8411 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8412 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_no_backtrack_STAR__temp_val__8413 = true;
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8410);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8411);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8412);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__8413);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__8409);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8408);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8407);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8406);
}}));

(cljs.core.match$macros.match_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_STAR_.cljs$lang$applyTo = (function (seq8395){
var G__8396 = cljs.core.first(seq8395);
var seq8395__$1 = cljs.core.next(seq8395);
var G__8397 = cljs.core.first(seq8395__$1);
var seq8395__$2 = cljs.core.next(seq8395__$1);
var G__8398 = cljs.core.first(seq8395__$2);
var seq8395__$3 = cljs.core.next(seq8395__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8396,G__8397,G__8398,seq8395__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_STAR_.cljs$lang$macro = true);

var ret__4785__auto___8611 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8612 = arguments.length;
var i__4737__auto___8613 = (0);
while(true){
if((i__4737__auto___8613 < len__4736__auto___8612)){
args__4742__auto__.push((arguments[i__4737__auto___8613]));

var G__8614 = (i__4737__auto___8613 + (1));
i__4737__auto___8613 = G__8614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8419 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8420 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8421 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8422 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__8423 = type;
var _STAR_line_STAR__temp_val__8424 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8425 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8426 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8423);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8424);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8425);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8426);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8422);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8421);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8420);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8419);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq8414){
var G__8415 = cljs.core.first(seq8414);
var seq8414__$1 = cljs.core.next(seq8414);
var G__8416 = cljs.core.first(seq8414__$1);
var seq8414__$2 = cljs.core.next(seq8414__$1);
var G__8417 = cljs.core.first(seq8414__$2);
var seq8414__$3 = cljs.core.next(seq8414__$2);
var G__8418 = cljs.core.first(seq8414__$3);
var seq8414__$4 = cljs.core.next(seq8414__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8415,G__8416,G__8417,G__8418,seq8414__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__4785__auto___8615 = (function (){
cljs.core.match$macros.matchv_STAR_ = (function cljs$core$match$macros$matchv_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8616 = arguments.length;
var i__4737__auto___8617 = (0);
while(true){
if((i__4737__auto___8617 < len__4736__auto___8616)){
args__4742__auto__.push((arguments[i__4737__auto___8617]));

var G__8618 = (i__4737__auto___8617 + (1));
i__4737__auto___8617 = G__8618;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8432 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8433 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8434 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8435 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__8436 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_vector_type_STAR__temp_val__8437 = type;
var _STAR_line_STAR__temp_val__8438 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8439 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8440 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_no_backtrack_STAR__temp_val__8441 = true;
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8437);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8438);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8439);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8440);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__8441);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__8436);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8435);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8434);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8433);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8432);
}}));

(cljs.core.match$macros.matchv_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv_STAR_.cljs$lang$applyTo = (function (seq8427){
var G__8428 = cljs.core.first(seq8427);
var seq8427__$1 = cljs.core.next(seq8427);
var G__8429 = cljs.core.first(seq8427__$1);
var seq8427__$2 = cljs.core.next(seq8427__$1);
var G__8430 = cljs.core.first(seq8427__$2);
var seq8427__$3 = cljs.core.next(seq8427__$2);
var G__8431 = cljs.core.first(seq8427__$3);
var seq8427__$4 = cljs.core.next(seq8427__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8428,G__8429,G__8430,G__8431,seq8427__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv_STAR_.cljs$lang$macro = true);

var ret__4785__auto___8619 = (function (){
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8620 = arguments.length;
var i__4737__auto___8621 = (0);
while(true){
if((i__4737__auto___8621 < len__4736__auto___8620)){
args__4742__auto__.push((arguments[i__4737__auto___8621]));

var G__8622 = (i__4737__auto___8621 + (1));
i__4737__auto___8621 = G__8622;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8446 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8449){
var vec__8450 = p__8449;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8450,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8450,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8446,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8446,(1),null);
var _STAR_line_STAR__orig_val__8453 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8454 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8455 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8456 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8457 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8458 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8456);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8457);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8458);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8455);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8454);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8453);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq8442){
var G__8443 = cljs.core.first(seq8442);
var seq8442__$1 = cljs.core.next(seq8442);
var G__8444 = cljs.core.first(seq8442__$1);
var seq8442__$2 = cljs.core.next(seq8442__$1);
var G__8445 = cljs.core.first(seq8442__$2);
var seq8442__$3 = cljs.core.next(seq8442__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8443,G__8444,G__8445,seq8442__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__4785__auto___8623 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8624 = arguments.length;
var i__4737__auto___8625 = (0);
while(true){
if((i__4737__auto___8625 < len__4736__auto___8624)){
args__4742__auto__.push((arguments[i__4737__auto___8625]));

var G__8626 = (i__4737__auto___8625 + (1));
i__4737__auto___8625 = G__8626;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match","cljs.core.match/match",-1807915977,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(bindvars_SHARP_)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.core.match$macros.match_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq8459){
var G__8460 = cljs.core.first(seq8459);
var seq8459__$1 = cljs.core.next(seq8459);
var G__8461 = cljs.core.first(seq8459__$1);
var seq8459__$2 = cljs.core.next(seq8459__$1);
var G__8462 = cljs.core.first(seq8459__$2);
var seq8459__$3 = cljs.core.next(seq8459__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8460,G__8461,G__8462,seq8459__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__4785__auto___8627 = (function (){
cljs.core.match$macros.match_let_STAR_ = (function cljs$core$match$macros$match_let_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8628 = arguments.length;
var i__4737__auto___8629 = (0);
while(true){
if((i__4737__auto___8629 < len__4736__auto___8628)){
args__4742__auto__.push((arguments[i__4737__auto___8629]));

var G__8630 = (i__4737__auto___8629 + (1));
i__4737__auto___8629 = G__8630;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match_let_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var bindvars_SHARP_ = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","match*","cljs.core.match/match*",-529932879,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(bindvars_SHARP_)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.core.match$macros.match_let_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_let_STAR_.cljs$lang$applyTo = (function (seq8463){
var G__8464 = cljs.core.first(seq8463);
var seq8463__$1 = cljs.core.next(seq8463);
var G__8465 = cljs.core.first(seq8463__$1);
var seq8463__$2 = cljs.core.next(seq8463__$1);
var G__8466 = cljs.core.first(seq8463__$2);
var seq8463__$3 = cljs.core.next(seq8463__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8464,G__8465,G__8466,seq8463__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let_STAR_.cljs$lang$macro = true);


//# sourceMappingURL=cljs.core.match$macros.js.map
