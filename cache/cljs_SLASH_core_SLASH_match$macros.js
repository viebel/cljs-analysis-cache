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
var _STAR_print_fn_STAR__orig_val__7647_8890 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__7648_8891 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7648_8891);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),", line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros._STAR_line_STAR_),":"].join(''),msg], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7647_8890);
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
var len__4736__auto___8892 = arguments.length;
var i__4737__auto___8893 = (0);
while(true){
if((i__4737__auto___8893 < len__4736__auto___8892)){
args__4742__auto__.push((arguments[i__4737__auto___8893]));

var G__8894 = (i__4737__auto___8893 + (1));
i__4737__auto___8893 = G__8894;
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
(cljs.core.match$macros.val_at_expr.cljs$lang$applyTo = (function (seq7653){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7653));
}));

cljs.core.match$macros.vector_type = (function cljs$core$match$macros$vector_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8895 = arguments.length;
var i__4737__auto___8896 = (0);
while(true){
if((i__4737__auto___8896 < len__4736__auto___8895)){
args__4742__auto__.push((arguments[i__4737__auto___8896]));

var G__8897 = (i__4737__auto___8896 + (1));
i__4737__auto___8896 = G__8897;
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
(cljs.core.match$macros.vector_type.cljs$lang$applyTo = (function (seq7654){
var G__7655 = cljs.core.first(seq7654);
var seq7654__$1 = cljs.core.next(seq7654);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7655,seq7654__$1);
}));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.check_size_QMARK_ !== 'undefined')){
} else {
cljs.core.match$macros.check_size_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7658 = cljs.core.get_global_hierarchy;
return (fexpr__7658.cljs$core$IFn$_invoke$arity$0 ? fexpr__7658.cljs$core$IFn$_invoke$arity$0() : fexpr__7658.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7659 = cljs.core.get_global_hierarchy;
return (fexpr__7659.cljs$core$IFn$_invoke$arity$0 ? fexpr__7659.cljs$core$IFn$_invoke$arity$0() : fexpr__7659.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7660 = cljs.core.get_global_hierarchy;
return (fexpr__7660.cljs$core$IFn$_invoke$arity$0 ? fexpr__7660.cljs$core$IFn$_invoke$arity$0() : fexpr__7660.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7662 = cljs.core.get_global_hierarchy;
return (fexpr__7662.cljs$core$IFn$_invoke$arity$0 ? fexpr__7662.cljs$core$IFn$_invoke$arity$0() : fexpr__7662.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7664 = cljs.core.get_global_hierarchy;
return (fexpr__7664.cljs$core$IFn$_invoke$arity$0 ? fexpr__7664.cljs$core$IFn$_invoke$arity$0() : fexpr__7664.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7666 = cljs.core.get_global_hierarchy;
return (fexpr__7666.cljs$core$IFn$_invoke$arity$0 ? fexpr__7666.cljs$core$IFn$_invoke$arity$0() : fexpr__7666.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7667 = cljs.core.get_global_hierarchy;
return (fexpr__7667.cljs$core$IFn$_invoke$arity$0 ? fexpr__7667.cljs$core$IFn$_invoke$arity$0() : fexpr__7667.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7670 = cljs.core.get_global_hierarchy;
return (fexpr__7670.cljs$core$IFn$_invoke$arity$0 ? fexpr__7670.cljs$core$IFn$_invoke$arity$0() : fexpr__7670.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7671 = cljs.core.get_global_hierarchy;
return (fexpr__7671.cljs$core$IFn$_invoke$arity$0 ? fexpr__7671.cljs$core$IFn$_invoke$arity$0() : fexpr__7671.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7672 = cljs.core.get_global_hierarchy;
return (fexpr__7672.cljs$core$IFn$_invoke$arity$0 ? fexpr__7672.cljs$core$IFn$_invoke$arity$0() : fexpr__7672.call(null));
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
var G__8898 = null;
var G__8898__3 = (function (_,ocr,start){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null))], 0))));
});
var G__8898__4 = (function (_,ocr,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null))], 0))));
});
G__8898 = function(_,ocr,start,end){
switch(arguments.length){
case 3:
return G__8898__3.call(this,_,ocr,start);
case 4:
return G__8898__4.call(this,_,ocr,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8898.cljs$core$IFn$_invoke$arity$3 = G__8898__3;
G__8898.cljs$core$IFn$_invoke$arity$4 = G__8898__4;
return G__8898;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7699 = cljs.core.get_global_hierarchy;
return (fexpr__7699.cljs$core$IFn$_invoke$arity$0 ? fexpr__7699.cljs$core$IFn$_invoke$arity$0() : fexpr__7699.call(null));
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
var G__7710 = k;
var G__7710__$1 = (((G__7710 instanceof cljs.core.Keyword))?G__7710.fqn:null);
switch (G__7710__$1) {
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

(cljs.core.match$macros.PatternRow.prototype.apply = (function (self__,args7703){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args7703)));
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
var G__7728 = arguments.length;
switch (G__7728) {
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7735,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7740 = k7735;
var G__7740__$1 = (((G__7740 instanceof cljs.core.Keyword))?G__7740.fqn:null);
switch (G__7740__$1) {
case "value":
return self__.value;

break;
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7735,else__4383__auto__);

}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.empty_QMARK_(self__.bindings)))){
var bindings__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__7742){
var vec__7743 = p__7742;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7743,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7743,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7748){
var vec__7749 = p__7748;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7749,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7749,(1),null);
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7734){
var self__ = this;
var G__7734__$1 = this;
return (new cljs.core.RecordIter((0),G__7734__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7736,other7737){
var self__ = this;
var this7736__$1 = this;
return (((!((other7737 == null)))) && ((this7736__$1.constructor === other7737.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7736__$1.value,other7737.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7736__$1.bindings,other7737.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7736__$1.__extmap,other7737.__extmap)));
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7734){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7763 = cljs.core.keyword_identical_QMARK_;
var expr__7764 = k__4388__auto__;
if(cljs.core.truth_((pred__7763.cljs$core$IFn$_invoke$arity$2 ? pred__7763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__7764) : pred__7763.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__7764)))){
return (new cljs.core.match$macros.LeafNode(G__7734,self__.bindings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7763.cljs$core$IFn$_invoke$arity$2 ? pred__7763.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7764) : pred__7763.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7764)))){
return (new cljs.core.match$macros.LeafNode(self__.value,G__7734,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7734),null));
}
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7734){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,G__7734,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_LeafNode = (function cljs$core$match$macros$map__GT_LeafNode(G__7739){
var extmap__4419__auto__ = (function (){var G__7773 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7739,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bindings","bindings",1271397192)], 0));
if(cljs.core.record_QMARK_(G__7739)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7773);
} else {
return G__7773;
}
})();
return (new cljs.core.match$macros.LeafNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__7739),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__7739),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.leaf_node = (function cljs$core$match$macros$leaf_node(var_args){
var G__7775 = arguments.length;
switch (G__7775) {
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7776 = cljs.core.get_global_hierarchy;
return (fexpr__7776.cljs$core$IFn$_invoke$arity$0 ? fexpr__7776.cljs$core$IFn$_invoke$arity$0() : fexpr__7776.call(null));
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7796,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7804 = k7796;
switch (G__7804) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7796,else__4383__auto__);

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7808){
var vec__7809 = p__7808;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7809,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7809,(1),null);
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7795){
var self__ = this;
var G__7795__$1 = this;
return (new cljs.core.RecordIter((0),G__7795__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7797,other7798){
var self__ = this;
var this7797__$1 = this;
return (((!((other7798 == null)))) && ((this7797__$1.constructor === other7798.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7797__$1.__extmap,other7798.__extmap)));
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7795){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7825 = cljs.core.keyword_identical_QMARK_;
var expr__7826 = k__4388__auto__;
return (new cljs.core.match$macros.FailNode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7795),null));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7795){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.FailNode(G__7795,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_FailNode = (function cljs$core$match$macros$map__GT_FailNode(G__7799){
var extmap__4419__auto__ = (function (){var G__7835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__7799);
if(cljs.core.record_QMARK_(G__7799)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7835);
} else {
return G__7835;
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7838,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7844 = k7838;
var G__7844__$1 = (((G__7844 instanceof cljs.core.Keyword))?G__7844.fqn:null);
switch (G__7844__$1) {
case "bindings":
return self__.bindings;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7838,else__4383__auto__);

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7849){
var vec__7850 = p__7849;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7850,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7850,(1),null);
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7837){
var self__ = this;
var G__7837__$1 = this;
return (new cljs.core.RecordIter((0),G__7837__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"node","node",581201198)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7839,other7840){
var self__ = this;
var this7839__$1 = this;
return (((!((other7840 == null)))) && ((this7839__$1.constructor === other7840.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7839__$1.bindings,other7840.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7839__$1.node,other7840.node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7839__$1.__extmap,other7840.__extmap)));
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7837){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7870 = cljs.core.keyword_identical_QMARK_;
var expr__7871 = k__4388__auto__;
if(cljs.core.truth_((pred__7870.cljs$core$IFn$_invoke$arity$2 ? pred__7870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7871) : pred__7870.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7871)))){
return (new cljs.core.match$macros.BindNode(G__7837,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7870.cljs$core$IFn$_invoke$arity$2 ? pred__7870.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),expr__7871) : pred__7870.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__7871)))){
return (new cljs.core.match$macros.BindNode(self__.bindings,G__7837,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7837),null));
}
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",581201198),self__.node,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7837){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,G__7837,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_BindNode = (function cljs$core$match$macros$map__GT_BindNode(G__7841){
var extmap__4419__auto__ = (function (){var G__7888 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7841,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198)], 0));
if(cljs.core.record_QMARK_(G__7841)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7888);
} else {
return G__7888;
}
})();
return (new cljs.core.match$macros.BindNode(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__7841),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__7841),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var len__4736__auto___8905 = arguments.length;
var i__4737__auto___8906 = (0);
while(true){
if((i__4737__auto___8906 < len__4736__auto___8905)){
args__4742__auto__.push((arguments[i__4737__auto___8906]));

var G__8907 = (i__4737__auto___8906 + (1));
i__4737__auto___8906 = G__8907;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,err_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7896__auto__","e__7896__auto__",129385545,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7896__auto__","e__7896__auto__",129385545,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match$macros.backtrack_sym(),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7896__auto__","e__7896__auto__",129385545,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core.match$macros.catch_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match$macros.catch_error.cljs$lang$applyTo = (function (seq7897){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7897));
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7908,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7916 = k7908;
var G__7916__$1 = (((G__7916 instanceof cljs.core.Keyword))?G__7916.fqn:null);
switch (G__7916__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7908,else__4383__auto__);

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7933){
var vec__7934 = p__7933;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7934,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7934,(1),null);
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7907){
var self__ = this;
var G__7907__$1 = this;
return (new cljs.core.RecordIter((0),G__7907__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7909,other7910){
var self__ = this;
var this7909__$1 = this;
return (((!((other7910 == null)))) && ((this7909__$1.constructor === other7910.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7909__$1.occurrence,other7910.occurrence)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7909__$1.cases,other7910.cases)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7909__$1.default,other7910.default)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7909__$1.__extmap,other7910.__extmap)));
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7907){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7959 = cljs.core.keyword_identical_QMARK_;
var expr__7960 = k__4388__auto__;
if(cljs.core.truth_((pred__7959.cljs$core$IFn$_invoke$arity$2 ? pred__7959.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__7960) : pred__7959.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__7960)))){
return (new cljs.core.match$macros.SwitchNode(G__7907,self__.cases,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7959.cljs$core$IFn$_invoke$arity$2 ? pred__7959.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cases","cases",253862775),expr__7960) : pred__7959.call(null,new cljs.core.Keyword(null,"cases","cases",253862775),expr__7960)))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,G__7907,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7959.cljs$core$IFn$_invoke$arity$2 ? pred__7959.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__7960) : pred__7959.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__7960)))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,G__7907,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7907),null));
}
}
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),self__.occurrence,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cases","cases",253862775),self__.cases,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7907){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,G__7907,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_SwitchNode = (function cljs$core$match$macros$map__GT_SwitchNode(G__7911){
var extmap__4419__auto__ = (function (){var G__7989 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7911,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], 0));
if(cljs.core.record_QMARK_(G__7911)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7989);
} else {
return G__7989;
}
})();
return (new cljs.core.match$macros.SwitchNode(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154).cljs$core$IFn$_invoke$arity$1(G__7911),new cljs.core.Keyword(null,"cases","cases",253862775).cljs$core$IFn$_invoke$arity$1(G__7911),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__7911),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
cljs.core.match$macros.width = (function cljs$core$match$macros$width(p__7993){
var map__7994 = p__7993;
var map__7994__$1 = (((((!((map__7994 == null))))?(((((map__7994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7994.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7994):map__7994);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7994__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
if((!(cljs.core.empty_QMARK_(rows)))){
return cljs.core.count((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1((0)) : rows.call(null,(0))));
} else {
return (0);
}
});
cljs.core.match$macros.height = (function cljs$core$match$macros$height(p__7998){
var map__7999 = p__7998;
var map__7999__$1 = (((((!((map__7999 == null))))?(((((map__7999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7999):map__7999);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7999__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.count(rows);
});
cljs.core.match$macros.dim = (function cljs$core$match$macros$dim(pm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.width(pm),cljs.core.match$macros.height(pm)], null);
});
cljs.core.match$macros.empty_matrix_QMARK_ = (function cljs$core$match$macros$empty_matrix_QMARK_(pm){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.dim(pm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
cljs.core.match$macros.column = (function cljs$core$match$macros$column(p__8002,i){
var map__8003 = p__8002;
var map__8003__$1 = (((((!((map__8003 == null))))?(((((map__8003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8003.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8003):map__8003);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8003__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8001_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__8001_SHARP_,i);
}),rows));
});
cljs.core.match$macros.row = (function cljs$core$match$macros$row(p__8007,j){
var map__8008 = p__8007;
var map__8008__$1 = (((((!((map__8008 == null))))?(((((map__8008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8008):map__8008);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8008__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,j);
});
cljs.core.match$macros.rows = (function cljs$core$match$macros$rows(p__8010){
var map__8011 = p__8010;
var map__8011__$1 = (((((!((map__8011 == null))))?(((((map__8011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8011):map__8011);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8011__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return rows;
});
cljs.core.match$macros.pattern_at = (function cljs$core$match$macros$pattern_at(p__8013,i,j){
var map__8014 = p__8013;
var map__8014__$1 = (((((!((map__8014 == null))))?(((((map__8014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8014):map__8014);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8014__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var fexpr__8016 = (rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null,j));
return (fexpr__8016.cljs$core$IFn$_invoke$arity$1 ? fexpr__8016.cljs$core$IFn$_invoke$arity$1(i) : fexpr__8016.call(null,i));
});
cljs.core.match$macros.action_for_row = (function cljs$core$match$macros$action_for_row(p__8017,j){
var map__8018 = p__8017;
var map__8018__$1 = (((((!((map__8018 == null))))?(((((map__8018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8018):map__8018);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8018__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null,j)));
});
cljs.core.match$macros.occurrences = (function cljs$core$match$macros$occurrences(pm){
return new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(pm);
});
cljs.core.match$macros.row_bindings = (function cljs$core$match$macros$row_bindings(f,ocrs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(f),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8043){
var vec__8044 = p__8043;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8044,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8044,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p),cljs.core.match$macros.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1(ocr)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__8047){
var vec__8048 = p__8047;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8048,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8048,(1),null);
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.width(pm),(function (){var iter__4529__auto__ = (function cljs$core$match$macros$useful_matrix_$_iter__8073(s__8074){
return (new cljs.core.LazySeq(null,(function (){
var s__8074__$1 = s__8074;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__8074__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var j = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__8074__$1,j,xs__6292__auto__,temp__5735__auto__){
return (function cljs$core$match$macros$useful_matrix_$_iter__8073_$_iter__8075(s__8076){
return (new cljs.core.LazySeq(null,((function (s__8074__$1,j,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__8076__$1 = s__8076;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__8076__$1);
if(temp__5735__auto____$1){
var s__8076__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__8076__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__8076__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__8078 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__8077 = (0);
while(true){
if((i__8077 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__8077);
cljs.core.chunk_append(b__8078,cljs.core.match$macros.pattern_score(pm,i,j));

var G__8909 = (i__8077 + (1));
i__8077 = G__8909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__8078),cljs$core$match$macros$useful_matrix_$_iter__8073_$_iter__8075(cljs.core.chunk_rest(s__8076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__8078),null);
}
} else {
var i = cljs.core.first(s__8076__$2);
return cljs.core.cons(cljs.core.match$macros.pattern_score(pm,i,j),cljs$core$match$macros$useful_matrix_$_iter__8073_$_iter__8075(cljs.core.rest(s__8076__$2)));
}
} else {
return null;
}
break;
}
});})(s__8074__$1,j,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__8074__$1,j,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.width(pm))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,cljs$core$match$macros$useful_matrix_$_iter__8073(cljs.core.rest(s__8074__$1)));
} else {
var G__8910 = cljs.core.rest(s__8074__$1);
s__8074__$1 = G__8910;
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
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__8104,p__8105){
var vec__8106 = p__8104;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8106,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8106,(1),null);
var curr = vec__8106;
var vec__8109 = p__8105;
var ocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8109,(0),null);
var oscore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8109,(1),null);
var cand = vec__8109;
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
var G__8119 = arguments.length;
switch (G__8119) {
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
var vec__8135 = cljs.core.split_with((function (p1__8130_SHARP_){
return cljs.core.match$macros.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(f,p1__8130_SHARP_);
}),cljs.core.rest(col));
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8135,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8135,(1),null);
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
var S = (function (){var G__8140 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__8141 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__8140,G__8141) : cljs.core.match$macros.pattern_matrix.call(null,G__8140,G__8141));
})();
var D = (function (){var G__8142 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__8143 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__8142,G__8143) : cljs.core.match$macros.pattern_matrix.call(null,G__8142,G__8143));
})();
return cljs.core.match$macros.return_split(S,D);
});
cljs.core.match$macros.group_rows = (function cljs$core$match$macros$group_rows(cs,rows){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,row){
var vec__8144 = cljs.core.peek(res);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8144,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8144,(1),null);
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
var vec__8153 = cljs.core.first(rows__$1);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8153,(0),null);
var row = vec__8153;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.match$macros.non_local_literal_pattern_QMARK_(p);
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.contains_QMARK_(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__4115__auto__;
}
})())){
var G__8912 = cljs.core.next(rows__$1);
var G__8913 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,row);
var G__8914 = (cljs.core.truth_(cljs.core.match$macros.non_local_literal_pattern_QMARK_(p))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p)):lits);
rows__$1 = G__8912;
res = G__8913;
lits = G__8914;
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
var S = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8181){
var vec__8182 = p__8181;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8182,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8182,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(rows__$1,ocrs) : cljs.core.match$macros.pattern_matrix.call(null,rows__$1,ocrs))], null);
}),cljs.core.match$macros.group_rows(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,lrows),lrows)));
var D = (function (){var G__8185 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lrows),rows);
var G__8186 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__8185,G__8186) : cljs.core.match$macros.pattern_matrix.call(null,G__8185,G__8186));
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8193){
var vec__8194 = p__8193;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8194,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8194,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__8199 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(m,c);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__8199) : cljs.core.match$macros.compile.call(null,G__8199));
})()], null);
}),matrix));
} else {
var rows = cljs.core.match$macros.rows(matrix);
var c = cljs.core.ffirst(rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__8200 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(matrix,c);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__8200) : cljs.core.match$macros.compile.call(null,G__8200));
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
var G__8915 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(matrix__$1,p);
matrix__$1 = G__8915;
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
var vec__8216 = cljs.core.match$macros.split_matrix(expanded);
var S = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8216,(0),null);
var D = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8216,(1),null);
var split = vec__8216;
if(cljs.core.not(cljs.core.match$macros._STAR_recur_present_STAR_)){
return cljs.core.match$macros.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null,col)),cljs.core.match$macros.cases(S),cljs.core.match$macros.default_case(D));
} else {
var new_stack = cljs.core.last(split);
return cljs.core.match$macros.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null,col)),(((!((cljs.core.match$macros._STAR_backtrack_stack_STAR_ === new_stack))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__8219 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__8220 = new_stack;
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__8220);

try{return cljs.core.match$macros.cases(S);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__8219);
}})():cljs.core.match$macros.cases(S)),((((cljs.core.seq(cljs.core.match$macros._STAR_backtrack_stack_STAR_)) && ((cljs.core.peek(cljs.core.match$macros._STAR_backtrack_stack_STAR_) === D))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__8221 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__8222 = cljs.core.pop(cljs.core.match$macros._STAR_backtrack_stack_STAR_);
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__8222);

try{return cljs.core.match$macros.default_case(D);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__8221);
}})():cljs.core.match$macros.default_case(D)));
}
});
/**
 * Case 3b: A column other than the first is chosen. Swap column 
 * col with the first column and compile the result
 */
cljs.core.match$macros.other_column_chosen_case = (function cljs$core$match$macros$other_column_chosen_case(matrix,col){
var G__8223 = cljs.core.match.protocols.swap(matrix,col);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__8223) : cljs.core.match$macros.compile.call(null,G__8223));
});
cljs.core.match$macros.choose_column = (function cljs$core$match$macros$choose_column(matrix){
return cljs.core.match$macros.necessary_column(matrix);
});
cljs.core.match$macros.compile = (function cljs$core$match$macros$compile(p__8224){
var map__8225 = p__8224;
var map__8225__$1 = (((((!((map__8225 == null))))?(((((map__8225.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8225.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8225):map__8225);
var pm = map__8225__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8225__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ocrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8225__$1,new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413));
if(cljs.core.truth_(cljs.core.match$macros._STAR_root_STAR_)){
var _STAR_root_STAR__orig_val__8227 = cljs.core.match$macros._STAR_root_STAR_;
var _STAR_root_STAR__temp_val__8228 = false;
(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__temp_val__8228);

try{return cljs.core.match$macros.root_bind_node(pm);
}finally {(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__orig_val__8227);
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8232,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8238 = k8232;
var G__8238__$1 = (((G__8238 instanceof cljs.core.Keyword))?G__8238.fqn:null);
switch (G__8238__$1) {
case "rows":
return self__.rows;

break;
case "ocrs":
return self__.ocrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8232,else__4383__auto__);

}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__8239){
var vec__8241 = p__8239;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8241,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8241,(1),null);
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8231){
var self__ = this;
var G__8231__$1 = this;
return (new cljs.core.RecordIter((0),G__8231__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8233,other8234){
var self__ = this;
var this8233__$1 = this;
return (((!((other8234 == null)))) && ((this8233__$1.constructor === other8234.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8233__$1.rows,other8234.rows)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8233__$1.ocrs,other8234.ocrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8233__$1.__extmap,other8234.__extmap)));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8229_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__8229_SHARP_,i);
}),self__.rows));
return (new cljs.core.match$macros.PatternMatrix(nrows,self__.ocrs,null,null,null));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8230_SHARP_){
return cljs.core.match.protocols.swap(p1__8230_SHARP_,idx);
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8231){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8247 = cljs.core.keyword_identical_QMARK_;
var expr__8248 = k__4388__auto__;
if(cljs.core.truth_((pred__8247.cljs$core$IFn$_invoke$arity$2 ? pred__8247.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),expr__8248) : pred__8247.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),expr__8248)))){
return (new cljs.core.match$macros.PatternMatrix(G__8231,self__.ocrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__8247.cljs$core$IFn$_invoke$arity$2 ? pred__8247.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__8248) : pred__8247.call(null,new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__8248)))){
return (new cljs.core.match$macros.PatternMatrix(self__.rows,G__8231,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__8231),null));
}
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),self__.ocrs,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8231){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,G__8231,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_PatternMatrix = (function cljs$core$match$macros$map__GT_PatternMatrix(G__8235){
var extmap__4419__auto__ = (function (){var G__8259 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8235,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], 0));
if(cljs.core.record_QMARK_(G__8235)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8259);
} else {
return G__8259;
}
})();
return (new cljs.core.match$macros.PatternMatrix(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(G__8235),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(G__8235),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8262_SHARP_){
return cljs.core.match$macros.drop_nth_bind(p1__8262_SHARP_,(0),focr);
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
var G__8271 = k;
var G__8271__$1 = (((G__8271 instanceof cljs.core.Keyword))?G__8271.fqn:null);
switch (G__8271__$1) {
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
var G__8290 = arguments.length;
switch (G__8290) {
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
var G__8303 = k;
var G__8303__$1 = (((G__8303 instanceof cljs.core.Keyword))?G__8303.fqn:null);
switch (G__8303__$1) {
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
var vec__8333 = (cljs.core.truth_((cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.seq_pattern_QMARK_.call(null,p)))?(function (){var vec__8336 = new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p);
var seq__8337 = cljs.core.seq(vec__8336);
var first__8338 = cljs.core.first(seq__8337);
var seq__8337__$1 = cljs.core.next(seq__8337);
var h = first__8338;
var t = seq__8337__$1;
var t__$1 = ((cljs.core.empty_QMARK_(t))?cljs.core.match$macros.literal_pattern(cljs.core.List.EMPTY):(cljs.core.truth_((function (){var G__8340 = cljs.core.first(t);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__8340) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__8340));
})())?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(t)):(cljs.core.match$macros.seq_pattern.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.seq_pattern.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.match$macros.seq_pattern.call(null,t))
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,t__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8333,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8333,(1),null);
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
var G__8344 = k;
var G__8344__$1 = (((G__8344 instanceof cljs.core.Keyword))?G__8344.fqn:null);
switch (G__8344__$1) {
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
if((((cljs.core.count(self__.s) >= (1))) && (cljs.core.not((function (){var G__8349 = cljs.core.first(self__.s);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__8349) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__8349));
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
if(cljs.core.not((function (){var G__8357 = cljs.core.first(self__.s);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__8357) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__8357));
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8360,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8369 = k8360;
var G__8369__$1 = (((G__8369 instanceof cljs.core.Keyword))?G__8369.fqn:null);
switch (G__8369__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8360,else__4383__auto__);

}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__8370){
var vec__8371 = p__8370;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8371,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8371,(1),null);
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8359){
var self__ = this;
var G__8359__$1 = this;
return (new cljs.core.RecordIter((0),G__8359__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8361,other8362){
var self__ = this;
var this8361__$1 = this;
return (((!((other8362 == null)))) && ((this8361__$1.constructor === other8362.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8361__$1.p,other8362.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8361__$1.__extmap,other8362.__extmap)));
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8359){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8401 = cljs.core.keyword_identical_QMARK_;
var expr__8402 = k__4388__auto__;
if(cljs.core.truth_((pred__8401.cljs$core$IFn$_invoke$arity$2 ? pred__8401.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__8402) : pred__8401.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__8402)))){
return (new cljs.core.match$macros.RestPattern(G__8359,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__8359),null));
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8359){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.RestPattern(self__.p,G__8359,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_RestPattern = (function cljs$core$match$macros$map__GT_RestPattern(G__8363){
var extmap__4419__auto__ = (function (){var G__8433 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8363,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__8363)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8433);
} else {
return G__8433;
}
})();
return (new cljs.core.match$macros.RestPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__8363),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.rest_pattern = (function cljs$core$match$macros$rest_pattern(p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cljs.core.match$macros.RestPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477),new cljs.core.Keyword("cljs.core.match","rest","cljs.core.match/rest",-410436433));
});
cljs.core.match$macros.rest_pattern_QMARK_ = (function cljs$core$match$macros$rest_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.RestPattern);
});
cljs.core.match$macros.specialize_map_key_pattern_matrix = (function cljs$core$match$macros$specialize_map_key_pattern_matrix(rows){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(rows));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8451_SHARP_){
return cljs.core.match.protocols.prepend(p1__8451_SHARP_,p);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8449_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__8449_SHARP_,(0));
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k8466,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__8471 = k8466;
var G__8471__$1 = (((G__8471 instanceof cljs.core.Keyword))?G__8471.fqn:null);
switch (G__8471__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8466,else__4383__auto__);

}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__8472){
var vec__8473 = p__8472;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8473,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8473,(1),null);
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__8465){
var self__ = this;
var G__8465__$1 = this;
return (new cljs.core.RecordIter((0),G__8465__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this8467,other8468){
var self__ = this;
var this8467__$1 = this;
return (((!((other8468 == null)))) && ((this8467__$1.constructor === other8468.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8467__$1.p,other8468.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this8467__$1.__extmap,other8468.__extmap)));
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__8465){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__8480 = cljs.core.keyword_identical_QMARK_;
var expr__8481 = k__4388__auto__;
if(cljs.core.truth_((pred__8480.cljs$core$IFn$_invoke$arity$2 ? pred__8480.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__8481) : pred__8480.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__8481)))){
return (new cljs.core.match$macros.MapKeyPattern(G__8465,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__8465),null));
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__8465){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.MapKeyPattern(self__.p,G__8465,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_MapKeyPattern = (function cljs$core$match$macros$map__GT_MapKeyPattern(G__8469){
var extmap__4419__auto__ = (function (){var G__8483 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__8469,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__8469)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__8483);
} else {
return G__8483;
}
})();
return (new cljs.core.match$macros.MapKeyPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__8469),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8493_SHARP_){
return cljs.core.match$macros.row_keys(p1__8493_SHARP_,env);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.wildcard_pattern_QMARK_,cljs.core.first),rows))));
});
cljs.core.match$macros.wrap_values = (function cljs$core$match$macros$wrap_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8522){
var vec__8523 = p__8522;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8523,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8523,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.match$macros.wildcard_pattern_QMARK_(v))?cljs.core.match$macros.map_key_pattern(v):v)], null);
}),m));
});
cljs.core.match$macros.get_ocr_map = (function cljs$core$match$macros$get_ocr_map(p,p__8530){
var map__8550 = p__8530;
var map__8550__$1 = (((((!((map__8550 == null))))?(((((map__8550.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8550.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8550):map__8550);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8550__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8550__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var wc_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8550__$1,new cljs.core.Keyword(null,"wc-map","wc-map",-57721646));
if(cljs.core.truth_((cljs.core.match$macros.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.map_pattern_QMARK_.call(null,p)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(only)?cljs.core.zipmap(all_keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.literal_pattern(new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)))):null),wc_map,cljs.core.match$macros.wrap_values(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(p))], 0));
} else {
return wc_map;
}
});
cljs.core.match$macros.specialize_map_pattern_row = (function cljs$core$match$macros$specialize_map_pattern_row(row,p__8556){
var map__8557 = p__8556;
var map__8557__$1 = (((((!((map__8557 == null))))?(((((map__8557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8557):map__8557);
var env = map__8557__$1;
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8557__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8557__$1,new cljs.core.Keyword(null,"only?","only?",504823581));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8557__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var p = cljs.core.first(row);
var only = cljs.core.seq(new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
var ocr_map = cljs.core.match$macros.get_ocr_map(p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"only","only",1907811652),only));
var ps = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ocr_map,all_keys));
var ps__$1 = (cljs.core.truth_(cljs.core.deref(only_QMARK_))?((only)?(function (){var a = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",981564201,null)], null));
return cljs.core.cons((function (){var G__8559 = cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();
var G__8560 = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,a,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(only)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null));
return (cljs.core.match$macros.guard_pattern.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.guard_pattern.cljs$core$IFn$_invoke$arity$2(G__8559,G__8560) : cljs.core.match$macros.guard_pattern.call(null,G__8559,G__8560));
})(),ps);
})():cljs.core.cons(cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),ps)):ps);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps__$1));
});
cljs.core.match$macros.specialize_map_pattern_matrix = (function cljs$core$match$macros$specialize_map_pattern_matrix(rows,env){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8561_SHARP_){
return cljs.core.match$macros.specialize_map_pattern_row(p1__8561_SHARP_,env);
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
var mocrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8562_SHARP_){
return cljs.core.match$macros.map_pattern_matrix_ocr_sym(p1__8562_SHARP_,env);
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
var G__8565 = k;
var G__8565__$1 = (((G__8565 instanceof cljs.core.Keyword))?G__8565.fqn:null);
switch (G__8565__$1) {
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
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070),all_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wc-map","wc-map",-57721646),cljs.core.zipmap(all_keys,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.wildcard_pattern)),new cljs.core.Keyword(null,"ocrs-map","ocrs-map",76084823),cljs.core.zipmap(all_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8563_SHARP_){
return cljs.core.match$macros.gen_map_pattern_ocr(focr,p1__8563_SHARP_);
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
var G__8567 = arguments.length;
switch (G__8567) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__8568,p__8569){
var vec__8570 = p__8568;
var rest_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8570,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8570,(1),null);
var vec__8573 = p__8569;
var seq__8574 = cljs.core.seq(vec__8573);
var first__8575 = cljs.core.first(seq__8574);
var seq__8574__$1 = cljs.core.next(seq__8574);
var p = first__8575;
var ps = seq__8574__$1;
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
cljs.core.match$macros.specialize_vector_pattern_row = (function cljs$core$match$macros$specialize_vector_pattern_row(row,p__8580){
var map__8581 = p__8580;
var map__8581__$1 = (((((!((map__8581 == null))))?(((((map__8581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8581):map__8581);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8581__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8581__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.vector_pattern_QMARK_.call(null,p)))?cljs.core.match.protocols.split(p,min_size):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null)
);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps));
});
cljs.core.match$macros.specialize_vector_pattern_row_non_rest = (function cljs$core$match$macros$specialize_vector_pattern_row_non_rest(row,p__8587){
var map__8588 = p__8587;
var map__8588__$1 = (((((!((map__8588 == null))))?(((((map__8588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8588):map__8588);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8588__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8588__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.vector_pattern_QMARK_.call(null,p)))?cljs.core.reverse(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(min_size,cljs.core.match$macros.wildcard_pattern));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),ps);
});
cljs.core.match$macros.specialize_vector_pattern_matrix = (function cljs$core$match$macros$specialize_vector_pattern_matrix(rows,env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8590_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row(p1__8590_SHARP_,env);
}),rows));
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8591_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row_non_rest(p1__8591_SHARP_,env);
}),rows));
}
});
cljs.core.match$macros.vector_pattern_ocr_sym = (function cljs$core$match$macros$vector_pattern_ocr_sym(p__8593,i){
var map__8594 = p__8593;
var map__8594__$1 = (((((!((map__8594 == null))))?(((((map__8594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8594):map__8594);
var pat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8594__$1,new cljs.core.Keyword(null,"pat","pat",-1417570164));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8594__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8594__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
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
cljs.core.match$macros.vector_pattern_matrix_ocrs = (function cljs$core$match$macros$vector_pattern_matrix_ocrs(ocrs,p__8596){
var map__8597 = p__8596;
var map__8597__$1 = (((((!((map__8597 == null))))?(((((map__8597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8597):map__8597);
var env = map__8597__$1;
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8597__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8597__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8597__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var rest_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8597__$1,new cljs.core.Keyword(null,"rest?","rest?",345335951));
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
return (((other instanceof cljs.core.match$macros.VectorPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8599_SHARP_){
return (p1__8599_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__8599_SHARP_.cljs$core$IFn$_invoke$arity$1(other) : p1__8599_SHARP_.call(null,other));
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
var G__8604 = k;
var G__8604__$1 = (((G__8604 instanceof cljs.core.Keyword))?G__8604.fqn:null);
switch (G__8604__$1) {
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
var vec__8610 = cljs.core.match$macros.calc_rest_QMARK__and_min_size(rows,env);
var rest_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8610,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8610,(1),null);
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
var G__8614 = arguments.length;
switch (G__8614) {
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
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8615_SHARP_){
return cljs.core.match$macros.specialize_or_pattern_row(p1__8615_SHARP_,pat,ps);
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
var G__8628 = k;
var G__8628__$1 = (((G__8628 instanceof cljs.core.Keyword))?G__8628.fqn:null);
switch (G__8628__$1) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8630){
var vec__8631 = p__8630;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8631,(0),null);
var row = vec__8631;
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
var G__8636 = k;
var G__8636__$1 = (((G__8636 instanceof cljs.core.Keyword))?G__8636.fqn:null);
switch (G__8636__$1) {
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
cljs.core.match$macros.app_pattern_matrix_ocrs = (function cljs$core$match$macros$app_pattern_matrix_ocrs(p__8637,form){
var vec__8638 = p__8637;
var focr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8638,(0),null);
var ocrs = vec__8638;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["app_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(focr)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(focr));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return focr;
}
})(),null,(1),null)))))], null))], null),ocrs);
});
cljs.core.match$macros.specialize_app_pattern_matrix = (function cljs$core$match$macros$specialize_app_pattern_matrix(rows,form){
var vec__8641 = cljs.core.split_with((function (p__8644){
var vec__8645 = p__8644;
var pat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8645,(0),null);
var row = vec__8645;
var and__4115__auto__ = (cljs.core.match$macros.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(pat) : cljs.core.match$macros.app_pattern_QMARK_.call(null,pat));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(pat),form);
} else {
return and__4115__auto__;
}
}),rows);
var matched_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8641,(0),null);
var rest_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8641,(1),null);
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
var G__8648 = k;
var G__8648__$1 = (((G__8648 instanceof cljs.core.Keyword))?G__8648.fqn:null);
switch (G__8648__$1) {
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
var ret__4785__auto___8930 = (function (){
cljs.core.match$macros.defpred = (function cljs$core$match$macros$defpred(var_args){
var G__8650 = arguments.length;
switch (G__8650) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8651){
var vec__8652 = p__8651;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8652,(0),null);
var row = vec__8652;
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
var G__8655 = k;
var G__8655__$1 = (((G__8655 instanceof cljs.core.Keyword))?G__8655.fqn:null);
switch (G__8655__$1) {
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__8656 = cljs.core.get_global_hierarchy;
return (fexpr__8656.cljs$core$IFn$_invoke$arity$0 ? fexpr__8656.cljs$core$IFn$_invoke$arity$0() : fexpr__8656.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__8657 = cljs.core.get_global_hierarchy;
return (fexpr__8657.cljs$core$IFn$_invoke$arity$0 ? fexpr__8657.cljs$core$IFn$_invoke$arity$0() : fexpr__8657.call(null));
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
var G__8659 = arguments.length;
switch (G__8659) {
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
var G__8934 = cljs.core.nnext(ps);
var G__8935 = t;
var G__8936 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match$macros.rest_pattern(rp));
ps = G__8934;
t = G__8935;
v = G__8936;
continue;
} else {
var G__8937 = cljs.core.next(ps);
var G__8938 = t;
var G__8939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ps)));
ps = G__8937;
t = G__8938;
v = G__8939;
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
return cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8660){
var vec__8661 = p__8660;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8661,(1),null);
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__8664 = cljs.core.get_global_hierarchy;
return (fexpr__8664.cljs$core$IFn$_invoke$arity$0 ? fexpr__8664.cljs$core$IFn$_invoke$arity$0() : fexpr__8664.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","emit-pattern-for-syntax"),(function (p__8665){
var vec__8666 = p__8665;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8666,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8666,(1),null);
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
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"as","as",1148689641)], null),(function (p__8669){
var vec__8670 = p__8669;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8670,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8670,(1),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8670,(2),null);
return cljs.core.with_meta(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),sym], null));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"<<","<<",1655720184)], null),(function (p__8673){
var vec__8674 = p__8673;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8674,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8674,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8674,(2),null);
return cljs.core.match$macros.app_pattern(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),form);
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"when","when",-576417306)], null),(function (p__8678){
var vec__8679 = p__8678;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8679,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_(gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Invalid predicate expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? symbol? gs)"].join('')));
}

if(cljs.core.every_QMARK_((function (p1__8677_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(cljs.core.match$macros.preds),p1__8677_SHARP_);
}),gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Unknown predicate in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? (fn* [p1__8677#] (contains? (clojure.core/deref preds) p1__8677#)) gs)"].join('')));
}

return cljs.core.match$macros.predicate_pattern(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),cljs.core.set(gs__$1));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"guard","guard",-873147811)], null),(function (p__8682){
var vec__8683 = p__8682;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8683,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8683,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8683,(2),null);
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
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296)], null),(function (p__8686){
var vec__8687 = p__8686;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(1),null);
var offset_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(2),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8687,(3),null);
var ps = cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"vector","vector",1902966158));
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(ps,t,offset,cljs.core.some(cljs.core.match$macros.rest_pattern_QMARK_,ps));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"only","only",1907811652)], null),(function (p__8690){
var vec__8691 = p__8690;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8691,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8691,(1),null);
var only = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8691,(2),null);
return cljs.core.with_meta(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",1907811652),only], null));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__8695){
var vec__8696 = p__8695;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8696,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8696,(1),null);
var l = vec__8696;
throw (new Error(["Invalid list syntax ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),". ","Valid syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__8694_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__8694_SHARP_,new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.keys(cljs.core.match$macros.emit_pattern_for_syntax.getMethodTable()))))].join('')));
}));
var void_8940 = ({});
var void_QMARK__8941 = (function (p1__8699_SHARP_){
return (void_8940 === p1__8699_SHARP_);
});
var infix_keyword_QMARK__8942 = (function (p1__8700_SHARP_){
var fexpr__8703 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"guard","guard",-873147811),null], null), null);
return (fexpr__8703.cljs$core$IFn$_invoke$arity$1 ? fexpr__8703.cljs$core$IFn$_invoke$arity$1(p1__8700_SHARP_) : fexpr__8703.call(null,p1__8700_SHARP_));
});
cljs.core.match$macros.regroup_keywords = (function cljs$core$match$macros$regroup_keywords(pattern){
if(cljs.core.vector_QMARK_(pattern)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__8704,r){
var vec__8705 = p__8704;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(1),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8705,(2),null);
if(void_QMARK__8941(p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,q,r], null);
} else {
if(cljs.core.truth_((((!(void_QMARK__8941(r))))?infix_keyword_QMARK__8942(q):false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(new cljs.core.List(null,(cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.regroup_keywords.call(null,p)),(new cljs.core.List(null,q,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null))),void_8940,void_8940], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.regroup_keywords.call(null,p))),q,r], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,void_8940,void_8940], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(pattern,void_8940,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([void_8940], 0))));
} else {
if(cljs.core.seq_QMARK_(pattern)){
return cljs.core.cons((function (){var G__8708 = cljs.core.first(pattern);
return (cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(G__8708) : cljs.core.match$macros.regroup_keywords.call(null,G__8708));
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
var G__8943 = pats;
var G__8944 = seen;
var G__8945 = dups;
remaining = G__8943;
seen = G__8944;
dups = G__8945;
continue;
} else {
if((pat instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_(seen,pat)){
var G__8946 = pats;
var G__8947 = seen;
var G__8948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dups,pat);
remaining = G__8946;
seen = G__8947;
dups = G__8948;
continue;
} else {
var G__8949 = pats;
var G__8950 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,pat);
var G__8951 = dups;
remaining = G__8949;
seen = G__8950;
dups = G__8951;
continue;
}
} else {
if(cljs.core.vector_QMARK_(pat)){
var G__8952 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,pat);
var G__8953 = seen;
var G__8954 = dups;
remaining = G__8952;
seen = G__8953;
dups = G__8954;
continue;
} else {
if(cljs.core.map_QMARK_(pat)){
var G__8955 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.vals(pat));
var G__8956 = seen;
var G__8957 = dups;
remaining = G__8955;
seen = G__8956;
dups = G__8957;
continue;
} else {
if(cljs.core.seq_QMARK_(pat)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
var G__8958 = pats;
var G__8959 = seen;
var G__8960 = dups;
remaining = G__8958;
seen = G__8959;
dups = G__8960;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Keyword(null,"or","or",235744169))){
var wds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.wildcards_and_duplicates,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat)));
var mseen = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,wds));
var G__8961 = pats;
var G__8962 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(seen,mseen);
var G__8963 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.set.union,dups,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(seen,mseen),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,wds));
remaining = G__8961;
seen = G__8962;
dups = G__8963;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(pat),new cljs.core.Keyword(null,"as","as",1148689641))){
var G__8964 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat));
var G__8965 = seen;
var G__8966 = dups;
remaining = G__8964;
seen = G__8965;
dups = G__8966;
continue;
} else {
var G__8967 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.first(pat));
var G__8968 = seen;
var G__8969 = dups;
remaining = G__8967;
seen = G__8968;
dups = G__8969;
continue;

}
}
}
} else {
var G__8970 = pats;
var G__8971 = seen;
var G__8972 = dups;
remaining = G__8970;
seen = G__8971;
dups = G__8972;
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

var nvars_8973 = cljs.core.count(vars);
var cls_8974 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var seq__8709_8975 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(cls_8974),cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var chunk__8710_8976 = null;
var count__8711_8977 = (0);
var i__8712_8978 = (0);
while(true){
if((i__8712_8978 < count__8711_8977)){
var vec__8725_8979 = chunk__8710_8976.cljs$core$IIndexed$_nth$arity$2(null,i__8712_8978);
var vec__8728_8980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8725_8979,(0),null);
var pat_8981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8728_8980,(0),null);
var __8982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8728_8980,(1),null);
var rownum_8983 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8725_8979,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8981)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_8983),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern(pat_8981,vars,nvars_8973,rownum_8983);


var G__8984 = seq__8709_8975;
var G__8985 = chunk__8710_8976;
var G__8986 = count__8711_8977;
var G__8987 = (i__8712_8978 + (1));
seq__8709_8975 = G__8984;
chunk__8710_8976 = G__8985;
count__8711_8977 = G__8986;
i__8712_8978 = G__8987;
continue;
} else {
var temp__5735__auto___8988 = cljs.core.seq(seq__8709_8975);
if(temp__5735__auto___8988){
var seq__8709_8989__$1 = temp__5735__auto___8988;
if(cljs.core.chunked_seq_QMARK_(seq__8709_8989__$1)){
var c__4556__auto___8990 = cljs.core.chunk_first(seq__8709_8989__$1);
var G__8991 = cljs.core.chunk_rest(seq__8709_8989__$1);
var G__8992 = c__4556__auto___8990;
var G__8993 = cljs.core.count(c__4556__auto___8990);
var G__8994 = (0);
seq__8709_8975 = G__8991;
chunk__8710_8976 = G__8992;
count__8711_8977 = G__8993;
i__8712_8978 = G__8994;
continue;
} else {
var vec__8731_8995 = cljs.core.first(seq__8709_8989__$1);
var vec__8734_8996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8731_8995,(0),null);
var pat_8997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8734_8996,(0),null);
var __8998 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8734_8996,(1),null);
var rownum_8999 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8731_8995,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8997)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_8999),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern(pat_8997,vars,nvars_8973,rownum_8999);


var G__9000 = cljs.core.next(seq__8709_8989__$1);
var G__9001 = null;
var G__9002 = (0);
var G__9003 = (0);
seq__8709_8975 = G__9000;
chunk__8710_8976 = G__9001;
count__8711_8977 = G__9002;
i__8712_8978 = G__9003;
continue;
}
} else {
}
}
break;
}

var temp__5735__auto___9004 = cljs.core.last(cls_8974);
if(cljs.core.truth_(temp__5735__auto___9004)){
var vec__8737_9005 = temp__5735__auto___9004;
var pat_9006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8737_9005,(0),null);
var __9007 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8737_9005,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_9006)){
} else {
cljs.core.match$macros.check_pattern(pat_9006,vars,nvars_8973,cljs.core.count(cls_8974));
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
var G__8742 = arguments.length;
switch (G__8742) {
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
var cs__$1 = (function (){var vec__8743 = cljs.core.last(cs);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8743,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8743,(1),null);
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
return cljs.core.match$macros.pattern_matrix(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8740_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.to_pattern_row,p1__8740_SHARP_);
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

var _STAR_recur_present_STAR__orig_val__8746 = cljs.core.match$macros._STAR_recur_present_STAR_;
var _STAR_recur_present_STAR__temp_val__8747 = (function (){var or__4126__auto__ = cljs.core.match$macros._STAR_recur_present_STAR_;
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
(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__temp_val__8747);

try{return cljs.core.match$macros.executable_form(cljs.core.match$macros.compile(cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$2(vars,clauses)));
}finally {(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__orig_val__8746);
}});
var ret__4785__auto___9009 = (function (){
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
var len__4736__auto___9010 = arguments.length;
var i__4737__auto___9011 = (0);
while(true){
if((i__4737__auto___9011 < len__4736__auto___9010)){
args__4742__auto__.push((arguments[i__4737__auto___9011]));

var G__9012 = (i__4737__auto___9011 + (1));
i__4737__auto___9011 = G__9012;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8752 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8755){
var vec__8756 = p__8755;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8756,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8756,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8752,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8752,(1),null);
var _STAR_line_STAR__orig_val__8759 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8760 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8761 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8762 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8763 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8764 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8762);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8763);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8764);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8761);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8760);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8759);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq8748){
var G__8749 = cljs.core.first(seq8748);
var seq8748__$1 = cljs.core.next(seq8748);
var G__8750 = cljs.core.first(seq8748__$1);
var seq8748__$2 = cljs.core.next(seq8748__$1);
var G__8751 = cljs.core.first(seq8748__$2);
var seq8748__$3 = cljs.core.next(seq8748__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8749,G__8750,G__8751,seq8748__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__4785__auto___9013 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9014 = arguments.length;
var i__4737__auto___9015 = (0);
while(true){
if((i__4737__auto___9015 < len__4736__auto___9014)){
args__4742__auto__.push((arguments[i__4737__auto___9015]));

var G__9016 = (i__4737__auto___9015 + (1));
i__4737__auto___9015 = G__9016;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8770 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8771 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8772 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8773 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__8774 = type;
var _STAR_line_STAR__temp_val__8775 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8776 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8777 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8774);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8775);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8776);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8777);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8773);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8772);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8771);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8770);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq8765){
var G__8766 = cljs.core.first(seq8765);
var seq8765__$1 = cljs.core.next(seq8765);
var G__8767 = cljs.core.first(seq8765__$1);
var seq8765__$2 = cljs.core.next(seq8765__$1);
var G__8768 = cljs.core.first(seq8765__$2);
var seq8765__$3 = cljs.core.next(seq8765__$2);
var G__8769 = cljs.core.first(seq8765__$3);
var seq8765__$4 = cljs.core.next(seq8765__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8766,G__8767,G__8768,G__8769,seq8765__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__4785__auto___9017 = (function (){
/**
 * Same as match but supports IMatchLookup when
 *   matching maps.
 */
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9018 = arguments.length;
var i__4737__auto___9019 = (0);
while(true){
if((i__4737__auto___9019 < len__4736__auto___9018)){
args__4742__auto__.push((arguments[i__4737__auto___9019]));

var G__9020 = (i__4737__auto___9019 + (1));
i__4737__auto___9019 = G__9020;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8782 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8785){
var vec__8786 = p__8785;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8786,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8786,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8782,(1),null);
var _STAR_match_lookup_STAR__orig_val__8789 = cljs.core.match$macros._STAR_match_lookup_STAR_;
var _STAR_line_STAR__orig_val__8790 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8791 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8792 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_match_lookup_STAR__temp_val__8793 = true;
var _STAR_line_STAR__temp_val__8794 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8795 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8796 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__temp_val__8793);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8794);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8795);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8796);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8792);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8791);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8790);

(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__orig_val__8789);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq8778){
var G__8779 = cljs.core.first(seq8778);
var seq8778__$1 = cljs.core.next(seq8778);
var G__8780 = cljs.core.first(seq8778__$1);
var seq8778__$2 = cljs.core.next(seq8778__$1);
var G__8781 = cljs.core.first(seq8778__$2);
var seq8778__$3 = cljs.core.next(seq8778__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8779,G__8780,G__8781,seq8778__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__4785__auto___9021 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9022 = arguments.length;
var i__4737__auto___9023 = (0);
while(true){
if((i__4737__auto___9023 < len__4736__auto___9022)){
args__4742__auto__.push((arguments[i__4737__auto___9023]));

var G__9024 = (i__4737__auto___9023 + (1));
i__4737__auto___9023 = G__9024;
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
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq8797){
var G__8798 = cljs.core.first(seq8797);
var seq8797__$1 = cljs.core.next(seq8797);
var G__8799 = cljs.core.first(seq8797__$1);
var seq8797__$2 = cljs.core.next(seq8797__$1);
var G__8800 = cljs.core.first(seq8797__$2);
var seq8797__$3 = cljs.core.next(seq8797__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8798,G__8799,G__8800,seq8797__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__4785__auto___9025 = cljs.core.match$macros.asets = (function cljs$core$match$macros$asets(_AMPERSAND_form,_AMPERSAND_env,a,vs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (a__$1,b,c){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a__$1,(new cljs.core.List(null,b,(new cljs.core.List(null,c,null,(1),null)),(2),null)));
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)))))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vs)),vs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,a,null,(1),null))], 0))));
});
(cljs.core.match$macros.asets.cljs$lang$macro = true);

var ret__4785__auto___9026 = (function (){
cljs.core.match$macros.match = (function cljs$core$match$macros$match(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9027 = arguments.length;
var i__4737__auto___9028 = (0);
while(true){
if((i__4737__auto___9028 < len__4736__auto___9027)){
args__4742__auto__.push((arguments[i__4737__auto___9028]));

var G__9029 = (i__4737__auto___9028 + (1));
i__4737__auto___9028 = G__9029;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8805 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8808){
var vec__8809 = p__8808;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8809,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8809,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8805,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8805,(1),null);
var _STAR_line_STAR__orig_val__8812 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8813 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8814 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8815 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8816 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8817 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8815);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8816);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8817);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8814);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8813);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8812);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq8801){
var G__8802 = cljs.core.first(seq8801);
var seq8801__$1 = cljs.core.next(seq8801);
var G__8803 = cljs.core.first(seq8801__$1);
var seq8801__$2 = cljs.core.next(seq8801__$1);
var G__8804 = cljs.core.first(seq8801__$2);
var seq8801__$3 = cljs.core.next(seq8801__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8802,G__8803,G__8804,seq8801__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__4785__auto___9030 = (function (){
cljs.core.match$macros.match_STAR_ = (function cljs$core$match$macros$match_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9031 = arguments.length;
var i__4737__auto___9032 = (0);
while(true){
if((i__4737__auto___9032 < len__4736__auto___9031)){
args__4742__auto__.push((arguments[i__4737__auto___9032]));

var G__9033 = (i__4737__auto___9032 + (1));
i__4737__auto___9032 = G__9033;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8822 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8825){
var vec__8826 = p__8825;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8826,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8826,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8822,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8822,(1),null);
var _STAR_line_STAR__orig_val__8829 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8830 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8831 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__8832 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_line_STAR__temp_val__8833 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8834 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8835 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_no_backtrack_STAR__temp_val__8836 = true;
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8833);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8834);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8835);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__8836);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__8832);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8831);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8830);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8829);
}}));

(cljs.core.match$macros.match_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_STAR_.cljs$lang$applyTo = (function (seq8818){
var G__8819 = cljs.core.first(seq8818);
var seq8818__$1 = cljs.core.next(seq8818);
var G__8820 = cljs.core.first(seq8818__$1);
var seq8818__$2 = cljs.core.next(seq8818__$1);
var G__8821 = cljs.core.first(seq8818__$2);
var seq8818__$3 = cljs.core.next(seq8818__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8819,G__8820,G__8821,seq8818__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_STAR_.cljs$lang$macro = true);

var ret__4785__auto___9034 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9035 = arguments.length;
var i__4737__auto___9036 = (0);
while(true){
if((i__4737__auto___9036 < len__4736__auto___9035)){
args__4742__auto__.push((arguments[i__4737__auto___9036]));

var G__9037 = (i__4737__auto___9036 + (1));
i__4737__auto___9036 = G__9037;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8842 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8843 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8844 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8845 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__8846 = type;
var _STAR_line_STAR__temp_val__8847 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8848 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8849 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8846);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8847);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8848);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8849);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8845);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8844);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8843);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8842);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq8837){
var G__8838 = cljs.core.first(seq8837);
var seq8837__$1 = cljs.core.next(seq8837);
var G__8839 = cljs.core.first(seq8837__$1);
var seq8837__$2 = cljs.core.next(seq8837__$1);
var G__8840 = cljs.core.first(seq8837__$2);
var seq8837__$3 = cljs.core.next(seq8837__$2);
var G__8841 = cljs.core.first(seq8837__$3);
var seq8837__$4 = cljs.core.next(seq8837__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8838,G__8839,G__8840,G__8841,seq8837__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__4785__auto___9038 = (function (){
cljs.core.match$macros.matchv_STAR_ = (function cljs$core$match$macros$matchv_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9039 = arguments.length;
var i__4737__auto___9040 = (0);
while(true){
if((i__4737__auto___9040 < len__4736__auto___9039)){
args__4742__auto__.push((arguments[i__4737__auto___9040]));

var G__9041 = (i__4737__auto___9040 + (1));
i__4737__auto___9040 = G__9041;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8855 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8856 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8857 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8858 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__8859 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_vector_type_STAR__temp_val__8860 = type;
var _STAR_line_STAR__temp_val__8861 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8862 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8863 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_no_backtrack_STAR__temp_val__8864 = true;
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8860);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8861);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8862);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8863);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__8864);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__8859);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8858);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8857);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8856);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8855);
}}));

(cljs.core.match$macros.matchv_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv_STAR_.cljs$lang$applyTo = (function (seq8850){
var G__8851 = cljs.core.first(seq8850);
var seq8850__$1 = cljs.core.next(seq8850);
var G__8852 = cljs.core.first(seq8850__$1);
var seq8850__$2 = cljs.core.next(seq8850__$1);
var G__8853 = cljs.core.first(seq8850__$2);
var seq8850__$3 = cljs.core.next(seq8850__$2);
var G__8854 = cljs.core.first(seq8850__$3);
var seq8850__$4 = cljs.core.next(seq8850__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8851,G__8852,G__8853,G__8854,seq8850__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv_STAR_.cljs$lang$macro = true);

var ret__4785__auto___9042 = (function (){
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9043 = arguments.length;
var i__4737__auto___9044 = (0);
while(true){
if((i__4737__auto___9044 < len__4736__auto___9043)){
args__4742__auto__.push((arguments[i__4737__auto___9044]));

var G__9045 = (i__4737__auto___9044 + (1));
i__4737__auto___9044 = G__9045;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8869 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8872){
var vec__8873 = p__8872;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8873,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8873,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8869,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8869,(1),null);
var _STAR_line_STAR__orig_val__8876 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8877 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8878 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8879 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8880 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8881 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8879);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8880);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8881);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8878);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8877);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8876);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq8865){
var G__8866 = cljs.core.first(seq8865);
var seq8865__$1 = cljs.core.next(seq8865);
var G__8867 = cljs.core.first(seq8865__$1);
var seq8865__$2 = cljs.core.next(seq8865__$1);
var G__8868 = cljs.core.first(seq8865__$2);
var seq8865__$3 = cljs.core.next(seq8865__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8866,G__8867,G__8868,seq8865__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__4785__auto___9046 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9047 = arguments.length;
var i__4737__auto___9048 = (0);
while(true){
if((i__4737__auto___9048 < len__4736__auto___9047)){
args__4742__auto__.push((arguments[i__4737__auto___9048]));

var G__9049 = (i__4737__auto___9048 + (1));
i__4737__auto___9048 = G__9049;
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
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq8882){
var G__8883 = cljs.core.first(seq8882);
var seq8882__$1 = cljs.core.next(seq8882);
var G__8884 = cljs.core.first(seq8882__$1);
var seq8882__$2 = cljs.core.next(seq8882__$1);
var G__8885 = cljs.core.first(seq8882__$2);
var seq8882__$3 = cljs.core.next(seq8882__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8883,G__8884,G__8885,seq8882__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__4785__auto___9050 = (function (){
cljs.core.match$macros.match_let_STAR_ = (function cljs$core$match$macros$match_let_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___9051 = arguments.length;
var i__4737__auto___9052 = (0);
while(true){
if((i__4737__auto___9052 < len__4736__auto___9051)){
args__4742__auto__.push((arguments[i__4737__auto___9052]));

var G__9053 = (i__4737__auto___9052 + (1));
i__4737__auto___9052 = G__9053;
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
(cljs.core.match$macros.match_let_STAR_.cljs$lang$applyTo = (function (seq8886){
var G__8887 = cljs.core.first(seq8886);
var seq8886__$1 = cljs.core.next(seq8886);
var G__8888 = cljs.core.first(seq8886__$1);
var seq8886__$2 = cljs.core.next(seq8886__$1);
var G__8889 = cljs.core.first(seq8886__$2);
var seq8886__$3 = cljs.core.next(seq8886__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8887,G__8888,G__8889,seq8886__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let_STAR_.cljs$lang$macro = true);


//# sourceMappingURL=cljs.core.match$macros.js.map
