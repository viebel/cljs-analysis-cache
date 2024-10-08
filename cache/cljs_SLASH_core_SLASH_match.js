goog.provide('cljs.core.match');
/**
 * Enable syntax check of match macros
 */
cljs.core.match._STAR_syntax_check_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
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
cljs.core.match._STAR_vector_type_STAR_ = new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296);
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
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",463239872,null),null,(1),null)))));
});
cljs.core.match.backtrack_sym = (function cljs$core$match$backtrack_sym(){
return new cljs.core.Symbol("cljs.core.match","backtrack","cljs.core.match/backtrack",463239872,null);
});
cljs.core.match._STAR_backtrack_stack_STAR_ = cljs.core.List.EMPTY;
cljs.core.match._STAR_root_STAR_ = true;
cljs.core.match.warn = (function cljs$core$match$warn(msg){
if(cljs.core.not(cljs.core.deref(cljs.core.match._STAR_warned_STAR_))){
var _STAR_print_fn_STAR__orig_val__15690_18166 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__15691_18167 = cljs.core._STAR_print_err_fn_STAR_;
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15691_18167);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["WARNING:",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),", line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.match._STAR_line_STAR_),":"].join(''),msg], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15690_18166);
}
return cljs.core.reset_BANG_(cljs.core.match._STAR_warned_STAR_,true);
} else {
return null;
}
});
(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.ILookup.prototype.cljs$core$match$protocols$IMatchLookup$val_at$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,not_found);
}));
cljs.core.match.val_at_expr = (function cljs$core$match$val_at_expr(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18171 = arguments.length;
var i__5727__auto___18172 = (0);
while(true){
if((i__5727__auto___18172 < len__5726__auto___18171)){
args__5732__auto__.push((arguments[i__5727__auto___18172]));

var G__18173 = (i__5727__auto___18172 + (1));
i__5727__auto___18172 = G__18173;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),args)));
}));

(cljs.core.match.val_at_expr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match.val_at_expr.cljs$lang$applyTo = (function (seq15692){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15692));
}));

cljs.core.match.vector_type = (function cljs$core$match$vector_type(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18176 = arguments.length;
var i__5727__auto___18177 = (0);
while(true){
if((i__5727__auto___18177 < len__5726__auto___18176)){
args__5732__auto__.push((arguments[i__5727__auto___18177]));

var G__18178 = (i__5727__auto___18177 + (1));
i__5727__auto___18177 = G__18178;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.match.vector_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.match.vector_type.cljs$core$IFn$_invoke$arity$variadic = (function (t,r){
return t;
}));

(cljs.core.match.vector_type.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.match.vector_type.cljs$lang$applyTo = (function (seq15699){
var G__15701 = cljs.core.first(seq15699);
var seq15699__$1 = cljs.core.next(seq15699);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15701,seq15699__$1);
}));

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.check_size_QMARK_ !== 'undefined')){
} else {
cljs.core.match.check_size_QMARK_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15710 = cljs.core.get_global_hierarchy;
return (fexpr__15710.cljs$core$IFn$_invoke$arity$0 ? fexpr__15710.cljs$core$IFn$_invoke$arity$0() : fexpr__15710.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","check-size?"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.tag !== 'undefined')){
} else {
cljs.core.match.tag = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15718 = cljs.core.get_global_hierarchy;
return (fexpr__15718.cljs$core$IFn$_invoke$arity$0 ? fexpr__15718.cljs$core$IFn$_invoke$arity$0() : fexpr__15718.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","tag"),(function (t){
return t;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.test_inline !== 'undefined')){
} else {
cljs.core.match.test_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15725 = cljs.core.get_global_hierarchy;
return (fexpr__15725.cljs$core$IFn$_invoke$arity$0 ? fexpr__15725.cljs$core$IFn$_invoke$arity$0() : fexpr__15725.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","test-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.test_with_size_inline !== 'undefined')){
} else {
cljs.core.match.test_with_size_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15728 = cljs.core.get_global_hierarchy;
return (fexpr__15728.cljs$core$IFn$_invoke$arity$0 ? fexpr__15728.cljs$core$IFn$_invoke$arity$0() : fexpr__15728.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","test-with-size-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.test_with_min_size_inline !== 'undefined')){
} else {
cljs.core.match.test_with_min_size_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15729 = cljs.core.get_global_hierarchy;
return (fexpr__15729.cljs$core$IFn$_invoke$arity$0 ? fexpr__15729.cljs$core$IFn$_invoke$arity$0() : fexpr__15729.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","test-with-min-size-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.count_inline !== 'undefined')){
} else {
cljs.core.match.count_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15730 = cljs.core.get_global_hierarchy;
return (fexpr__15730.cljs$core$IFn$_invoke$arity$0 ? fexpr__15730.cljs$core$IFn$_invoke$arity$0() : fexpr__15730.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","count-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.nth_inline !== 'undefined')){
} else {
cljs.core.match.nth_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15746 = cljs.core.get_global_hierarchy;
return (fexpr__15746.cljs$core$IFn$_invoke$arity$0 ? fexpr__15746.cljs$core$IFn$_invoke$arity$0() : fexpr__15746.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","nth-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.nth_offset_inline !== 'undefined')){
} else {
cljs.core.match.nth_offset_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15755 = cljs.core.get_global_hierarchy;
return (fexpr__15755.cljs$core$IFn$_invoke$arity$0 ? fexpr__15755.cljs$core$IFn$_invoke$arity$0() : fexpr__15755.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","nth-offset-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.subvec_inline !== 'undefined')){
} else {
cljs.core.match.subvec_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15757 = cljs.core.get_global_hierarchy;
return (fexpr__15757.cljs$core$IFn$_invoke$arity$0 ? fexpr__15757.cljs$core$IFn$_invoke$arity$0() : fexpr__15757.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","subvec-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.nthnext_inline !== 'undefined')){
} else {
cljs.core.match.nthnext_inline = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15760 = cljs.core.get_global_hierarchy;
return (fexpr__15760.cljs$core$IFn$_invoke$arity$0 ? fexpr__15760.cljs$core$IFn$_invoke$arity$0() : fexpr__15760.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","nthnext-inline"),cljs.core.match.vector_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core.match.check_size_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return true;
}));
cljs.core.match.tag.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (t){
throw (new Error(["No tag specified for vector specialization ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));
}));
cljs.core.match.tag.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_){
return cljs.core.PersistentVector;
}));
cljs.core.match.with_tag = (function cljs$core$match$with_tag(t,ocr){
var the_tag = cljs.core.match.tag.cljs$core$IFn$_invoke$arity$1(t);
var the_tag__$1 = the_tag;
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(ocr,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),the_tag__$1);
});
cljs.core.match.test_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr){
var the_tag = cljs.core.match.tag.cljs$core$IFn$_invoke$arity$1(t);
var c = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(the_tag,cljs.core.PersistentVector))?the_tag:((typeof the_tag === 'string')?the_tag:(((the_tag instanceof cljs.core.Symbol))?cljs.core.str.cljs$core$IFn$_invoke$arity$1((the_tag.cljs$core$IFn$_invoke$arity$0 ? the_tag.cljs$core$IFn$_invoke$arity$0() : the_tag.call(null, ))):(function(){throw (new Error(["Unsupported tag type",cljs.core.str.cljs$core$IFn$_invoke$arity$1(the_tag)].join('')))})()
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
cljs.core.match.test_with_size_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.test_inline.cljs$core$IFn$_invoke$arity$2(t,ocr),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.count_inline.cljs$core$IFn$_invoke$arity$2(t,cljs.core.match.with_tag(t,ocr)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,size,null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.core.match.test_with_min_size_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.test_inline.cljs$core$IFn$_invoke$arity$2(t,ocr),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.match.count_inline.cljs$core$IFn$_invoke$arity$2(t,cljs.core.match.with_tag(t,ocr)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,size,null,(1),null))], 0)))),null,(1),null))], 0))));
}));
cljs.core.match.count_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_,ocr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))));
}));
cljs.core.match.nth_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_,ocr,i){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,i,null,(1),null))], 0))));
}));
cljs.core.match.nth_offset_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (t,ocr,i,offset){
return cljs.core.match.nth_inline.cljs$core$IFn$_invoke$arity$3(t,ocr,i);
}));
cljs.core.match.subvec_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function() {
var G__18226 = null;
var G__18226__3 = (function (_,ocr,start){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null))], 0))));
});
var G__18226__4 = (function (_,ocr,start,end){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","subvec","cljs.core/subvec",1039737205,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,start,null,(1),null)),(new cljs.core.List(null,end,null,(1),null))], 0))));
});
G__18226 = function(_,ocr,start,end){
switch(arguments.length){
case 3:
return G__18226__3.call(this,_,ocr,start);
case 4:
return G__18226__4.call(this,_,ocr,start,end);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18226.cljs$core$IFn$_invoke$arity$3 = G__18226__3;
G__18226.cljs$core$IFn$_invoke$arity$4 = G__18226__4;
return G__18226;
})()
);
cljs.core.match.nthnext_inline.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (_,ocr,n){
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
cljs.core.match.constructor_QMARK_ = (function cljs$core$match$constructor_QMARK_(p){
return cljs.core.not((cljs.core.match.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.wildcard_pattern_QMARK_.call(null, p)));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.groupable_QMARK_ !== 'undefined')){
} else {
/**
 * Determine if two patterns may be grouped together for simultaneous
 * testing.
 */
cljs.core.match.groupable_QMARK_ = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__15879 = cljs.core.get_global_hierarchy;
return (fexpr__15879.cljs$core$IFn$_invoke$arity$0 ? fexpr__15879.cljs$core$IFn$_invoke$arity$0() : fexpr__15879.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","groupable?"),(function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477).cljs$core$IFn$_invoke$arity$1(b)], null);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (a,b){
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
return (((other instanceof cljs.core.match.PatternRow)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ps,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(other))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.action,new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.bindings,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(other))))))));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__15894 = k;
var G__15894__$1 = (((G__15894 instanceof cljs.core.Keyword))?G__15894.fqn:null);
switch (G__15894__$1) {
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
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.ps,i);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,i,x){
var self__ = this;
var ___$1 = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(self__.ps,i,x);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$INext$_next$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var temp__5802__auto__ = cljs.core.next(self__.ps);
if(temp__5802__auto__){
var nps = temp__5802__auto__;
return (new cljs.core.match.PatternRow(nps,self__.action,self__.bindings));
} else {
return (new cljs.core.match.PatternRow(cljs.core.PersistentVector.EMPTY,self__.action,self__.bindings));
}
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.count(self__.ps);
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
return (new cljs.core.match.PatternRow(cljs.core.match.protocols.drop_nth(self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$prepend$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),self__.ps),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,n){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.match.protocols.swap(self__.ps,n),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ISeq$_first$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first(self__.ps);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,k,v){
var self__ = this;
var this$__$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ps,k,v),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.seq(self__.ps);
}));

(cljs.core.match.PatternRow.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return (new cljs.core.match.PatternRow(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.ps,x),self__.action,self__.bindings));
}));

(cljs.core.match.PatternRow.prototype.call = (function (unused__10318__auto__){
var self__ = this;
var self__ = this;
var G__15946 = (arguments.length - (1));
switch (G__15946) {
case (1):
return self__.cljs$core$IFn$_invoke$arity$1((arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(cljs.core.match.PatternRow.prototype.apply = (function (self__,args15886){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args15886)));
}));

(cljs.core.match.PatternRow.prototype.cljs$core$IFn$_invoke$arity$1 = (function (n){
var self__ = this;
var _ = this;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(self__.ps,n);
}));

(cljs.core.match.PatternRow.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",1932889573,null),new cljs.core.Symbol(null,"action","action",829293503,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(cljs.core.match.PatternRow.cljs$lang$type = true);

(cljs.core.match.PatternRow.cljs$lang$ctorStr = "cljs.core.match/PatternRow");

(cljs.core.match.PatternRow.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/PatternRow");
}));

/**
 * Positional factory function for cljs.core.match/PatternRow.
 */
cljs.core.match.__GT_PatternRow = (function cljs$core$match$__GT_PatternRow(ps,action,bindings){
return (new cljs.core.match.PatternRow(ps,action,bindings));
});

cljs.core.match.pattern_row = (function cljs$core$match$pattern_row(var_args){
var G__15976 = arguments.length;
switch (G__15976) {
case 2:
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$2 = (function (ps,action){
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3(ps,action,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3 = (function (ps,action,bindings){
var ps__$1 = ((cljs.core.vector_QMARK_(ps))?ps:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,ps));
return (new cljs.core.match.PatternRow(ps__$1,action,bindings));
}));

(cljs.core.match.pattern_row.cljs$lang$maxFixedArity = 3);

cljs.core.match.update_pattern = (function cljs$core$match$update_pattern(prow,i,p){
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(prow),i,p),new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(prow),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match.all_wildcards_QMARK_ = (function cljs$core$match$all_wildcards_QMARK_(prow){
return cljs.core.every_QMARK_(cljs.core.match.wildcard_pattern_QMARK_,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(prow));
});
cljs.core.match.drop_nth_bind = (function cljs$core$match$drop_nth_bind(prow,n,ocr){
var ps = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(prow);
var p = (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(n) : ps.call(null, n));
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(prow);
var bind_expr = (cljs.core.match.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1(ocr) : cljs.core.match.leaf_bind_expr.call(null, ocr));
var as = new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p));
var bindings = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(prow);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var bindings__$1 = (cljs.core.truth_(as)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bindings,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [as,bind_expr], null)):bindings);
var bindings__$2 = (cljs.core.truth_((cljs.core.match.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.named_wildcard_pattern_QMARK_.call(null, p)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p),bind_expr], null)):bindings__$1);
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.drop_nth(ps,n),action,bindings__$2);
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k15981,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__15995 = k15981;
var G__15995__$1 = (((G__15995 instanceof cljs.core.Keyword))?G__15995.fqn:null);
switch (G__15995__$1) {
case "value":
return self__.value;

break;
case "bindings":
return self__.bindings;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15981,else__5303__auto__);

}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.LeafNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((!(cljs.core.empty_QMARK_(self__.bindings)))){
var bindings__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__15996){
var vec__15997 = p__15996;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15997,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,new cljs.core.Symbol(null,"_","_",-1201019570,null));
}),self__.bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,bindings__$1))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,self__.value,null,(1),null))], 0))));
} else {
return self__.value;
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16003){
var vec__16004 = p__16003;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16004,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#cljs.core.match.LeafNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null))], null),self__.__extmap));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15980){
var self__ = this;
var G__15980__$1 = this;
return (new cljs.core.RecordIter((0),G__15980__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bindings","bindings",1271397192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1133054042 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15982,other15983){
var self__ = this;
var this15982__$1 = this;
return (((!((other15983 == null)))) && ((((this15982__$1.constructor === other15983.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.value,other15983.value)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.bindings,other15983.bindings)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15982__$1.__extmap,other15983.__extmap)))))))));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k15981){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16017 = k15981;
var G__16017__$1 = (((G__16017 instanceof cljs.core.Keyword))?G__16017.fqn:null);
switch (G__16017__$1) {
case "value":
case "bindings":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15981);

}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__15980){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16022 = cljs.core.keyword_identical_QMARK_;
var expr__16023 = k__5309__auto__;
if(cljs.core.truth_((pred__16022.cljs$core$IFn$_invoke$arity$2 ? pred__16022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__16023) : pred__16022.call(null, new cljs.core.Keyword(null,"value","value",305978217),expr__16023)))){
return (new cljs.core.match.LeafNode(G__15980,self__.bindings,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16022.cljs$core$IFn$_invoke$arity$2 ? pred__16022.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__16023) : pred__16022.call(null, new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__16023)))){
return (new cljs.core.match.LeafNode(self__.value,G__15980,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__15980),null));
}
}
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null))], null),self__.__extmap));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__15980){
var self__ = this;
var this__5299__auto____$1 = this;
return (new cljs.core.match.LeafNode(self__.value,self__.bindings,G__15980,self__.__extmap,self__.__hash));
}));

(cljs.core.match.LeafNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(cljs.core.match.LeafNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null)], null);
}));

(cljs.core.match.LeafNode.cljs$lang$type = true);

(cljs.core.match.LeafNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"cljs.core.match/LeafNode",null,(1),null));
}));

(cljs.core.match.LeafNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"cljs.core.match/LeafNode");
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
cljs.core.match.map__GT_LeafNode = (function cljs$core$match$map__GT_LeafNode(G__15989){
var extmap__5342__auto__ = (function (){var G__16050 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15989,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"bindings","bindings",1271397192)], 0));
if(cljs.core.record_QMARK_(G__15989)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16050);
} else {
return G__16050;
}
})();
return (new cljs.core.match.LeafNode(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__15989),new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__15989),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

cljs.core.match.leaf_node = (function cljs$core$match$leaf_node(var_args){
var G__16054 = arguments.length;
switch (G__16054) {
case 1:
return cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
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

(cljs.core.match.leaf_node.cljs$lang$maxFixedArity = 2);

if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.leaf_bind_expr !== 'undefined')){
} else {
cljs.core.match.leaf_bind_expr = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16057 = cljs.core.get_global_hierarchy;
return (fexpr__16057.cljs$core$IFn$_invoke$arity$0 ? fexpr__16057.cljs$core$IFn$_invoke$arity$0() : fexpr__16057.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","leaf-bind-expr"),(function (ocr){
return new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ocr));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core.match.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"seq","seq",-1817803783),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ocr));
}));
cljs.core.match.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (ocr){
return new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ocr));
}));
cljs.core.match.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"map","map",1371690461),(function (ocr){
var m = cljs.core.meta(ocr);
return cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"map-sym","map-sym",1467543192).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(m)], 0));
}));
cljs.core.match.leaf_bind_expr.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (ocr){
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.FailNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(cljs.core.match.FailNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16064,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16070 = k16064;
switch (G__16070) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16064,else__5303__auto__);

}
}));

(cljs.core.match.FailNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.FailNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No match found.",null,(1),null))))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.match.backtrack_expr();
}
}));

(cljs.core.match.FailNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16076){
var vec__16077 = p__16076;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16077,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16077,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(cljs.core.match.FailNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#cljs.core.match.FailNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16063){
var self__ = this;
var G__16063__$1 = this;
return (new cljs.core.RecordIter((0),G__16063__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.FailNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new cljs.core.match.FailNode(self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.FailNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-600001251 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.core.match.FailNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16065,other16066){
var self__ = this;
var this16065__$1 = this;
return (((!((other16066 == null)))) && ((((this16065__$1.constructor === other16066.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16065__$1.__extmap,other16066.__extmap)))));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new cljs.core.match.FailNode(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(cljs.core.match.FailNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16064){
var self__ = this;
var this__5307__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k16064);
}));

(cljs.core.match.FailNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16063){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16091 = cljs.core.keyword_identical_QMARK_;
var expr__16092 = k__5309__auto__;
return (new cljs.core.match.FailNode(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16063),null));
}));

(cljs.core.match.FailNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(cljs.core.match.FailNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16063){
var self__ = this;
var this__5299__auto____$1 = this;
return (new cljs.core.match.FailNode(G__16063,self__.__extmap,self__.__hash));
}));

(cljs.core.match.FailNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(cljs.core.match.FailNode.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(cljs.core.match.FailNode.cljs$lang$type = true);

(cljs.core.match.FailNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"cljs.core.match/FailNode",null,(1),null));
}));

(cljs.core.match.FailNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"cljs.core.match/FailNode");
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
cljs.core.match.map__GT_FailNode = (function cljs$core$match$map__GT_FailNode(G__16067){
var extmap__5342__auto__ = (function (){var G__16100 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__16067);
if(cljs.core.record_QMARK_(G__16067)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16100);
} else {
return G__16100;
}
})();
return (new cljs.core.match.FailNode(null,cljs.core.not_empty(extmap__5342__auto__),null));
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.BindNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(cljs.core.match.BindNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16105,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16113 = k16105;
var G__16113__$1 = (((G__16113 instanceof cljs.core.Keyword))?G__16113.fqn:null);
switch (G__16113__$1) {
case "bindings":
return self__.bindings;

break;
case "node":
return self__.node;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16105,else__5303__auto__);

}
}));

(cljs.core.match.BindNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.BindNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(self__.bindings)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj(self__.node),null,(1),null))], 0))));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16116){
var vec__16117 = p__16116;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16117,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16117,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(cljs.core.match.BindNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#cljs.core.match.BindNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"node","node",581201198),self__.node],null))], null),self__.__extmap));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16104){
var self__ = this;
var G__16104__$1 = this;
return (new cljs.core.RecordIter((0),G__16104__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"node","node",581201198)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.BindNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.BindNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1009235871 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.core.match.BindNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16106,other16107){
var self__ = this;
var this16106__$1 = this;
return (((!((other16107 == null)))) && ((((this16106__$1.constructor === other16107.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16106__$1.bindings,other16107.bindings)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16106__$1.node,other16107.node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16106__$1.__extmap,other16107.__extmap)))))))));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),null,new cljs.core.Keyword(null,"node","node",581201198),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(cljs.core.match.BindNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16105){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16183 = k16105;
var G__16183__$1 = (((G__16183 instanceof cljs.core.Keyword))?G__16183.fqn:null);
switch (G__16183__$1) {
case "bindings":
case "node":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16105);

}
}));

(cljs.core.match.BindNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16104){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16184 = cljs.core.keyword_identical_QMARK_;
var expr__16185 = k__5309__auto__;
if(cljs.core.truth_((pred__16184.cljs$core$IFn$_invoke$arity$2 ? pred__16184.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__16185) : pred__16184.call(null, new cljs.core.Keyword(null,"bindings","bindings",1271397192),expr__16185)))){
return (new cljs.core.match.BindNode(G__16104,self__.node,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16184.cljs$core$IFn$_invoke$arity$2 ? pred__16184.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"node","node",581201198),expr__16185) : pred__16184.call(null, new cljs.core.Keyword(null,"node","node",581201198),expr__16185)))){
return (new cljs.core.match.BindNode(self__.bindings,G__16104,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.BindNode(self__.bindings,self__.node,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16104),null));
}
}
}));

(cljs.core.match.BindNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"bindings","bindings",1271397192),self__.bindings,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"node","node",581201198),self__.node,null))], null),self__.__extmap));
}));

(cljs.core.match.BindNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16104){
var self__ = this;
var this__5299__auto____$1 = this;
return (new cljs.core.match.BindNode(self__.bindings,self__.node,G__16104,self__.__extmap,self__.__hash));
}));

(cljs.core.match.BindNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(cljs.core.match.BindNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"node","node",-2073234571,null)], null);
}));

(cljs.core.match.BindNode.cljs$lang$type = true);

(cljs.core.match.BindNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"cljs.core.match/BindNode",null,(1),null));
}));

(cljs.core.match.BindNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"cljs.core.match/BindNode");
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
cljs.core.match.map__GT_BindNode = (function cljs$core$match$map__GT_BindNode(G__16108){
var extmap__5342__auto__ = (function (){var G__16192 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16108,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"node","node",581201198)], 0));
if(cljs.core.record_QMARK_(G__16108)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16192);
} else {
return G__16192;
}
})();
return (new cljs.core.match.BindNode(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(G__16108),new cljs.core.Keyword(null,"node","node",581201198).cljs$core$IFn$_invoke$arity$1(G__16108),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

cljs.core.match.bind_node = (function cljs$core$match$bind_node(bindings,node){
return (new cljs.core.match.BindNode(bindings,node,null,null,null));
});
cljs.core.match.dag_clause_to_clj = (function cljs$core$match$dag_clause_to_clj(occurrence,pattern,action){
var test = (((((!((pattern == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === pattern.cljs$core$match$protocols$IPatternCompile$))))?true:(((!pattern.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.IPatternCompile,pattern):false)):cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.IPatternCompile,pattern)))?cljs.core.match.protocols.to_source_STAR_(pattern,occurrence):(cljs.core.match.to_source.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match.to_source.cljs$core$IFn$_invoke$arity$2(pattern,occurrence) : cljs.core.match.to_source.call(null, pattern,occurrence)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [test,cljs.core.match.protocols.n_to_clj(action)], null);
});
cljs.core.match.catch_error = (function cljs$core$match$catch_error(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18332 = arguments.length;
var i__5727__auto___18333 = (0);
while(true){
if((i__5727__auto___18333 < len__5726__auto___18332)){
args__5732__auto__.push((arguments[i__5727__auto___18333]));

var G__18334 = (i__5727__auto___18333 + (1));
i__5727__auto___18333 = G__18334;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic = (function (body){
var err_sym = new cljs.core.Symbol("js","Error","js/Error",-1692659266,null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"catch","catch",-1616370245,null),null,(1),null)),(new cljs.core.List(null,err_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16194__auto__","e__16194__auto__",149427862,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16194__auto__","e__16194__auto__",149427862,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match.backtrack_sym(),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"e__16194__auto__","e__16194__auto__",149427862,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core.match.catch_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(cljs.core.match.catch_error.cljs$lang$applyTo = (function (seq16195){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16195));
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16197,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16201 = k16197;
var G__16201__$1 = (((G__16201 instanceof cljs.core.Keyword))?G__16201.fqn:null);
switch (G__16201__$1) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16197,else__5303__auto__);

}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.SwitchNode.prototype.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var clauses = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.match.dag_clause_to_clj,self__.occurrence),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.cases], 0)));
var bind_expr = new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.occurrence));
var cond_expr = (cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),clauses))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.match.protocols.n_to_clj(self__.default$),null,(1),null))))))):cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),clauses))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.match.backtrack_expr(),null,(1),null))))))));
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
if(cljs.core.truth_(bind_expr)){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null)))))),null,(1),null))))),(new cljs.core.List(null,cond_expr,null,(1),null))));
} else {
return cond_expr;
}
} else {
if(cljs.core.truth_(bind_expr)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,self__.occurrence,null,(1),null)),(new cljs.core.List(null,bind_expr,null,(1),null)))))),null,(1),null))))),(new cljs.core.List(null,cond_expr,null,(1),null)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.match.protocols.n_to_clj(self__.default$)], 0)),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),(new cljs.core.List(null,cond_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.match.catch_error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.match.protocols.n_to_clj(self__.default$)], 0)),null,(1),null))], 0))));
}
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16202){
var vec__16203 = p__16202;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16203,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16203,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#cljs.core.match.SwitchNode{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),self__.occurrence],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cases","cases",253862775),self__.cases],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$],null))], null),self__.__extmap));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16196){
var self__ = this;
var G__16196__$1 = this;
return (new cljs.core.RecordIter((0),G__16196__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (2072471792 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16198,other16199){
var self__ = this;
var this16198__$1 = this;
return (((!((other16199 == null)))) && ((((this16198__$1.constructor === other16199.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16198__$1.occurrence,other16199.occurrence)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16198__$1.cases,other16199.cases)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16198__$1.default,other16199.default)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16198__$1.__extmap,other16199.__extmap)))))))))));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"cases","cases",253862775),null,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16197){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16206 = k16197;
var G__16206__$1 = (((G__16206 instanceof cljs.core.Keyword))?G__16206.fqn:null);
switch (G__16206__$1) {
case "occurrence":
case "cases":
case "default":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16197);

}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16196){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16207 = cljs.core.keyword_identical_QMARK_;
var expr__16208 = k__5309__auto__;
if(cljs.core.truth_((pred__16207.cljs$core$IFn$_invoke$arity$2 ? pred__16207.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__16208) : pred__16207.call(null, new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),expr__16208)))){
return (new cljs.core.match.SwitchNode(G__16196,self__.cases,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16207.cljs$core$IFn$_invoke$arity$2 ? pred__16207.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cases","cases",253862775),expr__16208) : pred__16207.call(null, new cljs.core.Keyword(null,"cases","cases",253862775),expr__16208)))){
return (new cljs.core.match.SwitchNode(self__.occurrence,G__16196,self__.default$,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16207.cljs$core$IFn$_invoke$arity$2 ? pred__16207.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),expr__16208) : pred__16207.call(null, new cljs.core.Keyword(null,"default","default",-1987822328),expr__16208)))){
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,G__16196,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16196),null));
}
}
}
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),self__.occurrence,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cases","cases",253862775),self__.cases,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"default","default",-1987822328),self__.default$,null))], null),self__.__extmap));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16196){
var self__ = this;
var this__5299__auto____$1 = this;
return (new cljs.core.match.SwitchNode(self__.occurrence,self__.cases,self__.default$,G__16196,self__.__extmap,self__.__hash));
}));

(cljs.core.match.SwitchNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(cljs.core.match.SwitchNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"occurrence","occurrence",-90277627,null),new cljs.core.Symbol(null,"cases","cases",1894394302,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null);
}));

(cljs.core.match.SwitchNode.cljs$lang$type = true);

(cljs.core.match.SwitchNode.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"cljs.core.match/SwitchNode",null,(1),null));
}));

(cljs.core.match.SwitchNode.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"cljs.core.match/SwitchNode");
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
cljs.core.match.map__GT_SwitchNode = (function cljs$core$match$map__GT_SwitchNode(G__16200){
var extmap__5342__auto__ = (function (){var G__16210 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16200,new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cases","cases",253862775),new cljs.core.Keyword(null,"default","default",-1987822328)], 0));
if(cljs.core.record_QMARK_(G__16200)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16210);
} else {
return G__16210;
}
})();
return (new cljs.core.match.SwitchNode(new cljs.core.Keyword(null,"occurrence","occurrence",-1730809154).cljs$core$IFn$_invoke$arity$1(G__16200),new cljs.core.Keyword(null,"cases","cases",253862775).cljs$core$IFn$_invoke$arity$1(G__16200),new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(G__16200),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

cljs.core.match.switch_node = (function cljs$core$match$switch_node(occurrence,cases,default$){
if(cljs.core.sequential_QMARK_(cases)){
} else {
throw (new Error("Assert failed: (sequential? cases)"));
}

return (new cljs.core.match.SwitchNode(occurrence,cases,default$,null,null,null));
});
cljs.core.match.first_column_QMARK_ = (function cljs$core$match$first_column_QMARK_(i){
return (i === (0));
});
cljs.core.match.empty_row_QMARK_ = (function cljs$core$match$empty_row_QMARK_(row){
var ps = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(row);
return (((!((ps == null)))) && (cljs.core.empty_QMARK_(ps)));
});
cljs.core.match.score_column = (function cljs$core$match$score_column(i,col){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),col)], null);
});
cljs.core.match.width = (function cljs$core$match$width(p__16211){
var map__16212 = p__16211;
var map__16212__$1 = cljs.core.__destructure_map(map__16212);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16212__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
if((!(cljs.core.empty_QMARK_(rows)))){
return cljs.core.count((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1((0)) : rows.call(null, (0))));
} else {
return (0);
}
});
cljs.core.match.height = (function cljs$core$match$height(p__16213){
var map__16214 = p__16213;
var map__16214__$1 = cljs.core.__destructure_map(map__16214);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16214__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.count(rows);
});
cljs.core.match.dim = (function cljs$core$match$dim(pm){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.width(pm),cljs.core.match.height(pm)], null);
});
cljs.core.match.empty_matrix_QMARK_ = (function cljs$core$match$empty_matrix_QMARK_(pm){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.match.dim(pm),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
});
cljs.core.match.column = (function cljs$core$match$column(p__16216,i){
var map__16217 = p__16216;
var map__16217__$1 = cljs.core.__destructure_map(map__16217);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16217__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16215_SHARP_){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__16215_SHARP_,i);
}),rows));
});
cljs.core.match.row = (function cljs$core$match$row(p__16218,j){
var map__16219 = p__16218;
var map__16219__$1 = cljs.core.__destructure_map(map__16219);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16219__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(rows,j);
});
cljs.core.match.rows = (function cljs$core$match$rows(p__16220){
var map__16221 = p__16220;
var map__16221__$1 = cljs.core.__destructure_map(map__16221);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16221__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return rows;
});
cljs.core.match.pattern_at = (function cljs$core$match$pattern_at(p__16223,i,j){
var map__16226 = p__16223;
var map__16226__$1 = cljs.core.__destructure_map(map__16226);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16226__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var fexpr__16227 = (rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null, j));
return (fexpr__16227.cljs$core$IFn$_invoke$arity$1 ? fexpr__16227.cljs$core$IFn$_invoke$arity$1(i) : fexpr__16227.call(null, i));
});
cljs.core.match.action_for_row = (function cljs$core$match$action_for_row(p__16229,j){
var map__16230 = p__16229;
var map__16230__$1 = cljs.core.__destructure_map(map__16230);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16230__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1((rows.cljs$core$IFn$_invoke$arity$1 ? rows.cljs$core$IFn$_invoke$arity$1(j) : rows.call(null, j)));
});
cljs.core.match.occurrences = (function cljs$core$match$occurrences(pm){
return new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(pm);
});
cljs.core.match.row_bindings = (function cljs$core$match$row_bindings(f,ocrs){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(f),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16234){
var vec__16235 = p__16234;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16235,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(p),cljs.core.match.leaf_bind_expr.cljs$core$IFn$_invoke$arity$1(ocr)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__16238){
var vec__16239 = p__16238;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(0),null);
var ocr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(1),null);
return (cljs.core.match.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.named_wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.named_wildcard_pattern_QMARK_.call(null, p));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(f),ocrs))));
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
var or__5002__auto__ = (cljs.core.match.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.match.wildcard_pattern_QMARK_.call(null, x));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.match.existential_pattern_QMARK_(x);
}
});
cljs.core.match.constructors_above_QMARK_ = (function cljs$core$match$constructors_above_QMARK_(pm,i,j){
return cljs.core.every_QMARK_(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.match.wildcard_or_existential_QMARK_),cljs.core.take.cljs$core$IFn$_invoke$arity$2(j,cljs.core.match.column(pm,i)));
});
cljs.core.match.pattern_score = (function cljs$core$match$pattern_score(pm,i,j){
var p = cljs.core.match.pattern_at(pm,i,j);
if(cljs.core.truth_((function (){var or__5002__auto__ = (cljs.core.match.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.wildcard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.wildcard_pattern_QMARK_.call(null, p));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (!(cljs.core.match.constructors_above_QMARK_(pm,i,j)));
}
})())){
return (0);
} else {
if(cljs.core.match.existential_pattern_QMARK_(p)){
return (1);
} else {
return (2);

}
}
});
cljs.core.match.useful_matrix = (function cljs$core$match$useful_matrix(pm){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(cljs.core.match.width(pm),(function (){var iter__5480__auto__ = (function cljs$core$match$useful_matrix_$_iter__16288(s__16289){
return (new cljs.core.LazySeq(null,(function (){
var s__16289__$1 = s__16289;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__16289__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var j = cljs.core.first(xs__6360__auto__);
var iterys__5476__auto__ = ((function (s__16289__$1,j,xs__6360__auto__,temp__5804__auto__){
return (function cljs$core$match$useful_matrix_$_iter__16288_$_iter__16290(s__16291){
return (new cljs.core.LazySeq(null,((function (s__16289__$1,j,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__16291__$1 = s__16291;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__16291__$1);
if(temp__5804__auto____$1){
var s__16291__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__16291__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__16291__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__16293 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__16292 = (0);
while(true){
if((i__16292 < size__5479__auto__)){
var i = cljs.core._nth(c__5478__auto__,i__16292);
cljs.core.chunk_append(b__16293,cljs.core.match.pattern_score(pm,i,j));

var G__18408 = (i__16292 + (1));
i__16292 = G__18408;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16293),cljs$core$match$useful_matrix_$_iter__16288_$_iter__16290(cljs.core.chunk_rest(s__16291__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16293),null);
}
} else {
var i = cljs.core.first(s__16291__$2);
return cljs.core.cons(cljs.core.match.pattern_score(pm,i,j),cljs$core$match$useful_matrix_$_iter__16288_$_iter__16290(cljs.core.rest(s__16291__$2)));
}
} else {
return null;
}
break;
}
});})(s__16289__$1,j,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__16289__$1,j,xs__6360__auto__,temp__5804__auto__))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.match.width(pm))));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,cljs$core$match$useful_matrix_$_iter__16288(cljs.core.rest(s__16289__$1)));
} else {
var G__18409 = cljs.core.rest(s__16289__$1);
s__16289__$1 = G__18409;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.match.height(pm)));
})())));
});
cljs.core.match.necessary_column = (function cljs$core$match$necessary_column(pm){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16341,p__16342){
var vec__16343 = p__16341;
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16343,(0),null);
var score = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16343,(1),null);
var curr = vec__16343;
var vec__16346 = p__16342;
var ocol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(0),null);
var oscore = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16346,(1),null);
var cand = vec__16346;
if((oscore > score)){
return cand;
} else {
return curr;
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.match.score_column,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,cljs.core.match.useful_matrix(pm)))));
});
cljs.core.match.select = (function cljs$core$match$select(pm){
return cljs.core.match.protocols.swap(pm,cljs.core.match.necessary_column(pm));
});
cljs.core.match.specialize = (function cljs$core$match$specialize(var_args){
var G__16355 = arguments.length;
switch (G__16355) {
case 1:
return cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$1 = (function (matrix){
return cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2(matrix,cljs.core.ffirst(cljs.core.match.rows(matrix)));
}));

(cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2 = (function (matrix,p){
if((((!((p == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === p.cljs$core$match$protocols$ISpecializeMatrix$))))?true:(((!p.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.ISpecializeMatrix,p):false)):cljs.core.native_satisfies_QMARK_(cljs.core.match.protocols.ISpecializeMatrix,p))){
return cljs.core.match.protocols.specialize_matrix(p,matrix);
} else {
return (cljs.core.match.default_specialize_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match.default_specialize_matrix.cljs$core$IFn$_invoke$arity$2(p,matrix) : cljs.core.match.default_specialize_matrix.call(null, p,matrix));
}
}));

(cljs.core.match.specialize.cljs$lang$maxFixedArity = 2);

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
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.match.pseudo_pattern_QMARK_,cljs.core.match.column(matrix,i));
});
cljs.core.match.column_splitter = (function cljs$core$match$column_splitter(col){
var f = cljs.core.first(col);
var vec__16365 = cljs.core.split_with((function (p1__16364_SHARP_){
return cljs.core.match.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(f,p1__16364_SHARP_);
}),cljs.core.rest(col));
var top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(0),null);
var bottom = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16365,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cons(f,top),bottom], null);
});

cljs.core.match.return_split = (function cljs$core$match$return_split(S,D){
if(cljs.core.truth_(cljs.core.match._STAR_recur_present_STAR_)){
if(((cljs.core.match.empty_matrix_QMARK_(D)) && (cljs.core.seq(cljs.core.match._STAR_backtrack_stack_STAR_)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,cljs.core.peek(cljs.core.match._STAR_backtrack_stack_STAR_),cljs.core.match._STAR_backtrack_stack_STAR_], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.match._STAR_backtrack_stack_STAR_,D)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [S,D], null);
}
});
cljs.core.match.matrix_splitter = (function cljs$core$match$matrix_splitter(matrix){
var rows = cljs.core.match.rows(matrix);
var n = cljs.core.count(cljs.core.first(cljs.core.match.column_splitter(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,rows))));
var ocrs = cljs.core.match.occurrences(matrix);
var S = (function (){var G__16376 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__16377 = ocrs;
return (cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__16376,G__16377) : cljs.core.match.pattern_matrix.call(null, G__16376,G__16377));
})();
var D = (function (){var G__16378 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,rows);
var G__16379 = ocrs;
return (cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__16378,G__16379) : cljs.core.match.pattern_matrix.call(null, G__16378,G__16379));
})();
return cljs.core.match.return_split(S,D);
});
cljs.core.match.group_rows = (function cljs$core$match$group_rows(cs,rows){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (res,row){
var vec__16383 = cljs.core.peek(res);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16383,(1),null);
var c_SINGLEQUOTE_ = cljs.core.first(row);
if(cljs.core.truth_(cljs.core.match.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(c,c_SINGLEQUOTE_))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(res),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(rows__$1,row)], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)], null));
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(cs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rows)], null)], null)], null),cljs.core.rest(rows));
});
cljs.core.match.non_local_literal_pattern_QMARK_ = (function cljs$core$match$non_local_literal_pattern_QMARK_(p){
var and__5000__auto__ = (cljs.core.match.literal_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.literal_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.literal_pattern_QMARK_.call(null, p));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__5000__auto__;
}
});
cljs.core.match.literal_case_matrix_splitter = (function cljs$core$match$literal_case_matrix_splitter(matrix){
var ocrs = cljs.core.match.occurrences(matrix);
var rows = cljs.core.match.rows(matrix);
var lrows = (function (){var rows__$1 = cljs.core.seq(rows);
var res = cljs.core.PersistentVector.EMPTY;
var lits = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(rows__$1){
var vec__16395 = cljs.core.first(rows__$1);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16395,(0),null);
var row = vec__16395;
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.match.non_local_literal_pattern_QMARK_(p);
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.contains_QMARK_(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p))));
} else {
return and__5000__auto__;
}
})())){
var G__18415 = cljs.core.next(rows__$1);
var G__18416 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,row);
var G__18417 = (cljs.core.truth_(cljs.core.match.non_local_literal_pattern_QMARK_(p))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lits,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(p)):lits);
rows__$1 = G__18415;
res = G__18416;
lits = G__18417;
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
var S = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16398){
var vec__16399 = p__16398;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16399,(0),null);
var rows__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16399,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2(rows__$1,ocrs) : cljs.core.match.pattern_matrix.call(null, rows__$1,ocrs))], null);
}),cljs.core.match.group_rows(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,lrows),lrows)));
var D = (function (){var G__16402 = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lrows),rows);
var G__16403 = ocrs;
return (cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match.pattern_matrix.cljs$core$IFn$_invoke$arity$2(G__16402,G__16403) : cljs.core.match.pattern_matrix.call(null, G__16402,G__16403));
})();
return cljs.core.match.return_split(S,D);
});
cljs.core.match.default_case = (function cljs$core$match$default_case(matrix){
if((!(cljs.core.match.empty_matrix_QMARK_(matrix)))){
return (cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1(matrix) : cljs.core.match.compile.call(null, matrix));
} else {
return cljs.core.match.fail_node();
}
});
cljs.core.match.cases = (function cljs$core$match$cases(matrix){
if(cljs.core.vector_QMARK_(matrix)){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16412){
var vec__16413 = p__16412;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16413,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16413,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__16416 = cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2(m,c);
return (cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1(G__16416) : cljs.core.match.compile.call(null, G__16416));
})()], null);
}),matrix));
} else {
var rows = cljs.core.match.rows(matrix);
var c = cljs.core.ffirst(rows);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,(function (){var G__16417 = cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2(matrix,c);
return (cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1(G__16417) : cljs.core.match.compile.call(null, G__16417));
})()], null)], null);
}
});
cljs.core.match.expression_QMARK_ = (function cljs$core$match$expression_QMARK_(ocr){
return cljs.core.contains_QMARK_(cljs.core.meta(ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",-897749617));
});
cljs.core.match.bind_variables = (function cljs$core$match$bind_variables(ocrs){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (ocr){
var bind_expr = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(ocr),new cljs.core.Keyword(null,"ocr-expr","ocr-expr",-897749617),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(bind_expr,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,bind_expr], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ocr,ocr], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ocrs], 0));
});
cljs.core.match.root_bind_node = (function cljs$core$match$root_bind_node(matrix){
var ocrs = cljs.core.match.occurrences(matrix);
var node = (cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1(matrix) : cljs.core.match.compile.call(null, matrix));
if(cljs.core.truth_(cljs.core.some(cljs.core.match.expression_QMARK_,ocrs))){
return cljs.core.match.bind_node(cljs.core.match.bind_variables(ocrs),node);
} else {
return node;
}
});
/**
 * Case 1: If there are no pattern rows to match, then matching always fails
 */
cljs.core.match.empty_rows_case = (function cljs$core$match$empty_rows_case(){
return cljs.core.match.fail_node();
});
/**
 * Case 2: If the first row is empty then matching always succeeds 
 *   and yields the first action.
 */
cljs.core.match.first_row_empty_case = (function cljs$core$match$first_row_empty_case(rows,ocr){
var f = cljs.core.first(rows);
var a = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(f);
var bs = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(f);
return cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$2(a,bs);
});
/**
 * Case 2: If the first row is constituted by wildcards then matching
 *   matching always succeeds and yields the first action.
 */
cljs.core.match.first_row_wildcards_case = (function cljs$core$match$first_row_wildcards_case(rows,ocrs){
var f = cljs.core.first(rows);
var a = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(f);
var bs = cljs.core.match.row_bindings(f,ocrs);
return cljs.core.match.leaf_node.cljs$core$IFn$_invoke$arity$2(a,bs);
});
cljs.core.match.expand_matrix = (function cljs$core$match$expand_matrix(matrix,col){
var matrix__$1 = matrix;
while(true){
var p = cljs.core.first(cljs.core.match.column(matrix__$1,col));
if(cljs.core.match.pseudo_pattern_QMARK_(p)){
var G__18426 = cljs.core.match.specialize.cljs$core$IFn$_invoke$arity$2(matrix__$1,p);
matrix__$1 = G__18426;
continue;
} else {
return matrix__$1;
}
break;
}
});
cljs.core.match.split_matrix = (function cljs$core$match$split_matrix(matrix){
return cljs.core.match.matrix_splitter(matrix);
});
/**
 * Case 3a: The first column is chosen. Compute and return a
 *   switch/bind node with a default matrix case
 */
cljs.core.match.first_column_chosen_case = (function cljs$core$match$first_column_chosen_case(matrix,col,ocrs){
var expanded = cljs.core.match.expand_matrix(matrix,col);
var ocrs__$1 = cljs.core.match.occurrences(expanded);
var vec__16442 = cljs.core.match.split_matrix(expanded);
var S = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16442,(0),null);
var D = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16442,(1),null);
var split = vec__16442;
if(cljs.core.not(cljs.core.match._STAR_recur_present_STAR_)){
return cljs.core.match.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null, col)),cljs.core.match.cases(S),cljs.core.match.default_case(D));
} else {
var new_stack = cljs.core.last(split);
return cljs.core.match.switch_node((ocrs__$1.cljs$core$IFn$_invoke$arity$1 ? ocrs__$1.cljs$core$IFn$_invoke$arity$1(col) : ocrs__$1.call(null, col)),(((!((cljs.core.match._STAR_backtrack_stack_STAR_ === new_stack))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__16448 = cljs.core.match._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__16449 = new_stack;
(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__16449);

try{return cljs.core.match.cases(S);
}finally {(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__16448);
}})():cljs.core.match.cases(S)),((((cljs.core.seq(cljs.core.match._STAR_backtrack_stack_STAR_)) && ((cljs.core.peek(cljs.core.match._STAR_backtrack_stack_STAR_) === D))))?(function (){var _STAR_backtrack_stack_STAR__orig_val__16453 = cljs.core.match._STAR_backtrack_stack_STAR_;
var _STAR_backtrack_stack_STAR__temp_val__16454 = cljs.core.pop(cljs.core.match._STAR_backtrack_stack_STAR_);
(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__temp_val__16454);

try{return cljs.core.match.default_case(D);
}finally {(cljs.core.match._STAR_backtrack_stack_STAR_ = _STAR_backtrack_stack_STAR__orig_val__16453);
}})():cljs.core.match.default_case(D)));
}
});
/**
 * Case 3b: A column other than the first is chosen. Swap column 
 * col with the first column and compile the result
 */
cljs.core.match.other_column_chosen_case = (function cljs$core$match$other_column_chosen_case(matrix,col){
var G__16458 = cljs.core.match.protocols.swap(matrix,col);
return (cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.compile.cljs$core$IFn$_invoke$arity$1(G__16458) : cljs.core.match.compile.call(null, G__16458));
});
cljs.core.match.choose_column = (function cljs$core$match$choose_column(matrix){
return cljs.core.match.necessary_column(matrix);
});
cljs.core.match.compile = (function cljs$core$match$compile(p__16463){
var map__16464 = p__16463;
var map__16464__$1 = cljs.core.__destructure_map(map__16464);
var pm = map__16464__$1;
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16464__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var ocrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16464__$1,new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413));
if(cljs.core.truth_(cljs.core.match._STAR_root_STAR_)){
var _STAR_root_STAR__orig_val__16465 = cljs.core.match._STAR_root_STAR_;
var _STAR_root_STAR__temp_val__16466 = false;
(cljs.core.match._STAR_root_STAR_ = _STAR_root_STAR__temp_val__16466);

try{return cljs.core.match.root_bind_node(pm);
}finally {(cljs.core.match._STAR_root_STAR_ = _STAR_root_STAR__orig_val__16465);
}} else {
if(cljs.core.empty_QMARK_(rows)){
return cljs.core.match.empty_rows_case();
} else {
if(cljs.core.match.empty_row_QMARK_(cljs.core.first(rows))){
return cljs.core.match.first_row_empty_case(rows,cljs.core.first(ocrs));
} else {
if(cljs.core.match.all_wildcards_QMARK_(cljs.core.first(rows))){
return cljs.core.match.first_row_wildcards_case(rows,ocrs);
} else {
var col = cljs.core.match.choose_column(pm);
if(cljs.core.match.first_column_QMARK_(col)){
return cljs.core.match.first_column_chosen_case(pm,col,ocrs);
} else {
return cljs.core.match.other_column_chosen_case(pm,col);
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16470,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16478 = k16470;
var G__16478__$1 = (((G__16478 instanceof cljs.core.Keyword))?G__16478.fqn:null);
switch (G__16478__$1) {
case "rows":
return self__.rows;

break;
case "ocrs":
return self__.ocrs;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16470,else__5303__auto__);

}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16479){
var vec__16480 = p__16479;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16480,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16480,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#cljs.core.match.PatternMatrix{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),self__.ocrs],null))], null),self__.__extmap));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16469){
var self__ = this;
var G__16469__$1 = this;
return (new cljs.core.RecordIter((0),G__16469__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-2047848843 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16471,other16472){
var self__ = this;
var this16471__$1 = this;
return (((!((other16472 == null)))) && ((((this16471__$1.constructor === other16472.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16471__$1.rows,other16472.rows)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16471__$1.ocrs,other16472.ocrs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16471__$1.__extmap,other16472.__extmap)))))))));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 = (function (_,i){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16467_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__16467_SHARP_,i);
}),self__.rows));
return (new cljs.core.match.PatternMatrix(nrows,self__.ocrs,null,null,null));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$match$protocols$IVecMod$swap$arity$2 = (function (_,idx){
var self__ = this;
var ___$1 = this;
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16468_SHARP_){
return cljs.core.match.protocols.swap(p1__16468_SHARP_,idx);
}),self__.rows));
return (new cljs.core.match.PatternMatrix(nrows,cljs.core.match.protocols.swap(self__.ocrs,idx),null,null,null));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),null,new cljs.core.Keyword(null,"rows","rows",850049680),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16470){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16487 = k16470;
var G__16487__$1 = (((G__16487 instanceof cljs.core.Keyword))?G__16487.fqn:null);
switch (G__16487__$1) {
case "rows":
case "ocrs":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16470);

}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16469){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16488 = cljs.core.keyword_identical_QMARK_;
var expr__16489 = k__5309__auto__;
if(cljs.core.truth_((pred__16488.cljs$core$IFn$_invoke$arity$2 ? pred__16488.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rows","rows",850049680),expr__16489) : pred__16488.call(null, new cljs.core.Keyword(null,"rows","rows",850049680),expr__16489)))){
return (new cljs.core.match.PatternMatrix(G__16469,self__.ocrs,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__16488.cljs$core$IFn$_invoke$arity$2 ? pred__16488.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__16489) : pred__16488.call(null, new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),expr__16489)))){
return (new cljs.core.match.PatternMatrix(self__.rows,G__16469,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16469),null));
}
}
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rows","rows",850049680),self__.rows,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413),self__.ocrs,null))], null),self__.__extmap));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16469){
var self__ = this;
var this__5299__auto____$1 = this;
return (new cljs.core.match.PatternMatrix(self__.rows,self__.ocrs,G__16469,self__.__extmap,self__.__hash));
}));

(cljs.core.match.PatternMatrix.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(cljs.core.match.PatternMatrix.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"rows","rows",-1804386089,null),new cljs.core.Symbol(null,"ocrs","ocrs",-195684886,null)], null);
}));

(cljs.core.match.PatternMatrix.cljs$lang$type = true);

(cljs.core.match.PatternMatrix.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"cljs.core.match/PatternMatrix",null,(1),null));
}));

(cljs.core.match.PatternMatrix.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"cljs.core.match/PatternMatrix");
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
cljs.core.match.map__GT_PatternMatrix = (function cljs$core$match$map__GT_PatternMatrix(G__16477){
var extmap__5342__auto__ = (function (){var G__16493 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__16477,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413)], 0));
if(cljs.core.record_QMARK_(G__16477)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16493);
} else {
return G__16493;
}
})();
return (new cljs.core.match.PatternMatrix(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(G__16477),new cljs.core.Keyword(null,"ocrs","ocrs",-1836216413).cljs$core$IFn$_invoke$arity$1(G__16477),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

cljs.core.match.pattern_matrix = (function cljs$core$match$pattern_matrix(rows,ocrs){
var rows__$1 = ((cljs.core.vector_QMARK_(rows))?rows:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,rows));
var ocrs__$1 = ((cljs.core.vector_QMARK_(ocrs))?ocrs:cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,ocrs));
return (new cljs.core.match.PatternMatrix(rows__$1,ocrs__$1,null,null,null));
});
cljs.core.match.default_specialize_matrix = (function cljs$core$match$default_specialize_matrix(p,matrix){
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var focr = cljs.core.first(ocrs);
var nrows = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16496_SHARP_){
return cljs.core.match.drop_nth_bind(p1__16496_SHARP_,(0),focr);
}),rows));
var nocrs = cljs.core.match.protocols.drop_nth(ocrs,(0));
return cljs.core.match.pattern_matrix(nrows,nocrs);
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
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
var and__5000__auto__ = (other instanceof cljs.core.match.WildcardPattern);
if(and__5000__auto__){
if(cljs.core.truth_(self__.named)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.sym,new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(other));
} else {
return cljs.core.not(new cljs.core.Keyword(null,"named","named",-422393479).cljs$core$IFn$_invoke$arity$1(other));
}
} else {
return and__5000__auto__;
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.WildcardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__16501 = k;
var G__16501__$1 = (((G__16501 instanceof cljs.core.Keyword))?G__16501.fqn:null);
switch (G__16501__$1) {
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
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sym","sym",195671222,null),new cljs.core.Symbol(null,"named","named",1218138048,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.WildcardPattern.cljs$lang$type = true);

(cljs.core.match.WildcardPattern.cljs$lang$ctorStr = "cljs.core.match/WildcardPattern");

(cljs.core.match.WildcardPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/WildcardPattern");
}));

/**
 * Positional factory function for cljs.core.match/WildcardPattern.
 */
cljs.core.match.__GT_WildcardPattern = (function cljs$core$match$__GT_WildcardPattern(sym,named,_meta){
return (new cljs.core.match.WildcardPattern(sym,named,_meta));
});

cljs.core.match.wildcard_pattern = (function cljs$core$match$wildcard_pattern(var_args){
var G__16511 = arguments.length;
switch (G__16511) {
case 0:
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"_","_",-1201019570,null));
}));

(cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1 = (function (sym){
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? sym)"));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sym,new cljs.core.Symbol(null,"_","_",-1201019570,null))){
return (new cljs.core.match.WildcardPattern(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),false,null));
} else {
return (new cljs.core.match.WildcardPattern(sym,true,null));
}
}));

(cljs.core.match.wildcard_pattern.cljs$lang$maxFixedArity = 1);

cljs.core.match.wildcard_pattern_QMARK_ = (function cljs$core$match$wildcard_pattern_QMARK_(x){
return (x instanceof cljs.core.match.WildcardPattern);
});
cljs.core.match.named_wildcard_pattern_QMARK_ = (function cljs$core$match$named_wildcard_pattern_QMARK_(x){
var and__5000__auto__ = (x instanceof cljs.core.match.WildcardPattern);
if(and__5000__auto__){
return new cljs.core.Keyword(null,"named","named",-422393479).cljs$core$IFn$_invoke$arity$1(x);
} else {
return and__5000__auto__;
}
});

/**
* @constructor
 * @implements {cljs.core.match.protocols.IPatternCompile}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
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
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.l], 0));
}
}));

(cljs.core.match.LiteralPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.LiteralPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.l,new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.LiteralPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__16517 = k;
var G__16517__$1 = (((G__16517 instanceof cljs.core.Keyword))?G__16517.fqn:null);
switch (G__16517__$1) {
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

(cljs.core.match.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.LiteralPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.l,cljs.core.List.EMPTY)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)))));
} else {
if((((self__.l instanceof cljs.core.Symbol)) && (cljs.core.not(new cljs.core.Keyword(null,"local","local",-1497766724).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(self__.l)))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,self__.l,null,(1),null))))),null,(1),null))], 0))));
} else {
if(((typeof self__.l === 'number') || (((typeof self__.l === 'string') || (((self__.l === true) || (((self__.l === false) || ((self__.l == null)))))))))){
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

(cljs.core.match.LiteralPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"l","l",-1258542346,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.LiteralPattern.cljs$lang$type = true);

(cljs.core.match.LiteralPattern.cljs$lang$ctorStr = "cljs.core.match/LiteralPattern");

(cljs.core.match.LiteralPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/LiteralPattern");
}));

/**
 * Positional factory function for cljs.core.match/LiteralPattern.
 */
cljs.core.match.__GT_LiteralPattern = (function cljs$core$match$__GT_LiteralPattern(l,_meta){
return (new cljs.core.match.LiteralPattern(l,_meta));
});

cljs.core.match.literal_pattern = (function cljs$core$match$literal_pattern(l){
return (new cljs.core.match.LiteralPattern(l,cljs.core.meta(l)));
});
cljs.core.match.literal_pattern_QMARK_ = (function cljs$core$match$literal_pattern_QMARK_(x){
return (x instanceof cljs.core.match.LiteralPattern);
});


cljs.core.match.specialize_seq_pattern_rest_row = (function cljs$core$match$specialize_seq_pattern_rest_row(focr,row){
var p = cljs.core.first(row);
var p__$1 = (cljs.core.truth_((cljs.core.match.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.seq_pattern_QMARK_.call(null, p)))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p))):cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0());
return cljs.core.match.drop_nth_bind(row,(0),focr).cljs$core$match$protocols$IVecMod$prepend$arity$2(null, p__$1);
});
cljs.core.match.specialize_seq_pattern_rest_matrix = (function cljs$core$match$specialize_seq_pattern_rest_matrix(rows,focr){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.match.specialize_seq_pattern_rest_row,focr),rows));
});
cljs.core.match.seq_pattern_matrix_rest_ocrs = (function cljs$core$match$seq_pattern_matrix_rest_ocrs(ocrs,focr){
return ocrs;
});
cljs.core.match.specialize_seq_pattern_row = (function cljs$core$match$specialize_seq_pattern_row(focr,row){
var p = cljs.core.first(row);
var vec__16535 = (cljs.core.truth_((cljs.core.match.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.seq_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.seq_pattern_QMARK_.call(null, p)))?(function (){var vec__16538 = new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p);
var seq__16539 = cljs.core.seq(vec__16538);
var first__16540 = cljs.core.first(seq__16539);
var seq__16539__$1 = cljs.core.next(seq__16539);
var h = first__16540;
var t = seq__16539__$1;
var t__$1 = ((cljs.core.empty_QMARK_(t))?cljs.core.match.literal_pattern(cljs.core.List.EMPTY):(cljs.core.truth_((function (){var G__16541 = cljs.core.first(t);
return (cljs.core.match.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16541) : cljs.core.match.rest_pattern_QMARK_.call(null, G__16541));
})())?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(t)):(cljs.core.match.seq_pattern.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.seq_pattern.cljs$core$IFn$_invoke$arity$1(t) : cljs.core.match.seq_pattern.call(null, t))
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,t__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null));
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16535,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind(row,(0),focr),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,h], null));
});
cljs.core.match.specialize_seq_pattern_matrix = (function cljs$core$match$specialize_seq_pattern_matrix(rows,focr){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.match.specialize_seq_pattern_row,focr),rows));
});
cljs.core.match.seq_pattern_matrix_ocrs = (function cljs$core$match$seq_pattern_matrix_ocrs(ocrs,focr){
var seq_sym = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"seq-sym","seq-sym",-525219406).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(focr));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.SeqPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__16556 = k;
var G__16556__$1 = (((G__16556 instanceof cljs.core.Keyword))?G__16556.fqn:null);
switch (G__16556__$1) {
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

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
if((((cljs.core.count(self__.s) >= (1))) && (cljs.core.not((function (){var G__16557 = cljs.core.first(self__.s);
return (cljs.core.match.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16557) : cljs.core.match.rest_pattern_QMARK_.call(null, G__16557));
})())))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","sequential?","cljs.core/sequential?",1777854658,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null))))),null,(1),null))], 0))));
}
}));

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.SeqPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var focr = cljs.core.first(ocrs);
if(cljs.core.not((function (){var G__16564 = cljs.core.first(self__.s);
return (cljs.core.match.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.rest_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(G__16564) : cljs.core.match.rest_pattern_QMARK_.call(null, G__16564));
})())){
var nrows = cljs.core.match.specialize_seq_pattern_matrix(rows,focr);
var nocrs = cljs.core.match.seq_pattern_matrix_ocrs(ocrs,focr);
return cljs.core.match.pattern_matrix(nrows,nocrs);
} else {
var nrows = cljs.core.match.specialize_seq_pattern_rest_matrix(rows,focr);
var nocrs = cljs.core.match.seq_pattern_matrix_rest_ocrs(ocrs,focr);
return cljs.core.match.pattern_matrix(nrows,nocrs);
}
}));

(cljs.core.match.SeqPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.SeqPattern.cljs$lang$type = true);

(cljs.core.match.SeqPattern.cljs$lang$ctorStr = "cljs.core.match/SeqPattern");

(cljs.core.match.SeqPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/SeqPattern");
}));

/**
 * Positional factory function for cljs.core.match/SeqPattern.
 */
cljs.core.match.__GT_SeqPattern = (function cljs$core$match$__GT_SeqPattern(s,_meta){
return (new cljs.core.match.SeqPattern(s,_meta));
});

cljs.core.match.seq_pattern = (function cljs$core$match$seq_pattern(s){
if(cljs.core.sequential_QMARK_(s)){
} else {
throw (new Error("Assert failed: (sequential? s)"));
}

if((!(cljs.core.empty_QMARK_(s)))){
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16570,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16579 = k16570;
var G__16579__$1 = (((G__16579 instanceof cljs.core.Keyword))?G__16579.fqn:null);
switch (G__16579__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16570,else__5303__auto__);

}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16583){
var vec__16584 = p__16583;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16584,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16584,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#cljs.core.match.RestPattern{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16569){
var self__ = this;
var G__16569__$1 = this;
return (new cljs.core.RecordIter((0),G__16569__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (1490450147 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16571,other16572){
var self__ = this;
var this16571__$1 = this;
return (((!((other16572 == null)))) && ((((this16571__$1.constructor === other16572.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.p,other16572.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16571__$1.__extmap,other16572.__extmap)))))));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16570){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16606 = k16570;
var G__16606__$1 = (((G__16606 instanceof cljs.core.Keyword))?G__16606.fqn:null);
switch (G__16606__$1) {
case "p":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16570);

}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16569){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16610 = cljs.core.keyword_identical_QMARK_;
var expr__16611 = k__5309__auto__;
if(cljs.core.truth_((pred__16610.cljs$core$IFn$_invoke$arity$2 ? pred__16610.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__16611) : pred__16610.call(null, new cljs.core.Keyword(null,"p","p",151049309),expr__16611)))){
return (new cljs.core.match.RestPattern(G__16569,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.RestPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16569),null));
}
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16569){
var self__ = this;
var this__5299__auto____$1 = this;
return (new cljs.core.match.RestPattern(self__.p,G__16569,self__.__extmap,self__.__hash));
}));

(cljs.core.match.RestPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(cljs.core.match.RestPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(cljs.core.match.RestPattern.cljs$lang$type = true);

(cljs.core.match.RestPattern.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"cljs.core.match/RestPattern",null,(1),null));
}));

(cljs.core.match.RestPattern.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"cljs.core.match/RestPattern");
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
cljs.core.match.map__GT_RestPattern = (function cljs$core$match$map__GT_RestPattern(G__16577){
var extmap__5342__auto__ = (function (){var G__16621 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16577,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__16577)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16621);
} else {
return G__16621;
}
})();
return (new cljs.core.match.RestPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__16577),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

cljs.core.match.rest_pattern = (function cljs$core$match$rest_pattern(p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cljs.core.match.RestPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477),new cljs.core.Keyword("cljs.core.match","rest","cljs.core.match/rest",-410436433));
});
cljs.core.match.rest_pattern_QMARK_ = (function cljs$core$match$rest_pattern_QMARK_(x){
return (x instanceof cljs.core.match.RestPattern);
});
cljs.core.match.specialize_map_key_pattern_matrix = (function cljs$core$match$specialize_map_key_pattern_matrix(rows){
var p = new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(rows));
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16627_SHARP_){
return cljs.core.match.protocols.prepend(p1__16627_SHARP_,p);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16626_SHARP_){
return cljs.core.match.protocols.drop_nth(p1__16626_SHARP_,(0));
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
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not=","cljs.core/not=",1017572457,null),null,(1),null)),(new cljs.core.List(null,ocr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222),null,(1),null))], 0))));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null, k__5301__auto__,null);
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k16631,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__16639 = k16631;
var G__16639__$1 = (((G__16639 instanceof cljs.core.Keyword))?G__16639.fqn:null);
switch (G__16639__$1) {
case "p":
return self__.p;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k16631,else__5303__auto__);

}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__16645){
var vec__16646 = p__16645;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16646,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16646,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null, ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#cljs.core.match.MapKeyPattern{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"p","p",151049309),self__.p],null))], null),self__.__extmap));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__16630){
var self__ = this;
var G__16630__$1 = this;
return (new cljs.core.RecordIter((0),G__16630__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,self__.__extmap,self__.__hash));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1368676066 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this16632,other16633){
var self__ = this;
var this16632__$1 = this;
return (((!((other16633 == null)))) && ((((this16632__$1.constructor === other16633.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16632__$1.p,other16633.p)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this16632__$1.__extmap,other16633.__extmap)))))));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$IExistentialPattern$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapKeyPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var nrows = cljs.core.match.specialize_map_key_pattern_matrix(rows);
return cljs.core.match.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p","p",151049309),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k16631){
var self__ = this;
var this__5307__auto____$1 = this;
var G__16653 = k16631;
var G__16653__$1 = (((G__16653 instanceof cljs.core.Keyword))?G__16653.fqn:null);
switch (G__16653__$1) {
case "p":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k16631);

}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__16630){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__16657 = cljs.core.keyword_identical_QMARK_;
var expr__16658 = k__5309__auto__;
if(cljs.core.truth_((pred__16657.cljs$core$IFn$_invoke$arity$2 ? pred__16657.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p","p",151049309),expr__16658) : pred__16657.call(null, new cljs.core.Keyword(null,"p","p",151049309),expr__16658)))){
return (new cljs.core.match.MapKeyPattern(G__16630,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.core.match.MapKeyPattern(self__.p,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__16630),null));
}
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"p","p",151049309),self__.p,null))], null),self__.__extmap));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__16630){
var self__ = this;
var this__5299__auto____$1 = this;
return (new cljs.core.match.MapKeyPattern(self__.p,G__16630,self__.__extmap,self__.__hash));
}));

(cljs.core.match.MapKeyPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null, cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(cljs.core.match.MapKeyPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null)], null);
}));

(cljs.core.match.MapKeyPattern.cljs$lang$type = true);

(cljs.core.match.MapKeyPattern.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"cljs.core.match/MapKeyPattern",null,(1),null));
}));

(cljs.core.match.MapKeyPattern.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"cljs.core.match/MapKeyPattern");
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
cljs.core.match.map__GT_MapKeyPattern = (function cljs$core$match$map__GT_MapKeyPattern(G__16634){
var extmap__5342__auto__ = (function (){var G__16662 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__16634,new cljs.core.Keyword(null,"p","p",151049309));
if(cljs.core.record_QMARK_(G__16634)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16662);
} else {
return G__16662;
}
})();
return (new cljs.core.match.MapKeyPattern(new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(G__16634),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

cljs.core.match.map_key_pattern = (function cljs$core$match$map_key_pattern(p){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((new cljs.core.match.MapKeyPattern(p,null,null,null)),new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477),new cljs.core.Keyword("cljs.core.match","map-key","cljs.core.match/map-key",852254431));
});
cljs.core.match.map_key_pattern_QMARK_ = (function cljs$core$match$map_key_pattern_QMARK_(x){
return (x instanceof cljs.core.match.MapKeyPattern);
});

cljs.core.match.row_keys = (function cljs$core$match$row_keys(row,env){
var p = cljs.core.first(row);
var only = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p));
if(((cljs.core.not(cljs.core.deref(new cljs.core.Keyword(null,"only?","only?",504823581).cljs$core$IFn$_invoke$arity$1(env)))) && (cljs.core.seq(only)))){
cljs.core.reset_BANG_(new cljs.core.Keyword(null,"only?","only?",504823581).cljs$core$IFn$_invoke$arity$1(env),true);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(p))),cljs.core.set(only)], null);
});
cljs.core.match.get_all_keys = (function cljs$core$match$get_all_keys(rows,env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16671_SHARP_){
return cljs.core.match.row_keys(p1__16671_SHARP_,env);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.match.wildcard_pattern_QMARK_,cljs.core.first),rows))));
});
cljs.core.match.wrap_values = (function cljs$core$match$wrap_values(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16674){
var vec__16675 = p__16674;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16675,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16675,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,((cljs.core.match.wildcard_pattern_QMARK_(v))?cljs.core.match.map_key_pattern(v):v)], null);
}),m));
});
cljs.core.match.get_ocr_map = (function cljs$core$match$get_ocr_map(p,p__16680){
var map__16681 = p__16680;
var map__16681__$1 = cljs.core.__destructure_map(map__16681);
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16681__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16681__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var wc_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16681__$1,new cljs.core.Keyword(null,"wc-map","wc-map",-57721646));
if(cljs.core.truth_((cljs.core.match.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.map_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.map_pattern_QMARK_.call(null, p)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(only)?cljs.core.zipmap(all_keys,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.match.literal_pattern(new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)))):null),wc_map,cljs.core.match.wrap_values(new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(p))], 0));
} else {
return wc_map;
}
});
cljs.core.match.specialize_map_pattern_row = (function cljs$core$match$specialize_map_pattern_row(row,p__16682){
var map__16683 = p__16682;
var map__16683__$1 = cljs.core.__destructure_map(map__16683);
var env = map__16683__$1;
var all_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16683__$1,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070));
var only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16683__$1,new cljs.core.Keyword(null,"only?","only?",504823581));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16683__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var p = cljs.core.first(row);
var only = cljs.core.seq(new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
var ocr_map = cljs.core.match.get_ocr_map(p,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"only","only",1907811652),only));
var ps = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(ocr_map,all_keys));
var ps__$1 = (cljs.core.truth_(cljs.core.deref(only_QMARK_))?((only)?(function (){var a = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"java.util.Map","java.util.Map",981564201,null)], null));
return cljs.core.cons((function (){var G__16685 = cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0();
var G__16686 = cljs.core.set(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,a,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","set","cljs.core/set",724680876,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keys","cljs.core/keys",-927561820,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(only)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null));
return (cljs.core.match.guard_pattern.cljs$core$IFn$_invoke$arity$2 ? cljs.core.match.guard_pattern.cljs$core$IFn$_invoke$arity$2(G__16685,G__16686) : cljs.core.match.guard_pattern.call(null, G__16685,G__16686));
})(),ps);
})():cljs.core.cons(cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),ps)):ps);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps__$1));
});
cljs.core.match.specialize_map_pattern_matrix = (function cljs$core$match$specialize_map_pattern_matrix(rows,env){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16693_SHARP_){
return cljs.core.match.specialize_map_pattern_row(p1__16693_SHARP_,env);
}),rows));
});
cljs.core.match.gen_map_pattern_ocr = (function cljs$core$match$gen_map_pattern_ocr(ocr,k){
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(ocr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k).replace(".","_DOT_")),"__"].join(''));
});
cljs.core.match.map_pattern_matrix_ocr_sym = (function cljs$core$match$map_pattern_matrix_ocr_sym(k,env){
var focr = new cljs.core.Keyword(null,"focr","focr",-820561400).cljs$core$IFn$_invoke$arity$1(env);
var ocr = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ocrs-map","ocrs-map",76084823),k], null));
return cljs.core.with_meta(ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map-sym","map-sym",1467543192),focr,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.match.val_at_expr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([focr,k,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)], 0))], null));
});
cljs.core.match.map_pattern_matrix_ocrs = (function cljs$core$match$map_pattern_matrix_ocrs(ocrs,env){
var focr = new cljs.core.Keyword(null,"focr","focr",-820561400).cljs$core$IFn$_invoke$arity$1(env);
var mocrs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16698_SHARP_){
return cljs.core.match.map_pattern_matrix_ocr_sym(p1__16698_SHARP_,env);
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
cljs.core.match.MapPattern = (function (m,_meta){
this.m = m;
this._meta = _meta;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.match.MapPattern.prototype.toString = (function (){
var self__ = this;
var _ = this;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.m)," :only ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(self__._meta);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})())].join('');
}));

(cljs.core.match.MapPattern.prototype.equals = (function (other){
var self__ = this;
var _ = this;
return (((other instanceof cljs.core.match.MapPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.m,new cljs.core.Keyword(null,"m","m",1632677161).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.MapPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__16713 = k;
var G__16713__$1 = (((G__16713 instanceof cljs.core.Keyword))?G__16713.fqn:null);
switch (G__16713__$1) {
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

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","satisfies?","cljs.core/satisfies?",-1074798682,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ILookup","cljs.core/ILookup",-150575073,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ocr,null,(1),null))], 0))));
}));

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.MapPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var focr = cljs.core.first(ocrs);
var env = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"focr","focr",-820561400),focr,new cljs.core.Keyword(null,"only?","only?",504823581),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false)], null);
var all_keys = cljs.core.match.get_all_keys(rows,env);
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"all-keys","all-keys",-1041756070),all_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"wc-map","wc-map",-57721646),cljs.core.zipmap(all_keys,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.match.wildcard_pattern)),new cljs.core.Keyword(null,"ocrs-map","ocrs-map",76084823),cljs.core.zipmap(all_keys,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16701_SHARP_){
return cljs.core.match.gen_map_pattern_ocr(focr,p1__16701_SHARP_);
}),all_keys))], 0));
var nrows = cljs.core.match.specialize_map_pattern_matrix(rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match.map_pattern_matrix_ocrs(ocrs,env_SINGLEQUOTE_);
return cljs.core.match.pattern_matrix(nrows,nocrs);
}));

(cljs.core.match.MapPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.MapPattern.cljs$lang$type = true);

(cljs.core.match.MapPattern.cljs$lang$ctorStr = "cljs.core.match/MapPattern");

(cljs.core.match.MapPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/MapPattern");
}));

/**
 * Positional factory function for cljs.core.match/MapPattern.
 */
cljs.core.match.__GT_MapPattern = (function cljs$core$match$__GT_MapPattern(m,_meta){
return (new cljs.core.match.MapPattern(m,_meta));
});

cljs.core.match.map_pattern = (function cljs$core$match$map_pattern(var_args){
var G__16722 = arguments.length;
switch (G__16722) {
case 0:
return cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
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
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error("Assert failed: (map? m)"));
}

return (new cljs.core.match.MapPattern(m,null));
}));

(cljs.core.match.map_pattern.cljs$lang$maxFixedArity = 1);

cljs.core.match.map_pattern_QMARK_ = (function cljs$core$match$map_pattern_QMARK_(x){
return (x instanceof cljs.core.match.MapPattern);
});
cljs.core.match.calc_rest_QMARK__and_min_size = (function cljs$core$match$calc_rest_QMARK__and_min_size(rows,env){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__16727,p__16728){
var vec__16729 = p__16727;
var rest_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16729,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16729,(1),null);
var vec__16732 = p__16728;
var seq__16733 = cljs.core.seq(vec__16732);
var first__16734 = cljs.core.first(seq__16733);
var seq__16733__$1 = cljs.core.next(seq__16733);
var p = first__16734;
var ps = seq__16733__$1;
if(cljs.core.truth_((cljs.core.match.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.vector_pattern_QMARK_.call(null, p)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__5002__auto__ = rest_QMARK_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(p);
}
})(),(function (){var x__5090__auto__ = min_size;
var y__5091__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(p);
return ((x__5090__auto__ < y__5091__auto__) ? x__5090__auto__ : y__5091__auto__);
})()], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rest_QMARK_,min_size], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fp","fp",-469175650).cljs$core$IFn$_invoke$arity$1(env))], null),rows);
});
cljs.core.match.specialize_vector_pattern_row = (function cljs$core$match$specialize_vector_pattern_row(row,p__16737){
var map__16738 = p__16737;
var map__16738__$1 = cljs.core.__destructure_map(map__16738);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16738__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16738__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.vector_pattern_QMARK_.call(null, p)))?cljs.core.match.protocols.split(p,min_size):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0(),cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()], null)
);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind(row,(0),focr),cljs.core.reverse(ps));
});
cljs.core.match.specialize_vector_pattern_row_non_rest = (function cljs$core$match$specialize_vector_pattern_row_non_rest(row,p__16739){
var map__16740 = p__16739;
var map__16740__$1 = cljs.core.__destructure_map(map__16740);
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16740__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16740__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var p = cljs.core.first(row);
var ps = (cljs.core.truth_((cljs.core.match.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.vector_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.vector_pattern_QMARK_.call(null, p)))?cljs.core.reverse(new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(p)):cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(min_size,cljs.core.match.wildcard_pattern));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.match.protocols.prepend,cljs.core.match.drop_nth_bind(row,(0),focr),ps);
});
cljs.core.match.specialize_vector_pattern_matrix = (function cljs$core$match$specialize_vector_pattern_matrix(rows,env){
if(cljs.core.truth_(new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16741_SHARP_){
return cljs.core.match.specialize_vector_pattern_row(p1__16741_SHARP_,env);
}),rows));
} else {
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16891_SHARP_){
return cljs.core.match.specialize_vector_pattern_row_non_rest(p1__16891_SHARP_,env);
}),rows));
}
});
cljs.core.match.vector_pattern_ocr_sym = (function cljs$core$match$vector_pattern_ocr_sym(p__16892,i){
var map__16893 = p__16892;
var map__16893__$1 = cljs.core.__destructure_map(map__16893);
var pat = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16893__$1,new cljs.core.Keyword(null,"pat","pat",-1417570164));
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16893__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16893__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var ocr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(focr),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
return cljs.core.with_meta(ocr,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",-1671818864),focr,new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),(function (){var temp__5802__auto__ = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(pat);
if(cljs.core.truth_(temp__5802__auto__)){
var offset = temp__5802__auto__;
return cljs.core.match.nth_offset_inline.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.match.with_tag(tag,focr),i,offset);
} else {
return cljs.core.match.nth_inline.cljs$core$IFn$_invoke$arity$3(tag,cljs.core.match.with_tag(tag,focr),i);
}
})()], null));
});
cljs.core.match.vector_pattern_matrix_ocrs = (function cljs$core$match$vector_pattern_matrix_ocrs(ocrs,p__16894){
var map__16895 = p__16894;
var map__16895__$1 = cljs.core.__destructure_map(map__16895);
var env = map__16895__$1;
var focr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16895__$1,new cljs.core.Keyword(null,"focr","focr",-820561400));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16895__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var min_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16895__$1,new cljs.core.Keyword(null,"min-size","min-size",1058361905));
var rest_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16895__$1,new cljs.core.Keyword(null,"rest?","rest?",345335951));
if(cljs.core.truth_(rest_QMARK_)){
var ocr_meta = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"occurrence-type","occurrence-type",-1111165873),tag,new cljs.core.Keyword(null,"vec-sym","vec-sym",-1671818864),focr], null);
var vl_ocr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(focr),"_left__"].join(''));
var vl_ocr__$1 = cljs.core.with_meta(vl_ocr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.match.subvec_inline.cljs$core$IFn$_invoke$arity$4(tag,cljs.core.match.with_tag(tag,focr),(0),min_size)));
var vr_ocr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.name(focr),"_right__"].join(''));
var vr_ocr__$1 = cljs.core.with_meta(vr_ocr,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ocr_meta,new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.match.subvec_inline.cljs$core$IFn$_invoke$arity$3(tag,cljs.core.match.with_tag(tag,focr),min_size)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vl_ocr__$1,vr_ocr__$1], null),cljs.core.match.protocols.drop_nth(ocrs,(0)));
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.match.vector_pattern_ocr_sym,env),cljs.core.range.cljs$core$IFn$_invoke$arity$1(min_size)),cljs.core.match.protocols.drop_nth(ocrs,(0)));
}
});
cljs.core.match.array_tag = (function cljs$core$match$array_tag(x){
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
return (((other instanceof cljs.core.match.VectorPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.v,self__.t,self__.size,self__.offset,self__.rest_QMARK_], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16906_SHARP_){
return (p1__16906_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16906_SHARP_.cljs$core$IFn$_invoke$arity$1(other) : p1__16906_SHARP_.call(null, other));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"rest?","rest?",345335951)], null)))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__16917 = k;
var G__16917__$1 = (((G__16917 instanceof cljs.core.Keyword))?G__16917.fqn:null);
switch (G__16917__$1) {
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

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
var t__$1 = (function (){var or__5002__auto__ = cljs.core.match.array_tag(ocr);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return self__.t;
}
})();
if(cljs.core.truth_(cljs.core.match.check_size_QMARK_.cljs$core$IFn$_invoke$arity$1(t__$1))){
if(cljs.core.truth_(self__.rest_QMARK_)){
return cljs.core.match.test_with_min_size_inline.cljs$core$IFn$_invoke$arity$3(t__$1,ocr,self__.size);
} else {
return cljs.core.match.test_with_size_inline.cljs$core$IFn$_invoke$arity$3(t__$1,ocr,self__.size);
}
} else {
return cljs.core.match.test_inline.cljs$core$IFn$_invoke$arity$2(t__$1,ocr);
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
var lv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(self__.v,(0),n);
var rv = cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(self__.v,n);
var pl = (new cljs.core.match.VectorPattern(lv,self__.t,n,self__.offset,false,self__._meta));
var pr = ((cljs.core.match.rest_pattern_QMARK_(cljs.core.first(rv)))?new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(rv)):(function (){var rest_QMARK___$1 = cljs.core.some(cljs.core.match.rest_pattern_QMARK_,rv);
var rvc = cljs.core.count(rv);
var size__$1 = (cljs.core.truth_(rest_QMARK___$1)?(rvc - (1)):rvc);
return (new cljs.core.match.VectorPattern(rv,self__.t,size__$1,n,rest_QMARK___$1,self__._meta));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pl,pr], null);
}));

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.VectorPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var focr = cljs.core.first(ocrs);
var env = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"focr","focr",-820561400),focr,new cljs.core.Keyword(null,"fp","fp",-469175650),cljs.core.ffirst(rows),new cljs.core.Keyword(null,"pat","pat",-1417570164),this$__$1], null);
var vec__16947 = cljs.core.match.calc_rest_QMARK__and_min_size(rows,env);
var rest_QMARK___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16947,(0),null);
var min_size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16947,(1),null);
var env_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"rest?","rest?",345335951),rest_QMARK___$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"min-size","min-size",1058361905),min_size,new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var or__5002__auto__ = cljs.core.match.array_tag(focr);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"t","t",-1397832519).cljs$core$IFn$_invoke$arity$1(this$__$1);
}
})()], 0));
var nrows = cljs.core.match.specialize_vector_pattern_matrix(rows,env_SINGLEQUOTE_);
var nocrs = cljs.core.match.vector_pattern_matrix_ocrs(ocrs,env_SINGLEQUOTE_);
return cljs.core.match.pattern_matrix(nrows,nocrs);
}));

(cljs.core.match.VectorPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"size","size",-1555742762,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"rest?","rest?",1985867478,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.VectorPattern.cljs$lang$type = true);

(cljs.core.match.VectorPattern.cljs$lang$ctorStr = "cljs.core.match/VectorPattern");

(cljs.core.match.VectorPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/VectorPattern");
}));

/**
 * Positional factory function for cljs.core.match/VectorPattern.
 */
cljs.core.match.__GT_VectorPattern = (function cljs$core$match$__GT_VectorPattern(v,t,size,offset,rest_QMARK_,_meta){
return (new cljs.core.match.VectorPattern(v,t,size,offset,rest_QMARK_,_meta));
});

cljs.core.match.vector_pattern = (function cljs$core$match$vector_pattern(var_args){
var G__16976 = arguments.length;
switch (G__16976) {
case 0:
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),null,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$1 = (function (v){
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4(v,new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),null,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$2 = (function (v,t){
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4(v,t,null,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$3 = (function (v,t,offset){
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4(v,t,offset,null);
}));

(cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4 = (function (v,t,offset,rest_QMARK_){
if(cljs.core.vector_QMARK_(v)){
} else {
throw (new Error("Assert failed: (vector? v)"));
}

var c = cljs.core.count(v);
var size = (cljs.core.truth_(rest_QMARK_)?(c - (1)):c);
return (new cljs.core.match.VectorPattern(v,t,size,offset,rest_QMARK_,null));
}));

(cljs.core.match.vector_pattern.cljs$lang$maxFixedArity = 4);

cljs.core.match.vector_pattern_QMARK_ = (function cljs$core$match$vector_pattern_QMARK_(x){
return (x instanceof cljs.core.match.VectorPattern);
});
cljs.core.match.specialize_or_pattern_row = (function cljs$core$match$specialize_or_pattern_row(row,pat,ps){
var p = cljs.core.first(row);
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.match.groupable_QMARK_.cljs$core$IFn$_invoke$arity$2(pat,p);
if(cljs.core.truth_(and__5000__auto__)){
return (!(cljs.core.match.wildcard_pattern_QMARK_(p)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__$1){
return cljs.core.match.update_pattern(row,(0),p__$1);
}),ps);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null);
}
});
cljs.core.match.specialize_or_pattern_matrix = (function cljs$core$match$specialize_or_pattern_matrix(rows,pat,ps){
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17006_SHARP_){
return cljs.core.match.specialize_or_pattern_row(p1__17006_SHARP_,pat,ps);
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
return (((other instanceof cljs.core.match.OrPattern)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.ps,new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(other))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.OrPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__17013 = k;
var G__17013__$1 = (((G__17013 instanceof cljs.core.Keyword))?G__17013.fqn:null);
switch (G__17013__$1) {
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

(cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.OrPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var nrows = cljs.core.match.specialize_or_pattern_matrix(rows,this$__$1,self__.ps);
return cljs.core.match.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match.OrPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ps","ps",1932889573,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.OrPattern.cljs$lang$type = true);

(cljs.core.match.OrPattern.cljs$lang$ctorStr = "cljs.core.match/OrPattern");

(cljs.core.match.OrPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/OrPattern");
}));

/**
 * Positional factory function for cljs.core.match/OrPattern.
 */
cljs.core.match.__GT_OrPattern = (function cljs$core$match$__GT_OrPattern(ps,_meta){
return (new cljs.core.match.OrPattern(ps,_meta));
});

cljs.core.match.or_pattern = (function cljs$core$match$or_pattern(p){
if(cljs.core.vector_QMARK_(p)){
} else {
throw (new Error("Assert failed: (vector? p)"));
}

return (new cljs.core.match.OrPattern(p,null));
});
cljs.core.match.or_pattern_QMARK_ = (function cljs$core$match$or_pattern_QMARK_(x){
return (x instanceof cljs.core.match.OrPattern);
});
cljs.core.match.specialize_guard_pattern_matrix = (function cljs$core$match$specialize_guard_pattern_matrix(rows){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17021){
var vec__17022 = p__17021;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17022,(0),null);
var row = vec__17022;
if(cljs.core.truth_((cljs.core.match.guard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.guard_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.guard_pattern_QMARK_.call(null, p)))){
return cljs.core.match.update_pattern(row,(0),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p));
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
return (((other instanceof cljs.core.match.GuardPattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.gs,new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(other))))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.GuardPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__17036 = k;
var G__17036__$1 = (((G__17036 instanceof cljs.core.Keyword))?G__17036.fqn:null);
switch (G__17036__$1) {
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

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ocr)))));
}));

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.GuardPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var nrows = cljs.core.match.specialize_guard_pattern_matrix(rows);
return cljs.core.match.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match.GuardPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"gs","gs",-1065948605,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.GuardPattern.cljs$lang$type = true);

(cljs.core.match.GuardPattern.cljs$lang$ctorStr = "cljs.core.match/GuardPattern");

(cljs.core.match.GuardPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/GuardPattern");
}));

/**
 * Positional factory function for cljs.core.match/GuardPattern.
 */
cljs.core.match.__GT_GuardPattern = (function cljs$core$match$__GT_GuardPattern(p,gs,_meta){
return (new cljs.core.match.GuardPattern(p,gs,_meta));
});

cljs.core.match.guard_pattern = (function cljs$core$match$guard_pattern(p,gs){
if(cljs.core.set_QMARK_(gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match.GuardPattern(p,gs,null));
});
cljs.core.match.guard_pattern_QMARK_ = (function cljs$core$match$guard_pattern_QMARK_(x){
return (x instanceof cljs.core.match.GuardPattern);
});
cljs.core.match.app_pattern_matrix_ocrs = (function cljs$core$match$app_pattern_matrix_ocrs(p__17085,form){
var vec__17088 = p__17085;
var focr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17088,(0),null);
var ocrs = vec__17088;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["app_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(focr)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"bind-expr","bind-expr",41520549).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(focr));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return focr;
}
})(),null,(1),null)))))], null))], null),ocrs);
});
cljs.core.match.specialize_app_pattern_matrix = (function cljs$core$match$specialize_app_pattern_matrix(rows,form){
var vec__17092 = cljs.core.split_with((function (p__17095){
var vec__17096 = p__17095;
var pat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17096,(0),null);
var row = vec__17096;
var and__5000__auto__ = (cljs.core.match.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.app_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(pat) : cljs.core.match.app_pattern_QMARK_.call(null, pat));
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(pat),form);
} else {
return and__5000__auto__;
}
}),rows);
var matched_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17092,(0),null);
var rest_rows = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17092,(1),null);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.match.update_pattern(row,(0),cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0()).cljs$core$match$protocols$IVecMod$prepend$arity$2(null, new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(cljs.core.first(row)));
}),matched_rows),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.match.protocols.prepend(row,cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$0());
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
return (((other instanceof cljs.core.match.AppPattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.form,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(other))))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.AppPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__17179 = k;
var G__17179__$1 = (((G__17179 instanceof cljs.core.Keyword))?G__17179.fqn:null);
switch (G__17179__$1) {
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

(cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.AppPattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var nocrs = cljs.core.match.app_pattern_matrix_ocrs(ocrs,self__.form);
var nrows = cljs.core.match.specialize_app_pattern_matrix(rows,self__.form);
return cljs.core.match.pattern_matrix(nrows,nocrs);
}));

(cljs.core.match.AppPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.AppPattern.cljs$lang$type = true);

(cljs.core.match.AppPattern.cljs$lang$ctorStr = "cljs.core.match/AppPattern");

(cljs.core.match.AppPattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/AppPattern");
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
cljs.core.match.preds = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
cljs.core.match.specialize_predicate_pattern_matrix = (function cljs$core$match$specialize_predicate_pattern_matrix(rows){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17186){
var vec__17187 = p__17186;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17187,(0),null);
var row = vec__17187;
if(cljs.core.truth_((cljs.core.match.predicate_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.predicate_pattern_QMARK_.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.predicate_pattern_QMARK_.call(null, p)))){
return cljs.core.match.update_pattern(row,(0),new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(p));
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
return (((other instanceof cljs.core.match.PredicatePattern)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,new cljs.core.Keyword(null,"p","p",151049309).cljs$core$IFn$_invoke$arity$1(other))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.gs,new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(other))))));
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
return this$__$1.cljs$core$ILookup$_lookup$arity$3(null, k,null);
}));

(cljs.core.match.PredicatePattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var G__17195 = k;
var G__17195__$1 = (((G__17195 instanceof cljs.core.Keyword))?G__17195.fqn:null);
switch (G__17195__$1) {
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

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 = (function (this$,ocr){
var self__ = this;
var this$__$1 = this;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (expr,ocr__$1){
return (new cljs.core.List(null,expr,(new cljs.core.List(null,ocr__$1,null,(1),null)),(2),null));
}),self__.gs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(ocr)))));
}));

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.match.PredicatePattern.prototype.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 = (function (this$,matrix){
var self__ = this;
var this$__$1 = this;
var rows = cljs.core.match.rows(matrix);
var ocrs = cljs.core.match.occurrences(matrix);
var nrows = cljs.core.match.specialize_predicate_pattern_matrix(rows);
return cljs.core.match.pattern_matrix(nrows,ocrs);
}));

(cljs.core.match.PredicatePattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"gs","gs",-1065948605,null),new cljs.core.Symbol(null,"_meta","_meta",-1716892533,null)], null);
}));

(cljs.core.match.PredicatePattern.cljs$lang$type = true);

(cljs.core.match.PredicatePattern.cljs$lang$ctorStr = "cljs.core.match/PredicatePattern");

(cljs.core.match.PredicatePattern.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.match/PredicatePattern");
}));

/**
 * Positional factory function for cljs.core.match/PredicatePattern.
 */
cljs.core.match.__GT_PredicatePattern = (function cljs$core$match$__GT_PredicatePattern(p,gs,_meta){
return (new cljs.core.match.PredicatePattern(p,gs,_meta));
});

cljs.core.match.predicate_pattern = (function cljs$core$match$predicate_pattern(p,gs){
if(cljs.core.set_QMARK_(gs)){
} else {
throw (new Error("Assert failed: (set? gs)"));
}

return (new cljs.core.match.PredicatePattern(p,gs,null));
});
cljs.core.match.predicate_pattern_QMARK_ = (function cljs$core$match$predicate_pattern_QMARK_(x){
return (x instanceof cljs.core.match.PredicatePattern);
});
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",-1699299641),new cljs.core.Keyword("cljs.core.match","literal","cljs.core.match/literal",-1699299641)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"l","l",1395893423).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",-2126094417),new cljs.core.Keyword("cljs.core.match","guard","cljs.core.match/guard",-2126094417)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","predice","cljs.core.match/predice",173694935),new cljs.core.Keyword("cljs.core.match","predicate","cljs.core.match/predicate",-794311346)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"gs","gs",1588487164).cljs$core$IFn$_invoke$arity$1(b));
}));
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017),new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(a)),new cljs.core.Keyword(null,"only","only",1907811652).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(b)));
}));
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",1151305311),new cljs.core.Keyword("cljs.core.match","or","cljs.core.match/or",1151305311)], null),(function (a,b){
var as = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(a);
var bs = new cljs.core.Keyword(null,"ps","ps",292358046).cljs$core$IFn$_invoke$arity$1(b);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(as),cljs.core.count(bs))) && (cljs.core.every_QMARK_(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.match.groupable_QMARK_,as,bs))));
}));
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296)], null),(function (a,b){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"rest?","rest?",345335951).cljs$core$IFn$_invoke$arity$1(b))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(b))));
}));
cljs.core.match.groupable_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",-668230373),new cljs.core.Keyword("cljs.core.match","app","cljs.core.match/app",-668230373)], null),(function (a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(b));
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.to_source !== 'undefined')){
} else {
/**
 * Returns a Clojure form that, when executed, is truthy if the
 *   pattern matches the occurrence. Dispatches on the `type` of the
 *   pattern. For instance, a literal pattern might return `(= ~(:pattern
 *   pattern) ~ocr)`, using `=` to test for a match.
 */
cljs.core.match.to_source = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17244 = cljs.core.get_global_hierarchy;
return (fexpr__17244.cljs$core$IFn$_invoke$arity$0 ? fexpr__17244.cljs$core$IFn$_invoke$arity$0() : fexpr__17244.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","to-source"),(function (pattern,ocr){
return new cljs.core.Keyword("cljs.core.match","tag","cljs.core.match/tag",-39691477).cljs$core$IFn$_invoke$arity$1(pattern);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.emit_pattern !== 'undefined')){
} else {
/**
 * Returns the corresponding pattern for the given syntax. Dispatches
 *   on the class of its argument. For example, `[(:or 1 2) 2]` is dispatched
 *   as clojure.lang.IPersistentVector
 */
cljs.core.match.emit_pattern = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17246 = cljs.core.get_global_hierarchy;
return (fexpr__17246.cljs$core$IFn$_invoke$arity$0 ? fexpr__17246.cljs$core$IFn$_invoke$arity$0() : fexpr__17246.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","emit-pattern"),(function (pattern){
return cljs.core.match.protocols.syntax_tag(pattern);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
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

(cljs.core.match.protocols.ISyntaxTag["object"] = true);

(cljs.core.match.protocols.syntax_tag["object"] = (function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));

(cljs.core.match.protocols.ISyntaxTag["null"] = true);

(cljs.core.match.protocols.syntax_tag["null"] = (function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
(cljs.core.match.protocols.ISyntaxTag["number"] = true);

(cljs.core.match.protocols.syntax_tag["number"] = (function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
(cljs.core.match.protocols.ISyntaxTag["string"] = true);

(cljs.core.match.protocols.syntax_tag["string"] = (function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
(cljs.core.match.protocols.ISyntaxTag["boolean"] = true);

(cljs.core.match.protocols.syntax_tag["boolean"] = (function (_){
return new cljs.core.Keyword(null,"default","default",-1987822328);
}));
cljs.core.match.emit_patterns = (function cljs$core$match$emit_patterns(var_args){
var G__17249 = arguments.length;
switch (G__17249) {
case 2:
return cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2 = (function (ps,t){
return cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$3(ps,t,cljs.core.PersistentVector.EMPTY);
}));

(cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$3 = (function (ps,t,v){
while(true){
if(cljs.core.empty_QMARK_(ps)){
return v;
} else {
var p = cljs.core.first(ps);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var p__$1 = cljs.core.second(ps);
var rp = ((((cljs.core.vector_QMARK_(p__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"seq","seq",-1817803783)))))?cljs.core.match.seq_pattern(cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2(p__$1,t)):cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(p__$1));
var G__18767 = cljs.core.nnext(ps);
var G__18768 = t;
var G__18769 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match.rest_pattern(rp));
ps = G__18767;
t = G__18768;
v = G__18769;
continue;
} else {
var G__18770 = cljs.core.next(ps);
var G__18771 = t;
var G__18772 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.first(ps)));
ps = G__18770;
t = G__18771;
v = G__18772;
continue;

}
}
break;
}
}));

(cljs.core.match.emit_patterns.cljs$lang$maxFixedArity = 3);

cljs.core.match.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296),(function (pat){
var ps = cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2(pat,new cljs.core.Keyword(null,"vector","vector",1902966158));
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4(ps,cljs.core.match._STAR_vector_type_STAR_,(0),cljs.core.some(cljs.core.match.rest_pattern_QMARK_,ps));
}));
cljs.core.match.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","map","cljs.core.match/map",-408120017),(function (pat){
return cljs.core.match.map_pattern.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17258){
var vec__17259 = p__17258;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17259,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17259,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(v)], null);
}),pat))));
}));
cljs.core.match.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","symbol","cljs.core.match/symbol",-2001901386),(function (pat){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.match._STAR_locals_STAR_,pat,new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222)),new cljs.core.Keyword("cljs.core.match","not-found","cljs.core.match/not-found",85049222))){
return cljs.core.match.literal_pattern(cljs.core.with_meta(pat,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(pat),new cljs.core.Keyword(null,"local","local",-1497766724),true)));
} else {
return cljs.core.match.wildcard_pattern.cljs$core$IFn$_invoke$arity$1(pat);
}
}));
cljs.core.match.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (pat){
return cljs.core.match.literal_pattern(pat);
}));





cljs.core.match.emit_pattern.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword("cljs.core.match","seq","cljs.core.match/seq",-634730153),(function (pat){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pat),(2))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((((cljs.core.second(pat) instanceof cljs.core.Symbol)) || ((cljs.core.second(pat) instanceof cljs.core.Keyword)))))))){
return cljs.core.match.literal_pattern(cljs.core.second(pat));
} else {
return (cljs.core.match.emit_pattern_for_syntax.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.emit_pattern_for_syntax.cljs$core$IFn$_invoke$arity$1(pat) : cljs.core.match.emit_pattern_for_syntax.call(null, pat));
}
}));
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.match !== 'undefined') && (typeof cljs.core.match.emit_pattern_for_syntax !== 'undefined')){
} else {
/**
 * Handles patterns wrapped in the special list syntax. Dispatches
 *   on the first or second keyword in the list. For example, the pattern 
 *   `(:or 1 ...) is dispatches as :or, and `(1 :as a)` is dispatched by :as.
 */
cljs.core.match.emit_pattern_for_syntax = (function (){var method_table__5599__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5600__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5601__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5602__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5603__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__17268 = cljs.core.get_global_hierarchy;
return (fexpr__17268.cljs$core$IFn$_invoke$arity$0 ? fexpr__17268.cljs$core$IFn$_invoke$arity$0() : fexpr__17268.call(null, ));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core.match","emit-pattern-for-syntax"),(function (p__17274){
var vec__17275 = p__17274;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17275,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17275,(1),null);
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.Keyword(null,"default","default",-1987822328)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),s], null);
}
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5603__auto__,method_table__5599__auto__,prefer_table__5600__auto__,method_cache__5601__auto__,cached_hierarchy__5602__auto__));
})();
}
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"default","default",-1987822328)], null),(function (pat){
return cljs.core.match.or_pattern(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match.emit_pattern,cljs.core.rest(pat))));
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"as","as",1148689641)], null),(function (p__17278){
var vec__17279 = p__17278;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17279,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17279,(1),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17279,(2),null);
return cljs.core.with_meta(cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as","as",1148689641),sym], null));
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"<<","<<",1655720184)], null),(function (p__17283){
var vec__17284 = p__17283;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284,(1),null);
var form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17284,(2),null);
return cljs.core.match.app_pattern(cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),form);
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"when","when",-576417306)], null),(function (p__17291){
var vec__17292 = p__17291;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17292,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_(gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Invalid predicate expression ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? symbol? gs)"].join('')));
}

if(cljs.core.every_QMARK_((function (p1__17290_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(cljs.core.match.preds),p1__17290_SHARP_);
}),gs__$1)){
} else {
throw (new Error(["Assert failed: ",["Unknown predicate in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(gs__$1)].join(''),"\n","(every? (fn* [p1__17290#] (contains? (clojure.core/deref preds) p1__17290#)) gs)"].join('')));
}

return cljs.core.match.predicate_pattern(cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),cljs.core.set(gs__$1));
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"guard","guard",-873147811)], null),(function (p__17295){
var vec__17296 = p__17295;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(1),null);
var gs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17296,(2),null);
var gs__$1 = (((!(cljs.core.vector_QMARK_(gs))))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gs], null):gs);
return cljs.core.match.guard_pattern(cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),cljs.core.set(gs__$1));
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"seq","seq",-1817803783)], null),(function (pat){
var p = cljs.core.first(pat);
if(cljs.core.empty_QMARK_(p)){
return cljs.core.match.literal_pattern(cljs.core.List.EMPTY);
} else {
return cljs.core.match.seq_pattern(cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"seq","seq",-1817803783)));
}
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("cljs.core.match","vector","cljs.core.match/vector",651763296)], null),(function (p__17414){
var vec__17435 = p__17414;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17435,(0),null);
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17435,(1),null);
var offset_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17435,(2),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17435,(3),null);
var ps = cljs.core.match.emit_patterns.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"vector","vector",1902966158));
return cljs.core.match.vector_pattern.cljs$core$IFn$_invoke$arity$4(ps,t,offset,cljs.core.some(cljs.core.match.rest_pattern_QMARK_,ps));
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"only","only",1907811652)], null),(function (p__17450){
var vec__17456 = p__17450;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(1),null);
var only = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17456,(2),null);
return cljs.core.with_meta(cljs.core.match.emit_pattern.cljs$core$IFn$_invoke$arity$1(p),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"only","only",1907811652),only], null));
}));
cljs.core.match.emit_pattern_for_syntax.cljs$core$IMultiFn$_add_method$arity$3(null, new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__17465){
var vec__17467 = p__17465;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17467,(1),null);
var l = vec__17467;
throw (new Error(["Invalid list syntax ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(l),". ","Valid syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__17464_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__17464_SHARP_,new cljs.core.Keyword(null,"default","default",-1987822328));
}),cljs.core.keys(cljs.core.match.emit_pattern_for_syntax.getMethodTable()))))].join('')));
}));
var void_18784 = ({});
var void_QMARK__18785 = (function (p1__17473_SHARP_){
return (void_18784 === p1__17473_SHARP_);
});
var infix_keyword_QMARK__18786 = (function (p1__17474_SHARP_){
var fexpr__17482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"when","when",-576417306),null,new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"guard","guard",-873147811),null], null), null);
return (fexpr__17482.cljs$core$IFn$_invoke$arity$1 ? fexpr__17482.cljs$core$IFn$_invoke$arity$1(p1__17474_SHARP_) : fexpr__17482.call(null, p1__17474_SHARP_));
});
cljs.core.match.regroup_keywords = (function cljs$core$match$regroup_keywords(pattern){
if(cljs.core.vector_QMARK_(pattern)){
return cljs.core.first(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__17483,r){
var vec__17488 = p__17483;
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17488,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17488,(1),null);
var q = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17488,(2),null);
if(void_QMARK__18785(p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,q,r], null);
} else {
if(cljs.core.truth_((function (){var and__5000__auto__ = (!(void_QMARK__18785(r)));
if(and__5000__auto__){
return infix_keyword_QMARK__18786(q);
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(new cljs.core.List(null,(cljs.core.match.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.regroup_keywords.call(null, p)),(new cljs.core.List(null,q,(new cljs.core.List(null,r,null,(1),null)),(2),null)),(3),null))),void_18784,void_18784], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,(cljs.core.match.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.regroup_keywords.cljs$core$IFn$_invoke$arity$1(p) : cljs.core.match.regroup_keywords.call(null, p))),q,r], null);

}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,void_18784,void_18784], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(pattern,void_18784,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([void_18784], 0))));
} else {
if(cljs.core.seq_QMARK_(pattern)){
return cljs.core.cons((function (){var G__17512 = cljs.core.first(pattern);
return (cljs.core.match.regroup_keywords.cljs$core$IFn$_invoke$arity$1 ? cljs.core.match.regroup_keywords.cljs$core$IFn$_invoke$arity$1(G__17512) : cljs.core.match.regroup_keywords.call(null, G__17512));
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
cljs.core.match.group_keywords = (function cljs$core$match$group_keywords(pattern){
if(cljs.core.vector_QMARK_(pattern)){
return cljs.core.match.regroup_keywords(pattern);
} else {
return pattern;
}
});
/**
 * Take an unprocessed pattern expression and an action expression and return
 * a pattern row of the processed pattern expression plus the action epxression.
 */
cljs.core.match.to_pattern_row = (function cljs$core$match$to_pattern_row(pat,action){
var ps = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match.emit_pattern,cljs.core.match.group_keywords(pat));
return cljs.core.match.pattern_row.cljs$core$IFn$_invoke$arity$2(ps,action);
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
var temp__5802__auto__ = cljs.core.seq(remaining);
if(temp__5802__auto__){
var patterns__$1 = temp__5802__auto__;
var pat = cljs.core.first(patterns__$1);
var pats = cljs.core.rest(patterns__$1);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pat,new cljs.core.Symbol(null,"_","_",-1201019570,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pat,new cljs.core.Symbol(null,"&","&",-2144855648,null))))){
var G__18791 = pats;
var G__18792 = seen;
var G__18793 = dups;
remaining = G__18791;
seen = G__18792;
dups = G__18793;
continue;
} else {
if((pat instanceof cljs.core.Symbol)){
if(cljs.core.contains_QMARK_(seen,pat)){
var G__18797 = pats;
var G__18798 = seen;
var G__18799 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(dups,pat);
remaining = G__18797;
seen = G__18798;
dups = G__18799;
continue;
} else {
var G__18802 = pats;
var G__18803 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,pat);
var G__18804 = dups;
remaining = G__18802;
seen = G__18803;
dups = G__18804;
continue;
}
} else {
if(cljs.core.vector_QMARK_(pat)){
var G__18805 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,pat);
var G__18806 = seen;
var G__18807 = dups;
remaining = G__18805;
seen = G__18806;
dups = G__18807;
continue;
} else {
if(cljs.core.map_QMARK_(pat)){
var G__18808 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.vals(pat));
var G__18809 = seen;
var G__18810 = dups;
remaining = G__18808;
seen = G__18809;
dups = G__18810;
continue;
} else {
if(cljs.core.seq_QMARK_(pat)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
var G__18812 = pats;
var G__18813 = seen;
var G__18814 = dups;
remaining = G__18812;
seen = G__18813;
dups = G__18814;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(pat),new cljs.core.Keyword(null,"or","or",235744169))){
var wds = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.match.wildcards_and_duplicates,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat)));
var mseen = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,wds));
var G__18819 = pats;
var G__18820 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(seen,mseen);
var G__18821 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(clojure.set.union,dups,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(seen,mseen),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,wds));
remaining = G__18819;
seen = G__18820;
dups = G__18821;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(pat),new cljs.core.Keyword(null,"as","as",1148689641))){
var G__18822 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),pat));
var G__18823 = seen;
var G__18824 = dups;
remaining = G__18822;
seen = G__18823;
dups = G__18824;
continue;
} else {
var G__18825 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pats,cljs.core.first(pat));
var G__18826 = seen;
var G__18827 = dups;
remaining = G__18825;
seen = G__18826;
dups = G__18827;
continue;

}
}
}
} else {
var G__18828 = pats;
var G__18829 = seen;
var G__18830 = dups;
remaining = G__18828;
seen = G__18829;
dups = G__18830;
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
return cljs.core.second(cljs.core.match.wildcards_and_duplicates(pattern));
});
cljs.core.match.check_pattern = (function cljs$core$match$check_pattern(pat,vars,nvars,rownum){
var pat__$1 = cljs.core.match.group_keywords(pat);
if((!(cljs.core.vector_QMARK_(pat__$1)))){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern rows must be wrapped in []."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),"].",((cljs.core.list_QMARK_(pat__$1))?[" Note: pattern rows are not patterns."," They cannot be wrapped in a :when guard, for example"].join(''):null)].join('')));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pat__$1),nvars)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row has differing number of patterns. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1)," has ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(pat__$1))," pattern/s, expecting ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nvars)," for occurrences ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)].join('')));
} else {
}

var temp__5804__auto__ = cljs.core.seq(cljs.core.match.find_duplicate_wildcards(pat__$1));
if(temp__5804__auto__){
var duplicates = temp__5804__auto__;
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum),": Pattern row reuses wildcards in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pat__$1),".  The following wildcards are ambiguous: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.sort.cljs$core$IFn$_invoke$arity$1(duplicates)))),".  There's no guarantee that the matched values will be same.","  Rename the occurrences uniquely."].join('')));
} else {
return null;
}
});
cljs.core.match.check_matrix_args = (function cljs$core$match$check_matrix_args(vars,clauses){
if((vars instanceof cljs.core.Symbol)){
throw (new Error(["Occurrences must be in a vector."," Try changing ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," to [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars),"]"].join('')));
} else {
}

if((!(cljs.core.vector_QMARK_(vars)))){
throw (new Error(["Occurrences must be in a vector. ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(vars)," is not a vector"].join('')));
} else {
}

var nvars_18831 = cljs.core.count(vars);
var cls_18832 = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var seq__17631_18833 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.butlast(cls_18832),cljs.core.rest(cljs.core.range.cljs$core$IFn$_invoke$arity$0())));
var chunk__17633_18834 = null;
var count__17634_18835 = (0);
var i__17635_18836 = (0);
while(true){
if((i__17635_18836 < count__17634_18835)){
var vec__17671_18841 = chunk__17633_18834.cljs$core$IIndexed$_nth$arity$2(null, i__17635_18836);
var vec__17674_18842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671_18841,(0),null);
var pat_18843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17674_18842,(0),null);
var __18844 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17674_18842,(1),null);
var rownum_18845 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17671_18841,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_18843)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_18845),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match.check_pattern(pat_18843,vars,nvars_18831,rownum_18845);


var G__18846 = seq__17631_18833;
var G__18847 = chunk__17633_18834;
var G__18848 = count__17634_18835;
var G__18849 = (i__17635_18836 + (1));
seq__17631_18833 = G__18846;
chunk__17633_18834 = G__18847;
count__17634_18835 = G__18848;
i__17635_18836 = G__18849;
continue;
} else {
var temp__5804__auto___18850 = cljs.core.seq(seq__17631_18833);
if(temp__5804__auto___18850){
var seq__17631_18851__$1 = temp__5804__auto___18850;
if(cljs.core.chunked_seq_QMARK_(seq__17631_18851__$1)){
var c__5525__auto___18852 = cljs.core.chunk_first(seq__17631_18851__$1);
var G__18853 = cljs.core.chunk_rest(seq__17631_18851__$1);
var G__18854 = c__5525__auto___18852;
var G__18855 = cljs.core.count(c__5525__auto___18852);
var G__18856 = (0);
seq__17631_18833 = G__18853;
chunk__17633_18834 = G__18854;
count__17634_18835 = G__18855;
i__17635_18836 = G__18856;
continue;
} else {
var vec__17707_18857 = cljs.core.first(seq__17631_18851__$1);
var vec__17710_18858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17707_18857,(0),null);
var pat_18859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17710_18858,(0),null);
var __18860 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17710_18858,(1),null);
var rownum_18861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17707_18857,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_18859)){
throw (new Error(["Pattern row ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rownum_18861),": :else form only allowed on final pattern row"].join('')));
} else {
}

cljs.core.match.check_pattern(pat_18859,vars,nvars_18831,rownum_18861);


var G__18863 = cljs.core.next(seq__17631_18851__$1);
var G__18864 = null;
var G__18865 = (0);
var G__18866 = (0);
seq__17631_18833 = G__18863;
chunk__17633_18834 = G__18864;
count__17634_18835 = G__18865;
i__17635_18836 = G__18866;
continue;
}
} else {
}
}
break;
}

var temp__5804__auto___18867 = cljs.core.last(cls_18832);
if(cljs.core.truth_(temp__5804__auto___18867)){
var vec__17720_18868 = temp__5804__auto___18867;
var pat_18869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17720_18868,(0),null);
var __18870 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17720_18868,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"else","else",-1508377146),pat_18869)){
} else {
cljs.core.match.check_pattern(pat_18869,vars,nvars_18831,cljs.core.count(cls_18832));
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
cljs.core.match.process_vars = (function cljs$core$match$process_vars(vars){
var process_var = (function cljs$core$match$process_vars_$_process_var(var$){
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
cljs.core.match.emit_matrix = (function cljs$core$match$emit_matrix(var_args){
var G__17733 = arguments.length;
switch (G__17733) {
case 2:
return cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$2 = (function (vars,clauses){
return cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$3(vars,clauses,true);
}));

(cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$3 = (function (vars,clauses,default$){
var cs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses);
var vs = cljs.core.match.process_vars(vars);
var cs__$1 = (function (){var vec__17746 = cljs.core.last(cs);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17746,(1),null);
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
return cljs.core.match.pattern_matrix(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17727_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.match.to_pattern_row,p1__17727_SHARP_);
}),cs__$1)),cljs.core.match.process_vars(vs));
}));

(cljs.core.match.emit_matrix.cljs$lang$maxFixedArity = 3);

cljs.core.match.executable_form = (function cljs$core$match$executable_form(node){
return cljs.core.match.protocols.n_to_clj(node);
});
cljs.core.match.recur_present_QMARK_ = (function cljs$core$match$recur_present_QMARK_(actions){
var analyze_action = (function cljs$core$match$recur_present_QMARK__$_analyze_action(action){
if(cljs.core.truth_((function (){var and__5000__auto__ = cljs.core.sequential_QMARK_(action);
if(and__5000__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"recur","recur",1202958259,null),"null"], null), null),cljs.core.flatten(action));
} else {
return and__5000__auto__;
}
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"recur-present","recur-present",1178490943),true], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
return cljs.core.some(new cljs.core.Keyword(null,"recur-present","recur-present",1178490943),cljs.core.map.cljs$core$IFn$_invoke$arity$2(analyze_action,actions));
});
cljs.core.match.clj_form = (function cljs$core$match$clj_form(vars,clauses){
if(cljs.core.truth_(cljs.core.deref(cljs.core.match._STAR_syntax_check_STAR_))){
cljs.core.match.check_matrix_args(vars,clauses);
} else {
}

var actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var recur_present_QMARK_ = cljs.core.match.recur_present_QMARK_(actions);
if(cljs.core.not((function (){var and__5000__auto__ = cljs.core.match._STAR_no_backtrack_STAR_;
if(cljs.core.truth_(and__5000__auto__)){
return recur_present_QMARK_;
} else {
return and__5000__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Recur form present yet *no-backtrack* set to true","\n","(not (and *no-backtrack* recur-present?))"].join('')));
}

var _STAR_recur_present_STAR__orig_val__17959 = cljs.core.match._STAR_recur_present_STAR_;
var _STAR_recur_present_STAR__temp_val__17961 = (function (){var or__5002__auto__ = cljs.core.match._STAR_recur_present_STAR_;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var or__5002__auto____$1 = recur_present_QMARK_;
if(cljs.core.truth_(or__5002__auto____$1)){
return or__5002__auto____$1;
} else {
return cljs.core.match._STAR_no_backtrack_STAR_;
}
}
})();
(cljs.core.match._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__temp_val__17961);

try{return cljs.core.match.executable_form(cljs.core.match.compile(cljs.core.match.emit_matrix.cljs$core$IFn$_invoke$arity$2(vars,clauses)));
}finally {(cljs.core.match._STAR_recur_present_STAR_ = _STAR_recur_present_STAR__orig_val__17959);
}});

//# sourceMappingURL=cljs.core.match.js.map
