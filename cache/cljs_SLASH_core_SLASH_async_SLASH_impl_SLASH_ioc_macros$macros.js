// Compiled by ClojureScript 1.10.597
goog.provide("cljs.core.async.impl.ioc_macros$macros");
var ret__12698__auto___30 = (function (){
cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_ = (function cljs$core$async$impl$ioc_macros$macros$aset_all_BANG_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___31 = arguments.length;
var i__12667__auto___32 = (0);
while(true){
if((i__12667__auto___32 < len__12666__auto___31)){
args__12669__auto__.push((arguments[i__12667__auto___32]));

var G__33 = (i__12667__auto___32 + (1));
i__12667__auto___32 = G__33;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,arr,more){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,more))){
} else {
throw (new Error(["Assert failed: ","Must give an even number of args to aset-all!","\n","(even? (count more))"].join('')));
}

var bindings = cljs.core.partition.call(null,(2),more);
var arr_sym = cljs.core.gensym.call(null,"statearr-");
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,arr_sym,null,(1),null)),(new cljs.core.List(null,arr,null,(1),null))))),null,(1),null)),cljs.core.map.call(null,(function (p__26){
var vec__27 = p__26;
var idx = cljs.core.nth.call(null,vec__27,(0),null);
var val = cljs.core.nth.call(null,vec__27,(1),null);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","aset","cljs.core/aset",(-898215545),null),null,(1),null)),(new cljs.core.List(null,arr_sym,null,(1),null)),(new cljs.core.List(null,idx,null,(1),null)),(new cljs.core.List(null,val,null,(1),null))));
}),bindings),(new cljs.core.List(null,arr_sym,null,(1),null))));
}));

(cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$applyTo = (function (seq22){
var G__23 = cljs.core.first.call(null,seq22);
var seq22__$1 = cljs.core.next.call(null,seq22);
var G__24 = cljs.core.first.call(null,seq22__$1);
var seq22__$2 = cljs.core.next.call(null,seq22__$1);
var G__25 = cljs.core.first.call(null,seq22__$2);
var seq22__$3 = cljs.core.next.call(null,seq22__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23,G__24,G__25,seq22__$3);
}));

return null;
})()
;
(cljs.core.async.impl.ioc_macros$macros.aset_all_BANG_.cljs$lang$macro = true);

var ret__12698__auto___38 = /**
 * Allows a user to define a state monad binding plan.
 * 
 *   (gen-plan
 *  [_ (assoc-in-plan [:foo :bar] 42)
 *   val (get-in-plan [:foo :bar])]
 *  val)
 */
cljs.core.async.impl.ioc_macros$macros.gen_plan = (function cljs$core$async$impl$ioc_macros$macros$gen_plan(_AMPERSAND_form,_AMPERSAND_env,binds,id_expr){
var binds__$1 = cljs.core.partition.call(null,(2),binds);
var psym = cljs.core.gensym.call(null,"plan_");
var forms = cljs.core.reduce.call(null,(function (acc,p__34){
var vec__35 = p__34;
var id = cljs.core.nth.call(null,vec__35,(0),null);
var expr = cljs.core.nth.call(null,vec__35,(1),null);
return cljs.core.concat.call(null,acc,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,id,null,(1),null)),(new cljs.core.List(null,psym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,expr,null,(1),null)),(new cljs.core.List(null,psym,null,(1),null)))),null,(1),null))))));
}),cljs.core.PersistentVector.EMPTY,binds__$1);
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",(-1065745098),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,psym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,forms))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,id_expr,null,(1),null)),(new cljs.core.List(null,psym,null,(1),null))))),null,(1),null)))),null,(1),null))));
});
(cljs.core.async.impl.ioc_macros$macros.gen_plan.cljs$lang$macro = true);


//# sourceURL=cljs/core/async/impl/ioc_macros$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xqcy9jb3JlL2FzeW5jL2ltcGwvaW9jX21hY3JvcyRtYWNyb3MuanMiLCJzb3VyY2VzIjpbImlvY19tYWNyb3MkbWFjcm9zLmNsanMiXSwibGluZUNvdW50Ijo4MSwibWFwcGluZ3MiOiI7QUFhQSxJQUFBQSx3QkFBQTtBQUFBLHdEQUFBLGdFQUFBQyx4SEFBVUs7QUFBVixBQUFBLElBQUFKLHNCQUFBO0FBQUEsQUFBQSxJQUFBQyx3QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyxzQkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEsc0JBQUFEO0FBQUEsQUFBQSxBQUFBRCx5QkFBQSxDQUFBLFVBQUFFOztBQUFBLFlBQUEsQ0FBQUEsc0JBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUFDLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFILDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBcWxHc0Q0QztBQXJsR3RELEFBQUEsT0FBQXhDLDJGQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBRDs7O0FBQUEsQUFBQSxDQUFBLDZGQUFBLFdBQUFFLGdCQUFBQyx4SEFBVUYsdUlBQ1BRLElBQU1DO0FBRFQsQUFFRSxHQUFRLEFBQUNFLGdDQUFNLEFBQUNDLDBCQUFNSDtBQUF0QjtBQUFBLEFBQUEsTUFBQSxLQUFBQyxNQUFBLENBQUEsa0JBQUEsZ0RBQUEsS0FBQTs7O0FBQ0EsSUFBTU8sV0FBUyw4QkFBQSw5QkFBQ0Msa0NBQVlUO0lBQ3RCVSxVQUFRLDJCQUFBLDNCQUFDQztBQURmLEFBQUEsT0FBQVAsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUEsMEVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFDLHdCQUFBLEFBQUFILDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsYUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLFNBQUEsS0FBQSxJQUFB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QUEsSUFBQSxTQUFBLEtBQUEsSUFBQSxwbEJBT1NlLHFWQUNJQywySkFDSkYsaURBQVNDOztBQWpCcEIsQUFBQSxDQUFBLGtFQUFBLGxFQUFVSDs7QUFBVmpDIiwibmFtZXMiOlsicmV0X18xMjY5OF9fYXV0b19fIiwidmFyX2FyZ3MiLCJhcmdzX18xMjY2OV9fYXV0b19fIiwibGVuX18xMjY2Nl9fYXV0b19fIiwiaV9fMTI2NjdfX2F1dG9fXyIsImFyZ3NlcV9fMTI2NzBfX2F1dG9fXyIsImNsanMuY29yZS5hc3luYy5pbXBsLmlvYy1tYWNyb3MkbWFjcm9zL2FzZXQtYWxsISIsIiZmb3JtIiwiJmVudiIsInNlcTIyIiwiR19fMjMiLCJHX18yNCIsIkdfXzI1Iiwic2VsZl9fMTI2NThfX2F1dG9fXyIsImFyciIsIm1vcmUiLCJqcy9FcnJvciIsImNsanMuY29yZS9ldmVuPyIsImNsanMuY29yZS9jb3VudCIsImNsanMuY29yZS9zZXF1ZW5jZSIsImNsanMuY29yZS9jb25jYXQiLCJjbGpzLmNvcmUvTGlzdCIsImNsanMuY29yZS92ZWMiLCJiaW5kaW5ncyIsImNsanMuY29yZS9wYXJ0aXRpb24iLCJhcnItc3ltIiwiY2xqcy5jb3JlL2dlbnN5bSIsImNsanMuY29yZS9tYXAiLCJwX18yNiIsInZlY19fMjciLCJjbGpzLmNvcmUvbnRoIiwiaWR4IiwidmFsIiwiY2xqcy5jb3JlLmFzeW5jLmltcGwuaW9jLW1hY3JvcyRtYWNyb3MvZ2VuLXBsYW4iLCJiaW5kcyIsImlkLWV4cHIiLCJwc3ltIiwiZm9ybXMiLCJjbGpzLmNvcmUvcmVkdWNlIiwicF9fMzQiLCJ2ZWNfXzM1IiwiYWNjIiwiaWQiLCJleHByIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyI7ICAgQ29weXJpZ2h0IChjKSBSaWNoIEhpY2tleS4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbjsgICBUaGUgdXNlIGFuZCBkaXN0cmlidXRpb24gdGVybXMgZm9yIHRoaXMgc29mdHdhcmUgYXJlIGNvdmVyZWQgYnkgdGhlXG47ICAgRWNsaXBzZSBQdWJsaWMgTGljZW5zZSAxLjAgKGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9lY2xpcHNlLTEuMC5waHApXG47ICAgd2hpY2ggY2FuIGJlIGZvdW5kIGluIHRoZSBmaWxlIGVwbC12MTAuaHRtbCBhdCB0aGUgcm9vdCBvZiB0aGlzIGRpc3RyaWJ1dGlvbi5cbjsgICBCeSB1c2luZyB0aGlzIHNvZnR3YXJlIGluIGFueSBmYXNoaW9uLCB5b3UgYXJlIGFncmVlaW5nIHRvIGJlIGJvdW5kIGJ5XG47ICAgdGhlIHRlcm1zIG9mIHRoaXMgbGljZW5zZS5cbjsgICBZb3UgbXVzdCBub3QgcmVtb3ZlIHRoaXMgbm90aWNlLCBvciBhbnkgb3RoZXIsIGZyb20gdGhpcyBzb2Z0d2FyZS5cblxuOzsgYnkgVGltb3RoeSBCYWxkcmlkZ2Vcbjs7IEFwcmlsIDEzLCAyMDEzXG5cbihucyBjbGpzLmNvcmUuYXN5bmMuaW1wbC5pb2MtbWFjcm9zKVxuXG4oZGVmbWFjcm8gYXNldC1hbGwhXG4gIFthcnIgJiBtb3JlXVxuICAoYXNzZXJ0IChldmVuPyAoY291bnQgbW9yZSkpIFwiTXVzdCBnaXZlIGFuIGV2ZW4gbnVtYmVyIG9mIGFyZ3MgdG8gYXNldC1hbGwhXCIpXG4gIChsZXQgW2JpbmRpbmdzIChwYXJ0aXRpb24gMiBtb3JlKVxuICAgICAgICBhcnItc3ltIChnZW5zeW0gXCJzdGF0ZWFyci1cIildXG4gICAgYChsZXQgW35hcnItc3ltIH5hcnJdXG4gICAgICAgfkAobWFwXG4gICAgICAgICAgKGZuIFtbaWR4IHZhbF1dXG4gICAgICAgICAgICBgKGFzZXQgfmFyci1zeW0gfmlkeCB+dmFsKSlcbiAgICAgICAgICBiaW5kaW5ncylcbiAgICAgICB+YXJyLXN5bSkpKVxuXG47OyBTdGF0ZSBtb25hZCBzdHVmZiwgdXNlZCBvbmx5IGluIFNTQSBjb25zdHJ1Y3Rpb25cblxuKGRlZm1hY3JvIGdlbi1wbGFuXG4gIFwiQWxsb3dzIGEgdXNlciB0byBkZWZpbmUgYSBzdGF0ZSBtb25hZCBiaW5kaW5nIHBsYW4uXG5cbiAgKGdlbi1wbGFuXG4gICAgW18gKGFzc29jLWluLXBsYW4gWzpmb28gOmJhcl0gNDIpXG4gICAgIHZhbCAoZ2V0LWluLXBsYW4gWzpmb28gOmJhcl0pXVxuICAgIHZhbClcIlxuICBbYmluZHMgaWQtZXhwcl1cbiAgKGxldCBbYmluZHMgKHBhcnRpdGlvbiAyIGJpbmRzKVxuICAgICAgICBwc3ltIChnZW5zeW0gXCJwbGFuX1wiKVxuICAgICAgICBmb3JtcyAocmVkdWNlXG4gICAgICAgICAgICAgICAoZm4gW2FjYyBbaWQgZXhwcl1dXG4gICAgICAgICAgICAgICAgIChjb25jYXQgYWNjIGBbW35pZCB+cHN5bV0gKH5leHByIH5wc3ltKV0pKVxuICAgICAgICAgICAgICAgW11cbiAgICAgICAgICAgICAgIGJpbmRzKV1cbiAgICBgKGZuIFt+cHN5bV1cbiAgICAgICAobGV0IFt+QGZvcm1zXVxuICAgICAgICAgW35pZC1leHByIH5wc3ltXSkpKSlcblxuIl19