goog.provide('cljs.core$macros');
var ret__4785__auto___21126 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21127 = arguments.length;
var i__4737__auto___21128 = (0);
while(true){
if((i__4737__auto___21128 < len__4736__auto___21127)){
args__4742__auto__.push((arguments[i__4737__auto___21128]));

var G__21129 = (i__4737__auto___21128 + (1));
i__4737__auto___21128 = G__21129;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),(new cljs.core.List(null,x__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(form)], 0)))),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__21130 = threaded;
var G__21131 = cljs.core.next(forms__$1);
x__$1 = G__21130;
forms__$1 = G__21131;
continue;
} else {
return x__$1;
}
break;
}
}));

(cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq17398){
var G__17399 = cljs.core.first(seq17398);
var seq17398__$1 = cljs.core.next(seq17398);
var G__17400 = cljs.core.first(seq17398__$1);
var seq17398__$2 = cljs.core.next(seq17398__$1);
var G__17401 = cljs.core.first(seq17398__$2);
var seq17398__$3 = cljs.core.next(seq17398__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17399,G__17400,G__17401,seq17398__$3);
}));

return null;
})()
;
(cljs.core$macros.__GT_.cljs$lang$macro = true);

var ret__4785__auto___21132 = (function (){
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21133 = arguments.length;
var i__4737__auto___21134 = (0);
while(true){
if((i__4737__auto___21134 < len__4736__auto___21133)){
args__4742__auto__.push((arguments[i__4737__auto___21134]));

var G__21135 = (i__4737__auto___21134 + (1));
i__4737__auto___21134 = G__21135;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(form),null,(1),null)),cljs.core.next(form),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x__$1,null,(1),null))], 0)))),cljs.core.meta(form)):(new cljs.core.List(null,form,(new cljs.core.List(null,x__$1,null,(1),null)),(2),null)));
var G__21136 = threaded;
var G__21137 = cljs.core.next(forms__$1);
x__$1 = G__21136;
forms__$1 = G__21137;
continue;
} else {
return x__$1;
}
break;
}
}));

(cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq17414){
var G__17415 = cljs.core.first(seq17414);
var seq17414__$1 = cljs.core.next(seq17414);
var G__17416 = cljs.core.first(seq17414__$1);
var seq17414__$2 = cljs.core.next(seq17414__$1);
var G__17417 = cljs.core.first(seq17414__$2);
var seq17414__$3 = cljs.core.next(seq17414__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17415,G__17416,G__17417,seq17414__$3);
}));

return null;
})()
;
(cljs.core$macros.__GT__GT_.cljs$lang$macro = true);

var ret__4785__auto___21138 = (function (){
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var G__17452 = arguments.length;
switch (G__17452) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21140 = arguments.length;
var i__4737__auto___21141 = (0);
while(true){
if((i__4737__auto___21141 < len__4736__auto___21140)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21141]));

var G__21143 = (i__4737__auto___21141 + (1));
i__4737__auto___21141 = G__21143;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0))));
}));

(cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,form,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq17445){
var G__17446 = cljs.core.first(seq17445);
var seq17445__$1 = cljs.core.next(seq17445);
var G__17447 = cljs.core.first(seq17445__$1);
var seq17445__$2 = cljs.core.next(seq17445__$1);
var G__17448 = cljs.core.first(seq17445__$2);
var seq17445__$3 = cljs.core.next(seq17445__$2);
var G__17449 = cljs.core.first(seq17445__$3);
var seq17445__$4 = cljs.core.next(seq17445__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17446,G__17447,G__17448,G__17449,seq17445__$4);
}));

(cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._DOT__DOT_.cljs$lang$macro = true);

var ret__4785__auto___21144 = (function (){
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21145 = arguments.length;
var i__4737__auto___21146 = (0);
while(true){
if((i__4737__auto___21146 < len__4736__auto___21145)){
args__4742__auto__.push((arguments[i__4737__auto___21146]));

var G__21147 = (i__4737__auto___21146 + (1));
i__4737__auto___21146 = G__21147;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
}));

(cljs.core$macros.comment.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.comment.cljs$lang$applyTo = (function (seq17464){
var G__17465 = cljs.core.first(seq17464);
var seq17464__$1 = cljs.core.next(seq17464);
var G__17466 = cljs.core.first(seq17464__$1);
var seq17464__$2 = cljs.core.next(seq17464__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17465,G__17466,seq17464__$2);
}));

return null;
})()
;
(cljs.core$macros.comment.cljs$lang$macro = true);

var ret__4785__auto___21148 = (function (){
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21149 = arguments.length;
var i__4737__auto___21150 = (0);
while(true){
if((i__4737__auto___21150 < len__4736__auto___21149)){
args__4742__auto__.push((arguments[i__4737__auto___21150]));

var G__21151 = (i__4737__auto___21150 + (1));
i__4737__auto___21150 = G__21151;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,cljs.core.first(clauses),(new cljs.core.List(null,((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})()),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next(cljs.core.next(clauses))),null,(1),null)),(2),null)),(3),null)),(4),null));
} else {
return null;
}
}));

(cljs.core$macros.cond.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.cond.cljs$lang$applyTo = (function (seq17491){
var G__17492 = cljs.core.first(seq17491);
var seq17491__$1 = cljs.core.next(seq17491);
var G__17493 = cljs.core.first(seq17491__$1);
var seq17491__$2 = cljs.core.next(seq17491__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17492,G__17493,seq17491__$2);
}));

return null;
})()
;
(cljs.core$macros.cond.cljs$lang$macro = true);

var ret__4785__auto___21153 = (function (){
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21154 = arguments.length;
var i__4737__auto___21155 = (0);
while(true){
if((i__4737__auto___21155 < len__4736__auto___21154)){
args__4742__auto__.push((arguments[i__4737__auto___21155]));

var G__21156 = (i__4737__auto___21155 + (1));
i__4737__auto___21155 = G__21156;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17502_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__17502_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true),null,(1),null)),(2),null));
}),names))));
}));

(cljs.core$macros.declare.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.declare.cljs$lang$applyTo = (function (seq17503){
var G__17504 = cljs.core.first(seq17503);
var seq17503__$1 = cljs.core.next(seq17503);
var G__17505 = cljs.core.first(seq17503__$1);
var seq17503__$2 = cljs.core.next(seq17503__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17504,G__17505,seq17503__$2);
}));

return null;
})()
;
(cljs.core$macros.declare.cljs$lang$macro = true);

var ret__4785__auto___21157 = (function (){
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new js/Map) (.set "a" 1) (.set "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21158 = arguments.length;
var i__4737__auto___21159 = (0);
while(true){
if((i__4737__auto___21159 < len__4736__auto___21158)){
args__4742__auto__.push((arguments[i__4737__auto___21159]));

var G__21160 = (i__4737__auto___21159 + (1));
i__4737__auto___21159 = G__21160;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gx,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.first(f),null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,gx,null,(1),null)))));
}
}),forms),(new cljs.core.List(null,gx,null,(1),null))], 0))));
}));

(cljs.core$macros.doto.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.doto.cljs$lang$applyTo = (function (seq17547){
var G__17548 = cljs.core.first(seq17547);
var seq17547__$1 = cljs.core.next(seq17547);
var G__17549 = cljs.core.first(seq17547__$1);
var seq17547__$2 = cljs.core.next(seq17547__$1);
var G__17550 = cljs.core.first(seq17547__$2);
var seq17547__$3 = cljs.core.next(seq17547__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17548,G__17549,G__17550,seq17547__$3);
}));

return null;
})()
;
(cljs.core$macros.doto.cljs$lang$macro = true);

cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__21162 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__21163 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__21162;
s = G__21163;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17581){
var vec__17582 = p__17581;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17582,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17582,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,p,null,(1),null)),fs], 0))));
}),impls))));
});
var ret__4785__auto___21164 = (function (){
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21165 = arguments.length;
var i__4737__auto___21166 = (0);
while(true){
if((i__4737__auto___21166 < len__4736__auto___21165)){
args__4742__auto__.push((arguments[i__4737__auto___21166]));

var G__21167 = (i__4737__auto___21166 + (1));
i__4737__auto___21166 = G__21167;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
}));

(cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq17593){
var G__17594 = cljs.core.first(seq17593);
var seq17593__$1 = cljs.core.next(seq17593);
var G__17595 = cljs.core.first(seq17593__$1);
var seq17593__$2 = cljs.core.next(seq17593__$1);
var G__17596 = cljs.core.first(seq17593__$2);
var seq17593__$3 = cljs.core.next(seq17593__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17594,G__17595,G__17596,seq17593__$3);
}));

return null;
})()
;
(cljs.core$macros.extend_protocol.cljs$lang$macro = true);

cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__21169 = cljs.core.next(params__$1);
var G__21170 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__21171 = lets;
params__$1 = G__21169;
new_params = G__21170;
lets = G__21171;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__21172 = cljs.core.next(params__$1);
var G__21173 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__21174 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__21172;
new_params = G__21173;
lets = G__21174;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new_params,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,lets,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
}
break;
}
}
});
var ret__4785__auto___21175 = (function (){
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21176 = arguments.length;
var i__4737__auto___21177 = (0);
while(true){
if((i__4737__auto___21177 < len__4736__auto___21176)){
args__4742__auto__.push((arguments[i__4737__auto___21177]));

var G__21178 = (i__4737__auto___21177 + (1));
i__4737__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?(new cljs.core.List(null,sigs__$1,null,(1),null)):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs__$1))," should be a vector"].join(''):"Parameter declaration missing")))})()));
var psig = (function (sig){
if((!(cljs.core.seq_QMARK_(sig)))){
throw (new Error(["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join('')));
} else {
}

var vec__17672 = sig;
var seq__17673 = cljs.core.seq(vec__17672);
var first__17674 = cljs.core.first(seq__17673);
var seq__17673__$1 = cljs.core.next(seq__17673);
var params = first__17674;
var body = seq__17673__$1;
var _ = (((!(cljs.core.vector_QMARK_(params))))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?["Parameter declaration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(params)," should be a vector"].join(''):["Invalid signature ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig)," should be a list"].join(''))))})():null);
var conds = ((((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body)))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__4126__auto__ = conds;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null)),(new cljs.core.List(null,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body__$1))):cljs.core.first(body__$1)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),post),(new cljs.core.List(null,new cljs.core.Symbol(null,"%","%",-950237169,null),null,(1),null))], 0)))),null,(1),null))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assert","cljs.core/assert",1075777968,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(_AMPERSAND_form));
}));

(cljs.core$macros.fn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.fn.cljs$lang$applyTo = (function (seq17648){
var G__17649 = cljs.core.first(seq17648);
var seq17648__$1 = cljs.core.next(seq17648);
var G__17650 = cljs.core.first(seq17648__$1);
var seq17648__$2 = cljs.core.next(seq17648__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17649,G__17650,seq17648__$2);
}));

return null;
})()
;
(cljs.core$macros.fn.cljs$lang$macro = true);

var ret__4785__auto___21180 = (function (){
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21181 = arguments.length;
var i__4737__auto___21182 = (0);
while(true){
if((i__4737__auto___21182 < len__4736__auto___21181)){
args__4742__auto__.push((arguments[i__4737__auto___21182]));

var G__21183 = (i__4737__auto___21182 + (1));
i__4737__auto___21182 = G__21183;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
}));

(cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq17699){
var G__17700 = cljs.core.first(seq17699);
var seq17699__$1 = cljs.core.next(seq17699);
var G__17701 = cljs.core.first(seq17699__$1);
var seq17699__$2 = cljs.core.next(seq17699__$1);
var G__17702 = cljs.core.first(seq17699__$2);
var seq17699__$3 = cljs.core.next(seq17699__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17700,G__17701,G__17702,seq17699__$3);
}));

return null;
})()
;
(cljs.core$macros.defn_.cljs$lang$macro = true);

var ret__4785__auto___21186 = (function (){
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var G__17716 = arguments.length;
switch (G__17716) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21188 = arguments.length;
var i__4737__auto___21189 = (0);
while(true){
if((i__4737__auto___21189 < len__4736__auto___21188)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21189]));

var G__21190 = (i__4737__auto___21189 + (1));
i__4737__auto___21189 = G__21190;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__17708__auto__","temp__17708__auto__",-803491918,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__17708__auto__","temp__17708__auto__",-803491918,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__17708__auto__","temp__17708__auto__",-803491918,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq17710){
var G__17711 = cljs.core.first(seq17710);
var seq17710__$1 = cljs.core.next(seq17710);
var G__17712 = cljs.core.first(seq17710__$1);
var seq17710__$2 = cljs.core.next(seq17710__$1);
var G__17713 = cljs.core.first(seq17710__$2);
var seq17710__$3 = cljs.core.next(seq17710__$2);
var G__17714 = cljs.core.first(seq17710__$3);
var seq17710__$4 = cljs.core.next(seq17710__$3);
var G__17715 = cljs.core.first(seq17710__$4);
var seq17710__$5 = cljs.core.next(seq17710__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17711,G__17712,G__17713,G__17714,G__17715,seq17710__$5);
}));

(cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5));

return null;
})()
;
(cljs.core$macros.if_let.cljs$lang$macro = true);

var ret__4785__auto___21192 = (function (){
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var G__17727 = arguments.length;
switch (G__17727) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,else$,null,(1),null))], 0))));
}));

(cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5);

return null;
})()
;
(cljs.core$macros.if_not.cljs$lang$macro = true);

var ret__4785__auto___21194 = (function (){
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21195 = arguments.length;
var i__4737__auto___21196 = (0);
while(true){
if((i__4737__auto___21196 < len__4736__auto___21195)){
args__4742__auto__.push((arguments[i__4737__auto___21196]));

var G__21197 = (i__4737__auto___21196 + (1));
i__4737__auto___21196 = G__21197;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17745_SHARP_){
return cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),p1__17745_SHARP_);
}),fnspecs))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq17746){
var G__17747 = cljs.core.first(seq17746);
var seq17746__$1 = cljs.core.next(seq17746);
var G__17748 = cljs.core.first(seq17746__$1);
var seq17746__$2 = cljs.core.next(seq17746__$1);
var G__17749 = cljs.core.first(seq17746__$2);
var seq17746__$3 = cljs.core.next(seq17746__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17747,G__17748,G__17749,seq17746__$3);
}));

return null;
})()
;
(cljs.core$macros.letfn.cljs$lang$macro = true);

var ret__4785__auto___21198 = (function (){
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a JavaScript
 *   method as a first-class fn.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21199 = arguments.length;
var i__4737__auto___21200 = (0);
while(true){
if((i__4737__auto___21200 < len__4736__auto___21199)){
args__4742__auto__.push((arguments[i__4737__auto___21200]));

var G__21201 = (i__4737__auto___21200 + (1));
i__4737__auto___21200 = G__21201;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,t,null,(1),null)),args)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,name,null,(1),null)),args))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq17764){
var G__17765 = cljs.core.first(seq17764);
var seq17764__$1 = cljs.core.next(seq17764);
var G__17766 = cljs.core.first(seq17764__$1);
var seq17764__$2 = cljs.core.next(seq17764__$1);
var G__17767 = cljs.core.first(seq17764__$2);
var seq17764__$3 = cljs.core.next(seq17764__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17765,G__17766,G__17767,seq17764__$3);
}));

return null;
})()
;
(cljs.core$macros.memfn.cljs$lang$macro = true);

var ret__4785__auto___21203 = (function (){
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21204 = arguments.length;
var i__4737__auto___21205 = (0);
while(true){
if((i__4737__auto___21205 < len__4736__auto___21204)){
args__4742__auto__.push((arguments[i__4737__auto___21205]));

var G__21206 = (i__4737__auto___21205 + (1));
i__4737__auto___21205 = G__21206;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros.when.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when.cljs$lang$applyTo = (function (seq17778){
var G__17779 = cljs.core.first(seq17778);
var seq17778__$1 = cljs.core.next(seq17778);
var G__17780 = cljs.core.first(seq17778__$1);
var seq17778__$2 = cljs.core.next(seq17778__$1);
var G__17781 = cljs.core.first(seq17778__$2);
var seq17778__$3 = cljs.core.next(seq17778__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17779,G__17780,G__17781,seq17778__$3);
}));

return null;
})()
;
(cljs.core$macros.when.cljs$lang$macro = true);

var ret__4785__auto___21213 = (function (){
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21214 = arguments.length;
var i__4737__auto___21215 = (0);
while(true){
if((i__4737__auto___21215 < len__4736__auto___21214)){
args__4742__auto__.push((arguments[i__4737__auto___21215]));

var G__21216 = (i__4737__auto___21215 + (1));
i__4737__auto___21215 = G__21216;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-first requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var vec__17810 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17810,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17810,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"xs__17793__auto__","xs__17793__auto__",-1333625184,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,xs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"xs__17793__auto__","xs__17793__auto__",-1333625184,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq17794){
var G__17795 = cljs.core.first(seq17794);
var seq17794__$1 = cljs.core.next(seq17794);
var G__17796 = cljs.core.first(seq17794__$1);
var seq17794__$2 = cljs.core.next(seq17794__$1);
var G__17797 = cljs.core.first(seq17794__$2);
var seq17794__$3 = cljs.core.next(seq17794__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17795,G__17796,G__17797,seq17794__$3);
}));

return null;
})()
;
(cljs.core$macros.when_first.cljs$lang$macro = true);

var ret__4785__auto___21217 = (function (){
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21218 = arguments.length;
var i__4737__auto___21219 = (0);
while(true){
if((i__4737__auto___21219 < len__4736__auto___21218)){
args__4742__auto__.push((arguments[i__4737__auto___21219]));

var G__21220 = (i__4737__auto___21219 + (1));
i__4737__auto___21219 = G__21220;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-let requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__17826__auto__","temp__17826__auto__",1313175868,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__17826__auto__","temp__17826__auto__",1313175868,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__17826__auto__","temp__17826__auto__",1313175868,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq17830){
var G__17831 = cljs.core.first(seq17830);
var seq17830__$1 = cljs.core.next(seq17830);
var G__17832 = cljs.core.first(seq17830__$1);
var seq17830__$2 = cljs.core.next(seq17830__$1);
var G__17833 = cljs.core.first(seq17830__$2);
var seq17830__$3 = cljs.core.next(seq17830__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17831,G__17832,G__17833,seq17830__$3);
}));

return null;
})()
;
(cljs.core$macros.when_let.cljs$lang$macro = true);

var ret__4785__auto___21221 = (function (){
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21222 = arguments.length;
var i__4737__auto___21223 = (0);
while(true){
if((i__4737__auto___21223 < len__4736__auto___21222)){
args__4742__auto__.push((arguments[i__4737__auto___21223]));

var G__21224 = (i__4737__auto___21223 + (1));
i__4737__auto___21223 = G__21224;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(new cljs.core.List(null,test,(new cljs.core.List(null,null,(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body),null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq17848){
var G__17849 = cljs.core.first(seq17848);
var seq17848__$1 = cljs.core.next(seq17848);
var G__17850 = cljs.core.first(seq17848__$1);
var seq17848__$2 = cljs.core.next(seq17848__$1);
var G__17851 = cljs.core.first(seq17848__$2);
var seq17848__$3 = cljs.core.next(seq17848__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17849,G__17850,G__17851,seq17848__$3);
}));

return null;
})()
;
(cljs.core$macros.when_not.cljs$lang$macro = true);

var ret__4785__auto___21228 = (function (){
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21229 = arguments.length;
var i__4737__auto___21230 = (0);
while(true){
if((i__4737__auto___21230 < len__4736__auto___21229)){
args__4742__auto__.push((arguments[i__4737__auto___21230]));

var G__21231 = (i__4737__auto___21230 + (1));
i__4737__auto___21230 = G__21231;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.while$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.while$.cljs$lang$applyTo = (function (seq17860){
var G__17861 = cljs.core.first(seq17860);
var seq17860__$1 = cljs.core.next(seq17860);
var G__17862 = cljs.core.first(seq17860__$1);
var seq17860__$2 = cljs.core.next(seq17860__$1);
var G__17863 = cljs.core.first(seq17860__$2);
var seq17860__$3 = cljs.core.next(seq17860__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17861,G__17862,G__17863,seq17860__$3);
}));

return null;
})()
;
(cljs.core$macros.while$.cljs$lang$macro = true);

var ret__4785__auto___21232 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21233 = arguments.length;
var i__4737__auto___21234 = (0);
while(true){
if((i__4737__auto___21234 < len__4736__auto___21233)){
args__4742__auto__.push((arguments[i__4737__auto___21234]));

var G__21235 = (i__4737__auto___21234 + (1));
i__4737__auto___21234 = G__21235;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17878){
var vec__17883 = p__17878;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq17874){
var G__17875 = cljs.core.first(seq17874);
var seq17874__$1 = cljs.core.next(seq17874);
var G__17876 = cljs.core.first(seq17874__$1);
var seq17874__$2 = cljs.core.next(seq17874__$1);
var G__17877 = cljs.core.first(seq17874__$2);
var seq17874__$3 = cljs.core.next(seq17874__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17875,G__17876,G__17877,seq17874__$3);
}));

return null;
})()
;
(cljs.core$macros.cond__GT_.cljs$lang$macro = true);

var ret__4785__auto___21266 = (function (){
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21267 = arguments.length;
var i__4737__auto___21268 = (0);
while(true){
if((i__4737__auto___21268 < len__4736__auto___21267)){
args__4742__auto__.push((arguments[i__4737__auto___21268]));

var G__21269 = (i__4737__auto___21268 + (1));
i__4737__auto___21268 = G__21269;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17927){
var vec__17931 = p__17927;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17931,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17931,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,test,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))], 0))));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq17916){
var G__17917 = cljs.core.first(seq17916);
var seq17916__$1 = cljs.core.next(seq17916);
var G__17918 = cljs.core.first(seq17916__$1);
var seq17916__$2 = cljs.core.next(seq17916__$1);
var G__17919 = cljs.core.first(seq17916__$2);
var seq17916__$3 = cljs.core.next(seq17916__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17917,G__17918,G__17919,seq17916__$3);
}));

return null;
})()
;
(cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true);

var ret__4785__auto___21297 = (function (){
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21298 = arguments.length;
var i__4737__auto___21299 = (0);
while(true){
if((i__4737__auto___21299 < len__4736__auto___21298)){
args__4742__auto__.push((arguments[i__4737__auto___21299]));

var G__21300 = (i__4737__auto___21299 + (1));
i__4737__auto___21299 = G__21300;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),cljs.core.butlast(forms))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(forms))?name:cljs.core.last(forms)),null,(1),null))], 0))));
}));

(cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq17973){
var G__17974 = cljs.core.first(seq17973);
var seq17973__$1 = cljs.core.next(seq17973);
var G__17975 = cljs.core.first(seq17973__$1);
var seq17973__$2 = cljs.core.next(seq17973__$1);
var G__17976 = cljs.core.first(seq17973__$2);
var seq17973__$3 = cljs.core.next(seq17973__$2);
var G__17977 = cljs.core.first(seq17973__$3);
var seq17973__$4 = cljs.core.next(seq17973__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17974,G__17975,G__17976,G__17977,seq17973__$4);
}));

return null;
})()
;
(cljs.core$macros.as__GT_.cljs$lang$macro = true);

var ret__4785__auto___21309 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21311 = arguments.length;
var i__4737__auto___21312 = (0);
while(true){
if((i__4737__auto___21312 < len__4736__auto___21311)){
args__4742__auto__.push((arguments[i__4737__auto___21312]));

var G__21313 = (i__4737__auto___21312 + (1));
i__4737__auto___21312 = G__21313;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq17995){
var G__17996 = cljs.core.first(seq17995);
var seq17995__$1 = cljs.core.next(seq17995);
var G__17997 = cljs.core.first(seq17995__$1);
var seq17995__$2 = cljs.core.next(seq17995__$1);
var G__17998 = cljs.core.first(seq17995__$2);
var seq17995__$3 = cljs.core.next(seq17995__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17996,G__17997,G__17998,seq17995__$3);
}));

return null;
})()
;
(cljs.core$macros.some__GT_.cljs$lang$macro = true);

var ret__4785__auto___21314 = (function (){
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21315 = arguments.length;
var i__4737__auto___21316 = (0);
while(true){
if((i__4737__auto___21316 < len__4736__auto___21315)){
args__4742__auto__.push((arguments[i__4737__auto___21316]));

var G__21317 = (i__4737__auto___21316 + (1));
i__4737__auto___21316 = G__21317;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var steps = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->>","cljs.core/->>",-1207871206,null),null,(1),null)),(new cljs.core.List(null,g,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,step,null,(1),null))], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,g,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.butlast(steps))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,((cljs.core.empty_QMARK_(steps))?g:cljs.core.last(steps)),null,(1),null))], 0))));
}));

(cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq18023){
var G__18024 = cljs.core.first(seq18023);
var seq18023__$1 = cljs.core.next(seq18023);
var G__18025 = cljs.core.first(seq18023__$1);
var seq18023__$2 = cljs.core.next(seq18023__$1);
var G__18026 = cljs.core.first(seq18023__$2);
var seq18023__$3 = cljs.core.next(seq18023__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18024,G__18025,G__18026,seq18023__$3);
}));

return null;
})()
;
(cljs.core$macros.some__GT__GT_.cljs$lang$macro = true);

var ret__4785__auto___21322 = (function (){
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var G__18069 = arguments.length;
switch (G__18069) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21324 = arguments.length;
var i__4737__auto___21325 = (0);
while(true){
if((i__4737__auto___21325 < len__4736__auto___21324)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21325]));

var G__21326 = (i__4737__auto___21325 + (1));
i__4737__auto___21325 = G__21326;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-some","cljs.core/if-some",790328718,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.empty_QMARK_(oldform)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires 1 or 2 forms after binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("if-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__18056__auto__","temp__18056__auto__",-1240121388,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__18056__auto__","temp__18056__auto__",-1240121388,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,else$,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__18056__auto__","temp__18056__auto__",-1240121388,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,then,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq18063){
var G__18064 = cljs.core.first(seq18063);
var seq18063__$1 = cljs.core.next(seq18063);
var G__18065 = cljs.core.first(seq18063__$1);
var seq18063__$2 = cljs.core.next(seq18063__$1);
var G__18066 = cljs.core.first(seq18063__$2);
var seq18063__$3 = cljs.core.next(seq18063__$2);
var G__18067 = cljs.core.first(seq18063__$3);
var seq18063__$4 = cljs.core.next(seq18063__$3);
var G__18068 = cljs.core.first(seq18063__$4);
var seq18063__$5 = cljs.core.next(seq18063__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18064,G__18065,G__18066,G__18067,G__18068,seq18063__$5);
}));

(cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5));

return null;
})()
;
(cljs.core$macros.if_some.cljs$lang$macro = true);

var ret__4785__auto___21335 = (function (){
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21336 = arguments.length;
var i__4737__auto___21337 = (0);
while(true){
if((i__4737__auto___21337 < len__4736__auto___21336)){
args__4742__auto__.push((arguments[i__4737__auto___21337]));

var G__21338 = (i__4737__auto___21337 + (1));
i__4737__auto___21337 = G__21338;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("when-some requires exactly 2 forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"temp__18112__auto__","temp__18112__auto__",-469729623,null),null,(1),null)),(new cljs.core.List(null,tst,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__18112__auto__","temp__18112__auto__",-469729623,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"temp__18112__auto__","temp__18112__auto__",-469729623,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq18117){
var G__18118 = cljs.core.first(seq18117);
var seq18117__$1 = cljs.core.next(seq18117);
var G__18119 = cljs.core.first(seq18117__$1);
var seq18117__$2 = cljs.core.next(seq18117__$1);
var G__18120 = cljs.core.first(seq18117__$2);
var seq18117__$3 = cljs.core.next(seq18117__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18118,G__18119,G__18120,seq18117__$3);
}));

return null;
})()
;
(cljs.core$macros.when_some.cljs$lang$macro = true);

/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18159_SHARP_){
if(cljs.core.seq_QMARK_(p1__18159_SHARP_)){
return cljs.core.first(p1__18159_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?["Invalid signature \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18159_SHARP_),"\" should be a list"].join(''):["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18159_SHARP_),"\" should be a vector"].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18164_SHARP_){
return cljs.core.vector_QMARK_(p1__18164_SHARP_);
}),argdecls));
if(bad_args){
throw (new Error(["Parameter declaration \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(bad_args)),"\" should be a vector"].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__21348 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__21349 = cljs.core.next(fdecls);
ret = G__21348;
fdecls = G__21349;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return (new cljs.core.List(null,asig(fdecl),null,(1),null));
}
});
var ret__4785__auto___21350 = /**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,init,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.defonce.cljs$lang$macro = true);

cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var gseq = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var gfirst = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("first__");
var has_rest = cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(bvec__$1,gvec,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([val], 0));
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gseq,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),(new cljs.core.List(null,gvec,null,(1),null)),(2),null))], 0));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__21355 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gseq);
var G__21356 = n;
var G__21357 = cljs.core.nnext(bs);
var G__21358 = true;
ret = G__21355;
n = G__21356;
bs = G__21357;
seen_rest_QMARK_ = G__21358;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(cljs.core.truth_(seen_rest_QMARK_)){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__21359 = cljs$core$macros$destructure_$_pb((cljs.core.truth_(has_rest)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,gfirst,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null))))),gseq,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,gseq,null,(1),null)))))], 0)):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null),(new cljs.core.List(null,gvec,(new cljs.core.List(null,n,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null))));
var G__21360 = (n + (1));
var G__21361 = cljs.core.next(bs);
var G__21362 = seen_rest_QMARK_;
ret = G__21359;
n = G__21360;
bs = G__21361;
seen_rest_QMARK_ = G__21362;
continue;
}

}
}
} else {
return ret;
}
break;
}
});
var pmap = (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","implements?","cljs.core/implements?",-251485149,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gmap,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gmap,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,gmap,null,(1),null))], 0))))));
var bes = (function (){var transforms = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace(mk);
var mkn = cljs.core.name(mk);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"keys")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__18233_SHARP_){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = mkns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.namespace(p1__18233_SHARP_);
}
})(),cljs.core.name(p1__18233_SHARP_));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"syms")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,(function (p1__18234_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = mkns;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.namespace(p1__18234_SHARP_);
}
})(),cljs.core.name(p1__18234_SHARP_)),null,(1),null)),(2),null));
}));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mkn,"strs")){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys(b__$1));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18235_SHARP_,p2__18236_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18235_SHARP_,p2__18236_SHARP_,(function (){var fexpr__18356 = cljs.core.val(entry);
return (fexpr__18356.cljs$core$IFn$_invoke$arity$1 ? fexpr__18356.cljs$core$IFn$_invoke$arity$1(p2__18236_SHARP_) : fexpr__18356.call(null,p2__18236_SHARP_));
})());
}),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),(function (){var fexpr__18357 = cljs.core.key(entry);
return (fexpr__18357.cljs$core$IFn$_invoke$arity$1 ? fexpr__18357.cljs$core$IFn$_invoke$arity$1(bes) : fexpr__18357.call(null,bes));
})());
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"or","or",235744169)], 0)),transforms);
})();
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var local = (((((!((bb == null))))?(((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$))))?true:false):false))?cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(null,cljs.core.name(bb)),cljs.core.meta(bb)):bb);
var bv = ((cljs.core.contains_QMARK_(defaults,local))?(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,(new cljs.core.List(null,(defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(local) : defaults.call(null,local)),null,(1),null)),(2),null)),(3),null)),(4),null)):(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),(new cljs.core.List(null,gmap,(new cljs.core.List(null,bk,null,(1),null)),(2),null)),(3),null)));
var G__21371 = (((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,local,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bv], 0)):cljs$core$macros$destructure_$_pb(ret,bb,bv));
var G__21372 = cljs.core.next(bes);
ret = G__21371;
bes = G__21372;
continue;
} else {
return ret;
}
break;
}
});
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error(["Unsupported binding form: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

}
}
}
}
});
var process_entry = (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__5733__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__18237_SHARP_){
return (cljs.core.first(p1__18237_SHARP_) instanceof cljs.core.Keyword);
}),bents));
if(temp__5733__auto__){
var kwbs = temp__5733__auto__;
throw (new Error(["Unsupported binding key: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
var ret__4785__auto___21375 = (function (){
cljs.core$macros.return_first = (function cljs$core$macros$return_first(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21377 = arguments.length;
var i__4737__auto___21378 = (0);
while(true){
if((i__4737__auto___21378 < len__4736__auto___21377)){
args__4742__auto__.push((arguments[i__4737__auto___21378]));

var G__21380 = (i__4737__auto___21378 + (1));
i__4737__auto___21378 = G__21380;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.return_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__18361__auto__","ret__18361__auto__",1705987121,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(body),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(body),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__18361__auto__","ret__18361__auto__",1705987121,null),null,(1),null))], 0))));
}));

(cljs.core$macros.return_first.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.return_first.cljs$lang$applyTo = (function (seq18362){
var G__18363 = cljs.core.first(seq18362);
var seq18362__$1 = cljs.core.next(seq18362);
var G__18364 = cljs.core.first(seq18362__$1);
var seq18362__$2 = cljs.core.next(seq18362__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18363,G__18364,seq18362__$2);
}));

return null;
})()
;
(cljs.core$macros.return_first.cljs$lang$macro = true);

var ret__4785__auto___21381 = /**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if(((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("goog-define requires a string, number or boolean as default value",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var defname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":((((default$ === true) || (default$ === false)))?"boolean":null)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env))?new cljs.core.Symbol("cljs.core","return-first","cljs.core/return-first",529240168,null):new cljs.core.Symbol(null,"do","do",1686842252,null)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","declare","cljs.core/declare",1312638100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
var G__18418 = m;
if((!(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"tag","tag",-1290361223))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18418,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(type));
} else {
return G__18418;
}
})),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(sym,cljs.core.assoc,new cljs.core.Keyword(null,"goog-define","goog-define",-1048305441),type),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog","define","goog/define",-352722538,null),null,(1),null)),(new cljs.core.List(null,defname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.goog_define.cljs$lang$macro = true);

var ret__4785__auto___21386 = (function (){
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21387 = arguments.length;
var i__4737__auto___21388 = (0);
while(true){
if((i__4737__auto___21388 < len__4736__auto___21387)){
args__4742__auto__.push((arguments[i__4737__auto___21388]));

var G__21389 = (i__4737__auto___21388 + (1));
i__4737__auto___21388 = G__21389;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("let requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.destructure(bindings),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.let$.cljs$lang$applyTo = (function (seq18489){
var G__18490 = cljs.core.first(seq18489);
var seq18489__$1 = cljs.core.next(seq18489);
var G__18491 = cljs.core.first(seq18489__$1);
var seq18489__$2 = cljs.core.next(seq18489__$1);
var G__18492 = cljs.core.first(seq18489__$2);
var seq18489__$3 = cljs.core.next(seq18489__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18490,G__18491,G__18492,seq18489__$3);
}));

return null;
})()
;
(cljs.core$macros.let$.cljs$lang$macro = true);

var ret__4785__auto___21394 = (function (){
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21395 = arguments.length;
var i__4737__auto___21396 = (0);
while(true){
if((i__4737__auto___21396 < len__4736__auto___21395)){
args__4742__auto__.push((arguments[i__4737__auto___21396]));

var G__21397 = (i__4737__auto___21396 + (1));
i__4737__auto___21396 = G__21397;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_(bindings)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(bindings))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("loop requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
}),bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,p__18584){
var vec__18586 = p__18584;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18586,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18586,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v,b,g], 0));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bfs,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

(cljs.core$macros.loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.loop.cljs$lang$applyTo = (function (seq18513){
var G__18514 = cljs.core.first(seq18513);
var seq18513__$1 = cljs.core.next(seq18513);
var G__18515 = cljs.core.first(seq18513__$1);
var seq18513__$2 = cljs.core.next(seq18513__$1);
var G__18516 = cljs.core.first(seq18513__$2);
var seq18513__$3 = cljs.core.next(seq18513__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18514,G__18515,G__18516,seq18513__$3);
}));

return null;
})()
;
(cljs.core$macros.loop.cljs$lang$macro = true);

/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18602_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18602_SHARP_));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null)], true)),cljs.core.iterate((function (p__18603){
var vec__18604 = p__18603;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18604,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18604,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
cljs.core$macros.compatible_QMARK_ = (function cljs$core$macros$compatible_QMARK_(inferred_tag,allowed_tags){
if(cljs.core.set_QMARK_(inferred_tag)){
return clojure.set.subset_QMARK_(inferred_tag,allowed_tags);
} else {
return cljs.core.contains_QMARK_(allowed_tags,inferred_tag);
}
});
cljs.core$macros.typed_expr_QMARK_ = (function cljs$core$macros$typed_expr_QMARK_(env,form,allowed_tags){
return cljs.core$macros.compatible_QMARK_(cljs.analyzer.infer_tag(env,(function (){var _STAR_cljs_warnings_STAR__orig_val__18636 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__18637 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__18637);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__18636);
}})()),allowed_tags);
});
cljs.core$macros.string_expr = (function cljs$core$macros$string_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"string","string",-349010059,null));
});
var ret__4785__auto___21398 = (function (){
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var G__18648 = arguments.length;
switch (G__18648) {
case 2:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21400 = arguments.length;
var i__4737__auto___21401 = (0);
while(true){
if((i__4737__auto___21401 < len__4736__auto___21400)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21401]));

var G__21402 = (i__4737__auto___21401 + (1));
i__4737__auto___21401 = G__21402;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.str.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return "";
}));

(cljs.core$macros.str.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core$macros.typed_expr_QMARK_(_AMPERSAND_env,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null"], null), null))){
return x;
} else {
return cljs.core$macros.string_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
}
}));

(cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,ys){
var interpolate = (function (x__$1){
if(cljs.core$macros.typed_expr_QMARK_(_AMPERSAND_env,x__$1,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"string","string",-349010059,null),"null",new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),"null"], null), null))){
return "~{}";
} else {
return "cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})";
}
});
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.map.cljs$core$IFn$_invoke$arity$2(interpolate,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(x,ys))));
return cljs.core$macros.string_expr(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join('')"].join(''),x,ys));
}));

/** @this {Function} */
(cljs.core$macros.str.cljs$lang$applyTo = (function (seq18643){
var G__18644 = cljs.core.first(seq18643);
var seq18643__$1 = cljs.core.next(seq18643);
var G__18645 = cljs.core.first(seq18643__$1);
var seq18643__$2 = cljs.core.next(seq18643__$1);
var G__18646 = cljs.core.first(seq18643__$2);
var seq18643__$3 = cljs.core.next(seq18643__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18644,G__18645,G__18646,seq18643__$3);
}));

(cljs.core$macros.str.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.str.cljs$lang$macro = true);

cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__4115__auto__ = (function (){var G__18745 = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast);
var fexpr__18744 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"host-field","host-field",-72662140),null,new cljs.core.Keyword(null,"const","const",1709929842),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"js-var","js-var",-1177899142),null,new cljs.core.Keyword(null,"host-call","host-call",1059629755),null,new cljs.core.Keyword(null,"local","local",-1497766724),null], null), null);
return (fexpr__18744.cljs$core$IFn$_invoke$arity$1 ? fexpr__18744.cljs$core$IFn$_invoke$arity$1(G__18745) : fexpr__18744.call(null,G__18745));
})();
if(cljs.core.truth_(and__4115__auto__)){
var G__18752 = cljs.analyzer.infer_tag(env,ast);
var fexpr__18751 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),"null",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null);
return (fexpr__18751.cljs$core$IFn$_invoke$arity$1 ? fexpr__18751.cljs$core$IFn$_invoke$arity$1(G__18752) : fexpr__18751.call(null,G__18752));
} else {
return and__4115__auto__;
}
});
var ret__4785__auto___21403 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var G__18773 = arguments.length;
switch (G__18773) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21405 = arguments.length;
var i__4737__auto___21406 = (0);
while(true){
if((i__4737__auto___21406 < len__4736__auto___21405)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21406]));

var G__21407 = (i__4737__auto___21406 + (1));
i__4737__auto___21406 = G__21407;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
}));

(cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_((function (p1__18757_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__18757_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18758_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__18798 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__18799 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__18799);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__18758_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__18798);
}}),forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (p1__18759_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__18759_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null)], 0));
})(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})"))));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,and_str,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
if(cljs.core$macros.typed_expr_QMARK_(_AMPERSAND_env,x,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null"], null), null))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"and__18760__auto__","and__18760__auto__",1900197889,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__18760__auto__","and__18760__auto__",1900197889,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),next))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"and__18760__auto__","and__18760__auto__",1900197889,null),null,(1),null))], 0)))),null,(1),null))], 0))));

}
}
}));

/** @this {Function} */
(cljs.core$macros.and.cljs$lang$applyTo = (function (seq18766){
var G__18767 = cljs.core.first(seq18766);
var seq18766__$1 = cljs.core.next(seq18766);
var G__18768 = cljs.core.first(seq18766__$1);
var seq18766__$2 = cljs.core.next(seq18766__$1);
var G__18769 = cljs.core.first(seq18766__$2);
var seq18766__$3 = cljs.core.next(seq18766__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18767,G__18768,G__18769,seq18766__$3);
}));

(cljs.core$macros.and.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.and.cljs$lang$macro = true);

var ret__4785__auto___21408 = (function (){
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var G__18873 = arguments.length;
switch (G__18873) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21410 = arguments.length;
var i__4737__auto___21411 = (0);
while(true){
if((i__4737__auto___21411 < len__4736__auto___21410)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21411]));

var G__21412 = (i__4737__auto___21411 + (1));
i__4737__auto___21411 = G__21412;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
}));

(cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_((function (p1__18858_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__18858_SHARP_);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18859_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__18880 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__18881 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__18881);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__18859_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__18880);
}}),forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,(function (p1__18860_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["("], null),p1__18860_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [")"], null)], 0));
})(cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})"))));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,or_str,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"or__18861__auto__","or__18861__auto__",-919066282,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"or__18861__auto__","or__18861__auto__",-919066282,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"or__18861__auto__","or__18861__auto__",-919066282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),next))),null,(1),null))], 0)))),null,(1),null))], 0))));
}
}));

/** @this {Function} */
(cljs.core$macros.or.cljs$lang$applyTo = (function (seq18867){
var G__18869 = cljs.core.first(seq18867);
var seq18867__$1 = cljs.core.next(seq18867);
var G__18870 = cljs.core.first(seq18867__$1);
var seq18867__$2 = cljs.core.next(seq18867__$1);
var G__18871 = cljs.core.first(seq18867__$2);
var seq18867__$3 = cljs.core.next(seq18867__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18869,G__18870,G__18871,seq18867__$3);
}));

(cljs.core$macros.or.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.or.cljs$lang$macro = true);

var ret__4785__auto___21413 = cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-=","cljs.core/coercive-=",-2012120473,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))));
});
(cljs.core$macros.nil_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21414 = cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)))));
});
(cljs.core$macros.some_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21415 = cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(!~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.coercive_not.cljs$lang$macro = true);

var ret__4785__auto___21416 = cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true);

var ret__4785__auto___21417 = cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} == ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.coercive__EQ_.cljs$lang$macro = true);

var ret__4785__auto___21418 = cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});
(cljs.core$macros.coercive_boolean.cljs$lang$macro = true);

var ret__4785__auto___21419 = cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","x is substituted twice","\n","(core/symbol? x)"].join('')));
}

return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} != null && ~{} !== false)",(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.truth_.cljs$lang$macro = true);

var ret__4785__auto___21420 = cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"arguments",null,(1),null)),(2),null));
});
(cljs.core$macros.js_arguments.cljs$lang$macro = true);

var ret__4785__auto___21421 = cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"delete ~{}[~{}]",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.js_delete.cljs$lang$macro = true);

var ret__4785__auto___21422 = cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} in ~{}",(new cljs.core.List(null,key,(new cljs.core.List(null,obj,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.js_in.cljs$lang$macro = true);

var ret__4785__auto___21423 = /**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"debugger",null,(1),null)),(2),null)),(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.js_debugger.cljs$lang$macro = true);

var ret__4785__auto___21424 = /**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__18983 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(comment,/\n/);
var seq__18984 = cljs.core.seq(vec__18983);
var first__18985 = cljs.core.first(seq__18984);
var seq__18984__$1 = cljs.core.next(seq__18984);
var x = first__18985;
var ys = seq__18984__$1;
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["\n/**\n",[" * ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\n"].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18982_SHARP_){
return [" * ",clojure.string.replace(p1__18982_SHARP_,/^   /,""),"\n"].join('');
}),ys)))," */\n"].join(''),null,(1),null)),(2),null));
});
(cljs.core$macros.js_comment.cljs$lang$macro = true);

var ret__4785__auto___21425 = /**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = ["~{} = /** @type {",cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),"} */ (~{})"].join('');
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,cast_expr,(new cljs.core.List(null,x,(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.unsafe_cast.cljs$lang$macro = true);

var ret__4785__auto___21426 = /**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,["/**",cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),"*/"].join(''),null,(1),null)),(2),null));
});
(cljs.core$macros.js_inline_comment.cljs$lang$macro = true);

var ret__4785__auto___21427 = cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === true",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.true_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21428 = cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{} === false",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.false_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21429 = cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'string'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.string_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21430 = /**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
var x__$1 = (function (){var G__19049 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,x));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",cljs.core.namespace(x))){
return cljs.core.name(G__19049);
} else {
return G__19049;
}
})();
var segs = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(x__$1),"/","."),/\./);
var n = cljs.core.count(segs);
var syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19001_SHARP_){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",p1__19001_SHARP_)),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
}),cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.iterate(cljs.core.butlast,segs))));
var js = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"(typeof ~{} !== 'undefined')"));
return cljs.core$macros.bool_expr(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,js,null,(1),null)),(2),null)),syms));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
}
});
(cljs.core$macros.exists_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21431 = /**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(void 0 === ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21432 = cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,a,(new cljs.core.List(null,b,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.identical_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21433 = cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr((((c instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} instanceof ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,c,null,(1),null)),(2),null)),(3),null)),(4),null)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"c__19125__auto__","c__19125__auto__",1583177870,null),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__19126__auto__","x__19126__auto__",929988806,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"(~{} instanceof ~{})",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__19126__auto__","x__19126__auto__",929988806,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__19125__auto__","c__19125__auto__",1583177870,null),null,(1),null))], 0)))),null,(1),null))], 0))))));
});
(cljs.core$macros.instance_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21434 = cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"typeof ~{} === 'number'",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null)));
});
(cljs.core$macros.number_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21435 = cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))));
});
(cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21436 = cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))));
});
(cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21437 = (function (){
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var G__19158 = arguments.length;
switch (G__19158) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21439 = arguments.length;
var i__4737__auto___21440 = (0);
while(true){
if((i__4737__auto___21440 < len__4736__auto___21439)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21440]));

var G__21441 = (i__4737__auto___21440 + (1));
i__4737__auto___21440 = G__21441;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx){
var G__19164 = cljs.analyzer.checked_arrays();
var G__19164__$1 = (((G__19164 instanceof cljs.core.Keyword))?G__19164.fqn:null);
switch (G__19164__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null))], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null))], 0))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,null,(1),null)),(2),null)),(3),null)),(4),null));

}
}));

(cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idxs){
var G__19170 = cljs.analyzer.checked_arrays();
var G__19170__$1 = (((G__19170 instanceof cljs.core.Keyword))?G__19170.fqn:null);
switch (G__19170__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget","cljs.core/checked-aget",24024561,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),idxs], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aget'","cljs.core/checked-aget'",1960922245,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),idxs], 0))));

break;
default:
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),")"].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),idxs], 0))));

}
}));

/** @this {Function} */
(cljs.core$macros.aget.cljs$lang$applyTo = (function (seq19153){
var G__19154 = cljs.core.first(seq19153);
var seq19153__$1 = cljs.core.next(seq19153);
var G__19155 = cljs.core.first(seq19153__$1);
var seq19153__$2 = cljs.core.next(seq19153__$1);
var G__19156 = cljs.core.first(seq19153__$2);
var seq19153__$3 = cljs.core.next(seq19153__$2);
var G__19157 = cljs.core.first(seq19153__$3);
var seq19153__$4 = cljs.core.next(seq19153__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19154,G__19155,G__19156,G__19157,seq19153__$4);
}));

(cljs.core$macros.aget.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.aget.cljs$lang$macro = true);

var ret__4785__auto___21444 = (function (){
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var G__19207 = arguments.length;
switch (G__19207) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21446 = arguments.length;
var i__4737__auto___21447 = (0);
while(true){
if((i__4737__auto___21447 < len__4736__auto___21446)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21447]));

var G__21448 = (i__4737__auto___21447 + (1));
i__4737__auto___21447 = G__21448;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4758__auto__);

}
});

(cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,val){
var G__19220 = cljs.analyzer.checked_arrays();
var G__19220__$1 = (((G__19220 instanceof cljs.core.Keyword))?G__19220.fqn:null);
switch (G__19220__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))], 0))));

break;
default:
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,array,(new cljs.core.List(null,idx,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));

}
}));

(cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,array,idx,idx2,idxv){
var G__19239 = cljs.analyzer.checked_arrays();
var G__19239__$1 = (((G__19239 instanceof cljs.core.Keyword))?G__19239.fqn:null);
switch (G__19239__$1) {
case "warn":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset","cljs.core/checked-aset",-2080232353,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv], 0))));

break;
case "error":
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","checked-aset'","cljs.core/checked-aset'",163859714,null),null,(1),null)),(new cljs.core.List(null,array,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv], 0))));

break;
default:
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,["(~{}[~{}][~{}]",cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr)," = ~{})"].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,array,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,idx2,null,(1),null)),idxv], 0))));

}
}));

/** @this {Function} */
(cljs.core$macros.aset.cljs$lang$applyTo = (function (seq19197){
var G__19198 = cljs.core.first(seq19197);
var seq19197__$1 = cljs.core.next(seq19197);
var G__19199 = cljs.core.first(seq19197__$1);
var seq19197__$2 = cljs.core.next(seq19197__$1);
var G__19200 = cljs.core.first(seq19197__$2);
var seq19197__$3 = cljs.core.next(seq19197__$2);
var G__19201 = cljs.core.first(seq19197__$3);
var seq19197__$4 = cljs.core.next(seq19197__$3);
var G__19202 = cljs.core.first(seq19197__$4);
var seq19197__$5 = cljs.core.next(seq19197__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19198,G__19199,G__19200,G__19201,G__19202,seq19197__$5);
}));

(cljs.core$macros.aset.cljs$lang$maxFixedArity = (5));

return null;
})()
;
(cljs.core$macros.aset.cljs$lang$macro = true);

var ret__4785__auto___21451 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_get = (function cljs$core$macros$unchecked_get(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}])",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.unchecked_get.cljs$lang$macro = true);

var ret__4785__auto___21452 = /**
 * INTERNAL. Compiles to JavaScript property access using bracket notation. Does
 *   not distinguish between object and array types and not subject to compiler
 *   static analysis.
 */
cljs.core$macros.unchecked_set = (function cljs$core$macros$unchecked_set(_AMPERSAND_form,_AMPERSAND_env,obj,key,val){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{}[~{}] = ~{})",(new cljs.core.List(null,obj,(new cljs.core.List(null,key,(new cljs.core.List(null,val,null,(1),null)),(2),null)),(3),null)),(4),null)),(5),null));
});
(cljs.core$macros.unchecked_set.cljs$lang$macro = true);

var ret__4785__auto___21453 = (function (){
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var G__19305 = arguments.length;
switch (G__19305) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21455 = arguments.length;
var i__4737__auto___21456 = (0);
while(true){
if((i__4737__auto___21456 < len__4736__auto___21455)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21456]));

var G__21457 = (i__4737__auto___21456 + (1));
i__4737__auto___21456 = G__21457;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
}));

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} + ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq19299){
var G__19300 = cljs.core.first(seq19299);
var seq19299__$1 = cljs.core.next(seq19299);
var G__19301 = cljs.core.first(seq19299__$1);
var seq19299__$2 = cljs.core.next(seq19299__$1);
var G__19302 = cljs.core.first(seq19299__$2);
var seq19299__$3 = cljs.core.next(seq19299__$2);
var G__19303 = cljs.core.first(seq19299__$3);
var seq19299__$4 = cljs.core.next(seq19299__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19300,G__19301,G__19302,G__19303,seq19299__$4);
}));

(cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._PLUS_.cljs$lang$macro = true);

var ret__4785__auto___21458 = cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.byte$.cljs$lang$macro = true);

var ret__4785__auto___21459 = cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.short$.cljs$lang$macro = true);

var ret__4785__auto___21460 = cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.float$.cljs$lang$macro = true);

var ret__4785__auto___21461 = cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.double$.cljs$lang$macro = true);

var ret__4785__auto___21462 = cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_byte.cljs$lang$macro = true);

var ret__4785__auto___21463 = cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_char.cljs$lang$macro = true);

var ret__4785__auto___21464 = cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_short.cljs$lang$macro = true);

var ret__4785__auto___21465 = cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_float.cljs$lang$macro = true);

var ret__4785__auto___21466 = cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});
(cljs.core$macros.unchecked_double.cljs$lang$macro = true);

var ret__4785__auto___21467 = (function (){
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21468 = arguments.length;
var i__4737__auto___21469 = (0);
while(true){
if((i__4737__auto___21469 < len__4736__auto___21468)){
args__4742__auto__.push((arguments[i__4737__auto___21469]));

var G__21470 = (i__4737__auto___21469 + (1));
i__4737__auto___21469 = G__21470;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq19497){
var G__19498 = cljs.core.first(seq19497);
var seq19497__$1 = cljs.core.next(seq19497);
var G__19499 = cljs.core.first(seq19497__$1);
var seq19497__$2 = cljs.core.next(seq19497__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19498,G__19499,seq19497__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_add.cljs$lang$macro = true);

var ret__4785__auto___21471 = (function (){
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21472 = arguments.length;
var i__4737__auto___21473 = (0);
while(true){
if((i__4737__auto___21473 < len__4736__auto___21472)){
args__4742__auto__.push((arguments[i__4737__auto___21473]));

var G__21474 = (i__4737__auto___21473 + (1));
i__4737__auto___21473 = G__21474;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq19500){
var G__19501 = cljs.core.first(seq19500);
var seq19500__$1 = cljs.core.next(seq19500);
var G__19502 = cljs.core.first(seq19500__$1);
var seq19500__$2 = cljs.core.next(seq19500__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19501,G__19502,seq19500__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_add_int.cljs$lang$macro = true);

var ret__4785__auto___21475 = cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_dec.cljs$lang$macro = true);

var ret__4785__auto___21476 = cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true);

var ret__4785__auto___21477 = (function (){
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21478 = arguments.length;
var i__4737__auto___21479 = (0);
while(true){
if((i__4737__auto___21479 < len__4736__auto___21478)){
args__4742__auto__.push((arguments[i__4737__auto___21479]));

var G__21480 = (i__4737__auto___21479 + (1));
i__4737__auto___21479 = G__21480;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq19516){
var G__19517 = cljs.core.first(seq19516);
var seq19516__$1 = cljs.core.next(seq19516);
var G__19518 = cljs.core.first(seq19516__$1);
var seq19516__$2 = cljs.core.next(seq19516__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19517,G__19518,seq19516__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true);

var ret__4785__auto___21481 = cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_inc.cljs$lang$macro = true);

var ret__4785__auto___21482 = cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true);

var ret__4785__auto___21483 = (function (){
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21484 = arguments.length;
var i__4737__auto___21485 = (0);
while(true){
if((i__4737__auto___21485 < len__4736__auto___21484)){
args__4742__auto__.push((arguments[i__4737__auto___21485]));

var G__21486 = (i__4737__auto___21485 + (1));
i__4737__auto___21485 = G__21486;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq19532){
var G__19533 = cljs.core.first(seq19532);
var seq19532__$1 = cljs.core.next(seq19532);
var G__19534 = cljs.core.first(seq19532__$1);
var seq19532__$2 = cljs.core.next(seq19532__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19533,G__19534,seq19532__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_multiply.cljs$lang$macro = true);

var ret__4785__auto___21487 = (function (){
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21488 = arguments.length;
var i__4737__auto___21489 = (0);
while(true){
if((i__4737__auto___21489 < len__4736__auto___21488)){
args__4742__auto__.push((arguments[i__4737__auto___21489]));

var G__21490 = (i__4737__auto___21489 + (1));
i__4737__auto___21489 = G__21490;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq19536){
var G__19537 = cljs.core.first(seq19536);
var seq19536__$1 = cljs.core.next(seq19536);
var G__19538 = cljs.core.first(seq19536__$1);
var seq19536__$2 = cljs.core.next(seq19536__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19537,G__19538,seq19536__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true);

var ret__4785__auto___21491 = cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_negate.cljs$lang$macro = true);

var ret__4785__auto___21492 = cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))));
});
(cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true);

var ret__4785__auto___21493 = cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("core","mod","core/mod",1513235024,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
});
(cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true);

var ret__4785__auto___21494 = (function (){
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21495 = arguments.length;
var i__4737__auto___21496 = (0);
while(true){
if((i__4737__auto___21496 < len__4736__auto___21495)){
args__4742__auto__.push((arguments[i__4737__auto___21496]));

var G__21497 = (i__4737__auto___21496 + (1));
i__4737__auto___21496 = G__21497;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq19546){
var G__19547 = cljs.core.first(seq19546);
var seq19546__$1 = cljs.core.next(seq19546);
var G__19548 = cljs.core.first(seq19546__$1);
var seq19546__$2 = cljs.core.next(seq19546__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19547,G__19548,seq19546__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_subtract.cljs$lang$macro = true);

var ret__4785__auto___21498 = (function (){
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21499 = arguments.length;
var i__4737__auto___21500 = (0);
while(true){
if((i__4737__auto___21500 < len__4736__auto___21499)){
args__4742__auto__.push((arguments[i__4737__auto___21500]));

var G__21501 = (i__4737__auto___21500 + (1));
i__4737__auto___21500 = G__21501;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),xs)));
}));

(cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq19557){
var G__19558 = cljs.core.first(seq19557);
var seq19557__$1 = cljs.core.next(seq19557);
var G__19559 = cljs.core.first(seq19557__$1);
var seq19557__$2 = cljs.core.next(seq19557__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19558,G__19559,seq19557__$2);
}));

return null;
})()
;
(cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true);

var ret__4785__auto___21502 = (function (){
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var G__19569 = arguments.length;
switch (G__19569) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21504 = arguments.length;
var i__4737__auto___21505 = (0);
while(true){
if((i__4737__auto___21505 < len__4736__auto___21504)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21505]));

var G__21506 = (i__4737__auto___21505 + (1));
i__4737__auto___21505 = G__21506;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(- ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} - ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._.cljs$lang$applyTo = (function (seq19564){
var G__19565 = cljs.core.first(seq19564);
var seq19564__$1 = cljs.core.next(seq19564);
var G__19566 = cljs.core.first(seq19564__$1);
var seq19564__$2 = cljs.core.next(seq19564__$1);
var G__19567 = cljs.core.first(seq19564__$2);
var seq19564__$3 = cljs.core.next(seq19564__$2);
var G__19568 = cljs.core.first(seq19564__$3);
var seq19564__$4 = cljs.core.next(seq19564__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19565,G__19566,G__19567,G__19568,seq19564__$4);
}));

(cljs.core$macros._.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._.cljs$lang$macro = true);

var ret__4785__auto___21507 = (function (){
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var G__19656 = arguments.length;
switch (G__19656) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21509 = arguments.length;
var i__4737__auto___21510 = (0);
while(true){
if((i__4737__auto___21510 < len__4736__auto___21509)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21510]));

var G__21511 = (i__4737__auto___21510 + (1));
i__4737__auto___21510 = G__21511;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
}));

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
}));

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} * ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq19650){
var G__19651 = cljs.core.first(seq19650);
var seq19650__$1 = cljs.core.next(seq19650);
var G__19652 = cljs.core.first(seq19650__$1);
var seq19650__$2 = cljs.core.next(seq19650__$1);
var G__19653 = cljs.core.first(seq19650__$2);
var seq19650__$3 = cljs.core.next(seq19650__$2);
var G__19654 = cljs.core.first(seq19650__$3);
var seq19650__$4 = cljs.core.next(seq19650__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19651,G__19652,G__19653,G__19654,seq19650__$4);
}));

(cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._STAR_.cljs$lang$macro = true);

var ret__4785__auto___21512 = (function (){
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var G__19677 = arguments.length;
switch (G__19677) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21514 = arguments.length;
var i__4737__auto___21515 = (0);
while(true){
if((i__4737__auto___21515 < len__4736__auto___21514)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21515]));

var G__21516 = (i__4737__auto___21515 + (1));
i__4737__auto___21515 = G__21516;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));
}));

(cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq19671){
var G__19672 = cljs.core.first(seq19671);
var seq19671__$1 = cljs.core.next(seq19671);
var G__19673 = cljs.core.first(seq19671__$1);
var seq19671__$2 = cljs.core.next(seq19671__$1);
var G__19674 = cljs.core.first(seq19671__$2);
var seq19671__$3 = cljs.core.next(seq19671__$2);
var G__19675 = cljs.core.first(seq19671__$3);
var seq19671__$4 = cljs.core.next(seq19671__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19672,G__19673,G__19674,G__19675,seq19671__$4);
}));

(cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._SLASH_.cljs$lang$macro = true);

var ret__4785__auto___21517 = (function (){
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var G__19695 = arguments.length;
switch (G__19695) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21519 = arguments.length;
var i__4737__auto___21520 = (0);
while(true){
if((i__4737__auto___21520 < len__4736__auto___21519)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21520]));

var G__21521 = (i__4737__auto___21520 + (1));
i__4737__auto___21520 = G__21521;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0))));
}));

(cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} / ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.divide.cljs$lang$applyTo = (function (seq19689){
var G__19690 = cljs.core.first(seq19689);
var seq19689__$1 = cljs.core.next(seq19689);
var G__19691 = cljs.core.first(seq19689__$1);
var seq19689__$2 = cljs.core.next(seq19689__$1);
var G__19692 = cljs.core.first(seq19689__$2);
var seq19689__$3 = cljs.core.next(seq19689__$2);
var G__19693 = cljs.core.first(seq19689__$3);
var seq19689__$4 = cljs.core.next(seq19689__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19690,G__19691,G__19692,G__19693,seq19689__$4);
}));

(cljs.core$macros.divide.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.divide.cljs$lang$macro = true);

var ret__4785__auto___21522 = (function (){
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var G__19725 = arguments.length;
switch (G__19725) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21524 = arguments.length;
var i__4737__auto___21525 = (0);
while(true){
if((i__4737__auto___21525 < len__4736__auto___21524)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21525]));

var G__21526 = (i__4737__auto___21525 + (1));
i__4737__auto___21525 = G__21526;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} < ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq19719){
var G__19720 = cljs.core.first(seq19719);
var seq19719__$1 = cljs.core.next(seq19719);
var G__19721 = cljs.core.first(seq19719__$1);
var seq19719__$2 = cljs.core.next(seq19719__$1);
var G__19722 = cljs.core.first(seq19719__$2);
var seq19719__$3 = cljs.core.next(seq19719__$2);
var G__19723 = cljs.core.first(seq19719__$3);
var seq19719__$4 = cljs.core.next(seq19719__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19720,G__19721,G__19722,G__19723,seq19719__$4);
}));

(cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._LT_.cljs$lang$macro = true);

var ret__4785__auto___21527 = (function (){
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var G__19744 = arguments.length;
switch (G__19744) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21529 = arguments.length;
var i__4737__auto___21530 = (0);
while(true){
if((i__4737__auto___21530 < len__4736__auto___21529)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21530]));

var G__21531 = (i__4737__auto___21530 + (1));
i__4737__auto___21530 = G__21531;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} <= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq19739){
var G__19740 = cljs.core.first(seq19739);
var seq19739__$1 = cljs.core.next(seq19739);
var G__19741 = cljs.core.first(seq19739__$1);
var seq19739__$2 = cljs.core.next(seq19739__$1);
var G__19742 = cljs.core.first(seq19739__$2);
var seq19739__$3 = cljs.core.next(seq19739__$2);
var G__19743 = cljs.core.first(seq19739__$3);
var seq19739__$4 = cljs.core.next(seq19739__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19740,G__19741,G__19742,G__19743,seq19739__$4);
}));

(cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._LT__EQ_.cljs$lang$macro = true);

var ret__4785__auto___21532 = (function (){
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var G__19766 = arguments.length;
switch (G__19766) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21534 = arguments.length;
var i__4737__auto___21535 = (0);
while(true){
if((i__4737__auto___21535 < len__4736__auto___21534)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21535]));

var G__21536 = (i__4737__auto___21535 + (1));
i__4737__auto___21535 = G__21536;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} > ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq19761){
var G__19762 = cljs.core.first(seq19761);
var seq19761__$1 = cljs.core.next(seq19761);
var G__19763 = cljs.core.first(seq19761__$1);
var seq19761__$2 = cljs.core.next(seq19761__$1);
var G__19764 = cljs.core.first(seq19761__$2);
var seq19761__$3 = cljs.core.next(seq19761__$2);
var G__19765 = cljs.core.first(seq19761__$3);
var seq19761__$4 = cljs.core.next(seq19761__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19762,G__19763,G__19764,G__19765,seq19761__$4);
}));

(cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._GT_.cljs$lang$macro = true);

var ret__4785__auto___21537 = (function (){
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var G__19781 = arguments.length;
switch (G__19781) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21539 = arguments.length;
var i__4737__auto___21540 = (0);
while(true){
if((i__4737__auto___21540 < len__4736__auto___21539)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21540]));

var G__21541 = (i__4737__auto___21540 + (1));
i__4737__auto___21540 = G__21541;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >= ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq19775){
var G__19776 = cljs.core.first(seq19775);
var seq19775__$1 = cljs.core.next(seq19775);
var G__19777 = cljs.core.first(seq19775__$1);
var seq19775__$2 = cljs.core.next(seq19775__$1);
var G__19778 = cljs.core.first(seq19775__$2);
var seq19775__$3 = cljs.core.next(seq19775__$2);
var G__19779 = cljs.core.first(seq19775__$3);
var seq19775__$4 = cljs.core.next(seq19775__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19776,G__19777,G__19778,G__19779,seq19775__$4);
}));

(cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._GT__EQ_.cljs$lang$macro = true);

var ret__4785__auto___21542 = (function (){
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var G__19804 = arguments.length;
switch (G__19804) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21544 = arguments.length;
var i__4737__auto___21545 = (0);
while(true){
if((i__4737__auto___21545 < len__4736__auto___21544)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21545]));

var G__21546 = (i__4737__auto___21545 + (1));
i__4737__auto___21545 = G__21546;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
}));

(cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} === ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0)))),null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq19798){
var G__19799 = cljs.core.first(seq19798);
var seq19798__$1 = cljs.core.next(seq19798);
var G__19800 = cljs.core.first(seq19798__$1);
var seq19798__$2 = cljs.core.next(seq19798__$1);
var G__19801 = cljs.core.first(seq19798__$2);
var seq19798__$3 = cljs.core.next(seq19798__$2);
var G__19802 = cljs.core.first(seq19798__$3);
var seq19798__$4 = cljs.core.next(seq19798__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19799,G__19800,G__19801,G__19802,seq19798__$4);
}));

(cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros._EQ__EQ_.cljs$lang$macro = true);

var ret__4785__auto___21547 = cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null))], 0))));
});
(cljs.core$macros.dec.cljs$lang$macro = true);

var ret__4785__auto___21548 = cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null))], 0))));
});
(cljs.core$macros.inc.cljs$lang$macro = true);

var ret__4785__auto___21549 = cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.zero_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21550 = cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.pos_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21551 = cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.neg_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21552 = (function (){
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var G__19841 = arguments.length;
switch (G__19841) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21554 = arguments.length;
var i__4737__auto___21555 = (0);
while(true){
if((i__4737__auto___21555 < len__4736__auto___21554)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21555]));

var G__21556 = (i__4737__auto___21555 + (1));
i__4737__auto___21555 = G__21556;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__19832__auto__","x__19832__auto__",-1757410390,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__19833__auto__","y__19833__auto__",-659844653,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} > ~{}) ? ~{} : ~{})",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__19832__auto__","x__19832__auto__",-1757410390,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__19833__auto__","y__19833__auto__",-659844653,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__19832__auto__","x__19832__auto__",-1757410390,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__19833__auto__","y__19833__auto__",-659844653,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","max","cljs.core/max",1303529718,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","max","cljs.core/max",1303529718,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.max.cljs$lang$applyTo = (function (seq19836){
var G__19837 = cljs.core.first(seq19836);
var seq19836__$1 = cljs.core.next(seq19836);
var G__19838 = cljs.core.first(seq19836__$1);
var seq19836__$2 = cljs.core.next(seq19836__$1);
var G__19839 = cljs.core.first(seq19836__$2);
var seq19836__$3 = cljs.core.next(seq19836__$2);
var G__19840 = cljs.core.first(seq19836__$3);
var seq19836__$4 = cljs.core.next(seq19836__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19837,G__19838,G__19839,G__19840,seq19836__$4);
}));

(cljs.core$macros.max.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.max.cljs$lang$macro = true);

var ret__4785__auto___21557 = (function (){
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var G__19880 = arguments.length;
switch (G__19880) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21559 = arguments.length;
var i__4737__auto___21560 = (0);
while(true){
if((i__4737__auto___21560 < len__4736__auto___21559)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21560]));

var G__21561 = (i__4737__auto___21560 + (1));
i__4737__auto___21560 = G__21561;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
}));

(cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__19868__auto__","x__19868__auto__",302897561,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"y__19869__auto__","y__19869__auto__",-1602940783,null),null,(1),null)),(new cljs.core.List(null,y,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"((~{} < ~{}) ? ~{} : ~{})",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__19868__auto__","x__19868__auto__",302897561,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__19869__auto__","y__19869__auto__",-1602940783,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__19868__auto__","x__19868__auto__",302897561,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"y__19869__auto__","y__19869__auto__",-1602940783,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","min","cljs.core/min",1166879476,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","min","cljs.core/min",1166879476,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.min.cljs$lang$applyTo = (function (seq19875){
var G__19876 = cljs.core.first(seq19875);
var seq19875__$1 = cljs.core.next(seq19875);
var G__19877 = cljs.core.first(seq19875__$1);
var seq19875__$2 = cljs.core.next(seq19875__$1);
var G__19878 = cljs.core.first(seq19875__$2);
var seq19875__$3 = cljs.core.next(seq19875__$2);
var G__19879 = cljs.core.first(seq19875__$3);
var seq19875__$4 = cljs.core.next(seq19875__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19876,G__19877,G__19878,G__19879,seq19875__$4);
}));

(cljs.core$macros.min.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.min.cljs$lang$macro = true);

var ret__4785__auto___21562 = cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} % ~{})",(new cljs.core.List(null,num,(new cljs.core.List(null,div,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.js_mod.cljs$lang$macro = true);

var ret__4785__auto___21563 = cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~ ~{})",(new cljs.core.List(null,x,null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.bit_not.cljs$lang$macro = true);

var ret__4785__auto___21564 = (function (){
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var G__19900 = arguments.length;
switch (G__19900) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21566 = arguments.length;
var i__4737__auto___21567 = (0);
while(true){
if((i__4737__auto___21567 < len__4736__auto___21566)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21567]));

var G__21568 = (i__4737__auto___21567 + (1));
i__4737__auto___21567 = G__21568;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and","cljs.core/bit-and",-617818210,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and","cljs.core/bit-and",-617818210,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq19895){
var G__19896 = cljs.core.first(seq19895);
var seq19895__$1 = cljs.core.next(seq19895);
var G__19897 = cljs.core.first(seq19895__$1);
var seq19895__$2 = cljs.core.next(seq19895__$1);
var G__19898 = cljs.core.first(seq19895__$2);
var seq19895__$3 = cljs.core.next(seq19895__$2);
var G__19899 = cljs.core.first(seq19895__$3);
var seq19895__$4 = cljs.core.next(seq19895__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19896,G__19897,G__19898,G__19899,seq19895__$4);
}));

(cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_and.cljs$lang$macro = true);

var ret__4785__auto___21569 = (function (){
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var G__19923 = arguments.length;
switch (G__19923) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21571 = arguments.length;
var i__4737__auto___21572 = (0);
while(true){
if((i__4737__auto___21572 < len__4736__auto___21571)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21572]));

var G__21573 = (i__4737__auto___21572 + (1));
i__4737__auto___21572 = G__21573;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null)));
}));

(cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq19918){
var G__19919 = cljs.core.first(seq19918);
var seq19918__$1 = cljs.core.next(seq19918);
var G__19920 = cljs.core.first(seq19918__$1);
var seq19918__$2 = cljs.core.next(seq19918__$1);
var G__19921 = cljs.core.first(seq19918__$2);
var seq19918__$3 = cljs.core.next(seq19918__$2);
var G__19922 = cljs.core.first(seq19918__$3);
var seq19918__$4 = cljs.core.next(seq19918__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19919,G__19920,G__19921,G__19922,seq19918__$4);
}));

(cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true);

var ret__4785__auto___21574 = (function (){
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var G__19934 = arguments.length;
switch (G__19934) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21576 = arguments.length;
var i__4737__auto___21577 = (0);
while(true){
if((i__4737__auto___21577 < len__4736__auto___21576)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21577]));

var G__21578 = (i__4737__auto___21577 + (1));
i__4737__auto___21577 = G__21578;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq19929){
var G__19930 = cljs.core.first(seq19929);
var seq19929__$1 = cljs.core.next(seq19929);
var G__19931 = cljs.core.first(seq19929__$1);
var seq19929__$2 = cljs.core.next(seq19929__$1);
var G__19932 = cljs.core.first(seq19929__$2);
var seq19929__$3 = cljs.core.next(seq19929__$2);
var G__19933 = cljs.core.first(seq19929__$3);
var seq19929__$4 = cljs.core.next(seq19929__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19930,G__19931,G__19932,G__19933,seq19929__$4);
}));

(cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_or.cljs$lang$macro = true);

var ret__4785__auto___21579 = cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0))));
});
(cljs.core$macros.int$.cljs$lang$macro = true);

var ret__4785__auto___21580 = (function (){
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var G__19961 = arguments.length;
switch (G__19961) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21582 = arguments.length;
var i__4737__auto___21583 = (0);
while(true){
if((i__4737__auto___21583 < len__4736__auto___21582)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21583]));

var G__21584 = (i__4737__auto___21583 + (1));
i__4737__auto___21583 = G__21584;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq19955){
var G__19956 = cljs.core.first(seq19955);
var seq19955__$1 = cljs.core.next(seq19955);
var G__19957 = cljs.core.first(seq19955__$1);
var seq19955__$2 = cljs.core.next(seq19955__$1);
var G__19958 = cljs.core.first(seq19955__$2);
var seq19955__$3 = cljs.core.next(seq19955__$2);
var G__19959 = cljs.core.first(seq19955__$3);
var seq19955__$4 = cljs.core.next(seq19955__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19956,G__19957,G__19958,G__19959,seq19955__$4);
}));

(cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_xor.cljs$lang$macro = true);

var ret__4785__auto___21585 = (function (){
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var G__19978 = arguments.length;
switch (G__19978) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21587 = arguments.length;
var i__4737__auto___21588 = (0);
while(true){
if((i__4737__auto___21588 < len__4736__auto___21587)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21588]));

var G__21589 = (i__4737__auto___21588 + (1));
i__4737__auto___21588 = G__21589;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,y,null,(1),null)),(2),null)),(3),null)),(4),null));
}));

(cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and-not","cljs.core/bit-and-not",-929778682,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-and-not","cljs.core/bit-and-not",-929778682,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,y,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([more], 0))));
}));

/** @this {Function} */
(cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq19973){
var G__19974 = cljs.core.first(seq19973);
var seq19973__$1 = cljs.core.next(seq19973);
var G__19975 = cljs.core.first(seq19973__$1);
var seq19973__$2 = cljs.core.next(seq19973__$1);
var G__19976 = cljs.core.first(seq19973__$2);
var seq19973__$3 = cljs.core.next(seq19973__$2);
var G__19977 = cljs.core.first(seq19973__$3);
var seq19973__$4 = cljs.core.next(seq19973__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19974,G__19975,G__19976,G__19977,seq19973__$4);
}));

(cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.bit_and_not.cljs$lang$macro = true);

var ret__4785__auto___21590 = cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} & ~(1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_clear.cljs$lang$macro = true);

var ret__4785__auto___21591 = cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} ^ (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_flip.cljs$lang$macro = true);

var ret__4785__auto___21592 = cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} & (1 << ~{})) != 0)",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null)));
});
(cljs.core$macros.bit_test.cljs$lang$macro = true);

var ret__4785__auto___21593 = cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} << ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_shift_left.cljs$lang$macro = true);

var ret__4785__auto___21594 = cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_shift_right.cljs$lang$macro = true);

var ret__4785__auto___21595 = cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true);

var ret__4785__auto___21596 = cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} >>> ~{})",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true);

var ret__4785__auto___21597 = cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(~{} | (1 << ~{}))",(new cljs.core.List(null,x,(new cljs.core.List(null,n,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.bit_set.cljs$lang$macro = true);

var ret__4785__auto___21598 = cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"((~{} >>> ~{}) & 0x01f)",(new cljs.core.List(null,hash,(new cljs.core.List(null,shift,null,(1),null)),(2),null)),(3),null)),(4),null));
});
(cljs.core$macros.mask.cljs$lang$macro = true);

var ret__4785__auto___21599 = cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"(1 << ~{})",(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","mask","cljs.core/mask",1721570575,null),null,(1),null)),(new cljs.core.List(null,hash,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,shift,null,(1),null))], 0)))),null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.bitpos.cljs$lang$macro = true);

var ret__4785__auto___21600 = cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ","hash-key is substituted twice","\n","(clojure.core/symbol? hash-key)"].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"h__20053__auto__","h__20053__auto__",234801288,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__20053__auto__","h__20053__auto__",234801288,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"h__20053__auto__","h__20053__auto__",234801288,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"h__20053__auto__","h__20053__auto__",234801288,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,hash_fn,null,(1),null)),(new cljs.core.List(null,coll,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,hash_key,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"h__20053__auto__","h__20053__auto__",234801288,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"h__20053__auto__","h__20053__auto__",234801288,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.caching_hash.cljs$lang$macro = true);

cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,doc,null,(1),null)),(new cljs.core.List(null,meta,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cargs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__20058__auto__","x__20058__auto__",512911238,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,name,null,(1),null)),cargs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__20058__auto__","x__20058__auto__",512911238,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,args,null,(1),null)),body))),null,(1),null))], 0))));
});
var ret__4785__auto___21601 = (function (){
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21602 = arguments.length;
var i__4737__auto___21603 = (0);
while(true){
if((i__4737__auto___21603 < len__4736__auto___21602)){
args__4742__auto__.push((arguments[i__4737__auto___21603]));

var G__21604 = (i__4737__auto___21603 + (1));
i__4737__auto___21603 = G__21604;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((6) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__4743__auto__);
});

(cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
}));

(cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6));

/** @this {Function} */
(cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq20068){
var G__20069 = cljs.core.first(seq20068);
var seq20068__$1 = cljs.core.next(seq20068);
var G__20070 = cljs.core.first(seq20068__$1);
var seq20068__$2 = cljs.core.next(seq20068__$1);
var G__20071 = cljs.core.first(seq20068__$2);
var seq20068__$3 = cljs.core.next(seq20068__$2);
var G__20072 = cljs.core.first(seq20068__$3);
var seq20068__$4 = cljs.core.next(seq20068__$3);
var G__20073 = cljs.core.first(seq20068__$4);
var seq20068__$5 = cljs.core.next(seq20068__$4);
var G__20074 = cljs.core.first(seq20068__$5);
var seq20068__$6 = cljs.core.next(seq20068__$5);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20069,G__20070,G__20071,G__20072,G__20073,G__20074,seq20068__$6);
}));

return null;
})()
;
(cljs.core$macros.defcurried.cljs$lang$macro = true);

cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,f1,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,clojure.walk.postwalk((function (p1__20078_SHARP_){
if(cljs.core.sequential_QMARK_(p1__20078_SHARP_)){
var G__20081 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.createAsIfByAssoc([k]),p1__20078_SHARP_);
var fexpr__20080 = ((cljs.core.vector_QMARK_(p1__20078_SHARP_))?cljs.core.vec:cljs.core.identity);
return (fexpr__20080.cljs$core$IFn$_invoke$arity$1 ? fexpr__20080.cljs$core$IFn$_invoke$arity$1(G__20081) : fexpr__20080.call(null,G__20081));
} else {
return p1__20078_SHARP_;
}
}),fkv),null,(1),null)),(new cljs.core.List(null,fkv,null,(1),null))], 0))));
});
var ret__4785__auto___21605 = /**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__20085,fkv){
var vec__20087 = p__20085;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20087,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});
(cljs.core$macros.rfn.cljs$lang$macro = true);

cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).replace((new RegExp("\\.","g")),"$").replace("/","$")),"$"].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
var ret__4785__auto___21606 = (function (){
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (seq f)))))
 *   == ("f" "o" "o"))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21607 = arguments.length;
var i__4737__auto___21608 = (0);
while(true){
if((i__4737__auto___21608 < len__4736__auto___21607)){
args__4742__auto__.push((arguments[i__4737__auto___21608]));

var G__21609 = (i__4737__auto___21608 + (1));
i__4737__auto___21608 = G__21609;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(["t_",clojure.string.replace(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.analyzer._STAR_cljs_ns_STAR_)),".","$")].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","deftype","cljs.core/deftype",-1630339979,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,meta_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(new cljs.core.List(null,meta_sym,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,this_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,meta_sym,null,(1),null))], 0)))),null,(1),null)),impls], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,t,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([locals,(new cljs.core.List(null,cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form)),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.reify.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.reify.cljs$lang$applyTo = (function (seq20091){
var G__20092 = cljs.core.first(seq20091);
var seq20091__$1 = cljs.core.next(seq20091);
var G__20093 = cljs.core.first(seq20091__$1);
var seq20091__$2 = cljs.core.next(seq20091__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20092,G__20093,seq20091__$2);
}));

return null;
})()
;
(cljs.core$macros.reify.cljs$lang$macro = true);

var ret__4785__auto___21610 = (function (){
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21611 = arguments.length;
var i__4737__auto___21612 = (0);
while(true){
if((i__4737__auto___21612 < len__4736__auto___21611)){
args__4742__auto__.push((arguments[i__4737__auto___21612]));

var G__21613 = (i__4737__auto___21612 + (1));
i__4737__auto___21612 = G__21613;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0)))),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))], 0))));
}));

(cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq20099){
var G__20100 = cljs.core.first(seq20099);
var seq20099__$1 = cljs.core.next(seq20099);
var G__20101 = cljs.core.first(seq20099__$1);
var seq20099__$2 = cljs.core.next(seq20099__$1);
var G__20102 = cljs.core.first(seq20099__$2);
var seq20099__$3 = cljs.core.next(seq20099__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20100,G__20101,G__20102,seq20099__$3);
}));

return null;
})()
;
(cljs.core$macros.specify_BANG_.cljs$lang$macro = true);

var ret__4785__auto___21614 = (function (){
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21615 = arguments.length;
var i__4737__auto___21616 = (0);
while(true){
if((i__4737__auto___21616 < len__4736__auto___21615)){
args__4742__auto__.push((arguments[i__4737__auto___21616]));

var G__21617 = (i__4737__auto___21616 + (1));
i__4737__auto___21616 = G__21617;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impls], 0))));
}));

(cljs.core$macros.specify.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.specify.cljs$lang$applyTo = (function (seq20110){
var G__20111 = cljs.core.first(seq20110);
var seq20110__$1 = cljs.core.next(seq20110);
var G__20112 = cljs.core.first(seq20110__$1);
var seq20110__$2 = cljs.core.next(seq20110__$1);
var G__20113 = cljs.core.first(seq20110__$2);
var seq20110__$3 = cljs.core.next(seq20110__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20111,G__20112,G__20113,seq20110__$3);
}));

return null;
})()
;
(cljs.core$macros.specify.cljs$lang$macro = true);

var ret__4785__auto___21618 = cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"this",null,(1),null)),(2),null));
});
(cljs.core$macros.js_this.cljs$lang$macro = true);

var ret__4785__auto___21619 = (function (){
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21620 = arguments.length;
var i__4737__auto___21621 = (0);
while(true){
if((i__4737__auto___21621 < len__4736__auto___21620)){
args__4742__auto__.push((arguments[i__4737__auto___21621]));

var G__21622 = (i__4737__auto___21621 + (1));
i__4737__auto___21621 = G__21622;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-this","cljs.core/js-this",29003817,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq20122){
var G__20123 = cljs.core.first(seq20122);
var seq20122__$1 = cljs.core.next(seq20122);
var G__20124 = cljs.core.first(seq20122__$1);
var seq20122__$2 = cljs.core.next(seq20122__$1);
var G__20125 = cljs.core.first(seq20122__$2);
var seq20122__$3 = cljs.core.next(seq20122__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20123,G__20124,G__20125,seq20122__$3);
}));

return null;
})()
;
(cljs.core$macros.this_as.cljs$lang$macro = true);

cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
});
cljs.core$macros.update_protocol_var = (function cljs$core$macros$update_protocol_var(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__5733__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__5733__auto__)){
var var$ = temp__5733__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),(function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
}));
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error(["Assert failed: ",["Can't resolve: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''),"\n","ret"].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__21623 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__21624 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__21623;
s = G__21624;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__20146){
var vec__20148 = p__20146;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20148,(1),null);
cljs.core$macros.update_protocol_var(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym),(0),(cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym).indexOf("/") + (1)));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20157){
var vec__20158 = p__20157;
var seq__20159 = cljs.core.seq(vec__20158);
var first__20160 = cljs.core.first(seq__20159);
var seq__20159__$1 = cljs.core.next(seq__20159);
var f = first__20160;
var meths = seq__20159__$1;
var form = vec__20158;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([pfn_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),meths))),cljs.core.meta(form)),null,(1),null))], 0))));
}),sigs));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core$macros !== 'undefined') && (typeof cljs.core$macros.extend_prefix !== 'undefined')){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__4619__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4620__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4621__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4623__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__20161 = cljs.core.get_global_hierarchy;
return (fexpr__20161.cljs$core$IFn$_invoke$arity$0 ? fexpr__20161.cljs$core$IFn$_invoke$arity$0() : fexpr__20161.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),(function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4623__auto__,method_table__4619__auto__,prefer_table__4620__auto__,method_cache__4621__auto__,cached_hierarchy__4622__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.to_property(sym),null,(1),null))], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.to_property(sym),null,(1),null))], 0)))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend-type","extend-type",-517175606),true], null));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__20170){
var vec__20171 = p__20170;
var seq__20172 = cljs.core.seq(vec__20171);
var first__20173 = cljs.core.first(seq__20172);
var seq__20172__$1 = cljs.core.next(seq__20172);
var vec__20174 = first__20173;
var seq__20175 = cljs.core.seq(vec__20174);
var first__20176 = cljs.core.first(seq__20175);
var seq__20175__$1 = cljs.core.next(seq__20175);
var this$ = first__20176;
var args = seq__20175__$1;
var sig = vec__20174;
var body = seq__20172__$1;
return (new cljs.core.List(null,cljs.core.vec(args),(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body),null,(1),null)),(2),null));
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__20180){
var vec__20181 = p__20180;
var seq__20182 = cljs.core.seq(vec__20181);
var first__20183 = cljs.core.first(seq__20182);
var seq__20182__$1 = cljs.core.next(seq__20182);
var vec__20184 = first__20183;
var seq__20185 = cljs.core.seq(vec__20184);
var first__20186 = cljs.core.first(seq__20185);
var seq__20185__$1 = cljs.core.next(seq__20185);
var this$ = first__20186;
var args = seq__20185__$1;
var sig = vec__20184;
var body = seq__20182__$1;
var self_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.cons(self_sym,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,self_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0)))),null,(1),null)))));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__20192){
var vec__20193 = p__20192;
var seq__20194 = cljs.core.seq(vec__20193);
var first__20195 = cljs.core.first(seq__20194);
var seq__20194__$1 = cljs.core.next(seq__20194);
var vec__20196 = first__20195;
var seq__20197 = cljs.core.seq(vec__20196);
var first__20198 = cljs.core.first(seq__20197);
var seq__20197__$1 = cljs.core.next(seq__20197);
var this$ = first__20198;
var args = seq__20197__$1;
var sig = vec__20196;
var body = seq__20194__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(args),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__20203){
var vec__20204 = p__20203;
var seq__20205 = cljs.core.seq(vec__20204);
var first__20206 = cljs.core.first(seq__20205);
var seq__20205__$1 = cljs.core.next(seq__20205);
var vec__20207 = first__20206;
var seq__20208 = cljs.core.seq(vec__20207);
var first__20209 = cljs.core.first(seq__20208);
var seq__20208__$1 = cljs.core.next(seq__20208);
var this$ = first__20209;
var args = seq__20208__$1;
var sig = vec__20207;
var body = seq__20205__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.cons(this_SINGLEQUOTE_,args)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,this_SINGLEQUOTE_,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)))));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20214){
var vec__20215 = p__20214;
var seq__20216 = cljs.core.seq(vec__20215);
var first__20217 = cljs.core.first(seq__20216);
var seq__20216__$1 = cljs.core.next(seq__20216);
var f = first__20217;
var meths = seq__20216__$1;
var form = vec__20215;
var vec__20218 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20218,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20218,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20213_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__20213_SHARP_);
}),meths__$1)))),cljs.core.meta(form)),null,(1),null))], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__20228){
var vec__20229 = p__20228;
var seq__20230 = cljs.core.seq(vec__20229);
var first__20231 = cljs.core.first(seq__20230);
var seq__20230__$1 = cljs.core.next(seq__20230);
var f = first__20231;
var meths = seq__20230__$1;
var form = vec__20229;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join(''))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,meth,null,(1),null))))),cljs.core.meta(form)),null,(1),null))], 0))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20224_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__20224_SHARP_);
}),meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__20239){
var vec__20240 = p__20239;
var seq__20241 = cljs.core.seq(vec__20240);
var first__20242 = cljs.core.first(seq__20241);
var seq__20241__$1 = cljs.core.next(seq__20241);
var f = first__20242;
var meths = seq__20241__$1;
var form = vec__20240;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20238_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__20238_SHARP_);
}),meths);
var this_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),meths__$1))),cljs.core.meta(form)),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-call",".-call",1760541695,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,this_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".concat",".concat",1180408684,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),(new cljs.core.List(null,this_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,argsym,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.meta(form)),null,(1),null))], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__20249){
var vec__20250 = p__20249;
var seq__20251 = cljs.core.seq(vec__20250);
var first__20252 = cljs.core.first(seq__20251);
var seq__20251__$1 = cljs.core.next(seq__20251);
var f = first__20252;
var meths = seq__20251__$1;
var form = vec__20250;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.name(f)))].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.first(meth)))].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form)),null,(1),null))], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20253){
var vec__20254 = p__20253;
var seq__20255 = cljs.core.seq(vec__20254);
var first__20256 = cljs.core.first(seq__20255);
var seq__20255__$1 = cljs.core.next(seq__20255);
var sig = first__20256;
var body = seq__20255__$1;
var meth = vec__20254;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,[pf,"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.adapt_proto_params(type,meth),null,(1),null))))),cljs.core.meta(form)),null,(1),null))], 0))));
}),meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__20257){
var vec__20258 = p__20257;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20258,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20258,(1),null);
cljs.core$macros.update_protocol_var(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null))], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first(method);
var __GT_name = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,cljs.core.name);
var vec__20269 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name(method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name(method_name),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20269,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(method_name))){
var method_var_21625 = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_21625))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"name","name",1843675177),fname], null));
} else {
}

if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core","not-found","cljs.core/not-found",-1572889185))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([c]),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths)))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__21626 = cljs.core.next(sigs__$1);
var G__21627 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__21626;
seen = G__21627;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_21628 = cljs.core.PersistentHashSet.EMPTY;
var methods_21629__$1 = methods$;
while(true){
if(cljs.core.seq(methods_21629__$1)){
var vec__20298_21630 = cljs.core.first(methods_21629__$1);
var fname_21631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20298_21630,(0),null);
var method_21632 = vec__20298_21630;
if(cljs.core.contains_QMARK_(seen_21628,fname_21631)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_21631], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_21632);

var G__21633 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_21628,fname_21631);
var G__21634 = cljs.core.next(methods_21629__$1);
seen_21628 = G__21633;
methods_21629__$1 = G__21634;
continue;
} else {
}
break;
}

var G__21635 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__21636 = impls__$2;
protos = G__21635;
impls__$1 = G__21636;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(argv,(0),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((argv.cljs$core$IFn$_invoke$arity$1 ? argv.cljs$core$IFn$_invoke$arity$1((0)) : argv.call(null,(0))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.first(sig),cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.second(sig)),cljs.core.nnext(sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_first_arg(type_sym,cljs.core.first(sig)),cljs.core.next(sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(sigs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest(sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_(cljs.core.second(sig))){
return cljs.core$macros.type_hint_single_arity_sig(type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs(type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv((function (m,proto,sigs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,proto,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
var ret__4785__auto___21637 = (function (){
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y] ...) ...)
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21638 = arguments.length;
var i__4737__auto___21639 = (0);
while(true){
if((i__4737__auto___21639 < len__4736__auto___21638)){
args__4742__auto__.push((arguments[i__4737__auto___21639]));

var G__21640 = (i__4737__auto___21639 + (1));
i__4737__auto___21639 = G__21640;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var impl_map__$1 = (cljs.core.truth_((function (){var fexpr__20313 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"null",new cljs.core.Symbol(null,"number","number",-1084057331,null),"null"], null), null);
return (fexpr__20313.cljs$core$IFn$_invoke$arity$1 ? fexpr__20313.cljs$core$IFn$_invoke$arity$1(type_sym) : fexpr__20313.call(null,type_sym));
})())?cljs.core$macros.type_hint_impl_map(type_sym,impl_map):impl_map);
var vec__20310 = (function (){var temp__5733__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__5733__auto__)){
var type = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve(type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20310,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20310,(1),null);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__4115__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__20304_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__20304_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__20304_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([impl_map__$1], 0)))));
}));

(cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq20305){
var G__20306 = cljs.core.first(seq20305);
var seq20305__$1 = cljs.core.next(seq20305);
var G__20307 = cljs.core.first(seq20305__$1);
var seq20305__$2 = cljs.core.next(seq20305__$1);
var G__20308 = cljs.core.first(seq20305__$2);
var seq20305__$3 = cljs.core.next(seq20305__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20306,G__20307,G__20308,seq20305__$3);
}));

return null;
})()
;
(cljs.core$macros.extend_type.cljs$lang$macro = true);

cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
}),parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__20319){
var vec__20320 = p__20319;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20320,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20316_SHARP_){
return cljs.core.cons(cljs.core.second(p1__20316_SHARP_),cljs.core.nnext(p1__20316_SHARP_));
}),sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var G__20324 = arguments.length;
switch (G__20324) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
}));

(cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__21642 = ret__$1;
var G__21643 = specs__$2;
ret = G__21642;
specs__$1 = G__21643;
continue;
} else {
return ret;
}
break;
}
}));

(cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4);

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20325_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__20325_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var docstring = ["Positional factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),"."].join('');
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([field_values], 0)))),null,(1),null))], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),", no fields vector given."].join('')));
}
});
var ret__4785__auto___21644 = (function (){
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21645 = arguments.length;
var i__4737__auto___21646 = (0);
while(true){
if((i__4737__auto___21646 < len__4736__auto___21645)){
args__4742__auto__.push((arguments[i__4737__auto___21646]));

var G__21647 = (i__4737__auto___21646 + (1));
i__4737__auto___21646 = G__21647;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__20335 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20335,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20335,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20327__auto__","this__20327__auto__",1824642911,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__20328__auto__","writer__20328__auto__",-847884141,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"opt__20329__auto__","opt__20329__auto__",353360823,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__20328__auto__","writer__20328__auto__",-847884141,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory(t__$1,r,fields),null,(1),null)),(new cljs.core.List(null,t__$1,null,(1),null))], 0))));
}));

(cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq20330){
var G__20331 = cljs.core.first(seq20330);
var seq20330__$1 = cljs.core.next(seq20330);
var G__20332 = cljs.core.first(seq20330__$1);
var seq20330__$2 = cljs.core.next(seq20330__$1);
var G__20333 = cljs.core.first(seq20330__$2);
var seq20330__$3 = cljs.core.next(seq20330__$2);
var G__20334 = cljs.core.first(seq20330__$3);
var seq20330__$4 = cljs.core.next(seq20330__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20331,G__20332,G__20333,G__20334,seq20330__$4);
}));

return null;
})()
;
(cljs.core$macros.deftype.cljs$lang$macro = true);

/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20345_SHARP_){
return cljs.core.with_meta(p1__20345_SHARP_,null);
}),fields));
var base_fields = fields__$1;
var pr_open = ["#",cljs.core.namespace(rname),".",cljs.core.name(rname),"{"].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 30, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-clone","-clone",227130084,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20346__auto__","this__20346__auto__",-275568476,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fields__$2], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20347__auto__","this__20347__auto__",1664443829,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","caching-hash","cljs.core/caching-hash",-1804846488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__20347__auto__","this__20347__auto__",1664443829,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"coll__20348__auto__","coll__20348__auto__",-441465197,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null),null,(1),null)),(new cljs.core.List(null,cljs.core.hash(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(rname))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","hash-unordered-coll","cljs.core/hash-unordered-coll",-639086053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"coll__20348__auto__","coll__20348__auto__",-441465197,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),(function (){var this$ = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"this","this",1028897902,null));
var other = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"other","other",-1658642225,null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,this$,null,(1),null)),(new cljs.core.List(null,other,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","some?","cljs.core/some?",-440439360,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null),null,(1),null)),(new cljs.core.List(null,other,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (field){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.to_property(field),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"..","..",-300507420,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.to_property(field),null,(1),null))], 0)))),null,(1),null))], 0))));
}),base_fields),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,this$,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-__extmap",".-__extmap",438409624,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(other,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tagname], null)),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
})(),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-meta","-meta",494863156,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20349__auto__","this__20349__auto__",-1543948945,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20350__auto__","this__20350__auto__",-369066154,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20351__auto__","this__20351__auto__",-239471076,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20352__auto__","k__20352__auto__",-367216164,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__20351__auto__","this__20351__auto__",-239471076,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20352__auto__","k__20352__auto__",-367216164,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20353__auto__","this__20353__auto__",-151360786,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"else__20354__auto__","else__20354__auto__",-1054303004,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,ksym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ksym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"else__20354__auto__","else__20354__auto__",-1054303004,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-count","-count",416049189,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20355__auto__","this__20355__auto__",1737569328,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null),null,(1),null)),(new cljs.core.List(null,cljs.core.count(base_fields),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20356__auto__","this__20356__auto__",1117084023,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__20357__auto__","entry__20357__auto__",-1746694653,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__20357__auto__","entry__20357__auto__",-1746694653,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__20356__auto__","this__20356__auto__",1117084023,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__20357__auto__","entry__20357__auto__",-1746694653,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__20357__auto__","entry__20357__auto__",-1746694653,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(1),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__20356__auto__","this__20356__auto__",1117084023,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"entry__20357__auto__","entry__20357__auto__",-1746694653,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20358__auto__","this__20358__auto__",-1761429932,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20359__auto__","k__20359__auto__",1846693700,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gs,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","condp","cljs.core/condp",353371154,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20359__auto__","k__20359__auto__",1846693700,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_fields], 0)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20359__auto__","k__20359__auto__",1846693700,null),null,(1),null)),(new cljs.core.List(null,gs,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20360__auto__","this__20360__auto__",568710290,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20361__auto__","k__20361__auto__",-977680763,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20361__auto__","k__20361__auto__",-977680763,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-with-meta","cljs.core/-with-meta",-146937782,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"this__20360__auto__","this__20360__auto__",568710290,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20361__auto__","k__20361__auto__",-977680763,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,tagname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20361__auto__","k__20361__auto__",-977680763,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20363__auto__","this__20363__auto__",436459792,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20362_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MapEntry.","cljs.core/MapEntry.",1317224033,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20362_SHARP_),(new cljs.core.List(null,p1__20362_SHARP_,(new cljs.core.List(null,null,null,(1),null)),(2),null)),(3),null)),(4),null));
}),base_fields))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gs,null,(1),null)),(new cljs.core.List(null,cljs.core.count(base_fields),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("core","nil-iter","core/nil-iter",1079948314,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20365__auto__","this__20365__auto__",-174797235,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__20366__auto__","writer__20366__auto__",-784960631,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__20367__auto__","opts__20367__auto__",-434997350,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__20368__auto__","pr-pair__20368__auto__",-860851737,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__20369__auto__","keyval__20369__auto__",-2021996285,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__20366__auto__","writer__20366__auto__",-784960631,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.pr_writer",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null," ",null,(1),null)),(new cljs.core.List(null,"",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__20367__auto__","opts__20367__auto__",-434997350,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"keyval__20369__auto__","keyval__20369__auto__",-2021996285,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__20366__auto__","writer__20366__auto__",-784960631,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"pr-pair__20368__auto__","pr-pair__20368__auto__",-860851737,null),null,(1),null)),(new cljs.core.List(null,pr_open,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,"}",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"opts__20367__auto__","opts__20367__auto__",-434997350,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20364_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null),(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__20364_SHARP_),(new cljs.core.List(null,p1__20364_SHARP_,null,(1),null)),(2),null)),(3),null));
}),base_fields))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"-kv-reduce","-kv-reduce",456218795,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20370__auto__","this__20370__auto__",1679000170,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"f__20371__auto__","f__20371__auto__",1735199074,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"init__20372__auto__","init__20372__auto__",-1371498273,null),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__20373__auto__","ret__20373__auto__",-351055583,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"k__20374__auto__","k__20374__auto__",1890527241,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__20375__auto__","v__20375__auto__",-1878533870,null),null,(1),null)))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"f__20371__auto__","f__20371__auto__",1735199074,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__20373__auto__","ret__20373__auto__",-351055583,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"k__20374__auto__","k__20374__auto__",1890527241,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"v__20375__auto__","v__20375__auto__",-1878533870,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"init__20372__auto__","init__20372__auto__",-1371498273,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__20370__auto__","this__20370__auto__",1679000170,null),null,(1),null))], 0)))),null,(1),null))], 0))))], null));
var vec__20377 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20377,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20377,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,hinted_fields,null,(1),null)),(new cljs.core.List(null,pmasks,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","extend-type","cljs.core/extend-type",2058791100,null),null,(1),null)),(new cljs.core.List(null,tagname__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0)))),null,(1),null))], 0)))),null,(1),null)))));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var docstring = ["Factory function for ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rname),", taking a map of keywords to field values."].join('');
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)))));
}),ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fn_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,docstring,null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,ms,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__20409__auto__","extmap__20409__auto__",-1434759230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond->>","cljs.core/cond->>",738809549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ks], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","record?","cljs.core/record?",1307655860,null),null,(1),null)),(new cljs.core.List(null,ms,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([getters,(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"extmap__20409__auto__","extmap__20409__auto__",-1434759230,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
var ret__4785__auto___21648 = (function (){
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21649 = arguments.length;
var i__4737__auto___21650 = (0);
while(true){
if((i__4737__auto___21650 < len__4736__auto___21649)){
args__4742__auto__.push((arguments[i__4737__auto___21650]));

var G__21651 = (i__4737__auto___21650 + (1));
i__4737__auto___21650 = G__21651;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20410__auto__","this__20410__auto__",1322400573,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"this__20410__auto__","this__20410__auto__",1322400573,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__20411__auto__","writer__20411__auto__",-1921591512,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"writer__20411__auto__","writer__20411__auto__",-1921591512,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(r),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_positional_factory(rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.build_map_factory(rsym__$1,r,fields),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))], 0))));
}));

(cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq20412){
var G__20413 = cljs.core.first(seq20412);
var seq20412__$1 = cljs.core.next(seq20412);
var G__20414 = cljs.core.first(seq20412__$1);
var seq20412__$2 = cljs.core.next(seq20412__$1);
var G__20415 = cljs.core.first(seq20412__$2);
var seq20412__$3 = cljs.core.next(seq20412__$2);
var G__20416 = cljs.core.first(seq20412__$3);
var seq20412__$4 = cljs.core.next(seq20412__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20413,G__20414,G__20415,G__20416,seq20412__$4);
}));

return null;
})()
;
(cljs.core$macros.defrecord.cljs$lang$macro = true);

var ret__4785__auto___21652 = (function (){
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21653 = arguments.length;
var i__4737__auto___21654 = (0);
while(true){
if((i__4737__auto___21654 < len__4736__auto___21653)){
args__4742__auto__.push((arguments[i__4737__auto___21654]));

var G__21655 = (i__4737__auto___21654 + (1));
i__4737__auto___21654 = G__21655;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__20440 = (function (){var opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true], null);
var methods$ = cljs.core.PersistentVector.EMPTY;
var sigs = doc_PLUS_methods;
while(true){
if(cljs.core.not(cljs.core.seq(sigs))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,methods$], null);
} else {
var vec__20448 = sigs;
var seq__20449 = cljs.core.seq(vec__20448);
var first__20450 = cljs.core.first(seq__20449);
var seq__20449__$1 = cljs.core.next(seq__20449);
var head = first__20450;
var tail = seq__20449__$1;
if(typeof head === 'string'){
var G__21656 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"doc","doc",1913296891),head);
var G__21657 = methods$;
var G__21658 = tail;
opts = G__21656;
methods$ = G__21657;
sigs = G__21658;
continue;
} else {
if((head instanceof cljs.core.Keyword)){
var G__21659 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,head,cljs.core.first(tail));
var G__21660 = methods$;
var G__21661 = cljs.core.rest(tail);
opts = G__21659;
methods$ = G__21660;
sigs = G__21661;
continue;
} else {
if(cljs.core.seq_QMARK_(head)){
var G__21662 = opts;
var G__21663 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(methods$,head);
var G__21664 = tail;
opts = G__21662;
methods$ = G__21663;
sigs = G__21664;
continue;
} else {
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)," received unexpected argument"].join('')));

}
}
}
}
break;
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20440,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20440,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(psym,cljs.core.merge,opts);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n));
});
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__20452 = cljs.core.seq(methods$);
var chunk__20453 = null;
var count__20454 = (0);
var i__20455 = (0);
while(true){
if((i__20455 < count__20454)){
var vec__20463 = chunk__20453.cljs$core$IIndexed$_nth$arity$2(null,i__20455);
var seq__20464 = cljs.core.seq(vec__20463);
var first__20465 = cljs.core.first(seq__20464);
var seq__20464__$1 = cljs.core.next(seq__20464);
var mname = first__20465;
var arities = seq__20464__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__21665 = seq__20452;
var G__21666 = chunk__20453;
var G__21667 = count__20454;
var G__21668 = (i__20455 + (1));
seq__20452 = G__21665;
chunk__20453 = G__21666;
count__20454 = G__21667;
i__20455 = G__21668;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__20452);
if(temp__5735__auto__){
var seq__20452__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20452__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__20452__$1);
var G__21669 = cljs.core.chunk_rest(seq__20452__$1);
var G__21670 = c__4556__auto__;
var G__21671 = cljs.core.count(c__4556__auto__);
var G__21672 = (0);
seq__20452 = G__21669;
chunk__20453 = G__21670;
count__20454 = G__21671;
i__20455 = G__21672;
continue;
} else {
var vec__20467 = cljs.core.first(seq__20452__$1);
var seq__20468 = cljs.core.seq(vec__20467);
var first__20469 = cljs.core.first(seq__20468);
var seq__20468__$1 = cljs.core.next(seq__20468);
var mname = first__20469;
var arities = seq__20468__$1;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error(["Invalid protocol, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1)," defines method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname)," with arity 0"].join('')));
} else {
}


var G__21673 = cljs.core.next(seq__20452__$1);
var G__21674 = null;
var G__21675 = (0);
var G__21676 = (0);
seq__20452 = G__21673;
chunk__20453 = G__21674;
count__20454 = G__21675;
i__20455 = G__21676;
continue;
}
} else {
return null;
}
}
break;
}
})();
var sig__GT_syms = (function (sig){
if((!(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,sig)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if(((cljs.core.map_QMARK_(arg)) && ((!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();

}
}
}),sig);
} else {
return sig;
}
});
var expand_dyn = (function (fname,sig){
var sig__$1 = sig__GT_syms(sig);
var fqn_fname = cljs.core.with_meta(fqn(fname),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true], null));
var fsig = cljs.core.first(sig__$1);
var check = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__20426__auto__","m__20426__auto__",1181520238,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,"_",null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__20426__auto__","m__20426__auto__",1181520238,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__20426__auto__","m__20426__auto__",1181520238,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null),null,(1),null)),(new cljs.core.List(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join(''),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,fsig,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
var check__$1 = ((cljs.core.not(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts)))?check:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__20427__auto__","meta-impl__20427__auto__",1245123231,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("core","meta","core/meta",-1141410454,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("core","get","core/get",-959829427,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"meta-impl__20427__auto__","meta-impl__20427__auto__",1245123231,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check,null,(1),null))], 0)))));
var check__$2 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__20428__auto__","x__20428__auto__",1707684837,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"m__20429__auto__","m__20429__auto__",-1189489736,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,fqn_fname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__20428__auto__","x__20428__auto__",1707684837,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"m__20429__auto__","m__20429__auto__",-1189489736,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"m__20429__auto__","m__20429__auto__",-1189489736,null),null,(1),null)),sig__$1))),null,(1),null)),(new cljs.core.List(null,check__$1,null,(1),null))], 0)))),null,(1),null))], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sig__$1,null,(1),null)),(new cljs.core.List(null,check__$2,null,(1),null)))));
});
var expand_sig = (function (dyn_name,slot,sig){
var sig__$1 = sig__GT_syms(sig);
var fsig = cljs.core.first(sig__$1);
var check = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206),true], null)),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,fsig,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,slot,null,(1),null)),sig__$1], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,dyn_name,null,(1),null)),sig__$1))),null,(1),null))], 0))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,sig__$1,null,(1),null)),(new cljs.core.List(null,check,null,(1),null)))));
});
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20482){
var vec__20484 = p__20482;
var seq__20485 = cljs.core.seq(vec__20484);
var first__20486 = cljs.core.first(seq__20485);
var seq__20485__$1 = cljs.core.next(seq__20485);
var fname = first__20486;
var sigs = seq__20485__$1;
var doc = (function (){var doc = cljs.core.last(sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc),cljs.core.vec(sigs__$1)], null);
}),methods$))),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sigs","sigs",-1653119622)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20488){
var vec__20489 = p__20488;
var seq__20490 = cljs.core.seq(vec__20489);
var first__20491 = cljs.core.first(seq__20490);
var seq__20490__$1 = cljs.core.next(seq__20490);
var fname = first__20491;
var sigs = seq__20490__$1;
var doc = (function (){var doc = cljs.core.last(sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fname),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),fname,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$1(sigs__$1),new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null)], null);
}),methods$)));
var method = (function (p__20495){
var vec__20496 = p__20495;
var seq__20497 = cljs.core.seq(vec__20496);
var first__20498 = cljs.core.first(seq__20497);
var seq__20497__$1 = cljs.core.next(seq__20497);
var fname = first__20498;
var sigs = seq__20497__$1;
var doc = (function (){var doc = cljs.core.last(sigs);
if(typeof doc === 'string'){
return doc;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,sigs__$1)))?cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var ___$1 = (function (){var temp__5739__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$3(_AMPERSAND_env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"defs","defs",1398449717)) : cljs.core$macros.__GT_.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"defs","defs",1398449717))),fname);
if((temp__5739__auto__ == null)){
return null;
} else {
var existing = temp__5739__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(existing))){
return null;
} else {
return cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname,new cljs.core.Keyword(null,"existing","existing",-340796094),existing], null));
}
}
})();
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge(cljs.core.name(fname)))].join(''));
var dyn_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$dyn"].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,dyn_name,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("core","fn","core/fn",468324874,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sig){
return expand_dyn(fname__$1,sig);
}),sigs__$1)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,fname__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (sig){
return expand_sig(dyn_name,cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),"$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol-method","protocol-method",1794903206),true], null)),sig);
}),sigs__$1)], 0)))),null,(1),null))], 0))));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,psym__$2,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"function(){}",null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq20433){
var G__20434 = cljs.core.first(seq20433);
var seq20433__$1 = cljs.core.next(seq20433);
var G__20435 = cljs.core.first(seq20433__$1);
var seq20433__$2 = cljs.core.next(seq20433__$1);
var G__20436 = cljs.core.first(seq20433__$2);
var seq20433__$3 = cljs.core.next(seq20433__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20434,G__20435,G__20436,seq20433__$3);
}));

return null;
})()
;
(cljs.core$macros.defprotocol.cljs$lang$macro = true);

var ret__4785__auto___21677 = /**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__20507 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20507,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0))));
}
});
(cljs.core$macros.implements_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21678 = /**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__20512 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20512,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$lang$protocol_mask$partition",cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),"$"].join(''));
if((!((x instanceof cljs.core.Symbol)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,xsym,null,(1),null)),(new cljs.core.List(null,x,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-not","cljs.core/coercive-not",303282494,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,xsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,xsym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,xsym,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-not","cljs.core/if-not",-1997686824,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",1201033885,null),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unsafe-bit-and","cljs.core/unsafe-bit-and",2116762989,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,bit,null,(1),null))], 0)))):false),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","identical?","cljs.core/identical?",608476750,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",prefix].join('')),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-not","cljs.core/coercive-not",303282494,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,msym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null),null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null))], 0)))),null,(1),null))], 0))));
}
});
(cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true);

var ret__4785__auto___21679 = (function (){
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21680 = arguments.length;
var i__4737__auto___21681 = (0);
while(true){
if((i__4737__auto___21681 < len__4736__auto___21680)){
args__4742__auto__.push((arguments[i__4737__auto___21681]));

var G__21682 = (i__4737__auto___21681 + (1));
i__4737__auto___21681 = G__21682;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq20520){
var G__20521 = cljs.core.first(seq20520);
var seq20520__$1 = cljs.core.next(seq20520);
var G__20522 = cljs.core.first(seq20520__$1);
var seq20520__$2 = cljs.core.next(seq20520__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20521,G__20522,seq20520__$2);
}));

return null;
})()
;
(cljs.core$macros.lazy_seq.cljs$lang$macro = true);

var ret__4785__auto___21683 = (function (){
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21684 = arguments.length;
var i__4737__auto___21685 = (0);
while(true){
if((i__4737__auto___21685 < len__4736__auto___21684)){
args__4742__auto__.push((arguments[i__4737__auto___21685]));

var G__21686 = (i__4737__auto___21685 + (1));
i__4737__auto___21685 = G__21686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.delay.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.delay.cljs$lang$applyTo = (function (seq20524){
var G__20525 = cljs.core.first(seq20524);
var seq20524__$1 = cljs.core.next(seq20524);
var G__20526 = cljs.core.first(seq20524__$1);
var seq20524__$2 = cljs.core.next(seq20524__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20525,G__20526,seq20524__$2);
}));

return null;
})()
;
(cljs.core$macros.delay.cljs$lang$macro = true);

var ret__4785__auto___21687 = (function (){
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21688 = arguments.length;
var i__4737__auto___21689 = (0);
while(true){
if((i__4737__auto___21689 < len__4736__auto___21688)){
args__4742__auto__.push((arguments[i__4737__auto___21689]));

var G__21690 = (i__4737__auto___21689 + (1));
i__4737__auto___21689 = G__21690;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var orig_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__20528_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20528_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__20529_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20529_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,orig_val_syms));
var bind_value = (function (p__20535){
var vec__20539 = p__20535;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20539,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20539,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(new cljs.core.List(null,k,(new cljs.core.List(null,v,null,(1),null)),(2),null)),(3),null));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(orig_val_syms,names),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(temp_val_syms,vals))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"finally","finally",-1065347064,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq20530){
var G__20531 = cljs.core.first(seq20530);
var seq20530__$1 = cljs.core.next(seq20530);
var G__20532 = cljs.core.first(seq20530__$1);
var seq20530__$2 = cljs.core.next(seq20530__$1);
var G__20533 = cljs.core.first(seq20530__$2);
var seq20530__$3 = cljs.core.next(seq20530__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20531,G__20532,G__20533,seq20530__$3);
}));

return null;
})()
;
(cljs.core$macros.with_redefs.cljs$lang$macro = true);

var ret__4785__auto___21691 = (function (){
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21692 = arguments.length;
var i__4737__auto___21693 = (0);
while(true){
if((i__4737__auto___21693 < len__4736__auto___21692)){
args__4742__auto__.push((arguments[i__4737__auto___21693]));

var G__21694 = (i__4737__auto___21693 + (1));
i__4737__auto___21693 = G__21694;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-redefs","cljs.core/with-redefs",1134293954,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0))));
}));

(cljs.core$macros.binding.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.binding.cljs$lang$applyTo = (function (seq20542){
var G__20543 = cljs.core.first(seq20542);
var seq20542__$1 = cljs.core.next(seq20542);
var G__20544 = cljs.core.first(seq20542__$1);
var seq20542__$2 = cljs.core.next(seq20542__$1);
var G__20545 = cljs.core.first(seq20542__$2);
var seq20542__$3 = cljs.core.next(seq20542__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20543,G__20544,G__20545,seq20542__$3);
}));

return null;
})()
;
(cljs.core$macros.binding.cljs$lang$macro = true);

var ret__4785__auto___21695 = (function (){
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an Error is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21696 = arguments.length;
var i__4737__auto___21697 = (0);
while(true){
if((i__4737__auto___21697 < len__4736__auto___21696)){
args__4742__auto__.push((arguments[i__4737__auto___21697]));

var G__21698 = (i__4737__auto___21697 + (1));
i__4737__auto___21697 = G__21698;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__20553 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second(args)))?(3):(2)),args);
var vec__20556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20556,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20556,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20556,(2),null);
var clause = vec__20556;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20553,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr__$1,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr__$1,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,b,null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit(pred__$1,expr__$1,more),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","if-let","cljs.core/if-let",1346583165,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"p__20547__auto__","p__20547__auto__",-1708692312,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,pred__$1,null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr__$1,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,c,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__20547__auto__","p__20547__auto__",-1708692312,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$emit(pred__$1,expr__$1,more),null,(1),null))], 0))));

}
}
}
});
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,gpred,null,(1),null)),(new cljs.core.List(null,pred,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gexpr,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,emit(gpred,gexpr,clauses),null,(1),null))], 0))));
}));

(cljs.core$macros.condp.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.condp.cljs$lang$applyTo = (function (seq20548){
var G__20549 = cljs.core.first(seq20548);
var seq20548__$1 = cljs.core.next(seq20548);
var G__20550 = cljs.core.first(seq20548__$1);
var seq20548__$2 = cljs.core.next(seq20548__$1);
var G__20551 = cljs.core.first(seq20548__$2);
var seq20548__$3 = cljs.core.next(seq20548__$2);
var G__20552 = cljs.core.first(seq20548__$3);
var seq20548__$4 = cljs.core.next(seq20548__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20549,G__20550,G__20551,G__20552,seq20548__$4);
}));

return null;
})()
;
(cljs.core$macros.condp.cljs$lang$macro = true);

cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error(["Duplicate case test constant '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),"'",(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[" on line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null)].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = ((cljs.core.list_QMARK_(x))?cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x)):false);
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
var ret__4785__auto___21699 = (function (){
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21700 = arguments.length;
var i__4737__auto___21701 = (0);
while(true){
if((i__4737__auto___21701 < len__4736__auto___21700)){
args__4742__auto__.push((arguments[i__4737__auto___21701]));

var G__21702 = (i__4737__auto___21701 + (1));
i__4737__auto___21701 = G__21702;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No matching clause: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,esym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__20579){
var vec__20580 = p__20579;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20580,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20580,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test__$1,null,(1),null)),(2),null)):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
}),m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,test,null,(1),null)),(2),null)),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p1__20571_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__20571_SHARP_);
})], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20572_SHARP_){
if(cljs.core.seq_QMARK_(p1__20572_SHARP_)){
return cljs.core.vec(p1__20572_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20572_SHARP_], null);
}
}),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var kw_str = (function (p1__20573_SHARP_){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20573_SHARP_).substring((1));
});
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20574_SHARP_){
if(cljs.core.seq_QMARK_(p1__20574_SHARP_)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(kw_str,p1__20574_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [kw_str(p1__20574_SHARP_)], null);
}
}),cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(esym,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,(1),null)),(new cljs.core.List(null,esym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,tests__$1,null,(1),null)),(new cljs.core.List(null,thens,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,esym,null,(1),null)),(new cljs.core.List(null,e,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__20590){
var vec__20591 = p__20590;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20591,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20591,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,m,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,esym,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,c,null,(1),null)))));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pairs], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,default$,null,(1),null))], 0)))),null,(1),null))], 0))));

}
}
}));

(cljs.core$macros.case$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.case$.cljs$lang$applyTo = (function (seq20575){
var G__20576 = cljs.core.first(seq20575);
var seq20575__$1 = cljs.core.next(seq20575);
var G__20577 = cljs.core.first(seq20575__$1);
var seq20575__$2 = cljs.core.next(seq20575__$1);
var G__20578 = cljs.core.first(seq20575__$2);
var seq20575__$3 = cljs.core.next(seq20575__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20576,G__20577,G__20578,seq20575__$3);
}));

return null;
})()
;
(cljs.core$macros.case$.cljs$lang$macro = true);

var ret__4785__auto___21703 = cljs.core$macros.when_assert = (function cljs$core$macros$when_assert(_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return x;
} else {
return null;
}
});
(cljs.core$macros.when_assert.cljs$lang$macro = true);

var ret__4785__auto___21704 = (function (){
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var G__20595 = arguments.length;
switch (G__20595) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (2)))].join('')));

}
});

(cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,["Assert failed: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))].join(''),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
return null;
}
}));

(cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-not","cljs.core/when-not",-556141047,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Assert failed: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,message,null,(1),null)),(new cljs.core.List(null,"\n",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
return null;
}
}));

(cljs.core$macros.assert.cljs$lang$maxFixedArity = 4);

return null;
})()
;
(cljs.core$macros.assert.cljs$lang$macro = true);

var ret__4785__auto___21706 = /**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("for requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__20602){
var vec__20603 = p__20602;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20603,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20603,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = (function() { 
var G__21707__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__21707 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__21708__i = 0, G__21708__a = new Array(arguments.length -  0);
while (G__21708__i < G__21708__a.length) {G__21708__a[G__21708__i] = arguments[G__21708__i + 0]; ++G__21708__i;}
  msg = new cljs.core.IndexedSeq(G__21708__a,0,null);
} 
return G__21707__delegate.call(this,msg);};
G__21707.cljs$lang$maxFixedArity = 0;
G__21707.cljs$lang$applyTo = (function (arglist__21709){
var msg = cljs.core.seq(arglist__21709);
return G__21707__delegate(msg);
});
G__21707.cljs$core$IFn$_invoke$arity$variadic = G__21707__delegate;
return G__21707;
})()
;
var emit_bind = (function cljs$core$macros$for_$_emit_bind(p__20607){
var vec__20608 = p__20607;
var seq__20609 = cljs.core.seq(vec__20608);
var first__20610 = cljs.core.first(seq__20609);
var seq__20609__$1 = cljs.core.next(seq__20609);
var vec__20611 = first__20610;
var seq__20612 = cljs.core.seq(vec__20611);
var first__20613 = cljs.core.first(seq__20612);
var seq__20612__$1 = cljs.core.next(seq__20612);
var bind = first__20613;
var first__20613__$1 = cljs.core.first(seq__20612__$1);
var seq__20612__$2 = cljs.core.next(seq__20612__$1);
var expr = first__20613__$1;
var mod_pairs = seq__20612__$2;
var vec__20614 = seq__20609__$1;
var vec__20617 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20614,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20617,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20617,(1),null);
var next_groups = vec__20614;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__20620){
var vec__20621 = p__20620;
var seq__20622 = cljs.core.seq(vec__20621);
var first__20623 = cljs.core.first(seq__20622);
var seq__20622__$1 = cljs.core.next(seq__20622);
var vec__20624 = first__20623;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20624,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20624,(1),null);
var pair = vec__20624;
var etc = seq__20622__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_mod(etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__20596__auto__","iterys__20596__auto__",-2112593042,null),null,(1),null)),(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind(next_groups),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__20597__auto__","fs__20597__auto__",433702416,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iterys__20596__auto__","iterys__20596__auto__",-2112593042,null),null,(1),null)),(new cljs.core.List(null,next_expr,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__20597__auto__","fs__20597__auto__",433702416,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"fs__20597__auto__","fs__20597__auto__",433702416,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null),null,(1),null)),(new cljs.core.List(null,body_expr,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));

}
}
}
}
}
});
if(next_groups){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-first","cljs.core/when-first",-667185267,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_mod(mod_pairs),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__20633){
var vec__20634 = p__20633;
var seq__20635 = cljs.core.seq(vec__20634);
var first__20636 = cljs.core.first(seq__20635);
var seq__20635__$1 = cljs.core.next(seq__20635);
var vec__20637 = first__20636;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20637,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20637,(1),null);
var pair = vec__20637;
var etc = seq__20635__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc),null,(1),null))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,body_expr,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null))))),null,(1),null))))),null,(1),null))], 0))));

}
}
}
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,giter,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gxs,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"c__20598__auto__","c__20598__auto__",-1271326486,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,2502,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,52,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,2502,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,82,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null),null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"size__20599__auto__","size__20599__auto__",2070356833,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__20598__auto__","c__20598__auto__",-1271326486,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"size__20599__auto__","size__20599__auto__",2070356833,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-boolean","cljs.core/coercive-boolean",-386297147,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,gi,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,gi,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"size__20599__auto__","size__20599__auto__",2070356833,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__20598__auto__","c__20598__auto__",-1271326486,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,gi,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_cmod(mod_pairs),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,giter,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null),null,(1),null)),(new cljs.core.List(null,gb,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,bind,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,gxs,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,do_mod(mod_pairs),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0))));
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iter__20600__auto__","iter__20600__auto__",-12067753,null),null,(1),null)),(new cljs.core.List(null,emit_bind(to_groups(seq_exprs)),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"iter__20600__auto__","iter__20600__auto__",-12067753,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(seq_exprs),null,(1),null))))),null,(1),null))], 0))));
});
(cljs.core$macros.for$.cljs$lang$macro = true);

var ret__4785__auto___21710 = (function (){
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21711 = arguments.length;
var i__4737__auto___21712 = (0);
while(true){
if((i__4737__auto___21712 < len__4736__auto___21711)){
args__4742__auto__.push((arguments[i__4737__auto___21712]));

var G__21713 = (i__4737__auto___21712 + (1));
i__4737__auto___21712 = G__21713;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_(seq_exprs)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires a vector for its binding",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(seq_exprs))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("doseq requires an even number of forms in binding vector",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),new cljs.core.Keyword(null,"macro-syntax-check","macro-syntax-check",2072602373)], null));
}


var err = (function() { 
var G__21714__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__21714 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__21715__i = 0, G__21715__a = new Array(arguments.length -  0);
while (G__21715__i < G__21715__a.length) {G__21715__a[G__21715__i] = arguments[G__21715__i + 0]; ++G__21715__i;}
  msg = new cljs.core.IndexedSeq(G__21715__a,0,null);
} 
return G__21714__delegate.call(this,msg);};
G__21714.cljs$lang$maxFixedArity = 0;
G__21714.cljs$lang$applyTo = (function (arglist__21716){
var msg = cljs.core.seq(arglist__21716);
return G__21714__delegate(msg);
});
G__21714.cljs$core$IFn$_invoke$arity$variadic = G__21714__delegate;
return G__21714;
})()
;
var step = (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0))))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform,null,(1),null))], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,subform,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0)))),null,(1),null)),(new cljs.core.List(null,recform__$1,null,(1),null))], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err("Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-inc","cljs.core/unchecked-inc",-501313167,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null))))),null,(1),null))], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,chunksym,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,countsym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","coercive-boolean","cljs.core/coercive-boolean",-386297147,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,isym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,countsym,null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null),null,(1),null)),(new cljs.core.List(null,chunksym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,isym,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform_chunk,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when-let","cljs.core/when-let",-2049838349,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,seqsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"c__20677__auto__","c__20677__auto__",873716969,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"c__20677__auto__","c__20677__auto__",873716969,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__20677__auto__","c__20677__auto__",873716969,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),null,(1),null)),(new cljs.core.List(null,seqsym,null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,subform,null,(1),null)),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);

}
}
}
}
}
});
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
}));

(cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq20681){
var G__20682 = cljs.core.first(seq20681);
var seq20681__$1 = cljs.core.next(seq20681);
var G__20683 = cljs.core.first(seq20681__$1);
var seq20681__$2 = cljs.core.next(seq20681__$1);
var G__20684 = cljs.core.first(seq20681__$2);
var seq20681__$3 = cljs.core.next(seq20681__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20682,G__20683,G__20684,seq20681__$3);
}));

return null;
})()
;
(cljs.core$macros.doseq.cljs$lang$macro = true);

var ret__4785__auto___21717 = (function (){
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21718 = arguments.length;
var i__4737__auto___21719 = (0);
while(true){
if((i__4737__auto___21719 < len__4736__auto___21718)){
args__4742__auto__.push((arguments[i__4737__auto___21719]));

var G__21720 = (i__4737__auto___21719 + (1));
i__4737__auto___21719 = G__21720;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),"]"].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
}));

(cljs.core$macros.array.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.array.cljs$lang$applyTo = (function (seq20694){
var G__20695 = cljs.core.first(seq20694);
var seq20694__$1 = cljs.core.next(seq20694);
var G__20696 = cljs.core.first(seq20694__$1);
var seq20694__$2 = cljs.core.next(seq20694__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20695,G__20696,seq20694__$2);
}));

return null;
})()
;
(cljs.core$macros.array.cljs$lang$macro = true);

var ret__4785__auto___21721 = (function (){
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var G__20724 = arguments.length;
switch (G__20724) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21723 = arguments.length;
var i__4737__auto___21724 = (0);
while(true){
if((i__4737__auto___21724 < len__4736__auto___21723)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21724]));

var G__21725 = (i__4737__auto___21724 + (1));
i__4737__auto___21724 = G__21725;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4758__auto__);

}
});

(cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
}));

(cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null)))));
}));

(cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"dims__20709__auto__","dims__20709__auto__",-187291999,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),more_sizes))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__20710__auto__","dimarray__20710__auto__",-685783142,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),(new cljs.core.List(null,size,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dotimes","cljs.core/dotimes",-1326291458,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"i__20711__auto__","i__20711__auto__",1724778661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__20710__auto__","dimarray__20710__auto__",-685783142,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__20710__auto__","dimarray__20710__auto__",-685783142,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"i__20711__auto__","i__20711__auto__",1724778661,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dims__20709__auto__","dims__20709__auto__",-187291999,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"dimarray__20710__auto__","dimarray__20710__auto__",-685783142,null),null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
}));

/** @this {Function} */
(cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq20719){
var G__20720 = cljs.core.first(seq20719);
var seq20719__$1 = cljs.core.next(seq20719);
var G__20721 = cljs.core.first(seq20719__$1);
var seq20719__$2 = cljs.core.next(seq20719__$1);
var G__20722 = cljs.core.first(seq20719__$2);
var seq20719__$3 = cljs.core.next(seq20719__$2);
var G__20723 = cljs.core.first(seq20719__$3);
var seq20719__$4 = cljs.core.next(seq20719__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20720,G__20721,G__20722,G__20723,seq20719__$4);
}));

(cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4));

return null;
})()
;
(cljs.core$macros.make_array.cljs$lang$macro = true);

var ret__4785__auto___21726 = (function (){
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var G__20745 = arguments.length;
switch (G__20745) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21728 = arguments.length;
var i__4737__auto___21729 = (0);
while(true){
if((i__4737__auto___21729 < len__4736__auto___21728)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21729]));

var G__21730 = (i__4737__auto___21729 + (1));
i__4737__auto___21729 = G__21730;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
}));

(cljs.core$macros.list.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

(cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
var cnt = (cljs.core.count(xs) + (1));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","List.","cljs.core/List.",46210610,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,x,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
}));

/** @this {Function} */
(cljs.core$macros.list.cljs$lang$applyTo = (function (seq20741){
var G__20742 = cljs.core.first(seq20741);
var seq20741__$1 = cljs.core.next(seq20741);
var G__20743 = cljs.core.first(seq20741__$1);
var seq20741__$2 = cljs.core.next(seq20741__$1);
var G__20744 = cljs.core.first(seq20741__$2);
var seq20741__$3 = cljs.core.next(seq20741__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20742,G__20743,G__20744,seq20741__$3);
}));

(cljs.core$macros.list.cljs$lang$maxFixedArity = (3));

return null;
})()
;
(cljs.core$macros.list.cljs$lang$macro = true);

var ret__4785__auto___21731 = (function (){
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var G__20750 = arguments.length;
switch (G__20750) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21733 = arguments.length;
var i__4737__auto___21734 = (0);
while(true){
if((i__4737__auto___21734 < len__4736__auto___21733)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21734]));

var G__21735 = (i__4737__auto___21734 + (1));
i__4737__auto___21734 = G__21735;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}));

(cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cnt,null,(1),null)),(new cljs.core.List(null,(5),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),xs))),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
}));

/** @this {Function} */
(cljs.core$macros.vector.cljs$lang$applyTo = (function (seq20747){
var G__20748 = cljs.core.first(seq20747);
var seq20747__$1 = cljs.core.next(seq20747);
var G__20749 = cljs.core.first(seq20747__$1);
var seq20747__$2 = cljs.core.next(seq20747__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20748,G__20749,seq20747__$2);
}));

(cljs.core$macros.vector.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.vector.cljs$lang$macro = true);

var ret__4785__auto___21736 = (function (){
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var G__20776 = arguments.length;
switch (G__20776) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21738 = arguments.length;
var i__4737__auto___21739 = (0);
while(true){
if((i__4737__auto___21739 < len__4736__auto___21738)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21739]));

var G__21740 = (i__4737__auto___21739 + (1));
i__4737__auto___21739 = G__21740;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
}));

(cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if(((cljs.core.every_QMARK_((function (p1__20770_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(p1__20770_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20771_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__20792 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__20793 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__20793);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__20771_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__20792);
}}),keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(cljs.core.count(kvs) / (2)),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),kvs))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),kvs))),null,(1),null))], 0))));
}
}));

/** @this {Function} */
(cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq20773){
var G__20774 = cljs.core.first(seq20773);
var seq20773__$1 = cljs.core.next(seq20773);
var G__20775 = cljs.core.first(seq20773__$1);
var seq20773__$2 = cljs.core.next(seq20773__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20774,G__20775,seq20773__$2);
}));

(cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.array_map.cljs$lang$macro = true);

var ret__4785__auto___21741 = (function (){
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var G__20806 = arguments.length;
switch (G__20806) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21743 = arguments.length;
var i__4737__auto___21744 = (0);
while(true){
if((i__4737__auto___21744 < len__4736__auto___21743)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21744]));

var G__21745 = (i__4737__auto___21744 + (1));
i__4737__auto___21744 = G__21745;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)))));
}));

(cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),ks))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),vs))),null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
}));

/** @this {Function} */
(cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq20802){
var G__20804 = cljs.core.first(seq20802);
var seq20802__$1 = cljs.core.next(seq20802);
var G__20805 = cljs.core.first(seq20802__$1);
var seq20802__$2 = cljs.core.next(seq20802__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20804,G__20805,seq20802__$2);
}));

(cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.hash_map.cljs$lang$macro = true);

var ret__4785__auto___21746 = (function (){
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var G__20828 = arguments.length;
switch (G__20828) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___21748 = arguments.length;
var i__4737__auto___21749 = (0);
while(true){
if((i__4737__auto___21749 < len__4736__auto___21748)){
args_arr__4757__auto__.push((arguments[i__4737__auto___21749]));

var G__21750 = (i__4737__auto___21749 + (1));
i__4737__auto___21749 = G__21750;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4758__auto__);

}
});

(cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)))));
}));

(cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if((((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__20822_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.unwrap_quote(p1__20822_SHARP_)),new cljs.core.Keyword(null,"const","const",1709929842));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20823_SHARP_){
var _STAR_cljs_warnings_STAR__orig_val__20835 = cljs.analyzer._STAR_cljs_warnings_STAR_;
var _STAR_cljs_warnings_STAR__temp_val__20836 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"unsupported-preprocess-value","unsupported-preprocess-value",1635147105),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"js-shadowed-by-local","js-shadowed-by-local",198048291),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"private-var-access","private-var-access",967536101),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"infer-warning","infer-warning",-1600671410),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"declared-arglists-mismatch","declared-arglists-mismatch",-496878383),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"protocol-with-overwriting-method","protocol-with-overwriting-method",319993011),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"invalid-array-access","invalid-array-access",-1747132236),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"non-dynamic-earmuffed-var","non-dynamic-earmuffed-var",-202005643),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"protocol-impl-recur-with-target","protocol-impl-recur-with-target",-1648321574),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),new cljs.core.Keyword(null,"protocol-impl-with-variadic-method","protocol-impl-with-variadic-method",-319321217)],[false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]);
(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__temp_val__20836);

try{return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__20823_SHARP_);
}finally {(cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR__orig_val__20835);
}}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs))))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.count(xs),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),xs))),null,(1),null))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
}));

/** @this {Function} */
(cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq20825){
var G__20826 = cljs.core.first(seq20825);
var seq20825__$1 = cljs.core.next(seq20825);
var G__20827 = cljs.core.first(seq20825__$1);
var seq20825__$2 = cljs.core.next(seq20825__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20826,G__20827,seq20825__$2);
}));

(cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2));

return null;
})()
;
(cljs.core$macros.hash_set.cljs$lang$macro = true);

cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),["({",cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),"})"].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
var ret__4785__auto___21751 = (function (){
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21752 = arguments.length;
var i__4737__auto___21753 = (0);
while(true){
if((i__4737__auto___21753 < len__4736__auto___21752)){
args__4742__auto__.push((arguments[i__4737__auto___21753]));

var G__21754 = (i__4737__auto___21753 + (1));
i__4737__auto___21753 = G__21754;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return (((x instanceof cljs.core.Symbol)) || (typeof x === 'string'));
});
var filter_on_keys = (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__20864){
var vec__20865 = p__20864;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20865,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20865,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
}),coll));
});
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs)),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20876){
var vec__20877 = p__20876;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20877,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20877,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,v,null,(1),null))], 0))));
}),sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20880){
var vec__20881 = p__20880;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20881,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20881,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,obj,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,v,null,(1),null)),(new cljs.core.List(null,cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k),null,(1),null))], 0))));
}),expr__GT_local),(new cljs.core.List(null,obj,null,(1),null))], 0))));
}
}));

(cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq20850){
var G__20851 = cljs.core.first(seq20850);
var seq20850__$1 = cljs.core.next(seq20850);
var G__20852 = cljs.core.first(seq20850__$1);
var seq20850__$2 = cljs.core.next(seq20850__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20851,G__20852,seq20850__$2);
}));

return null;
})()
;
(cljs.core$macros.js_obj.cljs$lang$macro = true);

var ret__4785__auto___21755 = cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"~{}.length",(new cljs.core.List(null,a,null,(1),null)),(2),null)),(3),null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});
(cljs.core$macros.alength.cljs$lang$macro = true);

var ret__4785__auto___21756 = /**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"a__20897__auto__","a__20897__auto__",825546991,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__20898__auto__","l__20898__auto__",600797013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__20897__auto__","a__20897__auto__",825546991,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__20897__auto__","a__20897__auto__",825546991,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__20898__auto__","l__20898__auto__",600797013,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",-898215545,null),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.amap.cljs$lang$macro = true);

var ret__4785__auto___21757 = /**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"a__20914__auto__","a__20914__auto__",-1157613972,null),null,(1),null)),(new cljs.core.List(null,a,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__20915__auto__","l__20915__auto__",-1146629742,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"a__20914__auto__","a__20914__auto__",-1157613972,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,ret,null,(1),null)),(new cljs.core.List(null,init,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"l__20915__auto__","l__20915__auto__",-1146629742,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,idx,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,ret,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.areduce.cljs$lang$macro = true);

var ret__4785__auto___21758 = (function (){
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21759 = arguments.length;
var i__4737__auto___21760 = (0);
while(true){
if((i__4737__auto___21760 < len__4736__auto___21759)){
args__4742__auto__.push((arguments[i__4737__auto___21760]));

var G__21761 = (i__4737__auto___21760 + (1));
i__4737__auto___21760 = G__21761;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"n__20927__auto__","n__20927__auto__",1633198853,null),null,(1),null)),(new cljs.core.List(null,n,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,i,null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"n__20927__auto__","n__20927__auto__",1633198853,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,i,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq20934){
var G__20935 = cljs.core.first(seq20934);
var seq20934__$1 = cljs.core.next(seq20934);
var G__20936 = cljs.core.first(seq20934__$1);
var seq20934__$2 = cljs.core.next(seq20934__$1);
var G__20937 = cljs.core.first(seq20934__$2);
var seq20934__$3 = cljs.core.next(seq20934__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20935,G__20936,G__20937,seq20934__$3);
}));

return null;
})()
;
(cljs.core$macros.dotimes.cljs$lang$macro = true);

/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21762 = arguments.length;
var i__4737__auto___21763 = (0);
while(true){
if((i__4737__auto___21763 < len__4736__auto___21762)){
args__4742__auto__.push((arguments[i__4737__auto___21763]));

var G__21764 = (i__4737__auto___21763 + (1));
i__4737__auto___21763 = G__21764;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20942_SHARP_){
return [", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20942_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
}));

(cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq20943){
var G__20944 = cljs.core.first(seq20943);
var seq20943__$1 = cljs.core.next(seq20943);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20944,seq20943__$1);
}));

var ret__4785__auto___21765 = (function (){
/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21766 = arguments.length;
var i__4737__auto___21767 = (0);
while(true){
if((i__4737__auto___21767 < len__4736__auto___21766)){
args__4742__auto__.push((arguments[i__4737__auto___21767]));

var G__21768 = (i__4737__auto___21767 + (1));
i__4737__auto___21767 = G__21768;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defonce","cljs.core/defonce",-1291833100,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(mm_name,m__$2),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__20949__auto__","method-table__20949__auto__",-312173469,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__20950__auto__","prefer-table__20950__auto__",-1838269034,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__20951__auto__","method-cache__20951__auto__",2094842506,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__20952__auto__","cached-hierarchy__20952__auto__",1550997428,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__20953__auto__","hierarchy__20953__auto__",96590657,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,options__$4,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,(1),null)),(new cljs.core.List(null,"cljs.core.get_global_hierarchy",null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,mm_ns,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.name(mm_name),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_fn,null,(1),null)),(new cljs.core.List(null,default$,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"hierarchy__20953__auto__","hierarchy__20953__auto__",96590657,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-table__20949__auto__","method-table__20949__auto__",-312173469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"prefer-table__20950__auto__","prefer-table__20950__auto__",-1838269034,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method-cache__20951__auto__","method-cache__20951__auto__",2094842506,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"cached-hierarchy__20952__auto__","cached-hierarchy__20952__auto__",1550997428,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq20954){
var G__20955 = cljs.core.first(seq20954);
var seq20954__$1 = cljs.core.next(seq20954);
var G__20956 = cljs.core.first(seq20954__$1);
var seq20954__$2 = cljs.core.next(seq20954__$1);
var G__20957 = cljs.core.first(seq20954__$2);
var seq20954__$3 = cljs.core.next(seq20954__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20955,G__20956,G__20957,seq20954__$3);
}));

return null;
})()
;
(cljs.core$macros.defmulti.cljs$lang$macro = true);

var ret__4785__auto___21769 = (function (){
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21770 = arguments.length;
var i__4737__auto___21771 = (0);
while(true){
if((i__4737__auto___21771 < len__4736__auto___21770)){
args__4742__auto__.push((arguments[i__4737__auto___21771]));

var G__21772 = (i__4737__auto___21771 + (1));
i__4737__auto___21771 = G__21772;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dispatch_val,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),fn_tail))),null,(1),null))], 0))));
}));

(cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq20958){
var G__20959 = cljs.core.first(seq20958);
var seq20958__$1 = cljs.core.next(seq20958);
var G__20960 = cljs.core.first(seq20958__$1);
var seq20958__$2 = cljs.core.next(seq20958__$1);
var G__20961 = cljs.core.first(seq20958__$2);
var seq20958__$3 = cljs.core.next(seq20958__$2);
var G__20962 = cljs.core.first(seq20958__$3);
var seq20958__$4 = cljs.core.next(seq20958__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20959,G__20960,G__20961,G__20962,seq20958__$4);
}));

return null;
})()
;
(cljs.core$macros.defmethod.cljs$lang$macro = true);

var ret__4785__auto___21773 = /**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"start__20971__auto__","start__20971__auto__",521158908,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__20972__auto__","ret__20972__auto__",-186801588,null),null,(1),null)),(new cljs.core.List(null,expr,null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Elapsed time: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"start__20971__auto__","start__20971__auto__",521158908,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(6),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__20972__auto__","ret__20972__auto__",-186801588,null),null,(1),null))], 0))));
});
(cljs.core$macros.time.cljs$lang$macro = true);

var ret__4785__auto___21774 = (function (){
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21775 = arguments.length;
var i__4737__auto___21776 = (0);
while(true){
if((i__4737__auto___21776 < len__4736__auto___21775)){
args__4742__auto__.push((arguments[i__4737__auto___21776]));

var G__21777 = (i__4737__auto___21776 + (1));
i__4737__auto___21776 = G__21777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((5) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__4743__auto__);
});

(cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__20984){
var map__20985 = p__20984;
var map__20985__$1 = (((((!((map__20985 == null))))?(((((map__20985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20985):map__20985);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20985__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"start__20973__auto__","start__20973__auto__",-1903480876,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__20974__auto__","ret__20974__auto__",121262355,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","dotimes","cljs.core/dotimes",-1326291458,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"___20975__auto__","___20975__auto__",-59509990,null),null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,expr,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__20976__auto__","end__20976__auto__",-151929394,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null),null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__20977__auto__","elapsed__20977__auto__",-850084259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"end__20976__auto__","end__20976__auto__",-151929394,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"start__20973__auto__","start__20973__auto__",-1903480876,null),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,print_fn,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,bs_str,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,expr_str,null,(1),null)),(new cljs.core.List(null,", ",null,(1),null)),(new cljs.core.List(null,iterations,null,(1),null)),(new cljs.core.List(null," runs, ",null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"elapsed__20977__auto__","elapsed__20977__auto__",-850084259,null),null,(1),null)),(new cljs.core.List(null," msecs",null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq20978){
var G__20979 = cljs.core.first(seq20978);
var seq20978__$1 = cljs.core.next(seq20978);
var G__20980 = cljs.core.first(seq20978__$1);
var seq20978__$2 = cljs.core.next(seq20978__$1);
var G__20981 = cljs.core.first(seq20978__$2);
var seq20978__$3 = cljs.core.next(seq20978__$2);
var G__20982 = cljs.core.first(seq20978__$3);
var seq20978__$4 = cljs.core.next(seq20978__$3);
var G__20983 = cljs.core.first(seq20978__$4);
var seq20978__$5 = cljs.core.next(seq20978__$4);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20979,G__20980,G__20981,G__20982,G__20983,seq20978__$5);
}));

return null;
})()
;
(cljs.core$macros.simple_benchmark.cljs$lang$macro = true);

cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var G__20988 = arguments.length;
switch (G__20988) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
}));

(cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,(function (){var G__20990 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__20990) : cljs.core$macros.cs.call(null,G__20990));
})(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs)))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1))),null,(1),null))], 0)))),null,(1),null))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,"Only up to 20 arguments supported on functions",null,(1),null))))),null,(1),null)))));
}
}));

(cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1);

var ret__4785__auto___21779 = cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args","args",-1338879193,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","zero?","cljs.core/zero?",-341242858,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"argc","argc",187692008,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"f","f",43394975,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0(),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,false,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.gen_apply_to.cljs$lang$macro = true);

cljs.core$macros.gen_apply_to_simple_helper = (function cljs$core$macros$gen_apply_to_simple_helper(f,num_args,args){
var new_arg_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var proto_name = ["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1((num_args + (1)))].join('');
var proto_prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".-",proto_name].join(''));
var proto_inv = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([".",proto_name].join(''));
var next_sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["next_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(num_args)].join(''));
var all_args = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__20992_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["a",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20992_SHARP_)].join(''));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((num_args + (1))));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new_arg_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,next_sym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,args,null,(1),null))))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,proto_prop,null,(1),null)),(new cljs.core.List(null,f,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,proto_inv,null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_args], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".call",".call",1496874263,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),all_args], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,((((19) <= num_args))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"arr__20993__auto__","arr__20993__auto__",-164458482,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null)),all_args))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__20994__auto__","s__20994__auto__",605383400,null),null,(1),null)),(new cljs.core.List(null,next_sym,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__20994__auto__","s__20994__auto__",605383400,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__20993__auto__","arr__20993__auto__",-164458482,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__20994__auto__","s__20994__auto__",605383400,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__20994__auto__","s__20994__auto__",605383400,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"arr__20993__auto__","arr__20993__auto__",-164458482,null),null,(1),null))], 0)))),null,(1),null))], 0)))):(function (){var G__20997 = f;
var G__20998 = (num_args + (1));
var G__20999 = next_sym;
return (cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3 ? cljs.core$macros.gen_apply_to_simple_helper.cljs$core$IFn$_invoke$arity$3(G__20997,G__20998,G__20999) : cljs.core$macros.gen_apply_to_simple_helper.call(null,G__20997,G__20998,G__20999));
})()),null,(1),null))], 0)))),null,(1),null))], 0))));
});
var ret__4785__auto___21780 = cljs.core$macros.gen_apply_to_simple = (function cljs$core$macros$gen_apply_to_simple(_AMPERSAND_form,_AMPERSAND_env,f,num_args,args){
return cljs.core$macros.gen_apply_to_simple_helper(f,num_args,args);
});
(cljs.core$macros.gen_apply_to_simple.cljs$lang$macro = true);

var ret__4785__auto___21781 = (function (){
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21782 = arguments.length;
var i__4737__auto___21783 = (0);
while(true){
if((i__4737__auto___21783 < len__4736__auto___21782)){
args__4742__auto__.push((arguments[i__4737__auto___21783]));

var G__21784 = (i__4737__auto___21783 + (1));
i__4737__auto___21783 = G__21784;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"sb__21000__auto__","sb__21000__auto__",1600995286,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("goog.string","StringBuffer.","goog.string/StringBuffer.",-6870594,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__21001__auto__","x__21001__auto__",1217124510,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".append",".append",1595439852,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__21000__auto__","sb__21000__auto__",1600995286,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__21001__auto__","x__21001__auto__",1217124510,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"sb__21000__auto__","sb__21000__auto__",1600995286,null),null,(1),null))))),null,(1),null))], 0))));
}));

(cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq21002){
var G__21003 = cljs.core.first(seq21002);
var seq21002__$1 = cljs.core.next(seq21002);
var G__21004 = cljs.core.first(seq21002__$1);
var seq21002__$2 = cljs.core.next(seq21002__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21003,G__21004,seq21002__$2);
}));

return null;
})()
;
(cljs.core$macros.with_out_str.cljs$lang$macro = true);

var ret__4785__auto___21785 = (function (){
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21786 = arguments.length;
var i__4737__auto___21787 = (0);
while(true){
if((i__4737__auto___21787 < len__4736__auto___21786)){
args__4742__auto__.push((arguments[i__4737__auto___21787]));

var G__21788 = (i__4737__auto___21787 + (1));
i__4737__auto___21787 = G__21788;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21005_SHARP_){
return (new cljs.core.List(null,new cljs.core.Symbol("cljs.core","lazy-seq","cljs.core/lazy-seq",627681297,null),(new cljs.core.List(null,p1__21005_SHARP_,null,(1),null)),(2),null));
}),colls))));
}));

(cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq21006){
var G__21007 = cljs.core.first(seq21006);
var seq21006__$1 = cljs.core.next(seq21006);
var G__21008 = cljs.core.first(seq21006__$1);
var seq21006__$2 = cljs.core.next(seq21006__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21007,G__21008,seq21006__$2);
}));

return null;
})()
;
(cljs.core$macros.lazy_cat.cljs$lang$macro = true);

var ret__4785__auto___21789 = cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(new cljs.core.List(null,"''+~{}",(new cljs.core.List(null,s,null,(1),null)),(2),null)),(3),null));
});
(cljs.core$macros.js_str.cljs$lang$macro = true);

var ret__4785__auto___21790 = cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("goog.object","set","goog.object/set",-2123361230,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null),null,(1),null)),(new cljs.core.List(null,ty,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__21010__auto__","this__21010__auto__",1885459600,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"this__21010__auto__","this__21010__auto__",1885459600,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.es6_iterable.cljs$lang$macro = true);

var ret__4785__auto___21791 = /**
 * Returns a map of the public intern mappings for the namespace.
 */
cljs.core$macros.ns_publics = (function cljs$core$macros$ns_publics(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-publics must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21012){
var vec__21013 = p__21012;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21013,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21013,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name(sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym)),null,(1),null))))),null,(1),null))))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__21016){
var vec__21017 = p__21016;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21017,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21017,(1),null);
return cljs.core.not(new cljs.core.Keyword(null,"private","private",-558947994).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(info)));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))))),null,(1),null))], 0))));
});
(cljs.core$macros.ns_publics.cljs$lang$macro = true);

var ret__4785__auto___21792 = /**
 * Returns a map of the import mappings for the namespace.
 */
cljs.core$macros.ns_imports = (function cljs$core$macros$ns_imports(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-imports must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21021){
var vec__21022 = p__21021;
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(0),null);
var qualified_ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21022,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name(ctor),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(qualified_ctor),null,(1),null))))));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"imports","imports",-1249933394)], null))))))),null,(1),null))], 0))));
});
(cljs.core$macros.ns_imports.cljs$lang$macro = true);

var ret__4785__auto___21793 = /**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,quoted_ns){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Argument to ns-interns must be a quoted symbol","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__21025){
var vec__21026 = p__21025;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21026,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21026,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null),null,(1),null)),(new cljs.core.List(null,cljs.core.name(sym),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym)),null,(1),null))))),null,(1),null))))));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))),null,(1),null))], 0))));
});
(cljs.core$macros.ns_interns.cljs$lang$macro = true);

var ret__4785__auto___21794 = /**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,quoted_ns,quoted_sym){
if(((cljs.core.seq_QMARK_(quoted_ns)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_ns),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_ns) instanceof cljs.core.Symbol)) && (cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted_sym),new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((cljs.core.second(quoted_sym) instanceof cljs.core.Symbol)))){
} else {
throw (new Error(["Assert failed: ","Arguments to ns-unmap must be quoted symbols","\n","(core/and (seq? quoted-ns) (= (first quoted-ns) (quote quote)) (core/symbol? (second quoted-ns)) (seq? quoted-sym) (= (first quoted-sym) (quote quote)) (core/symbol? (second quoted-sym)))"].join('')));
}

var ns = cljs.core.second(quoted_ns);
var sym = cljs.core.second(quoted_sym);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-delete","cljs.core/js-delete",-496744137,null),null,(1),null)),(new cljs.core.List(null,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)),null,(1),null))], 0))));
});
(cljs.core$macros.ns_unmap.cljs$lang$macro = true);

var ret__4785__auto___21795 = (function (){
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21796 = arguments.length;
var i__4737__auto___21797 = (0);
while(true){
if((i__4737__auto___21797 < len__4736__auto___21796)){
args__4742__auto__.push((arguments[i__4737__auto___21797]));

var G__21798 = (i__4737__auto___21797 + (1));
i__4737__auto___21797 = G__21798;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null),null,(1),null)),(new cljs.core.List(null,vol,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq21032){
var G__21033 = cljs.core.first(seq21032);
var seq21032__$1 = cljs.core.next(seq21032);
var G__21034 = cljs.core.first(seq21032__$1);
var seq21032__$2 = cljs.core.next(seq21032__$1);
var G__21035 = cljs.core.first(seq21032__$2);
var seq21032__$3 = cljs.core.next(seq21032__$2);
var G__21036 = cljs.core.first(seq21032__$3);
var seq21032__$4 = cljs.core.next(seq21032__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21033,G__21034,G__21035,G__21036,seq21032__$4);
}));

return null;
})()
;
(cljs.core$macros.vswap_BANG_.cljs$lang$macro = true);

var ret__4785__auto___21799 = (function (){
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21800 = arguments.length;
var i__4737__auto___21801 = (0);
while(true){
if((i__4737__auto___21801 < len__4736__auto___21800)){
args__4742__auto__.push((arguments[i__4737__auto___21801]));

var G__21802 = (i__4737__auto___21801 + (1));
i__4737__auto___21801 = G__21802;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),forms)));
}));

(cljs.core$macros.locking.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.locking.cljs$lang$applyTo = (function (seq21038){
var G__21039 = cljs.core.first(seq21038);
var seq21038__$1 = cljs.core.next(seq21038);
var G__21040 = cljs.core.first(seq21038__$1);
var seq21038__$2 = cljs.core.next(seq21038__$1);
var G__21041 = cljs.core.first(seq21038__$2);
var seq21038__$3 = cljs.core.next(seq21038__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21039,G__21040,G__21041,seq21038__$3);
}));

return null;
})()
;
(cljs.core$macros.locking.cljs$lang$macro = true);

var ret__4785__auto___21803 = cljs.core$macros.ns_special_form = (function cljs$core$macros$ns_special_form(_AMPERSAND_form,_AMPERSAND_env){
return null;
});
(cljs.core$macros.ns_special_form.cljs$lang$macro = true);

var ret__4785__auto___21804 = (function (){
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace.
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure.string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21805 = arguments.length;
var i__4737__auto___21806 = (0);
while(true){
if((i__4737__auto___21806 < len__4736__auto___21805)){
args__4742__auto__.push((arguments[i__4737__auto___21806]));

var G__21807 = (i__4737__auto___21806 + (1));
i__4737__auto___21806 = G__21807;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"require","require",-468001333),args),null,(1),null)))));
}));

(cljs.core$macros.require.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.require.cljs$lang$applyTo = (function (seq21042){
var G__21043 = cljs.core.first(seq21042);
var seq21042__$1 = cljs.core.next(seq21042);
var G__21044 = cljs.core.first(seq21042__$1);
var seq21042__$2 = cljs.core.next(seq21042__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21043,G__21044,seq21042__$2);
}));

return null;
})()
;
(cljs.core$macros.require.cljs$lang$macro = true);

var ret__4785__auto___21808 = (function (){
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21809 = arguments.length;
var i__4737__auto___21810 = (0);
while(true){
if((i__4737__auto___21810 < len__4736__auto___21809)){
args__4742__auto__.push((arguments[i__4737__auto___21810]));

var G__21811 = (i__4737__auto___21810 + (1));
i__4737__auto___21810 = G__21811;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args),null,(1),null)))));
}));

(cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq21045){
var G__21046 = cljs.core.first(seq21045);
var seq21045__$1 = cljs.core.next(seq21045);
var G__21047 = cljs.core.first(seq21045__$1);
var seq21045__$2 = cljs.core.next(seq21045__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21046,G__21047,seq21045__$2);
}));

return null;
})()
;
(cljs.core$macros.require_macros.cljs$lang$macro = true);

var ret__4785__auto___21812 = (function (){
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21813 = arguments.length;
var i__4737__auto___21814 = (0);
while(true){
if((i__4737__auto___21814 < len__4736__auto___21813)){
args__4742__auto__.push((arguments[i__4737__auto___21814]));

var G__21815 = (i__4737__auto___21814 + (1));
i__4737__auto___21814 = G__21815;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"use","use",-1846382424),args),null,(1),null)))));
}));

(cljs.core$macros.use.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.use.cljs$lang$applyTo = (function (seq21048){
var G__21049 = cljs.core.first(seq21048);
var seq21048__$1 = cljs.core.next(seq21048);
var G__21050 = cljs.core.first(seq21048__$1);
var seq21048__$2 = cljs.core.next(seq21048__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21049,G__21050,seq21048__$2);
}));

return null;
})()
;
(cljs.core$macros.use.cljs$lang$macro = true);

var ret__4785__auto___21816 = (function (){
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21817 = arguments.length;
var i__4737__auto___21818 = (0);
while(true){
if((i__4737__auto___21818 < len__4736__auto___21817)){
args__4742__auto__.push((arguments[i__4737__auto___21818]));

var G__21819 = (i__4737__auto___21818 + (1));
i__4737__auto___21818 = G__21819;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args),null,(1),null)))));
}));

(cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq21051){
var G__21052 = cljs.core.first(seq21051);
var seq21051__$1 = cljs.core.next(seq21051);
var G__21053 = cljs.core.first(seq21051__$1);
var seq21051__$2 = cljs.core.next(seq21051__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21052,G__21053,seq21051__$2);
}));

return null;
})()
;
(cljs.core$macros.use_macros.cljs$lang$macro = true);

var ret__4785__auto___21820 = (function (){
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21821 = arguments.length;
var i__4737__auto___21822 = (0);
while(true){
if((i__4737__auto___21822 < len__4736__auto___21821)){
args__4742__auto__.push((arguments[i__4737__auto___21822]));

var G__21823 = (i__4737__auto___21822 + (1));
i__4737__auto___21822 = G__21823;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists),null,(1),null)))));
}));

(cljs.core$macros.import$.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.import$.cljs$lang$applyTo = (function (seq21054){
var G__21055 = cljs.core.first(seq21054);
var seq21054__$1 = cljs.core.next(seq21054);
var G__21056 = cljs.core.first(seq21054__$1);
var seq21054__$2 = cljs.core.next(seq21054__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21055,G__21056,seq21054__$2);
}));

return null;
})()
;
(cljs.core$macros.import$.cljs$lang$macro = true);

var ret__4785__auto___21824 = (function (){
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21825 = arguments.length;
var i__4737__auto___21826 = (0);
while(true){
if((i__4737__auto___21826 < len__4736__auto___21825)){
args__4742__auto__.push((arguments[i__4737__auto___21826]));

var G__21827 = (i__4737__auto___21826 + (1));
i__4737__auto___21826 = G__21827;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args),null,(1),null)))));
}));

(cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq21057){
var G__21058 = cljs.core.first(seq21057);
var seq21057__$1 = cljs.core.next(seq21057);
var G__21059 = cljs.core.first(seq21057__$1);
var seq21057__$2 = cljs.core.next(seq21057__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21058,G__21059,seq21057__$2);
}));

return null;
})()
;
(cljs.core$macros.refer_clojure.cljs$lang$macro = true);

var ret__4785__auto___21828 = cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("goog","nodeGlobalRequire","goog/nodeGlobalRequire",163905703,null),null,(1),null)),(new cljs.core.List(null,f,null,(1),null)))));
});
(cljs.core$macros.load_file_STAR_.cljs$lang$macro = true);

var ret__4785__auto___21829 = /**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand-1 must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
if(cljs.core.seq_QMARK_(form)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.analyzer.macroexpand_1(_AMPERSAND_env,form),null,(1),null)))));
} else {
return form;
}
});
(cljs.core$macros.macroexpand_1.cljs$lang$macro = true);

var ret__4785__auto___21830 = /**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error(["Assert failed: ","Argument to macroexpand must be quoted","\n","(core/= (core/first quoted) (quote quote))"].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_(form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if((!((form__$1 === form_SINGLEQUOTE_)))){
var G__21831 = form_SINGLEQUOTE_;
var G__21832 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__21831;
form_SINGLEQUOTE_ = G__21832;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form_SINGLEQUOTE_,null,(1),null)))));
}
break;
}
} else {
return form;
}
});
(cljs.core$macros.macroexpand.cljs$lang$macro = true);

cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl))){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),cljs.core.ffirst(fdecl));
} else {
return false;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var G__21066 = arguments.length;
switch (G__21066) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
}));

(cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__21070,solo){
var vec__21071 = p__21070;
var seq__21072 = cljs.core.seq(vec__21071);
var first__21073 = cljs.core.first(seq__21072);
var seq__21072__$1 = cljs.core.next(seq__21072);
var arglist = first__21073;
var body = seq__21072__$1;
var method = vec__21071;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});
var get_delegate_prop = (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate())].join(''));
});
var param_bind = (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,param,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3122,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,49,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3122,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,54,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,restarg,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3123,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,51,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3123,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))], 0)))));
});
var apply_to = (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__21063__auto__","self__21063__auto__",-1357535429,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__21063__auto__","self__21063__auto__",-1357535429,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,get_delegate(),null,(1),null)),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,restarg,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,restarg,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","this-as","cljs.core/this-as",623378171,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__21064__auto__","self__21064__auto__",-1941197853,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"self__21064__auto__","self__21064__auto__",-1941197853,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,get_delegate(),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null),null,(1),null)),(new cljs.core.List(null,restarg,null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)))));
}
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,get_delegate_prop(),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.vec(sig),null,(1),null)),body))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(cljs.core.count(sig) - (1)),null,(1),null))], 0)))),null,(1),null)))))):null),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-inline-comment","cljs.core/js-inline-comment",1792529242,null),null,(1),null)),(new cljs.core.List(null," @this {Function} ",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(sym,cljs.core.dissoc,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,apply_to(),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3);

var ret__4785__auto___21834 = cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"len__21076__auto__","len__21076__auto__",2121759939,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",-1829423021,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"i__21077__auto__","i__21077__auto__",-1686059154,null),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__21077__auto__","i__21077__auto__",-1686059154,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"len__21076__auto__","len__21076__auto__",2121759939,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".push",".push",-1497267248,null),null,(1),null)),(new cljs.core.List(null,dest,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"i__21077__auto__","i__21077__auto__",-1686059154,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"i__21077__auto__","i__21077__auto__",-1686059154,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.copy_arguments.cljs$lang$macro = true);

cljs.core$macros.elide_implicit_macro_args = (function cljs$core$macros$elide_implicit_macro_args(arglists){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (arglist){
if(cljs.core.vector_QMARK_(arglist)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(arglist,(2));
} else {
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),arglist);
}
}),arglists);
});
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__21082,emit_var_QMARK_){
var vec__21084 = p__21082;
var vec__21087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21084,(0),null);
var seq__21088 = cljs.core.seq(vec__21087);
var first__21089 = cljs.core.first(seq__21088);
var seq__21088__$1 = cljs.core.next(seq__21088);
var arglist = first__21089;
var body = seq__21088__$1;
var method = vec__21087;
var fdecl = vec__21084;
var dest_args = (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var mfa = (function (){var G__21090 = c_1;
if(cljs.core.truth_(macro_QMARK_)){
return (G__21090 - (2));
} else {
return G__21090;
}
})();
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__21091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null);
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__21091);
} else {
return G__21091;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__21092 = (new cljs.core.List(null,arglist,null,(1),null));
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__21092);
} else {
return G__21092;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
var name__$1 = cljs.core.with_meta(name,meta__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args__21080__auto__","args__21080__auto__",1485206022,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","copy-arguments","cljs.core/copy-arguments",1735553785,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21080__auto__","args__21080__auto__",1485206022,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__21081__auto__","argseq__21081__auto__",790941802,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null),null,(1),null)),(new cljs.core.List(null,c_1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21080__auto__","args__21080__auto__",1485206022,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3185,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,55,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3185,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,75,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__21080__auto__","args__21080__auto__",1485206022,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,c_1,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args(c_1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__21081__auto__","argseq__21081__auto__",790941802,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(name__$1,method),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null))], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","unchecked-get","cljs.core/unchecked-get",-1271763170,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,n,null,(1),null))], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('')),null,(1),null)),dest_args(c)))),null,(1),null))], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(name__$1,p__21104){
var vec__21105 = p__21104;
var seq__21106 = cljs.core.seq(vec__21105);
var first__21107 = cljs.core.first(seq__21106);
var seq__21106__$1 = cljs.core.next(seq__21106);
var sig = first__21107;
var body = seq__21106__$1;
var method = vec__21105;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name__$1,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(name__$1,cljs.core.update,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),cljs.core.count(sig)], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(["-cljs$core$IFn$_invoke$arity$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count(sig))].join('')),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,method,null,(1),null))))),null,(1),null))], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var macro_QMARK_ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta);
var varsig_QMARK_ = (function (p1__21094_SHARP_){
return cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),p1__21094_SHARP_));
});
var map__21108 = cljs.core.group_by(varsig_QMARK_,arglists);
var map__21108__$1 = (((((!((map__21108 == null))))?(((((map__21108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21108):map__21108);
var sigs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,false);
var var_sigs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21108__$1,true);
var variadic_QMARK_ = (cljs.core.count(var_sigs) > (0));
var variadic_params = ((variadic_QMARK_)?(function (){var G__21110 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),"null"], null), null),cljs.core.first(var_sigs));
var G__21110__$1 = cljs.core.count(G__21110)
;
if(cljs.core.truth_(macro_QMARK_)){
return (G__21110__$1 - (2));
} else {
return G__21110__$1;
}
})():(0));
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(var_sigs)) - (2))], null)));
var mfa = (function (){var G__21111 = maxfa;
if(cljs.core.truth_(macro_QMARK_)){
return (G__21111 - (2));
} else {
return G__21111;
}
})();
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),variadic_QMARK_,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),mfa,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),(function (){var G__21112 = sigs;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__21112);
} else {
return G__21112;
}
})(),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var G__21113 = arglists;
if(cljs.core.truth_(macro_QMARK_)){
return cljs.core$macros.elide_implicit_macro_args(G__21113);
} else {
return G__21113;
}
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
var param_counts = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,arglists);
var name__$1 = cljs.core.with_meta(name,meta__$1);
if(((1) < cljs.core.count(var_sigs))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if((((variadic_params > (0))) && ((!((variadic_params === ((1) + mfa))))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts),param_counts)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","case","cljs.core/case",-1674122212,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__21095_SHARP_){
return fixed_arity(rname,p1__21095_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sigs], 0)),(new cljs.core.List(null,((variadic_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__21096__auto__","args-arr__21096__auto__",215610141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","copy-arguments","cljs.core/copy-arguments",1735553785,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__21096__auto__","args-arr__21096__auto__",215610141,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__21097__auto__","argseq__21097__auto__",1209137357,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"cljs/core$macros.cljc",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,3262,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,59,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,3262,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,79,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".slice",".slice",1874048374,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args-arr__21096__auto__","args-arr__21096__auto__",215610141,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,maxfa,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(0),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,rname,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null),null,(1),null)),dest_args(maxfa),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"argseq__21097__auto__","argseq__21097__auto__",1209137357,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(2),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"Invalid arity: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","alength","cljs.core/alength",-1012804190,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","js-arguments","cljs.core/js-arguments",464029257,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21098_SHARP_){
return fn_method(name__$1,p1__21098_SHARP_);
}),fdecl),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,maxfa,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,(cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,name__$1,null,(1),null))))):null),null,(1),null))], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?(new cljs.core.List(null,fdecl__$2,null,(1),null)):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(new cljs.core.List(null,cljs.core$macros.sigs(fdecl__$4),null,(1),null)),(2),null))], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4)){
return cljs.core$macros.multi_arity_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_())?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return (new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),(new cljs.core.List(null,cljs.core.with_meta(name,m__$4),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),fdecl__$4),null,(1),null)),(2),null)),(3),null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__21835__i = 0, G__21835__a = new Array(arguments.length -  3);
while (G__21835__i < G__21835__a.length) {G__21835__a[G__21835__i] = arguments[G__21835__i + 3]; ++G__21835__i;}
  fdecl = new cljs.core.IndexedSeq(G__21835__a,0,null);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__21836){
var _AMPERSAND_form = cljs.core.first(arglist__21836);
arglist__21836 = cljs.core.next(arglist__21836);
var _AMPERSAND_env = cljs.core.first(arglist__21836);
arglist__21836 = cljs.core.next(arglist__21836);
var name = cljs.core.first(arglist__21836);
var fdecl = cljs.core.rest(arglist__21836);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
(cljs.core$macros.defn.cljs$lang$macro = true);
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__4742__auto__ = [];
var len__4736__auto___21837 = arguments.length;
var i__4737__auto___21838 = (0);
while(true){
if((i__4737__auto___21838 < len__4736__auto___21837)){
args__4742__auto__.push((arguments[i__4737__auto___21838]));

var G__21839 = (i__4737__auto___21838 + (1));
i__4737__auto___21838 = G__21839;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (new cljs.core.List(null,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true),null,(1),null));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__21840 = cljs.core.cons(f,p);
var G__21841 = cljs.core.next(args__$1);
p = G__21840;
args__$1 = G__21841;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__21842 = cljs.core.cons(f,p);
var G__21843 = cljs.core.next(args__$1);
p = G__21842;
args__$1 = G__21843;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__21844 = cljs.core.next(fd);
fd = G__21844;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__21845 = cljs.core.next(fd);
fd = G__21845;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?(new cljs.core.List(null,fdecl,null,(1),null)):fdecl);
var add_implicit_args = (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});
var add_args = (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__21846 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__21847 = cljs.core.next(ds);
acc = G__21846;
ds = G__21847;
continue;
}
}
break;
}
});
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__21848 = cljs.core.next(p);
var G__21849 = cljs.core.cons(cljs.core.first(p),d);
p = G__21848;
d = G__21849;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"ret__21115__auto__","ret__21115__auto__",-1912082014,null),null,(1),null)),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol("cljs.core","defn","cljs.core/defn",-1606493717,null),decl),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,true,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"ret__21115__auto__","ret__21115__auto__",-1912082014,null),null,(1),null))], 0))));
}));

(cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq21116){
var G__21117 = cljs.core.first(seq21116);
var seq21116__$1 = cljs.core.next(seq21116);
var G__21118 = cljs.core.first(seq21116__$1);
var seq21116__$2 = cljs.core.next(seq21116__$1);
var G__21119 = cljs.core.first(seq21116__$2);
var seq21116__$3 = cljs.core.next(seq21116__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21117,G__21118,G__21119,seq21116__$3);
}));

(cljs.core$macros.defmacro.cljs$lang$macro = true);
var ret__4785__auto___21850 = /**
 * Returns the var to which a symbol will be resolved in the namespace else nil.
 */
cljs.core$macros.resolve = (function cljs$core$macros$resolve(_AMPERSAND_form,_AMPERSAND_env,quoted_sym){
if(((cljs.core.seq_QMARK_(quoted_sym)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(quoted_sym))))){
} else {
throw (new Error(["Assert failed: ","Argument to resolve must be a quoted symbol","\n","(core/and (seq? quoted-sym) (= (quote quote) (first quoted-sym)))"].join('')));
}

var sym = cljs.core.second(quoted_sym);
var env = _AMPERSAND_env;
var vec__21122 = (function (){try{var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [var$,cljs.analyzer.var_meta.cljs$core$IFn$_invoke$arity$1(var$)], null);
}catch (e21125){var e = e21125;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym),null], null);
}})();
var var$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(0),null);
var meta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21122,(1),null);
var resolved = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","exists?","cljs.core/exists?",1852387968,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","Var.","cljs.core/Var.",-242685277,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,resolved,null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,resolved,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,meta,null,(1),null))], 0)))),null,(1),null))], 0))));
});
(cljs.core$macros.resolve.cljs$lang$macro = true);


//# sourceMappingURL=cljs.core$macros.js.map
