// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.async.impl.buffers");
cljs.core.async.impl.buffers.acopy = (function cljs$core$async$impl$buffers$acopy(src,src_start,dest,dest_start,len){
var cnt = (0);
while(true){
if((cnt < len)){
(dest[(dest_start + cnt)] = (src[(src_start + cnt)]));

var G__25 = (cnt + (1));
cnt = G__25;
continue;
} else {
return null;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.async.impl.buffers.Object}
*/
cljs.core.async.impl.buffers.RingBuffer = (function (head,tail,length,arr){
this.head = head;
this.tail = tail;
this.length = length;
this.arr = arr;
});
(cljs.core.async.impl.buffers.RingBuffer.prototype.pop = (function (){
var self__ = this;
var _ = this;
if((self__.length === (0))){
return null;
} else {
var x = (self__.arr[self__.tail]);
(self__.arr[self__.tail] = null);

(self__.tail = ((self__.tail + (1)) % self__.arr.length));

(self__.length = (self__.length - (1)));

return x;
}
}));

(cljs.core.async.impl.buffers.RingBuffer.prototype.unshift = (function (x){
var self__ = this;
var _ = this;
(self__.arr[self__.head] = x);

(self__.head = ((self__.head + (1)) % self__.arr.length));

(self__.length = (self__.length + (1)));

return null;
}));

(cljs.core.async.impl.buffers.RingBuffer.prototype.unbounded_unshift = (function (x){
var self__ = this;
var this$ = this;
if(((self__.length + (1)) === self__.arr.length)){
this$.resize();
} else {
}

return this$.unshift(x);
}));

(cljs.core.async.impl.buffers.RingBuffer.prototype.resize = (function (){
var self__ = this;
var _ = this;
var new_arr_size = (self__.arr.length * (2));
var new_arr = (new Array(new_arr_size));
if((self__.tail < self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),self__.length);

(self__.tail = (0));

(self__.head = self__.length);

return (self__.arr = new_arr);
} else {
if((self__.tail > self__.head)){
cljs.core.async.impl.buffers.acopy.call(null,self__.arr,self__.tail,new_arr,(0),(self__.arr.length - self__.tail));

cljs.core.async.impl.buffers.acopy.call(null,self__.arr,(0),new_arr,(self__.arr.length - self__.tail),self__.head);

(self__.tail = (0));

(self__.head = self__.length);

return (self__.arr = new_arr);
} else {
if((self__.tail === self__.head)){
(self__.tail = (0));

(self__.head = (0));

return (self__.arr = new_arr);
} else {
return null;
}
}
}
}));

(cljs.core.async.impl.buffers.RingBuffer.prototype.cleanup = (function (keep_QMARK_){
var self__ = this;
var this$ = this;
var n__12482__auto__ = self__.length;
var x = (0);
while(true){
if((x < n__12482__auto__)){
var v_26 = this$.pop();
if(keep_QMARK_.call(null,v_26)){
this$.unshift(v_26);
} else {
}

var G__27 = (x + (1));
x = G__27;
continue;
} else {
return null;
}
break;
}
}));

(cljs.core.async.impl.buffers.RingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"head","head",(869147608),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"tail","tail",(494507963),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"length","length",(-2065447907),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"arr","arr",(2115492975),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(cljs.core.async.impl.buffers.RingBuffer.cljs$lang$type = true);

(cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/RingBuffer");

(cljs.core.async.impl.buffers.RingBuffer.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.buffers/RingBuffer");
}));

/**
 * Positional factory function for cljs.core.async.impl.buffers/RingBuffer.
 */
cljs.core.async.impl.buffers.__GT_RingBuffer = (function cljs$core$async$impl$buffers$__GT_RingBuffer(head,tail,length,arr){
return (new cljs.core.async.impl.buffers.RingBuffer(head,tail,length,arr));
});

cljs.core.async.impl.buffers.ring_buffer = (function cljs$core$async$impl$buffers$ring_buffer(n){
if((n > (0))){
} else {
throw (new Error(["Assert failed: ","Can't create a ring buffer of size 0","\n","(> n 0)"].join('')));
}

return (new cljs.core.async.impl.buffers.RingBuffer((0),(0),(0),(new Array(n))));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.FixedBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (self__.buf.length === self__.n);
}));

(cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
}));

(cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
self__.buf.unbounded_unshift(itm);

return this$__$1;
}));

(cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(cljs.core.async.impl.buffers.FixedBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
}));

(cljs.core.async.impl.buffers.FixedBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
}));

(cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$type = true);

(cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/FixedBuffer");

(cljs.core.async.impl.buffers.FixedBuffer.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.buffers/FixedBuffer");
}));

/**
 * Positional factory function for cljs.core.async.impl.buffers/FixedBuffer.
 */
cljs.core.async.impl.buffers.__GT_FixedBuffer = (function cljs$core$async$impl$buffers$__GT_FixedBuffer(buf,n){
return (new cljs.core.async.impl.buffers.FixedBuffer(buf,n));
});

cljs.core.async.impl.buffers.fixed_buffer = (function cljs$core$async$impl$buffers$fixed_buffer(n){
return (new cljs.core.async.impl.buffers.FixedBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.DroppingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
}));

(cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
}));

(cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
} else {
self__.buf.unshift(itm);
}

return this$__$1;
}));

(cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(cljs.core.async.impl.buffers.DroppingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
}));

(cljs.core.async.impl.buffers.DroppingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
}));

(cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$type = true);

(cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/DroppingBuffer");

(cljs.core.async.impl.buffers.DroppingBuffer.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.buffers/DroppingBuffer");
}));

/**
 * Positional factory function for cljs.core.async.impl.buffers/DroppingBuffer.
 */
cljs.core.async.impl.buffers.__GT_DroppingBuffer = (function cljs$core$async$impl$buffers$__GT_DroppingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(buf,n));
});

cljs.core.async.impl.buffers.dropping_buffer = (function cljs$core$async$impl$buffers$dropping_buffer(n){
return (new cljs.core.async.impl.buffers.DroppingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.SlidingBuffer = (function (buf,n){
this.buf = buf;
this.n = n;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return false;
}));

(cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.pop();
}));

(cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if((self__.buf.length === self__.n)){
cljs.core.async.impl.protocols.remove_BANG_.call(null,this$__$1);
} else {
}

self__.buf.unshift(itm);

return this$__$1;
}));

(cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(cljs.core.async.impl.buffers.SlidingBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.buf.length;
}));

(cljs.core.async.impl.buffers.SlidingBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"buf","buf",(1426618187),null),new cljs.core.Symbol(null,"n","n",(-2092305744),null)], null);
}));

(cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$type = true);

(cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/SlidingBuffer");

(cljs.core.async.impl.buffers.SlidingBuffer.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.buffers/SlidingBuffer");
}));

/**
 * Positional factory function for cljs.core.async.impl.buffers/SlidingBuffer.
 */
cljs.core.async.impl.buffers.__GT_SlidingBuffer = (function cljs$core$async$impl$buffers$__GT_SlidingBuffer(buf,n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(buf,n));
});

cljs.core.async.impl.buffers.sliding_buffer = (function cljs$core$async$impl$buffers$sliding_buffer(n){
return (new cljs.core.async.impl.buffers.SlidingBuffer(cljs.core.async.impl.buffers.ring_buffer.call(null,n),n));
});
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.buffers !== 'undefined') && (typeof cljs.core.async.impl.buffers.NO_VAL !== 'undefined')){
} else {
cljs.core.async.impl.buffers.NO_VAL = (new Object());
}
cljs.core.async.impl.buffers.undelivered_QMARK_ = (function cljs$core$async$impl$buffers$undelivered_QMARK_(val){
return (cljs.core.async.impl.buffers.NO_VAL === val);
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.UnblockingBuffer}
 * @implements {cljs.core.async.impl.protocols.Buffer}
 * @implements {cljs.core.ICounted}
*/
cljs.core.async.impl.buffers.PromiseBuffer = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition0$ = 2;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$UnblockingBuffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 = (function (this$,itm){
var self__ = this;
var this$__$1 = this;
if(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val)){
(self__.val = itm);
} else {
}

return this$__$1;
}));

(cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val)){
return (self__.val = null);
} else {
return null;
}
}));

(cljs.core.async.impl.buffers.PromiseBuffer.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(cljs.core.async.impl.buffers.undelivered_QMARK_.call(null,self__.val)){
return (0);
} else {
return (1);
}
}));

(cljs.core.async.impl.buffers.PromiseBuffer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$type = true);

(cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorStr = "cljs.core.async.impl.buffers/PromiseBuffer");

(cljs.core.async.impl.buffers.PromiseBuffer.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.buffers/PromiseBuffer");
}));

/**
 * Positional factory function for cljs.core.async.impl.buffers/PromiseBuffer.
 */
cljs.core.async.impl.buffers.__GT_PromiseBuffer = (function cljs$core$async$impl$buffers$__GT_PromiseBuffer(val){
return (new cljs.core.async.impl.buffers.PromiseBuffer(val));
});

cljs.core.async.impl.buffers.promise_buffer = (function cljs$core$async$impl$buffers$promise_buffer(){
return (new cljs.core.async.impl.buffers.PromiseBuffer(cljs.core.async.impl.buffers.NO_VAL));
});

//# sourceURL=cljs/core/async/impl/buffers.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL2FzeW5jL2ltcGwvYnVmZmVycy5qcyIsInNvdXJjZXMiOlsiYnVmZmVycy5jbGpzIl0sImxpbmVDb3VudCI6NDY0LCJtYXBwaW5ncyI6IjtBQWNBLHFDQUFBLHJDQUFNQSxrRkFBT0MsSUFBSUMsVUFBVUMsS0FBS0MsV0FBV0M7QUFBM0MsQUFDRSxVQUFBLE5BQU9DOztBQUFQLEFBQ0UsR0FBTSxDQUFHQSxNQUFJRDtBQUFiLEFBQ0UsQ0FBTUYsS0FDQSxDQUFHQyxhQUFXRSxRQUNkLENBQU1MLElBQUksQ0FBR0MsWUFBVUk7O0FBQzdCLFlBQU8sT0FBQSxOQUFLQTs7OztBQUpkOzs7OztBQU1KLEFBQUE7Ozs7Ozs7Ozs7O0FBQUEsQUFBQSxDQUFBLEFBQUEsd0RBQUEseERBQVNLOztBQUFULEFBQUEsUUFBQSxKQUVRTTtBQUZSLEFBR0ksR0FBVSxtQkFBQSxsQkFBT0Y7QUFBakI7O0FBQUEsQUFDRSxJQUFNRyxJQUFFLENBQU1GLFdBQUlGO0FBQWxCLEFBQ0UsMkJBQUEsMUJBQU1FLFdBQUlGOztBQUNWLENBQU1BLGNBQUssQ0FBUSxlQUFBLGRBQUtBLHFCQUFNLEFBQVNFOztBQUN2QyxDQUFNRCxnQkFBTyxpQkFBQSxoQkFBS0E7O0FBQ2xCRzs7OztBQVJSLENBQUEsQUFBQSw0REFBQSw1REFBU1AsdUVBVUtPOztBQVZkLEFBQUEsUUFBQSxKQVVZRDtBQVZaLEFBV0ksQ0FBTUQsV0FBSUgsZUFBS0s7O0FBQ2YsQ0FBTUwsY0FBSyxDQUFRLGVBQUEsZEFBS0EscUJBQU0sQUFBU0c7O0FBQ3ZDLENBQU1ELGdCQUFPLGlCQUFBLGhCQUFLQTs7QUFidEI7OztBQUFBLENBQUEsQUFBQSxzRUFBQSx0RUFBU0osaUZBZ0JrQk87O0FBaEIzQixBQUFBLFlBQUEsUkFnQnNCQztBQWhCdEIsQUFpQkksR0FBSSxDQUFJLGlCQUFBLGhCQUFLSix5QkFBUSxBQUFTQztBQUM1QixBQUFTRzs7QUFEWDs7QUFFQSxPQUFVQSxjQUFLRDs7O0FBbkJuQixDQUFBLEFB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QUFBLFdBQUE3QyxvQkFBQUMsc0JBQUFDLHpIQUFTMkM7QUFBVCxBQUFBLE9BQUExQywyQkFBQUYsc0JBQUE7OztBQUFBOzs7a0RBQUEsbERBQVM2Qyw0R0FBeUJGO0FBQWxDLEFBQUEsWUFBQUMsMkNBQWtDRDs7O0FBQXpCQyxBQWtCVCw4Q0FBQSw5Q0FBTUU7QUFBTixBQUNFLFlBQUFGLDJDQUFnQkoiLCJuYW1lcyI6WyJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL2Fjb3B5Iiwic3JjIiwic3JjLXN0YXJ0IiwiZGVzdCIsImRlc3Qtc3RhcnQiLCJsZW4iLCJjbnQiLCJ0aGlzX18xMTM4NV9fYXV0b19fIiwid3JpdGVyX18xMTM4Nl9fYXV0b19fIiwib3B0X18xMTM4N19fYXV0b19fIiwiY2xqcy5jb3JlLy13cml0ZSIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvUmluZ0J1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvLT5SaW5nQnVmZmVyIiwiaGVhZCIsInRhaWwiLCJsZW5ndGgiLCJhcnIiLCJfIiwieCIsInRoaXMiLCJuZXctYXJyLXNpemUiLCJuZXctYXJyIiwianMvQXJyYXkiLCJrZWVwPyIsIm5fXzEyNDgyX19hdXRvX18iLCJ2IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9yaW5nLWJ1ZmZlciIsIm4iLCJqcy9FcnJvciIsImNsanMuY29yZS9QUk9UT0NPTF9TRU5USU5FTCIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvRml4ZWRCdWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzLy0+Rml4ZWRCdWZmZXIiLCJidWYiLCJpdG0iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL2ZpeGVkLWJ1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvRHJvcHBpbmdCdWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzLy0+RHJvcHBpbmdCdWZmZXIiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL2Ryb3BwaW5nLWJ1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvU2xpZGluZ0J1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvLT5TbGlkaW5nQnVmZmVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL3JlbW92ZSEiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL3NsaWRpbmctYnVmZmVyIiwianMvY2xqcyIsImpzL2NsanMuY29yZSIsImpzL2NsanMuY29yZS5hc3luYyIsImpzL2NsanMuY29yZS5hc3luYy5pbXBsIiwianMvY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycyIsImpzL2NsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMuTk8tVkFMIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9OTy1WQUwiLCJqcy9PYmplY3QiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5idWZmZXJzL3VuZGVsaXZlcmVkPyIsInZhbCIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvUHJvbWlzZUJ1ZmZlciIsImNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnMvLT5Qcm9taXNlQnVmZmVyIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuYnVmZmVycy9wcm9taXNlLWJ1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyI7OyAgIENvcHlyaWdodCAoYykgUmljaCBIaWNrZXkgYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjs7ICAgVGhlIHVzZSBhbmQgZGlzdHJpYnV0aW9uIHRlcm1zIGZvciB0aGlzIHNvZnR3YXJlIGFyZSBjb3ZlcmVkIGJ5IHRoZVxuOzsgICBFY2xpcHNlIFB1YmxpYyBMaWNlbnNlIDEuMCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2VjbGlwc2UtMS4wLnBocClcbjs7ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjs7ICAgQnkgdXNpbmcgdGhpcyBzb2Z0d2FyZSBpbiBhbnkgZmFzaGlvbiwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieVxuOzsgICB0aGUgdGVybXMgb2YgdGhpcyBsaWNlbnNlLlxuOzsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuKG5zIGNsanMuY29yZS5hc3luYy5pbXBsLmJ1ZmZlcnNcbiAgKDpyZXF1aXJlIFtjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMgOmFzIGltcGxdKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbjs7IERPIE5PVCBVU0UsIHRoaXMgaXMgaW50ZXJuYWwgYnVmZmVyIHJlcHJlc2VudGF0aW9uXG5cbihkZWZuIGFjb3B5IFtzcmMgc3JjLXN0YXJ0IGRlc3QgZGVzdC1zdGFydCBsZW5dXG4gIChsb29wIFtjbnQgMF1cbiAgICAod2hlbiAoPCBjbnQgbGVuKVxuICAgICAgKGFzZXQgZGVzdFxuICAgICAgICAgICAgKCsgZGVzdC1zdGFydCBjbnQpXG4gICAgICAgICAgICAoYWdldCBzcmMgKCsgc3JjLXN0YXJ0IGNudCkpKVxuICAgICAgKHJlY3VyIChpbmMgY250KSkpKSlcblxuKGRlZnR5cGUgUmluZ0J1ZmZlciBbXjptdXRhYmxlIGhlYWQgXjptdXRhYmxlIHRhaWwgXjptdXRhYmxlIGxlbmd0aCBeOm11dGFibGUgYXJyXVxuICBPYmplY3RcbiAgKHBvcCBbX11cbiAgICAod2hlbi1ub3QgKHplcm8/IGxlbmd0aClcbiAgICAgIChsZXQgW3ggKGFnZXQgYXJyIHRhaWwpXVxuICAgICAgICAoYXNldCBhcnIgdGFpbCBuaWwpXG4gICAgICAgIChzZXQhIHRhaWwgKGpzLW1vZCAoaW5jIHRhaWwpIChhbGVuZ3RoIGFycikpKVxuICAgICAgICAoc2V0ISBsZW5ndGggKGRlYyBsZW5ndGgpKVxuICAgICAgICB4KSkpXG5cbiAgKHVuc2hpZnQgW18geF1cbiAgICAoYXNldCBhcnIgaGVhZCB4KVxuICAgIChzZXQhIGhlYWQgKGpzLW1vZCAoaW5jIGhlYWQpIChhbGVuZ3RoIGFycikpKVxuICAgIChzZXQhIGxlbmd0aCAoaW5jIGxlbmd0aCkpXG4gICAgbmlsKVxuXG4gICh1bmJvdW5kZWQtdW5zaGlmdCBbdGhpcyB4XVxuICAgIChpZiAoPT0gKGluYyBsZW5ndGgpIChhbGVuZ3RoIGFycikpXG4gICAgICAoLnJlc2l6ZSB0aGlzKSlcbiAgICAoLnVuc2hpZnQgdGhpcyB4KSlcblxuICA7OyBEb3VibGVzIHRoZSBzaXplIG9mIHRoZSBidWZmZXIgd2hpbGUgcmV0YWluaW5nIGFsbCB0aGUgZXhpc3RpbmcgdmFsdWVzXG4gIChyZXNpemVcbiAgICBbX11cbiAgICAobGV0IFtuZXctYXJyLXNpemUgKCogKGFsZW5ndGggYXJyKSAyKVxuICAgICAgICAgIG5ldy1hcnIgKG1ha2UtYXJyYXkgbmV3LWFyci1zaXplKV1cbiAgICAgIChjb25kXG4gICAgICAgKDwgdGFpbCBoZWFkKVxuICAgICAgIChkbyAoYWNvcHkgYXJyIHRhaWwgbmV3LWFyciAwIGxlbmd0aClcbiAgICAgICAgICAgKHNldCEgdGFpbCAwKVxuICAgICAgICAgICAoc2V0ISBoZWFkIGxlbmd0aClcbiAgICAgICAgICAgKHNldCEgYXJyIG5ldy1hcnIpKVxuXG4gICAgICAgKD4gdGFpbCBoZWFkKVxuICAgICAgIChkbyAoYWNvcHkgYXJyIHRhaWwgbmV3LWFyciAwICgtIChhbGVuZ3RoIGFycikgdGFpbCkpXG4gICAgICAgICAgIChhY29weSBhcnIgMCBuZXctYXJyICgtIChhbGVuZ3RoIGFycikgdGFpbCkgaGVhZClcbiAgICAgICAgICAgKHNldCEgdGFpbCAwKVxuICAgICAgICAgICAoc2V0ISBoZWFkIGxlbmd0aClcbiAgICAgICAgICAgKHNldCEgYXJyIG5ldy1hcnIpKVxuXG4gICAgICAgKD09IHRhaWwgaGVhZClcbiAgICAgICAoZG8gKHNldCEgdGFpbCAwKVxuICAgICAgICAgICAoc2V0ISBoZWFkIDApXG4gICAgICAgICAgIChzZXQhIGFyciBuZXctYXJyKSkpKSlcblxuICAoY2xlYW51cCBbdGhpcyBrZWVwP11cbiAgICAoZG90aW1lcyBbeCBsZW5ndGhdXG4gICAgICAobGV0IFt2ICgucG9wIHRoaXMpXVxuICAgICAgICAod2hlbiBeYm9vbGVhbiAoa2VlcD8gdilcbiAgICAgICAgICAoLnVuc2hpZnQgdGhpcyB2KSkpKSkpXG5cbihkZWZuIHJpbmctYnVmZmVyIFtuXVxuICAoYXNzZXJ0ICg+IG4gMCkgXCJDYW4ndCBjcmVhdGUgYSByaW5nIGJ1ZmZlciBvZiBzaXplIDBcIilcbiAgKFJpbmdCdWZmZXIuIDAgMCAwIChtYWtlLWFycmF5IG4pKSlcblxuOzsgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuKGRlZnR5cGUgRml4ZWRCdWZmZXIgW2J1ZiBuXVxuICBpbXBsL0J1ZmZlclxuICAoZnVsbD8gW3RoaXNdXG4gICAgKD09ICguLWxlbmd0aCBidWYpIG4pKVxuICAocmVtb3ZlISBbdGhpc11cbiAgICAoLnBvcCBidWYpKVxuICAoYWRkISogW3RoaXMgaXRtXVxuICAgICgudW5ib3VuZGVkLXVuc2hpZnQgYnVmIGl0bSlcbiAgICB0aGlzKVxuICAoY2xvc2UtYnVmISBbdGhpc10pXG4gIGNsanMuY29yZS9JQ291bnRlZFxuICAoLWNvdW50IFt0aGlzXVxuICAgICguLWxlbmd0aCBidWYpKSlcblxuKGRlZm4gZml4ZWQtYnVmZmVyIFtuXVxuICAoRml4ZWRCdWZmZXIuIChyaW5nLWJ1ZmZlciBuKSBuKSlcblxuKGRlZnR5cGUgRHJvcHBpbmdCdWZmZXIgW2J1ZiBuXVxuICBpbXBsL1VuYmxvY2tpbmdCdWZmZXJcbiAgaW1wbC9CdWZmZXJcbiAgKGZ1bGw/IFt0aGlzXVxuICAgIGZhbHNlKVxuICAocmVtb3ZlISBbdGhpc11cbiAgICAoLnBvcCBidWYpKVxuICAoYWRkISogW3RoaXMgaXRtXVxuICAgICh3aGVuLW5vdCAoPT0gKC4tbGVuZ3RoIGJ1ZikgbilcbiAgICAgICgudW5zaGlmdCBidWYgaXRtKSlcbiAgICB0aGlzKVxuICAoY2xvc2UtYnVmISBbdGhpc10pXG4gIGNsanMuY29yZS9JQ291bnRlZFxuICAoLWNvdW50IFt0aGlzXVxuICAgICguLWxlbmd0aCBidWYpKSlcblxuKGRlZm4gZHJvcHBpbmctYnVmZmVyIFtuXVxuICAoRHJvcHBpbmdCdWZmZXIuIChyaW5nLWJ1ZmZlciBuKSBuKSlcblxuKGRlZnR5cGUgU2xpZGluZ0J1ZmZlciBbYnVmIG5dXG4gIGltcGwvVW5ibG9ja2luZ0J1ZmZlclxuICBpbXBsL0J1ZmZlclxuICAoZnVsbD8gW3RoaXNdXG4gICAgZmFsc2UpXG4gIChyZW1vdmUhIFt0aGlzXVxuICAgICgucG9wIGJ1ZikpXG4gIChhZGQhKiBbdGhpcyBpdG1dXG4gICAgKHdoZW4gKD09ICguLWxlbmd0aCBidWYpIG4pXG4gICAgICAoaW1wbC9yZW1vdmUhIHRoaXMpKVxuICAgICgudW5zaGlmdCBidWYgaXRtKVxuICAgIHRoaXMpXG4gIChjbG9zZS1idWYhIFt0aGlzXSlcbiAgY2xqcy5jb3JlL0lDb3VudGVkXG4gICgtY291bnQgW3RoaXNdXG4gICAgKC4tbGVuZ3RoIGJ1ZikpKVxuXG4oZGVmbiBzbGlkaW5nLWJ1ZmZlciBbbl1cbiAgKFNsaWRpbmdCdWZmZXIuIChyaW5nLWJ1ZmZlciBuKSBuKSlcblxuKGRlZm9uY2UgXjpwcml2YXRlIE5PLVZBTCAoanMvT2JqZWN0LikpXG4oZGVmbi0gdW5kZWxpdmVyZWQ/IFt2YWxdXG4gIChpZGVudGljYWw/IE5PLVZBTCB2YWwpKVxuXG4oZGVmdHlwZSBQcm9taXNlQnVmZmVyIFteOm11dGFibGUgdmFsXVxuICBpbXBsL1VuYmxvY2tpbmdCdWZmZXJcbiAgaW1wbC9CdWZmZXJcbiAgKGZ1bGw/IFtfXVxuICAgIGZhbHNlKVxuICAocmVtb3ZlISBbX11cbiAgICB2YWwpXG4gIChhZGQhKiBbdGhpcyBpdG1dXG4gICAgKHdoZW4gKHVuZGVsaXZlcmVkPyB2YWwpXG4gICAgICAoc2V0ISB2YWwgaXRtKSlcbiAgICB0aGlzKVxuICAoY2xvc2UtYnVmISBbX11cbiAgICAod2hlbiAodW5kZWxpdmVyZWQ/IHZhbClcbiAgICAgIChzZXQhIHZhbCBuaWwpKSlcbiAgY2xqcy5jb3JlL0lDb3VudGVkXG4gICgtY291bnQgW19dXG4gICAgKGlmICh1bmRlbGl2ZXJlZD8gdmFsKSAwIDEpKSlcblxuKGRlZm4gcHJvbWlzZS1idWZmZXIgW11cbiAgKFByb21pc2VCdWZmZXIuIE5PLVZBTCkpXG4iXX0=