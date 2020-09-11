// Compiled by ClojureScript 1.10.597
goog.provide("hicada.normalize");
/**
 * Removes all map entries where the value of the entry is empty.
 */
hicada.normalize.compact_map = (function hicada$normalize$compact_map(m){
return cljs.core.reduce.call(null,(function (m__$1,k){
var v = cljs.core.get.call(null,m__$1,k);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m__$1,k);
} else {
return m__$1;
}
}),m,cljs.core.keys.call(null,m));
});
hicada.normalize.class_name = (function hicada$normalize$class_name(x){
if(typeof x === 'string'){
return x;
} else {
if((x instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,x);
} else {
return x;

}
}
});
/**
 * Normalize `class` into a vector of classes (keywords will be stringified).
 */
hicada.normalize.vec_PLUS_stringify_class = (function hicada$normalize$vec_PLUS_stringify_class(klass){
if((klass == null)){
return null;
} else {
if(cljs.core.list_QMARK_.call(null,klass)){
if((cljs.core.first.call(null,klass) instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass], null);
} else {
return cljs.core.map.call(null,hicada.normalize.class_name,klass);
}
} else {
if((klass instanceof cljs.core.Symbol)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass], null);
} else {
if(typeof klass === 'string'){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass], null);
} else {
if((klass instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hicada.normalize.class_name.call(null,klass)], null);
} else {
if(((cljs.core.set_QMARK_.call(null,klass)) || (cljs.core.sequential_QMARK_.call(null,klass)))){
return cljs.core.mapv.call(null,hicada.normalize.class_name,klass);
} else {
if(cljs.core.map_QMARK_.call(null,klass)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [klass], null);
} else {
return klass;

}
}
}
}
}
}
}
});
/**
 * Normalize the :class, :class-name and :className elements
 */
hicada.normalize.attributes = (function hicada$normalize$attributes(attrs){
return cljs.core.reduce.call(null,(function (attrs__$1,kw){
var temp__9714__auto__ = cljs.core.get.call(null,attrs__$1,kw);
if((temp__9714__auto__ == null)){
return attrs__$1;
} else {
var m = temp__9714__auto__;
return cljs.core.update.call(null,cljs.core.dissoc.call(null,attrs__$1,kw),new cljs.core.Keyword(null,"class","class",(-2030961996)),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentVector.EMPTY),hicada.normalize.vec_PLUS_stringify_class.call(null,m));
}
}),attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",(-2030961996)),new cljs.core.Keyword(null,"className","className",(-1983287057)),new cljs.core.Keyword(null,"class-name","class-name",(945142584))], null));
});
/**
 * Like clojure.core/merge but concatenate :class entries.
 */
hicada.normalize.merge_with_class = (function hicada$normalize$merge_with_class(m0,m1){
var m0__$1 = hicada.normalize.attributes.call(null,m0);
var m1__$1 = hicada.normalize.attributes.call(null,m1);
var classes = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.comp.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"class","class",(-2030961996)))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m0__$1,m1__$1], null));
var G__34 = cljs.core.conj.call(null,m0__$1,m1__$1);
if((!(cljs.core.empty_QMARK_.call(null,classes)))){
return cljs.core.assoc.call(null,G__34,new cljs.core.Keyword(null,"class","class",(-2030961996)),classes);
} else {
return G__34;
}
});
/**
 * Strip the # and . characters from the beginning of `s`.
 */
hicada.normalize.strip_css = (function hicada$normalize$strip_css(s){
if((!((s == null)))){
if(cljs.core.truth_(s.startsWith("."))){
return cljs.core.subs.call(null,s,(1));
} else {
if(cljs.core.truth_(s.startsWith("#"))){
return cljs.core.subs.call(null,s,(1));
} else {
return s;

}
}
} else {
return null;
}
});
/**
 * Match `s` as a CSS tag and return a vector of tag name, CSS id and
 *   CSS classes.
 */
hicada.normalize.match_tag = (function hicada$normalize$match_tag(s){
var matches = cljs.core.re_seq.call(null,/[#.]?[^#.]+/,cljs.core.subs.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),(1)));
var vec__35 = ((cljs.core.empty_QMARK_.call(null,matches))?(function(){throw cljs.core.ex_info.call(null,["Can't match CSS tag: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),s], null))})():(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["#",null,".",null], null), null).call(null,cljs.core.ffirst.call(null,matches)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["div",matches], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,matches),cljs.core.rest.call(null,matches)], null)
));
var tag_name = cljs.core.nth.call(null,vec__35,(0),null);
var names = cljs.core.nth.call(null,vec__35,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,tag_name),cljs.core.first.call(null,cljs.core.map.call(null,hicada.normalize.strip_css,cljs.core.filter.call(null,(function (p1__2_SHARP_){
return cljs.core._EQ_.call(null,"#",cljs.core.first.call(null,p1__2_SHARP_));
}),names))),cljs.core.vec.call(null,cljs.core.map.call(null,hicada.normalize.strip_css,cljs.core.filter.call(null,(function (p1__3_SHARP_){
return cljs.core._EQ_.call(null,".",cljs.core.first.call(null,p1__3_SHARP_));
}),names)))], null);
});
/**
 * Normalize the children of a HTML element.
 */
hicada.normalize.children = (function hicada$normalize$children(x){
return cljs.core.filterv.call(null,cljs.core.some_QMARK_,((typeof x === 'string')?(new cljs.core.List(null,x,null,(1),null)):((hicada.util.element_QMARK_.call(null,x))?(new cljs.core.List(null,x,null,(1),null)):((((cljs.core.list_QMARK_.call(null,x)) && ((x instanceof cljs.core.Symbol))))?(new cljs.core.List(null,x,null,(1),null)):((cljs.core.list_QMARK_.call(null,x))?x:((((cljs.core.sequential_QMARK_.call(null,x)) && (cljs.core.sequential_QMARK_.call(null,cljs.core.first.call(null,x))) && ((!(typeof cljs.core.first.call(null,x) === 'string'))) && ((!(hicada.util.element_QMARK_.call(null,cljs.core.first.call(null,x))))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),(1)))))?hicada.normalize.children.call(null,cljs.core.first.call(null,x)):((cljs.core.sequential_QMARK_.call(null,x))?x:(new cljs.core.List(null,x,null,(1),null))
)))))));
});
/**
 * Given:
 *   [:div.x.y#id (other)]
 *   Returns:
 *   [:div {:id "id"
 *       :class ["x" "y"]}
 *  (other)]
 */
hicada.normalize.element = (function hicada$normalize$element(p__38){
var vec__39 = p__38;
var seq__40 = cljs.core.seq.call(null,vec__39);
var first__41 = cljs.core.first.call(null,seq__40);
var seq__40__$1 = cljs.core.next.call(null,seq__40);
var tag = first__41;
var content = seq__40__$1;
if((!((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))))){
throw cljs.core.ex_info.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid element name."].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",(-1290361223)),tag,new cljs.core.Keyword(null,"content","content",(15833224)),content], null));
} else {
}

var vec__42 = hicada.normalize.match_tag.call(null,tag);
var tag__$1 = cljs.core.nth.call(null,vec__42,(0),null);
var id = cljs.core.nth.call(null,vec__42,(1),null);
var klass = cljs.core.nth.call(null,vec__42,(2),null);
var tag_attrs = hicada.normalize.compact_map.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",(-1388402092)),id,new cljs.core.Keyword(null,"class","class",(-2030961996)),klass], null));
var map_attrs = cljs.core.first.call(null,content);
if(cljs.core.map_QMARK_.call(null,map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,hicada.normalize.merge_with_class.call(null,tag_attrs,map_attrs),hicada.normalize.children.call(null,cljs.core.next.call(null,content))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,hicada.normalize.attributes.call(null,tag_attrs),hicada.normalize.children.call(null,content)], null);
}
});

//# sourceURL=hicada/normalize.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGljYWRhL25vcm1hbGl6ZS5qcyIsInNvdXJjZXMiOlsibm9ybWFsaXplLmNsanMiXSwibGluZUNvdW50IjoxNzAsIm1hcHBpbmdzIjoiO0FBT0E7OzsrQkFBQSwvQkFBTUEsc0VBRUhDO0FBRkgsQUFHRSxPQUFDQywyQkFDQyxXQUFLRCxNQUFFRTtBQUFQLEFBQ0UsSUFBTUMsSUFBRSxBQUFDQyx3QkFBSUosTUFBRUU7QUFBZixBQUNFLEdBQUksQUFBQ0csaUNBQU9GO0FBQ1YsT0FBQ0csMkJBQU9OLE1BQUVFOztBQUFHRjs7R0FDbkJBLEVBQUUsQUFBQ08seUJBQUtQOztBQUVaLDhCQUFBLDlCQUFNUSxvRUFDSEM7QUFESCxBQUVFLEdBQ0UsT0FBU0E7QUFBR0E7O0FBRGQsR0FFRSxjQUFBQyxiQUFVRDtBQUFHLE9BQUNFLHlCQUFLRjs7QUFGckIsQUFHUUE7Ozs7O0FBRVY7Ozs0Q0FBQSw1Q0FBTUcsZ0dBRUhDO0FBRkgsQUFHRSxHQUNFLFVBQUEsVEFBTUE7QUFEUjs7QUFBQSxHQUlFLEFBQUNDLGdDQUFNRDtBQUNQLEdBQUksNkNBQUFFLDVDQUFTLEFBQUNDLDBCQUFNSDtBQUFwQiwwRkFDR0E7O0FBQ0QsT0FBQ0ksd0JBQUlULDRCQUFXSzs7O0FBUHBCLEdBU0Usa0JBQUFFLGpCQUFTRjtBQVRYLDBGQVVHQTs7QUFWSCxHQVlFLE9BQVNBO0FBWlgsMEZBYUdBOztBQWJILEdBZUUsa0JBQUFILGpCQUFVRztBQWZaLDBGQWdCRyxBQUFDTCxzQ0FBV0s7O0FBaEJmLEdBa0JFLEVBQUksQUFBQ0ssK0JBQUtMLFlBQ04sQUFBQ00sc0NBQVlOO0FBQ2pCLE9BQUNPLHlCQUFLWiw0QkFBV0s7O0FBcEJuQixHQXNCRSxBQUFDUSwrQkFBS1I7QUF0QlIsMEZBdUJHQTs7QUF2QkgsQUF5QlFBOzs7Ozs7Ozs7O0FBR1Y7Ozs4QkFBQSw5QkFBTVMsb0VBRUhDO0FBRkgsQUFHRSxPQUFDdEIsMkJBQU8sV0FBS3NCLFVBQU1DO0FBQVgsQUFDRSxJQUFBQyxxQkFBWSxBQUFD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VixJQUNiQSxFQUNNLEtBQUFpRCxlQUFBLE9BQUEsS0FBQSxJQUFBLFhBQU1qRCwvekJBQ2QsT0FBQ29ELDRCQUFRQzs7O0FBRWhCOzs7Ozs7OzsyQkFBQSxtQ0FBQUMsOURBQU1NO0FBQU4sQUFBQSxJQUFBTCxVQUFBRDtJQUFBRSxVQUFBLEFBQUFDLHdCQUFBRjtJQUFBRyxZQUFBLEFBQUFuRCwwQkFBQWlEO0lBQUFBLGNBQUEsQUFBQUcseUJBQUFIO1VBQUFFLE5BT0lHO2NBUEpMLFZBT1VNO0FBUFYsQUFRRSxHQUFNLEdBQUssRUFBSSxnQkFBQTdELGZBQVU0RCx1Q0FBSyxnQkFBQXZELGZBQVN1RCxzQ0FBSyxPQUFTQTtBQUFyRCxBQUNFLE1BQU8sd0hBQUEsMkNBQUEsMERBQUEsN05BQUN0Qiw0QkFBUSxrREFBQSxMQUFLc0IsZ0pBQTJDQSwrREFBYUM7O0FBRC9FOztBQUVBLElBQUFDLFVBQXFCLEFBQUMvQixxQ0FBVTZCO2NBQWhDLEFBQUEzQix3QkFBQTZCLFFBQUEsSUFBQSw5Q0FBT0Y7U0FBUCxBQUFBM0Isd0JBQUE2QixRQUFBLElBQUEsekNBQVdDO1lBQVgsQUFBQTlCLHdCQUFBNkIsUUFBQSxJQUFBLDVDQUFjM0Q7SUFDUjZELFlBQVUsdUNBQUEsMkNBQUEsdURBQUEseklBQUMzRSxzSUFBaUIwRSw2REFBVTVEO0lBQ3RDOEQsWUFBVSxBQUFDM0QsMEJBQU11RDtBQUZ2QixBQUdFLEdBQUksQUFBQ2xELCtCQUFLc0Q7QUFBViwwRkFDR0wsUUFDQSxBQUFDekMsNENBQWlCNkMsVUFBVUMsV0FDNUIsQUFBQ2xCLG9DQUFTLEFBQUNXLHlCQUFLRzs7QUFIbkIsMEZBSUdELFFBQ0EsQUFBQ2hELHNDQUFXb0QsV0FDWixBQUFDakIsb0NBQVNjIiwibmFtZXMiOlsiaGljYWRhLm5vcm1hbGl6ZS9jb21wYWN0LW1hcCIsIm0iLCJjbGpzLmNvcmUvcmVkdWNlIiwiayIsInYiLCJjbGpzLmNvcmUvZ2V0IiwiY2xqcy5jb3JlL2VtcHR5PyIsImNsanMuY29yZS9kaXNzb2MiLCJjbGpzLmNvcmUva2V5cyIsImhpY2FkYS5ub3JtYWxpemUvY2xhc3MtbmFtZSIsIngiLCJjbGpzLmNvcmUvS2V5d29yZCIsImNsanMuY29yZS9uYW1lIiwiaGljYWRhLm5vcm1hbGl6ZS92ZWMrc3RyaW5naWZ5LWNsYXNzIiwia2xhc3MiLCJjbGpzLmNvcmUvbGlzdD8iLCJjbGpzLmNvcmUvU3ltYm9sIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL21hcCIsImNsanMuY29yZS9zZXQ/IiwiY2xqcy5jb3JlL3NlcXVlbnRpYWw/IiwiY2xqcy5jb3JlL21hcHYiLCJjbGpzLmNvcmUvbWFwPyIsImhpY2FkYS5ub3JtYWxpemUvYXR0cmlidXRlcyIsImF0dHJzIiwia3ciLCJ0ZW1wX185NzE0X19hdXRvX18iLCJjbGpzLmNvcmUvdXBkYXRlIiwiY2xqcy5jb3JlL2ZuaWwiLCJjbGpzLmNvcmUvaW50byIsImhpY2FkYS5ub3JtYWxpemUvbWVyZ2Utd2l0aC1jbGFzcyIsIm0wIiwibTEiLCJjbGFzc2VzIiwiY2xqcy5jb3JlL2NvbXAiLCJjbGpzLmNvcmUvbWFwY2F0IiwiR19fMzQiLCJjbGpzLmNvcmUvY29uaiIsImNsanMuY29yZS9hc3NvYyIsImhpY2FkYS5ub3JtYWxpemUvc3RyaXAtY3NzIiwicyIsImNsanMuY29yZS9zdWJzIiwiaGljYWRhLm5vcm1hbGl6ZS9tYXRjaC10YWciLCJ2ZWNfXzM1IiwiY2xqcy5jb3JlL250aCIsIm1hdGNoZXMiLCJjbGpzLmNvcmUvcmUtc2VxIiwidGFnLW5hbWUiLCJuYW1lcyIsImNsanMuY29yZS9leC1pbmZvIiwiY2xqcy5jb3JlL2ZmaXJzdCIsImNsanMuY29yZS9yZXN0IiwiY2xqcy5jb3JlL2tleXdvcmQiLCJwMV9fMiMiLCJjbGpzLmNvcmUvZmlsdGVyIiwiY2xqcy5jb3JlLz0iLCJjbGpzLmNvcmUvdmVjIiwicDFfXzMjIiwiaGljYWRhLm5vcm1hbGl6ZS9jaGlsZHJlbiIsImNsanMuY29yZS9MaXN0IiwiaGljYWRhLnV0aWwvZWxlbWVudD8iLCJjbGpzLmNvcmUvY291bnQiLCJjbGpzLmNvcmUvZmlsdGVydiIsImNsanMuY29yZS9zb21lPyIsInBfXzM4IiwidmVjX18zOSIsInNlcV9fNDAiLCJjbGpzLmNvcmUvc2VxIiwiZmlyc3RfXzQxIiwiY2xqcy5jb3JlL25leHQiLCJoaWNhZGEubm9ybWFsaXplL2VsZW1lbnQiLCJ0YWciLCJjb250ZW50IiwidmVjX180MiIsImlkIiwidGFnLWF0dHJzIiwibWFwLWF0dHJzIl0sInNvdXJjZXNDb250ZW50IjpbIihucyBoaWNhZGEubm9ybWFsaXplXG4gIFwiXG4gIE1vc3RseSBmcm9tIHNhYmxvbm8gKyBoaWNjdXAgcHJvamVjdC5cbiAgXCJcbiAgKDpyZXF1aXJlXG4gICAgW2hpY2FkYS51dGlsIDphcyB1dGlsXSkpXG5cbihkZWZuIGNvbXBhY3QtbWFwXG4gIFwiUmVtb3ZlcyBhbGwgbWFwIGVudHJpZXMgd2hlcmUgdGhlIHZhbHVlIG9mIHRoZSBlbnRyeSBpcyBlbXB0eS5cIlxuICBbbV1cbiAgKHJlZHVjZVxuICAgIChmbiBbbSBrXVxuICAgICAgKGxldCBbdiAoZ2V0IG0gayldXG4gICAgICAgIChpZiAoZW1wdHk/IHYpXG4gICAgICAgICAgKGRpc3NvYyBtIGspIG0pKSlcbiAgICBtIChrZXlzIG0pKSlcblxuKGRlZm4gY2xhc3MtbmFtZVxuICBbeF1cbiAgKGNvbmRcbiAgICAoc3RyaW5nPyB4KSB4XG4gICAgKGtleXdvcmQ/IHgpIChuYW1lIHgpXG4gICAgOmVsc2UgeCkpXG5cbihkZWZuIHZlYytzdHJpbmdpZnktY2xhc3NcbiAgXCJOb3JtYWxpemUgYGNsYXNzYCBpbnRvIGEgdmVjdG9yIG9mIGNsYXNzZXMgKGtleXdvcmRzIHdpbGwgYmUgc3RyaW5naWZpZWQpLlwiXG4gIFtrbGFzc11cbiAgKGNvbmRcbiAgICAobmlsPyBrbGFzcylcbiAgICBuaWxcblxuICAgIChsaXN0PyBrbGFzcylcbiAgICAoaWYgKHN5bWJvbD8gKGZpcnN0IGtsYXNzKSlcbiAgICAgIFtrbGFzc11cbiAgICAgIChtYXAgY2xhc3MtbmFtZSBrbGFzcykpXG5cbiAgICAoc3ltYm9sPyBrbGFzcylcbiAgICBba2xhc3NdXG5cbiAgICAoc3RyaW5nPyBrbGFzcylcbiAgICBba2xhc3NdXG5cbiAgICAoa2V5d29yZD8ga2xhc3MpXG4gICAgWyhjbGFzcy1uYW1lIGtsYXNzKV1cblxuICAgIChvciAoc2V0PyBrbGFzcylcbiAgICAgICAgKHNlcXVlbnRpYWw/IGtsYXNzKSlcbiAgICAobWFwdiBjbGFzcy1uYW1lIGtsYXNzKVxuXG4gICAgKG1hcD8ga2xhc3MpXG4gICAgW2tsYXNzXVxuXG4gICAgOmVsc2Uga2xhc3MpKVxuI18odmVjK3N0cmluZ2lmeS1jbGFzcyA6Zm9vKVxuXG4oZGVmbiBhdHRyaWJ1dGVzXG4gIFwiTm9ybWFsaXplIHRoZSA6Y2xhc3MsIDpjbGFzcy1uYW1lIGFuZCA6Y2xhc3NOYW1lIGVsZW1lbnRzXCJcbiAgW2F0dHJzXVxuICAocmVkdWNlIChmbiBbYXR0cnMga3ddXG4gICAgICAgICAgICAoaWYtc29tZSBbbSAoZ2V0IGF0dHJzIGt3KV1cbiAgICAgICAgICAgICAgKC0+IGF0dHJzXG4gICAgICAgICAgICAgICAgICAoZGlzc29jIGt3KVxuICAgICAgICAgICAgICAgICAgKHVwZGF0ZSA6Y2xhc3MgKGZuaWwgaW50byBbXSkgKHZlYytzdHJpbmdpZnktY2xhc3MgbSkpKVxuICAgICAgICAgICAgICBhdHRycykpXG4gICAgICAgICAgYXR0cnMgWzpjbGFzcyA6Y2xhc3NOYW1lIDpjbGFzcy1uYW1lXSkpXG5cbihkZWZuIG1lcmdlLXdpdGgtY2xhc3NcbiAgXCJMaWtlIGNsb2p1cmUuY29yZS9tZXJnZSBidXQgY29uY2F0ZW5hdGUgOmNsYXNzIGVudHJpZXMuXCJcbiAgW20wIG0xXVxuICAobGV0IFttMCAoYXR0cmlidXRlcyBtMClcbiAgICAgICAgbTEgKGF0dHJpYnV0ZXMgbTEpXG4gICAgICAgIGNsYXNzZXMgKGludG8gW10gKGNvbXAgKG1hcGNhdCA6Y2xhc3MpKSBbbTAgbTFdKV1cbiAgICAoY29uZC0+IChjb25qIG0wIG0xKVxuICAgICAgKG5vdCAoZW1wdHk/IGNsYXNzZXMpKVxuICAgICAgKGFzc29jIDpjbGFzcyBjbGFzc2VzKSkpKVxuI18obWVyZ2Utd2l0aC1jbGFzcyB7OmNsYXNzIFwiYVwifSB7OmNsYXNzIFtcImJcIl19KVxuXG4oZGVmbiBzdHJpcC1jc3NcbiAgXCJTdHJpcCB0aGUgIyBhbmQgLiBjaGFyYWN0ZXJzIGZyb20gdGhlIGJlZ2lubmluZyBvZiBgc2AuXCJcbiAgW3NdXG4gICh3aGVuIChzb21lPyBzKVxuICAgIChjb25kXG4gICAgICAoLnN0YXJ0c1dpdGggcyBcIi5cIikgKHN1YnMgcyAxKVxuICAgICAgKC5zdGFydHNXaXRoIHMgXCIjXCIpIChzdWJzIHMgMSlcbiAgICAgIDplbHNlIHMpKSlcbiNfKHN0cmlwLWNzcyBcIiNmb29cIilcbiNfKHN0cmlwLWNzcyBcIi5mb29cIilcblxuKGRlZm4gbWF0Y2gtdGFnXG4gIFwiTWF0Y2ggYHNgIGFzIGEgQ1NTIHRhZyBhbmQgcmV0dXJuIGEgdmVjdG9yIG9mIHRhZyBuYW1lLCBDU1MgaWQgYW5kXG4gIENTUyBjbGFzc2VzLlwiXG4gIFtzXVxuICAobGV0IFttYXRjaGVzIChyZS1zZXEgI1wiWyMuXT9bXiMuXStcIiAoc3VicyAoc3RyIHMpIDEpKVxuICAgICAgICBbdGFnLW5hbWUgbmFtZXNdXG4gICAgICAgIChjb25kIChlbXB0eT8gbWF0Y2hlcylcbiAgICAgICAgICAgICAgKHRocm93IChleC1pbmZvIChzdHIgXCJDYW4ndCBtYXRjaCBDU1MgdGFnOiBcIiBzKSB7OnRhZyBzfSkpXG4gICAgICAgICAgICAgICgje1xcIyBcXC59IChmZmlyc3QgbWF0Y2hlcykpIDs7IHNob3J0aGFuZCBmb3IgZGl2XG4gICAgICAgICAgICAgIFtcImRpdlwiIG1hdGNoZXNdXG4gICAgICAgICAgICAgIDpkZWZhdWx0XG4gICAgICAgICAgICAgIFsoZmlyc3QgbWF0Y2hlcykgKHJlc3QgbWF0Y2hlcyldKV1cbiAgICBbKGtleXdvcmQgdGFnLW5hbWUpXG4gICAgIChmaXJzdCAobWFwIHN0cmlwLWNzcyAoZmlsdGVyICMoPSBcXCMgKGZpcnN0ICUxKSkgbmFtZXMpKSlcbiAgICAgKHZlYyAobWFwIHN0cmlwLWNzcyAoZmlsdGVyICMoPSBcXC4gKGZpcnN0ICUxKSkgbmFtZXMpKSldKSlcbiNfKG1hdGNoLXRhZyA6LmZvby5iYXIjc29tZS1pZClcbiNfKG1hdGNoLXRhZyA6Zm9vL3NwYW4uZm9vLmJhciNzb21lLWlkLmhpKVxuXG4oZGVmbiBjaGlsZHJlblxuICBcIk5vcm1hbGl6ZSB0aGUgY2hpbGRyZW4gb2YgYSBIVE1MIGVsZW1lbnQuXCJcbiAgW3hdXG4gICgtPj4gKGNvbmRcbiAgICAgICAgIChzdHJpbmc/IHgpXG4gICAgICAgICAobGlzdCB4KVxuXG4gICAgICAgICAodXRpbC9lbGVtZW50PyB4KVxuICAgICAgICAgKGxpc3QgeClcblxuICAgICAgICAgKGFuZCAobGlzdD8geClcbiAgICAgICAgICAgICAgKHN5bWJvbD8geCkpXG4gICAgICAgICAobGlzdCB4KVxuXG4gICAgICAgICAobGlzdD8geClcbiAgICAgICAgIHhcblxuICAgICAgICAgKGFuZCAoc2VxdWVudGlhbD8geClcbiAgICAgICAgICAgICAgKHNlcXVlbnRpYWw/IChmaXJzdCB4KSlcbiAgICAgICAgICAgICAgKG5vdCAoc3RyaW5nPyAoZmlyc3QgeCkpKVxuICAgICAgICAgICAgICAobm90ICh1dGlsL2VsZW1lbnQ/IChmaXJzdCB4KSkpXG4gICAgICAgICAgICAgICg9IChjb3VudCB4KSAxKSlcbiAgICAgICAgIChjaGlsZHJlbiAoZmlyc3QgeCkpXG5cbiAgICAgICAgIChzZXF1ZW50aWFsPyB4KVxuICAgICAgICAgeFxuICAgICAgICAgOmVsc2UgKGxpc3QgeCkpXG4gICAgICAgKGZpbHRlcnYgc29tZT8pKSlcblxuKGRlZm4gZWxlbWVudFxuICBcIkdpdmVuOlxuICBbOmRpdi54LnkjaWQgKG90aGVyKV1cbiAgUmV0dXJuczpcbiAgWzpkaXYgezppZCBcXFwiaWRcXFwiXG4gICAgICAgICA6Y2xhc3MgW1xcXCJ4XFxcIiBcXFwieVxcXCJdfVxuICAgIChvdGhlcildXCJcbiAgW1t0YWcgJiBjb250ZW50XV1cbiAgKHdoZW4gKG5vdCAob3IgKGtleXdvcmQ/IHRhZykgKHN5bWJvbD8gdGFnKSAoc3RyaW5nPyB0YWcpKSlcbiAgICAodGhyb3cgKGV4LWluZm8gKHN0ciB0YWcgXCIgaXMgbm90IGEgdmFsaWQgZWxlbWVudCBuYW1lLlwiKSB7OnRhZyB0YWcgOmNvbnRlbnQgY29udGVudH0pKSlcbiAgKGxldCBbW3RhZyBpZCBrbGFzc10gKG1hdGNoLXRhZyB0YWcpXG4gICAgICAgIHRhZy1hdHRycyAoY29tcGFjdC1tYXAgezppZCBpZCA6Y2xhc3Mga2xhc3N9KVxuICAgICAgICBtYXAtYXR0cnMgKGZpcnN0IGNvbnRlbnQpXVxuICAgIChpZiAobWFwPyBtYXAtYXR0cnMpXG4gICAgICBbdGFnXG4gICAgICAgKG1lcmdlLXdpdGgtY2xhc3MgdGFnLWF0dHJzIG1hcC1hdHRycylcbiAgICAgICAoY2hpbGRyZW4gKG5leHQgY29udGVudCkpXVxuICAgICAgW3RhZ1xuICAgICAgIChhdHRyaWJ1dGVzIHRhZy1hdHRycylcbiAgICAgICAoY2hpbGRyZW4gY29udGVudCldKSkpXG4jXyhlbGVtZW50IFs6ZGl2I2ZvbyAnYV0pXG4jXyhlbGVtZW50IFs6ZGl2LmEjZm9vXSlcbiNfKGVsZW1lbnQgWzpoMS5iIHs6Y2xhc3NOYW1lIFwiYVwifV0pXG5cbiJdfQ==