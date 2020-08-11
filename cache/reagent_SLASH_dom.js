// Compiled by ClojureScript 1.10.597
goog.provide("reagent.dom");
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__24 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__24);

try{return react_dom.render.call(null,comp.call(null),container,(function (){
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
return react_dom.findDOMNode.call(null,this$);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9kb20uanMiLCJzb3VyY2VzIjpbImRvbS5jbGpzIl0sImxpbmVDb3VudCI6MTcwLCJtYXBwaW5ncyI6IjtBQVNBLEdBQUEsUUFBQUEsb0NBQUFDLHdDQUFBQztBQUFBO0FBQUEsQUFBQSxBQUFtQkMsb0JBQU0seUJBQUEsekJBQUNDOztBQUUxQiwyQkFBQSwzQkFBT0MsOERBQWNDO0FBQXJCLEFBQ0UsQUFBQ0MsK0JBQU1KLGtCQUFNSyxpQkFBT0Y7O0FBQ3BCLE9BQUNHLDJDQUFpQ0g7O0FBRXBDLDBCQUFBLDFCQUFPSSw0REFBYUMsS0FBS0wsVUFBVU07QUFBbkMsQUFDRSxJQUFBQyx5Q0FBVUU7SUFBVkQseUNBQUE7QUFBQSxBQUFBLCtDQUFBQSw5Q0FBVUM7O0FBQVYsSUFBQSxBQUNFLE9BQUNDLDJCQUFpQixBQUFDTCxnQkFBTUwsVUFDdkI7QUFBQSxBQUNFLElBQUFXLHlDQUFVRjtJQUFWRyx5Q0FBQTtBQUFBLEFBQUEsK0NBQUFBLDlDQUFVSDs7QUFBVixJQUFBLEFBQ0UsQUFBQ1IsK0JBQU1KLGtCQUFNZ0IsZ0JBQU1iLFVBQVVLOztBQUM3QixBQUFDUzs7QUFDRCxHQUFJLEdBQUEsYUFBQSxaQUFPUjtBQUNULE9BQUNBOztBQURIOztVQUhGLEFBQUEsK0NBQUFLLDlDQUFVRjs7VUFIaEIsQUFBQSwrQ0FBQUYsOUNBQVVFOztBQVNaLGtDQUFBLGxDQUFPTSw0RUFBcUJWLEtBQUtMO0FBQWpDLEFBQ0Usd0RBQUEsakRBQUNJLGtDQUFZQyxLQUFLTDs7QUFFcEIsQUFBQTs7Ozs7Ozs7O3FCQUFBLDZCQUFBZ0IsbERBQU1FO0FBQU4sQUFBQSxJQUFBRCxRQUFBLEFBQUE7QUFBQSxBQUFBLFFBQUFBO0tBQUE7QUFBQSxPQUFBQyxpREFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsaURBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsTUFBQSxLQUFBQyxNQUFBLENBQUEsOERBQUEsQUFBQTs7Ozs7QUFBQSxDQUFBLG1EQUFBLG5EQUFNRCw4REFRRmIsS0FBS0w7QUFSVCxBQVNHLE9BQUNrQiw2QkFBT2IsS0FBS0wsVUFBVW9COzs7QUFUMUIsQ0FBQSxtREFBQSxuREFBTUYsOERBVUZiLEtBQUtMLFVBQVVxQjtBQVZuQixBQVdHLEFBQUNDOztBQUNELElBQUFDLFVBQTBCLHVEQUFBLHVKQUFBLDVNQUFJLEFBQUNHLDhCQUFJTCwwR0FDTkQsdUNBQXNCQyxnSEFHdEJBLHFCQUFxQixBQUFBLDZGQUFXQTtlQUo3RCxBQUFBRyx3QkFBQUQsUUFBQSxJQUFBLC9DQUFPRTtlQUFQLEFBQUFELHdCQUFBRCxRQUFBLElBQUEsL0NBQWdCakI7SUFLVnFCLElBQUU7QUFBQSxBQUNFLE9BQUNDLDRDQUFhSCxTQUFTLEVBQUksQUFBQ0MsOEJBQUlyQixPQUFNLEFBQUNBLGdCQUFNQTs7QUFOdkQsQUFPRSxPQUFDRCxrQ0FBWXVCLEVBQUUzQixVQUFVTTs7O0FBbkI5QixDQUFBLDZDQUFBLDdDQUFNWTs7QUFBTixBQXFCQTs7O3dDQUFBLHhDQUFNVyx3RkFFSDdCO0FBRkgsQUFHRSxPQUFDRCxtQ0FBYUM7O0FBRWhCOzs7dUJBQUEsdkJBQU04QixzREFFSEM7QUFGSCxBQUdFLE9BQUNDLGdDQUFzQkQ7O0FBRXpCOzs7Ozs7Ozs7OzsrQkFBQSwvQkFBTUU7QUFBTixBQVdFLEFBQUNYOztBQUNELElBQUFZLGFBQUEsQUFBQUMsd0JBQUEsQUFBQUMsMEJBQTBCdkM7SUFBMUJ3QyxlQUFBO0lBQUFDLGVBQUE7SUFBQUMsV0FBQTs7QUFBQSxBQUFBLEdBQUEsQUFBQSxDQUFBQSxXQUFBRDtBQUFBLElBQUFFLGFBQUEsQUFBQUMseUJBQUFKLGFBQUFFO21CQUFBLEFBQUFmLHdCQUFBZ0IsV0FBQSxJQUFBLHREQUFTeEM7Y0FBVCxBQUFBd0Isd0JBQUFnQixXQUFBLElBQUEsakRBQW1CbkM7QUFBbkIsQUFBQSxBQUNFLEFBQUNVLDBDQUFvQlYsUUFBS0w7O0FBRDVCO0FBQUEsWUFBQWtDO1lBQUFHO1lBQUFDO1lBQUEsQ0FBQUMsV0FBQTs7Ozs7OztBQUFBLElBQUFHLHdCQUFBLEFBQUFQLHdCQUFBRDtBQUFBLEFBQUEsR0FBQVE7QUFBQSxBQUFBLElBQUFSLGlCQUFBUTtBQUFBLEFBQUEsR0FBQSxBQUFBQyx1Q0FBQVQ7QUFBQSxJQUFBVSxzQkFBQSxBQUFBQyxnQ0FBQVg7QUFBQSxBQUFBLFlBQUEsQUFBQVksK0JBQUFaO1lBQUFVO1lBQUEsQUFBQUcsMEJBQUFIO1lBQUE7Ozs7Ozs7QUFBQSxJQUFBSSxhQUFBLEFBQUFDLDBCQUFBZjttQkFBQSxBQUFBVix3QkFBQXdCLFdBQUEsSUFBQSx0REFBU2hEO2NBQVQsQUFBQXdCLHdCQUFBd0IsV0FBQSxJQUFBLGpEQUFtQjNDO0FBQW5CLEFBQUEsQUFDRSxBQUFDVSwwQ0FBb0JWLFFBQUtMOztBQUQ1QjtBQUFBLFlBQUEsQUFBQWtELHlCQUFBaEI7WUFBQTtZQUFBO1lBQUE7Ozs7Ozs7O0FBQUE7Ozs7O0FBRUEsT0FBQ3BCIiwibmFtZXMiOlsianMvcmVhZ2VudCIsImpzL3JlYWdlbnQuZG9tIiwianMvcmVhZ2VudC5kb20ucm9vdHMiLCJyZWFnZW50LmRvbS9yb290cyIsImNsanMuY29yZS9hdG9tIiwicmVhZ2VudC5kb20vdW5tb3VudC1jb21wIiwiY29udGFpbmVyIiwiY2xqcy5jb3JlL3N3YXAhIiwiY2xqcy5jb3JlL2Rpc3NvYyIsInJlYWN0LWRvbS91bm1vdW50Q29tcG9uZW50QXROb2RlIiwicmVhZ2VudC5kb20vcmVuZGVyLWNvbXAiLCJjb21wIiwiY2FsbGJhY2siLCIqYWx3YXlzLXVwZGF0ZSotb3JpZy12YWxfXzIzIiwiKmFsd2F5cy11cGRhdGUqLXRlbXAtdmFsX18yNCIsInJlYWdlbnQuaW1wbC51dGlsLyphbHdheXMtdXBkYXRlKiIsInJlYWN0LWRvbS9yZW5kZXIiLCIqYWx3YXlzLXVwZGF0ZSotb3JpZy12YWxfXzI1IiwiKmFsd2F5cy11cGRhdGUqLXRlbXAtdmFsX18yNiIsImNsanMuY29yZS9hc3NvYyIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9mbHVzaC1hZnRlci1yZW5kZXIiLCJyZWFnZW50LmRvbS9yZS1yZW5kZXItY29tcG9uZW50IiwidmFyX2FyZ3MiLCJHX18yOCIsInJlYWdlbnQuZG9tL3JlbmRlciIsImpzL0Vycm9yIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2RlZmF1bHQtY29tcGlsZXIiLCJjYWxsYmFjay1vci1jb21waWxlciIsInJlYWdlbnQucmF0b20vZmx1c2ghIiwidmVjX18yOSIsImNsanMuY29yZS9udGgiLCJjb21waWxlciIsImNsanMuY29yZS9mbj8iLCJmIiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9hcy1lbGVtZW50IiwicmVhZ2VudC5kb20vdW5tb3VudC1jb21wb25lbnQtYXQtbm9kZSIsInJlYWdlbnQuZG9tL2RvbS1ub2RlIiwidGhpcyIsInJlYWN0LWRvbS9maW5kRE9NTm9kZSIsInJlYWdlbnQuZG9tL2ZvcmNlLXVwZGF0ZS1hbGwiLCJzZXFfXzMzIiwiY2xqcy5jb3JlL3NlcSIsImNsanMuY29yZS9kZXJlZiIsImNodW5rX18zNCIsImNvdW50X18zNSIsImlfXzM2IiwidmVjX180MyIsImNsanMuY29yZS8tbnRoIiwidGVtcF9fOTUyMl9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rZWQtc2VxPyIsImNfXzEyMTIyX19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiLCJjbGpzLmNvcmUvY2h1bmstcmVzdCIsImNsanMuY29yZS9jb3VudCIsInZlY19fNDYiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5kb21cbiAgKDpyZXF1aXJlIFtyZWFjdC1kb20gOmFzIHJlYWN0LWRvbV1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwudXRpbCA6YXMgdXRpbF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwudGVtcGxhdGUgOmFzIHRtcGxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmlucHV0IDphcyBpbnB1dF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwuYmF0Y2hpbmcgOmFzIGJhdGNoXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5wcm90b2NvbHMgOmFzIHBdXG4gICAgICAgICAgICBbcmVhZ2VudC5yYXRvbSA6YXMgcmF0b21dKSlcblxuKGRlZm9uY2UgXjpwcml2YXRlIHJvb3RzIChhdG9tIHt9KSlcblxuKGRlZm4tIHVubW91bnQtY29tcCBbY29udGFpbmVyXVxuICAoc3dhcCEgcm9vdHMgZGlzc29jIGNvbnRhaW5lcilcbiAgKHJlYWN0LWRvbS91bm1vdW50Q29tcG9uZW50QXROb2RlIGNvbnRhaW5lcikpXG5cbihkZWZuLSByZW5kZXItY29tcCBbY29tcCBjb250YWluZXIgY2FsbGJhY2tdXG4gIChiaW5kaW5nIFt1dGlsLyphbHdheXMtdXBkYXRlKiB0cnVlXVxuICAgIChyZWFjdC1kb20vcmVuZGVyIChjb21wKSBjb250YWluZXJcbiAgICAgIChmbiBbXVxuICAgICAgICAoYmluZGluZyBbdXRpbC8qYWx3YXlzLXVwZGF0ZSogZmFsc2VdXG4gICAgICAgICAgKHN3YXAhIHJvb3RzIGFzc29jIGNvbnRhaW5lciBjb21wKVxuICAgICAgICAgIChiYXRjaC9mbHVzaC1hZnRlci1yZW5kZXIpXG4gICAgICAgICAgKGlmIChzb21lPyBjYWxsYmFjaylcbiAgICAgICAgICAgIChjYWxsYmFjaykpKSkpKSlcblxuKGRlZm4tIHJlLXJlbmRlci1jb21wb25lbnQgW2NvbXAgY29udGFpbmVyXVxuICAocmVuZGVyLWNvbXAgY29tcCBjb250YWluZXIgbmlsKSlcblxuKGRlZm4gcmVuZGVyXG4gIFwiUmVuZGVyIGEgUmVhZ2VudCBjb21wb25lbnQgaW50byB0aGUgRE9NLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlXG4gIGVpdGhlciBhIHZlY3RvciAodXNpbmcgUmVhZ2VudCdzIEhpY2N1cCBzeW50YXgpLCBvciBhIFJlYWN0IGVsZW1lbnQuXG4gIFRoZSBzZWNvbmQgYXJndW1lbnQgc2hvdWxkIGJlIGEgRE9NIG5vZGUuXG5cbiAgT3B0aW9uYWxseSB0YWtlcyBhIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBpbiBwbGFjZS5cblxuICBSZXR1cm5zIHRoZSBtb3VudGVkIGNvbXBvbmVudCBpbnN0YW5jZS5cIlxuICAoW2NvbXAgY29udGFpbmVyXVxuICAgKHJlbmRlciBjb21wIGNvbnRhaW5lciB0bXBsL2RlZmF1bHQtY29tcGlsZXIpKVxuICAoW2NvbXAgY29udGFpbmVyIGNhbGxiYWNrLW9yLWNvbXBpbGVyXVxuICAgKHJhdG9tL2ZsdXNoISlcbiAgIChsZXQgW1tjb21waWxlciBjYWxsYmFja10gKGlmIChmbj8gY2FsbGJhY2stb3ItY29tcGlsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RtcGwvZGVmYXVsdC1jb21waWxlciBjYWxsYmFjay1vci1jb21waWxlcl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7OyBUT0RPOiBDYWxsYmFjayBvcHRpb24gZG9lc24ndCBtYWtlIHNlbnNlIG5vdyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOzsgdmFsIGlzIGNvbXBpbGVyIG9iamVjdCwgbm90IG1hcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FsbGJhY2stb3ItY29tcGlsZXIgKDpjYWxsYmFjayBjYWxsYmFjay1vci1jb21waWxlcildKVxuICAgICAgICAgZiAoZm4gW11cbiAgICAgICAgICAgICAocC9hcy1lbGVtZW50IGNvbXBpbGVyIChpZiAoZm4/IGNvbXApIChjb21wKSBjb21wKSkpXVxuICAgICAocmVuZGVyLWNvbXAgZiBjb250YWluZXIgY2FsbGJhY2spKSkpXG5cbihkZWZuIHVubW91bnQtY29tcG9uZW50LWF0LW5vZGVcbiAgXCJSZW1vdmUgYSBjb21wb25lbnQgZnJvbSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXCJcbiAgW2NvbnRhaW5lcl1cbiAgKHVubW91bnQtY29tcCBjb250YWluZXIpKVxuXG4oZGVmbiBkb20tbm9kZVxuICBcIlJldHVybnMgdGhlIHJvb3QgRE9NIG5vZGUgb2YgYSBtb3VudGVkIGNvbXBvbmVudC5cIlxuICBbdGhpc11cbiAgKHJlYWN0LWRvbS9maW5kRE9NTm9kZSB0aGlzKSlcblxuKGRlZm4gZm9yY2UtdXBkYXRlLWFsbFxuICBcIkZvcmNlIHJlLXJlbmRlcmluZyBvZiBhbGwgbW91bnRlZCBSZWFnZW50IGNvbXBvbmVudHMuIFRoaXMgaXNcbiAgcHJvYmFibHkgb25seSB1c2VmdWwgaW4gYSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCwgd2hlbiB5b3Ugd2FudCB0b1xuICB1cGRhdGUgY29tcG9uZW50cyBpbiByZXNwb25zZSB0byBzb21lIGR5bmFtaWMgY2hhbmdlcyB0byBjb2RlLlxuXG4gIE5vdGUgdGhhdCBmb3JjZS11cGRhdGUtYWxsIG1heSBub3QgdXBkYXRlIHJvb3QgY29tcG9uZW50cy4gVGhpc1xuICBoYXBwZW5zIGlmIGEgY29tcG9uZW50ICdmb28nIGlzIG1vdW50ZWQgd2l0aCBgKHJlbmRlciBbZm9vXSlgIChzaW5jZVxuICBmdW5jdGlvbnMgYXJlIHBhc3NlZCBieSB2YWx1ZSwgYW5kIG5vdCBieSByZWZlcmVuY2UsIGluXG4gIENsb2p1cmVTY3JpcHQpLiBUbyBnZXQgYXJvdW5kIHRoaXMgeW91J2xsIGhhdmUgdG8gaW50cm9kdWNlIGEgbGF5ZXJcbiAgb2YgaW5kaXJlY3Rpb24sIGZvciBleGFtcGxlIGJ5IHVzaW5nIGAocmVuZGVyIFsjJ2Zvb10pYCBpbnN0ZWFkLlwiXG4gIFtdXG4gIChyYXRvbS9mbHVzaCEpXG4gIChkb3NlcSBbW2NvbnRhaW5lciBjb21wXSBAcm9vdHNdXG4gICAgKHJlLXJlbmRlci1jb21wb25lbnQgY29tcCBjb250YWluZXIpKVxuICAoYmF0Y2gvZmx1c2gtYWZ0ZXItcmVuZGVyKSlcbiJdfQ==