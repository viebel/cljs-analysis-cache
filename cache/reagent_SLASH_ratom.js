// Compiled by ClojureScript 1.10.597
goog.provide("reagent.ratom");
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.debug !== 'undefined')){
} else {
reagent.ratom.debug = false;
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.generation !== 'undefined')){
} else {
reagent.ratom.generation = (0);
}
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom._running !== 'undefined')){
} else {
reagent.ratom._running = cljs.core.atom.call(null,(0));
}
reagent.ratom.reactive_QMARK_ = (function reagent$ratom$reactive_QMARK_(){
return (!((reagent.ratom._STAR_ratom_context_STAR_ == null)));
});
reagent.ratom.running = (function reagent$ratom$running(){
return cljs.core.deref.call(null,reagent.ratom._running);
});
reagent.ratom.arr_len = (function reagent$ratom$arr_len(x){
if((x == null)){
return (0);
} else {
return x.length;
}
});
reagent.ratom.arr_eq = (function reagent$ratom$arr_eq(x,y){
var len = reagent.ratom.arr_len.call(null,x);
if((len === reagent.ratom.arr_len.call(null,y))){
var i = (0);
while(true){
var or__10116__auto__ = (i === len);
if(or__10116__auto__){
return or__10116__auto__;
} else {
if(((x[i]) === (y[i]))){
var G__186 = (i + (1));
i = G__186;
continue;
} else {
return false;
}
}
break;
}
} else {
return false;
}
});
/**
 * When f is executed, if (f) derefs any ratoms, they are then added to 'obj.captured'(*ratom-context*).
 * 
 *   See function notify-deref-watcher! to know how *ratom-context* is updated
 */
reagent.ratom.in_context = (function reagent$ratom$in_context(obj,f){
var _STAR_ratom_context_STAR__orig_val__187 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__188 = obj;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__188);

try{return f.call(null);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__187);
}});
/**
 * Returns `(in-context f r)`.  Calls `_update-watching` on r with any
 *   `deref`ed atoms captured during `in-context`, if any differ from the
 *   `watching` field of r.  Clears the `dirty?` flag on r.
 * 
 *   Inside '_update-watching' along with adding the ratoms in 'r.watching' of reaction,
 *   the reaction is also added to the list of watches on each ratoms f derefs.
 */
reagent.ratom.deref_capture = (function reagent$ratom$deref_capture(f,r){
(r.captured = null);

(r.ratomGeneration = (reagent.ratom.generation = (reagent.ratom.generation + (1))));


var res = reagent.ratom.in_context.call(null,r,f);
var c = r.captured;
(r.dirty_QMARK_ = false);

if(reagent.ratom.arr_eq.call(null,c,r.watching)){
} else {
r._update_watching(c);
}

return res;
});
/**
 * Add `derefed` to the `captured` field of `*ratom-context*`.
 * 
 *   See also `in-context`
 */
reagent.ratom.notify_deref_watcher_BANG_ = (function reagent$ratom$notify_deref_watcher_BANG_(derefed){
var temp__9774__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__9774__auto__ == null)){
return null;
} else {
var r = temp__9774__auto__;
var c = r.captured;
if((c == null)){
return (r.captured = [derefed]);
} else {
return c.push(derefed);
}
}
});
reagent.ratom.check_watches = (function reagent$ratom$check_watches(old,new$){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core._PLUS_,(cljs.core.count.call(null,new$) - cljs.core.count.call(null,old)));
} else {
}

return new$;
});
reagent.ratom.add_w = (function reagent$ratom$add_w(this$,key,f){
var w = this$.watches;
(this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.assoc.call(null,w,key,f)));

return (this$.watchesArr = null);
});
reagent.ratom.remove_w = (function reagent$ratom$remove_w(this$,key){
var w = this$.watches;
(this$.watches = reagent.ratom.check_watches.call(null,w,cljs.core.dissoc.call(null,w,key)));

return (this$.watchesArr = null);
});
reagent.ratom.notify_w = (function reagent$ratom$notify_w(this$,old,new$){
var w = this$.watchesArr;
var a = (((w == null))?(this$.watchesArr = cljs.core.reduce_kv.call(null,(function (p1__8_SHARP_,p2__9_SHARP_,p3__10_SHARP_){
var G__189 = p1__8_SHARP_;
G__189.push(p2__9_SHARP_);

G__189.push(p3__10_SHARP_);

return G__189;
}),[],this$.watches)):w);
var len = a.length;
var i = (0);
while(true){
if((i < len)){
var k_190 = (a[i]);
var f_191 = (a[(i + (1))]);
f_191.call(null,k_190,this$,old,new$);

var G__192 = ((2) + i);
i = G__192;
continue;
} else {
return null;
}
break;
}
});
reagent.ratom.pr_atom = (function reagent$ratom$pr_atom(a,writer,opts,s,v){
cljs.core._write.call(null,writer,["#object[reagent.ratom.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)," "].join(''));

cljs.core.pr_writer.call(null,(function (){var _STAR_ratom_context_STAR__orig_val__193 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__194 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__194);

try{return v;
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__193);
}})(),writer,opts);

return cljs.core._write.call(null,writer,"]");
});
if((typeof reagent !== 'undefined') && (typeof reagent.ratom !== 'undefined') && (typeof reagent.ratom.rea_queue !== 'undefined')){
} else {
reagent.ratom.rea_queue = null;
}
reagent.ratom.rea_enqueue = (function reagent$ratom$rea_enqueue(r){
if((reagent.ratom.rea_queue == null)){
(reagent.ratom.rea_queue = []);

reagent.impl.batching.schedule.call(null);
} else {
}

return reagent.ratom.rea_queue.push(r);
});
reagent.ratom.flush_BANG_ = (function reagent$ratom$flush_BANG_(){
while(true){
var q = reagent.ratom.rea_queue;
if((q == null)){
return null;
} else {
(reagent.ratom.rea_queue = null);

var n__12482__auto___195 = q.length;
var i_196 = (0);
while(true){
if((i_196 < n__12482__auto___195)){
(q[i_196])._queued_run();

var G__197 = (i_196 + (1));
i_196 = G__197;
continue;
} else {
}
break;
}

continue;
}
break;
}
});
(reagent.impl.batching.ratom_flush = reagent.ratom.flush_BANG_);

/**
 * @interface
 */
reagent.ratom.IReactiveAtom = function(){};


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
reagent.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = -2140766208;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RAtom.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"RAtom",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",(128701612)),cljs.core._deref.call(null,a__$1)], null));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.meta;
}));

(reagent.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,new_value){
var self__ = this;
var a__$1 = this;
if((self__.validator == null)){
} else {
if(cljs.core.truth_(self__.validator.call(null,new_value))){
} else {
throw (new Error(["Assert failed: ","Validator rejected reference state","\n","(validator new-value)"].join('')));
}
}

var old_value = self__.state;
(self__.state = new_value);

if((self__.watches == null)){
} else {
reagent.ratom.notify_w.call(null,a__$1,old_value,new_value);
}

return new_value;
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.RAtom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.RAtom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new reagent.ratom.RAtom(self__.state,new_meta,self__.validator,self__.watches));
}));

(reagent.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

return self__.state;
}));

(reagent.ratom.RAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"meta","meta",(-1154898805),null),new cljs.core.Symbol(null,"validator","validator",(-325659154),null),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(reagent.ratom.RAtom.cljs$lang$type = true);

(reagent.ratom.RAtom.cljs$lang$ctorStr = "reagent.ratom/RAtom");

(reagent.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.ratom/RAtom");
}));

/**
 * Positional factory function for reagent.ratom/RAtom.
 */
reagent.ratom.__GT_RAtom = (function reagent$ratom$__GT_RAtom(state,meta,validator,watches){
return (new reagent.ratom.RAtom(state,meta,validator,watches));
});

/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 */
reagent.ratom.atom = (function reagent$ratom$atom(var_args){
var G__201 = arguments.length;
switch (G__201) {
case (1):
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___206 = arguments.length;
var i__12667__auto___207 = (0);
while(true){
if((i__12667__auto___207 < len__12666__auto___206)){
args_arr__12684__auto__.push((arguments[i__12667__auto___207]));

var G__208 = (i__12667__auto___207 + (1));
i__12667__auto___207 = G__208;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((1)),(0),null));
return reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12685__auto__);

}
});

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.__GT_RAtom.call(null,x,null,null,null);
}));

(reagent.ratom.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__202){
var map__203 = p__202;
var map__203__$1 = (((((!((map__203 == null))))?(((((map__203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__203):map__203);
var meta = cljs.core.get.call(null,map__203__$1,new cljs.core.Keyword(null,"meta","meta",(1499536964)));
var validator = cljs.core.get.call(null,map__203__$1,new cljs.core.Keyword(null,"validator","validator",(-1966190681)));
return reagent.ratom.__GT_RAtom.call(null,x,meta,validator,null);
}));

/** @this {Function} */
(reagent.ratom.atom.cljs$lang$applyTo = (function (seq199){
var G__200 = cljs.core.first.call(null,seq199);
var seq199__$1 = cljs.core.next.call(null,seq199);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__200,seq199__$1);
}));

(reagent.ratom.atom.cljs$lang$maxFixedArity = (1));

reagent.ratom.cached_reaction = (function reagent$ratom$cached_reaction(f,o,k,obj,destroy){
var m = o.reagReactionCache;
var m__$1 = (((m == null))?cljs.core.PersistentArrayMap.EMPTY:m);
var r = m__$1.call(null,k,null);
if((!((r == null)))){
return cljs.core._deref.call(null,r);
} else {
if((reagent.ratom._STAR_ratom_context_STAR_ == null)){
return f.call(null);
} else {
var r__$1 = reagent.ratom.make_reaction.call(null,f,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)),(function (x){
if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.dec);
} else {
}

var __209 = o.reagReactionCache;
var __210__$1 = cljs.core.dissoc.call(null,__209,k);
(o.reagReactionCache = __210__$1);

if((!((obj == null)))){
(obj.reaction = null);
} else {
}

if((!((destroy == null)))){
return destroy.call(null,x);
} else {
return null;
}
}));
var v = cljs.core._deref.call(null,r__$1);
(o.reagReactionCache = cljs.core.assoc.call(null,m__$1,k,r__$1));

if(reagent.ratom.debug){
cljs.core.swap_BANG_.call(null,reagent.ratom._running,cljs.core.inc);
} else {
}

if((!((obj == null)))){
(obj.reaction = r__$1);
} else {
}

return v;

}
}
});

/**
* @constructor
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Track = (function (f,args,reaction){
this.f = f;
this.args = args;
this.reaction = reaction;
this.cljs$lang$protocol_mask$partition0$ = -2141159424;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.ratom.Track.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Track.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__9714__auto__ = self__.reaction;
if((temp__9714__auto__ == null)){
return reagent.ratom.cached_reaction.call(null,(function (){
return cljs.core.apply.call(null,self__.f,self__.args);
}),self__.f,self__.args,this$__$1,null);
} else {
var r = temp__9714__auto__;
return cljs.core._deref.call(null,r);
}
}));

(reagent.ratom.Track.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Track)) && (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args)));
}));

(reagent.ratom.Track.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
}));

(reagent.ratom.Track.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Track",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",(128701612)),cljs.core._deref.call(null,a__$1),new cljs.core.Keyword(null,"f","f",(-1597136552)),self__.f], null));
}));

(reagent.ratom.Track.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),new cljs.core.Symbol(null,"args","args",(-1338879193),null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",(2131401315),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(reagent.ratom.Track.cljs$lang$type = true);

(reagent.ratom.Track.cljs$lang$ctorStr = "reagent.ratom/Track");

(reagent.ratom.Track.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.ratom/Track");
}));

/**
 * Positional factory function for reagent.ratom/Track.
 */
reagent.ratom.__GT_Track = (function reagent$ratom$__GT_Track(f,args,reaction){
return (new reagent.ratom.Track(f,args,reaction));
});

reagent.ratom.make_track = (function reagent$ratom$make_track(f,args){
return (new reagent.ratom.Track(f,args,null));
});
reagent.ratom.make_track_BANG_ = (function reagent$ratom$make_track_BANG_(f,args){
var t = reagent.ratom.make_track.call(null,f,args);
var r = reagent.ratom.make_reaction.call(null,(function (){
return cljs.core._deref.call(null,t);
}),new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)),true);
cljs.core.deref.call(null,r);

return r;
});
reagent.ratom.track = (function reagent$ratom$track(var_args){
var args__12669__auto__ = [];
var len__12666__auto___213 = arguments.length;
var i__12667__auto___214 = (0);
while(true){
if((i__12667__auto___214 < len__12666__auto___213)){
args__12669__auto__.push((arguments[i__12667__auto___214]));

var G__215 = (i__12667__auto___214 + (1));
i__12667__auto___214 = G__215;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(reagent.ratom.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
}));

(reagent.ratom.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.track.cljs$lang$applyTo = (function (seq211){
var G__212 = cljs.core.first.call(null,seq211);
var seq211__$1 = cljs.core.next.call(null,seq211);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__212,seq211__$1);
}));

reagent.ratom.track_BANG_ = (function reagent$ratom$track_BANG_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___218 = arguments.length;
var i__12667__auto___219 = (0);
while(true){
if((i__12667__auto___219 < len__12666__auto___218)){
args__12669__auto__.push((arguments[i__12667__auto___219]));

var G__220 = (i__12667__auto___219 + (1));
i__12667__auto___219 = G__220;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(reagent.ratom.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(reagent.ratom.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.track_BANG_.cljs$lang$applyTo = (function (seq216){
var G__217 = cljs.core.first.call(null,seq216);
var seq216__$1 = cljs.core.next.call(null,seq216);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__217,seq216__$1);
}));


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.RCursor = (function (ratom,path,reaction,state,watches){
this.ratom = ratom;
this.path = path;
this.reaction = reaction;
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = -2141159424;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.RCursor.prototype._peek = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__221 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__222 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__222);

try{return cljs.core._deref.call(null,this$);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__221);
}}));

(reagent.ratom.RCursor.prototype._set_state = (function (oldstate,newstate){
var self__ = this;
var this$ = this;
if((oldstate === newstate)){
return null;
} else {
(self__.state = newstate);

if((!((self__.watches == null)))){
return reagent.ratom.notify_w.call(null,this$,oldstate,newstate);
} else {
return null;
}
}
}));

(reagent.ratom.RCursor.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.RCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"RCursor",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",(128701612)),cljs.core._deref.call(null,a__$1),new cljs.core.Keyword(null,"path","path",(-188191168)),self__.path], null));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.ratom,self__.path], null));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.RCursor)) && (cljs.core._EQ_.call(null,self__.path,other.path)) && (cljs.core._EQ_.call(null,self__.ratom,other.ratom)));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,new_value){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
this$__$1._set_state(oldstate,new_value);

if((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom))){
if(cljs.core._EQ_.call(null,self__.path,cljs.core.PersistentVector.EMPTY)){
cljs.core.reset_BANG_.call(null,self__.ratom,new_value);
} else {
cljs.core.swap_BANG_.call(null,self__.ratom,cljs.core.assoc_in,self__.path,new_value);
}
} else {
self__.ratom.call(null,self__.path,new_value);
}

return new_value;
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek()));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,a__$1._peek(),x,y));
}));

(reagent.ratom.RCursor.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,a__$1._peek(),x,y,more));
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.RCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var oldstate = self__.state;
var newstate = (function (){var temp__9714__auto__ = self__.reaction;
if((temp__9714__auto__ == null)){
var f = (((((!((self__.ratom == null))))?(((((self__.ratom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === self__.ratom.cljs$core$IDeref$))))?true:(((!self__.ratom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,self__.ratom)))?(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,self__.ratom),self__.path);
}):(function (){
return self__.ratom.call(null,self__.path);
}));
return reagent.ratom.cached_reaction.call(null,f,self__.ratom,self__.path,this$__$1,null);
} else {
var r = temp__9714__auto__;
return cljs.core._deref.call(null,r);
}
})();
this$__$1._set_state(oldstate,newstate);

return newstate;
}));

(reagent.ratom.RCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ratom","ratom",(1514010260),null),new cljs.core.Symbol(null,"path","path",(1452340359),null),cljs.core.with_meta(new cljs.core.Symbol(null,"reaction","reaction",(2131401315),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(reagent.ratom.RCursor.cljs$lang$type = true);

(reagent.ratom.RCursor.cljs$lang$ctorStr = "reagent.ratom/RCursor");

(reagent.ratom.RCursor.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.ratom/RCursor");
}));

/**
 * Positional factory function for reagent.ratom/RCursor.
 */
reagent.ratom.__GT_RCursor = (function reagent$ratom$__GT_RCursor(ratom,path,reaction,state,watches){
return (new reagent.ratom.RCursor(ratom,path,reaction,state,watches));
});

reagent.ratom.cursor = (function reagent$ratom$cursor(src,path){
if((function (){var or__10116__auto__ = (((!((src == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === src.reagent$ratom$IReactiveAtom$))))?true:(((!src.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src):false)):cljs.core.native_satisfies_QMARK_.call(null,reagent.ratom.IReactiveAtom,src));
if(or__10116__auto__){
return or__10116__auto__;
} else {
return ((cljs.core.ifn_QMARK_.call(null,src)) && ((!(cljs.core.vector_QMARK_.call(null,src)))));
}
})()){
} else {
throw (new Error(["Assert failed: ",["src must be a reactive atom or a function, not ",cljs.core.pr_str.call(null,src)," while attempting to get path: ",cljs.core.pr_str.call(null,path)].join(''),"\n","(or (satisfies? IReactiveAtom src) (and (ifn? src) (not (vector? src))))"].join('')));
}

return reagent.ratom.__GT_RCursor.call(null,src,path,null,null,null);
});
reagent.ratom.with_let_destroy = (function reagent$ratom$with_let_destroy(v){
var temp__9774__auto__ = v.destroy;
if((temp__9774__auto__ == null)){
return null;
} else {
var f = temp__9774__auto__;
return f.call(null);
}
});
reagent.ratom.with_let_values = (function reagent$ratom$with_let_values(key){
var temp__9714__auto__ = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__9714__auto__ == null)){
return [];
} else {
var c = temp__9714__auto__;
return reagent.ratom.cached_reaction.call(null,cljs.core.array,c,key,null,reagent.ratom.with_let_destroy);
}
});

/**
 * @interface
 */
reagent.ratom.IDisposable = function(){};

reagent.ratom.dispose_BANG_ = (function reagent$ratom$dispose_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1 == null)))))){
return this$.reagent$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else {
var x__11578__auto__ = (((this$ == null))?null:this$);
var m__11579__auto__ = (reagent.ratom.dispose_BANG_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,this$);
} else {
var m__11576__auto__ = (reagent.ratom.dispose_BANG_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
}
});

reagent.ratom.add_on_dispose_BANG_ = (function reagent$ratom$add_on_dispose_BANG_(this$,f){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 == null)))))){
return this$.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2(this$,f);
} else {
var x__11578__auto__ = (((this$ == null))?null:this$);
var m__11579__auto__ = (reagent.ratom.add_on_dispose_BANG_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,this$,f);
} else {
var m__11576__auto__ = (reagent.ratom.add_on_dispose_BANG_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,this$,f);
} else {
throw cljs.core.missing_protocol.call(null,"IDisposable.add-on-dispose!",this$);
}
}
}
});


/**
 * @interface
 */
reagent.ratom.IRunnable = function(){};

reagent.ratom.run = (function reagent$ratom$run(this$){
if((((!((this$ == null)))) && ((!((this$.reagent$ratom$IRunnable$run$arity$1 == null)))))){
return this$.reagent$ratom$IRunnable$run$arity$1(this$);
} else {
var x__11578__auto__ = (((this$ == null))?null:this$);
var m__11579__auto__ = (reagent.ratom.run[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,this$);
} else {
var m__11576__auto__ = (reagent.ratom.run["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
}
});

reagent.ratom.handle_reaction_change = (function reagent$ratom$handle_reaction_change(this$,sender,old,new$){
return this$._handle_change(sender,old,new$);
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {reagent.ratom.IReactiveAtom}
 * @implements {reagent.ratom.IRunnable}
 * @implements {reagent.ratom.IDisposable}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {reagent.ratom.Object}
*/
reagent.ratom.Reaction = (function (f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.nocache_QMARK_ = nocache_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.caught = caught;
this.cljs$lang$protocol_mask$partition0$ = -2141159424;
this.cljs$lang$protocol_mask$partition1$ = 114690;
});
(reagent.ratom.Reaction.prototype._peek_at = (function (){
var self__ = this;
var this$ = this;
var _STAR_ratom_context_STAR__orig_val__227 = reagent.ratom._STAR_ratom_context_STAR_;
var _STAR_ratom_context_STAR__temp_val__228 = null;
(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__temp_val__228);

try{return cljs.core._deref.call(null,this$);
}finally {(reagent.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR__orig_val__227);
}}));

(reagent.ratom.Reaction.prototype._handle_change = (function (sender,oldval,newval){
var self__ = this;
var this$ = this;
if((((oldval === newval)) || (self__.dirty_QMARK_))){
return null;
} else {
if((self__.auto_run == null)){
(self__.dirty_QMARK_ = true);

return reagent.ratom.rea_enqueue.call(null,this$);
} else {
if(self__.auto_run === true){
return this$._run(false);
} else {
return self__.auto_run.call(null,this$);
}
}
}
}));

(reagent.ratom.Reaction.prototype._update_watching = (function (derefed){
var self__ = this;
var this$ = this;
var new$ = cljs.core.set.call(null,derefed);
var old = cljs.core.set.call(null,self__.watching);
(self__.watching = derefed);

var seq__229_245 = cljs.core.seq.call(null,clojure.set.difference.call(null,new$,old));
var chunk__230_246 = null;
var count__231_247 = (0);
var i__232_248 = (0);
while(true){
if((i__232_248 < count__231_247)){
var w_249 = cljs.core._nth.call(null,chunk__230_246,i__232_248);
cljs.core._add_watch.call(null,w_249,this$,reagent.ratom.handle_reaction_change);


var G__250 = seq__229_245;
var G__251 = chunk__230_246;
var G__252 = count__231_247;
var G__253 = (i__232_248 + (1));
seq__229_245 = G__250;
chunk__230_246 = G__251;
count__231_247 = G__252;
i__232_248 = G__253;
continue;
} else {
var temp__9522__auto___254 = cljs.core.seq.call(null,seq__229_245);
if(temp__9522__auto___254){
var seq__229_255__$1 = temp__9522__auto___254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__229_255__$1)){
var c__12122__auto___256 = cljs.core.chunk_first.call(null,seq__229_255__$1);
var G__257 = cljs.core.chunk_rest.call(null,seq__229_255__$1);
var G__258 = c__12122__auto___256;
var G__259 = cljs.core.count.call(null,c__12122__auto___256);
var G__260 = (0);
seq__229_245 = G__257;
chunk__230_246 = G__258;
count__231_247 = G__259;
i__232_248 = G__260;
continue;
} else {
var w_261 = cljs.core.first.call(null,seq__229_255__$1);
cljs.core._add_watch.call(null,w_261,this$,reagent.ratom.handle_reaction_change);


var G__262 = cljs.core.next.call(null,seq__229_255__$1);
var G__263 = null;
var G__264 = (0);
var G__265 = (0);
seq__229_245 = G__262;
chunk__230_246 = G__263;
count__231_247 = G__264;
i__232_248 = G__265;
continue;
}
} else {
}
}
break;
}

var seq__233 = cljs.core.seq.call(null,clojure.set.difference.call(null,old,new$));
var chunk__234 = null;
var count__235 = (0);
var i__236 = (0);
while(true){
if((i__236 < count__235)){
var w = cljs.core._nth.call(null,chunk__234,i__236);
cljs.core._remove_watch.call(null,w,this$);


var G__266 = seq__233;
var G__267 = chunk__234;
var G__268 = count__235;
var G__269 = (i__236 + (1));
seq__233 = G__266;
chunk__234 = G__267;
count__235 = G__268;
i__236 = G__269;
continue;
} else {
var temp__9522__auto__ = cljs.core.seq.call(null,seq__233);
if(temp__9522__auto__){
var seq__233__$1 = temp__9522__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__233__$1)){
var c__12122__auto__ = cljs.core.chunk_first.call(null,seq__233__$1);
var G__270 = cljs.core.chunk_rest.call(null,seq__233__$1);
var G__271 = c__12122__auto__;
var G__272 = cljs.core.count.call(null,c__12122__auto__);
var G__273 = (0);
seq__233 = G__270;
chunk__234 = G__271;
count__235 = G__272;
i__236 = G__273;
continue;
} else {
var w = cljs.core.first.call(null,seq__233__$1);
cljs.core._remove_watch.call(null,w,this$);


var G__274 = cljs.core.next.call(null,seq__233__$1);
var G__275 = null;
var G__276 = (0);
var G__277 = (0);
seq__233 = G__274;
chunk__234 = G__275;
count__235 = G__276;
i__236 = G__277;
continue;
}
} else {
return null;
}
}
break;
}
}));

(reagent.ratom.Reaction.prototype._queued_run = (function (){
var self__ = this;
var this$ = this;
if(((self__.dirty_QMARK_) && ((!((self__.watching == null)))))){
return this$._run(true);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype._try_capture = (function (f__$1){
var self__ = this;
var this$ = this;
try{(self__.caught = null);

return reagent.ratom.deref_capture.call(null,f__$1,this$);
}catch (e237){var e = e237;
(self__.state = e);

(self__.caught = e);

return (self__.dirty_QMARK_ = false);
}}));

(reagent.ratom.Reaction.prototype._run = (function (check){
var self__ = this;
var this$ = this;
var oldstate = self__.state;
var res = (cljs.core.truth_(check)?this$._try_capture(self__.f):reagent.ratom.deref_capture.call(null,self__.f,this$));
if(self__.nocache_QMARK_){
} else {
(self__.state = res);

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate,res)))){
} else {
reagent.ratom.notify_w.call(null,this$,oldstate,res);
}
}

return res;
}));

(reagent.ratom.Reaction.prototype._set_opts = (function (p__238){
var self__ = this;
var map__239 = p__238;
var map__239__$1 = (((((!((map__239 == null))))?(((((map__239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__239):map__239);
var auto_run__$1 = cljs.core.get.call(null,map__239__$1,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)));
var on_set = cljs.core.get.call(null,map__239__$1,new cljs.core.Keyword(null,"on-set","on-set",(-140953470)));
var on_dispose = cljs.core.get.call(null,map__239__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)));
var no_cache = cljs.core.get.call(null,map__239__$1,new cljs.core.Keyword(null,"no-cache","no-cache",(1588056370)));
var this$ = this;
if((!((auto_run__$1 == null)))){
(this$.auto_run = auto_run__$1);
} else {
}

if((!((on_set == null)))){
(this$.on_set = on_set);
} else {
}

if((!((on_dispose == null)))){
(this$.on_dispose = on_dispose);
} else {
}

if((!((no_cache == null)))){
return (this$.nocache_QMARK_ = no_cache);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IReactiveAtom$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Reaction",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",(128701612)),cljs.core._deref.call(null,a__$1)], null));
}));

(reagent.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.getUid(this$__$1);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var s = self__.state;
var wg = self__.watching;
(self__.watching = null);

(self__.state = null);

(self__.auto_run = null);

(self__.dirty_QMARK_ = true);

var seq__241_278 = cljs.core.seq.call(null,cljs.core.set.call(null,wg));
var chunk__242_279 = null;
var count__243_280 = (0);
var i__244_281 = (0);
while(true){
if((i__244_281 < count__243_280)){
var w_282 = cljs.core._nth.call(null,chunk__242_279,i__244_281);
cljs.core._remove_watch.call(null,w_282,this$__$1);


var G__283 = seq__241_278;
var G__284 = chunk__242_279;
var G__285 = count__243_280;
var G__286 = (i__244_281 + (1));
seq__241_278 = G__283;
chunk__242_279 = G__284;
count__243_280 = G__285;
i__244_281 = G__286;
continue;
} else {
var temp__9522__auto___287 = cljs.core.seq.call(null,seq__241_278);
if(temp__9522__auto___287){
var seq__241_288__$1 = temp__9522__auto___287;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__241_288__$1)){
var c__12122__auto___289 = cljs.core.chunk_first.call(null,seq__241_288__$1);
var G__290 = cljs.core.chunk_rest.call(null,seq__241_288__$1);
var G__291 = c__12122__auto___289;
var G__292 = cljs.core.count.call(null,c__12122__auto___289);
var G__293 = (0);
seq__241_278 = G__290;
chunk__242_279 = G__291;
count__243_280 = G__292;
i__244_281 = G__293;
continue;
} else {
var w_294 = cljs.core.first.call(null,seq__241_288__$1);
cljs.core._remove_watch.call(null,w_294,this$__$1);


var G__295 = cljs.core.next.call(null,seq__241_288__$1);
var G__296 = null;
var G__297 = (0);
var G__298 = (0);
seq__241_278 = G__295;
chunk__242_279 = G__296;
count__243_280 = G__297;
i__244_281 = G__298;
continue;
}
} else {
}
}
break;
}

if((!((this$__$1.on_dispose == null)))){
this$__$1.on_dispose(s);
} else {
}

var temp__9774__auto__ = this$__$1.on_dispose_arr;
if((temp__9774__auto__ == null)){
return null;
} else {
var a = temp__9774__auto__;
var n__12482__auto__ = a.length;
var i = (0);
while(true){
if((i < n__12482__auto__)){
(a[i]).call(null,this$__$1);

var G__299 = (i + (1));
i = G__299;
continue;
} else {
return null;
}
break;
}
}
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IDisposable$add_on_dispose_BANG_$arity$2 = (function (this$,f__$1){
var self__ = this;
var this$__$1 = this;
var temp__9714__auto__ = this$__$1.on_dispose_arr;
if((temp__9714__auto__ == null)){
return (this$__$1.on_dispose_arr = [f__$1]);
} else {
var a = temp__9714__auto__;
return a.push(f__$1);
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (a,newval){
var self__ = this;
var a__$1 = this;
if(cljs.core.fn_QMARK_.call(null,a__$1.on_set)){
} else {
throw (new Error(["Assert failed: ","Reaction is read only; on-set is not allowed","\n","(fn? (.-on-set a))"].join('')));
}

var oldval = self__.state;
(self__.state = newval);

a__$1.on_set(oldval,newval);

reagent.ratom.notify_w.call(null,a__$1,oldval,newval);

return newval;
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f__$1){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at()));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f__$1,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f__$1,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f__$1.call(null,a__$1._peek_at(),x,y));
}));

(reagent.ratom.Reaction.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f__$1,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f__$1,a__$1._peek_at(),x,y,more));
}));

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.ratom.Reaction.prototype.reagent$ratom$IRunnable$run$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
reagent.ratom.flush_BANG_.call(null);

return this$__$1._run(false);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f__$1){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f__$1);
}));

(reagent.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
var was_empty = cljs.core.empty_QMARK_.call(null,self__.watches);
reagent.ratom.remove_w.call(null,this$__$1,key);

if((((!(was_empty))) && (cljs.core.empty_QMARK_.call(null,self__.watches)) && ((self__.auto_run == null)))){
return reagent.ratom.dispose_BANG_.call(null,this$__$1);
} else {
return null;
}
}));

(reagent.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var temp__9774__auto___300 = self__.caught;
if((temp__9774__auto___300 == null)){
} else {
var e_301 = temp__9774__auto___300;
throw e_301;
}

var non_reactive_302 = (reagent.ratom._STAR_ratom_context_STAR_ == null);
if(non_reactive_302){
reagent.ratom.flush_BANG_.call(null);
} else {
}

if(((non_reactive_302) && ((self__.auto_run == null)))){
if(self__.dirty_QMARK_){
var oldstate_303 = self__.state;
(self__.state = self__.f.call(null));

if((((self__.watches == null)) || (cljs.core._EQ_.call(null,oldstate_303,self__.state)))){
} else {
reagent.ratom.notify_w.call(null,this$__$1,oldstate_303,self__.state);
}
} else {
}
} else {
reagent.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);

if(self__.dirty_QMARK_){
this$__$1._run(false);
} else {
}
}

return self__.state;
}));

(reagent.ratom.Reaction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",(43394975),null),cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty?","dirty?",(-419314319),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"nocache?","nocache?",(-1065670978),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watching","watching",(1947648227),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"auto-run","auto-run",(-696035332),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"caught","caught",(2084008322),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(reagent.ratom.Reaction.cljs$lang$type = true);

(reagent.ratom.Reaction.cljs$lang$ctorStr = "reagent.ratom/Reaction");

(reagent.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.ratom/Reaction");
}));

/**
 * Positional factory function for reagent.ratom/Reaction.
 */
reagent.ratom.__GT_Reaction = (function reagent$ratom$__GT_Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught){
return (new reagent.ratom.Reaction(f,state,dirty_QMARK_,nocache_QMARK_,watching,watches,auto_run,caught));
});

reagent.ratom.make_reaction = (function reagent$ratom$make_reaction(var_args){
var args__12669__auto__ = [];
var len__12666__auto___309 = arguments.length;
var i__12667__auto___310 = (0);
while(true){
if((i__12667__auto___310 < len__12666__auto___309)){
args__12669__auto__.push((arguments[i__12667__auto___310]));

var G__311 = (i__12667__auto___310 + (1));
i__12667__auto___310 = G__311;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic = (function (f,p__306){
var map__307 = p__306;
var map__307__$1 = (((((!((map__307 == null))))?(((((map__307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__307):map__307);
var auto_run = cljs.core.get.call(null,map__307__$1,new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)));
var on_set = cljs.core.get.call(null,map__307__$1,new cljs.core.Keyword(null,"on-set","on-set",(-140953470)));
var on_dispose = cljs.core.get.call(null,map__307__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)));
var reaction = reagent.ratom.__GT_Reaction.call(null,f,null,true,false,null,null,null,null);
reaction._set_opts(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"auto-run","auto-run",(1958400437)),auto_run,new cljs.core.Keyword(null,"on-set","on-set",(-140953470)),on_set,new cljs.core.Keyword(null,"on-dispose","on-dispose",(2105306360)),on_dispose], null));

return reaction;
}));

(reagent.ratom.make_reaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.ratom.make_reaction.cljs$lang$applyTo = (function (seq304){
var G__305 = cljs.core.first.call(null,seq304);
var seq304__$1 = cljs.core.next.call(null,seq304);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__305,seq304__$1);
}));

reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null);
/**
 * Evaluates `f` and returns the result.  If `f` calls `deref` on any ratoms,
 * creates a new Reaction that watches those atoms and calls `run` whenever
 * any of those watched ratoms change.  Also, the new reaction is added to
 * list of 'watches' of each of the ratoms. The `run` parameter is a function
 * that should expect one argument.  It is passed `obj` when run.  The `opts`
 * are any options accepted by a Reaction and will be set on the newly created
 * Reaction. Sets the newly created Reaction to the `key` on `obj`.
 */
reagent.ratom.run_in_reaction = (function reagent$ratom$run_in_reaction(f,obj,key,run,opts){
var r = reagent.ratom.temp_reaction;
var res = reagent.ratom.deref_capture.call(null,f,r);
if((r.watching == null)){
} else {
(reagent.ratom.temp_reaction = reagent.ratom.make_reaction.call(null,null));

r._set_opts(opts);

(r.f = f);

(r.auto_run = (function (){
return run.call(null,obj);
}));

goog.object.set(obj,key,r);
}

return res;
});
reagent.ratom.check_derefs = (function reagent$ratom$check_derefs(f){
var ctx = ({});
var res = reagent.ratom.in_context.call(null,ctx,f);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [res,(!((ctx.captured == null)))], null);
});

/**
* @constructor
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IPrintWithWriter}
*/
reagent.ratom.Wrapper = (function (state,callback,changed,watches){
this.state = state;
this.callback = callback;
this.changed = changed;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = -2145353728;
});
(reagent.ratom.Wrapper.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(((self__.changed) && ((!((reagent.ratom._STAR_ratom_context_STAR_ == null)))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","derefing stale wrap: ",cljs.core.pr_str.call(null,this$__$1)].join(''));
} else {
}
} else {
}


return self__.state;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,newval){
var self__ = this;
var this$__$1 = this;
var oldval = self__.state;
(self__.changed = true);

(self__.state = newval);

if((!((self__.watches == null)))){
reagent.ratom.notify_w.call(null,this$__$1,oldval,newval);
} else {
}

self__.callback.call(null,newval);

return newval;
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (a,f){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (a,f,x){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (a,f,x,y){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,f.call(null,self__.state,x,y));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (a,f,x,y,more){
var self__ = this;
var a__$1 = this;
return cljs.core._reset_BANG_.call(null,a__$1,cljs.core.apply.call(null,f,self__.state,x,y,more));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (((other instanceof reagent.ratom.Wrapper)) && ((!(self__.changed))) && (cljs.core.not.call(null,other.changed)) && (cljs.core._EQ_.call(null,self__.state,other.state)) && (cljs.core._EQ_.call(null,self__.callback,other.callback)));
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,old,new$){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.notify_w.call(null,this$__$1,old,new$);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.add_w.call(null,this$__$1,key,f);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return reagent.ratom.remove_w.call(null,this$__$1,key);
}));

(reagent.ratom.Wrapper.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,w,opts){
var self__ = this;
var a__$1 = this;
return reagent.ratom.pr_atom.call(null,a__$1,w,opts,"Wrapper",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"val","val",(128701612)),cljs.core._deref.call(null,a__$1)], null));
}));

(reagent.ratom.Wrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"state","state",(-348086572),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"callback","callback",(935395299),null),cljs.core.with_meta(new cljs.core.Symbol(null,"changed","changed",(-2083710852),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",(1367433992),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(reagent.ratom.Wrapper.cljs$lang$type = true);

(reagent.ratom.Wrapper.cljs$lang$ctorStr = "reagent.ratom/Wrapper");

(reagent.ratom.Wrapper.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.ratom/Wrapper");
}));

/**
 * Positional factory function for reagent.ratom/Wrapper.
 */
reagent.ratom.__GT_Wrapper = (function reagent$ratom$__GT_Wrapper(state,callback,changed,watches){
return (new reagent.ratom.Wrapper(state,callback,changed,watches));
});

reagent.ratom.make_wrapper = (function reagent$ratom$make_wrapper(value,callback_fn,args){
return reagent.ratom.__GT_Wrapper.call(null,value,reagent.impl.util.make_partial_fn.call(null,callback_fn,args),false,null);
});

//# sourceURL=reagent/ratom.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9yYXRvbS5qcyIsInNvdXJjZXMiOlsicmF0b20uY2xqcyJdLCJsaW5lQ291bnQiOjE2MjEsIm1hcHBpbmdzIjoiO0FBU0EsQUFBQSxBQUNBLEdBQUEsUUFBQUEsb0NBQUFDLDBDQUFBQztBQUFBO0FBQUEsQUFBQSxzQkFBQSx0QkFBa0JDOztBQUNsQixHQUFBLFFBQUFILG9DQUFBQywwQ0FBQUc7QUFBQTtBQUFBLEFBQUEsMkJBQUEsM0JBQW1CQzs7QUFDbkIsR0FBQSxRQUFBTCxvQ0FBQUMsMENBQUFLO0FBQUE7QUFBQSxBQUFBLEFBQW1CQyx5QkFBUyx5QkFBQSx6QkFBQ0M7O0FBRTdCLGdDQUFBLGhDQUFlQztBQUFmLEFBQ0UsVUFBQSw0Q0FBQSwzQ0FBT0M7O0FBS1Qsd0JBQUEseEJBQU1DO0FBQU4sQUFDRSxPQUFBQywwQkFBSUw7O0FBRU4sd0JBQUEseEJBQWVNLHdEQUFTQztBQUF4QixBQUNFLEdBQUksTUFBQSxMQUFNQTtBQUFWOztBQUFlLE9BQVNBOzs7QUFFMUIsdUJBQUEsdkJBQWdCQyxzREFBUUQsRUFBRUU7QUFBMUIsQUFDRSxJQUFNQyxNQUFJLEFBQUNKLGdDQUFRQztBQUFuQixBQUNFLEdBQUssQ0FBSUcsUUFBSSxBQUFDSixnQ0FBUUc7QUFDakIsUUFBQSxKQUFPRTs7QUFBUCxBQUNFLElBQUFDLG9CQUFJLENBQUlELE1BQUVEO0FBQVYsQUFBQSxHQUFBRTtBQUFBQTs7QUFDSSxHQUFJLENBQVksQ0FBTUwsRUFBRUksUUFBRyxDQUFNRixFQUFFRTtBQUNqQyxhQUFPLEtBQUEsSkFBS0E7Ozs7QUFEZDs7Ozs7O0FBSFg7OztBQU9KOzs7OzsyQkFBQSwzQkFBT0UsOERBSUpDLElBQUlDO0FBSlAsQUFLRSxJQUFBQywwQ0FBVWI7SUFBVmMsMENBQTBCSDtBQUExQixBQUFBLDJDQUFBRywxQ0FBVWQ7O0FBQVYsSUFBQSxBQUNFLE9BQUNZO1VBREgsQUFBQSwyQ0FBQUMsMUNBQVViOztBQUdaOzs7Ozs7Ozs4QkFBQSw5QkFBT2Usb0VBT0pILEVBQU9JO0FBUFYsQUFRRSxjQUFBLGJBQU0sQUFBWUE7O0FBQ2xCLEFBQUEsQUFDRSxDQUFNLEFBQW1CQSxvQkFBRyxDQUFNckIsMkJBQVcsNEJBQUEsM0JBQUtBOzs7QUFDcEQsSUFBTXNCLE1BQUksQUFBQ1AsbUNBQVdNLEVBQUVKO0lBQ2xCTSxJQUFFLEFBQVlGO0FBRHBCLEFBRUUsa0JBQUEsakJBQU0sQUFBVUE7O0FBRWhCLEdBQVUsQUFBQ1gsK0JBQU9hLEVBQUUsQUFBWUY7QUFBaEM7QUFBQSxBQUNFLEFBQW1CQSxtQkFBRUU7OztBQUN2QkQ7O0FBRUo7Ozs7OzJDQUFBLDNDQUFPRSw4RkFJSkM7QUFKSCxBQUtFLElBQUFDLHFCQUFjckI7QUFBZCxBQUFBLEdBQUEsQ0FBQXFCLHNCQUFBO0FBQUE7O0FBQUEsUUFBQUEsSkFBWUw7QUFBWixBQUNFLElBQU1FLElBQUUsQUFBWUY7QUFBcEIsQUFDRSxHQUFJLE1BQUEsTEFBTUU7QUFDUixRQUFNLEFBQVlGLGFBQUcsQ0FBT0k7O0FBQzVCLE9BQU9GLE9BQUVFOzs7O0FBRWpCLDhCQUFBLDlCQUFPRSxvRUFBZUMsSUFBSUM7QUFBMUIsQUFDRSxHQUFNL0I7QUFBTixBQUNFLEFBQUNnQywrQkFBTTVCLHVCQUFTNkIsaUJBQUUsQ0FBRyxBQUFDQywwQkFBTUgsUUFBSyxBQUFDRywwQkFBTUo7O0FBRDFDOztBQUVBQzs7QUFFRixzQkFBQSx0QkFBT0ksb0RBQVlDLE1BQUtDLElBQUlsQjtBQUE1QixBQUNFLElBQU1tQixJQUFFLEFBQVdGO0FBQW5CLEFBQ0UsQ0FBTSxBQUFXQSxnQkFBTSxBQUFDUCxzQ0FBY1MsRUFBRSxBQUFDQywwQkFBTUQsRUFBRUQsSUFBSWxCOztBQUNyRCwyQkFBQSxuQkFBTSxBQUFjaUI7O0FBRXhCLHlCQUFBLHpCQUFPSSwwREFBZUosTUFBS0M7QUFBM0IsQUFDRSxJQUFNQyxJQUFFLEFBQVdGO0FBQW5CLEFBQ0UsQ0FBTSxBQUFXQSxnQkFBTSxBQUFDUCxzQ0FBY1MsRUFBRSxBQUFDRywyQkFBT0gsRUFBRUQ7O0FBQ2xELDJCQUFBLG5CQUFNLEFBQWNEOztBQUV4Qix5QkFBQSx6QkFBT00sMERBQWVOLE1BQUtOLElBQUlDO0FBQS9CLEFBQ0UsSUFBTU8sSUFBRSxBQUFjRjtJQUNoQk8sSUFBRSxFQUFJLE1BQUEsTEFBTUwsZ0NBR0gsOEJBQUEsV0FBQU0sYUFBQUMsYUFBQUMsbkVBQUNDLHBCQUNELENBQU0sQUFBY1g7QUFEcEIsQUFBWSxJQUFBWSxTQUFBSjtBQUFBLEFBQUEsQUFBQUksWUFBQUg7O0FBQUEsQUFBQUcsWUFBQUY7O0FBQUFFO01BRFosQUFBV1osSEFDWCxtQkFFTEU7SUFDSnhCLE1BQUksQUFBUzZCO0FBUG5CLEFBUUUsUUFBQSxKQUFPNUI7O0FBQVAsQUFDRSxHQUFNLENBQUdBLElBQUVEO0FBQVgsQUFDRSxJQUFNbUMsUUFBRSxDQUFNTixFQUFFNUI7SUFDVkksUUFBRSxDQUFNd0IsRUFBRSxLQUFBLEpBQUs1QjtBQURyQixBQUVFLEFBQUNJLGdCQUFFOEIsTUFBRWIsTUFBS04sSUFBSUM7O0FBQ2hCLGFBQU8sQ0FBQSxNQUFLaEI7Ozs7QUFKZDs7Ozs7QUFNTix3QkFBQSx4QkFBT21DLHdEQUFTUCxFQUFFUSxPQUFPQyxLQUFLQyxFQUFFQztBQUFoQyxBQUNFLEFBQUNDLDJCQUFPSixPQUFPLENBQUEsd0VBQUEsSEFBOEJFOztBQUM3QyxBQUFDRyw4QkFBVSxpQkFBQUMsMENBQVVsRDtJQUFWbUQsMENBQUE7QUFBQSxBQUFBLDJDQUFBQSwxQ0FBVW5EOztBQUFWLElBQUEsQUFBK0IrQztVQUEvQixBQUFBLDJDQUFBRywxQ0FBVWxEO01BQXdCNEMsT0FBT0M7O0FBQ3BELHlDQUFBLGxDQUFDRywyQkFBT0o7O0FBS1YsR0FBQSxRQUFBdEQsb0NBQUFDLDBDQUFBNkQ7QUFBQTtBQUFBLEFBQUEsMEJBQUEsMUJBQW1CQzs7QUFFbkIsNEJBQUEsNUJBQU9DLGdFQUFhdEM7QUFBcEIsQUFDRSxHQUFNLDRCQUFBLDNCQUFNcUM7QUFBWixBQUNFLENBQU1BLDBCQUFVOztBQUNoQixBQUFDRTs7QUFGSDs7QUFHQSxPQUFPRiw2QkFBVXJDOztBQUVuQiw0QkFBQSw1QkFBTXdDO0FBQU4sQUFDRTtBQUFBLEFBQ0UsSUFBTUMsSUFBRUo7QUFBUixBQUNFLEdBQVUsTUFBQSxMQUFNSTtBQUFoQjs7QUFBQSxBQUNFLDJCQUFBLDFCQUFNSjs7QUFDTixJQUFBSyx1QkFBWSxBQUFTRDtBQUFyQixBQUFBLFlBQUEsUkFBVWpEOztBQUFWLEFBQUEsR0FBQSxTQUFBa0QsUkFBVWxEO0FBQVYsQUFDRSxBQUFjLENBQU1pRCxFQUFFakQ7O0FBRHhCLGFBQUEsU0FBQSxSQUFVQTs7OztBQUFWOzs7O0FBRUE7Ozs7O0FBRVIsQ0FBTW1ELG9DQUFrQkg7QUFLeEIsQUFBQTtBQUFBOzs7OEJBQUEsOUJBQWFJOztBQUFiLEFBRUEsQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFBLENBQUEsQUFBQSw2REFBQUMsN0RBQVNJOztBQUFULENBQUEsQUFBQSw4RUFBQSw5RUFBU0EseUZBbUNNN0IsRUFBRUwsRUFBRWM7O0FBbkNuQixBQUFBLFlBQUEsUkFtQ2VUO0FBbkNmLEFBbUN5QixvREFBQSxRQUFBLDJDQUFBLGhHQUFDTyxnQ0FBUVAsTUFBRUwsRUFBRWMsNEdBQW1CLEFBQUNvQywyQkFBTzdDOzs7QUFuQ2pFLENBQUEsQUFBQSw4REFBQSw5REFBUzZCLHlFQWdDQ2M7O0FBaENWLEFBQUEsWUFBQSxSQWdDVUE7QUFoQ1YsQUFnQ2FYOzs7QUFoQ2IsQ0FBQSxBQUFBLDhEQUFBLDlEQUFTSCx5RUEyQ0NwQzs7QUEzQ1YsQUFBQSxnQkFBQSxaQTJDVUE7QUEzQ1YsQUEyQ2dCLE9BQUNxRCxZQUFZckQ7OztBQTNDN0IsQ0FBQSxBQUFBLGdFQUFBLGhFQUFTb0MsMkVBS0VNLEVBQUVDOztBQUxiLEFBQUEsWUFBQSxSQUtXRDtBQUxYLEFBS29CLFFBQVlBLFVBQUVDOzs7QUFMbEMsQ0FBQSxBQUFBLHNFQUFBLHRFQUFTUCxpRkFhRzdCLEVBQUVxQzs7QUFiZCxBQUFBLFlBQUEsUkFhWXJDO0FBYlosQUFjSSxHQUFVLHFCQUFBLHBCQUFNaUM7QUFBaEI7QUFBQSxBQUNFLG9CQUFRLEFBQUNBLDJCQUFVSTtBQUFuQjtBQUFBLEFBQUEsTUFBQSxLQUFBQyxNQUFBLENBQUEsa0JBQUEscUNBQUEsS0FBQTs7OztBQUNGLElBQU1DLFlBQVVSO0FBQWhCLEFBQ0UsQ0FBTUEsZUFBTU07O0FBQ1osR0FBVSxtQkFBQSxsQkFBTUg7QUFBaEI7QUFBQSxBQUNFLEFBQUNuQyxpQ0FBU0MsTUFBRXVDLFVBQVVGOzs7QUFDeEJBOzs7QUFwQk4sQ0FBQSxBQUFBLG9FQUFBLHBFQUFTUiwrRUF1QkU3QixFQUFFeEI7O0FBdkJiLEFBQUEsWUFBQSxSQXVCV3dCO0FBdkJYLEFBdUJ5QixPQUFDd0MsaUNBQVF4QyxNQUFFLEFBQUN4QixZQUFFdUQ7OztBQXZCdkMsQ0FBQSxBQUFBLG9FQUFBLHBFQUFTRiwrRUF3QkU3QixFQUFFeEIsRUFBRVI7O0FBeEJmLEFBQUEsWUFBQSxSQXdCV2dDO0FBeEJYLEFBd0J5QixPQUFDd0MsaUNBQVF4QyxNQUFFLEFBQUN4QixZQUFFdUQsYUFBTS9EOzs7QUF4QjdDLENBQUEsQUFBQSxvRUFBQSxwRUFBUzZELCtFQXlCRTdCLEVBQUV4QixFQUFFUixFQUFFRTs7QUF6QmpCLEFBQUEsWUFBQSxSQXlCVzhCO0FBekJYLEFBeUJ5QixPQUFDd0MsaUNBQVF4QyxNQUFFLEFBQUN4QixZQUFFdUQsYUFBTS9ELEVBQUVFOzs7QUF6Qi9DLENBQUEsQUFBQSxvRUFBQSxwRUFBUzJELCtFQTBCRTdCLEVBQUV4QixFQUFFUixFQUFFRSxFQUFFdUU7O0FBMUJuQixBQUFBLFlBQUEsUkEwQld6QztBQTFCWCxBQTBCeUIsT0FBQ3dDLGlDQUFReEMsTUFBRSxBQUFDMEMsMEJBQU1sRSxFQUFFdUQsYUFBTS9ELEVBQUVFLEVBQUV1RTs7O0FBMUJ2RCxDQUFBLEFBQUEsNkVBQUEsN0VBQVNaLHdGQXNDV3BDLE1BQUtOLElBQUlDOztBQXRDN0IsQUFBQSxnQkFBQSxaQXNDb0JLO0FBdENwQixBQXNDa0MsT0FBQ00saUNBQVNOLFVBQUtOLElBQUlDOzs7QUF0Q3JELENBQUEsQUFBQSx3RUFBQSx4RUFBU3lDLG1GQXVDTXBDLE1BQUtDLElBQUlsQjs7QUF2Q3hCLEFBQUEsZ0JBQUEsWkF1Q2VpQjtBQXZDZixBQXVDa0MsT0FBQ0QsOEJBQU1DLFVBQUtDLElBQUlsQjs7O0FBdkNsRCxDQUFBLEFBQUEsMkVBQUEsM0VBQVNxRCxzRkF3Q1NwQyxNQUFLQzs7QUF4Q3ZCLEFBQUEsZ0JBQUEsWkF3Q2tCRDtBQXhDbEIsQUF3Q2tDLE9BQUNJLGlDQUFTSixVQUFLQzs7O0FBeENqRCxDQUFBLEFBQUEsdUVBQUEsdkVBQVNtQyxrRkE2Qk1jLEVBQUVDOztBQTdCakIsQUFBQSxZQUFBLFJBNkJlRDtBQTdCZixBQTZCMkIsWUFBQWQsb0JBQVFFLGFBQU1hLFNBQVNYLGlCQUFVQzs7O0FBN0I1RCxDQUFBLEFBQUEsZ0VBQUEsaEVBQVNMLDJFQVFFcEM7O0FBUlgsQUFBQSxnQkFBQSxaQVFXQTtBQVJYLEFBU0ksQUFBQ1YsbURBQXNCVTs7QUFDdkJzQzs7O0FBVkosQ0FBQSwrQkFBQSwvQkFBU0Y7QUFBVCxBQUFBLEFBQUE7OztBQUFBLENBQUEscUNBQUEsckNBQVNBOztBQUFULENBQUEsd0NBQUEseENBQVNBOztBQUFULENBQUEsNkNBQUEsV0FBQUgsb0JBQUFDLHNCQUFBQyxsR0FBU0M7QUFBVCxBQUFBLE9BQUFqQiwyQkFBQWUsc0JBQUE7OztBQUFBOzs7MkJBQUEsM0JBQVNHLDhEQUFpQkMsTUFBTUMsS0FBS0MsVUFBb0JDO0FBQXpELEFBQUEsWUFBQUwsb0JBQTBCRSxNQUFNQyxLQUFLQyxVQUFvQkM7OztBQUFoREwsQUE2Q1QsQUFBQTs7O3FCQUFBLDZCQUFBa0IsbERBQU1FO0FBQU4sQUFBQSxJQUFBRCxTQUFBLEFBQUE7QUFBQSxBQUFBLFFBQUFBO0tBQUE7QUFBQSxPQUFBQyxpREFBQSxDQUFBLFVBQUE7Ozs7QUFBQSxJQUFBQywwQkFBQTtBQUFBLEFBQUEsSUFBQUMseUJBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsdUJBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHVCQUFBRDtBQUFBLEFBQUEsQUFBQUQsNkJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxhQUFBLENBQUFBLHVCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSwwQkFBQSxBQUFBSCw4QkFBQSxLQUFBLElBQUEsNURBZy9GMEQwSTtBQWgvRjFELEFBQUEsT0FBQTNJLHdEQUFBLENBQUEsVUFBQSxNQUFBSTs7Ozs7QUFBQSxDQUFBLG1EQUFBLG5EQUFNSiw4REFFRmpGO0FBRkosQUFFTyw0Q0FBQSxLQUFBLEtBQUEsL0NBQUM4RCxtQ0FBUTlEOzs7QUFGaEIsQUFBQSxDQUFBLDBEQUFBLGFBQUFzRix2RUFBTUwscUVBR0ZqRjtBQUhKLEFBQUEsSUFBQXVGLFdBQUFEO0lBQUFDLGVBQUEsRUFBQSxFQUFBLEdBQUEsQ0FBQUEsWUFBQSxTQUFBLEVBQUEsRUFBQSxDQUFBLEFBQUFBLCtDQUFBLFdBQUEsQ0FBQTlCLGdDQUFBLEFBQUE4Qiw2QkFBQSxLQUFBLE9BQUEsUUFBQSxBQUFBYiwwQkFBQWMsbUJBQUFELFVBQUFBO1dBQUEsQUFBQUUsd0JBQUFGLGFBQUEsNUNBR2dCdkI7Z0JBSGhCLEFBQUF5Qix3QkFBQUYsYUFBQSxqREFHcUJ0QjtBQUhyQixBQUdrQywyREFBQSxwREFBQ0gsbUNBQVE5RCxFQUFFZ0UsS0FBS0M7OztBQUhsRDtBQUFBLENBQUEsdUNBQUEsV0FBQXlCLGxEQUFNVDtBQUFOLEFBQUEsSUFBQVUsU0FBQSwwQkFBQUQsMUJBODJGZ0R3RjtJQTkyRmhEeEYsYUFBQSx5QkFBQUEsekJBKzJGa0R5RjtBQS8yRmxELEFBQUEsSUFBQXZGLHNCQUFBO0FBQUEsQUFBQSxPQUFBQSx5REFBQUQsT0FBQUQ7OztBQUFBLENBQUEsNkNBQUEsN0NBQU1UOztBQUFOLEFBUUEsQUFBQSxBQUVBLGdDQUFBLGhDQUFPWSx3RUFBaUJyRixFQUFPMkQsRUFBRTdCLEVBQU8vQixJQUFJdUY7QUFBNUMsQUFDRSxJQUFNQyxJQUFFLEFBQXFCNUI7SUFDdkI0QixRQUFFLGVBQUEsYkFBSSxNQUFBLExBQU1BLCtDQUFNQTtJQUNsQm5GLElBQUUsa0JBQUEsbEJBQUNtRixnQkFBRXpEO0FBRlgsQUFHRSxHQUNFLEdBQUEsTUFBQSxMQUFPMUI7QUFBRyxPQUFDaUUsMkJBQU9qRTs7QUFEcEIsR0FFRSw0Q0FBQSwzQ0FBTWhCO0FBQWlCLE9BQUNZOztBQUYxQixBQUdRLElBQU1JLFFBQUUsd0NBQUEseENBQUNvRixzQ0FDQXhGLHFFQUFjLFdBQUtSO0FBQUwsQUFDRSxHQUFNWDtBQUFOLEFBQVksQUFBQ2dDLCtCQUFNNUIsdUJBQVN3Rzs7QUFBNUI7O0FBQ0EsWUFBTSxBQUFxQjlCLFJBQUdRO0lBQUFBLFlBQzVCLEFBQUM3QywyQkFBTzZDLE1BQUVyQztBQURaLEFBRUUsQ0FBTSxBQUFxQjZCLHNCQUFHUTs7QUFDaEMsR0FBTSxHQUFBLFFBQUEsUEFBT3BFO0FBQWIsQUFDRSxnQkFBQSxmQUFNLEFBQVlBOztBQURwQjs7QUFFQSxHQUFNLEdBQUEsWUFBQSxYQUFPdUY7QUFBYixBQUNFLE9BQUNBLGtCQUFROUY7O0FBRFg7OztJQUVuQjJDLElBQUUsQUFBQ2tDLDJCQUFPakU7QUFWaEIsQUFXRSxDQUFNLEFBQXFCdUQsc0JBQUcsQUFBQ3ZDLDBCQUFNbUUsTUFBRXpELEVBQUUxQjs7QUFDekMsR0FBTXZCO0FBQU4sQUFBWSxBQUFDZ0MsK0JBQU01Qix1QkFBU3lHOztBQUE1Qjs7QUFDQSxHQUFNLEdBQUEsUUFBQSxQQUFPM0Y7QUFBYixBQUNFLENBQU0sQUFBWUEsZUFBS0s7O0FBRHpCOztBQUVBK0I7Ozs7O0FBRWQsQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQUEsQ0FBQSxBQUFBLDZEQUFBYyw3REFBUzBDOztBQUFULENBQUEsQUFBQSxnRUFBQSxoRUFBU0EsMkVBSUUxRTs7QUFKWCxBQUFBLGdCQUFBLFpBSVdBO0FBSlgsQUFLSSxJQUFBOEUscUJBQVlEO0FBQVosQUFBQSxHQUFBLENBQUFDLHNCQUFBO0FBRUUsK0NBQUEseENBQUNWO0FBQUQsQUFBa0IsT0FBQ25CLDBCQUFNbEUsU0FBRTZGO2tDQUEzQiwvQkFBaUM3RixTQUFFNkYsWUFBSzVFOztBQUYxQyxRQUFBOEUsSkFBVTNGO0FBQVYsQUFDRSxPQUFDaUUsMkJBQU9qRTs7OztBQU5kLENBQUEsQUFBQSxnRUFBQSxoRUFBU3VGLDJFQVVFeEIsRUFBT1A7O0FBVmxCLEFBQUEsWUFBQSxSQVVXTztBQVZYLEFBV0ksU0FBSyxrQkFBV3dCLGpCQUFNL0IsMkNBQ2pCLEFBQUNvQyx5QkFBRWhHLFNBQUUsQUFBSzRELGNBQ1YsQUFBQ29DLHlCQUFFSCxZQUFLLEFBQVFqQzs7O0FBYnpCLENBQUEsQUFBQSw4REFBQSw5REFBUytCLHlFQWdCQ3hCOztBQWhCVixBQUFBLFlBQUEsUkFnQlVBO0FBaEJWLEFBZ0JhLGdDQUFBLHpCQUFDOEIsNEdBQU1qRyxTQUFFNkY7OztBQWhCdEIsQ0FBQSxBQUFBLDhFQUFBLDlFQUFTRix5RkFtQk1uRSxFQUFFTCxFQUFFYzs7QUFuQm5CLEFBQUEsWUFBQSxSQW1CZVQ7QUFuQmYsQUFtQnlCLG9EQUFBLFFBQUEsMkNBQUEsc0ZBQUEsdExBQUNPLGdDQUFRUCxNQUFFTCxFQUFFYyw0R0FBbUIsQUFBQ29DLDJCQUFPN0MseURBQ1Z4Qjs7O0FBcEJ2RCxDQUFBLCtCQUFBLC9CQUFTMkY7QUFBVCxBQUFBLEFBQUE7OztBQUFBLENBQUEscUNBQUEsckNBQVNBOztBQUFULENBQUEsd0NBQUEseENBQVNBOztBQUFULENBQUEsNkNBQUEsV0FBQXpDLG9CQUFBQyxzQkFBQUMsbEdBQVN1QztBQUFULEFBQUEsT0FBQXZELDJCQUFBZSxzQkFBQTs7O0FBQUE7OzsyQkFBQSwzQkFBU3lDLDhEQUFPNUYsRUFBRTZGLEtBQWVDO0FBQWpDLEFBQUEsWUFBQUgsb0JBQWdCM0YsRUFBRTZGLEtBQWVDOzs7QUFBeEJILEFBc0JULDJCQUFBLDNCQUFNTyw4REFBWWxHLEVBQUU2RjtBQUFwQixBQUNFLFlBQUFGLDJCQUFBLFBBQVEzRixFQUFFNkY7O0FBRVosaUNBQUEsakNBQU1NLDBFQUFhbkcsRUFBRTZGO0FBQXJCLEFBQ0UsSUFBTU8sSUFBRSxBQUFDRixtQ0FBV2xHLEVBQUU2RjtJQUNoQnpGLElBQUUsc0NBQUEsdENBQUNvRjtBQUFELEFBQWdCLE9BQUNuQiwyQkFBTytCO0dBQXhCLCtEQUFBO0FBRFIsQUFBQSxBQUFBOUcsMEJBR0djOztBQUNEQTs7QUFFSixBQUFBLHNCQUFBLDhCQUFBbUUscERBQU1nQztBQUFOLEFBQUEsSUFBQUYsc0JBQUE7QUFBQSxBQUFBLElBQUExQix5QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyx1QkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEsdUJBQUFEO0FBQUEsQUFBQSxBQUFBMEIseUJBQUEsQ0FBQSxVQUFBekI7O0FBQUEsYUFBQSxDQUFBQSx1QkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQTBCLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFELDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBMjJGc0QrRztBQTMyRnRELEFBQUEsT0FBQTdHLHlEQUFBLENBQUEsVUFBQSxNQUFBRDs7O0FBQUEsQUFBQSxDQUFBLDJEQUFBLDNEQUFNQyxzRUFBT3ZHLEVBQUk2RjtBQUFqQixBQUFBLEdBQ1MsQUFBQ2EsK0JBQUsxRztBQURmO0FBQUEsQUFBQSxNQUFBLEtBQUE4RCxNQUFBOzs7QUFFRSxPQUFDb0MsbUNBQVdsRyxFQUFFNkY7OztBQUZoQixDQUFBLDhDQUFBLDlDQUFNVTs7QUFBTjtBQUFBLENBQUEsd0NBQUEsV0FBQUMsbkRBQU1EO0FBQU4sQUFBQSxJQUFBRSxTQUFBLDBCQUFBRCwxQkE0eUZnRGtFO0lBNXlGaERsRSxhQUFBLHlCQUFBQSx6QkE2eUZrRG1FO0FBN3lGbEQsQUFBQSxJQUFBdkYsc0JBQUE7QUFBQSxBQUFBLE9BQUFBLHlEQUFBcUIsT0FBQUQ7OztBQUFBLEFBSUEsQUFBQSw0QkFBQSxvQ0FBQWpDLGhFQUFNb0M7QUFBTixBQUFBLElBQUFOLHNCQUFBO0FBQUEsQUFBQSxJQUFBMUIseUJBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsdUJBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHVCQUFBRDtBQUFBLEFBQUEsQUFBQTBCLHlCQUFBLENBQUEsVUFBQXpCOztBQUFBLGFBQUEsQ0FBQUEsdUJBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUEwQix3QkFBQSxFQUFBLENBQUEsTUFBQSxBQUFBRCw2QkFBQSxBQUFBLDBCQUFBLEFBQUFBLDBCQUFBLEtBQUEsSUFBQSxPQUFBLC9EQXUyRnNEK0c7QUF2MkZ0RCxBQUFBLE9BQUF6RywrREFBQSxDQUFBLFVBQUEsTUFBQUw7OztBQUFBLEFBQUEsQ0FBQSxpRUFBQSxqRUFBTUssNEVBQVEzRyxFQUFJNkY7QUFBbEIsQUFBQSxHQUNTLEFBQUNhLCtCQUFLMUc7QUFEZjtBQUFBLEFBQUEsTUFBQSxLQUFBOEQsTUFBQTs7O0FBRUUsT0FBQ3FDLHlDQUFZbkcsRUFBRTZGOzs7QUFGakIsQ0FBQSxvREFBQSxwREFBTWM7O0FBQU47QUFBQSxDQUFBLDhDQUFBLFdBQUFDLHpEQUFNRDtBQUFOLEFBQUEsSUFBQUUsU0FBQSwwQkFBQUQsMUJBd3lGZ0Q4RDtJQXh5RmhEOUQsYUFBQSx5QkFBQUEsekJBeXlGa0QrRDtBQXp5RmxELEFBQUEsSUFBQXZGLHNCQUFBO0FBQUEsQUFBQSxPQUFBQSx5REFBQXlCLE9BQUFEOzs7QUFBQSxBQU1BLEFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBQSxDQUFBLEFBQUEsd0NBQUEseENBQVNFOztBQUFULEFBQUEsWUFBQSxSQVlVN0Y7QUFaVixBQWFJLElBQUFpRywwQ0FBVTlIO0lBQVYrSCwwQ0FBQTtBQUFBLEFBQUEsMkNBQUFBLDFDQUFVL0g7O0FBQVYsSUFBQSxBQUNFLE9BQUNpRiwyQkFBT3BEO1VBRFYsQUFBQSwyQ0FBQWlHLDFDQUFVOUg7OztBQWJkLENBQUEsQUFBQSw2Q0FBQSw3Q0FBUzBILHdEQWdCV00sU0FBU0M7O0FBaEI3QixBQUFBLFlBQUEsUkFnQmVwRztBQWhCZixBQWlCSSxHQUFVLENBQVltRyxhQUFTQztBQUEvQjs7QUFBQSxBQUNFLENBQU05RCxlQUFNOEQ7O0FBQ1osR0FBTSxHQUFBLG1CQUFBLGxCQUFPM0Q7QUFBYixBQUNFLE9BQUNuQyxpQ0FBU04sTUFBS21HLFNBQVNDOztBQUQxQjs7Ozs7QUFuQk4sQ0FBQSxBQUFBLCtEQUFBcEUsL0RBQVM2RDs7QUFBVCxDQUFBLEFBQUEsZ0ZBQUEsaEZBQVNBLDJGQW9ETXRGLEVBQUVMLEVBQUVjOztBQXBEbkIsQUFBQSxZQUFBLFJBb0RlVDtBQXBEZixBQW9EeUIsb0RBQUEsVUFBQSwyQ0FBQSxzRkFBQSx4TEFBQ08sZ0NBQVFQLE1BQUVMLEVBQUVjLDhHQUFxQixBQUFDb0MsMkJBQU83Qyw4REFDUHlGOzs7QUFyRDVELENBQUEsQUFBQSxnRUFBQSxoRUFBU0gsMkVBNkRDM0M7O0FBN0RWLEFBQUEsWUFBQSxSQTZEVUE7QUE3RFYsQUE2RGEsZ0NBQUEsekJBQUM4Qiw0R0FBTWUsYUFBTUM7OztBQTdEMUIsQ0FBQSxBQUFBLGtFQUFBLGxFQUFTSCw2RUFNRTNDLEVBQU9QOztBQU5sQixBQUFBLFlBQUEsUkFNV087QUFOWCxBQU9JLFNBQUssa0JBQVcyQyxqQkFBUWxELDZDQUNuQixBQUFDb0MseUJBQUVpQixZQUFLLEFBQVFyRCxpQkFDaEIsQUFBQ29DLHlCQUFFZ0IsYUFBTSxBQUFTcEQ7OztBQVQzQixDQUFBLEFBQUEsd0VBQUEseEVBQVNrRCxtRkFtQ0c3RixNQUFLNEM7O0FBbkNqQixBQUFBLGdCQUFBLFpBbUNZNUM7QUFuQ1osQUFvQ0ksSUFBTW1HLFdBQVM3RDtBQUFmLEFBQ0UsQUFBYXRDLHFCQUFLbUcsU0FBU3ZEOztBQUMzQixHQUFJLEVBQUEsR0FBQSxpQkFBQSxTQUFBLEVBQUEsRUFBQSxDQUFBLG1EQUFBLGNBQUEsQ0FBQVosZ0NBQUEsbUNBQUEsS0FBQSxFQUFBLEVBQUEsbURBQUEsQUFBQXFFLDJFQUFBLFFBQUEsQUFBQUEsdkNBQVlDLG1GQUFBQSw5VkFBT1AsOEJBQUFBLGtHQUFBQSw0Q0FBQUEsZ0hBQUFBLG1GQUFBQTtBQUNyQixHQUFJLHFDQUFBLHJDQUFDaEIseUJBQUVpQjtBQUNMLEFBQUNRLGdDQUFPVCxhQUFNbkQ7O0FBQ2QsQUFBQ2hELCtCQUFNbUcsYUFBTVUsbUJBQVNULFlBQUtwRDs7O0FBQzdCLEFBQUNtRCx1QkFBTUMsWUFBS3BEOzs7QUFDZEE7OztBQTNDTixDQUFBLEFBQUEsc0VBQUEsdEVBQVNpRCxpRkE4Q0V0RixFQUFFeEI7O0FBOUNiLEFBQUEsWUFBQSxSQThDV3dCO0FBOUNYLEFBOEN5QixPQUFDd0MsaUNBQVF4QyxNQUFFLEFBQUN4QixZQUFFLEFBQVF3Qjs7O0FBOUMvQyxDQUFBLEFBQUEsc0VBQUEsdEVBQVNzRixpRkErQ0V0RixFQUFFeEIsRUFBRVI7O0FBL0NmLEFBQUEsWUFBQSxSQStDV2dDO0FBL0NYLEFBK0N5QixPQUFDd0MsaUNBQVF4QyxNQUFFLEFBQUN4QixZQUFFLEFBQVF3QixjQUFHaEM7OztBQS9DbEQsQ0FBQSxBQUFBLHNFQUFBLHRFQUFTc0gsaUZBZ0RFdEYsRUFBRXhCLEVBQUVSLEVBQUVFOztBQWhEakIsQUFBQSxZQUFBLFJBZ0RXOEI7QUFoRFgsQUFnRHlCLE9BQUN3QyxpQ0FBUXhDLE1BQUUsQUFBQ3hCLFlBQUUsQUFBUXdCLGNBQUdoQyxFQUFFRTs7O0FBaERwRCxDQUFBLEFBQUEsc0VBQUEsdEVBQVNvSCxpRkFpREV0RixFQUFFeEIsRUFBRVIsRUFBRUUsRUFBRXVFOztBQWpEbkIsQUFBQSxZQUFBLFJBaURXekM7QUFqRFgsQUFpRHlCLE9BQUN3QyxpQ0FBUXhDLE1BQUUsQUFBQzBDLDBCQUFNbEUsRUFBRSxBQUFRd0IsY0FBR2hDLEVBQUVFLEVBQUV1RTs7O0FBakQ1RCxDQUFBLEFBQUEsK0VBQUEsL0VBQVM2QywwRkF3RFc3RixNQUFLTixJQUFJQzs7QUF4RDdCLEFBQUEsZ0JBQUEsWkF3RG9CSztBQXhEcEIsQUF3RGtDLE9BQUNNLGlDQUFTTixVQUFLTixJQUFJQzs7O0FBeERyRCxDQUFBLEFBQUEsMEVBQUEsMUVBQVNrRyxxRkF5RE03RixNQUFLQyxJQUFJbEI7O0FBekR4QixBQUFBLGdCQUFBLFpBeURlaUI7QUF6RGYsQUF5RGtDLE9BQUNELDhCQUFNQyxVQUFLQyxJQUFJbEI7OztBQXpEbEQsQ0FBQSxBQUFBLDZFQUFBLDdFQUFTOEcsd0ZBMERTN0YsTUFBS0M7O0FBMUR2QixBQUFBLGdCQUFBLFpBMERrQkQ7QUExRGxCLEFBMERrQyxPQUFDSSxpQ0FBU0osVUFBS0M7OztBQTFEakQsQ0FBQSxBQUFBLGtFQUFBLGxFQUFTNEYsNkVBdUJFN0Y7O0FBdkJYLEFBQUEsZ0JBQUEsWkF1QldBO0FBdkJYLEFBd0JJLElBQU1tRyxXQUFTN0Q7SUFDVDhELFdBQVMsaUJBQUF0QixxQkFBWUQ7QUFBWixBQUFBLEdBQUEsQ0FBQUMsc0JBQUE7QUFFRSxJQUFNL0YsSUFBRSx1WUFBQSxyWUFBSSxFQUFBLEdBQUEsaUJBQUEsU0FBQSxFQUFBLEVBQUEsQ0FBQSxtREFBQSxjQUFBLENBQUFpRCxnQ0FBQSxtQ0FBQSxLQUFBLEVBQUEsRUFBQSxtREFBQSxBQUFBcUUsMkVBQUEsUUFBQSxBQUFBQSx2Q0FBWUMsbUZBQUFBLDlWQUFPUCw4QkFBQUEsa0dBQUFBLDRDQUFBQSxnSEFBQUEsbUZBQUFBO0FBQXZCLEFBQ0csa0NBQUEsQUFBQTFILDNCQUFDa0kscURBQVFSLGNBQU1DO0dBRGxCO0FBQUEsQUFFRyxPQUFDRCx1QkFBTUM7O0FBRmxCLEFBR0Usb0ZBQUEsN0VBQUM1Qix3Q0FBZ0JyRixFQUFFZ0gsYUFBTUMsWUFBS2hHOztBQUxsQyxRQUFBOEUsSkFBVTNGO0FBQVYsQUFDRSxPQUFDaUUsMkJBQU9qRTs7O0FBRnpCLEFBT0UsQUFBYWEscUJBQUttRyxTQUFTQzs7QUFDM0JBOzs7QUFoQ04sQ0FBQSxpQ0FBQSxqQ0FBU1A7QUFBVCxBQUFBLEFBQUE7OztBQUFBLENBQUEsdUNBQUEsdkNBQVNBOztBQUFULENBQUEsMENBQUEsMUNBQVNBOztBQUFULENBQUEsK0NBQUEsV0FBQTVELG9CQUFBQyxzQkFBQUMscEdBQVMwRDtBQUFULEFBQUEsT0FBQTFFLDJCQUFBZSxzQkFBQTs7O0FBQUE7Ozs2QkFBQSw3QkFBUzRELGtFQUFTQyxNQUFNQyxLQUFlbkIsU0FDWHZDLE1BQWdCRztBQUQ1QyxBQUFBLFlBQUFvRCxzQkFBa0JFLE1BQU1DLEtBQWVuQixTQUNYdkMsTUFBZ0JHOzs7QUFEbkNvRCxBQStEVCx1QkFBQSx2QkFBTWEsc0RBQ0VDLElBQUlYO0FBRFosQUFFRSxHQUFRLGlCQUFBcEgsb0JBQUksRUFBQSxHQUFBLFFBQUEsU0FBQSxFQUFBLEVBQUEsV0FBQSxDQUFBb0QsZ0NBQUEscUNBQUEsS0FBQSxFQUFBLEVBQUEseUNBQUEsQUFBQXFFLDZFQUFBLFFBQUEsQUFBQUEsekNBQVl0RSxxRkFBQUEseFJBQWM0RSxnRUFBQUEsOENBQUFBLGlIQUFBQSxxRkFBQUE7QUFBOUIsQUFBQSxHQUFBL0g7QUFBQUE7O0FBQ0ksU0FBSyxBQUFDNkcsK0JBQUtrQixVQUNOLEdBQUssQUFBQ0Msa0NBQVFEOzs7QUFGL0I7QUFBQSxBQUFBLE1BQUEsS0FBQTlELE1BQUEsQ0FBQSxrTEFBQSxLQUFBLHJLQUdRLENBQUEsa0ZBQUEsaENBQ0ssQUFBQ2dFLDJCQUFPRix1Q0FFUixBQUFDRSwyQkFBT2I7OztBQUNyQixxREFBQSxLQUFBLEtBQUEseERBQUNGLHFDQUFVYSxJQUFJWDs7QUFLakIsaUNBQUEsakNBQU1jLDBFQUFrQjVGO0FBQXhCLEFBQ0UsSUFBQTFCLHFCQUFjLEFBQVcwQjtBQUF6QixBQUFBLEdBQUEsQ0FBQTFCLHNCQUFBO0FBQUE7O0FBQUEsUUFBQUEsSkFBWVQ7QUFBWixBQUNFLE9BQUNBOzs7QUFFTCxnQ0FBQSxoQ0FBTWdJLHdFQUFpQjlHO0FBQXZCLEFBQ0UsSUFBQTZFLHFCQUFZM0c7QUFBWixBQUFBLEdBQUEsQ0FBQTJHLHNCQUFBO0FBRUU7O0FBRkYsUUFBQUEsSkFBVXpGO0FBQVYsQUFDRSxxRUFBQSw5REFBQytFLHdDQUFnQjRDLGdCQUFNM0gsRUFBRVksU0FBUTZHOzs7QUFNckMsQUFBQTtBQUFBOzs7NEJBQUEsNUJBQWFVOztBQUFiLDhCQUFBLDlCQUNHTCxvRUFBVW5IO0FBRGIsQUFBQSxHQUFBLEVBQUEsR0FBQSxVQUFBLGFBQUEsR0FBQSxDQUFBLHlEQUFBLG5GQUNhQSwwQkFBQUE7QUFEYixPQUNhQSxzREFBQUE7O0FBRGIsSUFBQWlILG1CQUFBLEVBQUEsVUFBQSxPQUFBLGhCQUNhakgscUJBQUFBO0lBRGJrSCxtQkFBQSxDQUFBQyw0QkFBQSxBQUFBQyxZQUFBSDtBQUFBLEFBQUEsR0FBQSxHQUFBLENBQUFDLG9CQUFBO0FBQUEsT0FBQUEsMkJBQ2FsSDs7QUFEYixJQUFBcUgsbUJBQUEsQ0FBQUYsNEJBQUE7QUFBQSxBQUFBLEdBQUEsR0FBQSxDQUFBRSxvQkFBQTtBQUFBLE9BQUFBLDJCQUNhckg7O0FBRGIsTUFBQSxBQUFBc0gscUNBQUEsdUJBQ2F0SDs7Ozs7O0FBRGIscUNBQUEsckNBRUd1SCxrRkFBaUJ2SCxNQUFLakI7QUFGekIsQUFBQSxHQUFBLEVBQUEsR0FBQSxVQUFBLGFBQUEsR0FBQSxDQUFBLGdFQUFBLDFGQUVvQmlCLDBCQUFBQTtBQUZwQixPQUVvQkEsNkRBQUFBLE1BQUtqQjs7QUFGekIsSUFBQWtJLG1CQUFBLEVBQUEsVUFBQSxPQUFBLGhCQUVvQmpILHFCQUFBQTtJQUZwQmtILG1CQUFBLENBQUFLLG1DQUFBLEFBQUFILFlBQUFIO0FBQUEsQUFBQSxHQUFBLEdBQUEsQ0FBQUMsb0JBQUE7QUFBQSxPQUFBQSwyQkFFb0JsSCxNQUFLakI7O0FBRnpCLElBQUFzSSxtQkFBQSxDQUFBRSxtQ0FBQTtBQUFBLEFBQUEsR0FBQSxHQUFBLENBQUFGLG9CQUFBO0FBQUEsT0FBQUEsMkJBRW9CckgsTUFBS2pCOztBQUZ6QixNQUFBLEFBQUF1SSxxQ0FBQSw4QkFFb0J0SDs7Ozs7O0FBRnBCLEFBSUEsQUFBQTtBQUFBOzs7MEJBQUEsMUJBQWEwSDs7QUFBYixvQkFBQSxwQkFDR0QsZ0RBQUt6SDtBQURSLEFBQUEsR0FBQSxFQUFBLEdBQUEsVUFBQSxhQUFBLEdBQUEsQ0FBQSw2Q0FBQSx2RUFDUUEsMEJBQUFBO0FBRFIsT0FDUUEsMENBQUFBOztBQURSLElBQUFpSCxtQkFBQSxFQUFBLFVBQUEsT0FBQSxoQkFDUWpILHFCQUFBQTtJQURSa0gsbUJBQUEsQ0FBQU8sa0JBQUEsQUFBQUwsWUFBQUg7QUFBQSxBQUFBLEdBQUEsR0FBQSxDQUFBQyxvQkFBQTtBQUFBLE9BQUFBLDJCQUNRbEg7O0FBRFIsSUFBQXFILG1CQUFBLENBQUFJLGtCQUFBO0FBQUEsQUFBQSxHQUFBLEdBQUEsQ0FBQUosb0JBQUE7QUFBQSxPQUFBQSwyQkFDUXJIOztBQURSLE1BQUEsQUFBQXNILHFDQUFBLGdCQUNRdEg7Ozs7OztBQURSLEFBR0EsdUNBQUEsdkNBQU8ySCxzRkFBNkIzSCxNQUFLNEgsT0FBT2xJLElBQUlDO0FBQXBELEFBQ0UsT0FBaUJLLHFCQUFLNEgsT0FBT2xJLElBQUlDOztBQVduQyxBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBQSxDQUFBLEFBQUEsNENBQUEsNUNBQVNvSTs7QUFBVCxBQUFBLFlBQUEsUkFpQ2EvSDtBQWpDYixBQWtDSSxJQUFBMkksMENBQVV4SztJQUFWeUssMENBQUE7QUFBQSxBQUFBLDJDQUFBQSwxQ0FBVXpLOztBQUFWLElBQUEsQUFDRSxPQUFDaUYsMkJBQU9wRDtVQURWLEFBQUEsMkNBQUEySSwxQ0FBVXhLOzs7QUFsQ2QsQ0FBQSxBQUFBLGtEQUFBLGxEQUFTNEosNkRBcUNlSCxPQUFPYyxPQUFPRjs7QUFyQ3RDLEFBQUEsWUFBQSxSQXFDbUJ4STtBQXJDbkIsQUFzQ0ksR0FBVSxFQUFJLENBQVkwSSxXQUFPRixhQUNuQlA7QUFEZDs7QUFBQSxBQUVFLEdBQUksb0JBQUEsbkJBQU1HO0FBQ1IsQUFDRSx1QkFBQSx0QkFBTUg7O0FBQ04sT0FBQ3hHLG9DQUFZekI7O0FBQ2YsR0FBSSxBQUFPb0k7QUFDVCxrQkFBQSxYQUFPcEk7O0FBQ1AsT0FBQ29JLDBCQUFTcEk7Ozs7OztBQTlDcEIsQ0FBQSxBQUFBLG9EQUFBLHBEQUFTK0gsK0RBZ0RpQnhJOztBQWhEMUIsQUFBQSxZQUFBLFJBZ0RxQlM7QUFoRHJCLEFBaURJLElBQU1MLE9BQUksQUFBQ2tKLHdCQUFJdEo7SUFDVEcsTUFBSSxBQUFDbUosd0JBQUlWO0FBRGYsQUFFRSxDQUFNQSxrQkFBUzVJOztBQUNmLElBQUF1SixlQUFBLEFBQUFDLHdCQUFVLEFBQUNZLGlDQUFhaEssS0FBSUQ7SUFBNUJzSixpQkFBQTtJQUFBQyxpQkFBQTtJQUFBQyxhQUFBOztBQUFBLEFBQUEsR0FBQSxBQUFBLENBQUFBLGFBQUFEO0FBQUEsWUFBQSxBQUFBRSx5QkFBQUgsZUFBQUUsaERBQVFoSjtBQUFSLEFBQUEsQUFDRSxBQUFDMEosK0JBQVcxSixNQUFFRixNQUFLMkg7O0FBRHJCO0FBQUEsYUFBQW1CO2FBQUFFO2FBQUFDO2FBQUEsQ0FBQUMsYUFBQTs7Ozs7OztBQUFBLElBQUFFLHlCQUFBLEFBQUFMLHdCQUFBRDtBQUFBLEFBQUEsR0FBQU07QUFBQSxBQUFBLElBQUFOLG1CQUFBTTtBQUFBLEFBQUEsR0FBQSxBQUFBQyx1Q0FBQVA7QUFBQSxJQUFBUSx1QkFBQSxBQUFBQyxnQ0FBQVQ7QUFBQSxBQUFBLGFBQUEsQUFBQVUsK0JBQUFWO2FBQUFRO2FBQUEsQUFBQXhKLDBCQUFBd0o7YUFBQTs7Ozs7OztBQUFBLFlBQUEsQUFBQUcsMEJBQUFYLGxDQUFRNUk7QUFBUixBQUFBLEFBQ0UsQUFBQzBKLCtCQUFXMUosTUFBRUYsTUFBSzJIOztBQURyQjtBQUFBLGFBQUEsQUFBQStCLHlCQUFBWjthQUFBO2FBQUE7YUFBQTs7Ozs7Ozs7QUFBQTs7Ozs7QUFFQSxJQUFBZSxXQUFBLEFBQUFkLHdCQUFVLEFBQUNZLGlDQUFhakssSUFBSUM7SUFBNUJtSyxhQUFBO0lBQUFDLGFBQUE7SUFBQUMsU0FBQTs7QUFBQSxBQUFBLEdBQUEsQUFBQSxDQUFBQSxTQUFBRDtBQUFBLFFBQUEsQUFBQVoseUJBQUFXLFdBQUFFLHhDQUFROUo7QUFBUixBQUFBLEFBQ0UsQUFBQytKLGtDQUFjL0osRUFBRUY7O0FBRG5CO0FBQUEsYUFBQTZKO2FBQUFDO2FBQUFDO2FBQUEsQ0FBQUMsU0FBQTs7Ozs7OztBQUFBLElBQUFaLHFCQUFBLEFBQUFMLHdCQUFBYztBQUFBLEFBQUEsR0FBQVQ7QUFBQSxBQUFBLElBQUFTLGVBQUFUO0FBQUEsQUFBQSxHQUFBLEFBQUFDLHVDQUFBUTtBQUFBLElBQUFQLG1CQUFBLEFBQUFDLGdDQUFBTTtBQUFBLEFBQUEsYUFBQSxBQUFBTCwrQkFBQUs7YUFBQVA7YUFBQSxBQUFBeEosMEJBQUF3SjthQUFBOzs7Ozs7O0FBQUEsUUFBQSxBQUFBRywwQkFBQUksOUJBQVEzSjtBQUFSLEFBQUEsQUFDRSxBQUFDK0osa0NBQWMvSixFQUFFRjs7QUFEbkI7QUFBQSxhQUFBLEFBQUEwSix5QkFBQUc7YUFBQTthQUFBO2FBQUE7Ozs7Ozs7O0FBQUE7Ozs7Ozs7QUF0RE4sQ0FBQSxBQUFBLCtDQUFBLC9DQUFTOUI7O0FBQVQsQUFBQSxZQUFBLFJBeURnQi9IO0FBekRoQixBQTBESSxHQUFNLEVBQUtpSSx5QkFBTyxHQUFBLG9CQUFBLG5CQUFPRTtBQUF6QixBQUNFLGtCQUFBLFhBQU9uSTs7QUFEVDs7OztBQTFESixDQUFBLEFBQUEsZ0RBQUEsaERBQVMrSCwyREE2RGFoSjs7QUE3RHRCLEFBQUEsWUFBQSxSQTZEaUJpQjtBQTdEakIsQUE4REksSUFBQSxBQUNFLGlCQUFBLGhCQUFNcUk7O0FBQ04sT0FBQ25KLHNDQUFjSCxNQUFFaUI7Y0FGbkIsUUFBQWtLLEpBR2tCQztBQUhsQixBQUlJLENBQU03SCxlQUFNNkg7O0FBQ1osQ0FBTTlCLGdCQUFPOEI7O0FBQ2IsOEJBQUEsdEJBQU1sQzs7O0FBcEVkLENBQUEsQUFBQSx3Q0FBQSx4Q0FBU0YsbURBc0VLcUM7O0FBdEVkLEFBQUEsWUFBQSxSQXNFU3BLO0FBdEVULEFBdUVJLElBQU1tRyxXQUFTN0Q7SUFDVGxELE1BQUksa0JBQUlnTCxPQUNGLEFBQWVwSyxtQkFBS2pCLFVBQ3BCLEFBQUNHLHNDQUFjSCxTQUFFaUI7QUFIN0IsQUFJRSxHQUFVa0k7QUFBVjtBQUFBLEFBQ0UsQ0FBTTVGLGVBQU1sRDs7QUFHWixHQUFVLEVBQUksbUJBQUEsbEJBQU1xRCw2QkFDTixBQUFDc0MseUJBQUVvQixTQUFTL0c7QUFEMUI7QUFBQSxBQUVFLEFBQUNrQixpQ0FBU04sTUFBS21HLFNBQVMvRzs7OztBQUM1QkE7OztBQWxGTixDQUFBLEFBQUEsNkNBQUEsV0FBQXlJLHhEQUFTRTs7QUFBVCxBQUFBLElBQUFELFdBQUFEO0lBQUFDLGVBQUEsRUFBQSxFQUFBLEdBQUEsQ0FBQUEsWUFBQSxTQUFBLEVBQUEsRUFBQSxDQUFBLEFBQUFBLCtDQUFBLFdBQUEsQ0FBQTlGLGdDQUFBLEFBQUE4Riw2QkFBQSxLQUFBLE9BQUEsUUFBQSxBQUFBN0UsMEJBQUFjLG1CQUFBK0QsVUFBQUE7bUJBQUEsQUFBQTlELHdCQUFBOEQsYUFBQSxwREFvRjJCTTthQXBGM0IsQUFBQXBFLHdCQUFBOEQsYUFBQSw5Q0FvRm9DdUM7aUJBcEZwQyxBQUFBckcsd0JBQUE4RCxhQUFBLGxEQW9GMkN3QztlQXBGM0MsQUFBQXRHLHdCQUFBOEQsYUFBQSxoREFvRnNEeUM7QUFwRnRELEFBQUEsWUFBQSxSQW9GY3ZLO0FBcEZkLEFBcUZJLEdBQU0sR0FBQSxpQkFBQSxoQkFBT29JO0FBQWIsQUFDRSxDQUFNLEFBQVlwSSxpQkFBTW9JOztBQUQxQjs7QUFFQSxHQUFNLEdBQUEsV0FBQSxWQUFPaUM7QUFBYixBQUNFLENBQU0sQUFBVXJLLGVBQU1xSzs7QUFEeEI7O0FBRUEsR0FBTSxHQUFBLGVBQUEsZEFBT0M7QUFBYixBQUNFLENBQU0sQUFBY3RLLG1CQUFNc0s7O0FBRDVCOztBQUVBLEdBQU0sR0FBQSxhQUFBLFpBQU9DO0FBQWIsQUFDRSxRQUFNLEFBQVl2Syx1QkFBTXVLOztBQUQxQjs7OztBQTNGSixDQUFBLEFBQUEsZ0VBQUF2SSxoRUFBUytGOztBQUFULENBQUEsQUFBQSxpRkFBQSxqRkFBU0EsNEZBZ0pNeEgsRUFBRUwsRUFBRWM7O0FBaEpuQixBQUFBLFlBQUEsUkFnSmVUO0FBaEpmLEFBZ0p5QixvREFBQSxXQUFBLDJDQUFBLG5HQUFDTyxnQ0FBUVAsTUFBRUwsRUFBRWMsK0dBQXNCLEFBQUNvQywyQkFBTzdDOzs7QUFoSnBFLENBQUEsQUFBQSxpRUFBQSxqRUFBU3dILDRFQW1KQy9IOztBQW5KVixBQUFBLGdCQUFBLFpBbUpVQTtBQW5KVixBQW1KZ0IsT0FBQ3FELFlBQVlyRDs7O0FBbko3QixDQUFBLEFBQUEsbUVBQUEsbkVBQVMrSCw4RUE2SUVyRixFQUFFQzs7QUE3SWIsQUFBQSxZQUFBLFJBNklXRDtBQTdJWCxBQTZJb0IsUUFBWUEsVUFBRUM7OztBQTdJbEMsQ0FBQSxBQUFBLDhEQUFBWCw5REFBUytGOztBQUFULENBQUEsQUFBQSxtRkFBQSxuRkFBU0EsOEZBdUhJL0g7O0FBdkhiLEFBQUEsZ0JBQUEsWkF1SGFBO0FBdkhiLEFBd0hJLElBQU1pQixJQUFFcUI7SUFDRm1JLEtBQUd0QztBQURULEFBRUUsbUJBQUEsbEJBQU1BOztBQUNOLGdCQUFBLGZBQU03Rjs7QUFDTixtQkFBQSxsQkFBTThGOztBQUNOLHVCQUFBLHRCQUFNSDs7QUFDTixJQUFBeUMsZUFBQSxBQUFBM0Isd0JBQVUsQUFBQ0Ysd0JBQUk0QjtJQUFmRSxpQkFBQTtJQUFBQyxpQkFBQTtJQUFBQyxhQUFBOztBQUFBLEFBQUEsR0FBQSxBQUFBLENBQUFBLGFBQUFEO0FBQUEsWUFBQSxBQUFBekIseUJBQUF3QixlQUFBRSxoREFBUTNLO0FBQVIsQUFBQSxBQUNFLEFBQUMrSixrQ0FBYy9KLE1BQUVGOztBQURuQjtBQUFBLGFBQUEwSzthQUFBQzthQUFBQzthQUFBLENBQUFDLGFBQUE7Ozs7Ozs7QUFBQSxJQUFBekIseUJBQUEsQUFBQUwsd0JBQUEyQjtBQUFBLEFBQUEsR0FBQXRCO0FBQUEsQUFBQSxJQUFBc0IsbUJBQUF0QjtBQUFBLEFBQUEsR0FBQSxBQUFBQyx1Q0FBQXFCO0FBQUEsSUFBQXBCLHVCQUFBLEFBQUFDLGdDQUFBbUI7QUFBQSxBQUFBLGFBQUEsQUFBQWxCLCtCQUFBa0I7YUFBQXBCO2FBQUEsQUFBQXhKLDBCQUFBd0o7YUFBQTs7Ozs7OztBQUFBLFlBQUEsQUFBQUcsMEJBQUFpQixsQ0FBUXhLO0FBQVIsQUFBQSxBQUNFLEFBQUMrSixrQ0FBYy9KLE1BQUVGOztBQURuQjtBQUFBLGFBQUEsQUFBQTBKLHlCQUFBZ0I7YUFBQTthQUFBO2FBQUE7Ozs7Ozs7O0FBQUE7Ozs7O0FBRUEsR0FBTSxHQUFBLHlCQUFBLHhCQUFPLEFBQWMxSztBQUEzQixBQUNFLEFBQWFBLHFCQUFLaUI7O0FBRHBCOztBQUVBLElBQUF6QixxQkFBYyxBQUFrQlE7QUFBaEMsQUFBQSxHQUFBLENBQUFSLHNCQUFBO0FBQUE7O0FBQUEsUUFBQUEsSkFBWWU7QUFBWixBQUNFLElBQUFzQixtQkFBWSxBQUFTdEI7QUFBckIsQUFBQSxRQUFBLEpBQVU1Qjs7QUFBVixBQUFBLEdBQUEsS0FBQWtELEpBQVVsRDtBQUFWLEFBQ0UsQUFBQyxDQUFNNEIsRUFBRTVCLGNBQUdxQjs7QUFEZCxhQUFBLEtBQUEsSkFBVXJCOzs7O0FBQVY7Ozs7Ozs7QUFuSVIsQ0FBQSxBQUFBLDBGQUFBLDFGQUFTb0oscUdBc0lXL0gsTUFBS2pCOztBQXRJekIsQUFBQSxnQkFBQSxaQXNJb0JpQjtBQXRJcEIsQUF3SUksSUFBQThFLHFCQUFZLEFBQWtCOUU7QUFBOUIsQUFBQSxHQUFBLENBQUE4RSxzQkFBQTtBQUVFLFFBQU0sQUFBa0I5RSwyQkFBTSxDQUFPakI7O0FBRnZDLFFBQUErRixKQUFVdkU7QUFBVixBQUNFLE9BQU9BLE9BQUV4Qjs7OztBQXpJZixDQUFBLEFBQUEseUVBQUEsekVBQVNnSixvRkFrQkd4SCxFQUFFaUk7O0FBbEJkLEFBQUEsWUFBQSxSQWtCWWpJO0FBbEJaLEFBbUJJLEdBQVEsQUFBQ2tJLDhCQUFJLEFBQVVsSTtBQUF2QjtBQUFBLEFBQUEsTUFBQSxLQUFBc0MsTUFBQSxDQUFBLGtCQUFBLCtDQUFBLEtBQUE7OztBQUNBLElBQU02RixTQUFPcEc7QUFBYixBQUNFLENBQU1BLGVBQU1rRzs7QUFDWixBQUFTakksYUFBRW1JLE9BQU9GOztBQUNsQixBQUFDbEksaUNBQVNDLE1BQUVtSSxPQUFPRjs7QUFDbkJBOzs7QUF4Qk4sQ0FBQSxBQUFBLHVFQUFBLHZFQUFTVCxrRkEyQkV4SCxFQUFFeEI7O0FBM0JiLEFBQUEsWUFBQSxSQTJCV3dCO0FBM0JYLEFBMkJ5QixPQUFDd0MsaUNBQVF4QyxNQUFFLEFBQUN4QixnQkFBRSxBQUFXd0I7OztBQTNCbEQsQ0FBQSxBQUFBLHVFQUFBLHZFQUFTd0gsa0ZBNEJFeEgsRUFBRXhCLE1BQUVSOztBQTVCZixBQUFBLFlBQUEsUkE0QldnQztBQTVCWCxBQTRCeUIsT0FBQ3dDLGlDQUFReEMsTUFBRSxBQUFDeEIsZ0JBQUUsQUFBV3dCLGlCQUFHaEM7OztBQTVCckQsQ0FBQSxBQUFBLHVFQUFBLHZFQUFTd0osa0ZBNkJFeEgsRUFBRXhCLE1BQUVSLEVBQUVFOztBQTdCakIsQUFBQSxZQUFBLFJBNkJXOEI7QUE3QlgsQUE2QnlCLE9BQUN3QyxpQ0FBUXhDLE1BQUUsQUFBQ3hCLGdCQUFFLEFBQVd3QixpQkFBR2hDLEVBQUVFOzs7QUE3QnZELENBQUEsQUFBQSx1RUFBQSx2RUFBU3NKLGtGQThCRXhILEVBQUV4QixNQUFFUixFQUFFRSxFQUFFdUU7O0FBOUJuQixBQUFBLFlBQUEsUkE4Qld6QztBQTlCWCxBQThCeUIsT0FBQ3dDLGlDQUFReEMsTUFBRSxBQUFDMEMsMEJBQU1sRSxNQUFFLEFBQVd3QixpQkFBR2hDLEVBQUVFLEVBQUV1RTs7O0FBOUIvRCxDQUFBLEFBQUEsNERBQUFoQiw1REFBUytGOztBQUFULENBQUEsQUFBQSx1RUFBQSx2RUFBU0Esa0ZBK0ZEL0g7O0FBL0ZSLEFBQUEsZ0JBQUEsWkErRlFBO0FBL0ZSLEFBZ0dJLEFBQUMyQjs7QUFDRCxzQkFBQSxmQUFPM0I7OztBQWpHWCxDQUFBLEFBQUEsZ0ZBQUEsaEZBQVMrSCwyRkFPVy9ILE1BQUtOLElBQUlDOztBQVA3QixBQUFBLGdCQUFBLFpBT29CSztBQVBwQixBQU9rQyxPQUFDTSxpQ0FBU04sVUFBS04sSUFBSUM7OztBQVByRCxDQUFBLEFBQUEsMkVBQUEsM0VBQVNvSSxzRkFRTS9ILE1BQUtDLElBQUlsQjs7QUFSeEIsQUFBQSxnQkFBQSxaQVFlaUI7QUFSZixBQVFrQyxPQUFDRCw4QkFBTUMsVUFBS0MsSUFBSWxCOzs7QUFSbEQsQ0FBQSxBQUFBLDhFQUFBLDlFQUFTZ0oseUZBU1MvSCxNQUFLQzs7QUFUdkIsQUFBQSxnQkFBQSxaQVNrQkQ7QUFUbEIsQUFVSSxJQUFNc0ksWUFBVSxBQUFDQyxpQ0FBTzlGO0FBQXhCLEFBQ0UsQUFBQ3JDLGlDQUFTSixVQUFLQzs7QUFDZixHQUFNLEVBQUssR0FBS3FJLGlCQUNMLEFBQUNDLGlDQUFPOUYscUJBQ1Isb0JBQUEsbkJBQU0yRjtBQUZqQixBQUdFLE9BQUNqQixzQ0FBU25IOztBQUhaOzs7O0FBWk4sQ0FBQSxBQUFBLG1FQUFBLG5FQUFTK0gsOEVBb0dFL0g7O0FBcEdYLEFBQUEsZ0JBQUEsWkFvR1dBO0FBcEdYLEFBcUdJLElBQUFSLHlCQUFjNkk7QUFBZCxBQUFBLEdBQUEsQ0FBQTdJLDBCQUFBO0FBQUE7QUFBQSxZQUFBQSxSQUFZMks7QUFBWixBQUNFLE1BQU9BOzs7QUFDVCxJQUFNSyxtQkFBYSw0Q0FBQSwzQ0FBTXJNO0FBQXpCLEFBQ0UsR0FBTXFNO0FBQU4sQUFDRSxBQUFDN0k7O0FBREg7O0FBRUEsR0FBSSxFQUFLNkksc0JBQWEsb0JBQUEsbkJBQU1wQztBQUMxQixHQUFNSDtBQUFOLEFBQ0UsSUFBTTlCLGVBQVM3RDtBQUFmLEFBQ0UsQ0FBTUEsZUFBTSxBQUFDdkQ7O0FBQ2IsR0FBVSxFQUFJLG1CQUFBLGxCQUFNMEQsNkJBQVMsQUFBQ3NDLHlCQUFFb0IsYUFBUzdEO0FBQXpDO0FBQUEsQUFDRSxBQUFDaEMsaUNBQVNOLFVBQUttRyxhQUFTN0Q7OztBQUo5Qjs7QUFLQSxBQUNFLEFBQUNoRCxtREFBc0JVOztBQUN2QixHQUFNaUk7QUFBTixBQUNFLGVBQUEsZkFBT2pJOztBQURUOzs7QUFFTnNDOzs7QUFwSEosQ0FBQSxrQ0FBQSxsQ0FBU3lGO0FBQVQsQUFBQSxBQUFBOzs7QUFBQSxDQUFBLHdDQUFBLHhDQUFTQTs7QUFBVCxDQUFBLDJDQUFBLDNDQUFTQTs7QUFBVCxDQUFBLGdEQUFBLFdBQUE5RixvQkFBQUMsc0JBQUFDLHJHQUFTNEY7QUFBVCxBQUFBLE9BQUE1RywyQkFBQWUsc0JBQUE7OztBQUFBOzs7OEJBQUEsOUJBQVM4RixvRUFBVWpKLEVBQVl1RCxNQUF5QjJGLGFBQWdCQyxlQUMzQ0MsU0FBbUIxRixRQUFrQjJGLFNBQ3JDQztBQUY3QixBQUFBLFlBQUFOLHVCQUFtQmhKLEVBQVl1RCxNQUF5QjJGLGFBQWdCQyxlQUMzQ0MsU0FBbUIxRixRQUFrQjJGLFNBQ3JDQzs7O0FBRnBCTixBQXNKVCxBQUFBLDhCQUFBLHNDQUFBekUscEVBQU1pQjtBQUFOLEFBQUEsSUFBQWEsc0JBQUE7QUFBQSxBQUFBLElBQUExQix5QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyx1QkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEsdUJBQUFEO0FBQUEsQUFBQSxBQUFBMEIseUJBQUEsQ0FBQSxVQUFBekI7O0FBQUEsYUFBQSxDQUFBQSx1QkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQTBCLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFELDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBK2xGc0QrRztBQS9sRnRELEFBQUEsT0FBQTVILGlFQUFBLENBQUEsVUFBQSxNQUFBYzs7O0FBQUEsQUFBQSxDQUFBLG1FQUFBLGFBQUF5RixoRkFBTXZHLDhFQUFleEY7QUFBckIsQUFBQSxJQUFBZ00sV0FBQUQ7SUFBQUMsZUFBQSxFQUFBLEVBQUEsR0FBQSxDQUFBQSxZQUFBLFNBQUEsRUFBQSxFQUFBLENBQUEsQUFBQUEsK0NBQUEsV0FBQSxDQUFBL0ksZ0NBQUEsQUFBQStJLDZCQUFBLEtBQUEsT0FBQSxRQUFBLEFBQUE5SCwwQkFBQWMsbUJBQUFnSCxVQUFBQTtlQUFBLEFBQUEvRyx3QkFBQStHLGFBQUEsaERBQWlDM0M7YUFBakMsQUFBQXBFLHdCQUFBK0csYUFBQSw5Q0FBMENWO2lCQUExQyxBQUFBckcsd0JBQUErRyxhQUFBLGxEQUFpRFQ7QUFBakQsQUFDRSxJQUFNekYsV0FBUyx3Q0FBQSxLQUFBLEtBQUEsTUFBQSxLQUFBLEtBQUEsS0FBQSx2RUFBQ21ELHNDQUFXako7QUFBM0IsQUFDRSxtQkFBQSwyQ0FBQSx3RUFBQSxrRUFBQSx4TUFBWThGLDZIQUFvQnVELG9FQUNGaUMsMEVBQ0lDOztBQUNsQ3pGOzs7QUFMSixDQUFBLHNEQUFBLHREQUFNTjs7QUFBTjtBQUFBLENBQUEsZ0RBQUEsV0FBQXlHLDNEQUFNekc7QUFBTixBQUFBLElBQUEwRyxTQUFBLDBCQUFBRCwxQkFnaUZnRHZCO0lBaGlGaER1QixhQUFBLHlCQUFBQSx6QkFpaUZrRHRCO0FBamlGbEQsQUFBQSxJQUFBdkYsc0JBQUE7QUFBQSxBQUFBLE9BQUFBLHlEQUFBOEcsT0FBQUQ7OztBQUFBLEFBU0EsQUFBZUUsOEJBQWMsc0NBQUEsdENBQUMzRztBQUc5Qjs7Ozs7Ozs7O2dDQUFBLGhDQUFNNEcsd0VBUUhwTSxFQUFFRCxJQUFJbUIsSUFBSW1MLElBQUlwSztBQVJqQixBQVNFLElBQU03QixJQUFFK0w7SUFDRjlMLE1BQUksQUFBQ0Ysc0NBQWNILEVBQUVJO0FBRDNCLEFBRUUsR0FBVSxlQUFBLGRBQU0sQUFBWUE7QUFBNUI7QUFBQSxBQUNFLENBQU0rTCw4QkFBYyxzQ0FBQSx0Q0FBQzNHOztBQUNyQixBQUFZcEYsWUFBRTZCOztBQUNkLENBQU0sQUFBSzdCLE1BQUdKOztBQUNkLGNBQUEsYkFBTSxBQUFZSTtBQUFsQixBQUFzQixPQUFDaU0sY0FBSXRNOzs7QUFDM0IsQUFBQ3VNLGdCQUFRdk0sSUFBSW1CLElBQUlkOzs7QUFDbkJDOztBQUVKLDZCQUFBLDdCQUFNa00sa0VBQWN2TTtBQUFwQixBQUNFLElBQU13TSxNQUFJO0lBQ0puTSxNQUFJLEFBQUNQLG1DQUFXME0sSUFBSXhNO0FBRDFCLEFBQUEsMEZBRUdLLElBQUksR0FBQSxpQkFBQSxoQkFBTyxBQUFZbU07O0FBSzVCLEFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFBLENBQUEsQUFBQSxrRUFBQSxsRUFBU0MsNkVBTUV4TDs7QUFOWCxBQUFBLGdCQUFBLFpBTVdBO0FBTlgsQUFPSSxBQUFBLEFBQ0UsR0FBTSxFQUFLMkwsb0JBQVEsR0FBQSw0Q0FBQSwzQ0FBT3hOO0FBQTFCLEFBQ0Usb0JBQUEsQUFBQXlOO0FBQUEsQUFBQSxBQUFBLGtCQUFBLEFBQUFBLHdCQUFBLEFBQUFBLDRCQUFBQyxjQUFBLENBQUEsWUFBQSx3QkFDTSxBQUFDaEYsMkJBQU83Rzs7QUFEZDs7QUFERjs7O0FBR0ZzQzs7O0FBWEosQ0FBQSxBQUFBLHdFQUFBLHhFQUFTa0osbUZBY0d4TCxNQUFLd0k7O0FBZGpCLEFBQUEsZ0JBQUEsWkFjWXhJO0FBZFosQUFlSSxJQUFNMEksU0FBT3BHO0FBQWIsQUFDRSxrQkFBQSxqQkFBTXFKOztBQUNOLENBQU1ySixlQUFNa0c7O0FBQ1osR0FBTSxHQUFBLG1CQUFBLGxCQUFPL0Y7QUFBYixBQUNFLEFBQUNuQyxpQ0FBU04sVUFBSzBJLE9BQU9GOztBQUR4Qjs7QUFFQSxBQUFDa0QsMEJBQVNsRDs7QUFDVkE7OztBQXJCTixDQUFBLEFBQUEsc0VBQUEsdEVBQVNnRCxpRkF3QkVqTCxFQUFFeEI7O0FBeEJiLEFBQUEsWUFBQSxSQXdCV3dCO0FBeEJYLEFBd0J5QixPQUFDd0MsaUNBQVF4QyxNQUFFLEFBQUN4QixZQUFFdUQ7OztBQXhCdkMsQ0FBQSxBQUFBLHNFQUFBLHRFQUFTa0osaUZBeUJFakwsRUFBRXhCLEVBQUVSOztBQXpCZixBQUFBLFlBQUEsUkF5QldnQztBQXpCWCxBQXlCeUIsT0FBQ3dDLGlDQUFReEMsTUFBRSxBQUFDeEIsWUFBRXVELGFBQU0vRDs7O0FBekI3QyxDQUFBLEFBQUEsc0VBQUEsdEVBQVNpTixpRkEwQkVqTCxFQUFFeEIsRUFBRVIsRUFBRUU7O0FBMUJqQixBQUFBLFlBQUEsUkEwQlc4QjtBQTFCWCxBQTBCeUIsT0FBQ3dDLGlDQUFReEMsTUFBRSxBQUFDeEIsWUFBRXVELGFBQU0vRCxFQUFFRTs7O0FBMUIvQyxDQUFBLEFBQUEsc0VBQUEsdEVBQVMrTSxpRkEyQkVqTCxFQUFFeEIsRUFBRVIsRUFBRUUsRUFBRXVFOztBQTNCbkIsQUFBQSxZQUFBLFJBMkJXekM7QUEzQlgsQUEyQnlCLE9BQUN3QyxpQ0FBUXhDLE1BQUUsQUFBQzBDLDBCQUFNbEUsRUFBRXVELGFBQU0vRCxFQUFFRSxFQUFFdUU7OztBQTNCdkQsQ0FBQSxBQUFBLGtFQUFBLGxFQUFTd0ksNkVBOEJFdEksRUFBT1A7O0FBOUJsQixBQUFBLFlBQUEsUkE4QldPO0FBOUJYLEFBK0JVLFNBQUssa0JBQVdzSSxqQkFBUTdJLDZDQUduQixHQUFLZ0osc0JBQ0wsQUFBQ0csd0JBQUksQUFBV25KLG9CQUNoQixBQUFDb0MseUJBQUV6QyxhQUFNLEFBQVNLLGtCQUNsQixBQUFDb0MseUJBQUUyRyxnQkFBUyxBQUFZL0k7OztBQXJDdkMsQ0FBQSxBQUFBLCtFQUFBLC9FQUFTNkksMEZBd0NXeEwsTUFBS04sSUFBSUM7O0FBeEM3QixBQUFBLGdCQUFBLFpBd0NvQks7QUF4Q3BCLEFBd0NrQyxPQUFDTSxpQ0FBU04sVUFBS04sSUFBSUM7OztBQXhDckQsQ0FBQSxBQUFBLDBFQUFBLDFFQUFTNkwscUZBeUNNeEwsTUFBS0MsSUFBSWxCOztBQXpDeEIsQUFBQSxnQkFBQSxaQXlDZWlCO0FBekNmLEFBeUNrQyxPQUFDRCw4QkFBTUMsVUFBS0MsSUFBSWxCOzs7QUF6Q2xELENBQUEsQUFBQSw2RUFBQSw3RUFBU3lNLHdGQTBDU3hMLE1BQUtDOztBQTFDdkIsQUFBQSxnQkFBQSxaQTBDa0JEO0FBMUNsQixBQTBDa0MsT0FBQ0ksaUNBQVNKLFVBQUtDOzs7QUExQ2pELENBQUEsQUFBQSxnRkFBQSxoRkFBU3VMLDJGQTZDTWpMLEVBQUVMLEVBQUVjOztBQTdDbkIsQUFBQSxZQUFBLFJBNkNlVDtBQTdDZixBQTZDeUIsb0RBQUEsVUFBQSwyQ0FBQSxsR0FBQ08sZ0NBQVFQLE1BQUVMLEVBQUVjLDhHQUFxQixBQUFDb0MsMkJBQU83Qzs7O0FBN0NuRSxDQUFBLGlDQUFBLGpDQUFTaUw7QUFBVCxBQUFBLEFBQUE7OztBQUFBLENBQUEsdUNBQUEsdkNBQVNBOztBQUFULENBQUEsMENBQUEsMUNBQVNBOztBQUFULENBQUEsK0NBQUEsV0FBQXZKLG9CQUFBQyxzQkFBQUMscEdBQVNxSjtBQUFULEFBQUEsT0FBQXJLLDJCQUFBZSxzQkFBQTs7O0FBQUE7Ozs2QkFBQSw3QkFBU3VKLGtFQUFtQm5KLE1BQU1vSixTQUE0QkMsUUFDbENsSjtBQUQ1QixBQUFBLFlBQUErSSxzQkFBNEJsSixNQUFNb0osU0FBNEJDLFFBQ2xDbEo7OztBQURuQitJLEFBK0NULDZCQUFBLDdCQUFNTyxrRUFBY0MsTUFBTUMsWUFBWXJIO0FBQXRDLEFBQ0UsZ0hBQUEsTUFBQSwvR0FBQzZHLHFDQUFVTyxNQUNBLEFBQUNFLDRDQUFxQkQsWUFBWXJIIiwibmFtZXMiOlsianMvcmVhZ2VudCIsImpzL3JlYWdlbnQucmF0b20iLCJqcy9yZWFnZW50LnJhdG9tLmRlYnVnIiwicmVhZ2VudC5yYXRvbS9kZWJ1ZyIsImpzL3JlYWdlbnQucmF0b20uZ2VuZXJhdGlvbiIsInJlYWdlbnQucmF0b20vZ2VuZXJhdGlvbiIsImpzL3JlYWdlbnQucmF0b20uLXJ1bm5pbmciLCJyZWFnZW50LnJhdG9tLy1ydW5uaW5nIiwiY2xqcy5jb3JlL2F0b20iLCJyZWFnZW50LnJhdG9tL3JlYWN0aXZlPyIsInJlYWdlbnQucmF0b20vKnJhdG9tLWNvbnRleHQqIiwicmVhZ2VudC5yYXRvbS9ydW5uaW5nIiwiY2xqcy5jb3JlL2RlcmVmIiwicmVhZ2VudC5yYXRvbS9hcnItbGVuIiwieCIsInJlYWdlbnQucmF0b20vYXJyLWVxIiwieSIsImxlbiIsImkiLCJvcl9fMTAxMTZfX2F1dG9fXyIsInJlYWdlbnQucmF0b20vaW4tY29udGV4dCIsIm9iaiIsImYiLCIqcmF0b20tY29udGV4dCotb3JpZy12YWxfXzE4NyIsIipyYXRvbS1jb250ZXh0Ki10ZW1wLXZhbF9fMTg4IiwicmVhZ2VudC5yYXRvbS9kZXJlZi1jYXB0dXJlIiwiciIsInJlcyIsImMiLCJyZWFnZW50LnJhdG9tL25vdGlmeS1kZXJlZi13YXRjaGVyISIsImRlcmVmZWQiLCJ0ZW1wX185Nzc0X19hdXRvX18iLCJyZWFnZW50LnJhdG9tL2NoZWNrLXdhdGNoZXMiLCJvbGQiLCJuZXciLCJjbGpzLmNvcmUvc3dhcCEiLCJjbGpzLmNvcmUvKyIsImNsanMuY29yZS9jb3VudCIsInJlYWdlbnQucmF0b20vYWRkLXciLCJ0aGlzIiwia2V5IiwidyIsImNsanMuY29yZS9hc3NvYyIsInJlYWdlbnQucmF0b20vcmVtb3ZlLXciLCJjbGpzLmNvcmUvZGlzc29jIiwicmVhZ2VudC5yYXRvbS9ub3RpZnktdyIsImEiLCJwMV9fOCMiLCJwMl9fOSMiLCJwM19fMTAjIiwiY2xqcy5jb3JlL3JlZHVjZS1rdiIsIkdfXzE4OSIsImsiLCJyZWFnZW50LnJhdG9tL3ByLWF0b20iLCJ3cml0ZXIiLCJvcHRzIiwicyIsInYiLCJjbGpzLmNvcmUvLXdyaXRlIiwiY2xqcy5jb3JlL3ByLXdyaXRlciIsIipyYXRvbS1jb250ZXh0Ki1vcmlnLXZhbF9fMTkzIiwiKnJhdG9tLWNvbnRleHQqLXRlbXAtdmFsX18xOTQiLCJqcy9yZWFnZW50LnJhdG9tLnJlYS1xdWV1ZSIsInJlYWdlbnQucmF0b20vcmVhLXF1ZXVlIiwicmVhZ2VudC5yYXRvbS9yZWEtZW5xdWV1ZSIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9zY2hlZHVsZSIsInJlYWdlbnQucmF0b20vZmx1c2ghIiwicSIsIm5fXzEyNDgyX19hdXRvX18iLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvcmF0b20tZmx1c2giLCJyZWFnZW50LnJhdG9tL0lSZWFjdGl2ZUF0b20iLCJjbGpzLmNvcmUvUFJPVE9DT0xfU0VOVElORUwiLCJ0aGlzX18xMTM4NV9fYXV0b19fIiwid3JpdGVyX18xMTM4Nl9fYXV0b19fIiwib3B0X18xMTM4N19fYXV0b19fIiwicmVhZ2VudC5yYXRvbS9SQXRvbSIsInJlYWdlbnQucmF0b20vLT5SQXRvbSIsInN0YXRlIiwibWV0YSIsInZhbGlkYXRvciIsIndhdGNoZXMiLCJvIiwib3RoZXIiLCJuZXctdmFsdWUiLCJqcy9FcnJvciIsIm9sZC12YWx1ZSIsImNsanMuY29yZS8tcmVzZXQhIiwibW9yZSIsImNsanMuY29yZS9hcHBseSIsIl8iLCJuZXctbWV0YSIsImNsanMuY29yZS8tZGVyZWYiLCJnb29nL2dldFVpZCIsInZhcl9hcmdzIiwiR19fMjAxIiwicmVhZ2VudC5yYXRvbS9hdG9tIiwiYXJncy1hcnJfXzEyNjg0X19hdXRvX18iLCJsZW5fXzEyNjY2X19hdXRvX18iLCJpX18xMjY2N19fYXV0b19fIiwiYXJnc2VxX18xMjY4NV9fYXV0b19fIiwicF9fMjAyIiwibWFwX18yMDMiLCJjbGpzLmNvcmUvaGFzaC1tYXAiLCJjbGpzLmNvcmUvZ2V0Iiwic2VxMTk5IiwiR19fMjAwIiwic2VsZl9fMTI2NThfX2F1dG9fXyIsInJlYWdlbnQucmF0b20vY2FjaGVkLXJlYWN0aW9uIiwiZGVzdHJveSIsIm0iLCJyZWFnZW50LnJhdG9tL21ha2UtcmVhY3Rpb24iLCJjbGpzLmNvcmUvZGVjIiwiY2xqcy5jb3JlL2luYyIsInJlYWdlbnQucmF0b20vVHJhY2siLCJyZWFnZW50LnJhdG9tLy0+VHJhY2siLCJhcmdzIiwicmVhY3Rpb24iLCJ0ZW1wX185NzE0X19hdXRvX18iLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9oYXNoIiwicmVhZ2VudC5yYXRvbS9tYWtlLXRyYWNrIiwicmVhZ2VudC5yYXRvbS9tYWtlLXRyYWNrISIsInQiLCJhcmdzX18xMjY2OV9fYXV0b19fIiwiYXJnc2VxX18xMjY3MF9fYXV0b19fIiwicmVhZ2VudC5yYXRvbS90cmFjayIsInNlcTIxMSIsIkdfXzIxMiIsImNsanMuY29yZS9pZm4/IiwicmVhZ2VudC5yYXRvbS90cmFjayEiLCJzZXEyMTYiLCJHX18yMTciLCJyZWFnZW50LnJhdG9tL1JDdXJzb3IiLCJyZWFnZW50LnJhdG9tLy0+UkN1cnNvciIsInJhdG9tIiwicGF0aCIsIipyYXRvbS1jb250ZXh0Ki1vcmlnLXZhbF9fMjIxIiwiKnJhdG9tLWNvbnRleHQqLXRlbXAtdmFsX18yMjIiLCJvbGRzdGF0ZSIsIm5ld3N0YXRlIiwiY2xqcy5jb3JlL25hdGl2ZS1zYXRpc2ZpZXM/IiwiY2xqcy5jb3JlL0lEZXJlZiIsImNsanMuY29yZS9nZXQtaW4iLCJjbGpzLmNvcmUvcmVzZXQhIiwiY2xqcy5jb3JlL2Fzc29jLWluIiwicmVhZ2VudC5yYXRvbS9jdXJzb3IiLCJzcmMiLCJjbGpzLmNvcmUvdmVjdG9yPyIsImNsanMuY29yZS9wci1zdHIiLCJyZWFnZW50LnJhdG9tL3dpdGgtbGV0LWRlc3Ryb3kiLCJyZWFnZW50LnJhdG9tL3dpdGgtbGV0LXZhbHVlcyIsImNsanMuY29yZS9hcnJheSIsInhfXzExNTc4X19hdXRvX18iLCJtX18xMTU3OV9fYXV0b19fIiwicmVhZ2VudC5yYXRvbS9kaXNwb3NlISIsImdvb2cvdHlwZU9mIiwibV9fMTE1NzZfX2F1dG9fXyIsImNsanMuY29yZS9taXNzaW5nLXByb3RvY29sIiwicmVhZ2VudC5yYXRvbS9hZGQtb24tZGlzcG9zZSEiLCJyZWFnZW50LnJhdG9tL0lEaXNwb3NhYmxlIiwicmVhZ2VudC5yYXRvbS9ydW4iLCJyZWFnZW50LnJhdG9tL0lSdW5uYWJsZSIsInJlYWdlbnQucmF0b20vaGFuZGxlLXJlYWN0aW9uLWNoYW5nZSIsInNlbmRlciIsInBfXzIzOCIsIm1hcF9fMjM5IiwicmVhZ2VudC5yYXRvbS9SZWFjdGlvbiIsInJlYWdlbnQucmF0b20vLT5SZWFjdGlvbiIsImRpcnR5PyIsIm5vY2FjaGU/Iiwid2F0Y2hpbmciLCJhdXRvLXJ1biIsImNhdWdodCIsIndhcy1lbXB0eSIsImNsanMuY29yZS9lbXB0eT8iLCJuZXd2YWwiLCJjbGpzLmNvcmUvZm4/Iiwib2xkdmFsIiwiKnJhdG9tLWNvbnRleHQqLW9yaWctdmFsX18yMjciLCIqcmF0b20tY29udGV4dCotdGVtcC12YWxfXzIyOCIsImNsanMuY29yZS9zZXQiLCJzZXFfXzIyOSIsImNsanMuY29yZS9zZXEiLCJjaHVua19fMjMwIiwiY291bnRfXzIzMSIsImlfXzIzMiIsImNsanMuY29yZS8tbnRoIiwidGVtcF9fOTUyMl9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rZWQtc2VxPyIsImNfXzEyMTIyX19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiLCJjbGpzLmNvcmUvY2h1bmstcmVzdCIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0IiwiY2xvanVyZS5zZXQvZGlmZmVyZW5jZSIsImNsanMuY29yZS8tYWRkLXdhdGNoIiwic2VxX18yMzMiLCJjaHVua19fMjM0IiwiY291bnRfXzIzNSIsImlfXzIzNiIsImNsanMuY29yZS8tcmVtb3ZlLXdhdGNoIiwiZTIzNyIsImUiLCJjaGVjayIsIm9uLXNldCIsIm9uLWRpc3Bvc2UiLCJuby1jYWNoZSIsIm5vbi1yZWFjdGl2ZSIsIndnIiwic2VxX18yNDEiLCJjaHVua19fMjQyIiwiY291bnRfXzI0MyIsImlfXzI0NCIsInBfXzMwNiIsIm1hcF9fMzA3Iiwic2VxMzA0IiwiR19fMzA1IiwicmVhZ2VudC5yYXRvbS90ZW1wLXJlYWN0aW9uIiwicmVhZ2VudC5yYXRvbS9ydW4taW4tcmVhY3Rpb24iLCJydW4iLCJnb29nLm9iamVjdC9zZXQiLCJyZWFnZW50LnJhdG9tL2NoZWNrLWRlcmVmcyIsImN0eCIsInJlYWdlbnQucmF0b20vV3JhcHBlciIsInJlYWdlbnQucmF0b20vLT5XcmFwcGVyIiwiY2FsbGJhY2siLCJjaGFuZ2VkIiwicmVhZ2VudC9kZWJ1ZyIsImpzL2NvbnNvbGUiLCJjbGpzLmNvcmUvbm90IiwicmVhZ2VudC5yYXRvbS9tYWtlLXdyYXBwZXIiLCJ2YWx1ZSIsImNhbGxiYWNrLWZuIiwicmVhZ2VudC5pbXBsLnV0aWwvbWFrZS1wYXJ0aWFsLWZuIiwiY2xqcy5jb3JlL0luZGV4ZWRTZXEiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIHJlYWdlbnQucmF0b21cbiAgKDpyZWZlci1jbG9qdXJlIDpleGNsdWRlIFthdG9tXSlcbiAgKDpyZXF1aXJlLW1hY3JvcyBbcmVhZ2VudC5yYXRvbV0pXG4gICg6cmVxdWlyZSBbcmVhZ2VudC5pbXBsLnV0aWwgOmFzIHV0aWxdXG4gICAgICAgICAgICBbcmVhZ2VudC5kZWJ1ZyA6cmVmZXItbWFjcm9zIFt3YXJuIGRldj9dXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5iYXRjaGluZyA6YXMgYmF0Y2hdXG4gICAgICAgICAgICBbY2xvanVyZS5zZXQgOmFzIHNdXG4gICAgICAgICAgICBbZ29vZy5vYmplY3QgOmFzIG9ial0pKVxuXG4oZGVjbGFyZSBeOmR5bmFtaWMgKnJhdG9tLWNvbnRleHQqKVxuKGRlZm9uY2UgXmJvb2xlYW4gZGVidWcgZmFsc2UpXG4oZGVmb25jZSBeOnByaXZhdGUgZ2VuZXJhdGlvbiAwKVxuKGRlZm9uY2UgXjpwcml2YXRlIC1ydW5uaW5nIChjbG9qdXJlLmNvcmUvYXRvbSAwKSlcblxuKGRlZm4gXmJvb2xlYW4gcmVhY3RpdmU/IFtdXG4gIChzb21lPyAqcmF0b20tY29udGV4dCopKVxuXG5cbjs7OyBVdGlsaXRpZXNcblxuKGRlZm4gcnVubmluZyBbXVxuICAoKyBALXJ1bm5pbmcpKVxuXG4oZGVmbi0gXm51bWJlciBhcnItbGVuIFt4XVxuICAoaWYgKG5pbD8geCkgMCAoYWxlbmd0aCB4KSkpXG5cbihkZWZuLSBeYm9vbGVhbiBhcnItZXEgW3ggeV1cbiAgKGxldCBbbGVuIChhcnItbGVuIHgpXVxuICAgIChhbmQgKD09IGxlbiAoYXJyLWxlbiB5KSlcbiAgICAgICAgIChsb29wIFtpIDBdXG4gICAgICAgICAgIChvciAoPT0gaSBsZW4pXG4gICAgICAgICAgICAgICAoaWYgKGlkZW50aWNhbD8gKGFnZXQgeCBpKSAoYWdldCB5IGkpKVxuICAgICAgICAgICAgICAgICAocmVjdXIgKGluYyBpKSlcbiAgICAgICAgICAgICAgICAgZmFsc2UpKSkpKSlcblxuKGRlZm4tIGluLWNvbnRleHRcbiAgXCJXaGVuIGYgaXMgZXhlY3V0ZWQsIGlmIChmKSBkZXJlZnMgYW55IHJhdG9tcywgdGhleSBhcmUgdGhlbiBhZGRlZCB0byAnb2JqLmNhcHR1cmVkJygqcmF0b20tY29udGV4dCopLlxuXG4gIFNlZSBmdW5jdGlvbiBub3RpZnktZGVyZWYtd2F0Y2hlciEgdG8ga25vdyBob3cgKnJhdG9tLWNvbnRleHQqIGlzIHVwZGF0ZWRcIlxuICBbb2JqIGZdXG4gIChiaW5kaW5nIFsqcmF0b20tY29udGV4dCogb2JqXVxuICAgIChmKSkpXG5cbihkZWZuLSBkZXJlZi1jYXB0dXJlXG4gIFwiUmV0dXJucyBgKGluLWNvbnRleHQgZiByKWAuICBDYWxscyBgX3VwZGF0ZS13YXRjaGluZ2Agb24gciB3aXRoIGFueVxuICBgZGVyZWZgZWQgYXRvbXMgY2FwdHVyZWQgZHVyaW5nIGBpbi1jb250ZXh0YCwgaWYgYW55IGRpZmZlciBmcm9tIHRoZVxuICBgd2F0Y2hpbmdgIGZpZWxkIG9mIHIuICBDbGVhcnMgdGhlIGBkaXJ0eT9gIGZsYWcgb24gci5cblxuICBJbnNpZGUgJ191cGRhdGUtd2F0Y2hpbmcnIGFsb25nIHdpdGggYWRkaW5nIHRoZSByYXRvbXMgaW4gJ3Iud2F0Y2hpbmcnIG9mIHJlYWN0aW9uLFxuICB0aGUgcmVhY3Rpb24gaXMgYWxzbyBhZGRlZCB0byB0aGUgbGlzdCBvZiB3YXRjaGVzIG9uIGVhY2ggcmF0b21zIGYgZGVyZWZzLlwiXG4gIFtmIF5jbGogcl1cbiAgKHNldCEgKC4tY2FwdHVyZWQgcikgbmlsKVxuICAod2hlbiAoZGV2PylcbiAgICAoc2V0ISAoLi1yYXRvbUdlbmVyYXRpb24gcikgKHNldCEgZ2VuZXJhdGlvbiAoaW5jIGdlbmVyYXRpb24pKSkpXG4gIChsZXQgW3JlcyAoaW4tY29udGV4dCByIGYpXG4gICAgICAgIGMgKC4tY2FwdHVyZWQgcildXG4gICAgKHNldCEgKC4tZGlydHk/IHIpIGZhbHNlKVxuICAgIDs7IE9wdGltaXplIGNvbW1vbiBjYXNlIHdoZXJlIGRlcmVmcyBvY2N1ciBpbiBzYW1lIG9yZGVyXG4gICAgKHdoZW4tbm90IChhcnItZXEgYyAoLi13YXRjaGluZyByKSlcbiAgICAgICguX3VwZGF0ZS13YXRjaGluZyByIGMpKVxuICAgIHJlcykpXG5cbihkZWZuLSBub3RpZnktZGVyZWYtd2F0Y2hlciFcbiAgXCJBZGQgYGRlcmVmZWRgIHRvIHRoZSBgY2FwdHVyZWRgIGZpZWxkIG9mIGAqcmF0b20tY29udGV4dCpgLlxuXG4gIFNlZSBhbHNvIGBpbi1jb250ZXh0YFwiXG4gIFtkZXJlZmVkXVxuICAod2hlbi1zb21lIFtyICpyYXRvbS1jb250ZXh0Kl1cbiAgICAobGV0IFtjICguLWNhcHR1cmVkIHIpXVxuICAgICAgKGlmIChuaWw/IGMpXG4gICAgICAgIChzZXQhICguLWNhcHR1cmVkIHIpIChhcnJheSBkZXJlZmVkKSlcbiAgICAgICAgKC5wdXNoIGMgZGVyZWZlZCkpKSkpXG5cbihkZWZuLSBjaGVjay13YXRjaGVzIFtvbGQgbmV3XVxuICAod2hlbiBkZWJ1Z1xuICAgIChzd2FwISAtcnVubmluZyArICgtIChjb3VudCBuZXcpIChjb3VudCBvbGQpKSkpXG4gIG5ldylcblxuKGRlZm4tIGFkZC13IFteY2xqIHRoaXMga2V5IGZdXG4gIChsZXQgW3cgKC4td2F0Y2hlcyB0aGlzKV1cbiAgICAoc2V0ISAoLi13YXRjaGVzIHRoaXMpIChjaGVjay13YXRjaGVzIHcgKGFzc29jIHcga2V5IGYpKSlcbiAgICAoc2V0ISAoLi13YXRjaGVzQXJyIHRoaXMpIG5pbCkpKVxuXG4oZGVmbi0gcmVtb3ZlLXcgW15jbGogdGhpcyBrZXldXG4gIChsZXQgW3cgKC4td2F0Y2hlcyB0aGlzKV1cbiAgICAoc2V0ISAoLi13YXRjaGVzIHRoaXMpIChjaGVjay13YXRjaGVzIHcgKGRpc3NvYyB3IGtleSkpKVxuICAgIChzZXQhICguLXdhdGNoZXNBcnIgdGhpcykgbmlsKSkpXG5cbihkZWZuLSBub3RpZnktdyBbXmNsaiB0aGlzIG9sZCBuZXddXG4gIChsZXQgW3cgKC4td2F0Y2hlc0FyciB0aGlzKVxuICAgICAgICBhIChpZiAobmlsPyB3KVxuICAgICAgICAgICAgOzsgQ29weSB3YXRjaGVzIHRvIGFycmF5IGZvciBzcGVlZFxuICAgICAgICAgICAgKC0+PiAoLi13YXRjaGVzIHRoaXMpXG4gICAgICAgICAgICAgICAgIChyZWR1Y2Uta3YgIyhkb3RvICUxICgucHVzaCAlMikgKC5wdXNoICUzKSkgI2pzW10pXG4gICAgICAgICAgICAgICAgIChzZXQhICguLXdhdGNoZXNBcnIgdGhpcykpKVxuICAgICAgICAgICAgdylcbiAgICAgICAgbGVuIChhbGVuZ3RoIGEpXVxuICAgIChsb29wIFtpIDBdXG4gICAgICAod2hlbiAoPCBpIGxlbilcbiAgICAgICAgKGxldCBbayAoYWdldCBhIGkpXG4gICAgICAgICAgICAgIGYgKGFnZXQgYSAoaW5jIGkpKV1cbiAgICAgICAgICAoZiBrIHRoaXMgb2xkIG5ldykpXG4gICAgICAgIChyZWN1ciAoKyAyIGkpKSkpKSlcblxuKGRlZm4tIHByLWF0b20gW2Egd3JpdGVyIG9wdHMgcyB2XVxuICAoLXdyaXRlIHdyaXRlciAoc3RyIFwiI29iamVjdFtyZWFnZW50LnJhdG9tLlwiIHMgXCIgXCIpKVxuICAocHItd3JpdGVyIChiaW5kaW5nIFsqcmF0b20tY29udGV4dCogbmlsXSB2KSB3cml0ZXIgb3B0cylcbiAgKC13cml0ZSB3cml0ZXIgXCJdXCIpKVxuXG5cbjs7OyBRdWV1ZWluZ1xuXG4oZGVmb25jZSBeOnByaXZhdGUgcmVhLXF1ZXVlIG5pbClcblxuKGRlZm4tIHJlYS1lbnF1ZXVlIFtyXVxuICAod2hlbiAobmlsPyByZWEtcXVldWUpXG4gICAgKHNldCEgcmVhLXF1ZXVlIChhcnJheSkpXG4gICAgKGJhdGNoL3NjaGVkdWxlKSlcbiAgKC5wdXNoIHJlYS1xdWV1ZSByKSlcblxuKGRlZm4gZmx1c2ghIFtdXG4gIChsb29wIFtdXG4gICAgKGxldCBbcSByZWEtcXVldWVdXG4gICAgICAod2hlbi1ub3QgKG5pbD8gcSlcbiAgICAgICAgKHNldCEgcmVhLXF1ZXVlIG5pbClcbiAgICAgICAgKGRvdGltZXMgW2kgKGFsZW5ndGggcSldXG4gICAgICAgICAgKC5fcXVldWVkLXJ1biAoYWdldCBxIGkpKSlcbiAgICAgICAgKHJlY3VyKSkpKSlcblxuKHNldCEgYmF0Y2gvcmF0b20tZmx1c2ggZmx1c2ghKVxuXG5cbjs7OyBBdG9tXG5cbihkZWZwcm90b2NvbCBJUmVhY3RpdmVBdG9tKVxuXG4oZGVmdHlwZSBSQXRvbSBbXjptdXRhYmxlIHN0YXRlIG1ldGEgdmFsaWRhdG9yIF46bXV0YWJsZSB3YXRjaGVzXVxuICBJQXRvbVxuICBJUmVhY3RpdmVBdG9tXG5cbiAgSUVxdWl2XG4gICgtZXF1aXYgW28gb3RoZXJdIChpZGVudGljYWw/IG8gb3RoZXIpKVxuXG4gIElEZXJlZlxuICAoLWRlcmVmIFt0aGlzXVxuICAgIChub3RpZnktZGVyZWYtd2F0Y2hlciEgdGhpcylcbiAgICBzdGF0ZSlcblxuICBJUmVzZXRcbiAgKC1yZXNldCEgW2EgbmV3LXZhbHVlXVxuICAgICh3aGVuLW5vdCAobmlsPyB2YWxpZGF0b3IpXG4gICAgICAoYXNzZXJ0ICh2YWxpZGF0b3IgbmV3LXZhbHVlKSBcIlZhbGlkYXRvciByZWplY3RlZCByZWZlcmVuY2Ugc3RhdGVcIikpXG4gICAgKGxldCBbb2xkLXZhbHVlIHN0YXRlXVxuICAgICAgKHNldCEgc3RhdGUgbmV3LXZhbHVlKVxuICAgICAgKHdoZW4tbm90IChuaWw/IHdhdGNoZXMpXG4gICAgICAgIChub3RpZnktdyBhIG9sZC12YWx1ZSBuZXctdmFsdWUpKVxuICAgICAgbmV3LXZhbHVlKSlcblxuICBJU3dhcFxuICAoLXN3YXAhIFthIGZdICAgICAgICAgICgtcmVzZXQhIGEgKGYgc3RhdGUpKSlcbiAgKC1zd2FwISBbYSBmIHhdICAgICAgICAoLXJlc2V0ISBhIChmIHN0YXRlIHgpKSlcbiAgKC1zd2FwISBbYSBmIHggeV0gICAgICAoLXJlc2V0ISBhIChmIHN0YXRlIHggeSkpKVxuICAoLXN3YXAhIFthIGYgeCB5IG1vcmVdICgtcmVzZXQhIGEgKGFwcGx5IGYgc3RhdGUgeCB5IG1vcmUpKSlcblxuICBJV2l0aE1ldGFcbiAgKC13aXRoLW1ldGEgW18gbmV3LW1ldGFdIChSQXRvbS4gc3RhdGUgbmV3LW1ldGEgdmFsaWRhdG9yIHdhdGNoZXMpKVxuXG4gIElNZXRhXG4gICgtbWV0YSBbX10gbWV0YSlcblxuICBJUHJpbnRXaXRoV3JpdGVyXG4gICgtcHItd3JpdGVyIFthIHcgb3B0c10gKHByLWF0b20gYSB3IG9wdHMgXCJSQXRvbVwiIHs6dmFsICgtZGVyZWYgYSl9KSlcblxuICBJV2F0Y2hhYmxlXG4gICgtbm90aWZ5LXdhdGNoZXMgW3RoaXMgb2xkIG5ld10gKG5vdGlmeS13IHRoaXMgb2xkIG5ldykpXG4gICgtYWRkLXdhdGNoIFt0aGlzIGtleSBmXSAgICAgICAgKGFkZC13IHRoaXMga2V5IGYpKVxuICAoLXJlbW92ZS13YXRjaCBbdGhpcyBrZXldICAgICAgIChyZW1vdmUtdyB0aGlzIGtleSkpXG5cbiAgSUhhc2hcbiAgKC1oYXNoIFt0aGlzXSAoZ29vZy9nZXRVaWQgdGhpcykpKVxuXG4oZGVmbiBhdG9tXG4gIFwiTGlrZSBjbG9qdXJlLmNvcmUvYXRvbSwgZXhjZXB0IHRoYXQgaXQga2VlcHMgdHJhY2sgb2YgZGVyZWZzLlwiXG4gIChbeF0gKC0+UkF0b20geCBuaWwgbmlsIG5pbCkpXG4gIChbeCAmIHs6a2V5cyBbbWV0YSB2YWxpZGF0b3JdfV0gKC0+UkF0b20geCBtZXRhIHZhbGlkYXRvciBuaWwpKSlcblxuXG47OzsgdHJhY2tcblxuKGRlY2xhcmUgbWFrZS1yZWFjdGlvbilcblxuKGRlZm4tIGNhY2hlZC1yZWFjdGlvbiBbZiBeY2xqIG8gayBeY2xqIG9iaiBkZXN0cm95XVxuICAobGV0IFttICguLXJlYWdSZWFjdGlvbkNhY2hlIG8pXG4gICAgICAgIG0gKGlmIChuaWw/IG0pIHt9IG0pXG4gICAgICAgIHIgKG0gayBuaWwpXVxuICAgIChjb25kXG4gICAgICAoc29tZT8gcikgKC1kZXJlZiByKVxuICAgICAgKG5pbD8gKnJhdG9tLWNvbnRleHQqKSAoZilcbiAgICAgIDplbHNlIChsZXQgW3IgKG1ha2UtcmVhY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgIGYgOm9uLWRpc3Bvc2UgKGZuIFt4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuIGRlYnVnIChzd2FwISAtcnVubmluZyBkZWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChhcy0+ICguLXJlYWdSZWFjdGlvbkNhY2hlIG8pIF9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkaXNzb2MgXyBrKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHNldCEgKC4tcmVhZ1JlYWN0aW9uQ2FjaGUgbykgXykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHdoZW4gKHNvbWU/IG9iailcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZXQhICguLXJlYWN0aW9uIG9iaikgbmlsKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2hlbiAoc29tZT8gZGVzdHJveSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkZXN0cm95IHgpKSkpXG4gICAgICAgICAgICAgICAgICB2ICgtZGVyZWYgcildXG4gICAgICAgICAgICAgIChzZXQhICguLXJlYWdSZWFjdGlvbkNhY2hlIG8pIChhc3NvYyBtIGsgcikpXG4gICAgICAgICAgICAgICh3aGVuIGRlYnVnIChzd2FwISAtcnVubmluZyBpbmMpKVxuICAgICAgICAgICAgICAod2hlbiAoc29tZT8gb2JqKVxuICAgICAgICAgICAgICAgIChzZXQhICguLXJlYWN0aW9uIG9iaikgcikpXG4gICAgICAgICAgICAgIHYpKSkpXG5cbihkZWZ0eXBlIFRyYWNrIFtmIGFyZ3MgXjptdXRhYmxlIHJlYWN0aW9uXVxuICBJUmVhY3RpdmVBdG9tXG5cbiAgSURlcmVmXG4gICgtZGVyZWYgW3RoaXNdXG4gICAgKGlmLXNvbWUgW3IgcmVhY3Rpb25dXG4gICAgICAoLWRlcmVmIHIpXG4gICAgICAoY2FjaGVkLXJlYWN0aW9uICMoYXBwbHkgZiBhcmdzKSBmIGFyZ3MgdGhpcyBuaWwpKSlcblxuICBJRXF1aXZcbiAgKC1lcXVpdiBbXyBeY2xqIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBUcmFjayBvdGhlcilcbiAgICAgICAgICg9IGYgKC4tZiBvdGhlcikpXG4gICAgICAgICAoPSBhcmdzICguLWFyZ3Mgb3RoZXIpKSkpXG5cbiAgSUhhc2hcbiAgKC1oYXNoIFtfXSAoaGFzaCBbZiBhcmdzXSkpXG5cbiAgSVByaW50V2l0aFdyaXRlclxuICAoLXByLXdyaXRlciBbYSB3IG9wdHNdIChwci1hdG9tIGEgdyBvcHRzIFwiVHJhY2tcIiB7OnZhbCAoLWRlcmVmIGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmYgZn0pKSlcblxuKGRlZm4gbWFrZS10cmFjayBbZiBhcmdzXVxuICAoVHJhY2suIGYgYXJncyBuaWwpKVxuXG4oZGVmbiBtYWtlLXRyYWNrISBbZiBhcmdzXVxuICAobGV0IFt0IChtYWtlLXRyYWNrIGYgYXJncylcbiAgICAgICAgciAobWFrZS1yZWFjdGlvbiAjKC1kZXJlZiB0KVxuICAgICAgICAgICAgICAgICAgICAgICAgIDphdXRvLXJ1biB0cnVlKV1cbiAgICBAclxuICAgIHIpKVxuXG4oZGVmbiB0cmFjayBbZiAmIGFyZ3NdXG4gIHs6cHJlIFsoaWZuPyBmKV19XG4gIChtYWtlLXRyYWNrIGYgYXJncykpXG5cbihkZWZuIHRyYWNrISBbZiAmIGFyZ3NdXG4gIHs6cHJlIFsoaWZuPyBmKV19XG4gIChtYWtlLXRyYWNrISBmIGFyZ3MpKVxuXG47OzsgY3Vyc29yXG5cbihkZWZ0eXBlIFJDdXJzb3IgW3JhdG9tIHBhdGggXjptdXRhYmxlIHJlYWN0aW9uXG4gICAgICAgICAgICAgICAgICBeOm11dGFibGUgc3RhdGUgXjptdXRhYmxlIHdhdGNoZXNdXG4gIElBdG9tXG4gIElSZWFjdGl2ZUF0b21cblxuICBJRXF1aXZcbiAgKC1lcXVpdiBbXyBeY2xqIG90aGVyXVxuICAgIChhbmQgKGluc3RhbmNlPyBSQ3Vyc29yIG90aGVyKVxuICAgICAgICAgKD0gcGF0aCAoLi1wYXRoIG90aGVyKSlcbiAgICAgICAgICg9IHJhdG9tICguLXJhdG9tIG90aGVyKSkpKVxuXG4gIE9iamVjdFxuICAoX3BlZWsgW3RoaXNdXG4gICAgKGJpbmRpbmcgWypyYXRvbS1jb250ZXh0KiBuaWxdXG4gICAgICAoLWRlcmVmIHRoaXMpKSlcblxuICAoX3NldC1zdGF0ZSBbdGhpcyBvbGRzdGF0ZSBuZXdzdGF0ZV1cbiAgICAod2hlbi1ub3QgKGlkZW50aWNhbD8gb2xkc3RhdGUgbmV3c3RhdGUpXG4gICAgICAoc2V0ISBzdGF0ZSBuZXdzdGF0ZSlcbiAgICAgICh3aGVuIChzb21lPyB3YXRjaGVzKVxuICAgICAgICAobm90aWZ5LXcgdGhpcyBvbGRzdGF0ZSBuZXdzdGF0ZSkpKSlcblxuICBJRGVyZWZcbiAgKC1kZXJlZiBbdGhpc11cbiAgICAobGV0IFtvbGRzdGF0ZSBzdGF0ZVxuICAgICAgICAgIG5ld3N0YXRlIChpZi1zb21lIFtyIHJlYWN0aW9uXVxuICAgICAgICAgICAgICAgICAgICAgKC1kZXJlZiByKVxuICAgICAgICAgICAgICAgICAgICAgKGxldCBbZiAoaWYgKHNhdGlzZmllcz8gSURlcmVmIHJhdG9tKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMoZ2V0LWluIEByYXRvbSBwYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICMocmF0b20gcGF0aCkpXVxuICAgICAgICAgICAgICAgICAgICAgICAoY2FjaGVkLXJlYWN0aW9uIGYgcmF0b20gcGF0aCB0aGlzIG5pbCkpKV1cbiAgICAgICguX3NldC1zdGF0ZSB0aGlzIG9sZHN0YXRlIG5ld3N0YXRlKVxuICAgICAgbmV3c3RhdGUpKVxuXG4gIElSZXNldFxuICAoLXJlc2V0ISBbdGhpcyBuZXctdmFsdWVdXG4gICAgKGxldCBbb2xkc3RhdGUgc3RhdGVdXG4gICAgICAoLl9zZXQtc3RhdGUgdGhpcyBvbGRzdGF0ZSBuZXctdmFsdWUpXG4gICAgICAoaWYgKHNhdGlzZmllcz8gSURlcmVmIHJhdG9tKVxuICAgICAgICAoaWYgKD0gcGF0aCBbXSlcbiAgICAgICAgICAocmVzZXQhIHJhdG9tIG5ldy12YWx1ZSlcbiAgICAgICAgICAoc3dhcCEgcmF0b20gYXNzb2MtaW4gcGF0aCBuZXctdmFsdWUpKVxuICAgICAgICAocmF0b20gcGF0aCBuZXctdmFsdWUpKVxuICAgICAgbmV3LXZhbHVlKSlcblxuICBJU3dhcFxuICAoLXN3YXAhIFthIGZdICAgICAgICAgICgtcmVzZXQhIGEgKGYgKC5fcGVlayBhKSkpKVxuICAoLXN3YXAhIFthIGYgeF0gICAgICAgICgtcmVzZXQhIGEgKGYgKC5fcGVlayBhKSB4KSkpXG4gICgtc3dhcCEgW2EgZiB4IHldICAgICAgKC1yZXNldCEgYSAoZiAoLl9wZWVrIGEpIHggeSkpKVxuICAoLXN3YXAhIFthIGYgeCB5IG1vcmVdICgtcmVzZXQhIGEgKGFwcGx5IGYgKC5fcGVlayBhKSB4IHkgbW9yZSkpKVxuXG4gIElQcmludFdpdGhXcml0ZXJcbiAgKC1wci13cml0ZXIgW2EgdyBvcHRzXSAocHItYXRvbSBhIHcgb3B0cyBcIlJDdXJzb3JcIiB7OnZhbCAoLWRlcmVmIGEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGF0aCBwYXRofSkpXG5cbiAgSVdhdGNoYWJsZVxuICAoLW5vdGlmeS13YXRjaGVzIFt0aGlzIG9sZCBuZXddIChub3RpZnktdyB0aGlzIG9sZCBuZXcpKVxuICAoLWFkZC13YXRjaCBbdGhpcyBrZXkgZl0gICAgICAgIChhZGQtdyB0aGlzIGtleSBmKSlcbiAgKC1yZW1vdmUtd2F0Y2ggW3RoaXMga2V5XSAgICAgICAocmVtb3ZlLXcgdGhpcyBrZXkpKVxuXG4gIElIYXNoXG4gICgtaGFzaCBbX10gKGhhc2ggW3JhdG9tIHBhdGhdKSkpXG5cbihkZWZuIGN1cnNvclxuICBbXmNsaiBzcmMgcGF0aF1cbiAgKGFzc2VydCAob3IgKHNhdGlzZmllcz8gSVJlYWN0aXZlQXRvbSBzcmMpXG4gICAgICAgICAgICAgIChhbmQgKGlmbj8gc3JjKVxuICAgICAgICAgICAgICAgICAgIChub3QgKHZlY3Rvcj8gc3JjKSkpKVxuICAgICAgICAgIChzdHIgXCJzcmMgbXVzdCBiZSBhIHJlYWN0aXZlIGF0b20gb3IgYSBmdW5jdGlvbiwgbm90IFwiXG4gICAgICAgICAgICAgICAocHItc3RyIHNyYylcbiAgICAgICAgICAgICAgIFwiIHdoaWxlIGF0dGVtcHRpbmcgdG8gZ2V0IHBhdGg6IFwiXG4gICAgICAgICAgICAgICAocHItc3RyIHBhdGgpKSlcbiAgKC0+UkN1cnNvciBzcmMgcGF0aCBuaWwgbmlsIG5pbCkpXG5cblxuOzs7IHdpdGgtbGV0IHN1cHBvcnRcblxuKGRlZm4gd2l0aC1sZXQtZGVzdHJveSBbdl1cbiAgKHdoZW4tc29tZSBbZiAoLi1kZXN0cm95IHYpXVxuICAgIChmKSkpXG5cbihkZWZuIHdpdGgtbGV0LXZhbHVlcyBba2V5XVxuICAoaWYtc29tZSBbYyAqcmF0b20tY29udGV4dCpdXG4gICAgKGNhY2hlZC1yZWFjdGlvbiBhcnJheSBjIGtleSBuaWwgd2l0aC1sZXQtZGVzdHJveSlcbiAgICAoYXJyYXkpKSlcblxuXG47Ozs7IHJlYWN0aW9uXG5cbihkZWZwcm90b2NvbCBJRGlzcG9zYWJsZVxuICAoZGlzcG9zZSEgW3RoaXNdKVxuICAoYWRkLW9uLWRpc3Bvc2UhIFt0aGlzIGZdKSlcblxuKGRlZnByb3RvY29sIElSdW5uYWJsZVxuICAocnVuIFt0aGlzXSkpXG5cbihkZWZuLSBoYW5kbGUtcmVhY3Rpb24tY2hhbmdlIFteY2xqIHRoaXMgc2VuZGVyIG9sZCBuZXddXG4gICguX2hhbmRsZS1jaGFuZ2UgdGhpcyBzZW5kZXIgb2xkIG5ldykpXG5cbjs7IEZpZWxkcyBvZiBhIFJlYWN0aW9uIGphdmFzY3JpcHQgb2JqZWN0XG47OyAtIGF1dG9fcnVuXG47OyAtIGNhcHR1cmVkXG47OyAtIGNhdWdodFxuOzsgLSBmXG47OyAtIHJhdG9tR2VuZXJhdGlvblxuOzsgLSBzdGF0ZVxuOzsgLSB3YXRjaGVzXG47OyAtIHdhdGNoaW5nXG4oZGVmdHlwZSBSZWFjdGlvbiBbZiBeOm11dGFibGUgc3RhdGUgXjptdXRhYmxlIF5ib29sZWFuIGRpcnR5PyBeYm9vbGVhbiBub2NhY2hlP1xuICAgICAgICAgICAgICAgICAgIF46bXV0YWJsZSB3YXRjaGluZyBeOm11dGFibGUgd2F0Y2hlcyBeOm11dGFibGUgYXV0by1ydW5cbiAgICAgICAgICAgICAgICAgICBeOm11dGFibGUgY2F1Z2h0XVxuICBJQXRvbVxuICBJUmVhY3RpdmVBdG9tXG5cbiAgSVdhdGNoYWJsZVxuICAoLW5vdGlmeS13YXRjaGVzIFt0aGlzIG9sZCBuZXddIChub3RpZnktdyB0aGlzIG9sZCBuZXcpKVxuICAoLWFkZC13YXRjaCBbdGhpcyBrZXkgZl0gICAgICAgIChhZGQtdyB0aGlzIGtleSBmKSlcbiAgKC1yZW1vdmUtd2F0Y2ggW3RoaXMga2V5XVxuICAgIChsZXQgW3dhcy1lbXB0eSAoZW1wdHk/IHdhdGNoZXMpXVxuICAgICAgKHJlbW92ZS13IHRoaXMga2V5KVxuICAgICAgKHdoZW4gKGFuZCAobm90IHdhcy1lbXB0eSlcbiAgICAgICAgICAgICAgICAgKGVtcHR5PyB3YXRjaGVzKVxuICAgICAgICAgICAgICAgICAobmlsPyBhdXRvLXJ1bikpXG4gICAgICAgIChkaXNwb3NlISB0aGlzKSkpKVxuXG4gIElSZXNldFxuICAoLXJlc2V0ISBbYSBuZXd2YWxdXG4gICAgKGFzc2VydCAoZm4/ICguLW9uLXNldCBhKSkgXCJSZWFjdGlvbiBpcyByZWFkIG9ubHk7IG9uLXNldCBpcyBub3QgYWxsb3dlZFwiKVxuICAgIChsZXQgW29sZHZhbCBzdGF0ZV1cbiAgICAgIChzZXQhIHN0YXRlIG5ld3ZhbClcbiAgICAgICgub24tc2V0IGEgb2xkdmFsIG5ld3ZhbClcbiAgICAgIChub3RpZnktdyBhIG9sZHZhbCBuZXd2YWwpXG4gICAgICBuZXd2YWwpKVxuXG4gIElTd2FwXG4gICgtc3dhcCEgW2EgZl0gICAgICAgICAgKC1yZXNldCEgYSAoZiAoLl9wZWVrLWF0IGEpKSkpXG4gICgtc3dhcCEgW2EgZiB4XSAgICAgICAgKC1yZXNldCEgYSAoZiAoLl9wZWVrLWF0IGEpIHgpKSlcbiAgKC1zd2FwISBbYSBmIHggeV0gICAgICAoLXJlc2V0ISBhIChmICguX3BlZWstYXQgYSkgeCB5KSkpXG4gICgtc3dhcCEgW2EgZiB4IHkgbW9yZV0gKC1yZXNldCEgYSAoYXBwbHkgZiAoLl9wZWVrLWF0IGEpIHggeSBtb3JlKSkpXG5cbiAgT2JqZWN0XG4gIChfcGVlay1hdCBbdGhpc11cbiAgICAoYmluZGluZyBbKnJhdG9tLWNvbnRleHQqIG5pbF1cbiAgICAgICgtZGVyZWYgdGhpcykpKVxuXG4gIChfaGFuZGxlLWNoYW5nZSBbdGhpcyBzZW5kZXIgb2xkdmFsIG5ld3ZhbF1cbiAgICAod2hlbi1ub3QgKG9yIChpZGVudGljYWw/IG9sZHZhbCBuZXd2YWwpXG4gICAgICAgICAgICAgICAgICBkaXJ0eT8pXG4gICAgICAoaWYgKG5pbD8gYXV0by1ydW4pXG4gICAgICAgIChkb1xuICAgICAgICAgIChzZXQhIGRpcnR5PyB0cnVlKVxuICAgICAgICAgIChyZWEtZW5xdWV1ZSB0aGlzKSlcbiAgICAgICAgKGlmICh0cnVlPyBhdXRvLXJ1bilcbiAgICAgICAgICAoLl9ydW4gdGhpcyBmYWxzZSlcbiAgICAgICAgICAoYXV0by1ydW4gdGhpcykpKSkpXG5cbiAgKF91cGRhdGUtd2F0Y2hpbmcgW3RoaXMgZGVyZWZlZF1cbiAgICAobGV0IFtuZXcgKHNldCBkZXJlZmVkKVxuICAgICAgICAgIG9sZCAoc2V0IHdhdGNoaW5nKV1cbiAgICAgIChzZXQhIHdhdGNoaW5nIGRlcmVmZWQpXG4gICAgICAoZG9zZXEgW3cgKHMvZGlmZmVyZW5jZSBuZXcgb2xkKV1cbiAgICAgICAgKC1hZGQtd2F0Y2ggdyB0aGlzIGhhbmRsZS1yZWFjdGlvbi1jaGFuZ2UpKVxuICAgICAgKGRvc2VxIFt3IChzL2RpZmZlcmVuY2Ugb2xkIG5ldyldXG4gICAgICAgICgtcmVtb3ZlLXdhdGNoIHcgdGhpcykpKSlcblxuICAoX3F1ZXVlZC1ydW4gW3RoaXNdXG4gICAgKHdoZW4gKGFuZCBkaXJ0eT8gKHNvbWU/IHdhdGNoaW5nKSlcbiAgICAgICguX3J1biB0aGlzIHRydWUpKSlcblxuICAoX3RyeS1jYXB0dXJlIFt0aGlzIGZdXG4gICAgKHRyeVxuICAgICAgKHNldCEgY2F1Z2h0IG5pbClcbiAgICAgIChkZXJlZi1jYXB0dXJlIGYgdGhpcylcbiAgICAgIChjYXRjaCA6ZGVmYXVsdCBlXG4gICAgICAgIChzZXQhIHN0YXRlIGUpXG4gICAgICAgIChzZXQhIGNhdWdodCBlKVxuICAgICAgICAoc2V0ISBkaXJ0eT8gZmFsc2UpKSkpXG5cbiAgKF9ydW4gW3RoaXMgY2hlY2tdXG4gICAgKGxldCBbb2xkc3RhdGUgc3RhdGVcbiAgICAgICAgICByZXMgKGlmIGNoZWNrXG4gICAgICAgICAgICAgICAgKC5fdHJ5LWNhcHR1cmUgdGhpcyBmKVxuICAgICAgICAgICAgICAgIChkZXJlZi1jYXB0dXJlIGYgdGhpcykpXVxuICAgICAgKHdoZW4tbm90IG5vY2FjaGU/XG4gICAgICAgIChzZXQhIHN0YXRlIHJlcylcbiAgICAgICAgOzsgVXNlID0gdG8gZGV0ZXJtaW5lIGVxdWFsaXR5IGZyb20gcmVhY3Rpb25zLCBzaW5jZVxuICAgICAgICA7OyB0aGV5IGFyZSBsaWtlbHkgdG8gcHJvZHVjZSBuZXcgZGF0YSBzdHJ1Y3R1cmVzLlxuICAgICAgICAod2hlbi1ub3QgKG9yIChuaWw/IHdhdGNoZXMpXG4gICAgICAgICAgICAgICAgICAgICAgKD0gb2xkc3RhdGUgcmVzKSlcbiAgICAgICAgICAobm90aWZ5LXcgdGhpcyBvbGRzdGF0ZSByZXMpKSlcbiAgICAgIHJlcykpXG5cbiAgKF9zZXQtb3B0cyBbdGhpcyB7OmtleXMgW2F1dG8tcnVuIG9uLXNldCBvbi1kaXNwb3NlIG5vLWNhY2hlXX1dXG4gICAgKHdoZW4gKHNvbWU/IGF1dG8tcnVuKVxuICAgICAgKHNldCEgKC4tYXV0by1ydW4gdGhpcykgYXV0by1ydW4pKVxuICAgICh3aGVuIChzb21lPyBvbi1zZXQpXG4gICAgICAoc2V0ISAoLi1vbi1zZXQgdGhpcykgb24tc2V0KSlcbiAgICAod2hlbiAoc29tZT8gb24tZGlzcG9zZSlcbiAgICAgIChzZXQhICguLW9uLWRpc3Bvc2UgdGhpcykgb24tZGlzcG9zZSkpXG4gICAgKHdoZW4gKHNvbWU/IG5vLWNhY2hlKVxuICAgICAgKHNldCEgKC4tbm9jYWNoZT8gdGhpcykgbm8tY2FjaGUpKSlcblxuICBJUnVubmFibGVcbiAgKHJ1biBbdGhpc11cbiAgICAoZmx1c2ghKVxuICAgICguX3J1biB0aGlzIGZhbHNlKSlcblxuICBJRGVyZWZcbiAgKC1kZXJlZiBbdGhpc11cbiAgICAod2hlbi1zb21lIFtlIGNhdWdodF1cbiAgICAgICh0aHJvdyBlKSlcbiAgICAobGV0IFtub24tcmVhY3RpdmUgKG5pbD8gKnJhdG9tLWNvbnRleHQqKV1cbiAgICAgICh3aGVuIG5vbi1yZWFjdGl2ZVxuICAgICAgICAoZmx1c2ghKSlcbiAgICAgIChpZiAoYW5kIG5vbi1yZWFjdGl2ZSAobmlsPyBhdXRvLXJ1bikpXG4gICAgICAgICh3aGVuIGRpcnR5P1xuICAgICAgICAgIChsZXQgW29sZHN0YXRlIHN0YXRlXVxuICAgICAgICAgICAgKHNldCEgc3RhdGUgKGYpKVxuICAgICAgICAgICAgKHdoZW4tbm90IChvciAobmlsPyB3YXRjaGVzKSAoPSBvbGRzdGF0ZSBzdGF0ZSkpXG4gICAgICAgICAgICAgIChub3RpZnktdyB0aGlzIG9sZHN0YXRlIHN0YXRlKSkpKVxuICAgICAgICAoZG9cbiAgICAgICAgICAobm90aWZ5LWRlcmVmLXdhdGNoZXIhIHRoaXMpXG4gICAgICAgICAgKHdoZW4gZGlydHk/XG4gICAgICAgICAgICAoLl9ydW4gdGhpcyBmYWxzZSkpKSkpXG4gICAgc3RhdGUpXG5cbiAgSURpc3Bvc2FibGVcbiAgKGRpc3Bvc2UhIFt0aGlzXVxuICAgIChsZXQgW3Mgc3RhdGVcbiAgICAgICAgICB3ZyB3YXRjaGluZ11cbiAgICAgIChzZXQhIHdhdGNoaW5nIG5pbClcbiAgICAgIChzZXQhIHN0YXRlIG5pbClcbiAgICAgIChzZXQhIGF1dG8tcnVuIG5pbClcbiAgICAgIChzZXQhIGRpcnR5PyB0cnVlKVxuICAgICAgKGRvc2VxIFt3IChzZXQgd2cpXVxuICAgICAgICAoLXJlbW92ZS13YXRjaCB3IHRoaXMpKVxuICAgICAgKHdoZW4gKHNvbWU/ICguLW9uLWRpc3Bvc2UgdGhpcykpXG4gICAgICAgICgub24tZGlzcG9zZSB0aGlzIHMpKVxuICAgICAgKHdoZW4tc29tZSBbYSAoLi1vbi1kaXNwb3NlLWFyciB0aGlzKV1cbiAgICAgICAgKGRvdGltZXMgW2kgKGFsZW5ndGggYSldXG4gICAgICAgICAgKChhZ2V0IGEgaSkgdGhpcykpKSkpXG5cbiAgKGFkZC1vbi1kaXNwb3NlISBbdGhpcyBmXVxuICAgIDs7IGYgaXMgY2FsbGVkIHdpdGggdGhlIHJlYWN0aW9uIGFzIGFyZ3VtZW50IHdoZW4gaXQgaXMgbm8gbG9uZ2VyIGFjdGl2ZVxuICAgIChpZi1zb21lIFthICguLW9uLWRpc3Bvc2UtYXJyIHRoaXMpXVxuICAgICAgKC5wdXNoIGEgZilcbiAgICAgIChzZXQhICguLW9uLWRpc3Bvc2UtYXJyIHRoaXMpIChhcnJheSBmKSkpKVxuXG4gIElFcXVpdlxuICAoLWVxdWl2IFtvIG90aGVyXSAoaWRlbnRpY2FsPyBvIG90aGVyKSlcblxuICBJUHJpbnRXaXRoV3JpdGVyXG4gICgtcHItd3JpdGVyIFthIHcgb3B0c10gKHByLWF0b20gYSB3IG9wdHMgXCJSZWFjdGlvblwiIHs6dmFsICgtZGVyZWYgYSl9KSlcblxuICBJSGFzaFxuICAoLWhhc2ggW3RoaXNdIChnb29nL2dldFVpZCB0aGlzKSkpXG5cblxuKGRlZm4gbWFrZS1yZWFjdGlvbiBbZiAmIHs6a2V5cyBbYXV0by1ydW4gb24tc2V0IG9uLWRpc3Bvc2VdfV1cbiAgKGxldCBbcmVhY3Rpb24gKC0+UmVhY3Rpb24gZiBuaWwgdHJ1ZSBmYWxzZSBuaWwgbmlsIG5pbCBuaWwpXVxuICAgICguX3NldC1vcHRzIHJlYWN0aW9uIHs6YXV0by1ydW4gYXV0by1ydW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLXNldCBvbi1zZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOm9uLWRpc3Bvc2Ugb24tZGlzcG9zZX0pXG4gICAgcmVhY3Rpb24pKVxuXG5cblxuKGRlZiBeOnByaXZhdGUgdGVtcC1yZWFjdGlvbiAobWFrZS1yZWFjdGlvbiBuaWwpKVxuXG5cbihkZWZuIHJ1bi1pbi1yZWFjdGlvblxuICBcIkV2YWx1YXRlcyBgZmAgYW5kIHJldHVybnMgdGhlIHJlc3VsdC4gIElmIGBmYCBjYWxscyBgZGVyZWZgIG9uIGFueSByYXRvbXMsXG4gICBjcmVhdGVzIGEgbmV3IFJlYWN0aW9uIHRoYXQgd2F0Y2hlcyB0aG9zZSBhdG9tcyBhbmQgY2FsbHMgYHJ1bmAgd2hlbmV2ZXJcbiAgIGFueSBvZiB0aG9zZSB3YXRjaGVkIHJhdG9tcyBjaGFuZ2UuICBBbHNvLCB0aGUgbmV3IHJlYWN0aW9uIGlzIGFkZGVkIHRvXG4gICBsaXN0IG9mICd3YXRjaGVzJyBvZiBlYWNoIG9mIHRoZSByYXRvbXMuIFRoZSBgcnVuYCBwYXJhbWV0ZXIgaXMgYSBmdW5jdGlvblxuICAgdGhhdCBzaG91bGQgZXhwZWN0IG9uZSBhcmd1bWVudC4gIEl0IGlzIHBhc3NlZCBgb2JqYCB3aGVuIHJ1bi4gIFRoZSBgb3B0c2BcbiAgIGFyZSBhbnkgb3B0aW9ucyBhY2NlcHRlZCBieSBhIFJlYWN0aW9uIGFuZCB3aWxsIGJlIHNldCBvbiB0aGUgbmV3bHkgY3JlYXRlZFxuICAgUmVhY3Rpb24uIFNldHMgdGhlIG5ld2x5IGNyZWF0ZWQgUmVhY3Rpb24gdG8gdGhlIGBrZXlgIG9uIGBvYmpgLlwiXG4gIFtmIG9iaiBrZXkgcnVuIG9wdHNdXG4gIChsZXQgW3IgdGVtcC1yZWFjdGlvblxuICAgICAgICByZXMgKGRlcmVmLWNhcHR1cmUgZiByKV1cbiAgICAod2hlbi1ub3QgKG5pbD8gKC4td2F0Y2hpbmcgcikpXG4gICAgICAoc2V0ISB0ZW1wLXJlYWN0aW9uIChtYWtlLXJlYWN0aW9uIG5pbCkpXG4gICAgICAoLl9zZXQtb3B0cyByIG9wdHMpXG4gICAgICAoc2V0ISAoLi1mIHIpIGYpXG4gICAgICAoc2V0ISAoLi1hdXRvLXJ1biByKSAjKHJ1biBvYmopKVxuICAgICAgKG9iai9zZXQgb2JqIGtleSByKSlcbiAgICByZXMpKVxuXG4oZGVmbiBjaGVjay1kZXJlZnMgW2ZdXG4gIChsZXQgW2N0eCAoanMtb2JqKVxuICAgICAgICByZXMgKGluLWNvbnRleHQgY3R4IGYpXVxuICAgIFtyZXMgKHNvbWU/ICguLWNhcHR1cmVkIGN0eCkpXSkpXG5cblxuOzs7IHdyYXBcblxuKGRlZnR5cGUgV3JhcHBlciBbXjptdXRhYmxlIHN0YXRlIGNhbGxiYWNrIF46bXV0YWJsZSBeYm9vbGVhbiBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgICBeOm11dGFibGUgd2F0Y2hlc11cblxuICBJQXRvbVxuXG4gIElEZXJlZlxuICAoLWRlcmVmIFt0aGlzXVxuICAgICh3aGVuIChkZXY/KVxuICAgICAgKHdoZW4gKGFuZCBjaGFuZ2VkIChzb21lPyAqcmF0b20tY29udGV4dCopKVxuICAgICAgICAod2FybiBcImRlcmVmaW5nIHN0YWxlIHdyYXA6IFwiXG4gICAgICAgICAgICAgIChwci1zdHIgdGhpcykpKSlcbiAgICBzdGF0ZSlcblxuICBJUmVzZXRcbiAgKC1yZXNldCEgW3RoaXMgbmV3dmFsXVxuICAgIChsZXQgW29sZHZhbCBzdGF0ZV1cbiAgICAgIChzZXQhIGNoYW5nZWQgdHJ1ZSlcbiAgICAgIChzZXQhIHN0YXRlIG5ld3ZhbClcbiAgICAgICh3aGVuIChzb21lPyB3YXRjaGVzKVxuICAgICAgICAobm90aWZ5LXcgdGhpcyBvbGR2YWwgbmV3dmFsKSlcbiAgICAgIChjYWxsYmFjayBuZXd2YWwpXG4gICAgICBuZXd2YWwpKVxuXG4gIElTd2FwXG4gICgtc3dhcCEgW2EgZl0gICAgICAgICAgKC1yZXNldCEgYSAoZiBzdGF0ZSkpKVxuICAoLXN3YXAhIFthIGYgeF0gICAgICAgICgtcmVzZXQhIGEgKGYgc3RhdGUgeCkpKVxuICAoLXN3YXAhIFthIGYgeCB5XSAgICAgICgtcmVzZXQhIGEgKGYgc3RhdGUgeCB5KSkpXG4gICgtc3dhcCEgW2EgZiB4IHkgbW9yZV0gKC1yZXNldCEgYSAoYXBwbHkgZiBzdGF0ZSB4IHkgbW9yZSkpKVxuXG4gIElFcXVpdlxuICAoLWVxdWl2IFtfIF5jbGogb3RoZXJdXG4gICAgICAgICAgKGFuZCAoaW5zdGFuY2U/IFdyYXBwZXIgb3RoZXIpXG4gICAgICAgICAgICAgICA7OyBJZiBlaXRoZXIgb2YgdGhlIHdyYXBwZXJzIGhhdmUgY2hhbmdlZCwgZXF1YWxpdHlcbiAgICAgICAgICAgICAgIDs7IGNhbm5vdCBiZSByZWxpZWQgb24uXG4gICAgICAgICAgICAgICAobm90IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAobm90ICguLWNoYW5nZWQgb3RoZXIpKVxuICAgICAgICAgICAgICAgKD0gc3RhdGUgKC4tc3RhdGUgb3RoZXIpKVxuICAgICAgICAgICAgICAgKD0gY2FsbGJhY2sgKC4tY2FsbGJhY2sgb3RoZXIpKSkpXG5cbiAgSVdhdGNoYWJsZVxuICAoLW5vdGlmeS13YXRjaGVzIFt0aGlzIG9sZCBuZXddIChub3RpZnktdyB0aGlzIG9sZCBuZXcpKVxuICAoLWFkZC13YXRjaCBbdGhpcyBrZXkgZl0gICAgICAgIChhZGQtdyB0aGlzIGtleSBmKSlcbiAgKC1yZW1vdmUtd2F0Y2ggW3RoaXMga2V5XSAgICAgICAocmVtb3ZlLXcgdGhpcyBrZXkpKVxuXG4gIElQcmludFdpdGhXcml0ZXJcbiAgKC1wci13cml0ZXIgW2EgdyBvcHRzXSAocHItYXRvbSBhIHcgb3B0cyBcIldyYXBwZXJcIiB7OnZhbCAoLWRlcmVmIGEpfSkpKVxuXG4oZGVmbiBtYWtlLXdyYXBwZXIgW3ZhbHVlIGNhbGxiYWNrLWZuIGFyZ3NdXG4gICgtPldyYXBwZXIgdmFsdWVcbiAgICAgICAgICAgICAodXRpbC9tYWtlLXBhcnRpYWwtZm4gY2FsbGJhY2stZm4gYXJncylcbiAgICAgICAgICAgICBmYWxzZSBuaWwpKVxuXG5cblxuXG4jXyhkb1xuICAoZGVmbiByYXRvbS1wZXJmIFtdXG4gICAgKHNldCEgZGVidWcgZmFsc2UpXG4gICAgKGRvdGltZXMgW18gMTBdXG4gICAgICAobGV0IFtuaXRlIDEwMDAwMFxuICAgICAgICAgICAgYSAoYXRvbSAwKVxuICAgICAgICAgICAgZiAoZm4gW11cbiAgICAgICAgICAgICAgICAocXVvdCBAYSAxMCkpXG4gICAgICAgICAgICBtaWQgKG1ha2UtcmVhY3Rpb24gZilcbiAgICAgICAgICAgIHJlcyAodHJhY2shIChmbiBbXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA7OyAod2l0aC1sZXQgW3ggMV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDs7IEAodHJhY2sgZilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGluYyBAbWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApKV1cbiAgICAgICAgQHJlc1xuICAgICAgICAodGltZSAoZG90aW1lcyBbeCBuaXRlXVxuICAgICAgICAgICAgICAgIChzd2FwISBhIGluYylcbiAgICAgICAgICAgICAgICAoZmx1c2ghKSkpXG4gICAgICAgIChkaXNwb3NlISByZXMpKSkpXG4gIChyYXRvbS1wZXJmKSlcbiJdfQ==