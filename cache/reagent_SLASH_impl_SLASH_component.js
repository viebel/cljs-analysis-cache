// Compiled by ClojureScript 1.10.597
goog.provide("reagent.impl.component");
reagent.impl.component.extract_props = (function reagent$impl$component$extract_props(v){
var p = cljs.core.nth.call(null,v,(1),null);
if(cljs.core.map_QMARK_.call(null,p)){
return p;
} else {
return null;
}
});
reagent.impl.component.extract_children = (function reagent$impl$component$extract_children(v){
var p = cljs.core.nth.call(null,v,(1),null);
var first_child = (((((p == null)) || (cljs.core.map_QMARK_.call(null,p))))?(2):(1));
if((cljs.core.count.call(null,v) > first_child)){
return cljs.core.subvec.call(null,v,first_child);
} else {
return null;
}
});
reagent.impl.component.props_argv = (function reagent$impl$component$props_argv(c,p){
var temp__9714__auto__ = p.argv;
if((temp__9714__auto__ == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c.constructor,reagent.impl.util.shallow_obj_to_map.call(null,p)], null);
} else {
var a = temp__9714__auto__;
return a;
}
});
reagent.impl.component.get_argv = (function reagent$impl$component$get_argv(c){
return reagent.impl.component.props_argv.call(null,c,c.props);
});
reagent.impl.component.get_props = (function reagent$impl$component$get_props(c){
var p = c.props;
var temp__9714__auto__ = p.argv;
if((temp__9714__auto__ == null)){
return reagent.impl.util.shallow_obj_to_map.call(null,p);
} else {
var v = temp__9714__auto__;
return reagent.impl.component.extract_props.call(null,v);
}
});
reagent.impl.component.get_children = (function reagent$impl$component$get_children(c){
var p = c.props;
var temp__9714__auto__ = p.argv;
if((temp__9714__auto__ == null)){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljsjs.react.Children.toArray.call(null,p.children));
} else {
var v = temp__9714__auto__;
return reagent.impl.component.extract_children.call(null,v);
}
});
reagent.impl.component.reagent_class_QMARK_ = (function reagent$impl$component$reagent_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__315 = c;
var G__315__$1 = (((G__315 == null))?null:G__315.prototype);
if((G__315__$1 == null)){
return null;
} else {
return G__315__$1.reagentRender;
}
})() == null)))));
});
reagent.impl.component.react_class_QMARK_ = (function reagent$impl$component$react_class_QMARK_(c){
return ((cljs.core.fn_QMARK_.call(null,c)) && ((!(((function (){var G__317 = c;
var G__317__$1 = (((G__317 == null))?null:G__317.prototype);
if((G__317__$1 == null)){
return null;
} else {
return G__317__$1.render;
}
})() == null)))));
});
reagent.impl.component.reagent_component_QMARK_ = (function reagent$impl$component$reagent_component_QMARK_(c){
return (!((c.reagentRender == null)));
});
reagent.impl.component.state_atom = (function reagent$impl$component$state_atom(this$){
var sa = this$.cljsState;
if((!((sa == null)))){
return sa;
} else {
return (this$.cljsState = reagent.ratom.atom.call(null,null));
}
});
/**
 * Calls the render function of the component `c`.  If result `res` evaluates to a:
 *   1) Vector (form-1 component) - Treats the vector as hiccup and returns
 *      a react element with a render function based on that hiccup
 *   2) Function (form-2 component) - updates the render function to `res` i.e. the internal function
 *      and calls wrap-render again (`recur`), until the render result doesn't evaluate to a function.
 *   3) Anything else - Returns the result of evaluating `c`
 */
reagent.impl.component.wrap_render = (function reagent$impl$component$wrap_render(c,compiler){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(cljs.core/ifn? f)"].join('')))})());
var res = ((c.cljsLegacyRender === true)?f.call(c,c):(function (){var v = reagent.impl.component.get_argv.call(null,c);
var n = cljs.core.count.call(null,v);
var G__318 = n;
switch (G__318) {
case (1):
return f.call(c);

break;
case (2):
return f.call(c,cljs.core.nth.call(null,v,(1)));

break;
case (3):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)));

break;
case (4):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)));

break;
case (5):
return f.call(c,cljs.core.nth.call(null,v,(1)),cljs.core.nth.call(null,v,(2)),cljs.core.nth.call(null,v,(3)),cljs.core.nth.call(null,v,(4)));

break;
default:
return f.apply(c,cljs.core.into_array.call(null,v).slice((1)));

}
})());
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.protocols.as_element.call(null,compiler,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (c,compiler,f,_,res){
return (function() { 
var G__320__delegate = function (args){
return reagent.impl.protocols.as_element.call(null,compiler,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__320 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__321__i = 0, G__321__a = new Array(arguments.length -  0);
while (G__321__i < G__321__a.length) {G__321__a[G__321__i] = arguments[G__321__i + 0]; ++G__321__i;}
  args = new cljs.core.IndexedSeq(G__321__a,0,null);
} 
return G__320__delegate.call(this,args);};
G__320.cljs$lang$maxFixedArity = 0;
G__320.cljs$lang$applyTo = (function (arglist__322){
var args = cljs.core.seq(arglist__322);
return G__320__delegate(args);
});
G__320.cljs$core$IFn$_invoke$arity$variadic = G__320__delegate;
return G__320;
})()
;})(c,compiler,f,_,res))
:res);
(c.reagentRender = f__$1);

var G__323 = c;
var G__324 = compiler;
c = G__323;
compiler = G__324;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.component_name = (function reagent$impl$component$component_name(c){
var or__10116__auto__ = (function (){var G__326 = c;
var G__326__$1 = (((G__326 == null))?null:G__326.constructor);
if((G__326__$1 == null)){
return null;
} else {
return G__326__$1.displayName;
}
})();
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var G__327 = c;
var G__327__$1 = (((G__327 == null))?null:G__327.constructor);
if((G__327__$1 == null)){
return null;
} else {
return G__327__$1.name;
}
}
});
reagent.impl.component.comp_name = (function reagent$impl$component$comp_name(){
var c = reagent.impl.component._STAR_current_component_STAR_;
var n = reagent.impl.component.component_name.call(null,c);
if((!(cljs.core.empty_QMARK_.call(null,n)))){
return [" (in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join('');
} else {
return "";
}

});
reagent.impl.component.do_render = (function reagent$impl$component$do_render(c,compiler){
var _STAR_current_component_STAR__orig_val__328 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__329 = c;
(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__329);

try{var ok = [false];
try{var res = reagent.impl.component.wrap_render.call(null,c,compiler);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Error rendering component",reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
}
}
}finally {(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__328);
}});
reagent.impl.component.rat_opts = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"no-cache","no-cache",(1588056370)),true], null);
reagent.impl.component.custom_wrapper = (function reagent$impl$component$custom_wrapper(key,f){
var G__330 = key;
var G__330__$1 = (((G__330 instanceof cljs.core.Keyword))?G__330.fqn:null);
switch (G__330__$1) {
case "getDefaultProps":
throw (new Error("getDefaultProps not supported"));

break;
case "getDerivedStateFromProps":
return (function reagent$impl$component$custom_wrapper_$_getDerivedStateFromProps(props,state){
return f.call(null,(function (){var temp__9714__auto__ = props.argv;
if((temp__9714__auto__ == null)){
return props;
} else {
var a = temp__9714__auto__;
return reagent.impl.component.extract_props.call(null,a);
}
})(),state);
});

break;
case "getInitialState":
return (function reagent$impl$component$custom_wrapper_$_getInitialState(c){
return cljs.core.reset_BANG_.call(null,reagent.impl.component.state_atom.call(null,c),f.call(c,c));
});

break;
case "getSnapshotBeforeUpdate":
return (function reagent$impl$component$custom_wrapper_$_getSnapshotBeforeUpdate(oldprops,oldstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,oldprops),oldstate);
});

break;
case "componentWillReceiveProps":
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});

break;
case "UNSAFE_componentWillReceiveProps":
return (function reagent$impl$component$custom_wrapper_$_componentWillReceiveProps(nextprops){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops));
});

break;
case "shouldComponentUpdate":
return (function reagent$impl$component$custom_wrapper_$_shouldComponentUpdate(nextprops,nextstate){
var or__10116__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var c = this;
var old_argv = c.props.argv;
var new_argv = nextprops.argv;
var noargv = (((old_argv == null)) || ((new_argv == null)));
if((f == null)){
var or__10116__auto____$1 = noargv;
if(or__10116__auto____$1){
return or__10116__auto____$1;
} else {
try{return cljs.core.not_EQ_.call(null,old_argv,new_argv);
}catch (e332){var e = e332;
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}}
} else {
if(noargv){
return f.call(c,c,reagent.impl.component.get_argv.call(null,c),reagent.impl.component.props_argv.call(null,c,nextprops));
} else {
return f.call(c,c,old_argv,new_argv);

}
}
}
});

break;
case "componentWillUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops),nextstate);
});

break;
case "UNSAFE_componentWillUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentWillUpdate(nextprops,nextstate){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,nextprops),nextstate);
});

break;
case "componentDidUpdate":
return (function reagent$impl$component$custom_wrapper_$_componentDidUpdate(oldprops,oldstate,snapshot){
var c = this;
return f.call(c,c,reagent.impl.component.props_argv.call(null,c,oldprops),oldstate,snapshot);
});

break;
case "componentWillMount":
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "UNSAFE_componentWillMount":
return (function reagent$impl$component$custom_wrapper_$_componentWillMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentDidMount":
return (function reagent$impl$component$custom_wrapper_$_componentDidMount(){
var c = this;
return f.call(c,c);
});

break;
case "componentWillUnmount":
return (function reagent$impl$component$custom_wrapper_$_componentWillUnmount(){
var c = this;
var G__333_335 = goog.object.get(c,"cljsRatom");
if((G__333_335 == null)){
} else {
reagent.ratom.dispose_BANG_.call(null,G__333_335);
}

reagent.impl.batching.mark_rendered.call(null,c);

if((f == null)){
return null;
} else {
return f.call(c,c);
}
});

break;
case "componentDidCatch":
return (function reagent$impl$component$custom_wrapper_$_componentDidCatch(error,info){
var c = this;
return f.call(c,c,error,info);
});

break;
default:
return null;

}
});
reagent.impl.component.get_wrapper = (function reagent$impl$component$get_wrapper(key,f){
var wrap = reagent.impl.component.custom_wrapper.call(null,key,f);
if(cljs.core.truth_((function (){var and__10091__auto__ = wrap;
if(cljs.core.truth_(and__10091__auto__)){
return f;
} else {
return and__10091__auto__;
}
})())){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(cljs.core/ifn? f)"].join('')));
}
} else {
}

var or__10116__auto__ = wrap;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return f;
}
});
reagent.impl.component.obligatory = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",(1795750960)),null,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",(1573788814)),null], null);
reagent.impl.component.dash_to_method_name = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_method_name);
reagent.impl.component.camelify_map_keys = (function reagent$impl$component$camelify_map_keys(fun_map){
return cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,cljs.core.keyword.call(null,reagent.impl.component.dash_to_method_name.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,fun_map);
});
reagent.impl.component.add_obligatory = (function reagent$impl$component$add_obligatory(fun_map){
return cljs.core.merge.call(null,reagent.impl.component.obligatory,fun_map);
});
reagent.impl.component.wrap_funs = (function reagent$impl$component$wrap_funs(fmap,compiler){
var renders_336 = cljs.core.select_keys.call(null,fmap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"render","render",(-1408033454)),new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383))], null));
var render_fun_337 = cljs.core.first.call(null,cljs.core.vals.call(null,renders_336));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"componentFunction","componentFunction",(825866104)).cljs$core$IFn$_invoke$arity$1(fmap))){
} else {
throw (new Error(["Assert failed: ",":component-function is no longer supported, use :reagent-render instead.","\n","(not (:componentFunction fmap))"].join('')));
}

if((cljs.core.count.call(null,renders_336) > (0))){
} else {
throw (new Error(["Assert failed: ","Missing reagent-render","\n","(pos? (count renders))"].join('')));
}

if(((1) === cljs.core.count.call(null,renders_336))){
} else {
throw (new Error(["Assert failed: ","Too many render functions supplied","\n","(== 1 (count renders))"].join('')));
}

if(cljs.core.ifn_QMARK_.call(null,render_fun_337)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,render_fun_337)].join(''),"\n","(cljs.core/ifn? render-fun)"].join('')));
}


var render_fun = (function (){var or__10116__auto__ = new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return new cljs.core.Keyword(null,"render","render",(-1408033454)).cljs$core$IFn$_invoke$arity$1(fmap);
}
})();
var legacy_render = (new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)).cljs$core$IFn$_invoke$arity$1(fmap) == null);
var name = (function (){var or__10116__auto__ = new cljs.core.Keyword(null,"displayName","displayName",(-809144601)).cljs$core$IFn$_invoke$arity$1(fmap);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var or__10116__auto____$1 = reagent.impl.util.fun_name.call(null,render_fun);
if(cljs.core.truth_(or__10116__auto____$1)){
return or__10116__auto____$1;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"reagent"));
}
}
})();
var fmap__$1 = cljs.core.reduce_kv.call(null,(function (m,k,v){
return cljs.core.assoc.call(null,m,k,reagent.impl.component.get_wrapper.call(null,k,v));
}),cljs.core.PersistentArrayMap.EMPTY,fmap);
return cljs.core.assoc.call(null,fmap__$1,new cljs.core.Keyword(null,"displayName","displayName",(-809144601)),name,new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",(-1527295613)),legacy_render,new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)),render_fun,new cljs.core.Keyword(null,"render","render",(-1408033454)),(function reagent$impl$component$wrap_funs_$_render(){
var c = this;
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c,compiler);
} else {
var rat = goog.object.get(c,"cljsRatom");
reagent.impl.batching.mark_rendered.call(null,c);

if((rat == null)){
return reagent.ratom.run_in_reaction.call(null,(function (){
return reagent.impl.component.do_render.call(null,c,compiler);
}),c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
}));
});
reagent.impl.component.map_to_js = (function reagent$impl$component$map_to_js(m){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__338 = o;
goog.object.set(G__338,cljs.core.name.call(null,k),v);

return G__338;
}),({}),m);
});
reagent.impl.component.cljsify = (function reagent$impl$component$cljsify(body,compiler){
return reagent.impl.component.wrap_funs.call(null,reagent.impl.component.add_obligatory.call(null,reagent.impl.component.camelify_map_keys.call(null,body)),compiler);
});
reagent.impl.component.built_in_static_method_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"childContextTypes","childContextTypes",(578717991)),new cljs.core.Keyword(null,"contextTypes","contextTypes",(-2023853910)),new cljs.core.Keyword(null,"contextType","contextType",(1033066077)),new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",(-991834739)),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",(166658477))], null);
/**
 * Creates JS class based on provided Clojure map.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 *   Constructor function is defined using key `:getInitialState`.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
reagent.impl.component.create_class = (function reagent$impl$component$create_class(body,compiler){
if(cljs.core.map_QMARK_.call(null,body)){
} else {
throw (new Error("Assert failed: (map? body)"));
}

var body__$1 = reagent.impl.component.cljsify.call(null,body,compiler);
var methods$ = reagent.impl.component.map_to_js.call(null,cljs.core.apply.call(null,cljs.core.dissoc,body__$1,new cljs.core.Keyword(null,"displayName","displayName",(-809144601)),new cljs.core.Keyword(null,"getInitialState","getInitialState",(1541760916)),new cljs.core.Keyword(null,"constructor","constructor",(-1953928811)),new cljs.core.Keyword(null,"render","render",(-1408033454)),new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)),reagent.impl.component.built_in_static_method_names));
var static_methods = reagent.impl.component.map_to_js.call(null,cljs.core.select_keys.call(null,body__$1,reagent.impl.component.built_in_static_method_names));
var display_name = new cljs.core.Keyword(null,"displayName","displayName",(-809144601)).cljs$core$IFn$_invoke$arity$1(body__$1);
var get_initial_state = new cljs.core.Keyword(null,"getInitialState","getInitialState",(1541760916)).cljs$core$IFn$_invoke$arity$1(body__$1);
var construct = new cljs.core.Keyword(null,"constructor","constructor",(-1953928811)).cljs$core$IFn$_invoke$arity$1(body__$1);
var cmp = (function (props,context,updater){
var this$ = this;
cljsjs.react.Component.call(this$,props,context,updater);

if(cljs.core.truth_(construct)){
construct.call(null,this$,props);
} else {
}

if(cljs.core.truth_(get_initial_state)){
(this$.state = get_initial_state.call(null,this$));
} else {
}

(this$.cljsMountOrder = reagent.impl.batching.next_mount_count.call(null));

return this$;
});
goog.object.extend(cmp.prototype,cljsjs.react.Component.prototype,methods$);

if(cljs.core.truth_(new cljs.core.Keyword(null,"render","render",(-1408033454)).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.render = new cljs.core.Keyword(null,"render","render",(-1408033454)).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.reagentRender = new cljs.core.Keyword(null,"reagentRender","reagentRender",(-358306383)).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",(-1527295613)).cljs$core$IFn$_invoke$arity$1(body__$1))){
(cmp.prototype.cljsLegacyRender = new cljs.core.Keyword(null,"cljsLegacyRender","cljsLegacyRender",(-1527295613)).cljs$core$IFn$_invoke$arity$1(body__$1));
} else {
}

goog.object.extend(cmp,cljsjs.react.Component,static_methods);

if(cljs.core.truth_(display_name)){
(cmp.displayName = display_name);

(cmp.cljs$lang$ctorStr = display_name);

(cmp.cljs$lang$ctorPrWriter = (function (this$,writer,opt){
return cljs.core._write.call(null,writer,display_name);
}));
} else {
}

(cmp.cljs$lang$type = true);

(cmp.prototype.constructor = cmp);

return cmp;
});
reagent.impl.component.cached_react_class = (function reagent$impl$component$cached_react_class(compiler,c){
return goog.object.get(c,reagent.impl.protocols.get_id.call(null,compiler));
});
reagent.impl.component.cache_react_class = (function reagent$impl$component$cache_react_class(compiler,c,constructor$){
goog.object.set(c,reagent.impl.protocols.get_id.call(null,compiler),constructor$);

return constructor$;
});
reagent.impl.component.fn_to_class = (function reagent$impl$component$fn_to_class(compiler,f){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(cljs.core/ifn? f)"].join('')));
}

if((!((!(((reagent.impl.component.react_class_QMARK_.call(null,f)) && ((!(reagent.impl.component.reagent_class_QMARK_.call(null,f)))))))))){
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Using native React classes directly in Hiccup forms ","is not supported. Use create-element or ","adapt-react-class instead: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__10116__auto__ = reagent.impl.util.fun_name.call(null,f);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return f;
}
})()),reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
} else {
}

if(reagent.impl.component.reagent_class_QMARK_.call(null,f)){
return reagent.impl.component.cache_react_class.call(null,compiler,f,f);
} else {
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"reagent-render","reagent-render",(-985383853)),f);
var res = reagent.impl.component.create_class.call(null,withrender,compiler);
return reagent.impl.component.cache_react_class.call(null,compiler,f,res);
}
});
reagent.impl.component.as_class = (function reagent$impl$component$as_class(tag,compiler){
var temp__9714__auto__ = reagent.impl.component.cached_react_class.call(null,compiler,tag);
if((temp__9714__auto__ == null)){
return reagent.impl.component.fn_to_class.call(null,compiler,tag);
} else {
var cached_class = temp__9714__auto__;
return cached_class;
}
});
reagent.impl.component.reactify_component = (function reagent$impl$component$reactify_component(comp,compiler){
if(reagent.impl.component.react_class_QMARK_.call(null,comp)){
return comp;
} else {
return reagent.impl.component.as_class.call(null,comp,compiler);
}
});
reagent.impl.component.functional_wrap_render = (function reagent$impl$component$functional_wrap_render(compiler,c){
while(true){
var f = c.reagentRender;
var _ = ((cljs.core.ifn_QMARK_.call(null,f))?null:(function(){throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,f)].join(''),"\n","(cljs.core/ifn? f)"].join('')))})());
var argv = c.argv;
var res = cljs.core.apply.call(null,f,argv);
if(cljs.core.vector_QMARK_.call(null,res)){
return reagent.impl.protocols.as_element.call(null,compiler,res);
} else {
if(cljs.core.ifn_QMARK_.call(null,res)){
var f__$1 = ((reagent.impl.component.reagent_class_QMARK_.call(null,res))?((function (compiler,c,f,_,argv,res){
return (function() { 
var G__339__delegate = function (args){
return reagent.impl.protocols.as_element.call(null,compiler,cljs.core.apply.call(null,cljs.core.vector,res,args));
};
var G__339 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__340__i = 0, G__340__a = new Array(arguments.length -  0);
while (G__340__i < G__340__a.length) {G__340__a[G__340__i] = arguments[G__340__i + 0]; ++G__340__i;}
  args = new cljs.core.IndexedSeq(G__340__a,0,null);
} 
return G__339__delegate.call(this,args);};
G__339.cljs$lang$maxFixedArity = 0;
G__339.cljs$lang$applyTo = (function (arglist__341){
var args = cljs.core.seq(arglist__341);
return G__339__delegate(args);
});
G__339.cljs$core$IFn$_invoke$arity$variadic = G__339__delegate;
return G__339;
})()
;})(compiler,c,f,_,argv,res))
:res);
(c.reagentRender = f__$1);

var G__342 = compiler;
var G__343 = c;
compiler = G__342;
c = G__343;
continue;
} else {
return res;

}
}
break;
}
});
reagent.impl.component.functional_do_render = (function reagent$impl$component$functional_do_render(compiler,c){
var _STAR_current_component_STAR__orig_val__344 = reagent.impl.component._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__345 = c;
(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__345);

try{var ok = [false];
try{var res = reagent.impl.component.functional_wrap_render.call(null,compiler,c);
(ok[(0)] = true);

return res;
}finally {if(cljs.core.truth_((ok[(0)]))){
} else {
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).error(["Error rendering component",reagent.impl.component.comp_name.call(null)].join(''));
} else {
}
}
}
}finally {(reagent.impl.component._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__344);
}});
reagent.impl.component.functional_render = (function reagent$impl$component$functional_render(compiler,jsprops){
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.functional_do_render.call(null,compiler,jsprops);
} else {
var argv = jsprops.argv;
var tag = jsprops.reagentRender;
var vec__346 = cljsjs.react.useState((0));
var _ = cljs.core.nth.call(null,vec__346,(0),null);
var update_count = cljs.core.nth.call(null,vec__346,(1),null);
var state_ref = cljsjs.react.useRef();
var ___$1 = (cljs.core.truth_(state_ref.current)?null:(function (){var obj = ({});
(obj.forceUpdate = (function (){
return update_count.call(null,cljs.core.inc);
}));

(obj.cljsMountOrder = reagent.impl.batching.next_mount_count.call(null));

(obj.constructor = tag);

(obj.reagentRender = tag);

return (state_ref.current = obj);
})());
var reagent_state = state_ref.current;
var rat = goog.object.get(reagent_state,"cljsRatom");
cljsjs.react.useEffect((function reagent$impl$component$functional_render_$_mount(){
return (function reagent$impl$component$functional_render_$_mount_$_unmount(){
var G__349 = goog.object.get(reagent_state,"cljsRatom");
if((G__349 == null)){
return null;
} else {
return reagent.ratom.dispose_BANG_.call(null,G__349);
}
});
}),[]);

(reagent_state.argv = argv);

reagent.impl.batching.mark_rendered.call(null,reagent_state);

if((rat == null)){
return reagent.ratom.run_in_reaction.call(null,(function (){
return reagent.impl.component.functional_do_render.call(null,compiler,reagent_state);
}),reagent_state,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts);
} else {
return rat._run(false);
}
}
});
reagent.impl.component.functional_render_memo_fn = (function reagent$impl$component$functional_render_memo_fn(prev_props,next_props){
var old_argv = prev_props.argv;
var new_argv = next_props.argv;
if(reagent.impl.util._STAR_always_update_STAR_ === false){
try{return cljs.core._EQ_.call(null,old_argv,new_argv);
}catch (e351){var e = e351;
if(cljs.core.truth_(reagent.debug.has_console)){
(cljs.core.truth_(reagent.debug.tracking)?reagent.debug.track_console:console).warn(["Warning: ","Exception thrown while comparing argv's in shouldComponentUpdate: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_argv)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e)].join(''));
} else {
}

return false;
}} else {
return false;
}
});
/**
 * Create copy of functional-render with displayName set to name of the
 *   original Reagent component.
 */
reagent.impl.component.functional_render_fn = (function reagent$impl$component$functional_render_fn(compiler,tag){
var or__10116__auto__ = reagent.impl.component.cached_react_class.call(null,compiler,tag);
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
var f = (function (jsprops){
return reagent.impl.component.functional_render.call(null,compiler,jsprops);
});
var _ = (f.displayName = reagent.impl.util.fun_name.call(null,tag));
var f__$1 = cljsjs.react.memo(f,reagent.impl.component.functional_render_memo_fn);
reagent.impl.component.cache_react_class.call(null,compiler,tag,f__$1);

return f__$1;
}
});

//# sourceURL=reagent/impl/component.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL2NvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50LmNsanMiXSwibGluZUNvdW50Ijo3NjYsIm1hcHBpbmdzIjoiO0FBU0EsQUFBQSxBQUtBLHVDQUFBLHZDQUFNQSxzRkFBZUM7QUFBckIsQUFDRSxJQUFNQyxJQUFFLDBCQUFBLElBQUEsOUJBQUNDLHdCQUFJRjtBQUFiLEFBQ0UsR0FBSSxBQUFDRywrQkFBS0Y7QUFBR0E7O0FBQWI7OztBQUVKLDBDQUFBLDFDQUFNRyw0RkFBa0JKO0FBQXhCLEFBQ0UsSUFBTUMsSUFBRSwwQkFBQSxJQUFBLDlCQUFDQyx3QkFBSUY7SUFDUEssY0FBWSwwREFBQSxJQUFBLDVEQUFJLEVBQUksTUFBQSxMQUFNSixnQkFBRyxBQUFDRSwrQkFBS0Y7QUFEekMsQUFFRSxHQUFJLENBQUcsQUFBQ0ssMEJBQU1OLEtBQUdLO0FBQ2YsT0FBQ0UsMkJBQU9QLEVBQUVLOztBQURaOzs7QUFHSixvQ0FBQSxwQ0FBTUcsZ0ZBQWdDQyxFQUFFUjtBQUF4QyxBQUNFLElBQUFTLHFCQUFZLEFBQVFUO0FBQXBCLEFBQUEsR0FBQSxDQUFBUyxzQkFBQTtBQUFBLDBGQUVHLEFBQWVELGNBQUcsQUFBQ0csK0NBQXdCWDs7QUFGOUMsUUFBQVMsSkFBVUM7QUFBVixBQUNFQTs7O0FBR0osa0NBQUEsbENBQU1FLDRFQUE4Qko7QUFBcEMsQUFDRSxPQUFDRCw0Q0FBV0MsRUFBRSxBQUFTQTs7QUFFekIsbUNBQUEsbkNBQU1LLDhFQUErQkw7QUFBckMsQUFDRSxJQUFNUixJQUFFLEFBQVNRO0FBQWpCLEFBQ0UsSUFBQUMscUJBQVksQUFBUVQ7QUFBcEIsQUFBQSxHQUFBLENBQUFTLHNCQUFBO0FBRUUsT0FBQ0UsK0NBQXdCWDs7QUFGM0IsUUFBQVMsSkFBVVY7QUFBVixBQUNFLE9BQUNELCtDQUFjQzs7O0FBR3JCLHNDQUFBLHRDQUFNZSxvRkFBa0NOO0FBQXhDLEFBQ0UsSUFBTVIsSUFBRSxBQUFTUTtBQUFqQixBQUNFLElB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QUFJLFFBQUEsUEFBTXREO0FBQ1IsK0NBQUEseENBQUNDO0FBQUQsQUFFRyxPQUFDeUMsc0RBQXFCN0gsU0FBU3lJO2lCQUZsQyxkQUdFQSwwQkFFQXBELG1DQUNBekQ7O0FBRUYsZ0JBQUEsVEFBT3VEOzs7O0FBRWYsbURBQUEsbkRBQU15RCw4R0FDSEMsV0FBV0M7QUFEZCxBQUVFLElBQU1yRyxXQUFTLEFBQVFvRztJQUNqQm5HLFdBQVMsQUFBUW9HO0FBRHZCLEFBRUUsR0FBSyxBQUFRdEc7QUFDUixJQUFBLEFBQ0UsT0FBQ3dHLHlCQUFFdkcsU0FBU0M7Y0FEZCxRQUFBcUcsSkFFa0JqRztBQUZsQixBQUdJLG9CQUFBLEFBQUFwQjtBQUFBLEFBQUEsQUFBQSxrQkFBQSxBQUFBQSx3QkFBQSxBQUFBQSw0QkFBQUMsY0FBQSxDQUFBLFlBQUEsMkhBQUEsMERBQUEscEVBQTJFYywwREFBYUMsMERBQWFJOztBQUFyRzs7QUFISjs7QUFETDs7O0FBT0o7Ozs7OENBQUEsOUNBQU1tRyxvR0FHSGpKLFNBQVN1SDtBQUhaLEFBTUUsSUFBQXZHLG9CQUFJLEFBQUM4RixvREFBbUI5RyxTQUFTdUg7QUFBakMsQUFBQSxvQkFBQXZHO0FBQUFBOztBQUNJLElBQU1mLElBQUUsV0FBS2dJO0FBQUwsQUFBYyxPQUFDRCxtREFBa0JoSSxTQUFTaUk7O0lBQzVDL0gsSUFBRSxDQUFNLEFBQWVELGdCQUFHLEFBQUMrRSxxQ0FBY3VDO0lBQ3pDdEgsUUFBRSxBQUFDaUosa0JBQVdqSixFQUFFMkk7QUFGdEIsQUFHRSxBQUFDNUIsbURBQWtCaEgsU0FBU3VILElBQUl0SDs7QUFDaENBIiwibmFtZXMiOlsicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9leHRyYWN0LXByb3BzIiwidiIsInAiLCJjbGpzLmNvcmUvbnRoIiwiY2xqcy5jb3JlL21hcD8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2V4dHJhY3QtY2hpbGRyZW4iLCJmaXJzdC1jaGlsZCIsImNsanMuY29yZS9jb3VudCIsImNsanMuY29yZS9zdWJ2ZWMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3Byb3BzLWFyZ3YiLCJjIiwidGVtcF9fOTcxNF9fYXV0b19fIiwiYSIsInJlYWdlbnQuaW1wbC51dGlsL3NoYWxsb3ctb2JqLXRvLW1hcCIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZ2V0LWFyZ3YiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC1wcm9wcyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZ2V0LWNoaWxkcmVuIiwiY2xqc2pzLnJlYWN0L0NoaWxkcmVuIiwiY2xqcy5jb3JlL2ludG8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3JlYWdlbnQtY2xhc3M/IiwiY2xqcy5jb3JlL2ZuPyIsIkdfXzMxNSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmVhY3QtY2xhc3M/IiwiR19fMzE3IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yZWFnZW50LWNvbXBvbmVudD8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3N0YXRlLWF0b20iLCJ0aGlzIiwic2EiLCJyZWFnZW50LnJhdG9tL2F0b20iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3dyYXAtcmVuZGVyIiwiY29tcGlsZXIiLCJmIiwiXyIsImNsanMuY29yZS9pZm4/IiwianMvRXJyb3IiLCJjbGpzLmNvcmUvcHItc3RyIiwicmVzIiwibiIsIkdfXzMxOCIsImNsanMuY29yZS9pbnRvLWFycmF5IiwiY2xqcy5jb3JlL3ZlY3Rvcj8iLCJyZWFnZW50LmltcGwucHJvdG9jb2xzL2FzLWVsZW1lbnQiLCJhcmdzIiwiY2xqcy5jb3JlL2FwcGx5IiwiY2xqcy5jb3JlL3ZlY3RvciIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY29tcG9uZW50LW5hbWUiLCJvcl9fMTAxMTZfX2F1dG9fXyIsIkdfXzMyNiIsIkdfXzMyNyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY29tcC1uYW1lIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC8qY3VycmVudC1jb21wb25lbnQqIiwiY2xqcy5jb3JlL2VtcHR5PyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZG8tcmVuZGVyIiwiKmN1cnJlbnQtY29tcG9uZW50Ki1vcmlnLXZhbF9fMzI4IiwiKmN1cnJlbnQtY29tcG9uZW50Ki10ZW1wLXZhbF9fMzI5Iiwib2siLCJyZWFnZW50L2RlYnVnIiwianMvY29uc29sZSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmF0LW9wdHMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2N1c3RvbS13cmFwcGVyIiwia2V5IiwiR19fMzMwIiwiY2xqcy5jb3JlL0tleXdvcmQiLCJwcm9wcyIsInN0YXRlIiwiY2xqcy5jb3JlL3Jlc2V0ISIsIm9sZHByb3BzIiwib2xkc3RhdGUiLCJuZXh0cHJvcHMiLCJuZXh0c3RhdGUiLCJyZWFnZW50LmltcGwudXRpbC8qYWx3YXlzLXVwZGF0ZSoiLCJvbGQtYXJndiIsIm5ldy1hcmd2Iiwibm9hcmd2IiwiZTMzMiIsImNsanMuY29yZS9ub3Q9IiwiZSIsInNuYXBzaG90IiwiR19fMzMzIiwiZ29vZy5vYmplY3QvZ2V0IiwicmVhZ2VudC5yYXRvbS9kaXNwb3NlISIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9tYXJrLXJlbmRlcmVkIiwiZXJyb3IiLCJpbmZvIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9nZXQtd3JhcHBlciIsIndyYXAiLCJhbmRfXzEwMDkxX19hdXRvX18iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L29ibGlnYXRvcnkiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2Rhc2gtdG8tbWV0aG9kLW5hbWUiLCJyZWFnZW50LmltcGwudXRpbC9tZW1vaXplLTEiLCJyZWFnZW50LmltcGwudXRpbC9kYXNoLXRvLW1ldGhvZC1uYW1lIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9jYW1lbGlmeS1tYXAta2V5cyIsImZ1bi1tYXAiLCJjbGpzLmNvcmUvcmVkdWNlLWt2IiwibSIsImsiLCJjbGpzLmNvcmUvYXNzb2MiLCJjbGpzLmNvcmUva2V5d29yZCIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvYWRkLW9ibGlnYXRvcnkiLCJjbGpzLmNvcmUvbWVyZ2UiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3dyYXAtZnVucyIsImZtYXAiLCJyZW5kZXJzIiwiY2xqcy5jb3JlL3NlbGVjdC1rZXlzIiwicmVuZGVyLWZ1biIsImNsanMuY29yZS92YWxzIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25vdCIsImxlZ2FjeS1yZW5kZXIiLCJuYW1lIiwicmVhZ2VudC5pbXBsLnV0aWwvZnVuLW5hbWUiLCJjbGpzLmNvcmUvZ2Vuc3ltIiwicmVhZ2VudC5pbXBsLnV0aWwvKm5vbi1yZWFjdGl2ZSoiLCJyYXQiLCJyZWFnZW50LnJhdG9tL3J1bi1pbi1yZWFjdGlvbiIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9xdWV1ZS1yZW5kZXIiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L21hcC10by1qcyIsIm8iLCJHX18zMzgiLCJnb29nLm9iamVjdC9zZXQiLCJjbGpzLmNvcmUvbmFtZSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY2xqc2lmeSIsImJvZHkiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2J1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NyZWF0ZS1jbGFzcyIsIm1ldGhvZHMiLCJjbGpzLmNvcmUvZGlzc29jIiwic3RhdGljLW1ldGhvZHMiLCJkaXNwbGF5LW5hbWUiLCJnZXQtaW5pdGlhbC1zdGF0ZSIsImNvbnN0cnVjdCIsImNtcCIsImNvbnRleHQiLCJ1cGRhdGVyIiwiY2xqc2pzLnJlYWN0L0NvbXBvbmVudCIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9uZXh0LW1vdW50LWNvdW50IiwiZ29vZy5vYmplY3QvZXh0ZW5kIiwid3JpdGVyIiwib3B0IiwiY2xqcy5jb3JlLy13cml0ZSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY2FjaGVkLXJlYWN0LWNsYXNzIiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9nZXQtaWQiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NhY2hlLXJlYWN0LWNsYXNzIiwiY29uc3RydWN0b3IiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2ZuLXRvLWNsYXNzIiwic3BlYyIsImNsanMuY29yZS9tZXRhIiwid2l0aHJlbmRlciIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvYXMtY2xhc3MiLCJ0YWciLCJjYWNoZWQtY2xhc3MiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3JlYWN0aWZ5LWNvbXBvbmVudCIsImNvbXAiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2Z1bmN0aW9uYWwtd3JhcC1yZW5kZXIiLCJhcmd2IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mdW5jdGlvbmFsLWRvLXJlbmRlciIsIipjdXJyZW50LWNvbXBvbmVudCotb3JpZy12YWxfXzM0NCIsIipjdXJyZW50LWNvbXBvbmVudCotdGVtcC12YWxfXzM0NSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZnVuY3Rpb25hbC1yZW5kZXIiLCJqc3Byb3BzIiwidmVjX18zNDYiLCJ1cGRhdGUtY291bnQiLCJjbGpzanMucmVhY3QvdXNlU3RhdGUiLCJzdGF0ZS1yZWYiLCJjbGpzanMucmVhY3QvdXNlUmVmIiwib2JqIiwiY2xqcy5jb3JlL2luYyIsInJlYWdlbnQtc3RhdGUiLCJjbGpzanMucmVhY3QvdXNlRWZmZWN0IiwiR19fMzQ5IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mdW5jdGlvbmFsLXJlbmRlci1tZW1vLWZuIiwicHJldi1wcm9wcyIsIm5leHQtcHJvcHMiLCJlMzUxIiwiY2xqcy5jb3JlLz0iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2Z1bmN0aW9uYWwtcmVuZGVyLWZuIiwiY2xqc2pzLnJlYWN0L21lbW8iXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIHJlYWdlbnQuaW1wbC5jb21wb25lbnRcbiAgKDpyZXF1aXJlIFtnb29nLm9iamVjdCA6YXMgZ29ial1cbiAgICAgICAgICAgIFtjbGpzanMucmVhY3QgOmFzIHJlYWN0XVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC51dGlsIDphcyB1dGlsXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5iYXRjaGluZyA6YXMgYmF0Y2hdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnByb3RvY29scyA6YXMgcF1cbiAgICAgICAgICAgIFtyZWFnZW50LnJhdG9tIDphcyByYXRvbV1cbiAgICAgICAgICAgIFtyZWFnZW50LmRlYnVnIDpyZWZlci1tYWNyb3MgW2Rldj8gd2FybiBlcnJvciB3YXJuLXVubGVzcyBhc3NlcnQtY2FsbGFibGVdXSkpXG5cbihkZWNsYXJlIF46ZHluYW1pYyAqY3VycmVudC1jb21wb25lbnQqKVxuXG5cbjs7OyBBcmd2IGFjY2Vzc1xuXG4oZGVmbiBleHRyYWN0LXByb3BzIFt2XVxuICAobGV0IFtwIChudGggdiAxIG5pbCldXG4gICAgKGlmIChtYXA/IHApIHApKSlcblxuKGRlZm4gZXh0cmFjdC1jaGlsZHJlbiBbdl1cbiAgKGxldCBbcCAobnRoIHYgMSBuaWwpXG4gICAgICAgIGZpcnN0LWNoaWxkIChpZiAob3IgKG5pbD8gcCkgKG1hcD8gcCkpIDIgMSldXG4gICAgKGlmICg+IChjb3VudCB2KSBmaXJzdC1jaGlsZClcbiAgICAgIChzdWJ2ZWMgdiBmaXJzdC1jaGlsZCkpKSlcblxuKGRlZm4gcHJvcHMtYXJndiBbXmpzL1JlYWN0LkNvbXBvbmVudCBjIHBdXG4gIChpZi1zb21lIFthICguLWFyZ3YgcCldXG4gICAgYVxuICAgIFsoLi1jb25zdHJ1Y3RvciBjKSAodXRpbC9zaGFsbG93LW9iai10by1tYXAgcCldKSlcblxuKGRlZm4gZ2V0LWFyZ3YgW15qcy9SZWFjdC5Db21wb25lbnQgY11cbiAgKHByb3BzLWFyZ3YgYyAoLi1wcm9wcyBjKSkpXG5cbihkZWZuIGdldC1wcm9wcyBbXmpzL1JlYWN0LkNvbXBvbmVudCBjXVxuICAobGV0IFtwICguLXByb3BzIGMpXVxuICAgIChpZi1zb21lIFt2ICguLWFyZ3YgcCldXG4gICAgICAoZXh0cmFjdC1wcm9wcyB2KVxuICAgICAgKHV0aWwvc2hhbGxvdy1vYmotdG8tbWFwIHApKSkpXG5cbihkZWZuIGdldC1jaGlsZHJlbiBbXmpzL1JlYWN0LkNvbXBvbmVudCBjXVxuICAobGV0IFtwICguLXByb3BzIGMpXVxuICAgIChpZi1zb21lIFt2ICguLWFyZ3YgcCldXG4gICAgICAoZXh0cmFjdC1jaGlsZHJlbiB2KVxuICAgICAgKC0+PiAoLi1jaGlsZHJlbiBwKVxuICAgICAgICAgICAocmVhY3QvQ2hpbGRyZW4udG9BcnJheSlcbiAgICAgICAgICAgKGludG8gW10pKSkpKVxuXG4oZGVmbiBeYm9vbGVhbiByZWFnZW50LWNsYXNzPyBbY11cbiAgKGFuZCAoZm4/IGMpXG4gICAgICAgKHNvbWU/IChzb21lLT4gYyAoLi1wcm90b3R5cGUpICguLXJlYWdlbnRSZW5kZXIpKSkpKVxuXG4oZGVmbiBeYm9vbGVhbiByZWFjdC1jbGFzcz8gW2NdXG4gIChhbmQgKGZuPyBjKVxuICAgICAgIChzb21lPyAoc29tZS0+IGMgKC4tcHJvdG90eXBlKSAoLi1yZW5kZXIpKSkpKVxuXG4oZGVmbiBeYm9vbGVhbiByZWFnZW50LWNvbXBvbmVudD8gW15jbGogY11cbiAgKHNvbWU/ICguLXJlYWdlbnRSZW5kZXIgYykpKVxuXG47OzsgU3RhdGVcblxuKGRlZm4gc3RhdGUtYXRvbSBbXmNsaiB0aGlzXVxuICAobGV0IFtzYSAoLi1jbGpzU3RhdGUgdGhpcyldXG4gICAgKGlmLW5vdCAobmlsPyBzYSlcbiAgICAgIHNhXG4gICAgICAoc2V0ISAoLi1jbGpzU3RhdGUgdGhpcykgKHJhdG9tL2F0b20gbmlsKSkpKSlcblxuOzs7IFJlbmRlcmluZ1xuXG4oZGVmbiB3cmFwLXJlbmRlclxuICBcIkNhbGxzIHRoZSByZW5kZXIgZnVuY3Rpb24gb2YgdGhlIGNvbXBvbmVudCBgY2AuICBJZiByZXN1bHQgYHJlc2AgZXZhbHVhdGVzIHRvIGE6XG4gICAgIDEpIFZlY3RvciAoZm9ybS0xIGNvbXBvbmVudCkgLSBUcmVhdHMgdGhlIHZlY3RvciBhcyBoaWNjdXAgYW5kIHJldHVybnNcbiAgICAgICAgYSByZWFjdCBlbGVtZW50IHdpdGggYSByZW5kZXIgZnVuY3Rpb24gYmFzZWQgb24gdGhhdCBoaWNjdXBcbiAgICAgMikgRnVuY3Rpb24gKGZvcm0tMiBjb21wb25lbnQpIC0gdXBkYXRlcyB0aGUgcmVuZGVyIGZ1bmN0aW9uIHRvIGByZXNgIGkuZS4gdGhlIGludGVybmFsIGZ1bmN0aW9uXG4gICAgICAgIGFuZCBjYWxscyB3cmFwLXJlbmRlciBhZ2FpbiAoYHJlY3VyYCksIHVudGlsIHRoZSByZW5kZXIgcmVzdWx0IGRvZXNuJ3QgZXZhbHVhdGUgdG8gYSBmdW5jdGlvbi5cbiAgICAgMykgQW55dGhpbmcgZWxzZSAtIFJldHVybnMgdGhlIHJlc3VsdCBvZiBldmFsdWF0aW5nIGBjYFwiXG4gIFteY2xqIGMgY29tcGlsZXJdXG4gIChsZXQgW2YgKC4tcmVhZ2VudFJlbmRlciBjKVxuICAgICAgICBfIChhc3NlcnQtY2FsbGFibGUgZilcbiAgICAgICAgOzsgY2xqc0xlZ2FjeVJlbmRlciB0ZWxscyBpZiB0aGlzIGNhbGxzIHdhcyBkZWZpbmVkXG4gICAgICAgIDs7IHVzaW5nIDpyZW5kZXIgaW5zdGVhZCBvZiA6cmVhZ2VudC1yZW5kZXJcbiAgICAgICAgOzsgaW4gdGhhdCBjYXNlLCB0aGUgOnJlbmRlciBmbiBpcyBjYWxsZWQgd2l0aCBqdXN0IGB0aGlzYCBhcyBhcmd1bWVudC5cbiAgICAgICAgcmVzIChpZiAodHJ1ZT8gKC4tY2xqc0xlZ2FjeVJlbmRlciBjKSlcbiAgICAgICAgICAgICAgKC5jYWxsIGYgYyBjKVxuICAgICAgICAgICAgICAobGV0IFt2IChnZXQtYXJndiBjKVxuICAgICAgICAgICAgICAgICAgICBuIChjb3VudCB2KV1cbiAgICAgICAgICAgICAgICAoY2FzZSBuXG4gICAgICAgICAgICAgICAgICAxICguY2FsbCBmIGMpXG4gICAgICAgICAgICAgICAgICAyICguY2FsbCBmIGMgKG50aCB2IDEpKVxuICAgICAgICAgICAgICAgICAgMyAoLmNhbGwgZiBjIChudGggdiAxKSAobnRoIHYgMikpXG4gICAgICAgICAgICAgICAgICA0ICguY2FsbCBmIGMgKG50aCB2IDEpIChudGggdiAyKSAobnRoIHYgMykpXG4gICAgICAgICAgICAgICAgICA1ICguY2FsbCBmIGMgKG50aCB2IDEpIChudGggdiAyKSAobnRoIHYgMykgKG50aCB2IDQpKVxuICAgICAgICAgICAgICAgICAgKC5hcHBseSBmIGMgKC5zbGljZSAoaW50by1hcnJheSB2KSAxKSkpKSldXG4gICAgKGNvbmRcbiAgICAgICh2ZWN0b3I/IHJlcykgKHAvYXMtZWxlbWVudCBjb21waWxlciByZXMpXG4gICAgICAoaWZuPyByZXMpIChsZXQgW2YgKGlmIChyZWFnZW50LWNsYXNzPyByZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZm4gWyYgYXJnc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHAvYXMtZWxlbWVudCBjb21waWxlciAoYXBwbHkgdmVjdG9yIHJlcyBhcmdzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXMpXVxuICAgICAgICAgICAgICAgICAgIChzZXQhICguLXJlYWdlbnRSZW5kZXIgYykgZilcbiAgICAgICAgICAgICAgICAgICAocmVjdXIgYyBjb21waWxlcikpXG4gICAgICA6ZWxzZSByZXMpKSlcblxuKGRlZm4gY29tcG9uZW50LW5hbWUgW2NdXG4gIChvciAoc29tZS0+IGMgLi1jb25zdHJ1Y3RvciAuLWRpc3BsYXlOYW1lKVxuICAgICAgKHNvbWUtPiBjIC4tY29uc3RydWN0b3IgLi1uYW1lKSkpXG5cbihkZWZuIGNvbXAtbmFtZSBbXVxuICAoaWYgKGRldj8pXG4gICAgKGxldCBbYyAqY3VycmVudC1jb21wb25lbnQqXG4gICAgICAgICAgbiAoY29tcG9uZW50LW5hbWUgYyldXG4gICAgICAoaWYtbm90IChlbXB0eT8gbilcbiAgICAgICAgKHN0ciBcIiAoaW4gXCIgbiBcIilcIilcbiAgICAgICAgXCJcIikpXG4gICAgXCJcIikpXG5cbihkZWZuIGRvLXJlbmRlciBbYyBjb21waWxlcl1cbiAgKGJpbmRpbmcgWypjdXJyZW50LWNvbXBvbmVudCogY11cbiAgICAoaWYgKGRldj8pXG4gICAgICA7OyBMb2cgZXJyb3JzLCB3aXRob3V0IHVzaW5nIHRyeS9jYXRjaCAoYW5kIG1lc3MgdXAgY2FsbCBzdGFjaylcbiAgICAgIChsZXQgW29rIChhcnJheSBmYWxzZSldXG4gICAgICAgICh0cnlcbiAgICAgICAgICAobGV0IFtyZXMgKHdyYXAtcmVuZGVyIGMgY29tcGlsZXIpXVxuICAgICAgICAgICAgKGFzZXQgb2sgMCB0cnVlKVxuICAgICAgICAgICAgcmVzKVxuICAgICAgICAgIChmaW5hbGx5XG4gICAgICAgICAgICAod2hlbi1ub3QgKGFnZXQgb2sgMClcbiAgICAgICAgICAgICAgKGVycm9yIChzdHIgXCJFcnJvciByZW5kZXJpbmcgY29tcG9uZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbXAtbmFtZSkpKSkpKSlcbiAgICAgICh3cmFwLXJlbmRlciBjIGNvbXBpbGVyKSkpKVxuXG5cbjs7OyBNZXRob2Qgd3JhcHBpbmdcblxuKGRlZiByYXQtb3B0cyB7Om5vLWNhY2hlIHRydWV9KVxuXG4oZGVmbiBjdXN0b20td3JhcHBlciBba2V5IGZdXG4gIChjYXNlIGtleVxuICAgIDpnZXREZWZhdWx0UHJvcHNcbiAgICAodGhyb3cgKGpzL0Vycm9yLiBcImdldERlZmF1bHRQcm9wcyBub3Qgc3VwcG9ydGVkXCIpKVxuXG4gICAgOmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wc1xuICAgIChmbiBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgW3Byb3BzIHN0YXRlXVxuICAgICAgOzsgUmVhZCBwcm9wcyBmcm9tIFJlYWdlbnQgYXJndlxuICAgICAgKC5jYWxsIGYgbmlsIChpZi1zb21lIFthICguLWFyZ3YgcHJvcHMpXSAoZXh0cmFjdC1wcm9wcyBhKSBwcm9wcykgc3RhdGUpKVxuXG4gICAgOzsgSW4gRVM2IFJlYWN0LCB0aGlzIGlzIG5vdyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RvclxuICAgIDpnZXRJbml0aWFsU3RhdGVcbiAgICAoZm4gZ2V0SW5pdGlhbFN0YXRlIFtjXVxuICAgICAgKHJlc2V0ISAoc3RhdGUtYXRvbSBjKSAoLmNhbGwgZiBjIGMpKSlcblxuICAgIDpnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZVxuICAgIChmbiBnZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSBbb2xkcHJvcHMgb2xkc3RhdGVdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG9sZHByb3BzKSBvbGRzdGF0ZSkpKVxuXG4gICAgOzsgRGVwcmVjYXRlZCAtIHdhcm5pbmcgaW4gMTYuOSB3aWxsIHdvcmsgdGhyb3VnaCAxNy54XG4gICAgOmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcbiAgICAoZm4gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyBbbmV4dHByb3BzXVxuICAgICAgKHRoaXMtYXMgYyAoLmNhbGwgZiBjIGMgKHByb3BzLWFyZ3YgYyBuZXh0cHJvcHMpKSkpXG5cbiAgICA7OyBEZXByZWNhdGVkIC0gd2lsbCB3b3JrIGluIDE3LnhcbiAgICA6VU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHNcbiAgICAoZm4gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyBbbmV4dHByb3BzXVxuICAgICAgKHRoaXMtYXMgYyAoLmNhbGwgZiBjIGMgKHByb3BzLWFyZ3YgYyBuZXh0cHJvcHMpKSkpXG5cbiAgICA6c2hvdWxkQ29tcG9uZW50VXBkYXRlXG4gICAgKGZuIHNob3VsZENvbXBvbmVudFVwZGF0ZSBbbmV4dHByb3BzIG5leHRzdGF0ZV1cbiAgICAgIChvciB1dGlsLyphbHdheXMtdXBkYXRlKlxuICAgICAgICAgICh0aGlzLWFzIGNcbiAgICAgICAgICAgICAgICAgICA7OyBEb24ndCBjYXJlIGFib3V0IG5leHRzdGF0ZSBoZXJlLCB3ZSB1c2UgZm9yY2VVcGRhdGVcbiAgICAgICAgICAgICAgICAgICA7OyB3aGVuIG9ubHkgd2hlbiBzdGF0ZSBoYXMgY2hhbmdlZCBhbnl3YXkuXG4gICAgICAgICAgICAgICAgICAgKGxldCBbb2xkLWFyZ3YgKC4uIGMgLXByb3BzIC1hcmd2KVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5ldy1hcmd2ICguLWFyZ3YgbmV4dHByb3BzKVxuICAgICAgICAgICAgICAgICAgICAgICAgIG5vYXJndiAob3IgKG5pbD8gb2xkLWFyZ3YpIChuaWw/IG5ldy1hcmd2KSldXG4gICAgICAgICAgICAgICAgICAgICAoY29uZFxuICAgICAgICAgICAgICAgICAgICAgICAobmlsPyBmKSAob3Igbm9hcmd2ICh0cnkgKG5vdD0gb2xkLWFyZ3YgbmV3LWFyZ3YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2F0Y2ggOmRlZmF1bHQgZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAod2FybiBcIkV4Y2VwdGlvbiB0aHJvd24gd2hpbGUgY29tcGFyaW5nIGFyZ3YncyBpbiBzaG91bGRDb21wb25lbnRVcGRhdGU6IFwiIG9sZC1hcmd2IFwiIFwiIG5ldy1hcmd2IFwiIFwiIGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlKSkpXG4gICAgICAgICAgICAgICAgICAgICAgIG5vYXJndiAoLmNhbGwgZiBjIGMgKGdldC1hcmd2IGMpIChwcm9wcy1hcmd2IGMgbmV4dHByb3BzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgOmVsc2UgICguY2FsbCBmIGMgYyBvbGQtYXJndiBuZXctYXJndikpKSkpKVxuXG4gICAgOzsgRGVwcmVjYXRlZCAtIHdhcm5pbmcgaW4gMTYuOSB3aWxsIHdvcmsgdGhyb3VnaCAxNy54XG4gICAgOmNvbXBvbmVudFdpbGxVcGRhdGVcbiAgICAoZm4gY29tcG9uZW50V2lsbFVwZGF0ZSBbbmV4dHByb3BzIG5leHRzdGF0ZV1cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjIChwcm9wcy1hcmd2IGMgbmV4dHByb3BzKSBuZXh0c3RhdGUpKSlcblxuICAgIDs7IERlcHJlY2F0ZWQgLSB3aWxsIHdvcmsgaW4gMTcueFxuICAgIDpVTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZVxuICAgIChmbiBjb21wb25lbnRXaWxsVXBkYXRlIFtuZXh0cHJvcHMgbmV4dHN0YXRlXVxuICAgICAgKHRoaXMtYXMgYyAoLmNhbGwgZiBjIGMgKHByb3BzLWFyZ3YgYyBuZXh0cHJvcHMpIG5leHRzdGF0ZSkpKVxuXG4gICAgOmNvbXBvbmVudERpZFVwZGF0ZVxuICAgIChmbiBjb21wb25lbnREaWRVcGRhdGUgW29sZHByb3BzIG9sZHN0YXRlIHNuYXBzaG90XVxuICAgICAgKHRoaXMtYXMgYyAoLmNhbGwgZiBjIGMgKHByb3BzLWFyZ3YgYyBvbGRwcm9wcykgb2xkc3RhdGUgc25hcHNob3QpKSlcblxuICAgIDs7IERlcHJlY2F0ZWQgLSB3YXJuaW5nIGluIDE2Ljkgd2lsbCB3b3JrIHRocm91Z2ggMTcueFxuICAgIDpjb21wb25lbnRXaWxsTW91bnRcbiAgICAoZm4gY29tcG9uZW50V2lsbE1vdW50IFtdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYykpKVxuXG4gICAgOzsgRGVwcmVjYXRlZCAtIHdpbGwgd29yayBpbiAxNy54XG4gICAgOlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnRcbiAgICAoZm4gY29tcG9uZW50V2lsbE1vdW50IFtdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYykpKVxuXG4gICAgOmNvbXBvbmVudERpZE1vdW50XG4gICAgKGZuIGNvbXBvbmVudERpZE1vdW50IFtdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYykpKVxuXG4gICAgOmNvbXBvbmVudFdpbGxVbm1vdW50XG4gICAgKGZuIGNvbXBvbmVudFdpbGxVbm1vdW50IFtdXG4gICAgICAodGhpcy1hcyBjXG4gICAgICAgICAgICAgICAoc29tZS0+IChnb2JqL2dldCBjIFwiY2xqc1JhdG9tXCIpIHJhdG9tL2Rpc3Bvc2UhKVxuICAgICAgICAgICAgICAgKGJhdGNoL21hcmstcmVuZGVyZWQgYylcbiAgICAgICAgICAgICAgICh3aGVuLW5vdCAobmlsPyBmKVxuICAgICAgICAgICAgICAgICAoLmNhbGwgZiBjIGMpKSkpXG5cbiAgICA6Y29tcG9uZW50RGlkQ2F0Y2hcbiAgICAoZm4gY29tcG9uZW50RGlkQ2F0Y2ggW2Vycm9yIGluZm9dXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyBlcnJvciBpbmZvKSkpXG5cbiAgICBuaWwpKVxuXG4oZGVmbiBnZXQtd3JhcHBlciBba2V5IGZdXG4gIChsZXQgW3dyYXAgKGN1c3RvbS13cmFwcGVyIGtleSBmKV1cbiAgICAod2hlbiAoYW5kIHdyYXAgZilcbiAgICAgIChhc3NlcnQtY2FsbGFibGUgZikpXG4gICAgKG9yIHdyYXAgZikpKVxuXG47OyBUaG91Z2ggdGhlIHZhbHVlIGlzIG5pbCBoZXJlLCB0aGUgd3JhcHBlciBmdW5jdGlvbiB3aWxsIGJlXG47OyBhZGRlZCB0byBjbGFzcyB0byBtYW5hZ2UgUmVhZ2VudCByYXRvbSBsaWZlY3ljbGUuXG4oZGVmIG9ibGlnYXRvcnkgezpzaG91bGRDb21wb25lbnRVcGRhdGUgbmlsXG4gICAgICAgICAgICAgICAgIDpjb21wb25lbnRXaWxsVW5tb3VudCBuaWx9KVxuXG4oZGVmIGRhc2gtdG8tbWV0aG9kLW5hbWUgKHV0aWwvbWVtb2l6ZS0xIHV0aWwvZGFzaC10by1tZXRob2QtbmFtZSkpXG5cbihkZWZuIGNhbWVsaWZ5LW1hcC1rZXlzIFtmdW4tbWFwXVxuICAocmVkdWNlLWt2IChmbiBbbSBrIHZdXG4gICAgICAgICAgICAgICAoYXNzb2MgbSAoLT4gayBkYXNoLXRvLW1ldGhvZC1uYW1lIGtleXdvcmQpIHYpKVxuICAgICAgICAgICAgIHt9IGZ1bi1tYXApKVxuXG4oZGVmbiBhZGQtb2JsaWdhdG9yeSBbZnVuLW1hcF1cbiAgKG1lcmdlIG9ibGlnYXRvcnkgZnVuLW1hcCkpXG5cbihkZWZuIHdyYXAtZnVucyBbZm1hcCBjb21waWxlcl1cbiAgKHdoZW4gKGRldj8pXG4gICAgKGxldCBbcmVuZGVycyAoc2VsZWN0LWtleXMgZm1hcCBbOnJlbmRlciA6cmVhZ2VudFJlbmRlcl0pXG4gICAgICAgICAgcmVuZGVyLWZ1biAoLT4gcmVuZGVycyB2YWxzIGZpcnN0KV1cbiAgICAgIChhc3NlcnQgKG5vdCAoOmNvbXBvbmVudEZ1bmN0aW9uIGZtYXApKSBcIjpjb21wb25lbnQtZnVuY3Rpb24gaXMgbm8gbG9uZ2VyIHN1cHBvcnRlZCwgdXNlIDpyZWFnZW50LXJlbmRlciBpbnN0ZWFkLlwiKVxuICAgICAgKGFzc2VydCAocG9zPyAoY291bnQgcmVuZGVycykpIFwiTWlzc2luZyByZWFnZW50LXJlbmRlclwiKVxuICAgICAgKGFzc2VydCAoPT0gMSAoY291bnQgcmVuZGVycykpIFwiVG9vIG1hbnkgcmVuZGVyIGZ1bmN0aW9ucyBzdXBwbGllZFwiKVxuICAgICAgKGFzc2VydC1jYWxsYWJsZSByZW5kZXItZnVuKSkpXG4gIChsZXQgW3JlbmRlci1mdW4gKG9yICg6cmVhZ2VudFJlbmRlciBmbWFwKVxuICAgICAgICAgICAgICAgICAgICAgICAoOnJlbmRlciBmbWFwKSlcbiAgICAgICAgbGVnYWN5LXJlbmRlciAobmlsPyAoOnJlYWdlbnRSZW5kZXIgZm1hcCkpXG4gICAgICAgIG5hbWUgKG9yICg6ZGlzcGxheU5hbWUgZm1hcClcbiAgICAgICAgICAgICAgICAgKHV0aWwvZnVuLW5hbWUgcmVuZGVyLWZ1bilcbiAgICAgICAgICAgICAgICAgKHN0ciAoZ2Vuc3ltIFwicmVhZ2VudFwiKSkpXG4gICAgICAgIGZtYXAgKHJlZHVjZS1rdiAoZm4gW20gayB2XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoYXNzb2MgbSBrIChnZXQtd3JhcHBlciBrIHYpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHt9IGZtYXApXVxuICAgIChhc3NvYyBmbWFwXG4gICAgICAgICAgIDpkaXNwbGF5TmFtZSBuYW1lXG4gICAgICAgICAgIDpjbGpzTGVnYWN5UmVuZGVyIGxlZ2FjeS1yZW5kZXJcbiAgICAgICAgICAgOnJlYWdlbnRSZW5kZXIgcmVuZGVyLWZ1blxuICAgICAgICAgICA6cmVuZGVyIChmbiByZW5kZXIgW11cbiAgICAgICAgICAgICAgICAgICAgICh0aGlzLWFzIGMgKGlmIHV0aWwvKm5vbi1yZWFjdGl2ZSpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZG8tcmVuZGVyIGMgY29tcGlsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGxldCBbXmNsaiByYXQgKGdvYmovZ2V0IGMgXCJjbGpzUmF0b21cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmF0Y2gvbWFyay1yZW5kZXJlZCBjKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmIChuaWw/IHJhdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHJhdG9tL3J1bi1pbi1yZWFjdGlvbiAjKGRvLXJlbmRlciBjIGNvbXBpbGVyKSBjIFwiY2xqc1JhdG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXRjaC9xdWV1ZS1yZW5kZXIgcmF0LW9wdHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICguX3J1biByYXQgZmFsc2UpKSkpKSkpKSlcblxuKGRlZm4gbWFwLXRvLWpzIFttXVxuICAocmVkdWNlLWt2IChmbiBbbyBrIHZdXG4gICAgICAgICAgICAgICAoZG90byBvXG4gICAgICAgICAgICAgICAgIChnb2JqL3NldCAobmFtZSBrKSB2KSkpXG4gICAgICAgICAgICAgI2pze30gbSkpXG5cbihkZWZuIGNsanNpZnkgW2JvZHkgY29tcGlsZXJdXG4gICgtPiBib2R5XG4gICAgICBjYW1lbGlmeS1tYXAta2V5c1xuICAgICAgYWRkLW9ibGlnYXRvcnlcbiAgICAgICh3cmFwLWZ1bnMgY29tcGlsZXIpKSlcblxuOzsgSWRlYSBmcm9tOlxuOzsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGVzdGVyaGF6eS8yYTI1YzgyZGIwNTE5YTI4ZTQxNWI0MDQ4MWY4NDU1NFxuOzsgaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vdGhoZWxsZXIvN2Y1MzBiMzRkZTFjNDQ1ODlmNGUwNjcxZTFlZjc1MzMjZmlsZS1lczYtY2xhc3MtY2xqcy1MMThcblxuKGRlZiBidWlsdC1pbi1zdGF0aWMtbWV0aG9kLW5hbWVzXG4gIFs6Y2hpbGRDb250ZXh0VHlwZXMgOmNvbnRleHRUeXBlcyA6Y29udGV4dFR5cGVcbiAgIDpnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMgOmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcl0pXG5cbihkZWZuIGNyZWF0ZS1jbGFzc1xuICBcIkNyZWF0ZXMgSlMgY2xhc3MgYmFzZWQgb24gcHJvdmlkZWQgQ2xvanVyZSBtYXAuXG5cbiAgTWFwIGtleXMgc2hvdWxkIHVzZSBgUmVhY3QuQ29tcG9uZW50YCBtZXRob2QgbmFtZXMgKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1jb21wb25lbnQuaHRtbCksXG4gIGFuZCBjYW4gYmUgcHJvdmlkZWQgaW4gc25ha2UtY2FzZSBvciBjYW1lbENhc2UuXG4gIENvbnN0cnVjdG9yIGZ1bmN0aW9uIGlzIGRlZmluZWQgdXNpbmcga2V5IGA6Z2V0SW5pdGlhbFN0YXRlYC5cblxuICBSZWFjdCBidWlsdC1pbiBzdGF0aWMgbWV0aG9kcyBvciBwcm9wZXJ0aWVzIGFyZSBhdXRvbWF0aWNhbGx5IGRlZmluZWQgYXMgc3RhdGljcy5cIlxuICBbYm9keSBjb21waWxlcl1cbiAgezpwcmUgWyhtYXA/IGJvZHkpXX1cbiAgKGxldCBbYm9keSAoY2xqc2lmeSBib2R5IGNvbXBpbGVyKVxuICAgICAgICBtZXRob2RzIChtYXAtdG8tanMgKGFwcGx5IGRpc3NvYyBib2R5IDpkaXNwbGF5TmFtZSA6Z2V0SW5pdGlhbFN0YXRlIDpjb25zdHJ1Y3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpyZW5kZXIgOnJlYWdlbnRSZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWlsdC1pbi1zdGF0aWMtbWV0aG9kLW5hbWVzKSlcbiAgICAgICAgc3RhdGljLW1ldGhvZHMgKG1hcC10by1qcyAoc2VsZWN0LWtleXMgYm9keSBidWlsdC1pbi1zdGF0aWMtbWV0aG9kLW5hbWVzKSlcbiAgICAgICAgZGlzcGxheS1uYW1lICg6ZGlzcGxheU5hbWUgYm9keSlcbiAgICAgICAgZ2V0LWluaXRpYWwtc3RhdGUgKDpnZXRJbml0aWFsU3RhdGUgYm9keSlcbiAgICAgICAgY29uc3RydWN0ICg6Y29uc3RydWN0b3IgYm9keSlcbiAgICAgICAgY21wIChmbiBbcHJvcHMgY29udGV4dCB1cGRhdGVyXVxuICAgICAgICAgICAgICAodGhpcy1hcyB0aGlzXG4gICAgICAgICAgICAgICAgKC5jYWxsIHJlYWN0L0NvbXBvbmVudCB0aGlzIHByb3BzIGNvbnRleHQgdXBkYXRlcilcbiAgICAgICAgICAgICAgICAod2hlbiBjb25zdHJ1Y3RcbiAgICAgICAgICAgICAgICAgIChjb25zdHJ1Y3QgdGhpcyBwcm9wcykpXG4gICAgICAgICAgICAgICAgKHdoZW4gZ2V0LWluaXRpYWwtc3RhdGVcbiAgICAgICAgICAgICAgICAgIChzZXQhICguLXN0YXRlIHRoaXMpIChnZXQtaW5pdGlhbC1zdGF0ZSB0aGlzKSkpXG4gICAgICAgICAgICAgICAgKHNldCEgKC4tY2xqc01vdW50T3JkZXIgXmNsaiB0aGlzKSAoYmF0Y2gvbmV4dC1tb3VudC1jb3VudCkpXG4gICAgICAgICAgICAgICAgdGhpcykpXVxuXG4gICAgKGdvYmovZXh0ZW5kICguLXByb3RvdHlwZSBjbXApICguLXByb3RvdHlwZSByZWFjdC9Db21wb25lbnQpIG1ldGhvZHMpXG5cbiAgICA7OyBUaGVzZSBuYW1lcyBTSE9VTEQgYmUgbWFuZ2xlZCBieSBDbG9zdXJlIHNvIHdlIGNhbid0IHVzZSBnb29nL2V4dGVuZFxuXG4gICAgKHdoZW4gKDpyZW5kZXIgYm9keSlcbiAgICAgIChzZXQhICguLXJlbmRlciBeanMgKC4tcHJvdG90eXBlIGNtcCkpICg6cmVuZGVyIGJvZHkpKSlcblxuICAgICh3aGVuICg6cmVhZ2VudFJlbmRlciBib2R5KVxuICAgICAgKHNldCEgKC4tcmVhZ2VudFJlbmRlciBeY2xqICguLXByb3RvdHlwZSBjbXApKSAoOnJlYWdlbnRSZW5kZXIgYm9keSkpKVxuXG4gICAgKHdoZW4gKDpjbGpzTGVnYWN5UmVuZGVyIGJvZHkpXG4gICAgICAoc2V0ISAoLi1jbGpzTGVnYWN5UmVuZGVyIF5jbGogKC4tcHJvdG90eXBlIGNtcCkpICg6Y2xqc0xlZ2FjeVJlbmRlciBib2R5KSkpXG5cbiAgICAoZ29iai9leHRlbmQgY21wIHJlYWN0L0NvbXBvbmVudCBzdGF0aWMtbWV0aG9kcylcblxuICAgICh3aGVuIGRpc3BsYXktbmFtZVxuICAgICAgKHNldCEgKC4tZGlzcGxheU5hbWUgY21wKSBkaXNwbGF5LW5hbWUpXG4gICAgICAoc2V0ISAoLi1jbGpzJGxhbmckY3RvclN0ciBjbXApIGRpc3BsYXktbmFtZSlcbiAgICAgIChzZXQhICguLWNsanMkbGFuZyRjdG9yUHJXcml0ZXIgY21wKVxuICAgICAgICAgICAgKGZuIFt0aGlzIHdyaXRlciBvcHRdXG4gICAgICAgICAgICAgIChjbGpzLmNvcmUvLXdyaXRlIHdyaXRlciBkaXNwbGF5LW5hbWUpKSkpXG5cbiAgICAoc2V0ISAoLi1jbGpzJGxhbmckdHlwZSBjbXApIHRydWUpXG4gICAgKHNldCEgKC4uIGNtcCAtcHJvdG90eXBlIC1jb25zdHJ1Y3RvcikgY21wKVxuXG4gICAgY21wKSlcblxuOzsgQ2FjaGUgcmVzdWx0IHRvIHRoZSB0YWcgYnV0IHBlciBjb21waWxlciBJRFxuOzsgVE9ETzogR2VuZXJhdGUgY2FjaGUgJiBnZXQgbWV0aG9kcyB0byB0aGUgT2JqZWN0IHVzaW5nIG1hY3JvLFxuOzsgY2FuIGdlbmVyYXRlIGNvZGUgY2FsbGluZyBpbnRlcm9wIGZvcm1zLlxuKGRlZm4gY2FjaGVkLXJlYWN0LWNsYXNzIFtjb21waWxlciBeY2xqIGNdXG4gIChnb2JqL2dldCBjIChwL2dldC1pZCBjb21waWxlcikpKVxuXG4oZGVmbiBjYWNoZS1yZWFjdC1jbGFzcyBbY29tcGlsZXIgXmNsaiBjIGNvbnN0cnVjdG9yXVxuICAoZ29iai9zZXQgYyAocC9nZXQtaWQgY29tcGlsZXIpIGNvbnN0cnVjdG9yKVxuICBjb25zdHJ1Y3RvcilcblxuKGRlZm4gZm4tdG8tY2xhc3MgW2NvbXBpbGVyIGZdXG4gIChhc3NlcnQtY2FsbGFibGUgZilcbiAgKHdhcm4tdW5sZXNzIChub3QgKGFuZCAocmVhY3QtY2xhc3M/IGYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgKG5vdCAocmVhZ2VudC1jbGFzcz8gZikpKSlcbiAgICAgICAgICAgICAgIFwiVXNpbmcgbmF0aXZlIFJlYWN0IGNsYXNzZXMgZGlyZWN0bHkgaW4gSGljY3VwIGZvcm1zIFwiXG4gICAgICAgICAgICAgICBcImlzIG5vdCBzdXBwb3J0ZWQuIFVzZSBjcmVhdGUtZWxlbWVudCBvciBcIlxuICAgICAgICAgICAgICAgXCJhZGFwdC1yZWFjdC1jbGFzcyBpbnN0ZWFkOiBcIiAob3IgKHV0aWwvZnVuLW5hbWUgZilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmKVxuICAgICAgICAgICAgICAgKGNvbXAtbmFtZSkpXG4gIChpZiAocmVhZ2VudC1jbGFzcz8gZilcbiAgICAoY2FjaGUtcmVhY3QtY2xhc3MgY29tcGlsZXIgZiBmKVxuICAgIChsZXQgW3NwZWMgKG1ldGEgZilcbiAgICAgICAgICB3aXRocmVuZGVyIChhc3NvYyBzcGVjIDpyZWFnZW50LXJlbmRlciBmKVxuICAgICAgICAgIHJlcyAoY3JlYXRlLWNsYXNzIHdpdGhyZW5kZXIgY29tcGlsZXIpXVxuICAgICAgKGNhY2hlLXJlYWN0LWNsYXNzIGNvbXBpbGVyIGYgcmVzKSkpKVxuXG4oZGVmbiBhcy1jbGFzcyBbdGFnIGNvbXBpbGVyXVxuICAoaWYtc29tZSBbY2FjaGVkLWNsYXNzIChjYWNoZWQtcmVhY3QtY2xhc3MgY29tcGlsZXIgdGFnKV1cbiAgICBjYWNoZWQtY2xhc3NcbiAgICAoZm4tdG8tY2xhc3MgY29tcGlsZXIgdGFnKSkpXG5cbihkZWZuIHJlYWN0aWZ5LWNvbXBvbmVudCBbY29tcCBjb21waWxlcl1cbiAgKGlmIChyZWFjdC1jbGFzcz8gY29tcClcbiAgICBjb21wXG4gICAgKGFzLWNsYXNzIGNvbXAgY29tcGlsZXIpKSlcblxuKGRlZm4gZnVuY3Rpb25hbC13cmFwLXJlbmRlclxuICBbY29tcGlsZXIgY11cbiAgKGxldCBbZiAoLi1yZWFnZW50UmVuZGVyIGMpXG4gICAgICAgIF8gKGFzc2VydC1jYWxsYWJsZSBmKVxuICAgICAgICBhcmd2ICguLWFyZ3YgYylcbiAgICAgICAgcmVzIChhcHBseSBmIGFyZ3YpXVxuICAgIChjb25kXG4gICAgICAodmVjdG9yPyByZXMpIChwL2FzLWVsZW1lbnQgY29tcGlsZXIgcmVzKVxuICAgICAgKGlmbj8gcmVzKSAobGV0IFtmIChpZiAocmVhZ2VudC1jbGFzcz8gcmVzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZuIFsmIGFyZ3NdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwL2FzLWVsZW1lbnQgY29tcGlsZXIgKGFwcGx5IHZlY3RvciByZXMgYXJncykpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzKV1cbiAgICAgICAgICAgICAgICAgICAoc2V0ISAoLi1yZWFnZW50UmVuZGVyIGMpIGYpXG4gICAgICAgICAgICAgICAgICAgKHJlY3VyIGNvbXBpbGVyIGMpKVxuICAgICAgOmVsc2UgcmVzKSkpXG5cbihkZWZuIGZ1bmN0aW9uYWwtZG8tcmVuZGVyIFtjb21waWxlciBjXVxuICAoYmluZGluZyBbKmN1cnJlbnQtY29tcG9uZW50KiBjXVxuICAgIChpZiAoZGV2PylcbiAgICAgIDs7IExvZyBlcnJvcnMsIHdpdGhvdXQgdXNpbmcgdHJ5L2NhdGNoIChhbmQgbWVzcyB1cCBjYWxsIHN0YWNrKVxuICAgICAgKGxldCBbb2sgKGFycmF5IGZhbHNlKV1cbiAgICAgICAgKHRyeVxuICAgICAgICAgIChsZXQgW3JlcyAoZnVuY3Rpb25hbC13cmFwLXJlbmRlciBjb21waWxlciBjKV1cbiAgICAgICAgICAgIChhc2V0IG9rIDAgdHJ1ZSlcbiAgICAgICAgICAgIHJlcylcbiAgICAgICAgICAoZmluYWxseVxuICAgICAgICAgICAgKHdoZW4tbm90IChhZ2V0IG9rIDApXG4gICAgICAgICAgICAgIChlcnJvciAoc3RyIFwiRXJyb3IgcmVuZGVyaW5nIGNvbXBvbmVudFwiIChjb21wLW5hbWUpKSkpKSkpXG4gICAgICAoZnVuY3Rpb25hbC13cmFwLXJlbmRlciBjb21waWxlciBjKSkpKVxuXG4oZGVmbiBmdW5jdGlvbmFsLXJlbmRlciBbY29tcGlsZXIganNwcm9wc11cbiAgKGlmIHV0aWwvKm5vbi1yZWFjdGl2ZSpcbiAgICA7OyBOb24tcmVhY3RpdmUgY29tcG9uZW50IG5lZWRzIGp1c3QgdGhlIHJlbmRlciBmbiBhbmQgYXJndlxuICAgIChmdW5jdGlvbmFsLWRvLXJlbmRlciBjb21waWxlciBqc3Byb3BzKVxuICAgIChsZXQgW2FyZ3YgKC4tYXJndiBqc3Byb3BzKVxuICAgICAgICAgIHRhZyAoLi1yZWFnZW50UmVuZGVyIGpzcHJvcHMpXG5cbiAgICAgICAgICA7OyBVc2UgY291bnRlciB0byB0cmlnZ2VyIHJlbmRlciBtYW51YWxseS5cbiAgICAgICAgICBbXyB1cGRhdGUtY291bnRdIChyZWFjdC91c2VTdGF0ZSAwKVxuXG4gICAgICAgICAgOzsgVGhpcyBvYmplY3QgbWltaWNzIFJlYWN0IENsYXNzIGF0dHJpYnV0ZXMgYW5kIG1ldGhvZHMuXG4gICAgICAgICAgOzsgVG8gc3VwcG9ydCBmb3JtLTIgY29tcG9uZW50cywgZXZlbiB0aGUgcmVuZGVyIGZuIG5lZWRzIHRvXG4gICAgICAgICAgOzsgYmUgc3RvcmVkIGFzIGl0IGlzIGNyZWF0ZWQgZHVyaW5nIHRoZSBmaXJzdCByZW5kZXIsXG4gICAgICAgICAgOzsgYW5kIHN1YnNlcXVlbnQgcmVuZGVycyBuZWVkIHRvIHJldHJpZXZlIHRoZSBjcmVhdGVkIGZuLlxuICAgICAgICAgIHN0YXRlLXJlZiAocmVhY3QvdXNlUmVmKVxuXG4gICAgICAgICAgXyAod2hlbi1ub3QgKC4tY3VycmVudCBzdGF0ZS1yZWYpXG4gICAgICAgICAgICAgIChsZXQgW29iaiAjanMge31dXG4gICAgICAgICAgICAgICAgKHNldCEgKC4tZm9yY2VVcGRhdGUgb2JqKSAoZm4gW10gKHVwZGF0ZS1jb3VudCBpbmMpKSlcbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1jbGpzTW91bnRPcmRlciBvYmopIChiYXRjaC9uZXh0LW1vdW50LWNvdW50KSlcbiAgICAgICAgICAgICAgICA7OyBVc2UgcmVhZ2VudFJlbmRlciBuYW1lLCBhcyB0aGF0IGlzIGFsc28gdXNlZFxuICAgICAgICAgICAgICAgIDs7IGJ5IGNsYXNzIGNvbXBvbmVudHMsIGFuZCBzb21lIGNoZWNrcy5cbiAgICAgICAgICAgICAgICA7OyByZWFnZW50UmVuZGVyIGlzIHJlcGxhY2VkIHdpdGggZm9ybS0yIGlubmVyIGZuLFxuICAgICAgICAgICAgICAgIDs7IGNvbnN0cnVjdG9yIHJlZmVycyB0byB0aGUgb3JpZ2luYWwgZm4uXG4gICAgICAgICAgICAgICAgKHNldCEgKC4tY29uc3RydWN0b3Igb2JqKSB0YWcpXG4gICAgICAgICAgICAgICAgKHNldCEgKC4tcmVhZ2VudFJlbmRlciBvYmopIHRhZylcblxuICAgICAgICAgICAgICAgIChzZXQhICguLWN1cnJlbnQgc3RhdGUtcmVmKSBvYmopKSlcblxuICAgICAgICAgIHJlYWdlbnQtc3RhdGUgKC4tY3VycmVudCBzdGF0ZS1yZWYpXG5cbiAgICAgICAgICA7OyBGSVhNRTogQWNjZXNzIGNsanNSYXRvbSB1c2luZyBpbnRlcm9wIGZvcm1zXG4gICAgICAgICAgcmF0IChnb2JqL2dldCByZWFnZW50LXN0YXRlIFwiY2xqc1JhdG9tXCIpXVxuXG4gICAgICAocmVhY3QvdXNlRWZmZWN0XG4gICAgICAgIChmbiBtb3VudCBbXVxuICAgICAgICAgIChmbiB1bm1vdW50IFtdXG4gICAgICAgICAgICAoc29tZS0+IChnb2JqL2dldCByZWFnZW50LXN0YXRlIFwiY2xqc1JhdG9tXCIpIHJhdG9tL2Rpc3Bvc2UhKSkpXG4gICAgICAgIDs7IElnbm9yZSBwcm9wcyAtIG9ubHkgcnVuIGVmZmVjdCBvbmNlIG9uIG1vdW50IGFuZCB1bm1vdW50XG4gICAgICAgICNqcyBbXSlcblxuICAgICAgOzsgQXJndiBpcyBhbHNvIHN0b3JlZCBpbiB0aGUgc3RhdGUsXG4gICAgICA7OyBzbyByZWFjdGlvbiBmbiB3aWxsIGFsd2F5cyBzZWUgdGhlIGxhdGVzdCB2YWx1ZS5cbiAgICAgIChzZXQhICguLWFyZ3YgcmVhZ2VudC1zdGF0ZSkgYXJndilcblxuICAgICAgKGJhdGNoL21hcmstcmVuZGVyZWQgcmVhZ2VudC1zdGF0ZSlcblxuICAgICAgOzsgc3RhdGljLWZucyA6cmVuZGVyXG4gICAgICAoaWYgKG5pbD8gcmF0KVxuICAgICAgICAocmF0b20vcnVuLWluLXJlYWN0aW9uXG4gICAgICAgICAgOzsgTW9jayBDbGFzcyBjb21wb25lbnQgQVBJXG4gICAgICAgICAgIyhmdW5jdGlvbmFsLWRvLXJlbmRlciBjb21waWxlciByZWFnZW50LXN0YXRlKVxuICAgICAgICAgIHJlYWdlbnQtc3RhdGVcbiAgICAgICAgICBcImNsanNSYXRvbVwiXG4gICAgICAgICAgYmF0Y2gvcXVldWUtcmVuZGVyXG4gICAgICAgICAgcmF0LW9wdHMpXG4gICAgICAgIDs7IFRPRE86IENvbnNpZGVyIHBhc3NpbmcgcHJvcHMgaGVyZSwgaW5zdGVhZCBvZiBrZWVwaW5nIHRoZW0gaW4gc3RhdGU/XG4gICAgICAgICguX3J1biByYXQgZmFsc2UpKSkpKVxuXG4oZGVmbiBmdW5jdGlvbmFsLXJlbmRlci1tZW1vLWZuXG4gIFtwcmV2LXByb3BzIG5leHQtcHJvcHNdXG4gIChsZXQgW29sZC1hcmd2ICguLWFyZ3YgcHJldi1wcm9wcylcbiAgICAgICAgbmV3LWFyZ3YgKC4tYXJndiBuZXh0LXByb3BzKV1cbiAgICAoYW5kIChmYWxzZT8gdXRpbC8qYWx3YXlzLXVwZGF0ZSopXG4gICAgICAgICAodHJ5XG4gICAgICAgICAgICg9IG9sZC1hcmd2IG5ldy1hcmd2KVxuICAgICAgICAgICAoY2F0Y2ggOmRlZmF1bHQgZVxuICAgICAgICAgICAgICh3YXJuIFwiRXhjZXB0aW9uIHRocm93biB3aGlsZSBjb21wYXJpbmcgYXJndidzIGluIHNob3VsZENvbXBvbmVudFVwZGF0ZTogXCIgb2xkLWFyZ3YgXCIgXCIgbmV3LWFyZ3YgXCIgXCIgZSlcbiAgICAgICAgICAgICBmYWxzZSkpKSkpXG5cbihkZWZuIGZ1bmN0aW9uYWwtcmVuZGVyLWZuXG4gIFwiQ3JlYXRlIGNvcHkgb2YgZnVuY3Rpb25hbC1yZW5kZXIgd2l0aCBkaXNwbGF5TmFtZSBzZXQgdG8gbmFtZSBvZiB0aGVcbiAgb3JpZ2luYWwgUmVhZ2VudCBjb21wb25lbnQuXCJcbiAgW2NvbXBpbGVyIHRhZ11cbiAgOzsgVE9ETzogQ291bGQgYmUgZGlzYWJsZWQgZm9yIG9wdGltaXplZCBidWlsZHM/XG4gIDs7IE9yIG5vdCBjdXJyZW50bHkgLSB0aGUgbWVtbyB3cmFwIGlzIHJlcXVpcmVkLlxuICAob3IgKGNhY2hlZC1yZWFjdC1jbGFzcyBjb21waWxlciB0YWcpXG4gICAgICAobGV0IFtmIChmbiBbanNwcm9wc10gKGZ1bmN0aW9uYWwtcmVuZGVyIGNvbXBpbGVyIGpzcHJvcHMpKVxuICAgICAgICAgICAgXyAoc2V0ISAoLi1kaXNwbGF5TmFtZSBmKSAodXRpbC9mdW4tbmFtZSB0YWcpKVxuICAgICAgICAgICAgZiAocmVhY3QvbWVtbyBmIGZ1bmN0aW9uYWwtcmVuZGVyLW1lbW8tZm4pXVxuICAgICAgICAoY2FjaGUtcmVhY3QtY2xhc3MgY29tcGlsZXIgdGFnIGYpXG4gICAgICAgIGYpKSlcbiJdfQ==