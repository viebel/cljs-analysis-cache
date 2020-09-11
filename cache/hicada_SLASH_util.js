// Compiled by ClojureScript 1.10.597
goog.provide("hicada.util");
/**
 * Joins strings space separated
 */
hicada.util.join_classes_js = (function hicada$util$join_classes_js(var_args){
var G__24 = arguments.length;
switch (G__24) {
case (0):
return hicada.util.join_classes_js.cljs$core$IFn$_invoke$arity$0();

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___26 = arguments.length;
var i__12667__auto___27 = (0);
while(true){
if((i__12667__auto___27 < len__12666__auto___26)){
args_arr__12684__auto__.push((arguments[i__12667__auto___27]));

var G__28 = (i__12667__auto___27 + (1));
i__12667__auto___27 = G__28;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((0)),(0),null));
return hicada.util.join_classes_js.cljs$core$IFn$_invoke$arity$variadic(argseq__12685__auto__);

}
});

(hicada.util.join_classes_js.cljs$core$IFn$_invoke$arity$0 = (function (){
return "";
}));

(hicada.util.join_classes_js.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"~{}")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",(-1134233646),null),["[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),"].join(' ')"].join(''),xs);
}));

/** @this {Function} */
(hicada.util.join_classes_js.cljs$lang$applyTo = (function (seq23){
var self__12659__auto__ = this;
return self__12659__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23));
}));

(hicada.util.join_classes_js.cljs$lang$maxFixedArity = (0));

/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
hicada.util.camel_case = (function hicada$util$camel_case(k){
if((((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol)))){
var vec__29 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);
var seq__30 = cljs.core.seq.call(null,vec__29);
var first__31 = cljs.core.first.call(null,seq__30);
var seq__30__$1 = cljs.core.next.call(null,seq__30);
var first_word = first__31;
var words = seq__30__$1;
if(((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word)))){
return k;
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
hicada.util.camel_case_keys = (function hicada$util$camel_case_keys(m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (m__$1,k,v){
return cljs.core.assoc.call(null,m__$1,hicada.util.camel_case.call(null,k),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
} else {
if(cljs.core.vector_QMARK_.call(null,m)){
return cljs.core.mapv.call(null,hicada.util.camel_case_keys,m);
} else {
return m;

}
}
});
/**
 * - is x a vector?
 *   AND
 * - first element is a keyword?
 */
hicada.util.element_QMARK_ = (function hicada$util$element_QMARK_(x){
return ((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword)));
});
/**
 * Join the `classes` with a whitespace.
 */
hicada.util.join_classes = (function hicada$util$join_classes(classes){
return clojure.string.join.call(null," ",cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__1_SHARP_){
if(typeof p1__1_SHARP_ === 'string'){
return p1__1_SHARP_;
} else {
return cljs.core.seq.call(null,p1__1_SHARP_);
}
}),classes))));
});
/**
 * Returns the React class that is to be used for this component or nil if it's not a controlled
 * input.
 */
hicada.util.controlled_input_class = (function hicada$util$controlled_input_class(type,attrs){
if((type instanceof cljs.core.Keyword)){
var G__32 = cljs.core.name.call(null,type);
switch (G__32) {
case "input":
if(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",(-50955819)).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.list(new cljs.core.Symbol("hiccada.input","wrapped-checked","hiccada.input/wrapped-checked",(-922923090),null));
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.list(new cljs.core.Symbol("hiccada.input","wrapped-input","hiccada.input/wrapped-input",(-1651191586),null));
} else {
return null;

}
}

break;
case "select":
if(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.list(new cljs.core.Symbol("hiccada.input","wrapped-select","hiccada.input/wrapped-select",(1601961830),null));
} else {
return null;
}

break;
case "textarea":
if(cljs.core.truth_(new cljs.core.Keyword(null,"value","value",(305978217)).cljs$core$IFn$_invoke$arity$1(attrs))){
return cljs.core.list(new cljs.core.Symbol("hiccada.input","wrapped-textarea","hiccada.input/wrapped-textarea",(1635316109),null));
} else {
return null;
}

break;
default:
return null;

}
} else {
return null;
}
});

//# sourceURL=hicada/util.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGljYWRhL3V0aWwuanMiLCJzb3VyY2VzIjpbInV0aWwuY2xqcyJdLCJsaW5lQ291bnQiOjE1NSwibWFwcGluZ3MiOiI7QUFLQSxBQUFBOzs7OEJBQUEsc0NBQUFBLHBFQUFNRTtBQUFOLEFBQUEsSUFBQUQsUUFBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUM7Ozs7QUFBQSxJQUFBQywwQkFBQTtBQUFBLEFBQUEsSUFBQUMsd0JBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsc0JBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHNCQUFBRDtBQUFBLEFBQUEsQUFBQUQsNkJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxZQUFBLENBQUFBLHNCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSwwQkFBQSxBQUFBSCw4QkFBQSxLQUFBLElBQUEsNURBZ3FHMER1RDtBQWhxRzFELEFBQUEsT0FBQXhELGlFQUFBSTs7Ozs7QUFBQSxDQUFBLDREQUFBLDVEQUFNSjtBQUFOLEFBQUE7OztBQUFBLEFBQUEsQ0FBQSxtRUFBQSxuRUFBTUEsOEVBR0FRO0FBSE4sQUFJRyxJQUFNQyxpRkFBVSx5REFBQSx6REFBQ0MsMkJBQU8sQUFBQ0MsMEJBQU1ILHZGQUNmLDhCQUFBLDlCQUFDSSx4Q0FDRCxBQUFDQywwQkFBTUM7QUFGdkIsQUFHRSxzQ0FBQSxBQUFBLC9CQUFDQyx5RkFBVyxDQUFBLHNEQUFBLE5BQVNOLDhCQUFvQkQ7OztBQVA5QztBQUFBLENBQUEsZ0RBQUEsV0FBQUgsM0RBQU1MO0FBQU4sQUFBQSxJQUFBTSxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUEsQUFBQUMsd0JBQUFGOzs7QUFBQSxDQUFBLHNEQUFBLHREQUFNTDs7QUFBTixBQVNBOzs7eUJBQUEsekJBQU1nQiwwREFFSEM7QUFGSCxBQUdFLEdBQUksRUFBSSxjQUFBQyxiQUFVRCxxQ0FDVixPQUFTQSxvQkFDVCxjQUFBRSxiQUFTRjtBQUNmLElBQUFHLFVBQTJCLDJEQUFBLDNEQUFDTywrQkFBVSxBQUFDQyx5QkFBS1g7SUFBNUNJLFVBQUEsQUFBQWQsd0JBQUFhO0lBQUFFLFlBQUEsQUFBQUMsMEJBQUFGO0lBQUFBLGNBQUEsQUFBQUcseUJBQUFIO2lCQUFBQyxiQUFPRztZQUFQSixSQUFvQks7QUFBcEIsQUFDRSxHQUFJLEVBQUksQUFBQ0csaUNBQU9ILFlBQ1IseUJBQUEsekJBQUNJLGdDQUFTTCxpQkFDVix5QkFBQSx6QkFBQ0ssZ0NBQVNMO0FBQ2hCUjs7QUFDQSxtQ0FBQSx1REFBSSxBQUFDYyx3QkFBSUMsMEJBQWVOLDNFQUNwQixBQUFDTyxrRkFBS1IsaEhBQ05TLDVCQUNBQzs7O0FBQ1JsQjs7O0FBRUo7Ozs4QkFBQSw5QkFBTW1CLG9FQUVIQztBQUZILEFBR0UsR0FDRSxBQUFDQywrQkFBS0Q7QUFDTixPQUFDRSw4QkFDQyxXQUFLRixNQUFFcEIsRUFBRXVCO0FBQVQsQUFDRSxPQUFDQywwQkFBTUosTUFBRSxBQUFDckIsaUNBQVdDLEdBQUd1QjtHQUY1QixtQ0FHS0g7O0FBTFAsR0FPRSxBQUFDSyxrQ0FBUUw7QUFDVCxPQUFDTSx5QkFBS1AsNEJBQWdCQzs7QUFSeEIsQUFVRUE7Ozs7O0FBRUo7Ozs7OzZCQUFBLDdCQUFNTyxrRUFJSEM7QUFKSCxBQUtFLFNBQUssQUFBQ0gsa0NBQVFHLFFBQUcseUNBQUEzQix4Q0FBVSxBQUFDSywwQkFBTXNCOztBQUVwQzs7OzJCQUFBLDNCQUFNQyw4REFFSEM7QUFGSCxxSEFHTyx3QkFBQSxXQUFBQyxuQ0FBQ2pCLDVCQUNELEFBQUNrQixoREFDRCxBQUFDQywyQkFBT0MscEVBQ1IscUNBQUEsOUJBQUNqQjtBQUhELEFBQU0sR0FBSSxPQUFBYztBQUFKQTs7QUFBa0IsK0JBQUFBLHhCQUFDekM7O0dBQVF3Qzs7QUFLeEM7Ozs7cUNBQUEsckNBQU1LLGtGQUdIQyxLQUFLQztBQUhSLEFBSUUsR0FBTSxpQkFBQXBDLGhCQUFVbUM7QUFBaEIsQUFDRSxJQUFBRSxRQUFNLEFBQUMzQix5QkFBS3lCO0FBQVosQUFBQSxRQUFBRTtLQUFBO0FBQ1Usb0JBQ0UsQUFBQSwwRkFBVUQ7QUFEWixBQUFBOztBQUFBLG9CQUVFLEFBQUEsc0ZBQVFBO0FBRlYsQUFBQTs7QUFBQSxBQUFBOzs7Ozs7S0FEVjtBQUtXLG9CQUFNLEFBQUEsc0ZBQVFBO0FBQWQsQUFBQSxBQUFBOztBQUFBOzs7O0tBTFg7QUFNYSxvQkFBTSxBQUFBLHNGQUFRQTtBQUFkLEFBQUEsQUFBQTs7QUFBQTs7Ozs7QUFOYjs7OztBQURGIiwibmFtZXMiOlsidmFyX2FyZ3MiLCJHX18yNCIsImhpY2FkYS51dGlsL2pvaW4tY2xhc3Nlcy1qcyIsImFyZ3MtYXJyX18xMjY4NF9fYXV0b19fIiwibGVuX18xMjY2Nl9fYXV0b19fIiwiaV9fMTI2NjdfX2F1dG9fXyIsImFyZ3NlcV9fMTI2ODVfX2F1dG9fXyIsInNlcTIzIiwic2VsZl9fMTI2NTlfX2F1dG9fXyIsImNsanMuY29yZS9zZXEiLCJ4cyIsInN0cnMiLCJjbGpzLmNvcmUvcmVwZWF0IiwiY2xqcy5jb3JlL2NvdW50IiwiY2xqcy5jb3JlL2ludGVycG9zZSIsImNsanMuY29yZS9hcHBseSIsImNsanMuY29yZS9zdHIiLCJjbGpzLmNvcmUvbGlzdCoiLCJoaWNhZGEudXRpbC9jYW1lbC1jYXNlIiwiayIsImNsanMuY29yZS9LZXl3b3JkIiwiY2xqcy5jb3JlL1N5bWJvbCIsInZlY19fMjkiLCJzZXFfXzMwIiwiZmlyc3RfXzMxIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJmaXJzdC13b3JkIiwid29yZHMiLCJjbG9qdXJlLnN0cmluZy9zcGxpdCIsImNsanMuY29yZS9uYW1lIiwiY2xqcy5jb3JlL2VtcHR5PyIsImNsanMuY29yZS89IiwiY2xqcy5jb3JlL21hcCIsImNsb2p1cmUuc3RyaW5nL2NhcGl0YWxpemUiLCJjbGpzLmNvcmUvY29uaiIsImNsb2p1cmUuc3RyaW5nL2pvaW4iLCJjbGpzLmNvcmUva2V5d29yZCIsImhpY2FkYS51dGlsL2NhbWVsLWNhc2Uta2V5cyIsIm0iLCJjbGpzLmNvcmUvbWFwPyIsImNsanMuY29yZS9yZWR1Y2Uta3YiLCJ2IiwiY2xqcy5jb3JlL2Fzc29jIiwiY2xqcy5jb3JlL3ZlY3Rvcj8iLCJjbGpzLmNvcmUvbWFwdiIsImhpY2FkYS51dGlsL2VsZW1lbnQ/IiwieCIsImhpY2FkYS51dGlsL2pvaW4tY2xhc3NlcyIsImNsYXNzZXMiLCJwMV9fMSMiLCJjbGpzLmNvcmUvZmxhdHRlbiIsImNsanMuY29yZS9yZW1vdmUiLCJjbGpzLmNvcmUvbmlsPyIsImhpY2FkYS51dGlsL2NvbnRyb2xsZWQtaW5wdXQtY2xhc3MiLCJ0eXBlIiwiYXR0cnMiLCJHX18zMiIsImNsanMuY29yZS9JbmRleGVkU2VxIl0sInNvdXJjZXNDb250ZW50IjpbIihucyBoaWNhZGEudXRpbFxuICAoOnJlcXVpcmVcbiAgICBbY2xvanVyZS5zdHJpbmcgOmFzIHN0cl1cbiAgICBbY2xvanVyZS5zZXQgOmFzIHNldF0pKVxuXG4oZGVmbiBqb2luLWNsYXNzZXMtanNcbiAgXCJKb2lucyBzdHJpbmdzIHNwYWNlIHNlcGFyYXRlZFwiXG4gIChbXSBcIlwiKVxuICAoWyYgeHNdXG4gICAobGV0IFtzdHJzICgtPj4gKHJlcGVhdCAoY291bnQgeHMpIFwifnt9XCIpXG4gICAgICAgICAgICAgICAgICAgKGludGVycG9zZSBcIixcIilcbiAgICAgICAgICAgICAgICAgICAoYXBwbHkgc3RyKSldXG4gICAgIChsaXN0KiAnanMqIChzdHIgXCJbXCIgc3RycyBcIl0uam9pbignICcpXCIpIHhzKSkpKVxuXG4oZGVmbiBjYW1lbC1jYXNlXG4gIFwiUmV0dXJucyBjYW1lbCBjYXNlIHZlcnNpb24gb2YgdGhlIGtleSwgZS5nLiA6aHR0cC1lcXVpdiBiZWNvbWVzIDpodHRwRXF1aXYuXCJcbiAgW2tdXG4gIChpZiAob3IgKGtleXdvcmQ/IGspXG4gICAgICAgICAgKHN0cmluZz8gaylcbiAgICAgICAgICAoc3ltYm9sPyBrKSlcbiAgICAobGV0IFtbZmlyc3Qtd29yZCAmIHdvcmRzXSAoc3RyL3NwbGl0IChuYW1lIGspICNcIi1cIildXG4gICAgICAoaWYgKG9yIChlbXB0eT8gd29yZHMpXG4gICAgICAgICAgICAgICg9IFwiYXJpYVwiIGZpcnN0LXdvcmQpXG4gICAgICAgICAgICAgICg9IFwiZGF0YVwiIGZpcnN0LXdvcmQpKVxuICAgICAgICBrXG4gICAgICAgICgtPiAobWFwIHN0ci9jYXBpdGFsaXplIHdvcmRzKVxuICAgICAgICAgICAgKGNvbmogZmlyc3Qtd29yZClcbiAgICAgICAgICAgIHN0ci9qb2luXG4gICAgICAgICAgICBrZXl3b3JkKSkpXG4gICAgaykpXG5cbihkZWZuIGNhbWVsLWNhc2Uta2V5c1xuICBcIlJlY3Vyc2l2ZWx5IHRyYW5zZm9ybXMgYWxsIG1hcCBrZXlzIGludG8gY2FtZWwgY2FzZS5cIlxuICBbbV1cbiAgKGNvbmRcbiAgICAobWFwPyBtKVxuICAgIChyZWR1Y2Uta3ZcbiAgICAgIChmbiBbbSBrIHZdXG4gICAgICAgIChhc3NvYyBtIChjYW1lbC1jYXNlIGspIHYpKVxuICAgICAge30gbSlcbiAgICA7OyBSZWFjdCBuYXRpdmUgYWNjZXB0cyA6c3R5bGUgW3s6Zm9vLWJhciAuLn0gb3RoZXItc3R5bGVzXSBzbyBjYW1jYXNlIHRob3NlIGtleXM6XG4gICAgKHZlY3Rvcj8gbSlcbiAgICAobWFwdiBjYW1lbC1jYXNlLWtleXMgbSlcbiAgICA6ZWxzZVxuICAgIG0pKVxuXG4oZGVmbiBlbGVtZW50P1xuICBcIi0gaXMgeCBhIHZlY3Rvcj9cbiAgQU5EXG4gICAtIGZpcnN0IGVsZW1lbnQgaXMgYSBrZXl3b3JkP1wiXG4gIFt4XVxuICAoYW5kICh2ZWN0b3I/IHgpIChrZXl3b3JkPyAoZmlyc3QgeCkpKSlcblxuKGRlZm4gam9pbi1jbGFzc2VzXG4gIFwiSm9pbiB0aGUgYGNsYXNzZXNgIHdpdGggYSB3aGl0ZXNwYWNlLlwiXG4gIFtjbGFzc2VzXVxuICAoLT4+IChtYXAgIyhpZiAoc3RyaW5nPyAlKSAlIChzZXEgJSkpIGNsYXNzZXMpXG4gICAgICAgKGZsYXR0ZW4pXG4gICAgICAgKHJlbW92ZSBuaWw/KVxuICAgICAgIChzdHIvam9pbiBcIiBcIikpKVxuXG4oZGVmbiBjb250cm9sbGVkLWlucHV0LWNsYXNzXG4gIFwiUmV0dXJucyB0aGUgUmVhY3QgY2xhc3MgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGlzIGNvbXBvbmVudCBvciBuaWwgaWYgaXQncyBub3QgYSBjb250cm9sbGVkXG4gICBpbnB1dC5cIlxuICBbdHlwZSBhdHRyc11cbiAgKHdoZW4gKGtleXdvcmQ/IHR5cGUpXG4gICAgKGNhc2UgKG5hbWUgdHlwZSlcbiAgICAgIFwiaW5wdXRcIiAoY29uZFxuICAgICAgICAgICAgICAgICg6Y2hlY2tlZCBhdHRycykgJyhoaWNjYWRhLmlucHV0L3dyYXBwZWQtY2hlY2tlZClcbiAgICAgICAgICAgICAgICAoOnZhbHVlIGF0dHJzKSAnKGhpY2NhZGEuaW5wdXQvd3JhcHBlZC1pbnB1dClcbiAgICAgICAgICAgICAgICA6ZWxzZSBuaWwpXG4gICAgICBcInNlbGVjdFwiICh3aGVuICg6dmFsdWUgYXR0cnMpICcoaGljY2FkYS5pbnB1dC93cmFwcGVkLXNlbGVjdCkpXG4gICAgICBcInRleHRhcmVhXCIgKHdoZW4gKDp2YWx1ZSBhdHRycykgJyhoaWNjYWRhLmlucHV0L3dyYXBwZWQtdGV4dGFyZWEpKVxuICAgICAgbmlsKSkpXG4iXX0=