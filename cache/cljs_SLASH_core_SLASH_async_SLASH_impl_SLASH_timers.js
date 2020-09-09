// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.async.impl.timers");
cljs.core.async.impl.timers.MAX_LEVEL = (15);
cljs.core.async.impl.timers.P = ((1) / (2));
cljs.core.async.impl.timers.random_level = (function cljs$core$async$impl$timers$random_level(var_args){
var G__55 = arguments.length;
switch (G__55) {
case (0):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.impl.timers.random_level.call(null,(0));
}));

(cljs.core.async.impl.timers.random_level.cljs$core$IFn$_invoke$arity$1 = (function (level){
while(true){
if((((Math.random() < cljs.core.async.impl.timers.P)) && ((level < cljs.core.async.impl.timers.MAX_LEVEL)))){
var G__57 = (level + (1));
level = G__57;
continue;
} else {
return level;
}
break;
}
}));

(cljs.core.async.impl.timers.random_level.cljs$lang$maxFixedArity = (1));


/**
* @constructor
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipListNode = (function (key,val,forward){
this.key = key;
this.val = val;
this.forward = forward;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return (new cljs.core.List(null,self__.key,(new cljs.core.List(null,self__.val,null,(1),null)),(2),null));
}));

(cljs.core.async.impl.timers.SkipListNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,"["," ","]",opts,coll__$1);
}));

(cljs.core.async.impl.timers.SkipListNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",(124488940),null),cljs.core.with_meta(new cljs.core.Symbol(null,"val","val",(1769233139),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null)),new cljs.core.Symbol(null,"forward","forward",(1083186224),null)], null);
}));

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$type = true);

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipListNode");

(cljs.core.async.impl.timers.SkipListNode.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.timers/SkipListNode");
}));

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipListNode.
 */
cljs.core.async.impl.timers.__GT_SkipListNode = (function cljs$core$async$impl$timers$__GT_SkipListNode(key,val,forward){
return (new cljs.core.async.impl.timers.SkipListNode(key,val,forward));
});

cljs.core.async.impl.timers.skip_list_node = (function cljs$core$async$impl$timers$skip_list_node(var_args){
var G__59 = arguments.length;
switch (G__59) {
case (1):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (3):
return cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$1 = (function (level){
return cljs.core.async.impl.timers.skip_list_node.call(null,null,null,level);
}));

(cljs.core.async.impl.timers.skip_list_node.cljs$core$IFn$_invoke$arity$3 = (function (k,v,level){
var arr = (new Array((level + (1))));
var i_61 = (0);
while(true){
if((i_61 < arr.length)){
(arr[i_61] = null);

var G__62 = (i_61 + (1));
i_61 = G__62;
continue;
} else {
}
break;
}

return (new cljs.core.async.impl.timers.SkipListNode(k,v,arr));
}));

(cljs.core.async.impl.timers.skip_list_node.cljs$lang$maxFixedArity = (3));

cljs.core.async.impl.timers.least_greater_node = (function cljs$core$async$impl$timers$least_greater_node(var_args){
var G__64 = arguments.length;
switch (G__64) {
case (3):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case (4):
return cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$3 = (function (x,k,level){
return cljs.core.async.impl.timers.least_greater_node.call(null,x,k,level,null);
}));

(cljs.core.async.impl.timers.least_greater_node.cljs$core$IFn$_invoke$arity$4 = (function (x,k,level,update){
while(true){
if((!((level < (0))))){
var x__$1 = (function (){var x__$1 = x;
while(true){
var temp__9395__auto__ = (x__$1.forward[level]);
if(cljs.core.truth_(temp__9395__auto__)){
var x_SINGLEQUOTE_ = temp__9395__auto__;
if((x_SINGLEQUOTE_.key < k)){
var G__66 = x_SINGLEQUOTE_;
x__$1 = G__66;
continue;
} else {
return x__$1;
}
} else {
return x__$1;
}
break;
}
})();
if((update == null)){
} else {
(update[level] = x__$1);
}

var G__67 = x__$1;
var G__68 = k;
var G__69 = (level - (1));
var G__70 = update;
x = G__67;
k = G__68;
level = G__69;
update = G__70;
continue;
} else {
return x;
}
break;
}
}));

(cljs.core.async.impl.timers.least_greater_node.cljs$lang$maxFixedArity = (4));


/**
* @constructor
 * @implements {cljs.core.async.impl.timers.Object}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IPrintWithWriter}
*/
cljs.core.async.impl.timers.SkipList = (function (header,level){
this.header = header;
this.level = level;
this.cljs$lang$protocol_mask$partition0$ = -2139095040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.timers.SkipList.prototype.put = (function (k,v){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
return (x__$1.val = v);
} else {
var new_level = cljs.core.async.impl.timers.random_level.call(null);
if((new_level > self__.level)){
var i_71 = (self__.level + (1));
while(true){
if((i_71 <= (new_level + (1)))){
(update[i_71] = self__.header);

var G__72 = (i_71 + (1));
i_71 = G__72;
continue;
} else {
}
break;
}

(self__.level = new_level);
} else {
}

var x__$2 = cljs.core.async.impl.timers.skip_list_node.call(null,k,v,(new Array(new_level)));
var i = (0);
while(true){
if((i <= self__.level)){
var links = (update[i]).forward;
(x__$2.forward[i] = (links[i]));

return (links[i] = x__$2);
} else {
return null;
}
break;
}
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.remove = (function (k){
var self__ = this;
var coll = this;
var update = (new Array(cljs.core.async.impl.timers.MAX_LEVEL));
var x = cljs.core.async.impl.timers.least_greater_node.call(null,self__.header,k,self__.level,update);
var x__$1 = (x.forward[(0)]);
if((((!((x__$1 == null)))) && ((x__$1.key === k)))){
var i_73 = (0);
while(true){
if((i_73 <= self__.level)){
var links_74 = (update[i_73]).forward;
if(((links_74[i_73]) === x__$1)){
(links_74[i_73] = (x__$1.forward[i_73]));

var G__75 = (i_73 + (1));
i_73 = G__75;
continue;
} else {
var G__76 = (i_73 + (1));
i_73 = G__76;
continue;
}
} else {
}
break;
}

while(true){
if((((self__.level > (0))) && (((self__.header.forward[self__.level]) == null)))){
(self__.level = (self__.level - (1)));

continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.ceilingEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if((x_SINGLEQUOTE_ == null)){
return null;
} else {
if((x_SINGLEQUOTE_.key >= k)){
return x_SINGLEQUOTE_;
} else {
var G__77 = x_SINGLEQUOTE_;
x__$1 = G__77;
continue;
}
}
break;
}
})();
if((!((nx == null)))){
var G__78 = nx;
var G__79 = (level__$1 - (1));
x = G__78;
level__$1 = G__79;
continue;
} else {
var G__80 = x;
var G__81 = (level__$1 - (1));
x = G__80;
level__$1 = G__81;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.floorEntry = (function (k){
var self__ = this;
var coll = this;
var x = self__.header;
var level__$1 = self__.level;
while(true){
if((!((level__$1 < (0))))){
var nx = (function (){var x__$1 = x;
while(true){
var x_SINGLEQUOTE_ = (x__$1.forward[level__$1]);
if((!((x_SINGLEQUOTE_ == null)))){
if((x_SINGLEQUOTE_.key > k)){
return x__$1;
} else {
var G__82 = x_SINGLEQUOTE_;
x__$1 = G__82;
continue;
}
} else {
if((level__$1 === (0))){
return x__$1;
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(nx)){
var G__83 = nx;
var G__84 = (level__$1 - (1));
x = G__83;
level__$1 = G__84;
continue;
} else {
var G__85 = x;
var G__86 = (level__$1 - (1));
x = G__85;
level__$1 = G__86;
continue;
}
} else {
if((x === self__.header)){
return null;
} else {
return x;
}
}
break;
}
}));

(cljs.core.async.impl.timers.SkipList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
var iter = (function cljs$core$async$impl$timers$iter(node){
return (new cljs.core.LazySeq(null,(function (){
if((node == null)){
return null;
} else {
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node.key,node.val], null),cljs$core$async$impl$timers$iter.call(null,(node.forward[(0)])));
}
}),null,null));
});
return iter.call(null,(self__.header.forward[(0)]));
}));

(cljs.core.async.impl.timers.SkipList.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
var pr_pair = (function (keyval){
return cljs.core.pr_sequential_writer.call(null,writer,cljs.core.pr_writer,""," ","",opts,keyval);
});
return cljs.core.pr_sequential_writer.call(null,writer,pr_pair,"{",", ","}",opts,coll__$1);
}));

(cljs.core.async.impl.timers.SkipList.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"header","header",(1759972661),null),cljs.core.with_meta(new cljs.core.Symbol(null,"level","level",(-1363938217),null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",(875778266)),true], null))], null);
}));

(cljs.core.async.impl.timers.SkipList.cljs$lang$type = true);

(cljs.core.async.impl.timers.SkipList.cljs$lang$ctorStr = "cljs.core.async.impl.timers/SkipList");

(cljs.core.async.impl.timers.SkipList.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"cljs.core.async.impl.timers/SkipList");
}));

/**
 * Positional factory function for cljs.core.async.impl.timers/SkipList.
 */
cljs.core.async.impl.timers.__GT_SkipList = (function cljs$core$async$impl$timers$__GT_SkipList(header,level){
return (new cljs.core.async.impl.timers.SkipList(header,level));
});

cljs.core.async.impl.timers.skip_list = (function cljs$core$async$impl$timers$skip_list(){
return (new cljs.core.async.impl.timers.SkipList(cljs.core.async.impl.timers.skip_list_node.call(null,(0)),(0)));
});
cljs.core.async.impl.timers.timeouts_map = cljs.core.async.impl.timers.skip_list.call(null);
cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS = (10);
/**
 * returns a channel that will close after msecs
 */
cljs.core.async.impl.timers.timeout = (function cljs$core$async$impl$timers$timeout(msecs){
var timeout = ((new Date()).valueOf() + msecs);
var me = cljs.core.async.impl.timers.timeouts_map.ceilingEntry(timeout);
var or__10116__auto__ = (cljs.core.truth_((function (){var and__10091__auto__ = me;
if(cljs.core.truth_(and__10091__auto__)){
return (me.key < (timeout + cljs.core.async.impl.timers.TIMEOUT_RESOLUTION_MS));
} else {
return and__10091__auto__;
}
})())?me.val:null);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var timeout_channel = cljs.core.async.impl.channels.chan.call(null,null);
cljs.core.async.impl.timers.timeouts_map.put(timeout,timeout_channel);

cljs.core.async.impl.dispatch.queue_delay.call(null,(function (){
cljs.core.async.impl.timers.timeouts_map.remove(timeout);

return cljs.core.async.impl.protocols.close_BANG_.call(null,timeout_channel);
}),msecs);

return timeout_channel;
}
});

//# sourceURL=cljs/core/async/impl/timers.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL2FzeW5jL2ltcGwvdGltZXJzLmpzIiwic291cmNlcyI6WyJ0aW1lcnMuY2xqcyJdLCJsaW5lQ291bnQiOjQ2NywibWFwcGluZ3MiOiI7QUFhQSx3Q0FBQSx4Q0FBS0E7QUFDTCxBQUFLQyxnQ0FBRSxDQUFBLE1BQUE7QUFFUCxBQUFBLDJDQUFBLG1EQUFBQyw5RkFBTUU7QUFBTixBQUFBLElBQUFELFFBQUEsQUFBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLE9BQUFDOzs7S0FBQTtBQUFBLE9BQUFBLHVFQUFBLENBQUEsVUFBQTs7OztBQUFBLE1BQUEsS0FBQUMsTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQ0FBQSx5RUFBQSx6RUFBTUQ7QUFBTixBQUNNLDBEQUFBLG5EQUFDQTs7O0FBRFAsQ0FBQSx5RUFBQSx6RUFBTUEsb0ZBRUZFOztBQUZKLEFBR0ksR0FBSSxFQUFLLENBQUcsQUFBU0MsZ0JBQVNOLG9DQUNyQixDQUFHSyxRQUFNTjtBQUNoQixZQUFPLFNBQUEsUkFBS007Ozs7QUFDWkE7Ozs7OztBQU5OLENBQUEsbUVBQUEsbkVBQU1GOztBQUFOLEFBUUEsQUFBQTs7Ozs7Ozs7Ozs7OztBQUFBLEFBQUEsQ0FBQSxBQUFBLHFGQUFBLHJGQUFTUSxnR0FFQUs7O0FBRlQsQUFBQSxlQUFBLFhBRVNBO0FBRlQsQUFHSSxZQUFBQyxlQUFBLGdCQUFBLEtBQUFBLGVBQUEsZ0JBQUEsS0FBQSxJQUFBLE9BQUEsSUFBQSxuRUFBTUosb0NBQUlDOzs7QUFIZCxDQUFBLEFBQUEsbUdBQUEsbkdBQVNILDhHQU1NSyxLQUFLRSxPQUFPQzs7QUFOM0IsQUFBQSxlQUFBLFhBTWVIO0FBTmYsQUFPSSwyRUFBQSxJQUFBLElBQUEsNUVBQUNJLHlDQUFxQkYsT0FBT0csZ0NBQXNCRixLQUFLSDs7O0FBUDVELENBQUEsb0RBQUEscERBQVNMO0FBQVQsQUFBQSxBQUFBOzs7QUFBQSxDQUFBLDBEQUFBLDFEQUFTQTs7QUFBVCxDQUFBLDZEQUFBLDdE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d0NBQUEseENBQU1ZO0FBQU4sQUFDRSxZQUFBWiwrRkFBQSwxREFBVyxxREFBQSxyREFBQ1o7O0FBRWQsQUFBS3lCLDJDQUFhLEFBQUNEO0FBRW5CLG9EQUFBLHBEQUFLRTtBQUVMOzs7c0NBQUEsdENBQU1DLG9GQUVIQztBQUZILEFBR0UsSUFBTUMsVUFBUSxDQUFHLEFBQVUsS0FBQUMsb0JBQVlGO0lBQ2pDRyxLQUFHLEFBQWVOLHNEQUFhSTtBQURyQyxBQUVFLElBQUFHLG9CQUFJLGtCQUFNLGlCQUFBQyxxQkFBS0Y7QUFBTCxBQUFBLG9CQUFBRTtBQUFRLFFBQUcsQUFBT0YsU0FBSSxDQUFHRixVQUFRSDs7QUFBakNPOztNQUFOLE9BQUEsUEFDRSxBQUFPRjtBQURiLEFBQUEsb0JBQUFDO0FBQUFBOztBQUVJLElBQU1FLGtCQUFnQiw2Q0FBQSw3Q0FBQ0M7QUFBdkIsQUFDRSxBQUFNViw2Q0FBYUksUUFBUUs7O0FBQzNCLEFBQUNFLG9EQUNDO0FBQUEsQUFDRSxBQUFTWCxnREFBYUk7O0FBQ3RCLE9BQUNRLHFEQUFZSDtHQUNmTjs7QUFDRk0iLCJuYW1lcyI6WyJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvTUFYX0xFVkVMIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL1AiLCJ2YXJfYXJncyIsIkdfXzU1IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL3JhbmRvbS1sZXZlbCIsImpzL0Vycm9yIiwibGV2ZWwiLCJqcy9NYXRoIiwidGhpc19fMTEzODVfX2F1dG9fXyIsIndyaXRlcl9fMTEzODZfX2F1dG9fXyIsIm9wdF9fMTEzODdfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvU2tpcExpc3ROb2RlIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzLy0+U2tpcExpc3ROb2RlIiwia2V5IiwidmFsIiwiZm9yd2FyZCIsImNvbGwiLCJjbGpzLmNvcmUvTGlzdCIsIndyaXRlciIsIm9wdHMiLCJjbGpzLmNvcmUvcHItc2VxdWVudGlhbC13cml0ZXIiLCJjbGpzLmNvcmUvcHItd3JpdGVyIiwiR19fNTkiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvc2tpcC1saXN0LW5vZGUiLCJrIiwidiIsImFyciIsImpzL0FycmF5IiwiaSIsIkdfXzY0IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL2xlYXN0LWdyZWF0ZXItbm9kZSIsIngiLCJ1cGRhdGUiLCJ0ZW1wX185Mzk1X19hdXRvX18iLCJ4JyIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy9Ta2lwTGlzdCIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy8tPlNraXBMaXN0IiwiaGVhZGVyIiwibmV3LWxldmVsIiwibGlua3MiLCJueCIsIm5vZGUiLCJjbGpzLmNvcmUvTGF6eVNlcSIsImNsanMuY29yZS9jb25zIiwiaXRlciIsInByLXBhaXIiLCJrZXl2YWwiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvc2tpcC1saXN0IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwudGltZXJzL3RpbWVvdXRzLW1hcCIsImNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVycy9USU1FT1VUX1JFU09MVVRJT05fTVMiLCJjbGpzLmNvcmUuYXN5bmMuaW1wbC50aW1lcnMvdGltZW91dCIsIm1zZWNzIiwidGltZW91dCIsImpzL0RhdGUiLCJtZSIsIm9yX18xMDExNl9fYXV0b19fIiwiYW5kX18xMDA5MV9fYXV0b19fIiwidGltZW91dC1jaGFubmVsIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuY2hhbm5lbHMvY2hhbiIsImNsanMuY29yZS5hc3luYy5pbXBsLmRpc3BhdGNoL3F1ZXVlLWRlbGF5IiwiY2xqcy5jb3JlLmFzeW5jLmltcGwucHJvdG9jb2xzL2Nsb3NlISJdLCJzb3VyY2VzQ29udGVudCI6WyI7OyAgIENvcHlyaWdodCAoYykgUmljaCBIaWNrZXkgYW5kIGNvbnRyaWJ1dG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjs7ICAgVGhlIHVzZSBhbmQgZGlzdHJpYnV0aW9uIHRlcm1zIGZvciB0aGlzIHNvZnR3YXJlIGFyZSBjb3ZlcmVkIGJ5IHRoZVxuOzsgICBFY2xpcHNlIFB1YmxpYyBMaWNlbnNlIDEuMCAoaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2VjbGlwc2UtMS4wLnBocClcbjs7ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjs7ICAgQnkgdXNpbmcgdGhpcyBzb2Z0d2FyZSBpbiBhbnkgZmFzaGlvbiwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieVxuOzsgICB0aGUgdGVybXMgb2YgdGhpcyBsaWNlbnNlLlxuOzsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuKG5zIGNsanMuY29yZS5hc3luYy5pbXBsLnRpbWVyc1xuICAoOnJlcXVpcmUgW2NsanMuY29yZS5hc3luYy5pbXBsLnByb3RvY29scyA6YXMgaW1wbF1cbiAgICAgICAgICAgIFtjbGpzLmNvcmUuYXN5bmMuaW1wbC5jaGFubmVscyA6YXMgY2hhbm5lbHNdXG4gICAgICAgICAgICBbY2xqcy5jb3JlLmFzeW5jLmltcGwuZGlzcGF0Y2ggOmFzIGRpc3BhdGNoXSkpXG5cbihkZWYgTUFYX0xFVkVMIDE1KSA7OyAxNiBsZXZlbHNcbihkZWYgUCAoLyAxIDIpKVxuXG4oZGVmbiByYW5kb20tbGV2ZWxcbiAgKFtdIChyYW5kb20tbGV2ZWwgMCkpXG4gIChbbGV2ZWxdXG4gICAgKGlmIChhbmQgKDwgKC5yYW5kb20ganMvTWF0aCkgUClcbiAgICAgICAgICAgICAoPCBsZXZlbCBNQVhfTEVWRUwpKVxuICAgICAgKHJlY3VyIChpbmMgbGV2ZWwpKVxuICAgICAgbGV2ZWwpKSlcblxuKGRlZnR5cGUgU2tpcExpc3ROb2RlIFtrZXkgXjptdXRhYmxlIHZhbCBmb3J3YXJkXVxuICBJU2VxYWJsZVxuICAoLXNlcSBbY29sbF1cbiAgICAobGlzdCBrZXkgdmFsKSlcblxuICBJUHJpbnRXaXRoV3JpdGVyXG4gICgtcHItd3JpdGVyIFtjb2xsIHdyaXRlciBvcHRzXVxuICAgIChwci1zZXF1ZW50aWFsLXdyaXRlciB3cml0ZXIgcHItd3JpdGVyIFwiW1wiIFwiIFwiIFwiXVwiIG9wdHMgY29sbCkpKVxuXG4oZGVmbiBza2lwLWxpc3Qtbm9kZVxuICAoW2xldmVsXSAoc2tpcC1saXN0LW5vZGUgbmlsIG5pbCBsZXZlbCkpXG4gIChbayB2IGxldmVsXVxuICAgIChsZXQgW2FyciAobWFrZS1hcnJheSAoaW5jIGxldmVsKSldXG4gICAgICAobG9vcCBbaSAwXVxuICAgICAgICAod2hlbiAoPCBpIChhbGVuZ3RoIGFycikpXG4gICAgICAgICAgKGFzZXQgYXJyIGkgbmlsKVxuICAgICAgICAgIChyZWN1ciAoaW5jIGkpKSkpXG4gICAgICAoU2tpcExpc3ROb2RlLiBrIHYgYXJyKSkpKVxuXG4oZGVmbiBsZWFzdC1ncmVhdGVyLW5vZGVcbiAgKFt4IGsgbGV2ZWxdIChsZWFzdC1ncmVhdGVyLW5vZGUgeCBrIGxldmVsIG5pbCkpXG4gIChbeCBrIGxldmVsIHVwZGF0ZV1cbiAgICAoaWYtbm90IChuZWc/IGxldmVsKVxuICAgICAgKGxldCBbeCAobG9vcCBbeCB4XVxuICAgICAgICAgICAgICAgIChpZi1sZXQgW3gnIChhZ2V0ICguLWZvcndhcmQgeCkgbGV2ZWwpXVxuICAgICAgICAgICAgICAgICAgKGlmICg8ICguLWtleSB4JykgaylcbiAgICAgICAgICAgICAgICAgICAgKHJlY3VyIHgnKVxuICAgICAgICAgICAgICAgICAgICB4KVxuICAgICAgICAgICAgICAgICAgeCkpXVxuICAgICAgICAod2hlbi1ub3QgKG5pbD8gdXBkYXRlKVxuICAgICAgICAgIChhc2V0IHVwZGF0ZSBsZXZlbCB4KSlcbiAgICAgICAgKHJlY3VyIHggayAoZGVjIGxldmVsKSB1cGRhdGUpKVxuICAgICAgeCkpKVxuXG4oZGVmdHlwZSBTa2lwTGlzdCBbaGVhZGVyIF46bXV0YWJsZSBsZXZlbF1cbiAgT2JqZWN0XG4gIChwdXQgW2NvbGwgayB2XVxuICAgIChsZXQgW3VwZGF0ZSAobWFrZS1hcnJheSBNQVhfTEVWRUwpXG4gICAgICAgICAgeCAobGVhc3QtZ3JlYXRlci1ub2RlIGhlYWRlciBrIGxldmVsIHVwZGF0ZSlcbiAgICAgICAgICB4IChhZ2V0ICguLWZvcndhcmQgeCkgMCldXG4gICAgICAoaWYgKGFuZCAobm90IChuaWw/IHgpKSAoPT0gKC4ta2V5IHgpIGspKVxuICAgICAgICAoc2V0ISAoLi12YWwgeCkgdilcbiAgICAgICAgKGxldCBbbmV3LWxldmVsIChyYW5kb20tbGV2ZWwpXVxuICAgICAgICAgICh3aGVuICg+IG5ldy1sZXZlbCBsZXZlbClcbiAgICAgICAgICAgIChsb29wIFtpIChpbmMgbGV2ZWwpXVxuICAgICAgICAgICAgICAod2hlbiAoPD0gaSAoaW5jIG5ldy1sZXZlbCkpXG4gICAgICAgICAgICAgICAgKGFzZXQgdXBkYXRlIGkgaGVhZGVyKVxuICAgICAgICAgICAgICAgIChyZWN1ciAoaW5jIGkpKSkpXG4gICAgICAgICAgICAoc2V0ISBsZXZlbCBuZXctbGV2ZWwpKVxuICAgICAgICAgIChsZXQgW3ggKHNraXAtbGlzdC1ub2RlIGsgdiAobWFrZS1hcnJheSBuZXctbGV2ZWwpKV1cbiAgICAgICAgICAgIChsb29wIFtpIDBdXG4gICAgICAgICAgICAgICh3aGVuICg8PSBpIGxldmVsKVxuICAgICAgICAgICAgICAgIChsZXQgW2xpbmtzICguLWZvcndhcmQgKGFnZXQgdXBkYXRlIGkpKV1cbiAgICAgICAgICAgICAgICAgIChhc2V0ICguLWZvcndhcmQgeCkgaSAoYWdldCBsaW5rcyBpKSlcbiAgICAgICAgICAgICAgICAgIChhc2V0IGxpbmtzIGkgeCkpKSkpKSkpKVxuXG4gIChyZW1vdmUgW2NvbGwga11cbiAgICAobGV0IFt1cGRhdGUgKG1ha2UtYXJyYXkgTUFYX0xFVkVMKVxuICAgICAgICAgIHggKGxlYXN0LWdyZWF0ZXItbm9kZSBoZWFkZXIgayBsZXZlbCB1cGRhdGUpXG4gICAgICAgICAgeCAoYWdldCAoLi1mb3J3YXJkIHgpIDApXVxuICAgICAgKHdoZW4gKGFuZCAobm90IChuaWw/IHgpKSAoPT0gKC4ta2V5IHgpIGspKVxuICAgICAgICAobG9vcCBbaSAwXVxuICAgICAgICAgICh3aGVuICg8PSBpIGxldmVsKVxuICAgICAgICAgICAgKGxldCBbbGlua3MgKC4tZm9yd2FyZCAoYWdldCB1cGRhdGUgaSkpXVxuICAgICAgICAgICAgICAoaWYgKGlkZW50aWNhbD8gKGFnZXQgbGlua3MgaSkgeClcbiAgICAgICAgICAgICAgICAoZG9cbiAgICAgICAgICAgICAgICAgIChhc2V0IGxpbmtzIGkgKGFnZXQgKC4tZm9yd2FyZCB4KSBpKSlcbiAgICAgICAgICAgICAgICAgIChyZWN1ciAoaW5jIGkpKSlcbiAgICAgICAgICAgICAgICAocmVjdXIgKGluYyBpKSkpKSkpXG4gICAgICAgICh3aGlsZSAoYW5kICg+IGxldmVsIDApXG4gICAgICAgICAgICAgICAgICAgIChuaWw/IChhZ2V0ICguLWZvcndhcmQgaGVhZGVyKSBsZXZlbCkpKVxuICAgICAgICAgIChzZXQhIGxldmVsIChkZWMgbGV2ZWwpKSkpKSlcblxuICAoY2VpbGluZ0VudHJ5IFtjb2xsIGtdXG4gICAgKGxvb3AgW3ggaGVhZGVyIGxldmVsIGxldmVsXVxuICAgICAgKGlmLW5vdCAobmVnPyBsZXZlbClcbiAgICAgICAgKGxldCBbbnggKGxvb3AgW3ggeF1cbiAgICAgICAgICAgICAgICAgICAobGV0IFt4JyAoYWdldCAoLi1mb3J3YXJkIHgpIGxldmVsKV1cbiAgICAgICAgICAgICAgICAgICAgICh3aGVuLW5vdCAobmlsPyB4JylcbiAgICAgICAgICAgICAgICAgICAgICAgKGlmICg+PSAoLi1rZXkgeCcpIGspXG4gICAgICAgICAgICAgICAgICAgICAgICAgeCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgeCcpKSkpKV1cbiAgICAgICAgICAoaWYtbm90IChuaWw/IG54KVxuICAgICAgICAgICAgKHJlY3VyIG54IChkZWMgbGV2ZWwpKVxuICAgICAgICAgICAgKHJlY3VyIHggKGRlYyBsZXZlbCkpKSlcbiAgICAgICAgKHdoZW4tbm90IChpZGVudGljYWw/IHggaGVhZGVyKVxuICAgICAgICAgIHgpKSkpXG4gIFxuICAoZmxvb3JFbnRyeSBbY29sbCBrXVxuICAgIChsb29wIFt4IGhlYWRlciBsZXZlbCBsZXZlbF1cbiAgICAgIChpZi1ub3QgKG5lZz8gbGV2ZWwpXG4gICAgICAgIChsZXQgW254IChsb29wIFt4IHhdXG4gICAgICAgICAgICAgICAgICAgKGxldCBbeCcgKGFnZXQgKC4tZm9yd2FyZCB4KSBsZXZlbCldXG4gICAgICAgICAgICAgICAgICAgICAoaWYtbm90IChuaWw/IHgnKVxuICAgICAgICAgICAgICAgICAgICAgICAoaWYgKD4gKC4ta2V5IHgnKSBrKVxuICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgeCcpKVxuICAgICAgICAgICAgICAgICAgICAgICAod2hlbiAoemVybz8gbGV2ZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgeCkpKSldXG4gICAgICAgICAgKGlmIG54XG4gICAgICAgICAgICAocmVjdXIgbnggKGRlYyBsZXZlbCkpXG4gICAgICAgICAgICAocmVjdXIgeCAoZGVjIGxldmVsKSkpKVxuICAgICAgICAod2hlbi1ub3QgKGlkZW50aWNhbD8geCBoZWFkZXIpXG4gICAgICAgICAgeCkpKSlcblxuICBJU2VxYWJsZVxuICAoLXNlcSBbY29sbF1cbiAgICAobGV0Zm4gWyhpdGVyIFtub2RlXVxuICAgICAgICAgICAgICAobGF6eS1zZXFcbiAgICAgICAgICAgICAgICAod2hlbi1ub3QgKG5pbD8gbm9kZSlcbiAgICAgICAgICAgICAgICAgIChjb25zIFsoLi1rZXkgbm9kZSkgKC4tdmFsIG5vZGUpXVxuICAgICAgICAgICAgICAgICAgICAoaXRlciAoYWdldCAoLi1mb3J3YXJkIG5vZGUpIDApKSkpKSldXG4gICAgICAoaXRlciAoYWdldCAoLi1mb3J3YXJkIGhlYWRlcikgMCkpKSlcblxuICBJUHJpbnRXaXRoV3JpdGVyXG4gICgtcHItd3JpdGVyIFtjb2xsIHdyaXRlciBvcHRzXVxuICAgIChsZXQgW3ByLXBhaXIgKGZuIFtrZXl2YWxdXG4gICAgICAgICAgICAgICAgICAgIChwci1zZXF1ZW50aWFsLXdyaXRlciB3cml0ZXIgcHItd3JpdGVyIFwiXCIgXCIgXCIgXCJcIiBvcHRzIGtleXZhbCkpXVxuICAgICAgKHByLXNlcXVlbnRpYWwtd3JpdGVyIHdyaXRlciBwci1wYWlyIFwie1wiIFwiLCBcIiBcIn1cIiBvcHRzIGNvbGwpKSkpXG5cbihkZWZuIHNraXAtbGlzdCBbXVxuICAoU2tpcExpc3QuIChza2lwLWxpc3Qtbm9kZSAwKSAwKSlcblxuKGRlZiB0aW1lb3V0cy1tYXAgKHNraXAtbGlzdCkpXG5cbihkZWYgVElNRU9VVF9SRVNPTFVUSU9OX01TIDEwKVxuXG4oZGVmbiB0aW1lb3V0XG4gIFwicmV0dXJucyBhIGNoYW5uZWwgdGhhdCB3aWxsIGNsb3NlIGFmdGVyIG1zZWNzXCJcbiAgW21zZWNzXVxuICAobGV0IFt0aW1lb3V0ICgrICgudmFsdWVPZiAoanMvRGF0ZS4pKSBtc2VjcylcbiAgICAgICAgbWUgKC5jZWlsaW5nRW50cnkgdGltZW91dHMtbWFwIHRpbWVvdXQpXVxuICAgIChvciAod2hlbiAoYW5kIG1lICg8ICguLWtleSBtZSkgKCsgdGltZW91dCBUSU1FT1VUX1JFU09MVVRJT05fTVMpKSlcbiAgICAgICAgICAoLi12YWwgbWUpKVxuICAgICAgICAobGV0IFt0aW1lb3V0LWNoYW5uZWwgKGNoYW5uZWxzL2NoYW4gbmlsKV1cbiAgICAgICAgICAoLnB1dCB0aW1lb3V0cy1tYXAgdGltZW91dCB0aW1lb3V0LWNoYW5uZWwpXG4gICAgICAgICAgKGRpc3BhdGNoL3F1ZXVlLWRlbGF5XG4gICAgICAgICAgICAoZm4gW11cbiAgICAgICAgICAgICAgKC5yZW1vdmUgdGltZW91dHMtbWFwIHRpbWVvdXQpXG4gICAgICAgICAgICAgIChpbXBsL2Nsb3NlISB0aW1lb3V0LWNoYW5uZWwpKVxuICAgICAgICAgICAgbXNlY3MpXG4gICAgICAgICAgdGltZW91dC1jaGFubmVsKSkpKVxuXG4iXX0=