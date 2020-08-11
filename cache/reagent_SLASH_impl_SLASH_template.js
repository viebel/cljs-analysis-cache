// Compiled by ClojureScript 1.10.597
goog.provide("reagent.impl.template");
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
reagent.impl.template.NativeWrapper = (function (tag,id,className){
this.tag = tag;
this.id = id;
this.className = className;
});

(reagent.impl.template.NativeWrapper.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",(350170304),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"className","className",(-342755530),null)], null);
}));

(reagent.impl.template.NativeWrapper.cljs$lang$type = true);

(reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "reagent.impl.template/NativeWrapper");

(reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.impl.template/NativeWrapper");
}));

/**
 * Positional factory function for reagent.impl.template/NativeWrapper.
 */
reagent.impl.template.__GT_NativeWrapper = (function reagent$impl$template$__GT_NativeWrapper(tag,id,className){
return (new reagent.impl.template.NativeWrapper(tag,id,className));
});

reagent.impl.template.adapt_react_class = (function reagent$impl$template$adapt_react_class(c){
return reagent.impl.template.__GT_NativeWrapper.call(null,c,null,null);
});
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((reagent.impl.util.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return ((reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof reagent.impl.template.NativeWrapper)));
});
reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
reagent.impl.template.cache_get = (function reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return goog.object.get(o,k);
} else {
return null;
}
});
reagent.impl.template.cached_prop_name = (function reagent$impl$template$cached_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__9714__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__9714__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
goog.object.set(reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__9714__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.kv_conv = (function reagent$impl$template$kv_conv(o,k,v){
var G__357 = o;
goog.object.set(G__357,reagent.impl.template.cached_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__357;
});
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__358__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__358 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__359__i = 0, G__359__a = new Array(arguments.length -  0);
while (G__359__i < G__359__a.length) {G__359__a[G__359__i] = arguments[G__359__i + 0]; ++G__359__i;}
  args = new cljs.core.IndexedSeq(G__359__a,0,null);
} 
return G__358__delegate.call(this,args);};
G__358.cljs$lang$maxFixedArity = 0;
G__358.cljs$lang$applyTo = (function (arglist__360){
var args = cljs.core.seq(arglist__360);
return G__358__delegate(args);
});
G__358.cljs$core$IFn$_invoke$arity$variadic = G__358__delegate;
return G__358;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
reagent.impl.template.custom_prop_name_cache = ({});
reagent.impl.template.cached_custom_prop_name = (function reagent$impl$template$cached_custom_prop_name(k){
if(reagent.impl.util.named_QMARK_.call(null,k)){
var temp__9714__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k));
if((temp__9714__auto__ == null)){
var v = reagent.impl.util.dash_to_prop_name.call(null,k);
goog.object.set(reagent.impl.template.custom_prop_name_cache,cljs.core.name.call(null,k),v);

return v;
} else {
var k_SINGLEQUOTE_ = temp__9714__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
reagent.impl.template.custom_kv_conv = (function reagent$impl$template$custom_kv_conv(o,k,v){
var G__361 = o;
goog.object.set(G__361,reagent.impl.template.cached_custom_prop_name.call(null,k),reagent.impl.template.convert_prop_value.call(null,v));

return G__361;
});
reagent.impl.template.convert_custom_prop_value = (function reagent$impl$template$convert_custom_prop_value(x){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,reagent.impl.template.custom_kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__362__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__363__i = 0, G__363__a = new Array(arguments.length -  0);
while (G__363__i < G__363__a.length) {G__363__a[G__363__i] = arguments[G__363__i + 0]; ++G__363__i;}
  args = new cljs.core.IndexedSeq(G__363__a,0,null);
} 
return G__362__delegate.call(this,args);};
G__362.cljs$lang$maxFixedArity = 0;
G__362.cljs$lang$applyTo = (function (arglist__364){
var args = cljs.core.seq(arglist__364);
return G__362__delegate(args);
});
G__362.cljs$core$IFn$_invoke$arity$variadic = G__362__delegate;
return G__362;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
/**
 * Takes the id and class from tag keyword, and adds them to the
 *   other props. Parsed tag is JS object with :id and :class properties.
 */
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,id_class){
var id = id_class.id;
var class$ = id_class.className;
var G__365 = props;
var G__365__$1 = (((((!((id == null)))) && ((new cljs.core.Keyword(null,"id","id",(-1388402092)).cljs$core$IFn$_invoke$arity$1(props) == null))))?cljs.core.assoc.call(null,G__365,new cljs.core.Keyword(null,"id","id",(-1388402092)),id):G__365);
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__365__$1,new cljs.core.Keyword(null,"class","class",(-2030961996)),reagent.impl.util.class_names.call(null,class$,(function (){var or__10116__auto__ = new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return new cljs.core.Keyword(null,"className","className",(-1983287057)).cljs$core$IFn$_invoke$arity$1(props);
}
})()));
} else {
return G__365__$1;
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
var class$ = new cljs.core.Keyword(null,"class","class",(-2030961996)).cljs$core$IFn$_invoke$arity$1(props);
var props__$1 = reagent.impl.template.set_id_class.call(null,(function (){var G__366 = props;
if(cljs.core.truth_(class$)){
return cljs.core.assoc.call(null,G__366,new cljs.core.Keyword(null,"class","class",(-2030961996)),reagent.impl.util.class_names.call(null,class$));
} else {
return G__366;
}
})(),id_class);
if(cljs.core.truth_(id_class.custom)){
return reagent.impl.template.convert_custom_prop_value.call(null,props__$1);
} else {
return reagent.impl.template.convert_prop_value.call(null,props__$1);
}
});
reagent.impl.template.make_element = (function reagent$impl$template$make_element(this$,argv,component,jsprops,first_child){
var G__367 = (cljs.core.count.call(null,argv) - first_child);
switch (G__367) {
case (0):
return cljsjs.react.createElement(component,jsprops);

break;
case (1):
return cljsjs.react.createElement(component,jsprops,reagent.impl.protocols.as_element.call(null,this$,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return cljsjs.react.createElement.apply(null,cljs.core.reduce_kv.call(null,(function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.protocols.as_element.call(null,this$,v));
} else {
}

return a;
}),[component,jsprops],argv));

}
});

/**
* @constructor
*/
reagent.impl.template.HiccupTag = (function (tag,id,className,custom){
this.tag = tag;
this.id = id;
this.className = className;
this.custom = custom;
});

(reagent.impl.template.HiccupTag.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",(350170304),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"className","className",(-342755530),null),new cljs.core.Symbol(null,"custom","custom",(1980683475),null)], null);
}));

(reagent.impl.template.HiccupTag.cljs$lang$type = true);

(reagent.impl.template.HiccupTag.cljs$lang$ctorStr = "reagent.impl.template/HiccupTag");

(reagent.impl.template.HiccupTag.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.impl.template/HiccupTag");
}));

/**
 * Positional factory function for reagent.impl.template/HiccupTag.
 */
reagent.impl.template.__GT_HiccupTag = (function reagent$impl$template$__GT_HiccupTag(tag,id,className,custom){
return (new reagent.impl.template.HiccupTag(tag,id,className,custom));
});

reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__369 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__369,(0),null);
var id = cljs.core.nth.call(null,vec__369,(1),null);
var className = cljs.core.nth.call(null,vec__369,(2),null);
var className__$1 = (((className == null))?null:clojure.string.replace.call(null,className,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",reagent.impl.component.comp_name.call(null)].join(''),"\n","tag"].join('')));
}

return reagent.impl.template.__GT_HiccupTag.call(null,tag,id,className__$1,cljs.core.not_EQ_.call(null,(-1),tag.indexOf("-")));
});
reagent.impl.template.reag_element = (function reagent$impl$template$reag_element(tag,v,compiler){
var c = reagent.impl.component.as_class.call(null,tag,compiler);
var jsprops = ({});
(jsprops.argv = v);

var temp__9774__auto___372 = reagent.impl.util.react_key_from_vec.call(null,v);
if((temp__9774__auto___372 == null)){
} else {
var key_373 = temp__9774__auto___372;
(jsprops.key = key_373);
}

return cljsjs.react.createElement(c,jsprops);
});
reagent.impl.template.function_element = (function reagent$impl$template$function_element(tag,v,first_arg,compiler){
var jsprops = ({});
(jsprops.reagentRender = tag);

(jsprops.argv = cljs.core.subvec.call(null,v,first_arg));

var temp__9774__auto___374 = reagent.impl.util.react_key_from_vec.call(null,v);
if((temp__9774__auto___374 == null)){
} else {
var key_375 = temp__9774__auto___374;
(jsprops.key = key_375);
}

return cljsjs.react.createElement(reagent.impl.component.functional_render_fn.call(null,compiler,tag),jsprops);
});
/**
 * If given tag is a Class, use it as a class,
 *   else wrap in Reagent function wrapper.
 */
reagent.impl.template.maybe_function_element = (function reagent$impl$template$maybe_function_element(tag,v,compiler){
if(reagent.impl.component.react_class_QMARK_.call(null,tag)){
return reagent.impl.template.reag_element.call(null,tag,v,compiler);
} else {
return reagent.impl.template.function_element.call(null,tag,v,(1),compiler);
}
});
reagent.impl.template.fragment_element = (function reagent$impl$template$fragment_element(argv,compiler){
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__10116__auto__ = reagent.impl.template.convert_prop_value.call(null,((hasprops)?props:null));
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return ({});
}
})();
var first_child = ((1) + ((hasprops)?(1):(0)));
var temp__9774__auto___376 = reagent.impl.util.react_key_from_vec.call(null,argv);
if((temp__9774__auto___376 == null)){
} else {
var key_377 = temp__9774__auto___376;
(jsprops.key = key_377);
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,cljsjs.react.Fragment,jsprops,first_child);
});
reagent.impl.template.tag_name_cache = ({});
reagent.impl.template.cached_parse = (function reagent$impl$template$cached_parse(x){
var temp__9714__auto__ = reagent.impl.template.cache_get.call(null,reagent.impl.template.tag_name_cache,x);
if((temp__9714__auto__ == null)){
var v = reagent.impl.template.parse_tag.call(null,x);
goog.object.set(reagent.impl.template.tag_name_cache,x,v);

return v;
} else {
var s = temp__9714__auto__;
return s;
}
});
reagent.impl.template.native_element = (function reagent$impl$template$native_element(parsed,argv,first,compiler){
var component = parsed.tag;
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = (function (){var or__10116__auto__ = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return ({});
}
})();
var first_child = (first + ((hasprops)?(1):(0)));
if(reagent.impl.input.input_component_QMARK_.call(null,component)){
var input_class = (function (){var or__10116__auto__ = compiler.reagentInput;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var x = reagent.impl.component.create_class.call(null,reagent.impl.input.input_spec,compiler);
(compiler.reagentInput = x);

return x;
}
})();
return reagent.impl.protocols.as_element.call(null,compiler,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_class,argv,component,jsprops,first_child,compiler], null),cljs.core.meta.call(null,argv)));
} else {
var temp__9774__auto___378 = reagent.impl.util.get_react_key.call(null,cljs.core.meta.call(null,argv));
if((temp__9774__auto___378 == null)){
} else {
var key_379 = temp__9774__auto___378;
(jsprops.key = key_379);
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,component,jsprops,first_child);
}
});
reagent.impl.template.raw_element = (function reagent$impl$template$raw_element(comp,argv,compiler){
var props = cljs.core.nth.call(null,argv,(2),null);
var jsprops = (function (){var or__10116__auto__ = props;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return ({});
}
})();
var temp__9774__auto___380 = reagent.impl.util.get_react_key.call(null,cljs.core.meta.call(null,argv));
if((temp__9774__auto___380 == null)){
} else {
var key_381 = temp__9774__auto___380;
(jsprops.key = key_381);
}

return reagent.impl.protocols.make_element.call(null,compiler,argv,comp,jsprops,(3));
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,compiler){
return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (p1__12_SHARP_){
return reagent.impl.protocols.as_element.call(null,compiler,p1__12_SHARP_);
}),s));
});
reagent.impl.template.expand_seq_dev = (function reagent$impl$template$expand_seq_dev(s,o,compiler){
return cljs.core.into_array.call(null,cljs.core.map.call(null,(function (val){
if(((cljs.core.vector_QMARK_.call(null,val)) && ((reagent.impl.util.react_key_from_vec.call(null,val) == null)))){
(o.no_key = true);
} else {
}

return reagent.impl.protocols.as_element.call(null,compiler,val);
}),s));
});
reagent.impl.template.expand_seq_check = (function reagent$impl$template$expand_seq_check(x,compiler){
var ctx = ({});
var vec__382 = reagent.ratom.check_derefs.call(null,(function (){
return reagent.impl.template.expand_seq_dev.call(null,x,ctx,compiler);
}));
var res = cljs.core.nth.call(null,vec__382,(0),null);
var derefed = cljs.core.nth.call(null,vec__382,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.call(null,x,reagent.impl.component.comp_name.call(null),"Reactive deref not supported in lazy seq, ","it should be wrapped in doall")].join(''));
} else {
}
} else {
}

if(cljs.core.truth_(ctx.no_key)){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ",reagent.impl.util.hiccup_err.call(null,x,reagent.impl.component.comp_name.call(null),"Every element in a seq should have a unique :key")].join(''));
} else {
}
} else {
}

return res;
});
reagent.impl.template.hiccup_element = (function reagent$impl$template$hiccup_element(v,compiler){
while(true){
var tag = cljs.core.nth.call(null,v,(0),null);
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__385 = pos;
switch (G__385) {
case (-1):
return reagent.impl.template.native_element.call(null,reagent.impl.template.cached_parse.call(null,n),v,(1),compiler);

break;
case (0):
if(cljs.core._EQ_.call(null,">",n)){
return null;
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Invalid Hiccup tag"),"\n","(= \">\" n)"].join('')));
}

break;
default:
var G__387 = cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,cljs.core.with_meta.call(null,v,null),(0),cljs.core.subs.call(null,n,(pos + (1))))], null),cljs.core.meta.call(null,v));
var G__388 = compiler;
v = G__387;
compiler = G__388;
continue;

}
break;
}
});
reagent.impl.template.vec_to_elem = (function reagent$impl$template$vec_to_elem(v,compiler,fn_to_element){
if((compiler == null)){
console.error("vec-to-elem",cljs.core.pr_str.call(null,v));
} else {
}

if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Hiccup form should not be empty"),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",reagent.impl.util.hiccup_err.call(null,v,reagent.impl.component.comp_name.call(null),"Invalid Hiccup form"),"\n","(valid-tag? tag)"].join('')));
}

var G__389 = tag;
var G__389__$1 = (((G__389 instanceof cljs.core.Keyword))?G__389.fqn:null);
switch (G__389__$1) {
case ">":
return reagent.impl.template.native_element.call(null,reagent.impl.template.__GT_HiccupTag.call(null,cljs.core.nth.call(null,v,(1),null),null,null,null),v,(2),compiler);

break;
case "r>":
return reagent.impl.template.raw_element.call(null,cljs.core.nth.call(null,v,(1),null),v,compiler);

break;
case "f>":
return reagent.impl.template.function_element.call(null,cljs.core.nth.call(null,v,(1),null),v,(2),compiler);

break;
case "<>":
return reagent.impl.template.fragment_element.call(null,v,compiler);

break;
default:
if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
return reagent.impl.template.hiccup_element.call(null,v,compiler);
} else {
if((tag instanceof reagent.impl.template.NativeWrapper)){
return reagent.impl.template.native_element.call(null,tag,v,(1),compiler);
} else {
return fn_to_element.call(null,tag,v,compiler);

}
}

}
});
reagent.impl.template.as_element = (function reagent$impl$template$as_element(this$,x,fn_to_element){
if(reagent.impl.util.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_elem.call(null,x,this$,fn_to_element);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return reagent.impl.template.expand_seq_check.call(null,x,this$);

} else {
if(reagent.impl.util.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
reagent.impl.template.create_compiler = (function reagent$impl$template$create_compiler(opts){
var id = cljs.core.gensym.call(null);
var fn_to_element = (cljs.core.truth_(new cljs.core.Keyword(null,"function-components","function-components",(1492814963)).cljs$core$IFn$_invoke$arity$1(opts))?reagent.impl.template.maybe_function_element:reagent.impl.template.reag_element);
if((typeof reagent !== 'undefined') && (typeof reagent.impl !== 'undefined') && (typeof reagent.impl.template !== 'undefined') && (typeof reagent.impl.template.t_reagent$impl$template392 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IMeta}
 * @implements {reagent.impl.protocols.Compiler}
*/
reagent.impl.template.t_reagent$impl$template392 = (function (opts,id,fn_to_element,meta393){
this.opts = opts;
this.id = id;
this.fn_to_element = fn_to_element;
this.meta393 = meta393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reagent.impl.template.t_reagent$impl$template392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_394,meta393__$1){
var self__ = this;
var _394__$1 = this;
return (new reagent.impl.template.t_reagent$impl$template392(self__.opts,self__.id,self__.fn_to_element,meta393__$1));
}));

(reagent.impl.template.t_reagent$impl$template392.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_394){
var self__ = this;
var _394__$1 = this;
return self__.meta393;
}));

(reagent.impl.template.t_reagent$impl$template392.prototype.reagent$impl$protocols$Compiler$ = cljs.core.PROTOCOL_SENTINEL);

(reagent.impl.template.t_reagent$impl$template392.prototype.reagent$impl$protocols$Compiler$get_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(reagent.impl.template.t_reagent$impl$template392.prototype.reagent$impl$protocols$Compiler$as_element$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.as_element.call(null,this$__$1,x,self__.fn_to_element);
}));

(reagent.impl.template.t_reagent$impl$template392.prototype.reagent$impl$protocols$Compiler$make_element$arity$5 = (function (this$,argv,component,jsprops,first_child){
var self__ = this;
var this$__$1 = this;
return reagent.impl.template.make_element.call(null,this$__$1,argv,component,jsprops,first_child);
}));

(reagent.impl.template.t_reagent$impl$template392.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",(1795607228),null),new cljs.core.Symbol(null,"id","id",(252129435),null),new cljs.core.Symbol(null,"fn-to-element","fn-to-element",(-1764467095),null),new cljs.core.Symbol(null,"meta393","meta393",(-849829622),null)], null);
}));

(reagent.impl.template.t_reagent$impl$template392.cljs$lang$type = true);

(reagent.impl.template.t_reagent$impl$template392.cljs$lang$ctorStr = "reagent.impl.template/t_reagent$impl$template392");

(reagent.impl.template.t_reagent$impl$template392.cljs$lang$ctorPrWriter = (function (this__11385__auto__,writer__11386__auto__,opt__11387__auto__){
return cljs.core._write.call(null,writer__11386__auto__,"reagent.impl.template/t_reagent$impl$template392");
}));

/**
 * Positional factory function for reagent.impl.template/t_reagent$impl$template392.
 */
reagent.impl.template.__GT_t_reagent$impl$template392 = (function reagent$impl$template$create_compiler_$___GT_t_reagent$impl$template392(opts__$1,id__$1,fn_to_element__$1,meta393){
return (new reagent.impl.template.t_reagent$impl$template392(opts__$1,id__$1,fn_to_element__$1,meta393));
});

}

return (new reagent.impl.template.t_reagent$impl$template392(opts,id,fn_to_element,cljs.core.PersistentArrayMap.EMPTY));
});
reagent.impl.template.default_compiler_STAR_ = reagent.impl.template.create_compiler.call(null,cljs.core.PersistentArrayMap.EMPTY);
reagent.impl.template.default_compiler = reagent.impl.template.default_compiler_STAR_;
reagent.impl.template.set_default_compiler_BANG_ = (function reagent$impl$template$set_default_compiler_BANG_(compiler){
return (reagent.impl.template.default_compiler = compiler);
});

//# sourceURL=reagent/impl/template.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL3RlbXBsYXRlLmpzIiwic291cmNlcyI6WyJ0ZW1wbGF0ZS5jbGpzIl0sImxpbmVDb3VudCI6NjQxLCJtYXBwaW5ncyI6IjtBQWFBOzs7OytCQUFBLC9CQUVFQTtBQUVGLEFBQUE7Ozs7Ozs7OztBQUFBO0FBQUEsQ0FBQSwrQ0FBQSwvQ0FBU0s7QUFBVCxBQUFBLEFBQUE7OztBQUFBLENBQUEscURBQUEsckRBQVNBOztBQUFULENBQUEsd0RBQUEseERBQVNBOztBQUFULENBQUEsNkRBQUEsV0FBQUosb0JBQUFDLHNCQUFBQyxsSEFBU0U7QUFBVCxBQUFBLE9BQUFELDJCQUFBRixzQkFBQTs7O0FBQUE7OzsyQ0FBQSwzQ0FBU0ksOEZBQWVDLElBQUlDLEdBQUdDO0FBQS9CLEFBQUEsWUFBQUosb0NBQXdCRSxJQUFJQyxHQUFHQzs7O0FBQXRCSixBQUVULDBDQUFBLDFDQUFNSyw0RkFDSEM7QUFESCxBQUVFLDREQUFBLEtBQUEsMURBQUNMLG1EQUFnQks7O0FBSW5CLDBDQUFBLDFDQUFlQyw0RkFBYUM7QUFBNUIsQUFDRSxTQUFJLEFBQUNDLHlDQUFPRCxRQUNSLE9BQVNBOztBQUVmLHlDQUFBLHpDQUFlRSwwRkFBWUY7QUFBM0IsQUFDRSxTQUFJLEFBQUNELGtEQUFZQyxRQUNiLEFBQUNHLCtCQUFLSCxRQUNOLGNBQVdSLGJBQWNROztBQU8vQix3Q0FBQSxXQUFBLG9CQUFBLHNCQUFBLDdGQUFLSTtBQUlMLGtDQUFBLGxDQUFNQyw0RUFBV0MsRUFBRUM7QUFBbkIsQUFDRSxHQUFNLEFBQTBCRCxpQkFBRUM7QUFBbEMsQUFDRSxPQUFDQyxnQkFBU0YsRUFBRUM7O0FBRGQ7OztBQUdGLHlDQUFBLHpDQUFNRSwwRkFBa0JGO0FBQXhCLEFBQ0UsR0FBSSxBQUFDTix5Q0FBT007QUFDVixJQUFBRyxxQkFBYSxBQUFDTCwwQ0FBVUQsc0NBQWdCLEFBQUNRLHlCQUFLTDtBQUE5QyxBQUFBLEdBQUEsQ0FBQUcsc0JBQUE7QUFFRSxJQUFNRyxJQUFFLEFB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QztBQUhmLEFBSUksT0FBQ2tGLDJDQUFXbEYsVUFBSzFDLEVBQUV1SDs7O0FBSnZCLENBQUEsQUFBQSxBQUFBaUIsa0hBQUEsV0FLaUI5RixNQUFLQyxLQUFLQyxVQUFVQyxRQUFRQzs7QUFMN0MsQUFBQSxnQkFBQSxaQUtpQko7QUFMakIsQUFNSSxPQUFDRCw2Q0FBYUMsVUFBS0MsS0FBS0MsVUFBVUMsUUFBUUM7OztBQU45QyxDQUFBLEFBQUEwRiw0REFBQTtBQUFBLEFBQUEsQUFBQTs7O0FBQUEsQ0FBQSxBQUFBQSxrRUFBQTs7QUFBQSxDQUFBLEFBQUFBLHFFQUFBOztBQUFBLENBQUEsQUFBQUEsMEVBQUEsV0FBQXBKLG9CQUFBQyxzQkFBQUM7QUFBQSxBQUFBLE9BQUFDLDJCQUFBRixzQkFBQTs7O0FBQUE7OzswSUFMbUI2SSxTQUNmdkksT0FDQTRILDFKQUdKb0Isd0RBQUEsb0hBQUFEOzZEQUxtQlIsU0FDZnZJLE9BQ0E0SCw3RUFHSixBQUFBLFlBQUFpQixtRkFBQUU7OztBQUFBRjs7NkRBTG1CTixLQUNmdkksR0FDQTRILHJFQUdKLFlBQUFpQix1RUFBQTs7QUFRSixBQUFLSSwrQ0FBa0IsZ0RBQUEsaERBQUNYO0FBQ3hCLEFBQWVZLHlDQUFpQkQ7QUFFaEMsbURBQUEsbkRBQU1FLDhHQUF1QjVFO0FBQTdCLEFBQ0UsUUFBTTJFLHlDQUFpQjNFIiwibmFtZXMiOlsicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3JlLXRhZyIsInRoaXNfXzExMzg1X19hdXRvX18iLCJ3cml0ZXJfXzExMzg2X19hdXRvX18iLCJvcHRfXzExMzg3X19hdXRvX18iLCJjbGpzLmNvcmUvLXdyaXRlIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL05hdGl2ZVdyYXBwZXIiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvLT5OYXRpdmVXcmFwcGVyIiwidGFnIiwiaWQiLCJjbGFzc05hbWUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvYWRhcHQtcmVhY3QtY2xhc3MiLCJjIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2hpY2N1cC10YWc/IiwieCIsInJlYWdlbnQuaW1wbC51dGlsL25hbWVkPyIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS92YWxpZC10YWc/IiwiY2xqcy5jb3JlL2lmbj8iLCJyZWFnZW50LmltcGwudGVtcGxhdGUvcHJvcC1uYW1lLWNhY2hlIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2NhY2hlLWdldCIsIm8iLCJrIiwiZ29vZy5vYmplY3QvZ2V0IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2NhY2hlZC1wcm9wLW5hbWUiLCJ0ZW1wX185NzE0X19hdXRvX18iLCJrJyIsImNsanMuY29yZS9uYW1lIiwidiIsInJlYWdlbnQuaW1wbC51dGlsL2Rhc2gtdG8tcHJvcC1uYW1lIiwiZ29vZy5vYmplY3Qvc2V0IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2t2LWNvbnYiLCJHX18zNTciLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY29udmVydC1wcm9wLXZhbHVlIiwicmVhZ2VudC5pbXBsLnV0aWwvanMtdmFsPyIsImNsanMuY29yZS9tYXA/IiwiY2xqcy5jb3JlL3JlZHVjZS1rdiIsImNsanMuY29yZS9jb2xsPyIsImNsanMuY29yZS9jbGotPmpzIiwiYXJncyIsImNsanMuY29yZS9hcHBseSIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9jdXN0b20tcHJvcC1uYW1lLWNhY2hlIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2NhY2hlZC1jdXN0b20tcHJvcC1uYW1lIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2N1c3RvbS1rdi1jb252IiwiR19fMzYxIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2NvbnZlcnQtY3VzdG9tLXByb3AtdmFsdWUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvc2V0LWlkLWNsYXNzIiwicHJvcHMiLCJpZC1jbGFzcyIsImNsYXNzIiwiR19fMzY1IiwiY2xqcy5jb3JlL2Fzc29jIiwicmVhZ2VudC5pbXBsLnV0aWwvY2xhc3MtbmFtZXMiLCJvcl9fMTAxMTZfX2F1dG9fXyIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9jb252ZXJ0LXByb3BzIiwiR19fMzY2IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL21ha2UtZWxlbWVudCIsInRoaXMiLCJhcmd2IiwiY29tcG9uZW50IiwianNwcm9wcyIsImZpcnN0LWNoaWxkIiwiR19fMzY3IiwiY2xqcy5jb3JlL2NvdW50IiwiY2xqc2pzLnJlYWN0L2NyZWF0ZUVsZW1lbnQiLCJyZWFnZW50LmltcGwucHJvdG9jb2xzL2FzLWVsZW1lbnQiLCJjbGpzLmNvcmUvbnRoIiwiYSIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9IaWNjdXBUYWciLCJyZWFnZW50LmltcGwudGVtcGxhdGUvLT5IaWNjdXBUYWciLCJjdXN0b20iLCJyZWFnZW50LmltcGwudGVtcGxhdGUvcGFyc2UtdGFnIiwiaGljY3VwLXRhZyIsInZlY19fMzY5IiwiY2xqcy5jb3JlL3JlLW1hdGNoZXMiLCJjbGpzLmNvcmUvbmV4dCIsImNsb2p1cmUuc3RyaW5nL3JlcGxhY2UiLCJqcy9FcnJvciIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY29tcC1uYW1lIiwiY2xqcy5jb3JlL25vdD0iLCJyZWFnZW50LmltcGwudGVtcGxhdGUvcmVhZy1lbGVtZW50IiwiY29tcGlsZXIiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2FzLWNsYXNzIiwidGVtcF9fOTc3NF9fYXV0b19fIiwia2V5IiwicmVhZ2VudC5pbXBsLnV0aWwvcmVhY3Qta2V5LWZyb20tdmVjIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2Z1bmN0aW9uLWVsZW1lbnQiLCJmaXJzdC1hcmciLCJjbGpzLmNvcmUvc3VidmVjIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mdW5jdGlvbmFsLXJlbmRlci1mbiIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9tYXliZS1mdW5jdGlvbi1lbGVtZW50IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yZWFjdC1jbGFzcz8iLCJyZWFnZW50LmltcGwudGVtcGxhdGUvZnJhZ21lbnQtZWxlbWVudCIsImhhc3Byb3BzIiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9tYWtlLWVsZW1lbnQiLCJjbGpzanMucmVhY3QvRnJhZ21lbnQiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvdGFnLW5hbWUtY2FjaGUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY2FjaGVkLXBhcnNlIiwicyIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9uYXRpdmUtZWxlbWVudCIsInBhcnNlZCIsImZpcnN0IiwicmVhZ2VudC5pbXBsLmlucHV0L2lucHV0LWNvbXBvbmVudD8iLCJpbnB1dC1jbGFzcyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY3JlYXRlLWNsYXNzIiwicmVhZ2VudC5pbXBsLmlucHV0L2lucHV0LXNwZWMiLCJjbGpzLmNvcmUvd2l0aC1tZXRhIiwiY2xqcy5jb3JlL21ldGEiLCJyZWFnZW50LmltcGwudXRpbC9nZXQtcmVhY3Qta2V5IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3Jhdy1lbGVtZW50IiwiY29tcCIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9leHBhbmQtc2VxIiwiY2xqcy5jb3JlL2ludG8tYXJyYXkiLCJwMV9fMTIjIiwiY2xqcy5jb3JlL21hcCIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9leHBhbmQtc2VxLWRldiIsInZhbCIsImNsanMuY29yZS92ZWN0b3I/IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2V4cGFuZC1zZXEtY2hlY2siLCJ2ZWNfXzM4MiIsImN0eCIsInJlcyIsImRlcmVmZWQiLCJyZWFnZW50LnJhdG9tL2NoZWNrLWRlcmVmcyIsInJlYWdlbnQvZGVidWciLCJqcy9jb25zb2xlIiwicmVhZ2VudC5pbXBsLnV0aWwvaGljY3VwLWVyciIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9oaWNjdXAtZWxlbWVudCIsIm4iLCJwb3MiLCJHX18zODUiLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9zdWJzIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3ZlYy10by1lbGVtIiwiZm4tdG8tZWxlbWVudCIsImpzL2NvbnNvbGUuZXJyb3IiLCJjbGpzLmNvcmUvcHItc3RyIiwiR19fMzg5IiwiY2xqcy5jb3JlL0tleXdvcmQiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvYXMtZWxlbWVudCIsImNsanMuY29yZS9zZXE/IiwiY2xqcy5jb3JlL1BST1RPQ09MX1NFTlRJTkVMIiwiY2xqcy5jb3JlL25hdGl2ZS1zYXRpc2ZpZXM/IiwiY2xqcy5jb3JlL0lQcmludFdpdGhXcml0ZXIiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY3JlYXRlLWNvbXBpbGVyIiwib3B0cyIsImNsanMuY29yZS9nZW5zeW0iLCJqcy9yZWFnZW50IiwianMvcmVhZ2VudC5pbXBsIiwianMvcmVhZ2VudC5pbXBsLnRlbXBsYXRlIiwianMvcmVhZ2VudC5pbXBsLnRlbXBsYXRlLnRfcmVhZ2VudCRpbXBsJHRlbXBsYXRlMzkyIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3RfcmVhZ2VudCRpbXBsJHRlbXBsYXRlMzkyIiwiXzM5NCIsIm1ldGEzOTMiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvLT50X3JlYWdlbnQkaW1wbCR0ZW1wbGF0ZTM5MiIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9kZWZhdWx0LWNvbXBpbGVyKiIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9kZWZhdWx0LWNvbXBpbGVyIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3NldC1kZWZhdWx0LWNvbXBpbGVyISJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5pbXBsLnRlbXBsYXRlXG4gICg6cmVxdWlyZSBbY2xqc2pzLnJlYWN0IDphcyByZWFjdF1cbiAgICAgICAgICAgIFtjbG9qdXJlLnN0cmluZyA6YXMgc3RyaW5nXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC51dGlsIDphcyB1dGlsIDpyZWZlciBbbmFtZWQ/XV1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwuY29tcG9uZW50IDphcyBjb21wXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5iYXRjaGluZyA6YXMgYmF0Y2hdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmlucHV0IDphcyBpbnB1dF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwucHJvdG9jb2xzIDphcyBwXVxuICAgICAgICAgICAgW3JlYWdlbnQucmF0b20gOmFzIHJhdG9tXVxuICAgICAgICAgICAgW3JlYWdlbnQuZGVidWcgOnJlZmVyLW1hY3JvcyBbZGV2PyB3YXJuXV1cbiAgICAgICAgICAgIFtnb29nLm9iamVjdCA6YXMgZ29ial0pKVxuXG47OyBGcm9tIFdlYXZlamVzdGVyJ3MgSGljY3VwLCB2aWEgcHVtcDpcbihkZWYgXns6ZG9jIFwiUmVndWxhciBleHByZXNzaW9uIHRoYXQgcGFyc2VzIGEgQ1NTLXN0eWxlIGlkIGFuZCBjbGFzc1xuICAgICAgICAgICAgIGZyb20gYSB0YWcgbmFtZS5cIn1cbiAgcmUtdGFnICNcIihbXlxcc1xcLiNdKykoPzojKFteXFxzXFwuI10rKSk/KD86XFwuKFteXFxzI10rKSk/XCIpXG5cbihkZWZ0eXBlIE5hdGl2ZVdyYXBwZXIgW3RhZyBpZCBjbGFzc05hbWVdKVxuXG4oZGVmbiBhZGFwdC1yZWFjdC1jbGFzc1xuICBbY11cbiAgKC0+TmF0aXZlV3JhcHBlciBjIG5pbCBuaWwpKVxuXG47OzsgQ29tbW9uIHV0aWxpdGllc1xuXG4oZGVmbiBeYm9vbGVhbiBoaWNjdXAtdGFnPyBbeF1cbiAgKG9yIChuYW1lZD8geClcbiAgICAgIChzdHJpbmc/IHgpKSlcblxuKGRlZm4gXmJvb2xlYW4gdmFsaWQtdGFnPyBbeF1cbiAgKG9yIChoaWNjdXAtdGFnPyB4KVxuICAgICAgKGlmbj8geClcbiAgICAgIChpbnN0YW5jZT8gTmF0aXZlV3JhcHBlciB4KSkpXG5cbjs7OyBQcm9wcyBjb252ZXJzaW9uXG5cbjs7IFRPRE86IE1vdmUgcHJvcC1uYW1lIGNhY2hlcyB0byB0aGUgY29tcGlsZXIgb2JqZWN0LCBpZiB0aGlzXG47OyBjb252ZXJzaW9uIGNhbiBiZSBjb25maWd1cmVkLlxuXG4oZGVmIHByb3AtbmFtZS1jYWNoZSAjanN7OmNsYXNzIFwiY2xhc3NOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9yIFwiaHRtbEZvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgOmNoYXJzZXQgXCJjaGFyU2V0XCJ9KVxuXG4oZGVmbiBjYWNoZS1nZXQgW28ga11cbiAgKHdoZW4gXmJvb2xlYW4gKC5oYXNPd25Qcm9wZXJ0eSBvIGspXG4gICAgKGdvYmovZ2V0IG8gaykpKVxuXG4oZGVmbiBjYWNoZWQtcHJvcC1uYW1lIFtrXVxuICAoaWYgKG5hbWVkPyBrKVxuICAgIChpZi1zb21lIFtrJyAoY2FjaGUtZ2V0IHByb3AtbmFtZS1jYWNoZSAobmFtZSBrKSldXG4gICAgICBrJ1xuICAgICAgKGxldCBbdiAodXRpbC9kYXNoLXRvLXByb3AtbmFtZSBrKV1cbiAgICAgICAgKGdvYmovc2V0IHByb3AtbmFtZS1jYWNoZSAobmFtZSBrKSB2KVxuICAgICAgICB2KSlcbiAgICBrKSlcblxuKGRlY2xhcmUgY29udmVydC1wcm9wLXZhbHVlKVxuXG4oZGVmbiBrdi1jb252IFtvIGsgdl1cbiAgKGRvdG8gb1xuICAgIChnb2JqL3NldCAoY2FjaGVkLXByb3AtbmFtZSBrKSAoY29udmVydC1wcm9wLXZhbHVlIHYpKSkpXG5cbihkZWZuIGNvbnZlcnQtcHJvcC12YWx1ZSBbeF1cbiAgKGNvbmQgKHV0aWwvanMtdmFsPyB4KSB4XG4gICAgICAgIChuYW1lZD8geCkgKG5hbWUgeClcbiAgICAgICAgKG1hcD8geCkgKHJlZHVjZS1rdiBrdi1jb252ICNqc3t9IHgpXG4gICAgICAgIChjb2xsPyB4KSAoY2xqLT5qcyB4KVxuICAgICAgICAoaWZuPyB4KSAoZm4gWyYgYXJnc11cbiAgICAgICAgICAgICAgICAgICAoYXBwbHkgeCBhcmdzKSlcbiAgICAgICAgOmVsc2UgKGNsai0+anMgeCkpKVxuXG47OyBQcmV2aW91cyBmZXcgZnVuY3Rpb25zIGNvcGllZCBmb3IgY3VzdG9tIGVsZW1lbnRzLFxuOzsgd2l0aG91dCBtYXBwaW5nIGZyb20gY2xhc3MgdG8gY2xhc3NOYW1lIGV0Yy5cblxuKGRlZiBjdXN0b20tcHJvcC1uYW1lLWNhY2hlICNqc3t9KVxuXG4oZGVmbiBjYWNoZWQtY3VzdG9tLXByb3AtbmFtZSBba11cbiAgKGlmIChuYW1lZD8gaylcbiAgICAoaWYtc29tZSBbaycgKGNhY2hlLWdldCBjdXN0b20tcHJvcC1uYW1lLWNhY2hlIChuYW1lIGspKV1cbiAgICAgIGsnXG4gICAgICAobGV0IFt2ICh1dGlsL2Rhc2gtdG8tcHJvcC1uYW1lIGspXVxuICAgICAgICAoZ29iai9zZXQgY3VzdG9tLXByb3AtbmFtZS1jYWNoZSAobmFtZSBrKSB2KVxuICAgICAgICB2KSlcbiAgICBrKSlcblxuKGRlZm4gY3VzdG9tLWt2LWNvbnYgW28gayB2XVxuICAoZG90byBvXG4gICAgKGdvYmovc2V0IChjYWNoZWQtY3VzdG9tLXByb3AtbmFtZSBrKSAoY29udmVydC1wcm9wLXZhbHVlIHYpKSkpXG5cbihkZWZuIGNvbnZlcnQtY3VzdG9tLXByb3AtdmFsdWUgW3hdXG4gIChjb25kICh1dGlsL2pzLXZhbD8geCkgeFxuICAgICAgICAobmFtZWQ/IHgpIChuYW1lIHgpXG4gICAgICAgIChtYXA/IHgpIChyZWR1Y2Uta3YgY3VzdG9tLWt2LWNvbnYgI2pze30geClcbiAgICAgICAgKGNvbGw/IHgpIChjbGotPmpzIHgpXG4gICAgICAgIChpZm4/IHgpIChmbiBbJiBhcmdzXVxuICAgICAgICAgICAgICAgICAgIChhcHBseSB4IGFyZ3MpKVxuICAgICAgICA6ZWxzZSAoY2xqLT5qcyB4KSkpXG5cbihkZWZuIHNldC1pZC1jbGFzc1xuICBcIlRha2VzIHRoZSBpZCBhbmQgY2xhc3MgZnJvbSB0YWcga2V5d29yZCwgYW5kIGFkZHMgdGhlbSB0byB0aGVcbiAgb3RoZXIgcHJvcHMuIFBhcnNlZCB0YWcgaXMgSlMgb2JqZWN0IHdpdGggOmlkIGFuZCA6Y2xhc3MgcHJvcGVydGllcy5cIlxuICBbcHJvcHMgaWQtY2xhc3NdXG4gIChsZXQgW2lkICguLWlkIGlkLWNsYXNzKVxuICAgICAgICBjbGFzcyAoLi1jbGFzc05hbWUgaWQtY2xhc3MpXVxuICAgIChjb25kLT4gcHJvcHNcbiAgICAgIDs7IE9ubHkgdXNlIElEIGZyb20gdGFnIGtleXdvcmQgaWYgbm8gOmlkIGluIHByb3BzIGFscmVhZHlcbiAgICAgIChhbmQgKHNvbWU/IGlkKVxuICAgICAgICAgICAobmlsPyAoOmlkIHByb3BzKSkpXG4gICAgICAoYXNzb2MgOmlkIGlkKVxuXG4gICAgICA7OyBNZXJnZSBjbGFzc2VzXG4gICAgICBjbGFzc1xuICAgICAgOzsgTm90ZTogc29tZW9uZSBtaWdodCB1c2UgUmVhY3Qtc3R5bGUgOmNsYXNzTmFtZSBwcm9wZXJ0eSxcbiAgICAgIDs7IHRoaXMgaXMgdGhlIG9ubHkgcGxhY2Ugd2hlcmUgdGhhdCBuZWVkcyBzcGVjaWFsIGNhc2UuIFVzaW5nXG4gICAgICA7OyA6Y2xhc3MgYW5kIDpjbGFzc05hbWUgdG9nZXRoZXIgaXMgbm90IHN1cHBvcnRlZC5cbiAgICAgIChhc3NvYyA6Y2xhc3MgKHV0aWwvY2xhc3MtbmFtZXMgY2xhc3MgKG9yICg6Y2xhc3MgcHJvcHMpICg6Y2xhc3NOYW1lIHByb3BzKSkpKSkpKVxuXG4oZGVmbiBjb252ZXJ0LXByb3BzIFtwcm9wcyBeY2xqIGlkLWNsYXNzXVxuICAobGV0IFtjbGFzcyAoOmNsYXNzIHByb3BzKVxuICAgICAgICBwcm9wcyAoLT4gcHJvcHNcbiAgICAgICAgICAgICAgICAgIChjb25kLT4gY2xhc3MgKGFzc29jIDpjbGFzcyAodXRpbC9jbGFzcy1uYW1lcyBjbGFzcykpKVxuICAgICAgICAgICAgICAgICAgKHNldC1pZC1jbGFzcyBpZC1jbGFzcykpXVxuICAgIChpZiAoLi1jdXN0b20gaWQtY2xhc3MpXG4gICAgICAoY29udmVydC1jdXN0b20tcHJvcC12YWx1ZSBwcm9wcylcbiAgICAgIChjb252ZXJ0LXByb3AtdmFsdWUgcHJvcHMpKSkpXG5cbjs7OyBDb252ZXJzaW9uIGZyb20gSGljY3VwIGZvcm1zXG5cbihkZWZuIG1ha2UtZWxlbWVudCBbdGhpcyBhcmd2IGNvbXBvbmVudCBqc3Byb3BzIGZpcnN0LWNoaWxkXVxuICAoY2FzZSAoLSAoY291bnQgYXJndikgZmlyc3QtY2hpbGQpXG4gICAgOzsgT3B0aW1pemUgY2FzZXMgb2YgemVybyBvciBvbmUgY2hpbGRcbiAgICAwIChyZWFjdC9jcmVhdGVFbGVtZW50IGNvbXBvbmVudCBqc3Byb3BzKVxuXG4gICAgMSAocmVhY3QvY3JlYXRlRWxlbWVudCBjb21wb25lbnQganNwcm9wc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgKHAvYXMtZWxlbWVudCB0aGlzIChudGggYXJndiBmaXJzdC1jaGlsZCBuaWwpKSlcblxuICAgICguYXBwbHkgcmVhY3QvY3JlYXRlRWxlbWVudCBuaWxcbiAgICAgICAgICAgIChyZWR1Y2Uta3YgKGZuIFthIGsgdl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAod2hlbiAoPj0gayBmaXJzdC1jaGlsZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKC5wdXNoIGEgKHAvYXMtZWxlbWVudCB0aGlzIHYpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICBhKVxuICAgICAgICAgICAgICAgICAgICAgICAjanMgW2NvbXBvbmVudCBqc3Byb3BzXSBhcmd2KSkpKVxuXG4oZGVmdHlwZSBIaWNjdXBUYWcgW3RhZyBpZCBjbGFzc05hbWUgY3VzdG9tXSlcblxuKGRlZm4gcGFyc2UtdGFnIFtoaWNjdXAtdGFnXVxuICAobGV0IFtbdGFnIGlkIGNsYXNzTmFtZV0gKC0+PiBoaWNjdXAtdGFnIG5hbWUgKHJlLW1hdGNoZXMgcmUtdGFnKSBuZXh0KVxuICAgICAgICBjbGFzc05hbWUgKHdoZW4tbm90IChuaWw/IGNsYXNzTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgKHN0cmluZy9yZXBsYWNlIGNsYXNzTmFtZSAjXCJcXC5cIiBcIiBcIikpXVxuICAgIChhc3NlcnQgdGFnIChzdHIgXCJJbnZhbGlkIHRhZzogJ1wiIGhpY2N1cC10YWcgXCInXCIgKGNvbXAvY29tcC1uYW1lKSkpXG4gICAgKC0+SGljY3VwVGFnIHRhZ1xuICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICBjbGFzc05hbWVcbiAgICAgICAgICAgICAgICAgOzsgQ3VzdG9tIGVsZW1lbnQgbmFtZXMgbXVzdCBjb250YWluIGh5cGhlblxuICAgICAgICAgICAgICAgICA7OyBodHRwczovL3d3dy53My5vcmcvVFIvY3VzdG9tLWVsZW1lbnRzLyNjdXN0b20tZWxlbWVudHMtY29yZS1jb25jZXB0c1xuICAgICAgICAgICAgICAgICAobm90PSAtMSAoLmluZGV4T2YgdGFnIFwiLVwiKSkpKSlcblxuKGRlZm4gcmVhZy1lbGVtZW50IFt0YWcgdiBjb21waWxlcl1cbiAgKGxldCBbYyAoY29tcC9hcy1jbGFzcyB0YWcgY29tcGlsZXIpXG4gICAgICAgIGpzcHJvcHMgI2pzIHt9XVxuICAgIChzZXQhICguLWFyZ3YganNwcm9wcykgdilcbiAgICAod2hlbi1zb21lIFtrZXkgKHV0aWwvcmVhY3Qta2V5LWZyb20tdmVjIHYpXVxuICAgICAgKHNldCEgKC4ta2V5IGpzcHJvcHMpIGtleSkpXG4gICAgKHJlYWN0L2NyZWF0ZUVsZW1lbnQgYyBqc3Byb3BzKSkpXG5cbihkZWZuIGZ1bmN0aW9uLWVsZW1lbnQgW3RhZyB2IGZpcnN0LWFyZyBjb21waWxlcl1cbiAgKGxldCBbanNwcm9wcyAjanMge31dXG4gICAgKHNldCEgKC4tcmVhZ2VudFJlbmRlciBqc3Byb3BzKSB0YWcpXG4gICAgKHNldCEgKC4tYXJndiBqc3Byb3BzKSAoc3VidmVjIHYgZmlyc3QtYXJnKSlcbiAgICA7IChzZXQhICguLW9wdHMganNwcm9wcykgb3B0cylcbiAgICAod2hlbi1zb21lIFtrZXkgKHV0aWwvcmVhY3Qta2V5LWZyb20tdmVjIHYpXVxuICAgICAgKHNldCEgKC4ta2V5IGpzcHJvcHMpIGtleSkpXG4gICAgKHJlYWN0L2NyZWF0ZUVsZW1lbnQgKGNvbXAvZnVuY3Rpb25hbC1yZW5kZXItZm4gY29tcGlsZXIgdGFnKSBqc3Byb3BzKSkpXG5cbihkZWZuIG1heWJlLWZ1bmN0aW9uLWVsZW1lbnRcbiAgXCJJZiBnaXZlbiB0YWcgaXMgYSBDbGFzcywgdXNlIGl0IGFzIGEgY2xhc3MsXG4gIGVsc2Ugd3JhcCBpbiBSZWFnZW50IGZ1bmN0aW9uIHdyYXBwZXIuXCJcbiAgW3RhZyB2IGNvbXBpbGVyXVxuICAoaWYgKGNvbXAvcmVhY3QtY2xhc3M/IHRhZylcbiAgICAocmVhZy1lbGVtZW50IHRhZyB2IGNvbXBpbGVyKVxuICAgIChmdW5jdGlvbi1lbGVtZW50IHRhZyB2IDEgY29tcGlsZXIpKSlcblxuKGRlZm4gZnJhZ21lbnQtZWxlbWVudCBbYXJndiBjb21waWxlcl1cbiAgKGxldCBbcHJvcHMgKG50aCBhcmd2IDEgbmlsKVxuICAgICAgICBoYXNwcm9wcyAob3IgKG5pbD8gcHJvcHMpIChtYXA/IHByb3BzKSlcbiAgICAgICAganNwcm9wcyAob3IgKGNvbnZlcnQtcHJvcC12YWx1ZSAoaWYgaGFzcHJvcHMgcHJvcHMpKVxuICAgICAgICAgICAgICAgICAgICAjanMge30pXG4gICAgICAgIGZpcnN0LWNoaWxkICgrIDEgKGlmIGhhc3Byb3BzIDEgMCkpXVxuICAgICh3aGVuLXNvbWUgW2tleSAodXRpbC9yZWFjdC1rZXktZnJvbS12ZWMgYXJndildXG4gICAgICAoc2V0ISAoLi1rZXkganNwcm9wcykga2V5KSlcbiAgICAocC9tYWtlLWVsZW1lbnQgY29tcGlsZXIgYXJndiByZWFjdC9GcmFnbWVudCBqc3Byb3BzIGZpcnN0LWNoaWxkKSkpXG5cbihkZWYgdGFnLW5hbWUtY2FjaGUgI2pzIHt9KVxuXG4oZGVmbiBjYWNoZWQtcGFyc2UgW3hdXG4gIChpZi1zb21lIFtzIChjYWNoZS1nZXQgdGFnLW5hbWUtY2FjaGUgeCldXG4gICAgc1xuICAgIChsZXQgW3YgKHBhcnNlLXRhZyB4KV1cbiAgICAgIChnb2JqL3NldCB0YWctbmFtZS1jYWNoZSB4IHYpXG4gICAgICB2KSkpXG5cbihkZWZuIG5hdGl2ZS1lbGVtZW50IFtwYXJzZWQgYXJndiBmaXJzdCBjb21waWxlcl1cbiAgKGxldCBbY29tcG9uZW50ICguLXRhZyBwYXJzZWQpXG4gICAgICAgIHByb3BzIChudGggYXJndiBmaXJzdCBuaWwpXG4gICAgICAgIGhhc3Byb3BzIChvciAobmlsPyBwcm9wcykgKG1hcD8gcHJvcHMpKVxuICAgICAgICBqc3Byb3BzIChvciAoY29udmVydC1wcm9wcyAoaWYgaGFzcHJvcHMgcHJvcHMpIHBhcnNlZClcbiAgICAgICAgICAgICAgICAgICAgI2pzIHt9KVxuICAgICAgICBmaXJzdC1jaGlsZCAoKyBmaXJzdCAoaWYgaGFzcHJvcHMgMSAwKSldXG4gICAgKGlmIChpbnB1dC9pbnB1dC1jb21wb25lbnQ/IGNvbXBvbmVudClcbiAgICAgIChsZXQgW2lucHV0LWNsYXNzIChvciAoLi1yZWFnZW50SW5wdXQgY29tcGlsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbeCAoY29tcC9jcmVhdGUtY2xhc3MgaW5wdXQvaW5wdXQtc3BlYyBjb21waWxlcildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc2V0ISAoLi1yZWFnZW50SW5wdXQgY29tcGlsZXIpIHgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4KSldXG4gICAgICAgICgtPiBbaW5wdXQtY2xhc3MgYXJndiBjb21wb25lbnQganNwcm9wcyBmaXJzdC1jaGlsZCBjb21waWxlcl1cbiAgICAgICAgICAgICh3aXRoLW1ldGEgKG1ldGEgYXJndikpXG4gICAgICAgICAgICAoLT4+IChwL2FzLWVsZW1lbnQgY29tcGlsZXIpKSkpXG4gICAgICAoZG9cbiAgICAgICAgKHdoZW4tc29tZSBba2V5ICgtPiAobWV0YSBhcmd2KSB1dGlsL2dldC1yZWFjdC1rZXkpXVxuICAgICAgICAgIChzZXQhICguLWtleSBqc3Byb3BzKSBrZXkpKVxuICAgICAgICAocC9tYWtlLWVsZW1lbnQgY29tcGlsZXIgYXJndiBjb21wb25lbnQganNwcm9wcyBmaXJzdC1jaGlsZCkpKSkpXG5cbihkZWZuIHJhdy1lbGVtZW50IFtjb21wIGFyZ3YgY29tcGlsZXJdXG4gIChsZXQgW3Byb3BzIChudGggYXJndiAyIG5pbClcbiAgICAgICAganNwcm9wcyAob3IgcHJvcHMgI2pzIHt9KV1cbiAgICAod2hlbi1zb21lIFtrZXkgKC0+IChtZXRhIGFyZ3YpIHV0aWwvZ2V0LXJlYWN0LWtleSldXG4gICAgICAoc2V0ISAoLi1rZXkganNwcm9wcykga2V5KSlcbiAgICAocC9tYWtlLWVsZW1lbnQgY29tcGlsZXIgYXJndiBjb21wIGpzcHJvcHMgMykpKVxuXG4oZGVmbiBleHBhbmQtc2VxIFtzIGNvbXBpbGVyXVxuICAoaW50by1hcnJheSAobWFwICMocC9hcy1lbGVtZW50IGNvbXBpbGVyICUpIHMpKSlcblxuKGRlZm4gZXhwYW5kLXNlcS1kZXYgW3MgXmNsaiBvIGNvbXBpbGVyXVxuICAoaW50by1hcnJheSAobWFwIChmbiBbdmFsXVxuICAgICAgICAgICAgICAgICAgICAgKHdoZW4gKGFuZCAodmVjdG9yPyB2YWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChuaWw/ICh1dGlsL3JlYWN0LWtleS1mcm9tLXZlYyB2YWwpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgKHNldCEgKC4tbm8ta2V5IG8pIHRydWUpKVxuICAgICAgICAgICAgICAgICAgICAgKHAvYXMtZWxlbWVudCBjb21waWxlciB2YWwpKVxuICAgICAgICAgICAgICAgICAgIHMpKSlcblxuKGRlZm4gZXhwYW5kLXNlcS1jaGVjayBbeCBjb21waWxlcl1cbiAgKGxldCBbY3R4ICNqcyB7fVxuICAgICAgICBbcmVzIGRlcmVmZWRdIChyYXRvbS9jaGVjay1kZXJlZnMgIyhleHBhbmQtc2VxLWRldiB4IGN0eCBjb21waWxlcikpXVxuICAgICh3aGVuIGRlcmVmZWRcbiAgICAgICh3YXJuICh1dGlsL2hpY2N1cC1lcnIgeCAoY29tcC9jb21wLW5hbWUpIFwiUmVhY3RpdmUgZGVyZWYgbm90IHN1cHBvcnRlZCBpbiBsYXp5IHNlcSwgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXQgc2hvdWxkIGJlIHdyYXBwZWQgaW4gZG9hbGxcIikpKVxuICAgICh3aGVuICguLW5vLWtleSBjdHgpXG4gICAgICAod2FybiAodXRpbC9oaWNjdXAtZXJyIHggKGNvbXAvY29tcC1uYW1lKSBcIkV2ZXJ5IGVsZW1lbnQgaW4gYSBzZXEgc2hvdWxkIGhhdmUgYSB1bmlxdWUgOmtleVwiKSkpXG4gICAgcmVzKSlcblxuKGRlZm4gaGljY3VwLWVsZW1lbnQgW3YgY29tcGlsZXJdXG4gIChsZXQgW3RhZyAobnRoIHYgMCBuaWwpXG4gICAgICAgIG4gKG5hbWUgdGFnKVxuICAgICAgICBwb3MgKC5pbmRleE9mIG4gXCI+XCIpXVxuICAgIChjYXNlIHBvc1xuICAgICAgLTEgKG5hdGl2ZS1lbGVtZW50IChjYWNoZWQtcGFyc2UgbikgdiAxIGNvbXBpbGVyKVxuICAgICAgMCAoYXNzZXJ0ICg9IFwiPlwiIG4pICh1dGlsL2hpY2N1cC1lcnIgdiAoY29tcC9jb21wLW5hbWUpIFwiSW52YWxpZCBIaWNjdXAgdGFnXCIpKVxuICAgICAgOzsgU3VwcG9ydCBleHRlbmRlZCBoaWNjdXAgc3ludGF4LCBpLmUgOmRpdi5iYXI+YS5mb29cbiAgICAgIDs7IEFwcGx5IG1ldGFkYXRhIChlLmcuIDprZXkpIHRvIHRoZSBvdXRlcm1vc3QgZWxlbWVudC5cbiAgICAgIDs7IE1ldGFkYXRhIGlzIHByb2JhYmx5IHVzZWQgb25seSB3aXRoIHNlcXVlbmVjZXMsIGFuZCBpbiB0aGF0IGNhc2VcbiAgICAgIDs7IG9ubHkgdGhlIGtleSBvZiB0aGUgb3V0ZXJtb3N0IGVsZW1lbnQgbWF0dGVycy5cbiAgICAgIChyZWN1ciAod2l0aC1tZXRhIFsoc3VicyBuIDAgcG9zKVxuICAgICAgICAgICAgICAgICAgICAgICAgIChhc3NvYyAod2l0aC1tZXRhIHYgbmlsKSAwIChzdWJzIG4gKGluYyBwb3MpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAobWV0YSB2KSlcbiAgICAgICAgICAgICBjb21waWxlcikpKSlcblxuKGRlZm4gdmVjLXRvLWVsZW0gW3YgY29tcGlsZXIgZm4tdG8tZWxlbWVudF1cbiAgKHdoZW4gKG5pbD8gY29tcGlsZXIpXG4gICAgKGpzL2NvbnNvbGUuZXJyb3IgXCJ2ZWMtdG8tZWxlbVwiIChwci1zdHIgdikpKVxuICAoYXNzZXJ0IChwb3M/IChjb3VudCB2KSkgKHV0aWwvaGljY3VwLWVyciB2IChjb21wL2NvbXAtbmFtZSkgXCJIaWNjdXAgZm9ybSBzaG91bGQgbm90IGJlIGVtcHR5XCIpKVxuICAobGV0IFt0YWcgKG50aCB2IDAgbmlsKV1cbiAgICAoYXNzZXJ0ICh2YWxpZC10YWc/IHRhZykgKHV0aWwvaGljY3VwLWVyciB2IChjb21wL2NvbXAtbmFtZSkgXCJJbnZhbGlkIEhpY2N1cCBmb3JtXCIpKVxuICAgIChjYXNlIHRhZ1xuICAgICAgOj4gKG5hdGl2ZS1lbGVtZW50ICgtPkhpY2N1cFRhZyAobnRoIHYgMSBuaWwpIG5pbCBuaWwgbmlsKSB2IDIgY29tcGlsZXIpXG4gICAgICA6cj4gKHJhdy1lbGVtZW50IChudGggdiAxIG5pbCkgdiBjb21waWxlcilcbiAgICAgIDpmPiAoZnVuY3Rpb24tZWxlbWVudCAobnRoIHYgMSBuaWwpIHYgMiBjb21waWxlcilcbiAgICAgIDo8PiAoZnJhZ21lbnQtZWxlbWVudCB2IGNvbXBpbGVyKVxuICAgICAgKGNvbmRcbiAgICAgICAoaGljY3VwLXRhZz8gdGFnKVxuICAgICAgIChoaWNjdXAtZWxlbWVudCB2IGNvbXBpbGVyKVxuXG4gICAgICAgKGluc3RhbmNlPyBOYXRpdmVXcmFwcGVyIHRhZylcbiAgICAgICAobmF0aXZlLWVsZW1lbnQgdGFnIHYgMSBjb21waWxlcilcblxuICAgICAgIDplbHNlIChmbi10by1lbGVtZW50IHRhZyB2IGNvbXBpbGVyKSkpKSlcblxuKGRlZm4gYXMtZWxlbWVudCBbdGhpcyB4IGZuLXRvLWVsZW1lbnRdXG4gIChjb25kICh1dGlsL2pzLXZhbD8geCkgeFxuICAgICAgICAodmVjdG9yPyB4KSAodmVjLXRvLWVsZW0geCB0aGlzIGZuLXRvLWVsZW1lbnQpXG4gICAgICAgIChzZXE/IHgpIChpZiAoZGV2PylcbiAgICAgICAgICAgICAgICAgICAoZXhwYW5kLXNlcS1jaGVjayB4IHRoaXMpXG4gICAgICAgICAgICAgICAgICAgKGV4cGFuZC1zZXEgeCB0aGlzKSlcbiAgICAgICAgKG5hbWVkPyB4KSAobmFtZSB4KVxuICAgICAgICAoc2F0aXNmaWVzPyBJUHJpbnRXaXRoV3JpdGVyIHgpIChwci1zdHIgeClcbiAgICAgICAgOmVsc2UgeCkpXG5cbihkZWZuIGNyZWF0ZS1jb21waWxlciBbb3B0c11cbiAgKGxldCBbaWQgKGdlbnN5bSlcbiAgICAgICAgZm4tdG8tZWxlbWVudCAoaWYgKDpmdW5jdGlvbi1jb21wb25lbnRzIG9wdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZS1mdW5jdGlvbi1lbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICByZWFnLWVsZW1lbnQpXVxuICAgIChyZWlmeSBwL0NvbXBpbGVyXG4gICAgICA7OyBUaGlzIGlzIHVzZWQgdG8gYXMgY2FjaGUga2V5IHRvIGNhY2hlIGNvbXBvbmVudCBmbnMgcGVyIGNvbXBpbGVyXG4gICAgICAoZ2V0LWlkIFt0aGlzXSBpZClcbiAgICAgIChhcy1lbGVtZW50IFt0aGlzIHhdXG4gICAgICAgIChhcy1lbGVtZW50IHRoaXMgeCBmbi10by1lbGVtZW50KSlcbiAgICAgIChtYWtlLWVsZW1lbnQgW3RoaXMgYXJndiBjb21wb25lbnQganNwcm9wcyBmaXJzdC1jaGlsZF1cbiAgICAgICAgKG1ha2UtZWxlbWVudCB0aGlzIGFyZ3YgY29tcG9uZW50IGpzcHJvcHMgZmlyc3QtY2hpbGQpKSkpKVxuXG4oZGVmIGRlZmF1bHQtY29tcGlsZXIqIChjcmVhdGUtY29tcGlsZXIge30pKVxuKGRlZiBeOmR5bmFtaWMgZGVmYXVsdC1jb21waWxlciBkZWZhdWx0LWNvbXBpbGVyKilcblxuKGRlZm4gc2V0LWRlZmF1bHQtY29tcGlsZXIhIFtjb21waWxlcl1cbiAgKHNldCEgZGVmYXVsdC1jb21waWxlciBjb21waWxlcikpXG4iXX0=