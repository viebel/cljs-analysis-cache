// Compiled by ClojureScript 1.10.597
goog.provide("reagent.core");
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Create a native React element, by calling React.createElement directly.
 * 
 *   That means the second argument must be a javascript object (or nil), and
 *   that any Reagent hiccup forms must be processed with as-element. For example
 *   like this:
 * 
 *   ```cljs
 *   (r/create-element "div" #js{:className "foo"}
 *  "Hi " (r/as-element [:strong "world!"])
 *   ```
 * 
 *   which is equivalent to
 * 
 *   ```cljs
 *   [:div.foo "Hi" [:strong "world!"]]
 *   ```
 */
reagent.core.create_element = (function reagent$core$create_element(var_args){
var G__409 = arguments.length;
switch (G__409) {
case (1):
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___411 = arguments.length;
var i__12667__auto___412 = (0);
while(true){
if((i__12667__auto___412 < len__12666__auto___411)){
args_arr__12684__auto__.push((arguments[i__12667__auto___412]));

var G__413 = (i__12667__auto___412 + (1));
i__12667__auto___412 = G__413;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((3)),(0),null));
return reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__12685__auto__);

}
});

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (type){
return reagent.core.create_element.call(null,type,null);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (type,props){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(cljs.core/not (cljs.core/map? props))"].join('')));
}

return react.createElement.call(null,type,props);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(cljs.core/not (cljs.core/map? props))"].join('')));
}

return react.createElement.call(null,type,props,child);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(cljs.core/not (cljs.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,react.createElement,type,props,child,children);
}));

/** @this {Function} */
(reagent.core.create_element.cljs$lang$applyTo = (function (seq405){
var G__406 = cljs.core.first.call(null,seq405);
var seq405__$1 = cljs.core.next.call(null,seq405);
var G__407 = cljs.core.first.call(null,seq405__$1);
var seq405__$2 = cljs.core.next.call(null,seq405__$1);
var G__408 = cljs.core.first.call(null,seq405__$2);
var seq405__$3 = cljs.core.next.call(null,seq405__$2);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__406,G__407,G__408,seq405__$3);
}));

(reagent.core.create_element.cljs$lang$maxFixedArity = (3));

/**
 * Turns a vector of Hiccup syntax into a React element. Returns form
 *   unchanged if it is not a vector.
 */
reagent.core.as_element = (function reagent$core$as_element(var_args){
var G__415 = arguments.length;
switch (G__415) {
case (1):
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.as_element.cljs$core$IFn$_invoke$arity$1 = (function (form){
return reagent.impl.protocols.as_element.call(null,reagent.impl.template.default_compiler,form);
}));

(reagent.core.as_element.cljs$core$IFn$_invoke$arity$2 = (function (form,compiler){
return reagent.impl.protocols.as_element.call(null,compiler,form);
}));

(reagent.core.as_element.cljs$lang$maxFixedArity = (2));

/**
 * Returns an adapter for a native React class, that may be used
 *   just like a Reagent component function or class in Hiccup forms.
 */
reagent.core.adapt_react_class = (function reagent$core$adapt_react_class(c){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.template.adapt_react_class.call(null,c);
});
/**
 * Returns an adapter for a Reagent component, that may be used from
 *   React, for example in JSX. A single argument, props, is passed to
 *   the component, converted to a map.
 */
reagent.core.reactify_component = (function reagent$core$reactify_component(var_args){
var G__418 = arguments.length;
switch (G__418) {
case (1):
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent.core.reactify_component.call(null,c,reagent.impl.template.default_compiler);
}));

(reagent.core.reactify_component.cljs$core$IFn$_invoke$arity$2 = (function (c,compiler){
if(cljs.core.truth_(c)){
} else {
throw (new Error(["Assert failed: ",["Component"," must not be nil"].join(''),"\n","c"].join('')));
}

return reagent.impl.component.reactify_component.call(null,c,compiler);
}));

(reagent.core.reactify_component.cljs$lang$maxFixedArity = (2));

/**
 * Creates JS class based on provided Clojure map, for example:
 * 
 *   ```cljs
 *   {;; Constructor
 * :constructor (fn [this props])
 * :get-initial-state (fn [this])
 * ;; Static methods
 * :get-derived-state-from-props (fn [props state] partial-state)
 * :get-derived-state-from-error (fn [error] partial-state)
 * ;; Methods
 * :get-snapshot-before-update (fn [this old-argv new-argv] snapshot)
 * :should-component-update (fn [this old-argv new-argv])
 * :component-did-mount (fn [this])
 * :component-did-update (fn [this old-argv old-state snapshot])
 * :component-will-unmount (fn [this])
 * :component-did-catch (fn [this error info])
 * :reagent-render (fn [args....])
 * ;; Or alternatively:
 * :render (fn [this])
 * ;; Deprecated methods:
 * :UNSAFE_component-will-receive-props (fn [this new-argv])
 * :UNSAFE_component-will-update (fn [this new-argv new-state])
 * :UNSAFE_component-will-mount (fn [this])}
 *   ```
 * 
 *   Everything is optional, except either :reagent-render or :render.
 * 
 *   Map keys should use `React.Component` method names (https://reactjs.org/docs/react-component.html),
 *   and can be provided in snake-case or camelCase.
 * 
 *   State can be initialized using constructor, which matches React.Component class,
 *   or using getInitialState which matches old React createClass function and is
 *   now implemented by Reagent for compatibility.
 * 
 *   State can usually be anything, e.g. Cljs object. But if using getDerivedState
 *   methods, the state has to be plain JS object as React implementation uses
 *   Object.assign to merge partial state into the current state.
 * 
 *   React built-in static methods or properties are automatically defined as statics.
 */
reagent.core.create_class = (function reagent$core$create_class(var_args){
var G__421 = arguments.length;
switch (G__421) {
case (1):
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.create_class.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return reagent.impl.component.create_class.call(null,spec,reagent.impl.template.default_compiler);
}));

(reagent.core.create_class.cljs$core$IFn$_invoke$arity$2 = (function (spec,compiler){
return reagent.impl.component.create_class.call(null,spec,compiler);
}));

(reagent.core.create_class.cljs$lang$maxFixedArity = (2));

/**
 * Returns the current React component (a.k.a `this`) in a component
 *   function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns an atom containing a components state.
 */
reagent.core.state_atom = (function reagent$core$state_atom(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.state_atom.call(null,this$);
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 *   Equivalent to `(deref (r/state-atom this))`
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return cljs.core.deref.call(null,reagent.core.state_atom.call(null,this$));
});
/**
 * Set state of a component.
 *   Equivalent to `(reset! (state-atom this) new-state)`
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(cljs.core/or (cljs.core/nil? new-state) (cljs.core/map? new-state))"].join('')));
}

return cljs.core.reset_BANG_.call(null,reagent.core.state_atom.call(null,this$),new_state);
});
/**
 * Merge component state with new-state.
 *   Equivalent to `(swap! (state-atom this) merge new-state)`
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

if((((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state)))){
} else {
throw (new Error(["Assert failed: ",["Expected a valid new state, not ",cljs.core.pr_str.call(null,new_state)].join(''),"\n","(cljs.core/or (cljs.core/nil? new-state) (cljs.core/map? new-state))"].join('')));
}

return cljs.core.swap_BANG_.call(null,reagent.core.state_atom.call(null,this$),cljs.core.merge,new_state);
});
/**
 * Force a component to re-render immediately.
 * 
 *   If the second argument is true, child components will also be
 *   re-rendered, even is their arguments have not changed.
 */
reagent.core.force_update = (function reagent$core$force_update(var_args){
var G__424 = arguments.length;
switch (G__424) {
case (1):
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.force_update.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.core.force_update.cljs$core$IFn$_invoke$arity$1 = (function (this$){
return reagent.core.force_update.call(null,this$,false);
}));

(reagent.core.force_update.cljs$core$IFn$_invoke$arity$2 = (function (this$,deep){
reagent.ratom.flush_BANG_.call(null);

reagent.impl.util.force_update.call(null,this$,deep);

return reagent.impl.batching.flush_after_render.call(null);
}));

(reagent.core.force_update.cljs$lang$maxFixedArity = (2));

/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.component.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error(["Assert failed: ",["Expected a reagent component, not ",cljs.core.pr_str.call(null,this$)].join(''),"\n","(comp/reagent-component? this)"].join('')));
}

return reagent.impl.component.get_argv.call(null,this$);
});
/**
 * Function which normalizes and combines class values to a string
 * 
 *   Reagent allows classes to be defined as:
 *   - Strings
 *   - Named objects (Symbols or Keywords)
 *   - Collections of previous types
 */
reagent.core.class_names = (function reagent$core$class_names(var_args){
var G__430 = arguments.length;
switch (G__430) {
case (0):
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___432 = arguments.length;
var i__12667__auto___433 = (0);
while(true){
if((i__12667__auto___433 < len__12666__auto___432)){
args_arr__12684__auto__.push((arguments[i__12667__auto___433]));

var G__434 = (i__12667__auto___433 + (1));
i__12667__auto___433 = G__434;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((2)),(0),null));
return reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12685__auto__);

}
});

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$1 = (function (class$){
return reagent.impl.util.class_names.call(null,class$);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$2 = (function (class1,class2){
return reagent.impl.util.class_names.call(null,class1,class2);
}));

(reagent.core.class_names.cljs$core$IFn$_invoke$arity$variadic = (function (class1,class2,others){
return cljs.core.apply.call(null,reagent.impl.util.class_names,class1,class2,others);
}));

/** @this {Function} */
(reagent.core.class_names.cljs$lang$applyTo = (function (seq427){
var G__428 = cljs.core.first.call(null,seq427);
var seq427__$1 = cljs.core.next.call(null,seq427);
var G__429 = cljs.core.first.call(null,seq427__$1);
var seq427__$2 = cljs.core.next.call(null,seq427__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__428,G__429,seq427__$2);
}));

(reagent.core.class_names.cljs$lang$maxFixedArity = (2));

/**
 * Utility function that merges some maps, handling `:class` and `:style`.
 * 
 *   The :class value is always normalized (using `class-names`) even if no
 *   merging is done.
 */
reagent.core.merge_props = (function reagent$core$merge_props(var_args){
var G__439 = arguments.length;
switch (G__439) {
case (0):
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0();

break;
case (1):
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___441 = arguments.length;
var i__12667__auto___442 = (0);
while(true){
if((i__12667__auto___442 < len__12666__auto___441)){
args_arr__12684__auto__.push((arguments[i__12667__auto___442]));

var G__443 = (i__12667__auto___442 + (1));
i__12667__auto___442 = G__443;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((2)),(0),null));
return reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12685__auto__);

}
});

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$0 = (function (){
return reagent.impl.util.merge_props.call(null);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$1 = (function (defaults){
return reagent.impl.util.merge_props.call(null,defaults);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$2 = (function (defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
}));

(reagent.core.merge_props.cljs$core$IFn$_invoke$arity$variadic = (function (defaults,props,others){
return cljs.core.apply.call(null,reagent.impl.util.merge_props,defaults,props,others);
}));

/** @this {Function} */
(reagent.core.merge_props.cljs$lang$applyTo = (function (seq436){
var G__437 = cljs.core.first.call(null,seq436);
var seq436__$1 = cljs.core.next.call(null,seq436);
var G__438 = cljs.core.first.call(null,seq436__$1);
var seq436__$2 = cljs.core.next.call(null,seq436__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__437,G__438,seq436__$2);
}));

(reagent.core.merge_props.cljs$lang$maxFixedArity = (2));

/**
 * Render dirty components immediately.
 * 
 *   Note that this may not work in event handlers, since React.js does
 *   batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 *   Reagent components that derefs one of these are automatically
 *   re-rendered.
 */
reagent.core.atom = (function reagent$core$atom(var_args){
var G__447 = arguments.length;
switch (G__447) {
case (1):
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__12684__auto__ = [];
var len__12666__auto___449 = arguments.length;
var i__12667__auto___450 = (0);
while(true){
if((i__12667__auto___450 < len__12666__auto___449)){
args_arr__12684__auto__.push((arguments[i__12667__auto___450]));

var G__451 = (i__12667__auto___450 + (1));
i__12667__auto___450 = G__451;
continue;
} else {
}
break;
}

var argseq__12685__auto__ = (new cljs.core.IndexedSeq(args_arr__12684__auto__.slice((1)),(0),null));
return reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12685__auto__);

}
});

(reagent.core.atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
return reagent.ratom.atom.call(null,x);
}));

(reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic = (function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
}));

/** @this {Function} */
(reagent.core.atom.cljs$lang$applyTo = (function (seq445){
var G__446 = cljs.core.first.call(null,seq445);
var seq445__$1 = cljs.core.next.call(null,seq445);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__446,seq445__$1);
}));

(reagent.core.atom.cljs$lang$maxFixedArity = (1));

/**
 * Takes a function and optional arguments, and returns a derefable
 *   containing the output of that function. If the function derefs
 *   Reagent atoms (or track, etc), the value will be updated whenever
 *   the atom changes.
 * 
 *   In other words, `@(track foo bar)` will produce the same result
 *   as `(foo bar)`, but foo will only be called again when the atoms it
 *   depends on changes, and will only trigger updates of components when
 *   its result changes.
 * 
 *   track is lazy, i.e the function is only evaluated on deref.
 */
reagent.core.track = (function reagent$core$track(var_args){
var args__12669__auto__ = [];
var len__12666__auto___454 = arguments.length;
var i__12667__auto___455 = (0);
while(true){
if((i__12667__auto___455 < len__12666__auto___454)){
args__12669__auto__.push((arguments[i__12667__auto___455]));

var G__456 = (i__12667__auto___455 + (1));
i__12667__auto___455 = G__456;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return reagent.core.track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(reagent.core.track.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track.call(null,f,args);
}));

(reagent.core.track.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.track.cljs$lang$applyTo = (function (seq452){
var G__453 = cljs.core.first.call(null,seq452);
var seq452__$1 = cljs.core.next.call(null,seq452);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__453,seq452__$1);
}));

/**
 * An eager version of track. The function passed is called
 *   immediately, and continues to be called when needed, until stopped
 *   with dispose!.
 */
reagent.core.track_BANG_ = (function reagent$core$track_BANG_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___459 = arguments.length;
var i__12667__auto___460 = (0);
while(true){
if((i__12667__auto___460 < len__12666__auto___459)){
args__12669__auto__.push((arguments[i__12667__auto___460]));

var G__461 = (i__12667__auto___460 + (1));
i__12667__auto___460 = G__461;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(reagent.core.track_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

return reagent.ratom.make_track_BANG_.call(null,f,args);
}));

(reagent.core.track_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.track_BANG_.cljs$lang$applyTo = (function (seq457){
var G__458 = cljs.core.first.call(null,seq457);
var seq457__$1 = cljs.core.next.call(null,seq457);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__458,seq457__$1);
}));

/**
 * Stop the result of track! from updating.
 */
reagent.core.dispose_BANG_ = (function reagent$core$dispose_BANG_(x){
return reagent.ratom.dispose_BANG_.call(null,x);
});
/**
 * Provide a combination of value and callback, that looks like an atom.
 * 
 *   The first argument can be any value, that will be returned when the
 *   result is deref'ed.
 * 
 *   The second argument should be a function, that is called with the
 *   optional extra arguments provided to wrap, and the new value of the
 *   resulting 'atom'.
 * 
 *   Use for example like this:
 * 
 *   ```cljs
 *   (wrap (:foo @state)
 *      swap! state assoc :foo)
 *   ```
 * 
 *   Probably useful only for passing to child components.
 */
reagent.core.wrap = (function reagent$core$wrap(var_args){
var args__12669__auto__ = [];
var len__12666__auto___465 = arguments.length;
var i__12667__auto___466 = (0);
while(true){
if((i__12667__auto___466 < len__12666__auto___465)){
args__12669__auto__.push((arguments[i__12667__auto___466]));

var G__467 = (i__12667__auto___466 + (1));
i__12667__auto___466 = G__467;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.core.wrap.cljs$core$IFn$_invoke$arity$variadic = (function (value,reset_fn,args){
if(cljs.core.ifn_QMARK_.call(null,reset_fn)){
} else {
throw (new Error(["Assert failed: ",["Expected something callable, not ",cljs.core.pr_str.call(null,reset_fn)].join(''),"\n","(cljs.core/ifn? reset-fn)"].join('')));
}

return reagent.ratom.make_wrapper.call(null,value,reset_fn,args);
}));

(reagent.core.wrap.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.core.wrap.cljs$lang$applyTo = (function (seq462){
var G__463 = cljs.core.first.call(null,seq462);
var seq462__$1 = cljs.core.next.call(null,seq462);
var G__464 = cljs.core.first.call(null,seq462__$1);
var seq462__$2 = cljs.core.next.call(null,seq462__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__463,G__464,seq462__$2);
}));

/**
 * Provide a cursor into a Reagent atom.
 * 
 *   Behaves like a Reagent atom but focuses updates and derefs to
 *   the specified path within the wrapped Reagent atom. e.g.,
 * 
 *   ```cljs
 *   (let [c (cursor ra [:nested :content])]
 *  ... @c ;; equivalent to (get-in @ra [:nested :content])
 *  ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 *  ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 *  )
 *   ```
 * 
 *   The first parameter can also be a function, that should look
 *   something like this:
 * 
 *   ```cljs
 *   (defn set-get
 *  ([k] (get-in @state k))
 *  ([k v] (swap! state assoc-in k v)))
 *   ```
 * 
 *   The function will be called with one argument – the path passed to
 *   cursor – when the cursor is deref'ed, and two arguments (path and
 *   new value) when the cursor is modified.
 * 
 *   Given that set-get function, (and that state is a Reagent atom, or
 *   another cursor) these cursors are equivalent:
 *   `(cursor state [:foo])` and `(cursor set-get [:foo])`.
 * 
 *   Note that a cursor is lazy: its value will not change until it is
 *   used. This may be noticed with add-watch.
 */
reagent.core.cursor = (function reagent$core$cursor(src,path){
return reagent.ratom.cursor.call(null,src,path);
});
/**
 * Swaps the value of a to be `(apply f current-value-of-atom args)`.
 * 
 *   rswap! works like swap!, except that recursive calls to rswap! on
 *   the same atom are allowed – and it always returns nil.
 */
reagent.core.rswap_BANG_ = (function reagent$core$rswap_BANG_(var_args){
var args__12669__auto__ = [];
var len__12666__auto___473 = arguments.length;
var i__12667__auto___474 = (0);
while(true){
if((i__12667__auto___474 < len__12666__auto___473)){
args__12669__auto__.push((arguments[i__12667__auto___474]));

var G__475 = (i__12667__auto___474 + (1));
i__12667__auto___474 = G__475;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((2) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((2)),(0),null)):null);
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__12670__auto__);
});

(reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
if((((!((a == null))))?(((((a.cljs$lang$protocol_mask$partition1$ & (16384))) || ((cljs.core.PROTOCOL_SENTINEL === a.cljs$core$IAtom$))))?true:(((!a.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,a))){
} else {
throw (new Error("Assert failed: (satisfies? IAtom a)"));
}

if(cljs.core.ifn_QMARK_.call(null,f)){
} else {
throw (new Error("Assert failed: (ifn? f)"));
}

if(cljs.core.truth_(a.rswapping)){
(function (){var or__10116__auto__ = a.rswapfs;
if(cljs.core.truth_(or__10116__auto__)){
return or__10116__auto__;
} else {
return (a.rswapfs = []);
}
})().push((function (p1__13_SHARP_){
return cljs.core.apply.call(null,f,p1__13_SHARP_,args);
}));
} else {
(a.rswapping = true);

try{cljs.core.swap_BANG_.call(null,a,(function (state){
var s = cljs.core.apply.call(null,f,state,args);
while(true){
var temp__9714__auto__ = (function (){var G__472 = a;
var G__472__$1 = (((G__472 == null))?null:G__472.rswapfs);
if((G__472__$1 == null)){
return null;
} else {
return G__472__$1.shift();
}
})();
if((temp__9714__auto__ == null)){
return s;
} else {
var sf = temp__9714__auto__;
var G__476 = sf.call(null,s);
s = G__476;
continue;
}
break;
}
}));
}finally {(a.rswapping = false);
}}

return null;
}));

(reagent.core.rswap_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(reagent.core.rswap_BANG_.cljs$lang$applyTo = (function (seq468){
var G__469 = cljs.core.first.call(null,seq468);
var seq468__$1 = cljs.core.next.call(null,seq468);
var G__470 = cljs.core.first.call(null,seq468__$1);
var seq468__$2 = cljs.core.next.call(null,seq468__$1);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__469,G__470,seq468__$2);
}));

/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just before components are rendered.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.do_before_flush.call(null,f);
});
/**
 * Run f using requestAnimationFrame or equivalent.
 * 
 *   f will be called just after any queued renders in the next animation
 *   frame (and even if no renders actually occur).
 */
reagent.core.after_render = (function reagent$core$after_render(f){
return reagent.impl.batching.do_after_render.call(null,f);
});
/**
 * Works just like clojure.core/partial, but the result can be compared with =
 */
reagent.core.partial = (function reagent$core$partial(var_args){
var args__12669__auto__ = [];
var len__12666__auto___479 = arguments.length;
var i__12667__auto___480 = (0);
while(true){
if((i__12667__auto___480 < len__12666__auto___479)){
args__12669__auto__.push((arguments[i__12667__auto___480]));

var G__481 = (i__12667__auto___480 + (1));
i__12667__auto___480 = G__481;
continue;
} else {
}
break;
}

var argseq__12670__auto__ = ((((1) < args__12669__auto__.length))?(new cljs.core.IndexedSeq(args__12669__auto__.slice((1)),(0),null)):null);
return reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__12670__auto__);
});

(reagent.core.partial.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return reagent.impl.util.make_partial_fn.call(null,f,args);
}));

(reagent.core.partial.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(reagent.core.partial.cljs$lang$applyTo = (function (seq477){
var G__478 = cljs.core.first.call(null,seq477);
var seq477__$1 = cljs.core.next.call(null,seq477);
var self__12658__auto__ = this;
return self__12658__auto__.cljs$core$IFn$_invoke$arity$variadic(G__478,seq477__$1);
}));

/**
 * Creates Compiler object with given `opts`,
 *   this can be passed to `render`, `as-element` and other functions to control
 *   how they turn the Reagent-style Hiccup into React components and elements.
 */
reagent.core.create_compiler = (function reagent$core$create_compiler(opts){
return reagent.impl.template.create_compiler.call(null,opts);
});
/**
 * Globally sets the Compiler object used by `render`, `as-element` and other
 *   calls by default, when no `compiler` parameter is provided.
 * 
 *   Use `nil` value to restore the original default compiler.
 */
reagent.core.set_default_compiler_BANG_ = (function reagent$core$set_default_compiler_BANG_(compiler){
return reagent.impl.template.set_default_compiler_BANG_.call(null,(((compiler == null))?reagent.impl.template.default_compiler_STAR_:compiler));
});

//# sourceURL=reagent/core.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9jb3JlLmpzIiwic291cmNlcyI6WyJjb3JlLmNsanMiXSwibGluZUNvdW50Ijo5NTIsIm1hcHBpbmdzIjoiO0FBY0EsQUFBS0EseUJBQVVDO0FBRWYsQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFBLHNDQUFBQyxwRUFBTUU7QUFBTixBQUFBLElBQUFELFNBQUEsQUFBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLE9BQUFDLDBEQUFBLENBQUEsVUFBQTs7O0tBQUE7QUFBQSxPQUFBQSwwREFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsMERBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsSUFBQUMsMEJBQUE7QUFBQSxBQUFBLElBQUFDLHlCQUFBLEFBQUE7QUFBQSxBQUFBLElBQUFDLHVCQUFBOztBQUFBLEFBQUEsR0FBQSxDQUFBQSx1QkFBQUQ7QUFBQSxBQUFBLEFBQUFELDZCQUFBLENBQUEsVUFBQUU7O0FBQUEsYUFBQSxDQUFBQSx1QkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQUMsd0JBQUEsMEJBQUEsQUFBQUgsOEJBQUEsS0FBQSxJQUFBLDVEQXFwRzBEK0k7QUFycEcxRCxBQUFBLE9BQUFoSixpRUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQUk7Ozs7O0FBQUEsQ0FBQSw0REFBQSw1REFBTUosdUVBaUJGVTtBQWpCSixBQWtCRyxrREFBQSwzQ0FBQ1Ysc0NBQWVVOzs7QUFsQm5CLENBQUEsNERBQUEsNURBQU1WLHVFQW1CRlUsS0FBS0M7QUFuQlQsQUFvQkcsR0FBQSxHQUFBLEFBQUFDLCtCQUFrQkQ7QUFBbEI7QUFBQSxBQUFBLE1BQUEsS0FBQUUsTUFBQSxDQUFBLGtCQUFBLENBQUEsNkJBQUEsQUFBQUMsNENBQUEsS0FBQSx0QkFBa0JIOzs7QUFDbEIsT0FBQ0ksOEJBQW9CTCxLQUFLQzs7O0FBckI3QixDQUFB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cUYseUJBQUEsQ0FBQSxVQUFBcEY7O0FBQUEsYUFBQSxDQUFBQSx1QkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQXFGLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFELDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBdXdGc0R5RDtBQXZ3RnRELEFBQUEsT0FBQVosMERBQUEsQ0FBQSxVQUFBLE1BQUE1Qzs7O0FBQUEsQUFBQSxDQUFBLDREQUFBLDVEQUFNNEMsdUVBRUh4QyxFQUFJQztBQUZQLEFBR0UsT0FBQzBDLDRDQUFxQjNDLEVBQUVDOzs7QUFIMUIsQ0FBQSwrQ0FBQSwvQ0FBTXVDOztBQUFOO0FBQUEsQ0FBQSx5Q0FBQSxXQUFBQyxwREFBTUQ7QUFBTixBQUFBLElBQUFFLFNBQUEsMEJBQUFELDFCQXdzRmdEUztJQXhzRmhEVCxhQUFBLHlCQUFBQSx6QkF5c0ZrRFU7QUF6c0ZsRCxBQUFBLElBQUF0SSxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUE2SCxPQUFBRDs7O0FBQUEsQUFLQTs7Ozs7K0JBQUEsL0JBQU1HLHNFQUlIQztBQUpILEFBS0UsT0FBQ0MsZ0RBQXFCRDs7QUFFeEI7Ozs7OzswQ0FBQSwxQ0FBTUUsNEZBS0huSDtBQUxILEFBTUUsT0FBQ29ILDJEQUEyQixFQUFJLGFBQUEsWkFBTXBILG1CQUNScUgsNkNBQ0FySCIsIm5hbWVzIjpbInJlYWdlbnQuY29yZS9pcy1jbGllbnQiLCJyZWFnZW50LmltcGwudXRpbC9pcy1jbGllbnQiLCJ2YXJfYXJncyIsIkdfXzQwOSIsInJlYWdlbnQuY29yZS9jcmVhdGUtZWxlbWVudCIsImFyZ3MtYXJyX18xMjY4NF9fYXV0b19fIiwibGVuX18xMjY2Nl9fYXV0b19fIiwiaV9fMTI2NjdfX2F1dG9fXyIsImFyZ3NlcV9fMTI2ODVfX2F1dG9fXyIsInNlcTQwNSIsIkdfXzQwNiIsIkdfXzQwNyIsIkdfXzQwOCIsInNlbGZfXzEyNjU4X19hdXRvX18iLCJ0eXBlIiwicHJvcHMiLCJjbGpzLmNvcmUvbWFwPyIsImpzL0Vycm9yIiwiY2xqcy5jb3JlL3ByLXN0ciIsInJlYWN0L2NyZWF0ZUVsZW1lbnQiLCJjaGlsZCIsImNoaWxkcmVuIiwiY2xqcy5jb3JlL2FwcGx5IiwiR19fNDE1IiwicmVhZ2VudC5jb3JlL2FzLWVsZW1lbnQiLCJmb3JtIiwicmVhZ2VudC5pbXBsLnByb3RvY29scy9hcy1lbGVtZW50IiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2RlZmF1bHQtY29tcGlsZXIiLCJjb21waWxlciIsInJlYWdlbnQuY29yZS9hZGFwdC1yZWFjdC1jbGFzcyIsImMiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvYWRhcHQtcmVhY3QtY2xhc3MiLCJHX180MTgiLCJyZWFnZW50LmNvcmUvcmVhY3RpZnktY29tcG9uZW50IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yZWFjdGlmeS1jb21wb25lbnQiLCJHX180MjEiLCJyZWFnZW50LmNvcmUvY3JlYXRlLWNsYXNzIiwic3BlYyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvY3JlYXRlLWNsYXNzIiwicmVhZ2VudC5jb3JlL2N1cnJlbnQtY29tcG9uZW50IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC8qY3VycmVudC1jb21wb25lbnQqIiwicmVhZ2VudC5jb3JlL3N0YXRlLWF0b20iLCJ0aGlzIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9yZWFnZW50LWNvbXBvbmVudD8iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L3N0YXRlLWF0b20iLCJyZWFnZW50LmNvcmUvc3RhdGUiLCJjbGpzLmNvcmUvZGVyZWYiLCJyZWFnZW50LmNvcmUvcmVwbGFjZS1zdGF0ZSIsIm5ldy1zdGF0ZSIsImNsanMuY29yZS9yZXNldCEiLCJyZWFnZW50LmNvcmUvc2V0LXN0YXRlIiwiY2xqcy5jb3JlL3N3YXAhIiwiY2xqcy5jb3JlL21lcmdlIiwiR19fNDI0IiwicmVhZ2VudC5jb3JlL2ZvcmNlLXVwZGF0ZSIsImRlZXAiLCJyZWFnZW50LnJhdG9tL2ZsdXNoISIsInJlYWdlbnQuaW1wbC51dGlsL2ZvcmNlLXVwZGF0ZSIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9mbHVzaC1hZnRlci1yZW5kZXIiLCJyZWFnZW50LmNvcmUvcHJvcHMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC1wcm9wcyIsInJlYWdlbnQuY29yZS9jaGlsZHJlbiIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvZ2V0LWNoaWxkcmVuIiwicmVhZ2VudC5jb3JlL2FyZ3YiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC1hcmd2IiwiR19fNDMwIiwicmVhZ2VudC5jb3JlL2NsYXNzLW5hbWVzIiwic2VxNDI3IiwiR19fNDI4IiwiR19fNDI5IiwiY2xhc3MiLCJyZWFnZW50LmltcGwudXRpbC9jbGFzcy1uYW1lcyIsImNsYXNzMSIsImNsYXNzMiIsIm90aGVycyIsIkdfXzQzOSIsInJlYWdlbnQuY29yZS9tZXJnZS1wcm9wcyIsInNlcTQzNiIsIkdfXzQzNyIsIkdfXzQzOCIsInJlYWdlbnQuaW1wbC51dGlsL21lcmdlLXByb3BzIiwiZGVmYXVsdHMiLCJyZWFnZW50LmNvcmUvZmx1c2giLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvZmx1c2giLCJHX180NDciLCJyZWFnZW50LmNvcmUvYXRvbSIsInNlcTQ0NSIsIkdfXzQ0NiIsIngiLCJyZWFnZW50LnJhdG9tL2F0b20iLCJyZXN0IiwiYXJnc19fMTI2NjlfX2F1dG9fXyIsImFyZ3NlcV9fMTI2NzBfX2F1dG9fXyIsInJlYWdlbnQuY29yZS90cmFjayIsInNlcTQ1MiIsIkdfXzQ1MyIsImYiLCJhcmdzIiwiY2xqcy5jb3JlL2lmbj8iLCJyZWFnZW50LnJhdG9tL21ha2UtdHJhY2siLCJyZWFnZW50LmNvcmUvdHJhY2shIiwic2VxNDU3IiwiR19fNDU4IiwicmVhZ2VudC5yYXRvbS9tYWtlLXRyYWNrISIsInJlYWdlbnQuY29yZS9kaXNwb3NlISIsInJlYWdlbnQucmF0b20vZGlzcG9zZSEiLCJyZWFnZW50LmNvcmUvd3JhcCIsInNlcTQ2MiIsIkdfXzQ2MyIsIkdfXzQ2NCIsInZhbHVlIiwicmVzZXQtZm4iLCJyZWFnZW50LnJhdG9tL21ha2Utd3JhcHBlciIsInJlYWdlbnQuY29yZS9jdXJzb3IiLCJzcmMiLCJwYXRoIiwicmVhZ2VudC5yYXRvbS9jdXJzb3IiLCJyZWFnZW50LmNvcmUvcnN3YXAhIiwic2VxNDY4IiwiR19fNDY5IiwiR19fNDcwIiwiYSIsImNsanMuY29yZS9QUk9UT0NPTF9TRU5USU5FTCIsImNsanMuY29yZS9uYXRpdmUtc2F0aXNmaWVzPyIsImNsanMuY29yZS9JQXRvbSIsIm9yX18xMDExNl9fYXV0b19fIiwicDFfXzEzIyIsInN0YXRlIiwicyIsInRlbXBfXzk3MTRfX2F1dG9fXyIsInNmIiwiR19fNDcyIiwicmVhZ2VudC5jb3JlL25leHQtdGljayIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9kby1iZWZvcmUtZmx1c2giLCJyZWFnZW50LmNvcmUvYWZ0ZXItcmVuZGVyIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2RvLWFmdGVyLXJlbmRlciIsInJlYWdlbnQuY29yZS9wYXJ0aWFsIiwic2VxNDc3IiwiR19fNDc4IiwicmVhZ2VudC5pbXBsLnV0aWwvbWFrZS1wYXJ0aWFsLWZuIiwicmVhZ2VudC5jb3JlL2NyZWF0ZS1jb21waWxlciIsIm9wdHMiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvY3JlYXRlLWNvbXBpbGVyIiwicmVhZ2VudC5jb3JlL3NldC1kZWZhdWx0LWNvbXBpbGVyISIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9zZXQtZGVmYXVsdC1jb21waWxlciEiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvZGVmYXVsdC1jb21waWxlcioiLCJjbGpzLmNvcmUvZmlyc3QiLCJjbGpzLmNvcmUvbmV4dCIsImNsanMuY29yZS9JbmRleGVkU2VxIl0sInNvdXJjZXNDb250ZW50IjpbIihucyByZWFnZW50LmNvcmVcbiAgKDpyZXF1aXJlLW1hY3JvcyBbcmVhZ2VudC5jb3JlXSlcbiAgKDpyZWZlci1jbG9qdXJlIDpleGNsdWRlIFtwYXJ0aWFsIGF0b20gZmx1c2hdKVxuICAoOnJlcXVpcmUgW3JlYWN0IDphcyByZWFjdF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwudGVtcGxhdGUgOmFzIHRtcGxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmNvbXBvbmVudCA6YXMgY29tcF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwudXRpbCA6YXMgdXRpbF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwuYmF0Y2hpbmcgOmFzIGJhdGNoXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5wcm90b2NvbHMgOmFzIHBdXG4gICAgICAgICAgICBbcmVhZ2VudC5yYXRvbSA6YXMgcmF0b21dXG4gICAgICAgICAgICBbcmVhZ2VudC5kZWJ1ZyA6YXMgZGViIDpyZWZlci1tYWNyb3MgW2Fzc2VydC1zb21lIGFzc2VydC1jb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXJ0LWpzLW9iamVjdCBhc3NlcnQtbmV3LXN0YXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC1jYWxsYWJsZV1dKSlcblxuKGRlZiBpcy1jbGllbnQgdXRpbC9pcy1jbGllbnQpXG5cbihkZWZuIGNyZWF0ZS1lbGVtZW50XG4gIFwiQ3JlYXRlIGEgbmF0aXZlIFJlYWN0IGVsZW1lbnQsIGJ5IGNhbGxpbmcgUmVhY3QuY3JlYXRlRWxlbWVudCBkaXJlY3RseS5cblxuICBUaGF0IG1lYW5zIHRoZSBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhIGphdmFzY3JpcHQgb2JqZWN0IChvciBuaWwpLCBhbmRcbiAgdGhhdCBhbnkgUmVhZ2VudCBoaWNjdXAgZm9ybXMgbXVzdCBiZSBwcm9jZXNzZWQgd2l0aCBhcy1lbGVtZW50LiBGb3IgZXhhbXBsZVxuICBsaWtlIHRoaXM6XG5cbiAgYGBgY2xqc1xuICAoci9jcmVhdGUtZWxlbWVudCBcXFwiZGl2XFxcIiAjanN7OmNsYXNzTmFtZSBcXFwiZm9vXFxcIn1cbiAgICBcXFwiSGkgXFxcIiAoci9hcy1lbGVtZW50IFs6c3Ryb25nIFxcXCJ3b3JsZCFcXFwiXSlcbiAgYGBgXG5cbiAgd2hpY2ggaXMgZXF1aXZhbGVudCB0b1xuXG4gIGBgYGNsanNcbiAgWzpkaXYuZm9vIFxcXCJIaVxcXCIgWzpzdHJvbmcgXFxcIndvcmxkIVxcXCJdXVxuICBgYGBcIlxuICAoW3R5cGVdXG4gICAoY3JlYXRlLWVsZW1lbnQgdHlwZSBuaWwpKVxuICAoW3R5cGUgcHJvcHNdXG4gICAoYXNzZXJ0LWpzLW9iamVjdCBwcm9wcylcbiAgIChyZWFjdC9jcmVhdGVFbGVtZW50IHR5cGUgcHJvcHMpKVxuICAoW3R5cGUgcHJvcHMgY2hpbGRdXG4gICAoYXNzZXJ0LWpzLW9iamVjdCBwcm9wcylcbiAgIChyZWFjdC9jcmVhdGVFbGVtZW50IHR5cGUgcHJvcHMgY2hpbGQpKVxuICAoW3R5cGUgcHJvcHMgY2hpbGQgJiBjaGlsZHJlbl1cbiAgIChhc3NlcnQtanMtb2JqZWN0IHByb3BzKVxuICAgKGFwcGx5IHJlYWN0L2NyZWF0ZUVsZW1lbnQgdHlwZSBwcm9wcyBjaGlsZCBjaGlsZHJlbikpKVxuXG4oZGVmbiBhcy1lbGVtZW50XG4gIFwiVHVybnMgYSB2ZWN0b3Igb2YgSGljY3VwIHN5bnRheCBpbnRvIGEgUmVhY3QgZWxlbWVudC4gUmV0dXJucyBmb3JtXG4gIHVuY2hhbmdlZCBpZiBpdCBpcyBub3QgYSB2ZWN0b3IuXCJcbiAgKFtmb3JtXSAocC9hcy1lbGVtZW50IHRtcGwvZGVmYXVsdC1jb21waWxlciBmb3JtKSlcbiAgKFtmb3JtIGNvbXBpbGVyXSAocC9hcy1lbGVtZW50IGNvbXBpbGVyIGZvcm0pKSlcblxuKGRlZm4gYWRhcHQtcmVhY3QtY2xhc3NcbiAgXCJSZXR1cm5zIGFuIGFkYXB0ZXIgZm9yIGEgbmF0aXZlIFJlYWN0IGNsYXNzLCB0aGF0IG1heSBiZSB1c2VkXG4gIGp1c3QgbGlrZSBhIFJlYWdlbnQgY29tcG9uZW50IGZ1bmN0aW9uIG9yIGNsYXNzIGluIEhpY2N1cCBmb3Jtcy5cIlxuICBbY11cbiAgKGFzc2VydC1zb21lIGMgXCJDb21wb25lbnRcIilcbiAgKHRtcGwvYWRhcHQtcmVhY3QtY2xhc3MgYykpXG5cbihkZWZuIHJlYWN0aWZ5LWNvbXBvbmVudFxuICBcIlJldHVybnMgYW4gYWRhcHRlciBmb3IgYSBSZWFnZW50IGNvbXBvbmVudCwgdGhhdCBtYXkgYmUgdXNlZCBmcm9tXG4gIFJlYWN0LCBmb3IgZXhhbXBsZSBpbiBKU1guIEEgc2luZ2xlIGFyZ3VtZW50LCBwcm9wcywgaXMgcGFzc2VkIHRvXG4gIHRoZSBjb21wb25lbnQsIGNvbnZlcnRlZCB0byBhIG1hcC5cIlxuICAoW2NdIChyZWFjdGlmeS1jb21wb25lbnQgYyB0bXBsL2RlZmF1bHQtY29tcGlsZXIpKVxuICAoW2MgY29tcGlsZXJdXG4gICAoYXNzZXJ0LXNvbWUgYyBcIkNvbXBvbmVudFwiKVxuICAgKGNvbXAvcmVhY3RpZnktY29tcG9uZW50IGMgY29tcGlsZXIpKSlcblxuKGRlZm4gY3JlYXRlLWNsYXNzXG4gIFwiQ3JlYXRlcyBKUyBjbGFzcyBiYXNlZCBvbiBwcm92aWRlZCBDbG9qdXJlIG1hcCwgZm9yIGV4YW1wbGU6XG5cbiAgYGBgY2xqc1xuICB7OzsgQ29uc3RydWN0b3JcbiAgIDpjb25zdHJ1Y3RvciAoZm4gW3RoaXMgcHJvcHNdKVxuICAgOmdldC1pbml0aWFsLXN0YXRlIChmbiBbdGhpc10pXG4gICA7OyBTdGF0aWMgbWV0aG9kc1xuICAgOmdldC1kZXJpdmVkLXN0YXRlLWZyb20tcHJvcHMgKGZuIFtwcm9wcyBzdGF0ZV0gcGFydGlhbC1zdGF0ZSlcbiAgIDpnZXQtZGVyaXZlZC1zdGF0ZS1mcm9tLWVycm9yIChmbiBbZXJyb3JdIHBhcnRpYWwtc3RhdGUpXG4gICA7OyBNZXRob2RzXG4gICA6Z2V0LXNuYXBzaG90LWJlZm9yZS11cGRhdGUgKGZuIFt0aGlzIG9sZC1hcmd2IG5ldy1hcmd2XSBzbmFwc2hvdClcbiAgIDpzaG91bGQtY29tcG9uZW50LXVwZGF0ZSAoZm4gW3RoaXMgb2xkLWFyZ3YgbmV3LWFyZ3ZdKVxuICAgOmNvbXBvbmVudC1kaWQtbW91bnQgKGZuIFt0aGlzXSlcbiAgIDpjb21wb25lbnQtZGlkLXVwZGF0ZSAoZm4gW3RoaXMgb2xkLWFyZ3Ygb2xkLXN0YXRlIHNuYXBzaG90XSlcbiAgIDpjb21wb25lbnQtd2lsbC11bm1vdW50IChmbiBbdGhpc10pXG4gICA6Y29tcG9uZW50LWRpZC1jYXRjaCAoZm4gW3RoaXMgZXJyb3IgaW5mb10pXG4gICA6cmVhZ2VudC1yZW5kZXIgKGZuIFthcmdzLi4uLl0pXG4gICA7OyBPciBhbHRlcm5hdGl2ZWx5OlxuICAgOnJlbmRlciAoZm4gW3RoaXNdKVxuICAgOzsgRGVwcmVjYXRlZCBtZXRob2RzOlxuICAgOlVOU0FGRV9jb21wb25lbnQtd2lsbC1yZWNlaXZlLXByb3BzIChmbiBbdGhpcyBuZXctYXJndl0pXG4gICA6VU5TQUZFX2NvbXBvbmVudC13aWxsLXVwZGF0ZSAoZm4gW3RoaXMgbmV3LWFyZ3YgbmV3LXN0YXRlXSlcbiAgIDpVTlNBRkVfY29tcG9uZW50LXdpbGwtbW91bnQgKGZuIFt0aGlzXSl9XG4gIGBgYFxuXG4gIEV2ZXJ5dGhpbmcgaXMgb3B0aW9uYWwsIGV4Y2VwdCBlaXRoZXIgOnJlYWdlbnQtcmVuZGVyIG9yIDpyZW5kZXIuXG5cbiAgTWFwIGtleXMgc2hvdWxkIHVzZSBgUmVhY3QuQ29tcG9uZW50YCBtZXRob2QgbmFtZXMgKGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1jb21wb25lbnQuaHRtbCksXG4gIGFuZCBjYW4gYmUgcHJvdmlkZWQgaW4gc25ha2UtY2FzZSBvciBjYW1lbENhc2UuXG5cbiAgU3RhdGUgY2FuIGJlIGluaXRpYWxpemVkIHVzaW5nIGNvbnN0cnVjdG9yLCB3aGljaCBtYXRjaGVzIFJlYWN0LkNvbXBvbmVudCBjbGFzcyxcbiAgb3IgdXNpbmcgZ2V0SW5pdGlhbFN0YXRlIHdoaWNoIG1hdGNoZXMgb2xkIFJlYWN0IGNyZWF0ZUNsYXNzIGZ1bmN0aW9uIGFuZCBpc1xuICBub3cgaW1wbGVtZW50ZWQgYnkgUmVhZ2VudCBmb3IgY29tcGF0aWJpbGl0eS5cblxuICBTdGF0ZSBjYW4gdXN1YWxseSBiZSBhbnl0aGluZywgZS5nLiBDbGpzIG9iamVjdC4gQnV0IGlmIHVzaW5nIGdldERlcml2ZWRTdGF0ZVxuICBtZXRob2RzLCB0aGUgc3RhdGUgaGFzIHRvIGJlIHBsYWluIEpTIG9iamVjdCBhcyBSZWFjdCBpbXBsZW1lbnRhdGlvbiB1c2VzXG4gIE9iamVjdC5hc3NpZ24gdG8gbWVyZ2UgcGFydGlhbCBzdGF0ZSBpbnRvIHRoZSBjdXJyZW50IHN0YXRlLlxuXG4gIFJlYWN0IGJ1aWx0LWluIHN0YXRpYyBtZXRob2RzIG9yIHByb3BlcnRpZXMgYXJlIGF1dG9tYXRpY2FsbHkgZGVmaW5lZCBhcyBzdGF0aWNzLlwiXG4gIChbc3BlY11cbiAgIChjb21wL2NyZWF0ZS1jbGFzcyBzcGVjIHRtcGwvZGVmYXVsdC1jb21waWxlcikpXG4gIChbc3BlYyBjb21waWxlcl1cbiAgIChjb21wL2NyZWF0ZS1jbGFzcyBzcGVjIGNvbXBpbGVyKSkpXG5cblxuKGRlZm4gY3VycmVudC1jb21wb25lbnRcbiAgXCJSZXR1cm5zIHRoZSBjdXJyZW50IFJlYWN0IGNvbXBvbmVudCAoYS5rLmEgYHRoaXNgKSBpbiBhIGNvbXBvbmVudFxuICBmdW5jdGlvbi5cIlxuICBbXVxuICBjb21wLypjdXJyZW50LWNvbXBvbmVudCopXG5cbihkZWZuIHN0YXRlLWF0b21cbiAgXCJSZXR1cm5zIGFuIGF0b20gY29udGFpbmluZyBhIGNvbXBvbmVudHMgc3RhdGUuXCJcbiAgW3RoaXNdXG4gIChhc3NlcnQtY29tcG9uZW50IHRoaXMpXG4gIChjb21wL3N0YXRlLWF0b20gdGhpcykpXG5cbihkZWZuIHN0YXRlXG4gIFwiUmV0dXJucyB0aGUgc3RhdGUgb2YgYSBjb21wb25lbnQsIGFzIHNldCB3aXRoIHJlcGxhY2Utc3RhdGUgb3Igc2V0LXN0YXRlLlxuICBFcXVpdmFsZW50IHRvIGAoZGVyZWYgKHIvc3RhdGUtYXRvbSB0aGlzKSlgXCJcbiAgW3RoaXNdXG4gIChhc3NlcnQtY29tcG9uZW50IHRoaXMpXG4gIChkZXJlZiAoc3RhdGUtYXRvbSB0aGlzKSkpXG5cbihkZWZuIHJlcGxhY2Utc3RhdGVcbiAgXCJTZXQgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gIEVxdWl2YWxlbnQgdG8gYChyZXNldCEgKHN0YXRlLWF0b20gdGhpcykgbmV3LXN0YXRlKWBcIlxuICBbdGhpcyBuZXctc3RhdGVdXG4gIChhc3NlcnQtY29tcG9uZW50IHRoaXMpXG4gIChhc3NlcnQtbmV3LXN0YXRlIG5ldy1zdGF0ZSlcbiAgKHJlc2V0ISAoc3RhdGUtYXRvbSB0aGlzKSBuZXctc3RhdGUpKVxuXG4oZGVmbiBzZXQtc3RhdGVcbiAgXCJNZXJnZSBjb21wb25lbnQgc3RhdGUgd2l0aCBuZXctc3RhdGUuXG4gIEVxdWl2YWxlbnQgdG8gYChzd2FwISAoc3RhdGUtYXRvbSB0aGlzKSBtZXJnZSBuZXctc3RhdGUpYFwiXG4gIFt0aGlzIG5ldy1zdGF0ZV1cbiAgKGFzc2VydC1jb21wb25lbnQgdGhpcylcbiAgKGFzc2VydC1uZXctc3RhdGUgbmV3LXN0YXRlKVxuICAoc3dhcCEgKHN0YXRlLWF0b20gdGhpcykgbWVyZ2UgbmV3LXN0YXRlKSlcblxuKGRlZm4gZm9yY2UtdXBkYXRlXG4gIFwiRm9yY2UgYSBjb21wb25lbnQgdG8gcmUtcmVuZGVyIGltbWVkaWF0ZWx5LlxuXG4gIElmIHRoZSBzZWNvbmQgYXJndW1lbnQgaXMgdHJ1ZSwgY2hpbGQgY29tcG9uZW50cyB3aWxsIGFsc28gYmVcbiAgcmUtcmVuZGVyZWQsIGV2ZW4gaXMgdGhlaXIgYXJndW1lbnRzIGhhdmUgbm90IGNoYW5nZWQuXCJcbiAgKFt0aGlzXVxuICAgKGZvcmNlLXVwZGF0ZSB0aGlzIGZhbHNlKSlcbiAgKFt0aGlzIGRlZXBdXG4gICAocmF0b20vZmx1c2ghKVxuICAgKHV0aWwvZm9yY2UtdXBkYXRlIHRoaXMgZGVlcClcbiAgIChiYXRjaC9mbHVzaC1hZnRlci1yZW5kZXIpKSlcblxuKGRlZm4gcHJvcHNcbiAgXCJSZXR1cm5zIHRoZSBwcm9wcyBwYXNzZWQgdG8gYSBjb21wb25lbnQuXCJcbiAgW3RoaXNdXG4gIChhc3NlcnQtY29tcG9uZW50IHRoaXMpXG4gIChjb21wL2dldC1wcm9wcyB0aGlzKSlcblxuKGRlZm4gY2hpbGRyZW5cbiAgXCJSZXR1cm5zIHRoZSBjaGlsZHJlbiBwYXNzZWQgdG8gYSBjb21wb25lbnQuXCJcbiAgW3RoaXNdXG4gIChhc3NlcnQtY29tcG9uZW50IHRoaXMpXG4gIChjb21wL2dldC1jaGlsZHJlbiB0aGlzKSlcblxuKGRlZm4gYXJndlxuICBcIlJldHVybnMgdGhlIGVudGlyZSBIaWNjdXAgZm9ybSBwYXNzZWQgdG8gdGhlIGNvbXBvbmVudC5cIlxuICBbdGhpc11cbiAgKGFzc2VydC1jb21wb25lbnQgdGhpcylcbiAgKGNvbXAvZ2V0LWFyZ3YgdGhpcykpXG5cbihkZWZuIGNsYXNzLW5hbWVzXG4gIFwiRnVuY3Rpb24gd2hpY2ggbm9ybWFsaXplcyBhbmQgY29tYmluZXMgY2xhc3MgdmFsdWVzIHRvIGEgc3RyaW5nXG5cbiAgUmVhZ2VudCBhbGxvd3MgY2xhc3NlcyB0byBiZSBkZWZpbmVkIGFzOlxuICAtIFN0cmluZ3NcbiAgLSBOYW1lZCBvYmplY3RzIChTeW1ib2xzIG9yIEtleXdvcmRzKVxuICAtIENvbGxlY3Rpb25zIG9mIHByZXZpb3VzIHR5cGVzXCJcbiAgKFtdKVxuICAoW2NsYXNzXSAodXRpbC9jbGFzcy1uYW1lcyBjbGFzcykpXG4gIChbY2xhc3MxIGNsYXNzMl0gKHV0aWwvY2xhc3MtbmFtZXMgY2xhc3MxIGNsYXNzMikpXG4gIChbY2xhc3MxIGNsYXNzMiAmIG90aGVyc10gKGFwcGx5IHV0aWwvY2xhc3MtbmFtZXMgY2xhc3MxIGNsYXNzMiBvdGhlcnMpKSlcblxuKGRlZm4gbWVyZ2UtcHJvcHNcbiAgXCJVdGlsaXR5IGZ1bmN0aW9uIHRoYXQgbWVyZ2VzIHNvbWUgbWFwcywgaGFuZGxpbmcgYDpjbGFzc2AgYW5kIGA6c3R5bGVgLlxuXG4gIFRoZSA6Y2xhc3MgdmFsdWUgaXMgYWx3YXlzIG5vcm1hbGl6ZWQgKHVzaW5nIGBjbGFzcy1uYW1lc2ApIGV2ZW4gaWYgbm9cbiAgbWVyZ2luZyBpcyBkb25lLlwiXG4gIChbXSAodXRpbC9tZXJnZS1wcm9wcykpXG4gIChbZGVmYXVsdHNdICh1dGlsL21lcmdlLXByb3BzIGRlZmF1bHRzKSlcbiAgKFtkZWZhdWx0cyBwcm9wc10gKHV0aWwvbWVyZ2UtcHJvcHMgZGVmYXVsdHMgcHJvcHMpKVxuICAoW2RlZmF1bHRzIHByb3BzICYgb3RoZXJzXSAoYXBwbHkgdXRpbC9tZXJnZS1wcm9wcyBkZWZhdWx0cyBwcm9wcyBvdGhlcnMpKSlcblxuKGRlZm4gZmx1c2hcbiAgXCJSZW5kZXIgZGlydHkgY29tcG9uZW50cyBpbW1lZGlhdGVseS5cblxuICBOb3RlIHRoYXQgdGhpcyBtYXkgbm90IHdvcmsgaW4gZXZlbnQgaGFuZGxlcnMsIHNpbmNlIFJlYWN0LmpzIGRvZXNcbiAgYmF0Y2hpbmcgb2YgdXBkYXRlcyB0aGVyZS5cIlxuICBbXVxuICAoYmF0Y2gvZmx1c2gpKVxuXG47OyBSYXRvbVxuXG4oZGVmbiBhdG9tXG4gIFwiTGlrZSBjbG9qdXJlLmNvcmUvYXRvbSwgZXhjZXB0IHRoYXQgaXQga2VlcHMgdHJhY2sgb2YgZGVyZWZzLlxuICBSZWFnZW50IGNvbXBvbmVudHMgdGhhdCBkZXJlZnMgb25lIG9mIHRoZXNlIGFyZSBhdXRvbWF0aWNhbGx5XG4gIHJlLXJlbmRlcmVkLlwiXG4gIChbeF0gKHJhdG9tL2F0b20geCkpXG4gIChbeCAmIHJlc3RdIChhcHBseSByYXRvbS9hdG9tIHggcmVzdCkpKVxuXG4oZGVmbiB0cmFja1xuICBcIlRha2VzIGEgZnVuY3Rpb24gYW5kIG9wdGlvbmFsIGFyZ3VtZW50cywgYW5kIHJldHVybnMgYSBkZXJlZmFibGVcbiAgY29udGFpbmluZyB0aGUgb3V0cHV0IG9mIHRoYXQgZnVuY3Rpb24uIElmIHRoZSBmdW5jdGlvbiBkZXJlZnNcbiAgUmVhZ2VudCBhdG9tcyAob3IgdHJhY2ssIGV0YyksIHRoZSB2YWx1ZSB3aWxsIGJlIHVwZGF0ZWQgd2hlbmV2ZXJcbiAgdGhlIGF0b20gY2hhbmdlcy5cblxuICBJbiBvdGhlciB3b3JkcywgYEAodHJhY2sgZm9vIGJhcilgIHdpbGwgcHJvZHVjZSB0aGUgc2FtZSByZXN1bHRcbiAgYXMgYChmb28gYmFyKWAsIGJ1dCBmb28gd2lsbCBvbmx5IGJlIGNhbGxlZCBhZ2FpbiB3aGVuIHRoZSBhdG9tcyBpdFxuICBkZXBlbmRzIG9uIGNoYW5nZXMsIGFuZCB3aWxsIG9ubHkgdHJpZ2dlciB1cGRhdGVzIG9mIGNvbXBvbmVudHMgd2hlblxuICBpdHMgcmVzdWx0IGNoYW5nZXMuXG5cbiAgdHJhY2sgaXMgbGF6eSwgaS5lIHRoZSBmdW5jdGlvbiBpcyBvbmx5IGV2YWx1YXRlZCBvbiBkZXJlZi5cIlxuICBbZiAmIGFyZ3NdXG4gIHs6cHJlIFsoaWZuPyBmKV19XG4gIChyYXRvbS9tYWtlLXRyYWNrIGYgYXJncykpXG5cbihkZWZuIHRyYWNrIVxuICBcIkFuIGVhZ2VyIHZlcnNpb24gb2YgdHJhY2suIFRoZSBmdW5jdGlvbiBwYXNzZWQgaXMgY2FsbGVkXG4gIGltbWVkaWF0ZWx5LCBhbmQgY29udGludWVzIHRvIGJlIGNhbGxlZCB3aGVuIG5lZWRlZCwgdW50aWwgc3RvcHBlZFxuICB3aXRoIGRpc3Bvc2UhLlwiXG4gIFtmICYgYXJnc11cbiAgezpwcmUgWyhpZm4/IGYpXX1cbiAgKHJhdG9tL21ha2UtdHJhY2shIGYgYXJncykpXG5cbihkZWZuIGRpc3Bvc2UhXG4gIFwiU3RvcCB0aGUgcmVzdWx0IG9mIHRyYWNrISBmcm9tIHVwZGF0aW5nLlwiXG4gIFt4XVxuICAocmF0b20vZGlzcG9zZSEgeCkpXG5cbihkZWZuIHdyYXBcbiAgXCJQcm92aWRlIGEgY29tYmluYXRpb24gb2YgdmFsdWUgYW5kIGNhbGxiYWNrLCB0aGF0IGxvb2tzIGxpa2UgYW4gYXRvbS5cblxuICBUaGUgZmlyc3QgYXJndW1lbnQgY2FuIGJlIGFueSB2YWx1ZSwgdGhhdCB3aWxsIGJlIHJldHVybmVkIHdoZW4gdGhlXG4gIHJlc3VsdCBpcyBkZXJlZidlZC5cblxuICBUaGUgc2Vjb25kIGFyZ3VtZW50IHNob3VsZCBiZSBhIGZ1bmN0aW9uLCB0aGF0IGlzIGNhbGxlZCB3aXRoIHRoZVxuICBvcHRpb25hbCBleHRyYSBhcmd1bWVudHMgcHJvdmlkZWQgdG8gd3JhcCwgYW5kIHRoZSBuZXcgdmFsdWUgb2YgdGhlXG4gIHJlc3VsdGluZyAnYXRvbScuXG5cbiAgVXNlIGZvciBleGFtcGxlIGxpa2UgdGhpczpcblxuICBgYGBjbGpzXG4gICh3cmFwICg6Zm9vIEBzdGF0ZSlcbiAgICAgICAgc3dhcCEgc3RhdGUgYXNzb2MgOmZvbylcbiAgYGBgXG5cbiAgUHJvYmFibHkgdXNlZnVsIG9ubHkgZm9yIHBhc3NpbmcgdG8gY2hpbGQgY29tcG9uZW50cy5cIlxuICBbdmFsdWUgcmVzZXQtZm4gJiBhcmdzXVxuICAoYXNzZXJ0LWNhbGxhYmxlIHJlc2V0LWZuKVxuICAocmF0b20vbWFrZS13cmFwcGVyIHZhbHVlIHJlc2V0LWZuIGFyZ3MpKVxuXG5cbjs7IFJDdXJzb3JcblxuKGRlZm4gY3Vyc29yXG4gIFwiUHJvdmlkZSBhIGN1cnNvciBpbnRvIGEgUmVhZ2VudCBhdG9tLlxuXG4gIEJlaGF2ZXMgbGlrZSBhIFJlYWdlbnQgYXRvbSBidXQgZm9jdXNlcyB1cGRhdGVzIGFuZCBkZXJlZnMgdG9cbiAgdGhlIHNwZWNpZmllZCBwYXRoIHdpdGhpbiB0aGUgd3JhcHBlZCBSZWFnZW50IGF0b20uIGUuZy4sXG5cbiAgYGBgY2xqc1xuICAobGV0IFtjIChjdXJzb3IgcmEgWzpuZXN0ZWQgOmNvbnRlbnRdKV1cbiAgICAuLi4gQGMgOzsgZXF1aXZhbGVudCB0byAoZ2V0LWluIEByYSBbOm5lc3RlZCA6Y29udGVudF0pXG4gICAgLi4uIChyZXNldCEgYyA0MikgOzsgZXF1aXZhbGVudCB0byAoc3dhcCEgcmEgYXNzb2MtaW4gWzpuZXN0ZWQgOmNvbnRlbnRdIDQyKVxuICAgIC4uLiAoc3dhcCEgYyBpbmMpIDs7IGVxdWl2YWxlbmNlIHRvIChzd2FwISByYSB1cGRhdGUtaW4gWzpuZXN0ZWQgOmNvbnRlbnRdIGluYylcbiAgICApXG4gIGBgYFxuXG4gIFRoZSBmaXJzdCBwYXJhbWV0ZXIgY2FuIGFsc28gYmUgYSBmdW5jdGlvbiwgdGhhdCBzaG91bGQgbG9va1xuICBzb21ldGhpbmcgbGlrZSB0aGlzOlxuXG4gIGBgYGNsanNcbiAgKGRlZm4gc2V0LWdldFxuICAgIChba10gKGdldC1pbiBAc3RhdGUgaykpXG4gICAgKFtrIHZdIChzd2FwISBzdGF0ZSBhc3NvYy1pbiBrIHYpKSlcbiAgYGBgXG5cbiAgVGhlIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkIHdpdGggb25lIGFyZ3VtZW50IOKAkyB0aGUgcGF0aCBwYXNzZWQgdG9cbiAgY3Vyc29yIOKAkyB3aGVuIHRoZSBjdXJzb3IgaXMgZGVyZWYnZWQsIGFuZCB0d28gYXJndW1lbnRzIChwYXRoIGFuZFxuICBuZXcgdmFsdWUpIHdoZW4gdGhlIGN1cnNvciBpcyBtb2RpZmllZC5cblxuICBHaXZlbiB0aGF0IHNldC1nZXQgZnVuY3Rpb24sIChhbmQgdGhhdCBzdGF0ZSBpcyBhIFJlYWdlbnQgYXRvbSwgb3JcbiAgYW5vdGhlciBjdXJzb3IpIHRoZXNlIGN1cnNvcnMgYXJlIGVxdWl2YWxlbnQ6XG4gIGAoY3Vyc29yIHN0YXRlIFs6Zm9vXSlgIGFuZCBgKGN1cnNvciBzZXQtZ2V0IFs6Zm9vXSlgLlxuXG4gIE5vdGUgdGhhdCBhIGN1cnNvciBpcyBsYXp5OiBpdHMgdmFsdWUgd2lsbCBub3QgY2hhbmdlIHVudGlsIGl0IGlzXG4gIHVzZWQuIFRoaXMgbWF5IGJlIG5vdGljZWQgd2l0aCBhZGQtd2F0Y2guXCJcbiAgKFtzcmMgcGF0aF1cbiAgIChyYXRvbS9jdXJzb3Igc3JjIHBhdGgpKSlcblxuXG47OyBVdGlsaXRpZXNcblxuKGRlZm4gcnN3YXAhXG4gIFwiU3dhcHMgdGhlIHZhbHVlIG9mIGEgdG8gYmUgYChhcHBseSBmIGN1cnJlbnQtdmFsdWUtb2YtYXRvbSBhcmdzKWAuXG5cbiAgcnN3YXAhIHdvcmtzIGxpa2Ugc3dhcCEsIGV4Y2VwdCB0aGF0IHJlY3Vyc2l2ZSBjYWxscyB0byByc3dhcCEgb25cbiAgdGhlIHNhbWUgYXRvbSBhcmUgYWxsb3dlZCDigJMgYW5kIGl0IGFsd2F5cyByZXR1cm5zIG5pbC5cIlxuICBbYSBmICYgYXJnc11cbiAgezpwcmUgWyhzYXRpc2ZpZXM/IElBdG9tIGEpXG4gICAgICAgICAoaWZuPyBmKV19XG4gIChpZiAoLi1yc3dhcHBpbmcgYSlcbiAgICAoLT4gKG9yICguLXJzd2FwZnMgYSlcbiAgICAgICAgICAgIChzZXQhICguLXJzd2FwZnMgYSkgKGFycmF5KSkpXG4gICAgICAgICgucHVzaCAjKGFwcGx5IGYgJSBhcmdzKSkpXG4gICAgKGRvIChzZXQhICguLXJzd2FwcGluZyBhKSB0cnVlKVxuICAgICAgICAodHJ5IChzd2FwISBhIChmbiBbc3RhdGVdXG4gICAgICAgICAgICAgICAgICAgICAgICAobG9vcCBbcyAoYXBwbHkgZiBzdGF0ZSBhcmdzKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKGlmLXNvbWUgW3NmIChzb21lLT4gYSAuLXJzd2FwZnMgLnNoaWZ0KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocmVjdXIgKHNmIHMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHMpKSkpXG4gICAgICAgICAgICAgKGZpbmFsbHlcbiAgICAgICAgICAgICAgIChzZXQhICguLXJzd2FwcGluZyBhKSBmYWxzZSkpKSkpXG4gIG5pbClcblxuKGRlZm4gbmV4dC10aWNrXG4gIFwiUnVuIGYgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9yIGVxdWl2YWxlbnQuXG5cbiAgZiB3aWxsIGJlIGNhbGxlZCBqdXN0IGJlZm9yZSBjb21wb25lbnRzIGFyZSByZW5kZXJlZC5cIlxuICBbZl1cbiAgKGJhdGNoL2RvLWJlZm9yZS1mbHVzaCBmKSlcblxuKGRlZm4gYWZ0ZXItcmVuZGVyXG4gIFwiUnVuIGYgdXNpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIG9yIGVxdWl2YWxlbnQuXG5cbiAgZiB3aWxsIGJlIGNhbGxlZCBqdXN0IGFmdGVyIGFueSBxdWV1ZWQgcmVuZGVycyBpbiB0aGUgbmV4dCBhbmltYXRpb25cbiAgZnJhbWUgKGFuZCBldmVuIGlmIG5vIHJlbmRlcnMgYWN0dWFsbHkgb2NjdXIpLlwiXG4gIFtmXVxuICAoYmF0Y2gvZG8tYWZ0ZXItcmVuZGVyIGYpKVxuXG4oZGVmbiBwYXJ0aWFsXG4gIFwiV29ya3MganVzdCBsaWtlIGNsb2p1cmUuY29yZS9wYXJ0aWFsLCBidXQgdGhlIHJlc3VsdCBjYW4gYmUgY29tcGFyZWQgd2l0aCA9XCJcbiAgW2YgJiBhcmdzXVxuICAodXRpbC9tYWtlLXBhcnRpYWwtZm4gZiBhcmdzKSlcblxuKGRlZm4gY3JlYXRlLWNvbXBpbGVyXG4gIFwiQ3JlYXRlcyBDb21waWxlciBvYmplY3Qgd2l0aCBnaXZlbiBgb3B0c2AsXG4gIHRoaXMgY2FuIGJlIHBhc3NlZCB0byBgcmVuZGVyYCwgYGFzLWVsZW1lbnRgIGFuZCBvdGhlciBmdW5jdGlvbnMgdG8gY29udHJvbFxuICBob3cgdGhleSB0dXJuIHRoZSBSZWFnZW50LXN0eWxlIEhpY2N1cCBpbnRvIFJlYWN0IGNvbXBvbmVudHMgYW5kIGVsZW1lbnRzLlwiXG4gIFtvcHRzXVxuICAodG1wbC9jcmVhdGUtY29tcGlsZXIgb3B0cykpXG5cbihkZWZuIHNldC1kZWZhdWx0LWNvbXBpbGVyIVxuICBcIkdsb2JhbGx5IHNldHMgdGhlIENvbXBpbGVyIG9iamVjdCB1c2VkIGJ5IGByZW5kZXJgLCBgYXMtZWxlbWVudGAgYW5kIG90aGVyXG4gIGNhbGxzIGJ5IGRlZmF1bHQsIHdoZW4gbm8gYGNvbXBpbGVyYCBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQuXG5cbiAgVXNlIGBuaWxgIHZhbHVlIHRvIHJlc3RvcmUgdGhlIG9yaWdpbmFsIGRlZmF1bHQgY29tcGlsZXIuXCJcbiAgW2NvbXBpbGVyXVxuICAodG1wbC9zZXQtZGVmYXVsdC1jb21waWxlciEgKGlmIChuaWw/IGNvbXBpbGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBsL2RlZmF1bHQtY29tcGlsZXIqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBpbGVyKSkpXG4iXX0=