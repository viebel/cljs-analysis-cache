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
return react.createElement.call(null,component,jsprops);

break;
case (1):
return react.createElement.call(null,component,jsprops,reagent.impl.protocols.as_element.call(null,this$,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return react.createElement.apply(null,cljs.core.reduce_kv.call(null,(function (a,k,v){
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

return react.createElement.call(null,c,jsprops);
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

return react.createElement.call(null,reagent.impl.component.functional_render_fn.call(null,compiler,tag),jsprops);
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

return reagent.impl.protocols.make_element.call(null,compiler,argv,react.Fragment,jsprops,first_child);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL3RlbXBsYXRlLmpzIiwic291cmNlcyI6WyJ0ZW1wbGF0ZS5jbGpzIl0sImxpbmVDb3VudCI6NjQxLCJtYXBwaW5ncyI6IjtBQWFBOzs7OytCQUFBLC9CQUVFQTtBQUVGLEFBQUE7Ozs7Ozs7OztBQUFBO0FBQUEsQ0FBQSwrQ0FBQSwvQ0FBU0s7QUFBVCxBQUFBLEFBQUE7OztBQUFBLENBQUEscURBQUEsckRBQVNBOztBQUFULENBQUEsd0RBQUEseERBQVNBOztBQUFULENBQUEsNkRBQUEsV0FBQUosb0JBQUFDLHNCQUFBQyxsSEFBU0U7QUFBVCxBQUFBLE9BQUFELDJCQUFBRixzQkFBQTs7O0FBQUE7OzsyQ0FBQSwzQ0FBU0ksOEZBQWVDLElBQUlDLEdBQUdDO0FBQS9CLEFBQUEsWUFBQUosb0NBQXdCRSxJQUFJQyxHQUFHQzs7O0FBQXRCSixBQUVULDBDQUFBLDFDQUFNSyw0RkFDSEM7QUFESCxBQUVFLDREQUFBLEtBQUEsMURBQUNMLG1EQUFnQks7O0FBSW5CLDBDQUFBLDFDQUFlQyw0RkFBYUM7QUFBNUIsQUFDRSxTQUFJLEFBQUNDLHlDQUFPRCxRQUNSLE9BQVNBOztBQUVmLHlDQUFBLHpDQUFlRSwwRkFBWUY7QUFBM0IsQUFDRSxTQUFJLEFBQUNELGtEQUFZQyxRQUNiLEFBQUNHLCtCQUFLSCxRQUNOLGNBQVdSLGJBQWNROztBQU8vQix3Q0FBQSxXQUFBLG9CQUFBLHNCQUFBLDdGQUFLSTtBQUlMLGtDQUFBLGxDQUFNQyw0RUFBV0MsRUFBRUM7QUFBbkIsQUFDRSxHQUFNLEFBQTBCRCxpQkFBRUM7QUFBbEMsQUFDRSxPQUFDQyxnQkFBU0YsRUFBRUM7O0FBRGQ7OztBQUdGLHlDQUFBLHpDQUFNRSwwRkFBa0JGO0FBQXhCLEFBQ0UsR0FBSSxBQUFDTix5Q0FBT007QUFDVixJQUFBRyxxQkFBYSxBQUFDTCwwQ0FBVUQsc0NBQWdCLEFBQUNRLHlCQUFLTDtBQUE5QyxBQUFBLEdBQUEsQ0FBQUcsc0JBQUE7QUFFRSxJQUFNRyxJQUFFLEFB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O0FBSGYsQUFJSSxPQUFDa0YsMkNBQVdsRixVQUFLMUMsRUFBRXVIOzs7QUFKdkIsQ0FBQSxBQUFBLEFBQUFpQixrSEFBQSxXQUtpQjlGLE1BQUtDLEtBQUtDLFVBQVVDLFFBQVFDOztBQUw3QyxBQUFBLGdCQUFBLFpBS2lCSjtBQUxqQixBQU1JLE9BQUNELDZDQUFhQyxVQUFLQyxLQUFLQyxVQUFVQyxRQUFRQzs7O0FBTjlDLENBQUEsQUFBQTBGLDREQUFBO0FBQUEsQUFBQSxBQUFBOzs7QUFBQSxDQUFBLEFBQUFBLGtFQUFBOztBQUFBLENBQUEsQUFBQUEscUVBQUE7O0FBQUEsQ0FBQSxBQUFBQSwwRUFBQSxXQUFBcEosb0JBQUFDLHNCQUFBQztBQUFBLEFBQUEsT0FBQUMsMkJBQUFGLHNCQUFBOzs7QUFBQTs7OzBJQUxtQjZJLFNBQ2Z2SSxPQUNBNEgsMUpBR0pvQix3REFBQSxvSEFBQUQ7NkRBTG1CUixTQUNmdkksT0FDQTRILDdFQUdKLEFBQUEsWUFBQWlCLG1GQUFBRTs7O0FBQUFGOzs2REFMbUJOLEtBQ2Z2SSxHQUNBNEgsckVBR0osWUFBQWlCLHVFQUFBOztBQVFKLEFBQUtJLCtDQUFrQixnREFBQSxoREFBQ1g7QUFDeEIsQUFBZVkseUNBQWlCRDtBQUVoQyxtREFBQSxuREFBTUUsOEdBQXVCNUU7QUFBN0IsQUFDRSxRQUFNMkUseUNBQWlCM0UiLCJuYW1lcyI6WyJyZWFnZW50LmltcGwudGVtcGxhdGUvcmUtdGFnIiwidGhpc19fMTEzODVfX2F1dG9fXyIsIndyaXRlcl9fMTEzODZfX2F1dG9fXyIsIm9wdF9fMTEzODdfX2F1dG9fXyIsImNsanMuY29yZS8td3JpdGUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvTmF0aXZlV3JhcHBlciIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS8tPk5hdGl2ZVdyYXBwZXIiLCJ0YWciLCJpZCIsImNsYXNzTmFtZSIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9hZGFwdC1yZWFjdC1jbGFzcyIsImMiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvaGljY3VwLXRhZz8iLCJ4IiwicmVhZ2VudC5pbXBsLnV0aWwvbmFtZWQ/IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3ZhbGlkLXRhZz8iLCJjbGpzLmNvcmUvaWZuPyIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9wcm9wLW5hbWUtY2FjaGUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY2FjaGUtZ2V0IiwibyIsImsiLCJnb29nLm9iamVjdC9nZXQiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY2FjaGVkLXByb3AtbmFtZSIsInRlbXBfXzk3MTRfX2F1dG9fXyIsImsnIiwiY2xqcy5jb3JlL25hbWUiLCJ2IiwicmVhZ2VudC5pbXBsLnV0aWwvZGFzaC10by1wcm9wLW5hbWUiLCJnb29nLm9iamVjdC9zZXQiLCJyZWFnZW50LmltcGwudGVtcGxhdGUva3YtY29udiIsIkdfXzM1NyIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9jb252ZXJ0LXByb3AtdmFsdWUiLCJyZWFnZW50LmltcGwudXRpbC9qcy12YWw/IiwiY2xqcy5jb3JlL21hcD8iLCJjbGpzLmNvcmUvcmVkdWNlLWt2IiwiY2xqcy5jb3JlL2NvbGw/IiwiY2xqcy5jb3JlL2Nsai0+anMiLCJhcmdzIiwiY2xqcy5jb3JlL2FwcGx5IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2N1c3RvbS1wcm9wLW5hbWUtY2FjaGUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY2FjaGVkLWN1c3RvbS1wcm9wLW5hbWUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY3VzdG9tLWt2LWNvbnYiLCJHX18zNjEiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY29udmVydC1jdXN0b20tcHJvcC12YWx1ZSIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9zZXQtaWQtY2xhc3MiLCJwcm9wcyIsImlkLWNsYXNzIiwiY2xhc3MiLCJHX18zNjUiLCJjbGpzLmNvcmUvYXNzb2MiLCJyZWFnZW50LmltcGwudXRpbC9jbGFzcy1uYW1lcyIsIm9yX18xMDExNl9fYXV0b19fIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2NvbnZlcnQtcHJvcHMiLCJHX18zNjYiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvbWFrZS1lbGVtZW50IiwidGhpcyIsImFyZ3YiLCJjb21wb25lbnQiLCJqc3Byb3BzIiwiZmlyc3QtY2hpbGQiLCJHX18zNjciLCJjbGpzLmNvcmUvY291bnQiLCJyZWFjdC9jcmVhdGVFbGVtZW50IiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9hcy1lbGVtZW50IiwiY2xqcy5jb3JlL250aCIsImEiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvSGljY3VwVGFnIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlLy0+SGljY3VwVGFnIiwiY3VzdG9tIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3BhcnNlLXRhZyIsImhpY2N1cC10YWciLCJ2ZWNfXzM2OSIsImNsanMuY29yZS9yZS1tYXRjaGVzIiwiY2xqcy5jb3JlL25leHQiLCJjbG9qdXJlLnN0cmluZy9yZXBsYWNlIiwianMvRXJyb3IiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NvbXAtbmFtZSIsImNsanMuY29yZS9ub3Q9IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3JlYWctZWxlbWVudCIsImNvbXBpbGVyIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9hcy1jbGFzcyIsInRlbXBfXzk3NzRfX2F1dG9fXyIsImtleSIsInJlYWdlbnQuaW1wbC51dGlsL3JlYWN0LWtleS1mcm9tLXZlYyIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9mdW5jdGlvbi1lbGVtZW50IiwiZmlyc3QtYXJnIiwiY2xqcy5jb3JlL3N1YnZlYyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZnVuY3Rpb25hbC1yZW5kZXItZm4iLCJyZWFnZW50LmltcGwudGVtcGxhdGUvbWF5YmUtZnVuY3Rpb24tZWxlbWVudCIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmVhY3QtY2xhc3M/IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2ZyYWdtZW50LWVsZW1lbnQiLCJoYXNwcm9wcyIsInJlYWdlbnQuaW1wbC5wcm90b2NvbHMvbWFrZS1lbGVtZW50IiwicmVhY3QvRnJhZ21lbnQiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvdGFnLW5hbWUtY2FjaGUiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY2FjaGVkLXBhcnNlIiwicyIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9uYXRpdmUtZWxlbWVudCIsInBhcnNlZCIsImZpcnN0IiwicmVhZ2VudC5pbXBsLmlucHV0L2lucHV0LWNvbXBvbmVudD8iLCJpbnB1dC1jbGFzcyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY3JlYXRlLWNsYXNzIiwicmVhZ2VudC5pbXBsLmlucHV0L2lucHV0LXNwZWMiLCJjbGpzLmNvcmUvd2l0aC1tZXRhIiwiY2xqcy5jb3JlL21ldGEiLCJyZWFnZW50LmltcGwudXRpbC9nZXQtcmVhY3Qta2V5IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3Jhdy1lbGVtZW50IiwiY29tcCIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9leHBhbmQtc2VxIiwiY2xqcy5jb3JlL2ludG8tYXJyYXkiLCJwMV9fMTIjIiwiY2xqcy5jb3JlL21hcCIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9leHBhbmQtc2VxLWRldiIsInZhbCIsImNsanMuY29yZS92ZWN0b3I/IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2V4cGFuZC1zZXEtY2hlY2siLCJ2ZWNfXzM4MiIsImN0eCIsInJlcyIsImRlcmVmZWQiLCJyZWFnZW50LnJhdG9tL2NoZWNrLWRlcmVmcyIsInJlYWdlbnQvZGVidWciLCJqcy9jb25zb2xlIiwicmVhZ2VudC5pbXBsLnV0aWwvaGljY3VwLWVyciIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9oaWNjdXAtZWxlbWVudCIsIm4iLCJwb3MiLCJHX18zODUiLCJjbGpzLmNvcmUvPSIsImNsanMuY29yZS9zdWJzIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3ZlYy10by1lbGVtIiwiZm4tdG8tZWxlbWVudCIsImpzL2NvbnNvbGUuZXJyb3IiLCJjbGpzLmNvcmUvcHItc3RyIiwiR19fMzg5IiwiY2xqcy5jb3JlL0tleXdvcmQiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvYXMtZWxlbWVudCIsImNsanMuY29yZS9zZXE/IiwiY2xqcy5jb3JlL1BST1RPQ09MX1NFTlRJTkVMIiwiY2xqcy5jb3JlL25hdGl2ZS1zYXRpc2ZpZXM/IiwiY2xqcy5jb3JlL0lQcmludFdpdGhXcml0ZXIiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY3JlYXRlLWNvbXBpbGVyIiwib3B0cyIsImNsanMuY29yZS9nZW5zeW0iLCJqcy9yZWFnZW50IiwianMvcmVhZ2VudC5pbXBsIiwianMvcmVhZ2VudC5pbXBsLnRlbXBsYXRlIiwianMvcmVhZ2VudC5pbXBsLnRlbXBsYXRlLnRfcmVhZ2VudCRpbXBsJHRlbXBsYXRlMzkyIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3RfcmVhZ2VudCRpbXBsJHRlbXBsYXRlMzkyIiwiXzM5NCIsIm1ldGEzOTMiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvLT50X3JlYWdlbnQkaW1wbCR0ZW1wbGF0ZTM5MiIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9kZWZhdWx0LWNvbXBpbGVyKiIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9kZWZhdWx0LWNvbXBpbGVyIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL3NldC1kZWZhdWx0LWNvbXBpbGVyISJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5pbXBsLnRlbXBsYXRlXG4gICg6cmVxdWlyZSBbcmVhY3QgOmFzIHJlYWN0XVxuICAgICAgICAgICAgW2Nsb2p1cmUuc3RyaW5nIDphcyBzdHJpbmddXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnV0aWwgOmFzIHV0aWwgOnJlZmVyIFtuYW1lZD9dXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5jb21wb25lbnQgOmFzIGNvbXBdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmJhdGNoaW5nIDphcyBiYXRjaF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwuaW5wdXQgOmFzIGlucHV0XVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5wcm90b2NvbHMgOmFzIHBdXG4gICAgICAgICAgICBbcmVhZ2VudC5yYXRvbSA6YXMgcmF0b21dXG4gICAgICAgICAgICBbcmVhZ2VudC5kZWJ1ZyA6cmVmZXItbWFjcm9zIFtkZXY/IHdhcm5dXVxuICAgICAgICAgICAgW2dvb2cub2JqZWN0IDphcyBnb2JqXSkpXG5cbjs7IEZyb20gV2VhdmVqZXN0ZXIncyBIaWNjdXAsIHZpYSBwdW1wOlxuKGRlZiBeezpkb2MgXCJSZWd1bGFyIGV4cHJlc3Npb24gdGhhdCBwYXJzZXMgYSBDU1Mtc3R5bGUgaWQgYW5kIGNsYXNzXG4gICAgICAgICAgICAgZnJvbSBhIHRhZyBuYW1lLlwifVxuICByZS10YWcgI1wiKFteXFxzXFwuI10rKSg/OiMoW15cXHNcXC4jXSspKT8oPzpcXC4oW15cXHMjXSspKT9cIilcblxuKGRlZnR5cGUgTmF0aXZlV3JhcHBlciBbdGFnIGlkIGNsYXNzTmFtZV0pXG5cbihkZWZuIGFkYXB0LXJlYWN0LWNsYXNzXG4gIFtjXVxuICAoLT5OYXRpdmVXcmFwcGVyIGMgbmlsIG5pbCkpXG5cbjs7OyBDb21tb24gdXRpbGl0aWVzXG5cbihkZWZuIF5ib29sZWFuIGhpY2N1cC10YWc/IFt4XVxuICAob3IgKG5hbWVkPyB4KVxuICAgICAgKHN0cmluZz8geCkpKVxuXG4oZGVmbiBeYm9vbGVhbiB2YWxpZC10YWc/IFt4XVxuICAob3IgKGhpY2N1cC10YWc/IHgpXG4gICAgICAoaWZuPyB4KVxuICAgICAgKGluc3RhbmNlPyBOYXRpdmVXcmFwcGVyIHgpKSlcblxuOzs7IFByb3BzIGNvbnZlcnNpb25cblxuOzsgVE9ETzogTW92ZSBwcm9wLW5hbWUgY2FjaGVzIHRvIHRoZSBjb21waWxlciBvYmplY3QsIGlmIHRoaXNcbjs7IGNvbnZlcnNpb24gY2FuIGJlIGNvbmZpZ3VyZWQuXG5cbihkZWYgcHJvcC1uYW1lLWNhY2hlICNqc3s6Y2xhc3MgXCJjbGFzc05hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3IgXCJodG1sRm9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICA6Y2hhcnNldCBcImNoYXJTZXRcIn0pXG5cbihkZWZuIGNhY2hlLWdldCBbbyBrXVxuICAod2hlbiBeYm9vbGVhbiAoLmhhc093blByb3BlcnR5IG8gaylcbiAgICAoZ29iai9nZXQgbyBrKSkpXG5cbihkZWZuIGNhY2hlZC1wcm9wLW5hbWUgW2tdXG4gIChpZiAobmFtZWQ/IGspXG4gICAgKGlmLXNvbWUgW2snIChjYWNoZS1nZXQgcHJvcC1uYW1lLWNhY2hlIChuYW1lIGspKV1cbiAgICAgIGsnXG4gICAgICAobGV0IFt2ICh1dGlsL2Rhc2gtdG8tcHJvcC1uYW1lIGspXVxuICAgICAgICAoZ29iai9zZXQgcHJvcC1uYW1lLWNhY2hlIChuYW1lIGspIHYpXG4gICAgICAgIHYpKVxuICAgIGspKVxuXG4oZGVjbGFyZSBjb252ZXJ0LXByb3AtdmFsdWUpXG5cbihkZWZuIGt2LWNvbnYgW28gayB2XVxuICAoZG90byBvXG4gICAgKGdvYmovc2V0IChjYWNoZWQtcHJvcC1uYW1lIGspIChjb252ZXJ0LXByb3AtdmFsdWUgdikpKSlcblxuKGRlZm4gY29udmVydC1wcm9wLXZhbHVlIFt4XVxuICAoY29uZCAodXRpbC9qcy12YWw/IHgpIHhcbiAgICAgICAgKG5hbWVkPyB4KSAobmFtZSB4KVxuICAgICAgICAobWFwPyB4KSAocmVkdWNlLWt2IGt2LWNvbnYgI2pze30geClcbiAgICAgICAgKGNvbGw/IHgpIChjbGotPmpzIHgpXG4gICAgICAgIChpZm4/IHgpIChmbiBbJiBhcmdzXVxuICAgICAgICAgICAgICAgICAgIChhcHBseSB4IGFyZ3MpKVxuICAgICAgICA6ZWxzZSAoY2xqLT5qcyB4KSkpXG5cbjs7IFByZXZpb3VzIGZldyBmdW5jdGlvbnMgY29waWVkIGZvciBjdXN0b20gZWxlbWVudHMsXG47OyB3aXRob3V0IG1hcHBpbmcgZnJvbSBjbGFzcyB0byBjbGFzc05hbWUgZXRjLlxuXG4oZGVmIGN1c3RvbS1wcm9wLW5hbWUtY2FjaGUgI2pze30pXG5cbihkZWZuIGNhY2hlZC1jdXN0b20tcHJvcC1uYW1lIFtrXVxuICAoaWYgKG5hbWVkPyBrKVxuICAgIChpZi1zb21lIFtrJyAoY2FjaGUtZ2V0IGN1c3RvbS1wcm9wLW5hbWUtY2FjaGUgKG5hbWUgaykpXVxuICAgICAgaydcbiAgICAgIChsZXQgW3YgKHV0aWwvZGFzaC10by1wcm9wLW5hbWUgayldXG4gICAgICAgIChnb2JqL3NldCBjdXN0b20tcHJvcC1uYW1lLWNhY2hlIChuYW1lIGspIHYpXG4gICAgICAgIHYpKVxuICAgIGspKVxuXG4oZGVmbiBjdXN0b20ta3YtY29udiBbbyBrIHZdXG4gIChkb3RvIG9cbiAgICAoZ29iai9zZXQgKGNhY2hlZC1jdXN0b20tcHJvcC1uYW1lIGspIChjb252ZXJ0LXByb3AtdmFsdWUgdikpKSlcblxuKGRlZm4gY29udmVydC1jdXN0b20tcHJvcC12YWx1ZSBbeF1cbiAgKGNvbmQgKHV0aWwvanMtdmFsPyB4KSB4XG4gICAgICAgIChuYW1lZD8geCkgKG5hbWUgeClcbiAgICAgICAgKG1hcD8geCkgKHJlZHVjZS1rdiBjdXN0b20ta3YtY29udiAjanN7fSB4KVxuICAgICAgICAoY29sbD8geCkgKGNsai0+anMgeClcbiAgICAgICAgKGlmbj8geCkgKGZuIFsmIGFyZ3NdXG4gICAgICAgICAgICAgICAgICAgKGFwcGx5IHggYXJncykpXG4gICAgICAgIDplbHNlIChjbGotPmpzIHgpKSlcblxuKGRlZm4gc2V0LWlkLWNsYXNzXG4gIFwiVGFrZXMgdGhlIGlkIGFuZCBjbGFzcyBmcm9tIHRhZyBrZXl3b3JkLCBhbmQgYWRkcyB0aGVtIHRvIHRoZVxuICBvdGhlciBwcm9wcy4gUGFyc2VkIHRhZyBpcyBKUyBvYmplY3Qgd2l0aCA6aWQgYW5kIDpjbGFzcyBwcm9wZXJ0aWVzLlwiXG4gIFtwcm9wcyBpZC1jbGFzc11cbiAgKGxldCBbaWQgKC4taWQgaWQtY2xhc3MpXG4gICAgICAgIGNsYXNzICguLWNsYXNzTmFtZSBpZC1jbGFzcyldXG4gICAgKGNvbmQtPiBwcm9wc1xuICAgICAgOzsgT25seSB1c2UgSUQgZnJvbSB0YWcga2V5d29yZCBpZiBubyA6aWQgaW4gcHJvcHMgYWxyZWFkeVxuICAgICAgKGFuZCAoc29tZT8gaWQpXG4gICAgICAgICAgIChuaWw/ICg6aWQgcHJvcHMpKSlcbiAgICAgIChhc3NvYyA6aWQgaWQpXG5cbiAgICAgIDs7IE1lcmdlIGNsYXNzZXNcbiAgICAgIGNsYXNzXG4gICAgICA7OyBOb3RlOiBzb21lb25lIG1pZ2h0IHVzZSBSZWFjdC1zdHlsZSA6Y2xhc3NOYW1lIHByb3BlcnR5LFxuICAgICAgOzsgdGhpcyBpcyB0aGUgb25seSBwbGFjZSB3aGVyZSB0aGF0IG5lZWRzIHNwZWNpYWwgY2FzZS4gVXNpbmdcbiAgICAgIDs7IDpjbGFzcyBhbmQgOmNsYXNzTmFtZSB0b2dldGhlciBpcyBub3Qgc3VwcG9ydGVkLlxuICAgICAgKGFzc29jIDpjbGFzcyAodXRpbC9jbGFzcy1uYW1lcyBjbGFzcyAob3IgKDpjbGFzcyBwcm9wcykgKDpjbGFzc05hbWUgcHJvcHMpKSkpKSkpXG5cbihkZWZuIGNvbnZlcnQtcHJvcHMgW3Byb3BzIF5jbGogaWQtY2xhc3NdXG4gIChsZXQgW2NsYXNzICg6Y2xhc3MgcHJvcHMpXG4gICAgICAgIHByb3BzICgtPiBwcm9wc1xuICAgICAgICAgICAgICAgICAgKGNvbmQtPiBjbGFzcyAoYXNzb2MgOmNsYXNzICh1dGlsL2NsYXNzLW5hbWVzIGNsYXNzKSkpXG4gICAgICAgICAgICAgICAgICAoc2V0LWlkLWNsYXNzIGlkLWNsYXNzKSldXG4gICAgKGlmICguLWN1c3RvbSBpZC1jbGFzcylcbiAgICAgIChjb252ZXJ0LWN1c3RvbS1wcm9wLXZhbHVlIHByb3BzKVxuICAgICAgKGNvbnZlcnQtcHJvcC12YWx1ZSBwcm9wcykpKSlcblxuOzs7IENvbnZlcnNpb24gZnJvbSBIaWNjdXAgZm9ybXNcblxuKGRlZm4gbWFrZS1lbGVtZW50IFt0aGlzIGFyZ3YgY29tcG9uZW50IGpzcHJvcHMgZmlyc3QtY2hpbGRdXG4gIChjYXNlICgtIChjb3VudCBhcmd2KSBmaXJzdC1jaGlsZClcbiAgICA7OyBPcHRpbWl6ZSBjYXNlcyBvZiB6ZXJvIG9yIG9uZSBjaGlsZFxuICAgIDAgKHJlYWN0L2NyZWF0ZUVsZW1lbnQgY29tcG9uZW50IGpzcHJvcHMpXG5cbiAgICAxIChyZWFjdC9jcmVhdGVFbGVtZW50IGNvbXBvbmVudCBqc3Byb3BzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAocC9hcy1lbGVtZW50IHRoaXMgKG50aCBhcmd2IGZpcnN0LWNoaWxkIG5pbCkpKVxuXG4gICAgKC5hcHBseSByZWFjdC9jcmVhdGVFbGVtZW50IG5pbFxuICAgICAgICAgICAgKHJlZHVjZS1rdiAoZm4gW2EgayB2XVxuICAgICAgICAgICAgICAgICAgICAgICAgICh3aGVuICg+PSBrIGZpcnN0LWNoaWxkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoLnB1c2ggYSAocC9hcy1lbGVtZW50IHRoaXMgdikpKVxuICAgICAgICAgICAgICAgICAgICAgICAgIGEpXG4gICAgICAgICAgICAgICAgICAgICAgICNqcyBbY29tcG9uZW50IGpzcHJvcHNdIGFyZ3YpKSkpXG5cbihkZWZ0eXBlIEhpY2N1cFRhZyBbdGFnIGlkIGNsYXNzTmFtZSBjdXN0b21dKVxuXG4oZGVmbiBwYXJzZS10YWcgW2hpY2N1cC10YWddXG4gIChsZXQgW1t0YWcgaWQgY2xhc3NOYW1lXSAoLT4+IGhpY2N1cC10YWcgbmFtZSAocmUtbWF0Y2hlcyByZS10YWcpIG5leHQpXG4gICAgICAgIGNsYXNzTmFtZSAod2hlbi1ub3QgKG5pbD8gY2xhc3NOYW1lKVxuICAgICAgICAgICAgICAgICAgICAoc3RyaW5nL3JlcGxhY2UgY2xhc3NOYW1lICNcIlxcLlwiIFwiIFwiKSldXG4gICAgKGFzc2VydCB0YWcgKHN0ciBcIkludmFsaWQgdGFnOiAnXCIgaGljY3VwLXRhZyBcIidcIiAoY29tcC9jb21wLW5hbWUpKSlcbiAgICAoLT5IaWNjdXBUYWcgdGFnXG4gICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICA7OyBDdXN0b20gZWxlbWVudCBuYW1lcyBtdXN0IGNvbnRhaW4gaHlwaGVuXG4gICAgICAgICAgICAgICAgIDs7IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jdXN0b20tZWxlbWVudHMvI2N1c3RvbS1lbGVtZW50cy1jb3JlLWNvbmNlcHRzXG4gICAgICAgICAgICAgICAgIChub3Q9IC0xICguaW5kZXhPZiB0YWcgXCItXCIpKSkpKVxuXG4oZGVmbiByZWFnLWVsZW1lbnQgW3RhZyB2IGNvbXBpbGVyXVxuICAobGV0IFtjIChjb21wL2FzLWNsYXNzIHRhZyBjb21waWxlcilcbiAgICAgICAganNwcm9wcyAjanMge31dXG4gICAgKHNldCEgKC4tYXJndiBqc3Byb3BzKSB2KVxuICAgICh3aGVuLXNvbWUgW2tleSAodXRpbC9yZWFjdC1rZXktZnJvbS12ZWMgdildXG4gICAgICAoc2V0ISAoLi1rZXkganNwcm9wcykga2V5KSlcbiAgICAocmVhY3QvY3JlYXRlRWxlbWVudCBjIGpzcHJvcHMpKSlcblxuKGRlZm4gZnVuY3Rpb24tZWxlbWVudCBbdGFnIHYgZmlyc3QtYXJnIGNvbXBpbGVyXVxuICAobGV0IFtqc3Byb3BzICNqcyB7fV1cbiAgICAoc2V0ISAoLi1yZWFnZW50UmVuZGVyIGpzcHJvcHMpIHRhZylcbiAgICAoc2V0ISAoLi1hcmd2IGpzcHJvcHMpIChzdWJ2ZWMgdiBmaXJzdC1hcmcpKVxuICAgIDsgKHNldCEgKC4tb3B0cyBqc3Byb3BzKSBvcHRzKVxuICAgICh3aGVuLXNvbWUgW2tleSAodXRpbC9yZWFjdC1rZXktZnJvbS12ZWMgdildXG4gICAgICAoc2V0ISAoLi1rZXkganNwcm9wcykga2V5KSlcbiAgICAocmVhY3QvY3JlYXRlRWxlbWVudCAoY29tcC9mdW5jdGlvbmFsLXJlbmRlci1mbiBjb21waWxlciB0YWcpIGpzcHJvcHMpKSlcblxuKGRlZm4gbWF5YmUtZnVuY3Rpb24tZWxlbWVudFxuICBcIklmIGdpdmVuIHRhZyBpcyBhIENsYXNzLCB1c2UgaXQgYXMgYSBjbGFzcyxcbiAgZWxzZSB3cmFwIGluIFJlYWdlbnQgZnVuY3Rpb24gd3JhcHBlci5cIlxuICBbdGFnIHYgY29tcGlsZXJdXG4gIChpZiAoY29tcC9yZWFjdC1jbGFzcz8gdGFnKVxuICAgIChyZWFnLWVsZW1lbnQgdGFnIHYgY29tcGlsZXIpXG4gICAgKGZ1bmN0aW9uLWVsZW1lbnQgdGFnIHYgMSBjb21waWxlcikpKVxuXG4oZGVmbiBmcmFnbWVudC1lbGVtZW50IFthcmd2IGNvbXBpbGVyXVxuICAobGV0IFtwcm9wcyAobnRoIGFyZ3YgMSBuaWwpXG4gICAgICAgIGhhc3Byb3BzIChvciAobmlsPyBwcm9wcykgKG1hcD8gcHJvcHMpKVxuICAgICAgICBqc3Byb3BzIChvciAoY29udmVydC1wcm9wLXZhbHVlIChpZiBoYXNwcm9wcyBwcm9wcykpXG4gICAgICAgICAgICAgICAgICAgICNqcyB7fSlcbiAgICAgICAgZmlyc3QtY2hpbGQgKCsgMSAoaWYgaGFzcHJvcHMgMSAwKSldXG4gICAgKHdoZW4tc29tZSBba2V5ICh1dGlsL3JlYWN0LWtleS1mcm9tLXZlYyBhcmd2KV1cbiAgICAgIChzZXQhICguLWtleSBqc3Byb3BzKSBrZXkpKVxuICAgIChwL21ha2UtZWxlbWVudCBjb21waWxlciBhcmd2IHJlYWN0L0ZyYWdtZW50IGpzcHJvcHMgZmlyc3QtY2hpbGQpKSlcblxuKGRlZiB0YWctbmFtZS1jYWNoZSAjanMge30pXG5cbihkZWZuIGNhY2hlZC1wYXJzZSBbeF1cbiAgKGlmLXNvbWUgW3MgKGNhY2hlLWdldCB0YWctbmFtZS1jYWNoZSB4KV1cbiAgICBzXG4gICAgKGxldCBbdiAocGFyc2UtdGFnIHgpXVxuICAgICAgKGdvYmovc2V0IHRhZy1uYW1lLWNhY2hlIHggdilcbiAgICAgIHYpKSlcblxuKGRlZm4gbmF0aXZlLWVsZW1lbnQgW3BhcnNlZCBhcmd2IGZpcnN0IGNvbXBpbGVyXVxuICAobGV0IFtjb21wb25lbnQgKC4tdGFnIHBhcnNlZClcbiAgICAgICAgcHJvcHMgKG50aCBhcmd2IGZpcnN0IG5pbClcbiAgICAgICAgaGFzcHJvcHMgKG9yIChuaWw/IHByb3BzKSAobWFwPyBwcm9wcykpXG4gICAgICAgIGpzcHJvcHMgKG9yIChjb252ZXJ0LXByb3BzIChpZiBoYXNwcm9wcyBwcm9wcykgcGFyc2VkKVxuICAgICAgICAgICAgICAgICAgICAjanMge30pXG4gICAgICAgIGZpcnN0LWNoaWxkICgrIGZpcnN0IChpZiBoYXNwcm9wcyAxIDApKV1cbiAgICAoaWYgKGlucHV0L2lucHV0LWNvbXBvbmVudD8gY29tcG9uZW50KVxuICAgICAgKGxldCBbaW5wdXQtY2xhc3MgKG9yICguLXJlYWdlbnRJbnB1dCBjb21waWxlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGV0IFt4IChjb21wL2NyZWF0ZS1jbGFzcyBpbnB1dC9pbnB1dC1zcGVjIGNvbXBpbGVyKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzZXQhICguLXJlYWdlbnRJbnB1dCBjb21waWxlcikgeClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgpKV1cbiAgICAgICAgKC0+IFtpbnB1dC1jbGFzcyBhcmd2IGNvbXBvbmVudCBqc3Byb3BzIGZpcnN0LWNoaWxkIGNvbXBpbGVyXVxuICAgICAgICAgICAgKHdpdGgtbWV0YSAobWV0YSBhcmd2KSlcbiAgICAgICAgICAgICgtPj4gKHAvYXMtZWxlbWVudCBjb21waWxlcikpKSlcbiAgICAgIChkb1xuICAgICAgICAod2hlbi1zb21lIFtrZXkgKC0+IChtZXRhIGFyZ3YpIHV0aWwvZ2V0LXJlYWN0LWtleSldXG4gICAgICAgICAgKHNldCEgKC4ta2V5IGpzcHJvcHMpIGtleSkpXG4gICAgICAgIChwL21ha2UtZWxlbWVudCBjb21waWxlciBhcmd2IGNvbXBvbmVudCBqc3Byb3BzIGZpcnN0LWNoaWxkKSkpKSlcblxuKGRlZm4gcmF3LWVsZW1lbnQgW2NvbXAgYXJndiBjb21waWxlcl1cbiAgKGxldCBbcHJvcHMgKG50aCBhcmd2IDIgbmlsKVxuICAgICAgICBqc3Byb3BzIChvciBwcm9wcyAjanMge30pXVxuICAgICh3aGVuLXNvbWUgW2tleSAoLT4gKG1ldGEgYXJndikgdXRpbC9nZXQtcmVhY3Qta2V5KV1cbiAgICAgIChzZXQhICguLWtleSBqc3Byb3BzKSBrZXkpKVxuICAgIChwL21ha2UtZWxlbWVudCBjb21waWxlciBhcmd2IGNvbXAganNwcm9wcyAzKSkpXG5cbihkZWZuIGV4cGFuZC1zZXEgW3MgY29tcGlsZXJdXG4gIChpbnRvLWFycmF5IChtYXAgIyhwL2FzLWVsZW1lbnQgY29tcGlsZXIgJSkgcykpKVxuXG4oZGVmbiBleHBhbmQtc2VxLWRldiBbcyBeY2xqIG8gY29tcGlsZXJdXG4gIChpbnRvLWFycmF5IChtYXAgKGZuIFt2YWxdXG4gICAgICAgICAgICAgICAgICAgICAod2hlbiAoYW5kICh2ZWN0b3I/IHZhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG5pbD8gKHV0aWwvcmVhY3Qta2V5LWZyb20tdmVjIHZhbCkpKVxuICAgICAgICAgICAgICAgICAgICAgICAoc2V0ISAoLi1uby1rZXkgbykgdHJ1ZSkpXG4gICAgICAgICAgICAgICAgICAgICAocC9hcy1lbGVtZW50IGNvbXBpbGVyIHZhbCkpXG4gICAgICAgICAgICAgICAgICAgcykpKVxuXG4oZGVmbiBleHBhbmQtc2VxLWNoZWNrIFt4IGNvbXBpbGVyXVxuICAobGV0IFtjdHggI2pzIHt9XG4gICAgICAgIFtyZXMgZGVyZWZlZF0gKHJhdG9tL2NoZWNrLWRlcmVmcyAjKGV4cGFuZC1zZXEtZGV2IHggY3R4IGNvbXBpbGVyKSldXG4gICAgKHdoZW4gZGVyZWZlZFxuICAgICAgKHdhcm4gKHV0aWwvaGljY3VwLWVyciB4IChjb21wL2NvbXAtbmFtZSkgXCJSZWFjdGl2ZSBkZXJlZiBub3Qgc3VwcG9ydGVkIGluIGxhenkgc2VxLCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdCBzaG91bGQgYmUgd3JhcHBlZCBpbiBkb2FsbFwiKSkpXG4gICAgKHdoZW4gKC4tbm8ta2V5IGN0eClcbiAgICAgICh3YXJuICh1dGlsL2hpY2N1cC1lcnIgeCAoY29tcC9jb21wLW5hbWUpIFwiRXZlcnkgZWxlbWVudCBpbiBhIHNlcSBzaG91bGQgaGF2ZSBhIHVuaXF1ZSA6a2V5XCIpKSlcbiAgICByZXMpKVxuXG4oZGVmbiBoaWNjdXAtZWxlbWVudCBbdiBjb21waWxlcl1cbiAgKGxldCBbdGFnIChudGggdiAwIG5pbClcbiAgICAgICAgbiAobmFtZSB0YWcpXG4gICAgICAgIHBvcyAoLmluZGV4T2YgbiBcIj5cIildXG4gICAgKGNhc2UgcG9zXG4gICAgICAtMSAobmF0aXZlLWVsZW1lbnQgKGNhY2hlZC1wYXJzZSBuKSB2IDEgY29tcGlsZXIpXG4gICAgICAwIChhc3NlcnQgKD0gXCI+XCIgbikgKHV0aWwvaGljY3VwLWVyciB2IChjb21wL2NvbXAtbmFtZSkgXCJJbnZhbGlkIEhpY2N1cCB0YWdcIikpXG4gICAgICA7OyBTdXBwb3J0IGV4dGVuZGVkIGhpY2N1cCBzeW50YXgsIGkuZSA6ZGl2LmJhcj5hLmZvb1xuICAgICAgOzsgQXBwbHkgbWV0YWRhdGEgKGUuZy4gOmtleSkgdG8gdGhlIG91dGVybW9zdCBlbGVtZW50LlxuICAgICAgOzsgTWV0YWRhdGEgaXMgcHJvYmFibHkgdXNlZCBvbmx5IHdpdGggc2VxdWVuZWNlcywgYW5kIGluIHRoYXQgY2FzZVxuICAgICAgOzsgb25seSB0aGUga2V5IG9mIHRoZSBvdXRlcm1vc3QgZWxlbWVudCBtYXR0ZXJzLlxuICAgICAgKHJlY3VyICh3aXRoLW1ldGEgWyhzdWJzIG4gMCBwb3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGFzc29jICh3aXRoLW1ldGEgdiBuaWwpIDAgKHN1YnMgbiAoaW5jIHBvcykpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIChtZXRhIHYpKVxuICAgICAgICAgICAgIGNvbXBpbGVyKSkpKVxuXG4oZGVmbiB2ZWMtdG8tZWxlbSBbdiBjb21waWxlciBmbi10by1lbGVtZW50XVxuICAod2hlbiAobmlsPyBjb21waWxlcilcbiAgICAoanMvY29uc29sZS5lcnJvciBcInZlYy10by1lbGVtXCIgKHByLXN0ciB2KSkpXG4gIChhc3NlcnQgKHBvcz8gKGNvdW50IHYpKSAodXRpbC9oaWNjdXAtZXJyIHYgKGNvbXAvY29tcC1uYW1lKSBcIkhpY2N1cCBmb3JtIHNob3VsZCBub3QgYmUgZW1wdHlcIikpXG4gIChsZXQgW3RhZyAobnRoIHYgMCBuaWwpXVxuICAgIChhc3NlcnQgKHZhbGlkLXRhZz8gdGFnKSAodXRpbC9oaWNjdXAtZXJyIHYgKGNvbXAvY29tcC1uYW1lKSBcIkludmFsaWQgSGljY3VwIGZvcm1cIikpXG4gICAgKGNhc2UgdGFnXG4gICAgICA6PiAobmF0aXZlLWVsZW1lbnQgKC0+SGljY3VwVGFnIChudGggdiAxIG5pbCkgbmlsIG5pbCBuaWwpIHYgMiBjb21waWxlcilcbiAgICAgIDpyPiAocmF3LWVsZW1lbnQgKG50aCB2IDEgbmlsKSB2IGNvbXBpbGVyKVxuICAgICAgOmY+IChmdW5jdGlvbi1lbGVtZW50IChudGggdiAxIG5pbCkgdiAyIGNvbXBpbGVyKVxuICAgICAgOjw+IChmcmFnbWVudC1lbGVtZW50IHYgY29tcGlsZXIpXG4gICAgICAoY29uZFxuICAgICAgIChoaWNjdXAtdGFnPyB0YWcpXG4gICAgICAgKGhpY2N1cC1lbGVtZW50IHYgY29tcGlsZXIpXG5cbiAgICAgICAoaW5zdGFuY2U/IE5hdGl2ZVdyYXBwZXIgdGFnKVxuICAgICAgIChuYXRpdmUtZWxlbWVudCB0YWcgdiAxIGNvbXBpbGVyKVxuXG4gICAgICAgOmVsc2UgKGZuLXRvLWVsZW1lbnQgdGFnIHYgY29tcGlsZXIpKSkpKVxuXG4oZGVmbiBhcy1lbGVtZW50IFt0aGlzIHggZm4tdG8tZWxlbWVudF1cbiAgKGNvbmQgKHV0aWwvanMtdmFsPyB4KSB4XG4gICAgICAgICh2ZWN0b3I/IHgpICh2ZWMtdG8tZWxlbSB4IHRoaXMgZm4tdG8tZWxlbWVudClcbiAgICAgICAgKHNlcT8geCkgKGlmIChkZXY/KVxuICAgICAgICAgICAgICAgICAgIChleHBhbmQtc2VxLWNoZWNrIHggdGhpcylcbiAgICAgICAgICAgICAgICAgICAoZXhwYW5kLXNlcSB4IHRoaXMpKVxuICAgICAgICAobmFtZWQ/IHgpIChuYW1lIHgpXG4gICAgICAgIChzYXRpc2ZpZXM/IElQcmludFdpdGhXcml0ZXIgeCkgKHByLXN0ciB4KVxuICAgICAgICA6ZWxzZSB4KSlcblxuKGRlZm4gY3JlYXRlLWNvbXBpbGVyIFtvcHRzXVxuICAobGV0IFtpZCAoZ2Vuc3ltKVxuICAgICAgICBmbi10by1lbGVtZW50IChpZiAoOmZ1bmN0aW9uLWNvbXBvbmVudHMgb3B0cylcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlLWZ1bmN0aW9uLWVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWctZWxlbWVudCldXG4gICAgKHJlaWZ5IHAvQ29tcGlsZXJcbiAgICAgIDs7IFRoaXMgaXMgdXNlZCB0byBhcyBjYWNoZSBrZXkgdG8gY2FjaGUgY29tcG9uZW50IGZucyBwZXIgY29tcGlsZXJcbiAgICAgIChnZXQtaWQgW3RoaXNdIGlkKVxuICAgICAgKGFzLWVsZW1lbnQgW3RoaXMgeF1cbiAgICAgICAgKGFzLWVsZW1lbnQgdGhpcyB4IGZuLXRvLWVsZW1lbnQpKVxuICAgICAgKG1ha2UtZWxlbWVudCBbdGhpcyBhcmd2IGNvbXBvbmVudCBqc3Byb3BzIGZpcnN0LWNoaWxkXVxuICAgICAgICAobWFrZS1lbGVtZW50IHRoaXMgYXJndiBjb21wb25lbnQganNwcm9wcyBmaXJzdC1jaGlsZCkpKSkpXG5cbihkZWYgZGVmYXVsdC1jb21waWxlciogKGNyZWF0ZS1jb21waWxlciB7fSkpXG4oZGVmIF46ZHluYW1pYyBkZWZhdWx0LWNvbXBpbGVyIGRlZmF1bHQtY29tcGlsZXIqKVxuXG4oZGVmbiBzZXQtZGVmYXVsdC1jb21waWxlciEgW2NvbXBpbGVyXVxuICAoc2V0ISBkZWZhdWx0LWNvbXBpbGVyIGNvbXBpbGVyKSlcbiJdfQ==