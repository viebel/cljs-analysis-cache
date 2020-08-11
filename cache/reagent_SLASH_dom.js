// Compiled by ClojureScript 1.10.597
goog.provide("reagent.dom");
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__482 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__483 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__483);

try{return reagent.dom.global$module$react_dom.render(comp.call(null),container,(function (){
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
return reagent.dom.global$module$react_dom.findDOMNode(this$);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9kb20uanMiLCJzb3VyY2VzIjpbImRvbS5jbGpzIl0sImxpbmVDb3VudCI6MTcxLCJtYXBwaW5ncyI6Ijs7QUFTQSxHQUFBLFFBQUFBLG9DQUFBQyx3Q0FBQUM7QUFBQTtBQUFBLEFBQUEsQUFBbUJDLG9CQUFNLHlCQUFBLHpCQUFDQzs7QUFFMUIsMkJBQUEsM0JBQU9DLDhEQUFjQztBQUFyQixBQUNFLEFBQUNDLCtCQUFNSixrQkFBTUssaUJBQU9GOztBQUNwQixPQUFDRywyREFBaUNIOztBQUVwQywwQkFBQSwxQkFBT0ksNERBQWFDLEtBQUtMLFVBQVVNO0FBQW5DLEFBQ0UsSUFBQUMsMENBQVVFO0lBQVZELDBDQUFBO0FBQUEsQUFBQSwrQ0FBQUEsOUNBQVVDOztBQUFWLElBQUEsQUFDRSxPQUFDQywyQ0FBaUIsQUFBQ0wsZ0JBQU1MLFVBQ3ZCO0FBQUEsQUFDRSxJQUFBVywwQ0FBVUY7SUFBVkcsMENBQUE7QUFBQSxBQUFBLCtDQUFBQSw5Q0FBVUg7O0FBQVYsSUFBQSxBQUNFLEFBQUNSLCtCQUFNSixrQkFBTWdCLGdCQUFNYixVQUFVSzs7QUFDN0IsQUFBQ1M7O0FBQ0QsR0FBSSxHQUFBLGFBQUEsWkFBT1I7QUFDVCxPQUFDQTs7QUFESDs7VUFIRixBQUFBLCtDQUFBSyw5Q0FBVUY7O1VBSGhCLEFBQUEsK0NBQUFGLDlDQUFVRTs7QUFTWixrQ0FBQSxsQ0FBT00sNEVBQXFCVixLQUFLTDtBQUFqQyxBQUNFLHdEQUFBLGpEQUFDSSxrQ0FBWUMsS0FBS0w7O0FBRXBCLEFBQUE7Ozs7Ozs7OztxQkFBQSw2QkFBQWdCLGxEQUFNRTtBQUFOLEFBQUEsSUFBQUQsU0FBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUMsaURBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7S0FBQTtBQUFBLE9BQUFBLGlEQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7OztBQUFBLE1BQUEsS0FBQUMsTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQ0FBQSxtREFBQSxuREFBTUQsOERBUUZiLEtBQUtMO0FBUlQsQUFTRyxPQUFDa0IsNkJBQU9iLEtBQUtMLFVBQVVvQjs7O0FBVDFCLENBQUEsbURBQUEsbkRBQU1GLDhEQVVGYixLQUFLTCxVQUFVcUI7QUFWbkIsQUFXRyxBQUFDQzs7QUFDRCxJQUFBQyxXQUEwQix1REFBQSx1SkFBQSw1TUFBSSxBQUFDRyw4QkFBSUwsMEdBQ05ELHVDQUFzQkMsZ0hBR3RCQSxxQkFBcUIsQUFBQSw2RkFBV0E7ZUFKN0QsQUFBQUcsd0JBQUFELFNBQUEsSUFBQSxoREFBT0U7ZUFBUCxBQUFBRCx3QkFBQUQsU0FBQSxJQUFBLGhEQUFnQmpCO0lBS1ZxQixJQUFFO0FBQUEsQUFDRSxPQUFDQyw0Q0FBYUgsU0FBUyxFQUFJLEFBQUNDLDhCQUFJckIsT0FBTSxBQUFDQSxnQkFBTUE7O0FBTnZELEFBT0UsT0FBQ0Qsa0NBQVl1QixFQUFFM0IsVUFBVU07OztBQW5COUIsQ0FBQSw2Q0FBQSw3Q0FBTVk7O0FBQU4sQUFxQkE7Ozt3Q0FBQSx4Q0FBTVcsd0ZBRUg3QjtBQUZILEFBR0UsT0FBQ0QsbUNBQWFDOztBQUVoQjs7O3VCQUFBLHZCQUFNOEIsc0RBRUhDO0FBRkgsQUFHRSxPQUFDQyxnREFBc0JEOztBQUV6Qjs7Ozs7Ozs7Ozs7K0JBQUEsL0JBQU1FO0FBQU4sQUFXRSxBQUFDWDs7QUFDRCxJQUFBWSxlQUFBLEFBQUFDLHdCQUFBLEFBQUFDLDBCQUEwQnZDO0lBQTFCd0MsaUJBQUE7SUFBQUMsaUJBQUE7SUFBQUMsYUFBQTs7QUFBQSxBQUFBLEdBQUEsQUFBQSxDQUFBQSxhQUFBRDtBQUFBLElBQUFFLGVBQUEsQUFBQUMseUJBQUFKLGVBQUFFO29CQUFBLEFBQUFmLHdCQUFBZ0IsYUFBQSxJQUFBLHpEQUFTeEM7ZUFBVCxBQUFBd0Isd0JBQUFnQixhQUFBLElBQUEscERBQW1CbkM7QUFBbkIsQUFBQSxBQUNFLEFBQUNVLDBDQUFvQlYsU0FBS0w7O0FBRDVCO0FBQUEsYUFBQWtDO2FBQUFHO2FBQUFDO2FBQUEsQ0FBQUMsYUFBQTs7Ozs7OztBQUFBLElBQUFHLHlCQUFBLEFBQUFQLHdCQUFBRDtBQUFBLEFBQUEsR0FBQVE7QUFBQSxBQUFBLElBQUFSLG1CQUFBUTtBQUFBLEFBQUEsR0FBQSxBQUFBQyx1Q0FBQVQ7QUFBQSxJQUFBVSx1QkFBQSxBQUFBQyxnQ0FBQVg7QUFBQSxBQUFBLGFBQUEsQUFBQVksK0JBQUFaO2FBQUFVO2FBQUEsQUFBQUcsMEJBQUFIO2FBQUE7Ozs7Ozs7QUFBQSxJQUFBSSxlQUFBLEFBQUFDLDBCQUFBZjtvQkFBQSxBQUFBVix3QkFBQXdCLGFBQUEsSUFBQSx6REFBU2hEO2VBQVQsQUFBQXdCLHdCQUFBd0IsYUFBQSxJQUFBLHBEQUFtQjNDO0FBQW5CLEFBQUEsQUFDRSxBQUFDVSwwQ0FBb0JWLFNBQUtMOztBQUQ1QjtBQUFBLGFBQUEsQUFBQWtELHlCQUFBaEI7YUFBQTthQUFBO2FBQUE7Ozs7Ozs7O0FBQUE7Ozs7O0FBRUEsT0FBQ3BCIiwibmFtZXMiOlsianMvcmVhZ2VudCIsImpzL3JlYWdlbnQuZG9tIiwianMvcmVhZ2VudC5kb20ucm9vdHMiLCJyZWFnZW50LmRvbS9yb290cyIsImNsanMuY29yZS9hdG9tIiwicmVhZ2VudC5kb20vdW5tb3VudC1jb21wIiwiY29udGFpbmVyIiwiY2xqcy5jb3JlL3N3YXAhIiwiY2xqcy5jb3JlL2Rpc3NvYyIsInJlYWdlbnQuZG9tL2dsb2JhbCRtb2R1bGUkcmVhY3RfZG9tLnVubW91bnRDb21wb25lbnRBdE5vZGUiLCJyZWFnZW50LmRvbS9yZW5kZXItY29tcCIsImNvbXAiLCJjYWxsYmFjayIsIiphbHdheXMtdXBkYXRlKi1vcmlnLXZhbF9fNDgyIiwiKmFsd2F5cy11cGRhdGUqLXRlbXAtdmFsX180ODMiLCJyZWFnZW50LmltcGwudXRpbC8qYWx3YXlzLXVwZGF0ZSoiLCJyZWFnZW50LmRvbS9nbG9iYWwkbW9kdWxlJHJlYWN0X2RvbS5yZW5kZXIiLCIqYWx3YXlzLXVwZGF0ZSotb3JpZy12YWxfXzQ4NCIsIiphbHdheXMtdXBkYXRlKi10ZW1wLXZhbF9fNDg1IiwiY2xqcy5jb3JlL2Fzc29jIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2ZsdXNoLWFmdGVyLXJlbmRlciIsInJlYWdlbnQuZG9tL3JlLXJlbmRlci1jb21wb25lbnQiLCJ2YXJfYXJncyIsIkdfXzQ4NyIsInJlYWdlbnQuZG9tL3JlbmRlciIsImpzL0Vycm9yIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2RlZmF1bHQtY29tcGlsZXIiLCJjYWxsYmFjay1vci1jb21waWxlciIsInJlYWdlbnQucmF0b20vZmx1c2ghIiwidmVjX180ODgiLCJjbGpzLmNvcmUvbnRoIiwiY29tcGlsZXIiLCJjbGpzLmNvcmUvZm4/IiwiZiIsInJlYWdlbnQuaW1wbC5wcm90b2NvbHMvYXMtZWxlbWVudCIsInJlYWdlbnQuZG9tL3VubW91bnQtY29tcG9uZW50LWF0LW5vZGUiLCJyZWFnZW50LmRvbS9kb20tbm9kZSIsInRoaXMiLCJyZWFnZW50LmRvbS9nbG9iYWwkbW9kdWxlJHJlYWN0X2RvbS5maW5kRE9NTm9kZSIsInJlYWdlbnQuZG9tL2ZvcmNlLXVwZGF0ZS1hbGwiLCJzZXFfXzQ5MiIsImNsanMuY29yZS9zZXEiLCJjbGpzLmNvcmUvZGVyZWYiLCJjaHVua19fNDkzIiwiY291bnRfXzQ5NCIsImlfXzQ5NSIsInZlY19fNTAyIiwiY2xqcy5jb3JlLy1udGgiLCJ0ZW1wX185NTIyX19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmtlZC1zZXE/IiwiY19fMTIxMjJfX2F1dG9fXyIsImNsanMuY29yZS9jaHVuay1maXJzdCIsImNsanMuY29yZS9jaHVuay1yZXN0IiwiY2xqcy5jb3JlL2NvdW50IiwidmVjX181MDUiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5kb21cbiAgKDpyZXF1aXJlIFtyZWFjdC1kb20gOmFzIHJlYWN0LWRvbV1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwudXRpbCA6YXMgdXRpbF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwudGVtcGxhdGUgOmFzIHRtcGxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmlucHV0IDphcyBpbnB1dF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwuYmF0Y2hpbmcgOmFzIGJhdGNoXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5wcm90b2NvbHMgOmFzIHBdXG4gICAgICAgICAgICBbcmVhZ2VudC5yYXRvbSA6YXMgcmF0b21dKSlcblxuKGRlZm9uY2UgXjpwcml2YXRlIHJvb3RzIChhdG9tIHt9KSlcblxuKGRlZm4tIHVubW91bnQtY29tcCBbY29udGFpbmVyXVxuICAoc3dhcCEgcm9vdHMgZGlzc29jIGNvbnRhaW5lcilcbiAgKHJlYWN0LWRvbS91bm1vdW50Q29tcG9uZW50QXROb2RlIGNvbnRhaW5lcikpXG5cbihkZWZuLSByZW5kZXItY29tcCBbY29tcCBjb250YWluZXIgY2FsbGJhY2tdXG4gIChiaW5kaW5nIFt1dGlsLyphbHdheXMtdXBkYXRlKiB0cnVlXVxuICAgIChyZWFjdC1kb20vcmVuZGVyIChjb21wKSBjb250YWluZXJcbiAgICAgIChmbiBbXVxuICAgICAgICAoYmluZGluZyBbdXRpbC8qYWx3YXlzLXVwZGF0ZSogZmFsc2VdXG4gICAgICAgICAgKHN3YXAhIHJvb3RzIGFzc29jIGNvbnRhaW5lciBjb21wKVxuICAgICAgICAgIChiYXRjaC9mbHVzaC1hZnRlci1yZW5kZXIpXG4gICAgICAgICAgKGlmIChzb21lPyBjYWxsYmFjaylcbiAgICAgICAgICAgIChjYWxsYmFjaykpKSkpKSlcblxuKGRlZm4tIHJlLXJlbmRlci1jb21wb25lbnQgW2NvbXAgY29udGFpbmVyXVxuICAocmVuZGVyLWNvbXAgY29tcCBjb250YWluZXIgbmlsKSlcblxuKGRlZm4gcmVuZGVyXG4gIFwiUmVuZGVyIGEgUmVhZ2VudCBjb21wb25lbnQgaW50byB0aGUgRE9NLiBUaGUgZmlyc3QgYXJndW1lbnQgbWF5IGJlXG4gIGVpdGhlciBhIHZlY3RvciAodXNpbmcgUmVhZ2VudCdzIEhpY2N1cCBzeW50YXgpLCBvciBhIFJlYWN0IGVsZW1lbnQuXG4gIFRoZSBzZWNvbmQgYXJndW1lbnQgc2hvdWxkIGJlIGEgRE9NIG5vZGUuXG5cbiAgT3B0aW9uYWxseSB0YWtlcyBhIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBpbiBwbGFjZS5cblxuICBSZXR1cm5zIHRoZSBtb3VudGVkIGNvbXBvbmVudCBpbnN0YW5jZS5cIlxuICAoW2NvbXAgY29udGFpbmVyXVxuICAgKHJlbmRlciBjb21wIGNvbnRhaW5lciB0bXBsL2RlZmF1bHQtY29tcGlsZXIpKVxuICAoW2NvbXAgY29udGFpbmVyIGNhbGxiYWNrLW9yLWNvbXBpbGVyXVxuICAgKHJhdG9tL2ZsdXNoISlcbiAgIChsZXQgW1tjb21waWxlciBjYWxsYmFja10gKGlmIChmbj8gY2FsbGJhY2stb3ItY29tcGlsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3RtcGwvZGVmYXVsdC1jb21waWxlciBjYWxsYmFjay1vci1jb21waWxlcl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7OyBUT0RPOiBDYWxsYmFjayBvcHRpb24gZG9lc24ndCBtYWtlIHNlbnNlIG5vdyB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOzsgdmFsIGlzIGNvbXBpbGVyIG9iamVjdCwgbm90IG1hcC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2FsbGJhY2stb3ItY29tcGlsZXIgKDpjYWxsYmFjayBjYWxsYmFjay1vci1jb21waWxlcildKVxuICAgICAgICAgZiAoZm4gW11cbiAgICAgICAgICAgICAocC9hcy1lbGVtZW50IGNvbXBpbGVyIChpZiAoZm4/IGNvbXApIChjb21wKSBjb21wKSkpXVxuICAgICAocmVuZGVyLWNvbXAgZiBjb250YWluZXIgY2FsbGJhY2spKSkpXG5cbihkZWZuIHVubW91bnQtY29tcG9uZW50LWF0LW5vZGVcbiAgXCJSZW1vdmUgYSBjb21wb25lbnQgZnJvbSB0aGUgZ2l2ZW4gRE9NIG5vZGUuXCJcbiAgW2NvbnRhaW5lcl1cbiAgKHVubW91bnQtY29tcCBjb250YWluZXIpKVxuXG4oZGVmbiBkb20tbm9kZVxuICBcIlJldHVybnMgdGhlIHJvb3QgRE9NIG5vZGUgb2YgYSBtb3VudGVkIGNvbXBvbmVudC5cIlxuICBbdGhpc11cbiAgKHJlYWN0LWRvbS9maW5kRE9NTm9kZSB0aGlzKSlcblxuKGRlZm4gZm9yY2UtdXBkYXRlLWFsbFxuICBcIkZvcmNlIHJlLXJlbmRlcmluZyBvZiBhbGwgbW91bnRlZCBSZWFnZW50IGNvbXBvbmVudHMuIFRoaXMgaXNcbiAgcHJvYmFibHkgb25seSB1c2VmdWwgaW4gYSBkZXZlbG9wbWVudCBlbnZpcm9ubWVudCwgd2hlbiB5b3Ugd2FudCB0b1xuICB1cGRhdGUgY29tcG9uZW50cyBpbiByZXNwb25zZSB0byBzb21lIGR5bmFtaWMgY2hhbmdlcyB0byBjb2RlLlxuXG4gIE5vdGUgdGhhdCBmb3JjZS11cGRhdGUtYWxsIG1heSBub3QgdXBkYXRlIHJvb3QgY29tcG9uZW50cy4gVGhpc1xuICBoYXBwZW5zIGlmIGEgY29tcG9uZW50ICdmb28nIGlzIG1vdW50ZWQgd2l0aCBgKHJlbmRlciBbZm9vXSlgIChzaW5jZVxuICBmdW5jdGlvbnMgYXJlIHBhc3NlZCBieSB2YWx1ZSwgYW5kIG5vdCBieSByZWZlcmVuY2UsIGluXG4gIENsb2p1cmVTY3JpcHQpLiBUbyBnZXQgYXJvdW5kIHRoaXMgeW91J2xsIGhhdmUgdG8gaW50cm9kdWNlIGEgbGF5ZXJcbiAgb2YgaW5kaXJlY3Rpb24sIGZvciBleGFtcGxlIGJ5IHVzaW5nIGAocmVuZGVyIFsjJ2Zvb10pYCBpbnN0ZWFkLlwiXG4gIFtdXG4gIChyYXRvbS9mbHVzaCEpXG4gIChkb3NlcSBbW2NvbnRhaW5lciBjb21wXSBAcm9vdHNdXG4gICAgKHJlLXJlbmRlci1jb21wb25lbnQgY29tcCBjb250YWluZXIpKVxuICAoYmF0Y2gvZmx1c2gtYWZ0ZXItcmVuZGVyKSlcbiJdfQ==