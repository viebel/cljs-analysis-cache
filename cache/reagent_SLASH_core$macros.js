// Compiled by ClojureScript 1.10.597
goog.provide("reagent.core$macros");
var ret__12698__auto___400 = (function (){
/**
 * Bind variables as with let, except that when used in a component
 *   the bindings are only evaluated once. Also takes an optional finally
 *   clause at the end, that is executed when the component is
 *   destroyed.
 */
reagent.core$macros.with_let = (function reagent$core$macros$with_let(var_args){
var args__12669__auto__ = [];
var len__12666__auto___401 = arguments.length;
var i__12667__auto___402 = (0);
while(true){
if((i__12667__auto___402 < len__12666__auto___401)){
args__12669__auto__.push((arguments[i__12667__auto___402]));

var G__403 = (i__12667__auto___402 + (1));
i__12667__auto___402 = G__403;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((3) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((3)),(0),null)):null);
return reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12670__auto__);
});

(reagent.core$macros.with_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("reagent.ratom","with-let","reagent.ratom/with-let",(511958283),null),null,(1),null)),(new cljs.core.List(null,bindings,null,(1),null)),body));
}));

(reagent.core$macros.with_let.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(reagent.core$macros.with_let.cljs$lang$applyTo = (function (seq396){
var G__397 = cljs.core.first.call(null,seq396);
var seq396__$1 = cljs.core.next.call(null,seq396);
var G__398 = cljs.core.first.call(null,seq396__$1);
var seq396__$2 = cljs.core.next.call(null,seq396__$1);
var G__399 = cljs.core.first.call(null,seq396__$2);
var seq396__$3 = cljs.core.next.call(null,seq396__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__397,G__398,G__399,seq396__$3);
}));

return null;
})()
;
(reagent.core$macros.with_let.cljs$lang$macro = true);


//# sourceURL=reagent/core$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9jb3JlJG1hY3Jvcy5qcyIsInNvdXJjZXMiOlsiY29yZSRtYWNyb3MuY2xqcyJdLCJsaW5lQ291bnQiOjU0LCJtYXBwaW5ncyI6IjtBQUdBLElBQUFBLHlCQUFBO0FBQUE7Ozs7OzsrQkFBQSx1Q0FBQUMsdEVBQVVLO0FBQVYsQUFBQSxJQUFBSixzQkFBQTtBQUFBLEFBQUEsSUFBQUMseUJBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsdUJBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHVCQUFBRDtBQUFBLEFBQUEsQUFBQUQseUJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxhQUFBLENBQUFBLHVCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSxFQUFBLENBQUEsTUFBQSxBQUFBSCw2QkFBQSxBQUFBLDBCQUFBLEFBQUFBLDBCQUFBLEtBQUEsSUFBQSxPQUFBLC9EQStsR3NEbUI7QUEvbEd0RCxBQUFBLE9BQUFmLGtFQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBRDs7O0FBQUEsQUFBQSxDQUFBLG9FQUFBLFdBQUFFLGdCQUFBQywvRkFBVUYsOEdBS1BXLFNBQVdDO0FBTGQsQUFBQSxPQUFBVCw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSwyRkFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLGNBQUEsS0FBQSxJQUFBLGxCQU1pQk0seUJBQVdDOzs7QUFONUIsQ0FBQSx1REFBQSx2REFBVVo7O0FBQVY7QUFBQSxDQUFBLGlEQUFBLFdBQUFNLDVEQUFVTjtBQUFWLEFBQUEsSUFBQU8sU0FBQSwwQkFBQUQsMUJBZ2lHZ0RPO0lBaGlHaERQLGFBQUEseUJBQUFBLHpCQWlpR2tEUTtJQWppR2xETixTQUFBLDBCQUFBRiwxQkFnaUdnRE87SUFoaUdoRFAsYUFBQSx5QkFBQUEsekJBaWlHa0RRO0lBamlHbERMLFNBQUEsMEJBQUFILDFCQWdpR2dETztJQWhpR2hEUCxhQUFBLHlCQUFBQSx6QkFpaUdrRFE7QUFqaUdsRCxBQUFBLElBQUFKLHNCQUFBO0FBQUEsQUFBQSxPQUFBQSx5REFBQUgsT0FBQUMsT0FBQUMsT0FBQUg7OztBQUFBOzs7QUFBQSxBQUFBLENBQUEsK0NBQUEsL0NBQVVOOztBQUFWTiIsIm5hbWVzIjpbInJldF9fMTI2OThfX2F1dG9fXyIsInZhcl9hcmdzIiwiYXJnc19fMTI2NjlfX2F1dG9fXyIsImxlbl9fMTI2NjZfX2F1dG9fXyIsImlfXzEyNjY3X19hdXRvX18iLCJhcmdzZXFfXzEyNjcwX19hdXRvX18iLCJyZWFnZW50LmNvcmUkbWFjcm9zL3dpdGgtbGV0IiwiJmZvcm0iLCImZW52IiwiY2xqcy5jb3JlL3NlcXVlbmNlIiwiY2xqcy5jb3JlL2NvbmNhdCIsImNsanMuY29yZS9MaXN0Iiwic2VxMzk2IiwiR19fMzk3IiwiR19fMzk4IiwiR19fMzk5Iiwic2VsZl9fMTI2NThfX2F1dG9fXyIsImJpbmRpbmdzIiwiYm9keSIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0IiwiY2xqcy5jb3JlL0luZGV4ZWRTZXEiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIHJlYWdlbnQuY29yZVxuICAoOnJlcXVpcmUgW3JlYWdlbnQucmF0b20gOmFzIHJhXSkpXG5cbihkZWZtYWNybyB3aXRoLWxldFxuICBcIkJpbmQgdmFyaWFibGVzIGFzIHdpdGggbGV0LCBleGNlcHQgdGhhdCB3aGVuIHVzZWQgaW4gYSBjb21wb25lbnRcbiAgdGhlIGJpbmRpbmdzIGFyZSBvbmx5IGV2YWx1YXRlZCBvbmNlLiBBbHNvIHRha2VzIGFuIG9wdGlvbmFsIGZpbmFsbHlcbiAgY2xhdXNlIGF0IHRoZSBlbmQsIHRoYXQgaXMgZXhlY3V0ZWQgd2hlbiB0aGUgY29tcG9uZW50IGlzXG4gIGRlc3Ryb3llZC5cIlxuICBbYmluZGluZ3MgJiBib2R5XVxuICBgKHJhL3dpdGgtbGV0IH5iaW5kaW5ncyB+QGJvZHkpKVxuIl19