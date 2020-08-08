// Compiled by ClojureScript 1.10.597
goog.provide("hoquet.runtime");
/**
 * Regular expression that parses a CSS-style id and class from a tag name.
 */
hoquet.runtime.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
/**
 * Characters to replace when escaping HTML
 */
hoquet.runtime.character_escapes = new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;",">","&gt;","\"","&quot;"], null);
/**
 * A list of tags that need an explicit ending tag when rendered.
 */
hoquet.runtime.container_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 33, ["table",null,"canvas",null,"body",null,"h3",null,"dt",null,"label",null,"fieldset",null,"form",null,"em",null,"option",null,"h2",null,"h4",null,"style",null,"span",null,"script",null,"ol",null,"dd",null,"a",null,"head",null,"textarea",null,"i",null,"div",null,"b",null,"h5",null,"pre",null,"ul",null,"iframe",null,"strong",null,"html",null,"h1",null,"li",null,"dl",null,"h6",null], null), null);
hoquet.runtime.as_str = (function hoquet$runtime$as_str(x){
if((((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)))){
return cljs.core.name.call(null,x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
/**
 * Change special characters into HTML character entities.
 */
hoquet.runtime.escape_html = (function hoquet$runtime$escape_html(text){
return clojure.string.escape.call(null,hoquet.runtime.as_str.call(null,text),hoquet.runtime.character_escapes);
});
hoquet.runtime.h = hoquet.runtime.escape_html;
hoquet.runtime.end_tag = (function hoquet$runtime$end_tag(){
return " />";
});
hoquet.runtime.xml_attribute = (function hoquet$runtime$xml_attribute(var_args){
var G__23 = arguments.length;
switch (G__23) {
case (2):
return hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return hoquet.runtime.xml_attribute.call(null,name,value,true);
}));

(hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$3 = (function (name,value,escape_QMARK_){
return [" ",hoquet.runtime.as_str.call(null,name),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(escape_QMARK_)?hoquet.runtime.escape_html.call(null,value):value)),"\""].join('');
}));

(hoquet.runtime.xml_attribute.cljs$lang$maxFixedArity = (3));

hoquet.runtime.render_attribute = (function hoquet$runtime$render_attribute(p__25){
var vec__26 = p__25;
var name = cljs.core.nth.call(null,vec__26,(0),null);
var value = cljs.core.nth.call(null,vec__26,(1),null);
if(value === true){
return hoquet.runtime.xml_attribute.call(null,name,name);
} else {
if(cljs.core.not.call(null,value)){
return "";
} else {
return hoquet.runtime.xml_attribute.call(null,name,((cljs.core.map_QMARK_.call(null,value))?hoquet.runtime.render_attr_map.call(null,value):value),false);

}
}
});
hoquet.runtime.render_attr_map = (function hoquet$runtime$render_attr_map(attrs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.sort.call(null,cljs.core.map.call(null,hoquet.runtime.render_attribute,attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
hoquet.runtime.normalize_element = (function hoquet$runtime$normalize_element(p__29){
var vec__30 = p__29;
var seq__31 = cljs.core.seq.call(null,vec__30);
var first__32 = cljs.core.first.call(null,seq__31);
var seq__31__$1 = cljs.core.next.call(null,seq__31);
var tag = first__32;
var content = seq__31__$1;
if((!((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))))){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid tag name"].join('');
} else {
}

var vec__33 = cljs.core.re_matches.call(null,hoquet.runtime.re_tag,hoquet.runtime.as_str.call(null,tag));
var _ = cljs.core.nth.call(null,vec__33,(0),null);
var tag__$1 = cljs.core.nth.call(null,vec__33,(1),null);
var id = cljs.core.nth.call(null,vec__33,(2),null);
var class$ = cljs.core.nth.call(null,vec__33,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",(-1388402092)),id,new cljs.core.Keyword(null,"class","class",(-2030961996)),(cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,"."," "):null)], null);
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.call(null,tag_attrs,map_attrs),cljs.core.next.call(null,content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * Render a tag vector as a HTML element.
 */
hoquet.runtime.render_element = (function hoquet$runtime$render_element(element){
var vec__36 = hoquet.runtime.normalize_element.call(null,element);
var tag = cljs.core.nth.call(null,vec__36,(0),null);
var attrs = cljs.core.nth.call(null,vec__36,(1),null);
var content = cljs.core.nth.call(null,vec__36,(2),null);
if(cljs.core.truth_((function (){var or__10116__auto__ = content;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return hoquet.runtime.container_tags.call(null,tag);
}
})())){
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hoquet.runtime.render_attr_map.call(null,attrs)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hoquet.runtime.render_html.call(null,content)),"</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join('');
} else {
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hoquet.runtime.render_attr_map.call(null,attrs)),hoquet.runtime.end_tag.call(null)].join('');
}
});
/**
 * Turn a Clojure data type into a string of HTML.
 * In Hiccup, sequences are expanded out into the body. This is particularly useful for macros like `for`.
 */
hoquet.runtime.render_html = (function hoquet$runtime$render_html(x){
if(cljs.core.vector_QMARK_.call(null,x)){
return hoquet.runtime.render_element.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,hoquet.runtime.render_html,x));
} else {
return hoquet.runtime.as_str.call(null,x);

}
}
});

//# sourceURL=hoquet/runtime.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9xdWV0L3J1bnRpbWUuanMiLCJzb3VyY2VzIjpbInJ1bnRpbWUuY2xqcyJdLCJsaW5lQ291bnQiOjE0MiwibWFwcGluZ3MiOiI7QUFHQTs7O3dCQUFBLHhCQUNFQTtBQUVGOzs7bUNBQUEsMkNBQUEsSUFBQSxRQUFBLElBQUEsT0FBQSxJQUFBLE9BQUEsS0FBQSxySEFDRUM7QUFLRjs7O2dDQUFBLGtGQUFBLGFBQUEsY0FBQSxZQUFBLFVBQUEsVUFBQSxhQUFBLGdCQUFBLFlBQUEsVUFBQSxjQUFBLFVBQUEsVUFBQSxhQUFBLFlBQUEsY0FBQSxVQUFBLFVBQUEsU0FBQSxZQUFBLGdCQUFBLFNBQUEsV0FBQSxTQUFBLFVBQUEsV0FBQSxVQUFBLGNBQUEsY0FBQSxZQUFBLFVBQUEsVUFBQSxVQUFBLHBlQUNFQztBQUtGLHdCQUFBLHhCQUFNQyx3REFBUUM7QUFBZCxBQUNFLEdBQUksRUFBSSxjQUFBQyxiQUFVRCxxQ0FBRyxjQUFBRSxiQUFTRjtBQUM1QixPQUFDRyx5QkFBS0g7O0FBQ04sbURBQUtBOzs7QUFFVDs7OzZCQUFBLDdCQUFNSSxrRUFFSEM7QUFGSCx1Q0FHTSxBQUFDTixnQ0FBT00sdkVBQ1IsT0FBQ0Msc0VBQWVUOztBQUV0QixBQUFLVSxtQkFBRUg7QUFFUCx5QkFBQSx6QkFBTUk7QUFBTixBQUFBOztBQUdBLEFBQUEsK0JBQUEsdUNBQUFDLHRFQUFNRTtBQUFOLEFBQUEsSUFBQUQsUUFBQSxBQUFBO0FBQUEsQUFBQSxRQUFBQTtLQUFBO0FBQUEsT0FBQUMsMkRBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7S0FBQTtBQUFBLE9BQUFBLDJEQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQSxNQUFBLENBQUEsVUFBQTs7OztBQUFBLE1BQUEsS0FBQUMsTUFBQSxDQUFBLDhEQUFBLEFBQUE7Ozs7O0FBQUEsQ0FBQSw2REFBQSw3REFBTUQsd0VBQ0ZFLEtBQUtDO0FBRFQsQUFDZ0IseURBQUEsbERBQUNILHVDQUFjRSxLQUFLQzs7O0FBRHBDLENBQUEsNkRBQUEsN0RBQU1ILHdFQUVGRSxLQUFLQyxNQUFNQztBQUZmLEFBR0csUUFBQSwwQ0FBQSx1SUFBQSw3S0FBUyxBQUFDaEIsZ0NBQU9jLHdEQUFZLGtCQUFJRSxlQUFRLEFBQUNYLHFDQUFZVSxPQUFPQTs7O0FBSGhFLENBQUEsdURBQUEsdkRBQU1IOztBQUFOLEFBS0EsQUFBQSxBQUVBLGtDQUFBLDBDQUFBSyw1RUFBTUc7QUFBTixBQUFBLElBQUFGLFVBQUFEO1dBQUEsQUFBQUUsd0JBQUFELFFBQUEsSUFBQSwzQ0FBeUJKO1lBQXpCLEFBQUFLLHdCQUFBRCxRQUFBLElBQUEsNUNBQThCSDtBQUE5QixBQUNFLEdBQ0UsQUFBT0E7QUFBTyxPQUFDSCx1Q0FBY0UsS0FBS0E7O0FBRHBDLEdBRUUsQUFBQ08sd0JBQUlOO0FBRlA7O0FBQUEsQUFHUSxtSkFBQSw1SUFBQ0gsdUNBQWNFLEtBQUssRUFBSSxBQUFDUSwrQkFBS1AsUUFBTyxBQUFDUSx5Q0FBZ0JSLE9BQU9BOzs7OztBQUV2RSxpQ0FBQSxqQ0FBTVEsMEVBQWlCQztBQUF2QixBQUNFLE9BQUNDLDBCQUFNQyxjQUNMLEFBQUNDLHlCQUFLLEFBQUNDLHdCQUFJUixnQ0FBaUJJOztBQUVoQzs7O21DQUFBLDJDQUFBSyw5RUFBTU87QUFBTixBQUFBLElBQUFOLFVBQUFEO0lBQUFFLFVBQUEsQUFBQUMsd0JBQUFGO0lBQUFHLFlBQUEsQUFBQUMsMEJBQUFIO0lBQUFBLGNBQUEsQUFBQUkseUJBQUFKO1VBQUFFLE5BRUlJO2NBRkpOLFZBRVVPO0FBRlYsQUFHRSxHQUFNLEdBQUssRUFBSSxnQkFBQXBDLGZBQVVtQyx1Q0FBSyxnQkFBQWxDLGZBQVNrQyxzQ0FBSyxPQUFTQTtBQUFyRCxBQUNFLE1BQU8sa0RBQUEsTEFBS0E7O0FBRGQ7O0FBRUEsSUFBQUUsVUFBdUIsQUFBQ0ksK0JBQVc5QyxzQkFBTyxBQUFDRyxnQ0FBT3FDO1FBQWxELEFBQUFsQix3QkFBQW9CLFFBQUEsSUFBQSx4Q0FBT0M7Y0FBUCxBQUFBckIsd0JBQUFvQixRQUFBLElBQUEsOUNBQVNGO1NBQVQsQUFBQWxCLHdCQUFBb0IsUUFBQSxJQUFBLHpDQUFhRTthQUFiLEFBQUF0Qix3QkFBQW9CLFFBQUEsSUFBQSw3Q0FBZ0JHO2dCQUFoQiwyQ0FBQSx1REFBQSw5R0FDTUUsMkdBQXNCSCw2REFDRywyRUFBQSx6REFBSUMsUUFBTSx3Q0FBQSxJQUFBLDVDQUFDRyxpQ0FBZ0JIO0lBQ3BESSxZQUFpQixBQUFDWiwwQkFBTUk7QUFIOUIsQUFJRSxHQUFJLEFBQUNoQiwrQkFBS3dCO0FBQVYsMEZBQ0dULFFBQUksQUFBQ1UsMEJBQU1ILFVBQVVFLFdBQVcsQUFBQ1gseUJBQUtHOztBQUR6QywwRkFFR0QsUUFBSU8sVUFBVU47OztBQUVyQixBQUFBLEFBRUE7OztnQ0FBQSxoQ0FBTVUsd0VBRUhDO0FBRkgsQUFHRSxJQUFBQyxVQUEwQixBQUFDZCwyQ0FBa0JhO1VBQTdDLEFBQUE5Qix3QkFBQStCLFFBQUEsSUFBQSwxQ0FBT2I7WUFBUCxBQUFBbEIsd0JBQUErQixRQUFBLElBQUEsNUNBQVcxQjtjQUFYLEFBQUFMLHdCQUFBK0IsUUFBQSxJQUFBLDlDQUFpQlo7QUFBakIsQUFDRSxvQkFBSSxpQkFBQWEsb0JBQUliO0FBQUosQUFBQSxvQkFBQWE7QUFBQUE7O0FBQVksT0FBQ3BELHdDQUFlc0M7OztBQUM5QixRQUFBLGtKQUFBLCtGQUFBLHNEQUFBLHZQQUFTQSxpREFBSSxBQUFDZCx5Q0FBZ0JDLHdEQUN6QixBQUFDNEIscUNBQVlkLDJEQUNSRDs7QUFDVixRQUFBLGdEQUFTQSxpREFBSSxBQUFDZCx5Q0FBZ0JDLFFBQU8sQUFBQ2Y7OztBQUU1Qzs7Ozs2QkFBQSw3QkFBTTJDLGtFQUdIbkQ7QUFISCxBQUlFLEdBQ0UsQUFBQ29ELGtDQUFRcEQ7QUFBRyxPQUFDK0Msd0NBQWUvQzs7QUFEOUIsR0FFRSxBQUFDcUQsK0JBQUtyRDtBQUFHLE9BQUN3QiwwQkFBTUMsY0FBSSxBQUFDRSx3QkFBSXdCLDJCQUFZbkQ7O0FBRnZDLEFBR1EsT0FBQ0QsZ0NBQU9DIiwibmFtZXMiOlsiaG9xdWV0LnJ1bnRpbWUvcmUtdGFnIiwiaG9xdWV0LnJ1bnRpbWUvY2hhcmFjdGVyLWVzY2FwZXMiLCJob3F1ZXQucnVudGltZS9jb250YWluZXItdGFncyIsImhvcXVldC5ydW50aW1lL2FzLXN0ciIsIngiLCJjbGpzLmNvcmUvS2V5d29yZCIsImNsanMuY29yZS9TeW1ib2wiLCJjbGpzLmNvcmUvbmFtZSIsImhvcXVldC5ydW50aW1lL2VzY2FwZS1odG1sIiwidGV4dCIsImNsb2p1cmUuc3RyaW5nL2VzY2FwZSIsImhvcXVldC5ydW50aW1lL2giLCJob3F1ZXQucnVudGltZS9lbmQtdGFnIiwidmFyX2FyZ3MiLCJHX18yMyIsImhvcXVldC5ydW50aW1lL3htbC1hdHRyaWJ1dGUiLCJqcy9FcnJvciIsIm5hbWUiLCJ2YWx1ZSIsImVzY2FwZT8iLCJwX18yNSIsInZlY19fMjYiLCJjbGpzLmNvcmUvbnRoIiwiaG9xdWV0LnJ1bnRpbWUvcmVuZGVyLWF0dHJpYnV0ZSIsImNsanMuY29yZS9ub3QiLCJjbGpzLmNvcmUvbWFwPyIsImhvcXVldC5ydW50aW1lL3JlbmRlci1hdHRyLW1hcCIsImF0dHJzIiwiY2xqcy5jb3JlL2FwcGx5IiwiY2xqcy5jb3JlL3N0ciIsImNsanMuY29yZS9zb3J0IiwiY2xqcy5jb3JlL21hcCIsInBfXzI5IiwidmVjX18zMCIsInNlcV9fMzEiLCJjbGpzLmNvcmUvc2VxIiwiZmlyc3RfXzMyIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJob3F1ZXQucnVudGltZS9ub3JtYWxpemUtZWxlbWVudCIsInRhZyIsImNvbnRlbnQiLCJ2ZWNfXzMzIiwiXyIsImlkIiwiY2xhc3MiLCJjbGpzLmNvcmUvcmUtbWF0Y2hlcyIsInRhZy1hdHRycyIsImNsb2p1cmUuc3RyaW5nL3JlcGxhY2UiLCJtYXAtYXR0cnMiLCJjbGpzLmNvcmUvbWVyZ2UiLCJob3F1ZXQucnVudGltZS9yZW5kZXItZWxlbWVudCIsImVsZW1lbnQiLCJ2ZWNfXzM2Iiwib3JfXzEwMTE2X19hdXRvX18iLCJob3F1ZXQucnVudGltZS9yZW5kZXItaHRtbCIsImNsanMuY29yZS92ZWN0b3I/IiwiY2xqcy5jb3JlL3NlcT8iXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIGhvcXVldC5ydW50aW1lXG4gICg6cmVxdWlyZSBbY2xvanVyZS5zdHJpbmcgOmFzIGNzdHJpbmddKSlcblxuKGRlZiBeezpkb2MgXCJSZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBwYXJzZXMgYSBDU1Mtc3R5bGUgaWQgYW5kIGNsYXNzIGZyb20gYSB0YWcgbmFtZS5cIiA6cHJpdmF0ZSB0cnVlfVxuICByZS10YWcgI1wiKFteXFxzXFwuI10rKSg/OiMoW15cXHNcXC4jXSspKT8oPzpcXC4oW15cXHMjXSspKT9cIilcblxuKGRlZiBeezpkb2MgXCJDaGFyYWN0ZXJzIHRvIHJlcGxhY2Ugd2hlbiBlc2NhcGluZyBIVE1MXCIgOnByaXZhdGUgdHJ1ZX1cbiAgY2hhcmFjdGVyLWVzY2FwZXMge1xcJiBcIiZhbXA7XCJcbiAgICAgICAgICAgICAgICAgICAgIFxcPCBcIiZsdDtcIlxuICAgICAgICAgICAgICAgICAgICAgXFw+IFwiJmd0O1wiXG4gICAgICAgICAgICAgICAgICAgICBcXFwiIFwiJnF1b3Q7XCJ9KVxuXG4oZGVmIF57OmRvYyBcIkEgbGlzdCBvZiB0YWdzIHRoYXQgbmVlZCBhbiBleHBsaWNpdCBlbmRpbmcgdGFnIHdoZW4gcmVuZGVyZWQuXCJ9XG4gIGNvbnRhaW5lci10YWdzXG4gICN7XCJhXCIgXCJiXCIgXCJib2R5XCIgXCJjYW52YXNcIiBcImRkXCIgXCJkaXZcIiBcImRsXCIgXCJkdFwiIFwiZW1cIiBcImZpZWxkc2V0XCIgXCJmb3JtXCIgXCJoMVwiIFwiaDJcIiBcImgzXCJcbiAgICBcImg0XCIgXCJoNVwiIFwiaDZcIiBcImhlYWRcIiBcImh0bWxcIiBcImlcIiBcImlmcmFtZVwiIFwibGFiZWxcIiBcImxpXCIgXCJvbFwiIFwib3B0aW9uXCIgXCJwcmVcIlxuICAgIFwic2NyaXB0XCIgXCJzcGFuXCIgXCJzdHJvbmdcIiBcInN0eWxlXCIgXCJ0YWJsZVwiIFwidGV4dGFyZWFcIiBcInVsXCJ9KVxuXG4oZGVmbiBhcy1zdHIgW3hdXG4gIChpZiAob3IgKGtleXdvcmQ/IHgpIChzeW1ib2w/IHgpKVxuICAgIChuYW1lIHgpXG4gICAgKHN0ciB4KSkpXG5cbihkZWZuIGVzY2FwZS1odG1sXG4gIFwiQ2hhbmdlIHNwZWNpYWwgY2hhcmFjdGVycyBpbnRvIEhUTUwgY2hhcmFjdGVyIGVudGl0aWVzLlwiXG4gIFt0ZXh0XVxuICAoLT4gKGFzLXN0ciB0ZXh0KVxuICAgICAgKGNzdHJpbmcvZXNjYXBlIGNoYXJhY3Rlci1lc2NhcGVzKSkpXG5cbihkZWYgaCBlc2NhcGUtaHRtbCkgOyBhbGlhcyBmb3IgZXNjYXBlLWh0bWxcblxuKGRlZm4gZW5kLXRhZyBbXVxuICBcIiAvPlwiKVxuXG4oZGVmbiB4bWwtYXR0cmlidXRlXG4gIChbbmFtZSB2YWx1ZV0gKHhtbC1hdHRyaWJ1dGUgbmFtZSB2YWx1ZSB0cnVlKSlcbiAgKFtuYW1lIHZhbHVlIGVzY2FwZT9dXG4gICAoc3RyIFwiIFwiIChhcy1zdHIgbmFtZSkgXCI9XFxcIlwiIChpZiBlc2NhcGU/IChlc2NhcGUtaHRtbCB2YWx1ZSkgdmFsdWUpIFwiXFxcIlwiKSkpXG5cbihkZWNsYXJlIHJlbmRlci1hdHRyLW1hcClcblxuKGRlZm4gcmVuZGVyLWF0dHJpYnV0ZSBbW25hbWUgdmFsdWVdXVxuICAoY29uZFxuICAgICh0cnVlPyB2YWx1ZSkgKHhtbC1hdHRyaWJ1dGUgbmFtZSBuYW1lKVxuICAgIChub3QgdmFsdWUpIFwiXCJcbiAgICA6ZWxzZSAoeG1sLWF0dHJpYnV0ZSBuYW1lIChpZiAobWFwPyB2YWx1ZSkgKHJlbmRlci1hdHRyLW1hcCB2YWx1ZSkgdmFsdWUpIGZhbHNlKSkpXG5cbihkZWZuIHJlbmRlci1hdHRyLW1hcCBbYXR0cnNdXG4gIChhcHBseSBzdHJcbiAgICAoc29ydCAobWFwIHJlbmRlci1hdHRyaWJ1dGUgYXR0cnMpKSkpXG5cbihkZWZuIG5vcm1hbGl6ZS1lbGVtZW50XG4gIFwiRW5zdXJlIGEgdGFnIHZlY3RvciBpcyBvZiB0aGUgZm9ybSBbdGFnLW5hbWUgYXR0cnMgY29udGVudF0uXCJcbiAgW1t0YWcgJiBjb250ZW50XV1cbiAgKHdoZW4gKG5vdCAob3IgKGtleXdvcmQ/IHRhZykgKHN5bWJvbD8gdGFnKSAoc3RyaW5nPyB0YWcpKSlcbiAgICAodGhyb3cgKHN0ciB0YWcgXCIgaXMgbm90IGEgdmFsaWQgdGFnIG5hbWVcIikpKVxuICAobGV0IFtbXyB0YWcgaWQgY2xhc3NdIChyZS1tYXRjaGVzIHJlLXRhZyAoYXMtc3RyIHRhZykpXG4gICAgICAgIHRhZy1hdHRycyAgICAgICAgezppZCBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3MgKGlmIGNsYXNzIChjc3RyaW5nL3JlcGxhY2UgY2xhc3MgXCIuXCIgXCIgXCIpKX1cbiAgICAgICAgbWFwLWF0dHJzICAgICAgICAoZmlyc3QgY29udGVudCldXG4gICAgKGlmIChtYXA/IG1hcC1hdHRycylcbiAgICAgIFt0YWcgKG1lcmdlIHRhZy1hdHRycyBtYXAtYXR0cnMpIChuZXh0IGNvbnRlbnQpXVxuICAgICAgW3RhZyB0YWctYXR0cnMgY29udGVudF0pKSlcblxuKGRlY2xhcmUgcmVuZGVyLWh0bWwpXG5cbihkZWZuIHJlbmRlci1lbGVtZW50XG4gIFwiUmVuZGVyIGEgdGFnIHZlY3RvciBhcyBhIEhUTUwgZWxlbWVudC5cIlxuICBbZWxlbWVudF1cbiAgKGxldCBbW3RhZyBhdHRycyBjb250ZW50XSAobm9ybWFsaXplLWVsZW1lbnQgZWxlbWVudCldXG4gICAgKGlmIChvciBjb250ZW50IChjb250YWluZXItdGFncyB0YWcpKVxuICAgICAgKHN0ciBcIjxcIiB0YWcgKHJlbmRlci1hdHRyLW1hcCBhdHRycykgXCI+XCJcbiAgICAgICAgICAgKHJlbmRlci1odG1sIGNvbnRlbnQpXG4gICAgICAgICAgIFwiPC9cIiB0YWcgXCI+XCIpXG4gICAgICAoc3RyIFwiPFwiIHRhZyAocmVuZGVyLWF0dHItbWFwIGF0dHJzKSAoZW5kLXRhZykpKSkpXG5cbihkZWZuIHJlbmRlci1odG1sXG4gIFwiVHVybiBhIENsb2p1cmUgZGF0YSB0eXBlIGludG8gYSBzdHJpbmcgb2YgSFRNTC5cbiAgIEluIEhpY2N1cCwgc2VxdWVuY2VzIGFyZSBleHBhbmRlZCBvdXQgaW50byB0aGUgYm9keS4gVGhpcyBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBtYWNyb3MgbGlrZSBgZm9yYC5cIlxuICBbeF1cbiAgKGNvbmRcbiAgICAodmVjdG9yPyB4KSAocmVuZGVyLWVsZW1lbnQgeClcbiAgICAoc2VxPyB4KSAoYXBwbHkgc3RyIChtYXAgcmVuZGVyLWh0bWwgeCkpXG4gICAgOmVsc2UgKGFzLXN0ciB4KSkpXG4iXX0=