// Compiled by ClojureScript 1.10.597
goog.provide("hoquet.react");
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
hoquet.react.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
hoquet.react.as_str = (function hoquet$react$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
hoquet.react.normalize_element = (function hoquet$react$normalize_element(p__22){
var vec__23 = p__22;
var seq__24 = cljs.core.seq.call(null,vec__23);
var first__25 = cljs.core.first.call(null,seq__24);
var seq__24__$1 = cljs.core.next.call(null,seq__24);
var tag = first__25;
var content = seq__24__$1;
if((!((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))))){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid tag name"].join('');
} else {
}

var vec__26 = cljs.core.re_matches.call(null,hoquet.react.re_tag,hoquet.react.as_str.call(null,tag));
var _ = cljs.core.nth.call(null,vec__26,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__26,(1),null);
var id = cljs.core.nth.call(null,vec__26,(2),null);
var class$ = cljs.core.nth.call(null,vec__26,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",(-1388402092)),id,new cljs.core.Keyword(null,"class","class",(-2030961996)),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,"."," "):null)], null);
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * The function that creates an element.
 *        The function signature is: [component attributes & children]
 */
hoquet.react._STAR_create_element_STAR_ = cljs.core.list;
hoquet.react.create_element = (function hoquet$react$create_element(var_args){
var G__33 = arguments.length;
switch (G__33) {
case (1):
return hoquet.react.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___35 = arguments.length;
var i__12667__auto___36 = (0);
while(true){
if((i__12667__auto___36 < len__12666__auto___35)){
args_arr__12684__auto__.push((arguments[i__12667__auto___36]));

var G__37 = (i__12667__auto___36 + (1));
i__12667__auto___36 = G__37;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((2)),(0),null));
return hoquet.react.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12685__auto__);

}
});

(hoquet.react.create_element.cljs$core$IFn$_invoke$arity$1 = (function (component){
return hoquet.react.create_element.call(null,component,null);
}));

(hoquet.react.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (component,attributes,children){
return cljs.core.apply.call(null,hoquet.react._STAR_create_element_STAR_,component,attributes,children);
}));

/** @this {Function} */
(hoquet.react.create_element.cljs$lang$applyTo = (function (seq30){
var G__31 = cljs.core.first.call(null,seq30);
var seq30__$1 = cljs.core.next.call(null,seq30);
var G__32 = cljs.core.first.call(null,seq30__$1);
var seq30__$2 = cljs.core.next.call(null,seq30__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31,G__32,seq30__$2);
}));

(hoquet.react.create_element.cljs$lang$maxFixedArity = (2));

/**
 * Render a tag vector as a HTML element.
 */
hoquet.react.render_element = (function hoquet$react$render_element(element){
var vec__38 = hoquet.react.normalize_element.call(null,element);
var tag = cljs.core.nth.call(null,vec__38,(0),null);
var attrs = cljs.core.nth.call(null,vec__38,(1),null);
var content = cljs.core.nth.call(null,vec__38,(2),null);
return cljs.core.apply.call(null,hoquet.react.create_element,tag,attrs,cljs.core.map.call(null,hoquet.react.render_react,content));
});
/**
 * Turn a Clojure data type into a string of HTML.
 * In Hiccup, sequences are expanded out into the body. This is particularly useful for macros like `for`.
 */
hoquet.react.render_react = (function hoquet$react$render_react(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return hoquet.react.render_element.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hoquet.react.render_react,x));
} else {
return hoquet.react.as_str.call(null,x);

}
}
});

//# sourceURL=hoquet/react.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9xdWV0L3JlYWN0LmpzIiwic291cmNlcyI6WyJyZWFjdC5jbGpzIl0sImxpbmVDb3VudCI6MTIzLCJtYXBwaW5ncyI6IjtBQUdBOzs7c0JBQUEsdEJBQ0VBO0FBRUYsc0JBQUEsdEJBQU1DLG9EQUFRQztBQUFkLEFBQ0UsR0FBSSxFQUFJLGNBQUFDLGJBQVVELHFDQUFHLGNBQUFFLGJBQVNGO0FBQzVCLE9BQUNHLHlCQUFLSDs7QUFDTixtREFBS0E7OztBQUVUOzs7aUNBQUEseUNBQUFJLDFFQUFNTztBQUFOLEFBQUEsSUFBQU4sVUFBQUQ7SUFBQUUsVUFBQSxBQUFBQyx3QkFBQUY7SUFBQUcsWUFBQSxBQUFBQywwQkFBQUg7SUFBQUEsY0FBQSxBQUFBSSx5QkFBQUo7VUFBQUUsTkFFSUk7Y0FGSk4sVkFFVU87QUFGVixBQUdFLEdBQU0sR0FBSyxFQUFJLGdCQUFBWixmQUFVVyx1Q0FBSyxnQkFBQVYsZkFBU1Usc0NBQUssT0FBU0E7QUFBckQsQUFDRSxNQUFPLGtEQUFBLExBQUtBOztBQURkOztBQUVBLElBQUFFLFVBQXVCLEFBQUNLLCtCQUFXckIsb0JBQU8sQUFBQ0MsOEJBQU9hO1FBQWxELEFBQUFHLHdCQUFBRCxRQUFBLElBQUEseENBQU9FO2NBQVAsQUFBQUQsd0JBQUFELFFBQUEsSUFBQSw5Q0FBU0Y7U0FBVCxBQUFBRyx3QkFBQUQsUUFBQSxJQUFBLHpDQUFhRzthQUFiLEFBQUFGLHdCQUFBRCxRQUFBLElBQUEsN0NBQWdCSTtnQkFBaEIsMkNBQUEsdURBQUEsOUdBQ01FLDJHQUFzQkgsNkRBQ0csMEJBQUEsaURBQUEsekRBQU1DLFFBQU0sd0NBQUEsSUFBQSw1Q0FBQ0csaUNBQWdCSDtJQUN0REksWUFBaUIsQUFBQ2IsMEJBQU1JO0FBSDlCLEFBSUUsR0FBSSxBQUFDVSwrQkFBS0Q7QUFBViwwRkFDR1YsUUFBSSxBQUFDWSwwQkFBTUosVUFBVUUsV0FBVyxBQUFDWix5QkFBS0c7O0FBRHpDLDBGQUVHRCxRQUFJUSxVQUFVUDs7O0FBRXJCOzs7O0FBR0VZLDBDQUFpQkM7QUFFbkIsQUFBQSw4QkFBQSxzQ0FBQUMscEVBQU1FO0FBQU4sQUFBQSxJQUFBRCxRQUFBLEFBQUE7QUFBQSxBQUFBLFFBQUFBO0tBQUE7QUFBQSxPQUFBQywwREFBQSxDQUFBLFVBQUE7Ozs7QUFBQSxJQUFBQywwQkFBQTtBQUFBLEFBQUEsSUFBQUMsd0JBQUEsQUFBQTtBQUFBLEFBQUEsSUFBQUMsc0JBQUE7O0FBQUEsQUFBQSxHQUFBLENBQUFBLHNCQUFBRDtBQUFBLEFBQUEsQUFBQUQsNkJBQUEsQ0FBQSxVQUFBRTs7QUFBQSxZQUFBLENBQUFBLHNCQUFBOzs7O0FBQUE7Ozs7QUFBQSxJQUFBQyx3QkFBQSwwQkFBQSxBQUFBSCw4QkFBQSxLQUFBLElBQUEsNURBd29HMERxQjtBQXhvRzFELEFBQUEsT0FBQXRCLGlFQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBSTs7Ozs7QUFBQSxDQUFBLDREQUFBLDVEQUFNSix1RUFDRlM7QUFESixBQUNlLHVEQUFBLGhEQUFDVCxzQ0FBZVM7OztBQUQvQixBQUFBLENBQUEsbUVBQUEsbkVBQU1ULDhFQUVGUyxVQUFVQyxXQUFhQztBQUYzQixBQUdHLE9BQUNDLDBCQUFNaEIsd0NBQWlCYSxVQUFVQyxXQUFXQzs7O0FBSGhEO0FBQUEsQ0FBQSxnREFBQSxXQUFBTiwzREFBTUw7QUFBTixBQUFBLElBQUFNLFFBQUEsMEJBQUFELDFCQXNnR2dEekI7SUF0Z0doRHlCLFlBQUEseUJBQUFBLHpCQXVnR2tEeEI7SUF2Z0dsRDBCLFFBQUEsMEJBQUFGLDFCQXNnR2dEekI7SUF0Z0doRHlCLFlBQUEseUJBQUFBLHpCQXVnR2tEeEI7QUF2Z0dsRCxBQUFBLElBQUEyQixzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUFGLE1BQUFDLE1BQUFGOzs7QUFBQSxDQUFBLHNEQUFBLHREQUFNTDs7QUFBTixBQUtBLEFBQUEsQUFFQTs7OzhCQUFBLDlCQUFNYSxvRUFFSEM7QUFGSCxBQUdFLElBQUFDLFVBQTBCLEFBQUNqQyx5Q0FBa0JnQztVQUE3QyxBQUFBNUIsd0JBQUE2QixRQUFBLElBQUEsMUNBQU9oQztZQUFQLEFBQUFHLHdCQUFBNkIsUUFBQSxJQUFBLDVDQUFXQztjQUFYLEFBQUE5Qix3QkFBQTZCLFFBQUEsSUFBQSw5Q0FBaUIvQjtBQUFqQixBQUNFLE9BQUM0QiwwQkFBTVosNEJBQWVqQixJQUFJaUMsTUFBTSxBQUFDQyx3QkFBSUMsMEJBQWFsQzs7QUFFdEQ7Ozs7NEJBQUEsNUJBQU1rQyxnRUFHSC9DO0FBSEgsQUFJRSxHQUNFLEFBQUNnRCxrQ0FBUWhEO0FBQUcsT0FBQzBDLHNDQUFlMUM7O0FBRDlCLEdBRUUsQUFBQ2lELCtCQUFLakQ7QUFBRyxPQUFDeUMsMEJBQU1TLGNBQUksQUFBQ0osd0JBQUlDLDBCQUFhL0M7O0FBRnhDLEFBR1EsT0FBQ0QsOEJBQU9DOzs7OztBQUVsQiIsIm5hbWVzIjpbImhvcXVldC5yZWFjdC9yZS10YWciLCJob3F1ZXQucmVhY3QvYXMtc3RyIiwieCIsImNsanMuY29yZS9LZXl3b3JkIiwiY2xqcy5jb3JlL1N5bWJvbCIsImNsanMuY29yZS9uYW1lIiwicF9fMjIiLCJ2ZWNfXzIzIiwic2VxX18yNCIsImNsanMuY29yZS9zZXEiLCJmaXJzdF9fMjUiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCIsImhvcXVldC5yZWFjdC9ub3JtYWxpemUtZWxlbWVudCIsInRhZyIsImNvbnRlbnQiLCJ2ZWNfXzI2IiwiY2xqcy5jb3JlL250aCIsIl8iLCJpZCIsImNsYXNzIiwiY2xqcy5jb3JlL3JlLW1hdGNoZXMiLCJ0YWctYXR0cnMiLCJjbG9qdXJlLnN0cmluZy9yZXBsYWNlIiwibWFwLWF0dHJzIiwiY2xqcy5jb3JlL21hcD8iLCJjbGpzLmNvcmUvbWVyZ2UiLCJob3F1ZXQucmVhY3QvKmNyZWF0ZS1lbGVtZW50KiIsImNsanMuY29yZS9saXN0IiwidmFyX2FyZ3MiLCJHX18zMyIsImhvcXVldC5yZWFjdC9jcmVhdGUtZWxlbWVudCIsImFyZ3MtYXJyX18xMjY4NF9fYXV0b19fIiwibGVuX18xMjY2Nl9fYXV0b19fIiwiaV9fMTI2NjdfX2F1dG9fXyIsImFyZ3NlcV9fMTI2ODVfX2F1dG9fXyIsInNlcTMwIiwiR19fMzEiLCJHX18zMiIsInNlbGZfXzEyNjU4X19hdXRvX18iLCJjb21wb25lbnQiLCJhdHRyaWJ1dGVzIiwiY2hpbGRyZW4iLCJjbGpzLmNvcmUvYXBwbHkiLCJob3F1ZXQucmVhY3QvcmVuZGVyLWVsZW1lbnQiLCJlbGVtZW50IiwidmVjX18zOCIsImF0dHJzIiwiY2xqcy5jb3JlL21hcCIsImhvcXVldC5yZWFjdC9yZW5kZXItcmVhY3QiLCJjbGpzLmNvcmUvdmVjdG9yPyIsImNsanMuY29yZS9zZXE/IiwiY2xqcy5jb3JlL3N0ciIsImNsanMuY29yZS9JbmRleGVkU2VxIl0sInNvdXJjZXNDb250ZW50IjpbIihucyBob3F1ZXQucmVhY3RcbiAgKDpyZXF1aXJlIFtjbG9qdXJlLnN0cmluZyA6YXMgY3N0cmluZ10pKVxuXG4oZGVmIF57OmRvYyBcIlJlZ3VsYXIgZXhwcmVzc2lvbiB0aGF0IHBhcnNlcyBhIENTUy1zdHlsZSBpZCBhbmQgY2xhc3MgZnJvbSBhIHRhZyBuYW1lLlwiIDpwcml2YXRlIHRydWV9XG4gIHJlLXRhZyAjXCIoW15cXHNcXC4jXSspKD86IyhbXlxcc1xcLiNdKykpPyg/OlxcLihbXlxccyNdKykpP1wiKVxuXG4oZGVmbiBhcy1zdHIgW3hdXG4gIChpZiAob3IgKGtleXdvcmQ/IHgpIChzeW1ib2w/IHgpKVxuICAgIChuYW1lIHgpXG4gICAgKHN0ciB4KSkpXG5cbihkZWZuIG5vcm1hbGl6ZS1lbGVtZW50XG4gIFwiRW5zdXJlIGEgdGFnIHZlY3RvciBpcyBvZiB0aGUgZm9ybSBbdGFnLW5hbWUgYXR0cnMgY29udGVudF0uXCJcbiAgW1t0YWcgJiBjb250ZW50XV1cbiAgKHdoZW4gKG5vdCAob3IgKGtleXdvcmQ/IHRhZykgKHN5bWJvbD8gdGFnKSAoc3RyaW5nPyB0YWcpKSlcbiAgICAodGhyb3cgKHN0ciB0YWcgXCIgaXMgbm90IGEgdmFsaWQgdGFnIG5hbWVcIikpKVxuICAobGV0IFtbXyB0YWcgaWQgY2xhc3NdIChyZS1tYXRjaGVzIHJlLXRhZyAoYXMtc3RyIHRhZykpXG4gICAgICAgIHRhZy1hdHRycyAgICAgICAgezppZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3MgKHdoZW4gY2xhc3MgKGNzdHJpbmcvcmVwbGFjZSBjbGFzcyBcIi5cIiBcIiBcIikpfVxuICAgICAgICBtYXAtYXR0cnMgICAgICAgIChmaXJzdCBjb250ZW50KV1cbiAgICAoaWYgKG1hcD8gbWFwLWF0dHJzKVxuICAgICAgW3RhZyAobWVyZ2UgdGFnLWF0dHJzIG1hcC1hdHRycykgKG5leHQgY29udGVudCldXG4gICAgICBbdGFnIHRhZy1hdHRycyBjb250ZW50XSkpKVxuXG4oZGVmIF46ZHluYW1pY1xuICBeezpkb2MgXCJUaGUgZnVuY3Rpb24gdGhhdCBjcmVhdGVzIGFuIGVsZW1lbnQuXG4gICAgICAgICAgVGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBpczogW2NvbXBvbmVudCBhdHRyaWJ1dGVzICYgY2hpbGRyZW5dXCJ9XG4gICpjcmVhdGUtZWxlbWVudCogbGlzdClcblxuKGRlZm4gY3JlYXRlLWVsZW1lbnRcbiAgKFtjb21wb25lbnRdIChjcmVhdGUtZWxlbWVudCBjb21wb25lbnQgbmlsKSlcbiAgKFtjb21wb25lbnQgYXR0cmlidXRlcyAmIGNoaWxkcmVuXVxuICAgKGFwcGx5ICpjcmVhdGUtZWxlbWVudCogY29tcG9uZW50IGF0dHJpYnV0ZXMgY2hpbGRyZW4pKSlcblxuKGRlY2xhcmUgcmVuZGVyLXJlYWN0KVxuXG4oZGVmbiByZW5kZXItZWxlbWVudFxuICBcIlJlbmRlciBhIHRhZyB2ZWN0b3IgYXMgYSBIVE1MIGVsZW1lbnQuXCJcbiAgW2VsZW1lbnRdXG4gIChsZXQgW1t0YWcgYXR0cnMgY29udGVudF0gKG5vcm1hbGl6ZS1lbGVtZW50IGVsZW1lbnQpXVxuICAgIChhcHBseSBjcmVhdGUtZWxlbWVudCB0YWcgYXR0cnMgKG1hcCByZW5kZXItcmVhY3QgY29udGVudCkpKSlcblxuKGRlZm4gcmVuZGVyLXJlYWN0XG4gIFwiVHVybiBhIENsb2p1cmUgZGF0YSB0eXBlIGludG8gYSBzdHJpbmcgb2YgSFRNTC5cbiAgIEluIEhpY2N1cCwgc2VxdWVuY2VzIGFyZSBleHBhbmRlZCBvdXQgaW50byB0aGUgYm9keS4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBtYWNyb3MgbGlrZSBgZm9yYC5cIlxuICBbeF1cbiAgKGNvbmRcbiAgICAodmVjdG9yPyB4KSAocmVuZGVyLWVsZW1lbnQgeClcbiAgICAoc2VxPyB4KSAoYXBwbHkgc3RyIChtYXAgcmVuZGVyLXJlYWN0IHgpKVxuICAgIDplbHNlIChhcy1zdHIgeCkpKVxuXG4oY29tbWVudFxuICAoYmluZGluZyBbKmNyZWF0ZS1lbGVtZW50KiAoZm4gW2NvbXBvbmVudCBhdHRyaWJ1dGVzICYgY2hpbGRyZW5dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFwcGx5IGxpc3QgJ2NyZWF0ZS1lbGVtZW50IGNvbXBvbmVudCBhdHRyaWJ1dGVzIGNoaWxkcmVuKSldXG4gICAgKHJlbmRlci1lbGVtZW50IFs6ZGl2LmZvb1xuICAgICAgICAgICAgICAgICAgICAgWzpwLmFhIFs6c3BhbiAxXV1cbiAgICAgICAgICAgICAgICAgICAgIFs6cC52diAyXV0pKSlcbiJdfQ==