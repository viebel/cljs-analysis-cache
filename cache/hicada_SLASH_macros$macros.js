// Compiled by ClojureScript 1.10.597
goog.provide("hicada.macros$macros");
var ret__12698__auto___36 = (function (){
hicada.macros$macros.with_child_config = (function hicada$macros$macros$with_child_config(var_args){
var args__12669__auto__ = [];
var len__12666__auto___37 = arguments.length;
var i__12667__auto___38 = (0);
while(true){
if((i__12667__auto___38 < len__12666__auto___37)){
args__12669__auto__.push((arguments[i__12667__auto___38]));

var G__39 = (i__12667__auto___38 + (1));
i__12667__auto___38 = G__39;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return hicada.macros$macros.with_child_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(hicada.macros$macros.with_child_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,expanded_form,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__3__auto__","cfg__3__auto__",(-1405718712),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-cfg__4__auto__","new-cfg__4__auto__",(2054386328),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"child-config","child-config",(-283547326)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,expanded_form,null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-cfg__4__auto__","new-cfg__4__auto__",(2054386328),null),null,(1),null))))),null,(1),null)),body)),null,(1),null))));
}));

(hicada.macros$macros.with_child_config.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(hicada.macros$macros.with_child_config.cljs$lang$applyTo = (function (seq31){
var G__32 = cljs.core.first.call(null,seq31);
var seq31__$1 = cljs.core.next.call(null,seq31);
var G__33 = cljs.core.first.call(null,seq31__$1);
var seq31__$2 = cljs.core.next.call(null,seq31__$1);
var G__34 = cljs.core.first.call(null,seq31__$2);
var seq31__$3 = cljs.core.next.call(null,seq31__$2);
var G__35 = cljs.core.first.call(null,seq31__$3);
var seq31__$4 = cljs.core.next.call(null,seq31__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32,G__33,G__34,G__35,seq31__$4);
}));

return null;
})()
;
(hicada.macros$macros.with_child_config.cljs$lang$macro = true);


//# sourceURL=hicada/macros$macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGljYWRhL21hY3JvcyRtYWNyb3MuanMiLCJzb3VyY2VzIjpbIm1hY3JvcyRtYWNyb3MuY2xqcyJdLCJsaW5lQ291bnQiOjUwLCJtYXBwaW5ncyI6IjtBQUVBLElBQUFBLHdCQUFBO0FBQUEseUNBQUEsaURBQUFDLDFGQUFVSztBQUFWLEFBQUEsSUFBQUosc0JBQUE7QUFBQSxBQUFBLElBQUFDLHdCQUFBLEFBQUE7QUFBQSxBQUFBLElBQUFDLHNCQUFBOztBQUFBLEFBQUEsR0FBQSxDQUFBQSxzQkFBQUQ7QUFBQSxBQUFBLEFBQUFELHlCQUFBLENBQUEsVUFBQUU7O0FBQUEsWUFBQSxDQUFBQSxzQkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQUMsd0JBQUEsRUFBQSxDQUFBLE1BQUEsQUFBQUgsNkJBQUEsQUFBQSwwQkFBQSxBQUFBQSwwQkFBQSxLQUFBLElBQUEsT0FBQSwvREFnbUdzRHNCO0FBaG1HdEQsQUFBQSxPQUFBbEIsNEVBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUFEOzs7QUFBQSxBQUFBLENBQUEsOEVBQUEsV0FBQUUsZ0JBQUFDLHpHQUFVRix3SEFBbUJhLEtBQUtDLGNBQWdCQztBQUFsRCxBQUFBLE9BQUFaLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLDBFQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBQyx3QkFBQSxBQUFBSCw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSxnRkFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQSxpR0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQSx1RkFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSx1RUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQSxpR0FBQSxLQUFBLElBQUEsU0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQSxpR0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLFVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxtQkFBQSxLQUFBLElBQUEsU0FBQSxLQUFBLElBQUEsVUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUYsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUEsa0ZBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFDLHdCQUFBLEFBQUFILDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLGlHQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBLHVGQUFBLEtBQUEsSUFBQSxVQUFBLEtBQUEsSUFBQSxjQUFBLEtBQUEsSUFBQSxudEJBRXNGUSw4Q0FBTUMscXBCQUN4Q0M7OztBQUhwRCxDQUFBLGlFQUFBLGpFQUFVZjs7QUFBVjtBQUFBLENBQUEsMkRBQUEsV0FBQU8sdEVBQVVQO0FBQVYsQUFBQSxJQUFBUSxRQUFBLDBCQUFBRCwxQkFpaUdnRFM7SUFqaUdoRFQsWUFBQSx5QkFBQUEsekJBa2lHa0RVO0lBbGlHbERSLFFBQUEsMEJBQUFGLDFCQWlpR2dEUztJQWppR2hEVCxZQUFBLHlCQUFBQSx6QkFraUdrRFU7SUFsaUdsRFAsUUFBQSwwQkFBQUgsMUJBaWlHZ0RTO0lBamlHaERULFlBQUEseUJBQUFBLHpCQWtpR2tEVTtJQWxpR2xETixRQUFBLDBCQUFBSiwxQkFpaUdnRFM7SUFqaUdoRFQsWUFBQSx5QkFBQUEsekJBa2lHa0RVO0FBbGlHbEQsQUFBQSxJQUFBTCxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUFKLE1BQUFDLE1BQUFDLE1BQUFDLE1BQUFKOzs7QUFBQTs7O0FBQUEsQUFBQSxDQUFBLHlEQUFBLHpEQUFVUDs7QUFBVk4iLCJuYW1lcyI6WyJyZXRfXzEyNjk4X19hdXRvX18iLCJ2YXJfYXJncyIsImFyZ3NfXzEyNjY5X19hdXRvX18iLCJsZW5fXzEyNjY2X19hdXRvX18iLCJpX18xMjY2N19fYXV0b19fIiwiYXJnc2VxX18xMjY3MF9fYXV0b19fIiwiaGljYWRhLm1hY3JvcyRtYWNyb3Mvd2l0aC1jaGlsZC1jb25maWciLCImZm9ybSIsIiZlbnYiLCJjbGpzLmNvcmUvc2VxdWVuY2UiLCJjbGpzLmNvcmUvY29uY2F0IiwiY2xqcy5jb3JlL0xpc3QiLCJjbGpzLmNvcmUvdmVjIiwic2VxMzEiLCJHX18zMiIsIkdfXzMzIiwiR19fMzQiLCJHX18zNSIsInNlbGZfXzEyNjU4X19hdXRvX18iLCJmb3JtIiwiZXhwYW5kZWQtZm9ybSIsImJvZHkiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCIsImNsanMuY29yZS9JbmRleGVkU2VxIl0sInNvdXJjZXNDb250ZW50IjpbIihucyBoaWNhZGEubWFjcm9zKVxuXG4oZGVmbWFjcm8gd2l0aC1jaGlsZC1jb25maWcgW2Zvcm0gZXhwYW5kZWQtZm9ybSAmIGJvZHldXG4gIGAobGV0IFtjZmcjIGhpY2FkYS5jb21waWxlci8qY29uZmlnKlxuICAgICAgICAgbmV3LWNmZyMgKCg6Y2hpbGQtY29uZmlnIGhpY2FkYS5jb21waWxlci8qY29uZmlnKikgaGljYWRhLmNvbXBpbGVyLypjb25maWcqIH5mb3JtIH5leHBhbmRlZC1mb3JtKV1cbiAgICAgKGJpbmRpbmcgW2hpY2FkYS5jb21waWxlci8qY29uZmlnKiBuZXctY2ZnI10gfkBib2R5KSkpXG4iXX0=