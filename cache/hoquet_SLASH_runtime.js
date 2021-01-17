goog.provide('hoquet.runtime');
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
return cljs.core.name(x);
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
/**
 * Change special characters into HTML character entities.
 */
hoquet.runtime.escape_html = (function hoquet$runtime$escape_html(text){
return clojure.string.escape(hoquet.runtime.as_str(text),hoquet.runtime.character_escapes);
});
hoquet.runtime.xml_attribute = (function hoquet$runtime$xml_attribute(var_args){
var G__13709 = arguments.length;
switch (G__13709) {
case 2:
return hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$3(name,value,true);
}));

(hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$3 = (function (name,value,escape_QMARK_){
return [" ",hoquet.runtime.as_str(name),"=\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(escape_QMARK_)?hoquet.runtime.escape_html(value):value)),"\""].join('');
}));

(hoquet.runtime.xml_attribute.cljs$lang$maxFixedArity = 3);

hoquet.runtime.render_attribute = (function hoquet$runtime$render_attribute(p__13713){
var vec__13714 = p__13713;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13714,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13714,(1),null);
if(value === true){
return hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$2(name,name);
} else {
if(cljs.core.not(value)){
return "";
} else {
return hoquet.runtime.xml_attribute.cljs$core$IFn$_invoke$arity$3(name,((cljs.core.map_QMARK_(value))?(hoquet.runtime.render_attr_map.cljs$core$IFn$_invoke$arity$1 ? hoquet.runtime.render_attr_map.cljs$core$IFn$_invoke$arity$1(value) : hoquet.runtime.render_attr_map.call(null,value)):value),true);

}
}
});
hoquet.runtime.render_attr_map = (function hoquet$runtime$render_attr_map(attrs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(hoquet.runtime.render_attribute,attrs)));
});
/**
 * Ensure a tag vector is of the form [tag-name attrs content].
 */
hoquet.runtime.normalize_element = (function hoquet$runtime$normalize_element(p__13720){
var vec__13722 = p__13720;
var seq__13723 = cljs.core.seq(vec__13722);
var first__13724 = cljs.core.first(seq__13723);
var seq__13723__$1 = cljs.core.next(seq__13723);
var tag = first__13724;
var content = seq__13723__$1;
if((!((((tag instanceof cljs.core.Keyword)) || ((tag instanceof cljs.core.Symbol)) || (typeof tag === 'string'))))){
throw [cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)," is not a valid tag name"].join('');
} else {
}

var vec__13726 = cljs.core.re_matches(hoquet.runtime.re_tag,hoquet.runtime.as_str(tag));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13726,(0),null);
var tag__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13726,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13726,(2),null);
var class$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13726,(3),null);
var tag_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(class$)?clojure.string.replace(class$,"."," "):null)], null);
var map_attrs = cljs.core.first(content);
if(cljs.core.map_QMARK_(map_attrs)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tag_attrs,map_attrs], 0)),cljs.core.next(content)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag__$1,tag_attrs,content], null);
}
});
/**
 * Render a tag vector as a HTML element.
 */
hoquet.runtime.render_element = (function hoquet$runtime$render_element(element){
var vec__13732 = hoquet.runtime.normalize_element(element);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13732,(0),null);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13732,(1),null);
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13732,(2),null);
if(cljs.core.truth_((function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (hoquet.runtime.container_tags.cljs$core$IFn$_invoke$arity$1 ? hoquet.runtime.container_tags.cljs$core$IFn$_invoke$arity$1(tag) : hoquet.runtime.container_tags.call(null,tag));
}
})())){
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hoquet.runtime.render_attr_map(attrs)),">",cljs.core.str.cljs$core$IFn$_invoke$arity$1((hoquet.runtime.render_html.cljs$core$IFn$_invoke$arity$1 ? hoquet.runtime.render_html.cljs$core$IFn$_invoke$arity$1(content) : hoquet.runtime.render_html.call(null,content))),"</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),">"].join('');
} else {
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hoquet.runtime.render_attr_map(attrs))," />"].join('');
}
});
/**
 * Turn a Clojure data type into a string of HTML.
 * In Hiccup, sequences are expanded out into the body. This is particularly useful for macros like `for`.
 */
hoquet.runtime.render_html = (function hoquet$runtime$render_html(x){
if(cljs.core.vector_QMARK_(x)){
return hoquet.runtime.render_element(x);
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(hoquet.runtime.render_html,x));
} else {
return hoquet.runtime.as_str(x);

}
}
});

//# sourceMappingURL=hoquet.runtime.js.map
