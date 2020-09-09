// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.async$macros");
var ret__12698__auto___876 = (function (){
/**
 * Asynchronously executes the body, returning immediately to the
 *   calling thread. Additionally, any visible calls to <!, >! and alt!/alts!
 *   channel operations within the body will block (if necessary) by
 *   'parking' the calling thread rather than tying up an OS thread (or
 *   the only JS thread when in ClojureScript). Upon completion of the
 *   operation, the body will be resumed.
 * 
 *   Returns a channel which will receive the result of the body when
 *   completed
 */
cljs.core.async$macros.go = (function cljs$core$async$macros$go(var_args){
var args__12669__auto__ = [];
var len__12666__auto___877 = arguments.length;
var i__12667__auto___878 = (0);
while(true){
if((i__12667__auto___878 < len__12666__auto___877)){
args__12669__auto__.push((arguments[i__12667__auto___878]));

var G__879 = (i__12667__auto___878 + (1));
i__12667__auto___878 = G__879;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return cljs.core.async$macros.go.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(cljs.core.async$macros.go.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"c__9__auto__","c__9__auto__",(-1025866364),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","chan","cljs.core.async/chan",(589627473),null),null,(1),null)),(new cljs.core.List(null,(1),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.dispatch","run","cljs.core.async.impl.dispatch/run",(1404881359),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__10__auto__","f__10__auto__",(-349493735),null),null,(1),null)),(new cljs.core.List(null,cljs.core.async.impl.ioc_macros_runtime.state_machine.call(null,body,(1),_AMPERSAND_env,cljs.core.async.impl.ioc_macros_runtime.async_custom_terminators),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"state__11__auto__","state__11__auto__",(-191346364),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",(1488366311),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"f__10__auto__","f__10__auto__",(-349493735),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-macros","aset-all!","cljs.core.async.impl.ioc-macros/aset-all!",(2072147987),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","USER-START-IDX","cljs.core.async.impl.ioc-helpers/USER-START-IDX",(1543304914),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__9__auto__","c__9__auto__",(-1025866364),null),null,(1),null)))),null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async.impl.ioc-helpers","run-state-machine-wrapped","cljs.core.async.impl.ioc-helpers/run-state-machine-wrapped",(-1978728889),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"state__11__auto__","state__11__auto__",(-191346364),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"c__9__auto__","c__9__auto__",(-1025866364),null),null,(1),null))));
}));

(cljs.core.async$macros.go.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core.async$macros.go.cljs$lang$applyTo = (function (seq873){
var G__874 = cljs.core.first.call(null,seq873);
var seq873__$1 = cljs.core.next.call(null,seq873);
var G__875 = cljs.core.first.call(null,seq873__$1);
var seq873__$2 = cljs.core.next.call(null,seq873__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__874,G__875,seq873__$2);
}));

return null;
})()
;
(cljs.core.async$macros.go.cljs$lang$macro = true);

cljs.core.async$macros.do_alt = (function cljs$core$async$macros$do_alt(alts,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error(["Assert failed: ","unbalanced clauses","\n","(even? (count clauses))"].join('')));
}

var clauses__$1 = cljs.core.partition.call(null,(2),clauses);
var opt_QMARK_ = (function (p1__12_SHARP_){
return (cljs.core.first.call(null,p1__12_SHARP_) instanceof cljs.core.Keyword);
});
var opts = cljs.core.filter.call(null,opt_QMARK_,clauses__$1);
var clauses__$2 = cljs.core.remove.call(null,opt_QMARK_,clauses__$1);
var vec__880 = cljs.core.reduce.call(null,(function (p__883,p__884){
var vec__885 = p__883;
var clauses__$3 = cljs.core.nth.call(null,vec__885,(0),null);
var bindings = cljs.core.nth.call(null,vec__885,(1),null);
var vec__888 = p__884;
var ports = cljs.core.nth.call(null,vec__888,(0),null);
var expr = cljs.core.nth.call(null,vec__888,(1),null);
var ports__$1 = ((cljs.core.vector_QMARK_.call(null,ports))?ports:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports], null));
var vec__891 = cljs.core.reduce.call(null,(function (p__894,port){
var vec__895 = p__894;
var ports__$2 = cljs.core.nth.call(null,vec__895,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__895,(1),null);
if(cljs.core.vector_QMARK_.call(null,port)){
var vec__898 = port;
var port__$1 = cljs.core.nth.call(null,vec__898,(0),null);
var val = cljs.core.nth.call(null,vec__898,(1),null);
var gp = cljs.core.gensym.call(null);
var gv = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,gv], null)),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gv,val], null))], null);
} else {
var gp = cljs.core.gensym.call(null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,ports__$2,gp),cljs.core.conj.call(null,bindings__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gp,port], null))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,bindings], null),ports__$1);
var ports__$2 = cljs.core.nth.call(null,vec__891,(0),null);
var bindings__$1 = cljs.core.nth.call(null,vec__891,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.call(null,clauses__$3,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ports__$2,expr], null)),bindings__$1], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),clauses__$2);
var clauses__$3 = cljs.core.nth.call(null,vec__880,(0),null);
var bindings = cljs.core.nth.call(null,vec__880,(1),null);
var gch = cljs.core.gensym.call(null,"ch");
var gret = cljs.core.gensym.call(null,"ret");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,cljs.core.identity,bindings),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"val__13__auto__","val__13__auto__",(-39114765),null),null,(1),null)),(new cljs.core.List(null,gch,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"as","as",(1148689641)),null,(1),null)),(new cljs.core.List(null,gret,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,alts,null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,cljs.core.first,clauses__$3))))),null,(1),null)),cljs.core.apply.call(null,cljs.core.concat,opts))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",(2005388338),null),null,(1),null)),cljs.core.mapcat.call(null,(function (p__901){
var vec__902 = p__901;
var ports = cljs.core.nth.call(null,vec__902,(0),null);
var expr = cljs.core.nth.call(null,vec__902,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","or","cljs.core/or",(1201033885),null),null,(1),null)),cljs.core.map.call(null,(function (port){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,gch,null,(1),null)),(new cljs.core.List(null,((cljs.core.vector_QMARK_.call(null,port))?cljs.core.first.call(null,port):port),null,(1),null))));
}),ports))),((((cljs.core.seq_QMARK_.call(null,expr)) && (cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,expr)))))?cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.first.call(null,expr),null,(1),null)),(new cljs.core.List(null,gret,null,(1),null))))),null,(1),null)),cljs.core.rest.call(null,expr))):expr)], null);
}),clauses__$3),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",(-1891498332),null),null,(1),null)),(new cljs.core.List(null,gch,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",(-1987822328)),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"val__13__auto__","val__13__auto__",(-39114765),null),null,(1),null)))),null,(1),null))));
});
var ret__12698__auto___908 = (function (){
/**
 * Makes a single choice between one of several channel operations,
 *   as if by alts!, returning the value of the result expr corresponding
 *   to the operation completed. Must be called inside a (go ...) block.
 * 
 *   Each clause takes the form of:
 * 
 *   channel-op[s] result-expr
 * 
 *   where channel-ops is one of:
 * 
 *   take-port - a single port to take
 *   [take-port | [put-port put-val] ...] - a vector of ports as per alts!
 *   :default | :priority - an option for alts!
 * 
 *   and result-expr is either a list beginning with a vector, whereupon that
 *   vector will be treated as a binding for the [val port] return of the
 *   operation, else any other expression.
 * 
 *   (alt!
 *  [c t] ([val ch] (foo ch val))
 *  x ([v] v)
 *  [[out val]] :wrote
 *  :default 42)
 * 
 *   Each option may appear at most once. The choice and parking
 *   characteristics are those of alts!.
 */
cljs.core.async$macros.alt_BANG_ = (function cljs$core$async$macros$alt_BANG_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___909 = arguments.length;
var i__12667__auto___910 = (0);
while(true){
if((i__12667__auto___910 < len__12666__auto___909)){
args__12669__auto__.push((arguments[i__12667__auto___910]));

var G__911 = (i__12667__auto___910 + (1));
i__12667__auto___910 = G__911;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return cljs.core.async$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(cljs.core.async$macros.alt_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
return cljs.core.async$macros.do_alt.call(null,new cljs.core.Symbol(null,"alts!","alts!",(104119866),null),clauses);
}));

(cljs.core.async$macros.alt_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(cljs.core.async$macros.alt_BANG_.cljs$lang$applyTo = (function (seq905){
var G__906 = cljs.core.first.call(null,seq905);
var seq905__$1 = cljs.core.next.call(null,seq905);
var G__907 = cljs.core.first.call(null,seq905__$1);
var seq905__$2 = cljs.core.next.call(null,seq905__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__906,G__907,seq905__$2);
}));

return null;
})()
;
(cljs.core.async$macros.alt_BANG_.cljs$lang$macro = true);

var ret__12698__auto___916 = (function (){
/**
 * Like (go (loop ...))
 */
cljs.core.async$macros.go_loop = (function cljs$core$async$macros$go_loop(var_args){
var args__12669__auto__ = [];
var len__12666__auto___917 = arguments.length;
var i__12667__auto___918 = (0);
while(true){
if((i__12667__auto___918 < len__12666__auto___917)){
args__12669__auto__.push((arguments[i__12667__auto___918]));

var G__919 = (i__12667__auto___918 + (1));
i__12667__auto___918 = G__919;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.async$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.async$macros.go_loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core.async","go","cljs.core.async/go",(-2141995263),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","loop","cljs.core/loop",(-1829423021),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body)),null,(1),null))));
}));

(cljs.core.async$macros.go_loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async$macros.go_loop.cljs$lang$applyTo = (function (seq912){
var G__913 = cljs.core.first.call(null,seq912);
var seq912__$1 = cljs.core.next.call(null,seq912);
var G__914 = cljs.core.first.call(null,seq912__$1);
var seq912__$2 = cljs.core.next.call(null,seq912__$1);
var G__915 = cljs.core.first.call(null,seq912__$2);
var seq912__$3 = cljs.core.next.call(null,seq912__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__913,G__914,G__915,seq912__$3);
}));

return null;
})()
;
(cljs.core.async$macros.go_loop.cljs$lang$macro = true);


//# sourceURL=cljs/core/async$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL2FzeW5jJG1hY3Jvcy5qcyIsInNvdXJjZXMiOlsiYXN5bmMkbWFjcm9zLmNsanMiXSwibGluZUNvdW50IjoyMjcsIm1hcHBpbmdzIjoiO0FBWUEsSUFBQUEseUJBQUE7QUFBQTs7Ozs7Ozs7Ozs7NEJBQUEsb0NBQUFDLGhFQUFVSztBQUFWLEFBQUEsSUFBQUosc0JBQUE7QUFBQSxBQUFBLElBQUFDLHlCQUFBLEFBQUE7QUFBQSxBQUFBLElBQUFDLHVCQUFBOztBQUFBLEFBQUEsR0FBQSxDQUFBQSx1QkFBQUQ7QUFBQSxBQUFBLEFBQUFELHlCQUFBLENBQUEsVUFBQUU7O0FBQUEsYUFBQSxDQUFBQSx1QkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQUMsd0JBQUEsRUFBQSxDQUFBLE1BQUEsQUFBQUgsNkJBQUEsQUFBQSwwQkFBQSxBQUFBQSwwQkFBQSxLQUFBLElBQUEsT0FBQSwvREFzbEdzRHlFO0FBdGxHdEQsQUFBQSxPQUFBckUsK0RBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUFEOzs7QUFBQSxBQUFBLENBQUEsaUVBQUEsV0FBQUUsZ0JBQUFDLDVGQUFVRiwyR0FVTFc7QUFWTCxBQUFBLE9BQUFSLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLDBFQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBQyx3QkFBQSxBQUFBSCw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSw0RUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUEsdUZBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLElBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLGtIQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSx5RUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUMsd0JBQUEsQUFBQUgsNkJBQUEsQUFBQUMsOEJBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLDBFQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBQyx3QkFBQSxBQUFBSCw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSw2RUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLCtKQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBLHFGQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSx3RUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUEsNkVBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLGtJQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBLDhJQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBLDRFQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxVQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSxxS0FBQSxLQUFBLElBQUEsT0FBQSxL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c19fMTI2NjlfX2F1dG9fXyIsImxlbl9fMTI2NjZfX2F1dG9fXyIsImlfXzEyNjY3X19hdXRvX18iLCJhcmdzZXFfXzEyNjcwX19hdXRvX18iLCJjbGpzLmNvcmUuYXN5bmMkbWFjcm9zL2dvIiwiJmZvcm0iLCImZW52IiwiY2xqcy5jb3JlL3NlcXVlbmNlIiwiY2xqcy5jb3JlL2NvbmNhdCIsImNsanMuY29yZS9MaXN0IiwiY2xqcy5jb3JlL3ZlYyIsInNlcTg3MyIsIkdfXzg3NCIsIkdfXzg3NSIsInNlbGZfXzEyNjU4X19hdXRvX18iLCJib2R5IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLW1hY3Jvcy1ydW50aW1lL3N0YXRlLW1hY2hpbmUiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtbWFjcm9zLXJ1bnRpbWUvYXN5bmMtY3VzdG9tLXRlcm1pbmF0b3JzIiwiY2xqcy5jb3JlLmFzeW5jJG1hY3Jvcy9kby1hbHQiLCJhbHRzIiwiY2xhdXNlcyIsImpzL0Vycm9yIiwiY2xqcy5jb3JlL2V2ZW4/IiwiY2xqcy5jb3JlL2NvdW50IiwicDFfXzEyIyIsInZlY19fODgwIiwiY2xqcy5jb3JlL250aCIsImNsanMuY29yZS9wYXJ0aXRpb24iLCJvcHQ/IiwiY2xqcy5jb3JlL0tleXdvcmQiLCJjbGpzLmNvcmUvZmlyc3QiLCJvcHRzIiwiY2xqcy5jb3JlL2ZpbHRlciIsImNsanMuY29yZS9yZW1vdmUiLCJiaW5kaW5ncyIsImNsanMuY29yZS9yZWR1Y2UiLCJwX184ODMiLCJwX184ODQiLCJ2ZWNfXzg4NSIsInZlY19fODg4IiwicG9ydHMiLCJleHByIiwidmVjX184OTEiLCJjbGpzLmNvcmUvdmVjdG9yPyIsInBfXzg5NCIsInZlY19fODk1IiwicG9ydCIsInZlY19fODk4IiwidmFsIiwiZ3AiLCJjbGpzLmNvcmUvZ2Vuc3ltIiwiZ3YiLCJjbGpzLmNvcmUvY29uaiIsImdjaCIsImdyZXQiLCJjbGpzLmNvcmUvbWFwY2F0IiwiY2xqcy5jb3JlL2lkZW50aXR5IiwiY2xqcy5jb3JlL2FwcGx5IiwiY2xqcy5jb3JlL21hcCIsInBfXzkwMSIsInZlY19fOTAyIiwiY2xqcy5jb3JlL3NlcT8iLCJjbGpzLmNvcmUvcmVzdCIsImNsanMuY29yZS5hc3luYyRtYWNyb3MvYWx0ISIsInNlcTkwNSIsIkdfXzkwNiIsIkdfXzkwNyIsImNsanMuY29yZS5hc3luYyRtYWNyb3MvZ28tbG9vcCIsInNlcTkxMiIsIkdfXzkxMyIsIkdfXzkxNCIsIkdfXzkxNSIsImNsanMuY29yZS9uZXh0IiwiY2xqcy5jb3JlL0luZGV4ZWRTZXEiXSwic291cmNlc0NvbnRlbnQiOlsiOzsgICBDb3B5cmlnaHQgKGMpIFJpY2ggSGlja2V5IGFuZCBjb250cmlidXRvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG47OyAgIFRoZSB1c2UgYW5kIGRpc3RyaWJ1dGlvbiB0ZXJtcyBmb3IgdGhpcyBzb2Z0d2FyZSBhcmUgY292ZXJlZCBieSB0aGVcbjs7ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47OyAgIHdoaWNoIGNhbiBiZSBmb3VuZCBpbiB0aGUgZmlsZSBlcGwtdjEwLmh0bWwgYXQgdGhlIHJvb3Qgb2YgdGhpcyBkaXN0cmlidXRpb24uXG47OyAgIEJ5IHVzaW5nIHRoaXMgc29mdHdhcmUgaW4gYW55IGZhc2hpb24sIHlvdSBhcmUgYWdyZWVpbmcgdG8gYmUgYm91bmQgYnlcbjs7ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjs7ICAgWW91IG11c3Qgbm90IHJlbW92ZSB0aGlzIG5vdGljZSwgb3IgYW55IG90aGVyLCBmcm9tIHRoaXMgc29mdHdhcmUuXG5cbihucyBjbGpzLmNvcmUuYXN5bmNcbiAgKDpyZXF1aXJlIFtjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtbWFjcm9zLXJ1bnRpbWUgOnJlZmVyIFthc3luYy1jdXN0b20tdGVybWluYXRvcnMgc3RhdGUtbWFjaGluZV1dKVxuICAoIz8oOmNsaiA6cmVxdWlyZSA6Y2xqcyA6cmVxdWlyZS1tYWNyb3MpIFtjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtbWFjcm9zIDpyZWZlciBbYXNldC1hbGwhXV0pKVxuXG4oZGVmbWFjcm8gZ29cbiAgXCJBc3luY2hyb25vdXNseSBleGVjdXRlcyB0aGUgYm9keSwgcmV0dXJuaW5nIGltbWVkaWF0ZWx5IHRvIHRoZVxuICBjYWxsaW5nIHRocmVhZC4gQWRkaXRpb25hbGx5LCBhbnkgdmlzaWJsZSBjYWxscyB0byA8ISwgPiEgYW5kIGFsdCEvYWx0cyFcbiAgY2hhbm5lbCBvcGVyYXRpb25zIHdpdGhpbiB0aGUgYm9keSB3aWxsIGJsb2NrIChpZiBuZWNlc3NhcnkpIGJ5XG4gICdwYXJraW5nJyB0aGUgY2FsbGluZyB0aHJlYWQgcmF0aGVyIHRoYW4gdHlpbmcgdXAgYW4gT1MgdGhyZWFkIChvclxuICB0aGUgb25seSBKUyB0aHJlYWQgd2hlbiBpbiBDbG9qdXJlU2NyaXB0KS4gVXBvbiBjb21wbGV0aW9uIG9mIHRoZVxuICBvcGVyYXRpb24sIHRoZSBib2R5IHdpbGwgYmUgcmVzdW1lZC5cblxuICBSZXR1cm5zIGEgY2hhbm5lbCB3aGljaCB3aWxsIHJlY2VpdmUgdGhlIHJlc3VsdCBvZiB0aGUgYm9keSB3aGVuXG4gIGNvbXBsZXRlZFwiXG4gIFsmIGJvZHldXG4gIGAobGV0IFtjIyAoY2xqcy5jb3JlLmFzeW5jL2NoYW4gMSldXG4gICAgIChjbGpzLmNvcmUuYXN5bmMuaW1wbC5kaXNwYXRjaC9ydW5cbiAgICAgIChmbiBbXVxuICAgICAgICAobGV0IFtmIyB+KHN0YXRlLW1hY2hpbmUgYm9keSAxICZlbnYgYXN5bmMtY3VzdG9tLXRlcm1pbmF0b3JzKVxuICAgICAgICAgICAgICBzdGF0ZSMgKC0+IChmIylcbiAgICAgICAgICAgICAgICAgICAgICAgICAoY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLW1hY3Jvcy9hc2V0LWFsbCEgY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLWhlbHBlcnMvVVNFUi1TVEFSVC1JRFggYyMpKV1cbiAgICAgICAgICAoY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLWhlbHBlcnMvcnVuLXN0YXRlLW1hY2hpbmUtd3JhcHBlZCBzdGF0ZSMpKSkpXG4gICAgIGMjKSlcblxuXG4oZGVmbiBkby1hbHQgW2FsdHMgY2xhdXNlc11cbiAgKGFzc2VydCAoZXZlbj8gKGNvdW50IGNsYXVzZXMpKSBcInVuYmFsYW5jZWQgY2xhdXNlc1wiKVxuICAobGV0IFtjbGF1c2VzIChwYXJ0aXRpb24gMiBjbGF1c2VzKVxuICAgICAgICBvcHQ/ICMoa2V5d29yZD8gKGZpcnN0ICUpKVxuICAgICAgICBvcHRzIChmaWx0ZXIgb3B0PyBjbGF1c2VzKVxuICAgICAgICBjbGF1c2VzIChyZW1vdmUgb3B0PyBjbGF1c2VzKVxuICAgICAgICBbY2xhdXNlcyBiaW5kaW5nc11cbiAgICAgICAgKHJlZHVjZVxuICAgICAgICAgKGZuIFtbY2xhdXNlcyBiaW5kaW5nc10gW3BvcnRzIGV4cHJdXVxuICAgICAgICAgICAobGV0IFtwb3J0cyAoaWYgKHZlY3Rvcj8gcG9ydHMpIHBvcnRzIFtwb3J0c10pXG4gICAgICAgICAgICAgICAgIFtwb3J0cyBiaW5kaW5nc11cbiAgICAgICAgICAgICAgICAgKHJlZHVjZVxuICAgICAgICAgICAgICAgICAgKGZuIFtbcG9ydHMgYmluZGluZ3NdIHBvcnRdXG4gICAgICAgICAgICAgICAgICAgIChpZiAodmVjdG9yPyBwb3J0KVxuICAgICAgICAgICAgICAgICAgICAgIChsZXQgW1twb3J0IHZhbF0gcG9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdwIChnZW5zeW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3YgKGdlbnN5bSldXG4gICAgICAgICAgICAgICAgICAgICAgICBbKGNvbmogcG9ydHMgW2dwIGd2XSkgKGNvbmogYmluZGluZ3MgW2dwIHBvcnRdIFtndiB2YWxdKV0pXG4gICAgICAgICAgICAgICAgICAgICAgKGxldCBbZ3AgKGdlbnN5bSldXG4gICAgICAgICAgICAgICAgICAgICAgICBbKGNvbmogcG9ydHMgZ3ApIChjb25qIGJpbmRpbmdzIFtncCBwb3J0XSldKSkpXG4gICAgICAgICAgICAgICAgICBbW10gYmluZGluZ3NdIHBvcnRzKV1cbiAgICAgICAgICAgICBbKGNvbmogY2xhdXNlcyBbcG9ydHMgZXhwcl0pIGJpbmRpbmdzXSkpXG4gICAgICAgICBbW10gW11dIGNsYXVzZXMpXG4gICAgICAgIGdjaCAoZ2Vuc3ltIFwiY2hcIilcbiAgICAgICAgZ3JldCAoZ2Vuc3ltIFwicmV0XCIpXVxuICAgIGAobGV0IFt+QChtYXBjYXQgaWRlbnRpdHkgYmluZGluZ3MpXG4gICAgICAgICAgIFt2YWwjIH5nY2ggOmFzIH5ncmV0XSAofmFsdHMgW35AKGFwcGx5IGNvbmNhdCAobWFwIGZpcnN0IGNsYXVzZXMpKV0gfkAoYXBwbHkgY29uY2F0IG9wdHMpKV1cbiAgICAgICAoY29uZFxuICAgICAgICB+QChtYXBjYXQgKGZuIFtbcG9ydHMgZXhwcl1dXG4gICAgICAgICAgICAgICAgICAgIFtgKG9yIH5AKG1hcCAoZm4gW3BvcnRdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAoPSB+Z2NoIH4oaWYgKHZlY3Rvcj8gcG9ydCkgKGZpcnN0IHBvcnQpIHBvcnQpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcnRzKSlcbiAgICAgICAgICAgICAgICAgICAgIChpZiAoYW5kIChzZXE/IGV4cHIpICh2ZWN0b3I/IChmaXJzdCBleHByKSkpXG4gICAgICAgICAgICAgICAgICAgICAgIGAobGV0IFt+KGZpcnN0IGV4cHIpIH5ncmV0XSB+QChyZXN0IGV4cHIpKVxuICAgICAgICAgICAgICAgICAgICAgICBleHByKV0pXG4gICAgICAgICAgICAgICAgICBjbGF1c2VzKVxuICAgICAgICAoPSB+Z2NoIDpkZWZhdWx0KSB2YWwjKSkpKVxuXG4oZGVmbWFjcm8gYWx0IVxuICBcIk1ha2VzIGEgc2luZ2xlIGNob2ljZSBiZXR3ZWVuIG9uZSBvZiBzZXZlcmFsIGNoYW5uZWwgb3BlcmF0aW9ucyxcbiAgYXMgaWYgYnkgYWx0cyEsIHJldHVybmluZyB0aGUgdmFsdWUgb2YgdGhlIHJlc3VsdCBleHByIGNvcnJlc3BvbmRpbmdcbiAgdG8gdGhlIG9wZXJhdGlvbiBjb21wbGV0ZWQuIE11c3QgYmUgY2FsbGVkIGluc2lkZSBhIChnbyAuLi4pIGJsb2NrLlxuXG4gIEVhY2ggY2xhdXNlIHRha2VzIHRoZSBmb3JtIG9mOlxuXG4gIGNoYW5uZWwtb3Bbc10gcmVzdWx0LWV4cHJcblxuICB3aGVyZSBjaGFubmVsLW9wcyBpcyBvbmUgb2Y6XG5cbiAgdGFrZS1wb3J0IC0gYSBzaW5nbGUgcG9ydCB0byB0YWtlXG4gIFt0YWtlLXBvcnQgfCBbcHV0LXBvcnQgcHV0LXZhbF0gLi4uXSAtIGEgdmVjdG9yIG9mIHBvcnRzIGFzIHBlciBhbHRzIVxuICA6ZGVmYXVsdCB8IDpwcmlvcml0eSAtIGFuIG9wdGlvbiBmb3IgYWx0cyFcblxuICBhbmQgcmVzdWx0LWV4cHIgaXMgZWl0aGVyIGEgbGlzdCBiZWdpbm5pbmcgd2l0aCBhIHZlY3Rvciwgd2hlcmV1cG9uIHRoYXRcbiAgdmVjdG9yIHdpbGwgYmUgdHJlYXRlZCBhcyBhIGJpbmRpbmcgZm9yIHRoZSBbdmFsIHBvcnRdIHJldHVybiBvZiB0aGVcbiAgb3BlcmF0aW9uLCBlbHNlIGFueSBvdGhlciBleHByZXNzaW9uLlxuXG4gIChhbHQhXG4gICAgW2MgdF0gKFt2YWwgY2hdIChmb28gY2ggdmFsKSlcbiAgICB4IChbdl0gdilcbiAgICBbW291dCB2YWxdXSA6d3JvdGVcbiAgICA6ZGVmYXVsdCA0MilcblxuICBFYWNoIG9wdGlvbiBtYXkgYXBwZWFyIGF0IG1vc3Qgb25jZS4gVGhlIGNob2ljZSBhbmQgcGFya2luZ1xuICBjaGFyYWN0ZXJpc3RpY3MgYXJlIHRob3NlIG9mIGFsdHMhLlwiXG5cbiAgWyYgY2xhdXNlc11cbiAgKGRvLWFsdCAnYWx0cyEgY2xhdXNlcykpXG5cblxuKGRlZm1hY3JvIGdvLWxvb3BcbiAgXCJMaWtlIChnbyAobG9vcCAuLi4pKVwiXG4gIFtiaW5kaW5ncyAmIGJvZHldXG4gIGAoZ28gKGxvb3AgfmJpbmRpbmdzIH5AYm9keSkpKVxuIl19