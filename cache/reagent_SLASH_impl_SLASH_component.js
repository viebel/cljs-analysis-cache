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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,react.Children.toArray.call(null,p.children));
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
react.Component.call(this$,props,context,updater);

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
goog.object.extend(cmp.prototype,react.Component.prototype,methods$);

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

goog.object.extend(cmp,react.Component,static_methods);

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
var vec__346 = react.useState.call(null,(0));
var _ = cljs.core.nth.call(null,vec__346,(0),null);
var update_count = cljs.core.nth.call(null,vec__346,(1),null);
var state_ref = react.useRef.call(null);
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
react.useEffect.call(null,(function reagent$impl$component$functional_render_$_mount(){
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
var f__$1 = react.memo.call(null,f,reagent.impl.component.functional_render_memo_fn);
reagent.impl.component.cache_react_class.call(null,compiler,tag,f__$1);

return f__$1;
}
});

//# sourceURL=reagent/impl/component.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL2NvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50LmNsanMiXSwibGluZUNvdW50Ijo3NjYsIm1hcHBpbmdzIjoiO0FBU0EsQUFBQSxBQUtBLHVDQUFBLHZDQUFNQSxzRkFBZUM7QUFBckIsQUFDRSxJQUFNQyxJQUFFLDBCQUFBLElBQUEsOUJBQUNDLHdCQUFJRjtBQUFiLEFBQ0UsR0FBSSxBQUFDRywrQkFBS0Y7QUFBR0E7O0FBQWI7OztBQUVKLDBDQUFBLDFDQUFNRyw0RkFBa0JKO0FBQXhCLEFBQ0UsSUFBTUMsSUFBRSwwQkFBQSxJQUFBLDlCQUFDQyx3QkFBSUY7SUFDUEssY0FBWSwwREFBQSxJQUFBLDVEQUFJLEVBQUksTUFBQSxMQUFNSixnQkFBRyxBQUFDRSwrQkFBS0Y7QUFEekMsQUFFRSxHQUFJLENBQUcsQUFBQ0ssMEJBQU1OLEtBQUdLO0FBQ2YsT0FBQ0UsMkJBQU9QLEVBQUVLOztBQURaOzs7QUFHSixvQ0FBQSxwQ0FBTUcsZ0ZBQWdDQyxFQUFFUjtBQUF4QyxBQUNFLElBQUFTLHFCQUFZLEFBQVFUO0FBQXBCLEFBQUEsR0FBQSxDQUFBUyxzQkFBQTtBQUFBLDBGQUVHLEFBQWVELGNBQUcsQUFBQ0csK0NBQXdCWDs7QUFGOUMsUUFBQVMsSkFBVUM7QUFBVixBQUNFQTs7O0FBR0osa0NBQUEsbENBQU1FLDRFQUE4Qko7QUFBcEMsQUFDRSxPQUFDRCw0Q0FBV0MsRUFBRSxBQUFTQTs7QUFFekIsbUNBQUEsbkNBQU1LLDhFQUErQkw7QUFBckMsQUFDRSxJQUFNUixJQUFFLEFBQVNRO0FBQWpCLEFBQ0UsSUFBQUMscUJBQVksQUFBUVQ7QUFBcEIsQUFBQSxHQUFBLENBQUFTLHNCQUFBO0FBRUUsT0FBQ0UsK0NBQXdCWDs7QUFGM0IsUUFBQVMsSkFBVVY7QUFBVixBQUNFLE9BQUNELCtDQUFjQzs7O0FBR3JCLHNDQUFBLHRDQUFNZSxvRkFBa0NOO0FBQXhDLEFBQ0UsSUFBTVIsSUFBRSxBQUFTUTtBQUFqQixBQUNFLElB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QUFJLFFBQUEsUEFBTXREO0FBQ1IsK0NBQUEseENBQUNDO0FBQUQsQUFFRyxPQUFDeUMsc0RBQXFCN0gsU0FBU3lJO2lCQUZsQyxkQUdFQSwwQkFFQXBELG1DQUNBekQ7O0FBRUYsZ0JBQUEsVEFBT3VEOzs7O0FBRWYsbURBQUEsbkRBQU15RCw4R0FDSEMsV0FBV0M7QUFEZCxBQUVFLElBQU1yRyxXQUFTLEFBQVFvRztJQUNqQm5HLFdBQVMsQUFBUW9HO0FBRHZCLEFBRUUsR0FBSyxBQUFRdEc7QUFDUixJQUFBLEFBQ0UsT0FBQ3dHLHlCQUFFdkcsU0FBU0M7Y0FEZCxRQUFBcUcsSkFFa0JqRztBQUZsQixBQUdJLG9CQUFBLEFBQUFwQjtBQUFBLEFBQUEsQUFBQSxrQkFBQSxBQUFBQSx3QkFBQSxBQUFBQSw0QkFBQUMsY0FBQSxDQUFBLFlBQUEsMkhBQUEsMERBQUEscEVBQTJFYywwREFBYUMsMERBQWFJOztBQUFyRzs7QUFISjs7QUFETDs7O0FBT0o7Ozs7OENBQUEsOUNBQU1tRyxvR0FHSGpKLFNBQVN1SDtBQUhaLEFBTUUsSUFBQXZHLG9CQUFJLEFBQUM4RixvREFBbUI5RyxTQUFTdUg7QUFBakMsQUFBQSxvQkFBQXZHO0FBQUFBOztBQUNJLElBQU1mLElBQUUsV0FBS2dJO0FBQUwsQUFBYyxPQUFDRCxtREFBa0JoSSxTQUFTaUk7O0lBQzVDL0gsSUFBRSxDQUFNLEFBQWVELGdCQUFHLEFBQUMrRSxxQ0FBY3VDO0lBQ3pDdEgsUUFBRSxBQUFDaUoscUJBQVdqSixFQUFFMkk7QUFGdEIsQUFHRSxBQUFDNUIsbURBQWtCaEgsU0FBU3VILElBQUl0SDs7QUFDaENBIiwibmFtZXMiOlsicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9leHRyYWN0LXByb3BzIiwidiIsInAiLCJjbGpzLmNvcmUvbnRoIiwiY2xqcy5jb3JlL21hcD8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2V4dHJhY3QtY2hpbGRyZW4iLCJmaXJzdC1jaGlsZCIsImNsanMuY29yZS9jb3VudCIsImNsanMuY29yZS9zdWJ2ZWMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3Byb3BzLWFyZ3YiLCJjIiwidGVtcF9fOTcxNF9fYXV0b19fIiwiYSIsInJlYWdlbnQuaW1wbC51dGlsL3NoYWxsb3ctb2JqLXRvLW1hcCIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZ2V0LWFyZ3YiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC1wcm9wcyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZ2V0LWNoaWxkcmVuIiwicmVhY3QvQ2hpbGRyZW4iLCJjbGpzLmNvcmUvaW50byIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmVhZ2VudC1jbGFzcz8iLCJjbGpzLmNvcmUvZm4/IiwiR19fMzE1IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yZWFjdC1jbGFzcz8iLCJHX18zMTciLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3JlYWdlbnQtY29tcG9uZW50PyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvc3RhdGUtYXRvbSIsInRoaXMiLCJzYSIsInJlYWdlbnQucmF0b20vYXRvbSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvd3JhcC1yZW5kZXIiLCJjb21waWxlciIsImYiLCJfIiwiY2xqcy5jb3JlL2lmbj8iLCJqcy9FcnJvciIsImNsanMuY29yZS9wci1zdHIiLCJyZXMiLCJuIiwiR19fMzE4IiwiY2xqcy5jb3JlL2ludG8tYXJyYXkiLCJjbGpzLmNvcmUvdmVjdG9yPyIsInJlYWdlbnQuaW1wbC5wcm90b2NvbHMvYXMtZWxlbWVudCIsImFyZ3MiLCJjbGpzLmNvcmUvYXBwbHkiLCJjbGpzLmNvcmUvdmVjdG9yIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9jb21wb25lbnQtbmFtZSIsIm9yX18xMDExNl9fYXV0b19fIiwiR19fMzI2IiwiR19fMzI3IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9jb21wLW5hbWUiLCJyZWFnZW50LmltcGwuY29tcG9uZW50LypjdXJyZW50LWNvbXBvbmVudCoiLCJjbGpzLmNvcmUvZW1wdHk/IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9kby1yZW5kZXIiLCIqY3VycmVudC1jb21wb25lbnQqLW9yaWctdmFsX18zMjgiLCIqY3VycmVudC1jb21wb25lbnQqLXRlbXAtdmFsX18zMjkiLCJvayIsInJlYWdlbnQvZGVidWciLCJqcy9jb25zb2xlIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yYXQtb3B0cyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY3VzdG9tLXdyYXBwZXIiLCJrZXkiLCJHX18zMzAiLCJjbGpzLmNvcmUvS2V5d29yZCIsInByb3BzIiwic3RhdGUiLCJjbGpzLmNvcmUvcmVzZXQhIiwib2xkcHJvcHMiLCJvbGRzdGF0ZSIsIm5leHRwcm9wcyIsIm5leHRzdGF0ZSIsInJlYWdlbnQuaW1wbC51dGlsLyphbHdheXMtdXBkYXRlKiIsIm9sZC1hcmd2IiwibmV3LWFyZ3YiLCJub2FyZ3YiLCJlMzMyIiwiY2xqcy5jb3JlL25vdD0iLCJlIiwic25hcHNob3QiLCJHX18zMzMiLCJnb29nLm9iamVjdC9nZXQiLCJyZWFnZW50LnJhdG9tL2Rpc3Bvc2UhIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL21hcmstcmVuZGVyZWQiLCJlcnJvciIsImluZm8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC13cmFwcGVyIiwid3JhcCIsImFuZF9fMTAwOTFfX2F1dG9fXyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvb2JsaWdhdG9yeSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZGFzaC10by1tZXRob2QtbmFtZSIsInJlYWdlbnQuaW1wbC51dGlsL21lbW9pemUtMSIsInJlYWdlbnQuaW1wbC51dGlsL2Rhc2gtdG8tbWV0aG9kLW5hbWUiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NhbWVsaWZ5LW1hcC1rZXlzIiwiZnVuLW1hcCIsImNsanMuY29yZS9yZWR1Y2Uta3YiLCJtIiwiayIsImNsanMuY29yZS9hc3NvYyIsImNsanMuY29yZS9rZXl3b3JkIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9hZGQtb2JsaWdhdG9yeSIsImNsanMuY29yZS9tZXJnZSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvd3JhcC1mdW5zIiwiZm1hcCIsInJlbmRlcnMiLCJjbGpzLmNvcmUvc2VsZWN0LWtleXMiLCJyZW5kZXItZnVuIiwiY2xqcy5jb3JlL3ZhbHMiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbm90IiwibGVnYWN5LXJlbmRlciIsIm5hbWUiLCJyZWFnZW50LmltcGwudXRpbC9mdW4tbmFtZSIsImNsanMuY29yZS9nZW5zeW0iLCJyZWFnZW50LmltcGwudXRpbC8qbm9uLXJlYWN0aXZlKiIsInJhdCIsInJlYWdlbnQucmF0b20vcnVuLWluLXJlYWN0aW9uIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL3F1ZXVlLXJlbmRlciIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvbWFwLXRvLWpzIiwibyIsIkdfXzMzOCIsImdvb2cub2JqZWN0L3NldCIsImNsanMuY29yZS9uYW1lIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9jbGpzaWZ5IiwiYm9keSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvYnVpbHQtaW4tc3RhdGljLW1ldGhvZC1uYW1lcyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY3JlYXRlLWNsYXNzIiwibWV0aG9kcyIsImNsanMuY29yZS9kaXNzb2MiLCJzdGF0aWMtbWV0aG9kcyIsImRpc3BsYXktbmFtZSIsImdldC1pbml0aWFsLXN0YXRlIiwiY29uc3RydWN0IiwiY21wIiwiY29udGV4dCIsInVwZGF0ZXIiLCJyZWFjdC9Db21wb25lbnQiLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvbmV4dC1tb3VudC1jb3VudCIsImdvb2cub2JqZWN0L2V4dGVuZCIsIndyaXRlciIsIm9wdCIsImNsanMuY29yZS8td3JpdGUiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NhY2hlZC1yZWFjdC1jbGFzcyIsInJlYWdlbnQuaW1wbC5wcm90b2NvbHMvZ2V0LWlkIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9jYWNoZS1yZWFjdC1jbGFzcyIsImNvbnN0cnVjdG9yIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mbi10by1jbGFzcyIsInNwZWMiLCJjbGpzLmNvcmUvbWV0YSIsIndpdGhyZW5kZXIiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2FzLWNsYXNzIiwidGFnIiwiY2FjaGVkLWNsYXNzIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yZWFjdGlmeS1jb21wb25lbnQiLCJjb21wIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mdW5jdGlvbmFsLXdyYXAtcmVuZGVyIiwiYXJndiIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZnVuY3Rpb25hbC1kby1yZW5kZXIiLCIqY3VycmVudC1jb21wb25lbnQqLW9yaWctdmFsX18zNDQiLCIqY3VycmVudC1jb21wb25lbnQqLXRlbXAtdmFsX18zNDUiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2Z1bmN0aW9uYWwtcmVuZGVyIiwianNwcm9wcyIsInZlY19fMzQ2IiwidXBkYXRlLWNvdW50IiwicmVhY3QvdXNlU3RhdGUiLCJzdGF0ZS1yZWYiLCJyZWFjdC91c2VSZWYiLCJvYmoiLCJjbGpzLmNvcmUvaW5jIiwicmVhZ2VudC1zdGF0ZSIsInJlYWN0L3VzZUVmZmVjdCIsIkdfXzM0OSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZnVuY3Rpb25hbC1yZW5kZXItbWVtby1mbiIsInByZXYtcHJvcHMiLCJuZXh0LXByb3BzIiwiZTM1MSIsImNsanMuY29yZS89IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mdW5jdGlvbmFsLXJlbmRlci1mbiIsInJlYWN0L21lbW8iXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIHJlYWdlbnQuaW1wbC5jb21wb25lbnRcbiAgKDpyZXF1aXJlIFtnb29nLm9iamVjdCA6YXMgZ29ial1cbiAgICAgICAgICAgIFtyZWFjdCA6YXMgcmVhY3RdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnV0aWwgOmFzIHV0aWxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmJhdGNoaW5nIDphcyBiYXRjaF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwucHJvdG9jb2xzIDphcyBwXVxuICAgICAgICAgICAgW3JlYWdlbnQucmF0b20gOmFzIHJhdG9tXVxuICAgICAgICAgICAgW3JlYWdlbnQuZGVidWcgOnJlZmVyLW1hY3JvcyBbZGV2PyB3YXJuIGVycm9yIHdhcm4tdW5sZXNzIGFzc2VydC1jYWxsYWJsZV1dKSlcblxuKGRlY2xhcmUgXjpkeW5hbWljICpjdXJyZW50LWNvbXBvbmVudCopXG5cblxuOzs7IEFyZ3YgYWNjZXNzXG5cbihkZWZuIGV4dHJhY3QtcHJvcHMgW3ZdXG4gIChsZXQgW3AgKG50aCB2IDEgbmlsKV1cbiAgICAoaWYgKG1hcD8gcCkgcCkpKVxuXG4oZGVmbiBleHRyYWN0LWNoaWxkcmVuIFt2XVxuICAobGV0IFtwIChudGggdiAxIG5pbClcbiAgICAgICAgZmlyc3QtY2hpbGQgKGlmIChvciAobmlsPyBwKSAobWFwPyBwKSkgMiAxKV1cbiAgICAoaWYgKD4gKGNvdW50IHYpIGZpcnN0LWNoaWxkKVxuICAgICAgKHN1YnZlYyB2IGZpcnN0LWNoaWxkKSkpKVxuXG4oZGVmbiBwcm9wcy1hcmd2IFteanMvUmVhY3QuQ29tcG9uZW50IGMgcF1cbiAgKGlmLXNvbWUgW2EgKC4tYXJndiBwKV1cbiAgICBhXG4gICAgWyguLWNvbnN0cnVjdG9yIGMpICh1dGlsL3NoYWxsb3ctb2JqLXRvLW1hcCBwKV0pKVxuXG4oZGVmbiBnZXQtYXJndiBbXmpzL1JlYWN0LkNvbXBvbmVudCBjXVxuICAocHJvcHMtYXJndiBjICguLXByb3BzIGMpKSlcblxuKGRlZm4gZ2V0LXByb3BzIFteanMvUmVhY3QuQ29tcG9uZW50IGNdXG4gIChsZXQgW3AgKC4tcHJvcHMgYyldXG4gICAgKGlmLXNvbWUgW3YgKC4tYXJndiBwKV1cbiAgICAgIChleHRyYWN0LXByb3BzIHYpXG4gICAgICAodXRpbC9zaGFsbG93LW9iai10by1tYXAgcCkpKSlcblxuKGRlZm4gZ2V0LWNoaWxkcmVuIFteanMvUmVhY3QuQ29tcG9uZW50IGNdXG4gIChsZXQgW3AgKC4tcHJvcHMgYyldXG4gICAgKGlmLXNvbWUgW3YgKC4tYXJndiBwKV1cbiAgICAgIChleHRyYWN0LWNoaWxkcmVuIHYpXG4gICAgICAoLT4+ICguLWNoaWxkcmVuIHApXG4gICAgICAgICAgIChyZWFjdC9DaGlsZHJlbi50b0FycmF5KVxuICAgICAgICAgICAoaW50byBbXSkpKSkpXG5cbihkZWZuIF5ib29sZWFuIHJlYWdlbnQtY2xhc3M/IFtjXVxuICAoYW5kIChmbj8gYylcbiAgICAgICAoc29tZT8gKHNvbWUtPiBjICguLXByb3RvdHlwZSkgKC4tcmVhZ2VudFJlbmRlcikpKSkpXG5cbihkZWZuIF5ib29sZWFuIHJlYWN0LWNsYXNzPyBbY11cbiAgKGFuZCAoZm4/IGMpXG4gICAgICAgKHNvbWU/IChzb21lLT4gYyAoLi1wcm90b3R5cGUpICguLXJlbmRlcikpKSkpXG5cbihkZWZuIF5ib29sZWFuIHJlYWdlbnQtY29tcG9uZW50PyBbXmNsaiBjXVxuICAoc29tZT8gKC4tcmVhZ2VudFJlbmRlciBjKSkpXG5cbjs7OyBTdGF0ZVxuXG4oZGVmbiBzdGF0ZS1hdG9tIFteY2xqIHRoaXNdXG4gIChsZXQgW3NhICguLWNsanNTdGF0ZSB0aGlzKV1cbiAgICAoaWYtbm90IChuaWw/IHNhKVxuICAgICAgc2FcbiAgICAgIChzZXQhICguLWNsanNTdGF0ZSB0aGlzKSAocmF0b20vYXRvbSBuaWwpKSkpKVxuXG47OzsgUmVuZGVyaW5nXG5cbihkZWZuIHdyYXAtcmVuZGVyXG4gIFwiQ2FsbHMgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiB0aGUgY29tcG9uZW50IGBjYC4gIElmIHJlc3VsdCBgcmVzYCBldmFsdWF0ZXMgdG8gYTpcbiAgICAgMSkgVmVjdG9yIChmb3JtLTEgY29tcG9uZW50KSAtIFRyZWF0cyB0aGUgdmVjdG9yIGFzIGhpY2N1cCBhbmQgcmV0dXJuc1xuICAgICAgICBhIHJlYWN0IGVsZW1lbnQgd2l0aCBhIHJlbmRlciBmdW5jdGlvbiBiYXNlZCBvbiB0aGF0IGhpY2N1cFxuICAgICAyKSBGdW5jdGlvbiAoZm9ybS0yIGNvbXBvbmVudCkgLSB1cGRhdGVzIHRoZSByZW5kZXIgZnVuY3Rpb24gdG8gYHJlc2AgaS5lLiB0aGUgaW50ZXJuYWwgZnVuY3Rpb25cbiAgICAgICAgYW5kIGNhbGxzIHdyYXAtcmVuZGVyIGFnYWluIChgcmVjdXJgKSwgdW50aWwgdGhlIHJlbmRlciByZXN1bHQgZG9lc24ndCBldmFsdWF0ZSB0byBhIGZ1bmN0aW9uLlxuICAgICAzKSBBbnl0aGluZyBlbHNlIC0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpbmcgYGNgXCJcbiAgW15jbGogYyBjb21waWxlcl1cbiAgKGxldCBbZiAoLi1yZWFnZW50UmVuZGVyIGMpXG4gICAgICAgIF8gKGFzc2VydC1jYWxsYWJsZSBmKVxuICAgICAgICA7OyBjbGpzTGVnYWN5UmVuZGVyIHRlbGxzIGlmIHRoaXMgY2FsbHMgd2FzIGRlZmluZWRcbiAgICAgICAgOzsgdXNpbmcgOnJlbmRlciBpbnN0ZWFkIG9mIDpyZWFnZW50LXJlbmRlclxuICAgICAgICA7OyBpbiB0aGF0IGNhc2UsIHRoZSA6cmVuZGVyIGZuIGlzIGNhbGxlZCB3aXRoIGp1c3QgYHRoaXNgIGFzIGFyZ3VtZW50LlxuICAgICAgICByZXMgKGlmICh0cnVlPyAoLi1jbGpzTGVnYWN5UmVuZGVyIGMpKVxuICAgICAgICAgICAgICAoLmNhbGwgZiBjIGMpXG4gICAgICAgICAgICAgIChsZXQgW3YgKGdldC1hcmd2IGMpXG4gICAgICAgICAgICAgICAgICAgIG4gKGNvdW50IHYpXVxuICAgICAgICAgICAgICAgIChjYXNlIG5cbiAgICAgICAgICAgICAgICAgIDEgKC5jYWxsIGYgYylcbiAgICAgICAgICAgICAgICAgIDIgKC5jYWxsIGYgYyAobnRoIHYgMSkpXG4gICAgICAgICAgICAgICAgICAzICguY2FsbCBmIGMgKG50aCB2IDEpIChudGggdiAyKSlcbiAgICAgICAgICAgICAgICAgIDQgKC5jYWxsIGYgYyAobnRoIHYgMSkgKG50aCB2IDIpIChudGggdiAzKSlcbiAgICAgICAgICAgICAgICAgIDUgKC5jYWxsIGYgYyAobnRoIHYgMSkgKG50aCB2IDIpIChudGggdiAzKSAobnRoIHYgNCkpXG4gICAgICAgICAgICAgICAgICAoLmFwcGx5IGYgYyAoLnNsaWNlIChpbnRvLWFycmF5IHYpIDEpKSkpKV1cbiAgICAoY29uZFxuICAgICAgKHZlY3Rvcj8gcmVzKSAocC9hcy1lbGVtZW50IGNvbXBpbGVyIHJlcylcbiAgICAgIChpZm4/IHJlcykgKGxldCBbZiAoaWYgKHJlYWdlbnQtY2xhc3M/IHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChmbiBbJiBhcmdzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocC9hcy1lbGVtZW50IGNvbXBpbGVyIChhcHBseSB2ZWN0b3IgcmVzIGFyZ3MpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyldXG4gICAgICAgICAgICAgICAgICAgKHNldCEgKC4tcmVhZ2VudFJlbmRlciBjKSBmKVxuICAgICAgICAgICAgICAgICAgIChyZWN1ciBjIGNvbXBpbGVyKSlcbiAgICAgIDplbHNlIHJlcykpKVxuXG4oZGVmbiBjb21wb25lbnQtbmFtZSBbY11cbiAgKG9yIChzb21lLT4gYyAuLWNvbnN0cnVjdG9yIC4tZGlzcGxheU5hbWUpXG4gICAgICAoc29tZS0+IGMgLi1jb25zdHJ1Y3RvciAuLW5hbWUpKSlcblxuKGRlZm4gY29tcC1uYW1lIFtdXG4gIChpZiAoZGV2PylcbiAgICAobGV0IFtjICpjdXJyZW50LWNvbXBvbmVudCpcbiAgICAgICAgICBuIChjb21wb25lbnQtbmFtZSBjKV1cbiAgICAgIChpZi1ub3QgKGVtcHR5PyBuKVxuICAgICAgICAoc3RyIFwiIChpbiBcIiBuIFwiKVwiKVxuICAgICAgICBcIlwiKSlcbiAgICBcIlwiKSlcblxuKGRlZm4gZG8tcmVuZGVyIFtjIGNvbXBpbGVyXVxuICAoYmluZGluZyBbKmN1cnJlbnQtY29tcG9uZW50KiBjXVxuICAgIChpZiAoZGV2PylcbiAgICAgIDs7IExvZyBlcnJvcnMsIHdpdGhvdXQgdXNpbmcgdHJ5L2NhdGNoIChhbmQgbWVzcyB1cCBjYWxsIHN0YWNrKVxuICAgICAgKGxldCBbb2sgKGFycmF5IGZhbHNlKV1cbiAgICAgICAgKHRyeVxuICAgICAgICAgIChsZXQgW3JlcyAod3JhcC1yZW5kZXIgYyBjb21waWxlcildXG4gICAgICAgICAgICAoYXNldCBvayAwIHRydWUpXG4gICAgICAgICAgICByZXMpXG4gICAgICAgICAgKGZpbmFsbHlcbiAgICAgICAgICAgICh3aGVuLW5vdCAoYWdldCBvayAwKVxuICAgICAgICAgICAgICAoZXJyb3IgKHN0ciBcIkVycm9yIHJlbmRlcmluZyBjb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY29tcC1uYW1lKSkpKSkpKVxuICAgICAgKHdyYXAtcmVuZGVyIGMgY29tcGlsZXIpKSkpXG5cblxuOzs7IE1ldGhvZCB3cmFwcGluZ1xuXG4oZGVmIHJhdC1vcHRzIHs6bm8tY2FjaGUgdHJ1ZX0pXG5cbihkZWZuIGN1c3RvbS13cmFwcGVyIFtrZXkgZl1cbiAgKGNhc2Uga2V5XG4gICAgOmdldERlZmF1bHRQcm9wc1xuICAgICh0aHJvdyAoanMvRXJyb3IuIFwiZ2V0RGVmYXVsdFByb3BzIG5vdCBzdXBwb3J0ZWRcIikpXG5cbiAgICA6Z2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgKGZuIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBbcHJvcHMgc3RhdGVdXG4gICAgICA7OyBSZWFkIHByb3BzIGZyb20gUmVhZ2VudCBhcmd2XG4gICAgICAoLmNhbGwgZiBuaWwgKGlmLXNvbWUgW2EgKC4tYXJndiBwcm9wcyldIChleHRyYWN0LXByb3BzIGEpIHByb3BzKSBzdGF0ZSkpXG5cbiAgICA7OyBJbiBFUzYgUmVhY3QsIHRoaXMgaXMgbm93IHBhcnQgb2YgdGhlIGNvbnN0cnVjdG9yXG4gICAgOmdldEluaXRpYWxTdGF0ZVxuICAgIChmbiBnZXRJbml0aWFsU3RhdGUgW2NdXG4gICAgICAocmVzZXQhIChzdGF0ZS1hdG9tIGMpICguY2FsbCBmIGMgYykpKVxuXG4gICAgOmdldFNuYXBzaG90QmVmb3JlVXBkYXRlXG4gICAgKGZuIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlIFtvbGRwcm9wcyBvbGRzdGF0ZV1cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjIChwcm9wcy1hcmd2IGMgb2xkcHJvcHMpIG9sZHN0YXRlKSkpXG5cbiAgICA7OyBEZXByZWNhdGVkIC0gd2FybmluZyBpbiAxNi45IHdpbGwgd29yayB0aHJvdWdoIDE3LnhcbiAgICA6Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1xuICAgIChmbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIFtuZXh0cHJvcHNdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG5leHRwcm9wcykpKSlcblxuICAgIDs7IERlcHJlY2F0ZWQgLSB3aWxsIHdvcmsgaW4gMTcueFxuICAgIDpVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1xuICAgIChmbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIFtuZXh0cHJvcHNdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG5leHRwcm9wcykpKSlcblxuICAgIDpzaG91bGRDb21wb25lbnRVcGRhdGVcbiAgICAoZm4gc2hvdWxkQ29tcG9uZW50VXBkYXRlIFtuZXh0cHJvcHMgbmV4dHN0YXRlXVxuICAgICAgKG9yIHV0aWwvKmFsd2F5cy11cGRhdGUqXG4gICAgICAgICAgKHRoaXMtYXMgY1xuICAgICAgICAgICAgICAgICAgIDs7IERvbid0IGNhcmUgYWJvdXQgbmV4dHN0YXRlIGhlcmUsIHdlIHVzZSBmb3JjZVVwZGF0ZVxuICAgICAgICAgICAgICAgICAgIDs7IHdoZW4gb25seSB3aGVuIHN0YXRlIGhhcyBjaGFuZ2VkIGFueXdheS5cbiAgICAgICAgICAgICAgICAgICAobGV0IFtvbGQtYXJndiAoLi4gYyAtcHJvcHMgLWFyZ3YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmV3LWFyZ3YgKC4tYXJndiBuZXh0cHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9hcmd2IChvciAobmlsPyBvbGQtYXJndikgKG5pbD8gbmV3LWFyZ3YpKV1cbiAgICAgICAgICAgICAgICAgICAgIChjb25kXG4gICAgICAgICAgICAgICAgICAgICAgIChuaWw/IGYpIChvciBub2FyZ3YgKHRyeSAobm90PSBvbGQtYXJndiBuZXctYXJndilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYXRjaCA6ZGVmYXVsdCBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3YXJuIFwiRXhjZXB0aW9uIHRocm93biB3aGlsZSBjb21wYXJpbmcgYXJndidzIGluIHNob3VsZENvbXBvbmVudFVwZGF0ZTogXCIgb2xkLWFyZ3YgXCIgXCIgbmV3LWFyZ3YgXCIgXCIgZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgbm9hcmd2ICguY2FsbCBmIGMgYyAoZ2V0LWFyZ3YgYykgKHByb3BzLWFyZ3YgYyBuZXh0cHJvcHMpKVxuICAgICAgICAgICAgICAgICAgICAgICA6ZWxzZSAgKC5jYWxsIGYgYyBjIG9sZC1hcmd2IG5ldy1hcmd2KSkpKSkpXG5cbiAgICA7OyBEZXByZWNhdGVkIC0gd2FybmluZyBpbiAxNi45IHdpbGwgd29yayB0aHJvdWdoIDE3LnhcbiAgICA6Y29tcG9uZW50V2lsbFVwZGF0ZVxuICAgIChmbiBjb21wb25lbnRXaWxsVXBkYXRlIFtuZXh0cHJvcHMgbmV4dHN0YXRlXVxuICAgICAgKHRoaXMtYXMgYyAoLmNhbGwgZiBjIGMgKHByb3BzLWFyZ3YgYyBuZXh0cHJvcHMpIG5leHRzdGF0ZSkpKVxuXG4gICAgOzsgRGVwcmVjYXRlZCAtIHdpbGwgd29yayBpbiAxNy54XG4gICAgOlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlXG4gICAgKGZuIGNvbXBvbmVudFdpbGxVcGRhdGUgW25leHRwcm9wcyBuZXh0c3RhdGVdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG5leHRwcm9wcykgbmV4dHN0YXRlKSkpXG5cbiAgICA6Y29tcG9uZW50RGlkVXBkYXRlXG4gICAgKGZuIGNvbXBvbmVudERpZFVwZGF0ZSBbb2xkcHJvcHMgb2xkc3RhdGUgc25hcHNob3RdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG9sZHByb3BzKSBvbGRzdGF0ZSBzbmFwc2hvdCkpKVxuXG4gICAgOzsgRGVwcmVjYXRlZCAtIHdhcm5pbmcgaW4gMTYuOSB3aWxsIHdvcmsgdGhyb3VnaCAxNy54XG4gICAgOmNvbXBvbmVudFdpbGxNb3VudFxuICAgIChmbiBjb21wb25lbnRXaWxsTW91bnQgW11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjKSkpXG5cbiAgICA7OyBEZXByZWNhdGVkIC0gd2lsbCB3b3JrIGluIDE3LnhcbiAgICA6VU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudFxuICAgIChmbiBjb21wb25lbnRXaWxsTW91bnQgW11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjKSkpXG5cbiAgICA6Y29tcG9uZW50RGlkTW91bnRcbiAgICAoZm4gY29tcG9uZW50RGlkTW91bnQgW11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjKSkpXG5cbiAgICA6Y29tcG9uZW50V2lsbFVubW91bnRcbiAgICAoZm4gY29tcG9uZW50V2lsbFVubW91bnQgW11cbiAgICAgICh0aGlzLWFzIGNcbiAgICAgICAgICAgICAgIChzb21lLT4gKGdvYmovZ2V0IGMgXCJjbGpzUmF0b21cIikgcmF0b20vZGlzcG9zZSEpXG4gICAgICAgICAgICAgICAoYmF0Y2gvbWFyay1yZW5kZXJlZCBjKVxuICAgICAgICAgICAgICAgKHdoZW4tbm90IChuaWw/IGYpXG4gICAgICAgICAgICAgICAgICguY2FsbCBmIGMgYykpKSlcblxuICAgIDpjb21wb25lbnREaWRDYXRjaFxuICAgIChmbiBjb21wb25lbnREaWRDYXRjaCBbZXJyb3IgaW5mb11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjIGVycm9yIGluZm8pKSlcblxuICAgIG5pbCkpXG5cbihkZWZuIGdldC13cmFwcGVyIFtrZXkgZl1cbiAgKGxldCBbd3JhcCAoY3VzdG9tLXdyYXBwZXIga2V5IGYpXVxuICAgICh3aGVuIChhbmQgd3JhcCBmKVxuICAgICAgKGFzc2VydC1jYWxsYWJsZSBmKSlcbiAgICAob3Igd3JhcCBmKSkpXG5cbjs7IFRob3VnaCB0aGUgdmFsdWUgaXMgbmlsIGhlcmUsIHRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdpbGwgYmVcbjs7IGFkZGVkIHRvIGNsYXNzIHRvIG1hbmFnZSBSZWFnZW50IHJhdG9tIGxpZmVjeWNsZS5cbihkZWYgb2JsaWdhdG9yeSB7OnNob3VsZENvbXBvbmVudFVwZGF0ZSBuaWxcbiAgICAgICAgICAgICAgICAgOmNvbXBvbmVudFdpbGxVbm1vdW50IG5pbH0pXG5cbihkZWYgZGFzaC10by1tZXRob2QtbmFtZSAodXRpbC9tZW1vaXplLTEgdXRpbC9kYXNoLXRvLW1ldGhvZC1uYW1lKSlcblxuKGRlZm4gY2FtZWxpZnktbWFwLWtleXMgW2Z1bi1tYXBdXG4gIChyZWR1Y2Uta3YgKGZuIFttIGsgdl1cbiAgICAgICAgICAgICAgIChhc3NvYyBtICgtPiBrIGRhc2gtdG8tbWV0aG9kLW5hbWUga2V5d29yZCkgdikpXG4gICAgICAgICAgICAge30gZnVuLW1hcCkpXG5cbihkZWZuIGFkZC1vYmxpZ2F0b3J5IFtmdW4tbWFwXVxuICAobWVyZ2Ugb2JsaWdhdG9yeSBmdW4tbWFwKSlcblxuKGRlZm4gd3JhcC1mdW5zIFtmbWFwIGNvbXBpbGVyXVxuICAod2hlbiAoZGV2PylcbiAgICAobGV0IFtyZW5kZXJzIChzZWxlY3Qta2V5cyBmbWFwIFs6cmVuZGVyIDpyZWFnZW50UmVuZGVyXSlcbiAgICAgICAgICByZW5kZXItZnVuICgtPiByZW5kZXJzIHZhbHMgZmlyc3QpXVxuICAgICAgKGFzc2VydCAobm90ICg6Y29tcG9uZW50RnVuY3Rpb24gZm1hcCkpIFwiOmNvbXBvbmVudC1mdW5jdGlvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkLCB1c2UgOnJlYWdlbnQtcmVuZGVyIGluc3RlYWQuXCIpXG4gICAgICAoYXNzZXJ0IChwb3M/IChjb3VudCByZW5kZXJzKSkgXCJNaXNzaW5nIHJlYWdlbnQtcmVuZGVyXCIpXG4gICAgICAoYXNzZXJ0ICg9PSAxIChjb3VudCByZW5kZXJzKSkgXCJUb28gbWFueSByZW5kZXIgZnVuY3Rpb25zIHN1cHBsaWVkXCIpXG4gICAgICAoYXNzZXJ0LWNhbGxhYmxlIHJlbmRlci1mdW4pKSlcbiAgKGxldCBbcmVuZGVyLWZ1biAob3IgKDpyZWFnZW50UmVuZGVyIGZtYXApXG4gICAgICAgICAgICAgICAgICAgICAgICg6cmVuZGVyIGZtYXApKVxuICAgICAgICBsZWdhY3ktcmVuZGVyIChuaWw/ICg6cmVhZ2VudFJlbmRlciBmbWFwKSlcbiAgICAgICAgbmFtZSAob3IgKDpkaXNwbGF5TmFtZSBmbWFwKVxuICAgICAgICAgICAgICAgICAodXRpbC9mdW4tbmFtZSByZW5kZXItZnVuKVxuICAgICAgICAgICAgICAgICAoc3RyIChnZW5zeW0gXCJyZWFnZW50XCIpKSlcbiAgICAgICAgZm1hcCAocmVkdWNlLWt2IChmbiBbbSBrIHZdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhc3NvYyBtIGsgKGdldC13cmFwcGVyIGsgdikpKVxuICAgICAgICAgICAgICAgICAgICAgICAge30gZm1hcCldXG4gICAgKGFzc29jIGZtYXBcbiAgICAgICAgICAgOmRpc3BsYXlOYW1lIG5hbWVcbiAgICAgICAgICAgOmNsanNMZWdhY3lSZW5kZXIgbGVnYWN5LXJlbmRlclxuICAgICAgICAgICA6cmVhZ2VudFJlbmRlciByZW5kZXItZnVuXG4gICAgICAgICAgIDpyZW5kZXIgKGZuIHJlbmRlciBbXVxuICAgICAgICAgICAgICAgICAgICAgKHRoaXMtYXMgYyAoaWYgdXRpbC8qbm9uLXJlYWN0aXZlKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkby1yZW5kZXIgYyBjb21waWxlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGV0IFteY2xqIHJhdCAoZ29iai9nZXQgYyBcImNsanNSYXRvbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChiYXRjaC9tYXJrLXJlbmRlcmVkIGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgKG5pbD8gcmF0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmF0b20vcnVuLWluLXJlYWN0aW9uICMoZG8tcmVuZGVyIGMgY29tcGlsZXIpIGMgXCJjbGpzUmF0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoL3F1ZXVlLXJlbmRlciByYXQtb3B0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKC5fcnVuIHJhdCBmYWxzZSkpKSkpKSkpKVxuXG4oZGVmbiBtYXAtdG8tanMgW21dXG4gIChyZWR1Y2Uta3YgKGZuIFtvIGsgdl1cbiAgICAgICAgICAgICAgIChkb3RvIG9cbiAgICAgICAgICAgICAgICAgKGdvYmovc2V0IChuYW1lIGspIHYpKSlcbiAgICAgICAgICAgICAjanN7fSBtKSlcblxuKGRlZm4gY2xqc2lmeSBbYm9keSBjb21waWxlcl1cbiAgKC0+IGJvZHlcbiAgICAgIGNhbWVsaWZ5LW1hcC1rZXlzXG4gICAgICBhZGQtb2JsaWdhdG9yeVxuICAgICAgKHdyYXAtZnVucyBjb21waWxlcikpKVxuXG47OyBJZGVhIGZyb206XG47OyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wZXN0ZXJoYXp5LzJhMjVjODJkYjA1MTlhMjhlNDE1YjQwNDgxZjg0NTU0XG47OyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS90aGhlbGxlci83ZjUzMGIzNGRlMWM0NDU4OWY0ZTA2NzFlMWVmNzUzMyNmaWxlLWVzNi1jbGFzcy1jbGpzLUwxOFxuXG4oZGVmIGJ1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXNcbiAgWzpjaGlsZENvbnRleHRUeXBlcyA6Y29udGV4dFR5cGVzIDpjb250ZXh0VHlwZVxuICAgOmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA6Z2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yXSlcblxuKGRlZm4gY3JlYXRlLWNsYXNzXG4gIFwiQ3JlYXRlcyBKUyBjbGFzcyBiYXNlZCBvbiBwcm92aWRlZCBDbG9qdXJlIG1hcC5cblxuICBNYXAga2V5cyBzaG91bGQgdXNlIGBSZWFjdC5Db21wb25lbnRgIG1ldGhvZCBuYW1lcyAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWNvbXBvbmVudC5odG1sKSxcbiAgYW5kIGNhbiBiZSBwcm92aWRlZCBpbiBzbmFrZS1jYXNlIG9yIGNhbWVsQ2FzZS5cbiAgQ29uc3RydWN0b3IgZnVuY3Rpb24gaXMgZGVmaW5lZCB1c2luZyBrZXkgYDpnZXRJbml0aWFsU3RhdGVgLlxuXG4gIFJlYWN0IGJ1aWx0LWluIHN0YXRpYyBtZXRob2RzIG9yIHByb3BlcnRpZXMgYXJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCBhcyBzdGF0aWNzLlwiXG4gIFtib2R5IGNvbXBpbGVyXVxuICB7OnByZSBbKG1hcD8gYm9keSldfVxuICAobGV0IFtib2R5IChjbGpzaWZ5IGJvZHkgY29tcGlsZXIpXG4gICAgICAgIG1ldGhvZHMgKG1hcC10by1qcyAoYXBwbHkgZGlzc29jIGJvZHkgOmRpc3BsYXlOYW1lIDpnZXRJbml0aWFsU3RhdGUgOmNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlbmRlciA6cmVhZ2VudFJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXMpKVxuICAgICAgICBzdGF0aWMtbWV0aG9kcyAobWFwLXRvLWpzIChzZWxlY3Qta2V5cyBib2R5IGJ1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXMpKVxuICAgICAgICBkaXNwbGF5LW5hbWUgKDpkaXNwbGF5TmFtZSBib2R5KVxuICAgICAgICBnZXQtaW5pdGlhbC1zdGF0ZSAoOmdldEluaXRpYWxTdGF0ZSBib2R5KVxuICAgICAgICBjb25zdHJ1Y3QgKDpjb25zdHJ1Y3RvciBib2R5KVxuICAgICAgICBjbXAgKGZuIFtwcm9wcyBjb250ZXh0IHVwZGF0ZXJdXG4gICAgICAgICAgICAgICh0aGlzLWFzIHRoaXNcbiAgICAgICAgICAgICAgICAoLmNhbGwgcmVhY3QvQ29tcG9uZW50IHRoaXMgcHJvcHMgY29udGV4dCB1cGRhdGVyKVxuICAgICAgICAgICAgICAgICh3aGVuIGNvbnN0cnVjdFxuICAgICAgICAgICAgICAgICAgKGNvbnN0cnVjdCB0aGlzIHByb3BzKSlcbiAgICAgICAgICAgICAgICAod2hlbiBnZXQtaW5pdGlhbC1zdGF0ZVxuICAgICAgICAgICAgICAgICAgKHNldCEgKC4tc3RhdGUgdGhpcykgKGdldC1pbml0aWFsLXN0YXRlIHRoaXMpKSlcbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1jbGpzTW91bnRPcmRlciBeY2xqIHRoaXMpIChiYXRjaC9uZXh0LW1vdW50LWNvdW50KSlcbiAgICAgICAgICAgICAgICB0aGlzKSldXG5cbiAgICAoZ29iai9leHRlbmQgKC4tcHJvdG90eXBlIGNtcCkgKC4tcHJvdG90eXBlIHJlYWN0L0NvbXBvbmVudCkgbWV0aG9kcylcblxuICAgIDs7IFRoZXNlIG5hbWVzIFNIT1VMRCBiZSBtYW5nbGVkIGJ5IENsb3N1cmUgc28gd2UgY2FuJ3QgdXNlIGdvb2cvZXh0ZW5kXG5cbiAgICAod2hlbiAoOnJlbmRlciBib2R5KVxuICAgICAgKHNldCEgKC4tcmVuZGVyIF5qcyAoLi1wcm90b3R5cGUgY21wKSkgKDpyZW5kZXIgYm9keSkpKVxuXG4gICAgKHdoZW4gKDpyZWFnZW50UmVuZGVyIGJvZHkpXG4gICAgICAoc2V0ISAoLi1yZWFnZW50UmVuZGVyIF5jbGogKC4tcHJvdG90eXBlIGNtcCkpICg6cmVhZ2VudFJlbmRlciBib2R5KSkpXG5cbiAgICAod2hlbiAoOmNsanNMZWdhY3lSZW5kZXIgYm9keSlcbiAgICAgIChzZXQhICguLWNsanNMZWdhY3lSZW5kZXIgXmNsaiAoLi1wcm90b3R5cGUgY21wKSkgKDpjbGpzTGVnYWN5UmVuZGVyIGJvZHkpKSlcblxuICAgIChnb2JqL2V4dGVuZCBjbXAgcmVhY3QvQ29tcG9uZW50IHN0YXRpYy1tZXRob2RzKVxuXG4gICAgKHdoZW4gZGlzcGxheS1uYW1lXG4gICAgICAoc2V0ISAoLi1kaXNwbGF5TmFtZSBjbXApIGRpc3BsYXktbmFtZSlcbiAgICAgIChzZXQhICguLWNsanMkbGFuZyRjdG9yU3RyIGNtcCkgZGlzcGxheS1uYW1lKVxuICAgICAgKHNldCEgKC4tY2xqcyRsYW5nJGN0b3JQcldyaXRlciBjbXApXG4gICAgICAgICAgICAoZm4gW3RoaXMgd3JpdGVyIG9wdF1cbiAgICAgICAgICAgICAgKGNsanMuY29yZS8td3JpdGUgd3JpdGVyIGRpc3BsYXktbmFtZSkpKSlcblxuICAgIChzZXQhICguLWNsanMkbGFuZyR0eXBlIGNtcCkgdHJ1ZSlcbiAgICAoc2V0ISAoLi4gY21wIC1wcm90b3R5cGUgLWNvbnN0cnVjdG9yKSBjbXApXG5cbiAgICBjbXApKVxuXG47OyBDYWNoZSByZXN1bHQgdG8gdGhlIHRhZyBidXQgcGVyIGNvbXBpbGVyIElEXG47OyBUT0RPOiBHZW5lcmF0ZSBjYWNoZSAmIGdldCBtZXRob2RzIHRvIHRoZSBPYmplY3QgdXNpbmcgbWFjcm8sXG47OyBjYW4gZ2VuZXJhdGUgY29kZSBjYWxsaW5nIGludGVyb3AgZm9ybXMuXG4oZGVmbiBjYWNoZWQtcmVhY3QtY2xhc3MgW2NvbXBpbGVyIF5jbGogY11cbiAgKGdvYmovZ2V0IGMgKHAvZ2V0LWlkIGNvbXBpbGVyKSkpXG5cbihkZWZuIGNhY2hlLXJlYWN0LWNsYXNzIFtjb21waWxlciBeY2xqIGMgY29uc3RydWN0b3JdXG4gIChnb2JqL3NldCBjIChwL2dldC1pZCBjb21waWxlcikgY29uc3RydWN0b3IpXG4gIGNvbnN0cnVjdG9yKVxuXG4oZGVmbiBmbi10by1jbGFzcyBbY29tcGlsZXIgZl1cbiAgKGFzc2VydC1jYWxsYWJsZSBmKVxuICAod2Fybi11bmxlc3MgKG5vdCAoYW5kIChyZWFjdC1jbGFzcz8gZilcbiAgICAgICAgICAgICAgICAgICAgICAgICAobm90IChyZWFnZW50LWNsYXNzPyBmKSkpKVxuICAgICAgICAgICAgICAgXCJVc2luZyBuYXRpdmUgUmVhY3QgY2xhc3NlcyBkaXJlY3RseSBpbiBIaWNjdXAgZm9ybXMgXCJcbiAgICAgICAgICAgICAgIFwiaXMgbm90IHN1cHBvcnRlZC4gVXNlIGNyZWF0ZS1lbGVtZW50IG9yIFwiXG4gICAgICAgICAgICAgICBcImFkYXB0LXJlYWN0LWNsYXNzIGluc3RlYWQ6IFwiIChvciAodXRpbC9mdW4tbmFtZSBmKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYpXG4gICAgICAgICAgICAgICAoY29tcC1uYW1lKSlcbiAgKGlmIChyZWFnZW50LWNsYXNzPyBmKVxuICAgIChjYWNoZS1yZWFjdC1jbGFzcyBjb21waWxlciBmIGYpXG4gICAgKGxldCBbc3BlYyAobWV0YSBmKVxuICAgICAgICAgIHdpdGhyZW5kZXIgKGFzc29jIHNwZWMgOnJlYWdlbnQtcmVuZGVyIGYpXG4gICAgICAgICAgcmVzIChjcmVhdGUtY2xhc3Mgd2l0aHJlbmRlciBjb21waWxlcildXG4gICAgICAoY2FjaGUtcmVhY3QtY2xhc3MgY29tcGlsZXIgZiByZXMpKSkpXG5cbihkZWZuIGFzLWNsYXNzIFt0YWcgY29tcGlsZXJdXG4gIChpZi1zb21lIFtjYWNoZWQtY2xhc3MgKGNhY2hlZC1yZWFjdC1jbGFzcyBjb21waWxlciB0YWcpXVxuICAgIGNhY2hlZC1jbGFzc1xuICAgIChmbi10by1jbGFzcyBjb21waWxlciB0YWcpKSlcblxuKGRlZm4gcmVhY3RpZnktY29tcG9uZW50IFtjb21wIGNvbXBpbGVyXVxuICAoaWYgKHJlYWN0LWNsYXNzPyBjb21wKVxuICAgIGNvbXBcbiAgICAoYXMtY2xhc3MgY29tcCBjb21waWxlcikpKVxuXG4oZGVmbiBmdW5jdGlvbmFsLXdyYXAtcmVuZGVyXG4gIFtjb21waWxlciBjXVxuICAobGV0IFtmICguLXJlYWdlbnRSZW5kZXIgYylcbiAgICAgICAgXyAoYXNzZXJ0LWNhbGxhYmxlIGYpXG4gICAgICAgIGFyZ3YgKC4tYXJndiBjKVxuICAgICAgICByZXMgKGFwcGx5IGYgYXJndildXG4gICAgKGNvbmRcbiAgICAgICh2ZWN0b3I/IHJlcykgKHAvYXMtZWxlbWVudCBjb21waWxlciByZXMpXG4gICAgICAoaWZuPyByZXMpIChsZXQgW2YgKGlmIChyZWFnZW50LWNsYXNzPyByZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZm4gWyYgYXJnc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHAvYXMtZWxlbWVudCBjb21waWxlciAoYXBwbHkgdmVjdG9yIHJlcyBhcmdzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXMpXVxuICAgICAgICAgICAgICAgICAgIChzZXQhICguLXJlYWdlbnRSZW5kZXIgYykgZilcbiAgICAgICAgICAgICAgICAgICAocmVjdXIgY29tcGlsZXIgYykpXG4gICAgICA6ZWxzZSByZXMpKSlcblxuKGRlZm4gZnVuY3Rpb25hbC1kby1yZW5kZXIgW2NvbXBpbGVyIGNdXG4gIChiaW5kaW5nIFsqY3VycmVudC1jb21wb25lbnQqIGNdXG4gICAgKGlmIChkZXY/KVxuICAgICAgOzsgTG9nIGVycm9ycywgd2l0aG91dCB1c2luZyB0cnkvY2F0Y2ggKGFuZCBtZXNzIHVwIGNhbGwgc3RhY2spXG4gICAgICAobGV0IFtvayAoYXJyYXkgZmFsc2UpXVxuICAgICAgICAodHJ5XG4gICAgICAgICAgKGxldCBbcmVzIChmdW5jdGlvbmFsLXdyYXAtcmVuZGVyIGNvbXBpbGVyIGMpXVxuICAgICAgICAgICAgKGFzZXQgb2sgMCB0cnVlKVxuICAgICAgICAgICAgcmVzKVxuICAgICAgICAgIChmaW5hbGx5XG4gICAgICAgICAgICAod2hlbi1ub3QgKGFnZXQgb2sgMClcbiAgICAgICAgICAgICAgKGVycm9yIChzdHIgXCJFcnJvciByZW5kZXJpbmcgY29tcG9uZW50XCIgKGNvbXAtbmFtZSkpKSkpKSlcbiAgICAgIChmdW5jdGlvbmFsLXdyYXAtcmVuZGVyIGNvbXBpbGVyIGMpKSkpXG5cbihkZWZuIGZ1bmN0aW9uYWwtcmVuZGVyIFtjb21waWxlciBqc3Byb3BzXVxuICAoaWYgdXRpbC8qbm9uLXJlYWN0aXZlKlxuICAgIDs7IE5vbi1yZWFjdGl2ZSBjb21wb25lbnQgbmVlZHMganVzdCB0aGUgcmVuZGVyIGZuIGFuZCBhcmd2XG4gICAgKGZ1bmN0aW9uYWwtZG8tcmVuZGVyIGNvbXBpbGVyIGpzcHJvcHMpXG4gICAgKGxldCBbYXJndiAoLi1hcmd2IGpzcHJvcHMpXG4gICAgICAgICAgdGFnICguLXJlYWdlbnRSZW5kZXIganNwcm9wcylcblxuICAgICAgICAgIDs7IFVzZSBjb3VudGVyIHRvIHRyaWdnZXIgcmVuZGVyIG1hbnVhbGx5LlxuICAgICAgICAgIFtfIHVwZGF0ZS1jb3VudF0gKHJlYWN0L3VzZVN0YXRlIDApXG5cbiAgICAgICAgICA7OyBUaGlzIG9iamVjdCBtaW1pY3MgUmVhY3QgQ2xhc3MgYXR0cmlidXRlcyBhbmQgbWV0aG9kcy5cbiAgICAgICAgICA7OyBUbyBzdXBwb3J0IGZvcm0tMiBjb21wb25lbnRzLCBldmVuIHRoZSByZW5kZXIgZm4gbmVlZHMgdG9cbiAgICAgICAgICA7OyBiZSBzdG9yZWQgYXMgaXQgaXMgY3JlYXRlZCBkdXJpbmcgdGhlIGZpcnN0IHJlbmRlcixcbiAgICAgICAgICA7OyBhbmQgc3Vic2VxdWVudCByZW5kZXJzIG5lZWQgdG8gcmV0cmlldmUgdGhlIGNyZWF0ZWQgZm4uXG4gICAgICAgICAgc3RhdGUtcmVmIChyZWFjdC91c2VSZWYpXG5cbiAgICAgICAgICBfICh3aGVuLW5vdCAoLi1jdXJyZW50IHN0YXRlLXJlZilcbiAgICAgICAgICAgICAgKGxldCBbb2JqICNqcyB7fV1cbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1mb3JjZVVwZGF0ZSBvYmopIChmbiBbXSAodXBkYXRlLWNvdW50IGluYykpKVxuICAgICAgICAgICAgICAgIChzZXQhICguLWNsanNNb3VudE9yZGVyIG9iaikgKGJhdGNoL25leHQtbW91bnQtY291bnQpKVxuICAgICAgICAgICAgICAgIDs7IFVzZSByZWFnZW50UmVuZGVyIG5hbWUsIGFzIHRoYXQgaXMgYWxzbyB1c2VkXG4gICAgICAgICAgICAgICAgOzsgYnkgY2xhc3MgY29tcG9uZW50cywgYW5kIHNvbWUgY2hlY2tzLlxuICAgICAgICAgICAgICAgIDs7IHJlYWdlbnRSZW5kZXIgaXMgcmVwbGFjZWQgd2l0aCBmb3JtLTIgaW5uZXIgZm4sXG4gICAgICAgICAgICAgICAgOzsgY29uc3RydWN0b3IgcmVmZXJzIHRvIHRoZSBvcmlnaW5hbCBmbi5cbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1jb25zdHJ1Y3RvciBvYmopIHRhZylcbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1yZWFnZW50UmVuZGVyIG9iaikgdGFnKVxuXG4gICAgICAgICAgICAgICAgKHNldCEgKC4tY3VycmVudCBzdGF0ZS1yZWYpIG9iaikpKVxuXG4gICAgICAgICAgcmVhZ2VudC1zdGF0ZSAoLi1jdXJyZW50IHN0YXRlLXJlZilcblxuICAgICAgICAgIDs7IEZJWE1FOiBBY2Nlc3MgY2xqc1JhdG9tIHVzaW5nIGludGVyb3AgZm9ybXNcbiAgICAgICAgICByYXQgKGdvYmovZ2V0IHJlYWdlbnQtc3RhdGUgXCJjbGpzUmF0b21cIildXG5cbiAgICAgIChyZWFjdC91c2VFZmZlY3RcbiAgICAgICAgKGZuIG1vdW50IFtdXG4gICAgICAgICAgKGZuIHVubW91bnQgW11cbiAgICAgICAgICAgIChzb21lLT4gKGdvYmovZ2V0IHJlYWdlbnQtc3RhdGUgXCJjbGpzUmF0b21cIikgcmF0b20vZGlzcG9zZSEpKSlcbiAgICAgICAgOzsgSWdub3JlIHByb3BzIC0gb25seSBydW4gZWZmZWN0IG9uY2Ugb24gbW91bnQgYW5kIHVubW91bnRcbiAgICAgICAgI2pzIFtdKVxuXG4gICAgICA7OyBBcmd2IGlzIGFsc28gc3RvcmVkIGluIHRoZSBzdGF0ZSxcbiAgICAgIDs7IHNvIHJlYWN0aW9uIGZuIHdpbGwgYWx3YXlzIHNlZSB0aGUgbGF0ZXN0IHZhbHVlLlxuICAgICAgKHNldCEgKC4tYXJndiByZWFnZW50LXN0YXRlKSBhcmd2KVxuXG4gICAgICAoYmF0Y2gvbWFyay1yZW5kZXJlZCByZWFnZW50LXN0YXRlKVxuXG4gICAgICA7OyBzdGF0aWMtZm5zIDpyZW5kZXJcbiAgICAgIChpZiAobmlsPyByYXQpXG4gICAgICAgIChyYXRvbS9ydW4taW4tcmVhY3Rpb25cbiAgICAgICAgICA7OyBNb2NrIENsYXNzIGNvbXBvbmVudCBBUElcbiAgICAgICAgICAjKGZ1bmN0aW9uYWwtZG8tcmVuZGVyIGNvbXBpbGVyIHJlYWdlbnQtc3RhdGUpXG4gICAgICAgICAgcmVhZ2VudC1zdGF0ZVxuICAgICAgICAgIFwiY2xqc1JhdG9tXCJcbiAgICAgICAgICBiYXRjaC9xdWV1ZS1yZW5kZXJcbiAgICAgICAgICByYXQtb3B0cylcbiAgICAgICAgOzsgVE9ETzogQ29uc2lkZXIgcGFzc2luZyBwcm9wcyBoZXJlLCBpbnN0ZWFkIG9mIGtlZXBpbmcgdGhlbSBpbiBzdGF0ZT9cbiAgICAgICAgKC5fcnVuIHJhdCBmYWxzZSkpKSkpXG5cbihkZWZuIGZ1bmN0aW9uYWwtcmVuZGVyLW1lbW8tZm5cbiAgW3ByZXYtcHJvcHMgbmV4dC1wcm9wc11cbiAgKGxldCBbb2xkLWFyZ3YgKC4tYXJndiBwcmV2LXByb3BzKVxuICAgICAgICBuZXctYXJndiAoLi1hcmd2IG5leHQtcHJvcHMpXVxuICAgIChhbmQgKGZhbHNlPyB1dGlsLyphbHdheXMtdXBkYXRlKilcbiAgICAgICAgICh0cnlcbiAgICAgICAgICAgKD0gb2xkLWFyZ3YgbmV3LWFyZ3YpXG4gICAgICAgICAgIChjYXRjaCA6ZGVmYXVsdCBlXG4gICAgICAgICAgICAgKHdhcm4gXCJFeGNlcHRpb24gdGhyb3duIHdoaWxlIGNvbXBhcmluZyBhcmd2J3MgaW4gc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBcIiBvbGQtYXJndiBcIiBcIiBuZXctYXJndiBcIiBcIiBlKVxuICAgICAgICAgICAgIGZhbHNlKSkpKSlcblxuKGRlZm4gZnVuY3Rpb25hbC1yZW5kZXItZm5cbiAgXCJDcmVhdGUgY29weSBvZiBmdW5jdGlvbmFsLXJlbmRlciB3aXRoIGRpc3BsYXlOYW1lIHNldCB0byBuYW1lIG9mIHRoZVxuICBvcmlnaW5hbCBSZWFnZW50IGNvbXBvbmVudC5cIlxuICBbY29tcGlsZXIgdGFnXVxuICA7OyBUT0RPOiBDb3VsZCBiZSBkaXNhYmxlZCBmb3Igb3B0aW1pemVkIGJ1aWxkcz9cbiAgOzsgT3Igbm90IGN1cnJlbnRseSAtIHRoZSBtZW1vIHdyYXAgaXMgcmVxdWlyZWQuXG4gIChvciAoY2FjaGVkLXJlYWN0LWNsYXNzIGNvbXBpbGVyIHRhZylcbiAgICAgIChsZXQgW2YgKGZuIFtqc3Byb3BzXSAoZnVuY3Rpb25hbC1yZW5kZXIgY29tcGlsZXIganNwcm9wcykpXG4gICAgICAgICAgICBfIChzZXQhICguLWRpc3BsYXlOYW1lIGYpICh1dGlsL2Z1bi1uYW1lIHRhZykpXG4gICAgICAgICAgICBmIChyZWFjdC9tZW1vIGYgZnVuY3Rpb25hbC1yZW5kZXItbWVtby1mbildXG4gICAgICAgIChjYWNoZS1yZWFjdC1jbGFzcyBjb21waWxlciB0YWcgZilcbiAgICAgICAgZikpKVxuIl19