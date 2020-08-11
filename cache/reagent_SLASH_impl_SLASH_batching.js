// Compiled by ClojureScript 1.10.597
goog.provide("reagent.impl.batching");
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.mount_count !== 'undefined')){
} else {
reagent.impl.batching.mount_count = (0);
}
reagent.impl.batching.next_mount_count = (function reagent$impl$batching$next_mount_count(){
return (reagent.impl.batching.mount_count = (reagent.impl.batching.mount_count + (1)));
});
reagent.impl.batching.fake_raf = (function reagent$impl$batching$fake_raf(f){
return setTimeout(f,(16));
});
reagent.impl.batching.next_tick = (((!(reagent.impl.util.is_client)))?reagent.impl.batching.fake_raf:(function (){var w = window;
return (function (){var or__10116__auto__ = w.requestAnimationFrame;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var or__10116__auto____$1 = w.webkitRequestAnimationFrame;
if(cljs.core.truth_(or__10116__auto____$1)){
return or__10116__auto____$1;
} else {
var or__10116__auto____$2 = w.mozRequestAnimationFrame;
if(cljs.core.truth_(or__10116__auto____$2)){
return or__10116__auto____$2;
} else {
var or__10116__auto____$3 = w.msRequestAnimationFrame;
if(cljs.core.truth_(or__10116__auto____$3)){
return or__10116__auto____$3;
} else {
return reagent.impl.batching.fake_raf;
}
}
}
}
})().bind(w);
})());
reagent.impl.batching.compare_mount_order = (function reagent$impl$batching$compare_mount_order(c1,c2){
return (c1.cljsMountOrder - c2.cljsMountOrder);
});
reagent.impl.batching.run_queue = (function reagent$impl$batching$run_queue(a){
a.sort(reagent.impl.batching.compare_mount_order);

var n__12482__auto__ = a.length;
var i = (0);
while(true){
if((i < n__12482__auto__)){
var c_133 = (a[i]);
if(c_133.cljsIsDirty === true){
c_133.forceUpdate();
} else {
}

var G__134 = (i + (1));
i = G__134;
continue;
} else {
return null;
}
break;
}
});
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.ratom_flush !== 'undefined')){
} else {
reagent.impl.batching.ratom_flush = (function reagent$impl$batching$ratom_flush(){
return null;
});
}
reagent.impl.batching.run_funs = (function reagent$impl$batching$run_funs(fs){
var n__12482__auto__ = fs.length;
var i = (0);
while(true){
if((i < n__12482__auto__)){
(fs[i]).call(null);

var G__135 = (i + (1));
i = G__135;
continue;
} else {
return null;
}
break;
}
});
reagent.impl.batching.enqueue = (function reagent$impl$batching$enqueue(queue,fs,f){
if(cljs.core.truth_(f)){
} else {
throw (new Error(["Assert failed: ",["Enqueued function"," must not be nil"].join(''),"\n","f"].join('')));
}

fs.push(f);

return queue.schedule();
});

/**
* @constructor
 * @implements {reagent.impl.batching.Object}
*/
reagent.impl.batching.RenderQueue = (function (scheduled_QMARK_){
this.scheduled_QMARK_ = scheduled_QMARK_;
});
(reagent.impl.batching.RenderQueue.prototype.flush_after_render = (function (){
var self__ = this;
var this$ = this;
var temp__9774__auto__ = this$.afterRender;
if((temp__9774__auto__ == null)){
return null;
} else {
var fs = temp__9774__auto__;
(this$.afterRender = null);

return reagent.impl.batching.run_funs.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.queue_render = (function (c){
var self__ = this;
var this$ = this;
if((this$.componentQueue == null)){
(this$.componentQueue = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.componentQueue,c);
}));

(reagent.impl.batching.RenderQueue.prototype.schedule = (function (){
var self__ = this;
var this$ = this;
if(self__.scheduled_QMARK_){
return null;
} else {
(self__.scheduled_QMARK_ = true);

return reagent.impl.batching.next_tick.call(null,(function (){
return this$.run_queues();
}));
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_before_flush = (function (){
var self__ = this;
var this$ = this;
var temp__9774__auto__ = this$.beforeFlush;
if((temp__9774__auto__ == null)){
return null;
} else {
var fs = temp__9774__auto__;
(this$.beforeFlush = null);

return reagent.impl.batching.run_funs.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.prototype.flush_queues = (function (){
var self__ = this;
var this$ = this;
this$.flush_before_flush();

reagent.impl.batching.ratom_flush.call(null);

this$.flush_render();

return this$.flush_after_render();
}));

(reagent.impl.batching.RenderQueue.prototype.run_queues = (function (){
var self__ = this;
var this$ = this;
(self__.scheduled_QMARK_ = false);

return this$.flush_queues();
}));

(reagent.impl.batching.RenderQueue.prototype.add_before_flush = (function (f){
var self__ = this;
var this$ = this;
if((this$.beforeFlush == null)){
(this$.beforeFlush = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.beforeFlush,f);
}));

(reagent.impl.batching.RenderQueue.prototype.add_after_render = (function (f){
var self__ = this;
var this$ = this;
if((this$.afterRender == null)){
(this$.afterRender = []);
} else {
}

return reagent.impl.batching.enqueue.call(null,this$,this$.afterRender,f);
}));

(reagent.impl.batching.RenderQueue.prototype.flush_render = (function (){
var self__ = this;
var this$ = this;
var temp__9774__auto__ = this$.componentQueue;
if((temp__9774__auto__ == null)){
return null;
} else {
var fs = temp__9774__auto__;
(this$.componentQueue = null);

return reagent.impl.batching.run_queue.call(null,fs);
}
}));

(reagent.impl.batching.RenderQueue.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"scheduled?","scheduled?",(579986609),null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),new cljs.core.Symbol(null,"boolean","boolean",(-278886877),null),new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(reagent.impl.batching.RenderQueue.cljs$lang$type = true);

(reagent.impl.batching.RenderQueue.cljs$lang$ctorStr = "reagent.impl.batching/RenderQueue");

(reagent.impl.batching.RenderQueue.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.impl.batching/RenderQueue");
}));

/**
 * Positional factory function for reagent.impl.batching/RenderQueue.
 */
reagent.impl.batching.__GT_RenderQueue = (function reagent$impl$batching$__GT_RenderQueue(scheduled_QMARK_){
return (new reagent.impl.batching.RenderQueue(scheduled_QMARK_));
});

if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.batching !== 'undefined') && (typeof reagent.impl.batching.render_queue !== 'undefined')){
} else {
reagent.impl.batching.render_queue = reagent.impl.batching.__GT_RenderQueue.call(null,false);
}
reagent.impl.batching.flush = (function reagent$impl$batching$flush(){
return reagent.impl.batching.render_queue.flush_queues();
});
reagent.impl.batching.flush_after_render = (function reagent$impl$batching$flush_after_render(){
return reagent.impl.batching.render_queue.flush_after_render();
});
reagent.impl.batching.queue_render = (function reagent$impl$batching$queue_render(c){
if(cljs.core.truth_(c.cljsIsDirty)){
return null;
} else {
(c.cljsIsDirty = true);

return reagent.impl.batching.render_queue.queue_render(c);
}
});
reagent.impl.batching.mark_rendered = (function reagent$impl$batching$mark_rendered(c){
return (c.cljsIsDirty = false);
});
reagent.impl.batching.do_before_flush = (function reagent$impl$batching$do_before_flush(f){
return reagent.impl.batching.render_queue.add_before_flush(f);
});
reagent.impl.batching.do_after_render = (function reagent$impl$batching$do_after_render(f){
return reagent.impl.batching.render_queue.add_after_render(f);
});
reagent.impl.batching.schedule = (function reagent$impl$batching$schedule(){
if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
return reagent.impl.batching.render_queue.schedule();
} else {
return null;
}
});

//# sourceURL=reagent/impl/batching.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL2JhdGNoaW5nLmpzIiwic291cmNlcyI6WyJiYXRjaGluZy5jbGpzIl0sImxpbmVDb3VudCI6MjY2LCJtYXBwaW5ncyI6IjtBQU9BLEdBQUEsUUFBQUEsb0NBQUFDLHlDQUFBQyxrREFBQUM7QUFBQTtBQUFBLEFBQUEsb0NBQUEscENBQVNDOztBQUVULHlDQUFBLHpDQUFNQztBQUFOLEFBQ0UsUUFBTUQsb0NBQVkscUNBQUEscENBQUtBOztBQUV6QixpQ0FBQSxqQ0FBTUUsMEVBQVVDO0FBQWhCLEFBQ0Usb0JBQUEsYkFBQ0MsV0FBY0Q7O0FBRWpCLEFBQUtFLGtDQUNILEVBQUEsR0FBUUMsK0JBQ05KLCtCQUNBLGlCQUFNSyxJQUFFQztBQUFSLEFBQ0UsT0FBTyxpQkFBQUMsb0JBQUksQUFBeUJGO0FBQTdCLEFBQUEsb0JBQUFFO0FBQUFBOztBQUFBLElBQUFBLHdCQUNJLEFBQStCRjtBQURuQyxBQUFBLG9CQUFBRTtBQUFBQTs7QUFBQSxJQUFBQSx3QkFFSSxBQUE0QkY7QUFGaEMsQUFBQSxvQkFBQUU7QUFBQUE7O0FBQUEsSUFBQUEsd0JBR0ksQUFBMkJGO0FBSC9CLEFBQUEsb0JBQUFFO0FBQUFBOztBQUlJUDs7Ozs7VUFDSks7O0FBRWIsNENBQUEsNUNBQU1HLGdHQUNFQyxHQUFRQztBQURoQixBQUVFLFFBQUcsQUFBa0JELG9CQUNsQixBQUFrQkM7O0FBRXZCLGtDQUFBLGxDQUFNQyw0RUFBV0M7QUFBakIsQUFHRSxBQUFPQSxPQUFFSjs7QUFDVCxJQUFBSyxtQkFBWSxBQUFTRDtBQUFyQixBQUFBLFFBQUEsSkFBVUU7O0FBQVYsQUFBQSxHQUFBLEtBQUFELEpBQVVDO0FBQVYsQUFDRSxJQUEwQkMsUUFBRSxDQUFNSCxFQUFFRTtBQUFwQyxBQUNFLEdBQU0sQUFBTyxBQUFlQztBQUE1QixBQUNFLEFBQWNBOztBQURoQjs7QUFGSixhQUFBLEtBQUEsSkFBVUQ7Ozs7QUFBVjs7Ozs7QUFPRixHQUFBLFFBQUFwQixvQ0FBQUMseUNBQUFD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QixPQUFDbkIsMENBQVVROzs7O0FBbENqQixDQUFBLDZDQUFBLDdDQUFTUTtBQUFULEFBQUEsQUFBQTs7O0FBQUEsQ0FBQSxtREFBQSxuREFBU0E7O0FBQVQsQ0FBQSxzREFBQSx0REFBU0E7O0FBQVQsQ0FBQSwyREFBQSxXQUFBSixvQkFBQUMsc0JBQUFDLGhIQUFTRTtBQUFULEFBQUEsT0FBQUQsMkJBQUFGLHNCQUFBOzs7QUFBQTs7O3lDQUFBLHpDQUFTSSwwRkFBZ0NDO0FBQXpDLEFBQUEsWUFBQUYsa0NBQXlDRTs7O0FBQWhDRixBQStDVCxHQUFBLFFBQUFqQyxvQ0FBQUMseUNBQUFDLGtEQUFBb0M7QUFBQTtBQUFBLEFBQUEsQUFBU0MscUNBQWEsaURBQUEsakRBQUNMOztBQUV2Qiw4QkFBQSw5QkFBTU07QUFBTixBQUNFLE9BQWVEOztBQUVqQiwyQ0FBQSwzQ0FBTUU7QUFBTixBQUNFLE9BQXFCRjs7QUFFdkIscUNBQUEsckNBQU1HLGtGQUFtQnJCO0FBQXpCLEFBQ0Usb0JBQVUsQUFBZUE7QUFBekI7O0FBQUEsQUFDRSxpQkFBQSxoQkFBTSxBQUFlQTs7QUFDckIsT0FBZWtCLGdEQUFhbEI7OztBQUVoQyxzQ0FBQSx0Q0FBTXNCLG9GQUFvQnRCO0FBQTFCLEFBQ0Usd0JBQUEsaEJBQU0sQUFBZUE7O0FBRXZCLHdDQUFBLHhDQUFNdUIsd0ZBQWlCckM7QUFBdkIsQUFDRSxPQUFtQmdDLG9EQUFhaEM7O0FBRWxDLHdDQUFBLHhDQUFNc0Msd0ZBQWlCdEM7QUFBdkIsQUFDRSxPQUFtQmdDLG9EQUFhaEM7O0FBRWxDLGlDQUFBLGpDQUFNdUM7QUFBTixBQUNFLEdBQU0sQUFBUSxBQUFjUDtBQUE1QixBQUNFLE9BQVdBOztBQURiIiwibmFtZXMiOlsianMvcmVhZ2VudCIsImpzL3JlYWdlbnQuaW1wbCIsImpzL3JlYWdlbnQuaW1wbC5iYXRjaGluZyIsImpzL3JlYWdlbnQuaW1wbC5iYXRjaGluZy5tb3VudC1jb3VudCIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9tb3VudC1jb3VudCIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9uZXh0LW1vdW50LWNvdW50IiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2Zha2UtcmFmIiwiZiIsImpzL3NldFRpbWVvdXQiLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvbmV4dC10aWNrIiwicmVhZ2VudC5pbXBsLnV0aWwvaXMtY2xpZW50IiwidyIsImpzL3dpbmRvdyIsIm9yX18xMDExNl9fYXV0b19fIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2NvbXBhcmUtbW91bnQtb3JkZXIiLCJjMSIsImMyIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL3J1bi1xdWV1ZSIsImEiLCJuX18xMjQ4Ml9fYXV0b19fIiwiaSIsImMiLCJqcy9yZWFnZW50LmltcGwuYmF0Y2hpbmcucmF0b20tZmx1c2giLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvcmF0b20tZmx1c2giLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvcnVuLWZ1bnMiLCJmcyIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9lbnF1ZXVlIiwicXVldWUiLCJqcy9FcnJvciIsInRoaXNfXzExMzg1X19hdXRvX18iLCJ3cml0ZXJfXzExMzg2X19hdXRvX18iLCJvcHRfXzExMzg3X19hdXRvX18iLCJjbGpzLmNvcmUvLXdyaXRlIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL1JlbmRlclF1ZXVlIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nLy0+UmVuZGVyUXVldWUiLCJzY2hlZHVsZWQ/IiwidGhpcyIsInRlbXBfXzk3NzRfX2F1dG9fXyIsImpzL3JlYWdlbnQuaW1wbC5iYXRjaGluZy5yZW5kZXItcXVldWUiLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvcmVuZGVyLXF1ZXVlIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2ZsdXNoIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2ZsdXNoLWFmdGVyLXJlbmRlciIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9xdWV1ZS1yZW5kZXIiLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvbWFyay1yZW5kZXJlZCIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9kby1iZWZvcmUtZmx1c2giLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvZG8tYWZ0ZXItcmVuZGVyIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL3NjaGVkdWxlIl0sInNvdXJjZXNDb250ZW50IjpbIihucyByZWFnZW50LmltcGwuYmF0Y2hpbmdcbiAgKDpyZWZlci1jbG9qdXJlIDpleGNsdWRlIFtmbHVzaF0pXG4gICg6cmVxdWlyZSBbcmVhZ2VudC5kZWJ1ZyA6cmVmZXItbWFjcm9zIFthc3NlcnQtc29tZV1dXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnV0aWwgOnJlZmVyIFtpcy1jbGllbnRdXSkpXG5cbjs7OyBVcGRhdGUgYmF0Y2hpbmdcblxuKGRlZm9uY2UgbW91bnQtY291bnQgMClcblxuKGRlZm4gbmV4dC1tb3VudC1jb3VudCBbXVxuICAoc2V0ISBtb3VudC1jb3VudCAoaW5jIG1vdW50LWNvdW50KSkpXG5cbihkZWZuIGZha2UtcmFmIFtmXVxuICAoanMvc2V0VGltZW91dCBmIDE2KSlcblxuKGRlZiBuZXh0LXRpY2tcbiAgKGlmLW5vdCBpcy1jbGllbnRcbiAgICBmYWtlLXJhZlxuICAgIChsZXQgW3cganMvd2luZG93XVxuICAgICAgKC5iaW5kIChvciAoLi1yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdylcbiAgICAgICAgICAgICAgICAgKC4td2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHcpXG4gICAgICAgICAgICAgICAgICguLW1velJlcXVlc3RBbmltYXRpb25GcmFtZSB3KVxuICAgICAgICAgICAgICAgICAoLi1tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB3KVxuICAgICAgICAgICAgICAgICBmYWtlLXJhZilcbiAgICAgICAgICAgICB3KSkpKVxuXG4oZGVmbiBjb21wYXJlLW1vdW50LW9yZGVyXG4gIFteY2xqIGMxIF5jbGogYzJdXG4gICgtICguLWNsanNNb3VudE9yZGVyIGMxKVxuICAgICAoLi1jbGpzTW91bnRPcmRlciBjMikpKVxuXG4oZGVmbiBydW4tcXVldWUgW2FdXG4gIDs7IHNvcnQgY29tcG9uZW50cyBieSBtb3VudCBvcmRlciwgdG8gbWFrZSBzdXJlIHBhcmVudHNcbiAgOzsgYXJlIHJlbmRlcmVkIGJlZm9yZSBjaGlsZHJlblxuICAoLnNvcnQgYSBjb21wYXJlLW1vdW50LW9yZGVyKVxuICAoZG90aW1lcyBbaSAoYWxlbmd0aCBhKV1cbiAgICAobGV0IFteanMvUmVhY3QuQ29tcG9uZW50IGMgKGFnZXQgYSBpKV1cbiAgICAgICh3aGVuICh0cnVlPyAoLi1jbGpzSXNEaXJ0eSBjKSlcbiAgICAgICAgKC5mb3JjZVVwZGF0ZSBjKSkpKSlcblxuXG47OyBTZXQgZnJvbSByYXRvbS5jbGpzXG4oZGVmb25jZSByYXRvbS1mbHVzaCAoZm4gW10pKVxuXG4oZGVmbiBydW4tZnVucyBbZnNdXG4gIChkb3RpbWVzIFtpIChhbGVuZ3RoIGZzKV1cbiAgICAoKGFnZXQgZnMgaSkpKSlcblxuKGRlZm4gZW5xdWV1ZSBbXmNsaiBxdWV1ZSBmcyBmXVxuICAoYXNzZXJ0LXNvbWUgZiBcIkVucXVldWVkIGZ1bmN0aW9uXCIpXG4gICgucHVzaCBmcyBmKVxuICAoLnNjaGVkdWxlIHF1ZXVlKSlcblxuKGRlZnR5cGUgUmVuZGVyUXVldWUgW146bXV0YWJsZSBeYm9vbGVhbiBzY2hlZHVsZWQ/XVxuICBPYmplY3RcbiAgKHNjaGVkdWxlIFt0aGlzXVxuICAgICh3aGVuLW5vdCBzY2hlZHVsZWQ/XG4gICAgICAoc2V0ISBzY2hlZHVsZWQ/IHRydWUpXG4gICAgICAobmV4dC10aWNrICMoLnJ1bi1xdWV1ZXMgdGhpcykpKSlcblxuICAocXVldWUtcmVuZGVyIFt0aGlzIGNdXG4gICAgKHdoZW4gKG5pbD8gKC4tY29tcG9uZW50UXVldWUgdGhpcykpXG4gICAgICAoc2V0ISAoLi1jb21wb25lbnRRdWV1ZSB0aGlzKSAoYXJyYXkpKSlcbiAgICAoZW5xdWV1ZSB0aGlzICguLWNvbXBvbmVudFF1ZXVlIHRoaXMpIGMpKVxuXG4gIChhZGQtYmVmb3JlLWZsdXNoIFt0aGlzIGZdXG4gICAgKHdoZW4gKG5pbD8gKC4tYmVmb3JlRmx1c2ggdGhpcykpXG4gICAgICAoc2V0ISAoLi1iZWZvcmVGbHVzaCB0aGlzKSAoYXJyYXkpKSlcbiAgICAoZW5xdWV1ZSB0aGlzICguLWJlZm9yZUZsdXNoIHRoaXMpIGYpKVxuXG4gIChhZGQtYWZ0ZXItcmVuZGVyIFt0aGlzIGZdXG4gICAgKHdoZW4gKG5pbD8gKC4tYWZ0ZXJSZW5kZXIgdGhpcykpXG4gICAgICAoc2V0ISAoLi1hZnRlclJlbmRlciB0aGlzKSAoYXJyYXkpKSlcbiAgICAoZW5xdWV1ZSB0aGlzICguLWFmdGVyUmVuZGVyIHRoaXMpIGYpKVxuXG4gIChydW4tcXVldWVzIFt0aGlzXVxuICAgIChzZXQhIHNjaGVkdWxlZD8gZmFsc2UpXG4gICAgKC5mbHVzaC1xdWV1ZXMgdGhpcykpXG5cbiAgKGZsdXNoLWJlZm9yZS1mbHVzaCBbdGhpc11cbiAgICAod2hlbi1zb21lIFtmcyAoLi1iZWZvcmVGbHVzaCB0aGlzKV1cbiAgICAgIChzZXQhICguLWJlZm9yZUZsdXNoIHRoaXMpIG5pbClcbiAgICAgIChydW4tZnVucyBmcykpKVxuXG4gIChmbHVzaC1yZW5kZXIgW3RoaXNdXG4gICAgKHdoZW4tc29tZSBbZnMgKC4tY29tcG9uZW50UXVldWUgdGhpcyldXG4gICAgICAoc2V0ISAoLi1jb21wb25lbnRRdWV1ZSB0aGlzKSBuaWwpXG4gICAgICAocnVuLXF1ZXVlIGZzKSkpXG5cbiAgKGZsdXNoLWFmdGVyLXJlbmRlciBbdGhpc11cbiAgICAod2hlbi1zb21lIFtmcyAoLi1hZnRlclJlbmRlciB0aGlzKV1cbiAgICAgIChzZXQhICguLWFmdGVyUmVuZGVyIHRoaXMpIG5pbClcbiAgICAgIChydW4tZnVucyBmcykpKVxuXG4gIChmbHVzaC1xdWV1ZXMgW3RoaXNdXG4gICAgKC5mbHVzaC1iZWZvcmUtZmx1c2ggdGhpcylcbiAgICAocmF0b20tZmx1c2gpXG4gICAgKC5mbHVzaC1yZW5kZXIgdGhpcylcbiAgICAoLmZsdXNoLWFmdGVyLXJlbmRlciB0aGlzKSkpXG5cbihkZWZvbmNlIHJlbmRlci1xdWV1ZSAoLT5SZW5kZXJRdWV1ZSBmYWxzZSkpXG5cbihkZWZuIGZsdXNoIFtdXG4gICguZmx1c2gtcXVldWVzIHJlbmRlci1xdWV1ZSkpXG5cbihkZWZuIGZsdXNoLWFmdGVyLXJlbmRlciBbXVxuICAoLmZsdXNoLWFmdGVyLXJlbmRlciByZW5kZXItcXVldWUpKVxuXG4oZGVmbiBxdWV1ZS1yZW5kZXIgW15jbGogY11cbiAgKHdoZW4tbm90ICguLWNsanNJc0RpcnR5IGMpXG4gICAgKHNldCEgKC4tY2xqc0lzRGlydHkgYykgdHJ1ZSlcbiAgICAoLnF1ZXVlLXJlbmRlciByZW5kZXItcXVldWUgYykpKVxuXG4oZGVmbiBtYXJrLXJlbmRlcmVkIFteY2xqIGNdXG4gIChzZXQhICguLWNsanNJc0RpcnR5IGMpIGZhbHNlKSlcblxuKGRlZm4gZG8tYmVmb3JlLWZsdXNoIFtmXVxuICAoLmFkZC1iZWZvcmUtZmx1c2ggcmVuZGVyLXF1ZXVlIGYpKVxuXG4oZGVmbiBkby1hZnRlci1yZW5kZXIgW2ZdXG4gICguYWRkLWFmdGVyLXJlbmRlciByZW5kZXItcXVldWUgZikpXG5cbihkZWZuIHNjaGVkdWxlIFtdXG4gICh3aGVuIChmYWxzZT8gKC4tc2NoZWR1bGVkPyByZW5kZXItcXVldWUpKVxuICAgICguc2NoZWR1bGUgcmVuZGVyLXF1ZXVlKSkpXG4iXX0=