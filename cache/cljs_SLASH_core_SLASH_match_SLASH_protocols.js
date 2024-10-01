goog.provide('cljs.core.match.protocols');

/**
 * @interface
 */
cljs.core.match.protocols.ISpecializeMatrix = function(){};

var cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$dyn_12304 = (function (this$,matrix){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.specialize_matrix[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,matrix) : m__5351__auto__.call(null, this$,matrix));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.specialize_matrix["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,matrix) : m__5349__auto__.call(null, this$,matrix));
} else {
throw cljs.core.missing_protocol("ISpecializeMatrix.specialize-matrix",this$);
}
}
});
cljs.core.match.protocols.specialize_matrix = (function cljs$core$match$protocols$specialize_matrix(this$,matrix){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2 == null)))))){
return this$.cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$arity$2(this$,matrix);
} else {
return cljs$core$match$protocols$ISpecializeMatrix$specialize_matrix$dyn_12304(this$,matrix);
}
});


/**
 * @interface
 */
cljs.core.match.protocols.IContainsRestPattern = function(){};

var cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$dyn_12314 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.contains_rest_pattern_QMARK_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.contains_rest_pattern_QMARK_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("IContainsRestPattern.contains-rest-pattern?",this$);
}
}
});
cljs.core.match.protocols.contains_rest_pattern_QMARK_ = (function cljs$core$match$protocols$contains_rest_pattern_QMARK_(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$arity$1 == null)))))){
return this$.cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$arity$1(this$);
} else {
return cljs$core$match$protocols$IContainsRestPattern$contains_rest_pattern_QMARK_$dyn_12314(this$);
}
});


/**
 * Allows arbitrary objects to act like a map-like object when pattern
 *   matched. Avoid extending this directly for Java Beans, see
 *   `match.java/bean-match`.
 * @interface
 */
cljs.core.match.protocols.IMatchLookup = function(){};

var cljs$core$match$protocols$IMatchLookup$val_at$dyn_12319 = (function (this$,k,not_found){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.val_at[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : m__5351__auto__.call(null, this$,k,not_found));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.val_at["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(this$,k,not_found) : m__5349__auto__.call(null, this$,k,not_found));
} else {
throw cljs.core.missing_protocol("IMatchLookup.val-at",this$);
}
}
});
cljs.core.match.protocols.val_at = (function cljs$core$match$protocols$val_at(this$,k,not_found){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$IMatchLookup$val_at$arity$3 == null)))))){
return this$.cljs$core$match$protocols$IMatchLookup$val_at$arity$3(this$,k,not_found);
} else {
return cljs$core$match$protocols$IMatchLookup$val_at$dyn_12319(this$,k,not_found);
}
});


/**
 * @interface
 */
cljs.core.match.protocols.INodeCompile = function(){};

var cljs$core$match$protocols$INodeCompile$n_to_clj$dyn_12325 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.n_to_clj[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.n_to_clj["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("INodeCompile.n-to-clj",this$);
}
}
});
cljs.core.match.protocols.n_to_clj = (function cljs$core$match$protocols$n_to_clj(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1 == null)))))){
return this$.cljs$core$match$protocols$INodeCompile$n_to_clj$arity$1(this$);
} else {
return cljs$core$match$protocols$INodeCompile$n_to_clj$dyn_12325(this$);
}
});


/**
 * @interface
 */
cljs.core.match.protocols.IPatternCompile = function(){};

var cljs$core$match$protocols$IPatternCompile$to_source_STAR_$dyn_12333 = (function (this$,ocr){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.to_source_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,ocr) : m__5351__auto__.call(null, this$,ocr));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.to_source_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,ocr) : m__5349__auto__.call(null, this$,ocr));
} else {
throw cljs.core.missing_protocol("IPatternCompile.to-source*",this$);
}
}
});
cljs.core.match.protocols.to_source_STAR_ = (function cljs$core$match$protocols$to_source_STAR_(this$,ocr){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2 == null)))))){
return this$.cljs$core$match$protocols$IPatternCompile$to_source_STAR_$arity$2(this$,ocr);
} else {
return cljs$core$match$protocols$IPatternCompile$to_source_STAR_$dyn_12333(this$,ocr);
}
});


/**
 * @interface
 */
cljs.core.match.protocols.IVecMod = function(){};

var cljs$core$match$protocols$IVecMod$prepend$dyn_12337 = (function (this$,x){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.prepend[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5351__auto__.call(null, this$,x));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.prepend["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,x) : m__5349__auto__.call(null, this$,x));
} else {
throw cljs.core.missing_protocol("IVecMod.prepend",this$);
}
}
});
cljs.core.match.protocols.prepend = (function cljs$core$match$protocols$prepend(this$,x){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$IVecMod$prepend$arity$2 == null)))))){
return this$.cljs$core$match$protocols$IVecMod$prepend$arity$2(this$,x);
} else {
return cljs$core$match$protocols$IVecMod$prepend$dyn_12337(this$,x);
}
});

var cljs$core$match$protocols$IVecMod$drop_nth$dyn_12346 = (function (this$,n){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.drop_nth[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__5351__auto__.call(null, this$,n));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.drop_nth["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__5349__auto__.call(null, this$,n));
} else {
throw cljs.core.missing_protocol("IVecMod.drop-nth",this$);
}
}
});
cljs.core.match.protocols.drop_nth = (function cljs$core$match$protocols$drop_nth(this$,n){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$IVecMod$drop_nth$arity$2 == null)))))){
return this$.cljs$core$match$protocols$IVecMod$drop_nth$arity$2(this$,n);
} else {
return cljs$core$match$protocols$IVecMod$drop_nth$dyn_12346(this$,n);
}
});

var cljs$core$match$protocols$IVecMod$swap$dyn_12354 = (function (this$,n){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.swap[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__5351__auto__.call(null, this$,n));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.swap["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__5349__auto__.call(null, this$,n));
} else {
throw cljs.core.missing_protocol("IVecMod.swap",this$);
}
}
});
cljs.core.match.protocols.swap = (function cljs$core$match$protocols$swap(this$,n){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$IVecMod$swap$arity$2 == null)))))){
return this$.cljs$core$match$protocols$IVecMod$swap$arity$2(this$,n);
} else {
return cljs$core$match$protocols$IVecMod$swap$dyn_12354(this$,n);
}
});


/**
 * @interface
 */
cljs.core.match.protocols.IVectorPattern = function(){};

var cljs$core$match$protocols$IVectorPattern$split$dyn_12368 = (function (this$,n){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.split[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__5351__auto__.call(null, this$,n));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.split["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(this$,n) : m__5349__auto__.call(null, this$,n));
} else {
throw cljs.core.missing_protocol("IVectorPattern.split",this$);
}
}
});
cljs.core.match.protocols.split = (function cljs$core$match$protocols$split(this$,n){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$IVectorPattern$split$arity$2 == null)))))){
return this$.cljs$core$match$protocols$IVectorPattern$split$arity$2(this$,n);
} else {
return cljs$core$match$protocols$IVectorPattern$split$dyn_12368(this$,n);
}
});


/**
 * @interface
 */
cljs.core.match.protocols.ISyntaxTag = function(){};

var cljs$core$match$protocols$ISyntaxTag$syntax_tag$dyn_12372 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (cljs.core.match.protocols.syntax_tag[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null, this$));
} else {
var m__5349__auto__ = (cljs.core.match.protocols.syntax_tag["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null, this$));
} else {
throw cljs.core.missing_protocol("ISyntaxTag.syntax-tag",this$);
}
}
});
cljs.core.match.protocols.syntax_tag = (function cljs$core$match$protocols$syntax_tag(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1 == null)))))){
return this$.cljs$core$match$protocols$ISyntaxTag$syntax_tag$arity$1(this$);
} else {
return cljs$core$match$protocols$ISyntaxTag$syntax_tag$dyn_12372(this$);
}
});


/**
 * @interface
 */
cljs.core.match.protocols.IExistentialPattern = function(){};


/**
 * @interface
 */
cljs.core.match.protocols.IPseudoPattern = function(){};


//# sourceMappingURL=cljs.core.match.protocols.js.map
