// Compiled by ClojureScript 1.10.597
goog.provide("reagent.impl.component");
reagent.impl.component.global$module$react = goog.global["React"];
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
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,reagent.impl.component.global$module$react.Children.toArray(p.children));
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
reagent.impl.component.global$module$react.Component.call(this$,props,context,updater);

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
goog.object.extend(cmp.prototype,reagent.impl.component.global$module$react.Component.prototype,methods$);

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

goog.object.extend(cmp,reagent.impl.component.global$module$react.Component,static_methods);

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
var vec__346 = reagent.impl.component.global$module$react.useState((0));
var _ = cljs.core.nth.call(null,vec__346,(0),null);
var update_count = cljs.core.nth.call(null,vec__346,(1),null);
var state_ref = reagent.impl.component.global$module$react.useRef();
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
reagent.impl.component.global$module$react.useEffect((function reagent$impl$component$functional_render_$_mount(){
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
var f__$1 = reagent.impl.component.global$module$react.memo(f,reagent.impl.component.functional_render_memo_fn);
reagent.impl.component.cache_react_class.call(null,compiler,tag,f__$1);

return f__$1;
}
});

//# sourceURL=reagent/impl/component.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9pbXBsL2NvbXBvbmVudC5qcyIsInNvdXJjZXMiOlsiY29tcG9uZW50LmNsanMiXSwibGluZUNvdW50Ijo3NjYsIm1hcHBpbmdzIjoiO0FBU0EsQUFBQSxBQUtBLHVDQUFBLHZDQUFNQSxzRkFBZUM7QUFBckIsQUFDRSxJQUFNQyxJQUFFLDBCQUFBLElBQUEsOUJBQUNDLHdCQUFJRjtBQUFiLEFBQ0UsR0FBSSxBQUFDRywrQkFBS0Y7QUFBR0E7O0FBQWI7OztBQUVKLDBDQUFBLDFDQUFNRyw0RkFBa0JKO0FBQXhCLEFBQ0UsSUFBTUMsSUFBRSwwQkFBQSxJQUFBLDlCQUFDQyx3QkFBSUY7SUFDUEssY0FBWSwwREFBQSxJQUFBLDVEQUFJLEVBQUksTUFBQSxMQUFNSixnQkFBRyxBQUFDRSwrQkFBS0Y7QUFEekMsQUFFRSxHQUFJLENBQUcsQUFBQ0ssMEJBQU1OLEtBQUdLO0FBQ2YsT0FBQ0UsMkJBQU9QLEVBQUVLOztBQURaOzs7QUFHSixvQ0FBQSxwQ0FBTUcsZ0ZBQWdDQyxFQUFFUjtBQUF4QyxBQUNFLElBQUFTLHFCQUFZLEFBQVFUO0FBQXBCLEFBQUEsR0FBQSxDQUFBUyxzQkFBQTtBQUFBLDBGQUVHLEFBQWVELGNBQUcsQUFBQ0csK0NBQXdCWDs7QUFGOUMsUUFBQVMsSkFBVUM7QUFBVixBQUNFQTs7O0FBR0osa0NBQUEsbENBQU1FLDRFQUE4Qko7QUFBcEMsQUFDRSxPQUFDRCw0Q0FBV0MsRUFBRSxBQUFTQTs7QUFFekIsbUNBQUEsbkNBQU1LLDhFQUErQkw7QUFBckMsQUFDRSxJQUFNUixJQUFFLEFBQVNRO0FBQWpCLEFBQ0UsSUFBQUMscUJBQVksQUFBUVQ7QUFBcEIsQUFBQSxHQUFBLENBQUFTLHNCQUFBO0FBRUUsT0FBQ0UsK0NBQXdCWDs7QUFGM0IsUUFBQVMsSkFBVVY7QUFBVixBQUNFLE9BQUNELCtDQUFjQzs7O0FBR3JCLHNDQUFBLHRDQUFNZSxvRkFBa0NOO0FBQXhDLEFBQ0UsSUFBTVIsSUFBRSxBQUFTUTtBQUFqQixBQUNFLElB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QUFBLFBBQU10RDtBQUNSLCtDQUFBLHhDQUFDQztBQUFELEFBRUcsT0FBQ3lDLHNEQUFxQjdILFNBQVN5STtpQkFGbEMsZEFHRUEsMEJBRUFwRCxtQ0FDQXpEOztBQUVGLGdCQUFBLFRBQU91RDs7OztBQUVmLG1EQUFBLG5EQUFNeUQsOEdBQ0hDLFdBQVdDO0FBRGQsQUFFRSxJQUFNckcsV0FBUyxBQUFRb0c7SUFDakJuRyxXQUFTLEFBQVFvRztBQUR2QixBQUVFLEdBQUssQUFBUXRHO0FBQ1IsSUFBQSxBQUNFLE9BQUN3Ryx5QkFBRXZHLFNBQVNDO2NBRGQsUUFBQXFHLEpBRWtCakc7QUFGbEIsQUFHSSxvQkFBQSxBQUFBcEI7QUFBQSxBQUFBLEFBQUEsa0JBQUEsQUFBQUEsd0JBQUEsQUFBQUEsNEJBQUFDLGNBQUEsQ0FBQSxZQUFBLDJIQUFBLDBEQUFBLHBFQUEyRWMsMERBQWFDLDBEQUFhSTs7QUFBckc7O0FBSEo7O0FBREw7OztBQU9KOzs7OzhDQUFBLDlDQUFNbUcsb0dBR0hqSixTQUFTdUg7QUFIWixBQU1FLElBQUF2RyxvQkFBSSxBQUFDOEYsb0RBQW1COUcsU0FBU3VIO0FBQWpDLEFBQUEsb0JBQUF2RztBQUFBQTs7QUFDSSxJQUFNZixJQUFFLFdBQUtnSTtBQUFMLEFBQWMsT0FBQ0QsbURBQWtCaEksU0FBU2lJOztJQUM1Qy9ILElBQUUsQ0FBTSxBQUFlRCxnQkFBRyxBQUFDK0UscUNBQWN1QztJQUN6Q3RILFFBQUUsQUFBQ2lKLGdEQUFXakosRUFBRTJJO0FBRnRCLEFBR0UsQUFBQzVCLG1EQUFrQmhILFNBQVN1SCxJQUFJdEg7O0FBQ2hDQSIsIm5hbWVzIjpbInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZXh0cmFjdC1wcm9wcyIsInYiLCJwIiwiY2xqcy5jb3JlL250aCIsImNsanMuY29yZS9tYXA/IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9leHRyYWN0LWNoaWxkcmVuIiwiZmlyc3QtY2hpbGQiLCJjbGpzLmNvcmUvY291bnQiLCJjbGpzLmNvcmUvc3VidmVjIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9wcm9wcy1hcmd2IiwiYyIsInRlbXBfXzk3MTRfX2F1dG9fXyIsImEiLCJyZWFnZW50LmltcGwudXRpbC9zaGFsbG93LW9iai10by1tYXAiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC1hcmd2IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9nZXQtcHJvcHMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC1jaGlsZHJlbiIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZ2xvYmFsJG1vZHVsZSRyZWFjdC5DaGlsZHJlbi50b0FycmF5IiwiY2xqcy5jb3JlL2ludG8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3JlYWdlbnQtY2xhc3M/IiwiY2xqcy5jb3JlL2ZuPyIsIkdfXzMxNSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmVhY3QtY2xhc3M/IiwiR19fMzE3IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yZWFnZW50LWNvbXBvbmVudD8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3N0YXRlLWF0b20iLCJ0aGlzIiwic2EiLCJyZWFnZW50LnJhdG9tL2F0b20iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3dyYXAtcmVuZGVyIiwiY29tcGlsZXIiLCJmIiwiXyIsImNsanMuY29yZS9pZm4/IiwianMvRXJyb3IiLCJjbGpzLmNvcmUvcHItc3RyIiwicmVzIiwibiIsIkdfXzMxOCIsImNsanMuY29yZS9pbnRvLWFycmF5IiwiY2xqcy5jb3JlL3ZlY3Rvcj8iLCJyZWFnZW50LmltcGwucHJvdG9jb2xzL2FzLWVsZW1lbnQiLCJhcmdzIiwiY2xqcy5jb3JlL2FwcGx5IiwiY2xqcy5jb3JlL3ZlY3RvciIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY29tcG9uZW50LW5hbWUiLCJvcl9fMTAxMTZfX2F1dG9fXyIsIkdfXzMyNiIsIkdfXzMyNyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY29tcC1uYW1lIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC8qY3VycmVudC1jb21wb25lbnQqIiwiY2xqcy5jb3JlL2VtcHR5PyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZG8tcmVuZGVyIiwiKmN1cnJlbnQtY29tcG9uZW50Ki1vcmlnLXZhbF9fMzI4IiwiKmN1cnJlbnQtY29tcG9uZW50Ki10ZW1wLXZhbF9fMzI5Iiwib2siLCJyZWFnZW50L2RlYnVnIiwianMvY29uc29sZSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmF0LW9wdHMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2N1c3RvbS13cmFwcGVyIiwia2V5IiwiR19fMzMwIiwiY2xqcy5jb3JlL0tleXdvcmQiLCJwcm9wcyIsInN0YXRlIiwiY2xqcy5jb3JlL3Jlc2V0ISIsIm9sZHByb3BzIiwib2xkc3RhdGUiLCJuZXh0cHJvcHMiLCJuZXh0c3RhdGUiLCJyZWFnZW50LmltcGwudXRpbC8qYWx3YXlzLXVwZGF0ZSoiLCJvbGQtYXJndiIsIm5ldy1hcmd2Iiwibm9hcmd2IiwiZTMzMiIsImNsanMuY29yZS9ub3Q9IiwiZSIsInNuYXBzaG90IiwiR19fMzMzIiwiZ29vZy5vYmplY3QvZ2V0IiwicmVhZ2VudC5yYXRvbS9kaXNwb3NlISIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9tYXJrLXJlbmRlcmVkIiwiZXJyb3IiLCJpbmZvIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9nZXQtd3JhcHBlciIsIndyYXAiLCJhbmRfXzEwMDkxX19hdXRvX18iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L29ibGlnYXRvcnkiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2Rhc2gtdG8tbWV0aG9kLW5hbWUiLCJyZWFnZW50LmltcGwudXRpbC9tZW1vaXplLTEiLCJyZWFnZW50LmltcGwudXRpbC9kYXNoLXRvLW1ldGhvZC1uYW1lIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9jYW1lbGlmeS1tYXAta2V5cyIsImZ1bi1tYXAiLCJjbGpzLmNvcmUvcmVkdWNlLWt2IiwibSIsImsiLCJjbGpzLmNvcmUvYXNzb2MiLCJjbGpzLmNvcmUva2V5d29yZCIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvYWRkLW9ibGlnYXRvcnkiLCJjbGpzLmNvcmUvbWVyZ2UiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3dyYXAtZnVucyIsImZtYXAiLCJyZW5kZXJzIiwiY2xqcy5jb3JlL3NlbGVjdC1rZXlzIiwicmVuZGVyLWZ1biIsImNsanMuY29yZS92YWxzIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25vdCIsImxlZ2FjeS1yZW5kZXIiLCJuYW1lIiwicmVhZ2VudC5pbXBsLnV0aWwvZnVuLW5hbWUiLCJjbGpzLmNvcmUvZ2Vuc3ltIiwicmVhZ2VudC5pbXBsLnV0aWwvKm5vbi1yZWFjdGl2ZSoiLCJyYXQiLCJyZWFnZW50LnJhdG9tL3J1bi1pbi1yZWFjdGlvbiIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9xdWV1ZS1yZW5kZXIiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L21hcC10by1qcyIsIm8iLCJHX18zMzgiLCJnb29nLm9iamVjdC9zZXQiLCJjbGpzLmNvcmUvbmFtZSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY2xqc2lmeSIsImJvZHkiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2J1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NyZWF0ZS1jbGFzcyIsIm1ldGhvZHMiLCJjbGpzLmNvcmUvZGlzc29jIiwic3RhdGljLW1ldGhvZHMiLCJkaXNwbGF5LW5hbWUiLCJnZXQtaW5pdGlhbC1zdGF0ZSIsImNvbnN0cnVjdCIsImNtcCIsImNvbnRleHQiLCJ1cGRhdGVyIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9nbG9iYWwkbW9kdWxlJHJlYWN0LkNvbXBvbmVudCIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9uZXh0LW1vdW50LWNvdW50IiwiZ29vZy5vYmplY3QvZXh0ZW5kIiwid3JpdGVyIiwib3B0IiwiY2xqcy5jb3JlLy13cml0ZSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY2FjaGVkLXJlYWN0LWNsYXNzIiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9nZXQtaWQiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NhY2hlLXJlYWN0LWNsYXNzIiwiY29uc3RydWN0b3IiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2ZuLXRvLWNsYXNzIiwic3BlYyIsImNsanMuY29yZS9tZXRhIiwid2l0aHJlbmRlciIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvYXMtY2xhc3MiLCJ0YWciLCJjYWNoZWQtY2xhc3MiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3JlYWN0aWZ5LWNvbXBvbmVudCIsImNvbXAiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2Z1bmN0aW9uYWwtd3JhcC1yZW5kZXIiLCJhcmd2IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mdW5jdGlvbmFsLWRvLXJlbmRlciIsIipjdXJyZW50LWNvbXBvbmVudCotb3JpZy12YWxfXzM0NCIsIipjdXJyZW50LWNvbXBvbmVudCotdGVtcC12YWxfXzM0NSIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZnVuY3Rpb25hbC1yZW5kZXIiLCJqc3Byb3BzIiwidmVjX18zNDYiLCJ1cGRhdGUtY291bnQiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dsb2JhbCRtb2R1bGUkcmVhY3QudXNlU3RhdGUiLCJzdGF0ZS1yZWYiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dsb2JhbCRtb2R1bGUkcmVhY3QudXNlUmVmIiwib2JqIiwiY2xqcy5jb3JlL2luYyIsInJlYWdlbnQtc3RhdGUiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dsb2JhbCRtb2R1bGUkcmVhY3QudXNlRWZmZWN0IiwiR19fMzQ5IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9mdW5jdGlvbmFsLXJlbmRlci1tZW1vLWZuIiwicHJldi1wcm9wcyIsIm5leHQtcHJvcHMiLCJlMzUxIiwiY2xqcy5jb3JlLz0iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2Z1bmN0aW9uYWwtcmVuZGVyLWZuIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9nbG9iYWwkbW9kdWxlJHJlYWN0Lm1lbW8iXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIHJlYWdlbnQuaW1wbC5jb21wb25lbnRcbiAgKDpyZXF1aXJlIFtnb29nLm9iamVjdCA6YXMgZ29ial1cbiAgICAgICAgICAgIFtyZWFjdCA6YXMgcmVhY3RdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnV0aWwgOmFzIHV0aWxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmJhdGNoaW5nIDphcyBiYXRjaF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwucHJvdG9jb2xzIDphcyBwXVxuICAgICAgICAgICAgW3JlYWdlbnQucmF0b20gOmFzIHJhdG9tXVxuICAgICAgICAgICAgW3JlYWdlbnQuZGVidWcgOnJlZmVyLW1hY3JvcyBbZGV2PyB3YXJuIGVycm9yIHdhcm4tdW5sZXNzIGFzc2VydC1jYWxsYWJsZV1dKSlcblxuKGRlY2xhcmUgXjpkeW5hbWljICpjdXJyZW50LWNvbXBvbmVudCopXG5cblxuOzs7IEFyZ3YgYWNjZXNzXG5cbihkZWZuIGV4dHJhY3QtcHJvcHMgW3ZdXG4gIChsZXQgW3AgKG50aCB2IDEgbmlsKV1cbiAgICAoaWYgKG1hcD8gcCkgcCkpKVxuXG4oZGVmbiBleHRyYWN0LWNoaWxkcmVuIFt2XVxuICAobGV0IFtwIChudGggdiAxIG5pbClcbiAgICAgICAgZmlyc3QtY2hpbGQgKGlmIChvciAobmlsPyBwKSAobWFwPyBwKSkgMiAxKV1cbiAgICAoaWYgKD4gKGNvdW50IHYpIGZpcnN0LWNoaWxkKVxuICAgICAgKHN1YnZlYyB2IGZpcnN0LWNoaWxkKSkpKVxuXG4oZGVmbiBwcm9wcy1hcmd2IFteanMvUmVhY3QuQ29tcG9uZW50IGMgcF1cbiAgKGlmLXNvbWUgW2EgKC4tYXJndiBwKV1cbiAgICBhXG4gICAgWyguLWNvbnN0cnVjdG9yIGMpICh1dGlsL3NoYWxsb3ctb2JqLXRvLW1hcCBwKV0pKVxuXG4oZGVmbiBnZXQtYXJndiBbXmpzL1JlYWN0LkNvbXBvbmVudCBjXVxuICAocHJvcHMtYXJndiBjICguLXByb3BzIGMpKSlcblxuKGRlZm4gZ2V0LXByb3BzIFteanMvUmVhY3QuQ29tcG9uZW50IGNdXG4gIChsZXQgW3AgKC4tcHJvcHMgYyldXG4gICAgKGlmLXNvbWUgW3YgKC4tYXJndiBwKV1cbiAgICAgIChleHRyYWN0LXByb3BzIHYpXG4gICAgICAodXRpbC9zaGFsbG93LW9iai10by1tYXAgcCkpKSlcblxuKGRlZm4gZ2V0LWNoaWxkcmVuIFteanMvUmVhY3QuQ29tcG9uZW50IGNdXG4gIChsZXQgW3AgKC4tcHJvcHMgYyldXG4gICAgKGlmLXNvbWUgW3YgKC4tYXJndiBwKV1cbiAgICAgIChleHRyYWN0LWNoaWxkcmVuIHYpXG4gICAgICAoLT4+ICguLWNoaWxkcmVuIHApXG4gICAgICAgICAgIChyZWFjdC9DaGlsZHJlbi50b0FycmF5KVxuICAgICAgICAgICAoaW50byBbXSkpKSkpXG5cbihkZWZuIF5ib29sZWFuIHJlYWdlbnQtY2xhc3M/IFtjXVxuICAoYW5kIChmbj8gYylcbiAgICAgICAoc29tZT8gKHNvbWUtPiBjICguLXByb3RvdHlwZSkgKC4tcmVhZ2VudFJlbmRlcikpKSkpXG5cbihkZWZuIF5ib29sZWFuIHJlYWN0LWNsYXNzPyBbY11cbiAgKGFuZCAoZm4/IGMpXG4gICAgICAgKHNvbWU/IChzb21lLT4gYyAoLi1wcm90b3R5cGUpICguLXJlbmRlcikpKSkpXG5cbihkZWZuIF5ib29sZWFuIHJlYWdlbnQtY29tcG9uZW50PyBbXmNsaiBjXVxuICAoc29tZT8gKC4tcmVhZ2VudFJlbmRlciBjKSkpXG5cbjs7OyBTdGF0ZVxuXG4oZGVmbiBzdGF0ZS1hdG9tIFteY2xqIHRoaXNdXG4gIChsZXQgW3NhICguLWNsanNTdGF0ZSB0aGlzKV1cbiAgICAoaWYtbm90IChuaWw/IHNhKVxuICAgICAgc2FcbiAgICAgIChzZXQhICguLWNsanNTdGF0ZSB0aGlzKSAocmF0b20vYXRvbSBuaWwpKSkpKVxuXG47OzsgUmVuZGVyaW5nXG5cbihkZWZuIHdyYXAtcmVuZGVyXG4gIFwiQ2FsbHMgdGhlIHJlbmRlciBmdW5jdGlvbiBvZiB0aGUgY29tcG9uZW50IGBjYC4gIElmIHJlc3VsdCBgcmVzYCBldmFsdWF0ZXMgdG8gYTpcbiAgICAgMSkgVmVjdG9yIChmb3JtLTEgY29tcG9uZW50KSAtIFRyZWF0cyB0aGUgdmVjdG9yIGFzIGhpY2N1cCBhbmQgcmV0dXJuc1xuICAgICAgICBhIHJlYWN0IGVsZW1lbnQgd2l0aCBhIHJlbmRlciBmdW5jdGlvbiBiYXNlZCBvbiB0aGF0IGhpY2N1cFxuICAgICAyKSBGdW5jdGlvbiAoZm9ybS0yIGNvbXBvbmVudCkgLSB1cGRhdGVzIHRoZSByZW5kZXIgZnVuY3Rpb24gdG8gYHJlc2AgaS5lLiB0aGUgaW50ZXJuYWwgZnVuY3Rpb25cbiAgICAgICAgYW5kIGNhbGxzIHdyYXAtcmVuZGVyIGFnYWluIChgcmVjdXJgKSwgdW50aWwgdGhlIHJlbmRlciByZXN1bHQgZG9lc24ndCBldmFsdWF0ZSB0byBhIGZ1bmN0aW9uLlxuICAgICAzKSBBbnl0aGluZyBlbHNlIC0gUmV0dXJucyB0aGUgcmVzdWx0IG9mIGV2YWx1YXRpbmcgYGNgXCJcbiAgW15jbGogYyBjb21waWxlcl1cbiAgKGxldCBbZiAoLi1yZWFnZW50UmVuZGVyIGMpXG4gICAgICAgIF8gKGFzc2VydC1jYWxsYWJsZSBmKVxuICAgICAgICA7OyBjbGpzTGVnYWN5UmVuZGVyIHRlbGxzIGlmIHRoaXMgY2FsbHMgd2FzIGRlZmluZWRcbiAgICAgICAgOzsgdXNpbmcgOnJlbmRlciBpbnN0ZWFkIG9mIDpyZWFnZW50LXJlbmRlclxuICAgICAgICA7OyBpbiB0aGF0IGNhc2UsIHRoZSA6cmVuZGVyIGZuIGlzIGNhbGxlZCB3aXRoIGp1c3QgYHRoaXNgIGFzIGFyZ3VtZW50LlxuICAgICAgICByZXMgKGlmICh0cnVlPyAoLi1jbGpzTGVnYWN5UmVuZGVyIGMpKVxuICAgICAgICAgICAgICAoLmNhbGwgZiBjIGMpXG4gICAgICAgICAgICAgIChsZXQgW3YgKGdldC1hcmd2IGMpXG4gICAgICAgICAgICAgICAgICAgIG4gKGNvdW50IHYpXVxuICAgICAgICAgICAgICAgIChjYXNlIG5cbiAgICAgICAgICAgICAgICAgIDEgKC5jYWxsIGYgYylcbiAgICAgICAgICAgICAgICAgIDIgKC5jYWxsIGYgYyAobnRoIHYgMSkpXG4gICAgICAgICAgICAgICAgICAzICguY2FsbCBmIGMgKG50aCB2IDEpIChudGggdiAyKSlcbiAgICAgICAgICAgICAgICAgIDQgKC5jYWxsIGYgYyAobnRoIHYgMSkgKG50aCB2IDIpIChudGggdiAzKSlcbiAgICAgICAgICAgICAgICAgIDUgKC5jYWxsIGYgYyAobnRoIHYgMSkgKG50aCB2IDIpIChudGggdiAzKSAobnRoIHYgNCkpXG4gICAgICAgICAgICAgICAgICAoLmFwcGx5IGYgYyAoLnNsaWNlIChpbnRvLWFycmF5IHYpIDEpKSkpKV1cbiAgICAoY29uZFxuICAgICAgKHZlY3Rvcj8gcmVzKSAocC9hcy1lbGVtZW50IGNvbXBpbGVyIHJlcylcbiAgICAgIChpZm4/IHJlcykgKGxldCBbZiAoaWYgKHJlYWdlbnQtY2xhc3M/IHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIChmbiBbJiBhcmdzXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocC9hcy1lbGVtZW50IGNvbXBpbGVyIChhcHBseSB2ZWN0b3IgcmVzIGFyZ3MpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcyldXG4gICAgICAgICAgICAgICAgICAgKHNldCEgKC4tcmVhZ2VudFJlbmRlciBjKSBmKVxuICAgICAgICAgICAgICAgICAgIChyZWN1ciBjIGNvbXBpbGVyKSlcbiAgICAgIDplbHNlIHJlcykpKVxuXG4oZGVmbiBjb21wb25lbnQtbmFtZSBbY11cbiAgKG9yIChzb21lLT4gYyAuLWNvbnN0cnVjdG9yIC4tZGlzcGxheU5hbWUpXG4gICAgICAoc29tZS0+IGMgLi1jb25zdHJ1Y3RvciAuLW5hbWUpKSlcblxuKGRlZm4gY29tcC1uYW1lIFtdXG4gIChpZiAoZGV2PylcbiAgICAobGV0IFtjICpjdXJyZW50LWNvbXBvbmVudCpcbiAgICAgICAgICBuIChjb21wb25lbnQtbmFtZSBjKV1cbiAgICAgIChpZi1ub3QgKGVtcHR5PyBuKVxuICAgICAgICAoc3RyIFwiIChpbiBcIiBuIFwiKVwiKVxuICAgICAgICBcIlwiKSlcbiAgICBcIlwiKSlcblxuKGRlZm4gZG8tcmVuZGVyIFtjIGNvbXBpbGVyXVxuICAoYmluZGluZyBbKmN1cnJlbnQtY29tcG9uZW50KiBjXVxuICAgIChpZiAoZGV2PylcbiAgICAgIDs7IExvZyBlcnJvcnMsIHdpdGhvdXQgdXNpbmcgdHJ5L2NhdGNoIChhbmQgbWVzcyB1cCBjYWxsIHN0YWNrKVxuICAgICAgKGxldCBbb2sgKGFycmF5IGZhbHNlKV1cbiAgICAgICAgKHRyeVxuICAgICAgICAgIChsZXQgW3JlcyAod3JhcC1yZW5kZXIgYyBjb21waWxlcildXG4gICAgICAgICAgICAoYXNldCBvayAwIHRydWUpXG4gICAgICAgICAgICByZXMpXG4gICAgICAgICAgKGZpbmFsbHlcbiAgICAgICAgICAgICh3aGVuLW5vdCAoYWdldCBvayAwKVxuICAgICAgICAgICAgICAoZXJyb3IgKHN0ciBcIkVycm9yIHJlbmRlcmluZyBjb21wb25lbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAoY29tcC1uYW1lKSkpKSkpKVxuICAgICAgKHdyYXAtcmVuZGVyIGMgY29tcGlsZXIpKSkpXG5cblxuOzs7IE1ldGhvZCB3cmFwcGluZ1xuXG4oZGVmIHJhdC1vcHRzIHs6bm8tY2FjaGUgdHJ1ZX0pXG5cbihkZWZuIGN1c3RvbS13cmFwcGVyIFtrZXkgZl1cbiAgKGNhc2Uga2V5XG4gICAgOmdldERlZmF1bHRQcm9wc1xuICAgICh0aHJvdyAoanMvRXJyb3IuIFwiZ2V0RGVmYXVsdFByb3BzIG5vdCBzdXBwb3J0ZWRcIikpXG5cbiAgICA6Z2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzXG4gICAgKGZuIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyBbcHJvcHMgc3RhdGVdXG4gICAgICA7OyBSZWFkIHByb3BzIGZyb20gUmVhZ2VudCBhcmd2XG4gICAgICAoLmNhbGwgZiBuaWwgKGlmLXNvbWUgW2EgKC4tYXJndiBwcm9wcyldIChleHRyYWN0LXByb3BzIGEpIHByb3BzKSBzdGF0ZSkpXG5cbiAgICA7OyBJbiBFUzYgUmVhY3QsIHRoaXMgaXMgbm93IHBhcnQgb2YgdGhlIGNvbnN0cnVjdG9yXG4gICAgOmdldEluaXRpYWxTdGF0ZVxuICAgIChmbiBnZXRJbml0aWFsU3RhdGUgW2NdXG4gICAgICAocmVzZXQhIChzdGF0ZS1hdG9tIGMpICguY2FsbCBmIGMgYykpKVxuXG4gICAgOmdldFNuYXBzaG90QmVmb3JlVXBkYXRlXG4gICAgKGZuIGdldFNuYXBzaG90QmVmb3JlVXBkYXRlIFtvbGRwcm9wcyBvbGRzdGF0ZV1cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjIChwcm9wcy1hcmd2IGMgb2xkcHJvcHMpIG9sZHN0YXRlKSkpXG5cbiAgICA7OyBEZXByZWNhdGVkIC0gd2FybmluZyBpbiAxNi45IHdpbGwgd29yayB0aHJvdWdoIDE3LnhcbiAgICA6Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1xuICAgIChmbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIFtuZXh0cHJvcHNdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG5leHRwcm9wcykpKSlcblxuICAgIDs7IERlcHJlY2F0ZWQgLSB3aWxsIHdvcmsgaW4gMTcueFxuICAgIDpVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1xuICAgIChmbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzIFtuZXh0cHJvcHNdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG5leHRwcm9wcykpKSlcblxuICAgIDpzaG91bGRDb21wb25lbnRVcGRhdGVcbiAgICAoZm4gc2hvdWxkQ29tcG9uZW50VXBkYXRlIFtuZXh0cHJvcHMgbmV4dHN0YXRlXVxuICAgICAgKG9yIHV0aWwvKmFsd2F5cy11cGRhdGUqXG4gICAgICAgICAgKHRoaXMtYXMgY1xuICAgICAgICAgICAgICAgICAgIDs7IERvbid0IGNhcmUgYWJvdXQgbmV4dHN0YXRlIGhlcmUsIHdlIHVzZSBmb3JjZVVwZGF0ZVxuICAgICAgICAgICAgICAgICAgIDs7IHdoZW4gb25seSB3aGVuIHN0YXRlIGhhcyBjaGFuZ2VkIGFueXdheS5cbiAgICAgICAgICAgICAgICAgICAobGV0IFtvbGQtYXJndiAoLi4gYyAtcHJvcHMgLWFyZ3YpXG4gICAgICAgICAgICAgICAgICAgICAgICAgbmV3LWFyZ3YgKC4tYXJndiBuZXh0cHJvcHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgbm9hcmd2IChvciAobmlsPyBvbGQtYXJndikgKG5pbD8gbmV3LWFyZ3YpKV1cbiAgICAgICAgICAgICAgICAgICAgIChjb25kXG4gICAgICAgICAgICAgICAgICAgICAgIChuaWw/IGYpIChvciBub2FyZ3YgKHRyeSAobm90PSBvbGQtYXJndiBuZXctYXJndilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYXRjaCA6ZGVmYXVsdCBlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh3YXJuIFwiRXhjZXB0aW9uIHRocm93biB3aGlsZSBjb21wYXJpbmcgYXJndidzIGluIHNob3VsZENvbXBvbmVudFVwZGF0ZTogXCIgb2xkLWFyZ3YgXCIgXCIgbmV3LWFyZ3YgXCIgXCIgZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgbm9hcmd2ICguY2FsbCBmIGMgYyAoZ2V0LWFyZ3YgYykgKHByb3BzLWFyZ3YgYyBuZXh0cHJvcHMpKVxuICAgICAgICAgICAgICAgICAgICAgICA6ZWxzZSAgKC5jYWxsIGYgYyBjIG9sZC1hcmd2IG5ldy1hcmd2KSkpKSkpXG5cbiAgICA7OyBEZXByZWNhdGVkIC0gd2FybmluZyBpbiAxNi45IHdpbGwgd29yayB0aHJvdWdoIDE3LnhcbiAgICA6Y29tcG9uZW50V2lsbFVwZGF0ZVxuICAgIChmbiBjb21wb25lbnRXaWxsVXBkYXRlIFtuZXh0cHJvcHMgbmV4dHN0YXRlXVxuICAgICAgKHRoaXMtYXMgYyAoLmNhbGwgZiBjIGMgKHByb3BzLWFyZ3YgYyBuZXh0cHJvcHMpIG5leHRzdGF0ZSkpKVxuXG4gICAgOzsgRGVwcmVjYXRlZCAtIHdpbGwgd29yayBpbiAxNy54XG4gICAgOlVOU0FGRV9jb21wb25lbnRXaWxsVXBkYXRlXG4gICAgKGZuIGNvbXBvbmVudFdpbGxVcGRhdGUgW25leHRwcm9wcyBuZXh0c3RhdGVdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG5leHRwcm9wcykgbmV4dHN0YXRlKSkpXG5cbiAgICA6Y29tcG9uZW50RGlkVXBkYXRlXG4gICAgKGZuIGNvbXBvbmVudERpZFVwZGF0ZSBbb2xkcHJvcHMgb2xkc3RhdGUgc25hcHNob3RdXG4gICAgICAodGhpcy1hcyBjICguY2FsbCBmIGMgYyAocHJvcHMtYXJndiBjIG9sZHByb3BzKSBvbGRzdGF0ZSBzbmFwc2hvdCkpKVxuXG4gICAgOzsgRGVwcmVjYXRlZCAtIHdhcm5pbmcgaW4gMTYuOSB3aWxsIHdvcmsgdGhyb3VnaCAxNy54XG4gICAgOmNvbXBvbmVudFdpbGxNb3VudFxuICAgIChmbiBjb21wb25lbnRXaWxsTW91bnQgW11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjKSkpXG5cbiAgICA7OyBEZXByZWNhdGVkIC0gd2lsbCB3b3JrIGluIDE3LnhcbiAgICA6VU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudFxuICAgIChmbiBjb21wb25lbnRXaWxsTW91bnQgW11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjKSkpXG5cbiAgICA6Y29tcG9uZW50RGlkTW91bnRcbiAgICAoZm4gY29tcG9uZW50RGlkTW91bnQgW11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjKSkpXG5cbiAgICA6Y29tcG9uZW50V2lsbFVubW91bnRcbiAgICAoZm4gY29tcG9uZW50V2lsbFVubW91bnQgW11cbiAgICAgICh0aGlzLWFzIGNcbiAgICAgICAgICAgICAgIChzb21lLT4gKGdvYmovZ2V0IGMgXCJjbGpzUmF0b21cIikgcmF0b20vZGlzcG9zZSEpXG4gICAgICAgICAgICAgICAoYmF0Y2gvbWFyay1yZW5kZXJlZCBjKVxuICAgICAgICAgICAgICAgKHdoZW4tbm90IChuaWw/IGYpXG4gICAgICAgICAgICAgICAgICguY2FsbCBmIGMgYykpKSlcblxuICAgIDpjb21wb25lbnREaWRDYXRjaFxuICAgIChmbiBjb21wb25lbnREaWRDYXRjaCBbZXJyb3IgaW5mb11cbiAgICAgICh0aGlzLWFzIGMgKC5jYWxsIGYgYyBjIGVycm9yIGluZm8pKSlcblxuICAgIG5pbCkpXG5cbihkZWZuIGdldC13cmFwcGVyIFtrZXkgZl1cbiAgKGxldCBbd3JhcCAoY3VzdG9tLXdyYXBwZXIga2V5IGYpXVxuICAgICh3aGVuIChhbmQgd3JhcCBmKVxuICAgICAgKGFzc2VydC1jYWxsYWJsZSBmKSlcbiAgICAob3Igd3JhcCBmKSkpXG5cbjs7IFRob3VnaCB0aGUgdmFsdWUgaXMgbmlsIGhlcmUsIHRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdpbGwgYmVcbjs7IGFkZGVkIHRvIGNsYXNzIHRvIG1hbmFnZSBSZWFnZW50IHJhdG9tIGxpZmVjeWNsZS5cbihkZWYgb2JsaWdhdG9yeSB7OnNob3VsZENvbXBvbmVudFVwZGF0ZSBuaWxcbiAgICAgICAgICAgICAgICAgOmNvbXBvbmVudFdpbGxVbm1vdW50IG5pbH0pXG5cbihkZWYgZGFzaC10by1tZXRob2QtbmFtZSAodXRpbC9tZW1vaXplLTEgdXRpbC9kYXNoLXRvLW1ldGhvZC1uYW1lKSlcblxuKGRlZm4gY2FtZWxpZnktbWFwLWtleXMgW2Z1bi1tYXBdXG4gIChyZWR1Y2Uta3YgKGZuIFttIGsgdl1cbiAgICAgICAgICAgICAgIChhc3NvYyBtICgtPiBrIGRhc2gtdG8tbWV0aG9kLW5hbWUga2V5d29yZCkgdikpXG4gICAgICAgICAgICAge30gZnVuLW1hcCkpXG5cbihkZWZuIGFkZC1vYmxpZ2F0b3J5IFtmdW4tbWFwXVxuICAobWVyZ2Ugb2JsaWdhdG9yeSBmdW4tbWFwKSlcblxuKGRlZm4gd3JhcC1mdW5zIFtmbWFwIGNvbXBpbGVyXVxuICAod2hlbiAoZGV2PylcbiAgICAobGV0IFtyZW5kZXJzIChzZWxlY3Qta2V5cyBmbWFwIFs6cmVuZGVyIDpyZWFnZW50UmVuZGVyXSlcbiAgICAgICAgICByZW5kZXItZnVuICgtPiByZW5kZXJzIHZhbHMgZmlyc3QpXVxuICAgICAgKGFzc2VydCAobm90ICg6Y29tcG9uZW50RnVuY3Rpb24gZm1hcCkpIFwiOmNvbXBvbmVudC1mdW5jdGlvbiBpcyBubyBsb25nZXIgc3VwcG9ydGVkLCB1c2UgOnJlYWdlbnQtcmVuZGVyIGluc3RlYWQuXCIpXG4gICAgICAoYXNzZXJ0IChwb3M/IChjb3VudCByZW5kZXJzKSkgXCJNaXNzaW5nIHJlYWdlbnQtcmVuZGVyXCIpXG4gICAgICAoYXNzZXJ0ICg9PSAxIChjb3VudCByZW5kZXJzKSkgXCJUb28gbWFueSByZW5kZXIgZnVuY3Rpb25zIHN1cHBsaWVkXCIpXG4gICAgICAoYXNzZXJ0LWNhbGxhYmxlIHJlbmRlci1mdW4pKSlcbiAgKGxldCBbcmVuZGVyLWZ1biAob3IgKDpyZWFnZW50UmVuZGVyIGZtYXApXG4gICAgICAgICAgICAgICAgICAgICAgICg6cmVuZGVyIGZtYXApKVxuICAgICAgICBsZWdhY3ktcmVuZGVyIChuaWw/ICg6cmVhZ2VudFJlbmRlciBmbWFwKSlcbiAgICAgICAgbmFtZSAob3IgKDpkaXNwbGF5TmFtZSBmbWFwKVxuICAgICAgICAgICAgICAgICAodXRpbC9mdW4tbmFtZSByZW5kZXItZnVuKVxuICAgICAgICAgICAgICAgICAoc3RyIChnZW5zeW0gXCJyZWFnZW50XCIpKSlcbiAgICAgICAgZm1hcCAocmVkdWNlLWt2IChmbiBbbSBrIHZdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIChhc3NvYyBtIGsgKGdldC13cmFwcGVyIGsgdikpKVxuICAgICAgICAgICAgICAgICAgICAgICAge30gZm1hcCldXG4gICAgKGFzc29jIGZtYXBcbiAgICAgICAgICAgOmRpc3BsYXlOYW1lIG5hbWVcbiAgICAgICAgICAgOmNsanNMZWdhY3lSZW5kZXIgbGVnYWN5LXJlbmRlclxuICAgICAgICAgICA6cmVhZ2VudFJlbmRlciByZW5kZXItZnVuXG4gICAgICAgICAgIDpyZW5kZXIgKGZuIHJlbmRlciBbXVxuICAgICAgICAgICAgICAgICAgICAgKHRoaXMtYXMgYyAoaWYgdXRpbC8qbm9uLXJlYWN0aXZlKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkby1yZW5kZXIgYyBjb21waWxlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAobGV0IFteY2xqIHJhdCAoZ29iai9nZXQgYyBcImNsanNSYXRvbVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChiYXRjaC9tYXJrLXJlbmRlcmVkIGMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYgKG5pbD8gcmF0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmF0b20vcnVuLWluLXJlYWN0aW9uICMoZG8tcmVuZGVyIGMgY29tcGlsZXIpIGMgXCJjbGpzUmF0b21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoL3F1ZXVlLXJlbmRlciByYXQtb3B0cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKC5fcnVuIHJhdCBmYWxzZSkpKSkpKSkpKVxuXG4oZGVmbiBtYXAtdG8tanMgW21dXG4gIChyZWR1Y2Uta3YgKGZuIFtvIGsgdl1cbiAgICAgICAgICAgICAgIChkb3RvIG9cbiAgICAgICAgICAgICAgICAgKGdvYmovc2V0IChuYW1lIGspIHYpKSlcbiAgICAgICAgICAgICAjanN7fSBtKSlcblxuKGRlZm4gY2xqc2lmeSBbYm9keSBjb21waWxlcl1cbiAgKC0+IGJvZHlcbiAgICAgIGNhbWVsaWZ5LW1hcC1rZXlzXG4gICAgICBhZGQtb2JsaWdhdG9yeVxuICAgICAgKHdyYXAtZnVucyBjb21waWxlcikpKVxuXG47OyBJZGVhIGZyb206XG47OyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9wZXN0ZXJoYXp5LzJhMjVjODJkYjA1MTlhMjhlNDE1YjQwNDgxZjg0NTU0XG47OyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS90aGhlbGxlci83ZjUzMGIzNGRlMWM0NDU4OWY0ZTA2NzFlMWVmNzUzMyNmaWxlLWVzNi1jbGFzcy1jbGpzLUwxOFxuXG4oZGVmIGJ1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXNcbiAgWzpjaGlsZENvbnRleHRUeXBlcyA6Y29udGV4dFR5cGVzIDpjb250ZXh0VHlwZVxuICAgOmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyA6Z2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yXSlcblxuKGRlZm4gY3JlYXRlLWNsYXNzXG4gIFwiQ3JlYXRlcyBKUyBjbGFzcyBiYXNlZCBvbiBwcm92aWRlZCBDbG9qdXJlIG1hcC5cblxuICBNYXAga2V5cyBzaG91bGQgdXNlIGBSZWFjdC5Db21wb25lbnRgIG1ldGhvZCBuYW1lcyAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWNvbXBvbmVudC5odG1sKSxcbiAgYW5kIGNhbiBiZSBwcm92aWRlZCBpbiBzbmFrZS1jYXNlIG9yIGNhbWVsQ2FzZS5cbiAgQ29uc3RydWN0b3IgZnVuY3Rpb24gaXMgZGVmaW5lZCB1c2luZyBrZXkgYDpnZXRJbml0aWFsU3RhdGVgLlxuXG4gIFJlYWN0IGJ1aWx0LWluIHN0YXRpYyBtZXRob2RzIG9yIHByb3BlcnRpZXMgYXJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCBhcyBzdGF0aWNzLlwiXG4gIFtib2R5IGNvbXBpbGVyXVxuICB7OnByZSBbKG1hcD8gYm9keSldfVxuICAobGV0IFtib2R5IChjbGpzaWZ5IGJvZHkgY29tcGlsZXIpXG4gICAgICAgIG1ldGhvZHMgKG1hcC10by1qcyAoYXBwbHkgZGlzc29jIGJvZHkgOmRpc3BsYXlOYW1lIDpnZXRJbml0aWFsU3RhdGUgOmNvbnN0cnVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJlbmRlciA6cmVhZ2VudFJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXMpKVxuICAgICAgICBzdGF0aWMtbWV0aG9kcyAobWFwLXRvLWpzIChzZWxlY3Qta2V5cyBib2R5IGJ1aWx0LWluLXN0YXRpYy1tZXRob2QtbmFtZXMpKVxuICAgICAgICBkaXNwbGF5LW5hbWUgKDpkaXNwbGF5TmFtZSBib2R5KVxuICAgICAgICBnZXQtaW5pdGlhbC1zdGF0ZSAoOmdldEluaXRpYWxTdGF0ZSBib2R5KVxuICAgICAgICBjb25zdHJ1Y3QgKDpjb25zdHJ1Y3RvciBib2R5KVxuICAgICAgICBjbXAgKGZuIFtwcm9wcyBjb250ZXh0IHVwZGF0ZXJdXG4gICAgICAgICAgICAgICh0aGlzLWFzIHRoaXNcbiAgICAgICAgICAgICAgICAoLmNhbGwgcmVhY3QvQ29tcG9uZW50IHRoaXMgcHJvcHMgY29udGV4dCB1cGRhdGVyKVxuICAgICAgICAgICAgICAgICh3aGVuIGNvbnN0cnVjdFxuICAgICAgICAgICAgICAgICAgKGNvbnN0cnVjdCB0aGlzIHByb3BzKSlcbiAgICAgICAgICAgICAgICAod2hlbiBnZXQtaW5pdGlhbC1zdGF0ZVxuICAgICAgICAgICAgICAgICAgKHNldCEgKC4tc3RhdGUgdGhpcykgKGdldC1pbml0aWFsLXN0YXRlIHRoaXMpKSlcbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1jbGpzTW91bnRPcmRlciBeY2xqIHRoaXMpIChiYXRjaC9uZXh0LW1vdW50LWNvdW50KSlcbiAgICAgICAgICAgICAgICB0aGlzKSldXG5cbiAgICAoZ29iai9leHRlbmQgKC4tcHJvdG90eXBlIGNtcCkgKC4tcHJvdG90eXBlIHJlYWN0L0NvbXBvbmVudCkgbWV0aG9kcylcblxuICAgIDs7IFRoZXNlIG5hbWVzIFNIT1VMRCBiZSBtYW5nbGVkIGJ5IENsb3N1cmUgc28gd2UgY2FuJ3QgdXNlIGdvb2cvZXh0ZW5kXG5cbiAgICAod2hlbiAoOnJlbmRlciBib2R5KVxuICAgICAgKHNldCEgKC4tcmVuZGVyIF5qcyAoLi1wcm90b3R5cGUgY21wKSkgKDpyZW5kZXIgYm9keSkpKVxuXG4gICAgKHdoZW4gKDpyZWFnZW50UmVuZGVyIGJvZHkpXG4gICAgICAoc2V0ISAoLi1yZWFnZW50UmVuZGVyIF5jbGogKC4tcHJvdG90eXBlIGNtcCkpICg6cmVhZ2VudFJlbmRlciBib2R5KSkpXG5cbiAgICAod2hlbiAoOmNsanNMZWdhY3lSZW5kZXIgYm9keSlcbiAgICAgIChzZXQhICguLWNsanNMZWdhY3lSZW5kZXIgXmNsaiAoLi1wcm90b3R5cGUgY21wKSkgKDpjbGpzTGVnYWN5UmVuZGVyIGJvZHkpKSlcblxuICAgIChnb2JqL2V4dGVuZCBjbXAgcmVhY3QvQ29tcG9uZW50IHN0YXRpYy1tZXRob2RzKVxuXG4gICAgKHdoZW4gZGlzcGxheS1uYW1lXG4gICAgICAoc2V0ISAoLi1kaXNwbGF5TmFtZSBjbXApIGRpc3BsYXktbmFtZSlcbiAgICAgIChzZXQhICguLWNsanMkbGFuZyRjdG9yU3RyIGNtcCkgZGlzcGxheS1uYW1lKVxuICAgICAgKHNldCEgKC4tY2xqcyRsYW5nJGN0b3JQcldyaXRlciBjbXApXG4gICAgICAgICAgICAoZm4gW3RoaXMgd3JpdGVyIG9wdF1cbiAgICAgICAgICAgICAgKGNsanMuY29yZS8td3JpdGUgd3JpdGVyIGRpc3BsYXktbmFtZSkpKSlcblxuICAgIChzZXQhICguLWNsanMkbGFuZyR0eXBlIGNtcCkgdHJ1ZSlcbiAgICAoc2V0ISAoLi4gY21wIC1wcm90b3R5cGUgLWNvbnN0cnVjdG9yKSBjbXApXG5cbiAgICBjbXApKVxuXG47OyBDYWNoZSByZXN1bHQgdG8gdGhlIHRhZyBidXQgcGVyIGNvbXBpbGVyIElEXG47OyBUT0RPOiBHZW5lcmF0ZSBjYWNoZSAmIGdldCBtZXRob2RzIHRvIHRoZSBPYmplY3QgdXNpbmcgbWFjcm8sXG47OyBjYW4gZ2VuZXJhdGUgY29kZSBjYWxsaW5nIGludGVyb3AgZm9ybXMuXG4oZGVmbiBjYWNoZWQtcmVhY3QtY2xhc3MgW2NvbXBpbGVyIF5jbGogY11cbiAgKGdvYmovZ2V0IGMgKHAvZ2V0LWlkIGNvbXBpbGVyKSkpXG5cbihkZWZuIGNhY2hlLXJlYWN0LWNsYXNzIFtjb21waWxlciBeY2xqIGMgY29uc3RydWN0b3JdXG4gIChnb2JqL3NldCBjIChwL2dldC1pZCBjb21waWxlcikgY29uc3RydWN0b3IpXG4gIGNvbnN0cnVjdG9yKVxuXG4oZGVmbiBmbi10by1jbGFzcyBbY29tcGlsZXIgZl1cbiAgKGFzc2VydC1jYWxsYWJsZSBmKVxuICAod2Fybi11bmxlc3MgKG5vdCAoYW5kIChyZWFjdC1jbGFzcz8gZilcbiAgICAgICAgICAgICAgICAgICAgICAgICAobm90IChyZWFnZW50LWNsYXNzPyBmKSkpKVxuICAgICAgICAgICAgICAgXCJVc2luZyBuYXRpdmUgUmVhY3QgY2xhc3NlcyBkaXJlY3RseSBpbiBIaWNjdXAgZm9ybXMgXCJcbiAgICAgICAgICAgICAgIFwiaXMgbm90IHN1cHBvcnRlZC4gVXNlIGNyZWF0ZS1lbGVtZW50IG9yIFwiXG4gICAgICAgICAgICAgICBcImFkYXB0LXJlYWN0LWNsYXNzIGluc3RlYWQ6IFwiIChvciAodXRpbC9mdW4tbmFtZSBmKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGYpXG4gICAgICAgICAgICAgICAoY29tcC1uYW1lKSlcbiAgKGlmIChyZWFnZW50LWNsYXNzPyBmKVxuICAgIChjYWNoZS1yZWFjdC1jbGFzcyBjb21waWxlciBmIGYpXG4gICAgKGxldCBbc3BlYyAobWV0YSBmKVxuICAgICAgICAgIHdpdGhyZW5kZXIgKGFzc29jIHNwZWMgOnJlYWdlbnQtcmVuZGVyIGYpXG4gICAgICAgICAgcmVzIChjcmVhdGUtY2xhc3Mgd2l0aHJlbmRlciBjb21waWxlcildXG4gICAgICAoY2FjaGUtcmVhY3QtY2xhc3MgY29tcGlsZXIgZiByZXMpKSkpXG5cbihkZWZuIGFzLWNsYXNzIFt0YWcgY29tcGlsZXJdXG4gIChpZi1zb21lIFtjYWNoZWQtY2xhc3MgKGNhY2hlZC1yZWFjdC1jbGFzcyBjb21waWxlciB0YWcpXVxuICAgIGNhY2hlZC1jbGFzc1xuICAgIChmbi10by1jbGFzcyBjb21waWxlciB0YWcpKSlcblxuKGRlZm4gcmVhY3RpZnktY29tcG9uZW50IFtjb21wIGNvbXBpbGVyXVxuICAoaWYgKHJlYWN0LWNsYXNzPyBjb21wKVxuICAgIGNvbXBcbiAgICAoYXMtY2xhc3MgY29tcCBjb21waWxlcikpKVxuXG4oZGVmbiBmdW5jdGlvbmFsLXdyYXAtcmVuZGVyXG4gIFtjb21waWxlciBjXVxuICAobGV0IFtmICguLXJlYWdlbnRSZW5kZXIgYylcbiAgICAgICAgXyAoYXNzZXJ0LWNhbGxhYmxlIGYpXG4gICAgICAgIGFyZ3YgKC4tYXJndiBjKVxuICAgICAgICByZXMgKGFwcGx5IGYgYXJndildXG4gICAgKGNvbmRcbiAgICAgICh2ZWN0b3I/IHJlcykgKHAvYXMtZWxlbWVudCBjb21waWxlciByZXMpXG4gICAgICAoaWZuPyByZXMpIChsZXQgW2YgKGlmIChyZWFnZW50LWNsYXNzPyByZXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAoZm4gWyYgYXJnc11cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHAvYXMtZWxlbWVudCBjb21waWxlciAoYXBwbHkgdmVjdG9yIHJlcyBhcmdzKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICByZXMpXVxuICAgICAgICAgICAgICAgICAgIChzZXQhICguLXJlYWdlbnRSZW5kZXIgYykgZilcbiAgICAgICAgICAgICAgICAgICAocmVjdXIgY29tcGlsZXIgYykpXG4gICAgICA6ZWxzZSByZXMpKSlcblxuKGRlZm4gZnVuY3Rpb25hbC1kby1yZW5kZXIgW2NvbXBpbGVyIGNdXG4gIChiaW5kaW5nIFsqY3VycmVudC1jb21wb25lbnQqIGNdXG4gICAgKGlmIChkZXY/KVxuICAgICAgOzsgTG9nIGVycm9ycywgd2l0aG91dCB1c2luZyB0cnkvY2F0Y2ggKGFuZCBtZXNzIHVwIGNhbGwgc3RhY2spXG4gICAgICAobGV0IFtvayAoYXJyYXkgZmFsc2UpXVxuICAgICAgICAodHJ5XG4gICAgICAgICAgKGxldCBbcmVzIChmdW5jdGlvbmFsLXdyYXAtcmVuZGVyIGNvbXBpbGVyIGMpXVxuICAgICAgICAgICAgKGFzZXQgb2sgMCB0cnVlKVxuICAgICAgICAgICAgcmVzKVxuICAgICAgICAgIChmaW5hbGx5XG4gICAgICAgICAgICAod2hlbi1ub3QgKGFnZXQgb2sgMClcbiAgICAgICAgICAgICAgKGVycm9yIChzdHIgXCJFcnJvciByZW5kZXJpbmcgY29tcG9uZW50XCIgKGNvbXAtbmFtZSkpKSkpKSlcbiAgICAgIChmdW5jdGlvbmFsLXdyYXAtcmVuZGVyIGNvbXBpbGVyIGMpKSkpXG5cbihkZWZuIGZ1bmN0aW9uYWwtcmVuZGVyIFtjb21waWxlciBqc3Byb3BzXVxuICAoaWYgdXRpbC8qbm9uLXJlYWN0aXZlKlxuICAgIDs7IE5vbi1yZWFjdGl2ZSBjb21wb25lbnQgbmVlZHMganVzdCB0aGUgcmVuZGVyIGZuIGFuZCBhcmd2XG4gICAgKGZ1bmN0aW9uYWwtZG8tcmVuZGVyIGNvbXBpbGVyIGpzcHJvcHMpXG4gICAgKGxldCBbYXJndiAoLi1hcmd2IGpzcHJvcHMpXG4gICAgICAgICAgdGFnICguLXJlYWdlbnRSZW5kZXIganNwcm9wcylcblxuICAgICAgICAgIDs7IFVzZSBjb3VudGVyIHRvIHRyaWdnZXIgcmVuZGVyIG1hbnVhbGx5LlxuICAgICAgICAgIFtfIHVwZGF0ZS1jb3VudF0gKHJlYWN0L3VzZVN0YXRlIDApXG5cbiAgICAgICAgICA7OyBUaGlzIG9iamVjdCBtaW1pY3MgUmVhY3QgQ2xhc3MgYXR0cmlidXRlcyBhbmQgbWV0aG9kcy5cbiAgICAgICAgICA7OyBUbyBzdXBwb3J0IGZvcm0tMiBjb21wb25lbnRzLCBldmVuIHRoZSByZW5kZXIgZm4gbmVlZHMgdG9cbiAgICAgICAgICA7OyBiZSBzdG9yZWQgYXMgaXQgaXMgY3JlYXRlZCBkdXJpbmcgdGhlIGZpcnN0IHJlbmRlcixcbiAgICAgICAgICA7OyBhbmQgc3Vic2VxdWVudCByZW5kZXJzIG5lZWQgdG8gcmV0cmlldmUgdGhlIGNyZWF0ZWQgZm4uXG4gICAgICAgICAgc3RhdGUtcmVmIChyZWFjdC91c2VSZWYpXG5cbiAgICAgICAgICBfICh3aGVuLW5vdCAoLi1jdXJyZW50IHN0YXRlLXJlZilcbiAgICAgICAgICAgICAgKGxldCBbb2JqICNqcyB7fV1cbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1mb3JjZVVwZGF0ZSBvYmopIChmbiBbXSAodXBkYXRlLWNvdW50IGluYykpKVxuICAgICAgICAgICAgICAgIChzZXQhICguLWNsanNNb3VudE9yZGVyIG9iaikgKGJhdGNoL25leHQtbW91bnQtY291bnQpKVxuICAgICAgICAgICAgICAgIDs7IFVzZSByZWFnZW50UmVuZGVyIG5hbWUsIGFzIHRoYXQgaXMgYWxzbyB1c2VkXG4gICAgICAgICAgICAgICAgOzsgYnkgY2xhc3MgY29tcG9uZW50cywgYW5kIHNvbWUgY2hlY2tzLlxuICAgICAgICAgICAgICAgIDs7IHJlYWdlbnRSZW5kZXIgaXMgcmVwbGFjZWQgd2l0aCBmb3JtLTIgaW5uZXIgZm4sXG4gICAgICAgICAgICAgICAgOzsgY29uc3RydWN0b3IgcmVmZXJzIHRvIHRoZSBvcmlnaW5hbCBmbi5cbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1jb25zdHJ1Y3RvciBvYmopIHRhZylcbiAgICAgICAgICAgICAgICAoc2V0ISAoLi1yZWFnZW50UmVuZGVyIG9iaikgdGFnKVxuXG4gICAgICAgICAgICAgICAgKHNldCEgKC4tY3VycmVudCBzdGF0ZS1yZWYpIG9iaikpKVxuXG4gICAgICAgICAgcmVhZ2VudC1zdGF0ZSAoLi1jdXJyZW50IHN0YXRlLXJlZilcblxuICAgICAgICAgIDs7IEZJWE1FOiBBY2Nlc3MgY2xqc1JhdG9tIHVzaW5nIGludGVyb3AgZm9ybXNcbiAgICAgICAgICByYXQgKGdvYmovZ2V0IHJlYWdlbnQtc3RhdGUgXCJjbGpzUmF0b21cIildXG5cbiAgICAgIChyZWFjdC91c2VFZmZlY3RcbiAgICAgICAgKGZuIG1vdW50IFtdXG4gICAgICAgICAgKGZuIHVubW91bnQgW11cbiAgICAgICAgICAgIChzb21lLT4gKGdvYmovZ2V0IHJlYWdlbnQtc3RhdGUgXCJjbGpzUmF0b21cIikgcmF0b20vZGlzcG9zZSEpKSlcbiAgICAgICAgOzsgSWdub3JlIHByb3BzIC0gb25seSBydW4gZWZmZWN0IG9uY2Ugb24gbW91bnQgYW5kIHVubW91bnRcbiAgICAgICAgI2pzIFtdKVxuXG4gICAgICA7OyBBcmd2IGlzIGFsc28gc3RvcmVkIGluIHRoZSBzdGF0ZSxcbiAgICAgIDs7IHNvIHJlYWN0aW9uIGZuIHdpbGwgYWx3YXlzIHNlZSB0aGUgbGF0ZXN0IHZhbHVlLlxuICAgICAgKHNldCEgKC4tYXJndiByZWFnZW50LXN0YXRlKSBhcmd2KVxuXG4gICAgICAoYmF0Y2gvbWFyay1yZW5kZXJlZCByZWFnZW50LXN0YXRlKVxuXG4gICAgICA7OyBzdGF0aWMtZm5zIDpyZW5kZXJcbiAgICAgIChpZiAobmlsPyByYXQpXG4gICAgICAgIChyYXRvbS9ydW4taW4tcmVhY3Rpb25cbiAgICAgICAgICA7OyBNb2NrIENsYXNzIGNvbXBvbmVudCBBUElcbiAgICAgICAgICAjKGZ1bmN0aW9uYWwtZG8tcmVuZGVyIGNvbXBpbGVyIHJlYWdlbnQtc3RhdGUpXG4gICAgICAgICAgcmVhZ2VudC1zdGF0ZVxuICAgICAgICAgIFwiY2xqc1JhdG9tXCJcbiAgICAgICAgICBiYXRjaC9xdWV1ZS1yZW5kZXJcbiAgICAgICAgICByYXQtb3B0cylcbiAgICAgICAgOzsgVE9ETzogQ29uc2lkZXIgcGFzc2luZyBwcm9wcyBoZXJlLCBpbnN0ZWFkIG9mIGtlZXBpbmcgdGhlbSBpbiBzdGF0ZT9cbiAgICAgICAgKC5fcnVuIHJhdCBmYWxzZSkpKSkpXG5cbihkZWZuIGZ1bmN0aW9uYWwtcmVuZGVyLW1lbW8tZm5cbiAgW3ByZXYtcHJvcHMgbmV4dC1wcm9wc11cbiAgKGxldCBbb2xkLWFyZ3YgKC4tYXJndiBwcmV2LXByb3BzKVxuICAgICAgICBuZXctYXJndiAoLi1hcmd2IG5leHQtcHJvcHMpXVxuICAgIChhbmQgKGZhbHNlPyB1dGlsLyphbHdheXMtdXBkYXRlKilcbiAgICAgICAgICh0cnlcbiAgICAgICAgICAgKD0gb2xkLWFyZ3YgbmV3LWFyZ3YpXG4gICAgICAgICAgIChjYXRjaCA6ZGVmYXVsdCBlXG4gICAgICAgICAgICAgKHdhcm4gXCJFeGNlcHRpb24gdGhyb3duIHdoaWxlIGNvbXBhcmluZyBhcmd2J3MgaW4gc2hvdWxkQ29tcG9uZW50VXBkYXRlOiBcIiBvbGQtYXJndiBcIiBcIiBuZXctYXJndiBcIiBcIiBlKVxuICAgICAgICAgICAgIGZhbHNlKSkpKSlcblxuKGRlZm4gZnVuY3Rpb25hbC1yZW5kZXItZm5cbiAgXCJDcmVhdGUgY29weSBvZiBmdW5jdGlvbmFsLXJlbmRlciB3aXRoIGRpc3BsYXlOYW1lIHNldCB0byBuYW1lIG9mIHRoZVxuICBvcmlnaW5hbCBSZWFnZW50IGNvbXBvbmVudC5cIlxuICBbY29tcGlsZXIgdGFnXVxuICA7OyBUT0RPOiBDb3VsZCBiZSBkaXNhYmxlZCBmb3Igb3B0aW1pemVkIGJ1aWxkcz9cbiAgOzsgT3Igbm90IGN1cnJlbnRseSAtIHRoZSBtZW1vIHdyYXAgaXMgcmVxdWlyZWQuXG4gIChvciAoY2FjaGVkLXJlYWN0LWNsYXNzIGNvbXBpbGVyIHRhZylcbiAgICAgIChsZXQgW2YgKGZuIFtqc3Byb3BzXSAoZnVuY3Rpb25hbC1yZW5kZXIgY29tcGlsZXIganNwcm9wcykpXG4gICAgICAgICAgICBfIChzZXQhICguLWRpc3BsYXlOYW1lIGYpICh1dGlsL2Z1bi1uYW1lIHRhZykpXG4gICAgICAgICAgICBmIChyZWFjdC9tZW1vIGYgZnVuY3Rpb25hbC1yZW5kZXItbWVtby1mbildXG4gICAgICAgIChjYWNoZS1yZWFjdC1jbGFzcyBjb21waWxlciB0YWcgZilcbiAgICAgICAgZikpKVxuIl19