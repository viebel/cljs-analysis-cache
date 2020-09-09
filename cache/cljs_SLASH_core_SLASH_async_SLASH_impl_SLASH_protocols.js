// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.async.impl.protocols");
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

/**
 * @interface
 */
cljs.core.async.impl.protocols.ReadPort = function(){};

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((((!((port == null)))) && ((!((port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 == null)))))){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__11578__auto__ = (((port == null))?null:port);
var m__11579__auto__ = (cljs.core.async.impl.protocols.take_BANG_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,port,fn1_handler);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,port,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"ReadPort.take!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.WritePort = function(){};

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 *                             Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((((!((port == null)))) && ((!((port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 == null)))))){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__11578__auto__ = (((port == null))?null:port);
var m__11579__auto__ = (cljs.core.async.impl.protocols.put_BANG_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,port,val,fn1_handler);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,port,val,fn1_handler);
} else {
throw cljs.core.missing_protocol.call(null,"WritePort.put!",port);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Channel = function(){};

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((((!((chan == null)))) && ((!((chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 == null)))))){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__11578__auto__ = (((chan == null))?null:chan);
var m__11579__auto__ = (cljs.core.async.impl.protocols.close_BANG_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,chan);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.close!",chan);
}
}
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((((!((chan == null)))) && ((!((chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 == null)))))){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__11578__auto__ = (((chan == null))?null:chan);
var m__11579__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,chan);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,chan);
} else {
throw cljs.core.missing_protocol.call(null,"Channel.closed?",chan);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Handler = function(){};

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((((!((h == null)))) && ((!((h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 == null)))))){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__11578__auto__ = (((h == null))?null:h);
var m__11579__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,h);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.active?",h);
}
}
}
});

/**
 * returns true if this handler may be blocked, otherwise it must not block
 */
cljs.core.async.impl.protocols.blockable_QMARK_ = (function cljs$core$async$impl$protocols$blockable_QMARK_(h){
if((((!((h == null)))) && ((!((h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 == null)))))){
return h.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(h);
} else {
var x__11578__auto__ = (((h == null))?null:h);
var m__11579__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,h);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.blockable_QMARK_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.blockable?",h);
}
}
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((((!((h == null)))) && ((!((h.cljs$core$async$impl$protocols$Handler$commit$arity$1 == null)))))){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__11578__auto__ = (((h == null))?null:h);
var m__11579__auto__ = (cljs.core.async.impl.protocols.commit[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,h);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.commit["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,h);
} else {
throw cljs.core.missing_protocol.call(null,"Handler.commit",h);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.impl.protocols.Buffer = function(){};

/**
 * returns true if buffer can accept put
 */
cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__11578__auto__ = (((b == null))?null:b);
var m__11579__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,b);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.full?",b);
}
}
}
});

/**
 * remove and return next item from buffer, called under chan mutex
 */
cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__11578__auto__ = (((b == null))?null:b);
var m__11579__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,b);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.remove!",b);
}
}
}
});

/**
 * if room, add item to the buffer, returns b, called under chan mutex
 */
cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__11578__auto__ = (((b == null))?null:b);
var m__11579__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,b,itm);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,b,itm);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.add!*",b);
}
}
}
});

/**
 * called on chan closed under chan mutex, return ignored
 */
cljs.core.async.impl.protocols.close_buf_BANG_ = (function cljs$core$async$impl$protocols$close_buf_BANG_(b){
if((((!((b == null)))) && ((!((b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1 == null)))))){
return b.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(b);
} else {
var x__11578__auto__ = (((b == null))?null:b);
var m__11579__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_[goog.typeOf(x__11578__auto__)]);
if((!((m__11579__auto__ == null)))){
return m__11579__auto__.call(null,b);
} else {
var m__11576__auto__ = (cljs.core.async.impl.protocols.close_buf_BANG_["_"]);
if((!((m__11576__auto__ == null)))){
return m__11576__auto__.call(null,b);
} else {
throw cljs.core.missing_protocol.call(null,"Buffer.close-buf!",b);
}
}
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(var_args){
var G__23 = arguments.length;
switch (G__23) {
case (1):
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
}));

(cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if((!((itm == null)))){
} else {
throw (new Error("Assert failed: (not (nil? itm))"));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_.call(null,b,itm);
}));

(cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = (2));


/**
 * @interface
 */
cljs.core.async.impl.protocols.UnblockingBuffer = function(){};


//# sourceURL=cljs/core/async/impl/protocols.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL2FzeW5jL2ltcGwvcHJvdG9jb2xzLmpzIiwic291cmNlcyI6WyJwcm90b2NvbHMuY2xqcyJdLCJsaW5lQ291bnQiOjMxMCwibWFwcGluZ3MiOiI7QUFVQSxnREFBQSxoREFBYUE7QUFFYixBQUFBO0FBQUE7OzswQ0FBQSwxQ0FBYU87O0FBQWI7Ozs0Q0FBQSw1Q0FDR0osZ0dBQU9LLEtBQUtDO0FBRGYsQUFBQSxHQUFBLEVBQUEsR0FBQSxTQUFBLGFBQUEsR0FBQSxDQUFBLG1FQUFBLDVGQUNVRCx5QkFBQUE7QUFEVixPQUNVQSxnRUFBQUEsS0FBS0M7O0FBRGYsSUFBQVIsbUJBQUEsRUFBQSxTQUFBLE9BQUEsZkFDVU8sb0JBQUFBO0lBRFZOLG1CQUFBLENBQUFDLDBDQUFBLEFBQUFDLFlBQUFIO0FBQUEsQUFBQSxHQUFBLEdBQUEsQ0FBQUMsb0JBQUE7QUFBQSxPQUFBQSwyQkFDVU0sS0FBS0M7O0FBRGYsSUFBQUosbUJBQUEsQ0FBQUYsMENBQUE7QUFBQSxBQUFBLEdBQUEsR0FBQSxDQUFBRSxvQkFBQTtBQUFBLE9BQUFBLDJCQUNVRyxLQUFLQzs7QUFEZixNQUFBLEFBQUFILHFDQUFBLGlCQUNVRTs7Ozs7O0FBRFYsQUFHQSxBQUFBO0FBQUE7OzsyQ0FBQSwzQ0FBYUc7O0FBQWI7Ozs7MkNBQUEsM0NBQ0dELDhGQUFNRixLQUFLSSxJQUFJSDtBQURsQixBQUFBLEdBQUEsRUFBQSxHQUFBLFNBQUEsYUFBQSxHQUFBLENBQUEsbUVBQUEsNUZBQ1NELHlCQUFBQTtBQURULE9BQ1NBLGdFQUFBQSxLQUFLSSxJQUFJSDs7QUFEbEIsSUFBQVIsbUJBQUEsRUFBQSxTQUFBLE9BQUEsZkFDU08sb0JBQUFBO0lBRFROLG1CQUFBLENBQUFRLHlDQUFBLEFBQUFOLFlBQUFIO0FBQUEsQUFBQSxHQUFBLEdBQUEsQ0FBQUMsb0JBQUE7QUFBQSxPQUFBQSwyQkFDU00sS0FBS0ksSUFBSUg7O0FBRGxCLElBQUFKLG1CQUFBLENBQUFLLHlDQUFBO0FBQUEsQUFB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LFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsdUVBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsTUFBQSxLQUFBQyxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxDQUFBLHlFQUFBLHpFQUFNRCxvRkFDRko7QUFESixBQUNPQTs7O0FBRFAsQ0FBQSx5RUFBQSx6RUFBTUksb0ZBRUZKLEVBQUVDO0FBRk4sQUFHSyxHQUFRLEdBQUssUUFBQSxQQUFNQTtBQUFuQjtBQUFBLEFBQUEsTUFBQSxLQUFBSSxNQUFBOzs7QUFDQSxPQUFDUix5REFBTUcsRUFBRUM7OztBQUpkLENBQUEsbUVBQUEsbkVBQU1HOztBQUFOLEFBT0EsQUFBQTtBQUFBOzs7a0RBQUEsbERBQWFFOztBQUFiIiwibmFtZXMiOlsiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL01BWC1RVUVVRS1TSVpFIiwieF9fMTE1NzhfX2F1dG9fXyIsIm1fXzExNTc5X19hdXRvX18iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvdGFrZSEiLCJnb29nL3R5cGVPZiIsIm1fXzExNTc2X19hdXRvX18iLCJjbGpzLmNvcmUvbWlzc2luZy1wcm90b2NvbCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9SZWFkUG9ydCIsInBvcnQiLCJmbjEtaGFuZGxlciIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9wdXQhIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL1dyaXRlUG9ydCIsInZhbCIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9jbG9zZSEiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvY2xvc2VkPyIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9DaGFubmVsIiwiY2hhbiIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9hY3RpdmU/IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Jsb2NrYWJsZT8iLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvY29tbWl0IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL0hhbmRsZXIiLCJoIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Z1bGw/IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL3JlbW92ZSEiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvYWRkISoiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvY2xvc2UtYnVmISIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9CdWZmZXIiLCJiIiwiaXRtIiwidmFyX2FyZ3MiLCJHX18yMyIsImNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scy9hZGQhIiwianMvRXJyb3IiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC5wcm90b2NvbHMvVW5ibG9ja2luZ0J1ZmZlciJdLCJzb3VyY2VzQ29udGVudCI6WyI7OyAgIENvcHlyaWdodCAoYykgUmljaCBIaWNrZXkgYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjs7ICAgVGhlIHVzZSBhbmQgZGlzdHJpYnV0aW9uIHRlcm1zIGZvciB0aGlzIHNvZnR3YXJlIGFyZSBjb3ZlcmVkIGJ5IHRoZVxuOzsgICBFY2xpcHNlIFB1YmxpYyBMaWNlbnNlIDEuMCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2VjbGlwc2UtMS4wLnBocClcbjs7ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjs7ICAgQnkgdXNpbmcgdGhpcyBzb2Z0d2FyZSBpbiBhbnkgZmFzaGlvbiwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieVxuOzsgICB0aGUgdGVybXMgb2YgdGhpcyBsaWNlbnNlLlxuOzsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuKG5zIGNsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scylcblxuKGRlZiBeOmNvbnN0IE1BWC1RVUVVRS1TSVpFIDEwMjQpXG5cbihkZWZwcm90b2NvbCBSZWFkUG9ydFxuICAodGFrZSEgW3BvcnQgZm4xLWhhbmRsZXJdIFwiZGVyZWZhYmxlIHZhbCBpZiB0YWtlbiwgbmlsIGlmIHRha2Ugd2FzIGVucXVldWVkXCIpKVxuXG4oZGVmcHJvdG9jb2wgV3JpdGVQb3J0XG4gIChwdXQhIFtwb3J0IHZhbCBmbjEtaGFuZGxlcl0gXCJkZXJlZmFibGUgYm9vbGVhbiAoZmFsc2UgaWYgYWxyZWFkeSBjbG9zZWQpIGlmIGhhbmRsZWQsIG5pbCBpZiBwdXQgd2FzIGVucXVldWVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11c3QgdGhyb3cgb24gbmlsIHZhbC5cIikpXG5cbihkZWZwcm90b2NvbCBDaGFubmVsXG4gIChjbG9zZSEgW2NoYW5dKVxuICAoY2xvc2VkPyBbY2hhbl0pKVxuXG4oZGVmcHJvdG9jb2wgSGFuZGxlclxuICAoYWN0aXZlPyBbaF0gXCJyZXR1cm5zIHRydWUgaWYgaGFzIGNhbGxiYWNrLiBNdXN0IHdvcmsgdy9vIGxvY2tcIilcbiAgKGJsb2NrYWJsZT8gW2hdIFwicmV0dXJucyB0cnVlIGlmIHRoaXMgaGFuZGxlciBtYXkgYmUgYmxvY2tlZCwgb3RoZXJ3aXNlIGl0IG11c3Qgbm90IGJsb2NrXCIpXG4gICNfKGxvY2staWQgW2hdIFwiYSB1bmlxdWUgaWQgZm9yIGxvY2sgYWNxdWlzaXRpb24gb3JkZXIsIDAgaWYgbm8gbG9ja1wiKVxuICAoY29tbWl0IFtoXSBcImNvbW1pdCB0byBmdWxmaWxsaW5nIGl0cyBlbmQgb2YgdGhlIHRyYW5zZmVyLCByZXR1cm5zIGNiLiBNdXN0IGJlIGNhbGxlZCB3aXRoaW4gbG9ja1wiKSlcblxuKGRlZnByb3RvY29sIEJ1ZmZlclxuICAoZnVsbD8gW2JdIFwicmV0dXJucyB0cnVlIGlmIGJ1ZmZlciBjYW4gYWNjZXB0IHB1dFwiKVxuICAocmVtb3ZlISBbYl0gXCJyZW1vdmUgYW5kIHJldHVybiBuZXh0IGl0ZW0gZnJvbSBidWZmZXIsIGNhbGxlZCB1bmRlciBjaGFuIG11dGV4XCIpXG4gIChhZGQhKiBbYiBpdG1dIFwiaWYgcm9vbSwgYWRkIGl0ZW0gdG8gdGhlIGJ1ZmZlciwgcmV0dXJucyBiLCBjYWxsZWQgdW5kZXIgY2hhbiBtdXRleFwiKVxuICAoY2xvc2UtYnVmISBbYl0gXCJjYWxsZWQgb24gY2hhbiBjbG9zZWQgdW5kZXIgY2hhbiBtdXRleCwgcmV0dXJuIGlnbm9yZWRcIikpXG5cbihkZWZuIGFkZCFcbiAgKFtiXSBiKVxuICAoW2IgaXRtXVxuICAgICAoYXNzZXJ0IChub3QgKG5pbD8gaXRtKSkpXG4gICAgIChhZGQhKiBiIGl0bSkpKVxuXG47OyBEZWZpbmVzIGEgYnVmZmVyIHRoYXQgd2lsbCBuZXZlciBibG9jayAocmV0dXJuIHRydWUgdG8gZnVsbD8pXG4oZGVmcHJvdG9jb2wgVW5ibG9ja2luZ0J1ZmZlcilcbiJdfQ==