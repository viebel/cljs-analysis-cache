// Compiled by ClojureScript 1.10.597
goog.provide("reagent.dom");
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.react_dom !== 'undefined')){
} else {
reagent.dom.react_dom = ReactDOM;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__482 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__483 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__483);

try{return reagent.dom.react_dom.render.call(null,comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__484 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__485 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__485);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__484);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__482);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__487 = arguments.length;
switch (G__487) {
case (2):
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_.call(null);

var vec__488 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",(-705136228)).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__488,(0),null);
var callback = cljs.core.nth.call(null,vec__488,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element.call(null,compiler,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = (3));

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.react_dom.findDOMNode.call(null,this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__492_508 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__493_509 = null;
var count__494_510 = (0);
var i__495_511 = (0);
while(true){
if((i__495_511 < count__494_510)){
var vec__502_512 = cljs.core._nth.call(null,chunk__493_509,i__495_511);
var container_513 = cljs.core.nth.call(null,vec__502_512,(0),null);
var comp_514 = cljs.core.nth.call(null,vec__502_512,(1),null);
reagent.dom.re_render_component.call(null,comp_514,container_513);


var G__515 = seq__492_508;
var G__516 = chunk__493_509;
var G__517 = count__494_510;
var G__518 = (i__495_511 + (1));
seq__492_508 = G__515;
chunk__493_509 = G__516;
count__494_510 = G__517;
i__495_511 = G__518;
continue;
} else {
var temp__9522__auto___519 = cljs.core.seq.call(null,seq__492_508);
if(temp__9522__auto___519){
var seq__492_520__$1 = temp__9522__auto___519;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__492_520__$1)){
var c__12122__auto___521 = cljs.core.chunk_first.call(null,seq__492_520__$1);
var G__522 = cljs.core.chunk_rest.call(null,seq__492_520__$1);
var G__523 = c__12122__auto___521;
var G__524 = cljs.core.count.call(null,c__12122__auto___521);
var G__525 = (0);
seq__492_508 = G__522;
chunk__493_509 = G__523;
count__494_510 = G__524;
i__495_511 = G__525;
continue;
} else {
var vec__505_526 = cljs.core.first.call(null,seq__492_520__$1);
var container_527 = cljs.core.nth.call(null,vec__505_526,(0),null);
var comp_528 = cljs.core.nth.call(null,vec__505_526,(1),null);
reagent.dom.re_render_component.call(null,comp_528,container_527);


var G__529 = cljs.core.next.call(null,seq__492_520__$1);
var G__530 = null;
var G__531 = (0);
var G__532 = (0);
seq__492_508 = G__529;
chunk__493_509 = G__530;
count__494_510 = G__531;
i__495_511 = G__532;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render.call(null);
});

//# sourceURL=reagent/dom.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9kb20uanMiLCJzb3VyY2VzIjpbImRvbS5jbGpzIl0sImxpbmVDb3VudCI6MTc0LCJtYXBwaW5ncyI6IjtBQVNBLEdBQUEsUUFBQUEsb0NBQUFDLHdDQUFBQztBQUFBO0FBQUEsQUFBQSxBQUFTQyx3QkFBVUM7O0FBQ25CLEdBQUEsUUFBQUosb0NBQUFDLHdDQUFBSTtBQUFBO0FBQUEsQUFBQSxBQUFtQkMsb0JBQU0seUJBQUEsekJBQUNDOztBQUUxQiwyQkFBQSwzQkFBT0MsOERBQWNDO0FBQXJCLEFBQ0UsQUFBQ0MsK0JBQU1KLGtCQUFNSyxpQkFBT0Y7O0FBQ3BCLE9BQUMsQUFBQU4sdURBQWlDTTs7QUFFcEMsMEJBQUEsMUJBQU9HLDREQUFhQyxLQUFLSixVQUFVSztBQUFuQyxBQUNFLElBQUFDLDBDQUFVRTtJQUFWRCwwQ0FBQTtBQUFBLEFBQUEsK0NBQUFBLDlDQUFVQzs7QUFBVixJQUFBLEFBQ0UsT0FBQyxBQUFBZCx1Q0FBaUIsQUFBQ1UsZ0JBQU1KLFVBQ3ZCO0FBQUEsQUFDRSxJQUFBUywwQ0FBVUQ7SUFBVkUsMENBQUE7QUFBQSxBQUFBLCtDQUFBQSw5Q0FBVUY7O0FBQVYsSUFBQSxBQUNFLEFBQUNQLCtCQUFNSixrQkFBTWMsZ0JBQU1YLFVBQVVJOztBQUM3QixBQUFDUTs7QUFDRCxHQUFJLEdBQUEsYUFBQSxaQUFPUDtBQUNULE9BQUNBOztBQURIOztVQUhGLEFBQUEsK0NBQUFJLDlDQUFVRDs7VUFIaEIsQUFBQSwrQ0FBQUYsOUNBQVVFOztBQVNaLGtDQUFBLGxDQUFPSyw0RUFBcUJULEtBQUtKO0FBQWpDLEFBQ0Usd0RBQUEsakRBQUNHLGtDQUFZQyxLQUFLSjs7QUFFcEIsQUFBQTs7Ozs7Ozs7O3FCQUFBLDZCQUFBYyxsREFBTUU7QUFBTixBQUFBLElBQUFELFNBQUEsQUFBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLE9BQUFDLGlEQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7O0tBQUE7QUFBQSxPQUFBQSxpREFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7Ozs7QUFBQSxNQUFBLEtBQUFDLE1BQUEsQ0FBQSw4REFBQSxBQUFBOzs7OztBQUFBLENBQUEsbURBQUEsbkRBQU1ELDhEQVFGWixLQUFLSjtBQVJULEFBU0csT0FBQ2dCLDZCQUFPWixLQUFLSixVQUFVa0I7OztBQVQxQixDQUFBLG1EQUFBLG5EQUFNRiw4REFVRlosS0FBS0osVUFBVW1CO0FBVm5CLEFBV0csQUFBQ0M7O0FBQ0QsSUFBQUMsV0FBMEIsdURBQUEsdUpBQUEsNU1BQUksQUFBQ0csOEJBQUlMLDBHQUNORCx1Q0FBc0JDLGdIQUd0QkEscUJBQXFCLEFBQUEsNkZBQVdBO2VBSjdELEFBQUFHLHdCQUFBRCxTQUFBLElBQUEsaERBQU9FO2VBQVAsQUFBQUQsd0JBQUFELFNBQUEsSUFBQSxoREFBZ0JoQjtJQUtWb0IsSUFBRTtBQUFBLEFBQ0UsT0FBQ0MsNENBQWFILFNBQVMsRUFBSSxBQUFDQyw4QkFBSXBCLE9BQU0sQUFBQ0EsZ0JBQU1BOztBQU52RCxBQU9FLE9BQUNELGtDQUFZc0IsRUFBRXpCLFVBQVVLOzs7QUFuQjlCLENBQUEsNkNBQUEsN0NBQU1XOztBQUFOLEFBcUJBOzs7d0NBQUEseENBQU1XLHdGQUVIM0I7QUFGSCxBQUdFLE9BQUNELG1DQUFhQzs7QUFFaEI7Ozt1QkFBQSx2QkFBTTRCLHNEQUVIQztBQUZILEFBR0UsT0FBQyxBQUFBbkMsNENBQXNCbUM7O0FBRXpCOzs7Ozs7Ozs7OzsrQkFBQSwvQkFBTUM7QUFBTixBQVdFLEFBQUNWOztBQUNELElBQUFXLGVBQUEsQUFBQUMsd0JBQUEsQUFBQUMsMEJBQTBCcEM7SUFBMUJxQyxpQkFBQTtJQUFBQyxpQkFBQTtJQUFBQyxhQUFBOztBQUFBLEFBQUEsR0FBQSxBQUFBLENBQUFBLGFBQUFEO0FBQUEsSUFBQUUsZUFBQSxBQUFBQyx5QkFBQUosZUFBQUU7b0JBQUEsQUFBQWQsd0JBQUFlLGFBQUEsSUFBQSx6REFBU3JDO2VBQVQsQUFBQXNCLHdCQUFBZSxhQUFBLElBQUEscERBQW1CakM7QUFBbkIsQUFBQSxBQUNFLEFBQUNTLDBDQUFvQlQsU0FBS0o7O0FBRDVCO0FBQUEsYUFBQStCO2FBQUFHO2FBQUFDO2FBQUEsQ0FBQUMsYUFBQTs7Ozs7OztBQUFBLElBQUFHLHlCQUFBLEFBQUFQLHdCQUFBRDtBQUFBLEFBQUEsR0FBQVE7QUFBQSxBQUFBLElBQUFSLG1CQUFBUTtBQUFBLEFBQUEsR0FBQSxBQUFBQyx1Q0FBQVQ7QUFBQSxJQUFBVSx1QkFBQSxBQUFBQyxnQ0FBQVg7QUFBQSxBQUFBLGFBQUEsQUFBQVksK0JBQUFaO2FBQUFVO2FBQUEsQUFBQUcsMEJBQUFIO2FBQUE7Ozs7Ozs7QUFBQSxJQUFBSSxlQUFBLEFBQUFDLDBCQUFBZjtvQkFBQSxBQUFBVCx3QkFBQXVCLGFBQUEsSUFBQSx6REFBUzdDO2VBQVQsQUFBQXNCLHdCQUFBdUIsYUFBQSxJQUFBLHBEQUFtQnpDO0FBQW5CLEFBQUEsQUFDRSxBQUFDUywwQ0FBb0JULFNBQUtKOztBQUQ1QjtBQUFBLGFBQUEsQUFBQStDLHlCQUFBaEI7YUFBQTthQUFBO2FBQUE7Ozs7Ozs7O0FBQUE7Ozs7O0FBRUEsT0FBQ25CIiwibmFtZXMiOlsianMvcmVhZ2VudCIsImpzL3JlYWdlbnQuZG9tIiwianMvcmVhZ2VudC5kb20ucmVhY3QtZG9tIiwicmVhZ2VudC5kb20vcmVhY3QtZG9tIiwianMvUmVhY3RET00iLCJqcy9yZWFnZW50LmRvbS5yb290cyIsInJlYWdlbnQuZG9tL3Jvb3RzIiwiY2xqcy5jb3JlL2F0b20iLCJyZWFnZW50LmRvbS91bm1vdW50LWNvbXAiLCJjb250YWluZXIiLCJjbGpzLmNvcmUvc3dhcCEiLCJjbGpzLmNvcmUvZGlzc29jIiwicmVhZ2VudC5kb20vcmVuZGVyLWNvbXAiLCJjb21wIiwiY2FsbGJhY2siLCIqYWx3YXlzLXVwZGF0ZSotb3JpZy12YWxfXzQ4MiIsIiphbHdheXMtdXBkYXRlKi10ZW1wLXZhbF9fNDgzIiwicmVhZ2VudC5pbXBsLnV0aWwvKmFsd2F5cy11cGRhdGUqIiwiKmFsd2F5cy11cGRhdGUqLW9yaWctdmFsX180ODQiLCIqYWx3YXlzLXVwZGF0ZSotdGVtcC12YWxfXzQ4NSIsImNsanMuY29yZS9hc3NvYyIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9mbHVzaC1hZnRlci1yZW5kZXIiLCJyZWFnZW50LmRvbS9yZS1yZW5kZXItY29tcG9uZW50IiwidmFyX2FyZ3MiLCJHX180ODciLCJyZWFnZW50LmRvbS9yZW5kZXIiLCJqcy9FcnJvciIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9kZWZhdWx0LWNvbXBpbGVyIiwiY2FsbGJhY2stb3ItY29tcGlsZXIiLCJyZWFnZW50LnJhdG9tL2ZsdXNoISIsInZlY19fNDg4IiwiY2xqcy5jb3JlL250aCIsImNvbXBpbGVyIiwiY2xqcy5jb3JlL2ZuPyIsImYiLCJyZWFnZW50LmltcGwucHJvdG9jb2xzL2FzLWVsZW1lbnQiLCJyZWFnZW50LmRvbS91bm1vdW50LWNvbXBvbmVudC1hdC1ub2RlIiwicmVhZ2VudC5kb20vZG9tLW5vZGUiLCJ0aGlzIiwicmVhZ2VudC5kb20vZm9yY2UtdXBkYXRlLWFsbCIsInNlcV9fNDkyIiwiY2xqcy5jb3JlL3NlcSIsImNsanMuY29yZS9kZXJlZiIsImNodW5rX180OTMiLCJjb3VudF9fNDk0IiwiaV9fNDk1IiwidmVjX181MDIiLCJjbGpzLmNvcmUvLW50aCIsInRlbXBfXzk1MjJfX2F1dG9fXyIsImNsanMuY29yZS9jaHVua2VkLXNlcT8iLCJjX18xMjEyMl9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rLWZpcnN0IiwiY2xqcy5jb3JlL2NodW5rLXJlc3QiLCJjbGpzLmNvcmUvY291bnQiLCJ2ZWNfXzUwNSIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0Il0sInNvdXJjZXNDb250ZW50IjpbIihucyByZWFnZW50LmRvbVxuICAoOnJlcXVpcmUgW2NsanNqcy5yZWFjdC5kb21dXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnV0aWwgOmFzIHV0aWxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnRlbXBsYXRlIDphcyB0bXBsXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5pbnB1dCA6YXMgaW5wdXRdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmJhdGNoaW5nIDphcyBiYXRjaF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwucHJvdG9jb2xzIDphcyBwXVxuICAgICAgICAgICAgW3JlYWdlbnQucmF0b20gOmFzIHJhdG9tXSkpXG5cbihkZWZvbmNlIHJlYWN0LWRvbSBqcy9SZWFjdERPTSlcbihkZWZvbmNlIF46cHJpdmF0ZSByb290cyAoYXRvbSB7fSkpXG5cbihkZWZuLSB1bm1vdW50LWNvbXAgW2NvbnRhaW5lcl1cbiAgKHN3YXAhIHJvb3RzIGRpc3NvYyBjb250YWluZXIpXG4gIChyZWFjdC1kb20udW5tb3VudENvbXBvbmVudEF0Tm9kZSBjb250YWluZXIpKVxuXG4oZGVmbi0gcmVuZGVyLWNvbXAgW2NvbXAgY29udGFpbmVyIGNhbGxiYWNrXVxuICAoYmluZGluZyBbdXRpbC8qYWx3YXlzLXVwZGF0ZSogdHJ1ZV1cbiAgICAocmVhY3QtZG9tLnJlbmRlciAoY29tcCkgY29udGFpbmVyXG4gICAgICAoZm4gW11cbiAgICAgICAgKGJpbmRpbmcgW3V0aWwvKmFsd2F5cy11cGRhdGUqIGZhbHNlXVxuICAgICAgICAgIChzd2FwISByb290cyBhc3NvYyBjb250YWluZXIgY29tcClcbiAgICAgICAgICAoYmF0Y2gvZmx1c2gtYWZ0ZXItcmVuZGVyKVxuICAgICAgICAgIChpZiAoc29tZT8gY2FsbGJhY2spXG4gICAgICAgICAgICAoY2FsbGJhY2spKSkpKSkpXG5cbihkZWZuLSByZS1yZW5kZXItY29tcG9uZW50IFtjb21wIGNvbnRhaW5lcl1cbiAgKHJlbmRlci1jb21wIGNvbXAgY29udGFpbmVyIG5pbCkpXG5cbihkZWZuIHJlbmRlclxuICBcIlJlbmRlciBhIFJlYWdlbnQgY29tcG9uZW50IGludG8gdGhlIERPTS4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBiZVxuICBlaXRoZXIgYSB2ZWN0b3IgKHVzaW5nIFJlYWdlbnQncyBIaWNjdXAgc3ludGF4KSwgb3IgYSBSZWFjdCBlbGVtZW50LlxuICBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBiZSBhIERPTSBub2RlLlxuXG4gIE9wdGlvbmFsbHkgdGFrZXMgYSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW4gcGxhY2UuXG5cbiAgUmV0dXJucyB0aGUgbW91bnRlZCBjb21wb25lbnQgaW5zdGFuY2UuXCJcbiAgKFtjb21wIGNvbnRhaW5lcl1cbiAgIChyZW5kZXIgY29tcCBjb250YWluZXIgdG1wbC9kZWZhdWx0LWNvbXBpbGVyKSlcbiAgKFtjb21wIGNvbnRhaW5lciBjYWxsYmFjay1vci1jb21waWxlcl1cbiAgIChyYXRvbS9mbHVzaCEpXG4gICAobGV0IFtbY29tcGlsZXIgY2FsbGJhY2tdIChpZiAoZm4/IGNhbGxiYWNrLW9yLWNvbXBpbGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0bXBsL2RlZmF1bHQtY29tcGlsZXIgY2FsbGJhY2stb3ItY29tcGlsZXJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOzsgVE9ETzogQ2FsbGJhY2sgb3B0aW9uIGRvZXNuJ3QgbWFrZSBzZW5zZSBub3cgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDs7IHZhbCBpcyBjb21waWxlciBvYmplY3QsIG5vdCBtYXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbGxiYWNrLW9yLWNvbXBpbGVyICg6Y2FsbGJhY2sgY2FsbGJhY2stb3ItY29tcGlsZXIpXSlcbiAgICAgICAgIGYgKGZuIFtdXG4gICAgICAgICAgICAgKHAvYXMtZWxlbWVudCBjb21waWxlciAoaWYgKGZuPyBjb21wKSAoY29tcCkgY29tcCkpKV1cbiAgICAgKHJlbmRlci1jb21wIGYgY29udGFpbmVyIGNhbGxiYWNrKSkpKVxuXG4oZGVmbiB1bm1vdW50LWNvbXBvbmVudC1hdC1ub2RlXG4gIFwiUmVtb3ZlIGEgY29tcG9uZW50IGZyb20gdGhlIGdpdmVuIERPTSBub2RlLlwiXG4gIFtjb250YWluZXJdXG4gICh1bm1vdW50LWNvbXAgY29udGFpbmVyKSlcblxuKGRlZm4gZG9tLW5vZGVcbiAgXCJSZXR1cm5zIHRoZSByb290IERPTSBub2RlIG9mIGEgbW91bnRlZCBjb21wb25lbnQuXCJcbiAgW3RoaXNdXG4gIChyZWFjdC1kb20uZmluZERPTU5vZGUgdGhpcykpXG5cbihkZWZuIGZvcmNlLXVwZGF0ZS1hbGxcbiAgXCJGb3JjZSByZS1yZW5kZXJpbmcgb2YgYWxsIG1vdW50ZWQgUmVhZ2VudCBjb21wb25lbnRzLiBUaGlzIGlzXG4gIHByb2JhYmx5IG9ubHkgdXNlZnVsIGluIGEgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQsIHdoZW4geW91IHdhbnQgdG9cbiAgdXBkYXRlIGNvbXBvbmVudHMgaW4gcmVzcG9uc2UgdG8gc29tZSBkeW5hbWljIGNoYW5nZXMgdG8gY29kZS5cblxuICBOb3RlIHRoYXQgZm9yY2UtdXBkYXRlLWFsbCBtYXkgbm90IHVwZGF0ZSByb290IGNvbXBvbmVudHMuIFRoaXNcbiAgaGFwcGVucyBpZiBhIGNvbXBvbmVudCAnZm9vJyBpcyBtb3VudGVkIHdpdGggYChyZW5kZXIgW2Zvb10pYCAoc2luY2VcbiAgZnVuY3Rpb25zIGFyZSBwYXNzZWQgYnkgdmFsdWUsIGFuZCBub3QgYnkgcmVmZXJlbmNlLCBpblxuICBDbG9qdXJlU2NyaXB0KS4gVG8gZ2V0IGFyb3VuZCB0aGlzIHlvdSdsbCBoYXZlIHRvIGludHJvZHVjZSBhIGxheWVyXG4gIG9mIGluZGlyZWN0aW9uLCBmb3IgZXhhbXBsZSBieSB1c2luZyBgKHJlbmRlciBbIydmb29dKWAgaW5zdGVhZC5cIlxuICBbXVxuICAocmF0b20vZmx1c2ghKVxuICAoZG9zZXEgW1tjb250YWluZXIgY29tcF0gQHJvb3RzXVxuICAgIChyZS1yZW5kZXItY29tcG9uZW50IGNvbXAgY29udGFpbmVyKSlcbiAgKGJhdGNoL2ZsdXNoLWFmdGVyLXJlbmRlcikpXG4iXX0=