// Compiled by ClojureScript 1.10.597
goog.provide("reagent.dom");
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return cljsjs.react.dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24);

try{return cljsjs.react.dom.render(comp.call(null),container,(function (){
var _STAR_always_update_STAR__orig_val__25 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__26 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__26);

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render.call(null);

if((!((callback == null)))){
return callback.call(null);
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__25);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23);
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
var G__28 = arguments.length;
switch (G__28) {
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

var vec__29 = ((cljs.core.fn_QMARK_.call(null,callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",(-705136228)).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.call(null,vec__29,(0),null);
var callback = cljs.core.nth.call(null,vec__29,(1),null);
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
return cljsjs.react.dom.findDOMNode(this$);
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

var seq__33_49 = cljs.core.seq.call(null,cljs.core.deref.call(null,reagent.dom.roots));
var chunk__34_50 = null;
var count__35_51 = (0);
var i__36_52 = (0);
while(true){
if((i__36_52 < count__35_51)){
var vec__43_53 = cljs.core._nth.call(null,chunk__34_50,i__36_52);
var container_54 = cljs.core.nth.call(null,vec__43_53,(0),null);
var comp_55 = cljs.core.nth.call(null,vec__43_53,(1),null);
reagent.dom.re_render_component.call(null,comp_55,container_54);


var G__56 = seq__33_49;
var G__57 = chunk__34_50;
var G__58 = count__35_51;
var G__59 = (i__36_52 + (1));
seq__33_49 = G__56;
chunk__34_50 = G__57;
count__35_51 = G__58;
i__36_52 = G__59;
continue;
} else {
var temp__9522__auto___60 = cljs.core.seq.call(null,seq__33_49);
if(temp__9522__auto___60){
var seq__33_61__$1 = temp__9522__auto___60;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33_61__$1)){
var c__12122__auto___62 = cljs.core.chunk_first.call(null,seq__33_61__$1);
var G__63 = cljs.core.chunk_rest.call(null,seq__33_61__$1);
var G__64 = c__12122__auto___62;
var G__65 = cljs.core.count.call(null,c__12122__auto___62);
var G__66 = (0);
seq__33_49 = G__63;
chunk__34_50 = G__64;
count__35_51 = G__65;
i__36_52 = G__66;
continue;
} else {
var vec__46_67 = cljs.core.first.call(null,seq__33_61__$1);
var container_68 = cljs.core.nth.call(null,vec__46_67,(0),null);
var comp_69 = cljs.core.nth.call(null,vec__46_67,(1),null);
reagent.dom.re_render_component.call(null,comp_69,container_68);


var G__70 = cljs.core.next.call(null,seq__33_61__$1);
var G__71 = null;
var G__72 = (0);
var G__73 = (0);
seq__33_49 = G__70;
chunk__34_50 = G__71;
count__35_51 = G__72;
i__36_52 = G__73;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9kb20uanMiLCJzb3VyY2VzIjpbImRvbS5jbGpzIl0sImxpbmVDb3VudCI6MTcwLCJtYXBwaW5ncyI6IjtBQVNBLEdBQUEsUUFBQUEsb0NBQUFDLHdDQUFBQztBQUFBO0FBQUEsQUFBQSxBQUFtQkMsb0JBQU0seUJBQUEsekJBQUNDOztBQUUxQiwyQkFBQSwzQkFBT0MsOERBQWNDO0FBQXJCLEFBQ0UsQUFBQ0MsK0JBQU1KLGtCQUFNSyxpQkFBT0Y7O0FBQ3BCLE9BQUNHLHdDQUFpQ0g7O0FBRXBDLDBCQUFBLDFCQUFPSSw0REFBYUMsS0FBS0wsVUFBVU07QUFBbkMsQUFDRSxJQUFBQyx5Q0FBVUU7SUFBVkQseUNBQUE7QUFBQSxBQUFBLCtDQUFBQSw5Q0FBVUM7O0FBQVYsSUFBQSxBQUNFLE9BQUNDLHdCQUFpQixBQUFDTCxnQkFBTUwsVUFDdkI7QUFBQSxBQUNFLElBQUFXLHlDQUFVRjtJQUFWRyx5Q0FBQTtBQUFBLEFBQUEsK0NBQUFBLDlDQUFVSDs7QUFBVixJQUFBLEFBQ0UsQUFBQ1IsK0JBQU1KLGtCQUFNZ0IsZ0JBQU1iLFVBQVVLOztBQUM3QixBQUFDUzs7QUFDRCxHQUFJLEdBQUEsYUFBQSxaQUFPUjtBQUNULE9BQUNBOztBQURIOztVQUhGLEFBQUEsK0NBQUFLLDlDQUFVRjs7VUFIaEIsQUFBQSwrQ0FBQUYsOUNBQVVFOztBQVNaLGtDQUFBLGxDQUFPTSw0RUFBcUJWLEtBQUtMO0FBQWpDLEFBQ0Usd0RBQUEsakRBQUNJLGtDQUFZQyxLQUFLTDs7QUFFcEIsQUFBQTs7Ozs7Ozs7O3FCQUFBLDZCQUFBZ0IsbERBQU1FO0FBQU4sQUFBQSxJQUFBRCxRQUFBLEFBQUE7QUFBQSxBQUFBLFFBQUFBO0tBQUE7QUFBQSxPQUFBQyxpREFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsaURBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsTUFBQSxLQUFBQyxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxDQUFBLG1EQUFBLG5EQUFNRCw4REFRRmIsS0FBS0w7QUFSVCxBQVNHLE9BQUNrQiw2QkFBT2IsS0FBS0wsVUFBVW9COzs7QUFUMUIsQ0FBQSxtREFBQSxuREFBTUYsOERBVUZiLEtBQUtMLFVBQVVxQjtBQVZuQixBQVdHLEFBQUNDOztBQUNELElBQUFDLFVBQTBCLHVEQUFBLHVKQUFBLDVNQUFJLEFBQUNHLDhCQUFJTCwwR0FDTkQsdUNBQXNCQyxnSEFHdEJBLHFCQUFxQixBQUFBLDZGQUFXQTtlQUo3RCxBQUFBRyx3QkFBQUQsUUFBQSxJQUFBLC9DQUFPRTtlQUFQLEFBQUFELHdCQUFBRCxRQUFBLElBQUEsL0NBQWdCakI7SUFLVnFCLElBQUU7QUFBQSxBQUNFLE9BQUNDLDRDQUFhSCxTQUFTLEVBQUksQUFBQ0MsOEJBQUlyQixPQUFNLEFBQUNBLGdCQUFNQTs7QUFOdkQsQUFPRSxPQUFDRCxrQ0FBWXVCLEVBQUUzQixVQUFVTTs7O0FBbkI5QixDQUFBLDZDQUFBLDdDQUFNWTs7QUFBTixBQXFCQTs7O3dDQUFBLHhDQUFNVyx3RkFFSDdCO0FBRkgsQUFHRSxPQUFDRCxtQ0FBYUM7O0FBRWhCOzs7dUJBQUEsdkJBQU04QixzREFFSEM7QUFGSCxBQUdFLE9BQUNDLDZCQUFzQkQ7O0FBRXpCOzs7Ozs7Ozs7OzsrQkFBQSwvQkFBTUU7QUFBTixBQVdFLEFBQUNYOztBQUNELElBQUFZLGFBQUEsQUFBQUMsd0JBQUEsQUFBQUMsMEJBQTBCdkM7SUFBMUJ3QyxlQUFBO0lBQUFDLGVBQUE7SUFBQUMsV0FBQTs7QUFBQSxBQUFBLEdBQUEsQUFBQSxDQUFBQSxXQUFBRDtBQUFBLElBQUFFLGFBQUEsQUFBQUMseUJBQUFKLGFBQUFFO21CQUFBLEFBQUFmLHdCQUFBZ0IsV0FBQSxJQUFBLHREQUFTeEM7Y0FBVCxBQUFBd0Isd0JBQUFnQixXQUFBLElBQUEsakRBQW1CbkM7QUFBbkIsQUFBQSxBQUNFLEFBQUNVLDBDQUFvQlYsUUFBS0w7O0FBRDVCO0FBQUEsWUFBQWtDO1lBQUFHO1lBQUFDO1lBQUEsQ0FBQUMsV0FBQTs7Ozs7OztBQUFBLElBQUFHLHdCQUFBLEFBQUFQLHdCQUFBRDtBQUFBLEFBQUEsR0FBQVE7QUFBQSxBQUFBLElBQUFSLGlCQUFBUTtBQUFBLEFBQUEsR0FBQSxBQUFBQyx1Q0FBQVQ7QUFBQSxJQUFBVSxzQkFBQSxBQUFBQyxnQ0FBQVg7QUFBQSxBQUFBLFlBQUEsQUFBQVksK0JBQUFaO1lBQUFVO1lBQUEsQUFBQUcsMEJBQUFIO1lBQUE7Ozs7Ozs7QUFBQSxJQUFBSSxhQUFBLEFBQUFDLDBCQUFBZjttQkFBQSxBQUFBVix3QkFBQXdCLFdBQUEsSUFBQSx0REFBU2hEO2NBQVQsQUFBQXdCLHdCQUFBd0IsV0FBQSxJQUFBLGpEQUFtQjNDO0FBQW5CLEFBQUEsQUFDRSxBQUFDVSwwQ0FBb0JWLFFBQUtMOztBQUQ1QjtBQUFBLFlBQUEsQUFBQWtELHlCQUFBaEI7WUFBQTtZQUFBO1lBQUE7Ozs7Ozs7O0FBQUE7Ozs7O0FBRUEsT0FBQ3BCIiwibmFtZXMiOlsianMvcmVhZ2VudCIsImpzL3JlYWdlbnQuZG9tIiwianMvcmVhZ2VudC5kb20ucm9vdHMiLCJyZWFnZW50LmRvbS9yb290cyIsImNsanMuY29yZS9hdG9tIiwicmVhZ2VudC5kb20vdW5tb3VudC1jb21wIiwiY29udGFpbmVyIiwiY2xqcy5jb3JlL3N3YXAhIiwiY2xqcy5jb3JlL2Rpc3NvYyIsImNsanNqcy5yZWFjdC5kb20vdW5tb3VudENvbXBvbmVudEF0Tm9kZSIsInJlYWdlbnQuZG9tL3JlbmRlci1jb21wIiwiY29tcCIsImNhbGxiYWNrIiwiKmFsd2F5cy11cGRhdGUqLW9yaWctdmFsX18yMyIsIiphbHdheXMtdXBkYXRlKi10ZW1wLXZhbF9fMjQiLCJyZWFnZW50LmltcGwudXRpbC8qYWx3YXlzLXVwZGF0ZSoiLCJjbGpzanMucmVhY3QuZG9tL3JlbmRlciIsIiphbHdheXMtdXBkYXRlKi1vcmlnLXZhbF9fMjUiLCIqYWx3YXlzLXVwZGF0ZSotdGVtcC12YWxfXzI2IiwiY2xqcy5jb3JlL2Fzc29jIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2ZsdXNoLWFmdGVyLXJlbmRlciIsInJlYWdlbnQuZG9tL3JlLXJlbmRlci1jb21wb25lbnQiLCJ2YXJfYXJncyIsIkdfXzI4IiwicmVhZ2VudC5kb20vcmVuZGVyIiwianMvRXJyb3IiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvZGVmYXVsdC1jb21waWxlciIsImNhbGxiYWNrLW9yLWNvbXBpbGVyIiwicmVhZ2VudC5yYXRvbS9mbHVzaCEiLCJ2ZWNfXzI5IiwiY2xqcy5jb3JlL250aCIsImNvbXBpbGVyIiwiY2xqcy5jb3JlL2ZuPyIsImYiLCJyZWFnZW50LmltcGwucHJvdG9jb2xzL2FzLWVsZW1lbnQiLCJyZWFnZW50LmRvbS91bm1vdW50LWNvbXBvbmVudC1hdC1ub2RlIiwicmVhZ2VudC5kb20vZG9tLW5vZGUiLCJ0aGlzIiwiY2xqc2pzLnJlYWN0LmRvbS9maW5kRE9NTm9kZSIsInJlYWdlbnQuZG9tL2ZvcmNlLXVwZGF0ZS1hbGwiLCJzZXFfXzMzIiwiY2xqcy5jb3JlL3NlcSIsImNsanMuY29yZS9kZXJlZiIsImNodW5rX18zNCIsImNvdW50X18zNSIsImlfXzM2IiwidmVjX180MyIsImNsanMuY29yZS8tbnRoIiwidGVtcF9fOTUyMl9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rZWQtc2VxPyIsImNfXzEyMTIyX19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiLCJjbGpzLmNvcmUvY2h1bmstcmVzdCIsImNsanMuY29yZS9jb3VudCIsInZlY19fNDYiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5kb21cbiAgKDpyZXF1aXJlIFtjbGpzanMucmVhY3QuZG9tIDphcyByZWFjdC1kb21dXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnV0aWwgOmFzIHV0aWxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnRlbXBsYXRlIDphcyB0bXBsXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5pbnB1dCA6YXMgaW5wdXRdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmJhdGNoaW5nIDphcyBiYXRjaF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwucHJvdG9jb2xzIDphcyBwXVxuICAgICAgICAgICAgW3JlYWdlbnQucmF0b20gOmFzIHJhdG9tXSkpXG5cbihkZWZvbmNlIF46cHJpdmF0ZSByb290cyAoYXRvbSB7fSkpXG5cbihkZWZuLSB1bm1vdW50LWNvbXAgW2NvbnRhaW5lcl1cbiAgKHN3YXAhIHJvb3RzIGRpc3NvYyBjb250YWluZXIpXG4gIChyZWFjdC1kb20vdW5tb3VudENvbXBvbmVudEF0Tm9kZSBjb250YWluZXIpKVxuXG4oZGVmbi0gcmVuZGVyLWNvbXAgW2NvbXAgY29udGFpbmVyIGNhbGxiYWNrXVxuICAoYmluZGluZyBbdXRpbC8qYWx3YXlzLXVwZGF0ZSogdHJ1ZV1cbiAgICAocmVhY3QtZG9tL3JlbmRlciAoY29tcCkgY29udGFpbmVyXG4gICAgICAoZm4gW11cbiAgICAgICAgKGJpbmRpbmcgW3V0aWwvKmFsd2F5cy11cGRhdGUqIGZhbHNlXVxuICAgICAgICAgIChzd2FwISByb290cyBhc3NvYyBjb250YWluZXIgY29tcClcbiAgICAgICAgICAoYmF0Y2gvZmx1c2gtYWZ0ZXItcmVuZGVyKVxuICAgICAgICAgIChpZiAoc29tZT8gY2FsbGJhY2spXG4gICAgICAgICAgICAoY2FsbGJhY2spKSkpKSkpXG5cbihkZWZuLSByZS1yZW5kZXItY29tcG9uZW50IFtjb21wIGNvbnRhaW5lcl1cbiAgKHJlbmRlci1jb21wIGNvbXAgY29udGFpbmVyIG5pbCkpXG5cbihkZWZuIHJlbmRlclxuICBcIlJlbmRlciBhIFJlYWdlbnQgY29tcG9uZW50IGludG8gdGhlIERPTS4gVGhlIGZpcnN0IGFyZ3VtZW50IG1heSBiZVxuICBlaXRoZXIgYSB2ZWN0b3IgKHVzaW5nIFJlYWdlbnQncyBIaWNjdXAgc3ludGF4KSwgb3IgYSBSZWFjdCBlbGVtZW50LlxuICBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBiZSBhIERPTSBub2RlLlxuXG4gIE9wdGlvbmFsbHkgdGFrZXMgYSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBjb21wb25lbnQgaXMgaW4gcGxhY2UuXG5cbiAgUmV0dXJucyB0aGUgbW91bnRlZCBjb21wb25lbnQgaW5zdGFuY2UuXCJcbiAgKFtjb21wIGNvbnRhaW5lcl1cbiAgIChyZW5kZXIgY29tcCBjb250YWluZXIgdG1wbC9kZWZhdWx0LWNvbXBpbGVyKSlcbiAgKFtjb21wIGNvbnRhaW5lciBjYWxsYmFjay1vci1jb21waWxlcl1cbiAgIChyYXRvbS9mbHVzaCEpXG4gICAobGV0IFtbY29tcGlsZXIgY2FsbGJhY2tdIChpZiAoZm4/IGNhbGxiYWNrLW9yLWNvbXBpbGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0bXBsL2RlZmF1bHQtY29tcGlsZXIgY2FsbGJhY2stb3ItY29tcGlsZXJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOzsgVE9ETzogQ2FsbGJhY2sgb3B0aW9uIGRvZXNuJ3QgbWFrZSBzZW5zZSBub3cgdGhhdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDs7IHZhbCBpcyBjb21waWxlciBvYmplY3QsIG5vdCBtYXAuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NhbGxiYWNrLW9yLWNvbXBpbGVyICg6Y2FsbGJhY2sgY2FsbGJhY2stb3ItY29tcGlsZXIpXSlcbiAgICAgICAgIGYgKGZuIFtdXG4gICAgICAgICAgICAgKHAvYXMtZWxlbWVudCBjb21waWxlciAoaWYgKGZuPyBjb21wKSAoY29tcCkgY29tcCkpKV1cbiAgICAgKHJlbmRlci1jb21wIGYgY29udGFpbmVyIGNhbGxiYWNrKSkpKVxuXG4oZGVmbiB1bm1vdW50LWNvbXBvbmVudC1hdC1ub2RlXG4gIFwiUmVtb3ZlIGEgY29tcG9uZW50IGZyb20gdGhlIGdpdmVuIERPTSBub2RlLlwiXG4gIFtjb250YWluZXJdXG4gICh1bm1vdW50LWNvbXAgY29udGFpbmVyKSlcblxuKGRlZm4gZG9tLW5vZGVcbiAgXCJSZXR1cm5zIHRoZSByb290IERPTSBub2RlIG9mIGEgbW91bnRlZCBjb21wb25lbnQuXCJcbiAgW3RoaXNdXG4gIChyZWFjdC1kb20vZmluZERPTU5vZGUgdGhpcykpXG5cbihkZWZuIGZvcmNlLXVwZGF0ZS1hbGxcbiAgXCJGb3JjZSByZS1yZW5kZXJpbmcgb2YgYWxsIG1vdW50ZWQgUmVhZ2VudCBjb21wb25lbnRzLiBUaGlzIGlzXG4gIHByb2JhYmx5IG9ubHkgdXNlZnVsIGluIGEgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnQsIHdoZW4geW91IHdhbnQgdG9cbiAgdXBkYXRlIGNvbXBvbmVudHMgaW4gcmVzcG9uc2UgdG8gc29tZSBkeW5hbWljIGNoYW5nZXMgdG8gY29kZS5cblxuICBOb3RlIHRoYXQgZm9yY2UtdXBkYXRlLWFsbCBtYXkgbm90IHVwZGF0ZSByb290IGNvbXBvbmVudHMuIFRoaXNcbiAgaGFwcGVucyBpZiBhIGNvbXBvbmVudCAnZm9vJyBpcyBtb3VudGVkIHdpdGggYChyZW5kZXIgW2Zvb10pYCAoc2luY2VcbiAgZnVuY3Rpb25zIGFyZSBwYXNzZWQgYnkgdmFsdWUsIGFuZCBub3QgYnkgcmVmZXJlbmNlLCBpblxuICBDbG9qdXJlU2NyaXB0KS4gVG8gZ2V0IGFyb3VuZCB0aGlzIHlvdSdsbCBoYXZlIHRvIGludHJvZHVjZSBhIGxheWVyXG4gIG9mIGluZGlyZWN0aW9uLCBmb3IgZXhhbXBsZSBieSB1c2luZyBgKHJlbmRlciBbIydmb29dKWAgaW5zdGVhZC5cIlxuICBbXVxuICAocmF0b20vZmx1c2ghKVxuICAoZG9zZXEgW1tjb250YWluZXIgY29tcF0gQHJvb3RzXVxuICAgIChyZS1yZW5kZXItY29tcG9uZW50IGNvbXAgY29udGFpbmVyKSlcbiAgKGJhdGNoL2ZsdXNoLWFmdGVyLXJlbmRlcikpXG4iXX0=