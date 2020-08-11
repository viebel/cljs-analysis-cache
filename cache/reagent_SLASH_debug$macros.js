// Compiled by ClojureScript 1.10.597
goog.provide("reagent.debug$macros");
var ret__12698__auto___25 = (function (){
/**
 * Print with console.log, if it exists.
 */
reagent.debug$macros.log = (function reagent$debug$macros$log(var_args){
var args__12669__auto__ = [];
var len__12666__auto___26 = arguments.length;
var i__12667__auto___27 = (0);
while(true){
if((i__12667__auto___27 < len__12666__auto___26)){
args__12669__auto__.push((arguments[i__12667__auto___27]));

var G__28 = (i__12667__auto___27 + (1));
i__12667__auto___27 = G__28;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.debug$macros.log.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",(-1792886083),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".log",".log",(565247729),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",(-1426368245),null),null,(1),null)),forms)),null,(1),null))));
}));

(reagent.debug$macros.log.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.log.cljs$lang$applyTo = (function (seq22){
var G__23 = cljs.core.first.call(null,seq22);
var seq22__$1 = cljs.core.next.call(null,seq22);
var G__24 = cljs.core.first.call(null,seq22__$1);
var seq22__$2 = cljs.core.next.call(null,seq22__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23,G__24,seq22__$2);
}));

return null;
})()
;
(reagent.debug$macros.log.cljs$lang$macro = true);

var ret__12698__auto___32 = (function (){
/**
 * Print with console.warn.
 */
reagent.debug$macros.warn = (function reagent$debug$macros$warn(var_args){
var args__12669__auto__ = [];
var len__12666__auto___33 = arguments.length;
var i__12667__auto___34 = (0);
while(true){
if((i__12667__auto___34 < len__12666__auto___33)){
args__12669__auto__.push((arguments[i__12667__auto___34]));

var G__35 = (i__12667__auto___34 + (1));
i__12667__auto___34 = G__35;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.debug$macros.warn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",(-1792886083),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".warn",".warn",(-2099751158),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",(478501764),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",(-179485171),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",(-1426368245),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),(new cljs.core.List(null,"Warning: ",null,(1),null)),forms)),null,(1),null)))),null,(1),null))));
} else {
return null;
}
}));

(reagent.debug$macros.warn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.warn.cljs$lang$applyTo = (function (seq29){
var G__30 = cljs.core.first.call(null,seq29);
var seq29__$1 = cljs.core.next.call(null,seq29);
var G__31 = cljs.core.first.call(null,seq29__$1);
var seq29__$2 = cljs.core.next.call(null,seq29__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30,G__31,seq29__$2);
}));

return null;
})()
;
(reagent.debug$macros.warn.cljs$lang$macro = true);

var ret__12698__auto___40 = (function (){
reagent.debug$macros.warn_unless = (function reagent$debug$macros$warn_unless(var_args){
var args__12669__auto__ = [];
var len__12666__auto___41 = arguments.length;
var i__12667__auto___42 = (0);
while(true){
if((i__12667__auto___42 < len__12666__auto___41)){
args__12669__auto__.push((arguments[i__12667__auto___42]));

var G__43 = (i__12667__auto___42 + (1));
i__12667__auto___42 = G__43;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(reagent.debug$macros.warn_unless.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,cond,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",(100665144),null),null,(1),null)),(new cljs.core.List(null,cond,null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","warn","reagent.debug/warn",(-503321706),null),null,(1),null)),forms)),null,(1),null))));
} else {
return null;
}
}));

(reagent.debug$macros.warn_unless.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reagent.debug$macros.warn_unless.cljs$lang$applyTo = (function (seq36){
var G__37 = cljs.core.first.call(null,seq36);
var seq36__$1 = cljs.core.next.call(null,seq36);
var G__38 = cljs.core.first.call(null,seq36__$1);
var seq36__$2 = cljs.core.next.call(null,seq36__$1);
var G__39 = cljs.core.first.call(null,seq36__$2);
var seq36__$3 = cljs.core.next.call(null,seq36__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37,G__38,G__39,seq36__$3);
}));

return null;
})()
;
(reagent.debug$macros.warn_unless.cljs$lang$macro = true);

var ret__12698__auto___47 = (function (){
/**
 * Print with console.error.
 */
reagent.debug$macros.error = (function reagent$debug$macros$error(var_args){
var args__12669__auto__ = [];
var len__12666__auto___48 = arguments.length;
var i__12667__auto___49 = (0);
while(true){
if((i__12667__auto___49 < len__12666__auto___48)){
args__12669__auto__.push((arguments[i__12667__auto___49]));

var G__50 = (i__12667__auto___49 + (1));
i__12667__auto___49 = G__50;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.debug$macros.error.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","when","cljs.core/when",(120293186),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.has-console","reagent.debug.has-console",(-1792886083),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,".error",".error",(1756007195),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",(1181717262),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.tracking","reagent.debug.tracking",(478501764),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"reagent.debug.track-console","reagent.debug.track-console",(-179485171),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","console","js/console",(-1426368245),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),forms)),null,(1),null)))),null,(1),null))));
} else {
return null;
}
}));

(reagent.debug$macros.error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.error.cljs$lang$applyTo = (function (seq44){
var G__45 = cljs.core.first.call(null,seq44);
var seq44__$1 = cljs.core.next.call(null,seq44);
var G__46 = cljs.core.first.call(null,seq44__$1);
var seq44__$2 = cljs.core.next.call(null,seq44__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45,G__46,seq44__$2);
}));

return null;
})()
;
(reagent.debug$macros.error.cljs$lang$macro = true);

var ret__12698__auto___54 = (function (){
/**
 * Print string with console.log
 */
reagent.debug$macros.println = (function reagent$debug$macros$println(var_args){
var args__12669__auto__ = [];
var len__12666__auto___55 = arguments.length;
var i__12667__auto___56 = (0);
while(true){
if((i__12667__auto___56 < len__12666__auto___55)){
args__12669__auto__.push((arguments[i__12667__auto___56]));

var G__57 = (i__12667__auto___56 + (1));
i__12667__auto___56 = G__57;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.debug$macros.println.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",(-528007284),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),forms)),null,(1),null))));
}));

(reagent.debug$macros.println.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.println.cljs$lang$applyTo = (function (seq51){
var G__52 = cljs.core.first.call(null,seq51);
var seq51__$1 = cljs.core.next.call(null,seq51);
var G__53 = cljs.core.first.call(null,seq51__$1);
var seq51__$2 = cljs.core.next.call(null,seq51__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52,G__53,seq51__$2);
}));

return null;
})()
;
(reagent.debug$macros.println.cljs$lang$macro = true);

var ret__12698__auto___61 = (function (){
/**
 * Like standard prn, but prints using console.log (so that we get
 * nice clickable links to source in modern browsers).
 */
reagent.debug$macros.prn = (function reagent$debug$macros$prn(var_args){
var args__12669__auto__ = [];
var len__12666__auto___62 = arguments.length;
var i__12667__auto___63 = (0);
while(true){
if((i__12667__auto___63 < len__12666__auto___62)){
args__12669__auto__.push((arguments[i__12667__auto___63]));

var G__64 = (i__12667__auto___63 + (1));
i__12667__auto___63 = G__64;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.debug$macros.prn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","log","reagent.debug/log",(-528007284),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null),null,(1),null)),forms)),null,(1),null))));
}));

(reagent.debug$macros.prn.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.prn.cljs$lang$applyTo = (function (seq58){
var G__59 = cljs.core.first.call(null,seq58);
var seq58__$1 = cljs.core.next.call(null,seq58);
var G__60 = cljs.core.first.call(null,seq58__$1);
var seq58__$2 = cljs.core.next.call(null,seq58__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59,G__60,seq58__$2);
}));

return null;
})()
;
(reagent.debug$macros.prn.cljs$lang$macro = true);

var ret__12698__auto___65 = /**
 * Useful debugging macro that prints the source and value of x,
 * as well as package name and line number. Returns x.
 */
reagent.debug$macros.dbg = (function reagent$debug$macros$dbg(_AMPERSAND_form,_AMPERSAND_env,x){
var ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.debug","println","reagent.debug/println",(1987012298),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",(-1971828991),null),null,(1),null)),(new cljs.core.List(null,"dbg ",null,(1),null)),(new cljs.core.List(null,ns,null,(1),null)),(new cljs.core.List(null,":",null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form)),null,(1),null)),(new cljs.core.List(null,": ",null,(1),null)),(new cljs.core.List(null,cljs.core.pr_str.call(null,x),null,(1),null)),(new cljs.core.List(null,": ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",(-552799478),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null),null,(1),null)))),null,(1),null)))),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__1__auto__","x__1__auto__",(-2136603537),null),null,(1),null))));
});
(reagent.debug$macros.dbg.cljs$lang$macro = true);

var ret__12698__auto___66 = /**
 * True if assertions are enabled.
 */
reagent.debug$macros.dev_QMARK_ = (function reagent$debug$macros$dev_QMARK_(_AMPERSAND_form,_AMPERSAND_env){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return true;
} else {
return false;
}
});
(reagent.debug$macros.dev_QMARK_.cljs$lang$macro = true);

var ret__12698__auto___70 = (function (){
reagent.debug$macros.time = (function reagent$debug$macros$time(var_args){
var args__12669__auto__ = [];
var len__12666__auto___71 = arguments.length;
var i__12667__auto___72 = (0);
while(true){
if((i__12667__auto___72 < len__12666__auto___71)){
args__12669__auto__.push((arguments[i__12667__auto___72]));

var G__73 = (i__12667__auto___72 + (1));
i__12667__auto___72 = G__73;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.debug$macros.time.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,forms){
var ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_);
var label = [ns,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",(212345235)).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,_AMPERSAND_form)))].join('');
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null),null,(1),null)),(new cljs.core.List(null,label,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__3__auto__","res__3__auto__",(-1686286579),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",(1686842252),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","console.time","js/console.time",(891683584),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null),null,(1),null)))),null,(1),null)),forms)),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("js","console.timeEnd","js/console.timeEnd",(274714029),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"label__2__auto__","label__2__auto__",(-673991267),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__3__auto__","res__3__auto__",(-1686286579),null),null,(1),null))));
}));

(reagent.debug$macros.time.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.debug$macros.time.cljs$lang$applyTo = (function (seq67){
var G__68 = cljs.core.first.call(null,seq67);
var seq67__$1 = cljs.core.next.call(null,seq67);
var G__69 = cljs.core.first.call(null,seq67__$1);
var seq67__$2 = cljs.core.next.call(null,seq67__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68,G__69,seq67__$2);
}));

return null;
})()
;
(reagent.debug$macros.time.cljs$lang$macro = true);


//# sourceURL=reagent/debug$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9kZWJ1ZyRtYWNyb3MuanMiLCJzb3VyY2VzIjpbImRlYnVnJG1hY3Jvcy5jbGpzIl0sImxpbmVDb3VudCI6MzUyLCJtYXBwaW5ncyI6IjtBQUdBLElBQUFBLHdCQUFBO0FBQUE7OzsyQkFBQSxtQ0FBQUMsOURBQVVLO0FBQVYsQUFBQSxJQUFBSixzQkFBQTtBQUFBLEFBQUEsSUFBQUMsd0JBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsc0JBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHNCQUFBRDtBQUFBLEFBQUEsQUFBQUQseUJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxZQUFBLENBQUFBLHNCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSxFQUFBLENBQUEsTUFBQSxBQUFBSCw2QkFBQSxBQUFBLDBCQUFBLEFBQUFBLDBCQUFBLEtBQUEsSUFBQSxPQUFBLC9EQStsR3NEcUQ7QUEvbEd0RCxBQUFBLE9BQUFqRCw4REFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQUQ7OztBQUFBLEFBQUEsQ0FBQSxnRUFBQSxXQUFBRSxnQkFBQUMsM0ZBQVVGLDBHQUVMVTtBQUZMLEFBQUEsT0FBQVAsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUEsMkVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUEsc0dBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLDBEQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBLHFFQUFBLEtBQUEsSUFBQSxlQUFBLEtBQUEsSUFBQSxqQkFJd0JLOzs7QUFKeEIsQ0FBQSxtREFBQSxuREFBVVY7O0FBQVY7QUFBQSxDQUFBLDZDQUFBLFdBQUFNLHhEQUFVTjtBQUFWLEFBQUEsSUFBQU8sUUFBQSwwQkFBQUQsMUJBZ2lHZ0R5QztJQWhpR2hEekMsWUFBQSx5QkFBQUEs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O0FBQVYsQUFBQSxJQUFBRSxRQUFBLDBCQUFBRCwxQkFtK0ZnREk7SUFuK0ZoREosWUFBQSx5QkFBQUEsekJBbytGa0RLO0lBcCtGbERILFFBQUEsMEJBQUFGLDFCQW0rRmdESTtJQW4rRmhESixZQUFBLHlCQUFBQSx6QkFvK0ZrREs7QUFwK0ZsRCxBQUFBLElBQUF2QyxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUFtQyxNQUFBQyxNQUFBRjs7O0FBQUE7OztBQUFBLEFBQUEsQ0FBQSw0Q0FBQSw1Q0FBVUQ7O0FBQVZoRCIsIm5hbWVzIjpbInJldF9fMTI2OThfX2F1dG9fXyIsInZhcl9hcmdzIiwiYXJnc19fMTI2NjlfX2F1dG9fXyIsImxlbl9fMTI2NjZfX2F1dG9fXyIsImlfXzEyNjY3X19hdXRvX18iLCJhcmdzZXFfXzEyNjcwX19hdXRvX18iLCJyZWFnZW50LmRlYnVnJG1hY3Jvcy9sb2ciLCImZm9ybSIsIiZlbnYiLCJjbGpzLmNvcmUvc2VxdWVuY2UiLCJjbGpzLmNvcmUvY29uY2F0IiwiY2xqcy5jb3JlL0xpc3QiLCJzZXEyMiIsIkdfXzIzIiwiR19fMjQiLCJzZWxmX18xMjY1OF9fYXV0b19fIiwiZm9ybXMiLCJyZWFnZW50LmRlYnVnJG1hY3Jvcy93YXJuIiwic2VxMjkiLCJHX18zMCIsIkdfXzMxIiwiY2xqcy5jb3JlLyphc3NlcnQqIiwicmVhZ2VudC5kZWJ1ZyRtYWNyb3Mvd2Fybi11bmxlc3MiLCJzZXEzNiIsIkdfXzM3IiwiR19fMzgiLCJHX18zOSIsImNvbmQiLCJyZWFnZW50LmRlYnVnJG1hY3Jvcy9lcnJvciIsInNlcTQ0IiwiR19fNDUiLCJHX180NiIsInJlYWdlbnQuZGVidWckbWFjcm9zL3ByaW50bG4iLCJzZXE1MSIsIkdfXzUyIiwiR19fNTMiLCJyZWFnZW50LmRlYnVnJG1hY3Jvcy9wcm4iLCJzZXE1OCIsIkdfXzU5IiwiR19fNjAiLCJyZWFnZW50LmRlYnVnJG1hY3Jvcy9kYmciLCJ4IiwiY2xqcy5jb3JlL3ZlYyIsIm5zIiwiY2xqcy5hbmFseXplci8qY2xqcy1ucyoiLCJjbGpzLmNvcmUvbWV0YSIsImNsanMuY29yZS9wci1zdHIiLCJyZWFnZW50LmRlYnVnJG1hY3Jvcy9kZXY/IiwicmVhZ2VudC5kZWJ1ZyRtYWNyb3MvdGltZSIsInNlcTY3IiwiR19fNjgiLCJHX182OSIsImxhYmVsIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5kZWJ1Z1xuICAoOnJlZmVyLWNsb2p1cmUgOmV4Y2x1ZGUgW3BybiBwcmludGxuIHRpbWVdKSlcblxuKGRlZm1hY3JvIGxvZ1xuICBcIlByaW50IHdpdGggY29uc29sZS5sb2csIGlmIGl0IGV4aXN0cy5cIlxuICBbJiBmb3Jtc11cbiAgYCh3aGVuIHJlYWdlbnQuZGVidWcuaGFzLWNvbnNvbGVcbiAgICAgKC5sb2cganMvY29uc29sZSB+QGZvcm1zKSkpXG5cbihkZWZtYWNybyB3YXJuXG4gIFwiUHJpbnQgd2l0aCBjb25zb2xlLndhcm4uXCJcbiAgWyYgZm9ybXNdXG4gICh3aGVuICphc3NlcnQqXG4gICAgYCh3aGVuIHJlYWdlbnQuZGVidWcuaGFzLWNvbnNvbGVcbiAgICAgICAoLndhcm4gKGlmIHJlYWdlbnQuZGVidWcudHJhY2tpbmdcbiAgICAgICAgICAgICAgICByZWFnZW50LmRlYnVnLnRyYWNrLWNvbnNvbGUganMvY29uc29sZSlcbiAgICAgICAgICAgICAgKHN0ciBcIldhcm5pbmc6IFwiIH5AZm9ybXMpKSkpKVxuXG4oZGVmbWFjcm8gd2Fybi11bmxlc3NcbiAgW2NvbmQgJiBmb3Jtc11cbiAgKHdoZW4gKmFzc2VydCpcbiAgICBgKHdoZW4gKG5vdCB+Y29uZClcbiAgICAgICAod2FybiB+QGZvcm1zKSkpKVxuXG4oZGVmbWFjcm8gZXJyb3JcbiAgXCJQcmludCB3aXRoIGNvbnNvbGUuZXJyb3IuXCJcbiAgWyYgZm9ybXNdXG4gICh3aGVuICphc3NlcnQqXG4gICAgYCh3aGVuIHJlYWdlbnQuZGVidWcuaGFzLWNvbnNvbGVcbiAgICAgICAoLmVycm9yIChpZiByZWFnZW50LmRlYnVnLnRyYWNraW5nXG4gICAgICAgICAgICAgICAgIHJlYWdlbnQuZGVidWcudHJhY2stY29uc29sZSBqcy9jb25zb2xlKVxuICAgICAgICAgICAgICAgKHN0ciB+QGZvcm1zKSkpKSlcblxuKGRlZm1hY3JvIHByaW50bG5cbiAgXCJQcmludCBzdHJpbmcgd2l0aCBjb25zb2xlLmxvZ1wiXG4gIFsmIGZvcm1zXVxuICBgKGxvZyAoc3RyIH5AZm9ybXMpKSlcblxuKGRlZm1hY3JvIHByblxuICBcIkxpa2Ugc3RhbmRhcmQgcHJuLCBidXQgcHJpbnRzIHVzaW5nIGNvbnNvbGUubG9nIChzbyB0aGF0IHdlIGdldFxubmljZSBjbGlja2FibGUgbGlua3MgdG8gc291cmNlIGluIG1vZGVybiBicm93c2VycykuXCJcbiAgWyYgZm9ybXNdXG4gIGAobG9nIChwci1zdHIgfkBmb3JtcykpKVxuXG4oZGVmbWFjcm8gZGJnXG4gIFwiVXNlZnVsIGRlYnVnZ2luZyBtYWNybyB0aGF0IHByaW50cyB0aGUgc291cmNlIGFuZCB2YWx1ZSBvZiB4LFxuYXMgd2VsbCBhcyBwYWNrYWdlIG5hbWUgYW5kIGxpbmUgbnVtYmVyLiBSZXR1cm5zIHguXCJcbiAgW3hdXG4gIChsZXQgW25zIChzdHIgY2xqcy5hbmFseXplci8qY2xqcy1ucyopXVxuICAgIGAobGV0IFt4IyB+eF1cbiAgICAgICAocHJpbnRsbiAoc3RyIFwiZGJnIFwiXG4gICAgICAgICAgICAgICAgICAgICB+bnMgXCI6XCJcbiAgICAgICAgICAgICAgICAgICAgIH4oOmxpbmUgKG1ldGEgJmZvcm0pKVxuICAgICAgICAgICAgICAgICAgICAgXCI6IFwiXG4gICAgICAgICAgICAgICAgICAgICB+KHByLXN0ciB4KVxuICAgICAgICAgICAgICAgICAgICAgXCI6IFwiXG4gICAgICAgICAgICAgICAgICAgICAocHItc3RyIHgjKSkpXG4gICAgICAgeCMpKSlcblxuKGRlZm1hY3JvIGRldj9cbiAgXCJUcnVlIGlmIGFzc2VydGlvbnMgYXJlIGVuYWJsZWQuXCJcbiAgW11cbiAgKGlmICphc3NlcnQqIHRydWUgZmFsc2UpKVxuXG4oZGVmbWFjcm8gdGltZSBbJiBmb3Jtc11cbiAgKGxldCBbbnMgKHN0ciBjbGpzLmFuYWx5emVyLypjbGpzLW5zKilcbiAgICAgICAgbGFiZWwgKHN0ciBucyBcIjpcIiAoOmxpbmUgKG1ldGEgJmZvcm0pKSldXG4gICAgYChsZXQgW2xhYmVsIyB+bGFiZWxcbiAgICAgICAgICAgcmVzIyAoZG9cbiAgICAgICAgICAgICAgICAgIChqcy9jb25zb2xlLnRpbWUgbGFiZWwjKVxuICAgICAgICAgICAgICAgICAgfkBmb3JtcyldXG4gICAgICAgKGpzL2NvbnNvbGUudGltZUVuZCBsYWJlbCMpXG4gICAgICAgcmVzIykpKVxuIl19