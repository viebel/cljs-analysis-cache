// Compiled by ClojureScript 1.10.597
goog.provide("reagent.core");
reagent.core.react = React;
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

return reagent.core.react.createElement.call(null,type,props);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$3 = (function (type,props,child){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(cljs.core/not (cljs.core/map? props))"].join('')));
}

return reagent.core.react.createElement.call(null,type,props,child);
}));

(reagent.core.create_element.cljs$core$IFn$_invoke$arity$variadic = (function (type,props,child,children){
if((!(cljs.core.map_QMARK_.call(null,props)))){
} else {
throw (new Error(["Assert failed: ",["Expected a JS object, not ",cljs.core.pr_str.call(null,props)].join(''),"\n","(cljs.core/not (cljs.core/map? props))"].join('')));
}

return cljs.core.apply.call(null,reagent.core.react.createElement,type,props,child,children);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZ2VudC9jb3JlLmpzIiwic291cmNlcyI6WyJjb3JlLmNsanMiXSwibGluZUNvdW50Ijo5NTMsIm1hcHBpbmdzIjoiO0FBY0EsQUFBS0EscUJBQU1DO0FBQ1gsQUFBS0MseUJBQVVDO0FBRWYsQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQUFBLHNDQUFBQyxwRUFBTUU7QUFBTixBQUFBLElBQUFELFNBQUEsQUFBQTtBQUFBLEFBQUEsUUFBQUE7S0FBQTtBQUFBLE9BQUFDLDBEQUFBLENBQUEsVUFBQTs7O0tBQUE7QUFBQSxPQUFBQSwwREFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUE7OztLQUFBO0FBQUEsT0FBQUEsMERBQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBLE1BQUEsQ0FBQSxVQUFBOzs7O0FBQUEsSUFBQUMsMEJBQUE7QUFBQSxBQUFBLElBQUFDLHlCQUFBLEFBQUE7QUFBQSxBQUFBLElBQUFDLHVCQUFBOztBQUFBLEFBQUEsR0FBQSxDQUFBQSx1QkFBQUQ7QUFBQSxBQUFBLEFBQUFELDZCQUFBLENBQUEsVUFBQUU7O0FBQUEsYUFBQSxDQUFBQSx1QkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQUMsd0JBQUEsMEJBQUEsQUFBQUgsOEJBQUEsS0FBQSxJQUFBLDVEQW9wRzBEOEk7QUFwcEcxRCxBQUFBLE9BQUEvSSxpRUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQSxDQUFBLFVBQUEsTUFBQUk7Ozs7O0FBQUEsQ0FBQSw0REFBQSw1REFBTUosdUVBaUJGVTtBQWpCSixBQWtCRyxrREFBQSwzQ0FBQ1Ysc0NBQWVVOzs7QUFsQm5CLENBQUEsNERBQUEsNURBQU1WLHVFQW1CRlUsS0FBS0M7QUFuQlQsQUFvQkcsR0FBQSxHQUFBLEFBQUFDLCtCQUFrQkQ7QUFBbEI7QUFBQSxBQUFBLE1BQUEsS0FBQUUsTUFBQSxDQUFBLGtCQUFBLENBQUEsNkJBQUEsQUFBQUMsNENBQUEsS0FBQSx0QkFBa0JIOzs7QUFDbEIsT0FBQyxBQUFBakIsMkNB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QUFBLEdBQUEsQ0FBQUEsdUJBQUFEO0FBQUEsQUFBQSxBQUFBb0YseUJBQUEsQ0FBQSxVQUFBbkY7O0FBQUEsYUFBQSxDQUFBQSx1QkFBQTs7OztBQUFBOzs7O0FBQUEsSUFBQW9GLHdCQUFBLEVBQUEsQ0FBQSxNQUFBLEFBQUFELDZCQUFBLEFBQUEsMEJBQUEsQUFBQUEsMEJBQUEsS0FBQSxJQUFBLE9BQUEsL0RBc3dGc0R5RDtBQXR3RnRELEFBQUEsT0FBQVosMERBQUEsQ0FBQSxVQUFBLE1BQUE1Qzs7O0FBQUEsQUFBQSxDQUFBLDREQUFBLDVEQUFNNEMsdUVBRUh4QyxFQUFJQztBQUZQLEFBR0UsT0FBQzBDLDRDQUFxQjNDLEVBQUVDOzs7QUFIMUIsQ0FBQSwrQ0FBQSwvQ0FBTXVDOztBQUFOO0FBQUEsQ0FBQSx5Q0FBQSxXQUFBQyxwREFBTUQ7QUFBTixBQUFBLElBQUFFLFNBQUEsMEJBQUFELDFCQXVzRmdEUztJQXZzRmhEVCxhQUFBLHlCQUFBQSx6QkF3c0ZrRFU7QUF4c0ZsRCxBQUFBLElBQUFySSxzQkFBQTtBQUFBLEFBQUEsT0FBQUEseURBQUE0SCxPQUFBRDs7O0FBQUEsQUFLQTs7Ozs7K0JBQUEsL0JBQU1HLHNFQUlIQztBQUpILEFBS0UsT0FBQ0MsZ0RBQXFCRDs7QUFFeEI7Ozs7OzswQ0FBQSwxQ0FBTUUsNEZBS0huSDtBQUxILEFBTUUsT0FBQ29ILDJEQUEyQixFQUFJLGFBQUEsWkFBTXBILG1CQUNScUgsNkNBQ0FySCIsIm5hbWVzIjpbInJlYWdlbnQuY29yZS9yZWFjdCIsImpzL1JlYWN0IiwicmVhZ2VudC5jb3JlL2lzLWNsaWVudCIsInJlYWdlbnQuaW1wbC51dGlsL2lzLWNsaWVudCIsInZhcl9hcmdzIiwiR19fNDA5IiwicmVhZ2VudC5jb3JlL2NyZWF0ZS1lbGVtZW50IiwiYXJncy1hcnJfXzEyNjg0X19hdXRvX18iLCJsZW5fXzEyNjY2X19hdXRvX18iLCJpX18xMjY2N19fYXV0b19fIiwiYXJnc2VxX18xMjY4NV9fYXV0b19fIiwic2VxNDA1IiwiR19fNDA2IiwiR19fNDA3IiwiR19fNDA4Iiwic2VsZl9fMTI2NThfX2F1dG9fXyIsInR5cGUiLCJwcm9wcyIsImNsanMuY29yZS9tYXA/IiwianMvRXJyb3IiLCJjbGpzLmNvcmUvcHItc3RyIiwiY2hpbGQiLCJjaGlsZHJlbiIsImNsanMuY29yZS9hcHBseSIsIkdfXzQxNSIsInJlYWdlbnQuY29yZS9hcy1lbGVtZW50IiwiZm9ybSIsInJlYWdlbnQuaW1wbC5wcm90b2NvbHMvYXMtZWxlbWVudCIsInJlYWdlbnQuaW1wbC50ZW1wbGF0ZS9kZWZhdWx0LWNvbXBpbGVyIiwiY29tcGlsZXIiLCJyZWFnZW50LmNvcmUvYWRhcHQtcmVhY3QtY2xhc3MiLCJjIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2FkYXB0LXJlYWN0LWNsYXNzIiwiR19fNDE4IiwicmVhZ2VudC5jb3JlL3JlYWN0aWZ5LWNvbXBvbmVudCIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmVhY3RpZnktY29tcG9uZW50IiwiR19fNDIxIiwicmVhZ2VudC5jb3JlL2NyZWF0ZS1jbGFzcyIsInNwZWMiLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2NyZWF0ZS1jbGFzcyIsInJlYWdlbnQuY29yZS9jdXJyZW50LWNvbXBvbmVudCIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvKmN1cnJlbnQtY29tcG9uZW50KiIsInJlYWdlbnQuY29yZS9zdGF0ZS1hdG9tIiwidGhpcyIsInJlYWdlbnQuaW1wbC5jb21wb25lbnQvcmVhZ2VudC1jb21wb25lbnQ/IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9zdGF0ZS1hdG9tIiwicmVhZ2VudC5jb3JlL3N0YXRlIiwiY2xqcy5jb3JlL2RlcmVmIiwicmVhZ2VudC5jb3JlL3JlcGxhY2Utc3RhdGUiLCJuZXctc3RhdGUiLCJjbGpzLmNvcmUvcmVzZXQhIiwicmVhZ2VudC5jb3JlL3NldC1zdGF0ZSIsImNsanMuY29yZS9zd2FwISIsImNsanMuY29yZS9tZXJnZSIsIkdfXzQyNCIsInJlYWdlbnQuY29yZS9mb3JjZS11cGRhdGUiLCJkZWVwIiwicmVhZ2VudC5yYXRvbS9mbHVzaCEiLCJyZWFnZW50LmltcGwudXRpbC9mb3JjZS11cGRhdGUiLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvZmx1c2gtYWZ0ZXItcmVuZGVyIiwicmVhZ2VudC5jb3JlL3Byb3BzIiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9nZXQtcHJvcHMiLCJyZWFnZW50LmNvcmUvY2hpbGRyZW4iLCJyZWFnZW50LmltcGwuY29tcG9uZW50L2dldC1jaGlsZHJlbiIsInJlYWdlbnQuY29yZS9hcmd2IiwicmVhZ2VudC5pbXBsLmNvbXBvbmVudC9nZXQtYXJndiIsIkdfXzQzMCIsInJlYWdlbnQuY29yZS9jbGFzcy1uYW1lcyIsInNlcTQyNyIsIkdfXzQyOCIsIkdfXzQyOSIsImNsYXNzIiwicmVhZ2VudC5pbXBsLnV0aWwvY2xhc3MtbmFtZXMiLCJjbGFzczEiLCJjbGFzczIiLCJvdGhlcnMiLCJHX180MzkiLCJyZWFnZW50LmNvcmUvbWVyZ2UtcHJvcHMiLCJzZXE0MzYiLCJHX180MzciLCJHX180MzgiLCJyZWFnZW50LmltcGwudXRpbC9tZXJnZS1wcm9wcyIsImRlZmF1bHRzIiwicmVhZ2VudC5jb3JlL2ZsdXNoIiwicmVhZ2VudC5pbXBsLmJhdGNoaW5nL2ZsdXNoIiwiR19fNDQ3IiwicmVhZ2VudC5jb3JlL2F0b20iLCJzZXE0NDUiLCJHX180NDYiLCJ4IiwicmVhZ2VudC5yYXRvbS9hdG9tIiwicmVzdCIsImFyZ3NfXzEyNjY5X19hdXRvX18iLCJhcmdzZXFfXzEyNjcwX19hdXRvX18iLCJyZWFnZW50LmNvcmUvdHJhY2siLCJzZXE0NTIiLCJHX180NTMiLCJmIiwiYXJncyIsImNsanMuY29yZS9pZm4/IiwicmVhZ2VudC5yYXRvbS9tYWtlLXRyYWNrIiwicmVhZ2VudC5jb3JlL3RyYWNrISIsInNlcTQ1NyIsIkdfXzQ1OCIsInJlYWdlbnQucmF0b20vbWFrZS10cmFjayEiLCJyZWFnZW50LmNvcmUvZGlzcG9zZSEiLCJyZWFnZW50LnJhdG9tL2Rpc3Bvc2UhIiwicmVhZ2VudC5jb3JlL3dyYXAiLCJzZXE0NjIiLCJHX180NjMiLCJHX180NjQiLCJ2YWx1ZSIsInJlc2V0LWZuIiwicmVhZ2VudC5yYXRvbS9tYWtlLXdyYXBwZXIiLCJyZWFnZW50LmNvcmUvY3Vyc29yIiwic3JjIiwicGF0aCIsInJlYWdlbnQucmF0b20vY3Vyc29yIiwicmVhZ2VudC5jb3JlL3Jzd2FwISIsInNlcTQ2OCIsIkdfXzQ2OSIsIkdfXzQ3MCIsImEiLCJjbGpzLmNvcmUvUFJPVE9DT0xfU0VOVElORUwiLCJjbGpzLmNvcmUvbmF0aXZlLXNhdGlzZmllcz8iLCJjbGpzLmNvcmUvSUF0b20iLCJvcl9fMTAxMTZfX2F1dG9fXyIsInAxX18xMyMiLCJzdGF0ZSIsInMiLCJ0ZW1wX185NzE0X19hdXRvX18iLCJzZiIsIkdfXzQ3MiIsInJlYWdlbnQuY29yZS9uZXh0LXRpY2siLCJyZWFnZW50LmltcGwuYmF0Y2hpbmcvZG8tYmVmb3JlLWZsdXNoIiwicmVhZ2VudC5jb3JlL2FmdGVyLXJlbmRlciIsInJlYWdlbnQuaW1wbC5iYXRjaGluZy9kby1hZnRlci1yZW5kZXIiLCJyZWFnZW50LmNvcmUvcGFydGlhbCIsInNlcTQ3NyIsIkdfXzQ3OCIsInJlYWdlbnQuaW1wbC51dGlsL21ha2UtcGFydGlhbC1mbiIsInJlYWdlbnQuY29yZS9jcmVhdGUtY29tcGlsZXIiLCJvcHRzIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2NyZWF0ZS1jb21waWxlciIsInJlYWdlbnQuY29yZS9zZXQtZGVmYXVsdC1jb21waWxlciEiLCJyZWFnZW50LmltcGwudGVtcGxhdGUvc2V0LWRlZmF1bHQtY29tcGlsZXIhIiwicmVhZ2VudC5pbXBsLnRlbXBsYXRlL2RlZmF1bHQtY29tcGlsZXIqIiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL25leHQiLCJjbGpzLmNvcmUvSW5kZXhlZFNlcSJdLCJzb3VyY2VzQ29udGVudCI6WyIobnMgcmVhZ2VudC5jb3JlXG4gICg6cmVxdWlyZS1tYWNyb3MgW3JlYWdlbnQuY29yZV0pXG4gICg6cmVmZXItY2xvanVyZSA6ZXhjbHVkZSBbcGFydGlhbCBhdG9tIGZsdXNoXSlcbiAgKDpyZXF1aXJlIFtjbGpzanMucmVhY3RdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnRlbXBsYXRlIDphcyB0bXBsXVxuICAgICAgICAgICAgW3JlYWdlbnQuaW1wbC5jb21wb25lbnQgOmFzIGNvbXBdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLnV0aWwgOmFzIHV0aWxdXG4gICAgICAgICAgICBbcmVhZ2VudC5pbXBsLmJhdGNoaW5nIDphcyBiYXRjaF1cbiAgICAgICAgICAgIFtyZWFnZW50LmltcGwucHJvdG9jb2xzIDphcyBwXVxuICAgICAgICAgICAgW3JlYWdlbnQucmF0b20gOmFzIHJhdG9tXVxuICAgICAgICAgICAgW3JlYWdlbnQuZGVidWcgOmFzIGRlYiA6cmVmZXItbWFjcm9zIFthc3NlcnQtc29tZSBhc3NlcnQtY29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2VydC1qcy1vYmplY3QgYXNzZXJ0LW5ldy1zdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc3NlcnQtY2FsbGFibGVdXSkpXG5cbihkZWYgcmVhY3QganMvUmVhY3QpXG4oZGVmIGlzLWNsaWVudCB1dGlsL2lzLWNsaWVudClcblxuKGRlZm4gY3JlYXRlLWVsZW1lbnRcbiAgXCJDcmVhdGUgYSBuYXRpdmUgUmVhY3QgZWxlbWVudCwgYnkgY2FsbGluZyBSZWFjdC5jcmVhdGVFbGVtZW50IGRpcmVjdGx5LlxuXG4gIFRoYXQgbWVhbnMgdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGEgamF2YXNjcmlwdCBvYmplY3QgKG9yIG5pbCksIGFuZFxuICB0aGF0IGFueSBSZWFnZW50IGhpY2N1cCBmb3JtcyBtdXN0IGJlIHByb2Nlc3NlZCB3aXRoIGFzLWVsZW1lbnQuIEZvciBleGFtcGxlXG4gIGxpa2UgdGhpczpcblxuICBgYGBjbGpzXG4gIChyL2NyZWF0ZS1lbGVtZW50IFxcXCJkaXZcXFwiICNqc3s6Y2xhc3NOYW1lIFxcXCJmb29cXFwifVxuICAgIFxcXCJIaSBcXFwiIChyL2FzLWVsZW1lbnQgWzpzdHJvbmcgXFxcIndvcmxkIVxcXCJdKVxuICBgYGBcblxuICB3aGljaCBpcyBlcXVpdmFsZW50IHRvXG5cbiAgYGBgY2xqc1xuICBbOmRpdi5mb28gXFxcIkhpXFxcIiBbOnN0cm9uZyBcXFwid29ybGQhXFxcIl1dXG4gIGBgYFwiXG4gIChbdHlwZV1cbiAgIChjcmVhdGUtZWxlbWVudCB0eXBlIG5pbCkpXG4gIChbdHlwZSBwcm9wc11cbiAgIChhc3NlcnQtanMtb2JqZWN0IHByb3BzKVxuICAgKHJlYWN0LmNyZWF0ZUVsZW1lbnQgdHlwZSBwcm9wcykpXG4gIChbdHlwZSBwcm9wcyBjaGlsZF1cbiAgIChhc3NlcnQtanMtb2JqZWN0IHByb3BzKVxuICAgKHJlYWN0LmNyZWF0ZUVsZW1lbnQgdHlwZSBwcm9wcyBjaGlsZCkpXG4gIChbdHlwZSBwcm9wcyBjaGlsZCAmIGNoaWxkcmVuXVxuICAgKGFzc2VydC1qcy1vYmplY3QgcHJvcHMpXG4gICAoYXBwbHkgcmVhY3QuY3JlYXRlRWxlbWVudCB0eXBlIHByb3BzIGNoaWxkIGNoaWxkcmVuKSkpXG5cbihkZWZuIGFzLWVsZW1lbnRcbiAgXCJUdXJucyBhIHZlY3RvciBvZiBIaWNjdXAgc3ludGF4IGludG8gYSBSZWFjdCBlbGVtZW50LiBSZXR1cm5zIGZvcm1cbiAgdW5jaGFuZ2VkIGlmIGl0IGlzIG5vdCBhIHZlY3Rvci5cIlxuICAoW2Zvcm1dIChwL2FzLWVsZW1lbnQgdG1wbC9kZWZhdWx0LWNvbXBpbGVyIGZvcm0pKVxuICAoW2Zvcm0gY29tcGlsZXJdIChwL2FzLWVsZW1lbnQgY29tcGlsZXIgZm9ybSkpKVxuXG4oZGVmbiBhZGFwdC1yZWFjdC1jbGFzc1xuICBcIlJldHVybnMgYW4gYWRhcHRlciBmb3IgYSBuYXRpdmUgUmVhY3QgY2xhc3MsIHRoYXQgbWF5IGJlIHVzZWRcbiAganVzdCBsaWtlIGEgUmVhZ2VudCBjb21wb25lbnQgZnVuY3Rpb24gb3IgY2xhc3MgaW4gSGljY3VwIGZvcm1zLlwiXG4gIFtjXVxuICAoYXNzZXJ0LXNvbWUgYyBcIkNvbXBvbmVudFwiKVxuICAodG1wbC9hZGFwdC1yZWFjdC1jbGFzcyBjKSlcblxuKGRlZm4gcmVhY3RpZnktY29tcG9uZW50XG4gIFwiUmV0dXJucyBhbiBhZGFwdGVyIGZvciBhIFJlYWdlbnQgY29tcG9uZW50LCB0aGF0IG1heSBiZSB1c2VkIGZyb21cbiAgUmVhY3QsIGZvciBleGFtcGxlIGluIEpTWC4gQSBzaW5nbGUgYXJndW1lbnQsIHByb3BzLCBpcyBwYXNzZWQgdG9cbiAgdGhlIGNvbXBvbmVudCwgY29udmVydGVkIHRvIGEgbWFwLlwiXG4gIChbY10gKHJlYWN0aWZ5LWNvbXBvbmVudCBjIHRtcGwvZGVmYXVsdC1jb21waWxlcikpXG4gIChbYyBjb21waWxlcl1cbiAgIChhc3NlcnQtc29tZSBjIFwiQ29tcG9uZW50XCIpXG4gICAoY29tcC9yZWFjdGlmeS1jb21wb25lbnQgYyBjb21waWxlcikpKVxuXG4oZGVmbiBjcmVhdGUtY2xhc3NcbiAgXCJDcmVhdGVzIEpTIGNsYXNzIGJhc2VkIG9uIHByb3ZpZGVkIENsb2p1cmUgbWFwLCBmb3IgZXhhbXBsZTpcblxuICBgYGBjbGpzXG4gIHs7OyBDb25zdHJ1Y3RvclxuICAgOmNvbnN0cnVjdG9yIChmbiBbdGhpcyBwcm9wc10pXG4gICA6Z2V0LWluaXRpYWwtc3RhdGUgKGZuIFt0aGlzXSlcbiAgIDs7IFN0YXRpYyBtZXRob2RzXG4gICA6Z2V0LWRlcml2ZWQtc3RhdGUtZnJvbS1wcm9wcyAoZm4gW3Byb3BzIHN0YXRlXSBwYXJ0aWFsLXN0YXRlKVxuICAgOmdldC1kZXJpdmVkLXN0YXRlLWZyb20tZXJyb3IgKGZuIFtlcnJvcl0gcGFydGlhbC1zdGF0ZSlcbiAgIDs7IE1ldGhvZHNcbiAgIDpnZXQtc25hcHNob3QtYmVmb3JlLXVwZGF0ZSAoZm4gW3RoaXMgb2xkLWFyZ3YgbmV3LWFyZ3ZdIHNuYXBzaG90KVxuICAgOnNob3VsZC1jb21wb25lbnQtdXBkYXRlIChmbiBbdGhpcyBvbGQtYXJndiBuZXctYXJndl0pXG4gICA6Y29tcG9uZW50LWRpZC1tb3VudCAoZm4gW3RoaXNdKVxuICAgOmNvbXBvbmVudC1kaWQtdXBkYXRlIChmbiBbdGhpcyBvbGQtYXJndiBvbGQtc3RhdGUgc25hcHNob3RdKVxuICAgOmNvbXBvbmVudC13aWxsLXVubW91bnQgKGZuIFt0aGlzXSlcbiAgIDpjb21wb25lbnQtZGlkLWNhdGNoIChmbiBbdGhpcyBlcnJvciBpbmZvXSlcbiAgIDpyZWFnZW50LXJlbmRlciAoZm4gW2FyZ3MuLi4uXSlcbiAgIDs7IE9yIGFsdGVybmF0aXZlbHk6XG4gICA6cmVuZGVyIChmbiBbdGhpc10pXG4gICA7OyBEZXByZWNhdGVkIG1ldGhvZHM6XG4gICA6VU5TQUZFX2NvbXBvbmVudC13aWxsLXJlY2VpdmUtcHJvcHMgKGZuIFt0aGlzIG5ldy1hcmd2XSlcbiAgIDpVTlNBRkVfY29tcG9uZW50LXdpbGwtdXBkYXRlIChmbiBbdGhpcyBuZXctYXJndiBuZXctc3RhdGVdKVxuICAgOlVOU0FGRV9jb21wb25lbnQtd2lsbC1tb3VudCAoZm4gW3RoaXNdKX1cbiAgYGBgXG5cbiAgRXZlcnl0aGluZyBpcyBvcHRpb25hbCwgZXhjZXB0IGVpdGhlciA6cmVhZ2VudC1yZW5kZXIgb3IgOnJlbmRlci5cblxuICBNYXAga2V5cyBzaG91bGQgdXNlIGBSZWFjdC5Db21wb25lbnRgIG1ldGhvZCBuYW1lcyAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWNvbXBvbmVudC5odG1sKSxcbiAgYW5kIGNhbiBiZSBwcm92aWRlZCBpbiBzbmFrZS1jYXNlIG9yIGNhbWVsQ2FzZS5cblxuICBTdGF0ZSBjYW4gYmUgaW5pdGlhbGl6ZWQgdXNpbmcgY29uc3RydWN0b3IsIHdoaWNoIG1hdGNoZXMgUmVhY3QuQ29tcG9uZW50IGNsYXNzLFxuICBvciB1c2luZyBnZXRJbml0aWFsU3RhdGUgd2hpY2ggbWF0Y2hlcyBvbGQgUmVhY3QgY3JlYXRlQ2xhc3MgZnVuY3Rpb24gYW5kIGlzXG4gIG5vdyBpbXBsZW1lbnRlZCBieSBSZWFnZW50IGZvciBjb21wYXRpYmlsaXR5LlxuXG4gIFN0YXRlIGNhbiB1c3VhbGx5IGJlIGFueXRoaW5nLCBlLmcuIENsanMgb2JqZWN0LiBCdXQgaWYgdXNpbmcgZ2V0RGVyaXZlZFN0YXRlXG4gIG1ldGhvZHMsIHRoZSBzdGF0ZSBoYXMgdG8gYmUgcGxhaW4gSlMgb2JqZWN0IGFzIFJlYWN0IGltcGxlbWVudGF0aW9uIHVzZXNcbiAgT2JqZWN0LmFzc2lnbiB0byBtZXJnZSBwYXJ0aWFsIHN0YXRlIGludG8gdGhlIGN1cnJlbnQgc3RhdGUuXG5cbiAgUmVhY3QgYnVpbHQtaW4gc3RhdGljIG1ldGhvZHMgb3IgcHJvcGVydGllcyBhcmUgYXV0b21hdGljYWxseSBkZWZpbmVkIGFzIHN0YXRpY3MuXCJcbiAgKFtzcGVjXVxuICAgKGNvbXAvY3JlYXRlLWNsYXNzIHNwZWMgdG1wbC9kZWZhdWx0LWNvbXBpbGVyKSlcbiAgKFtzcGVjIGNvbXBpbGVyXVxuICAgKGNvbXAvY3JlYXRlLWNsYXNzIHNwZWMgY29tcGlsZXIpKSlcblxuXG4oZGVmbiBjdXJyZW50LWNvbXBvbmVudFxuICBcIlJldHVybnMgdGhlIGN1cnJlbnQgUmVhY3QgY29tcG9uZW50IChhLmsuYSBgdGhpc2ApIGluIGEgY29tcG9uZW50XG4gIGZ1bmN0aW9uLlwiXG4gIFtdXG4gIGNvbXAvKmN1cnJlbnQtY29tcG9uZW50KilcblxuKGRlZm4gc3RhdGUtYXRvbVxuICBcIlJldHVybnMgYW4gYXRvbSBjb250YWluaW5nIGEgY29tcG9uZW50cyBzdGF0ZS5cIlxuICBbdGhpc11cbiAgKGFzc2VydC1jb21wb25lbnQgdGhpcylcbiAgKGNvbXAvc3RhdGUtYXRvbSB0aGlzKSlcblxuKGRlZm4gc3RhdGVcbiAgXCJSZXR1cm5zIHRoZSBzdGF0ZSBvZiBhIGNvbXBvbmVudCwgYXMgc2V0IHdpdGggcmVwbGFjZS1zdGF0ZSBvciBzZXQtc3RhdGUuXG4gIEVxdWl2YWxlbnQgdG8gYChkZXJlZiAoci9zdGF0ZS1hdG9tIHRoaXMpKWBcIlxuICBbdGhpc11cbiAgKGFzc2VydC1jb21wb25lbnQgdGhpcylcbiAgKGRlcmVmIChzdGF0ZS1hdG9tIHRoaXMpKSlcblxuKGRlZm4gcmVwbGFjZS1zdGF0ZVxuICBcIlNldCBzdGF0ZSBvZiBhIGNvbXBvbmVudC5cbiAgRXF1aXZhbGVudCB0byBgKHJlc2V0ISAoc3RhdGUtYXRvbSB0aGlzKSBuZXctc3RhdGUpYFwiXG4gIFt0aGlzIG5ldy1zdGF0ZV1cbiAgKGFzc2VydC1jb21wb25lbnQgdGhpcylcbiAgKGFzc2VydC1uZXctc3RhdGUgbmV3LXN0YXRlKVxuICAocmVzZXQhIChzdGF0ZS1hdG9tIHRoaXMpIG5ldy1zdGF0ZSkpXG5cbihkZWZuIHNldC1zdGF0ZVxuICBcIk1lcmdlIGNvbXBvbmVudCBzdGF0ZSB3aXRoIG5ldy1zdGF0ZS5cbiAgRXF1aXZhbGVudCB0byBgKHN3YXAhIChzdGF0ZS1hdG9tIHRoaXMpIG1lcmdlIG5ldy1zdGF0ZSlgXCJcbiAgW3RoaXMgbmV3LXN0YXRlXVxuICAoYXNzZXJ0LWNvbXBvbmVudCB0aGlzKVxuICAoYXNzZXJ0LW5ldy1zdGF0ZSBuZXctc3RhdGUpXG4gIChzd2FwISAoc3RhdGUtYXRvbSB0aGlzKSBtZXJnZSBuZXctc3RhdGUpKVxuXG4oZGVmbiBmb3JjZS11cGRhdGVcbiAgXCJGb3JjZSBhIGNvbXBvbmVudCB0byByZS1yZW5kZXIgaW1tZWRpYXRlbHkuXG5cbiAgSWYgdGhlIHNlY29uZCBhcmd1bWVudCBpcyB0cnVlLCBjaGlsZCBjb21wb25lbnRzIHdpbGwgYWxzbyBiZVxuICByZS1yZW5kZXJlZCwgZXZlbiBpcyB0aGVpciBhcmd1bWVudHMgaGF2ZSBub3QgY2hhbmdlZC5cIlxuICAoW3RoaXNdXG4gICAoZm9yY2UtdXBkYXRlIHRoaXMgZmFsc2UpKVxuICAoW3RoaXMgZGVlcF1cbiAgIChyYXRvbS9mbHVzaCEpXG4gICAodXRpbC9mb3JjZS11cGRhdGUgdGhpcyBkZWVwKVxuICAgKGJhdGNoL2ZsdXNoLWFmdGVyLXJlbmRlcikpKVxuXG4oZGVmbiBwcm9wc1xuICBcIlJldHVybnMgdGhlIHByb3BzIHBhc3NlZCB0byBhIGNvbXBvbmVudC5cIlxuICBbdGhpc11cbiAgKGFzc2VydC1jb21wb25lbnQgdGhpcylcbiAgKGNvbXAvZ2V0LXByb3BzIHRoaXMpKVxuXG4oZGVmbiBjaGlsZHJlblxuICBcIlJldHVybnMgdGhlIGNoaWxkcmVuIHBhc3NlZCB0byBhIGNvbXBvbmVudC5cIlxuICBbdGhpc11cbiAgKGFzc2VydC1jb21wb25lbnQgdGhpcylcbiAgKGNvbXAvZ2V0LWNoaWxkcmVuIHRoaXMpKVxuXG4oZGVmbiBhcmd2XG4gIFwiUmV0dXJucyB0aGUgZW50aXJlIEhpY2N1cCBmb3JtIHBhc3NlZCB0byB0aGUgY29tcG9uZW50LlwiXG4gIFt0aGlzXVxuICAoYXNzZXJ0LWNvbXBvbmVudCB0aGlzKVxuICAoY29tcC9nZXQtYXJndiB0aGlzKSlcblxuKGRlZm4gY2xhc3MtbmFtZXNcbiAgXCJGdW5jdGlvbiB3aGljaCBub3JtYWxpemVzIGFuZCBjb21iaW5lcyBjbGFzcyB2YWx1ZXMgdG8gYSBzdHJpbmdcblxuICBSZWFnZW50IGFsbG93cyBjbGFzc2VzIHRvIGJlIGRlZmluZWQgYXM6XG4gIC0gU3RyaW5nc1xuICAtIE5hbWVkIG9iamVjdHMgKFN5bWJvbHMgb3IgS2V5d29yZHMpXG4gIC0gQ29sbGVjdGlvbnMgb2YgcHJldmlvdXMgdHlwZXNcIlxuICAoW10pXG4gIChbY2xhc3NdICh1dGlsL2NsYXNzLW5hbWVzIGNsYXNzKSlcbiAgKFtjbGFzczEgY2xhc3MyXSAodXRpbC9jbGFzcy1uYW1lcyBjbGFzczEgY2xhc3MyKSlcbiAgKFtjbGFzczEgY2xhc3MyICYgb3RoZXJzXSAoYXBwbHkgdXRpbC9jbGFzcy1uYW1lcyBjbGFzczEgY2xhc3MyIG90aGVycykpKVxuXG4oZGVmbiBtZXJnZS1wcm9wc1xuICBcIlV0aWxpdHkgZnVuY3Rpb24gdGhhdCBtZXJnZXMgc29tZSBtYXBzLCBoYW5kbGluZyBgOmNsYXNzYCBhbmQgYDpzdHlsZWAuXG5cbiAgVGhlIDpjbGFzcyB2YWx1ZSBpcyBhbHdheXMgbm9ybWFsaXplZCAodXNpbmcgYGNsYXNzLW5hbWVzYCkgZXZlbiBpZiBub1xuICBtZXJnaW5nIGlzIGRvbmUuXCJcbiAgKFtdICh1dGlsL21lcmdlLXByb3BzKSlcbiAgKFtkZWZhdWx0c10gKHV0aWwvbWVyZ2UtcHJvcHMgZGVmYXVsdHMpKVxuICAoW2RlZmF1bHRzIHByb3BzXSAodXRpbC9tZXJnZS1wcm9wcyBkZWZhdWx0cyBwcm9wcykpXG4gIChbZGVmYXVsdHMgcHJvcHMgJiBvdGhlcnNdIChhcHBseSB1dGlsL21lcmdlLXByb3BzIGRlZmF1bHRzIHByb3BzIG90aGVycykpKVxuXG4oZGVmbiBmbHVzaFxuICBcIlJlbmRlciBkaXJ0eSBjb21wb25lbnRzIGltbWVkaWF0ZWx5LlxuXG4gIE5vdGUgdGhhdCB0aGlzIG1heSBub3Qgd29yayBpbiBldmVudCBoYW5kbGVycywgc2luY2UgUmVhY3QuanMgZG9lc1xuICBiYXRjaGluZyBvZiB1cGRhdGVzIHRoZXJlLlwiXG4gIFtdXG4gIChiYXRjaC9mbHVzaCkpXG5cbjs7IFJhdG9tXG5cbihkZWZuIGF0b21cbiAgXCJMaWtlIGNsb2p1cmUuY29yZS9hdG9tLCBleGNlcHQgdGhhdCBpdCBrZWVwcyB0cmFjayBvZiBkZXJlZnMuXG4gIFJlYWdlbnQgY29tcG9uZW50cyB0aGF0IGRlcmVmcyBvbmUgb2YgdGhlc2UgYXJlIGF1dG9tYXRpY2FsbHlcbiAgcmUtcmVuZGVyZWQuXCJcbiAgKFt4XSAocmF0b20vYXRvbSB4KSlcbiAgKFt4ICYgcmVzdF0gKGFwcGx5IHJhdG9tL2F0b20geCByZXN0KSkpXG5cbihkZWZuIHRyYWNrXG4gIFwiVGFrZXMgYSBmdW5jdGlvbiBhbmQgb3B0aW9uYWwgYXJndW1lbnRzLCBhbmQgcmV0dXJucyBhIGRlcmVmYWJsZVxuICBjb250YWluaW5nIHRoZSBvdXRwdXQgb2YgdGhhdCBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIGRlcmVmc1xuICBSZWFnZW50IGF0b21zIChvciB0cmFjaywgZXRjKSwgdGhlIHZhbHVlIHdpbGwgYmUgdXBkYXRlZCB3aGVuZXZlclxuICB0aGUgYXRvbSBjaGFuZ2VzLlxuXG4gIEluIG90aGVyIHdvcmRzLCBgQCh0cmFjayBmb28gYmFyKWAgd2lsbCBwcm9kdWNlIHRoZSBzYW1lIHJlc3VsdFxuICBhcyBgKGZvbyBiYXIpYCwgYnV0IGZvbyB3aWxsIG9ubHkgYmUgY2FsbGVkIGFnYWluIHdoZW4gdGhlIGF0b21zIGl0XG4gIGRlcGVuZHMgb24gY2hhbmdlcywgYW5kIHdpbGwgb25seSB0cmlnZ2VyIHVwZGF0ZXMgb2YgY29tcG9uZW50cyB3aGVuXG4gIGl0cyByZXN1bHQgY2hhbmdlcy5cblxuICB0cmFjayBpcyBsYXp5LCBpLmUgdGhlIGZ1bmN0aW9uIGlzIG9ubHkgZXZhbHVhdGVkIG9uIGRlcmVmLlwiXG4gIFtmICYgYXJnc11cbiAgezpwcmUgWyhpZm4/IGYpXX1cbiAgKHJhdG9tL21ha2UtdHJhY2sgZiBhcmdzKSlcblxuKGRlZm4gdHJhY2shXG4gIFwiQW4gZWFnZXIgdmVyc2lvbiBvZiB0cmFjay4gVGhlIGZ1bmN0aW9uIHBhc3NlZCBpcyBjYWxsZWRcbiAgaW1tZWRpYXRlbHksIGFuZCBjb250aW51ZXMgdG8gYmUgY2FsbGVkIHdoZW4gbmVlZGVkLCB1bnRpbCBzdG9wcGVkXG4gIHdpdGggZGlzcG9zZSEuXCJcbiAgW2YgJiBhcmdzXVxuICB7OnByZSBbKGlmbj8gZildfVxuICAocmF0b20vbWFrZS10cmFjayEgZiBhcmdzKSlcblxuKGRlZm4gZGlzcG9zZSFcbiAgXCJTdG9wIHRoZSByZXN1bHQgb2YgdHJhY2shIGZyb20gdXBkYXRpbmcuXCJcbiAgW3hdXG4gIChyYXRvbS9kaXNwb3NlISB4KSlcblxuKGRlZm4gd3JhcFxuICBcIlByb3ZpZGUgYSBjb21iaW5hdGlvbiBvZiB2YWx1ZSBhbmQgY2FsbGJhY2ssIHRoYXQgbG9va3MgbGlrZSBhbiBhdG9tLlxuXG4gIFRoZSBmaXJzdCBhcmd1bWVudCBjYW4gYmUgYW55IHZhbHVlLCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgd2hlbiB0aGVcbiAgcmVzdWx0IGlzIGRlcmVmJ2VkLlxuXG4gIFRoZSBzZWNvbmQgYXJndW1lbnQgc2hvdWxkIGJlIGEgZnVuY3Rpb24sIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlXG4gIG9wdGlvbmFsIGV4dHJhIGFyZ3VtZW50cyBwcm92aWRlZCB0byB3cmFwLCBhbmQgdGhlIG5ldyB2YWx1ZSBvZiB0aGVcbiAgcmVzdWx0aW5nICdhdG9tJy5cblxuICBVc2UgZm9yIGV4YW1wbGUgbGlrZSB0aGlzOlxuXG4gIGBgYGNsanNcbiAgKHdyYXAgKDpmb28gQHN0YXRlKVxuICAgICAgICBzd2FwISBzdGF0ZSBhc3NvYyA6Zm9vKVxuICBgYGBcblxuICBQcm9iYWJseSB1c2VmdWwgb25seSBmb3IgcGFzc2luZyB0byBjaGlsZCBjb21wb25lbnRzLlwiXG4gIFt2YWx1ZSByZXNldC1mbiAmIGFyZ3NdXG4gIChhc3NlcnQtY2FsbGFibGUgcmVzZXQtZm4pXG4gIChyYXRvbS9tYWtlLXdyYXBwZXIgdmFsdWUgcmVzZXQtZm4gYXJncykpXG5cblxuOzsgUkN1cnNvclxuXG4oZGVmbiBjdXJzb3JcbiAgXCJQcm92aWRlIGEgY3Vyc29yIGludG8gYSBSZWFnZW50IGF0b20uXG5cbiAgQmVoYXZlcyBsaWtlIGEgUmVhZ2VudCBhdG9tIGJ1dCBmb2N1c2VzIHVwZGF0ZXMgYW5kIGRlcmVmcyB0b1xuICB0aGUgc3BlY2lmaWVkIHBhdGggd2l0aGluIHRoZSB3cmFwcGVkIFJlYWdlbnQgYXRvbS4gZS5nLixcblxuICBgYGBjbGpzXG4gIChsZXQgW2MgKGN1cnNvciByYSBbOm5lc3RlZCA6Y29udGVudF0pXVxuICAgIC4uLiBAYyA7OyBlcXVpdmFsZW50IHRvIChnZXQtaW4gQHJhIFs6bmVzdGVkIDpjb250ZW50XSlcbiAgICAuLi4gKHJlc2V0ISBjIDQyKSA7OyBlcXVpdmFsZW50IHRvIChzd2FwISByYSBhc3NvYy1pbiBbOm5lc3RlZCA6Y29udGVudF0gNDIpXG4gICAgLi4uIChzd2FwISBjIGluYykgOzsgZXF1aXZhbGVuY2UgdG8gKHN3YXAhIHJhIHVwZGF0ZS1pbiBbOm5lc3RlZCA6Y29udGVudF0gaW5jKVxuICAgIClcbiAgYGBgXG5cbiAgVGhlIGZpcnN0IHBhcmFtZXRlciBjYW4gYWxzbyBiZSBhIGZ1bmN0aW9uLCB0aGF0IHNob3VsZCBsb29rXG4gIHNvbWV0aGluZyBsaWtlIHRoaXM6XG5cbiAgYGBgY2xqc1xuICAoZGVmbiBzZXQtZ2V0XG4gICAgKFtrXSAoZ2V0LWluIEBzdGF0ZSBrKSlcbiAgICAoW2sgdl0gKHN3YXAhIHN0YXRlIGFzc29jLWluIGsgdikpKVxuICBgYGBcblxuICBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCBvbmUgYXJndW1lbnQg4oCTIHRoZSBwYXRoIHBhc3NlZCB0b1xuICBjdXJzb3Ig4oCTIHdoZW4gdGhlIGN1cnNvciBpcyBkZXJlZidlZCwgYW5kIHR3byBhcmd1bWVudHMgKHBhdGggYW5kXG4gIG5ldyB2YWx1ZSkgd2hlbiB0aGUgY3Vyc29yIGlzIG1vZGlmaWVkLlxuXG4gIEdpdmVuIHRoYXQgc2V0LWdldCBmdW5jdGlvbiwgKGFuZCB0aGF0IHN0YXRlIGlzIGEgUmVhZ2VudCBhdG9tLCBvclxuICBhbm90aGVyIGN1cnNvcikgdGhlc2UgY3Vyc29ycyBhcmUgZXF1aXZhbGVudDpcbiAgYChjdXJzb3Igc3RhdGUgWzpmb29dKWAgYW5kIGAoY3Vyc29yIHNldC1nZXQgWzpmb29dKWAuXG5cbiAgTm90ZSB0aGF0IGEgY3Vyc29yIGlzIGxhenk6IGl0cyB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UgdW50aWwgaXQgaXNcbiAgdXNlZC4gVGhpcyBtYXkgYmUgbm90aWNlZCB3aXRoIGFkZC13YXRjaC5cIlxuICAoW3NyYyBwYXRoXVxuICAgKHJhdG9tL2N1cnNvciBzcmMgcGF0aCkpKVxuXG5cbjs7IFV0aWxpdGllc1xuXG4oZGVmbiByc3dhcCFcbiAgXCJTd2FwcyB0aGUgdmFsdWUgb2YgYSB0byBiZSBgKGFwcGx5IGYgY3VycmVudC12YWx1ZS1vZi1hdG9tIGFyZ3MpYC5cblxuICByc3dhcCEgd29ya3MgbGlrZSBzd2FwISwgZXhjZXB0IHRoYXQgcmVjdXJzaXZlIGNhbGxzIHRvIHJzd2FwISBvblxuICB0aGUgc2FtZSBhdG9tIGFyZSBhbGxvd2VkIOKAkyBhbmQgaXQgYWx3YXlzIHJldHVybnMgbmlsLlwiXG4gIFthIGYgJiBhcmdzXVxuICB7OnByZSBbKHNhdGlzZmllcz8gSUF0b20gYSlcbiAgICAgICAgIChpZm4/IGYpXX1cbiAgKGlmICguLXJzd2FwcGluZyBhKVxuICAgICgtPiAob3IgKC4tcnN3YXBmcyBhKVxuICAgICAgICAgICAgKHNldCEgKC4tcnN3YXBmcyBhKSAoYXJyYXkpKSlcbiAgICAgICAgKC5wdXNoICMoYXBwbHkgZiAlIGFyZ3MpKSlcbiAgICAoZG8gKHNldCEgKC4tcnN3YXBwaW5nIGEpIHRydWUpXG4gICAgICAgICh0cnkgKHN3YXAhIGEgKGZuIFtzdGF0ZV1cbiAgICAgICAgICAgICAgICAgICAgICAgIChsb29wIFtzIChhcHBseSBmIHN0YXRlIGFyZ3MpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAoaWYtc29tZSBbc2YgKHNvbWUtPiBhIC4tcnN3YXBmcyAuc2hpZnQpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZWN1ciAoc2YgcykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcykpKSlcbiAgICAgICAgICAgICAoZmluYWxseVxuICAgICAgICAgICAgICAgKHNldCEgKC4tcnN3YXBwaW5nIGEpIGZhbHNlKSkpKSlcbiAgbmlsKVxuXG4oZGVmbiBuZXh0LXRpY2tcbiAgXCJSdW4gZiB1c2luZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb3IgZXF1aXZhbGVudC5cblxuICBmIHdpbGwgYmUgY2FsbGVkIGp1c3QgYmVmb3JlIGNvbXBvbmVudHMgYXJlIHJlbmRlcmVkLlwiXG4gIFtmXVxuICAoYmF0Y2gvZG8tYmVmb3JlLWZsdXNoIGYpKVxuXG4oZGVmbiBhZnRlci1yZW5kZXJcbiAgXCJSdW4gZiB1c2luZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgb3IgZXF1aXZhbGVudC5cblxuICBmIHdpbGwgYmUgY2FsbGVkIGp1c3QgYWZ0ZXIgYW55IHF1ZXVlZCByZW5kZXJzIGluIHRoZSBuZXh0IGFuaW1hdGlvblxuICBmcmFtZSAoYW5kIGV2ZW4gaWYgbm8gcmVuZGVycyBhY3R1YWxseSBvY2N1cikuXCJcbiAgW2ZdXG4gIChiYXRjaC9kby1hZnRlci1yZW5kZXIgZikpXG5cbihkZWZuIHBhcnRpYWxcbiAgXCJXb3JrcyBqdXN0IGxpa2UgY2xvanVyZS5jb3JlL3BhcnRpYWwsIGJ1dCB0aGUgcmVzdWx0IGNhbiBiZSBjb21wYXJlZCB3aXRoID1cIlxuICBbZiAmIGFyZ3NdXG4gICh1dGlsL21ha2UtcGFydGlhbC1mbiBmIGFyZ3MpKVxuXG4oZGVmbiBjcmVhdGUtY29tcGlsZXJcbiAgXCJDcmVhdGVzIENvbXBpbGVyIG9iamVjdCB3aXRoIGdpdmVuIGBvcHRzYCxcbiAgdGhpcyBjYW4gYmUgcGFzc2VkIHRvIGByZW5kZXJgLCBgYXMtZWxlbWVudGAgYW5kIG90aGVyIGZ1bmN0aW9ucyB0byBjb250cm9sXG4gIGhvdyB0aGV5IHR1cm4gdGhlIFJlYWdlbnQtc3R5bGUgSGljY3VwIGludG8gUmVhY3QgY29tcG9uZW50cyBhbmQgZWxlbWVudHMuXCJcbiAgW29wdHNdXG4gICh0bXBsL2NyZWF0ZS1jb21waWxlciBvcHRzKSlcblxuKGRlZm4gc2V0LWRlZmF1bHQtY29tcGlsZXIhXG4gIFwiR2xvYmFsbHkgc2V0cyB0aGUgQ29tcGlsZXIgb2JqZWN0IHVzZWQgYnkgYHJlbmRlcmAsIGBhcy1lbGVtZW50YCBhbmQgb3RoZXJcbiAgY2FsbHMgYnkgZGVmYXVsdCwgd2hlbiBubyBgY29tcGlsZXJgIHBhcmFtZXRlciBpcyBwcm92aWRlZC5cblxuICBVc2UgYG5pbGAgdmFsdWUgdG8gcmVzdG9yZSB0aGUgb3JpZ2luYWwgZGVmYXVsdCBjb21waWxlci5cIlxuICBbY29tcGlsZXJdXG4gICh0bXBsL3NldC1kZWZhdWx0LWNvbXBpbGVyISAoaWYgKG5pbD8gY29tcGlsZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcGwvZGVmYXVsdC1jb21waWxlcipcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGlsZXIpKSlcbiJdfQ==