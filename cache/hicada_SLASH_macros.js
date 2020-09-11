// Compiled by ClojureScript 1.10.597
goog.provide("hicada.macros");
var ret__12698__auto___27 = (function (){
hicada.macros.with_child_config = (function hicada$macros$with_child_config(var_args){
var args__12669__auto__ = [];
var len__12666__auto___28 = arguments.length;
var i__12667__auto___29 = (0);
while(true){
if((i__12667__auto___29 < len__12666__auto___28)){
args__12669__auto__.push((arguments[i__12667__auto___29]));

var G__30 = (i__12667__auto___29 + (1));
i__12667__auto___29 = G__30;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((4) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((4)),(0),null)):null);
return hicada.macros.with_child_config.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__12670__auto__);
});

(hicada.macros.with_child_config.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,form,expanded_form,body){
return cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",(-308701135),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"cfg__1__auto__","cfg__1__auto__",(1733817809),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-cfg__2__auto__","new-cfg__2__auto__",(271674447),null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Keyword(null,"child-config","child-config",(-283547326)),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)),(new cljs.core.List(null,expanded_form,null,(1),null)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",(2050379843),null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("hicada.compiler","*config*","hicada.compiler/*config*",(-1996181100),null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"new-cfg__2__auto__","new-cfg__2__auto__",(271674447),null),null,(1),null))))),null,(1),null)),body)),null,(1),null))));
}));

(hicada.macros.with_child_config.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(hicada.macros.with_child_config.cljs$lang$applyTo = (function (seq22){
var G__23 = cljs.core.first.call(null,seq22);
var seq22__$1 = cljs.core.next.call(null,seq22);
var G__24 = cljs.core.first.call(null,seq22__$1);
var seq22__$2 = cljs.core.next.call(null,seq22__$1);
var G__25 = cljs.core.first.call(null,seq22__$2);
var seq22__$3 = cljs.core.next.call(null,seq22__$2);
var G__26 = cljs.core.first.call(null,seq22__$3);
var seq22__$4 = cljs.core.next.call(null,seq22__$3);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23,G__24,G__25,G__26,seq22__$4);
}));

return null;
})()
;
(hicada.macros.with_child_config.cljs$lang$macro = true);


//# sourceURL=hicada/macros.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGljYWRhL21hY3Jvcy5qcyIsInNvdXJjZXMiOlsibWFjcm9zLmNsanMiXSwibGluZUNvdW50Ijo1MCwibWFwcGluZ3MiOiI7QUFFQSxJQUFBQSx3QkFBQTtBQUFBLGtDQUFBLDBDQUFBQyw1RUFBVUs7QUFBVixBQUFBLElBQUFKLHNCQUFBO0FBQUEsQUFBQSxJQUFBQyx3QkFBQSxBQUFBO0FBQUEsQUFBQSxJQUFBQyxzQkFBQTs7QUFBQSxBQUFBLEdBQUEsQ0FBQUEsc0JBQUFEO0FBQUEsQUFBQSxBQUFBRCx5QkFBQSxDQUFBLFVBQUFFOztBQUFBLFlBQUEsQ0FBQUEsc0JBQUE7Ozs7QUFBQTs7OztBQUFBLElBQUFDLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFILDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBZ21Hc0RzQjtBQWhtR3RELEFBQUEsT0FBQWxCLHFFQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBRDs7O0FBQUEsQUFBQSxDQUFBLHVFQUFBLFdBQUFFLGdCQUFBQyxsR0FBVUYsaUhBQW1CYSxLQUFLQyxjQUFnQkM7QUFBbEQsQUFBQSxPQUFBWiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSwwRUFBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQUMsd0JBQUEsQUFBQUgsNkJBQUEsQUFBQUMsMkJBQUEsS0FBQUMsZUFBQSxLQUFBLEFBQUEsK0VBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUEsaUdBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUEsc0ZBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBRiw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsdUVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUEsaUdBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUEsaUdBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxVQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsbUJBQUEsS0FBQSxJQUFBLFNBQUEsS0FBQSxJQUFBLFVBQUEsS0FBQSxJQUFBLE9BQUEsS0FBQUEsZUFBQSxLQUFBLEFBQUFGLDZCQUFBLEFBQUFDLDJCQUFBLEtBQUFDLGVBQUEsS0FBQSxBQUFBLGtGQUFBLEtBQUEsSUFBQSxPQUFBLEtBQUFBLGVBQUEsS0FBQSxBQUFBQyx3QkFBQSxBQUFBSCw2QkFBQSxBQUFBQywyQkFBQSxLQUFBQyxlQUFBLEtBQUEsQUFBQSxpR0FBQSxLQUFBLElBQUEsT0FBQSxLQUFBQSxlQUFBLEtBQUEsQUFBQSxzRkFBQSxLQUFBLElBQUEsVUFBQSxLQUFBLElBQUEsY0FBQSxLQUFBLElBQUEsbHRCQUVzRlEsOENBQU1DLG9wQkFDeENDOzs7QUFIcEQsQ0FBQSwwREFBQSwxREFBVWY7O0FBQVY7QUFBQSxDQUFBLG9EQUFBLFdBQUFPLC9EQUFVUDtBQUFWLEFBQUEsSUFBQVEsUUFBQSwwQkFBQUQsMUJBaWlHZ0RTO0lBamlHaERULFlBQUEseUJBQUFBLHpCQWtpR2tEVTtJQWxpR2xEUixRQUFBLDBCQUFBRiwxQkFpaUdnRFM7SUFqaUdoRFQsWUFBQSx5QkFBQUEsekJBa2lHa0RVO0lBbGlHbERQLFFBQUEsMEJBQUFILDFCQWlpR2dEUztJQWppR2hEVCxZQUFBLHlCQUFBQSx6QkFraUdrRFU7SUFsaUdsRE4sUUFBQSwwQkFBQUosMUJBaWlHZ0RTO0lBamlHaERULFlBQUEseUJBQUFBLHpCQWtpR2tEVTtBQWxpR2xELEFBQUEsSUFBQUwsc0JBQUE7QUFBQSxBQUFBLE9BQUFBLHlEQUFBSixNQUFBQyxNQUFBQyxNQUFBQyxNQUFBSjs7O0FBQUE7OztBQUFBLEFBQUEsQ0FBQSxrREFBQSxsREFBVVA7O0FBQVZOIiwibmFtZXMiOlsicmV0X18xMjY5OF9fYXV0b19fIiwidmFyX2FyZ3MiLCJhcmdzX18xMjY2OV9fYXV0b19fIiwibGVuX18xMjY2Nl9fYXV0b19fIiwiaV9fMTI2NjdfX2F1dG9fXyIsImFyZ3NlcV9fMTI2NzBfX2F1dG9fXyIsImhpY2FkYS5tYWNyb3Mvd2l0aC1jaGlsZC1jb25maWciLCImZm9ybSIsIiZlbnYiLCJjbGpzLmNvcmUvc2VxdWVuY2UiLCJjbGpzLmNvcmUvY29uY2F0IiwiY2xqcy5jb3JlL0xpc3QiLCJjbGpzLmNvcmUvdmVjIiwic2VxMjIiLCJHX18yMyIsIkdfXzI0IiwiR19fMjUiLCJHX18yNiIsInNlbGZfXzEyNjU4X19hdXRvX18iLCJmb3JtIiwiZXhwYW5kZWQtZm9ybSIsImJvZHkiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCIsImNsanMuY29yZS9JbmRleGVkU2VxIl0sInNvdXJjZXNDb250ZW50IjpbIihucyBoaWNhZGEubWFjcm9zKVxuXG4oZGVmbWFjcm8gd2l0aC1jaGlsZC1jb25maWcgW2Zvcm0gZXhwYW5kZWQtZm9ybSAmIGJvZHldXG4gIGAobGV0IFtjZmcjIGhpY2FkYS5jb21waWxlci8qY29uZmlnKlxuICAgICAgICAgbmV3LWNmZyMgKCg6Y2hpbGQtY29uZmlnIGhpY2FkYS5jb21waWxlci8qY29uZmlnKikgaGljYWRhLmNvbXBpbGVyLypjb25maWcqIH5mb3JtIH5leHBhbmRlZC1mb3JtKV1cbiAgICAgKGJpbmRpbmcgW2hpY2FkYS5jb21waWxlci8qY29uZmlnKiBuZXctY2ZnI10gfkBib2R5KSkpXG4iXX0=