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
var _STAR_print_fn_STAR__orig_val__7655_8231 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__7657_8232 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__7657_8232);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),", line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros._STAR_line_STAR_),":"].join(''),msg], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__7655_8231);
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
var len__4736__auto___8233 = arguments.length;
var i__4737__auto___8234 = (0);
while(true){
if((i__4737__auto___8234 < len__4736__auto___8233)){
args__4742__auto__.push((arguments[i__4737__auto___8234]));

var G__8235 = (i__4737__auto___8234 + (1));
i__4737__auto___8234 = G__8235;
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
(cljs.core.match$macros.val_at_expr.cljs$lang$applyTo = (function (seq7670){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7670));
}));

cljs.core.match$macros.vector_type = (function cljs$core$match$macros$vector_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8236 = arguments.length;
var i__4737__auto___8237 = (0);
while(true){
if((i__4737__auto___8237 < len__4736__auto___8236)){
args__4742__auto__.push((arguments[i__4737__auto___8237]));

var G__8238 = (i__4737__auto___8237 + (1));
i__4737__auto___8237 = G__8238;
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
(cljs.core.match$macros.vector_type.cljs$lang$applyTo = (function (seq7686){
var G__7687 = cljs.core.first(seq7686);
var seq7686__$1 = cljs.core.next(seq7686);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__7687,seq7686__$1);
}));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match$macros !== 'undefined') && (typeof cljs.core.match$macros.check_size_QMARK_ !== 'undefined')){
} else {
cljs.core.match$macros.check_size_QMARK_ = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7688 = cljs.core.get_global_hierarchy;
return (fexpr__7688.cljs$core$IFn$_invoke$arity$0 ? fexpr__7688.cljs$core$IFn$_invoke$arity$0() : fexpr__7688.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7689 = cljs.core.get_global_hierarchy;
return (fexpr__7689.cljs$core$IFn$_invoke$arity$0 ? fexpr__7689.cljs$core$IFn$_invoke$arity$0() : fexpr__7689.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7690 = cljs.core.get_global_hierarchy;
return (fexpr__7690.cljs$core$IFn$_invoke$arity$0 ? fexpr__7690.cljs$core$IFn$_invoke$arity$0() : fexpr__7690.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7691 = cljs.core.get_global_hierarchy;
return (fexpr__7691.cljs$core$IFn$_invoke$arity$0 ? fexpr__7691.cljs$core$IFn$_invoke$arity$0() : fexpr__7691.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7692 = cljs.core.get_global_hierarchy;
return (fexpr__7692.cljs$core$IFn$_invoke$arity$0 ? fexpr__7692.cljs$core$IFn$_invoke$arity$0() : fexpr__7692.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7693 = cljs.core.get_global_hierarchy;
return (fexpr__7693.cljs$core$IFn$_invoke$arity$0 ? fexpr__7693.cljs$core$IFn$_invoke$arity$0() : fexpr__7693.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7694 = cljs.core.get_global_hierarchy;
return (fexpr__7694.cljs$core$IFn$_invoke$arity$0 ? fexpr__7694.cljs$core$IFn$_invoke$arity$0() : fexpr__7694.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7695 = cljs.core.get_global_hierarchy;
return (fexpr__7695.cljs$core$IFn$_invoke$arity$0 ? fexpr__7695.cljs$core$IFn$_invoke$arity$0() : fexpr__7695.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7696 = cljs.core.get_global_hierarchy;
return (fexpr__7696.cljs$core$IFn$_invoke$arity$0 ? fexpr__7696.cljs$core$IFn$_invoke$arity$0() : fexpr__7696.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7697 = cljs.core.get_global_hierarchy;
return (fexpr__7697.cljs$core$IFn$_invoke$arity$0 ? fexpr__7697.cljs$core$IFn$_invoke$arity$0() : fexpr__7697.call(null));
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
var G__8239 = null;
var G__8239__3 = (function (_,ocr,start){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null))], 0))));
});
var G__8239__4 = (function (_,ocr,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null))], 0))));
});
G__8239 = function(_,ocr,start,end){
switch(arguments.length){
case 3:
return G__8239__3.call(this,_,ocr,start);
case 4:
return G__8239__4.call(this,_,ocr,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__8239.cljs$core$IFn$_invoke$arity$3 = G__8239__3;
G__8239.cljs$core$IFn$_invoke$arity$4 = G__8239__4;
return G__8239;
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7698 = cljs.core.get_global_hierarchy;
return (fexpr__7698.cljs$core$IFn$_invoke$arity$0 ? fexpr__7698.cljs$core$IFn$_invoke$arity$0() : fexpr__7698.call(null));
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
var G__7700 = k;
var G__7700__$1 = (((G__7700 instanceof cljs.core.Keyword))?G__7700.fqn:null);
switch (G__7700__$1) {
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

(cljs.core.match$macros.PatternRow.prototype.apply = (function (self__,args7699){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args7699)));
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
var G__7702 = arguments.length;
switch (G__7702) {
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7704,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7708 = k7704;
var G__7708__$1 = (((G__7708 instanceof cljs.core.Keyword))?G__7708.fqn:null);
switch (G__7708__$1) {
case "value":
return self__.value;

break;
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7704,else__4383__auto__);

}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.empty_QMARK_(self__.bindings)))){
var bindings__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__7709){
var vec__7710 = p__7709;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7710,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7710,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7713){
var vec__7714 = p__7713;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7714,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7714,(1),null);
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7703){
var self__ = this;
var G__7703__$1 = this;
return (new cljs.core.RecordIter((0),G__7703__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7705,other7706){
var self__ = this;
var this7705__$1 = this;
return (((!((other7706 == null)))) && ((this7705__$1.constructor === other7706.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7705__$1.value,other7706.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7705__$1.bindings,other7706.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7705__$1.__extmap,other7706.__extmap)));
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

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7703){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7717 = cljs.core.keyword_identical_QMARK_;
var expr__7718 = k__4388__auto__;
if(cljs.core.truth_((pred__7717.cljs$core$IFn$_invoke$arity$2 ? pred__7717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__7718) : pred__7717.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__7718)))){
return (new cljs.core.match$macros.LeafNode(G__7703,self__.bindings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7717.cljs$core$IFn$_invoke$arity$2 ? pred__7717.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7718) : pred__7717.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7718)))){
return (new cljs.core.match$macros.LeafNode(self__.value,G__7703,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7703),null));
}
}
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.LeafNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7703){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.LeafNode(self__.value,self__.bindings,G__7703,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_LeafNode = (function cljs$core$match$macros$map__GT_LeafNode(G__7707){
var extmap__4419__auto__ = (function (){var G__7720 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7707,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bindings","bindings",1271397192)], 0));
if(cljs.core.record_QMARK_(G__7707)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7720);
} else {
return G__7720;
}
})();
return (new cljs.core.match$macros.LeafNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__7707),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__7707),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7723 = cljs.core.get_global_hierarchy;
return (fexpr__7723.cljs$core$IFn$_invoke$arity$0 ? fexpr__7723.cljs$core$IFn$_invoke$arity$0() : fexpr__7723.call(null));
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7725,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7729 = k7725;
switch (G__7729) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7725,else__4383__auto__);

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7730){
var vec__7731 = p__7730;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7731,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7731,(1),null);
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7724){
var self__ = this;
var G__7724__$1 = this;
return (new cljs.core.RecordIter((0),G__7724__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7726,other7727){
var self__ = this;
var this7726__$1 = this;
return (((!((other7727 == null)))) && ((this7726__$1.constructor === other7727.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7726__$1.__extmap,other7727.__extmap)));
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

(cljs.core.match$macros.FailNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7724){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7734 = cljs.core.keyword_identical_QMARK_;
var expr__7735 = k__4388__auto__;
return (new cljs.core.match$macros.FailNode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7724),null));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match$macros.FailNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7724){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.FailNode(G__7724,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_FailNode = (function cljs$core$match$macros$map__GT_FailNode(G__7728){
var extmap__4419__auto__ = (function (){var G__7737 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__7728);
if(cljs.core.record_QMARK_(G__7728)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7737);
} else {
return G__7737;
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7739,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7743 = k7739;
var G__7743__$1 = (((G__7743 instanceof cljs.core.Keyword))?G__7743.fqn:null);
switch (G__7743__$1) {
case "bindings":
return self__.bindings;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7739,else__4383__auto__);

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7744){
var vec__7745 = p__7744;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7745,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7745,(1),null);
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7738){
var self__ = this;
var G__7738__$1 = this;
return (new cljs.core.RecordIter((0),G__7738__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"node","node",581201198)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7740,other7741){
var self__ = this;
var this7740__$1 = this;
return (((!((other7741 == null)))) && ((this7740__$1.constructor === other7741.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7740__$1.bindings,other7741.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7740__$1.node,other7741.node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7740__$1.__extmap,other7741.__extmap)));
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

(cljs.core.match$macros.BindNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7738){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7748 = cljs.core.keyword_identical_QMARK_;
var expr__7749 = k__4388__auto__;
if(cljs.core.truth_((pred__7748.cljs$core$IFn$_invoke$arity$2 ? pred__7748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7749) : pred__7748.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__7749)))){
return (new cljs.core.match$macros.BindNode(G__7738,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7748.cljs$core$IFn$_invoke$arity$2 ? pred__7748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),expr__7749) : pred__7748.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__7749)))){
return (new cljs.core.match$macros.BindNode(self__.bindings,G__7738,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7738),null));
}
}
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",581201198),self__.node,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.BindNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7738){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.BindNode(self__.bindings,self__.node,G__7738,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_BindNode = (function cljs$core$match$macros$map__GT_BindNode(G__7742){
var extmap__4419__auto__ = (function (){var G__7751 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7742,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198)], 0));
if(cljs.core.record_QMARK_(G__7742)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7751);
} else {
return G__7751;
}
})();
return (new cljs.core.match$macros.BindNode(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__7742),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__7742),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var len__4736__auto___8246 = arguments.length;
var i__4737__auto___8247 = (0);
while(true){
if((i__4737__auto___8247 < len__4736__auto___8246)){
args__4742__auto__.push((arguments[i__4737__auto___8247]));

var G__8248 = (i__4737__auto___8247 + (1));
i__4737__auto___8247 = G__8248;
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,err_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7753__auto__","e__7753__auto__",-1672040079,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7753__auto__","e__7753__auto__",-1672040079,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match$macros.backtrack_sym(),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__7753__auto__","e__7753__auto__",-1672040079,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core.match$macros.catch_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match$macros.catch_error.cljs$lang$applyTo = (function (seq7754){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq7754));
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7756,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7760 = k7756;
var G__7760__$1 = (((G__7760 instanceof cljs.core.Keyword))?G__7760.fqn:null);
switch (G__7760__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7756,else__4383__auto__);

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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7761){
var vec__7762 = p__7761;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7762,(1),null);
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7755){
var self__ = this;
var G__7755__$1 = this;
return (new cljs.core.RecordIter((0),G__7755__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7757,other7758){
var self__ = this;
var this7757__$1 = this;
return (((!((other7758 == null)))) && ((this7757__$1.constructor === other7758.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7757__$1.occurrence,other7758.occurrence)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7757__$1.cases,other7758.cases)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7757__$1.default,other7758.default)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7757__$1.__extmap,other7758.__extmap)));
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

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7755){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7765 = cljs.core.keyword_identical_QMARK_;
var expr__7766 = k__4388__auto__;
if(cljs.core.truth_((pred__7765.cljs$core$IFn$_invoke$arity$2 ? pred__7765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__7766) : pred__7765.call(null,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__7766)))){
return (new cljs.core.match$macros.SwitchNode(G__7755,self__.cases,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7765.cljs$core$IFn$_invoke$arity$2 ? pred__7765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cases","cases",253862775),expr__7766) : pred__7765.call(null,new cljs.core.Keyword(null,"cases","cases",253862775),expr__7766)))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,G__7755,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7765.cljs$core$IFn$_invoke$arity$2 ? pred__7765.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__7766) : pred__7765.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),expr__7766)))){
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,G__7755,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7755),null));
}
}
}
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),self__.occurrence,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cases","cases",253862775),self__.cases,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.SwitchNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7755){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.SwitchNode(self__.occurrence,self__.cases,self__.default$,G__7755,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_SwitchNode = (function cljs$core$match$macros$map__GT_SwitchNode(G__7759){
var extmap__4419__auto__ = (function (){var G__7768 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7759,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], 0));
if(cljs.core.record_QMARK_(G__7759)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7768);
} else {
return G__7768;
}
})();
return (new cljs.core.match$macros.SwitchNode(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154).cljs$core$IFn$_invoke$arity$1(G__7759),new cljs.core.Keyword(null,"cases","cases",253862775).cljs$core$IFn$_invoke$arity$1(G__7759),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__7759),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
cljs.core.match$macros.width = (function cljs$core$match$macros$width(p__7769){
var map__7770 = p__7769;
var map__7770__$1 = (((((!((map__7770 == null))))?(((((map__7770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7770):map__7770);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7770__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
if((!(cljs.core.empty_QMARK_(rows)))){
return cljs.core.count((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1((0)) : rows.call(null,(0))));
} else {
return (0);
}
});
cljs.core.match$macros.height = (function cljs$core$match$macros$height(p__7772){
var map__7773 = p__7772;
var map__7773__$1 = (((((!((map__7773 == null))))?(((((map__7773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7773.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7773):map__7773);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7773__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.count(rows);
});
cljs.core.match$macros.dim = (function cljs$core$match$macros$dim(pm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.width(pm),cljs.core.match$macros.height(pm)], null);
});
cljs.core.match$macros.empty_matrix_QMARK_ = (function cljs$core$match$macros$empty_matrix_QMARK_(pm){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.dim(pm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
cljs.core.match$macros.column = (function cljs$core$match$macros$column(p__7776,i){
var map__7777 = p__7776;
var map__7777__$1 = (((((!((map__7777 == null))))?(((((map__7777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7777.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7777):map__7777);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7777__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7775_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__7775_SHARP_,i);
}),rows));
});
cljs.core.match$macros.row = (function cljs$core$match$macros$row(p__7779,j){
var map__7780 = p__7779;
var map__7780__$1 = (((((!((map__7780 == null))))?(((((map__7780.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7780.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7780):map__7780);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7780__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,j);
});
cljs.core.match$macros.rows = (function cljs$core$match$macros$rows(p__7782){
var map__7783 = p__7782;
var map__7783__$1 = (((((!((map__7783 == null))))?(((((map__7783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7783.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7783):map__7783);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7783__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return rows;
});
cljs.core.match$macros.pattern_at = (function cljs$core$match$macros$pattern_at(p__7785,i,j){
var map__7786 = p__7785;
var map__7786__$1 = (((((!((map__7786 == null))))?(((((map__7786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7786):map__7786);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7786__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var fexpr__7788 = (rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null,j));
return (fexpr__7788.cljs$core$IFn$_invoke$arity$1 ? fexpr__7788.cljs$core$IFn$_invoke$arity$1(i) : fexpr__7788.call(null,i));
});
cljs.core.match$macros.action_for_row = (function cljs$core$match$macros$action_for_row(p__7789,j){
var map__7790 = p__7789;
var map__7790__$1 = (((((!((map__7790 == null))))?(((((map__7790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7790):map__7790);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7790__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null,j)));
});
cljs.core.match$macros.occurrences = (function cljs$core$match$macros$occurrences(pm){
return new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(pm);
});
cljs.core.match$macros.row_bindings = (function cljs$core$match$macros$row_bindings(f,ocrs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(f),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7792){
var vec__7793 = p__7792;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7793,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7793,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p),cljs.core.match$macros.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1(ocr)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__7796){
var vec__7797 = p__7796;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7797,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7797,(1),null);
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.width(pm),(function (){var iter__4529__auto__ = (function cljs$core$match$macros$useful_matrix_$_iter__7801(s__7802){
return (new cljs.core.LazySeq(null,(function (){
var s__7802__$1 = s__7802;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__7802__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var j = cljs.core.first(xs__6292__auto__);
var iterys__4525__auto__ = ((function (s__7802__$1,j,xs__6292__auto__,temp__5735__auto__){
return (function cljs$core$match$macros$useful_matrix_$_iter__7801_$_iter__7803(s__7804){
return (new cljs.core.LazySeq(null,((function (s__7802__$1,j,xs__6292__auto__,temp__5735__auto__){
return (function (){
var s__7804__$1 = s__7804;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__7804__$1);
if(temp__5735__auto____$1){
var s__7804__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__7804__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__7804__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__7806 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__7805 = (0);
while(true){
if((i__7805 < size__4528__auto__)){
var i = cljs.core._nth(c__4527__auto__,i__7805);
cljs.core.chunk_append(b__7806,cljs.core.match$macros.pattern_score(pm,i,j));

var G__8250 = (i__7805 + (1));
i__7805 = G__8250;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7806),cljs$core$match$macros$useful_matrix_$_iter__7801_$_iter__7803(cljs.core.chunk_rest(s__7804__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7806),null);
}
} else {
var i = cljs.core.first(s__7804__$2);
return cljs.core.cons(cljs.core.match$macros.pattern_score(pm,i,j),cljs$core$match$macros$useful_matrix_$_iter__7801_$_iter__7803(cljs.core.rest(s__7804__$2)));
}
} else {
return null;
}
break;
}
});})(s__7802__$1,j,xs__6292__auto__,temp__5735__auto__))
,null,null));
});})(s__7802__$1,j,xs__6292__auto__,temp__5735__auto__))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.width(pm))));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,cljs$core$match$macros$useful_matrix_$_iter__7801(cljs.core.rest(s__7802__$1)));
} else {
var G__8251 = cljs.core.rest(s__7802__$1);
s__7802__$1 = G__8251;
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
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7807,p__7808){
var vec__7809 = p__7807;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7809,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7809,(1),null);
var curr = vec__7809;
var vec__7812 = p__7808;
var ocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7812,(0),null);
var oscore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7812,(1),null);
var cand = vec__7812;
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
var G__7816 = arguments.length;
switch (G__7816) {
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
var vec__7820 = cljs.core.split_with((function (p1__7819_SHARP_){
return cljs.core.match$macros.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(f,p1__7819_SHARP_);
}),cljs.core.rest(col));
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7820,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7820,(1),null);
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
var S = (function (){var G__7823 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__7824 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__7823,G__7824) : cljs.core.match$macros.pattern_matrix.call(null,G__7823,G__7824));
})();
var D = (function (){var G__7825 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__7826 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__7825,G__7826) : cljs.core.match$macros.pattern_matrix.call(null,G__7825,G__7826));
})();
return cljs.core.match$macros.return_split(S,D);
});
cljs.core.match$macros.group_rows = (function cljs$core$match$macros$group_rows(cs,rows){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,row){
var vec__7827 = cljs.core.peek(res);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7827,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7827,(1),null);
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
var vec__7833 = cljs.core.first(rows__$1);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7833,(0),null);
var row = vec__7833;
if(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.match$macros.non_local_literal_pattern_QMARK_(p);
if(cljs.core.truth_(and__4115__auto__)){
return (!(cljs.core.contains_QMARK_(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__4115__auto__;
}
})())){
var G__8253 = cljs.core.next(rows__$1);
var G__8254 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,row);
var G__8255 = (cljs.core.truth_(cljs.core.match$macros.non_local_literal_pattern_QMARK_(p))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p)):lits);
rows__$1 = G__8253;
res = G__8254;
lits = G__8255;
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
var S = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7836){
var vec__7837 = p__7836;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7837,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7837,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(rows__$1,ocrs) : cljs.core.match$macros.pattern_matrix.call(null,rows__$1,ocrs))], null);
}),cljs.core.match$macros.group_rows(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,lrows),lrows)));
var D = (function (){var G__7840 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lrows),rows);
var G__7841 = ocrs;
return (cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__7840,G__7841) : cljs.core.match$macros.pattern_matrix.call(null,G__7840,G__7841));
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7842){
var vec__7843 = p__7842;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7843,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7843,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__7846 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(m,c);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__7846) : cljs.core.match$macros.compile.call(null,G__7846));
})()], null);
}),matrix));
} else {
var rows = cljs.core.match$macros.rows(matrix);
var c = cljs.core.ffirst(rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__7847 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(matrix,c);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__7847) : cljs.core.match$macros.compile.call(null,G__7847));
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
var G__8256 = cljs.core.match$macros.specialize.cljs$core$IFn$_invoke$arity$2(matrix__$1,p);
matrix__$1 = G__8256;
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
var vec__7848 = cljs.core.match$macros.split_matrix(expanded);
var S = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7848,(0),null);
var D = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7848,(1),null);
var split = vec__7848;
if(cljs.core.not(cljs.core.match$macros._STAR_recur_present_STAR_)){
return cljs.core.match$macros.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null,col)),cljs.core.match$macros.cases(S),cljs.core.match$macros.default_case(D));
} else {
var new_stack = cljs.core.last(split);
return cljs.core.match$macros.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null,col)),(((!((cljs.core.match$macros._STAR_backtrack_stack_STAR_ === new_stack))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__7851 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__7852 = new_stack;
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__7852);

try{return cljs.core.match$macros.cases(S);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__7851);
}})():cljs.core.match$macros.cases(S)),((((cljs.core.seq(cljs.core.match$macros._STAR_backtrack_stack_STAR_)) && ((cljs.core.peek(cljs.core.match$macros._STAR_backtrack_stack_STAR_) === D))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__7853 = cljs.core.match$macros._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__7854 = cljs.core.pop(cljs.core.match$macros._STAR_backtrack_stack_STAR_);
(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__7854);

try{return cljs.core.match$macros.default_case(D);
}finally {(cljs.core.match$macros._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__7853);
}})():cljs.core.match$macros.default_case(D)));
}
});
/**
 * Case 3b: A column other than the first is chosen. Swap column 
 * col with the first column and compile the result
 */
cljs.core.match$macros.other_column_chosen_case = (function cljs$core$match$macros$other_column_chosen_case(matrix,col){
var G__7855 = cljs.core.match.protocols.swap(matrix,col);
return (cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.compile.cljs$core$IFn$_invoke$arity$1(G__7855) : cljs.core.match$macros.compile.call(null,G__7855));
});
cljs.core.match$macros.choose_column = (function cljs$core$match$macros$choose_column(matrix){
return cljs.core.match$macros.necessary_column(matrix);
});
cljs.core.match$macros.compile = (function cljs$core$match$macros$compile(p__7856){
var map__7857 = p__7856;
var map__7857__$1 = (((((!((map__7857 == null))))?(((((map__7857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7857.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7857):map__7857);
var pm = map__7857__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7857__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ocrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7857__$1,new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413));
if(cljs.core.truth_(cljs.core.match$macros._STAR_root_STAR_)){
var _STAR_root_STAR__orig_val__7859 = cljs.core.match$macros._STAR_root_STAR_;
var _STAR_root_STAR__temp_val__7860 = false;
(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__temp_val__7860);

try{return cljs.core.match$macros.root_bind_node(pm);
}finally {(cljs.core.match$macros._STAR_root_STAR_ = _STAR_root_STAR__orig_val__7859);
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7864,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7868 = k7864;
var G__7868__$1 = (((G__7868 instanceof cljs.core.Keyword))?G__7868.fqn:null);
switch (G__7868__$1) {
case "rows":
return self__.rows;

break;
case "ocrs":
return self__.ocrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7864,else__4383__auto__);

}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7869){
var vec__7870 = p__7869;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7870,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7870,(1),null);
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7863){
var self__ = this;
var G__7863__$1 = this;
return (new cljs.core.RecordIter((0),G__7863__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7865,other7866){
var self__ = this;
var this7865__$1 = this;
return (((!((other7866 == null)))) && ((this7865__$1.constructor === other7866.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7865__$1.rows,other7866.rows)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7865__$1.ocrs,other7866.ocrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7865__$1.__extmap,other7866.__extmap)));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7861_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__7861_SHARP_,i);
}),self__.rows));
return (new cljs.core.match$macros.PatternMatrix(nrows,self__.ocrs,null,null,null));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7862_SHARP_){
return cljs.core.match.protocols.swap(p1__7862_SHARP_,idx);
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

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7863){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7873 = cljs.core.keyword_identical_QMARK_;
var expr__7874 = k__4388__auto__;
if(cljs.core.truth_((pred__7873.cljs$core$IFn$_invoke$arity$2 ? pred__7873.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),expr__7874) : pred__7873.call(null,new cljs.core.Keyword(null,"rows","rows",850049680),expr__7874)))){
return (new cljs.core.match$macros.PatternMatrix(G__7863,self__.ocrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__7873.cljs$core$IFn$_invoke$arity$2 ? pred__7873.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__7874) : pred__7873.call(null,new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__7874)))){
return (new cljs.core.match$macros.PatternMatrix(self__.rows,G__7863,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7863),null));
}
}
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),self__.ocrs,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.PatternMatrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7863){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.PatternMatrix(self__.rows,self__.ocrs,G__7863,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_PatternMatrix = (function cljs$core$match$macros$map__GT_PatternMatrix(G__7867){
var extmap__4419__auto__ = (function (){var G__7876 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__7867,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], 0));
if(cljs.core.record_QMARK_(G__7867)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7876);
} else {
return G__7876;
}
})();
return (new cljs.core.match$macros.PatternMatrix(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(G__7867),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(G__7867),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7877_SHARP_){
return cljs.core.match$macros.drop_nth_bind(p1__7877_SHARP_,(0),focr);
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
var G__7878 = k;
var G__7878__$1 = (((G__7878 instanceof cljs.core.Keyword))?G__7878.fqn:null);
switch (G__7878__$1) {
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
var G__7880 = arguments.length;
switch (G__7880) {
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
var G__7881 = k;
var G__7881__$1 = (((G__7881 instanceof cljs.core.Keyword))?G__7881.fqn:null);
switch (G__7881__$1) {
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
var vec__7882 = (cljs.core.truth_((cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.seq_pattern_QMARK_.call(null,p)))?(function (){var vec__7885 = new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p);
var seq__7886 = cljs.core.seq(vec__7885);
var first__7887 = cljs.core.first(seq__7886);
var seq__7886__$1 = cljs.core.next(seq__7886);
var h = first__7887;
var t = seq__7886__$1;
var t__$1 = ((cljs.core.empty_QMARK_(t))?cljs.core.match$macros.literal_pattern(cljs.core.List.EMPTY):(cljs.core.truth_((function (){var G__7888 = cljs.core.first(t);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7888) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__7888));
})())?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(t)):(cljs.core.match$macros.seq_pattern.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.seq_pattern.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.match$macros.seq_pattern.call(null,t))
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,t__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7882,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7882,(1),null);
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
var G__7889 = k;
var G__7889__$1 = (((G__7889 instanceof cljs.core.Keyword))?G__7889.fqn:null);
switch (G__7889__$1) {
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
if((((cljs.core.count(self__.s) >= (1))) && (cljs.core.not((function (){var G__7891 = cljs.core.first(self__.s);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7891) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__7891));
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
if(cljs.core.not((function (){var G__7892 = cljs.core.first(self__.s);
return (cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__7892) : cljs.core.match$macros.rest_pattern_QMARK_.call(null,G__7892));
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7894,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7898 = k7894;
var G__7898__$1 = (((G__7898 instanceof cljs.core.Keyword))?G__7898.fqn:null);
switch (G__7898__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7894,else__4383__auto__);

}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7899){
var vec__7900 = p__7899;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7900,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7900,(1),null);
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7893){
var self__ = this;
var G__7893__$1 = this;
return (new cljs.core.RecordIter((0),G__7893__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7895,other7896){
var self__ = this;
var this7895__$1 = this;
return (((!((other7896 == null)))) && ((this7895__$1.constructor === other7896.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7895__$1.p,other7896.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7895__$1.__extmap,other7896.__extmap)));
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

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7893){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7903 = cljs.core.keyword_identical_QMARK_;
var expr__7904 = k__4388__auto__;
if(cljs.core.truth_((pred__7903.cljs$core$IFn$_invoke$arity$2 ? pred__7903.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__7904) : pred__7903.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__7904)))){
return (new cljs.core.match$macros.RestPattern(G__7893,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.RestPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7893),null));
}
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.RestPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7893){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.RestPattern(self__.p,G__7893,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_RestPattern = (function cljs$core$match$macros$map__GT_RestPattern(G__7897){
var extmap__4419__auto__ = (function (){var G__7906 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__7897,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__7897)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7906);
} else {
return G__7906;
}
})();
return (new cljs.core.match$macros.RestPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__7897),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

cljs.core.match$macros.rest_pattern = (function cljs$core$match$macros$rest_pattern(p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cljs.core.match$macros.RestPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477),new cljs.core.Keyword("cljs.core.match","rest","cljs.core.match/rest",-410436433));
});
cljs.core.match$macros.rest_pattern_QMARK_ = (function cljs$core$match$macros$rest_pattern_QMARK_(x){
return (x instanceof cljs.core.match$macros.RestPattern);
});
cljs.core.match$macros.specialize_map_key_pattern_matrix = (function cljs$core$match$macros$specialize_map_key_pattern_matrix(rows){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(rows));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7908_SHARP_){
return cljs.core.match.protocols.prepend(p1__7908_SHARP_,p);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7907_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__7907_SHARP_,(0));
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k7910,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__7914 = k7910;
var G__7914__$1 = (((G__7914 instanceof cljs.core.Keyword))?G__7914.fqn:null);
switch (G__7914__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k7910,else__4383__auto__);

}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__7915){
var vec__7916 = p__7915;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7916,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7916,(1),null);
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__7909){
var self__ = this;
var G__7909__$1 = this;
return (new cljs.core.RecordIter((0),G__7909__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this7911,other7912){
var self__ = this;
var this7911__$1 = this;
return (((!((other7912 == null)))) && ((this7911__$1.constructor === other7912.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7911__$1.p,other7912.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this7911__$1.__extmap,other7912.__extmap)));
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

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__7909){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__7919 = cljs.core.keyword_identical_QMARK_;
var expr__7920 = k__4388__auto__;
if(cljs.core.truth_((pred__7919.cljs$core$IFn$_invoke$arity$2 ? pred__7919.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__7920) : pred__7919.call(null,new cljs.core.Keyword(null,"p","p",151049309),expr__7920)))){
return (new cljs.core.match$macros.MapKeyPattern(G__7909,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match$macros.MapKeyPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__7909),null));
}
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match$macros.MapKeyPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__7909){
var self__ = this;
var this__4379__auto____$1 = this;
return (new cljs.core.match$macros.MapKeyPattern(self__.p,G__7909,self__.__extmap,self__.__hash));
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
cljs.core.match$macros.map__GT_MapKeyPattern = (function cljs$core$match$macros$map__GT_MapKeyPattern(G__7913){
var extmap__4419__auto__ = (function (){var G__7922 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__7913,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__7913)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__7922);
} else {
return G__7922;
}
})();
return (new cljs.core.match$macros.MapKeyPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__7913),null,cljs.core.not_empty(extmap__4419__auto__),null));
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7923_SHARP_){
return cljs.core.match$macros.row_keys(p1__7923_SHARP_,env);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.wildcard_pattern_QMARK_,cljs.core.first),rows))));
});
cljs.core.match$macros.wrap_values = (function cljs$core$match$macros$wrap_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7924){
var vec__7925 = p__7924;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7925,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.match$macros.wildcard_pattern_QMARK_(v))?cljs.core.match$macros.map_key_pattern(v):v)], null);
}),m));
});
cljs.core.match$macros.get_ocr_map = (function cljs$core$match$macros$get_ocr_map(p,p__7928){
var map__7929 = p__7928;
var map__7929__$1 = (((((!((map__7929 == null))))?(((((map__7929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7929):map__7929);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7929__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7929__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var wc_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7929__$1,new cljs.core.Keyword(null,"wc-map","wc-map",-57721646));
if(cljs.core.truth_((cljs.core.match$macros.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.map_pattern_QMARK_.call(null,p)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(only)?cljs.core.zipmap(all_keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.literal_pattern(new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)))):null),wc_map,cljs.core.match$macros.wrap_values(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(p))], 0));
} else {
return wc_map;
}
});
cljs.core.match$macros.specialize_map_pattern_row = (function cljs$core$match$macros$specialize_map_pattern_row(row,p__7931){
var map__7932 = p__7931;
var map__7932__$1 = (((((!((map__7932 == null))))?(((((map__7932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7932):map__7932);
var env = map__7932__$1;
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7932__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7932__$1,new cljs.core.Keyword(null,"only?","only?",504823581));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7932__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var p = cljs.core.first(row);
var only = cljs.core.seq(new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
var ocr_map = cljs.core.match$macros.get_ocr_map(p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"only","only",1907811652),only));
var ps = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ocr_map,all_keys));
var ps__$1 = (cljs.core.truth_(cljs.core.deref(only_QMARK_))?((only)?(function (){var a = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",981564201,null)], null));
return cljs.core.cons((function (){var G__7934 = cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();
var G__7935 = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,a,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(only)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null));
return (cljs.core.match$macros.guard_pattern.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match$macros.guard_pattern.cljs$core$IFn$_invoke$arity$2(G__7934,G__7935) : cljs.core.match$macros.guard_pattern.call(null,G__7934,G__7935));
})(),ps);
})():cljs.core.cons(cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),ps)):ps);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps__$1));
});
cljs.core.match$macros.specialize_map_pattern_matrix = (function cljs$core$match$macros$specialize_map_pattern_matrix(rows,env){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7936_SHARP_){
return cljs.core.match$macros.specialize_map_pattern_row(p1__7936_SHARP_,env);
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
var mocrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7937_SHARP_){
return cljs.core.match$macros.map_pattern_matrix_ocr_sym(p1__7937_SHARP_,env);
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
var G__7939 = k;
var G__7939__$1 = (((G__7939 instanceof cljs.core.Keyword))?G__7939.fqn:null);
switch (G__7939__$1) {
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
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070),all_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wc-map","wc-map",-57721646),cljs.core.zipmap(all_keys,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.match$macros.wildcard_pattern)),new cljs.core.Keyword(null,"ocrs-map","ocrs-map",76084823),cljs.core.zipmap(all_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7938_SHARP_){
return cljs.core.match$macros.gen_map_pattern_ocr(focr,p1__7938_SHARP_);
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
var G__7941 = arguments.length;
switch (G__7941) {
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__7942,p__7943){
var vec__7944 = p__7942;
var rest_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7944,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7944,(1),null);
var vec__7947 = p__7943;
var seq__7948 = cljs.core.seq(vec__7947);
var first__7949 = cljs.core.first(seq__7948);
var seq__7948__$1 = cljs.core.next(seq__7948);
var p = first__7949;
var ps = seq__7948__$1;
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
cljs.core.match$macros.specialize_vector_pattern_row = (function cljs$core$match$macros$specialize_vector_pattern_row(row,p__7950){
var map__7951 = p__7950;
var map__7951__$1 = (((((!((map__7951 == null))))?(((((map__7951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7951.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7951):map__7951);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7951__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7951__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.vector_pattern_QMARK_.call(null,p)))?cljs.core.match.protocols.split(p,min_size):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match$macros.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null)
);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps));
});
cljs.core.match$macros.specialize_vector_pattern_row_non_rest = (function cljs$core$match$macros$specialize_vector_pattern_row_non_rest(row,p__7953){
var map__7954 = p__7953;
var map__7954__$1 = (((((!((map__7954 == null))))?(((((map__7954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7954):map__7954);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7954__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7954__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.vector_pattern_QMARK_.call(null,p)))?cljs.core.reverse(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(min_size,cljs.core.match$macros.wildcard_pattern));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match$macros.drop_nth_bind(row,(0),focr),ps);
});
cljs.core.match$macros.specialize_vector_pattern_matrix = (function cljs$core$match$macros$specialize_vector_pattern_matrix(rows,env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7956_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row(p1__7956_SHARP_,env);
}),rows));
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7957_SHARP_){
return cljs.core.match$macros.specialize_vector_pattern_row_non_rest(p1__7957_SHARP_,env);
}),rows));
}
});
cljs.core.match$macros.vector_pattern_ocr_sym = (function cljs$core$match$macros$vector_pattern_ocr_sym(p__7958,i){
var map__7959 = p__7958;
var map__7959__$1 = (((((!((map__7959 == null))))?(((((map__7959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7959):map__7959);
var pat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7959__$1,new cljs.core.Keyword(null,"pat","pat",-1417570164));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7959__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7959__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
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
cljs.core.match$macros.vector_pattern_matrix_ocrs = (function cljs$core$match$macros$vector_pattern_matrix_ocrs(ocrs,p__7961){
var map__7962 = p__7961;
var map__7962__$1 = (((((!((map__7962 == null))))?(((((map__7962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7962):map__7962);
var env = map__7962__$1;
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7962__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7962__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7962__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var rest_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7962__$1,new cljs.core.Keyword(null,"rest?","rest?",345335951));
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
return (((other instanceof cljs.core.match$macros.VectorPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7964_SHARP_){
return (p1__7964_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__7964_SHARP_.cljs$core$IFn$_invoke$arity$1(other) : p1__7964_SHARP_.call(null,other));
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
var G__7965 = k;
var G__7965__$1 = (((G__7965 instanceof cljs.core.Keyword))?G__7965.fqn:null);
switch (G__7965__$1) {
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
var vec__7966 = cljs.core.match$macros.calc_rest_QMARK__and_min_size(rows,env);
var rest_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7966,(1),null);
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
var G__7970 = arguments.length;
switch (G__7970) {
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
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__7971_SHARP_){
return cljs.core.match$macros.specialize_or_pattern_row(p1__7971_SHARP_,pat,ps);
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
var G__7972 = k;
var G__7972__$1 = (((G__7972 instanceof cljs.core.Keyword))?G__7972.fqn:null);
switch (G__7972__$1) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7973){
var vec__7974 = p__7973;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7974,(0),null);
var row = vec__7974;
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
var G__7977 = k;
var G__7977__$1 = (((G__7977 instanceof cljs.core.Keyword))?G__7977.fqn:null);
switch (G__7977__$1) {
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
cljs.core.match$macros.app_pattern_matrix_ocrs = (function cljs$core$match$macros$app_pattern_matrix_ocrs(p__7978,form){
var vec__7979 = p__7978;
var focr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7979,(0),null);
var ocrs = vec__7979;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["app_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(focr)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(focr));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return focr;
}
})(),null,(1),null)))))], null))], null),ocrs);
});
cljs.core.match$macros.specialize_app_pattern_matrix = (function cljs$core$match$macros$specialize_app_pattern_matrix(rows,form){
var vec__7982 = cljs.core.split_with((function (p__7985){
var vec__7986 = p__7985;
var pat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7986,(0),null);
var row = vec__7986;
var and__4115__auto__ = (cljs.core.match$macros.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(pat) : cljs.core.match$macros.app_pattern_QMARK_.call(null,pat));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(pat),form);
} else {
return and__4115__auto__;
}
}),rows);
var matched_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7982,(0),null);
var rest_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7982,(1),null);
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
var G__7989 = k;
var G__7989__$1 = (((G__7989 instanceof cljs.core.Keyword))?G__7989.fqn:null);
switch (G__7989__$1) {
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
var ret__4785__auto___8271 = (function (){
cljs.core.match$macros.defpred = (function cljs$core$match$macros$defpred(var_args){
var G__7991 = arguments.length;
switch (G__7991) {
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
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__7992){
var vec__7993 = p__7992;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7993,(0),null);
var row = vec__7993;
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
var G__7996 = k;
var G__7996__$1 = (((G__7996 instanceof cljs.core.Keyword))?G__7996.fqn:null);
switch (G__7996__$1) {
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7997 = cljs.core.get_global_hierarchy;
return (fexpr__7997.cljs$core$IFn$_invoke$arity$0 ? fexpr__7997.cljs$core$IFn$_invoke$arity$0() : fexpr__7997.call(null));
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__7998 = cljs.core.get_global_hierarchy;
return (fexpr__7998.cljs$core$IFn$_invoke$arity$0 ? fexpr__7998.cljs$core$IFn$_invoke$arity$0() : fexpr__7998.call(null));
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
var G__8000 = arguments.length;
switch (G__8000) {
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
var G__8275 = cljs.core.nnext(ps);
var G__8276 = t;
var G__8277 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match$macros.rest_pattern(rp));
ps = G__8275;
t = G__8276;
v = G__8277;
continue;
} else {
var G__8278 = cljs.core.next(ps);
var G__8279 = t;
var G__8280 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ps)));
ps = G__8278;
t = G__8279;
v = G__8280;
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
return cljs.core.match$macros.map_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__8001){
var vec__8002 = p__8001;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8002,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8002,(1),null);
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
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__8005 = cljs.core.get_global_hierarchy;
return (fexpr__8005.cljs$core$IFn$_invoke$arity$0 ? fexpr__8005.cljs$core$IFn$_invoke$arity$0() : fexpr__8005.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match$macros","emit-pattern-for-syntax"),(function (p__8006){
var vec__8007 = p__8006;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8007,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8007,(1),null);
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
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"as","as",1148689641)], null),(function (p__8010){
var vec__8011 = p__8010;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8011,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8011,(1),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8011,(2),null);
return cljs.core.with_meta(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),sym], null));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"<<","<<",1655720184)], null),(function (p__8014){
var vec__8015 = p__8014;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8015,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8015,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8015,(2),null);
return cljs.core.match$macros.app_pattern(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),form);
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"when","when",-576417306)], null),(function (p__8019){
var vec__8020 = p__8019;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8020,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8020,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8020,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_(gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Invalid predicate expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? symbol? gs)"].join('')));
}

if(cljs.core.every_QMARK_((function (p1__8018_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(cljs.core.match$macros.preds),p1__8018_SHARP_);
}),gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Unknown predicate in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? (fn* [p1__8018#] (contains? (clojure.core/deref preds) p1__8018#)) gs)"].join('')));
}

return cljs.core.match$macros.predicate_pattern(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),cljs.core.set(gs__$1));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"guard","guard",-873147811)], null),(function (p__8023){
var vec__8024 = p__8023;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8024,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8024,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8024,(2),null);
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
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296)], null),(function (p__8027){
var vec__8028 = p__8027;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(1),null);
var offset_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(2),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8028,(3),null);
var ps = cljs.core.match$macros.emit_patterns.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"vector","vector",1902966158));
return cljs.core.match$macros.vector_pattern.cljs$core$IFn$_invoke$arity$4(ps,t,offset,cljs.core.some(cljs.core.match$macros.rest_pattern_QMARK_,ps));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"only","only",1907811652)], null),(function (p__8031){
var vec__8032 = p__8031;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8032,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8032,(1),null);
var only = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8032,(2),null);
return cljs.core.with_meta(cljs.core.match$macros.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",1907811652),only], null));
}));
cljs.core.match$macros.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__8036){
var vec__8037 = p__8036;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8037,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8037,(1),null);
var l = vec__8037;
throw (new Error(["Invalid list syntax ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),". ","Valid syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__8035_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__8035_SHARP_,new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.keys(cljs.core.match$macros.emit_pattern_for_syntax.getMethodTable()))))].join('')));
}));
var void_8281 = ({});
var void_QMARK__8282 = (function (p1__8040_SHARP_){
return (void_8281 === p1__8040_SHARP_);
});
var infix_keyword_QMARK__8283 = (function (p1__8041_SHARP_){
var fexpr__8044 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"guard","guard",-873147811),null], null), null);
return (fexpr__8044.cljs$core$IFn$_invoke$arity$1 ? fexpr__8044.cljs$core$IFn$_invoke$arity$1(p1__8041_SHARP_) : fexpr__8044.call(null,p1__8041_SHARP_));
});
cljs.core.match$macros.regroup_keywords = (function cljs$core$match$macros$regroup_keywords(pattern){
if(cljs.core.vector_QMARK_(pattern)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__8045,r){
var vec__8046 = p__8045;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8046,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8046,(1),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8046,(2),null);
if(void_QMARK__8282(p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,q,r], null);
} else {
if(cljs.core.truth_((((!(void_QMARK__8282(r))))?infix_keyword_QMARK__8283(q):false))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(new cljs.core.List(null,(cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.regroup_keywords.call(null,p)),(new cljs.core.List(null,q,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null))),void_8281,void_8281], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match$macros.regroup_keywords.call(null,p))),q,r], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,void_8281,void_8281], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(pattern,void_8281,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([void_8281], 0))));
} else {
if(cljs.core.seq_QMARK_(pattern)){
return cljs.core.cons((function (){var G__8049 = cljs.core.first(pattern);
return (cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match$macros.regroup_keywords.cljs$core$IFn$_invoke$arity$1(G__8049) : cljs.core.match$macros.regroup_keywords.call(null,G__8049));
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
var G__8284 = pats;
var G__8285 = seen;
var G__8286 = dups;
remaining = G__8284;
seen = G__8285;
dups = G__8286;
continue;
} else {
if((pat instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_(seen,pat)){
var G__8287 = pats;
var G__8288 = seen;
var G__8289 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dups,pat);
remaining = G__8287;
seen = G__8288;
dups = G__8289;
continue;
} else {
var G__8290 = pats;
var G__8291 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,pat);
var G__8292 = dups;
remaining = G__8290;
seen = G__8291;
dups = G__8292;
continue;
}
} else {
if(cljs.core.vector_QMARK_(pat)){
var G__8293 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,pat);
var G__8294 = seen;
var G__8295 = dups;
remaining = G__8293;
seen = G__8294;
dups = G__8295;
continue;
} else {
if(cljs.core.map_QMARK_(pat)){
var G__8296 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.vals(pat));
var G__8297 = seen;
var G__8298 = dups;
remaining = G__8296;
seen = G__8297;
dups = G__8298;
continue;
} else {
if(cljs.core.seq_QMARK_(pat)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
var G__8299 = pats;
var G__8300 = seen;
var G__8301 = dups;
remaining = G__8299;
seen = G__8300;
dups = G__8301;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Keyword(null,"or","or",235744169))){
var wds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.wildcards_and_duplicates,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat)));
var mseen = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,wds));
var G__8302 = pats;
var G__8303 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(seen,mseen);
var G__8304 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.set.union,dups,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(seen,mseen),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,wds));
remaining = G__8302;
seen = G__8303;
dups = G__8304;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(pat),new cljs.core.Keyword(null,"as","as",1148689641))){
var G__8305 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat));
var G__8306 = seen;
var G__8307 = dups;
remaining = G__8305;
seen = G__8306;
dups = G__8307;
continue;
} else {
var G__8308 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.first(pat));
var G__8309 = seen;
var G__8310 = dups;
remaining = G__8308;
seen = G__8309;
dups = G__8310;
continue;

}
}
}
} else {
var G__8311 = pats;
var G__8312 = seen;
var G__8313 = dups;
remaining = G__8311;
seen = G__8312;
dups = G__8313;
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

var nvars_8314 = cljs.core.count(vars);
var cls_8315 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var seq__8050_8316 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(cls_8315),cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var chunk__8051_8317 = null;
var count__8052_8318 = (0);
var i__8053_8319 = (0);
while(true){
if((i__8053_8319 < count__8052_8318)){
var vec__8066_8320 = chunk__8051_8317.cljs$core$IIndexed$_nth$arity$2(null,i__8053_8319);
var vec__8069_8321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8066_8320,(0),null);
var pat_8322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8069_8321,(0),null);
var __8323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8069_8321,(1),null);
var rownum_8324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8066_8320,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8322)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_8324),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern(pat_8322,vars,nvars_8314,rownum_8324);


var G__8325 = seq__8050_8316;
var G__8326 = chunk__8051_8317;
var G__8327 = count__8052_8318;
var G__8328 = (i__8053_8319 + (1));
seq__8050_8316 = G__8325;
chunk__8051_8317 = G__8326;
count__8052_8318 = G__8327;
i__8053_8319 = G__8328;
continue;
} else {
var temp__5735__auto___8329 = cljs.core.seq(seq__8050_8316);
if(temp__5735__auto___8329){
var seq__8050_8330__$1 = temp__5735__auto___8329;
if(cljs.core.chunked_seq_QMARK_(seq__8050_8330__$1)){
var c__4556__auto___8331 = cljs.core.chunk_first(seq__8050_8330__$1);
var G__8332 = cljs.core.chunk_rest(seq__8050_8330__$1);
var G__8333 = c__4556__auto___8331;
var G__8334 = cljs.core.count(c__4556__auto___8331);
var G__8335 = (0);
seq__8050_8316 = G__8332;
chunk__8051_8317 = G__8333;
count__8052_8318 = G__8334;
i__8053_8319 = G__8335;
continue;
} else {
var vec__8072_8336 = cljs.core.first(seq__8050_8330__$1);
var vec__8075_8337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8072_8336,(0),null);
var pat_8338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8075_8337,(0),null);
var __8339 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8075_8337,(1),null);
var rownum_8340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8072_8336,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8338)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_8340),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match$macros.check_pattern(pat_8338,vars,nvars_8314,rownum_8340);


var G__8341 = cljs.core.next(seq__8050_8330__$1);
var G__8342 = null;
var G__8343 = (0);
var G__8344 = (0);
seq__8050_8316 = G__8341;
chunk__8051_8317 = G__8342;
count__8052_8318 = G__8343;
i__8053_8319 = G__8344;
continue;
}
} else {
}
}
break;
}

var temp__5735__auto___8345 = cljs.core.last(cls_8315);
if(cljs.core.truth_(temp__5735__auto___8345)){
var vec__8078_8346 = temp__5735__auto___8345;
var pat_8347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8078_8346,(0),null);
var __8348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8078_8346,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_8347)){
} else {
cljs.core.match$macros.check_pattern(pat_8347,vars,nvars_8314,cljs.core.count(cls_8315));
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
var G__8083 = arguments.length;
switch (G__8083) {
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
var cs__$1 = (function (){var vec__8084 = cljs.core.last(cs);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8084,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8084,(1),null);
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
return cljs.core.match$macros.pattern_matrix(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__8081_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.match$macros.to_pattern_row,p1__8081_SHARP_);
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

var _STAR_recur_present_STAR__orig_val__8087 = cljs.core.match$macros._STAR_recur_present_STAR_;
var _STAR_recur_present_STAR__temp_val__8088 = (function (){var or__4126__auto__ = cljs.core.match$macros._STAR_recur_present_STAR_;
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
(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__temp_val__8088);

try{return cljs.core.match$macros.executable_form(cljs.core.match$macros.compile(cljs.core.match$macros.emit_matrix.cljs$core$IFn$_invoke$arity$2(vars,clauses)));
}finally {(cljs.core.match$macros._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__orig_val__8087);
}});
var ret__4785__auto___8350 = (function (){
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
var len__4736__auto___8351 = arguments.length;
var i__4737__auto___8352 = (0);
while(true){
if((i__4737__auto___8352 < len__4736__auto___8351)){
args__4742__auto__.push((arguments[i__4737__auto___8352]));

var G__8353 = (i__4737__auto___8352 + (1));
i__4737__auto___8352 = G__8353;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8093 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8096){
var vec__8097 = p__8096;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8097,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8097,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8093,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8093,(1),null);
var _STAR_line_STAR__orig_val__8100 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8101 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8102 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8103 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8104 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8105 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8103);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8104);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8105);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8102);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8101);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8100);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq8089){
var G__8090 = cljs.core.first(seq8089);
var seq8089__$1 = cljs.core.next(seq8089);
var G__8091 = cljs.core.first(seq8089__$1);
var seq8089__$2 = cljs.core.next(seq8089__$1);
var G__8092 = cljs.core.first(seq8089__$2);
var seq8089__$3 = cljs.core.next(seq8089__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8090,G__8091,G__8092,seq8089__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__4785__auto___8354 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8355 = arguments.length;
var i__4737__auto___8356 = (0);
while(true){
if((i__4737__auto___8356 < len__4736__auto___8355)){
args__4742__auto__.push((arguments[i__4737__auto___8356]));

var G__8357 = (i__4737__auto___8356 + (1));
i__4737__auto___8356 = G__8357;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8111 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8112 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8113 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8114 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__8115 = type;
var _STAR_line_STAR__temp_val__8116 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8117 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8118 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8115);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8116);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8117);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8118);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8114);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8113);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8112);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8111);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq8106){
var G__8107 = cljs.core.first(seq8106);
var seq8106__$1 = cljs.core.next(seq8106);
var G__8108 = cljs.core.first(seq8106__$1);
var seq8106__$2 = cljs.core.next(seq8106__$1);
var G__8109 = cljs.core.first(seq8106__$2);
var seq8106__$3 = cljs.core.next(seq8106__$2);
var G__8110 = cljs.core.first(seq8106__$3);
var seq8106__$4 = cljs.core.next(seq8106__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8107,G__8108,G__8109,G__8110,seq8106__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__4785__auto___8358 = (function (){
/**
 * Same as match but supports IMatchLookup when
 *   matching maps.
 */
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8359 = arguments.length;
var i__4737__auto___8360 = (0);
while(true){
if((i__4737__auto___8360 < len__4736__auto___8359)){
args__4742__auto__.push((arguments[i__4737__auto___8360]));

var G__8361 = (i__4737__auto___8360 + (1));
i__4737__auto___8360 = G__8361;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8123 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8126){
var vec__8127 = p__8126;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8127,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8127,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8123,(1),null);
var _STAR_match_lookup_STAR__orig_val__8130 = cljs.core.match$macros._STAR_match_lookup_STAR_;
var _STAR_line_STAR__orig_val__8131 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8132 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8133 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_match_lookup_STAR__temp_val__8134 = true;
var _STAR_line_STAR__temp_val__8135 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8136 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8137 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__temp_val__8134);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8135);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8136);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8137);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8133);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8132);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8131);

(cljs.core.match$macros._STAR_match_lookup_STAR_ = _STAR_match_lookup_STAR__orig_val__8130);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq8119){
var G__8120 = cljs.core.first(seq8119);
var seq8119__$1 = cljs.core.next(seq8119);
var G__8121 = cljs.core.first(seq8119__$1);
var seq8119__$2 = cljs.core.next(seq8119__$1);
var G__8122 = cljs.core.first(seq8119__$2);
var seq8119__$3 = cljs.core.next(seq8119__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8120,G__8121,G__8122,seq8119__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__4785__auto___8362 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8363 = arguments.length;
var i__4737__auto___8364 = (0);
while(true){
if((i__4737__auto___8364 < len__4736__auto___8363)){
args__4742__auto__.push((arguments[i__4737__auto___8364]));

var G__8365 = (i__4737__auto___8364 + (1));
i__4737__auto___8364 = G__8365;
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
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq8138){
var G__8139 = cljs.core.first(seq8138);
var seq8138__$1 = cljs.core.next(seq8138);
var G__8140 = cljs.core.first(seq8138__$1);
var seq8138__$2 = cljs.core.next(seq8138__$1);
var G__8141 = cljs.core.first(seq8138__$2);
var seq8138__$3 = cljs.core.next(seq8138__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8139,G__8140,G__8141,seq8138__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__4785__auto___8366 = cljs.core.match$macros.asets = (function cljs$core$match$macros$asets(_AMPERSAND_form,_AMPERSAND_env,a,vs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$4((function (a__$1,b,c){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a__$1,(new cljs.core.List(null,b,(new cljs.core.List(null,c,null,(1),null)),(2),null)));
}),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)))))),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(vs)),vs),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,a,null,(1),null))], 0))));
});
(cljs.core.match$macros.asets.cljs$lang$macro = true);

var ret__4785__auto___8367 = (function (){
cljs.core.match$macros.match = (function cljs$core$match$macros$match(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8368 = arguments.length;
var i__4737__auto___8369 = (0);
while(true){
if((i__4737__auto___8369 < len__4736__auto___8368)){
args__4742__auto__.push((arguments[i__4737__auto___8369]));

var G__8370 = (i__4737__auto___8369 + (1));
i__4737__auto___8369 = G__8370;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8146 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8149){
var vec__8150 = p__8149;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8150,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8150,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8146,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8146,(1),null);
var _STAR_line_STAR__orig_val__8153 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8154 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8155 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8156 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8157 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8158 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8156);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8157);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8158);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8155);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8154);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8153);
}}));

(cljs.core.match$macros.match.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match.cljs$lang$applyTo = (function (seq8142){
var G__8143 = cljs.core.first(seq8142);
var seq8142__$1 = cljs.core.next(seq8142);
var G__8144 = cljs.core.first(seq8142__$1);
var seq8142__$2 = cljs.core.next(seq8142__$1);
var G__8145 = cljs.core.first(seq8142__$2);
var seq8142__$3 = cljs.core.next(seq8142__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8143,G__8144,G__8145,seq8142__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match.cljs$lang$macro = true);

var ret__4785__auto___8371 = (function (){
cljs.core.match$macros.match_STAR_ = (function cljs$core$match$macros$match_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8372 = arguments.length;
var i__4737__auto___8373 = (0);
while(true){
if((i__4737__auto___8373 < len__4736__auto___8372)){
args__4742__auto__.push((arguments[i__4737__auto___8373]));

var G__8374 = (i__4737__auto___8373 + (1));
i__4737__auto___8373 = G__8374;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.match_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8163 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8166){
var vec__8167 = p__8166;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8167,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8167,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8163,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8163,(1),null);
var _STAR_line_STAR__orig_val__8170 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8171 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8172 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__8173 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_line_STAR__temp_val__8174 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8175 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8176 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_no_backtrack_STAR__temp_val__8177 = true;
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8174);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8175);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8176);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__8177);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__8173);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8172);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8171);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8170);
}}));

(cljs.core.match$macros.match_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.match_STAR_.cljs$lang$applyTo = (function (seq8159){
var G__8160 = cljs.core.first(seq8159);
var seq8159__$1 = cljs.core.next(seq8159);
var G__8161 = cljs.core.first(seq8159__$1);
var seq8159__$2 = cljs.core.next(seq8159__$1);
var G__8162 = cljs.core.first(seq8159__$2);
var seq8159__$3 = cljs.core.next(seq8159__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8160,G__8161,G__8162,seq8159__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_STAR_.cljs$lang$macro = true);

var ret__4785__auto___8375 = (function (){
cljs.core.match$macros.matchv = (function cljs$core$match$macros$matchv(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8376 = arguments.length;
var i__4737__auto___8377 = (0);
while(true){
if((i__4737__auto___8377 < len__4736__auto___8376)){
args__4742__auto__.push((arguments[i__4737__auto___8377]));

var G__8378 = (i__4737__auto___8377 + (1));
i__4737__auto___8377 = G__8378;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8183 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8184 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8185 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8186 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_vector_type_STAR__temp_val__8187 = type;
var _STAR_line_STAR__temp_val__8188 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8189 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8190 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8187);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8188);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8189);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8190);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8186);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8185);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8184);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8183);
}}));

(cljs.core.match$macros.matchv.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv.cljs$lang$applyTo = (function (seq8178){
var G__8179 = cljs.core.first(seq8178);
var seq8178__$1 = cljs.core.next(seq8178);
var G__8180 = cljs.core.first(seq8178__$1);
var seq8178__$2 = cljs.core.next(seq8178__$1);
var G__8181 = cljs.core.first(seq8178__$2);
var seq8178__$3 = cljs.core.next(seq8178__$2);
var G__8182 = cljs.core.first(seq8178__$3);
var seq8178__$4 = cljs.core.next(seq8178__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8179,G__8180,G__8181,G__8182,seq8178__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv.cljs$lang$macro = true);

var ret__4785__auto___8379 = (function (){
cljs.core.match$macros.matchv_STAR_ = (function cljs$core$match$macros$matchv_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8380 = arguments.length;
var i__4737__auto___8381 = (0);
while(true){
if((i__4737__auto___8381 < len__4736__auto___8380)){
args__4742__auto__.push((arguments[i__4737__auto___8381]));

var G__8382 = (i__4737__auto___8381 + (1));
i__4737__auto___8381 = G__8382;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchv_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,vars,clauses){
var _STAR_vector_type_STAR__orig_val__8196 = cljs.core.match$macros._STAR_vector_type_STAR_;
var _STAR_line_STAR__orig_val__8197 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8198 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8199 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_no_backtrack_STAR__orig_val__8200 = cljs.core.match$macros._STAR_no_backtrack_STAR_;
var _STAR_vector_type_STAR__temp_val__8201 = type;
var _STAR_line_STAR__temp_val__8202 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8203 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8204 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var _STAR_no_backtrack_STAR__temp_val__8205 = true;
(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__temp_val__8201);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8202);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8203);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8204);

(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__temp_val__8205);

try{return cljs.core.match$macros.clj_form(vars,clauses);
}finally {(cljs.core.match$macros._STAR_no_backtrack_STAR_ = _STAR_no_backtrack_STAR__orig_val__8200);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8199);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8198);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8197);

(cljs.core.match$macros._STAR_vector_type_STAR_ = _STAR_vector_type_STAR__orig_val__8196);
}}));

(cljs.core.match$macros.matchv_STAR_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core.match$macros.matchv_STAR_.cljs$lang$applyTo = (function (seq8191){
var G__8192 = cljs.core.first(seq8191);
var seq8191__$1 = cljs.core.next(seq8191);
var G__8193 = cljs.core.first(seq8191__$1);
var seq8191__$2 = cljs.core.next(seq8191__$1);
var G__8194 = cljs.core.first(seq8191__$2);
var seq8191__$3 = cljs.core.next(seq8191__$2);
var G__8195 = cljs.core.first(seq8191__$3);
var seq8191__$4 = cljs.core.next(seq8191__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8192,G__8193,G__8194,G__8195,seq8191__$4);
}));

return null;
})()
;
(cljs.core.match$macros.matchv_STAR_.cljs$lang$macro = true);

var ret__4785__auto___8383 = (function (){
cljs.core.match$macros.matchm = (function cljs$core$match$macros$matchm(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8384 = arguments.length;
var i__4737__auto___8385 = (0);
while(true){
if((i__4737__auto___8385 < len__4736__auto___8384)){
args__4742__auto__.push((arguments[i__4737__auto___8385]));

var G__8386 = (i__4737__auto___8385 + (1));
i__4737__auto___8385 = G__8386;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.match$macros.matchm.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vars,clauses){
var vec__8210 = ((cljs.core.vector_QMARK_(vars))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vars,clauses], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[vars],null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__8213){
var vec__8214 = p__8213;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8214,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8214,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,new cljs.core.Keyword(null,"else","else",-1508377146)))?(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[c],null)):c),a], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)], 0))], null));
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8210,(0),null);
var clauses__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8210,(1),null);
var _STAR_line_STAR__orig_val__8217 = cljs.core.match$macros._STAR_line_STAR_;
var _STAR_locals_STAR__orig_val__8218 = cljs.core.match$macros._STAR_locals_STAR_;
var _STAR_warned_STAR__orig_val__8219 = cljs.core.match$macros._STAR_warned_STAR_;
var _STAR_line_STAR__temp_val__8220 = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(_AMPERSAND_form));
var _STAR_locals_STAR__temp_val__8221 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env),new cljs.core.Symbol(null,"_","_",-1201019570,null));
var _STAR_warned_STAR__temp_val__8222 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__temp_val__8220);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__temp_val__8221);

(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__temp_val__8222);

try{return cljs.core.match$macros.clj_form(vars__$1,clauses__$1);
}finally {(cljs.core.match$macros._STAR_warned_STAR_ = _STAR_warned_STAR__orig_val__8219);

(cljs.core.match$macros._STAR_locals_STAR_ = _STAR_locals_STAR__orig_val__8218);

(cljs.core.match$macros._STAR_line_STAR_ = _STAR_line_STAR__orig_val__8217);
}}));

(cljs.core.match$macros.matchm.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.match$macros.matchm.cljs$lang$applyTo = (function (seq8206){
var G__8207 = cljs.core.first(seq8206);
var seq8206__$1 = cljs.core.next(seq8206);
var G__8208 = cljs.core.first(seq8206__$1);
var seq8206__$2 = cljs.core.next(seq8206__$1);
var G__8209 = cljs.core.first(seq8206__$2);
var seq8206__$3 = cljs.core.next(seq8206__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8207,G__8208,G__8209,seq8206__$3);
}));

return null;
})()
;
(cljs.core.match$macros.matchm.cljs$lang$macro = true);

var ret__4785__auto___8387 = (function (){
cljs.core.match$macros.match_let = (function cljs$core$match$macros$match_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8388 = arguments.length;
var i__4737__auto___8389 = (0);
while(true){
if((i__4737__auto___8389 < len__4736__auto___8388)){
args__4742__auto__.push((arguments[i__4737__auto___8389]));

var G__8390 = (i__4737__auto___8389 + (1));
i__4737__auto___8389 = G__8390;
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
(cljs.core.match$macros.match_let.cljs$lang$applyTo = (function (seq8223){
var G__8224 = cljs.core.first(seq8223);
var seq8223__$1 = cljs.core.next(seq8223);
var G__8225 = cljs.core.first(seq8223__$1);
var seq8223__$2 = cljs.core.next(seq8223__$1);
var G__8226 = cljs.core.first(seq8223__$2);
var seq8223__$3 = cljs.core.next(seq8223__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8224,G__8225,G__8226,seq8223__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let.cljs$lang$macro = true);

var ret__4785__auto___8391 = (function (){
cljs.core.match$macros.match_let_STAR_ = (function cljs$core$match$macros$match_let_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___8392 = arguments.length;
var i__4737__auto___8393 = (0);
while(true){
if((i__4737__auto___8393 < len__4736__auto___8392)){
args__4742__auto__.push((arguments[i__4737__auto___8393]));

var G__8394 = (i__4737__auto___8393 + (1));
i__4737__auto___8393 = G__8394;
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
(cljs.core.match$macros.match_let_STAR_.cljs$lang$applyTo = (function (seq8227){
var G__8228 = cljs.core.first(seq8227);
var seq8227__$1 = cljs.core.next(seq8227);
var G__8229 = cljs.core.first(seq8227__$1);
var seq8227__$2 = cljs.core.next(seq8227__$1);
var G__8230 = cljs.core.first(seq8227__$2);
var seq8227__$3 = cljs.core.next(seq8227__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8228,G__8229,G__8230,seq8227__$3);
}));

return null;
})()
;
(cljs.core.match$macros.match_let_STAR_.cljs$lang$macro = true);


//# sourceMappingURL=cljs.core.match$macros.js.map
